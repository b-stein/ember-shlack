import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {
  async beforeModel(transition) {
    await super.beforeModel(transition);
    const { channels, id } = this.modelFor('teams.team');

    if (channels.length > 0) {
    // route forwarding/redirect
      this.replaceWith(
        // route is: teams/:teamId/:channelId
        'teams.team.channel',
        id,
        channels[0].id
      );
    }
  }
}
