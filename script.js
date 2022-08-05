
var arr = ["Zeeshan", "Faizan", "Abdul Hadi", "Abeeha", "Janam", "joe", "Atiya", "Aiyza", "Tanees", "Fajjar", "javeria"];

for(var i=0; i<arr.length; i++ ){

    if(arr[i].charAt(0)==='J' || arr[i].charAt(0)==='j'){
        console.log("Goodbye "+ arr[i])
    }
    else{
        console.log("Hello "+ arr[i])
    }
}