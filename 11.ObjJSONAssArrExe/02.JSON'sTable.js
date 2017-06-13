function solve(arr) {
    let employeeData=arr.map(x=>JSON.parse(x));

    function replaceChar(text) {
        text = text.replace(/&/g, '&amp;');
        text = text.replace(/</g, '&lt;');
        text = text.replace(/>/g, '&gt;');
        text = text.replace(/"/g, '&quot;');
        text = text.replace(/'/g, '&#39;');

        return text;
    }

    let html='<table>\n';
    for (let obj of employeeData) {
        html+='    <tr>\n';
        html+=`      <td>${replaceChar(obj.name)}</td>\n`;
        html+=`      <td>${replaceChar(obj.position)}</td>\n`;
        html+=`      <td>${obj.salary}</td>\n`;
        html+='    <tr>\n';
    }
    html+='</table>';

    console.log(html);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);