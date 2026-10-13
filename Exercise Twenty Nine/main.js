// Fetching Data 
async function fetchData(){
    console.log("Start Fetching Data")
    const respone = await fetch('./data.json');
    const data = await respone.json();
    console.log("Response: ", data);
}
fetchData();