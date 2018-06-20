<template>
  <div id="app">
	<input type="number" v-model="calle" placeholder="Calle" min="1" max="80" class="item">
	<input type="number" v-model="numero" placeholder="Número" min="1" class="item">
	<span class="item resultado">{{ resultado }}</span>    
  </div>
</template>

<script>
import CalleHorizontal from './CalleHorizontal'
import CalleVertical from './CalleVertical'
import Diagonal from './Diagonal'
import Diagonal2 from './Diagonal2'
import Diagonal3 from './Diagonal3'

const diag1 = new Set([73,74,79,80])
const diag2 = new Set([75,76])
const diag3 = new Set([77,78])

export default {
  name: 'app',
  data: function () {
  	return {
  		calle: null,
  		numero: null
  	}
  },
  computed: {
  	resultado: function () {
  		if (this.calle && this.numero && 1 <= this.calle && this.calle <= 80) {
  			const tipo = this.obtenerTipoCalle()
  			return tipo.obtenerEntres(this.calle, this.numero)
  		}

  		if (this.calle && (this.calle < 1 || this.calle > 80)) {
  			return 'Ingrese una calle dentro del casco urbano'
  		}

  		return ''
  	}
  },
  methods: {
  	obtenerTipoCalle: function () {
  		if (this.calle <= 31) {
  			return CalleHorizontal
  		}
  		if (this.calle <= 72) {
  			return CalleVertical
  		}
  		if (diag1.has(this.calle)) {
  			return Diagonal
  		}
  		if (diag2.has(this.calle)) {
  			return Diagonal2
  		}
  		if (diag3.has(this.calle)) {
  			return Diagonal3
  		}
  	}
  }
}
</script>


<style>
	body {
		margin: 0;
		background-color: #fefefe;
	}
	#app {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.item {
		width: 35%;
		margin: 25px auto;
	}
	input {
		line-height: 3;
		padding: 5px 20px;
		z-index: 5;
		border: solid #dedede .5px;
		border-radius: 6px;
		font-size: 1.3em;
		background-color: #eee;
		box-shadow: 3px 10px 15px rgba(0, 0, 0, .4);
		vertical-align: middle;
		transition: all .6s;
	}
	input::placeholder {
		color: #aaa	;
		font-weight: bold;
	}
	input:focus {
		outline: none;
		box-shadow: 4px 13px 20px rgba(0, 0, 0, .5);
		transform: scale(1.05);
	}
	input[type=number]::-webkit-inner-spin-button, 
	input[type=number]::-webkit-outer-spin-button { 
	    -webkit-appearance: none;
	    -moz-appearance: none;
	    appearance: none;
	    margin: 0; 
	}
	.resultado {
		font-size: 1.8em;
		font-weight: bold;
		text-align: center;
		color: #666;
	}
</style>
