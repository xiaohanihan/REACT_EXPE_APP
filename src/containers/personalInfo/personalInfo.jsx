import React from 'react'
import { CameraSvg, Scanning, Color, Moon, DownloadSvg, History, Mark, Play } from '../../utils/importSvg'
import './personalInfo.less'
import { baseAxios, formAxios } from '../../utils/axios'
import { Icon, Tag } from 'antd-mobile';
import SpanItem from '../../components/spanItem/spanItem';
import '../../assets/index.less'
import { connect } from 'react-redux';
import { userAuthSuccess } from '../../redux/actions'

class PersonalInfo extends React.Component {
    state = {
        multiple: false,
        imageFile: '',
        isImgShadow: this.props.user.headUrl?'none':'',
        creatCenterTip: [
            { name: '离线缓存', icon: DownloadSvg },
            { name: '历史记录', icon: History },
            { name: '我的收藏', icon: Mark },
            { name: '稍后再看', icon: Play },
        ]
    }

    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }

    uploadImage = () => {
        this.imageUpload.click()
    }

    handleChange = async (stateName, val) => {
        let file = this.imageUpload.files[0];
        const data = new FormData();
        data.append('image', file);
        const result = await formAxios.post('/api/upload', data)
        if (result.status === 200) {
          debugger
            this.props.user['headUrl'] = result.data.path;
            this.props.userAuthSuccess(this.props.user);
            // 上传成功后更新用户的头像信息
            await baseAxios.put(`/users/${this.props.user._id}`, {
                headUrl: result.data.path
            })
        }
    }

    render() {
        const { isImgShadow, creatCenterTip } = this.state
        let { nickName, headUrl } = this.props.user;
        headUrl = headUrl?headUrl:'https://i0.hdslb.com/bfs/face/member/noface.jpg@72w_72h_1c.webp';
        return <div>
            <div className="top-nav-div">
                <SpanItem rightContent={<Icon type='right' />}>挑战转正答题</SpanItem>
                <div>
                    <img className={'img-icon'} src={Scanning} alt="" />
                    <span>&emsp;&nbsp;&nbsp;</span>
                    <img className={'img-icon'} src={Color} alt="" />
                    <span>&emsp;&nbsp;&nbsp;</span>
                    <img className={'img-icon'} src={Moon} alt="" />
                </div>
            </div>
            <div className='info-out-div'>
                <div className="head-img head-img-div" onClick={this.uploadImage}>
                    <input type='file' style={{ 'display': 'none' }} ref={e => this.imageUpload = e}
                        onChange={val => this.handleChange('imageFile', val)} name='image' />
                    <img className={'head-img'}
                        src={headUrl}
                        alt="" />
                    <div style={{ display: isImgShadow }} className='head-img head-img-up-div'></div>
                    <img style={{ display: isImgShadow }} src={CameraSvg} className="am-icon am-icon-md head-img-up" alt=""></img>
                </div>
                <div className='info-text-div'>
                    <div className='info-one-div'>
                        <span className='info-name-span'>{nickName}</span>
                        &nbsp;&nbsp;
                        <span className='dep-color'>Lv0</span>
                    </div>
                    <Tag selected className='info-one-div info-vip-btn'>注册会员</Tag>
                    <div className='info-one-div'>
                        <span className='dep-color'>B币：0</span>
                        &nbsp;&nbsp;
                        <span className='dep-color'>硬币：0</span>
                    </div>
                </div>
                <div className='info-space-arrow dep-color'>
                    空间 <Icon type='right' />
                </div>
            </div>
            <div className='ship-div'>
                <div>
                    <div className='ship-number'>0</div>
                    <div className='ship-text dep-color'>动态</div>
                </div>
                <div>
                    <div className='ship-number'>5</div>
                    <div className='ship-text dep-color'>关注</div>
                </div>
                <div>
                    <div className='ship-number'>0</div>
                    <div className='ship-text dep-color'>粉丝</div>
                </div>
            </div>
            {/* 创作中心 */}
            <div className='display-div'>
                {creatCenterTip.map(item => (
                    <div className='display-column-div' key={item.name}>
                        <img className={'down-icon'} src={item.icon} alt="" />
                        <span className='span-tag'>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className='info-title'>创作中心</div>

        </div>
    }
}

// export default PersonalInfo;
export default connect(
    state => state,
    { userAuthSuccess }
)(PersonalInfo)