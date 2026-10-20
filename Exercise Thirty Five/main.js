function changeImage(){
    const image = document.querySelector('#image')

    const url = prompt("Enter Image URL");
    const borderColor = prompt("Enter Border Color");
    const width = prompt("Enter Width [In Pixels]");
    const height = prompt("Enter height [In Pixels]");
    const borderRadius = prompt("Enter Border Radius [In Pixels]");


   
    image.setAttribute('src', url);
    image.style.border = `5px solid, ${borderColor}`;
    image.style.width = `${width}`;
    image.style.height = `${height}`;
    image.style.borderRadius = `${borderRadius}`;
    image.style.padding = "15px";
    
}