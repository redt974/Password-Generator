let app = document.querySelector(".password-generator");
app.querySelector(".length input").addEventListener("input", function(){
    app.querySelector(".length span").innerText = app.querySelector(".length input").value;
});
app.querySelector("#generate-password").addEventListener("click", function(){
    let settings = {
        length:app.querySelector(".length input").value,
        numbers:app.querySelector(".settings #setting-number").checked,
        specialchars:app.querySelector(".settings #setting-specialchar").checked,
    };
    let specialCharsArr = ["@","#","$","€","%","^","&","*",".","_"];
    let password = "";
    for (let i=0; i <settings.length; i++ ){
        let r = Math.random();
        if(r > 0.8 && settings.numbers){
            password += Math.trunc(Math.random()*9);
        } else if (r > 0.5) {
            password += String.fromCharCode(Math.trunc(Math.random()*26)+65);
        } else {
            password += String.fromCharCode(Math.trunc(Math.random()*26)+97);
        }
        if(r > 0.8 && settings.specialchars){
            password += specialCharsArr[Math.trunc(Math.random()*specialCharsArr.length)];
            i++;
        }
        app.querySelector(".head .password").innerText = password
    }
})

app.querySelector("#copy-password").addEventListener("click", function(){
    let passwordText = app.querySelector(".head .password").innerText.trim(); 
    if (passwordText !== "") { 
        navigator.clipboard.writeText(passwordText).then(function() {
            let copyMessage = document.getElementById("copy-message");
            copyMessage.innerText = "Copied!";
            copyMessage.classList.add("show");
            setTimeout(function() {
                copyMessage.classList.remove("show");
            }, 1000); 
        }, function() {
            alert("Failed to copy password to clipboard.");
        });
    }
});



