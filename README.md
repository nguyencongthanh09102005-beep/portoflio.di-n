# Portfolio UX/UI — Thành

Portfolio dark mode lấy cảm hứng từ bố cục trong video mẫu: nền lưới tối, tiêu đề lớn, ảnh chân dung đen trắng, thanh navigation dạng pill, About, Portfolio Showcase (Projects / Certificates / Tech Stack) và Contact + Guestbook.

## Chạy trên Windows / VS Code

```bash
npm install
npm run dev
```

Mở URL mà Vite in ra (thường là `http://localhost:5173`).

## Chỉnh nội dung

- `src/siteData.js`: tên, mô tả, dự án, kỹ năng, liên kết, email và chứng chỉ.
- `src/styles.css`: màu sắc, khoảng cách, kiểu chữ, animation và responsive.
- `src/main.jsx`: các thành phần giao diện và hành vi tương tác.
- `public/portrait-placeholder.svg`: ảnh minh họa mặc định. Thay bằng ảnh của bạn, ví dụ chép `my-portrait.jpg` vào `public` và chỉnh `avatar: '/my-portrait.jpg'` trong `src/siteData.js`.

### Lưu ý quan trọng

- **Chứng chỉ chưa có:** tab Certificates hiển thị trạng thái rỗng. Thêm chứng chỉ thật vào mảng `certificates` khi có.
- **Email chưa cấu hình:** biểu mẫu liên hệ sẽ sao chép nội dung vào clipboard; điền `owner.email` để nút mở email soạn sẵn cho người gửi. Để nhận tin trên server thực tế cần tích hợp form backend hay dịch vụ email sau.
- **Guestbook:** hoạt động bằng `localStorage` trên từng trình duyệt; không phải bình luận công khai qua internet. Muốn bình luận thật cần database/backend.
- **Ảnh trên thẻ dự án** là mockup thiết kế minh họa dựng bằng CSS, không phải screenshot đã chụp từ ứng dụng của bạn. Thay bằng ảnh thật của từng dự án khi công bố.
- Portfolio sử dụng font Google Fonts nếu có mạng, fallback system sans-serif khi offline.

## Build production

```bash
npm run build
npm run preview
```

Có thể đưa lên Vercel với framework Vite; build command `npm run build`, output directory `dist`.

## Đưa lên GitHub / Vercel

Repository: https://github.com/nguyencongthanh09102005-beep/portoflio.di-n

- Sau khi chấp thuận pull request, clone về máy bằng `git clone https://github.com/nguyencongthanh09102005-beep/portoflio.di-n.git`.
- Cài Node.js 20+ (khuyến nghị 22), chạy `npm install` rồi `npm run dev`.
- Trên Vercel chọn Import Git Repository, Vite, Build Command `npm run build`, Output Directory `dist`.
- Website chưa có domain riêng / email nhận tin công khai; đừng công bố email cá nhân nếu không muốn.