$(document).ready(function(){
	/*克隆添加html*/
	function scrillside(){
		var box=$(window).height();
		console.log(box);
	}
	
	/*点击按钮给a标签修改属性值*/
	$("a.nav_box").click(function(){
		$("a.nav_box").attr("id","");
		$(this).attr("id","select");
	});
	

});