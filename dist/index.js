(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(".multi-select-dropdown{margin-top:20px;position:relative;width:100%;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-size:14px;color:#333;flex-grow:1;min-width:0}.multi-select-dropdown-wrapper{display:flex;align-items:center;gap:12px;width:95%;margin:auto}.dropdown-header{border:1px solid #ddd;border-radius:4px;padding:8px 12px;display:flex;flex-wrap:wrap;align-items:center;min-height:24px;cursor:pointer;background-color:#fff;box-shadow:0 1px 3px #0000000d;transition:border-color .2s ease,box-shadow .2s ease}.dropdown-header:hover{border-color:#bbb}.dropdown-header:focus-within{border-color:#4a90e2;box-shadow:0 0 0 2px #4a90e233}.selected-tag{background-color:#f1f1f1;padding:4px 8px;margin:4px 4px 4px 0;border-radius:12px;display:inline-flex;align-items:center;font-size:13px;color:#555;white-space:nowrap}.selected-tag button{background:none;border:none;margin-left:6px;cursor:pointer;font-size:14px;color:#888;line-height:1}.selected-tag button:hover{color:#444}.dropdown-arrow{margin-left:auto;padding-left:10px;font-size:16px;color:#888}.dropdown-body{margin-top:6px;border:1px solid #ddd;border-top:none;position:absolute;width:100%;background-color:#fff;z-index:100;max-height:400px;overflow-y:auto;box-shadow:0 4px 6px #00000014;border-radius:0 0 4px 4px}.dropdown-label{margin-top:15px;width:auto}.search-container{position:relative}.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:#bbb;font-size:16px}.search-input{width:100%;padding:8px 8px 8px 36px;border:none;border-bottom:1px solid #eee;height:40px;font-size:14px;box-sizing:border-box;outline:none;border-radius:4px 4px 0 0;transition:border-bottom-color .2s ease}.search-input:focus{border-bottom-color:#aaa}.options-list{max-height:180px;overflow-y:auto}.option-item{padding:10px 12px;cursor:pointer;display:flex;align-items:center;transition:background-color .2s ease;font-size:14px;color:#333;width:100%;box-sizing:border-box}.option-item:hover{background-color:#f9f9f9}.option-item.selected{background-color:#eef5ff;font-weight:500}.no-options{padding:12px;color:#aaa;text-align:center;font-size:13px}.multi-select-dropdown.outlined .dropdown-header,.multi-select-dropdown.outlined .dropdown-body{border:1px solid #999;background-color:#fff;box-shadow:none}.multi-select-dropdown.outlined .dropdown-header{transition:border-color .2s ease}.multi-select-dropdown.outlined .dropdown-header:hover{border-color:#666}.multi-select-dropdown.outlined .dropdown-body{border-top:none}mark{background-color:#78866b;color:#fff;padding:0 2px;border-radius:2px}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import te, { useState as L, useRef as K, useEffect as ne } from "react";
import ae from "react-dom";
var q = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function se() {
  if (Q) return P;
  Q = 1;
  var f = Symbol.for("react.transitional.element"), v = Symbol.for("react.fragment");
  function R(d, c, i) {
    var T = null;
    if (i !== void 0 && (T = "" + i), c.key !== void 0 && (T = "" + c.key), "key" in c) {
      i = {};
      for (var E in c)
        E !== "key" && (i[E] = c[E]);
    } else i = c;
    return c = i.ref, {
      $$typeof: f,
      type: d,
      key: T,
      ref: c !== void 0 ? c : null,
      props: i
    };
  }
  return P.Fragment = v, P.jsx = R, P.jsxs = R, P;
}
var C = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function oe() {
  return ee || (ee = 1, process.env.NODE_ENV !== "production" && function() {
    function f(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === M ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case Y:
          return "Profiler";
        case j:
          return "StrictMode";
        case U:
          return "Suspense";
        case F:
          return "SuspenseList";
        case J:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case I:
            return (e.displayName || "Context") + ".Provider";
          case w:
            return (e._context.displayName || "Context") + ".Consumer";
          case W:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case z:
            return t = e.displayName || null, t !== null ? t : f(e.type) || "Memo";
          case N:
            t = e._payload, e = e._init;
            try {
              return f(e(t));
            } catch {
            }
        }
      return null;
    }
    function v(e) {
      return "" + e;
    }
    function R(e) {
      try {
        v(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), v(e);
      }
    }
    function d(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var t = f(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = r.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function T(e) {
      if (a.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, t) {
      function n() {
        p || (p = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function O() {
      var e = f(this.type);
      return A[e] || (A[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, t, n, s, x, b, V, G) {
      return n = b.ref, e = {
        $$typeof: k,
        type: e,
        key: t,
        props: b,
        _owner: x
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: O
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function $(e, t, n, s, x, b, V, G) {
      var o = t.children;
      if (o !== void 0)
        if (s)
          if (u(o)) {
            for (s = 0; s < o.length; s++)
              _(o[s]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(o);
      if (a.call(t, "key")) {
        o = f(e);
        var y = Object.keys(t).filter(function(re) {
          return re !== "key";
        });
        s = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", Z[o + s] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          o,
          y,
          o
        ), Z[o + s] = !0);
      }
      if (o = null, n !== void 0 && (R(n), o = "" + n), T(t) && (R(t.key), o = "" + t.key), "key" in t) {
        n = {};
        for (var X in t)
          X !== "key" && (n[X] = t[X]);
      } else n = t;
      return o && E(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        o,
        b,
        x,
        c(),
        n,
        V,
        G
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var m = te, k = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), I = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), J = Symbol.for("react.activity"), M = Symbol.for("react.client.reference"), r = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, a = Object.prototype.hasOwnProperty, u = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var p, A = {}, B = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), H = g(d(i)), Z = {};
    C.Fragment = h, C.jsx = function(e, t, n, s, x) {
      var b = 1e4 > r.recentlyCreatedOwnerStacks++;
      return $(
        e,
        t,
        n,
        !1,
        s,
        x,
        b ? Error("react-stack-top-frame") : B,
        b ? g(d(e)) : H
      );
    }, C.jsxs = function(e, t, n, s, x) {
      var b = 1e4 > r.recentlyCreatedOwnerStacks++;
      return $(
        e,
        t,
        n,
        !0,
        s,
        x,
        b ? Error("react-stack-top-frame") : B,
        b ? g(d(e)) : H
      );
    };
  }()), C;
}
process.env.NODE_ENV === "production" ? q.exports = se() : q.exports = oe();
var l = q.exports;
const ue = ({
  options: f = [],
  multiple: v = !0,
  outlined: R = !1,
  optionLabel: d = "",
  filtering: c = !0,
  usePortal: i = !1,
  placeholder: T = "Select..."
}) => {
  const [E, O] = L(!1), [S, $] = L(""), [_, m] = L([]), [k, D] = L(null), h = K(null), j = K(null), Y = () => {
    O((r) => {
      const a = !r;
      if (a && h.current) {
        const u = h.current.getBoundingClientRect();
        D({
          top: u.bottom + window.scrollY,
          left: u.left + window.scrollX,
          width: u.width
        });
      } else
        D(null);
      return a;
    });
  }, w = (r) => typeof r == "string" ? r : r && typeof r == "object" ? d && r[d] !== void 0 && r[d] !== null ? r[d] : r.name || r.label || JSON.stringify(r) : "", I = (r) => {
    v ? _.includes(r) ? m((a) => a.filter((u) => u !== r)) : m((a) => [...a, r]) : _.includes(r) ? m([]) : (m([r]), O(!1));
  }, W = (r) => {
    m((a) => a.filter((u) => u !== r));
  }, U = (r) => w(r).toLowerCase().includes(S.toLowerCase()), F = (r) => {
    j.current && !j.current.contains(r.target) && h.current && !h.current.contains(r.target) && O(!1);
  };
  ne(() => (document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F)), []);
  const z = (r, a) => {
    if (!a) return r;
    const u = new RegExp(
      `(${a.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`,
      "gi"
    );
    return r.split(u).map(
      (p, A) => u.test(p) ? /* @__PURE__ */ l.jsx(
        "mark",
        {
          style: { backgroundColor: "#95dfdd", color: "#333", borderRadius: 2 },
          children: p
        },
        A
      ) : /* @__PURE__ */ l.jsx("span", { children: p }, A)
    );
  }, N = c ? f.filter(U) : f, J = (r, a) => typeof r == "string" ? r : r && r.id !== void 0 ? r.id : r && r.name ? r.name : `option-${a}`, M = () => /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: "dropdown-body",
      style: i && k ? {
        position: "absolute",
        top: `${k.top}px`,
        left: `${k.left}px`,
        width: `${k.width}px`,
        zIndex: 9999
      } : {},
      ref: j,
      role: "listbox",
      "aria-multiselectable": v,
      tabIndex: -1,
      children: [
        c && /* @__PURE__ */ l.jsxs("div", { className: "search-container", children: [
          /* @__PURE__ */ l.jsx("span", { className: "search-icon", "aria-hidden": "true", children: "🔍" }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "text",
              "aria-label": "Search options",
              value: S,
              onChange: (r) => $(r.target.value),
              className: "search-input",
              autoFocus: !0,
              placeholder: "Search..."
            }
          )
        ] }),
        N.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "no-options", "aria-live": "polite", children: "No options found" }) : N.map((r, a) => {
          const u = w(r), g = _.includes(r);
          return /* @__PURE__ */ l.jsx(
            "div",
            {
              className: `option-item ${g ? "selected" : ""}`,
              onClick: () => I(r),
              role: "option",
              "aria-selected": g,
              tabIndex: 0,
              onKeyDown: (p) => {
                (p.key === "Enter" || p.key === " ") && (p.preventDefault(), I(r));
              },
              children: z(u, c ? S : "")
            },
            J(r, a)
          );
        })
      ]
    }
  );
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `multi-select-dropdown-wrapper ${R ? "outlined" : ""}`,
      children: [
        d && /* @__PURE__ */ l.jsx(
          "label",
          {
            className: "dropdown-label",
            htmlFor: "multi-select-dropdown-header",
            children: d
          }
        ),
        /* @__PURE__ */ l.jsxs(
          "div",
          {
            className: `multi-select-dropdown ${R ? "outlined" : ""}`,
            ref: j,
            children: [
              /* @__PURE__ */ l.jsxs(
                "div",
                {
                  id: "multi-select-dropdown-header",
                  className: "dropdown-header",
                  onClick: Y,
                  ref: h,
                  role: "combobox",
                  "aria-expanded": E,
                  "aria-haspopup": "listbox",
                  tabIndex: 0,
                  onKeyDown: (r) => {
                    (r.key === "Enter" || r.key === " ") && (r.preventDefault(), Y()), r.key === "Escape" && O(!1);
                  },
                  children: [
                    _.length === 0 ? /* @__PURE__ */ l.jsx("span", { className: "placeholder-text", style: { color: "#aaa" }, children: T }) : _.map((r) => /* @__PURE__ */ l.jsxs(
                      "span",
                      {
                        className: "selected-tag",
                        title: w(r),
                        children: [
                          w(r),
                          v && /* @__PURE__ */ l.jsx(
                            "button",
                            {
                              "aria-label": `Remove ${w(r)}`,
                              onClick: (a) => {
                                a.stopPropagation(), W(r);
                              },
                              children: "×"
                            }
                          )
                        ]
                      },
                      w(r)
                    )),
                    /* @__PURE__ */ l.jsx("span", { className: "dropdown-arrow", "aria-hidden": "true", children: E ? "▲" : "▼" })
                  ]
                }
              ),
              E && (i ? ae.createPortal(M(), document.body) : M())
            ]
          }
        )
      ]
    }
  );
};
export {
  ue as MultiSelectDropdown
};
