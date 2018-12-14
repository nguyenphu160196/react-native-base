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

export const API = ({method='GET',route='',data={},params={},responseType='', cache}) => {
	return new Promise((resolve,reject) => {
		return axios({
			baseURL: server_address,
			url: route + (cache ? "" : '?stuff='+new Date().getTime()),
			method,
			params,
			data,
			headers: genHeader(),
			responseType
		}).then((res) => {
			resolve(res.data)
		}).catch(err => {
			reject(err.response)
		})
	})
}

export const signin = (data) => {
	return API({
		method:'POST',
		route:'/api/signin',
		data,
	})
}

export const signup = (data) => {
	return API({
		method:'POST',
		route:'/api/signup',
		data,
	})
}

export const createUser = (data) => {
	return API({
		method:'POST',
		route:'/api/user',
		data,
	})
}

export const getUser = _ => {
	return API({
		route: '/api/user'
	})
}

export const updateUser = (id,data) => {
	return API({
		method: 'PUT',
		route: `/api/user/${id}`,
		data
	})
}

export const searchUser = (data) => {
	return API({
		method: 'POST',
		route: `/api/search/user/`,
		data
	})
}

export const createAddress = (data) => {
	return API({
		method:'POST',
		route:'/api/address',
		data
	})
}

export const getAddress = _ => {
	return API({
		route:'/api/address',
	})
}

export const updateAddress = (id,data) => {
	return API({
		method: 'PUT',
		route: `/api/address/${id}`,
		data
	})
}

export const createCustomer = (data) => {
	return API({
		method:'POST',
		route:'/api/customer',
		data,
	})
}

export const getCustomer = _ => {
	return API({
		route:'/api/customer',
	})
}

export const createCompany = (data) => {
	return API({
		method: 'POST',
		route: '/api/company',
		data
	})
}

export const getCompany = _ => {
	return API({
		route:'/api/company',
	})
}

export const createShipOrder = (data) => {
	return API({
		method:'POST',
		route:'/api/ship-order',
		data,
	})
}

export const getShipOrder = _ => {
	return API({
		route:'/api/ship-order'
	})
}

export const searchOrder = (data) => {
	return API({
		method: "POST",
		route: `/api/search/order`,
		data
	})
}

export const getOrderById = (id) => {
	return API({
		route: `/api/ship-order/${id}`
	})
}

export const updateShipOrder = (id,data) => {
	return API({
		method:'PUT',
		route:`/api/ship-order/${id}`,
		data,
	})
}

export const getStatistics = (data) => {
	return API({
		method:'POST',
		route:`/api/statistics`,
		data,
	})
}

export const getStatisticsRange = (data) => {
	return API({
		method:'POST',
		route:`/api/statistics/fromto`,
		data,
	})
}

export const getRevenue = (data) => {
	return API({
		method: 'POST',
		route: `/api/statistics/revenue`,
		data
	})
}

export const totalRevenue = _ => {
	return API({
		route: `/api/statistics/revenue`,
	})
}

export const signMoney = (id) => {
	return API({
		method: "PUT",
		route: `/api/statistics/sign/${id}`
	})
}

export const createProduct = (data) => {
	return API({
		method: "POST",
		route: `/api/product`,
		data
	})
}

export const getProduct = _ => {
	return API({
		route: '/api/product'
	})
}

export const updateProduct = (id, data) => {
	return API({
		method: "PUT",
		route: `/api/product/${id}`,
		data
	})
}