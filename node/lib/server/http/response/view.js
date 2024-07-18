const viewHandler = (view, opts, res=res, req=req, next=next) => {
    if (opts) {
      res.render(view, opts)
      next()
    } else {
      res.render(view)
      next()
    } 
  }
}
export { viewHandler }
