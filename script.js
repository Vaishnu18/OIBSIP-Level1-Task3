const calculateT = () => {
    let inputt = document.getElementById('temp').value;

    if (!isNaN(inputt)) {
        const inputTemp = parseFloat(inputt);
        const tempSelected = document.getElementById('selector');
        const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
        const celToFah = (cel) => {
            let fahrenheit = ((cel * 9 / 5) + 32).toFixed(2);
            return fahrenheit;
        }

        const fahToCel = (fah) => {
            let celsius = ((fah - 32) * 5 / 9).toFixed(2);
            return celsius;
        }

        if (valueTemp === 'cel') {
            const result = celToFah(inputTemp);
            document.getElementById("result").innerHTML = result + "&#176; Fahrenheit";
        } else {
            const result = fahToCel(inputTemp);
            document.getElementById("result").innerHTML = result + "&#176; Celsius";
        }
    } else {
        document.getElementById('result').innerHTML = "Not a Valid Number";
    }
}

