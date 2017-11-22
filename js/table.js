var table, row, cell, i, j;
var info = [["Заемщик", "Дата выдачи", "Сумма кредита", "Валюта"],
    ["Иван", "10.05.2016", "10000", "$"],
    ["Пётр", "15.03.2012", "50000", "$"],
    ["Владимир", "18.11.2017", "5000", "р"]];
table = document.createElement('table');
table.style.border = '1px solid black';
table.style.borderRadius = '5px';
table.style.margin = '0 auto';
for (i = 0; i < info.length; i++) {
    row = document.createElement('tr');
    row.className = 'dbl';
    row.id = i;

    for (j = 0; j < info[i].length; j++) {
        cell = document.createElement('td');
        cell.appendChild(document.createTextNode(info[i][j]));
        cell.style.borderBottom = '1px solid #ddd';
        cell.style.padding = '4px';
        cell.style.width = '130px';
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(table);


for (i=1;i < info.length; i++) {
    document.getElementById("" + i).addEventListener("dblclick", zxc);

    function zxc(){
        var modal = document.getElementById('myModal');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function (){
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.getElementById('client').value = info[this.id][0];
        document.getElementById('date').value = info[this.id][1];
        document.getElementById('sum').value = info[this.id][2];
        document.getElementById('val').value = info[this.id][3];
    }
}