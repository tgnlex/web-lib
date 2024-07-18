const express = require('express')



const reqLogger = function (req, res, next) {
	console.log(`[INFO]: ${req}`)
	next()
}
