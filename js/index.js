
// donation noakhali amount button
document.getElementById("donate-submit-noakhali").addEventListener("click", function(){
    
    // get the input value
    const donateNoakhali = getInputFieldValueById("donation-amount-noakhali");

     // validation
     if(isNaN(donateNoakhali) || donateNoakhali <= 0 ){
        alert("Invalid donation Amount")
        return;
       }
       
     // donation noakhali 
    const balance = getTextfieldValueById("donation-noakhali");
    const newBalance = balance + donateNoakhali;
   
    document.getElementById("donation-noakhali").innerText = newBalance;
    
    const availableBalance = getTextfieldValueById("available-balance");
    // validation
    if(donateNoakhali > availableBalance){
        alert("donation amount is greater than the account balance..")
        return;
    }  
    
    const totalBalance = availableBalance - donateNoakhali;
    
    document.getElementById("available-balance").innerText = totalBalance;

})


// donation feni 
document.getElementById("donate-submit-feni").addEventListener("click", function(){
    // get the input value
     const donateFani = getInputFieldValueById("donation-amount-feni");

      // validation
      if(isNaN(donateFani) || donateFani <= 0 ){
        alert("Invalid donation Amount");
        return;
       }

     const balance = getTextfieldValueById("donation-feni");
     const newBalance = balance + donateFani;
    
     document.getElementById("donation-feni").innerText = newBalance;
     
     const availableBalance = getTextfieldValueById("available-balance");

      // validation
    if(donateFani > availableBalance){
        alert("donation amount is greater than the account balance..")
        return;
    }
     const totalBalance = availableBalance - donateFani;

     document.getElementById("available-balance").innerText = totalBalance;

     
})


// 

document.getElementById("donate-submit-quota").addEventListener("click", function(){
    // get the input value
    const donateQuota = getInputFieldValueById("donate-amount-quota");
   
     // validation
     if(isNaN(donateQuota) || donateQuota <= 0 ){
        alert("Invalid donation Amount");
        return;
       } 

    const balance = getTextfieldValueById("donation-quota");
    const newBalance = balance + donateQuota;

    document.getElementById("donation-quota").innerText = newBalance;

    const availableBalance = getTextfieldValueById("available-balance");

       // validation
       if(donateQuota > availableBalance){
        alert("donation amount is greater than the account balance..")
        return;
    }
    const totalBalance = availableBalance - donateQuota;

    document.getElementById("available-balance").innerText = totalBalance;
    
})