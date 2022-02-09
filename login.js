function save() {
    var user = document.getElementById("user").value
    var pass = document.getElementById("password").value
    var u = 0
    var l = 0
    var d = 0
    var s = 0
    for (i of pass) {
        if (i.toUpperCase()) {
            u = 1
        }
        if (i.toLowerCase()) {
            l = 1
        }
        if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
            d = 1
        }
        if (i==="@" || i==="#" || i==="*"|| i==="%"||i==="!"||i==="&"||i==="$") {
            s = 1
        }
    }
    t = u + l + d + s
    console.log(t)
    
    if (user === "") {
        alert("Username must be given!")
    }
    if (pass === "") {
        alert("Password must be given!")
    }
    if (t != 4) {
        alert("pls atleast 1 capital,1 small,1 special or digits")
    }
    else if (document.getElementById("user").value != "" && document.getElementById("password").value!= "" && t===4) {
        alert("Submitted!")
    }
}
