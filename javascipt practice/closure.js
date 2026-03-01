// function init(){
//     let name = "mOsilla";
//     function displayName 
// }

// init()


function makeFunc(){
    const name ="mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();


function startCompany(){
    function ca(name){
        return` name of your company is ${name}`
    }
    return ca
}

const getMeAcompany = startCompany()
const myCompanyName = getMeAcompany("Zomato")



//////////////////////////////////////////


function eternal(guest){

     const guestName = guest



    function zomato(){
        console.log(`Hi ${guestName}, from zomato`);
    }

    function blinkit(){
        console.log(`Hi$ ${guestName}, from blinkit`);
    }
    // zomato()
    // blinkit()

    return {
        zomato,
        blinkit,
    };
}

const hitesh =eternal("hitesh");
const Piyush =eternal("piyush");

hitesh.blinkit()



///////////////////////////
function eternal(guest){

     const guestName = guest
     let count = 0;


    function zomato(){
        console.log(`Hi ${guestName}, from zomato`);
    }


    function blinkit(){
        if(count == 1) return;
        console.log(`Hi$ ${guestName}, from blinkit`);
    }
    // zomato()
    // blinkit()

    return {
        zomato,
        blinkit,
    };
};

const hiteshsir = eternal("hiteshsir");
const Piyushsir = eternal("piyushsir");

hitesh.blinkit();
hitesh.blinkit();
hitesh.blinkit();


const cups = ["green", "blue", "red"]

cups.map



