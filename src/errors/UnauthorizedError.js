export default function unauthorizedError(details){
    return {
        name: "UnauthorizedError",
        message: `Unauthorized: ${details}`
    }
}