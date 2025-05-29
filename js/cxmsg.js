class Cxmsg{


  constructor(){
    this.destino=document.body
  }

  mostrar=(titulo,texto,link)=>{
    this.titulo=titulo
    this.texto=texto
    this.link=link
    this.divMsg=document.createElement("div")
      const estiloDivMsg=
      "display:flex;"+
      "justify-content:center;"+
      "align-items:center;"+
      "position:fixed;"+
      "top:0px;"+
      "left:0px;"+
      "width:100%;"+
      "height:100vh;"+
      "z-index:3;"+
      "background-color:rgba(63, 61, 61, 0.7);"
    this.divMsg.setAttribute("style",estiloDivMsg)
    this.divMsg.setAttribute("id","divMsg")
    this.destino.prepend(this.divMsg)

    

    const divInteriorMsg=document.createElement("div")
      const estiloDivInteriorMsg=
      "display:flex;"+
      "justify-content:flex-start;"+
      "align-items:flex-start;"+
      "flex-direction:column;"+
      "background-color:rgb(255, 255, 255);"+
      "border-radius:20px;"+
      "width:700px;"; 
    divInteriorMsg.setAttribute("style",estiloDivInteriorMsg)
    divInteriorMsg.setAttribute("id","cxmsgDdentro")
    this.divMsg.appendChild(divInteriorMsg)
    if (window.innerWidth <= 450) {
    divInteriorMsg.style.fontSize="12px"
    divInteriorMsg.style.width="340px"
    
  }

    const TituloMsg=document.createElement("div")
      const estiloTituloMsg=
      "display:flex;"+
      "justify-content:center;"+
      "align-items:center;"+
      "background-color:rgb(86, 88, 228);"+
      "color:#fff;"+
      "border-radius:12px 12px 0px 0px;"+
      "padding:5px;"+
      "width:100%;"+
      "background-image:url(../assets/img/bacgraundi.svg);"+
      "background-image:url(../assets/img/bacgraundi.svg);"+
      "background-size: cover;"
    TituloMsg.setAttribute("style",estiloTituloMsg)
    TituloMsg.setAttribute("class","estiloTituloMsg")
    TituloMsg.innerHTML=this.titulo
    divInteriorMsg.appendChild(TituloMsg)

    const corpoMsg=document.createElement("div")
    const estiloCorpoMsg=
    "display:flex;"+
    "flex-wrap:wrap;"+
    "justify-content:flex-start;"+
    "align-items:center;"+
    "width:100%;"+
    "background-color:#eee;"+
    "color:#000;"+
    "padding:30px 60px 30px 60px"
    corpoMsg.setAttribute("style",estiloCorpoMsg)
    corpoMsg.innerHTML=this.texto
    divInteriorMsg.appendChild(corpoMsg)
    if (window.innerWidth <= 380) {
    divInteriorMsg.style.fontSize="12px"
    divInteriorMsg.style.width="350px"
    corpoMsg.style.padding = "8px 8px 8px 8px"
  }
    
    const footer=document.createElement("div")
    const estiloFooter=
      "display:flex;"+
      "gap:150px;"+
      "justify-content:center;"+
      "align-items:center;"+
      "background-image:url(../assets/img/bacgraundi.svg);"+
      "background-size: cover;"+
      "background-position: center center;"+
      "color:#fff;"+
      "border-radius:0px 0px 5px 5px;"+
      "padding:5px;"+
      "width:100%;"+
      "height:60px;"
    footer.setAttribute("style",estiloFooter)
    divInteriorMsg.appendChild(footer)

    const butSair=document.createElement("button")
    const estilobutSair=
    "color:rgb(20, 20, 20);"+
    "width:100px;"+
    "border-radius:15px;"+
    "font-weight:bold;"+
    "padding:8px;"+
    "cursor:pointer"
    butSair.setAttribute("style",estilobutSair)
    butSair.innerHTML="voltar"
    footer.appendChild(butSair)
    butSair.addEventListener("click",()=>{
      this.divMsg.remove()
    })


    const butVisitar=document.createElement("button")
    const estiloButton=
    "color:rgb(20, 20, 20);"+
    "width:100px;"+
    "border-radius:15px;"+
    "font-weight:bold;"+
    "padding:8px;"+
    "cursor:pointer"
    butVisitar.setAttribute("style",estiloButton)
    butVisitar.innerHTML="visitar o site"
    footer.appendChild(butVisitar)
    butVisitar.addEventListener("click",()=>{
      window.open(this.link, "_blank")
    })

  }

  

    
    
}