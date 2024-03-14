class Imovel {
    quartos;
    tipo;
    endereco;    

    exibirInformações(){
        return ` O imovel é um ${this.tipo} que contém ${this.quartos} quartos, e está localizado no endereço ${this.endereco}`
    }
}

const casa = new Imovel();
casa.quartos = 4;
casa.tipo = "Casa";
casa.endereco = "Rua Carlos Sthal, 5020 - Bairro Jardim El Dourado ";


const apartamento = new Imovel();
apartamento.quartos = 2;
apartamento.tipo = "apartamento";
apartamento.endereco = "AV. Phonsyr, 6969 - Centro";

console.log(casa.exibirInformações())