let num_arr=[12,25,34,47,59]
// to display,we use for loop
num_arr.forEach((num)=>{
    console.log(num)
})
let new_arr=num_arr.map((d)=>{
    return d**2
})
console.log(new_arr)
let new_array=num_arr.map((elements)=>{
    return elements+2
})
console.log(new_array)
let new_arrys=num_arr.filter((d)=>{
if(d%2!=0){
        return d
    }

})
console.log(new_arrys)
let new_arrys1=num_arr.map((d)=>{
    if(d%2!=0){
            return d
        }
    
    })
console.log(new_arrys1)
let r=new_array.reduce((x,y)=>{
    console.log("x=",x)
    console.log("y=",y)
    return x+y
})
console.log(r)
let r1=new_array.reduceRight((x,y)=>{
    console.log("x=",x)
    console.log("y=",y)
    return x-y
})
console.log(r1)
console.log("started....")
function asyntest(){
    setTimeout(()=>{
        console.log("inside asyn function...")
    },5000)
}
asyntest()
console.log("finished...")
console.log("test")
