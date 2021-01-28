import React from 'react';
import './Appp.css';

class Info extends React.Component {
    render() {
        return(
            <div className="information">
                <div className="ui container">
                <div className="ui grid">
                    <div className="three column row">
                        <div className="column">
                            <h2 className="ui header">
                                Contact
                            </h2>
                            <br />
                            <div className="ui list">
                                <div className="item">
                                    <i className="users icon"></i>
                                    <div class="content">
                                        Agroezy pvt.ltd.<i className="india flag"></i>
                                    </div>
                                </div>

                                <div className="item">
                                    <i className="marker icon content"></i>
                                    <div className="content">
                                        Agroezy, xyz street, PO: bbx,
                                        Bangalore, Karnataka,India
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="mail icon"></i>
                                    <div className="content">
                                        <a className="ui" href="mailto:agroezy@gmail.com">agroezy@gmail.com</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <i className="linkify icon"></i>
                                    <div className="content">
                                        <a href="#">Import link</a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="column">
                            <h3 className="ui header">
                                Stay Connected via
                            </h3>
                            <br />
                            <br />

                            <div className="ui list">
                                <div className="item">
                                    
                                        <div className="content">
                                            <a className="ui button"><i class="facebook f icon"></i></a>
                                            Facebook
                                        </div>
                                </div>
                                <div className="item">
                                
                                        <div className="content">
                                            <a className="ui button"><i class="instagram icon"></i></a>
                                            Instagram
                                        </div>
                                </div>
                                <div className="item">
                                
                                        <div className="content">
                                            <a className="ui button"><i class="github icon"></i></a>
                                            Github
                                        </div>
                                </div>
                                <div className="item">
                                
                                        <div className="content">
                                            <a className="ui button"><i class="youtube icon"></i></a>
                                            Youtube
                                        </div>
                                </div>

                            </div>

                        </div>
                        <div className="column">
                            <h3 className="ui header">
                                Or leave a message here
                            </h3>
                            <form className="ui form">
                                <lable>Full Name</lable>
                                
                                    <div className="field">
                                        <input type="text"  placeholder="fullname" />

                                    </div>
                                    
                                
                                <lable>Email</lable>
                                    <div className="field">
                                        <input type="email"  placeholder="xyz@mail.com"  />
                                    </div>

                                <lable>Subject</lable>
                                    <div className="field">
                                        <input type="text" placeholder="subject" />
                                    </div>
                                <div className="field">
                                    <lable>Text</lable>
                                    <textarea></textarea>
                                </div>
                                
                                
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Info;