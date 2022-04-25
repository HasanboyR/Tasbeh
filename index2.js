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


  
let h4 = document.querySelector("h4");
const button = document.querySelector("button");
let h1 = document.querySelector('.radius')
let a = 0;
let s = 0;
function a(){
  a += 1;
  if (a==33) {
    a=0
    s += 1
  }
  if (s==0) {
    h4.innerHTML='Subhanalloh'
  }
  if (s==1) {
    h4.innerHTML='Alhamdulillah'
  }
  if (s==2) {
    h4.innerHTML='Allohu Akbar'
  }
  if (s==3) {
    s=0
  }
  
  h1.innerHTML = a;
}
button.addEventListener('click', function() {
  a();
});
document.addEventListener('keypress', function() {
  a();
});

