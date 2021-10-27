let instance = null;

async function importUnified() {
  if (!instance) {
    // Father forgive me for I have sinned
    // It's debatable whether this server can be distributed
    // as an ESM module. Needs more time.
    // This is a hack to import a Pure ESM module into a CommonJS package.
    const { processor } = await import('processor');
    return (instance = processor);
  }

  return instance;
}

exports.importUnified = importUnified;
