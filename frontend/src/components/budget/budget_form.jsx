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
        if (!this.props.formShow) {
            this.hiddenOrShow = ''
        }
    }

    calculate(e) {
        e.preventDefault()
        this.showForm()
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
            <div>
                <h3>Set your Budget</h3>
                <div>
                    <form onSubmit={this.calculate}> 
                        <label>Income: 
                            <div>$
                                <input type='number' value={this.state.income} onChange={this.handleChangeIncome('income')} />
                            </div>
                            <button>Update Income</button>
                        </label>
                    </form> 
                    <div>
                        <label>Percent of Income: 
                            <div className={this.redOrGreen}>{percentOfIncome}</div>
                        </label>
                        <label>Total Dollars Entered: 
                            <div className={this.redOrGreen}>{totalDollarsEntered.toFixed(2)}</div>
                        </label>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className={this.hiddenOrShow}>
                            <label>Savings: 
                                <div><span>$</span>
                                    <input type='number' value={savings} onChange={this.handleChangeDollars('savings')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.savings* 100} onChange={this.handleChangePercent('savings')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Debt: 
                                <div><span>$</span>
                                    <input type='number' value={debt} onChange={this.handleChangeDollars('debt')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.debt* 100} onChange={this.handleChangePercent('debt')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Transportation: 
                                <div><span>$</span>
                                    <input type='number' value={transportation} onChange={this.handleChangeDollars('transportation')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.transportation* 100} onChange={this.handleChangePercent('transportation')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Home: 
                                <div><span>$</span>
                                    <input type='number' value={home} onChange={this.handleChangeDollars('home')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.home* 100} onChange={this.handleChangePercent('home')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Personal Care: 
                                <div><span>$</span>
                                    <input type='number' value={personalCare} onChange={this.handleChangeDollars('personalCare')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.personalCare* 100} onChange={this.handleChangePercent('personalCare')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Food And Dining: 
                                <div><span>$</span>
                                    <input type='number' value={foodAndDining} onChange={this.handleChangeDollars('foodAndDining')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.foodAndDining* 100} onChange={this.handleChangePercent('foodAndDining')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Shopping: 
                                <div><span>$</span>
                                    <input type='number' value={shopping} onChange={this.handleChangeDollars('shopping')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.shopping* 100} onChange={this.handleChangePercent('shopping')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Entertainment: 
                                <div><span>$</span>
                                    <input type='number' value={entertainment} onChange={this.handleChangeDollars('entertainment')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.entertainment* 100} onChange={this.handleChangePercent('entertainment')}  />
                                    <span>%</span>
                                </div>
                            </label>
                            <label>Miscellaneous: 
                                <div><span>$</span>
                                    <input type='number' value={miscellaneous} onChange={this.handleChangeDollars('miscellaneous')}  />
                                </div>
                                <div>
                                    <input type='number' value={this.state.miscellaneous* 100} onChange={this.handleChangePercent('miscellaneous')}  />
                                    <span>%</span>
                                </div>
                            </label>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <Link to='/dashboard'>Back to Home</Link>
            </div>
        )
    }
}

export default BudgetForm