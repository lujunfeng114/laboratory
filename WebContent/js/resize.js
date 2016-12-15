$(window).resize(
function(){
$("#area1").attr("coords",function(){
	//var height=$("#my_image").attr("height");
	//var width=$("#my_image").attr("width");	
	var height=$("#my_image").innerHeight();
	var width=$("#my_image").innerWidth();		
	
	
	string= width*0.51+","+height*0.05+","+width*0.78+","+height*0.5;
	return string;
	
});


$("#area2").attr("coords",function(){
	//var height=$("#my_image").attr("height");
	//var width=$("#my_image").attr("width");	
	var height=$("#my_image").innerHeight();
	var width=$("#my_image").innerWidth();		
	
	
	string= width*0.51+","+height*0.6+","+width*0.78+","+height*0.9;
	return string;
	
});


$("#area3").attr("coords",function(){
	//var height=$("#my_image").attr("height");
	//var width=$("#my_image").attr("width");	
	var height=$("#my_image").innerHeight();
	var width=$("#my_image").innerWidth();		
	
	
	string= width*0.8+","+height*0.05+","+width+","+height*0.9;
	return string;
	
});

});
