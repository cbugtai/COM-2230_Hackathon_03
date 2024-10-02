let gryffindor = 0
let hufflepuff = 0
let ravenclaw = 0
let slytherin = 0


const question = document.getElementById("question")
const options = document.getElementById("choices")
const results = document.getElementById("result")
const resultContainer = document.getElementById("result-container")



let currentState = "question1"

const quiz = {
    question1: {
        question:"How do you handle conflict?",
        choices: [
            {text: "I confront it head-on.", nextState: "question2", house: "gryffindor"},
            {text: "I find a way to compromise.", nextState: "question2", house: "hufflepuff"},
            {text: "I prefer to avoid it.", nextState: "question2", house: "ravenclaw"},
            {text: "I analyze it carefully before reacting.", nextState: "question2", house: "slytherin"}
        ]
    },
    question2: {
        question: "What do you value most?",
        choices: [
            {text: "Bravery and courage.", nextState: "question3", house: "gryffindor"},
            {text: "Loyalty and friendship.", nextState: "question3", house: "hufflepuff"},
            {text: "Knowledge and wisdom.", nextState: "question3", house: "ravenclaw"},
            {text: "Ambition and success.", nextState: "question3", house: "slytherin"}
        ]
    },
    question3: {
        question: "In a group project, what role do you usually take?",
        choices: [
            {text: "The leader who directs the team.", nextState: "question4", house: "gryffindor"},
            {text: "The supporter who encourages others.", nextState: "question4", house: "hufflepuff"},
            {text: "The researcher who gathers information.", nextState: "question4", house: "ravenclaw"},
            {text: "The strategist who plans the best approach.", nextState: "question4", house: "slytherin"}
        ]
    },
    question4: {
        question: "When faced with a challenge, you...",
        choices: [
            {text: "Charge in without hesitation.", nextState: "question5", house: "gryffindor"},
            {text: "Rally your friends for support.", nextState: "question5", house: "hufflepuff"},
            {text: "Think critically about all possible solutions.", nextState: "question5", house: "ravenclaw"},
            {text: "Assess how it can benefit you.", nextState: "question5", house: "slytherin"}
        ]
    },
    question5: {
        question: "What is your idea of a perfect weekend?",
        choices: [
            {text: "Going on an adventure.", nextState: "question6", house: "gryffindor"},
            {text: "Spending time with close friends.", nextState: "question6", house: "hufflepuff"},
            {text: "Reading a good book or studying.", nextState: "question6", house: "ravenclaw"},
            {text: "Setting and achieving personal goals.", nextState: "question6", house: "slytherin"}
        ]
    },
    question6: {
        question: "If you found a wallet on the street, you would...",
        choices: [
            {text: "Try to find the owner and return it.", nextState: "question7", house: "gryffindor"},
            {text: "Turn it into the lost and found.", nextState: "question7", house: "hufflepuff"},
            {text: "Look for ID and contact the owner directly.", nextState: "question7", house: "ravenclaw"},
            {text: "Keep it if no one is around.", nextState: "question7", house: "slytherin"}
        ]
    },
    question7: {
        question: "How do you respond to rules?",
        choices: [
            {text: "I believe rules are meant to be followed.", nextState: "question8", house: "gryffindor"},
            {text: "I think they should be respected, but sometimes bent.", nextState: "question8", house: "hufflepuff"},
            {text: "I question their purpose and validity.", nextState: "question8", house: "ravenclaw"},
            {text: "I view them as guidelines to be challenged.", nextState: "question8", house: "slytherin"}
        ]
    },
    question8: {
        question: "What motivates you to succeed?",
        choices: [
            {text: "The desire to prove my bravery.", nextState: "question9", house: "gryffindor"},
            {text: "The support of my friends and community.", nextState: "question9", house: "hufflepuff"},
            {text: "The pursuit of knowledge and understanding.", nextState: "question9", house: "ravenclaw"},
            {text: "The ambition to rise to the top.", nextState: "question9", house: "slytherin"}
        ]
    },
    question9: {
        question: "How do you view failure?",
        choices: [
            {text: "As a stepping stone to bravery.", nextState: "question10", house: "gryffindor"},
            {text: "As a learning opportunity.", nextState: "question10", house: "hufflepuff"},
            {text: "As a chance to reflect and grow.", nextState: "question10", house: "ravenclaw"},
            {text: "As a setback to overcome.", nextState: "question10", house: "slytherin"}
        ]
    },
    question10: {
        question: "What kind of legacy do you want to leave?",
        choices: [
            {text: "One of courage and valor.", nextState: "endState", house: "gryffindor"},
            {text: "One of strong relationships and loyalty.", nextState: "endState", house: "hufflepuff"},
            {text: "One of wisdom and knowledge shared.", nextState: "endState", house: "ravenclaw"},
            {text: "One of achievement and ambition.", nextState: "endState", house: "slytherin"}
        ]
    }
}

function renderQuestion(){
    const current = quiz[currentState];
    if (current === quiz["endState"]){
        resultsPage();
    } else {
    question.innerHTML = current.question;
    options.innerHTML = "";

    current.choices.forEach(choice => {
        addButton(choice.text, choice.nextState, choice.house)
    })
    }
}

function addButton(text, nextState, house) {
    const button = document.createElement("button");
    options.appendChild(button)
    button.textContent = text;
    
    button.addEventListener("click", () => {
        if (house === "gryffindor"){
            gryffindor++
        } else if (house === "hufflepuff"){
            hufflepuff++
        } else if (house === "ravenclaw"){
            ravenclaw++
        } else {
            slytherin++
        }
        currentState = nextState
        renderQuestion()
    })
}

function resultsPage() {
    const results = {"Gryffindor":gryffindor, "Hufflepuff":hufflepuff, "Ravenclaw": ravenclaw, "Slytherin": slytherin}
    const maxKey = getKeyWithHighestValue(results)

    const image = document.createElement("img")
    resultContainer.appendChild(image)

    if (maxKey === "Gryffindor"){
        image.src = "https://static.wikia.nocookie.net/harrypotter/images/9/98/Gryffindor.jpg";
        image.alt = "Crest of House Gryffindor"
    } else if (maxKey === "Hufflepuff"){
        image.src = "https://static.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg";
        image.alt = "Crest of House Hufflepuff"
    } else if (maxKey === "Ravenclaw"){
        image.src = "https://static.wikia.nocookie.net/harrypotter/images/3/3c/RavenclawCrest.jpg";
        image.alt = "Crest of House Ravenclaw"
    } else {
        image.src = "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Slytherin.jpg";
        image.alt = "Crest of House Slytherin"
    }
    
    question.classList.add("Results")
    question.innerHTML = "Congratulations! You belong to house "+ maxKey + "!";
    options.innerHTML = "";
}

function getKeyWithHighestValue(obj) {
    if (Object.keys(obj).length === 0) return null; // Return null if the object is empty

    let maxKey = Object.keys(obj)[0]; // Initialize with the first key
    let maxValue = obj[maxKey]; // Initialize with the first value

    for (const key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key];
            maxKey = key;
        }
    }

    return maxKey;
}


renderQuestion();