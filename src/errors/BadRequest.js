class BadRequest extends Error {
    constructor(message) {
      super(message);
      this.code = 400
      this.name = 'BadRequest';
    }
  }

  module.exports = BadRequest;