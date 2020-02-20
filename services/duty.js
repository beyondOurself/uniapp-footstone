import fly from '../utils/httpRequest.js'

/* 
  author: longlong ,
  depict : 获得今日值班人员列表 ,
  params:{  }
 */
export function getDutyList(params) {
	return fly.request('/duty/showTodayList',
		params, {
			method: "post"
		}
	)
}
