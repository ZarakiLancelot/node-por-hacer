const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea nueva', {
        descripcion
    })
    .command('actualizar', 'Actualiza una de las tareas listadas', {
        descripcion,
        completado
    })
    .command('eliminar', 'Eliminar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}