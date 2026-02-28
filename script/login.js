// step 1 : id k dhorchi addevnt listener diye 
document.getElementById('login-btn').addEventListener("click", function(event){
     event.preventDefault();

     // 1-get the mobile number 
     const numberInput = document.getElementById('number-input');
     const contactNumber = numberInput.value;

     // 2-get the pin
     const pinInput = document.getElementById('pin-input');
     const pinNumber = pinInput.value;

     // 3- match the mobile and pin
     if(contactNumber === '01315774969' && pinNumber === '1119'){
          // window.location.href = "./home.html"
          // window.location.replace('/home.html');
          alert('login successfull');
          window.location.assign('/home.html');
     }
     else{
          alert('check your number and pin');
          return;
     }
     // if 3-1 - alert > homepage
     //else 3-1 - alert > return becasue wrong info entered


})

