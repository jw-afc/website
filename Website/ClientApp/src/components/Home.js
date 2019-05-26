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
						fontSize: '10vw'
					}
				}}
				description={{
					text: 'This website is under construction.',
					style: {
						fontSize: '3vw',
						lineHeight: '1.1em',
						maxWidth: '480px'
					}
				}}
			/>
		);
	}
}
