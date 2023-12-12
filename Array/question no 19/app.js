//question no 19

// Array of phone manufacturers
const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Function to generate and display the dropdown/select menu
  // Start building the HTML string
  let htmlString = '<select id="manufacturerDropdown">';

  // Iterate through the array and add options to the dropdown
  phoneManufacturers.forEach(manufacturer => {
    htmlString += `<option value="${manufacturer}">${manufacturer}</option>`;
  });

  // Close the select tag
  htmlString += '</select>';

  // Display the dropdown in the browser using document.write()
  document.write(htmlString);


