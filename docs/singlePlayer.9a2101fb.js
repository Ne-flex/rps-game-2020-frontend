function e(e){event.preventDefault();var n=document.getElementById("singlePlayerResult");const t="https://vast-wildwood-04775.herokuapp.com/rps/?&decisionPlayer1="+e;$.get({url:t,success:function(e,t){console.log("Data: "+e+"\nStatus: "+t);var r=JSON.parse(e);n.innerHTML="  The Winner is:      "+r.Winner},error:function(e,n,t){alert(n,t)}})}function n(n){e($("#playerAnswer").val())}$(document).ready((function(){$("#SubmitBtn").click(n)}));
//# sourceMappingURL=singlePlayer.9a2101fb.js.map
