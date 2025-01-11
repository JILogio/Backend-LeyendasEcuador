const Cantunia = require('../models/Cantunia');

// Controlador para gestionar la colección Cantunia
const CantuniaController = {

    // Método para añadir un nuevo registro
    addCantunia: async (req, res) => {
        try {
            const { name, stars } = req.body;

            if (typeof name !== 'string' || typeof stars !== 'number') {
                return res.status(400).json({ message: 'Datos inválidos. Verifica el formato.' });
            }

            const newCantunia = new Cantunia({ name, stars });
            await newCantunia.save();
            return res.status(201).json({ message: 'Registro añadido exitosamente', data: newCantunia });
        } catch (error) {
            console.error('Error añadiendo registro:', error);
            return res.status(500).json({ message: 'Error del servidor' });
        }
    },

    // Método para eliminar un registro por ID
    deleteCantunia: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedCantunia = await Cantunia.findByIdAndDelete(id);
            if (!deletedCantunia) {
                return res.status(404).json({ message: 'Registro no encontrado' });
            }

            return res.status(200).json({ message: 'Registro eliminado exitosamente', data: deletedCantunia });
        } catch (error) {
            console.error('Error eliminando registro:', error);
            return res.status(500).json({ message: 'Error del servidor' });
        }
    },

    // Método para obtener todos los datos
    getAllCantunia: async (req, res) => {
        try {
            const allCantunia = await Cantunia.find();
            return res.status(200).json({ message: 'Datos recuperados con éxito.', data: allCantunia });
        } catch (error) {
            return res.status(500).json({ message: 'Error al recuperar los datos.', error: error.message });
        }
    }
};

module.exports = CantuniaController;
