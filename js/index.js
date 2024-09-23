
// donation noakhali amount button
document.getElementById("donate-submit-noakhali").addEventListener("click", function(){
    
    // get the input value
    const donateNoakhali = getInputFieldValueById("donation-amount-noakhali");

    // donation noakhali 
    const balance = getTextfieldValueById("donation-noakhali");
    const newBalance = balance + donateNoakhali;
   
    document.getElementById("donation-noakhali").innerText = newBalance;

    const availableBalance = getTextfieldValueById("available-balance");
    const totalBalance = availableBalance - donateNoakhali;
    
    document.getElementById("available-balance").innerText = totalBalance;

})



document.getElementById("donate-submit-feni").addEventListener("click", function(){
    // get the input value
     const donateFani = getInputFieldValueById("donation-amount-feni");
   
})