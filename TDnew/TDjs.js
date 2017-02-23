var input = document.getElementById("input");
var button = document.getElementById("button");
button.addEventListener("click",addinput);
input.addEventListener("keyup",
    function (e) {
    if (e.keyCode==13){addinput()}
});

var list = {
    todo: document.getElementById("todo"),
    done: document.getElementById("done")
};

function addinput() {
    var element = document.createElement("li");
    element.setAttribute("contenteditable", "true");
    var checkbox = document.createElement("input");
    checkbox.addEventListener('click', donefunction);
    checkbox.setAttribute('type', 'checkbox');
    var text = document.createElement("span");
    text.innerHTML = input.value;
    var del = document.createElement('input');
    del.type = "button";
    del.value = "Del";
    del.id = "Del";
    del.addEventListener("click",delfunction);
    element.appendChild(checkbox);
    element.appendChild(text);
    element.appendChild(del);
    if (input.value) {
        list.todo.appendChild(element);
    }
    input.value = "";
    input.focus();


    function donefunction() {
        if(checkbox.value==="on"){
            list.done.appendChild(element);
            checkbox.value='off';
                }
            else {list.todo.appendChild(element);
            checkbox.value='on';
                }
    }

    function delfunction() {
        this.parentElement.remove();
    }
}

var clean = document.getElementById("clean");
clean.addEventListener('click', cleanfunction);
function cleanfunction() {
    list.todo = "";
    list.done = "";
}
