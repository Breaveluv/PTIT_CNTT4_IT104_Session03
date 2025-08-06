let username: string = "Nam";
let age: number = 18;
let job: string = "Student";

// Hàm nhận 3 tham số và in ra thông tin
function printUserInfo(name: string, age: number, job: string): void {
  console.log("Username:", name);
  console.log("Age:", age);
  console.log("Job:", job);
}

// Gọi hàm với các biến đã khai báo
printUserInfo(username, age, job);