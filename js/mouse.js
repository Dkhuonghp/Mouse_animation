var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    posX = 0,
    posY = 0,
    mouseX = 720,
    mouseY = 400;

$(document).on("mousemove", function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;

});

// Chuyển động 
TweenMax.to({}, 0.0016, {
    repeat: -1,
    onRepeat: function(){
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(".hover").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".hover").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});