const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));


const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD


const upload = multer({ storage: multer.memoryStorage() });

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/upload', upload.single('csvfile'), (req, res) => {
  const password = req.body.password;

  if (password != ADMIN_PASSWORD) {
    return res.status(401).send('Unauthorized: Wrong password!');
  }

  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const csvPath = path.join(__dirname, 'public', 'data', 'data.csv');

  fs.writeFile(csvPath, req.file.buffer, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving file.');
    }
    res.send('CSV uploaded successfully!');
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
