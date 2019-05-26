import React, { Component } from 'react';

import '../styles.css';

export class Layout extends Component {
	static displayName = Layout.name;

	render() {
		return (
			<div className="container">
				{this.props.children}
			</div>
		);
	}
}
