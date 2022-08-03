

export default function(event, obj, cb){
    const newObj = {...obj}
    newObj[event.target.name] = event.target.value
    cb(newObj)
}