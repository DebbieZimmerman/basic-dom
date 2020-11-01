console.log(document)
// const playingField = document.getElementById("playing-field")
// console.log(playingField.innerHTML)
// const down = document.getElementById("down")
// console.log(down.innerHTML)
// const ball = document.getElementById("block")
// console.log(ball)
// ball.style.backgroundColor = "yellow"
const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    if (left < 400) {
      left += 15
      block.style.left = left + "px"
    } 
}
const moveLeft = function() {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    if (!left == 0) {
    left -= 15
    block.style.left = left + "px"
    }
}
const moveDown = function() {
    const block = document.getElementById("block")
    let down = parseInt(block.style.top) || 0
    if (down < 360) {
      down += 15
      block.style.top = down + "px"
    }
}
const moveUp = function() {
    const block = document.getElementById("block")
    let down = parseInt(block.style.top) || 0
    if (!down == 0) {
      down -= 15
      block.style.top = down + "px"
    }
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Brought to you by Debbie"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

//Question - how do I get this to take up space independent of my container?

// const clickColor = function () {
//     block = document.getElementById("block")
//     block.style.backgroundColor = "#8e44ad"
// }

