document.getElementById("contactForm")
.addEventListener("submit", async function(event){

    event.preventDefault();

    const data = {
        name: event.target[0].value,
        email: event.target[1].value,
        message: event.target[2].value
    };

    const response = await fetch("http://localhost:5000/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("message")
    .innerText = result.message;
});