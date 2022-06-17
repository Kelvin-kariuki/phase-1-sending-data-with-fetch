// Add your code here
function submitData(name,email) {
    const users ={name:name, email: email}
    return fetch('http://localhost:3000/users',{
        method: "POST",
        Headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(users)

    })
    .then(resp => resp.json())
    .then(data => {document.body.innerHTML = data.id})
    //     method: "POST",
    //     Headers: {
    //         "Content-Type":"application/json",
    //     Accept: "application/json",
    // },
    //     body: JSON.stringify()
    // })
    // .then(resp => resp.json())
    // .then(data => {document.innerHTML = data.id})
    .catch(error => {
        document.body.innerHTML = error.message;
        alert("Invalid name or email");
    });


}

// The program accepts username and email

submitData("Kelvin","kelvin@gmail.com");
