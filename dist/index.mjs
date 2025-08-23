import ev, { useState as Ip, useRef as zb, useEffect as XS } from "react";
import Dg from "react-dom";
function jS(w) {
  return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default") ? w.default : w;
}
var Rg = { exports: {} }, Pm = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Db;
function QS() {
  if (Db) return Pm;
  Db = 1;
  var w = Symbol.for("react.transitional.element"), Ht = Symbol.for("react.fragment");
  function nt(C, Ze, et) {
    var Gt = null;
    if (et !== void 0 && (Gt = "" + et), Ze.key !== void 0 && (Gt = "" + Ze.key), "key" in Ze) {
      et = {};
      for (var Vt in Ze)
        Vt !== "key" && (et[Vt] = Ze[Vt]);
    } else et = Ze;
    return Ze = et.ref, {
      $$typeof: w,
      type: C,
      key: Gt,
      ref: Ze !== void 0 ? Ze : null,
      props: et
    };
  }
  return Pm.Fragment = Ht, Pm.jsx = nt, Pm.jsxs = nt, Pm;
}
var e0 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function LS() {
  return Ob || (Ob = 1, process.env.NODE_ENV !== "production" && function() {
    function w(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === ot ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case Bt:
          return "Fragment";
        case Je:
          return "Profiler";
        case ke:
          return "StrictMode";
        case Sl:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case ut:
            return "Portal";
          case dt:
            return (N.displayName || "Context") + ".Provider";
          case Xt:
            return (N._context.displayName || "Context") + ".Consumer";
          case Wt:
            var ee = N.render;
            return N = N.displayName, N || (N = ee.displayName || ee.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case Be:
            return ee = N.displayName || null, ee !== null ? ee : w(N.type) || "Memo";
          case Ct:
            ee = N._payload, N = N._init;
            try {
              return w(N(ee));
            } catch {
            }
        }
      return null;
    }
    function Ht(N) {
      return "" + N;
    }
    function nt(N) {
      try {
        Ht(N);
        var ee = !1;
      } catch {
        ee = !0;
      }
      if (ee) {
        ee = console;
        var k = ee.error, ce = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return k.call(
          ee,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ce
        ), Ht(N);
      }
    }
    function C(N) {
      if (N === Bt) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === Ct)
        return "<...>";
      try {
        var ee = w(N);
        return ee ? "<" + ee + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ze() {
      var N = Z.A;
      return N === null ? null : N.getOwner();
    }
    function et() {
      return Error("react-stack-top-frame");
    }
    function Gt(N) {
      if (te.call(N, "key")) {
        var ee = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ee && ee.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function Vt(N, ee) {
      function k() {
        lt || (lt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ee
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: k,
        configurable: !0
      });
    }
    function K() {
      var N = w(this.type);
      return A[N] || (A[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function gt(N, ee, k, ce, Re, it, xe, Uu) {
      return k = it.ref, N = {
        $$typeof: tt,
        type: N,
        key: ee,
        props: it,
        _owner: Re
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: K
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Uu
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function Ne(N, ee, k, ce, Re, it, xe, Uu) {
      var Et = ee.children;
      if (Et !== void 0)
        if (ce)
          if (Qe(Et)) {
            for (ce = 0; ce < Et.length; ce++)
              Ye(Et[ce]);
            Object.freeze && Object.freeze(Et);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Ye(Et);
      if (te.call(ee, "key")) {
        Et = w(N);
        var cl = Object.keys(ee).filter(function(Ei) {
          return Ei !== "key";
        });
        ce = 0 < cl.length ? "{key: someKey, " + cl.join(": ..., ") + ": ...}" : "{key: someKey}", ie[Et + ce] || (cl = 0 < cl.length ? "{" + cl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ce,
          Et,
          cl,
          Et
        ), ie[Et + ce] = !0);
      }
      if (Et = null, k !== void 0 && (nt(k), Et = "" + k), Gt(ee) && (nt(ee.key), Et = "" + ee.key), "key" in ee) {
        k = {};
        for (var ba in ee)
          ba !== "key" && (k[ba] = ee[ba]);
      } else k = ee;
      return Et && Vt(
        k,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), gt(
        N,
        Et,
        it,
        Re,
        Ze(),
        k,
        xe,
        Uu
      );
    }
    function Ye(N) {
      typeof N == "object" && N !== null && N.$$typeof === tt && N._store && (N._store.validated = 1);
    }
    var de = ev, tt = Symbol.for("react.transitional.element"), ut = Symbol.for("react.portal"), Bt = Symbol.for("react.fragment"), ke = Symbol.for("react.strict_mode"), Je = Symbol.for("react.profiler"), Xt = Symbol.for("react.consumer"), dt = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), Sl = Symbol.for("react.suspense"), ht = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), ot = Symbol.for("react.client.reference"), Z = de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, Qe = Array.isArray, jt = console.createTask ? console.createTask : function() {
      return null;
    };
    de = {
      react_stack_bottom_frame: function(N) {
        return N();
      }
    };
    var lt, A = {}, j = de.react_stack_bottom_frame.bind(
      de,
      et
    )(), L = jt(C(et)), ie = {};
    e0.Fragment = Bt, e0.jsx = function(N, ee, k, ce, Re) {
      var it = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return Ne(
        N,
        ee,
        k,
        !1,
        ce,
        Re,
        it ? Error("react-stack-top-frame") : j,
        it ? jt(C(N)) : L
      );
    }, e0.jsxs = function(N, ee, k, ce, Re) {
      var it = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return Ne(
        N,
        ee,
        k,
        !0,
        ce,
        Re,
        it ? Error("react-stack-top-frame") : j,
        it ? jt(C(N)) : L
      );
    };
  }()), e0;
}
process.env.NODE_ENV === "production" ? Rg.exports = QS() : Rg.exports = LS();
var il = Rg.exports, zg = { exports: {} }, t0 = {}, Pp = { exports: {} }, Eg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mb;
function wS() {
  return Mb || (Mb = 1, function(w) {
    function Ht(A, j) {
      var L = A.length;
      A.push(j);
      e: for (; 0 < L; ) {
        var ie = L - 1 >>> 1, N = A[ie];
        if (0 < Ze(N, j))
          A[ie] = j, A[L] = N, L = ie;
        else break e;
      }
    }
    function nt(A) {
      return A.length === 0 ? null : A[0];
    }
    function C(A) {
      if (A.length === 0) return null;
      var j = A[0], L = A.pop();
      if (L !== j) {
        A[0] = L;
        e: for (var ie = 0, N = A.length, ee = N >>> 1; ie < ee; ) {
          var k = 2 * (ie + 1) - 1, ce = A[k], Re = k + 1, it = A[Re];
          if (0 > Ze(ce, L))
            Re < N && 0 > Ze(it, ce) ? (A[ie] = it, A[Re] = L, ie = Re) : (A[ie] = ce, A[k] = L, ie = k);
          else if (Re < N && 0 > Ze(it, L))
            A[ie] = it, A[Re] = L, ie = Re;
          else break e;
        }
      }
      return j;
    }
    function Ze(A, j) {
      var L = A.sortIndex - j.sortIndex;
      return L !== 0 ? L : A.id - j.id;
    }
    if (w.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var et = performance;
      w.unstable_now = function() {
        return et.now();
      };
    } else {
      var Gt = Date, Vt = Gt.now();
      w.unstable_now = function() {
        return Gt.now() - Vt;
      };
    }
    var K = [], gt = [], Ne = 1, Ye = null, de = 3, tt = !1, ut = !1, Bt = !1, ke = !1, Je = typeof setTimeout == "function" ? setTimeout : null, Xt = typeof clearTimeout == "function" ? clearTimeout : null, dt = typeof setImmediate < "u" ? setImmediate : null;
    function Wt(A) {
      for (var j = nt(gt); j !== null; ) {
        if (j.callback === null) C(gt);
        else if (j.startTime <= A)
          C(gt), j.sortIndex = j.expirationTime, Ht(K, j);
        else break;
        j = nt(gt);
      }
    }
    function Sl(A) {
      if (Bt = !1, Wt(A), !ut)
        if (nt(K) !== null)
          ut = !0, ht || (ht = !0, te());
        else {
          var j = nt(gt);
          j !== null && lt(Sl, j.startTime - A);
        }
    }
    var ht = !1, Be = -1, Ct = 5, le = -1;
    function ot() {
      return ke ? !0 : !(w.unstable_now() - le < Ct);
    }
    function Z() {
      if (ke = !1, ht) {
        var A = w.unstable_now();
        le = A;
        var j = !0;
        try {
          e: {
            ut = !1, Bt && (Bt = !1, Xt(Be), Be = -1), tt = !0;
            var L = de;
            try {
              t: {
                for (Wt(A), Ye = nt(K); Ye !== null && !(Ye.expirationTime > A && ot()); ) {
                  var ie = Ye.callback;
                  if (typeof ie == "function") {
                    Ye.callback = null, de = Ye.priorityLevel;
                    var N = ie(
                      Ye.expirationTime <= A
                    );
                    if (A = w.unstable_now(), typeof N == "function") {
                      Ye.callback = N, Wt(A), j = !0;
                      break t;
                    }
                    Ye === nt(K) && C(K), Wt(A);
                  } else C(K);
                  Ye = nt(K);
                }
                if (Ye !== null) j = !0;
                else {
                  var ee = nt(gt);
                  ee !== null && lt(
                    Sl,
                    ee.startTime - A
                  ), j = !1;
                }
              }
              break e;
            } finally {
              Ye = null, de = L, tt = !1;
            }
            j = void 0;
          }
        } finally {
          j ? te() : ht = !1;
        }
      }
    }
    var te;
    if (typeof dt == "function")
      te = function() {
        dt(Z);
      };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), jt = Qe.port2;
      Qe.port1.onmessage = Z, te = function() {
        jt.postMessage(null);
      };
    } else
      te = function() {
        Je(Z, 0);
      };
    function lt(A, j) {
      Be = Je(function() {
        A(w.unstable_now());
      }, j);
    }
    w.unstable_IdlePriority = 5, w.unstable_ImmediatePriority = 1, w.unstable_LowPriority = 4, w.unstable_NormalPriority = 3, w.unstable_Profiling = null, w.unstable_UserBlockingPriority = 2, w.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, w.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ct = 0 < A ? Math.floor(1e3 / A) : 5;
    }, w.unstable_getCurrentPriorityLevel = function() {
      return de;
    }, w.unstable_next = function(A) {
      switch (de) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = de;
      }
      var L = de;
      de = j;
      try {
        return A();
      } finally {
        de = L;
      }
    }, w.unstable_requestPaint = function() {
      ke = !0;
    }, w.unstable_runWithPriority = function(A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = de;
      de = A;
      try {
        return j();
      } finally {
        de = L;
      }
    }, w.unstable_scheduleCallback = function(A, j, L) {
      var ie = w.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ie + L : ie) : L = ie, A) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = L + N, A = {
        id: Ne++,
        callback: j,
        priorityLevel: A,
        startTime: L,
        expirationTime: N,
        sortIndex: -1
      }, L > ie ? (A.sortIndex = L, Ht(gt, A), nt(K) === null && A === nt(gt) && (Bt ? (Xt(Be), Be = -1) : Bt = !0, lt(Sl, L - ie))) : (A.sortIndex = N, Ht(K, A), ut || tt || (ut = !0, ht || (ht = !0, te()))), A;
    }, w.unstable_shouldYield = ot, w.unstable_wrapCallback = function(A) {
      var j = de;
      return function() {
        var L = de;
        de = j;
        try {
          return A.apply(this, arguments);
        } finally {
          de = L;
        }
      };
    };
  }(Eg)), Eg;
}
var Ag = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function ZS() {
  return Ub || (Ub = 1, function(w) {
    process.env.NODE_ENV !== "production" && function() {
      function Ht() {
        if (Sl = !1, le) {
          var A = w.unstable_now();
          te = A;
          var j = !0;
          try {
            e: {
              dt = !1, Wt && (Wt = !1, Be(ot), ot = -1), Xt = !0;
              var L = Je;
              try {
                t: {
                  for (Gt(A), ke = C(tt); ke !== null && !(ke.expirationTime > A && K()); ) {
                    var ie = ke.callback;
                    if (typeof ie == "function") {
                      ke.callback = null, Je = ke.priorityLevel;
                      var N = ie(
                        ke.expirationTime <= A
                      );
                      if (A = w.unstable_now(), typeof N == "function") {
                        ke.callback = N, Gt(A), j = !0;
                        break t;
                      }
                      ke === C(tt) && Ze(tt), Gt(A);
                    } else Ze(tt);
                    ke = C(tt);
                  }
                  if (ke !== null) j = !0;
                  else {
                    var ee = C(ut);
                    ee !== null && gt(
                      Vt,
                      ee.startTime - A
                    ), j = !1;
                  }
                }
                break e;
              } finally {
                ke = null, Je = L, Xt = !1;
              }
              j = void 0;
            }
          } finally {
            j ? Qe() : le = !1;
          }
        }
      }
      function nt(A, j) {
        var L = A.length;
        A.push(j);
        e: for (; 0 < L; ) {
          var ie = L - 1 >>> 1, N = A[ie];
          if (0 < et(N, j))
            A[ie] = j, A[L] = N, L = ie;
          else break e;
        }
      }
      function C(A) {
        return A.length === 0 ? null : A[0];
      }
      function Ze(A) {
        if (A.length === 0) return null;
        var j = A[0], L = A.pop();
        if (L !== j) {
          A[0] = L;
          e: for (var ie = 0, N = A.length, ee = N >>> 1; ie < ee; ) {
            var k = 2 * (ie + 1) - 1, ce = A[k], Re = k + 1, it = A[Re];
            if (0 > et(ce, L))
              Re < N && 0 > et(it, ce) ? (A[ie] = it, A[Re] = L, ie = Re) : (A[ie] = ce, A[k] = L, ie = k);
            else if (Re < N && 0 > et(it, L))
              A[ie] = it, A[Re] = L, ie = Re;
            else break e;
          }
        }
        return j;
      }
      function et(A, j) {
        var L = A.sortIndex - j.sortIndex;
        return L !== 0 ? L : A.id - j.id;
      }
      function Gt(A) {
        for (var j = C(ut); j !== null; ) {
          if (j.callback === null) Ze(ut);
          else if (j.startTime <= A)
            Ze(ut), j.sortIndex = j.expirationTime, nt(tt, j);
          else break;
          j = C(ut);
        }
      }
      function Vt(A) {
        if (Wt = !1, Gt(A), !dt)
          if (C(tt) !== null)
            dt = !0, le || (le = !0, Qe());
          else {
            var j = C(ut);
            j !== null && gt(
              Vt,
              j.startTime - A
            );
          }
      }
      function K() {
        return Sl ? !0 : !(w.unstable_now() - te < Z);
      }
      function gt(A, j) {
        ot = ht(function() {
          A(w.unstable_now());
        }, j);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), w.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ne = performance;
        w.unstable_now = function() {
          return Ne.now();
        };
      } else {
        var Ye = Date, de = Ye.now();
        w.unstable_now = function() {
          return Ye.now() - de;
        };
      }
      var tt = [], ut = [], Bt = 1, ke = null, Je = 3, Xt = !1, dt = !1, Wt = !1, Sl = !1, ht = typeof setTimeout == "function" ? setTimeout : null, Be = typeof clearTimeout == "function" ? clearTimeout : null, Ct = typeof setImmediate < "u" ? setImmediate : null, le = !1, ot = -1, Z = 5, te = -1;
      if (typeof Ct == "function")
        var Qe = function() {
          Ct(Ht);
        };
      else if (typeof MessageChannel < "u") {
        var jt = new MessageChannel(), lt = jt.port2;
        jt.port1.onmessage = Ht, Qe = function() {
          lt.postMessage(null);
        };
      } else
        Qe = function() {
          ht(Ht, 0);
        };
      w.unstable_IdlePriority = 5, w.unstable_ImmediatePriority = 1, w.unstable_LowPriority = 4, w.unstable_NormalPriority = 3, w.unstable_Profiling = null, w.unstable_UserBlockingPriority = 2, w.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, w.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Z = 0 < A ? Math.floor(1e3 / A) : 5;
      }, w.unstable_getCurrentPriorityLevel = function() {
        return Je;
      }, w.unstable_next = function(A) {
        switch (Je) {
          case 1:
          case 2:
          case 3:
            var j = 3;
            break;
          default:
            j = Je;
        }
        var L = Je;
        Je = j;
        try {
          return A();
        } finally {
          Je = L;
        }
      }, w.unstable_requestPaint = function() {
        Sl = !0;
      }, w.unstable_runWithPriority = function(A, j) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var L = Je;
        Je = A;
        try {
          return j();
        } finally {
          Je = L;
        }
      }, w.unstable_scheduleCallback = function(A, j, L) {
        var ie = w.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? ie + L : ie) : L = ie, A) {
          case 1:
            var N = -1;
            break;
          case 2:
            N = 250;
            break;
          case 5:
            N = 1073741823;
            break;
          case 4:
            N = 1e4;
            break;
          default:
            N = 5e3;
        }
        return N = L + N, A = {
          id: Bt++,
          callback: j,
          priorityLevel: A,
          startTime: L,
          expirationTime: N,
          sortIndex: -1
        }, L > ie ? (A.sortIndex = L, nt(ut, A), C(tt) === null && A === C(ut) && (Wt ? (Be(ot), ot = -1) : Wt = !0, gt(Vt, L - ie))) : (A.sortIndex = N, nt(tt, A), dt || Xt || (dt = !0, le || (le = !0, Qe()))), A;
      }, w.unstable_shouldYield = K, w.unstable_wrapCallback = function(A) {
        var j = Je;
        return function() {
          var L = Je;
          Je = j;
          try {
            return A.apply(this, arguments);
          } finally {
            Je = L;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Ag)), Ag;
}
var xb;
function Nb() {
  return xb || (xb = 1, process.env.NODE_ENV === "production" ? Pp.exports = wS() : Pp.exports = ZS()), Pp.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function JS() {
  if (Hb) return t0;
  Hb = 1;
  var w = Nb(), Ht = ev, nt = Dg;
  function C(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ze(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function et(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, n.flags & 4098 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Gt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Vt(l) {
    if (et(l) !== l)
      throw Error(C(188));
  }
  function K(l) {
    var n = l.alternate;
    if (!n) {
      if (n = et(l), n === null) throw Error(C(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return Vt(s), l;
          if (r === c) return Vt(s), n;
          r = r.sibling;
        }
        throw Error(C(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, m = s.child; m; ) {
          if (m === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (m === c) {
            y = !0, c = s, u = r;
            break;
          }
          m = m.sibling;
        }
        if (!y) {
          for (m = r.child; m; ) {
            if (m === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (m === c) {
              y = !0, c = r, u = s;
              break;
            }
            m = m.sibling;
          }
          if (!y) throw Error(C(189));
        }
      }
      if (u.alternate !== c) throw Error(C(190));
    }
    if (u.tag !== 3) throw Error(C(188));
    return u.stateNode.current === u ? l : n;
  }
  function gt(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = gt(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Ne = Object.assign, Ye = Symbol.for("react.element"), de = Symbol.for("react.transitional.element"), tt = Symbol.for("react.portal"), ut = Symbol.for("react.fragment"), Bt = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), Je = Symbol.for("react.provider"), Xt = Symbol.for("react.consumer"), dt = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), Sl = Symbol.for("react.suspense"), ht = Symbol.for("react.suspense_list"), Be = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), le = Symbol.for("react.activity"), ot = Symbol.for("react.memo_cache_sentinel"), Z = Symbol.iterator;
  function te(l) {
    return l === null || typeof l != "object" ? null : (l = Z && l[Z] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Qe = Symbol.for("react.client.reference");
  function jt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Qe ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ut:
        return "Fragment";
      case ke:
        return "Profiler";
      case Bt:
        return "StrictMode";
      case Sl:
        return "Suspense";
      case ht:
        return "SuspenseList";
      case le:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case tt:
          return "Portal";
        case dt:
          return (l.displayName || "Context") + ".Provider";
        case Xt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Wt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Be:
          return n = l.displayName || null, n !== null ? n : jt(l.type) || "Memo";
        case Ct:
          n = l._payload, l = l._init;
          try {
            return jt(l(n));
          } catch {
          }
      }
    return null;
  }
  var lt = Array.isArray, A = Ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], N = -1;
  function ee(l) {
    return { current: l };
  }
  function k(l) {
    0 > N || (l.current = ie[N], ie[N] = null, N--);
  }
  function ce(l, n) {
    N++, ie[N] = l.current, l.current = n;
  }
  var Re = ee(null), it = ee(null), xe = ee(null), Uu = ee(null);
  function Et(l, n) {
    switch (ce(xe, n), ce(it, l), ce(Re, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? gu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = gu(n), l = Do(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    k(Re), ce(Re, l);
  }
  function cl() {
    k(Re), k(it), k(xe);
  }
  function ba(l) {
    l.memoizedState !== null && ce(Uu, l);
    var n = Re.current, u = Do(n, l.type);
    n !== u && (ce(it, l), ce(Re, u));
  }
  function Ei(l) {
    it.current === l && (k(Re), k(it)), Uu.current === l && (k(Uu), ea._currentValue = L);
  }
  var Gs = Object.prototype.hasOwnProperty, Ai = w.unstable_scheduleCallback, ch = w.unstable_cancelCallback, tv = w.unstable_shouldYield, Ri = w.unstable_requestPaint, la = w.unstable_now, Wo = w.unstable_getCurrentPriorityLevel, a0 = w.unstable_ImmediatePriority, oh = w.unstable_UserBlockingPriority, Fo = w.unstable_NormalPriority, fh = w.unstable_LowPriority, Cc = w.unstable_IdlePriority, lv = w.log, n0 = w.unstable_setDisableYieldValue, Nc = null, Ul = null;
  function $n(l) {
    if (typeof lv == "function" && n0(l), Ul && typeof Ul.setStrictMode == "function")
      try {
        Ul.setStrictMode(Nc, l);
      } catch {
      }
  }
  var Xl = Math.clz32 ? Math.clz32 : av, sh = Math.log, u0 = Math.LN2;
  function av(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (sh(l) / u0 | 0) | 0;
  }
  var Bc = 256, Wn = 4194304;
  function aa(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function xu(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var m = c & 134217727;
    return m !== 0 ? (c = m & ~r, c !== 0 ? s = aa(c) : (y &= m, y !== 0 ? s = aa(y) : u || (u = m & ~l, u !== 0 && (s = aa(u))))) : (m = c & ~r, m !== 0 ? s = aa(m) : y !== 0 ? s = aa(y) : u || (u = c & ~l, u !== 0 && (s = aa(u)))), s === 0 ? 0 : n !== 0 && n !== s && !(n & r) && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function nn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ft(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Hu() {
    var l = Bc;
    return Bc <<= 1, !(Bc & 4194048) && (Bc = 256), l;
  }
  function zi() {
    var l = Wn;
    return Wn <<= 1, !(Wn & 62914560) && (Wn = 4194304), l;
  }
  function Cu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Di(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function i0(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var m = l.entanglements, g = l.expirationTimes, D = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var G = 31 - Xl(u), X = 1 << G;
      m[G] = 0, g[G] = -1;
      var M = D[G];
      if (M !== null)
        for (D[G] = null, G = 0; G < M.length; G++) {
          var x = M[G];
          x !== null && (x.lane &= -536870913);
        }
      u &= ~X;
    }
    c !== 0 && Io(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function Io(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Xl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function Po(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Xl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Va(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Vs(l) {
    return l &= -l, 2 < l ? 8 < l ? l & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function c0() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ym(l.type));
  }
  function nv(l, n) {
    var u = j.p;
    try {
      return j.p = l, n();
    } finally {
      j.p = u;
    }
  }
  var Qt = Math.random().toString(36).slice(2), It = "__reactFiber$" + Qt, xl = "__reactProps$" + Qt, _c = "__reactContainer$" + Qt, Xs = "__reactEvents$" + Qt, o0 = "__reactListeners$" + Qt, js = "__reactHandles$" + Qt, f0 = "__reactResources$" + Qt, F = "__reactMarker$" + Qt;
  function ef(l) {
    delete l[It], delete l[xl], delete l[Xs], delete l[o0], delete l[js];
  }
  function ol(l) {
    var n = l[It];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[_c] || u[It]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = ml(l); l !== null; ) {
            if (u = l[It]) return u;
            l = ml(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Oi(l) {
    if (l = l[It] || l[_c]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function tf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(C(33));
  }
  function Fn(l) {
    var n = l[f0];
    return n || (n = l[f0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Lt(l) {
    l[F] = !0;
  }
  var lf = /* @__PURE__ */ new Set(), na = {};
  function Nu(l, n) {
    Bu(l, n), Bu(l + "Capture", n);
  }
  function Bu(l, n) {
    for (na[l] = n, l = 0; l < n.length; l++)
      lf.add(n[l]);
  }
  var s0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Qs = {}, rh = {};
  function r0(l) {
    return Gs.call(rh, l) ? !0 : Gs.call(Qs, l) ? !1 : s0.test(l) ? rh[l] = !0 : (Qs[l] = !0, !1);
  }
  function In(l, n, u) {
    if (r0(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function af(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function un(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var Ls, dh;
  function Mi(l) {
    if (Ls === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ls = n && n[1] || "", dh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ls + l + dh;
  }
  var Hl = !1;
  function _u(l, n) {
    if (!l || Hl) return "";
    Hl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (x) {
                  var M = x;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (x) {
                  M = x;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                M = x;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (x) {
            if (x && M && typeof x.stack == "string")
              return [x.stack, M.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], m = r[1];
      if (y && m) {
        var g = y.split(`
`), D = m.split(`
`);
        for (s = c = 0; c < g.length && !g[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === g.length || s === D.length)
          for (c = g.length - 1, s = D.length - 1; 1 <= c && 0 <= s && g[c] !== D[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (g[c] !== D[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || g[c] !== D[s]) {
                  var G = `
` + g[c].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Hl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Mi(u) : "";
  }
  function Ui(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Mi(l.type);
      case 16:
        return Mi("Lazy");
      case 13:
        return Mi("Suspense");
      case 19:
        return Mi("SuspenseList");
      case 0:
      case 15:
        return _u(l.type, !1);
      case 11:
        return _u(l.type.render, !1);
      case 1:
        return _u(l.type, !0);
      case 31:
        return Mi("Activity");
      default:
        return "";
    }
  }
  function hh(l) {
    try {
      var n = "";
      do
        n += Ui(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Tl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function nf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function yh(l) {
    var n = nf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function qu(l) {
    l._valueTracker || (l._valueTracker = yh(l));
  }
  function xi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = nf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function qc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var uv = /[\n"\\]/g;
  function Sa(l) {
    return l.replace(
      uv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ws(l, n, u, c, s, r, y, m) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Tl(n)) : l.value !== "" + Tl(n) && (l.value = "" + Tl(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? uf(l, y, Tl(n)) : u != null ? uf(l, y, Tl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.name = "" + Tl(m) : l.removeAttribute("name");
  }
  function Zs(l, n, u, c, s, r, y, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + Tl(u) : "", n = n != null ? "" + Tl(n) : u, m || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = m ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function uf(l, n, u) {
    n === "number" && qc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Hi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Tl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function mh(l, n, u) {
    if (n != null && (n = "" + Tl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Tl(u) : "";
  }
  function ph(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(C(92));
        if (lt(c)) {
          if (1 < c.length) throw Error(C(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Tl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Yc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var d0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Js(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || d0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function cf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(C(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Js(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Js(l, r, n[r]);
  }
  function Ci(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var iv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), h0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function of(l) {
    return h0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ni = null;
  function Ks(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Gc = null, Vc = null;
  function y0(l) {
    var n = Oi(l);
    if (n && (l = n.stateNode)) {
      var u = l[xl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ws(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Sa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[xl] || null;
                if (!s) throw Error(C(90));
                ws(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && xi(c);
          }
          break e;
        case "textarea":
          mh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Hi(l, !!u.multiple, n, !1);
      }
    }
  }
  var vh = !1;
  function Xc(l, n, u) {
    if (vh) return l(n, u);
    vh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (vh = !1, (Gc !== null || Vc !== null) && (rc(), Gc && (n = Gc, l = Vc, Vc = Gc = null, y0(n), l)))
        for (n = 0; n < l.length; n++) y0(l[n]);
    }
  }
  function Bi(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[xl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        C(231, n, typeof u)
      );
    return u;
  }
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ks = !1;
  if (cn)
    try {
      var Pn = {};
      Object.defineProperty(Pn, "passive", {
        get: function() {
          ks = !0;
        }
      }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
    } catch {
      ks = !1;
    }
  var eu = null, jc = null, _i = null;
  function gh() {
    if (_i) return _i;
    var l, n = jc, u = n.length, c, s = "value" in eu ? eu.value : eu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return _i = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function fl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function $s() {
    return !0;
  }
  function Ws() {
    return !1;
  }
  function Cl(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var m in l)
        l.hasOwnProperty(m) && (u = l[m], this[m] = u ? u(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? $s : Ws, this.isPropagationStopped = Ws, this;
    }
    return Ne(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = $s);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = $s);
      },
      persist: function() {
      },
      isPersistent: $s
    }), n;
  }
  var Yu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fs = Cl(Yu), ff = Ne({}, Yu, { view: 0, detail: 0 }), m0 = Cl(ff), bh, Is, sf, qi = Ne({}, ff, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== sf && (sf && l.type === "mousemove" ? (bh = l.screenX - sf.screenX, Is = l.screenY - sf.screenY) : Is = bh = 0, sf = l), bh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Is;
    }
  }), Sh = Cl(qi), p0 = Ne({}, qi, { dataTransfer: 0 }), v0 = Cl(p0), cv = Ne({}, ff, { relatedTarget: 0 }), Th = Cl(cv), ov = Ne({}, Yu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), fv = Cl(ov), sv = Ne({}, Yu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), rf = Cl(sv), g0 = Ne({}, Yu, { data: 0 }), Eh = Cl(g0), b0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, S0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ah = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function T0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Ah[l]) ? !!n[l] : !1;
  }
  function tu() {
    return T0;
  }
  var Yi = Ne({}, ff, {
    key: function(l) {
      if (l.key) {
        var n = b0[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = fl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? S0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function(l) {
      return l.type === "keypress" ? fl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? fl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Xa = Cl(Yi), ua = Ne({}, qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), df = Cl(ua), Ps = Ne({}, ff, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu
  }), Rh = Cl(Ps), jl = Ne({}, Yu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), E0 = Cl(jl), er = Ne({}, qi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gi = Cl(er), zh = Ne({}, Yu, {
    newState: 0,
    oldState: 0
  }), A0 = Cl(zh), R0 = [9, 13, 27, 32], hf = cn && "CompositionEvent" in window, yf = null;
  cn && "documentMode" in document && (yf = document.documentMode);
  var Dh = cn && "TextEvent" in window && !yf, on = cn && (!hf || yf && 8 < yf && 11 >= yf), Oh = " ", tr = !1;
  function mf(l, n) {
    switch (l) {
      case "keyup":
        return R0.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vu = !1;
  function Mh(l, n) {
    switch (l) {
      case "compositionend":
        return Gu(n);
      case "keypress":
        return n.which !== 32 ? null : (tr = !0, Oh);
      case "textInput":
        return l = n.data, l === Oh && tr ? null : l;
      default:
        return null;
    }
  }
  function Vi(l, n) {
    if (Vu)
      return l === "compositionend" || !hf && mf(l, n) ? (l = gh(), _i = jc = eu = null, Vu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return on && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var z0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function lr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!z0[l.type] : n === "textarea";
  }
  function ar(l, n, u, c) {
    Gc ? Vc ? Vc.push(c) : Vc = [c] : Gc = c, n = zo(n, "onChange"), 0 < n.length && (u = new Fs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var ja = null, Qa = null;
  function Uh(l) {
    mc(l, 0);
  }
  function fn(l) {
    var n = tf(l);
    if (xi(n)) return l;
  }
  function xh(l, n) {
    if (l === "change") return n;
  }
  var Hh = !1;
  if (cn) {
    var Xi;
    if (cn) {
      var ji = "oninput" in document;
      if (!ji) {
        var Ch = document.createElement("div");
        Ch.setAttribute("oninput", "return;"), ji = typeof Ch.oninput == "function";
      }
      Xi = ji;
    } else Xi = !1;
    Hh = Xi && (!document.documentMode || 9 < document.documentMode);
  }
  function Qc() {
    ja && (ja.detachEvent("onpropertychange", Nh), Qa = ja = null);
  }
  function Nh(l) {
    if (l.propertyName === "value" && fn(Qa)) {
      var n = [];
      ar(
        n,
        Qa,
        l,
        Ks(l)
      ), Xc(Uh, n);
    }
  }
  function nr(l, n, u) {
    l === "focusin" ? (Qc(), ja = n, Qa = u, ja.attachEvent("onpropertychange", Nh)) : l === "focusout" && Qc();
  }
  function Xu(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return fn(Qa);
  }
  function lu(l, n) {
    if (l === "click") return fn(n);
  }
  function Bh(l, n) {
    if (l === "input" || l === "change")
      return fn(n);
  }
  function _h(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var sl = typeof Object.is == "function" ? Object.is : _h;
  function ju(l, n) {
    if (sl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Gs.call(n, s) || !sl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Qu(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ft(l, n) {
    var u = Qu(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Qu(u);
    }
  }
  function pf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? pf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function qh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = qc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = qc(l.document);
    }
    return n;
  }
  function vf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Qi = cn && "documentMode" in document && 11 >= document.documentMode, sn = null, La = null, Lu = null, Li = !1;
  function ur(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Li || sn == null || sn !== qc(c) || (c = sn, "selectionStart" in c && vf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Lu && ju(Lu, c) || (Lu = c, c = zo(La, "onSelect"), 0 < c.length && (n = new Fs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = sn)));
  }
  function au(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var wi = {
    animationend: au("Animation", "AnimationEnd"),
    animationiteration: au("Animation", "AnimationIteration"),
    animationstart: au("Animation", "AnimationStart"),
    transitionrun: au("Transition", "TransitionRun"),
    transitionstart: au("Transition", "TransitionStart"),
    transitioncancel: au("Transition", "TransitionCancel"),
    transitionend: au("Transition", "TransitionEnd")
  }, Ta = {}, wa = {};
  cn && (wa = document.createElement("div").style, "AnimationEvent" in window || (delete wi.animationend.animation, delete wi.animationiteration.animation, delete wi.animationstart.animation), "TransitionEvent" in window || delete wi.transitionend.transition);
  function rn(l) {
    if (Ta[l]) return Ta[l];
    if (!wi[l]) return l;
    var n = wi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in wa)
        return Ta[l] = n[u];
    return l;
  }
  var D0 = rn("animationend"), Yh = rn("animationiteration"), O0 = rn("animationstart"), Gh = rn("transitionrun"), ir = rn("transitionstart"), M0 = rn("transitioncancel"), Vh = rn("transitionend"), Xh = /* @__PURE__ */ new Map(), Lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Lc.push("scrollEnd");
  function Ea(l, n) {
    Xh.set(l, n), Nu(n, [l]);
  }
  var jh = /* @__PURE__ */ new WeakMap();
  function ia(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = jh.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: hh(n)
      }, jh.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: hh(n)
    };
  }
  var Ql = [], wu = 0, dn = 0;
  function Za() {
    for (var l = wu, n = dn = wu = 0; n < l; ) {
      var u = Ql[n];
      Ql[n++] = null;
      var c = Ql[n];
      Ql[n++] = null;
      var s = Ql[n];
      Ql[n++] = null;
      var r = Ql[n];
      if (Ql[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Zc(u, s, r);
    }
  }
  function Zu(l, n, u, c) {
    Ql[wu++] = l, Ql[wu++] = n, Ql[wu++] = u, Ql[wu++] = c, dn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function wc(l, n, u, c) {
    return Zu(l, n, u, c), gf(l);
  }
  function hn(l, n) {
    return Zu(l, null, null, n), gf(l);
  }
  function Zc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Xl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function gf(l) {
    if (50 < bo)
      throw bo = 0, jy = null, Error(C(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Jc = {};
  function U0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ll(l, n, u, c) {
    return new U0(l, n, u, c);
  }
  function bf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ja(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ll(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Te(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Q(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") bf(l) && (y = 1);
    else if (typeof l == "string")
      y = fp(
        l,
        u,
        Re.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case le:
          return l = Ll(31, u, n, s), l.elementType = le, l.lanes = r, l;
        case ut:
          return Aa(u.children, s, r, n);
        case Bt:
          y = 8, s |= 24;
          break;
        case ke:
          return l = Ll(12, u, n, s | 2), l.elementType = ke, l.lanes = r, l;
        case Sl:
          return l = Ll(13, u, n, s), l.elementType = Sl, l.lanes = r, l;
        case ht:
          return l = Ll(19, u, n, s), l.elementType = ht, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Je:
              case dt:
                y = 10;
                break e;
              case Xt:
                y = 9;
                break e;
              case Wt:
                y = 11;
                break e;
              case Be:
                y = 14;
                break e;
              case Ct:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            C(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ll(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Aa(l, n, u, c) {
    return l = Ll(7, l, c, n), l.lanes = u, l;
  }
  function Kc(l, n, u) {
    return l = Ll(6, l, null, n), l.lanes = u, l;
  }
  function bt(l, n, u) {
    return n = Ll(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Ju = [], Ku = 0, Sf = null, kc = 0, Ra = [], wl = 0, nu = null, Ka = 1, At = "";
  function He(l, n) {
    Ju[Ku++] = kc, Ju[Ku++] = Sf, Sf = l, kc = n;
  }
  function cr(l, n, u) {
    Ra[wl++] = Ka, Ra[wl++] = At, Ra[wl++] = nu, nu = l;
    var c = Ka;
    l = At;
    var s = 32 - Xl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Xl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, Ka = 1 << 32 - Xl(n) + s | u << s | c, At = r + l;
    } else
      Ka = 1 << r | u << s | c, At = l;
  }
  function Zi(l) {
    l.return !== null && (He(l, 1), cr(l, 1, 0));
  }
  function yn(l) {
    for (; l === Sf; )
      Sf = Ju[--Ku], Ju[Ku] = null, kc = Ju[--Ku], Ju[Ku] = null;
    for (; l === nu; )
      nu = Ra[--wl], Ra[wl] = null, At = Ra[--wl], Ra[wl] = null, Ka = Ra[--wl], Ra[wl] = null;
  }
  var Nt = null, Ge = null, qe = !1, za = null, Da = !1, Ji = Error(C(519));
  function uu(l) {
    var n = Error(C(418, ""));
    throw Fc(ia(n, l)), Ji;
  }
  function Tf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[It] = l, n[xl] = c, u) {
      case "dialog":
        pe("cancel", n), pe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        pe("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < is.length; u++)
          pe(is[u], n);
        break;
      case "source":
        pe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        pe("error", n), pe("load", n);
        break;
      case "details":
        pe("toggle", n);
        break;
      case "input":
        pe("invalid", n), Zs(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), qu(n);
        break;
      case "select":
        pe("invalid", n);
        break;
      case "textarea":
        pe("invalid", n), ph(n, c.value, c.defaultValue, c.children), qu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || tm(n.textContent, u) ? (c.popover != null && (pe("beforetoggle", n), pe("toggle", n)), c.onScroll != null && pe("scroll", n), c.onScrollEnd != null && pe("scrollend", n), c.onClick != null && (n.onclick = vd), n = !0) : n = !1, n || uu(l);
  }
  function Qh(l) {
    for (Nt = l.return; Nt; )
      switch (Nt.tag) {
        case 5:
        case 13:
          Da = !1;
          return;
        case 27:
        case 3:
          Da = !0;
          return;
        default:
          Nt = Nt.return;
      }
  }
  function $c(l) {
    if (l !== Nt) return !1;
    if (!qe) return Qh(l), qe = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Bn(l.type, l.memoizedProps)), u = !u), u && Ge && uu(l), Qh(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Ge = Pa(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Ge = null;
      }
    } else
      n === 27 ? (n = Ge, ri(l.type) ? (l = di, di = null, Ge = l) : Ge = n) : Ge = Nt ? Pa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Wc() {
    Ge = Nt = null, qe = !1;
  }
  function Lh() {
    var l = za;
    return l !== null && (Wl === null ? Wl = l : Wl.push.apply(
      Wl,
      l
    ), za = null), l;
  }
  function Fc(l) {
    za === null ? za = [l] : za.push(l);
  }
  var Ef = ee(null), iu = null, ka = null;
  function cu(l, n, u) {
    ce(Ef, n._currentValue), n._currentValue = u;
  }
  function mn(l) {
    l._currentValue = Ef.current, k(Ef);
  }
  function or(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function wh(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (m.context === n[g]) {
              r.lanes |= u, m = r.alternate, m !== null && (m.lanes |= u), or(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(C(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), or(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Ic(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if (s.flags & 524288) r = !0;
        else if (s.flags & 262144) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(C(387));
        if (y = y.memoizedProps, y !== null) {
          var m = s.type;
          sl(s.pendingProps.value, y.value) || (l !== null ? l.push(m) : l = [m]);
        }
      } else if (s === Uu.current) {
        if (y = s.alternate, y === null) throw Error(C(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(ea) : l = [ea]);
      }
      s = s.return;
    }
    l !== null && wh(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Af(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!sl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ku(l) {
    iu = l, ka = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Pt(l) {
    return Zh(iu, l);
  }
  function Rf(l, n) {
    return iu === null && ku(l), Zh(l, n);
  }
  function Zh(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, ka === null) {
      if (l === null) throw Error(C(308));
      ka = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else ka = ka.next = n;
    return u;
  }
  var Pc = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, fr = w.unstable_scheduleCallback, x0 = w.unstable_NormalPriority, wt = {
    $$typeof: dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function eo() {
    return {
      controller: new Pc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pn(l) {
    l.refCount--, l.refCount === 0 && fr(x0, function() {
      l.controller.abort();
    });
  }
  var $u = null, zf = 0, Oa = 0, Zt = null;
  function sr(l, n) {
    if ($u === null) {
      var u = $u = [];
      zf = 0, Oa = yc(), Zt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return zf++, n.then(rr, rr), n;
  }
  function rr() {
    if (--zf === 0 && $u !== null) {
      Zt !== null && (Zt.status = "fulfilled");
      var l = $u;
      $u = null, Oa = 0, Zt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function H0(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var dr = A.S;
  A.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && sr(l, n), dr !== null && dr(l, n);
  };
  var vn = ee(null);
  function Df() {
    var l = vn.current;
    return l !== null ? l : at.pooledCache;
  }
  function Ki(l, n) {
    n === null ? ce(vn, vn.current) : ce(vn, n.pool);
  }
  function hr() {
    var l = Df();
    return l === null ? null : { parent: wt._currentValue, pool: l };
  }
  var Wu = Error(C(460)), yr = Error(C(474)), Of = Error(C(542)), mr = { then: function() {
  } };
  function pr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Mf() {
  }
  function Jh(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Mf, Mf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, kh(l), l;
      default:
        if (typeof n.status == "string") n.then(Mf, Mf);
        else {
          if (l = at, l !== null && 100 < l.shellSuspendCounter)
            throw Error(C(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, kh(l), l;
        }
        throw ki = n, Wu;
    }
  }
  var ki = null;
  function Kh() {
    if (ki === null) throw Error(C(459));
    var l = ki;
    return ki = null, l;
  }
  function kh(l) {
    if (l === Wu || l === Of)
      throw Error(C(483));
  }
  var gn = !1;
  function vr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function gr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Zl(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, we & 2) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = gf(l), Zc(l, null, u), n;
    }
    return Zu(l, c, n, u), gf(l);
  }
  function $i(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Po(l, u);
    }
  }
  function $h(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Wh = !1;
  function to() {
    if (Wh) {
      var l = Zt;
      if (l !== null) throw l;
    }
  }
  function ou(l, n, u, c) {
    Wh = !1;
    var s = l.updateQueue;
    gn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var g = m, D = g.next;
      g.next = null, y === null ? r = D : y.next = D, y = g;
      var G = l.alternate;
      G !== null && (G = G.updateQueue, m = G.lastBaseUpdate, m !== y && (m === null ? G.firstBaseUpdate = D : m.next = D, G.lastBaseUpdate = g));
    }
    if (r !== null) {
      var X = s.baseState;
      y = 0, G = D = g = null, m = r;
      do {
        var M = m.lane & -536870913, x = M !== m.lane;
        if (x ? (Oe & M) === M : (c & M) === M) {
          M !== 0 && M === Oa && (Wh = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var ne = l, ue = m;
            M = n;
            var Xe = u;
            switch (ue.tag) {
              case 1:
                if (ne = ue.payload, typeof ne == "function") {
                  X = ne.call(Xe, X, M);
                  break e;
                }
                X = ne;
                break e;
              case 3:
                ne.flags = ne.flags & -65537 | 128;
              case 0:
                if (ne = ue.payload, M = typeof ne == "function" ? ne.call(Xe, X, M) : ne, M == null) break e;
                X = Ne({}, X, M);
                break e;
              case 2:
                gn = !0;
            }
          }
          M = m.callback, M !== null && (l.flags |= 64, x && (l.flags |= 8192), x = s.callbacks, x === null ? s.callbacks = [M] : x.push(M));
        } else
          x = {
            lane: M,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, G === null ? (D = G = x, g = X) : G = G.next = x, y |= M;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          x = m, m = x.next, x.next = null, s.lastBaseUpdate = x, s.shared.pending = null;
        }
      } while (!0);
      G === null && (g = X), s.baseState = g, s.firstBaseUpdate = D, s.lastBaseUpdate = G, r === null && (s.shared.lanes = 0), mu |= y, l.lanes = y, l.memoizedState = X;
    }
  }
  function br(l, n) {
    if (typeof l != "function")
      throw Error(C(191, l));
    l.call(n);
  }
  function Uf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        br(u[l], n);
  }
  var Wi = ee(null), xf = ee(0);
  function el(l, n) {
    l = yu, ce(xf, l), ce(Wi, n), yu = l | n.baseLanes;
  }
  function lo() {
    ce(xf, yu), ce(Wi, Wi.current);
  }
  function ao() {
    yu = xf.current, k(Wi), k(xf);
  }
  var Ma = 0, me = null, Le = null, St = null, Hf = !1, ca = !1, Fu = !1, $a = 0, oa = 0, fu = null, Fh = 0;
  function Tt() {
    throw Error(C(321));
  }
  function Sr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!sl(l[u], n[u])) return !1;
    return !0;
  }
  function Tr(l, n, u, c, s, r) {
    return Ma = r, me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = l === null || l.memoizedState === null ? dy : hy, Fu = !1, r = u(c, s), Fu = !1, ca && (r = Ih(
      n,
      u,
      c,
      s
    )), Iu(l), r;
  }
  function Iu(l) {
    A.H = Gr;
    var n = Le !== null && Le.next !== null;
    if (Ma = 0, St = Le = me = null, Hf = !1, oa = 0, fu = null, n) throw Error(C(300));
    l === null || Jt || (l = l.dependencies, l !== null && Af(l) && (Jt = !0));
  }
  function Ih(l, n, u, c) {
    me = l;
    var s = 0;
    do {
      if (ca && (fu = null), oa = 0, ca = !1, 25 <= s) throw Error(C(301));
      if (s += 1, St = Le = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      A.H = su, r = n(u, c);
    } while (ca);
    return r;
  }
  function C0() {
    var l = A.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Nf(n) : n, l = l.useState()[0], (Le !== null ? Le.memoizedState : null) !== l && (me.flags |= 1024), n;
  }
  function Er() {
    var l = $a !== 0;
    return $a = 0, l;
  }
  function no(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ar(l) {
    if (Hf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Hf = !1;
    }
    Ma = 0, St = Le = me = null, ca = !1, oa = $a = 0, fu = null;
  }
  function El() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return St === null ? me.memoizedState = St = l : St = St.next = l, St;
  }
  function Rt() {
    if (Le === null) {
      var l = me.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Le.next;
    var n = St === null ? me.memoizedState : St.next;
    if (n !== null)
      St = n, Le = l;
    else {
      if (l === null)
        throw me.alternate === null ? Error(C(467)) : Error(C(310));
      Le = l, l = {
        memoizedState: Le.memoizedState,
        baseState: Le.baseState,
        baseQueue: Le.baseQueue,
        queue: Le.queue,
        next: null
      }, St === null ? me.memoizedState = St = l : St = St.next = l;
    }
    return St;
  }
  function Cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Nf(l) {
    var n = oa;
    return oa += 1, fu === null && (fu = []), l = Jh(fu, l, n), n = me, (St === null ? n.memoizedState : St.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? dy : hy), l;
  }
  function _t(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Nf(l);
      if (l.$$typeof === dt) return Pt(l);
    }
    throw Error(C(438, String(l)));
  }
  function Rr(l) {
    var n = null, u = me.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = me.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Cf(), me.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = ot;
    return n.index++, u;
  }
  function Sn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Bf(l) {
    var n = Rt();
    return zr(n, Le, l);
  }
  function zr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(C(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var m = y = null, g = null, D = n, G = !1;
      do {
        var X = D.lane & -536870913;
        if (X !== D.lane ? (Oe & X) === X : (Ma & X) === X) {
          var M = D.revertLane;
          if (M === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), X === Oa && (G = !0);
          else if ((Ma & M) === M) {
            D = D.next, M === Oa && (G = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, g === null ? (m = g = X, y = r) : g = g.next = X, me.lanes |= M, mu |= M;
          X = D.action, Fu && u(r, X), r = D.hasEagerState ? D.eagerState : u(r, X);
        } else
          M = {
            lane: X,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, g === null ? (m = g = M, y = r) : g = g.next = M, me.lanes |= X, mu |= X;
        D = D.next;
      } while (D !== null && D !== n);
      if (g === null ? y = r : g.next = m, !sl(r, l.memoizedState) && (Jt = !0, G && (u = Zt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = g, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Dr(l) {
    var n = Rt(), u = n.queue;
    if (u === null) throw Error(C(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      sl(r, n.memoizedState) || (Jt = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function _f(l, n, u) {
    var c = me, s = Rt(), r = qe;
    if (r) {
      if (u === void 0) throw Error(C(407));
      u = u();
    } else u = n();
    var y = !sl(
      (Le || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, Jt = !0), s = s.queue;
    var m = ey.bind(null, c, s, l);
    if (Fe(2048, 8, m, [l]), s.getSnapshot !== n || y || St !== null && St.memoizedState.tag & 1) {
      if (c.flags |= 2048, Jl(
        9,
        Gf(),
        Ph.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), at === null) throw Error(C(349));
      r || Ma & 124 || Or(c, n, u);
    }
    return u;
  }
  function Or(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = me.updateQueue, n === null ? (n = Cf(), me.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Ph(l, n, u, c) {
    n.value = u, n.getSnapshot = c, ty(n) && Mr(l);
  }
  function ey(l, n, u) {
    return u(function() {
      ty(n) && Mr(l);
    });
  }
  function ty(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !sl(l, u);
    } catch {
      return !0;
    }
  }
  function Mr(l) {
    var n = hn(l, 2);
    n !== null && ra(n, l, 2);
  }
  function qf(l) {
    var n = El();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Fu) {
        $n(!0);
        try {
          u();
        } finally {
          $n(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sn,
      lastRenderedState: l
    }, n;
  }
  function Ur(l, n, u, c) {
    return l.baseState = u, zr(
      l,
      Le,
      typeof c == "function" ? c : Sn
    );
  }
  function N0(l, n, u, c, s) {
    if (ec(l)) throw Error(C(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      A.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, xr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function xr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = A.T, y = {};
      A.T = y;
      try {
        var m = u(s, c), g = A.S;
        g !== null && g(y, m), Yf(l, n, m);
      } catch (D) {
        Cr(l, n, D);
      } finally {
        A.T = r;
      }
    } else
      try {
        r = u(s, c), Yf(l, n, r);
      } catch (D) {
        Cr(l, n, D);
      }
  }
  function Yf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Hr(l, n, c);
      },
      function(c) {
        return Cr(l, n, c);
      }
    ) : Hr(l, n, u);
  }
  function Hr(l, n, u) {
    n.status = "fulfilled", n.value = u, ly(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, xr(l, u)));
  }
  function Cr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, ly(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function ly(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Nr(l, n) {
    return n;
  }
  function ay(l, n) {
    if (qe) {
      var u = at.formState;
      if (u !== null) {
        e: {
          var c = me;
          if (qe) {
            if (Ge) {
              t: {
                for (var s = Ge, r = Da; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Pa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Ge = Pa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            uu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = El(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: n
    }, u.queue = c, u = sy.bind(
      null,
      me,
      c
    ), c.dispatch = u, c = qf(!1), r = jf.bind(
      null,
      me,
      !1,
      c.queue
    ), c = El(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = N0.bind(
      null,
      me,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Tn(l) {
    var n = Rt();
    return Br(n, Le, l);
  }
  function Br(l, n, u) {
    if (n = zr(
      l,
      n,
      Nr
    )[0], l = Bf(Sn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Nf(n);
      } catch (y) {
        throw y === Wu ? Of : y;
      }
    else c = n;
    n = Rt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (me.flags |= 2048, Jl(
      9,
      Gf(),
      rv.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function rv(l, n) {
    l.action = n;
  }
  function _r(l) {
    var n = Rt(), u = Le;
    if (u !== null)
      return Br(n, u, l);
    Rt(), n = n.memoizedState, u = Rt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Jl(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = me.updateQueue, n === null && (n = Cf(), me.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Gf() {
    return { destroy: void 0, resource: void 0 };
  }
  function Vf() {
    return Rt().memoizedState;
  }
  function Pu(l, n, u, c) {
    var s = El();
    c = c === void 0 ? null : c, me.flags |= l, s.memoizedState = Jl(
      1 | n,
      Gf(),
      u,
      c
    );
  }
  function Fe(l, n, u, c) {
    var s = Rt();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Le !== null && c !== null && Sr(c, Le.memoizedState.deps) ? s.memoizedState = Jl(n, r, u, c) : (me.flags |= l, s.memoizedState = Jl(
      1 | n,
      r,
      u,
      c
    ));
  }
  function B0(l, n) {
    Pu(8390656, 8, l, n);
  }
  function _0(l, n) {
    Fe(2048, 8, l, n);
  }
  function ny(l, n) {
    return Fe(4, 2, l, n);
  }
  function Wa(l, n) {
    return Fe(4, 4, l, n);
  }
  function uy(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function qr(l, n, u) {
    u = u != null ? u.concat([l]) : null, Fe(4, 4, uy.bind(null, n, l), u);
  }
  function Fi() {
  }
  function Ii(l, n) {
    var u = Rt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Sr(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function iy(l, n) {
    var u = Rt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Sr(n, c[1]))
      return c[0];
    if (c = l(), Fu) {
      $n(!0);
      try {
        l();
      } finally {
        $n(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Xf(l, n, u) {
    return u === void 0 || Ma & 1073741824 ? l.memoizedState = n : (l.memoizedState = u, l = Qy(), me.lanes |= l, mu |= l, u);
  }
  function cy(l, n, u, c) {
    return sl(u, n) ? u : Wi.current !== null ? (l = Xf(l, u, c), sl(l, n) || (Jt = !0), l) : Ma & 42 ? (l = Qy(), me.lanes |= l, mu |= l, n) : (Jt = !0, l.memoizedState = u);
  }
  function q0(l, n, u, c, s) {
    var r = j.p;
    j.p = r !== 0 && 8 > r ? r : 8;
    var y = A.T, m = {};
    A.T = m, jf(l, !1, n, u);
    try {
      var g = s(), D = A.S;
      if (D !== null && D(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var G = H0(
          g,
          c
        );
        Pi(
          l,
          n,
          G,
          sa(l)
        );
      } else
        Pi(
          l,
          n,
          c,
          sa(l)
        );
    } catch (X) {
      Pi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        sa()
      );
    } finally {
      j.p = r, A.T = y;
    }
  }
  function dv() {
  }
  function Yr(l, n, u, c) {
    if (l.tag !== 5) throw Error(C(476));
    var s = Y0(l).queue;
    q0(
      l,
      s,
      n,
      L,
      u === null ? dv : function() {
        return uo(l), u(c);
      }
    );
  }
  function Y0(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: L,
      baseState: L,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: L
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function uo(l) {
    var n = Y0(l).next.queue;
    Pi(l, n, {}, sa());
  }
  function Ua() {
    return Pt(ea);
  }
  function oy() {
    return Rt().memoizedState;
  }
  function G0() {
    return Rt().memoizedState;
  }
  function V0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = sa();
          l = Zl(u);
          var c = bn(n, l, u);
          c !== null && (ra(c, n, u), $i(c, n, u)), n = { cache: eo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function fy(l, n, u) {
    var c = sa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ec(l) ? X0(n, u) : (u = wc(l, n, u, c), u !== null && (ra(u, l, c), ry(u, n, c)));
  }
  function sy(l, n, u) {
    var c = sa();
    Pi(l, n, u, c);
  }
  function Pi(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ec(l)) X0(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, m = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = m, sl(m, y))
            return Zu(l, n, s, 0), at === null && Za(), !1;
        } catch {
        } finally {
        }
      if (u = wc(l, n, s, c), u !== null)
        return ra(u, l, c), ry(u, n, c), !0;
    }
    return !1;
  }
  function jf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: yc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ec(l)) {
      if (n) throw Error(C(479));
    } else
      n = wc(
        l,
        u,
        c,
        2
      ), n !== null && ra(n, l, 2);
  }
  function ec(l) {
    var n = l.alternate;
    return l === me || n !== null && n === me;
  }
  function X0(l, n) {
    ca = Hf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ry(l, n, u) {
    if (u & 4194048) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Po(l, u);
    }
  }
  var Gr = {
    readContext: Pt,
    use: _t,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useLayoutEffect: Tt,
    useInsertionEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    useHostTransitionStatus: Tt,
    useFormState: Tt,
    useActionState: Tt,
    useOptimistic: Tt,
    useMemoCache: Tt,
    useCacheRefresh: Tt
  }, dy = {
    readContext: Pt,
    use: _t,
    useCallback: function(l, n) {
      return El().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Pt,
    useEffect: B0,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Pu(
        4194308,
        4,
        uy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Pu(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Pu(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = El();
      n = n === void 0 ? null : n;
      var c = l();
      if (Fu) {
        $n(!0);
        try {
          l();
        } finally {
          $n(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = El();
      if (u !== void 0) {
        var s = u(n);
        if (Fu) {
          $n(!0);
          try {
            u(n);
          } finally {
            $n(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = fy.bind(
        null,
        me,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = El();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = qf(l);
      var n = l.queue, u = sy.bind(null, me, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, n) {
      var u = El();
      return Xf(u, l, n);
    },
    useTransition: function() {
      var l = qf(!1);
      return l = q0.bind(
        null,
        me,
        l.queue,
        !0,
        !1
      ), El().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = me, s = El();
      if (qe) {
        if (u === void 0)
          throw Error(C(407));
        u = u();
      } else {
        if (u = n(), at === null)
          throw Error(C(349));
        Oe & 124 || Or(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, B0(ey.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Jl(
        9,
        Gf(),
        Ph.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = El(), n = at.identifierPrefix;
      if (qe) {
        var u = At, c = Ka;
        u = (c & ~(1 << 32 - Xl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = $a++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = Fh++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ua,
    useFormState: ay,
    useActionState: ay,
    useOptimistic: function(l) {
      var n = El();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = jf.bind(
        null,
        me,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return El().memoizedState = V0.bind(
        null,
        me
      );
    }
  }, hy = {
    readContext: Pt,
    use: _t,
    useCallback: Ii,
    useContext: Pt,
    useEffect: _0,
    useImperativeHandle: qr,
    useInsertionEffect: ny,
    useLayoutEffect: Wa,
    useMemo: iy,
    useReducer: Bf,
    useRef: Vf,
    useState: function() {
      return Bf(Sn);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, n) {
      var u = Rt();
      return cy(
        u,
        Le.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Bf(Sn)[0], n = Rt().memoizedState;
      return [
        typeof l == "boolean" ? l : Nf(l),
        n
      ];
    },
    useSyncExternalStore: _f,
    useId: oy,
    useHostTransitionStatus: Ua,
    useFormState: Tn,
    useActionState: Tn,
    useOptimistic: function(l, n) {
      var u = Rt();
      return Ur(u, Le, l, n);
    },
    useMemoCache: Rr,
    useCacheRefresh: G0
  }, su = {
    readContext: Pt,
    use: _t,
    useCallback: Ii,
    useContext: Pt,
    useEffect: _0,
    useImperativeHandle: qr,
    useInsertionEffect: ny,
    useLayoutEffect: Wa,
    useMemo: iy,
    useReducer: Dr,
    useRef: Vf,
    useState: function() {
      return Dr(Sn);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, n) {
      var u = Rt();
      return Le === null ? Xf(u, l, n) : cy(
        u,
        Le.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dr(Sn)[0], n = Rt().memoizedState;
      return [
        typeof l == "boolean" ? l : Nf(l),
        n
      ];
    },
    useSyncExternalStore: _f,
    useId: oy,
    useHostTransitionStatus: Ua,
    useFormState: _r,
    useActionState: _r,
    useOptimistic: function(l, n) {
      var u = Rt();
      return Le !== null ? Ur(u, Le, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: G0
  }, tc = null, io = 0;
  function Vr(l) {
    var n = io;
    return io += 1, tc === null && (tc = []), Jh(tc, l, n);
  }
  function lc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Al(l, n) {
    throw n.$$typeof === Ye ? Error(C(525)) : (l = Object.prototype.toString.call(n), Error(
      C(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function yy(l) {
    var n = l._init;
    return n(l._payload);
  }
  function Kl(l) {
    function n(R, E) {
      if (l) {
        var z = R.deletions;
        z === null ? (R.deletions = [E], R.flags |= 16) : z.push(E);
      }
    }
    function u(R, E) {
      if (!l) return null;
      for (; E !== null; )
        n(R, E), E = E.sibling;
      return null;
    }
    function c(R) {
      for (var E = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? E.set(R.key, R) : E.set(R.index, R), R = R.sibling;
      return E;
    }
    function s(R, E) {
      return R = Ja(R, E), R.index = 0, R.sibling = null, R;
    }
    function r(R, E, z) {
      return R.index = z, l ? (z = R.alternate, z !== null ? (z = z.index, z < E ? (R.flags |= 67108866, E) : z) : (R.flags |= 67108866, E)) : (R.flags |= 1048576, E);
    }
    function y(R) {
      return l && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, E, z, V) {
      return E === null || E.tag !== 6 ? (E = Kc(z, R.mode, V), E.return = R, E) : (E = s(E, z), E.return = R, E);
    }
    function g(R, E, z, V) {
      var W = z.type;
      return W === ut ? G(
        R,
        E,
        z.props.children,
        V,
        z.key
      ) : E !== null && (E.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ct && yy(W) === E.type) ? (E = s(E, z.props), lc(E, z), E.return = R, E) : (E = Q(
        z.type,
        z.key,
        z.props,
        null,
        R.mode,
        V
      ), lc(E, z), E.return = R, E);
    }
    function D(R, E, z, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = bt(z, R.mode, V), E.return = R, E) : (E = s(E, z.children || []), E.return = R, E);
    }
    function G(R, E, z, V, W) {
      return E === null || E.tag !== 7 ? (E = Aa(
        z,
        R.mode,
        V,
        W
      ), E.return = R, E) : (E = s(E, z), E.return = R, E);
    }
    function X(R, E, z) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Kc(
          "" + E,
          R.mode,
          z
        ), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case de:
            return z = Q(
              E.type,
              E.key,
              E.props,
              null,
              R.mode,
              z
            ), lc(z, E), z.return = R, z;
          case tt:
            return E = bt(
              E,
              R.mode,
              z
            ), E.return = R, E;
          case Ct:
            var V = E._init;
            return E = V(E._payload), X(R, E, z);
        }
        if (lt(E) || te(E))
          return E = Aa(
            E,
            R.mode,
            z,
            null
          ), E.return = R, E;
        if (typeof E.then == "function")
          return X(R, Vr(E), z);
        if (E.$$typeof === dt)
          return X(
            R,
            Rf(R, E),
            z
          );
        Al(R, E);
      }
      return null;
    }
    function M(R, E, z, V) {
      var W = E !== null ? E.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return W !== null ? null : m(R, E, "" + z, V);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case de:
            return z.key === W ? g(R, E, z, V) : null;
          case tt:
            return z.key === W ? D(R, E, z, V) : null;
          case Ct:
            return W = z._init, z = W(z._payload), M(R, E, z, V);
        }
        if (lt(z) || te(z))
          return W !== null ? null : G(R, E, z, V, null);
        if (typeof z.then == "function")
          return M(
            R,
            E,
            Vr(z),
            V
          );
        if (z.$$typeof === dt)
          return M(
            R,
            E,
            Rf(R, z),
            V
          );
        Al(R, z);
      }
      return null;
    }
    function x(R, E, z, V, W) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return R = R.get(z) || null, m(E, R, "" + V, W);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case de:
            return R = R.get(
              V.key === null ? z : V.key
            ) || null, g(E, R, V, W);
          case tt:
            return R = R.get(
              V.key === null ? z : V.key
            ) || null, D(E, R, V, W);
          case Ct:
            var Ee = V._init;
            return V = Ee(V._payload), x(
              R,
              E,
              z,
              V,
              W
            );
        }
        if (lt(V) || te(V))
          return R = R.get(z) || null, G(E, R, V, W, null);
        if (typeof V.then == "function")
          return x(
            R,
            E,
            z,
            Vr(V),
            W
          );
        if (V.$$typeof === dt)
          return x(
            R,
            E,
            z,
            Rf(E, V),
            W
          );
        Al(E, V);
      }
      return null;
    }
    function ne(R, E, z, V) {
      for (var W = null, Ee = null, ae = E, fe = E = 0, al = null; ae !== null && fe < z.length; fe++) {
        ae.index > fe ? (al = ae, ae = null) : al = ae.sibling;
        var _e = M(
          R,
          ae,
          z[fe],
          V
        );
        if (_e === null) {
          ae === null && (ae = al);
          break;
        }
        l && ae && _e.alternate === null && n(R, ae), E = r(_e, E, fe), Ee === null ? W = _e : Ee.sibling = _e, Ee = _e, ae = al;
      }
      if (fe === z.length)
        return u(R, ae), qe && He(R, fe), W;
      if (ae === null) {
        for (; fe < z.length; fe++)
          ae = X(R, z[fe], V), ae !== null && (E = r(
            ae,
            E,
            fe
          ), Ee === null ? W = ae : Ee.sibling = ae, Ee = ae);
        return qe && He(R, fe), W;
      }
      for (ae = c(ae); fe < z.length; fe++)
        al = x(
          ae,
          R,
          fe,
          z[fe],
          V
        ), al !== null && (l && al.alternate !== null && ae.delete(
          al.key === null ? fe : al.key
        ), E = r(
          al,
          E,
          fe
        ), Ee === null ? W = al : Ee.sibling = al, Ee = al);
      return l && ae.forEach(function(vi) {
        return n(R, vi);
      }), qe && He(R, fe), W;
    }
    function ue(R, E, z, V) {
      if (z == null) throw Error(C(151));
      for (var W = null, Ee = null, ae = E, fe = E = 0, al = null, _e = z.next(); ae !== null && !_e.done; fe++, _e = z.next()) {
        ae.index > fe ? (al = ae, ae = null) : al = ae.sibling;
        var vi = M(R, ae, _e.value, V);
        if (vi === null) {
          ae === null && (ae = al);
          break;
        }
        l && ae && vi.alternate === null && n(R, ae), E = r(vi, E, fe), Ee === null ? W = vi : Ee.sibling = vi, Ee = vi, ae = al;
      }
      if (_e.done)
        return u(R, ae), qe && He(R, fe), W;
      if (ae === null) {
        for (; !_e.done; fe++, _e = z.next())
          _e = X(R, _e.value, V), _e !== null && (E = r(_e, E, fe), Ee === null ? W = _e : Ee.sibling = _e, Ee = _e);
        return qe && He(R, fe), W;
      }
      for (ae = c(ae); !_e.done; fe++, _e = z.next())
        _e = x(ae, R, fe, _e.value, V), _e !== null && (l && _e.alternate !== null && ae.delete(_e.key === null ? fe : _e.key), E = r(_e, E, fe), Ee === null ? W = _e : Ee.sibling = _e, Ee = _e);
      return l && ae.forEach(function(Rv) {
        return n(R, Rv);
      }), qe && He(R, fe), W;
    }
    function Xe(R, E, z, V) {
      if (typeof z == "object" && z !== null && z.type === ut && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case de:
            e: {
              for (var W = z.key; E !== null; ) {
                if (E.key === W) {
                  if (W = z.type, W === ut) {
                    if (E.tag === 7) {
                      u(
                        R,
                        E.sibling
                      ), V = s(
                        E,
                        z.props.children
                      ), V.return = R, R = V;
                      break e;
                    }
                  } else if (E.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ct && yy(W) === E.type) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, z.props), lc(V, z), V.return = R, R = V;
                    break e;
                  }
                  u(R, E);
                  break;
                } else n(R, E);
                E = E.sibling;
              }
              z.type === ut ? (V = Aa(
                z.props.children,
                R.mode,
                V,
                z.key
              ), V.return = R, R = V) : (V = Q(
                z.type,
                z.key,
                z.props,
                null,
                R.mode,
                V
              ), lc(V, z), V.return = R, R = V);
            }
            return y(R);
          case tt:
            e: {
              for (W = z.key; E !== null; ) {
                if (E.key === W)
                  if (E.tag === 4 && E.stateNode.containerInfo === z.containerInfo && E.stateNode.implementation === z.implementation) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, z.children || []), V.return = R, R = V;
                    break e;
                  } else {
                    u(R, E);
                    break;
                  }
                else n(R, E);
                E = E.sibling;
              }
              V = bt(z, R.mode, V), V.return = R, R = V;
            }
            return y(R);
          case Ct:
            return W = z._init, z = W(z._payload), Xe(
              R,
              E,
              z,
              V
            );
        }
        if (lt(z))
          return ne(
            R,
            E,
            z,
            V
          );
        if (te(z)) {
          if (W = te(z), typeof W != "function") throw Error(C(150));
          return z = W.call(z), ue(
            R,
            E,
            z,
            V
          );
        }
        if (typeof z.then == "function")
          return Xe(
            R,
            E,
            Vr(z),
            V
          );
        if (z.$$typeof === dt)
          return Xe(
            R,
            E,
            Rf(R, z),
            V
          );
        Al(R, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, E !== null && E.tag === 6 ? (u(R, E.sibling), V = s(E, z), V.return = R, R = V) : (u(R, E), V = Kc(z, R.mode, V), V.return = R, R = V), y(R)) : u(R, E);
    }
    return function(R, E, z, V) {
      try {
        io = 0;
        var W = Xe(
          R,
          E,
          z,
          V
        );
        return tc = null, W;
      } catch (ae) {
        if (ae === Wu || ae === Of) throw ae;
        var Ee = Ll(29, ae, null, R.mode);
        return Ee.lanes = V, Ee.return = R, Ee;
      } finally {
      }
    };
  }
  var ac = Kl(!0), En = Kl(!1), fa = ee(null), Rl = null;
  function ru(l) {
    var n = l.alternate;
    ce(Ie, Ie.current & 1), ce(fa, l), Rl === null && (n === null || Wi.current !== null || n.memoizedState !== null) && (Rl = l);
  }
  function An(l) {
    if (l.tag === 22) {
      if (ce(Ie, Ie.current), ce(fa, l), Rl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Rl = l);
      }
    } else Rn();
  }
  function Rn() {
    ce(Ie, Ie.current), ce(fa, fa.current);
  }
  function Fa(l) {
    k(fa), Rl === l && (Rl = null), k(Ie);
  }
  var Ie = ee(0);
  function Qf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || rs(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ei(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Ne({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Xr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = sa(), s = Zl(c);
      s.payload = n, u != null && (s.callback = u), n = bn(l, s, c), n !== null && (ra(n, l, c), $i(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = sa(), s = Zl(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = bn(l, s, c), n !== null && (ra(n, l, c), $i(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = sa(), c = Zl(u);
      c.tag = 2, n != null && (c.callback = n), n = bn(l, c, u), n !== null && (ra(n, l, u), $i(n, l, u));
    }
  };
  function co(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !ju(u, c) || !ju(s, r) : !0;
  }
  function nc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Xr.enqueueReplaceState(n, n.state, null);
  }
  function ti(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Ne({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Lf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function oo(l) {
    Lf(l);
  }
  function my(l) {
    console.error(l);
  }
  function wf(l) {
    Lf(l);
  }
  function Zf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function py(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function vy(l, n, u) {
    return u = Zl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Zf(l, n);
    }, u;
  }
  function gy(l) {
    return l = Zl(l), l.tag = 3, l;
  }
  function kl(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        py(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      py(n, u, c), typeof s != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this));
      var m = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function j0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Ic(
        n,
        u,
        s,
        !0
      ), u = fa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Rl === null ? hc() : u.alternate === null && Mt === 0 && (Mt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === mr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), dd(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === mr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), dd(l, c, s)), !1;
        }
        throw Error(C(435, u.tag));
      }
      return dd(l, c, s), hc(), !1;
    }
    if (qe)
      return n = fa.current, n !== null ? (!(n.flags & 65536) && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Ji && (l = Error(C(422), { cause: c }), Fc(ia(l, u)))) : (c !== Ji && (n = Error(C(423), {
        cause: c
      }), Fc(
        ia(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = ia(c, u), s = vy(
        l.stateNode,
        c,
        s
      ), $h(l, s), Mt !== 4 && (Mt = 2)), !1;
    var r = Error(C(520), { cause: c });
    if (r = ia(r, u), po === null ? po = [r] : po.push(r), Mt !== 4 && (Mt = 2), n === null) return !0;
    c = ia(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = vy(u.stateNode, c, l), $h(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ui === null || !ui.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = gy(s), kl(
              s,
              l,
              u,
              c
            ), $h(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var zt = Error(C(461)), Jt = !1;
  function tl(l, n, u, c) {
    n.child = l === null ? En(n, null, u, c) : ac(
      n,
      l.child,
      u,
      c
    );
  }
  function Q0(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var m in c)
        m !== "ref" && (y[m] = c[m]);
    } else y = c;
    return ku(n), c = Tr(
      l,
      n,
      u,
      y,
      r,
      s
    ), m = Er(), l !== null && !Jt ? (no(l, n, s), zn(l, n, s)) : (qe && m && Zi(n), n.flags |= 1, tl(l, n, c, s), n.child);
  }
  function du(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !bf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, uc(
        l,
        n,
        r,
        c,
        s
      )) : (l = Q(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Wr(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ju, u(y, c) && l.ref === n.ref)
        return zn(l, n, s);
    }
    return n.flags |= 1, l = Ja(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function uc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ju(r, c) && l.ref === n.ref)
        if (Jt = !1, n.pendingProps = c = r, Wr(l, s))
          l.flags & 131072 && (Jt = !0);
        else
          return n.lanes = l.lanes, zn(l, n, s);
    }
    return Qr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function jr(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if (n.flags & 128) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return ic(
          l,
          n,
          c,
          u
        );
      }
      if (u & 536870912)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ki(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? el(n, r) : lo(), An(n);
      else
        return n.lanes = n.childLanes = 536870912, ic(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Ki(n, r.cachePool), el(n, r), Rn(), n.memoizedState = null) : (l !== null && Ki(n, null), lo(), Rn());
    return tl(l, n, s, u), n.child;
  }
  function ic(l, n, u, c) {
    var s = Df();
    return s = s === null ? null : { parent: wt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Ki(n, null), lo(), An(n), l !== null && Ic(l, n, c, !0), null;
  }
  function Jf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(C(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qr(l, n, u, c, s) {
    return ku(n), u = Tr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Er(), l !== null && !Jt ? (no(l, n, s), zn(l, n, s)) : (qe && c && Zi(n), n.flags |= 1, tl(l, n, u, s), n.child);
  }
  function by(l, n, u, c, s, r) {
    return ku(n), n.updateQueue = null, u = Ih(
      n,
      c,
      u,
      s
    ), Iu(l), c = Er(), l !== null && !Jt ? (no(l, n, r), zn(l, n, r)) : (qe && c && Zi(n), n.flags |= 1, tl(l, n, u, r), n.child);
  }
  function Lr(l, n, u, c, s) {
    if (ku(n), n.stateNode === null) {
      var r = Jc, y = u.contextType;
      typeof y == "object" && y !== null && (r = Pt(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, vr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? Pt(y) : Jc, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (ei(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Xr.enqueueReplaceState(r, r.state, null), ou(n, c, r, s), to(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var m = n.memoizedProps, g = ti(u, m);
      r.props = g;
      var D = r.context, G = u.contextType;
      y = Jc, typeof G == "object" && G !== null && (y = Pt(G));
      var X = u.getDerivedStateFromProps;
      G = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = n.pendingProps !== m, G || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || D !== y) && nc(
        n,
        r,
        c,
        y
      ), gn = !1;
      var M = n.memoizedState;
      r.state = M, ou(n, c, r, s), to(), D = n.memoizedState, m || M !== D || gn ? (typeof X == "function" && (ei(
        n,
        u,
        X,
        c
      ), D = n.memoizedState), (g = gn || co(
        n,
        u,
        g,
        c,
        M,
        D,
        y
      )) ? (G || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = D), r.props = c, r.state = D, r.context = y, c = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, gr(l, n), y = n.memoizedProps, G = ti(u, y), r.props = G, X = n.pendingProps, M = r.context, D = u.contextType, g = Jc, typeof D == "object" && D !== null && (g = Pt(D)), m = u.getDerivedStateFromProps, (D = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== X || M !== g) && nc(
        n,
        r,
        c,
        g
      ), gn = !1, M = n.memoizedState, r.state = M, ou(n, c, r, s), to();
      var x = n.memoizedState;
      y !== X || M !== x || gn || l !== null && l.dependencies !== null && Af(l.dependencies) ? (typeof m == "function" && (ei(
        n,
        u,
        m,
        c
      ), x = n.memoizedState), (G = gn || co(
        n,
        u,
        G,
        c,
        M,
        x,
        g
      ) || l !== null && l.dependencies !== null && Af(l.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, x, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        x,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = x), r.props = c, r.state = x, r.context = g, c = G) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Jf(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = ac(
      n,
      l.child,
      null,
      s
    ), n.child = ac(
      n,
      null,
      u,
      s
    )) : tl(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = zn(
      l,
      n,
      s
    ), l;
  }
  function wr(l, n, u, c) {
    return Wc(), n.flags |= 256, tl(l, n, u, c), n.child;
  }
  var Zr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Sy(l) {
    return { baseLanes: l, cachePool: hr() };
  }
  function Ty(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ca), l;
  }
  function Ey(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (Ie.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (qe) {
        if (s ? ru(n) : Rn(), qe) {
          var m = Ge, g;
          if (g = m) {
            e: {
              for (g = m, m = Da; g.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (g = Pa(
                  g.nextSibling
                ), g === null) {
                  m = null;
                  break e;
                }
              }
              m = g;
            }
            m !== null ? (n.memoizedState = {
              dehydrated: m,
              treeContext: nu !== null ? { id: Ka, overflow: At } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = Ll(
              18,
              null,
              null,
              0
            ), g.stateNode = m, g.return = n, n.child = g, Nt = n, Ge = null, g = !0) : g = !1;
          }
          g || uu(n);
        }
        if (m = n.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return rs(m) ? n.lanes = 32 : n.lanes = 536870912, null;
        Fa(n);
      }
      return m = c.children, c = c.fallback, s ? (Rn(), s = n.mode, m = Kr(
        { mode: "hidden", children: m },
        s
      ), c = Aa(
        c,
        s,
        u,
        null
      ), m.return = n, c.return = n, m.sibling = c, n.child = m, s = n.child, s.memoizedState = Sy(u), s.childLanes = Ty(
        l,
        y,
        u
      ), n.memoizedState = Zr, c) : (ru(n), Jr(n, m));
    }
    if (g = l.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
      if (r)
        n.flags & 256 ? (ru(n), n.flags &= -257, n = li(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Rn(), n.child = l.child, n.flags |= 128, n = null) : (Rn(), s = c.fallback, m = n.mode, c = Kr(
          { mode: "visible", children: c.children },
          m
        ), s = Aa(
          s,
          m,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, ac(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Sy(u), c.childLanes = Ty(
          l,
          y,
          u
        ), n.memoizedState = Zr, n = s);
      else if (ru(n), rs(m)) {
        if (y = m.nextSibling && m.nextSibling.dataset, y) var D = y.dgst;
        y = D, c = Error(C(419)), c.stack = "", c.digest = y, Fc({ value: c, source: null, stack: null }), n = li(
          l,
          n,
          u
        );
      } else if (Jt || Ic(l, n, u, !1), y = (u & l.childLanes) !== 0, Jt || y) {
        if (y = at, y !== null && (c = u & -u, c = c & 42 ? 1 : Va(c), c = c & (y.suspendedLanes | u) ? 0 : c, c !== 0 && c !== g.retryLane))
          throw g.retryLane = c, hn(l, c), ra(y, l, c), zt;
        m.data === "$?" || hc(), n = li(
          l,
          n,
          u
        );
      } else
        m.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = g.treeContext, Ge = Pa(
          m.nextSibling
        ), Nt = n, qe = !0, za = null, Da = !1, l !== null && (Ra[wl++] = Ka, Ra[wl++] = At, Ra[wl++] = nu, Ka = l.id, At = l.overflow, nu = n), n = Jr(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Rn(), s = c.fallback, m = n.mode, g = l.child, D = g.sibling, c = Ja(g, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = g.subtreeFlags & 65011712, D !== null ? s = Ja(D, s) : (s = Aa(
      s,
      m,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, m = l.child.memoizedState, m === null ? m = Sy(u) : (g = m.cachePool, g !== null ? (D = wt._currentValue, g = g.parent !== D ? { parent: D, pool: D } : g) : g = hr(), m = {
      baseLanes: m.baseLanes | u,
      cachePool: g
    }), s.memoizedState = m, s.childLanes = Ty(
      l,
      y,
      u
    ), n.memoizedState = Zr, c) : (ru(n), u = l.child, l = u.sibling, u = Ja(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Jr(l, n) {
    return n = Kr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Kr(l, n) {
    return l = Ll(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function li(l, n, u) {
    return ac(n, l.child, null, u), l = Jr(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Kf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), or(l.return, n, u);
  }
  function kr(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function $r(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (tl(l, n, c.children, u), c = Ie.current, c & 2)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && l.flags & 128)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Kf(l, u, n);
          else if (l.tag === 19)
            Kf(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (ce(Ie, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Qf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), kr(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Qf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        kr(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        kr(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function zn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), mu |= n.lanes, !(u & n.childLanes))
      if (l !== null) {
        if (Ic(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(C(153));
    if (n.child !== null) {
      for (l = n.child, u = Ja(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ja(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Wr(l, n) {
    return l.lanes & n ? !0 : (l = l.dependencies, !!(l !== null && Af(l)));
  }
  function L0(l, n, u) {
    switch (n.tag) {
      case 3:
        Et(n, n.stateNode.containerInfo), cu(n, wt, l.memoizedState.cache), Wc();
        break;
      case 27:
      case 5:
        ba(n);
        break;
      case 4:
        Et(n, n.stateNode.containerInfo);
        break;
      case 10:
        cu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (ru(n), n.flags |= 128, null) : u & n.child.childLanes ? Ey(l, n, u) : (ru(n), l = zn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        ru(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Ic(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return $r(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ce(Ie, Ie.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, jr(l, n, u);
      case 24:
        cu(n, wt, l.memoizedState.cache);
    }
    return zn(l, n, u);
  }
  function w0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Jt = !0;
      else {
        if (!Wr(l, u) && !(n.flags & 128))
          return Jt = !1, L0(
            l,
            n,
            u
          );
        Jt = !!(l.flags & 131072);
      }
    else
      Jt = !1, qe && n.flags & 1048576 && cr(n, kc, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            bf(c) ? (l = ti(c, l), n.tag = 1, n = Lr(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Qr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === Wt) {
                n.tag = 11, n = Q0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Be) {
                n.tag = 14, n = du(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = jt(c) || c, Error(C(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = ti(
          c,
          n.pendingProps
        ), Lr(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Et(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(C(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, gr(l, n), ou(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, cu(n, wt, c), c !== r.cache && wh(
            n,
            [wt],
            u,
            !0
          ), to(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = wr(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = ia(
                Error(C(424)),
                n
              ), Fc(s), n = wr(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Ge = Pa(l.firstChild), Nt = n, qe = !0, za = null, Da = !0, u = En(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Wc(), c === s) {
              n = zn(
                l,
                n,
                u
              );
              break e;
            }
            tl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Jf(l, n), l === null ? (u = ip(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : qe || (u = n.type, l = n.pendingProps, c = Ba(
          xe.current
        ).createElement(u), c[It] = n, c[xl] = l, se(c, u, l), Lt(c), n.stateNode = c) : n.memoizedState = ip(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ba(n), l === null && qe && (c = n.stateNode = $(
          n.type,
          n.pendingProps,
          xe.current
        ), Nt = n, Da = !0, s = Ge, ri(n.type) ? (di = s, Ge = Pa(
          c.firstChild
        )) : Ge = s), tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), Jf(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && qe && ((s = c = Ge) && (c = Mo(
          c,
          n.type,
          n.pendingProps,
          Da
        ), c !== null ? (n.stateNode = c, Nt = n, Ge = Pa(
          c.firstChild
        ), Da = !1, s = !0) : s = !1), s || uu(n)), ba(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, Bn(s, r) ? c = null : y !== null && Bn(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Tr(
          l,
          n,
          C0,
          null,
          null,
          u
        ), ea._currentValue = s), Jf(l, n), tl(l, n, c, u), n.child;
      case 6:
        return l === null && qe && ((l = u = Ge) && (u = Tv(
          u,
          n.pendingProps,
          Da
        ), u !== null ? (n.stateNode = u, Nt = n, Ge = null, l = !0) : l = !1), l || uu(n)), null;
      case 13:
        return Ey(l, n, u);
      case 4:
        return Et(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = ac(
          n,
          null,
          c,
          u
        ) : tl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Q0(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return tl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, cu(n, n.type, c.value), tl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, ku(n), s = Pt(s), c = c(s), n.flags |= 1, tl(l, n, c, u), n.child;
      case 14:
        return du(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return uc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return $r(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = Kr(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Ja(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return jr(l, n, u);
      case 24:
        return ku(n), c = Pt(wt), l === null ? (s = Df(), s === null && (s = at, r = eo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, vr(n), cu(n, wt, s)) : (l.lanes & u && (gr(l, n), ou(n, null, null, u), to()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), cu(n, wt, c)) : (c = r.cache, cu(n, wt, c), c !== s.cache && wh(
          n,
          [wt],
          u,
          !0
        ))), tl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(C(156, n.tag));
  }
  function Dn(l) {
    l.flags |= 4;
  }
  function fo(l, n) {
    if (n.type !== "stylesheet" || n.state.loading & 4)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !um(n)) {
      if (n = fa.current, n !== null && ((Oe & 4194048) === Oe ? Rl !== null : (Oe & 62914560) !== Oe && !(Oe & 536870912) || n !== Rl))
        throw ki = mr, yr;
      l.flags |= 8192;
    }
  }
  function kf(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? zi() : 536870912, l.lanes |= n, mo |= n);
  }
  function so(l, n) {
    if (!qe)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function oe(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Ay(l, n, u) {
    var c = n.pendingProps;
    switch (yn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return oe(n), null;
      case 1:
        return oe(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), mn(wt), cl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && ($c(n) ? Dn(n) : l === null || l.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Lh())), oe(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Dn(n), u !== null ? (oe(n), fo(n, u)) : (oe(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Dn(n), oe(n), fo(n, u)) : (oe(n), n.flags &= -16777217) : (l.memoizedProps !== c && Dn(n), oe(n), n.flags &= -16777217), null;
      case 27:
        Ei(n), u = xe.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return oe(n), null;
          }
          l = Re.current, $c(n) ? Tf(n) : (l = $(s, c, u), n.stateNode = l, Dn(n));
        }
        return oe(n), null;
      case 5:
        if (Ei(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return oe(n), null;
          }
          if (l = Re.current, $c(n))
            Tf(n);
          else {
            switch (s = Ba(
              xe.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[It] = n, l[xl] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (se(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Dn(n);
          }
        }
        return oe(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(C(166));
          if (l = xe.current, $c(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Nt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[It] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || tm(l.nodeValue, u)), l || uu(n);
          } else
            l = Ba(l).createTextNode(
              c
            ), l[It] = n, n.stateNode = l;
        }
        return oe(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = $c(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(C(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(C(317));
              s[It] = n;
            } else
              Wc(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            oe(n), s = !1;
          } else
            s = Lh(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Fa(n), n) : (Fa(n), null);
        }
        if (Fa(n), n.flags & 128)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), kf(n, n.updateQueue), oe(n), null;
      case 4:
        return cl(), l === null && Py(n.stateNode.containerInfo), oe(n), null;
      case 10:
        return mn(n.type), oe(n), null;
      case 19:
        if (k(Ie), s = n.memoizedState, s === null) return oe(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) so(s, !1);
          else {
            if (Mt !== 0 || l !== null && l.flags & 128)
              for (l = n.child; l !== null; ) {
                if (r = Qf(l), r !== null) {
                  for (n.flags |= 128, so(s, !1), l = r.updateQueue, n.updateQueue = l, kf(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Te(u, l), u = u.sibling;
                  return ce(
                    Ie,
                    Ie.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && la() > ud && (n.flags |= 128, c = !0, so(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Qf(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, kf(n, l), so(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !qe)
                return oe(n), null;
            } else
              2 * la() - s.renderingStartTime > ud && u !== 536870912 && (n.flags |= 128, c = !0, so(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = la(), n.sibling = null, l = Ie.current, ce(Ie, c ? l & 1 | 2 : l & 1), n) : (oe(n), null);
      case 22:
      case 23:
        return Fa(n), ao(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? u & 536870912 && !(n.flags & 128) && (oe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : oe(n), u = n.updateQueue, u !== null && kf(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && k(vn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), mn(wt), oe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(C(156, n.tag));
  }
  function hv(l, n) {
    switch (yn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return mn(wt), cl(), l = n.flags, l & 65536 && !(l & 128) ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ei(n), null;
      case 13:
        if (Fa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(C(340));
          Wc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return k(Ie), null;
      case 4:
        return cl(), null;
      case 10:
        return mn(n.type), null;
      case 22:
      case 23:
        return Fa(n), ao(), l !== null && k(vn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return mn(wt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ry(l, n) {
    switch (yn(n), n.tag) {
      case 3:
        mn(wt), cl();
        break;
      case 26:
      case 27:
      case 5:
        Ei(n);
        break;
      case 4:
        cl();
        break;
      case 13:
        Fa(n);
        break;
      case 19:
        k(Ie);
        break;
      case 10:
        mn(n.type);
        break;
      case 22:
      case 23:
        Fa(n), ao(), l !== null && k(vn);
        break;
      case 24:
        mn(wt);
    }
  }
  function $f(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (m) {
      $e(n, n.return, m);
    }
  }
  function ai(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, m = y.destroy;
            if (m !== void 0) {
              y.destroy = void 0, s = n;
              var g = u, D = m;
              try {
                D();
              } catch (G) {
                $e(
                  s,
                  g,
                  G
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (G) {
      $e(n, n.return, G);
    }
  }
  function Fr(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Uf(n, u);
      } catch (c) {
        $e(l, l.return, c);
      }
    }
  }
  function zy(l, n, u) {
    u.props = ti(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      $e(l, n, c);
    }
  }
  function ro(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      $e(l, n, s);
    }
  }
  function Ia(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          $e(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          $e(l, n, s);
        }
      else u.current = null;
  }
  function ho(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      $e(l, l.return, s);
    }
  }
  function Dy(l, n, u) {
    try {
      var c = l.stateNode;
      gv(c, l.type, u, n), c[xl] = n;
    } catch (s) {
      $e(l, l.return, s);
    }
  }
  function Z0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ri(l.type) || l.tag === 4;
  }
  function xa(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Z0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ri(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function cc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = vd));
    else if (c !== 4 && (c === 27 && ri(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (cc(l, n, u), l = l.sibling; l !== null; )
        cc(l, n, u), l = l.sibling;
  }
  function Ir(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && ri(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Ir(l, n, u), l = l.sibling; l !== null; )
        Ir(l, n, u), l = l.sibling;
  }
  function Pr(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      se(n, c, u), n[It] = l, n[xl] = u;
    } catch (r) {
      $e(l, l.return, r);
    }
  }
  var On = !1, Dt = !1, ed = !1, td = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function Oy(l, n) {
    if (l = l.containerInfo, os = ys, l = qh(l), vf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, m = -1, g = -1, D = 0, G = 0, X = l, M = null;
            t: for (; ; ) {
              for (var x; X !== u || s !== 0 && X.nodeType !== 3 || (m = y + s), X !== r || c !== 0 && X.nodeType !== 3 || (g = y + c), X.nodeType === 3 && (y += X.nodeValue.length), (x = X.firstChild) !== null; )
                M = X, X = x;
              for (; ; ) {
                if (X === l) break t;
                if (M === u && ++D === s && (m = y), M === r && ++G === c && (g = y), (x = X.nextSibling) !== null) break;
                X = M, M = X.parentNode;
              }
              X = x;
            }
            u = m === -1 || g === -1 ? null : { start: m, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (fs = { focusedElem: l, selectionRange: u }, ys = !1, Kt = n; Kt !== null; )
      if (n = Kt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, Kt = l;
      else
        for (; Kt !== null; ) {
          switch (n = Kt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (l & 1024 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var ne = ti(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ne,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ue) {
                  $e(
                    u,
                    u.return,
                    ue
                  );
                }
              }
              break;
            case 3:
              if (l & 1024) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ss(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ss(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (l & 1024) throw Error(C(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Kt = l;
            break;
          }
          Kt = n.return;
        }
  }
  function My(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Un(l, u), c & 4 && $f(5, u);
        break;
      case 1:
        if (Un(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              $e(u, u.return, y);
            }
          else {
            var s = ti(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              $e(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && Fr(u), c & 512 && ro(u, u.return);
        break;
      case 3:
        if (Un(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Uf(l, n);
          } catch (y) {
            $e(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Pr(u);
      case 26:
      case 5:
        Un(l, u), n === null && c & 4 && ho(u), c & 512 && ro(u, u.return);
        break;
      case 12:
        Un(l, u);
        break;
      case 13:
        Un(l, u), c & 4 && ld(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = yv.bind(
          null,
          u
        ), Ev(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || On, !c) {
          n = n !== null && n.memoizedState !== null || Dt, s = On;
          var r = Dt;
          On = c, (Dt = n) && !r ? ni(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Un(l, u), On = s, Dt = r;
        }
        break;
      case 30:
        break;
      default:
        Un(l, u);
    }
  }
  function Uy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Uy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && ef(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var yt = null, rl = !1;
  function Mn(l, n, u) {
    for (u = u.child; u !== null; )
      ze(l, n, u), u = u.sibling;
  }
  function ze(l, n, u) {
    if (Ul && typeof Ul.onCommitFiberUnmount == "function")
      try {
        Ul.onCommitFiberUnmount(Nc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Dt || Ia(u, n), Mn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Dt || Ia(u, n);
        var c = yt, s = rl;
        ri(u.type) && (yt = u.stateNode, rl = !1), Mn(
          l,
          n,
          u
        ), Il(u.stateNode), yt = c, rl = s;
        break;
      case 5:
        Dt || Ia(u, n);
      case 6:
        if (c = yt, s = rl, yt = null, Mn(
          l,
          n,
          u
        ), yt = c, rl = s, yt !== null)
          if (rl)
            try {
              (yt.nodeType === 9 ? yt.body : yt.nodeName === "HTML" ? yt.ownerDocument.body : yt).removeChild(u.stateNode);
            } catch (r) {
              $e(
                u,
                n,
                r
              );
            }
          else
            try {
              yt.removeChild(u.stateNode);
            } catch (r) {
              $e(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        yt !== null && (rl ? (l = yt, bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Yn(l)) : bd(yt, u.stateNode));
        break;
      case 4:
        c = yt, s = rl, yt = u.stateNode.containerInfo, rl = !0, Mn(
          l,
          n,
          u
        ), yt = c, rl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dt || ai(2, u, n), Dt || ai(4, u, n), Mn(
          l,
          n,
          u
        );
        break;
      case 1:
        Dt || (Ia(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && zy(
          u,
          n,
          c
        )), Mn(
          l,
          n,
          u
        );
        break;
      case 21:
        Mn(
          l,
          n,
          u
        );
        break;
      case 22:
        Dt = (c = Dt) || u.memoizedState !== null, Mn(
          l,
          n,
          u
        ), Dt = c;
        break;
      default:
        Mn(
          l,
          n,
          u
        );
    }
  }
  function ld(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Yn(l);
      } catch (u) {
        $e(n, n.return, u);
      }
  }
  function xy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new td()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new td()), n;
      default:
        throw Error(C(435, l.tag));
    }
  }
  function ad(l, n) {
    var u = xy(l);
    n.forEach(function(c) {
      var s = mv.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Nl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, m = y;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (ri(m.type)) {
                yt = m.stateNode, rl = !1;
                break e;
              }
              break;
            case 5:
              yt = m.stateNode, rl = !1;
              break e;
            case 3:
            case 4:
              yt = m.stateNode.containerInfo, rl = !0;
              break e;
          }
          m = m.return;
        }
        if (yt === null) throw Error(C(160));
        ze(r, y, s), yt = null, rl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Wf(n, l), n = n.sibling;
  }
  var Bl = null;
  function Wf(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nl(n, l), ll(l), c & 4 && (ai(3, l, l.return), $f(3, l), ai(5, l, l.return));
        break;
      case 1:
        Nl(n, l), ll(l), c & 512 && (Dt || u === null || Ia(u, u.return)), c & 64 && On && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Bl;
        if (Nl(n, l), ll(l), c & 512 && (Dt || u === null || Ia(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[F] || r[It] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), se(r, c, u), r[It] = l, Lt(r), c = r;
                      break e;
                    case "link":
                      var y = am(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), se(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = am(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), se(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(C(468, c));
                  }
                  r[It] = l, Lt(r), c = r;
                }
                l.stateNode = c;
              } else
                nm(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = op(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? nm(
              s,
              l.type,
              l.stateNode
            ) : op(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Dy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Nl(n, l), ll(l), c & 512 && (Dt || u === null || Ia(u, u.return)), u !== null && c & 4 && Dy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Nl(n, l), ll(l), c & 512 && (Dt || u === null || Ia(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Yc(s, "");
          } catch (x) {
            $e(l, l.return, x);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Dy(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (ed = !0);
        break;
      case 6:
        if (Nl(n, l), ll(l), c & 4) {
          if (l.stateNode === null)
            throw Error(C(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (x) {
            $e(l, l.return, x);
          }
        }
        break;
      case 3:
        if (mi = null, s = Bl, Bl = Sd(n.containerInfo), Nl(n, l), Bl = s, ll(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Yn(n.containerInfo);
          } catch (x) {
            $e(l, l.return, x);
          }
        ed && (ed = !1, Hy(l));
        break;
      case 4:
        c = Bl, Bl = Sd(
          l.stateNode.containerInfo
        ), Nl(n, l), ll(l), Bl = c;
        break;
      case 12:
        Nl(n, l), ll(l);
        break;
      case 13:
        Nl(n, l), ll(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Vy = la()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ad(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var g = u !== null && u.memoizedState !== null, D = On, G = Dt;
        if (On = D || s, Dt = G || g, Nl(n, l), Dt = G, On = D, ll(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || g || On || Dt || mt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                g = u = n;
                try {
                  if (r = g.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    m = g.stateNode;
                    var X = g.memoizedProps.style, M = X != null && X.hasOwnProperty("display") ? X.display : null;
                    m.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (x) {
                  $e(g, g.return, x);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                g = n;
                try {
                  g.stateNode.nodeValue = s ? "" : g.memoizedProps;
                } catch (x) {
                  $e(g, g.return, x);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, ad(l, u))));
        break;
      case 19:
        Nl(n, l), ll(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, ad(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nl(n, l), ll(l);
    }
  }
  function ll(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Z0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(C(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = xa(l);
            Ir(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Yc(y, ""), u.flags &= -33);
            var m = xa(l);
            Ir(l, m, y);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, D = xa(l);
            cc(
              l,
              D,
              g
            );
            break;
          default:
            throw Error(C(161));
        }
      } catch (G) {
        $e(l, l.return, G);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Hy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Hy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Un(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        My(l, n.alternate, n), n = n.sibling;
  }
  function mt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ai(4, n, n.return), mt(n);
          break;
        case 1:
          Ia(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && zy(
            n,
            n.return,
            u
          ), mt(n);
          break;
        case 27:
          Il(n.stateNode);
        case 26:
        case 5:
          Ia(n, n.return), mt(n);
          break;
        case 22:
          n.memoizedState === null && mt(n);
          break;
        case 30:
          mt(n);
          break;
        default:
          mt(n);
      }
      l = l.sibling;
    }
  }
  function ni(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ni(
            s,
            r,
            u
          ), $f(4, r);
          break;
        case 1:
          if (ni(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (D) {
              $e(c, c.return, D);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var m = c.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  br(g[s], m);
            } catch (D) {
              $e(c, c.return, D);
            }
          }
          u && y & 64 && Fr(r), ro(r, r.return);
          break;
        case 27:
          Pr(r);
        case 26:
        case 5:
          ni(
            s,
            r,
            u
          ), u && c === null && y & 4 && ho(r), ro(r, r.return);
          break;
        case 12:
          ni(
            s,
            r,
            u
          );
          break;
        case 13:
          ni(
            s,
            r,
            u
          ), u && y & 4 && ld(s, r);
          break;
        case 22:
          r.memoizedState === null && ni(
            s,
            r,
            u
          ), ro(r, r.return);
          break;
        case 30:
          break;
        default:
          ni(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ha(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && pn(u));
  }
  function nd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l));
  }
  function dl(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Cy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Cy(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        dl(
          l,
          n,
          u,
          c
        ), s & 2048 && $f(9, n);
        break;
      case 1:
        dl(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        dl(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l)));
        break;
      case 12:
        if (s & 2048) {
          dl(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            $e(n, n.return, g);
          }
        } else
          dl(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        dl(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? dl(
          l,
          n,
          u,
          c
        ) : Ve(l, n) : r._visibility & 2 ? dl(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, hu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && Ha(y, n);
        break;
      case 24:
        dl(
          l,
          n,
          u,
          c
        ), s & 2048 && nd(n.alternate, n);
        break;
      default:
        dl(
          l,
          n,
          u,
          c
        );
    }
  }
  function hu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, m = u, g = c, D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          hu(
            r,
            y,
            m,
            g,
            s
          ), $f(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null ? G._visibility & 2 ? hu(
            r,
            y,
            m,
            g,
            s
          ) : Ve(
            r,
            y
          ) : (G._visibility |= 2, hu(
            r,
            y,
            m,
            g,
            s
          )), s && D & 2048 && Ha(
            y.alternate,
            y
          );
          break;
        case 24:
          hu(
            r,
            y,
            m,
            g,
            s
          ), s && D & 2048 && nd(y.alternate, y);
          break;
        default:
          hu(
            r,
            y,
            m,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Ve(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Ve(u, c), s & 2048 && Ha(
              c.alternate,
              c
            );
            break;
          case 24:
            Ve(u, c), s & 2048 && nd(c.alternate, c);
            break;
          default:
            Ve(u, c);
        }
        n = n.sibling;
      }
  }
  var oc = 8192;
  function Ot(l) {
    if (l.subtreeFlags & oc)
      for (l = l.child; l !== null; )
        J0(l), l = l.sibling;
  }
  function J0(l) {
    switch (l.tag) {
      case 26:
        Ot(l), l.flags & oc && l.memoizedState !== null && rp(
          Bl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ot(l);
        break;
      case 3:
      case 4:
        var n = Bl;
        Bl = Sd(l.stateNode.containerInfo), Ot(l), Bl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = oc, oc = 16777216, Ot(l), oc = n) : Ot(l));
        break;
      default:
        Ot(l);
    }
  }
  function Ny(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function fc(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Kt = c, _y(
            c,
            l
          );
        }
      Ny(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        By(l), l = l.sibling;
  }
  function By(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fc(l), l.flags & 2048 && ai(9, l, l.return);
        break;
      case 3:
        fc(l);
        break;
      case 12:
        fc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, _l(l)) : fc(l);
        break;
      default:
        fc(l);
    }
  }
  function _l(l) {
    var n = l.deletions;
    if (l.flags & 16) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Kt = c, _y(
            c,
            l
          );
        }
      Ny(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, n, n.return), _l(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, _l(n));
          break;
        default:
          _l(n);
      }
      l = l.sibling;
    }
  }
  function _y(l, n) {
    for (; Kt !== null; ) {
      var u = Kt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          pn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Kt = c;
      else
        e: for (u = l; Kt !== null; ) {
          c = Kt;
          var s = c.sibling, r = c.return;
          if (Uy(c), c === u) {
            Kt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Kt = s;
            break e;
          }
          Kt = r;
        }
    }
  }
  var qy = {
    getCacheForType: function(l) {
      var n = Pt(wt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, K0 = typeof WeakMap == "function" ? WeakMap : Map, we = 0, at = null, De = null, Oe = 0, Ke = 0, $l = null, xn = !1, yo = !1, Yy = !1, yu = 0, Mt = 0, mu = 0, sc = 0, Hn = 0, Ca = 0, mo = 0, po = null, Wl = null, Gy = !1, Vy = 0, ud = 1 / 0, vo = null, ui = null, hl = 0, Cn = null, go = null, yl = 0, id = 0, cd = null, Xy = null, bo = 0, jy = null;
  function sa() {
    if (we & 2 && Oe !== 0)
      return Oe & -Oe;
    if (A.T !== null) {
      var l = Oa;
      return l !== 0 ? l : yc();
    }
    return c0();
  }
  function Qy() {
    Ca === 0 && (Ca = !(Oe & 536870912) || qe ? Hu() : 536870912);
    var l = fa.current;
    return l !== null && (l.flags |= 32), Ca;
  }
  function ra(l, n, u) {
    (l === at && (Ke === 2 || Ke === 9) || l.cancelPendingCommit !== null) && (Nn(l, 0), pu(
      l,
      Oe,
      Ca,
      !1
    )), Di(l, u), (!(we & 2) || l !== at) && (l === at && (!(we & 2) && (sc |= u), Mt === 4 && pu(
      l,
      Oe,
      Ca,
      !1
    )), Fl(l));
  }
  function So(l, n, u) {
    if (we & 6) throw Error(C(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || nn(l, n), s = c ? wy(l, n) : od(l, n, !0), r = c;
    do {
      if (s === 0) {
        yo && !c && pu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !k0(u)) {
          s = od(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var m = l;
              s = po;
              var g = m.current.memoizedState.isDehydrated;
              if (g && (Nn(m, y).flags |= 256), y = od(
                m,
                y,
                !1
              ), y !== 2) {
                if (Yy && !g) {
                  m.errorRecoveryDisabledLanes |= r, sc |= r, s = 4;
                  break e;
                }
                r = Wl, Wl = s, r !== null && (Wl === null ? Wl = r : Wl.push.apply(
                  Wl,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Nn(l, 0), pu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(C(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pu(
                c,
                n,
                Ca,
                !xn
              );
              break e;
            case 2:
              Wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(C(329));
          }
          if ((n & 62914560) === n && (s = Vy + 300 - la(), 10 < s)) {
            if (pu(
              c,
              n,
              Ca,
              !xn
            ), xu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = gd(
              Ff.bind(
                null,
                c,
                u,
                Wl,
                vo,
                Gy,
                n,
                Ca,
                sc,
                mo,
                xn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Ff(
            c,
            u,
            Wl,
            vo,
            Gy,
            n,
            Ca,
            sc,
            mo,
            xn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Fl(l);
  }
  function Ff(l, n, u, c, s, r, y, m, g, D, G, X, M, x) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, (X & 8192 || (X & 16785408) === 16785408) && (Co = { stylesheets: null, count: 0, unsuspend: sp }, J0(n), X = im(), X !== null)) {
      l.cancelPendingCommit = X(
        F0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          m,
          g,
          G,
          1,
          M,
          x
        )
      ), pu(l, r, y, !D);
      return;
    }
    F0(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      m,
      g
    );
  }
  function k0(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!sl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pu(l, n, u, c) {
    n &= ~Hn, n &= ~sc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Xl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && Io(l, u, n);
  }
  function rc() {
    return we & 6 ? !0 : (ts(0), !1);
  }
  function ii() {
    if (De !== null) {
      if (Ke === 0)
        var l = De.return;
      else
        l = De, ka = iu = null, Ar(l), tc = null, io = 0, l = De;
      for (; l !== null; )
        Ry(l.alternate, l), l = l.return;
      De = null;
    }
  }
  function Nn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, bv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ii(), at = l, De = u = Ja(l.current, null), Oe = n, Ke = 0, $l = null, xn = !1, yo = nn(l, n), Yy = !1, mo = Ca = Hn = sc = mu = Mt = 0, Wl = po = null, Gy = !1, n & 8 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Xl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return yu = n, Za(), u;
  }
  function Ly(l, n) {
    me = null, A.H = Gr, n === Wu || n === Of ? (n = Kh(), Ke = 3) : n === yr ? (n = Kh(), Ke = 4) : Ke = n === zt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, $l = n, De === null && (Mt = 1, Zf(
      l,
      ia(n, l.current)
    ));
  }
  function $0() {
    var l = A.H;
    return A.H = Gr, l === null ? Gr : l;
  }
  function dc() {
    var l = A.A;
    return A.A = qy, l;
  }
  function hc() {
    Mt = 4, xn || (Oe & 4194048) !== Oe && fa.current !== null || (yo = !0), !(mu & 134217727) && !(sc & 134217727) || at === null || pu(
      at,
      Oe,
      Ca,
      !1
    );
  }
  function od(l, n, u) {
    var c = we;
    we |= 2;
    var s = $0(), r = dc();
    (at !== l || Oe !== n) && (vo = null, Nn(l, n)), n = !1;
    var y = Mt;
    e: do
      try {
        if (Ke !== 0 && De !== null) {
          var m = De, g = $l;
          switch (Ke) {
            case 8:
              ii(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              fa.current === null && (n = !0);
              var D = Ke;
              if (Ke = 0, $l = null, To(l, m, g, D), u && yo) {
                y = 0;
                break e;
              }
              break;
            default:
              D = Ke, Ke = 0, $l = null, To(l, m, g, D);
          }
        }
        fd(), y = Mt;
        break;
      } catch (G) {
        Ly(l, G);
      }
    while (!0);
    return n && l.shellSuspendCounter++, ka = iu = null, we = c, A.H = s, A.A = r, De === null && (at = null, Oe = 0, Za()), y;
  }
  function fd() {
    for (; De !== null; ) Jy(De);
  }
  function wy(l, n) {
    var u = we;
    we |= 2;
    var c = $0(), s = dc();
    at !== l || Oe !== n ? (vo = null, ud = la() + 500, Nn(l, n)) : yo = nn(
      l,
      n
    );
    e: do
      try {
        if (Ke !== 0 && De !== null) {
          n = De;
          var r = $l;
          t: switch (Ke) {
            case 1:
              Ke = 0, $l = null, To(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (pr(r)) {
                Ke = 0, $l = null, Ky(n);
                break;
              }
              n = function() {
                Ke !== 2 && Ke !== 9 || at !== l || (Ke = 7), Fl(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              pr(r) ? (Ke = 0, $l = null, Ky(n)) : (Ke = 0, $l = null, To(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (De.tag) {
                case 26:
                  y = De.memoizedState;
                case 5:
                case 27:
                  var m = De;
                  if (!y || um(y)) {
                    Ke = 0, $l = null;
                    var g = m.sibling;
                    if (g !== null) De = g;
                    else {
                      var D = m.return;
                      D !== null ? (De = D, If(D)) : De = null;
                    }
                    break t;
                  }
              }
              Ke = 0, $l = null, To(l, n, r, 5);
              break;
            case 6:
              Ke = 0, $l = null, To(l, n, r, 6);
              break;
            case 8:
              ii(), Mt = 6;
              break e;
            default:
              throw Error(C(462));
          }
        }
        Zy();
        break;
      } catch (G) {
        Ly(l, G);
      }
    while (!0);
    return ka = iu = null, A.H = c, A.A = s, we = u, De !== null ? 0 : (at = null, Oe = 0, Za(), Mt);
  }
  function Zy() {
    for (; De !== null && !tv(); )
      Jy(De);
  }
  function Jy(l) {
    var n = w0(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, n === null ? If(l) : De = n;
  }
  function Ky(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = by(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Oe
        );
        break;
      case 11:
        n = by(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Oe
        );
        break;
      case 5:
        Ar(n);
      default:
        Ry(u, n), n = De = Te(n, yu), n = w0(u, n, yu);
    }
    l.memoizedProps = l.pendingProps, n === null ? If(l) : De = n;
  }
  function To(l, n, u, c) {
    ka = iu = null, Ar(n), tc = null, io = 0;
    var s = n.return;
    try {
      if (j0(
        l,
        s,
        n,
        u,
        Oe
      )) {
        Mt = 1, Zf(
          l,
          ia(u, l.current)
        ), De = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw De = s, r;
      Mt = 1, Zf(
        l,
        ia(u, l.current)
      ), De = null;
      return;
    }
    n.flags & 32768 ? (qe || c === 1 ? l = !0 : yo || Oe & 536870912 ? l = !1 : (xn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = fa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), W0(n, l)) : If(n);
  }
  function If(l) {
    var n = l;
    do {
      if (n.flags & 32768) {
        W0(
          n,
          xn
        );
        return;
      }
      l = n.return;
      var u = Ay(
        n.alternate,
        n,
        yu
      );
      if (u !== null) {
        De = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        De = n;
        return;
      }
      De = n = l;
    } while (n !== null);
    Mt === 0 && (Mt = 5);
  }
  function W0(l, n) {
    do {
      var u = hv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, De = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        De = l;
        return;
      }
      De = l = u;
    } while (l !== null);
    Mt = 6, De = null;
  }
  function F0(l, n, u, c, s, r, y, m, g) {
    l.cancelPendingCommit = null;
    do
      rd();
    while (hl !== 0);
    if (we & 6) throw Error(C(327));
    if (n !== null) {
      if (n === l.current) throw Error(C(177));
      if (r = n.lanes | n.childLanes, r |= dn, i0(
        l,
        u,
        r,
        y,
        m,
        g
      ), l === at && (De = at = null, Oe = 0), go = n, Cn = l, yl = u, id = r, cd = s, Xy = c, n.subtreeFlags & 10256 || n.flags & 10256 ? (l.callbackNode = null, l.callbackPriority = 0, pv(Fo, function() {
        return ky(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, n.subtreeFlags & 13878 || c) {
        c = A.T, A.T = null, s = j.p, j.p = 2, y = we, we |= 4;
        try {
          Oy(l, n, u);
        } finally {
          we = y, j.p = s, A.T = c;
        }
      }
      hl = 1, I0(), Pf(), sd();
    }
  }
  function I0() {
    if (hl === 1) {
      hl = 0;
      var l = Cn, n = go, u = (n.flags & 13878) !== 0;
      if (n.subtreeFlags & 13878 || u) {
        u = A.T, A.T = null;
        var c = j.p;
        j.p = 2;
        var s = we;
        we |= 4;
        try {
          Wf(n, l);
          var r = fs, y = qh(l.containerInfo), m = r.focusedElem, g = r.selectionRange;
          if (y !== m && m && m.ownerDocument && pf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (g !== null && vf(m)) {
              var D = g.start, G = g.end;
              if (G === void 0 && (G = D), "selectionStart" in m)
                m.selectionStart = D, m.selectionEnd = Math.min(
                  G,
                  m.value.length
                );
              else {
                var X = m.ownerDocument || document, M = X && X.defaultView || window;
                if (M.getSelection) {
                  var x = M.getSelection(), ne = m.textContent.length, ue = Math.min(g.start, ne), Xe = g.end === void 0 ? ue : Math.min(g.end, ne);
                  !x.extend && ue > Xe && (y = Xe, Xe = ue, ue = y);
                  var R = ft(
                    m,
                    ue
                  ), E = ft(
                    m,
                    Xe
                  );
                  if (R && E && (x.rangeCount !== 1 || x.anchorNode !== R.node || x.anchorOffset !== R.offset || x.focusNode !== E.node || x.focusOffset !== E.offset)) {
                    var z = X.createRange();
                    z.setStart(R.node, R.offset), x.removeAllRanges(), ue > Xe ? (x.addRange(z), x.extend(E.node, E.offset)) : (z.setEnd(E.node, E.offset), x.addRange(z));
                  }
                }
              }
            }
            for (X = [], x = m; x = x.parentNode; )
              x.nodeType === 1 && X.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < X.length; m++) {
              var V = X[m];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          ys = !!os, fs = os = null;
        } finally {
          we = s, j.p = c, A.T = u;
        }
      }
      l.current = n, hl = 2;
    }
  }
  function Pf() {
    if (hl === 2) {
      hl = 0;
      var l = Cn, n = go, u = (n.flags & 8772) !== 0;
      if (n.subtreeFlags & 8772 || u) {
        u = A.T, A.T = null;
        var c = j.p;
        j.p = 2;
        var s = we;
        we |= 4;
        try {
          My(l, n.alternate, n);
        } finally {
          we = s, j.p = c, A.T = u;
        }
      }
      hl = 3;
    }
  }
  function sd() {
    if (hl === 4 || hl === 3) {
      hl = 0, Ri();
      var l = Cn, n = go, u = yl, c = Xy;
      n.subtreeFlags & 10256 || n.flags & 10256 ? hl = 5 : (hl = 0, go = Cn = null, P0(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ui = null), Vs(u), n = n.stateNode, Ul && typeof Ul.onCommitFiberRoot == "function")
        try {
          Ul.onCommitFiberRoot(
            Nc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = A.T, s = j.p, j.p = 2, A.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var m = c[y];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          A.T = n, j.p = s;
        }
      }
      yl & 3 && rd(), Fl(l), s = l.pendingLanes, u & 4194090 && s & 42 ? l === jy ? bo++ : (bo = 0, jy = l) : bo = 0, ts(0);
    }
  }
  function P0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, pn(n)));
  }
  function rd(l) {
    return I0(), Pf(), sd(), ky();
  }
  function ky() {
    if (hl !== 5) return !1;
    var l = Cn, n = id;
    id = 0;
    var u = Vs(yl), c = A.T, s = j.p;
    try {
      j.p = 32 > u ? 32 : u, A.T = null, u = cd, cd = null;
      var r = Cn, y = yl;
      if (hl = 0, go = Cn = null, yl = 0, we & 6) throw Error(C(331));
      var m = we;
      if (we |= 4, By(r.current), Cy(
        r,
        r.current,
        y,
        u
      ), we = m, ts(0, !1), Ul && typeof Ul.onPostCommitFiberRoot == "function")
        try {
          Ul.onPostCommitFiberRoot(Nc, r);
        } catch {
        }
      return !0;
    } finally {
      j.p = s, A.T = c, P0(l, n);
    }
  }
  function $y(l, n, u) {
    n = ia(u, n), n = vy(l.stateNode, n, 2), l = bn(l, n, 2), l !== null && (Di(l, 2), Fl(l));
  }
  function $e(l, n, u) {
    if (l.tag === 3)
      $y(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          $y(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ui === null || !ui.has(c))) {
            l = ia(u, l), u = gy(2), c = bn(n, u, 2), c !== null && (kl(
              u,
              c,
              n,
              l
            ), Di(c, 2), Fl(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function dd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new K0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (Yy = !0, s.add(u), l = Wy.bind(null, l, n, u), n.then(l, l));
  }
  function Wy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, at === l && (Oe & u) === u && (Mt === 4 || Mt === 3 && (Oe & 62914560) === Oe && 300 > la() - Vy ? !(we & 2) && Nn(l, 0) : Hn |= u, mo === Oe && (mo = 0)), Fl(l);
  }
  function Fy(l, n) {
    n === 0 && (n = zi()), l = hn(l, n), l !== null && (Di(l, n), Fl(l));
  }
  function yv(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Fy(l, u);
  }
  function mv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(C(314));
    }
    c !== null && c.delete(n), Fy(l, u);
  }
  function pv(l, n) {
    return Ai(l, n);
  }
  var hd = null, ci = null, es = !1, Eo = !1, yd = !1, oi = 0;
  function Fl(l) {
    l !== ci && l.next === null && (ci === null ? hd = ci = l : ci = ci.next = l), Eo = !0, es || (es = !0, lp());
  }
  function ts(l, n) {
    if (!yd && Eo) {
      yd = !0;
      do
        for (var u = !1, c = hd; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, m = c.pingedLanes;
              r = (1 << 31 - Xl(42 | l) + 1) - 1, r &= s & ~(y & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, as(c, r));
          } else
            r = Oe, r = xu(
              c,
              c === at ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), !(r & 3) || nn(c, r) || (u = !0, as(c, r));
          c = c.next;
        }
      while (u);
      yd = !1;
    }
  }
  function ep() {
    ls();
  }
  function ls() {
    Eo = es = !1;
    var l = 0;
    oi !== 0 && (bu() && (l = oi), oi = 0);
    for (var n = la(), u = null, c = hd; c !== null; ) {
      var s = c.next, r = Iy(c, n);
      r === 0 ? (c.next = null, u === null ? hd = s : u.next = s, s === null && (ci = u)) : (u = c, (l !== 0 || r & 3) && (Eo = !0)), c = s;
    }
    ts(l);
  }
  function Iy(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Xl(r), m = 1 << y, g = s[y];
      g === -1 ? (!(m & u) || m & c) && (s[y] = Ft(m, n)) : g <= n && (l.expiredLanes |= m), r &= ~m;
    }
    if (n = at, u = Oe, u = xu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ke === 2 || Ke === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && ch(c), l.callbackNode = null, l.callbackPriority = 0;
    if (!(u & 3) || nn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && ch(c), Vs(u)) {
        case 2:
        case 8:
          u = oh;
          break;
        case 32:
          u = Fo;
          break;
        case 268435456:
          u = Cc;
          break;
        default:
          u = Fo;
      }
      return c = tp.bind(null, l), u = Ai(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && ch(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function tp(l, n) {
    if (hl !== 0 && hl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rd() && l.callbackNode !== u)
      return null;
    var c = Oe;
    return c = xu(
      l,
      l === at ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (So(l, c, n), Iy(l, la()), l.callbackNode != null && l.callbackNode === u ? tp.bind(null, l) : null);
  }
  function as(l, n) {
    if (rd()) return null;
    So(l, n, !0);
  }
  function lp() {
    Sv(function() {
      we & 6 ? Ai(
        a0,
        ep
      ) : ls();
    });
  }
  function yc() {
    return oi === 0 && (oi = Hu()), oi;
  }
  function md(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : of("" + l);
  }
  function ns(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function ap(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = md(
        (s[xl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[xl] || null) ? md(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var m = new Fs(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (oi !== 0) {
                  var g = y ? ns(s, y) : new FormData(s);
                  Yr(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (m.preventDefault(), g = y ? ns(s, y) : new FormData(s), Yr(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Ut = 0; Ut < Lc.length; Ut++) {
    var us = Lc[Ut], vv = us.toLowerCase(), Se = us[0].toUpperCase() + us.slice(1);
    Ea(
      vv,
      "on" + Se
    );
  }
  Ea(D0, "onAnimationEnd"), Ea(Yh, "onAnimationIteration"), Ea(O0, "onAnimationStart"), Ea("dblclick", "onDoubleClick"), Ea("focusin", "onFocus"), Ea("focusout", "onBlur"), Ea(Gh, "onTransitionRun"), Ea(ir, "onTransitionStart"), Ea(M0, "onTransitionCancel"), Ea(Vh, "onTransitionEnd"), Bu("onMouseEnter", ["mouseout", "mouseover"]), Bu("onMouseLeave", ["mouseout", "mouseover"]), Bu("onPointerEnter", ["pointerout", "pointerover"]), Bu("onPointerLeave", ["pointerout", "pointerover"]), Nu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Nu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Nu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Nu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Nu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Nu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(is)
  );
  function mc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var m = c[y], g = m.instance, D = m.currentTarget;
            if (m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = D;
            try {
              r(s);
            } catch (G) {
              Lf(G);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (m = c[y], g = m.instance, D = m.currentTarget, m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = D;
            try {
              r(s);
            } catch (G) {
              Lf(G);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function pe(l, n) {
    var u = n[Xs];
    u === void 0 && (u = n[Xs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (pd(n, l, 2, !1), u.add(c));
  }
  function Ao(l, n, u) {
    var c = 0;
    n && (c |= 4), pd(
      u,
      l,
      c,
      n
    );
  }
  var Ro = "_reactListening" + Math.random().toString(36).slice(2);
  function Py(l) {
    if (!l[Ro]) {
      l[Ro] = !0, lf.forEach(function(u) {
        u !== "selectionchange" && (fi.has(u) || Ao(u, !1, l), Ao(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ro] || (n[Ro] = !0, Ao("selectionchange", !1, n));
    }
  }
  function pd(l, n, u, c) {
    switch (ym(n)) {
      case 2:
        var s = dp;
        break;
      case 8:
        s = hp;
        break;
      default:
        s = dm;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ks || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Na(l, n, u, c, s) {
    var r = c;
    if (!(n & 1) && !(n & 2) && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var m = c.stateNode.containerInfo;
          if (m === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var g = y.tag;
              if ((g === 3 || g === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; m !== null; ) {
            if (y = ol(m), y === null) return;
            if (g = y.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              c = r = y;
              continue e;
            }
            m = m.parentNode;
          }
        }
        c = c.return;
      }
    Xc(function() {
      var D = r, G = Ks(u), X = [];
      e: {
        var M = Xh.get(l);
        if (M !== void 0) {
          var x = Fs, ne = l;
          switch (l) {
            case "keypress":
              if (fl(u) === 0) break e;
            case "keydown":
            case "keyup":
              x = Xa;
              break;
            case "focusin":
              ne = "focus", x = Th;
              break;
            case "focusout":
              ne = "blur", x = Th;
              break;
            case "beforeblur":
            case "afterblur":
              x = Th;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Sh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = v0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Rh;
              break;
            case D0:
            case Yh:
            case O0:
              x = fv;
              break;
            case Vh:
              x = E0;
              break;
            case "scroll":
            case "scrollend":
              x = m0;
              break;
            case "wheel":
              x = Gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = rf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = df;
              break;
            case "toggle":
            case "beforetoggle":
              x = A0;
          }
          var ue = (n & 4) !== 0, Xe = !ue && (l === "scroll" || l === "scrollend"), R = ue ? M !== null ? M + "Capture" : null : M;
          ue = [];
          for (var E = D, z; E !== null; ) {
            var V = E;
            if (z = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || z === null || R === null || (V = Bi(E, R), V != null && ue.push(
              vu(E, V, z)
            )), Xe) break;
            E = E.return;
          }
          0 < ue.length && (M = new x(
            M,
            ne,
            null,
            u,
            G
          ), X.push({ event: M, listeners: ue }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (M = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", M && u !== Ni && (ne = u.relatedTarget || u.fromElement) && (ol(ne) || ne[_c]))
            break e;
          if ((x || M) && (M = G.window === G ? G : (M = G.ownerDocument) ? M.defaultView || M.parentWindow : window, x ? (ne = u.relatedTarget || u.toElement, x = D, ne = ne ? ol(ne) : null, ne !== null && (Xe = et(ne), ue = ne.tag, ne !== Xe || ue !== 5 && ue !== 27 && ue !== 6) && (ne = null)) : (x = null, ne = D), x !== ne)) {
            if (ue = Sh, V = "onMouseLeave", R = "onMouseEnter", E = "mouse", (l === "pointerout" || l === "pointerover") && (ue = df, V = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Xe = x == null ? M : tf(x), z = ne == null ? M : tf(ne), M = new ue(
              V,
              E + "leave",
              x,
              u,
              G
            ), M.target = Xe, M.relatedTarget = z, V = null, ol(G) === D && (ue = new ue(
              R,
              E + "enter",
              ne,
              u,
              G
            ), ue.target = z, ue.relatedTarget = Xe, V = ue), Xe = V, x && ne)
              t: {
                for (ue = x, R = ne, E = 0, z = ue; z; z = si(z))
                  E++;
                for (z = 0, V = R; V; V = si(V))
                  z++;
                for (; 0 < E - z; )
                  ue = si(ue), E--;
                for (; 0 < z - E; )
                  R = si(R), z--;
                for (; E--; ) {
                  if (ue === R || R !== null && ue === R.alternate)
                    break t;
                  ue = si(ue), R = si(R);
                }
                ue = null;
              }
            else ue = null;
            x !== null && cs(
              X,
              M,
              x,
              ue,
              !1
            ), ne !== null && Xe !== null && cs(
              X,
              Xe,
              ne,
              ue,
              !0
            );
          }
        }
        e: {
          if (M = D ? tf(D) : window, x = M.nodeName && M.nodeName.toLowerCase(), x === "select" || x === "input" && M.type === "file")
            var W = xh;
          else if (lr(M))
            if (Hh)
              W = Bh;
            else {
              W = Xu;
              var Ee = nr;
            }
          else
            x = M.nodeName, !x || x.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? D && Ci(D.elementType) && (W = xh) : W = lu;
          if (W && (W = W(l, D))) {
            ar(
              X,
              W,
              u,
              G
            );
            break e;
          }
          Ee && Ee(l, M, D), l === "focusout" && D && M.type === "number" && D.memoizedProps.value != null && uf(M, "number", M.value);
        }
        switch (Ee = D ? tf(D) : window, l) {
          case "focusin":
            (lr(Ee) || Ee.contentEditable === "true") && (sn = Ee, La = D, Lu = null);
            break;
          case "focusout":
            Lu = La = sn = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Li = !1, ur(X, u, G);
            break;
          case "selectionchange":
            if (Qi) break;
          case "keydown":
          case "keyup":
            ur(X, u, G);
        }
        var ae;
        if (hf)
          e: {
            switch (l) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Vu ? mf(l, u) && (fe = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (fe = "onCompositionStart");
        fe && (on && u.locale !== "ko" && (Vu || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && Vu && (ae = gh()) : (eu = G, jc = "value" in eu ? eu.value : eu.textContent, Vu = !0)), Ee = zo(D, fe), 0 < Ee.length && (fe = new Eh(
          fe,
          l,
          null,
          u,
          G
        ), X.push({ event: fe, listeners: Ee }), ae ? fe.data = ae : (ae = Gu(u), ae !== null && (fe.data = ae)))), (ae = Dh ? Mh(l, u) : Vi(l, u)) && (fe = zo(D, "onBeforeInput"), 0 < fe.length && (Ee = new Eh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          G
        ), X.push({
          event: Ee,
          listeners: fe
        }), Ee.data = ae)), ap(
          X,
          l,
          D,
          u,
          G
        );
      }
      mc(X, n);
    });
  }
  function vu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function zo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Bi(l, u), s != null && c.unshift(
        vu(l, s, r)
      ), s = Bi(l, n), s != null && c.push(
        vu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function si(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function cs(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var m = u, g = m.alternate, D = m.stateNode;
      if (m = m.tag, g !== null && g === c) break;
      m !== 5 && m !== 26 && m !== 27 || D === null || (g = D, s ? (D = Bi(u, r), D != null && y.unshift(
        vu(u, D, g)
      )) : s || (D = Bi(u, r), D != null && y.push(
        vu(u, D, g)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var da = /\r\n?/g, em = /\u0000|\uFFFD/g;
  function np(l) {
    return (typeof l == "string" ? l : "" + l).replace(da, `
`).replace(em, "");
  }
  function tm(l, n) {
    return n = np(n), np(l) === n;
  }
  function vd() {
  }
  function he(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Yc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Yc(l, "" + c);
        break;
      case "className":
        af(l, "class", c);
        break;
      case "tabIndex":
        af(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        af(l, u, c);
        break;
      case "style":
        cf(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          af(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = of("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && he(l, n, "name", s.name, s, null), he(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), he(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), he(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (he(l, n, "encType", s.encType, s, null), he(l, n, "method", s.method, s, null), he(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = of("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = vd);
        break;
      case "onScroll":
        c != null && pe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && pe("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = of("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        pe("beforetoggle", l), pe("toggle", l), In(l, "popover", c);
        break;
      case "xlinkActuate":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        In(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = iv.get(u) || u, In(l, u, c));
    }
  }
  function H(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        cf(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Yc(l, c) : (typeof c == "number" || typeof c == "bigint") && Yc(l, "" + c);
        break;
      case "onScroll":
        c != null && pe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && pe("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = vd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!na.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[xl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : In(l, u, c);
          }
    }
  }
  function se(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        pe("error", l), pe("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(C(137, n));
                default:
                  he(l, n, r, y, u, null);
              }
          }
        s && he(l, n, "srcSet", u.srcSet, u, null), c && he(l, n, "src", u.src, u, null);
        return;
      case "input":
        pe("invalid", l);
        var m = r = y = s = null, g = null, D = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var G = u[c];
            if (G != null)
              switch (c) {
                case "name":
                  s = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  g = G;
                  break;
                case "defaultChecked":
                  D = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  m = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(C(137, n));
                  break;
                default:
                  he(l, n, c, G, u, null);
              }
          }
        Zs(
          l,
          r,
          m,
          g,
          D,
          y,
          s,
          !1
        ), qu(l);
        return;
      case "select":
        pe("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (m = u[s], m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                y = m;
                break;
              case "multiple":
                c = m;
              default:
                he(l, n, s, m, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? Hi(l, !!c, n, !1) : u != null && Hi(l, !!c, u, !0);
        return;
      case "textarea":
        pe("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (m = u[y], m != null))
            switch (y) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(C(91));
                break;
              default:
                he(l, n, y, m, u, null);
            }
        ph(l, c, s, r), qu(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (c = u[g], c != null))
            switch (g) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                he(l, n, g, c, u, null);
            }
        return;
      case "dialog":
        pe("beforetoggle", l), pe("toggle", l), pe("cancel", l), pe("close", l);
        break;
      case "iframe":
      case "object":
        pe("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < is.length; c++)
          pe(is[c], l);
        break;
      case "image":
        pe("error", l), pe("load", l);
        break;
      case "details":
        pe("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        pe("error", l), pe("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in u)
          if (u.hasOwnProperty(D) && (c = u[D], c != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(C(137, n));
              default:
                he(l, n, D, c, u, null);
            }
        return;
      default:
        if (Ci(n)) {
          for (G in u)
            u.hasOwnProperty(G) && (c = u[G], c !== void 0 && H(
              l,
              n,
              G,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (m in u)
      u.hasOwnProperty(m) && (c = u[m], c != null && he(l, n, m, c, u, null));
  }
  function gv(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, y = null, m = null, g = null, D = null, G = null;
        for (x in u) {
          var X = u[x];
          if (u.hasOwnProperty(x) && X != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = X;
              default:
                c.hasOwnProperty(x) || he(l, n, x, null, c, X);
            }
        }
        for (var M in c) {
          var x = c[M];
          if (X = u[M], c.hasOwnProperty(M) && (x != null || X != null))
            switch (M) {
              case "type":
                r = x;
                break;
              case "name":
                s = x;
                break;
              case "checked":
                D = x;
                break;
              case "defaultChecked":
                G = x;
                break;
              case "value":
                y = x;
                break;
              case "defaultValue":
                m = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(C(137, n));
                break;
              default:
                x !== X && he(
                  l,
                  n,
                  M,
                  x,
                  c,
                  X
                );
            }
        }
        ws(
          l,
          y,
          m,
          g,
          D,
          G,
          r,
          s
        );
        return;
      case "select":
        x = y = m = M = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                x = g;
              default:
                c.hasOwnProperty(r) || he(
                  l,
                  n,
                  r,
                  null,
                  c,
                  g
                );
            }
        for (s in c)
          if (r = c[s], g = u[s], c.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                M = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== g && he(
                  l,
                  n,
                  s,
                  r,
                  c,
                  g
                );
            }
        n = m, u = y, c = x, M != null ? Hi(l, !!u, M, !1) : !!c != !!u && (n != null ? Hi(l, !!u, n, !0) : Hi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        x = M = null;
        for (m in u)
          if (s = u[m], u.hasOwnProperty(m) && s != null && !c.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                he(l, n, m, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                M = s;
                break;
              case "defaultValue":
                x = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(C(91));
                break;
              default:
                s !== r && he(l, n, y, s, c, r);
            }
        mh(l, M, x);
        return;
      case "option":
        for (var ne in u)
          if (M = u[ne], u.hasOwnProperty(ne) && M != null && !c.hasOwnProperty(ne))
            switch (ne) {
              case "selected":
                l.selected = !1;
                break;
              default:
                he(
                  l,
                  n,
                  ne,
                  null,
                  c,
                  M
                );
            }
        for (g in c)
          if (M = c[g], x = u[g], c.hasOwnProperty(g) && M !== x && (M != null || x != null))
            switch (g) {
              case "selected":
                l.selected = M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                he(
                  l,
                  n,
                  g,
                  M,
                  c,
                  x
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ue in u)
          M = u[ue], u.hasOwnProperty(ue) && M != null && !c.hasOwnProperty(ue) && he(l, n, ue, null, c, M);
        for (D in c)
          if (M = c[D], x = u[D], c.hasOwnProperty(D) && M !== x && (M != null || x != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(C(137, n));
                break;
              default:
                he(
                  l,
                  n,
                  D,
                  M,
                  c,
                  x
                );
            }
        return;
      default:
        if (Ci(n)) {
          for (var Xe in u)
            M = u[Xe], u.hasOwnProperty(Xe) && M !== void 0 && !c.hasOwnProperty(Xe) && H(
              l,
              n,
              Xe,
              void 0,
              c,
              M
            );
          for (G in c)
            M = c[G], x = u[G], !c.hasOwnProperty(G) || M === x || M === void 0 && x === void 0 || H(
              l,
              n,
              G,
              M,
              c,
              x
            );
          return;
        }
    }
    for (var R in u)
      M = u[R], u.hasOwnProperty(R) && M != null && !c.hasOwnProperty(R) && he(l, n, R, null, c, M);
    for (X in c)
      M = c[X], x = u[X], !c.hasOwnProperty(X) || M === x || M == null && x == null || he(l, n, X, M, c, x);
  }
  var os = null, fs = null;
  function Ba(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function gu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Do(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Bn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Oo = null;
  function bu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Oo ? !1 : (Oo = l, !0) : (Oo = null, !1);
  }
  var gd = typeof setTimeout == "function" ? setTimeout : void 0, bv = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, Sv = typeof queueMicrotask == "function" ? queueMicrotask : typeof up < "u" ? function(l) {
    return up.resolve(null).then(l).catch(_n);
  } : gd;
  function _n(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ri(l) {
    return l === "head";
  }
  function bd(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && Il(y.documentElement), u & 2 && Il(y.body), u & 4)
              for (u = y.head, Il(u), y = u.firstChild; y; ) {
                var m = y.nextSibling, g = y.nodeName;
                y[F] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = m;
              }
          }
          if (s === 0) {
            l.removeChild(r), Yn(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Yn(n);
  }
  function ss(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ss(u), ef(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Mo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[F])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Pa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Tv(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Pa(l.nextSibling), l === null)) return null;
    return l;
  }
  function rs(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Ev(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Pa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var di = null;
  function ml(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function $(l, n, u) {
    switch (n = Ba(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(C(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(C(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(C(454));
        return l;
      default:
        throw Error(C(451));
    }
  }
  function Il(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    ef(l);
  }
  var xt = /* @__PURE__ */ new Map(), zl = /* @__PURE__ */ new Set();
  function Sd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Su = j.d;
  j.d = {
    f: Td,
    r: Ed,
    D: Tu,
    C: Ad,
    L: hi,
    m: Dl,
    X: yi,
    S: Pl,
    M: lm
  };
  function Td() {
    var l = Su.f(), n = rc();
    return l || n;
  }
  function Ed(l) {
    var n = Oi(l);
    n !== null && n.tag === 5 && n.type === "form" ? uo(n) : Su.r(l);
  }
  var pl = typeof document > "u" ? null : document;
  function en(l, n, u) {
    var c = pl;
    if (c && typeof n == "string" && n) {
      var s = Sa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), zl.has(s) || (zl.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), se(n, "link", l), Lt(n), c.head.appendChild(n)));
    }
  }
  function Tu(l) {
    Su.D(l), en("dns-prefetch", l, null);
  }
  function Ad(l, n) {
    Su.C(l, n), en("preconnect", l, n);
  }
  function hi(l, n, u) {
    Su.L(l, n, u);
    var c = pl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Sa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Sa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Sa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Sa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Uo(l);
          break;
        case "script":
          r = _a(l);
      }
      xt.has(r) || (l = Ne(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), xt.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(xo(r)) || n === "script" && c.querySelector(pc(r)) || (n = c.createElement("link"), se(n, "link", l), Lt(n), c.head.appendChild(n)));
    }
  }
  function Dl(l, n) {
    Su.m(l, n);
    var u = pl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Sa(c) + '"][href="' + Sa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = _a(l);
      }
      if (!xt.has(r) && (l = Ne({ rel: "modulepreload", href: l }, n), xt.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(pc(r)))
              return;
        }
        c = u.createElement("link"), se(c, "link", l), Lt(c), u.head.appendChild(c);
      }
    }
  }
  function Pl(l, n, u) {
    Su.S(l, n, u);
    var c = pl;
    if (c && l) {
      var s = Fn(c).hoistableStyles, r = Uo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var m = { loading: 0, preload: null };
        if (y = c.querySelector(
          xo(r)
        ))
          m.loading = 5;
        else {
          l = Ne(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = xt.get(r)) && zd(l, u);
          var g = y = c.createElement("link");
          Lt(g), se(g, "link", l), g._p = new Promise(function(D, G) {
            g.onload = D, g.onerror = G;
          }), g.addEventListener("load", function() {
            m.loading |= 1;
          }), g.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Rd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: m
        }, s.set(r, y);
      }
    }
  }
  function yi(l, n) {
    Su.X(l, n);
    var u = pl;
    if (u && l) {
      var c = Fn(u).hoistableScripts, s = _a(l), r = c.get(s);
      r || (r = u.querySelector(pc(s)), r || (l = Ne({ src: l, async: !0 }, n), (n = xt.get(s)) && Dd(l, n), r = u.createElement("script"), Lt(r), se(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function lm(l, n) {
    Su.M(l, n);
    var u = pl;
    if (u && l) {
      var c = Fn(u).hoistableScripts, s = _a(l), r = c.get(s);
      r || (r = u.querySelector(pc(s)), r || (l = Ne({ src: l, async: !0, type: "module" }, n), (n = xt.get(s)) && Dd(l, n), r = u.createElement("script"), Lt(r), se(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function ip(l, n, u, c) {
    var s = (s = xe.current) ? Sd(s) : null;
    if (!s) throw Error(C(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Uo(u.href), u = Fn(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Uo(u.href);
          var r = Fn(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            xo(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), xt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, xt.set(l, u), r || cp(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(C(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(C(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = _a(u), u = Fn(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(C(444, l));
    }
  }
  function Uo(l) {
    return 'href="' + Sa(l) + '"';
  }
  function xo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ho(l) {
    return Ne({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function cp(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), se(n, "link", u), Lt(n), l.head.appendChild(n));
  }
  function _a(l) {
    return '[src="' + Sa(l) + '"]';
  }
  function pc(l) {
    return "script[async]" + l;
  }
  function op(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Sa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Lt(c), c;
          var s = Ne({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Lt(c), se(c, "style", s), Rd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Uo(u.href);
          var r = l.querySelector(
            xo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Lt(r), r;
          c = Ho(u), (s = xt.get(s)) && zd(c, s), r = (l.ownerDocument || l).createElement("link"), Lt(r);
          var y = r;
          return y._p = new Promise(function(m, g) {
            y.onload = m, y.onerror = g;
          }), se(r, "link", c), n.state.loading |= 4, Rd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = _a(u.src), (s = l.querySelector(
            pc(r)
          )) ? (n.instance = s, Lt(s), s) : (c = u, (s = xt.get(r)) && (c = Ne({}, u), Dd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Lt(s), se(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(C(443, n.type));
      }
    else
      n.type === "stylesheet" && !(n.state.loading & 4) && (c = n.instance, n.state.loading |= 4, Rd(c, u.precedence, l));
    return n.instance;
  }
  function Rd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var m = c[y];
      if (m.dataset.precedence === n) r = m;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function zd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Dd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var mi = null;
  function am(l, n, u) {
    if (mi === null) {
      var c = /* @__PURE__ */ new Map(), s = mi = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = mi, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[F] || r[It] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var m = c.get(y);
        m ? m.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function nm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function fp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function um(l) {
    return !(l.type === "stylesheet" && !(l.state.loading & 3));
  }
  var Co = null;
  function sp() {
  }
  function rp(l, n, u) {
    if (Co === null) throw Error(C(475));
    var c = Co;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var s = Uo(u.href), r = l.querySelector(
          xo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = ds.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Lt(r);
          return;
        }
        r = l.ownerDocument || l, u = Ho(u), (s = xt.get(s)) && zd(u, s), r = r.createElement("link"), Lt(r);
        var y = r;
        y._p = new Promise(function(m, g) {
          y.onload = m, y.onerror = g;
        }), se(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && !(n.state.loading & 3) && (c.count++, n = ds.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function im() {
    if (Co === null) throw Error(C(475));
    var l = Co;
    return l.stylesheets && l.count === 0 && hs(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && hs(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function ds() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) hs(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var No = null;
  function hs(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, No = /* @__PURE__ */ new Map(), n.forEach(ha, l), No = null, ds.call(l));
  }
  function ha(l, n) {
    if (!(n.state.loading & 4)) {
      var u = No.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), No.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = ds.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var ea = {
    $$typeof: dt,
    Provider: null,
    Consumer: null,
    _currentValue: L,
    _currentValue2: L,
    _threadCount: 0
  };
  function Av(l, n, u, c, s, r, y, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cu(0), this.hiddenUpdates = Cu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function cm(l, n, u, c, s, r, y, m, g, D, G, X) {
    return l = new Av(
      l,
      n,
      u,
      y,
      m,
      g,
      D,
      X
    ), n = 1, r === !0 && (n |= 24), r = Ll(3, null, null, n), l.current = r, r.stateNode = l, n = eo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, vr(r), l;
  }
  function om(l) {
    return l ? (l = Jc, l) : Jc;
  }
  function fm(l, n, u, c, s, r) {
    s = om(s), c.context === null ? c.context = s : c.pendingContext = s, c = Zl(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = bn(l, c, n), u !== null && (ra(u, l, n), $i(u, l, n));
  }
  function sm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Od(l, n) {
    sm(l, n), (l = l.alternate) && sm(l, n);
  }
  function rm(l) {
    if (l.tag === 13) {
      var n = hn(l, 67108864);
      n !== null && ra(n, l, 67108864), Od(l, 67108864);
    }
  }
  var ys = !0;
  function dp(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = j.p;
    try {
      j.p = 2, dm(l, n, u, c);
    } finally {
      j.p = r, A.T = s;
    }
  }
  function hp(l, n, u, c) {
    var s = A.T;
    A.T = null;
    var r = j.p;
    try {
      j.p = 8, dm(l, n, u, c);
    } finally {
      j.p = r, A.T = s;
    }
  }
  function dm(l, n, u, c) {
    if (ys) {
      var s = Md(c);
      if (s === null)
        Na(
          l,
          n,
          c,
          Ud,
          u
        ), vc(l, c);
      else if (mp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (vc(l, c), n & 4 && -1 < yp.indexOf(l)) {
        for (; s !== null; ) {
          var r = Oi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = aa(r.pendingLanes);
                  if (y !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; y; ) {
                      var g = 1 << 31 - Xl(y);
                      m.entanglements[1] |= g, y &= ~g;
                    }
                    Fl(r), !(we & 6) && (ud = la() + 500, ts(0));
                  }
                }
                break;
              case 13:
                m = hn(r, 2), m !== null && ra(m, r, 2), rc(), Od(r, 2);
            }
          if (r = Md(c), r === null && Na(
            l,
            n,
            c,
            Ud,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        Na(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Md(l) {
    return l = Ks(l), hm(l);
  }
  var Ud = null;
  function hm(l) {
    if (Ud = null, l = ol(l), l !== null) {
      var n = et(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Gt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Ud = l, null;
  }
  function ym(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Wo()) {
          case a0:
            return 2;
          case oh:
            return 8;
          case Fo:
          case fh:
            return 32;
          case Cc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Bo = !1, qn = null, Eu = null, Au = null, ms = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map(), pi = [], yp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Eu = null;
        break;
      case "mouseover":
      case "mouseout":
        Au = null;
        break;
      case "pointerover":
      case "pointerout":
        ms.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ps.delete(n.pointerId);
    }
  }
  function gc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Oi(n), n !== null && rm(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function mp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return qn = gc(
          qn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Eu = gc(
          Eu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Au = gc(
          Au,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return ms.set(
          r,
          gc(
            ms.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, ps.set(
          r,
          gc(
            ps.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function mm(l) {
    var n = ol(l.target);
    if (n !== null) {
      var u = et(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Gt(u), n !== null) {
            l.blockedOn = n, nv(l.priority, function() {
              if (u.tag === 13) {
                var c = sa();
                c = Va(c);
                var s = hn(u, c);
                s !== null && ra(s, u, c), Od(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function vs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Md(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ni = c, u.target.dispatchEvent(c), Ni = null;
      } else
        return n = Oi(u), n !== null && rm(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function gs(l, n, u) {
    vs(l) && u.delete(n);
  }
  function _o() {
    Bo = !1, qn !== null && vs(qn) && (qn = null), Eu !== null && vs(Eu) && (Eu = null), Au !== null && vs(Au) && (Au = null), ms.forEach(gs), ps.forEach(gs);
  }
  function xd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Bo || (Bo = !0, w.unstable_scheduleCallback(
      w.unstable_NormalPriority,
      _o
    )));
  }
  var bc = null;
  function pm(l) {
    bc !== l && (bc = l, w.unstable_scheduleCallback(
      w.unstable_NormalPriority,
      function() {
        bc === l && (bc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (hm(c || u) === null)
              continue;
            break;
          }
          var r = Oi(u);
          r !== null && (l.splice(n, 3), n -= 3, Yr(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Yn(l) {
    function n(g) {
      return xd(g, l);
    }
    qn !== null && xd(qn, l), Eu !== null && xd(Eu, l), Au !== null && xd(Au, l), ms.forEach(n), ps.forEach(n);
    for (var u = 0; u < pi.length; u++) {
      var c = pi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < pi.length && (u = pi[0], u.blockedOn === null); )
      mm(u), u.blockedOn === null && pi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[xl] || null;
        if (typeof r == "function")
          y || pm(u);
        else if (y) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[xl] || null)
              m = y.formAction;
            else if (hm(s) !== null) continue;
          } else m = y.action;
          typeof m == "function" ? u[c + 1] = m : (u.splice(c, 3), c -= 3), pm(u);
        }
      }
  }
  function vm(l) {
    this._internalRoot = l;
  }
  Hd.prototype.render = vm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(C(409));
    var u = n.current, c = sa();
    fm(u, c, l, n, null, null);
  }, Hd.prototype.unmount = vm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      fm(l.current, 2, null, l, null, null), rc(), n[_c] = null;
    }
  };
  function Hd(l) {
    this._internalRoot = l;
  }
  Hd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = c0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < pi.length && n !== 0 && n < pi[u].priority; u++) ;
      pi.splice(u, 0, l), u === 0 && mm(l);
    }
  };
  var gm = Ht.version;
  if (gm !== "19.1.1")
    throw Error(
      C(
        527,
        gm,
        "19.1.1"
      )
    );
  j.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(C(188)) : (l = Object.keys(l).join(","), Error(C(268, l)));
    return l = K(n), l = l !== null ? gt(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ql = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bs.isDisabled && bs.supportsFiber)
      try {
        Nc = bs.inject(
          ql
        ), Ul = bs;
      } catch {
      }
  }
  return t0.createRoot = function(l, n) {
    if (!Ze(l)) throw Error(C(299));
    var u = !1, c = "", s = oo, r = my, y = wf, m = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks)), n = cm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      m,
      null
    ), l[_c] = n.current, Py(l), new vm(n);
  }, t0.hydrateRoot = function(l, n, u) {
    if (!Ze(l)) throw Error(C(299));
    var c = !1, s = "", r = oo, y = my, m = wf, g = null, D = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (m = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (D = u.formState)), n = cm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      m,
      g,
      D
    ), n.context = om(null), u = n.current, c = sa(), c = Va(c), s = Zl(c), s.callback = null, bn(u, s, c), u = c, n.current.lanes = u, Di(n, u), Fl(n), l[_c] = n.current, Py(l), new Hd(n);
  }, t0.version = "19.1.1", t0;
}
var l0 = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cb;
function KS() {
  return Cb || (Cb = 1, process.env.NODE_ENV !== "production" && function() {
    function w(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Ht(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = he(e) ? e.slice() : Se({}, e);
      return f[o] = Ht(e[o], t, a + 1, i), f;
    }
    function nt(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return C(e, t, a, 0);
      }
    }
    function C(e, t, a, i) {
      var o = t[i], f = he(e) ? e.slice() : Se({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], he(f) ? f.splice(o, 1) : delete f[o]) : f[o] = C(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Ze(e, t, a) {
      var i = t[a], o = he(e) ? e.slice() : Se({}, e);
      return a + 1 === t.length ? (he(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Ze(e[i], t, a + 1), o);
    }
    function et() {
      return !1;
    }
    function Gt() {
      return null;
    }
    function Vt() {
    }
    function K() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function gt() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ne() {
    }
    function Ye(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function de(e, t, a, i) {
      return new yf(e, t, a, i);
    }
    function tt(e, t) {
      e.context === qo && ($e(e.current, 2, t, e, null, null), uc());
    }
    function ut(e, t) {
      if (Vn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fo(), hf(
          e.current,
          t,
          a
        ), uc();
      }
    }
    function Bt(e) {
      Vn = e;
    }
    function ke(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Je(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, t.flags & 4098 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Xt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function dt(e) {
      if (Je(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Wt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Je(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return dt(o), e;
            if (f === i) return dt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Sl(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Sl(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ht(e) {
      return e === null || typeof e != "object" ? null : (e = tm && e[tm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Be(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === vd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case pe:
          return "Fragment";
        case Ro:
          return "Profiler";
        case Ao:
          return "StrictMode";
        case zo:
          return "Suspense";
        case si:
          return "SuspenseList";
        case em:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case mc:
            return "Portal";
          case Na:
            return (e.displayName || "Context") + ".Provider";
          case pd:
            return (e._context.displayName || "Context") + ".Consumer";
          case vu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case cs:
            return t = e.displayName || null, t !== null ? t : Be(e.type) || "Memo";
          case da:
            t = e._payload, e = e._init;
            try {
              return Be(e(t));
            } catch {
            }
        }
      return null;
    }
    function Ct(e) {
      return typeof e.tag == "number" ? le(e) : typeof e.name == "string" ? e.name : null;
    }
    function le(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Be(t);
        case 8:
          return t === Ao ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return le(e.return);
      }
      return null;
    }
    function ot(e) {
      return { current: e };
    }
    function Z(e, t) {
      0 > Ba ? console.error("Unexpected pop.") : (t !== fs[Ba] && console.error("Unexpected Fiber popped."), e.current = os[Ba], os[Ba] = null, fs[Ba] = null, Ba--);
    }
    function te(e, t, a) {
      Ba++, os[Ba] = e.current, fs[Ba] = a, e.current = t;
    }
    function Qe(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function jt(e, t) {
      te(Bn, t, e), te(Do, e, e), te(gu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Ke(t) : Uc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Ke(t), t = $l(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = uh;
                break;
              case "math":
                t = Zp;
                break;
              default:
                t = Uc;
            }
      }
      a = a.toLowerCase(), a = mh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Z(gu, e), te(gu, a, e);
    }
    function lt(e) {
      Z(gu, e), Z(Do, e), Z(Bn, e);
    }
    function A() {
      return Qe(gu.current);
    }
    function j(e) {
      e.memoizedState !== null && te(Oo, e, e);
      var t = Qe(gu.current), a = e.type, i = $l(t.context, a);
      a = mh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (te(Do, e, e), te(gu, i, e));
    }
    function L(e) {
      Do.current === e && (Z(gu, e), Z(Do, e)), Oo.current === e && (Z(Oo, e), Wm._currentValue = Ys);
    }
    function ie(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function N(e) {
      try {
        return ee(e), !1;
      } catch {
        return !0;
      }
    }
    function ee(e) {
      return "" + e;
    }
    function k(e, t) {
      if (N(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ie(e)
        ), ee(e);
    }
    function ce(e, t) {
      if (N(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ie(e)
        ), ee(e);
    }
    function Re(e) {
      if (N(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ie(e)
        ), ee(e);
    }
    function it(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        di = t.inject(e), ml = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function xe(e) {
      if (typeof Ev == "function" && Pa(e), ml && typeof ml.setStrictMode == "function")
        try {
          ml.setStrictMode(di, e);
        } catch (t) {
          Il || (Il = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Uu(e) {
      $ = e;
    }
    function Et() {
      $ !== null && typeof $.markCommitStopped == "function" && $.markCommitStopped();
    }
    function cl(e) {
      $ !== null && typeof $.markComponentRenderStarted == "function" && $.markComponentRenderStarted(e);
    }
    function ba() {
      $ !== null && typeof $.markComponentRenderStopped == "function" && $.markComponentRenderStopped();
    }
    function Ei(e) {
      $ !== null && typeof $.markRenderStarted == "function" && $.markRenderStarted(e);
    }
    function Gs() {
      $ !== null && typeof $.markRenderStopped == "function" && $.markRenderStopped();
    }
    function Ai(e, t) {
      $ !== null && typeof $.markStateUpdateScheduled == "function" && $.markStateUpdateScheduled(e, t);
    }
    function ch(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Sd(e) / Su | 0) | 0;
    }
    function tv(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ri(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function la(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ri(i) : (d &= h, d !== 0 ? o = Ri(d) : a || (a = h & ~e, a !== 0 && (o = Ri(a))))) : (h = i & ~f, h !== 0 ? o = Ri(h) : d !== 0 ? o = Ri(d) : a || (a = i & ~e, a !== 0 && (o = Ri(a)))), o === 0 ? 0 : t !== 0 && t !== o && !(t & f) && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function Wo(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function a0(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function oh() {
      var e = Td;
      return Td <<= 1, !(Td & 4194048) && (Td = 256), e;
    }
    function Fo() {
      var e = Ed;
      return Ed <<= 1, !(Ed & 62914560) && (Ed = 4194304), e;
    }
    function fh(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Cc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function lv(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, p = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var U = 31 - zl(a), _ = 1 << U;
        h[U] = 0, p[U] = -1;
        var O = v[U];
        if (O !== null)
          for (v[U] = null, U = 0; U < O.length; U++) {
            var q = O[U];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~_;
      }
      i !== 0 && n0(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function n0(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - zl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Nc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - zl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Ul(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function $n(e, t, a) {
      if (xt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - zl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Xl(e, t) {
      if (xt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - zl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function sh(e) {
      return e &= -e, pl < e ? en < e ? e & 134217727 ? Tu : Ad : en : pl;
    }
    function u0() {
      var e = se.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Tu : yd(e.type));
    }
    function av(e, t) {
      var a = se.p;
      try {
        return se.p = e, t();
      } finally {
        se.p = a;
      }
    }
    function Bc(e) {
      delete e[Dl], delete e[Pl], delete e[lm], delete e[ip], delete e[Uo];
    }
    function Wn(e) {
      var t = e[Dl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yi] || a[Dl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = bo(e); e !== null; ) {
              if (a = e[Dl])
                return a;
              e = bo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function aa(e) {
      if (e = e[Dl] || e[yi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function xu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function nn(e) {
      var t = e[xo];
      return t || (t = e[xo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Ft(e) {
      e[Ho] = !0;
    }
    function Hu(e, t) {
      zi(e, t), zi(e + "Capture", t);
    }
    function zi(e, t) {
      _a[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), _a[e] = t;
      var a = e.toLowerCase();
      for (pc[a] = e, e === "onDoubleClick" && (pc.ondblclick = e), e = 0; e < t.length; e++)
        cp.add(t[e]);
    }
    function Cu(e, t) {
      op[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Di(e) {
      return bu.call(Dd, e) ? !0 : bu.call(zd, e) ? !1 : Rd.test(e) ? Dd[e] = !0 : (zd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function i0(e, t, a) {
      if (Di(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (k(a, t), e === "" + a ? a : e);
      }
    }
    function Io(e, t, a) {
      if (Di(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          k(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Po(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        k(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Va(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        k(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Vs() {
    }
    function c0() {
      if (mi === 0) {
        am = console.log, nm = console.info, fp = console.warn, um = console.error, Co = console.group, sp = console.groupCollapsed, rp = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Vs,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      mi++;
    }
    function nv() {
      if (mi--, mi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Se({}, e, { value: am }),
          info: Se({}, e, { value: nm }),
          warn: Se({}, e, { value: fp }),
          error: Se({}, e, { value: um }),
          group: Se({}, e, { value: Co }),
          groupCollapsed: Se({}, e, { value: sp }),
          groupEnd: Se({}, e, { value: rp })
        });
      }
      0 > mi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Qt(e) {
      if (im === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          im = t && t[1] || "", ds = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + im + e + ds;
    }
    function It(e, t) {
      if (!e || No) return "";
      var a = hs.get(e);
      if (a !== void 0) return a;
      No = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = H.H, H.H = null, c0();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (I) {
                    var q = I;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (I) {
                    q = I;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (I) {
                  q = I;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (I) {
              if (I && q && typeof I.stack == "string")
                return [I.stack, q.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], p = d[1];
        if (h && p) {
          var v = h.split(`
`), U = p.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < U.length && !U[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === U.length)
            for (f = v.length - 1, d = U.length - 1; 1 <= f && 0 <= d && v[f] !== U[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== U[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== U[d]) {
                    var _ = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && hs.set(e, _), _;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        No = !1, H.H = i, nv(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? Qt(v) : "", typeof e == "function" && hs.set(e, v), v;
    }
    function xl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function _c(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Qt(e.type);
        case 16:
          return Qt("Lazy");
        case 13:
          return Qt("Suspense");
        case 19:
          return Qt("SuspenseList");
        case 0:
        case 15:
          return It(e.type, !1);
        case 11:
          return It(e.type.render, !1);
        case 1:
          return It(e.type, !0);
        case 31:
          return Qt("Activity");
        default:
          return "";
      }
    }
    function Xs(e) {
      try {
        var t = "";
        do {
          t += _c(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = Qt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    function o0(e) {
      return (e = e ? e.displayName || e.name : "") ? Qt(e) : "";
    }
    function js() {
      if (ha === null) return null;
      var e = ha._debugOwner;
      return e != null ? Ct(e) : null;
    }
    function f0() {
      if (ha === null) return "";
      var e = ha;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Qt(e.type);
            break;
          case 13:
            t += Qt("Suspense");
            break;
          case 19:
            t += Qt("SuspenseList");
            break;
          case 31:
            t += Qt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += o0(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += o0(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = xl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + xl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function F(e, t, a, i, o, f, d) {
      var h = ha;
      ef(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        ef(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function ef(e) {
      H.getCurrentStack = e === null ? null : f0, ea = !1, ha = e;
    }
    function ol(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Re(e), e;
        default:
          return "";
      }
    }
    function Oi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function tf(e) {
      var t = Oi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Re(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Re(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Re(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Fn(e) {
      e._valueTracker || (e._valueTracker = tf(e));
    }
    function Lt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Oi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function lf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function na(e) {
      return e.replace(
        Av,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Nu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || om || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component",
        t.type
      ), om = !0), t.value === void 0 || t.defaultValue === void 0 || cm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component",
        t.type
      ), cm = !0);
    }
    function Bu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (k(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ol(t)) : e.value !== "" + ol(t) && (e.value = "" + ol(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Qs(e, d, ol(t)) : a != null ? Qs(e, d, ol(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (k(h, "name"), e.name = "" + ol(h)) : e.removeAttribute("name");
    }
    function s0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (k(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + ol(a) : "", t = t != null ? "" + ol(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (k(d, "name"), e.name = d);
    }
    function Qs(e, t, a) {
      t === "number" && lf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function rh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? us.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || sm || (sm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Od || (Od = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || fm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), fm = !0);
    }
    function r0() {
      var e = js();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function In(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + ol(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function af(e, t) {
      for (e = 0; e < ys.length; e++) {
        var a = ys[e];
        if (t[a] != null) {
          var i = he(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            r0()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            r0()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || rm || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), rm = !0);
    }
    function un(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || dp || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component"
      ), dp = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ls(e, t, a) {
      if (t != null && (t = "" + ol(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + ol(a) : "";
    }
    function dh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (he(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = ol(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Mi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Mi(e.children[0], t) : e;
    }
    function Hl(e) {
      return "  " + "  ".repeat(e);
    }
    function _u(e) {
      return "+ " + "  ".repeat(e);
    }
    function Ui(e) {
      return "- " + "  ".repeat(e);
    }
    function hh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Tl(e, t) {
      return hp.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function nf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return _u(a) + Tl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), _u(a) + Tl(e, i) + `
` + Ui(a) + Tl(t, i) + `
`;
      }
      return Hl(a) + Tl(e, i) + `
`;
    }
    function yh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function qu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (he(e)) return "[...]";
          if (e.$$typeof === fi)
            return (t = Be(e.type)) ? "<" + t + ">" : "<...>";
          var a = yh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = qu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function xi(e, t) {
      return typeof e != "string" || hp.test(e) ? "{" + qu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = xi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function uv(e, t, a) {
      var i = "", o = Se({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = qu(e[f], d);
          t.hasOwnProperty(f) ? (d = qu(t[f], d), i += _u(a) + f + ": " + h + `
`, i += Ui(a) + f + ": " + d + `
`) : i += _u(a) + f + ": " + h + `
`;
        }
      for (var p in o)
        o.hasOwnProperty(p) && (e = qu(
          o[p],
          120 - 2 * a - p.length - 2
        ), i += Ui(a) + p + ": " + e + `
`);
      return i;
    }
    function Sa(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && f.set(
          v.toLowerCase(),
          v
        );
      if (f.size === 1 && f.has("children"))
        o += qc(
          e,
          t,
          Hl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, p = f.get(d.toLowerCase());
            if (p !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              p = a[p];
              var U = xi(
                v,
                h
              );
              h = xi(
                p,
                h
              ), typeof v == "object" && v !== null && typeof p == "object" && p !== null && yh(v) === "Object" && yh(p) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(p).length || -1 < U.indexOf("...") || -1 < h.indexOf("...")) ? o += Hl(i + 1) + d + `={{
` + uv(
                v,
                p,
                i + 2
              ) + Hl(i + 1) + `}}
` : (o += _u(i + 1) + d + "=" + U + `
`, o += Ui(i + 1) + d + "=" + h + `
`);
            } else
              o += Hl(i + 1) + d + "=" + xi(t[d], h) + `
`;
          }
        f.forEach(function(_) {
          if (_ !== "children") {
            var O = 120 - 2 * (i + 1) - _.length - 1;
            o += Ui(i + 1) + _ + "=" + xi(a[_], O) + `
`;
          }
        }), o = o === "" ? Hl(i) + "<" + e + `>
` : Hl(i) + "<" + e + `
` + o + Hl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += nf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + nf("" + t, null, i + 1) : o + nf("" + t, void 0, i + 1)), o;
    }
    function ws(e, t) {
      var a = hh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += ws(e, t), e = e.sibling;
        return a;
      }
      return Hl(t) + "<" + a + `>
`;
    }
    function Zs(e, t) {
      var a = Mi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Hl(t) + `...
` + Zs(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Hl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = nf(o, e.serverProps, t), t++;
      else if (f = hh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var p = xi(o[v], 15);
              if (d -= v.length + p.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + p;
            }
          i = Hl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = qc(
            f,
            o,
            _u(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Sa(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (v += Zs(d, t), f++) : v += ws(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += Hl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (Ui(t) + Tl(f, 120 - 2 * t) + `
`) : v + qc(
          f.type,
          f.props,
          Ui(t)
        );
      return a + i + v;
    }
    function uf(e) {
      try {
        return `

` + Zs(e, 0);
      } catch {
        return "";
      }
    }
    function Hi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? uf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function mh(e, t) {
      var a = Se({}, e || ym), i = { tag: t };
      return Md.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Ud.indexOf(t) !== -1 && (a.pTagInButtonScope = null), dm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ph(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return hm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Yc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function d0(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Js(e, t) {
      t = t || ym;
      var a = t.current;
      if (t = (a = ph(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Yc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, Bo[t]) return !1;
      Bo[t] = !0;
      var o = (t = ha) ? d0(t.return, i) : null, f = t !== null && o !== null ? Hi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || F(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function cf(e, t, a) {
      if (a || ph("#text", t, !1))
        return !0;
      if (a = "#text|" + t, Bo[a]) return !1;
      Bo[a] = !0;
      var i = (a = ha) ? d0(a, t) : null;
      return a = a !== null && i !== null ? Hi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Ci(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function iv(e) {
      return e.replace(pi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function h0(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? vc.hasOwnProperty(t) && vc[t] || (vc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        iv(t.replace(ps, "ms-"))
      )) : ms.test(t) ? vc.hasOwnProperty(t) && vc[t] || (vc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !yp.test(a) || gc.hasOwnProperty(a) && gc[a] || (gc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(yp, "")
      )), typeof a == "number" && (isNaN(a) ? mp || (mp = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || mm || (mm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || vs.has(t) ? t === "float" ? e.cssFloat = a : (ce(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function of(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = qn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = qn[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var p in t)
            for (o = qn[p] || [p], f = 0; f < o.length; f++)
              h[o[f]] = p;
          p = {};
          for (var v in i)
            if (o = i[v], (f = h[v]) && o !== f && (d = o + "," + f, !p[d])) {
              p[d] = !0, d = console;
              var U = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                U == null || typeof U == "boolean" || U === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var _ in a)
          !a.hasOwnProperty(_) || t != null && t.hasOwnProperty(_) || (_.indexOf("--") === 0 ? e.setProperty(_, "") : _ === "float" ? e.cssFloat = "" : e[_] = "");
        for (var O in t)
          v = t[O], t.hasOwnProperty(O) && a[O] !== v && h0(e, O, v);
      } else
        for (i in t)
          t.hasOwnProperty(i) && h0(e, i, t[i]);
    }
    function Ni(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Ks(e) {
      return xd.get(e) || e;
    }
    function Gc(e, t) {
      if (bu.call(Yn, t) && Yn[t])
        return !0;
      if (Hd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = pm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Yn[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Yn[t] = !0;
      }
      if (vm.test(t)) {
        if (e = t.toLowerCase(), e = pm.hasOwnProperty(e) ? e : null, e == null) return Yn[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Yn[t] = !0);
      }
      return !0;
    }
    function Vc(e, t) {
      var a = [], i;
      for (i in t)
        Gc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function y0(e, t, a, i) {
      if (bu.call(ql, t) && ql[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), ql[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), ql[t] = !0;
        if (bs.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), ql[t] = !0;
      } else if (bs.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), ql[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), ql[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), ql[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), ql[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), ql[t] = !0;
      if (bc.hasOwnProperty(o)) {
        if (o = bc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), ql[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), ql[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), ql[t] = !0);
          }
        case "function":
        case "symbol":
          return ql[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), ql[t] = !0;
          }
      }
      return !0;
    }
    function vh(e, t, a) {
      var i = [], o;
      for (o in t)
        y0(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Xc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Bi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function cn(e) {
      var t = aa(e);
      if (t && (e = t.stateNode)) {
        var a = e[Pl] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Bu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (k(t, "name"), a = a.querySelectorAll(
                'input[name="' + na(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Pl] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Bu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Lt(i);
            }
            break e;
          case "textarea":
            Ls(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && In(e, !!a.multiple, t, !1);
        }
      }
    }
    function ks(e, t, a) {
      if (m) return e(t, a);
      m = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (m = !1, (r !== null || y !== null) && (uc(), r && (t = r, e = y, y = r = null, cn(t), e)))
          for (t = 0; t < e.length; t++) cn(e[t]);
      }
    }
    function Pn(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Pl] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function eu() {
      if (x) return x;
      var e, t = M, a = t.length, i, o = "value" in X ? X.value : X.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return x = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function jc(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function _i() {
      return !0;
    }
    function gh() {
      return !1;
    }
    function fl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? _i : gh, this.isPropagationStopped = gh, this;
      }
      return Se(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _i);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _i);
        },
        persist: function() {
        },
        isPersistent: _i
      }), t;
    }
    function $s(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = jb[e]) ? !!t[e] : !1;
    }
    function Ws() {
      return $s;
    }
    function Cl(e, t) {
      switch (e) {
        case "keyup":
          return Pb.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ug;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Yu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Fs(e, t) {
      switch (e) {
        case "compositionend":
          return Yu(t);
        case "keypress":
          return t.which !== Hg ? null : (Ng = !0, Cg);
        case "textInput":
          return e = t.data, e === Cg && Ng ? null : e;
        default:
          return null;
      }
    }
    function ff(e, t) {
      if (Cd)
        return e === "compositionend" || !zv && Cl(e, t) ? (e = eu(), x = M = X = null, Cd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return xg && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function m0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!tS[e.type] : t === "textarea";
    }
    function bh(e) {
      if (!g) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Is(e, t, a, i) {
      r ? y ? y.push(i) : y = [i] : r = i, t = Wf(t, "onChange"), 0 < t.length && (a = new ue(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function sf(e) {
      Mn(e, 0);
    }
    function qi(e) {
      var t = xu(e);
      if (Lt(t)) return e;
    }
    function Sh(e, t) {
      if (e === "change") return t;
    }
    function p0() {
      Sm && (Sm.detachEvent("onpropertychange", v0), Tm = Sm = null);
    }
    function v0(e) {
      if (e.propertyName === "value" && qi(Tm)) {
        var t = [];
        Is(
          t,
          Tm,
          e,
          Bi(e)
        ), ks(sf, t);
      }
    }
    function cv(e, t, a) {
      e === "focusin" ? (p0(), Sm = t, Tm = a, Sm.attachEvent("onpropertychange", v0)) : e === "focusout" && p0();
    }
    function Th(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return qi(Tm);
    }
    function ov(e, t) {
      if (e === "click") return qi(t);
    }
    function fv(e, t) {
      if (e === "input" || e === "change")
        return qi(t);
    }
    function sv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function rf(e, t) {
      if (ya(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!bu.call(t, o) || !ya(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function g0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Eh(e, t) {
      var a = g0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = g0(a);
      }
    }
    function b0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? b0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function S0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = lf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = lf(e.document);
      }
      return t;
    }
    function Ah(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function T0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Ov || Nd == null || Nd !== lf(i) || (i = Nd, "selectionStart" in i && Ah(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Em && rf(Em, i) || (Em = i, i = Wf(Dv, "onSelect"), 0 < i.length && (t = new ue(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Nd)));
    }
    function tu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Yi(e) {
      if (Mv[e]) return Mv[e];
      if (!Bd[e]) return e;
      var t = Bd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in _g)
          return Mv[e] = t[a];
      return e;
    }
    function Xa(e, t) {
      Xg.set(e, t), Hu(t, [e]);
    }
    function ua(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = xv.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Xs(t)
        }, xv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Xs(t)
      };
    }
    function df() {
      for (var e = _d, t = Hv = _d = 0; t < e; ) {
        var a = Gn[t];
        Gn[t++] = null;
        var i = Gn[t];
        Gn[t++] = null;
        var o = Gn[t];
        Gn[t++] = null;
        var f = Gn[t];
        if (Gn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && E0(a, o, f);
      }
    }
    function Ps(e, t, a, i) {
      Gn[_d++] = e, Gn[_d++] = t, Gn[_d++] = a, Gn[_d++] = i, Hv |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Rh(e, t, a, i) {
      return Ps(e, t, a, i), er(e);
    }
    function jl(e, t) {
      return Ps(e, null, null, t), er(e);
    }
    function E0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & pp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - zl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function er(e) {
      if (wm > RS)
        throw Cs = wm = 0, Zm = cg = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Cs > zS && (Cs = 0, Zm = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && e.flags & 4098 && Ia(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && t.flags & 4098 && Ia(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Gi(e) {
      if (Vn === null) return e;
      var t = Vn(e);
      return t === void 0 ? e : t.current;
    }
    function zh(e) {
      if (Vn === null) return e;
      var t = Vn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Gi(e.render), e.render !== t) ? (t = { $$typeof: vu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function A0(e, t) {
      if (Vn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === da) && (i = !0);
          break;
        case 11:
          (o === vu || o === da) && (i = !0);
          break;
        case 14:
        case 15:
          (o === cs || o === da) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Vn(a), e !== void 0 && e === Vn(t)));
    }
    function R0(e) {
      Vn !== null && typeof WeakSet == "function" && (qd === null && (qd = /* @__PURE__ */ new WeakSet()), qd.add(e));
    }
    function hf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, p = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          p = h;
          break;
        case 11:
          p = h.render;
      }
      if (Vn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, p !== null && (p = Vn(p), p !== void 0 && (a.has(p) ? h = !0 : t.has(p) && (d === 1 ? h = !0 : v = !0))), qd !== null && (qd.has(e) || i !== null && qd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (i = jl(e, 2), i !== null && zt(i, e, 2)), o === null || h || hf(
        o,
        t,
        a
      ), f !== null && hf(
        f,
        t,
        a
      );
    }
    function yf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Qg || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Dh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function on(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = de(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Gi(e.type);
          break;
        case 1:
          a.type = Gi(e.type);
          break;
        case 11:
          a.type = zh(e.type);
      }
      return a;
    }
    function Oh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function tr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Dh(e) && (d = 1), h = Gi(h);
      else if (typeof e == "string")
        d = A(), d = To(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case em:
            return t = de(31, a, t, o), t.elementType = em, t.lanes = f, t;
          case pe:
            return Gu(
              a.children,
              o,
              f,
              t
            );
          case Ao:
            d = 8, o |= ta, o |= Ru;
            break;
          case Ro:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = de(12, e, t, i | Yl), t.elementType = Ro, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case zo:
            return t = de(13, a, t, o), t.elementType = zo, t.lanes = f, t;
          case si:
            return t = de(19, a, t, o), t.elementType = si, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Py:
                case Na:
                  d = 10;
                  break e;
                case pd:
                  d = 9;
                  break e;
                case vu:
                  d = 11, h = zh(h);
                  break e;
                case cs:
                  d = 14;
                  break e;
                case da:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : he(e) ? a = "array" : e !== void 0 && e.$$typeof === fi ? (a = "<" + (Be(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Ct(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = de(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function mf(e, t, a) {
      return t = tr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Gu(e, t, a, i) {
      return e = de(7, e, i, t), e.lanes = a, e;
    }
    function Vu(e, t, a) {
      return e = de(6, e, null, t), e.lanes = a, e;
    }
    function Mh(e, t, a) {
      return t = de(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Vi(e, t) {
      ja(), Yd[Gd++] = gp, Yd[Gd++] = vp, vp = e, gp = t;
    }
    function z0(e, t, a) {
      ja(), Xn[jn++] = Tc, Xn[jn++] = Ec, Xn[jn++] = Ss, Ss = e;
      var i = Tc;
      e = Ec;
      var o = 32 - zl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - zl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Tc = 1 << 32 - zl(t) + o | a << o | i, Ec = f + e;
      } else
        Tc = 1 << f | a << o | i, Ec = e;
    }
    function lr(e) {
      ja(), e.return !== null && (Vi(e, 1), z0(e, 1, 0));
    }
    function ar(e) {
      for (; e === vp; )
        vp = Yd[--Gd], Yd[Gd] = null, gp = Yd[--Gd], Yd[Gd] = null;
      for (; e === Ss; )
        Ss = Xn[--jn], Xn[jn] = null, Ec = Xn[--jn], Xn[jn] = null, Tc = Xn[--jn], Xn[jn] = null;
    }
    function ja() {
      je || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Qa(e, t) {
      if (e.return === null) {
        if (Qn === null)
          Qn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Qn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Qn.distanceFromLeaf > t && (Qn.distanceFromLeaf = t);
        }
        return Qn;
      }
      var a = Qa(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Uh(e, t) {
      Ac || (e = Qa(e, 0), e.serverProps = null, t !== null && (t = id(t), e.serverTail.push(t)));
    }
    function fn(e) {
      var t = "", a = Qn;
      throw a !== null && (Qn = null, t = uf(a)), Qc(
        ua(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Cv;
    }
    function xh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Dl] = e, t[Pl] = i, Un(a, i), a) {
        case "dialog":
          ze("cancel", t), ze("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ze("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Jm.length; a++)
            ze(Jm[a], t);
          break;
        case "source":
          ze("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ze("error", t), ze("load", t);
          break;
        case "details":
          ze("toggle", t);
          break;
        case "input":
          Cu("input", i), ze("invalid", t), Nu(t, i), s0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), Fn(t);
          break;
        case "option":
          rh(t, i);
          break;
        case "select":
          Cu("select", i), ze("invalid", t), af(t, i);
          break;
        case "textarea":
          Cu("textarea", i), ze("invalid", t), un(t, i), dh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), Fn(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Cy(t.textContent, a) ? (i.popover != null && (ze("beforetoggle", t), ze("toggle", t)), i.onScroll != null && ze("scroll", t), i.onScrollEnd != null && ze("scrollend", t), i.onClick != null && (t.onclick = hu), t = !0) : t = !1, t || fn(e);
    }
    function Hh(e) {
      for (ma = e.return; ma; )
        switch (ma.tag) {
          case 5:
          case 13:
            gi = !1;
            return;
          case 27:
          case 3:
            gi = !0;
            return;
          default:
            ma = ma.return;
        }
    }
    function Xi(e) {
      if (e !== ma) return !1;
      if (!je)
        return Hh(e), je = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || xn(e.type, e.memoizedProps)), a = !a), a && qt) {
        for (a = qt; a; ) {
          var i = Qa(e, 0), o = id(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Xy(a) : yl(a.nextSibling);
        }
        fn(e);
      }
      if (Hh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        qt = Xy(e);
      } else
        t === 27 ? (t = qt, Hn(e.type) ? (e = bg, bg = null, qt = e) : qt = t) : qt = ma ? yl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ji() {
      qt = ma = null, Ac = je = !1;
    }
    function Ch() {
      var e = Ts;
      return e !== null && (ga === null ? ga = e : ga.push.apply(
        ga,
        e
      ), Ts = null), e;
    }
    function Qc(e) {
      Ts === null ? Ts = [e] : Ts.push(e);
    }
    function Nh() {
      var e = Qn;
      if (e !== null) {
        Qn = null;
        for (var t = uf(e); 0 < e.children.length; )
          e = e.children[0];
        F(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function nr() {
      Vd = bp = null, Xd = !1;
    }
    function Xu(e, t, a) {
      te(Nv, t._currentValue, e), t._currentValue = a, te(Bv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Jg && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Jg;
    }
    function lu(e, t) {
      e._currentValue = Nv.current;
      var a = Bv.current;
      Z(Bv, t), e._currentRenderer = a, Z(Nv, t);
    }
    function Bh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function _h(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var p = 0; p < t.length; p++)
              if (h.context === t[p]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Bh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Bh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function sl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if (o.flags & 524288) f = !0;
          else if (o.flags & 262144) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            ya(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Oo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Wm) : e = [Wm]);
        }
        o = o.return;
      }
      e !== null && _h(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ju(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!ya(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Qu(e) {
      bp = e, Vd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function ft(e) {
      return Xd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), qh(bp, e);
    }
    function pf(e, t) {
      return bp === null && Qu(e), qh(e, t);
    }
    function qh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Vd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Vd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Vd = Vd.next = t;
      return a;
    }
    function vf() {
      return {
        controller: new fS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Qi(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function sn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && sS(rS, function() {
        e.controller.abort();
      });
    }
    function La() {
      var e = Es;
      return Es = 0, e;
    }
    function Lu(e) {
      var t = Es;
      return Es = e, t;
    }
    function Li(e) {
      var t = Es;
      return Es += e, t;
    }
    function ur(e) {
      qa = jd(), 0 > e.actualStartTime && (e.actualStartTime = qa);
    }
    function au(e) {
      if (0 <= qa) {
        var t = jd() - qa;
        e.actualDuration += t, e.selfBaseDuration = t, qa = -1;
      }
    }
    function wi(e) {
      if (0 <= qa) {
        var t = jd() - qa;
        e.actualDuration += t, qa = -1;
      }
    }
    function Ta() {
      if (0 <= qa) {
        var e = jd() - qa;
        qa = -1, Es += e;
      }
    }
    function wa() {
      qa = jd();
    }
    function rn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function D0(e, t) {
      if (Am === null) {
        var a = Am = [];
        _v = 0, As = Oy(), Qd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return _v++, t.then(Yh, Yh), t;
    }
    function Yh() {
      if (--_v === 0 && Am !== null) {
        Qd !== null && (Qd.status = "fulfilled");
        var e = Am;
        Am = null, As = 0, Qd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function O0(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Gh() {
      var e = Rs.current;
      return e !== null ? e : st.pooledCache;
    }
    function ir(e, t) {
      t === null ? te(Rs, Rs.current, e) : te(Rs, t.pool, e);
    }
    function M0() {
      var e = Gh();
      return e === null ? null : { parent: vl._currentValue, pool: e };
    }
    function Vh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Xh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Lc() {
    }
    function Ea(e, t, a) {
      H.actQueue !== null && (H.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Lc, Lc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, ia(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Lc, Lc);
          else {
            if (e = st, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, ia(e), e;
          }
          throw Hm = t, zp = !0, xm;
      }
    }
    function jh() {
      if (Hm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Hm;
      return Hm = null, zp = !1, e;
    }
    function ia(e) {
      if (e === xm || e === Rp)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ql(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function wu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function dn(e) {
      return {
        lane: e,
        tag: Fg,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Za(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Gv === i && !e1) {
        var o = le(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), e1 = !0;
      }
      return (We & va) !== tn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = er(e), E0(e, null, a), t) : (Ps(e, i, t, a), er(e));
    }
    function Zu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Nc(e, a);
      }
    }
    function wc(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function hn() {
      if (Vv) {
        var e = Qd;
        if (e !== null) throw e;
      }
    }
    function Zc(e, t, a, i) {
      Vv = !1;
      var o = e.updateQueue;
      Yo = !1, Gv = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var p = h, v = p.next;
        p.next = null, d === null ? f = v : d.next = v, d = p;
        var U = e.alternate;
        U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== d && (h === null ? U.firstBaseUpdate = v : h.next = v, U.lastBaseUpdate = p));
      }
      if (f !== null) {
        var _ = o.baseState;
        d = 0, U = v = p = null, h = f;
        do {
          var O = h.lane & -536870913, q = O !== h.lane;
          if (q ? (Ue & O) === O : (i & O) === O) {
            O !== 0 && O === As && (Vv = !0), U !== null && (U = U.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              O = e;
              var I = h, re = t, rt = a;
              switch (I.tag) {
                case Ig:
                  if (I = I.payload, typeof I == "function") {
                    Xd = !0;
                    var Ce = I.call(
                      rt,
                      _,
                      re
                    );
                    if (O.mode & ta) {
                      xe(!0);
                      try {
                        I.call(rt, _, re);
                      } finally {
                        xe(!1);
                      }
                    }
                    Xd = !1, _ = Ce;
                    break e;
                  }
                  _ = I;
                  break e;
                case Yv:
                  O.flags = O.flags & -65537 | 128;
                case Fg:
                  if (Ce = I.payload, typeof Ce == "function") {
                    if (Xd = !0, I = Ce.call(
                      rt,
                      _,
                      re
                    ), O.mode & ta) {
                      xe(!0);
                      try {
                        Ce.call(rt, _, re);
                      } finally {
                        xe(!1);
                      }
                    }
                    Xd = !1;
                  } else I = Ce;
                  if (I == null) break e;
                  _ = Se({}, _, I);
                  break e;
                case Pg:
                  Yo = !0;
              }
            }
            O = h.callback, O !== null && (e.flags |= 64, q && (e.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [O] : q.push(O));
          } else
            q = {
              lane: O,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, U === null ? (v = U = q, p = _) : U = U.next = q, d |= O;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        U === null && (p = _), o.baseState = p, o.firstBaseUpdate = v, o.lastBaseUpdate = U, f === null && (o.shared.lanes = 0), jo |= d, e.lanes = d, e.memoizedState = _;
      }
      Gv = null;
    }
    function gf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Jc(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          gf(a[e], t);
    }
    function U0(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          gf(a[e], t);
    }
    function Ll(e, t) {
      var a = Ti;
      te(Dp, a, e), te(Ld, t, e), Ti = a | t.baseLanes;
    }
    function bf(e) {
      te(Dp, Ti, e), te(
        Ld,
        Ld.current,
        e
      );
    }
    function Ja(e) {
      Ti = Dp.current, Z(Ld, e), Z(Dp, e);
    }
    function Te() {
      var e = B;
      Zn === null ? Zn = [e] : Zn.push(e);
    }
    function Q() {
      var e = B;
      if (Zn !== null && (zc++, Zn[zc] !== e)) {
        var t = le(ye);
        if (!t1.has(t) && (t1.add(t), Zn !== null)) {
          for (var a = "", i = 0; i <= zc; i++) {
            var o = Zn[i], f = i === zc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Aa(e) {
      e == null || he(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        B,
        typeof e
      );
    }
    function Kc() {
      var e = le(ye);
      a1.has(e) || (a1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function bt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ju(e, t) {
      if (Nm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          B
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        B,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ya(e[a], t[a])) return !1;
      return !0;
    }
    function Ku(e, t, a, i, o, f) {
      Go = f, ye = t, Zn = e !== null ? e._debugHookTypes : null, zc = -1, Nm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = le(ye), Xv.has(f) || (Xv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e !== null && e.memoizedState !== null ? Qv : Zn !== null ? n1 : jv, Ds = f = (t.mode & ta) !== pt;
      var d = Lv(a, i, o);
      if (Ds = !1, Zd && (d = kc(
        t,
        a,
        i,
        o
      )), f) {
        xe(!0);
        try {
          d = kc(
            t,
            a,
            i,
            o
          );
        } finally {
          xe(!1);
        }
      }
      return Sf(e, t), d;
    }
    function Sf(e, t) {
      t._debugHookTypes = Zn, t.dependencies === null ? Rc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Rc
      }) : t.dependencies._debugThenableState = Rc, H.H = Up;
      var a = ct !== null && ct.next !== null;
      if (Go = 0, Zn = B = nl = ct = ye = null, zc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Op = !1, Cm = 0, Rc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Ol || (e = e.dependencies, e !== null && ju(e) && (Ol = !0)), zp ? (zp = !1, e = !0) : e = !1, e && (t = le(t) || "Unknown", l1.has(t) || Xv.has(t) || (l1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function kc(e, t, a, i) {
      ye = e;
      var o = 0;
      do {
        if (Zd && (Rc = null), Cm = 0, Zd = !1, o >= hS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Nm = !1, nl = ct = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        zc = -1, H.H = u1, f = Lv(t, a, i);
      } while (Zd);
      return f;
    }
    function Ra() {
      var e = H.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Zi(t) : t, e = e.useState()[0], (ct !== null ? ct.memoizedState : null) !== e && (ye.flags |= 1024), t;
    }
    function wl() {
      var e = Mp !== 0;
      return Mp = 0, e;
    }
    function nu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ru) !== pt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ka(e) {
      if (Op) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Op = !1;
      }
      Go = 0, Zn = nl = ct = ye = null, zc = -1, B = null, Zd = !1, Cm = Mp = 0, Rc = null;
    }
    function At() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return nl === null ? ye.memoizedState = nl = e : nl = nl.next = e, nl;
    }
    function He() {
      if (ct === null) {
        var e = ye.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = ct.next;
      var t = nl === null ? ye.memoizedState : nl.next;
      if (t !== null)
        nl = t, ct = e;
      else {
        if (e === null)
          throw ye.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ct = e, e = {
          memoizedState: ct.memoizedState,
          baseState: ct.baseState,
          baseQueue: ct.baseQueue,
          queue: ct.queue,
          next: null
        }, nl === null ? ye.memoizedState = nl = e : nl = nl.next = e;
      }
      return nl;
    }
    function cr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Zi(e) {
      var t = Cm;
      return Cm += 1, Rc === null && (Rc = Vh()), e = Ea(Rc, e, t), t = ye, (nl === null ? t.memoizedState : nl.next) === null && (t = t.alternate, H.H = t !== null && t.memoizedState !== null ? Qv : jv), e;
    }
    function yn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Zi(e);
        if (e.$$typeof === Na) return ft(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Nt(e) {
      var t = null, a = ye.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = ye.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = cr(), ye.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Nm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = np;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Ge(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function qe(e, t, a) {
      var i = At();
      if (a !== void 0) {
        var o = a(t);
        if (Ds) {
          xe(!0);
          try {
            a(t);
          } finally {
            xe(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Wh.bind(
        null,
        ye,
        e
      ), [i.memoizedState, e];
    }
    function za(e) {
      var t = He();
      return Da(t, ct, e);
    }
    function Da(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, p = null, v = t, U = !1;
        do {
          var _ = v.lane & -536870913;
          if (_ !== v.lane ? (Ue & _) === _ : (Go & _) === _) {
            var O = v.revertLane;
            if (O === 0)
              p !== null && (p = p.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), _ === As && (U = !0);
            else if ((Go & O) === O) {
              v = v.next, O === As && (U = !0);
              continue;
            } else
              _ = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, p === null ? (h = p = _, d = f) : p = p.next = _, ye.lanes |= O, jo |= O;
            _ = v.action, Ds && a(f, _), f = v.hasEagerState ? v.eagerState : a(f, _);
          } else
            O = {
              lane: _,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, p === null ? (h = p = O, d = f) : p = p.next = O, ye.lanes |= _, jo |= _;
          v = v.next;
        } while (v !== null && v !== t);
        if (p === null ? d = f : p.next = h, !ya(f, e.memoizedState) && (Ol = !0, U && (a = Qd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = p, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Ji(e) {
      var t = He(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        ya(f, t.memoizedState) || (Ol = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function uu(e, t, a) {
      var i = ye, o = At();
      if (je) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        wd || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), wd = !0);
      } else {
        if (f = t(), wd || (a = t(), ya(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), wd = !0)), st === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        Ue & 124 || Qh(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, sr(
        Wc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, pn(
        wn | gl,
        $u(),
        $c.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Tf(e, t, a) {
      var i = ye, o = He(), f = je;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !wd) {
        var d = t();
        ya(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), wd = !0);
      }
      (d = !ya(
        (ct || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ol = !0), o = o.queue;
      var h = Wc.bind(null, i, o, e);
      if (Zt(2048, gl, h, [e]), o.getSnapshot !== t || d || nl !== null && nl.memoizedState.tag & wn) {
        if (i.flags |= 2048, pn(
          wn | gl,
          $u(),
          $c.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), st === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || Go & 124 || Qh(i, t, a);
      }
      return a;
    }
    function Qh(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ye.updateQueue, t === null ? (t = cr(), ye.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function $c(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Lh(t) && Fc(e);
    }
    function Wc(e, t, a) {
      return a(function() {
        Lh(t) && Fc(e);
      });
    }
    function Lh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !ya(e, a);
      } catch {
        return !0;
      }
    }
    function Fc(e) {
      var t = jl(e, 2);
      t !== null && zt(t, e, 2);
    }
    function Ef(e) {
      var t = At();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ds) {
          xe(!0);
          try {
            a();
          } finally {
            xe(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ge,
        lastRenderedState: e
      }, t;
    }
    function iu(e) {
      e = Ef(e);
      var t = e.queue, a = to.bind(null, ye, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function ka(e) {
      var t = At();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = br.bind(
        null,
        ye,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function cu(e, t) {
      var a = He();
      return mn(a, ct, e, t);
    }
    function mn(e, t, a, i) {
      return e.baseState = a, Da(
        e,
        ct,
        typeof i == "function" ? i : Ge
      );
    }
    function or(e, t) {
      var a = He();
      return ct !== null ? mn(a, ct, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function wh(e, t, a, i, o) {
      if (Uf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        H.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Ic(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Ic(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = H.T, d = {};
        H.T = d, H.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), p = H.S;
          p !== null && p(d, h), Af(e, t, h);
        } catch (v) {
          Pt(e, t, v);
        } finally {
          H.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Af(e, t, d);
        } catch (v) {
          Pt(e, t, v);
        }
    }
    function Af(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          ku(e, t, i);
        },
        function(i) {
          return Pt(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ku(e, t, a);
    }
    function ku(e, t, a) {
      t.status = "fulfilled", t.value = a, Rf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ic(e, a)));
    }
    function Pt(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Rf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Rf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Zh(e, t) {
      return t;
    }
    function Pc(e, t) {
      if (je) {
        var a = st.formState;
        if (a !== null) {
          e: {
            var i = ye;
            if (je) {
              if (qt) {
                t: {
                  for (var o = qt, f = gi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = yl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === mg || f === ab ? o : null;
                }
                if (o) {
                  qt = yl(
                    o.nextSibling
                  ), i = o.data === mg;
                  break e;
                }
              }
              fn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = At(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zh,
        lastRenderedState: t
      }, a.queue = i, a = to.bind(
        null,
        ye,
        i
      ), i.dispatch = a, i = Ef(!1), f = br.bind(
        null,
        ye,
        !1,
        i.queue
      ), i = At(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = wh.bind(
        null,
        ye,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function fr(e) {
      var t = He();
      return x0(t, ct, e);
    }
    function x0(e, t, a) {
      if (t = Da(
        e,
        t,
        Zh
      )[0], e = za(Ge)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Zi(t);
        } catch (d) {
          throw d === xm ? Rp : d;
        }
      else i = t;
      t = He();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (ye.flags |= 2048, pn(
        wn | gl,
        $u(),
        wt.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function wt(e, t) {
      e.action = t;
    }
    function eo(e) {
      var t = He(), a = ct;
      if (a !== null)
        return x0(t, a, e);
      He(), t = t.memoizedState, a = He();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function pn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = ye.updateQueue, t === null && (t = cr(), ye.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function $u() {
      return { destroy: void 0, resource: void 0 };
    }
    function zf(e) {
      var t = At();
      return e = { current: e }, t.memoizedState = e;
    }
    function Oa(e, t, a, i) {
      var o = At();
      i = i === void 0 ? null : i, ye.flags |= e, o.memoizedState = pn(
        wn | t,
        $u(),
        a,
        i
      );
    }
    function Zt(e, t, a, i) {
      var o = He();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      ct !== null && i !== null && Ju(i, ct.memoizedState.deps) ? o.memoizedState = pn(t, f, a, i) : (ye.flags |= e, o.memoizedState = pn(
        wn | t,
        f,
        a,
        i
      ));
    }
    function sr(e, t) {
      (ye.mode & Ru) !== pt && (ye.mode & jg) === pt ? Oa(276826112, gl, e, t) : Oa(8390656, gl, e, t);
    }
    function rr(e, t) {
      var a = 4194308;
      return (ye.mode & Ru) !== pt && (a |= 134217728), Oa(a, Gl, e, t);
    }
    function H0(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function dr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (ye.mode & Ru) !== pt && (i |= 134217728), Oa(
        i,
        Gl,
        H0.bind(null, t, e),
        a
      );
    }
    function vn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Zt(
        4,
        Gl,
        H0.bind(null, t, e),
        a
      );
    }
    function Df(e, t) {
      return At().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ki(e, t) {
      var a = He();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && Ju(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function hr(e, t) {
      var a = At();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ds) {
        xe(!0);
        try {
          e();
        } finally {
          xe(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Wu(e, t) {
      var a = He();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && Ju(t, i[1]))
        return i[0];
      if (i = e(), Ds) {
        xe(!0);
        try {
          e();
        } finally {
          xe(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function yr(e, t) {
      var a = At();
      return pr(a, e, t);
    }
    function Of(e, t) {
      var a = He();
      return Mf(
        a,
        ct.memoizedState,
        e,
        t
      );
    }
    function mr(e, t) {
      var a = He();
      return ct === null ? pr(a, e, t) : Mf(
        a,
        ct.memoizedState,
        e,
        t
      );
    }
    function pr(e, t, a) {
      return a === void 0 || Go & 1073741824 ? e.memoizedState = t : (e.memoizedState = a, e = j0(), ye.lanes |= e, jo |= e, a);
    }
    function Mf(e, t, a, i) {
      return ya(a, t) ? a : Ld.current !== null ? (e = pr(e, a, i), ya(e, t) || (Ol = !0), e) : Go & 42 ? (e = j0(), ye.lanes |= e, jo |= e, t) : (Ol = !0, e.memoizedState = a);
    }
    function Jh(e, t, a, i, o) {
      var f = se.p;
      se.p = f !== 0 && f < en ? f : en;
      var d = H.T, h = {};
      H.T = h, br(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var p = o(), v = H.S;
        if (v !== null && v(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          var U = O0(
            p,
            i
          );
          ou(
            e,
            t,
            U,
            kl(e)
          );
        } else
          ou(
            e,
            t,
            i,
            kl(e)
          );
      } catch (_) {
        ou(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: _ },
          kl(e)
        );
      } finally {
        se.p = f, H.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function ki(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Kh(e).queue;
      Jh(
        e,
        o,
        t,
        Ys,
        a === null ? Ne : function() {
          return kh(e), a(i);
        }
      );
    }
    function Kh(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Ys,
        baseState: Ys,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ge,
          lastRenderedState: Ys
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ge,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function kh(e) {
      H.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Kh(e).next.queue;
      ou(
        e,
        t,
        {},
        kl(e)
      );
    }
    function gn() {
      var e = Ef(!1);
      return e = Jh.bind(
        null,
        ye,
        e.queue,
        !0,
        !1
      ), At().memoizedState = e, [!1, e];
    }
    function vr() {
      var e = za(Ge)[0], t = He().memoizedState;
      return [
        typeof e == "boolean" ? e : Zi(e),
        t
      ];
    }
    function gr() {
      var e = Ji(Ge)[0], t = He().memoizedState;
      return [
        typeof e == "boolean" ? e : Zi(e),
        t
      ];
    }
    function Zl() {
      return ft(Wm);
    }
    function bn() {
      var e = At(), t = st.identifierPrefix;
      if (je) {
        var a = Ec, i = Tc;
        a = (i & ~(1 << 32 - zl(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Mp++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = dS++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function $i() {
      return At().memoizedState = $h.bind(
        null,
        ye
      );
    }
    function $h(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = kl(a);
            e = dn(i);
            var o = Za(a, e, i);
            o !== null && (zt(o, a, i), Zu(o, a, i)), a = vf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function Wh(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = kl(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Uf(e) ? Wi(t, o) : (o = Rh(e, t, o, i), o !== null && (zt(o, e, i), xf(o, t, i))), Ai(e, i);
    }
    function to(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = kl(e), ou(e, t, a, i), Ai(e, i);
    }
    function ou(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Uf(e)) Wi(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = H.H;
          H.H = Du;
          try {
            var h = t.lastRenderedState, p = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = p, ya(p, h))
              return Ps(e, t, o, 0), st === null && df(), !1;
          } catch {
          } finally {
            H.H = d;
          }
        }
        if (a = Rh(e, t, o, i), a !== null)
          return zt(a, e, i), xf(a, t, i), !0;
      }
      return !1;
    }
    function br(e, t, a, i) {
      if (H.T === null && As === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Oy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Uf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Rh(
          e,
          a,
          i,
          2
        ), t !== null && zt(t, e, 2);
      Ai(e, 2);
    }
    function Uf(e) {
      var t = e.alternate;
      return e === ye || t !== null && t === ye;
    }
    function Wi(e, t) {
      Zd = Op = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function xf(e, t, a) {
      if (a & 4194048) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Nc(e, a);
      }
    }
    function el(e) {
      var t = Ae;
      return e != null && (Ae = t === null ? e : t.concat(e)), t;
    }
    function lo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = mf(e, a.mode, 0), t._debugInfo = Ae, t.return = a), F(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function ao(e) {
      var t = Bm;
      return Bm += 1, Jd === null && (Jd = Vh()), Ea(Jd, e, t);
    }
    function Ma(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function me(e, t) {
      throw t.$$typeof === is ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Le(e, t) {
      var a = le(e) || "Component";
      S1[a] || (S1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function St(e, t) {
      var a = le(e) || "Component";
      T1[a] || (T1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Hf(e) {
      function t(b, S) {
        if (e) {
          var T = b.deletions;
          T === null ? (b.deletions = [S], b.flags |= 16) : T.push(S);
        }
      }
      function a(b, S) {
        if (!e) return null;
        for (; S !== null; )
          t(b, S), S = S.sibling;
        return null;
      }
      function i(b) {
        for (var S = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? S.set(b.key, b) : S.set(b.index, b), b = b.sibling;
        return S;
      }
      function o(b, S) {
        return b = on(b, S), b.index = 0, b.sibling = null, b;
      }
      function f(b, S, T) {
        return b.index = T, e ? (T = b.alternate, T !== null ? (T = T.index, T < S ? (b.flags |= 67108866, S) : T) : (b.flags |= 67108866, S)) : (b.flags |= 1048576, S);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, S, T, Y) {
        return S === null || S.tag !== 6 ? (S = Vu(
          T,
          b.mode,
          Y
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ae, S) : (S = o(S, T), S.return = b, S._debugInfo = Ae, S);
      }
      function p(b, S, T, Y) {
        var J = T.type;
        return J === pe ? (S = U(
          b,
          S,
          T.props.children,
          Y,
          T.key
        ), lo(T, S, b), S) : S !== null && (S.elementType === J || A0(S, T) || typeof J == "object" && J !== null && J.$$typeof === da && Vo(J) === S.type) ? (S = o(S, T.props), Ma(S, T), S.return = b, S._debugOwner = T._owner, S._debugInfo = Ae, S) : (S = mf(T, b.mode, Y), Ma(S, T), S.return = b, S._debugInfo = Ae, S);
      }
      function v(b, S, T, Y) {
        return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Mh(T, b.mode, Y), S.return = b, S._debugInfo = Ae, S) : (S = o(S, T.children || []), S.return = b, S._debugInfo = Ae, S);
      }
      function U(b, S, T, Y, J) {
        return S === null || S.tag !== 7 ? (S = Gu(
          T,
          b.mode,
          Y,
          J
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ae, S) : (S = o(S, T), S.return = b, S._debugInfo = Ae, S);
      }
      function _(b, S, T) {
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
          return S = Vu(
            "" + S,
            b.mode,
            T
          ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ae, S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case fi:
              return T = mf(
                S,
                b.mode,
                T
              ), Ma(T, S), T.return = b, b = el(S._debugInfo), T._debugInfo = Ae, Ae = b, T;
            case mc:
              return S = Mh(
                S,
                b.mode,
                T
              ), S.return = b, S._debugInfo = Ae, S;
            case da:
              var Y = el(S._debugInfo);
              return S = Vo(S), b = _(b, S, T), Ae = Y, b;
          }
          if (he(S) || ht(S))
            return T = Gu(
              S,
              b.mode,
              T,
              null
            ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, b = el(S._debugInfo), T._debugInfo = Ae, Ae = b, T;
          if (typeof S.then == "function")
            return Y = el(S._debugInfo), b = _(
              b,
              ao(S),
              T
            ), Ae = Y, b;
          if (S.$$typeof === Na)
            return _(
              b,
              pf(b, S),
              T
            );
          me(b, S);
        }
        return typeof S == "function" && Le(b, S), typeof S == "symbol" && St(b, S), null;
      }
      function O(b, S, T, Y) {
        var J = S !== null ? S.key : null;
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return J !== null ? null : h(b, S, "" + T, Y);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case fi:
              return T.key === J ? (J = el(T._debugInfo), b = p(
                b,
                S,
                T,
                Y
              ), Ae = J, b) : null;
            case mc:
              return T.key === J ? v(b, S, T, Y) : null;
            case da:
              return J = el(T._debugInfo), T = Vo(T), b = O(
                b,
                S,
                T,
                Y
              ), Ae = J, b;
          }
          if (he(T) || ht(T))
            return J !== null ? null : (J = el(T._debugInfo), b = U(
              b,
              S,
              T,
              Y,
              null
            ), Ae = J, b);
          if (typeof T.then == "function")
            return J = el(T._debugInfo), b = O(
              b,
              S,
              ao(T),
              Y
            ), Ae = J, b;
          if (T.$$typeof === Na)
            return O(
              b,
              S,
              pf(b, T),
              Y
            );
          me(b, T);
        }
        return typeof T == "function" && Le(b, T), typeof T == "symbol" && St(b, T), null;
      }
      function q(b, S, T, Y, J) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
          return b = b.get(T) || null, h(S, b, "" + Y, J);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case fi:
              return T = b.get(
                Y.key === null ? T : Y.key
              ) || null, b = el(Y._debugInfo), S = p(
                S,
                T,
                Y,
                J
              ), Ae = b, S;
            case mc:
              return b = b.get(
                Y.key === null ? T : Y.key
              ) || null, v(S, b, Y, J);
            case da:
              var ve = el(Y._debugInfo);
              return Y = Vo(Y), S = q(
                b,
                S,
                T,
                Y,
                J
              ), Ae = ve, S;
          }
          if (he(Y) || ht(Y))
            return T = b.get(T) || null, b = el(Y._debugInfo), S = U(
              S,
              T,
              Y,
              J,
              null
            ), Ae = b, S;
          if (typeof Y.then == "function")
            return ve = el(Y._debugInfo), S = q(
              b,
              S,
              T,
              ao(Y),
              J
            ), Ae = ve, S;
          if (Y.$$typeof === Na)
            return q(
              b,
              S,
              T,
              pf(S, Y),
              J
            );
          me(S, Y);
        }
        return typeof Y == "function" && Le(S, Y), typeof Y == "symbol" && St(S, Y), null;
      }
      function I(b, S, T, Y) {
        if (typeof T != "object" || T === null) return Y;
        switch (T.$$typeof) {
          case fi:
          case mc:
            Vt(b, S, T);
            var J = T.key;
            if (typeof J != "string") break;
            if (Y === null) {
              Y = /* @__PURE__ */ new Set(), Y.add(J);
              break;
            }
            if (!Y.has(J)) {
              Y.add(J);
              break;
            }
            F(S, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                J
              );
            });
            break;
          case da:
            T = Vo(T), I(b, S, T, Y);
        }
        return Y;
      }
      function re(b, S, T, Y) {
        for (var J = null, ve = null, P = null, ge = S, be = S = 0, vt = null; ge !== null && be < T.length; be++) {
          ge.index > be ? (vt = ge, ge = null) : vt = ge.sibling;
          var $t = O(
            b,
            ge,
            T[be],
            Y
          );
          if ($t === null) {
            ge === null && (ge = vt);
            break;
          }
          J = I(
            b,
            $t,
            T[be],
            J
          ), e && ge && $t.alternate === null && t(b, ge), S = f($t, S, be), P === null ? ve = $t : P.sibling = $t, P = $t, ge = vt;
        }
        if (be === T.length)
          return a(b, ge), je && Vi(b, be), ve;
        if (ge === null) {
          for (; be < T.length; be++)
            ge = _(b, T[be], Y), ge !== null && (J = I(
              b,
              ge,
              T[be],
              J
            ), S = f(
              ge,
              S,
              be
            ), P === null ? ve = ge : P.sibling = ge, P = ge);
          return je && Vi(b, be), ve;
        }
        for (ge = i(ge); be < T.length; be++)
          vt = q(
            ge,
            b,
            be,
            T[be],
            Y
          ), vt !== null && (J = I(
            b,
            vt,
            T[be],
            J
          ), e && vt.alternate !== null && ge.delete(
            vt.key === null ? be : vt.key
          ), S = f(
            vt,
            S,
            be
          ), P === null ? ve = vt : P.sibling = vt, P = vt);
        return e && ge.forEach(function(Hc) {
          return t(b, Hc);
        }), je && Vi(b, be), ve;
      }
      function rt(b, S, T, Y) {
        if (T == null)
          throw Error("An iterable object provided no iterator.");
        for (var J = null, ve = null, P = S, ge = S = 0, be = null, vt = null, $t = T.next(); P !== null && !$t.done; ge++, $t = T.next()) {
          P.index > ge ? (be = P, P = null) : be = P.sibling;
          var Hc = O(b, P, $t.value, Y);
          if (Hc === null) {
            P === null && (P = be);
            break;
          }
          vt = I(
            b,
            Hc,
            $t.value,
            vt
          ), e && P && Hc.alternate === null && t(b, P), S = f(Hc, S, ge), ve === null ? J = Hc : ve.sibling = Hc, ve = Hc, P = be;
        }
        if ($t.done)
          return a(b, P), je && Vi(b, ge), J;
        if (P === null) {
          for (; !$t.done; ge++, $t = T.next())
            P = _(b, $t.value, Y), P !== null && (vt = I(
              b,
              P,
              $t.value,
              vt
            ), S = f(
              P,
              S,
              ge
            ), ve === null ? J = P : ve.sibling = P, ve = P);
          return je && Vi(b, ge), J;
        }
        for (P = i(P); !$t.done; ge++, $t = T.next())
          be = q(
            P,
            b,
            ge,
            $t.value,
            Y
          ), be !== null && (vt = I(
            b,
            be,
            $t.value,
            vt
          ), e && be.alternate !== null && P.delete(
            be.key === null ? ge : be.key
          ), S = f(
            be,
            S,
            ge
          ), ve === null ? J = be : ve.sibling = be, ve = be);
        return e && P.forEach(function(VS) {
          return t(b, VS);
        }), je && Vi(b, ge), J;
      }
      function Ce(b, S, T, Y) {
        if (typeof T == "object" && T !== null && T.type === pe && T.key === null && (lo(T, null, b), T = T.props.children), typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case fi:
              var J = el(T._debugInfo);
              e: {
                for (var ve = T.key; S !== null; ) {
                  if (S.key === ve) {
                    if (ve = T.type, ve === pe) {
                      if (S.tag === 7) {
                        a(
                          b,
                          S.sibling
                        ), Y = o(
                          S,
                          T.props.children
                        ), Y.return = b, Y._debugOwner = T._owner, Y._debugInfo = Ae, lo(T, Y, b), b = Y;
                        break e;
                      }
                    } else if (S.elementType === ve || A0(
                      S,
                      T
                    ) || typeof ve == "object" && ve !== null && ve.$$typeof === da && Vo(ve) === S.type) {
                      a(
                        b,
                        S.sibling
                      ), Y = o(S, T.props), Ma(Y, T), Y.return = b, Y._debugOwner = T._owner, Y._debugInfo = Ae, b = Y;
                      break e;
                    }
                    a(b, S);
                    break;
                  } else t(b, S);
                  S = S.sibling;
                }
                T.type === pe ? (Y = Gu(
                  T.props.children,
                  b.mode,
                  Y,
                  T.key
                ), Y.return = b, Y._debugOwner = b, Y._debugTask = b._debugTask, Y._debugInfo = Ae, lo(T, Y, b), b = Y) : (Y = mf(
                  T,
                  b.mode,
                  Y
                ), Ma(Y, T), Y.return = b, Y._debugInfo = Ae, b = Y);
              }
              return b = d(b), Ae = J, b;
            case mc:
              e: {
                for (J = T, T = J.key; S !== null; ) {
                  if (S.key === T)
                    if (S.tag === 4 && S.stateNode.containerInfo === J.containerInfo && S.stateNode.implementation === J.implementation) {
                      a(
                        b,
                        S.sibling
                      ), Y = o(
                        S,
                        J.children || []
                      ), Y.return = b, b = Y;
                      break e;
                    } else {
                      a(b, S);
                      break;
                    }
                  else t(b, S);
                  S = S.sibling;
                }
                Y = Mh(
                  J,
                  b.mode,
                  Y
                ), Y.return = b, b = Y;
              }
              return d(b);
            case da:
              return J = el(T._debugInfo), T = Vo(T), b = Ce(
                b,
                S,
                T,
                Y
              ), Ae = J, b;
          }
          if (he(T))
            return J = el(T._debugInfo), b = re(
              b,
              S,
              T,
              Y
            ), Ae = J, b;
          if (ht(T)) {
            if (J = el(T._debugInfo), ve = ht(T), typeof ve != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var P = ve.call(T);
            return P === T ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(P) !== "[object Generator]") && (g1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), g1 = !0) : T.entries !== ve || Zv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Zv = !0), b = rt(
              b,
              S,
              P,
              Y
            ), Ae = J, b;
          }
          if (typeof T.then == "function")
            return J = el(T._debugInfo), b = Ce(
              b,
              S,
              ao(T),
              Y
            ), Ae = J, b;
          if (T.$$typeof === Na)
            return Ce(
              b,
              S,
              pf(b, T),
              Y
            );
          me(b, T);
        }
        return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (J = "" + T, S !== null && S.tag === 6 ? (a(
          b,
          S.sibling
        ), Y = o(S, J), Y.return = b, b = Y) : (a(b, S), Y = Vu(
          J,
          b.mode,
          Y
        ), Y.return = b, Y._debugOwner = b, Y._debugTask = b._debugTask, Y._debugInfo = Ae, b = Y), d(b)) : (typeof T == "function" && Le(b, T), typeof T == "symbol" && St(b, T), a(b, S));
      }
      return function(b, S, T, Y) {
        var J = Ae;
        Ae = null;
        try {
          Bm = 0;
          var ve = Ce(
            b,
            S,
            T,
            Y
          );
          return Jd = null, ve;
        } catch (vt) {
          if (vt === xm || vt === Rp) throw vt;
          var P = de(29, vt, null, b.mode);
          P.lanes = Y, P.return = b;
          var ge = P._debugInfo = Ae;
          if (P._debugOwner = b._debugOwner, P._debugTask = b._debugTask, ge != null) {
            for (var be = ge.length - 1; 0 <= be; be--)
              if (typeof ge[be].stack == "string") {
                P._debugOwner = ge[be], P._debugTask = ge[be].debugTask;
                break;
              }
          }
          return P;
        } finally {
          Ae = J;
        }
      };
    }
    function ca(e) {
      var t = e.alternate;
      te(
        bl,
        bl.current & kd,
        e
      ), te(Jn, e, e), Si === null && (t === null || Ld.current !== null || t.memoizedState !== null) && (Si = e);
    }
    function Fu(e) {
      if (e.tag === 22) {
        if (te(bl, bl.current, e), te(Jn, e, e), Si === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Si = e);
        }
      } else $a(e);
    }
    function $a(e) {
      te(bl, bl.current, e), te(
        Jn,
        Jn.current,
        e
      );
    }
    function oa(e) {
      Z(Jn, e), Si === e && (Si = null), Z(bl, e);
    }
    function fu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Mc || Cn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Fh(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        N1.has(t) || (N1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Tt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ta) {
        xe(!0);
        try {
          f = a(i, o);
        } finally {
          xe(!1);
        }
      }
      f === void 0 && (t = Be(t) || "Component", U1.has(t) || (U1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Se({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Sr(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ta) {
          xe(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            xe(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Be(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !rf(a, i) || !rf(o, f) : !0;
    }
    function Tr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = le(e) || "Component", R1.has(e) || (R1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Jv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Iu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Se({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Ih(e) {
      Kv(e), console.warn(
        `%s

%s
`,
        $d ? "An error occurred in the <" + $d + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function C0(e) {
      var t = $d ? "The above error occurred in the <" + $d + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((kv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          rb + e[0],
          db,
          kp + i + kp,
          hb
        ) : e.splice(
          0,
          0,
          rb,
          db,
          kp + i + kp,
          hb
        ), e.unshift(console), i = YS.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Er(e) {
      Kv(e);
    }
    function no(e, t) {
      try {
        $d = t.source ? le(t.source) : null, kv = null;
        var a = t.value;
        if (H.actQueue !== null)
          H.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ar(e, t, a) {
      try {
        $d = a.source ? le(a.source) : null, kv = le(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function El(e, t, a) {
      return a = dn(a), a.tag = Yv, a.payload = { element: null }, a.callback = function() {
        F(t.source, no, e, t);
      }, a;
    }
    function Rt(e) {
      return e = dn(e), e.tag = Yv, e;
    }
    function Cf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          R0(a), F(
            i.source,
            Ar,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        R0(a), F(
          i.source,
          Ar,
          t,
          a,
          i
        ), typeof o != "function" && (Lo === null ? Lo = /* @__PURE__ */ new Set([this]) : Lo.add(this)), yS(this, i), typeof o == "function" || !(a.lanes & 2) && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          le(a) || "Unknown"
        );
      });
    }
    function Nf(e, t, a, i, o) {
      if (a.flags |= 32768, xt && ho(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && sl(
          t,
          a,
          o,
          !0
        ), je && (Ac = !0), a = Jn.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Si === null ? Lr() : a.alternate === null && Yt === Oc && (Yt = Iv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === qv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ay(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === qv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Ay(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Ay(e, i, o), Lr(), !1;
      }
      if (je)
        return Ac = !0, t = Jn.current, t !== null ? (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Cv && Qc(
          ua(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== Cv && Qc(
          ua(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ua(i, a), o = El(
          e.stateNode,
          i,
          o
        ), wc(e, o), Yt !== Os && (Yt = Pd)), !1;
      var f = ua(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Qm === null ? Qm = [f] : Qm.push(f), Yt !== Os && (Yt = Pd), t === null) return !0;
      i = ua(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = El(
              a.stateNode,
              i,
              e
            ), wc(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Lo === null || !Lo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Rt(o), Cf(
                o,
                e,
                a,
                i
              ), wc(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function _t(e, t, a, i) {
      t.child = e === null ? E1(t, null, a, i) : Kd(
        t,
        e.child,
        a,
        i
      );
    }
    function Rr(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Qu(t), cl(t), i = Ku(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = wl(), ba(), e !== null && !Ol ? (nu(e, t, o), Tn(e, t, o)) : (je && h && lr(t), t.flags |= 1, _t(e, t, i, o), t.child);
    }
    function Sn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Dh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Gi(f), t.tag = 15, t.type = a, Mr(t, f), Bf(
          e,
          t,
          a,
          i,
          o
        )) : (e = tr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Br(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : rf, a(d, i) && e.ref === t.ref)
          return Tn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = on(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Bf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (rf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Ol = !1, t.pendingProps = i = f, Br(e, o))
            e.flags & 131072 && (Ol = !0);
          else
            return t.lanes = e.lanes, Tn(e, t, o);
      }
      return Or(
        e,
        t,
        a,
        i,
        o
      );
    }
    function zr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if (t.flags & 128) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Dr(
            e,
            t,
            i,
            a
          );
        }
        if (a & 536870912)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ir(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Ll(t, f) : bf(t), Fu(t);
        else
          return t.lanes = t.childLanes = 536870912, Dr(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (ir(t, f.cachePool), Ll(t, f), $a(t), t.memoizedState = null) : (e !== null && ir(t, null), bf(t), $a(t));
      return _t(e, t, o, a), t.child;
    }
    function Dr(e, t, a, i) {
      var o = Gh();
      return o = o === null ? null : {
        parent: vl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && ir(t, null), bf(t), Fu(t), e !== null && sl(e, t, i, !0), null;
    }
    function _f(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Or(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Be(a) || "Unknown";
        _1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), _1[f] = !0);
      }
      return t.mode & ta && zu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Mr(t, t.type), a.contextTypes && (f = Be(a) || "Unknown", Y1[f] || (Y1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Qu(t), cl(t), a = Ku(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = wl(), ba(), e !== null && !Ol ? (nu(e, t, o), Tn(e, t, o)) : (je && i && lr(t), t.flags |= 1, _t(e, t, a, o), t.child);
    }
    function Ph(e, t, a, i, o, f) {
      return Qu(t), cl(t), zc = -1, Nm = e !== null && e.type !== t.type, t.updateQueue = null, a = kc(
        t,
        i,
        a,
        o
      ), Sf(e, t), i = wl(), ba(), e !== null && !Ol ? (nu(e, t, f), Tn(e, t, f)) : (je && i && lr(t), t.flags |= 1, _t(e, t, a, f), t.child);
    }
    function ey(e, t, a, i, o) {
      switch (Gt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = st, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Rt(h), Cf(
            h,
            d,
            t,
            ua(f, t)
          ), wc(t, h);
      }
      if (Qu(t), t.stateNode === null) {
        if (d = qo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Na) && !C1.has(a) && (C1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === pd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Be(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = ft(f)), f = new a(i, d), t.mode & ta) {
          xe(!0);
          try {
            f = new a(i, d);
          } finally {
            xe(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Jv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = A1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Be(a) || "Component", z1.has(d) || (z1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var p = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), d !== null || h !== null || p !== null) {
            f = Be(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            O1.has(f) || (O1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              p !== null ? `
  ` + p : ""
            ));
          }
        }
        f = t.stateNode, d = Be(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !H1.has(a) && (H1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !x1.has(a) && (x1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Be(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || D1.has(a) || (D1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Be(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || he(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Ql(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? ft(d) : qo, f.state === i && (d = Be(a) || "Component", M1.has(d) || (M1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ta && zu.recordLegacyContextWarning(
          t,
          f
        ), zu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Tt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          le(t) || "Component"
        ), Jv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Zc(t, i, f, o), hn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== pt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var U = t.memoizedProps;
        h = Iu(a, U), f.props = h;
        var _ = f.context;
        p = a.contextType, d = qo, typeof p == "object" && p !== null && (d = ft(p)), v = a.getDerivedStateFromProps, p = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", U = t.pendingProps !== U, p || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (U || _ !== d) && Tr(
          t,
          f,
          i,
          d
        ), Yo = !1;
        var O = t.memoizedState;
        f.state = O, Zc(t, i, f, o), hn(), _ = t.memoizedState, U || O !== _ || Yo ? (typeof v == "function" && (Tt(
          t,
          a,
          v,
          i
        ), _ = t.memoizedState), (h = Yo || Sr(
          t,
          a,
          h,
          i,
          O,
          _,
          d
        )) ? (p || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== pt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== pt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = _), f.props = i, f.state = _, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== pt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, wu(e, t), d = t.memoizedProps, p = Iu(a, d), f.props = p, v = t.pendingProps, O = f.context, _ = a.contextType, h = qo, typeof _ == "object" && _ !== null && (h = ft(_)), U = a.getDerivedStateFromProps, (_ = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || O !== h) && Tr(
          t,
          f,
          i,
          h
        ), Yo = !1, O = t.memoizedState, f.state = O, Zc(t, i, f, o), hn();
        var q = t.memoizedState;
        d !== v || O !== q || Yo || e !== null && e.dependencies !== null && ju(e.dependencies) ? (typeof U == "function" && (Tt(
          t,
          a,
          U,
          i
        ), q = t.memoizedState), (p = Yo || Sr(
          t,
          a,
          p,
          i,
          O,
          q,
          h
        ) || e !== null && e.dependencies !== null && ju(e.dependencies)) ? (_ || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = h, f = p) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, _f(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, ef(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, qa = -1;
        else {
          if (cl(t), a = o1(h), t.mode & ta) {
            xe(!0);
            try {
              o1(h);
            } finally {
              xe(!1);
            }
          }
          ba();
        }
        t.flags |= 1, e !== null && d ? (t.child = Kd(
          t,
          e.child,
          null,
          o
        ), t.child = Kd(
          t,
          null,
          a,
          o
        )) : _t(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Tn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Wd || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        le(t) || "a component"
      ), Wd = !0), e;
    }
    function ty(e, t, a, i) {
      return ji(), t.flags |= 256, _t(e, t, a, i), t.child;
    }
    function Mr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Be(t) || "Unknown", G1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), G1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Be(t) || "Unknown", q1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), q1[t] = !0));
    }
    function qf(e) {
      return { baseLanes: e, cachePool: M0() };
    }
    function Ur(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= an), e;
    }
    function N0(e, t, a) {
      var i, o = t.pendingProps;
      et(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (bl.current & _m) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (je) {
          if (f ? ca(t) : $a(t), je) {
            var h = qt, p;
            if (!(p = !h)) {
              e: {
                var v = h;
                for (p = gi; v.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break e;
                  }
                  if (v = yl(v.nextSibling), v === null) {
                    p = null;
                    break e;
                  }
                }
                p = v;
              }
              p !== null ? (ja(), t.memoizedState = {
                dehydrated: p,
                treeContext: Ss !== null ? { id: Tc, overflow: Ec } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = de(18, null, null, pt), v.stateNode = p, v.return = t, t.child = v, ma = t, qt = null, p = !0) : p = !1, p = !p;
            }
            p && (Uh(
              t,
              h
            ), fn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Cn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          oa(t);
        }
        return h = o.children, o = o.fallback, f ? ($a(t), f = t.mode, h = Yf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Gu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = qf(a), f.childLanes = Ur(
          e,
          i,
          a
        ), t.memoizedState = Wv, o) : (ca(t), xr(
          t,
          h
        ));
      }
      var U = e.memoizedState;
      if (U !== null && (h = U.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ca(t), t.flags &= -257, t = Hr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? ($a(t), t.child = e.child, t.flags |= 128, t = null) : ($a(t), f = o.fallback, h = t.mode, o = Yf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Gu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, Kd(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = qf(a), o.childLanes = Ur(
            e,
            i,
            a
          ), t.memoizedState = Wv, t = f);
        else if (ca(t), je && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Cn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            p = i.dgst;
            var _ = i.msg;
            v = i.stck;
            var O = i.cstck;
          }
          h = _, i = p, o = v, p = f = O, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = p === void 0 ? null : p, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && xv.set(
            f,
            o
          ), Qc(o), t = Hr(
            e,
            t,
            a
          );
        } else if (Ol || sl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Ol || i) {
          if (i = st, i !== null && (o = a & -a, o = o & 42 ? 1 : Ul(
            o
          ), o = o & (i.suspendedLanes | a) ? 0 : o, o !== 0 && o !== U.retryLane))
            throw U.retryLane = o, jl(
              e,
              o
            ), zt(
              i,
              e,
              o
            ), B1;
          h.data === Mc || Lr(), t = Hr(
            e,
            t,
            a
          );
        } else
          h.data === Mc ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, qt = yl(
            h.nextSibling
          ), ma = t, je = !0, Ts = null, Ac = !1, Qn = null, gi = !1, e !== null && (ja(), Xn[jn++] = Tc, Xn[jn++] = Ec, Xn[jn++] = Ss, Tc = e.id, Ec = e.overflow, Ss = t), t = xr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? ($a(t), f = o.fallback, h = t.mode, p = e.child, v = p.sibling, o = on(
        p,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = p.subtreeFlags & 65011712, v !== null ? f = on(
        v,
        f
      ) : (f = Gu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = qf(a) : (p = h.cachePool, p !== null ? (v = vl._currentValue, p = p.parent !== v ? { parent: v, pool: v } : p) : p = M0(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: p
      }), f.memoizedState = h, f.childLanes = Ur(
        e,
        i,
        a
      ), t.memoizedState = Wv, o) : (ca(t), a = e.child, e = a.sibling, a = on(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function xr(e, t) {
      return t = Yf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Yf(e, t) {
      return e = de(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: pp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Hr(e, t, a) {
      return Kd(t, e.child, null, a), e = xr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Cr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Bh(
        e.return,
        t,
        a
      );
    }
    function ly(e, t) {
      var a = he(e);
      return e = !a && typeof ht(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Nr(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function ay(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !V1[o])
        if (V1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || $v[f] || (f !== "collapsed" && f !== "hidden" ? ($v[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && ($v[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (he(i)) {
          for (var d = 0; d < i.length; d++)
            if (!ly(i[d], d)) break e;
        } else if (d = ht(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), p = 0; !h.done; h = d.next()) {
              if (!ly(h.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (_t(e, t, i, a), i = bl.current, i & _m)
        i = i & kd | _m, t.flags |= 128;
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Cr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Cr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= kd;
      }
      switch (te(bl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && fu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Nr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && fu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Nr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Nr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Tn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), qa = -1, jo |= t.lanes, !(a & t.childLanes))
        if (e !== null) {
          if (sl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = on(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = on(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Br(e, t) {
      return e.lanes & t ? !0 : (e = e.dependencies, !!(e !== null && ju(e)));
    }
    function rv(e, t, a) {
      switch (t.tag) {
        case 3:
          jt(
            t,
            t.stateNode.containerInfo
          ), Xu(
            t,
            vl,
            e.memoizedState.cache
          ), ji();
          break;
        case 27:
        case 5:
          j(t);
          break;
        case 4:
          jt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Xu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          a & t.childLanes && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ca(t), t.flags |= 128, null) : a & t.child.childLanes ? N0(
              e,
              t,
              a
            ) : (ca(t), e = Tn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ca(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (sl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ay(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(
            bl,
            bl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, zr(e, t, a);
        case 24:
          Xu(
            t,
            vl,
            e.memoizedState.cache
          );
      }
      return Tn(e, t, a);
    }
    function _r(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = tr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Ol = !0;
        else {
          if (!Br(e, a) && !(t.flags & 128))
            return Ol = !1, rv(
              e,
              t,
              a
            );
          Ol = !!(e.flags & 131072);
        }
      else
        Ol = !1, (i = je) && (ja(), i = (t.flags & 1048576) !== 0), i && (i = t.index, ja(), z0(t, gp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Vo(t.elementType), t.type = e, typeof e == "function")
            Dh(e) ? (i = Iu(
              e,
              i
            ), t.tag = 1, t.type = e = Gi(e), t = ey(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Mr(t, e), t.type = e = Gi(e), t = Or(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === vu) {
                t.tag = 11, t.type = e = zh(e), t = Rr(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === cs) {
                t.tag = 14, t = Sn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === da && (t = " Did you wrap a component in React.lazy() more than once?"), e = Be(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Or(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Iu(
            i,
            t.pendingProps
          ), ey(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (jt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, wu(e, t), Zc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Xu(t, vl, i), i !== f.cache && _h(
              t,
              [vl],
              a,
              !0
            ), hn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = ty(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ua(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Qc(o), t = ty(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (qt = yl(e.firstChild), ma = t, je = !0, Ts = null, Ac = !1, Qn = null, gi = !0, e = E1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (ji(), i === o) {
                t = Tn(
                  e,
                  t,
                  a
                );
                break e;
              }
              _t(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return _f(e, t), e === null ? (e = pu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : je || (e = t.type, a = t.pendingProps, i = Qe(
            Bn.current
          ), i = Oe(
            i
          ).createElement(e), i[Dl] = t, i[Pl] = a, Ot(i, e, a), Ft(i), t.stateNode = i) : t.memoizedState = pu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return j(t), e === null && je && (i = Qe(Bn.current), o = A(), i = t.stateNode = Qy(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Ac || (o = at(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Qa(t, 0).serverProps = o)), ma = t, gi = !0, o = qt, Hn(t.type) ? (bg = o, qt = yl(
            i.firstChild
          )) : qt = o), _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), _f(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && je && (f = A(), i = Js(
            t.type,
            f.ancestorInfo
          ), o = qt, (d = !o) || (d = ui(
            o,
            t.type,
            t.pendingProps,
            gi
          ), d !== null ? (t.stateNode = d, Ac || (f = at(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Qa(t, 0).serverProps = f)), ma = t, qt = yl(
            d.firstChild
          ), gi = !1, f = !0) : f = !1, d = !f), d && (i && Uh(t, o), fn(t))), j(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, xn(o, f) ? i = null : d !== null && xn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = Ku(
            e,
            t,
            Ra,
            null,
            null,
            a
          ), Wm._currentValue = o), _f(e, t), _t(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && je && (e = t.pendingProps, a = A(), i = a.ancestorInfo.current, e = i != null ? cf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = qt, (i = !a) || (i = hl(
            a,
            t.pendingProps,
            gi
          ), i !== null ? (t.stateNode = i, ma = t, qt = null, i = !0) : i = !1, i = !i), i && (e && Uh(t, a), fn(t))), null;
        case 13:
          return N0(e, t, a);
        case 4:
          return jt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Kd(
            t,
            null,
            i,
            a
          ) : _t(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Rr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return _t(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || X1 || (X1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Xu(t, i, f), _t(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Qu(t), o = ft(o), cl(t), i = Lv(
            i,
            o,
            void 0
          ), ba(), t.flags |= 1, _t(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Sn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Bf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ay(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Yf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = on(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return zr(e, t, a);
        case 24:
          return Qu(t), i = ft(vl), e === null ? (o = Gh(), o === null && (o = st, f = vf(), o.pooledCache = f, Qi(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Ql(t), Xu(t, vl, o)) : (e.lanes & a && (wu(e, t), Zc(t, null, null, a), hn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Xu(t, vl, i)) : (i = f.cache, Xu(t, vl, i), i !== o.cache && _h(
            t,
            [vl],
            a,
            !0
          ))), _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Jl(e) {
      e.flags |= 4;
    }
    function Gf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Kn) !== qs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !If(t)) {
        if (t = Jn.current, t !== null && ((Ue & 4194048) === Ue ? Si !== null : (Ue & 62914560) !== Ue && !(Ue & 536870912) || t !== Si))
          throw Hm = qv, Wg;
        e.flags |= 8192;
      }
    }
    function Vf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Fo() : 536870912, e.lanes |= t, xs |= t);
    }
    function Pu(e, t) {
      if (!je)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Fe(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Yl) !== pt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Yl) !== pt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function B0(e, t, a) {
      var i = t.pendingProps;
      switch (ar(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Fe(t), null;
        case 1:
          return Fe(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), lu(vl, t), lt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? (Nh(), Jl(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ch())), Fe(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Jl(t), a !== null ? (Fe(t), Gf(
            t,
            a
          )) : (Fe(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Jl(t), Fe(t), Gf(
            t,
            a
          )) : (Fe(t), t.flags &= -16777217) : (e.memoizedProps !== i && Jl(t), Fe(t), t.flags &= -16777217), null;
        case 27:
          L(t), a = Qe(Bn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Jl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Fe(t), null;
            }
            e = A(), Xi(t) ? xh(t) : (e = Qy(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Jl(t));
          }
          return Fe(t), null;
        case 5:
          if (L(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Jl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Fe(t), null;
            }
            if (o = A(), Xi(t))
              xh(t);
            else {
              switch (e = Qe(Bn.current), Js(a, o.ancestorInfo), o = o.context, e = Oe(e), o) {
                case uh:
                  e = e.createElementNS(_o, a);
                  break;
                case Zp:
                  e = e.createElementNS(
                    gs,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        _o,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        gs,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || bu.call(
                        ub,
                        a
                      ) || (ub[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Dl] = t, e[Pl] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Ot(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Jl(t);
            }
          }
          return Fe(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Jl(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Qe(Bn.current), a = A(), Xi(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Ac, i = null;
              var f = ma;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = cd(
                      e,
                      a,
                      i
                    ), o !== null && (Qa(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = cd(
                      e,
                      a,
                      i
                    ), o !== null && (Qa(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Dl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Cy(e.nodeValue, a)), e || fn(t);
            } else
              o = a.ancestorInfo.current, o != null && cf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Oe(e).createTextNode(
                i
              ), e[Dl] = t, t.stateNode = e;
          }
          return Fe(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Xi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Dl] = t, Fe(t), (t.mode & Yl) !== pt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Nh(), ji(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4, Fe(t), (t.mode & Yl) !== pt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Ch(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (oa(t), t) : (oa(t), null);
          }
          return oa(t), t.flags & 128 ? (t.lanes = a, (t.mode & Yl) !== pt && rn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Vf(t, t.updateQueue), Fe(t), (t.mode & Yl) !== pt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return lt(t), e === null && xy(
            t.stateNode.containerInfo
          ), Fe(t), null;
        case 10:
          return lu(t.type, t), Fe(t), null;
        case 19:
          if (Z(bl, t), o = t.memoizedState, o === null) return Fe(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) Pu(o, !1);
            else {
              if (Yt !== Oc || e !== null && e.flags & 128)
                for (e = t.child; e !== null; ) {
                  if (f = fu(e), f !== null) {
                    for (t.flags |= 128, Pu(o, !1), e = f.updateQueue, t.updateQueue = e, Vf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Oh(a, e), a = a.sibling;
                    return te(
                      bl,
                      bl.current & kd | _m,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && _n() > Np && (t.flags |= 128, i = !0, Pu(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = fu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Vf(t, e), Pu(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !je)
                  return Fe(t), null;
              } else
                2 * _n() - o.renderingStartTime > Np && a !== 536870912 && (t.flags |= 128, i = !0, Pu(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = _n(), e.sibling = null, a = bl.current, a = i ? a & kd | _m : a & kd, te(bl, a, t), e) : (Fe(t), null);
        case 22:
        case 23:
          return oa(t), Ja(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? a & 536870912 && !(t.flags & 128) && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), a = t.updateQueue, a !== null && Vf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Z(Rs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), lu(vl, t), Fe(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function _0(e, t) {
      switch (ar(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Yl) !== pt && rn(t), t) : null;
        case 3:
          return lu(vl, t), lt(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return L(t), null;
        case 13:
          if (oa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ji();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Yl) !== pt && rn(t), t) : null;
        case 19:
          return Z(bl, t), null;
        case 4:
          return lt(t), null;
        case 10:
          return lu(t.type, t), null;
        case 22:
        case 23:
          return oa(t), Ja(t), e !== null && Z(Rs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Yl) !== pt && rn(t), t) : null;
        case 24:
          return lu(vl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ny(e, t) {
      switch (ar(t), t.tag) {
        case 3:
          lu(vl, t), lt(t);
          break;
        case 26:
        case 27:
        case 5:
          L(t);
          break;
        case 4:
          lt(t);
          break;
        case 13:
          oa(t);
          break;
        case 19:
          Z(bl, t);
          break;
        case 10:
          lu(t.type, t);
          break;
        case 22:
        case 23:
          oa(t), Ja(t), e !== null && Z(Rs, t);
          break;
        case 24:
          lu(vl, t);
      }
    }
    function Wa(e) {
      return (e.mode & Yl) !== pt;
    }
    function uy(e, t) {
      Wa(e) ? (wa(), Fi(t, e), Ta()) : Fi(t, e);
    }
    function qr(e, t, a) {
      Wa(e) ? (wa(), Ii(
        a,
        e,
        t
      ), Ta()) : Ii(
        a,
        e,
        t
      );
    }
    function Fi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & gl) !== Ln ? $ !== null && typeof $.markComponentPassiveEffectMountStarted == "function" && $.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Gl) !== Ln && $ !== null && typeof $.markComponentLayoutEffectMountStarted == "function" && $.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & pa) !== Ln && (ah = !0), i = F(
              t,
              mS,
              a
            ), (e & pa) !== Ln && (ah = !1), (e & gl) !== Ln ? $ !== null && typeof $.markComponentPassiveEffectMountStopped == "function" && $.markComponentPassiveEffectMountStopped() : (e & Gl) !== Ln && $ !== null && typeof $.markComponentLayoutEffectMountStopped == "function" && $.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = a.tag & Gl ? "useLayoutEffect" : a.tag & pa ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, F(
                t,
                function(h, p) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    p
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        oe(t, t.return, h);
      }
    }
    function Ii(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & gl) !== Ln ? $ !== null && typeof $.markComponentPassiveEffectUnmountStarted == "function" && $.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Gl) !== Ln && $ !== null && typeof $.markComponentLayoutEffectUnmountStarted == "function" && $.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & pa) !== Ln && (ah = !0), o = t, F(
                o,
                pS,
                o,
                a,
                h
              ), (e & pa) !== Ln && (ah = !1), (e & gl) !== Ln ? $ !== null && typeof $.markComponentPassiveEffectUnmountStopped == "function" && $.markComponentPassiveEffectUnmountStopped() : (e & Gl) !== Ln && $ !== null && typeof $.markComponentLayoutEffectUnmountStopped == "function" && $.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (p) {
        oe(t, t.return, p);
      }
    }
    function iy(e, t) {
      Wa(e) ? (wa(), Fi(t, e), Ta()) : Fi(t, e);
    }
    function Xf(e, t, a) {
      Wa(e) ? (wa(), Ii(
        a,
        e,
        t
      ), Ta()) : Ii(
        a,
        e,
        t
      );
    }
    function cy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Wd || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          le(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          le(e) || "instance"
        ));
        try {
          F(
            e,
            U0,
            t,
            a
          );
        } catch (i) {
          oe(e, e.return, i);
        }
      }
    }
    function q0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function dv(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Wd || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        le(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        le(e) || "instance"
      ));
      try {
        var o = Iu(
          e.type,
          a,
          e.elementType === e.type
        ), f = F(
          e,
          q0,
          t,
          o,
          i
        );
        a = j1, f !== void 0 || a.has(e.type) || (a.add(e.type), F(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            le(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        oe(e, e.return, d);
      }
    }
    function Yr(e, t, a) {
      a.props = Iu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Wa(e) ? (wa(), F(
        e,
        y1,
        e,
        t,
        a
      ), Ta()) : F(
        e,
        y1,
        e,
        t,
        a
      );
    }
    function Y0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Wa(e))
            try {
              wa(), e.refCleanup = t(a);
            } finally {
              Ta();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            le(e)
          ), t.current = a;
      }
    }
    function uo(e, t) {
      try {
        F(e, Y0, e);
      } catch (a) {
        oe(e, t, a);
      }
    }
    function Ua(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Wa(e))
              try {
                wa(), F(e, i);
              } finally {
                Ta(e);
              }
            else F(e, i);
          } catch (o) {
            oe(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Wa(e))
              try {
                wa(), F(e, a, null);
              } finally {
                Ta(e);
              }
            else F(e, a, null);
          } catch (o) {
            oe(e, t, o);
          }
        else a.current = null;
    }
    function oy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Tp && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function G0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Tp && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function V0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        F(
          e,
          yu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        oe(e, e.return, o);
      }
    }
    function fy(e, t, a) {
      try {
        F(
          e,
          Mt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        oe(e, e.return, i);
      }
    }
    function sy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
    }
    function Pi(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || sy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function jf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hu));
      else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (jf(e, t, a), e = e.sibling; e !== null; )
          jf(e, t, a), e = e.sibling;
    }
    function ec(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (ec(e, t, a), e = e.sibling; e !== null; )
          ec(e, t, a), e = e.sibling;
    }
    function X0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (sy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Pi(e), ec(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (mu(a), t.flags &= -33), t = Pi(e), ec(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Pi(e), jf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function ry(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        F(
          e,
          ra,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        oe(e, e.return, i);
      }
    }
    function Gr(e, t) {
      if (e = e.containerInfo, pg = $p, e = S0(e), Ah(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, p = -1, v = 0, U = 0, _ = e, O = null;
              t: for (; ; ) {
                for (var q; _ !== a || o !== 0 && _.nodeType !== 3 || (h = d + o), _ !== f || i !== 0 && _.nodeType !== 3 || (p = d + i), _.nodeType === 3 && (d += _.nodeValue.length), (q = _.firstChild) !== null; )
                  O = _, _ = q;
                for (; ; ) {
                  if (_ === e) break t;
                  if (O === a && ++v === o && (h = d), O === f && ++U === i && (p = d), (q = _.nextSibling) !== null) break;
                  _ = O, O = _.parentNode;
                }
                _ = q;
              }
              a = h === -1 || p === -1 ? null : { start: h, end: p };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (vg = {
        focusedElem: e,
        selectionRange: a
      }, $p = !1, Ml = t; Ml !== null; )
        if (t = Ml, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Ml = e;
        else
          for (; Ml !== null; ) {
            switch (e = t = Ml, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                o & 1024 && a !== null && dv(e, a);
                break;
              case 3:
                if (o & 1024) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    vo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        vo(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (o & 1024)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ml = e;
              break;
            }
            Ml = t.return;
          }
    }
    function dy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(e, a), i & 4 && uy(a, Gl | wn);
          break;
        case 1:
          if (En(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), Wa(a) ? (wa(), F(
                a,
                wv,
                a,
                e
              ), Ta()) : F(
                a,
                wv,
                a,
                e
              );
            else {
              var o = Iu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                le(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                le(a) || "instance"
              )), Wa(a) ? (wa(), F(
                a,
                r1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Ta()) : F(
                a,
                r1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && cy(a), i & 512 && uo(a, a.return);
          break;
        case 3:
          if (t = La(), En(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              F(
                a,
                U0,
                i,
                o
              );
            } catch (d) {
              oe(a, a.return, d);
            }
          }
          e.effectDuration += Lu(t);
          break;
        case 27:
          t === null && i & 4 && ry(a);
        case 26:
        case 5:
          En(e, a), t === null && i & 4 && V0(a), i & 512 && uo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = La(), En(e, a), e = a.stateNode, e.effectDuration += Li(i);
            try {
              F(
                a,
                oy,
                a,
                t,
                Sp,
                e.effectDuration
              );
            } catch (d) {
              oe(a, a.return, d);
            }
          } else En(e, a);
          break;
        case 13:
          En(e, a), i & 4 && io(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = $f.bind(
            null,
            a
          ), go(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Dc, !i) {
            t = t !== null && t.memoizedState !== null || kt, o = Dc;
            var f = kt;
            Dc = i, (kt = t) && !f ? An(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : En(e, a), Dc = o, kt = f;
          }
          break;
        case 30:
          break;
        default:
          En(e, a);
      }
    }
    function hy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, hy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function su(e, t, a) {
      for (a = a.child; a !== null; )
        tc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function tc(e, t, a) {
      if (ml && typeof ml.onCommitFiberUnmount == "function")
        try {
          ml.onCommitFiberUnmount(di, a);
        } catch (f) {
          Il || (Il = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          kt || Ua(a, t), su(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          kt || Ua(a, t);
          var i = ul, o = Ya;
          Hn(a.type) && (ul = a.stateNode, Ya = !1), su(
            e,
            t,
            a
          ), F(
            a,
            So,
            a.stateNode
          ), ul = i, Ya = o;
          break;
        case 5:
          kt || Ua(a, t);
        case 6:
          if (i = ul, o = Ya, ul = null, su(
            e,
            t,
            a
          ), ul = i, Ya = o, ul !== null)
            if (Ya)
              try {
                F(
                  a,
                  mo,
                  ul,
                  a.stateNode
                );
              } catch (f) {
                oe(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                F(
                  a,
                  Ca,
                  ul,
                  a.stateNode
                );
              } catch (f) {
                oe(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          ul !== null && (Ya ? (e = ul, po(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), yc(e)) : po(ul, a.stateNode));
          break;
        case 4:
          i = ul, o = Ya, ul = a.stateNode.containerInfo, Ya = !0, su(
            e,
            t,
            a
          ), ul = i, Ya = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          kt || Ii(
            pa,
            a,
            t
          ), kt || qr(
            a,
            t,
            Gl
          ), su(
            e,
            t,
            a
          );
          break;
        case 1:
          kt || (Ua(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Yr(
            a,
            t,
            i
          )), su(
            e,
            t,
            a
          );
          break;
        case 21:
          su(
            e,
            t,
            a
          );
          break;
        case 22:
          kt = (i = kt) || a.memoizedState !== null, su(
            e,
            t,
            a
          ), kt = i;
          break;
        default:
          su(
            e,
            t,
            a
          );
      }
    }
    function io(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          F(
            t,
            sa,
            e
          );
        } catch (a) {
          oe(t, t.return, a);
        }
    }
    function Vr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Q1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Q1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function lc(e, t) {
      var a = Vr(e);
      t.forEach(function(i) {
        var o = ai.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), xt)
            if (Fd !== null && Id !== null)
              ho(Id, Fd);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Al(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Hn(h.type)) {
                  ul = h.stateNode, Ya = !1;
                  break e;
                }
                break;
              case 5:
                ul = h.stateNode, Ya = !1;
                break e;
              case 3:
              case 4:
                ul = h.stateNode.containerInfo, Ya = !0;
                break e;
            }
            h = h.return;
          }
          if (ul === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          tc(o, f, d), ul = null, Ya = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          yy(t, e), t = t.sibling;
    }
    function yy(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Al(t, e), Kl(e), i & 4 && (Ii(
            pa | wn,
            e,
            e.return
          ), Fi(pa | wn, e), qr(
            e,
            e.return,
            Gl | wn
          ));
          break;
        case 1:
          Al(t, e), Kl(e), i & 512 && (kt || a === null || Ua(a, a.return)), i & 64 && Dc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ou;
          if (Al(t, e), Kl(e), i & 512 && (kt || a === null || Ua(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Ho] || o[Dl] || o.namespaceURI === _o || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Ot(o, i, a), o[Dl] = e, Ft(o), i = o;
                        break e;
                      case "link":
                        var f = Jy(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Ot(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = Jy(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], k(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Ot(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Dl] = e, Ft(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  Ky(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = od(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? Ky(
                o,
                e.type,
                e.stateNode
              ) : od(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && fy(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Al(t, e), Kl(e), i & 512 && (kt || a === null || Ua(a, a.return)), a !== null && i & 4 && fy(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Al(t, e), Kl(e), i & 512 && (kt || a === null || Ua(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              F(e, mu, t);
            } catch (U) {
              oe(e, e.return, U);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, fy(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (Fv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Al(t, e), Kl(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              F(
                e,
                sc,
                t,
                a,
                i
              );
            } catch (U) {
              oe(e, e.return, U);
            }
          }
          break;
        case 3:
          if (o = La(), Jp = null, f = Ou, Ou = Ff(t.containerInfo), Al(t, e), Ou = f, Kl(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              F(
                e,
                jy,
                t.containerInfo
              );
            } catch (U) {
              oe(e, e.return, U);
            }
          Fv && (Fv = !1, ac(e)), t.effectDuration += Lu(o);
          break;
        case 4:
          i = Ou, Ou = Ff(
            e.stateNode.containerInfo
          ), Al(t, e), Kl(e), Ou = i;
          break;
        case 12:
          i = La(), Al(t, e), Kl(e), e.stateNode.effectDuration += Li(i);
          break;
        case 13:
          Al(t, e), Kl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ag = _n()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, lc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, p = Dc, v = kt;
          if (Dc = p || o, kt = v || h, Al(t, e), kt = v, Dc = p, Kl(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~pp : t._visibility | pp, o && (a === null || h || Dc || kt || Rl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? F(h, Wl, f) : F(
                      h,
                      Vy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (U) {
                    oe(h, h.return, U);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? F(h, Gy, d) : F(
                      h,
                      ud,
                      d,
                      h.memoizedProps
                    );
                  } catch (U) {
                    oe(h, h.return, U);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, lc(e, a))));
          break;
        case 19:
          Al(t, e), Kl(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, lc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Al(t, e), Kl(e);
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          F(e, X0, e);
        } catch (a) {
          oe(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ac(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ac(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function En(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          dy(e, t.alternate, t), t = t.sibling;
    }
    function fa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          qr(
            e,
            e.return,
            Gl
          ), Rl(e);
          break;
        case 1:
          Ua(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Yr(
            e,
            e.return,
            t
          ), Rl(e);
          break;
        case 27:
          F(
            e,
            So,
            e.stateNode
          );
        case 26:
        case 5:
          Ua(e, e.return), Rl(e);
          break;
        case 22:
          e.memoizedState === null && Rl(e);
          break;
        case 30:
          Rl(e);
          break;
        default:
          Rl(e);
      }
    }
    function Rl(e) {
      for (e = e.child; e !== null; )
        fa(e), e = e.sibling;
    }
    function ru(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          An(
            e,
            a,
            i
          ), uy(a, Gl);
          break;
        case 1:
          if (An(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && F(
            a,
            wv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              F(
                a,
                Jc,
                t,
                e
              );
            } catch (f) {
              oe(a, a.return, f);
            }
          }
          i && o & 64 && cy(a), uo(a, a.return);
          break;
        case 27:
          ry(a);
        case 26:
        case 5:
          An(
            e,
            a,
            i
          ), i && t === null && o & 4 && V0(a), uo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = La(), An(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Li(o);
            try {
              F(
                a,
                oy,
                a,
                t,
                Sp,
                i.effectDuration
              );
            } catch (f) {
              oe(a, a.return, f);
            }
          } else
            An(
              e,
              a,
              i
            );
          break;
        case 13:
          An(
            e,
            a,
            i
          ), i && o & 4 && io(e, a);
          break;
        case 22:
          a.memoizedState === null && An(
            e,
            a,
            i
          ), uo(a, a.return);
          break;
        case 30:
          break;
        default:
          An(
            e,
            a,
            i
          );
      }
    }
    function An(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        ru(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Rn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Qi(e), a != null && sn(a));
    }
    function Fa(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Qi(t), e != null && sn(e));
    }
    function Ie(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Qf(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Qf(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ie(
            e,
            t,
            a,
            i
          ), o & 2048 && iy(t, gl | wn);
          break;
        case 1:
          Ie(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = La();
          Ie(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Qi(t), a != null && sn(a))), e.passiveEffectDuration += Lu(f);
          break;
        case 12:
          if (o & 2048) {
            o = La(), Ie(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Li(o);
            try {
              F(
                t,
                G0,
                t,
                t.alternate,
                Sp,
                e.passiveEffectDuration
              );
            } catch (h) {
              oe(t, t.return, h);
            }
          } else
            Ie(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Ie(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Sc ? Ie(
            e,
            t,
            a,
            i
          ) : co(
            e,
            t
          ) : f._visibility & Sc ? Ie(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Sc, ei(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Rn(d, t);
          break;
        case 24:
          Ie(
            e,
            t,
            a,
            i
          ), o & 2048 && Fa(t.alternate, t);
          break;
        default:
          Ie(
            e,
            t,
            a,
            i
          );
      }
    }
    function ei(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Xr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function Xr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ei(
            e,
            t,
            a,
            i,
            o
          ), iy(t, gl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Sc ? ei(
            e,
            t,
            a,
            i,
            o
          ) : co(
            e,
            t
          ) : (d._visibility |= Sc, ei(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Rn(
            t.alternate,
            t
          );
          break;
        case 24:
          ei(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && Fa(t.alternate, t);
          break;
        default:
          ei(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function co(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              co(
                a,
                i
              ), o & 2048 && Rn(
                i.alternate,
                i
              );
              break;
            case 24:
              co(
                a,
                i
              ), o & 2048 && Fa(
                i.alternate,
                i
              );
              break;
            default:
              co(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function nc(e) {
      if (e.subtreeFlags & qm)
        for (e = e.child; e !== null; )
          ti(e), e = e.sibling;
    }
    function ti(e) {
      switch (e.tag) {
        case 26:
          nc(e), e.flags & qm && e.memoizedState !== null && F0(
            Ou,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          nc(e);
          break;
        case 3:
        case 4:
          var t = Ou;
          Ou = Ff(
            e.stateNode.containerInfo
          ), nc(e), Ou = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = qm, qm = 16777216, nc(e), qm = t) : nc(e));
          break;
        default:
          nc(e);
      }
    }
    function Lf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function oo(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ml = i, py(
              i,
              e
            );
          }
        Lf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          my(e), e = e.sibling;
    }
    function my(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oo(e), e.flags & 2048 && Xf(
            e,
            e.return,
            gl | wn
          );
          break;
        case 3:
          var t = La();
          oo(e), e.stateNode.passiveEffectDuration += Lu(t);
          break;
        case 12:
          t = La(), oo(e), e.stateNode.passiveEffectDuration += Li(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Sc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Sc, wf(e)) : oo(e);
          break;
        default:
          oo(e);
      }
    }
    function wf(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ml = i, py(
              i,
              e
            );
          }
        Lf(e);
      }
      for (e = e.child; e !== null; )
        Zf(e), e = e.sibling;
    }
    function Zf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Xf(
            e,
            e.return,
            gl
          ), wf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Sc && (t._visibility &= ~Sc, wf(e));
          break;
        default:
          wf(e);
      }
    }
    function py(e, t) {
      for (; Ml !== null; ) {
        var a = Ml, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Xf(
              i,
              t,
              gl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Qi(i));
            break;
          case 24:
            sn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Ml = i;
        else
          e: for (a = e; Ml !== null; ) {
            i = Ml;
            var o = i.sibling, f = i.return;
            if (hy(i), i === a) {
              Ml = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Ml = o;
              break e;
            }
            Ml = f;
          }
      }
    }
    function vy() {
      gS.forEach(function(e) {
        return e();
      });
    }
    function gy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || H.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function kl(e) {
      if ((We & va) !== tn && Ue !== 0)
        return Ue & -Ue;
      var t = H.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = As, e !== 0 ? e : Oy()) : u0();
    }
    function j0() {
      an === 0 && (an = !(Ue & 536870912) || je ? oh() : 536870912);
      var e = Jn.current;
      return e !== null && (e.flags |= 32), an;
    }
    function zt(e, t, a) {
      if (ah && console.error("useInsertionEffect must not schedule updates."), og && (Bp = !0), (e === st && (Pe === Ms || Pe === Us) || e.cancelPendingCommit !== null) && (ic(e, 0), du(
        e,
        Ue,
        an,
        !1
      )), Cc(e, a), We & va && e === st) {
        if (ea)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Me && le(Me) || "Unknown", I1.has(e) || (I1.add(e), t = le(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              F1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), F1 = !0);
          }
      } else
        xt && $n(e, t, a), Z0(t), e === st && ((We & va) === tn && (Qo |= a), Yt === Os && du(
          e,
          Ue,
          an,
          !1
        )), xa(e);
    }
    function Jt(e, t, a) {
      if ((We & (va | Mu)) !== tn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Wo(e, t), o = i ? Sy(e, t) : wr(e, t, !0), f = i;
      do {
        if (o === Oc) {
          th && !i && du(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Q0(a)) {
            o = wr(e, t, !1), f = !1;
            continue;
          }
          if (o === Pd) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Qm;
                var p = o.current.memoizedState.isDehydrated;
                if (p && (ic(
                  o,
                  h
                ).flags |= 256), h = wr(
                  o,
                  h,
                  !1
                ), h !== Pd) {
                  if (tg && !p) {
                    o.errorRecoveryDisabledLanes |= f, Qo |= f, o = Os;
                    break e;
                  }
                  o = ga, ga = d, o !== null && (ga === null ? ga = o : ga.push.apply(
                    ga,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== Pd) continue;
            }
          }
          if (o === Gm) {
            ic(e, 0), du(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Oc:
              case Gm:
                throw Error("Root did not complete. This is a bug in React.");
              case Os:
                if ((t & 4194048) !== t) break;
              case Hp:
                du(
                  i,
                  t,
                  an,
                  !Xo
                );
                break e;
              case Pd:
                ga = null;
                break;
              case Iv:
              case L1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (H.actQueue !== null)
              $r(
                i,
                a,
                t,
                ga,
                Lm,
                Cp,
                an,
                Qo,
                xs
              );
            else {
              if ((t & 62914560) === t && (f = ag + Z1 - _n(), 10 < f)) {
                if (du(
                  i,
                  t,
                  an,
                  !Xo
                ), la(i, 0, !0) !== 0) break e;
                i.timeoutHandle = ib(
                  tl.bind(
                    null,
                    i,
                    a,
                    ga,
                    Lm,
                    Cp,
                    t,
                    an,
                    Qo,
                    xs,
                    Xo,
                    o,
                    ES,
                    Kg,
                    0
                  ),
                  f
                );
                break e;
              }
              tl(
                i,
                a,
                ga,
                Lm,
                Cp,
                t,
                an,
                Qo,
                xs,
                Xo,
                o,
                SS,
                Kg,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      xa(e);
    }
    function tl(e, t, a, i, o, f, d, h, p, v, U, _, O, q) {
      if (e.timeoutHandle = _s, _ = t.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && ($m = { stylesheets: null, count: 0, unsuspend: W0 }, ti(t), _ = I0(), _ !== null)) {
        e.cancelPendingCommit = _(
          $r.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            p,
            U,
            TS,
            O,
            q
          )
        ), du(
          e,
          f,
          d,
          !v
        );
        return;
      }
      $r(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        p
      );
    }
    function Q0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!ya(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function du(e, t, a, i) {
      t &= ~lg, t &= ~Qo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - zl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && n0(e, a, t);
    }
    function uc() {
      return (We & (va | Mu)) === tn ? (cc(0), !1) : !0;
    }
    function jr() {
      if (Me !== null) {
        if (Pe === Ga)
          var e = Me.return;
        else
          e = Me, nr(), Ka(e), Jd = null, Bm = 0, e = Me;
        for (; e !== null; )
          ny(e.alternate, e), e = e.return;
        Me = null;
      }
    }
    function ic(e, t) {
      var a = e.timeoutHandle;
      a !== _s && (e.timeoutHandle = _s, _S(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), jr(), st = e, Me = a = on(e.current, null), Ue = t, Pe = Ga, ln = null, Xo = !1, th = Wo(e, t), tg = !1, Yt = Oc, xs = an = lg = Qo = jo = 0, ga = Qm = null, Cp = !1, t & 8 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - zl(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Ti = t, df(), t = Zg(), 1e3 < t - wg && (H.recentlyCreatedOwnerStacks = 0, wg = t), zu.discardPendingWarnings(), a;
    }
    function Jf(e, t) {
      ye = null, H.H = Up, H.getCurrentStack = null, ea = !1, ha = null, t === xm || t === Rp ? (t = jh(), Pe = Xm) : t === Wg ? (t = jh(), Pe = w1) : Pe = t === B1 ? eg : t !== null && typeof t == "object" && typeof t.then == "function" ? eh : Vm, ln = t;
      var a = Me;
      if (a === null)
        Yt = Gm, no(
          e,
          ua(t, e.current)
        );
      else
        switch (a.mode & Yl && au(a), ba(), Pe) {
          case Vm:
            $ !== null && typeof $.markComponentErrored == "function" && $.markComponentErrored(
              a,
              t,
              Ue
            );
            break;
          case Ms:
          case Us:
          case Xm:
          case eh:
          case jm:
            $ !== null && typeof $.markComponentSuspended == "function" && $.markComponentSuspended(
              a,
              t,
              Ue
            );
        }
    }
    function Qr() {
      var e = H.H;
      return H.H = Up, e === null ? Up : e;
    }
    function by() {
      var e = H.A;
      return H.A = vS, e;
    }
    function Lr() {
      Yt = Os, Xo || (Ue & 4194048) !== Ue && Jn.current !== null || (th = !0), !(jo & 134217727) && !(Qo & 134217727) || st === null || du(
        st,
        Ue,
        an,
        !1
      );
    }
    function wr(e, t, a) {
      var i = We;
      We |= va;
      var o = Qr(), f = by();
      if (st !== e || Ue !== t) {
        if (xt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (ho(e, Ue), d.clear()), Xl(e, t);
        }
        Lm = null, ic(e, t);
      }
      Ei(t), t = !1, d = Yt;
      e: do
        try {
          if (Pe !== Ga && Me !== null) {
            var h = Me, p = ln;
            switch (Pe) {
              case eg:
                jr(), d = Hp;
                break e;
              case Xm:
              case Ms:
              case Us:
              case eh:
                Jn.current === null && (t = !0);
                var v = Pe;
                if (Pe = Ga, ln = null, li(e, h, p, v), a && th) {
                  d = Oc;
                  break e;
                }
                break;
              default:
                v = Pe, Pe = Ga, ln = null, li(e, h, p, v);
            }
          }
          Zr(), d = Yt;
          break;
        } catch (U) {
          Jf(e, U);
        }
      while (!0);
      return t && e.shellSuspendCounter++, nr(), We = i, H.H = o, H.A = f, Gs(), Me === null && (st = null, Ue = 0, df()), d;
    }
    function Zr() {
      for (; Me !== null; ) Ey(Me);
    }
    function Sy(e, t) {
      var a = We;
      We |= va;
      var i = Qr(), o = by();
      if (st !== e || Ue !== t) {
        if (xt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (ho(e, Ue), f.clear()), Xl(e, t);
        }
        Lm = null, Np = _n() + J1, ic(e, t);
      } else
        th = Wo(
          e,
          t
        );
      Ei(t);
      e: do
        try {
          if (Pe !== Ga && Me !== null)
            t: switch (t = Me, f = ln, Pe) {
              case Vm:
                Pe = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  Vm
                );
                break;
              case Ms:
              case Us:
                if (Xh(f)) {
                  Pe = Ga, ln = null, Jr(t);
                  break;
                }
                t = function() {
                  Pe !== Ms && Pe !== Us || st !== e || (Pe = jm), xa(e);
                }, f.then(t, t);
                break e;
              case Xm:
                Pe = jm;
                break e;
              case w1:
                Pe = Pv;
                break e;
              case jm:
                Xh(f) ? (Pe = Ga, ln = null, Jr(t)) : (Pe = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  jm
                ));
                break;
              case Pv:
                var d = null;
                switch (Me.tag) {
                  case 26:
                    d = Me.memoizedState;
                  case 5:
                  case 27:
                    var h = Me;
                    if (!d || If(d)) {
                      Pe = Ga, ln = null;
                      var p = h.sibling;
                      if (p !== null) Me = p;
                      else {
                        var v = h.return;
                        v !== null ? (Me = v, Kf(v)) : Me = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Pe = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  Pv
                );
                break;
              case eh:
                Pe = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  eh
                );
                break;
              case eg:
                jr(), Yt = Hp;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          H.actQueue !== null ? Zr() : Ty();
          break;
        } catch (U) {
          Jf(e, U);
        }
      while (!0);
      return nr(), H.H = i, H.A = o, We = a, Me !== null ? ($ !== null && typeof $.markRenderYielded == "function" && $.markRenderYielded(), Oc) : (Gs(), st = null, Ue = 0, df(), Yt);
    }
    function Ty() {
      for (; Me !== null && !up(); )
        Ey(Me);
    }
    function Ey(e) {
      var t = e.alternate;
      (e.mode & Yl) !== pt ? (ur(e), t = F(
        e,
        _r,
        t,
        e,
        Ti
      ), au(e)) : t = F(
        e,
        _r,
        t,
        e,
        Ti
      ), e.memoizedProps = e.pendingProps, t === null ? Kf(e) : Me = t;
    }
    function Jr(e) {
      var t = F(e, Kr, e);
      e.memoizedProps = e.pendingProps, t === null ? Kf(e) : Me = t;
    }
    function Kr(e) {
      var t = e.alternate, a = (e.mode & Yl) !== pt;
      switch (a && ur(e), e.tag) {
        case 15:
        case 0:
          t = Ph(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ue
          );
          break;
        case 11:
          t = Ph(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ue
          );
          break;
        case 5:
          Ka(e);
        default:
          ny(t, e), e = Me = Oh(e, Ti), t = _r(t, e, Ti);
      }
      return a && au(e), t;
    }
    function li(e, t, a, i) {
      nr(), Ka(t), Jd = null, Bm = 0;
      var o = t.return;
      try {
        if (Nf(
          e,
          o,
          t,
          a,
          Ue
        )) {
          Yt = Gm, no(
            e,
            ua(a, e.current)
          ), Me = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Me = o, f;
        Yt = Gm, no(
          e,
          ua(a, e.current)
        ), Me = null;
        return;
      }
      t.flags & 32768 ? (je || i === Vm ? e = !0 : th || Ue & 536870912 ? e = !1 : (Xo = e = !0, (i === Ms || i === Us || i === Xm || i === eh) && (i = Jn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), kr(t, e)) : Kf(t);
    }
    function Kf(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          kr(
            t,
            Xo
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ur(t), a = F(
          t,
          B0,
          a,
          t,
          Ti
        ), (t.mode & Yl) !== pt && wi(t), a !== null) {
          Me = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Me = t;
          return;
        }
        Me = t = e;
      } while (t !== null);
      Yt === Oc && (Yt = L1);
    }
    function kr(e, t) {
      do {
        var a = _0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Me = a;
          return;
        }
        if ((e.mode & Yl) !== pt) {
          wi(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Me = e;
          return;
        }
        Me = e = a;
      } while (e !== null);
      Yt = Hp, Me = null;
    }
    function $r(e, t, a, i, o, f, d, h, p) {
      e.cancelPendingCommit = null;
      do
        fo();
      while (Vl !== Hs);
      if (zu.flushLegacyContextWarning(), zu.flushPendingUnsafeLifecycleWarnings(), (We & (va | Mu)) !== tn)
        throw Error("Should not already be working.");
      if ($ !== null && typeof $.markCommitStarted == "function" && $.markCommitStarted(a), t === null) Et();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= Hv, lv(
          e,
          a,
          f,
          d,
          h,
          p
        ), e === st && (Me = st = null, Ue = 0), lh = t, wo = e, Zo = a, ug = f, ig = o, W1 = i, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Dy(Mo, function() {
          return kf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Sp = jd(), i = (t.flags & 13878) !== 0, t.subtreeFlags & 13878 || i) {
          i = H.T, H.T = null, o = se.p, se.p = pl, d = We, We |= Mu;
          try {
            Gr(e, t, a);
          } finally {
            We = d, se.p = o, H.T = i;
          }
        }
        Vl = K1, zn(), Wr(), L0();
      }
    }
    function zn() {
      if (Vl === K1) {
        Vl = Hs;
        var e = wo, t = lh, a = Zo, i = (t.flags & 13878) !== 0;
        if (t.subtreeFlags & 13878 || i) {
          i = H.T, H.T = null;
          var o = se.p;
          se.p = pl;
          var f = We;
          We |= Mu;
          try {
            Fd = a, Id = e, yy(t, e), Id = Fd = null, a = vg;
            var d = S0(e.containerInfo), h = a.focusedElem, p = a.selectionRange;
            if (d !== h && h && h.ownerDocument && b0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (p !== null && Ah(h)) {
                var v = p.start, U = p.end;
                if (U === void 0 && (U = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    U,
                    h.value.length
                  );
                else {
                  var _ = h.ownerDocument || document, O = _ && _.defaultView || window;
                  if (O.getSelection) {
                    var q = O.getSelection(), I = h.textContent.length, re = Math.min(
                      p.start,
                      I
                    ), rt = p.end === void 0 ? re : Math.min(p.end, I);
                    !q.extend && re > rt && (d = rt, rt = re, re = d);
                    var Ce = Eh(
                      h,
                      re
                    ), b = Eh(
                      h,
                      rt
                    );
                    if (Ce && b && (q.rangeCount !== 1 || q.anchorNode !== Ce.node || q.anchorOffset !== Ce.offset || q.focusNode !== b.node || q.focusOffset !== b.offset)) {
                      var S = _.createRange();
                      S.setStart(Ce.node, Ce.offset), q.removeAllRanges(), re > rt ? (q.addRange(S), q.extend(b.node, b.offset)) : (S.setEnd(b.node, b.offset), q.addRange(S));
                    }
                  }
                }
              }
              for (_ = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && _.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < _.length; h++) {
                var T = _[h];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            $p = !!pg, vg = pg = null;
          } finally {
            We = f, se.p = o, H.T = i;
          }
        }
        e.current = t, Vl = k1;
      }
    }
    function Wr() {
      if (Vl === k1) {
        Vl = Hs;
        var e = wo, t = lh, a = Zo, i = (t.flags & 8772) !== 0;
        if (t.subtreeFlags & 8772 || i) {
          i = H.T, H.T = null;
          var o = se.p;
          se.p = pl;
          var f = We;
          We |= Mu;
          try {
            $ !== null && typeof $.markLayoutEffectsStarted == "function" && $.markLayoutEffectsStarted(a), Fd = a, Id = e, dy(
              e,
              t.alternate,
              t
            ), Id = Fd = null, $ !== null && typeof $.markLayoutEffectsStopped == "function" && $.markLayoutEffectsStopped();
          } finally {
            We = f, se.p = o, H.T = i;
          }
        }
        Vl = $1;
      }
    }
    function L0() {
      if (Vl === AS || Vl === $1) {
        Vl = Hs, Sv();
        var e = wo, t = lh, a = Zo, i = W1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Vl = ng : (Vl = Hs, lh = wo = null, Dn(e, e.pendingLanes), Cs = 0, Zm = null);
        var f = e.pendingLanes;
        if (f === 0 && (Lo = null), o || ro(e), o = sh(a), t = t.stateNode, ml && typeof ml.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case pl:
                var h = bd;
                break;
              case en:
                h = ss;
                break;
              case Tu:
                h = Mo;
                break;
              case Ad:
                h = rs;
                break;
              default:
                h = Mo;
            }
            ml.onCommitFiberRoot(
              di,
              t,
              h,
              d
            );
          } catch (_) {
            Il || (Il = !0, console.error(
              "React instrumentation encountered an error: %s",
              _
            ));
          }
        if (xt && e.memoizedUpdaters.clear(), vy(), i !== null) {
          d = H.T, h = se.p, se.p = pl, H.T = null;
          try {
            var p = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var v = i[t], U = w0(v.stack);
              F(
                v.source,
                p,
                v.value,
                U
              );
            }
          } finally {
            H.T = d, se.p = h;
          }
        }
        Zo & 3 && fo(), xa(e), f = e.pendingLanes, a & 4194090 && f & 42 ? (Ep = !0, e === cg ? wm++ : (wm = 0, cg = e)) : wm = 0, cc(0), Et();
      }
    }
    function w0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Dn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sn(t)));
    }
    function fo(e) {
      return zn(), Wr(), L0(), kf();
    }
    function kf() {
      if (Vl !== ng) return !1;
      var e = wo, t = ug;
      ug = 0;
      var a = sh(Zo), i = Tu > a ? Tu : a;
      a = H.T;
      var o = se.p;
      try {
        se.p = i, H.T = null, i = ig, ig = null;
        var f = wo, d = Zo;
        if (Vl = Hs, lh = wo = null, Zo = 0, (We & (va | Mu)) !== tn)
          throw Error("Cannot flush passive effects while already rendering.");
        og = !0, Bp = !1, $ !== null && typeof $.markPassiveEffectsStarted == "function" && $.markPassiveEffectsStarted(d);
        var h = We;
        if (We |= Mu, my(f.current), Qf(
          f,
          f.current,
          d,
          i
        ), $ !== null && typeof $.markPassiveEffectsStopped == "function" && $.markPassiveEffectsStopped(), ro(f), We = h, cc(0, !1), Bp ? f === Zm ? Cs++ : (Cs = 0, Zm = f) : Cs = 0, Bp = og = !1, ml && typeof ml.onPostCommitFiberRoot == "function")
          try {
            ml.onPostCommitFiberRoot(di, f);
          } catch (v) {
            Il || (Il = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var p = f.current.stateNode;
        return p.effectDuration = 0, p.passiveEffectDuration = 0, !0;
      } finally {
        se.p = o, H.T = a, Dn(e, t);
      }
    }
    function so(e, t, a) {
      t = ua(a, t), t = El(e.stateNode, t, 2), e = Za(e, t, 2), e !== null && (Cc(e, 2), xa(e));
    }
    function oe(e, t, a) {
      if (ah = !1, e.tag === 3)
        so(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            so(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Lo === null || !Lo.has(i))) {
              e = ua(a, e), a = Rt(2), i = Za(t, a, 2), i !== null && (Cf(
                a,
                i,
                t,
                e
              ), Cc(i, 2), xa(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function Ay(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new bS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (tg = !0, o.add(a), i = hv.bind(null, e, t, a), xt && ho(e, a), t.then(i, i));
    }
    function hv(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, gy() && H.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), st === e && (Ue & a) === a && (Yt === Os || Yt === Iv && (Ue & 62914560) === Ue && _n() - ag < Z1 ? (We & va) === tn && ic(e, 0) : lg |= a, xs === Ue && (xs = 0)), xa(e);
    }
    function Ry(e, t) {
      t === 0 && (t = Fo()), e = jl(e, t), e !== null && (Cc(e, t), xa(e));
    }
    function $f(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Ry(e, a);
    }
    function ai(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Ry(e, a);
    }
    function Fr(e, t, a) {
      if (t.subtreeFlags & 67117056)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Ao;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && F(
            o,
            zy,
            i,
            o,
            (o.mode & jg) === pt
          ) : Fr(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? F(
            o,
            zy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && F(
            o,
            Fr,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function zy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      xe(!0);
      try {
        fa(t), a && Zf(t), ru(e, t.alternate, t, !1), a && Xr(e, t, 0, null, !1, 0);
      } finally {
        xe(!1);
      }
    }
    function ro(e) {
      var t = !0;
      e.current.mode & (ta | Ru) || (t = !1), Fr(
        e,
        e.current,
        t
      );
    }
    function Ia(e) {
      if ((We & va) === tn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = le(e) || "ReactComponent", _p !== null) {
            if (_p.has(t)) return;
            _p.add(t);
          } else _p = /* @__PURE__ */ new Set([t]);
          F(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function ho(e, t) {
      xt && e.memoizedUpdaters.forEach(function(a) {
        $n(e, a, t);
      });
    }
    function Dy(e, t) {
      var a = H.actQueue;
      return a !== null ? (a.push(t), DS) : gd(e, t);
    }
    function Z0(e) {
      gy() && H.actQueue === null && F(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          le(e)
        );
      });
    }
    function xa(e) {
      e !== nh && e.next === null && (nh === null ? qp = nh = e : nh = nh.next = e), Yp = !0, H.actQueue !== null ? sg || (sg = !0, Kt()) : fg || (fg = !0, Kt());
    }
    function cc(e, t) {
      if (!rg && Yp) {
        rg = !0;
        do
          for (var a = !1, i = qp; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - zl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ed(i, f));
            } else
              f = Ue, f = la(
                i,
                i === st ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== _s
              ), !(f & 3) || Wo(i, f) || (a = !0, ed(i, f));
            i = i.next;
          }
        while (a);
        rg = !1;
      }
    }
    function Ir() {
      Pr();
    }
    function Pr() {
      Yp = sg = fg = !1;
      var e = 0;
      Ns !== 0 && (yo() && (e = Ns), Ns = 0);
      for (var t = _n(), a = null, i = qp; i !== null; ) {
        var o = i.next, f = On(i, t);
        f === 0 ? (i.next = null, a === null ? qp = o : a.next = o, o === null && (nh = a)) : (a = i, (e !== 0 || f & 3) && (Yp = !0)), i = o;
      }
      cc(e);
    }
    function On(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - zl(f), h = 1 << d, p = o[d];
        p === -1 ? (!(h & a) || h & i) && (o[d] = a0(h, t)) : p <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = st, a = Ue, a = la(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== _s
      ), i = e.callbackNode, a === 0 || e === t && (Pe === Ms || Pe === Us) || e.cancelPendingCommit !== null)
        return i !== null && td(i), e.callbackNode = null, e.callbackPriority = 0;
      if (!(a & 3) || Wo(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || H.actQueue !== null && i !== dg)
          td(i);
        else return t;
        switch (sh(a)) {
          case pl:
          case en:
            a = ss;
            break;
          case Tu:
            a = Mo;
            break;
          case Ad:
            a = rs;
            break;
          default:
            a = Mo;
        }
        return i = Dt.bind(null, e), H.actQueue !== null ? (H.actQueue.push(i), a = dg) : a = gd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && td(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Dt(e, t) {
      if (Ep = Tp = !1, Vl !== Hs && Vl !== ng)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (fo() && e.callbackNode !== a)
        return null;
      var i = Ue;
      return i = la(
        e,
        e === st ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== _s
      ), i === 0 ? null : (Jt(
        e,
        i,
        t
      ), On(e, _n()), e.callbackNode != null && e.callbackNode === a ? Dt.bind(null, e) : null);
    }
    function ed(e, t) {
      if (fo()) return null;
      Tp = Ep, Ep = !1, Jt(e, t, !0);
    }
    function td(e) {
      e !== dg && e !== null && bv(e);
    }
    function Kt() {
      H.actQueue !== null && H.actQueue.push(function() {
        return Pr(), null;
      }), qS(function() {
        (We & (va | Mu)) !== tn ? gd(
          bd,
          Ir
        ) : Pr();
      });
    }
    function Oy() {
      return Ns === 0 && (Ns = oh()), Ns;
    }
    function My(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (k(e, "action"), Xc("" + e));
    }
    function Uy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function yt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = My(
          (o[Pl] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Pl] || null) ? My(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new ue(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Ns !== 0) {
                    var p = d ? Uy(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: p,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), ki(
                      a,
                      v,
                      null,
                      p
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), p = d ? Uy(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: p,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), ki(
                    a,
                    v,
                    f,
                    p
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function rl(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Kv(i);
      }
      e.currentTarget = null;
    }
    function Mn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], p = h.instance, v = h.currentTarget;
              if (h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? F(
                p,
                rl,
                f,
                h,
                v
              ) : rl(f, h, v), o = p;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], p = h.instance, v = h.currentTarget, h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? F(
                p,
                rl,
                f,
                h,
                v
              ) : rl(f, h, v), o = p;
            }
        }
      }
    }
    function ze(e, t) {
      hg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[lm];
      a === void 0 && (a = t[lm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (ad(t, e, 2, !1), a.add(i));
    }
    function ld(e, t, a) {
      hg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), ad(
        a,
        e,
        i,
        t
      );
    }
    function xy(e) {
      if (!e[Gp]) {
        e[Gp] = !0, cp.forEach(function(a) {
          a !== "selectionchange" && (hg.has(a) || ld(a, !1, e), ld(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Gp] || (t[Gp] = !0, ld("selectionchange", !1, t));
      }
    }
    function ad(e, t, a, i) {
      switch (yd(t)) {
        case pl:
          var o = pv;
          break;
        case en:
          o = hd;
          break;
        default:
          o = ci;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !D || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Nl(e, t, a, i, o) {
      var f = i;
      if (!(t & 1) && !(t & 2) && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Wn(h), d === null) return;
              if (p = d.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      ks(function() {
        var v = f, U = Bi(a), _ = [];
        e: {
          var O = Xg.get(e);
          if (O !== void 0) {
            var q = ue, I = e;
            switch (e) {
              case "keypress":
                if (jc(a) === 0) break e;
              case "keydown":
              case "keyup":
                q = Lb;
                break;
              case "focusin":
                I = "focus", q = _e;
                break;
              case "focusout":
                I = "blur", q = _e;
                break;
              case "beforeblur":
              case "afterblur":
                q = _e;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = Ee;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = fe;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = Jb;
                break;
              case qg:
              case Yg:
              case Gg:
                q = Rv;
                break;
              case Vg:
                q = kb;
                break;
              case "scroll":
              case "scrollend":
                q = R;
                break;
              case "wheel":
                q = Wb;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = qb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = Mg;
                break;
              case "toggle":
              case "beforetoggle":
                q = Ib;
            }
            var re = (t & 4) !== 0, rt = !re && (e === "scroll" || e === "scrollend"), Ce = re ? O !== null ? O + "Capture" : null : O;
            re = [];
            for (var b = v, S; b !== null; ) {
              var T = b;
              if (S = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || S === null || Ce === null || (T = Pn(b, Ce), T != null && re.push(
                Bl(
                  b,
                  T,
                  S
                )
              )), rt) break;
              b = b.return;
            }
            0 < re.length && (O = new q(
              O,
              I,
              null,
              a,
              U
            ), _.push({
              event: O,
              listeners: re
            }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (O = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", O && a !== s && (I = a.relatedTarget || a.fromElement) && (Wn(I) || I[yi]))
              break e;
            if ((q || O) && (O = U.window === U ? U : (O = U.ownerDocument) ? O.defaultView || O.parentWindow : window, q ? (I = a.relatedTarget || a.toElement, q = v, I = I ? Wn(I) : null, I !== null && (rt = Je(I), re = I.tag, I !== rt || re !== 5 && re !== 27 && re !== 6) && (I = null)) : (q = null, I = v), q !== I)) {
              if (re = Ee, T = "onMouseLeave", Ce = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (re = Mg, T = "onPointerLeave", Ce = "onPointerEnter", b = "pointer"), rt = q == null ? O : xu(q), S = I == null ? O : xu(I), O = new re(
                T,
                b + "leave",
                q,
                a,
                U
              ), O.target = rt, O.relatedTarget = S, T = null, Wn(U) === v && (re = new re(
                Ce,
                b + "enter",
                I,
                a,
                U
              ), re.target = S, re.relatedTarget = rt, T = re), rt = T, q && I)
                t: {
                  for (re = q, Ce = I, b = 0, S = re; S; S = ll(S))
                    b++;
                  for (S = 0, T = Ce; T; T = ll(T))
                    S++;
                  for (; 0 < b - S; )
                    re = ll(re), b--;
                  for (; 0 < S - b; )
                    Ce = ll(Ce), S--;
                  for (; b--; ) {
                    if (re === Ce || Ce !== null && re === Ce.alternate)
                      break t;
                    re = ll(re), Ce = ll(Ce);
                  }
                  re = null;
                }
              else re = null;
              q !== null && Hy(
                _,
                O,
                q,
                re,
                !1
              ), I !== null && rt !== null && Hy(
                _,
                rt,
                I,
                re,
                !0
              );
            }
          }
          e: {
            if (O = v ? xu(v) : window, q = O.nodeName && O.nodeName.toLowerCase(), q === "select" || q === "input" && O.type === "file")
              var Y = Sh;
            else if (m0(O))
              if (Bg)
                Y = fv;
              else {
                Y = Th;
                var J = cv;
              }
            else
              q = O.nodeName, !q || q.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? v && Ni(v.elementType) && (Y = Sh) : Y = ov;
            if (Y && (Y = Y(e, v))) {
              Is(
                _,
                Y,
                a,
                U
              );
              break e;
            }
            J && J(e, O, v), e === "focusout" && v && O.type === "number" && v.memoizedProps.value != null && Qs(O, "number", O.value);
          }
          switch (J = v ? xu(v) : window, e) {
            case "focusin":
              (m0(J) || J.contentEditable === "true") && (Nd = J, Dv = v, Em = null);
              break;
            case "focusout":
              Em = Dv = Nd = null;
              break;
            case "mousedown":
              Ov = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ov = !1, T0(
                _,
                a,
                U
              );
              break;
            case "selectionchange":
              if (lS) break;
            case "keydown":
            case "keyup":
              T0(
                _,
                a,
                U
              );
          }
          var ve;
          if (zv)
            e: {
              switch (e) {
                case "compositionstart":
                  var P = "onCompositionStart";
                  break e;
                case "compositionend":
                  P = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  P = "onCompositionUpdate";
                  break e;
              }
              P = void 0;
            }
          else
            Cd ? Cl(e, a) && (P = "onCompositionEnd") : e === "keydown" && a.keyCode === Ug && (P = "onCompositionStart");
          P && (xg && a.locale !== "ko" && (Cd || P !== "onCompositionStart" ? P === "onCompositionEnd" && Cd && (ve = eu()) : (X = U, M = "value" in X ? X.value : X.textContent, Cd = !0)), J = Wf(
            v,
            P
          ), 0 < J.length && (P = new Og(
            P,
            e,
            null,
            a,
            U
          ), _.push({
            event: P,
            listeners: J
          }), ve ? P.data = ve : (ve = Yu(a), ve !== null && (P.data = ve)))), (ve = eS ? Fs(e, a) : ff(e, a)) && (P = Wf(
            v,
            "onBeforeInput"
          ), 0 < P.length && (J = new Gb(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            U
          ), _.push({
            event: J,
            listeners: P
          }), J.data = ve)), yt(
            _,
            e,
            v,
            a,
            U
          );
        }
        Mn(_, t);
      });
    }
    function Bl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Wf(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Pn(e, a), o != null && i.unshift(
          Bl(e, o, f)
        ), o = Pn(e, t), o != null && i.push(
          Bl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function ll(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Hy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, p = h.alternate, v = h.stateNode;
        if (h = h.tag, p !== null && p === i) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (p = v, o ? (v = Pn(a, f), v != null && d.unshift(
          Bl(a, v, p)
        )) : o || (v = Pn(a, f), v != null && d.push(
          Bl(a, v, p)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Un(e, t) {
      Vc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || gm || (gm = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: _a,
        possibleRegistrationNames: pc
      };
      Ni(e) || typeof t.is == "string" || vh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function mt(e, t, a, i) {
      t !== a && (a = dl(a), dl(t) !== a && (i[e] = t));
    }
    function ni(e, t, a) {
      t.forEach(function(i) {
        a[Ny(i)] = i === "style" ? fc(e) : e.getAttribute(i);
      });
    }
    function Ha(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function nd(e, t) {
      return e = e.namespaceURI === gs || e.namespaceURI === _o ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function dl(e) {
      return N(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ie(e)
      ), ee(e)), (typeof e == "string" ? e : "" + e).replace(OS, `
`).replace(MS, "");
    }
    function Cy(e, t) {
      return t = dl(t), dl(e) === t;
    }
    function hu() {
    }
    function Ve(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (cf(i, t, !1), t === "body" || t === "textarea" && i === "" || Ci(e, i)) : (typeof i == "number" || typeof i == "bigint") && (cf("" + i, t, !1), t !== "body" && Ci(e, "" + i));
          break;
        case "className":
          Po(e, "class", i);
          break;
        case "tabIndex":
          Po(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Po(e, a, i);
          break;
        case "style":
          of(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Po(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          k(i, a), i = Xc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || jp || (jp = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Xp || (Xp = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Vp ? t !== "button" || o.type == null || o.type === "submit" || Vp ? typeof i == "function" && (o.name == null || tb || (tb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || jp || (jp = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Xp || (Xp = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Vp = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Vp = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Ve(e, t, "name", o.name, o, null), Ve(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Ve(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Ve(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Ve(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Ve(e, t, "method", o.method, o, null), Ve(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          k(i, a), i = Xc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ha(a, i), e.onclick = hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ha(a, i), ze("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ha(a, i), ze("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          k(i, a), a = Xc("" + i), e.setAttributeNS(Bs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (k(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Qp[a] || (Qp[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (k(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (k(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (k(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          ze("beforetoggle", e), ze("toggle", e), Io(e, "popover", i);
          break;
        case "xlinkActuate":
          Va(
            e,
            Bs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Va(
            e,
            Bs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Va(
            e,
            Bs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Va(
            e,
            Bs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Va(
            e,
            Bs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Va(
            e,
            Bs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Va(
            e,
            yg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Va(
            e,
            yg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Va(
            e,
            yg,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Io(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          lb || i == null || typeof i != "object" || (lb = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Ks(a), Io(e, a, i)) : _a.hasOwnProperty(a) && i != null && typeof i != "function" && Ha(a, i);
      }
    }
    function oc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          of(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Ci(e, i) : (typeof i == "number" || typeof i == "bigint") && Ci(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ha(a, i), ze("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ha(a, i), ze("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ha(a, i), e.onclick = hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (_a.hasOwnProperty(a))
            i != null && typeof i != "function" && Ha(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Pl] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Io(e, a, i);
            }
      }
    }
    function Ot(e, t, a) {
      switch (Un(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ze("error", e), ze("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Ve(e, t, f, d, a, null);
                }
            }
          o && Ve(e, t, "srcSet", a.srcSet, a, null), i && Ve(e, t, "src", a.src, a, null);
          return;
        case "input":
          Cu("input", a), ze("invalid", e);
          var h = f = d = o = null, p = null, v = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var U = a[i];
              if (U != null)
                switch (i) {
                  case "name":
                    o = U;
                    break;
                  case "type":
                    d = U;
                    break;
                  case "checked":
                    p = U;
                    break;
                  case "defaultChecked":
                    v = U;
                    break;
                  case "value":
                    f = U;
                    break;
                  case "defaultValue":
                    h = U;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (U != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Ve(e, t, i, U, a, null);
                }
            }
          Nu(e, a), s0(
            e,
            f,
            h,
            p,
            v,
            d,
            o,
            !1
          ), Fn(e);
          return;
        case "select":
          Cu("select", a), ze("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Ve(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          af(e, a), t = f, a = d, e.multiple = !!i, t != null ? In(e, !!i, t, !1) : a != null && In(e, !!i, a, !0);
          return;
        case "textarea":
          Cu("textarea", a), ze("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Ve(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          un(e, a), dh(e, i, o, f), Fn(e);
          return;
        case "option":
          rh(e, a);
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  Ve(e, t, p, i, a, null);
              }
          return;
        case "dialog":
          ze("beforetoggle", e), ze("toggle", e), ze("cancel", e), ze("close", e);
          break;
        case "iframe":
        case "object":
          ze("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < Jm.length; i++)
            ze(Jm[i], e);
          break;
        case "image":
          ze("error", e), ze("load", e);
          break;
        case "details":
          ze("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ze("error", e), ze("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Ve(e, t, v, i, a, null);
              }
          return;
        default:
          if (Ni(t)) {
            for (U in a)
              a.hasOwnProperty(U) && (i = a[U], i !== void 0 && oc(
                e,
                t,
                U,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Ve(e, t, h, i, a, null));
    }
    function J0(e, t, a, i) {
      switch (Un(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, p = null, v = null, U = null;
          for (q in a) {
            var _ = a[q];
            if (a.hasOwnProperty(q) && _ != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = _;
                default:
                  i.hasOwnProperty(q) || Ve(
                    e,
                    t,
                    q,
                    null,
                    i,
                    _
                  );
              }
          }
          for (var O in i) {
            var q = i[O];
            if (_ = a[O], i.hasOwnProperty(O) && (q != null || _ != null))
              switch (O) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  v = q;
                  break;
                case "defaultChecked":
                  U = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== _ && Ve(
                    e,
                    t,
                    O,
                    q,
                    i,
                    _
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || eb || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), eb = !0), !t || i || P1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), P1 = !0), Bu(
            e,
            d,
            h,
            p,
            v,
            U,
            f,
            o
          );
          return;
        case "select":
          q = d = h = O = null;
          for (f in a)
            if (p = a[f], a.hasOwnProperty(f) && p != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = p;
                default:
                  i.hasOwnProperty(f) || Ve(
                    e,
                    t,
                    f,
                    null,
                    i,
                    p
                  );
              }
          for (o in i)
            if (f = i[o], p = a[o], i.hasOwnProperty(o) && (f != null || p != null))
              switch (o) {
                case "value":
                  O = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== p && Ve(
                    e,
                    t,
                    o,
                    f,
                    i,
                    p
                  );
              }
          i = h, t = d, a = q, O != null ? In(e, !!t, O, !1) : !!a != !!t && (i != null ? In(e, !!t, i, !0) : In(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          q = O = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Ve(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  O = o;
                  break;
                case "defaultValue":
                  q = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Ve(e, t, d, o, i, f);
              }
          Ls(e, O, q);
          return;
        case "option":
          for (var I in a)
            if (O = a[I], a.hasOwnProperty(I) && O != null && !i.hasOwnProperty(I))
              switch (I) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  Ve(
                    e,
                    t,
                    I,
                    null,
                    i,
                    O
                  );
              }
          for (p in i)
            if (O = i[p], q = a[p], i.hasOwnProperty(p) && O !== q && (O != null || q != null))
              switch (p) {
                case "selected":
                  e.selected = O && typeof O != "function" && typeof O != "symbol";
                  break;
                default:
                  Ve(
                    e,
                    t,
                    p,
                    O,
                    i,
                    q
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var re in a)
            O = a[re], a.hasOwnProperty(re) && O != null && !i.hasOwnProperty(re) && Ve(
              e,
              t,
              re,
              null,
              i,
              O
            );
          for (v in i)
            if (O = i[v], q = a[v], i.hasOwnProperty(v) && O !== q && (O != null || q != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Ve(
                    e,
                    t,
                    v,
                    O,
                    i,
                    q
                  );
              }
          return;
        default:
          if (Ni(t)) {
            for (var rt in a)
              O = a[rt], a.hasOwnProperty(rt) && O !== void 0 && !i.hasOwnProperty(rt) && oc(
                e,
                t,
                rt,
                void 0,
                i,
                O
              );
            for (U in i)
              O = i[U], q = a[U], !i.hasOwnProperty(U) || O === q || O === void 0 && q === void 0 || oc(
                e,
                t,
                U,
                O,
                i,
                q
              );
            return;
          }
      }
      for (var Ce in a)
        O = a[Ce], a.hasOwnProperty(Ce) && O != null && !i.hasOwnProperty(Ce) && Ve(e, t, Ce, null, i, O);
      for (_ in i)
        O = i[_], q = a[_], !i.hasOwnProperty(_) || O === q || O == null && q == null || Ve(e, t, _, O, i, q);
    }
    function Ny(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function fc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function By(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ce(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || vs.has(f) ? (ce(d, f), i += o + f.replace(Eu, "-$1").toLowerCase().replace(Au, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Eu, "-$1").toLowerCase().replace(Au, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = dl(i), dl(t) !== i && (a.style = fc(e)));
      }
    }
    function _l(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (k(i, t), e === "" + i)
              return;
        }
      mt(t, e, i, f);
    }
    function _y(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      mt(t, e, i, f);
    }
    function qy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (k(i, a), e === "" + i)
              return;
        }
      mt(t, e, i, f);
    }
    function K0(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (k(i, t), e === "" + i))
              return;
        }
      mt(t, e, i, f);
    }
    function we(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (k(i, t), a = Xc("" + i), e === a)
              return;
        }
      mt(t, e, i, f);
    }
    function at(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ni(t)) {
        for (var p in a)
          if (a.hasOwnProperty(p)) {
            var v = a[p];
            if (v != null) {
              if (_a.hasOwnProperty(p))
                typeof v != "function" && Ha(p, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (p) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || mt(
                      "children",
                      e.textContent,
                      v,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = nd(e, v), mt(
                      p,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(p), By(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(p.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      p
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = i0(
                      e,
                      "class",
                      v
                    ), mt(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    i.context === Uc && t !== "svg" && t !== "math" ? f.delete(p.toLowerCase()) : f.delete(p), d = i0(
                      e,
                      p,
                      v
                    ), mt(
                      p,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (p = a[v], p != null)) {
            if (_a.hasOwnProperty(v))
              typeof p != "function" && Ha(v, p);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof p != "string" && typeof p != "number" || mt(
                    "children",
                    e.textContent,
                    p,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = nd(e, p), d !== p && (o[v] = { __html: d }));
                  continue;
                case "className":
                  _l(
                    e,
                    v,
                    "class",
                    p,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  _l(
                    e,
                    v,
                    "tabindex",
                    p,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), By(e, p, o);
                  continue;
                case "multiple":
                  f.delete(v), mt(
                    v,
                    e.multiple,
                    p,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), mt(
                    v,
                    e.muted,
                    p,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), mt(
                    v,
                    e.autofocus,
                    p,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), mt(
                      v,
                      d,
                      p,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(p !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  we(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof p == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === US) {
                    f.delete(v.toLowerCase()), mt(
                      v,
                      "function",
                      p,
                      o
                    );
                    continue;
                  }
                  we(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  we(
                    e,
                    v,
                    "xlink:href",
                    p,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  qy(
                    e,
                    v,
                    "contenteditable",
                    p,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  qy(
                    e,
                    v,
                    "spellcheck",
                    p,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  qy(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  _y(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var U = d = v, _ = o;
                    if (f.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (p === !1) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (p === !0 && h === "") break e;
                          break;
                        default:
                          if (k(p, d), h === "" + p)
                            break e;
                      }
                    mt(
                      d,
                      h,
                      p,
                      _
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, U = d = v, _ = o, f.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(p) || 1 > p) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(p) || 1 > p) && (k(p, d), h === "" + p))
                            break e;
                      }
                    mt(
                      d,
                      h,
                      p,
                      _
                    );
                  }
                  continue;
                case "rowSpan":
                  K0(
                    e,
                    v,
                    "rowspan",
                    p,
                    f,
                    o
                  );
                  continue;
                case "start":
                  K0(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  _l(
                    e,
                    v,
                    "x-height",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  _l(
                    e,
                    v,
                    "xlink:actuate",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  _l(
                    e,
                    v,
                    "xlink:arcrole",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  _l(
                    e,
                    v,
                    "xlink:role",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  _l(
                    e,
                    v,
                    "xlink:show",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  _l(
                    e,
                    v,
                    "xlink:title",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  _l(
                    e,
                    v,
                    "xlink:type",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  _l(
                    e,
                    v,
                    "xml:base",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  _l(
                    e,
                    v,
                    "xml:lang",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  _l(
                    e,
                    v,
                    "xml:space",
                    p,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  p !== "" || Qp[v] || (Qp[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), _y(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = Ks(v), d = !1, i.context === Uc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (U = v.toLowerCase(), U = bc.hasOwnProperty(
                      U
                    ) && bc[U] || null, U !== null && U !== v && (d = !0, f.delete(U)), f.delete(h));
                    e: if (U = e, _ = h, h = p, Di(_))
                      if (U.hasAttribute(_))
                        U = U.getAttribute(
                          _
                        ), k(
                          h,
                          _
                        ), h = U === "" + h ? h : U;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (U = _.toLowerCase().slice(0, 5), U !== "data-" && U !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || mt(
                      v,
                      h,
                      p,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ni(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function De(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Oe(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ke(e) {
      switch (e) {
        case _o:
          return uh;
        case gs:
          return Zp;
        default:
          return Uc;
      }
    }
    function $l(e, t) {
      if (e === Uc)
        switch (t) {
          case "svg":
            return uh;
          case "math":
            return Zp;
          default:
            return Uc;
        }
      return e === uh && t === "foreignObject" ? Uc : e;
    }
    function xn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === gg ? !1 : (gg = e, !0) : (gg = null, !1);
    }
    function Yy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function yu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Mt(e, t, a, i) {
      J0(e, t, a, i), e[Pl] = i;
    }
    function mu(e) {
      Ci(e, "");
    }
    function sc(e, t, a) {
      e.nodeValue = a;
    }
    function Hn(e) {
      return e === "head";
    }
    function Ca(e, t) {
      e.removeChild(t);
    }
    function mo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function po(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === wp) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & HS && So(d.documentElement), a & CS && So(d.body), a & NS)
                for (a = d.head, So(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, p = d.nodeName;
                  d[Ho] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), yc(t);
              return;
            }
            o--;
          } else
            a === Lp || a === Mc || a === Km ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      yc(t);
    }
    function Wl(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Gy(e) {
      e.nodeValue = "";
    }
    function Vy(e, t) {
      t = t[BS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function ud(e, t) {
      e.nodeValue = t;
    }
    function vo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            vo(a), Bc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function ui(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ho])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          k(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = yl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function hl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = yl(e.nextSibling), e === null)) return null;
      return e;
    }
    function Cn(e) {
      return e.data === Km || e.data === Mc && e.ownerDocument.readyState === nb;
    }
    function go(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Mc || a.readyState === nb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function yl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Lp || t === Km || t === Mc || t === mg || t === ab)
            break;
          if (t === wp) return null;
        }
      }
      return e;
    }
    function id(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Ny(f.name)] = f.name.toLowerCase() === "style" ? fc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function cd(e, t, a) {
      return a === null || a[xS] !== !0 ? (e.nodeValue === t ? e = null : (t = dl(t), e = dl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Xy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === wp) {
            if (t === 0)
              return yl(e.nextSibling);
            t--;
          } else
            a !== Lp && a !== Km && a !== Mc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function bo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Lp || a === Km || a === Mc) {
            if (t === 0) return e;
            t--;
          } else a === wp && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function jy(e) {
      yc(e);
    }
    function sa(e) {
      yc(e);
    }
    function Qy(e, t, a, i, o) {
      switch (o && Js(e, i.ancestorInfo), t = Oe(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function ra(e, t, a, i) {
      if (!a[yi] && aa(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Ot(a, e, t), a[Dl] = i, a[Pl] = t;
    }
    function So(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Bc(e);
    }
    function Ff(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function k0(e, t, a) {
      var i = ih;
      if (i && typeof t == "string" && t) {
        var o = na(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), sb.has(o) || (sb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Ot(t, "link", e), Ft(t), i.head.appendChild(t)));
      }
    }
    function pu(e, t, a, i) {
      var o = (o = Bn.current) ? Ff(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = ii(a.href), t = nn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = ii(a.href);
            var f = nn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: qs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Nn(e)
            )) && !f._p && (d.instance = f, d.state.loading = km | Kn), !kn.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              kn.set(e, h), f || $0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + rc(t) + `
  + ` + rc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + rc(t) + `
  + ` + rc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = dc(a), t = nn(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function rc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : bu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : bu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : bu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function ii(e) {
      return 'href="' + na(e) + '"';
    }
    function Nn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ly(e) {
      return Se({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function $0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = km : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= km;
      }), t.addEventListener("error", function() {
        return i.loading |= ob;
      }), Ot(t, "link", a), Ft(t), e.head.appendChild(t));
    }
    function dc(e) {
      return '[src="' + na(e) + '"]';
    }
    function hc(e) {
      return "script[async]" + e;
    }
    function od(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + na(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Ft(i), i;
            var o = Se({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Ft(i), Ot(i, "style", o), fd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = ii(a.href);
            var f = e.querySelector(
              Nn(o)
            );
            if (f)
              return t.state.loading |= Kn, t.instance = f, Ft(f), f;
            i = Ly(a), (o = kn.get(o)) && wy(i, o), f = (e.ownerDocument || e).createElement("link"), Ft(f);
            var d = f;
            return d._p = new Promise(function(h, p) {
              d.onload = h, d.onerror = p;
            }), Ot(f, "link", i), t.state.loading |= Kn, fd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = dc(a.src), (o = e.querySelector(
              hc(f)
            )) ? (t.instance = o, Ft(o), o) : (i = a, (o = kn.get(f)) && (i = Se({}, a), Zy(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Ft(o), Ot(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Kn) === qs && (i = t.instance, t.state.loading |= Kn, fd(i, a.precedence, e));
      return t.instance;
    }
    function fd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function wy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Zy(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Jy(e, t, a) {
      if (Jp === null) {
        var i = /* @__PURE__ */ new Map(), o = Jp = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Jp, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ho] || f[Dl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== _o) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Ky(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function To(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === uh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = De(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function If(e) {
      return !(e.type === "stylesheet" && (e.state.loading & fb) === qs);
    }
    function W0() {
    }
    function F0(e, t, a) {
      if ($m === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = $m;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Kn) === qs) {
        if (t.instance === null) {
          var o = ii(a.href), f = e.querySelector(
            Nn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Pf.bind(i), e.then(i, i)), t.state.loading |= Kn, t.instance = f, Ft(f);
            return;
          }
          f = e.ownerDocument || e, a = Ly(a), (o = kn.get(o)) && wy(a, o), f = f.createElement("link"), Ft(f);
          var d = f;
          d._p = new Promise(function(h, p) {
            d.onload = h, d.onerror = p;
          }), Ot(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & fb) === qs && (i.count++, t = Pf.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function I0() {
      if ($m === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = $m;
      return e.stylesheets && e.count === 0 && sd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && sd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function Pf() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          sd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function sd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Kp = /* @__PURE__ */ new Map(), t.forEach(P0, e), Kp = null, Pf.call(e));
    }
    function P0(e, t) {
      if (!(t.state.loading & Kn)) {
        var a = Kp.get(e);
        if (a) var i = a.get(Sg);
        else {
          a = /* @__PURE__ */ new Map(), Kp.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Sg, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Sg, o), a.set(d, o), this.count++, i = Pf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Kn;
      }
    }
    function rd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = _s, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fh(0), this.hiddenUpdates = fh(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function ky(e, t, a, i, o, f, d, h, p, v, U, _) {
      return e = new rd(
        e,
        t,
        a,
        d,
        h,
        p,
        v,
        _
      ), t = iS, f === !0 && (t |= ta | Ru), xt && (t |= Yl), f = de(3, null, null, t), e.current = f, f.stateNode = e, t = vf(), Qi(t), e.pooledCache = t, Qi(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Ql(f), e;
    }
    function $y(e) {
      return e ? (e = qo, e) : qo;
    }
    function $e(e, t, a, i, o, f) {
      if (ml && typeof ml.onScheduleFiberRoot == "function")
        try {
          ml.onScheduleFiberRoot(di, i, a);
        } catch (d) {
          Il || (Il = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      $ !== null && typeof $.markRenderScheduled == "function" && $.markRenderScheduled(t), o = $y(o), i.context === null ? i.context = o : i.pendingContext = o, ea && ha !== null && !yb && (yb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        le(ha) || "Unknown"
      )), i = dn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Za(e, i, t), a !== null && (zt(a, e, t), Zu(a, e, t));
    }
    function dd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Wy(e, t) {
      dd(e, t), (e = e.alternate) && dd(e, t);
    }
    function Fy(e) {
      if (e.tag === 13) {
        var t = jl(e, 67108864);
        t !== null && zt(t, e, 67108864), Wy(e, 67108864);
      }
    }
    function yv() {
      return ha;
    }
    function mv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = tv(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function pv(e, t, a, i) {
      var o = H.T;
      H.T = null;
      var f = se.p;
      try {
        se.p = pl, ci(e, t, a, i);
      } finally {
        se.p = f, H.T = o;
      }
    }
    function hd(e, t, a, i) {
      var o = H.T;
      H.T = null;
      var f = se.p;
      try {
        se.p = en, ci(e, t, a, i);
      } finally {
        se.p = f, H.T = o;
      }
    }
    function ci(e, t, a, i) {
      if ($p) {
        var o = es(i);
        if (o === null)
          Nl(
            e,
            t,
            i,
            Wp,
            a
          ), oi(e, i);
        else if (ts(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (oi(e, i), t & 4 && -1 < GS.indexOf(e)) {
          for (; o !== null; ) {
            var f = aa(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ri(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var p = 1 << 31 - zl(d);
                        h.entanglements[1] |= p, d &= ~p;
                      }
                      xa(f), (We & (va | Mu)) === tn && (Np = _n() + J1, cc(0));
                    }
                  }
                  break;
                case 13:
                  h = jl(f, 2), h !== null && zt(h, f, 2), uc(), Wy(f, 2);
              }
            if (f = es(i), f === null && Nl(
              e,
              t,
              i,
              Wp,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Nl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function es(e) {
      return e = Bi(e), Eo(e);
    }
    function Eo(e) {
      if (Wp = null, e = Wn(e), e !== null) {
        var t = Je(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Xt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Wp = e, null;
    }
    function yd(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return pl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return en;
        case "message":
          switch (ri()) {
            case bd:
              return pl;
            case ss:
              return en;
            case Mo:
            case Tv:
              return Tu;
            case rs:
              return Ad;
            default:
              return Tu;
          }
        default:
          return Tu;
      }
    }
    function oi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Jo = null;
          break;
        case "dragenter":
        case "dragleave":
          Ko = null;
          break;
        case "mouseover":
        case "mouseout":
          ko = null;
          break;
        case "pointerover":
        case "pointerout":
          Fm.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Im.delete(t.pointerId);
      }
    }
    function Fl(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = aa(t), t !== null && Fy(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ts(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Jo = Fl(
            Jo,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Ko = Fl(
            Ko,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ko = Fl(
            ko,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Fm.set(
            f,
            Fl(
              Fm.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Im.set(
            f,
            Fl(
              Im.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function ep(e) {
      var t = Wn(e.target);
      if (t !== null) {
        var a = Je(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Xt(a), t !== null) {
              e.blockedOn = t, av(e.priority, function() {
                if (a.tag === 13) {
                  var i = kl(a);
                  i = Ul(i);
                  var o = jl(
                    a,
                    i
                  );
                  o !== null && zt(o, a, i), Wy(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ls(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = es(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = aa(a), t !== null && Fy(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Iy(e, t, a) {
      ls(e) && a.delete(t);
    }
    function tp() {
      Tg = !1, Jo !== null && ls(Jo) && (Jo = null), Ko !== null && ls(Ko) && (Ko = null), ko !== null && ls(ko) && (ko = null), Fm.forEach(Iy), Im.forEach(Iy);
    }
    function as(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Tg || (Tg = !0, Ut.unstable_scheduleCallback(
        Ut.unstable_NormalPriority,
        tp
      )));
    }
    function lp(e) {
      Fp !== e && (Fp = e, Ut.unstable_scheduleCallback(
        Ut.unstable_NormalPriority,
        function() {
          Fp === e && (Fp = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Eo(i || a) === null)
                continue;
              break;
            }
            var f = aa(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), ki(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function yc(e) {
      function t(p) {
        return as(p, e);
      }
      Jo !== null && as(Jo, e), Ko !== null && as(Ko, e), ko !== null && as(ko, e), Fm.forEach(t), Im.forEach(t);
      for (var a = 0; a < $o.length; a++) {
        var i = $o[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < $o.length && (a = $o[0], a.blockedOn === null); )
        ep(a), a.blockedOn === null && $o.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Pl] || null;
          if (typeof f == "function")
            d || lp(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Pl] || null)
                h = d.formAction;
              else if (Eo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), lp(a);
          }
        }
    }
    function md(e) {
      this._internalRoot = e;
    }
    function ns(e) {
      this._internalRoot = e;
    }
    function ap(e) {
      e[yi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ut = Nb(), us = ev, vv = Dg, Se = Object.assign, is = Symbol.for("react.element"), fi = Symbol.for("react.transitional.element"), mc = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), Ao = Symbol.for("react.strict_mode"), Ro = Symbol.for("react.profiler"), Py = Symbol.for("react.provider"), pd = Symbol.for("react.consumer"), Na = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), zo = Symbol.for("react.suspense"), si = Symbol.for("react.suspense_list"), cs = Symbol.for("react.memo"), da = Symbol.for("react.lazy"), em = Symbol.for("react.activity"), np = Symbol.for("react.memo_cache_sentinel"), tm = Symbol.iterator, vd = Symbol.for("react.client.reference"), he = Array.isArray, H = us.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = vv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, gv = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), os = [], fs = [], Ba = -1, gu = ot(null), Do = ot(null), Bn = ot(null), Oo = ot(null), bu = Object.prototype.hasOwnProperty, gd = Ut.unstable_scheduleCallback, bv = Ut.unstable_cancelCallback, up = Ut.unstable_shouldYield, Sv = Ut.unstable_requestPaint, _n = Ut.unstable_now, ri = Ut.unstable_getCurrentPriorityLevel, bd = Ut.unstable_ImmediatePriority, ss = Ut.unstable_UserBlockingPriority, Mo = Ut.unstable_NormalPriority, Tv = Ut.unstable_LowPriority, rs = Ut.unstable_IdlePriority, Ev = Ut.log, Pa = Ut.unstable_setDisableYieldValue, di = null, ml = null, $ = null, Il = !1, xt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", zl = Math.clz32 ? Math.clz32 : ch, Sd = Math.log, Su = Math.LN2, Td = 256, Ed = 4194304, pl = 2, en = 8, Tu = 32, Ad = 268435456, hi = Math.random().toString(36).slice(2), Dl = "__reactFiber$" + hi, Pl = "__reactProps$" + hi, yi = "__reactContainer$" + hi, lm = "__reactEvents$" + hi, ip = "__reactListeners$" + hi, Uo = "__reactHandles$" + hi, xo = "__reactResources$" + hi, Ho = "__reactMarker$" + hi, cp = /* @__PURE__ */ new Set(), _a = {}, pc = {}, op = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Rd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), zd = {}, Dd = {}, mi = 0, am, nm, fp, um, Co, sp, rp;
    Vs.__reactDisabledLog = !0;
    var im, ds, No = !1, hs = new (typeof WeakMap == "function" ? WeakMap : Map)(), ha = null, ea = !1, Av = /[\n"\\]/g, cm = !1, om = !1, fm = !1, sm = !1, Od = !1, rm = !1, ys = ["value", "defaultValue"], dp = !1, hp = /["'&<>\n\t]|^\s|\s$/, dm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Md = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Ud = Md.concat(["button"]), hm = "dd dt li option optgroup p rp rt".split(" "), ym = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, Bo = {}, qn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Eu = /([A-Z])/g, Au = /^ms-/, ms = /^(?:webkit|moz|o)[A-Z]/, ps = /^-ms-/, pi = /-(.)/g, yp = /;\s*$/, vc = {}, gc = {}, mp = !1, mm = !1, vs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), gs = "http://www.w3.org/1998/Math/MathML", _o = "http://www.w3.org/2000/svg", xd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), bc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, pm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Yn = {}, vm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), gm = !1, ql = {}, bs = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, m = !1, g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = !1;
    if (g)
      try {
        var G = {};
        Object.defineProperty(G, "passive", {
          get: function() {
            D = !0;
          }
        }), window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
      } catch {
        D = !1;
      }
    var X = null, M = null, x = null, ne = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ue = fl(ne), Xe = Se({}, ne, { view: 0, detail: 0 }), R = fl(Xe), E, z, V, W = Se({}, Xe, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ws,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== V && (V && e.type === "mousemove" ? (E = e.screenX - V.screenX, z = e.screenY - V.screenY) : z = E = 0, V = e), E);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : z;
      }
    }), Ee = fl(W), ae = Se({}, W, { dataTransfer: 0 }), fe = fl(ae), al = Se({}, Xe, { relatedTarget: 0 }), _e = fl(al), vi = Se({}, ne, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rv = fl(vi), _b = Se({}, ne, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), qb = fl(_b), Yb = Se({}, ne, { data: 0 }), Og = fl(
      Yb
    ), Gb = Og, Vb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Xb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, jb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Qb = Se({}, Xe, {
      key: function(e) {
        if (e.key) {
          var t = Vb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = jc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ws,
      charCode: function(e) {
        return e.type === "keypress" ? jc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Lb = fl(Qb), wb = Se({}, W, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Mg = fl(wb), Zb = Se({}, Xe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ws
    }), Jb = fl(Zb), Kb = Se({}, ne, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), kb = fl(Kb), $b = Se({}, W, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Wb = fl($b), Fb = Se({}, ne, {
      newState: 0,
      oldState: 0
    }), Ib = fl(Fb), Pb = [9, 13, 27, 32], Ug = 229, zv = g && "CompositionEvent" in window, bm = null;
    g && "documentMode" in document && (bm = document.documentMode);
    var eS = g && "TextEvent" in window && !bm, xg = g && (!zv || bm && 8 < bm && 11 >= bm), Hg = 32, Cg = String.fromCharCode(Hg), Ng = !1, Cd = !1, tS = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Sm = null, Tm = null, Bg = !1;
    g && (Bg = bh("input") && (!document.documentMode || 9 < document.documentMode));
    var ya = typeof Object.is == "function" ? Object.is : sv, lS = g && "documentMode" in document && 11 >= document.documentMode, Nd = null, Dv = null, Em = null, Ov = !1, Bd = {
      animationend: tu("Animation", "AnimationEnd"),
      animationiteration: tu("Animation", "AnimationIteration"),
      animationstart: tu("Animation", "AnimationStart"),
      transitionrun: tu("Transition", "TransitionRun"),
      transitionstart: tu("Transition", "TransitionStart"),
      transitioncancel: tu("Transition", "TransitionCancel"),
      transitionend: tu("Transition", "TransitionEnd")
    }, Mv = {}, _g = {};
    g && (_g = document.createElement("div").style, "AnimationEvent" in window || (delete Bd.animationend.animation, delete Bd.animationiteration.animation, delete Bd.animationstart.animation), "TransitionEvent" in window || delete Bd.transitionend.transition);
    var qg = Yi("animationend"), Yg = Yi("animationiteration"), Gg = Yi("animationstart"), aS = Yi("transitionrun"), nS = Yi("transitionstart"), uS = Yi("transitioncancel"), Vg = Yi("transitionend"), Xg = /* @__PURE__ */ new Map(), Uv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Uv.push("scrollEnd");
    var xv = /* @__PURE__ */ new WeakMap(), pp = 1, Sc = 2, Gn = [], _d = 0, Hv = 0, qo = {};
    Object.freeze(qo);
    var Vn = null, qd = null, pt = 0, iS = 1, Yl = 2, ta = 8, Ru = 16, jg = 64, Qg = !1;
    try {
      var Lg = Object.preventExtensions({});
    } catch {
      Qg = !0;
    }
    var Yd = [], Gd = 0, vp = null, gp = 0, Xn = [], jn = 0, Ss = null, Tc = 1, Ec = "", ma = null, qt = null, je = !1, Ac = !1, Qn = null, Ts = null, gi = !1, Cv = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), wg = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var cS = performance, Zg = function() {
        return cS.now();
      };
    else {
      var oS = Date;
      Zg = function() {
        return oS.now();
      };
    }
    var Nv = ot(null), Bv = ot(null), Jg = {}, bp = null, Vd = null, Xd = !1, fS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, sS = Ut.unstable_scheduleCallback, rS = Ut.unstable_NormalPriority, vl = {
      $$typeof: Na,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, jd = Ut.unstable_now, Kg = -0, Sp = -0, qa = -1.1, Es = -0, Tp = !1, Ep = !1, Am = null, _v = 0, As = 0, Qd = null, kg = H.S;
    H.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && D0(e, t), kg !== null && kg(e, t);
    };
    var Rs = ot(null), zu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Rm = [], zm = [], Dm = [], Om = [], Mm = [], Um = [], zs = /* @__PURE__ */ new Set();
    zu.recordUnsafeLifecycleWarnings = function(e, t) {
      zs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Rm.push(e), e.mode & ta && typeof t.UNSAFE_componentWillMount == "function" && zm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dm.push(e), e.mode & ta && typeof t.UNSAFE_componentWillReceiveProps == "function" && Om.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Mm.push(e), e.mode & ta && typeof t.UNSAFE_componentWillUpdate == "function" && Um.push(e));
    }, zu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Rm.length && (Rm.forEach(function(h) {
        e.add(
          le(h) || "Component"
        ), zs.add(h.type);
      }), Rm = []);
      var t = /* @__PURE__ */ new Set();
      0 < zm.length && (zm.forEach(function(h) {
        t.add(
          le(h) || "Component"
        ), zs.add(h.type);
      }), zm = []);
      var a = /* @__PURE__ */ new Set();
      0 < Dm.length && (Dm.forEach(function(h) {
        a.add(
          le(h) || "Component"
        ), zs.add(h.type);
      }), Dm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Om.length && (Om.forEach(
        function(h) {
          i.add(
            le(h) || "Component"
          ), zs.add(h.type);
        }
      ), Om = []);
      var o = /* @__PURE__ */ new Set();
      0 < Mm.length && (Mm.forEach(function(h) {
        o.add(
          le(h) || "Component"
        ), zs.add(h.type);
      }), Mm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Um.length && (Um.forEach(function(h) {
        f.add(
          le(h) || "Component"
        ), zs.add(h.type);
      }), Um = []), 0 < t.size) {
        var d = Ye(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Ye(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Ye(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Ye(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Ye(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Ye(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Ap = /* @__PURE__ */ new Map(), $g = /* @__PURE__ */ new Set();
    zu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ta && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !$g.has(e.type) && (i = Ap.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ap.set(a, i)), i.push(e));
    }, zu.flushLegacyContextWarning = function() {
      Ap.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(le(o) || "Component"), $g.add(o.type);
          });
          var i = Ye(a);
          F(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, zu.discardPendingWarnings = function() {
      Rm = [], zm = [], Dm = [], Om = [], Mm = [], Um = [], Ap = /* @__PURE__ */ new Map();
    };
    var xm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Wg = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Rp = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), qv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Hm = null, zp = !1, Ln = 0, wn = 1, pa = 2, Gl = 4, gl = 8, Fg = 0, Ig = 1, Pg = 2, Yv = 3, Yo = !1, e1 = !1, Gv = null, Vv = !1, Ld = ot(null), Dp = ot(0), wd, t1 = /* @__PURE__ */ new Set(), l1 = /* @__PURE__ */ new Set(), Xv = /* @__PURE__ */ new Set(), a1 = /* @__PURE__ */ new Set(), Go = 0, ye = null, ct = null, nl = null, Op = !1, Zd = !1, Ds = !1, Mp = 0, Cm = 0, Rc = null, dS = 0, hS = 25, B = null, Zn = null, zc = -1, Nm = !1, Up = {
      readContext: ft,
      use: yn,
      useCallback: bt,
      useContext: bt,
      useEffect: bt,
      useImperativeHandle: bt,
      useLayoutEffect: bt,
      useInsertionEffect: bt,
      useMemo: bt,
      useReducer: bt,
      useRef: bt,
      useState: bt,
      useDebugValue: bt,
      useDeferredValue: bt,
      useTransition: bt,
      useSyncExternalStore: bt,
      useId: bt,
      useHostTransitionStatus: bt,
      useFormState: bt,
      useActionState: bt,
      useOptimistic: bt,
      useMemoCache: bt,
      useCacheRefresh: bt
    }, jv = null, n1 = null, Qv = null, u1 = null, bi = null, Du = null, xp = null;
    jv = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return B = "useCallback", Te(), Aa(t), Df(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Te(), ft(e);
      },
      useEffect: function(e, t) {
        return B = "useEffect", Te(), Aa(t), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Te(), Aa(a), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        B = "useInsertionEffect", Te(), Aa(t), Oa(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Te(), Aa(t), rr(e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Te(), Aa(t);
        var a = H.H;
        H.H = bi;
        try {
          return hr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Te();
        var i = H.H;
        H.H = bi;
        try {
          return qe(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return B = "useRef", Te(), zf(e);
      },
      useState: function(e) {
        B = "useState", Te();
        var t = H.H;
        H.H = bi;
        try {
          return iu(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Te();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Te(), yr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Te(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Te(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Te(), bn();
      },
      useFormState: function(e, t) {
        return B = "useFormState", Te(), Kc(), Pc(e, t);
      },
      useActionState: function(e, t) {
        return B = "useActionState", Te(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return B = "useOptimistic", Te(), ka(e);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Nt,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Te(), $i();
      }
    }, n1 = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return B = "useCallback", Q(), Df(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Q(), ft(e);
      },
      useEffect: function(e, t) {
        return B = "useEffect", Q(), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Q(), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        B = "useInsertionEffect", Q(), Oa(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Q(), rr(e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Q();
        var a = H.H;
        H.H = bi;
        try {
          return hr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Q();
        var i = H.H;
        H.H = bi;
        try {
          return qe(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return B = "useRef", Q(), zf(e);
      },
      useState: function(e) {
        B = "useState", Q();
        var t = H.H;
        H.H = bi;
        try {
          return iu(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Q(), yr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Q(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Q(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Q(), bn();
      },
      useActionState: function(e, t) {
        return B = "useActionState", Q(), Pc(e, t);
      },
      useFormState: function(e, t) {
        return B = "useFormState", Q(), Kc(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return B = "useOptimistic", Q(), ka(e);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Nt,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), $i();
      }
    }, Qv = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return B = "useCallback", Q(), Ki(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", Q(), Zt(2048, gl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", Q(), Zt(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Q(), Zt(4, Gl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Q();
        var a = H.H;
        H.H = Du;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Q();
        var i = H.H;
        H.H = Du;
        try {
          return za(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", Q(), He().memoizedState;
      },
      useState: function() {
        B = "useState", Q();
        var e = H.H;
        H.H = Du;
        try {
          return za(Ge);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Q(), Of(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Q(), vr();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Q(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return B = "useFormState", Q(), Kc(), fr(e);
      },
      useActionState: function(e) {
        return B = "useActionState", Q(), fr(e);
      },
      useOptimistic: function(e, t) {
        return B = "useOptimistic", Q(), cu(e, t);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Nt,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), He().memoizedState;
      }
    }, u1 = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return B = "useCallback", Q(), Ki(e, t);
      },
      useContext: function(e) {
        return B = "useContext", Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", Q(), Zt(2048, gl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", Q(), Zt(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", Q(), Zt(4, Gl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", Q();
        var a = H.H;
        H.H = xp;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", Q();
        var i = H.H;
        H.H = xp;
        try {
          return Ji(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", Q(), He().memoizedState;
      },
      useState: function() {
        B = "useState", Q();
        var e = H.H;
        H.H = xp;
        try {
          return Ji(Ge);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", Q(), mr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", Q(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", Q(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return B = "useFormState", Q(), Kc(), eo(e);
      },
      useActionState: function(e) {
        return B = "useActionState", Q(), eo(e);
      },
      useOptimistic: function(e, t) {
        return B = "useOptimistic", Q(), or(e, t);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Nt,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), He().memoizedState;
      }
    }, bi = {
      readContext: function(e) {
        return gt(), ft(e);
      },
      use: function(e) {
        return K(), yn(e);
      },
      useCallback: function(e, t) {
        return B = "useCallback", K(), Te(), Df(e, t);
      },
      useContext: function(e) {
        return B = "useContext", K(), Te(), ft(e);
      },
      useEffect: function(e, t) {
        return B = "useEffect", K(), Te(), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", K(), Te(), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        B = "useInsertionEffect", K(), Te(), Oa(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", K(), Te(), rr(e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", K(), Te();
        var a = H.H;
        H.H = bi;
        try {
          return hr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", K(), Te();
        var i = H.H;
        H.H = bi;
        try {
          return qe(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function(e) {
        return B = "useRef", K(), Te(), zf(e);
      },
      useState: function(e) {
        B = "useState", K(), Te();
        var t = H.H;
        H.H = bi;
        try {
          return iu(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", K(), Te();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", K(), Te(), yr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", K(), Te(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", K(), Te(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", K(), Te(), bn();
      },
      useFormState: function(e, t) {
        return B = "useFormState", K(), Te(), Pc(e, t);
      },
      useActionState: function(e, t) {
        return B = "useActionState", K(), Te(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return B = "useOptimistic", K(), Te(), ka(e);
      },
      useMemoCache: function(e) {
        return K(), Nt(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Te(), $i();
      }
    }, Du = {
      readContext: function(e) {
        return gt(), ft(e);
      },
      use: function(e) {
        return K(), yn(e);
      },
      useCallback: function(e, t) {
        return B = "useCallback", K(), Q(), Ki(e, t);
      },
      useContext: function(e) {
        return B = "useContext", K(), Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", K(), Q(), Zt(2048, gl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", K(), Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", K(), Q(), Zt(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", K(), Q(), Zt(4, Gl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", K(), Q();
        var a = H.H;
        H.H = Du;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", K(), Q();
        var i = H.H;
        H.H = Du;
        try {
          return za(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", K(), Q(), He().memoizedState;
      },
      useState: function() {
        B = "useState", K(), Q();
        var e = H.H;
        H.H = Du;
        try {
          return za(Ge);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", K(), Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", K(), Q(), Of(e, t);
      },
      useTransition: function() {
        return B = "useTransition", K(), Q(), vr();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", K(), Q(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", K(), Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return B = "useFormState", K(), Q(), fr(e);
      },
      useActionState: function(e) {
        return B = "useActionState", K(), Q(), fr(e);
      },
      useOptimistic: function(e, t) {
        return B = "useOptimistic", K(), Q(), cu(e, t);
      },
      useMemoCache: function(e) {
        return K(), Nt(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), He().memoizedState;
      }
    }, xp = {
      readContext: function(e) {
        return gt(), ft(e);
      },
      use: function(e) {
        return K(), yn(e);
      },
      useCallback: function(e, t) {
        return B = "useCallback", K(), Q(), Ki(e, t);
      },
      useContext: function(e) {
        return B = "useContext", K(), Q(), ft(e);
      },
      useEffect: function(e, t) {
        B = "useEffect", K(), Q(), Zt(2048, gl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return B = "useImperativeHandle", K(), Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return B = "useInsertionEffect", K(), Q(), Zt(4, pa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return B = "useLayoutEffect", K(), Q(), Zt(4, Gl, e, t);
      },
      useMemo: function(e, t) {
        B = "useMemo", K(), Q();
        var a = H.H;
        H.H = Du;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        B = "useReducer", K(), Q();
        var i = H.H;
        H.H = Du;
        try {
          return Ji(e, t, a);
        } finally {
          H.H = i;
        }
      },
      useRef: function() {
        return B = "useRef", K(), Q(), He().memoizedState;
      },
      useState: function() {
        B = "useState", K(), Q();
        var e = H.H;
        H.H = Du;
        try {
          return Ji(Ge);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        B = "useDebugValue", K(), Q();
      },
      useDeferredValue: function(e, t) {
        return B = "useDeferredValue", K(), Q(), mr(e, t);
      },
      useTransition: function() {
        return B = "useTransition", K(), Q(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return B = "useSyncExternalStore", K(), Q(), Tf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return B = "useId", K(), Q(), He().memoizedState;
      },
      useFormState: function(e) {
        return B = "useFormState", K(), Q(), eo(e);
      },
      useActionState: function(e) {
        return B = "useActionState", K(), Q(), eo(e);
      },
      useOptimistic: function(e, t) {
        return B = "useOptimistic", K(), Q(), or(e, t);
      },
      useMemoCache: function(e) {
        return K(), Nt(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return B = "useCacheRefresh", Q(), He().memoizedState;
      }
    };
    var i1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = ea;
        ea = !0;
        try {
          return e(t, a);
        } finally {
          ea = i;
        }
      }
    }, Lv = i1.react_stack_bottom_frame.bind(i1), c1 = {
      react_stack_bottom_frame: function(e) {
        var t = ea;
        ea = !0;
        try {
          return e.render();
        } finally {
          ea = t;
        }
      }
    }, o1 = c1.react_stack_bottom_frame.bind(c1), f1 = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          oe(e, e.return, a);
        }
      }
    }, wv = f1.react_stack_bottom_frame.bind(
      f1
    ), s1 = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          oe(e, e.return, f);
        }
      }
    }, r1 = s1.react_stack_bottom_frame.bind(
      s1
    ), d1 = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, yS = d1.react_stack_bottom_frame.bind(
      d1
    ), h1 = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          oe(e, t, i);
        }
      }
    }, y1 = h1.react_stack_bottom_frame.bind(
      h1
    ), m1 = {
      react_stack_bottom_frame: function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, mS = m1.react_stack_bottom_frame.bind(m1), p1 = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          oe(e, t, i);
        }
      }
    }, pS = p1.react_stack_bottom_frame.bind(p1), v1 = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Vo = v1.react_stack_bottom_frame.bind(v1), Jd = null, Bm = 0, Ae = null, Zv, g1 = Zv = !1, b1 = {}, S1 = {}, T1 = {};
    Vt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = le(e), o = i || "null";
        if (!b1[o]) {
          b1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = le(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = le(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), F(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Kd = Hf(!0), E1 = Hf(!1), Jn = ot(null), Si = null, kd = 1, _m = 2, bl = ot(0), A1 = {}, R1 = /* @__PURE__ */ new Set(), z1 = /* @__PURE__ */ new Set(), D1 = /* @__PURE__ */ new Set(), O1 = /* @__PURE__ */ new Set(), M1 = /* @__PURE__ */ new Set(), U1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), C1 = /* @__PURE__ */ new Set(), N1 = /* @__PURE__ */ new Set();
    Object.freeze(A1);
    var Jv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = kl(e), o = dn(i);
        o.payload = t, a != null && (Fh(a), o.callback = a), t = Za(e, o, i), t !== null && (zt(t, e, i), Zu(t, e, i)), Ai(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = kl(e), o = dn(i);
        o.tag = Ig, o.payload = t, a != null && (Fh(a), o.callback = a), t = Za(e, o, i), t !== null && (zt(t, e, i), Zu(t, e, i)), Ai(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = kl(e), i = dn(a);
        i.tag = Pg, t != null && (Fh(t), i.callback = t), t = Za(e, i, a), t !== null && (zt(t, e, a), Zu(t, e, a)), $ !== null && typeof $.markForceUpdateScheduled == "function" && $.markForceUpdateScheduled(e, a);
      }
    }, Kv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, $d = null, kv = null, B1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ol = !1, _1 = {}, q1 = {}, Y1 = {}, G1 = {}, Wd = !1, V1 = {}, $v = {}, Wv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, X1 = !1, j1 = null;
    j1 = /* @__PURE__ */ new Set();
    var Dc = !1, kt = !1, Fv = !1, Q1 = typeof WeakSet == "function" ? WeakSet : Set, Ml = null, Fd = null, Id = null, ul = null, Ya = !1, Ou = null, qm = 8192, vS = {
      getCacheForType: function(e) {
        var t = ft(vl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return ha;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Ym = Symbol.for;
      Ym("selector.component"), Ym("selector.has_pseudo_class"), Ym("selector.role"), Ym("selector.test_id"), Ym("selector.text");
    }
    var gS = [], bS = typeof WeakMap == "function" ? WeakMap : Map, tn = 0, va = 2, Mu = 4, Oc = 0, Gm = 1, Pd = 2, Iv = 3, Os = 4, Hp = 6, L1 = 5, We = tn, st = null, Me = null, Ue = 0, Ga = 0, Vm = 1, Ms = 2, Xm = 3, w1 = 4, Pv = 5, eh = 6, jm = 7, eg = 8, Us = 9, Pe = Ga, ln = null, Xo = !1, th = !1, tg = !1, Ti = 0, Yt = Oc, jo = 0, Qo = 0, lg = 0, an = 0, xs = 0, Qm = null, ga = null, Cp = !1, ag = 0, Z1 = 300, Np = 1 / 0, J1 = 500, Lm = null, Lo = null, SS = 0, TS = 1, ES = 2, Hs = 0, K1 = 1, k1 = 2, $1 = 3, AS = 4, ng = 5, Vl = 0, wo = null, lh = null, Zo = 0, ug = 0, ig = null, W1 = null, RS = 50, wm = 0, cg = null, og = !1, Bp = !1, zS = 50, Cs = 0, Zm = null, ah = !1, _p = null, F1 = !1, I1 = /* @__PURE__ */ new Set(), DS = {}, qp = null, nh = null, fg = !1, sg = !1, Yp = !1, rg = !1, Ns = 0, dg = {};
    (function() {
      for (var e = 0; e < Uv.length; e++) {
        var t = Uv[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Xa(a, "on" + t);
      }
      Xa(qg, "onAnimationEnd"), Xa(Yg, "onAnimationIteration"), Xa(Gg, "onAnimationStart"), Xa("dblclick", "onDoubleClick"), Xa("focusin", "onFocus"), Xa("focusout", "onBlur"), Xa(aS, "onTransitionRun"), Xa(nS, "onTransitionStart"), Xa(uS, "onTransitionCancel"), Xa(Vg, "onTransitionEnd");
    })(), zi("onMouseEnter", ["mouseout", "mouseover"]), zi("onMouseLeave", ["mouseout", "mouseover"]), zi("onPointerEnter", ["pointerout", "pointerover"]), zi("onPointerLeave", ["pointerout", "pointerover"]), Hu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Hu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Hu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Hu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Hu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Hu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Jm = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jm)
    ), Gp = "_reactListening" + Math.random().toString(36).slice(2), P1 = !1, eb = !1, Vp = !1, tb = !1, Xp = !1, jp = !1, lb = !1, Qp = {}, OS = /\r\n?/g, MS = /\u0000|\uFFFD/g, Bs = "http://www.w3.org/1999/xlink", yg = "http://www.w3.org/XML/1998/namespace", US = "javascript:throw new Error('React form unexpectedly submitted.')", xS = "suppressHydrationWarning", Lp = "$", wp = "/$", Mc = "$?", Km = "$!", HS = 1, CS = 2, NS = 4, mg = "F!", ab = "F", nb = "complete", BS = "style", Uc = 0, uh = 1, Zp = 2, pg = null, vg = null, ub = { dialog: !0, webview: !0 }, gg = null, ib = typeof setTimeout == "function" ? setTimeout : void 0, _S = typeof clearTimeout == "function" ? clearTimeout : void 0, _s = -1, cb = typeof Promise == "function" ? Promise : void 0, qS = typeof queueMicrotask == "function" ? queueMicrotask : typeof cb < "u" ? function(e) {
      return cb.resolve(null).then(e).catch(Yy);
    } : ib, bg = null, qs = 0, km = 1, ob = 2, fb = 3, Kn = 4, kn = /* @__PURE__ */ new Map(), sb = /* @__PURE__ */ new Set(), xc = se.d;
    se.d = {
      f: function() {
        var e = xc.f(), t = uc();
        return e || t;
      },
      r: function(e) {
        var t = aa(e);
        t !== null && t.tag === 5 && t.type === "form" ? kh(t) : xc.r(e);
      },
      D: function(e) {
        xc.D(e), k0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        xc.C(e, t), k0("preconnect", e, t);
      },
      L: function(e, t, a) {
        xc.L(e, t, a);
        var i = ih;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + na(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + na(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + na(
            a.imageSizes
          ) + '"]')) : o += '[href="' + na(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = ii(e);
              break;
            case "script":
              f = dc(e);
          }
          kn.has(f) || (e = Se(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), kn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Nn(f)
          ) || t === "script" && i.querySelector(hc(f)) || (t = i.createElement("link"), Ot(t, "link", e), Ft(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        xc.m(e, t);
        var a = ih;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + na(i) + '"][href="' + na(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = dc(e);
          }
          if (!kn.has(f) && (e = Se({ rel: "modulepreload", href: e }, t), kn.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(hc(f)))
                  return;
            }
            i = a.createElement("link"), Ot(i, "link", e), Ft(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        xc.X(e, t);
        var a = ih;
        if (a && e) {
          var i = nn(a).hoistableScripts, o = dc(e), f = i.get(o);
          f || (f = a.querySelector(
            hc(o)
          ), f || (e = Se({ src: e, async: !0 }, t), (t = kn.get(o)) && Zy(e, t), f = a.createElement("script"), Ft(f), Ot(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        xc.S(e, t, a);
        var i = ih;
        if (i && e) {
          var o = nn(i).hoistableStyles, f = ii(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: qs, preload: null };
            if (d = i.querySelector(
              Nn(f)
            ))
              h.loading = km | Kn;
            else {
              e = Se(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = kn.get(f)) && wy(e, a);
              var p = d = i.createElement("link");
              Ft(p), Ot(p, "link", e), p._p = new Promise(function(v, U) {
                p.onload = v, p.onerror = U;
              }), p.addEventListener("load", function() {
                h.loading |= km;
              }), p.addEventListener("error", function() {
                h.loading |= ob;
              }), h.loading |= Kn, fd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        xc.M(e, t);
        var a = ih;
        if (a && e) {
          var i = nn(a).hoistableScripts, o = dc(e), f = i.get(o);
          f || (f = a.querySelector(
            hc(o)
          ), f || (e = Se({ src: e, async: !0, type: "module" }, t), (t = kn.get(o)) && Zy(e, t), f = a.createElement("script"), Ft(f), Ot(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var ih = typeof document > "u" ? null : document, Jp = null, $m = null, Sg = null, Kp = null, Ys = gv, Wm = {
      $$typeof: Na,
      Provider: null,
      Consumer: null,
      _currentValue: Ys,
      _currentValue2: Ys,
      _threadCount: 0
    }, rb = "%c%s%c ", db = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", hb = "", kp = " ", YS = Function.prototype.bind, yb = !1, mb = null, pb = null, vb = null, gb = null, bb = null, Sb = null, Tb = null, Eb = null, Ab = null;
    mb = function(e, t, a, i) {
      t = w(e, t), t !== null && (a = Ht(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Se({}, e.memoizedProps), a = jl(e, 2), a !== null && zt(a, e, 2));
    }, pb = function(e, t, a) {
      t = w(e, t), t !== null && (a = Ze(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Se({}, e.memoizedProps), a = jl(e, 2), a !== null && zt(a, e, 2));
    }, vb = function(e, t, a, i) {
      t = w(e, t), t !== null && (a = nt(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Se({}, e.memoizedProps), a = jl(e, 2), a !== null && zt(a, e, 2));
    }, gb = function(e, t, a) {
      e.pendingProps = Ht(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = jl(e, 2), t !== null && zt(t, e, 2);
    }, bb = function(e, t) {
      e.pendingProps = Ze(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = jl(e, 2), t !== null && zt(t, e, 2);
    }, Sb = function(e, t, a) {
      e.pendingProps = nt(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = jl(e, 2), t !== null && zt(t, e, 2);
    }, Tb = function(e) {
      var t = jl(e, 2);
      t !== null && zt(t, e, 2);
    }, Eb = function(e) {
      Gt = e;
    }, Ab = function(e) {
      et = e;
    };
    var $p = !0, Wp = null, Tg = !1, Jo = null, Ko = null, ko = null, Fm = /* @__PURE__ */ new Map(), Im = /* @__PURE__ */ new Map(), $o = [], GS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Fp = null;
    if (ns.prototype.render = md.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ke(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = kl(i);
      $e(i, o, a, t, null, null);
    }, ns.prototype.unmount = md.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (We & (va | Mu)) !== tn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), $e(e.current, 2, null, e, null, null), uc(), t[yi] = null;
      }
    }, ns.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = u0();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < $o.length && t !== 0 && t < $o[a].priority; a++) ;
        $o.splice(a, 0, e), a === 0 && ep(e);
      }
    }, function() {
      var e = us.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), se.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Wt(t), e = e !== null ? Sl(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        reconcilerVersion: "19.1.1"
      };
      return e.overrideHookState = mb, e.overrideHookStateDeletePath = pb, e.overrideHookStateRenamePath = vb, e.overrideProps = gb, e.overridePropsDeletePath = bb, e.overridePropsRenamePath = Sb, e.scheduleUpdate = Tb, e.setErrorHandler = Eb, e.setSuspenseHandler = Ab, e.scheduleRefresh = ut, e.scheduleRoot = tt, e.setRefreshHandler = Bt, e.getCurrentFiber = yv, e.getLaneLabelMap = mv, e.injectProfilingHooks = Uu, it(e);
    }() && g && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var Rb = window.location.protocol;
      /^(https?|file):$/.test(Rb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (Rb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    l0.createRoot = function(e, t) {
      if (!ke(e))
        throw Error("Target container is not a DOM element.");
      ap(e);
      var a = !1, i = "", o = Ih, f = C0, d = Er, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === fi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = ky(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[yi] = t.current, xy(e), new md(t);
    }, l0.hydrateRoot = function(e, t, a) {
      if (!ke(e))
        throw Error("Target container is not a DOM element.");
      ap(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Ih, d = C0, h = Er, p = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = ky(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        p,
        v
      ), t.context = $y(null), a = t.current, i = kl(a), i = Ul(i), o = dn(i), o.callback = null, Za(a, o, i), a = i, t.current.lanes = a, Cc(t, a), xa(t), e[yi] = t.current, xy(e), new ns(t);
    }, l0.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), l0;
}
function Bb() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bb);
    } catch (w) {
      console.error(w);
    }
  }
}
process.env.NODE_ENV === "production" ? (Bb(), zg.exports = JS()) : zg.exports = KS();
var kS = zg.exports;
const $S = /* @__PURE__ */ jS(kS), WS = ({
  options: w = [],
  multiple: Ht = !0,
  outlined: nt = !1,
  optionLabel: C = "",
  filtering: Ze = !0,
  usePortal: et = !1,
  placeholder: Gt = "Select..."
}) => {
  const [Vt, K] = Ip(!1), [gt, Ne] = Ip(""), [Ye, de] = Ip([]), [tt, ut] = Ip(null), Bt = zb(null), ke = zb(null), Je = () => {
    K((Z) => {
      const te = !Z;
      if (te && Bt.current) {
        const Qe = Bt.current.getBoundingClientRect();
        ut({
          top: Qe.bottom + window.scrollY,
          left: Qe.left + window.scrollX,
          width: Qe.width
        });
      } else
        ut(null);
      return te;
    });
  }, Xt = (Z) => typeof Z == "string" ? Z : Z && typeof Z == "object" ? C && Z[C] !== void 0 && Z[C] !== null ? Z[C] : Z.name || Z.label || JSON.stringify(Z) : "", dt = (Z) => {
    Ht ? Ye.includes(Z) ? de((te) => te.filter((Qe) => Qe !== Z)) : de((te) => [...te, Z]) : Ye.includes(Z) ? de([]) : (de([Z]), K(!1));
  }, Wt = (Z) => {
    de((te) => te.filter((Qe) => Qe !== Z));
  }, Sl = (Z) => Xt(Z).toLowerCase().includes(gt.toLowerCase()), ht = (Z) => {
    ke.current && !ke.current.contains(Z.target) && Bt.current && !Bt.current.contains(Z.target) && K(!1);
  };
  XS(() => (document.addEventListener("mousedown", ht), () => document.removeEventListener("mousedown", ht)), []);
  const Be = (Z, te) => {
    if (!te) return Z;
    const Qe = new RegExp(
      `(${te.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
      "gi"
    );
    return Z.split(Qe).map(
      (lt, A) => Qe.test(lt) ? /* @__PURE__ */ il.jsx(
        "mark",
        {
          style: { backgroundColor: "#95dfdd", color: "#333", borderRadius: 2 },
          children: lt
        },
        A
      ) : /* @__PURE__ */ il.jsx("span", { children: lt }, A)
    );
  }, Ct = Ze ? w.filter(Sl) : w, le = (Z, te) => typeof Z == "string" ? Z : Z && Z.id !== void 0 ? Z.id : Z && Z.name ? Z.name : `option-${te}`, ot = () => /* @__PURE__ */ il.jsxs(
    "div",
    {
      className: "dropdown-body",
      style: et && tt ? {
        position: "absolute",
        top: `${tt.top}px`,
        left: `${tt.left}px`,
        width: `${tt.width}px`,
        zIndex: 9999
      } : {},
      ref: ke,
      role: "listbox",
      "aria-multiselectable": Ht,
      tabIndex: -1,
      children: [
        Ze && /* @__PURE__ */ il.jsxs("div", { className: "search-container", children: [
          /* @__PURE__ */ il.jsx("span", { className: "search-icon", "aria-hidden": "true", children: "🔍" }),
          /* @__PURE__ */ il.jsx(
            "input",
            {
              type: "text",
              "aria-label": "Search options",
              value: gt,
              onChange: (Z) => Ne(Z.target.value),
              className: "search-input",
              autoFocus: !0,
              placeholder: "Search..."
            }
          )
        ] }),
        Ct.length === 0 ? /* @__PURE__ */ il.jsx("div", { className: "no-options", "aria-live": "polite", children: "No options found" }) : Ct.map((Z, te) => {
          const Qe = Xt(Z), jt = Ye.includes(Z);
          return /* @__PURE__ */ il.jsx(
            "div",
            {
              className: `option-item ${jt ? "selected" : ""}`,
              onClick: () => dt(Z),
              role: "option",
              "aria-selected": jt,
              tabIndex: 0,
              onKeyDown: (lt) => {
                (lt.key === "Enter" || lt.key === " ") && (lt.preventDefault(), dt(Z));
              },
              children: Be(Qe, Ze ? gt : "")
            },
            le(Z, te)
          );
        })
      ]
    }
  );
  return /* @__PURE__ */ il.jsxs(
    "div",
    {
      className: `multi-select-dropdown-wrapper ${nt ? "outlined" : ""}`,
      children: [
        C && /* @__PURE__ */ il.jsx(
          "label",
          {
            className: "dropdown-label",
            htmlFor: "multi-select-dropdown-header",
            children: C
          }
        ),
        /* @__PURE__ */ il.jsxs(
          "div",
          {
            className: `multi-select-dropdown ${nt ? "outlined" : ""}`,
            ref: ke,
            children: [
              /* @__PURE__ */ il.jsxs(
                "div",
                {
                  id: "multi-select-dropdown-header",
                  className: "dropdown-header",
                  onClick: Je,
                  ref: Bt,
                  role: "combobox",
                  "aria-expanded": Vt,
                  "aria-haspopup": "listbox",
                  tabIndex: 0,
                  onKeyDown: (Z) => {
                    (Z.key === "Enter" || Z.key === " ") && (Z.preventDefault(), Je()), Z.key === "Escape" && K(!1);
                  },
                  children: [
                    Ye.length === 0 ? /* @__PURE__ */ il.jsx("span", { className: "placeholder-text", style: { color: "#aaa" }, children: Gt }) : Ye.map((Z) => /* @__PURE__ */ il.jsxs(
                      "span",
                      {
                        className: "selected-tag",
                        title: Xt(Z),
                        children: [
                          Xt(Z),
                          Ht && /* @__PURE__ */ il.jsx(
                            "button",
                            {
                              "aria-label": `Remove ${Xt(Z)}`,
                              onClick: (te) => {
                                te.stopPropagation(), Wt(Z);
                              },
                              children: "×"
                            }
                          )
                        ]
                      },
                      Xt(Z)
                    )),
                    /* @__PURE__ */ il.jsx("span", { className: "dropdown-arrow", "aria-hidden": "true", children: Vt ? "▲" : "▼" })
                  ]
                }
              ),
              Vt && (et ? Dg.createPortal(ot(), document.body) : ot())
            ]
          }
        )
      ]
    }
  );
}, FS = [
  "Option 1",
  "Option with icon",
  "Long Long Option 3",
  "Long Long Long Option 4",
  "Long Long Long Long Option 5",
  "Long Long Long Long Long Option 6"
];
function IS() {
  return /* @__PURE__ */ il.jsx("div", { className: "App", children: /* @__PURE__ */ il.jsx(
    WS,
    {
      options: FS,
      multiple: !0,
      outlined: !1,
      optionLabel: "Label",
      filtering: !0,
      usePortal: !0
    }
  ) });
}
const PS = $S.createRoot(document.getElementById("root"));
PS.render(
  /* @__PURE__ */ il.jsx(ev.StrictMode, { children: /* @__PURE__ */ il.jsx(IS, {}) })
);
export {
  WS as MultiSelectDropdown
};
