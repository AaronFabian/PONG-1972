// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eZyLq":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dV6cC":[function(require,module,exports) {
var _utils = require("./utils");
"use strict";
const canvas = document.getElementById("canvas");
const button = document.getElementById("button--start");
const playerOneTouch = document.querySelector(".player--one--sp__container");
const playerTwoTouch = document.querySelector(".player--two--sp__container");
const playerOneEl = document.querySelector(".player-one");
const playerTwoEl = document.querySelector(".player-two");
const containerUI = document.querySelector(".container--UI");
// setup
canvas.width = innerWidth;
canvas.height = innerHeight;
let isSmartPhone = false;
const c = canvas.getContext("2d");
//////////////////////////////////
//////////////////////////////////
class Ball {
    constructor(x, y, radius, color){
        const randomX = canvas.width / 2 + radius + 5;
        const randomY = canvas.height / 2 + radius - 5;
        // const randomDx = (Math.random() - 0.5) * 10;
        // const randomDy = Math.random() * 10;
        const randValX = Math.random() - 0.5;
        const randValY = Math.random() - 0.5;
        this.x = randomX;
        this.y = randomY;
        if (isSmartPhone) {
            this.dx = randValX < 0 ? -1.5 : 1.5; // X's velocity
            this.dy = randValY < 0 ? -2 : 2; // Y's velocity
        } else {
            this.dx = randValX < 0 ? -3 : 3; // X's velocity
            this.dy = randValY < 0 ? -3 : 3; // Y's velocity
        }
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
        // c.stroke();
        c.closePath();
    }
    update(machineObj) {
        const toggleEngine = ()=>{
            runEngine = false;
            isWrite = true;
        };
        if (isSmartPhone) {
            if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
                this.dy = -this.dy;
                if (this.y + this.radius >= canvas.height) {
                    machineObj._score[0]++;
                    machineObj._renderSmartPhoneUI();
                    toggleEngine();
                }
                if (this.y - this.radius <= 0) {
                    machineObj._score[1]++;
                    machineObj._renderSmartPhoneUI();
                    toggleEngine();
                }
            } else if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) this.dx = -this.dx;
        } else {
            if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
                this.dx = -this.dx;
                if (this.x + this.radius >= canvas.width) {
                    machineObj._score[0]++;
                    machineObj._renderScore();
                    toggleEngine();
                }
                if (this.x - this.radius <= 0) {
                    machineObj._score[1]++;
                    machineObj._renderScore();
                    toggleEngine();
                }
            } else if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
