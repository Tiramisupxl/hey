var n=0;
$(".earphone-wrap").bind('mousewheel', function(event, delta, deltaX, deltaY) {
    if(delta<0){
        n++;
        if(n==9){
           n=8
        }
    var now="state"+n;
    var prev="state"+(n-1);
        if(n==1){
            $(".earphone-wrap").addClass("T1");
        }
        if(n==2){
            $(".earphone-wrap").addClass("T2");
        }
        if(n==3){
            $(".earphone-wrap").addClass("T3");
        }
        if(n==4){
            $(".earphone-wrap").addClass("T4");
        }
        if(n==5){
            $(".earphone-wrap").addClass("T5");
        }
        if(n==6){
            $(".earphone-wrap").addClass("T6");
        }
        if(n==7){
            $(".earphone-wrap").addClass("T7");
        }
        if(n==8){
            $(".earphone-wrap").addClass("T8");
        }
    $(".earphone-wrap").addClass(now).removeClass(prev);
    }else{
        n--;
        if(n==-1){
            n=0
        }
        var now="state"+n;
        var prev="state"+(n+1);
        $(".earphone-wrap").addClass(now).removeClass(prev);
        if(n==0){
            $(".earphone-wrap").removeClass("T1");
        }
        if(n==1){
            $(".earphone-wrap").removeClass("T2");
        }
        if(n==2){
            $(".earphone-wrap").removeClass("T3");
        }
        if(n==3){
            $(".earphone-wrap").removeClass("T4");
        }
        if(n==4){
            $(".earphone-wrap").removeClass("T5");
        }
        if(n==5){
            $(".earphone-wrap").removeClass("T6");
        }
        if(n==6){
            $(".earphone-wrap").removeClass("T7");
        }
        if(n==7){
            $(".earphone-wrap").removeClass("T8");
        }
    }
    console.log(n);
});