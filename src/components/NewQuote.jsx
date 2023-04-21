import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import quotes from './QuotesDB';
import twitter from './twitter.png'
import { lightGreen, yellow } from '@mui/material/colors';

export default class Quotes extends Component {
    constructor(props) {
        super(props);
        //let colour = [ '#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
        let randomInt = Math.floor(Math.random() * quotes.length);
        this.state = {
            quote: quotes[randomInt].quote,
            author: quotes[randomInt].author
        }

        this.randomQuote = this.randomQuote.bind(this);
    }

    randomQuote() {
        let randomInt = Math.floor(Math.random() * quotes.length);
        this.setState({quote: quotes[randomInt].quote, author: quotes[randomInt].author})
    };
    render() {
        return (
            <div>
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
            <button id="new-quote" onClick={this.randomQuote}>New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank"><img src="https://github.com/CamilaBodack/random-quote-machine/blob/main/src/components/twitter.png?raw=true" alt="Twitter icon" width="30" height="30" />Twitter</a>
            <a id="tweet-quote" href="https://www.instagram.com/accounts/login/" target="_blank"><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1681963834~exp=1681964434~hmac=5c824ceb9a8b2c32b0df531f76d1605033f3440c59bd56b4f5eaeaea5fcb5732" alt="Instagram icon" width="30" height="30" />Instagram</a>
        </div>
        )
    }
}