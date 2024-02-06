document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    let darkMode = false;

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
        darkMode = savedDarkMode === 'true';
        toggleTheme(darkMode);
    }

    toggleButton.addEventListener('click', function () {
        darkMode = !darkMode;
        toggleTheme(darkMode);
        localStorage.setItem('darkMode', darkMode);
    });

    function toggleTheme(isDarkMode) {
        body.classList.toggle('dark-theme', isDarkMode);
        body.classList.toggle('light-theme', !isDarkMode);
        toggleButton.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
        updateBackground(isDarkMode);
    }

    function updateBackground(isDarkMode) {
        const darkModeBackground = "url('https://img.freepik.com/free-vector/gradient-black-background-with-cubes_23-2149138432.jpg?t=st=1707038909~exp=1707039509~hmac=fe8756aeefd20aa3b66dc257ccc28ecbb9ea6d260434c93b2ec1e8730d80797a')";
        const lightModeBackground = "url('https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/5594016-e1656071131636.jpg?zoom=2&resize=1000%2C750&ssl=1')";
    
        body.style.backgroundImage = isDarkMode ? darkModeBackground : lightModeBackground;
    }
    
});

    




function incrementLike(id) {
  const likeContainer = document.getElementById(id);
  const likeSpan = likeContainer.querySelector('span');
  let likes = parseInt(likeSpan.textContent);
  likes++;
  likeSpan.textContent = likes;

  localStorage.setItem(`${id}-likes`, likes);
}




document.addEventListener('DOMContentLoaded', () => {
  const likeSpan1 = document.getElementById('like1').querySelector('span');
  const savedLikes1 = localStorage.getItem('like1-likes');
  likeSpan1.textContent = savedLikes1 || '0';

  

  const likeSpan2 = document.getElementById('like2').querySelector('span');
  const savedLikes2 = localStorage.getItem('like2-likes');
  likeSpan2.textContent = savedLikes2 || '0';

  
});

  