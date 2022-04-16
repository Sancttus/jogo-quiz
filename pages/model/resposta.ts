export default class RespostaModel{
    #valor: string
    /* para declarar encapsulamento no padrão next usamos # antes da variável */
    #certa: boolean
    #revelada: boolean

        constructor(valor: string, certa: boolean, revelada = false){
        
            this.#valor = valor;
            this.#certa = certa;
            this.#revelada = revelada;

            /* inicia os valores */
        }

        static certa (valor: string){
            return new RespostaModel(valor, true)
        }


        static errada(valor: string){
            return new RespostaModel(valor, false)
        }

        get valor(){
            return this.#valor;
        }

        get certa(){
            return this.#certa
        }

        get revelada(){
            return this.#revelada;
        }

      ParaObjeto(){
            return {
                
                valor: this.#valor,
                certa: this.#certa,
                revelada: this.#revelada
            }
        }

        static criarUsandoObjeto(obj: RespostaModel ): RespostaModel{
            return new RespostaModel(obj.valor, obj.certa, obj.revelada )

        }

        revelar(){
            return new RespostaModel(this.#valor, this.#certa, true)
        }
}       