function isNullOrUndefined(object: any): object is null | undefined {
  return typeof object === 'undefined' || object === null;
}

export default isNullOrUndefined;
