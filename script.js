

(
    function () {
        const pageAll = document.getElementsByTagName('body')[0];
        const title = document.getElementById('txt');
        const button = document.getElementById('btn');
        const darkMode = 'darkMode';

        function changeText() {

            const dark = 'Dark Mode';
            const light = 'Light Mode';

            if (pageAll.classList.contains(darkMode)) {
                button.textContent = dark;
                title.textContent = light + ' On';
                return;
            }
            button.textContent = light;
            title.textContent = dark + ' On';

        }

        function changePage() {
            pageAll.classList.toggle(darkMode);
            title.classList.toggle(darkMode);
            button.classList.toggle(darkMode);

        }

        function callChanges() {
            changeText();
            changePage();
        }

        button.addEventListener('click', callChanges)


    })();
