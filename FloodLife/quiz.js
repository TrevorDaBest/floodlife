const questions = [
    "What causes floods?",
    "What is a scale used to <em>measure</em> floods?",
    "What tool is used to measure floods?",
    "Which of these should you <em>not</em> do in the case of a flood?",
    "What year did the 'Mississippi River Flood' happen?",
    "Where and when can floods happen in the US?",
    "Where can be a <em>higher</em> risk of floods?"
];

const answers = [
    ["Rapid and excessive rain", "Just rapid rain", "Water overflow", "Earthquakes in the clouds"],
    ["DFO", "DLO", "FSL", "FSM"],
    ["Steam gauges", "Buckets", "Technology", "Filters"],
    ["Walk in the flood waters", "Go to high ground", "Avoid flood waters", "Avoid canyons"],
    ["1927", "1993", "2003", "1997"],
    ["Any time, Anywhere", "Some moments, Anywhere", "Any time, Some places", "Some moments, Some places"],
    ["Densely populated areas", "Deserts", "Low population areas", "Hilly mountians"]
];

const correctAnswers = [0, 0, 0, 0, 0, 0, 0]; // Index of the correct answer in each original array

let question = 0;
let correct = 0;

const questionDisplay = document.getElementById("question");
const buttons = [
    document.getElementById("a1"),
    document.getElementById("a2"),
    document.getElementById("a3"),
    document.getElementById("a4")
];

let currentCorrectIndex = 0;

function shuffleAnswers(answerArray, correctIndex) {
    const indexedAnswers = answerArray.map((answer, index) => ({
        text: answer,
        isCorrect: index === correctIndex
    }));

    for (let i = indexedAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indexedAnswers[i], indexedAnswers[j]] = [indexedAnswers[j], indexedAnswers[i]];
    }

    return indexedAnswers;
}

function loadQuestion() {
    questionDisplay.innerHTML = questions[question];

    const shuffled = shuffleAnswers(answers[question], correctAnswers[question]);

    shuffled.forEach((item, index) => {
        buttons[index].innerHTML = item.text;
        buttons[index].onclick = () => handleAnswer(item.isCorrect);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        correct++;
    }

    question++;
    if (question < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionDisplay.innerHTML = `Quiz finished! You got ${correct} out of ${questions.length} correct.`;
    buttons.forEach(btn => btn.style.display = "none");
}

loadQuestion();
