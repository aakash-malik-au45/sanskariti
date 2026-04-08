import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFile = path.join(__dirname, 'data.json')
const port = Number(process.env.PORT || 3001)

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  })
  response.end(JSON.stringify(payload))
}

async function readData() {
  const raw = await fs.readFile(dataFile, 'utf8')
  return JSON.parse(raw)
}

async function writeData(nextData) {
  await fs.writeFile(dataFile, JSON.stringify(nextData, null, 2))
}

async function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk
    })
    request.on('end', () => {
      if (!body) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(body))
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })
    request.on('error', reject)
  })
}

function validateUpdate(payload) {
  if (!payload.title || !payload.date || !payload.category) {
    return 'title, date, and category are required'
  }

  if (!['hot', 'cool'].includes(payload.status)) {
    return 'status must be "hot" or "cool"'
  }

  return ''
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`)
  const pathname = url.pathname

  if (request.method === 'OPTIONS') {
    sendJson(response, 204, {})
    return
  }

  try {
    if (request.method === 'GET' && pathname === '/api/health') {
      sendJson(response, 200, { ok: true })
      return
    }

    if (request.method === 'GET' && pathname === '/api/updates') {
      const data = await readData()
      sendJson(response, 200, data.updates)
      return
    }

    if (request.method === 'POST' && pathname === '/api/updates') {
      const payload = await readBody(request)
      const message = validateUpdate(payload)
      if (message) {
        sendJson(response, 400, { error: message })
        return
      }

      const data = await readData()
      const update = {
        id: `upd_${Date.now()}`,
        title: payload.title.trim(),
        date: payload.date,
        category: payload.category.trim(),
        status: payload.status,
      }

      data.updates.unshift(update)
      await writeData(data)
      sendJson(response, 201, update)
      return
    }

    if (pathname.startsWith('/api/updates/')) {
      const id = pathname.split('/').pop()
      const data = await readData()
      const index = data.updates.findIndex((update) => update.id === id)

      if (index === -1) {
        sendJson(response, 404, { error: 'Update not found' })
        return
      }

      if (request.method === 'PUT') {
        const payload = await readBody(request)
        const message = validateUpdate(payload)
        if (message) {
          sendJson(response, 400, { error: message })
          return
        }

        data.updates[index] = {
          ...data.updates[index],
          title: payload.title.trim(),
          date: payload.date,
          category: payload.category.trim(),
          status: payload.status,
        }

        await writeData(data)
        sendJson(response, 200, data.updates[index])
        return
      }

      if (request.method === 'DELETE') {
        const [removed] = data.updates.splice(index, 1)
        await writeData(data)
        sendJson(response, 200, removed)
        return
      }
    }

    if (request.method === 'POST' && pathname === '/api/admissions') {
      const payload = await readBody(request)
      const requiredFields = ['name', 'mobile', 'email', 'state', 'program']
      const missingField = requiredFields.find((field) => !payload[field]?.trim?.() && !payload[field])

      if (missingField) {
        sendJson(response, 400, { error: `${missingField} is required` })
        return
      }

      const data = await readData()
      const submission = {
        id: `adm_${Date.now()}`,
        name: payload.name.trim(),
        mobile: payload.mobile.trim(),
        email: payload.email.trim(),
        state: payload.state,
        program: payload.program,
        submittedAt: new Date().toISOString(),
      }

      data.admissions.unshift(submission)
      await writeData(data)
      sendJson(response, 201, submission)
      return
    }

    sendJson(response, 404, { error: 'Route not found' })
  } catch (error) {
    sendJson(response, 500, { error: error.message || 'Internal server error' })
  }
})

server.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`)
})
