let btn = document.querySelector('.js-iconAdd');

btn.addEventListener('click', function(e){
    e.preventDefault();

    document.querySelector('.js-boxContent').classList.toggle('hidden');
})
