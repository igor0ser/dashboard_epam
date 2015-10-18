function fade1(){
    window.requestAnimationFrame(function(){
        document.querySelector('[data-auth=popup-background]').classList.add('fadeOut');
        document.querySelector('[data-auth=form]').classList.add('fadeOutUp');
    });

    setTimeout(function(){
        document.querySelector('.authorization-sign-in-form').classList.add('is-not-displayed');
        document.querySelector('.authorization-success').classList.remove('is-not-displayed');
        document.querySelector('[data-auth=popup-background]').classList.remove('fadeOut');
        document.querySelector('[data-auth=form]').classList.remove('fadeOutUp');
    }, 1000);
}

function fade2(){
    window.requestAnimationFrame(function(){
        document.querySelector('[data-auth=popup-background]').classList.add('fadeOut');
        document.querySelector('[data-auth=form]').classList.add('fadeOutUp');
    });

    setTimeout(function(){
        document.querySelector('[data-auth=popup-background]').classList.add('is-not-displayed');
        document.querySelector('[data-auth=form]').classList.add('is-not-displayed');
    }, 1000);
}