import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import {fromJS, Map} from 'immutable';
import request = require('browser-request');
import {Subject} from 'rx';

export abstract class Api {

  call<T>(method, url, data = {}) {
    const options = {method: method, url, json: true, body: JSON.stringify(data)};

    const observable = new Subject<T>();

    request<any>(options, function(err, response) {
      if(err) {
        observable.onError(err);
      } else {
        observable.onNext(response.body);        
      }
    })

    return observable;
  }

  post<T>(url, data = {}) {
    return this.call<T>("POST", url, data);
  }

  put<T>(url, data = {}) {
    return this.call<T>("PUT", url, data);
  }

  get<T>(url) {
    return this.call<T>("GET", url);
  }

  normalize(response, schema) {

    let camelizedJson = camelizeKeys(response);

    let normalizedResponse = normalize(camelizedJson, schema);

    return {
      result: fromJS(normalizedResponse.result),
      entities: fromJS(normalizedResponse.entities)
    };
  }
}