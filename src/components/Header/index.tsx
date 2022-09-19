import Button from "../Button";
import Input from "../Input";

interface HeaderProps {
	handleAdd: (a: any) => void;
	handleCancel: () => void;
	handleName: (a: any) => void;
	handleAmount: (a: any) => void;
	handleDate: (a: any) => void;
	user: any;
}

const Header = (props: HeaderProps) => {
	const {
		handleAdd,
		handleCancel,
		handleName,
		handleAmount,
		handleDate,
		user,
	} = props;

	return (
		<div className="header">
			<Input
				type="text"
				className="name"
				children="Name"
				placeholder="Enter name here ..."
				onChange={handleName}
				value={user.name}
			/>
			<Input
				type="text"
				className="amount"
				children="Amount"
				placeholder="Enter amount here ..."
				onChange={handleAmount}
				value={user.amount}
			/>
			<Input
				type="date"
				className="date"
				children="Date"
				placeholder=""
				onChange={handleDate}
				value={user.date}
			/>
			<div className="button">
				<Button
					children="ADD"
					className="btn add"
					id="btn-add"
					onClick={handleAdd}
				/>
				<Button
					children="CANCEL"
					className="btn cancel"
					id="btn-cancel"
					onClick={handleCancel}
				/>
			</div>
		</div>
	);
};

export default Header;
