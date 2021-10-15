/*display Slider value */
let slider = document.querySelector('#Range');
let valueOutput = document.querySelector('#Output');
valueOutput.innerHTML= slider.value;

    let star1 = document.querySelector('#star1');
    let star2 = document.querySelector('#star2');
    let star3 = document.querySelector('#star3');
    let star4 = document.querySelector('#star4');
    let star5 = document.querySelector('#star5');
    let td1 = document.querySelector('#td1');
    let td2 = document.querySelector('#td2');
    let td3 = document.querySelector('#td3');
    let td4 = document.querySelector('#td4');
    let td5 = document.querySelector('#td5');
    let td6 = document.querySelector('#td6');
    let td7 = document.querySelector('#td7');

    //let btn1 = document.querySelector('#btn1');

     td1.innerHTML = slider.value + "%";
     td2.innerHTML = slider.value + "%";
     td3.innerHTML = slider.value + "%";
     td4.innerHTML = slider.value + "%";
     td5.innerHTML = slider.value + "%";
     td6.innerHTML = slider.value + "%"; 
     td7.innerHTML = slider.value + "%";
      

   


    highlight_row();
    function highlight_row() {
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
            
                let modalName = document.querySelector('#modalName');
                let content = document.querySelector('#contentType');
                let modalChurch = document.querySelector('#modalChurch');
                let modalVideo = document.querySelector('video');
                let modalAudio = document.querySelector('audio');


                modalName.innerHTML= title + " " + fullName;
                content.innerHTML = contentType;
                modalChurch.innerHTML = church;
                
                if(contentType == "Audio"){
                    modalAudio.classList.remove('hide'); 
                    modalVideo.classList.add('hide');
                }else{
                    modalVideo.classList.remove('hide');
                    modalAudio.classList.add('hide'); 
                }

                slider.oninput = function(){
                    valueOutput.innerHTML = this.value;
                    rating.textContent = slider.value + "%";

                    //add color to stars
                    if(slider.value <= 19){
                        star1.classList.remove('checked'); 
                        star2.classList.remove('checked');
                        star3.classList.remove('checked');
                        star4.classList.remove('checked');
                        star5.classList.remove('checked');
                    } else if(slider.value === 20 || slider.value < 40 ){
                        star1.classList.add('checked'); 
                        star2.classList.remove('checked');
                        star3.classList.remove('checked');
                        star4.classList.remove('checked');
                        star5.classList.remove('checked');
                    }else if(slider.value == 40 || slider.value < 60){
                        star1.classList.add('checked');
                        star2.classList.add('checked');
                        star3.classList.remove('checked');
                        star4.classList.remove('checked');
                        star5.classList.remove('checked');
                    } else if(slider.value == 60 || slider.value < 80){
                        star1.classList.add('checked');
                        star2.classList.add('checked');
                        star3.classList.add('checked');
                        star4.classList.remove('checked');
                        star5.classList.remove('checked'); 
                    }else if(slider.value == 80 || slider.value < 100){
                        star1.classList.add('checked');
                        star2.classList.add('checked');
                        star3.classList.add('checked');
                        star4.classList.add('checked');
                        star5.classList.remove('checked');
                    }else if(slider.value == 100){
                        star1.classList.add('checked'); 
                        star2.classList.add('checked');
                        star3.classList.add('checked');
                        star4.classList.add('checked');
                        star5.classList.add('checked');
                    } 
                }

               const approve = document.querySelector('#approveBtn');
               approve.addEventListener('click',function () {
                   approve.setAttribute('data-dismiss', 'modal');
                  slider.value = 0;
                  valueOutput.innerHTML= slider.value;
                  star1.classList.remove('checked'); 
                  star2.classList.remove('checked');
                  star3.classList.remove('checked');
                  star4.classList.remove('checked');
                  star5.classList.remove('checked');
                    let iconClass= 'fa fa-checked-circle';
                   let icon = `<span>
                                    <i class = '${iconClass}' ></i>
                               </span>`;
                   status.textContent = "Approved";
                   status.appendChild(icon); 



                   /* let span = document.createElement('span');
                   let i = document.createElement('i');
                  // i.classList.add('fa');
                   i.classList.add('fafa-checked-circle')
                   icon = span.appendChild(i)
                   status.innerHTML = "Approved" ;
                   status.appendChild(icon);
                   console.log(status);  */
               })
            }
        }
    }