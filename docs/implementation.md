# Implementation Plan: Move "Visit Our Showroom" Section

## Goal
Memindahkan blok informasi "Visit Our Showroom" dan Google Maps embed dari halaman Detail Service (`src/pages/detail-service.tsx`) ke halaman Home (`src/pages/landing-page.tsx`) agar berada paling bawah, tepat setelah blok Contact Us (`<CTA />`).

## Tasks

### 1. Buat Komponen Baru: `src/components/Showroom.tsx`
- Buat file baru bernama `Showroom.tsx` di folder `src/components/`.
- Pindahkan struktur JSX bagian `Location & CTA Section` (yang diawali dengan teks "Visit Our Showroom") dari `src/pages/detail-service.tsx` ke dalam komponen ini.
- Bungkus blok `grid` tersebut dengan wrapper `<section className="max-w-7xl mx-auto px-6 pb-20">` agar memiliki margin dan layout yang selaras dengan komponen lain di Home page (seperti `<CTA />`).
- Tambahkan *import* yang dibutuhkan di dalam `Showroom.tsx`:
  ```tsx
  import React from "react";
  import { MapPin, Phone, Calendar } from "lucide-react";
  import { Link } from "react-router";
  import { siteContact } from "@/configs/contact";
  ```

### 2. Bersihkan Kode di `src/pages/detail-service.tsx`
- Hapus seluruh blok JSX untuk bagian `{/* Location & CTA Section */}` (sekitar baris 202 hingga 258).
- Hapus import `MapPin`, `Phone`, dan `Calendar` dari `lucide-react` jika sudah tidak digunakan di bagian lain pada file tersebut.

### 3. Integrasikan ke Halaman Home (`src/pages/landing-page.tsx`)
- *Import* komponen `Showroom` ke dalam `src/pages/landing-page.tsx`:
  ```tsx
  import Showroom from "@/components/Showroom";
  ```
- Tambahkan pemanggilan `<Showroom />` di dalam tag `<main>`, posisikan **tepat di bawah** pemanggilan `<CTA />`.
  
## Acceptance Criteria
- Halaman `detail-service.tsx` sudah tidak lagi menampilkan blok "Visit Our Showroom" dan embed Maps.
- Halaman `landing-page.tsx` berhasil memunculkan blok "Visit Our Showroom" di bagian paling bawah konten utama, setelah "Contact Us" dan sebelum "Footer".
- Jarak (margin/padding) dan layout lebar kolom selaras dengan halaman Home, tidak *overlapping* dengan bagian lain.
- Link "Book Free Survey" ke WhatsApp dan interaksi Google Maps berfungsi dengan normal.
