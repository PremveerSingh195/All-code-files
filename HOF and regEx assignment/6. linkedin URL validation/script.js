const Linkedinurl = "https://www.in.com/in/premveer-singh-b6766017a/"


const regExone = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g

if (regExone.test(Linkedinurl)) {
    console.log("Valid Linkedin URL");
}else{
    console.log("Invalid linkedin URL");
}