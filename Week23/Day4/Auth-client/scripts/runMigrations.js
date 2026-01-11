const { pool } = require('../config/database');
require('dotenv').config();

const runMigrations = async () => {
  try {
    console.log('🚀 Starting database migrations...');
    
    // Сначала проверим, существуют ли таблицы
    console.log('🔍 Checking existing tables...');
    const existingTables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
        AND table_name IN ('users', 'revoked_tokens');
    `);
    
    if (existingTables.rows.length > 0) {
      console.log('⚠️  Found existing tables:', existingTables.rows.map(r => r.table_name).join(', '));
      console.log('⚠️  Please run: node scripts/dropTables.js first');
      await pool.end();
      process.exit(1);
    }
    
    // Шаг 1: Создание таблицы users с INTEGER ID
    console.log('📊 Step 1: Creating users table...');
    const createUsersTableSql = `
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE,
        full_name VARCHAR(100),
        bio TEXT,
        avatar VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await pool.query(createUsersTableSql);
    console.log('✅ Users table created with INTEGER id');
    
    // Проверим тип ID
    const checkIdType = await pool.query(`
      SELECT column_name, data_type, udt_name
      FROM information_schema.columns 
      WHERE table_name = 'users' AND column_name = 'id';
    `);
    
    console.log('   ID column type:', checkIdType.rows[0].data_type, `(${checkIdType.rows[0].udt_name})`);
    
    // Шаг 2: Создание таблицы revoked_tokens
    console.log('📊 Step 2: Creating revoked_tokens table...');
    const createRevokedTokensTableSql = `
      CREATE TABLE revoked_tokens (
        id SERIAL PRIMARY KEY,
        token TEXT UNIQUE NOT NULL,
        user_id INTEGER NOT NULL,
        revoked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP NOT NULL,
        CONSTRAINT fk_revoked_tokens_user_id
          FOREIGN KEY(user_id) 
          REFERENCES users(id)
          ON DELETE CASCADE
      );
    `;
    
    await pool.query(createRevokedTokensTableSql);
    console.log('✅ Revoked tokens table created');
    
    // Шаг 3: Создание индексов
    console.log('📇 Step 3: Creating indexes...');
    const indexes = [
      'CREATE INDEX idx_users_username ON users(username)',
      'CREATE INDEX idx_users_email ON users(email)',
      'CREATE INDEX idx_revoked_tokens_token ON revoked_tokens(token)',
      'CREATE INDEX idx_revoked_tokens_user_id ON revoked_tokens(user_id)',
      'CREATE INDEX idx_revoked_tokens_expires_at ON revoked_tokens(expires_at)'
    ];
    
    for (const indexSql of indexes) {
      await pool.query(indexSql);
    }
    console.log('✅ Indexes created');
    
    // Шаг 4: Создание функции для обновления updated_at
    console.log('⚙️  Step 4: Creating update function...');
    const createFunctionSql = `
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = CURRENT_TIMESTAMP;
        RETURN NEW;
      END;
      $$ language 'plpgsql';
    `;
    
    await pool.query(createFunctionSql);
    console.log('✅ Function created');
    
    // Шаг 5: Создание триггера
    console.log('🔔 Step 5: Creating trigger...');
    const createTriggerSql = `
      CREATE TRIGGER update_users_updated_at
        BEFORE UPDATE ON users
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    `;
    
    await pool.query(createTriggerSql);
    console.log('✅ Trigger created');
    
    // Шаг 6: Проверка структуры
    console.log('\n🔍 Step 6: Verifying database structure...');
    
    const checkTables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
        AND table_type = 'BASE TABLE'
      ORDER BY table_name;
    `);
    
    console.log('\n📊 Tables created:');
    checkTables.rows.forEach(row => {
      console.log(`   ✓ ${row.table_name}`);
    });
    
    const checkConstraints = await pool.query(`
      SELECT
        tc.table_name,
        tc.constraint_name,
        tc.constraint_type
      FROM information_schema.table_constraints tc
      WHERE tc.table_schema = 'public'
        AND tc.table_name IN ('users', 'revoked_tokens')
      ORDER BY tc.table_name, tc.constraint_type;
    `);
    
    console.log('\n🔒 Constraints:');
    checkConstraints.rows.forEach(row => {
      console.log(`   ✓ ${row.table_name}: ${row.constraint_name} (${row.constraint_type})`);
    });
    
    const checkIndexes = await pool.query(`
      SELECT indexname, tablename
      FROM pg_indexes
      WHERE schemaname = 'public'
        AND tablename IN ('users', 'revoked_tokens')
      ORDER BY tablename, indexname;
    `);
    
    console.log('\n📇 Indexes:');
    checkIndexes.rows.forEach(row => {
      console.log(`   ✓ ${row.tablename}.${row.indexname}`);
    });
    
    console.log('\n✅ ✅ ✅ Migrations completed successfully! ✅ ✅ ✅');
    console.log('🎉 Database is ready for JWT authentication!\n');
    
    await pool.end();
    console.log('🔌 Database connection closed');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ Migration failed!');
    console.error('Error:', error.message);
    
    if (error.code) {
      console.error('Code:', error.code);
    }
    
    if (error.detail) {
      console.error('Detail:', error.detail);
    }
    
    if (error.hint) {
      console.error('Hint:', error.hint);
    }
    
    console.error('\n💡 Tip: Try running "node scripts/dropTables.js" first\n');
    
    try {
      await pool.end();
    } catch (poolError) {
      console.error('Error closing pool:', poolError.message);
    }
    
    process.exit(1);
  }
};

runMigrations();