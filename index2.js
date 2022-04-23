/*const buton = document.querySelector('button');
h1 = document.querySelector('h1');
let a = 0

buton.addEventListener('cilck',  
  function () {
    a+=1
    h1.innerHTML = a;
    console.log('ishladi')
  }
  
)*/


  

const button = document.querySelector("button");
let h1 = document.querySelector('.radius')
let a = 0;
button.addEventListener('click', function() {
  a += 1;
  if (a==33) {
    a=0
  }
  h1.innerHTML = a;
});
document.addEventListener('keypress', function() {
  a += 1;
  if (a==33) {
    a=0
  }
  h1.innerHTML = a;
});

