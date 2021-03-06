function createScope(parent, stdout) {
  var scope = { __parent__: parent};

  scope["اطبع"] = function log (_, data){
      console.log(data);
      if (stdout) {
        stdout(data);
      }
  };
  return scope;
}


function setInScope(scope, key, val) {
  scope[key] = val;
  return;
}


function getFromScope(scope, key) {
  if (key in scope) {
    return scope[key];
  } else if ( !scope.__parent__) {
    return scope.__parent__[key];
  }
}


module.exports.createScope = createScope;
module.exports.setInScope = setInScope;
module.exports.getFromScope = getFromScope;
