let currentColorIndex = 0;

// SCROLL BOX MOVEMENT
$('#submit').click(moveScrollBox);
$('input').keypress(event => {
    let keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		moveScrollBox();
	}
});

function moveScrollBox()
{
    if ($('#name').val() == '') alert("Please enter a valid name");
    else $('#scroll-box').css({'margin-left': '-1150px'});
}

// PARTY BUTTON
$('#celebrate-button').click(startParty);

function startParty()
{
    $('#section-title').text('Happy Birthday ' + $('#name').val());
    document.title = 'Happy Birthday ' + $('#name').val() + '!';
    $('section').css({'left': '0'});
    startConfetti();
    $('body').css({'animation-name': 'shake', 'animation-duration': '1s', 'animation-iteration-count': '1'});

    setInterval(changeColors, 1000);
}

function changeColors()
{
    let colors = ['red', 'green', 'orange', 'blue', 'yellow', 'purple', 'white'];
    if (currentColorIndex < 6) currentColorIndex++;
    else currentColorIndex = 0;

    $('section').css({'background-color': colors[currentColorIndex]});
}