document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What does HTML stand for?",
            choices: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
            correctAnswer: 0
        },
        {
            question: "Which language runs in a web browser?",
            choices: ["Java", "C", "Python", "JavaScript"],
            correctAnswer: 3
        },
        // Add more questions as needed
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const submitButton = document.getElementById('submit-button');
    const resultElement = document.getElementById('result');

    function displayQuestion() {
        let question = questions[currentQuestion];
        questionElement.textContent = question.question;

        choicesElement.innerHTML = '';
        question.choices.forEach((choice, index) => {
            let li = document.createElement('li');
            li.innerHTML = `<input type="radio" name="choice" value="${index}" id="choice${index}">
                            <label for="choice${index}">${choice}</label>`;
            choicesElement.appendChild(li);
        });
    }

    submitButton.addEventListener('click', () => {
        const selectedChoice = document.querySelector('input[name="choice"]:checked');
        if (selectedChoice) {
            let answer = parseInt(selectedChoice.value);
            if (answer === questions[currentQuestion].correctAnswer) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuestion();
            } else {
                questionElement.style.display = 'none';
                choicesElement.style.display = 'none';
                submitButton.style.display = 'none';
                resultElement.innerHTML = `Quiz completed! Your score is ${score}.`;
            }
        } else {
            alert("Please select an answer.");
        }
    });

    displayQuestion();
});
