import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class BudgetShow extends Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.fetchBudget(this.props.user.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.income !== prevProps.income) {
            this.setState({income: this.props.income})
        }
    }

    render() {
        return (
            <div className='budget-show-form-container'>
                <div>
                    <h3 className='budget-show-form-header'>{this.props.budgetHeader}</h3>
                    <p className='budget-show-form-subheader'>{this.props.budgetSubHeader}</p>
                    <button className='budget-show-edit-button'onClick={() => this.props.history.push('/budget/edit')}>{this.props.buttonText}</button>
                    <div className='budget-show-category-head'>Income: 
                        <div>
                            <div className='budget-show-category'>${this.props.budget.income}</div>
                        </div>
                    </div>
                    <div className='budget-show-category-head'>Savings: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.savings * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.savings * 100}%</div>
                        </div>
                    </div>
                    <div className='budget-show-category-head'>Debt: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.debt * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.debt * 100}%</div>
                        </div>        
                    </div>
                    <div className='budget-show-category-head'>Home: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.home * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.home * 100}%</div>
                        </div>        
                    </div>
                    <div className='budget-show-category-head'>Transportation: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.transportation * this.props.budget.income}</div>
                            </div>
                            <div>{this.props.budget.transportation * 100}%</div>
                        </div>    
                    </div>
                    <div className='budget-show-category-head'>Personal Care: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.personalCare * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.personalCare * 100}%</div>
                        </div>        
                    </div>
                    <div className='budget-show-category-head'>Food And Dining: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.foodAndDining * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.foodAndDining * 100}%</div>
                        </div>        
                    </div>
                    <div className='budget-show-category-head'>Shopping: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.shopping * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.shopping * 100}%</div>
                        </div>        
                    </div>
                    <div className='budget-show-category-head'>Entertainment: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.entertainment * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.entertainment * 100}%</div>
                        </div>        
                    </div>
                    <div className='budget-show-category-head'>Miscellaneous: 
                        <div className='budget-show-category'>
                            <div>
                                <div>${this.props.budget.miscellaneous * this.props.budget.income}</div>
                            </div>
                                <div>{this.props.budget.miscellaneous * 100}%</div>
                        </div>        
                    </div>
                    <Link  to='/dashboard' className="budget-show-home-button">Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default BudgetShow