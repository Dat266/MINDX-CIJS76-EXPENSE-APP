import moment from "moment";

interface ContentProps {
	item: any;
}

const Content = (props: ContentProps) => {
	const { item } = props;

	const month: string = moment(item.date).format("MMMM");
	const day: string = moment(item.date).format("DD");
	const year: string = moment(item.date).format("YYYY");

	return (
		<div className="item">
			<div className="item__date">
				<div>{month}</div>
				<div>{year}</div>
				<div>{day}</div>
			</div>
			<div className="item__name">{item.name}</div>
			<div className="item__dola">{item.amount}$</div>
		</div>
	);
};

export default Content;
