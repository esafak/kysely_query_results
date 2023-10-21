import type { Database } from './types.ts' // this is the Database interface we defined earlier
import { createPool } from 'mysql2' // do not use 'mysql2/promises'!
import { Kysely, MysqlDialect } from 'kysely'

const dialect = new MysqlDialect({
    pool: createPool({})
})

export const db = new Kysely<Database>({
    dialect,
})