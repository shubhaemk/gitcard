import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';

class QR extends Component{
    render(){
        return(
            <div>
                <div>
                    <QRCode value={'https://github.com/'+this.props.profile['login']} renderAs='svg' includeMargin={true} bgColor={this.props.theme === 'light' ? '#DFDFDF' : '#9F9F9F'} style={{borderRadius : '9px'}}/>
                </div>
                <p className='' style={{fontFamily : 'Roboto Mono' ,fontSize: '9px', color : this.props.card_text}}>Scan for GitHub Profile</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile : state.profile,
        card_background : state.card_background,
        card_text : state.card_text,
        theme : state.theme
    }
}

export default connect(mapStateToProps)(QR);