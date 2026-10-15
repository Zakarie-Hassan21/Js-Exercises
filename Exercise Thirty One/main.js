// GET Method
async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error("Failed To Fetch Data");
        }
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}
fetchData();