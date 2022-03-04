'use strict';

//Creating table for results page
let scoreTable = document.getElementById('score-table');



////SCORE TABLE///
function renderHeader(){
  let tableHeader1 = document.createElement('th');
  let tableHeader2 = document.createElement('th');
  let tableRow = document.createElement('tr');
  
  tableHeader1.textContent = 'scores:';
  tableHeader2.textContent = 'Names:';
  scoreTable.appendChild(tableRow);
  tableRow.appendChild(tableHeader2);
  tableRow.appendChild(tableHeader1);
  
  // scoreTable.appendChild(tableHeader2);
  
  for(let i = 0; i < allScores.length; i++){
      let scoreIndex = allScores[i];
      let nameIndex = namesArray[i];
      
      let tableData1 = document.createElement('td');
      let tableHeader2 = document.createElement('td');
      let tableRow = document.createElement('tr');

      tableData1.textContent = scoreIndex;
      tableHeader2.textContent = nameIndex;
    
      scoreTable.appendChild(tableRow);
      tableRow.appendChild(tableHeader2);
      tableRow.appendChild(tableData1);
  } 
}
console.log(scoreTable)

renderHeader();