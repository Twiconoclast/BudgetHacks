import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class BudgetForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            income: parseFloat(this.props.income),
            home: parseFloat(this.props.home),
            savings: parseFloat(this.props.savings),
            transportation: parseFloat(this.props.transportation),
            personalCare: parseFloat(this.props.personalCare),
            foodAndDining: parseFloat(this.props.foodAndDining),
            shopping: parseFloat(this.props.shopping),
            entertainment: parseFloat(this.props.entertainment),
            miscellaneous: parseFloat(this.props.miscellaneous),
            debt: parseFloat(this.props.debt)
        }
        this.redOrGreen = 'green'
        this.percentOfIncome = this.state.home + this.state.savings + this.state.transportation + this.state.personalCare + this.state.foodAndDining + this.state.shopping + this.state.entertainment + this.state.miscellaneous + this.state.debt
        this.handleChangeIncome = this.handleChangeIncome.bind(this)
        this.showForm = this.showForm.bind(this)
        this.calculate = this.calculate.bind(this)
        this.handleChangeDollars = this.handleChangeDollars.bind(this)
        this.handleChangePercent = this.handleChangePercent.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.income !== prevProps.income) {
            this.setState({income: this.props.income})
        }
    }

    componentDidMount() {
        this.props.fetchBudget(this.props.user.id)
        this.hiddenOrShow = this.props.formShow ? '' : 'hidden'
    }


    handleChangeIncome(type) {
        return (e) => this.setState({[type]: parseFloat(e.currentTarget.value)})
    }

    showForm() {
        console.log("in the show form")
        if (this.props.formShow === 'hidden') {
            this.hiddenOrShow = ''
            console.log(this.hiddenOrShow)
        } 
    }

    calculate(e) {
        e.preventDefault();
        this.showForm();
    }

    handleChangeDollars(type) {
        return (e) => {
            let newType = e.currentTarget.value / this.state.income
            return this.setState({[type]: newType})
        }
    }

    handleChangePercent(type) {
        return (e) => {
            let fixed = e.currentTarget.value / 100
            return this.setState({[type]: fixed})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        if (this.percentOfIncome.toFixed(2) > 1.00) {
        } else if (this.percentOfIncome.toFixed(2) < .99) {
            this.setState(prevState => ({savings: (prevState.savings + (1 - this.percentOfIncome)).toFixed(2)}))
            this.props.updateBudget(this.props.user.id, this.state)
            .then(() => this.props.history.push('/budget'))
        } else {
            this.props.updateBudget(this.props.user.id, this.state)
            .then(() => this.props.history.push('/budget'))
        }  
    }

    render() {
        let home = this.state.home * this.state.income
        let savings = this.state.savings * this.state.income
        let transportation = this.state.transportation * this.state.income
        let personalCare = this.state.personalCare * this.state.income
        let foodAndDining = this.state.foodAndDining * this.state.income
        let shopping = this.state.shopping * this.state.income
        let entertainment = this.state.entertainment * this.state.income
        let miscellaneous = this.state.miscellaneous * this.state.income
        let debt = this.state.debt * this.state.income
        let totalDollarsEntered = home + savings + transportation + personalCare + foodAndDining + shopping + entertainment + miscellaneous + debt
        let percentOfIncome
        if (this.state.income) {
            percentOfIncome = (totalDollarsEntered / this.state.income) * 100
            this.redOrGreen = percentOfIncome <= 100 ? 'green' : 'red' 
            this.percentOfIncome = percentOfIncome / 100
        }
        return (
            <div className="budget-form-container">
                <div className="budget-forms">
                    <form className='budget-form' onSubmit={this.calculate}> 
                    <h1 className="budget-heading">Set your Budget</h1>
                    <h3>Step 1) Please enter or update your income below:</h3>
                        <label className='budget-label'> 
                            <div className='budget-input-container'><span>Income:</span> <span> $ </span> 
                                <input className='budget-input' type='number' value={this.state.income} onChange={this.handleChangeIncome('income')} />
                            </div>
                            <div className='button-holder'>
                            <button className='submit-button' type='submit'>Update Income</button>
                            </div>
                        </label>
                    </form> 
                    <form className={`budget-form ${this.hiddenOrShow}`} onSubmit={this.handleSubmit}>
                        <div className='budget-heading-container'>
                            <label className='budget-heading-label'>Total Income Percentage: 
                                <div className={`budget-form ${this.redOrGreen}`}>{percentOfIncome}%</div>
                            </label>
                            <label className='budget-heading-label'>Total Dollars: 
                                <div className={`budget-form ${this.redOrGreen}`}>${totalDollarsEntered.toFixed(2)}</div>
                            </label>
                        </div>
                        <div>
                            <label className='budget-label'>Savings: 
                            <div className='budget-input-columns'>
                                <div className='budget-input-container'>
                                    <span>$</span>
                                    <input className='budget-input' type='number' value={savings} onChange={this.handleChangeDollars('savings')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.savings* 100} onChange={this.handleChangePercent('savings')}  />
                                    <span>%</span>
                                </div>
                            </div>
                            </label>
                            <label className='budget-label'>Debt: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={debt} onChange={this.handleChangeDollars('debt')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.debt* 100} onChange={this.handleChangePercent('debt')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Transportation: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={transportation} onChange={this.handleChangeDollars('transportation')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.transportation* 100} onChange={this.handleChangePercent('transportation')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Home: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={home} onChange={this.handleChangeDollars('home')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.home* 100} onChange={this.handleChangePercent('home')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Personal Care: 
                                <div className='budget-input-container'> <span>$</span>
                                    <input className='budget-input' type='number' value={personalCare} onChange={this.handleChangeDollars('personalCare')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.personalCare* 100} onChange={this.handleChangePercent('personalCare')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Food And Dining: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={foodAndDining} onChange={this.handleChangeDollars('foodAndDining')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.foodAndDining* 100} onChange={this.handleChangePercent('foodAndDining')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Shopping: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={shopping} onChange={this.handleChangeDollars('shopping')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.shopping* 100} onChange={this.handleChangePercent('shopping')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Entertainment: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={entertainment} onChange={this.handleChangeDollars('entertainment')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.entertainment* 100} onChange={this.handleChangePercent('entertainment')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label className='budget-label'>Miscellaneous: 
                                <div className='budget-input-container'><span>$</span>
                                    <input className='budget-input' type='number' value={miscellaneous} onChange={this.handleChangeDollars('miscellaneous')}  />
                                </div>
                                <div className='budget-input-container'>
                                    <input className='budget-input' type='number' value={this.state.miscellaneous* 100} onChange={this.handleChangePercent('miscellaneous')}  />
                                    <span>%</span>
                                </div>
                            </label>
                        </div>
                        <div className='button-holder'>
                        <button type='submit-button'>Submit</button>
                        </div>
                    </form>
                </div>
                <Link to='/dashboard'>Back to Home</Link>
            </div>
        )
    }
}

export default BudgetForm