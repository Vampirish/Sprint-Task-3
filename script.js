function transfer(){
	let numberField = document.getElementById('inpNumID');
	let currency = document.getElementById('inpCurID');
	let kzt = document.getElementById('curKZT');
	let usd = document.getElementById('curUSD');
	let eur = document.getElementById('curEUR');

	if (currency.value == "KZT") {
		kzt.value = '-';
		usd.value = (numberField.value / 431).toFixed(2);
		eur.value = (numberField.value / 509).toFixed(2);
	} else if (currency.value == "USD") {
		kzt.value = (numberField.value * 429).toFixed(2);
		usd.value = '-';
		eur.value = (numberField.value * (429/509)).toFixed(2);
	} else if (currency.value == "EUR") {
		kzt.value = (numberField.value * 507).toFixed(2);
		usd.value = (numberField.value * (507/431)).toFixed(2);
		eur.value = '-';
	}
}

