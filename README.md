# once-noop
A noop function that can only be called once.
Usage:
```javascript
const onceNoop = require('once-noop')
onceNoop() // does absolutely nothing except set itself to a function that throws an error the next time
onceNoop() // throws an error
```
If you want to create new noop functions that can only be called once, require the factory
```javascript
const onceNoopFactory = require('once-noop/factory')
const myNoopInstance = onceNoopFactory()
const myOtherNoopInstance = onceNoopFactory()

myNoopInstance() // does nothing
myOtherNoopInstance() // does nothing
myOtherNoopInstance() // throw error because called twice
```

## other weird use
ever wanted a function that throws the error `"This method should have not been called again."`? combine the powers of twice-call-wrapper and once-noop:
```js
const twice = require("twice-call-wrapper")
const onceNoop = require("once-noop/factory")()

const throwErr = twice(onceNoop)

throwErr() // throws error "This method should have not been called again."
```