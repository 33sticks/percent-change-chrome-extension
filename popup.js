document.getElementById('calculateButton').addEventListener('click', function() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var resultElement = document.getElementById('result');

    if (!isNaN(value1) && !isNaN(value2)) {
        var percentageChange = ((value2 - value1) / Math.abs(value1)) * 100;
        var percentageText = 'Percentage Change: ' + percentageChange.toFixed(2) + '%';

        if (percentageChange > 0) {
            resultElement.style.color = 'green';
        } else if (percentageChange < 0) {
            resultElement.style.color = 'red';
        } else {
            resultElement.style.color = 'black';
        }

        resultElement.textContent = percentageText;
    } else {
        resultElement.textContent = 'Please enter valid numbers for both values.';
        resultElement.style.color = 'black';
    }
});
