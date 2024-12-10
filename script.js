// Dữ liệu mẫu
const exams = [
    { stt: 1, name: "Kỳ thi giữa kỳ 1", startTime: "08:00 AM", duration: "120 phút", status: "Đã xong", action: "Xem" },
    { stt: 2, name: "Kỳ thi giữa kỳ 2", startTime: "10:00 AM", duration: "90 phút", status: "Đang diễn ra", action: "Xem" },
    { stt: 3, name: "Kỳ thi cuối kỳ", startTime: "02:00 PM", duration: "180 phút", status: "Sắp diễn ra", action: "Xem" },
];

// Hiển thị danh sách kỳ thi
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
            <td><button>${exam.action}</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Tìm kiếm
function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredExams = exams.filter(exam => exam.name.toLowerCase().includes(query));
    displayExams(filteredExams);
}

// Reset danh sách
function reset() {
    document.getElementById("searchInput").value = "";
    displayExams(exams);
}

// Khởi tạo
document.addEventListener("DOMContentLoaded", () => {
    displayExams(exams);
});
