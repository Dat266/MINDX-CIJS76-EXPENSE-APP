interface Input {
	className: string;
	type: string;
	children: string;
	placeholder: string;
	value: any;
	onChange: (a: string) => void;
}

const Input = (props: Input) => {
	const { className, type, children, placeholder, onChange, value } = props;
	return (
		<div className="input-main">
			<label htmlFor={className}>{children}</label>
			<input
				type={type}
				className={className}
				placeholder={placeholder}
				onChange={(e: any) => onChange(e.target.value)}
				value={value}
			/>
		</div>
	);
};

export default Input;
