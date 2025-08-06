var stringVariable = "2";
var numberVariable = 2;
console.log("K\u1EBFt qu\u1EA3 c\u1EE7a '==': ".concat(stringVariable == numberVariable));
// Kết quả: true
// Giải thích: Toán tử == (so sánh lỏng) chỉ so sánh giá trị.
// TypeScript/JavaScript sẽ tự động chuyển đổi kiểu dữ liệu của biến stringVariable thành number
// để so sánh. Vì "2" có thể chuyển thành 2, nên kết quả là true.
// --- So sánh chặt (===) ---
console.log("K\u1EBFt qu\u1EA3 c\u1EE7a '===': ".concat(stringVariable === numberVariable));
// Giải thích: Toán tử === (so sánh chặt) so sánh cả giá trị và kiểu dữ liệu.
// Mặc dù giá trị của hai biến là giống nhau (2), nhưng kiểu dữ liệu lại khác nhau
// (string và number), do đó kết quả là false.
