import React, { Component } from 'react';
import classnames from 'classnames';
import ComplexButtons from '../ComplexButtons/ComplexButtons';
import logo from '../../assets/img/cursor.png';

interface Props{
  // bgImage: any;
  rtlActive?: any;
  fixedClasses: any;
  // bgColor: any;
  handleFixedClick: any;
  // handleColorClick: any;
  // handleImageClick: any;
  currentTheme?: any;
  currentTextSize?: any;
  currentTextSpacing?: any;
  currentTextSizeTitleIndex?: any;
  currentTextSpacingTitleIndex?: any;
  currentThemeTitleIndex?: any;
  currentCursorTitleIndex?: any;
  currentCursorSize?: any;
  currentFont: string;
  currentFontTitleIndex: number;
}

interface State {
  classes: string;
  themes: any;
  currentTheme: string;
  currentTextSize: string;
  currentTextSpacing: string;
  currentTextSizeTitleIndex: number;
  currentTextSpacingTitleIndex: number;
  currentCursorSize: string;
  currentThemeTitleIndex: number;
  currentCursorTitleIndex: number;
  images: Array<any>;
  currentFont: string;
  currentFontTitleIndex: number;
}

class FixedPlugin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      classes: 'dropdown show',
      // bg_checked: true,
      // bgImage: this.props.bgImage,
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
          'font-size': 'inherit'
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
        },
        largerCursor: {
          'cursor':`url(${logo}), auto`
        },
        normalCursor: {
          'cursor': 'default'
        },
        dyslexicFont: {
          'font-family': 'Verdana'
        },
        normalFont: {
          'font-family': '"Roboto", "Helvetica", "Arial", sans-serif'
        }
      },
      currentTheme: this.props.currentTheme|| 'normal',
      currentTextSize: this.props.currentTextSize|| 'normalTextSize' ,
      currentTextSpacing: this.props.currentTextSpacing|| 'normalTextSpacing',
      currentTextSizeTitleIndex: this.props.currentTextSizeTitleIndex|| 0,
      currentTextSpacingTitleIndex: this.props.currentTextSpacingTitleIndex|| 0,
      currentThemeTitleIndex: this.props.currentThemeTitleIndex|| 0,
      currentCursorTitleIndex: this.props.currentCursorTitleIndex|| 0,
      currentCursorSize: this.props.currentCursorSize|| 0,
      currentFont: this.props.currentFont || 'normalFont',
      currentFontTitleIndex: this.props.currentFontTitleIndex || 0,
      images: [
        {
          url: '/static/images/grid-list/breakfast.jpg',
          title: ['Normal Spacing','Medium Spacing','Large Spacing'],
          type: 'TEXT_SPACING',
          width: '98%',
        },
        {
          url: '/static/images/grid-list/burgers.jpg',
          title: ['Normal Size','Medium Size','Large Size'],
          type: 'FONT_SIZE',
          width: '98%',
        },
        {
          url: '/static/images/grid-list/camera.jpg',
          title: ['Normal', 'Invert Colors', 'Desaturate'],
          type: 'THEME',
          width: '98%',
        },
        {
          url: '',
          title: ['Normal Pointer', 'Large Pointer'],
          type: 'POINTER',
          width: '98%'
        },
        {
          url: '',
          title: ['Normal Font', 'Dyslexia Font'],
          type: 'FONT',
          width: '98%'
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.setTheme(this.state.currentTextSize);
    this.setTheme(this.state.currentCursorSize);
    this.setTheme(this.state.currentTheme);
    this.setTheme(this.state.currentTextSpacing);
    this.setTheme(this.state.currentFont);
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
        currentTextSize: 'mediumTextSize',
        currentTextSizeTitleIndex: 1
      },() => {this.setTheme(this.state.currentTextSize)});
    } else if(this.state.currentTextSize === 'mediumTextSize'){
      this.setState({
        currentTextSize: 'largeTextSize',
        currentTextSizeTitleIndex: 2
      },() => {this.setTheme(this.state.currentTextSize)});
    }
    else {
      this.setState({
        currentTextSize: 'normalTextSize',
        currentTextSizeTitleIndex: 0
      },() => {this.setTheme(this.state.currentTextSize)});
    }
  }

  toggleCursorSize = () => {
    if(this.state.currentCursorSize === 'normalCursor') {
      this.setState({
        currentCursorSize: 'largerCursor',
        currentCursorTitleIndex: 1
      },() => {this.setTheme(this.state.currentCursorSize)});
    } else {
      this.setState({
        currentCursorSize: 'normalCursor',
        currentCursorTitleIndex: 0
      },() => {this.setTheme(this.state.currentCursorSize)});
    }
  }

  toggleTheme = () => {
    if(this.state.currentTheme === 'normal') {
      this.setState({
        currentTheme: 'desaturate',
        currentThemeTitleIndex: 2
      },() => {this.setTheme(this.state.currentTheme)});
    } else if(this.state.currentTheme === 'desaturate'){
      this.setState({
        currentTheme: 'inverted',
        currentThemeTitleIndex: 1
      },() => {this.setTheme(this.state.currentTheme)});
    }
    else {
      this.setState({
        currentTheme: 'normal',
        currentThemeTitleIndex: 0
      },() => {this.setTheme(this.state.currentTheme)});
    }
  }

  toggleFont = () => {
    if(this.state.currentFont === 'normalFont') {
      this.setState({
        currentFont: 'dyslexicFont',
        currentFontTitleIndex: 1
      },() => {this.setTheme(this.state.currentFont)});
    } 
    else {
      this.setState({
        currentFont: 'normalFont',
        currentFontTitleIndex: 0
      },() => {this.setTheme(this.state.currentFont)});
    }
  }

  toggleTextSpacing = () => {
    if(this.state.currentTextSpacing === 'normalTextSpacing') {
      this.setState({
        currentTextSpacing: 'mediumTextSpacing',
        currentTextSpacingTitleIndex: 1
      },() => {this.setTheme(this.state.currentTextSpacing)});
    } else if(this.state.currentTextSpacing === 'mediumTextSpacing'){
      this.setState({
        currentTextSpacing: 'largeTextSpacing',
        currentTextSpacingTitleIndex: 2
      },() => {this.setTheme(this.state.currentTextSpacing)});
    }
    else {
      this.setState({
        currentTextSpacing: 'normalTextSpacing',
        currentTextSpacingTitleIndex: 0
      },() => {this.setTheme(this.state.currentTextSpacing)});
    }
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
          <div className="dropdown-menu">
            <div className="header-title">Widgets</div>
            <div className="complex-button">
              <ComplexButtons image={this.state.images[1]} titleIndex={this.state.currentTextSizeTitleIndex} handleClick={this.toggleTextSize} />
              <ComplexButtons image={this.state.images[0]} titleIndex={this.state.currentTextSpacingTitleIndex} handleClick={this.toggleTextSpacing} />
              <ComplexButtons image={this.state.images[2]} titleIndex={this.state.currentThemeTitleIndex} handleClick={this.toggleTheme} /> 
              <ComplexButtons image={this.state.images[3]} titleIndex={this.state.currentCursorTitleIndex} handleClick={this.toggleCursorSize} /> 
              <ComplexButtons image={this.state.images[4]} titleIndex={this.state.currentFontTitleIndex} handleClick={this.toggleFont} /> 

              {/* {this.state.images.map((image) => {
                switch(image.type) {
                  case 'FONT_SIZE':
                    
                  break;
                  case 'TEXT_SPACING':
                    <ComplexButtons image={image} handleClick={this.toggleTextSpacing} />
                  break; 
                  case 'THEME':
                    <ComplexButtons image={image} handleClick={this.toggleTheme} />   
                }
              })} */}
            </div>
              <div className="adjustments-line" />
          </div>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
