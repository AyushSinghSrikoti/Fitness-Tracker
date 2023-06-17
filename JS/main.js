const addBtn = document.getElementsByClassName('add-cal-btn2');
const itemName = document.getElementById('i1');
const noOfCal = document.getElementById('i2');
const lowerDiv=document.getElementsByClassName('lower-list');
const ld=document.getElementsByTagName('ul');
const itemForm=document.getElementById('item-form');
const calBtn=document.getElementById('add-cal');
const clearButton = document.getElementsByClassName('clear-button');
const consumedCals=document.getElementsByClassName('left-intake');
const totalCals=document.getElementsByClassName('total-intake');
let calCount=0;
if(!localStorage.getItem('cals')==0){
    calCount=localStorage.getItem('cals');
    calCount=parseInt(calCount);
}
totalCals[0].innerText=parseInt(localStorage.getItem('maintenance')).toFixed(2);
const name=document.getElementById('user-name');
const rightText=document.getElementById('right-text');
const bmiResult=document.getElementById('bmi-result');
name.innerText=localStorage.getItem('name');
let bmiCircle=document.getElementById('bmi-circle');
let height=localStorage.getItem('height');
let weight=localStorage.getItem('weight');
height=parseInt(height)/100;
weight=parseInt(weight);
let bmi=weight/(height*height);
bmi=bmi.toFixed(2);
bmiResult.innerText=bmi;
if(bmi<18.5){
    bmiCircle.style.backgroundColor="#f9c74f";
    rightText.innerText="You are underweight ";
}
else if(bmi<24.5){
    bmiCircle.style.backgroundColor="#8ac926";
    rightText.innerText="You are healthy ";
}
else if(bmi<29.9){
    bmiCircle.style.backgroundColor="#f8961e";
    rightText.innerText="You are overweight ";
}
else{
    bmiCircle.style.backgroundColor="#f94144";
    rightText.innerText="You are obese ";
}

// let waterCount=0;
calBtn.addEventListener('click',function(){
    itemForm.style.display="block";
    itemForm.classList.add("animate__rollIn");

    addBtn[0].onclick=function(){
        itemForm.classList.remove("animate__rollIn");
        itemForm.classList.add("animate__rollOut");
        setTimeout(function(){
            itemForm.classList.remove("animate__rollOut");
            itemForm.style.display="none";
        },1000);
    }
})

let temp="";
if(localStorage.getItem('list')){
    temp=localStorage.getItem('list');
}
else{
    localStorage.setItem('list',"");
}

function render(temp){
    consumedCals[0].innerText=calCount;
    lowerDiv[0].innerHTML=temp;
}
render(temp);
addBtn[0].addEventListener('click',function(e){
    e.preventDefault();
    let d=new Date();
    let item = itemName.value;
    let cals=noOfCal.value;
    calCount+=parseInt(cals);
    localStorage.setItem('cals',calCount);
    if(item=="" || cals==""){
        return;
    }
    itemName.value="";
    noOfCal.value="";
    // lowerDiv[0]+=`
    temp=`
    <li><div class="tracks">
    <div class="track-item">${item}</div>
    <div class="track-cals">${cals}</div>
    <div class="time-container">
        <div><span id="hour">${d.getHours()}</span>h &nbsp</div>
        <div><span id="minute">${d.getMinutes()}</span> min &nbsp</div>
        <div><span id="second">${d.getSeconds()}</span>sec</div>
    </div>
</li>`+temp
// lowerDiv[0].innerHTML = temp;
    localStorage.setItem('list',temp);
    render(temp);
});

// const itemFromLocal = JSON.parse(localStorage.getItem('count'));
// var input = document.getElementsByClassName("itemName");

clearButton[0].addEventListener('click' , function(){
    calCount = 0;
    localStorage.setItem('cals',0);
    localStorage.setItem('list' , "");
    render("");
});