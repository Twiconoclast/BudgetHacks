import React from 'react'
import {GoMarkGithub} from 'react-icons/go'
import {GrLinkedin} from 'react-icons/gr'

class About extends React.Component{
  constructor(prop){
    super(prop)
  }
  render(){
    return (
      <div className='dashboard'>
              <section className='charts-section'>
                <h1>About the Developers</h1>
                <div className='about-div'>
                  <div className='one'>
                    <h2>Maya Barnes</h2>
                    <div className='flex'>
                      <button><a href="https://github.com/mayagbarnes" target="_blank"><GoMarkGithub/></a></button>
                      <button><a href="https://www.linkedin.com/in/mayabarnes/" target="_blank"><GrLinkedin className='li'/></a></button>
                    </div>
                  </div>
                  <div className='two'>
                    <h2>Raymond Chen</h2>
                    <div className='flex'>
                      <button><a href="https://github.com/RaymondwChen2" target="_blank"><GoMarkGithub/></a></button>
                      <button><a href="https://www.linkedin.com/in/raymond-chen-70b633211/" target="_blank"> <GrLinkedin className='li'/></a></button>
                    </div>
                  </div>
                  <div className='three'>
                    <h2>Carrie Bares</h2>
                    <div className='flex'>
                      <button><a href="https://github.com/Twiconoclast" target="_blank"><GoMarkGithub/></a></button>
                      <button><a href="https://www.linkedin.com/in/carol-twilight-bares-b4513694/" target="_blank" ><GrLinkedin className='li'/></a></button>
                    </div>
                  </div>
                  <div className='four'>
                    <h2>Adrian Zaragoza</h2>
                    <div className='flex'>
                      <button><a href="https://github.com/adrian-zaragoza" target="_blank"><GoMarkGithub/></a></button>
                      <button><a href="https://www.linkedin.com/in/adrian-zaragoza/" target="_blank"><GrLinkedin className='li'/></a></button>
                    </div>
                  </div>
                </div>
              </section>
      </div>
    )
  }
}

export default About;