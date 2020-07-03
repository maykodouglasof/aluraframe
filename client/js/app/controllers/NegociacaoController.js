class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        console.log(typeof (this._inputData.value));

        console.log(this._inputData.value);
    }

}