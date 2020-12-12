
        window.addEventListener("load", function () {
            const loader = document.querySelector(".loader");
            loader.className += " hidden";
        });


$(document).ready(function(){
    //event pada saat link di klik
    $(".page-scroll").on('click', function(event) {
      
      
        // ambil isi href
        var tujuan = $(this).attr('href');
        // tangkap elemen ybs
        var elemenTujuan = $(tujuan);
        
  
        // pindahkan scroll
        $('html, body').animate({
            scrollTop: $(elemenTujuan).offset().top - 60
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
  });

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	// navbar
	if( wScroll > 150) {
        $('.navbar').addClass('muncul1');
    } else {
        $('.navbar').removeClass('muncul1');   
    }

    // education
    if( wScroll > $('.education').offset().top -250) {
        $('.education .container').each(function(i) {
            setTimeout(function() {
                $('.education .container').eq(i).addClass('muncul2');
            }, 500 * i);
        });
    }

    // about
    if( wScroll > $('.about').offset().top -250) {
        $('.text1').addClass('text1x');
    } else {
        $('.text1').removeClass('text1x');   
    }

    // skill
    if( wScroll > $('.skill').offset().top -250) {
        $('.text2').addClass('text2x');
    } else {
        $('.text2').removeClass('text2x');   
    }
    if( wScroll > $('.skill').offset().top -250) {
        $('.p1').addClass('p1x');
    } else {
        $('.p1').removeClass('p1x');   
    }
    // Skill Bar
    if( wScroll > $('.skill').offset().top -250) {
        $('.pb1').addClass('count1');
    } else {
        $('.pb1').removeClass('count1');   
    }
    if( wScroll > $('.skill').offset().top -250) {
        $('.pb2').addClass('count2');
    } else {
        $('.pb2').removeClass('count2');   
    }
    if( wScroll > $('.skill').offset().top -250) {
        $('.pb3').addClass('count3');
    } else {
        $('.pb3').removeClass('count3');   
    }
    // portfolio
    if( wScroll > $('.portfolio').offset().top -250) {
        $('.portfolio .project-item').each(function(i) {
            setTimeout(function() {
                $('.portfolio .project-item').eq(i).addClass('muncul');
            }, 500 * i);
        });
    }

    
});