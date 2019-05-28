import React, { Component, Fragment } from 'react';

import '../styles.css';

export class Layout extends Component {
	static displayName = Layout.name;

	render() {
		return (
			<Fragment>
				{this.props.children}
			</Fragment>);
	}
}
