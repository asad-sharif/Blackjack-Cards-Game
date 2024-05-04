//grabbing DOM nodes
const newDeckButton = document.getElementById('new-deck-btn')
const drawButton = document.getElementById('draw-btn')

let deckID

newDeckButton.addEventListener('click', () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            deckID = data.deck_id
            console.log(deckID);
            drawButton.disabled = false
            newDeckButton.disabled = true
        })
})

drawButton.addEventListener('click', () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.cards);

            document.getElementById('cards').innerHTML = `
                <img src=${data.cards[0].image} class="card" />
                <img src=${data.cards[1].image} class="card" />`

            // let cardImg = data.Image
            // console.log(cardImg);
        })
})

