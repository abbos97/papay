let memberController = module.exports;

memberController.home = (req, res) => {
    console.log("GET cont.home")
    res.send("Home sahifasidasiz")
}

memberController.signup = (req, res) => {
    console.log("POST cont.signup")
    res.send("sign up sahifasidasiz")
}

memberController.login = (req, res) => {
    console.log("POST cont.login")
    res.send("login sahifasidasz")
}

memberController.logout = (req, res) => {
    console.log("GET cont.logout")
    res.send("logout sahifasidasiz")
}