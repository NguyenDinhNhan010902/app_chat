# Nexus Chat App

Một ứng dụng chat hiện đại được xây dựng với Next.js 15, TypeScript, Tailwind CSS và Zustand.

## Tính năng

-   **Giao diện người dùng hiện đại**: Thiết kế Dark theme, responsive, giống Telegram/Discord.
-   **Quản lý trạng thái**: Sử dụng Zustand cho Auth và Chat state.
-   **Mock Data**: Dữ liệu giả lập thực tế cho User, Conversation và Message.
-   **Kiến trúc sạch**: Tách biệt rõ ràng giữa UI components, logic, types và data.

## Cài đặt và Chạy

1.  Cài đặt dependencies:

```bash
npm install
```

2.  Chạy server phát triển:

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## Cấu trúc thư mục

-   `src/app`: App Router (Pages & Layouts)
-   `src/components`: UI Components tái sử dụng
-   `src/lib`: Utilities và Mock Data
-   `src/store`: Zustand Stores (Auth & Chat)
-   `src/types`: TypeScript Interfaces
