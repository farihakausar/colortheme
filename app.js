const  colors = ["red","blue","purple","gray","pink","Aquamarine","Coral","DarkKhaki","LightBlue","Olive","orange","white"];
const btn1= document.getElementById('btn');
const color=document.querySelector('.color');

btn1.addEventListener('click',function(){
    const randomNumber=getRandomNumber();

    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}