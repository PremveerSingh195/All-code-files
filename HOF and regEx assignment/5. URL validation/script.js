const url = "gmailcom"


const regExone = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

if (regExone.test(url)) {
    console.log("URL is valid");
}else{
    console.log("URL is not valid");
}

