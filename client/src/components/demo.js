import React from "react";

class Demo extends React.Component {
	constructor() {
		super();
		this.state = {
			data: "",
		};
	}

	componentDidMount() {
		fetch("/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				this.setState({ data });
			});
	}
	render() {
		return (
			<div style={{ color: "white" }} className="App">
				{this.state.data.message}
			</div>
		);
	}
}

export default Demo;
