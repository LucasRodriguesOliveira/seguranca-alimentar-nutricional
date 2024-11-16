const logLevel = {
  info: 'INFO',
  error: 'ERROR',
  warn: 'WARNING',
  debug: 'DEBUG',
};

const logger = (context) => {
  return (msg, level) => {
    if (level === logLevel.error) {
      console.error(`[${context}]: ${msg}`);
      return;
    }

    if (level === logLevel.warn) {
      console.warn(`[${context}]: ${msg}`);
      return;
    }

    if (level === logLevel.debug) {
      console.log(`%c [${context}]: ${msg}`, 'background-color: #7621d9; color: white');
    }

    if (level === logLevel.info) {
      console.log(`[${context}]: ${msg}`);
    }
  }
};
