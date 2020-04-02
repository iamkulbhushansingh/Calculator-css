const defValue=0;
let currentValue=defValue;

function add()
{
    const caldes=`${currentValue}+${userInput.value}`;
    currentValue=currentValue+ parseInt(userInput.value);
    outputResult(currentValue,caldes);
}
function sub()
{
    const caldes=`${currentValue}-${userInput.value}`;
    currentValue=currentValue - parseInt(userInput.value);
    outputResult(currentValue,caldes);
}
function mul()
{
    const caldes=`${currentValue}*${userInput.value}`;
    currentValue=currentValue * parseInt(userInput.value);
    outputResult(currentValue,caldes);
}
function div()
{
    const caldes=`${currentValue}/${userInput.value}`;
    currentValue=currentValue / parseInt(userInput.value);
    outputResult(currentValue,caldes);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);