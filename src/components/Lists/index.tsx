import Content from "../Content";

interface Lists {
	lists: [];
}

const Lists = (props: Lists) => {
	const { lists } = props;
	const renderList = lists.map((item: [], index: number) => {
		return <Content key={index} item={item} />;
	});

	return <div className="main-content">{renderList}</div>;
};

export default Lists;
