const quizSolar = [
    {
        question: "Q1 : Which is the largest planet in our solar system?",
        a: "Saturn",
        b: "Jupiter",
        c: "Earth",
        d: "Mars",
        ans: "ans2" 
    },
    {
        question: "Q2 : ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "" 
    },
    {
        question: "Q3 : ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q4 :  ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q5 :  ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q6 : ?",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q7 : ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q8 : ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q9 : ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
    },
    {
        question: "Q10 : ",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans" 
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