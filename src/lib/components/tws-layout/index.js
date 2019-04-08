import React, {Component} from 'react'
import {Col, Layout, Row} from 'antd'
import Notification from './notification'
import UserInfo from './user-info'
import PropTypes from 'prop-types'
import '../../../style/index.css'
import '../../../style/tws-layout.css'
import OrganizationSelectBox from "../tws-organization/tws-organization-select-box";

const {Content, Footer} = Layout

class TwsLayout extends Component {

  render() {
    const currentYear = new Date().getFullYear()
    const {user, organizations, logo, logoutUrl, userCenterHomeUrl, moreUrl, lang, notifications} = this.props
    return (
      <Layout>
        <Row type='flex' align='middle'  className='App-header'>
          <Col span={18}>
            <a href="https://school.thoughtworks.cn/learn/home/index.html#/app-center">
              <img src={logo} className='App-logo' alt='logo'/>
            </a>
          </Col>
          <Col>
            <UserInfo userName={user.userName}
                      logoutUrl={logoutUrl}
                      userCenterHomeUrl={userCenterHomeUrl}
            />
          </Col>
          <Col style={{margin : ' 0 20px 0 10px'}}>
            <Notification
              moreUrl={moreUrl}
              lang={lang}
              notifications={notifications}
              handleOnClick={this.props.handleOnClick}
            />
          </Col>
          <Col>
            <OrganizationSelectBox organizations={organizations}
                                   user={user}
                                   updateUserCurrentOrganizationId={this.props.updateUserCurrentOrganizationId}/>
          </Col>
        </Row>
        <Content style={{padding: '0 30px'}}>
          {this.props.twsBreadcrumb}
          <Layout style={{padding: '24px', background: '#fff'}}>
            <Content style={{minHeight: '500px'}}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          ThoughtWorks Learning Platform © {currentYear}
          {this.props.languageButtons}
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
