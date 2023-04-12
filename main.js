// function btnclick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = "Ку-ку! А я <b>жирный!</b>";
// }
// function btnclick(){
//     let elem = document.getElementById('elem');
//     elem.outerHTML = '<h3>Абзац превратился в h3!</h3>';
// }
// function btnclick(){
//     let elem = document.getElementById('elem');
//     elem.innerHTML = '<b>При нажатии на кнопку абзац станет h3, но текст останется</b>';
// }
// Задача4
// let elem = document.getElementById('form1');
// elem.setAttribute('value', '2');
// console.log(elem.value);
// let elem1 = document.getElementById('form2');
// elem1.setAttribute('value', '4');
// console.log(elem1.value);
//     function btnclick(){
//         let result = document.getElementById('result');
//         result.innerHTML = '6';
//     }
// Задача5
function btnclick(){
    let elems = document.querySelectorAll('.txt');
    for(let i = 0; i<elems.length; i++){
    elems[i].innerHTML = i;
}
}