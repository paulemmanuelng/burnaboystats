// What React's Flight (RSC) serializer sends for a view value, using the
// React server build Next itself vendors — the boundary CertViewSwap's
// `views` cross. Prints one JSON line: { fragment, false, null }, each the
// serialized model row for { v: <value> }.
//
// Debug pass 4 Oct 2026, B-01: the artist page's empty-view strip returned
// `<></>`, which this serializer flattens to its (absent) children and sends
// as "$undefined" — so CertViewSwap's `views[k] ?? views.all` showed the
// all-view strip. tests/debug1004Certs.test.tsx runs this to keep the claim
// anchored to React's own behaviour rather than to a comment.
const Module = require("module");
const path = require("path");
const root = process.cwd();
const R = path.join(root, "node_modules/next/dist/compiled/react/react.react-server.js");
const RJ = path.join(root, "node_modules/next/dist/compiled/react/jsx-runtime.react-server.js");
const RD = path.join(root, "node_modules/next/dist/compiled/react-dom/react-dom.react-server.js");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (req, ...rest) {
  if (req === "react" || req === "next/dist/compiled/react") return R;
  if (req === "react/jsx-runtime") return RJ;
  if (req === "react-dom") return RD;
  return resolve.call(this, req, ...rest);
};
const React = require("react");
const { renderToPipeableStream } = require(
  path.join(root, "node_modules/next/dist/compiled/react-server-dom-webpack/server.node.js")
);
const { Writable } = require("stream");
const serialize = (model) =>
  new Promise((done) => {
    let out = "";
    const sink = new Writable({
      write(chunk, _enc, cb) {
        out += chunk;
        cb();
      },
      final(cb) {
        done(out.trim());
        cb();
      },
    });
    renderToPipeableStream(model, {}).pipe(sink);
  });
(async () => {
  const rows = {
    fragment: await serialize({ v: React.createElement(React.Fragment, null) }),
    false: await serialize({ v: false }),
    null: await serialize({ v: null }),
  };
  process.stdout.write(JSON.stringify(rows));
})();
