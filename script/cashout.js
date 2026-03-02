document.getElementById('cashout-btn').addEventListener("click", function(){

     // 1.get the number 
     const cashoutNumber = getValueFromInput('agent-number');
     if(cashoutNumber.length != 11 ){
          alert('Invalid Cashout Number');
          return ;
     }
     // 2.get the amount 
     const cashoutAmount = getValueFromInput('cashout-amount');

     // 3. get the balnce 
     const currentBalance = getBalance();
     
     // 4.calculate new balance
     const newBalance = currentBalance - Number(cashoutAmount);
     if(newBalance < 0){
          alert('Invalid Amount');
          return;
     }
     // console.log(newBalance);

     // 5.get the pin 
     const pin = getValueFromInput('pin-input');
     if(pin === '1119'){
          alert('Cashout Successfull');
          document.getElementById('balance').innerText = newBalance;
     }
     else {
          alert('Wrong pin entered');
     }
 })

// document.getElementById('cashout-btn').addEventListener("click", function(){
 
//      // 1. get the 11 digit agent number  and validate
//      const agentNumberInput = document.getElementById('agent-number');
//      const cashoutNumber = agentNumberInput.value;
//      if(cashoutNumber.length != 11){
//           alert('Invalid Agent Number');
//           return;
//      }

//      // 2. get the amount , validate and convert to number 
//      const cashoutAmountInput = document.getElementById('cashout-amount');
//      const cashoutAmount = cashoutAmountInput.value;


//      // 3. get the current balance , validate and convert to number
//      const balanceElement = document.getElementById('balance');
//      const balance = balanceElement.innerText;

//      // 4. calculate new balance 
//       const newBalance = Number(balance) - Number(cashoutAmount);
//       if(newBalance < 0){
//           alert('Invalid Amount');
//           return ;
//       }

//   // 5. get pin and verify
//      const cashoutPinInput = document.getElementById('pin-input');
//      const pin = cashoutPinInput.value;
//      // console.log(pinNumber);


//      // 6. if ture show alert and set new balance 
//      if( pin === '1119'){
//           alert('Cashout Successful');
//           balanceElement.innerText = newBalance; 
//      }
//      else{
//           alert('wrong pin entered');
//           return;
//      }

   
     




// })