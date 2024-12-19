let body=document.getElementsByTagName("body")
        const images = document.querySelectorAll('.images img');
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        let closebtn=document.querySelector("#close")
        images.forEach(image => {
            image.addEventListener("click", () => {
                modalImage.src = image.src; 
                modal.style.display = 'block'; 
                 modalImage.style.width = "600px"; 
                 document.body.style.backgroundColor = "grey";
                // document.body.style.opacity = "0.6";                        
            });
        });
        

closebtn.addEventListener("click",()=>{
    modal.style.display='none';
    document.body.style.backgroundColor = "";
    document.body.style.opacity = "1";
})
