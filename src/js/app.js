const buttonDarkMode = document.querySelector('.container .btn');
const selectorDarkMode = document.querySelector('html');

// darkModeFunction
const handleDarkMode = () => {
  let targetDataSet = selectorDarkMode.dataset;

  if (targetDataSet.colorMode === 'light') {
    targetDataSet.colorMode = 'dark';
    buttonDarkMode.textContent = 'Light Theme';
    return;
  }

  targetDataSet.colorMode = 'light';
  buttonDarkMode.textContent = 'Dark Theme';
};

// listener for buttonDarkmode
buttonDarkMode.addEventListener('click', handleDarkMode);
