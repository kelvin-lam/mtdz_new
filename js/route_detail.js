var id = getQueryString("id");
$(document).ready(function() {
    jQuery.ajax({
        url:"js/routes.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var route = jQuery(xml).find("route[id="+id+"]");
            var name = jQuery(route).find("title").html();
            window.document.title = name;
            jQuery(".route_name").html(name);

            jQuery(".container figure.feature-image>img").attr("src",jQuery(route).find("profile").text());

            jQuery(".route_point").html(returnFloat(parseFloat(jQuery(route).find("reviews").find("point").text())*5.0/100.0));
            jQuery("div.blog-container .blog-details .review_time").append(jQuery(route).find("reviews").find("review").first().find("time").text());
            jQuery("div.blog-container .blog-details .review_people").append(jQuery(route).find("reviews").find("review").first().find("name").text());
            jQuery("div.blog-container .blog-details .review_point").append(returnFloat(parseFloat(jQuery(route).find("reviews").find("review").first().find("point").text())*5.0/100.0));

            jQuery(route).find("reviews").find("review").each(function(){
                jQuery(".blog-comment ul").append("" +
                "<li> " +
                    "<div class='avatar'> " +
                        "<figure> " +
                            "<img src='images/default_profile.png' alt='avatar' width='85'/> " +
                        "</figure> " +
                    "</div> " +
                    "<div class='comment-details'> " +
                        "<div class='comment-header'> " +
                            "<div class='name-date'>" +
                                jQuery(this).find("name").text()+
                                "<span class='comment-date'>"+jQuery(this).find("time").text()+"</span> " +
                            "</div> " +
                        "</div> " +
                        "<div class='comment-text'> " +
                            "<p>"+jQuery(this).find("comment").text()+"</p> " +
                        "</div> " +
                    "</div> " +
                "</li>");
            });

            jQuery(xml).find("route").each(function(){
                jQuery("aside.page-sidebar .recent-news>ul").append("" +
                "<li> " +
                    "<div class='recent-thumb'> " +
                        "<figure> " +
                            "<a href='route_detail.html?id="+jQuery(this).attr("id")+"'> " +
                                "<div class='thumbnail-hover'></div> " +
                                "<img src='"+jQuery(this).find("profile").text()+"' alt='recent news' width='65'/> " +
                            "</a> " +
                        "</figure> " +
                    "</div> " +
                    "<div class='recent-details'> " +
                        "<h4><a href='route_detail.html'>"+jQuery(this).find("title").text()+"</a></h4> " +
                        "<div class='readmore'>" +
                            "<a href='route_detail.html?id="+jQuery(this).attr("id")+"'>查看详情</a>" +
                        "</div> " +
                "</div> " +
                "</li>");
            });
        }
    });


});
