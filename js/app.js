var brackets = [ { rate: 0.08, maxAmount: 20000    },
                 { rate: 0.10, maxAmount: 40000    },
                 { rate: 0.15, maxAmount: 60000    },
                 { rate: 0.20, maxAmount: Infinity }
];

var grossIncome = 65000;
var remainingIncome = 0;
var taxesDue = 0;


switch (grossIncome > 0) {
	case (grossIncome <= brackets[0].maxAmount):
		// lte $20,000
		taxesDue = grossIncome * brackets[0].rate;
		console.log('Taxes Due: $' + taxesDue);
		break;
	
	case (grossIncome <= brackets[1].maxAmount):
		// lte $40,000
		remainingIncome = grossIncome - brackets[0].maxAmount;
		taxesDue = (brackets[0].rate * brackets[0].maxAmount);
		taxesDue += remainingIncome * brackets[1].rate;
		console.log('Taxes Due: $' + taxesDue);
		break;
	
	case (grossIncome <= brackets[2].maxAmount):
		// lte $60,000
		remainingIncome = grossIncome - brackets[1].maxAmount;
		taxesDue = brackets[0].rate * brackets[0].maxAmount;
		taxesDue += brackets[1].rate * brackets[0].maxAmount;
		taxesDue += remainingIncome * brackets[2].rate;
		console.log('Taxes Due: $' + taxesDue);
		break;
	
	default:
	// gte $60,000
	taxesDue = brackets[0].rate * brackets[0].maxAmount;
	taxesDue += brackets[1].rate * brackets[0].maxAmount;
	taxesDue += brackets[2].rate * brackets[0].maxAmount;
	remainingIncome = grossIncome - 60000;
	taxesDue += remainingIncome * 0.2;
	console.log('Taxes Due: $' + taxesDue);
}