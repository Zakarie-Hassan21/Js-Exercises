// Blocking 
function delayResult(){
    alert("Are You Ready?")
    return console.log("The Result Is Here!");
}
console.log("Sychronous - Blocking")
delayResult();

// Asynchronous - Non-Blocking 
function delayMessage(callback){
    setTimeout(() => {
        const message = "After 2 Sceonds"
        callback(message)
    }, 2000);
}
delayMessage((message) => {
    console.log(message);
})
console.log("Asychronous - Non-Blocking");