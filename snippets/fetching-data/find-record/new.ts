import { findRecord } from '@ember-data/json-api/request';
import type { User } from 'my-app/models/user';

const { content } = await store.request(findRecord<User>('user', '1'));
const user = content.data
