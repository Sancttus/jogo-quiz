import { embaralhar } from "../../function/array";
import RespostaModel from "./resposta";

export default class QuestaoModel{
    #id: number
    #enunciado: string
    #resposta: RespostaModel[]
    #acertou: boolean
    // #respondida: boolean

        constructor(id: number, enunciado: string, resposta: RespostaModel[], acertou = false){
            this.#id = id;
            this.#enunciado = enunciado;
            this.#resposta = resposta;
            this.#acertou = acertou; 
        }
        
        get id(){
            return this.#id
        }

        get enunciado(){
            return this.#enunciado
        }

        get resposta(){
            return this.#resposta
        }

        get acertou(){
            return this.#acertou
        }

        get naoRespondida(){
            return !this.respondida
        }

        get respondida(){
            for(let resposta of this.#resposta){
                if(resposta.revelada ) return true
            }
            return false
        }

        responderCom(indice: number): QuestaoModel {
            const acertou = this.#resposta[indice]?.certa
            const resposta = this.#resposta.map((resposta, i) => { 
                const respostaSelecionada = indice === i
                const deveRevelar = respostaSelecionada || resposta.certa
                return deveRevelar ? resposta.revelar() : resposta
            })
            return new QuestaoModel(this.#id, this.#enunciado, resposta, acertou)
        }

        embaralharRespostas(): QuestaoModel{
       let respostasEmbaralhadas = embaralhar(this.#resposta)

       return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
        }    

        static criarUsandoObjeto(obj: QuestaoModel ): QuestaoModel{
            const resposta = obj.resposta.map(resp => RespostaModel.criarUsandoObjeto(resp))
            return new QuestaoModel(obj.id, obj.enunciado, resposta, obj.acertou)

        }

        ParaObjeto(){
            return {
                id: this.#id,
                enunciado: this.#enunciado,
                resposta: this.#resposta.map(resp => resp.ParaObjeto()),
                acertou: this.#acertou,
                respondida: this.respondida

            }
        }



        
     
    }