const prompt = require("prompt-sync")()

function printInfo() {
    console.log("Contact Management System")
    console.log("--------------------------")
    console.log("1. Add a contact")
    console.log("2. Delete a contact")
    console.log("3. View contacts")
    console.log("4. Search contacts")
    console.log("5. Exit")
}

function addContact() {
    const name = prompt("Name: ")
    const email = prompt("Email: ")
    const contact = {
        name: name,
        email: email
    }
    contacts.push(contact)
    console.log("Added!")
}

function deleteContact() {
    console.log("Contact IDs:")
    for(let i = 0; i < contacts.length; i++) {
        const contact = contacts[i]
        console.log((i + 1).toString() + ":", contact.name)
    }
    const number = parseFloat(prompt("Enter an ID: "))
    if (number > contacts.length){
        console.log("Invalid.")
        return
    }
    contacts.splice(number-1,1) // for removing elements
    console.log("Removed")
}

function searchContact() {
    const searchString = prompt("Search: ").toLowerCase()
    const result = [];
    
    for (let contact of contacts){
        if (contact.name.toLowerCase().includes(searchString)) {
            result.push(contact)
        }
    }

    listContacts(result)
}

function listContacts(contacts) {
    for (let contact of contacts) {
        console.log('###########')
        console.log('Name:',contact.name)
        console.log('Email:',contact.email)
    }
}

const contacts = []
let keepGoing = true;


while (keepGoing){
    printInfo()
    const number = prompt("Enter an operation (1-5): ")
    console.log()
    switch(number){
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            listContacts(contacts);
            break;
        case "4":
            searchContact();
            break;
        case "5":
            keepGoing = false
            break;
        default:
            console.log("Unknown.")
    }
}

// const arr = [1, 10, 9, 8]
// arr.push(6)
// arr.pop()
// arr.splice(2, 1) // the second argument depicts the number of elements to remove from the index given in the first argument
//                  // this just removes 9. if it was 2, 2 it would remove 9 and 8