const startBtn = document.querySelector('.start-btn');
const startContainer = document.querySelector('.start');
const restartBtn = document.querySelector('.end-btn');
const gameOver = document.querySelector('.gameOver');

startBtn.addEventListener('click', function(){
        startBtn.classList.add('hidden');
        startContainer.classList.add('hidden')
});

restartBtn.addEventListener('click', function(){
        // restartBtn.classList.add('hidden');
        // gameOver.classList.add('hidden')
document.location.reload(true)
});

const animalCategory = ['cat', 'frog', 'chicken', 'turtle', 'crab', 'rabbit', 'shark', 'crocodile', 'giraffe', 'cow', 'horse', 'butterfly', 'bull', 'rhino', 'sheep', 'snake', 'panda'];
const homeCategory = ['bed', 'computer', 'mirror', 'bin', 'chair', 'door', 'picture', 'fireplace', 'stove', 'sofa', 'cupboard', 'books', 'cushion', 'rug', 'window', 'shelves', 'clock'];
const clothesCategory = ['suit', 'belt', 'pants', 'vest', 'gloves', 'dress', 'ring', 'skirt', 'earring', 'shirt', 'jacket', 'scarf', 'shorts', 'tie', 'socks', 'earphones'];
const foodCategory = ['chicken', 'hamburger', 'chocolate', 'noodles', 'apple', 'sandwich', 'peas', 'muffin', 'oranges', 'candy', 'ketchup', 'coconut', 'banana', 'fish', 'pie'];
const computerCategory = ['mouse', 'battery', 'calculator', 'socket', 'controller', 'monitor', 'printer', 'line', 'switch', 'laptop', 'keyboard', 'speakers', 'disc', 'tablet', 'phone', 'plug'];
const transportCategory = ['bke', 'car', 'scooter', 'rocket', 'bus', 'truck', 'ambulance', 'skateboard', 'plane', 'train', 'helicopter', 'escalator', 'tractor', 'motorbike', 'boat'];
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z', 'w'];
const hangman = ['src="img/mistake1.png"', 'src="img/mistake2.png"', 'src="img/mistake3.png"', 'src="img/mistake4.png"', 'src="img/mistake5.png"', 'src="img/mistake6.png"', 'src="img/mistake7.png"', 'src="img/mistake8.png"', 'src="img/mistake9.png"', 'src="img/mistake10.png"'];
const btnText = [];

const animalBtn = document.querySelector('.word-btn1');
const homeBtn = document.querySelector('.word-btn2');
const clothesBtn = document.querySelector('.word-btn3');
const foodBtn = document.querySelector('.word-btn4');
const computerBtn = document.querySelector('.word-btn5');
const transportBtn = document.querySelector('.word-btn6');
const heading = document.querySelector('h2');
const letter = document.querySelector('.letter');
const alphabet = document.querySelector('.alphabet');
const vowelsInput = document.querySelector('.letter-vowel')
const consonantInput = document.querySelector('.letter-consonant')
const btnEl = document.getElementsByClassName('letters');
const textBox = document.getElementsByClassName('text-box');
const hangmanPicture = document.querySelector('.hangman');
const answer = document.querySelector('.answer');
let found = true;
let mistakes=0;


animalBtn.addEventListener('click', () => categorySelection(animalCategory));
homeBtn.addEventListener('click', () => categorySelection(homeCategory));
clothesBtn.addEventListener('click', () => categorySelection(clothesCategory));
foodBtn.addEventListener('click', () => categorySelection(foodCategory));
computerBtn.addEventListener('click', () => categorySelection(computerCategory));
transportBtn.addEventListener('click', () => categorySelection(transportCategory));


function categorySelection(arr){
        animalBtn.classList.add('hidden');
        homeBtn.classList.add('hidden');
        clothesBtn.classList.add('hidden');
        foodBtn.classList.add('hidden');
        computerBtn.classList.add('hidden');
        transportBtn.classList.add('hidden');
        heading.classList.add('hidden');
        alphabet.classList.remove('alphabet-hidden')

        const word = arr[Math.floor((Math.random())*arr.length)];
        const arrWord = word.split('')
        console.log(arrWord)
        
        for(let i = 0; i < arrWord.length; i++){
                letter.innerHTML +=  `<div class="text-box" wordLetter-value='${arrWord[i]}'>${arrWord[i]}</div>`
                btnText.push(arrWord[i]);
        }
};

vowels.forEach((letter) => vowelsInput.innerHTML +=  `<button class="vowels letters" letter-value='${letter}'>${letter}</button>`);
consonants.forEach((letter) => consonantInput.innerHTML +=  `<button class="consonant letters" letter-value='${letter}'>${letter}</button>`);


for (const b of btnEl) {
        b.addEventListener('click', revealWord, false);
        b.addEventListener('click', hideLetter, false);
        b.addEventListener('click', win, false);
};


function hideLetter(e) {
        e.currentTarget.style.visibility = 'hidden';
};


function revealWord (e){
        const dataLetter = e.currentTarget.getAttribute('letter-value')
        found = btnText.some(l => dataLetter.includes(l));
        for(const l of textBox){
                for (let i = 0; i < btnText.length; i++) {
                        if(found == true && btnText[i] == dataLetter ){
                                if(btnText[i] == l.textContent){
                                l.classList.add('reveal')
                }}
        else if (found == false && mistakes < 9) {
        hangmanPicture.innerHTML = `<img ${hangman[mistakes]} alt="mistake10-01">`  
        mistakes += 1;
        return mistakes;
        } else if(mistakes >= 9){
                gameOver.style.visibility = 'visible';
                hangmanPicture.style.visibility = 'hidden';
                letter.style.visibility = 'hidden';
                vowelsInput.style.visibility = 'hidden';
                consonantInput.style.visibility = 'hidden';
                answer.textContent = `The answer was: ${btnText.join('')}`;
} 
}} 
}

const revealEl = document.getElementsByClassName('reveal')

function win(){
        if (revealEl.length == btnText.length){
        gameOver.style.visibility = 'visible';
        gameOver.style.backgroundImage = "url('img/youWin.jpg')";
        hangmanPicture.style.visibility = 'hidden';
        letter.style.visibility = 'hidden';
        vowelsInput.style.visibility = 'hidden';
        consonantInput.style.visibility = 'hidden';
        answer.style.visibility = 'hidden';
}
}




