function convertToRoman() {
            const numberInput = document.getElementById('input-number');
            const resultContainer = document.getElementById('result');
            const inputValue = parseInt(numberInput.value);
            const convertedValue = numberToRoman(inputValue);
            resultContainer.innerHTML = convertedValue;
            resultContainer.classList.add('result-animation');
            setTimeout(() => {
                resultContainer.classList.remove('result-animation');
            }, 1000);
        }

        function convertToNumber() {
            const romanInput = document.getElementById('input-roman');
            const resultContainer = document.getElementById('result');
            const inputValue = romanInput.value.toUpperCase();
            const convertedValue = romanToNumber(inputValue);
            resultContainer.innerHTML = convertedValue;
            resultContainer.classList.add('result-animation');
            setTimeout(() => {
                resultContainer.classList.remove('result-animation');
            }, 1000);
        }

        function numberToRoman(num) {
            const romanNumerals = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1
            };

            let result = '';
            for (let key in romanNumerals) {
                while (num >= romanNumerals[key]) {
                    result += key;
                    num -= romanNumerals[key];
                }
            }
            return result;
        }

        function romanToNumber(roman) {
            const romanValues = {
                I: 1,
                V: 5,
                X: 10,
                L: 50,
                C: 100,
                D: 500,
                M: 1000
            };

            let result = 0;
            for (let i = 0; i < roman.length; i++) {
                const current = romanValues[roman[i]];
                const next = romanValues[roman[i + 1]];

                if (current < next) {
                    result -= current;
                } else {
                    result += current;
                }
            }
            return result;
        }

        function reset() {
            const numberInput = document.getElementById('input-number');
            const romanInput = document.getElementById('input-roman');
            const resultContainer = document.getElementById('result');

            numberInput.value = '';
            romanInput.value = '';
            resultContainer.innerHTML = '';
        }