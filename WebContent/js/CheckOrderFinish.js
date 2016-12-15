

var tip;
var num = 0;
var oldid = '';var n=0;

function checkfinish(){	 
     $.ajax({
        type: "post",	
        url: "CheckOrderFinish",
        data: '',
        dataType: "json",
        async:false,
        success: function(data){
			//jquery 赋值方式 	
        	// alert(data.ID);
        	n++;
        	$(":button").removeAttr("disabled");
        	  
        	if(oldid==data.ID)  //本次和上次接收到的ID 一样  说明无新的执行完毕指令
        		{
	        		 if(n==3)  //10s进行一次 AJAX n=3 表示30S 仍未接受到返回指令
	        		{ $.ligerDialog.tip({  title: '指令执行反馈',content:'指令ID ：'+data.information+"未执行！" });	;n=0;}
        		}
        		
        	else
        		{
	        		oldid=data.ID;            
	        	  if (!tip) {
	        		  tip= $.ligerDialog.tip({  title: '指令执行反馈',content:'指令ID：'+data.information });	
	              		}
	              else {
	                  var visabled = tip.get('visible');
	                  if (!visabled) tip.show();
	                  tip.set('content', '新的指令：' +num++);
	              }
        		}
        	
       	 }  
       	
        }); 
     }
      

window.setInterval("checkfinish()", 10000);   //每隔分钟调用一次getGoods()方法