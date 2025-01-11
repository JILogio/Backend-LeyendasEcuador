const Father = require('../models/Father');

// Controlador para gestionar la colección Father
const FatherController = {

    // Método para añadir un nuevo registro
    addFather: async (req, res) => {
        try {
            const { name, stars } = req.body;

            if (typeof name !== 'string' || typeof stars !== 'number') {
                return res.status(400).json({ message: 'Datos inválidos. Verifica el formato.' });
            }

            const newFather = new Father({ name, stars });
            await newFather.save();
            return res.status(201).json({ message: 'Registro añadido exitosamente', data: newFather });
        } catch (error) {
            console.error('Error añadiendo registro:', error);
            return res.status(500).json({ message: 'Error del servidor' });
        }
    },

    // Método para eliminar un registro por ID
    deleteFather: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedFather = await Father.findByIdAndDelete(id);
            if (!deletedFather) {
                return res.status(404).json({ message: 'Registro no encontrado' });
            }

            return res.status(200).json({ message: 'Registro eliminado exitosamente', data: deletedFather });
        } catch (error) {
            console.error('Error eliminando registro:', error);
            return res.status(500).json({ message: 'Error del servidor' });
        }
    },

    // Método para obtener todos los datos
    getAllFather: async (req, res) => {
        try {
            const allFather = await Father.find();
            return res.status(200).json({ message: 'Datos recuperados con éxito.', data: allFather });
        } catch (error) {
            return res.status(500).json({ message: 'Error al recuperar los datos.', error: error.message });
        }
    }
};

module.exports = FatherController;
