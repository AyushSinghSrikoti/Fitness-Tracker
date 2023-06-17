const textMessage=document.getElementById('text-message');
const submitButton=document.getElementById('submit-button');
const inputs=document.getElementsByTagName('input');
const form=document.getElementsByTagName('form');
const submitDiv=document.getElementById('submit-div');

setTimeout(function(){
    textMessage.classList.remove('animate__fadeInLeft');
    textMessage.classList.add('animate__fadeOutRight');
},3000);
submitButton.onmouseover=function(){
    submitDiv.classList.add('animate__pulse');
    submitDiv.classList.add('animate__fast');
    submitDiv.classList.add('animate__infinite');
};
submitButton.onmouseleave=function(){
    submitDiv.classList.remove('animate__pulse');
}
submitButton.onclick=function(e){
    localStorage.setItem('name',inputs[0].value);
    localStorage.setItem('weight',inputs[3].value);
    localStorage.setItem('height',inputs[4].value);
    localStorage.setItem('maintenance',inputs[3].value*2.20462*15);
    e.preventDefault();
    for(let i of form[0].elements){
        console.log(i.value);
        if(i.value==""){
            // submitButton.classList.add('animate__rubberBand');
            submitButton.classList.add('animate__headShake');
            setTimeout(function(){
                // submitButton.classList.remove('animate__rubberBand');
                submitButton.classList.remove('animate__headShake');
            },1000);
            return;
        }
    }
    
    submitButton.classList.add('animate__tada');
    setTimeout(function(){
        window.location.href="./main.html";
        submitButton.classList.remove('animate__tada');
    },1000);
};

