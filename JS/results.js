'use strict'
let scoreTable = document.getElementById('score-table');

// if (retrievedScore){
//   allScores = parsedScore;
// }

////TABLE///
function renderHeader(){
  let tableHeader = document.createElement('th');
  let tableRow = document.createElement('tr');

  scoreTable.appendChild(tableHeader);
  tableHeader.appendChild(tableRow);

  tableHeader.textContent = 'scores:';

  for(let i=0; i < allScores.length; i++){
      let scoreIndex = allScores[i];
      let scoreValue = document.createElement('th');
      scoreValue.textContent = scoreIndex;
      tableHeader.appendChild(scoreValue);
  }

  
}

renderHeader();