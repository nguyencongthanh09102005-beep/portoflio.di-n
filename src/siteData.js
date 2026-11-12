/**
 * Hồ sơ công khai dựa trên CV và tài liệu giới thiệu do chủ sở hữu cung cấp (11/2026).
 * Không lưu CMND/CCCD, ngày sinh, địa chỉ chi tiết hoặc bản gốc chứng chỉ tại repository.
 */
export const owner = {
  name: 'Nguyễn Thị Thùy Duyên',
  shortName: 'Thùy Duyên',
  role: 'Thẩm định giá Bất động sản',
  headline: 'REAL ESTATE',
  headlineAccent: 'VALUATION.',
  englishRole: 'Real Estate Valuation & Investment Analysis',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  availability: 'Sẵn sàng kết nối cơ hội nghề nghiệp',
  intro: 'Tôi theo đuổi lĩnh vực thẩm định giá bất động sản, kết hợp phân tích tài chính, dữ liệu thị trường và hiểu biết về pháp lý để hướng tới những kết quả định giá khách quan, minh bạch.',
  about: 'Tôi là sinh viên chuyên ngành Bất động sản tại Trường Đại học Nông Lâm TP.HCM (2023–2027), định hướng phát triển chuyên sâu trong thẩm định giá tài sản và tư vấn đầu tư. Tôi đặc biệt quan tâm đến cách dữ liệu, mô hình tài chính và thông tin không gian hỗ trợ việc đưa ra quyết định.',
  aboutExtra: 'Qua các đồ án, nghiên cứu thị trường và chương trình rèn nghề, tôi được thực hành khảo sát thực địa, phân tích pháp lý, xây dựng báo cáo khả thi và ứng dụng các công cụ GIS, thống kê.',
  email: 'nguyenthithuyduyen032@gmail.com',
  phone: '0812823086',
  avatar: '/thuy-duyen-portrait.webp',
  linkedin: '',
};

export const educations = [
  {
    school: 'Trường Đại học Nông Lâm TP.HCM',
    qualification: 'Sinh viên ngành Bất động sản',
    period: '2023 – 2027',
    note: 'Định hướng quản lý đất đai, thẩm định giá và tư vấn đầu tư.',
  },
  {
    school: 'Đại học Kinh tế TP.HCM (UEH)',
    qualification: 'Đào tạo nghiệp vụ Thẩm định giá tài sản',
    period: '06/2026',
    note: 'Đã hoàn thành khóa đào tạo và được cấp chứng chỉ.',
  },
];

