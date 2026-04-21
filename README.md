# Color Blindness Simulator

Sebuah aplikasi web full-stack untuk mensimulasikan bagaimana penderita buta warna melihat sebuah gambar. Aplikasi ini bertujuan untuk membantu desainer, fotografer, dan developer dalam menguji aksesibilitas warna pada karya atau produk mereka.

## 🚀 Fitur Utama
* **Berbagai Mode Simulasi:** Mendukung simulasi *Protanopia* (Merah), *Deuteranopia* (Hijau), dan *Tritanopia* (Biru).
* **Real-time Preview:** Lihat hasil simulasi secara instan setelah proses unggah gambar.
* **Lightbox View:** Fitur zoom interaktif untuk melihat detail warna pada gambar hasil simulasi.
* **Download Hasil:** Unduh gambar yang telah diproses untuk kebutuhan presentasi atau pengarsipan.
* **Responsive UI:** Desain minimalis yang nyaman digunakan di berbagai perangkat.

## 🛠️ Teknologi yang Digunakan
* **Backend:** Node.js, Express.js
* **Image Processing:** Sharp.js (menggunakan *matrix recombination*)
* **Frontend:** HTML5, Vanilla JavaScript, CSS3
* **Upload Handling:** Multer

## 📋 Cara Menjalankan

1.  **Clone repository ini:**
    ```bash
    git clone [https://github.com/username/color-blind-simulator.git](https://github.com/username/color-blind-simulator.git)
    cd color-blind-simulator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Jalankan server:**
    ```bash
    node index.js
    ```

4.  **Akses aplikasi:**
    Buka browser Anda dan kunjungi `http://localhost:3000`

## 🧠 Bagaimana Aplikasi Bekerja
Aplikasi ini menggunakan teknik **Color Matrix Recombination**. Setiap gambar yang diunggah diproses di sisi backend menggunakan library `sharp`. Kami menerapkan matriks transformasi linear 3x3 untuk memetakan ulang nilai pixel RGB agar sesuai dengan persepsi penglihatan penderita buta warna tertentu.

Contoh matriks yang digunakan untuk Protanopia:
```javascript
[
    [0.567, 0.433, 0],
    [0.558, 0.442, 0],
    [0, 0.242, 0.758]
]
