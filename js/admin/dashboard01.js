/*display Slider value */
let slider = document.querySelector('#Range');
let valueOutput = document.querySelector('#Output');
valueOutput.innerHTML= slider.value;

let star1 = document.querySelector('#star1');
    let star2 = document.querySelector('#star2');
    let star3 = document.querySelector('#star3');
    let star4 = document.querySelector('#star4');
    let star5 = document.querySelector('#star5');

    star1.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.remove('checked');
        star3.classList.remove('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
        slider.value = 20;
        valueOutput.innerHTML = 20;
    })
    star2.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.remove('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
        slider.value = 40;
        valueOutput.innerHTML = 40;
    })
    star3.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.remove('checked');
        star5.classList.remove('checked');
        slider.value = 60;
        valueOutput.innerHTML = 60;
    })
    star4.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.add('checked');
        star5.classList.remove('checked');
        slider.value = 80;
        valueOutput.innerHTML = 80;
    })
    star5.addEventListener('click', function(){
        star1.classList.add('checked');
        star2.classList.add('checked');
        star3.classList.add('checked');
        star4.classList.add('checked');
        star5.classList.add('checked');
        slider.value= 100;
        valueOutput.innerHTML = 100;
    })
slider.oninput = function(){
    valueOutput.innerHTML = this.value;
    
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
}
 