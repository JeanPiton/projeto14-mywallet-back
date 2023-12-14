export default function invalidDataError(details){
    return {
        name: "InvalidDataError",
        message: `Invalid Data: ${details}`
    }
}