
    let td1 = document.querySelector('#td1');
    let td2 = document.querySelector('#td2');
    let td3 = document.querySelector('#td3');
    let td4 = document.querySelector('#td4');
    let td5 = document.querySelector('#td5');
    let td6 = document.querySelector('#td6');
    let td7 = document.querySelector('#td7');

   


    select_table();
    function select_table() {
        var table = document.getElementById('table');
        var cells = document.getElementsByTagName('td');

        for (var i = 0; i < cells.length; i++) {
            // Take each cell
            var cell = cells[i];

            // do something on onclick event for cell
            cell.onclick = function () {
                // Get the row id where the cell exists
                var rowId = this.parentNode.rowIndex;

                var rowSelected = document.getElementsByTagName('tr')[rowId];

               
             let title =  rowSelected.cells[0].innerHTML;
             let fullName =  rowSelected.cells[1].innerHTML;
             let church =  rowSelected.cells[2].innerHTML;
             let phoneNumber =  rowSelected.cells[3].innerHTML;
             let contentType =  rowSelected.cells[4].innerHTML;
             let date =  rowSelected.cells[5].innerHTML;
             let rating =  rowSelected.cells[6];
             let status =  rowSelected.cells[7];
            
                const approve = document.querySelector('.table');
                approve.addEventListener('click',function () {
                    let iconClass= 'fa fa-checked-circle';
                    let icon = `<span>
                                    <i class = '${iconClass}' ></i>
                                </span>`;
                    status.textContent = "Verified";
                    /* status.appendChild(icon); */
                })
                let arr = [];
            arr.push(church.textContent);
            console.log(arr);
            } 
            
        }
    }
