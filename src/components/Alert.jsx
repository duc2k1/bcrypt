export default function Alert({ content, result = true }) {
	return (
		<div
			className={
				"mt-2 alert  alert-" + (result ? "success" : "danger") + " text-center"
			}
			role="alert"
			style={{ wordWrap: "break-word" }}
		>
			{content + ""}
		</div>
	);
}
