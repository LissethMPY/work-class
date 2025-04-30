const express = require('express');
const cors = require('cors');  // Importamos CORS

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola Mundo desde el backend de lis para docker!' });
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
