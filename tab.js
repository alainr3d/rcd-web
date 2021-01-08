
        const allTabLinks = document.querySelectorAll('.tablinks');
        const allOtherWorks = document.querySelectorAll('.otherworks-gallery');
        let currentContentShown = 0;

        for (let i = 0; i < allTabLinks.length; i++) {
            allTabLinks[i].addEventListener('click', function () {
                allTabLinks[currentContentShown].classList.remove('highlight');
                allTabLinks[i].classList.add('highlight');
                allOtherWorks[currentContentShown].classList.remove('show');
                allOtherWorks[i].classList.add('show');

                currentContentShown = i;
            })
        }

        
