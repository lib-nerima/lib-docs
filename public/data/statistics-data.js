const tsv = `Library Name	2016	2017	2018	2019	2020
光が丘	208034	211599	210867	217659
練馬	106254	107284	107965	108497
石神井	154373	147465	150553	153588
平和台	87206	91650	96141	99488
大 泉	150127	151928	152984	150962
関町	75628	78669	83561	88043
貫井	86597	87370	88534	89793
稲荷山	57692	57823	59051	58567
小竹	54545	54326	54482	54187
南大泉	46658	46686	47271	46185
南大泉分室	1974	2026	2068	2035
春日町	77524	77651	77156	78362
南田中	62736	63383	63702	64520
`;

const rows = tsv.split('\n').map(str => str.split('\t'));
const headers = rows.shift();
const years = headers.slice(1).map(n => +n);

const libraries = rows.map(row => {
	return {
		name: row[0],
		data: years.map((year, i) => ({
			x: year,
			y: +row[i + 1]
		})).filter(d => d.y)
	};
});

export { years, libraries };
