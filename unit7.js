var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = [];
    for(var i = 0; i < contacts.length; i++) {
        if (contacts[i].lastName == lastName){
            printPerson(contacts[i]);
        }
    }
}


function add(firstName, lastName, email, phoneNumber){
    var new_contact = Object();
    new_contact.firstName = firstName;
    new_contact.lastName = lastName;
    new_contact.email = email;
    new_contact.phoneNumber = phoneNumber;
    contacts[contacts.length] = new_contact;
}
add("Keon", "Kim", "kkim683@aucklanduni.ac.nz", "123-4567");
list();
