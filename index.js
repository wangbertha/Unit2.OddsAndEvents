// #region STATE
let numberBank = [];
let oddBank = [];
let evenBank = [];

function addNumberBank(num) {
    numberBank.push(num);
}

function sortOne() {
    if (numberBank.length === 0) {
        return;
    }

    const one = numberBank.shift();
    if (one % 2 === 1) {
        oddBank.push(one);
    }
    else {
        evenBank.push(one);
    }
}

// #region RENDER
function renderNumberBank() {
    const $numberBankNumbers = numberBank.map((number) => {
        const $number = document.createElement('span');
        $number.textContent = number + ' ';
        return $number;
    });
    
    const $numberBank = document.querySelector('#numberBank');
    const $output = $numberBank.querySelector('output');
    $output.replaceChildren(...$numberBankNumbers);
}

function renderOddBank() {
    const $oddBankNumbers = oddBank.map((number) => {
        const $number = document.createElement('span');
        $number.textContent = number + ' ';
        return $number;
    });
    
    const $oddBank = document.querySelector('#odds');
    const $output = $oddBank.querySelector('output');
    $output.replaceChildren(...$oddBankNumbers);
}

function renderEvenBank() {
    const $evenBankNumbers = evenBank.map((number) => {
        const $number = document.createElement('span');
        $number.textContent = number + ' ';
        return $number;
    });
    
    const $evenBank = document.querySelector('#evens');
    const $output = $evenBank.querySelector('output');
    $output.replaceChildren(...$evenBankNumbers);
}

// #region SCRIPT

// Add interactivity to form
const $form = document.querySelector('form');
$form.addEventListener('submit', (e) => {
    e.preventDefault();

    const $numInput = document.querySelector('#number');
    const newNum = parseInt($numInput.value);
    if (newNum === 0 || newNum) {
        addNumberBank(newNum);
        renderNumberBank();
    }
})

// Add interactivity for Sort 1
const $sortOne = document.querySelector('#sortOne');
$sortOne.addEventListener('click', () => {
    sortOne();
    renderNumberBank()
    renderOddBank();
    renderEvenBank();
})

// Add interactivity for Sort All
const $sortAll = document.querySelector('#sortAll');
$sortAll.addEventListener('click', () => {
    while (numberBank.length > 0) {
        sortOne();
    }
    renderNumberBank()
    renderOddBank();
    renderEvenBank();
})
