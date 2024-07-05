// File: my-app/utils/serialization.js

const keyForAttribute = (attr) => {
  return attr.replace(/_/g, '-'); // blog_post_comment becomes blog-post-comment
}

const keyForRelationship = (relationship) => {
  return relationship + 'Ids';
}

const serializeResource = (cache, identifier) => {
  const body = { _id: identifier.id, type: identifier.type };

  if (cache.hasChangedAttrs(identifier)) {
    const attrsChanges = cache.changedAttrs(identifier);

    Object.keys(attrsChanges).forEach((attr) => {
      const change = attrsChanges[attr][1];
      body[keyForAttribute(attr)] = change === undefined ? null : change;
    });
  }

  if (cache.hasChangedRelationships(identifier)) {
    const relationshipsChanged = cache.changedRelationships(identifier);
    if (relationshipsChanged.size) {
      relationshipsChanged.forEach((diff, key) => {
        body[keyForRelationship(key)] = diff.localState.id;
      });
    }
  }

  return body;
};

const normalizeResource = (item, schema) => {
  // destructuring and renaming primaryKey from _id to id
  const { _id: id, type } = item;

  const attributesDefined = schema.attributesDefinitionFor({ type });
  const relationshipsDefined = schema.relationshipsDefinitionFor({ type });

  const data = { id, type, attributes: {} };

  for (const attr of Object.values(attributesDefined)) {
    data.attributes[attr.name] = item[attr.name];
  }

  data.attributes.amount = item.data.attributes.cost.amount;
  data.attributes.currency = item.data.attributes.cost.currency;

  for (const rel of Object.values(relationshipsDefined)) {
    if (Object.hasOwnProperty.call(item, rel.name)) {
      data.relationships ??= {};
      data.relationships[rel.name] = {
        data: {
          id: item[rel.name],
          type: rel.type,
        },
      };
    }
  }

  return data;
};

export {
  normalizeResource,
  serializeResource,
}
