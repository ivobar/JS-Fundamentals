function solve(arr) {
    let html = '<ul>\n';

    function replaceChar(text) {
        text = text.replace(/&/g, '&amp;');
        text = text.replace(/</g, '&lt;');
        text = text.replace(/>/g, '&gt;');
        text = text.replace(/"/g, '&quot;');

        return text;
    }

    for (let i = 0; i < arr.length; i++) {
        html += '  <li>';
        html += replaceChar(arr[i]);
        html += '</li>\n';
    }

    html += '</ul>';

    console.log(html);
}

solve(['<b>unescaped text</b>', 'normal text']);