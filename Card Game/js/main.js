/*
 * *** THE AGE OLD GAME OF WAR ***
 * 
 * [x] Write a function that deals cards into two separate piles for each player 
 * 
 * [ ] Rewrite function that plays a round to fetch cards from both player's piles, 
 *     compares them, then places the cards into the winner's discard pile
 * 
 * [ ] When a player runs out of cards, the cards from the discard pile get added back to their deck
 * 
 *** ISSUES ***
 * [ ] Card comparison isn't working - right now every round ends in WAR!
 * 
 */

//check for a local deck id
function deckCheck() {
  if (!localStorage.getItem('deckId')) {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('deckId', data.deck_id)
          })
          .catch(err => {
              console.log(`error ${err}`)
    });
  } else {
    console.log(`Deck ID exists: ${localStorage.getItem('deckId')}`)
  }
}
deckCheck()
document.querySelector('button[name="playRound"]').addEventListener('click', playRound)
document.querySelector('button[name="dealHands"]').addEventListener('click', dealHands)
document.querySelector('#shuffle').addEventListener('click', shuffleDeck)

//A function that deals cards into two separate piles for each player
// CONFIRMED WORKING
function dealHands() {
  deckCheck()
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
      //sanity check
/*       console.log('player 1 local: '+player1.join(','))
      console.log('player 2 local: '+player2.join(',')) */
      //add player 1's pile to the API deck
      fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/A/add/?cards=${player1}`)
/*       .then(res=>res.json())
      .then(data=>console.log(data)) */
      //same for player 2
      .then(fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/B/add/?cards=${player2}`))
/*       .then(res=>res.json())
      .then(data=>console.log(data)) */
/*       fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/player1/list/`)
        .then(res=>res.json())
        .then(data=>console.log(data))
      fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/player2/list/`)
        .then(res=>res.json())
        .then(data=>console.log(data)) */
    })
}

// CONFIRMED WORKING
function shuffleDeck() {
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.getItem('deckId')}/shuffle/`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  document.querySelector('h3').innerText = 'Deck Shuffled'
  document.querySelector('#player1').src = null
  document.querySelector('#player2').src = null
}
// CONFIRMED WORKING
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
function compareCards(player1Val, player2Val) {
  if (player1Val>player2Val) {
    return 'Player 1 wins!'
  } else if (player1Val<player2Val) {
    return 'Player 2 wins!'
  } else if (player1Val===player2Val) {
    return 'WAR!'
  }
}

function playRound() {
  let player1Val;
  let player2Val;
  fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/A/draw/?count=1`)
    .then(res=>res.json())
    .then(data => {
      console.log('player 1 card: \n'+data.cards[0].value)
      if (data.remaining === 0) {
        document.querySelector('h3').innerText = 'No more cards, pls reshuffle!'
        return
      }
      document.querySelector('#player1').src = data.cards[0].image
      player1Val = convertToNum(data.cards[0].value);
      console.log('player 1 card: \n'+player1Val)
    })
/*   fetch(`https://deckofcardsapi.com/api/deck/${localStorage.deckId}/pile/B/draw/?count=1`)
    .then(res=>res.json())
    .then(data => {
      console.log(data)
      if (data.remaining === 0) {
        document.querySelector('h3').innerText = 'No more cards, pls reshuffle!'
        return
      }
      document.querySelector('#player2').src = data.cards[0].image
      player2Val = Number(convertToNum(data.cards[0].value))
    })
    console.log('player 1: '+player1Val+' --- Player 2: '+player2Val)
    let result = compareCards(player1Val, player2Val);
    document.querySelector('h3').innerText = result; */
}