// let obj=new String("hello world")
// s=obj.toUpperCase()
// console.log(s)
// console.log(s.toLowerCase())
// console.log(obj.indexOf("e"))
// console.log(obj.indexOf("l"))
// console.log(obj.indexOf("l",3))
// console.log(obj.lastIndexOf("l"))
// console.log(obj.charAt(4))
// let obj2=" hello world "
// console.log(obj2)
// console.log(obj2.length)
// console.log(obj2.trim())
// console.log(obj2.trim().length)
// console.log(obj2.substr(2))
// console.log(obj2.substr(1,3))
// console.log(obj2.substring(1,3))
// console.log(obj2.startsWith(" he"))
// console.log(obj2.endsWith("world "))
// let arr=[]
// console.log(arr,typeof(arr))
// let arr1=new Array()
// console.log(arr1,typeof(arr1))
let names=["delma","prince","eben","peter","roni"]
console.table(names)
// names[0]="delu"
// console.log(names)
// console.log("length",names.length)
// names[5]="soniya"
// console.log(names)
// names.push("don")
// console.log(names)
// names.pop()
// console.log(names)
// names.shift()
// console.log(names)
// names.unshift("laya")
// console.log(names)
// for(let i=0;i<5;i++){
//     console.log("hai",i)
// }
// for(let index=0;index<names.length;index++){
//     console.log("index :",index," ",names[index])
// }

// // for-each loop using of keyword
// for(let name of names){
//     console.log(name)
// } 

// // for each using in keyword
// for(let index in names){
//     console.log(index)
//     console.log(names[index])
// }
// console.log(names)
// names.splice(3)
// console.log(names)
// names.splice(3,2)
// console.log(names)
// names.splice(1,1)
// console.log(names)
// console.log(names.splice(3))
// console.log(names)
// names.splice(3,1,"renu","anu","nani")
// console.log(names)
// console.log(names.indexOf("eben"))
let str="hey, all welcome"
let words=str.split(" ")
console.log(words)
let item=str.split(",")
console.log(item)
let words1=str.split("l")
console.log(words1)
console.log(names.join(","))


let num=[10,23,43,59,80,40]
console.log(num)
console.log(num.length)
num.splice(2,2)
console.log(num)
console.log(num[10])
num[10]="hello"
console.log(num)
num.push(20,30,40)
console.log(num)