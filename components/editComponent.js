var app = angular.module("contacts");

app.component('editComponent', {
  controller:function(contactService) {
    var vm=this;
    vm.contactsList=contactService.getContactsList();
  },
template: `
<br>
<br>
<div class="container-fluid">
<div class="row" >
<form class="from-inline">

  <div class="form-group">
    <label for="firstName" class="control-label" >First Name</label>
    <input type="text" class="form-control" ng-model="$ctrl.contact.fname" id="inputName" placeholder="First Name" required>
  </div>

  <div class="form-group">
    <label for="lastName" class="control-label">Last Name</label>
    <input type="text" class="form-control" ng-model="$ctrl.contact.lname" id="inputName" placeholder="Last Name" required>
  </div>

  <div class="form-group">
    <label for="inputEmail" class="control-label">Email</label>
    <input type="email" class="form-control" ng-model="$ctrl.contact.email" id="inputEmail" placeholder="Email" data-error="Invalid Email" required>
    <div class="help-block with-errors"></div>
  </div>


  <div class="form-group">
    <label for="inputPhone" class="control-label">Phone Number</label>
    <input type= "number"  class="form-control" ng-model="$ctrl.contact.phone" placeholder="Phone Number" required>
    <div class="help-block with-errors"></div>
  </div>

  <div class="form-group">
    <label for="inputPhone" class="control-label">Address</label>
    <input type= "text"  class="form-control" ng-model="$ctrl.contact.street" placeholder="Street" required>
    <input type= "text"  class="form-control" ng-model="$ctrl.contact.city" placeholder="City" required>


      <button class="btn btn-info  dropdown-toggle" type="button" data-toggle="dropdown">State: {{$ctrl.contact.state}}
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li ng-repeat="state in $ctrl.stateList"><a ng-click="$ctrl.stateSelected(state)" href="#">{{state.abbreviation}}</a></li>
      </ul>



    <input type= "number"  class="form-control" ng-model="$ctrl.contact.zip" placeholder="Zip" required>
    <div class="help-block with-errors"></div>
  </div>

  
</form>
</div>
</div>
`,
bindings : {
  contact : "="
}

});