var srcs = [
'img/img1.jpg',
'img/img2.jpg',
'img/img3.jpg',
'img/img4.jpg'
];
var step =0;
var imgs = document.querySelectorAll('.carpage-slider-carousel-cars-item-link__img');

function nextSrc(isNext){
	if(isNext){
		step++;
		if (step >= srcs.length ) {
			step = 0;
		}
		return(srcs[step]);
	} else {
		step--;
		if (step <= 0 ) {
			step = srcs.length-1;
		}
		return(srcs[step]);
	}

}

function activate(imgSrc){
	for(var i = 0; i < imgs.length; i++){
		
		imgs[i].classList.remove('active');
		if (i === step){
			imgs[i].classList.add('active');
		}
	}
}

function nextImg(isNext){
	var oldDiv = document.querySelector('.carpage-slider-bigimg');

	var newDiv = document.createElement('div');
	newDiv.className = 'carpage-slider-bigimg';
	var container = document.querySelector('.carpage-slider-container');
	var newImg = document.createElement('img');
	newImg.className = this.sliderBigImgClass;
	imgSrc =  nextSrc(isNext);
	newImg.src = imgSrc;
	newDiv.appendChild(newImg);

	if (isNext){
	    newDiv.classList.add('right');
	    container.appendChild(newDiv);
	    requestAnimationFrame(function(){
	        newDiv.classList.remove('right');
	        oldDiv.classList.add('left');
	    });
	} else {
	     newDiv.classList.add('left');
	     container.insertBefore(newDiv, oldDiv);

	     requestAnimationFrame(function(){
	        newDiv.classList.remove('left');
	        oldDiv.classList.add('right');
	     });
	}

	activate(imgSrc);

	setTimeout(function(){
	    requestAnimationFrame((function(){
	        container.removeChild(oldDiv);
	    }));
	}, 800);
}
