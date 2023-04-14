const secureEmails = ["tutanota.com","proton.me","privatemail.com","anonaddy.me","countermail.com", "mailfence.com","librem.one","mailbox.org","runbox.com","startmail.com","posteo.net","posteo.eu","posteo.me","posteo.mx","posteo.org","posteo.co","r1.rpost.net","rpost.com","rpost.net","hushmail.com","servermx.com","sharklasers.com","guerrillamail.info","grr.la","guerrillamail.biz","spam4.me","pokemail.net","guerrillamailblock.com","guerrillamail.org","guerrillamail.com","guerrillamail.net","guerrillamail.de"];
const secureSocial = [];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
const uppercase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];

/* from here code */

var meter = {email:0,accounts:0,social:0,strength:0,general:0,tip:0};

function passwordCheck(password){

    meter.strength = outputStrength;
}

function socialCheck(socialList){

    meter.social = outputSocial;
}

function getAccounts(nickname){

    meter.accounts = outputAccounts;
}

function securityMeter(socialList,passwordRate,mailRate){

    meter.general = outputGeneral;
}

function helper(socialList,passwordRate,mailRate){

    meter.tip = outputTip;
}

function mailCheck(mail){

    meter.email = outputMail;
}
