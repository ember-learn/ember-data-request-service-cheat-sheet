import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  shouldBackgroundReloadAll(store, snapshotArray) {
    let { downlink, effectiveType } = navigator.connection;

    return downlink > 0 && effectiveType === '4g';
  }

  shouldBackgroundReloadRecord(store, snapshot) {
    let { downlink, effectiveType } = navigator.connection;

    return downlink > 0 && effectiveType === '4g';
  }

  shouldReloadRecord(store, ticketSnapshot) {
    let lastAccessedAt = ticketSnapshot.attr('lastAccessedAt');
    let timeDiff = moment().diff(lastAccessedAt, 'minutes');

    if (timeDiff > 20) {
      return true;
    } else {
      return false;
    }
  }

  shouldReloadAll(store, snapshotArray) {
    let snapshots = snapshotArray.snapshots();

    return snapshots.any((ticketSnapshot) => {
      let lastAccessedAt = ticketSnapshot.attr('lastAccessedAt');
      let timeDiff = moment().diff(lastAccessedAt, 'minutes');

      if (timeDiff > 20) {
        return true;
      } else {
        return false;
      }
    });
  }
}
