const keytar = require('keytar');
const TWILIO_CLI_IDENTIFIER = 'twilio-cli';

class SecureStorage {
  async saveCredentials(projectId, username, password) {
    await keytar.setPassword(TWILIO_CLI_IDENTIFIER, projectId, username + '|' + password);
  }

  async getCredentials(projectId) {
    const credentials = await keytar.getPassword('twilio-cli', projectId);
    const [apiKey, apiSecret] = credentials.split('|');

    return {
      apiKey,
      apiSecret
    };
  }
}

module.exports = {
  SecureStorage
};