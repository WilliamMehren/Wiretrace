var filedata
var isLoaded = false
function getFile(input){
    var reader = new FileReader();
    reader.addEventListener('load', (event) => {
        filedata = JSON.parse(reader.result);
        isLoaded = true
      });
      reader.readAsText(input.files[0]);
}
