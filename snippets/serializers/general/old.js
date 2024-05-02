import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  primaryKey = '_id';

  keyForAttribute(attr) {
    return attr.replace(/_/g, '-'); // blog_post_comment becomes blog-post-comment
  }

  keyForRelationship(key, relationship) {
    return key + 'Ids';
  }

  serialize(snapshot, options) {
    let json = super.serialize(...arguments);

    json.data.attributes.cost = {
      amount: json.data.attributes.amount,
      currency: json.data.attributes.currency,
    };

    delete json.data.attributes.amount;
    delete json.data.attributes.currency;

    return json;
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.attributes.amount = payload.data.attributes.cost.amount;
    payload.data.attributes.currency = payload.data.attributes.cost.currency;

    delete payload.data.attributes.cost;

    return super.normalizeResponse(...arguments);
  }
}
