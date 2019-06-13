const express = require('express');
const PORT = process.env.PORT || 8070;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});