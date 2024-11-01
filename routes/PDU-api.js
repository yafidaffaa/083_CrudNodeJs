import express, {json, Router} from "express";

const router = express.Router();

const warna = [
    
]

router.get("/", (req, res) => {
    res.send(warna);
})

router.post("/", (req, res)=> {
    const newWarna = {
        id:warna.length+1,
        task:req.body.task,
        completed:false
    }
    warna.push(newWarna);
    res.status(201).json(newWarna);
})

router.delete('/:id', (req, res) => {
    const warnaIndex = warna.findIndex(t=>t.id===parseInt(req.params.id));
    if(warnaIndex===-1)return res.status(404).json({message: 'Tidak ditemukan'});

    const deleteWarna = warna.splice(warnaIndex,1) [0];
    res.status(200).json({message: `${deleteWarna.task}`});
})

router.put('/:id', (req, res) => {
    const warnaIndex = warna.findIndex(t=>t.id===parseInt(req.params.id));
    if(warnaIndex === -1)return res.status(404).json({message: 'Tidak ditemukan'});
    warna[warnaIndex].task = req.body.task || warna[warnaIndex].task;
    
    res.status(200).json({
        message: `${warna[warnaIndex].id}`,
        updatewarna:warna[warnaIndex]
    });
})

export default router;