import { SlashCommandPartial } from 'harmony';
import { Operators, TrigTypes } from './maths.ts';

export const commands: SlashCommandPartial[] = [{
	name: 'ping',
	description: 'Return Article 18 in the UDHR',
}, {
	name: 'spell',
	description: 'Spell out the inputed word',
	options: [{
		name: 'input',
		description: 'Word to spell',
		type: 'STRING',
		required: true,
	}],
}, {
	name: 'calculate',
	description: 'Do basic calculation',
	options: [{
		name: 'num1',
		description: 'First number',
		type: 'NUMBER',
		required: true,
	}, {
		name: 'num2',
		description: 'Second number',
		type: 'NUMBER',
		required: true,
	}, {
		name: 'operator',
		description: 'Operator',
		type: 'STRING',
		required: true,
		choices: [
			{ name: '(+) Add', value: Operators.Plus },
			{ name: '(-) Subtract', value: Operators.Minus },
			{ name: '(×) Multiply', value: Operators.Multiply },
			{ name: '(÷) Divide', value: Operators.Divide },
		],
	}],
}, {
	name: 'trigonometry',
	description: 'Do trigonometry calculation',
	options: [{
		name: 'type',
		description: 'Trigonometry function',
		type: 'STRING',
		required: true,
		choices: [
			{ name: '[sin()] Sine', value: TrigTypes.Sine },
			{ name: '[cos()] Cosine', value: TrigTypes.Cosine },
			{ name: '[tan()] Tangent', value: TrigTypes.Tangent },
		],
	}, {
		name: 'radian',
		description: 'Input number (in radian)',
		type: 'NUMBER',
		required: true,
	}],
}];
