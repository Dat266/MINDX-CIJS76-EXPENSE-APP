import { useEffect, useState } from "react";
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
	const [year, setYear] = useState<string>("2022");
	const [show, setShow] = useState<boolean>(false);

	const [user, setUser] = useState<User>(inital);
	const initalData: any = JSON.parse(localStorage.Lists) || [];
	const [lists, setLists] = useState<any>(initalData);

	console.log(lists);
	const name: any = document.querySelector(".name");

	const handleAdd = (e: any) => {
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
		setUser({ ...user, name: e });
	};

	const handleAmount = (e: any) => {
		setUser({ ...user, amount: e });
	};

	const handleDate = (e: any) => {
		setUser({ ...user, date: e });
	};

	useEffect(() => {
		setLists(initalData.filter((item: any) => item.date.includes(year)));
	}, [year]);

	const handleChange = (e: any): void => {
		setYear(e.target.value);
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
				<Date lists={lists} handleChange={handleChange} currYear={year} />
				<Chart lists={lists} />
				<Lists lists={lists} />
			</div>
		</div>
	);
}

export default App;
