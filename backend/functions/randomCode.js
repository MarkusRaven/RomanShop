///////// Get random 5 numbers function
const getCode = () => {
	function getRandomIntInclusive(min = 0, max = 9) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1)) + min //Максимум и минимум включаются
	}
	function getFullRandomNumbers() {
		let randomNumbers = ''
		for (let i = 0; i < 5; i++) {
			randomNumbers += getRandomIntInclusive()
		}
		return randomNumbers
	}
	function getSixRandomNumbers() {
		let randomNumbers = ''
		for (let i = 0; i < 6; i++) {
			randomNumbers += getRandomIntInclusive()
		}
		return randomNumbers
	}
	function getRandomNumbers() {
		let randomNumbers = ''
		for (let i = 0; i < 64; i++) {
			randomNumbers += getRandomIntInclusive()
		}
		return randomNumbers
	}
	return {
		getRandomIntInclusive,
		getFullRandomNumbers,
		getSixRandomNumbers,
		getRandomNumbers,
	}
}

///////////////////////
module.exports = getCode
