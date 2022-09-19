import React, { Children } from "react";

interface PropsButton {
	children: string;
	className: string;
	id: string;
	onClick: (a: any) => void;
}

const Button = (props: PropsButton) => {
	const { children, className, id, onClick } = props;
	return (
		<div>
			<button className={className} id={id} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default Button;
