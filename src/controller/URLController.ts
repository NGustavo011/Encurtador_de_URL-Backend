import { URLModel } from "../database/model/URL";
import { Request, Response } from "express";
import shortId from 'shortid';
import { API_URL } from "../config/Constants";

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void>{
        // Verificar se a URL já não existe
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });
        if(url){
            res.json(url);
            return;
        }
        // Criar o hash para a URL
        const hash = shortId.generate();
        const shortURL = `${API_URL}/${hash}`;
        // Salvar a URL no banco
        const newURL = await URLModel.create({ originURL, hash, shortURL })
        // Retornar a URL salva 
        res.json({ newURL });
    }

    public async redirect(req: Request, res: Response): Promise<void>{
        // Pega hash da URL
        const { hash } = req.params;
        const url = await URLModel.findOne( {hash} );

        // Encontrar a URL original pelo hash
        if(url){
            // Redirecionar para a URL original com o que encontramos no DB
            res.redirect(url.originURL);
        }

        res.status(400).json({ error: "URL not found" });
    }
}