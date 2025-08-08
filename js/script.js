const btns=document.querySelectorAll('.btn')
const submit=document.querySelector('.submit')
const p=document.querySelector('.answer-p')
const pageOne=document.querySelector('.first-page')
const pageTwo=document.querySelector('.second-page')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('selected'));
    btn.classList.toggle('selected');
  });
});
const score = () => {
    let selected;
    let number=btns.length
    for(btn of btns){
        if(btn.classList.contains('selected')){
            selected = btn.value;
        }
    }
     p.textContent=`You selected ${selected} out of ${number}`;
    pageOne.classList.toggle('display')
    pageTwo.classList.toggle('display')

}
submit.addEventListener('click',score)
