console.log("Entro QR.js");

let imageqr = document.getElementById("imageqr");
const size = "200X200";
const qrText = "https://www.delorean.cl";

fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrText}`, {method: "GET"})

.then(data => {
    console.log(data.url);
    if(data.status == 200){
        imageqr.src = data.url;
    } else {
        //Imagen de error
    }
    
}).catch(error => console.log(error))

