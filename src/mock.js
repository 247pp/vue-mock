const Mock = require('mockjs')
Mock.mock('/api/data', (req, res) => {
  return {
    data: ['a', 'b']
  }
})
Mock.mock('/api/obj', {
	"user|20-39": [{
		'name': '@cname',   //中文名称
		'age|1-100': 100,   //100以内随机整数
		'birthday': '@date("yyyy-MM-dd")',  //日期
		'city': '@city(true)',   //中国城市
		'time': '@time',
		'content': '@cparagraph'
	}]
})
