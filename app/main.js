'use strict'

class Square {
  constructor (state) {
    if (state === 'x' || state === 'o') {
      this.state = state
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

class Board {
  constructor () {
    this.squares = new Array(9).fill(null).map(()=> {
      return new Square()
    })
  }
  render (root) {
    let div = document.createElement('div')

    div.id = 'board'
    div.className = 'board'
    this.squares.map((s) => root.appendChild(s.render()))
  }
}

let board = new Board()

class App {
  constructor (board) {

    console.log('root', document.querySelector('#root'))
    this.root = document.querySelector('#root')
    console.log('thisroot', this.root)
    this.board = new Board()
    this.board.render(this.root)

  }
  newGame () {
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let app = new App()
})
