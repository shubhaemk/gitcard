import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component{
    render(){
        return(
            <div className=''>
                <img className='image has-margin-10 has-margin-left-25' src={this.props.profile['avatar_url']} alt='github avatar' style={{ borderRadius : '9px', height : '180px', width : '180px' }}></img>
                <p className='h4 has-margin-left-25' style={{fontFamily : 'Roboto Mono' , color : this.props.card_text }}>{ this.props.profile['name'] === null ? null : this.props.profile['name'] } </p>
                <p className={this.props.profile['bio'] === null ? '' : 'has-margin-bottom-10'}>
                    <a href={'https://github.com/'+this.props.profile['login']} target="_blank" rel="noopener noreferrer" className='h4 has-margin-left-25' style={{fontFamily : 'Roboto Mono' , color : this.props.card_subtext }}>{'@'+this.props.profile['login']}</a>
                </p>
                { this.props.profile['bio'] === null ? null : (
                    <div className='has-margin-left-25 has-margin-bottom-10'>
                        <p href={this.props.profile['blog']} target="_blank" rel="noopener noreferrer" style={{fontFamily : 'Roboto Mono' , fontSize: '12px', display: 'inline-block', width: '15%', color : this.props.card_subtext}}>{'`'+this.props.profile['bio']+'`'}</p>
                    </div>
                )}
                { this.props.profile['company'] === null ? null : (
                    <div className='has-margin-left-25'>
                        <p style={{fontFamily : 'Roboto Mono' , fontSize: '12px', color : this.props.card_text, display: 'inline-block', width: '15%'}}><img className='has-margin-right-5' src={'./assets/work-'+this.props.theme+'.svg'} alt='briefcase' height='12px' width='12px'></img>{this.props.profile['company']}</p>
                    </div>
                )}
                { this.props.profile['location'] === null ? null : (
                    <div className='has-margin-left-25'>
                        <p style={{fontFamily : 'Roboto Mono' , fontSize: '12px', color : this.props.card_text, display: 'inline-block', width: '15%'}}><img className="has-margin-right-5" src={'./assets/map-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.profile['location']}</p>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme : state.theme,
        profile : state.profile,
        card_text : state.card_text,
        card_subtext : state.card_subtext
    }
};

export default connect(mapStateToProps)(Profile);