import React from "react"
import { Link } from "gatsby"


export class NavigationSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClosed: true,
            class: '',
            fontColor: ''
        };
    }
    
    static defaultProps = {
        bg: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    //on click of menu trigger
    toggleMenu = (e) => {
        //toggle menu state
        this.setState({ isClosed : !this.state.isClosed })
        if (this.state.isClosed) {
            this.setState({fontColor: 'dark'})
        } else {
            this.setState({fontColor: ''})
        }
    }
    
    render() {
        return (
            <div>
                <div id="nav" className={this.state.class + ' ' + this.props.bg + ' ' + this.state.fontColor} style={{position: "absolute"}}>
                    <div className="page-center">
                        <Link className="logo" to="/"><svg id="pb-logo" className={this.state.class} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs><linearGradient id="a" x1="90.9" y1="409.1" x2="409.1" y2="90.9" gradientUnits="userSpaceOnUse"><stop offset="0.23" stopColor="#1aa9ff"/><stop offset="0.31" stopColor="#22acff"/><stop offset="0.44" stopColor="#37b4ff"/><stop offset="0.59" stopColor="#5ac1ff"/><stop offset="0.72" stopColor="#7cceff"/></linearGradient><linearGradient id="b" x1="131.91" y1="450.27" x2="377.59" y2="204.59" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#030810"/><stop offset="0.29" stopColor="#030a13"/><stop offset="0.5" stopColor="#02101c"/><stop offset="0.69" stopColor="#001a2c"/><stop offset="0.72" stopColor="#001d30"/></linearGradient></defs><circle cx="250" cy="250" r="250" fill="#fff"/><circle cx="250" cy="250" r="225" fill="url(#a)"/><path d="M-121.5,179.5" stroke="#000" strokeMiterlimit="10"/><path d="M27.12,281" stroke="#000" strokeMiterlimit="10"/><path d="M453,343"/><path d="M-516.5,142.5" stroke="#000" strokeMiterlimit="10"/><path d="M38,325" fill="#fff"/><polygon points="27 316 108 219.58 148 284 250 103 363 247.69 391 197.72 475 299 27 316" fill="#fff"/><path d="M34,312l74-61.18L148,284,250,148.16,363,251l28-26,79,72c-.91,3.91-1.9,7.92-3,12-1.88,7-2.9,10.68-5,17-.08,0-1.16,3.07-1.24,3.11-32,85.32-114.27,146.05-210.76,146.05-98,0-181.41-62.69-212.25-150.16L34,312" fill="url(#b)"/><path d="M103.5,134.51c.26.33,4.76,5.92,12,5.14a14,14,0,0,0,10.29-6.86" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/><path d="M134.83,153.38c.26.33,4.76,5.92,12,5.14,6.75-.72,10-6.33,10.29-6.86" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/><path d="M159.7,124.22c.26.33,4.76,5.91,12,5.14A14,14,0,0,0,182,122.5" fill="none" stroke="#001d30" strokeMiterlimit="10" strokeWidth="6"/></svg>
                        <h3 className={this.state.class}>Philosophy Break<span className={this.state.class}>Your home for learning about philosophy</span></h3>
                        </Link>
                        <div className="flex-middle">
                            <div id="desktop-links" style={{marginRight: "12px"}}>
                                {/*<!--new sign in link for simple nav-->*/}
                                <a target="_blank" rel="noopener noreferrer" href="https://academy.philosophybreak.com/">Sign In</a>
                            </div>
                            <div id="menu-trigger" onClick={this.toggleMenu} className={this.state.class}>
                                <span>MENU</span>
                                <div id="menu-trigger-container" className={(this.state.isClosed) ? '' : 'change'} >
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="menu" className={(this.state.isClosed) ? '' : 'show'}>
                    <div className="page-center">
                        <div className="li primary one">{/*<!--get started-->*/}
                            <Link to="/courses/">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg>
                                    <h3>Courses</h3>
                                </div>
                                <p className="small-grey-font">Introductory philosophy courses distilling the subject's greatest wisdom.</p>
                            </Link>
                        </div>
                        <div className="li primary two">{/*<!--reading list-->*/}
                            <Link to="/reading-lists/">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M48.336,7.54c-0.701,0-1.359,0.007-2.018,0.024V5.326h-0.734c-14.262,0-19.043,3.411-20.585,5.252 c-1.542-1.841-6.323-5.252-20.585-5.252H3.68v2.237C3.022,7.545,2.364,7.54,1.664,7.54H0V39.89h1.664 c17.595,0,21.186,4.035,21.698,4.784h3.302c0.557-0.784,4.218-4.784,21.673-4.784H50V7.54H48.336z M23.899,38.431 c-2.457-1.812-7.611-3.914-18.383-4.054V7.175c15.087,0.194,18.001,4.327,18.383,5V38.431z M44.484,34.377 c-10.772,0.14-15.926,2.24-18.383,4.054V12.184c0.416-0.737,3.412-4.814,18.383-5.007V34.377z"/></svg>
                                    <h3>Reading Lists</h3>
                                </div>
                                <p className="small-grey-font">Curated reading lists on philosophy's best and most important works.</p>
                            </Link>
                        </div>
                        <div className="li primary three">{/*<!--take a break-->*/}
                            <Link to="/articles/">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                    <h3>Latest Breaks</h3>
                                </div>
                                <p className="small-grey-font">Bite-size philosophy articles designed to stimulate your brain.</p>
                            </Link>
                        </div>

                        {/*special width for 4 items desktop (sign in has changed stuff)*/}
                        <div class="four-width">
                            <div className="li">{/*<!--about us-->*/}
                                <Link to="/about/">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"/></svg>
                                        <h5>About Us</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="li">{/*<!--sign in-->*/}
                                <a target="_blank" rel="noopener noreferrer" href="https://academy.philosophybreak.com/">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg>
                                        <h5>Sign In</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="li">{/*<!--instagram-->*/}
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/philosophybreak/">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                        <h5>Instagram</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="li">{/*<!--twitter-->*/}
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/philosophybreak">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                        <h5>Twitter</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}