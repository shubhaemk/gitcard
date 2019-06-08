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
                <div className='card' style={{width : '60rem', borderRadius : '9px', backgroundColor : this.props.card_background }}>
                    <div className='columns'>
                        <div className='column is-4'>
                            <Profile></Profile>
                        </div>
                        <div className='column is-8'>
                            <div className='columns'>
                                <div className='column is-9'>
                                    <Repos></Repos>
                                </div>
                                <div className='column is-3'>
                                    <QR></QR>
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