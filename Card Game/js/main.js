/*
 * 
 * [x] Write a function that deals cards into two separate piles for each player 
 * 
 * [ ] Rewrite function that plays a round to fetch cards from both player's piles, 
 *     compares them, then places the cards into the winner's discard pile
 * 
 * [ ] When a player runs out of cards, the cards from the discard pile get added back to their deck
 * 
 * 
 * 
 */

//check for a local deck id
if (!localStorage.getItem('deckId')) {
  fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          localStorage.setItem('deckId', data.deck_id)
        })
        .catch(err => {
            console.log(`error ${err}`)
  });
} else {
  console.log(`Deck ID exists: ${localStorage.getItem('deckId')}`)
}

document.querySelector('button[name="playRound"]').addEventListener('click', playRound)
document.querySelector('button[name="dealHands"]').addEventListener('click', dealHands)
document.querySelector('#shuffle').addEventListener('click', shuffleDeck)

//A function that deals cards into two separate piles for each player
function dealHands() {
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deckId')}/draw/?count=52`)
    .then(res=>res.json())
    .then(data => {
      //go through the deck object and alternate cards into two separate piles
      const player1 = [];
      const player2 = [];
      let count = 0;
      data.cards.map(x=> {
        if (count === 0) {
          player1.unshift(x.code)
          count = 1
          return
        } else if (count === 1) {
          player2.unshift(x.code)
          count = 0
          return
        }
      })
      fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/player1/add/?cards=${player1.join(',')}`)
      console.log('player 1: '+player1)
      fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/player2/add/?cards=${player2.join(',')}`)
      console.log('player 2: '+player2)
    })
}

function playRound() {
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/player1/list/`)
    .then(res=>res.json())
    .then(data => {
      console.log(data)
      if (data.remaining === 0) {
        document.querySelector('h3').innerText = 'No more cards, pls reshuffle!'
        return
      }
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
      let player1Val = Number(convertToNum(data.cards[0].value))
      let player2Val = Number(convertToNum(data.cards[1].value))
      if (player1Val>player2Val) {
        document.querySelector('h3').innerText = 'Player 1 wins!'
      } else if (player1Val<player2Val) {
        document.querySelector('h3').innerText = 'Player 2 wins!'
      } else if (player1Val===player2Val) {
        document.querySelector('h3').innerText = 'WAR!'
      }

    })
}

function shuffleDeck() {
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deckId')}/shuffle/`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  document.querySelector('h3').innerText = 'Deck Shuffled'
  document.querySelector('#player1').src = null
  document.querySelector('#player2').src = null
}

function convertToNum(val) {
  if(val==='ACE') {
    return 14
  }else if(val==='KING') {
    return 13
  }else if(val==='QUEEN') {
    return 12
  }else if(val==='JACK') {
    return 11
  }else {
    return val
  }
}