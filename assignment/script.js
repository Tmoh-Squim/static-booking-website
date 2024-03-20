
function sidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display="none"
}
const fas = document.getElementById("fas")
fas.addEventListener('click',()=>{
    console.log('first');
    
    var sidebar = document.getElementById("sidebar");
    sidebar.style.display="block"
})