export default class Diagonal3 {
	
	static obtenerEntres(calle, numero) {
		const c = Math.floor(numero / 100)
		const r = numero % 100 > 50 ? 1 : 0
		let res = c + r + 1
		if (1 <= res && res <= 31) {
			return `${calle} entre ${res} y ${res+1}`
		}

		return 'ERROR! Dirección fuera del casco urbano'
	}
}