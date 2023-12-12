// var arr1 =[320 , 230 , 480 , 120];
//question no 13 

var studentScores = [85, 92, 78, 95, 88];

// Display original array
document.write("<p>Original Scores: " + studentScores.join(", ") + "</p>");

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// // Display sorted array
document.write("<p>Sorted Scores (Ascending): " + studentScores.join(", ") + "</p>");


