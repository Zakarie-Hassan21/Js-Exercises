function getUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = true;
            if (success){
                resolve({id: 550, name: "Hanad", class: "BCS-5"});
            }else {
                reject("Failed To Get User Data")
            }
        }, 2000)
    })
}

async function displayUserData() {
    try{
        const user = await getUserData();
        console.log(user)
    } catch(err){
        console.log(err)
    }
}
displayUserData();