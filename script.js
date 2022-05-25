let input = document.getElementById("input");
let container = document.getElementById("toDoContainer");
let btnAdd = document.getElementById("buttonAdd");
let btnDel = document.getElementById("buttonDel");

btnAdd.addEventListener('click', function(){
    // creador de item
    var text = document.createElement('p');
    var selectedText = document.createElement('p');
    text.innerText = input.value;
    container.appendChild(text);
    input.value = '';

    // seleccionador de item
    text.addEventListener('click', function(){
        selectedText.innerText = text.innerText;
        text.remove();
        container.appendChild(selectedText);
        selectedText.style.border = "thin solid #000000";
    })

    // borrador de item
    btnDel.addEventListener('click', function(){
        selectedText.style.border = "thick solid #ffffff";
        selectedText.remove();
    })
})