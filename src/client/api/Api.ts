import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import {fromJS, Map} from 'immutable';
import request = require('browser-request');
import {Subject} from 'rx';

export abstract class Api {

  protected call<T>(method, url, data: any = {}) {
    if(Map.isMap(data)) {
      data = data.toObject();
    }

    // Api prefix
    url = "/api/" + url;

    const options = {method: method, url, json: true, body: JSON.stringify(data)};

    const observable = new Subject<T>();

    console.log(`$$$Making a ${method} request to ${url}`);
    console.log("$$$Data", data);

    request<any>(options, function(err, response) {
      if(err) {
        observable.onError(err);
      } else {
        observable.onNext(response.body);        
      }
    })

    return observable;
  }

  protected post<T>(url, data = {}) {
    return this.call<T>("POST", url, data);
  }

  protected put<T>(url, data = {}) {
    return this.call<T>("PUT", url, data);
  }

  protected patch<T>(url, data = {}) {
    return this.call<T>("PATCH", url, data);
  }

  protected get<T>(url) {
    return this.call<T>("GET", url);
  }

  protected delete<T>(url, data = {}) {
    return this.call<T>("DELETE", url, data);
  }

  protected normalize(response, schema) {

    let camelizedJson = camelizeKeys(response);

    let normalizedResponse = normalize(camelizedJson, schema);

    return {
      result: fromJS(normalizedResponse.result),
      entities: fromJS(normalizedResponse.entities)
    };
  }
}