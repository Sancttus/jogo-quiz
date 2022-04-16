import { embaralhar } from "../../../function/array";
import questoes from "../questoes/bancoDeQuestoes";


export default(req, res) => {

    const ids = questoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids));
}