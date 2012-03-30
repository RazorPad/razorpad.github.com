$(function () {
	$('#nav').on('click', 'ul a', function () {
		var uid = $(this).data('uid');
		if (uid) {
			$('#examples iframe').attr('src', 'http://razorpad.apphb.com/' + uid);
			return false;
		}
	});
} (jQuery));