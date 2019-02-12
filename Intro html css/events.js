
        var title = document.getElementById('mTitle');
        var header = document.getElementById('mHeader');
        var image = document.getElementById('imageView');
        var prod = document.getElementById('prod');
        var cont = document.getElementById('cont');
        var abt = document.getElementById('abt');

        /*var src = document.createElement("img");
        src.setAttribute('alt','meme');
        src.setAttribute('height','300px');
        src.setAttribute('width','300px');
        src.setAttribute('src',"pics/I.jpg");
        image.appendChild(src); */

        prod.addEventListener('click',e=>{
            title.innerText = "RemoSoft -Products";
            header.innerText = "Products";
            image.setAttribute('src',"pics/b.jpg");
        });
        
        cont.addEventListener('click',e=>{
            title.innerText = "RemoSoft -Contacts";
            header.innerText = "Contacts";
            image.setAttribute('src',"pics/l.jpg");
        });
        
        abt.addEventListener('click',e=>{
            title.innerText = "RemoSoft -About";
            header.innerText = "About";
            image.setAttribute('src',"pics/IMG_0524.jpg");
        });