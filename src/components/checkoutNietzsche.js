import React from "react"
import { Link } from "gatsby"

export class CheckoutNietzsche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        price: '$19' //default to show $19
    }
  }

  getGeoInfo = () => { 
      // Check for the cookie set by the Netlify Edge Function
      const cookies = typeof document !== 'undefined' ? document.cookie.split('; ') : [];
      const countryCookie = cookies.find(row => row.startsWith('nf_country='));
      const countryCode = countryCookie ? countryCookie.split('=')[1] : 'US';

      if (countryCode === 'GB') {
        this.setState({price: '£19'})
      } else {
        this.setState({price: '$19'})
      }
    };
  
  componentDidMount(){
    this.getGeoInfo();
  }

    render () {
      return (
        <>
        <a className="button primary full-width top-icon-align" href="https://buy.stripe.com/4gM28raz3fJJ9VN9yG8og0m">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>Get Instant Access for {this.state.price} 
        </a>
        <Link className="button secondary full-width top-icon-align" to="/introduction-to-nietzsche/gift-purchase/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>Purchase as a Gift
        </Link>
        <p className="no-mar-top"><span style={{color: "#ffc536"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span> <span style={{fontSize: "14px"}}>(100+ reviews for our courses)</span></p>
      </>
      )
    }

}