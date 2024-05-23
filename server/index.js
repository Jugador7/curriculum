const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let profileData = {
  name: "Gabriel Moya",
  role: "Líder de desarrollo de software"
};

// Endpoint to get header data
app.get('/api/header', (req, res) => {
  const { name, role } = profileData;
  res.json({ name, role });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});