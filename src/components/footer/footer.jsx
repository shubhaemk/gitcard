import React, { Component } from 'react';
import { connect } from 'react-redux';

import './footer.css';

class Footer extends Component {
    render(){
        return(
            <div>
                <footer className='custom-footer is-hidden-mobile' style={{ background : (this.props.theme === 'light' ? 'hsl(0, 0%, 95%)' : 'hsl(0, 0%,5%)') , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)' )}}>
                    <div className="content has-text-centered has-margin-top-20">
                        <div className='columns has-margin-right-10'>
                            <div className='column'>
                                Hire
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
                                Contact
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className='is-hidden-desktop' style={{ background : (this.props.theme === 'light' ? 'hsl(0, 0%, 95%)' : 'hsl(0, 0%,5%)') , color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)' )}}>
                    <div className='columns is-mobile'>
                        <div className='column has-text-centered'>
                            Hire
                        </div>
                        <div className='column has-text-centered'>
                            Contact
                        </div>
                    </div>
                    <div className='columns is-mobile'>
                        <div className='column has-text-centered'>
                            <a href='https://www.facebook.com/shubhmkamath' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }} ><i className="fab fa-facebook-f"></i></a>
                        </div>
                        <div className='column has-text-centered'>
                            <a href='https://www.instagram.com/shubham_kamath/' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }}><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className='columns is-mobile'>
                        <div className='column has-text-centered'>
                            <a href='https://twitter.com/shubham_kamath' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }}><i className="fab fa-twitter"></i></a>
                        </div>
                        <div className='column has-text-centered'>
                            <a href='https://www.linkedin.com/in/shubham-kamath/' target="_blank" rel="noopener noreferrer" style={{ textDecoration : 'none', color : (this.props.theme === 'light' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 90%)')  }}><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme : state.theme
    }
}

export default connect(mapStateToProps)(Footer);