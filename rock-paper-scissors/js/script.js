$(document).ready(function () {
    $('.select a').on('click', function () {
        joken($(this));
        return false;
    })
})

var you = 0;
var cpu = 0;

function joken(el) {
    var venceu;
    var random = Math.floor(Math.random() * 3);
    var val = $(el).attr('value');
    $('.you-pick').html('');
    $(el).clone().appendTo('.you-pick');
    console.log('antes: ' + random)
    if (random == val) {
        refreshData('DRAW!');
    }
    console.log('depois: ' + random);
    $('.cpu-pick').html('');
    var cloneCpu = $('.select a[value="' + random + '"]').clone().appendTo('.cpu-pick');

    if ((val == 0 && random == 1) || (val == 1 && random == 2) || (val == 2 && random == 0)) {
        you++;
        refreshData('YOU WIN');
    }
    if ((val == 1 && random == 0) || (val == 2 && random == 1) || (val == 0 && random == 2)) {
        cpu++;
        refreshData('YOU LOSE');
    }

    toggleOptions();
}

function toggleOptions() {
    
    if ($(window).innerWidth() > 1023){
        $('section.options').slideToggle(400);
    }
    else{
        $('section.options').toggle();
    }
}

function refreshData(text) {
    $('.result .text span').html(text);
    $('#cpu').html(cpu);
    $('#user').html(you);
}

function toggleModal(){
    $('.modal').fadeToggle(400);
}
