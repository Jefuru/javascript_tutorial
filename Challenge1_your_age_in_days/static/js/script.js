// Challenge 1: Your Age in Days

function ageInDays(){
    let birthday = prompt('what year were you born... good friend?');
    let ageInDayss = (2020 - birthday) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + 'days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}