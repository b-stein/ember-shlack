import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Router from '@ember/routing/router';
import CookiesService from 'ember-cookies/services/cookies';

const AUTH_KEY = 'shlack-userid';

export default class AuthService extends Service {
  /**
   * @type {Router}
   */
  @service router;

  /**
   * @type {CookiesService}
   */
  @service cookies;

  get currentUserId() {
    // return window.localStorage.getItem(AUTH_KEY);
    return this.cookies.read(AUTH_KEY)
  }

  loginWithUserId(userId) {
    // window.localStorage.setItem(AUTH_KEY, userId);
    this.cookies.write(AUTH_KEY, userId);
    // programmatically change url with router service
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    // window.localStorage.removeItem(AUTH_KEY);
    this.cookies.write(AUTH_KEY, null);
    this.router.transitionTo('login');
  }
}
