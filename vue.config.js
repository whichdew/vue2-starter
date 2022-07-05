const { defineConfig } = require('@vue/cli-service')

function doSomething(v){
	return v?Promise.resolve():Promise.reject();
}

doSomething(1).then(r=>{
	console.log(r)
	module.exports=defineConfig({
		devServer:{
			port:8888
		}
	})
}).catch(e=>{
	console.error(e);
	
})

//module.exports = defineConfig({
//  transpileDependencies: true
//})
