import Mock from 'mockjs'

//测试的mock数据方法
export function resMockDatas(reqUrl) {
	switch (reqUrl) {
		case '/long':
			return {
				mockFlag: true,
				data: Mock.mock({
					"string|1-10": "★"
				})
			}
			break;
		case '/login':
			return {
				mockFlag: true,
				data: Mock.mock({
					"msg": "登录成功！",
					"companyCode": "A0000",
					"departmentName": "养猪中心",
					"code": 0,
					"mail": "562172151@qq.com",
					"displayName": "沈灿龙",
					"companyName": "布零科技",
					"departmentCode": "A6666",
					"mobile": "15099836861",
					"isOnGesture": 0,
					"title": "CEO",
					"userId": 1,
					"token": "112233445566",
					"result": true,
					"expire": 6666666,
					"username": "00000001"
				})
			}
			break;
		case '/duty/showTodayList':
			return {
				mockFlag: true,
				data: Mock.mock({
					"msg": "success",
					"code": 0,
					"dutyDate": "2019/11/05",
					"list|1-10": [{
						"id": 666,
						"gmtCreate": "2019-01-29 16:30:19",
						"gmtModified": "2019-11-04 08:27:18",
						"userNo": "000001",
						"userName": "沈灿龙",
						"deptNo": "A6666",
						"deptName": "养猪中心",
						"deptId": 1,
						"dutyDate": "2019-11-05 00:00:00",
						"dutyTime": "17:00-次日8:00",
						"workPlace": "养猪安保部",
						"telPhone": "15099836861",
						"telShort": "6666666",
						"dutyLog": null,
						"preUserNo": "5555555",
						"preUserName": "林冲",
						"preDutyDate": "2019-11-05 00:00:00",
						"changeUserNo": "1801018",
						"changeUserName": "沈灿龙",
						"changeDutyDate": "2019-11-13 00:00:00",
						"changeTime": "2019-11-01 12:12:12",
						"changeId": 555,
						"status": 0,
						"flag": null,
						"approveStatus": null,
						"formatDay": null,
						"formatDay2": null,
						"isSuccessChange": null
					}]
				})
			}
			break;
		default:
			return {
				mockFlag: false,
			}
			break;
	}
}
