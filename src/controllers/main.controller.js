const mainControllers = {
    home: (req, res)=> res.send('Ruta a la vista de Home'),
    contacto: (req, res)=> res.send('Ruta a la vista de Contacto'),
    about: (req, res)=> res.send('Ruta a la vista de About'),
    faqs: (req, res)=> res.send('Ruta a la vista de preguntas frecuentes')
}

module.exports = mainControllers;