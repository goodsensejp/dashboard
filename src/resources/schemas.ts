import {Schema} from 'normalizr';

export const userSchema = new Schema('users', {
  idAttribute: 'username'
});


export const storySchema = new Schema('stories');
