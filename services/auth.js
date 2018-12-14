import {signin} from './api'
import { AsyncStorage } from "react-native"

class Auth {
	constructor() {
		this.getInfo()
		this.role()
	}

	login(data) {
		return new Promise((resolve,reject) => {
			signin(data)
			.then(res => {
				let {success,results} = res
				if(success) {
					AsyncStorage.setItem('user',JSON.stringify(results.user))
					AsyncStorage.setItem('token',results.token)
					resolve(res);
				} else {
					reject(res);
				}
			})
			.catch(err => {
				reject(err)
			})
		})
	}

	logout() {
		delete this._userInfo
		AsyncStorage.clear()
		return new Promise((resolve,reject) => {
			resolve()
		})
	}

	checkAuth() {
		let token = AsyncStorage.token
		if(token && token.length > 0) {
			return true
		} else {
			delete this._userInfo
			return false
		}
	}

	role() {
		this.getToken()
		let info = this.getInfo()
		let {role} = info
		if(!!role && role.length) {
			return role[0]
		} else if(!!info && !!!role) {
			return {name: 'guest'}
		} else {
			return undefined
		}
	}

	getInfo() {
		if(!!!this._userInfo) {
			let user = AsyncStorage.user
			if(user) {
				this._userInfo = JSON.parse(user)
			} else {
				this._userInfo = {}
			}
		}
		return this._userInfo
	}

	getToken() {
		let token = AsyncStorage.token
		if(token != this._token) {
			delete this._userInfo
			this.getInfo()
		}
		this._token = token
		return this._token
	}
}

export default Auth;