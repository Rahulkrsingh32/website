import React from 'react';
import About from './About';
import Info from './Info';
import Key from './Key';
import './Appp.css';

class App extends React.Component {
   render() {
        return (
            <div>
            <div className="ui container">
                <div className="ui menu">
                    <div className="header item">
                        <a>
                            <h1 className="ui header green">
                                Agroezy
                            </h1>
                        </a>
                        
                        
                    </div>
                    <a className="item">
                        About
                    </a>
                    <a className="item">
                        Home
                    </a>
                    <a className="item">
                        Contact
                    </a>
                    <div className="right menu">
                    <a className="ui item">
                        <i class="instagram icon large"></i>
                    </a>
                    <a className="ui item">
                        <i class="facebook f icon large"></i>
                    </a>
                    <a className="ui item">
                        <i class="github icon large"></i>
                    </a>
                </div>
            </div>
                <div className="ui container">
                    <div className="ui two column grid">
                        <div className="column">
                            <div className="ui sizer vertical segment">
                                <div className="ui huge header mainheader">
                                    Welcome to Future
                                </div>
                                <h3>Efficiency in Production</h3>

                                <i class="arrow down massive icon"></i>
                                <br />
                                <i class="arrow down massive red icon"></i>
                                
                            </div>
                        </div>
                        <div className="column">
                            <img className="ui massive circular image download" src="https://images.unsplash.com/photo-1580910365203-91ea9115a319?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHZlZ2V0YWJsZSUyMGluJTIwNGt8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <Key />
                <br />
                <br />
               <About />
               <br />
               <br />
               <br />
            </div>
                <Info />
            </div>
            
            
        );
    }
}

export default App;