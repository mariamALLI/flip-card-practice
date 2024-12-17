const weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const days = document.querySelector('.days');
const card = document.querySelector('#card');
const emoji = ['🌮','🍭','🍔','🎄','🍩','🍿','🎁','🎄','🍓','🍪','🍇','🥗','🍷',
               '🎄','🍱','🍗','🍾','🍒','🍟','🎊','🎅🏽','🎄','🛍️','🍕','🎂','🎄',
                '🥂','🎄','🥳','🧁','🍛']

const displayWeek = weeks.map((week) => {
    return `<p class='daysBox'> ${week} </p>`
}).join('')

days.innerHTML = displayWeek

for (let i=1; i<= 31; i++){
    let num = i;
    let boxs = `<div class='box'> ${num} </div>`;
    card.innerHTML += boxs;
}

card.addEventListener('click', (event)=>{
    if (event.target.classList.contains('box')){
        event.target.classList.add('active');
        event.target.style.backgroundColor = '#BF213E';
        event.target.style.borderColor = 'rgb(21 128 61)';
        event.target.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
        event.target.innerHTML += `<p class='des'>hurray opened</p>`
        }

})




