import { Request, Response } from "express";
import { Controller } from "@/modules/shared/controller";

export const controllerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    const httpResponse = await controller.handle(httpRequest);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
