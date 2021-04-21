import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class BudgetShow extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <h3>{this.props.budgetHeader}</h3>
                <p>{this.props.budgetSubHeader}</p>
                <button onClick={() => this.props.history.push('/budget/edit')}>{this.props.buttonText}</button>
                <div>Income: 
                    <div>${this.props.budget.income}</div>
                </div>
                <div>Savings: 
                    <div>${this.props.budget.savings * this.props.budget.income}</div>
                    <div>{this.props.budget.savings * 100}%</div>
                </div>
                <div>Debt: 
                    <div>${this.props.budget.debt * this.props.budget.income}</div>
                    <div>{this.props.budget.debt * 100}%</div>
                </div>
                <div>Home: 
                    <div>${this.props.budget.home * this.props.budget.income}</div>
                    <div>{this.props.budget.home * 100}%</div>
                </div>
                <div>Transportation: 
                    <div>${this.props.budget.transportation * this.props.budget.income}</div>
                    <div>{this.props.budget.transportation * 100}%</div>
                </div>
                <div>Personal Care: 
                    <div>${this.props.budget.personalCare * this.props.budget.income}</div>
                    <div>{this.props.budget.personalCare * 100}%</div>
                </div>
                <div>Food And Dining: 
                    <div>${this.props.budget.foodAndDining * this.props.budget.income}</div>
                    <div>{this.props.budget.foodAndDining * 100}%</div>
                </div>
                <div>Shopping: 
                    <div>${this.props.budget.shopping * this.props.budget.income}</div>
                    <div>{this.props.budget.shopping * 100}%</div>
                </div>
                <div>Entertainment: 
                    <div>${this.props.budget.entertainment * this.props.budget.income}</div>
                    <div>{this.props.budget.entertainment * 100}%</div>
                </div>
                <div>Miscellaneous: 
                    <div>${this.props.budget.miscellaneous * this.props.budget.income}</div>
                    <div>{this.props.budget.miscellaneous * 100}%</div>
                </div>
                <Link to='/dashboard'>Back to Home</Link>
            </div>
        )
    }
}

export default BudgetShow