window.addEventListener('DOMContentLoaded', function (){
    const item = document.querySelectorAll('.item');
        item.forEach( item =>{
            item.addEventListener('click', (e) =>{
                item.classList.toggle('item__active');
                if(item === disItem){
                    e.preventDefault();
                    return false;
                }
            }); 
        });

    const disItem = document.getElementById('2');
     const timer = setTimeout(function(){
         disItem.classList.add('item__disabled');
     }, 4000);    
});
