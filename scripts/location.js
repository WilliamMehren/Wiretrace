// Define a function to get the city and country from an IP address
function getCityCountryFromIp(ip) {
    // Create a new XMLHttpRequest object
    var request = new XMLHttpRequest();
    
    // Open a GET request to the API endpoint with the provided IP address
    request.open('GET', 'https://ipapi.co/' + ip + '/json/', false);  // false for synchronous request
    
    // Send the request
    request.send();
    
    // Check if the request was successful (status code 200)
    if (request.status === 200) {
        // Parse the response as JSON
        var response = JSON.parse(request.responseText);
        
        // Return the city and country name from the response
        return response.city + ', ' + response.country_name;
    } else {
        // Return a default location string if the request fails
        return 'Drammen , Norway';
    }
}