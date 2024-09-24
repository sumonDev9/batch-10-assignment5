// get the founction button donate and history
function showSectionById(id){

    document.getElementById("donate-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden");
}

// toggle active button

//donationTab button
const donationTab = document.getElementById("donation-tab");
donationTab.addEventListener("click", function(){
   donationTab.classList.add("bg-primary");
   donationTab.classList.remove("opacity-70");

   historyTab.classList.remove("bg-primary");
   historyTab.classList.add("opacity-70");


   showSectionById("donate-section");
})
// historyTab
const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function(){
    historyTab.classList.add("bg-primary");
    historyTab.classList.remove("opacity-70");
    
    donationTab.classList.remove("bg-primary");
    donationTab.classList.add("opacity-70");
    
    showSectionById("history-section");
})



// get the founction input filed
function getInputFieldValueById(id){
    const inputValue = Number(document.getElementById(id).value);
    return inputValue;
}

// get the balance and available balance 
function getTextfieldValueById(id){
    const textNumber = Number(document.getElementById(id).innerText);
    return textNumber;
}