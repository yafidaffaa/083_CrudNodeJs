import bodyParser from 'body-parser';
import express from 'express';
import mobileRoute from "./routes/mobil.js"
import motorRoute from "./routes/motor.js"
import PDURoute from "./routes/PDU-api.js"


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.json());

app.use("/mobil", mobileRoute)
app.use("/motor", motorRoute)
app.use("/PDU", PDURoute)


app.get("/", (req, res) => {
    console.log(["GET ROUTE"]);
    res.send("yafi daffa andriansyah");
});

app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Serever is running on http://localhost:${port}`);
});



app.get("/about", (req, res) => {
    res.send("Mahasiswa TI");
});
