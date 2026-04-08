// import { useState } from 'react'
// import './App.css'
// import logo from './assets/pdf/logo.png'
// import highlightMain from './assets/pdf/highlight_main.png'
// import highlightOne from './assets/pdf/highlight_1.png'
// import highlightTwo from './assets/pdf/highlight_2.png'
// import highlightThree from './assets/pdf/highlight_3.png'
// import chooseOne from './assets/pdf/choose_1.png'
// import chooseTwo from './assets/pdf/choose_2.png'
// import researchMain from './assets/pdf/research_main.png'
// import researchBio from './assets/pdf/research_bio.png'
// import researchQuantum from './assets/pdf/research_quantum.png'
// import newsOne from './assets/pdf/news_1.png'
// import newsTwo from './assets/pdf/news_2.png'
// import newsThree from './assets/pdf/news_3.png'
// import lifeOne from './assets/pdf/life_1.png'
// import lifeTwo from './assets/pdf/life_2.png'
// import lifeThree from './assets/pdf/life_3.png'
// import avatarOne from './assets/pdf/avatar_1.png'
// import avatarTwo from './assets/pdf/avatar_2.png'
// import avatarThree from './assets/pdf/avatar_3.png'
// import chancellor from './assets/pdf/chancellor.png'

// const storyFilters = ['All', 'Academics', 'Culture', 'Sports', 'Innovation']
// const testimonialTabs = ['Students', 'Parents', 'Alumni']

// const rankingCards = [
//   ['Rank 8th', 'Top Higher Ed Institute in India', 'cream'],
//   ['Rank 1st', 'Emerging Management Institute', 'blue'],
//   ['AAA+', 'Best B-School Rating 2023-24', 'lavender'],
//   ['Rank 3rd', 'Among Pvt Universities in UP', 'rose'],
// ]

// const sideStories = [
//   [highlightOne, 'Culture', '15 Sep 2024', 'Harmony in Diversity: Annual Cultural Fest'],
//   [highlightTwo, 'Sports', '20 Nov 2024', 'Championship Victory: Football Finals'],
//   [highlightThree, 'Innovation', '05 Dec 2024', 'Innovation Fair: Robotics & AI'],
// ]

// const updates = [
//   ['Dec 15, 2024', 'Ph.D. Entrance Exam 2025 Applications Open', 'Admission', 'hot'],
//   ['Dec 12, 2024', 'Semester End Examinations Schedule Released', 'Exam', 'hot'],
//   ['Dec 10, 2024', 'Winter Break Notification for All Departments', 'Notice', 'cool'],
//   ['Dec 08, 2024', 'Guest Lecture by CEO of TechMahindra - Reg Open', 'Event', 'cool'],
//   ['Dec 05, 2024', 'Library Hours Extended for Exam Preparation', 'Facility', 'cool'],
// ]

// const numberCards = [
//   ['95%', 'Placement Rate', 'blue'],
//   ['54L', 'Highest Package', 'gold'],
//   ['2500+', 'Research Papers', 'purple'],
//   ['300+', 'Recruiters', 'green'],
// ]

// const recruiters = ['TCS', 'Wipro', 'HCL', 'IBM', 'Accenture', 'Deloitte', 'Capgemini', 'Cognizant', 'Tech Mahindra']
// const reasons = ['World-class Infrastructure', 'Highly Qualified Faculty', 'Industry Oriented Curriculum', 'Excellent Placement Record', 'Focus on Innovation & Research']
// const chooseCards = [
//   [chooseOne, '30+ International Ties', 'Collaborations with foreign universities for student exchange programs.'],
//   [chooseTwo, 'Interactive Pedagogy', 'Project-based learning and case studies for practical understanding.'],
// ]

// const researchStats = [['2,500+', 'Research Papers'], ['2,700+', 'Patents Filed'], ['30+', 'Books Published'], ['12M+', 'Research Grants']]
// const researchCards = [
//   [researchMain, 'Advanced AI & Robotics', 'Pioneering autonomous systems and machine learning algorithms.', true],
//   [researchBio, 'Bio-Genetics', 'Unlocking the secrets of life through genomic research.', false],
//   [researchQuantum, 'Quantum Computing', 'Next-gen processing power for complex problem solving.', false],
// ]

