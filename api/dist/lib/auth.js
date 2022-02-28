var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var auth_exports = {};
__export(auth_exports, {
  hasRole: () => hasRole,
  isAuthenticated: () => isAuthenticated,
  requireAuth: () => requireAuth
});
const isAuthenticated = () => {
  return true;
};
const hasRole = ({
  roles
}) => {
  return roles !== void 0;
};
const requireAuth = ({
  roles
}) => {
  return isAuthenticated();
};
module.exports = __toCommonJS(auth_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hasRole,
  isAuthenticated,
  requireAuth
});
//# sourceMappingURL=auth.js.map
