const form = document.querySelector("#myForm");
const boxes1 = document.querySelector("#inputBoxes1");
const boxes2 = document.querySelector("#inputBoxes2");
const resultBoxes = document.querySelector("#resultBoxes");
const button = document.querySelector("#inputButton");
const operationSelect = document.querySelector("#operation");

let lengthOfMatrix;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    lengthOfMatrix = Number(event.target.children[0].value);

    boxes1.innerHTML = "";
    boxes2.innerHTML = "";
    resultBoxes.innerHTML = "";

    for (let i = 0; i < lengthOfMatrix; i++) {
        for (let j = 0; j < lengthOfMatrix; j++) {
            boxes1.innerHTML += `<input type="number" id="divInput1${i}${j}" value="0">`;
            boxes2.innerHTML += `<input type="number" id="divInput2${i}${j}" value="0">`;
            resultBoxes.innerHTML += `<input type="number" id="resultInput${i}${j}" disabled>`;
        }
        boxes1.innerHTML += '<br>';
        boxes2.innerHTML += '<br>';
        resultBoxes.innerHTML += '<br>';
    }
});

button.addEventListener("click", () => {
    for (let i = 0; i < lengthOfMatrix; i++) {
        for (let j = 0; j < lengthOfMatrix; j++) {
            const value1 = Number(document.querySelector(`#divInput1${i}${j}`).value);
            const value2 = Number(document.querySelector(`#divInput2${i}${j}`).value);
            let result;

            // operation
            if (operationSelect.value === "+") {
                result = value1 + value2;
            } else if (operationSelect.value === "-") {
                result = value1 - value2;
            }
            //Result
            document.querySelector(`#resultInput${i}${j}`).value = result;
        }
    }
});
