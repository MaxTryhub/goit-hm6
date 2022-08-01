const form = document.querySelector('.login-form');



form.addEventListener('submit',eventSubmit )


function eventSubmit (event){
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

      if(email === "" || password === ""){
        alert ("Заполните все поля");
      }
      else {
        const formData = {
          email,
          password,
        };
        console.log(formData);
      }
    
      return form.reset();
}