import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Card from './card';
import Customise from './customise';

class Result extends Component {
    render(){
        return(
            <div className='columns'>
                <div className='column is-7 has-margin-50 is-bottom-marginless-mobile'>
                    <div className='is-hidden-desktop is-hidden-tablet has-margin-bottom-20'>
                        <p className='is-size-7-mobile' style={{color : this.props.card_text }}>` Mobile is WIP :( `</p>
                        <p className='is-size-7-mobile' style={{color : this.props.card_text }}>` You can play around though ;) `</p>
                        <p className='is-size-7-mobile' style={{color : this.props.card_text }}>` Desktop version is way cooler 8) `</p>
                    </div>
                    <Card></Card>
                </div>
                <div className='column is-5'>
                    <Customise></Customise>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        card_text : state.card_text,
        theme : state.theme,
        github : state.github
    }
}
export default connect(mapStateToProps)(Result);