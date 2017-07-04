import React from 'react';
import { NavLink, Switch } from "react-router-dom";

export default class Archives extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.saveQuote = this.saveQuote.bind(this)
    }

    saveQuote() {
        const APIURL =  '/api/quote'
		console.log(this.props)
		console.log(this.props.yearOneChannels)
		const req = {
			'contract_term': this.props.contractTerm,
			'year_one_channels': this.props.yearOneChannels,
			'year_two_channels': this.props.yearTwoChannels,
			'year_three_channels': this.props.yearThreeChannels,
			'HLS': this.props.HLS,
			'HDS': this.props.HDS,
			'MPEG_DASH': this.props.MPEGDASH,
			'RTMP': this.props.RTMP,
			'support_plan': this.props.supportPlan,
			'company': this.props.company,
			'description': this.props.description,
			'date': "2017/07/04"
		}
		console.log(req)
        axios.post(APIURL, req)
            .then(function (response) {
                console.log(response.data.quote)
				console.log(this.props)
				this.props.setCurrentQuote(response.data.quote)
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            })
                
	}

  render() {
    return (
		<NavLink to='/details'>
			<button 
				className="btn btn-success" 
				type="button" 
				onClick={this.saveQuote}>
				Save
			</button>   
		</NavLink>  
	);
  }
}