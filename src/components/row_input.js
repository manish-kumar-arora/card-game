import React, {Component} from 'react';

class RowInput extends Component{
	constructor(props){
		super(props);
		//initialize state for rowNo and noOfClicks
		this.state = {
			rowNo : '',
			noOfClicks: 0 
		}	
	}

	render(){
		let labelText = this.getLabelText();		
		return (						
			<div>
				<div className='label-text'>
					{labelText}
				</div>
				<div className='search-bar'> 	
					<input value={this.state.rowNo} onChange={(event)=>this.onInputChange(event.target.value)} />
					<button className="m-l-10" type="button" onClick={()=>this.onButtonClick()}>Go</button>
					<button className="m-l-10" type="button" onClick={()=>this.onResetClick()}>Reset</button>
				</div>
			</div>	
			);
	}

	//get label text base on no of clicks
	getLabelText(){
		let labelText = 'Memorize a card and enter row number having your chosen card.';
		switch(this.state.noOfClicks){
			case 1:
				labelText = 'Oops! someone shuffles the cards. Please check your card and enter a row number again having your card.';
				break;
			case 2:
				labelText = 'One more time please....';
				break;
			case 3:
				labelText = 'Here is your chosen card.';
				break;
		}
		return labelText;
	}

	//process row no and increment no of clickd
	onButtonClick(){
		//if clicks are set to more than 3, ask your to reset game
		if(this.state.noOfClicks>=3){
			alert('Please reset game to play again');
			this.setState({rowNo:''});
			return;
		}
		//for row no between 1 to 3, call row change function from app js
		if(this.state.rowNo>0){
			this.setState({noOfClicks: ++this.state.noOfClicks});
			this.props.onRowNoChange(this.state.rowNo, this.state.noOfClicks);		
		}else{
			alert("Please enter a valid value");			
		}
		//reset row no input to empty
		this.setState({rowNo:''});		
	}

	//reset all states props
	onResetClick(){		
		this.setState({
			rowNo : '',
			noOfClicks: 0 
		});
		this.props.onResetClick();					
	}

	//set state on input change
	onInputChange(rowNo){
		this.setState({rowNo});
	}
}

export default RowInput;