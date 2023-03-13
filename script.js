
//target the btn
// const btn = document.getElementById('btn')








// // this is the event listener
// btn.addEventListener('click',()=>{
//    //creating a new Para
// const NewPara = document.createElement('p')
// NewPara.setAttribute('class','styling')
// NewPara.innerText="this is New para"
// //targetting the body element
// const NewBody= document.body
// NewBody.append(NewPara)



// })


// const h1 = document.querySelector('h1')


// h1.addEventListener('mouseenter',()=>{



// h1.innerText="you are in h1 "

// const div= document.querySelector('div')
// div.innerText="you are in of h1 this is in the div "
// div.style.color='white'
// div.style.background='red'
// const btn = document.querySelector('button')
// btn.style.filter='blur(10px)'
// btn.style.transform="translateX(0px)"



// })



// h1.addEventListener('mouseleave',()=>{



//     const btn = document.querySelector('button')
// btn.style.filter='blur(0px)'
// btn.style.transform="translateX(50px)"
// h1.innerText="you are out of h1"
// const div= document.querySelector('div')
// div.innerText="you are out of h1 this is in the div "
// div.style.color='red'
// div.style.background='white'

// })



// const h1 = document.querySelector('h1')

// addEventListener('click',()=>{console.log(clientX)})




// console.log(window.document.body)



// console.log()
// console.warn()
// console.error()

//function

// let arr=[]


// const test=()=>{
// //created an element PARA

// let x =Math.random()*10
// let y = x
// const para  = document.createElement('para')
// //setting attribute of class and the name of that class is demo
// para.setAttribute('class',"demo")

// //we inserted the text 
// para.innerText=y
// arr.push(y)
// localStorage.setItem('key1',y.toString())
// //here we appended that para 
// document.body.append(para)



// }


//selecting the element
// const btn = document.querySelector('button')

// //on Event listener
// btn.addEventListener('click',test)



const INp = document.querySelector('input')
const Btn = document.getElementById('one')
const Btn1 = document.getElementById('two')
// const Btn1 = document.querySelector('.btn1')


// Btn.addEventListener('click',CLicked)
// 


const x= localStorage.getItem('name')

if(x){
    Btn.style.display='none'
    Btn1.style.display='flex'

const H2 = document.querySelector('h2')
H2.innerText=x


}







const submitbtn=()=>{
const name =INp.value

localStorage.setItem('name',name.toString())

Btn.style.display='none'
Btn1.style.display='flex'




}



const Clear=()=>{


localStorage.removeItem('name')
Btn.style.display='flex'
Btn1.style.display='none'

}