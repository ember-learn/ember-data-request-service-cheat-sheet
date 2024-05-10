import type User from "my-app/models/user";

const user = await this.store.findRecord<User>('user', '1');
