var num1 = 11;
var num2 = 12;
var num3;
var num4 = "10";
var num5 = true;
num3 = num1 + num2;
console.log(num3);
num3 = num1 - num2;
console.log(num3);
num3 = num1 * num2;
console.log(num3);
num3 = num1 / num2;
console.log(num3);

num3= num4+num5;
console.log(num3);

//Giải thích: Khi cộng một chuỗi với một giá trị boolean, JavaScript tự động chuyển boolean thành chuỗi. true => 'true', nên kết quả là '10true'"