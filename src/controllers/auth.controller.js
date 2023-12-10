const authControllers = {
    login:(req, res) => res.send('Acceso a ventana de Login'),
    login_data: (req, res) => res.send('Envío de datos de login'),
    register: (req, res) => res.send('Acceso a ventana de registro'),
    register_data: (req, res) => res.send('Envío datos de formulario de registro'),
    unlogin: (req, res) => res.send('Envío a ventana de deslogueo del sitio')

}

module.exports = authControllers;