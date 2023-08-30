let numbers = [1,2,3,4,5,6,7,8,9];
let turn = 2 ;
let player1 = [];
let player2 = [];
let turns = ["",localStorage.getItem('First_player'),localStorage.getItem('Second_player')]
let new_value = localStorage.getItem('Fscore')
let new_value2 = localStorage.getItem('Sscore')
if(!new_value){
    localStorage.setItem('Fscore',0);
}

if(document.querySelector('.footer').textContent == ''){
    document.querySelector('.footer').innerHTML = `${turns[turn-1]}'s turn`
}

if(!new_value2){
    localStorage.setItem('Sscore',0);
}
document.querySelector("h3").textContent = `${localStorage.getItem('First_player')} : ${localStorage.getItem('Fscore')} -- vs --   ${localStorage.getItem('Sscore')} : ${localStorage.getItem('Second_player')}`;

const printScore = () =>{
    document.querySelector("h3").textContent = `${localStorage.getItem('First_player')} : ${localStorage.getItem('Fscore')} -- vs --   ${localStorage.getItem('Sscore')} : ${localStorage.getItem('Second_player')}`;
}


let reduce = (number) =>{
    var index = numbers.indexOf(number);
    if(index > -1){
        numbers.splice(index,1);
    }
}

let changer = (number,id) => {
    if(numbers.includes(number)) {
        if(turn == 1){
            document.querySelector(`#${id}`).style.fontsize = "x-large";
            document.querySelector(`#${id}`).textContent = 'O'
            document.querySelector(`#${id}`).style.fontsize = "x-large";
        }

        else{
            document.querySelector(`#${id}`).style.fontsize = 40;
            document.querySelector(`#${id}`).textContent = "X"
            document.querySelector(`#${id}`).style.fontsize = 40;
        }
    }
}


function turn_changer(number){

    if(numbers.includes(number)){
        document.querySelector('.footer').innerHTML = `${turns[turn]}'s turn`
        turn = (turn == 1) ? 2 : 1;
    }

}

function append(number){
    if(turn == 1){
        player1.push(number);
        return player1
    }
    else if(turn ==2){
        player2.push(number)
        return player2
    }
}

function colorchanger(first,second,third){
    document.querySelector(`#${first}`).style.backgroundColor = '#99ccff';
    document.querySelector(`#${second}`).style.backgroundColor = '#99ccff';
    document.querySelector(`#${third}`).style.backgroundColor = '#99ccff';
}

function reset_numbers(){
    numbers = [1,2,3,4,5,6,7,8,9]
    return numbers
}
function reset_turn(){
    turn = 2
    return turn
}
function reset_player1(){
    player1 = []
    return player1
}
function reset_player2(){
    player2 = []
    return player2
}

function color_reseter(){
    document.querySelector(`#one`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#two`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#three`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#four`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#five`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#six`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#seven`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#eight`).style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector(`#nine`).style.backgroundColor = 'rgba(0,0,0,0)';

}
function reseter(){
    reset_player1()
    reset_numbers()
    reset_player2()
    reset_turn()
    document.querySelector(`#one`).textContent = '.';
    document.querySelector(`#two`).textContent = '.';
    document.querySelector(`#three`).textContent = '.';
    document.querySelector(`#four`).textContent = '.';
    document.querySelector(`#five`).textContent = '.';
    document.querySelector(`#six`).textContent = '.';
    document.querySelector(`#seven`).textContent = '.';
    document.querySelector(`#eight`).textContent = '.';
    document.querySelector(`#nine`).textContent = '.';
    color_reseter()
    return;
}



function turn_changer_indicator(){
    document.querySelector('.footer').innerHTML = `${turns[turn-1]}'s turn`;
}
function check(){
    if(player1.includes(1) && player1.includes(2) && player1.includes(3)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('one','two','three')
        reset_player2()
        reset_player1()
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        return printScore();



    }
    if(player1.includes(4) && player1.includes(5) && player1.includes(6)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('four','five','six');
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player1.includes(7) && player1.includes(8) && player1.includes(9)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('seven','eight','nine')
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();

    }
    if(player1.includes(1) && player1.includes(4) && player1.includes(7)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('one','four','seven')
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player1.includes(2) && player1.includes(5) && player1.includes(8)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('two','five','eight')
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player1.includes(3) && player1.includes(6) && player1.includes(9)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('three','six','nine')
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player1.includes(1) && player1.includes(5) && player1.includes(9)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('one','five','nine')
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player1.includes(3) && player1.includes(5) && player1.includes(7)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('First_player')} Wins`
        colorchanger('three','five','seven')
        let new_value = localStorage.getItem('Fscore')
        localStorage.setItem('Fscore',parseInt(new_value)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(1) && player2.includes(2) && player2.includes(3)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('one','two','three')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(4) && player2.includes(5) && player2.includes(6)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('four','five','six')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(7) && player2.includes(8) && player2.includes(9)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('seven','eight','nine')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(1) && player2.includes(4) && player2.includes(7)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('one','four','seven')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        return printScore();
        reset_player2()
        reset_player1()
    }
    if(player2.includes(2) && player2.includes(5) && player2.includes(8)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('two','five','eight')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(3) && player2.includes(6) && player2.includes(9)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('three','six','nine')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(1) && player2.includes(5) && player2.includes(9)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('one','five','nine')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        reset_player2()
        reset_player1()
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
    if(player2.includes(3) && player2.includes(5) && player2.includes(7)){
        document.querySelector('.footer').textContent = `${localStorage.getItem('Second_player')} Wins`
        colorchanger('three','five','seven')
        let new_value2 = localStorage.getItem('Sscore')
        localStorage.setItem('Sscore',parseInt(new_value2)+1)
        setTimeout(() => reseter(),2000)
        setTimeout(()=>turn_changer_indicator(),2000);
        reset_player2()
        reset_player1()
        return printScore();
    }
}

const reset = () => {
    localStorage.setItem('Fscore',0);
    localStorage.setItem('Sscore',0);
    return printScore();
}
function check_reseter(){
    if(numbers.length == 0){
       setTimeout(()=>reseter(),2000);
    }
}
const reset_game = () => {
    localStorage.setItem('Fscore',0);
    localStorage.setItem('Sscore',0);
    window.location.href = "name_.html"
}

function freeze(secs) {
    var waituntil = performance.now() + secs*1000;
    while(performance.now() < waituntil);
}