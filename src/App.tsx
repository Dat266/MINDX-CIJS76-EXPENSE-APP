import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Date from "./components/Date/inex";
import Header from "./components/Header";
import Lists from "./components/Lists";
import Toggle from "./components/Toggle";

interface User {
	name?: string;
	amount?: string;
	date?: string;
}

function App() {
	const inital: User = {
		name: "",
		amount: "",
		date: "",
	};

	const [show, setShow] = useState<boolean>(false);

	const [user, setUser] = useState<User>(inital);

	const [lists, setLists] = useState<any>(() => {
		const arr: any = JSON.parse(localStorage.Lists) || [];
		return arr;
	});

	const name: any = document.querySelector(".name");

	const handleAdd = (e: any) => {
		e.preventDefault();

		setLists((prev: []) => {
			const newList = [...prev, user];
			localStorage.setItem("Lists", JSON.stringify(newList));
			return newList;
		});
		setUser(inital);
		name.focus();
	};

	const handleCancel = () => {
		setShow(!show);
	};

	const handleName = (e: any) => {
		setUser({ name: e });
	};

	const handleAmount = (e: any) => {
		setUser({ ...user, amount: e });
	};

	const handleDate = (e: any) => {
		setUser({ ...user, date: e });
	};

	return (
		<div className="App">
			{show ? (
				<Header
					handleCancel={handleCancel}
					handleAdd={handleAdd}
					handleName={handleName}
					handleAmount={handleAmount}
					handleDate={handleDate}
					user={user}
				/>
			) : (
				<Toggle show={show} setShow={setShow} />
			)}

			<div className="content">
				<Date />
				<Chart />
				<Lists lists={lists} />
			</div>
		</div>
	);
}

export default App;
