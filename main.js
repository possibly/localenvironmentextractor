function getCleanWordBank(){
  var wordBank = document.getElementById('wordBank').value;
  var cleanWordBankArray = wordBank.split('\n').map( x => x.trim() );
  return cleanWordBankArray;
}

function getCleanSearchString(){
  var searchString = document.getElementById('searchString').value;
  return searchString.trim();
}

function putLocalEnvironment(){
  localEnvironments = []; //reset the local environment.
  var bank = getCleanWordBank();
  var searchString = getCleanSearchString();
  getLocalEnvironments(bank, searchString)
  console.log(localEnvironments);
  document.getElementById('output').value = localEnvironments.join('\r\n');
}