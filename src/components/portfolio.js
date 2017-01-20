import React from 'react';
import { Panel, Col } from 'react-bootstrap';

class Portfolio extends React.Component{
    render(){
        const style = {
            'main':{
                minHeight: this.props.pageHeight,
                backgroundColor: this.props.colours.bg,
                color: this.props.colours.fg
            },
            'tag':{
                backgroundColor: this.props.colours.fg,
                color: this.props.colours.accent
            }
        }
        return(
            <div id='portfolio' className="page" style={style.main}>
                <div className="tag" style={style.tag}>Portfolio</div>
                <div className="content">
                    <Col xs={12} md={12}>
                        <Panel className="main-theme" style={{color:this.props.colours.accent}}>
                            Wrote a desktop middleware application to sync POS data for a retail management solution called <a href="http://vergeapp.com">Verge</a>
                        </Panel>
                    </Col>
                    <Col xs={12} md={12}>
                        <Panel className="main-theme" style={{color:this.props.colours.accent}}>
                            Co-developed an event-targeted realtime video and image capturing application with several custom filters known as <a href="http://selfievs.com/">SelfieVS</a>
                        </Panel>
                    </Col>
                    <Col xs={12} md={12}>
                        <Panel className="main-theme" style={{color:this.props.colours.accent}}>
                            Wrote a <a href="https://bitbucket.org/yudori/videostab">Video Stabilizer</a> application that harnesses image processing techniques to remove shaky motion in videos
                        </Panel>
                    </Col>
                    <Col xs={12} md={12}>
                        <Panel className="main-theme" style={{color:this.props.colours.accent}}>
                            Co-developing a vehicle diagnostic and repair scheduling mobile application known as <a href="https://play.google.com/store/apps/details?id=com.milefriend.mobileapp&hl=en">MileFriend</a>
                        </Panel>
                    </Col>
                    <Col xs={12} md={12}>
                        Other worthy mentions can be found on my <a href="https://github.com/yudori">Github</a> and <a href="https://bitbucket.org/yudori">Bitbucket</a> pages
                    </Col>
                </div>
            </div>
        );
    }
}

export default Portfolio;