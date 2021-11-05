    /* let td1 = document.querySelector('#td1');
    let td2 = document.querySelector('#td2');
    let td3 = document.querySelector('#td3');
    let td4 = document.querySelector('#td4');
    let td5 = document.querySelector('#td5');
    let td6 = document.querySelector('#td6');
    let td7 = document.querySelector('#td7');
 */
   


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
             let content =  rowSelected.cells[3].innerHTML;
             //let email =  rowSelected.cells[4].innerHTML;
             //let date =  rowSelected.cells[5].innerHTML;
            // let giving =  rowSelected.cells[6].innerHTML;
             let status =  rowSelected.cells[4];

             let modalName = document.querySelector('#modalName');
             //let content = document.querySelector('#contentType');
             let modalChurch = document.querySelector('#modalChurch');
             let modalShoutOut = document.querySelector('#shoutOut');
             let modalAudio = document.querySelector('audio');
            
            // let amount = document.querySelector('#Output');

             modalName.innerHTML = title + " " + fullName;
             modalChurch.innerHTML = church;
             modalShoutOut.innerHTML = content;
             
                 const approve = document.querySelector('#approveBtn');
                 approve.setAttribute('data-dismiss', 'modal');
                 approve.addEventListener('click',function () {
                    status.innerHTML = "Approved " + `<i class="fa fa-check-circle fa-check-circle2"></i>`;
                })

                const decline = document.querySelector('#declineBtn');
                decline.setAttribute('data-dismiss', 'modal');
                decline.addEventListener('click',function () {
                   status.innerHTML = "Declined " + `<i class="fa fa-times-circle"></i>`;
               })

               if(status.textContent == "Approved"){
                   verify.setAttribute('disabled','disabled')
                   decline.removeAttribute('disabled', 'disabled')
               }else if (status.textContent == "Declined"){
                   decline.setAttribute('disabled', 'disabled')
                   verify.removeAttribute('disabled', 'disabled')
               }
            } 
            
        }
    }

     //tooltip functionality
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
     })