var examples = { 
	primes : {"rawDeltaString":"init: q0<br>final: qF<br>q0 a B -&gt; q1 a B R S<br>q1 a B -&gt; q2 a a L R<br>q2 a B -&gt; q3 a a S S<br>q3 a a -&gt; q3 a a S L<br>q3 a B -&gt; q4 a B S R<br>q4 a a -&gt; q4 a a R R<br>q4 a B -&gt; q3 a B S L<br>q4 B a -&gt; q5 B a L S<br>q5 a a -&gt; q5 a a L S<br>q5 B a -&gt; q6 B a R R<br>q6 a a -&gt; q6 a a S R<br>q6 a B -&gt; q3 a a S L<br>q4 B B -&gt; q7 B B L L<br>q7 a a -&gt; q7 a a L L<br>q7 B B -&gt; qF B B S S<br><br>",
		"showLevel":{"level":-1,"state":-1},
		"paddingSize":2,
		"numTapes":2,
		"numTracks":1,
		"numDimensions":1,
		"nondeterministic":false,
		"finalStates":["qF"],
		"initState":"q0",
		"delta":[{"fromState":"q0","toState":"q1","move":["R","S"],"fromSymbol":[["a"],["B"]],"toSymbol":[["a"],["B"]]},{"fromState":"q1","toState":"q2","move":["L","R"],"fromSymbol":[["a"],["B"]],"toSymbol":[["a"],["a"]]},{"fromState":"q2","toState":"q3","move":["S","S"],"fromSymbol":[["a"],["B"]],"toSymbol":[["a"],["a"]]},{"fromState":"q3","toState":"q3","move":["S","L"],"fromSymbol":[["a"],["a"]],"toSymbol":[["a"],["a"]]},{"fromState":"q3","toState":"q4","move":["S","R"],"fromSymbol":[["a"],["B"]],"toSymbol":[["a"],["B"]]},{"fromState":"q4","toState":"q4","move":["R","R"],"fromSymbol":[["a"],["a"]],"toSymbol":[["a"],["a"]]},{"fromState":"q4","toState":"q3","move":["S","L"],"fromSymbol":[["a"],["B"]],"toSymbol":[["a"],["B"]]},{"fromState":"q4","toState":"q5","move":["L","S"],"fromSymbol":[["B"],["a"]],"toSymbol":[["B"],["a"]]},{"fromState":"q5","toState":"q5","move":["L","S"],"fromSymbol":[["a"],["a"]],"toSymbol":[["a"],["a"]]},{"fromState":"q5","toState":"q6","move":["R","R"],"fromSymbol":[["B"],["a"]],"toSymbol":[["B"],["a"]]},{"fromState":"q6","toState":"q6","move":["S","R"],"fromSymbol":[["a"],["a"]],"toSymbol":[["a"],["a"]]},{"fromState":"q6","toState":"q3","move":["S","L"],"fromSymbol":[["a"],["B"]],"toSymbol":[["a"],["a"]]},{"fromState":"q4","toState":"q7","move":["L","L"],"fromSymbol":[["B"],["B"]],"toSymbol":[["B"],["B"]]},{"fromState":"q7","toState":"q7","move":["L","L"],"fromSymbol":[["a"],["a"]],"toSymbol":[["a"],["a"]]},{"fromState":"q7","toState":"qF","move":["S","S"],"fromSymbol":[["B"],["B"]],"toSymbol":[["B"],["B"]]}],
		"systemStates":[],"graphStates":{"q0":{"x":39,"y":-61,"init":true,"fin":false,"color":"#aa0011","breakPoint":false},"q1":{"x":281,"y":-115.33333333333334,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q2":{"x":471,"y":-57.666666666666686,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q3":{"x":484,"y":119,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q4":{"x":493,"y":267.66666666666663,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q5":{"x":38,"y":272.33333333333337,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q6":{"x":29,"y":105,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q7":{"x":458,"y":457.6666666666667,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"qF":{"x":46,"y":459.3333333333333,"init":false,"fin":true,"color":"#aa0011","breakPoint":false}}
	},

	fib3 : {"rawDeltaString":"init: q0<br>final: q11 q12 q13<br>q0 a B B -&gt; q0 a a B R R S<br>q0 a B B -&gt; q1 a B B S S S<br>q1 a B B -&gt; q1 a B a R S R<br>q1 B B B -&gt; q2 B B B S L L<br>q2 B B a -&gt; q10 B B a S S L<br>q2 B a a -&gt; q3 B a a S L L<br>q3 B a a -&gt; q3 B a a S L L<br>q3 B a B -&gt; q3 B a B S L S<br>q3 B B a -&gt; q3 B B a S S L<br>q3 B B B -&gt; q4 B B B S R R<br>q4 B a a -&gt; q5 B a a S R R<br>q5 B B B -&gt; q12 B B B S S S<br>q5 B a a -&gt; q6 B a a S L L<br>q5 B B a -&gt; q6 B B a S L L<br>q5 B a B -&gt; q6 B a B S L L<br>q6 B a a -&gt; q7 B B a S R R<br>q7 B a a -&gt; q7 B B a S R R<br>q7 B a B -&gt; q31 B a B S S L<br>q31 B a a -&gt; q31 B a a S L L<br>q31 B a B -&gt; q31 B a B S L S<br>q31 B B a -&gt; q31 B B a S S L<br>q31 B B B -&gt; q41 B B B S R R<br>q41 B a a -&gt; q51 B a a S R R<br>q51 B B B -&gt; q13 B B B S S S<br>q51 B a a -&gt; q61 B a a S L L<br>q51 B B a -&gt; q61 B B a S L L<br>q51 B a B -&gt; q61 B a B S L L<br>q61 B a a -&gt; q8 B a B S R R<br>q8 B a a -&gt; q8 B a B S R R<br>q8 B B a -&gt; q3 B B a S L S<br>q10 B B B -&gt; q11 B B B S S S",
		"showLevel":{"level":-1,"state":"all"},
		"paddingSize":2,
		"numTapes":3,
		"numTracks":1,
		"numDimensions":1,
		"nondeterministic":true,
		"finalStates":["q11","q12","q13"],
		"initState":"q0",
		"delta":[{"fromState":"q0","toState":"q0","move":["R","R","S"],"fromSymbol":[["a"],["B"],["B"]],"toSymbol":[["a"],["a"],["B"]]},{"fromState":"q0","toState":"q1","move":["S","S","S"],"fromSymbol":[["a"],["B"],["B"]],"toSymbol":[["a"],["B"],["B"]]},{"fromState":"q1","toState":"q1","move":["R","S","R"],"fromSymbol":[["a"],["B"],["B"]],"toSymbol":[["a"],["B"],["a"]]},{"fromState":"q1","toState":"q2","move":["S","L","L"],"fromSymbol":[["B"],["B"],["B"]],"toSymbol":[["B"],["B"],["B"]]},{"fromState":"q2","toState":"q10","move":["S","S","L"],"fromSymbol":[["B"],["B"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q2","toState":"q3","move":["S","L","L"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q3","toState":"q3","move":["S","L","L"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q3","toState":"q3","move":["S","L","S"],"fromSymbol":[["B"],["a"],["B"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q3","toState":"q3","move":["S","S","L"],"fromSymbol":[["B"],["B"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q3","toState":"q4","move":["S","R","R"],"fromSymbol":[["B"],["B"],["B"]],"toSymbol":[["B"],["B"],["B"]]},{"fromState":"q4","toState":"q5","move":["S","R","R"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q5","toState":"q12","move":["S","S","S"],"fromSymbol":[["B"],["B"],["B"]],"toSymbol":[["B"],["B"],["B"]]},{"fromState":"q5","toState":"q6","move":["S","L","L"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q5","toState":"q6","move":["S","L","L"],"fromSymbol":[["B"],["B"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q5","toState":"q6","move":["S","L","L"],"fromSymbol":[["B"],["a"],["B"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q6","toState":"q7","move":["S","R","R"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q7","toState":"q7","move":["S","R","R"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q7","toState":"q31","move":["S","S","L"],"fromSymbol":[["B"],["a"],["B"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q31","toState":"q31","move":["S","L","L"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q31","toState":"q31","move":["S","L","S"],"fromSymbol":[["B"],["a"],["B"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q31","toState":"q31","move":["S","S","L"],"fromSymbol":[["B"],["B"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q31","toState":"q41","move":["S","R","R"],"fromSymbol":[["B"],["B"],["B"]],"toSymbol":[["B"],["B"],["B"]]},{"fromState":"q41","toState":"q51","move":["S","R","R"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q51","toState":"q13","move":["S","S","S"],"fromSymbol":[["B"],["B"],["B"]],"toSymbol":[["B"],["B"],["B"]]},{"fromState":"q51","toState":"q61","move":["S","L","L"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["a"]]},{"fromState":"q51","toState":"q61","move":["S","L","L"],"fromSymbol":[["B"],["B"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q51","toState":"q61","move":["S","L","L"],"fromSymbol":[["B"],["a"],["B"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q61","toState":"q8","move":["S","R","R"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q8","toState":"q8","move":["S","R","R"],"fromSymbol":[["B"],["a"],["a"]],"toSymbol":[["B"],["a"],["B"]]},{"fromState":"q8","toState":"q3","move":["S","L","S"],"fromSymbol":[["B"],["B"],["a"]],"toSymbol":[["B"],["B"],["a"]]},{"fromState":"q10","toState":"q11","move":["S","S","S"],"fromSymbol":[["B"],["B"],["B"]],"toSymbol":[["B"],["B"],["B"]]}],
		"systemStates":[],"graphStates":{"q0":{"x":270,"y":-358,"init":true,"fin":false,"color":"#aa0011","breakPoint":false},"q1":{"x":288,"y":-198.33333333333334,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q2":{"x":289,"y":-38.666666666666686,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q3":{"x":299,"y":129,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q4":{"x":332,"y":290.66666666666663,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q5":{"x":349,"y":443.33333333333337,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q6":{"x":341,"y":576,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q7":{"x":285,"y":700.6666666666667,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q10":{"x":72,"y":-94.66666666666669,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q12":{"x":163,"y":339,"init":false,"fin":true,"color":"#aa0011","breakPoint":false},"q31":{"x":7,"y":691.6666666666667,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q41":{"x":-188,"y":660.3333333333333,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q51":{"x":-227,"y":515,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q13":{"x":29,"y":547.6666666666666,"init":false,"fin":true,"color":"#aa0011","breakPoint":false},"q61":{"x":-156,"y":315.33333333333337,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q8":{"x":-50,"y":167,"init":false,"fin":false,"color":"#aa0011","breakPoint":false},"q11":{"x":98,"y":-217.33333333333337,"init":false,"fin":true,"color":"#aa0011","breakPoint":false}}
	}

}


