import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { owner, projects, certificates, skills, educations, focuses } from './siteData';
import './styles.css';

const Arrow = ({ diagonal = false, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {diagonal ? <path d="M7 17 17 7M8 7h9v9" /> : <path d="M4 12h16m-7-7 7 7-7 7" />}
  </svg>
);
function Icon({ name, size = 19 }) {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M7 3H5a2 2 0 0 0-2 2c0 9 7 16 16 16a2 2 0 0 0 2-2v-2l-5-3-2 2a13 13 0 0 1-6-6l2-2-3-5Z" />,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    spark: <path d="m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z" />,
    close: <path d="M5 5 19 19M19 5 5 19" />,
    menu: <path d="M3 7h18M3 12h18M3 17h18" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M4 17v3h16v-3"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
const SectionLabel = ({ children }) => <div className="section-label"><span className="small-diamond" />{children}</div>;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const items = [['home', 'Trang chủ'], ['about', 'Giới thiệu'], ['portfolio', 'Dự án'], ['contact', 'Liên hệ']];
  return <header className="header">
    <a className="brand" href="#home" aria-label="Trở về trang chủ">duyen<span className="brand-dot">.</span>valuation <span className="brand-star">✳</span></a>
    <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Điều hướng chính">
      {items.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </nav>
    <a className="header-cta" href="#contact">Kết nối <Arrow diagonal size={15}/></a>
    <button className="menu-toggle" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><Icon name={menuOpen ? 'close' : 'menu'} size={20}/></button>
  </header>;
}
function Portrait({ mode = 'hero' }) {
  return <div className={`portrait portrait-${mode}`}>
    <div className="portrait-inner"><img src={owner.avatar} alt={`Chân dung ${owner.name}`} loading={mode === 'hero' ? 'eager' : 'lazy'}/></div>
    <div className="portrait-top-label">PORTRAIT / 2026</div>
    <span className="portrait-corner tl"/><span className="portrait-corner tr"/><span className="portrait-corner bl"/><span className="portrait-corner br"/>
  </div>;
}
function Hero() {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-mark">✳</span> PORTFOLIO / 2026 <span className="eyebrow-bar"/> HO CHI MINH CITY</div>
      <p className="hero-overline">NGUYỄN THỊ THÙY DUYÊN</p>
      <h1>{owner.headline}<span>{owner.headlineAccent}</span></h1>
      <p className="hero-title-sub">{owner.englishRole}</p>
      <p className="hero-description">{owner.intro}</p>
      <div className="hero-actions"><a href="#portfolio" className="btn btn-light">Khám phá dự án <Arrow diagonal size={17}/></a><a href="#about" className="btn btn-outline">Về tôi <Arrow size={17}/></a><a href="/CV_Nguyen_Thi_Thuy_Duyen.pdf" download="CV_Nguyen_Thi_Thuy_Duyen.pdf" className="btn btn-outline" aria-label="Tải CV PDF gốc của Nguyễn Thị Thùy Duyên">Tải CV <Icon name="download" size={17}/></a></div>
      <div className="hero-bottom-code"><span>RESEARCH • VALUE • INSIGHT</span><span>CUỘN ĐỂ KHÁM PHÁ <span className="scroll-arrow">↓</span></span></div>
    </div>
    <div className="hero-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><Portrait/><div className="floating-note"><span className="note-cross">✳</span><span>Analytical mind.<br/>Thoughtful valuation.</span></div><span className="hero-vertical">DATA / SPACE / VALUE</span></div>
  </section>;
}
function Stat({ icon, number, label }) {
  return <div className="stat"><div className="stat-icon"><Icon name={icon}/></div><div><b>{number}</b><span>{label}</span></div><Arrow diagonal size={14}/></div>;
}
function About() {
  return <section className="about section-shell section-padding" id="about">
    <SectionLabel>01 / GIỚI THIỆU</SectionLabel>
    <div className="about-layout">
      <div className="about-left"><h2>Xin chào, tôi là<br/><span>{owner.shortName}.</span></h2><p className="about-description">{owner.about}</p><p className="about-description secondary">{owner.aboutExtra}</p>
        <div className="availability"><span className="pulse"/>{owner.availability}</div>
        <div className="about-actions"><a className="btn btn-light" href="#contact">Liên hệ với tôi <Arrow diagonal size={16}/></a><a className="btn btn-outline" href="#portfolio">Xem đồ án <Arrow size={16}/></a><a className="btn btn-outline" href="/CV_Nguyen_Thi_Thuy_Duyen.pdf" download="CV_Nguyen_Thi_Thuy_Duyen.pdf">Tải CV <Icon name="download" size={16}/></a></div>
      </div>
      <div className="about-right"><div className="about-photo-shell"><Portrait mode="about"/><div className="photo-stamp">ANALYZE<br/>THE VALUE ✳</div></div>
        <div className="about-stats"><Stat icon="grid" number="06" label="Đồ án & nghiên cứu"/><Stat icon="layers" number="UEH" label="Chứng chỉ nghiệp vụ"/><Stat icon="spark" number="GIS" label="Dữ liệu không gian"/></div>
      </div>
    </div>
    <div className="education-wrap"><div><SectionLabel>HỌC VẤN & ĐÀO TẠO</SectionLabel><h3>Learning with <span>purpose.</span></h3></div><div className="education-list">{educations.map(edu => <div key={edu.school} className="education-item"><div><strong>{edu.school}</strong><p>{edu.qualification}</p><small>{edu.note}</small></div><span>{edu.period}</span></div>)}</div></div>
    <div className="focus-grid">{focuses.map((focus, i) => <article key={focus.title} className="focus-card"><span>0{i + 1} / EXPERTISE</span><h3>{focus.title}</h3><p>{focus.text}</p></article>)}</div>
  </section>;
}
function ProjectVisual({ type, title, number }) {
  return <div className={`real-mock real-${type}`}>
    <div className="visual-top"><span>✳ &nbsp; RESEARCH / {number}</span><span>REAL ESTATE &nbsp; ↗</span></div>
    {type === 'campus' && <div className="campus-scene"><div className="building building-a"/><div className="building building-b"/><div className="building building-c"/><div className="campus-line"/><span className="scene-stamp">ECO–SMART<br/>CO-LIVING</span></div>}
    {type === 'market' && <div className="market-scene"><div className="market-axis"><span>PRICE INDEX</span><span>MARKET TREND</span></div><div className="market-bars">{[35,62,48,71,51,76,66,94,74,87,99,80].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div><div className="market-line"/><div className="market-stat">DATA → INSIGHT</div></div>}
    {type === 'studio' && <div className="studio-scene"><span className="studio-orbit one"/><span className="studio-orbit two"/><span className="studio-play">▶</span><span className="studio-label">LIVE SPACE<br/>STUDIO</span></div>}
    {type === 'gis' && <div className="gis-scene"><div className="gis-map"><span className="gis-road one"/><span className="gis-road two"/><span className="gis-road three"/><span className="gis-pin">●</span><span className="gis-lot">LOT / 024</span></div><div className="gis-coords">10°49' N <br/>106°43' E</div></div>}
    {type === 'excel' && <div className="excel-scene" aria-hidden="true">
      <div className="excel-scene-title"><span>XL</span><strong>VALUATION / PP-SS</strong><small>.XLSX</small></div>
      <div className="excel-scene-grid"><b>YẾU TỐ</b><b>SS1</b><b>SS2</b><b>SS3</b>
        <span>Năm SX</span><span>86–89</span><span>90–93</span><span>96–99</span>
        <span>Trọng lượng</span><span>12.000</span><span>12.000</span><span>12.500</span>
        <span>Giá chỉ dẫn</span><span>630</span><span>634</span><span>633</span>
      </div>
    </div>}
    {type === 'field' && <div className="field-scene"><div className="field-sun"/><div className="field-mountain back"/><div className="field-mountain front"/><div className="field-coordinate">NINH THUẬN<br/>FIELD NOTES</div></div>}
    <div className="visual-caption"><span>{title}</span><b>VIEW CASE STUDY <Arrow diagonal size={14}/></b></div>
  </div>;
}
function ProjectCard({ project, onSelect }) {
  return <button className="project-card" type="button" onClick={() => onSelect(project)} aria-label={`Xem chi tiết ${project.title}`}>
    <div className="project-cover"><ProjectVisual type={project.visual} title={project.title} number={project.number}/><span className="project-cover-arrow"><Arrow diagonal size={20}/></span></div>
    <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.period}</span></div>
    <div className="project-title-row"><div><h3>{project.title}</h3><p>{project.tagline}</p>{project.documents?.length ? <span className="project-docs-badge">PDF bài làm · {project.documents.length} tài liệu</span> : null}</div><Arrow diagonal size={21}/></div>
    {project.previewRows && <span className="project-excel-cta"><Icon name="grid" size={17}/> Bấm để xem bảng Excel <Arrow diagonal size={15}/></span>}
  </button>;
}
function ExcelDownload({ fileUrl }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!fileUrl) return undefined;
    const controller = new AbortController();
    fetch(fileUrl, { method: 'HEAD', signal: controller.signal })
      .then(response => {
        const type = response.headers.get('content-type') || '';
        setReady(response.ok && /spreadsheetml|octet-stream/i.test(type));
      }).catch(() => setReady(false));
    return () => controller.abort();
  }, [fileUrl]);
  return ready
    ? <a className="btn btn-light excel-download" href={fileUrl} download="Bang_so_sanh_tham_dinh_gia_may_xuc.xlsx"><Icon name="download" size={17}/> Tải file Excel gốc (.xlsx)</a>
    : <p className="excel-file-pending">Bản xem nhanh đã sẵn sàng. File Excel gốc đang chờ được đưa vào thư mục public của website.</p>;
}
function Modal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = event => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = previousOverflow; };
  }, [project, onClose]);
  if (!project) return null;
  return <div className="modal-backdrop" role="presentation" onClick={onClose}><div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="modal" onClick={event => event.stopPropagation()}>
    <button type="button" className="modal-close" onClick={onClose} aria-label="Đóng chi tiết"><Icon name="close" size={22}/></button>
    <div className="modal-preview"><ProjectVisual type={project.visual} title={project.title} number={project.number}/></div>
    <div className="modal-content"><SectionLabel>DỰ ÁN / {project.number}</SectionLabel><h2 id="modal-title">{project.title}</h2><p className="modal-tagline">{project.description}</p>
      <div className="modal-facts"><div><span>HÌNH THỨC</span><strong>{project.category}</strong></div><div><span>ĐỊA ĐIỂM</span><strong>{project.period}</strong></div><div><span>VAI TRÒ</span><strong>Đồ án / Thực hành</strong></div></div>
      <h3>Vấn đề nghiên cứu</h3><p>{project.challenge}</p><h3>Phương pháp thực hiện</h3><p>{project.approach}</p><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
      {project.previewRows && <div className="excel-preview-section"><h3>Xem nhanh bảng so sánh</h3>
        <p>Trích một số hàng từ sheet PP-SS trong file bạn cung cấp. Bảng gốc có các công thức điều chỉnh và phần kết luận chi tiết.</p>
        <div className="excel-preview-scroll"><table className="excel-preview-table"><thead><tr><th>Yếu tố so sánh</th><th>Máy xúc thẩm định</th><th>So sánh 1</th><th>So sánh 2</th><th>So sánh 3</th></tr></thead>
          <tbody>{project.previewRows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
        </table></div>
        <ExcelDownload fileUrl={project.fileUrl}/>
      </div>}
      {project.documents?.length ? <section className="project-documents" aria-label="Tài liệu bài làm">
        <h3>Tài liệu bài làm</h3>
        <p>Xem PDF để đọc trực tiếp trên trình duyệt hoặc Tải PDF để lưu về máy. Các PDF được xuất từ bài Word của đồ án.</p>
        <div className="project-doc-list">{project.documents.map(file => <div className="project-doc" key={file.path}>
          <div className="project-doc-info"><span className="project-doc-icon">PDF</span><div><strong>{file.title}</strong><small>{file.pages} trang · Tài liệu đồ án</small></div></div>
          <div className="project-doc-actions">
            <a href={file.path} target="_blank" rel="noopener noreferrer" aria-label={`Mở ${file.title} trong tab mới`}>Xem PDF <Arrow diagonal size={14}/></a>
            <a href={file.path} download={file.filename} aria-label={`Tải ${file.title}`}>Tải PDF <Icon name="download" size={14}/></a>
          </div>
        </div>)}</div>
      </section> : null}
      <p className="unpublished">{project.previewRows ? 'Bản xem nhanh không thay thế file Excel gốc và không tự điều chỉnh kết quả tính.' : 'Hình minh họa trên thẻ là mockup trình bày, không phải ảnh chụp báo cáo hoặc kết quả nghiên cứu thực tế.'}</p>
    </div>
  </div></div>;
}
function Portfolio() {
  const [tab, setTab] = useState('projects');
  const [selected, setSelected] = useState(null);
  return <section className="portfolio section-shell section-padding" id="portfolio">
    <SectionLabel>02 / DỰ ÁN & NĂNG LỰC</SectionLabel><div className="portfolio-heading"><h2>Selected <span>Work.</span></h2><p>Các đồ án, chương trình rèn nghề và công cụ chuyên môn trên hành trình học tập.</p></div>
    <div className="tab-container" role="tablist" aria-label="Danh mục hồ sơ">
      {[['projects', 'Dự án'], ['certificates', 'Chứng chỉ'], ['stack', 'Kỹ năng']].map(([id, label]) => <button type="button" key={id} id={`tab-${id}`} className={`tab-button ${tab === id ? 'selected' : ''}`} role="tab" aria-selected={tab === id} aria-controls="tab-panel" onClick={() => setTab(id)}>{label}</button>)}
    </div>
    <div id="tab-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
      {tab === 'projects' && <div className="project-grid">{projects.map(project => <ProjectCard key={project.id} project={project} onSelect={setSelected}/>)}</div>}
      {tab === 'certificates' && <div className="cert-grid">{certificates.map(cert => <article className="cert-card credential-card" key={cert.title}>
        <div className="credential-image"><a href={cert.image} target="_blank" rel="noopener noreferrer" title="Mở ảnh toàn bộ chứng chỉ"><img src={cert.image} alt="Toàn bộ ảnh chứng chỉ đào tạo nghiệp vụ thẩm định giá tài sản UEH" loading="lazy"/></a></div>
        <div className="credential-copy"><span className="credential-eyebrow">VERIFIED TRAINING / 2026</span><h3>{cert.title}</h3><p>{cert.issuer} · {cert.date}</p><small>{cert.note}</small></div>
      </article>)}</div>}
      {tab === 'stack' && <div className="skill-grid">{skills.map((skill, i) => <div className="skill-card" key={skill.name}><div className={`skill-symbol ${skill.className}`}>{skill.abbr}</div><strong>{skill.name}</strong><span>{skill.kind}</span><span className="skill-index">{String(i + 1).padStart(2, '0')}</span></div>)}</div>}
    </div>
    <Modal project={selected} onClose={() => setSelected(null)}/>
  </section>;
}
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const change = event => setForm(old => ({ ...old, [event.target.name]: event.target.value }));
  function send(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Liên hệ portfolio — ${form.name}`);
    const body = encodeURIComponent(`Người gửi: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`;
    setStatus('Đã yêu cầu mở ứng dụng email. Vui lòng nhấn Gửi trong ứng dụng để hoàn tất.');
  }
  return <section className="contact section-shell section-padding" id="contact">
    <SectionLabel>03 / LIÊN HỆ</SectionLabel><div className="contact-heading"><h2>Let's build<br/><span>something valuable.</span></h2><p>Tôi mong muốn trao đổi về cơ hội nghề nghiệp, dự án nghiên cứu và các công việc liên quan đến phân tích – thẩm định giá bất động sản.</p></div>
    <div className="contact-layout">
      <div className="contact-left"><div className="panel-title"><Icon name="mail" size={18}/> Gửi email <span>01 / 02</span></div>
        <form className="contact-form" onSubmit={send}><label htmlFor="contact-name">HỌ VÀ TÊN</label><input id="contact-name" name="name" value={form.name} onChange={change} required maxLength="100" placeholder="Tên của bạn"/>
          <label htmlFor="contact-email">EMAIL</label><input id="contact-email" type="email" name="email" value={form.email} onChange={change} required placeholder="you@example.com"/>
          <label htmlFor="contact-message">NỘI DUNG</label><textarea id="contact-message" name="message" value={form.message} onChange={change} required rows="6" maxLength="3000" placeholder="Nội dung bạn muốn trao đổi..."/>
          <button type="submit" className="btn btn-light wide">Soạn email <Arrow diagonal size={17}/></button>{status && <p className="form-status" role="status">{status}</p>}
        </form>
        <p className="contact-disclaimer">Biểu mẫu mở ứng dụng email của bạn; không lưu hoặc tự động gửi dữ liệu lên máy chủ.</p>
      </div>
      <div className="contact-right"><div className="panel-title"><Icon name="spark" size={18}/> Thông tin kết nối <span>02 / 02</span></div>
        <p className="contact-panel-intro">Rất vui được trao đổi và học hỏi từ những cơ hội trong lĩnh vực bất động sản.</p>
        <a className="contact-method" href={`mailto:${owner.email}`}><Icon name="mail"/><span><small>EMAIL</small><strong>{owner.email}</strong></span><Arrow diagonal size={16}/></a>
        <a className="contact-method" href={`tel:${owner.phone}`}><Icon name="phone"/><span><small>ĐIỆN THOẠI</small><strong>{owner.phone}</strong></span><Arrow diagonal size={16}/></a>
        <div className="contact-method location-method"><Icon name="pin"/><span><small>KHU VỰC</small><strong>{owner.location}</strong></span></div>
        <div className="contact-quote"><span>✳</span><p>“Giá trị đáng tin cậy bắt đầu từ dữ liệu được kiểm chứng và góc nhìn khách quan.”</p><small>VALUATION • RESEARCH • INTEGRITY</small></div>
      </div>
    </div>
  </section>;
}
function Footer() {
  return <footer className="footer section-shell"><div><a href="#home">duyen<span>.</span>valuation</a><p>Research thoughtfully. Value responsibly.</p></div><div className="footer-right"><span>© {new Date().getFullYear()} {owner.name}</span><a href="#home">Lên đầu trang ↑</a></div></footer>;
}
function App() {
  return <><div className="site-noise" aria-hidden="true"/><Header/><main><Hero/><About/><Portfolio/><Contact/></main><Footer/></>;
}
createRoot(document.getElementById('root')).render(<App/>);
