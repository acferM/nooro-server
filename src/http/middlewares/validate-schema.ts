import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export function validateSchema(schema: ZodSchema) {
  return (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse({
        request
      })

      next()
    } catch (error) {
      if (error instanceof ZodError) {
        response.status(400).json({
          statusCode: 500,
          error: 'validation error',
          messages: error.errors.map(error => ({
            type: error.code,
            message: error.message
          }))
        })

        return
      }

      response.status(500).json({
        statusCode: 500,
        error: 'Internal server error',
      })
    }
  }
}
