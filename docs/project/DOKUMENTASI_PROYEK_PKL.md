# DOKUMENTASI PROYEK PKL
# APLIKASI ASISTEN CHATBOT AI BERBASIS MOBILE

---

## 1. PENDAHULUAN

### 1.1 Latar Belakang Proyek

Di era digital saat ini, kebutuhan akan asisten virtual yang dapat membantu pengguna dalam berbagai aktivitas semakin meningkat. Banyak pengguna yang memerlukan akses cepat terhadap informasi dan bantuan tanpa harus menunggu lama atau mencari secara manual. Untuk menjawab kebutuhan tersebut, dikembangkanlah aplikasi **Asisten Chatbot AI** yang dapat memberikan respons otomatis dan cerdas kepada pengguna.

Aplikasi ini dirancang untuk memberikan pengalaman interaksi yang mudah dan intuitif melalui perangkat mobile. Pengguna dapat mengajukan pertanyaan, mendapatkan informasi, dan menerima bantuan secara real-time melalui antarmuka chat yang familiar seperti aplikasi pesan pada umumnya.

### 1.2 Permasalahan yang Ingin Diselesaikan

Beberapa permasalahan yang ingin diselesaikan melalui aplikasi ini adalah:

1. **Keterbatasan Akses Informasi**: Pengguna sering kesulitan mendapatkan informasi dengan cepat karena harus mencari secara manual atau menunggu respons dari customer service.

2. **Ketergantungan pada Jam Kerja**: Layanan bantuan konvensional hanya tersedia pada jam kerja tertentu, sehingga pengguna tidak dapat memperoleh bantuan di luar jam tersebut.

3. **Kurangnya Personalisasi**: Sistem informasi konvensional tidak dapat menyimpan riwayat percakapan pengguna, sehingga setiap kali pengguna bertanya harus mengulang konteks dari awal.

4. **Antarmuka yang Kompleks**: Banyak aplikasi informasi memiliki antarmuka yang rumit dan tidak user-friendly, terutama bagi pengguna awam.

5. **Tidak Ada Sistem Autentikasi**: Tanpa sistem login, data pengguna tidak tersimpan dan tidak ada personalisasi layanan.

### 1.3 Alasan Pemilihan Teknologi

Pemilihan teknologi dalam proyek ini didasarkan pada beberapa pertimbangan:

**A. React Native dengan Expo**
- **Cross-platform**: Satu kode dapat berjalan di Android dan iOS, menghemat waktu dan biaya pengembangan
- **Hot Reload**: Mempercepat proses development dengan melihat perubahan secara langsung
- **Ekosistem yang Kuat**: Memiliki banyak library dan komunitas yang aktif
- **Performa Native**: Menghasilkan aplikasi dengan performa mendekati aplikasi native

**B. TypeScript**
- **Type Safety**: Mengurangi bug dengan deteksi error saat development
- **Autocomplete**: Meningkatkan produktivitas dengan IntelliSense
- **Maintainability**: Kode lebih mudah dipahami dan di-maintain

**C. Node.js Backend**
- **JavaScript Full-stack**: Menggunakan bahasa yang sama di frontend dan backend
- **Non-blocking I/O**: Cocok untuk aplikasi real-time seperti chat
- **NPM Ecosystem**: Akses ke ribuan package yang siap pakai

**D. MySQL Database**
- **Relational Database**: Cocok untuk menyimpan data terstruktur seperti user dan chat history
- **ACID Compliance**: Menjamin integritas data
- **Mature Technology**: Stabil dan banyak dokumentasi

**E. Google Gemini AI**
- **Gratis untuk Development**: Tidak memerlukan biaya untuk testing
- **Powerful AI**: Mampu memahami konteks dan memberikan jawaban yang relevan
- **API yang Mudah**: Dokumentasi lengkap dan mudah diintegrasikan

---

## 2. TUJUAN PEMBUATAN PROYEK

### 2.1 Tujuan Umum

Mengembangkan aplikasi mobile berbasis AI yang dapat membantu pengguna dalam mendapatkan informasi dan bantuan secara cepat, mudah, dan tersedia 24/7 melalui antarmuka chat yang intuitif.

### 2.2 Tujuan Khusus

1. **Membangun Sistem Autentikasi yang Aman**
   - Mengimplementasikan sistem registrasi dengan verifikasi email menggunakan OTP
   - Membuat sistem login dengan enkripsi password menggunakan bcrypt
   - Menyediakan fitur lupa password dengan reset melalui email
   - Mengintegrasikan auto-login untuk kenyamanan pengguna

2. **Mengembangkan Fitur Chat yang Responsif**
   - Membuat antarmuka chat yang mirip dengan aplikasi messaging populer
   - Mengimplementasikan real-time messaging dengan loading indicator
   - Menampilkan timestamp pada setiap pesan
   - Menyediakan fitur copy pesan dengan long press

3. **Mengintegrasikan AI untuk Respons Otomatis**
   - Menghubungkan aplikasi dengan Google Gemini AI
   - Membuat sistem fallback ke database lokal jika AI tidak dapat menjawab
      - Memastikan respons AI yang cepat dan relevan

4. **Membangun Sistem Manajemen Riwayat Chat**
   - Menyimpan semua percakapan pengguna ke database
   - Membuat fitur untuk melihat dan melanjutkan chat sebelumnya
   - Mengimplementasikan fitur pin chat untuk percakapan penting
   - Menyediakan fitur edit judul chat dan hapus chat

5. **Mengimplementasikan Fitur Personalisasi**
   - Membuat sistem tema (Light, Dark, Spongebob, Doraemon)
   - Menyediakan fitur upload foto profil
   - Membuat halaman pengaturan akun yang lengkap

6. **Memastikan User Experience yang Baik**
   - Desain UI/UX yang modern dan intuitif
   - Animasi yang smooth dan tidak mengganggu
   - Feedback visual untuk setiap aksi pengguna
   - Responsive design untuk berbagai ukuran layar

---

## 3. MANFAAT PROYEK

### 3.1 Manfaat bagi Pengguna

1. **Akses Informasi 24/7**
   - Pengguna dapat mengajukan pertanyaan kapan saja tanpa terbatas waktu
   - Tidak perlu menunggu jam kerja untuk mendapatkan bantuan
   - Respons diberikan secara instan

2. **Kemudahan Penggunaan**
   - Antarmuka chat yang familiar dan mudah dipahami
   - Tidak memerlukan training khusus untuk menggunakan aplikasi
   - Navigasi yang intuitif

3. **Personalisasi Layanan**
   - Riwayat chat tersimpan dan dapat diakses kembali
   - Tema dapat disesuaikan dengan preferensi pengguna
   - Profil pengguna dapat dikustomisasi

4. **Efisiensi Waktu**
   - Mendapatkan jawaban langsung tanpa perlu mencari manual
   - Dapat melanjutkan percakapan sebelumnya tanpa mengulang konteks
   - Fitur pin chat untuk akses cepat ke percakapan penting

### 3.2 Manfaat bagi Instansi

1. **Mengurangi Beban Customer Service**
   - Pertanyaan umum dapat dijawab otomatis oleh AI
   - Customer service dapat fokus pada masalah yang lebih kompleks
   - Mengurangi antrian dan waktu tunggu

2. **Meningkatkan Kepuasan Pelanggan**
   - Respons cepat meningkatkan kepuasan pengguna
   - Layanan 24/7 meningkatkan aksesibilitas
   - Pengalaman pengguna yang baik meningkatkan loyalitas

3. **Efisiensi Operasional**
   - Mengurangi biaya operasional customer service
   - Satu sistem dapat melayani banyak pengguna secara bersamaan
   - Data percakapan dapat dianalisis untuk insight bisnis

4. **Skalabilitas**
   - Sistem dapat menangani pertumbuhan jumlah pengguna
   - Mudah untuk menambahkan fitur baru
   - Dapat diintegrasikan dengan sistem lain

### 3.3 Manfaat bagi Siswa PKL

1. **Pengalaman Praktis**
   - Belajar mengembangkan aplikasi mobile dari awal hingga selesai
   - Memahami full-stack development (frontend dan backend)
   - Pengalaman bekerja dengan teknologi modern dan relevan

2. **Peningkatan Skill Teknis**
   - Menguasai React Native dan TypeScript
   - Memahami integrasi API dan database
   - Belajar implementasi AI dalam aplikasi
   - Memahami sistem autentikasi dan keamanan

3. **Pemahaman Proses Development**
   - Belajar planning dan design aplikasi
   - Memahami version control dengan Git
   - Pengalaman debugging dan problem solving
   - Belajar dokumentasi dan testing

4. **Portfolio yang Kuat**
   - Memiliki proyek nyata yang dapat ditunjukkan ke calon employer
   - Demonstrasi kemampuan full-stack development
   - Bukti kemampuan bekerja dengan teknologi modern

---

## 4. DESKRIPSI UMUM APLIKASI

### 4.1 Gambaran Singkat Aplikasi

**Asisten Chatbot AI** adalah aplikasi mobile berbasis React Native yang menyediakan layanan asisten virtual cerdas. Aplikasi ini memungkinkan pengguna untuk berinteraksi dengan AI melalui antarmuka chat yang familiar, mirip dengan aplikasi messaging seperti WhatsApp atau Telegram.

Aplikasi ini dilengkapi dengan sistem autentikasi yang aman, manajemen riwayat percakapan, dan berbagai fitur personalisasi. Pengguna dapat mengajukan berbagai jenis pertanyaan, dan sistem akan memberikan jawaban yang relevan baik dari AI maupun dari database pengetahuan yang telah disiapkan.

### 4.2 Cara Kerja Sistem Secara Umum

**Arsitektur Sistem:**

```
[Mobile App (React Native)] 
        ↕️
[Backend Server (Node.js + Express)]
        ↕️
[MySQL Database] + [Google Gemini AI API]
```

**Alur Kerja:**

1. **Autentikasi Pengguna**
   - Pengguna membuka aplikasi
   - Sistem mengecek token autentikasi di local storage
   - Jika token valid, langsung masuk ke halaman chat
   - Jika tidak ada token, tampilkan halaman login

2. **Proses Chat**
   - Pengguna mengetik pesan di input field
   - Pesan dikirim ke backend server
   - Backend memproses pertanyaan:
     * Cek apakah ada jawaban di database lokal
     * Jika tidak ada, kirim ke Google Gemini AI
     * AI memproses dan mengembalikan jawaban
   - Jawaban dikirim kembali ke aplikasi
   - Aplikasi menampilkan jawaban dengan animasi
   - Percakapan disimpan ke database

3. **Manajemen Riwayat**
   - Setiap percakapan otomatis tersimpan
   - Pengguna dapat melihat daftar chat di sidebar
   - Dapat melanjutkan chat sebelumnya
   - Dapat mengedit judul atau menghapus chat

### 4.3 Alur Penggunaan Aplikasi

**A. Registrasi Pengguna Baru**
1. Pengguna membuka aplikasi dan memilih "Buat akun"
2. Mengisi email di halaman pertama
3. Sistem mengirim kode OTP ke email
4. Pengguna memasukkan kode OTP untuk verifikasi
5. Mengisi nama dan password
6. Akun berhasil dibuat dan langsung login

**B. Login Pengguna**
1. Pengguna membuka aplikasi
2. Memasukkan email dan password
3. Sistem memverifikasi kredensial
4. Jika valid, pengguna masuk ke halaman chat
5. Token disimpan untuk auto-login berikutnya

**C. Menggunakan Chatbot**
1. Pengguna berada di halaman chat
2. Mengetik pertanyaan di input field
3. Menekan tombol kirim
4. Melihat loading indicator saat AI memproses
5. Menerima jawaban dari bot
6. Dapat melanjutkan percakapan atau memulai chat baru

