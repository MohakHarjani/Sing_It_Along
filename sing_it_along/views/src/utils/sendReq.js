//this functions receives url, method and data[in form of an object]
//this function sends a request to the given URL
//and this function returns a PROMISE
const sendReq = (url, method='GET', reqBody=null)=>{
    const options = {
        method : method,
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(reqBody)
    }
    return (reqBody === null)? fetch(url) : fetch(url , options)
}
module.exports = {sendReq}