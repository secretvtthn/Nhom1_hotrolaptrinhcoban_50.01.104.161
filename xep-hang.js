const coderNameInput = document.getElementById('coderName');
const hoursWorkedInput = document.getElementById('hoursWorked');
const addCoderButton = document.getElementById('addCoder');
const coderList = document.getElementById('coderList');

function updateRanking() {
    const items = Array.from(coderList.children);
    const coders = items.map(item => {
        const name = item.querySelector('span:first-child').innerText.split('. ')[1];
        const hours = parseInt(item.querySelector('span:last-child').innerText.split(' ')[0]);
        return { name, hours, element: item };
    });

    coders.sort((a, b) => b.hours - a.hours);

    coderList.innerHTML = '';
    coders.forEach((coder, index) => {
        coder.element.querySelector('span:first-child').innerText = `${index + 1}. ${coder.name}`;
        coderList.appendChild(coder.element);
    });
}

addCoderButton.addEventListener('click', () => {
    const name = coderNameInput.value.trim();
    const hours = parseInt(hoursWorkedInput.value);

    if (name && !isNaN(hours) && hours > 0) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${coderList.children.length + 1}. ${name}</span>
            <span>${hours} giờ</span>
            <button class="delete-btn">Xóa</button>
        `;

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            updateRanking();
        });

        coderList.appendChild(li);
        updateRanking();
        coderNameInput.value = '';
        hoursWorkedInput.value = '';
    } else {
        alert('Vui lòng nhập tên và số giờ làm việc hợp lệ!');
    }
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.closest('li').remove();
        updateRanking();
    });
});
