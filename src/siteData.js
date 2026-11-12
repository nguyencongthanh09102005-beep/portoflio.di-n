/**
 * Chỉnh thông tin cá nhân tại đây. Đừng điền email/số điện thoại riêng tư
 * nếu chưa muốn công khai trên trang web.
 */
export const owner = {
  name: 'Nguyễn Công Thành',
  shortName: 'Thành',
  role: 'UX/UI Designer',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  availability: 'Open for opportunities',
  intro: 'Mình thiết kế những trải nghiệm số trực quan, dễ sử dụng và có cá tính. Mình thích biến các luồng thao tác phức tạp thành những giao diện đơn giản, rõ ràng.',
  about: 'Mình theo đuổi UX/UI Design, với nền tảng công nghệ thông tin và kinh nghiệm xây dựng các sản phẩm web, mobile. Mình chú trọng cả hành trình người dùng lẫn những chi tiết nhỏ trong giao diện.',
  email: '', // Thay bằng email bạn muốn công khai, ví dụ: 'hello@example.com'
  linkedin: '', // Dán link LinkedIn nếu có
  github: 'https://github.com/nguyencongthanh09102005-beep',
  behance: '', // Dán link Behance nếu có
  avatar: '', // Ví dụ: '/my-portrait.jpg' sau khi chép ảnh vào thư mục public
};

/** Dự án được dựa trên các dự án bạn đã trao đổi; mô tả có thể chỉnh lại theo công việc thực tế. */
export const projects = [
  {
    id: 'study',
    number: '01',
    title: 'AI Study Agent',
    tagline: 'Nền tảng hỗ trợ học tập thông minh',
    category: 'Web / Mobile · EdTech',
    year: '2026',
    status: 'Đồ án · Đang hoàn thiện',
    description: 'Trải nghiệm học tập theo môn và buổi, có lộ trình, quiz, tài liệu và trợ lý AI trong cùng một không gian.',
    challenge: 'Tổ chức nhiều tính năng học tập nhưng vẫn giữ luồng sử dụng rõ ràng, dễ theo dõi trên cả web và mobile.',
    approach: 'Tập trung vào dashboard, lịch học, lộ trình, không gian tự học và trải nghiệm làm quiz.',
    stack: ['UX/UI', 'Responsive', 'React', 'Mobile'],
    url: 'https://github.com/nguyencongthanh09102005-beep/AI-Study-Agent',
    visual: 'study',
  },
  {
    id: 'travel',
    number: '02',
    title: 'Vietnam Travel Explorer',
    tagline: 'Khám phá điểm đến Việt Nam',
    category: 'Web Design · Travel',
    year: '2026',
    status: 'Dự án cá nhân · Đang phát triển',
    description: 'Giao diện khám phá điểm du lịch với thẻ địa điểm, dữ liệu bản đồ và trải nghiệm tìm kiếm, chọn lọc thông tin.',
    challenge: 'Giúp người dùng khám phá nhiều điểm đến mà không bị quá tải bởi lượng thông tin.',
    approach: 'Thiết kế hệ thống thẻ địa điểm, phân nhóm nội dung và các trạng thái duyệt thông tin.',
    stack: ['UX/UI', 'Web App', 'Travel', 'Information Design'],
    url: 'https://github.com/nguyencongthanh09102005-beep/vietnamtravel',
    visual: 'travel',
  },
  {
    id: 'toxicbook',
    number: '03',
    title: 'ToxicBook',
    tagline: 'Thử nghiệm mạng xã hội với AI',
    category: 'Web App · Concept',
    year: '2026',
    status: 'Side project · Prototype',
    description: 'Một thử nghiệm giao diện mạng xã hội nơi AI tạo tương tác bình luận tự động và người dùng khám phá luồng hội thoại.',
    challenge: 'Làm cho các trạng thái AI đang hoạt động, tạm dừng và gặp lỗi trở nên dễ hiểu.',
    approach: 'Định hình newsfeed, vùng bình luận và các điều khiển tự động trong giao diện gọn gàng.',
    stack: ['Product Thinking', 'UI Design', 'React', 'AI'],
    url: 'https://github.com/nguyencongthanh09102005-beep/TOXICBOOK',
    visual: 'social',
  },
];

// Thêm chứng chỉ thật của bạn ở đây khi có ảnh và tên chính xác.
export const certificates = [];
export const skills = [
  { name: 'Figma', kind: 'Design', abbr: 'Fg', className: 'figma' },
  { name: 'UX Research', kind: 'UX', abbr: 'UX', className: 'research' },
  { name: 'Wireframing', kind: 'UX', abbr: 'Wf', className: 'wire' },
  { name: 'Prototyping', kind: 'Design', abbr: 'Pt', className: 'proto' },
  { name: 'Design Systems', kind: 'Design', abbr: 'Ds', className: 'systems' },
  { name: 'HTML / CSS', kind: 'Frontend', abbr: '</>', className: 'html' },
  { name: 'React', kind: 'Frontend', abbr: 'Re', className: 'react' },
  { name: 'Responsive UI', kind: 'Frontend', abbr: 'UI', className: 'responsive' },
];