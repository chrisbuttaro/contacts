app.factory('contactService', function(){
var service = {};
var contactsList = [
  {fname : "Elon", lname : "Musk", email : "Musk@SpaceX.com", phone : 1123581, street: "1 Rocket Road",
  city: "Hawthorne", state : "CA", zip: 18573},

  {fname : "Bat", lname : "Man", email : "dark@knight.com", phone : 5555555, street: "In a Layer",
  city: "Gotham", state : "Il", zip: 48473},
  {fname : "Darth", lname : "Vader", email : "dark@side.com", phone : 1234567, street: "Bacta Tank",
  city: "Death Star", state : "ID", zip: 457892}
];

service.getContactsList = function(){
return contactsList;

}

service.createContact=function(contact){
  var newContact={fname : contact.fname, lname : contact.lname, email : contact.email, phone : contact.phone, street: contact.street,
  city: contact.city, state : contact.state, zip: contact.zip};
  contactsList.push(newContact);

};

service.editContact=function(contact){
  var editContact={};
  if(contact.fname!=null){
    editContact.fname=contact.fname;
  }

}
 service.deleteContact=function(contact){
   contactsList.splice(contactsList.indexOf(contact), 1);

 }
 return service;
 });
