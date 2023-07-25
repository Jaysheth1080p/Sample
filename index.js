const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var password;

function generate(){
  var item = characters[Math.floor(Math.random()*characters.length)];
  return item;
}

function display(){
  password = generate() + generate()+ generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate()+generate();
  document.getElementById("password").innerHTML = password;
}

function copy(){
  // create a temporary input element
  var tempInput = document.createElement("input");
  tempInput.type = "text";
  tempInput.value = password;
  
  // add the element to the document
  document.body.appendChild(tempInput);
  
  // select the contents of the input element
  tempInput.select();
  
  // copy the selected contents to the clipboard
  document.execCommand("copy");
  
  // remove the temporary input element from the document
  document.body.removeChild(tempInput);
}