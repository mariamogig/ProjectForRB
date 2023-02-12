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

    if(name.length >= 2) {
        document.querySelector('#name').parentElement.classList.remove('validation-error');
        document.querySelector('#name').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#name').parentElement.classList.add('validation-error');
    }
    if(surname.length >= 2) {
        document.querySelector('#surname').parentElement.classList.remove('validation-error');
        document.querySelector('#surname').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#surname').parentElement.classList.add('validation-error');
    }
    if(email.lenght >= 1 && (email.indexOf(domainName) + domainName.length) == domainName.length) {
        document.querySelector('#email').parentElement.classList.remove('validation-error');
        document.querySelector('#email').parentElement.classList.add('validation-done');
    } else {
         document.querySelector('#email').parentElement.classList.add('validation-error');
    }
    
    const data = { name, surname, email,  tel }
    console.log(data);
}
function saveEducation() {
    const univeristy = document.querySelector('#university').value;
    const details = document.querySelector('#details').value;
    

    if(univeristy.length >= 2) {
        document.querySelector('#university').parentElement.classList.remove('validation-error');
        document.querySelector('#university').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#university').parentElement.classList.add('validation-error');
    }
    if(details.length > 0) {
        document.querySelector('#details').parentElement.classList.remove('validation-error');
        document.querySelector('#details').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#details').parentElement.classList.add('validation-error');
    }
    const data = { name, surname, email,  tel }
    console.log(data);
}
function saveExperience() {
    const position = document.querySelector('#position').value;
    const company = document.querySelector('#company').value;
    const description = document.querySelector('#company').value;

    if(position.length >= 2) {
        document.querySelector('#position').parentElement.classList.remove('validation-error');
        document.querySelector('#position').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#position').parentElement.classList.add('validation-error');
    }
    if(company.length >= 2) {
        document.querySelector('#company').parentElement.classList.remove('validation-error');
        document.querySelector('#company').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#company').parentElement.classList.add('validation-error');
    }
    if(description.length >= 1) {
        document.querySelector('#description').parentElement.classList.remove('validation-error');
        document.querySelector('#description').parentElement.classList.add('validation-done');
    } else {
        document.querySelector('#description').parentElement.classList.add('validation-error');
    }
    const data = { position, company, start, end, description }
    console.log(data);
}   
