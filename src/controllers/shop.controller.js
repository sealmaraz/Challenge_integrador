const shopControllers = {
    shop: (req, res) => res.send('Ruta a la vista de Shop'),
    item_search: (req, res) => {
        const id = req.params.id;
        res.send(`Ruta a la vista de Item ${id}`)
    },

    item_add: (req, res) => {
        const id = req.params.id;
        res.send(`Visa de alta de item ${id}`);
    },
    cart: (req, res) => res.send('Ruta a la vista de Carrito'),
    cart_add: (req, res) => s.send('Ruta de envío de datos desde Carrito para comprar')
}

module.exports = shopControllers;