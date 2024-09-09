import { Router } from "express";
import TrabalhoController from "../controllers/TrabalhoController";


const trabalhosRouter = Router();


const trabalhoCtrl = new TrabalhoController();


trabalhosRouter.post("/", (req, res) => trabalhoCtrl.salvar(req, res));

trabalhosRouter.get("/area/:codArea", (req, res) => {
  console.log("Rota /area/:codArea acessada com sucesso!");
  console.log("Parâmetro codArea:", req.params.codArea);
  trabalhoCtrl.buscarPorArea(req, res); // Chamando o método após o log
});


export default trabalhosRouter;