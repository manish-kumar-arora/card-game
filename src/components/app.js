import _ from 'lodash';
import React, { Component } from 'react';
import CardRow from './card_row';
import RowInput from './row_input';

export default class App extends Component {

    row1 = [];
    row2 = [];
    row3 = [];

    constructor(props) {
        super(props);

        this.state = {
            cards: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a17', 'a18', 'a19', 'a20', 'a21']
        };
    }

    shuffleCards(rowNo, noOfClicks) {
        var newCards = [];
        if (noOfClicks < 3) {
            if (rowNo == 1) {
                newCards = (this.row2).concat(this.row1).concat(this.row3);
            } else if (rowNo == 2) {
                newCards = (this.row3).concat(this.row2).concat(this.row1);
            } else if (rowNo == 3) {
                newCards = (this.row2).concat(this.row3).concat(this.row1);
            }
        } else {
            newCards = this.goMagic(rowNo);
        }
        this.setState({ cards: newCards });
    }

    goMagic(rowNo) {
        if (rowNo == 1) {
            return [this.row1[3]];
        } else if (rowNo == 2) {
            return [this.row2[3]];
        } else if (rowNo == 3) {
            return [this.row3[3]];
        }
    }



    arrangeCards(rowNo) {
        if (this.state.cards.length == 0) {
            return;
        }
        var rowData = [];
        let k = 0;
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

    resetGame() {
        this.setState({
            cards: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13', 'a14', 'a15', 'a16', 'a17', 'a18', 'a19', 'a20', 'a21']
        });
    }

    render() {
        this.row1 = this.arrangeCards(1);
        this.row2 = this.arrangeCards(2);
        this.row3 = this.arrangeCards(3);
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