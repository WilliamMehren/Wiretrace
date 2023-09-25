function getCityCountryFromIp(ip) {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://ipapi.co/' + ip + '/json/', false);  // false for synchronous request
    request.send();
    
    if (request.status === 200) {
      var response = JSON.parse(request.responseText);
      return response.city + ', ' + response.country_name;
    } else {
      return 'Drammen , Norway';
    }
  }