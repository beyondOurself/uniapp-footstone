import fly from '../utils/httpRequest.js'



export function mockReqTest(params) {
	return fly.request('/long',
		params, {
			method: "post",
		}
	)
}
