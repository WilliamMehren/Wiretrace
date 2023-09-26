function getFile(input){
    var reader = new FileReader();
    reader.addEventListener('load', (event) => {
        console.log(JSON.parse(reader.result));
      });
      reader.readAsText(input.files[0]);
}