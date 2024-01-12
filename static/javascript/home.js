document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var progressCircles = document.querySelectorAll('.circle');
    var sections = ['summary', 'resume', 'projects', 'contact']; // Add section IDs here

    function toggleSidebar() {
        if (window.scrollY > 50) {
            sidebar?.classList.add('scrolled');
            content?.classList.add('scrolled');
        } else {
            sidebar?.classList.remove('scrolled');
            content?.classList.remove('scrolled');
        }
    }

    function highlightProgress() {
        var scrollPosition = window.scrollY;
        sections.forEach((sectionId, index) => {
            var section = document.getElementById(sectionId);
            if (section && progressCircles[index]) {
                if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                    progressCircles[index].classList.add('active');
                } else {
                    progressCircles[index].classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', function () {
        toggleSidebar();
        highlightProgress();
    });
});
