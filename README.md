# B25DCTV081 - Buoi9

- Họ tên / Mã SV: B25DCTV081
- Học phần: Lập trình Web
- Bài tập về nhà Buổi 9: Function Component & Hooks

## Hướng dẫn chạy

```bash
cd "Buoi 9"
npm install
npm run dev
```

## Nội dung bài tập

### 1. Quản lý sinh viên bằng Hooks
- Viết lại toàn bộ từ Class Component sang Function Component.
- Quản lý state với `useState` cho form nhập liệu và tìm kiếm theo tên.
- Validate: Họ tên tối thiểu 3 ký tự, email đúng định dạng, GPA từ 0 đến 4.
- Xóa sinh viên có hộp thoại xác nhận `window.confirm`.

### 2. Custom Hook `useFetch`
- Tách logic gọi API thành hook tái sử dụng `useFetch(url)`.
- Xử lý đủ 3 trạng thái:
  - Đang tải: `loading`
  - Báo lỗi: `error`
  - Dữ liệu trả về: `data`
- Effect có dependency đúng: `[url]`.

### 3. ThemeContext (Sáng / Tối)
- Sử dụng `createContext` và `useContext` để cung cấp và tiêu thụ theme toàn cục.
- Nút chuyển đổi chế độ Sáng / Tối thay đổi màu nền và màu chữ của toàn bộ ứng dụng.

### 4. Đồng hồ & Lifecycle bằng `useEffect`
- Sử dụng `useEffect` có return function để dọn dẹp timer (`clearInterval`) khi component unmount.
- Sử dụng `useEffect` lắng nghe state `count` để cập nhật `document.title`.
