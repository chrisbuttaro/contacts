app.factory('statesService', function(STATES_LIST){
var service = {};


service.listStates=function(){
  STATES_LIST.states.forEach(function(state){
    state.abbreviation;
  })
}
return service;
});