/** Dự án học tập / nghiên cứu, không mô tả như hợp đồng thương mại hoặc kinh nghiệm tuyển dụng trả lương. */
export const projects = [
  {
    id: 'campus-central', number: '01', title: 'Campus Central',
    tagline: 'Eco-Smart Co-Living Space',
    category: 'Đồ án · Kinh doanh bất động sản', period: 'TP. Thủ Đức',
    description: 'Lập kế hoạch kinh doanh và mô hình tài chính cho khu phức hợp thương mại – lưu trú hướng đến sinh viên khu vực Linh Trung.',
    challenge: 'Đánh giá tính phù hợp của mô hình co-living với nhu cầu lưu trú, tiện ích và hoạt động thương mại gần khu đại học.',
    approach: 'Phân tích phân khúc khách hàng, nghiên cứu thị trường, xây dựng định hướng vận hành và mô hình tài chính dự án.',
    stack: ['Phân tích thị trường', 'Kế hoạch kinh doanh', 'Mô hình tài chính'],
    visual: 'campus', url: '',
  },
  {
    id: 'market-research', number: '02', title: 'Phân tích thị trường BĐS TP.HCM',
    tagline: 'Market Research & Valuation',
    category: 'Báo cáo nghiên cứu · Định lượng', period: 'TP. Hồ Chí Minh',
    description: 'Đồ án nghiên cứu thị trường kết hợp phân tích DCF, hồi quy thống kê và trực quan hóa không gian để tìm hiểu biến động giá bất động sản.',
    challenge: 'Tổng hợp dữ liệu giá, vị trí và các đặc điểm của tài sản thành cơ sở so sánh có thể phân tích.',
    approach: 'Chuẩn hóa dữ liệu thị trường, thực hành mô hình hồi quy bằng SPSS và thể hiện thông tin vị trí trên Google My Maps.',
    stack: ['DCF', 'SPSS', 'Hồi quy', 'Google My Maps'],
    visual: 'market', url: '',
  },
  {
    id: 'live-space', number: '03', title: 'Live Space Studio',
    tagline: 'Commercial Space Feasibility',
    category: 'Đồ án · Nghiên cứu khả thi', period: 'TP. Hồ Chí Minh',
    description: 'Nghiên cứu tiền khả thi cho mô hình kinh doanh cho thuê studio livestream, kết hợp khảo sát thị trường và dự toán tài chính.',
    challenge: 'Đánh giá nhu cầu sử dụng không gian chuyên dụng và khả năng tổ chức mô hình cho thuê.',
    approach: 'Xây dựng thuyết minh dự án, phân tích các yếu tố thị trường và lập giả định tài chính phục vụ đánh giá tính khả thi.',
    stack: ['Feasibility Study', 'Cash Flow', 'Market Analysis'],
    visual: 'studio', url: '',
  },
  {
    id: 'webgis', number: '04', title: 'WebGIS Thông tin Địa chính',
    tagline: 'Land Information & Spatial Data',
    category: 'Dự án học tập · GIS', period: 'Hệ thống trực tuyến',
    description: 'Thiết kế và thuyết trình hệ thống thông tin địa chính trực tuyến, kết nối cơ sở dữ liệu không gian với các công cụ bản đồ.',
    challenge: 'Tổ chức thông tin thửa đất và dữ liệu địa lý để hỗ trợ tra cứu, đối chiếu và trực quan hóa.',
    approach: 'Ứng dụng PostGIS, GeoServer cùng công cụ địa chính GCADAS/MicroStation theo nội dung dự án.',
    stack: ['PostGIS', 'GeoServer', 'GCADAS', 'MicroStation'],
    visual: 'gis', url: '',
  },
  {
    id: 'fieldwork', number: '05', title: 'Khảo sát thực địa Ninh Thuận',
    tagline: 'Fieldwork & Destination Research',
    category: 'Rèn nghề · Khảo sát thực tế', period: 'Ninh Thuận',
    description: 'Tham gia chương trình rèn nghề 4 ngày 3 đêm, khảo sát dự án Cà Ná Newcity và các địa điểm du lịch – sinh thái của Ninh Thuận.',
    challenge: 'Đối chiếu hiện trạng vị trí, cảnh quan và điều kiện khai thác thực tế với định hướng phát triển đô thị và du lịch.',
    approach: 'Khảo sát hiện trường, thu thập dữ liệu, ghi nhận đặc điểm khu vực và phân tích tiềm năng quy hoạch – đầu tư.',
    stack: ['Khảo sát thực địa', 'Quy hoạch', 'Phân tích vị trí'],
    visual: 'field', url: '',
  },
];

export const certificates = [
  {
    title: 'Chứng chỉ đào tạo nghiệp vụ Thẩm định giá tài sản',
    issuer: 'Đại học Kinh tế TP.HCM (UEH)',
    date: 'Tháng 6/2026',
    image: '/ueh-certificate-heading.webp',
    note: 'Hình trích phần tiêu đề chứng chỉ; thông tin định danh và giấy tờ cá nhân không được đăng công khai.',
  },
];

export const skills = [
  { name: 'Thẩm định giá BĐS', kind: 'Nghiệp vụ', abbr: 'VA', className: 'research' },
  { name: 'DCF / NPV / IRR', kind: 'Tài chính', abbr: 'DCF', className: 'systems' },
  { name: 'Microsoft Excel', kind: 'Bảng tính & mô hình', abbr: 'XL', className: 'figma' },
  { name: 'SPSS 27', kind: 'Thống kê', abbr: 'SP', className: 'proto' },
  { name: 'RStudio', kind: 'Phân tích định lượng', abbr: 'R', className: 'react' },
  { name: 'ArcGIS', kind: 'Thông tin không gian', abbr: 'GIS', className: 'wire' },
  { name: 'MicroStation / GCADAS', kind: 'Địa chính', abbr: 'CAD', className: 'html' },
  { name: 'PostGIS / GeoServer', kind: 'WebGIS', abbr: 'MAP', className: 'responsive' },
  { name: 'SketchUp / Enscape', kind: 'Mô hình không gian 3D', abbr: '3D', className: 'systems' },
  { name: 'Pháp lý & quy hoạch', kind: 'Nghiên cứu', abbr: 'LAW', className: 'research' },
];

export const focuses = [
  { title: 'Thẩm định & định giá', text: 'Phương pháp so sánh, chi phí, thu nhập, thặng dư và kiểm tra cơ sở dữ liệu đầu vào.' },
  { title: 'Tài chính dự án', text: 'Lập mô hình dòng tiền, DCF, NPV/IRR, phân tích độ nhạy và đánh giá tính khả thi.' },
  { title: 'Dữ liệu & thị trường', text: 'Khảo sát, chuẩn hóa dữ liệu và sử dụng công cụ định lượng để hỗ trợ nghiên cứu giá.' },
  { title: 'GIS & pháp lý', text: 'Đối chiếu thông tin quy hoạch, dữ liệu thửa đất và điều kiện pháp lý của bất động sản.' },
];
