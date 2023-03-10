function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailId.value;
    const phonenumber = event.target.phonenumber.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // localStorage.setItem('phonenumber', phonenumber)
    const obj = {
        name,
        email,
        phonenumber
    }

    axios.post("https://crudcrud.com/api/2bb4c12bcbcd4f378d195204f4e7ad03/appointmentData", obj)
    .then((respone)=>{
        console.log(respone)
    })
    .catch((err)=>{
        console.log(err)
    })
    //localStorage.setItem(obj.email, JSON.stringify(obj))
    //showListofRegisteredUser(obj)
}

window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
        showListofRegisteredUser(user)
    })
})

function showListofRegisteredUser(user){
    const parentNode = document.getElementById('listOfitems');
    const createNewUserHtml = `<li id='${user.email}'>${user.name} - ${user.email} - ${user.phonenumber}
                                    <button onclick=deleteUser('${user.email}')>Delete</button>
                                </li>
                                `
    console.log(createNewUserHtml)
    parentNode.innerHTML +=  createNewUserHtml;
    console.log(parentNode.innerHTML)
}

function deleteUser(email) {
    localStorage.removeItem(email)
    removeItemFromScreen(email)
}

function removeItemFromScreen(email){
    const parentNode = document.getElementById('listOfitems');
    const elem = document.getElementById(email)
    parentNode.removeChild(elem);
}