// const newsCards = [
//   [newsOne, 'The Times of India', 'Sanskriti University Ranked Top in Innovation', 'Dec 12, 2024'],
//   [newsTwo, 'Hindustan Times', 'New Research Center Inaugurated by Education Minister', 'Nov 28, 2024'],
//   [newsThree, 'Education World', 'University Wins National Excellence Award 2024', 'Oct 15, 2024'],
// ]

// const lifeCards = [[lifeOne, 'Annual Sports Meet'], [lifeTwo, 'Convocation Ceremony'], [lifeThree, 'Cultural Night']]
// const testimonials = {
//   Students: [
//     [avatarOne, 5, 'The practical exposure here is unmatched. The labs are state-of-the-art and the faculty truly cares about our growth.', 'Aarav Patel', 'B.Tech CS, 3rd Year'],
//     [avatarTwo, 5, 'Sanskriti University gave me the confidence to lead. The campus life is vibrant and full of opportunities.', 'Priya Sharma', 'MBA, Final Year'],
//     [avatarThree, 4, "Amazing infrastructure and supportive environment. I've made friends for life and learned so much.", 'Rohan Gupta', 'B.Sc Biotechnology'],
//   ],
//   Parents: [
//     [avatarOne, 5, 'We saw our child become more confident, disciplined, and future-ready within a year of joining the university.', 'Neha Patel', 'Parent of B.Tech Student'],
//     [avatarTwo, 5, 'The faculty communication and campus support have been excellent. It feels like a caring academic community.', 'Sanjay Sharma', 'Parent of MBA Student'],
//     [avatarThree, 4, 'Placement focus and exposure opportunities stood out to us. We feel the university is serious about outcomes.', 'Ritu Gupta', 'Parent of B.Sc Student'],
//   ],
//   Alumni: [
//     [avatarOne, 5, 'The interdisciplinary approach at Sanskriti helped me transition smoothly into a product engineering role.', 'Karan Malhotra', 'Alumnus, Class of 2022'],
//     [avatarTwo, 5, 'What still stands out is the mentorship. Faculty pushed us to think bigger and build with confidence.', 'Shruti Verma', 'Alumna, Class of 2021'],
//     [avatarThree, 4, 'From internships to public speaking, campus life gave me the tools I now use every day in my career.', 'Abhishek Nair', 'Alumnus, Class of 2020'],
//   ],
// }

// function Rating({ value }) {
//   return (
//     <div className="rating" aria-label={`${value} star rating`}>
//       {Array.from({ length: 5 }, (_, index) => <span key={index} className={index < value ? 'filled' : ''}>★</span>)}
//     </div>
//   )
// }

// function App() {
//   const [storyFilter, setStoryFilter] = useState('All')
//   const [testimonialTab, setTestimonialTab] = useState('Students')
//   const visibleStories = storyFilter === 'All' ? sideStories : sideStories.filter((story) => story[1] === storyFilter)

//   return (
//     <main className="page-shell">
//       <section className="hero-section">
//         <div className="hero-noise" aria-hidden="true"></div>
//         <header className="topbar">
//           <img src={logo} alt="Sanskriti University" className="brand-logo" />
//           <nav className="nav-links" aria-label="Primary">
//             <a href="#about">About Us</a><a href="#academics">Academics</a><a href="#admissions">Admissions</a><a href="#international">International</a><a href="#life">Life @ SU</a><a href="#placements">Placement</a><a href="#research">Research</a>
//           </nav>
//           <button className="cta-button" type="button">Apply Now</button>
//         </header>

