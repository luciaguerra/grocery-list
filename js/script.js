const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allItems.innerHTML = " ";
});

userInput.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        addItem();
    }
})

function addItem() {
    let listElement = document.createElement("li");
    listElement.innerHTML = userInput.value;

    listElement.addEventListener("click", () => listElement.style.textDecoration = "line-through");

    allItems.insertAdjacentElement("beforeend", listElement);

    userInput.value = " ";
}