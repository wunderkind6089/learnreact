import React, { Component } from 'react';
import './Hello.css';

const Hello = (props) => {
	return (
			<div className = "f1 tc ttu system serif">
			<h1>Hello Phenoms</h1>
			<h2 className= "f2">Start Your Experience With React</h2>
			<p className = "i">{props.description}</p>
		    </div>

		);		
	}


export default Hello;