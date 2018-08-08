const express = require('express')
const router = express.Router()
const axios = require('axios')
const shortid = require('shortid')

const data ={
	users: [],
	going: [],
	notgoing: []
}

router.get('/users', (req,res, next) =>{
	if(data.users.length === 0){
		axios.get('https://randomuser.me/api/?results=100').then(resp => {
			const users = resp.data.results.map(user =>{
				return {
						id: shortid.generate(),
						name: user.name.first + " " + user.name.last,
						email: user.email,
						phone: user.phone,
						image: user.picture.large,
						status: 'pending'
					}
			})
			data.users = users

			res.json(users[0])
		})
	}else{
		res.json(data.users[0])
	}
})

router.patch('/users/:id', (req,res,next) =>{
	const id = req.params.id
	const status = req.body.status

	const user = data.users.find(user =>  user.id === id)
	
	user.status = status

	data[status].push(user)
	
	data.users = data.users.filter(user =>  user.id !== id)

	res.json(user)
})

router.get('/users/:id', (req, res, next) => {
	const id = req.params.id

	const user = data.users.find(user => user.id === id)

	res.json(user)
})

router.get('/going', (req, res, next) => {
	res.json(data.going)
})

router.get('/notgoing', (req, res, next) => {
	res.json(data.notgoing)
})

module.exports = router
