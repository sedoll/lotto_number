document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('rule1').style.display = 'block';
    document.getElementById('rule2').style.display = 'none';
    document.getElementById('result').innerText = '';
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('rule1').style.display = 'none';
    document.getElementById('rule2').style.display = 'block';
    document.getElementById('result').innerText = '';
});

document.getElementById('draw1').addEventListener('click', function() {
    const numbers = generateUniqueNumbers(1, 45, 6).sort((a, b) => a - b); // 오름차순 정렬
    document.getElementById('result').innerText = `추첨 번호: ${numbers.join(', ')}`;
});

document.getElementById('draw2').addEventListener('click', function() {
    const number = generateLotteryNumber();
    document.getElementById('result').innerText = `추첨 번호: ${number}`;
});

function generateUniqueNumbers(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
        const num = getRandomInt(min, max);
        numbers.add(num);
    }
    return Array.from(numbers);
}

function generateLotteryNumber() {
    const group = getRandomInt(1, 5);
    const number = getRandomInt(0, 999999).toString().padStart(6, '0');
    return `${group}조 ${number}`;
}

function getRandomInt(min, max) {
    const range = max - min + 1;
    const randomBytes = new Uint32Array(1);
    window.crypto.getRandomValues(randomBytes);
    return min + (randomBytes[0] % range);
}
