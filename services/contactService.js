app.factory('contactService', function(){
var service = {};
var contactsList = [
  {fname : "Elon", lname : "Musk", email : "Musk@spaceX.com", phone : 1123581, street: "1 Rocket Road",
  city: "Hawthorne", state : "CA", zip: 18573}
];

service.createContact=function(contact){
  console.log(contact);
  contactsList.push(contact);

};

service.getContactsList = function(){
return contactsList;

}
return service;
});
