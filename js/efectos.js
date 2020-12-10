$(document).ready(function(){

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            top:'0'
        }, 500 + (index * 500));
    });

    //Efecto Header
    if( $(window).width() > 800 ) {
        $('header .textos').css({
            'opacity': 0,
            'margin-top':0
        });

        $('header .textos').animate({
            'opacity': 1,
            'margin-top':'-52px'
        }, 1500);
    }

    //Efecto de escrito
    var typed = new Typed(".typed", {
        strings:[", y otra, y otra...."],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
    });

    //Scroll automatico
    var acercaDe = $('#acerca-de').offset().top - 150;
    var menu = $('#menu').offset().top + 500;
    var galeria = $('#galeria').offset().top;
    var ubicacion = $('#ubicacion').offset().top + 162.5;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 1000);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 1500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 1500);
    });

    // Modales

    // Primera foto
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    img.onclick = function (){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function (){
        modal.style.display = "none";
    }

    // Segunda foto
    var modal2 = document.getElementById("myModal2");
    var img2 = document.getElementById("myImg2");
    var modalImg2 = document.getElementById("img02");
    var captionText2 = document.getElementById("caption2");

    img2.onclick = function (){
        modal2.style.display = "block";
        modalImg2.src = this.src;
        captionText2.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[1];

    span.onclick = function (){
        modal2.style.display = "none";
    }

    // Tercera foto
    var modal3 = document.getElementById("myModal3");
    var img3 = document.getElementById("myImg3");
    var modalImg3 = document.getElementById("img03");
    var captionText3 = document.getElementById("caption3");

    img3.onclick = function (){
        modal3.style.display = "block";
        modalImg3.src = this.src;
        captionText3.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[2];

    span.onclick = function (){
        modal3.style.display = "none";
    }

    // Cuarta foto
    var modal4 = document.getElementById("myModal4");
    var img4 = document.getElementById("myImg4");
    var modalImg4 = document.getElementById("img04");
    var captionText4 = document.getElementById("caption4");

    img4.onclick = function (){
        modal4.style.display = "block";
        modalImg4.src = this.src;
        captionText4.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[3];

    span.onclick = function (){
        modal4.style.display = "none";
    }

    // Quinta foto
    var modal5 = document.getElementById("myModal5");
    var img5 = document.getElementById("myImg5");
    var modalImg5 = document.getElementById("img05");
    var captionText5 = document.getElementById("caption5");

    img5.onclick = function (){
        modal5.style.display = "block";
        modalImg5.src = this.src;
        captionText5.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[4];

    span.onclick = function (){
        modal5.style.display = "none";
    }

    // Sexta foto
    var modal6 = document.getElementById("myModal6");
    var img6 = document.getElementById("myImg6");
    var modalImg6 = document.getElementById("img06");
    var captionText6 = document.getElementById("caption6");

    img6.onclick = function (){
        modal6.style.display = "block";
        modalImg6.src = this.src;
        captionText6.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[5];

    span.onclick = function (){
        modal6.style.display = "none";
    }

    // Séptima foto
    var modal7 = document.getElementById("myModal7");
    var img7 = document.getElementById("myImg7");
    var modalImg7 = document.getElementById("img07");
    var captionText7 = document.getElementById("caption7");

    img7.onclick = function (){
        modal7.style.display = "block";
        modalImg7.src = this.src;
        captionText7.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[6];

    span.onclick = function (){
        modal7.style.display = "none";
    }

    // Octava foto
    var modal8 = document.getElementById("myModal8");
    var img8 = document.getElementById("myImg8");
    var modalImg8 = document.getElementById("img08");
    var captionText8 = document.getElementById("caption8");

    img8.onclick = function (){
        modal8.style.display = "block";
        modalImg8.src = this.src;
        captionText8.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[7];

    span.onclick = function (){
        modal8.style.display = "none";
    }

    // Novena foto
    var modal9 = document.getElementById("myModal9");
    var img9 = document.getElementById("myImg9");
    var modalImg9 = document.getElementById("img09");
    var captionText9 = document.getElementById("caption9");

    img9.onclick = function (){
        modal9.style.display = "block";
        modalImg9.src = this.src;
        captionText9.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[8];

    span.onclick = function (){
        modal9.style.display = "none";
    }

    // Décima foto
    var modal10 = document.getElementById("myModal10");
    var img10 = document.getElementById("myImg10");
    var modalImg10 = document.getElementById("img10");
    var captionText10 = document.getElementById("caption10");

    img10.onclick = function (){
        modal10.style.display = "block";
        modalImg10.src = this.src;
        captionText10.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[9];

    span.onclick = function (){
        modal10.style.display = "none";
    }

    // Undécima foto
    var modal11 = document.getElementById("myModal11");
    var img11 = document.getElementById("myImg11");
    var modalImg11 = document.getElementById("img11");
    var captionText11 = document.getElementById("caption11");

    img11.onclick = function (){
        modal11.style.display = "block";
        modalImg11.src = this.src;
        captionText11.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[10];

    span.onclick = function (){
        modal11.style.display = "none";
    }

    // Duodécima foto
    var modal12 = document.getElementById("myModal12");
    var img12 = document.getElementById("myImg12");
    var modalImg12 = document.getElementById("img12");
    var captionText12 = document.getElementById("caption12");

    img12.onclick = function (){
        modal12.style.display = "block";
        modalImg12.src = this.src;
        captionText12.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[11];

    span.onclick = function (){
        modal12.style.display = "none";
    }

});