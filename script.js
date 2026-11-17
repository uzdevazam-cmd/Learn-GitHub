const calc = (son1, son2, operation) => {
    if(operation == "+"){
        return son1 + son2
    }else if (operation == '-'){
        return son1 - son2
    }else if (operation == '*'){
        return son1 * son2
    }else if (operation == '/'){
        return son1 / son2
    }
}
console.log(calc(24, 23, '-'));
console.log(calc(12, 13, '+'))
console.log(calc(30, 6, "/"));
console.log(calc(10, 10, "*"));


// const add = () =>{
//     let i = 1
//     while(i <= 100, i*=2){
//         console.log(i);    
//     }
// }

const nums = [1, 2, 3, 4, 5]
console.log(nums);


nums.push('tohir')
nums.push('sanjar')
nums.push('elbek')
nums.unshift('-')
nums.unshift('+')
nums.unshift('*')
nums.unshift('/')
nums.pop()
nums.shift()

console.log(nums);



const students = []

const addNewStudents = (student) => {
    students.unshift(student)
}

addNewStudents('tohir')
addNewStudents('begzod')
addNewStudents('shoxruz')

console.log(students);
//-----------------------


const sonlar = [1, 2, 3, 4, 5]
const removeLastnum = () =>{
    sonlar.pop()
}
removeLastnum()
removeLastnum()
removeLastnum()
removeLastnum()

console.log(sonlar);
console.log('');



const products = ['phone', 'tv', 'laptop']

for(let i = 0; i < products.length; i++){
    console.log(products[i]);   
}


for(let i = 0; i < sonlar.length; i++){
    console.log(sonlar[i]);
    
}