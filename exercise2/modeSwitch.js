let isDark = false;

/* let checkNumber = 4; */

function switchModes(){
    
    if(isDark === true){
        console.log("I'm true");
        document.documentElement.style.setProperty("--col-01", "#e7c7d2")
        document.documentElement.style.setProperty("--col-02", "#1d1d1d")
        /* I've added the third colour to make sure all the texts are readable after colour changes */
        document.documentElement.style.setProperty("--col-05", "#1d1d1d")
        document.getElementById("modeButton").innerHTML = "Dark Mode";
        isDark = false;
    } else {
        console.log("I'm false");
        document.documentElement.style.setProperty("--col-01", "#1d1d1d")
        document.documentElement.style.setProperty("--col-02", "#e7c7d2")
        document.documentElement.style.setProperty("--col-05", "rgb(231, 220, 220)")
        document.getElementById("modeButton").innerHTML = "Light Mode";
        isDark = true;
    }
}


