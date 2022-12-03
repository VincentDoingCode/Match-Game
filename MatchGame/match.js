document.addEventListener('DOMContentLoaded', () => {

    //cards array
    const cardArray = [
        {
            name:'apples',
            img: 'images/apple.png'
        },
        {
            name:'apples',
            img: 'images/apple.png'
        },
        {
            name:'banana',
            img: 'images/banana.png'
        },
        {
            name:'banana',
            img: 'images/banana.png'
        },
        {
            name:'grape',
            img: 'images/grape.png'
        },
        {
            name:'grape',
            img: 'images/grape.png'
        },
        {
            name:'kiwi',
            img: 'images/kiwi.png'
        },
        {
            name:'kiwi',
            img: 'images/kiwi.png'
        },
        {
            name:'mango',
            img: 'images/mango.png'
        },
        {
            name:'mango',
            img: 'images/mango.png'
        },
        {
            name:'orange',
            img: 'images/orange.png'
        },
        {
            name:'orange',
            img: 'images/orange.png'
        },
        {
            name:'pear',
            img: 'images/pear.png'
        },
        {
            name:'pear',
            img: 'images/pear.png'
        },
        {
            name:'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name:'strawberry',
            img: 'images/strawberry.png'
        },
    ]

    const grid = document.querySelector('.gameGrid')
    const output = document.querySelector('#clicks')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = [];

    //creating board
    function createBoard(){
        for(let i =0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click', flipCard)
            output.textContent++;
            grid.appendChild(card)
        }
    }

    //check match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] == cardsChosen[2]){
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen);
        }
        else{
            cards[optionOneId].setAttribute('src','images/back.png')
            cards[optionTwoId].setAttribute('src','images/back.png')
        }
        cardsChosen =[]
        cardsChosenId=[]
    }


    //flip card
    function flipCard(){
        var cardId =this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId.name])
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
})
