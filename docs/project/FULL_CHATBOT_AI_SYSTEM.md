# 🚀 Multi-Platform AI Chatbot Ecosystem: Dokumen Sistem Terpadu

Selamat datang di ekosistem **Chatbot AI Generasi Terbaru**. Sistem ini bukan sekadar chatbot biasa, melainkan sebuah solusi cerdas yang mengintegrasikan **Aplikasi Mobile (Frontend)**, **AI Engine (Backend)**, dan **Admin Control Panel** menjadi satu kesatuan yang kooperatif dan *self-learning*.

---

## 🏆 Mengapa Memilih Sistem Kami? (Promosi & Keunggulan)

Sistem Chatbot ini dirancang untuk menyelesaikan masalah kompleksitas data dengan cara yang paling natural: **Melalui Percakapan.**

1.  **Kecerdasan Multi-Model**: Mendukung berbagai AI kelas dunia (Gemini, Llama, DeepSeek) yang dapat beralih secara otomatis untuk menjamin respons terbaik.
2.  **Schema-Aware Intelligence**: Tidak hanya menjawab pertanyaan umum, AI kami benar-benar "mengenal" database internal Anda. Ia tahu struktur tabel, tipe data, dan nilai-nilai unik di dalamnya.
3.  **Aksesibilitas Tanpa Batas**: Gunakan di mana saja! Mulai dari aplikasi mobile berbasis Expo (Android/iOS) hingga dashboard admin berbasis web yang responsif.
4.  **Keamanan & Privasi**: Dilengkapi dengan sistem PIN Chat, OTP (WhatsApp/Email), dan enkripsi sesi untuk melindungi data sensitif Anda.
5.  **Offline-Friendly & Fast**: Menggunakan caching cerdas untuk memastikan pengalaman pengguna yang mulus meskipun koneksi tidak stabil.

---

## 🏗️ Struktur Sistem (3 Pilar Utama)

Sistem ini terdiri dari tiga komponen besar yang saling terhubung:

| Komponen | Nama Folder | Teknologi | Peran |
| :--- | :--- | :--- | :--- |
| **Frontend** | `aplikasichatbot-frontend` | React Native (Expo), TypeScript | Interface pengguna di smartphone (Android/iOS). |
| **Backend** | `chatbot-backend` | Node.js (Express), AI Orchestration | Otak sistem yang memproses logika, database, dan AI. |
| **Admin** | `chatbot-admin` | React.js (Vite), Tailwind CSS | Panel kendali pusat untuk manajemen user & data. |

---

## ✨ Fitur-Fitur Unggulan

### 📱 1. Fitur Mobile (User Experience)
*   **Voice Recognition**: Ketik pesan hanya dengan suara (Voice-to-Text).
*   **Secure Authentication**: Login aman dengan OTP WhatsApp/Email dan PIN Chat untuk percakapan rahasia.
*   **Export Data**: Ubah hasil percakapan data menjadi file **PDF** atau **Excel** secara instan.
*   **Smart History**: Riwayat chat yang terorganisir dengan fitur "Pin Chat" dan pencarian cepat.
*   **Real-time Notifications**: Pemberian info penting langsung ke perangkat pengguna.

### 🧠 2. Fitur Backend (The Brain)
*   **Hybrid Query Engine**: Menggabungkan kecepatan **Regex Processing** dengan fleksibilitas **LLM (AI)**.
*   **Adaptive Learning**: Sistem belajar dari kesalahan. Jika AI salah menjawab, ia akan mencatatnya dan memperbaiki pola di masa depan.
*   **Multi-Database Router**: Secara otomatis mengarahkan pertanyaan ke database yang tepat (misal: data mahasiswa, data perusahaan, atau data inventaris).
*   **API Data Sync**: Sinkronisasi data otomatis dari berbagai sumber API eksternal.

### ⚙️ 3. Fitur Admin Panel (The Control)
*   **Live Dashboard**: Pantau statistik chat, pengguna aktif, dan tren pertanyaan harian secara real-time.
*   **User Management**: Kontrol penuh (Aktif/Non-aktifkan) terhadap akses pengguna.
*   **Database Manager**: Import data dari URL API mana pun hanya dengan satu klik (Auto-schema detection).
*   **AI Key Management**: Atur dan ganti API Key (Gemini, Llama, dll) dengan mudah tanpa mengganggu sistem yang jalan.
*   **Premium Customization**: Berbagai pilihan theme (Glass Light, Dark, Cyberpunk, Spongebob, dll).

---

## ✨ Model AI yang Didukung (Multi-Engine)

Kami tidak bergantung pada satu AI saja. Sistem ini mendukung arsitektur *redundancy* dengan model-model berikut:

*   **Google Gemini 1.5 Flash**: Super cepat dan akurat untuk instruksi kompleks.
*   **Meta Llama 3.3 (70B & 8B)**: Kekuatan open-source terbaik untuk logika SQL.
*   **DeepSeek Chat**: Sangat efisien dalam pemahaman bahasa Indonesia.
*   **Mistral Small**: Model ringan yang gesit untuk tugas-tugas rutin.
*   **Cohere Command R+**: Ahli dalam meringkas dokumen dan data panjang.

---

## 🛠️ Cara Menjalankan Aplikasi (Get Started)

### 1. Persiapan Backend (Paling Utama)
```bash
# Pindah ke folder backend
cd chatbot-backend
# Install aplikasi
npm install
# Jalankan server
node server.js
```

### 2. Persiapan Admin Panel
```bash
# Pindah ke folder admin
cd chatbot-admin
# Install aplikasi
npm install
# Jalankan web admin
npm run dev
```

### 3. Persiapan Mobile App
```bash
# Pindah ke folder frontend
cd aplikasichatbot-frontend
# Install aplikasi
npm install
# Jalankan expo (untuk tes di HP)
npx expo start
```

---

## 📈 Roadmap & Masa Depan

Sistem ini terus berkembang dengan fokus pada:
- **Graph Visualization**: Menampilkan data statistik langsung di dalam chat.
- **Cross-Database Fallback**: Kemampuan mencari data di semua database sekaligus jika satu database tidak memberikan hasil.
- **Entity Extractor**: Deteksi nama, tanggal, dan angka secara otomatis untuk filter yang lebih tajam.

---
*Dibuat dengan ❤️ untuk sistem monitoring dan komunikasi data yang lebih cerdas.*
