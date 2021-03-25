const myForm = document.getElementById('myForm');




myForm.addEventListener('submit', function(e) {
  let  myInput = document.getElementById('email');
  let myRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if((myInput.value.trim() == "") || (myRegex.test(myInput.value) == false)){
        let myError = document.getElementById('error');
        myInput.classList.add('inputError');
        myError.innerHTML = "Please provide a valid email address";
        e.preventDefault();

    }
});
    
