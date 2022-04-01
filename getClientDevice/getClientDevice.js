const express = require('express');
const uaParser = require('ua-parser-js');
const app = express();
app.use('/', (req, res) => {
    let { device } = uaParser(req.headers['user-agent']);
    let type = '';
    if (device.type == 'mobile') {
        type = '手机'
    } else if (device.type == 'tablet') {
        type = '平板电脑'
    } else {
        type = '电脑'
    }
    res.send({ device: '你是 '+ type + '设备访问。' })
})


app.listen(8088, '127.0.0.1', () => {
    console.log('Start Server');
})