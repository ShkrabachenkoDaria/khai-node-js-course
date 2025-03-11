export default {

    schema: './src/db/schema.js',
 
    out: './drizzle',
 
    // driver: 'pg', -  incorrect in new versions of Drizzle
    dialect: 'postgresql',
 
    dbCredentials: {
 
        host: '127.0.0.1',
 
        port: 5432,
 
        user: 'nodejs_course_admin',
 
        password: 'Unicorn123',
 
        database: 'nodejs_course_database',
        
        ssl: false,
 
    },
 
 };