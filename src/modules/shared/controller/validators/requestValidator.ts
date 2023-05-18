import { MissingParamError } from "../errors/missingParamError";

export const validateRequest = (
  expectedParams: Array<string>,
  //eslint-disable-next-line
  receivedParams: any
): MissingParamError | true => {
  const missingParam = expectedParams.find(
    (expected) => !receivedParams[expected]
  );
  if (missingParam) {
    return new MissingParamError(missingParam);
  }
  return true;
};
