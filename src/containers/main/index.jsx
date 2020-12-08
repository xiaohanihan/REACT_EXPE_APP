import React from 'react';
import { TabBar } from 'antd-mobile'
import {
    FirstPage,
    FirstFullPage, Self, SelfFull, NewInfo, NewInfoFull,
    Channel, ChannelFull, Buy, BuyFull,
} from '../../utils/importSvg';
import './main.less';
import PersonalInfo from '../personalInfo/personalInfo';
import { connect } from 'react-redux';
import { userAuthSuccess } from '../../redux/actions'
class Main extends React.Component {
    state = {
        selectedTab: 'firstPage',
        hidden: false,
        fullScreen: false,
        tabIcons: [
            { title: '首页', tabName: 'firstPage', icon: FirstPage, activeIcon: FirstFullPage, component: <div>22</div> },
            { title: '频道', tabName: 'channel', icon: Channel, activeIcon: ChannelFull, component: <div>33</div> },
            { title: '动态', tabName: 'activeNews', icon: NewInfo, activeIcon: NewInfoFull, component: <div>44</div> },
            { title: '会员购', tabName: 'buy', icon: Buy, activeIcon: BuyFull, component: <div>11</div> },
            { title: '我的', tabName: 'self', icon: Self, activeIcon: SelfFull, component: <PersonalInfo></PersonalInfo> },
        ]
    };
    render() {
        const { tabIcons } = this.state;
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
                                {item.component}
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        )
    }
}

export default connect(
    state => state,
    { userAuthSuccess }
)(Main)