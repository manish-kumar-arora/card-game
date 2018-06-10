import React, {Component} from 'react';

class RowInput extends Component{
	constructor(props){
		super(props);

		this.state = {
			rowNo : '',
			noOfClicks: 0 
		}	
	}

	render(){
		return (
			<div className='search-bar'>	
				<input value={this.state.rowNo} onChange={(event)=>this.onInputChange(event.target.value)} />
				<button className="m-l-10" type="button" onClick={()=>this.onButtonClick()}>Go</button>
				<button className="m-l-10" type="button" onClick={()=>this.onResetClick()}>Reset</button>
			</div>	
			);
	}

	onButtonClick(){
		if(this.state.noOfClicks==3){
			alert('Please reset game to play again');
			this.setState({rowNo:''});
			return;
		}
		if(this.state.rowNo==1 || this.state.rowNo==2 || this.state.rowNo==3){
			this.setState({noOfClicks: ++this.state.noOfClicks});
			this.props.onRowNoChange(this.state.rowNo, this.state.noOfClicks);		
		}else{
			alert("Please enter a valid value");			
		}
		this.setState({rowNo:''});		
	}

	onResetClick(){		
		this.setState({
			rowNo : '',
			noOfClicks: 0 
		});
		this.props.onResetClick();					
	}

	onInputChange(rowNo){
		this.setState({rowNo});
	}
}

export default RowInput;