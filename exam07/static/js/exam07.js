document.addEventListener("DOMContentLoaded",()=>{
    const bt = document.querySelector("#bt");
    const touchcell = document.querySelectorAll(".cell");
    let bombpos;
    let flag = 0;

    bt.addEventListener("click",()=>{
        bombpos = bomb();        
        flag = 1;
    })

    touchcell.forEach( (item) => {
        item.addEventListener("click", ()=>{
            if( flag != 1){
                alert("폭탄을 먼저 섞으세요");
            }
            else{
                if(+item.textContent === bombpos){
                    item.innerHTML = `<img src='./static/images/boom.png'>`
                    console.log(+item.textContent);
                    const bombtext = document.querySelector(".bombtext");
                    bombtext.innerHTML = "<p class=tracking-in-expand-fwd-bottom>BOMB!</p>"
                    const restart = document.querySelector(".restart");
                    restart.innerHTML = "<button class=resbt>Restart?</button>"
                    let res = document.querySelector(".resbt");
                    let cnt = 1;
                    bt.disabled = true;
                    res.addEventListener("click", ()=>{
                        touchcell.forEach( (item) => {
                            console.log(item);
                            item.textContent = cnt;
                            cnt ++;
                        })
                        bombtext.textContent = "";
                        cnt = 0;
                        flag = 0;
                        bt.disabled = false;
                        bombpos = bomb();
                    })
                }
                else{
                    item.innerHTML = `<img src='./static/images/hart.png'>`
                    console.log(+item.textContent);
                }
            }
        })
    })



})

function bomb(){
    let n = Math.floor(Math.random() * 9 +1) ;
    return n;
}