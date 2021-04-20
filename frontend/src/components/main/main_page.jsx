import React from 'react';
import homepage from '../../images/homepage.jpg';

class MainPage extends React.Component {

  render() {
    return (
      <div className= 'homepage'>
        <section className= 'homepage-content'>
          <section className= 'homepage-main'>
            <div className= 'homepage-main-left'>
              <h1>BudgetHacks</h1>
              <h3>A rewarding solution to your budget crisis</h3>
            </div>
            <div className= 'homepage-main-image'>
              <img src={homepage} alt="budgethacks" />
            </div>
          </section>
          <br/>
          <section className= 'homepage-secondary-holder'>
              <h1>The BudgetHacks Process:</h1>
            <section className= 'homepage-secondary'>
            <div className= 'homepage-secondary-left'>
                <div className='canvas'>
                  <div className="triangle-left-border"></div>
                  <div className='blockHead one'>
                    <h3 className='arrow-text'>1) Build a Budget</h3>
                  </div>
                  <div className="triangle-left"></div>
                  <p>Build a custom budget or let us help you</p>
                </div>
                <div className='canvas'>
                  <div className="triangle-left-border"></div>
                  <div className='blockHead two'>
                    <h3 className='arrow-text'>2) Track Spending</h3>
                  </div>
                  <div className="triangle-left"></div>
                  <p>Enter your monthly transactions</p>
                </div>
              </div>
            <div className= 'homepage-secondary-right'>
                <div className='canvas'>
                  <div className="triangle-left-border"></div>
                  <div className='blockHead three'>
                    <h3 className='arrow-text'>3) Monitor Progress</h3>
                  </div>
                  <div className="triangle-left"></div>
                  <p>Check our our charts to visualize your progress</p>
                </div>
                <div className='canvas'>
                  <div className="triangle-left-border"></div>
                  <div className='blockHead four'>
                    <h3 className='arrow-text'>4) Earn Rewards</h3>
                  </div>
                  <div className="triangle-left"></div>
                  <p>Earn rewards for sticking to the budget!</p>
                </div>
              </div>
            <div className= 'homepage-secondary-right'>
            </div>
            </section>
          </section>
        </section>
        <footer>
          Copyright &copy; 2021 BudgetHacks
        </footer>
      </div>
    );
  }
}

export default MainPage;