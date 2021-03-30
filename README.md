# Javascript-Challenge
Using Javascript and D3 to display and filter data

This project is enabled for GitHub Pages and the results can be reviewed at the following link:

https://pulliam-chris.github.io/Javascript-Challenge/

Primary files:
* app.js - Script that builds a HTML table out of the provided data and dynamically filters the results based on user input.
* data.js - Subset of UFO Encounter data packaged in key-value pairs.
* index.html - Provided homepage programmed using Bootstrap and linked to the Javascript files above.

### Notes

The table is created initially when the page loads or is refreshed to include all encounters.  Filtering can be done using one or more of the listed fields and then clicking the "Filter Table" button at the bottom.  If no filtering items are input the full results of the table are returned.  The filter function ```const filterTable = () =>``` uses D3 to select, remove and then rebuild the table based on the user input.