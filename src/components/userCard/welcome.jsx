import React, { Component } from 'react';
import { connect } from 'react-redux';

import Result from './result';

class Welcome extends Component { 
    render(){
        if(this.props.search === 'end'){
            if(this.props.user_name === '' && this.props.user_found === false){
                return(
                    <div className='has-text-centered has-margin-bottom-60'>
                        <p className="is-size-3" style={{color : this.props.card_text}}>` Generate Sharable GitHub Profile Cards `</p>
                        <img src={'./assets/home-'+this.props.theme+'.png'} alt='home-icon' height='300px' width='300px'></img>
                        <p className="is-size-4" style={{color : this.props.card_text}}>{'{ { For educational purpose only } }'}</p>
                    </div>
                );
            }else if(this.props.user_name !== '' && this.props.user_found === false){
                return(
                    <div className='has-text-centered has-margin-bottom-60'>
                        <p className="is-size-3" style={{color : 'red'}}>` Sorry, GitCard have met an Error! `</p>
                        <img src={'./assets/not-found.png'} alt='home-icon' height='300px' width='300px'></img>
                        <p className="is-size-6" style={{color : 'red'}}>{'/* Check your Internet Connection || API Limit exceded || Wrong UserName */'}</p>
                    </div>
                )
            }else{
                return(<Result></Result>)
            }
        }else{
            return(
                <div className='has-text-centered has-margin-bottom-60'>
                    <img src={'./assets/loading-'+this.props.theme+'.gif'} alt='loading gif' width='100px' height='100px'></img>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        search : state.search,
        user_found : state.user_found,
        user_name : state.user_name,
        card_text : state.card_text,
        theme : state.theme
    }
}

export default connect(mapStateToProps)(Welcome);