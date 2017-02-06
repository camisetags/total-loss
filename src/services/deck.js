import R from 'ramda';

let decks = {
	data: [
		{
			id: 1,
			title: 'Sacanagem',
			description: 'Desafios envolvendo altas put**as.',
			cards: []
		},

		{
			id: 2,
			title: 'Loucuras',
			description: 'Melhor jogar esse na casa do seu colega...',
			cards: [
				{
					challenge: 'Vire o dedo indicador até encostar nas costas da sua mão.',
					accept: +2,
					pass: -2,
					drink: +1,
					challengeResult: `Aceitar +2 pontos. Passar -2 pontos. Beber 1 shot +1 ponto`
				},
				{
					challenge: 'Com as pernas retas e sem dobra-las, encoste o os dedos das mãos no chão.',
					accept: +3,
					pass: -3,
					drink: +1,
					challengeResult: `Aceitar +3 pontos. Passar -3 pontos. Beber 1 shot +1 pontos.`
				},
				{
					challenge: 'Faça um rolamento.',
					accept: +4,
					pass: -4,
					drink: +2,
					challengeResult: `Aceitar +4 pontos. Passar -4 pontos. Beber 2 shots +2 pontos.`
				},
				{
					challenge: 'Passe um trote se passando pelo boso.',
					accept: +3,
					pass: -3,
					drink: +2,
					challengeResult: `Aceitar +3 pontos. Passar -3 pontos. Beber 3 shots +2 ponto`
				},
				{
					challenge: '20 polichinelos.',
					accept: +2,
					pass: -2,
					drink: +1,
					challengeResult: `Aceitar +2 pontos. Passar -2 pontos. Beber 1 shots +1 ponto`
				}
			]
		},

		{
			id: 3,
			title: 'Beber por beber',
			description: 'Para aqueles que querem beber sem motivo nenhum xD',
			cards: []
		}
	]
};

const DecksService = {	
	query: () => {
		return new Promise((resolve, reject) => {
			window.setTimeout(() => resolve(decks), 1500);
		});
	},
	
	get: (deckId) => {
		return new Promise((resolve, reject) => {
			window.setTimeout(() => {
				resolve(
					R.find(R.propEq('id', deckId))(decks)
				);
			}, 1500);
		});
	}
};

export default DecksService;