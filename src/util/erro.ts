declare interface ErroInterface{
    status: number,
    mensagem: any
    [name: string]: any
}

export class Erro {
    static MSG_404_REGISTRO = {status: 404, mensagem: 'Registro não encontrado'};
    static MSG_500 = {status: 500, mensagem: 'Falha interna'};
    static MSG_DADOS_INVALIDOS = {status: 400, mensagem: ''};
    static MSG_COLUNAS = {status: 400, mensagem: 'Informe as colunas para busca'};
    static MSG_EXISTE = {status: 409, mensagem: 'Este registro já existe'};
    static MSG_FORMULARIO = {status: 422, mensagem: ''};

    campos = {};

    json:any;
    status: number;
    constructor (erro?: ErroInterface){
        if(erro){
                this.json = erro;
                this.status = erro.status;
                new Error(JSON.stringify(erro))
        }else{
            this.campos = {};
        }
    }

    addMensagem(campo, mensagem){
        if(this.campos.hasOwnProperty(campo)){
            this.campos[campo].push(mensagem);
        }else{
            this.campos[campo] = [mensagem];
        }
    }

    verifica(){
        try {
            if (Object.keys(this.campos).length) {
                throw new Erro({status: 422, mensagem: this.campos});
            }
        }catch (e) {
            throw e;
        }
    }

    static catch(erro, res){
        if(erro instanceof Erro){
            res.status(erro.status).json(erro.json);
        }else{
            res.status(500).json({status:500, mensagem: erro.message});
        }
    }


}
