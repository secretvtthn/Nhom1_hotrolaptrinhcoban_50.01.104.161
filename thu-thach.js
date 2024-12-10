function checkCode() {
    const code = document.getElementById("code-input").value;
    const result = document.getElementById("result");
    if (code.includes("cin") && code.includes("cout")) {
        result.innerHTML = "Mã C++ của bạn có vẻ đúng!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Vui lòng đảm bảo mã của bạn sử dụng cin và cout.";
        result.style.color = "red";
    }
    let highlightedCode = code
        .replace(/\b(cin|cout)\b/g, '<span class="keyword">$1</span>')
        .replace(/([0-9]+)/g, '<span class="highlight">$1</span>');
    document.getElementById("code-input").innerHTML = highlightedCode;
}