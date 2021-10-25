import express, { Request, Response} from 'express';

const api = express();

api.get('/test', (req: Request, res: Response) =>{
    res.json({ success: true });
});

api.listen(3333, ()=>{
    console.log("Aplicação iniciada na porta 3333");
})