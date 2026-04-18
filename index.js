const express = require('express');
const multer = require('multer');
const sharp = require('sharp');

const app = express();
const port = 3000;
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.static('public'));
// Matriks Transformasi (LMS to RGB Simulation)
const matrices = {
    protanopia: [
        [0.567, 0.433, 0],
        [0.558, 0.442, 0],
        [0, 0.242, 0.758]
    ],
    deuteranopia: [
        [0.625, 0.375, 0],
        [0.7, 0.3, 0],
        [0, 0.3, 0.7]
    ],
    tritanopia: [
        [0.95, 0.05, 0],
        [0, 0.433, 0.567],
        [0, 0.475, 0.525]
    ]
};

app.post('/simulate', upload.single('image'), async (req, res) => {
    const mode = req.query.mode || 'protanopia';
    
    // Debug: Cek apakah file masuk
    if (!req.file) {
        console.log("Error: Tidak ada file yang diterima.");
        return res.status(400).send('Tidak ada gambar yang diunggah.');
    }

    console.log("Mode yang dipilih:", mode);
    console.log("File yang diterima:", req.file.originalname);

    try {
        const processedImage = await sharp(req.file.buffer)
            .recomb(matrices[mode] || matrices.protanopia)
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.send(processedImage);
    } catch (error) {
        // Debug: Tampilkan error asli di terminal
        console.error("Error Sharp:", error); 
        res.status(500).send(error.message); // Mengirim pesan error asli ke browser
    }
});
app.listen(port, () => console.log(`Server jalan di http://localhost:${port}`));