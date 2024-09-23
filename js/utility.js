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
   historyTab.classList.remove("bg-primary");

   showSectionById("donate-section");
})
// historyTab
const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function(){
    historyTab.classList.add("bg-primary");
    donationTab.classList.remove("bg-primary");

    showSectionById("history-section");
})



// get the founction input filed

function getInputFieldValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

// 
function getTextfieldValueById(id){
    const textNumber = parseFloat(document.getElementById(id).innerText);
    return textNumber;
}