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
      

    /*star1.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.remove('checked');
        star3.classList.remove('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
        slider.value = 20;
        valueOutput.innerHTML = 20;
        if (document.getElementById('btn1').clicked == true) {
            td1.innerHTML = 20 + "%";
            
        }
        //td1.innerHTML = 20 + "%";
       /*  td1.innerHTML = 20 + "%";
        td2.innerHTML = 20 + "%";
        td3.innerHTML = 20 + "%";
        td4.innerHTML = 20+ "%";
        td5.innerHTML = 20 + "%";
        td6.innerHTML = 20 + "%";
        td7.innerHTML = 20 + "%"; 
    })
    star2.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.remove('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
        slider.value = 40;
        valueOutput.innerHTML = 40;
        td1.innerHTML = 40 + "%";
        td2.innerHTML = 40 + "%";
        td3.innerHTML = 40 + "%";
        td4.innerHTML = 40+ "%";
        td5.innerHTML = 40 + "%";
        td6.innerHTML = 40 + "%";
        td7.innerHTML = 40 + "%";
    })
    star3.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
        slider.value = 60;
        valueOutput.innerHTML = 60;
        td1.innerHTML = 60 + "%";
        td2.innerHTML = 60 + "%";
        td3.innerHTML = 60 + "%";
        td4.innerHTML = 60+ "%";
        td5.innerHTML = 60 + "%";
        td6.innerHTML = 60 + "%";
        td7.innerHTML = 60 + "%";
    })
    star4.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.add('checked');
        star5.classList.remove('checked');
        slider.value = 80;
        valueOutput.innerHTML = 80;
        td1.innerHTML = 80 + "%";
        td2.innerHTML = 80 + "%";
        td3.innerHTML = 80 + "%";
        td4.innerHTML = 80+ "%";
        td5.innerHTML = 80 + "%";
        td6.innerHTML = 80 + "%";
        td7.innerHTML = 80 + "%";
    })
    star5.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.add('checked');
        star5.classList.add('checked');
        slider.value= 100;
        valueOutput.innerHTML = 100;
        td1.innerHTML = 100 + "%";
        td2.innerHTML = 100 + "%";
        td3.innerHTML = 100 + "%";
        td4.innerHTML = 100+ "%";
        td5.innerHTML = 100 + "%";
        td6.innerHTML = 100 + "%";
        td7.innerHTML = 100 + "%";
    }) */
/* slider.oninput = function(){
    valueOutput.innerHTML = this.value;
    /* td1.innerHTML = slider.value + "%";
     td2.innerHTML = slider.value + "%";
     td3.innerHTML = slider.value + "%";
     td4.innerHTML = slider.value + "%";
     td5.innerHTML = slider.value + "%";
     td6.innerHTML = slider.value + "%";
     td7.innerHTML = slider.value + "%"; 

     rating.textContent = slider.value + "%";

     //add color to stars
    if(slider.value == 20 && slider.value < 39 ){
        star1.classList.add('checked'); 
        star2.classList.remove('checked');
        star3.classList.remove('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
    }else if(slider.value == 40 && slider.value < 59){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.remove('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
    } else if(slider.value == 60 && slider.value < 79){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked'); 
    }else if(slider.value == 80 && slider.value < 99){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.add('checked');
        star5.classList.remove('checked');
    }else if(slider.value == 100){
        star5.classList.add('checked'); 
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.add('checked');
        star5.classList.add('checked');
    }else if(slider.value <=19){
        star1.classList.remove('checked'); 
        star2.classList.remove('checked');
        star3.classList.remove('checked'); 
        star4.classList.remove('checked'); 
        star5.classList.remove('checked'); 

    }
} */


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
            let status =  rowSelected.cells[7].innerHTML;
           
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

            //rating.textContent = slider.value + "%";
            console.log(contentType);
            
           /* star1.addEventListener('click', function(){
               star1.classList.add('checked');
               star2.classList.remove('checked');
               star3.classList.remove('checked');
               star4.classList.remove('checked');
               star5.classList.remove('checked');
               slider.value = 20;
               valueOutput.innerHTML = 20;
               rating.textContent = slider.value + "%";
               console.log(church);
               //console.log(rating);
           })
           star2.addEventListener('click', function(){
               star1.classList.add('checked');
               star2.classList.add('checked');
               star3.classList.remove('checked');
               star4.classList.remove('checked');
               star5.classList.remove('checked');
               slider.value = 40;
               valueOutput.innerHTML = 40;
               rating.textContent = slider.value + "%";
           })
           star3.addEventListener('click', function(){
               star1.classList.add('checked');
               star2.classList.add('checked');
               star3.classList.add('checked');
               star4.classList.remove('checked');
               star5.classList.remove('checked');
               slider.value = 60;
               valueOutput.innerHTML = 60;
               rating.textContent = slider.value + "%";
           })
           star4.addEventListener('click', function(){
               star1.classList.add('checked');
               star2.classList.add('checked');
               star3.classList.add('checked');
               star4.classList.add('checked');
               star5.classList.remove('checked');
               slider.value = 80;
               valueOutput.innerHTML = 80;
               rating.textContent = slider.value + "%";
           })
           star5.addEventListener('click', function(){
               star1.classList.add('checked');
               star2.classList.add('checked');
               star3.classList.add('checked');
               star4.classList.add('checked');
               star5.classList.add('checked');
               slider.value= 100;
               valueOutput.innerHTML = 100;
               rating.textContent = slider.value + "%";
           }) */
        }
    }

}

