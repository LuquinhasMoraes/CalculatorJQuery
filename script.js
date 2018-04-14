$(function(){

	var v1, v2, option;

	$("input[name=btn]").click( function(){
		var valor = $(this).val();

		$("#result").val($("#result").val() + valor);
		
	});


	//Limpa campo de Resultado

	$("input[name=CE]").click( function(){
		$("#result").val('');
		$("#option").text('');
	});


	$("input[name=vezes]").click( function(){
		v1 = parseFloat($("#result").val());
		if (v1) {
			$("#option").text('X');
			$("#result").val('');
			option = 'vezes';	
		} else{
			alert('Não é possível fazer uma operação sem informar o primeiro valor!');
		}
	});

	$("input[name=soma]").click( function(){
		v1 = parseFloat($("#result").val());
		if (v1) {
			$("#option").text('+');
			$("#result").val('');
			option = 'soma';	
		} else{
			alert('Não é possível fazer uma operação sem informar o primeiro valor!');
		}
	});

	$("input[name=sub]").click( function(){
		v1 = parseFloat($("#result").val());
		if (v1) {
			$("#option").text('-');
			$("#result").val('');
			option = 'sub';	
		} else{
			alert('Não é possível fazer uma operação sem informar o primeiro valor!');
		}
	});

	$("input[name=div]").click( function(){
		v1 = parseFloat($("#result").val());
		if (v1) {
			$("#option").text('/');
			$("#result").val('');
			option = 'div';	
		} else{
			alert('Não é possível fazer uma operação sem informar o primeiro valor!');
		}
	});

	$(".igual").click( function(){

		v2 = parseFloat($("#result").val());

		if (option == 'vezes') {
			
			$("#result").val(v1 * v2);

		} else if(option == 'div'){
			$("#result").val(v1 / v2);
		} else if (option == 'soma'){
			$("#result").val(v1 + v2);
		} else {
			$("#result").val(v1 - v2);
		}



	});



	$("input[name=C]").click(function(){
		var len = $("#result").val().length;

		var valor = $("#result").val();
		var vetor = new Array();

		valor = valor.replace(valor.charAt(len - 1), "");

		$("#result").val(valor);

		



				
		
	});

});