import React from 'react';
import { Panel, Col } from 'react-bootstrap';

class Portfolio extends React.Component{
    render(){
        return(
            <div className="page contrast-theme">
                <div className="tag-contrast">Portfolio</div>
                <div className="content center-page">
                    <Col xs={12} md={12}>
                        <Panel className="main-theme">
                            Wrote a desktop middleware application for a retail management solution called <a href="http://vergeapp.com">Verge</a>
                        </Panel>
                    </Col>
                    <Col xs={12} md={12}>
                        <Panel className="main-theme">
                            Co-developed an event-targeted realtime video and image capturing application with several custom filters known as <a href="http://selfievs.com/">SelfieVS</a>
                        </Panel>
                    </Col>
                    <Col xs={12} md={12}>
                        <Panel className="main-theme">
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