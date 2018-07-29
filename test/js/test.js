$(function(){
    //滚动条拖动一定位置固定导航栏，悬浮窗固定显示
    function getDom(id) {
        return document.getElementById(id);
    }
    na =getDom('na');
    var novtop = $('#na').offset().top;
    $(window).scroll(function() {
            var scrolltop = $(window).scrollTop();
            if (scrolltop > novtop) {
                $('#count').css("display", "block");
                $('#na').addClass('fixed');
                $('#na').css({"top": "0px", 'height': '46px', 'z-index': '1000'});
            }
            if (scrolltop <= novtop) {
                $('#count').css('display', 'none');
                na.className = 'nav-bottom';
            }
        })

    //模态对话框添加拖拽效果
    $(".modal-dialog").draggable();
    $(".modal-dialog").draggable({
        handle: ".modal-header"
    });
    $(".modal-dialog").parent().css("overflow", "hidden");

//顶部导航栏微信服务号图片显示
    $("#wei_chat").hover(function(){
        $("#weixin_pic").css('display','block');
    },function(){
        $("#weixin_pic").css('display','none');
    })

//购买份数输入框获取焦点、失去焦点边框阴影效果
        $('#pay_much').focus(function(){
            $('#pay_much').css({'border':'1px solid rgba(49,177,255,0.75)','box-shadow':'0px 0px 5px rgba(49,177,255,0.75'});
        })
        $('#pay_much').blur(function(){
            $('#pay_much').css({'border':'solid 1px #d5d5d5','box-shadow':'0px 0px 0px rgba(49,177,255,1'});
        })

    //购买期限输入框点击获取相应值
    var sb = document.getElementById("sb");
    var sbHolder = document.getElementById("sbHolder");
    var flag = true;
    sb.addEventListener('click',function(){
        if(flag){
            $('#month-div').css({'display':'block'});
            $('#year-div').css({'display':'none'});
            flag = false;
        }else{
            $('#month-div').css({'display':'none'});
            flag = true;
        }
    });
    sbHolder.addEventListener('click',function(){
        if(flag){
            $('#year-div').css({'display':'block'});
            $('#month-div').css({'display':'none'});
            flag = false;
        }else{
            $('#year-div').css({'display':'none'});
            flag = true;
        }
    });




    var psoft = $('#soft').html() ;

    $('#month-li').click(function(){
         $('#sbSelector_month').html($('#month-li').html());
        $('#soft').html( '￥680.00');
    })
    $('#year-li').click(function(){
        $('#sbSelector_month').html($('#year-li').html())
        var months = parseInt($('#sbSelector').html());
        console.log(months);
        $('#soft').html('￥' + String((parseInt(psoft.substring(1,7)*months*12).toFixed(2))));
        $('<div style="width: 80px;height: 1px;border: 1px solid red;position: absolute;display: inline-block;left: 85px;top: 23px;"></div>').insertAfter('#soft');
 $('#ze_kou').css('right','270px');
        $('#much_yh').css({'display':'inline-block'});
        $('<div id="add_div" style="display: inline;color: red;margin-left: 10px;"></div>').insertAfter('#soft');
        $('#add_div').html('￥' + String((parseInt(psoft.substring(1,7)*months*12)*0.83).toFixed(2)));

    })

//优惠折扣
    $('#yh_zk').hover(function(){
        $('#ze_kou').css('display','block');
    },function(){$('#ze_kou').css('display','none');})
    $('#ze_kou').hover(function(){
        $('#ze_kou').css('display','block');
    },function(){$('#ze_kou').css('display','none');})



    //定制产品、评分评论、历史版本相互切换
     $('#comment').click(function(){
         $('#comment').css({'color': '#3A85C6',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #3A85C6'});
         $('#cust_product').css({ 'color': '#555555',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #fff'});
         $('#host_version').css({ 'color': '#555555',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #fff'});
         $('#comment_box').css('display','block');
         $('#cust_product_box').css('display','none');
         $('#host_box').css('display','none');
         $('#map_gis').css('display','none');
     })
     $('#cust_product').click(function() {
         $('#cust_product').css({'color': '#3A85C6',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #3A85C6'});
         $('#comment').css({'color': '#555555',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #fff'});
         $('#host_version').css({'color': '#555555',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #fff'});
         $('#comment_box').css('display','none');
         $('#cust_product_box').css('display','block');
         $('#host_box').css('display','none');
         $('#map_gis').css('display','block');
     })
     $('#host_version').click(function(){
         $('#host_version').css({'color': '#3A85C6',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #3A85C6'});
         $('#comment').css({'color': '#555555',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #fff'});
         $('#cust_product').css({'color': '#555555',
             'padding-bottom': '5px', 'border-bottom': 'solid 2px #fff'});
         $('#comment_box').css('display','none');
         $('#cust_product_box').css('display','none');
         $('#host_box').css('display','block');
         $('#map_gis').css('display','block');
     })

     //网站导航聚焦事件
     $('#web_nav').hover(function(){
         $('#web_nav_div').css('display','block');
         $('#web_nav_pic').css('transform','rotateX(180deg)');
     },function(){
         $('#web_nav_div').css('display','none');
         $('#web_nav_pic').css('transform','rotateY(180deg)');
     })

    //产品添加事件
     $('#add_pro').click(function(){
         var p =$('#pro_price').html();
         $("#jh").animate({bottom:'150px'},function() {
             $("#jh").css('display', 'none');
             $("#hj").css('display', 'block');
         })
         $('#setTotal').html('￥' + p.substring(1,7));
        $('#soft').html('￥' + p.substring(1,7));
     })

     $('#pro_triangle').click(function(){
         $("#jh").animate({top:'0px'},function() {
             $("#jh").css('display', 'block');
             $("#hj").css('display', 'none');
         })

         $('#soft').html('￥680.00');
         $('#setTotal').html('￥00.00');
     })
     //三维插件
    $('#three_add').click(function(){
        var p =$('#three_price').html().substring(1,7);
        var h = $('#soft').html() ;
        $("#three_div").animate({bottom:'150px'},function() {
            $("#three_div").css('display', 'none');
            $("#include_three").css('display', 'block');
        })
        var pr = String(parseInt(p)+parseInt(h));
        $('#setTotal').html("￥"+pr );
        $('#soft').html( '￥' + pr);
    })
    $('#three_triangle').click(function(){
        $("#three_div").animate({top:'0px'},function() {
            $("#three_div").css('display', 'block');
            $("#include_three").css('display', 'none');
        })
    })

     //矢量插件
     $("#add_vector").click(function(){
         $("#vector_plug_in").animate({bottom:'150px'},function() {
             $("#vector_plug_in").css('display', 'none');
             $("#include_vector").css('display', 'block');
         })
     })
     $('#vector_triangle').click(function(){
         $("#vector_plug_in").animate({top:'0px'},function() {
             $('#vector_plug_in').css('display', 'block');
             $('#include_vector').css('display', 'none');
         })
     })

     //栅格插件
    $("#grid_add").click(function(){
        $("#grid_plug_in").animate({bottom:'150px'},function() {
            $("#grid_plug_in").css('display', 'none');
            $("#include_grid").css('display', 'block');
        })
    })
    $('#grid_triangle').click(function(){
        $("#grid_plug_in").animate({top:'0px'},function() {
            $('#grid_plug_in').css('display', 'block');
            $('#include_grid').css('display', 'none');
        })
    })

     //影像插件

    $("#icon_add").click(function(){
        $("#icon_plug_in").animate({bottom:'150px'},function() {
            $("#icon_plug_in").css('display', 'none');
            $("#include_icon").css('display', 'block');
        })
    })
    $('#icon_triangle').click(function(){
        $("#icon_plug_in").animate({top:'0px'},function() {
            $('#icon_plug_in').css('display', 'block');
            $('#include_icon').css('display', 'none');
        })
    })


     //网络插件
    $("#net_add").click(function(){
        $("#net_plug_in").animate({bottom:'150px'},function() {
            $("#net_plug_in").css('display', 'none');
            $("#include_net").css('display', 'block');
        })
    })
    $('#net_triangle').click(function(){
        $("#net_plug_in").animate({top:'0px'},function() {
            $('#net_plug_in').css('display', 'block');
            $('#include_net').css('display', 'none');
        })
    })

     //
     //地图插件

    $("#map_add").click(function(){
        $("#map_plug_in").animate({bottom:'150px'},function() {
            $("#map_plug_in").css('display', 'none');
            $("#include_map").css('display', 'block');
        })
    })
    $('#map_triangle').click(function(){
        $("#map_plug_in").animate({top:'0px'},function() {
            $('#map_plug_in').css('display', 'block');
            $('#include_map').css('display', 'none');
        })
    })

     //瓦片插件
    $("#tile_add").click(function(){
        $("#tile_plug_in").animate({bottom:'150px'},function() {
            $("#tile_plug_in").css('display', 'none');
            $("#include_tile").css('display', 'block');
        })
    })
    $('#tile_triangle').click(function(){
        $("#tile_plug_in").animate({top:'0px'},function() {
            $('#tile_plug_in').css('display', 'block');
            $('#include_tile').css('display', 'none');
        })
    })

     //
     //综合插件

    $("#zh_add").click(function(){
        $("#zh_plug_in").animate({bottom:'150px'},function() {
            $("#zh_plug_in").css('display', 'none');
            $("#include_zh").css('display', 'block');
        })
    })
    $('#zh_triangle').click(function(){
        $("#zh_plug_in").animate({top:'0px'},function() {
            $('#zh_plug_in').css('display', 'block');
            $('#include_zh').css('display', 'none');
        })
    })

     //分析插件


    $("#fx_add").click(function(){
        $("#fx_plug_in").animate({bottom:'150px'},function() {
            $("#fx_plug_in").css('display', 'none');
            $("#include_fx").css('display', 'block');
        })
    })
    $('#fx_triangle').click(function(){
        $("#fx_plug_in").animate({top:'0px'},function() {
            $('#fx_plug_in').css('display', 'block');
            $('#include_fx').css('display', 'none');
        })
    })

     //数据插件

    $("#data_add").click(function(){
        $("#data_plug_in").animate({bottom:'150px'},function() {
            $("#data_plug_in").css('display', 'none');
            $("#include_data").css('display', 'block');
        })
    })
    $('#data_triangle').click(function(){
        $("#data_plug_in").animate({top:'0px'},function() {
            $('#data_plug_in').css('display', 'block');
            $('#include_data').css('display', 'none');
        })
    })

     //移动插件
    $("#moblie_add").click(function(){
        $("#moblie_plug_in").animate({bottom:'150px'},function() {
            $("#moblie_plug_in").css('display', 'none');
            $("#include_moblie").css('display', 'block');
        })
    })
    $('#moblie_triangle').click(function(){
        $("#moblie_plug_in").animate({top:'0px'},function() {
            $('#moblie_plug_in').css('display', 'block');
            $('#include_moblie').css('display', 'none');
        })
    })
 })

//根据购买期限计算价格
function fn(obj){
    var psoft = '￥160.00';
    //var psoft = $('#soft').html() ;
    var price = 0;
        $('#sbSelector').html(obj);
        var num = parseInt(psoft.substring(1, 7));
        price = String((num * obj).toFixed(2));
       $('#soft').html('￥' + price);
        $('#setTotal').html('￥' + price);
        switch (obj) {
            case 12:
                $('<div id="add-box" style="width: 80px;height: 1px;border: 1px solid red;position: absolute;display: inline-block;left: 85px;top: 23px;"></div>').insertAfter('#soft');
                $('#ze_kou').css('right', '270px');
                $('#much_yh').css({'display': 'inline-block'});
                $('<div id="add_div" style="display: inline;color: red;margin-left: 10px;"></div>').insertAfter('#soft');
                $('#add_div').html('￥' + String(((num * obj) * 0.83).toFixed(2)));
                break;

        }

}



