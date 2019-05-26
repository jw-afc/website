import React, { Component } from 'react';
import UnderConstruction from 'react-under-construction';

import 'react-under-construction/build/css/index.css';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<UnderConstruction
				background={{
					image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
					textColor: '#fff',
					overlay: {
						color: '#000',
						opacity: '.5'
					}
				}}
				logo={{
					src: 'https://image.ibb.co/b7guP5/Rubbby_without_text.png',
					alt: 'alt text'
				}}
				title={{
					text: 'jwithers.uk'
				}}
				description={{
					text: 'Our website is under construction.',
					style: {
						maxWidth: '440px',
					}
				}}
			/>
		);
	}
}
