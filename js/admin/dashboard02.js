
    
    let elip3 = document.querySelector('#elip3');
    let elip4 = document.querySelector('#elip4');
    let elip5 = document.querySelector('#elip5');
    let elip6 = document.querySelector('#elip6');
    let elip7 = document.querySelector('#elip7');

    let status1 = document.querySelector('#status1');
    let status2 = document.querySelector('#status');
    let status3 = document.querySelector('#status3');
    let status4 = document.querySelector('#status4');
    let status5 = document.querySelector('#status5');
    let status6 = document.querySelector('#status6');
    let status7 = document.querySelector('#status7');

    


    select_table();
    function select_table() {
        var table = document.getElementById('table');
        var cells = document.getElementsByTagName('td');

        function pickCell() {
            for (var i = 0; i < cells.length; i++) {
                // Take each cell
                var cell = cells[i];
    
                
                // do something on onclick event for cell
                cell.onclick = function(){
                          // Get the row id where the cell exists
                          var rowId = this.parentNode.rowIndex;
                          //var cellId = this.parentNode.cellIndex;
                          var rowSelected = document.getElementsByTagName('tr')[rowId];
                          //var cellSelected = document.getElementsByTagName('td')[rowId];
                         console.log(rowSelected.cells);
                       let title =  rowSelected.cells[0].innerHTML;
                       let fullName =  rowSelected.cells[1].innerHTML;
                       let church =  rowSelected.cells[2].innerHTML;
                       let phone =  rowSelected.cells[3].innerHTML;
                       let email =  rowSelected.cells[4].innerHTML;
                       let date =  rowSelected.cells[5].innerHTML;
                       let giving =  rowSelected.cells[6].innerHTML;
                       let code = rowSelected.cells[7].innerHTML;
                       let status =  rowSelected.cells[8];       
                       //console.log(status);
          
                       let modalName = document.querySelector('#modalName');
                       let content = document.querySelector('#contentType');
                       let modalChurch = document.querySelector('#modalChurch');
                       let modalVideo = document.querySelector('video');
                       let modalAudio = document.querySelector('audio');
                      
                       let amount = document.querySelector('#Output');
          
                       modalName.innerHTML = title + " " + fullName;
                       modalChurch.innerHTML = church;
                       amount.innerHTML = giving;
          
                      
                       //tableElip1.addEventListener('click', function(){
                          const verify = document.querySelector('#verifyBtn');
                          verify.addEventListener('click',function () {
                              verify.setAttribute('data-dismiss', 'modal');
                              var check = status.getAttribute('id');
                             //var checkB = status2.setAttribute('id');
                               /* let check3 = status3.getAttribute('id');
                              let check4 = status4.getAttribute('id');
                              let check5 = status5.getAttribute('id');
                              let check6 = status6.getAttribute('id');
                              let check7 = status7.getAttribute('id');
                              let checkB = status2.getAttribute('id'); */
                              console.log(check);
                              if (check === 'status1') {
                                
                                status1.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                               // console.log(status);
                              }else if (check === 'status2') {
                                
                                status2.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                              }/* else if (check == 'status3') {
                                status.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                              }else if (check == 'status4') {
                                status.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                              }else if (check == 'status5') {
                                status.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                              }else if (check == 'status6') {
                                status.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                              }else if (check == 'status7') {
                                status.innerHTML = "Verified" + `<i class="fa fa-check-circle"></i>`;
                              } */
                             //status.hasAttributeNS('id','status1')
                              
                              //console.log(status);
                          })
                         
                          const decline = document.querySelector('#declineBtn');
                          decline.addEventListener('click', function() {
                              decline.setAttribute('data-dismiss', 'modal');
                              rowSelected.cells[8].innerHTML = "Declined" + `<i class="fa fa-times-circle"></i>`;
                              //console.log(status);
                          })
          
                          if(status.textContent == "Verified"){
                              verify.setAttribute('disabled','disabled')
                              decline.removeAttribute('disabled', 'disabled')
                          }else if (status.textContent == "Declined"){
                              decline.setAttribute('disabled', 'disabled')
                              verify.removeAttribute('disabled', 'disabled')
                          } 
                       //})
                }
              
                   
              
                  
                
            }
        }
            let showBtn = document.querySelector('.table');
            showBtn.addEventListener('click', pickCell())
    }

     //tooltip functionality
     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
     })