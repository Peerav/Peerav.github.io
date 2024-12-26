let round=0;

let table=[[2,3,4],[5,6,7],[8,9,10]];

const turn=document.querySelector("#turn");
const popup=document.querySelector("#popup");

function press(index){
    const button=document.querySelector(`#btn-${index}`)
    row=Math.floor(index/3);
    col=index%3;
    if(button.innerHTML!="") return;
    let content="";
    if(round%2===1){
        content="X";
        table[row][col]=0;
        turn.innerHTML="O turn";
    }
    else {
        table[row][col]=1;
        content="O";
        turn.innerHTML="X turn";
    }
    button.innerHTML=content;
    console.log(table);
    if (check()){
        popup.innerHTML=content+" takes the win!";
        popup.style.display="flex";
        round=0;
        return;
    }
    if(round==8){
        console.log("draw");
        popup.innerHTML="It's a tie!";
        popup.style.display="flex";
        return;
    }
    round++;
}
function clear(){
    console.log("clearing");
    for(let i=0;i<9;i++){
        let button=document.querySelector(`#btn-${i}`);
        button.innerHTML="";
    }
    turn.innerHTML="O turn";
    popup.style.display="none";
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            table[i][j]=(i*2)+j+2;
        }
    }
    round=0;
}
popup.addEventListener("click",clear);

function check(){
    for(let i=0;i<3;i++){
        if(table[i][0]==table[i][2]&&table[i][1]==table[i][2]) return true;
        if(table[0][i]==table[1][i]&&table[1][i]==table[2][i]) return true;
    }
    if(table[0][0]==table[1][1]&&table[1][1]==table[2][2]) return true;
    if(table[2][0]==table[1][1]&&table[1][1]==table[0][2]) return true;
    return false;
}