function openModal(courseId) {
    var modal = document.getElementById(courseId);
    modal.style.display = "block";
}

function closeModal(courseId) {
    var modal = document.getElementById(courseId);
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
