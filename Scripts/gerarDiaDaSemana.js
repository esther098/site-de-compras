function gerarDiaDaSemana(){
    const diaDaSemana = new Date().toLocaleDateString("pt-br",{
        weekday:"long"
    }
    );
    const hora= new Date().toLocaleTimeString("pt-br",{
        hour:"numeric",
        minute:"numeric"
    });
    const data= new Date().toLocaleTimeString("pt-br");
    const dataCompleta= `${diaDaSemana} (${data}) ás ${hora}`;
    return dataCompleta;

}
export default gerarDiaDaSemana;