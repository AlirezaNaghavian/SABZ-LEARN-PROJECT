const svgTemplete = document.createElement("template");
svgTemplete.innerHTML = `
<link rel="stylesheet" href="./assests/css/main-page/app.css" />

`
class svgs extends HTMLElement {
     constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(svgTemplete.content.cloneNode(true));

     }
}
export{svgs}