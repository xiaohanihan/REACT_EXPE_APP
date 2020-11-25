import React from 'react'
import { ImagePicker } from 'antd-mobile'

// const data = [{
//     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
//     id: '2121',
// }, {
//     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
//     id: '2122',
// }];

class PersonalInfo extends React.Component {
    state = {
        files: [],
        multiple: false,
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

    render() {
        const { files } = this.state;
        // const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
        //     <svg
        //         className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
        //         {...restProps}
        //     >
        //         <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
        //         {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}
        //     </svg>
        // );
        
        return <div>
            <input type='file' style={{ 'display': 'none' }} ref={e => this.imageUpload = e} />
            {/* <CustomIcon type={require('./foo.svg')} /> */}
            <img width='50' height='50' style={{ 'border-radius': '50%' }} src='https://i0.hdslb.com/bfs/face/member/noface.jpg@72w_72h_1c.webp' />
            <img src="../../assets/svg/camera.svg" class="am-icon am-icon-md" alt=""></img>
            <button onClick={this.uploadImage}>测试</button>
        </div>
    }
}

export default PersonalInfo;