export default function notFoundError(details){
    return {
        name: "NotFoundError",
        message: `Not Found: ${details}`
    }
}