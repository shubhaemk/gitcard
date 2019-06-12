import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Card from './card';
import Customise from './customise';

class Result extends Component {
    render(){
        return(
            <div className='columns'>
                <div className='column is-9 has-margin-100'>
                    <Card></Card>
                </div>
                <div className='colum is-1' style={{ height:'84vh', borderLeft : (this.props.theme === 'light' ? '1px solid hsl(0, 0%, 95%)' : '1px solid hsl(0, 0%, 5%)')}}></div>
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