export const dev =  {
    auth:{
        secret: 'chavesecretadaporra'
    },
    database:{
        username: 'user',
        password: 'test',
        database: 'myDb',
        host: 'app_db',
        dialect: 'mysql',
        timestamps: false,
        port: 3306,
        logging: false,
        define: {
            timestamps: false,
        },
        // timezone: 'UTC',
    },
    email:{
        from: 'from@from.com',
        forgotPassword:{
            title: 'Recuperação de senha'
        }
    }
}
