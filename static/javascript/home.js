document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.getElementById('sidebar');
    var main = document.querySelector('main');

    window.onscroll = function () {
        if (window.pageYOffset > 50) {
            sidebar.classList.add('collapsed');
            main.classList.add('adjusted');
        } else {
            sidebar.classList.remove('collapsed');
            main.classList.remove('adjusted');
        }
    };

    var sections = document.querySelectorAll('.nav-item');
    var progressCircles = document.querySelectorAll('.circle');

    function onScroll() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        
        for (var i = 0; i < sections.length; i++) {
            var section = document.querySelector(sections[i].hash);
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                progressCircles[i].style.background = '#fff';
            } else {
                progressCircles[i].style.background = 'transparent';
            }
        }
    }

    window.addEventListener('scroll', onScroll);
});
