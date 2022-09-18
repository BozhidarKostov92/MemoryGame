document.addEventListener('DOMContentLoaded', () => {
    let cardArray = [
        {
            name: 'baby',
            img: '../emojis/baby.png'
        },
        {
            name: 'facepalm',
            img: '../emojis/facepalm.png'
        },
        {
            name: 'nice',
            img: '../emojis/nice.png'
        },
        {
            name: 'funCry',
            img: '../emojis/funCry.png'
        },
        {
            name: 'hugLove',
            img: '../emojis/hugLove.png'
        },
        {
            name: 'perfect',
            img: '../emojis/perfect.png'
        },
        {
            name: 'poop',
            img: '../emojis/poop.png'
        },
        {
            name: 'smile',
            img: '../emojis/smile.png'
        },
    ]

    let multiple;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        multiple = 2;
    } else {
        multiple = 1;
    }

    while (multiple < 16) {
        for (let i = 0; i < 8; i++) {
            cardArray.push(cardArray[i]);
        }

        multiple++;
    }

    cardArray.sort(() => 0.5 - Math.random());

    const gameOverModal = document.getElementById('game-over-modal');
    const yesButton = document.getElementById('yes');

    const livesImg = document.getElementById('lives');
    const lives2Img = document.getElementById('lives2');
    const lives3Img = document.getElementById('lives3');
    const livesElement = document.getElementById('lives');
    const lives2Element = document.getElementById('lives2');
    const lives3Element = document.getElementById('lives3');

    const grid = document.querySelector('.grid');

    const resultDisplay = document.querySelector('#result');
    const gameStatusNoMatch = document.getElementById('game-status-no-match');
    const gameStatusMatch = document.getElementById('game-status-match');
    const timeCounter = document.getElementById('count-time-up');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const modalContent = document.getElementById("modal-content");
        modalContent.setAttribute("style", 'width: 40% !important;');
        gameOverModal.setAttribute("style", 'padding-top: 150px !important;');
        grid.setAttribute("style", 'margin-top: 0px !important;margin-left: 90px !important;');

        document.getElementById('difficulty').innerHTML = "Medium";
    }
    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];

    let hasLostLife = false;

    function createLives() {
        for (let i = 1; i <= 15; i++) {
            const lives = document.createElement('img');
            lives.setAttribute('src', '../assets/images/life.png');
            lives.setAttribute('style', 'width: 5% !important;');
            lives.setAttribute('id', "life" + i);
            if (i <= 5) {
                livesImg.appendChild(lives);
            } else if (i > 5 && i <= 10) {
                lives2Img.appendChild(lives);
            } else if (i => 11) {
                lives3Img.appendChild(lives);
            }
        }
    }

    createLives();

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', '../assets/images/blankBG.png');
            card.classList.add("m-2", "w-custom", "h-custom");
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', '../assets/images/blankBG.png');
            cards[optionTwoId].setAttribute('src', '../assets/images/blankBG.png');
            if (null != lives3Element.firstElementChild) {
                lives3Element.removeChild(lives3Element.firstElementChild);
            } else if (null != lives2Element.firstElementChild) {
                lives2Element.removeChild(lives2Element.firstElementChild);
            } else {
                livesElement.removeChild(livesElement.firstElementChild);
            }
        } else if (cardsChosen[0] === cardsChosen[1]) {
            gameStatusMatch.innerHTML = 'You found a match!';

            cards[optionOneId].setAttribute('src', '../assets/images/white.png');
            cards[optionTwoId].setAttribute('src', '../assets/images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', '../assets/images/blankBG.png');
            cards[optionTwoId].setAttribute('src', '../assets/images/blankBG.png');
            gameStatusNoMatch.innerHTML = "No match!";

            hasLostLife = true;

            while (hasLostLife) {
                if (null != lives3Element.firstElementChild) {
                    lives3Element.removeChild(lives3Element.firstElementChild);
                } else if (null != lives2Element.firstElementChild) {
                    lives2Element.removeChild(lives2Element.firstElementChild);
                } else {
                    livesElement.removeChild(livesElement.firstElementChild);
                }
                hasLostLife = false;
            }
        }

        gameOver();

        cardsChosen = [];
        cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cardArray.length / 2) {
            setTimeout(function () {
                gameOverModal.style.display = "block";
                gameOverModal.firstElementChild.firstElementChild.innerHTML = "You won!";
            }, 100);
            clearInterval(timer);
        }

        setTimeout(function () {
            gameStatusNoMatch.innerHTML = "";
            gameStatusMatch.innerHTML = "";
        }, 800);
    }

    //flip your card
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300);
        }
    }

    let totalSeconds = 0;

    function countUpTimer() {
        ++totalSeconds;
        let minute = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds - (minute * 60);
        timeCounter.innerHTML = minute + ":" + seconds;
    }

    const timer = setInterval(countUpTimer, 1000);

    function gameOver() {
        if (livesElement.firstElementChild === null) {

            setTimeout(function () {
                gameOverModal.style.display = "block";
            }, 300);
            clearInterval(timer);
        }
    }

    yesButton.onclick = function () {
        window.location.reload();
    }

    createBoard();
})

