import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'kalendae/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.host;
  namespace = 'api';
}
