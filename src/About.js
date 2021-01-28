import React from 'react';

import './Appp.css';
class About extends React.Component {
    render() {
        return(
            <div className="ui container ">
                 
                    <div className="ui piled segment">
                        <h1 className="ui header about">About</h1>
                        <div className="ui grid">
                            <div className="row">
                                <div className="three wide column"></div>
                                <div className="ten wide column">
                                    <p className="paragraph">
                                        At AGROEZY, we're invested in building the future of farming, and we want to make life of farmers
                                        easy and comfortable as possible, regardless of the size of the productions that they 
                                        manage. Give you full control of your production is our goal, we will do our best to make
                                        your crops or heards as productive as possible.To that end we have developed hi-tech
                                        systems and services that help you connect with every step of your production. With our products, you'll
                                        know exactly what you need to do and when.
                                    </p>
                                </div>
                                <div className="three wide column"></div>
                            </div>
                        
                        </div>

                        <br />
                        
                     </div>

                     <div className="ui grid">
                         
                             <div className="six wide column">
                                <img className="ui massive circular image" src="https://images.unsplash.com/photo-1445282768818-728615cc910a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2V0YWJsZSUyMGFpJTIwaW4lMjA0a3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                             </div>
                             <div className="four wide column">
                                <div className="ui inverted circular segment">
                                    <h2 className="ui inverted header">
                                        <a className="ui item">
                                            Download our App By just a CLICK!
                                        </a>
                                        <div className="sub header"> Click here!</div>
                                    </h2>
                                </div>
                               
                                
                             </div>
                             <div className="six wide column">
                                 <img className="ui massive circular image" src="https://images.unsplash.com/photo-1437081327115-6c0ccc43d1ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZhcm1pbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                             </div>
                         
                     </div>

                
            </div>
        );
    }
}

export default About;