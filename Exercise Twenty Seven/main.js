function getUserData(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const succes = false;
            if(succes){
                resolve({id: 550, name: "Hanad", class: "BCS-5"})
            } else{
                reject("Failed Fetching User Data");
            }
        },2000)
    })
}
getUserData()
    .then((data) => console.log("User Data:",data))
    .catch((err) => console.log(err));