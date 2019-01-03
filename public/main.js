const sendBtn = document.querySelector('#sendBtn');
const inMail = document.querySelector('#inMail');
const inBody = document.querySelector('#inBody');

sendBtn.addEventListener('click', () => {
    fetch('/sendmail', {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({mail: inMail.value, body: inBody.value})
    }).then((resp) => {
        console.log(resp);
    }).catch(err => console.error(err));
});