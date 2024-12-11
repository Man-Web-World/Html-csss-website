
$(function(){  

    $list= $('ul');  
    $form = $('#form');  

    $form.on('submit', function(e){  
        e.preventDefault();  
        var $text = $('input:text').val();  
        $list.append('<li>' + $text + '</li>');  
        $('input:text').val('');  
    });  
    $list.on('click', 'li',  function(){  
        $(this).remove()  
        $('"img/icons8-trash-128.png"').add() 
            //    var $li = $(this)  
        // $li.css({  
        //     textDecoration: 'line-through'  
        // })  
})  
})
