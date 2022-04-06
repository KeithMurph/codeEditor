const html_code = document.querySelector('.html_code textarea');
const css_code = document.querySelector('.css_code textarea');
const javascript_code = document.querySelector('.javascript_code textarea');
const result = document.querySelector('#result');

function run () {
    result.contentDocument.body.innerHTML = `<style>${css_code.value}</style>` + html_code.value;
}

html_code.onkeyup = () => run();