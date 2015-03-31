$(document).ready(function() {
    jQuery.ajax({
        url:"js/routes.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            jQuery(xml).find("route").each(function(){
                jQuery("div.blog-lists>ul").append("" +
                    "<li class='blog-post'> " +
                    "   <a href='route_detail.html?id="+jQuery(this).attr("id")+"'> " +
                    "       <figure> " +
                    "           <div class='thumbnail-hover'></div> " +
                    "           <img src='"+jQuery(this).find("profile").text()+"' alt='blog thumbnail' width='614' height='218'/> " +
                    "       </figure> " +
                    "   </a> " +
                    "   <div class='blog-meta'> " +
                    "       <div class='post-date'> " +
                    "           <div class='date-box'>" +
                                    returnFloat(parseFloat(jQuery(this).find("reviews").find("point").html())*5.0/100.0) +
                    "               <br><span class='post-month'>评分</span> " +
                    "           </div> " +
                    "       </div> " +
                    "       <div class='post-title'> " +
                    "           <h2><a href='route_detail.html'>"+jQuery(this).find("title").text()+"</a></h2> " +
                    "           <ul> " +
                    "               <li>最后评分: <a href='#'>"+jQuery(this).find("reviews").find("review").first().find("time").text()+"</a></li> " +
                    "               <li>评论人: <a href='#'>"+jQuery(this).find("reviews").find("review").first().find("name").text()+"</a></li> " +
                    "               <li>分数: <a href='#'>"+returnFloat(parseFloat(jQuery(this).find("reviews").find("review").first().find("point").text())*5.0/100.0)+"</a></li> " +
                    "           </ul> " +
                    "       </div> " +
                    "   </div> " +
                    "</li>"
                );
            });
        }
    });


});

function buildDescription(desc){
    var des = desc.replace("&lt;h2&gt;","").replace("&lt;/h2&gt;","&lt;/br&gt;").replace("&lt;p&gt;","").replace("&lt;/p&gt;","&lt;/br&gt;");
    return des.length>200 ? des.substr(0,200)+"..." : des;
}
