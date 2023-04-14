const secureEmails = ["tutanota.com","proton.me","privatemail.com","anonaddy.me","countermail.com", "mailfence.com","librem.one","mailbox.org","runbox.com","startmail.com","posteo.net","posteo.eu","posteo.me","posteo.mx","posteo.org","posteo.co","r1.rpost.net","rpost.com","rpost.net","hushmail.com","servermx.com","sharklasers.com","guerrillamail.info","grr.la","guerrillamail.biz","spam4.me","pokemail.net","guerrillamailblock.com","guerrillamail.org","guerrillamail.com","guerrillamail.net","guerrillamail.de"];
const secureSocial = [];
bad_pass_reg = /[0-9]/; 
decent_pass_reg =  /[a-z|A-Z|a-zA-Z]/;
good_pass_reg = /[a-zA-Z0-9]/; 
very_good_pass_reg = /[.]/; 
bad_pass_min = 0;
decent_pass_min = 6;
good_pass_min = 12;
very_good_pass_min = 18;

/* from here code */

var meter = {email:0,accounts:0,social:0,strength:0,general:0,tip:0};

function passwordCheck(password){
switch (password){
case bad_pass_reg :

case decent_pass_reg:

case good_pass_reg:

case very_good_pass_reg:
}
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
