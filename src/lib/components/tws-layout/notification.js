import React, {Component} from 'react'
import {Popover, Button, Icon, Menu, Dropdown, Badge} from 'antd'

let messageStyle = {
    borderBottom: "1px solid #e9e9e9",
    marginTop: '5px'
}
let moreStyle = {
    marginTop: '10px'
}

class TwsUserInfo extends Component {
    state = {
        clicked: false,
        hovered: false,
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    }

    handleHoverChange = (visible) => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    }
    handleOnClick = (notificationId) => {
        this.props.handleOnClick(notificationId)
    }
    render() {
        const notifications = this.props.notifications
        const hoverContent = notifications.length === 0 ?
            (<div style={{width: '400px'}}>
                <p style={messageStyle}>
                    <div>暂无最新消息</div>
                </p>
                <p style={moreStyle}>
                    <a href={this.props.moreUrl}>
                        查看全部
                    </a>
                </p>
            </div>): (
            <div style={{width: '400px'}}>
                {
                    notifications.slice(0, 5).map(item =>
                        <p style={messageStyle}>
                            <a href={item.url} onClick={this.handleOnClick.bind(this, item.id)}>
                                <div>{item.message}</div>
                                <div style={{textAlign: 'Right'}}>{item.createTime}</div>
                            </a>
                        </p>
                    )
                }
                <p style={moreStyle}>
                    <a href={this.props.moreUrl}>
                        查看全部
                    </a>
                </p>
            </div>
        );
        return (
            <Popover
                content={hoverContent}
                title="最新消息"
                trigger="hover"
                placement="bottom"
                visible={this.state.hovered}
                onVisibleChange={this.handleHoverChange}
                arrowPointAtCenter
            >
                <Badge count={notifications.length}>
                    <Icon type="bell" style={{fontSize: '22px', color: '#FFFFFF'}}/>
                </Badge>
            </Popover>)
    }
}

export default TwsUserInfo
