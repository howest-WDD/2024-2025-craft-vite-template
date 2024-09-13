import '../scss/styles.scss';

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR');
  });
}

const init = function () {
  console.log('hello world!');
};

document.addEventListener('DOMContentLoaded', init);
