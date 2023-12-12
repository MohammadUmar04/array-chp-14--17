//question no 15
        // Initialize array with city names
        var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

        // Display original array
        document.write("<p>Original Cities: " + cities.join(", ") + "</p>");

        // Copy 3 array elements to selectedCities array
        var selectedCities = cities.slice(1, 4); // Copy elements at index 1, 2, and 3
        document.write("<p>Selected Cities: " + selectedCities.join(", ") + "</p>");
