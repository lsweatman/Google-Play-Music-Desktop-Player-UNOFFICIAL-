/**
 * Created by Schwerve on 3/25/2017.
 */
import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class VolumeSlider extends React.Component {
	render() {
		return(
			<div className="volume-slider base-div">
				<Glyphicon glyph="glyphicon glyphicon-volume-down"/>

				<input
					type="range"
					value={this.props.pVolume}
					onChange={this.props.onVolChange}
					onMouseUp={this.props.onVolMouseUp}
					onTouchEnd={this.props.onVolMouseUp}/>

				<Glyphicon glyph="glyphicon glyphicon-volume-up"/>
			</div>
		)
	}
}