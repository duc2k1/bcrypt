import React, { useState } from "react";
import { TextBigCenter, TextCenter, Button } from "../styled/styled";
import { useInput } from "../hooks/useInput";
import { Container } from "../styled/styled";
import Alert from "./Alert";
const bcryptjs = require("bcryptjs");

const Decrypt = () => {
	const [hash, hashInput] = useInput({
		placeholder: "Hash to check (Max length = 100)",
		propVal: "$2a$10$VEfKDTkTlY0/RtmG5nxHT.GjjB4H5.FF5FfivKkGbQIJOMuZrCENi",
	});
	const [str, strInput] = useInput({
		placeholder: "String to check again (Max length = 100)",
		propVal: "hello world",
	});
	const [doing, setDoing] = useState(false);
	const [result, setResult] = useState(true);

	function eventDecrypt(str, hash) {
		setDoing(true);
		bcryptjs.compare(str, hash).then((newResult) => {
			setDoing(false);
			setResult(newResult);
		});
	}

	return (
		<Container>
			<TextBigCenter>Decrypt</TextBigCenter>
			{strInput}
			<br />
			{hashInput}
			<div className="d-flex justify-content-center">
				<Button onClick={() => eventDecrypt(str, hash)}>Click me</Button>
			</div>
			{doing && <TextCenter>Decrypting..............</TextCenter>}
			<Alert content={result} result={result} />
		</Container>
	);
};

export default Decrypt;
