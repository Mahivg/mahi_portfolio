$(document).ready(function(jQuery){
    /* Nav_menu Toggle */
    var toggleMenu = function(){
        $(".menu").toggleClass("active");
        $(".menu-bar i").toggleClass("active");
    };
    $(".menu-bar").click(toggleMenu);
    $(".navbar .menu li a").click(toggleMenu);

    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }else {
            $(".navbar").removeClass("sticky");
        }
    });

    $('downloadBtn').click(function(e){
        e.preventDefault();
        window.location.href = "./dist/Magesh.V.G_CV.docx"
    });
});