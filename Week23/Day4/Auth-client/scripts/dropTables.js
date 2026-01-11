const { pool } = require('../config/database');
require('dotenv').config();

const dropTables = async () => {
  try {
    console.log('🗑️  Dropping all tables and functions...');
    
    await pool.query(`
      DROP TABLE IF EXISTS revoked_tokens CASCADE;
      DROP TABLE IF EXISTS users CASCADE;
      DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
    `);
    
    console.log('✅ All tables and functions dropped');
    
    await pool.end();
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    await pool.end();
    process.exit(1);
  }
};

dropTables();
