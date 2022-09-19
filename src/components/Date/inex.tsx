const Date = () => {
	const dataYear = ["2022", "2021", "2020"];
	const data = dataYear.map((item: string, index: number) => {
		return (
			<option key={index} id={item}>
				{item}
			</option>
		);
	});

	return (
		<div className="date-header">
			<p>Filter by year</p>
			<select>{data}</select>
		</div>
	);
};

export default Date;
