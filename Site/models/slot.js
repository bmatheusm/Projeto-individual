'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Slot = sequelize.define('Slot',{
		id: {
			field: 'idSlot',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		system: {
			field: 'systemchip',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		attack: {
			field: 'attackchip',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		defense: {
			field: 'defensechip',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		support: {
			field: 'supportchip',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		hacking: {
			field: 'hackingchip',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		usuario: {
			field: 'fkusuario',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		personagem: {
			field: 'fkpersonagens',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'slot', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Slot;
};