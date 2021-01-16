window.onscroll = function() {myFunction()};
    
    // Get the header
    var header = document.getElementById("myHeader");
 
    // Get the offset position of the navbar
    var sticky = header.offsetTop ;
 
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }


    const emailAdress = document.querySelector('#email');
          const form = document.querySelector('#enquiryform');
    
          const checkEmail = () => {
          let valid = false;
          const ea = emailAdress.value.trim();
          if (!isRequired(ea)) {
              showError(emailAdress, 'Email cannot be empty');
          } else if (!isEmailValid(ea)) {
              showError(emailAdress, 'Email is not valid');
          } else {
              showSuccess(emailAdress, 'worked');
              valid = true;
          }
          return valid;
          };
        
           // for this function we use a regular expression string to the match an email address format 
          const isEmailValid = (email) => {
              const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
          };

          // this function returns true if the user input is empty 
          const isRequired = value => value === '' ? false : true;
      
          const showError = (input, message) => {
          // get the form-field element
          const formField = input.parentElement;
          formField.classList.remove('success');
          formField.classList.add('error');

          const error = formField.querySelector('small');
          error.textContent = message;
          };

          const showSuccess = (input) => {
          // get the form-field element
          const formField = input.parentElement;

          formField.classList.remove('error');
          formField.classList.add('success');

          const error = formField.querySelector('small');
          error.textContent = 'Please check your email for confirmation';
          };

          
        form.addEventListener('submit', function (e) {
        // prevent the submit button from submitting the form 
        e.preventDefault();

        // validate fields
        let firstNameValid =  emailAddressValid = checkEmail();

        let formValid = emailAddressValid;

        // if form is valid then submit 
        if (formValid) {
            
            }
        });
        