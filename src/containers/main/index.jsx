import React from 'react';
import { TabBar } from 'antd-mobile'
import {
    FirstPage,
    FirstFullPage, Self, SelfFull, NewInfo, NewInfoFull,
    Channel, ChannelFull, Buy, BuyFull,
} from '../../utils/importSvg';
import './main.less';
import PersonalInfo from '../personalInfo/personalInfo'

export default class Main extends React.Component {
    state = {
        selectedTab: 'firstPage',
        hidden: false,
        fullScreen: false,
        tabIcons: [
            { title: '首页', tabName: 'firstPage', icon: FirstPage, activeIcon: FirstFullPage, component: <div>22</div> },
            { title: '频道', tabName: 'channel', icon: Channel, activeIcon: ChannelFull, component: <div>33</div> },
            { title: '动态', tabName: 'activeNews', icon: NewInfo, activeIcon: NewInfoFull, component: <div>44</div> },
            { title: '会员购', tabName: 'buy', icon: Buy, activeIcon: BuyFull, component: <div>11</div> },
            { title: '我的', tabName: 'self', icon: Self, activeIcon: SelfFull, component: PersonalInfo },
        ]
    };
    render() {
        const { tabIcons } = this.state;
        console.log('哈哈')
        const arr = [1]
        console.log(arr[-1])
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#A2A2A2"
                    tintColor="#FB7299"
                    barTintColor="white"
                    hidden={false}
                >
                    {
                        tabIcons.map((item, index) => (
                            <TabBar.Item title={item.title}
                                key={index}
                                icon={<img className='tab-icon-img' src={item.icon} alt='' />}
                                selectedIcon={<img className='tab-icon-img' src={item.activeIcon} alt='' />}
                                selected={this.state.selectedTab === item.tabName}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.tabName,
                                    });
                                }}
                            >
                                <PersonalInfo></PersonalInfo>
                            </TabBar.Item>
                        ))
                    }
                    {/* <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<img className='tab-icon-img' src={FirstPage} alt='' />}
                        selectedIcon={<img className='tab-icon-img' src={FirstFullPage} alt='' />}
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={2}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <p>22</p>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <div>22333</div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <p>3333</p>
                    </TabBar.Item>
                    <TabBar.Item */}
                        {/* icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    > */}
                        {/* <PersonalInfo></PersonalInfo>
                    </TabBar.Item> */}
                </TabBar>
            </div>
        )
    }
}