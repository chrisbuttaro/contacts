app.factory('contactService', function(){
var service = {};
var contactsList = [
  {fname : "Elon", lname : "Musk", email : "Musk@spaceX.com", phone : 1123581, street: "1 Rocket Road",
  city: "Hawthorne", state : "CA", zip: 18573}
];

service.createContact=function(contact){
  var newContact={fname : contact.fname, lname : contact.lname, email : contact.email, phone : contact.phone, street: contact.street,
  city: contact.city, state : contact.state, zip: contact.zip};
  contactsList.push(newContact);

};

service.getContactsList = function(){
return contactsList;

}
return service;
});
