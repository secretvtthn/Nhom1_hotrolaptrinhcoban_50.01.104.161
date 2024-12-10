const exams = [
    { stt: 1, name: "Kỳ thi giữa kỳ 1", startTime: "08:00 AM", duration: "120 phút", status: "Đã xong", action: "Xem" },
    { stt: 2, name: "Kỳ thi giữa kỳ 2", startTime: "10:00 AM", duration: "90 phút", status: "Đang diễn ra", action: "Xem" },
    { stt: 3, name: "Kỳ thi cuối kỳ", startTime: "02:00 PM", duration: "180 phút", status: "Sắp diễn ra", action: "Xem" },
];

function displayExams(data) {
    const tableBody = document.getElementById("examList");
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ
    data.forEach(exam => {
        const row = `<tr>
            <td>${exam.stt}</td>
            <td>${exam.name}</td>
            <td>${exam.startTime}</td>
            <td>${exam.duration}</td>
            <td>${exam.status}</td>
            <td><button onclick="viewDetails('${exam.name}')">${exam.action}</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredExams = exams.filter(exam => 
        exam.name.toLowerCase().includes(query) || 
        exam.startTime.toLowerCase().includes(query) ||
        exam.duration.toLowerCase().includes(query) ||
        exam.status.toLowerCase().includes(query)
    );
    displayExams(filteredExams);
}

function reset() {
    document.getElementById("searchInput").value = "";
    displayExams(exams);
}

function sortTable(columnIndex) {
    const rows = Array.from(document.querySelectorAll("#examList tr"));
    const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();
        return cellA.localeCompare(cellB);
    });
    document.querySelector("#examList").append(...sortedRows);
}

function viewDetails(examName) {
    const exam = exams.find(e => e.name === examName);
    const detailsContent = `
        <strong>Tên kỳ thi:</strong> ${exam.name} <br>
        <strong>Thời gian bắt đầu:</strong> ${exam.startTime} <br>
        <strong>Thời gian:</strong> ${exam.duration} <br>
        <strong>Trạng thái:</strong> ${exam.status}
    `;
    document.getElementById("examDetailsContent").innerHTML = detailsContent;
    document.getElementById("examDetails").style.display = "block";
}

function closeDetails() {
    document.getElementById("examDetails").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    displayExams(exams);
});
