var app = angular.module("contacts");

app.component('formComponent', {
  controller:function(STATES_LIST, contactService) {
    var vm=this;
    vm.statesList=STATES_LIST.states;
    vm.createContact=contactService.createContact;
    vm.contact={};
},

  template :`
  <h2>Add Contact</h2>
<form data-toggle="validator" role="form">

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

    <div class="dropdown">
      <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">State
      <span class="caret"></span></button>
      <ul class="dropdown-menu" ng-model="$ctrl.contact.state">
        <li><a href="#" ng-repeat="state in $ctrl.statesList">{{state.abbreviation}}</a></li>
      </ul>
    </div>


    <input type= "number"  class="form-control" ng-model="$ctrl.contact.zip" placeholder="Zip" required>
    <div class="help-block with-errors"></div>
  </div>

  <div class="form-group">
    <button ng-click="$ctrl.createContact($ctrl.contact)" type="submit" class="btn btn-primary">Add Contact</button>
  </div>
</form>`

});
