import React, {Component} from 'react'
import {Col, Layout, Row} from 'antd'
import Notification from './notification'
import UserInfo from './user-info'
import PropTypes from 'prop-types'
import '../../../style/index.css'
import '../../../style/tws-layout.css'

const {Content, Footer} = Layout

class TwsLayout extends Component {

  render () {
    const currentYear = new Date().getFullYear()
    return (
      <Layout>
        <div className='App-header' style={{lineHeight: '36px'}}>
          <Row>
            <Col span={6}>
                <a href="https://school.thoughtworks.cn/learn/home/index.html#/app-center">
                    <img src={this.props.logo} className='App-logo' alt='logo'/>
                </a>
            </Col>
            <Col span={11}/>
            <Col span={3}>
              <UserInfo userName={this.props.userName}
                        logoutUrl={this.props.logoutUrl}
                        userCenterHomeUrl={this.props.userCenterHomeUrl}
              />
            </Col>
            <Col span={1} style={{marginTop:'17px',textAlign:'right'}}>
                  <Notification
                    moreUrl={this.props.moreUrl}
                    lang={this.props.lang}
                    notifications={this.props.notifications}
                    handleOnClick={this.props.handleOnClick}
                  />
            </Col>
            <Col span={3}>
              <div style={{float: 'right', marginTop: '20px'}}>
                  {this.props.languageButtons}
              </div>
            </Col>
          </Row>
        </div>
        <Content style={{padding: '0 50px'}}>
          {this.props.twsBreadcrumb}
          <Layout style={{padding: '24px 0', background: '#fff'}}>
            <Content style={{padding: '0 24px', minHeight: 280}}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>
            ThoughtWorks Learning Platform © {currentYear}
        </Footer>
      </Layout>
    )
  }
}


TwsLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  logoutUrl: PropTypes.string.isRequired,
  userCenterHomeUrl: PropTypes.string.isRequired,
  notification: PropTypes.any,
  twsBreadcrumb: PropTypes.any,
  moreUrl: PropTypes.string.isRequired,
  messageUrl: PropTypes.string.isRequired,
  // onChange: PropTypes.func
}
export default TwsLayout
