import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const secret = String(process.env.JWT_SECRET);

interface TokenPayload {
    sub: string;
    iat: number;
    exp: number;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const authMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // console.log(request.headers.authorization);
    const { authorization } = request.headers;
    // console.log(request.headers);

    if (!authorization) {
        return response.status(401).json({ error: "Invalid authorization" });
    }

    const token = authorization.replace("Bearer", "").trim();

    try {
        const data = jwt.verify(token, secret);
        // console.log(data);

        const { sub } = data as TokenPayload;

        // let userID: string;
        // response.locals.userID = sub;

        request.headers.userID = sub;
        // console.log(request.headers);

        return next();
    } catch (error) {
        return response
            .status(401)
            .json({ error: `Invalid authorization ${error}` });
    }
};
