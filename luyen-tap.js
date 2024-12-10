function filterExercises(subject) {
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
        if (subject === 'Tất cả' || exercise.dataset.subject === subject) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });
}

function searchExercises() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const exercises = document.querySelectorAll('.exercise');
    let found = false;
    exercises.forEach(exercise => {
        const title = exercise.querySelector('h3').textContent.toLowerCase();
        const description = exercise.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            exercise.style.display = 'block';
            found = true;
        } else {
            exercise.style.display = 'none';
        }
    });
    const searchResults = document.getElementById('searchResults');
    searchResults.textContent = found ? '' : 'Không tìm thấy bài tập nào.';
}
