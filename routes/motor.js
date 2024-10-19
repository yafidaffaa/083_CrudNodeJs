import express, {Router} from "express";

const router = express.Router();

const motor = [
    {
        merek: "Honda",
        warna: "kuning",
        mesin: "V8",
        tahun: "2020"
    },
    {
        merek: "yamahal",
        warna: "merah",
        mesin: "V2",
        tahun: "2020"
    },
    {
        merek: "suzuki",
        warna: "hitan",
        mesin: "V4",
        tahun: "2020"
    }
]

router.get("/", (req, res)=> {
    res.send(motor);
})

export default router;