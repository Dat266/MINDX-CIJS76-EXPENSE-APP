import { useState } from "react";

interface Date {
	lists: any;
	handleChange: any;
	currYear: string;
}

const Date = (props: Date) => {
	const { lists, handleChange, currYear } = props;

	const initalYear = ["2022", "2021", "2020"];
	const [years, setYears] = useState<any>(initalYear);

	const data = years.map((item: string, index: number) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});

	return (
		<div className="date-header">
			<p>Filter by year</p>
			<select value={currYear} onChange={handleChange}>
				{data}
			</select>
		</div>
	);
};

export default Date;
