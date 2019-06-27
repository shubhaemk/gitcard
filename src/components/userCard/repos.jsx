import React, { Component } from 'react';
import { connect } from 'react-redux';


class Repos extends Component{
    render(){
        return(
            <div className=''>
                <p className='has-margin-bottom-10' style={{fontFamily : 'Roboto Mono' , fontSize: '25px', color : this.props.card_text}}>
                    Repositeries
                </p>
                <div className='columns'>
                    <div className='column is-6'>
                        <div className='has-margin-bottom-10'>                         
                            <span style={{fontFamily : 'Roboto Mono' , fontSize: '15px', color : this.props.card_text, display: 'inline-block', width: '23ch', whiteSpace: 'nowrap', overflow: 'hidden',textOverflow: 'ellipsis'}}>
                                <img className="has-margin-right-10" src={'./assets/book-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[0] === undefined ? 'N/A' : this.props.latest_repos[0]['name'])}
                            </span>
                            <p style={{fontFamily : 'Roboto Mono' , fontSize: '11px', color : this.props.card_subtext}}>
                                <img className="has-margin-right-10" src={'./assets/circle-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[0] === undefined ? 'N/A' : this.props.latest_repos[0]['language'])}
                            </p>
                        </div>
                        <div>
                            <span style={{fontFamily : 'Roboto Mono' , fontSize: '15px', color : this.props.card_text, display: 'inline-block', width: '23ch', whiteSpace: 'nowrap', overflow: 'hidden',textOverflow: 'ellipsis'}}>
                                <img className="has-margin-right-10" src={'./assets/book-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[1] === undefined ? 'N/A' : this.props.latest_repos[1]['name'])}
                            </span>
                            <p style={{fontFamily : 'Roboto Mono' , fontSize: '11px', color : this.props.card_subtext}}>
                                <img className="has-margin-right-10" src={'./assets/circle-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[1] === undefined ? 'N/A' : this.props.latest_repos[1]['language'])}
                            </p>
                        </div>
                    </div>
                    <div className='column is-6'>
                        <div className='has-margin-bottom-10'>
                            <span style={{fontFamily : 'Roboto Mono' , fontSize: '15px', color : this.props.card_text, display: 'inline-block', width: '23ch', whiteSpace: 'nowrap', overflow: 'hidden',textOverflow: 'ellipsis'}}>
                                <img className="has-margin-right-10" src={'./assets/book-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[2] === undefined ? 'N/A' : this.props.latest_repos[2]['name'])}
                            </span>
                            <p style={{fontFamily : 'Roboto Mono' , fontSize: '11px', color : this.props.card_subtext}}>
                                <img className="has-margin-right-10" src={'./assets/circle-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[2] === undefined ? 'N/A' : this.props.latest_repos[2]['language'])}
                            </p>
                        </div>
                        <div>
                            <span style={{fontFamily : 'Roboto Mono' , fontSize: '15px', color : this.props.card_text, display: 'inline-block', width: '23ch', whiteSpace: 'nowrap', overflow: 'hidden',textOverflow: 'ellipsis'}}>
                                <img className="has-margin-right-10" src={'./assets/book-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[3] === undefined ? 'N/A' : this.props.latest_repos[3]['name'])}
                            </span>
                            <p style={{fontFamily : 'Roboto Mono' , fontSize: '11px', color : this.props.card_subtext}}>
                                <img className="has-margin-right-10" src={'./assets/circle-'+this.props.theme+'.svg'} alt='location' height='10px' width='10px'></img>{this.props.latest_repos === null ? null : (this.props.latest_repos[3] === undefined ? 'N/A' : this.props.latest_repos[3]['language'])}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        theme : state.theme,
        profile : state.profile,
        latest_repos : state.latest_repos,
        card_text : state.card_text,
        card_subtext : state.card_subtext
    }
}

export default connect(mapStateToProps)(Repos);