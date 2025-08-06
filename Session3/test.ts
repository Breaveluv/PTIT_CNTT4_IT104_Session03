
// Các kiểu dữ liệu trong TS
/*
// kiểu number

*/
let age:number | string=20;
age="21";

// Kiểu dữ liệu string
let fullname:string="Phạm Hồng Lan";

// Kiểu dữ liệu boolean
let isLogin:Boolean=true;

//kiểu void : Hàm không trả về giá trị
function print():void {
    console.log("hiển thị ....");
    

}
// Kiểu mảng
let student : string[]=["Hoa"," hong "];
let students: Array<string>=["Hoa"," hong "];

//Kiểu Ojb 
let Obj :{name :string,address: string,age :number}={
    name:"Minh THu",
    address:"Hà Nội",
    age:23,
}


// kiểu tuple 

let personInfo :[string ,number ,string] = ["đạt",11,"Hà noi"];