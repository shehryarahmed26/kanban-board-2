let signup = document.querySelector('#signup')
let loginpage = document.querySelector('.login')
let signuppage = document.querySelector('.signup')
let kanbanboard = document.querySelector('kanban-board')
signup.addEventListener('click', (e) => {
    e.preventDefault();
    signupdata();
    
})
let usersdata = []
function safedata () {
    localStorage.setItem('userdata', JSON.stringify(usersdata))
}
safedata();
function loaddata() {
    let recievedata =  localStorage.getItem('userdata');
    if (recievedata) {
        usersdata = JSON.parse(recievedata);
    }
    else {
        usersdata = []
    }
}
loaddata();

function signupdata () {
    let Username = document.querySelector('#signup-user')
    let Email = document.querySelector('#signup-email')
    let Password = document.querySelector('#signup-password')

    if (Username.value.trim() === '' || Email.value.trim() === '' || Password.value.trim() === '' ) {
        swal.fire("Fill the complete information")
        return;
    }

    let userexit = usersdata.some((user) => user.email === Email.value || user.username === Username.value);
    console.log(userexit);
    if (userexit) {
        swal.fire("user already exit")
        return;
    }
    let newuser = {
        username: Username.value,
        email: Email.value,
        password: Password.value
    }

    usersdata.push(newuser)
    safedata();
    Username.value = ''
    Email.value = ''
    Password.value = ''
    swal.fire("Signup Compete")
    setTimeout(() => {
        
        signuppage.style.display = 'none';
        loginpage.style.display = 'flex';
        login.style.animation = 'fadein 0.3s forwards';
    }, 800)
    
    // console.log(newuser);
    // console.log(usersdata);
}
let login = document.querySelector('#login')
login.addEventListener('click', (e) => {
    e.preventDefault()
    userdatafound();
});
function userdatafound () {
    let email = document.querySelector('#l-email')
    let password = document.querySelector('#l-password')
    let userfound = usersdata.some(
        (data) => data.email === email.value && data.password === password.value
    )
    if (userfound) {
        swal.fire('Login Successful')
      setTimeout(() => {
        location.href='./kanban.html'
      }, 1000)
        return;
        
    }
    else {
        swal.fire('User not found')
        return;
    }
        
    
    email.value = ''
    password.value = ''
    
    
}


function convertlogin () {
    if (signuppage.style.display = 'flex') {
        signuppage.style.display = 'none'
        loginpage.style.display = 'flex'
    }
}
function convertsignup () {
    if (loginpage.style.display = 'flex') {
        loginpage.style.display = 'none'
        signuppage.style.display = 'flex'
    }
}
let log = document.querySelector('.log')
log.addEventListener('click', (e) => {
    e.preventDefault();
    convertlogin();
})
let sign = document.querySelector('.sign')
sign.addEventListener('click', (e) => {
    e.preventDefault();
    convertsignup();
})
//////////////////////////////////////// Login End ////////////////////////////////

//////////////////////////////////////// Kanban Start ////////////////////////////////

// let inputs = document.querySelectorAll('.kanban-inputs')
// let kanbtns = document.querySelectorAll('.kan-btn') 
// let colums = document.querySelectorAll('colum')
// kanbtns.forEach((kanbtn) => {
//     kanbtn.addEventListener('click', (e) => {
//         console.log(e.target.parentNode);
//     })
// })
// function todo () {
//     let input = document.querySelector('.input-1').value.trim()
//     let btn = document.querySelector('.btn-1')
//     let colum = document.querySelector('.colum-1')
//     let ul = document.querySelector('ul')
//     btn.addEventListener('click', (e) => {
//         e.preventDefault(); 
//         let li = document.createElement('li')
//         if (input === '') {
//             swal.fire("Please write the task")
//             return;
//         }
//         li.innerHTML = `${input}`
//         ul.append(li)
//         li  = ''
//         input = ''
//     })
// }

