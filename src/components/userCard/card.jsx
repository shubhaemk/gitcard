import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gitcard } from '../../store/action';

import Repos from './repos';
import Profile from './profile';
import QR from './qr';

class Card extends Component {
    constructor(props) {
        super(props);
        this.github = React.createRef();
    }

    componentDidMount = () => {
        this.props.updateGithub(this.github);
    }

    render(){
        return(
            <div ref={this.github}>
                <div className='card has-margin-60' style={{width : '60rem', borderRadius : '9px', backgroundColor : this.props.card_background }}>
                    <div className='container'>
                        <div className='columns'>
                            <div className='column is-one-fifth has-margin-right-10'>
                                <Profile></Profile>
                            </div>
                            <div className='column is-three-fifths'>
                                <div className='columns'>
                                    <div className='column is-9 has-margin-right-25'>
                                        <Repos></Repos>
                                    </div>
                                    <div className='column is-3 has-margin-top-10'>
                                        <QR></QR>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile : state.profile,
        theme : state.theme,
        card_background : state.card_background
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        updateGithub : (value) => {
            dispatch(gitcard('update_github',value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchProps)(Card);