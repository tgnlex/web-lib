import errorHandler from './errorHandler.js'
import reqLogger from '../middleware/logger.js'
const viewHandler = (req, res, next, view, opts) => {
  reqLogger(req);
  console.log(req);
  if (view) {
    if (opts) {
      res.render(view, opts)
    } else {
      res.render(view)
    } 
  } else  {
    let error = new Error("[HTTP]: ERROR! No view was passed to view handler.")
    errorHandler(error,   404);
    res.send(error.message);
    next()
  }
}
export { viewHandler }