class Player {
    constructor(width, height, whichPlayer, color){
        this.width = width;
        this.height = height;
        this.color = color;
        this.whichPlayer = whichPlayer;
        if (isSmartPhone) {
            if (whichPlayer === 1) {
                this.x = canvas.width / 2 - this.width / 2;
                this.y = canvas.height - 50;
            } else if (whichPlayer === 2) {
                this.x = canvas.width / 2 - this.width / 2;
                this.y = 25;
            }
            // velocity
            this.dx = 2;
        } else {
            if (whichPlayer === 1) {
                this.x = canvas.width - 50;
                this.y = canvas.height / 2 - this.height / 2;
            } else if (whichPlayer === 2) {
                this.x = 50;
                this.y = canvas.height / 2 - this.height / 2;
            }
            // velocity
            this.dy = 5;
        }
    }
    draw() {
        c.beginPath();
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
        c.closePath();
    }
    update() {
        if (isSmartPhone) {
            // player 1
            if (keyPad.i && this.x > 0 && this.whichPlayer === 1) this.x -= this.dx;
            if (keyPad.k && this.x + this.width <= canvas.width && this.whichPlayer === 1) this.x += this.dx;
            if (keyPad.w && this.x >= 0 && this.whichPlayer === 2) this.x -= this.dx;
            // player 2
            if (keyPad.s && this.x + this.width <= canvas.width && this.whichPlayer === 2) this.x += this.dx;
        ////////////////////////////////////////////////////////
        } else {
            // player 1
            if (keyPad.i && this.y >= 0 && this.whichPlayer === 1) this.y -= this.dy;
            if (keyPad.k && this.y + this.height <= canvas.height && this.whichPlayer === 1) this.y += this.dy;
            if (keyPad.w && this.y >= 0 && this.whichPlayer === 2) this.y -= this.dy;
            // player 2
            if (keyPad.s && this.y + this.height <= canvas.height && this.whichPlayer === 2) this.y += this.dy;
        }
        this.draw();
    }
}
class Machine {
    #scoreDisplay = document.querySelector(".player--container");
    #nameDisplay = document.querySelector(".player--container__name");
    #touchScreenUI = document.querySelector(".button--rendering");
    #spUI = document.querySelector(".smartphone--info__screen");
    _score = [
        0,
        0
    ];
    #playerOne = playerOneEl;
    #playerTwo = playerTwoEl;
    #playerOneDefColor = "blue";
    #playerTwoDefColor = "red";
    #playerOneDefName = "-";
    #playerTwoDefName = "-";
    constructor(){
        button.addEventListener("click", this.getDataPlayer.bind(this));
        playerOneTouch.addEventListener("touchstart", (e)=>{
            e.preventDefault();
            const p1Left = e.target.closest(".p1--left__btn");
            const p2Right = e.target.closest(".p1--right__btn");
            if (p1Left) keyPad.i = true;
            if (p2Right) keyPad.k = true;
        });
        playerOneTouch.addEventListener("touchend", (e)=>{
            e.preventDefault();
            const p1Left = e.target.closest(".p1--left__btn");
            const p1Right = e.target.closest(".p1--right__btn");
            if (p1Left) keyPad.i = false;
            if (p1Right) keyPad.k = false;
        });
        playerTwoTouch.addEventListener("touchstart", (e)=>{
            e.preventDefault();
            const p2Left = e.target.closest(".p2--left__btn");
            const p2Right = e.target.closest(".p2--right__btn");
            if (p2Left) keyPad.w = true;
            if (p2Right) keyPad.s = true;
        });
        playerTwoTouch.addEventListener("touchend", (e)=>{
            e.preventDefault();
            const p2Left = e.target.closest(".p2--left__btn");
            const p2Right = e.target.closest(".p2--right__btn");
            if (p2Left) keyPad.w = false;
            if (p2Right) keyPad.s = false;
        });
    }
    _touchScreenButton() {
    // playerOneTouch.addEventListener('touchstart', );
    }
    getDataPlayer(e) {
        e.preventDefault();
        const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
        // 01
        this.playerOneName = this.#playerOne.querySelector(".form--player-1 input").value || this.#playerOneDefName;
        if (this.playerOneName.length > 6 || regexExp.test(this.playerOneName)) this.playerOneName = this.#playerOneDefName;
        this.playerOneColor = this.#playerOne.querySelector(".option-dropdown").value || this.#playerOneDefColor;
        // 02
        this.playerTwoName = this.#playerTwo.querySelector(".form--player-2 input").value || this.#playerTwoDefName;
        if (this.playerTwoName.length > 6 || regexExp.test(this.playerTwoName)) this.playerTwoName = this.#playerOneDefName;
        this.playerTwoColor = this.#playerTwo.querySelector(".option-dropdown").value || this.#playerTwoDefColor;
        // game load
        this.loadingGame();
    }
    loadingGame() {
        containerUI.classList.add("active__game");
        if (canvas.width <= 640) {
            isSmartPhone = true;
            this.#touchScreenUI.classList.toggle("active__game");
            this.#spUI.classList.toggle("active__game");
            spInit();
        } else {
            this._renderName();
            init();
        }
        animate();
    }
    _renderName() {
        this.#nameDisplay.innerHTML = "";
        this.#nameDisplay.insertAdjacentHTML("afterbegin", this.nameUI());
    }
    _renderScore() {
        this.#scoreDisplay.innerHTML = "";
        this.#scoreDisplay.insertAdjacentHTML("afterbegin", this.scoreUI());
    }
    _renderTouchScreenUI() {
        this.#touchScreenUI.innerHTML = "";
        this.#touchScreenUI.insertAdjacentHTML("afterbegin", this.touchScreenUI());
    }
    _renderSmartPhoneUI() {
        this.#spUI.innerHTML = "";
        this.#spUI.insertAdjacentHTML("afterbegin", this.smartPhoneUI());
    }
    touchScreenUI() {
        return `<div class="player--one--sp__container">
              <div class="left--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="p1--left__btn"
                  width="30"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="right--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  width="30"
                  class="p1--right__btn"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <div class="player--two--sp__container">
              <div class="left--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="p2--left__btn"
                  width="30"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div class="right--btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  width="30"
                  class="p2--right__btn"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>`;
    }
    scoreUI() {
        return `
    <div>
      <p>Player 2</p>
      <h6 class="player__two">${this._score[0]}</h6>
    </div>
    <div>
      <p>Player 1</p>
      <h6 class="player__one">${this._score[1]}</h6>
    </div>
    `;
    }
    nameUI() {
        return `<div class="player--2__name">
              <p>${this.playerOneName}</p>
            </div>
            <small>Vs</small>
            <div class="player--2__name">
              <p>${this.playerTwoName}</p>
            </div>`;
    }
    smartPhoneUI() {
        return `<div class="player--1__screen">
              <h4 class="player--1__name">P2</h4>
              <small class="player__nickname">${this.playerTwoName}</small>
              <span>-${this._score[1]}-</span>
            </div>
            <div class="player--2__screen">
              <h4 class="player--1__name">P1</h4>
              <small class="player__nickname">${this.playerOneName}</small>
              <span>-${this._score[0]}-</span>
            </div>`;
    }
    machineCount(count) {
        if (isSmartPhone) {
            c.beginPath();
            c.font = "32px serif";
            c.strokeStyle = "white";
            if (count === "Ready") c.strokeText(String(count), canvas.width / 2 - 35, canvas.height - 50);
            else c.strokeText(String(count), canvas.width / 2, canvas.height - 50);
            c.closePath();
        } else {
            c.beginPath();
            c.font = "48px serif";
            c.strokeStyle = "white";
            if (count === "Ready") c.strokeText(String(count), canvas.width / 2 - 40, canvas.height / 2);
            else c.strokeText(String(count), canvas.width / 2, canvas.height / 2);
            c.closePath();
        }
    }
}
// function
const mouse = {
    x: canvas.width / 2,
    y: 870
};
const keyPad = {
    w: false,
    s: false,
    i: false,
    k: false
};
// main engine
let ball = [];
let player;
let playerTwo;
let machine = new Machine();
function init() {
    ball = new Ball(100, 100, 10, "white");
    player = new Player(15, 175, 1, machine.playerOneColor);
    playerTwo = new Player(15, 175, 2, machine.playerTwoColor);
}
function spInit() {
    ball = new Ball(100, 100, 10, "white");
    player = new Player(80, 10, 1, machine.playerOneColor);
    playerTwo = new Player(80, 10, 2, machine.playerTwoColor);
}
let runEngine = false;
let isWrite = true;
let frame = 1;
let countDown = 0;
function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    if (runEngine) {
        if (isSmartPhone) {
            if ((0, _utils.getDistCirRec)(ball, player) || player.height + ball.radius < ball.radius) ball.dy = -ball.dy;
            if ((0, _utils.getDistCirRec)(ball, playerTwo) || player.height + ball.radius < ball.radius) ball.dy = -ball.dy;
        } else {
            if ((0, _utils.getDistCirRec)(ball, player)) ball.dx = -ball.dx;
            if ((0, _utils.getDistCirRec)(ball, playerTwo)) ball.dx = -ball.dx;
        }
        player.update();
        playerTwo.update();
        ball.update(machine);
    }
    if (frame % 150 === 0 && !runEngine) {
        countDown++;
        if (countDown === 4) {
            runEngine = true;
            isWrite = false;
            countDown = 0;
        }
    }
    if (isWrite) {
        if (isSmartPhone) {
            if (countDown === 0) {
                machine.machineCount("Ready");
                frame++;
            } else {
                machine.machineCount(countDown);
                frame++;
            }
        } else if (countDown === 0) {
            machine.machineCount("Ready");
            frame++;
        } else {
            machine.machineCount(countDown);
            frame++;
        }
    }
}
// controller
window.addEventListener("keydown", ({ key  })=>{
    switch(key){
        case "i":
            keyPad.i = true;
            break;
        case "k":
            keyPad.k = true;
            break;
        case "w":
            keyPad.w = true;
            break;
        case "s":
            keyPad.s = true;
            break;
    }
});
window.addEventListener("keyup", ({ key  })=>{
    switch(key){
        case "i":
            keyPad.i = false;
            break;
        case "k":
            keyPad.k = false;
            break;
        case "w":
            keyPad.w = false;
            break;
        case "s":
            keyPad.s = false;
            break;
    }
}); // window.addEventListener('mousemove', ({ x, y }) => {
 //   mouse.x = x;
 //   mouse.y = y;
 // });
 ///////////////////////////////
 //////////// garbage collection
 ///////////////////////////////
 // function animate() {
 //   requestAnimationFrame(animate);
 //   c.clearRect(0, 0, canvas.width, canvas.height);
 //   if (
 //     getDistance(ball.x, ball.y, ball2.x, ball2.y) <=
 //     ball.radius + ball2.radius
 //   ) {
 //     if (ball2.color !== 'blue') {
 //       ball2.color = 'blue';
 //     } else {
 //       ball2.color = 'black';
 //     }
 //   }
 //   ball2.draw();
 //   ball.update();
 // }

},{"./utils":"72Dku"}],"72Dku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDistCirRec", ()=>getDistCirRec);
parcelHelpers.export(exports, "getDistance", ()=>getDistance);
const getDistCirRec = function(circle, rect) {
    let testX = circle.x;
    let testY = circle.y;
    if (circle.x < rect.x) testX = rect.x;
    else if (circle.x > rect.x + rect.width) testX = rect.x + rect.width;
    if (circle.y < rect.y) testY = rect.y;
    else if (circle.y > rect.y + rect.height) testY = rect.y + rect.height;
    const xDistance = circle.x - testX;
    const yDistance = circle.y - testY;
    const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    if (distance < circle.radius) return true;
    else return false;
};
const getDistance = function(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["eZyLq","dV6cC"], "dV6cC", "parcelRequire7ed1")

//# sourceMappingURL=index.e82f28a0.js.map
