var info = [];
var imgSrc, date, year, macy, menuWidth;

$("img").click(function () {
    imgSrc = $(this).attr("src");
    $(this).attr("data-toggle", "modal").attr("data-target", "#modal");
    $("#modal img").attr("src", imgSrc);
});

if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
) {
    menuWidth = "100%";
} else {
    menuWidth = "250px";
}

function openNav() {
    document.getElementById("mySidenav").style.width = menuWidth;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("#sub-menu, #portfolio-sub-menu").fadeOut();
}

$(".contact").click(function () {
    if ($("#sub-menu").css("display") === "block") {
        $("#sub-menu").fadeOut();
    } else {
        $("#sub-menu").fadeIn("slow");
    }
});

$("#mySidenav > a:nth-child(4)").click(function () {
    if ($("#portfolio-sub-menu").css("display") === "block") {
        $("#portfolio-sub-menu").fadeOut();
    } else {
        $("#portfolio-sub-menu").fadeIn("slow");
    }
});

$.ajax({
    url: "assets/data/data.json",
    async: true,
    dataType: "json",
    success: function (data) {
        info.push(data);
        renderInfo();
    }
});

function renderInfo() {
    $(".name").text(info[0].name);
    $("#about").text(info[0].about);
    $(".email").attr("href", "mailto:" + info[0].email);
    $(".instagram").attr("href", info[0].instagram);
    $(".twitter").attr("href", info[0].twitter);
}

macy = Macy({
    container: '#grid',
    trueOrder: false,
    waitForImages: true,
    margin: 12,
    columns: 6,
    breakAt: {
        1600: 5,
        1200:4,
        920: 3,
        768: 2,
        480: 1
    }
});

date = new Date();
year = date.getFullYear();
$(".year").text(year);