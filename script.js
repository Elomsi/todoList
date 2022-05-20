function deleteCase(thisCase) {
    thisCase.parentNode.parentNode.removeChild(thisCase.parentNode);
}
function clearCase(thisCase) {
    thisCase.parentNode.setAttribute ("data-clear","cleared");
    thisCase.nextSibling.setAttribute("style", "text-decoration:line-through");
}
document.getElementById("submit").addEventListener("click", function (key, value){
    let input = document.querySelector("#newCases");
    let list = document.querySelector("#allCases");
    if(input.value!==""){
        const div = document.createElement('div');
        div.className = "list";
        div.innerHTML = "<a onclick='clearCase(this);' class='success'>✓</a><div class='label'>"+input.value+"</div><a onclick='deleteCase(this);' class='deny'>✕</a>";
        list.append(div);
        input.value = "";
//localStorage.setItem('todo', list);
    }
    else {
        alert('Заполните поле!');
        return false;
    }
});


function clear1() {
    var listOf = document.getElementsByClassName('list');
    for(var i=0;i<listOf.length;i++){
        if(listOf[i].getAttribute ("data-clear")!="cleared"){
            listOf[i].style.display = "none";
        }else{
            listOf[i].style.display = "flex";
        }
    }
}
function clear2() {
    var listOf = document.getElementsByClassName('list');
    for(var i=0;i<listOf.length;i++){
        if(listOf[i].getAttribute ("data-clear")=="cleared"){
            listOf[i].style.display = "none";
        }else{
            listOf[i].style.display = "flex";
        }
    }
}
function clear3() {
    var listOf = document.getElementsByClassName('list');
    for(var i=0;i<listOf.length;i++){
        listOf[i].style.display = "flex";
    }
}