const today = new Date().getDay();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dayDivs = document.querySelectorAll('.day');

dayDivs.forEach(day => {
    if (day.querySelector('h3').innerText == days[today]){
        day.classList.add('today');
    }
});


