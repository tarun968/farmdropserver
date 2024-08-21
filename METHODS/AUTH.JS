var { expressjwt: jwtk } = require("express-jwt");
// 
exports.isAdmin = (req, res, next) => {
    try {
        if (req.profile.Role != 1) {
            return res.json({ message: 'Access denied for non admin ' })
        }
        else {
            next()
        }
    } catch (e) {
        console.log(e)
    }
}
exports.isSignedIn = jwtk(
    {
        secret: process.env.SECRET,
        userProperty: "auth1",
        algorithms: ['sha1', 'HS256', 'RS256']
    })

exports.isAuthenticated = (req, res, next) => {
    try {
        let checker = req.profile && req.auth &&
            req.profile._id.toString() === req.auth._id
        if (!checker) {
            return res.status(403).json({
                error: "Acess is denied"
            })
        }
        next()
    } catch (er) {
        console.log("error", er)
    }
}


