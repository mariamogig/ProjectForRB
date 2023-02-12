function handleInput(element,target) {
    const value = element.value;
    document.querySelector(`#${target}Result`).textContent = value;
}
function savePersonalInfo() {
    const domainName = 'redberry.ge';
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#tel').value;
    const aboutMe = document.querySelector('#aboutMe').value;

    if((tel.startsWith("+995")) && tel.length > 12 && tel.length <14){
        document.querySelector('#tel').parentElement.classList.remove('validation-error');
        document.querySelector('#tel').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#tel').parentElement.classList.add('validation-error');
        document.querySelector('#tel').parentElement.classList.remove('validation-done');
    }

    if(name.length >= 2) {
        document.querySelector('#name').parentElement.classList.remove('validation-error');
        document.querySelector('#name').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#name').parentElement.classList.add('validation-error');
        document.querySelector('#name').parentElement.classList.remove('validation-done');
    }
    if(surname.length >= 2) {
        document.querySelector('#surname').parentElement.classList.remove('validation-error');
        document.querySelector('#surname').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#surname').parentElement.classList.add('validation-error');
        document.querySelector('#surname').parentElement.classList.remove('validation-done');
    }
    if(email.length >= 1 && (email.indexOf(domainName) + domainName.length) == email.length) {
        document.querySelector('#email').parentElement.classList.remove('validation-error');
        document.querySelector('#email').parentElement.classList.add('validation-done');
    } else {
         document.querySelector('#email').parentElement.classList.add('validation-error');
         document.querySelector('#email').parentElement.classList.remove('validation-done');
    }

    const data = { name, surname, email,  tel, aboutMe }
    localStorage.setItem('registrationDate', JSON.stringify(data));
    console.log(data);
}
function saveEducation() {
    const univeristy = document.querySelector('#university').value;
    const details = document.querySelector('#details').value;
    const degree = document.querySelector('#degree').value;
    const date = document.querySelector('#date').value;
    
    if(date == "") {
        document.querySelector('#date').parentElement.classList.add('validation-error');
        document.querySelector('#date').parentElement.classList.remove('validation-done');
    } else {
        document.querySelector('#date').parentElement.classList.remove('validation-error');
        document.querySelector('#date').parentElement.classList.add('validation-done');
    }
    if(degree == "")  {
        document.querySelector('#degree').parentElement.classList.add('validation-error');
        document.querySelector('#degree').parentElement.classList.remove('validation-done');
    } else {
        document.querySelector('#degree').parentElement.classList.remove('validation-error');
        document.querySelector('#degree').parentElement.classList.add('validation-done');
    }
    if(univeristy.length >= 2) {
        document.querySelector('#university').parentElement.classList.remove('validation-error');
        document.querySelector('#university').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#university').parentElement.classList.add('validation-error');
        document.querySelector('#university').parentElement.classList.remove('validation-done');
    }
    if(details.length > 0) {
        document.querySelector('#details').parentElement.classList.remove('validation-error');
        document.querySelector('#details').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#details').parentElement.classList.add('validation-error');
        document.querySelector('#details').parentElement.classList.remove('validation-done');
    }

    const data = { univeristy, degree, details, date }
    localStorage.setItem('registrationDate', JSON.stringify(data));
    console.log(data);
}
function saveExperience() {
    const position = document.querySelector('#position').value;
    const company = document.querySelector('#company').value;
    const description = document.querySelector('#description').value;
    const start = document.querySelector('#start').value;
    const end = document.querySelector('#end').value;

    if(start == "") {
        document.querySelector('#start').parentElement.classList.add('validation-error');
        document.querySelector('#start').parentElement.classList.remove('validation-done');
    } else {
        document.querySelector('#start').parentElement.classList.remove('validation-error');
        document.querySelector('#start').parentElement.classList.add('validation-done');
    }
    if(end == "") {
        document.querySelector('#start').parentElement.classList.add('validation-error');
        document.querySelector('#start').parentElement.classList.remove('validation-done');
    } else {
        document.querySelector('#start').parentElement.classList.remove('validation-error');
        document.querySelector('#start').parentElement.classList.add('validation-done');
    }
    if(position.length >= 2) {
        document.querySelector('#position').parentElement.classList.remove('validation-error');
        document.querySelector('#position').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#position').parentElement.classList.add('validation-error');
        document.querySelector('#position').parentElement.classList.remove('validation-done');
    }
    if(company.length >= 2) {
        document.querySelector('#company').parentElement.classList.remove('validation-error');
        document.querySelector('#company').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#company').parentElement.classList.add('validation-error');
        document.querySelector('#company').parentElement.classList.remove('validation-done');
    }
    if(description.length >= 1) {
        document.querySelector('#description').parentElement.classList.remove('validation-error');
        document.querySelector('#description').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#description').parentElement.classList.add('validation-error');
        document.querySelector('#description').parentElement.classList.remove('validation-done');
    }
    const data = { position, company, description, start, end}
    localStorage.setItem('registrationDate', JSON.stringify(data));
    console.log(data);
}   

window.onload = function() {
    const data = JSON.parse(localStorage.getItem('registrationDate'));

    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
        document.querySelector(`#${key}`).value = value;
        document.querySelector(`#${key}Result`).textContent = value;
    }
}