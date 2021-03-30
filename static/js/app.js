// from data.js
var tableData = data,
    button = d3.select("#filter-btn"),
    form = d3.select("#filter list-group-item");

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

  // Get the value property of the input element
  let inputElement = d3.select("#datetime");
  inputValue = inputElement.property("value");

  let inputCity = d3.select("#city");
  cityValue = inputCity.property("value");
  
  let inputState = d3.select("#state");
  stateValue = inputState.property("value");

  let inputCountry = d3.select("#country");
  countryValue = inputCountry.property("value");

  let inputShape = d3.select("#shape");
  shapeValue = inputShape.property("value");

  // Filter data based on input values  
  let filteredData = tableData;
  
  // Only attempt to filter if a value was input
  if (inputValue !== "") {
    filteredData = filteredData.filter(encounter => encounter.datetime === inputValue);
  }

  if (cityValue !== "") {
    filteredData = filteredData.filter(encounter => encounter.city === cityValue);
  }

  if (stateValue !== "") {
    filteredData = filteredData.filter(encounter => encounter.state === stateValue);
  }

  if (countryValue !== "") {
    filteredData = filteredData.filter(encounter => encounter.country === countryValue);
  }

  if (shapeValue !== "") {
    filteredData = filteredData.filter(encounter => encounter.shape === shapeValue);
  }
  
  // Use D3 to select the table
  d3.select("ufo-table");
  
  // Purge the existing rows to be replaced by filtered data
  d3.select("tbody").selectAll("tr").remove();
  
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

