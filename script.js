const testbutton = document.querySelector("#testbutton");
let output = testbutton.textContent;
testbutton.addEventListener("click", () => {
    console.log(output);
    alert(output);
    });