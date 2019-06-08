import React, { Component } from 'react';
import { connect } from 'react-redux';

import './footer.css';

class Footer extends Component {
    render(){
        return(
            <footer className='custom-footer' style={{ background : (this.props.theme === 'light' ? 'hsl(0, 0%, 95%)' : 'hsl(0, 0%,5%)') , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)' )}}>
                <div className="content has-text-centered has-margin-top-20">
                    <div className='columns is-mobile has-margin-right-10'>
                        <div className='column'>
                            Hire Me
                        </div>
                        <div className='column'>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                        <div className='column'>
                            <a href='https://www.facebook.com/shubhmkamath' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }} ><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className='column'>
                            <a href='https://www.instagram.com/shubham_kamath/' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }}><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className='column'>
                            <a href='https://twitter.com/shubham_kamath' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }}><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className='column'>
                            <a href='https://www.linkedin.com/in/shubham-kamath/' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }}><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className='column'>
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        <div className='column'>
                            Contact Me
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme : state.theme
    }
}

export default connect(mapStateToProps)(Footer);