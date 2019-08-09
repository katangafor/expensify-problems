const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// why use path and __dirname instead of relative paths? Some things can't use relative paths?
app.use(express.static(publicPath));

// the asterisk matches all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
})

app.listen(port, () => {
  console.log('server is up');
});