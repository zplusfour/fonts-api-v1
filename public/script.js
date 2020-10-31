const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    revealFonts();
});

function revealFonts(){
    const xhr = new XMLHttpRequest();
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDm1kqAz79-hJJmiwP84zJYMSg6KN2fin8`;
    xhr.open('GET', url, true);


    xhr.onload = ()=>{
        const rawData = xhr.response;
        const data = JSON.parse(rawData);
        for(let i in data){
            const div = document.getElementById('font');
            const randomFont = Math.floor(Math.random() * 1008);
            //console.log(data.items[randomFont].files.italic);
            div.style.textAlign = "center";
            if(data.items[randomFont].files.italic === undefined){
                div.innerHTML = (`
                    <h2>${data.items[randomFont].family}.<i id="v">${data.items[randomFont].version}</i></h2>
                    <br>
                    <br>
                    <br>
                    <br>
                    CSS:
                        <div class="css">
                            font-family: '${data.items[randomFont].family}', ${data.items[randomFont].category}
                        </div>
                    <br>
                    <br>
                    View on google fonts: <a href="https://fonts.google.com/?selection.family=${data.items[randomFont].family}">https://fonts.google.com/?selection.family=${data.items[randomFont].family}</a>
                    <br>
                    <br>
                    <b>Download:</b>
                    <ul>
                        <li>Regular: <a href=${data.items[randomFont].files.regular}>${data.items[randomFont].files.regular}</a></li>
                    </ul>
                `);
            }else{
                div.innerHTML = (`
                    <h2>${data.items[randomFont].family}.<i id="v">${data.items[randomFont].version}</i></h2>
                    <br>
                    <br>
                    <br>
                    <br>
                    CSS:
                        <div class="css">
                            font-family: '${data.items[randomFont].family}', ${data.items[randomFont].category}
                        </div>
                    <br>
                    <br>
                    View on google fonts: <a href="https://fonts.google.com/?selection.family=${data.items[randomFont].family}">https://fonts.google.com/?selection.family=${data.items[randomFont].family}</a>
                    <br>
                    <br>
                    <b>Download:</b>
                    <ul>
                        <li>Regular: <a href=${data.items[randomFont].files.regular}>${data.items[randomFont].files.regular}</a></li>
                        <li>Italic: <a href=${data.items[randomFont].files.italic}>${data.items[randomFont].files.italic}</a></li>
                    </ul>
                `);
            }
        }
    }
    xhr.send();
}