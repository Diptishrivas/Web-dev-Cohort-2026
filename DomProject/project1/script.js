async function loadImages() {
    
    const res = await fetch ("https://picsum.photos/v2/list?page=1&limit=10")

    const data = await res.json();

    const gallery = document.getElementById("gallery");

    gallery.innerHTML = "";

    data.forEach(img =>{
        const image = document.createElement("img");

        image.src = img.download_url;

        gallery.appendChild(image);
    });
}