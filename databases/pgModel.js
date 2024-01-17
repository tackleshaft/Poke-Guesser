const { Sequelize, DataTypes, Model } = require('sequelize');
// "start": "webpack-dev-server --mode development --open --hot"
const myURL = 'postgres://vmxybkpv:DdEcMWhZm97D_nXc8L1ccJR987-v4kW-@batyr.db.elephantsql.com/vmxybkpv'
const URL = process.env.PG_URI || myURL;

const sql = new Sequelize(URL);

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    userHighScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0, 
    },
}, {
    sequelize: sql,
    modelName: 'User', 
    tableName: 'Users',
    timestamps: false,
});

class HighScore extends Model {}

HighScore.init({
    userId: {
        type: DataTypes.STRING,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: sql,
    modelName: 'HighScore',
    tableName: 'HighScores', 
    timestamps: false,
});

sql.sync({ force: true })
    .then(() => {
        console.log('Tables dropped and recreated.');
    })
    .catch((error) => {
        console.error('Error dropping and recreating tables:', error);
    });


module.exports = { User, HighScore };
3