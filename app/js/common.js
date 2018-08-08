jQuery(function() {
    var result_outptut = jQuery("#revenue"),
        summ = 300000,
        revenue = 0,
        time = 5;

    function recount() {
        revenue = summ+((summ*0.05)*time);
        result_outptut.text(revenue);
    };
    
    
    $(document).on("change keyup", ".amount", function() {
        summ = +$(this).val();
        $("#slider-range-min").slider("value", summ);
        recount();
    });
    $(document).on("change keyup", ".amount2", function() {
        time = +$(this).val();
        $("#slider-range-min2").slider("value", time);
		if (time == 1){
			$('#month').text('');
			$('#month-1').text('');
		};
		if (time > 1){
			$('#month').text('а');
			$('#month-1').text('а');
		};
		if (time >= 5){
			$('#month').text('ев')
			$('#month-1').text('ев')
		}
        recount();
    });
});
$(function() {
    $("#slider-range-min").slider({
        range: "min",
        value: 300000,
        min: 100000,
        max: 1000000,
        slide: function(event, ui) {
            $('.amount').val(ui.value).trigger("change");
            $('span.amount-2').text(ui.value).trigger("change");
        }
    });
    $(".amount").val($("#slider-range-min").slider("value"));
	$("span.amount-2").text($("#slider-range-min").slider("value"));
});
$(function(){
    $("#phone").mask("+7(999)999-99-99");
});
$(function(){
    $("#phone-2").mask("+7(999)999-99-99");
});
$(function() {
    $("#slider-range-min2").slider({
        range: "min",
        value: 3,
        min: 1,
        max: 12,
        slide: function(event, ui) {
            $(".amount2").val(ui.value).trigger("change");
            $("span.amount2-2").text(ui.value).trigger("change");
        }
    });
    $(".amount2").val($("#slider-range-min2").slider("value"));
    $("span.amount2-2").text($("#slider-range-min2").slider("value"));
});
$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
		autoHeight: true,
    });
    

	$("input[name=phone]").mask("+7(999)999-99-99");
	//Ajax Form
	$("form").submit(function() {
		event.preventDefault();
		var form_data = $(this).serialize();
		$.ajax({
		type: "POST",
		url: "sendmail.php",
		data: form_data,
		success: function() {
				$('.modal').hide();
	   			$('.thanks').show();
			}
		});
	});
	$('.phonecall a.btn').click(function(){
		$('.modal.phonecall').show();
	});
	$('.modal a.close2').click(function(){
		$('.modal').hide();
	})
	$('.modal a.close').click(function(){
		$('.modal').hide();
	})
});    
