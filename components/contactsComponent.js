var app = angular.module("contacts");

app.component('contactsComponent', {
  controller:function(contactService) {
    var vm=this;
    vm.contactsList=contactService.getContactsList();

},
  template : `

  <div class="container-fluid">
    <div class="row" >
     <div class="col-md-3" ng-repeat="contact in $ctrl.contactsList">
    <h3>{{contact.fname}} {{contact.lname}}</h3>
    {{contact.email}}
    {{contact.phone}}
    {{contact.street}}
    {{contact.city}}
    {{contact.state}}
      </div>
    </div>
  </div>
  `
});
