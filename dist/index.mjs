import './index.css';var Oc = Object.defineProperty;
var Cc = (n, e, t) => e in n ? Oc(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var $ = (n, e, t) => Cc(n, typeof e != "symbol" ? e + "" : e, t);
import Rc, { forwardRef as Lc, useRef as rr, useImperativeHandle as qc, useEffect as Nn, useState as Oe, useCallback as Ic, useMemo as $r, useContext as kc, createContext as jc } from "react";
import { User as Bc, X as Pc, Paperclip as Mc, FileText as Dc, Envelope as Uc } from "@phosphor-icons/react";
var kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Fr = { exports: {} }, Wn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _o;
function $c() {
  if (_o) return Wn;
  _o = 1;
  var n = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var a in s)
        a !== "key" && (i[a] = s[a]);
    } else i = s;
    return s = i.ref, {
      $$typeof: n,
      type: r,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Wn.Fragment = e, Wn.jsx = t, Wn.jsxs = t, Wn;
}
var Zn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function Fc() {
  return Oo || (Oo = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === g ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case w:
          return "Fragment";
        case R:
          return "Profiler";
        case A:
          return "StrictMode";
        case z:
          return "Suspense";
        case K:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case v:
            return "Portal";
          case M:
            return x.displayName || "Context";
          case q:
            return (x._context.displayName || "Context") + ".Consumer";
          case _:
            var j = x.render;
            return x = x.displayName, x || (x = j.displayName || j.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case re:
            return j = x.displayName || null, j !== null ? j : n(x.type) || "Memo";
          case le:
            j = x._payload, x = x._init;
            try {
              return n(x(j));
            } catch {
            }
        }
      return null;
    }
    function e(x) {
      return "" + x;
    }
    function t(x) {
      try {
        e(x);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var H = j.error, V = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return H.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), e(x);
      }
    }
    function r(x) {
      if (x === w) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === le)
        return "<...>";
      try {
        var j = n(x);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var x = L.A;
      return x === null ? null : x.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(x) {
      if (E.call(x, "key")) {
        var j = Object.getOwnPropertyDescriptor(x, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function a(x, j) {
      function H() {
        T || (T = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var x = n(this.type);
      return P[x] || (P[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function u(x, j, H, V, I, ce) {
      var ee = H.ref;
      return x = {
        $$typeof: p,
        type: x,
        key: j,
        props: H,
        _owner: V
      }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function f(x, j, H, V, I, ce) {
      var ee = j.children;
      if (ee !== void 0)
        if (V)
          if (B(ee)) {
            for (V = 0; V < ee.length; V++)
              m(ee[V]);
            Object.freeze && Object.freeze(ee);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(ee);
      if (E.call(j, "key")) {
        ee = n(x);
        var Q = Object.keys(j).filter(function(J) {
          return J !== "key";
        });
        V = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", D[ee + V] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          ee,
          Q,
          ee
        ), D[ee + V] = !0);
      }
      if (ee = null, H !== void 0 && (t(H), ee = "" + H), o(j) && (t(j.key), ee = "" + j.key), "key" in j) {
        H = {};
        for (var te in j)
          te !== "key" && (H[te] = j[te]);
      } else H = j;
      return ee && a(
        H,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), u(
        x,
        ee,
        H,
        s(),
        I,
        ce
      );
    }
    function m(x) {
      d(x) ? x._store && (x._store.validated = 1) : typeof x == "object" && x !== null && x.$$typeof === le && (x._payload.status === "fulfilled" ? d(x._payload.value) && x._payload.value._store && (x._payload.value._store.validated = 1) : x._store && (x._store.validated = 1));
    }
    function d(x) {
      return typeof x == "object" && x !== null && x.$$typeof === p;
    }
    var y = Rc, p = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), M = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), g = Symbol.for("react.client.reference"), L = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = Object.prototype.hasOwnProperty, B = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var T, P = {}, U = y.react_stack_bottom_frame.bind(
      y,
      i
    )(), F = k(r(i)), D = {};
    Zn.Fragment = w, Zn.jsx = function(x, j, H) {
      var V = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        x,
        j,
        H,
        !1,
        V ? Error("react-stack-top-frame") : U,
        V ? k(r(x)) : F
      );
    }, Zn.jsxs = function(x, j, H) {
      var V = 1e4 > L.recentlyCreatedOwnerStacks++;
      return f(
        x,
        j,
        H,
        !0,
        V ? Error("react-stack-top-frame") : U,
        V ? k(r(x)) : F
      );
    };
  })()), Zn;
}
var Co;
function Hc() {
  return Co || (Co = 1, process.env.NODE_ENV === "production" ? Fr.exports = $c() : Fr.exports = Fc()), Fr.exports;
}
var O = Hc();
const zc = (n) => /* @__PURE__ */ O.jsx(Bc, { ...n }), Qn = (n) => /* @__PURE__ */ O.jsx(Pc, { ...n }), Kc = (n) => /* @__PURE__ */ O.jsx(Mc, { ...n }), Vc = (n) => /* @__PURE__ */ O.jsx(Dc, { ...n }), Gc = (n) => /* @__PURE__ */ O.jsx(Uc, { ...n }), Yl = Lc(({ onSelect: n, multiple: e = !0, accept: t, maxFileSize: r, className: s = "" }, i) => {
  const o = rr(null);
  qc(i, () => ({
    click: () => {
      var c;
      (c = o.current) == null || c.click();
    }
  }));
  const a = (c) => {
    const u = c.target.files;
    if (u && n) {
      const f = Array.from(u);
      if (r) {
        const m = f.filter((d) => d.size <= r);
        n(m);
      } else
        n(f);
    }
    o.current && (o.current.value = "");
  };
  return /* @__PURE__ */ O.jsx(
    "input",
    {
      ref: o,
      type: "file",
      multiple: e,
      accept: t,
      onChange: a,
      className: s,
      style: { display: "none" }
    }
  );
});
Yl.displayName = "FileUpload";
const Wc = () => {
  const n = (e, t = "14px") => ({
    width: e,
    height: t,
    backgroundColor: "#e5e7eb",
    borderRadius: "4px",
    animation: "email-skeleton-pulse 1.5s ease-in-out infinite"
  });
  return /* @__PURE__ */ O.jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }, children: Array.from({ length: 6 }).map((e, t) => /* @__PURE__ */ O.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        backgroundColor: "#fff"
      },
      children: [
        /* @__PURE__ */ O.jsx("div", { style: { ...n("60%"), marginBottom: "11px" } }),
        /* @__PURE__ */ O.jsx("div", { style: { borderTop: "1px solid #e5e7eb", width: "100%", marginBottom: "16px" } }),
        /* @__PURE__ */ O.jsx("div", { style: { ...n("100%"), marginBottom: "8px" } }),
        /* @__PURE__ */ O.jsx("div", { style: { ...n("90%"), marginBottom: "8px" } }),
        /* @__PURE__ */ O.jsx("div", { style: n("70%") })
      ]
    },
    t
  )) });
}, Zc = ({ templates: n, onSelect: e, isLoading: t = !1 }) => t ? /* @__PURE__ */ O.jsx("section", { className: "ecw-template-section", children: /* @__PURE__ */ O.jsx(Wc, {}) }) : n.length === 0 ? /* @__PURE__ */ O.jsx("section", { className: "ecw-template-section ecw-template-empty", children: /* @__PURE__ */ O.jsx("p", { children: "No templates available" }) }) : /* @__PURE__ */ O.jsx("section", { className: "ecw-template-section", children: /* @__PURE__ */ O.jsx("div", { className: "ecw-template-grid", children: n.map((r) => /* @__PURE__ */ O.jsxs(
  "button",
  {
    type: "button",
    onClick: () => e(r.body),
    className: "ecw-template-card",
    children: [
      /* @__PURE__ */ O.jsx("h3", { className: "ecw-template-card-title", title: r.name, children: r.name }),
      /* @__PURE__ */ O.jsx("div", { className: "ecw-template-card-divider", "aria-hidden": !0 }),
      /* @__PURE__ */ O.jsx(
        "div",
        {
          className: "ecw-template-card-body",
          dangerouslySetInnerHTML: { __html: r.body }
        }
      )
    ]
  },
  r.id
)) }) }), Qi = ({
  open: n,
  onClose: e,
  header: t,
  children: r,
  width: s = "600px",
  height: i,
  className: o = ""
}) => (Nn(() => {
  const a = (c) => {
    c.key === "Escape" && e();
  };
  return n ? (document.body.style.overflow = "hidden", window.addEventListener("keydown", a)) : (document.body.style.overflow = "unset", window.removeEventListener("keydown", a)), () => {
    document.body.style.overflow = "unset", window.removeEventListener("keydown", a);
  };
}, [n, e]), n ? /* @__PURE__ */ O.jsx("div", { className: `ecw-modal-overlay ${o}`, onClick: e, children: /* @__PURE__ */ O.jsxs(
  "div",
  {
    className: "ecw-modal-container",
    style: { maxWidth: s, height: i },
    onClick: (a) => a.stopPropagation(),
    children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-modal-header", children: [
        /* @__PURE__ */ O.jsx("div", { className: "ecw-modal-title", children: t }),
        /* @__PURE__ */ O.jsx("button", { className: "ecw-modal-close", onClick: e, children: /* @__PURE__ */ O.jsx(Qn, { size: 20 }) })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: "ecw-modal-body", children: r })
    ]
  }
) }) : null);
var Xl = typeof global == "object" && global && global.Object === Object && global, Jc = typeof self == "object" && self && self.Object === Object && self, gt = Xl || Jc || Function("return this")(), Mt = gt.Symbol, Ql = Object.prototype, Yc = Ql.hasOwnProperty, Xc = Ql.toString, Jn = Mt ? Mt.toStringTag : void 0;
function Qc(n) {
  var e = Yc.call(n, Jn), t = n[Jn];
  try {
    n[Jn] = void 0;
    var r = !0;
  } catch {
  }
  var s = Xc.call(n);
  return r && (e ? n[Jn] = t : delete n[Jn]), s;
}
var eu = Object.prototype, tu = eu.toString;
function nu(n) {
  return tu.call(n);
}
var ru = "[object Null]", su = "[object Undefined]", Ro = Mt ? Mt.toStringTag : void 0;
function In(n) {
  return n == null ? n === void 0 ? su : ru : Ro && Ro in Object(n) ? Qc(n) : nu(n);
}
function Tt(n) {
  return n != null && typeof n == "object";
}
var Yt = Array.isArray;
function Dt(n) {
  var e = typeof n;
  return n != null && (e == "object" || e == "function");
}
function ea(n) {
  return n;
}
var iu = "[object AsyncFunction]", ou = "[object Function]", lu = "[object GeneratorFunction]", au = "[object Proxy]";
function eo(n) {
  if (!Dt(n))
    return !1;
  var e = In(n);
  return e == ou || e == lu || e == iu || e == au;
}
var ai = gt["__core-js_shared__"], Lo = (function() {
  var n = /[^.]+$/.exec(ai && ai.keys && ai.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
})();
function cu(n) {
  return !!Lo && Lo in n;
}
var uu = Function.prototype, hu = uu.toString;
function tn(n) {
  if (n != null) {
    try {
      return hu.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var fu = /[\\^$.*+?()[\]{}|]/g, du = /^\[object .+?Constructor\]$/, pu = Function.prototype, mu = Object.prototype, gu = pu.toString, bu = mu.hasOwnProperty, yu = RegExp(
  "^" + gu.call(bu).replace(fu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vu(n) {
  if (!Dt(n) || cu(n))
    return !1;
  var e = eo(n) ? yu : du;
  return e.test(tn(n));
}
function wu(n, e) {
  return n == null ? void 0 : n[e];
}
function nn(n, e) {
  var t = wu(n, e);
  return vu(t) ? t : void 0;
}
var Si = nn(gt, "WeakMap"), qo = Object.create, Eu = /* @__PURE__ */ (function() {
  function n() {
  }
  return function(e) {
    if (!Dt(e))
      return {};
    if (qo)
      return qo(e);
    n.prototype = e;
    var t = new n();
    return n.prototype = void 0, t;
  };
})();
function xu(n, e, t) {
  switch (t.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, t[0]);
    case 2:
      return n.call(e, t[0], t[1]);
    case 3:
      return n.call(e, t[0], t[1], t[2]);
  }
  return n.apply(e, t);
}
function Nu(n, e) {
  var t = -1, r = n.length;
  for (e || (e = Array(r)); ++t < r; )
    e[t] = n[t];
  return e;
}
var Au = 800, Tu = 16, Su = Date.now;
function _u(n) {
  var e = 0, t = 0;
  return function() {
    var r = Su(), s = Tu - (r - t);
    if (t = r, s > 0) {
      if (++e >= Au)
        return arguments[0];
    } else
      e = 0;
    return n.apply(void 0, arguments);
  };
}
function Ou(n) {
  return function() {
    return n;
  };
}
var os = (function() {
  try {
    var n = nn(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
})(), Cu = os ? function(n, e) {
  return os(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ou(e),
    writable: !0
  });
} : ea, Ru = _u(Cu);
function Lu(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r && e(n[t], t, n) !== !1; )
    ;
  return n;
}
var qu = 9007199254740991, Iu = /^(?:0|[1-9]\d*)$/;
function ta(n, e) {
  var t = typeof n;
  return e = e ?? qu, !!e && (t == "number" || t != "symbol" && Iu.test(n)) && n > -1 && n % 1 == 0 && n < e;
}
function to(n, e, t) {
  e == "__proto__" && os ? os(n, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : n[e] = t;
}
function mr(n, e) {
  return n === e || n !== n && e !== e;
}
var ku = Object.prototype, ju = ku.hasOwnProperty;
function na(n, e, t) {
  var r = n[e];
  (!(ju.call(n, e) && mr(r, t)) || t === void 0 && !(e in n)) && to(n, e, t);
}
function Bu(n, e, t, r) {
  var s = !t;
  t || (t = {});
  for (var i = -1, o = e.length; ++i < o; ) {
    var a = e[i], c = void 0;
    c === void 0 && (c = n[a]), s ? to(t, a, c) : na(t, a, c);
  }
  return t;
}
var Io = Math.max;
function Pu(n, e, t) {
  return e = Io(e === void 0 ? n.length - 1 : e, 0), function() {
    for (var r = arguments, s = -1, i = Io(r.length - e, 0), o = Array(i); ++s < i; )
      o[s] = r[e + s];
    s = -1;
    for (var a = Array(e + 1); ++s < e; )
      a[s] = r[s];
    return a[e] = t(o), xu(n, this, a);
  };
}
function Mu(n, e) {
  return Ru(Pu(n, e, ea), n + "");
}
var Du = 9007199254740991;
function ra(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Du;
}
function hs(n) {
  return n != null && ra(n.length) && !eo(n);
}
function Uu(n, e, t) {
  if (!Dt(t))
    return !1;
  var r = typeof e;
  return (r == "number" ? hs(t) && ta(e, t.length) : r == "string" && e in t) ? mr(t[e], n) : !1;
}
function $u(n) {
  return Mu(function(e, t) {
    var r = -1, s = t.length, i = s > 1 ? t[s - 1] : void 0, o = s > 2 ? t[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, o && Uu(t[0], t[1], o) && (i = s < 3 ? void 0 : i, s = 1), e = Object(e); ++r < s; ) {
      var a = t[r];
      a && n(e, a, r, i);
    }
    return e;
  });
}
var Fu = Object.prototype;
function no(n) {
  var e = n && n.constructor, t = typeof e == "function" && e.prototype || Fu;
  return n === t;
}
function Hu(n, e) {
  for (var t = -1, r = Array(n); ++t < n; )
    r[t] = e(t);
  return r;
}
var zu = "[object Arguments]";
function ko(n) {
  return Tt(n) && In(n) == zu;
}
var sa = Object.prototype, Ku = sa.hasOwnProperty, Vu = sa.propertyIsEnumerable, _i = ko(/* @__PURE__ */ (function() {
  return arguments;
})()) ? ko : function(n) {
  return Tt(n) && Ku.call(n, "callee") && !Vu.call(n, "callee");
};
function Gu() {
  return !1;
}
var ia = typeof exports == "object" && exports && !exports.nodeType && exports, jo = ia && typeof module == "object" && module && !module.nodeType && module, Wu = jo && jo.exports === ia, Bo = Wu ? gt.Buffer : void 0, Zu = Bo ? Bo.isBuffer : void 0, ar = Zu || Gu, Ju = "[object Arguments]", Yu = "[object Array]", Xu = "[object Boolean]", Qu = "[object Date]", eh = "[object Error]", th = "[object Function]", nh = "[object Map]", rh = "[object Number]", sh = "[object Object]", ih = "[object RegExp]", oh = "[object Set]", lh = "[object String]", ah = "[object WeakMap]", ch = "[object ArrayBuffer]", uh = "[object DataView]", hh = "[object Float32Array]", fh = "[object Float64Array]", dh = "[object Int8Array]", ph = "[object Int16Array]", mh = "[object Int32Array]", gh = "[object Uint8Array]", bh = "[object Uint8ClampedArray]", yh = "[object Uint16Array]", vh = "[object Uint32Array]", ge = {};
ge[hh] = ge[fh] = ge[dh] = ge[ph] = ge[mh] = ge[gh] = ge[bh] = ge[yh] = ge[vh] = !0;
ge[Ju] = ge[Yu] = ge[ch] = ge[Xu] = ge[uh] = ge[Qu] = ge[eh] = ge[th] = ge[nh] = ge[rh] = ge[sh] = ge[ih] = ge[oh] = ge[lh] = ge[ah] = !1;
function wh(n) {
  return Tt(n) && ra(n.length) && !!ge[In(n)];
}
function ro(n) {
  return function(e) {
    return n(e);
  };
}
var oa = typeof exports == "object" && exports && !exports.nodeType && exports, sr = oa && typeof module == "object" && module && !module.nodeType && module, Eh = sr && sr.exports === oa, ci = Eh && Xl.process, _n = (function() {
  try {
    var n = sr && sr.require && sr.require("util").types;
    return n || ci && ci.binding && ci.binding("util");
  } catch {
  }
})(), Po = _n && _n.isTypedArray, so = Po ? ro(Po) : wh, xh = Object.prototype, Nh = xh.hasOwnProperty;
function la(n, e) {
  var t = Yt(n), r = !t && _i(n), s = !t && !r && ar(n), i = !t && !r && !s && so(n), o = t || r || s || i, a = o ? Hu(n.length, String) : [], c = a.length;
  for (var u in n)
    (e || Nh.call(n, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ta(u, c))) && a.push(u);
  return a;
}
function aa(n, e) {
  return function(t) {
    return n(e(t));
  };
}
var Ah = aa(Object.keys, Object), Th = Object.prototype, Sh = Th.hasOwnProperty;
function _h(n) {
  if (!no(n))
    return Ah(n);
  var e = [];
  for (var t in Object(n))
    Sh.call(n, t) && t != "constructor" && e.push(t);
  return e;
}
function Oh(n) {
  return hs(n) ? la(n) : _h(n);
}
function Ch(n) {
  var e = [];
  if (n != null)
    for (var t in Object(n))
      e.push(t);
  return e;
}
var Rh = Object.prototype, Lh = Rh.hasOwnProperty;
function qh(n) {
  if (!Dt(n))
    return Ch(n);
  var e = no(n), t = [];
  for (var r in n)
    r == "constructor" && (e || !Lh.call(n, r)) || t.push(r);
  return t;
}
function ca(n) {
  return hs(n) ? la(n, !0) : qh(n);
}
var cr = nn(Object, "create");
function Ih() {
  this.__data__ = cr ? cr(null) : {}, this.size = 0;
}
function kh(n) {
  var e = this.has(n) && delete this.__data__[n];
  return this.size -= e ? 1 : 0, e;
}
var jh = "__lodash_hash_undefined__", Bh = Object.prototype, Ph = Bh.hasOwnProperty;
function Mh(n) {
  var e = this.__data__;
  if (cr) {
    var t = e[n];
    return t === jh ? void 0 : t;
  }
  return Ph.call(e, n) ? e[n] : void 0;
}
var Dh = Object.prototype, Uh = Dh.hasOwnProperty;
function $h(n) {
  var e = this.__data__;
  return cr ? e[n] !== void 0 : Uh.call(e, n);
}
var Fh = "__lodash_hash_undefined__";
function Hh(n, e) {
  var t = this.__data__;
  return this.size += this.has(n) ? 0 : 1, t[n] = cr && e === void 0 ? Fh : e, this;
}
function Xt(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
Xt.prototype.clear = Ih;
Xt.prototype.delete = kh;
Xt.prototype.get = Mh;
Xt.prototype.has = $h;
Xt.prototype.set = Hh;
function zh() {
  this.__data__ = [], this.size = 0;
}
function fs(n, e) {
  for (var t = n.length; t--; )
    if (mr(n[t][0], e))
      return t;
  return -1;
}
var Kh = Array.prototype, Vh = Kh.splice;
function Gh(n) {
  var e = this.__data__, t = fs(e, n);
  if (t < 0)
    return !1;
  var r = e.length - 1;
  return t == r ? e.pop() : Vh.call(e, t, 1), --this.size, !0;
}
function Wh(n) {
  var e = this.__data__, t = fs(e, n);
  return t < 0 ? void 0 : e[t][1];
}
function Zh(n) {
  return fs(this.__data__, n) > -1;
}
function Jh(n, e) {
  var t = this.__data__, r = fs(t, n);
  return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
}
function Ot(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
Ot.prototype.clear = zh;
Ot.prototype.delete = Gh;
Ot.prototype.get = Wh;
Ot.prototype.has = Zh;
Ot.prototype.set = Jh;
var ur = nn(gt, "Map");
function Yh() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (ur || Ot)(),
    string: new Xt()
  };
}
function Xh(n) {
  var e = typeof n;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
}
function ds(n, e) {
  var t = n.__data__;
  return Xh(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function Qh(n) {
  var e = ds(this, n).delete(n);
  return this.size -= e ? 1 : 0, e;
}
function ef(n) {
  return ds(this, n).get(n);
}
function tf(n) {
  return ds(this, n).has(n);
}
function nf(n, e) {
  var t = ds(this, n), r = t.size;
  return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
}
function rn(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.clear(); ++e < t; ) {
    var r = n[e];
    this.set(r[0], r[1]);
  }
}
rn.prototype.clear = Yh;
rn.prototype.delete = Qh;
rn.prototype.get = ef;
rn.prototype.has = tf;
rn.prototype.set = nf;
function rf(n, e) {
  for (var t = -1, r = e.length, s = n.length; ++t < r; )
    n[s + t] = e[t];
  return n;
}
var ua = aa(Object.getPrototypeOf, Object), sf = "[object Object]", of = Function.prototype, lf = Object.prototype, ha = of.toString, af = lf.hasOwnProperty, cf = ha.call(Object);
function uf(n) {
  if (!Tt(n) || In(n) != sf)
    return !1;
  var e = ua(n);
  if (e === null)
    return !0;
  var t = af.call(e, "constructor") && e.constructor;
  return typeof t == "function" && t instanceof t && ha.call(t) == cf;
}
function hf() {
  this.__data__ = new Ot(), this.size = 0;
}
function ff(n) {
  var e = this.__data__, t = e.delete(n);
  return this.size = e.size, t;
}
function df(n) {
  return this.__data__.get(n);
}
function pf(n) {
  return this.__data__.has(n);
}
var mf = 200;
function gf(n, e) {
  var t = this.__data__;
  if (t instanceof Ot) {
    var r = t.__data__;
    if (!ur || r.length < mf - 1)
      return r.push([n, e]), this.size = ++t.size, this;
    t = this.__data__ = new rn(r);
  }
  return t.set(n, e), this.size = t.size, this;
}
function ft(n) {
  var e = this.__data__ = new Ot(n);
  this.size = e.size;
}
ft.prototype.clear = hf;
ft.prototype.delete = ff;
ft.prototype.get = df;
ft.prototype.has = pf;
ft.prototype.set = gf;
var fa = typeof exports == "object" && exports && !exports.nodeType && exports, Mo = fa && typeof module == "object" && module && !module.nodeType && module, bf = Mo && Mo.exports === fa, Do = bf ? gt.Buffer : void 0, Uo = Do ? Do.allocUnsafe : void 0;
function da(n, e) {
  if (e)
    return n.slice();
  var t = n.length, r = Uo ? Uo(t) : new n.constructor(t);
  return n.copy(r), r;
}
function yf(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length, s = 0, i = []; ++t < r; ) {
    var o = n[t];
    e(o, t, n) && (i[s++] = o);
  }
  return i;
}
function vf() {
  return [];
}
var wf = Object.prototype, Ef = wf.propertyIsEnumerable, $o = Object.getOwnPropertySymbols, xf = $o ? function(n) {
  return n == null ? [] : (n = Object(n), yf($o(n), function(e) {
    return Ef.call(n, e);
  }));
} : vf;
function Nf(n, e, t) {
  var r = e(n);
  return Yt(n) ? r : rf(r, t(n));
}
function Oi(n) {
  return Nf(n, Oh, xf);
}
var Ci = nn(gt, "DataView"), Ri = nn(gt, "Promise"), Li = nn(gt, "Set"), Fo = "[object Map]", Af = "[object Object]", Ho = "[object Promise]", zo = "[object Set]", Ko = "[object WeakMap]", Vo = "[object DataView]", Tf = tn(Ci), Sf = tn(ur), _f = tn(Ri), Of = tn(Li), Cf = tn(Si), Xe = In;
(Ci && Xe(new Ci(new ArrayBuffer(1))) != Vo || ur && Xe(new ur()) != Fo || Ri && Xe(Ri.resolve()) != Ho || Li && Xe(new Li()) != zo || Si && Xe(new Si()) != Ko) && (Xe = function(n) {
  var e = In(n), t = e == Af ? n.constructor : void 0, r = t ? tn(t) : "";
  if (r)
    switch (r) {
      case Tf:
        return Vo;
      case Sf:
        return Fo;
      case _f:
        return Ho;
      case Of:
        return zo;
      case Cf:
        return Ko;
    }
  return e;
});
var Rf = Object.prototype, Lf = Rf.hasOwnProperty;
function qf(n) {
  var e = n.length, t = new n.constructor(e);
  return e && typeof n[0] == "string" && Lf.call(n, "index") && (t.index = n.index, t.input = n.input), t;
}
var ls = gt.Uint8Array;
function io(n) {
  var e = new n.constructor(n.byteLength);
  return new ls(e).set(new ls(n)), e;
}
function If(n, e) {
  var t = io(n.buffer);
  return new n.constructor(t, n.byteOffset, n.byteLength);
}
var kf = /\w*$/;
function jf(n) {
  var e = new n.constructor(n.source, kf.exec(n));
  return e.lastIndex = n.lastIndex, e;
}
var Go = Mt ? Mt.prototype : void 0, Wo = Go ? Go.valueOf : void 0;
function Bf(n) {
  return Wo ? Object(Wo.call(n)) : {};
}
function pa(n, e) {
  var t = e ? io(n.buffer) : n.buffer;
  return new n.constructor(t, n.byteOffset, n.length);
}
var Pf = "[object Boolean]", Mf = "[object Date]", Df = "[object Map]", Uf = "[object Number]", $f = "[object RegExp]", Ff = "[object Set]", Hf = "[object String]", zf = "[object Symbol]", Kf = "[object ArrayBuffer]", Vf = "[object DataView]", Gf = "[object Float32Array]", Wf = "[object Float64Array]", Zf = "[object Int8Array]", Jf = "[object Int16Array]", Yf = "[object Int32Array]", Xf = "[object Uint8Array]", Qf = "[object Uint8ClampedArray]", ed = "[object Uint16Array]", td = "[object Uint32Array]";
function nd(n, e, t) {
  var r = n.constructor;
  switch (e) {
    case Kf:
      return io(n);
    case Pf:
    case Mf:
      return new r(+n);
    case Vf:
      return If(n);
    case Gf:
    case Wf:
    case Zf:
    case Jf:
    case Yf:
    case Xf:
    case Qf:
    case ed:
    case td:
      return pa(n, t);
    case Df:
      return new r();
    case Uf:
    case Hf:
      return new r(n);
    case $f:
      return jf(n);
    case Ff:
      return new r();
    case zf:
      return Bf(n);
  }
}
function ma(n) {
  return typeof n.constructor == "function" && !no(n) ? Eu(ua(n)) : {};
}
var rd = "[object Map]";
function sd(n) {
  return Tt(n) && Xe(n) == rd;
}
var Zo = _n && _n.isMap, id = Zo ? ro(Zo) : sd, od = "[object Set]";
function ld(n) {
  return Tt(n) && Xe(n) == od;
}
var Jo = _n && _n.isSet, ad = Jo ? ro(Jo) : ld, cd = 1, ga = "[object Arguments]", ud = "[object Array]", hd = "[object Boolean]", fd = "[object Date]", dd = "[object Error]", ba = "[object Function]", pd = "[object GeneratorFunction]", md = "[object Map]", gd = "[object Number]", ya = "[object Object]", bd = "[object RegExp]", yd = "[object Set]", vd = "[object String]", wd = "[object Symbol]", Ed = "[object WeakMap]", xd = "[object ArrayBuffer]", Nd = "[object DataView]", Ad = "[object Float32Array]", Td = "[object Float64Array]", Sd = "[object Int8Array]", _d = "[object Int16Array]", Od = "[object Int32Array]", Cd = "[object Uint8Array]", Rd = "[object Uint8ClampedArray]", Ld = "[object Uint16Array]", qd = "[object Uint32Array]", pe = {};
pe[ga] = pe[ud] = pe[xd] = pe[Nd] = pe[hd] = pe[fd] = pe[Ad] = pe[Td] = pe[Sd] = pe[_d] = pe[Od] = pe[md] = pe[gd] = pe[ya] = pe[bd] = pe[yd] = pe[vd] = pe[wd] = pe[Cd] = pe[Rd] = pe[Ld] = pe[qd] = !0;
pe[dd] = pe[ba] = pe[Ed] = !1;
function es(n, e, t, r, s, i) {
  var o, a = e & cd;
  if (o !== void 0)
    return o;
  if (!Dt(n))
    return n;
  var c = Yt(n);
  if (c)
    o = qf(n);
  else {
    var u = Xe(n), f = u == ba || u == pd;
    if (ar(n))
      return da(n, a);
    if (u == ya || u == ga || f && !s)
      o = f ? {} : ma(n);
    else {
      if (!pe[u])
        return s ? n : {};
      o = nd(n, u, a);
    }
  }
  i || (i = new ft());
  var m = i.get(n);
  if (m)
    return m;
  i.set(n, o), ad(n) ? n.forEach(function(p) {
    o.add(es(p, e, t, p, n, i));
  }) : id(n) && n.forEach(function(p, v) {
    o.set(v, es(p, e, t, v, n, i));
  });
  var d = Oi, y = c ? void 0 : d(n);
  return Lu(y || n, function(p, v) {
    y && (v = p, p = n[v]), na(o, v, es(p, e, t, v, n, i));
  }), o;
}
var Id = 1, kd = 4;
function An(n) {
  return es(n, Id | kd);
}
var jd = "__lodash_hash_undefined__";
function Bd(n) {
  return this.__data__.set(n, jd), this;
}
function Pd(n) {
  return this.__data__.has(n);
}
function as(n) {
  var e = -1, t = n == null ? 0 : n.length;
  for (this.__data__ = new rn(); ++e < t; )
    this.add(n[e]);
}
as.prototype.add = as.prototype.push = Bd;
as.prototype.has = Pd;
function Md(n, e) {
  for (var t = -1, r = n == null ? 0 : n.length; ++t < r; )
    if (e(n[t], t, n))
      return !0;
  return !1;
}
function Dd(n, e) {
  return n.has(e);
}
var Ud = 1, $d = 2;
function va(n, e, t, r, s, i) {
  var o = t & Ud, a = n.length, c = e.length;
  if (a != c && !(o && c > a))
    return !1;
  var u = i.get(n), f = i.get(e);
  if (u && f)
    return u == e && f == n;
  var m = -1, d = !0, y = t & $d ? new as() : void 0;
  for (i.set(n, e), i.set(e, n); ++m < a; ) {
    var p = n[m], v = e[m];
    if (r)
      var w = o ? r(v, p, m, e, n, i) : r(p, v, m, n, e, i);
    if (w !== void 0) {
      if (w)
        continue;
      d = !1;
      break;
    }
    if (y) {
      if (!Md(e, function(A, R) {
        if (!Dd(y, R) && (p === A || s(p, A, t, r, i)))
          return y.push(R);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === v || s(p, v, t, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(n), i.delete(e), d;
}
function Fd(n) {
  var e = -1, t = Array(n.size);
  return n.forEach(function(r, s) {
    t[++e] = [s, r];
  }), t;
}
function Hd(n) {
  var e = -1, t = Array(n.size);
  return n.forEach(function(r) {
    t[++e] = r;
  }), t;
}
var zd = 1, Kd = 2, Vd = "[object Boolean]", Gd = "[object Date]", Wd = "[object Error]", Zd = "[object Map]", Jd = "[object Number]", Yd = "[object RegExp]", Xd = "[object Set]", Qd = "[object String]", ep = "[object Symbol]", tp = "[object ArrayBuffer]", np = "[object DataView]", Yo = Mt ? Mt.prototype : void 0, ui = Yo ? Yo.valueOf : void 0;
function rp(n, e, t, r, s, i, o) {
  switch (t) {
    case np:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return !1;
      n = n.buffer, e = e.buffer;
    case tp:
      return !(n.byteLength != e.byteLength || !i(new ls(n), new ls(e)));
    case Vd:
    case Gd:
    case Jd:
      return mr(+n, +e);
    case Wd:
      return n.name == e.name && n.message == e.message;
    case Yd:
    case Qd:
      return n == e + "";
    case Zd:
      var a = Fd;
    case Xd:
      var c = r & zd;
      if (a || (a = Hd), n.size != e.size && !c)
        return !1;
      var u = o.get(n);
      if (u)
        return u == e;
      r |= Kd, o.set(n, e);
      var f = va(a(n), a(e), r, s, i, o);
      return o.delete(n), f;
    case ep:
      if (ui)
        return ui.call(n) == ui.call(e);
  }
  return !1;
}
var sp = 1, ip = Object.prototype, op = ip.hasOwnProperty;
function lp(n, e, t, r, s, i) {
  var o = t & sp, a = Oi(n), c = a.length, u = Oi(e), f = u.length;
  if (c != f && !o)
    return !1;
  for (var m = c; m--; ) {
    var d = a[m];
    if (!(o ? d in e : op.call(e, d)))
      return !1;
  }
  var y = i.get(n), p = i.get(e);
  if (y && p)
    return y == e && p == n;
  var v = !0;
  i.set(n, e), i.set(e, n);
  for (var w = o; ++m < c; ) {
    d = a[m];
    var A = n[d], R = e[d];
    if (r)
      var q = o ? r(R, A, d, e, n, i) : r(A, R, d, n, e, i);
    if (!(q === void 0 ? A === R || s(A, R, t, r, i) : q)) {
      v = !1;
      break;
    }
    w || (w = d == "constructor");
  }
  if (v && !w) {
    var M = n.constructor, _ = e.constructor;
    M != _ && "constructor" in n && "constructor" in e && !(typeof M == "function" && M instanceof M && typeof _ == "function" && _ instanceof _) && (v = !1);
  }
  return i.delete(n), i.delete(e), v;
}
var ap = 1, Xo = "[object Arguments]", Qo = "[object Array]", Hr = "[object Object]", cp = Object.prototype, el = cp.hasOwnProperty;
function up(n, e, t, r, s, i) {
  var o = Yt(n), a = Yt(e), c = o ? Qo : Xe(n), u = a ? Qo : Xe(e);
  c = c == Xo ? Hr : c, u = u == Xo ? Hr : u;
  var f = c == Hr, m = u == Hr, d = c == u;
  if (d && ar(n)) {
    if (!ar(e))
      return !1;
    o = !0, f = !1;
  }
  if (d && !f)
    return i || (i = new ft()), o || so(n) ? va(n, e, t, r, s, i) : rp(n, e, c, t, r, s, i);
  if (!(t & ap)) {
    var y = f && el.call(n, "__wrapped__"), p = m && el.call(e, "__wrapped__");
    if (y || p) {
      var v = y ? n.value() : n, w = p ? e.value() : e;
      return i || (i = new ft()), s(v, w, t, r, i);
    }
  }
  return d ? (i || (i = new ft()), lp(n, e, t, r, s, i)) : !1;
}
function wa(n, e, t, r, s) {
  return n === e ? !0 : n == null || e == null || !Tt(n) && !Tt(e) ? n !== n && e !== e : up(n, e, t, r, wa, s);
}
function hp(n) {
  return function(e, t, r) {
    for (var s = -1, i = Object(e), o = r(e), a = o.length; a--; ) {
      var c = o[++s];
      if (t(i[c], c, i) === !1)
        break;
    }
    return e;
  };
}
var fp = hp();
function qi(n, e, t) {
  (t !== void 0 && !mr(n[e], t) || t === void 0 && !(e in n)) && to(n, e, t);
}
function dp(n) {
  return Tt(n) && hs(n);
}
function Ii(n, e) {
  if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
    return n[e];
}
function pp(n) {
  return Bu(n, ca(n));
}
function mp(n, e, t, r, s, i, o) {
  var a = Ii(n, t), c = Ii(e, t), u = o.get(c);
  if (u) {
    qi(n, t, u);
    return;
  }
  var f = i ? i(a, c, t + "", n, e, o) : void 0, m = f === void 0;
  if (m) {
    var d = Yt(c), y = !d && ar(c), p = !d && !y && so(c);
    f = c, d || y || p ? Yt(a) ? f = a : dp(a) ? f = Nu(a) : y ? (m = !1, f = da(c, !0)) : p ? (m = !1, f = pa(c, !0)) : f = [] : uf(c) || _i(c) ? (f = a, _i(a) ? f = pp(a) : (!Dt(a) || eo(a)) && (f = ma(c))) : m = !1;
  }
  m && (o.set(c, f), s(f, c, r, i, o), o.delete(c)), qi(n, t, f);
}
function Ea(n, e, t, r, s) {
  n !== e && fp(e, function(i, o) {
    if (s || (s = new ft()), Dt(i))
      mp(n, e, o, t, Ea, r, s);
    else {
      var a = r ? r(Ii(n, o), i, o + "", n, e, s) : void 0;
      a === void 0 && (a = i), qi(n, o, a);
    }
  }, ca);
}
function oo(n, e) {
  return wa(n, e);
}
var Pt = $u(function(n, e, t) {
  Ea(n, e, t);
}), Z = /* @__PURE__ */ ((n) => (n[n.TYPE = 3] = "TYPE", n[n.LEVEL = 12] = "LEVEL", n[n.ATTRIBUTE = 13] = "ATTRIBUTE", n[n.BLOT = 14] = "BLOT", n[n.INLINE = 7] = "INLINE", n[n.BLOCK = 11] = "BLOCK", n[n.BLOCK_BLOT = 10] = "BLOCK_BLOT", n[n.INLINE_BLOT = 6] = "INLINE_BLOT", n[n.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", n[n.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", n[n.ANY = 15] = "ANY", n))(Z || {});
class pt {
  constructor(e, t, r = {}) {
    this.attrName = e, this.keyName = t;
    const s = Z.TYPE & Z.ATTRIBUTE;
    this.scope = r.scope != null ? (
      // Ignore type bits, force attribute bit
      r.scope & Z.LEVEL | s
    ) : Z.ATTRIBUTE, r.whitelist != null && (this.whitelist = r.whitelist);
  }
  static keys(e) {
    return Array.from(e.attributes).map((t) => t.name);
  }
  add(e, t) {
    return this.canAdd(e, t) ? (e.setAttribute(this.keyName, t), !0) : !1;
  }
  canAdd(e, t) {
    return this.whitelist == null ? !0 : typeof t == "string" ? this.whitelist.indexOf(t.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(t) > -1;
  }
  remove(e) {
    e.removeAttribute(this.keyName);
  }
  value(e) {
    const t = e.getAttribute(this.keyName);
    return this.canAdd(e, t) && t ? t : "";
  }
}
class Tn extends Error {
  constructor(e) {
    e = "[Parchment] " + e, super(e), this.message = e, this.name = this.constructor.name;
  }
}
const xa = class ki {
  constructor() {
    this.attributes = {}, this.classes = {}, this.tags = {}, this.types = {};
  }
  static find(e, t = !1) {
    if (e == null)
      return null;
    if (this.blots.has(e))
      return this.blots.get(e) || null;
    if (t) {
      let r = null;
      try {
        r = e.parentNode;
      } catch {
        return null;
      }
      return this.find(r, t);
    }
    return null;
  }
  create(e, t, r) {
    const s = this.query(t);
    if (s == null)
      throw new Tn(`Unable to create ${t} blot`);
    const i = s, o = (
      // @ts-expect-error Fix me later
      t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : i.create(r)
    ), a = new i(e, o, r);
    return ki.blots.set(a.domNode, a), a;
  }
  find(e, t = !1) {
    return ki.find(e, t);
  }
  query(e, t = Z.ANY) {
    let r;
    return typeof e == "string" ? r = this.types[e] || this.attributes[e] : e instanceof Text || e.nodeType === Node.TEXT_NODE ? r = this.types.text : typeof e == "number" ? e & Z.LEVEL & Z.BLOCK ? r = this.types.block : e & Z.LEVEL & Z.INLINE && (r = this.types.inline) : e instanceof Element && ((e.getAttribute("class") || "").split(/\s+/).some((s) => (r = this.classes[s], !!r)), r = r || this.tags[e.tagName]), r == null ? null : "scope" in r && t & Z.LEVEL & r.scope && t & Z.TYPE & r.scope ? r : null;
  }
  register(...e) {
    return e.map((t) => {
      const r = "blotName" in t, s = "attrName" in t;
      if (!r && !s)
        throw new Tn("Invalid definition");
      if (r && t.blotName === "abstract")
        throw new Tn("Cannot register abstract class");
      const i = r ? t.blotName : s ? t.attrName : void 0;
      return this.types[i] = t, s ? typeof t.keyName == "string" && (this.attributes[t.keyName] = t) : r && (t.className && (this.classes[t.className] = t), t.tagName && (Array.isArray(t.tagName) ? t.tagName = t.tagName.map((o) => o.toUpperCase()) : t.tagName = t.tagName.toUpperCase(), (Array.isArray(t.tagName) ? t.tagName : [t.tagName]).forEach((o) => {
        (this.tags[o] == null || t.className == null) && (this.tags[o] = t);
      }))), t;
    });
  }
};
xa.blots = /* @__PURE__ */ new WeakMap();
let On = xa;
function tl(n, e) {
  return (n.getAttribute("class") || "").split(/\s+/).filter((t) => t.indexOf(`${e}-`) === 0);
}
class gp extends pt {
  static keys(e) {
    return (e.getAttribute("class") || "").split(/\s+/).map((t) => t.split("-").slice(0, -1).join("-"));
  }
  add(e, t) {
    return this.canAdd(e, t) ? (this.remove(e), e.classList.add(`${this.keyName}-${t}`), !0) : !1;
  }
  remove(e) {
    tl(e, this.keyName).forEach((t) => {
      e.classList.remove(t);
    }), e.classList.length === 0 && e.removeAttribute("class");
  }
  value(e) {
    const t = (tl(e, this.keyName)[0] || "").slice(this.keyName.length + 1);
    return this.canAdd(e, t) ? t : "";
  }
}
const nt = gp;
function hi(n) {
  const e = n.split("-"), t = e.slice(1).map((r) => r[0].toUpperCase() + r.slice(1)).join("");
  return e[0] + t;
}
class bp extends pt {
  static keys(e) {
    return (e.getAttribute("style") || "").split(";").map((t) => t.split(":")[0].trim());
  }
  add(e, t) {
    return this.canAdd(e, t) ? (e.style[hi(this.keyName)] = t, !0) : !1;
  }
  remove(e) {
    e.style[hi(this.keyName)] = "", e.getAttribute("style") || e.removeAttribute("style");
  }
  value(e) {
    const t = e.style[hi(this.keyName)];
    return this.canAdd(e, t) ? t : "";
  }
}
const Ut = bp;
class yp {
  constructor(e) {
    this.attributes = {}, this.domNode = e, this.build();
  }
  attribute(e, t) {
    t ? e.add(this.domNode, t) && (e.value(this.domNode) != null ? this.attributes[e.attrName] = e : delete this.attributes[e.attrName]) : (e.remove(this.domNode), delete this.attributes[e.attrName]);
  }
  build() {
    this.attributes = {};
    const e = On.find(this.domNode);
    if (e == null)
      return;
    const t = pt.keys(this.domNode), r = nt.keys(this.domNode), s = Ut.keys(this.domNode);
    t.concat(r).concat(s).forEach((i) => {
      const o = e.scroll.query(i, Z.ATTRIBUTE);
      o instanceof pt && (this.attributes[o.attrName] = o);
    });
  }
  copy(e) {
    Object.keys(this.attributes).forEach((t) => {
      const r = this.attributes[t].value(this.domNode);
      e.format(t, r);
    });
  }
  move(e) {
    this.copy(e), Object.keys(this.attributes).forEach((t) => {
      this.attributes[t].remove(this.domNode);
    }), this.attributes = {};
  }
  values() {
    return Object.keys(this.attributes).reduce(
      (e, t) => (e[t] = this.attributes[t].value(this.domNode), e),
      {}
    );
  }
}
const ps = yp, Na = class {
  constructor(e, t) {
    this.scroll = e, this.domNode = t, On.blots.set(t, this), this.prev = null, this.next = null;
  }
  static create(e) {
    if (this.tagName == null)
      throw new Tn("Blot definition missing tagName");
    let t, r;
    return Array.isArray(this.tagName) ? (typeof e == "string" ? (r = e.toUpperCase(), parseInt(r, 10).toString() === r && (r = parseInt(r, 10))) : typeof e == "number" && (r = e), typeof r == "number" ? t = document.createElement(this.tagName[r - 1]) : r && this.tagName.indexOf(r) > -1 ? t = document.createElement(r) : t = document.createElement(this.tagName[0])) : t = document.createElement(this.tagName), this.className && t.classList.add(this.className), t;
  }
  // Hack for accessing inherited static methods
  get statics() {
    return this.constructor;
  }
  attach() {
  }
  clone() {
    const e = this.domNode.cloneNode(!1);
    return this.scroll.create(e);
  }
  detach() {
    this.parent != null && this.parent.removeChild(this), On.blots.delete(this.domNode);
  }
  deleteAt(e, t) {
    this.isolate(e, t).remove();
  }
  formatAt(e, t, r, s) {
    const i = this.isolate(e, t);
    if (this.scroll.query(r, Z.BLOT) != null && s)
      i.wrap(r, s);
    else if (this.scroll.query(r, Z.ATTRIBUTE) != null) {
      const o = this.scroll.create(this.statics.scope);
      i.wrap(o), o.format(r, s);
    }
  }
  insertAt(e, t, r) {
    const s = r == null ? this.scroll.create("text", t) : this.scroll.create(t, r), i = this.split(e);
    this.parent.insertBefore(s, i || void 0);
  }
  isolate(e, t) {
    const r = this.split(e);
    if (r == null)
      throw new Error("Attempt to isolate at end");
    return r.split(t), r;
  }
  length() {
    return 1;
  }
  offset(e = this.parent) {
    return this.parent == null || this === e ? 0 : this.parent.children.offset(this) + this.parent.offset(e);
  }
  optimize(e) {
    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName);
  }
  remove() {
    this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
  }
  replaceWith(e, t) {
    const r = typeof e == "string" ? this.scroll.create(e, t) : e;
    return this.parent != null && (this.parent.insertBefore(r, this.next || void 0), this.remove()), r;
  }
  split(e, t) {
    return e === 0 ? this : this.next;
  }
  update(e, t) {
  }
  wrap(e, t) {
    const r = typeof e == "string" ? this.scroll.create(e, t) : e;
    if (this.parent != null && this.parent.insertBefore(r, this.next || void 0), typeof r.appendChild != "function")
      throw new Tn(`Cannot wrap ${e}`);
    return r.appendChild(this), r;
  }
};
Na.blotName = "abstract";
let Aa = Na;
const Ta = class extends Aa {
  /**
   * Returns the value represented by domNode if it is this Blot's type
   * No checking that domNode can represent this Blot type is required so
   * applications needing it should check externally before calling.
   */
  static value(e) {
    return !0;
  }
  /**
   * Given location represented by node and offset from DOM Selection Range,
   * return index to that location.
   */
  index(e, t) {
    return this.domNode === e || this.domNode.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
  }
  /**
   * Given index to location within blot, return node and offset representing
   * that location, consumable by DOM Selection Range
   */
  position(e, t) {
    let r = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
    return e > 0 && (r += 1), [this.parent.domNode, r];
  }
  /**
   * Return value represented by this blot
   * Should not change without interaction from API or
   * user change detectable by update()
   */
  value() {
    return {
      [this.statics.blotName]: this.statics.value(this.domNode) || !0
    };
  }
};
Ta.scope = Z.INLINE_BLOT;
let vp = Ta;
const Ce = vp;
class wp {
  constructor() {
    this.head = null, this.tail = null, this.length = 0;
  }
  append(...e) {
    if (this.insertBefore(e[0], null), e.length > 1) {
      const t = e.slice(1);
      this.append(...t);
    }
  }
  at(e) {
    const t = this.iterator();
    let r = t();
    for (; r && e > 0; )
      e -= 1, r = t();
    return r;
  }
  contains(e) {
    const t = this.iterator();
    let r = t();
    for (; r; ) {
      if (r === e)
        return !0;
      r = t();
    }
    return !1;
  }
  indexOf(e) {
    const t = this.iterator();
    let r = t(), s = 0;
    for (; r; ) {
      if (r === e)
        return s;
      s += 1, r = t();
    }
    return -1;
  }
  insertBefore(e, t) {
    e != null && (this.remove(e), e.next = t, t != null ? (e.prev = t.prev, t.prev != null && (t.prev.next = e), t.prev = e, t === this.head && (this.head = e)) : this.tail != null ? (this.tail.next = e, e.prev = this.tail, this.tail = e) : (e.prev = null, this.head = this.tail = e), this.length += 1);
  }
  offset(e) {
    let t = 0, r = this.head;
    for (; r != null; ) {
      if (r === e)
        return t;
      t += r.length(), r = r.next;
    }
    return -1;
  }
  remove(e) {
    this.contains(e) && (e.prev != null && (e.prev.next = e.next), e.next != null && (e.next.prev = e.prev), e === this.head && (this.head = e.next), e === this.tail && (this.tail = e.prev), this.length -= 1);
  }
  iterator(e = this.head) {
    return () => {
      const t = e;
      return e != null && (e = e.next), t;
    };
  }
  find(e, t = !1) {
    const r = this.iterator();
    let s = r();
    for (; s; ) {
      const i = s.length();
      if (e < i || t && e === i && (s.next == null || s.next.length() !== 0))
        return [s, e];
      e -= i, s = r();
    }
    return [null, 0];
  }
  forEach(e) {
    const t = this.iterator();
    let r = t();
    for (; r; )
      e(r), r = t();
  }
  forEachAt(e, t, r) {
    if (t <= 0)
      return;
    const [s, i] = this.find(e);
    let o = e - i;
    const a = this.iterator(s);
    let c = a();
    for (; c && o < e + t; ) {
      const u = c.length();
      e > o ? r(
        c,
        e - o,
        Math.min(t, o + u - e)
      ) : r(c, 0, Math.min(u, e + t - o)), o += u, c = a();
    }
  }
  map(e) {
    return this.reduce((t, r) => (t.push(e(r)), t), []);
  }
  reduce(e, t) {
    const r = this.iterator();
    let s = r();
    for (; s; )
      t = e(t, s), s = r();
    return t;
  }
}
function nl(n, e) {
  const t = e.find(n);
  if (t)
    return t;
  try {
    return e.create(n);
  } catch {
    const r = e.create(Z.INLINE);
    return Array.from(n.childNodes).forEach((s) => {
      r.domNode.appendChild(s);
    }), n.parentNode && n.parentNode.replaceChild(r.domNode, n), r.attach(), r;
  }
}
const Sa = class It extends Aa {
  constructor(e, t) {
    super(e, t), this.uiNode = null, this.build();
  }
  appendChild(e) {
    this.insertBefore(e);
  }
  attach() {
    super.attach(), this.children.forEach((e) => {
      e.attach();
    });
  }
  attachUI(e) {
    this.uiNode != null && this.uiNode.remove(), this.uiNode = e, It.uiClass && this.uiNode.classList.add(It.uiClass), this.uiNode.setAttribute("contenteditable", "false"), this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
  }
  /**
   * Called during construction, should fill its own children LinkedList.
   */
  build() {
    this.children = new wp(), Array.from(this.domNode.childNodes).filter((e) => e !== this.uiNode).reverse().forEach((e) => {
      try {
        const t = nl(e, this.scroll);
        this.insertBefore(t, this.children.head || void 0);
      } catch (t) {
        if (t instanceof Tn)
          return;
        throw t;
      }
    });
  }
  deleteAt(e, t) {
    if (e === 0 && t === this.length())
      return this.remove();
    this.children.forEachAt(e, t, (r, s, i) => {
      r.deleteAt(s, i);
    });
  }
  descendant(e, t = 0) {
    const [r, s] = this.children.find(t);
    return e.blotName == null && e(r) || e.blotName != null && r instanceof e ? [r, s] : r instanceof It ? r.descendant(e, s) : [null, -1];
  }
  descendants(e, t = 0, r = Number.MAX_VALUE) {
    let s = [], i = r;
    return this.children.forEachAt(
      t,
      r,
      (o, a, c) => {
        (e.blotName == null && e(o) || e.blotName != null && o instanceof e) && s.push(o), o instanceof It && (s = s.concat(
          o.descendants(e, a, i)
        )), i -= c;
      }
    ), s;
  }
  detach() {
    this.children.forEach((e) => {
      e.detach();
    }), super.detach();
  }
  enforceAllowedChildren() {
    let e = !1;
    this.children.forEach((t) => {
      e || this.statics.allowedChildren.some(
        (r) => t instanceof r
      ) || (t.statics.scope === Z.BLOCK_BLOT ? (t.next != null && this.splitAfter(t), t.prev != null && this.splitAfter(t.prev), t.parent.unwrap(), e = !0) : t instanceof It ? t.unwrap() : t.remove());
    });
  }
  formatAt(e, t, r, s) {
    this.children.forEachAt(e, t, (i, o, a) => {
      i.formatAt(o, a, r, s);
    });
  }
  insertAt(e, t, r) {
    const [s, i] = this.children.find(e);
    if (s)
      s.insertAt(i, t, r);
    else {
      const o = r == null ? this.scroll.create("text", t) : this.scroll.create(t, r);
      this.appendChild(o);
    }
  }
  insertBefore(e, t) {
    e.parent != null && e.parent.children.remove(e);
    let r = null;
    this.children.insertBefore(e, t || null), e.parent = this, t != null && (r = t.domNode), (this.domNode.parentNode !== e.domNode || this.domNode.nextSibling !== r) && this.domNode.insertBefore(e.domNode, r), e.attach();
  }
  length() {
    return this.children.reduce((e, t) => e + t.length(), 0);
  }
  moveChildren(e, t) {
    this.children.forEach((r) => {
      e.insertBefore(r, t);
    });
  }
  optimize(e) {
    if (super.optimize(e), this.enforceAllowedChildren(), this.uiNode != null && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild), this.children.length === 0)
      if (this.statics.defaultChild != null) {
        const t = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(t);
      } else
        this.remove();
  }
  path(e, t = !1) {
    const [r, s] = this.children.find(e, t), i = [[this, e]];
    return r instanceof It ? i.concat(r.path(s, t)) : (r != null && i.push([r, s]), i);
  }
  removeChild(e) {
    this.children.remove(e);
  }
  replaceWith(e, t) {
    const r = typeof e == "string" ? this.scroll.create(e, t) : e;
    return r instanceof It && this.moveChildren(r), super.replaceWith(r);
  }
  split(e, t = !1) {
    if (!t) {
      if (e === 0)
        return this;
      if (e === this.length())
        return this.next;
    }
    const r = this.clone();
    return this.parent && this.parent.insertBefore(r, this.next || void 0), this.children.forEachAt(e, this.length(), (s, i, o) => {
      const a = s.split(i, t);
      a != null && r.appendChild(a);
    }), r;
  }
  splitAfter(e) {
    const t = this.clone();
    for (; e.next != null; )
      t.appendChild(e.next);
    return this.parent && this.parent.insertBefore(t, this.next || void 0), t;
  }
  unwrap() {
    this.parent && this.moveChildren(this.parent, this.next || void 0), this.remove();
  }
  update(e, t) {
    const r = [], s = [];
    e.forEach((i) => {
      i.target === this.domNode && i.type === "childList" && (r.push(...i.addedNodes), s.push(...i.removedNodes));
    }), s.forEach((i) => {
      if (i.parentNode != null && // @ts-expect-error Fix me later
      i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)
        return;
      const o = this.scroll.find(i);
      o != null && (o.domNode.parentNode == null || o.domNode.parentNode === this.domNode) && o.detach();
    }), r.filter((i) => i.parentNode === this.domNode && i !== this.uiNode).sort((i, o) => i === o ? 0 : i.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1).forEach((i) => {
      let o = null;
      i.nextSibling != null && (o = this.scroll.find(i.nextSibling));
      const a = nl(i, this.scroll);
      (a.next !== o || a.next == null) && (a.parent != null && a.parent.removeChild(this), this.insertBefore(a, o || void 0));
    }), this.enforceAllowedChildren();
  }
};
Sa.uiClass = "";
let Ep = Sa;
const et = Ep;
function xp(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (const t in n)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
const bn = class yn extends et {
  static create(e) {
    return super.create(e);
  }
  static formats(e, t) {
    const r = t.query(yn.blotName);
    if (!(r != null && e.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return e.tagName.toLowerCase();
    }
  }
  constructor(e, t) {
    super(e, t), this.attributes = new ps(this.domNode);
  }
  format(e, t) {
    if (e === this.statics.blotName && !t)
      this.children.forEach((r) => {
        r instanceof yn || (r = r.wrap(yn.blotName, !0)), this.attributes.copy(r);
      }), this.unwrap();
    else {
      const r = this.scroll.query(e, Z.INLINE);
      if (r == null)
        return;
      r instanceof pt ? this.attributes.attribute(r, t) : t && (e !== this.statics.blotName || this.formats()[e] !== t) && this.replaceWith(e, t);
    }
  }
  formats() {
    const e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
    return t != null && (e[this.statics.blotName] = t), e;
  }
  formatAt(e, t, r, s) {
    this.formats()[r] != null || this.scroll.query(r, Z.ATTRIBUTE) ? this.isolate(e, t).format(r, s) : super.formatAt(e, t, r, s);
  }
  optimize(e) {
    super.optimize(e);
    const t = this.formats();
    if (Object.keys(t).length === 0)
      return this.unwrap();
    const r = this.next;
    r instanceof yn && r.prev === this && xp(t, r.formats()) && (r.moveChildren(this), r.remove());
  }
  replaceWith(e, t) {
    const r = super.replaceWith(e, t);
    return this.attributes.copy(r), r;
  }
  update(e, t) {
    super.update(e, t), e.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
  wrap(e, t) {
    const r = super.wrap(e, t);
    return r instanceof yn && this.attributes.move(r), r;
  }
};
bn.allowedChildren = [bn, Ce], bn.blotName = "inline", bn.scope = Z.INLINE_BLOT, bn.tagName = "SPAN";
let Np = bn;
const lo = Np, vn = class ji extends et {
  static create(e) {
    return super.create(e);
  }
  static formats(e, t) {
    const r = t.query(ji.blotName);
    if (!(r != null && e.tagName === r.tagName)) {
      if (typeof this.tagName == "string")
        return !0;
      if (Array.isArray(this.tagName))
        return e.tagName.toLowerCase();
    }
  }
  constructor(e, t) {
    super(e, t), this.attributes = new ps(this.domNode);
  }
  format(e, t) {
    const r = this.scroll.query(e, Z.BLOCK);
    r != null && (r instanceof pt ? this.attributes.attribute(r, t) : e === this.statics.blotName && !t ? this.replaceWith(ji.blotName) : t && (e !== this.statics.blotName || this.formats()[e] !== t) && this.replaceWith(e, t));
  }
  formats() {
    const e = this.attributes.values(), t = this.statics.formats(this.domNode, this.scroll);
    return t != null && (e[this.statics.blotName] = t), e;
  }
  formatAt(e, t, r, s) {
    this.scroll.query(r, Z.BLOCK) != null ? this.format(r, s) : super.formatAt(e, t, r, s);
  }
  insertAt(e, t, r) {
    if (r == null || this.scroll.query(t, Z.INLINE) != null)
      super.insertAt(e, t, r);
    else {
      const s = this.split(e);
      if (s != null) {
        const i = this.scroll.create(t, r);
        s.parent.insertBefore(i, s);
      } else
        throw new Error("Attempt to insertAt after block boundaries");
    }
  }
  replaceWith(e, t) {
    const r = super.replaceWith(e, t);
    return this.attributes.copy(r), r;
  }
  update(e, t) {
    super.update(e, t), e.some(
      (r) => r.target === this.domNode && r.type === "attributes"
    ) && this.attributes.build();
  }
};
vn.blotName = "block", vn.scope = Z.BLOCK_BLOT, vn.tagName = "P", vn.allowedChildren = [
  lo,
  vn,
  Ce
];
let Ap = vn;
const hr = Ap, Bi = class extends et {
  checkMerge() {
    return this.next !== null && this.next.statics.blotName === this.statics.blotName;
  }
  deleteAt(e, t) {
    super.deleteAt(e, t), this.enforceAllowedChildren();
  }
  formatAt(e, t, r, s) {
    super.formatAt(e, t, r, s), this.enforceAllowedChildren();
  }
  insertAt(e, t, r) {
    super.insertAt(e, t, r), this.enforceAllowedChildren();
  }
  optimize(e) {
    super.optimize(e), this.children.length > 0 && this.next != null && this.checkMerge() && (this.next.moveChildren(this), this.next.remove());
  }
};
Bi.blotName = "container", Bi.scope = Z.BLOCK_BLOT;
let Tp = Bi;
const ms = Tp;
class Sp extends Ce {
  static formats(e, t) {
  }
  format(e, t) {
    super.formatAt(0, this.length(), e, t);
  }
  formatAt(e, t, r, s) {
    e === 0 && t === this.length() ? this.format(r, s) : super.formatAt(e, t, r, s);
  }
  formats() {
    return this.statics.formats(this.domNode, this.scroll);
  }
}
const De = Sp, _p = {
  attributes: !0,
  characterData: !0,
  characterDataOldValue: !0,
  childList: !0,
  subtree: !0
}, Op = 100, wn = class extends et {
  constructor(e, t) {
    super(null, t), this.registry = e, this.scroll = this, this.build(), this.observer = new MutationObserver((r) => {
      this.update(r);
    }), this.observer.observe(this.domNode, _p), this.attach();
  }
  create(e, t) {
    return this.registry.create(this, e, t);
  }
  find(e, t = !1) {
    const r = this.registry.find(e, t);
    return r ? r.scroll === this ? r : t ? this.find(r.scroll.domNode.parentNode, !0) : null : null;
  }
  query(e, t = Z.ANY) {
    return this.registry.query(e, t);
  }
  register(...e) {
    return this.registry.register(...e);
  }
  build() {
    this.scroll != null && super.build();
  }
  detach() {
    super.detach(), this.observer.disconnect();
  }
  deleteAt(e, t) {
    this.update(), e === 0 && t === this.length() ? this.children.forEach((r) => {
      r.remove();
    }) : super.deleteAt(e, t);
  }
  formatAt(e, t, r, s) {
    this.update(), super.formatAt(e, t, r, s);
  }
  insertAt(e, t, r) {
    this.update(), super.insertAt(e, t, r);
  }
  optimize(e = [], t = {}) {
    super.optimize(t);
    const r = t.mutationsMap || /* @__PURE__ */ new WeakMap();
    let s = Array.from(this.observer.takeRecords());
    for (; s.length > 0; )
      e.push(s.pop());
    const i = (c, u = !0) => {
      c == null || c === this || c.domNode.parentNode != null && (r.has(c.domNode) || r.set(c.domNode, []), u && i(c.parent));
    }, o = (c) => {
      r.has(c.domNode) && (c instanceof et && c.children.forEach(o), r.delete(c.domNode), c.optimize(t));
    };
    let a = e;
    for (let c = 0; a.length > 0; c += 1) {
      if (c >= Op)
        throw new Error("[Parchment] Maximum optimize iterations reached");
      for (a.forEach((u) => {
        const f = this.find(u.target, !0);
        f != null && (f.domNode === u.target && (u.type === "childList" ? (i(this.find(u.previousSibling, !1)), Array.from(u.addedNodes).forEach((m) => {
          const d = this.find(m, !1);
          i(d, !1), d instanceof et && d.children.forEach((y) => {
            i(y, !1);
          });
        })) : u.type === "attributes" && i(f.prev)), i(f));
      }), this.children.forEach(o), a = Array.from(this.observer.takeRecords()), s = a.slice(); s.length > 0; )
        e.push(s.pop());
    }
  }
  update(e, t = {}) {
    e = e || this.observer.takeRecords();
    const r = /* @__PURE__ */ new WeakMap();
    e.map((s) => {
      const i = this.find(s.target, !0);
      return i == null ? null : r.has(i.domNode) ? (r.get(i.domNode).push(s), null) : (r.set(i.domNode, [s]), i);
    }).forEach((s) => {
      s != null && s !== this && r.has(s.domNode) && s.update(r.get(s.domNode) || [], t);
    }), t.mutationsMap = r, r.has(this.domNode) && super.update(r.get(this.domNode), t), this.optimize(e, t);
  }
};
wn.blotName = "scroll", wn.defaultChild = hr, wn.allowedChildren = [hr, ms], wn.scope = Z.BLOCK_BLOT, wn.tagName = "DIV";
let Cp = wn;
const ao = Cp, Pi = class _a extends Ce {
  static create(e) {
    return document.createTextNode(e);
  }
  static value(e) {
    return e.data;
  }
  constructor(e, t) {
    super(e, t), this.text = this.statics.value(this.domNode);
  }
  deleteAt(e, t) {
    this.domNode.data = this.text = this.text.slice(0, e) + this.text.slice(e + t);
  }
  index(e, t) {
    return this.domNode === e ? t : -1;
  }
  insertAt(e, t, r) {
    r == null ? (this.text = this.text.slice(0, e) + t + this.text.slice(e), this.domNode.data = this.text) : super.insertAt(e, t, r);
  }
  length() {
    return this.text.length;
  }
  optimize(e) {
    super.optimize(e), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof _a && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
  }
  position(e, t = !1) {
    return [this.domNode, e];
  }
  split(e, t = !1) {
    if (!t) {
      if (e === 0)
        return this;
      if (e === this.length())
        return this.next;
    }
    const r = this.scroll.create(this.domNode.splitText(e));
    return this.parent.insertBefore(r, this.next || void 0), this.text = this.statics.value(this.domNode), r;
  }
  update(e, t) {
    e.some((r) => r.type === "characterData" && r.target === this.domNode) && (this.text = this.statics.value(this.domNode));
  }
  value() {
    return this.text;
  }
};
Pi.blotName = "text", Pi.scope = Z.INLINE_BLOT;
let Rp = Pi;
const cs = Rp, Lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attributor: pt,
  AttributorStore: ps,
  BlockBlot: hr,
  ClassAttributor: nt,
  ContainerBlot: ms,
  EmbedBlot: De,
  InlineBlot: lo,
  LeafBlot: Ce,
  ParentBlot: et,
  Registry: On,
  Scope: Z,
  ScrollBlot: ao,
  StyleAttributor: Ut,
  TextBlot: cs
}, Symbol.toStringTag, { value: "Module" }));
var zr = { exports: {} }, fi, rl;
function qp() {
  if (rl) return fi;
  rl = 1;
  var n = -1, e = 1, t = 0;
  function r(g, L, E, B, k) {
    if (g === L)
      return g ? [[t, g]] : [];
    if (E != null) {
      var T = le(g, L, E);
      if (T)
        return T;
    }
    var P = a(g, L), U = g.substring(0, P);
    g = g.substring(P), L = L.substring(P), P = u(g, L);
    var F = g.substring(g.length - P);
    g = g.substring(0, g.length - P), L = L.substring(0, L.length - P);
    var D = s(g, L);
    return U && D.unshift([t, U]), F && D.push([t, F]), R(D, k), B && m(D), D;
  }
  function s(g, L) {
    var E;
    if (!g)
      return [[e, L]];
    if (!L)
      return [[n, g]];
    var B = g.length > L.length ? g : L, k = g.length > L.length ? L : g, T = B.indexOf(k);
    if (T !== -1)
      return E = [
        [e, B.substring(0, T)],
        [t, k],
        [e, B.substring(T + k.length)]
      ], g.length > L.length && (E[0][0] = E[2][0] = n), E;
    if (k.length === 1)
      return [
        [n, g],
        [e, L]
      ];
    var P = f(g, L);
    if (P) {
      var U = P[0], F = P[1], D = P[2], x = P[3], j = P[4], H = r(U, D), V = r(F, x);
      return H.concat([[t, j]], V);
    }
    return i(g, L);
  }
  function i(g, L) {
    for (var E = g.length, B = L.length, k = Math.ceil((E + B) / 2), T = k, P = 2 * k, U = new Array(P), F = new Array(P), D = 0; D < P; D++)
      U[D] = -1, F[D] = -1;
    U[T + 1] = 0, F[T + 1] = 0;
    for (var x = E - B, j = x % 2 !== 0, H = 0, V = 0, I = 0, ce = 0, ee = 0; ee < k; ee++) {
      for (var Q = -ee + H; Q <= ee - V; Q += 2) {
        var te = T + Q, J;
        Q === -ee || Q !== ee && U[te - 1] < U[te + 1] ? J = U[te + 1] : J = U[te - 1] + 1;
        for (var ie = J - Q; J < E && ie < B && g.charAt(J) === L.charAt(ie); )
          J++, ie++;
        if (U[te] = J, J > E)
          V += 2;
        else if (ie > B)
          H += 2;
        else if (j) {
          var X = T + x - Q;
          if (X >= 0 && X < P && F[X] !== -1) {
            var ae = E - F[X];
            if (J >= ae)
              return o(g, L, J, ie);
          }
        }
      }
      for (var de = -ee + I; de <= ee - ce; de += 2) {
        var X = T + de, ae;
        de === -ee || de !== ee && F[X - 1] < F[X + 1] ? ae = F[X + 1] : ae = F[X - 1] + 1;
        for (var ye = ae - de; ae < E && ye < B && g.charAt(E - ae - 1) === L.charAt(B - ye - 1); )
          ae++, ye++;
        if (F[X] = ae, ae > E)
          ce += 2;
        else if (ye > B)
          I += 2;
        else if (!j) {
          var te = T + x - de;
          if (te >= 0 && te < P && U[te] !== -1) {
            var J = U[te], ie = T + J - te;
            if (ae = E - ae, J >= ae)
              return o(g, L, J, ie);
          }
        }
      }
    }
    return [
      [n, g],
      [e, L]
    ];
  }
  function o(g, L, E, B) {
    var k = g.substring(0, E), T = L.substring(0, B), P = g.substring(E), U = L.substring(B), F = r(k, T), D = r(P, U);
    return F.concat(D);
  }
  function a(g, L) {
    if (!g || !L || g.charAt(0) !== L.charAt(0))
      return 0;
    for (var E = 0, B = Math.min(g.length, L.length), k = B, T = 0; E < k; )
      g.substring(T, k) == L.substring(T, k) ? (E = k, T = E) : B = k, k = Math.floor((B - E) / 2 + E);
    return q(g.charCodeAt(k - 1)) && k--, k;
  }
  function c(g, L) {
    var E = g.length, B = L.length;
    if (E == 0 || B == 0)
      return 0;
    E > B ? g = g.substring(E - B) : E < B && (L = L.substring(0, E));
    var k = Math.min(E, B);
    if (g == L)
      return k;
    for (var T = 0, P = 1; ; ) {
      var U = g.substring(k - P), F = L.indexOf(U);
      if (F == -1)
        return T;
      P += F, (F == 0 || g.substring(k - P) == L.substring(0, P)) && (T = P, P++);
    }
  }
  function u(g, L) {
    if (!g || !L || g.slice(-1) !== L.slice(-1))
      return 0;
    for (var E = 0, B = Math.min(g.length, L.length), k = B, T = 0; E < k; )
      g.substring(g.length - k, g.length - T) == L.substring(L.length - k, L.length - T) ? (E = k, T = E) : B = k, k = Math.floor((B - E) / 2 + E);
    return M(g.charCodeAt(g.length - k)) && k--, k;
  }
  function f(g, L) {
    var E = g.length > L.length ? g : L, B = g.length > L.length ? L : g;
    if (E.length < 4 || B.length * 2 < E.length)
      return null;
    function k(V, I, ce) {
      for (var ee = V.substring(ce, ce + Math.floor(V.length / 4)), Q = -1, te = "", J, ie, X, ae; (Q = I.indexOf(ee, Q + 1)) !== -1; ) {
        var de = a(
          V.substring(ce),
          I.substring(Q)
        ), ye = u(
          V.substring(0, ce),
          I.substring(0, Q)
        );
        te.length < ye + de && (te = I.substring(Q - ye, Q) + I.substring(Q, Q + de), J = V.substring(0, ce - ye), ie = V.substring(ce + de), X = I.substring(0, Q - ye), ae = I.substring(Q + de));
      }
      return te.length * 2 >= V.length ? [
        J,
        ie,
        X,
        ae,
        te
      ] : null;
    }
    var T = k(
      E,
      B,
      Math.ceil(E.length / 4)
    ), P = k(
      E,
      B,
      Math.ceil(E.length / 2)
    ), U;
    if (!T && !P)
      return null;
    P ? T ? U = T[4].length > P[4].length ? T : P : U = P : U = T;
    var F, D, x, j;
    g.length > L.length ? (F = U[0], D = U[1], x = U[2], j = U[3]) : (x = U[0], j = U[1], F = U[2], D = U[3]);
    var H = U[4];
    return [F, D, x, j, H];
  }
  function m(g) {
    for (var L = !1, E = [], B = 0, k = null, T = 0, P = 0, U = 0, F = 0, D = 0; T < g.length; )
      g[T][0] == t ? (E[B++] = T, P = F, U = D, F = 0, D = 0, k = g[T][1]) : (g[T][0] == e ? F += g[T][1].length : D += g[T][1].length, k && k.length <= Math.max(P, U) && k.length <= Math.max(F, D) && (g.splice(E[B - 1], 0, [
        n,
        k
      ]), g[E[B - 1] + 1][0] = e, B--, B--, T = B > 0 ? E[B - 1] : -1, P = 0, U = 0, F = 0, D = 0, k = null, L = !0)), T++;
    for (L && R(g), A(g), T = 1; T < g.length; ) {
      if (g[T - 1][0] == n && g[T][0] == e) {
        var x = g[T - 1][1], j = g[T][1], H = c(x, j), V = c(j, x);
        H >= V ? (H >= x.length / 2 || H >= j.length / 2) && (g.splice(T, 0, [
          t,
          j.substring(0, H)
        ]), g[T - 1][1] = x.substring(
          0,
          x.length - H
        ), g[T + 1][1] = j.substring(H), T++) : (V >= x.length / 2 || V >= j.length / 2) && (g.splice(T, 0, [
          t,
          x.substring(0, V)
        ]), g[T - 1][0] = e, g[T - 1][1] = j.substring(
          0,
          j.length - V
        ), g[T + 1][0] = n, g[T + 1][1] = x.substring(V), T++), T++;
      }
      T++;
    }
  }
  var d = /[^a-zA-Z0-9]/, y = /\s/, p = /[\r\n]/, v = /\n\r?\n$/, w = /^\r?\n\r?\n/;
  function A(g) {
    function L(V, I) {
      if (!V || !I)
        return 6;
      var ce = V.charAt(V.length - 1), ee = I.charAt(0), Q = ce.match(d), te = ee.match(d), J = Q && ce.match(y), ie = te && ee.match(y), X = J && ce.match(p), ae = ie && ee.match(p), de = X && V.match(v), ye = ae && I.match(w);
      return de || ye ? 5 : X || ae ? 4 : Q && !J && ie ? 3 : J || ie ? 2 : Q || te ? 1 : 0;
    }
    for (var E = 1; E < g.length - 1; ) {
      if (g[E - 1][0] == t && g[E + 1][0] == t) {
        var B = g[E - 1][1], k = g[E][1], T = g[E + 1][1], P = u(B, k);
        if (P) {
          var U = k.substring(k.length - P);
          B = B.substring(0, B.length - P), k = U + k.substring(0, k.length - P), T = U + T;
        }
        for (var F = B, D = k, x = T, j = L(B, k) + L(k, T); k.charAt(0) === T.charAt(0); ) {
          B += k.charAt(0), k = k.substring(1) + T.charAt(0), T = T.substring(1);
          var H = L(B, k) + L(k, T);
          H >= j && (j = H, F = B, D = k, x = T);
        }
        g[E - 1][1] != F && (F ? g[E - 1][1] = F : (g.splice(E - 1, 1), E--), g[E][1] = D, x ? g[E + 1][1] = x : (g.splice(E + 1, 1), E--));
      }
      E++;
    }
  }
  function R(g, L) {
    g.push([t, ""]);
    for (var E = 0, B = 0, k = 0, T = "", P = "", U; E < g.length; ) {
      if (E < g.length - 1 && !g[E][1]) {
        g.splice(E, 1);
        continue;
      }
      switch (g[E][0]) {
        case e:
          k++, P += g[E][1], E++;
          break;
        case n:
          B++, T += g[E][1], E++;
          break;
        case t:
          var F = E - k - B - 1;
          if (L) {
            if (F >= 0 && z(g[F][1])) {
              var D = g[F][1].slice(-1);
              if (g[F][1] = g[F][1].slice(
                0,
                -1
              ), T = D + T, P = D + P, !g[F][1]) {
                g.splice(F, 1), E--;
                var x = F - 1;
                g[x] && g[x][0] === e && (k++, P = g[x][1] + P, x--), g[x] && g[x][0] === n && (B++, T = g[x][1] + T, x--), F = x;
              }
            }
            if (_(g[E][1])) {
              var D = g[E][1].charAt(0);
              g[E][1] = g[E][1].slice(1), T += D, P += D;
            }
          }
          if (E < g.length - 1 && !g[E][1]) {
            g.splice(E, 1);
            break;
          }
          if (T.length > 0 || P.length > 0) {
            T.length > 0 && P.length > 0 && (U = a(P, T), U !== 0 && (F >= 0 ? g[F][1] += P.substring(
              0,
              U
            ) : (g.splice(0, 0, [
              t,
              P.substring(0, U)
            ]), E++), P = P.substring(U), T = T.substring(U)), U = u(P, T), U !== 0 && (g[E][1] = P.substring(P.length - U) + g[E][1], P = P.substring(
              0,
              P.length - U
            ), T = T.substring(
              0,
              T.length - U
            )));
            var j = k + B;
            T.length === 0 && P.length === 0 ? (g.splice(E - j, j), E = E - j) : T.length === 0 ? (g.splice(E - j, j, [e, P]), E = E - j + 1) : P.length === 0 ? (g.splice(E - j, j, [n, T]), E = E - j + 1) : (g.splice(
              E - j,
              j,
              [n, T],
              [e, P]
            ), E = E - j + 2);
          }
          E !== 0 && g[E - 1][0] === t ? (g[E - 1][1] += g[E][1], g.splice(E, 1)) : E++, k = 0, B = 0, T = "", P = "";
          break;
      }
    }
    g[g.length - 1][1] === "" && g.pop();
    var H = !1;
    for (E = 1; E < g.length - 1; )
      g[E - 1][0] === t && g[E + 1][0] === t && (g[E][1].substring(
        g[E][1].length - g[E - 1][1].length
      ) === g[E - 1][1] ? (g[E][1] = g[E - 1][1] + g[E][1].substring(
        0,
        g[E][1].length - g[E - 1][1].length
      ), g[E + 1][1] = g[E - 1][1] + g[E + 1][1], g.splice(E - 1, 1), H = !0) : g[E][1].substring(0, g[E + 1][1].length) == g[E + 1][1] && (g[E - 1][1] += g[E + 1][1], g[E][1] = g[E][1].substring(g[E + 1][1].length) + g[E + 1][1], g.splice(E + 1, 1), H = !0)), E++;
    H && R(g, L);
  }
  function q(g) {
    return g >= 55296 && g <= 56319;
  }
  function M(g) {
    return g >= 56320 && g <= 57343;
  }
  function _(g) {
    return M(g.charCodeAt(0));
  }
  function z(g) {
    return q(g.charCodeAt(g.length - 1));
  }
  function K(g) {
    for (var L = [], E = 0; E < g.length; E++)
      g[E][1].length > 0 && L.push(g[E]);
    return L;
  }
  function re(g, L, E, B) {
    return z(g) || _(B) ? null : K([
      [t, g],
      [n, L],
      [e, E],
      [t, B]
    ]);
  }
  function le(g, L, E) {
    var B = typeof E == "number" ? { index: E, length: 0 } : E.oldRange, k = typeof E == "number" ? null : E.newRange, T = g.length, P = L.length;
    if (B.length === 0 && (k === null || k.length === 0)) {
      var U = B.index, F = g.slice(0, U), D = g.slice(U), x = k ? k.index : null;
      e: {
        var j = U + P - T;
        if (x !== null && x !== j || j < 0 || j > P)
          break e;
        var H = L.slice(0, j), V = L.slice(j);
        if (V !== D)
          break e;
        var I = Math.min(U, j), ce = F.slice(0, I), ee = H.slice(0, I);
        if (ce !== ee)
          break e;
        var Q = F.slice(I), te = H.slice(I);
        return re(ce, Q, te, D);
      }
      e: {
        if (x !== null && x !== U)
          break e;
        var J = U, H = L.slice(0, J), V = L.slice(J);
        if (H !== F)
          break e;
        var ie = Math.min(T - J, P - J), X = D.slice(D.length - ie), ae = V.slice(V.length - ie);
        if (X !== ae)
          break e;
        var Q = D.slice(0, D.length - ie), te = V.slice(0, V.length - ie);
        return re(F, Q, te, X);
      }
    }
    if (B.length > 0 && k && k.length === 0)
      e: {
        var ce = g.slice(0, B.index), X = g.slice(B.index + B.length), I = ce.length, ie = X.length;
        if (P < I + ie)
          break e;
        var ee = L.slice(0, I), ae = L.slice(P - ie);
        if (ce !== ee || X !== ae)
          break e;
        var Q = g.slice(I, T - ie), te = L.slice(I, P - ie);
        return re(ce, Q, te, X);
      }
    return null;
  }
  function me(g, L, E, B) {
    return r(g, L, E, B, !0);
  }
  return me.INSERT = e, me.DELETE = n, me.EQUAL = t, fi = me, fi;
}
var er = { exports: {} };
er.exports;
var sl;
function Oa() {
  return sl || (sl = 1, (function(n, e) {
    var t = 200, r = "__lodash_hash_undefined__", s = 9007199254740991, i = "[object Arguments]", o = "[object Array]", a = "[object Boolean]", c = "[object Date]", u = "[object Error]", f = "[object Function]", m = "[object GeneratorFunction]", d = "[object Map]", y = "[object Number]", p = "[object Object]", v = "[object Promise]", w = "[object RegExp]", A = "[object Set]", R = "[object String]", q = "[object Symbol]", M = "[object WeakMap]", _ = "[object ArrayBuffer]", z = "[object DataView]", K = "[object Float32Array]", re = "[object Float64Array]", le = "[object Int8Array]", me = "[object Int16Array]", g = "[object Int32Array]", L = "[object Uint8Array]", E = "[object Uint8ClampedArray]", B = "[object Uint16Array]", k = "[object Uint32Array]", T = /[\\^$.*+?()[\]{}|]/g, P = /\w*$/, U = /^\[object .+?Constructor\]$/, F = /^(?:0|[1-9]\d*)$/, D = {};
    D[i] = D[o] = D[_] = D[z] = D[a] = D[c] = D[K] = D[re] = D[le] = D[me] = D[g] = D[d] = D[y] = D[p] = D[w] = D[A] = D[R] = D[q] = D[L] = D[E] = D[B] = D[k] = !0, D[u] = D[f] = D[M] = !1;
    var x = typeof kt == "object" && kt && kt.Object === Object && kt, j = typeof self == "object" && self && self.Object === Object && self, H = x || j || Function("return this")(), V = e && !e.nodeType && e, I = V && !0 && n && !n.nodeType && n, ce = I && I.exports === V;
    function ee(l, h) {
      return l.set(h[0], h[1]), l;
    }
    function Q(l, h) {
      return l.add(h), l;
    }
    function te(l, h) {
      for (var b = -1, S = l ? l.length : 0; ++b < S && h(l[b], b, l) !== !1; )
        ;
      return l;
    }
    function J(l, h) {
      for (var b = -1, S = h.length, oe = l.length; ++b < S; )
        l[oe + b] = h[b];
      return l;
    }
    function ie(l, h, b, S) {
      for (var oe = -1, Y = l ? l.length : 0; ++oe < Y; )
        b = h(b, l[oe], oe, l);
      return b;
    }
    function X(l, h) {
      for (var b = -1, S = Array(l); ++b < l; )
        S[b] = h(b);
      return S;
    }
    function ae(l, h) {
      return l == null ? void 0 : l[h];
    }
    function de(l) {
      var h = !1;
      if (l != null && typeof l.toString != "function")
        try {
          h = !!(l + "");
        } catch {
        }
      return h;
    }
    function ye(l) {
      var h = -1, b = Array(l.size);
      return l.forEach(function(S, oe) {
        b[++h] = [oe, S];
      }), b;
    }
    function bt(l, h) {
      return function(b) {
        return l(h(b));
      };
    }
    function Ve(l) {
      var h = -1, b = Array(l.size);
      return l.forEach(function(S) {
        b[++h] = S;
      }), b;
    }
    var ot = Array.prototype, Rt = Function.prototype, se = Object.prototype, Ge = H["__core-js_shared__"], $t = (function() {
      var l = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "");
      return l ? "Symbol(src)_1." + l : "";
    })(), Ft = Rt.toString, Me = se.hasOwnProperty, yt = se.toString, an = RegExp(
      "^" + Ft.call(Me).replace(T, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), lt = ce ? H.Buffer : void 0, vt = H.Symbol, be = H.Uint8Array, qe = bt(Object.getPrototypeOf, Object), Tr = Object.create, Sr = se.propertyIsEnumerable, As = ot.splice, jn = Object.getOwnPropertySymbols, cn = lt ? lt.isBuffer : void 0, _r = bt(Object.keys, Object), un = Ze(H, "DataView"), Ht = Ze(H, "Map"), We = Ze(H, "Promise"), hn = Ze(H, "Set"), Bn = Ze(H, "WeakMap"), zt = Ze(Object, "create"), Pn = Ie(un), Kt = Ie(Ht), Mn = Ie(We), Dn = Ie(hn), Un = Ie(Bn), Lt = vt ? vt.prototype : void 0, Or = Lt ? Lt.valueOf : void 0;
    function wt(l) {
      var h = -1, b = l ? l.length : 0;
      for (this.clear(); ++h < b; ) {
        var S = l[h];
        this.set(S[0], S[1]);
      }
    }
    function Ts() {
      this.__data__ = zt ? zt(null) : {};
    }
    function Ss(l) {
      return this.has(l) && delete this.__data__[l];
    }
    function _s(l) {
      var h = this.__data__;
      if (zt) {
        var b = h[l];
        return b === r ? void 0 : b;
      }
      return Me.call(h, l) ? h[l] : void 0;
    }
    function Cr(l) {
      var h = this.__data__;
      return zt ? h[l] !== void 0 : Me.call(h, l);
    }
    function $n(l, h) {
      var b = this.__data__;
      return b[l] = zt && h === void 0 ? r : h, this;
    }
    wt.prototype.clear = Ts, wt.prototype.delete = Ss, wt.prototype.get = _s, wt.prototype.has = Cr, wt.prototype.set = $n;
    function xe(l) {
      var h = -1, b = l ? l.length : 0;
      for (this.clear(); ++h < b; ) {
        var S = l[h];
        this.set(S[0], S[1]);
      }
    }
    function Os() {
      this.__data__ = [];
    }
    function Cs(l) {
      var h = this.__data__, b = dn(h, l);
      if (b < 0)
        return !1;
      var S = h.length - 1;
      return b == S ? h.pop() : As.call(h, b, 1), !0;
    }
    function Rs(l) {
      var h = this.__data__, b = dn(h, l);
      return b < 0 ? void 0 : h[b][1];
    }
    function Ls(l) {
      return dn(this.__data__, l) > -1;
    }
    function qs(l, h) {
      var b = this.__data__, S = dn(b, l);
      return S < 0 ? b.push([l, h]) : b[S][1] = h, this;
    }
    xe.prototype.clear = Os, xe.prototype.delete = Cs, xe.prototype.get = Rs, xe.prototype.has = Ls, xe.prototype.set = qs;
    function Te(l) {
      var h = -1, b = l ? l.length : 0;
      for (this.clear(); ++h < b; ) {
        var S = l[h];
        this.set(S[0], S[1]);
      }
    }
    function Is() {
      this.__data__ = {
        hash: new wt(),
        map: new (Ht || xe)(),
        string: new wt()
      };
    }
    function ks(l) {
      return Gt(this, l).delete(l);
    }
    function js(l) {
      return Gt(this, l).get(l);
    }
    function Bs(l) {
      return Gt(this, l).has(l);
    }
    function Ps(l, h) {
      return Gt(this, l).set(l, h), this;
    }
    Te.prototype.clear = Is, Te.prototype.delete = ks, Te.prototype.get = js, Te.prototype.has = Bs, Te.prototype.set = Ps;
    function ke(l) {
      this.__data__ = new xe(l);
    }
    function Ms() {
      this.__data__ = new xe();
    }
    function Ds(l) {
      return this.__data__.delete(l);
    }
    function Us(l) {
      return this.__data__.get(l);
    }
    function $s(l) {
      return this.__data__.has(l);
    }
    function Fs(l, h) {
      var b = this.__data__;
      if (b instanceof xe) {
        var S = b.__data__;
        if (!Ht || S.length < t - 1)
          return S.push([l, h]), this;
        b = this.__data__ = new Te(S);
      }
      return b.set(l, h), this;
    }
    ke.prototype.clear = Ms, ke.prototype.delete = Ds, ke.prototype.get = Us, ke.prototype.has = $s, ke.prototype.set = Fs;
    function fn(l, h) {
      var b = Kn(l) || mn(l) ? X(l.length, String) : [], S = b.length, oe = !!S;
      for (var Y in l)
        Me.call(l, Y) && !(oe && (Y == "length" || ni(Y, S))) && b.push(Y);
      return b;
    }
    function Rr(l, h, b) {
      var S = l[h];
      (!(Me.call(l, h) && jr(S, b)) || b === void 0 && !(h in l)) && (l[h] = b);
    }
    function dn(l, h) {
      for (var b = l.length; b--; )
        if (jr(l[b][0], h))
          return b;
      return -1;
    }
    function at(l, h) {
      return l && zn(h, Gn(h), l);
    }
    function Fn(l, h, b, S, oe, Y, he) {
      var ue;
      if (S && (ue = Y ? S(l, oe, Y, he) : S(l)), ue !== void 0)
        return ue;
      if (!ut(l))
        return l;
      var we = Kn(l);
      if (we) {
        if (ue = ei(l), !h)
          return Ys(l, ue);
      } else {
        var fe = xt(l), Se = fe == f || fe == m;
        if (Br(l))
          return pn(l, h);
        if (fe == p || fe == i || Se && !Y) {
          if (de(l))
            return Y ? l : {};
          if (ue = ct(Se ? {} : l), !h)
            return Xs(l, at(ue, l));
        } else {
          if (!D[fe])
            return Y ? l : {};
          ue = ti(l, fe, Fn, h);
        }
      }
      he || (he = new ke());
      var je = he.get(l);
      if (je)
        return je;
      if (he.set(l, ue), !we)
        var Ee = b ? Qs(l) : Gn(l);
      return te(Ee || l, function(_e, Ne) {
        Ee && (Ne = _e, _e = l[Ne]), Rr(ue, Ne, Fn(_e, h, b, S, Ne, l, he));
      }), ue;
    }
    function Hs(l) {
      return ut(l) ? Tr(l) : {};
    }
    function zs(l, h, b) {
      var S = h(l);
      return Kn(l) ? S : J(S, b(l));
    }
    function Ks(l) {
      return yt.call(l);
    }
    function Vs(l) {
      if (!ut(l) || si(l))
        return !1;
      var h = Vn(l) || de(l) ? an : U;
      return h.test(Ie(l));
    }
    function Gs(l) {
      if (!Ir(l))
        return _r(l);
      var h = [];
      for (var b in Object(l))
        Me.call(l, b) && b != "constructor" && h.push(b);
      return h;
    }
    function pn(l, h) {
      if (h)
        return l.slice();
      var b = new l.constructor(l.length);
      return l.copy(b), b;
    }
    function Hn(l) {
      var h = new l.constructor(l.byteLength);
      return new be(h).set(new be(l)), h;
    }
    function Vt(l, h) {
      var b = h ? Hn(l.buffer) : l.buffer;
      return new l.constructor(b, l.byteOffset, l.byteLength);
    }
    function Lr(l, h, b) {
      var S = h ? b(ye(l), !0) : ye(l);
      return ie(S, ee, new l.constructor());
    }
    function qr(l) {
      var h = new l.constructor(l.source, P.exec(l));
      return h.lastIndex = l.lastIndex, h;
    }
    function Ws(l, h, b) {
      var S = h ? b(Ve(l), !0) : Ve(l);
      return ie(S, Q, new l.constructor());
    }
    function Zs(l) {
      return Or ? Object(Or.call(l)) : {};
    }
    function Js(l, h) {
      var b = h ? Hn(l.buffer) : l.buffer;
      return new l.constructor(b, l.byteOffset, l.length);
    }
    function Ys(l, h) {
      var b = -1, S = l.length;
      for (h || (h = Array(S)); ++b < S; )
        h[b] = l[b];
      return h;
    }
    function zn(l, h, b, S) {
      b || (b = {});
      for (var oe = -1, Y = h.length; ++oe < Y; ) {
        var he = h[oe], ue = void 0;
        Rr(b, he, ue === void 0 ? l[he] : ue);
      }
      return b;
    }
    function Xs(l, h) {
      return zn(l, Et(l), h);
    }
    function Qs(l) {
      return zs(l, Gn, Et);
    }
    function Gt(l, h) {
      var b = l.__data__;
      return ri(h) ? b[typeof h == "string" ? "string" : "hash"] : b.map;
    }
    function Ze(l, h) {
      var b = ae(l, h);
      return Vs(b) ? b : void 0;
    }
    var Et = jn ? bt(jn, Object) : oi, xt = Ks;
    (un && xt(new un(new ArrayBuffer(1))) != z || Ht && xt(new Ht()) != d || We && xt(We.resolve()) != v || hn && xt(new hn()) != A || Bn && xt(new Bn()) != M) && (xt = function(l) {
      var h = yt.call(l), b = h == p ? l.constructor : void 0, S = b ? Ie(b) : void 0;
      if (S)
        switch (S) {
          case Pn:
            return z;
          case Kt:
            return d;
          case Mn:
            return v;
          case Dn:
            return A;
          case Un:
            return M;
        }
      return h;
    });
    function ei(l) {
      var h = l.length, b = l.constructor(h);
      return h && typeof l[0] == "string" && Me.call(l, "index") && (b.index = l.index, b.input = l.input), b;
    }
    function ct(l) {
      return typeof l.constructor == "function" && !Ir(l) ? Hs(qe(l)) : {};
    }
    function ti(l, h, b, S) {
      var oe = l.constructor;
      switch (h) {
        case _:
          return Hn(l);
        case a:
        case c:
          return new oe(+l);
        case z:
          return Vt(l, S);
        case K:
        case re:
        case le:
        case me:
        case g:
        case L:
        case E:
        case B:
        case k:
          return Js(l, S);
        case d:
          return Lr(l, S, b);
        case y:
        case R:
          return new oe(l);
        case w:
          return qr(l);
        case A:
          return Ws(l, S, b);
        case q:
          return Zs(l);
      }
    }
    function ni(l, h) {
      return h = h ?? s, !!h && (typeof l == "number" || F.test(l)) && l > -1 && l % 1 == 0 && l < h;
    }
    function ri(l) {
      var h = typeof l;
      return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? l !== "__proto__" : l === null;
    }
    function si(l) {
      return !!$t && $t in l;
    }
    function Ir(l) {
      var h = l && l.constructor, b = typeof h == "function" && h.prototype || se;
      return l === b;
    }
    function Ie(l) {
      if (l != null) {
        try {
          return Ft.call(l);
        } catch {
        }
        try {
          return l + "";
        } catch {
        }
      }
      return "";
    }
    function kr(l) {
      return Fn(l, !0, !0);
    }
    function jr(l, h) {
      return l === h || l !== l && h !== h;
    }
    function mn(l) {
      return ii(l) && Me.call(l, "callee") && (!Sr.call(l, "callee") || yt.call(l) == i);
    }
    var Kn = Array.isArray;
    function gn(l) {
      return l != null && Pr(l.length) && !Vn(l);
    }
    function ii(l) {
      return Mr(l) && gn(l);
    }
    var Br = cn || li;
    function Vn(l) {
      var h = ut(l) ? yt.call(l) : "";
      return h == f || h == m;
    }
    function Pr(l) {
      return typeof l == "number" && l > -1 && l % 1 == 0 && l <= s;
    }
    function ut(l) {
      var h = typeof l;
      return !!l && (h == "object" || h == "function");
    }
    function Mr(l) {
      return !!l && typeof l == "object";
    }
    function Gn(l) {
      return gn(l) ? fn(l) : Gs(l);
    }
    function oi() {
      return [];
    }
    function li() {
      return !1;
    }
    n.exports = kr;
  })(er, er.exports)), er.exports;
}
var tr = { exports: {} };
tr.exports;
var il;
function Ca() {
  return il || (il = 1, (function(n, e) {
    var t = 200, r = "__lodash_hash_undefined__", s = 1, i = 2, o = 9007199254740991, a = "[object Arguments]", c = "[object Array]", u = "[object AsyncFunction]", f = "[object Boolean]", m = "[object Date]", d = "[object Error]", y = "[object Function]", p = "[object GeneratorFunction]", v = "[object Map]", w = "[object Number]", A = "[object Null]", R = "[object Object]", q = "[object Promise]", M = "[object Proxy]", _ = "[object RegExp]", z = "[object Set]", K = "[object String]", re = "[object Symbol]", le = "[object Undefined]", me = "[object WeakMap]", g = "[object ArrayBuffer]", L = "[object DataView]", E = "[object Float32Array]", B = "[object Float64Array]", k = "[object Int8Array]", T = "[object Int16Array]", P = "[object Int32Array]", U = "[object Uint8Array]", F = "[object Uint8ClampedArray]", D = "[object Uint16Array]", x = "[object Uint32Array]", j = /[\\^$.*+?()[\]{}|]/g, H = /^\[object .+?Constructor\]$/, V = /^(?:0|[1-9]\d*)$/, I = {};
    I[E] = I[B] = I[k] = I[T] = I[P] = I[U] = I[F] = I[D] = I[x] = !0, I[a] = I[c] = I[g] = I[f] = I[L] = I[m] = I[d] = I[y] = I[v] = I[w] = I[R] = I[_] = I[z] = I[K] = I[me] = !1;
    var ce = typeof kt == "object" && kt && kt.Object === Object && kt, ee = typeof self == "object" && self && self.Object === Object && self, Q = ce || ee || Function("return this")(), te = e && !e.nodeType && e, J = te && !0 && n && !n.nodeType && n, ie = J && J.exports === te, X = ie && ce.process, ae = (function() {
      try {
        return X && X.binding && X.binding("util");
      } catch {
      }
    })(), de = ae && ae.isTypedArray;
    function ye(l, h) {
      for (var b = -1, S = l == null ? 0 : l.length, oe = 0, Y = []; ++b < S; ) {
        var he = l[b];
        h(he, b, l) && (Y[oe++] = he);
      }
      return Y;
    }
    function bt(l, h) {
      for (var b = -1, S = h.length, oe = l.length; ++b < S; )
        l[oe + b] = h[b];
      return l;
    }
    function Ve(l, h) {
      for (var b = -1, S = l == null ? 0 : l.length; ++b < S; )
        if (h(l[b], b, l))
          return !0;
      return !1;
    }
    function ot(l, h) {
      for (var b = -1, S = Array(l); ++b < l; )
        S[b] = h(b);
      return S;
    }
    function Rt(l) {
      return function(h) {
        return l(h);
      };
    }
    function se(l, h) {
      return l.has(h);
    }
    function Ge(l, h) {
      return l == null ? void 0 : l[h];
    }
    function $t(l) {
      var h = -1, b = Array(l.size);
      return l.forEach(function(S, oe) {
        b[++h] = [oe, S];
      }), b;
    }
    function Ft(l, h) {
      return function(b) {
        return l(h(b));
      };
    }
    function Me(l) {
      var h = -1, b = Array(l.size);
      return l.forEach(function(S) {
        b[++h] = S;
      }), b;
    }
    var yt = Array.prototype, an = Function.prototype, lt = Object.prototype, vt = Q["__core-js_shared__"], be = an.toString, qe = lt.hasOwnProperty, Tr = (function() {
      var l = /[^.]+$/.exec(vt && vt.keys && vt.keys.IE_PROTO || "");
      return l ? "Symbol(src)_1." + l : "";
    })(), Sr = lt.toString, As = RegExp(
      "^" + be.call(qe).replace(j, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    ), jn = ie ? Q.Buffer : void 0, cn = Q.Symbol, _r = Q.Uint8Array, un = lt.propertyIsEnumerable, Ht = yt.splice, We = cn ? cn.toStringTag : void 0, hn = Object.getOwnPropertySymbols, Bn = jn ? jn.isBuffer : void 0, zt = Ft(Object.keys, Object), Pn = Et(Q, "DataView"), Kt = Et(Q, "Map"), Mn = Et(Q, "Promise"), Dn = Et(Q, "Set"), Un = Et(Q, "WeakMap"), Lt = Et(Object, "create"), Or = Ie(Pn), wt = Ie(Kt), Ts = Ie(Mn), Ss = Ie(Dn), _s = Ie(Un), Cr = cn ? cn.prototype : void 0, $n = Cr ? Cr.valueOf : void 0;
    function xe(l) {
      var h = -1, b = l == null ? 0 : l.length;
      for (this.clear(); ++h < b; ) {
        var S = l[h];
        this.set(S[0], S[1]);
      }
    }
    function Os() {
      this.__data__ = Lt ? Lt(null) : {}, this.size = 0;
    }
    function Cs(l) {
      var h = this.has(l) && delete this.__data__[l];
      return this.size -= h ? 1 : 0, h;
    }
    function Rs(l) {
      var h = this.__data__;
      if (Lt) {
        var b = h[l];
        return b === r ? void 0 : b;
      }
      return qe.call(h, l) ? h[l] : void 0;
    }
    function Ls(l) {
      var h = this.__data__;
      return Lt ? h[l] !== void 0 : qe.call(h, l);
    }
    function qs(l, h) {
      var b = this.__data__;
      return this.size += this.has(l) ? 0 : 1, b[l] = Lt && h === void 0 ? r : h, this;
    }
    xe.prototype.clear = Os, xe.prototype.delete = Cs, xe.prototype.get = Rs, xe.prototype.has = Ls, xe.prototype.set = qs;
    function Te(l) {
      var h = -1, b = l == null ? 0 : l.length;
      for (this.clear(); ++h < b; ) {
        var S = l[h];
        this.set(S[0], S[1]);
      }
    }
    function Is() {
      this.__data__ = [], this.size = 0;
    }
    function ks(l) {
      var h = this.__data__, b = pn(h, l);
      if (b < 0)
        return !1;
      var S = h.length - 1;
      return b == S ? h.pop() : Ht.call(h, b, 1), --this.size, !0;
    }
    function js(l) {
      var h = this.__data__, b = pn(h, l);
      return b < 0 ? void 0 : h[b][1];
    }
    function Bs(l) {
      return pn(this.__data__, l) > -1;
    }
    function Ps(l, h) {
      var b = this.__data__, S = pn(b, l);
      return S < 0 ? (++this.size, b.push([l, h])) : b[S][1] = h, this;
    }
    Te.prototype.clear = Is, Te.prototype.delete = ks, Te.prototype.get = js, Te.prototype.has = Bs, Te.prototype.set = Ps;
    function ke(l) {
      var h = -1, b = l == null ? 0 : l.length;
      for (this.clear(); ++h < b; ) {
        var S = l[h];
        this.set(S[0], S[1]);
      }
    }
    function Ms() {
      this.size = 0, this.__data__ = {
        hash: new xe(),
        map: new (Kt || Te)(),
        string: new xe()
      };
    }
    function Ds(l) {
      var h = Ze(this, l).delete(l);
      return this.size -= h ? 1 : 0, h;
    }
    function Us(l) {
      return Ze(this, l).get(l);
    }
    function $s(l) {
      return Ze(this, l).has(l);
    }
    function Fs(l, h) {
      var b = Ze(this, l), S = b.size;
      return b.set(l, h), this.size += b.size == S ? 0 : 1, this;
    }
    ke.prototype.clear = Ms, ke.prototype.delete = Ds, ke.prototype.get = Us, ke.prototype.has = $s, ke.prototype.set = Fs;
    function fn(l) {
      var h = -1, b = l == null ? 0 : l.length;
      for (this.__data__ = new ke(); ++h < b; )
        this.add(l[h]);
    }
    function Rr(l) {
      return this.__data__.set(l, r), this;
    }
    function dn(l) {
      return this.__data__.has(l);
    }
    fn.prototype.add = fn.prototype.push = Rr, fn.prototype.has = dn;
    function at(l) {
      var h = this.__data__ = new Te(l);
      this.size = h.size;
    }
    function Fn() {
      this.__data__ = new Te(), this.size = 0;
    }
    function Hs(l) {
      var h = this.__data__, b = h.delete(l);
      return this.size = h.size, b;
    }
    function zs(l) {
      return this.__data__.get(l);
    }
    function Ks(l) {
      return this.__data__.has(l);
    }
    function Vs(l, h) {
      var b = this.__data__;
      if (b instanceof Te) {
        var S = b.__data__;
        if (!Kt || S.length < t - 1)
          return S.push([l, h]), this.size = ++b.size, this;
        b = this.__data__ = new ke(S);
      }
      return b.set(l, h), this.size = b.size, this;
    }
    at.prototype.clear = Fn, at.prototype.delete = Hs, at.prototype.get = zs, at.prototype.has = Ks, at.prototype.set = Vs;
    function Gs(l, h) {
      var b = mn(l), S = !b && jr(l), oe = !b && !S && gn(l), Y = !b && !S && !oe && Mr(l), he = b || S || oe || Y, ue = he ? ot(l.length, String) : [], we = ue.length;
      for (var fe in l)
        qe.call(l, fe) && !(he && // Safari 9 has enumerable `arguments.length` in strict mode.
        (fe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        oe && (fe == "offset" || fe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        Y && (fe == "buffer" || fe == "byteLength" || fe == "byteOffset") || // Skip index properties.
        ti(fe, we))) && ue.push(fe);
      return ue;
    }
    function pn(l, h) {
      for (var b = l.length; b--; )
        if (kr(l[b][0], h))
          return b;
      return -1;
    }
    function Hn(l, h, b) {
      var S = h(l);
      return mn(l) ? S : bt(S, b(l));
    }
    function Vt(l) {
      return l == null ? l === void 0 ? le : A : We && We in Object(l) ? xt(l) : Ir(l);
    }
    function Lr(l) {
      return ut(l) && Vt(l) == a;
    }
    function qr(l, h, b, S, oe) {
      return l === h ? !0 : l == null || h == null || !ut(l) && !ut(h) ? l !== l && h !== h : Ws(l, h, b, S, qr, oe);
    }
    function Ws(l, h, b, S, oe, Y) {
      var he = mn(l), ue = mn(h), we = he ? c : ct(l), fe = ue ? c : ct(h);
      we = we == a ? R : we, fe = fe == a ? R : fe;
      var Se = we == R, je = fe == R, Ee = we == fe;
      if (Ee && gn(l)) {
        if (!gn(h))
          return !1;
        he = !0, Se = !1;
      }
      if (Ee && !Se)
        return Y || (Y = new at()), he || Mr(l) ? zn(l, h, b, S, oe, Y) : Xs(l, h, we, b, S, oe, Y);
      if (!(b & s)) {
        var _e = Se && qe.call(l, "__wrapped__"), Ne = je && qe.call(h, "__wrapped__");
        if (_e || Ne) {
          var qt = _e ? l.value() : l, Nt = Ne ? h.value() : h;
          return Y || (Y = new at()), oe(qt, Nt, b, S, Y);
        }
      }
      return Ee ? (Y || (Y = new at()), Qs(l, h, b, S, oe, Y)) : !1;
    }
    function Zs(l) {
      if (!Pr(l) || ri(l))
        return !1;
      var h = Br(l) ? As : H;
      return h.test(Ie(l));
    }
    function Js(l) {
      return ut(l) && Vn(l.length) && !!I[Vt(l)];
    }
    function Ys(l) {
      if (!si(l))
        return zt(l);
      var h = [];
      for (var b in Object(l))
        qe.call(l, b) && b != "constructor" && h.push(b);
      return h;
    }
    function zn(l, h, b, S, oe, Y) {
      var he = b & s, ue = l.length, we = h.length;
      if (ue != we && !(he && we > ue))
        return !1;
      var fe = Y.get(l);
      if (fe && Y.get(h))
        return fe == h;
      var Se = -1, je = !0, Ee = b & i ? new fn() : void 0;
      for (Y.set(l, h), Y.set(h, l); ++Se < ue; ) {
        var _e = l[Se], Ne = h[Se];
        if (S)
          var qt = he ? S(Ne, _e, Se, h, l, Y) : S(_e, Ne, Se, l, h, Y);
        if (qt !== void 0) {
          if (qt)
            continue;
          je = !1;
          break;
        }
        if (Ee) {
          if (!Ve(h, function(Nt, Wt) {
            if (!se(Ee, Wt) && (_e === Nt || oe(_e, Nt, b, S, Y)))
              return Ee.push(Wt);
          })) {
            je = !1;
            break;
          }
        } else if (!(_e === Ne || oe(_e, Ne, b, S, Y))) {
          je = !1;
          break;
        }
      }
      return Y.delete(l), Y.delete(h), je;
    }
    function Xs(l, h, b, S, oe, Y, he) {
      switch (b) {
        case L:
          if (l.byteLength != h.byteLength || l.byteOffset != h.byteOffset)
            return !1;
          l = l.buffer, h = h.buffer;
        case g:
          return !(l.byteLength != h.byteLength || !Y(new _r(l), new _r(h)));
        case f:
        case m:
        case w:
          return kr(+l, +h);
        case d:
          return l.name == h.name && l.message == h.message;
        case _:
        case K:
          return l == h + "";
        case v:
          var ue = $t;
        case z:
          var we = S & s;
          if (ue || (ue = Me), l.size != h.size && !we)
            return !1;
          var fe = he.get(l);
          if (fe)
            return fe == h;
          S |= i, he.set(l, h);
          var Se = zn(ue(l), ue(h), S, oe, Y, he);
          return he.delete(l), Se;
        case re:
          if ($n)
            return $n.call(l) == $n.call(h);
      }
      return !1;
    }
    function Qs(l, h, b, S, oe, Y) {
      var he = b & s, ue = Gt(l), we = ue.length, fe = Gt(h), Se = fe.length;
      if (we != Se && !he)
        return !1;
      for (var je = we; je--; ) {
        var Ee = ue[je];
        if (!(he ? Ee in h : qe.call(h, Ee)))
          return !1;
      }
      var _e = Y.get(l);
      if (_e && Y.get(h))
        return _e == h;
      var Ne = !0;
      Y.set(l, h), Y.set(h, l);
      for (var qt = he; ++je < we; ) {
        Ee = ue[je];
        var Nt = l[Ee], Wt = h[Ee];
        if (S)
          var So = he ? S(Wt, Nt, Ee, h, l, Y) : S(Nt, Wt, Ee, l, h, Y);
        if (!(So === void 0 ? Nt === Wt || oe(Nt, Wt, b, S, Y) : So)) {
          Ne = !1;
          break;
        }
        qt || (qt = Ee == "constructor");
      }
      if (Ne && !qt) {
        var Dr = l.constructor, Ur = h.constructor;
        Dr != Ur && "constructor" in l && "constructor" in h && !(typeof Dr == "function" && Dr instanceof Dr && typeof Ur == "function" && Ur instanceof Ur) && (Ne = !1);
      }
      return Y.delete(l), Y.delete(h), Ne;
    }
    function Gt(l) {
      return Hn(l, Gn, ei);
    }
    function Ze(l, h) {
      var b = l.__data__;
      return ni(h) ? b[typeof h == "string" ? "string" : "hash"] : b.map;
    }
    function Et(l, h) {
      var b = Ge(l, h);
      return Zs(b) ? b : void 0;
    }
    function xt(l) {
      var h = qe.call(l, We), b = l[We];
      try {
        l[We] = void 0;
        var S = !0;
      } catch {
      }
      var oe = Sr.call(l);
      return S && (h ? l[We] = b : delete l[We]), oe;
    }
    var ei = hn ? function(l) {
      return l == null ? [] : (l = Object(l), ye(hn(l), function(h) {
        return un.call(l, h);
      }));
    } : oi, ct = Vt;
    (Pn && ct(new Pn(new ArrayBuffer(1))) != L || Kt && ct(new Kt()) != v || Mn && ct(Mn.resolve()) != q || Dn && ct(new Dn()) != z || Un && ct(new Un()) != me) && (ct = function(l) {
      var h = Vt(l), b = h == R ? l.constructor : void 0, S = b ? Ie(b) : "";
      if (S)
        switch (S) {
          case Or:
            return L;
          case wt:
            return v;
          case Ts:
            return q;
          case Ss:
            return z;
          case _s:
            return me;
        }
      return h;
    });
    function ti(l, h) {
      return h = h ?? o, !!h && (typeof l == "number" || V.test(l)) && l > -1 && l % 1 == 0 && l < h;
    }
    function ni(l) {
      var h = typeof l;
      return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? l !== "__proto__" : l === null;
    }
    function ri(l) {
      return !!Tr && Tr in l;
    }
    function si(l) {
      var h = l && l.constructor, b = typeof h == "function" && h.prototype || lt;
      return l === b;
    }
    function Ir(l) {
      return Sr.call(l);
    }
    function Ie(l) {
      if (l != null) {
        try {
          return be.call(l);
        } catch {
        }
        try {
          return l + "";
        } catch {
        }
      }
      return "";
    }
    function kr(l, h) {
      return l === h || l !== l && h !== h;
    }
    var jr = Lr(/* @__PURE__ */ (function() {
      return arguments;
    })()) ? Lr : function(l) {
      return ut(l) && qe.call(l, "callee") && !un.call(l, "callee");
    }, mn = Array.isArray;
    function Kn(l) {
      return l != null && Vn(l.length) && !Br(l);
    }
    var gn = Bn || li;
    function ii(l, h) {
      return qr(l, h);
    }
    function Br(l) {
      if (!Pr(l))
        return !1;
      var h = Vt(l);
      return h == y || h == p || h == u || h == M;
    }
    function Vn(l) {
      return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
    }
    function Pr(l) {
      var h = typeof l;
      return l != null && (h == "object" || h == "function");
    }
    function ut(l) {
      return l != null && typeof l == "object";
    }
    var Mr = de ? Rt(de) : Js;
    function Gn(l) {
      return Kn(l) ? Gs(l) : Ys(l);
    }
    function oi() {
      return [];
    }
    function li() {
      return !1;
    }
    n.exports = ii;
  })(tr, tr.exports)), tr.exports;
}
var Kr = {}, ol;
function Ip() {
  if (ol) return Kr;
  ol = 1, Object.defineProperty(Kr, "__esModule", { value: !0 });
  const n = Oa(), e = Ca();
  var t;
  return (function(r) {
    function s(c = {}, u = {}, f = !1) {
      typeof c != "object" && (c = {}), typeof u != "object" && (u = {});
      let m = n(u);
      f || (m = Object.keys(m).reduce((d, y) => (m[y] != null && (d[y] = m[y]), d), {}));
      for (const d in c)
        c[d] !== void 0 && u[d] === void 0 && (m[d] = c[d]);
      return Object.keys(m).length > 0 ? m : void 0;
    }
    r.compose = s;
    function i(c = {}, u = {}) {
      typeof c != "object" && (c = {}), typeof u != "object" && (u = {});
      const f = Object.keys(c).concat(Object.keys(u)).reduce((m, d) => (e(c[d], u[d]) || (m[d] = u[d] === void 0 ? null : u[d]), m), {});
      return Object.keys(f).length > 0 ? f : void 0;
    }
    r.diff = i;
    function o(c = {}, u = {}) {
      c = c || {};
      const f = Object.keys(u).reduce((m, d) => (u[d] !== c[d] && c[d] !== void 0 && (m[d] = u[d]), m), {});
      return Object.keys(c).reduce((m, d) => (c[d] !== u[d] && u[d] === void 0 && (m[d] = null), m), f);
    }
    r.invert = o;
    function a(c, u, f = !1) {
      if (typeof c != "object")
        return u;
      if (typeof u != "object")
        return;
      if (!f)
        return u;
      const m = Object.keys(u).reduce((d, y) => (c[y] === void 0 && (d[y] = u[y]), d), {});
      return Object.keys(m).length > 0 ? m : void 0;
    }
    r.transform = a;
  })(t || (t = {})), Kr.default = t, Kr;
}
var Vr = {}, ll;
function Ra() {
  if (ll) return Vr;
  ll = 1, Object.defineProperty(Vr, "__esModule", { value: !0 });
  var n;
  return (function(e) {
    function t(r) {
      return typeof r.delete == "number" ? r.delete : typeof r.retain == "number" ? r.retain : typeof r.retain == "object" && r.retain !== null ? 1 : typeof r.insert == "string" ? r.insert.length : 1;
    }
    e.length = t;
  })(n || (n = {})), Vr.default = n, Vr;
}
var Gr = {}, al;
function kp() {
  if (al) return Gr;
  al = 1, Object.defineProperty(Gr, "__esModule", { value: !0 });
  const n = Ra();
  class e {
    constructor(r) {
      this.ops = r, this.index = 0, this.offset = 0;
    }
    hasNext() {
      return this.peekLength() < 1 / 0;
    }
    next(r) {
      r || (r = 1 / 0);
      const s = this.ops[this.index];
      if (s) {
        const i = this.offset, o = n.default.length(s);
        if (r >= o - i ? (r = o - i, this.index += 1, this.offset = 0) : this.offset += r, typeof s.delete == "number")
          return { delete: r };
        {
          const a = {};
          return s.attributes && (a.attributes = s.attributes), typeof s.retain == "number" ? a.retain = r : typeof s.retain == "object" && s.retain !== null ? a.retain = s.retain : typeof s.insert == "string" ? a.insert = s.insert.substr(i, r) : a.insert = s.insert, a;
        }
      } else
        return { retain: 1 / 0 };
    }
    peek() {
      return this.ops[this.index];
    }
    peekLength() {
      return this.ops[this.index] ? n.default.length(this.ops[this.index]) - this.offset : 1 / 0;
    }
    peekType() {
      const r = this.ops[this.index];
      return r ? typeof r.delete == "number" ? "delete" : typeof r.retain == "number" || typeof r.retain == "object" && r.retain !== null ? "retain" : "insert" : "retain";
    }
    rest() {
      if (this.hasNext()) {
        if (this.offset === 0)
          return this.ops.slice(this.index);
        {
          const r = this.offset, s = this.index, i = this.next(), o = this.ops.slice(this.index);
          return this.offset = r, this.index = s, [i].concat(o);
        }
      } else return [];
    }
  }
  return Gr.default = e, Gr;
}
var cl;
function jp() {
  return cl || (cl = 1, (function(n, e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AttributeMap = e.OpIterator = e.Op = void 0;
    const t = qp(), r = Oa(), s = Ca(), i = Ip();
    e.AttributeMap = i.default;
    const o = Ra();
    e.Op = o.default;
    const a = kp();
    e.OpIterator = a.default;
    const c = "\0", u = (m, d) => {
      if (typeof m != "object" || m === null)
        throw new Error(`cannot retain a ${typeof m}`);
      if (typeof d != "object" || d === null)
        throw new Error(`cannot retain a ${typeof d}`);
      const y = Object.keys(m)[0];
      if (!y || y !== Object.keys(d)[0])
        throw new Error(`embed types not matched: ${y} != ${Object.keys(d)[0]}`);
      return [y, m[y], d[y]];
    };
    class f {
      constructor(d) {
        Array.isArray(d) ? this.ops = d : d != null && Array.isArray(d.ops) ? this.ops = d.ops : this.ops = [];
      }
      static registerEmbed(d, y) {
        this.handlers[d] = y;
      }
      static unregisterEmbed(d) {
        delete this.handlers[d];
      }
      static getHandler(d) {
        const y = this.handlers[d];
        if (!y)
          throw new Error(`no handlers for embed type "${d}"`);
        return y;
      }
      insert(d, y) {
        const p = {};
        return typeof d == "string" && d.length === 0 ? this : (p.insert = d, y != null && typeof y == "object" && Object.keys(y).length > 0 && (p.attributes = y), this.push(p));
      }
      delete(d) {
        return d <= 0 ? this : this.push({ delete: d });
      }
      retain(d, y) {
        if (typeof d == "number" && d <= 0)
          return this;
        const p = { retain: d };
        return y != null && typeof y == "object" && Object.keys(y).length > 0 && (p.attributes = y), this.push(p);
      }
      push(d) {
        let y = this.ops.length, p = this.ops[y - 1];
        if (d = r(d), typeof p == "object") {
          if (typeof d.delete == "number" && typeof p.delete == "number")
            return this.ops[y - 1] = { delete: p.delete + d.delete }, this;
          if (typeof p.delete == "number" && d.insert != null && (y -= 1, p = this.ops[y - 1], typeof p != "object"))
            return this.ops.unshift(d), this;
          if (s(d.attributes, p.attributes)) {
            if (typeof d.insert == "string" && typeof p.insert == "string")
              return this.ops[y - 1] = { insert: p.insert + d.insert }, typeof d.attributes == "object" && (this.ops[y - 1].attributes = d.attributes), this;
            if (typeof d.retain == "number" && typeof p.retain == "number")
              return this.ops[y - 1] = { retain: p.retain + d.retain }, typeof d.attributes == "object" && (this.ops[y - 1].attributes = d.attributes), this;
          }
        }
        return y === this.ops.length ? this.ops.push(d) : this.ops.splice(y, 0, d), this;
      }
      chop() {
        const d = this.ops[this.ops.length - 1];
        return d && typeof d.retain == "number" && !d.attributes && this.ops.pop(), this;
      }
      filter(d) {
        return this.ops.filter(d);
      }
      forEach(d) {
        this.ops.forEach(d);
      }
      map(d) {
        return this.ops.map(d);
      }
      partition(d) {
        const y = [], p = [];
        return this.forEach((v) => {
          (d(v) ? y : p).push(v);
        }), [y, p];
      }
      reduce(d, y) {
        return this.ops.reduce(d, y);
      }
      changeLength() {
        return this.reduce((d, y) => y.insert ? d + o.default.length(y) : y.delete ? d - y.delete : d, 0);
      }
      length() {
        return this.reduce((d, y) => d + o.default.length(y), 0);
      }
      slice(d = 0, y = 1 / 0) {
        const p = [], v = new a.default(this.ops);
        let w = 0;
        for (; w < y && v.hasNext(); ) {
          let A;
          w < d ? A = v.next(d - w) : (A = v.next(y - w), p.push(A)), w += o.default.length(A);
        }
        return new f(p);
      }
      compose(d) {
        const y = new a.default(this.ops), p = new a.default(d.ops), v = [], w = p.peek();
        if (w != null && typeof w.retain == "number" && w.attributes == null) {
          let R = w.retain;
          for (; y.peekType() === "insert" && y.peekLength() <= R; )
            R -= y.peekLength(), v.push(y.next());
          w.retain - R > 0 && p.next(w.retain - R);
        }
        const A = new f(v);
        for (; y.hasNext() || p.hasNext(); )
          if (p.peekType() === "insert")
            A.push(p.next());
          else if (y.peekType() === "delete")
            A.push(y.next());
          else {
            const R = Math.min(y.peekLength(), p.peekLength()), q = y.next(R), M = p.next(R);
            if (M.retain) {
              const _ = {};
              if (typeof q.retain == "number")
                _.retain = typeof M.retain == "number" ? R : M.retain;
              else if (typeof M.retain == "number")
                q.retain == null ? _.insert = q.insert : _.retain = q.retain;
              else {
                const K = q.retain == null ? "insert" : "retain", [re, le, me] = u(q[K], M.retain), g = f.getHandler(re);
                _[K] = {
                  [re]: g.compose(le, me, K === "retain")
                };
              }
              const z = i.default.compose(q.attributes, M.attributes, typeof q.retain == "number");
              if (z && (_.attributes = z), A.push(_), !p.hasNext() && s(A.ops[A.ops.length - 1], _)) {
                const K = new f(y.rest());
                return A.concat(K).chop();
              }
            } else typeof M.delete == "number" && (typeof q.retain == "number" || typeof q.retain == "object" && q.retain !== null) && A.push(M);
          }
        return A.chop();
      }
      concat(d) {
        const y = new f(this.ops.slice());
        return d.ops.length > 0 && (y.push(d.ops[0]), y.ops = y.ops.concat(d.ops.slice(1))), y;
      }
      diff(d, y) {
        if (this.ops === d.ops)
          return new f();
        const p = [this, d].map((q) => q.map((M) => {
          if (M.insert != null)
            return typeof M.insert == "string" ? M.insert : c;
          const _ = q === d ? "on" : "with";
          throw new Error("diff() called " + _ + " non-document");
        }).join("")), v = new f(), w = t(p[0], p[1], y, !0), A = new a.default(this.ops), R = new a.default(d.ops);
        return w.forEach((q) => {
          let M = q[1].length;
          for (; M > 0; ) {
            let _ = 0;
            switch (q[0]) {
              case t.INSERT:
                _ = Math.min(R.peekLength(), M), v.push(R.next(_));
                break;
              case t.DELETE:
                _ = Math.min(M, A.peekLength()), A.next(_), v.delete(_);
                break;
              case t.EQUAL:
                _ = Math.min(A.peekLength(), R.peekLength(), M);
                const z = A.next(_), K = R.next(_);
                s(z.insert, K.insert) ? v.retain(_, i.default.diff(z.attributes, K.attributes)) : v.push(K).delete(_);
                break;
            }
            M -= _;
          }
        }), v.chop();
      }
      eachLine(d, y = `
`) {
        const p = new a.default(this.ops);
        let v = new f(), w = 0;
        for (; p.hasNext(); ) {
          if (p.peekType() !== "insert")
            return;
          const A = p.peek(), R = o.default.length(A) - p.peekLength(), q = typeof A.insert == "string" ? A.insert.indexOf(y, R) - R : -1;
          if (q < 0)
            v.push(p.next());
          else if (q > 0)
            v.push(p.next(q));
          else {
            if (d(v, p.next(1).attributes || {}, w) === !1)
              return;
            w += 1, v = new f();
          }
        }
        v.length() > 0 && d(v, {}, w);
      }
      invert(d) {
        const y = new f();
        return this.reduce((p, v) => {
          if (v.insert)
            y.delete(o.default.length(v));
          else {
            if (typeof v.retain == "number" && v.attributes == null)
              return y.retain(v.retain), p + v.retain;
            if (v.delete || typeof v.retain == "number") {
              const w = v.delete || v.retain;
              return d.slice(p, p + w).forEach((R) => {
                v.delete ? y.push(R) : v.retain && v.attributes && y.retain(o.default.length(R), i.default.invert(v.attributes, R.attributes));
              }), p + w;
            } else if (typeof v.retain == "object" && v.retain !== null) {
              const w = d.slice(p, p + 1), A = new a.default(w.ops).next(), [R, q, M] = u(v.retain, A.insert), _ = f.getHandler(R);
              return y.retain({ [R]: _.invert(q, M) }, i.default.invert(v.attributes, A.attributes)), p + 1;
            }
          }
          return p;
        }, 0), y.chop();
      }
      transform(d, y = !1) {
        if (y = !!y, typeof d == "number")
          return this.transformPosition(d, y);
        const p = d, v = new a.default(this.ops), w = new a.default(p.ops), A = new f();
        for (; v.hasNext() || w.hasNext(); )
          if (v.peekType() === "insert" && (y || w.peekType() !== "insert"))
            A.retain(o.default.length(v.next()));
          else if (w.peekType() === "insert")
            A.push(w.next());
          else {
            const R = Math.min(v.peekLength(), w.peekLength()), q = v.next(R), M = w.next(R);
            if (q.delete)
              continue;
            if (M.delete)
              A.push(M);
            else {
              const _ = q.retain, z = M.retain;
              let K = typeof z == "object" && z !== null ? z : R;
              if (typeof _ == "object" && _ !== null && typeof z == "object" && z !== null) {
                const re = Object.keys(_)[0];
                if (re === Object.keys(z)[0]) {
                  const le = f.getHandler(re);
                  le && (K = {
                    [re]: le.transform(_[re], z[re], y)
                  });
                }
              }
              A.retain(K, i.default.transform(q.attributes, M.attributes, y));
            }
          }
        return A.chop();
      }
      transformPosition(d, y = !1) {
        y = !!y;
        const p = new a.default(this.ops);
        let v = 0;
        for (; p.hasNext() && v <= d; ) {
          const w = p.peekLength(), A = p.peekType();
          if (p.next(), A === "delete") {
            d -= Math.min(w, d - v);
            continue;
          } else A === "insert" && (v < d || !y) && (d += w);
          v += w;
        }
        return d;
      }
    }
    f.Op = o.default, f.OpIterator = a.default, f.AttributeMap = i.default, f.handlers = {}, e.default = f, n.exports = f, n.exports.default = f;
  })(zr, zr.exports)), zr.exports;
}
var Ke = jp();
const W = /* @__PURE__ */ Jl(Ke);
class rt extends De {
  static value() {
  }
  optimize() {
    (this.prev || this.next) && this.remove();
  }
  length() {
    return 0;
  }
  value() {
    return "";
  }
}
rt.blotName = "break";
rt.tagName = "BR";
let tt = class extends cs {
};
function gs(n) {
  return n.replace(/[&<>"']/g, (e) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[e]);
}
const ht = class ht extends lo {
  static compare(e, t) {
    const r = ht.order.indexOf(e), s = ht.order.indexOf(t);
    return r >= 0 || s >= 0 ? r - s : e === t ? 0 : e < t ? -1 : 1;
  }
  formatAt(e, t, r, s) {
    if (ht.compare(this.statics.blotName, r) < 0 && this.scroll.query(r, Z.BLOT)) {
      const i = this.isolate(e, t);
      s && i.wrap(r, s);
    } else
      super.formatAt(e, t, r, s);
  }
  optimize(e) {
    if (super.optimize(e), this.parent instanceof ht && ht.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
      const t = this.parent.isolate(this.offset(), this.length());
      this.moveChildren(t), t.wrap(this);
    }
  }
};
$(ht, "allowedChildren", [ht, rt, De, tt]), // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
$(ht, "order", [
  "cursor",
  "inline",
  // Must be lower
  "link",
  // Chrome wants <a> to be lower
  "underline",
  "strike",
  "italic",
  "bold",
  "script",
  "code"
  // Must be higher
]);
let mt = ht;
const ul = 1;
class Ae extends hr {
  constructor() {
    super(...arguments);
    $(this, "cache", {});
  }
  delta() {
    return this.cache.delta == null && (this.cache.delta = La(this)), this.cache.delta;
  }
  deleteAt(t, r) {
    super.deleteAt(t, r), this.cache = {};
  }
  formatAt(t, r, s, i) {
    r <= 0 || (this.scroll.query(s, Z.BLOCK) ? t + r === this.length() && this.format(s, i) : super.formatAt(t, Math.min(r, this.length() - t - 1), s, i), this.cache = {});
  }
  insertAt(t, r, s) {
    if (s != null) {
      super.insertAt(t, r, s), this.cache = {};
      return;
    }
    if (r.length === 0) return;
    const i = r.split(`
`), o = i.shift();
    o.length > 0 && (t < this.length() - 1 || this.children.tail == null ? super.insertAt(Math.min(t, this.length() - 1), o) : this.children.tail.insertAt(this.children.tail.length(), o), this.cache = {});
    let a = this;
    i.reduce((c, u) => (a = a.split(c, !0), a.insertAt(0, u), u.length), t + o.length);
  }
  insertBefore(t, r) {
    const {
      head: s
    } = this.children;
    super.insertBefore(t, r), s instanceof rt && s.remove(), this.cache = {};
  }
  length() {
    return this.cache.length == null && (this.cache.length = super.length() + ul), this.cache.length;
  }
  moveChildren(t, r) {
    super.moveChildren(t, r), this.cache = {};
  }
  optimize(t) {
    super.optimize(t), this.cache = {};
  }
  path(t) {
    return super.path(t, !0);
  }
  removeChild(t) {
    super.removeChild(t), this.cache = {};
  }
  split(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (r && (t === 0 || t >= this.length() - ul)) {
      const i = this.clone();
      return t === 0 ? (this.parent.insertBefore(i, this), this) : (this.parent.insertBefore(i, this.next), i);
    }
    const s = super.split(t, r);
    return this.cache = {}, s;
  }
}
Ae.blotName = "block";
Ae.tagName = "P";
Ae.defaultChild = rt;
Ae.allowedChildren = [rt, mt, De, tt];
class ze extends De {
  attach() {
    super.attach(), this.attributes = new ps(this.domNode);
  }
  delta() {
    return new W().insert(this.value(), {
      ...this.formats(),
      ...this.attributes.values()
    });
  }
  format(e, t) {
    const r = this.scroll.query(e, Z.BLOCK_ATTRIBUTE);
    r != null && this.attributes.attribute(r, t);
  }
  formatAt(e, t, r, s) {
    this.format(r, s);
  }
  insertAt(e, t, r) {
    if (r != null) {
      super.insertAt(e, t, r);
      return;
    }
    const s = t.split(`
`), i = s.pop(), o = s.map((c) => {
      const u = this.scroll.create(Ae.blotName);
      return u.insertAt(0, c), u;
    }), a = this.split(e);
    o.forEach((c) => {
      this.parent.insertBefore(c, a);
    }), i && this.parent.insertBefore(this.scroll.create("text", i), a);
  }
}
ze.scope = Z.BLOCK_BLOT;
function La(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return n.descendants(Ce).reduce((t, r) => r.length() === 0 ? t : t.insert(r.value(), Fe(r, {}, e)), new W()).insert(`
`, Fe(n));
}
function Fe(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  return n == null || ("formats" in n && typeof n.formats == "function" && (e = {
    ...e,
    ...n.formats()
  }, t && delete e["code-token"]), n.parent == null || n.parent.statics.blotName === "scroll" || n.parent.statics.scope !== n.statics.scope) ? e : Fe(n.parent, e, t);
}
const $e = class $e extends De {
  // Zero width no break space
  static value() {
  }
  constructor(e, t, r) {
    super(e, t), this.selection = r, this.textNode = document.createTextNode($e.CONTENTS), this.domNode.appendChild(this.textNode), this.savedLength = 0;
  }
  detach() {
    this.parent != null && this.parent.removeChild(this);
  }
  format(e, t) {
    if (this.savedLength !== 0) {
      super.format(e, t);
      return;
    }
    let r = this, s = 0;
    for (; r != null && r.statics.scope !== Z.BLOCK_BLOT; )
      s += r.offset(r.parent), r = r.parent;
    r != null && (this.savedLength = $e.CONTENTS.length, r.optimize(), r.formatAt(s, $e.CONTENTS.length, e, t), this.savedLength = 0);
  }
  index(e, t) {
    return e === this.textNode ? 0 : super.index(e, t);
  }
  length() {
    return this.savedLength;
  }
  position() {
    return [this.textNode, this.textNode.data.length];
  }
  remove() {
    super.remove(), this.parent = null;
  }
  restore() {
    if (this.selection.composing || this.parent == null) return null;
    const e = this.selection.getNativeRange();
    for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
    const t = this.prev instanceof tt ? this.prev : null, r = t ? t.length() : 0, s = this.next instanceof tt ? this.next : null, i = s ? s.text : "", {
      textNode: o
    } = this, a = o.data.split($e.CONTENTS).join("");
    o.data = $e.CONTENTS;
    let c;
    if (t)
      c = t, (a || s) && (t.insertAt(t.length(), a + i), s && s.remove());
    else if (s)
      c = s, s.insertAt(0, a);
    else {
      const u = document.createTextNode(a);
      c = this.scroll.create(u), this.parent.insertBefore(c, this);
    }
    if (this.remove(), e) {
      const u = (d, y) => t && d === t.domNode ? y : d === o ? r + y - 1 : s && d === s.domNode ? r + a.length + y : null, f = u(e.start.node, e.start.offset), m = u(e.end.node, e.end.offset);
      if (f !== null && m !== null)
        return {
          startNode: c.domNode,
          startOffset: f,
          endNode: c.domNode,
          endOffset: m
        };
    }
    return null;
  }
  update(e, t) {
    if (e.some((r) => r.type === "characterData" && r.target === this.textNode)) {
      const r = this.restore();
      r && (t.range = r);
    }
  }
  // Avoid .ql-cursor being a descendant of `<a/>`.
  // The reason is Safari pushes down `<a/>` on text insertion.
  // That will cause DOM nodes not sync with the model.
  //
  // For example ({I} is the caret), given the markup:
  //    <a><span class="ql-cursor">\uFEFF{I}</span></a>
  // When typing a char "x", `<a/>` will be pushed down inside the `<span>` first:
  //    <span class="ql-cursor"><a>\uFEFF{I}</a></span>
  // And then "x" will be inserted after `<a/>`:
  //    <span class="ql-cursor"><a>\uFEFF</a>d{I}</span>
  optimize(e) {
    super.optimize(e);
    let {
      parent: t
    } = this;
    for (; t; ) {
      if (t.domNode.tagName === "A") {
        this.savedLength = $e.CONTENTS.length, t.isolate(this.offset(t), this.length()).unwrap(), this.savedLength = 0;
        break;
      }
      t = t.parent;
    }
  }
  value() {
    return "";
  }
};
$($e, "blotName", "cursor"), $($e, "className", "ql-cursor"), $($e, "tagName", "span"), $($e, "CONTENTS", "\uFEFF");
let Cn = $e;
var di = { exports: {} }, hl;
function Bp() {
  return hl || (hl = 1, (function(n) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function r() {
    }
    Object.create && (r.prototype = /* @__PURE__ */ Object.create(null), new r().__proto__ || (t = !1));
    function s(c, u, f) {
      this.fn = c, this.context = u, this.once = f || !1;
    }
    function i(c, u, f, m, d) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var y = new s(f, m || c, d), p = t ? t + u : u;
      return c._events[p] ? c._events[p].fn ? c._events[p] = [c._events[p], y] : c._events[p].push(y) : (c._events[p] = y, c._eventsCount++), c;
    }
    function o(c, u) {
      --c._eventsCount === 0 ? c._events = new r() : delete c._events[u];
    }
    function a() {
      this._events = new r(), this._eventsCount = 0;
    }
    a.prototype.eventNames = function() {
      var u = [], f, m;
      if (this._eventsCount === 0) return u;
      for (m in f = this._events)
        e.call(f, m) && u.push(t ? m.slice(1) : m);
      return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(f)) : u;
    }, a.prototype.listeners = function(u) {
      var f = t ? t + u : u, m = this._events[f];
      if (!m) return [];
      if (m.fn) return [m.fn];
      for (var d = 0, y = m.length, p = new Array(y); d < y; d++)
        p[d] = m[d].fn;
      return p;
    }, a.prototype.listenerCount = function(u) {
      var f = t ? t + u : u, m = this._events[f];
      return m ? m.fn ? 1 : m.length : 0;
    }, a.prototype.emit = function(u, f, m, d, y, p) {
      var v = t ? t + u : u;
      if (!this._events[v]) return !1;
      var w = this._events[v], A = arguments.length, R, q;
      if (w.fn) {
        switch (w.once && this.removeListener(u, w.fn, void 0, !0), A) {
          case 1:
            return w.fn.call(w.context), !0;
          case 2:
            return w.fn.call(w.context, f), !0;
          case 3:
            return w.fn.call(w.context, f, m), !0;
          case 4:
            return w.fn.call(w.context, f, m, d), !0;
          case 5:
            return w.fn.call(w.context, f, m, d, y), !0;
          case 6:
            return w.fn.call(w.context, f, m, d, y, p), !0;
        }
        for (q = 1, R = new Array(A - 1); q < A; q++)
          R[q - 1] = arguments[q];
        w.fn.apply(w.context, R);
      } else {
        var M = w.length, _;
        for (q = 0; q < M; q++)
          switch (w[q].once && this.removeListener(u, w[q].fn, void 0, !0), A) {
            case 1:
              w[q].fn.call(w[q].context);
              break;
            case 2:
              w[q].fn.call(w[q].context, f);
              break;
            case 3:
              w[q].fn.call(w[q].context, f, m);
              break;
            case 4:
              w[q].fn.call(w[q].context, f, m, d);
              break;
            default:
              if (!R) for (_ = 1, R = new Array(A - 1); _ < A; _++)
                R[_ - 1] = arguments[_];
              w[q].fn.apply(w[q].context, R);
          }
      }
      return !0;
    }, a.prototype.on = function(u, f, m) {
      return i(this, u, f, m, !1);
    }, a.prototype.once = function(u, f, m) {
      return i(this, u, f, m, !0);
    }, a.prototype.removeListener = function(u, f, m, d) {
      var y = t ? t + u : u;
      if (!this._events[y]) return this;
      if (!f)
        return o(this, y), this;
      var p = this._events[y];
      if (p.fn)
        p.fn === f && (!d || p.once) && (!m || p.context === m) && o(this, y);
      else {
        for (var v = 0, w = [], A = p.length; v < A; v++)
          (p[v].fn !== f || d && !p[v].once || m && p[v].context !== m) && w.push(p[v]);
        w.length ? this._events[y] = w.length === 1 ? w[0] : w : o(this, y);
      }
      return this;
    }, a.prototype.removeAllListeners = function(u) {
      var f;
      return u ? (f = t ? t + u : u, this._events[f] && o(this, f)) : (this._events = new r(), this._eventsCount = 0), this;
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, n.exports = a;
  })(di)), di.exports;
}
var Pp = Bp();
const Mp = /* @__PURE__ */ Jl(Pp), Mi = /* @__PURE__ */ new WeakMap(), Di = ["error", "warn", "log", "info"];
let Ui = "warn";
function qa(n) {
  if (Ui && Di.indexOf(n) <= Di.indexOf(Ui)) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
      t[r - 1] = arguments[r];
    console[n](...t);
  }
}
function Ct(n) {
  return Di.reduce((e, t) => (e[t] = qa.bind(console, t, n), e), {});
}
Ct.level = (n) => {
  Ui = n;
};
qa.level = Ct.level;
const pi = Ct("quill:events"), Dp = ["selectionchange", "mousedown", "mouseup", "click"];
Dp.forEach((n) => {
  document.addEventListener(n, function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    Array.from(document.querySelectorAll(".ql-container")).forEach((s) => {
      const i = Mi.get(s);
      i && i.emitter && i.emitter.handleDOM(...t);
    });
  });
});
class G extends Mp {
  constructor() {
    super(), this.domListeners = {}, this.on("error", pi.error);
  }
  emit() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    return pi.log.call(pi, ...t), super.emit(...t);
  }
  handleDOM(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
      r[s - 1] = arguments[s];
    (this.domListeners[e.type] || []).forEach((i) => {
      let {
        node: o,
        handler: a
      } = i;
      (e.target === o || o.contains(e.target)) && a(e, ...r);
    });
  }
  listenDOM(e, t, r) {
    this.domListeners[e] || (this.domListeners[e] = []), this.domListeners[e].push({
      node: t,
      handler: r
    });
  }
}
$(G, "events", {
  EDITOR_CHANGE: "editor-change",
  SCROLL_BEFORE_UPDATE: "scroll-before-update",
  SCROLL_BLOT_MOUNT: "scroll-blot-mount",
  SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
  SCROLL_OPTIMIZE: "scroll-optimize",
  SCROLL_UPDATE: "scroll-update",
  SCROLL_EMBED_UPDATE: "scroll-embed-update",
  SELECTION_CHANGE: "selection-change",
  TEXT_CHANGE: "text-change",
  COMPOSITION_BEFORE_START: "composition-before-start",
  COMPOSITION_START: "composition-start",
  COMPOSITION_BEFORE_END: "composition-before-end",
  COMPOSITION_END: "composition-end"
}), $(G, "sources", {
  API: "api",
  SILENT: "silent",
  USER: "user"
});
const mi = Ct("quill:selection");
class Qt {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    this.index = e, this.length = t;
  }
}
class Up {
  constructor(e, t) {
    this.emitter = t, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = this.scroll.create("cursor", this), this.savedRange = new Qt(0, 0), this.lastRange = this.savedRange, this.lastNative = null, this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, () => {
      !this.mouseDown && !this.composing && setTimeout(this.update.bind(this, G.sources.USER), 1);
    }), this.emitter.on(G.events.SCROLL_BEFORE_UPDATE, () => {
      if (!this.hasFocus()) return;
      const r = this.getNativeRange();
      r != null && r.start.node !== this.cursor.textNode && this.emitter.once(G.events.SCROLL_UPDATE, (s, i) => {
        try {
          this.root.contains(r.start.node) && this.root.contains(r.end.node) && this.setNativeRange(r.start.node, r.start.offset, r.end.node, r.end.offset);
          const o = i.some((a) => a.type === "characterData" || a.type === "childList" || a.type === "attributes" && a.target === this.root);
          this.update(o ? G.sources.SILENT : s);
        } catch {
        }
      });
    }), this.emitter.on(G.events.SCROLL_OPTIMIZE, (r, s) => {
      if (s.range) {
        const {
          startNode: i,
          startOffset: o,
          endNode: a,
          endOffset: c
        } = s.range;
        this.setNativeRange(i, o, a, c), this.update(G.sources.SILENT);
      }
    }), this.update(G.sources.SILENT);
  }
  handleComposition() {
    this.emitter.on(G.events.COMPOSITION_BEFORE_START, () => {
      this.composing = !0;
    }), this.emitter.on(G.events.COMPOSITION_END, () => {
      if (this.composing = !1, this.cursor.parent) {
        const e = this.cursor.restore();
        if (!e) return;
        setTimeout(() => {
          this.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset);
        }, 1);
      }
    });
  }
  handleDragging() {
    this.emitter.listenDOM("mousedown", document.body, () => {
      this.mouseDown = !0;
    }), this.emitter.listenDOM("mouseup", document.body, () => {
      this.mouseDown = !1, this.update(G.sources.USER);
    });
  }
  focus() {
    this.hasFocus() || (this.root.focus({
      preventScroll: !0
    }), this.setRange(this.savedRange));
  }
  format(e, t) {
    this.scroll.update();
    const r = this.getNativeRange();
    if (!(r == null || !r.native.collapsed || this.scroll.query(e, Z.BLOCK))) {
      if (r.start.node !== this.cursor.textNode) {
        const s = this.scroll.find(r.start.node, !1);
        if (s == null) return;
        if (s instanceof Ce) {
          const i = s.split(r.start.offset);
          s.parent.insertBefore(this.cursor, i);
        } else
          s.insertBefore(this.cursor, r.start.node);
        this.cursor.attach();
      }
      this.cursor.format(e, t), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
    }
  }
  getBounds(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const r = this.scroll.length();
    e = Math.min(e, r - 1), t = Math.min(e + t, r - 1) - e;
    let s, [i, o] = this.scroll.leaf(e);
    if (i == null) return null;
    if (t > 0 && o === i.length()) {
      const [f] = this.scroll.leaf(e + 1);
      if (f) {
        const [m] = this.scroll.line(e), [d] = this.scroll.line(e + 1);
        m === d && (i = f, o = 0);
      }
    }
    [s, o] = i.position(o, !0);
    const a = document.createRange();
    if (t > 0)
      return a.setStart(s, o), [i, o] = this.scroll.leaf(e + t), i == null ? null : ([s, o] = i.position(o, !0), a.setEnd(s, o), a.getBoundingClientRect());
    let c = "left", u;
    if (s instanceof Text) {
      if (!s.data.length)
        return null;
      o < s.data.length ? (a.setStart(s, o), a.setEnd(s, o + 1)) : (a.setStart(s, o - 1), a.setEnd(s, o), c = "right"), u = a.getBoundingClientRect();
    } else {
      if (!(i.domNode instanceof Element)) return null;
      u = i.domNode.getBoundingClientRect(), o > 0 && (c = "right");
    }
    return {
      bottom: u.top + u.height,
      height: u.height,
      left: u[c],
      right: u[c],
      top: u.top,
      width: 0
    };
  }
  getNativeRange() {
    const e = document.getSelection();
    if (e == null || e.rangeCount <= 0) return null;
    const t = e.getRangeAt(0);
    if (t == null) return null;
    const r = this.normalizeNative(t);
    return mi.info("getNativeRange", r), r;
  }
  getRange() {
    const e = this.scroll.domNode;
    if ("isConnected" in e && !e.isConnected)
      return [null, null];
    const t = this.getNativeRange();
    return t == null ? [null, null] : [this.normalizedToRange(t), t];
  }
  hasFocus() {
    return document.activeElement === this.root || document.activeElement != null && gi(this.root, document.activeElement);
  }
  normalizedToRange(e) {
    const t = [[e.start.node, e.start.offset]];
    e.native.collapsed || t.push([e.end.node, e.end.offset]);
    const r = t.map((o) => {
      const [a, c] = o, u = this.scroll.find(a, !0), f = u.offset(this.scroll);
      return c === 0 ? f : u instanceof Ce ? f + u.index(a, c) : f + u.length();
    }), s = Math.min(Math.max(...r), this.scroll.length() - 1), i = Math.min(s, ...r);
    return new Qt(i, s - i);
  }
  normalizeNative(e) {
    if (!gi(this.root, e.startContainer) || !e.collapsed && !gi(this.root, e.endContainer))
      return null;
    const t = {
      start: {
        node: e.startContainer,
        offset: e.startOffset
      },
      end: {
        node: e.endContainer,
        offset: e.endOffset
      },
      native: e
    };
    return [t.start, t.end].forEach((r) => {
      let {
        node: s,
        offset: i
      } = r;
      for (; !(s instanceof Text) && s.childNodes.length > 0; )
        if (s.childNodes.length > i)
          s = s.childNodes[i], i = 0;
        else if (s.childNodes.length === i)
          s = s.lastChild, s instanceof Text ? i = s.data.length : s.childNodes.length > 0 ? i = s.childNodes.length : i = s.childNodes.length + 1;
        else
          break;
      r.node = s, r.offset = i;
    }), t;
  }
  rangeToNative(e) {
    const t = this.scroll.length(), r = (s, i) => {
      s = Math.min(t - 1, s);
      const [o, a] = this.scroll.leaf(s);
      return o ? o.position(a, i) : [null, -1];
    };
    return [...r(e.index, !1), ...r(e.index + e.length, !0)];
  }
  setNativeRange(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : t, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (mi.info("setNativeRange", e, t, r, s), e != null && (this.root.parentNode == null || e.parentNode == null || // @ts-expect-error Fix me later
    r.parentNode == null))
      return;
    const o = document.getSelection();
    if (o != null)
      if (e != null) {
        this.hasFocus() || this.root.focus({
          preventScroll: !0
        });
        const {
          native: a
        } = this.getNativeRange() || {};
        if (a == null || i || e !== a.startContainer || t !== a.startOffset || r !== a.endContainer || s !== a.endOffset) {
          e instanceof Element && e.tagName === "BR" && (t = Array.from(e.parentNode.childNodes).indexOf(e), e = e.parentNode), r instanceof Element && r.tagName === "BR" && (s = Array.from(r.parentNode.childNodes).indexOf(r), r = r.parentNode);
          const c = document.createRange();
          c.setStart(e, t), c.setEnd(r, s), o.removeAllRanges(), o.addRange(c);
        }
      } else
        o.removeAllRanges(), this.root.blur();
  }
  setRange(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : G.sources.API;
    if (typeof t == "string" && (r = t, t = !1), mi.info("setRange", e), e != null) {
      const s = this.rangeToNative(e);
      this.setNativeRange(...s, t);
    } else
      this.setNativeRange(null);
    this.update(r);
  }
  update() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : G.sources.USER;
    const t = this.lastRange, [r, s] = this.getRange();
    if (this.lastRange = r, this.lastNative = s, this.lastRange != null && (this.savedRange = this.lastRange), !oo(t, this.lastRange)) {
      if (!this.composing && s != null && s.native.collapsed && s.start.node !== this.cursor.textNode) {
        const o = this.cursor.restore();
        o && this.setNativeRange(o.startNode, o.startOffset, o.endNode, o.endOffset);
      }
      const i = [G.events.SELECTION_CHANGE, An(this.lastRange), An(t), e];
      this.emitter.emit(G.events.EDITOR_CHANGE, ...i), e !== G.sources.SILENT && this.emitter.emit(...i);
    }
  }
}
function gi(n, e) {
  try {
    e.parentNode;
  } catch {
    return !1;
  }
  return n.contains(e);
}
const $p = /^[ -~]*$/;
class Fp {
  constructor(e) {
    this.scroll = e, this.delta = this.getDelta();
  }
  applyDelta(e) {
    this.scroll.update();
    let t = this.scroll.length();
    this.scroll.batchStart();
    const r = fl(e), s = new W();
    return zp(r.ops.slice()).reduce((o, a) => {
      const c = Ke.Op.length(a);
      let u = a.attributes || {}, f = !1, m = !1;
      if (a.insert != null) {
        if (s.retain(c), typeof a.insert == "string") {
          const p = a.insert;
          m = !p.endsWith(`
`) && (t <= o || !!this.scroll.descendant(ze, o)[0]), this.scroll.insertAt(o, p);
          const [v, w] = this.scroll.line(o);
          let A = Pt({}, Fe(v));
          if (v instanceof Ae) {
            const [R] = v.descendant(Ce, w);
            R && (A = Pt(A, Fe(R)));
          }
          u = Ke.AttributeMap.diff(A, u) || {};
        } else if (typeof a.insert == "object") {
          const p = Object.keys(a.insert)[0];
          if (p == null) return o;
          const v = this.scroll.query(p, Z.INLINE) != null;
          if (v)
            (t <= o || this.scroll.descendant(ze, o)[0]) && (m = !0);
          else if (o > 0) {
            const [w, A] = this.scroll.descendant(Ce, o - 1);
            w instanceof tt ? w.value()[A] !== `
` && (f = !0) : w instanceof De && w.statics.scope === Z.INLINE_BLOT && (f = !0);
          }
          if (this.scroll.insertAt(o, p, a.insert[p]), v) {
            const [w] = this.scroll.descendant(Ce, o);
            if (w) {
              const A = Pt({}, Fe(w));
              u = Ke.AttributeMap.diff(A, u) || {};
            }
          }
        }
        t += c;
      } else if (s.push(a), a.retain !== null && typeof a.retain == "object") {
        const p = Object.keys(a.retain)[0];
        if (p == null) return o;
        this.scroll.updateEmbedAt(o, p, a.retain[p]);
      }
      Object.keys(u).forEach((p) => {
        this.scroll.formatAt(o, c, p, u[p]);
      });
      const d = f ? 1 : 0, y = m ? 1 : 0;
      return t += d + y, s.retain(d), s.delete(y), o + c + d + y;
    }, 0), s.reduce((o, a) => typeof a.delete == "number" ? (this.scroll.deleteAt(o, a.delete), o) : o + Ke.Op.length(a), 0), this.scroll.batchEnd(), this.scroll.optimize(), this.update(r);
  }
  deleteText(e, t) {
    return this.scroll.deleteAt(e, t), this.update(new W().retain(e).delete(t));
  }
  formatLine(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.scroll.update(), Object.keys(r).forEach((i) => {
      this.scroll.lines(e, Math.max(t, 1)).forEach((o) => {
        o.format(i, r[i]);
      });
    }), this.scroll.optimize();
    const s = new W().retain(e).retain(t, An(r));
    return this.update(s);
  }
  formatText(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Object.keys(r).forEach((i) => {
      this.scroll.formatAt(e, t, i, r[i]);
    });
    const s = new W().retain(e).retain(t, An(r));
    return this.update(s);
  }
  getContents(e, t) {
    return this.delta.slice(e, e + t);
  }
  getDelta() {
    return this.scroll.lines().reduce((e, t) => e.concat(t.delta()), new W());
  }
  getFormat(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = [], s = [];
    t === 0 ? this.scroll.path(e).forEach((a) => {
      const [c] = a;
      c instanceof Ae ? r.push(c) : c instanceof Ce && s.push(c);
    }) : (r = this.scroll.lines(e, t), s = this.scroll.descendants(Ce, e, t));
    const [i, o] = [r, s].map((a) => {
      const c = a.shift();
      if (c == null) return {};
      let u = Fe(c);
      for (; Object.keys(u).length > 0; ) {
        const f = a.shift();
        if (f == null) return u;
        u = Hp(Fe(f), u);
      }
      return u;
    });
    return {
      ...i,
      ...o
    };
  }
  getHTML(e, t) {
    const [r, s] = this.scroll.line(e);
    if (r) {
      const i = r.length();
      return r.length() >= s + t && !(s === 0 && t === i) ? fr(r, s, t, !0) : fr(this.scroll, e, t, !0);
    }
    return "";
  }
  getText(e, t) {
    return this.getContents(e, t).filter((r) => typeof r.insert == "string").map((r) => r.insert).join("");
  }
  insertContents(e, t) {
    const r = fl(t), s = new W().retain(e).concat(r);
    return this.scroll.insertContents(e, r), this.update(s);
  }
  insertEmbed(e, t, r) {
    return this.scroll.insertAt(e, t, r), this.update(new W().retain(e).insert({
      [t]: r
    }));
  }
  insertText(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return t = t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(e, t), Object.keys(r).forEach((s) => {
      this.scroll.formatAt(e, t.length, s, r[s]);
    }), this.update(new W().retain(e).insert(t, An(r)));
  }
  isBlank() {
    if (this.scroll.children.length === 0) return !0;
    if (this.scroll.children.length > 1) return !1;
    const e = this.scroll.children.head;
    if ((e == null ? void 0 : e.statics.blotName) !== Ae.blotName) return !1;
    const t = e;
    return t.children.length > 1 ? !1 : t.children.head instanceof rt;
  }
  removeFormat(e, t) {
    const r = this.getText(e, t), [s, i] = this.scroll.line(e + t);
    let o = 0, a = new W();
    s != null && (o = s.length() - i, a = s.delta().slice(i, i + o - 1).insert(`
`));
    const u = this.getContents(e, t + o).diff(new W().insert(r).concat(a)), f = new W().retain(e).concat(u);
    return this.applyDelta(f);
  }
  update(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    const s = this.delta;
    if (t.length === 1 && t[0].type === "characterData" && // @ts-expect-error Fix me later
    t[0].target.data.match($p) && this.scroll.find(t[0].target)) {
      const i = this.scroll.find(t[0].target), o = Fe(i), a = i.offset(this.scroll), c = t[0].oldValue.replace(Cn.CONTENTS, ""), u = new W().insert(c), f = new W().insert(i.value()), m = r && {
        oldRange: dl(r.oldRange, -a),
        newRange: dl(r.newRange, -a)
      };
      e = new W().retain(a).concat(u.diff(f, m)).reduce((y, p) => p.insert ? y.insert(p.insert, o) : y.push(p), new W()), this.delta = s.compose(e);
    } else
      this.delta = this.getDelta(), (!e || !oo(s.compose(e), this.delta)) && (e = s.diff(this.delta, r));
    return e;
  }
}
function En(n, e, t) {
  if (n.length === 0) {
    const [y] = bi(t.pop());
    return e <= 0 ? `</li></${y}>` : `</li></${y}>${En([], e - 1, t)}`;
  }
  const [{
    child: r,
    offset: s,
    length: i,
    indent: o,
    type: a
  }, ...c] = n, [u, f] = bi(a);
  if (o > e)
    return t.push(a), o === e + 1 ? `<${u}><li${f}>${fr(r, s, i)}${En(c, o, t)}` : `<${u}><li>${En(n, e + 1, t)}`;
  const m = t[t.length - 1];
  if (o === e && a === m)
    return `</li><li${f}>${fr(r, s, i)}${En(c, o, t)}`;
  const [d] = bi(t.pop());
  return `</li></${d}>${En(n, e - 1, t)}`;
}
function fr(n, e, t) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if ("html" in n && typeof n.html == "function")
    return n.html(e, t);
  if (n instanceof tt)
    return gs(n.value().slice(e, e + t));
  if (n instanceof et) {
    if (n.statics.blotName === "list-container") {
      const u = [];
      return n.children.forEachAt(e, t, (f, m, d) => {
        const y = "formats" in f && typeof f.formats == "function" ? f.formats() : {};
        u.push({
          child: f,
          offset: m,
          length: d,
          indent: y.indent || 0,
          type: y.list
        });
      }), En(u, -1, []);
    }
    const s = [];
    if (n.children.forEachAt(e, t, (u, f, m) => {
      s.push(fr(u, f, m));
    }), r || n.statics.blotName === "list")
      return s.join("");
    const {
      outerHTML: i,
      innerHTML: o
    } = n.domNode, [a, c] = i.split(`>${o}<`);
    return a === "<table" ? `<table style="border: 1px solid #000;">${s.join("")}<${c}` : `${a}>${s.join("")}<${c}`;
  }
  return n.domNode instanceof Element ? n.domNode.outerHTML : "";
}
function Hp(n, e) {
  return Object.keys(e).reduce((t, r) => {
    if (n[r] == null) return t;
    const s = e[r];
    return s === n[r] ? t[r] = s : Array.isArray(s) ? s.indexOf(n[r]) < 0 ? t[r] = s.concat([n[r]]) : t[r] = s : t[r] = [s, n[r]], t;
  }, {});
}
function bi(n) {
  const e = n === "ordered" ? "ol" : "ul";
  switch (n) {
    case "checked":
      return [e, ' data-list="checked"'];
    case "unchecked":
      return [e, ' data-list="unchecked"'];
    default:
      return [e, ""];
  }
}
function fl(n) {
  return n.reduce((e, t) => {
    if (typeof t.insert == "string") {
      const r = t.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
      return e.insert(r, t.attributes);
    }
    return e.push(t);
  }, new W());
}
function dl(n, e) {
  let {
    index: t,
    length: r
  } = n;
  return new Qt(t + e, r);
}
function zp(n) {
  const e = [];
  return n.forEach((t) => {
    typeof t.insert == "string" ? t.insert.split(`
`).forEach((s, i) => {
      i && e.push({
        insert: `
`,
        attributes: t.attributes
      }), s && e.push({
        insert: s,
        attributes: t.attributes
      });
    }) : e.push(t);
  }), e;
}
class st {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.quill = e, this.options = t;
  }
}
$(st, "DEFAULTS", {});
const Wr = "\uFEFF";
class co extends De {
  constructor(e, t) {
    super(e, t), this.contentNode = document.createElement("span"), this.contentNode.setAttribute("contenteditable", "false"), Array.from(this.domNode.childNodes).forEach((r) => {
      this.contentNode.appendChild(r);
    }), this.leftGuard = document.createTextNode(Wr), this.rightGuard = document.createTextNode(Wr), this.domNode.appendChild(this.leftGuard), this.domNode.appendChild(this.contentNode), this.domNode.appendChild(this.rightGuard);
  }
  index(e, t) {
    return e === this.leftGuard ? 0 : e === this.rightGuard ? 1 : super.index(e, t);
  }
  restore(e) {
    let t = null, r;
    const s = e.data.split(Wr).join("");
    if (e === this.leftGuard)
      if (this.prev instanceof tt) {
        const i = this.prev.length();
        this.prev.insertAt(i, s), t = {
          startNode: this.prev.domNode,
          startOffset: i + s.length
        };
      } else
        r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this), t = {
          startNode: r,
          startOffset: s.length
        };
    else e === this.rightGuard && (this.next instanceof tt ? (this.next.insertAt(0, s), t = {
      startNode: this.next.domNode,
      startOffset: s.length
    }) : (r = document.createTextNode(s), this.parent.insertBefore(this.scroll.create(r), this.next), t = {
      startNode: r,
      startOffset: s.length
    }));
    return e.data = Wr, t;
  }
  update(e, t) {
    e.forEach((r) => {
      if (r.type === "characterData" && (r.target === this.leftGuard || r.target === this.rightGuard)) {
        const s = this.restore(r.target);
        s && (t.range = s);
      }
    });
  }
}
class Kp {
  constructor(e, t) {
    $(this, "isComposing", !1);
    this.scroll = e, this.emitter = t, this.setupListeners();
  }
  setupListeners() {
    this.scroll.domNode.addEventListener("compositionstart", (e) => {
      this.isComposing || this.handleCompositionStart(e);
    }), this.scroll.domNode.addEventListener("compositionend", (e) => {
      this.isComposing && queueMicrotask(() => {
        this.handleCompositionEnd(e);
      });
    });
  }
  handleCompositionStart(e) {
    const t = e.target instanceof Node ? this.scroll.find(e.target, !0) : null;
    t && !(t instanceof co) && (this.emitter.emit(G.events.COMPOSITION_BEFORE_START, e), this.scroll.batchStart(), this.emitter.emit(G.events.COMPOSITION_START, e), this.isComposing = !0);
  }
  handleCompositionEnd(e) {
    this.emitter.emit(G.events.COMPOSITION_BEFORE_END, e), this.scroll.batchEnd(), this.emitter.emit(G.events.COMPOSITION_END, e), this.isComposing = !1;
  }
}
const or = class or {
  constructor(e, t) {
    $(this, "modules", {});
    this.quill = e, this.options = t;
  }
  init() {
    Object.keys(this.options.modules).forEach((e) => {
      this.modules[e] == null && this.addModule(e);
    });
  }
  addModule(e) {
    const t = this.quill.constructor.import(`modules/${e}`);
    return this.modules[e] = new t(this.quill, this.options.modules[e] || {}), this.modules[e];
  }
};
$(or, "DEFAULTS", {
  modules: {}
}), $(or, "themes", {
  default: or
});
let Rn = or;
const Vp = (n) => n.parentElement || n.getRootNode().host || null, Gp = (n) => {
  const e = n.getBoundingClientRect(), t = "offsetWidth" in n && Math.abs(e.width) / n.offsetWidth || 1, r = "offsetHeight" in n && Math.abs(e.height) / n.offsetHeight || 1;
  return {
    top: e.top,
    right: e.left + n.clientWidth * t,
    bottom: e.top + n.clientHeight * r,
    left: e.left
  };
}, Zr = (n) => {
  const e = parseInt(n, 10);
  return Number.isNaN(e) ? 0 : e;
}, pl = (n, e, t, r, s, i) => n < t && e > r ? 0 : n < t ? -(t - n + s) : e > r ? e - n > r - t ? n + s - t : e - r + i : 0, Wp = (n, e) => {
  var i, o, a;
  const t = n.ownerDocument;
  let r = e, s = n;
  for (; s; ) {
    const c = s === t.body, u = c ? {
      top: 0,
      right: ((i = window.visualViewport) == null ? void 0 : i.width) ?? t.documentElement.clientWidth,
      bottom: ((o = window.visualViewport) == null ? void 0 : o.height) ?? t.documentElement.clientHeight,
      left: 0
    } : Gp(s), f = getComputedStyle(s), m = pl(r.left, r.right, u.left, u.right, Zr(f.scrollPaddingLeft), Zr(f.scrollPaddingRight)), d = pl(r.top, r.bottom, u.top, u.bottom, Zr(f.scrollPaddingTop), Zr(f.scrollPaddingBottom));
    if (m || d)
      if (c)
        (a = t.defaultView) == null || a.scrollBy(m, d);
      else {
        const {
          scrollLeft: y,
          scrollTop: p
        } = s;
        d && (s.scrollTop += d), m && (s.scrollLeft += m);
        const v = s.scrollLeft - y, w = s.scrollTop - p;
        r = {
          left: r.left - v,
          top: r.top - w,
          right: r.right - v,
          bottom: r.bottom - w
        };
      }
    s = c || f.position === "fixed" ? null : Vp(s);
  }
}, Zp = 100, Jp = ["block", "break", "cursor", "inline", "scroll", "text"], Yp = (n, e, t) => {
  const r = new On();
  return Jp.forEach((s) => {
    const i = e.query(s);
    i && r.register(i);
  }), n.forEach((s) => {
    let i = e.query(s);
    i || t.error(`Cannot register "${s}" specified in "formats" config. Are you sure it was registered?`);
    let o = 0;
    for (; i; )
      if (r.register(i), i = "blotName" in i ? i.requiredContainer ?? null : null, o += 1, o > Zp) {
        t.error(`Cycle detected in registering blot requiredContainer: "${s}"`);
        break;
      }
  }), r;
}, Sn = Ct("quill"), Jr = new On();
et.uiClass = "ql-ui";
const Ye = class Ye {
  static debug(e) {
    e === !0 && (e = "log"), Ct.level(e);
  }
  static find(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return Mi.get(e) || Jr.find(e, t);
  }
  static import(e) {
    return this.imports[e] == null && Sn.error(`Cannot import ${e}. Are you sure it was registered?`), this.imports[e];
  }
  static register() {
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) != "string") {
      const e = arguments.length <= 0 ? void 0 : arguments[0], t = !!(!(arguments.length <= 1) && arguments[1]), r = "attrName" in e ? e.attrName : e.blotName;
      typeof r == "string" ? this.register(`formats/${r}`, e, t) : Object.keys(e).forEach((s) => {
        this.register(s, e[s], t);
      });
    } else {
      const e = arguments.length <= 0 ? void 0 : arguments[0], t = arguments.length <= 1 ? void 0 : arguments[1], r = !!(!(arguments.length <= 2) && arguments[2]);
      this.imports[e] != null && !r && Sn.warn(`Overwriting ${e} with`, t), this.imports[e] = t, (e.startsWith("blots/") || e.startsWith("formats/")) && t && typeof t != "boolean" && t.blotName !== "abstract" && Jr.register(t), typeof t.register == "function" && t.register(Jr);
    }
  }
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.options = Xp(e, t), this.container = this.options.container, this.container == null) {
      Sn.error("Invalid Quill container", e);
      return;
    }
    this.options.debug && Ye.debug(this.options.debug);
    const r = this.container.innerHTML.trim();
    this.container.classList.add("ql-container"), this.container.innerHTML = "", Mi.set(this.container, this), this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.emitter = new G();
    const s = ao.blotName, i = this.options.registry.query(s);
    if (!i || !("blotName" in i))
      throw new Error(`Cannot initialize Quill without "${s}" blot`);
    if (this.scroll = new i(this.options.registry, this.root, {
      emitter: this.emitter
    }), this.editor = new Fp(this.scroll), this.selection = new Up(this.scroll, this.emitter), this.composition = new Kp(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.uploader = this.theme.addModule("uploader"), this.theme.addModule("input"), this.theme.addModule("uiNode"), this.theme.init(), this.emitter.on(G.events.EDITOR_CHANGE, (o) => {
      o === G.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank());
    }), this.emitter.on(G.events.SCROLL_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [u] = this.selection.getRange(), f = c && u ? {
        oldRange: c,
        newRange: u
      } : void 0;
      Je.call(this, () => this.editor.update(null, a, f), o);
    }), this.emitter.on(G.events.SCROLL_EMBED_UPDATE, (o, a) => {
      const c = this.selection.lastRange, [u] = this.selection.getRange(), f = c && u ? {
        oldRange: c,
        newRange: u
      } : void 0;
      Je.call(this, () => {
        const m = new W().retain(o.offset(this)).retain({
          [o.statics.blotName]: a
        });
        return this.editor.update(m, [], f);
      }, Ye.sources.USER);
    }), r) {
      const o = this.clipboard.convert({
        html: `${r}<p><br></p>`,
        text: `
`
      });
      this.setContents(o);
    }
    this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable(), this.allowReadOnlyEdits = !1;
  }
  addContainer(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (typeof e == "string") {
      const r = e;
      e = document.createElement("div"), e.classList.add(r);
    }
    return this.container.insertBefore(e, t), e;
  }
  blur() {
    this.selection.setRange(null);
  }
  deleteText(e, t, r) {
    return [e, t, , r] = At(e, t, r), Je.call(this, () => this.editor.deleteText(e, t), r, e, -1 * t);
  }
  disable() {
    this.enable(!1);
  }
  editReadOnly(e) {
    this.allowReadOnlyEdits = !0;
    const t = e();
    return this.allowReadOnlyEdits = !1, t;
  }
  enable() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.scroll.enable(e), this.container.classList.toggle("ql-disabled", !e);
  }
  focus() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.selection.focus(), e.preventScroll || this.scrollSelectionIntoView();
  }
  format(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : G.sources.API;
    return Je.call(this, () => {
      const s = this.getSelection(!0);
      let i = new W();
      if (s == null) return i;
      if (this.scroll.query(e, Z.BLOCK))
        i = this.editor.formatLine(s.index, s.length, {
          [e]: t
        });
      else {
        if (s.length === 0)
          return this.selection.format(e, t), i;
        i = this.editor.formatText(s.index, s.length, {
          [e]: t
        });
      }
      return this.setSelection(s, G.sources.SILENT), i;
    }, r);
  }
  formatLine(e, t, r, s, i) {
    let o;
    return [e, t, o, i] = At(
      e,
      t,
      // @ts-expect-error
      r,
      s,
      i
    ), Je.call(this, () => this.editor.formatLine(e, t, o), i, e, 0);
  }
  formatText(e, t, r, s, i) {
    let o;
    return [e, t, o, i] = At(
      // @ts-expect-error
      e,
      t,
      r,
      s,
      i
    ), Je.call(this, () => this.editor.formatText(e, t, o), i, e, 0);
  }
  getBounds(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = null;
    if (typeof e == "number" ? r = this.selection.getBounds(e, t) : r = this.selection.getBounds(e.index, e.length), !r) return null;
    const s = this.container.getBoundingClientRect();
    return {
      bottom: r.bottom - s.top,
      height: r.height,
      left: r.left - s.left,
      right: r.right - s.left,
      top: r.top - s.top,
      width: r.width
    };
  }
  getContents() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - e;
    return [e, t] = At(e, t), this.editor.getContents(e, t);
  }
  getFormat() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return typeof e == "number" ? this.editor.getFormat(e, t) : this.editor.getFormat(e.index, e.length);
  }
  getIndex(e) {
    return e.offset(this.scroll);
  }
  getLength() {
    return this.scroll.length();
  }
  getLeaf(e) {
    return this.scroll.leaf(e);
  }
  getLine(e) {
    return this.scroll.line(e);
  }
  getLines() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    return typeof e != "number" ? this.scroll.lines(e.index, e.length) : this.scroll.lines(e, t);
  }
  getModule(e) {
    return this.theme.modules[e];
  }
  getSelection() {
    return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) && this.focus(), this.update(), this.selection.getRange()[0];
  }
  getSemanticHTML() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
    return typeof e == "number" && (t = t ?? this.getLength() - e), [e, t] = At(e, t), this.editor.getHTML(e, t);
  }
  getText() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
    return typeof e == "number" && (t = t ?? this.getLength() - e), [e, t] = At(e, t), this.editor.getText(e, t);
  }
  hasFocus() {
    return this.selection.hasFocus();
  }
  insertEmbed(e, t, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ye.sources.API;
    return Je.call(this, () => this.editor.insertEmbed(e, t, r), s, e);
  }
  insertText(e, t, r, s, i) {
    let o;
    return [e, , o, i] = At(e, 0, r, s, i), Je.call(this, () => this.editor.insertText(e, t, o), i, e, t.length);
  }
  isEnabled() {
    return this.scroll.isEnabled();
  }
  off() {
    return this.emitter.off(...arguments);
  }
  on() {
    return this.emitter.on(...arguments);
  }
  once() {
    return this.emitter.once(...arguments);
  }
  removeFormat(e, t, r) {
    return [e, t, , r] = At(e, t, r), Je.call(this, () => this.editor.removeFormat(e, t), r, e);
  }
  scrollRectIntoView(e) {
    Wp(this.root, e);
  }
  /**
   * @deprecated Use Quill#scrollSelectionIntoView() instead.
   */
  scrollIntoView() {
    console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."), this.scrollSelectionIntoView();
  }
  /**
   * Scroll the current selection into the visible area.
   * If the selection is already visible, no scrolling will occur.
   */
  scrollSelectionIntoView() {
    const e = this.selection.lastRange, t = e && this.selection.getBounds(e.index, e.length);
    t && this.scrollRectIntoView(t);
  }
  setContents(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G.sources.API;
    return Je.call(this, () => {
      e = new W(e);
      const r = this.getLength(), s = this.editor.deleteText(0, r), i = this.editor.insertContents(0, e), o = this.editor.deleteText(this.getLength() - 1, 1);
      return s.compose(i).compose(o);
    }, t);
  }
  setSelection(e, t, r) {
    e == null ? this.selection.setRange(null, t || Ye.sources.API) : ([e, t, , r] = At(e, t, r), this.selection.setRange(new Qt(Math.max(0, e), t), r), r !== G.sources.SILENT && this.scrollSelectionIntoView());
  }
  setText(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G.sources.API;
    const r = new W().insert(e);
    return this.setContents(r, t);
  }
  update() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : G.sources.USER;
    const t = this.scroll.update(e);
    return this.selection.update(e), t;
  }
  updateContents(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : G.sources.API;
    return Je.call(this, () => (e = new W(e), this.editor.applyDelta(e)), t, !0);
  }
};
$(Ye, "DEFAULTS", {
  bounds: null,
  modules: {
    clipboard: !0,
    keyboard: !0,
    history: !0,
    uploader: !0
  },
  placeholder: "",
  readOnly: !1,
  registry: Jr,
  theme: "default"
}), $(Ye, "events", G.events), $(Ye, "sources", G.sources), $(Ye, "version", "2.0.2"), $(Ye, "imports", {
  delta: W,
  parchment: Lp,
  "core/module": st,
  "core/theme": Rn
});
let C = Ye;
function ml(n) {
  return typeof n == "string" ? document.querySelector(n) : n;
}
function yi(n) {
  return Object.entries(n ?? {}).reduce((e, t) => {
    let [r, s] = t;
    return {
      ...e,
      [r]: s === !0 ? {} : s
    };
  }, {});
}
function gl(n) {
  return Object.fromEntries(Object.entries(n).filter((e) => e[1] !== void 0));
}
function Xp(n, e) {
  const t = ml(n);
  if (!t)
    throw new Error("Invalid Quill container");
  const s = !e.theme || e.theme === C.DEFAULTS.theme ? Rn : C.import(`themes/${e.theme}`);
  if (!s)
    throw new Error(`Invalid theme ${e.theme}. Did you register it?`);
  const {
    modules: i,
    ...o
  } = C.DEFAULTS, {
    modules: a,
    ...c
  } = s.DEFAULTS;
  let u = yi(e.modules);
  u != null && u.toolbar && u.toolbar.constructor !== Object && (u = {
    ...u,
    toolbar: {
      container: u.toolbar
    }
  });
  const f = Pt({}, yi(i), yi(a), u), m = {
    ...o,
    ...gl(c),
    ...gl(e)
  };
  let d = e.registry;
  return d ? e.formats && Sn.warn('Ignoring "formats" option because "registry" is specified') : d = e.formats ? Yp(e.formats, m.registry, Sn) : m.registry, {
    ...m,
    registry: d,
    container: t,
    theme: s,
    modules: Object.entries(f).reduce((y, p) => {
      let [v, w] = p;
      if (!w) return y;
      const A = C.import(`modules/${v}`);
      return A == null ? (Sn.error(`Cannot load ${v} module. Are you sure you registered it?`), y) : {
        ...y,
        // @ts-expect-error
        [v]: Pt({}, A.DEFAULTS || {}, w)
      };
    }, {}),
    bounds: ml(m.bounds)
  };
}
function Je(n, e, t, r) {
  if (!this.isEnabled() && e === G.sources.USER && !this.allowReadOnlyEdits)
    return new W();
  let s = t == null ? null : this.getSelection();
  const i = this.editor.delta, o = n();
  if (s != null && (t === !0 && (t = s.index), r == null ? s = bl(s, o, e) : r !== 0 && (s = bl(s, t, r, e)), this.setSelection(s, G.sources.SILENT)), o.length() > 0) {
    const a = [G.events.TEXT_CHANGE, o, i, e];
    this.emitter.emit(G.events.EDITOR_CHANGE, ...a), e !== G.sources.SILENT && this.emitter.emit(...a);
  }
  return o;
}
function At(n, e, t, r, s) {
  let i = {};
  return typeof n.index == "number" && typeof n.length == "number" ? typeof e != "number" ? (s = r, r = t, t = e, e = n.length, n = n.index) : (e = n.length, n = n.index) : typeof e != "number" && (s = r, r = t, t = e, e = 0), typeof t == "object" ? (i = t, s = r) : typeof t == "string" && (r != null ? i[t] = r : s = t), s = s || G.sources.API, [n, e, i, s];
}
function bl(n, e, t, r) {
  const s = typeof t == "number" ? t : 0;
  if (n == null) return null;
  let i, o;
  return e && typeof e.transformPosition == "function" ? [i, o] = [n.index, n.index + n.length].map((a) => (
    // @ts-expect-error -- TODO: add a better type guard around `index`
    e.transformPosition(a, r !== G.sources.USER)
  )) : [i, o] = [n.index, n.index + n.length].map((a) => a < e || a === e && r === G.sources.USER ? a : s >= 0 ? a + s : Math.max(e, a + s)), new Qt(i, o - i);
}
class sn extends ms {
}
function yl(n) {
  return n instanceof Ae || n instanceof ze;
}
function vl(n) {
  return typeof n.updateContent == "function";
}
class xn extends ao {
  constructor(e, t, r) {
    let {
      emitter: s
    } = r;
    super(e, t), this.emitter = s, this.batch = !1, this.optimize(), this.enable(), this.domNode.addEventListener("dragstart", (i) => this.handleDragStart(i));
  }
  batchStart() {
    Array.isArray(this.batch) || (this.batch = []);
  }
  batchEnd() {
    if (!this.batch) return;
    const e = this.batch;
    this.batch = !1, this.update(e);
  }
  emitMount(e) {
    this.emitter.emit(G.events.SCROLL_BLOT_MOUNT, e);
  }
  emitUnmount(e) {
    this.emitter.emit(G.events.SCROLL_BLOT_UNMOUNT, e);
  }
  emitEmbedUpdate(e, t) {
    this.emitter.emit(G.events.SCROLL_EMBED_UPDATE, e, t);
  }
  deleteAt(e, t) {
    const [r, s] = this.line(e), [i] = this.line(e + t);
    if (super.deleteAt(e, t), i != null && r !== i && s > 0) {
      if (r instanceof ze || i instanceof ze) {
        this.optimize();
        return;
      }
      const o = i.children.head instanceof rt ? null : i.children.head;
      r.moveChildren(i, o), r.remove();
    }
    this.optimize();
  }
  enable() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.domNode.setAttribute("contenteditable", e ? "true" : "false");
  }
  formatAt(e, t, r, s) {
    super.formatAt(e, t, r, s), this.optimize();
  }
  insertAt(e, t, r) {
    if (e >= this.length())
      if (r == null || this.scroll.query(t, Z.BLOCK) == null) {
        const s = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(s), r == null && t.endsWith(`
`) ? s.insertAt(0, t.slice(0, -1), r) : s.insertAt(0, t, r);
      } else {
        const s = this.scroll.create(t, r);
        this.appendChild(s);
      }
    else
      super.insertAt(e, t, r);
    this.optimize();
  }
  insertBefore(e, t) {
    if (e.statics.scope === Z.INLINE_BLOT) {
      const r = this.scroll.create(this.statics.defaultChild.blotName);
      r.appendChild(e), super.insertBefore(r, t);
    } else
      super.insertBefore(e, t);
  }
  insertContents(e, t) {
    const r = this.deltaToRenderBlocks(t.concat(new W().insert(`
`))), s = r.pop();
    if (s == null) return;
    this.batchStart();
    const i = r.shift();
    if (i) {
      const c = i.type === "block" && (i.delta.length() === 0 || !this.descendant(ze, e)[0] && e < this.length()), u = i.type === "block" ? i.delta : new W().insert({
        [i.key]: i.value
      });
      vi(this, e, u);
      const f = i.type === "block" ? 1 : 0, m = e + u.length() + f;
      c && this.insertAt(m - 1, `
`);
      const d = Fe(this.line(e)[0]), y = Ke.AttributeMap.diff(d, i.attributes) || {};
      Object.keys(y).forEach((p) => {
        this.formatAt(m - 1, 1, p, y[p]);
      }), e = m;
    }
    let [o, a] = this.children.find(e);
    if (r.length && (o && (o = o.split(a), a = 0), r.forEach((c) => {
      if (c.type === "block") {
        const u = this.createBlock(c.attributes, o || void 0);
        vi(u, 0, c.delta);
      } else {
        const u = this.create(c.key, c.value);
        this.insertBefore(u, o || void 0), Object.keys(c.attributes).forEach((f) => {
          u.format(f, c.attributes[f]);
        });
      }
    })), s.type === "block" && s.delta.length()) {
      const c = o ? o.offset(o.scroll) + a : this.length();
      vi(this, c, s.delta);
    }
    this.batchEnd(), this.optimize();
  }
  isEnabled() {
    return this.domNode.getAttribute("contenteditable") === "true";
  }
  leaf(e) {
    const t = this.path(e).pop();
    if (!t)
      return [null, -1];
    const [r, s] = t;
    return r instanceof Ce ? [r, s] : [null, -1];
  }
  line(e) {
    return e === this.length() ? this.line(e - 1) : this.descendant(yl, e);
  }
  lines() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
    const r = (s, i, o) => {
      let a = [], c = o;
      return s.children.forEachAt(i, o, (u, f, m) => {
        yl(u) ? a.push(u) : u instanceof ms && (a = a.concat(r(u, f, c))), c -= m;
      }), a;
    };
    return r(this, e, t);
  }
  optimize() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.batch || (super.optimize(e, t), e.length > 0 && this.emitter.emit(G.events.SCROLL_OPTIMIZE, e, t));
  }
  path(e) {
    return super.path(e).slice(1);
  }
  remove() {
  }
  update(e) {
    if (this.batch) {
      Array.isArray(e) && (this.batch = this.batch.concat(e));
      return;
    }
    let t = G.sources.USER;
    typeof e == "string" && (t = e), Array.isArray(e) || (e = this.observer.takeRecords()), e = e.filter((r) => {
      let {
        target: s
      } = r;
      const i = this.find(s, !0);
      return i && !vl(i);
    }), e.length > 0 && this.emitter.emit(G.events.SCROLL_BEFORE_UPDATE, t, e), super.update(e.concat([])), e.length > 0 && this.emitter.emit(G.events.SCROLL_UPDATE, t, e);
  }
  updateEmbedAt(e, t, r) {
    const [s] = this.descendant((i) => i instanceof ze, e);
    s && s.statics.blotName === t && vl(s) && s.updateContent(r);
  }
  handleDragStart(e) {
    e.preventDefault();
  }
  deltaToRenderBlocks(e) {
    const t = [];
    let r = new W();
    return e.forEach((s) => {
      const i = s == null ? void 0 : s.insert;
      if (i)
        if (typeof i == "string") {
          const o = i.split(`
`);
          o.slice(0, -1).forEach((c) => {
            r.insert(c, s.attributes), t.push({
              type: "block",
              delta: r,
              attributes: s.attributes ?? {}
            }), r = new W();
          });
          const a = o[o.length - 1];
          a && r.insert(a, s.attributes);
        } else {
          const o = Object.keys(i)[0];
          if (!o) return;
          this.query(o, Z.INLINE) ? r.push(s) : (r.length() && t.push({
            type: "block",
            delta: r,
            attributes: {}
          }), r = new W(), t.push({
            type: "blockEmbed",
            key: o,
            value: i[o],
            attributes: s.attributes ?? {}
          }));
        }
    }), r.length() && t.push({
      type: "block",
      delta: r,
      attributes: {}
    }), t;
  }
  createBlock(e, t) {
    let r;
    const s = {};
    Object.entries(e).forEach((a) => {
      let [c, u] = a;
      this.query(c, Z.BLOCK & Z.BLOT) != null ? r = c : s[c] = u;
    });
    const i = this.create(r || this.statics.defaultChild.blotName, r ? e[r] : void 0);
    this.insertBefore(i, t || void 0);
    const o = i.length();
    return Object.entries(s).forEach((a) => {
      let [c, u] = a;
      i.formatAt(0, o, c, u);
    }), i;
  }
}
$(xn, "blotName", "scroll"), $(xn, "className", "ql-editor"), $(xn, "tagName", "DIV"), $(xn, "defaultChild", Ae), $(xn, "allowedChildren", [Ae, ze, sn]);
function vi(n, e, t) {
  t.reduce((r, s) => {
    const i = Ke.Op.length(s);
    let o = s.attributes || {};
    if (s.insert != null) {
      if (typeof s.insert == "string") {
        const a = s.insert;
        n.insertAt(r, a);
        const [c] = n.descendant(Ce, r), u = Fe(c);
        o = Ke.AttributeMap.diff(u, o) || {};
      } else if (typeof s.insert == "object") {
        const a = Object.keys(s.insert)[0];
        if (a == null) return r;
        if (n.insertAt(r, a, s.insert[a]), n.scroll.query(a, Z.INLINE) != null) {
          const [u] = n.descendant(Ce, r), f = Fe(u);
          o = Ke.AttributeMap.diff(f, o) || {};
        }
      }
    }
    return Object.keys(o).forEach((a) => {
      n.formatAt(r, i, a, o[a]);
    }), r + i;
  }, e);
}
const uo = {
  scope: Z.BLOCK,
  whitelist: ["right", "center", "justify"]
}, Qp = new pt("align", "align", uo), Ia = new nt("align", "ql-align", uo), ka = new Ut("align", "text-align", uo);
class ja extends Ut {
  value(e) {
    let t = super.value(e);
    return t.startsWith("rgb(") ? (t = t.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), `#${t.split(",").map((s) => `00${parseInt(s, 10).toString(16)}`.slice(-2)).join("")}`) : t;
  }
}
const em = new nt("color", "ql-color", {
  scope: Z.INLINE
}), ho = new ja("color", "color", {
  scope: Z.INLINE
}), tm = new nt("background", "ql-bg", {
  scope: Z.INLINE
}), fo = new ja("background", "background-color", {
  scope: Z.INLINE
});
class on extends sn {
  static create(e) {
    const t = super.create(e);
    return t.setAttribute("spellcheck", "false"), t;
  }
  code(e, t) {
    return this.children.map((r) => r.length() <= 1 ? "" : r.domNode.innerText).join(`
`).slice(e, e + t);
  }
  html(e, t) {
    return `<pre>
${gs(this.code(e, t))}
</pre>`;
  }
}
class Le extends Ae {
  static register() {
    C.register(on);
  }
}
$(Le, "TAB", "  ");
class po extends mt {
}
po.blotName = "code";
po.tagName = "CODE";
Le.blotName = "code-block";
Le.className = "ql-code-block";
Le.tagName = "DIV";
on.blotName = "code-block-container";
on.className = "ql-code-block-container";
on.tagName = "DIV";
on.allowedChildren = [Le];
Le.allowedChildren = [tt, rt, Cn];
Le.requiredContainer = on;
const mo = {
  scope: Z.BLOCK,
  whitelist: ["rtl"]
}, Ba = new pt("direction", "dir", mo), Pa = new nt("direction", "ql-direction", mo), Ma = new Ut("direction", "direction", mo), Da = {
  scope: Z.INLINE,
  whitelist: ["serif", "monospace"]
}, Ua = new nt("font", "ql-font", Da);
class nm extends Ut {
  value(e) {
    return super.value(e).replace(/["']/g, "");
  }
}
const $a = new nm("font", "font-family", Da), Fa = new nt("size", "ql-size", {
  scope: Z.INLINE,
  whitelist: ["small", "large", "huge"]
}), Ha = new Ut("size", "font-size", {
  scope: Z.INLINE,
  whitelist: ["10px", "18px", "32px"]
}), rm = Ct("quill:keyboard"), sm = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
class bs extends st {
  static match(e, t) {
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].some((r) => !!t[r] !== e[r] && t[r] !== null) ? !1 : t.key === e.key || t.key === e.which;
  }
  constructor(e, t) {
    super(e, t), this.bindings = {}, Object.keys(this.options.bindings).forEach((r) => {
      this.options.bindings[r] && this.addBinding(this.options.bindings[r]);
    }), this.addBinding({
      key: "Enter",
      shiftKey: null
    }, this.handleEnter), this.addBinding({
      key: "Enter",
      metaKey: null,
      ctrlKey: null,
      altKey: null
    }, () => {
    }), /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0
    }, this.handleDelete)) : (this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !0,
      prefix: /^.?$/
    }, this.handleBackspace), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !0,
      suffix: /^.?$/
    }, this.handleDelete)), this.addBinding({
      key: "Backspace"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Delete"
    }, {
      collapsed: !1
    }, this.handleDeleteRange), this.addBinding({
      key: "Backspace",
      altKey: null,
      ctrlKey: null,
      metaKey: null,
      shiftKey: null
    }, {
      collapsed: !0,
      offset: 0
    }, this.handleBackspace), this.listen();
  }
  addBinding(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = om(e);
    if (s == null) {
      rm.warn("Attempted to add invalid keyboard binding", s);
      return;
    }
    typeof t == "function" && (t = {
      handler: t
    }), typeof r == "function" && (r = {
      handler: r
    }), (Array.isArray(s.key) ? s.key : [s.key]).forEach((o) => {
      const a = {
        ...s,
        key: o,
        ...t,
        ...r
      };
      this.bindings[a.key] = this.bindings[a.key] || [], this.bindings[a.key].push(a);
    });
  }
  listen() {
    this.quill.root.addEventListener("keydown", (e) => {
      if (e.defaultPrevented || e.isComposing || e.keyCode === 229 && (e.key === "Enter" || e.key === "Backspace")) return;
      const s = (this.bindings[e.key] || []).concat(this.bindings[e.which] || []).filter((A) => bs.match(e, A));
      if (s.length === 0) return;
      const i = C.find(e.target, !0);
      if (i && i.scroll !== this.quill.scroll) return;
      const o = this.quill.getSelection();
      if (o == null || !this.quill.hasFocus()) return;
      const [a, c] = this.quill.getLine(o.index), [u, f] = this.quill.getLeaf(o.index), [m, d] = o.length === 0 ? [u, f] : this.quill.getLeaf(o.index + o.length), y = u instanceof cs ? u.value().slice(0, f) : "", p = m instanceof cs ? m.value().slice(d) : "", v = {
        collapsed: o.length === 0,
        // @ts-expect-error Fix me later
        empty: o.length === 0 && a.length() <= 1,
        format: this.quill.getFormat(o),
        line: a,
        offset: c,
        prefix: y,
        suffix: p,
        event: e
      };
      s.some((A) => {
        if (A.collapsed != null && A.collapsed !== v.collapsed || A.empty != null && A.empty !== v.empty || A.offset != null && A.offset !== v.offset)
          return !1;
        if (Array.isArray(A.format)) {
          if (A.format.every((R) => v.format[R] == null))
            return !1;
        } else if (typeof A.format == "object" && !Object.keys(A.format).every((R) => A.format[R] === !0 ? v.format[R] != null : A.format[R] === !1 ? v.format[R] == null : oo(A.format[R], v.format[R])))
          return !1;
        return A.prefix != null && !A.prefix.test(v.prefix) || A.suffix != null && !A.suffix.test(v.suffix) ? !1 : A.handler.call(this, o, v, A) !== !0;
      }) && e.preventDefault();
    });
  }
  handleBackspace(e, t) {
    const r = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(t.prefix) ? 2 : 1;
    if (e.index === 0 || this.quill.getLength() <= 1) return;
    let s = {};
    const [i] = this.quill.getLine(e.index);
    let o = new W().retain(e.index - r).delete(r);
    if (t.offset === 0) {
      const [a] = this.quill.getLine(e.index - 1);
      if (a && !(a.statics.blotName === "block" && a.length() <= 1)) {
        const u = i.formats(), f = this.quill.getFormat(e.index - 1, 1);
        if (s = Ke.AttributeMap.diff(u, f) || {}, Object.keys(s).length > 0) {
          const m = new W().retain(e.index + i.length() - 2).retain(1, s);
          o = o.compose(m);
        }
      }
    }
    this.quill.updateContents(o, C.sources.USER), this.quill.focus();
  }
  handleDelete(e, t) {
    const r = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(t.suffix) ? 2 : 1;
    if (e.index >= this.quill.getLength() - r) return;
    let s = {};
    const [i] = this.quill.getLine(e.index);
    let o = new W().retain(e.index).delete(r);
    if (t.offset >= i.length() - 1) {
      const [a] = this.quill.getLine(e.index + 1);
      if (a) {
        const c = i.formats(), u = this.quill.getFormat(e.index, 1);
        s = Ke.AttributeMap.diff(c, u) || {}, Object.keys(s).length > 0 && (o = o.retain(a.length() - 1).retain(1, s));
      }
    }
    this.quill.updateContents(o, C.sources.USER), this.quill.focus();
  }
  handleDeleteRange(e) {
    go({
      range: e,
      quill: this.quill
    }), this.quill.focus();
  }
  handleEnter(e, t) {
    const r = Object.keys(t.format).reduce((i, o) => (this.quill.scroll.query(o, Z.BLOCK) && !Array.isArray(t.format[o]) && (i[o] = t.format[o]), i), {}), s = new W().retain(e.index).delete(e.length).insert(`
`, r);
    this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(e.index + 1, C.sources.SILENT), this.quill.focus();
  }
}
const im = {
  bindings: {
    bold: wi("bold"),
    italic: wi("italic"),
    underline: wi("underline"),
    indent: {
      // highlight tab or tab at beginning of list, indent or blockquote
      key: "Tab",
      format: ["blockquote", "indent", "list"],
      handler(n, e) {
        return e.collapsed && e.offset !== 0 ? !0 : (this.quill.format("indent", "+1", C.sources.USER), !1);
      }
    },
    outdent: {
      key: "Tab",
      shiftKey: !0,
      format: ["blockquote", "indent", "list"],
      // highlight tab or tab at beginning of list, indent or blockquote
      handler(n, e) {
        return e.collapsed && e.offset !== 0 ? !0 : (this.quill.format("indent", "-1", C.sources.USER), !1);
      }
    },
    "outdent backspace": {
      key: "Backspace",
      collapsed: !0,
      shiftKey: null,
      metaKey: null,
      ctrlKey: null,
      altKey: null,
      format: ["indent", "list"],
      offset: 0,
      handler(n, e) {
        e.format.indent != null ? this.quill.format("indent", "-1", C.sources.USER) : e.format.list != null && this.quill.format("list", !1, C.sources.USER);
      }
    },
    "indent code-block": wl(!0),
    "outdent code-block": wl(!1),
    "remove tab": {
      key: "Tab",
      shiftKey: !0,
      collapsed: !0,
      prefix: /\t$/,
      handler(n) {
        this.quill.deleteText(n.index - 1, 1, C.sources.USER);
      }
    },
    tab: {
      key: "Tab",
      handler(n, e) {
        if (e.format.table) return !0;
        this.quill.history.cutoff();
        const t = new W().retain(n.index).delete(n.length).insert("	");
        return this.quill.updateContents(t, C.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index + 1, C.sources.SILENT), !1;
      }
    },
    "blockquote empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["blockquote"],
      empty: !0,
      handler() {
        this.quill.format("blockquote", !1, C.sources.USER);
      }
    },
    "list empty enter": {
      key: "Enter",
      collapsed: !0,
      format: ["list"],
      empty: !0,
      handler(n, e) {
        const t = {
          list: !1
        };
        e.format.indent && (t.indent = !1), this.quill.formatLine(n.index, n.length, t, C.sources.USER);
      }
    },
    "checklist enter": {
      key: "Enter",
      collapsed: !0,
      format: {
        list: "checked"
      },
      handler(n) {
        const [e, t] = this.quill.getLine(n.index), r = {
          // @ts-expect-error Fix me later
          ...e.formats(),
          list: "checked"
        }, s = new W().retain(n.index).insert(`
`, r).retain(e.length() - t - 1).retain(1, {
          list: "unchecked"
        });
        this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(n.index + 1, C.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "header enter": {
      key: "Enter",
      collapsed: !0,
      format: ["header"],
      suffix: /^$/,
      handler(n, e) {
        const [t, r] = this.quill.getLine(n.index), s = new W().retain(n.index).insert(`
`, e.format).retain(t.length() - r - 1).retain(1, {
          header: null
        });
        this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(n.index + 1, C.sources.SILENT), this.quill.scrollSelectionIntoView();
      }
    },
    "table backspace": {
      key: "Backspace",
      format: ["table"],
      collapsed: !0,
      offset: 0,
      handler() {
      }
    },
    "table delete": {
      key: "Delete",
      format: ["table"],
      collapsed: !0,
      suffix: /^$/,
      handler() {
      }
    },
    "table enter": {
      key: "Enter",
      shiftKey: null,
      format: ["table"],
      handler(n) {
        const e = this.quill.getModule("table");
        if (e) {
          const [t, r, s, i] = e.getTable(n), o = lm(t, r, s, i);
          if (o == null) return;
          let a = t.offset();
          if (o < 0) {
            const c = new W().retain(a).insert(`
`);
            this.quill.updateContents(c, C.sources.USER), this.quill.setSelection(n.index + 1, n.length, C.sources.SILENT);
          } else if (o > 0) {
            a += t.length();
            const c = new W().retain(a).insert(`
`);
            this.quill.updateContents(c, C.sources.USER), this.quill.setSelection(a, C.sources.USER);
          }
        }
      }
    },
    "table tab": {
      key: "Tab",
      shiftKey: null,
      format: ["table"],
      handler(n, e) {
        const {
          event: t,
          line: r
        } = e, s = r.offset(this.quill.scroll);
        t.shiftKey ? this.quill.setSelection(s - 1, C.sources.USER) : this.quill.setSelection(s + r.length(), C.sources.USER);
      }
    },
    "list autofill": {
      key: " ",
      shiftKey: null,
      collapsed: !0,
      format: {
        "code-block": !1,
        blockquote: !1,
        table: !1
      },
      prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
      handler(n, e) {
        if (this.quill.scroll.query("list") == null) return !0;
        const {
          length: t
        } = e.prefix, [r, s] = this.quill.getLine(n.index);
        if (s > t) return !0;
        let i;
        switch (e.prefix.trim()) {
          case "[]":
          case "[ ]":
            i = "unchecked";
            break;
          case "[x]":
            i = "checked";
            break;
          case "-":
          case "*":
            i = "bullet";
            break;
          default:
            i = "ordered";
        }
        this.quill.insertText(n.index, " ", C.sources.USER), this.quill.history.cutoff();
        const o = new W().retain(n.index - s).delete(t + 1).retain(r.length() - 2 - s).retain(1, {
          list: i
        });
        return this.quill.updateContents(o, C.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(n.index - t, C.sources.SILENT), !1;
      }
    },
    "code exit": {
      key: "Enter",
      collapsed: !0,
      format: ["code-block"],
      prefix: /^$/,
      suffix: /^\s*$/,
      handler(n) {
        const [e, t] = this.quill.getLine(n.index);
        let r = 2, s = e;
        for (; s != null && s.length() <= 1 && s.formats()["code-block"]; )
          if (s = s.prev, r -= 1, r <= 0) {
            const i = new W().retain(n.index + e.length() - t - 2).retain(1, {
              "code-block": null
            }).delete(1);
            return this.quill.updateContents(i, C.sources.USER), this.quill.setSelection(n.index - 1, C.sources.SILENT), !1;
          }
        return !0;
      }
    },
    "embed left": Yr("ArrowLeft", !1),
    "embed left shift": Yr("ArrowLeft", !0),
    "embed right": Yr("ArrowRight", !1),
    "embed right shift": Yr("ArrowRight", !0),
    "table down": El(!1),
    "table up": El(!0)
  }
};
bs.DEFAULTS = im;
function wl(n) {
  return {
    key: "Tab",
    shiftKey: !n,
    format: {
      "code-block": !0
    },
    handler(e, t) {
      let {
        event: r
      } = t;
      const s = this.quill.scroll.query("code-block"), {
        TAB: i
      } = s;
      if (e.length === 0 && !r.shiftKey) {
        this.quill.insertText(e.index, i, C.sources.USER), this.quill.setSelection(e.index + i.length, C.sources.SILENT);
        return;
      }
      const o = e.length === 0 ? this.quill.getLines(e.index, 1) : this.quill.getLines(e);
      let {
        index: a,
        length: c
      } = e;
      o.forEach((u, f) => {
        n ? (u.insertAt(0, i), f === 0 ? a += i.length : c += i.length) : u.domNode.textContent.startsWith(i) && (u.deleteAt(0, i.length), f === 0 ? a -= i.length : c -= i.length);
      }), this.quill.update(C.sources.USER), this.quill.setSelection(a, c, C.sources.SILENT);
    }
  };
}
function Yr(n, e) {
  return {
    key: n,
    shiftKey: e,
    altKey: null,
    [n === "ArrowLeft" ? "prefix" : "suffix"]: /^$/,
    handler(r) {
      let {
        index: s
      } = r;
      n === "ArrowRight" && (s += r.length + 1);
      const [i] = this.quill.getLeaf(s);
      return i instanceof De ? (n === "ArrowLeft" ? e ? this.quill.setSelection(r.index - 1, r.length + 1, C.sources.USER) : this.quill.setSelection(r.index - 1, C.sources.USER) : e ? this.quill.setSelection(r.index, r.length + 1, C.sources.USER) : this.quill.setSelection(r.index + r.length + 1, C.sources.USER), !1) : !0;
    }
  };
}
function wi(n) {
  return {
    key: n[0],
    shortKey: !0,
    handler(e, t) {
      this.quill.format(n, !t.format[n], C.sources.USER);
    }
  };
}
function El(n) {
  return {
    key: n ? "ArrowUp" : "ArrowDown",
    collapsed: !0,
    format: ["table"],
    handler(e, t) {
      const r = n ? "prev" : "next", s = t.line, i = s.parent[r];
      if (i != null) {
        if (i.statics.blotName === "table-row") {
          let o = i.children.head, a = s;
          for (; a.prev != null; )
            a = a.prev, o = o.next;
          const c = o.offset(this.quill.scroll) + Math.min(t.offset, o.length() - 1);
          this.quill.setSelection(c, 0, C.sources.USER);
        }
      } else {
        const o = s.table()[r];
        o != null && (n ? this.quill.setSelection(o.offset(this.quill.scroll) + o.length() - 1, 0, C.sources.USER) : this.quill.setSelection(o.offset(this.quill.scroll), 0, C.sources.USER));
      }
      return !1;
    }
  };
}
function om(n) {
  if (typeof n == "string" || typeof n == "number")
    n = {
      key: n
    };
  else if (typeof n == "object")
    n = An(n);
  else
    return null;
  return n.shortKey && (n[sm] = n.shortKey, delete n.shortKey), n;
}
function go(n) {
  let {
    quill: e,
    range: t
  } = n;
  const r = e.getLines(t);
  let s = {};
  if (r.length > 1) {
    const i = r[0].formats(), o = r[r.length - 1].formats();
    s = Ke.AttributeMap.diff(o, i) || {};
  }
  e.deleteText(t, C.sources.USER), Object.keys(s).length > 0 && e.formatLine(t.index, 1, s, C.sources.USER), e.setSelection(t.index, C.sources.SILENT);
}
function lm(n, e, t, r) {
  return e.prev == null && e.next == null ? t.prev == null && t.next == null ? r === 0 ? -1 : 1 : t.prev == null ? -1 : 1 : e.prev == null ? -1 : e.next == null ? 1 : null;
}
const am = /font-weight:\s*normal/, cm = ["P", "OL", "UL"], xl = (n) => n && cm.includes(n.tagName), um = (n) => {
  Array.from(n.querySelectorAll("br")).filter((e) => xl(e.previousElementSibling) && xl(e.nextElementSibling)).forEach((e) => {
    var t;
    (t = e.parentNode) == null || t.removeChild(e);
  });
}, hm = (n) => {
  Array.from(n.querySelectorAll('b[style*="font-weight"]')).filter((e) => {
    var t;
    return (t = e.getAttribute("style")) == null ? void 0 : t.match(am);
  }).forEach((e) => {
    var r;
    const t = n.createDocumentFragment();
    t.append(...e.childNodes), (r = e.parentNode) == null || r.replaceChild(t, e);
  });
};
function fm(n) {
  n.querySelector('[id^="docs-internal-guid-"]') && (hm(n), um(n));
}
const dm = /\bmso-list:[^;]*ignore/i, pm = /\bmso-list:[^;]*\bl(\d+)/i, mm = /\bmso-list:[^;]*\blevel(\d+)/i, gm = (n, e) => {
  const t = n.getAttribute("style"), r = t == null ? void 0 : t.match(pm);
  if (!r)
    return null;
  const s = Number(r[1]), i = t == null ? void 0 : t.match(mm), o = i ? Number(i[1]) : 1, a = new RegExp(`@list l${s}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i"), c = e.match(a), u = c && c[1] === "bullet" ? "bullet" : "ordered";
  return {
    id: s,
    indent: o,
    type: u,
    element: n
  };
}, bm = (n) => {
  var o, a;
  const e = Array.from(n.querySelectorAll("[style*=mso-list]")), t = [], r = [];
  e.forEach((c) => {
    (c.getAttribute("style") || "").match(dm) ? t.push(c) : r.push(c);
  }), t.forEach((c) => {
    var u;
    return (u = c.parentNode) == null ? void 0 : u.removeChild(c);
  });
  const s = n.documentElement.innerHTML, i = r.map((c) => gm(c, s)).filter((c) => c);
  for (; i.length; ) {
    const c = [];
    let u = i.shift();
    for (; u; )
      c.push(u), u = i.length && ((o = i[0]) == null ? void 0 : o.element) === u.element.nextElementSibling && // Different id means the next item doesn't belong to this group.
      i[0].id === u.id ? i.shift() : null;
    const f = document.createElement("ul");
    c.forEach((y) => {
      const p = document.createElement("li");
      p.setAttribute("data-list", y.type), y.indent > 1 && p.setAttribute("class", `ql-indent-${y.indent - 1}`), p.innerHTML = y.element.innerHTML, f.appendChild(p);
    });
    const m = (a = c[0]) == null ? void 0 : a.element, {
      parentNode: d
    } = m ?? {};
    m && (d == null || d.replaceChild(f, m)), c.slice(1).forEach((y) => {
      let {
        element: p
      } = y;
      d == null || d.removeChild(p);
    });
  }
};
function ym(n) {
  n.documentElement.getAttribute("xmlns:w") === "urn:schemas-microsoft-com:office:word" && bm(n);
}
const vm = [ym, fm], wm = (n) => {
  n.documentElement && vm.forEach((e) => {
    e(n);
  });
}, Em = Ct("quill:clipboard"), xm = [[Node.TEXT_NODE, km], [Node.TEXT_NODE, Al], ["br", _m], [Node.ELEMENT_NODE, Al], [Node.ELEMENT_NODE, Sm], [Node.ELEMENT_NODE, Tm], [Node.ELEMENT_NODE, qm], ["li", Rm], ["ol, ul", Lm], ["pre", Om], ["tr", Im], ["b", Ei("bold")], ["i", Ei("italic")], ["strike", Ei("strike")], ["style", Cm]], Nm = [Qp, Ba].reduce((n, e) => (n[e.keyName] = e, n), {}), Nl = [ka, fo, ho, Ma, $a, Ha].reduce((n, e) => (n[e.keyName] = e, n), {});
class za extends st {
  constructor(e, t) {
    super(e, t), this.quill.root.addEventListener("copy", (r) => this.onCaptureCopy(r, !1)), this.quill.root.addEventListener("cut", (r) => this.onCaptureCopy(r, !0)), this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)), this.matchers = [], xm.concat(this.options.matchers ?? []).forEach((r) => {
      let [s, i] = r;
      this.addMatcher(s, i);
    });
  }
  addMatcher(e, t) {
    this.matchers.push([e, t]);
  }
  convert(e) {
    let {
      html: t,
      text: r
    } = e, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (s[Le.blotName])
      return new W().insert(r || "", {
        [Le.blotName]: s[Le.blotName]
      });
    if (!t)
      return new W().insert(r || "", s);
    const i = this.convertHTML(t);
    return gr(i, `
`) && (i.ops[i.ops.length - 1].attributes == null || s.table) ? i.compose(new W().retain(i.length() - 1).delete(1)) : i;
  }
  normalizeHTML(e) {
    wm(e);
  }
  convertHTML(e) {
    const t = new DOMParser().parseFromString(e, "text/html");
    this.normalizeHTML(t);
    const r = t.body, s = /* @__PURE__ */ new WeakMap(), [i, o] = this.prepareMatching(r, s);
    return bo(this.quill.scroll, r, i, o, s);
  }
  dangerouslyPasteHTML(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : C.sources.API;
    if (typeof e == "string") {
      const s = this.convert({
        html: e,
        text: ""
      });
      this.quill.setContents(s, t), this.quill.setSelection(0, C.sources.SILENT);
    } else {
      const s = this.convert({
        html: t,
        text: ""
      });
      this.quill.updateContents(new W().retain(e).concat(s), r), this.quill.setSelection(e + s.length(), C.sources.SILENT);
    }
  }
  onCaptureCopy(e) {
    var o, a;
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (e.defaultPrevented) return;
    e.preventDefault();
    const [r] = this.quill.selection.getRange();
    if (r == null) return;
    const {
      html: s,
      text: i
    } = this.onCopy(r, t);
    (o = e.clipboardData) == null || o.setData("text/plain", i), (a = e.clipboardData) == null || a.setData("text/html", s), t && go({
      range: r,
      quill: this.quill
    });
  }
  /*
   * https://www.iana.org/assignments/media-types/text/uri-list
   */
  normalizeURIList(e) {
    return e.split(/\r?\n/).filter((t) => t[0] !== "#").join(`
`);
  }
  onCapturePaste(e) {
    var o, a, c, u, f;
    if (e.defaultPrevented || !this.quill.isEnabled()) return;
    e.preventDefault();
    const t = this.quill.getSelection(!0);
    if (t == null) return;
    const r = (o = e.clipboardData) == null ? void 0 : o.getData("text/html");
    let s = (a = e.clipboardData) == null ? void 0 : a.getData("text/plain");
    if (!r && !s) {
      const m = (c = e.clipboardData) == null ? void 0 : c.getData("text/uri-list");
      m && (s = this.normalizeURIList(m));
    }
    const i = Array.from(((u = e.clipboardData) == null ? void 0 : u.files) || []);
    if (!r && i.length > 0) {
      this.quill.uploader.upload(t, i);
      return;
    }
    if (r && i.length > 0) {
      const m = new DOMParser().parseFromString(r, "text/html");
      if (m.body.childElementCount === 1 && ((f = m.body.firstElementChild) == null ? void 0 : f.tagName) === "IMG") {
        this.quill.uploader.upload(t, i);
        return;
      }
    }
    this.onPaste(t, {
      html: r,
      text: s
    });
  }
  onCopy(e) {
    const t = this.quill.getText(e);
    return {
      html: this.quill.getSemanticHTML(e),
      text: t
    };
  }
  onPaste(e, t) {
    let {
      text: r,
      html: s
    } = t;
    const i = this.quill.getFormat(e.index), o = this.convert({
      text: r,
      html: s
    }, i);
    Em.log("onPaste", o, {
      text: r,
      html: s
    });
    const a = new W().retain(e.index).delete(e.length).concat(o);
    this.quill.updateContents(a, C.sources.USER), this.quill.setSelection(a.length() - e.length, C.sources.SILENT), this.quill.scrollSelectionIntoView();
  }
  prepareMatching(e, t) {
    const r = [], s = [];
    return this.matchers.forEach((i) => {
      const [o, a] = i;
      switch (o) {
        case Node.TEXT_NODE:
          s.push(a);
          break;
        case Node.ELEMENT_NODE:
          r.push(a);
          break;
        default:
          Array.from(e.querySelectorAll(o)).forEach((c) => {
            if (t.has(c)) {
              const u = t.get(c);
              u == null || u.push(a);
            } else
              t.set(c, [a]);
          });
          break;
      }
    }), [r, s];
  }
}
$(za, "DEFAULTS", {
  matchers: []
});
function ln(n, e, t, r) {
  return r.query(e) ? n.reduce((s, i) => {
    if (!i.insert) return s;
    if (i.attributes && i.attributes[e])
      return s.push(i);
    const o = t ? {
      [e]: t
    } : {};
    return s.insert(i.insert, {
      ...o,
      ...i.attributes
    });
  }, new W()) : n;
}
function gr(n, e) {
  let t = "";
  for (let r = n.ops.length - 1; r >= 0 && t.length < e.length; --r) {
    const s = n.ops[r];
    if (typeof s.insert != "string") break;
    t = s.insert + t;
  }
  return t.slice(-1 * e.length) === e;
}
function jt(n, e) {
  if (!(n instanceof Element)) return !1;
  const t = e.query(n);
  return t && t.prototype instanceof De ? !1 : ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(n.tagName.toLowerCase());
}
function Am(n, e) {
  return n.previousElementSibling && n.nextElementSibling && !jt(n.previousElementSibling, e) && !jt(n.nextElementSibling, e);
}
const Xr = /* @__PURE__ */ new WeakMap();
function Ka(n) {
  return n == null ? !1 : (Xr.has(n) || (n.tagName === "PRE" ? Xr.set(n, !0) : Xr.set(n, Ka(n.parentNode))), Xr.get(n));
}
function bo(n, e, t, r, s) {
  return e.nodeType === e.TEXT_NODE ? r.reduce((i, o) => o(e, i, n), new W()) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce((i, o) => {
    let a = bo(n, o, t, r, s);
    return o.nodeType === e.ELEMENT_NODE && (a = t.reduce((c, u) => u(o, c, n), a), a = (s.get(o) || []).reduce((c, u) => u(o, c, n), a)), i.concat(a);
  }, new W()) : new W();
}
function Ei(n) {
  return (e, t, r) => ln(t, n, !0, r);
}
function Tm(n, e, t) {
  const r = pt.keys(n), s = nt.keys(n), i = Ut.keys(n), o = {};
  return r.concat(s).concat(i).forEach((a) => {
    let c = t.query(a, Z.ATTRIBUTE);
    c != null && (o[c.attrName] = c.value(n), o[c.attrName]) || (c = Nm[a], c != null && (c.attrName === a || c.keyName === a) && (o[c.attrName] = c.value(n) || void 0), c = Nl[a], c != null && (c.attrName === a || c.keyName === a) && (c = Nl[a], o[c.attrName] = c.value(n) || void 0));
  }), Object.entries(o).reduce((a, c) => {
    let [u, f] = c;
    return ln(a, u, f, t);
  }, e);
}
function Sm(n, e, t) {
  const r = t.query(n);
  if (r == null) return e;
  if (r.prototype instanceof De) {
    const s = {}, i = r.value(n);
    if (i != null)
      return s[r.blotName] = i, new W().insert(s, r.formats(n, t));
  } else if (r.prototype instanceof hr && !gr(e, `
`) && e.insert(`
`), "blotName" in r && "formats" in r && typeof r.formats == "function")
    return ln(e, r.blotName, r.formats(n, t), t);
  return e;
}
function _m(n, e) {
  return gr(e, `
`) || e.insert(`
`), e;
}
function Om(n, e, t) {
  const r = t.query("code-block"), s = r && "formats" in r && typeof r.formats == "function" ? r.formats(n, t) : !0;
  return ln(e, "code-block", s, t);
}
function Cm() {
  return new W();
}
function Rm(n, e, t) {
  const r = t.query(n);
  if (r == null || // @ts-expect-error
  r.blotName !== "list" || !gr(e, `
`))
    return e;
  let s = -1, i = n.parentNode;
  for (; i != null; )
    ["OL", "UL"].includes(i.tagName) && (s += 1), i = i.parentNode;
  return s <= 0 ? e : e.reduce((o, a) => a.insert ? a.attributes && typeof a.attributes.indent == "number" ? o.push(a) : o.insert(a.insert, {
    indent: s,
    ...a.attributes || {}
  }) : o, new W());
}
function Lm(n, e, t) {
  const r = n;
  let s = r.tagName === "OL" ? "ordered" : "bullet";
  const i = r.getAttribute("data-checked");
  return i && (s = i === "true" ? "checked" : "unchecked"), ln(e, "list", s, t);
}
function Al(n, e, t) {
  if (!gr(e, `
`)) {
    if (jt(n, t) && (n.childNodes.length > 0 || n instanceof HTMLParagraphElement))
      return e.insert(`
`);
    if (e.length() > 0 && n.nextSibling) {
      let r = n.nextSibling;
      for (; r != null; ) {
        if (jt(r, t))
          return e.insert(`
`);
        const s = t.query(r);
        if (s && s.prototype instanceof ze)
          return e.insert(`
`);
        r = r.firstChild;
      }
    }
  }
  return e;
}
function qm(n, e, t) {
  var i;
  const r = {}, s = n.style || {};
  return s.fontStyle === "italic" && (r.italic = !0), s.textDecoration === "underline" && (r.underline = !0), s.textDecoration === "line-through" && (r.strike = !0), ((i = s.fontWeight) != null && i.startsWith("bold") || // @ts-expect-error Fix me later
  parseInt(s.fontWeight, 10) >= 700) && (r.bold = !0), e = Object.entries(r).reduce((o, a) => {
    let [c, u] = a;
    return ln(o, c, u, t);
  }, e), parseFloat(s.textIndent || 0) > 0 ? new W().insert("	").concat(e) : e;
}
function Im(n, e, t) {
  var s, i;
  const r = ((s = n.parentElement) == null ? void 0 : s.tagName) === "TABLE" ? n.parentElement : (i = n.parentElement) == null ? void 0 : i.parentElement;
  if (r != null) {
    const a = Array.from(r.querySelectorAll("tr")).indexOf(n) + 1;
    return ln(e, "table", a, t);
  }
  return e;
}
function km(n, e, t) {
  var s;
  let r = n.data;
  if (((s = n.parentElement) == null ? void 0 : s.tagName) === "O:P")
    return e.insert(r.trim());
  if (!Ka(n)) {
    if (r.trim().length === 0 && r.includes(`
`) && !Am(n, t))
      return e;
    const i = (o, a) => {
      const c = a.replace(/[^\u00a0]/g, "");
      return c.length < 1 && o ? " " : c;
    };
    r = r.replace(/\r\n/g, " ").replace(/\n/g, " "), r = r.replace(/\s\s+/g, i.bind(i, !0)), (n.previousSibling == null && n.parentElement != null && jt(n.parentElement, t) || n.previousSibling instanceof Element && jt(n.previousSibling, t)) && (r = r.replace(/^\s+/, i.bind(i, !1))), (n.nextSibling == null && n.parentElement != null && jt(n.parentElement, t) || n.nextSibling instanceof Element && jt(n.nextSibling, t)) && (r = r.replace(/\s+$/, i.bind(i, !1)));
  }
  return e.insert(r);
}
class Va extends st {
  constructor(t, r) {
    super(t, r);
    $(this, "lastRecorded", 0);
    $(this, "ignoreChange", !1);
    $(this, "stack", {
      undo: [],
      redo: []
    });
    $(this, "currentRange", null);
    this.quill.on(C.events.EDITOR_CHANGE, (s, i, o, a) => {
      s === C.events.SELECTION_CHANGE ? i && a !== C.sources.SILENT && (this.currentRange = i) : s === C.events.TEXT_CHANGE && (this.ignoreChange || (!this.options.userOnly || a === C.sources.USER ? this.record(i, o) : this.transform(i)), this.currentRange = $i(this.currentRange, i));
    }), this.quill.keyboard.addBinding({
      key: "z",
      shortKey: !0
    }, this.undo.bind(this)), this.quill.keyboard.addBinding({
      key: ["z", "Z"],
      shortKey: !0,
      shiftKey: !0
    }, this.redo.bind(this)), /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
      key: "y",
      shortKey: !0
    }, this.redo.bind(this)), this.quill.root.addEventListener("beforeinput", (s) => {
      s.inputType === "historyUndo" ? (this.undo(), s.preventDefault()) : s.inputType === "historyRedo" && (this.redo(), s.preventDefault());
    });
  }
  change(t, r) {
    if (this.stack[t].length === 0) return;
    const s = this.stack[t].pop();
    if (!s) return;
    const i = this.quill.getContents(), o = s.delta.invert(i);
    this.stack[r].push({
      delta: o,
      range: $i(s.range, o)
    }), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(s.delta, C.sources.USER), this.ignoreChange = !1, this.restoreSelection(s);
  }
  clear() {
    this.stack = {
      undo: [],
      redo: []
    };
  }
  cutoff() {
    this.lastRecorded = 0;
  }
  record(t, r) {
    if (t.ops.length === 0) return;
    this.stack.redo = [];
    let s = t.invert(r), i = this.currentRange;
    const o = Date.now();
    if (
      // @ts-expect-error Fix me later
      this.lastRecorded + this.options.delay > o && this.stack.undo.length > 0
    ) {
      const a = this.stack.undo.pop();
      a && (s = s.compose(a.delta), i = a.range);
    } else
      this.lastRecorded = o;
    s.length() !== 0 && (this.stack.undo.push({
      delta: s,
      range: i
    }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
  }
  redo() {
    this.change("redo", "undo");
  }
  transform(t) {
    Tl(this.stack.undo, t), Tl(this.stack.redo, t);
  }
  undo() {
    this.change("undo", "redo");
  }
  restoreSelection(t) {
    if (t.range)
      this.quill.setSelection(t.range, C.sources.USER);
    else {
      const r = Bm(this.quill.scroll, t.delta);
      this.quill.setSelection(r, C.sources.USER);
    }
  }
}
$(Va, "DEFAULTS", {
  delay: 1e3,
  maxStack: 100,
  userOnly: !1
});
function Tl(n, e) {
  let t = e;
  for (let r = n.length - 1; r >= 0; r -= 1) {
    const s = n[r];
    n[r] = {
      delta: t.transform(s.delta, !0),
      range: s.range && $i(s.range, t)
    }, t = s.delta.transform(t), n[r].delta.length() === 0 && n.splice(r, 1);
  }
}
function jm(n, e) {
  const t = e.ops[e.ops.length - 1];
  return t == null ? !1 : t.insert != null ? typeof t.insert == "string" && t.insert.endsWith(`
`) : t.attributes != null ? Object.keys(t.attributes).some((r) => n.query(r, Z.BLOCK) != null) : !1;
}
function Bm(n, e) {
  const t = e.reduce((s, i) => s + (i.delete || 0), 0);
  let r = e.length() - t;
  return jm(n, e) && (r -= 1), r;
}
function $i(n, e) {
  if (!n) return n;
  const t = e.transformPosition(n.index), r = e.transformPosition(n.index + n.length);
  return {
    index: t,
    length: r - t
  };
}
class Ga extends st {
  constructor(e, t) {
    super(e, t), e.root.addEventListener("drop", (r) => {
      var o;
      r.preventDefault();
      let s = null;
      if (document.caretRangeFromPoint)
        s = document.caretRangeFromPoint(r.clientX, r.clientY);
      else if (document.caretPositionFromPoint) {
        const a = document.caretPositionFromPoint(r.clientX, r.clientY);
        s = document.createRange(), s.setStart(a.offsetNode, a.offset), s.setEnd(a.offsetNode, a.offset);
      }
      const i = s && e.selection.normalizeNative(s);
      if (i) {
        const a = e.selection.normalizedToRange(i);
        (o = r.dataTransfer) != null && o.files && this.upload(a, r.dataTransfer.files);
      }
    });
  }
  upload(e, t) {
    const r = [];
    Array.from(t).forEach((s) => {
      var i;
      s && ((i = this.options.mimetypes) != null && i.includes(s.type)) && r.push(s);
    }), r.length > 0 && this.options.handler.call(this, e, r);
  }
}
Ga.DEFAULTS = {
  mimetypes: ["image/png", "image/jpeg"],
  handler(n, e) {
    if (!this.quill.scroll.query("image"))
      return;
    const t = e.map((r) => new Promise((s) => {
      const i = new FileReader();
      i.onload = () => {
        s(i.result);
      }, i.readAsDataURL(r);
    }));
    Promise.all(t).then((r) => {
      const s = r.reduce((i, o) => i.insert({
        image: o
      }), new W().retain(n.index).delete(n.length));
      this.quill.updateContents(s, G.sources.USER), this.quill.setSelection(n.index + r.length, G.sources.SILENT);
    });
  }
};
const Pm = ["insertText", "insertReplacementText"];
class Mm extends st {
  constructor(e, t) {
    super(e, t), e.root.addEventListener("beforeinput", (r) => {
      this.handleBeforeInput(r);
    }), /Android/i.test(navigator.userAgent) || e.on(C.events.COMPOSITION_BEFORE_START, () => {
      this.handleCompositionStart();
    });
  }
  deleteRange(e) {
    go({
      range: e,
      quill: this.quill
    });
  }
  replaceText(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if (e.length === 0) return !1;
    if (t) {
      const r = this.quill.getFormat(e.index, 1);
      this.deleteRange(e), this.quill.updateContents(new W().retain(e.index).insert(t, r), C.sources.USER);
    } else
      this.deleteRange(e);
    return this.quill.setSelection(e.index + t.length, 0, C.sources.SILENT), !0;
  }
  handleBeforeInput(e) {
    if (this.quill.composition.isComposing || e.defaultPrevented || !Pm.includes(e.inputType))
      return;
    const t = e.getTargetRanges ? e.getTargetRanges()[0] : null;
    if (!t || t.collapsed === !0)
      return;
    const r = Dm(e);
    if (r == null)
      return;
    const s = this.quill.selection.normalizeNative(t), i = s ? this.quill.selection.normalizedToRange(s) : null;
    i && this.replaceText(i, r) && e.preventDefault();
  }
  handleCompositionStart() {
    const e = this.quill.getSelection();
    e && this.replaceText(e);
  }
}
function Dm(n) {
  var e;
  return typeof n.data == "string" ? n.data : (e = n.dataTransfer) != null && e.types.includes("text/plain") ? n.dataTransfer.getData("text/plain") : null;
}
const Um = /Mac/i.test(navigator.platform), $m = 100, Fm = (n) => !!(n.key === "ArrowLeft" || n.key === "ArrowRight" || // RTL scripts or moving from the end of the previous line
n.key === "ArrowUp" || n.key === "ArrowDown" || n.key === "Home" || Um && n.key === "a" && n.ctrlKey === !0);
class Hm extends st {
  constructor(t, r) {
    super(t, r);
    $(this, "isListening", !1);
    $(this, "selectionChangeDeadline", 0);
    this.handleArrowKeys(), this.handleNavigationShortcuts();
  }
  handleArrowKeys() {
    this.quill.keyboard.addBinding({
      key: ["ArrowLeft", "ArrowRight"],
      offset: 0,
      shiftKey: null,
      handler(t, r) {
        let {
          line: s,
          event: i
        } = r;
        if (!(s instanceof et) || !s.uiNode)
          return !0;
        const o = getComputedStyle(s.domNode).direction === "rtl";
        return o && i.key !== "ArrowRight" || !o && i.key !== "ArrowLeft" ? !0 : (this.quill.setSelection(t.index - 1, t.length + (i.shiftKey ? 1 : 0), C.sources.USER), !1);
      }
    });
  }
  handleNavigationShortcuts() {
    this.quill.root.addEventListener("keydown", (t) => {
      !t.defaultPrevented && Fm(t) && this.ensureListeningToSelectionChange();
    });
  }
  /**
   * We only listen to the `selectionchange` event when
   * there is an intention of moving the caret to the beginning using shortcuts.
   * This is primarily implemented to prevent infinite loops, as we are changing
   * the selection within the handler of a `selectionchange` event.
   */
  ensureListeningToSelectionChange() {
    if (this.selectionChangeDeadline = Date.now() + $m, this.isListening) return;
    this.isListening = !0;
    const t = () => {
      this.isListening = !1, Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange();
    };
    document.addEventListener("selectionchange", t, {
      once: !0
    });
  }
  handleSelectionChange() {
    const t = document.getSelection();
    if (!t) return;
    const r = t.getRangeAt(0);
    if (r.collapsed !== !0 || r.startOffset !== 0) return;
    const s = this.quill.scroll.find(r.startContainer);
    if (!(s instanceof et) || !s.uiNode) return;
    const i = document.createRange();
    i.setStartAfter(s.uiNode), i.setEndAfter(s.uiNode), t.removeAllRanges(), t.addRange(i);
  }
}
C.register({
  "blots/block": Ae,
  "blots/block/embed": ze,
  "blots/break": rt,
  "blots/container": sn,
  "blots/cursor": Cn,
  "blots/embed": co,
  "blots/inline": mt,
  "blots/scroll": xn,
  "blots/text": tt,
  "modules/clipboard": za,
  "modules/history": Va,
  "modules/keyboard": bs,
  "modules/uploader": Ga,
  "modules/input": Mm,
  "modules/uiNode": Hm
});
class zm extends nt {
  add(e, t) {
    let r = 0;
    if (t === "+1" || t === "-1") {
      const s = this.value(e) || 0;
      r = t === "+1" ? s + 1 : s - 1;
    } else typeof t == "number" && (r = t);
    return r === 0 ? (this.remove(e), !0) : super.add(e, r.toString());
  }
  canAdd(e, t) {
    return super.canAdd(e, t) || super.canAdd(e, parseInt(t, 10));
  }
  value(e) {
    return parseInt(super.value(e), 10) || void 0;
  }
}
const Km = new zm("indent", "ql-indent", {
  scope: Z.BLOCK,
  // @ts-expect-error
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});
class Fi extends Ae {
}
$(Fi, "blotName", "blockquote"), $(Fi, "tagName", "blockquote");
class Hi extends Ae {
  static formats(e) {
    return this.tagName.indexOf(e.tagName) + 1;
  }
}
$(Hi, "blotName", "header"), $(Hi, "tagName", ["H1", "H2", "H3", "H4", "H5", "H6"]);
class br extends sn {
}
br.blotName = "list-container";
br.tagName = "OL";
class yr extends Ae {
  static create(e) {
    const t = super.create();
    return t.setAttribute("data-list", e), t;
  }
  static formats(e) {
    return e.getAttribute("data-list") || void 0;
  }
  static register() {
    C.register(br);
  }
  constructor(e, t) {
    super(e, t);
    const r = t.ownerDocument.createElement("span"), s = (i) => {
      if (!e.isEnabled()) return;
      const o = this.statics.formats(t, e);
      o === "checked" ? (this.format("list", "unchecked"), i.preventDefault()) : o === "unchecked" && (this.format("list", "checked"), i.preventDefault());
    };
    r.addEventListener("mousedown", s), r.addEventListener("touchstart", s), this.attachUI(r);
  }
  format(e, t) {
    e === this.statics.blotName && t ? this.domNode.setAttribute("data-list", t) : super.format(e, t);
  }
}
yr.blotName = "list";
yr.tagName = "LI";
br.allowedChildren = [yr];
yr.requiredContainer = br;
class dr extends mt {
  static create() {
    return super.create();
  }
  static formats() {
    return !0;
  }
  optimize(e) {
    super.optimize(e), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
  }
}
$(dr, "blotName", "bold"), $(dr, "tagName", ["STRONG", "B"]);
class zi extends dr {
}
$(zi, "blotName", "italic"), $(zi, "tagName", ["EM", "I"]);
class Bt extends mt {
  static create(e) {
    const t = super.create(e);
    return t.setAttribute("href", this.sanitize(e)), t.setAttribute("rel", "noopener noreferrer"), t.setAttribute("target", "_blank"), t;
  }
  static formats(e) {
    return e.getAttribute("href");
  }
  static sanitize(e) {
    return Wa(e, this.PROTOCOL_WHITELIST) ? e : this.SANITIZED_URL;
  }
  format(e, t) {
    e !== this.statics.blotName || !t ? super.format(e, t) : this.domNode.setAttribute("href", this.constructor.sanitize(t));
  }
}
$(Bt, "blotName", "link"), $(Bt, "tagName", "A"), $(Bt, "SANITIZED_URL", "about:blank"), $(Bt, "PROTOCOL_WHITELIST", ["http", "https", "mailto", "tel", "sms"]);
function Wa(n, e) {
  const t = document.createElement("a");
  t.href = n;
  const r = t.href.slice(0, t.href.indexOf(":"));
  return e.indexOf(r) > -1;
}
class Ki extends mt {
  static create(e) {
    return e === "super" ? document.createElement("sup") : e === "sub" ? document.createElement("sub") : super.create(e);
  }
  static formats(e) {
    if (e.tagName === "SUB") return "sub";
    if (e.tagName === "SUP") return "super";
  }
}
$(Ki, "blotName", "script"), $(Ki, "tagName", ["SUB", "SUP"]);
class Vi extends dr {
}
$(Vi, "blotName", "strike"), $(Vi, "tagName", ["S", "STRIKE"]);
class Gi extends mt {
}
$(Gi, "blotName", "underline"), $(Gi, "tagName", "U");
class ts extends co {
  static create(e) {
    if (window.katex == null)
      throw new Error("Formula module requires KaTeX.");
    const t = super.create(e);
    return typeof e == "string" && (window.katex.render(e, t, {
      throwOnError: !1,
      errorColor: "#f00"
    }), t.setAttribute("data-value", e)), t;
  }
  static value(e) {
    return e.getAttribute("data-value");
  }
  html() {
    const {
      formula: e
    } = this.value();
    return `<span>${e}</span>`;
  }
}
$(ts, "blotName", "formula"), $(ts, "className", "ql-formula"), $(ts, "tagName", "SPAN");
const Sl = ["alt", "height", "width"];
class Wi extends De {
  static create(e) {
    const t = super.create(e);
    return typeof e == "string" && t.setAttribute("src", this.sanitize(e)), t;
  }
  static formats(e) {
    return Sl.reduce((t, r) => (e.hasAttribute(r) && (t[r] = e.getAttribute(r)), t), {});
  }
  static match(e) {
    return /\.(jpe?g|gif|png)$/.test(e) || /^data:image\/.+;base64/.test(e);
  }
  static sanitize(e) {
    return Wa(e, ["http", "https", "data"]) ? e : "//:0";
  }
  static value(e) {
    return e.getAttribute("src");
  }
  format(e, t) {
    Sl.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
  }
}
$(Wi, "blotName", "image"), $(Wi, "tagName", "IMG");
const _l = ["height", "width"];
class ns extends ze {
  static create(e) {
    const t = super.create(e);
    return t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "true"), t.setAttribute("src", this.sanitize(e)), t;
  }
  static formats(e) {
    return _l.reduce((t, r) => (e.hasAttribute(r) && (t[r] = e.getAttribute(r)), t), {});
  }
  static sanitize(e) {
    return Bt.sanitize(e);
  }
  static value(e) {
    return e.getAttribute("src");
  }
  format(e, t) {
    _l.indexOf(e) > -1 ? t ? this.domNode.setAttribute(e, t) : this.domNode.removeAttribute(e) : super.format(e, t);
  }
  html() {
    const {
      video: e
    } = this.value();
    return `<a href="${e}">${e}</a>`;
  }
}
$(ns, "blotName", "video"), $(ns, "className", "ql-video"), $(ns, "tagName", "IFRAME");
const nr = new nt("code-token", "hljs", {
  scope: Z.INLINE
});
class St extends mt {
  static formats(e, t) {
    for (; e != null && e !== t.domNode; ) {
      if (e.classList && e.classList.contains(Le.className))
        return super.formats(e, t);
      e = e.parentNode;
    }
  }
  constructor(e, t, r) {
    super(e, t, r), nr.add(this.domNode, r);
  }
  format(e, t) {
    e !== St.blotName ? super.format(e, t) : t ? nr.add(this.domNode, t) : (nr.remove(this.domNode), this.domNode.classList.remove(this.statics.className));
  }
  optimize() {
    super.optimize(...arguments), nr.value(this.domNode) || this.unwrap();
  }
}
St.blotName = "code-token";
St.className = "ql-token";
class He extends Le {
  static create(e) {
    const t = super.create(e);
    return typeof e == "string" && t.setAttribute("data-language", e), t;
  }
  static formats(e) {
    return e.getAttribute("data-language") || "plain";
  }
  static register() {
  }
  // Syntax module will register
  format(e, t) {
    e === this.statics.blotName && t ? this.domNode.setAttribute("data-language", t) : super.format(e, t);
  }
  replaceWith(e, t) {
    return this.formatAt(0, this.length(), St.blotName, !1), super.replaceWith(e, t);
  }
}
class ir extends on {
  attach() {
    super.attach(), this.forceNext = !1, this.scroll.emitMount(this);
  }
  format(e, t) {
    e === He.blotName && (this.forceNext = !0, this.children.forEach((r) => {
      r.format(e, t);
    }));
  }
  formatAt(e, t, r, s) {
    r === He.blotName && (this.forceNext = !0), super.formatAt(e, t, r, s);
  }
  highlight(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.children.head == null) return;
    const s = `${Array.from(this.domNode.childNodes).filter((o) => o !== this.uiNode).map((o) => o.textContent).join(`
`)}
`, i = He.formats(this.children.head.domNode);
    if (t || this.forceNext || this.cachedText !== s) {
      if (s.trim().length > 0 || this.cachedText == null) {
        const o = this.children.reduce((c, u) => c.concat(La(u, !1)), new W()), a = e(s, i);
        o.diff(a).reduce((c, u) => {
          let {
            retain: f,
            attributes: m
          } = u;
          return f ? (m && Object.keys(m).forEach((d) => {
            [He.blotName, St.blotName].includes(d) && this.formatAt(c, f, d, m[d]);
          }), c + f) : c;
        }, 0);
      }
      this.cachedText = s, this.forceNext = !1;
    }
  }
  html(e, t) {
    const [r] = this.children.find(e);
    return `<pre data-language="${r ? He.formats(r.domNode) : "plain"}">
${gs(this.code(e, t))}
</pre>`;
  }
  optimize(e) {
    if (super.optimize(e), this.parent != null && this.children.head != null && this.uiNode != null) {
      const t = He.formats(this.children.head.domNode);
      t !== this.uiNode.value && (this.uiNode.value = t);
    }
  }
}
ir.allowedChildren = [He];
He.requiredContainer = ir;
He.allowedChildren = [St, Cn, tt, rt];
const Vm = (n, e, t) => {
  if (typeof n.versionString == "string") {
    const r = n.versionString.split(".")[0];
    if (parseInt(r, 10) >= 11)
      return n.highlight(t, {
        language: e
      }).value;
  }
  return n.highlight(e, t).value;
};
class Za extends st {
  static register() {
    C.register(St, !0), C.register(He, !0), C.register(ir, !0);
  }
  constructor(e, t) {
    if (super(e, t), this.options.hljs == null)
      throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
    this.languages = this.options.languages.reduce((r, s) => {
      let {
        key: i
      } = s;
      return r[i] = !0, r;
    }, {}), this.highlightBlot = this.highlightBlot.bind(this), this.initListener(), this.initTimer();
  }
  initListener() {
    this.quill.on(C.events.SCROLL_BLOT_MOUNT, (e) => {
      if (!(e instanceof ir)) return;
      const t = this.quill.root.ownerDocument.createElement("select");
      this.options.languages.forEach((r) => {
        let {
          key: s,
          label: i
        } = r;
        const o = t.ownerDocument.createElement("option");
        o.textContent = i, o.setAttribute("value", s), t.appendChild(o);
      }), t.addEventListener("change", () => {
        e.format(He.blotName, t.value), this.quill.root.focus(), this.highlight(e, !0);
      }), e.uiNode == null && (e.attachUI(t), e.children.head && (t.value = He.formats(e.children.head.domNode)));
    });
  }
  initTimer() {
    let e = null;
    this.quill.on(C.events.SCROLL_OPTIMIZE, () => {
      e && clearTimeout(e), e = setTimeout(() => {
        this.highlight(), e = null;
      }, this.options.interval);
    });
  }
  highlight() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (this.quill.selection.composing) return;
    this.quill.update(C.sources.USER);
    const r = this.quill.getSelection();
    (e == null ? this.quill.scroll.descendants(ir) : [e]).forEach((i) => {
      i.highlight(this.highlightBlot, t);
    }), this.quill.update(C.sources.SILENT), r != null && this.quill.setSelection(r, C.sources.SILENT);
  }
  highlightBlot(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "plain";
    if (t = this.languages[t] ? t : "plain", t === "plain")
      return gs(e).split(`
`).reduce((s, i, o) => (o !== 0 && s.insert(`
`, {
        [Le.blotName]: t
      }), s.insert(i)), new W());
    const r = this.quill.root.ownerDocument.createElement("div");
    return r.classList.add(Le.className), r.innerHTML = Vm(this.options.hljs, t, e), bo(this.quill.scroll, r, [(s, i) => {
      const o = nr.value(s);
      return o ? i.compose(new W().retain(i.length(), {
        [St.blotName]: o
      })) : i;
    }], [(s, i) => s.data.split(`
`).reduce((o, a, c) => (c !== 0 && o.insert(`
`, {
      [Le.blotName]: t
    }), o.insert(a)), i)], /* @__PURE__ */ new WeakMap());
  }
}
Za.DEFAULTS = {
  hljs: window.hljs,
  interval: 1e3,
  languages: [{
    key: "plain",
    label: "Plain"
  }, {
    key: "bash",
    label: "Bash"
  }, {
    key: "cpp",
    label: "C++"
  }, {
    key: "cs",
    label: "C#"
  }, {
    key: "css",
    label: "CSS"
  }, {
    key: "diff",
    label: "Diff"
  }, {
    key: "xml",
    label: "HTML/XML"
  }, {
    key: "java",
    label: "Java"
  }, {
    key: "javascript",
    label: "JavaScript"
  }, {
    key: "markdown",
    label: "Markdown"
  }, {
    key: "php",
    label: "PHP"
  }, {
    key: "python",
    label: "Python"
  }, {
    key: "ruby",
    label: "Ruby"
  }, {
    key: "sql",
    label: "SQL"
  }]
};
const lr = class lr extends Ae {
  static create(e) {
    const t = super.create();
    return e ? t.setAttribute("data-row", e) : t.setAttribute("data-row", yo()), t;
  }
  static formats(e) {
    if (e.hasAttribute("data-row"))
      return e.getAttribute("data-row");
  }
  cellOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  format(e, t) {
    e === lr.blotName && t ? this.domNode.setAttribute("data-row", t) : super.format(e, t);
  }
  row() {
    return this.parent;
  }
  rowOffset() {
    return this.row() ? this.row().rowOffset() : -1;
  }
  table() {
    return this.row() && this.row().table();
  }
};
$(lr, "blotName", "table"), $(lr, "tagName", "TD");
let Qe = lr;
class _t extends sn {
  checkMerge() {
    if (super.checkMerge() && this.next.children.head != null) {
      const e = this.children.head.formats(), t = this.children.tail.formats(), r = this.next.children.head.formats(), s = this.next.children.tail.formats();
      return e.table === t.table && e.table === r.table && e.table === s.table;
    }
    return !1;
  }
  optimize(e) {
    super.optimize(e), this.children.forEach((t) => {
      if (t.next == null) return;
      const r = t.formats(), s = t.next.formats();
      if (r.table !== s.table) {
        const i = this.splitAfter(t);
        i && i.optimize(), this.prev && this.prev.optimize();
      }
    });
  }
  rowOffset() {
    return this.parent ? this.parent.children.indexOf(this) : -1;
  }
  table() {
    return this.parent && this.parent.parent;
  }
}
$(_t, "blotName", "table-row"), $(_t, "tagName", "TR");
class dt extends sn {
}
$(dt, "blotName", "table-body"), $(dt, "tagName", "TBODY");
class Ln extends sn {
  balanceCells() {
    const e = this.descendants(_t), t = e.reduce((r, s) => Math.max(s.children.length, r), 0);
    e.forEach((r) => {
      new Array(t - r.children.length).fill(0).forEach(() => {
        let s;
        r.children.head != null && (s = Qe.formats(r.children.head.domNode));
        const i = this.scroll.create(Qe.blotName, s);
        r.appendChild(i), i.optimize();
      });
    });
  }
  cells(e) {
    return this.rows().map((t) => t.children.at(e));
  }
  deleteColumn(e) {
    const [t] = this.descendant(dt);
    t == null || t.children.head == null || t.children.forEach((r) => {
      const s = r.children.at(e);
      s != null && s.remove();
    });
  }
  insertColumn(e) {
    const [t] = this.descendant(dt);
    t == null || t.children.head == null || t.children.forEach((r) => {
      const s = r.children.at(e), i = Qe.formats(r.children.head.domNode), o = this.scroll.create(Qe.blotName, i);
      r.insertBefore(o, s);
    });
  }
  insertRow(e) {
    const [t] = this.descendant(dt);
    if (t == null || t.children.head == null) return;
    const r = yo(), s = this.scroll.create(_t.blotName);
    t.children.head.children.forEach(() => {
      const o = this.scroll.create(Qe.blotName, r);
      s.appendChild(o);
    });
    const i = t.children.at(e);
    t.insertBefore(s, i);
  }
  rows() {
    const e = this.children.head;
    return e == null ? [] : e.children.map((t) => t);
  }
}
$(Ln, "blotName", "table-container"), $(Ln, "tagName", "TABLE");
Ln.allowedChildren = [dt];
dt.requiredContainer = Ln;
dt.allowedChildren = [_t];
_t.requiredContainer = dt;
_t.allowedChildren = [Qe];
Qe.requiredContainer = _t;
function yo() {
  return `row-${Math.random().toString(36).slice(2, 6)}`;
}
class Gm extends st {
  static register() {
    C.register(Qe), C.register(_t), C.register(dt), C.register(Ln);
  }
  constructor() {
    super(...arguments), this.listenBalanceCells();
  }
  balanceTables() {
    this.quill.scroll.descendants(Ln).forEach((e) => {
      e.balanceCells();
    });
  }
  deleteColumn() {
    const [e, , t] = this.getTable();
    t != null && (e.deleteColumn(t.cellOffset()), this.quill.update(C.sources.USER));
  }
  deleteRow() {
    const [, e] = this.getTable();
    e != null && (e.remove(), this.quill.update(C.sources.USER));
  }
  deleteTable() {
    const [e] = this.getTable();
    if (e == null) return;
    const t = e.offset();
    e.remove(), this.quill.update(C.sources.USER), this.quill.setSelection(t, C.sources.SILENT);
  }
  getTable() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.quill.getSelection();
    if (e == null) return [null, null, null, -1];
    const [t, r] = this.quill.getLine(e.index);
    if (t == null || t.statics.blotName !== Qe.blotName)
      return [null, null, null, -1];
    const s = t.parent;
    return [s.parent.parent, s, t, r];
  }
  insertColumn(e) {
    const t = this.quill.getSelection();
    if (!t) return;
    const [r, s, i] = this.getTable(t);
    if (i == null) return;
    const o = i.cellOffset();
    r.insertColumn(o + e), this.quill.update(C.sources.USER);
    let a = s.rowOffset();
    e === 0 && (a += 1), this.quill.setSelection(t.index + a, t.length, C.sources.SILENT);
  }
  insertColumnLeft() {
    this.insertColumn(0);
  }
  insertColumnRight() {
    this.insertColumn(1);
  }
  insertRow(e) {
    const t = this.quill.getSelection();
    if (!t) return;
    const [r, s, i] = this.getTable(t);
    if (i == null) return;
    const o = s.rowOffset();
    r.insertRow(o + e), this.quill.update(C.sources.USER), e > 0 ? this.quill.setSelection(t, C.sources.SILENT) : this.quill.setSelection(t.index + s.children.length, t.length, C.sources.SILENT);
  }
  insertRowAbove() {
    this.insertRow(0);
  }
  insertRowBelow() {
    this.insertRow(1);
  }
  insertTable(e, t) {
    const r = this.quill.getSelection();
    if (r == null) return;
    const s = new Array(e).fill(0).reduce((i) => {
      const o = new Array(t).fill(`
`).join("");
      return i.insert(o, {
        table: yo()
      });
    }, new W().retain(r.index));
    this.quill.updateContents(s, C.sources.USER), this.quill.setSelection(r.index, C.sources.SILENT), this.balanceTables();
  }
  listenBalanceCells() {
    this.quill.on(C.events.SCROLL_OPTIMIZE, (e) => {
      e.some((t) => ["TD", "TR", "TBODY", "TABLE"].includes(t.target.tagName) ? (this.quill.once(C.events.TEXT_CHANGE, (r, s, i) => {
        i === C.sources.USER && this.balanceTables();
      }), !0) : !1);
    });
  }
}
const Ol = Ct("quill:toolbar");
class vo extends st {
  constructor(e, t) {
    var r, s;
    if (super(e, t), Array.isArray(this.options.container)) {
      const i = document.createElement("div");
      i.setAttribute("role", "toolbar"), Wm(i, this.options.container), (s = (r = e.container) == null ? void 0 : r.parentNode) == null || s.insertBefore(i, e.container), this.container = i;
    } else typeof this.options.container == "string" ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
    if (!(this.container instanceof HTMLElement)) {
      Ol.error("Container required for toolbar", this.options);
      return;
    }
    this.container.classList.add("ql-toolbar"), this.controls = [], this.handlers = {}, this.options.handlers && Object.keys(this.options.handlers).forEach((i) => {
      var a;
      const o = (a = this.options.handlers) == null ? void 0 : a[i];
      o && this.addHandler(i, o);
    }), Array.from(this.container.querySelectorAll("button, select")).forEach((i) => {
      this.attach(i);
    }), this.quill.on(C.events.EDITOR_CHANGE, () => {
      const [i] = this.quill.selection.getRange();
      this.update(i);
    });
  }
  addHandler(e, t) {
    this.handlers[e] = t;
  }
  attach(e) {
    let t = Array.from(e.classList).find((s) => s.indexOf("ql-") === 0);
    if (!t) return;
    if (t = t.slice(3), e.tagName === "BUTTON" && e.setAttribute("type", "button"), this.handlers[t] == null && this.quill.scroll.query(t) == null) {
      Ol.warn("ignoring attaching to nonexistent format", t, e);
      return;
    }
    const r = e.tagName === "SELECT" ? "change" : "click";
    e.addEventListener(r, (s) => {
      let i;
      if (e.tagName === "SELECT") {
        if (e.selectedIndex < 0) return;
        const a = e.options[e.selectedIndex];
        a.hasAttribute("selected") ? i = !1 : i = a.value || !1;
      } else
        e.classList.contains("ql-active") ? i = !1 : i = e.value || !e.hasAttribute("value"), s.preventDefault();
      this.quill.focus();
      const [o] = this.quill.selection.getRange();
      if (this.handlers[t] != null)
        this.handlers[t].call(this, i);
      else if (
        // @ts-expect-error
        this.quill.scroll.query(t).prototype instanceof De
      ) {
        if (i = prompt(`Enter ${t}`), !i) return;
        this.quill.updateContents(new W().retain(o.index).delete(o.length).insert({
          [t]: i
        }), C.sources.USER);
      } else
        this.quill.format(t, i, C.sources.USER);
      this.update(o);
    }), this.controls.push([t, e]);
  }
  update(e) {
    const t = e == null ? {} : this.quill.getFormat(e);
    this.controls.forEach((r) => {
      const [s, i] = r;
      if (i.tagName === "SELECT") {
        let o = null;
        if (e == null)
          o = null;
        else if (t[s] == null)
          o = i.querySelector("option[selected]");
        else if (!Array.isArray(t[s])) {
          let a = t[s];
          typeof a == "string" && (a = a.replace(/"/g, '\\"')), o = i.querySelector(`option[value="${a}"]`);
        }
        o == null ? (i.value = "", i.selectedIndex = -1) : o.selected = !0;
      } else if (e == null)
        i.classList.remove("ql-active"), i.setAttribute("aria-pressed", "false");
      else if (i.hasAttribute("value")) {
        const o = t[s], a = o === i.getAttribute("value") || o != null && o.toString() === i.getAttribute("value") || o == null && !i.getAttribute("value");
        i.classList.toggle("ql-active", a), i.setAttribute("aria-pressed", a.toString());
      } else {
        const o = t[s] != null;
        i.classList.toggle("ql-active", o), i.setAttribute("aria-pressed", o.toString());
      }
    });
  }
}
vo.DEFAULTS = {};
function Cl(n, e, t) {
  const r = document.createElement("button");
  r.setAttribute("type", "button"), r.classList.add(`ql-${e}`), r.setAttribute("aria-pressed", "false"), t != null ? (r.value = t, r.setAttribute("aria-label", `${e}: ${t}`)) : r.setAttribute("aria-label", e), n.appendChild(r);
}
function Wm(n, e) {
  Array.isArray(e[0]) || (e = [e]), e.forEach((t) => {
    const r = document.createElement("span");
    r.classList.add("ql-formats"), t.forEach((s) => {
      if (typeof s == "string")
        Cl(r, s);
      else {
        const i = Object.keys(s)[0], o = s[i];
        Array.isArray(o) ? Zm(r, i, o) : Cl(r, i, o);
      }
    }), n.appendChild(r);
  });
}
function Zm(n, e, t) {
  const r = document.createElement("select");
  r.classList.add(`ql-${e}`), t.forEach((s) => {
    const i = document.createElement("option");
    s !== !1 ? i.setAttribute("value", String(s)) : i.setAttribute("selected", "selected"), r.appendChild(i);
  }), n.appendChild(r);
}
vo.DEFAULTS = {
  container: null,
  handlers: {
    clean() {
      const n = this.quill.getSelection();
      if (n != null)
        if (n.length === 0) {
          const e = this.quill.getFormat();
          Object.keys(e).forEach((t) => {
            this.quill.scroll.query(t, Z.INLINE) != null && this.quill.format(t, !1, C.sources.USER);
          });
        } else
          this.quill.removeFormat(n.index, n.length, C.sources.USER);
    },
    direction(n) {
      const {
        align: e
      } = this.quill.getFormat();
      n === "rtl" && e == null ? this.quill.format("align", "right", C.sources.USER) : !n && e === "right" && this.quill.format("align", !1, C.sources.USER), this.quill.format("direction", n, C.sources.USER);
    },
    indent(n) {
      const e = this.quill.getSelection(), t = this.quill.getFormat(e), r = parseInt(t.indent || 0, 10);
      if (n === "+1" || n === "-1") {
        let s = n === "+1" ? 1 : -1;
        t.direction === "rtl" && (s *= -1), this.quill.format("indent", r + s, C.sources.USER);
      }
    },
    link(n) {
      n === !0 && (n = prompt("Enter link URL:")), this.quill.format("link", n, C.sources.USER);
    },
    list(n) {
      const e = this.quill.getSelection(), t = this.quill.getFormat(e);
      n === "check" ? t.list === "checked" || t.list === "unchecked" ? this.quill.format("list", !1, C.sources.USER) : this.quill.format("list", "unchecked", C.sources.USER) : this.quill.format("list", n, C.sources.USER);
    }
  }
};
const Jm = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>', Ym = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>', Xm = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>', Qm = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>', eg = '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>', tg = '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>', ng = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>', rg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>', Rl = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>', sg = '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>', ig = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>', og = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>', lg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>', ag = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>', cg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', ug = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', hg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>', fg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>', dg = '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>', pg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>', mg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>', gg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>', bg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>', yg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>', vg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>', wg = '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>', Eg = '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>', xg = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>', Ng = '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>', Ag = '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>', Tg = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>', Sg = '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>', _g = '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>', pr = {
  align: {
    "": Jm,
    center: Ym,
    right: Xm,
    justify: Qm
  },
  background: eg,
  blockquote: tg,
  bold: ng,
  clean: rg,
  code: Rl,
  "code-block": Rl,
  color: sg,
  direction: {
    "": ig,
    rtl: og
  },
  formula: lg,
  header: {
    1: ag,
    2: cg,
    3: ug,
    4: hg,
    5: fg,
    6: dg
  },
  italic: pg,
  image: mg,
  indent: {
    "+1": gg,
    "-1": bg
  },
  link: yg,
  list: {
    bullet: vg,
    check: wg,
    ordered: Eg
  },
  script: {
    sub: xg,
    super: Ng
  },
  strike: Ag,
  table: Tg,
  underline: Sg,
  video: _g
}, Og = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>';
let Ll = 0;
function ql(n, e) {
  n.setAttribute(e, `${n.getAttribute(e) !== "true"}`);
}
class ys {
  constructor(e) {
    this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", () => {
      this.togglePicker();
    }), this.label.addEventListener("keydown", (t) => {
      switch (t.key) {
        case "Enter":
          this.togglePicker();
          break;
        case "Escape":
          this.escape(), t.preventDefault();
          break;
      }
    }), this.select.addEventListener("change", this.update.bind(this));
  }
  togglePicker() {
    this.container.classList.toggle("ql-expanded"), ql(this.label, "aria-expanded"), ql(this.options, "aria-hidden");
  }
  buildItem(e) {
    const t = document.createElement("span");
    t.tabIndex = "0", t.setAttribute("role", "button"), t.classList.add("ql-picker-item");
    const r = e.getAttribute("value");
    return r && t.setAttribute("data-value", r), e.textContent && t.setAttribute("data-label", e.textContent), t.addEventListener("click", () => {
      this.selectItem(t, !0);
    }), t.addEventListener("keydown", (s) => {
      switch (s.key) {
        case "Enter":
          this.selectItem(t, !0), s.preventDefault();
          break;
        case "Escape":
          this.escape(), s.preventDefault();
          break;
      }
    }), t;
  }
  buildLabel() {
    const e = document.createElement("span");
    return e.classList.add("ql-picker-label"), e.innerHTML = Og, e.tabIndex = "0", e.setAttribute("role", "button"), e.setAttribute("aria-expanded", "false"), this.container.appendChild(e), e;
  }
  buildOptions() {
    const e = document.createElement("span");
    e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = `ql-picker-options-${Ll}`, Ll += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, Array.from(this.select.options).forEach((t) => {
      const r = this.buildItem(t);
      e.appendChild(r), t.selected === !0 && this.selectItem(r);
    }), this.container.appendChild(e);
  }
  buildPicker() {
    Array.from(this.select.attributes).forEach((e) => {
      this.container.setAttribute(e.name, e.value);
    }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
  }
  escape() {
    this.close(), setTimeout(() => this.label.focus(), 1);
  }
  close() {
    this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
  }
  selectItem(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const r = this.container.querySelector(".ql-selected");
    e !== r && (r != null && r.classList.remove("ql-selected"), e != null && (e.classList.add("ql-selected"), this.select.selectedIndex = Array.from(e.parentNode.children).indexOf(e), e.hasAttribute("data-value") ? this.label.setAttribute("data-value", e.getAttribute("data-value")) : this.label.removeAttribute("data-value"), e.hasAttribute("data-label") ? this.label.setAttribute("data-label", e.getAttribute("data-label")) : this.label.removeAttribute("data-label"), t && (this.select.dispatchEvent(new Event("change")), this.close())));
  }
  update() {
    let e;
    if (this.select.selectedIndex > -1) {
      const r = (
        // @ts-expect-error Fix me later
        this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]
      );
      e = this.select.options[this.select.selectedIndex], this.selectItem(r);
    } else
      this.selectItem(null);
    const t = e != null && e !== this.select.querySelector("option[selected]");
    this.label.classList.toggle("ql-active", t);
  }
}
class Ja extends ys {
  constructor(e, t) {
    super(e), this.label.innerHTML = t, this.container.classList.add("ql-color-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((r) => {
      r.classList.add("ql-primary");
    });
  }
  buildItem(e) {
    const t = super.buildItem(e);
    return t.style.backgroundColor = e.getAttribute("value") || "", t;
  }
  selectItem(e, t) {
    super.selectItem(e, t);
    const r = this.label.querySelector(".ql-color-label"), s = e && e.getAttribute("data-value") || "";
    r && (r.tagName === "line" ? r.style.stroke = s : r.style.fill = s);
  }
}
class Ya extends ys {
  constructor(e, t) {
    super(e), this.container.classList.add("ql-icon-picker"), Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((r) => {
      r.innerHTML = t[r.getAttribute("data-value") || ""];
    }), this.defaultItem = this.container.querySelector(".ql-selected"), this.selectItem(this.defaultItem);
  }
  selectItem(e, t) {
    super.selectItem(e, t);
    const r = e || this.defaultItem;
    if (r != null) {
      if (this.label.innerHTML === r.innerHTML) return;
      this.label.innerHTML = r.innerHTML;
    }
  }
}
const Cg = (n) => {
  const {
    overflowY: e
  } = getComputedStyle(n, null);
  return e !== "visible" && e !== "clip";
};
class Xa {
  constructor(e, t) {
    this.quill = e, this.boundsContainer = t || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, Cg(this.quill.root) && this.quill.root.addEventListener("scroll", () => {
      this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
    }), this.hide();
  }
  hide() {
    this.root.classList.add("ql-hidden");
  }
  position(e) {
    const t = e.left + e.width / 2 - this.root.offsetWidth / 2, r = e.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${t}px`, this.root.style.top = `${r}px`, this.root.classList.remove("ql-flip");
    const s = this.boundsContainer.getBoundingClientRect(), i = this.root.getBoundingClientRect();
    let o = 0;
    if (i.right > s.right && (o = s.right - i.right, this.root.style.left = `${t + o}px`), i.left < s.left && (o = s.left - i.left, this.root.style.left = `${t + o}px`), i.bottom > s.bottom) {
      const a = i.bottom - i.top, c = e.bottom - e.top + a;
      this.root.style.top = `${r - c}px`, this.root.classList.add("ql-flip");
    }
    return o;
  }
  show() {
    this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
  }
}
const Rg = [!1, "center", "right", "justify"], Lg = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], qg = [!1, "serif", "monospace"], Ig = ["1", "2", "3", !1], kg = ["small", !1, "large", "huge"];
class vr extends Rn {
  constructor(e, t) {
    super(e, t);
    const r = (s) => {
      if (!document.body.contains(e.root)) {
        document.body.removeEventListener("click", r);
        return;
      }
      this.tooltip != null && // @ts-expect-error
      !this.tooltip.root.contains(s.target) && // @ts-expect-error
      document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus() && this.tooltip.hide(), this.pickers != null && this.pickers.forEach((i) => {
        i.container.contains(s.target) || i.close();
      });
    };
    e.emitter.listenDOM("click", document.body, r);
  }
  addModule(e) {
    const t = super.addModule(e);
    return e === "toolbar" && this.extendToolbar(t), t;
  }
  buildButtons(e, t) {
    Array.from(e).forEach((r) => {
      (r.getAttribute("class") || "").split(/\s+/).forEach((i) => {
        if (i.startsWith("ql-") && (i = i.slice(3), t[i] != null))
          if (i === "direction")
            r.innerHTML = t[i][""] + t[i].rtl;
          else if (typeof t[i] == "string")
            r.innerHTML = t[i];
          else {
            const o = r.value || "";
            o != null && t[i][o] && (r.innerHTML = t[i][o]);
          }
      });
    });
  }
  buildPickers(e, t) {
    this.pickers = Array.from(e).map((s) => {
      if (s.classList.contains("ql-align") && (s.querySelector("option") == null && Yn(s, Rg), typeof t.align == "object"))
        return new Ya(s, t.align);
      if (s.classList.contains("ql-background") || s.classList.contains("ql-color")) {
        const i = s.classList.contains("ql-background") ? "background" : "color";
        return s.querySelector("option") == null && Yn(s, Lg, i === "background" ? "#ffffff" : "#000000"), new Ja(s, t[i]);
      }
      return s.querySelector("option") == null && (s.classList.contains("ql-font") ? Yn(s, qg) : s.classList.contains("ql-header") ? Yn(s, Ig) : s.classList.contains("ql-size") && Yn(s, kg)), new ys(s);
    });
    const r = () => {
      this.pickers.forEach((s) => {
        s.update();
      });
    };
    this.quill.on(G.events.EDITOR_CHANGE, r);
  }
}
vr.DEFAULTS = Pt({}, Rn.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        formula() {
          this.quill.theme.tooltip.edit("formula");
        },
        image() {
          let n = this.container.querySelector("input.ql-image[type=file]");
          n == null && (n = document.createElement("input"), n.setAttribute("type", "file"), n.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")), n.classList.add("ql-image"), n.addEventListener("change", () => {
            const e = this.quill.getSelection(!0);
            this.quill.uploader.upload(e, n.files), n.value = "";
          }), this.container.appendChild(n)), n.click();
        },
        video() {
          this.quill.theme.tooltip.edit("video");
        }
      }
    }
  }
});
class Qa extends Xa {
  constructor(e, t) {
    super(e, t), this.textbox = this.root.querySelector('input[type="text"]'), this.listen();
  }
  listen() {
    this.textbox.addEventListener("keydown", (e) => {
      e.key === "Enter" ? (this.save(), e.preventDefault()) : e.key === "Escape" && (this.cancel(), e.preventDefault());
    });
  }
  cancel() {
    this.hide(), this.restoreFocus();
  }
  edit() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), this.textbox == null) return;
    t != null ? this.textbox.value = t : e !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
    const r = this.quill.getBounds(this.quill.selection.savedRange);
    r != null && this.position(r), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${e}`) || ""), this.root.setAttribute("data-mode", e);
  }
  restoreFocus() {
    this.quill.focus({
      preventScroll: !0
    });
  }
  save() {
    let {
      value: e
    } = this.textbox;
    switch (this.root.getAttribute("data-mode")) {
      case "link": {
        const {
          scrollTop: t
        } = this.quill.root;
        this.linkRange ? (this.quill.formatText(this.linkRange, "link", e, G.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", e, G.sources.USER)), this.quill.root.scrollTop = t;
        break;
      }
      case "video":
        e = jg(e);
      // eslint-disable-next-line no-fallthrough
      case "formula": {
        if (!e) break;
        const t = this.quill.getSelection(!0);
        if (t != null) {
          const r = t.index + t.length;
          this.quill.insertEmbed(
            r,
            // @ts-expect-error Fix me later
            this.root.getAttribute("data-mode"),
            e,
            G.sources.USER
          ), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(r + 1, " ", G.sources.USER), this.quill.setSelection(r + 2, G.sources.USER);
        }
        break;
      }
    }
    this.textbox.value = "", this.hide();
  }
}
function jg(n) {
  let e = n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
  return e ? `${e[1] || "https"}://www.youtube.com/embed/${e[2]}?showinfo=0` : (e = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? `${e[1] || "https"}://player.vimeo.com/video/${e[2]}/` : n;
}
function Yn(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  e.forEach((r) => {
    const s = document.createElement("option");
    r === t ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(r)), n.appendChild(s);
  });
}
const Bg = [["bold", "italic", "link"], [{
  header: 1
}, {
  header: 2
}, "blockquote"]];
class ec extends Qa {
  constructor(e, t) {
    super(e, t), this.quill.on(G.events.EDITOR_CHANGE, (r, s, i, o) => {
      if (r === G.events.SELECTION_CHANGE)
        if (s != null && s.length > 0 && o === G.sources.USER) {
          this.show(), this.root.style.left = "0px", this.root.style.width = "", this.root.style.width = `${this.root.offsetWidth}px`;
          const a = this.quill.getLines(s.index, s.length);
          if (a.length === 1) {
            const c = this.quill.getBounds(s);
            c != null && this.position(c);
          } else {
            const c = a[a.length - 1], u = this.quill.getIndex(c), f = Math.min(c.length() - 1, s.index + s.length - u), m = this.quill.getBounds(new Qt(u, f));
            m != null && this.position(m);
          }
        } else document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide();
    });
  }
  listen() {
    super.listen(), this.root.querySelector(".ql-close").addEventListener("click", () => {
      this.root.classList.remove("ql-editing");
    }), this.quill.on(G.events.SCROLL_OPTIMIZE, () => {
      setTimeout(() => {
        if (this.root.classList.contains("ql-hidden")) return;
        const e = this.quill.getSelection();
        if (e != null) {
          const t = this.quill.getBounds(e);
          t != null && this.position(t);
        }
      }, 1);
    });
  }
  cancel() {
    this.show();
  }
  position(e) {
    const t = super.position(e), r = this.root.querySelector(".ql-tooltip-arrow");
    return r.style.marginLeft = "", t !== 0 && (r.style.marginLeft = `${-1 * t - r.offsetWidth / 2}px`), t;
  }
}
$(ec, "TEMPLATE", ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""));
class tc extends vr {
  constructor(e, t) {
    t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = Bg), super(e, t), this.quill.container.classList.add("ql-bubble");
  }
  extendToolbar(e) {
    this.tooltip = new ec(this.quill, this.options.bounds), e.container != null && (this.tooltip.root.appendChild(e.container), this.buildButtons(e.container.querySelectorAll("button"), pr), this.buildPickers(e.container.querySelectorAll("select"), pr));
  }
}
tc.DEFAULTS = Pt({}, vr.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          n ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, C.sources.USER);
        }
      }
    }
  }
});
const Pg = [[{
  header: ["1", "2", "3", !1]
}], ["bold", "italic", "underline", "link"], [{
  list: "ordered"
}, {
  list: "bullet"
}], ["clean"]];
class nc extends Qa {
  constructor() {
    super(...arguments);
    $(this, "preview", this.root.querySelector("a.ql-preview"));
  }
  listen() {
    super.listen(), this.root.querySelector("a.ql-action").addEventListener("click", (t) => {
      this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent), t.preventDefault();
    }), this.root.querySelector("a.ql-remove").addEventListener("click", (t) => {
      if (this.linkRange != null) {
        const r = this.linkRange;
        this.restoreFocus(), this.quill.formatText(r, "link", !1, G.sources.USER), delete this.linkRange;
      }
      t.preventDefault(), this.hide();
    }), this.quill.on(G.events.SELECTION_CHANGE, (t, r, s) => {
      if (t != null) {
        if (t.length === 0 && s === G.sources.USER) {
          const [i, o] = this.quill.scroll.descendant(Bt, t.index);
          if (i != null) {
            this.linkRange = new Qt(t.index - o, i.length());
            const a = Bt.formats(i.domNode);
            this.preview.textContent = a, this.preview.setAttribute("href", a), this.show();
            const c = this.quill.getBounds(this.linkRange);
            c != null && this.position(c);
            return;
          }
        } else
          delete this.linkRange;
        this.hide();
      }
    });
  }
  show() {
    super.show(), this.root.removeAttribute("data-mode");
  }
}
$(nc, "TEMPLATE", ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""));
class rc extends vr {
  constructor(e, t) {
    t.modules.toolbar != null && t.modules.toolbar.container == null && (t.modules.toolbar.container = Pg), super(e, t), this.quill.container.classList.add("ql-snow");
  }
  extendToolbar(e) {
    e.container != null && (e.container.classList.add("ql-snow"), this.buildButtons(e.container.querySelectorAll("button"), pr), this.buildPickers(e.container.querySelectorAll("select"), pr), this.tooltip = new nc(this.quill, this.options.bounds), e.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
      key: "k",
      shortKey: !0
    }, (t, r) => {
      e.handlers.link.call(e, !r.format.link);
    }));
  }
}
rc.DEFAULTS = Pt({}, vr.DEFAULTS, {
  modules: {
    toolbar: {
      handlers: {
        link(n) {
          if (n) {
            const e = this.quill.getSelection();
            if (e == null || e.length === 0) return;
            let t = this.quill.getText(e);
            /^\S+@\S+\.\S+$/.test(t) && t.indexOf("mailto:") !== 0 && (t = `mailto:${t}`);
            const {
              tooltip: r
            } = this.quill.theme;
            r.edit("link", t);
          } else
            this.quill.format("link", !1, C.sources.USER);
        }
      }
    }
  }
});
C.register({
  "attributors/attribute/direction": Ba,
  "attributors/class/align": Ia,
  "attributors/class/background": tm,
  "attributors/class/color": em,
  "attributors/class/direction": Pa,
  "attributors/class/font": Ua,
  "attributors/class/size": Fa,
  "attributors/style/align": ka,
  "attributors/style/background": fo,
  "attributors/style/color": ho,
  "attributors/style/direction": Ma,
  "attributors/style/font": $a,
  "attributors/style/size": Ha
}, !0);
C.register({
  "formats/align": Ia,
  "formats/direction": Pa,
  "formats/indent": Km,
  "formats/background": fo,
  "formats/color": ho,
  "formats/font": Ua,
  "formats/size": Fa,
  "formats/blockquote": Fi,
  "formats/code-block": Le,
  "formats/header": Hi,
  "formats/list": yr,
  "formats/bold": dr,
  "formats/code": po,
  "formats/italic": zi,
  "formats/link": Bt,
  "formats/script": Ki,
  "formats/strike": Vi,
  "formats/underline": Gi,
  "formats/formula": ts,
  "formats/image": Wi,
  "formats/video": ns,
  "modules/syntax": Za,
  "modules/table": Gm,
  "modules/toolbar": vo,
  "themes/bubble": tc,
  "themes/snow": rc,
  "ui/icons": pr,
  "ui/picker": ys,
  "ui/icon-picker": Ya,
  "ui/color-picker": Ja,
  "ui/tooltip": Xa
}, !0);
const Mg = ({
  value: n,
  onChange: e,
  placeholder: t = "Compose your email...",
  className: r = "",
  height: s = "200px"
}) => {
  const i = rr(null), o = rr(null), a = rr(!1);
  return Nn(() => {
    if (!i.current) return;
    i.current.innerHTML = "";
    const c = document.createElement("div");
    i.current.appendChild(c);
    const u = new C(c, {
      theme: "snow",
      placeholder: t,
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, !1] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"]
        ]
      }
    });
    return o.current = u, u.on("text-change", () => {
      if (a.current) return;
      const f = u.root.innerHTML;
      e(f === "<p><br></p>" ? "" : f);
    }), () => {
      o.current = null;
    };
  }, [t, e]), Nn(() => {
    if (!o.current || a.current) return;
    const c = o.current.root.innerHTML;
    n !== c && n !== (c === "<p><br></p>" ? "" : c) && (a.current = !0, o.current.root.innerHTML = n || "", a.current = !1);
  }, [n]), /* @__PURE__ */ O.jsx("div", { className: `ecw-internal-editor ${r}`, children: /* @__PURE__ */ O.jsx(
    "div",
    {
      ref: i,
      style: { minHeight: s, borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px" }
    }
  ) });
}, Dg = (n) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.trim()), Ug = ({ defaultToEmails: n } = {}) => {
  const [e, t] = Oe(
    () => n != null && n.length ? n.map((_, z) => ({ id: `default-${z}`, email: _ })) : []
  ), [r, s] = Oe([]), [i, o] = Oe([]), [a, c] = Oe(!1), [u, f] = Oe(!1), [m, d] = Oe(""), [y, p] = Oe(""), [v, w] = Oe(""), A = (_, z) => {
    const K = _.trim();
    if (!K || !Dg(K))
      return;
    const re = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
      email: K
    };
    if (z === "to") {
      if (e.some((le) => le.email.toLowerCase() === K.toLowerCase()))
        return;
      t((le) => [...le, re]), d("");
    } else if (z === "cc") {
      if (r.some((le) => le.email.toLowerCase() === K.toLowerCase()))
        return;
      s((le) => [...le, re]), p("");
    } else {
      if (i.some((le) => le.email.toLowerCase() === K.toLowerCase()))
        return;
      o((le) => [...le, re]), w("");
    }
  };
  return {
    toRecipients: e,
    setToRecipients: t,
    ccRecipients: r,
    setCcRecipients: s,
    bccRecipients: i,
    setBccRecipients: o,
    showCC: a,
    setShowCC: c,
    showBCC: u,
    setShowBCC: f,
    toInput: m,
    setToInput: d,
    ccInput: y,
    setCcInput: p,
    bccInput: v,
    setBccInput: w,
    addRecipient: A,
    handleRecipientInputKeyDown: (_, z) => {
      if (_.key === "Enter" || _.key === ",") {
        _.preventDefault();
        const K = z === "to" ? m : z === "cc" ? y : v;
        K && A(K, z);
      }
    },
    handleRecipientInputBlur: (_) => {
      const z = _ === "to" ? m : _ === "cc" ? y : v;
      z && A(z, _);
    },
    removeRecipient: (_, z) => {
      z === "to" ? t((K) => K.filter((re) => re.id !== _)) : z === "cc" ? s((K) => K.filter((re) => re.id !== _)) : o((K) => K.filter((re) => re.id !== _));
    }
  };
}, $g = (n) => {
  const [e, t] = Oe([]), r = rr(null);
  return {
    attachments: e,
    setAttachments: t,
    fileUploadRef: r,
    handleFileSelect: (a) => {
      const c = a.map((u) => ({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        file: u,
        isUploading: !0
      }));
      t((u) => [...u, ...c]), c.forEach((u) => {
        u.file && n.uploadFile(u.file).then((f) => {
          var y;
          const m = f == null ? void 0 : f.name, d = (f == null ? void 0 : f.file_name) || ((y = u.file) == null ? void 0 : y.name) || "Attachment";
          t(
            m ? (p) => p.map((v) => v.id === u.id ? { ...v, name: m, fileName: d, isUploading: !1 } : v) : (p) => p.map((v) => v.id === u.id ? { ...v, isUploading: !1, uploadError: "Upload failed" } : v)
          );
        }).catch((f) => {
          t(
            (m) => m.map(
              (d) => d.id === u.id ? { ...d, isUploading: !1, uploadError: f instanceof Error ? f.message : "Upload failed" } : d
            )
          );
        });
      });
    },
    removeAttachment: (a) => {
      t((c) => c.filter((u) => u.id !== a));
    },
    handleAttachClick: () => {
      var a;
      (a = r.current) == null || a.click();
    }
  };
}, Fg = ({ apiAdapter: n, config: e, onClose: t, onSend: r }) => {
  const [s, i] = Oe(""), [o, a] = Oe(""), [c, u] = Oe(!1), [f, m] = Oe(!1), [d, y] = Oe([]), [p, v] = Oe(!1), {
    toRecipients: w,
    setToRecipients: A,
    ccRecipients: R,
    setCcRecipients: q,
    bccRecipients: M,
    setBccRecipients: _,
    showCC: z,
    setShowCC: K,
    showBCC: re,
    setShowBCC: le,
    toInput: me,
    setToInput: g,
    ccInput: L,
    setCcInput: E,
    bccInput: B,
    setBccInput: k,
    handleRecipientInputKeyDown: T,
    handleRecipientInputBlur: P,
    removeRecipient: U
  } = Ug({ defaultToEmails: e.defaultToEmails }), {
    attachments: F,
    setAttachments: D,
    fileUploadRef: x,
    handleFileSelect: j,
    removeAttachment: H,
    handleAttachClick: V
  } = $g(n), I = e.replyData;
  Nn(() => {
    if (!I) return;
    queueMicrotask(() => {
      var ie;
      I.subject && i(I.subject.toLowerCase().startsWith("re:") ? I.subject : `Re: ${I.subject}`);
      const J = (X) => X ? X.split(",").map((ae) => ae.trim()).filter(Boolean).map((ae) => ({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        email: ae
      })) : [];
      if (I.to && A(J(I.to)), I.cc) {
        const X = J(I.cc);
        X.length > 0 && (q(X), K(!0));
      }
      if (I.bcc) {
        const X = J(I.bcc);
        X.length > 0 && (_(X), le(!0));
      }
      (ie = I.attachments) != null && ie.length && D(I.attachments.map((X) => ({
        id: X.name || X.file_name || Math.random().toString(36).substr(2, 9),
        name: X.name,
        fileUrl: X.file_url,
        isUploading: !1
      })));
    });
  }, [I, i, A, q, K, _, le, D]), Nn(() => {
    var ie;
    if (!((ie = e.defaultToEmails) != null && ie.length) || I != null && I.to) return;
    const te = e.defaultToEmails;
    queueMicrotask(() => {
      A(
        (X) => X.length === 0 ? te.map((ae, de) => ({ id: `default-${de}`, email: ae })) : X
      );
    });
  }, [e.defaultToEmails, I, A]);
  const ce = Ic(() => {
    let te = "", J;
    if (I != null && I.content) {
      const ie = I.date && I.time ? `${I.date} at ${I.time}` : "the previous message";
      te = `<br><hr><br><div><b>From:</b> ${I.senderName || I.to || "User"}<br><b>Sent:</b> ${ie}<br><b>Subject:</b> ${I.subject || ""}</div><br><div>${I.content}</div>`;
    }
    return I != null && I.in_reply_to && (J = I.in_reply_to), { quotedContent: te, inReplyTo: J };
  }, [I]);
  return Nn(() => {
    if (!f || !n.getTemplates) return;
    let te = !0;
    return d.length === 0 && v(!0), n.getTemplates().then((J) => {
      te && (y(J), v(!1));
    }).catch(() => {
      te && v(!1);
    }), () => {
      te = !1;
    };
  }, [f, n, d.length]), {
    // State
    subject: s,
    setSubject: i,
    toRecipients: w,
    ccRecipients: R,
    bccRecipients: M,
    showCC: z,
    setShowCC: K,
    showBCC: re,
    setShowBCC: le,
    emailBody: o,
    setEmailBody: a,
    toInput: me,
    setToInput: g,
    ccInput: L,
    setCcInput: E,
    bccInput: B,
    setBccInput: k,
    attachments: F,
    isTemplateModalOpen: f,
    setIsTemplateModalOpen: m,
    fileUploadRef: x,
    isPending: c,
    emailTemplates: d,
    isLoadingTemplates: p,
    replyData: I,
    // Handlers
    handleRecipientInputKeyDown: T,
    handleRecipientInputBlur: P,
    removeRecipient: U,
    handleFileSelect: j,
    removeAttachment: H,
    handleAttachClick: V,
    handleSend: async () => {
      var Ge, $t, Ft, Me, yt, an, lt, vt;
      if (w.length === 0) {
        (Ge = n.showWarning) == null || Ge.call(n, "Validation Error", "Please add at least one recipient");
        return;
      }
      if (!s.trim()) {
        ($t = n.showWarning) == null || $t.call(n, "Validation Error", "Please enter a subject");
        return;
      }
      if (F.filter((be) => be.isUploading).length > 0) {
        (Ft = n.showWarning) == null || Ft.call(n, "Upload In Progress", "Please wait for all files to finish uploading");
        return;
      }
      if (F.filter((be) => be.uploadError).length > 0) {
        (Me = n.showWarning) == null || Me.call(n, "Upload Error", "Some files failed to upload. Please remove them and try again.");
        return;
      }
      const ie = w.map((be) => be.email).join(", "), X = R.length > 0 ? R.map((be) => be.email).join(", ") : void 0, ae = M.length > 0 ? M.map((be) => be.email).join(", ") : void 0, de = F.filter((be) => be.name).map((be) => be.name);
      let ye = o ? `<div class="ql-editor read-mode">${o}</div>` : "";
      const { quotedContent: bt, inReplyTo: Ve } = ce();
      ye += bt;
      const ot = [...e.links ?? []];
      (yt = e.activeLeadName) != null && yt.trim() && (ot.some(
        (qe) => qe.link_doctype === e.activeLeadDoctype && qe.link_name === e.activeLeadName
      ) || ot.push({ link_doctype: e.activeLeadDoctype, link_name: e.activeLeadName }));
      const Rt = ot.length > 0 ? ot : void 0, se = {
        recipients: ie,
        subject: s,
        content: ye,
        cc: X,
        bcc: ae,
        doctype: e.activeLeadName ? e.activeLeadDoctype : e.doctype || "Contact",
        name: e.activeLeadName ? e.activeLeadName : e.referenceName,
        attachments: de.length > 0 ? de : void 0,
        links: Rt,
        ...Ve ? { in_reply_to: Ve } : {}
      };
      u(!0);
      try {
        const be = await n.sendEmail(se);
        be != null && be.name && (Ve && n.updateCommunicationStatus && n.updateCommunicationStatus(Ve, "Replied").catch(() => {
        }), (an = n.showNotification) == null || an.call(n, "Success", "Email sent successfully"), (lt = n.onEmailSent) == null || lt.call(n), r && r(), t());
      } catch {
        (vt = n.showError) == null || vt.call(n, "Error", "Failed to send email");
      } finally {
        u(!1);
      }
    },
    handleTemplateSelect: (te) => {
      a(te), m(!1);
    }
  };
};
function sc(n, e) {
  return function() {
    return n.apply(e, arguments);
  };
}
const { toString: Hg } = Object.prototype, { getPrototypeOf: wo } = Object, { iterator: vs, toStringTag: ic } = Symbol, ws = /* @__PURE__ */ ((n) => (e) => {
  const t = Hg.call(e);
  return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), it = (n) => (n = n.toLowerCase(), (e) => ws(e) === n), Es = (n) => (e) => typeof e === n, { isArray: kn } = Array, qn = Es("undefined");
function wr(n) {
  return n !== null && !qn(n) && n.constructor !== null && !qn(n.constructor) && Be(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const oc = it("ArrayBuffer");
function zg(n) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && oc(n.buffer), e;
}
const Kg = Es("string"), Be = Es("function"), lc = Es("number"), Er = (n) => n !== null && typeof n == "object", Vg = (n) => n === !0 || n === !1, rs = (n) => {
  if (ws(n) !== "object")
    return !1;
  const e = wo(n);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(ic in n) && !(vs in n);
}, Gg = (n) => {
  if (!Er(n) || wr(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, Wg = it("Date"), Zg = it("File"), Jg = (n) => !!(n && typeof n.uri < "u"), Yg = (n) => n && typeof n.getParts < "u", Xg = it("Blob"), Qg = it("FileList"), e1 = (n) => Er(n) && Be(n.pipe);
function t1() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Il = t1(), kl = typeof Il.FormData < "u" ? Il.FormData : void 0, n1 = (n) => {
  let e;
  return n && (kl && n instanceof kl || Be(n.append) && ((e = ws(n)) === "formdata" || // detect form-data instance
  e === "object" && Be(n.toString) && n.toString() === "[object FormData]"));
}, r1 = it("URLSearchParams"), [s1, i1, o1, l1] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(it), a1 = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xr(n, e, { allOwnKeys: t = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let r, s;
  if (typeof n != "object" && (n = [n]), kn(n))
    for (r = 0, s = n.length; r < s; r++)
      e.call(null, n[r], r, n);
  else {
    if (wr(n))
      return;
    const i = t ? Object.getOwnPropertyNames(n) : Object.keys(n), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], e.call(null, n[a], a, n);
  }
}
function ac(n, e) {
  if (wr(n))
    return null;
  e = e.toLowerCase();
  const t = Object.keys(n);
  let r = t.length, s;
  for (; r-- > 0; )
    if (s = t[r], e === s.toLowerCase())
      return s;
  return null;
}
const Zt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, cc = (n) => !qn(n) && n !== Zt;
function Zi() {
  const { caseless: n, skipUndefined: e } = cc(this) && this || {}, t = {}, r = (s, i) => {
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    const o = n && ac(t, i) || i;
    rs(t[o]) && rs(s) ? t[o] = Zi(t[o], s) : rs(s) ? t[o] = Zi({}, s) : kn(s) ? t[o] = s.slice() : (!e || !qn(s)) && (t[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && xr(arguments[s], r);
  return t;
}
const c1 = (n, e, t, { allOwnKeys: r } = {}) => (xr(
  e,
  (s, i) => {
    t && Be(s) ? Object.defineProperty(n, i, {
      value: sc(s, t),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(n, i, {
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), n), u1 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), h1 = (n, e, t, r) => {
  n.prototype = Object.create(e.prototype, r), Object.defineProperty(n.prototype, "constructor", {
    value: n,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n, "super", {
    value: e.prototype
  }), t && Object.assign(n.prototype, t);
}, f1 = (n, e, t, r) => {
  let s, i, o;
  const a = {};
  if (e = e || {}, n == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(n), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, n, e)) && !a[o] && (e[o] = n[o], a[o] = !0);
    n = t !== !1 && wo(n);
  } while (n && (!t || t(n, e)) && n !== Object.prototype);
  return e;
}, d1 = (n, e, t) => {
  n = String(n), (t === void 0 || t > n.length) && (t = n.length), t -= e.length;
  const r = n.indexOf(e, t);
  return r !== -1 && r === t;
}, p1 = (n) => {
  if (!n) return null;
  if (kn(n)) return n;
  let e = n.length;
  if (!lc(e)) return null;
  const t = new Array(e);
  for (; e-- > 0; )
    t[e] = n[e];
  return t;
}, m1 = /* @__PURE__ */ ((n) => (e) => n && e instanceof n)(typeof Uint8Array < "u" && wo(Uint8Array)), g1 = (n, e) => {
  const r = (n && n[vs]).call(n);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    e.call(n, i[0], i[1]);
  }
}, b1 = (n, e) => {
  let t;
  const r = [];
  for (; (t = n.exec(e)) !== null; )
    r.push(t);
  return r;
}, y1 = it("HTMLFormElement"), v1 = (n) => n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(t, r, s) {
  return r.toUpperCase() + s;
}), jl = (({ hasOwnProperty: n }) => (e, t) => n.call(e, t))(Object.prototype), w1 = it("RegExp"), uc = (n, e) => {
  const t = Object.getOwnPropertyDescriptors(n), r = {};
  xr(t, (s, i) => {
    let o;
    (o = e(s, i, n)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(n, r);
}, E1 = (n) => {
  uc(n, (e, t) => {
    if (Be(n) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const r = n[t];
    if (Be(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, x1 = (n, e) => {
  const t = {}, r = (s) => {
    s.forEach((i) => {
      t[i] = !0;
    });
  };
  return kn(n) ? r(n) : r(String(n).split(e)), t;
}, N1 = () => {
}, A1 = (n, e) => n != null && Number.isFinite(n = +n) ? n : e;
function T1(n) {
  return !!(n && Be(n.append) && n[ic] === "FormData" && n[vs]);
}
const S1 = (n) => {
  const e = new Array(10), t = (r, s) => {
    if (Er(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (wr(r))
        return r;
      if (!("toJSON" in r)) {
        e[s] = r;
        const i = kn(r) ? [] : {};
        return xr(r, (o, a) => {
          const c = t(o, s + 1);
          !qn(c) && (i[a] = c);
        }), e[s] = void 0, i;
      }
    }
    return r;
  };
  return t(n, 0);
}, _1 = it("AsyncFunction"), O1 = (n) => n && (Er(n) || Be(n)) && Be(n.then) && Be(n.catch), hc = ((n, e) => n ? setImmediate : e ? ((t, r) => (Zt.addEventListener(
  "message",
  ({ source: s, data: i }) => {
    s === Zt && i === t && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Zt.postMessage(t, "*");
}))(`axios@${Math.random()}`, []) : (t) => setTimeout(t))(typeof setImmediate == "function", Be(Zt.postMessage)), C1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Zt) : typeof process < "u" && process.nextTick || hc, R1 = (n) => n != null && Be(n[vs]), N = {
  isArray: kn,
  isArrayBuffer: oc,
  isBuffer: wr,
  isFormData: n1,
  isArrayBufferView: zg,
  isString: Kg,
  isNumber: lc,
  isBoolean: Vg,
  isObject: Er,
  isPlainObject: rs,
  isEmptyObject: Gg,
  isReadableStream: s1,
  isRequest: i1,
  isResponse: o1,
  isHeaders: l1,
  isUndefined: qn,
  isDate: Wg,
  isFile: Zg,
  isReactNativeBlob: Jg,
  isReactNative: Yg,
  isBlob: Xg,
  isRegExp: w1,
  isFunction: Be,
  isStream: e1,
  isURLSearchParams: r1,
  isTypedArray: m1,
  isFileList: Qg,
  forEach: xr,
  merge: Zi,
  extend: c1,
  trim: a1,
  stripBOM: u1,
  inherits: h1,
  toFlatObject: f1,
  kindOf: ws,
  kindOfTest: it,
  endsWith: d1,
  toArray: p1,
  forEachEntry: g1,
  matchAll: b1,
  isHTMLForm: y1,
  hasOwnProperty: jl,
  hasOwnProp: jl,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: uc,
  freezeMethods: E1,
  toObjectSet: x1,
  toCamelCase: v1,
  noop: N1,
  toFiniteNumber: A1,
  findKey: ac,
  global: Zt,
  isContextDefined: cc,
  isSpecCompliantForm: T1,
  toJSONObject: S1,
  isAsyncFn: _1,
  isThenable: O1,
  setImmediate: hc,
  asap: C1,
  isIterable: R1
};
let ne = class fc extends Error {
  static from(e, t, r, s, i, o) {
    const a = new fc(e.message, t || e.code, r, s, i);
    return a.cause = e, a.name = e.name, e.status != null && a.status == null && (a.status = e.status), o && Object.assign(a, o), a;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(e, t, r, s, i) {
    super(e), Object.defineProperty(this, "message", {
      value: e,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), r && (this.config = r), s && (this.request = s), i && (this.response = i, this.status = i.status);
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
ne.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ne.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ne.ECONNABORTED = "ECONNABORTED";
ne.ETIMEDOUT = "ETIMEDOUT";
ne.ERR_NETWORK = "ERR_NETWORK";
ne.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ne.ERR_DEPRECATED = "ERR_DEPRECATED";
ne.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ne.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ne.ERR_CANCELED = "ERR_CANCELED";
ne.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ne.ERR_INVALID_URL = "ERR_INVALID_URL";
const L1 = null;
function Ji(n) {
  return N.isPlainObject(n) || N.isArray(n);
}
function dc(n) {
  return N.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function xi(n, e, t) {
  return n ? n.concat(e).map(function(s, i) {
    return s = dc(s), !t && i ? "[" + s + "]" : s;
  }).join(t ? "." : "") : e;
}
function q1(n) {
  return N.isArray(n) && !n.some(Ji);
}
const I1 = N.toFlatObject(N, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function xs(n, e, t) {
  if (!N.isObject(n))
    throw new TypeError("target must be an object");
  e = e || new FormData(), t = N.toFlatObject(
    t,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(v, w) {
      return !N.isUndefined(w[v]);
    }
  );
  const r = t.metaTokens, s = t.visitor || f, i = t.dots, o = t.indexes, c = (t.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(e);
  if (!N.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (N.isDate(p))
      return p.toISOString();
    if (N.isBoolean(p))
      return p.toString();
    if (!c && N.isBlob(p))
      throw new ne("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(p) || N.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function f(p, v, w) {
    let A = p;
    if (N.isReactNative(e) && N.isReactNativeBlob(p))
      return e.append(xi(w, v, i), u(p)), !1;
    if (p && !w && typeof p == "object") {
      if (N.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (N.isArray(p) && q1(p) || (N.isFileList(p) || N.endsWith(v, "[]")) && (A = N.toArray(p)))
        return v = dc(v), A.forEach(function(q, M) {
          !(N.isUndefined(q) || q === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? xi([v], M, i) : o === null ? v : v + "[]",
            u(q)
          );
        }), !1;
    }
    return Ji(p) ? !0 : (e.append(xi(w, v, i), u(p)), !1);
  }
  const m = [], d = Object.assign(I1, {
    defaultVisitor: f,
    convertValue: u,
    isVisitable: Ji
  });
  function y(p, v) {
    if (!N.isUndefined(p)) {
      if (m.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      m.push(p), N.forEach(p, function(A, R) {
        (!(N.isUndefined(A) || A === null) && s.call(e, A, N.isString(R) ? R.trim() : R, v, d)) === !0 && y(A, v ? v.concat(R) : [R]);
      }), m.pop();
    }
  }
  if (!N.isObject(n))
    throw new TypeError("data must be an object");
  return y(n), e;
}
function Bl(n) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function Eo(n, e) {
  this._pairs = [], n && xs(n, this, e);
}
const pc = Eo.prototype;
pc.append = function(e, t) {
  this._pairs.push([e, t]);
};
pc.toString = function(e) {
  const t = e ? function(r) {
    return e.call(this, r, Bl);
  } : Bl;
  return this._pairs.map(function(s) {
    return t(s[0]) + "=" + t(s[1]);
  }, "").join("&");
};
function k1(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function mc(n, e, t) {
  if (!e)
    return n;
  const r = t && t.encode || k1, s = N.isFunction(t) ? {
    serialize: t
  } : t, i = s && s.serialize;
  let o;
  if (i ? o = i(e, s) : o = N.isURLSearchParams(e) ? e.toString() : new Eo(e, s).toString(r), o) {
    const a = n.indexOf("#");
    a !== -1 && (n = n.slice(0, a)), n += (n.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return n;
}
class Pl {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, t, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: t,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    N.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const xo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, j1 = typeof URLSearchParams < "u" ? URLSearchParams : Eo, B1 = typeof FormData < "u" ? FormData : null, P1 = typeof Blob < "u" ? Blob : null, M1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: j1,
    FormData: B1,
    Blob: P1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, No = typeof window < "u" && typeof document < "u", Yi = typeof navigator == "object" && navigator || void 0, D1 = No && (!Yi || ["ReactNative", "NativeScript", "NS"].indexOf(Yi.product) < 0), U1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $1 = No && window.location.href || "http://localhost", F1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: No,
  hasStandardBrowserEnv: D1,
  hasStandardBrowserWebWorkerEnv: U1,
  navigator: Yi,
  origin: $1
}, Symbol.toStringTag, { value: "Module" })), Re = {
  ...F1,
  ...M1
};
function H1(n, e) {
  return xs(n, new Re.classes.URLSearchParams(), {
    visitor: function(t, r, s, i) {
      return Re.isNode && N.isBuffer(t) ? (this.append(r, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...e
  });
}
function z1(n) {
  return N.matchAll(/\w+|\[(\w*)]/g, n).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function K1(n) {
  const e = {}, t = Object.keys(n);
  let r;
  const s = t.length;
  let i;
  for (r = 0; r < s; r++)
    i = t[r], e[i] = n[i];
  return e;
}
function gc(n) {
  function e(t, r, s, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), c = i >= t.length;
    return o = !o && N.isArray(s) ? s.length : o, c ? (N.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !N.isObject(s[o])) && (s[o] = []), e(t, r, s[o], i) && N.isArray(s[o]) && (s[o] = K1(s[o])), !a);
  }
  if (N.isFormData(n) && N.isFunction(n.entries)) {
    const t = {};
    return N.forEachEntry(n, (r, s) => {
      e(z1(r), s, t, 0);
    }), t;
  }
  return null;
}
function V1(n, e, t) {
  if (N.isString(n))
    try {
      return (e || JSON.parse)(n), N.trim(n);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (t || JSON.stringify)(n);
}
const Nr = {
  transitional: xo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(e, t) {
      const r = t.getContentType() || "", s = r.indexOf("application/json") > -1, i = N.isObject(e);
      if (i && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e))
        return s ? JSON.stringify(gc(e)) : e;
      if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e) || N.isReadableStream(e))
        return e;
      if (N.isArrayBufferView(e))
        return e.buffer;
      if (N.isURLSearchParams(e))
        return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return H1(e, this.formSerializer).toString();
        if ((a = N.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return xs(
            a ? { "files[]": e } : e,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return i || s ? (t.setContentType("application/json", !1), V1(e)) : e;
    }
  ],
  transformResponse: [
    function(e) {
      const t = this.transitional || Nr.transitional, r = t && t.forcedJSONParsing, s = this.responseType === "json";
      if (N.isResponse(e) || N.isReadableStream(e))
        return e;
      if (e && N.isString(e) && (r && !this.responseType || s)) {
        const o = !(t && t.silentJSONParsing) && s;
        try {
          return JSON.parse(e, this.parseReviver);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError" ? ne.from(a, ne.ERR_BAD_RESPONSE, this, null, this.response) : a;
        }
      }
      return e;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Re.classes.FormData,
    Blob: Re.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
N.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Nr.headers[n] = {};
});
const G1 = N.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), W1 = (n) => {
  const e = {};
  let t, r, s;
  return n && n.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), t = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!t || e[t] && G1[t]) && (t === "set-cookie" ? e[t] ? e[t].push(r) : e[t] = [r] : e[t] = e[t] ? e[t] + ", " + r : r);
  }), e;
}, Ml = Symbol("internals");
function Xn(n) {
  return n && String(n).trim().toLowerCase();
}
function ss(n) {
  return n === !1 || n == null ? n : N.isArray(n) ? n.map(ss) : String(n);
}
function Z1(n) {
  const e = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = t.exec(n); )
    e[r[1]] = r[2];
  return e;
}
const J1 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Ni(n, e, t, r, s) {
  if (N.isFunction(r))
    return r.call(this, e, t);
  if (s && (e = t), !!N.isString(e)) {
    if (N.isString(r))
      return e.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(e);
  }
}
function Y1(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
}
function X1(n, e) {
  const t = N.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(n, r + t, {
      value: function(s, i, o) {
        return this[r].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
let Pe = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, r) {
    const s = this;
    function i(a, c, u) {
      const f = Xn(c);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const m = N.findKey(s, f);
      (!m || s[m] === void 0 || u === !0 || u === void 0 && s[m] !== !1) && (s[m || c] = ss(a));
    }
    const o = (a, c) => N.forEach(a, (u, f) => i(u, f, c));
    if (N.isPlainObject(e) || e instanceof this.constructor)
      o(e, t);
    else if (N.isString(e) && (e = e.trim()) && !J1(e))
      o(W1(e), t);
    else if (N.isObject(e) && N.isIterable(e)) {
      let a = {}, c, u;
      for (const f of e) {
        if (!N.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        a[u = f[0]] = (c = a[u]) ? N.isArray(c) ? [...c, f[1]] : [c, f[1]] : f[1];
      }
      o(a, t);
    } else
      e != null && i(t, e, r);
    return this;
  }
  get(e, t) {
    if (e = Xn(e), e) {
      const r = N.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!t)
          return s;
        if (t === !0)
          return Z1(s);
        if (N.isFunction(t))
          return t.call(this, s, r);
        if (N.isRegExp(t))
          return t.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = Xn(e), e) {
      const r = N.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!t || Ni(this, this[r], r, t)));
    }
    return !1;
  }
  delete(e, t) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = Xn(o), o) {
        const a = N.findKey(r, o);
        a && (!t || Ni(r, r[a], a, t)) && (delete r[a], s = !0);
      }
    }
    return N.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const t = Object.keys(this);
    let r = t.length, s = !1;
    for (; r--; ) {
      const i = t[r];
      (!e || Ni(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const t = this, r = {};
    return N.forEach(this, (s, i) => {
      const o = N.findKey(r, i);
      if (o) {
        t[o] = ss(s), delete t[i];
        return;
      }
      const a = e ? Y1(i) : String(i).trim();
      a !== i && delete t[i], t[a] = ss(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (r, s) => {
      r != null && r !== !1 && (t[s] = e && N.isArray(r) ? r.join(", ") : r);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...t) {
    const r = new this(e);
    return t.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[Ml] = this[Ml] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = Xn(o);
      r[a] || (X1(s, o), r[a] = !0);
    }
    return N.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
Pe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
N.reduceDescriptors(Pe.prototype, ({ value: n }, e) => {
  let t = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => n,
    set(r) {
      this[t] = r;
    }
  };
});
N.freezeMethods(Pe);
function Ai(n, e) {
  const t = this || Nr, r = e || t, s = Pe.from(r.headers);
  let i = r.data;
  return N.forEach(n, function(a) {
    i = a.call(t, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function bc(n) {
  return !!(n && n.__CANCEL__);
}
let Ar = class extends ne {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(e, t, r) {
    super(e ?? "canceled", ne.ERR_CANCELED, t, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function yc(n, e, t) {
  const r = t.config.validateStatus;
  !t.status || !r || r(t.status) ? n(t) : e(
    new ne(
      "Request failed with status code " + t.status,
      [ne.ERR_BAD_REQUEST, ne.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
      t.config,
      t.request,
      t
    )
  );
}
function Q1(n) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return e && e[1] || "";
}
function eb(n, e) {
  n = n || 10;
  const t = new Array(n), r = new Array(n);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(c) {
    const u = Date.now(), f = r[i];
    o || (o = u), t[s] = c, r[s] = u;
    let m = i, d = 0;
    for (; m !== s; )
      d += t[m++], m = m % n;
    if (s = (s + 1) % n, s === i && (i = (i + 1) % n), u - o < e)
      return;
    const y = f && u - f;
    return y ? Math.round(d * 1e3 / y) : void 0;
  };
}
function tb(n, e) {
  let t = 0, r = 1e3 / e, s, i;
  const o = (u, f = Date.now()) => {
    t = f, s = null, i && (clearTimeout(i), i = null), n(...u);
  };
  return [(...u) => {
    const f = Date.now(), m = f - t;
    m >= r ? o(u, f) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - m)));
  }, () => s && o(s)];
}
const us = (n, e, t = 3) => {
  let r = 0;
  const s = eb(50, 250);
  return tb((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, c = o - r, u = s(c), f = o <= a;
    r = o;
    const m = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && a && f ? (a - o) / u : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    n(m);
  }, t);
}, Dl = (n, e) => {
  const t = n != null;
  return [
    (r) => e[0]({
      lengthComputable: t,
      total: n,
      loaded: r
    }),
    e[1]
  ];
}, Ul = (n) => (...e) => N.asap(() => n(...e)), nb = Re.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, e) => (t) => (t = new URL(t, Re.origin), n.protocol === t.protocol && n.host === t.host && (e || n.port === t.port)))(
  new URL(Re.origin),
  Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)
) : () => !0, rb = Re.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, e, t, r, s, i, o) {
      if (typeof document > "u") return;
      const a = [`${n}=${encodeURIComponent(e)}`];
      N.isNumber(t) && a.push(`expires=${new Date(t).toUTCString()}`), N.isString(r) && a.push(`path=${r}`), N.isString(s) && a.push(`domain=${s}`), i === !0 && a.push("secure"), N.isString(o) && a.push(`SameSite=${o}`), document.cookie = a.join("; ");
    },
    read(n) {
      if (typeof document > "u") return null;
      const e = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
      return e ? decodeURIComponent(e[1]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function sb(n) {
  return typeof n != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function ib(n, e) {
  return e ? n.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : n;
}
function vc(n, e, t) {
  let r = !sb(e);
  return n && (r || t == !1) ? ib(n, e) : e;
}
const $l = (n) => n instanceof Pe ? { ...n } : n;
function en(n, e) {
  e = e || {};
  const t = {};
  function r(u, f, m, d) {
    return N.isPlainObject(u) && N.isPlainObject(f) ? N.merge.call({ caseless: d }, u, f) : N.isPlainObject(f) ? N.merge({}, f) : N.isArray(f) ? f.slice() : f;
  }
  function s(u, f, m, d) {
    if (N.isUndefined(f)) {
      if (!N.isUndefined(u))
        return r(void 0, u, m, d);
    } else return r(u, f, m, d);
  }
  function i(u, f) {
    if (!N.isUndefined(f))
      return r(void 0, f);
  }
  function o(u, f) {
    if (N.isUndefined(f)) {
      if (!N.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, m) {
    if (m in e)
      return r(u, f);
    if (m in n)
      return r(void 0, u);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, f, m) => s($l(u), $l(f), m, !0)
  };
  return N.forEach(Object.keys({ ...n, ...e }), function(f) {
    if (f === "__proto__" || f === "constructor" || f === "prototype") return;
    const m = N.hasOwnProp(c, f) ? c[f] : s, d = m(n[f], e[f], f);
    N.isUndefined(d) && m !== a || (t[f] = d);
  }), t;
}
const wc = (n) => {
  const e = en({}, n);
  let { data: t, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = e;
  if (e.headers = o = Pe.from(o), e.url = mc(
    vc(e.baseURL, e.url, e.allowAbsoluteUrls),
    n.params,
    n.paramsSerializer
  ), a && o.set(
    "Authorization",
    "Basic " + btoa(
      (a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")
    )
  ), N.isFormData(t)) {
    if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (N.isFunction(t.getHeaders)) {
      const c = t.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(c).forEach(([f, m]) => {
        u.includes(f.toLowerCase()) && o.set(f, m);
      });
    }
  }
  if (Re.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(e)), r || r !== !1 && nb(e.url))) {
    const c = s && i && rb.read(i);
    c && o.set(s, c);
  }
  return e;
}, ob = typeof XMLHttpRequest < "u", lb = ob && function(n) {
  return new Promise(function(t, r) {
    const s = wc(n);
    let i = s.data;
    const o = Pe.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: u } = s, f, m, d, y, p;
    function v() {
      y && y(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(f), s.signal && s.signal.removeEventListener("abort", f);
    }
    let w = new XMLHttpRequest();
    w.open(s.method.toUpperCase(), s.url, !0), w.timeout = s.timeout;
    function A() {
      if (!w)
        return;
      const q = Pe.from(
        "getAllResponseHeaders" in w && w.getAllResponseHeaders()
      ), _ = {
        data: !a || a === "text" || a === "json" ? w.responseText : w.response,
        status: w.status,
        statusText: w.statusText,
        headers: q,
        config: n,
        request: w
      };
      yc(
        function(K) {
          t(K), v();
        },
        function(K) {
          r(K), v();
        },
        _
      ), w = null;
    }
    "onloadend" in w ? w.onloadend = A : w.onreadystatechange = function() {
      !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, w.onabort = function() {
      w && (r(new ne("Request aborted", ne.ECONNABORTED, n, w)), w = null);
    }, w.onerror = function(M) {
      const _ = M && M.message ? M.message : "Network Error", z = new ne(_, ne.ERR_NETWORK, n, w);
      z.event = M || null, r(z), w = null;
    }, w.ontimeout = function() {
      let M = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || xo;
      s.timeoutErrorMessage && (M = s.timeoutErrorMessage), r(
        new ne(
          M,
          _.clarifyTimeoutError ? ne.ETIMEDOUT : ne.ECONNABORTED,
          n,
          w
        )
      ), w = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in w && N.forEach(o.toJSON(), function(M, _) {
      w.setRequestHeader(_, M);
    }), N.isUndefined(s.withCredentials) || (w.withCredentials = !!s.withCredentials), a && a !== "json" && (w.responseType = s.responseType), u && ([d, p] = us(u, !0), w.addEventListener("progress", d)), c && w.upload && ([m, y] = us(c), w.upload.addEventListener("progress", m), w.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (f = (q) => {
      w && (r(!q || q.type ? new Ar(null, n, w) : q), w.abort(), w = null);
    }, s.cancelToken && s.cancelToken.subscribe(f), s.signal && (s.signal.aborted ? f() : s.signal.addEventListener("abort", f)));
    const R = Q1(s.url);
    if (R && Re.protocols.indexOf(R) === -1) {
      r(
        new ne(
          "Unsupported protocol " + R + ":",
          ne.ERR_BAD_REQUEST,
          n
        )
      );
      return;
    }
    w.send(i || null);
  });
}, ab = (n, e) => {
  const { length: t } = n = n ? n.filter(Boolean) : [];
  if (e || t) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, a();
        const f = u instanceof Error ? u : this.reason;
        r.abort(
          f instanceof ne ? f : new Ar(f instanceof Error ? f.message : f)
        );
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new ne(`timeout of ${e}ms exceeded`, ne.ETIMEDOUT));
    }, e);
    const a = () => {
      n && (o && clearTimeout(o), o = null, n.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), n = null);
    };
    n.forEach((u) => u.addEventListener("abort", i));
    const { signal: c } = r;
    return c.unsubscribe = () => N.asap(a), c;
  }
}, cb = function* (n, e) {
  let t = n.byteLength;
  if (t < e) {
    yield n;
    return;
  }
  let r = 0, s;
  for (; r < t; )
    s = r + e, yield n.slice(r, s), r = s;
}, ub = async function* (n, e) {
  for await (const t of hb(n))
    yield* cb(t, e);
}, hb = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const e = n.getReader();
  try {
    for (; ; ) {
      const { done: t, value: r } = await e.read();
      if (t)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, Fl = (n, e, t, r) => {
  const s = ub(n, e);
  let i = 0, o, a = (c) => {
    o || (o = !0, r && r(c));
  };
  return new ReadableStream(
    {
      async pull(c) {
        try {
          const { done: u, value: f } = await s.next();
          if (u) {
            a(), c.close();
            return;
          }
          let m = f.byteLength;
          if (t) {
            let d = i += m;
            t(d);
          }
          c.enqueue(new Uint8Array(f));
        } catch (u) {
          throw a(u), u;
        }
      },
      cancel(c) {
        return a(c), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, Hl = 64 * 1024, { isFunction: Qr } = N, fb = (({ Request: n, Response: e }) => ({
  Request: n,
  Response: e
}))(N.global), { ReadableStream: zl, TextEncoder: Kl } = N.global, Vl = (n, ...e) => {
  try {
    return !!n(...e);
  } catch {
    return !1;
  }
}, db = (n) => {
  n = N.merge.call(
    {
      skipUndefined: !0
    },
    fb,
    n
  );
  const { fetch: e, Request: t, Response: r } = n, s = e ? Qr(e) : typeof fetch == "function", i = Qr(t), o = Qr(r);
  if (!s)
    return !1;
  const a = s && Qr(zl), c = s && (typeof Kl == "function" ? /* @__PURE__ */ ((p) => (v) => p.encode(v))(new Kl()) : async (p) => new Uint8Array(await new t(p).arrayBuffer())), u = i && a && Vl(() => {
    let p = !1;
    const v = new t(Re.origin, {
      body: new zl(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }).headers.has("Content-Type");
    return p && !v;
  }), f = o && a && Vl(() => N.isReadableStream(new r("").body)), m = {
    stream: f && ((p) => p.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !m[p] && (m[p] = (v, w) => {
      let A = v && v[p];
      if (A)
        return A.call(v);
      throw new ne(
        `Response type '${p}' is not supported`,
        ne.ERR_NOT_SUPPORT,
        w
      );
    });
  });
  const d = async (p) => {
    if (p == null)
      return 0;
    if (N.isBlob(p))
      return p.size;
    if (N.isSpecCompliantForm(p))
      return (await new t(Re.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(p) || N.isArrayBuffer(p))
      return p.byteLength;
    if (N.isURLSearchParams(p) && (p = p + ""), N.isString(p))
      return (await c(p)).byteLength;
  }, y = async (p, v) => {
    const w = N.toFiniteNumber(p.getContentLength());
    return w ?? d(v);
  };
  return async (p) => {
    let {
      url: v,
      method: w,
      data: A,
      signal: R,
      cancelToken: q,
      timeout: M,
      onDownloadProgress: _,
      onUploadProgress: z,
      responseType: K,
      headers: re,
      withCredentials: le = "same-origin",
      fetchOptions: me
    } = wc(p), g = e || fetch;
    K = K ? (K + "").toLowerCase() : "text";
    let L = ab(
      [R, q && q.toAbortSignal()],
      M
    ), E = null;
    const B = L && L.unsubscribe && (() => {
      L.unsubscribe();
    });
    let k;
    try {
      if (z && u && w !== "get" && w !== "head" && (k = await y(re, A)) !== 0) {
        let x = new t(v, {
          method: "POST",
          body: A,
          duplex: "half"
        }), j;
        if (N.isFormData(A) && (j = x.headers.get("content-type")) && re.setContentType(j), x.body) {
          const [H, V] = Dl(
            k,
            us(Ul(z))
          );
          A = Fl(x.body, Hl, H, V);
        }
      }
      N.isString(le) || (le = le ? "include" : "omit");
      const T = i && "credentials" in t.prototype, P = {
        ...me,
        signal: L,
        method: w.toUpperCase(),
        headers: re.normalize().toJSON(),
        body: A,
        duplex: "half",
        credentials: T ? le : void 0
      };
      E = i && new t(v, P);
      let U = await (i ? g(E, me) : g(v, P));
      const F = f && (K === "stream" || K === "response");
      if (f && (_ || F && B)) {
        const x = {};
        ["status", "statusText", "headers"].forEach((I) => {
          x[I] = U[I];
        });
        const j = N.toFiniteNumber(U.headers.get("content-length")), [H, V] = _ && Dl(
          j,
          us(Ul(_), !0)
        ) || [];
        U = new r(
          Fl(U.body, Hl, H, () => {
            V && V(), B && B();
          }),
          x
        );
      }
      K = K || "text";
      let D = await m[N.findKey(m, K) || "text"](
        U,
        p
      );
      return !F && B && B(), await new Promise((x, j) => {
        yc(x, j, {
          data: D,
          headers: Pe.from(U.headers),
          status: U.status,
          statusText: U.statusText,
          config: p,
          request: E
        });
      });
    } catch (T) {
      throw B && B(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
        new ne(
          "Network Error",
          ne.ERR_NETWORK,
          p,
          E,
          T && T.response
        ),
        {
          cause: T.cause || T
        }
      ) : ne.from(T, T && T.code, p, E, T && T.response);
    }
  };
}, pb = /* @__PURE__ */ new Map(), Ec = (n) => {
  let e = n && n.env || {};
  const { fetch: t, Request: r, Response: s } = e, i = [r, s, t];
  let o = i.length, a = o, c, u, f = pb;
  for (; a--; )
    c = i[a], u = f.get(c), u === void 0 && f.set(c, u = a ? /* @__PURE__ */ new Map() : db(e)), f = u;
  return u;
};
Ec();
const Ao = {
  http: L1,
  xhr: lb,
  fetch: {
    get: Ec
  }
};
N.forEach(Ao, (n, e) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: e });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: e });
  }
});
const Gl = (n) => `- ${n}`, mb = (n) => N.isFunction(n) || n === null || n === !1;
function gb(n, e) {
  n = N.isArray(n) ? n : [n];
  const { length: t } = n;
  let r, s;
  const i = {};
  for (let o = 0; o < t; o++) {
    r = n[o];
    let a;
    if (s = r, !mb(r) && (s = Ao[(a = String(r)).toLowerCase()], s === void 0))
      throw new ne(`Unknown adapter '${a}'`);
    if (s && (N.isFunction(s) || (s = s.get(e))))
      break;
    i[a || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([c, u]) => `adapter ${c} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let a = t ? o.length > 1 ? `since :
` + o.map(Gl).join(`
`) : " " + Gl(o[0]) : "as no adapter specified";
    throw new ne(
      "There is no suitable adapter to dispatch the request " + a,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const xc = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: gb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ao
};
function Ti(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Ar(null, n);
}
function Wl(n) {
  return Ti(n), n.headers = Pe.from(n.headers), n.data = Ai.call(n, n.transformRequest), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), xc.getAdapter(n.adapter || Nr.adapter, n)(n).then(
    function(r) {
      return Ti(n), r.data = Ai.call(n, n.transformResponse, r), r.headers = Pe.from(r.headers), r;
    },
    function(r) {
      return bc(r) || (Ti(n), r && r.response && (r.response.data = Ai.call(
        n,
        n.transformResponse,
        r.response
      ), r.response.headers = Pe.from(r.response.headers))), Promise.reject(r);
    }
  );
}
const Nc = "1.13.6", Ns = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, e) => {
  Ns[n] = function(r) {
    return typeof r === n || "a" + (e < 1 ? "n " : " ") + n;
  };
});
const Zl = {};
Ns.transitional = function(e, t, r) {
  function s(i, o) {
    return "[Axios v" + Nc + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new ne(
        s(o, " has been removed" + (t ? " in " + t : "")),
        ne.ERR_DEPRECATED
      );
    return t && !Zl[o] && (Zl[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
Ns.spelling = function(e) {
  return (t, r) => (console.warn(`${r} is likely a misspelling of ${e}`), !0);
};
function bb(n, e, t) {
  if (typeof n != "object")
    throw new ne("options must be an object", ne.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(n);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = e[i];
    if (o) {
      const a = n[i], c = a === void 0 || o(a, i, n);
      if (c !== !0)
        throw new ne(
          "option " + i + " must be " + c,
          ne.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (t !== !0)
      throw new ne("Unknown option " + i, ne.ERR_BAD_OPTION);
  }
}
const is = {
  assertOptions: bb,
  validators: Ns
}, Ue = is.validators;
let Jt = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new Pl(),
      response: new Pl()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = en(this.defaults, t);
    const { transitional: r, paramsSerializer: s, headers: i } = t;
    r !== void 0 && is.assertOptions(
      r,
      {
        silentJSONParsing: Ue.transitional(Ue.boolean),
        forcedJSONParsing: Ue.transitional(Ue.boolean),
        clarifyTimeoutError: Ue.transitional(Ue.boolean),
        legacyInterceptorReqResOrdering: Ue.transitional(Ue.boolean)
      },
      !1
    ), s != null && (N.isFunction(s) ? t.paramsSerializer = {
      serialize: s
    } : is.assertOptions(
      s,
      {
        encode: Ue.function,
        serialize: Ue.function
      },
      !0
    )), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), is.assertOptions(
      t,
      {
        baseUrl: Ue.spelling("baseURL"),
        withXsrfToken: Ue.spelling("withXSRFToken")
      },
      !0
    ), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let o = i && N.merge(i.common, i[t.method]);
    i && N.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (p) => {
      delete i[p];
    }), t.headers = Pe.concat(o, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(v) {
      if (typeof v.runWhen == "function" && v.runWhen(t) === !1)
        return;
      c = c && v.synchronous;
      const w = t.transitional || xo;
      w && w.legacyInterceptorReqResOrdering ? a.unshift(v.fulfilled, v.rejected) : a.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let f, m = 0, d;
    if (!c) {
      const p = [Wl.bind(this), void 0];
      for (p.unshift(...a), p.push(...u), d = p.length, f = Promise.resolve(t); m < d; )
        f = f.then(p[m++], p[m++]);
      return f;
    }
    d = a.length;
    let y = t;
    for (; m < d; ) {
      const p = a[m++], v = a[m++];
      try {
        y = p(y);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      f = Wl.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (m = 0, d = u.length; m < d; )
      f = f.then(u[m++], u[m++]);
    return f;
  }
  getUri(e) {
    e = en(this.defaults, e);
    const t = vc(e.baseURL, e.url, e.allowAbsoluteUrls);
    return mc(t, e.params, e.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(e) {
  Jt.prototype[e] = function(t, r) {
    return this.request(
      en(r || {}, {
        method: e,
        url: t,
        data: (r || {}).data
      })
    );
  };
});
N.forEach(["post", "put", "patch"], function(e) {
  function t(r) {
    return function(i, o, a) {
      return this.request(
        en(a || {}, {
          method: e,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: i,
          data: o
        })
      );
    };
  }
  Jt.prototype[e] = t(), Jt.prototype[e + "Form"] = t(!0);
});
let yb = class Ac {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      r.reason || (r.reason = new Ar(i, o, a), t(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), t = (r) => {
      e.abort(r);
    };
    return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Ac(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
};
function vb(n) {
  return function(t) {
    return n.apply(null, t);
  };
}
function wb(n) {
  return N.isObject(n) && n.isAxiosError === !0;
}
const Xi = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Xi).forEach(([n, e]) => {
  Xi[e] = n;
});
function Tc(n) {
  const e = new Jt(n), t = sc(Jt.prototype.request, e);
  return N.extend(t, Jt.prototype, e, { allOwnKeys: !0 }), N.extend(t, e, null, { allOwnKeys: !0 }), t.create = function(s) {
    return Tc(en(n, s));
  }, t;
}
const ve = Tc(Nr);
ve.Axios = Jt;
ve.CanceledError = Ar;
ve.CancelToken = yb;
ve.isCancel = bc;
ve.VERSION = Nc;
ve.toFormData = xs;
ve.AxiosError = ne;
ve.Cancel = ve.CanceledError;
ve.all = function(e) {
  return Promise.all(e);
};
ve.spread = vb;
ve.isAxiosError = wb;
ve.mergeConfig = en;
ve.AxiosHeaders = Pe;
ve.formToJSON = (n) => gc(N.isHTMLForm(n) ? new FormData(n) : n);
ve.getAdapter = xc.getAdapter;
ve.HttpStatusCode = Xi;
ve.default = ve;
const {
  Axios: jb,
  AxiosError: Bb,
  CanceledError: Pb,
  isCancel: Mb,
  CancelToken: Db,
  VERSION: Ub,
  all: $b,
  Cancel: Fb,
  isAxiosError: Hb,
  spread: zb,
  toFormData: Kb,
  AxiosHeaders: Vb,
  HttpStatusCode: Gb,
  formToJSON: Wb,
  getAdapter: Zb,
  mergeConfig: Jb
} = ve, Eb = (n = "/", e) => {
  const t = {};
  return e && (t.Authorization = `token ${e}`), ve.create({
    baseURL: n,
    withCredentials: !0,
    headers: t
  });
}, xb = (n) => ({
  sendEmail: async (e) => {
    const t = "/api/method/crm_integration.crm_integration.api.email.make", r = new FormData();
    if (r.append("recipients", e.recipients), r.append("subject", e.subject), r.append("content", e.content), e.cc && r.append("cc", e.cc), e.bcc && r.append("bcc", e.bcc), e.doctype && r.append("doctype", e.doctype), e.name && r.append("name", e.name), e.links && e.links.length > 0 && r.append("links", JSON.stringify(e.links)), e.in_reply_to && r.append("in_reply_to", e.in_reply_to), r.append("send_email", "1"), r.append("now", "True"), e.attachments && e.attachments.length > 0) {
      const s = `[${e.attachments.map((i) => `"${i}"`).join(",")}]`;
      r.append("attachments", s);
    }
    return n.post(t, r);
  },
  getTemplates: async () => {
    const e = JSON.stringify([["name", "!=", "Lead Sharing Template"]]), t = `/api/method/crm_integration.crm_integration.api.email.get_email_templates?filters=${encodeURIComponent(e)}`;
    return n.get(t);
  },
  uploadFile: async (e) => {
    const t = "/api/method/upload_file", r = new FormData();
    return r.append("file", e), n.post(t, r);
  },
  updateCommunication: async (e, t) => {
    const s = `/api/resource/Communication/${encodeURIComponent(String(e))}`, i = new FormData();
    return i.append("status", t), n.put(s, i);
  }
});
function To({
  baseURL: n = "/",
  currentUserFullName: e,
  defaultToEmails: t,
  referenceName: r,
  referenceDoctype: s,
  activeLeadName: i,
  activeLeadDoctype: o = "CRM Lead",
  links: a,
  replyData: c,
  onEmailSent: u,
  showNotification: f,
  showWarning: m,
  showError: d,
  token: y
}) {
  const p = $r(() => Eb(n, y), [n, y]), v = $r(() => xb(p), [p]), w = $r(
    () => ({
      currentUserFullName: e,
      defaultToEmails: t,
      referenceName: r,
      doctype: i ? o : s || "Contact",
      activeLeadName: i,
      activeLeadDoctype: o,
      links: a,
      replyData: c ?? null
    }),
    [e, t, r, s, i, o, a, c]
  ), A = $r(
    () => ({
      sendEmail: async (R) => {
        var q;
        try {
          const _ = (await v.sendEmail(R)).data;
          if (_ != null && _._server_messages)
            try {
              const K = JSON.parse(_._server_messages);
              if (Array.isArray(K) && K.length > 0) {
                const re = JSON.parse(K[0]);
                if (re.message)
                  return d == null || d(re.title || "Error", re.message), {};
              }
            } catch {
              if (_ != null && _.exception)
                return d == null || d("Error", _.exception), {};
            }
          else if (_ != null && _.exception)
            return d == null || d("Error", _.exception), {};
          const z = ((q = _ == null ? void 0 : _.data) == null ? void 0 : q.message) || (_ == null ? void 0 : _.message) || _;
          return { name: z == null ? void 0 : z.name };
        } catch {
          throw new Error("Failed to send email");
        }
      },
      uploadFile: async (R) => {
        var z;
        const M = (await v.uploadFile(R)).data, _ = ((z = M == null ? void 0 : M.data) == null ? void 0 : z.message) || (M == null ? void 0 : M.message) || M;
        return {
          name: _ == null ? void 0 : _.name,
          file_name: _ == null ? void 0 : _.file_name,
          file_url: _ == null ? void 0 : _.file_url
        };
      },
      getTemplates: async () => {
        var M;
        return (((M = (await v.getTemplates()).data) == null ? void 0 : M.message) || []).map((_) => ({
          id: _.name,
          name: _.subject || _.name,
          body: _.response || _.response_html || ""
        }));
      },
      updateCommunicationStatus: async (R, q) => {
        await v.updateCommunication(R, q);
      },
      showNotification: (R, q) => f == null ? void 0 : f(R, q),
      showWarning: (R, q) => m == null ? void 0 : m(R, q),
      showError: (R, q) => d == null ? void 0 : d(R, q),
      onEmailSent: u
    }),
    [v, u, f, m, d]
  );
  return { config: w, apiAdapter: A };
}
function Nb(n) {
  if (!n || typeof n != "string") return "";
  if (typeof document > "u") return n;
  const e = document.createElement("div");
  return e.innerHTML = n, ["style", "script", "link", "iframe"].forEach((r) => {
    e.querySelectorAll(r).forEach((i) => i.remove());
  }), e.innerHTML;
}
const Sc = ({
  apiAdapter: n,
  config: e,
  baseURL: t,
  currentUserFullName: r = "",
  defaultToEmails: s = [],
  referenceName: i = null,
  activeLeadName: o = null,
  activeLeadDoctype: a = "CRM Lead",
  links: c = [],
  replyData: u = null,
  token: f,
  onClose: m,
  onSend: d,
  onEmailSent: y,
  RichTextEditor: p,
  showNotification: v,
  showWarning: w,
  showError: A
}) => {
  var Rt;
  const { config: R, apiAdapter: q } = To({
    baseURL: t,
    currentUserFullName: r,
    defaultToEmails: s,
    referenceName: i,
    activeLeadName: o,
    activeLeadDoctype: a,
    links: c,
    replyData: u,
    onEmailSent: y,
    showNotification: v,
    showWarning: w,
    showError: A,
    token: f
  }), M = n || q, _ = e || R, {
    // State
    subject: z,
    setSubject: K,
    toRecipients: re,
    ccRecipients: le,
    bccRecipients: me,
    showCC: g,
    setShowCC: L,
    showBCC: E,
    setShowBCC: B,
    emailBody: k,
    setEmailBody: T,
    toInput: P,
    setToInput: U,
    ccInput: F,
    setCcInput: D,
    bccInput: x,
    setBccInput: j,
    attachments: H,
    isTemplateModalOpen: V,
    setIsTemplateModalOpen: I,
    fileUploadRef: ce,
    isPending: ee,
    emailTemplates: Q,
    isLoadingTemplates: te,
    replyData: J,
    // Handlers
    handleRecipientInputKeyDown: ie,
    handleRecipientInputBlur: X,
    removeRecipient: ae,
    handleFileSelect: de,
    removeAttachment: ye,
    handleAttachClick: bt,
    handleSend: Ve,
    handleTemplateSelect: ot
  } = Fg({ apiAdapter: M, config: _, onClose: m, onSend: d });
  return /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer", children: [
    /* @__PURE__ */ O.jsx("div", { className: "ecw-email-composer-header", children: /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-from", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ecw-email-composer-label", children: "From:" }),
      /* @__PURE__ */ O.jsx("div", { className: "ecw-email-composer-avatar", children: /* @__PURE__ */ O.jsx(zc, { size: 16, color: "#175353" }) }),
      /* @__PURE__ */ O.jsx("span", { className: "ecw-email-composer-sender-name", children: ((Rt = _.currentUserFullName) == null ? void 0 : Rt.trim()) || "User" })
    ] }) }),
    /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-field", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ecw-email-composer-label", children: "Subject:" }),
      /* @__PURE__ */ O.jsx(
        "input",
        {
          type: "text",
          value: z,
          onChange: (se) => K(se.target.value),
          placeholder: "Enter subject",
          className: "ecw-email-composer-subject-input"
        }
      )
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-field", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ecw-email-composer-label", children: "To:" }),
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-recipients-container", children: [
        /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-recipients", children: [
          re.map((se) => /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-tag", children: [
            /* @__PURE__ */ O.jsx("span", { children: se.email }),
            /* @__PURE__ */ O.jsx("button", { type: "button", className: "ecw-email-composer-tag-remove", onClick: () => ae(se.id, "to"), children: /* @__PURE__ */ O.jsx(Qn, { size: 14 }) })
          ] }, se.id)),
          /* @__PURE__ */ O.jsx(
            "input",
            {
              type: "email",
              value: P,
              onChange: (se) => U(se.target.value),
              onKeyDown: (se) => ie(se, "to"),
              onBlur: () => X("to"),
              placeholder: re.length === 0 ? "Enter email address" : "",
              className: "ecw-email-composer-recipient-input"
            }
          )
        ] }),
        /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-actions", children: [
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "ecw-email-composer-cc-bcc-btn", onClick: () => L(!g), children: "CC" }),
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "ecw-email-composer-cc-bcc-btn", onClick: () => B(!E), children: "BCC" })
        ] })
      ] })
    ] }),
    g && /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-field", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ecw-email-composer-label", children: "CC:" }),
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-recipients", children: [
        le.map((se) => /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-tag", children: [
          /* @__PURE__ */ O.jsx("span", { children: se.email }),
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "ecw-email-composer-tag-remove", onClick: () => ae(se.id, "cc"), children: /* @__PURE__ */ O.jsx(Qn, { size: 14 }) })
        ] }, se.id)),
        /* @__PURE__ */ O.jsx(
          "input",
          {
            type: "email",
            value: F,
            onChange: (se) => D(se.target.value),
            onKeyDown: (se) => ie(se, "cc"),
            onBlur: () => X("cc"),
            placeholder: le.length === 0 ? "Enter email address" : "",
            className: "ecw-email-composer-recipient-input"
          }
        )
      ] })
    ] }),
    E && /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-field", children: [
      /* @__PURE__ */ O.jsx("span", { className: "ecw-email-composer-label", children: "BCC:" }),
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-recipients", children: [
        me.map((se) => /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-tag", children: [
          /* @__PURE__ */ O.jsx("span", { children: se.email }),
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "ecw-email-composer-tag-remove", onClick: () => ae(se.id, "bcc"), children: /* @__PURE__ */ O.jsx(Qn, { size: 14 }) })
        ] }, se.id)),
        /* @__PURE__ */ O.jsx(
          "input",
          {
            type: "email",
            value: x,
            onChange: (se) => j(se.target.value),
            onKeyDown: (se) => ie(se, "bcc"),
            onBlur: () => X("bcc"),
            placeholder: me.length === 0 ? "Enter email address" : "",
            className: "ecw-email-composer-recipient-input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-body", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-editor-wrapper", children: [
        p ? /* @__PURE__ */ O.jsx(
          p,
          {
            value: k,
            onChange: T,
            placeholder: "Compose your email...",
            className: "ecw-email-composer-rich-text-editor"
          }
        ) : /* @__PURE__ */ O.jsx(
          Mg,
          {
            value: k,
            onChange: T,
            placeholder: "Compose your email...",
            className: "ecw-email-composer-rich-text-editor",
            height: "200px"
          }
        ),
        (J == null ? void 0 : J.content) && /* @__PURE__ */ O.jsxs("div", { className: "ecw-trail-email-preview", children: [
          /* @__PURE__ */ O.jsx("hr", { className: "ecw-trail-divider" }),
          /* @__PURE__ */ O.jsxs("div", { className: "ecw-trail-meta", children: [
            /* @__PURE__ */ O.jsx("b", { children: "From:" }),
            " ",
            J.senderName || J.to || "User",
            /* @__PURE__ */ O.jsx("br", {}),
            /* @__PURE__ */ O.jsx("b", { children: "Sent:" }),
            " ",
            J.date && J.time ? `${J.date} at ${J.time}` : "the previous message",
            /* @__PURE__ */ O.jsx("br", {}),
            /* @__PURE__ */ O.jsx("b", { children: "Subject:" }),
            " ",
            J.subject || ""
          ] }),
          /* @__PURE__ */ O.jsx("div", { dangerouslySetInnerHTML: { __html: Nb(J.content) } })
        ] })
      ] }),
      H.length > 0 && /* @__PURE__ */ O.jsx("div", { className: "ecw-email-composer-attachments", children: H.map((se) => {
        var Ge;
        return /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-attachment-tag", children: [
          /* @__PURE__ */ O.jsxs("span", { children: [
            se.fileName || se.name || ((Ge = se.file) == null ? void 0 : Ge.name),
            se.isUploading && " (Uploading...)",
            se.uploadError && ` (Error: ${se.uploadError})`,
            (se.fileName || se.name) && !se.isUploading && !se.uploadError && " ✓"
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", className: "ecw-email-composer-tag-remove", onClick: () => ye(se.id), children: /* @__PURE__ */ O.jsx(Qn, { size: 14 }) })
        ] }, se.id);
      }) }),
      /* @__PURE__ */ O.jsx(Yl, { ref: ce, onSelect: de, multiple: !0, accept: "*/*" })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-footer", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-footer-left", children: [
        /* @__PURE__ */ O.jsx("button", { type: "button", onClick: bt, title: "Attach file", className: "ecw-email-composer-icon-btn", children: /* @__PURE__ */ O.jsx(Kc, { size: 20, color: "#175353" }) }),
        /* @__PURE__ */ O.jsx(
          "button",
          {
            type: "button",
            onClick: () => I(!0),
            title: "Select template",
            className: "ecw-email-composer-icon-btn",
            children: /* @__PURE__ */ O.jsx(Vc, { size: 20, color: "#175353" })
          }
        )
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "ecw-email-composer-footer-right", children: [
        /* @__PURE__ */ O.jsx("button", { type: "button", onClick: m, className: "ecw-email-composer-btn ecw-email-composer-btn-secondary", disabled: ee, children: "Cancel" }),
        /* @__PURE__ */ O.jsx("button", { type: "button", onClick: Ve, className: "ecw-email-composer-btn ecw-email-composer-btn-primary", disabled: ee, children: ee ? "Sending..." : "Send" })
      ] })
    ] }),
    /* @__PURE__ */ O.jsx(
      Qi,
      {
        open: V,
        onClose: () => I(!1),
        width: "700px",
        height: "500px",
        header: /* @__PURE__ */ O.jsx("h4", { style: { margin: 0, fontSize: "16px", fontWeight: 600, color: "#175353" }, children: "Select Email Template" }),
        children: /* @__PURE__ */ O.jsx(Zc, { templates: Q, onSelect: ot, isLoading: te })
      }
    )
  ] });
}, Yb = ({
  apiAdapter: n,
  config: e,
  baseURL: t,
  currentUserFullName: r = "",
  defaultToEmails: s = [],
  referenceName: i = null,
  activeLeadName: o = null,
  activeLeadDoctype: a = "CRM Lead",
  links: c = [],
  replyData: u = null,
  token: f,
  isOpen: m,
  onClose: d,
  onSend: y,
  onEmailSent: p,
  showNotification: v,
  showWarning: w,
  showError: A,
  RichTextEditor: R,
  modalSize: q = "800px",
  header: M = /* @__PURE__ */ O.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "Email Composer" })
}) => {
  const { config: _, apiAdapter: z } = To({
    baseURL: t,
    currentUserFullName: r,
    defaultToEmails: s,
    referenceName: i,
    activeLeadName: o,
    activeLeadDoctype: a,
    links: c,
    replyData: u,
    onEmailSent: p,
    showNotification: v,
    showWarning: w,
    showError: A,
    token: f
  }), K = n || z, re = e || _;
  return /* @__PURE__ */ O.jsx(
    Qi,
    {
      open: m,
      onClose: d,
      width: q,
      header: M,
      children: /* @__PURE__ */ O.jsx(
        Sc,
        {
          apiAdapter: K,
          config: re,
          RichTextEditor: R,
          onClose: d,
          onSend: y
        }
      )
    }
  );
}, Xb = ({
  apiAdapter: n,
  config: e,
  baseURL: t,
  currentUserFullName: r = "",
  defaultToEmails: s = [],
  referenceName: i = null,
  referenceDoctype: o,
  activeLeadName: a = null,
  activeLeadDoctype: c = "CRM Lead",
  links: u = [],
  replyData: f = null,
  RichTextEditor: m,
  buttonLabel: d = "Email",
  className: y = "",
  modalSize: p = "800px",
  isOpen: v,
  onOpen: w,
  onClose: A,
  onEmailSent: R,
  showNotification: q,
  showWarning: M,
  showError: _,
  token: z
}) => {
  const [K, re] = Oe(!1), { config: le, apiAdapter: me } = To({
    baseURL: t,
    currentUserFullName: r,
    defaultToEmails: s,
    referenceName: i,
    referenceDoctype: o,
    activeLeadName: a,
    activeLeadDoctype: c,
    links: u,
    replyData: f,
    onEmailSent: R,
    showNotification: q,
    showWarning: M,
    showError: _,
    token: z
  }), g = n || me, L = e || le, E = v !== void 0, B = E ? v : K, k = () => {
    w ? w() : E || re(!0);
  }, T = () => {
    A ? A() : E || re(!1);
  };
  return /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    /* @__PURE__ */ O.jsxs("div", { className: `ecw-trigger-button ${y}`, onClick: k, children: [
      /* @__PURE__ */ O.jsx("div", { className: "ecw-trigger-icon-wrapper", children: /* @__PURE__ */ O.jsx(Gc, { size: 20, color: "#175353" }) }),
      /* @__PURE__ */ O.jsx("span", { className: "ecw-trigger-label", children: d })
    ] }),
    /* @__PURE__ */ O.jsx(
      Qi,
      {
        open: B,
        onClose: T,
        width: p,
        header: /* @__PURE__ */ O.jsx("h3", { style: { margin: 0, fontSize: "1.1rem" }, children: "Email Composer" }),
        children: /* @__PURE__ */ O.jsx(Sc, { apiAdapter: g, config: L, RichTextEditor: m, onClose: T })
      }
    )
  ] });
}, _c = jc(void 0), Qb = ({
  apiAdapter: n,
  config: e,
  RichTextEditor: t,
  children: r
}) => /* @__PURE__ */ O.jsx(_c.Provider, { value: { apiAdapter: n, config: e, RichTextEditor: t }, children: r }), e0 = () => {
  const n = kc(_c);
  if (!n) throw new Error("Missing EmailComposerProvider");
  return n;
};
export {
  Sc as EmailComposer,
  Yb as EmailComposerModal,
  Qb as EmailComposerProvider,
  Xb as EmailComposerTrigger,
  Zc as EmailTemplateSelector,
  $g as useEmailAttachments,
  e0 as useEmailComposerContext,
  Fg as useEmailComposerLogic,
  Ug as useEmailRecipients
};
