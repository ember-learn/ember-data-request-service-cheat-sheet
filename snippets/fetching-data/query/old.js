const users = await this.store.query('user', { filter: { name: 'John' } });
