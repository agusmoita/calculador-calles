export default class Calle {

	inicializar(numero) {
		this.c = Math.floor(numero / 100) * 2
		this.r = numero % 100 > 50 ? 1 : 0
	}

}