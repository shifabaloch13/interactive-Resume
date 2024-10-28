const togglebuttom = document.getElementById('toggle-skills') as HTMLButtonElement;
const skill = document.getElementById('skill') as HTMLElement;

togglebuttom.addEventListener('click', () => {
    if (skill.style.display ==="none") {
         skill.style.display = "block"
    }
    else {
        skill.style.display = "none"
    }
});