import express, { Router } from "express";


const router = express.Router();

const mobil = [
    {
        merek: "toyota",
        model: "SUV",
        warna: "merah",
        tahun: "2004"
    },
    {
        merek: "porche",
        model: "sport",
        warna: "kuning",
        tahun: "2004"
    }
];

router.get("/", (req, res) => {
    res.send(mobil);
})

export default router;