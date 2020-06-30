const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
app.set("port", PORT);
const publicPath = path.join(__dirname, '.', 'dist');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});