//         <div className="hero-grid">
//           <div className="hero-copy" id="about">
//             <h1>Crafting <span>Visionaries</span></h1>
//             <p className="hero-lead">An ecosystem of excellence where cutting-edge research meets creative freedom. Redefine what&apos;s possible with our interdisciplinary approach.</p>
//             <div className="hero-stats">
//               {['500+|Patents Filed', '98%|Placement Rate', '#1|In Innovation'].map((item) => {
//                 const [value, label] = item.split('|')
//                 return <div key={label}><strong>{value}</strong><span>{label}</span></div>
//               })}
//             </div>
//             <button className="ghost-button" type="button">View Programs</button>
//           </div>
//           <div className="hero-form-wrap" id="admissions">
//             <div className="hero-form-frame">
//               <div className="frame-header"><span>Fast Track</span><small>APP-2025-V1</small></div>
//               <form className="admission-form">
//                 <h2>Admissions Open 2025</h2>
//                 <p>Take the first step towards your career</p>
//                 <div className="form-grid">
//                   <input type="text" placeholder="Name *" />
//                   <input type="tel" placeholder="Mobile *" />
//                   <input type="email" placeholder="Email *" />
//                   <select defaultValue="State *"><option disabled>State *</option><option>Uttar Pradesh</option><option>Delhi</option><option>Rajasthan</option></select>
//                   <select className="full-span" defaultValue="Select Program Interest *"><option disabled>Select Program Interest *</option><option>B.Tech</option><option>MBA</option><option>BBA</option><option>Ph.D.</option></select>
//                 </div>
//                 <button type="button" className="submit-button">Register Now</button>
//                 <small>By registering, you agree to receive communications from Sanskriti University.</small>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="trust-strip" id="placements">
//           <div className="trust-copy"><span>Trusted by industry leaders:</span></div>
//           <div className="trust-logos"><span>Google</span><span>Microsoft</span><span>Amazon</span><span>Tesla</span><span>NASA</span></div>
//         </div>

//         <div className="ranking-grid">
//           {rankingCards.map(([title, text, tone]) => <article key={title} className={`ranking-card ${tone}`}><div className="ranking-icon"></div><div><h3>{title}</h3><p>{text}</p></div></article>)}
//         </div>
//       </section>

//       <section className="stories-section">
//         <div className="section-head split">
//           <h2>Stories &amp; <span>Highlights.</span></h2>
//           <div className="pill-row">
//             {storyFilters.map((filter) => <button key={filter} type="button" className={storyFilter === filter ? 'pill active' : 'pill'} onClick={() => setStoryFilter(filter)}>{filter}</button>)}
//           </div>
//         </div>
//         <div className="stories-grid">
//           {/* <article className="feature-story" style={{ backgroundImage: `linear-gradient(180deg, rgba(5,10,34,0.08), rgba(5,10,34,0.92)), url(${highlightMain})` }}>
//             <div className="story-meta-row"><span className="story-chip featured">Featured</span><span className="story-date">12 Oct 2024</span></div>
//             <h3>Global Leadership Summit 2024: Shaping the Future</h3>
//             <p>Delegates from over 30 countries gathered to discuss sustainable development goals and the role of youth in global leadership.</p>
//           </article> */}
//           <div className="story-list">
//             {visibleStories.map(([image, tag, date, title]) => <article key={title} className="story-card"><img src={image} alt="" /><div><div className="story-card-meta"><span className="story-chip">{tag}</span><span>{date}</span></div><h3>{title}</h3><a href="/">Read more</a></div></article>)}
//           </div>
//         </div>
//       </section>

//       <section className="updates-section">
//         <div className="updates-grid">
//           <div className="updates-column">
//             <div className="section-head compact"><div className="section-icon">◔</div><div><h2>Latest Updates</h2><p>Stay informed with campus news</p></div></div>
//             <div className="timeline">
//               {updates.map(([date, title, category, status]) => <article key={title} className="timeline-item"><span className={`timeline-dot ${status}`}></span><div className="timeline-content"><div className="timeline-date-row"><time>{date}</time>{status === 'hot' && <em>New</em>}</div><h3>{title}</h3><span className="mini-tag">{category}</span></div></article>)}
//             </div>
//           </div>
//           <div className="numbers-column">
//             <span className="eyebrow">Why Choose Us</span>
//             <h2>Excellence in <span>Every Number</span></h2>
//             <p>Our commitment to quality education reflects in our achievements. Join a community that strives for greatness.</p>
//             <div className="numbers-grid">{numberCards.map(([value, label, tone]) => <article key={label} className={`number-card ${tone}`}><strong>{value}</strong><span>{label}</span></article>)}</div>
//           </div>
//         </div>
//       </section>

