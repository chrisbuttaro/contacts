var app = angular.module("contacts");

app.component('formComponent', {
  controller:function() {
    var vm=this;
},

  template :`
<form data-toggle="validator" role="form">

  <div class="form-group">
    <label for="firstName" class="control-label">First Name</label>
    <input type="text" class="form-control" id="inputName" placeholder="First Name" required>
  </div>

  <div class="form-group">
    <label for="lastName" class="control-label">Last Name</label>
    <input type="text" class="form-control" id="inputName" placeholder="Last Name" required>
  </div>

  <div class="form-group">
    <label for="inputEmail" class="control-label">Email</label>
    <input type="email" class="form-control" id="inputEmail" placeholder="Email" data-error="Invalid Email" required>
    <div class="help-block with-errors"></div>
  </div>


  <div class="form-group">
    <label for="inputPhone" class="control-label">Phone Number</label>
    <input type= "number"  class="form-control" placeholder="Phone Number" required>
    <div class="help-block with-errors"></div>
  </div>

  <div class="form-group">
    <label for="inputPhone" class="control-label">Address</label>
    <input type= "text"  class="form-control" placeholder="Street" required>
    <input type= "text"  class="form-control" placeholder="City" required>

    <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
    </ul>
    </div>



    <input type= "number"  class="form-control" placeholder="Zip" required>
    <div class="help-block with-errors"></div>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>

</form>`


});
