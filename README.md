# Nguyễn Thị Thùy Duyên
### Real Estate Valuation & Investment Analysis

Portfolio cá nhân của **Nguyễn Thị Thùy Duyên**, định hướng chuyên môn **Thẩm định giá Bất động sản**, phân tích đầu tư và nghiên cứu thị trường tại TP. Hồ Chí Minh.

Website trình bày hồ sơ học tập, năng lực chuyên môn, đồ án và hoạt động khảo sát thực tế trong một giao diện tối giản, hiện đại, hỗ trợ cả điện thoại lẫn máy tính.

## Nội dung portfolio

- **Giới thiệu:** định hướng nghề nghiệp, nền tảng phân tích tài chính, thị trường và pháp lý bất động sản.
- **Học vấn:** Đại học Nông Lâm TP.HCM (2023–2027), chuyên ngành Bất động sản.
- **Chứng chỉ:** Đào tạo nghiệp vụ Thẩm định giá tài sản — Đại học Kinh tế TP.HCM (UEH), 06/2026.
- **Đồ án & nghiên cứu:** Campus Central (Eco-Smart Co-Living), phân tích thị trường BĐS TP.HCM, Live Space Studio, hệ thống WebGIS thông tin địa chính và khảo sát thực địa Ninh Thuận.
- **Kỹ năng:** thẩm định giá, DCF/NPV/IRR, Excel, SPSS, RStudio, GIS, nghiên cứu thị trường và đánh giá pháp lý.
- **Liên hệ:** email, số điện thoại và nút **Tải CV** sử dụng bản PDF chủ hồ sơ cung cấp.

> Các đồ án được trình bày dưới dạng hoạt động học tập/nghiên cứu; ảnh minh họa đồ án không được xem là kết quả dự án thực tế.

## File bảng tính Excel

Trong mục **Dự án** có bảng thực hành **So sánh thẩm định giá máy xúc SUMITOMO**. Nhấn thẻ dự án để xem trước các tiêu chí so sánh, hoặc tải nguyên bản Excel tại `public/Bang_so_sanh_tham_dinh_gia_may_xuc.xlsx` (sheet `PP-SS`; giữ nguyên công thức và định dạng gốc).

## Công nghệ

**React 19 · Vite 7 · CSS responsive**

## Chạy tại máy

Yêu cầu cài đặt Node.js và npm.

```powershell
npm install
npm run dev
```

Mở địa chỉ do Vite hiển thị trong terminal (thường là `http://localhost:5173/`).

Để kiểm tra phiên bản production:

```powershell
npm run build
npm run preview
```

## Cấu trúc quan trọng

| Đường dẫn | Chức năng |
| --- | --- |
| `src/siteData.js` | Nội dung giới thiệu, dự án, chứng chỉ, kỹ năng và liên hệ |
| `src/main.jsx` | Các thành phần giao diện |
| `src/styles.css` | Thiết kế, hiệu ứng và responsive |
| `public/thuy-duyen-portrait.webp` | Ảnh chân dung |
| `public/ueh-certificate-full.webp` | Ảnh chứng chỉ hiển thị trên website |
| `public/CV_Nguyen_Thi_Thuy_Duyen.pdf` | CV PDF được nút Tải CV sử dụng |

**Quyền riêng tư:** Repo này đang công khai. File CV PDF và tài liệu hình ảnh có thể được tải bởi người xem; cần xác nhận quyền công khai các thông tin cá nhân trước khi triển khai website.

## Triển khai

Có thể triển khai lên Vercel bằng cách kết nối repository với cấu hình:

- Framework: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

**Trạng thái mã nguồn:** Website đang nằm ở nhánh `feature/uxui-portfolio-dark-20261112` trong [Pull Request #1](https://github.com/nguyencongthanh09102005-beep/portoflio.di-n/pull/1). Nhánh `main` chỉ có đầy đủ mã nguồn sau khi Pull Request được merge.

## Tài liệu bài làm

Trong phần **Dự án**, mở thẻ **Campus Central** hoặc **Live Space Studio** để xem hoặc tải các PDF được xuất từ file Word người dùng đã cung cấp.

- `public/documents/Campus_Central_Bao_cao.pdf`: báo cáo Campus Central (38 trang).
- `public/documents/LiveSpace_Bao_cao_kha_thi.pdf`: báo cáo khả thi (19 trang).
- `public/documents/LiveSpace_Bao_cao_thuyet_minh.pdf`: báo cáo thuyết minh (51 trang).
- `public/documents/LiveSpace_Thiet_ke_co_so.pdf`: thiết kế cơ sở và bản vẽ (12 trang).

Đây là bài làm học tập, không phải bằng chứng các dự án đã được đầu tư xây dựng thực tế. Khi đăng công khai, nên rà soát số sinh viên và thông tin thành viên nhóm, địa chỉ, chữ ký, dữ liệu nội bộ.
