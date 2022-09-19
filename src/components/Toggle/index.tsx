import React from "react";
import Button from "../Button";

interface Toggle {
	show: boolean;
	setShow: (a: boolean) => void;
}

const Toggle = (props: Toggle) => {
	const { show, setShow } = props;
	return (
		<div className="toggle">
			<Button
				className="btn-toggle"
				id="btn-toggle"
				onClick={() => setShow(!show)}
			>
				ADD NEW EXPENSE
			</Button>
		</div>
	);
};

export default Toggle;
