import React from 'react';
import Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;


class Footer extends React.Component{
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render(){
        const style = {
            'main':{
                minHeight: this.props.pageHeight,
                backgroundColor: this.props.colours.bg,
                color: this.props.colours.fg
            },
            'tag':{
                backgroundColor: this.props.colours.accent,
                color: this.props.colours.bg
            }
        }
        return(
            <div className="footer" style={style.main}>
                <p><em>Copyright &copy; 2017 <a onClick={this.scrollToTop}>Richard Oyudo</a></em></p>
                <div className="socials">
                    <a href="https://twitter.com/yudori_" ><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/richard-oyudo-97283a101" ><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/yudori/" ><i className="fa fa-github"></i></a>
                    <a href="https://bitbucket.org/yudori/" ><i className="fa fa-bitbucket"></i></a>
                </div>
            </div>
        );
    }
}

export default Footer;