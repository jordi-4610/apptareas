var path = require('path');

var DB_name  = ("dc40pise18rf8r"||null);
var user     = ("hqkdcxsslgpnyt"||null);
var pwd      = ("8f302272b277824dc8d23e815a68934ca878fbf79f2487a7adf09b0387a39548"||null);
var protocol = ("postgres"||null);
var dialect  = ("postgres"||null);
var port     = (5432||null);
var host     = ("ec2-23-23-237-68.compute-1.amazonaws.com"||null);
var storage  = process.env.DATABASE_STORAGE;


// Cargar el modelo ORM
var Sequelize = require('sequelize');
//Uso de la BBDD SQLite
var sequelize = new Sequelize(DB_name, user, pwd, 
  { dialect:  protocol,
    protocol: protocol,
    port:     port,
    host:     host,
    omitNull: true      // solo Postgres
  }      
);
//Importación al objeto sequelize la tabla a Tbltareas que esta en tbltareas.js
var Tbltareas = sequelize.import(path.join(__dirname,'tbltareas'));

//Exportar definición de la tabla Tbltareas, para usarlo en otros lugares de la app
exports.Tbltareas = Tbltareas;
//Sincronizando modelo definido con la BBDD podemos inicializarla
sequelize.sync().then(function() {
	Tbltareas.count().then(function (count){
		if (count === 0) {
			Tbltareas.create({nombre: 'Reunión con cliente',
						 etiquetas: 'Node, Fechas',
						 porcentaje: 15
			});
            Tbltareas.create({nombre: 'Desarrollo del mockup',
						 etiquetas: 'Node, Mockup, Diseño',
						 porcentaje: 50
			});
            Tbltareas.create({nombre: 'Generar repositorio Git',
						 etiquetas: 'Node, Versiones',
						 porcentaje: 100
			})
			.then(function(){console.log('Base de datos inicializada')});
		};
	});
});