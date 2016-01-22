import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import fetch from '../../typings/isomorphic-fetch';
import {fromJS, Map} from 'immutable';

const GOODSENSE_API_ROOT: string = 'http://api.github.com/';

abstract class Api {
  call(endpoint, schema: Schema) {
    const fullUrl = (endpoint.indexOf(GOODSENSE_API_ROOT) === -1) ?
      GOODSENSE_API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
      .then(response =>
          response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        let camelizedJson = camelizeKeys(json);

        let normalizedResponse = normalize(camelizedJson, schema);

        console.log(normalizedResponse);

        return Map({
          result: fromJS(normalizedResponse.result.toString()),
          entities: fromJS(normalizedResponse.entities)
        });
      })
  }
}

export default Api;