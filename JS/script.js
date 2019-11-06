    function verander1(){
    document.getElementById("Img2").style.display="none";
    document.getElementById("Img1").style.display="block";
}
    function verander2(){
    document.getElementById("Img3").style.display="none";
    document.getElementById("Img2").style.display="block";
    }
    function verander3(){
        document.getElementById("Img1").style.display="none";
        document.getElementById("Img3").style.display="block";
    }
    datum= new Date()
    document.getElementById("vandaag").innerHTML = datum.getDate() + "-" + (datum.getMonth()+1)
          + "-" + datum.getFullYear();