**D. Mengelola Riwayat Chat**
1. Pengguna membuka sidebar menu
2. Melihat daftar percakapan sebelumnya
3. Dapat memilih chat untuk dilanjutkan
4. Dapat pin chat penting dengan swipe
5. Dapat edit judul atau hapus chat dengan long press

**E. Personalisasi**
1. Pengguna membuka menu pengaturan
2. Dapat mengganti foto profil
3. Dapat memilih tema (Light/Dark/Spongebob/Doraemon)
4. Dapat mengedit nama profil
5. Dapat logout dari akun

---

## 5. STRUKTUR FOLDER DAN FILE

### 5.1 Struktur Utama Proyek

```
aplikasichatbot-frontend/
├── android/                 # Konfigurasi Android native
├── app/                     # File routing Expo Router
├── assets/                  # Gambar, icon, dan media
├── components/              # Komponen UI reusable
├── config/                  # File konfigurasi
├── constants/               # Konstanta aplikasi
├── contexts/                # React Context untuk state management
├── hooks/                   # Custom React Hooks
├── lib/                     # Library dan utilities
├── navigation/              # Konfigurasi navigasi
├── screens/                 # Halaman-halaman aplikasi
├── types/                   # TypeScript type definitions
├── utils/                   # Fungsi-fungsi helper
└── App.tsx                  # Entry point aplikasi
```

### 5.2 Penjelasan Detail Setiap Folder

#### **A. Folder `android/`**
**Fungsi**: Berisi konfigurasi native untuk platform Android

**File Penting**:
- `app/build.gradle`: Konfigurasi build Android
- `app/google-services.json`: Konfigurasi Google Services (untuk Google Sign In)
- `app/src/main/AndroidManifest.xml`: Manifest aplikasi Android
- `app/src/main/java/.../MainActivity.kt`: Activity utama Android
- `app/src/main/res/`: Resource Android (icon, splash screen, dll)

**Peran dalam Sistem**: Folder ini diperlukan untuk build aplikasi menjadi file APK yang dapat diinstall di perangkat Android. Berisi konfigurasi permissions, icon aplikasi, splash screen, dan integrasi dengan native modules.

---

#### **B. Folder `app/`**
**Fungsi**: Routing berbasis file untuk Expo Router (tidak digunakan dalam proyek ini)

**File**:
- `_layout.tsx`: Layout wrapper
- `index.tsx`: Halaman index (di-comment karena menggunakan navigation manual)
- `about.tsx`: Halaman about

**Peran dalam Sistem**: Folder ini adalah bagian dari Expo Router yang memungkinkan routing berbasis file system. Namun dalam proyek ini, routing dihandle secara manual menggunakan React Navigation di folder `navigation/`.

---

#### **C. Folder `assets/`**
**Fungsi**: Menyimpan semua aset media seperti gambar, icon, dan file audio

**Struktur**:
```
assets/
└── images/
    ├── sound/                          # File audio
    ├── android-icon-background.png     # Background icon Android
    ├── android-icon-foreground.png     # Foreground icon Android
    ├── android-icon-monochrome.png     # Icon monochrome
    ├── favicon.png                     # Favicon web
    ├── icon.png                        # Icon aplikasi
    ├── logo_mm-removebg-preview.png    # Logo aplikasi
    ├── splash-icon.png                 # Icon splash screen
    └── react-logo.png                  # Logo React (contoh)
```

**Peran dalam Sistem**: Menyediakan semua aset visual dan audio yang digunakan dalam aplikasi. Icon digunakan untuk launcher aplikasi, splash screen ditampilkan saat aplikasi pertama kali dibuka, dan logo digunakan di halaman login dan header.

---

#### **D. Folder `components/`**
**Fungsi**: Berisi komponen UI yang dapat digunakan kembali (reusable components)

**File dan Fungsinya**:

1. **`ui/collapsible.tsx`**
   - Komponen untuk membuat section yang dapat di-collapse/expand
   - Digunakan untuk menghemat space di UI

2. **`ui/icon-symbol.tsx` & `ui/icon-symbol.ios.tsx`**
   - Komponen icon khusus untuk iOS
   - Menyediakan SF Symbols untuk iOS

3. **`external-link.tsx`**
   - Komponen untuk membuka link eksternal
   - Membuka browser atau aplikasi eksternal

4. **`haptic-tab.tsx`**
   - Komponen tab dengan haptic feedback
   - Memberikan getaran saat tab ditekan

5. **`hello-wave.tsx`**
   - Komponen animasi wave (contoh)
   - Demonstrasi animasi sederhana

6. **`MessageTextWithLinks.tsx`** ⭐ **PENTING**
   - Komponen untuk menampilkan pesan dengan deteksi link otomatis
   - Link dapat diklik dan dibuka di browser
   - Mendukung format markdown sederhana
   - Digunakan di ChatScreen untuk menampilkan pesan bot

7. **`parallax-scroll-view.tsx`**
   - Komponen scroll view dengan efek parallax
   - Memberikan efek visual yang menarik

8. **`SwipeableChatItem.tsx`** ⭐ **PENTING**
   - Komponen untuk item chat yang dapat di-swipe
   - Swipe kanan untuk pin/unpin chat
   - Digunakan di sidebar riwayat chat

9. **`themed-text.tsx` & `themed-view.tsx`**
   - Komponen Text dan View yang otomatis mengikuti tema
   - Mendukung light/dark mode

**Peran dalam Sistem**: Komponen-komponen ini membuat kode lebih modular dan mudah di-maintain. Komponen dapat digunakan di berbagai halaman tanpa perlu menulis ulang kode yang sama.

---

#### **E. Folder `config/`**
**Fungsi**: Menyimpan file konfigurasi aplikasi

**File dan Fungsinya**:

1. **`api-config.ts`** ⭐ **SANGAT PENTING**
   ```typescript
   export const API_CONFIG = {
     BACKEND_URL: "http://10.251.108.24:3000"
   };
   ```
   - Menyimpan URL backend server
   - Dapat diganti sesuai mode (WiFi sama, Ngrok, DevTunnels)
   - Digunakan di seluruh aplikasi untuk API calls

2. **`gemini-config.ts`**
   - Konfigurasi Google Gemini AI
   - Menyimpan API key dan endpoint
   - Digunakan untuk integrasi AI

3. **`socket-config.ts`**
   - Konfigurasi Socket.IO (jika digunakan)
   - Untuk real-time communication

**Peran dalam Sistem**: File konfigurasi memudahkan perubahan setting tanpa perlu mengubah kode di banyak tempat. Cukup ubah di satu file config, semua bagian aplikasi akan mengikuti.

---


#### **F. Folder `constants/`**
**Fungsi**: Menyimpan konstanta yang digunakan di seluruh aplikasi

**File**:
- **`colors.ts`**: Definisi warna-warna yang digunakan dalam aplikasi
  ```typescript
  export const Colors = {
    primary: "#007AFF",
    secondary: "#5856D6",
    background: "#FFFFFF",
    // ... dll
  };
  ```

**Peran dalam Sistem**: Memastikan konsistensi warna di seluruh aplikasi. Jika ingin mengubah warna tema, cukup ubah di file ini.

---

#### **G. Folder `contexts/`**
**Fungsi**: Menyimpan React Context untuk state management global

**File**:
- **`ThemeContext.tsx`** ⭐ **PENTING**
  - Mengelola tema aplikasi (Light, Dark, Spongebob, Doraemon)
  - Menyimpan preferensi tema di AsyncStorage
  - Menyediakan fungsi toggleTheme untuk mengubah tema
  - Menyediakan object colors yang berubah sesuai tema
  - Digunakan di seluruh aplikasi melalui useTheme hook

**Cara Kerja**:
```typescript
// Di ThemeContext.tsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  
  const colors = theme === "dark" ? darkColors : lightColors;
  
  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Di komponen lain
const { colors, theme, toggleTheme } = useTheme();
```

**Peran dalam Sistem**: Memungkinkan seluruh aplikasi mengakses dan mengubah tema secara konsisten. Ketika tema diubah, semua komponen yang menggunakan useTheme akan otomatis re-render dengan warna yang sesuai.

---

#### **H. Folder `hooks/`**
**Fungsi**: Menyimpan custom React Hooks

**File dan Fungsinya**:

1. **`use-color-scheme.ts`**
   - Hook untuk mendeteksi color scheme sistem (light/dark)
   - Menggunakan Appearance API dari React Native
   - Otomatis update ketika user mengubah tema sistem

2. **`use-color-scheme.web.ts`**
   - Versi web dari use-color-scheme
   - Menggunakan media query untuk deteksi tema

3. **`use-theme-color.ts`**
   - Hook untuk mendapatkan warna berdasarkan tema
   - Menyederhanakan penggunaan warna di komponen

**Peran dalam Sistem**: Custom hooks membuat logic dapat digunakan kembali di berbagai komponen tanpa duplikasi kode.

---

#### **I. Folder `lib/`**
**Fungsi**: Menyimpan library dan utility functions yang kompleks

**File dan Fungsinya**:

1. **`gemini.ts`**
   - Fungsi untuk berkomunikasi dengan Google Gemini AI
   - Mengirim pesan ke API dan menerima respons
   - Handle error dan format response
   ```typescript
   export async function sendMessageToGemini(message: string): Promise<string> {
     // Kirim request ke Gemini API
     // Return response text
   }
   ```

2. **`types.ts`**
   - Definisi TypeScript types dan interfaces
   - Digunakan di seluruh aplikasi untuk type safety
   ```typescript
   export interface ChatMessage {
     id: string;
     text: string;
     sender: 'user' | 'bot';
     timestamp: Date;
   }
   ```

**Peran dalam Sistem**: Memisahkan logic kompleks dari komponen UI, membuat kode lebih terorganisir dan mudah di-test.

---

#### **J. Folder `navigation/`**
**Fungsi**: Mengatur navigasi dan routing aplikasi

**File**:
- **`AppNavigator.tsx`** ⭐ **SANGAT PENTING**

**Fungsi Detail**:
1. **Setup Stack Navigator**
   - Menggunakan React Navigation Stack
   - Mendefinisikan semua screen yang ada
   - Mengatur transisi antar screen

2. **Auto-Login Logic**
   ```typescript
   const checkSession = async () => {
     const token = await AsyncStorage.getItem("userToken");
     if (token) {
       // Verifikasi token ke backend
       // Jika valid, set initialRoute ke "Chat"
     } else {
       // Set initialRoute ke "Login"
     }
   };
   ```

3. **Screen Configuration**
   - Login Screen
   - SignUp Screen (Email → OTP → Password)
   - ForgotPassword Screen
   - ResetPassword Screen
   - Chat Screen (Main)
   - AccountSettings Screen

4. **Loading Screen**
   - Ditampilkan saat mengecek session
   - Mencegah flash of wrong screen

**Peran dalam Sistem**: AppNavigator adalah jantung navigasi aplikasi. Mengatur alur perpindahan antar halaman, menentukan screen mana yang ditampilkan pertama kali, dan mengelola authentication flow.

---

#### **K. Folder `screens/`**
**Fungsi**: Berisi semua halaman/screen aplikasi

**Struktur**:
```
screens/
├── auth/                    # Halaman autentikasi
│   ├── LoginScreen.tsx
│   ├── SignUpEmailScreen.tsx
│   ├── SignUpPasswordScreen.tsx
│   ├── VerificationCodeScreen.tsx
│   ├── ForgotPasswordEmailScreen.tsx
│   └── ResetPasswordScreen.tsx
├── main/                    # Halaman utama
│   ├── ChatScreen.tsx
│   ├── HomeScreen.tsx
│   ├── AccountSettingsScreen.tsx
│   ├── EditProfileScreen.tsx
│   ├── ModelAIScreen.tsx
│   ├── ThemeSettingsScreen.tsx
│   ├── PrivacyPolicyScreen.tsx
│   ├── TermsConditionsScreen.tsx
│   └── WelcomeScreen.tsx
└── LoadingScreen.tsx        # Loading screen
```

