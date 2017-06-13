function solve(str) {
    let data = JSON.parse(str);
    let html = '<table>\n';
    let tableHeadTokens = Object.keys(data[0]);

    function replaceChar(text) {
        text = text.replace(/&/g, '&amp;');
        text = text.replace(/</g, '&lt;');
        text = text.replace(/>/g, '&gt;');
        text = text.replace(/"/g, '&quot;');
        text = text.replace(/'/g, '&#39;');

        return text;
    }

    html += '  <tr>';
    for (let token of tableHeadTokens) {
        html += `<th>${token}</th>`
    }
    html += '</tr>\n';

    for (let obj of data) {
        html += '  <tr>';
        for (let i = 0; i < tableHeadTokens.length; i++) {
            let input=obj[tableHeadTokens[i]];
            if(typeof input=== "string"){
                html += `<td>${replaceChar(input)}</td>`;
            }else {
                html += `<td>${input}</td>`;
            }
        }
        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);
}

solve('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');