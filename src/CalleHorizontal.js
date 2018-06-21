export default class CalleHorizontal {
	
	static obtenerEntres(calle, numero) {
		const c = Math.floor(numero / 100) * 2
		const r = numero % 100 > 50 ? 1 : 0
		let res = c + r + 32
		res = res >= 52 ? res+1 : res
		if (32 <= res && res <= 72) {
			return `${calle} entre ${res} y ${res+1}`
		}

		return 'ERROR! Dirección fuera del casco urbano'
	}
}