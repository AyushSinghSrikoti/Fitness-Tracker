const submitButton=document.getElementById('submit-button');
const inputs=document.getElementsByTagName('input');
const form=document.getElementsByTagName('form');
const bmiImage=document.getElementsByClassName('bmi-result')
const submitDiv=document.getElementById('submit-div');
const name=document.getElementById('user-name');
name.innerText=localStorage.getItem('name');
submitButton.onmouseover=function(){
    submitDiv.classList.add('animate__pulse');
    submitDiv.classList.add('animate__fast');
    submitDiv.classList.add('animate__infinite');
};
submitButton.onmouseleave=function(){
    submitDiv.classList.remove('animate__pulse');
}
setTimeout(function(){
    submitButton.classList.remove('animate__zoomInUp');
    submitButton.classList.remove('animate__slow');
    submitButton.classList.remove('animate__delay-2s');
},4000);
const textResult=document.getElementsByClassName('result');
const bmiNumber=document.getElementsByClassName('bmi-number');
const bmiCategory=document.getElementsByClassName('bmi-category');
let count=0;
const animation=['animate__fadeInRight','animate__fadeInDown','animate__fadeInUp'];

function phoneImg(){
    bmiImage[0].style.display="flex";
    bmiImage[0].classList.add('animate__rollIn');
    setTimeout(function(){
        bmiImage[0].classList.remove('animate__rollIn');
        bmiImage[0].classList.add('animate__rollOut');
        setTimeout(function(){
            bmiImage[0].classList.remove('animate__rollOut');
            bmiImage[0].style.display="none";
        },1000)
    },3000);
}

function bmiResult(bmi){
    textResult[0].style.opacity="1";
    textResult[0].classList.add('animate__bounceIn');
    setTimeout(function(){
        textResult[0].classList.remove('animate__bounceIn');
    },1000);
    bmiNumber[0].innerText=bmi.toFixed(2);
    if(bmi<18.5){
        bmiCategory[0].innerText="Underweight";
        bmiImage[0].innerHTML=`<img class="images-bmi animate__animated ${animation[count]}" src="./images/skinny-chad.png">`;

        if(window.innerWidth<600){
            phoneImg();
        }

        textResult[0].style.color="#f9c74f";
        count++;
        count%=3;
        return;
    }
    if(bmi<24.5){
        bmiCategory[0].innerText="Healthy";
        bmiImage[0].innerHTML=`<img class="images-bmi animate__animated ${animation[count]}" src="./images/giga-chad.jpg">`;
        
        if(window.innerWidth<600){
            phoneImg();
        }
        
        textResult[0].style.color="#8ac926";
        count++;
        count%=3;
        return;
    }
    if(bmi<29.9){
        bmiCategory[0].innerText="Overweight";
        bmiImage[0].innerHTML=`<img class="images-bmi animate__animated ${animation[count]}" src="./images/overweight-chad.jpg">`;
        
        if(window.innerWidth<600){
            phoneImg();
        }
        
        textResult[0].style.color="#f8961e";
        count++;
        count%=3;
        return;
    }
    else{
        bmiCategory[0].innerText="Obese";
        bmiImage[0].innerHTML=`<img class="images-bmi animate__animated ${animation[count]}" src="./images/fat-chad.jpg">`;
        
        if(window.innerWidth<600){
            phoneImg();
        }
        
        textResult[0].style.color="#f94144";
        count++;
        count%=3;
        return;
    }

}

submitButton.onclick=function(e){
    let arr=form[0].elements;
    e.preventDefault();
    for(let i of form[0].elements){
        // console.log(i.value);
        if(i.value==""){
            submitButton.classList.add('animate__headShake');
            setTimeout(function(){
                submitButton.classList.remove('animate__headShake');
            },1000);
            return;
        }
    }
    let weight=parseFloat(arr[0].value);
    let height=parseFloat(arr[1].value);
    let bmi=(weight)/((height/100)*(height/100));
    bmiResult(bmi);
    // console.log(bmi);
    submitButton.classList.add('animate__tada');
    setTimeout(function(){
        submitButton.classList.remove('animate__tada');
    },1000);
};
