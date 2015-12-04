var c = document.getElementById('canv'),
    $ = c.getContext('2d'),
    w = c.width = window.innerWidth,
    h = c.height = window.innerHeight,
    t = 0,
    num = 550,
    u = 0,
    s, a, b,
    x, y, _x, _y,
    _t = 1 / 60;
var anim = function() {
    $.globalCompositeOperation = 'source-over';
    window.requestAnimationFrame(anim);
    $.fillStyle = 'hsla(0, 0%, 0%, .35)';
    $.fillRect(0, 0, w, h);
    $.globalCompositeOperation = 'lighter';
    for (var i = 0; i < 1; i++) {
        x = 0;
        $.beginPath();
        for (var j = 0; j < num; j++) {
            x += .45 * Math.sin(11);
            y = x * Math.sin(i + 3.0 * t + x / 15) / 15;
            _x = x * Math.cos(b) + y * Math.sin(i);
            _y = x * Math.sin(b) + y * Math.cos(i);
            b = (j * 2.66) * Math.PI / 4;
            $.lineWidth = 0.040;
            $.arc(w / 2 + _x, h / 2 + _y, 0.0, 0, 2 * Math.PI);
        }
        var g = $.createLinearGradient(w / 2 + _x, h / 2 + _y, 1, w / 2 +
            _x, h / 2 + _y);
        g.addColorStop(0.1, 'hsla(' + u + ',95%,50%,1)');
        g.addColorStop(0.5, 'hsla(0,0%,10%,1)');
        g.addColorStop(1, 'hsla(0,0%,0%,1)');
        $.strokeStyle = g;
        $.stroke();
    }
    t += _t;
    u -= .2;
};
anim();
window.addEventListener('resize', function() {
    c.width = w = window.innerWidth;
    c.height = h = window.innerHeight;
}, false);
