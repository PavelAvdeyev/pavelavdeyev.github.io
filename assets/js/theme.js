(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');

  function updateLabel() {
    if (!button) return;
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    button.setAttribute('title', 'Switch to ' + next + ' theme');
  }

  if (button) {
    button.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      updateLabel();
    });
  }

  updateLabel();
}());
