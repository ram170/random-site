import React, { Component } from 'react';
import './App.css';
import Banner from './components/banner/Banner';
import Div1 from './components/div1/Div1';
import Clock from './components/clock/Clock';
import Yrif from './gifs/Yrif.gif';
import sunandstars from './gifs/sunandstars.gif';
import itachiUchiha from './gifs/itachiUchiha.gif';
import wish from './gifs/wish.gif';
import tree from './gifs/tree.gif';
import astro2 from './gifs/astro2.gif';
import shootingstar from './gifs/shootingstar.gif';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export class App extends Component {
  state = {
    current: 0,
    gifs: [Yrif, sunandstars, tree, wish, shootingstar, itachiUchiha, astro2],
    text: [["Let's waste time..", "chasing cars.."], ["Look at the stars", "Look how they shine for you"], ["A look in somebody's eyes to light up the sky, To open the world and send it reeling", "A voice that says I'll be here and you'll be alright"], ["If I lay here..", "If I just lay here..", "Would you lie with me and just forget the world?"], ["So if by the time the bar closes and you feel like falling down...I'll carry you home...tonight"], ["Sad to see you go...", "Sorta hoping you'd stay"], ["I'll swim ten thousand miles to have you in my arms"]]
  }

  incrementfun = () => {
    if (this.state.gifs.length <= this.state.current+1) {
      this.setState({current: 0 });
    } else {
      this.setState({current: this.state.current+1 });
    }
  }

  decrementfun = () => {
    if (this.state.current-1 >= 0) {
      this.setState({current: this.state.current-1 });
    } else {
      this.setState({current: this.state.gifs.length-1 });
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.body.style.marginLeft='10%';
    document.body.style.marginRight='10%';
  }

  render() {
    return (
      <div>
       <Banner></Banner>
       <br></br>
       <br></br>
       <br></br>
       <div className="row">
        <ArrowBackIosIcon fontSize='large' className='lefticon' onClick={ this.decrementfun }></ArrowBackIosIcon>
        <ArrowForwardIosIcon fontSize='large' className='righticon' onClick={this.incrementfun}></ArrowForwardIosIcon>
       </div>
       <div>
        <Div1 img={this.state.gifs[this.state.current]} string={this.state.text[this.state.current]}></Div1>
       </div>
       <br></br>
       <br></br>
       <Clock></Clock>
      </div>
    )
  }
}

export default App

