document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cards = [
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'angel',
            img: 'emojis/angel.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'baby',
            img: 'emojis/baby.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'facepalm',
            img: 'emojis/facepalm.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'nice',
            img: 'emojis/nice.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'fiveHand',
            img: 'emojis/fiveHand.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'funCry',
            img: 'emojis/funCry.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'grinning',
            img: 'emojis/grinning.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hide',
            img: 'emojis/hide.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'hugLove',
            img: 'emojis/hugLove.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'love',
            img: 'emojis/love.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'perfect',
            img: 'emojis/perfect.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'poop',
            img: 'emojis/poop.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'lick',
            img: 'emojis/lick.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'smile',
            img: 'emojis/smile.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'style',
            img: 'emojis/style.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
        {
            name: 'thinking',
            img: 'emojis/thinking.png'
        },
    ];

    cards.sort(() => 0.5 - Math.random());

    // Get the modal
    const gameOverModal = document.getElementById("game-over-modal");

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    const gameStatus = document.getElementById("game-status");
    const livesElement = document.getElementById('lives');
    const lives2Element = document.getElementById('lives2');
    const timeCounter = document.getElementById("count-time-up");
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");

    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];

    let hasLostLife = false;

    //create your board
    function createBoard() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            for (let i = 0; i < cards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', 'emojis/blankBG.png');
                card.classList.add("m-2", "w-custom", "h-custom");
                card.setAttribute('data-id', i);
                card.addEventListener('click', flipCard);
                grid.appendChild(card);
            }
        } else {
            for (let i = 0; i < cards.length; i++) {
                const card = document.createElement('img');
                card.setAttribute('src', 'emojis/blankBG.png');
                card.classList.add("m-2", "w-custom", "h-custom");
                card.setAttribute('data-id', i);
                card.addEventListener('click', flipCard);
                grid.appendChild(card);
            }
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'emojis/blankBG.png');
            cards[optionTwoId].setAttribute('src', 'emojis/blankBG.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            gameStatus.innerHTML = 'You found a match!';

            cards[optionOneId].setAttribute('src', 'emojis/white.png');
            cards[optionTwoId].setAttribute('src', 'emojis/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);

            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'emojis/blankBG.png');
            cards[optionTwoId].setAttribute('src', 'emojis/blankBG.png');
            gameStatus.innerHTML = "No match!";

            hasLostLife = true;
            console.log();
            while (hasLostLife) {
                if (null != lives2Element.firstElementChild) {
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
        if (cardsWon.length === cards.length / 2) {
            gameStatus.innerHTML = 'Congratulations! You found them all!';
        }

        setTimeout(function () {
            gameStatus.innerHTML = "";
        }, 800);
    }

    //flip your card
    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 150);
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

    noButton.onclick = function () {
        window.location.reload();
    }

    createBoard();
})

