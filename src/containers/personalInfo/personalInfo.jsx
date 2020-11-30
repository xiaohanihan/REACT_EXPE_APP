import React from 'react'
import CameraSvg from '../../assets/svg/camera.svg'
import Scanning from '../../assets/svg/scanning.svg'
import Color from '../../assets/svg/color.svg'
import Moon from '../../assets/svg/moon.svg'
import './personalInfo.less'
import { formAxios } from '../../utils/axios'
import { NavBar  } from 'antd-mobile';
import SpanItem from '../../components/spanItem/spanItem'

// const data = [{
//     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//     id: '2121',
// }, {
//     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//     id: '2122',
// }];

class PersonalInfo extends React.Component {
    state = {
        multiple: false,
        imageFile: '',
        headPath: 'https://i0.hdslb.com/bfs/face/member/noface.jpg@72w_72h_1c.webp',
        isImgShadow: '',
        isImgCamera: ''
    }

    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }

    uploadImage = () => {
        this.imageUpload.click()
        console.log(this.imageUpload)
    }

    handleChange = async (stateName, val) => {
        let file = this.imageUpload.files[0];
        const data = new FormData();
        data.append('image', file);
        const { data: result } = await formAxios.post('/upload', data)
        this.setState({ headPath: result.path, isImgShadow: 'none', isImgCamera: 'none' })
    }

    render() {
        const { headPath, isImgShadow, isImgCamera } = this.state
        return <div>
            <NavBar
                mode="light"
                // icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                leftContent={
                    <SpanItem></SpanItem>
                }
                rightContent={[
                    <img className={'img-icon'} src={Scanning} alt="" />,
                    <span>&emsp;&nbsp;&nbsp;</span>,
                    <img className={'img-icon'} src={Color} alt="" />,
                    <span>&emsp;&nbsp;&nbsp;</span>,
                    <img className={'img-icon'} src={Moon} alt="" />,
                ]}
            ></NavBar>
            <div className="head-img head-img-div" onClick={this.uploadImage}>
                <input type='file' style={{ 'display': 'none' }} ref={e => this.imageUpload = e}
                    onChange={val => this.handleChange('imageFile', val)} name='image' />
                <img className={'head-img'}
                    src={headPath}
                    alt="" />
                <div style={{ display: isImgShadow }} className='head-img head-img-up-div'></div>
                <img style={{ display: isImgCamera }} src={CameraSvg} className="am-icon am-icon-md head-img-up" alt=""></img>
            </div>
        </div>
    }
}

export default PersonalInfo;