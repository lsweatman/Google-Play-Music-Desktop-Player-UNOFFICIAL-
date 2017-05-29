import React from 'react';

export default class Seekbar extends React.Component {
	render() {
		return(
			<div className="seek-bar base-div">
				<div>{this.props.currentTime}</div>
				<input 
					type="range" 
					value={this.props.sliderCurrent}
					onChange={this.props.onChange}
					onMouseUp={this.props.onMouseUp}
					onTouchEnd={this.props.onMouseUp}/>
				<div>{this.props.totalTime}</div>
			</div>
		)
	}
}