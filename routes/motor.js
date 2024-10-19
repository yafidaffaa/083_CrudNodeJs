import express, {Router} from "express";

const router = express.Router();

const motor = [
    {
        merek: "Honda",
        warna: "kuning",
        mesin: "V8",
        tahun: "2020"
    }
]

router.get("/", (req, res)=> {
    res.send(motor);
})

export default router;