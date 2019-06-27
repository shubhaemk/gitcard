import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Card from './card';
import Customise from './customise';

class Result extends Component {
    render(){
        return(
            <div className='columns'>
                <div className='column is-7 has-margin-50'>
                    <Card></Card>
                </div>
                <div className='column is-2'>
                    <Customise></Customise>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme : state.theme,
        github : state.github
    }
}
export default connect(mapStateToProps)(Result);