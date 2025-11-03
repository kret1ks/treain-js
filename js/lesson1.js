// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.


// const students = [
//   { name: "Іван", age: 18, gender: "male", grade: 85 },
//   { name: "Олена", age: 19, gender: "female", grade: 92 },
//   { name: "Андрій", age: 20, gender: "male", grade: 78 },
//   { name: "Марія", age: 18, gender: "female", grade: 88 },
//   { name: "Сергій", age: 21, gender: "male", grade: 95 }
// ];



// const middle = array =>{
//     let sum = 0;
//     for(let i = 0; i < array.length; i += 1){
//         if(array[i].grade){
//             sum += array[i].grade
//         }
//     }
//     return sum / array.length
// }
// console.log(middle(students));



const students2 = [
  { name: "Катерина", age: 17, gender: "female", grade: 90 },
  { name: "Дмитро", age: 18, gender: "male", grade: 76 },
  { name: "Оксана", age: 19, gender: "female", grade: 84 },
  { name: "Володимир", age: 20, gender: "male"},
  { name: "Наталя", age: 18, gender: "female", grade: 88 },
  { name: "Тарас", age: 21, gender: "male", grade: 81 }
];




// Напиши функцію, яка повертає ім’я студента з найвищим балом


const topStudent = arry => {
    let maxGrade = 0;
    let topStudent = "";
    for(let i = 0; i < arry.length; i += 1){
        if(arry[i].grade !== undefined){
            if(arry[i].grade > maxGrade){
                maxGrade = arry[i].grade;
                topStudent = arry[i].name;
            }
        }
    }
    return `${topStudent}: ${maxGrade}`
}
console.log(topStudent(students2));



