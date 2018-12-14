import axios from 'axios'
import Auth from './auth'

const server_address = 'https://ship1ngay.com/api'

const genHeader = () => {
	const auth = new Auth()
	if(auth.checkAuth()) {
		let token = auth.getToken()
		return {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	} else {
		return {'Content-Type': 'application/json'}
	}
}

export const API = ({method='GET',route='',data={},params={},responseType='', cache, onUploadProgress, onDownloadProgress}) => {
	return new Promise((resolve,reject) => {
		return axios({
			baseURL: server_address,
			url: route + (cache ? "" : '?stuff='+new Date().getTime()),
			method,
			params,
			data,
			onUploadProgress,
			onDownloadProgress,
			headers: genHeader(),
			responseType
		}).then((res) => {
			resolve(res.data)
		}).catch(err => {
			reject(err.response)
		})
	})
}

