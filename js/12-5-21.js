function addPara(){
    // document.getElementById("mydiv").innerHTML=`<p>This is a javascrpit</p>`
   let mypara=document.createElement("p")
   mypara.innerText="welcome"
   mypara.id="p1"
   mypara.style="color:blue"
   document.getElementById("mydiv").appendChild(mypara)
}
let data=["a","b","c","d","e"]
for(let i of data){
    let li=document.createElement("li")
    li.innerText=i
    document.getElementById("list").appendChild(li)
}
function remove(){
    let parent=document.getElementById("list")
    // parent.removeChild(parent.childNodes[0])
    // to remove complete element
    parent.remove()
}
let num_arr=[10,20,30,40,50]
// to display,we use for loop
num_arr.forEach((num)=>{
    console.log(num)
})
let new_arr=num_arr.map((d)=>{
    return d**2
})
console.log(new_arr)
