const quizSolar = [
    {
        question: "Q1 : How many planets are present in our solar system?",
        a: "7",
        b: "6",
        c: "8",
        d: "9",
        ans: "ans3" 
    },
    {
        question: "Q2 Which is the largest planet in our solar system?",
        a: "Saturn",
        b: "Mars",
        c: "Earth",
        d: "Jupiter",
        ans: "ans4" 
    },
    {
        question: "Q3 : Which is the first planet from the Sun?",
        a: "Mars",
        b: "Mercury",
        c: "Venus",
        d: "Saturn",
        ans: "ans2" 
    },
    {
        question: "Q4 : Which planet is known as the morning or evening “star”?",
        a: "Venus",
        b: "Earth",
        c: "Mercury",
        d: "Uranus",
        ans: "ans1" 
    },
    {
        question: "Q5 : How many days does Earth take to complete one orbit of the Sun?",
        a: "24",
        b: "365",
        c: "368",
        d: "364",
        ans: "ans2" 
    },
    {
        question: "Q6 : Mars is often called as the _______ planet.",
        a: "Giant planet",
        b: "Blue planet",
        c: "Red planet",
        d: "Star",
        ans: "ans3" 
    },
    {
        question: "Q7 : In a telescope, Saturn appears to be of which colour?",
        a: "Blue",
        b: "Red",
        c: "White",
        d: "Pale yellow",
        ans: "ans4" 
    },
    {
        question: "Q8 : How many known moons does Neptune have?",
        a: "10",
        b: "11",
        c: "13",
        d: "9",
        ans: "ans3" 
    },
    {
        question: "Q9 : What is Uranus mainly made up of?",
        a: "Rocks",
        b: "Iron",
        c: "Hydrogen",
        d: "Ice",
        ans: "ans4" 
    },
    {
        question: "Q10 : Which planet is known as the 'lord of the rings'?",
        a: "Jupiter",
        b: "Saturn",
        c: "Venus",
        d: "Uranus",
        ans: "ans2" 
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = ( ) => {
    const questionList = quizSolar[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizSolar[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizSolar.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
        <h3> You scored ${score}/${quizSolar.length} ✌️</h3>
        <button class="btn" onclick="location.reload()">Play Again!</button>

        `;

        showScore.classList.remove('scoreArea');
    }
});