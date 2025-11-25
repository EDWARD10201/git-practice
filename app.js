const addTodo = document.getElementById("addTodo");
const input = document.getElementById("input");
const result = document.getElementById("result");


addTodo.addEventListener("click",() => {
    const li = document.createElement("li");
    li.textContent = input.value;
    result.appendChild(li);
    


});