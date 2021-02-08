import io from 'socket.io-client'

// 建立连接
const socket = io('ws://localhost:4000')

socket.on('receiveMsg', function (data) {
  console.log('浏览器接收到消息', data)
})

// 向服务器发送消息
socket.emit('sendMsg', '哈哈哈哈')