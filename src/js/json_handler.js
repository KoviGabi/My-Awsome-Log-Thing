var malt_type;
var malt_data;

export function json_handler(type, data){
    malt_type = type.toUpperCase();
    malt_data = data;

    functions[type.toUpperCase()] && functions[type.toUpperCase()]();
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
    }
};

//Külön JS-be kéne később
function LogWriter() {
    var p = document.createElement("P");
    p.className = malt_type;
    console.log(p.className);
    p.innerHTML = (malt_type + ": " + malt_data);
    document.body.appendChild(p);
}