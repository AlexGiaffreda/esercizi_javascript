let primitive = true;

let controllo = typeof(primitive);
switch(controllo){
    case "number" :
        console.log("number")
        break;
    case "boolean" :
        console.log("boolean")
        break;
    case "string" :
        console.log("string")
        break;
    default:
        console.log("default")
}