let gryffindor = 0;
let hufflepuff = 0;
let ravenclaw = 0;
let slytherin = 0;

let question = document.getElementById("question")
let choices = document.getElementById("choices")
let buttons = document.getElementById("buttons")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let result = document.getElementById("result")
let choice1 = document.createElement("li")
let choice2 = document.createElement("li")
let choice3 = document.createElement("li")
let choice4 = document.createElement("li")

choices.appendChild(choice1)
choices.appendChild(choice2)
choices.appendChild(choice3)
choices.appendChild(choice4)

question1()

function question1(){
    question.textContent = "How do you handle conflict?"
    choice1.textContent = "I confront it head-on."
    choice2.textContent = "I find a way to compromise."
    choice3.textContent = "I analyze it carefully before reacting."
    choice4.textContent = "I prefer to avoid it."

    button1.addEventListener("click", () => {
        question2();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question2();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question2();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question2();
        slytherin++
    })
}

function question2(){
    question.textContent = "What do you value most?"
    choice1.textContent = "Bravery and courage."
    choice2.textContent = "Loyalty and friendship."
    choice3.textContent = "Knowledge and wisdom."
    choice4.textContent = "Ambition and success."

    
    button1.addEventListener("click", () => {
        question3();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question3();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question3();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question3();
        slytherin++
    })
}

function question3(){
    question.textContent = "In a group project, what role do you usually take?"
    choice1.textContent = "The leader who directs the team."
    choice2.textContent = "The supporter who encourages others."
    choice3.textContent = "The researcher who gathers information."
    choice4.textContent = "The strategist who plans the best approach"

    
    button1.addEventListener("click", () => {
        question4();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question4();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question4();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question4();
        slytherin++
    })
}

function question4(){
    question.textContent = "When faced with a challenge, you..."
    choice1.textContent = "Charge in without hesitation."
    choice2.textContent = "Rally your friends for support."
    choice3.textContent = "Think critically about all possible solutions."
    choice4.textContent = "Assess how it can benefit you."

    
    question.textContent = "What is your favorite hobby?"
    choice1.textContent = "Exploring new places."
    choice2.textContent = "Helping others."
    choice3.textContent = "Reading or learning new things."
    choice4.textContent = "Setting and achieving goals."

    button1.addEventListener("click", () => {
        question5();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question5();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question5();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question5();
        slytherin++
    })
}

function question5(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    
    question.textContent = "What quality do you most admire in others?"
    choice1.textContent = "Courage."
    choice2.textContent = "Loyalty."
    choice3.textContent = "Intelligence."
    choice4.textContent = "Ambition."

    button1.addEventListener("click", () => {
        question6();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question6();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question6();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question6();
        slytherin++
    })
}

function question6(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    
    question.textContent = "Which animal do you feel most connected to?"
    choice1.textContent = "Lion."
    choice2.textContent = "Badger."
    choice3.textContent = "Egale."
    choice4.textContent = "Snake."

    button1.addEventListener("click", () => {
        question7();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question7();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question7();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question7();
        slytherin++
    })
}

function question7(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    
    question.textContent = "Which environment do you thrive in?"
    choice1.textContent = "A fast-paced, challenging one."
    choice2.textContent = "A collaborative, supportive one."
    choice3.textContent = "A quiet, thoughtful one."
    choice4.textContent = "A competitive, high-achieving one."

    button1.addEventListener("click", () => {
        question8();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question8();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question8();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question8();
        slytherin++
    })
}

function question8(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    
    question.textContent = "Which color do you prefer?"
    choice1.textContent = "Red."
    choice2.textContent = "Yellow."
    choice3.textContent = "Blue."
    choice4.textContent = "Green."

    button1.addEventListener("click", () => {
        question9();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question9();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question9();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question9();
        slytherin++
    })
}

function question9(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    
    question.textContent = "Which subject interests you the most?"
    choice1.textContent = "Defense Against the Dark Arts."
    choice2.textContent = "Herbology."
    choice3.textContent = "Astronomy."
    choice4.textContent = "Potions."

    button1.addEventListener("click", () => {
        question10();
        gryffindor++;
    })
    button2.addEventListener("click", () => {
        question10();
        hufflepuff++;
    })
    button3.addEventListener("click", () => {
        question10();
        ravenclaw++;
    })
    button4.addEventListener("click", () => {
        question10();
        slytherin++
    })
}

function question10(){
    question.textContent = ""
    choice1.textContent = ""
    choice2.textContent = ""
    choice3.textContent = ""
    choice4.textContent = ""

    
    question.textContent = "How do you handle failure?"
    choice1.textContent = "I get back up and try again."
    choice2.textContent = "I seek support from friends."
    choice3.textContent = "I analyze what went wrong."
    choice4.textContent = "I use it as motivation to succeed next time."

    button1.addEventListener("click", () => {
        gryffindor++;
        results();
    })
    button2.addEventListener("click", () => {
        hufflepuff++;
        results();
    })
    button3.addEventListener("click", () => {
        ravenclaw++;
        results();
    })
    button4.addEventListener("click", () => {
        slytherin++
        results();
    })
}


function results(){
    const arr = [gryffindor,hufflepuff,ravenclaw,slytherin];
    
    result.textContent ="g="+ gryffindor + "h="+ hufflepuff + "r="+ ravenclaw + "s="+ slytherin
}
