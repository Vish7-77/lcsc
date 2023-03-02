
const submit=()=>{




const s1 =document.getElementById('inp1').value
const s2 =document.getElementById('inp2').value
const s3 =document.getElementById('inp3').value
const s4 =document.getElementById('inp4').value
const s5 =document.getElementById('inp5').value
const s6 =document.getElementById('inp6').value







let total = Number(s1)+Number(s2)+Number(s3)+Number(s4)+Number(s5)+Number(s6)




if(total<25){
    document.getElementById('total').style.color="red"
}

else{
    document.getElementById('total').style.color="green"
}
document.getElementById('total').innerText=total







}



//passing marks (25)


