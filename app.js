const toggleSwitch = document.querySelector('.toggleSwitch');
const backgroundBody = document.querySelector('body');
const title = document.querySelector('h1');

if(localStorage.getItem('darkModeEnabled')){
    toggleSwitch.checked = true
    backgroundBody.classList.add('dark')
}

toggleSwitch.addEventListener('click', function(e){
   if(toggleSwitch.checked){
    localStorage.setItem('darkModeEnabled', true)
    backgroundBody.classList.add('dark')
   } else {
    localStorage.removeItem('darkModeEnabled');
    backgroundBody.classList.remove('dark')
   }
})