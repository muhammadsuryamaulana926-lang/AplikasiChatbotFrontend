# Fitur Notifikasi Harian

## Deskripsi
Aplikasi akan mengirimkan notifikasi lokal setiap hari pada jam 10:00 pagi (waktu lokal device) untuk mengingatkan user menggunakan aplikasi.

## Cara Kerja
- **Local Notifications**: Notifikasi dijadwalkan di device user, bukan dari server
- **Scheduled Daily**: Notifikasi akan muncul setiap hari jam 10:00 pagi
- **Background Support**: Notifikasi tetap muncul meskipun aplikasi tertutup
- **Auto Setup**: Notifikasi otomatis dijadwalkan saat aplikasi pertama kali dibuka

## Fitur Teknis
- Menggunakan `expo-notifications` untuk local notifications
- Notifikasi dijadwalkan dengan trigger `hour: 10, minute: 0, repeats: true`
- Support iOS dan Android
- Meminta permission notifikasi saat pertama kali buka aplikasi
- Notifikasi channel untuk Android dengan priority HIGH

## Permissions
- **Android**: POST_NOTIFICATIONS (Android 13+)
- **iOS**: User Notifications

## Testing
1. Buka aplikasi untuk pertama kali
2. Izinkan permission notifikasi
3. Notifikasi akan muncul setiap hari jam 10:00 pagi
4. Untuk testing cepat, ubah `hour` di `notificationUtils.ts`

## Customization
Edit file `utils/notificationUtils.ts`:
- `title`: Judul notifikasi
- `body`: Isi pesan notifikasi
- `hour`: Jam notifikasi (0-23)
- `minute`: Menit notifikasi (0-59)

## Build Requirements
Untuk production build:
```bash
npx expo prebuild
eas build --platform android
eas build --platform ios
```

## Catatan
- Notifikasi menggunakan waktu lokal device user
- Jika user menghapus aplikasi, notifikasi akan hilang
- Jika user disable permission, notifikasi tidak akan muncul
