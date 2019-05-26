import React, { Component } from 'react';
import UnderConstruction from 'react-under-construction';

import 'react-under-construction/build/css/index.css';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<UnderConstruction
				background={{
					textColor: '#fff'
				}}
				title={{
					text: 'jwithers.uk',
					style: {
						fontSize: '4em'
					}
				}}
				description={{
					text: 'Our website is under construction.',
					style: {
						fontSize: '1em',
						maxWidth: '440px'
					}
				}}
			/>
		);
	}
}
