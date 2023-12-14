export default function conflictError(details) {
    return {
        name: "ConflictError",
        message: `Conflict: ${details}`
    }
}