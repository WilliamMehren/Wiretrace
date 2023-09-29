var filedata
var isLoaded = false
async function getFile(input){
    var reader = new FileReader();
    reader.addEventListener('load', (event) => {
        filedata = JSON.parse(reader.result);
        isLoaded = true
        var html = ""
        console.log(filedata)
        filedata["ips"].forEach(ip => {
        var place =  getCityCountryFromIp(ip)
        var coords = getLocationFromIp(ip)
        html += `<tr><td>${ip}</td><td>${place}</td><td><button onclick="map.setView(${coords})">${coords}</button></td></tr>`
        });
        document.getElementById("data").innerHTML = "<tr><th>IP</th><th>location</th><th>coordinates</th></tr>"+ html
      });
      filedata = reader.readAsText(input.files[0]);
      
    }
