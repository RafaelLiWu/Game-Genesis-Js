let ordem = [];
let clicarordem = [];
let pontuacao = 0;

const green = document.querySelector(".verde");
const blue = document.querySelector(".azul");
const red = document.querySelector(".vermelho");
const yellow = document.querySelector(".amarelo");

let AdicionarCor = () => {
	ordem.push((Math.floor(Math.random()*4))); 
	clicarordem = [];
	
	for ( let n in ordem ){ 
		let NumeroCor = SelecionarACor(ordem[n]);
		clarear(NumeroCor, Number(n) + 1);
	}
}
let SelecionarACor = (QlCor) => {
	if ( QlCor == 0 ){
		return green;
	} else if ( QlCor == 1 ) {
		return blue;
	} else if ( QlCor == 2 ) {
		return red;
	} else if ( QlCor == 3 ) {
		return yellow;
	}
}
let clarear = (ncor, tempo) => {
	tempo = tempo * 500; 
	setTimeout( () => {
			ncor.classList.add('clarear');
			}, tempo - 200); 
	setTimeout( () => {
		    ncor.classList.remove('clarear');
	}, tempo + 250);		
}
let Verificar = () => {
	for ( let i in clicarordem ) {
		if ( clicarordem[i] != ordem[i] ){
			Perdeu();
			break;
		}
	}
	if ( clicarordem.length == ordem.length ){
		alert(`Parabens você passou!!\n Sua pontuação é: ${pontuacao + 1} !! Parabéns continue!!`);
		ProximoNivel();
	}
}
let Clicado = (cor) => {
	clicarordem.push(cor);
	SelecionarACor(cor).classList.add ( 'clarear' );
	setTimeout( () => {
		SelecionarACor(cor).classList.remove ( 'clarear' ); 
		Verificar();
	}, 250)
}

let ProximoNivel = () => {
	AdicionarCor();
	pontuacao++;
}
let Perdeu = () => {
	alert("Você perdeu!!");
	ordem = [];
	clicarordem = [];
	start()
}
let start = () => {
	pontuacao = 0;
	alert("Olá bem vindo ao Genesis");
	AdicionarCor();
}
start();
