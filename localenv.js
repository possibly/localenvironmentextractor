//['hello', 'dogs'], 'he' => ['#__l']. 
function getLocalEnvironments(wordsArray, searchString){
  relevantWords = wordsArray.filter( word => word.includes(searchString) );
  localEnvironments = relevantWords.map( word => {
    var beginningOfSearchCharacter = word.indexOf(searchString[0]);
    var endOfSearchCharacter = word.indexOf(searchString[searchString.length-1])
    var previous = word[beginningOfSearchCharacter-1];
    var after = word[endOfSearchCharacter+1];
    if (previous === undefined){ previous = '#'; }
    if (after === undefined){ after = '#'; }
    return previous+'_'+after;
  });
  console.log(localEnvironments);
}