import { loadApp } from "./loadApp";

if (window.self === window.top && window.EmbeddedHelp === undefined) {
  window.EmbeddedHelp = loadApp();
}
