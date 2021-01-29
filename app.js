const switchMode = document.querySelector('#switch');
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  switchMode.setAttribute('checked', true);
}

switchMode.addEventListener('change', function (event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
  } else {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
});
