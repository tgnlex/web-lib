class CustomError {
  message: String;
  error: unknown;
  throw: ((message) => never)
  handle: ((error) => void)
}