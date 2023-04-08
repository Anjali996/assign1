const count = document.getElementById('count')
const add = document.getElementById('add')  

const sub = document.getElementById('sub')
const reset = document.getElementById('reset')


add.addEventListener('click',()=> {
    count.innerHTML++;
    applycolor()
})

sub.addEventListener('click',()=> {
    count.innerHTML--;
    applycolor()
})

reset.addEventListener('click',()=> {
    count.innerHTML = 0;
    applycolor()
})
 function applycolor()
 {
    if(count.innerHTML>0)
    {
    count.style.color= 'blue';
    }
 else if(count.innerHTML<0)
 {
    count.style.color= 'green';
 }
 else 
 {
    count.style.color= 'red';
 }
 }