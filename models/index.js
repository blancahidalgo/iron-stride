const User = require('./User');
const Workout = require('./workout');
const Category = require('./category');

User.hasMany(Workout, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Workout, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
    });

Workout.belongsTo(Category, {
    foreignKey: 'category_id'
    });

module.exports ={ Workout, User, Category };