**Penjelasan Detail Setiap Screen**:

##### **1. LoginScreen.tsx** ⭐
**Fungsi**: Halaman login pengguna

**Fitur**:
- Input email dan password
- Validasi format email
- Show/hide password
- Error handling dengan pesan yang jelas
- Loading indicator saat proses login
- Link ke halaman registrasi
- Link ke halaman lupa password
- Modal untuk akun yang dinonaktifkan

**Alur Kerja**:
1. User memasukkan email dan password
2. Validasi input di frontend
3. Kirim request ke backend `/api/auth/login`
4. Backend verifikasi kredensial
5. Jika valid, terima token dan user data
6. Simpan token ke AsyncStorage
7. Navigate ke ChatScreen

**Kode Penting**:
```typescript
const handleLogin = async () => {
  // Validasi input
  if (!email || !password) return;
  
  // Kirim ke backend
  const response = await fetch(`${API_CONFIG.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  
  // Simpan token
  await AsyncStorage.setItem("userToken", data.token);
  
  // Navigate
  navigation.reset({ index: 0, routes: [{ name: "Home" }] });
};
```

---

##### **2. SignUpEmailScreen.tsx** ⭐
**Fungsi**: Halaman pertama registrasi - input email

**Fitur**:
- Input email
- Validasi format email
- Cek apakah email sudah terdaftar
- Kirim OTP ke email
- Loading indicator
- Error handling

**Alur Kerja**:
1. User memasukkan email
2. Validasi format email
3. Kirim request ke backend untuk cek email dan kirim OTP
4. Backend kirim email berisi kode OTP
5. Navigate ke VerificationCodeScreen

---

##### **3. VerificationCodeScreen.tsx** ⭐
**Fungsi**: Halaman verifikasi kode OTP

**Fitur**:
- Input 6 digit OTP
- Auto-focus antar input
- Timer countdown untuk resend OTP
- Tombol resend OTP
- Validasi kode

**Alur Kerja**:
1. User memasukkan 6 digit kode
2. Kirim ke backend untuk verifikasi
3. Jika valid, navigate ke SignUpPasswordScreen
4. Jika salah, tampilkan error

---

##### **4. SignUpPasswordScreen.tsx** ⭐
**Fungsi**: Halaman terakhir registrasi - input nama dan password

**Fitur**:
- Input nama lengkap
- Input password dengan validasi kekuatan
- Konfirmasi password
- Show/hide password
- Indikator kekuatan password
- Validasi password match

**Alur Kerja**:
1. User memasukkan nama dan password
2. Validasi password (minimal 8 karakter, dll)
3. Kirim ke backend untuk create account
4. Backend simpan user ke database
5. Auto-login dan navigate ke ChatScreen

---

##### **5. ForgotPasswordEmailScreen.tsx**
**Fungsi**: Halaman lupa password - input email

**Fitur**:
- Input email
- Validasi email terdaftar
- Kirim OTP untuk reset password

---

##### **6. ResetPasswordScreen.tsx**
**Fungsi**: Halaman reset password

**Fitur**:
- Input password baru
- Konfirmasi password
- Update password di database

---

##### **7. ChatScreen.tsx** ⭐⭐⭐ **SCREEN PALING PENTING**
**Fungsi**: Halaman utama chat dengan AI

**Fitur Lengkap**:

**A. Header**
- Tombol menu untuk buka sidebar
- Judul aplikasi
- Tombol profil untuk buka settings

**B. Sidebar Menu (Swipe dari kiri)**
- Logo dan nama aplikasi
- Tombol "Percakapan Baru"
- Daftar riwayat chat dengan:
  - Judul chat
  - Preview pesan terakhir
  - Timestamp relatif (5 menit lalu, kemarin, dll)
  - Indikator unread
  - Swipe untuk pin/unpin
  - Long press untuk hapus
  - Tap untuk edit judul

**C. Area Chat**
- Welcome screen dengan animasi (saat belum ada pesan)
- Daftar pesan dengan:
  - Bubble chat user (kanan, biru)
  - Bubble chat bot (kiri, abu-abu)
  - Timestamp setiap pesan
  - Long press untuk copy pesan
  - Date separator (Hari ini, Kemarin, dll)
- Loading indicator saat AI memproses
- Tombol scroll to bottom (muncul saat scroll ke atas)

**D. Input Area**
- Text input multiline
- Tombol clear text (X)
- Tombol kirim/cancel
- Keyboard handling yang smooth

**E. Fitur Tambahan**
- Auto-save chat ke database
- Pin chat untuk akses cepat
- Edit judul chat
- Hapus chat dengan konfirmasi
- Copy pesan dengan toast notification
- Connection status indicator
- Modal konfirmasi untuk aksi berbahaya

**Alur Kerja Chat**:
```typescript
const handleSend = async () => {
  // 1. Buat pesan user
  const userMessage = {
    id: Date.now().toString(),
    text: inputText,
    sender: "user",
    timestamp: new Date(),
  };
  
  // 2. Tampilkan pesan user
  setMessages([...messages, userMessage]);
  
  // 3. Kirim ke backend
  const response = await fetch(`${API_CONFIG.BACKEND_URL}/api/query`, {
    method: "POST",
    body: JSON.stringify({ question: inputText, userId, userEmail }),
  });
  
  // 4. Terima respons
  const data = await response.json();
  
  // 5. Buat pesan bot
  const botMessage = {
    id: (Date.now() + 1).toString(),
    text: data.result,
    sender: "bot",
    timestamp: new Date(),
  };
  
  // 6. Tampilkan pesan bot
  setMessages([...messages, userMessage, botMessage]);
  
  // 7. Auto-save ke database
  await autoSaveToHistory([...messages, userMessage, botMessage]);
};
```

**State Management**:
- `messages`: Array pesan saat ini
- `chatHistory`: Array riwayat chat
- `currentChatId`: ID chat yang sedang aktif
- `currentChatTitle`: Judul chat aktif
- `isLoading`: Status loading
- `showMenu`: Status sidebar
- `pinnedChatIds`: Array ID chat yang di-pin

---

##### **8. AccountSettingsScreen.tsx** ⭐
**Fungsi**: Halaman pengaturan akun

**Fitur**:
- Tampilan foto profil
- Upload/change foto profil
- Tampilan nama dan email
- Edit profil
- Pengaturan tema
- Privacy policy
- Terms & conditions
- Tombol logout

---

##### **9. EditProfileScreen.tsx**
**Fungsi**: Halaman edit profil

**Fitur**:
- Edit nama
- Edit email (dengan verifikasi)
- Simpan perubahan ke database

---

##### **10. ThemeSettingsScreen.tsx** ⭐
**Fungsi**: Halaman pengaturan tema

**Fitur**:
- Pilihan tema:
  - Light (Default)
  - Dark (Gelap)
  - Spongebob (Kuning ceria)
  - Doraemon (Biru)
- Preview tema
- Simpan preferensi tema

**Cara Kerja**:
```typescript
const handleThemeChange = async (newTheme: Theme) => {
  toggleTheme(newTheme); // Update context
  await AsyncStorage.setItem("appTheme", newTheme); // Simpan ke storage
};
```

---

##### **11. HomeScreen.tsx**
**Fungsi**: Halaman home/welcome (opsional, tidak selalu digunakan)

**Fitur**:
- Welcome message
- Quick actions
- Panduan penggunaan
- Tombol mulai chat

---

##### **12. WelcomeScreen.tsx**
**Fungsi**: Halaman welcome pertama kali

**Fitur**:
- Animasi welcome
- Penjelasan fitur
- Tombol lanjut

---

##### **13. LoadingScreen.tsx**
**Fungsi**: Halaman loading saat cek session

**Fitur**:
- Logo aplikasi
- Loading spinner
- Ditampilkan 2 detik saat app pertama dibuka

---

#### **L. Folder `types/`**
**Fungsi**: Definisi TypeScript types untuk type safety

**File**:
- **`navigation.ts`**
  ```typescript
  export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    SignUpPassword: { email: string; otp: string };
    VerificationCode: { email: string };
    ForgotPassword: undefined;
    ResetPassword: { email: string; otp: string };
    Home: undefined;
    Chat: { actionTitle?: string };
    AccountSettings: undefined;
  };
  ```

**Peran dalam Sistem**: Memastikan type safety saat navigasi. TypeScript akan error jika kita navigate ke screen yang tidak ada atau pass parameter yang salah.

---

#### **M. Folder `utils/`**
**Fungsi**: Fungsi-fungsi helper yang digunakan di berbagai tempat

**File dan Fungsinya**:

1. **`timeUtils.ts`** ⭐
   - `formatRelativeTime()`: Format waktu relatif (5 menit lalu, kemarin, dll)
   - `formatDateSeparator()`: Format separator tanggal (Hari ini, Kemarin, 12 Jan 2024)
   - `isSameDay()`: Cek apakah dua tanggal sama

2. **`soundUtils.ts`**
   - `playModalSound()`: Play sound saat modal muncul
   - `playModalSoundWithVibration()`: Play sound + vibration

3. **`pinChatUtils.ts`** ⭐
   - `loadPinnedChats()`: Load daftar chat yang di-pin dari AsyncStorage
   - `togglePinChat()`: Pin/unpin chat
   - `sortChatHistory()`: Sort chat dengan pinned di atas

4. **`whatsappUtils.ts`**
   - Utility untuk integrasi WhatsApp (jika ada)

**Contoh Penggunaan**:
```typescript
// Di ChatScreen.tsx
import { formatRelativeTime } from '../../utils/timeUtils';

