import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";
// Essa constante está ligada ao elemento HTML com o id "input-item" (geralmente um campo <input>)
const listaDeCompras=document.getElementById("lista-de-compras")
 export const inputItem = document.getElementById("input-item");

let contador = 0;

// Exporta a função 'criarItemDaLista', que será usada para criar um novo item na lista de compras.
export function criarItemDaLista() {
    
    // Verifica se o campo de entrada está vazio (ou seja, se o usuário não digitou nada).
    // Se estiver vazio, mostra um alerta na tela pedindo para inserir um item
    // e finaliza a função com 'return', impedindo a continuação do código.
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    // Cria um elemento HTML <li> (list item), que representará um item da lista.
    const itemDaLista = document.createElement("li");

    // Cria uma <div> que servirá como um container para o conteúdo do item.
    const containerItemDaLista = document.createElement("div");

    // Adiciona uma classe CSS à <div> para que ela possa ser estilizada com CSS.
    containerItemDaLista.classList.add("lista-item-container");

    // Cria um parágrafo <p> para mostrar o nome do item digitado.
    const nomeItem = document.createElement("p");
    const inputCheckBox= document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id= "checkbox-"+contador++;
    containerItemDaLista.appendChild(inputCheckBox)




    inputCheckBox.addEventListener("click", function(){
        if(inputCheckBox.checked){
            nomeItem.style.textDecoration="line-through";

        }else{
            nomeItem.style.textDecoration="none";

        }
    })
//define o tipo do input como checkbox


    

    

    // Define o texto do parágrafo como o valor que o usuário digitou no input.
    nomeItem.innerText = inputItem.value;

    const botao=document.createElement("button")
    botao.classList.add("botao-excluir")

    const iconeExcluir= document.createElement("i");
    iconeExcluir.className = "bi bi-trash2-fill";
    botao.style.cursor="pointer";
    containerItemDaLista.appendChild(botao);
    botao.appendChild(iconeExcluir)
    botao.addEventListener("click", function(){
        const confirmacao =confirm ("deseja realmente deletar esse item?");
        if(confirmacao){
            itemDaLista.remove();
            alert("item deletado");
            verificarListaVazia(listaDeCompras);
        }
    } );
 const botao2=document.createElement("button")
      botao.classList.add("botao-editar")

      const iconeEditar= document.createElement("i");
      iconeEditar.className = "bi bi-pen";
     botao.style.cursor="pointer";
      containerItemDaLista.appendChild(botao2);
      botao2.appendChild(iconeEditar)
       botao2.addEventListener("click", function(){
        const inputEdicao = document.createElement("input");
  inputEdicao.type = "text";
  inputEdicao.value = nomeItem.innerText;
  inputEdicao.classList.add("input-edicao");
  // Substitui o <p> pelo input
  containerItemDaLista.replaceChild(inputEdicao, nomeItem);
  inputEdicao.focus();
  function salvarEdicao() {
    if (inputEdicao.value.trim() === "") {
      alert("O item não pode ficar vazio!");
      inputEdicao.focus();
      return;
    }
    nomeItem.innerText = inputEdicao.value;
    containerItemDaLista.replaceChild(nomeItem, inputEdicao);
  }
  // Salvar ao perder o foco
  
  inputEdicao.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      salvarEdicao();
    }
  });
});

    // Adiciona o <p> com o nome do item dentro da <div> (o container).
    containerItemDaLista.appendChild(nomeItem);

    // Adiciona a <div> dentro do <li>, formando a estrutura final do item.
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta =gerarDiaDaSemana();
    const itemData =document.createElement("p")
    itemData.innerText =dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    // Retorna o <li> completo, que já contém o item digitado, pronto para ser adicionado na lista.
    return itemDaLista;
}


