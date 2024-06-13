Web Xem Phim Sử Dụng Vue 3
Giới Thiệu
Đây là một ứng dụng web xem phim đơn giản được xây dựng bằng Vue 3. Ứng dụng cho phép người dùng xem danh sách phim, tìm kiếm phim theo tên, xem thông tin chi tiết và xem phim theo tập

Chức Năng Chính
- Xem danh sách phim phổ biến và theo thể loại.
- Tìm kiếm phim theo tên.
- Xem thông tin phim.
- Xem trailer phim.
- Xem episode phim.
Công Nghệ Sử Dụng
Vue 3: Framework chính để xây dựng ứng dụng.
Vuetify: Library để xây dựng UI.
Vue Router 4: Quản lý điều hướng giữa các trang.
Axios: Library HTTP Client để thực hiện các yêu cầu API.
Pinia: Library để quản lí các state.
Ophim API: Nguồn dữ liệu phim.
Cài Đặt và Chạy Ứng Dụng
Yêu Cầu Hệ Thống
Node.js >= 20.x
npm >= 10.x
Hướng Dẫn Cài Đặt
Clone repository về máy:
bash
Sao chép mã
git clone https://github.com/thanhlichqnuu/Movie-Web.git
Cài đặt các phụ thuộc:

bash
Sao chép mã
npm install
Chạy ứng dụng:

bash
Sao chép mã
npm run serve
Mở trình duyệt và truy cập:

arduino
Sao chép mã
http://localhost:8080
Cấu Trúc Thư Mục Dự Án
plaintext
Sao chép mã
├── public             # Thư mục chứa các file tĩnh
├── src
│   ├── assets         # Thư mục chứa các file tài nguyên như ảnh, css
│   ├── components     # Thư mục chứa các component của ứng dụng
│   ├── pages          # Thư mục chứa các trang của ứng dụng
│   ├── router         # Cấu hình Vue Router
│   ├── store          # Cấu hình Pinia 
│   ├── App.vue        # File root component
│   ├── main.js        # File main entry point
├── .env               # File chứa các biến môi trường
├── package.json       # File cấu hình npm
Triển Khai
Build cho môi trường sản xuất
bash
Sao chép mã
npm run build

Đóng Góp
Nếu bạn muốn đóng góp vào dự án, vui lòng tạo một Pull Request hoặc mở một Issue mới trên GitHub.

Liên Hệ
Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào về dự án, vui lòng liên hệ qua email: thanhlich2103gg@gmail.com

Giấy Phép
Dự án này được cấp phép theo giấy phép MIT. Xem file LICENSE để biết thêm chi tiết.

Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi! Chúc bạn có những trải nghiệm tuyệt vời khi xem phim.
