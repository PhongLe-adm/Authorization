function check(){
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
    let note = document.getElementById("note");
    const checkcode = "F451";
    // checkcode is the password of eacher individual [CHANGEABLE]
    console.log(password,message);

// in this section, function should behave as followed: Enter password and click "submit" | if correct -> redirect user to next page | if incorrect -> user are given loop chance to try until correct
// program this so when use presses "enter", it submits
    if(password.length != 0){
        if(password == checkcode){
            message.textContent = "Password match!";
            message.style.backgroundColor = "#3ae374";
            note.textContent = "Welcome! Please proceed.";
            window.location.replace("https://sites.google.com/view/esolibra/study-content/phong-le/private-views-phong");
        }
        else{
            message.textContent = "Password not match!";
            message.style.backgroundColor = "#ff4d4d";
            note.textContent = "Please try again";
        }
    }
    else{
        alert("Password empty, enter input a passcode.")
        message.textContent = "";
    }
    
}
