import { MissingParamError } from "../errors/missingParamError";

export const validateRequest = (
  expectedParams: Array<string>,
  //eslint-disable-next-line
  receivedParams: any
): MissingParamError | boolean => {
  const missingParam = expectedParams.find(
    (expected) => !receivedParams[expected]
  );
  if (missingParam) {
    return new MissingParamError(missingParam);
  }
  return false;
};
