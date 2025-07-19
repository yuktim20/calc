const display=document.getElementById('display')
function appendValue(value){
    display.value+=value
}
function clrDisplay(){
    display.value=''
}
function calResult(){
    display.value=eval(display.value)
}