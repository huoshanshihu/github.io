$(function(){
	var page = {
		init: function(){
			this.beginShow();
		},

		beginShow: function(){
			setTimeout('$("#beginShow").fadeOut(2000)',1000);
		}
	}
	page.init();
});
