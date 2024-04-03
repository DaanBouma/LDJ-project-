console.log("initializer loaded...")

function init(){
    showmenu(10);
    showitems(10);
}
function showitems(timeout) 
{
    setTimeout(() => {
        const items = document.querySelectorAll(".item");
        items.forEach(item => {
            item.style.transform = "translateY(0px)";
            item.style.opacity = "1"
        });
    }, timeout);
}

function showmenu(timeout)
{
    setTimeout(() => {
        const menu = document.getElementById("menu");
        menu.style.height = "200px";
    }, timeout);
}

init();