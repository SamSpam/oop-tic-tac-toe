'use strict'
console.log('here')
class Square {
  constructor (state) {
    if (state === 'x' || state === 'o') {
      this.state = state
      console.log(this.state)
    }
  }

  getMark () {
    return this.state
  }

  makeMark (mark) {
    if (!this.state && (mark === 'x' || mark === 'o')) {
      this.state = mark
      return true
    }
    return false
  }
  render () {
    let div = document.createElement('div')
    let marked = !!this.state

    div.className = marked ? `player-${this.state}` : 'empty'
    div.innerText = marked ? this.state : ''

    return div
  }
}

class board {
  constructor () {
    this.squares = new Array(9).fill(null).map(()=> {
      return new Square()
    })
  }
  render () {
    let div = document.createElement('div')

    div.id = 'board'
    div.className = 'board'

    this.squares.map((s) => div.appendChild(s.render()))

    return div
  }
}

let board = new Board()

console.log("board", board.render())

class App {
  constructor (board) {
    this.booard = board
  }

  newGame () {}
  this.board = new Board()

  document.body.appendChild(this.board.render())
}
