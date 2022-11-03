const header = document.querySelector("header");
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergency = document.querySelector('.emergency-tasks');
emergency.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTitle = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergencyTitle.length; i += 1) {
  emergencyTitle[i].style.backgroundColor = 'rgb(165, 0, 243)';
}

const noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor = 'rgb(249, 219, 94)';

const noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < noEmergencyTitle.length; i += 1) {
  noEmergencyTitle[i].style.backgroundColor = 'rgb(35, 37, 37)';
}

const footer = document.querySelector('footer');
footer.style.backgroundColor = 'rgb(0, 53, 51)';