var malt_type;
var malt_data;

export function json_handler(type, data){
    malt_type = type;
    malt_data = data;

    functions[type] && functions[type]();
}

const functions = {
    SQL: function SQL(){
        console.log(malt_type + malt_data);
    }
};