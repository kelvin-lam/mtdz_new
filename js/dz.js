var cat = getQueryString("s");
$(document).ready(function() {
    jQuery.ajax({
        url:"js/dz.xml",
        dataType:"xml",
        error: function(){
            alert('Error loading XML document');
        },
        success:function(xml) {
            var dz = jQuery(xml).find("dz[section="+cat+"]");
            var name = jQuery(dz).find("name").first().text();
            window.document.title = name;
            jQuery("div.container").css("background-image","url("+jQuery(dz).find("background").first().text()+")");

            jQuery("div.container").find("div.wrapper section.box-container figure").find("h1").html(name);
            //jQuery("div.container").find("div.wrapper section.box-container").find("li.section").html(name);
            jQuery("div.container").find("div.wrapper section.box-container figure ").find("img").attr("src",jQuery(dz).find("profile").first().text());

            jQuery("div.container").find("div.wrapper section.box-container div.aboutus-content p.service").html(jQuery(dz).find("service>desc").first().text());
            jQuery("div.container").find("div.wrapper section.box-container div.aboutus-content p.advantage").html(jQuery(dz).find("advantage>desc").first().text());
            jQuery("div.container").find("div.wrapper section.box-container div.aboutus-content p.sample").html(jQuery(dz).find("sample>desc").first().text());

        }
    });
});

function buildSchoolListCell(item){
    var detail_page = "";
    if(cat == "school"){
        detail_page = "school_detail.html";
    }
    var html =
        "<div class='col-sms-6 col-sm-6 col-md-9'>" +
        "   <article class='box'>" +
        "       <div class='row'> " +
        "           <div class='col-sms-6 col-sm-6 col-md-4'> " +
        "               <figure class='' data-animation-type='' data-animation-delay='0'>    " +
        "                   <img width='270' height='160' alt='' src='"+jQuery(item).find("profile").text().trim()+"'> " +
        "                   <p style='text-align: center;'>"+
        "                       <br/><a href='"+detail_page+"?id="+jQuery(item).attr("id")+"' class='button btn-small'>查看详情</a> " +
        "                   </p>"   +
        "               </figure> " +
        "           </div> " +
        "           <div class='col-sms-6 col-sm-6 col-md-8' style='padding:0px;padding-top:20px;'> " +
        "               <div class='detailed-features'> " +
        "                   <div class='row price-section clearfix'> " +
        "                       <div class='col-md-6'> " +
        "                           <h4 class='box-title'>"+jQuery(item).find("name").text()+"</h4> " +
        //"                           <div data-placement='bottom' data-toggle='tooltip' class='five-stars-container'> " +
        //"                               <span style='width: 90%;' class='five-stars'></span> " +
        //"                           </div> " +
        "                       </div> " +
        //"                       <div class='col-md-5'> " +
        //"                           <span class='price'>全美排名No.1</span> " +
        //"                       </div> " +
        "                       <div class='col-md-11'> " +
        "                           <p>" +
                                        buildDescription(html_decode(jQuery(item).find("description").text()))
        "                           </p> " +
        "                       </div> " +
        "                   </div> " +
        "               </div> " +
        "           </div> " +
        "       </div> " +
        "   </article> " +
        "</div>";
    return html;
}

function buildDescription(desc){
    return desc.length>400 ? desc.substr(0,400)+"..." : desc;
}



