**tiếng việt** · [english](README.en.md)

# minh.website

trang cá nhân dùng sveltekit và keyflow: điều hướng bằng bàn phím, chuột hoặc cảm ứng; dự án, hướng dẫn sử dụng, cấu hình, cài đặt và bài viết nằm trong các màn hình theo mã băm.

## ngôn ngữ

mặc định là tiếng việt. mở **cài đặt → ngôn ngữ** trên trang chính để chuyển sang english. nút có phím tắt keyflow như các điều khiển khác. lựa chọn được lưu trên thiết bị qua `localStorage`, tách khỏi tùy chọn giao diện, phóng to và cuộn của keyflow.

văn bản điều hướng, hướng dẫn dự án, bài viết, chú thích, nhãn trợ năng, siêu dữ liệu và hình hướng dẫn đều theo ngôn ngữ đã chọn. url, tên tệp, mã thực thi và tư liệu gốc được giữ nguyên. nội dung và bản dịch bài viết chỉ được tải khi mở màn hình đó.

## phát triển và xác minh

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check:i18n
pnpm check
pnpm build
```

`src/lib/i18n.svelte.ts` quản lý ngôn ngữ. văn bản nguồn là bản tiếng anh; `src/lib/locales/vi.json` chứa bản dịch dùng chung, còn `src/lib/locales/screens/` chứa bản dịch tải theo bài. `check:i18n` kiểm tra độ phủ để tránh bỏ sót văn bản giao diện.

bản dựng tĩnh nằm trong `build/`. đẩy vào nhánh `main` sẽ chạy quy trình github pages ở `.github/workflows/svelte.yml`. hướng dẫn kỹ thuật đầy đủ bằng tiếng anh nằm trong [README.en.md](README.en.md).

## keyflow và liên kết phát hành

trang dùng keyflow 0.8.3, khớp bản phát hành hiện tại. giữ gói trong `vendor/`, `package.json`, tệp khóa và tài liệu nhất quán khi cập nhật. đọc `skills/minh-website-maintenance/SKILL.md` trước khi chỉnh sửa.

liên kết tải siêu việt dùng các tệp đã phát hành thực tế, gồm gói ubuntu 26.04 amd64/arm64. nếu api github không khả dụng, trang vẫn giữ liên kết có phiên bản đã xác minh thay vì phỏng đoán tên tệp. giữ nguyên các mã băm và url cũ khi đổi văn bản.
