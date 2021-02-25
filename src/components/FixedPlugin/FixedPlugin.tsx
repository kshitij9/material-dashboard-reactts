import React, { Component } from 'react';
import classnames from 'classnames';

import imagine1 from '../../assets/img/sidebar-1.jpg';
// import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from 'assets/img/sidebar-2.jpg';
import imagine3 from 'assets/img/sidebar-3.jpg';
import imagine4 from 'assets/img/sidebar-4.jpg';

import Button from '../CustomButtons/Button';

interface Props {
  bgImage: any;
  rtlActive?: any;
  fixedClasses: any;
  bgColor: any;
  handleFixedClick: any;
  handleColorClick: any;
  handleImageClick: any;
}

interface State {
  classes: string;
  bg_checked: boolean;
  bgImage: any;
  themes: any;
  currentTheme: string;
  currentTextSize: string;
  currentTextSpacing: string;
}


class FixedPlugin extends Component<Props, State> {
  themes: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      classes: 'dropdown show',
      bg_checked: true,
      bgImage: this.props.bgImage,
      themes: {
        inverted: {
          'filter': 'invert(100%)'
        },
        normal: {
          'filter': 'none',
        },
        desaturate: {
          'filter': 'saturate(0%)'
        },        
        normalTextSize: {
          'font-size': '14px'
        },
        mediumTextSize: {
          'font-size': '20px'
        },
        largeTextSize: {
          'font-size': '24px'
        },
        normalTextSpacing: {
          'letter-spacing': 'normal'
        },
        mediumTextSpacing: {
          'letter-spacing': '1px'
        },
        largeTextSpacing: {
          'letter-spacing': '2px'
        }
      },
      currentTheme: 'normal',
      currentTextSize: 'normalTextSize',
      currentTextSpacing: 'normalTextSpacing'
    };
    this.themes = {

    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleFixedClick();
  }

  setTheme = (prop: string) => {
    const theme = this.state.themes[prop];
    Object.keys(theme).forEach((key) => {
      const cssKey = `${key}`;
      const cssValue = theme[key];
      document.body.style.setProperty(cssKey, cssValue);
    })
  }

  toggleTextSize = () => {
    if(this.state.currentTextSize === 'normalTextSize') {
      this.setState({
        currentTextSize: 'mediumTextSize'
      });
    } else if(this.state.currentTextSize === 'mediumTextSize'){
      this.setState({
        currentTextSize: 'largeTextSize'
      });
    }
    else {
      this.setState({
        currentTextSize: 'normalTextSize'
      });
    }
    this.setTheme(this.state.currentTextSize);
  }

  toggleTheme = () => {
    if(this.state.currentTheme === 'normal') {
      this.setState({
        currentTheme: 'desaturate'
      });
    } else if(this.state.currentTheme === 'desaturate'){
      this.setState({
        currentTheme: 'inverted'
      });
    }
    else {
      this.setState({
        currentTheme: 'normal'
      });
    }
    this.setTheme(this.state.currentTheme);
  }

  toggleTextSpacing = () => {
    if(this.state.currentTextSpacing === 'normalTextSpacing') {
      this.setState({
        currentTextSpacing: 'mediumTextSpacing'
      });
    } else if(this.state.currentTextSpacing === 'mediumTextSpacing'){
      this.setState({
        currentTextSpacing: 'largeTextSpacing'
      });
    }
    else {
      this.setState({
        currentTextSpacing: 'normalTextSpacing'
      });
    }
    this.setTheme(this.state.currentTextSpacing);
  }

  render() {
    return (
      <div
        className={classnames('fixed-plugin', {
          'rtl-fixed-plugin': this.props.rtlActive
        })}
      >
        <div id="fixedPluginClasses" className={this.props.fixedClasses}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">SIDEBAR FILTERS</li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <div>
                  <span
                    className={
                      this.props.bgColor === 'purple'
                        ? 'badge filter badge-purple active'
                        : 'badge filter badge-purple'
                    }
                    data-color="purple"
                    onClick={() => {
                      this.props.handleColorClick('purple');
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === 'blue'
                        ? 'badge filter badge-blue active'
                        : 'badge filter badge-blue'
                    }
                    data-color="blue"
                    onClick={() => {
                      this.props.handleColorClick('blue');
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === 'green'
                        ? 'badge filter badge-green active'
                        : 'badge filter badge-green'
                    }
                    data-color="green"
                    onClick={() => {
                      this.props.handleColorClick('green');
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === 'red'
                        ? 'badge filter badge-red active'
                        : 'badge filter badge-red'
                    }
                    data-color="red"
                    onClick={() => {
                      this.props.handleColorClick('red');
                    }}
                  />
                  <span
                    className={
                      this.props.bgColor === 'orange'
                        ? 'badge filter badge-orange active'
                        : 'badge filter badge-orange'
                    }
                    data-color="orange"
                    onClick={() => {
                      this.props.handleColorClick('orange');
                    }}
                  />
                </div>
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className={this.state.bgImage === imagine1 ? 'active' : ''}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine1 });
                  this.props.handleImageClick(imagine1);
                  this.toggleTheme();
                }}
              >
                <img src={imagine1} alt="..." />
              </a>
            </li>
            <li className={this.state.bgImage === imagine2 ? 'active' : ''}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine2 });
                  this.props.handleImageClick(imagine2);
                  this.toggleTextSize();
                }}
              >
                <img src={imagine2} alt="..." />
              </a>
            </li>
            <li className={this.state.bgImage === imagine3 ? 'active' : ''}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine3 });
                  this.props.handleImageClick(imagine3);
                  this.toggleTextSpacing();
                }}
              >
                <img src={imagine3} alt="..." />
              </a>
            </li>
            <li className={this.state.bgImage === imagine4 ? 'active' : ''}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  this.setState({ bgImage: imagine4 });
                  this.props.handleImageClick(imagine4);
                }}
              >
                <img src={imagine4} alt="..." />
              </a>
            </li>

            <li className="button-container">
              <div className="button-container">
                <Button
                  color="success"
                  href="https://www.creative-tim.com/product/material-dashboard-react"
                  target="_blank"
                  fullWidth={true}
                >
                  Download free!
                </Button>
              </div>
            </li>
            <li className="button-container">
              <div className="button-container">
                <Button
                  color="warning"
                  href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                  target="_blank"
                  fullWidth={true}
                >
                  Get PRO version
                </Button>
              </div>
            </li>
            <li className="button-container">
              <Button
                color="info"
                fullWidth={true}
                href="https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial"
                target="_blank"
              >
                Documentation
              </Button>
            </li>
            <li className="adjustments-line" />
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
