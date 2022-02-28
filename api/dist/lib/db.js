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
var db_exports = {};
__export(db_exports, {
  db: () => db
});
var import_client = require("@prisma/client");
var import_logger = require("@redwoodjs/api/logger");
var import_logger2 = require("./logger");
const db = new import_client.PrismaClient({
  log: (0, import_logger.emitLogLevels)(["info", "warn", "error"])
});
(0, import_logger.handlePrismaLogging)({
  db,
  logger: import_logger2.logger,
  logLevels: ["info", "warn", "error"]
});
module.exports = __toCommonJS(db_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  db
});
//# sourceMappingURL=db.js.map
