$(document).ready(function(){
	//debugger
	
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
	
	//判断选择的新闻类型是小说的话，就多滑动出一个框
	
	
	/*加载全路径*/
	$("#load_file").change(function(){
		$("#em").text($("#load_file").val());
	});
	
	/*监听上传选择文件按钮*/
	var p1=$("#pic1");
	var p2=$("#pic2");
	var p3=$("#pic3");
	$("#load_file").change(function(e){		
		//debugger
		//获取文件
		if(p1.src=" "){
			var P_url=this.files[0];
			//判断是否是图片
			if(P_url.type.indexOf("image")==0){
				var reader=new FileReader();
				if(p1[0].src){
					//读取图片文件
					reader.readAsDataURL(P_url);
					var resl = reader.result;
					//resl=resl.substring(5,resl.length)
					p1[0].src=resl;
				}
			}
		}
	});
	
	/*提交后台编辑内容*/
	$("#onload").click(function(){
		//debugger
		$.ajax({
			type:"GET",
			url:"./server/baidu_node.js",
			async:true,
			dataType:"json",
			data:{
				"title":$("#news_title").val(),
				"type":$("select").val(),
				"pic":$(".pic_group").attr("src")
			}
		});
	})

	/*点击按钮给a标签修改属性值*/
	$(".nav_box").click(function(){
		var path="server/news_"+$(this).attr("name")+".html";
		$("iframe.middle_box").attr("src",path);
	});
});