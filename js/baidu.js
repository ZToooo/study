$(document).ready(function(){
	
	/*点击打开后台切换页面*/
	$("#logo_open").click(function(){
		var logo_open_value=$(this).html();
		//console.log(logo_open_value);
		if(logo_open_value=="打开后台"){
			$(".middle_box").css("display","none");
			$(".news_box").css("display","block");
			$(this).html("关闭后台");
		}else if(logo_open_value=="关闭后台"){
			//console.log("点了关闭后台就要还原回去了");
			$(".middle_box").css("display","block");
			$(".news_box").css("display","none");
			$(this).html("打开后台");
		}
	});
	
	/*加载全路径*/
	$("#load_file").change(function(){
		$("#em").text($("#load_file").val());
	});
	
	
	/*提交后台编辑内容*/
	$("#onload").click(function(){
		$.ajax({
			type:"GET",
			url:"../server/baidu.py",
			async:true,
			dataType:"json",
			data:{
				"title":$("#news_title").html(),
				"text":$("#news_text").html(),
				"p1":$("#p1").attr("src"),
				"p2":$("#p2").attr("src"),
				"p3":$("#p3").attr("src")
			}
		});
	})

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
