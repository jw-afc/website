import React, { Component } from 'react';

export class Home extends Component {
	static displayName = Home.name;

	render() {
		return (
			<div className="container">
				<div className="content">
					<h1 className="title">{'jwithers.uk'}</h1>
					<h5 className="description">{'This website is under construction.'}</h5>
				</div>
			</div>
		);
	}
}
