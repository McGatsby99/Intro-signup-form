
export const handleErrors = () => {
    // console.log('handleErrors')
    let firstName = document.getElementById('first-name') as HTMLInputElement
    let lastName = document.getElementById('last-name') as HTMLInputElement
    let email = document.getElementById('email') as HTMLInputElement
    let password = document.getElementById('password') as HTMLInputElement
    console.log(email)

    if(firstName.value.length < 1){
        console.log('contains: ' + firstName.classList.contains('error'))
        firstName.classList.add('error')

    }

    if(lastName.value.length < 1){
        lastName.classList.add('error')
    }

    console.log(!email.validity.valid || email.value.length < 1)
    
    if(!email.validity.valid || email.value.length < 1){
        // console.log(email.validity.valid)
        
        email.classList.add('error')
        console.log(email)

    }

    
    if(password.value.length < 1){
        password.classList.add('error')
    }
}


export const removeErrors = () =>{
    
let firstName = document.getElementById('first-name') as HTMLInputElement
let lastName = document.getElementById('last-name') as HTMLInputElement
let email = document.getElementById('email') as HTMLInputElement
let password = document.getElementById('password') as HTMLInputElement


    firstName?.classList?.remove('error');
    lastName?.classList?.remove('error');
    email?.classList?.remove('error');
    password?.classList?.remove('error');

}