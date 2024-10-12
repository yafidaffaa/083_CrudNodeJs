import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Serever is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("yafi daffa andriansyah");
});

app.get("/about", (req, res) => {
    res.send("Mahasiswa TI");
});
