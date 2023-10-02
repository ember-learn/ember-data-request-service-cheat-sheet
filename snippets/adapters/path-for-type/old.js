export default class ApplicationAdapter extends JSONAPIAdapter {
  pathForType(type) {
    const collectionName = pluralize(camelize(type));
    return `collections/${collectionName}/records`;
  }
}
