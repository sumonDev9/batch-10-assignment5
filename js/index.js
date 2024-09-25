// donation noakhali amount button
document.getElementById("donate-submit-noakhali").addEventListener("click", function(){

    //get the input value
    const donateNoakhali = getInputFieldValueById("donation-amount-noakhali");
    
    // check input field contains an invalid number
    if (Number.isNaN(donateNoakhali) || donateNoakhali <= 0) {
        alert("Invalid donation amount")
        return;
    }

    // get donation and available balance 
    const balance = getTextfieldValueById("donation-noakhali");
    const availableBalance = getTextfieldValueById("available-balance");
    
    // validation for Donation amount exceeds available balance
    if (donateNoakhali > availableBalance) {
        alert("Donation amount exceeds the available balance..")
        return;
    }
    // add donation balance
    const newBalance = balance + donateNoakhali;
    document.getElementById("donation-noakhali").innerText = newBalance;

    // updated available balance
    const totalBalance = availableBalance - donateNoakhali;
    document.getElementById("available-balance").innerText = totalBalance;
    // get the title value
    const donationNameNoakhali = document.getElementById("donation-name-noakhali").innerText;

    // history section donation amount transection details
    const historyItems = document.createElement("div");
    historyItems.className = "bg-white p-6 border-2 border-[rgba(17, 17, 17, 0.1)] mb-4 rounded-lg";
    historyItems.innerHTML = `
        <h1 class="text-secondary text-xl font-bold mb-3">${donateNoakhali} Taka is ${donationNameNoakhali}.</h1>
        <p class="text-secondary opacity-70">${new Date()}</p>
    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.appendChild(historyItems);
    // reset input filed value 
    document.getElementById("donation-amount-noakhali").value = '';

    // open the modal
    document.getElementById('donated-noakhali-modal').showModal();

})


// donation feni 
document.getElementById("donate-submit-feni").addEventListener("click", function(){
    // get the input value
    const donateFani = getInputFieldValueById("donation-amount-feni");
   
   // check input field contains an invalid number
    if (Number.isNaN(donateFani) || donateFani <= 0) {
        alert("Invalid donation Amount");
        return;
    }
    // get donation and available balance 
    const balance = getTextfieldValueById("donation-feni");
    const availableBalance = getTextfieldValueById("available-balance");
    
    // validation for Donation amount exceeds available balance
    if (donateFani > availableBalance) {
        alert("donation amount is greater than the account balance..")
        return;
    }
    // add donation balance
    const newBalance = balance + donateFani;
    document.getElementById("donation-feni").innerText = newBalance;
     // updated available balance
    const totalBalance = availableBalance - donateFani;
    document.getElementById("available-balance").innerText = totalBalance;

    // get the title value
    const donationNameFeni = document.getElementById("donation-name-feni").innerText;

   // history section donation amount transection details
    const historyItems = document.createElement("div");
    historyItems.className = "bg-white p-6 border-2 border-[rgba(17, 17, 17, 0.1)] mb-4 rounded-lg";
    historyItems.innerHTML = `
        <h1 class="text-secondary text-xl font-bold mb-3">${donateFani} Taka is ${donationNameFeni}.</h1>
        <p class="text-secondary opacity-70">${new Date()}</p>
    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.appendChild(historyItems);
     // reset input filed value 
     document.getElementById("donation-amount-feni").value = '';

    // open the modal
    document.getElementById('donated-feni-modal').showModal();

})


// donation Quota
document.getElementById("donate-submit-quota").addEventListener("click", function(){
    // get the input value
    const donateQuota = getInputFieldValueById("donate-amount-quota");
    
   // check input field contains an invalid number
    if (Number.isNaN(donateQuota) || donateQuota <= 0) {
        alert("Invalid donation Amount");
        return;
    }
    //get donation and available balance 
    const balance = getTextfieldValueById("donation-quota");
    const availableBalance = getTextfieldValueById("available-balance");
    
    // validation for Donation amount exceeds available balance
    if(donateQuota > availableBalance) {
        alert("donation amount is greater than the account balance..")
        return;
    }
    // add donation balance
    const newBalance = balance + donateQuota;
    document.getElementById("donation-quota").innerText = newBalance;
    // updated available balance
    const totalBalance = availableBalance - donateQuota;
    
    document.getElementById("available-balance").innerText = totalBalance;
    // get the title value
    const donationNameQuota = document.getElementById("donation-name-quota").innerText;

    // history section donation amount transection details
    const historyItems = document.createElement("div");
    historyItems.className = "bg-white p-6 border-2 border-[rgba(17, 17, 17, 0.1)] mb-4 rounded-lg";
    historyItems.innerHTML = `
          <h1 class="text-secondary text-xl font-bold mb-3">${donateQuota} Taka is Donated for ${donationNameQuota}.</h1>
          <p class="text-secondary opacity-70">${new Date()}</p>
      `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.appendChild(historyItems);

    // reset input filed value 
    document.getElementById("donate-amount-quota").value = "";

    // open the modal
    document.getElementById('donated-quota-modal').showModal();
})



// Redirect to blog buttone click go to home page
document.getElementById("blog-link-btn").addEventListener("click", function(){
    window.location.href = "./blog.html";
})

