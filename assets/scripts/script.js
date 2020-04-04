const defValue=0;
let currentValue=defValue;

function calDess(Cv,opr,UsIn)
{
const caldes=`${Cv} ${opr} ${UsIn}`;
outputResult(currentValue,caldes);
}

function add()
{
    const init=currentValue;
    currentValue=currentValue + parseInt(userInput.value);
    calDess(init,'+',userInput.value);
}
function sub()
{
    const init=currentValue;
    currentValue=currentValue - parseInt(userInput.value);
    calDess(init,'-',userInput.value);
}
function mul()
{
    const init=currentValue;
    currentValue=currentValue * parseInt(userInput.value);
    calDess(init,'*',userInput.value);
}
function div()
{
    const init=currentValue;
    currentValue=currentValue / parseInt(userInput.value);
    calDess(init,'/',userInput.value);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);