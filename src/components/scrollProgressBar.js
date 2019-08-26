import React from "react"

export class ScrollProgressBar extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    handleScroll = (e) => {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let afterArticle = document.getElementById('footer').offsetHeight + document.getElementById('post-article-height').offsetHeight;
        let height = document.documentElement.scrollHeight - afterArticle;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    };
    render() {
        return (
            <div className="progress-container">
                <div id="progress-bar"></div>
            </div>
        )
    }
}