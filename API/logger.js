
let post = 0;
let get = 0;

function log(req, res, next){

    if(req.method === "POST")
        post++;
    else if(req.method=== "GET")
        get++

    console.log(`Patients ${req.method} received request`);
    console.log(`Processed Request Count --> Get: ${get}, Post: ${post}`);

    next();
    console.log(`Patients ${req.method} sending response`);
}



module.exports = log