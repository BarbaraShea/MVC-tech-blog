const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    user_name: {
        type: DataTypes.STRING,
        references: {
            model: 'user',
            key: 'user_name',
          },
        },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id',
      },
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;