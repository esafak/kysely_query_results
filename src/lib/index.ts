// place files you want to import through the `$lib` alias in this folder.

import {db} from "$lib/server/kysely";
import type {SqlBool} from "kysely";

async function demonstration() : Promise<SqlBool> {
    const result = await db.selectFrom('user')
        .select(({ eb }) =>
            [eb(eb.fn.count('id'), '>', 0).as('email_exists')])
        .executeTakeFirst();
    return result?.email_exists?? false  // Webstorm can't resolve email_exists
}
