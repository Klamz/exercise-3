$(".img-container") .prepend('<span class="material-symbols-outlined opener"> open_in_full</span>');
$(".opener").show();

var isOpen = false;
var isClosed = true;
$(".opener").on("click", function () {
    if (isOpen == false) {
        $("#emote").attr("src", "imgs/expand.jpg");
        $(this).parent().css("transform", "scale(2.0)");
        $(this).parent().fadeIn();
        $(".button").hide();
        $(this).text("collapse_content");
        isOpen = true;
        console.log(isOpen);
    }

    else if (isOpen == true) {
        console.log(isClosed);
        $("#emote").attr("src", "imgs/default.jpg");
        $(this).parent().css("transform", "scale(1)");
        $(this).text("open_in_full");
        $(".button").show();
        isOpen = false;

    }
});


$("#rain") .on("click", function() {
    $("#emote").attr("src", "imgs/wet.jpg");
    $("#emote").css("transform", "scale(1)"); 
});

$("#light").on("click", function() {
    $("#emote").attr("src", "imgs/dark.jpg");
    $("#emote").css("transform", "scale(1)");
    
});

$("#error").on("click", function() {
    $("#emote").attr("src", "imgs/bing.jpg");
    $("#emote").css("transform", "scale(1)");
    
});

$("#Reset").on("click", function() {
    $("#emote").attr("src", "imgs/default.jpg");
    $("#emote").css("transform", "scale(1)");
    
});

$("#Shrink").on("click", function() {
    $("#emote").attr("src", "imgs/shrink.jpg");
    $("#emote").css("transform", "scale(0.5)");
    
});


console.log("Hello World");