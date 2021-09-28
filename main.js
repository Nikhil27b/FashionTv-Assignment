$(".navbar_button").click(function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
        $("#bar1,#bar2,#bar2b,#bar3,.round_nav").removeClass("open");

        $('.nav_content').fadeOut(100)


    } else {
        $(this).addClass("clicked");
        $("#bar1,#bar2,#bar2b,#bar3,.round_nav").addClass("open");
        $('.nav_content li').slideDown(200);
        $('.nav_content').delay(300).fadeIn(100);

    }
});

const w = window.matchMedia("(max-width: 700px)");
const vid = document.getElementById("vid");
const franchies = document.getElementById("frvid");
const micheladam = document.getElementById("mdvid");
const nites = document.getElementById("nivid");
const featurevideo = document.getElementById("fevid");
const introvideo = document.getElementById("introvid");
const showvideo = document.getElementById("shvid");



window.addEventListener("resize", function screenres() {
    if (w.matches) {
        vid.pause();
        franchies.src = "./assets/videos/franchies/Champagne franchies Hoame Page.mp4";
        micheladam.src = "./assets/videos/Michel Adem/Home page michel Adam-01.mp4"
        nites.src = "./assets/videos/FTV champagne nites page/FTV champagne Nites.mp4"
        featurevideo.src = "./assets/videos/ftv champagne feature/Home page Champagne feature.mp4"
        introvideo.src = "./assets/videos/INTRODUCTION 1-PAGE/dekstop & mobile/Land Page _01 Video.mp4"
        showvideo.src = "./assets/videos/channel/12+ webside.mp4"
        vid.load();
        vid.play();
    } else {
        vid.pause();
        franchies.src = "./assets/videos/franchies/Champagne\ franchies\ Hoame\ Page-\ Mobile.mp4";
        micheladam.src = "./assets/videos/Michel Adem/Mobile -michel adem/Home page michel adem.mp4"
        nites.src = "./assets/videos/FTV champagne nites page/FTV champagne Nites - Mobile.mp4"
        featurevideo.src = "./assets/videos/ftv champagne feature/Home page Champagne Feature- Mobile.mp4"
        introvideo.src = "./assets/videos/INTRODUCTION 1-PAGE/dekstop & mobile/Land Page _01 Video mobile.mp4"
        showvideo.src = "./assets/videos/channel/Channel -mobile.mp4"
        vid.load();
        vid.play();
    };

});