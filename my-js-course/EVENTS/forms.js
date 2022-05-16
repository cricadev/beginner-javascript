const wes = document.querySelector('.wes');
wes.addEventListener('click', (e) => {
    console.log(e);
    console.log('clicked it');
    const shouldChangePage = confirm(
        'this website might be malicious!, do you wish to proceed?'
    );
    if (shouldChangePage) {
        window.location = event.currentTarget.href;
    } else {
        e.preventDefault();
    }
    console.log(shouldChangePage);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
    console.log(e.currentTarget.name.value);
    console.log(e.currentTarget.email.value);
    console.log(e.currentTarget.agree.checked);
    const name = e.currentTarget.name.value;
    if (name.includes('chad')) {
        alert('Please enter a real nigga name');
        e.preventDefault();
    }
});

function logEvent(e) {
    console.log(e.type);
    console.log(e.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// ('keyup');
// ('keydown');
// ('floor');
// ('blur');

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
    if (e.key === 'Enter' || e.type === 'click') {
        console.log('photo clicked');
    }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);