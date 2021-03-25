import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('teams', function() {
    // teams*
    // teams/(lindedIn)*
    this.route('team', { path: ':teamId'}, function() {
      // teams/(linkedIn)/(channel)*
      this.route('channel', { path: ':channelId' });
    });
  });
  this.route('login');
});

export default Router;
