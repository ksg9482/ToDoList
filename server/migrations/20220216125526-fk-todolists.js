'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('todolists', 'user_id',{
      type: Sequelize.INTEGER
    })
    await queryInterface.addConstraint('todolists',{
      fields: ['user_id'],
      type: 'foreign key',
      name: 'users_todolists_id_fk',
      references: {
        table: 'users',
        field:'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('todolists', 'user_id')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