<Text>{formatRelativeTime(item.timestamp)}</Text>
// Output: "5 menit lalu" atau "Kemarin" atau "12 Jan"
```

---

### 5.3 File-File Root Penting

#### **1. App.tsx** ⭐⭐
**Fungsi**: Entry point aplikasi

**Isi**:
```typescript
const App = () => {
  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
```

**Peran**: Membungkus aplikasi dengan provider-provider yang diperlukan (Theme, Paper, SafeArea) dan merender AppNavigator.

---

#### **2. package.json** ⭐⭐
**Fungsi**: Definisi dependencies dan scripts

**Dependencies Penting**:
- `expo`: Framework untuk React Native
- `react-native`: Framework mobile
- `@react-navigation/*`: Library navigasi
- `@react-native-async-storage/async-storage`: Local storage
- `expo-image-picker`: Upload foto
- `socket.io-client`: Real-time communication
- `bcrypt`: Enkripsi password
- `mysql2`: Database client

**Scripts**:
- `npm start`: Jalankan development server
- `npm run android`: Build dan run di Android
- `npm run ios`: Build dan run di iOS

---

#### **3. app.json** ⭐
**Fungsi**: Konfigurasi Expo

**Isi Penting**:
```json
{
  "expo": {
    "name": "Asisten Chatbot AI",
    "slug": "asisten-chatbot-ai",
    "version": "1.0.0",
    "icon": "./assets/images/icon.png",
    "splash": {
      "image": "./assets/images/splash-icon.png"
    },
    "android": {
      "package": "com.anonymous.asistenchatbotai"
    }
  }
}
```

---

#### **4. .env**
**Fungsi**: Environment variables (API keys, secrets)

**Isi**:
```
GEMINI_API_KEY=your_api_key_here
BACKEND_URL=http://10.251.108.24:3000
```

**Peran**: Menyimpan data sensitif yang tidak boleh di-commit ke Git.

---

#### **5. tsconfig.json**
**Fungsi**: Konfigurasi TypeScript

**Peran**: Mengatur bagaimana TypeScript compile kode, path aliases, dan type checking rules.

---


## 6. TEKNOLOGI YANG DIGUNAKAN

### 6.1 Frontend (Mobile App)

#### **A. React Native (v0.81.5)**
**Deskripsi**: Framework untuk membangun aplikasi mobile native menggunakan JavaScript dan React.

**Alasan Pemilihan**:
- **Cross-platform**: Satu codebase untuk Android dan iOS
- **Hot Reload**: Perubahan kode langsung terlihat tanpa rebuild
- **Native Performance**: Menggunakan native components, bukan webview
- **Large Community**: Banyak library dan solusi untuk masalah umum
- **Cost-effective**: Hemat waktu dan biaya development

**Penggunaan dalam Proyek**:
- Semua UI components (View, Text, TouchableOpacity, dll)
- Navigation dan routing
- Gesture handling
- Platform-specific code

---

#### **B. Expo (v54.0.31)**
**Deskripsi**: Platform dan framework yang mempermudah development React Native.

**Alasan Pemilihan**:
- **Easy Setup**: Tidak perlu setup Android Studio atau Xcode untuk development
- **Built-in APIs**: Banyak API siap pakai (Camera, ImagePicker, dll)
- **OTA Updates**: Update aplikasi tanpa melalui app store
- **Development Build**: Testing di device real dengan mudah

**Penggunaan dalam Proyek**:
- `expo-image-picker`: Upload foto profil
- `expo-av`: Audio playback untuk notifikasi
- `expo-linear-gradient`: Gradient background
- `expo-constants`: Akses app constants
- `expo-splash-screen`: Splash screen management

---

#### **C. TypeScript (v5.9.2)**
**Deskripsi**: Superset JavaScript dengan static typing.

**Alasan Pemilihan**:
- **Type Safety**: Mengurangi bug dengan deteksi error saat development
- **Better IDE Support**: Autocomplete dan IntelliSense yang powerful
- **Self-documenting**: Type definitions sebagai dokumentasi
- **Refactoring**: Lebih aman saat refactor kode
- **Team Collaboration**: Memudahkan kolaborasi dengan type yang jelas

**Penggunaan dalam Proyek**:
```typescript
// Type definitions untuk message
type MessageType = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Type-safe function
const handleSend = async (message: string): Promise<void> => {
  // Implementation
};
```

---

#### **D. React Navigation (v7.x)**
**Deskripsi**: Library routing dan navigasi untuk React Native.

**Alasan Pemilihan**:
- **Native Navigation**: Menggunakan native navigation APIs
- **Flexible**: Mendukung berbagai pattern navigasi (Stack, Tab, Drawer)
- **Type-safe**: Integrasi baik dengan TypeScript
- **Customizable**: Mudah customize transisi dan animasi

**Penggunaan dalam Proyek**:
- Stack Navigator untuk flow autentikasi dan main app
- Custom transitions antar screen
- Deep linking support
- Navigation state management

---

#### **E. AsyncStorage**
**Deskripsi**: Local storage untuk React Native.

**Alasan Pemilihan**:
- **Persistent Storage**: Data tetap ada setelah app ditutup
- **Simple API**: Mudah digunakan dengan async/await
- **Cross-platform**: Bekerja di Android dan iOS

**Penggunaan dalam Proyek**:
```typescript
// Simpan token
await AsyncStorage.setItem("userToken", token);

// Load token
const token = await AsyncStorage.getItem("userToken");

// Hapus token (logout)
await AsyncStorage.removeItem("userToken");
```

---

#### **F. React Native Paper (v5.14.5)**
**Deskripsi**: Material Design component library untuk React Native.

**Alasan Pemilihan**:
- **Material Design**: Komponen yang sudah mengikuti design guidelines
- **Theming**: Mudah customize tema
- **Accessibility**: Built-in accessibility support

**Penggunaan dalam Proyek**:
- Modal components
- Button components
- Theme provider

---

### 6.2 Backend (Server)

#### **A. Node.js dengan Express.js**
**Deskripsi**: Runtime JavaScript di server dan framework web.

**Alasan Pemilihan**:
- **JavaScript Everywhere**: Bahasa yang sama dengan frontend
- **Non-blocking I/O**: Cocok untuk aplikasi real-time
- **NPM Ecosystem**: Akses ke jutaan package
- **Scalable**: Mudah di-scale horizontal

**Penggunaan dalam Proyek**:
- REST API endpoints
- Middleware untuk authentication
- Request handling dan validation
- Error handling

**Contoh Endpoint**:
```javascript
// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Cari user di database
  const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  
  // Verifikasi password
  const isValid = await bcrypt.compare(password, user.password);
  
  if (isValid) {
    // Generate token
    const token = jwt.sign({ userId: user.id }, SECRET_KEY);
    res.json({ success: true, token, user });
  } else {
    res.json({ success: false, error: 'Invalid credentials' });
  }
});
```

---

#### **B. MySQL (v3.16.1)**
**Deskripsi**: Relational Database Management System.

**Alasan Pemilihan**:
- **Relational**: Cocok untuk data terstruktur dengan relasi
- **ACID Compliance**: Menjamin integritas data
- **Mature**: Teknologi yang sudah proven dan stabil
- **Performance**: Query optimization yang baik
- **Free & Open Source**: Tidak ada biaya lisensi

**Struktur Database**:

**Tabel `users`**:
```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);
```

**Tabel `chat_sessions`**:
```sql
CREATE TABLE chat_sessions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_email VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_email) REFERENCES users(email)
);
```

**Tabel `chat_messages`**:
```sql
CREATE TABLE chat_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  session_id INT NOT NULL,
  content TEXT NOT NULL,
  role ENUM('user', 'bot') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (session_id) REFERENCES chat_sessions(id) ON DELETE CASCADE
);
```

**Tabel `otp_codes`**:
```sql
CREATE TABLE otp_codes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  code VARCHAR(6) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

#### **C. Bcrypt**
**Deskripsi**: Library untuk hashing password.

**Alasan Pemilihan**:
- **Security**: Algoritma hashing yang aman
- **Salt**: Otomatis generate salt untuk setiap password
- **Slow by Design**: Mencegah brute force attack

**Penggunaan**:
```javascript
// Hash password saat registrasi
const hashedPassword = await bcrypt.hash(password, 10);

// Verifikasi password saat login
const isValid = await bcrypt.compare(inputPassword, hashedPassword);
```

---

#### **D. Nodemailer**
**Deskripsi**: Library untuk mengirim email dari Node.js.

**Alasan Pemilihan**:
- **Easy to Use**: API yang simple
- **Support Multiple Services**: Gmail, Outlook, custom SMTP
- **HTML Email**: Mendukung email dengan HTML

**Penggunaan**:
```javascript
// Kirim OTP email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: EMAIL, pass: PASSWORD }
});

await transporter.sendMail({
  from: EMAIL,
  to: userEmail,
  subject: 'Kode Verifikasi OTP',
  html: `<p>Kode OTP Anda: <strong>${otpCode}</strong></p>`
});
```

---

### 6.3 AI & External Services

#### **A. Google Gemini AI**
**Deskripsi**: Large Language Model dari Google untuk AI conversational.

**Alasan Pemilihan**:
- **Free Tier**: Gratis untuk development dan testing
- **Powerful**: Kemampuan pemahaman bahasa yang baik
- **Fast Response**: Latency yang rendah
- **Multilingual**: Mendukung bahasa Indonesia
- **Easy Integration**: API yang simple

**Cara Kerja**:
```javascript
// Di backend
const response = await fetch(GEMINI_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: userQuestion }] }]
  })
});

const data = await response.json();
const aiAnswer = data.candidates[0].content.parts[0].text;
```

**Flow Penggunaan**:
1. User kirim pertanyaan
2. Backend cek database lokal dulu
3. Jika tidak ada jawaban, kirim ke Gemini AI
4. AI proses dan return jawaban
5. Backend kirim jawaban ke app
6. App tampilkan respons dari AI/Database

---

#### **B. Ngrok / DevTunnels**
**Deskripsi**: Tool untuk expose local server ke internet.

**Alasan Pemilihan**:
- **Testing**: Memudahkan testing dari device real
- **No Deployment**: Tidak perlu deploy ke server untuk testing
- **HTTPS**: Otomatis dapat HTTPS URL

**Penggunaan**:
```bash
# Jalankan ngrok
ngrok http 3000

# Dapat URL: https://abc123.ngrok-free.app
# Update di api-config.ts
```

---

### 6.4 Development Tools

#### **A. Git & GitHub**
**Deskripsi**: Version control system dan hosting.

**Penggunaan**:
- Version control untuk tracking perubahan
- Collaboration dengan tim
- Backup kode
- Branch untuk fitur baru

---

#### **B. VS Code**
**Deskripsi**: Code editor.

**Extensions yang Digunakan**:
- ESLint: Linting JavaScript/TypeScript
- Prettier: Code formatting
- React Native Tools: Debugging
- TypeScript: Language support

---

#### **C. Android Studio**
**Deskripsi**: IDE untuk Android development.

**Penggunaan**:
- Android emulator
- Build APK
- Debug native code

---

### 6.5 Diagram Arsitektur Teknologi

```
┌─────────────────────────────────────────────────────────┐
│                    MOBILE APP (Frontend)                 │
│  ┌────────────────────────────────────────────────────┐ │
│  │  React Native + Expo + TypeScript                  │ │
│  │  - React Navigation (Routing)                      │ │
│  │  - AsyncStorage (Local Storage)                    │ │
│  │  - React Context (State Management)                │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                            ↕️ HTTP/HTTPS
┌─────────────────────────────────────────────────────────┐
│                   BACKEND SERVER                         │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Node.js + Express.js                              │ │
│  │  - REST API Endpoints                              │ │
│  │  - Authentication Middleware                       │ │
│  │  - Request Validation                              │ │
│  └────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
            ↕️                              ↕️
┌─────────────────────┐        ┌─────────────────────────┐
│   MySQL Database    │        │   Google Gemini AI      │
│  - users            │        │   - Natural Language    │
│  - chat_sessions    │        │   - Conversational AI   │
│  - chat_messages    │        │                         │
│  - otp_codes        │        │                         │
└─────────────────────┘        └─────────────────────────┘
```

---

## 7. FITUR-FITUR APLIKASI

### 7.1 Sistem Autentikasi

#### **A. Registrasi dengan Verifikasi Email**

**Fungsi**: Mendaftarkan pengguna baru dengan verifikasi email menggunakan OTP.

**Cara Kerja**:
1. **Input Email** (SignUpEmailScreen)
   - User memasukkan email
   - Validasi format email
   - Cek apakah email sudah terdaftar
   - Jika belum, generate kode OTP 6 digit
   - Kirim OTP ke email user
   - Simpan OTP ke database dengan expiry time 5 menit

2. **Verifikasi OTP** (VerificationCodeScreen)
   - User memasukkan 6 digit kode
   - Validasi kode dengan database
   - Cek apakah kode sudah expired
   - Jika valid, lanjut ke step berikutnya
   - Jika salah/expired, tampilkan error
   - Fitur resend OTP dengan countdown timer

3. **Input Password** (SignUpPasswordScreen)
   - User memasukkan nama lengkap
   - User memasukkan password
   - Validasi kekuatan password:
     * Minimal 8 karakter
     * Mengandung huruf besar
     * Mengandung huruf kecil
     * Mengandung angka
   - Konfirmasi password harus match
   - Hash password dengan bcrypt
   - Simpan user ke database
   - Auto-login dan redirect ke ChatScreen

**Output**: User berhasil terdaftar dan langsung bisa menggunakan aplikasi.

**Kode Penting**:
```typescript
// Generate OTP
const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

// Kirim email
await transporter.sendMail({
  to: email,
  subject: 'Kode Verifikasi OTP',
  html: `<p>Kode OTP: <strong>${otpCode}</strong></p>`
});

// Simpan ke database
await db.query(
  'INSERT INTO otp_codes (email, code, expires_at) VALUES (?, ?, ?)',
  [email, otpCode, new Date(Date.now() + 5 * 60 * 1000)]
);
```

---

#### **B. Login dengan Email dan Password**

**Fungsi**: Masuk ke aplikasi menggunakan kredensial yang sudah terdaftar.

**Cara Kerja**:
1. User memasukkan email dan password
2. Validasi input di frontend
3. Kirim request ke backend `/api/auth/login`
4. Backend:
   - Cari user berdasarkan email
   - Verifikasi password dengan bcrypt.compare()
   - Cek status akun (is_active)
   - Generate JWT token
   - Return token dan user data
5. Frontend:
   - Simpan token ke AsyncStorage
   - Simpan user data (email, name)
   - Navigate ke ChatScreen
6. Token digunakan untuk request berikutnya

**Output**: User berhasil login dan masuk ke halaman chat.

**Fitur Keamanan**:
- Password di-hash dengan bcrypt (tidak disimpan plain text)
- Token JWT untuk session management
- Validasi status akun (bisa dinonaktifkan oleh admin)
- Error message yang tidak spesifik (untuk security)

---

#### **C. Lupa Password**

**Fungsi**: Reset password jika user lupa.

**Cara Kerja**:
1. User input email di ForgotPasswordEmailScreen
2. Sistem kirim OTP ke email
3. User verifikasi OTP
4. User input password baru di ResetPasswordScreen
5. Password di-hash dan update di database
6. User bisa login dengan password baru

**Output**: Password berhasil direset.

---

#### **D. Auto-Login**

**Fungsi**: User tidak perlu login ulang setiap kali buka aplikasi.

**Cara Kerja**:
1. Saat app dibuka, tampilkan LoadingScreen
2. Cek apakah ada token di AsyncStorage
3. Jika ada token:
   - Kirim request ke backend untuk verifikasi token
   - Jika valid, set initialRoute ke "Chat"
   - Jika tidak valid, hapus token dan set initialRoute ke "Login"
4. Jika tidak ada token, set initialRoute ke "Login"
5. Navigate ke initialRoute

**Output**: User langsung masuk ke chat jika sudah pernah login.

**Kode**:
```typescript
const checkSession = async () => {
  const token = await AsyncStorage.getItem("userToken");
  
  if (token) {
    const response = await fetch(`${API_CONFIG.BACKEND_URL}/api/auth/verify-token`, {
      method: "POST",
      body: JSON.stringify({ token }),
    });
    
    const data = await response.json();
    
    if (data.success) {
      setInitialRoute("Chat");
    } else {
      await AsyncStorage.removeItem("userToken");
      setInitialRoute("Login");
    }
  } else {
    setInitialRoute("Login");
  }
};
```

---

### 7.2 Fitur Chat dengan AI

#### **A. Mengirim Pesan**

**Fungsi**: User dapat mengirim pertanyaan dan menerima jawaban dari AI.

**Cara Kerja**:
1. User mengetik pesan di input field
2. Tekan tombol kirim
3. Pesan user ditampilkan di chat (bubble biru, kanan)
4. Tampilkan loading indicator
5. Kirim request ke backend dengan:
   - question: teks pertanyaan
   - userId: ID user
   - userEmail: email user
6. Backend memproses:
   - Cek database lokal untuk jawaban
   - Jika tidak ada, kirim ke Gemini AI
   - Return jawaban secara langsung ke frontend
7. Pesan bot ditampilkan di chat (bubble abu, kiri)
8. Percakapan auto-save ke database

**Output**: User mendapat jawaban dari AI secara real-time.

**Fitur Tambahan**:
- Multiline input (bisa enter untuk baris baru)
- Tombol clear text (X)
- Tombol cancel saat loading
- Timeout 60 detik untuk request
- Error handling dengan pesan yang jelas

---

#### **B. Indikator Sumber Jawaban**

**Fungsi**: Menunjukkan apakah jawaban dari database atau AI.

**Cara Kerja**:
- Jika jawaban dari database: prefix dengan "📊 "
- Jika jawaban dari AI: prefix dengan "🤖 "

**Output**: User tahu sumber jawaban.

---

#### **C. Copy Pesan**

**Fungsi**: User dapat menyalin teks pesan.

**Cara Kerja**:
1. Long press pada bubble chat
2. Teks otomatis disalin ke clipboard
3. Tampilkan toast notification "Pesan tersalin"

**Output**: Teks pesan tersalin dan bisa di-paste di tempat lain.

---

#### **D. Timestamp Pesan**

**Fungsi**: Menampilkan waktu pengiriman pesan.

**Cara Kerja**:
- Setiap pesan memiliki timestamp
- Format: HH:MM (contoh: 14:30)
- Ditampilkan di bawah bubble chat

**Output**: User tahu kapan pesan dikirim.

---

#### **E. Date Separator**

**Fungsi**: Memisahkan pesan berdasarkan tanggal.

**Cara Kerja**:
- Pesan dikelompokkan berdasarkan tanggal
- Tampilkan separator dengan format:
  - "Hari ini" untuk hari yang sama
  - "Kemarin" untuk kemarin
  - "DD MMM YYYY" untuk tanggal lain
- Update otomatis setiap menit

**Output**: Chat lebih terorganisir berdasarkan tanggal.

---

### 7.3 Manajemen Riwayat Chat

#### **A. Auto-Save Chat**

**Fungsi**: Semua percakapan otomatis tersimpan.

**Cara Kerja**:
1. Setiap kali ada pesan baru (user atau bot)
2. Otomatis panggil fungsi autoSaveToHistory()
3. Jika chat baru (belum ada chatId):
   - Create new chat session di database
   - Simpan semua messages
   - Set judul dari pertanyaan pertama user
   - Return chatId baru
4. Jika chat sudah ada (ada chatId):
   - Update chat session
   - Append messages baru
   - Update timestamp

**Output**: Semua chat tersimpan dan bisa diakses kembali.

---

#### **B. Daftar Riwayat Chat**

**Fungsi**: Menampilkan semua percakapan sebelumnya.

**Cara Kerja**:
1. Buka sidebar menu (swipe dari kiri atau tap menu button)
2. Load chat history dari database
3. Tampilkan list dengan informasi:
   - Icon chat
   - Judul chat
   - Timestamp relatif (5 menit lalu, kemarin, dll)
   - Indikator unread (jika ada)
   - Indikator pinned (jika di-pin)
4. Sort: Pinned chat di atas, sisanya berdasarkan timestamp

**Output**: User melihat semua riwayat chat.

---

#### **C. Melanjutkan Chat**

**Fungsi**: User dapat melanjutkan percakapan sebelumnya.

**Cara Kerja**:
1. Tap pada item chat di sidebar
2. Load semua messages dari chat tersebut
3. Tampilkan di ChatScreen
4. Set currentChatId
5. User bisa melanjutkan percakapan
6. Pesan baru akan ditambahkan ke chat yang sama

**Output**: Percakapan dilanjutkan tanpa kehilangan konteks.

---

#### **D. Pin Chat**

**Fungsi**: Pin chat penting agar mudah diakses.

**Cara Kerja**:
1. Swipe item chat ke kanan
2. Tampilkan tombol pin (📌)
3. Tap tombol pin
4. Chat ID disimpan ke AsyncStorage
5. Chat dipindahkan ke section "Disematkan" di atas
6. Swipe lagi untuk unpin

**Output**: Chat penting selalu di atas dan mudah diakses.

**Kode**:
```typescript
export const togglePinChat = async (
  chatId: string,
  pinnedChatIds: string[],
  callback: (newPinnedIds: string[]) => void
) => {
  let newPinnedIds;
  
  if (pinnedChatIds.includes(chatId)) {
    // Unpin
    newPinnedIds = pinnedChatIds.filter(id => id !== chatId);
  } else {
    // Pin
    newPinnedIds = [...pinnedChatIds, chatId];
  }
  
  await AsyncStorage.setItem('pinnedChats', JSON.stringify(newPinnedIds));
  callback(newPinnedIds);
};
```

---

#### **E. Edit Judul Chat**

**Fungsi**: Mengubah judul chat agar lebih deskriptif.

**Cara Kerja**:
1. Tap pada judul chat di sidebar
2. Judul berubah menjadi TextInput
3. User edit judul
4. Tekan enter atau tap di luar untuk save
5. Kirim request ke backend untuk update
6. Judul terupdate di UI dan database

**Output**: Judul chat lebih deskriptif dan mudah dikenali.

---

#### **F. Hapus Chat**

**Fungsi**: Menghapus percakapan yang tidak diperlukan.

**Cara Kerja**:
1. Long press pada item chat
2. Tampilkan modal konfirmasi
3. User konfirmasi hapus
4. Kirim request DELETE ke backend
5. Backend hapus chat session dan semua messages (CASCADE)
6. Reload chat history
7. Jika chat yang dihapus sedang aktif, buat chat baru

**Output**: Chat terhapus permanen.

---

### 7.4 Fitur Personalisasi

#### **A. Upload Foto Profil**

**Fungsi**: User dapat mengupload foto profil.

**Cara Kerja**:
1. Buka AccountSettingsScreen
2. Tap pada foto profil
3. Pilih sumber:
   - Ambil foto dari kamera
   - Pilih dari galeri
4. Crop foto (opsional)
5. Convert foto ke base64
6. Simpan ke AsyncStorage
7. Tampilkan di header dan settings

**Output**: Foto profil terupdate.

**Kode**:
```typescript
const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.5,
  });
  
  if (!result.canceled) {
    const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    
    const imageUri = `data:image/jpeg;base64,${base64}`;
    await AsyncStorage.setItem('profileImage', imageUri);
    setProfileImage(imageUri);
  }
};
```

---

#### **B. Ganti Tema**

**Fungsi**: User dapat memilih tema aplikasi.

**Cara Kerja**:
1. Buka ThemeSettingsScreen
2. Pilih tema:
   - Light (Default): Putih, biru
   - Dark: Hitam, biru terang
   - Spongebob: Kuning, oranye, ceria
   - Doraemon: Biru, merah, rounded
3. Tema langsung berubah (real-time)
4. Simpan preferensi ke AsyncStorage
5. Semua komponen yang menggunakan useTheme() otomatis update

**Output**: Tampilan aplikasi berubah sesuai tema.

**Implementasi**:
```typescript
// Di ThemeContext
const colors = theme === "dark" ? {
  background: "#000000",
  text: "#FFFFFF",
  // ...
} : {
  background: "#FFFFFF",
  text: "#000000",
  // ...
};

// Di komponen
const { colors } = useTheme();
<View style={{ backgroundColor: colors.background }}>
  <Text style={{ color: colors.text }}>Hello</Text>
</View>
```

---

#### **C. Edit Profil**

**Fungsi**: Mengubah nama dan email.

**Cara Kerja**:
1. Buka EditProfileScreen
2. Edit nama atau email
3. Jika edit email, perlu verifikasi OTP
4. Simpan perubahan ke database
5. Update di AsyncStorage
6. Update di UI

**Output**: Profil terupdate.

---

### 7.5 Fitur UI/UX

#### **A. Animasi Smooth**

**Fungsi**: Memberikan pengalaman visual yang menyenangkan.

**Implementasi**:
- Fade in/out untuk modal
- Slide untuk sidebar
- Scale untuk button press
- Shimmer untuk loading
- Typing animation untuk welcome text

**Contoh**:
```typescript
// Fade in animation
Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 800,
  easing: Easing.out(Easing.cubic),
  useNativeDriver: true,
}).start();
```

---

#### **B. Loading Indicators**

**Fungsi**: Memberikan feedback saat proses berlangsung.

**Jenis**:
- Spinner untuk loading data
- Typing dots untuk AI processing
- Skeleton screen untuk list
- Progress bar untuk upload

---

#### **C. Toast Notifications**

**Fungsi**: Memberikan feedback singkat untuk aksi user.

**Contoh**:
- "Pesan tersalin" saat copy
- "Chat dihapus" saat delete
- "Tema berubah" saat ganti tema

---

#### **D. Modal Konfirmasi**

**Fungsi**: Mencegah aksi yang tidak disengaja.

**Digunakan untuk**:
- Hapus chat
- Logout
- Aksi berbahaya lainnya

---

#### **E. Scroll to Bottom Button**

**Fungsi**: Memudahkan scroll ke pesan terbaru.

**Cara Kerja**:
- Muncul saat user scroll ke atas
- Tap untuk scroll ke bawah dengan animasi
- Hilang saat sudah di bawah

---


## 8. ALUR SISTEM (WORKFLOW)

### 8.1 Alur Registrasi Pengguna Baru

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User membuka aplikasi                                    │
│    - Tampil LoadingScreen (2 detik)                         │
│    - Cek token di AsyncStorage                              │
│    - Tidak ada token → Navigate ke LoginScreen              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. User tap "Buat akun"                                     │
│    - Navigate ke SignUpEmailScreen                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Input Email (SignUpEmailScreen)                          │
│    - User ketik email                                       │
│    - Validasi format email                                  │
│    - Tap "Lanjutkan"                                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Backend: Cek Email & Kirim OTP                           │
│    - Query: SELECT * FROM users WHERE email = ?             │
│    - Jika sudah ada: return error "Email sudah terdaftar"   │
│    - Jika belum: generate OTP 6 digit                       │
│    - Kirim email dengan Nodemailer                          │
│    - Simpan OTP ke database dengan expiry 5 menit           │
│    - Return success                                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Verifikasi OTP (VerificationCodeScreen)                  │
│    - User input 6 digit kode                                │
│    - Auto-focus antar input box                             │
│    - Tap "Verifikasi"                                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Backend: Validasi OTP                                    │
│    - Query: SELECT * FROM otp_codes WHERE email = ? AND     │
│      code = ? AND expires_at > NOW()                        │
│    - Jika tidak ada/expired: return error                   │
│    - Jika valid: return success                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. Input Password (SignUpPasswordScreen)                    │
│    - User input nama lengkap                                │
│    - User input password                                    │
│    - Validasi kekuatan password                             │
│    - User konfirmasi password                               │
│    - Tap "Daftar"                                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. Backend: Create Account                                  │
│    - Hash password dengan bcrypt                            │
│    - INSERT INTO users (email, name, password)              │
│    - Generate JWT token                                     │
│    - Return token dan user data                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 9. Auto-Login                                               │
│    - Simpan token ke AsyncStorage                           │
│    - Simpan email dan name ke AsyncStorage                  │
│    - Navigate ke ChatScreen                                 │
└─────────────────────────────────────────────────────────────┘
```

---

### 8.2 Alur Login Pengguna

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User membuka aplikasi                                    │
│    - LoadingScreen tampil                                   │
│    - Cek token di AsyncStorage                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
                    ┌───────┴───────┐
                    │               │
            Token Ada?          Token Tidak Ada
                    │               │
                    ↓               ↓
    ┌───────────────────────┐   ┌──────────────────┐
    │ Verifikasi Token      │   │ Navigate ke      │
    │ ke Backend            │   │ LoginScreen      │
    └───────────────────────┘   └──────────────────┘
                    │
            ┌───────┴───────┐
            │               │
        Valid?          Invalid?
            │               │
            ↓               ↓
    ┌──────────────┐   ┌──────────────────┐
    │ Navigate ke  │   │ Hapus token      │
    │ ChatScreen   │   │ Navigate ke      │
    │              │   │ LoginScreen      │
    └──────────────┘   └──────────────────┘
```

**Detail Proses Login**:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. LoginScreen                                              │
│    - User input email                                       │
│    - User input password                                    │
│    - Tap "Masuk"                                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Validasi Frontend                                        │
│    - Cek email tidak kosong                                 │
│    - Cek format email valid                                 │
│    - Cek password tidak kosong                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Request ke Backend                                       │
│    POST /api/auth/login                                     │
│    Body: { email, password }                                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Backend: Verifikasi Kredensial                           │
│    - Query: SELECT * FROM users WHERE email = ?             │
│    - Jika tidak ada: return error                           │
│    - Cek is_active = true                                   │
│    - Jika false: return error "Akun dinonaktifkan"          │
│    - bcrypt.compare(password, hashedPassword)               │
│    - Jika tidak match: return error                         │
│    - Generate JWT token                                     │
│    - Return { success: true, token, user }                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Frontend: Simpan Session                                 │
│    - AsyncStorage.setItem("userToken", token)               │
│    - AsyncStorage.setItem("userEmail", email)               │
│    - AsyncStorage.setItem("userName", name)                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Navigate ke ChatScreen                                   │
│    - navigation.reset({ routes: [{ name: "Home" }] })       │
└─────────────────────────────────────────────────────────────┘
```

---

### 8.3 Alur Chat dengan AI

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User di ChatScreen                                       │
│    - Melihat welcome screen (jika chat baru)                │
│    - Atau melihat pesan sebelumnya (jika lanjut chat)       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. User Mengetik Pertanyaan                                 │
│    - Ketik di TextInput                                     │
│    - Input multiline (bisa enter)                           │
│    - Tombol kirim aktif jika ada teks                       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. User Tap Tombol Kirim                                    │
│    - Buat object userMessage                                │
│    - Tambahkan ke state messages                            │
│    - Tampilkan bubble chat user (kanan, biru)               │
│    - Clear input field                                      │
│    - Set isLoading = true                                   │
│    - Tampilkan loading indicator                            │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Request ke Backend                                       │
│    POST /api/query                                          │
│    Body: {                                                  │
│      question: "Apa itu React Native?",                     │
│      userId: "123",                                         │
│      userEmail: "user@example.com"                          │
│    }                                                        │
│    Timeout: 60 detik                                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Backend: Proses Pertanyaan                               │
│    Step 1: Cek Database Lokal                               │
│    - Query: SELECT answer FROM knowledge_base               │
│      WHERE question LIKE %keyword%                          │
│    - Jika ada: return { result: answer, source: "database" }│
│                                                             │
│    Step 2: Jika tidak ada, kirim ke Gemini AI               │
│    - POST ke Gemini API                                     │
│    - Body: { contents: [{ parts: [{ text: question }] }] } │
│    - Terima response dari AI                                │
│    - Return { result: aiAnswer, source: "ai" }              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Frontend: Terima Response                                │
│    - Parse response JSON                                    │
│    - Ambil result dan source                                │
│    - Tambahkan prefix berdasarkan source:                   │
│      * Database: "📊 " + result                             │
│      * AI: "🤖 " + result                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 7. Tampilkan Pesan Bot                                      │
│    - Buat object botMessage                                 │
│    - Tambahkan ke state messages                            │
│    - Tampilkan bubble chat bot (kiri, abu-abu)              │
│    - Set isLoading = false                                  │
│    - Hilangkan loading indicator                            │
│    - Auto scroll ke bawah                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 8. Auto-Save ke Database                                    │
│    - Panggil autoSaveToHistory()                            │
│    - Jika chat baru (currentChatId = null):                 │
│      * POST /api/chat/save                                  │
│      * Body: { userEmail, messages, title }                 │
│      * Backend: INSERT INTO chat_sessions                   │
│      * Backend: INSERT INTO chat_messages (batch)           │
│      * Return chatId                                        │
│      * Set currentChatId = chatId                           │
│    - Jika chat lama (currentChatId ada):                    │
│      * PUT /api/chat/update                                 │
│      * Body: { chatId, messages }                           │
│      * Backend: UPDATE chat_sessions                        │
│      * Backend: INSERT new messages                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 9. Reload Chat History                                      │
│    - GET /api/chat/history/:email                           │
│    - Update sidebar dengan chat terbaru                     │
└─────────────────────────────────────────────────────────────┘
```

---

### 8.4 Alur Manajemen Riwayat Chat

#### **A. Load Chat History**

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User buka sidebar (tap menu atau swipe dari kiri)       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. Request ke Backend                                       │
│    GET /api/chat/history/:email                             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Backend: Query Database                                  │
│    SELECT cs.*, COUNT(cm.id) as message_count               │
│    FROM chat_sessions cs                                    │
│    LEFT JOIN chat_messages cm ON cs.id = cm.session_id      │
│    WHERE cs.user_email = ?                                  │
│    GROUP BY cs.id                                           │
│    ORDER BY cs.updated_at DESC                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Frontend: Parse & Display                                │
│    - Parse response menjadi ChatHistoryType[]               │
│    - Load pinnedChatIds dari AsyncStorage                   │
│    - Sort: pinned di atas, sisanya by timestamp             │
│    - Render list di sidebar                                 │
└─────────────────────────────────────────────────────────────┘
```

#### **B. Pin/Unpin Chat**

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User swipe item chat ke kanan                            │
│    - Tampilkan tombol pin (📌)                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. User tap tombol pin                                      │
│    - Panggil togglePinChat(chatId)                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Update Pinned State                                      │
│    - Load pinnedChatIds dari AsyncStorage                   │
│    - Jika sudah di-pin: remove dari array                   │
│    - Jika belum: tambahkan ke array                         │
│    - Simpan kembali ke AsyncStorage                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Re-render List                                           │
│    - Update state pinnedChatIds                             │
│    - Sort ulang chat history                                │
│    - Pinned chat pindah ke section "Disematkan"             │
└─────────────────────────────────────────────────────────────┘
```

#### **C. Hapus Chat**

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User long press pada item chat                           │
│    - Tampilkan modal konfirmasi                             │
│    - Play sound + vibration                                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. User tap "Hapus"                                         │
│    - Extract numeric ID dari chatId                         │
│    - DELETE /api/chat-history/:id                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. Backend: Delete dari Database                            │
│    DELETE FROM chat_sessions WHERE id = ?                   │
│    (Messages otomatis terhapus karena CASCADE)              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Frontend: Update UI                                      │
│    - Reload chat history                                    │
│    - Jika chat yang dihapus sedang aktif:                   │
│      * Clear messages                                       │
│      * Set currentChatId = null                             │
│      * Tampilkan welcome screen                             │
│    - Close modal                                            │
└─────────────────────────────────────────────────────────────┘
```

---

### 8.5 Alur Ganti Tema

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User buka AccountSettingsScreen                          │
│    - Tap icon profil di header                              │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. User tap "Pengaturan Tema"                               │
│    - Navigate ke ThemeSettingsScreen                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. User pilih tema (Light/Dark/Spongebob/Doraemon)          │
│    - Tap pada card tema                                     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. Update Theme Context                                     │
│    - toggleTheme(newTheme)                                  │
│    - Update state theme di context                          │
│    - Update colors object berdasarkan tema                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. Simpan Preferensi                                        │
│    - AsyncStorage.setItem("appTheme", newTheme)             │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. Re-render Semua Komponen                                 │
│    - Semua komponen yang menggunakan useTheme()             │
│      otomatis re-render dengan warna baru                   │
│    - Transisi smooth tanpa reload app                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. KEAMANAN & VALIDASI

### 9.1 Keamanan Password

**A. Hashing dengan Bcrypt**
- Password tidak pernah disimpan dalam bentuk plain text
- Menggunakan bcrypt dengan salt rounds = 10
- Setiap password memiliki salt yang unik
- Tidak mungkin di-reverse engineer

**Implementasi**:
```javascript
// Saat registrasi
const hashedPassword = await bcrypt.hash(password, 10);
await db.query('INSERT INTO users (email, password) VALUES (?, ?)', 
  [email, hashedPassword]);

// Saat login
const isValid = await bcrypt.compare(inputPassword, user.password);
```

---

### 9.2 Autentikasi dengan JWT

**A. Token Generation**
- Menggunakan JSON Web Token (JWT)
- Token berisi userId dan email
- Token memiliki expiry time
- Signed dengan secret key

**B. Token Verification**
- Setiap request yang memerlukan auth harus include token
- Backend verify token sebelum process request
- Jika token invalid/expired, return error 401

**Implementasi**:
```javascript
// Generate token
const token = jwt.sign(
  { userId: user.id, email: user.email },
  SECRET_KEY,
  { expiresIn: '7d' }
);

// Verify token
const decoded = jwt.verify(token, SECRET_KEY);
```

---

### 9.3 Validasi Input

**A. Frontend Validation**
- Email format validation (regex)
- Password strength validation
- Required field validation
- Length validation

**B. Backend Validation**
- Sanitize input untuk prevent SQL injection
- Validate data types
- Check business rules
- Rate limiting untuk prevent spam

**Contoh**:
```typescript
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  setError("Format email tidak valid");
  return;
}

// Password validation
if (password.length < 8) {
  setError("Password minimal 8 karakter");
  return;
}
```

---

### 9.4 Keamanan OTP

**A. OTP Generation**
- Random 6 digit number
- Expiry time 5 menit
- Hanya bisa digunakan sekali
- Dihapus setelah digunakan

**B. OTP Verification**
- Check kode match
- Check belum expired
- Check belum pernah digunakan
- Delete setelah verified

---

### 9.5 Proteksi dari Serangan

**A. SQL Injection**
- Menggunakan prepared statements
- Parameterized queries
- Tidak pernah concat string untuk query

**B. XSS (Cross-Site Scripting)**
- Sanitize user input
- Escape HTML characters
- Content Security Policy

**C. CSRF (Cross-Site Request Forgery)**
- Token-based authentication
- SameSite cookie attribute

**D. Rate Limiting**
- Limit request per IP
- Prevent brute force attack
- Cooldown untuk OTP resend

---


## 10. KELEBIHAN DAN KEKURANGAN SISTEM

### 10.1 Kelebihan Sistem

#### **A. Dari Sisi Fungsionalitas**

1. **Sistem Autentikasi yang Lengkap dan Aman**
   - Registrasi dengan verifikasi email menggunakan OTP
   - Login dengan enkripsi password (bcrypt)
   - Fitur lupa password yang mudah digunakan
   - Auto-login untuk kenyamanan pengguna
   - Token-based authentication dengan JWT

2. **AI yang Cerdas dan Responsif**
   - Integrasi dengan Google Gemini AI yang powerful
   - Fallback ke database lokal untuk jawaban cepat
   - Indikator sumber jawaban (AI atau Database)
   - Response time yang cepat
   - Mendukung bahasa Indonesia dengan baik

3. **Manajemen Riwayat Chat yang Komprehensif**
   - Auto-save semua percakapan
   - Dapat melanjutkan chat sebelumnya
   - Fitur pin chat untuk akses cepat
   - Edit judul chat untuk organisasi lebih baik
   - Hapus chat yang tidak diperlukan
   - Timestamp relatif yang informatif

4. **Personalisasi yang Fleksibel**
   - 4 pilihan tema (Light, Dark, Spongebob, Doraemon)
   - Upload foto profil
   - Edit profil (nama dan email)
   - Preferensi tersimpan dan persistent

5. **User Experience yang Baik**
   - UI/UX yang modern dan intuitif
   - Animasi yang smooth dan tidak mengganggu
   - Loading indicators yang jelas
   - Error handling dengan pesan yang informatif
   - Responsive design untuk berbagai ukuran layar

#### **B. Dari Sisi Teknis**

1. **Arsitektur yang Terstruktur**
   - Separation of concerns yang jelas
   - Modular components yang reusable
   - Clean code dengan TypeScript
   - Folder structure yang terorganisir

2. **Cross-Platform**
   - Satu codebase untuk Android dan iOS
   - Hemat waktu dan biaya development
   - Konsistensi UI/UX di semua platform

3. **Scalability**
   - Mudah menambahkan fitur baru
   - Database relational yang terstruktur
   - API yang RESTful dan well-documented
   - Dapat di-scale horizontal

4. **Security**
   - Password hashing dengan bcrypt
   - JWT token authentication
   - Input validation di frontend dan backend
   - Protection dari common attacks (SQL injection, XSS)

5. **Performance**
   - Lazy loading untuk data besar
   - Optimized re-renders dengan React hooks
   - Efficient database queries
   - Caching untuk data yang sering diakses

#### **C. Dari Sisi Maintenance**

1. **Code Quality**
   - TypeScript untuk type safety
   - Consistent coding style
   - Meaningful variable names
   - Comments untuk logic yang kompleks

2. **Debugging**
   - Console logs yang informatif
   - Error boundaries untuk catch errors
   - Development tools yang lengkap

3. **Documentation**
   - README yang jelas
   - Inline comments
   - API documentation
   - Setup guides (INSTALL.md, NGROK_SETUP.md, dll)

---

### 10.2 Kekurangan Sistem

#### **A. Keterbatasan Fungsional**

1. **Tidak Ada Fitur Voice Input**
   - Kode untuk speech recognition sudah ada tapi di-disable
   - User harus mengetik manual
   - Kurang accessible untuk user dengan keterbatasan

2. **Tidak Ada Fitur Attachment**
   - Tidak bisa kirim gambar atau file
   - Hanya text-based conversation
   - Membatasi jenis pertanyaan yang bisa diajukan

3. **Tidak Ada Fitur Search**
   - Tidak bisa search dalam riwayat chat
   - Sulit menemukan percakapan lama
   - Harus scroll manual

4. **Tidak Ada Fitur Export Chat**
   - Tidak bisa export percakapan ke PDF atau text
   - Data hanya tersimpan di database
   - Sulit untuk backup atau share

5. **Tidak Ada Multi-Language Support**
   - UI hanya dalam bahasa Indonesia
   - Tidak ada option untuk ganti bahasa
   - Membatasi user base

#### **B. Keterbatasan Teknis**

1. **Dependency pada Internet**
   - Aplikasi tidak bisa berfungsi offline
   - Memerlukan koneksi internet untuk semua fitur
   - Tidak ada offline mode atau caching

2. **Dependency pada Backend**
   - Jika backend down, aplikasi tidak bisa digunakan
   - Single point of failure
   - Tidak ada fallback mechanism

3. **Tidak Ada Real-Time Sync**
   - Jika user login di multiple device, data tidak sync real-time
   - Harus reload manual untuk update
   - Bisa terjadi data inconsistency

4. **Limited Error Recovery**
   - Jika request timeout, user harus kirim ulang
   - Tidak ada automatic retry
   - Bisa frustrating untuk user

5. **No Push Notifications**
   - Tidak ada notifikasi untuk update atau reminder
   - User harus buka app manual
   - Mengurangi engagement

#### **C. Keterbatasan Keamanan**

1. **Tidak Ada Two-Factor Authentication (2FA)**
   - Hanya mengandalkan password
   - Kurang secure untuk data sensitif
   - Vulnerable jika password bocor

2. **Tidak Ada Session Management yang Advanced**
   - Token tidak bisa di-revoke dari server
   - Jika token dicuri, bisa disalahgunakan sampai expired
   - Tidak ada logout dari semua device

3. **Tidak Ada Rate Limiting di Frontend**
   - User bisa spam request
   - Bisa overload server
   - Tidak ada cooldown mechanism

#### **D. Keterbatasan UI/UX**

1. **Tidak Ada Dark Mode Auto**
   - Tidak mengikuti system theme
   - User harus ganti manual
   - Kurang convenient

2. **Tidak Ada Customization untuk Chat Bubble**
   - Warna dan style fixed
   - Tidak bisa customize sesuai preferensi
   - Kurang personal

3. **Tidak Ada Emoji atau Sticker**
   - Chat terasa kaku dan formal
   - Kurang ekspresif
   - Mengurangi engagement

#### **E. Keterbatasan Performance**

1. **Load Time untuk Chat History**
   - Jika chat history banyak, loading lama
   - Tidak ada pagination
   - Bisa lag di device low-end

2. **Memory Usage**
   - Semua messages di-load ke memory
   - Bisa crash jika chat terlalu panjang
   - Tidak ada memory optimization

3. **Image Loading**
   - Foto profil di-load setiap kali
   - Tidak ada image caching
   - Waste bandwidth

---

### 10.3 Perbandingan dengan Aplikasi Sejenis

| Fitur | Aplikasi Ini | ChatGPT App | WhatsApp |
|-------|--------------|-------------|----------|
| AI Conversation | ✅ | ✅ | ❌ |
| Voice Input | ❌ | ✅ | ✅ |
| Image Upload | ❌ | ✅ | ✅ |
| Chat History | ✅ | ✅ | ✅ |
| Pin Chat | ✅ | ❌ | ✅ |
| Multiple Themes | ✅ | ❌ | ✅ |
| Offline Mode | ❌ | ❌ | ✅ (limited) |
| Search Chat | ❌ | ✅ | ✅ |
| Export Chat | ❌ | ✅ | ✅ |
| Push Notifications | ❌ | ✅ | ✅ |
| Multi-device Sync | ❌ | ✅ | ✅ |

---

## 11. KESIMPULAN

### 11.1 Ringkasan Proyek

Aplikasi **Asisten Chatbot AI** adalah aplikasi mobile berbasis React Native yang berhasil dikembangkan untuk memberikan layanan asisten virtual cerdas kepada pengguna. Aplikasi ini mengintegrasikan teknologi AI (Google Gemini) dengan sistem backend yang robust (Node.js + MySQL) untuk memberikan pengalaman chat yang responsif dan personal.

Proyek ini mencakup pengembangan full-stack, mulai dari desain UI/UX, implementasi frontend dengan React Native dan TypeScript, pengembangan backend API dengan Node.js dan Express, hingga integrasi database MySQL dan AI external service.

### 11.2 Pencapaian Tujuan

Berdasarkan tujuan yang ditetapkan di awal, proyek ini telah berhasil mencapai:

✅ **Sistem Autentikasi yang Aman**
- Registrasi dengan verifikasi email OTP
- Login dengan enkripsi password
- Fitur lupa password
- Auto-login untuk kenyamanan

✅ **Fitur Chat yang Responsif**
- Real-time messaging dengan AI
- Loading indicators yang jelas
- Timestamp dan date separator
- Copy message functionality

✅ **Integrasi AI yang Sukses**
- Koneksi dengan Google Gemini AI
- Fallback ke database lokal
- Indikator sumber jawaban

✅ **Manajemen Riwayat Chat**
- Auto-save percakapan
- Pin/unpin chat
- Edit judul dan hapus chat
- Timestamp relatif

✅ **Fitur Personalisasi**
- 4 pilihan tema
- Upload foto profil
- Edit profil

✅ **User Experience yang Baik**
- UI/UX modern dan intuitif
- Animasi smooth
- Error handling yang baik

### 11.3 Pembelajaran yang Didapat

Selama pengembangan proyek ini, beberapa pembelajaran penting yang didapat:

1. **Technical Skills**
   - Menguasai React Native dan TypeScript
   - Memahami state management dengan Context API
   - Belajar integrasi API dan database
   - Memahami authentication flow
   - Pengalaman dengan AI integration

2. **Problem Solving**
   - Debugging complex issues
   - Handling asynchronous operations
   - Managing state across components
   - Optimizing performance

3. **Best Practices**
   - Clean code principles
   - Component reusability
   - Error handling
   - Security considerations
   - User experience design

4. **Project Management**
   - Planning dan design
   - Version control dengan Git
   - Documentation
   - Testing dan debugging

### 11.4 Kontribusi Proyek

Proyek ini memberikan kontribusi dalam beberapa aspek:

1. **Untuk Pengguna**
   - Akses mudah ke asisten AI 24/7
   - Pengalaman chat yang personal
   - Riwayat percakapan yang tersimpan

2. **Untuk Instansi**
   - Solusi customer service otomatis
   - Mengurangi beban operasional
   - Meningkatkan kepuasan pelanggan

3. **Untuk Developer**
   - Contoh implementasi chatbot dengan AI
   - Reference untuk authentication flow
   - Best practices React Native development

4. **Untuk Siswa PKL**
   - Portfolio project yang solid
   - Pengalaman full-stack development
   - Pemahaman teknologi modern

---

## 12. SARAN PENGEMBANGAN

### 12.1 Saran Pengembangan Jangka Pendek

#### **A. Fitur yang Bisa Ditambahkan Segera**

1. **Fitur Search Chat**
   - Implementasi: Tambahkan search bar di sidebar
   - Backend: Endpoint untuk search messages
   - Benefit: User mudah menemukan percakapan lama

2. **Pagination untuk Chat History**
   - Implementasi: Load 20 chat pertama, load more saat scroll
   - Benefit: Improve performance dan loading time

3. **Image Caching**
   - Implementasi: Cache foto profil di local storage
   - Benefit: Reduce bandwidth dan improve loading

4. **Retry Mechanism**
   - Implementasi: Auto retry jika request failed
   - Benefit: Better user experience saat koneksi tidak stabil

5. **Confirmation Dialog untuk Logout**
   - Implementasi: Modal konfirmasi sebelum logout
   - Benefit: Prevent accidental logout

#### **B. Perbaikan Bug dan Performance**

1. **Optimize Re-renders**
   - Gunakan React.memo untuk components
   - Optimize useEffect dependencies
   - Implement virtualization untuk long lists

2. **Memory Management**
   - Limit messages yang di-load ke memory
   - Clear unused data
   - Implement pagination untuk messages

3. **Error Handling yang Lebih Baik**
   - Specific error messages
   - Retry options
   - Fallback UI

4. **Loading States**
   - Skeleton screens untuk loading
   - Progressive loading
   - Better loading indicators

---

### 12.2 Saran Pengembangan Jangka Menengah

#### **A. Fitur Advanced**

1. **Voice Input/Output**
   - Enable speech recognition yang sudah ada
   - Tambahkan text-to-speech untuk response
   - Support multiple languages

2. **Image Upload dan Analysis**
   - User bisa upload gambar
   - AI bisa analyze gambar
   - Support untuk visual questions

3. **File Attachment**
   - Support PDF, DOC, dll
   - AI bisa read dan summarize documents
   - File storage management

4. **Export Chat**
   - Export ke PDF
   - Export ke text file
   - Share via email atau social media

5. **Advanced Search**
   - Search dengan filters (date, sender, keywords)
   - Highlight search results
   - Search suggestions

#### **B. Personalisasi Lanjutan**

1. **Custom Chat Bubbles**
   - User bisa customize warna
   - Pilihan font
   - Bubble style options

2. **Chat Backgrounds**
   - Custom background images
   - Gradient backgrounds
   - Animated backgrounds

3. **Emoji dan Sticker**
   - Emoji picker
   - Custom stickers
   - GIF support

4. **Notification Settings**
   - Customize notification sounds
   - Notification preferences
   - Do not disturb mode

---

### 12.3 Saran Pengembangan Jangka Panjang

#### **A. Fitur Enterprise**

1. **Multi-User Support**
   - Team collaboration
   - Shared chat history
   - Role-based access control

2. **Admin Dashboard**
   - User management
   - Analytics dan reporting
   - Content moderation
   - System monitoring

3. **API untuk Third-Party Integration**
   - Public API
   - Webhooks
   - SDK untuk developers

4. **White-Label Solution**
   - Customizable branding
   - Custom domain
   - Reseller program

#### **B. AI Enhancement**

1. **Context-Aware AI**
   - AI remember previous conversations
   - Personalized responses based on user history
   - Learning from user feedback

2. **Multi-Modal AI**
   - Support text, image, voice, video
   - Cross-modal understanding
   - Rich media responses

3. **Specialized AI Models**
   - Domain-specific knowledge
   - Industry-specific responses
   - Custom training data

4. **AI Analytics**
   - Sentiment analysis
   - Topic modeling
   - User behavior prediction

#### **C. Platform Expansion**

1. **Web Version**
   - Progressive Web App (PWA)
   - Desktop application
   - Browser extension

2. **Wearable Support**
   - Apple Watch app
   - Android Wear app
   - Quick replies

3. **IoT Integration**
   - Smart home control
   - Voice assistants (Alexa, Google Home)
   - Car integration

#### **D. Advanced Security**

1. **Two-Factor Authentication (2FA)**
   - SMS verification
   - Authenticator app
   - Biometric authentication

2. **End-to-End Encryption**
   - Encrypted messages
   - Secure key exchange
   - Privacy-focused

3. **Advanced Session Management**
   - Device management
   - Remote logout
   - Session history

4. **Compliance**
   - GDPR compliance
   - Data privacy regulations
   - Security certifications

---

### 12.4 Saran Teknis

#### **A. Code Quality**

1. **Testing**
   - Unit tests dengan Jest
   - Integration tests
   - E2E tests dengan Detox
   - Test coverage > 80%

2. **Code Review**
   - Peer review process
   - Automated code review tools
   - Style guide enforcement

3. **Documentation**
   - API documentation dengan Swagger
   - Component documentation dengan Storybook
   - Architecture documentation

#### **B. DevOps**

1. **CI/CD Pipeline**
   - Automated testing
   - Automated deployment
   - Version management

2. **Monitoring**
   - Error tracking (Sentry)
   - Performance monitoring
   - User analytics

3. **Deployment**
   - Containerization dengan Docker
   - Cloud deployment (AWS, GCP, Azure)
   - Load balancing

#### **C. Performance**

1. **Optimization**
   - Code splitting
   - Lazy loading
   - Image optimization
   - Bundle size reduction

2. **Caching**
   - API response caching
   - Asset caching
   - Database query caching

3. **Scalability**
   - Horizontal scaling
   - Database sharding
   - CDN untuk static assets

---

### 12.5 Saran untuk Pengembang Selanjutnya

1. **Pahami Codebase**
   - Baca dokumentasi dengan teliti
   - Trace alur kode dari awal
   - Pahami arsitektur sistem

2. **Setup Development Environment**
   - Ikuti INSTALL.md
   - Setup backend dan database
   - Test semua fitur sebelum mulai develop

3. **Follow Best Practices**
   - Gunakan TypeScript dengan strict mode
   - Write clean and readable code
   - Add comments untuk logic kompleks
   - Follow existing code style

4. **Testing**
   - Test setiap fitur baru
   - Test di multiple devices
   - Test edge cases
   - Test error scenarios

5. **Documentation**
   - Update dokumentasi saat add fitur
   - Document API changes
   - Add inline comments
   - Update README

6. **Version Control**
   - Commit dengan message yang jelas
   - Use feature branches
   - Regular pull requests
   - Code review sebelum merge

7. **Communication**
   - Diskusi dengan tim sebelum implement
   - Ask questions jika tidak jelas
   - Share knowledge dengan tim
   - Document decisions

---

## PENUTUP

Aplikasi **Asisten Chatbot AI** ini merupakan hasil dari proses pembelajaran dan pengembangan yang intensif selama periode PKL. Meskipun masih terdapat beberapa kekurangan dan area yang bisa diperbaiki, aplikasi ini telah berhasil mencapai tujuan utamanya yaitu menyediakan platform chat dengan AI yang mudah digunakan dan fungsional.

Proyek ini memberikan pengalaman berharga dalam pengembangan aplikasi mobile full-stack, mulai dari planning, design, implementation, hingga testing. Teknologi-teknologi modern seperti React Native, TypeScript, Node.js, dan AI integration telah berhasil dikuasai dan diimplementasikan dengan baik.

Harapannya, aplikasi ini dapat terus dikembangkan dan ditingkatkan oleh developer selanjutnya, sehingga dapat memberikan manfaat yang lebih besar bagi pengguna dan menjadi referensi yang baik untuk proyek-proyek serupa di masa depan.

---

**Dokumentasi ini dibuat pada**: Januari 2025  
**Versi Aplikasi**: 1.0.0  
**Platform**: React Native (Expo)  
**Backend**: Node.js + Express + MySQL  
**AI**: Google Gemini AI

---

## LAMPIRAN

### A. Daftar File Penting

```
aplikasichatbot-frontend/
├── App.tsx                                    # Entry point
├── package.json                               # Dependencies
├── app.json                                   # Expo config
├── navigation/AppNavigator.tsx                # Navigation setup
├── screens/
│   ├── auth/LoginScreen.tsx                   # Login
│   ├── auth/SignUpEmailScreen.tsx             # Register step 1
│   ├── auth/VerificationCodeScreen.tsx        # Register step 2
│   ├── auth/SignUpPasswordScreen.tsx          # Register step 3
│   └── main/ChatScreen.tsx                    # Main chat
├── config/api-config.ts                       # Backend URL
├── contexts/ThemeContext.tsx                  # Theme management
└── utils/
    ├── timeUtils.ts                           # Time formatting
    ├── pinChatUtils.ts                        # Pin chat logic
    └── soundUtils.ts                          # Sound effects
```

### B. Environment Variables

```env
# .env file
GEMINI_API_KEY=your_gemini_api_key_here
BACKEND_URL=http://your-backend-url:3000
```

### C. Database Schema

Lihat file `database_schema.sql` untuk struktur lengkap database.

### D. API Endpoints

**Authentication**
- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- POST `/api/auth/verify-token` - Verify JWT token
- POST `/api/auth/send-otp` - Send OTP email
- POST `/api/auth/verify-otp` - Verify OTP code
- POST `/api/auth/reset-password` - Reset password

**Chat**
- POST `/api/query` - Send message to AI
- POST `/api/chat/save` - Save new chat
- PUT `/api/chat/update` - Update existing chat
- GET `/api/chat/history/:email` - Get chat history
- DELETE `/api/chat-history/:id` - Delete chat
- PUT `/api/chat/update-title` - Update chat title

**User**
- GET `/api/user/:email` - Get user profile
- PUT `/api/user/update` - Update user profile

### E. Referensi dan Sumber

1. **React Native Documentation**: https://reactnative.dev/
2. **Expo Documentation**: https://docs.expo.dev/
3. **React Navigation**: https://reactnavigation.org/
4. **TypeScript**: https://www.typescriptlang.org/
5. **Google Gemini AI**: https://ai.google.dev/
6. **Node.js**: https://nodejs.org/
7. **Express.js**: https://expressjs.com/
8. **MySQL**: https://www.mysql.com/

---

**TERIMA KASIH**

Terima kasih kepada semua pihak yang telah mendukung pengembangan proyek ini, termasuk pembimbing PKL, tim developer, dan semua yang telah memberikan feedback dan saran untuk perbaikan aplikasi.

---

**© 2025 Asisten Chatbot AI - Dokumentasi Proyek PKL**
