function displayRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    randomQuestion.displayQuestion();
}

function createQuestion(prompt, options, correctOption) {
    return {
        prompt: prompt,
        options: options,
        correctOption: correctOption,
        userAnswer: null,
        isAnsweredCorrectly: false,
        displayQuestion: function() {
            console.log(this.prompt);
            this.options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`);
            });
        },
        checkAnswer: function(userAnswer) {
            const correctIndex = this.correctOption - 1;
            this.userAnswer = userAnswer;
            this.isAnsweredCorrectly = this.options[correctIndex] === userAnswer;
            return this.isAnsweredCorrectly;
        },
        getUserAnswer: function() {
            return this.userAnswer;
        }
    };
}


const questions = [
    createQuestion("What is the capital of France?", ["London", "Paris", "Rome", "Berlin"], 2),
    createQuestion("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Earth", "Saturn"], 2),
    createQuestion("What is the powerhouse of the cell?", ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"], 1)
];


displayRandomQuestion(questions);



// system for correct and incorrect answers

function createQuestion(prompt, options, correctOption) {
    return {
        prompt: prompt,
        options: options,
        correctOption: correctOption,
        userAnswer: null,
        isAnsweredCorrectly: false,
        displayQuestion: function() {
            console.log(this.prompt);
            this.options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`);
            });
        },
        checkAnswer: function(userAnswer) {
            const correctIndex = this.correctOption - 1;
            this.userAnswer = userAnswer;
            this.isAnsweredCorrectly = this.options[correctIndex] === userAnswer;
            return this.isAnsweredCorrectly;
        },
        getUserAnswer: function() {
            return this.userAnswer;
        }
    };
}

function displayRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    randomQuestion.displayQuestion();
    const userAnswer = prompt("Enter your answer (1, 2, 3, 4): ");
    const isCorrect = randomQuestion.checkAnswer(randomQuestion.options[parseInt(userAnswer) - 1]);
    if (isCorrect) {
        console.log("Correct!");
        return true;
    } else {
        console.log("Incorrect. The correct answer was: " + randomQuestion.options[randomQuestion.correctOption - 1]);
        return false;
    }
}

function runQuiz(questions) {
    let score = 0;
    let totalQuestions = questions.length;

    questions.forEach(question => {
        if (displayRandomQuestion(questions)) {
            score++;
        }
    });

    let incorrectAnswers = totalQuestions - score;
    console.log(`\nYou got ${score} out of ${totalQuestions} correct.`);
    console.log(`You got ${incorrectAnswers} incorrect.`);
}


const questions = [
    createQuestion("What is the capital of France?", ["London", "Paris", "Rome", "Berlin"], 2),
    createQuestion("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Earth", "Saturn"], 2),
    createQuestion("What is the powerhouse of the cell?", ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"], 1)
];


runQuiz(questions);

//users input their answers and receive feedback for answers
function createQuestion(prompt, options, correctOption) {
    return {
        prompt: prompt,
        options: options,
        correctOption: correctOption,
        userAnswer: null,
        isAnsweredCorrectly: false,
        displayQuestion: function() {
            console.log(this.prompt);
            this.options.forEach((option, index) => {
                console.log(`${index + 1}. ${option}`);
            });
        },
        checkAnswer: function(userAnswer) {
            const correctIndex = this.correctOption - 1;
            this.userAnswer = userAnswer;
            this.isAnsweredCorrectly = this.options[correctIndex] === userAnswer;
            return this.isAnsweredCorrectly;
        },
        getUserAnswer: function() {
            return this.userAnswer;
        }
    };
}

function displayRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    randomQuestion.displayQuestion();
    const userAnswer = prompt("Enter your answer (1, 2, 3, 4): ");
    const isCorrect = randomQuestion.checkAnswer(randomQuestion.options[parseInt(userAnswer) - 1]);
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Incorrect. The correct answer was: " + randomQuestion.options[randomQuestion.correctOption - 1]);
    }
    return isCorrect;
}

function runQuiz(questions) {
    let score = 0;
    questions.forEach(question => {
        if (displayRandomQuestion(questions)) {
            score++;
        }
    });
    console.log(`You got ${score} out of ${questions.length} correct.`);
}


const questions = [
    createQuestion("What is the capital of France?", ["London", "Paris", "Rome", "Berlin"], 2),
    createQuestion("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Earth", "Saturn"], 2),
    createQuestion("What is the powerhouse of the cell?", ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"], 1)
];


runQuiz(questions);

//displaying final score
function createQuestion(prompt, options, correctOption) {
    return {
        prompt: prompt,
        options: options,
        correctOption: correctOption,
        userAnswer: null,
        isAnsweredCorrectly: false
    };
}

function displayQuestion(question) {
    console.log(question.prompt);
    question.options.forEach((option, index) => {
        console.log(`${index + 1}. ${option}`);
    });
}

function checkAnswer(question, userAnswer) {
    const correctIndex = question.correctOption - 1;
    question.userAnswer = userAnswer;
    question.isAnsweredCorrectly = question.options[correctIndex] === userAnswer;
    return question.isAnsweredCorrectly;
}

function displayRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    displayQuestion(randomQuestion);
    const userAnswer = prompt("Enter your answer (1, 2, 3, 4): ");
    const isCorrect = checkAnswer(randomQuestion, randomQuestion.options[parseInt(userAnswer) - 1]);
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Incorrect. The correct answer was: " + randomQuestion.options[randomQuestion.correctOption - 1]);
    }
    return isCorrect;
}

function runQuiz(questions) {
    let score = 0;
    questions.forEach(question => {
        if (displayRandomQuestion(questions)) {
            score++;
        }
    });
    console.log(`You got ${score} out of ${questions.length} correct.`);
}


const questions = [
    createQuestion("What is the capital of France?", ["London", "Paris", "Rome", "Berlin"], 2),
    createQuestion("What is the largest planet in our solar system?", ["Mars", "Jupiter", "Earth", "Saturn"], 2),
    createQuestion("What is the powerhouse of the cell?", ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"], 1)
];


runQuiz(questions);
