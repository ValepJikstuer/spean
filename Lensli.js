function submitQuiz() {
    var answers = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "a",
        q5: "c",
        q6: "c",
        q7: "a",
        q8: "b",
        q9: "a",
        q10: "c",
    };

    var score = 0;
    var totalQuestions = 10;
    var form = document.getElementById("quizForm");

    // Проверяем ответы
    for (var i = 1; i <= totalQuestions; i++) {
        var questionName = "q" + i;
        var selectedAnswer = form.querySelector('input[name="' + questionName + '"]:checked');

        if (selectedAnswer && selectedAnswer.value === answers[questionName]) {
            score++;
        }
    }

    // Проверяем смысловые вопросы
    var answersText = {
        q11: "Основные темы: любовь, дуэль, смерть, разочарование, человеческие чувства и общественные отношения.",
        q12: "Конфликт заключается в дуэли между Онегиным и Ленским, вызванной случайным недоразумением и разницей в характерах.",
        q13: "Татьяна олицетворяет идеал женственности и верности, она показывает внутреннюю силу и зрелость, несмотря на её молодость."
    };

    var textScore = 0;
    for (var i = 11; i <= 13; i++) {
        var questionName = "q" + i;
        var userAnswer = form.querySelector('textarea[name="' + questionName + '"]').value.toLowerCase().trim();

        if (userAnswer && answersText[questionName].toLowerCase().includes(userAnswer)) {
            textScore++;
        }
    }

    // Выводим результат
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Ваш результат: " + (score + textScore) + " из " + (totalQuestions + 3) + " правильных ответов!";
}
