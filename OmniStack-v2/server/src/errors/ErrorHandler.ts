import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
    error,
    request,
    response,
    next
) => {
    
    return response
        .status(500)
        .json({ type: "Internal Server Error", error: `${error}` });
};
