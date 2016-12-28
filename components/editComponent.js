var app = angular.module("contacts");

app.component('editComponent', {

template: `
<br>
<br>
<div class="container-fluid">
<div class="row" >
<form class="from-inline">

  <div class="form-group">
    <label for="firstName" class="control-label" >First Name</label>
    <input type="text" class="form-control" ng-model="$ctrl.cont.fname" id="inputName" placeholder="First Name" required>
  </div>

  <div class="form-group">
    <label for="lastName" class="control-label">Last Name</label>
    <input type="text" class="form-control" ng-model="$ctrl.cont.lname" id="inputName" placeholder="Last Name" required>
  </div>

  <div class="form-group">
    <label for="inputEmail" class="control-label">Email</label>
    <input type="email" class="form-control" ng-model="$ctrl.cont.email" id="inputEmail" placeholder="Email" data-error="Invalid Email" required>
    <div class="help-block with-errors"></div>
  </div>


  <div class="form-group">
    <label for="inputPhone" class="control-label">Phone Number</label>
    <input type= "number"  class="form-control" ng-model="$ctrl.cont.phone" placeholder="Phone Number" required>
    <div class="help-block with-errors"></div>
  </div>

  <div class="form-group">
    <label for="inputPhone" class="control-label">Address</label>
    <input type= "text"  class="form-control" ng-model="$ctrl.cont.street" placeholder="Street" required>
    <input type= "text"  class="form-control" ng-model="$ctrl.cont.city" placeholder="City" required>

        <input type= "text"  class="form-control" ng-model="$ctrl.cont.state" placeholder="state" required>


    <input type= "number"  class="form-control" ng-model="$ctrl.cont.zip" placeholder="Zip" required>
    <div class="help-block with-errors"></div>
  </div>


</form>
</div>
</div>
`,
bindings : {
  cont : "="
}

});
