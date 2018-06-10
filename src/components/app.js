import _ from 'lodash';
import React, { Component } from 'react';
import CardRow from './card_row';
import RowInput from './row_input';

export default class App extends Component {

    row1 = [];//variable use to hold row1 elements
    row2 = [];//variable use to hold row2 elements
    row3 = [];//variable use to hold row3 elements

    constructor(props) {
        super(props);

        //set default state for cards
        this.state = {
            cards: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a17', 'a18', 'a19', 'a20', 'a21']
        };
    }

    //rearrange cards based on no of clicks and entered row no
    shuffleCards(rowNo, noOfClicks) {
        var cards = [];
        //shuffle cards if no of clicks less than 3
        if (noOfClicks < 3) {
            if (rowNo == 1) {
                cards = (this.row2).concat(this.row1).concat(this.row3);
            } else if (rowNo == 2) {
                cards = (this.row3).concat(this.row2).concat(this.row1);
            } else if (rowNo == 3) {
                cards = (this.row2).concat(this.row3).concat(this.row1);
            }
        } else {
            //fetch user card
            cards = this.doMagic(rowNo);
        }
        //set state for new set of cards
        this.setState({cards});
    }

    //return user chosed card based on row no
    doMagic(rowNo) {
        if (rowNo == 1) {
            return [this.row1[3]];
        } else if (rowNo == 2) {
            return [this.row2[3]];
        } else if (rowNo == 3) {
            return [this.row3[3]];
        }
    }

    //set cards for given row
    setCards(rowNo) {
        //if no cards, just return
        if (this.state.cards.length == 0) {
            return;
        }
        let rowData = [];
        let k = 0;
        //set cards for row
        switch (rowNo) {
            case 1:
                this.state.cards.map((x, index) => {
                    if (index == 3 * k) {
                        rowData.push(x);
                        k++;
                    }
                })
                break;
            case 2:
                this.state.cards.map((x, index) => {
                    if (index == 3 * k + 1) {
                        rowData.push(x);
                        k++;
                    }
                })
                break;
            case 3:
                this.state.cards.map((x, index) => {
                    if (index == 3 * k + 2) {
                        rowData.push(x);
                        k++;
                    }
                })
                break;
            default:
                this.state.cards.map((x, index) => {
                    if (index == 3 * k) {
                        rowData.push(x);
                        k++;
                    }
                })
                break;

        }
        return rowData;
    }

    //reset cards to initial game
    resetGame() {
        this.setState({
            cards: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a17', 'a18', 'a19', 'a20', 'a21']
        });
    }

    //render data
    render() {
        this.row1 = this.setCards(1);
        this.row2 = this.setCards(2);
        this.row3 = this.setCards(3);
        return (
            <div>
                <RowInput onResetClick={()=>this.resetGame()} onRowNoChange={(rowNo, noOfClicks)=>this.shuffleCards(rowNo, noOfClicks)} />
                <CardRow rowCards={this.row1} />
                <CardRow rowCards={this.row2} />
                <CardRow rowCards={this.row3} />
            </div>
        );
    }
}