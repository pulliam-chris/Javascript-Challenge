// from data.js
var tableData = data,
    button = d3.select("#datetime"),
    form = d3.select("#filter list-group-item");

// console.log(tableData);

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

const filterTable = () => {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  // Get the value property of the input element
  let inputElement = d3.select("#datetime"),
  inputValue = inputElement.property("value");

  console.log(inputValue);
  
  let filteredData = tableData.filter(encounter => encounter.datetime === inputValue);

 //console.log(filteredData);

  // Use D3 to select the table body
  let tbody = d3.select("tbody");

  // Use D3 to select the table
  let table = d3.select("ufo-table");

  // Use D3 to set the table class to `table table-striped`
  table.attr("class", "table table-striped");

  // Iterate through each ufo encounter in list
  filteredData.forEach((encounter) => {
  
    // Append one table row per ufo encounter
    let row = tbody.append("tr");

    // Iterate through encounter array to build data
    Object.values(encounter).forEach(value => {
      let cell = row.append("td");
           cell.text(value);
          });
  });

};

//Create event handlers
button.on("click", filterTable);
form.on("Filter Table", filterTable);