//       <section className="recruiters-strip"><div className="recruiters-head"><span>Our Top Recruiters</span></div><div className="recruiters-row">{recruiters.map((recruiter) => <span key={recruiter}>{recruiter}</span>)}</div></section>

//       <section className="why-section" id="academics">
//         <div className="section-head centered"><h2>Why Choose Sanskriti?</h2><p>Focus on holistic development, global exposure, and industry-aligned curriculum makes us the preferred choice.</p></div>
//         <div className="why-grid">
//           <article className="reasons-card"><h3>Top Reasons To Join SU</h3><ul>{reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul><button type="button" className="cta-button wide">Download Brochure</button></article>
//           {chooseCards.map(([image, title, text]) => <article key={title} className="why-card"><img src={image} alt="" /><div className="why-card-body"><div className="why-icon"></div><h3>{title}</h3><p>{text}</p></div></article>)}
//         </div>
//       </section>

//       <section className="research-section" id="research">
//         <div className="section-head dark"><h2>Cutting Edge <span>Research.</span></h2><p>We push the boundaries of knowledge. Our interdisciplinary approach fosters collaboration between brilliant minds to solve global challenges.</p></div>
//         <div className="research-stats">{researchStats.map(([value, label]) => <article key={label} className="research-stat"><div className="research-stat-icon"></div><strong>{value}</strong><span>{label}</span></article>)}</div>
//         <div className="research-grid">{researchCards.map(([image, title, text, feature]) => <article key={title} className={feature ? 'research-card feature' : 'research-card'} style={{ backgroundImage: `linear-gradient(180deg, rgba(4,8,28,0.2), rgba(4,8,28,0.88)), url(${image})` }}><div className="research-card-icon"></div><div className="research-card-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
//       </section>

//       <section className="news-section" id="international">
//         <div className="news-grid">
//           <article className="chancellor-card"><h2>Chancellor&apos;s Desk</h2><div className="chancellor-panel"><div className="chancellor-top"><img src={chancellor} alt="Dr. Sachin Gupta" /><div><h3>Dr. Sachin Gupta</h3><span>Chancellor</span></div></div><blockquote>Our mission is to create an environment that fosters intellectual curiosity and encourages students to challenge the status quo. We are committed to excellence in education and research.</blockquote></div></article>
//           <div className="news-column"><h2>In The News</h2><div className="news-cards">{newsCards.map(([image, source, title, date]) => <article key={title} className="news-card"><img src={image} alt="" /><div className="news-card-body"><span>{source}</span><h3>{title}</h3><time>{date}</time></div></article>)}</div></div>
//         </div>
//       </section>

//       <section className="life-section" id="life">
//         <div className="section-head"><h2>Life @ SU</h2></div>
//         <div className="life-grid">{lifeCards.map(([image, title]) => <article key={title} className="life-card"><img src={image} alt="" /><div className="life-overlay"><button type="button" className="play-button" aria-label={`Play ${title}`}>▶</button><h3>{title}</h3></div></article>)}</div>
//       </section>

//       <section className="testimonials-section">
//         <div className="section-head split">
//           <div><span className="eyebrow dark-pill">Testimonials</span><h2>Stories of <span className="gold-text">Transformation</span></h2><p>Hear from the people who make Sanskriti University a vibrant community of learners and achievers.</p></div>
//           <div className="pill-row dark-row">{testimonialTabs.map((tab) => <button key={tab} type="button" className={testimonialTab === tab ? 'pill gold active' : 'pill gold'} onClick={() => setTestimonialTab(tab)}>{tab}</button>)}</div>
//         </div>
//         <div className="testimonial-grid">{testimonials[testimonialTab].map(([avatar, rating, quote, name, role]) => <article key={name} className="testimonial-card"><div className="testimonial-top"><img src={avatar} alt="" /><span className="quote-mark">”</span></div><Rating value={rating} /><p>{quote}</p><div className="testimonial-footer"><h3>{name}</h3><span>{role}</span></div></article>)}</div>
//       </section>

//       <footer className="site-footer"><img src={logo} alt="Sanskriti University" className="footer-logo" /><p>Sanskriti University is dedicated to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.</p><small>© 2025 Sanskriti University. All Rights Reserved.</small></footer>
//     </main>
//   )
// }

// export default App
