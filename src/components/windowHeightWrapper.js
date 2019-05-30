import React from "react"

export class WindowHeightWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: '100%', height: '100vh' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className={this.props.className} style={{height: this.state.height}}>
        {this.props.children}
      </div>
    )
  }
}