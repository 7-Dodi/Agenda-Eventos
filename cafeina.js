const eventoData ={ //Criando o protótipo do objeto
    evento: "",
    data: "",
    hora: "",
    minuto: "",
}

const vetor = []; //Vetor principal (Vetor de objetos)
const resultado = document.querySelector("ul");
const button = document.querySelector("#adc");
const evento = document.querySelector("#evento");
const apagar = document.querySelector("#apagar");

function adiconarVetor(vetor, criar){ //Função para adicionar os evntos ao vetor
    vetor.push(criar);
    console.log(vetor);
    vetor.sort((a,b)=> (a.data[0]+a.data[1])-(b.data[0]+b.data[1])); //Função para ordenar o vetor de acordo com a data
    return vetor;
}

function imprimirDados(vetor){ //Função para imprimir o vetor principal
    const vetAux = []; //Vetor auxiliar
    for (const item of vetor) { 
        const li1= document.createElement("li");
        const li2= document.createElement("li");

        li1.textContent= ` Nome: ${item.evento}`;
        li2.textContent= ` Data: ${item.data} Horario: ${item.hora}:${item.minuto}`;

        vetAux.push(li1, li2);
    }
    resultado.replaceChildren(...vetAux); //Usando a função replaceChildren()
}

apagar.addEventListener("click", ()=>{ //Butão opicional (Apagar os campos de texto para adicionar outro)
    const evento = document.querySelector("#evento").value= "";
    const data = document.querySelector("#data").value= "";
    resultado.textContent= "";
});

evento.addEventListener("keyup", ()=>{ //Evento opicional para apagar o ul ao ser escrito o nome do evento
    resultado.textContent= "";
});

button.addEventListener("click", ()=>{ //Evento/Butão principal
    const evento = document.querySelector("#evento").value;
    const data = document.querySelector("#data").value;

    const dataHora= new Date(data); //Uso do Date para manipular a data

    const criar = Object.create(eventoData); //Criando o objeto e os campos do objeto
    criar.evento = evento;
    criar.data = dataHora.toLocaleDateString();
    criar.hora = dataHora.getHours();
    criar.minuto = dataHora.getMinutes();

    adiconarVetor(vetor, criar); //chamando as funções
    imprimirDados(vetor);

});

