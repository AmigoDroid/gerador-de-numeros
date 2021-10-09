let gerar = document.getElementById("gerar");
let divnum = document.getElementById('div-num')
let numSave=[];




gerar.addEventListener('click',()=>{
    start();
})






function start(){
for(let i=0; i<1;i++){
    let alt = ramdon();
    let nm =""+alt
   // console.table(numSave);
if(testar(alt)){
    break;
}else{
    if(nm.length==1){
        numSave.push(alt);
        divnum.innerHTML+=`<button id='bt-num'>${'0'+alt}</button>`
    }else{
    numSave.push(alt);
    divnum.innerHTML+=`<button id='bt-num'>${alt}</button>`
}}
}

}

function ramdon(){
    let aleatorio = Math.floor(Math.random(10)*75);
    return aleatorio+1;
}
function testar(ref){
    let nn = ref;

for(let a =0; a <numSave.length-1;a++){
    if (nn === numSave[a]) {
        restart();
        return true;
    }else{
        if(a>numSave.length-1){
            return false;
        }
    }
}
function restart(){
    if(numSave.length<75){
        start();
    }else{
        alert('todos os 75 numeros foram sorteados');
        //nada
    }
}
}