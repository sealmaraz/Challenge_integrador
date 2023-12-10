const adminControllers = {
    admin: (req, res) => res.send('Envío a la página de Administración'),
    create: (req, res) => res.send('Envío a la página de Administración para creación de nuevo item'),
    create_data: (req, res) => res.send('Envío del nuevo item creado'),
    edit_insert: (req, res) => {
        const id = req.params.id;
        res.send(`Envío a página para editar el Item ${id}`)
    },
    edit_update: (req, res) => {
        const id = req.params.id;
        res.send(`Inserción de item ${id}`)
    },
    edit_delete: (req, res) => {
        const id = req.params.id;
        res.send(`Eliminación de item ${id}`)
    }
}

module.exports = adminControllers;