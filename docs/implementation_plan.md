# Implementation Plan: Centralize Contact Information

## Goals
Memusatkan semua informasi kontak (nomor telepon, alamat, dan nomor WhatsApp, dll.) ke dalam satu file konfigurasi (`src/configs/contact.ts`). Tujuannya adalah agar jika suatu saat ada perubahan data kontak, kita hanya perlu mengubahnya di satu tempat dan semua bagian website (komponen dan halaman) akan diperbarui secara otomatis.

## Target AI
Plan ini dibuat untuk dieksekusi oleh AI (Model yang lebih murah/standar) agar mengimplementasikan perubahan dengan efisien.

## Tasks & Steps

### Step 1: Buat File Konfigurasi Baru
**Target File:** `src/configs/contact.ts`
**Instruksi:**
Buat file `contact.ts` di dalam folder `src/configs/` dan export sebuah object konstan (misalnya `siteContact`) yang berisi properti berikut:
- `whatsappNumber`: "6281234567890" (atau sesuaikan dengan kebutuhan, pastikan hanya angka dan diawali kode negara)
- `whatsappMessage`: "Hello! I am interested in your product."
- `phoneNumber`: "+44 20 1234 5678"
- `address`: "Leyton, London, E10"
- `googleMapsUrl`: "https://www.google.com/maps/embed?pb=..." (ambil URL iframe maps dari `detail-service.tsx` baris 247)
- `email`: "info@standardcarpet.com" (opsional/tambahan)

### Step 2: Update `src/components/WhatsAppButton.tsx`
**Target File:** `src/components/WhatsAppButton.tsx`
**Instruksi:**
1. Import konfigurasi dari `src/configs/contact.ts`.
2. Ubah default prop `message` menggunakan `siteContact.whatsappMessage`.
3. Jika prop `phone` tidak diberikan, gunakan `siteContact.whatsappNumber` sebagai default.

### Step 3: Update `src/components/CTA.tsx`
**Target File:** `src/components/CTA.tsx`
**Instruksi:**
1. Import konfigurasi dari `src/configs/contact.ts`.
2. Cari tag `<Link>` yang mengarah ke `https://wa.me/6281234567890...`.
3. Ganti URL hardcoded tersebut agar dibuat secara dinamis menggunakan variabel `siteContact.whatsappNumber` dan `siteContact.whatsappMessage`.

### Step 4: Update `src/pages/detail-service.tsx`
**Target File:** `src/pages/detail-service.tsx`
**Instruksi:**
1. Import konfigurasi dari `src/configs/contact.ts`.
2. Cari string "Leyton, London, E10" dan ganti dengan `{siteContact.address}`.
3. Cari string "+44 20 1234 5678" dan ganti dengan `{siteContact.phoneNumber}`.
4. Cari `https://wa.me/6281234567890...` pada tombol "Book Free Survey" dan ubah menjadi dinamis menggunakan data dari config.
5. Ganti `src` pada tag `<iframe>` Google Maps dengan `{siteContact.googleMapsUrl}`.

### Step 5: Update `src/pages/about-page.tsx`
**Target File:** `src/pages/about-page.tsx`
**Instruksi:**
1. Import konfigurasi dari `src/configs/contact.ts`.
2. Cari `https://wa.me/6281234567890...` pada tombol "Book a Free Survey".
3. Ganti URL tersebut menjadi dinamis menggunakan variabel `siteContact.whatsappNumber` dan `siteContact.whatsappMessage`.

### Step 6: Review & Clean Up
Pastikan semua file yang diubah tidak memunculkan error import. Gunakan path alias `@/configs/contact` jika memungkinkan, atau relative path jika alias belum diset dengan benar (tergantung setup tsconfig).

---
**Catatan untuk AI Pelaksana:**
Jangan ubah styling atau struktur HTML/Tailwind yang sudah ada, cukup ubah nilai teks/string/URL yang asalnya di-hardcode menjadi variabel dari `src/configs/contact.ts`.
