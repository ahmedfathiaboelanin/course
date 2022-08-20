document.getElementById("hamburger").onclick=function popright(){
    const side=document.getElementById("side");
    if(side.style.display=="none"){
    side.setAttribute("style","display:block; transition: .6s;");
    }
    else{
        side.setAttribute("style","display:none;");
    }
}
document.getElementById("contact1").onclick=function contact(){
    const contactdiv=document.getElementById("contact");
    if(contactdiv.style.display=="none"){
    contactdiv.setAttribute("style","display:block;");
    }
    else{
        contactdiv.setAttribute("style","display:none;");
    }
}