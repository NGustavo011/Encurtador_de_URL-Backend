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
    public async redirect(req: Request, res: Response): Promise<void>{
        // Pega hash da URL
        const { hash } = req.params;
        // Encontrar a URL original pelo hash
        const url = {
            originURL: "https://www.kabum.com.br/produto/102002/headset-sem-fio-gamer-hyperx-cloud-flight-drivers-50mm-led-multiplas-plataformas-hx-hscf-bk-am",
            hash: "R2Qak9oVx",
            shortURL: "http://localhost:3333/R2Qak9oVx"
        }
        // Redirecionar para a URL original com o que encontramos no DB
        res.redirect(url.originURL);
    }
}