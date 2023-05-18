import { HttpResponse } from "./httpResponse";

export interface Controller {
  // eslint-disable-next-line
  handle: (req: any) => Promise<HttpResponse>;
}
