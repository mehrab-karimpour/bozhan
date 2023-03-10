import events from "node:events";
import {injectableServiceProvider} from "app/providers/injectableServiceProvider";
import {Container} from "app/providers/AppContainer";

class index extends events {
}

const Event = injectableServiceProvider.bind(index);


Container._events.map(event => {
    let _EventObj = injectableServiceProvider.bind(event)
    if (_EventObj.runInBackground) {
        setTimeout(() => {
            Event.on(_EventObj.name, (...args: any) => {
                setTimeout(() => {
                    _EventObj.run(...args)
                    _EventObj.setParameters(...args)
                    _EventObj.callListeners(_EventObj.registerListeners())
                }, 10)
            })
        }, 1)
    } else Event.on(_EventObj.name, (...args: any) => {
        _EventObj.run(...args)
        _EventObj.setParameters(...args)
        _EventObj.callListeners(_EventObj.registerListeners())
    })
})


export default Event;