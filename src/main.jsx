import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { owner, projects, certificates, skills } from './siteData';
import './styles.css';

const Arrow = ({ diagonal = false, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    {diagonal ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M4 12h16m-7-7 7 7-7 7" />}
  </svg>
);
const Icon = ({ name, size = 17 }) => {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
    spark: <><path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z" /></>,
    external: <><path d="M13 5h6v6M19 5 9 15" /><path d="M19 13v6H5V5h6" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
    check: <path d="m4 12 5 5L20 6" />,
    menu: <><path d="M3 7h18M3 12h18M3 17h18" /></>,
    close: <path d="M5 5 19 19M19 5 5 19" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};
const SectionLabel = ({ children }) => <div className="section-label"><span className="small-diamond" />{children}</div>;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const items = [['home', 'Home'], ['about', 'About'], ['portfolio', 'Portfolio'], ['contact', 'Contact']];
  return <header className="header">
    <a href="#home" className="brand" aria-label="Trở về đầu trang">thanh<span className="brand-dot">.</span>design <span className="brand-star">✳</span></a>
    <nav aria-label="Điều hướng chính" className={`nav ${menuOpen ? 'nav-open' : ''}`}>
      {items.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </nav>
    <a className="header-cta" href="#contact">Let's talk <Arrow diagonal size={15} /></a>
    <button className="menu-toggle" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} size={21} /></button>
  </header>;
}
function Portrait({ mode = 'hero' }) {
  return <div className={`portrait portrait-${mode}`}>
    <div className="portrait-inner"><img src={owner.avatar || '/portrait-placeholder.svg'} alt={owner.avatar ? `Chân dung ${owner.shortName}` : 'Ảnh chân dung minh họa, cần thay ảnh cá nhân'} /></div>
    <div className="portrait-top-label">PORTRAIT / 001</div>
    <span className="portrait-corner tl" /><span className="portrait-corner tr" /><span className="portrait-corner bl" /><span className="portrait-corner br" />
  </div>;
}
function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-mark">✳</span> PORTFOLIO / 2026 <span className="eyebrow-bar" /> AVAILABLE FOR WORK</div>
      <h1>UX/UI <span>Designer<span className="fullstop">.</span></span></h1>
      <p className="hero-title-sub">Designing digital experiences that feel effortless.</p>
      <p className="hero-description">Xin chào, mình là <strong>{owner.shortName}</strong> — một người yêu thiết kế giao diện, trải nghiệm người dùng và những ý tưởng được biến thành sản phẩm thực tế.</p>
      <div className="hero-actions">
        <a href="#portfolio" className="btn btn-light">Explore my work <Arrow diagonal size={17} /></a>
        <a href="#about" className="btn btn-outline">More about me <Arrow size={17}/></a>
      </div>
      <div className="hero-bottom-code"><span>01 / DESIGN IS HOW IT WORKS</span><span>SCROLL TO EXPLORE <span className="scroll-arrow">↓</span></span></div>
    </div>
    <div className="hero-visual"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><Portrait /><div className="floating-note"><span className="note-cross">✳</span><span>Curious mind.<br/>Thoughtful design.</span></div><span className="hero-vertical">VISUAL THINKER / PROBLEM SOLVER</span></div>
  </section>;
}
function Stat({ icon, number, label }) { return <div className="stat"><div className="stat-icon"><Icon name={icon} size={19}/></div><div><b>{number}</b><span>{label}</span></div><Arrow diagonal size={14}/></div>; }
function About() {
  return <section className="about section-shell section-padding" id="about">
    <SectionLabel>01 / GET TO KNOW ME</SectionLabel>
    <div className="about-layout">
      <div className="about-left"><h2>Hi, I'm<br/><span>{owner.name}</span></h2><p className="about-description">{owner.about}</p><p className="about-description secondary">Mình thích kết hợp tư duy thiết kế với hiểu biết kỹ thuật để tạo nên sản phẩm vừa đẹp mắt vừa có thể triển khai.</p>
        <div className="availability"><span className="pulse" /> {owner.availability}</div>
        <div className="about-actions"><a className="btn btn-light" href="#contact">Work with me <Arrow diagonal size={16}/></a><a className="btn btn-outline" href="#portfolio">View projects <Arrow diagonal size={16}/></a></div>
      </div>
      <div className="about-right"><div className="about-photo-shell"><Portrait mode="about"/><div className="photo-stamp">A LITTLE<br/>ABOUT ME ✳</div></div>
        <div className="about-stats"><Stat icon="grid" number="03" label="Featured projects" /><Stat icon="layers" number="02" label="Web & mobile" /><Stat icon="spark" number="∞" label="Things to learn" /></div>
      </div>
    </div>
  </section>;
}
function StudyMock() {
  return <div className="mock mock-study"><div className="mock-top"><i/><i/><i/><span>study.agent / dashboard</span></div><div className="study-body"><div className="study-sidebar"><span className="study-logo">✳</span><span className="side-line long"/><span className="side-line"/><span className="side-line"/><span className="side-line long"/></div><div className="study-main"><div className="study-greeting">Good morning, Thành <span>✦</span></div><div className="study-subtitle">Keep making progress, one lesson at a time.</div><div className="study-metrics"><div><span>Today's plan</span><strong>03</strong><em>Lessons</em></div><div><span>Progress</span><strong>78<span>%</span></strong><em>On track</em></div></div><div className="study-chart"><div className="chart-head">Learning activity <span>THIS WEEK ↗</span></div><div className="bar-chart">{[38,63,50,91,74,100,61,83,68,93,52,79].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div></div></div></div>;
}
function TravelMock() {
  return <div className="mock mock-travel"><div className="travel-top"><span>◈ vietnam explorer</span><span>Discover <span>⋮</span></span></div><div className="travel-title">A world of<br/><strong>wonder awaits.</strong></div><div className="travel-search">⌕ <span>Where to next?</span> <b>Explore →</b></div><div className="travel-place-row"><div className="travel-card one"><span>01 / EXPLORE</span><strong>Đà Lạt</strong></div><div className="travel-card two"><span>02 / EXPLORE</span><strong>Hội An</strong></div><div className="travel-card three"><span>03 / EXPLORE</span><strong>Sa Pa</strong></div></div></div>;
}
function SocialMock() {
  return <div className="mock mock-social"><div className="social-header"><strong><span>✳</span> toxicbook</strong><span>Home　 Explore　 Profile</span></div><div className="social-body"><div className="social-profile"><div className="social-avatar">T</div><div><b>Your feed</b><span>What's on your mind?</span></div></div><div className="social-post"><div className="social-post-head"><span className="tiny-avatar">T</span><span><b>Thành</b><small>Just now</small></span><span className="dots">•••</span></div><div className="social-line"/><div className="social-line small"/><div className="social-image"><span>AI + COMMUNITY</span><strong>CONVERSATIONS.</strong></div><div className="social-interactions">♡ &nbsp; 128　　 ♡ &nbsp; Comments　　 ↗ &nbsp; Share</div></div></div></div>;
}
const Visual = ({ type }) => type === 'study' ? <StudyMock/> : type === 'travel' ? <TravelMock/> : <SocialMock/>;
function ProjectCard({ project, onSelect }) {
  return <button className="project-card" onClick={() => onSelect(project)} aria-label={`Xem chi tiết ${project.title}`}>
    <div className="project-cover"><Visual type={project.visual}/><span className="project-cover-arrow"><Arrow diagonal size={20}/></span></div>
    <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div>
    <div className="project-title-row"><div><h3>{project.title}</h3><p>{project.tagline}</p></div><Arrow diagonal size={21}/></div>
  </button>;
}
function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [project, onClose]);
  if (!project) return null;
  return <div className="modal-backdrop" onClick={onClose} role="presentation"><div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="modal" onClick={e=>e.stopPropagation()}>
    <button className="modal-close" onClick={onClose} aria-label="Đóng chi tiết"><Icon name="close" size={22}/></button>
    <div className="modal-preview"><Visual type={project.visual}/></div><div className="modal-content"><SectionLabel>PROJECT / {project.number}</SectionLabel><h2 id="modal-title">{project.title}</h2><p className="modal-tagline">{project.description}</p><div className="modal-facts"><div><span>TYPE</span><strong>{project.category}</strong></div><div><span>STATUS</span><strong>{project.status}</strong></div><div><span>YEAR</span><strong>{project.year}</strong></div></div>
    <h3>The challenge</h3><p>{project.challenge}</p><h3>Design approach</h3><p>{project.approach}</p><div className="tag-row">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div>
    {project.url ? <a className="btn btn-light" href={project.url} target="_blank" rel="noreferrer">View source / project <Arrow diagonal size={16}/></a> : <p className="unpublished">Liên kết công khai sẽ được thêm sau.</p>}
    </div>
  </div></div>;
}
function Portfolio() {
  const [tab, setTab] = useState('projects');
  const [selected, setSelected] = useState(null);
  return <section className="portfolio section-shell section-padding" id="portfolio">
    <SectionLabel>02 / SELECTED WORK</SectionLabel><div className="portfolio-heading"><h2>Portfolio <span>Showcase</span></h2><p>A collection of ideas, interfaces and products I enjoy building.</p></div>
    <div className="tab-container" role="tablist" aria-label="Danh mục portfolio">
      {[['projects','Projects'],['certificates','Certificates'],['stack','Tech Stack']].map(([id,label])=><button key={id} id={`tab-${id}`} className={`tab-button ${tab===id?'selected':''}`} role="tab" aria-selected={tab===id} aria-controls="tab-panel" onClick={()=>setTab(id)}>{label}</button>)}
    </div>
    <div id="tab-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
      {tab==='projects' && <div className="project-grid">{projects.map(project=><ProjectCard key={project.id} project={project} onSelect={setSelected}/>)}</div>}
      {tab==='certificates' && (certificates.length ? <div className="cert-grid">{certificates.map((cert,i)=><div className="cert-card" key={i}><span>✳</span><h3>{cert.title}</h3><p>{cert.issuer}</p>{cert.url && <a href={cert.url} target="_blank" rel="noreferrer">View certificate ↗</a>}</div>)}</div> : <div className="empty-content"><span className="empty-icon">◇</span><h3>Learning never stops.</h3><p>Chưa thêm chứng chỉ vào portfolio. Bạn có thể thêm chứng chỉ thật trong <code>src/siteData.js</code>.</p></div>)}
      {tab==='stack' && <div className="skill-grid">{skills.map((skill,i)=><div className="skill-card" key={skill.name}><div className={`skill-symbol ${skill.className}`}>{skill.abbr}</div><strong>{skill.name}</strong><span>{skill.kind}</span><span className="skill-index">0{i+1}</span></div>)}</div>}
    </div><Modal project={selected} onClose={()=>setSelected(null)}/>
  </section>;
}
function Contact() {
  const [form,setForm] = useState({name:'',email:'',message:''});
  const [status,setStatus] = useState('');
  const [guest,setGuest] = useState({name:'',message:''});
  const [posts,setPosts] = useState(()=>{try{return JSON.parse(localStorage.getItem('thanh-guestbook')||'[]')}catch{return []}});
  const [guestStatus,setGuestStatus] = useState('');
  const change = e => setForm(s=>({...s,[e.target.name]:e.target.value}));
  async function send(e) {
    e.preventDefault();setStatus('');
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    if (owner.email) {window.location.href=`mailto:${owner.email}?subject=${subject}&body=${body}`;setStatus('Đã mở ứng dụng email để bạn gửi lời nhắn.');return;}
    const text=`Portfolio contact — ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    try {await navigator.clipboard.writeText(text);setStatus('Đã sao chép nội dung. Để gửi trực tiếp, hãy thêm email nhận trong src/siteData.js.');}
    catch {setStatus('Hãy cấu hình email nhận trong src/siteData.js để gửi biểu mẫu trực tiếp.');}
  }
  function post(e){e.preventDefault();const item={id:Date.now(),name:guest.name.trim(),message:guest.message.trim(),date:new Date().toLocaleDateString('vi-VN')};const next=[item,...posts].slice(0,30);setPosts(next);localStorage.setItem('thanh-guestbook',JSON.stringify(next));setGuest({name:'',message:''});setGuestStatus('Đã lưu trên trình duyệt này (bản demo).');}
  return <section className="contact section-shell section-padding" id="contact">
    <SectionLabel>03 / LET'S CONNECT</SectionLabel><div className="contact-heading"><h2>Have an idea?<br/><span>Let's make it happen.</span></h2><p>Mình luôn sẵn sàng lắng nghe về cơ hội thực tập, dự án hay một ý tưởng thú vị. Say hello! ✳</p></div>
    <div className="contact-layout"><div className="contact-left"><div className="panel-title"><Icon name="mail" size={18}/> Send a message <span>01 / 02</span></div><form className="contact-form" onSubmit={send}><label htmlFor="contact-name">YOUR NAME</label><input id="contact-name" name="name" value={form.name} onChange={change} required placeholder="Tên của bạn" maxLength="100"/><label htmlFor="contact-email">EMAIL ADDRESS</label><input id="contact-email" type="email" name="email" value={form.email} onChange={change} required placeholder="you@example.com"/><label htmlFor="contact-message">YOUR MESSAGE</label><textarea id="contact-message" name="message" value={form.message} onChange={change} required placeholder="Kể mình nghe về ý tưởng của bạn..." rows="6" maxLength="3000"/><button type="submit" className="btn btn-light wide">Send message <Arrow diagonal size={17}/></button>{status && <p className="form-status" role="status">{status}</p>}</form>
      <div className="social-links"><h3>Find me online</h3>{[['GitHub',owner.github],['LinkedIn',owner.linkedin],['Behance',owner.behance]].filter(x=>x[1]).map(([label,url])=><a key={label} href={url} target="_blank" rel="noreferrer">{label}<Arrow diagonal size={16}/></a>)}<div className="location-text"><Icon name="pin" size={15}/>{owner.location}</div></div></div>
      <div className="contact-right"><div className="panel-title"><Icon name="spark" size={18}/> Guestbook <span>02 / 02</span></div><p className="guest-intro">Leave a little note. This interactive demo keeps messages in your browser only.</p><form className="guest-form" onSubmit={post}><input aria-label="Tên để lại lời nhắn" required placeholder="Your name" maxLength="50" value={guest.name} onChange={e=>setGuest(s=>({...s,name:e.target.value}))}/><textarea aria-label="Nội dung lời nhắn" required rows="5" placeholder="Write a nice little note..." value={guest.message} maxLength="350" onChange={e=>setGuest(s=>({...s,message:e.target.value}))}/><button type="submit" className="btn btn-muted wide">Post comment <Arrow size={16}/></button></form>{guestStatus && <p className="form-status" role="status">{guestStatus}</p>}
        <div className="comment-list"><h3>Notes <span>{posts.length.toString().padStart(2,'0')}</span></h3>{posts.length === 0 ? <div className="no-comments"><span>✳</span><b>No notes yet</b><p>Be the first to leave a message.</p></div> : posts.map(item=><div className="comment" key={item.id}><div className="comment-avatar">{item.name.charAt(0).toUpperCase()}</div><div className="comment-body"><div><b>{item.name}</b><span>{item.date}</span></div><p>{item.message}</p></div></div>)}</div></div>
    </div>
  </section>;
}
function Footer() {return <footer className="footer section-shell"><div><a href="#home">thanh<span>.</span>design</a><p>Crafted with curiosity & a little caffeine.</p></div><div className="footer-right"><span>© {new Date().getFullYear()} {owner.shortName}. Portfolio concept.</span><a href="#home">Back to top ↑</a></div></footer>;}
function App(){return <><div className="site-noise" aria-hidden="true"/><Header/><main><Hero/><About/><Portfolio/><Contact/></main><Footer/></>}

createRoot(document.getElementById('root')).render(<App/>);