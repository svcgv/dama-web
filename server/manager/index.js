const {Manager} = require('./Manager.js');




const manager = new Manager()

manager.start()

manager.on("hello",(data) => {
    console.log(data)
})
