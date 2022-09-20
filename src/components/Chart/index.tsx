import moment from "moment";

interface Chart {
	lists: [];
}

const Chart = (props: Chart) => {
	const { lists } = props;

	const total = lists.reduce((curr: any, prev: any) => {
		return curr + parseInt(prev.amount);
	}, 0);

	let counts: any = {};

	for (var i = 0; i < lists.length; i++) {
		var num: any = lists[i];

		counts[
			num.date.slice(5, 7).includes(0)
				? num.date.slice(6, 7)
				: num.date.slice(5, 7)
		] = counts[
			num.date.slice(5, 7).includes(0)
				? num.date.slice(6, 7)
				: num.date.slice(5, 7)
		]
			? counts[
					num.date.slice(5, 7).includes(0)
						? num.date.slice(6, 7)
						: num.date.slice(5, 7)
			  ] + Math.floor((parseInt(num.amount) / total) * 100)
			: Math.floor((parseInt(num.amount) / total) * 100);
	}

	const date = moment().localeData().months();
	const rederChart = date.map((item: string, index: number) => {
		const newItem = item.slice(0, 3);

		return (
			<div className="chart" key={index}>
				<div
					className="chart-sub"
					style={{ height: `${counts[index + 1]}%` }}
				></div>
				<p>{newItem}</p>
			</div>
		);
	});

	return <div className="sub-content">{rederChart}</div>;
};

export default Chart;
