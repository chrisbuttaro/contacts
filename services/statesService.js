app.factory('statesService', function(){
var service = {};


service.listStates=function(){
  STATES_LIST.states.forEach(function(state){
    state.abbreviation;
  })
}
return service;
});
