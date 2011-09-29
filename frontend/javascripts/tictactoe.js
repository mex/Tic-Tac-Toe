$(document).ready(function () {
	
	// starting player
	var turn = 'cross';
	
	$('.board td').click(function(){
		if($(this).children('div').children('img').size() == 0 && $('img.'+turn).size() < 3) {
			$(this).children('div').html('<img src="frontend/images/'+turn+'.png" class="'+turn+'" ref="'+$(this).attr('id').replace('sq_', '')+'" alt="" />');
			
			turn = endTurn(turn);
		}
	})
	
	$('.board td div').sortable({
		connectWith: '.board td div',
		stop: function (event, ui) {
			var error = false;
			var error_message;
			
			// get information about current piece
			var type = $(ui.item).attr('class');
			
			// get information about old and new square
			var oldSquare = parseInt($(ui.item).attr('ref'));
			var newSquare = parseInt($(ui.item).parent().parent().attr('id').replace('sq_', ''));
			
			if($('img.'+turn).size() >= 3) {
				if(type == turn) {
					if($('#sq_'+newSquare).children('div').children('img').size() == 1) {
						if(newSquare !== oldSquare) {
							// move correct
						} else {
							error = true;
							error_message = 'New square and old square are the same';
						}
					} else {
						error = true;
						error_message = 'New square not empty ('+newSquare+': '+$('#sq_'+newSquare).children('div').children('img').size()+')';
					}
				} else {
					error = true;
					error_message = 'Not '+type+'s turn ('+turn+')';
				}
				
			} else {
				error = true;
				error_message = 'Not all pieces placed (img.'+turn+': '+$('img.'+turn).size()+')';
			}
			
			//debugger
			var isError = error == true;
			if(isError) {
				// move piece back if error occurred
				$('#sq_'+oldSquare+' .piece_box').append(ui.item);
				$('#console').prepend('ILLEGAL MOVE: '+error_message+'<br />');
			} else {
				// update reference
				$(ui.item).attr('ref', $(ui.item).parent().parent().attr('id').replace('sq_', ''));
				
				turn = endTurn(turn);
			}
		}
	}).disableSelection();
});

function endTurn(turn) {
	// check for winner
	if(($('#sq_1').children('div').children('img.'+turn).size() == 1 && $('#sq_2').children('div').children('img.'+turn).size() == 1 && $('#sq_3').children('div').children('img.'+turn).size() == 1) || ($('#sq_1').children('div').children('img.'+turn).size() == 1 && $('#sq_5').children('div').children('img.'+turn).size() == 1 && $('#sq_9').children('div').children('img.'+turn).size() == 1) || ($('#sq_1').children('div').children('img.'+turn).size() == 1 && $('#sq_4').children('div').children('img.'+turn).size() == 1 && $('#sq_7').children('div').children('img.'+turn).size() == 1) || ($('#sq_2').children('div').children('img.'+turn).size() == 1 && $('#sq_5').children('div').children('img.'+turn).size() == 1 && $('#sq_8').children('div').children('img.'+turn).size() == 1) || ($('#sq_3').children('div').children('img.'+turn).size() == 1 && $('#sq_6').children('div').children('img.'+turn).size() == 1 && $('#sq_9').children('div').children('img.'+turn).size() == 1) || ($('#sq_3').children('div').children('img.'+turn).size() == 1 && $('#sq_5').children('div').children('img.'+turn).size() == 1 && $('#sq_7').children('div').children('img.'+turn).size() == 1) || ($('#sq_4').children('div').children('img.'+turn).size() == 1 && $('#sq_5').children('div').children('img.'+turn).size() == 1 && $('#sq_6').children('div').children('img.'+turn).size() == 1) || ($('#sq_7').children('div').children('img.'+turn).size() == 1 && $('#sq_8').children('div').children('img.'+turn).size() == 1 && $('#sq_9').children('div').children('img.'+turn).size() == 1)) {
		// someone won
		$('.container').append('<div class="gameover">'+turn.charAt(0).toUpperCase()+turn.slice(1)+' wins!</div>');
	}
	
	// change player
	if(turn == 'nought') {
		return 'cross';
	} else if(turn == 'cross') {
		return 'nought';
	}
}