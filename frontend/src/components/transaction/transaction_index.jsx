import React from 'react'


class TransactionIndex extends React.Component{
  constructor(prop){
    super(prop)
    this.state = {createFormShow: false, editFormShow: false}
    this.toggleEditForm = this.toggleEditForm.bind(this)
  }

  componentDidMount(){
    fetchTransactions(this.props.userId)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.transactions !== this.props.transactions){
      this.setState(this.state)
    }
  }

  toggleEditForm(e){
    e.preventDefault()
    this.editFormShow ? 'hidden' : ''
  }

  toggleCreateForm(e){
    this.setState({createFormShow : !this.state.createFormShow})
  }

  render(){
    let tList;
    if (this.props.transactions){
      tList = Object.values(this.props.transactions).map((trans)=>{
        return (
          <li key={trans.id}>
            <TransactionShowContainer />
          </li>
        )
      })
    }
    return (
      <div>
        <h1>Transaction List</h1>
        <p>Current Balance : ${this.props.balance}</p>
        <button onClick={this.toggleCreateForm}>+</button>
        <ul>
          <li className={this.state.createFormShow ? "" : 'hidden'}>
            <CreateTransactionContainer/>
          </li>
            {tList}
        </ul>
      </div>
    )
  }
};



export default TransactionIndex 