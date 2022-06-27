function newRepo(name) {
  let addRepo = document.createElement("li");
  let textNode = document.createTextNode(name);
  addRepo.appendChild(textNode);
  document.getElementById("list").appendChild(addRepo);
}

let gitHub = new XMLHttpRequest(); 
gitHub.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) { 
    let oneObj = JSON.parse(this.responseText);
    for(let i = 0; i < oneObj.length; i++) {
      newRepo(oneObj[i].name); 
    }
  }
};
gitHub.open("GET", "https://api.github.com/users/johnnyvalor/repos", true);
gitHub.send();