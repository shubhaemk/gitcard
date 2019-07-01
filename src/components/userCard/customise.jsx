import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as htmlToImage from 'html-to-image';
import  download from 'downloadjs';

import { gitcard } from '../../store/action';

class Customise extends Component {

    toggleTheme = (theme) => {
        if(theme === 'dark'){
            this.props.updateTheme('dark');
            this.props.updateText('hsl(0, 0%, 100%)');
            this.props.updateCardBackground('hsl(0, 0%, 0%)');
        }else{
            this.props.updateTheme('light');
            this.props.updateText('hsl(0, 0%, 0%)');
            this.props.updateCardBackground('hsl(0, 0%, 100%)');
        }
    }

    downloadCard = (e) => {
        htmlToImage.toPng(this.props.github['current'])
        .then(function (dataUrl) {
            download(dataUrl, 'gitcard.png');
        })
        .catch((e)=>{
            console.log(e);
        });
    }
    render(){
        return(
            <div className='has-margin-top-30'>
                <p className='is-size-3' style={{ color : this.props.card_text }}>Theme your card!</p>
                <div className="control">
                    <label className='radio'>
                        <input type='radio' name='theme' checked={this.props.theme === 'light'} onClick={() => this.toggleTheme('light')}></input> 
                        <label className='has-margin-left-5' style={{ color : this.props.card_text }}>Light</label>
                    </label>
                    <label className='radio'>
                        <input type='radio' name='theme' checked={this.props.theme === 'dark'} onClick={() => this.toggleTheme('dark')}></input> 
                        <label className='has-margin-left-5' style={{ color : this.props.card_text }}>Dark</label>
                    </label>
                </div>
                <div className='has-margin-top-10'>
                    <label className='is-size-4 has-margin-right-10' style={{ color : this.props.card_text }}>Get your card <i className="fas fa-long-arrow-alt-right has-margin-5"></i></label>
                    <button className={this.props.theme === 'light' ? "button" : 'button is-black'} onClick={() => this.downloadCard()}>Download</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        theme : state.theme,
        github : state.github,
        card_text : state.card_text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTheme : (value) => {
            dispatch(gitcard('update_theme',value));
        },
        updateText : (value) => {
            dispatch(gitcard('update_card_text',value));
        },
        updateSubText : (value) => {
            dispatch(gitcard('update_card_subtext',value));
        },
        updateCardBackground : (value) => {
            dispatch(gitcard('update_card_background',value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Customise);