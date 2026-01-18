const onceNoopFactory = require("./factory")
const myNoopInstance = onceNoopFactory()
const myOtherNoopInstance = onceNoopFactory()

myNoopInstance.doNothing() // does nothing
myOtherNoopInstance.doNothing() // does nothing with no error
myNoopInstance.doNothing()
