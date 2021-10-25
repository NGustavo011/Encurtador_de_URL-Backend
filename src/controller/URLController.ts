import { Request, Response } from "express";
import shortId from 'shortid';
import { API_URL } from "../config/Constants";

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void>{
        // Verificar se a URL já não existe
        // Criar o hash para a URL
        const { originURL } = req.body;
        const hash = shortId.generate();
        const shortURL = `${API_URL}/${hash}`;
        // Salvar a URL no banco
        // Retornar a URL salva 
        res.json({ originURL, hash, shortURL });
    }
}