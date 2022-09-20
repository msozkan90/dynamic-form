//?Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");
const field_type = document.getElementById("field_type");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") {
    alert("Bir deger giriniz...");
  } else {
    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      text: todoInput.value,
      type: field_type.value,
    };

    //! yeni bir li elementi olusturup bunu DOM'a bas
    createListElement(newTodo);

    todoInput.value = "";
  }
});

function createListElement(newTodo) {
  const { id, text } = newTodo; //! destr.

  //? yeni bir li elementi olustur ve bu elemente obje icerisindeki
  //? id degerini ve completed class'ini ata
  const li = document.createElement("li");

  //? todo basligi icin bir p elementi ve yazi dugumu olusturarak li'ye bagla
  const input = document.createElement("input");
  const label = document.createElement("label");

  if (field_type.value === "select") {
    const select = document.createElement("select");
    const option = document.createElement("option");
    li.appendChild(label);
    label.innerText = todoInput.value;
    li.appendChild(select);
    select.setAttribute("class", "form-control");
    select.appendChild(option);
    option.innerText = "---------";
  } else if (field_type.value === "text") {
    input.setAttribute("type", field_type.value);
    li.appendChild(label);
    label.innerText = todoInput.value;
    li.appendChild(input);
    input.setAttribute("class", "form-control");
  } else if (field_type.value === "date") {
    input.setAttribute("type", field_type.value);
    li.appendChild(label);
    label.innerText = todoInput.value;
    li.appendChild(input);
    input.setAttribute("class", "form-control");
  } else if (field_type.value === "file") {
    input.setAttribute("type", field_type.value);
    li.appendChild(label);
    label.innerText = todoInput.value;
    li.appendChild(input);
    input.setAttribute("class", "form-control");
  }

  //? delete ikonu olustur ve li elementine bagla
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-trash");
  li.appendChild(deleteIcon);

  todoUl.appendChild(li);
}

todoUl.addEventListener("click", (e) => {
  const id = e.target.parentElement.getAttribute("id");
  //! event, bir delete butonundan  geldi ise
  if (e.target.classList.contains("fa-trash")) {
    //? delete butonunun parent'ini DOM'dan sil
    e.target.parentElement.remove();
  }
});

todoInput.addEventListener("keydown", (e) => {
  if ((e.code === "NumpadEnter") || (e.code === "Enter")) {
    addBtn.click();
  }
});

window.onload = function () {
  todoInput.focus();
};
