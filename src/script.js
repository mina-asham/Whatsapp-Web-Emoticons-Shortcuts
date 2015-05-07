var safeReplace = function (input, oldValue, newValue) {
	var specials = /[.*+?|()\[\]{}\\$^]/g; // .*+?|()[]{}\$^
	var safeOldValue = oldValue.replace(specials, '\\$&');
	var regex = new RegExp(safeOldValue, 'gi');
	
	return input.replace(regex, newValue);
};

var moveCursorToEnd = function (element) {
    var range, selection;
    
	if (document.createRange) {
        range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
    else if(document.selection)
    { 
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.collapse(false);
        range.select();
    }
};

var shortcuts = {
	'::d'   : '<img alt="😂" draggable="false" class="emoji emojiordered1155" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':d'   : '<img alt="" class="emoji emojiordered1156" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':))'  : '<img alt="" class="emoji emojiordered1163" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	';)'   : '<img alt="" class="emoji emojiordered1162" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':p'   : '<img alt="" class="emoji emojiordered1181" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':('   : '<img alt="" class="emoji emojiordered1173" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':\'(' : '<img alt="" class="emoji emojiordered1187" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':o'   : '<img alt="😮" class="emoji emojiordered1199" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	'o:)'  : '<img alt="😇" class="emoji emojiordered1160" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	'b)'   : '<img alt="😎" class="emoji emojiordered1167" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':|'   : '<img alt="😐" class="emoji emojiordered1169" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':$'   : '<img alt="" class="emoji emojiordered1204" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	'xd'   : '<img alt="😁" draggable="false" class="emoji emojiordered1154" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	'::*'  : '<img alt="" class="emoji emojiordered1166" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',
	':*'   : '<img alt="" class="emoji emojiordered1177" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">'
};

$(document).ready(function () {
	$('body').on('keyup', 'div.input-container div.input', function(event) {
		var input = $(event.target);
		var text = input.html();
			
		for (var shortcut in shortcuts) {
			text = safeReplace(text, shortcut, shortcuts[shortcut]);
		}
			
		if (text != input.html()) {
			// adding an extra space to delete manually and trigger state change
			input.html(text + " ");
			moveCursorToEnd(input.get(0));
		}
	});
});