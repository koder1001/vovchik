let step = "";
let spanWho = document.getElementById('spanWho')
let winner = ""

const who =()=>{
    if (step == 'circle'){
        step = 'krest';
        spanWho.innerText = 'Старый бог'
   document.getElementById('spanWho').style.cssText = "  color:red;";
    } else {
        step = 'circle'
        spanWho.innerText = 'Вовчик'
        document.getElementById('spanWho').style.cssText = "   color: rgb(48, 67, 243);";
    }
}

who()

let blockItem = document.querySelectorAll('.blockItem')
let counter = 0;

blockItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(!item.classList.contains('circle') && !item.classList.contains('krest')){
            item.classList.add(step)

        counter++;
        who()
        circleWin()
        krestWin()
        noWin()

        }
        
    })
})

let win = 
[
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

let circleWin = ()=>{
    for(let i =0; i<win.length; i++){
        if(
        blockItem[win[i][0]].classList.contains('circle') &&
        blockItem[win[i][1]].classList.contains('circle') &&
        blockItem[win[i][2]].classList.contains('circle')
        ){
            blockItem[win[i][0]].classList.add('win')
            blockItem[win[i][1]].classList.add('win')
            blockItem[win[i][2]].classList.add('win')
            winner = "Вовчик"
            spanWho.innerText = 'Кому не похуй';
            endGame(winner)
            return 1
        }
    }
}

let krestWin = ()=>{
    for(let i =0; i<win.length; i++){
        if(
        blockItem[win[i][0]].classList.contains('krest') &&
        blockItem[win[i][1]].classList.contains('krest') &&
        blockItem[win[i][2]].classList.contains('krest')
        ){
            blockItem[win[i][0]].classList.add('win')
            blockItem[win[i][1]].classList.add('win')
            blockItem[win[i][2]].classList.add('win')
            winner = "Старый бог"
            document.getElementById('spanWin').style.cssText = "  color:red;";
            spanWho.innerText = 'Кому не похуй';
            endGame(winner)
            return 1
        }
    }
}

let noWin = () =>{
    if (!krestWin() && !circleWin() && (counter >=9)){
        winner = "Ничья"
        endGame(winner)
    }
}

let blockWinner = document.getElementById('blockWinner')
let spanWin = document.getElementById('spanWin')
let btnNewGame = document.getElementById('btnNewGame')

let blockArea = document.getElementById('blockArea')

let endGame = (winner)=>{
    blockArea.style.pointerEvents = 'none';
    blockWinner.style.display = 'flex'
    spanWin.innerText = winner
}

btnNewGame.addEventListener('click',()=>{
    document.location.reload()
})