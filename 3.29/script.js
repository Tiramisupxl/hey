var n=0;
$(".earphone-wrap").bind('mousewheel', function(event, delta, deltaX, deltaY) {
    if(delta<0){
        n++;
        if(n==9){
           n=8
        }
    var now="state"+n;
    var prev="state"+(n-1);
    $(".earphone-wrap").addClass(now).removeClass(prev);
    }else{
        n--;
        if(n==-1){
            n=0
        }
        var now="state"+n;
        var prev="state"+(n+1);
        $(".earphone-wrap").addClass(now).removeClass(prev);
    }
    console.log(n);
});