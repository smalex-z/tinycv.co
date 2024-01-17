document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var progressCircles = document.querySelectorAll('.circle');
    var sections = ['summary', 'resume', 'projects', 'contact']; // Add section IDs here

    var scrollTimeout; // Declare the scrollTimeout variable here


    function toggleSidebar() {
        console.log('toggleSidebar function called');
        console.log(content.scrollTop);

        if (content.scrollTop > 50) {
            sidebar.classList.add('scrolled');
            content.classList.add('scrolled');
        } else {
            sidebar.classList.remove('scrolled');
            content.classList.remove('scrolled');
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

    content.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);

        // Set a new timeout to delay the actions by 1000 milliseconds (1 second)
        scrollTimeout = setTimeout(function () {
            toggleSidebar();
            highlightProgress();
        }, 1000);
    });
});
