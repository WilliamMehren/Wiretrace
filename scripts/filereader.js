var filedata
var isLoaded = false
function getFile(input){
    var reader = new FileReader();
    reader.addEventListener('load', (event) => {
        filedata = JSON.parse(reader.result);
        isLoaded = true
        var html = ""
        console.log(filedata)
        filedata["ips"].forEach(ip => {
          var place =  getCityCountryFromIp(ip)
          var coords = getLocationFromIp(ip)
          html += `<tr><td>${ip}</td><td>${place}</td><td>${coords}</td></tr>`
          L.marker([coords[0],coords[1]]).addTo(map);
        });
        document.getElementById("data").innerHTML = "<tr><th>IP</th><th>location</th><th>coordinates</th></tr>"+ html
      });
      filedata = reader.readAsText(input.files[0]);
      
    }
