var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input-text');
var elText = document.querySelector('.text');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	if (!isNaN(elInput.value)) {
		elText.textContent = `iltimos hafta kuni kiriting :)`;
	} else if (elInput.value == `Dushanba` || elInput.value == `dushanba`) {
		elText.textContent = `Monday`;
	} else if (elInput.value == `Seshanba` || elInput.value == `seshanba`) {
		elText.textContent = `Tuesday`;
	} else if (elInput.value == `Chorshanba` || elInput.value == `chorshanba`) {
		elText.textContent = `Wednesday`;
	} else if (elInput.value == `Payshanba` || elInput.value == `payshanba`) {
		elText.textContent = `Thursday`;
	} else if (elInput.value == `Juma` || elInput.value == `juma`) {
		elText.textContent = `Friday`;
	} else if (elInput.value == `Shanba` || elInput.value == `shanba`) {
		elText.textContent = `Saturday`;
	} else if (elInput.value == `Yakshanba` || elInput.value == `yakshanba`) {
		elText.textContent = `Sunday`;
	}
});