$(document).ready(function(){
		/*点击打开后台切换页面*/
	$("#logo_open").click(function(){
		$(".middle_box").find("iframe").attr("src","/server/baidu_houtai.html");
	});
	
	/*克隆添加html*/
	newBOx();

	/*点击按钮给a标签修改属性值*/
	$("a.nav_box").click(function(){
		$("a.nav_box").attr("id","");
		$(this).attr("id","select");
		
		/*添加ajax请求*/
		$.ajax({
			type:"GET",
			url:"../server/baidu.py",
			dataType:"json",
			data:{
				"id":$(this).find('i').attr('id')
			},
			async:true
		});
	});
});

	function newBOx(){
		var $lists=$(".middle_box");
		/*先清空，再加载 */
		$($lists).empty();
		var $list=$("<div></div>").addClass("new_box").prependTo($lists);
		var $title=$("<div></div>").addClass("new_title").appendTo($list);
		var $pic=$("<div></div>").addClass("new_pic").appendTo($list);
		var $p1=$("<div></div>").addClass("p1").appendTo($pic);
		var $p2=$("<div></div>").addClass("p2").appendTo($pic);
		var $p3=$("<div></div>").addClass("p3").appendTo($pic);
		var $inscribe=$("<div></div>").addClass("new_Inscribe").appendTo($list);
		var $inscribe_title=$("<div></div>").addClass("new_Inscribe_info title").appendTo($inscribe);
		var $inscribe_time=$("<div></div>").addClass("new_Inscribe_info time").appendTo($inscribe);
		var $line=$("<div></div>").addClass("new_line").appendTo($list);

	}
