var togglebuttom = document.getElementById('toggle-skills');
var skill = document.getElementById('skill');
togglebuttom.addEventListener('click', function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
