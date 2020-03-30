import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  // const basicInfo = {
  //   name : 'Parsa Safavi',
  //   logoURL : 'http://parsa.pro/wp-content/uploads/2019/08/cropped-ParsaTheProLogoSmall.png',
  //   title : 'Full-Stack Web Developer',
  //   blurb : ''
  // }
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount(){
    axios.get('/general')
    .then(result => {
      this.setState(result.data[0], () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <div>
        <HeaderContainer basicInfo={this.state}  />
        <MainWrapper />
        <DownloadPDF />
      </div>
    );
  }
}
function HeaderContainer({basicInfo}){
  return (
    <div class="header-container">
            <header class="wrapper cf">
                <Logo url={basicInfo.logo_url} />
                <NameAndTitle name={basicInfo.name} title={basicInfo.title} />
                <Blurb blurbText={basicInfo.description} />
            </header>
        </div>
  )
}
function Logo({url}){
  return (
    <div class="pos-b">
        <img class="logo" src={url} alt="Logo"/>
    </div>
  )
}
function NameAndTitle({name , title}){
   return (
    <div class="pos-a">
      <h1 class="me">{name}</h1>
      <p class="title">{title}</p>
    </div>
   )
}

function Blurb({blurbText}){
  return (
    <p class="blurb">{blurbText}</p>
  )
}
function MainWrapper(){
  return (
    <div class="main wrapper cf">
      <PosA />
      <PosB />
    </div>
  )
}

function PosA(){
  return (
    <div class="pos-a">
      <Experience />
      <Skills />
      <Education />
    </div>
  )
}

class Experience extends React.Component{

  constructor(props){
    super(props)
    this.state = {result : []}
  }
  componentDidMount(){
    axios.get('/experiences')
    .then(result => {
      this.setState({result : result.data}, () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <section>
        <h1 class="section-heading">Experience</h1>
        <div class="section-content">
            {
              this.state.result.map(item => {
                return item.visible ?  <SingleExperience key={item.id} experience={item} /> : null
              })
            }
        </div>
      </section>
    )
  }
}
function SingleExperience({experience}){
  return (
    <section class="sub-section">
      <h1 class="focus">{experience.title}</h1>
      <p class="org">{experience.company}</p>
      <p class="time-frame">{experience.start_date} - {experience.end_date}</p>
      <p class="description">{experience.description}</p>
    </section>
  )
}
class Skills extends React.Component{
  constructor(props){
    super(props)
    this.state = {result : []}
  }
  componentDidMount(){
    axios.get('/skills')
    .then(result => {
      this.setState({result : result.data}, () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <section>
        <h1 class="section-heading">Skills</h1>
        <div class="section-content">
            <ol class="tag-cloud">
                {
                  this.state.result.map(item => <SingleSkill skill={item}/>)
                }
            </ol>
        </div>
      </section>
    )
  }
}
function SingleSkill({skill}){
  let rate;
  switch(skill.rate){
    case 1:
      rate = 'lvl-c'
      break;
    case 2:
      rate = 'lvl-b'
      break;
    case 3:
      rate = 'lvl-a'
      break;
    default:
      rate = ''
      break;
  }
  return  (<li className={"tag " + rate}>{skill.title}</li>)
}
class Education extends React.Component{
  constructor(props){
    super(props)
    this.state = {result : []}
  }
  componentDidMount(){
    axios.get('/education')
    .then(result => {
      this.setState({result : result.data}, () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <section>
        <h1 class="section-heading">Education</h1>
        <div class="section-content">
           {
             this.state.result.map(item => {
               return item.visible ? <SingleEducation key={item.id} education={item} /> : null
             })
           }          
        </div>
      </section>
    )
  }
}

function SingleEducation({education}){
  return (
    <section class="sub-section">
      <h1 class="focus">{education.title}</h1>
      <p class="org">{education.institue}</p>
      <p class="time-frame">{education.start_date} - {education.end_date}</p>
      <p class="description">{education.description}</p>
    </section>     
  )
}
function PosB(){
  return (
    <div class="pos-b">
        <Contact />
        <WorkSamples />
        <Interests />
    </div>
  )
}
class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  componentDidMount(){
    axios.get('/general')
    .then(result => {
      this.setState(result.data[0], () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <section>
        <h1 class="section-heading">Contact</h1>
        <div class="section-content">
          <ul>
            <li><a href={`mailto:` + this.state.email}>{this.state.email}</a></li>
            <li><a href >{this.state.phone_number}</a></li>
            <li class="social-links"><a href={this.state.linkedIn} target="_blank">Linkedin</a></li>
            <span class="social-links">
            &nbsp; | &nbsp;
            </span>
            <li class="social-links"><a href={this.state.github} target="_blank">Github</a></li>
          </ul>
        </div>
      </section>
    )
  }
}
class WorkSamples extends React.Component{
  constructor(props){
    super(props)
    this.state = {result : []}
  }
  componentDidMount(){
    axios.get('/worksamples')
    .then(result => {
      this.setState({result : result.data}, () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <section>
        <h1 class="section-heading">Work Samples</h1>
        {
          this.state.result.map(item => {
            return item.visible ? <SingleWorkSample key={item.id} workSample={item} /> : null
          })
        }
      </section>
    )
  }
}
function SingleWorkSample({workSample}){
  return (
    <div class="section-content">
      <p>{workSample.title}</p>
      <p>&nbsp;<a href={workSample.link} target="_blank">{workSample.description}</a></p>
      {/* <p>View this resume <span class="web-only">on a mobile device</span><span class="print-only">in a web browser</span> for the fully responsive experience <span class="print-only">(https://landoresume.github.com)</span></p> */}
    </div>
  )
}
class Interests extends React.Component{
  constructor(props){
    super(props)
    this.state = {result : []}
  }
  componentDidMount(){
    axios.get('/interests')
    .then(result => {
      this.setState({result : result.data}, () => {
        console.log(this.state)
      })
    })
  }
  render(){
    return (
      <section>
        <h1 class="section-heading">Interests</h1>
        {
          this.state.result.map(item => {
            return item.visible ? <SingleInterest key={item.id} interest={item}/> : null
          })
        }
      </section>
    )
  }
}
function SingleInterest({interest}){
  return (
    <div class="section-content">
      <p>{interest.descripiton}</p>
    </div>
  )
}
function DownloadPDF(){
  return (
    <div class="wrapper download-link web-only">
      <a onClick={window.print} >Print Resume</a>
    </div>
    
  )
}
export default App;
  