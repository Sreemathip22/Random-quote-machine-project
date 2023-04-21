import React , { Fragment } from 'react'
import NewQuote from './NewQuote'
import Header from './Header'
import Footer from './footer'

export default function() {
    return <Fragment>
    <center><Header/></center>
        <div id="quote-box">
            <NewQuote />
        </div>
        <center><Footer/></center>
    </Fragment>
}