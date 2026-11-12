# Nguyễn Thị Thùy Duyên — Real Estate Valuation Portfolio

Portfolio dark mode, responsive, xây dựng bằng React 19 + Vite 7. Nội dung dựa trên CV, bản giới thiệu cá nhân và ảnh được chủ hồ sơ cung cấp vào tháng 11/2026. Đây là portfolio về **thẩm định giá bất động sản**, không phải portfolio UX/UI.

## Khởi chạy trên Windows / VS Code

```powershell
npm install
npm run dev
```

Mở URL mà Vite in trên terminal (thường `http://localhost:5173/`). Build production: `npm run build` (thư mục `dist/`).

## Nội dung đã có

- Chân dung Thùy Duyên; giới thiệu nghề nghiệp và mục tiêu phát triển.
- 5 đồ án/nội dung thực hành: Campus Central, thị trường BĐS TP.HCM, Live Space Studio, WebGIS địa chính, khảo sát Ninh Thuận.
- Học vấn Đại học Nông Lâm TP.HCM (2023–2027) và chứng chỉ UEH (06/2026).
- Kỹ năng: thẩm định giá, mô hình tài chính, Excel, SPSS, RStudio, GIS và pháp lý BĐS.
- Liên hệ bằng `mailto:`; khi nhấn gửi sẽ mở ứng dụng email của người xem, **không có backend nhận form trực tiếp**.

## Chỉnh nội dung / ảnh

- `src/siteData.js`: tên, bio, dự án, học vấn, chứng chỉ, kỹ năng, email, điện thoại.
- `src/main.jsx`: bố cục và thành phần giao diện.
- `src/styles.css`: giao diện dark grid và responsive.
- `public/thuy-duyen-portrait.webp`: ảnh chân dung đã được nén, xóa metadata EXIF.
- `public/ueh-certificate-heading.webp`: **chỉ là phần tiêu đề được cắt từ ảnh chứng chỉ**, không phải bản sao đầy đủ.

**Quyền riêng tư:** Không upload bản gốc giấy chứng nhận có số CMND/CCCD, ngày sinh, địa chỉ chi tiết, hoặc CV đầy đủ chứa thông tin nhạy cảm lên website / repo công khai. Dữ liệu liên hệ công khai (`email`, `phone`) có thể xóa trong `src/siteData.js` nếu không muốn nhận liên hệ trực tiếp.

## Công bố

Dùng Vercel: Import Git Repository → Vite → Build Command `npm run build` → Output `dist`. Chỉ công bố khi đã kiểm tra ảnh và thông tin cá nhân.

Các hình bìa đồ án là **mockup minh họa**, không phải ảnh chụp kết quả thực tế. Không có liên kết giả hoặc số liệu hiệu quả tự tạo. Dự án ghi đúng là đồ án/nghiên cứu, không ngụ ý kinh nghiệm làm việc chuyên nghiệp.
