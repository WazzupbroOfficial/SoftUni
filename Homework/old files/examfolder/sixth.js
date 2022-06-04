function maskify(input) {
	let K = Number(input[0]);
	let L = Number(input[1]);
	let M = Number(input[2]);
	let N = Number(input[3]);
	let counter = 0;
	let isFinish = false
	for(let a = K; a <= 8; a++){
		for(let b = 9; b >= L; b--){
			for(let c = M; c <= 8; c++){
				for(let d = 9; d >= N; d--){
					if (a % 2 === 0 && c % 2 === 0 && b % 2 !== 0 && d % 2 !== 0){

						let numA = "" + a + b;
						let numB = "" + c + d
						if(numA !== numB){
							counter++;
							console.log(`${a}${b} - ${c}${d}`)
						} else {
							console.log("Cannot change the same player.")
						}
						if(counter === 6){
							isFinish = true;
							break;
						}
					}
					
				}
				
				
			}
		
		}
	}
}

maskify([7,6,8,5])