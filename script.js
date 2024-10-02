let gryffindor = 0;
let hufflepuff = 0;
let ravenclaw = 0;
let slytherin = 0;



function question1(){
    question.textContent = "How do you handle conflict?"
    choice1.textContent = "I confront it head-on."
    choice2.textContent = "I find a way to compromise."
    choice3.textContent = "I analyze it carefully before reacting."
    choice4.textContent = "I prefer to avoid it."

    button1.addEventListener("click", () => {
        question2();
        gryffindor + 1;
    })
    button2.addEventListener("click", () => {
        question2();
        hufflepuff + 1;
    })
    button3.addEventListener("click", () => {
        question2();
        ravenclaw + 1;
    })
    button4.addEventListener("click", () => {
        question2();
        slytherin + 1;
    })
}

function question2(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    button1.addEventListener("click", () => {
        question2();
        gryffindor + 1;
    })
    button2.addEventListener("click", () => {
        question2();
        hufflepuff + 1;
    })
    button3.addEventListener("click", () => {
        question2();
        ravenclaw + 1;
    })
    button4.addEventListener("click", () => {
        question2();
        slytherin + 1;
    })
}