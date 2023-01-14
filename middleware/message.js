exports.Message = (req,res,next)=>{
    console.log('to no meu mid')
    res.locals.errors = req.flash(('errors'))
    res.locals.success = req.flash(('success'))
    next()
}