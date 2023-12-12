//question no 12

// Initialize an array with color names
var colors = ['Red', 'Green', 'Blue'];
      
// Display the initial array
document.write('<p>Initial Array: ' + colors.join(',') + '</p>');
colors.shift();
        document.write("<p>After deleting the first color: " + colors.join(", ") + "</p>");

        // Delete the last color
        colors.pop();
        document.write("<p>After deleting the last color: " + colors.join(", ") + "</p>");

        // Ask user for index and color to add
        var addIndex = prompt("Enter the index where you want to add a color:");
        var addColor = prompt("Enter the color name you want to add:");
        colors.splice(addIndex, 0, addColor);
        document.write("<p>After adding color at index " + addIndex + ": " + colors.join(", ") + "</p>");

        // Ask user for index and number of colors to delete
        var deleteIndex = prompt("Enter the index from which you want to delete color(s):");
        var deleteCount = prompt("Enter the number of colors you want to delete:");
        colors.splice(deleteIndex, deleteCount);
        document.write("<p>After deleting " + deleteCount + " color(s) from index " + deleteIndex + ": " + colors.join(", ") + "</p>");
  
