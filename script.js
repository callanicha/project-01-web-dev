const btn = document.getElementById('toggle-btn');

btn.addEventListener('click', () => {
    console.log("you clicked the btn !!")
    document.querySelector('.navBar').classList.toggle('show')
})