import express, { Request, Response} from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();
api.post("/shorten", urlController.shorten);
api.get("/:hash", urlController.redirect);

api.listen(process.env.PORT || 3333, ()=>{
    console.log("Aplicação iniciada na porta 3333");
})