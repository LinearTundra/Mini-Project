document.getElementById('queryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const studentName = document.getElementById('studentName').value.trim();
    const questionText = document.getElementById('question').value.trim();

    if (studentName && questionText) {
        const questionsContainer = document.getElementById('questionsContainer');

        // Create question element
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<strong>${studentName} asks:</strong> ${questionText}`;

        // Add answer input
        const answerInput = document.createElement('textarea');
        answerInput.placeholder = 'Write your answer here...';
        answerInput.rows = 2;

        // Add submit button
        const submitAnswerButton = document.createElement('button');
        submitAnswerButton.textContent = 'Submit Answer';
        submitAnswerButton.addEventListener('click', function () {
            if (answerInput.value.trim()) {
                const answerElement = document.createElement('div');
                answerElement.classList.add('answer');
                answerElement.innerHTML = `
                    ${answerInput.value.trim()}
                    <button class=\"remove-answer\">Remove</button>
                `;
                questionElement.appendChild(answerElement);

                // Add remove functionality
                answerElement.querySelector('.remove-answer').addEventListener('click', function () {
                    answerElement.remove();
                });

                answerInput.value = ''; // Clear the input
            }
        });

        questionElement.appendChild(answerInput);
        questionElement.appendChild(submitAnswerButton);

        // Add to container
        questionsContainer.appendChild(questionElement);

        // Clear the form
        document.getElementById('queryForm').reset();
    }
});
