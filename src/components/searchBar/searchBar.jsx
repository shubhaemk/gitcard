import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import { gitcard } from '../../store/action';
import './searchBar.css';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.delayedSearch = _.debounce(this.fetchUserData,1500);
    }

    fetchUserData = (event) => {
        if(event.target.value.length > 0){
            this.props.updateUserFound(false);
            axios.get('https://api.github.com/users/'+this.props.user_name)
            .then((result) => {
                axios.get('https://api.github.com/users/'+this.props.user_name+'/repos',{
                    params : {
                      type : 'owner',
                      sort : 'updated'
                    }
                }).then((repos) => {
                    axios.get('https://github-contributions-api.now.sh/v1/'+this.props.user_name)
                    .then((contribution) => {
                        let profile = {...result['data']};
                        for(let key in this.props.profile){
                            this.props.updateProfile({key , value : profile[key]});
                        }
                        this.props.updateRepos(repos['data'].filter((element,index)=>{return index < 5;}));
                        this.props.updateUserFound(true);
                        this.props.updateControlDiv('control has-icons-right');
                    })
                });
            })
            .catch((error) => {
                this.props.updateContributionChart(null);
                this.props.updateRepos(null);
                for(let key in this.props.profile){
                    this.props.updateProfile({key , value : ''});
                }
                this.props.updateUserFound(false);
                this.props.updateControlDiv('control has-icons-right');
            });

        }else{
            this.props.updateContributionChart(null);
            this.props.updateRepos(null);
            for(let key in this.props.profile){
                this.props.updateProfile({key , value : ''});
            }
            this.props.updateUserFound(false);
            this.props.updateControlDiv('control');
        }
    }

    updateUserName = (event) => {
        this.props.updateUserName(event.target.value);
        this.props.updateControlDiv('control is-loading');
        event.persist();
        this.delayedSearch(event);
    }

    render(){
        return(
            <nav className='navbar is-overlay' role='navigation' aria-label='main navigation' style={{ background : (this.props.theme === 'light' ? 'hsl(0, 0%, 95%)' : 'hsl(0, 0%,5%)')}}>
                <div className='navbar-brand has-margin-left-15'>
                    <a className="navbar-item" href="/ddd">
                        <img src={'./assets/mark-'+this.props.theme+'.png'} width='30rem' height='200rem' alt='github-logo'></img>
                    </a>
                    <p className='is-size-3 has-margin-top-10' style={{fontFamily : 'Roboto Mono' , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')}}>
                        GitCard
                        <span className='has-margin-left-10' style={{fontSize : '0.70rem', fontFamily : 'Roboto Mono'}}>Generate shareable GitHub profile cards</span>
                    </p>
                </div>
                <div className='navbar-item'>
                    <p className='has-margin-right-15 has-margin-left-20 is-size-3' style={{fontFamily : 'Roboto' , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')}}>{'{ {'}</p>
                    <div className={this.props.control_div}>
                        <input className={ this.props.user_found === false && this.props.user_name !== '' ? 'input is-danger '+(this.props.theme === 'light' ? 'placeholderLight' : 'placeholderDark') : 'input '+(this.props.theme === 'light' ? 'placeholderLight' : 'placeholderDark')} type="text" placeholder="GitHub User Name" value={this.props.user_name} onChange={this.updateUserName} style={{width : '17rem', height : '2.2rem' , backgroundColor : ( this.props.theme === 'light' ? 'hsl(0, 0%, 96%)' : 'hsl(0, 0%, 20%)') , color : ( this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')}} autoFocus={true}></input>
                        {
                            this.props.control_div === 'control has-icons-right' ? (
                                <span className='icon is-right'>
                                    <i className={ this.props.user_found === false && this.props.user_name !== '' ? 'fas fa-times' : 'fas fa-check'} style={{color : ( this.props.user_found === false && this.props.user_name !== '' ? '#F00' : '#0F0') }}></i>
                                </span>
                            ) : (
                                null
                            )
                        }
                    </div>
                    <p className='has-margin-left-15 is-size-3' style={{fontFamily : 'Roboto' , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')}}>{'} }'}</p>
                </div>
                <div className="navbar-end has-margin-right-35 has-margin-top-10">
                    <p className='is-size-3' style={{fontFamily : 'Roboto Mono' , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')}}>
                        <span className='' style={{fontSize : '0.70rem', fontFamily : 'Roboto Mono'}}>Made with Bulma, React & GitHub APIv3 by </span>
                        <a href='https://github.com/shubhaemk' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')}}>Shubhaemk</a>
                    </p>
                    <a href='https://github.com/shubhaemk' target="_blank" rel="noopener noreferrer">
                        <img className='has-margin-top-5 has-margin-left-5' src='https://avatars1.githubusercontent.com/u/44347043?v=4' alt='shubhaemk-logo' style={{display: 'block', width : '2rem', height : '2rem', borderRadius: '50%'}}></img>
                    </a>       
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        control_div : state.control_div,
        user_name : state.user_name,
        user_found : state.user_found,
        theme : state.theme,
        profile : state.profile,
        latest_repos : state.latest_repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUserName : (value) => {
            dispatch(gitcard('update_user_name',value));
        },
        updateUserFound : (value) => {
            dispatch(gitcard('update_user_found',value));
        },
        updateControlDiv : (value) => {
            dispatch(gitcard('update_control_div',value));
        },
        updateProfile : (value) => {
            dispatch(gitcard('update_profile',value));
        },
        updateRepos : (value) => {
            dispatch(gitcard('update_latest_repos',value));
        },
        updateContributionChart : (value) => {
            dispatch(gitcard('update_contribution_chart',value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);