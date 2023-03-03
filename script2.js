let total= []


const Add = (e)=>{


let x = e
  
total.push(x)



let t =total.reduce((a,b)=>a+b)
// console.log(t)

document.getElementById('products').innerText=t












}



const Clr=()=>{
    total=[]
    document.getElementById('products').innerText=0
}