import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as htmlToImage from 'html-to-image';
import  download from 'downloadjs';

import { gitcard } from '../../store/action';

class Customise extends Component {

    toggleTheme = () => {
        if(this.props.theme === 'light'){
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
                Customise?
                <button onClick={() => this.downloadCard()}>Download</button>
                <button onClick={() => this.toggleTheme()}>Theme</button>
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