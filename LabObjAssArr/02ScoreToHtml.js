function solve(str) {
    let data = JSON.parse(str);
    let html='<table>\n';
    html+='  <tr><th>name</th><th>score</th></tr>\n';

    function replaceChar(text) {
        text = text.replace(/&/g, '&amp;');
        text = text.replace(/</g, '&lt;');
        text = text.replace(/>/g, '&gt;');
        text = text.replace(/"/g, '&quot;');
        text = text.replace(/'/g, '&#39;');

        return text;
    }

    for (let obj of data) {
        html+='  <tr>';
        html+=`<td>${replaceChar(obj.name)}</td>`;
        html+=`<td>${obj.score}</td>`;
        html+='</tr>\n';
    }

    html+='</table>';

    console.log(html);
}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');