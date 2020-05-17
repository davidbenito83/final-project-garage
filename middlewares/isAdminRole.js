module.exports = (req, res, next) => {

//   //PARA SEGURIDAD A NIVEL DE ROLES DE USUARIO, SE PONE EN EL CALLBACK DE LOS GET COMO MIDDLEWARE

//   // if (req.session && req.session.currentUser) {
//   //   console.log(req.session.currentUser);
//   //   if (req.session.currentUser.role === "ADMIN_ROLE") next();
//   // } else res.redirect("/auth/login");
};



// module.exports = (req, res, next) => {
//   // req.session.token
//   // ? next()
//   // : res.status(401).json({ message: "Unauthorized"})

// }