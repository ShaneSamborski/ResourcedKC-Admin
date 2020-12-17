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
    
    if (response.status != 200) {
      throw Error("Error!");
    }
    
    return node;
  }