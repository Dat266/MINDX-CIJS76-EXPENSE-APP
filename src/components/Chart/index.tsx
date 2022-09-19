import moment from "moment";

const Chart = () => {
	const date = moment().localeData().months();
	const rederChart = date.map((item: string, index: number) => {
		const newItem = item.slice(0, 3);
		return (
			<div className="chart" key={index}>
				<p>{newItem}</p>
			</div>
		);
	});

	return <div className="sub-content">{rederChart}</div>;
};

export default Chart;
