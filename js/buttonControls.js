$(document).ready(function(){
	$('[id$="_b"]').click(function(e){
		//console.log(e)	
		//console.log(this.id)
	})

	$("#reset_b").click(function(){
		turing.setInitialState($("#tmInputWord").val())
	})
	$("#load_b").click(function(){
		if (turingCheck())
			turing.setInitialState($("#tmInputWord").val())
	})

	$("#prev_b").click(function(){
		turing.undoMove()
	})
	$("#next_b").click(function(){
		turing.makeNextMove()
	})

	$("#fontDec").click(function(){
		$("#turingCodeEditor").css("line-height",($("#turingCodeEditor").css("line-height").split("px")[0]*1-1)+"px");
		$("#turingCodeEditor").css("font-size",($("#turingCodeEditor").css("font-size").split("px")[0]*1-1)+"px");
		resizeTmEditor()
	})
	$("#fontInc").click(function(){
		$("#turingCodeEditor").css("line-height",($("#turingCodeEditor").css("line-height").split("px")[0]*1+1)+"px");
		$("#turingCodeEditor").css("font-size",($("#turingCodeEditor").css("font-size").split("px")[0]*1+1)+"px");
		resizeTmEditor()
	})
	
	$("#turingCodeEditor").keyup(function(){
		resizeTmEditor()
	})

	function resizeTmEditor(){
		var tm = $("#turingCodeEditor")
		var size = (tm.css("line-height").split("px")[0]*1)
		var lines = tm.html().split("<br>").length
		tm.css("height",Math.floor(size*lines))
	}
	
	function turingCheck(){
		var tm = $("#turingCodeEditor")

		var check = turing.parseDeltaString(tm.html(),$("#numTapes").val(),$("#numTracks").val(),$("#numDimensions").val())
		var text = ""
		text += wrapRed("init: "+check.initState,check.okArr[0])
		text += wrapRed("final: "+(check.finalStates+"").replace(/,/g," "),check.okArr[1])
		for (var i=0 ; i< check.dsa.length ; i++){
			text += wrapRed(check.dsa[i],check.okArr[i+2])
		}
		tm.html(text)
		if (!check.ok){
			graph.clear()
		}
		return check.ok
	}

	function wrapRed(s,ok){
		return (ok ? s : "<span class=\"error\">"+s+"</span>") + "<br>"
	}
	
	$("#turingCodeEditor").bind('paste', function(e){ 
		//console.log(e) 
	})
	
	$("#unlimitedTape").click(function(){
		turing.unlimitedTape = $(this).is(':checked')
		$("#turingCodeEditor").keyup()
	})
	$("#nondeterministic").click(function(){
		turing.nondeterministic = $(this).is(':checked')
		$("#turingCodeEditor").keyup()
	})

	$("#track_c").click(function(){
		graph.track = $(this).is(':checked')
	})

	$("#findCurState_b").click(function(){
		var t = graph.track
		graph.track = true
		graph.update()
		graph.track = t
	})
	
	$("#saveTm_b").click(function(){
		console.log(turing.rawDeltaString)
		console.log(JSON.stringify(turing))
	})
	
	$("#tmExamples").change(function(){
		$("#tmExamples option:selected").each(function(){
			$.extend(true,turing,examples[$(this).val()])
			$("#numTapes").slider("value",turing.numTapes)
			$("#numTracks").slider("value",turing.numTracks)
			$("#numDimensions").slider("value",turing.numDimensions)
			$("#turingCodeEditor").html(turing.rawDeltaString).keyup()
			$('#nondeterministic').attr('checked', turing.nondeterministic);
			$('#showAll_c').attr('checked', turing.showLevel.state == "all" );
			console.log(turing.showLevel.state)
			//TODO: view all states or just one 
		})
	})

	$("#showAll_c").click(function(){
		console.log(this,$(this).is(":checked"))
		turing.showLevel.state = $(this).is(':checked') ? "all" : 0
		//$("#turingCodeEditor").keyup()
		graph.update()
	})

})
