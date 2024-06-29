const inputEl=document.getElementById("input");
const errortEl=document.getElementById("error");
const resultEl=document.getElementById("result");

let errorTime;
let resultTime;

function updateResults(){

    if(inputEl.value <=0 || isNaN(inputEl.value)){
        
        errortEl.style.color="black";
        errortEl.style.fontSize="20px";
        errortEl.fontWeight="600";
        errortEl.innerText="please Enter a valid number";
        clearTimeout(errorTime);
        errorTime=setTimeout(() =>{
            errortEl.innerText="";
            inputEl.value="";
        },2000);
    }
    else{
        resultEl.innerText=(+inputEl.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime=setTimeout(()=>{
            resultEl.innerText="";
            inputEl.value="";
        },5000);
    }

}
inputEl.addEventListener("input",updateResults);