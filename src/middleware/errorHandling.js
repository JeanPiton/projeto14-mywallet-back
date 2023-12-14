export function handleApplicationErrors(err,_req,res,next){

    if(err.name === "UnauthorizedError"){
        return res.status(401).send({message: err.message})
    }

    if(err.name === "NotFoundError"){
        return res.status(404).send({message: err.message})
    }

    if(err.name === "ConflictError"){
        return res.status(409).send({message: err.message})
    }

    if(err.name === "InvalidDataError"){
        return res.status(422).send({message: err.message})
    }

    console.log(err);
    res.status(500).send({
        error: "InternalServerError",
        message: "Internal Server Error"
    })
}