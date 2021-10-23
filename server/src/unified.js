let linter = null;

async function importUnified() {
  if (linter) {
    return linter;
  }

  // Father forgive me for i have sinned
  // It's debatable whether this server can be distributed
  // as an ESM module. Needs more time.
  // This is a hack to import a Pure ESM module into a CommonJS package.
  const retextEnglish = await import("retext-english");
  const retextPassive = await import("retext-passive");
  const retextStringify = await import("retext-stringify");
  const { unified } = await import("unified");
  linter = unified()
    .use(retextEnglish.default)
    .use(retextPassive.default)
    .use(retextStringify.default);

  return linter;
}

exports.importUnified = importUnified;
