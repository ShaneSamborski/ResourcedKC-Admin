async function submitResource() {
    let node = {
        name : document.getElementById('orgName').value,
        description : document.getElementById("services").value,
        phone : document.getElementById("number").value,
        email : document.getElementById("email").value,
        website : document.getElementById("website").value
    };

  
    let requestOptions = {
      method: "POST",
      body: JSON.stringify(node),
      headers: { "Content-Type": "application/json" },
    };
    alert('You have added in your organizations information');
    window.location.href = 'index.html';
    const response = await fetch("/resources", requestOptions);
    
    if (res.status != 200) {
      throw Error("Error!");
    }
    
    return node;
  }


  async function createAcct() {
    let creation = {
      emailAddress : document.getElementById('emailCreate').value,
      username : document.getElementById('usernameCreate').value,
      password : document.getElementById('passwordCreate').value
    };
  
    let requestOptions = {
      method: "POST",
      body: JSON.stringify(creation),
      headers: { "Content-Type": "application/json" },
    };
    alert("Your account has been created!");
    window.location.href = 'index.html';
    const response = await fetch("/creation", requestOptions);
    
    if (response.status != 200) {
      throw Error("Error!");
    }
    
    return creation;
  }

  async function getAccount(){
    let requestOptions = {
        method: "GET",
        headers : { "Content-Type": "application/json"} 
    }

    const response = await fetch("/account", requestOptions); 
    const body = await response.json(); 
    if(response.status != 200){
        throw Error("Error!"); 
    }

    return body; 

}