//function for updating modal

/* let veiw = document.querySelector('#btn1');

function modal() {
   let tr = document.querySelector('#tr1');
   let title =this.title1.textContent;
   let name = this.name1.textContent;
   let church = this.church1.textContent;
   let content = this.content1.textContent;
   modalName.innerHTML= title + " " + name;
   contentType.innerHTML = content;
   modalChurch.innerHTML = church;
    if(content == "Video"){
       // modalAudio.classList.add('hide');
    }else{
       // modalVideo.classList.add('hide');
    }
    createVideo();
}

function modal2() {
    let tr = document.querySelector('#tr2');
    let title =this.title2.textContent;
    let name = this.name2.textContent;
    let church = this.church2.textContent;
    let content = this.content2.textContent;
    modalName.innerHTML= title + " " + name;
    contentType.innerHTML = content;
    modalChurch.innerHTML = church;
    if(content == "Video"){
        //modalAudio.classList.add('hide');
    }else{
        //modalVideo.classList.add('hide');
    }
}

function modal3() {
    let tr = document.querySelector('#tr3');
    let title =this.title3.textContent;
    let name = this.name3.textContent;
    let church = this.church3.textContent;
    let content = this.content3.textContent;
    console.log(content);
    modalName.innerHTML= title + " " + name;
    contentType.innerHTML = content;
    modalChurch.innerHTML = church;
    if(content == "Video"){
        //modalAudio.classList.add('hide');
    }else{
       // modalVideo.classList.add('hide');
    }
    createAudio();
}

function modal4() {
    let tr = document.querySelector('#tr4');
    let title =this.title4.textContent;
    let name = this.name4.textContent;
    let church = this.church4.textContent;
    let content = this.content4.textContent;
    modalName.innerHTML= title + " " + name;
    contentType.innerHTML = content;
    modalChurch.innerHTML = church;
    if(contentType.innerHTML == "Video"){
        document.querySelector('audio').classList.add('hide');
    }else if(contentType.innerHTML == "Audio"){
     document.querySelector('video').classList.add('hide');
    }
}

function modal5() {
    let tr = document.querySelector('#tr5');
    let title =this.title5.textContent;
    let name = this.name5.textContent;
    let church = this.church5.textContent;
    let content = this.content5.textContent;
    modalName.innerHTML= title + " " + name;
    contentType.innerHTML = content;
    modalChurch.innerHTML = church;
    if(content == "Video"){
        document.querySelector('audio').classList.add('hide');
    }else if(content == "Audio"){
     document.querySelector('video').classList.add('hide');
    }
}

function modal6() {
    let tr = document.querySelector('#tr6');
    let title =this.title6.textContent;
    let name = this.name6.textContent;
    let church = this.church6.textContent;
    let content = this.content6.textContent;
    modalName.innerHTML= title + " " + name;
    contentType.innerHTML = content;
    modalChurch.innerHTML = church;
    if(content == "Video"){
        document.querySelector('audio').classList.add('hide');
    }else if(content == "Audio"){
     document.querySelector('video').classList.add('hide');
    }
}

function modal7() {
    let tr = document.querySelector('#tr7');
    let title =this.title7.textContent;
    let name = this.name7.textContent;
    let church = this.church7.textContent;
    let content = this.content7.textContent;
    modalName.innerHTML= title + " " + name;
    contentType.innerHTML = content;
    modalChurch.innerHTML = church;
    if(content == "Video"){
        document.querySelector('audio').classList.add('hide');
    }else if(content == "Audio"){
     document.querySelector('video').classList.add('hide');
    }
}

 function createVideo() {
     let contain = document.querySelector('.contain');
   const video=  document.createElement('video');
   video.setAttribute('src', 'C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/Birthday Dashboard/video/People in prison_TrueSouth.mp4');
   video.setAttribute('width', '100%');
   video.setAttribute('controls', 'autoplay');

   contain.appendChild(video);
 }

 function createAudio() {
    let contain = document.querySelector('.contain');
  const audio=  document.createElement('audio');
  audio.setAttribute('src', 'C:/Users/Emeka Chinye/Documents/Visual Studio Code/Projects/Birthday Dashboard/video/Blanca - Who I am.mp3');
  audio.setAttribute('width', '100%');
  audio.setAttribute('controls', 'autoplay');

  contain.appendChild(audio);
} */
