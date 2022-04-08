const html_code = document.querySelector('.html_code textarea');
const css_code = document.querySelector('.css_code textarea');
const javascript_code = document.querySelector('.javascript_code textarea');
const result = document.querySelector('#result');

function run () {
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('javascript_code', javascript_code.value);
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.javascript_code);
}

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
javascript_code.onkeyup = () => run();


html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
javascript_code.value = localStorage.javascript_code;


console.log("%cHello, I'm a console message", "color: red; font-size: 20px;");
