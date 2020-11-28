var malt_type;
var malt_data;
var isSomething;

export function json_handler(type, data){
    malt_type = type.toUpperCase();
    malt_data = data;

    if (!functions[type.toUpperCase()]) {
        isSomething = true;
        functions["SOMETHING"] && functions["SOMETHING"]();
        return;
    } 
    else {
        isSomething = false;
        functions[type.toUpperCase()] && functions[type.toUpperCase()]();
    }
}

const functions = {
    SQL: function SQL(){
        console.log(malt_type + ": " + malt_data);
        LogWriter();
    },
    ERROR: function ERROR(){
        console.log(malt_type + ": " + malt_data);
        LogWriter();
    },
    EXCEPTION: function EXCEPTION(){
        console.log(malt_type + ":" + malt_data);
        LogWriter();
    },
    LOG: function LOG(){
        console.log(malt_type + ": " + malt_data);
        LogWriter();
    },
    SOMETHING: function SOMETHING(){
        console.log(malt_type + ": " + malt_data);
        LogWriter();
    }
};

//Külön JS-be kéne később
function LogWriter() {
    var p = document.createElement("P");
    if (isSomething == false) {
        p.className = malt_type;
    } 
    else {
        p.className = "SOMETHING";
    }    
    p.innerHTML = (malt_type + ": " + malt_data);
    document.body.appendChild(p);
}