(function () {
    var more = document.getElementById('more');
    var sidebar = document.getElementById('sidebar');
    var val = (document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight);

    window.onscroll = function () {
        val = (document.documentElement.scrollTop || document.body.scrollTop) + (document.documentElement.clientHeight || document.body.clientHeight);
    };
    more.onmouseover = function () {
        sidebar.style.display = 'block';
        sidebar.style.height = val + 'px';
        window.onmousewheel=document.onmousewheel=function() {
            return false;
        };
    };
    jQuery(more).on('mousedown', function (Event) {
        if (1 === Event.button) Event.preventDefault()
    });
    more.onmouseout = function () {
        sidebar.style.display = 'none';
        sidebar.style.height = 0;
        window.onmousewheel=document.onmousewheel=function() {};
    }
})();


(function () {
    var navBar = document.getElementById('navBarC');
    var content = document.getElementById('content');
    var ary = utils.getByClass('menu-item', navBar);
    console.log(ary);
    var option = utils.getByClass('option', content);
    console.log(option);
    for (var i = 0; i < ary.length; i++) {
        ary[i].index = i;
        ary[i].onclick = function () {
            tab(this.index)
        }
    }
    function tab(n) {
        for (var i = 0; i < ary.length; i++) {
            ary[i].className = 'menu-item';
            ary[i].id = '';
            option[i].className = '';
            follow.id = '';
            concern.style.display = 'none';
            option[i].style.display = 'none';
            concern.style.zIndex = 0;
            //concern.style.zIndex=0;
        }
        ary[n].className = 'menu-item';
        ary[n].id = 'bg';
        var a = ['recommend', 'navigation', 'video', 'shopping'];
        option[n].className = a[n];
        option[n].style.display = 'block';
    }

    var follow = document.getElementById('follow');
    var concern = document.getElementById('concern');
    follow.onclick = function () {
        concern.style.display = 'block';
        follow.id = 'bg';
        //concern.style.zIndex=1;
        for (var i = 0; i < ary.length; i++) {
            ary[i].id = '';
            option[i].className = '';
            option[i].style.display = 'none';
            //option[i].style.zIndex=0;
        }
    }
})();

window.onscroll=function(){
    var bdTop=document.getElementById('bdTop');
    var scrollTop = utils.win("scrollTop");
    if(scrollTop>100){
        bdTop.style.display='block';
        bdTop.style.zIndex=10
    }else {
        bdTop.style.display='none';
    }
};
















