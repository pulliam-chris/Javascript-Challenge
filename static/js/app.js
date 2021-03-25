// from data.js
var tableData = data;

console.log(tableData);

// Use D3 to select the table body
let tbody = d3.select("tbody");

// Use D3 to select the table
let table = d3.select("ufo-table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Iterate through each ufo encounter in list
tableData.forEach((encounter) => {
  
  // Append one table row per ufo encounter
  let row = tbody.append("tr");

  // Iterate through encounter array to build data
  Object.values(encounter).forEach(value => {
    let cell = row.append("td");
         cell.text(value);
       });

});

