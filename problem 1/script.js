const button = document.getElementById("addcontact");
const searchButton = document.getElementById("search");

button.addEventListener('click', function(){
    let name = document.getElementById("Name");
    let email = document.getElementById("Email");
    let phonenumber = document.getElementById("Phonenumber");

    let nameVal = name.value;
    let emailVal = email.value;
    let phonenumberVal = phonenumber.value; 


    var contactsObject = {nameVal, emailVal, phonenumberVal};
    localStorage.setItem('contactsObject', JSON.stringify(contactsObject));
    location.reload();

    for(let i = 0; i<localStorage.length; i++){
        const name = localStorage.contactsObject(i);
        const value = localStorage.getItem(name);

        contacts.innerHTML += `${name}: ${value}`
    }
    


});

Searchbutton.addEventListener('click', function(localStorage){
    let searchNum = document.getElementById("searchbar");
    searchval = searchNum.value;

    for(let i = 0; i<localStorage.length; i++){
        if(searchval == localStorage.getItem(i)){
            let specifiedNum = localStorage.getItem(i)
            Contacts.innerHTML += `${key}: ${specifiedNum}`;
        } 
    }

});