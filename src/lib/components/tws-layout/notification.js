import React, {Component} from 'react'
import {Badge, Icon, Popover} from 'antd'

class Notification extends Component {
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
    handleOnClick = (item) => {
        this.props.handleOnClick(item.id,()=>{
             window.location.href = item.url
        })
    }

    render() {
        const notifications = this.props.notifications || []
        const moreUrl = this.props.moreUrl
        const hoverContent = (<div style={{width: '400px'}}>
                {notifications.length === 0 ?
                    <p className= 'messageStyle'>
                        <div>暂无最新消息</div>
                    </p> :
                    notifications.slice(0, 5).map(item =>
                        <p className='messageStyle'>
                            <a href='javascript:void(0)' onClick={this.handleOnClick.bind(this, item)}>
                                <div>{item.message}</div>
                                <div style={{textAlign: 'Right'}}>{item.createTime}</div>
                            </a>
                        </p>
                    )
                }
                <p className='moreStyle'>
                    <a href={moreUrl}>
                        查看全部
                    </a>
                </p>
            </div>
        )
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

export default Notification
