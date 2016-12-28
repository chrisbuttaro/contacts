var app = angular.module("contacts");

app.component('contactsComponent', {
  controller:function(contactService) {
    var vm=this;
    vm.contactsList=contactService.getContactsList();
    vm.delete=contactService.deleteContact;
    vm.edit=contactService.editContact;

},
  template : `

  <div class="container-fluid">
    <div class="row" >
     <div class="col-md-2" ng-repeat="contact in $ctrl.contactsList track by $index">
       <h3>{{contact.fname}} {{contact.lname}}</h3>
       {{contact.email}}<br>
       <b>Phone:</b> {{contact.phone}}<br>
       {{contact.street}}<br>
       {{contact.city}},
       {{contact.state}}<br>
       <div class="btn-group" role="group">
       <button type="button" ng-click="$ctrl.delete(contact)" class="btn btn-warning glyphicon glyphicon-trash"></button>
        <button type="button" class="btn btn-info glyphicon glyphicon-edit" data-toggle="collapse" data-target="#demo"></button>
        <div id="demo" class="collapse">
          <edit-component contact=contact></edit-component>
        </div>

       </div>
      </div>
    </div>
  </div>
  `
});
