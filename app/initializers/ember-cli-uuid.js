import DS from 'ember-data';
import { uuid } from 'ember-cli-uuid';
import ENV from '../config/environment';
import Configuration from 'ember-cli-uuid/configuration';

export default {

  name: 'ember-cli-uuid',

  initialize() {

    const config = ENV['ember-cli-uuid'] || {};
    Configuration.load(config);

    DS.Adapter.reopen({

      generateIdForRecord() {
        return Configuration.defaultUUID ? uuid() : null;
      }

    });
  }

};
