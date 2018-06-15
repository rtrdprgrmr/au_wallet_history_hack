var div = document.getElementById("tabcontent");
var dts = div.getElementsByTagName("dt");
for(var dt of dts){
    var imgs = dt.getElementsByTagName("img");
    for(var img of imgs){
        var alt = img.getAttribute("alt");
        if(alt === "入金"){
            dt.setAttribute("style", "display: none;");
            break;
        }
    }
}
