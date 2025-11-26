function Wy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Cl =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function rr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function zr(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Uy = { exports: {} },
  cu = {},
  Hy = { exports: {} },
  Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qs = Symbol.for("react.element"),
  pC = Symbol.for("react.portal"),
  hC = Symbol.for("react.fragment"),
  mC = Symbol.for("react.strict_mode"),
  gC = Symbol.for("react.profiler"),
  vC = Symbol.for("react.provider"),
  yC = Symbol.for("react.context"),
  xC = Symbol.for("react.forward_ref"),
  bC = Symbol.for("react.suspense"),
  wC = Symbol.for("react.memo"),
  SC = Symbol.for("react.lazy"),
  eg = Symbol.iterator;
function CC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eg && e[eg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gy = Object.assign,
  Ky = {};
function ca(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ky),
    (this.updater = n || Vy);
}
ca.prototype.isReactComponent = {};
ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yy() {}
Yy.prototype = ca.prototype;
function Vp(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ky),
    (this.updater = n || Vy);
}
var Gp = (Vp.prototype = new Yy());
Gp.constructor = Vp;
Gy(Gp, ca.prototype);
Gp.isPureReactComponent = !0;
var tg = Array.isArray,
  qy = Object.prototype.hasOwnProperty,
  Kp = { current: null },
  Qy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xy(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qy.call(t, r) && !Qy.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Qs,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Kp.current,
  };
}
function $C(e, t) {
  return {
    $$typeof: Qs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qs;
}
function _C(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ng = /\/+/g;
function bd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _C("" + e.key)
    : t.toString(36);
}
function tc(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Qs:
          case pC:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + bd(a, 0) : r),
      tg(o)
        ? ((n = ""),
          e != null && (n = e.replace(ng, "$&/") + "/"),
          tc(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Yp(o) &&
            (o = $C(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ng, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), tg(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + bd(i, s);
      a += tc(i, t, n, l, o);
    }
  else if (((l = CC(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + bd(i, s++)), (a += tc(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function $l(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    tc(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function PC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Vt = { current: null },
  nc = { transition: null },
  EC = {
    ReactCurrentDispatcher: Vt,
    ReactCurrentBatchConfig: nc,
    ReactCurrentOwner: Kp,
  };
Ce.Children = {
  map: $l,
  forEach: function (e, t, n) {
    $l(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $l(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $l(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ce.Component = ca;
Ce.Fragment = hC;
Ce.Profiler = gC;
Ce.PureComponent = Vp;
Ce.StrictMode = mC;
Ce.Suspense = bC;
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EC;
Ce.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gy({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Kp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      qy.call(t, l) &&
        !Qy.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Qs, type: e.type, key: o, ref: i, props: r, _owner: a };
};
Ce.createContext = function (e) {
  return (
    (e = {
      $$typeof: yC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: vC, _context: e }),
    (e.Consumer = e)
  );
};
Ce.createElement = Xy;
Ce.createFactory = function (e) {
  var t = Xy.bind(null, e);
  return (t.type = e), t;
};
Ce.createRef = function () {
  return { current: null };
};
Ce.forwardRef = function (e) {
  return { $$typeof: xC, render: e };
};
Ce.isValidElement = Yp;
Ce.lazy = function (e) {
  return { $$typeof: SC, _payload: { _status: -1, _result: e }, _init: PC };
};
Ce.memo = function (e, t) {
  return { $$typeof: wC, type: e, compare: t === void 0 ? null : t };
};
Ce.startTransition = function (e) {
  var t = nc.transition;
  nc.transition = {};
  try {
    e();
  } finally {
    nc.transition = t;
  }
};
Ce.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Ce.useCallback = function (e, t) {
  return Vt.current.useCallback(e, t);
};
Ce.useContext = function (e) {
  return Vt.current.useContext(e);
};
Ce.useDebugValue = function () {};
Ce.useDeferredValue = function (e) {
  return Vt.current.useDeferredValue(e);
};
Ce.useEffect = function (e, t) {
  return Vt.current.useEffect(e, t);
};
Ce.useId = function () {
  return Vt.current.useId();
};
Ce.useImperativeHandle = function (e, t, n) {
  return Vt.current.useImperativeHandle(e, t, n);
};
Ce.useInsertionEffect = function (e, t) {
  return Vt.current.useInsertionEffect(e, t);
};
Ce.useLayoutEffect = function (e, t) {
  return Vt.current.useLayoutEffect(e, t);
};
Ce.useMemo = function (e, t) {
  return Vt.current.useMemo(e, t);
};
Ce.useReducer = function (e, t, n) {
  return Vt.current.useReducer(e, t, n);
};
Ce.useRef = function (e) {
  return Vt.current.useRef(e);
};
Ce.useState = function (e) {
  return Vt.current.useState(e);
};
Ce.useSyncExternalStore = function (e, t, n) {
  return Vt.current.useSyncExternalStore(e, t, n);
};
Ce.useTransition = function () {
  return Vt.current.useTransition();
};
Ce.version = "18.2.0";
Hy.exports = Ce;
var $ = Hy.exports;
const Xn = rr($),
  bc = Wy({ __proto__: null, default: Xn }, [$]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kC = $,
  RC = Symbol.for("react.element"),
  TC = Symbol.for("react.fragment"),
  OC = Object.prototype.hasOwnProperty,
  MC = kC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  IC = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jy(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) OC.call(t, r) && !IC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: RC,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: MC.current,
  };
}
cu.Fragment = TC;
cu.jsx = Jy;
cu.jsxs = Jy;
Uy.exports = cu;
var S = Uy.exports,
  Sf = {},
  Zy = { exports: {} },
  hn = {},
  e1 = { exports: {} },
  t1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var B = E.length;
    E.push(L);
    e: for (; 0 < B; ) {
      var U = (B - 1) >>> 1,
        K = E[U];
      if (0 < o(K, L)) (E[U] = L), (E[B] = K), (B = U);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      B = E.pop();
    if (B !== L) {
      E[0] = B;
      e: for (var U = 0, K = E.length, ce = K >>> 1; U < ce; ) {
        var Z = 2 * (U + 1) - 1,
          Y = E[Z],
          J = Z + 1,
          fe = E[J];
        if (0 > o(Y, B))
          J < K && 0 > o(fe, Y)
            ? ((E[U] = fe), (E[J] = B), (U = J))
            : ((E[U] = Y), (E[Z] = B), (U = Z));
        else if (J < K && 0 > o(fe, B)) (E[U] = fe), (E[J] = B), (U = J);
        else break e;
      }
    }
    return L;
  }
  function o(E, L) {
    var B = E.sortIndex - L.sortIndex;
    return B !== 0 ? B : E.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    b = !1,
    g = !1,
    x = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(E) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= E)
        r(c), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(c);
    }
  }
  function _(E) {
    if (((x = !1), v(E), !g))
      if (n(l) !== null) (g = !0), A(N);
      else {
        var L = n(c);
        L !== null && j(_, L.startTime - E);
      }
  }
  function N(E, L) {
    (g = !1), x && ((x = !1), m(h), (h = -1)), (b = !0);
    var B = f;
    try {
      for (
        v(L), d = n(l);
        d !== null && (!(d.expirationTime > L) || (E && !T()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var K = U(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof K == "function" ? (d.callback = K) : d === n(l) && r(l),
            v(L);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var ce = !0;
      else {
        var Z = n(c);
        Z !== null && j(_, Z.startTime - L), (ce = !1);
      }
      return ce;
    } finally {
      (d = null), (f = B), (b = !1);
    }
  }
  var C = !1,
    R = null,
    h = -1,
    y = 5,
    w = -1;
  function T() {
    return !(e.unstable_now() - w < y);
  }
  function k() {
    if (R !== null) {
      var E = e.unstable_now();
      w = E;
      var L = !0;
      try {
        L = R(!0, E);
      } finally {
        L ? M() : ((C = !1), (R = null));
      }
    } else C = !1;
  }
  var M;
  if (typeof p == "function")
    M = function () {
      p(k);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      O = D.port2;
    (D.port1.onmessage = k),
      (M = function () {
        O.postMessage(null);
      });
  } else
    M = function () {
      P(k, 0);
    };
  function A(E) {
    (R = E), C || ((C = !0), M());
  }
  function j(E, L) {
    h = P(function () {
      E(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || b || ((g = !0), A(N));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (y = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var B = f;
      f = L;
      try {
        return E();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var B = f;
      f = E;
      try {
        return L();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, B) {
      var U = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? U + B : U))
          : (B = U),
        E)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = B + K),
        (E = {
          id: u++,
          callback: L,
          priorityLevel: E,
          startTime: B,
          expirationTime: K,
          sortIndex: -1,
        }),
        B > U
          ? ((E.sortIndex = B),
            t(c, E),
            n(l) === null &&
              E === n(c) &&
              (x ? (m(h), (h = -1)) : (x = !0), j(_, B - U)))
          : ((E.sortIndex = K), t(l, E), g || b || ((g = !0), A(N))),
        E
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (E) {
      var L = f;
      return function () {
        var B = f;
        f = L;
        try {
          return E.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(t1);
e1.exports = t1;
var AC = e1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n1 = $,
  fn = AC;
function H(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var r1 = new Set(),
  ws = {};
function ni(e, t) {
  Gi(e, t), Gi(e + "Capture", t);
}
function Gi(e, t) {
  for (ws[e] = t, e = 0; e < t.length; e++) r1.add(t[e]);
}
var Ir = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Cf = Object.prototype.hasOwnProperty,
  NC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rg = {},
  og = {};
function jC(e) {
  return Cf.call(og, e)
    ? !0
    : Cf.call(rg, e)
      ? !1
      : NC.test(e)
        ? (og[e] = !0)
        : ((rg[e] = !0), !1);
}
function DC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function LC(e, t, n, r) {
  if (t === null || typeof t > "u" || DC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Gt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ot[e] = new Gt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ot[t] = new Gt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ot[e] = new Gt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ot[e] = new Gt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ot[e] = new Gt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ot[e] = new Gt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ot[e] = new Gt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ot[e] = new Gt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ot[e] = new Gt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qp = /[\-:]([a-z])/g;
function Qp(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qp, Qp);
    Ot[t] = new Gt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qp, Qp);
    Ot[t] = new Gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qp, Qp);
  Ot[t] = new Gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ot[e] = new Gt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ot.xlinkHref = new Gt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ot[e] = new Gt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xp(e, t, n, r) {
  var o = Ot.hasOwnProperty(t) ? Ot[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (LC(t, n, o, r) && (n = null),
    r || o === null
      ? jC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Br = n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _l = Symbol.for("react.element"),
  wi = Symbol.for("react.portal"),
  Si = Symbol.for("react.fragment"),
  Jp = Symbol.for("react.strict_mode"),
  $f = Symbol.for("react.profiler"),
  o1 = Symbol.for("react.provider"),
  i1 = Symbol.for("react.context"),
  Zp = Symbol.for("react.forward_ref"),
  _f = Symbol.for("react.suspense"),
  Pf = Symbol.for("react.suspense_list"),
  eh = Symbol.for("react.memo"),
  Xr = Symbol.for("react.lazy"),
  a1 = Symbol.for("react.offscreen"),
  ig = Symbol.iterator;
function Ea(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ig && e[ig]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Je = Object.assign,
  wd;
function Za(e) {
  if (wd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wd = (t && t[1]) || "";
    }
  return (
    `
` +
    wd +
    e
  );
}
var Sd = !1;
function Cd(e, t) {
  if (!e || Sd) return "";
  Sd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Sd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Za(e) : "";
}
function FC(e) {
  switch (e.tag) {
    case 5:
      return Za(e.type);
    case 16:
      return Za("Lazy");
    case 13:
      return Za("Suspense");
    case 19:
      return Za("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cd(e.type, !1)), e;
    case 11:
      return (e = Cd(e.type.render, !1)), e;
    case 1:
      return (e = Cd(e.type, !0)), e;
    default:
      return "";
  }
}
function Ef(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Si:
      return "Fragment";
    case wi:
      return "Portal";
    case $f:
      return "Profiler";
    case Jp:
      return "StrictMode";
    case _f:
      return "Suspense";
    case Pf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case i1:
        return (e.displayName || "Context") + ".Consumer";
      case o1:
        return (e._context.displayName || "Context") + ".Provider";
      case Zp:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case eh:
        return (
          (t = e.displayName || null), t !== null ? t : Ef(e.type) || "Memo"
        );
      case Xr:
        (t = e._payload), (e = e._init);
        try {
          return Ef(e(t));
        } catch {}
    }
  return null;
}
function zC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ef(t);
    case 8:
      return t === Jp ? "StrictMode" : "Mode";
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
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ho(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function s1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function BC(e) {
  var t = s1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pl(e) {
  e._valueTracker || (e._valueTracker = BC(e));
}
function l1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = s1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kf(e, t) {
  var n = t.checked;
  return Je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ag(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ho(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function c1(e, t) {
  (t = t.checked), t != null && Xp(e, "checked", t, !1);
}
function Rf(e, t) {
  c1(e, t);
  var n = ho(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Tf(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Tf(e, t.type, ho(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function sg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Tf(e, t, n) {
  (t !== "number" || wc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var es = Array.isArray;
function Di(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ho(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Of(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return Je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(H(92));
      if (es(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ho(n) };
}
function u1(e, t) {
  var n = ho(t.value),
    r = ho(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function cg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function d1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Mf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? d1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var El,
  f1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        El = El || document.createElement("div"),
          El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = El.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ss(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var is = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  WC = ["Webkit", "ms", "Moz", "O"];
Object.keys(is).forEach(function (e) {
  WC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (is[t] = is[e]);
  });
});
function p1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (is.hasOwnProperty(e) && is[e])
      ? ("" + t).trim()
      : t + "px";
}
function h1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = p1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var UC = Je(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function If(e, t) {
  if (t) {
    if (UC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function Af(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Nf = null;
function th(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jf = null,
  Li = null,
  Fi = null;
function ug(e) {
  if ((e = Zs(e))) {
    if (typeof jf != "function") throw Error(H(280));
    var t = e.stateNode;
    t && ((t = hu(t)), jf(e.stateNode, e.type, t));
  }
}
function m1(e) {
  Li ? (Fi ? Fi.push(e) : (Fi = [e])) : (Li = e);
}
function g1() {
  if (Li) {
    var e = Li,
      t = Fi;
    if (((Fi = Li = null), ug(e), t)) for (e = 0; e < t.length; e++) ug(t[e]);
  }
}
function v1(e, t) {
  return e(t);
}
function y1() {}
var $d = !1;
function x1(e, t, n) {
  if ($d) return e(t, n);
  $d = !0;
  try {
    return v1(e, t, n);
  } finally {
    ($d = !1), (Li !== null || Fi !== null) && (y1(), g1());
  }
}
function Cs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hu(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var Df = !1;
if (Ir)
  try {
    var ka = {};
    Object.defineProperty(ka, "passive", {
      get: function () {
        Df = !0;
      },
    }),
      window.addEventListener("test", ka, ka),
      window.removeEventListener("test", ka, ka);
  } catch {
    Df = !1;
  }
function HC(e, t, n, r, o, i, a, s, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var as = !1,
  Sc = null,
  Cc = !1,
  Lf = null,
  VC = {
    onError: function (e) {
      (as = !0), (Sc = e);
    },
  };
function GC(e, t, n, r, o, i, a, s, l) {
  (as = !1), (Sc = null), HC.apply(VC, arguments);
}
function KC(e, t, n, r, o, i, a, s, l) {
  if ((GC.apply(this, arguments), as)) {
    if (as) {
      var c = Sc;
      (as = !1), (Sc = null);
    } else throw Error(H(198));
    Cc || ((Cc = !0), (Lf = c));
  }
}
function ri(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function b1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function dg(e) {
  if (ri(e) !== e) throw Error(H(188));
}
function YC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ri(e)), t === null)) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return dg(o), e;
        if (i === r) return dg(o), t;
        i = i.sibling;
      }
      throw Error(H(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(H(189));
      }
    }
    if (n.alternate !== r) throw Error(H(190));
  }
  if (n.tag !== 3) throw Error(H(188));
  return n.stateNode.current === n ? e : t;
}
function w1(e) {
  return (e = YC(e)), e !== null ? S1(e) : null;
}
function S1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = S1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var C1 = fn.unstable_scheduleCallback,
  fg = fn.unstable_cancelCallback,
  qC = fn.unstable_shouldYield,
  QC = fn.unstable_requestPaint,
  ut = fn.unstable_now,
  XC = fn.unstable_getCurrentPriorityLevel,
  nh = fn.unstable_ImmediatePriority,
  $1 = fn.unstable_UserBlockingPriority,
  $c = fn.unstable_NormalPriority,
  JC = fn.unstable_LowPriority,
  _1 = fn.unstable_IdlePriority,
  uu = null,
  fr = null;
function ZC(e) {
  if (fr && typeof fr.onCommitFiberRoot == "function")
    try {
      fr.onCommitFiberRoot(uu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Jn = Math.clz32 ? Math.clz32 : n$,
  e$ = Math.log,
  t$ = Math.LN2;
function n$(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((e$(e) / t$) | 0)) | 0;
}
var kl = 64,
  Rl = 4194304;
function ts(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _c(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = ts(s)) : ((i &= a), i !== 0 && (r = ts(i)));
  } else (a = n & ~o), a !== 0 ? (r = ts(a)) : i !== 0 && (r = ts(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Jn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function r$(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function o$(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Jn(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = r$(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Ff(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function P1() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function _d(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Jn(t)),
    (e[t] = n);
}
function i$(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Jn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function rh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Jn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var je = 0;
function E1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var k1,
  oh,
  R1,
  T1,
  O1,
  zf = !1,
  Tl = [],
  io = null,
  ao = null,
  so = null,
  $s = new Map(),
  _s = new Map(),
  Zr = [],
  a$ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      io = null;
      break;
    case "dragenter":
    case "dragleave":
      ao = null;
      break;
    case "mouseover":
    case "mouseout":
      so = null;
      break;
    case "pointerover":
    case "pointerout":
      $s.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function Ra(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Zs(t)), t !== null && oh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function s$(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (io = Ra(io, e, t, n, r, o)), !0;
    case "dragenter":
      return (ao = Ra(ao, e, t, n, r, o)), !0;
    case "mouseover":
      return (so = Ra(so, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return $s.set(i, Ra($s.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), _s.set(i, Ra(_s.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function M1(e) {
  var t = No(e.target);
  if (t !== null) {
    var n = ri(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = b1(n)), t !== null)) {
          (e.blockedOn = t),
            O1(e.priority, function () {
              R1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function rc(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Nf = r), n.target.dispatchEvent(r), (Nf = null);
    } else return (t = Zs(n)), t !== null && oh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function hg(e, t, n) {
  rc(e) && n.delete(t);
}
function l$() {
  (zf = !1),
    io !== null && rc(io) && (io = null),
    ao !== null && rc(ao) && (ao = null),
    so !== null && rc(so) && (so = null),
    $s.forEach(hg),
    _s.forEach(hg);
}
function Ta(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zf ||
      ((zf = !0),
      fn.unstable_scheduleCallback(fn.unstable_NormalPriority, l$)));
}
function Ps(e) {
  function t(o) {
    return Ta(o, e);
  }
  if (0 < Tl.length) {
    Ta(Tl[0], e);
    for (var n = 1; n < Tl.length; n++) {
      var r = Tl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    io !== null && Ta(io, e),
      ao !== null && Ta(ao, e),
      so !== null && Ta(so, e),
      $s.forEach(t),
      _s.forEach(t),
      n = 0;
    n < Zr.length;
    n++
  )
    (r = Zr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zr.length && ((n = Zr[0]), n.blockedOn === null); )
    M1(n), n.blockedOn === null && Zr.shift();
}
var zi = Br.ReactCurrentBatchConfig,
  Pc = !0;
function c$(e, t, n, r) {
  var o = je,
    i = zi.transition;
  zi.transition = null;
  try {
    (je = 1), ih(e, t, n, r);
  } finally {
    (je = o), (zi.transition = i);
  }
}
function u$(e, t, n, r) {
  var o = je,
    i = zi.transition;
  zi.transition = null;
  try {
    (je = 4), ih(e, t, n, r);
  } finally {
    (je = o), (zi.transition = i);
  }
}
function ih(e, t, n, r) {
  if (Pc) {
    var o = Bf(e, t, n, r);
    if (o === null) Nd(e, t, r, Ec, n), pg(e, r);
    else if (s$(o, e, t, n, r)) r.stopPropagation();
    else if ((pg(e, r), t & 4 && -1 < a$.indexOf(e))) {
      for (; o !== null; ) {
        var i = Zs(o);
        if (
          (i !== null && k1(i),
          (i = Bf(e, t, n, r)),
          i === null && Nd(e, t, r, Ec, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Nd(e, t, r, null, n);
  }
}
var Ec = null;
function Bf(e, t, n, r) {
  if (((Ec = null), (e = th(r)), (e = No(e)), e !== null))
    if (((t = ri(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = b1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ec = e), null;
}
function I1(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (XC()) {
        case nh:
          return 1;
        case $1:
          return 4;
        case $c:
        case JC:
          return 16;
        case _1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var to = null,
  ah = null,
  oc = null;
function A1() {
  if (oc) return oc;
  var e,
    t = ah,
    n = t.length,
    r,
    o = "value" in to ? to.value : to.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (oc = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ic(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ol() {
  return !0;
}
function mg() {
  return !1;
}
function mn(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ol
        : mg),
      (this.isPropagationStopped = mg),
      this
    );
  }
  return (
    Je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ol));
      },
      persist: function () {},
      isPersistent: Ol,
    }),
    t
  );
}
var ua = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sh = mn(ua),
  Js = Je({}, ua, { view: 0, detail: 0 }),
  d$ = mn(Js),
  Pd,
  Ed,
  Oa,
  du = Je({}, Js, {
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
    getModifierState: lh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Oa &&
            (Oa && e.type === "mousemove"
              ? ((Pd = e.screenX - Oa.screenX), (Ed = e.screenY - Oa.screenY))
              : (Ed = Pd = 0),
            (Oa = e)),
          Pd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ed;
    },
  }),
  gg = mn(du),
  f$ = Je({}, du, { dataTransfer: 0 }),
  p$ = mn(f$),
  h$ = Je({}, Js, { relatedTarget: 0 }),
  kd = mn(h$),
  m$ = Je({}, ua, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g$ = mn(m$),
  v$ = Je({}, ua, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  y$ = mn(v$),
  x$ = Je({}, ua, { data: 0 }),
  vg = mn(x$),
  b$ = {
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
    MozPrintableKey: "Unidentified",
  },
  w$ = {
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
    224: "Meta",
  },
  S$ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function C$(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = S$[e]) ? !!t[e] : !1;
}
function lh() {
  return C$;
}
var $$ = Je({}, Js, {
    key: function (e) {
      if (e.key) {
        var t = b$[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ic(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? w$[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lh,
    charCode: function (e) {
      return e.type === "keypress" ? ic(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ic(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  _$ = mn($$),
  P$ = Je({}, du, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  yg = mn(P$),
  E$ = Je({}, Js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lh,
  }),
  k$ = mn(E$),
  R$ = Je({}, ua, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  T$ = mn(R$),
  O$ = Je({}, du, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  M$ = mn(O$),
  I$ = [9, 13, 27, 32],
  ch = Ir && "CompositionEvent" in window,
  ss = null;
Ir && "documentMode" in document && (ss = document.documentMode);
var A$ = Ir && "TextEvent" in window && !ss,
  N1 = Ir && (!ch || (ss && 8 < ss && 11 >= ss)),
  xg = " ",
  bg = !1;
function j1(e, t) {
  switch (e) {
    case "keyup":
      return I$.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function D1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ci = !1;
function N$(e, t) {
  switch (e) {
    case "compositionend":
      return D1(t);
    case "keypress":
      return t.which !== 32 ? null : ((bg = !0), xg);
    case "textInput":
      return (e = t.data), e === xg && bg ? null : e;
    default:
      return null;
  }
}
function j$(e, t) {
  if (Ci)
    return e === "compositionend" || (!ch && j1(e, t))
      ? ((e = A1()), (oc = ah = to = null), (Ci = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return N1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var D$ = {
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
  week: !0,
};
function wg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!D$[e.type] : t === "textarea";
}
function L1(e, t, n, r) {
  m1(r),
    (t = kc(t, "onChange")),
    0 < t.length &&
      ((n = new sh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ls = null,
  Es = null;
function L$(e) {
  q1(e, 0);
}
function fu(e) {
  var t = Pi(e);
  if (l1(t)) return e;
}
function F$(e, t) {
  if (e === "change") return t;
}
var F1 = !1;
if (Ir) {
  var Rd;
  if (Ir) {
    var Td = "oninput" in document;
    if (!Td) {
      var Sg = document.createElement("div");
      Sg.setAttribute("oninput", "return;"),
        (Td = typeof Sg.oninput == "function");
    }
    Rd = Td;
  } else Rd = !1;
  F1 = Rd && (!document.documentMode || 9 < document.documentMode);
}
function Cg() {
  ls && (ls.detachEvent("onpropertychange", z1), (Es = ls = null));
}
function z1(e) {
  if (e.propertyName === "value" && fu(Es)) {
    var t = [];
    L1(t, Es, e, th(e)), x1(L$, t);
  }
}
function z$(e, t, n) {
  e === "focusin"
    ? (Cg(), (ls = t), (Es = n), ls.attachEvent("onpropertychange", z1))
    : e === "focusout" && Cg();
}
function B$(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fu(Es);
}
function W$(e, t) {
  if (e === "click") return fu(t);
}
function U$(e, t) {
  if (e === "input" || e === "change") return fu(t);
}
function H$(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tr = typeof Object.is == "function" ? Object.is : H$;
function ks(e, t) {
  if (tr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Cf.call(t, o) || !tr(e[o], t[o])) return !1;
  }
  return !0;
}
function $g(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _g(e, t) {
  var n = $g(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $g(n);
  }
}
function B1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? B1(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function W1() {
  for (var e = window, t = wc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wc(e.document);
  }
  return t;
}
function uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function V$(e) {
  var t = W1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    B1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && uh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = _g(n, i));
        var a = _g(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var G$ = Ir && "documentMode" in document && 11 >= document.documentMode,
  $i = null,
  Wf = null,
  cs = null,
  Uf = !1;
function Pg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Uf ||
    $i == null ||
    $i !== wc(r) ||
    ((r = $i),
    "selectionStart" in r && uh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (cs && ks(cs, r)) ||
      ((cs = r),
      (r = kc(Wf, "onSelect")),
      0 < r.length &&
        ((t = new sh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $i))));
}
function Ml(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _i = {
    animationend: Ml("Animation", "AnimationEnd"),
    animationiteration: Ml("Animation", "AnimationIteration"),
    animationstart: Ml("Animation", "AnimationStart"),
    transitionend: Ml("Transition", "TransitionEnd"),
  },
  Od = {},
  U1 = {};
Ir &&
  ((U1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _i.animationend.animation,
    delete _i.animationiteration.animation,
    delete _i.animationstart.animation),
  "TransitionEvent" in window || delete _i.transitionend.transition);
function pu(e) {
  if (Od[e]) return Od[e];
  if (!_i[e]) return e;
  var t = _i[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in U1) return (Od[e] = t[n]);
  return e;
}
var H1 = pu("animationend"),
  V1 = pu("animationiteration"),
  G1 = pu("animationstart"),
  K1 = pu("transitionend"),
  Y1 = new Map(),
  Eg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vo(e, t) {
  Y1.set(e, t), ni(t, [e]);
}
for (var Md = 0; Md < Eg.length; Md++) {
  var Id = Eg[Md],
    K$ = Id.toLowerCase(),
    Y$ = Id[0].toUpperCase() + Id.slice(1);
  vo(K$, "on" + Y$);
}
vo(H1, "onAnimationEnd");
vo(V1, "onAnimationIteration");
vo(G1, "onAnimationStart");
vo("dblclick", "onDoubleClick");
vo("focusin", "onFocus");
vo("focusout", "onBlur");
vo(K1, "onTransitionEnd");
Gi("onMouseEnter", ["mouseout", "mouseover"]);
Gi("onMouseLeave", ["mouseout", "mouseover"]);
Gi("onPointerEnter", ["pointerout", "pointerover"]);
Gi("onPointerLeave", ["pointerout", "pointerover"]);
ni(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ni(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ni("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ni(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ni(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ni(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ns =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  q$ = new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));
function kg(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), KC(r, t, void 0, e), (e.currentTarget = null);
}
function q1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          kg(o, s, c), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          kg(o, s, c), (i = l);
        }
    }
  }
  if (Cc) throw ((e = Lf), (Cc = !1), (Lf = null), e);
}
function Ue(e, t) {
  var n = t[Yf];
  n === void 0 && (n = t[Yf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Q1(t, e, 2, !1), n.add(r));
}
function Ad(e, t, n) {
  var r = 0;
  t && (r |= 4), Q1(n, e, r, t);
}
var Il = "_reactListening" + Math.random().toString(36).slice(2);
function Rs(e) {
  if (!e[Il]) {
    (e[Il] = !0),
      r1.forEach(function (n) {
        n !== "selectionchange" && (q$.has(n) || Ad(n, !1, e), Ad(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Il] || ((t[Il] = !0), Ad("selectionchange", !1, t));
  }
}
function Q1(e, t, n, r) {
  switch (I1(t)) {
    case 1:
      var o = c$;
      break;
    case 4:
      o = u$;
      break;
    default:
      o = ih;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Df ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Nd(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = No(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  x1(function () {
    var c = i,
      u = th(n),
      d = [];
    e: {
      var f = Y1.get(e);
      if (f !== void 0) {
        var b = sh,
          g = e;
        switch (e) {
          case "keypress":
            if (ic(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = _$;
            break;
          case "focusin":
            (g = "focus"), (b = kd);
            break;
          case "focusout":
            (g = "blur"), (b = kd);
            break;
          case "beforeblur":
          case "afterblur":
            b = kd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = gg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = p$;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = k$;
            break;
          case H1:
          case V1:
          case G1:
            b = g$;
            break;
          case K1:
            b = T$;
            break;
          case "scroll":
            b = d$;
            break;
          case "wheel":
            b = M$;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = y$;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = yg;
        }
        var x = (t & 4) !== 0,
          P = !x && e === "scroll",
          m = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var p = c, v; p !== null; ) {
          v = p;
          var _ = v.stateNode;
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              m !== null && ((_ = Cs(p, m)), _ != null && x.push(Ts(p, _, v)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((f = new b(f, g, null, n, u)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Nf &&
            (g = n.relatedTarget || n.fromElement) &&
            (No(g) || g[Ar]))
        )
          break e;
        if (
          (b || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          b
            ? ((g = n.relatedTarget || n.toElement),
              (b = c),
              (g = g ? No(g) : null),
              g !== null &&
                ((P = ri(g)), g !== P || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((b = null), (g = c)),
          b !== g)
        ) {
          if (
            ((x = gg),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = yg),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (P = b == null ? f : Pi(b)),
            (v = g == null ? f : Pi(g)),
            (f = new x(_, p + "leave", b, n, u)),
            (f.target = P),
            (f.relatedTarget = v),
            (_ = null),
            No(u) === c &&
              ((x = new x(m, p + "enter", g, n, u)),
              (x.target = v),
              (x.relatedTarget = P),
              (_ = x)),
            (P = _),
            b && g)
          )
            t: {
              for (x = b, m = g, p = 0, v = x; v; v = ci(v)) p++;
              for (v = 0, _ = m; _; _ = ci(_)) v++;
              for (; 0 < p - v; ) (x = ci(x)), p--;
              for (; 0 < v - p; ) (m = ci(m)), v--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = ci(x)), (m = ci(m));
              }
              x = null;
            }
          else x = null;
          b !== null && Rg(d, f, b, x, !1),
            g !== null && P !== null && Rg(d, P, g, x, !0);
        }
      }
      e: {
        if (
          ((f = c ? Pi(c) : window),
          (b = f.nodeName && f.nodeName.toLowerCase()),
          b === "select" || (b === "input" && f.type === "file"))
        )
          var N = F$;
        else if (wg(f))
          if (F1) N = U$;
          else {
            N = B$;
            var C = z$;
          }
        else
          (b = f.nodeName) &&
            b.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (N = W$);
        if (N && (N = N(e, c))) {
          L1(d, N, n, u);
          break e;
        }
        C && C(e, f, c),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            Tf(f, "number", f.value);
      }
      switch (((C = c ? Pi(c) : window), e)) {
        case "focusin":
          (wg(C) || C.contentEditable === "true") &&
            (($i = C), (Wf = c), (cs = null));
          break;
        case "focusout":
          cs = Wf = $i = null;
          break;
        case "mousedown":
          Uf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Uf = !1), Pg(d, n, u);
          break;
        case "selectionchange":
          if (G$) break;
        case "keydown":
        case "keyup":
          Pg(d, n, u);
      }
      var R;
      if (ch)
        e: {
          switch (e) {
            case "compositionstart":
              var h = "onCompositionStart";
              break e;
            case "compositionend":
              h = "onCompositionEnd";
              break e;
            case "compositionupdate":
              h = "onCompositionUpdate";
              break e;
          }
          h = void 0;
        }
      else
        Ci
          ? j1(e, n) && (h = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (h = "onCompositionStart");
      h &&
        (N1 &&
          n.locale !== "ko" &&
          (Ci || h !== "onCompositionStart"
            ? h === "onCompositionEnd" && Ci && (R = A1())
            : ((to = u),
              (ah = "value" in to ? to.value : to.textContent),
              (Ci = !0))),
        (C = kc(c, h)),
        0 < C.length &&
          ((h = new vg(h, e, null, n, u)),
          d.push({ event: h, listeners: C }),
          R ? (h.data = R) : ((R = D1(n)), R !== null && (h.data = R)))),
        (R = A$ ? N$(e, n) : j$(e, n)) &&
          ((c = kc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new vg("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = R)));
    }
    q1(d, t);
  });
}
function Ts(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function kc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Cs(e, n)),
      i != null && r.unshift(Ts(e, i, o)),
      (i = Cs(e, t)),
      i != null && r.push(Ts(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ci(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Rg(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      c = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((l = Cs(n, i)), l != null && a.unshift(Ts(n, l, s)))
        : o || ((l = Cs(n, i)), l != null && a.push(Ts(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Q$ = /\r\n?/g,
  X$ = /\u0000|\uFFFD/g;
function Tg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Q$,
      `
`
    )
    .replace(X$, "");
}
function Al(e, t, n) {
  if (((t = Tg(t)), Tg(e) !== t && n)) throw Error(H(425));
}
function Rc() {}
var Hf = null,
  Vf = null;
function Gf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Kf = typeof setTimeout == "function" ? setTimeout : void 0,
  J$ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Og = typeof Promise == "function" ? Promise : void 0,
  Z$ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Og < "u"
        ? function (e) {
            return Og.resolve(null).then(e).catch(e_);
          }
        : Kf;
function e_(e) {
  setTimeout(function () {
    throw e;
  });
}
function jd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ps(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ps(t);
}
function lo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Mg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var da = Math.random().toString(36).slice(2),
  dr = "__reactFiber$" + da,
  Os = "__reactProps$" + da,
  Ar = "__reactContainer$" + da,
  Yf = "__reactEvents$" + da,
  t_ = "__reactListeners$" + da,
  n_ = "__reactHandles$" + da;
function No(e) {
  var t = e[dr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ar] || n[dr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mg(e); e !== null; ) {
          if ((n = e[dr])) return n;
          e = Mg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zs(e) {
  return (
    (e = e[dr] || e[Ar]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function hu(e) {
  return e[Os] || null;
}
var qf = [],
  Ei = -1;
function yo(e) {
  return { current: e };
}
function Ve(e) {
  0 > Ei || ((e.current = qf[Ei]), (qf[Ei] = null), Ei--);
}
function We(e, t) {
  Ei++, (qf[Ei] = e.current), (e.current = t);
}
var mo = {},
  Dt = yo(mo),
  Xt = yo(!1),
  Go = mo;
function Ki(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Jt(e) {
  return (e = e.childContextTypes), e != null;
}
function Tc() {
  Ve(Xt), Ve(Dt);
}
function Ig(e, t, n) {
  if (Dt.current !== mo) throw Error(H(168));
  We(Dt, t), We(Xt, n);
}
function X1(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, zC(e) || "Unknown", o));
  return Je({}, n, r);
}
function Oc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mo),
    (Go = Dt.current),
    We(Dt, e),
    We(Xt, Xt.current),
    !0
  );
}
function Ag(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n
    ? ((e = X1(e, t, Go)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ve(Xt),
      Ve(Dt),
      We(Dt, e))
    : Ve(Xt),
    We(Xt, n);
}
var _r = null,
  mu = !1,
  Dd = !1;
function J1(e) {
  _r === null ? (_r = [e]) : _r.push(e);
}
function r_(e) {
  (mu = !0), J1(e);
}
function xo() {
  if (!Dd && _r !== null) {
    Dd = !0;
    var e = 0,
      t = je;
    try {
      var n = _r;
      for (je = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_r = null), (mu = !1);
    } catch (o) {
      throw (_r !== null && (_r = _r.slice(e + 1)), C1(nh, xo), o);
    } finally {
      (je = t), (Dd = !1);
    }
  }
  return null;
}
var ki = [],
  Ri = 0,
  Mc = null,
  Ic = 0,
  _n = [],
  Pn = 0,
  Ko = null,
  Er = 1,
  kr = "";
function ko(e, t) {
  (ki[Ri++] = Ic), (ki[Ri++] = Mc), (Mc = e), (Ic = t);
}
function Z1(e, t, n) {
  (_n[Pn++] = Er), (_n[Pn++] = kr), (_n[Pn++] = Ko), (Ko = e);
  var r = Er;
  e = kr;
  var o = 32 - Jn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Jn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Er = (1 << (32 - Jn(t) + o)) | (n << o) | r),
      (kr = i + e);
  } else (Er = (1 << i) | (n << o) | r), (kr = e);
}
function dh(e) {
  e.return !== null && (ko(e, 1), Z1(e, 1, 0));
}
function fh(e) {
  for (; e === Mc; )
    (Mc = ki[--Ri]), (ki[Ri] = null), (Ic = ki[--Ri]), (ki[Ri] = null);
  for (; e === Ko; )
    (Ko = _n[--Pn]),
      (_n[Pn] = null),
      (kr = _n[--Pn]),
      (_n[Pn] = null),
      (Er = _n[--Pn]),
      (_n[Pn] = null);
}
var un = null,
  cn = null,
  Ke = !1,
  Qn = null;
function ex(e, t) {
  var n = Rn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ng(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (un = e), (cn = lo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (un = e), (cn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ko !== null ? { id: Er, overflow: kr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (un = e),
            (cn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xf(e) {
  if (Ke) {
    var t = cn;
    if (t) {
      var n = t;
      if (!Ng(e, t)) {
        if (Qf(e)) throw Error(H(418));
        t = lo(n.nextSibling);
        var r = un;
        t && Ng(e, t)
          ? ex(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (un = e));
      }
    } else {
      if (Qf(e)) throw Error(H(418));
      (e.flags = (e.flags & -4097) | 2), (Ke = !1), (un = e);
    }
  }
}
function jg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  un = e;
}
function Nl(e) {
  if (e !== un) return !1;
  if (!Ke) return jg(e), (Ke = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gf(e.type, e.memoizedProps))),
    t && (t = cn))
  ) {
    if (Qf(e)) throw (tx(), Error(H(418)));
    for (; t; ) ex(e, t), (t = lo(t.nextSibling));
  }
  if ((jg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = lo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = un ? lo(e.stateNode.nextSibling) : null;
  return !0;
}
function tx() {
  for (var e = cn; e; ) e = lo(e.nextSibling);
}
function Yi() {
  (cn = un = null), (Ke = !1);
}
function ph(e) {
  Qn === null ? (Qn = [e]) : Qn.push(e);
}
var o_ = Br.ReactCurrentBatchConfig;
function Kn(e, t) {
  if (e && e.defaultProps) {
    (t = Je({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ac = yo(null),
  Nc = null,
  Ti = null,
  hh = null;
function mh() {
  hh = Ti = Nc = null;
}
function gh(e) {
  var t = Ac.current;
  Ve(Ac), (e._currentValue = t);
}
function Jf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bi(e, t) {
  (Nc = e),
    (hh = Ti = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qt = !0), (e.firstContext = null));
}
function Nn(e) {
  var t = e._currentValue;
  if (hh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ti === null)) {
      if (Nc === null) throw Error(H(308));
      (Ti = e), (Nc.dependencies = { lanes: 0, firstContext: e });
    } else Ti = Ti.next = e;
  return t;
}
var jo = null;
function vh(e) {
  jo === null ? (jo = [e]) : jo.push(e);
}
function nx(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), vh(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Nr(e, r)
  );
}
function Nr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jr = !1;
function yh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function co(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Nr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), vh(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Nr(e, n)
  );
}
function ac(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rh(e, n);
  }
}
function Dg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function jc(e, t, n, r) {
  var o = e.updateQueue;
  Jr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      c = l.next;
    (l.next = null), a === null ? (i = c) : (a.next = c), (a = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (s = u.lastBaseUpdate),
      s !== a &&
        (s === null ? (u.firstBaseUpdate = c) : (s.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (u = c = l = null), (s = i);
    do {
      var f = s.lane,
        b = s.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: b,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var g = e,
            x = s;
          switch (((f = t), (b = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == "function")) {
                d = g.call(b, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (f = typeof g == "function" ? g.call(b, d, f) : g),
                f == null)
              )
                break e;
              d = Je({}, d, f);
              break e;
            case 2:
              Jr = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (b = {
          eventTime: b,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          u === null ? ((c = u = b), (l = d)) : (u = u.next = b),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (qo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function Lg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(H(191, o));
        o.call(r);
      }
    }
}
var ox = new n1.Component().refs;
function Zf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ri(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ut(),
      o = fo(e),
      i = Tr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = co(e, i, o)),
      t !== null && (Zn(t, e, o, r), ac(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ut(),
      o = fo(e),
      i = Tr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = co(e, i, o)),
      t !== null && (Zn(t, e, o, r), ac(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ut(),
      r = fo(e),
      o = Tr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = co(e, o, r)),
      t !== null && (Zn(t, e, r, n), ac(t, e, r));
  },
};
function Fg(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ks(n, r) || !ks(o, i)
        : !0
  );
}
function ix(e, t, n) {
  var r = !1,
    o = mo,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Nn(i))
      : ((o = Jt(t) ? Go : Dt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ki(e, o) : mo)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function zg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gu.enqueueReplaceState(t, t.state, null);
}
function ep(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ox), yh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Nn(i))
    : ((i = Jt(t) ? Go : Dt.current), (o.context = Ki(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && gu.enqueueReplaceState(o, o.state, null),
      jc(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ma(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(H(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(H(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === ox && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(H(284));
    if (!n._owner) throw Error(H(290, e));
  }
  return e;
}
function jl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      H(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bg(e) {
  var t = e._init;
  return t(e._payload);
}
function ax(e) {
  function t(m, p) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function o(m, p) {
    return (m = po(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, p, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, p, v, _) {
    return p === null || p.tag !== 6
      ? ((p = Hd(v, m.mode, _)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function l(m, p, v, _) {
    var N = v.type;
    return N === Si
      ? u(m, p, v.props.children, _, v.key)
      : p !== null &&
          (p.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === Xr &&
              Bg(N) === p.type))
        ? ((_ = o(p, v.props)), (_.ref = Ma(m, p, v)), (_.return = m), _)
        : ((_ = fc(v.type, v.key, v.props, null, m.mode, _)),
          (_.ref = Ma(m, p, v)),
          (_.return = m),
          _);
  }
  function c(m, p, v, _) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Vd(v, m.mode, _)), (p.return = m), p)
      : ((p = o(p, v.children || [])), (p.return = m), p);
  }
  function u(m, p, v, _, N) {
    return p === null || p.tag !== 7
      ? ((p = Uo(v, m.mode, _, N)), (p.return = m), p)
      : ((p = o(p, v)), (p.return = m), p);
  }
  function d(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Hd("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case _l:
          return (
            (v = fc(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = Ma(m, null, p)),
            (v.return = m),
            v
          );
        case wi:
          return (p = Vd(p, m.mode, v)), (p.return = m), p;
        case Xr:
          var _ = p._init;
          return d(m, _(p._payload), v);
      }
      if (es(p) || Ea(p))
        return (p = Uo(p, m.mode, v, null)), (p.return = m), p;
      jl(m, p);
    }
    return null;
  }
  function f(m, p, v, _) {
    var N = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return N !== null ? null : s(m, p, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case _l:
          return v.key === N ? l(m, p, v, _) : null;
        case wi:
          return v.key === N ? c(m, p, v, _) : null;
        case Xr:
          return (N = v._init), f(m, p, N(v._payload), _);
      }
      if (es(v) || Ea(v)) return N !== null ? null : u(m, p, v, _, null);
      jl(m, v);
    }
    return null;
  }
  function b(m, p, v, _, N) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(v) || null), s(p, m, "" + _, N);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case _l:
          return (m = m.get(_.key === null ? v : _.key) || null), l(p, m, _, N);
        case wi:
          return (m = m.get(_.key === null ? v : _.key) || null), c(p, m, _, N);
        case Xr:
          var C = _._init;
          return b(m, p, v, C(_._payload), N);
      }
      if (es(_) || Ea(_)) return (m = m.get(v) || null), u(p, m, _, N, null);
      jl(p, _);
    }
    return null;
  }
  function g(m, p, v, _) {
    for (
      var N = null, C = null, R = p, h = (p = 0), y = null;
      R !== null && h < v.length;
      h++
    ) {
      R.index > h ? ((y = R), (R = null)) : (y = R.sibling);
      var w = f(m, R, v[h], _);
      if (w === null) {
        R === null && (R = y);
        break;
      }
      e && R && w.alternate === null && t(m, R),
        (p = i(w, p, h)),
        C === null ? (N = w) : (C.sibling = w),
        (C = w),
        (R = y);
    }
    if (h === v.length) return n(m, R), Ke && ko(m, h), N;
    if (R === null) {
      for (; h < v.length; h++)
        (R = d(m, v[h], _)),
          R !== null &&
            ((p = i(R, p, h)), C === null ? (N = R) : (C.sibling = R), (C = R));
      return Ke && ko(m, h), N;
    }
    for (R = r(m, R); h < v.length; h++)
      (y = b(R, m, h, v[h], _)),
        y !== null &&
          (e && y.alternate !== null && R.delete(y.key === null ? h : y.key),
          (p = i(y, p, h)),
          C === null ? (N = y) : (C.sibling = y),
          (C = y));
    return (
      e &&
        R.forEach(function (T) {
          return t(m, T);
        }),
      Ke && ko(m, h),
      N
    );
  }
  function x(m, p, v, _) {
    var N = Ea(v);
    if (typeof N != "function") throw Error(H(150));
    if (((v = N.call(v)), v == null)) throw Error(H(151));
    for (
      var C = (N = null), R = p, h = (p = 0), y = null, w = v.next();
      R !== null && !w.done;
      h++, w = v.next()
    ) {
      R.index > h ? ((y = R), (R = null)) : (y = R.sibling);
      var T = f(m, R, w.value, _);
      if (T === null) {
        R === null && (R = y);
        break;
      }
      e && R && T.alternate === null && t(m, R),
        (p = i(T, p, h)),
        C === null ? (N = T) : (C.sibling = T),
        (C = T),
        (R = y);
    }
    if (w.done) return n(m, R), Ke && ko(m, h), N;
    if (R === null) {
      for (; !w.done; h++, w = v.next())
        (w = d(m, w.value, _)),
          w !== null &&
            ((p = i(w, p, h)), C === null ? (N = w) : (C.sibling = w), (C = w));
      return Ke && ko(m, h), N;
    }
    for (R = r(m, R); !w.done; h++, w = v.next())
      (w = b(R, m, h, w.value, _)),
        w !== null &&
          (e && w.alternate !== null && R.delete(w.key === null ? h : w.key),
          (p = i(w, p, h)),
          C === null ? (N = w) : (C.sibling = w),
          (C = w));
    return (
      e &&
        R.forEach(function (k) {
          return t(m, k);
        }),
      Ke && ko(m, h),
      N
    );
  }
  function P(m, p, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Si &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case _l:
          e: {
            for (var N = v.key, C = p; C !== null; ) {
              if (C.key === N) {
                if (((N = v.type), N === Si)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = o(C, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Xr &&
                    Bg(N) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = o(C, v.props)),
                    (p.ref = Ma(m, C, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            v.type === Si
              ? ((p = Uo(v.props.children, m.mode, _, v.key)),
                (p.return = m),
                (m = p))
              : ((_ = fc(v.type, v.key, v.props, null, m.mode, _)),
                (_.ref = Ma(m, p, v)),
                (_.return = m),
                (m = _));
          }
          return a(m);
        case wi:
          e: {
            for (C = v.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Vd(v, m.mode, _)), (p.return = m), (m = p);
          }
          return a(m);
        case Xr:
          return (C = v._init), P(m, p, C(v._payload), _);
      }
      if (es(v)) return g(m, p, v, _);
      if (Ea(v)) return x(m, p, v, _);
      jl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = o(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = Hd(v, m.mode, _)), (p.return = m), (m = p)),
        a(m))
      : n(m, p);
  }
  return P;
}
var qi = ax(!0),
  sx = ax(!1),
  el = {},
  pr = yo(el),
  Ms = yo(el),
  Is = yo(el);
function Do(e) {
  if (e === el) throw Error(H(174));
  return e;
}
function xh(e, t) {
  switch ((We(Is, t), We(Ms, e), We(pr, el), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Mf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Mf(t, e));
  }
  Ve(pr), We(pr, t);
}
function Qi() {
  Ve(pr), Ve(Ms), Ve(Is);
}
function lx(e) {
  Do(Is.current);
  var t = Do(pr.current),
    n = Mf(t, e.type);
  t !== n && (We(Ms, e), We(pr, n));
}
function bh(e) {
  Ms.current === e && (Ve(pr), Ve(Ms));
}
var Qe = yo(0);
function Dc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ld = [];
function wh() {
  for (var e = 0; e < Ld.length; e++)
    Ld[e]._workInProgressVersionPrimary = null;
  Ld.length = 0;
}
var sc = Br.ReactCurrentDispatcher,
  Fd = Br.ReactCurrentBatchConfig,
  Yo = 0,
  Xe = null,
  xt = null,
  $t = null,
  Lc = !1,
  us = !1,
  As = 0,
  i_ = 0;
function Mt() {
  throw Error(H(321));
}
function Sh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tr(e[n], t[n])) return !1;
  return !0;
}
function Ch(e, t, n, r, o, i) {
  if (
    ((Yo = i),
    (Xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (sc.current = e === null || e.memoizedState === null ? c_ : u_),
    (e = n(r, o)),
    us)
  ) {
    i = 0;
    do {
      if (((us = !1), (As = 0), 25 <= i)) throw Error(H(301));
      (i += 1),
        ($t = xt = null),
        (t.updateQueue = null),
        (sc.current = d_),
        (e = n(r, o));
    } while (us);
  }
  if (
    ((sc.current = Fc),
    (t = xt !== null && xt.next !== null),
    (Yo = 0),
    ($t = xt = Xe = null),
    (Lc = !1),
    t)
  )
    throw Error(H(300));
  return e;
}
function $h() {
  var e = As !== 0;
  return (As = 0), e;
}
function sr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return $t === null ? (Xe.memoizedState = $t = e) : ($t = $t.next = e), $t;
}
function jn() {
  if (xt === null) {
    var e = Xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xt.next;
  var t = $t === null ? Xe.memoizedState : $t.next;
  if (t !== null) ($t = t), (xt = e);
  else {
    if (e === null) throw Error(H(310));
    (xt = e),
      (e = {
        memoizedState: xt.memoizedState,
        baseState: xt.baseState,
        baseQueue: xt.baseQueue,
        queue: xt.queue,
        next: null,
      }),
      $t === null ? (Xe.memoizedState = $t = e) : ($t = $t.next = e);
  }
  return $t;
}
function Ns(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zd(e) {
  var t = jn(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = xt,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      c = i;
    do {
      var u = c.lane;
      if ((Yo & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (Xe.lanes |= u),
          (qo |= u);
      }
      c = c.next;
    } while (c !== null && c !== i);
    l === null ? (a = r) : (l.next = s),
      tr(r, t.memoizedState) || (Qt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Xe.lanes |= i), (qo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bd(e) {
  var t = jn(),
    n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    tr(i, t.memoizedState) || (Qt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function cx() {}
function ux(e, t) {
  var n = Xe,
    r = jn(),
    o = t(),
    i = !tr(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Qt = !0)),
    (r = r.queue),
    _h(px.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ($t !== null && $t.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      js(9, fx.bind(null, n, r, o, t), void 0, null),
      _t === null)
    )
      throw Error(H(349));
    Yo & 30 || dx(n, t, o);
  }
  return o;
}
function dx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hx(t) && mx(e);
}
function px(e, t, n) {
  return n(function () {
    hx(t) && mx(e);
  });
}
function hx(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tr(e, n);
  } catch {
    return !0;
  }
}
function mx(e) {
  var t = Nr(e, 1);
  t !== null && Zn(t, e, 1, -1);
}
function Wg(e) {
  var t = sr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ns,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = l_.bind(null, Xe, e)),
    [t.memoizedState, e]
  );
}
function js(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gx() {
  return jn().memoizedState;
}
function lc(e, t, n, r) {
  var o = sr();
  (Xe.flags |= e),
    (o.memoizedState = js(1 | t, n, void 0, r === void 0 ? null : r));
}
function vu(e, t, n, r) {
  var o = jn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xt !== null) {
    var a = xt.memoizedState;
    if (((i = a.destroy), r !== null && Sh(r, a.deps))) {
      o.memoizedState = js(t, n, i, r);
      return;
    }
  }
  (Xe.flags |= e), (o.memoizedState = js(1 | t, n, i, r));
}
function Ug(e, t) {
  return lc(8390656, 8, e, t);
}
function _h(e, t) {
  return vu(2048, 8, e, t);
}
function vx(e, t) {
  return vu(4, 2, e, t);
}
function yx(e, t) {
  return vu(4, 4, e, t);
}
function xx(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), vu(4, 4, xx.bind(null, t, e), n)
  );
}
function Ph() {}
function wx(e, t) {
  var n = jn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sx(e, t) {
  var n = jn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cx(e, t, n) {
  return Yo & 21
    ? (tr(n, t) || ((n = P1()), (Xe.lanes |= n), (qo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qt = !0)), (e.memoizedState = n));
}
function a_(e, t) {
  var n = je;
  (je = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fd.transition;
  Fd.transition = {};
  try {
    e(!1), t();
  } finally {
    (je = n), (Fd.transition = r);
  }
}
function $x() {
  return jn().memoizedState;
}
function s_(e, t, n) {
  var r = fo(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _x(e))
  )
    Px(t, n);
  else if (((n = nx(e, t, n, r)), n !== null)) {
    var o = Ut();
    Zn(n, e, r, o), Ex(n, t, r);
  }
}
function l_(e, t, n) {
  var r = fo(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_x(e)) Px(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), tr(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), vh(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = nx(e, t, o, r)),
      n !== null && ((o = Ut()), Zn(n, e, r, o), Ex(n, t, r));
  }
}
function _x(e) {
  var t = e.alternate;
  return e === Xe || (t !== null && t === Xe);
}
function Px(e, t) {
  us = Lc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ex(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rh(e, n);
  }
}
var Fc = {
    readContext: Nn,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useInsertionEffect: Mt,
    useLayoutEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useMutableSource: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    unstable_isNewReconciler: !1,
  },
  c_ = {
    readContext: Nn,
    useCallback: function (e, t) {
      return (sr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Nn,
    useEffect: Ug,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        lc(4194308, 4, xx.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return lc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return lc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = sr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = sr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = s_.bind(null, Xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = sr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wg,
    useDebugValue: Ph,
    useDeferredValue: function (e) {
      return (sr().memoizedState = e);
    },
    useTransition: function () {
      var e = Wg(!1),
        t = e[0];
      return (e = a_.bind(null, e[1])), (sr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Xe,
        o = sr();
      if (Ke) {
        if (n === void 0) throw Error(H(407));
        n = n();
      } else {
        if (((n = t()), _t === null)) throw Error(H(349));
        Yo & 30 || dx(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ug(px.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        js(9, fx.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = sr(),
        t = _t.identifierPrefix;
      if (Ke) {
        var n = kr,
          r = Er;
        (n = (r & ~(1 << (32 - Jn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = As++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = i_++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  u_ = {
    readContext: Nn,
    useCallback: wx,
    useContext: Nn,
    useEffect: _h,
    useImperativeHandle: bx,
    useInsertionEffect: vx,
    useLayoutEffect: yx,
    useMemo: Sx,
    useReducer: zd,
    useRef: gx,
    useState: function () {
      return zd(Ns);
    },
    useDebugValue: Ph,
    useDeferredValue: function (e) {
      var t = jn();
      return Cx(t, xt.memoizedState, e);
    },
    useTransition: function () {
      var e = zd(Ns)[0],
        t = jn().memoizedState;
      return [e, t];
    },
    useMutableSource: cx,
    useSyncExternalStore: ux,
    useId: $x,
    unstable_isNewReconciler: !1,
  },
  d_ = {
    readContext: Nn,
    useCallback: wx,
    useContext: Nn,
    useEffect: _h,
    useImperativeHandle: bx,
    useInsertionEffect: vx,
    useLayoutEffect: yx,
    useMemo: Sx,
    useReducer: Bd,
    useRef: gx,
    useState: function () {
      return Bd(Ns);
    },
    useDebugValue: Ph,
    useDeferredValue: function (e) {
      var t = jn();
      return xt === null ? (t.memoizedState = e) : Cx(t, xt.memoizedState, e);
    },
    useTransition: function () {
      var e = Bd(Ns)[0],
        t = jn().memoizedState;
      return [e, t];
    },
    useMutableSource: cx,
    useSyncExternalStore: ux,
    useId: $x,
    unstable_isNewReconciler: !1,
  };
function Xi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += FC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Wd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var f_ = typeof WeakMap == "function" ? WeakMap : Map;
function kx(e, t, n) {
  (n = Tr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Bc || ((Bc = !0), (dp = r)), tp(e, t);
    }),
    n
  );
}
function Rx(e, t, n) {
  (n = Tr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        tp(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        tp(e, t),
          typeof r != "function" &&
            (uo === null ? (uo = new Set([this])) : uo.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Hg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new f_();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = P_.bind(null, e, t, n)), t.then(e, e));
}
function Vg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gg(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tr(-1, 1)), (t.tag = 2), co(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var p_ = Br.ReactCurrentOwner,
  Qt = !1;
function Wt(e, t, n, r) {
  t.child = e === null ? sx(t, null, n, r) : qi(t, e.child, n, r);
}
function Kg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Bi(t, o),
    (r = Ch(e, t, n, r, i, o)),
    (n = $h()),
    e !== null && !Qt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jr(e, t, o))
      : (Ke && n && dh(t), (t.flags |= 1), Wt(e, t, r, o), t.child)
  );
}
function Yg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ah(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Tx(e, t, i, r, o))
      : ((e = fc(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ks), n(a, r) && e.ref === t.ref)
    )
      return jr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = po(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Tx(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ks(i, r) && e.ref === t.ref)
      if (((Qt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Qt = !0);
      else return (t.lanes = e.lanes), jr(e, t, o);
  }
  return np(e, t, n, r, o);
}
function Ox(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        We(Mi, sn),
        (sn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          We(Mi, sn),
          (sn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        We(Mi, sn),
        (sn |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      We(Mi, sn),
      (sn |= r);
  return Wt(e, t, o, n), t.child;
}
function Mx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function np(e, t, n, r, o) {
  var i = Jt(n) ? Go : Dt.current;
  return (
    (i = Ki(t, i)),
    Bi(t, o),
    (n = Ch(e, t, n, r, i, o)),
    (r = $h()),
    e !== null && !Qt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jr(e, t, o))
      : (Ke && r && dh(t), (t.flags |= 1), Wt(e, t, n, o), t.child)
  );
}
function qg(e, t, n, r, o) {
  if (Jt(n)) {
    var i = !0;
    Oc(t);
  } else i = !1;
  if ((Bi(t, o), t.stateNode === null))
    cc(e, t), ix(t, n, r), ep(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Nn(c))
      : ((c = Jt(n) ? Go : Dt.current), (c = Ki(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== c) && zg(t, a, r, c)),
      (Jr = !1);
    var f = t.memoizedState;
    (a.state = f),
      jc(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || Xt.current || Jr
        ? (typeof u == "function" && (Zf(t, n, u, r), (l = t.memoizedState)),
          (s = Jr || Fg(t, n, s, r, f, l, c))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = c),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      rx(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Kn(t.type, s)),
      (a.props = c),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Nn(l))
        : ((l = Jt(n) ? Go : Dt.current), (l = Ki(t, l)));
    var b = n.getDerivedStateFromProps;
    (u =
      typeof b == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && zg(t, a, r, l)),
      (Jr = !1),
      (f = t.memoizedState),
      (a.state = f),
      jc(t, r, a, o);
    var g = t.memoizedState;
    s !== d || f !== g || Xt.current || Jr
      ? (typeof b == "function" && (Zf(t, n, b, r), (g = t.memoizedState)),
        (c = Jr || Fg(t, n, c, r, f, g, l) || !1)
          ? (u ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, g, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, g, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (a.props = r),
        (a.state = g),
        (a.context = l),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return rp(e, t, n, r, i, o);
}
function rp(e, t, n, r, o, i) {
  Mx(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && Ag(t, n, !1), jr(e, t, i);
  (r = t.stateNode), (p_.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = qi(t, e.child, null, i)), (t.child = qi(t, null, s, i)))
      : Wt(e, t, s, i),
    (t.memoizedState = r.state),
    o && Ag(t, n, !0),
    t.child
  );
}
function Ix(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ig(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ig(e, t.context, !1),
    xh(e, t.containerInfo);
}
function Qg(e, t, n, r, o) {
  return Yi(), ph(o), (t.flags |= 256), Wt(e, t, n, r), t.child;
}
var op = { dehydrated: null, treeContext: null, retryLane: 0 };
function ip(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ax(e, t, n) {
  var r = t.pendingProps,
    o = Qe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    We(Qe, o & 1),
    e === null)
  )
    return (
      Xf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = bu(a, r, 0, null)),
              (e = Uo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ip(n)),
              (t.memoizedState = op),
              e)
            : Eh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return h_(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = po(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = po(s, i)) : ((i = Uo(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ip(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = op),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = po(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eh(e, t) {
  return (
    (t = bu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, n, r) {
  return (
    r !== null && ph(r),
    qi(t, e.child, null, n),
    (e = Eh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function h_(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wd(Error(H(422)))), Dl(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = bu({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Uo(i, o, a, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && qi(t, e.child, null, a),
          (t.child.memoizedState = ip(a)),
          (t.memoizedState = op),
          i);
  if (!(t.mode & 1)) return Dl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(H(419))), (r = Wd(i, r, void 0)), Dl(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Qt || s)) {
    if (((r = _t), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Nr(e, o), Zn(r, e, o, -1));
    }
    return Ih(), (r = Wd(Error(H(421)))), Dl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = E_.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (cn = lo(o.nextSibling)),
      (un = t),
      (Ke = !0),
      (Qn = null),
      e !== null &&
        ((_n[Pn++] = Er),
        (_n[Pn++] = kr),
        (_n[Pn++] = Ko),
        (Er = e.id),
        (kr = e.overflow),
        (Ko = t)),
      (t = Eh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xg(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jf(e.return, t, n);
}
function Ud(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Nx(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Wt(e, t, r.children, n), (r = Qe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xg(e, n, t);
        else if (e.tag === 19) Xg(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((We(Qe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Dc(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ud(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Dc(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ud(t, !0, n, null, i);
        break;
      case "together":
        Ud(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function cc(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (qo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (
      e = t.child, n = po(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = po(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function m_(e, t, n) {
  switch (t.tag) {
    case 3:
      Ix(t), Yi();
      break;
    case 5:
      lx(t);
      break;
    case 1:
      Jt(t.type) && Oc(t);
      break;
    case 4:
      xh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      We(Ac, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (We(Qe, Qe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ax(e, t, n)
            : (We(Qe, Qe.current & 1),
              (e = jr(e, t, n)),
              e !== null ? e.sibling : null);
      We(Qe, Qe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Nx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        We(Qe, Qe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ox(e, t, n);
  }
  return jr(e, t, n);
}
var jx, ap, Dx, Lx;
jx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ap = function () {};
Dx = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Do(pr.current);
    var i = null;
    switch (n) {
      case "input":
        (o = kf(e, o)), (r = kf(e, r)), (i = []);
        break;
      case "select":
        (o = Je({}, o, { value: void 0 })),
          (r = Je({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Of(e, o)), (r = Of(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Rc);
    }
    If(n, r);
    var a;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var s = o[c];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ws.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((s = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== s && (l != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(c, l))
            : c === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (i = i || []).push(c, "" + l)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (ws.hasOwnProperty(c)
                  ? (l != null && c === "onScroll" && Ue("scroll", e),
                    i || s === l || (i = []))
                  : (i = i || []).push(c, l));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Lx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ia(e, t) {
  if (!Ke)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function It(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function g_(e, t, n) {
  var r = t.pendingProps;
  switch ((fh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return It(t), null;
    case 1:
      return Jt(t.type) && Tc(), It(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qi(),
        Ve(Xt),
        Ve(Dt),
        wh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Nl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qn !== null && (hp(Qn), (Qn = null)))),
        ap(e, t),
        It(t),
        null
      );
    case 5:
      bh(t);
      var o = Do(Is.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dx(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return It(t), null;
        }
        if (((e = Do(pr.current)), Nl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[dr] = t), (r[Os] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ue("cancel", r), Ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ns.length; o++) Ue(ns[o], r);
              break;
            case "source":
              Ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ue("error", r), Ue("load", r);
              break;
            case "details":
              Ue("toggle", r);
              break;
            case "input":
              ag(r, i), Ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ue("invalid", r);
              break;
            case "textarea":
              lg(r, i), Ue("invalid", r);
          }
          If(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Al(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Al(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : ws.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Ue("scroll", r);
            }
          switch (n) {
            case "input":
              Pl(r), sg(r, i, !0);
              break;
            case "textarea":
              Pl(r), cg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Rc);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = d1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === "select" &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[dr] = t),
            (e[Os] = r),
            jx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Af(n, r)), n)) {
              case "dialog":
                Ue("cancel", e), Ue("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ns.length; o++) Ue(ns[o], e);
                o = r;
                break;
              case "source":
                Ue("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ue("error", e), Ue("load", e), (o = r);
                break;
              case "details":
                Ue("toggle", e), (o = r);
                break;
              case "input":
                ag(e, r), (o = kf(e, r)), Ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Je({}, r, { value: void 0 })),
                  Ue("invalid", e);
                break;
              case "textarea":
                lg(e, r), (o = Of(e, r)), Ue("invalid", e);
                break;
              default:
                o = r;
            }
            If(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? h1(e, l)
                  : i === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && f1(e, l))
                    : i === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Ss(e, l)
                        : typeof l == "number" && Ss(e, "" + l)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (ws.hasOwnProperty(i)
                          ? l != null && i === "onScroll" && Ue("scroll", e)
                          : l != null && Xp(e, i, l, a));
              }
            switch (n) {
              case "input":
                Pl(e), sg(e, r, !1);
                break;
              case "textarea":
                Pl(e), cg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ho(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Di(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Di(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Rc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return It(t), null;
    case 6:
      if (e && t.stateNode != null) Lx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (((n = Do(Is.current)), Do(pr.current), Nl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dr] = t),
            (i = r.nodeValue !== n) && ((e = un), e !== null))
          )
            switch (e.tag) {
              case 3:
                Al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dr] = t),
            (t.stateNode = r);
      }
      return It(t), null;
    case 13:
      if (
        (Ve(Qe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ke && cn !== null && t.mode & 1 && !(t.flags & 128))
          tx(), Yi(), (t.flags |= 98560), (i = !1);
        else if (((i = Nl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(H(317));
            i[dr] = t;
          } else
            Yi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          It(t), (i = !1);
        } else Qn !== null && (hp(Qn), (Qn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Qe.current & 1 ? bt === 0 && (bt = 3) : Ih())),
          t.updateQueue !== null && (t.flags |= 4),
          It(t),
          null);
    case 4:
      return (
        Qi(), ap(e, t), e === null && Rs(t.stateNode.containerInfo), It(t), null
      );
    case 10:
      return gh(t.type._context), It(t), null;
    case 17:
      return Jt(t.type) && Tc(), It(t), null;
    case 19:
      if ((Ve(Qe), (i = t.memoizedState), i === null)) return It(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Ia(i, !1);
        else {
          if (bt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Dc(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ia(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return We(Qe, (Qe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ut() > Ji &&
            ((t.flags |= 128), (r = !0), Ia(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Dc(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ia(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ke)
            )
              return It(t), null;
          } else
            2 * ut() - i.renderingStartTime > Ji &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ia(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ut()),
          (t.sibling = null),
          (n = Qe.current),
          We(Qe, r ? (n & 1) | 2 : n & 1),
          t)
        : (It(t), null);
    case 22:
    case 23:
      return (
        Mh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? sn & 1073741824 && (It(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : It(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function v_(e, t) {
  switch ((fh(t), t.tag)) {
    case 1:
      return (
        Jt(t.type) && Tc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qi(),
        Ve(Xt),
        Ve(Dt),
        wh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bh(t), null;
    case 13:
      if (
        (Ve(Qe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(H(340));
        Yi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ve(Qe), null;
    case 4:
      return Qi(), null;
    case 10:
      return gh(t.type._context), null;
    case 22:
    case 23:
      return Mh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ll = !1,
  Nt = !1,
  y_ = typeof WeakSet == "function" ? WeakSet : Set,
  Q = null;
function Oi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        rt(e, t, r);
      }
    else n.current = null;
}
function sp(e, t, n) {
  try {
    n();
  } catch (r) {
    rt(e, t, r);
  }
}
var Jg = !1;
function x_(e, t) {
  if (((Hf = Pc), (e = W1()), uh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var b;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (b = d.firstChild) !== null;

            )
              (f = d), (d = b);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === o && (s = a),
                f === i && ++u === r && (l = a),
                (b = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = b;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vf = { focusedElem: e, selectionRange: n }, Pc = !1, Q = t; Q !== null; )
    if (((t = Q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Q = e);
    else
      for (; Q !== null; ) {
        t = Q;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    P = g.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Kn(t.type, x),
                      P
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(H(163));
            }
        } catch (_) {
          rt(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Q = e);
          break;
        }
        Q = t.return;
      }
  return (g = Jg), (Jg = !1), g;
}
function ds(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && sp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function yu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lp(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fx(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fx(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dr], delete t[Os], delete t[Yf], delete t[t_], delete t[n_])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zx(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zx(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Rc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cp(e, t, n), e = e.sibling; e !== null; ) cp(e, t, n), (e = e.sibling);
}
function up(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (up(e, t, n), e = e.sibling; e !== null; ) up(e, t, n), (e = e.sibling);
}
var kt = null,
  Yn = !1;
function Kr(e, t, n) {
  for (n = n.child; n !== null; ) Bx(e, t, n), (n = n.sibling);
}
function Bx(e, t, n) {
  if (fr && typeof fr.onCommitFiberUnmount == "function")
    try {
      fr.onCommitFiberUnmount(uu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Nt || Oi(n, t);
    case 6:
      var r = kt,
        o = Yn;
      (kt = null),
        Kr(e, t, n),
        (kt = r),
        (Yn = o),
        kt !== null &&
          (Yn
            ? ((e = kt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : kt.removeChild(n.stateNode));
      break;
    case 18:
      kt !== null &&
        (Yn
          ? ((e = kt),
            (n = n.stateNode),
            e.nodeType === 8
              ? jd(e.parentNode, n)
              : e.nodeType === 1 && jd(e, n),
            Ps(e))
          : jd(kt, n.stateNode));
      break;
    case 4:
      (r = kt),
        (o = Yn),
        (kt = n.stateNode.containerInfo),
        (Yn = !0),
        Kr(e, t, n),
        (kt = r),
        (Yn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Nt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && sp(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Kr(e, t, n);
      break;
    case 1:
      if (
        !Nt &&
        (Oi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          rt(n, t, s);
        }
      Kr(e, t, n);
      break;
    case 21:
      Kr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Nt = (r = Nt) || n.memoizedState !== null), Kr(e, t, n), (Nt = r))
        : Kr(e, t, n);
      break;
    default:
      Kr(e, t, n);
  }
}
function ev(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new y_()),
      t.forEach(function (r) {
        var o = k_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Hn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (kt = s.stateNode), (Yn = !1);
              break e;
            case 3:
              (kt = s.stateNode.containerInfo), (Yn = !0);
              break e;
            case 4:
              (kt = s.stateNode.containerInfo), (Yn = !0);
              break e;
          }
          s = s.return;
        }
        if (kt === null) throw Error(H(160));
        Bx(i, a, o), (kt = null), (Yn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (c) {
        rt(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wx(t, e), (t = t.sibling);
}
function Wx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Hn(t, e), ar(e), r & 4)) {
        try {
          ds(3, e, e.return), yu(3, e);
        } catch (x) {
          rt(e, e.return, x);
        }
        try {
          ds(5, e, e.return);
        } catch (x) {
          rt(e, e.return, x);
        }
      }
      break;
    case 1:
      Hn(t, e), ar(e), r & 512 && n !== null && Oi(n, n.return);
      break;
    case 5:
      if (
        (Hn(t, e),
        ar(e),
        r & 512 && n !== null && Oi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ss(o, "");
        } catch (x) {
          rt(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && c1(o, i),
              Af(s, a);
            var c = Af(s, i);
            for (a = 0; a < l.length; a += 2) {
              var u = l[a],
                d = l[a + 1];
              u === "style"
                ? h1(o, d)
                : u === "dangerouslySetInnerHTML"
                  ? f1(o, d)
                  : u === "children"
                    ? Ss(o, d)
                    : Xp(o, u, d, c);
            }
            switch (s) {
              case "input":
                Rf(o, i);
                break;
              case "textarea":
                u1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var b = i.value;
                b != null
                  ? Di(o, !!i.multiple, b, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Di(o, !!i.multiple, i.defaultValue, !0)
                      : Di(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Os] = i;
          } catch (x) {
            rt(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Hn(t, e), ar(e), r & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          rt(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Hn(t, e), ar(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ps(t.containerInfo);
        } catch (x) {
          rt(e, e.return, x);
        }
      break;
    case 4:
      Hn(t, e), ar(e);
      break;
    case 13:
      Hn(t, e),
        ar(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Th = ut())),
        r & 4 && ev(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Nt = (c = Nt) || u), Hn(t, e), (Nt = c)) : Hn(t, e),
        ar(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (Q = e, u = e.child; u !== null; ) {
            for (d = Q = u; Q !== null; ) {
              switch (((f = Q), (b = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ds(4, f, f.return);
                  break;
                case 1:
                  Oi(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (x) {
                      rt(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Oi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    nv(d);
                    continue;
                  }
              }
              b !== null ? ((b.return = f), (Q = b)) : nv(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (o = d.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = p1("display", a)));
              } catch (x) {
                rt(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (x) {
                rt(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Hn(t, e), ar(e), r & 4 && ev(e);
      break;
    case 21:
      break;
    default:
      Hn(t, e), ar(e);
  }
}
function ar(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zx(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(H(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ss(o, ""), (r.flags &= -33));
          var i = Zg(e);
          up(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Zg(e);
          cp(e, s, a);
          break;
        default:
          throw Error(H(161));
      }
    } catch (l) {
      rt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function b_(e, t, n) {
  (Q = e), Ux(e);
}
function Ux(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var o = Q,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Ll;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Nt;
        s = Ll;
        var c = Nt;
        if (((Ll = a), (Nt = l) && !c))
          for (Q = o; Q !== null; )
            (a = Q),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? rv(o)
                : l !== null
                  ? ((l.return = a), (Q = l))
                  : rv(o);
        for (; i !== null; ) (Q = i), Ux(i), (i = i.sibling);
        (Q = o), (Ll = s), (Nt = c);
      }
      tv(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Q = i)) : tv(e);
  }
}
function tv(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Nt || yu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Nt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Kn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Lg(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Lg(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Ps(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(H(163));
          }
        Nt || (t.flags & 512 && lp(t));
      } catch (f) {
        rt(t, t.return, f);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function nv(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Q = n);
      break;
    }
    Q = t.return;
  }
}
function rv(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yu(4, t);
          } catch (l) {
            rt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              rt(t, o, l);
            }
          }
          var i = t.return;
          try {
            lp(t);
          } catch (l) {
            rt(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            lp(t);
          } catch (l) {
            rt(t, a, l);
          }
      }
    } catch (l) {
      rt(t, t.return, l);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (Q = s);
      break;
    }
    Q = t.return;
  }
}
var w_ = Math.ceil,
  zc = Br.ReactCurrentDispatcher,
  kh = Br.ReactCurrentOwner,
  Mn = Br.ReactCurrentBatchConfig,
  Pe = 0,
  _t = null,
  gt = null,
  Tt = 0,
  sn = 0,
  Mi = yo(0),
  bt = 0,
  Ds = null,
  qo = 0,
  xu = 0,
  Rh = 0,
  fs = null,
  qt = null,
  Th = 0,
  Ji = 1 / 0,
  $r = null,
  Bc = !1,
  dp = null,
  uo = null,
  Fl = !1,
  no = null,
  Wc = 0,
  ps = 0,
  fp = null,
  uc = -1,
  dc = 0;
function Ut() {
  return Pe & 6 ? ut() : uc !== -1 ? uc : (uc = ut());
}
function fo(e) {
  return e.mode & 1
    ? Pe & 2 && Tt !== 0
      ? Tt & -Tt
      : o_.transition !== null
        ? (dc === 0 && (dc = P1()), dc)
        : ((e = je),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : I1(e.type))),
          e)
    : 1;
}
function Zn(e, t, n, r) {
  if (50 < ps) throw ((ps = 0), (fp = null), Error(H(185)));
  Xs(e, n, r),
    (!(Pe & 2) || e !== _t) &&
      (e === _t && (!(Pe & 2) && (xu |= n), bt === 4 && eo(e, Tt)),
      Zt(e, r),
      n === 1 && Pe === 0 && !(t.mode & 1) && ((Ji = ut() + 500), mu && xo()));
}
function Zt(e, t) {
  var n = e.callbackNode;
  o$(e, t);
  var r = _c(e, e === _t ? Tt : 0);
  if (r === 0)
    n !== null && fg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fg(n), t === 1))
      e.tag === 0 ? r_(ov.bind(null, e)) : J1(ov.bind(null, e)),
        Z$(function () {
          !(Pe & 6) && xo();
        }),
        (n = null);
    else {
      switch (E1(r)) {
        case 1:
          n = nh;
          break;
        case 4:
          n = $1;
          break;
        case 16:
          n = $c;
          break;
        case 536870912:
          n = _1;
          break;
        default:
          n = $c;
      }
      n = Xx(n, Hx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hx(e, t) {
  if (((uc = -1), (dc = 0), Pe & 6)) throw Error(H(327));
  var n = e.callbackNode;
  if (Wi() && e.callbackNode !== n) return null;
  var r = _c(e, e === _t ? Tt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Uc(e, r);
  else {
    t = r;
    var o = Pe;
    Pe |= 2;
    var i = Gx();
    (_t !== e || Tt !== t) && (($r = null), (Ji = ut() + 500), Wo(e, t));
    do
      try {
        $_();
        break;
      } catch (s) {
        Vx(e, s);
      }
    while (!0);
    mh(),
      (zc.current = i),
      (Pe = o),
      gt !== null ? (t = 0) : ((_t = null), (Tt = 0), (t = bt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ff(e)), o !== 0 && ((r = o), (t = pp(e, o)))), t === 1)
    )
      throw ((n = Ds), Wo(e, 0), eo(e, r), Zt(e, ut()), n);
    if (t === 6) eo(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !S_(o) &&
          ((t = Uc(e, r)),
          t === 2 && ((i = Ff(e)), i !== 0 && ((r = i), (t = pp(e, i)))),
          t === 1))
      )
        throw ((n = Ds), Wo(e, 0), eo(e, r), Zt(e, ut()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          Ro(e, qt, $r);
          break;
        case 3:
          if (
            (eo(e, r), (r & 130023424) === r && ((t = Th + 500 - ut()), 10 < t))
          ) {
            if (_c(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ut(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Kf(Ro.bind(null, e, qt, $r), t);
            break;
          }
          Ro(e, qt, $r);
          break;
        case 4:
          if ((eo(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Jn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ut() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * w_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Kf(Ro.bind(null, e, qt, $r), r);
            break;
          }
          Ro(e, qt, $r);
          break;
        case 5:
          Ro(e, qt, $r);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return Zt(e, ut()), e.callbackNode === n ? Hx.bind(null, e) : null;
}
function pp(e, t) {
  var n = fs;
  return (
    e.current.memoizedState.isDehydrated && (Wo(e, t).flags |= 256),
    (e = Uc(e, t)),
    e !== 2 && ((t = qt), (qt = n), t !== null && hp(t)),
    e
  );
}
function hp(e) {
  qt === null ? (qt = e) : qt.push.apply(qt, e);
}
function S_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!tr(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function eo(e, t) {
  for (
    t &= ~Rh,
      t &= ~xu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Jn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ov(e) {
  if (Pe & 6) throw Error(H(327));
  Wi();
  var t = _c(e, 0);
  if (!(t & 1)) return Zt(e, ut()), null;
  var n = Uc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ff(e);
    r !== 0 && ((t = r), (n = pp(e, r)));
  }
  if (n === 1) throw ((n = Ds), Wo(e, 0), eo(e, t), Zt(e, ut()), n);
  if (n === 6) throw Error(H(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ro(e, qt, $r),
    Zt(e, ut()),
    null
  );
}
function Oh(e, t) {
  var n = Pe;
  Pe |= 1;
  try {
    return e(t);
  } finally {
    (Pe = n), Pe === 0 && ((Ji = ut() + 500), mu && xo());
  }
}
function Qo(e) {
  no !== null && no.tag === 0 && !(Pe & 6) && Wi();
  var t = Pe;
  Pe |= 1;
  var n = Mn.transition,
    r = je;
  try {
    if (((Mn.transition = null), (je = 1), e)) return e();
  } finally {
    (je = r), (Mn.transition = n), (Pe = t), !(Pe & 6) && xo();
  }
}
function Mh() {
  (sn = Mi.current), Ve(Mi);
}
function Wo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), J$(n)), gt !== null))
    for (n = gt.return; n !== null; ) {
      var r = n;
      switch ((fh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Tc();
          break;
        case 3:
          Qi(), Ve(Xt), Ve(Dt), wh();
          break;
        case 5:
          bh(r);
          break;
        case 4:
          Qi();
          break;
        case 13:
          Ve(Qe);
          break;
        case 19:
          Ve(Qe);
          break;
        case 10:
          gh(r.type._context);
          break;
        case 22:
        case 23:
          Mh();
      }
      n = n.return;
    }
  if (
    ((_t = e),
    (gt = e = po(e.current, null)),
    (Tt = sn = t),
    (bt = 0),
    (Ds = null),
    (Rh = xu = qo = 0),
    (qt = fs = null),
    jo !== null)
  ) {
    for (t = 0; t < jo.length; t++)
      if (((n = jo[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    jo = null;
  }
  return e;
}
function Vx(e, t) {
  do {
    var n = gt;
    try {
      if ((mh(), (sc.current = Fc), Lc)) {
        for (var r = Xe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Lc = !1;
      }
      if (
        ((Yo = 0),
        ($t = xt = Xe = null),
        (us = !1),
        (As = 0),
        (kh.current = null),
        n === null || n.return === null)
      ) {
        (bt = 1), (Ds = t), (gt = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = Tt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = s,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var b = Vg(a);
          if (b !== null) {
            (b.flags &= -257),
              Gg(b, a, s, i, t),
              b.mode & 1 && Hg(i, c, t),
              (t = b),
              (l = c);
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Hg(i, c, t), Ih();
              break e;
            }
            l = Error(H(426));
          }
        } else if (Ke && s.mode & 1) {
          var P = Vg(a);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Gg(P, a, s, i, t),
              ph(Xi(l, s));
            break e;
          }
        }
        (i = l = Xi(l, s)),
          bt !== 4 && (bt = 2),
          fs === null ? (fs = [i]) : fs.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = kx(i, l, t);
              Dg(i, m);
              break e;
            case 1:
              s = l;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (uo === null || !uo.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = Rx(i, s, t);
                Dg(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yx(n);
    } catch (N) {
      (t = N), gt === n && n !== null && (gt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gx() {
  var e = zc.current;
  return (zc.current = Fc), e === null ? Fc : e;
}
function Ih() {
  (bt === 0 || bt === 3 || bt === 2) && (bt = 4),
    _t === null || (!(qo & 268435455) && !(xu & 268435455)) || eo(_t, Tt);
}
function Uc(e, t) {
  var n = Pe;
  Pe |= 2;
  var r = Gx();
  (_t !== e || Tt !== t) && (($r = null), Wo(e, t));
  do
    try {
      C_();
      break;
    } catch (o) {
      Vx(e, o);
    }
  while (!0);
  if ((mh(), (Pe = n), (zc.current = r), gt !== null)) throw Error(H(261));
  return (_t = null), (Tt = 0), bt;
}
function C_() {
  for (; gt !== null; ) Kx(gt);
}
function $_() {
  for (; gt !== null && !qC(); ) Kx(gt);
}
function Kx(e) {
  var t = Qx(e.alternate, e, sn);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yx(e) : (gt = t),
    (kh.current = null);
}
function Yx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = v_(n, t)), n !== null)) {
        (n.flags &= 32767), (gt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (bt = 6), (gt = null);
        return;
      }
    } else if (((n = g_(n, t, sn)), n !== null)) {
      gt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      gt = t;
      return;
    }
    gt = t = e;
  } while (t !== null);
  bt === 0 && (bt = 5);
}
function Ro(e, t, n) {
  var r = je,
    o = Mn.transition;
  try {
    (Mn.transition = null), (je = 1), __(e, t, n, r);
  } finally {
    (Mn.transition = o), (je = r);
  }
  return null;
}
function __(e, t, n, r) {
  do Wi();
  while (no !== null);
  if (Pe & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(H(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (i$(e, i),
    e === _t && ((gt = _t = null), (Tt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fl ||
      ((Fl = !0),
      Xx($c, function () {
        return Wi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Mn.transition), (Mn.transition = null);
    var a = je;
    je = 1;
    var s = Pe;
    (Pe |= 4),
      (kh.current = null),
      x_(e, n),
      Wx(n, e),
      V$(Vf),
      (Pc = !!Hf),
      (Vf = Hf = null),
      (e.current = n),
      b_(n),
      QC(),
      (Pe = s),
      (je = a),
      (Mn.transition = i);
  } else e.current = n;
  if (
    (Fl && ((Fl = !1), (no = e), (Wc = o)),
    (i = e.pendingLanes),
    i === 0 && (uo = null),
    ZC(n.stateNode),
    Zt(e, ut()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Bc) throw ((Bc = !1), (e = dp), (dp = null), e);
  return (
    Wc & 1 && e.tag !== 0 && Wi(),
    (i = e.pendingLanes),
    i & 1 ? (e === fp ? ps++ : ((ps = 0), (fp = e))) : (ps = 0),
    xo(),
    null
  );
}
function Wi() {
  if (no !== null) {
    var e = E1(Wc),
      t = Mn.transition,
      n = je;
    try {
      if (((Mn.transition = null), (je = 16 > e ? 16 : e), no === null))
        var r = !1;
      else {
        if (((e = no), (no = null), (Wc = 0), Pe & 6)) throw Error(H(331));
        var o = Pe;
        for (Pe |= 4, Q = e.current; Q !== null; ) {
          var i = Q,
            a = i.child;
          if (Q.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var c = s[l];
                for (Q = c; Q !== null; ) {
                  var u = Q;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ds(8, u, i);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (Q = d);
                  else
                    for (; Q !== null; ) {
                      u = Q;
                      var f = u.sibling,
                        b = u.return;
                      if ((Fx(u), u === c)) {
                        Q = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = b), (Q = f);
                        break;
                      }
                      Q = b;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var P = x.sibling;
                    (x.sibling = null), (x = P);
                  } while (x !== null);
                }
              }
              Q = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (Q = a);
          else
            e: for (; Q !== null; ) {
              if (((i = Q), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ds(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (Q = m);
                break e;
              }
              Q = i.return;
            }
        }
        var p = e.current;
        for (Q = p; Q !== null; ) {
          a = Q;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (Q = v);
          else
            e: for (a = p; Q !== null; ) {
              if (((s = Q), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yu(9, s);
                  }
                } catch (N) {
                  rt(s, s.return, N);
                }
              if (s === a) {
                Q = null;
                break e;
              }
              var _ = s.sibling;
              if (_ !== null) {
                (_.return = s.return), (Q = _);
                break e;
              }
              Q = s.return;
            }
        }
        if (
          ((Pe = o), xo(), fr && typeof fr.onPostCommitFiberRoot == "function")
        )
          try {
            fr.onPostCommitFiberRoot(uu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (je = n), (Mn.transition = t);
    }
  }
  return !1;
}
function iv(e, t, n) {
  (t = Xi(n, t)),
    (t = kx(e, t, 1)),
    (e = co(e, t, 1)),
    (t = Ut()),
    e !== null && (Xs(e, 1, t), Zt(e, t));
}
function rt(e, t, n) {
  if (e.tag === 3) iv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        iv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (uo === null || !uo.has(r)))
        ) {
          (e = Xi(n, e)),
            (e = Rx(t, e, 1)),
            (t = co(t, e, 1)),
            (e = Ut()),
            t !== null && (Xs(t, 1, e), Zt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function P_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ut()),
    (e.pingedLanes |= e.suspendedLanes & n),
    _t === e &&
      (Tt & n) === n &&
      (bt === 4 || (bt === 3 && (Tt & 130023424) === Tt && 500 > ut() - Th)
        ? Wo(e, 0)
        : (Rh |= n)),
    Zt(e, t);
}
function qx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Rl), (Rl <<= 1), !(Rl & 130023424) && (Rl = 4194304))
      : (t = 1));
  var n = Ut();
  (e = Nr(e, t)), e !== null && (Xs(e, t, n), Zt(e, n));
}
function E_(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qx(e, n);
}
function k_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(H(314));
  }
  r !== null && r.delete(t), qx(e, n);
}
var Qx;
Qx = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xt.current) Qt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qt = !1), m_(e, t, n);
      Qt = !!(e.flags & 131072);
    }
  else (Qt = !1), Ke && t.flags & 1048576 && Z1(t, Ic, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      cc(e, t), (e = t.pendingProps);
      var o = Ki(t, Dt.current);
      Bi(t, n), (o = Ch(null, t, r, e, o, n));
      var i = $h();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Jt(r) ? ((i = !0), Oc(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            yh(t),
            (o.updater = gu),
            (t.stateNode = o),
            (o._reactInternals = t),
            ep(t, r, e, n),
            (t = rp(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ke && i && dh(t), Wt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (cc(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = T_(r)),
          (e = Kn(r, e)),
          o)
        ) {
          case 0:
            t = np(null, t, r, e, n);
            break e;
          case 1:
            t = qg(null, t, r, e, n);
            break e;
          case 11:
            t = Kg(null, t, r, e, n);
            break e;
          case 14:
            t = Yg(null, t, r, Kn(r.type, e), n);
            break e;
        }
        throw Error(H(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Kn(r, o)),
        np(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Kn(r, o)),
        qg(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ix(t), e === null)) throw Error(H(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          rx(e, t),
          jc(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Xi(Error(H(423)), t)), (t = Qg(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Xi(Error(H(424)), t)), (t = Qg(e, t, r, n, o));
            break e;
          } else
            for (
              cn = lo(t.stateNode.containerInfo.firstChild),
                un = t,
                Ke = !0,
                Qn = null,
                n = sx(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yi(), r === o)) {
            t = jr(e, t, n);
            break e;
          }
          Wt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lx(t),
        e === null && Xf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Gf(r, o) ? (a = null) : i !== null && Gf(r, i) && (t.flags |= 32),
        Mx(e, t),
        Wt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Xf(t), null;
    case 13:
      return Ax(e, t, n);
    case 4:
      return (
        xh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qi(t, null, r, n)) : Wt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Kn(r, o)),
        Kg(e, t, r, o, n)
      );
    case 7:
      return Wt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Wt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Wt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          We(Ac, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (tr(i.value, a)) {
            if (i.children === o.children && !Xt.current) {
              t = jr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Tr(-1, n & -n)), (l.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Jf(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(H(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  Jf(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Wt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Bi(t, n),
        (o = Nn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Wt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Kn(r, t.pendingProps)),
        (o = Kn(r.type, o)),
        Yg(e, t, r, o, n)
      );
    case 15:
      return Tx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Kn(r, o)),
        cc(e, t),
        (t.tag = 1),
        Jt(r) ? ((e = !0), Oc(t)) : (e = !1),
        Bi(t, n),
        ix(t, r, o),
        ep(t, r, o, n),
        rp(null, t, r, !0, e, n)
      );
    case 19:
      return Nx(e, t, n);
    case 22:
      return Ox(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function Xx(e, t) {
  return C1(e, t);
}
function R_(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rn(e, t, n, r) {
  return new R_(e, t, n, r);
}
function Ah(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function T_(e) {
  if (typeof e == "function") return Ah(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zp)) return 11;
    if (e === eh) return 14;
  }
  return 2;
}
function po(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function fc(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Ah(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Si:
        return Uo(n.children, o, i, t);
      case Jp:
        (a = 8), (o |= 8);
        break;
      case $f:
        return (
          (e = Rn(12, n, t, o | 2)), (e.elementType = $f), (e.lanes = i), e
        );
      case _f:
        return (e = Rn(13, n, t, o)), (e.elementType = _f), (e.lanes = i), e;
      case Pf:
        return (e = Rn(19, n, t, o)), (e.elementType = Pf), (e.lanes = i), e;
      case a1:
        return bu(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case o1:
              a = 10;
              break e;
            case i1:
              a = 9;
              break e;
            case Zp:
              a = 11;
              break e;
            case eh:
              a = 14;
              break e;
            case Xr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(H(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Uo(e, t, n, r) {
  return (e = Rn(7, e, r, t)), (e.lanes = n), e;
}
function bu(e, t, n, r) {
  return (
    (e = Rn(22, e, r, t)),
    (e.elementType = a1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Hd(e, t, n) {
  return (e = Rn(6, e, null, t)), (e.lanes = n), e;
}
function Vd(e, t, n) {
  return (
    (t = Rn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O_(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _d(0)),
    (this.expirationTimes = _d(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _d(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Nh(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new O_(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Rn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yh(i),
    e
  );
}
function M_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jx(e) {
  if (!e) return mo;
  e = e._reactInternals;
  e: {
    if (ri(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Jt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(H(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Jt(n)) return X1(e, n, t);
  }
  return t;
}
function Zx(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Nh(n, r, !0, e, o, i, a, s, l)),
    (e.context = Jx(null)),
    (n = e.current),
    (r = Ut()),
    (o = fo(n)),
    (i = Tr(r, o)),
    (i.callback = t ?? null),
    co(n, i, o),
    (e.current.lanes = o),
    Xs(e, o, r),
    Zt(e, r),
    e
  );
}
function wu(e, t, n, r) {
  var o = t.current,
    i = Ut(),
    a = fo(o);
  return (
    (n = Jx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = co(o, t, a)),
    e !== null && (Zn(e, o, a, i), ac(e, o, a)),
    a
  );
}
function Hc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function av(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function jh(e, t) {
  av(e, t), (e = e.alternate) && av(e, t);
}
function I_() {
  return null;
}
var eb =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Dh(e) {
  this._internalRoot = e;
}
Su.prototype.render = Dh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  wu(e, t, null, null);
};
Su.prototype.unmount = Dh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qo(function () {
      wu(null, e, null, null);
    }),
      (t[Ar] = null);
  }
};
function Su(e) {
  this._internalRoot = e;
}
Su.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = T1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zr.length && t !== 0 && t < Zr[n].priority; n++);
    Zr.splice(n, 0, e), n === 0 && M1(e);
  }
};
function Lh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function sv() {}
function A_(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = Hc(a);
        i.call(c);
      };
    }
    var a = Zx(t, r, e, 0, null, !1, !1, "", sv);
    return (
      (e._reactRootContainer = a),
      (e[Ar] = a.current),
      Rs(e.nodeType === 8 ? e.parentNode : e),
      Qo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Hc(l);
      s.call(c);
    };
  }
  var l = Nh(e, 0, !1, null, null, !1, !1, "", sv);
  return (
    (e._reactRootContainer = l),
    (e[Ar] = l.current),
    Rs(e.nodeType === 8 ? e.parentNode : e),
    Qo(function () {
      wu(t, l, n, r);
    }),
    l
  );
}
function $u(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = Hc(a);
        s.call(l);
      };
    }
    wu(t, a, e, o);
  } else a = A_(n, t, e, o, r);
  return Hc(a);
}
k1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ts(t.pendingLanes);
        n !== 0 &&
          (rh(t, n | 1), Zt(t, ut()), !(Pe & 6) && ((Ji = ut() + 500), xo()));
      }
      break;
    case 13:
      Qo(function () {
        var r = Nr(e, 1);
        if (r !== null) {
          var o = Ut();
          Zn(r, e, 1, o);
        }
      }),
        jh(e, 1);
  }
};
oh = function (e) {
  if (e.tag === 13) {
    var t = Nr(e, 134217728);
    if (t !== null) {
      var n = Ut();
      Zn(t, e, 134217728, n);
    }
    jh(e, 134217728);
  }
};
R1 = function (e) {
  if (e.tag === 13) {
    var t = fo(e),
      n = Nr(e, t);
    if (n !== null) {
      var r = Ut();
      Zn(n, e, t, r);
    }
    jh(e, t);
  }
};
T1 = function () {
  return je;
};
O1 = function (e, t) {
  var n = je;
  try {
    return (je = e), t();
  } finally {
    je = n;
  }
};
jf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Rf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = hu(r);
            if (!o) throw Error(H(90));
            l1(r), Rf(r, o);
          }
        }
      }
      break;
    case "textarea":
      u1(e, n);
      break;
    case "select":
      (t = n.value), t != null && Di(e, !!n.multiple, t, !1);
  }
};
v1 = Oh;
y1 = Qo;
var N_ = { usingClientEntryPoint: !1, Events: [Zs, Pi, hu, m1, g1, Oh] },
  Aa = {
    findFiberByHostInstance: No,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  j_ = {
    bundleType: Aa.bundleType,
    version: Aa.version,
    rendererPackageName: Aa.rendererPackageName,
    rendererConfig: Aa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Br.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = w1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Aa.findFiberByHostInstance || I_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zl.isDisabled && zl.supportsFiber)
    try {
      (uu = zl.inject(j_)), (fr = zl);
    } catch {}
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N_;
hn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lh(t)) throw Error(H(200));
  return M_(e, t, null, n);
};
hn.createRoot = function (e, t) {
  if (!Lh(e)) throw Error(H(299));
  var n = !1,
    r = "",
    o = eb;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Nh(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ar] = t.current),
    Rs(e.nodeType === 8 ? e.parentNode : e),
    new Dh(t)
  );
};
hn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(H(188))
      : ((e = Object.keys(e).join(",")), Error(H(268, e)));
  return (e = w1(t)), (e = e === null ? null : e.stateNode), e;
};
hn.flushSync = function (e) {
  return Qo(e);
};
hn.hydrate = function (e, t, n) {
  if (!Cu(t)) throw Error(H(200));
  return $u(null, e, t, !0, n);
};
hn.hydrateRoot = function (e, t, n) {
  if (!Lh(e)) throw Error(H(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = eb;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Zx(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Ar] = t.current),
    Rs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Su(t);
};
hn.render = function (e, t, n) {
  if (!Cu(t)) throw Error(H(200));
  return $u(null, e, t, !1, n);
};
hn.unmountComponentAtNode = function (e) {
  if (!Cu(e)) throw Error(H(40));
  return e._reactRootContainer
    ? (Qo(function () {
        $u(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ar] = null);
        });
      }),
      !0)
    : !1;
};
hn.unstable_batchedUpdates = Oh;
hn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cu(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return $u(e, t, n, !1, r);
};
hn.version = "18.2.0-next-9e3b772b8-20220608";
function tb() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tb);
    } catch (e) {
      console.error(e);
    }
}
tb(), (Zy.exports = hn);
var _u = Zy.exports;
const rs = rr(_u),
  D_ = Wy({ __proto__: null, default: rs }, [_u]);
var lv = _u;
(Sf.createRoot = lv.createRoot), (Sf.hydrateRoot = lv.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ot() {
  return (
    (ot = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ot.apply(this, arguments)
  );
}
var ct;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ct || (ct = {}));
const cv = "popstate";
function L_(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: s } = r.location;
    return Ls(
      "",
      { pathname: i, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Xo(o);
  }
  return z_(t, n, null, e);
}
function ye(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Zi(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function F_() {
  return Math.random().toString(36).substr(2, 8);
}
function uv(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ls(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ot(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Wr(t) : t,
      { state: n, key: (t && t.key) || r || F_() }
    )
  );
}
function Xo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Wr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function z_(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = ct.Pop,
    l = null,
    c = u();
  c == null && ((c = 0), a.replaceState(ot({}, a.state, { idx: c }), ""));
  function u() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = ct.Pop;
    let P = u(),
      m = P == null ? null : P - c;
    (c = P), l && l({ action: s, location: x.location, delta: m });
  }
  function f(P, m) {
    s = ct.Push;
    let p = Ls(x.location, P, m);
    n && n(p, P), (c = u() + 1);
    let v = uv(p, c),
      _ = x.createHref(p);
    try {
      a.pushState(v, "", _);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      o.location.assign(_);
    }
    i && l && l({ action: s, location: x.location, delta: 1 });
  }
  function b(P, m) {
    s = ct.Replace;
    let p = Ls(x.location, P, m);
    n && n(p, P), (c = u());
    let v = uv(p, c),
      _ = x.createHref(p);
    a.replaceState(v, "", _),
      i && l && l({ action: s, location: x.location, delta: 0 });
  }
  function g(P) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof P == "string" ? P : Xo(P);
    return (
      (p = p.replace(/ $/, "%20")),
      ye(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(P) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(cv, d),
        (l = P),
        () => {
          o.removeEventListener(cv, d), (l = null);
        }
      );
    },
    createHref(P) {
      return t(o, P);
    },
    createURL: g,
    encodeLocation(P) {
      let m = g(P);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: b,
    go(P) {
      return a.go(P);
    },
  };
  return x;
}
var tt;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(tt || (tt = {}));
const B_ = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function W_(e) {
  return e.index === !0;
}
function mp(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let a = [...n, i],
        s = typeof o.id == "string" ? o.id : a.join("-");
      if (
        (ye(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        ye(
          !r[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        W_(o))
      ) {
        let l = ot({}, o, t(o), { id: s });
        return (r[s] = l), l;
      } else {
        let l = ot({}, o, t(o), { id: s, children: void 0 });
        return (
          (r[s] = l), o.children && (l.children = mp(o.children, t, a, r)), l
        );
      }
    })
  );
}
function Ii(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Wr(t) : t,
    o = Dr(r.pathname || "/", n);
  if (o == null) return null;
  let i = nb(e);
  H_(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let l = t2(o);
    a = Z_(i[s], l);
  }
  return a;
}
function U_(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function nb(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (ye(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = Or([r, l.relativePath]),
      u = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (ye(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      nb(i.children, t, u, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: X_(c, i.index), routesMeta: u });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of rb(i.path)) o(i, a, l);
    }),
    t
  );
}
function rb(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = rb(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function H_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : J_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const V_ = /^:[\w-]+$/,
  G_ = 3,
  K_ = 2,
  Y_ = 1,
  q_ = 10,
  Q_ = -2,
  dv = (e) => e === "*";
function X_(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(dv) && (r += Q_),
    t && (r += K_),
    n
      .filter((o) => !dv(o))
      .reduce((o, i) => o + (V_.test(i) ? G_ : i === "" ? Y_ : q_), r)
  );
}
function J_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Z_(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      u = gp(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        c
      );
    if (!u) return null;
    Object.assign(r, u.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: Or([o, u.pathname]),
      pathnameBase: o2(Or([o, u.pathnameBase])),
      route: d,
    }),
      u.pathnameBase !== "/" && (o = Or([o, u.pathnameBase]));
  }
  return i;
}
function gp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = e2(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: f, isOptional: b } = u;
      if (f === "*") {
        let x = s[d] || "";
        a = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const g = s[d];
      return (
        b && !g ? (c[f] = void 0) : (c[f] = (g || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function e2(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Zi(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function t2(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Zi(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Dr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function n2(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Wr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : r2(n, t)) : t,
    search: i2(r),
    hash: a2(o),
  };
}
function r2(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Gd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ob(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Fh(e, t) {
  let n = ob(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function zh(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Wr(e))
    : ((o = ot({}, e)),
      ye(
        !o.pathname || !o.pathname.includes("?"),
        Gd("?", "pathname", "search", o)
      ),
      ye(
        !o.pathname || !o.pathname.includes("#"),
        Gd("#", "pathname", "hash", o)
      ),
      ye(!o.search || !o.search.includes("#"), Gd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (a == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = n2(o, s),
    c = a && a !== "/" && a.endsWith("/"),
    u = (i || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const Or = (e) => e.join("/").replace(/\/\/+/g, "/"),
  o2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  i2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  a2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Bh {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function ib(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ab = ["post", "put", "patch", "delete"],
  s2 = new Set(ab),
  l2 = ["get", ...ab],
  c2 = new Set(l2),
  u2 = new Set([301, 302, 303, 307, 308]),
  d2 = new Set([307, 308]),
  Kd = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  f2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Na = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  sb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  p2 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  lb = "remix-router-transitions";
function h2(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ye(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let F = e.detectErrorBoundary;
    o = (z) => ({ hasErrorBoundary: F(z) });
  } else o = p2;
  let i = {},
    a = mp(e.routes, o, void 0, i),
    s,
    l = e.basename || "/",
    c = ot(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    u = null,
    d = new Set(),
    f = null,
    b = null,
    g = null,
    x = e.hydrationData != null,
    P = Ii(a, e.history.location, l),
    m = null;
  if (P == null) {
    let F = Sn(404, { pathname: e.history.location.pathname }),
      { matches: z, route: W } = xv(a);
    (P = z), (m = { [W.id]: F });
  }
  let p,
    v = P.some((F) => F.route.lazy),
    _ = P.some((F) => F.route.loader);
  if (v) p = !1;
  else if (!_) p = !0;
  else if (c.v7_partialHydration) {
    let F = e.hydrationData ? e.hydrationData.loaderData : null,
      z = e.hydrationData ? e.hydrationData.errors : null,
      W = (V) =>
        V.route.loader
          ? V.route.loader.hydrate === !0
            ? !1
            : (F && F[V.route.id] !== void 0) || (z && z[V.route.id] !== void 0)
          : !0;
    if (z) {
      let V = P.findIndex((ee) => z[ee.route.id] !== void 0);
      p = P.slice(0, V + 1).every(W);
    } else p = P.every(W);
  } else p = e.hydrationData != null;
  let N,
    C = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: P,
      initialized: p,
      navigation: Kd,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    R = ct.Pop,
    h = !1,
    y,
    w = !1,
    T = new Map(),
    k = null,
    M = !1,
    D = !1,
    O = [],
    A = [],
    j = new Map(),
    E = 0,
    L = -1,
    B = new Map(),
    U = new Set(),
    K = new Map(),
    ce = new Map(),
    Z = new Set(),
    Y = new Map(),
    J = new Map(),
    fe = !1;
  function Ie() {
    if (
      ((u = e.history.listen((F) => {
        let { action: z, location: W, delta: V } = F;
        if (fe) {
          fe = !1;
          return;
        }
        Zi(
          J.size === 0 || V != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let ee = $o({
          currentLocation: C.location,
          nextLocation: W,
          historyAction: z,
        });
        if (ee && V != null) {
          (fe = !0),
            e.history.go(V * -1),
            xr(ee, {
              state: "blocked",
              location: W,
              proceed() {
                xr(ee, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: W,
                }),
                  e.history.go(V);
              },
              reset() {
                let me = new Map(C.blockers);
                me.set(ee, Na), he({ blockers: me });
              },
            });
          return;
        }
        return re(z, W);
      })),
      n)
    ) {
      _2(t, T);
      let F = () => P2(t, T);
      t.addEventListener("pagehide", F),
        (k = () => t.removeEventListener("pagehide", F));
    }
    return C.initialized || re(ct.Pop, C.location, { initialHydration: !0 }), N;
  }
  function _e() {
    u && u(),
      k && k(),
      d.clear(),
      y && y.abort(),
      C.fetchers.forEach((F, z) => on(z)),
      C.blockers.forEach((F, z) => _a(z));
  }
  function at(F) {
    return d.add(F), () => d.delete(F);
  }
  function he(F, z) {
    z === void 0 && (z = {}), (C = ot({}, C, F));
    let W = [],
      V = [];
    c.v7_fetcherPersist &&
      C.fetchers.forEach((ee, me) => {
        ee.state === "idle" && (Z.has(me) ? V.push(me) : W.push(me));
      }),
      [...d].forEach((ee) =>
        ee(C, {
          deletedFetchers: V,
          unstable_viewTransitionOpts: z.viewTransitionOpts,
          unstable_flushSync: z.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (W.forEach((ee) => C.fetchers.delete(ee)), V.forEach((ee) => on(ee)));
  }
  function st(F, z, W) {
    var V, ee;
    let { flushSync: me } = W === void 0 ? {} : W,
      le =
        C.actionData != null &&
        C.navigation.formMethod != null &&
        qn(C.navigation.formMethod) &&
        C.navigation.state === "loading" &&
        ((V = F.state) == null ? void 0 : V._isRedirect) !== !0,
      se;
    z.actionData
      ? Object.keys(z.actionData).length > 0
        ? (se = z.actionData)
        : (se = null)
      : le
        ? (se = C.actionData)
        : (se = null);
    let ne = z.loaderData
        ? yv(C.loaderData, z.loaderData, z.matches || [], z.errors)
        : C.loaderData,
      ve = C.blockers;
    ve.size > 0 && ((ve = new Map(ve)), ve.forEach((Fe, Ye) => ve.set(Ye, Na)));
    let Ae =
      h === !0 ||
      (C.navigation.formMethod != null &&
        qn(C.navigation.formMethod) &&
        ((ee = F.state) == null ? void 0 : ee._isRedirect) !== !0);
    s && ((a = s), (s = void 0)),
      M ||
        R === ct.Pop ||
        (R === ct.Push
          ? e.history.push(F, F.state)
          : R === ct.Replace && e.history.replace(F, F.state));
    let ue;
    if (R === ct.Pop) {
      let Fe = T.get(C.location.pathname);
      Fe && Fe.has(F.pathname)
        ? (ue = { currentLocation: C.location, nextLocation: F })
        : T.has(F.pathname) &&
          (ue = { currentLocation: F, nextLocation: C.location });
    } else if (w) {
      let Fe = T.get(C.location.pathname);
      Fe
        ? Fe.add(F.pathname)
        : ((Fe = new Set([F.pathname])), T.set(C.location.pathname, Fe)),
        (ue = { currentLocation: C.location, nextLocation: F });
    }
    he(
      ot({}, z, {
        actionData: se,
        loaderData: ne,
        historyAction: R,
        location: F,
        initialized: !0,
        navigation: Kd,
        revalidation: "idle",
        restoreScrollPosition: xl(F, z.matches || C.matches),
        preventScrollReset: Ae,
        blockers: ve,
      }),
      { viewTransitionOpts: ue, flushSync: me === !0 }
    ),
      (R = ct.Pop),
      (h = !1),
      (w = !1),
      (M = !1),
      (D = !1),
      (O = []),
      (A = []);
  }
  async function ae(F, z) {
    if (typeof F == "number") {
      e.history.go(F);
      return;
    }
    let W = vp(
        C.location,
        C.matches,
        l,
        c.v7_prependBasename,
        F,
        c.v7_relativeSplatPath,
        z == null ? void 0 : z.fromRouteId,
        z == null ? void 0 : z.relative
      ),
      {
        path: V,
        submission: ee,
        error: me,
      } = fv(c.v7_normalizeFormMethod, !1, W, z),
      le = C.location,
      se = Ls(C.location, V, z && z.state);
    se = ot({}, se, e.history.encodeLocation(se));
    let ne = z && z.replace != null ? z.replace : void 0,
      ve = ct.Push;
    ne === !0
      ? (ve = ct.Replace)
      : ne === !1 ||
        (ee != null &&
          qn(ee.formMethod) &&
          ee.formAction === C.location.pathname + C.location.search &&
          (ve = ct.Replace));
    let Ae =
        z && "preventScrollReset" in z ? z.preventScrollReset === !0 : void 0,
      ue = (z && z.unstable_flushSync) === !0,
      Fe = $o({ currentLocation: le, nextLocation: se, historyAction: ve });
    if (Fe) {
      xr(Fe, {
        state: "blocked",
        location: se,
        proceed() {
          xr(Fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: se,
          }),
            ae(F, z);
        },
        reset() {
          let Ye = new Map(C.blockers);
          Ye.set(Fe, Na), he({ blockers: Ye });
        },
      });
      return;
    }
    return await re(ve, se, {
      submission: ee,
      pendingError: me,
      preventScrollReset: Ae,
      replace: z && z.replace,
      enableViewTransition: z && z.unstable_viewTransition,
      flushSync: ue,
    });
  }
  function de() {
    if (
      (zt(),
      he({ revalidation: "loading" }),
      C.navigation.state !== "submitting")
    ) {
      if (C.navigation.state === "idle") {
        re(C.historyAction, C.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      re(R || C.historyAction, C.navigation.location, {
        overrideNavigation: C.navigation,
      });
    }
  }
  async function re(F, z, W) {
    y && y.abort(),
      (y = null),
      (R = F),
      (M = (W && W.startUninterruptedRevalidation) === !0),
      xd(C.location, C.matches),
      (h = (W && W.preventScrollReset) === !0),
      (w = (W && W.enableViewTransition) === !0);
    let V = s || a,
      ee = W && W.overrideNavigation,
      me = Ii(V, z, l),
      le = (W && W.flushSync) === !0;
    if (!me) {
      let Ye = Sn(404, { pathname: z.pathname }),
        { matches: Et, route: lt } = xv(V);
      _o(),
        st(
          z,
          { matches: Et, loaderData: {}, errors: { [lt.id]: Ye } },
          { flushSync: le }
        );
      return;
    }
    if (
      C.initialized &&
      !D &&
      x2(C.location, z) &&
      !(W && W.submission && qn(W.submission.formMethod))
    ) {
      st(z, { matches: me }, { flushSync: le });
      return;
    }
    y = new AbortController();
    let se = Da(e.history, z, y.signal, W && W.submission),
      ne,
      ve;
    if (W && W.pendingError) ve = { [hs(me).route.id]: W.pendingError };
    else if (W && W.submission && qn(W.submission.formMethod)) {
      let Ye = await vn(se, z, W.submission, me, {
        replace: W.replace,
        flushSync: le,
      });
      if (Ye.shortCircuited) return;
      (ne = Ye.pendingActionData),
        (ve = Ye.pendingActionError),
        (ee = Yd(z, W.submission)),
        (le = !1),
        (se = new Request(se.url, { signal: se.signal }));
    }
    let {
      shortCircuited: Ae,
      loaderData: ue,
      errors: Fe,
    } = await Lt(
      se,
      z,
      me,
      ee,
      W && W.submission,
      W && W.fetcherSubmission,
      W && W.replace,
      W && W.initialHydration === !0,
      le,
      ne,
      ve
    );
    Ae ||
      ((y = null),
      st(
        z,
        ot({ matches: me }, ne ? { actionData: ne } : {}, {
          loaderData: ue,
          errors: Fe,
        })
      ));
  }
  async function vn(F, z, W, V, ee) {
    ee === void 0 && (ee = {}), zt();
    let me = C2(z, W);
    he({ navigation: me }, { flushSync: ee.flushSync === !0 });
    let le,
      se = xp(V, z);
    if (!se.route.action && !se.route.lazy)
      le = {
        type: tt.error,
        error: Sn(405, {
          method: F.method,
          pathname: z.pathname,
          routeId: se.route.id,
        }),
      };
    else if (
      ((le = await ja("action", F, se, V, i, o, l, c.v7_relativeSplatPath)),
      F.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Fo(le)) {
      let ne;
      return (
        ee && ee.replace != null
          ? (ne = ee.replace)
          : (ne = le.location === C.location.pathname + C.location.search),
        await yt(C, le, { submission: W, replace: ne }),
        { shortCircuited: !0 }
      );
    }
    if (Ai(le)) {
      let ne = hs(V, se.route.id);
      return (
        (ee && ee.replace) !== !0 && (R = ct.Push),
        {
          pendingActionData: {},
          pendingActionError: { [ne.route.id]: le.error },
        }
      );
    }
    if (Lo(le)) throw Sn(400, { type: "defer-action" });
    return { pendingActionData: { [se.route.id]: le.data } };
  }
  async function Lt(F, z, W, V, ee, me, le, se, ne, ve, Ae) {
    let ue = V || Yd(z, ee),
      Fe = ee || me || Sv(ue),
      Ye = s || a,
      [Et, lt] = pv(
        e.history,
        C,
        W,
        Fe,
        z,
        c.v7_partialHydration && se === !0,
        D,
        O,
        A,
        Z,
        K,
        U,
        Ye,
        l,
        ve,
        Ae
      );
    if (
      (_o(
        (Te) =>
          !(W && W.some((ze) => ze.route.id === Te)) ||
          (Et && Et.some((ze) => ze.route.id === Te))
      ),
      (L = ++E),
      Et.length === 0 && lt.length === 0)
    ) {
      let Te = Gr();
      return (
        st(
          z,
          ot(
            { matches: W, loaderData: {}, errors: Ae || null },
            ve ? { actionData: ve } : {},
            Te ? { fetchers: new Map(C.fetchers) } : {}
          ),
          { flushSync: ne }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!M && (!c.v7_partialHydration || !se)) {
      lt.forEach((ze) => {
        let Kt = C.fetchers.get(ze.key),
          Sl = La(void 0, Kt ? Kt.data : void 0);
        C.fetchers.set(ze.key, Sl);
      });
      let Te = ve || C.actionData;
      he(
        ot(
          { navigation: ue },
          Te
            ? Object.keys(Te).length === 0
              ? { actionData: null }
              : { actionData: Te }
            : {},
          lt.length > 0 ? { fetchers: new Map(C.fetchers) } : {}
        ),
        { flushSync: ne }
      );
    }
    lt.forEach((Te) => {
      j.has(Te.key) && ie(Te.key),
        Te.controller && j.set(Te.key, Te.controller);
    });
    let br = () => lt.forEach((Te) => ie(Te.key));
    y && y.signal.addEventListener("abort", br);
    let {
      results: li,
      loaderResults: wr,
      fetcherResults: ir,
    } = await Ft(C.matches, W, Et, lt, F);
    if (F.signal.aborted) return { shortCircuited: !0 };
    y && y.signal.removeEventListener("abort", br),
      lt.forEach((Te) => j.delete(Te.key));
    let Sr = bv(li);
    if (Sr) {
      if (Sr.idx >= Et.length) {
        let Te = lt[Sr.idx - Et.length].key;
        U.add(Te);
      }
      return await yt(C, Sr.result, { replace: le }), { shortCircuited: !0 };
    }
    let { loaderData: Pa, errors: Po } = vv(C, W, Et, wr, Ae, lt, ir, Y);
    Y.forEach((Te, ze) => {
      Te.subscribe((Kt) => {
        (Kt || Te.done) && Y.delete(ze);
      });
    }),
      c.v7_partialHydration &&
        se &&
        C.errors &&
        Object.entries(C.errors)
          .filter((Te) => {
            let [ze] = Te;
            return !Et.some((Kt) => Kt.route.id === ze);
          })
          .forEach((Te) => {
            let [ze, Kt] = Te;
            Po = Object.assign(Po || {}, { [ze]: Kt });
          });
    let ge = Gr(),
      ht = Un(L),
      wl = ge || ht || lt.length > 0;
    return ot(
      { loaderData: Pa, errors: Po },
      wl ? { fetchers: new Map(C.fetchers) } : {}
    );
  }
  function wt(F, z, W, V) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    j.has(F) && ie(F);
    let ee = (V && V.unstable_flushSync) === !0,
      me = s || a,
      le = vp(
        C.location,
        C.matches,
        l,
        c.v7_prependBasename,
        W,
        c.v7_relativeSplatPath,
        z,
        V == null ? void 0 : V.relative
      ),
      se = Ii(me, le, l);
    if (!se) {
      St(F, z, Sn(404, { pathname: le }), { flushSync: ee });
      return;
    }
    let {
      path: ne,
      submission: ve,
      error: Ae,
    } = fv(c.v7_normalizeFormMethod, !0, le, V);
    if (Ae) {
      St(F, z, Ae, { flushSync: ee });
      return;
    }
    let ue = xp(se, ne);
    if (((h = (V && V.preventScrollReset) === !0), ve && qn(ve.formMethod))) {
      Wn(F, z, ne, ue, se, ee, ve);
      return;
    }
    K.set(F, { routeId: z, path: ne }), pt(F, z, ne, ue, se, ee, ve);
  }
  async function Wn(F, z, W, V, ee, me, le) {
    if ((zt(), K.delete(F), !V.route.action && !V.route.lazy)) {
      let ze = Sn(405, { method: le.formMethod, pathname: W, routeId: z });
      St(F, z, ze, { flushSync: me });
      return;
    }
    let se = C.fetchers.get(F);
    Ee(F, $2(le, se), { flushSync: me });
    let ne = new AbortController(),
      ve = Da(e.history, W, ne.signal, le);
    j.set(F, ne);
    let Ae = E,
      ue = await ja("action", ve, V, ee, i, o, l, c.v7_relativeSplatPath);
    if (ve.signal.aborted) {
      j.get(F) === ne && j.delete(F);
      return;
    }
    if (c.v7_fetcherPersist && Z.has(F)) {
      if (Fo(ue) || Ai(ue)) {
        Ee(F, Qr(void 0));
        return;
      }
    } else {
      if (Fo(ue))
        if ((j.delete(F), L > Ae)) {
          Ee(F, Qr(void 0));
          return;
        } else
          return U.add(F), Ee(F, La(le)), yt(C, ue, { fetcherSubmission: le });
      if (Ai(ue)) {
        St(F, z, ue.error);
        return;
      }
    }
    if (Lo(ue)) throw Sn(400, { type: "defer-action" });
    let Fe = C.navigation.location || C.location,
      Ye = Da(e.history, Fe, ne.signal),
      Et = s || a,
      lt =
        C.navigation.state !== "idle"
          ? Ii(Et, C.navigation.location, l)
          : C.matches;
    ye(lt, "Didn't find any matches after fetcher action");
    let br = ++E;
    B.set(F, br);
    let li = La(le, ue.data);
    C.fetchers.set(F, li);
    let [wr, ir] = pv(
      e.history,
      C,
      lt,
      le,
      Fe,
      !1,
      D,
      O,
      A,
      Z,
      K,
      U,
      Et,
      l,
      { [V.route.id]: ue.data },
      void 0
    );
    ir
      .filter((ze) => ze.key !== F)
      .forEach((ze) => {
        let Kt = ze.key,
          Sl = C.fetchers.get(Kt),
          fC = La(void 0, Sl ? Sl.data : void 0);
        C.fetchers.set(Kt, fC),
          j.has(Kt) && ie(Kt),
          ze.controller && j.set(Kt, ze.controller);
      }),
      he({ fetchers: new Map(C.fetchers) });
    let Sr = () => ir.forEach((ze) => ie(ze.key));
    ne.signal.addEventListener("abort", Sr);
    let {
      results: Pa,
      loaderResults: Po,
      fetcherResults: ge,
    } = await Ft(C.matches, lt, wr, ir, Ye);
    if (ne.signal.aborted) return;
    ne.signal.removeEventListener("abort", Sr),
      B.delete(F),
      j.delete(F),
      ir.forEach((ze) => j.delete(ze.key));
    let ht = bv(Pa);
    if (ht) {
      if (ht.idx >= wr.length) {
        let ze = ir[ht.idx - wr.length].key;
        U.add(ze);
      }
      return yt(C, ht.result);
    }
    let { loaderData: wl, errors: Te } = vv(
      C,
      C.matches,
      wr,
      Po,
      void 0,
      ir,
      ge,
      Y
    );
    if (C.fetchers.has(F)) {
      let ze = Qr(ue.data);
      C.fetchers.set(F, ze);
    }
    Un(br),
      C.navigation.state === "loading" && br > L
        ? (ye(R, "Expected pending action"),
          y && y.abort(),
          st(C.navigation.location, {
            matches: lt,
            loaderData: wl,
            errors: Te,
            fetchers: new Map(C.fetchers),
          }))
        : (he({
            errors: Te,
            loaderData: yv(C.loaderData, wl, lt, Te),
            fetchers: new Map(C.fetchers),
          }),
          (D = !1));
  }
  async function pt(F, z, W, V, ee, me, le) {
    let se = C.fetchers.get(F);
    Ee(F, La(le, se ? se.data : void 0), { flushSync: me });
    let ne = new AbortController(),
      ve = Da(e.history, W, ne.signal);
    j.set(F, ne);
    let Ae = E,
      ue = await ja("loader", ve, V, ee, i, o, l, c.v7_relativeSplatPath);
    if (
      (Lo(ue) && (ue = (await db(ue, ve.signal, !0)) || ue),
      j.get(F) === ne && j.delete(F),
      !ve.signal.aborted)
    ) {
      if (Z.has(F)) {
        Ee(F, Qr(void 0));
        return;
      }
      if (Fo(ue))
        if (L > Ae) {
          Ee(F, Qr(void 0));
          return;
        } else {
          U.add(F), await yt(C, ue);
          return;
        }
      if (Ai(ue)) {
        St(F, z, ue.error);
        return;
      }
      ye(!Lo(ue), "Unhandled fetcher deferred data"), Ee(F, Qr(ue.data));
    }
  }
  async function yt(F, z, W) {
    let {
      submission: V,
      fetcherSubmission: ee,
      replace: me,
    } = W === void 0 ? {} : W;
    z.revalidate && (D = !0);
    let le = Ls(F.location, z.location, { _isRedirect: !0 });
    if ((ye(le, "Expected a location on the redirect navigation"), n)) {
      let Fe = !1;
      if (z.reloadDocument) Fe = !0;
      else if (sb.test(z.location)) {
        const Ye = e.history.createURL(z.location);
        Fe = Ye.origin !== t.location.origin || Dr(Ye.pathname, l) == null;
      }
      if (Fe) {
        me ? t.location.replace(z.location) : t.location.assign(z.location);
        return;
      }
    }
    y = null;
    let se = me === !0 ? ct.Replace : ct.Push,
      { formMethod: ne, formAction: ve, formEncType: Ae } = F.navigation;
    !V && !ee && ne && ve && Ae && (V = Sv(F.navigation));
    let ue = V || ee;
    if (d2.has(z.status) && ue && qn(ue.formMethod))
      await re(se, le, {
        submission: ot({}, ue, { formAction: z.location }),
        preventScrollReset: h,
      });
    else {
      let Fe = Yd(le, V);
      await re(se, le, {
        overrideNavigation: Fe,
        fetcherSubmission: ee,
        preventScrollReset: h,
      });
    }
  }
  async function Ft(F, z, W, V, ee) {
    let me = await Promise.all([
        ...W.map((ne) =>
          ja("loader", ee, ne, z, i, o, l, c.v7_relativeSplatPath)
        ),
        ...V.map((ne) =>
          ne.matches && ne.match && ne.controller
            ? ja(
                "loader",
                Da(e.history, ne.path, ne.controller.signal),
                ne.match,
                ne.matches,
                i,
                o,
                l,
                c.v7_relativeSplatPath
              )
            : { type: tt.error, error: Sn(404, { pathname: ne.path }) }
        ),
      ]),
      le = me.slice(0, W.length),
      se = me.slice(W.length);
    return (
      await Promise.all([
        wv(
          F,
          W,
          le,
          le.map(() => ee.signal),
          !1,
          C.loaderData
        ),
        wv(
          F,
          V.map((ne) => ne.match),
          se,
          V.map((ne) => (ne.controller ? ne.controller.signal : null)),
          !0
        ),
      ]),
      { results: me, loaderResults: le, fetcherResults: se }
    );
  }
  function zt() {
    (D = !0),
      O.push(..._o()),
      K.forEach((F, z) => {
        j.has(z) && (A.push(z), ie(z));
      });
  }
  function Ee(F, z, W) {
    W === void 0 && (W = {}),
      C.fetchers.set(F, z),
      he(
        { fetchers: new Map(C.fetchers) },
        { flushSync: (W && W.flushSync) === !0 }
      );
  }
  function St(F, z, W, V) {
    V === void 0 && (V = {});
    let ee = hs(C.matches, z);
    on(F),
      he(
        { errors: { [ee.route.id]: W }, fetchers: new Map(C.fetchers) },
        { flushSync: (V && V.flushSync) === !0 }
      );
  }
  function yn(F) {
    return (
      c.v7_fetcherPersist &&
        (ce.set(F, (ce.get(F) || 0) + 1), Z.has(F) && Z.delete(F)),
      C.fetchers.get(F) || f2
    );
  }
  function on(F) {
    let z = C.fetchers.get(F);
    j.has(F) && !(z && z.state === "loading" && B.has(F)) && ie(F),
      K.delete(F),
      B.delete(F),
      U.delete(F),
      Z.delete(F),
      C.fetchers.delete(F);
  }
  function Vr(F) {
    if (c.v7_fetcherPersist) {
      let z = (ce.get(F) || 0) - 1;
      z <= 0 ? (ce.delete(F), Z.add(F)) : ce.set(F, z);
    } else on(F);
    he({ fetchers: new Map(C.fetchers) });
  }
  function ie(F) {
    let z = j.get(F);
    ye(z, "Expected fetch controller: " + F), z.abort(), j.delete(F);
  }
  function Bt(F) {
    for (let z of F) {
      let W = yn(z),
        V = Qr(W.data);
      C.fetchers.set(z, V);
    }
  }
  function Gr() {
    let F = [],
      z = !1;
    for (let W of U) {
      let V = C.fetchers.get(W);
      ye(V, "Expected fetcher: " + W),
        V.state === "loading" && (U.delete(W), F.push(W), (z = !0));
    }
    return Bt(F), z;
  }
  function Un(F) {
    let z = [];
    for (let [W, V] of B)
      if (V < F) {
        let ee = C.fetchers.get(W);
        ye(ee, "Expected fetcher: " + W),
          ee.state === "loading" && (ie(W), B.delete(W), z.push(W));
      }
    return Bt(z), z.length > 0;
  }
  function Co(F, z) {
    let W = C.blockers.get(F) || Na;
    return J.get(F) !== z && J.set(F, z), W;
  }
  function _a(F) {
    C.blockers.delete(F), J.delete(F);
  }
  function xr(F, z) {
    let W = C.blockers.get(F) || Na;
    ye(
      (W.state === "unblocked" && z.state === "blocked") ||
        (W.state === "blocked" && z.state === "blocked") ||
        (W.state === "blocked" && z.state === "proceeding") ||
        (W.state === "blocked" && z.state === "unblocked") ||
        (W.state === "proceeding" && z.state === "unblocked"),
      "Invalid blocker state transition: " + W.state + " -> " + z.state
    );
    let V = new Map(C.blockers);
    V.set(F, z), he({ blockers: V });
  }
  function $o(F) {
    let { currentLocation: z, nextLocation: W, historyAction: V } = F;
    if (J.size === 0) return;
    J.size > 1 && Zi(!1, "A router only supports one blocker at a time");
    let ee = Array.from(J.entries()),
      [me, le] = ee[ee.length - 1],
      se = C.blockers.get(me);
    if (
      !(se && se.state === "proceeding") &&
      le({ currentLocation: z, nextLocation: W, historyAction: V })
    )
      return me;
  }
  function _o(F) {
    let z = [];
    return (
      Y.forEach((W, V) => {
        (!F || F(V)) && (W.cancel(), z.push(V), Y.delete(V));
      }),
      z
    );
  }
  function vl(F, z, W) {
    if (((f = F), (g = z), (b = W || null), !x && C.navigation === Kd)) {
      x = !0;
      let V = xl(C.location, C.matches);
      V != null && he({ restoreScrollPosition: V });
    }
    return () => {
      (f = null), (g = null), (b = null);
    };
  }
  function yl(F, z) {
    return (
      (b &&
        b(
          F,
          z.map((V) => U_(V, C.loaderData))
        )) ||
      F.key
    );
  }
  function xd(F, z) {
    if (f && g) {
      let W = yl(F, z);
      f[W] = g();
    }
  }
  function xl(F, z) {
    if (f) {
      let W = yl(F, z),
        V = f[W];
      if (typeof V == "number") return V;
    }
    return null;
  }
  function bl(F) {
    (i = {}), (s = mp(F, o, void 0, i));
  }
  return (
    (N = {
      get basename() {
        return l;
      },
      get future() {
        return c;
      },
      get state() {
        return C;
      },
      get routes() {
        return a;
      },
      get window() {
        return t;
      },
      initialize: Ie,
      subscribe: at,
      enableScrollRestoration: vl,
      navigate: ae,
      fetch: wt,
      revalidate: de,
      createHref: (F) => e.history.createHref(F),
      encodeLocation: (F) => e.history.encodeLocation(F),
      getFetcher: yn,
      deleteFetcher: Vr,
      dispose: _e,
      getBlocker: Co,
      deleteBlocker: _a,
      _internalFetchControllers: j,
      _internalActiveDeferreds: Y,
      _internalSetRoutes: bl,
    }),
    N
  );
}
function m2(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function vp(e, t, n, r, o, i, a, s) {
  let l, c;
  if (a) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === a)) {
        c = d;
        break;
      }
  } else (l = t), (c = t[t.length - 1]);
  let u = zh(o || ".", Fh(l, i), Dr(e.pathname, n) || e.pathname, s === "path");
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      c &&
      c.route.index &&
      !Wh(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : Or([n, u.pathname])),
    Xo(u)
  );
}
function fv(e, t, n, r) {
  if (!r || !m2(r)) return { path: n };
  if (r.formMethod && !S2(r.formMethod))
    return { path: n, error: Sn(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Sn(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    a = e ? i.toUpperCase() : i.toLowerCase(),
    s = ub(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!qn(a)) return o();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((b, g) => {
                let [x, P] = g;
                return (
                  "" +
                  b +
                  x +
                  "=" +
                  P +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!qn(a)) return o();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  ye(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, c;
  if (r.formData) (l = yp(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (l = yp(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (c = gv(l));
  else if (r.body == null) (l = new URLSearchParams()), (c = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (c = gv(l));
    } catch {
      return o();
    }
  let u = {
    formMethod: a,
    formAction: s,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (qn(u.formMethod)) return { path: n, submission: u };
  let d = Wr(n);
  return (
    t && d.search && Wh(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: Xo(d), submission: u }
  );
}
function g2(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function pv(e, t, n, r, o, i, a, s, l, c, u, d, f, b, g, x) {
  let P = x ? Object.values(x)[0] : g ? Object.values(g)[0] : void 0,
    m = e.createURL(t.location),
    p = e.createURL(o),
    v = x ? Object.keys(x)[0] : void 0,
    N = g2(n, v).filter((R, h) => {
      let { route: y } = R;
      if (y.lazy) return !0;
      if (y.loader == null) return !1;
      if (i)
        return y.loader.hydrate
          ? !0
          : t.loaderData[y.id] === void 0 &&
              (!t.errors || t.errors[y.id] === void 0);
      if (v2(t.loaderData, t.matches[h], R) || s.some((k) => k === R.route.id))
        return !0;
      let w = t.matches[h],
        T = R;
      return hv(
        R,
        ot(
          {
            currentUrl: m,
            currentParams: w.params,
            nextUrl: p,
            nextParams: T.params,
          },
          r,
          {
            actionResult: P,
            defaultShouldRevalidate:
              a ||
              m.pathname + m.search === p.pathname + p.search ||
              m.search !== p.search ||
              cb(w, T),
          }
        )
      );
    }),
    C = [];
  return (
    u.forEach((R, h) => {
      if (i || !n.some((M) => M.route.id === R.routeId) || c.has(h)) return;
      let y = Ii(f, R.path, b);
      if (!y) {
        C.push({
          key: h,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let w = t.fetchers.get(h),
        T = xp(y, R.path),
        k = !1;
      d.has(h)
        ? (k = !1)
        : l.includes(h)
          ? (k = !0)
          : w && w.state !== "idle" && w.data === void 0
            ? (k = a)
            : (k = hv(
                T,
                ot(
                  {
                    currentUrl: m,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: p,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  { actionResult: P, defaultShouldRevalidate: a }
                )
              )),
        k &&
          C.push({
            key: h,
            routeId: R.routeId,
            path: R.path,
            matches: y,
            match: T,
            controller: new AbortController(),
          });
    }),
    [N, C]
  );
}
function v2(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function cb(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function hv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function mv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  ye(o, "No route found in manifest");
  let i = {};
  for (let a in r) {
    let l = o[a] !== void 0 && a !== "hasErrorBoundary";
    Zi(
      !l,
      'Route "' +
        o.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !l && !B_.has(a) && (i[a] = r[a]);
  }
  Object.assign(o, i), Object.assign(o, ot({}, t(o), { lazy: void 0 }));
}
async function ja(e, t, n, r, o, i, a, s, l) {
  l === void 0 && (l = {});
  let c,
    u,
    d,
    f = (x) => {
      let P,
        m = new Promise((p, v) => (P = v));
      return (
        (d = () => P()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          x({ request: t, params: n.params, context: l.requestContext }),
          m,
        ])
      );
    };
  try {
    let x = n.route[e];
    if (n.route.lazy)
      if (x) {
        let P,
          m = await Promise.all([
            f(x).catch((p) => {
              P = p;
            }),
            mv(n.route, i, o),
          ]);
        if (P) throw P;
        u = m[0];
      } else if ((await mv(n.route, i, o), (x = n.route[e]), x)) u = await f(x);
      else if (e === "action") {
        let P = new URL(t.url),
          m = P.pathname + P.search;
        throw Sn(405, { method: t.method, pathname: m, routeId: n.route.id });
      } else return { type: tt.data, data: void 0 };
    else if (x) u = await f(x);
    else {
      let P = new URL(t.url),
        m = P.pathname + P.search;
      throw Sn(404, { pathname: m });
    }
    ye(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (x) {
    (c = tt.error), (u = x);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if (w2(u)) {
    let x = u.status;
    if (u2.has(x)) {
      let m = u.headers.get("Location");
      if (
        (ye(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !sb.test(m))
      )
        m = vp(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, m, s);
      else if (!l.isStaticRequest) {
        let p = new URL(t.url),
          v = m.startsWith("//") ? new URL(p.protocol + m) : new URL(m),
          _ = Dr(v.pathname, a) != null;
        v.origin === p.origin && _ && (m = v.pathname + v.search + v.hash);
      }
      if (l.isStaticRequest) throw (u.headers.set("Location", m), u);
      return {
        type: tt.redirect,
        status: x,
        location: m,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: c === tt.error ? tt.error : tt.data, response: u };
    let P;
    try {
      let m = u.headers.get("Content-Type");
      m && /\bapplication\/json\b/.test(m)
        ? u.body == null
          ? (P = null)
          : (P = await u.json())
        : (P = await u.text());
    } catch (m) {
      return { type: tt.error, error: m };
    }
    return c === tt.error
      ? { type: c, error: new Bh(x, u.statusText, P), headers: u.headers }
      : { type: tt.data, data: P, statusCode: u.status, headers: u.headers };
  }
  if (c === tt.error) return { type: c, error: u };
  if (b2(u)) {
    var b, g;
    return {
      type: tt.deferred,
      deferredData: u,
      statusCode: (b = u.init) == null ? void 0 : b.status,
      headers:
        ((g = u.init) == null ? void 0 : g.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: tt.data, data: u };
}
function Da(e, t, n, r) {
  let o = e.createURL(ub(t)).toString(),
    i = { signal: n };
  if (r && qn(r.formMethod)) {
    let { formMethod: a, formEncType: s } = r;
    (i.method = a.toUpperCase()),
      s === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": s })),
          (i.body = JSON.stringify(r.json)))
        : s === "text/plain"
          ? (i.body = r.text)
          : s === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = yp(r.formData))
            : (i.body = r.formData);
  }
  return new Request(o, i);
}
function yp(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function gv(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function y2(e, t, n, r, o) {
  let i = {},
    a = null,
    s,
    l = !1,
    c = {};
  return (
    n.forEach((u, d) => {
      let f = t[d].route.id;
      if (
        (ye(!Fo(u), "Cannot handle redirect results in processLoaderData"),
        Ai(u))
      ) {
        let b = hs(e, f),
          g = u.error;
        r && ((g = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[b.route.id] == null && (a[b.route.id] = g),
          (i[f] = void 0),
          l || ((l = !0), (s = ib(u.error) ? u.error.status : 500)),
          u.headers && (c[f] = u.headers);
      } else
        Lo(u)
          ? (o.set(f, u.deferredData), (i[f] = u.deferredData.data))
          : (i[f] = u.data),
          u.statusCode != null &&
            u.statusCode !== 200 &&
            !l &&
            (s = u.statusCode),
          u.headers && (c[f] = u.headers);
    }),
    r && ((a = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: c }
  );
}
function vv(e, t, n, r, o, i, a, s) {
  let { loaderData: l, errors: c } = y2(t, n, r, o, s);
  for (let u = 0; u < i.length; u++) {
    let { key: d, match: f, controller: b } = i[u];
    ye(
      a !== void 0 && a[u] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let g = a[u];
    if (!(b && b.signal.aborted))
      if (Ai(g)) {
        let x = hs(e.matches, f == null ? void 0 : f.route.id);
        (c && c[x.route.id]) || (c = ot({}, c, { [x.route.id]: g.error })),
          e.fetchers.delete(d);
      } else if (Fo(g)) ye(!1, "Unhandled fetcher revalidation redirect");
      else if (Lo(g)) ye(!1, "Unhandled fetcher deferred data");
      else {
        let x = Qr(g.data);
        e.fetchers.set(d, x);
      }
  }
  return { loaderData: l, errors: c };
}
function yv(e, t, n, r) {
  let o = ot({}, t);
  for (let i of n) {
    let a = i.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (o[a] = t[a])
        : e[a] !== void 0 && i.route.loader && (o[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return o;
}
function hs(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function xv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Sn(e, t) {
  let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        o && n && r
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (s = "defer() is not supported in actions")
            : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((a = "Forbidden"),
          (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = "Method Not Allowed"),
            o && n && r
              ? (s =
                  "You made a " +
                  o.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new Bh(e || 500, a, new Error(s), !0)
  );
}
function bv(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Fo(n)) return { result: n, idx: t };
  }
}
function ub(e) {
  let t = typeof e == "string" ? Wr(e) : e;
  return Xo(ot({}, t, { hash: "" }));
}
function x2(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function Lo(e) {
  return e.type === tt.deferred;
}
function Ai(e) {
  return e.type === tt.error;
}
function Fo(e) {
  return (e && e.type) === tt.redirect;
}
function b2(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function w2(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function S2(e) {
  return c2.has(e.toLowerCase());
}
function qn(e) {
  return s2.has(e.toLowerCase());
}
async function wv(e, t, n, r, o, i) {
  for (let a = 0; a < n.length; a++) {
    let s = n[a],
      l = t[a];
    if (!l) continue;
    let c = e.find((d) => d.route.id === l.route.id),
      u = c != null && !cb(c, l) && (i && i[l.route.id]) !== void 0;
    if (Lo(s) && (o || u)) {
      let d = r[a];
      ye(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await db(s, d, o).then((f) => {
          f && (n[a] = f || n[a]);
        });
    }
  }
}
async function db(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: tt.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: tt.error, error: o };
      }
    return { type: tt.data, data: e.deferredData.data };
  }
}
function Wh(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function xp(e, t) {
  let n = typeof t == "string" ? Wr(t).search : t.search;
  if (e[e.length - 1].route.index && Wh(n || "")) return e[e.length - 1];
  let r = ob(e);
  return r[r.length - 1];
}
function Sv(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function Yd(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function C2(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function La(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function $2(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Qr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function _2(e, t) {
  try {
    let n = e.sessionStorage.getItem(lb);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function P2(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(lb, JSON.stringify(n));
    } catch (r) {
      Zi(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Fs() {
  return (
    (Fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fs.apply(this, arguments)
  );
}
const tl = $.createContext(null),
  Uh = $.createContext(null),
  bo = $.createContext(null),
  Pu = $.createContext(null),
  oi = $.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fb = $.createContext(null);
function E2(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  nl() || ye(!1);
  let { basename: r, navigator: o } = $.useContext(bo),
    { hash: i, pathname: a, search: s } = Eu(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : Or([r, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function nl() {
  return $.useContext(Pu) != null;
}
function rl() {
  return nl() || ye(!1), $.useContext(Pu).location;
}
function pb(e) {
  $.useContext(bo).static || $.useLayoutEffect(e);
}
function k2() {
  let { isDataRoute: e } = $.useContext(oi);
  return e ? z2() : R2();
}
function R2() {
  nl() || ye(!1);
  let e = $.useContext(tl),
    { basename: t, future: n, navigator: r } = $.useContext(bo),
    { matches: o } = $.useContext(oi),
    { pathname: i } = rl(),
    a = JSON.stringify(Fh(o, n.v7_relativeSplatPath)),
    s = $.useRef(!1);
  return (
    pb(() => {
      s.current = !0;
    }),
    $.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = zh(c, JSON.parse(a), i, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Or([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, a, i, e]
    )
  );
}
function Eu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = $.useContext(bo),
    { matches: o } = $.useContext(oi),
    { pathname: i } = rl(),
    a = JSON.stringify(Fh(o, r.v7_relativeSplatPath));
  return $.useMemo(() => zh(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function T2(e, t, n, r) {
  nl() || ye(!1);
  let { navigator: o } = $.useContext(bo),
    { matches: i } = $.useContext(oi),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let c = rl(),
    u;
  if (t) {
    var d;
    let P = typeof t == "string" ? Wr(t) : t;
    l === "/" || ((d = P.pathname) != null && d.startsWith(l)) || ye(!1),
      (u = P);
  } else u = c;
  let f = u.pathname || "/",
    b = f;
  if (l !== "/") {
    let P = l.replace(/^\//, "").split("/");
    b = "/" + f.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let g = Ii(e, { pathname: b }),
    x = N2(
      g &&
        g.map((P) =>
          Object.assign({}, P, {
            params: Object.assign({}, s, P.params),
            pathname: Or([
              l,
              o.encodeLocation
                ? o.encodeLocation(P.pathname).pathname
                : P.pathname,
            ]),
            pathnameBase:
              P.pathnameBase === "/"
                ? l
                : Or([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(P.pathnameBase).pathname
                      : P.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && x
    ? $.createElement(
        Pu.Provider,
        {
          value: {
            location: Fs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: ct.Pop,
          },
        },
        x
      )
    : x;
}
function O2() {
  let e = F2(),
    t = ib(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return $.createElement(
    $.Fragment,
    null,
    $.createElement("h2", null, "Unexpected Application Error!"),
    $.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? $.createElement("pre", { style: o }, n) : null,
    null
  );
}
const M2 = $.createElement(O2, null);
class I2 extends $.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? $.createElement(
          oi.Provider,
          { value: this.props.routeContext },
          $.createElement(fb.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function A2(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = $.useContext(tl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    $.createElement(oi.Provider, { value: t }, r)
  );
}
function N2(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let u = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    u >= 0 || ye(!1), (a = a.slice(0, Math.min(a.length, u + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < a.length; u++) {
      let d = a[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
        d.route.id)
      ) {
        let { loaderData: f, errors: b } = n,
          g =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!b || b[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (l = !0), c >= 0 ? (a = a.slice(0, c + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((u, d, f) => {
    let b,
      g = !1,
      x = null,
      P = null;
    n &&
      ((b = s && d.route.id ? s[d.route.id] : void 0),
      (x = d.route.errorElement || M2),
      l &&
        (c < 0 && f === 0
          ? (B2("route-fallback", !1), (g = !0), (P = null))
          : c === f &&
            ((g = !0), (P = d.route.hydrateFallbackElement || null))));
    let m = t.concat(a.slice(0, f + 1)),
      p = () => {
        let v;
        return (
          b
            ? (v = x)
            : g
              ? (v = P)
              : d.route.Component
                ? (v = $.createElement(d.route.Component, null))
                : d.route.element
                  ? (v = d.route.element)
                  : (v = u),
          $.createElement(A2, {
            match: d,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? $.createElement(I2, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: b,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var hb = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(hb || {}),
  Vc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Vc || {});
function j2(e) {
  let t = $.useContext(tl);
  return t || ye(!1), t;
}
function D2(e) {
  let t = $.useContext(Uh);
  return t || ye(!1), t;
}
function L2(e) {
  let t = $.useContext(oi);
  return t || ye(!1), t;
}
function mb(e) {
  let t = L2(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ye(!1), n.route.id;
}
function F2() {
  var e;
  let t = $.useContext(fb),
    n = D2(Vc.UseRouteError),
    r = mb(Vc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function z2() {
  let { router: e } = j2(hb.UseNavigateStable),
    t = mb(Vc.UseNavigateStable),
    n = $.useRef(!1);
  return (
    pb(() => {
      n.current = !0;
    }),
    $.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Fs({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Cv = {};
function B2(e, t, n) {
  !t && !Cv[e] && (Cv[e] = !0);
}
function W2(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = ct.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  nl() && ye(!1);
  let l = t.replace(/^\/*/, "/"),
    c = $.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: Fs({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    );
  typeof r == "string" && (r = Wr(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: f = "",
      state: b = null,
      key: g = "default",
    } = r,
    x = $.useMemo(() => {
      let P = Dr(u, l);
      return P == null
        ? null
        : {
            location: { pathname: P, search: d, hash: f, state: b, key: g },
            navigationType: o,
          };
    }, [l, u, d, f, b, g, o]);
  return x == null
    ? null
    : $.createElement(
        bo.Provider,
        { value: c },
        $.createElement(Pu.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function U2(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: $.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: $.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: $.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ea() {
  return (
    (ea = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ea.apply(this, arguments)
  );
}
function gb(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function H2(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function V2(e, t) {
  return e.button === 0 && (!t || t === "_self") && !H2(e);
}
const G2 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  K2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Y2 = "6";
try {
  window.__reactRouterVersion = Y2;
} catch {}
function q2(e, t) {
  return h2({
    basename: t == null ? void 0 : t.basename,
    future: ea({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: L_({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Q2(),
    routes: e,
    mapRouteProperties: U2,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Q2() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ea({}, t, { errors: X2(t.errors) })), t;
}
function X2(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new Bh(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let a = new i(o.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const vb = $.createContext({ isTransitioning: !1 }),
  J2 = $.createContext(new Map()),
  Z2 = "startTransition",
  $v = bc[Z2],
  eP = "flushSync",
  _v = D_[eP];
function tP(e) {
  $v ? $v(e) : e();
}
function Fa(e) {
  _v ? _v(e) : e();
}
class nP {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function rP(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = $.useState(n.state),
    [a, s] = $.useState(),
    [l, c] = $.useState({ isTransitioning: !1 }),
    [u, d] = $.useState(),
    [f, b] = $.useState(),
    [g, x] = $.useState(),
    P = $.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    p = $.useCallback(
      (R) => {
        m ? tP(R) : R();
      },
      [m]
    ),
    v = $.useCallback(
      (R, h) => {
        let {
          deletedFetchers: y,
          unstable_flushSync: w,
          unstable_viewTransitionOpts: T,
        } = h;
        y.forEach((M) => P.current.delete(M)),
          R.fetchers.forEach((M, D) => {
            M.data !== void 0 && P.current.set(D, M.data);
          });
        let k =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!T || k) {
          w ? Fa(() => i(R)) : p(() => i(R));
          return;
        }
        if (w) {
          Fa(() => {
            f && (u && u.resolve(), f.skipTransition()),
              c({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: T.currentLocation,
                nextLocation: T.nextLocation,
              });
          });
          let M = n.window.document.startViewTransition(() => {
            Fa(() => i(R));
          });
          M.finished.finally(() => {
            Fa(() => {
              d(void 0), b(void 0), s(void 0), c({ isTransitioning: !1 });
            });
          }),
            Fa(() => b(M));
          return;
        }
        f
          ? (u && u.resolve(),
            f.skipTransition(),
            x({
              state: R,
              currentLocation: T.currentLocation,
              nextLocation: T.nextLocation,
            }))
          : (s(R),
            c({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: T.currentLocation,
              nextLocation: T.nextLocation,
            }));
      },
      [n.window, f, u, P, p]
    );
  $.useLayoutEffect(() => n.subscribe(v), [n, v]),
    $.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new nP());
    }, [l]),
    $.useEffect(() => {
      if (u && a && n.window) {
        let R = a,
          h = u.promise,
          y = n.window.document.startViewTransition(async () => {
            p(() => i(R)), await h;
          });
        y.finished.finally(() => {
          d(void 0), b(void 0), s(void 0), c({ isTransitioning: !1 });
        }),
          b(y);
      }
    }, [p, a, u, n.window]),
    $.useEffect(() => {
      u && a && o.location.key === a.location.key && u.resolve();
    }, [u, f, o.location, a]),
    $.useEffect(() => {
      !l.isTransitioning &&
        g &&
        (s(g.state),
        c({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: g.currentLocation,
          nextLocation: g.nextLocation,
        }),
        x(void 0));
    }, [l.isTransitioning, g]),
    $.useEffect(() => {}, []);
  let _ = $.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, h, y) =>
          n.navigate(R, {
            state: h,
            preventScrollReset: y == null ? void 0 : y.preventScrollReset,
          }),
        replace: (R, h, y) =>
          n.navigate(R, {
            replace: !0,
            state: h,
            preventScrollReset: y == null ? void 0 : y.preventScrollReset,
          }),
      }),
      [n]
    ),
    N = n.basename || "/",
    C = $.useMemo(
      () => ({ router: n, navigator: _, static: !1, basename: N }),
      [n, _, N]
    );
  return $.createElement(
    $.Fragment,
    null,
    $.createElement(
      tl.Provider,
      { value: C },
      $.createElement(
        Uh.Provider,
        { value: o },
        $.createElement(
          J2.Provider,
          { value: P.current },
          $.createElement(
            vb.Provider,
            { value: l },
            $.createElement(
              W2,
              {
                basename: N,
                location: o.location,
                navigationType: o.historyAction,
                navigator: _,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              o.initialized || n.future.v7_partialHydration
                ? $.createElement(oP, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function oP(e) {
  let { routes: t, future: n, state: r } = e;
  return T2(t, void 0, r, n);
}
const iP =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  aP = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  sP = $.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: c,
        preventScrollReset: u,
        unstable_viewTransition: d,
      } = t,
      f = gb(t, G2),
      { basename: b } = $.useContext(bo),
      g,
      x = !1;
    if (typeof c == "string" && aP.test(c) && ((g = c), iP))
      try {
        let v = new URL(window.location.href),
          _ = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
          N = Dr(_.pathname, b);
        _.origin === v.origin && N != null
          ? (c = N + _.search + _.hash)
          : (x = !0);
      } catch {}
    let P = E2(c, { relative: o }),
      m = uP(c, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: u,
        relative: o,
        unstable_viewTransition: d,
      });
    function p(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return $.createElement(
      "a",
      ea({}, f, { href: g || P, onClick: x || i ? r : p, ref: n, target: l })
    );
  }),
  lP = $.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: s,
        to: l,
        unstable_viewTransition: c,
        children: u,
      } = t,
      d = gb(t, K2),
      f = Eu(l, { relative: d.relative }),
      b = rl(),
      g = $.useContext(Uh),
      { navigator: x, basename: P } = $.useContext(bo),
      m = g != null && dP(f) && c === !0,
      p = x.encodeLocation ? x.encodeLocation(f).pathname : f.pathname,
      v = b.pathname,
      _ =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null;
    o ||
      ((v = v.toLowerCase()),
      (_ = _ ? _.toLowerCase() : null),
      (p = p.toLowerCase())),
      _ && P && (_ = Dr(_, P) || _);
    const N = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let C = v === p || (!a && v.startsWith(p) && v.charAt(N) === "/"),
      R =
        _ != null &&
        (_ === p || (!a && _.startsWith(p) && _.charAt(p.length) === "/")),
      h = { isActive: C, isPending: R, isTransitioning: m },
      y = C ? r : void 0,
      w;
    typeof i == "function"
      ? (w = i(h))
      : (w = [
          i,
          C ? "active" : null,
          R ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let T = typeof s == "function" ? s(h) : s;
    return $.createElement(
      sP,
      ea({}, d, {
        "aria-current": y,
        className: w,
        ref: n,
        style: T,
        to: l,
        unstable_viewTransition: c,
      }),
      typeof u == "function" ? u(h) : u
    );
  });
var bp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(bp || (bp = {}));
var Pv;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Pv || (Pv = {}));
function cP(e) {
  let t = $.useContext(tl);
  return t || ye(!1), t;
}
function uP(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = k2(),
    c = rl(),
    u = Eu(e, { relative: a });
  return $.useCallback(
    (d) => {
      if (V2(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Xo(c) === Xo(u);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [c, l, u, r, o, n, e, i, a, s]
  );
}
function dP(e, t) {
  t === void 0 && (t = {});
  let n = $.useContext(vb);
  n == null && ye(!1);
  let { basename: r } = cP(bp.useViewTransitionState),
    o = Eu(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Dr(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = Dr(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return gp(o.pathname, a) != null || gp(o.pathname, i) != null;
}
const fP = { black: "#000", white: "#fff" },
  zs = fP,
  pP = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  ui = pP,
  hP = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  di = hP,
  mP = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  fi = mP,
  gP = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  pi = gP,
  vP = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  hi = vP,
  yP = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  za = yP,
  xP = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  bP = xP;
function Bs(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const wP = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Bs },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ku = "$$material";
function I() {
  return (
    (I = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    I.apply(this, arguments)
  );
}
function X(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function yb(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var SP =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  CP = yb(function (e) {
    return (
      SP.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function $P(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function _P(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var PP = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(_P(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = $P(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  At = "-ms-",
  Gc = "-moz-",
  Oe = "-webkit-",
  xb = "comm",
  Hh = "rule",
  Vh = "decl",
  EP = "@import",
  bb = "@keyframes",
  kP = "@layer",
  RP = Math.abs,
  Ru = String.fromCharCode,
  TP = Object.assign;
function OP(e, t) {
  return Rt(e, 0) ^ 45
    ? (((((((t << 2) ^ Rt(e, 0)) << 2) ^ Rt(e, 1)) << 2) ^ Rt(e, 2)) << 2) ^
        Rt(e, 3)
    : 0;
}
function wb(e) {
  return e.trim();
}
function MP(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Me(e, t, n) {
  return e.replace(t, n);
}
function wp(e, t) {
  return e.indexOf(t);
}
function Rt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ws(e, t, n) {
  return e.slice(t, n);
}
function cr(e) {
  return e.length;
}
function Gh(e) {
  return e.length;
}
function Bl(e, t) {
  return t.push(e), e;
}
function IP(e, t) {
  return e.map(t).join("");
}
var Tu = 1,
  ta = 1,
  Sb = 0,
  nn = 0,
  mt = 0,
  fa = "";
function Ou(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Tu,
    column: ta,
    length: a,
    return: "",
  };
}
function Ba(e, t) {
  return TP(Ou("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function AP() {
  return mt;
}
function NP() {
  return (
    (mt = nn > 0 ? Rt(fa, --nn) : 0), ta--, mt === 10 && ((ta = 1), Tu--), mt
  );
}
function dn() {
  return (
    (mt = nn < Sb ? Rt(fa, nn++) : 0), ta++, mt === 10 && ((ta = 1), Tu++), mt
  );
}
function hr() {
  return Rt(fa, nn);
}
function pc() {
  return nn;
}
function ol(e, t) {
  return Ws(fa, e, t);
}
function Us(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Cb(e) {
  return (Tu = ta = 1), (Sb = cr((fa = e))), (nn = 0), [];
}
function $b(e) {
  return (fa = ""), e;
}
function hc(e) {
  return wb(ol(nn - 1, Sp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function jP(e) {
  for (; (mt = hr()) && mt < 33; ) dn();
  return Us(e) > 2 || Us(mt) > 3 ? "" : " ";
}
function DP(e, t) {
  for (
    ;
    --t &&
    dn() &&
    !(mt < 48 || mt > 102 || (mt > 57 && mt < 65) || (mt > 70 && mt < 97));

  );
  return ol(e, pc() + (t < 6 && hr() == 32 && dn() == 32));
}
function Sp(e) {
  for (; dn(); )
    switch (mt) {
      case e:
        return nn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sp(mt);
        break;
      case 40:
        e === 41 && Sp(e);
        break;
      case 92:
        dn();
        break;
    }
  return nn;
}
function LP(e, t) {
  for (; dn() && e + mt !== 57; ) if (e + mt === 84 && hr() === 47) break;
  return "/*" + ol(t, nn - 1) + "*" + Ru(e === 47 ? e : dn());
}
function FP(e) {
  for (; !Us(hr()); ) dn();
  return ol(e, nn);
}
function zP(e) {
  return $b(mc("", null, null, null, [""], (e = Cb(e)), 0, [0], e));
}
function mc(e, t, n, r, o, i, a, s, l) {
  for (
    var c = 0,
      u = 0,
      d = a,
      f = 0,
      b = 0,
      g = 0,
      x = 1,
      P = 1,
      m = 1,
      p = 0,
      v = "",
      _ = o,
      N = i,
      C = r,
      R = v;
    P;

  )
    switch (((g = p), (p = dn()))) {
      case 40:
        if (g != 108 && Rt(R, d - 1) == 58) {
          wp((R += Me(hc(p), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += hc(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += jP(g);
        break;
      case 92:
        R += DP(pc() - 1, 7);
        continue;
      case 47:
        switch (hr()) {
          case 42:
          case 47:
            Bl(BP(LP(dn(), pc()), t, n), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * x:
        s[c++] = cr(R) * m;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            P = 0;
          case 59 + u:
            m == -1 && (R = Me(R, /\f/g, "")),
              b > 0 &&
                cr(R) - d &&
                Bl(
                  b > 32
                    ? kv(R + ";", r, n, d - 1)
                    : kv(Me(R, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            R += ";";
          default:
            if (
              (Bl((C = Ev(R, t, n, c, u, o, s, v, (_ = []), (N = []), d)), i),
              p === 123)
            )
              if (u === 0) mc(R, t, C, C, _, i, d, s, N);
              else
                switch (f === 99 && Rt(R, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    mc(
                      e,
                      C,
                      C,
                      r && Bl(Ev(e, C, C, 0, 0, o, s, v, o, (_ = []), d), N),
                      o,
                      N,
                      d,
                      s,
                      r ? _ : N
                    );
                    break;
                  default:
                    mc(R, C, C, C, [""], N, 0, s, N);
                }
        }
        (c = u = b = 0), (x = m = 1), (v = R = ""), (d = a);
        break;
      case 58:
        (d = 1 + cr(R)), (b = g);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && NP() == 125) continue;
        }
        switch (((R += Ru(p)), p * x)) {
          case 38:
            m = u > 0 ? 1 : ((R += "\f"), -1);
            break;
          case 44:
            (s[c++] = (cr(R) - 1) * m), (m = 1);
            break;
          case 64:
            hr() === 45 && (R += hc(dn())),
              (f = hr()),
              (u = d = cr((v = R += FP(pc())))),
              p++;
            break;
          case 45:
            g === 45 && cr(R) == 2 && (x = 0);
        }
    }
  return i;
}
function Ev(e, t, n, r, o, i, a, s, l, c, u) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], b = Gh(f), g = 0, x = 0, P = 0;
    g < r;
    ++g
  )
    for (var m = 0, p = Ws(e, d + 1, (d = RP((x = a[g])))), v = e; m < b; ++m)
      (v = wb(x > 0 ? f[m] + " " + p : Me(p, /&\f/g, f[m]))) && (l[P++] = v);
  return Ou(e, t, n, o === 0 ? Hh : s, l, c, u);
}
function BP(e, t, n) {
  return Ou(e, t, n, xb, Ru(AP()), Ws(e, 2, -2), 0);
}
function kv(e, t, n, r) {
  return Ou(e, t, n, Vh, Ws(e, 0, r), Ws(e, r + 1, -1), r);
}
function Ui(e, t) {
  for (var n = "", r = Gh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function WP(e, t, n, r) {
  switch (e.type) {
    case kP:
      if (e.children.length) break;
    case EP:
    case Vh:
      return (e.return = e.return || e.value);
    case xb:
      return "";
    case bb:
      return (e.return = e.value + "{" + Ui(e.children, r) + "}");
    case Hh:
      e.value = e.props.join(",");
  }
  return cr((n = Ui(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function UP(e) {
  var t = Gh(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function HP(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var VP = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = hr()), o === 38 && i === 12 && (n[r] = 1), !Us(i);

    )
      dn();
    return ol(t, nn);
  },
  GP = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Us(o)) {
        case 0:
          o === 38 && hr() === 12 && (n[r] = 1), (t[r] += VP(nn - 1, n, r));
          break;
        case 2:
          t[r] += hc(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = hr() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ru(o);
      }
    while ((o = dn()));
    return t;
  },
  KP = function (t, n) {
    return $b(GP(Cb(t), n));
  },
  Rv = new WeakMap(),
  YP = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Rv.get(r)) &&
        !o
      ) {
        Rv.set(t, !0);
        for (
          var i = [], a = KP(n, i), s = r.props, l = 0, c = 0;
          l < a.length;
          l++
        )
          for (var u = 0; u < s.length; u++, c++)
            t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
      }
    }
  },
  qP = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function _b(e, t) {
  switch (OP(e, t)) {
    case 5103:
      return Oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + Gc + e + At + e + e;
    case 6828:
    case 4268:
      return Oe + e + At + e + e;
    case 6165:
      return Oe + e + At + "flex-" + e + e;
    case 5187:
      return (
        Oe + e + Me(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + At + "flex-$1$2") + e
      );
    case 5443:
      return Oe + e + At + "flex-item-" + Me(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        Oe +
        e +
        At +
        "flex-line-pack" +
        Me(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return Oe + e + At + Me(e, "shrink", "negative") + e;
    case 5292:
      return Oe + e + At + Me(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        Oe +
        "box-" +
        Me(e, "-grow", "") +
        Oe +
        e +
        At +
        Me(e, "grow", "positive") +
        e
      );
    case 4554:
      return Oe + Me(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    case 6187:
      return (
        Me(
          Me(Me(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return Me(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    case 4968:
      return (
        Me(
          Me(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + At + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Oe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Me(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (cr(e) - 1 - t > 6)
        switch (Rt(e, t + 1)) {
          case 109:
            if (Rt(e, t + 4) !== 45) break;
          case 102:
            return (
              Me(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Oe +
                  "$2-$3$1" +
                  Gc +
                  (Rt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~wp(e, "stretch")
              ? _b(Me(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Rt(e, t + 1) !== 115) break;
    case 6444:
      switch (Rt(e, cr(e) - 3 - (~wp(e, "!important") && 10))) {
        case 107:
          return Me(e, ":", ":" + Oe) + e;
        case 101:
          return (
            Me(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Oe +
                (Rt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Oe +
                "$2$3$1" +
                At +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Rt(e, t + 11)) {
        case 114:
          return Oe + e + At + Me(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Oe + e + At + Me(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Oe + e + At + Me(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + At + e + e;
  }
  return e;
}
var QP = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Vh:
          t.return = _b(t.value, t.length);
          break;
        case bb:
          return Ui([Ba(t, { value: Me(t.value, "@", "@" + Oe) })], o);
        case Hh:
          if (t.length)
            return IP(t.props, function (i) {
              switch (MP(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Ui(
                    [Ba(t, { props: [Me(i, /:(read-\w+)/, ":" + Gc + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Ui(
                    [
                      Ba(t, {
                        props: [Me(i, /:(plac\w+)/, ":" + Oe + "input-$1")],
                      }),
                      Ba(t, { props: [Me(i, /:(plac\w+)/, ":" + Gc + "$1")] }),
                      Ba(t, { props: [Me(i, /:(plac\w+)/, At + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  XP = [QP],
  Pb = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (x) {
        var P = x.getAttribute("data-emotion");
        P.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || XP,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (x) {
          for (
            var P = x.getAttribute("data-emotion").split(" "), m = 1;
            m < P.length;
            m++
          )
            i[P[m]] = !0;
          s.push(x);
        }
      );
    var l,
      c = [YP, qP];
    {
      var u,
        d = [
          WP,
          HP(function (x) {
            u.insert(x);
          }),
        ],
        f = UP(c.concat(o, d)),
        b = function (P) {
          return Ui(zP(P), f);
        };
      l = function (P, m, p, v) {
        (u = p),
          b(P ? P + "{" + m.styles + "}" : m.styles),
          v && (g.inserted[m.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new PP({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return g.sheet.hydrate(s), g;
  },
  Eb = { exports: {} },
  De = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pt = typeof Symbol == "function" && Symbol.for,
  Kh = Pt ? Symbol.for("react.element") : 60103,
  Yh = Pt ? Symbol.for("react.portal") : 60106,
  Mu = Pt ? Symbol.for("react.fragment") : 60107,
  Iu = Pt ? Symbol.for("react.strict_mode") : 60108,
  Au = Pt ? Symbol.for("react.profiler") : 60114,
  Nu = Pt ? Symbol.for("react.provider") : 60109,
  ju = Pt ? Symbol.for("react.context") : 60110,
  qh = Pt ? Symbol.for("react.async_mode") : 60111,
  Du = Pt ? Symbol.for("react.concurrent_mode") : 60111,
  Lu = Pt ? Symbol.for("react.forward_ref") : 60112,
  Fu = Pt ? Symbol.for("react.suspense") : 60113,
  JP = Pt ? Symbol.for("react.suspense_list") : 60120,
  zu = Pt ? Symbol.for("react.memo") : 60115,
  Bu = Pt ? Symbol.for("react.lazy") : 60116,
  ZP = Pt ? Symbol.for("react.block") : 60121,
  eE = Pt ? Symbol.for("react.fundamental") : 60117,
  tE = Pt ? Symbol.for("react.responder") : 60118,
  nE = Pt ? Symbol.for("react.scope") : 60119;
function gn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Kh:
        switch (((e = e.type), e)) {
          case qh:
          case Du:
          case Mu:
          case Au:
          case Iu:
          case Fu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case ju:
              case Lu:
              case Bu:
              case zu:
              case Nu:
                return e;
              default:
                return t;
            }
        }
      case Yh:
        return t;
    }
  }
}
function kb(e) {
  return gn(e) === Du;
}
De.AsyncMode = qh;
De.ConcurrentMode = Du;
De.ContextConsumer = ju;
De.ContextProvider = Nu;
De.Element = Kh;
De.ForwardRef = Lu;
De.Fragment = Mu;
De.Lazy = Bu;
De.Memo = zu;
De.Portal = Yh;
De.Profiler = Au;
De.StrictMode = Iu;
De.Suspense = Fu;
De.isAsyncMode = function (e) {
  return kb(e) || gn(e) === qh;
};
De.isConcurrentMode = kb;
De.isContextConsumer = function (e) {
  return gn(e) === ju;
};
De.isContextProvider = function (e) {
  return gn(e) === Nu;
};
De.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kh;
};
De.isForwardRef = function (e) {
  return gn(e) === Lu;
};
De.isFragment = function (e) {
  return gn(e) === Mu;
};
De.isLazy = function (e) {
  return gn(e) === Bu;
};
De.isMemo = function (e) {
  return gn(e) === zu;
};
De.isPortal = function (e) {
  return gn(e) === Yh;
};
De.isProfiler = function (e) {
  return gn(e) === Au;
};
De.isStrictMode = function (e) {
  return gn(e) === Iu;
};
De.isSuspense = function (e) {
  return gn(e) === Fu;
};
De.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Mu ||
    e === Du ||
    e === Au ||
    e === Iu ||
    e === Fu ||
    e === JP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Bu ||
        e.$$typeof === zu ||
        e.$$typeof === Nu ||
        e.$$typeof === ju ||
        e.$$typeof === Lu ||
        e.$$typeof === eE ||
        e.$$typeof === tE ||
        e.$$typeof === nE ||
        e.$$typeof === ZP))
  );
};
De.typeOf = gn;
Eb.exports = De;
var rE = Eb.exports,
  Rb = rE,
  oE = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  iE = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Tb = {};
Tb[Rb.ForwardRef] = oE;
Tb[Rb.Memo] = iE;
var aE = !0;
function sE(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Ob = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || aE === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Mb = function (t, n, r) {
    Ob(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function lE(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var cE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  uE = /[A-Z]|^ms/g,
  dE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Ib = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Tv = function (t) {
    return t != null && typeof t != "boolean";
  },
  qd = yb(function (e) {
    return Ib(e) ? e : e.replace(uE, "-$&").toLowerCase();
  }),
  Ov = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(dE, function (r, o, i) {
            return (ur = { name: o, styles: i, next: ur }), o;
          });
    }
    return cE[t] !== 1 && !Ib(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Hs(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (ur = { name: n.name, styles: n.styles, next: ur }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (ur = { name: r.name, styles: r.styles, next: ur }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return fE(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = ur,
          a = n(e);
        return (ur = i), Hs(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function fE(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Hs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : Tv(a) && (r += qd(i) + ":" + Ov(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          Tv(a[s]) && (r += qd(i) + ":" + Ov(i, a[s]) + ";");
      else {
        var l = Hs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += qd(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Mv = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ur,
  Qh = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    ur = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Hs(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += Hs(r, n, t[s])), o && (i += a[s]);
    Mv.lastIndex = 0;
    for (var l = "", c; (c = Mv.exec(i)) !== null; ) l += "-" + c[1];
    var u = lE(i) + l;
    return { name: u, styles: i, next: ur };
  },
  pE = function (t) {
    return t();
  },
  Ab = bc.useInsertionEffect ? bc.useInsertionEffect : !1,
  hE = Ab || pE,
  Iv = Ab || $.useLayoutEffect,
  Nb = $.createContext(typeof HTMLElement < "u" ? Pb({ key: "css" }) : null),
  mE = Nb.Provider,
  jb = function (t) {
    return $.forwardRef(function (n, r) {
      var o = $.useContext(Nb);
      return t(n, o, r);
    });
  },
  Wu = $.createContext({}),
  Qd = { exports: {} },
  Av;
function Db() {
  return (
    Av ||
      ((Av = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Qd)),
    Qd.exports
  );
}
Db();
var gE = jb(function (e, t) {
  var n = e.styles,
    r = Qh([n], void 0, $.useContext(Wu)),
    o = $.useRef();
  return (
    Iv(
      function () {
        var i = t.key + "-global",
          a = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          s = !1,
          l = document.querySelector(
            'style[data-emotion="' + i + " " + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (a.before = t.sheet.tags[0]),
          l !== null &&
            ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
          (o.current = [a, s]),
          function () {
            a.flush();
          }
        );
      },
      [t]
    ),
    Iv(
      function () {
        var i = o.current,
          a = i[0],
          s = i[1];
        if (s) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && Mb(t, r.next, !0), a.tags.length)) {
          var l = a.tags[a.tags.length - 1].nextElementSibling;
          (a.before = l), a.flush();
        }
        t.insert("", r, a, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function Lb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Qh(t);
}
var Uu = function () {
    var t = Lb.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  vE = CP,
  yE = function (t) {
    return t !== "theme";
  },
  Nv = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? vE : yE;
  },
  jv = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  xE = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Ob(n, r, o),
      hE(function () {
        return Mb(n, r, o);
      }),
      null
    );
  },
  bE = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = jv(t, n, r),
      l = s || Nv(o),
      c = !l("as");
    return function () {
      var u = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        u[0] == null || u[0].raw === void 0)
      )
        d.push.apply(d, u);
      else {
        d.push(u[0][0]);
        for (var f = u.length, b = 1; b < f; b++) d.push(u[b], u[0][b]);
      }
      var g = jb(function (x, P, m) {
        var p = (c && x.as) || o,
          v = "",
          _ = [],
          N = x;
        if (x.theme == null) {
          N = {};
          for (var C in x) N[C] = x[C];
          N.theme = $.useContext(Wu);
        }
        typeof x.className == "string"
          ? (v = sE(P.registered, _, x.className))
          : x.className != null && (v = x.className + " ");
        var R = Qh(d.concat(_), P.registered, N);
        (v += P.key + "-" + R.name), a !== void 0 && (v += " " + a);
        var h = c && s === void 0 ? Nv(p) : l,
          y = {};
        for (var w in x) (c && w === "as") || (h(w) && (y[w] = x[w]));
        return (
          (y.className = v),
          (y.ref = m),
          $.createElement(
            $.Fragment,
            null,
            $.createElement(xE, {
              cache: P,
              serialized: R,
              isStringTag: typeof p == "string",
            }),
            $.createElement(p, y)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = o),
        (g.__emotion_styles = d),
        (g.__emotion_forwardProp = s),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (g.withComponent = function (x, P) {
          return e(x, I({}, n, P, { shouldForwardProp: jv(g, P, !0) })).apply(
            void 0,
            d
          );
        }),
        g
      );
    };
  },
  wE = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Kc = bE.bind();
wE.forEach(function (e) {
  Kc[e] = Kc(e);
});
let Cp;
typeof document == "object" && (Cp = Pb({ key: "css", prepend: !0 }));
function SE(e) {
  const { injectFirst: t, children: n } = e;
  return t && Cp ? S.jsx(mE, { value: Cp, children: n }) : n;
}
function CE(e) {
  return e == null || Object.keys(e).length === 0;
}
function $E(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(CE(o) ? n : o) : t;
  return S.jsx(gE, { styles: r });
}
function Xh(e, t) {
  return Kc(e, t);
}
const Fb = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  _E = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: $E,
        StyledEngineProvider: SE,
        ThemeContext: Wu,
        css: Lb,
        default: Xh,
        internal_processStyles: Fb,
        keyframes: Uu,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Pr(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function zb(e) {
  if (!Pr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = zb(e[n]);
    }),
    t
  );
}
function In(e, t, n = { clone: !0 }) {
  const r = n.clone ? I({}, e) : e;
  return (
    Pr(e) &&
      Pr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Pr(t[o]) && o in e && Pr(e[o])
            ? (r[o] = In(e[o], t[o], n))
            : n.clone
              ? (r[o] = Pr(t[o]) ? zb(t[o]) : t[o])
              : (r[o] = t[o]));
      }),
    r
  );
}
const PE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: In, isPlainObject: Pr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  EE = ["values", "unit", "step"],
  kE = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => I({}, n, { [r.key]: r.val }), {})
    );
  };
function Bb(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = X(e, EE),
    i = kE(t),
    a = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function c(f, b) {
    const g = a.indexOf(b);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(g !== -1 && typeof t[a[g]] == "number" ? t[a[g]] : b) - r / 100}${n})`;
  }
  function u(f) {
    return a.indexOf(f) + 1 < a.length ? c(f, a[a.indexOf(f) + 1]) : s(f);
  }
  function d(f) {
    const b = a.indexOf(f);
    return b === 0
      ? s(a[1])
      : b === a.length - 1
        ? l(a[b])
        : c(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return I(
    {
      keys: a,
      values: i,
      up: s,
      down: l,
      between: c,
      only: u,
      not: d,
      unit: n,
    },
    o
  );
}
const RE = { borderRadius: 4 },
  TE = RE;
function ms(e, t) {
  return t ? In(e, t, { clone: !1 }) : e;
}
const Jh = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Dv = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Jh[e]}px)`,
  };
function rn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Dv;
    return t.reduce((a, s, l) => ((a[i.up(i.keys[l])] = n(t[l])), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Dv;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || Jh).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function Wb(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function Ub(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function OE(e, ...t) {
  const n = Wb(e),
    r = [n, ...t].reduce((o, i) => In(o, i), {});
  return Ub(Object.keys(n), r);
}
function ME(e, t) {
  if (typeof e != "object") return {};
  const n = {},
    r = Object.keys(t);
  return (
    Array.isArray(e)
      ? r.forEach((o, i) => {
          i < e.length && (n[o] = !0);
        })
      : r.forEach((o) => {
          e[o] != null && (n[o] = !0);
        }),
    n
  );
}
function Ho({ values: e, breakpoints: t, base: n }) {
  const r = n || ME(e, t),
    o = Object.keys(r);
  if (o.length === 0) return e;
  let i;
  return o.reduce(
    (a, s, l) => (
      Array.isArray(e)
        ? ((a[s] = e[l] != null ? e[l] : e[i]), (i = l))
        : typeof e == "object"
          ? ((a[s] = e[s] != null ? e[s] : e[i]), (i = s))
          : (a[s] = e),
      a
    ),
    {}
  );
}
function G(e) {
  if (typeof e != "string") throw new Error(Bs(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const IE = Object.freeze(
  Object.defineProperty({ __proto__: null, default: G }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Hu(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Yc(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = Hu(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function dt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        l = a.theme,
        c = Hu(l, r) || {};
      return rn(a, s, (d) => {
        let f = Yc(c, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = Yc(c, o, `${t}${d === "default" ? "" : G(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function AE(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const NE = { m: "margin", p: "padding" },
  jE = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Lv = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  DE = AE((e) => {
    if (e.length > 2)
      if (Lv[e]) e = Lv[e];
      else return [e];
    const [t, n] = e.split(""),
      r = NE[t],
      o = jE[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Zh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  em = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Zh, ...em];
function il(e, t, n, r) {
  var o;
  const i = (o = Hu(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (a) => (typeof a == "string" ? a : i * a)
    : Array.isArray(i)
      ? (a) => (typeof a == "string" ? a : i[a])
      : typeof i == "function"
        ? i
        : () => {};
}
function tm(e) {
  return il(e, "spacing", 8);
}
function Jo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function LE(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Jo(t, n)), r), {});
}
function FE(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = DE(n),
    i = LE(o, r),
    a = e[n];
  return rn(e, a, i);
}
function Hb(e, t) {
  const n = tm(e.theme);
  return Object.keys(e)
    .map((r) => FE(e, t, r, n))
    .reduce(ms, {});
}
function Ze(e) {
  return Hb(e, Zh);
}
Ze.propTypes = {};
Ze.filterProps = Zh;
function et(e) {
  return Hb(e, em);
}
et.propTypes = {};
et.filterProps = em;
function zE(e = 8) {
  if (e.mui) return e;
  const t = tm({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i);
          return typeof a == "number" ? `${a}px` : a;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Vu(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? ms(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function En(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function zn(e, t) {
  return dt({ prop: e, themeKey: "borders", transform: t });
}
const BE = zn("border", En),
  WE = zn("borderTop", En),
  UE = zn("borderRight", En),
  HE = zn("borderBottom", En),
  VE = zn("borderLeft", En),
  GE = zn("borderColor"),
  KE = zn("borderTopColor"),
  YE = zn("borderRightColor"),
  qE = zn("borderBottomColor"),
  QE = zn("borderLeftColor"),
  XE = zn("outline", En),
  JE = zn("outlineColor"),
  Gu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = il(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Jo(t, r) });
      return rn(e, e.borderRadius, n);
    }
    return null;
  };
Gu.propTypes = {};
Gu.filterProps = ["borderRadius"];
Vu(BE, WE, UE, HE, VE, GE, KE, YE, qE, QE, Gu, XE, JE);
const Ku = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = il(e.theme, "spacing", 8),
      n = (r) => ({ gap: Jo(t, r) });
    return rn(e, e.gap, n);
  }
  return null;
};
Ku.propTypes = {};
Ku.filterProps = ["gap"];
const Yu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = il(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Jo(t, r) });
    return rn(e, e.columnGap, n);
  }
  return null;
};
Yu.propTypes = {};
Yu.filterProps = ["columnGap"];
const qu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = il(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Jo(t, r) });
    return rn(e, e.rowGap, n);
  }
  return null;
};
qu.propTypes = {};
qu.filterProps = ["rowGap"];
const ZE = dt({ prop: "gridColumn" }),
  ek = dt({ prop: "gridRow" }),
  tk = dt({ prop: "gridAutoFlow" }),
  nk = dt({ prop: "gridAutoColumns" }),
  rk = dt({ prop: "gridAutoRows" }),
  ok = dt({ prop: "gridTemplateColumns" }),
  ik = dt({ prop: "gridTemplateRows" }),
  ak = dt({ prop: "gridTemplateAreas" }),
  sk = dt({ prop: "gridArea" });
Vu(Ku, Yu, qu, ZE, ek, tk, nk, rk, ok, ik, ak, sk);
function Hi(e, t) {
  return t === "grey" ? t : e;
}
const lk = dt({ prop: "color", themeKey: "palette", transform: Hi }),
  ck = dt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Hi,
  }),
  uk = dt({ prop: "backgroundColor", themeKey: "palette", transform: Hi });
Vu(lk, ck, uk);
function ln(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const dk = dt({ prop: "width", transform: ln }),
  nm = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Jh[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: ln(n) };
      };
      return rn(e, e.maxWidth, t);
    }
    return null;
  };
nm.filterProps = ["maxWidth"];
const fk = dt({ prop: "minWidth", transform: ln }),
  pk = dt({ prop: "height", transform: ln }),
  hk = dt({ prop: "maxHeight", transform: ln }),
  mk = dt({ prop: "minHeight", transform: ln });
dt({ prop: "size", cssProperty: "width", transform: ln });
dt({ prop: "size", cssProperty: "height", transform: ln });
const gk = dt({ prop: "boxSizing" });
Vu(dk, nm, fk, pk, hk, mk, gk);
const vk = {
    border: { themeKey: "borders", transform: En },
    borderTop: { themeKey: "borders", transform: En },
    borderRight: { themeKey: "borders", transform: En },
    borderBottom: { themeKey: "borders", transform: En },
    borderLeft: { themeKey: "borders", transform: En },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: En },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Gu },
    color: { themeKey: "palette", transform: Hi },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Hi,
    },
    backgroundColor: { themeKey: "palette", transform: Hi },
    p: { style: et },
    pt: { style: et },
    pr: { style: et },
    pb: { style: et },
    pl: { style: et },
    px: { style: et },
    py: { style: et },
    padding: { style: et },
    paddingTop: { style: et },
    paddingRight: { style: et },
    paddingBottom: { style: et },
    paddingLeft: { style: et },
    paddingX: { style: et },
    paddingY: { style: et },
    paddingInline: { style: et },
    paddingInlineStart: { style: et },
    paddingInlineEnd: { style: et },
    paddingBlock: { style: et },
    paddingBlockStart: { style: et },
    paddingBlockEnd: { style: et },
    m: { style: Ze },
    mt: { style: Ze },
    mr: { style: Ze },
    mb: { style: Ze },
    ml: { style: Ze },
    mx: { style: Ze },
    my: { style: Ze },
    margin: { style: Ze },
    marginTop: { style: Ze },
    marginRight: { style: Ze },
    marginBottom: { style: Ze },
    marginLeft: { style: Ze },
    marginX: { style: Ze },
    marginY: { style: Ze },
    marginInline: { style: Ze },
    marginInlineStart: { style: Ze },
    marginInlineEnd: { style: Ze },
    marginBlock: { style: Ze },
    marginBlockStart: { style: Ze },
    marginBlockEnd: { style: Ze },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Ku },
    rowGap: { style: qu },
    columnGap: { style: Yu },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: ln },
    maxWidth: { style: nm },
    minWidth: { transform: ln },
    height: { transform: ln },
    maxHeight: { transform: ln },
    minHeight: { transform: ln },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  al = vk;
function yk(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function xk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vb() {
  function e(n, r, o, i) {
    const a = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: l = n, themeKey: c, transform: u, style: d } = s;
    if (r == null) return null;
    if (c === "typography" && r === "inherit") return { [n]: r };
    const f = Hu(o, c) || {};
    return d
      ? d(a)
      : rn(a, r, (g) => {
          let x = Yc(f, u, g);
          return (
            g === x &&
              typeof g == "string" &&
              (x = Yc(f, u, `${n}${g === "default" ? "" : G(g)}`, g)),
            l === !1 ? x : { [l]: x }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const a = (r = i.unstable_sxConfig) != null ? r : al;
    function s(l) {
      let c = l;
      if (typeof l == "function") c = l(i);
      else if (typeof l != "object") return l;
      if (!c) return null;
      const u = Wb(i.breakpoints),
        d = Object.keys(u);
      let f = u;
      return (
        Object.keys(c).forEach((b) => {
          const g = xk(c[b], i);
          if (g != null)
            if (typeof g == "object")
              if (a[b]) f = ms(f, e(b, g, i, a));
              else {
                const x = rn({ theme: i }, g, (P) => ({ [b]: P }));
                yk(x, g) ? (f[b] = t({ sx: g, theme: i })) : (f = ms(f, x));
              }
            else f = ms(f, e(b, g, i, a));
        }),
        Ub(d, f)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Gb = Vb();
Gb.filterProps = ["sx"];
const sl = Gb;
function Kb(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
      ? t
      : {};
}
const bk = ["breakpoints", "palette", "spacing", "shape"];
function pa(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    a = X(e, bk),
    s = Bb(n),
    l = zE(o);
  let c = In(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: I({ mode: "light" }, r),
      spacing: l,
      shape: I({}, TE, i),
    },
    a
  );
  return (
    (c.applyStyles = Kb),
    (c = t.reduce((u, d) => In(u, d), c)),
    (c.unstable_sxConfig = I({}, al, a == null ? void 0 : a.unstable_sxConfig)),
    (c.unstable_sx = function (d) {
      return sl({ sx: d, theme: this });
    }),
    c
  );
}
const wk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: pa,
      private_createBreakpoints: Bb,
      unstable_applyStyles: Kb,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Sk(e) {
  return Object.keys(e).length === 0;
}
function Ck(e = null) {
  const t = $.useContext(Wu);
  return !t || Sk(t) ? e : t;
}
const $k = pa();
function rm(e = $k) {
  return Ck(e);
}
const _k = ["sx"],
  Pk = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : al;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function ll(e) {
  const { sx: t } = e,
    n = X(e, _k),
    { systemProps: r, otherProps: o } = Pk(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
        ? (i = (...a) => {
            const s = t(...a);
            return Pr(s) ? I({}, r, s) : r;
          })
        : (i = I({}, r, t)),
    I({}, o, { sx: i })
  );
}
const Ek = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: sl,
        extendSxProp: ll,
        unstable_createStyleFunctionSx: Vb,
        unstable_defaultSxConfig: al,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fv = (e) => e,
  kk = () => {
    let e = Fv;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Fv;
      },
    };
  },
  Rk = kk(),
  om = Rk;
function Yb(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Yb(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function q() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Yb(e)) && (r && (r += " "), (r += t));
  return r;
}
const Tk = ["className", "component"];
function Ok(e = {}) {
  const {
      themeId: t,
      defaultTheme: n,
      defaultClassName: r = "MuiBox-root",
      generateClassName: o,
    } = e,
    i = Xh("div", {
      shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
    })(sl);
  return $.forwardRef(function (l, c) {
    const u = rm(n),
      d = ll(l),
      { className: f, component: b = "div" } = d,
      g = X(d, Tk);
    return S.jsx(
      i,
      I(
        {
          as: b,
          ref: c,
          className: q(f, o ? o(r) : r),
          theme: (t && u[t]) || u,
        },
        g
      )
    );
  });
}
const qb = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function we(e, t, n = "Mui") {
  const r = qb[t];
  return r ? `${n}-${r}` : `${om.generate(e)}-${t}`;
}
function xe(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = we(e, o, n);
    }),
    r
  );
}
var Qb = { exports: {} },
  Le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im = Symbol.for("react.element"),
  am = Symbol.for("react.portal"),
  Qu = Symbol.for("react.fragment"),
  Xu = Symbol.for("react.strict_mode"),
  Ju = Symbol.for("react.profiler"),
  Zu = Symbol.for("react.provider"),
  ed = Symbol.for("react.context"),
  Mk = Symbol.for("react.server_context"),
  td = Symbol.for("react.forward_ref"),
  nd = Symbol.for("react.suspense"),
  rd = Symbol.for("react.suspense_list"),
  od = Symbol.for("react.memo"),
  id = Symbol.for("react.lazy"),
  Ik = Symbol.for("react.offscreen"),
  Xb;
Xb = Symbol.for("react.module.reference");
function Bn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case im:
        switch (((e = e.type), e)) {
          case Qu:
          case Ju:
          case Xu:
          case nd:
          case rd:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Mk:
              case ed:
              case td:
              case id:
              case od:
              case Zu:
                return e;
              default:
                return t;
            }
        }
      case am:
        return t;
    }
  }
}
Le.ContextConsumer = ed;
Le.ContextProvider = Zu;
Le.Element = im;
Le.ForwardRef = td;
Le.Fragment = Qu;
Le.Lazy = id;
Le.Memo = od;
Le.Portal = am;
Le.Profiler = Ju;
Le.StrictMode = Xu;
Le.Suspense = nd;
Le.SuspenseList = rd;
Le.isAsyncMode = function () {
  return !1;
};
Le.isConcurrentMode = function () {
  return !1;
};
Le.isContextConsumer = function (e) {
  return Bn(e) === ed;
};
Le.isContextProvider = function (e) {
  return Bn(e) === Zu;
};
Le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === im;
};
Le.isForwardRef = function (e) {
  return Bn(e) === td;
};
Le.isFragment = function (e) {
  return Bn(e) === Qu;
};
Le.isLazy = function (e) {
  return Bn(e) === id;
};
Le.isMemo = function (e) {
  return Bn(e) === od;
};
Le.isPortal = function (e) {
  return Bn(e) === am;
};
Le.isProfiler = function (e) {
  return Bn(e) === Ju;
};
Le.isStrictMode = function (e) {
  return Bn(e) === Xu;
};
Le.isSuspense = function (e) {
  return Bn(e) === nd;
};
Le.isSuspenseList = function (e) {
  return Bn(e) === rd;
};
Le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Qu ||
    e === Ju ||
    e === Xu ||
    e === nd ||
    e === rd ||
    e === Ik ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === id ||
        e.$$typeof === od ||
        e.$$typeof === Zu ||
        e.$$typeof === ed ||
        e.$$typeof === td ||
        e.$$typeof === Xb ||
        e.getModuleId !== void 0))
  );
};
Le.typeOf = Bn;
Qb.exports = Le;
var zv = Qb.exports;
const Ak = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Jb(e) {
  const t = `${e}`.match(Ak);
  return (t && t[1]) || "";
}
function Zb(e, t = "") {
  return e.displayName || e.name || Jb(e) || t;
}
function Bv(e, t, n) {
  const r = Zb(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Nk(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return Zb(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zv.ForwardRef:
          return Bv(e, e.render, "ForwardRef");
        case zv.Memo:
          return Bv(e, e.type, "memo");
        default:
          return;
      }
  }
}
const jk = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Nk, getFunctionName: Jb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Dk = ["ownerState"],
  Lk = ["variants"],
  Fk = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function zk(e) {
  return Object.keys(e).length === 0;
}
function Bk(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Xd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Wk = pa(),
  Uk = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Wl({ defaultTheme: e, theme: t, themeId: n }) {
  return zk(t) ? e : t[n] || t;
}
function Hk(e) {
  return e ? (t, n) => n[e] : null;
}
function gc(e, t) {
  let { ownerState: n } = t,
    r = X(t, Dk);
  const o = typeof e == "function" ? e(I({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => gc(i, I({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let s = X(o, Lk);
    return (
      i.forEach((l) => {
        let c = !0;
        typeof l.props == "function"
          ? (c = l.props(I({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((u) => {
              (n == null ? void 0 : n[u]) !== l.props[u] &&
                r[u] !== l.props[u] &&
                (c = !1);
            }),
          c &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof l.style == "function"
                ? l.style(I({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      s
    );
  }
  return o;
}
function Vk(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Wk,
      rootShouldForwardProp: r = Xd,
      slotShouldForwardProp: o = Xd,
    } = e,
    i = (a) =>
      sl(I({}, a, { theme: Wl(I({}, a, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (a, s = {}) => {
      Fb(a, (N) => N.filter((C) => !(C != null && C.__mui_systemSx)));
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: d,
          overridesResolver: f = Hk(Uk(c)),
        } = s,
        b = X(s, Fk),
        g = u !== void 0 ? u : (c && c !== "Root" && c !== "root") || !1,
        x = d || !1;
      let P,
        m = Xd;
      c === "Root" || c === "root"
        ? (m = r)
        : c
          ? (m = o)
          : Bk(a) && (m = void 0);
      const p = Xh(a, I({ shouldForwardProp: m, label: P }, b)),
        v = (N) =>
          (typeof N == "function" && N.__emotion_real !== N) || Pr(N)
            ? (C) =>
                gc(
                  N,
                  I({}, C, {
                    theme: Wl({ theme: C.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : N,
        _ = (N, ...C) => {
          let R = v(N);
          const h = C ? C.map(v) : [];
          l &&
            f &&
            h.push((T) => {
              const k = Wl(I({}, T, { defaultTheme: n, themeId: t }));
              if (
                !k.components ||
                !k.components[l] ||
                !k.components[l].styleOverrides
              )
                return null;
              const M = k.components[l].styleOverrides,
                D = {};
              return (
                Object.entries(M).forEach(([O, A]) => {
                  D[O] = gc(A, I({}, T, { theme: k }));
                }),
                f(T, D)
              );
            }),
            l &&
              !g &&
              h.push((T) => {
                var k;
                const M = Wl(I({}, T, { defaultTheme: n, themeId: t })),
                  D =
                    M == null ||
                    (k = M.components) == null ||
                    (k = k[l]) == null
                      ? void 0
                      : k.variants;
                return gc({ variants: D }, I({}, T, { theme: M }));
              }),
            x || h.push(i);
          const y = h.length - C.length;
          if (Array.isArray(N) && y > 0) {
            const T = new Array(y).fill("");
            (R = [...N, ...T]), (R.raw = [...N.raw, ...T]);
          }
          const w = p(R, ...h);
          return a.muiName && (w.muiName = a.muiName), w;
        };
      return p.withConfig && (_.withConfig = p.withConfig), _;
    }
  );
}
const ew = Vk();
function sm(e, t) {
  const n = I({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = I({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
              ? (n[r] = i)
              : ((n[r] = I({}, i)),
                Object.keys(o).forEach((a) => {
                  n[r][a] = sm(o[a], i[a]);
                }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Gk(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : sm(t.components[n].defaultProps, r);
}
function lm({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = rm(n);
  return r && (o = o[r] || o), Gk({ theme: o, name: t, props: e });
}
const gr = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function Kk(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const Yk = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Kk }, Symbol.toStringTag, {
    value: "Module",
  })
);
function $p(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function cm(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function qk(e, t) {
  return () => null;
}
function um(e, t) {
  var n, r;
  return (
    $.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
            (r = r._payload) == null ||
            (r = r.value) == null
          ? void 0
          : r.muiName
    ) !== -1
  );
}
function Ht(e) {
  return (e && e.ownerDocument) || document;
}
function go(e) {
  return Ht(e).defaultView || window;
}
function Qk(e, t) {
  return () => null;
}
function qc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Wv = 0;
function Xk(e) {
  const [t, n] = $.useState(e),
    r = e || t;
  return (
    $.useEffect(() => {
      t == null && ((Wv += 1), n(`mui-${Wv}`));
    }, [t]),
    r
  );
}
const Uv = bc.useId;
function dm(e) {
  if (Uv !== void 0) {
    const t = Uv();
    return e ?? t;
  }
  return Xk(e);
}
function Jk(e, t, n, r, o) {
  return null;
}
function tw({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = $.useRef(e !== void 0),
    [i, a] = $.useState(t),
    s = o ? e : i,
    l = $.useCallback((c) => {
      o || a(c);
    }, []);
  return [s, l];
}
function Rr(e) {
  const t = $.useRef(e);
  return (
    gr(() => {
      t.current = e;
    }),
    $.useRef((...n) => (0, t.current)(...n)).current
  );
}
function vt(...e) {
  return $.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              qc(n, t);
            });
          },
    e
  );
}
const Hv = {};
function Zk(e, t) {
  const n = $.useRef(Hv);
  return n.current === Hv && (n.current = e(t)), n;
}
const eR = [];
function tR(e) {
  $.useEffect(e, eR);
}
class cl {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new cl();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function Ni() {
  const e = Zk(cl.create).current;
  return tR(e.disposeEffect), e;
}
let ad = !0,
  _p = !1;
const nR = new cl(),
  rR = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function oR(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && rR[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function iR(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ad = !0);
}
function Jd() {
  ad = !1;
}
function aR() {
  this.visibilityState === "hidden" && _p && (ad = !0);
}
function sR(e) {
  e.addEventListener("keydown", iR, !0),
    e.addEventListener("mousedown", Jd, !0),
    e.addEventListener("pointerdown", Jd, !0),
    e.addEventListener("touchstart", Jd, !0),
    e.addEventListener("visibilitychange", aR, !0);
}
function lR(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return ad || oR(t);
}
function fm() {
  const e = $.useCallback((o) => {
      o != null && sR(o.ownerDocument);
    }, []),
    t = $.useRef(!1);
  function n() {
    return t.current
      ? ((_p = !0),
        nR.start(100, () => {
          _p = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return lR(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function nw(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Se(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const s = t(a);
            s !== "" && i.push(s), n && n[a] && i.push(n[a]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const cR = $.createContext(),
  pm = () => {
    const e = $.useContext(cR);
    return e ?? !1;
  },
  uR = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  dR = pa(),
  fR = ew("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${G(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  pR = (e) => lm({ props: e, name: "MuiContainer", defaultTheme: dR }),
  hR = (e, t) => {
    const n = (l) => we(t, l),
      { classes: r, fixed: o, disableGutters: i, maxWidth: a } = e,
      s = {
        root: [
          "root",
          a && `maxWidth${G(String(a))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return Se(s, n, r);
  };
function mR(e = {}) {
  const {
      createStyledComponent: t = fR,
      useThemeProps: n = pR,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: a, ownerState: s }) =>
        I(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !s.disableGutters && {
            paddingLeft: a.spacing(2),
            paddingRight: a.spacing(2),
            [a.breakpoints.up("sm")]: {
              paddingLeft: a.spacing(3),
              paddingRight: a.spacing(3),
            },
          }
        ),
      ({ theme: a, ownerState: s }) =>
        s.fixed &&
        Object.keys(a.breakpoints.values).reduce((l, c) => {
          const u = c,
            d = a.breakpoints.values[u];
          return (
            d !== 0 &&
              (l[a.breakpoints.up(u)] = {
                maxWidth: `${d}${a.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: a, ownerState: s }) =>
        I(
          {},
          s.maxWidth === "xs" && {
            [a.breakpoints.up("xs")]: {
              maxWidth: Math.max(a.breakpoints.values.xs, 444),
            },
          },
          s.maxWidth &&
            s.maxWidth !== "xs" && {
              [a.breakpoints.up(s.maxWidth)]: {
                maxWidth: `${a.breakpoints.values[s.maxWidth]}${a.breakpoints.unit}`,
              },
            }
        )
    );
  return $.forwardRef(function (s, l) {
    const c = n(s),
      {
        className: u,
        component: d = "div",
        disableGutters: f = !1,
        fixed: b = !1,
        maxWidth: g = "lg",
      } = c,
      x = X(c, uR),
      P = I({}, c, { component: d, disableGutters: f, fixed: b, maxWidth: g }),
      m = hR(P, r);
    return S.jsx(
      o,
      I({ as: d, ownerState: P, className: q(m.root, u), ref: l }, x)
    );
  });
}
const gR = [
    "component",
    "direction",
    "spacing",
    "divider",
    "children",
    "className",
    "useFlexGap",
  ],
  vR = pa(),
  yR = ew("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  });
function xR(e) {
  return lm({ props: e, name: "MuiStack", defaultTheme: vR });
}
function bR(e, t) {
  const n = $.Children.toArray(e).filter(Boolean);
  return n.reduce(
    (r, o, i) => (
      r.push(o),
      i < n.length - 1 && r.push($.cloneElement(t, { key: `separator-${i}` })),
      r
    ),
    []
  );
}
const wR = (e) =>
    ({
      row: "Left",
      "row-reverse": "Right",
      column: "Top",
      "column-reverse": "Bottom",
    })[e],
  SR = ({ ownerState: e, theme: t }) => {
    let n = I(
      { display: "flex", flexDirection: "column" },
      rn(
        { theme: t },
        Ho({ values: e.direction, breakpoints: t.breakpoints.values }),
        (r) => ({ flexDirection: r })
      )
    );
    if (e.spacing) {
      const r = tm(t),
        o = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == "object" && e.spacing[c] != null) ||
              (typeof e.direction == "object" && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {}
        ),
        i = Ho({ values: e.direction, base: o }),
        a = Ho({ values: e.spacing, base: o });
      typeof i == "object" &&
        Object.keys(i).forEach((l, c, u) => {
          if (!i[l]) {
            const f = c > 0 ? i[u[c - 1]] : "column";
            i[l] = f;
          }
        }),
        (n = In(
          n,
          rn({ theme: t }, a, (l, c) =>
            e.useFlexGap
              ? { gap: Jo(r, l) }
              : {
                  "& > :not(style):not(style)": { margin: 0 },
                  "& > :not(style) ~ :not(style)": {
                    [`margin${wR(c ? i[c] : e.direction)}`]: Jo(r, l),
                  },
                }
          )
        ));
    }
    return (n = OE(t.breakpoints, n)), n;
  };
function CR(e = {}) {
  const {
      createStyledComponent: t = yR,
      useThemeProps: n = xR,
      componentName: r = "MuiStack",
    } = e,
    o = () => Se({ root: ["root"] }, (l) => we(r, l), {}),
    i = t(SR);
  return $.forwardRef(function (l, c) {
    const u = n(l),
      d = ll(u),
      {
        component: f = "div",
        direction: b = "column",
        spacing: g = 0,
        divider: x,
        children: P,
        className: m,
        useFlexGap: p = !1,
      } = d,
      v = X(d, gR),
      _ = { direction: b, spacing: g, useFlexGap: p },
      N = o();
    return S.jsx(
      i,
      I({ as: f, ownerState: _, ref: c, className: q(N.root, m) }, v, {
        children: x ? bR(P, x) : P,
      })
    );
  });
}
function $R(e, t) {
  return I(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var ft = {},
  rw = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(rw);
var sd = rw.exports;
const _R = zr(wP),
  PR = zr(Yk);
var ow = sd;
Object.defineProperty(ft, "__esModule", { value: !0 });
var Re = (ft.alpha = lw);
ft.blend = FR;
ft.colorChannel = void 0;
var ER = (ft.darken = mm);
ft.decomposeColor = Dn;
ft.emphasize = LR;
var kR = (ft.getContrastRatio = AR);
ft.getLuminance = Qc;
ft.hexToRgb = iw;
ft.hslToRgb = sw;
var RR = (ft.lighten = gm);
ft.private_safeAlpha = NR;
ft.private_safeColorChannel = void 0;
ft.private_safeDarken = jR;
ft.private_safeEmphasize = cw;
ft.private_safeLighten = DR;
ft.recomposeColor = ha;
ft.rgbToHex = IR;
var Vv = ow(_R),
  TR = ow(PR);
function hm(e, t = 0, n = 1) {
  return (0, TR.default)(e, t, n);
}
function iw(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3)).join(", ")})`
      : ""
  );
}
function OR(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Dn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Dn(iw(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, Vv.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, Vv.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const aw = (e) => {
  const t = Dn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
ft.colorChannel = aw;
const MR = (e, t) => {
  try {
    return aw(e);
  } catch {
    return e;
  }
};
ft.private_safeColorChannel = MR;
function ha(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function IR(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Dn(e);
  return `#${t.map((n, r) => OR(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function sw(e) {
  e = Dn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    a = (c, u = (c + n / 30) % 12) =>
      o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let s = "rgb";
  const l = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), l.push(t[3])), ha({ type: s, values: l })
  );
}
function Qc(e) {
  e = Dn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Dn(sw(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function AR(e, t) {
  const n = Qc(e),
    r = Qc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function lw(e, t) {
  return (
    (e = Dn(e)),
    (t = hm(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ha(e)
  );
}
function NR(e, t, n) {
  try {
    return lw(e, t);
  } catch {
    return e;
  }
}
function mm(e, t) {
  if (((e = Dn(e)), (t = hm(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return ha(e);
}
function jR(e, t, n) {
  try {
    return mm(e, t);
  } catch {
    return e;
  }
}
function gm(e, t) {
  if (((e = Dn(e)), (t = hm(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return ha(e);
}
function DR(e, t, n) {
  try {
    return gm(e, t);
  } catch {
    return e;
  }
}
function LR(e, t = 0.15) {
  return Qc(e) > 0.5 ? mm(e, t) : gm(e, t);
}
function cw(e, t, n) {
  try {
    return cw(e, t);
  } catch {
    return e;
  }
}
function FR(e, t, n, r = 1) {
  const o = (l, c) =>
      Math.round((l ** (1 / r) * (1 - n) + c ** (1 / r) * n) ** r),
    i = Dn(e),
    a = Dn(t),
    s = [
      o(i.values[0], a.values[0]),
      o(i.values[1], a.values[1]),
      o(i.values[2], a.values[2]),
    ];
  return ha({ type: "rgb", values: s });
}
const zR = ["mode", "contrastThreshold", "tonalOffset"],
  Gv = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: zs.white, default: zs.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Zd = {
    text: {
      primary: zs.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: zs.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Kv(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
        ? (e.light = RR(e.main, o))
        : t === "dark" && (e.dark = ER(e.main, i)));
}
function BR(e = "light") {
  return e === "dark"
    ? { main: fi[200], light: fi[50], dark: fi[400] }
    : { main: fi[700], light: fi[400], dark: fi[800] };
}
function WR(e = "light") {
  return e === "dark"
    ? { main: di[200], light: di[50], dark: di[400] }
    : { main: di[500], light: di[300], dark: di[700] };
}
function UR(e = "light") {
  return e === "dark"
    ? { main: ui[500], light: ui[300], dark: ui[700] }
    : { main: ui[700], light: ui[400], dark: ui[800] };
}
function HR(e = "light") {
  return e === "dark"
    ? { main: pi[400], light: pi[300], dark: pi[700] }
    : { main: pi[700], light: pi[500], dark: pi[900] };
}
function VR(e = "light") {
  return e === "dark"
    ? { main: hi[400], light: hi[300], dark: hi[700] }
    : { main: hi[800], light: hi[500], dark: hi[900] };
}
function GR(e = "light") {
  return e === "dark"
    ? { main: za[400], light: za[300], dark: za[700] }
    : { main: "#ed6c02", light: za[500], dark: za[900] };
}
function KR(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = X(e, zR),
    i = e.primary || BR(t),
    a = e.secondary || WR(t),
    s = e.error || UR(t),
    l = e.info || HR(t),
    c = e.success || VR(t),
    u = e.warning || GR(t);
  function d(x) {
    return kR(x, Zd.text.primary) >= n ? Zd.text.primary : Gv.text.primary;
  }
  const f = ({
      color: x,
      name: P,
      mainShade: m = 500,
      lightShade: p = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((x = I({}, x)),
        !x.main && x[m] && (x.main = x[m]),
        !x.hasOwnProperty("main"))
      )
        throw new Error(Bs(11, P ? ` (${P})` : "", m));
      if (typeof x.main != "string")
        throw new Error(Bs(12, P ? ` (${P})` : "", JSON.stringify(x.main)));
      return (
        Kv(x, "light", p, r),
        Kv(x, "dark", v, r),
        x.contrastText || (x.contrastText = d(x.main)),
        x
      );
    },
    b = { dark: Zd, light: Gv };
  return In(
    I(
      {
        common: I({}, zs),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: a,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: s, name: "error" }),
        warning: f({ color: u, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: c, name: "success" }),
        grey: bP,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      b[t]
    ),
    o
  );
}
const YR = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function qR(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yv = { textTransform: "uppercase" },
  qv = '"Roboto", "Helvetica", "Arial", sans-serif';
function QR(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = qv,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: c = 16,
      allVariants: u,
      pxToRem: d,
    } = n,
    f = X(n, YR),
    b = o / 14,
    g = d || ((m) => `${(m / c) * b}rem`),
    x = (m, p, v, _, N) =>
      I(
        { fontFamily: r, fontWeight: m, fontSize: g(p), lineHeight: v },
        r === qv ? { letterSpacing: `${qR(_ / p)}em` } : {},
        N,
        u
      ),
    P = {
      h1: x(i, 96, 1.167, -1.5),
      h2: x(i, 60, 1.2, -0.5),
      h3: x(a, 48, 1.167, 0),
      h4: x(a, 34, 1.235, 0.25),
      h5: x(a, 24, 1.334, 0),
      h6: x(s, 20, 1.6, 0.15),
      subtitle1: x(a, 16, 1.75, 0.15),
      subtitle2: x(s, 14, 1.57, 0.1),
      body1: x(a, 16, 1.5, 0.15),
      body2: x(a, 14, 1.43, 0.15),
      button: x(s, 14, 1.75, 0.4, Yv),
      caption: x(a, 12, 1.66, 0.4),
      overline: x(a, 12, 2.66, 1, Yv),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return In(
    I(
      {
        htmlFontSize: c,
        pxToRem: g,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: l,
      },
      P
    ),
    f,
    { clone: !1 }
  );
}
const XR = 0.2,
  JR = 0.14,
  ZR = 0.12;
function Ge(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${XR})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${JR})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ZR})`,
  ].join(",");
}
const eT = [
    "none",
    Ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  tT = ["duration", "easing", "delay"],
  nT = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  rT = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Qv(e) {
  return `${Math.round(e)}ms`;
}
function oT(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function iT(e) {
  const t = I({}, nT, e.easing),
    n = I({}, rT, e.duration);
  return I(
    {
      getAutoHeightDuration: oT,
      create: (o = ["all"], i = {}) => {
        const {
          duration: a = n.standard,
          easing: s = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          X(i, tT),
          (Array.isArray(o) ? o : [o])
            .map(
              (c) =>
                `${c} ${typeof a == "string" ? a : Qv(a)} ${s} ${typeof l == "string" ? l : Qv(l)}`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const aT = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  sT = aT,
  lT = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function uw(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    a = X(e, lT);
  if (e.vars) throw new Error(Bs(18));
  const s = KR(r),
    l = pa(e);
  let c = In(l, {
    mixins: $R(l.breakpoints, n),
    palette: s,
    shadows: eT.slice(),
    typography: QR(s, i),
    transitions: iT(o),
    zIndex: I({}, sT),
  });
  return (
    (c = In(c, a)),
    (c = t.reduce((u, d) => In(u, d), c)),
    (c.unstable_sxConfig = I({}, al, a == null ? void 0 : a.unstable_sxConfig)),
    (c.unstable_sx = function (d) {
      return sl({ sx: d, theme: this });
    }),
    c
  );
}
const cT = uw(),
  vm = cT;
function ii() {
  const e = rm(vm);
  return e[ku] || e;
}
function be({ props: e, name: t }) {
  return lm({ props: e, name: t, defaultTheme: vm, themeId: ku });
}
var ul = {},
  ef = { exports: {} },
  Xv;
function uT() {
  return (
    Xv ||
      ((Xv = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            a,
            s;
          for (s = 0; s < i.length; s++)
            (a = i[s]), !(r.indexOf(a) >= 0) && (o[a] = n[a]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(ef)),
    ef.exports
  );
}
const dw = zr(_E),
  dT = zr(PE),
  fT = zr(IE),
  pT = zr(jk),
  hT = zr(wk),
  mT = zr(Ek);
var ma = sd;
Object.defineProperty(ul, "__esModule", { value: !0 });
var gT = (ul.default = RT);
ul.shouldForwardProp = vc;
ul.systemDefaultTheme = void 0;
var Cn = ma(Db()),
  Pp = ma(uT()),
  Jv = CT(dw),
  vT = dT;
ma(fT);
ma(pT);
var yT = ma(hT),
  xT = ma(mT);
const bT = ["ownerState"],
  wT = ["variants"],
  ST = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function fw(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (fw = function (r) {
    return r ? n : t;
  })(e);
}
function CT(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = fw(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function $T(e) {
  return Object.keys(e).length === 0;
}
function _T(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function vc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const PT = (ul.systemDefaultTheme = (0, yT.default)()),
  ET = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ul({ defaultTheme: e, theme: t, themeId: n }) {
  return $T(t) ? e : t[n] || t;
}
function kT(e) {
  return e ? (t, n) => n[e] : null;
}
function yc(e, t) {
  let { ownerState: n } = t,
    r = (0, Pp.default)(t, bT);
  const o =
    typeof e == "function" ? e((0, Cn.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => yc(i, (0, Cn.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let s = (0, Pp.default)(o, wT);
    return (
      i.forEach((l) => {
        let c = !0;
        typeof l.props == "function"
          ? (c = l.props((0, Cn.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((u) => {
              (n == null ? void 0 : n[u]) !== l.props[u] &&
                r[u] !== l.props[u] &&
                (c = !1);
            }),
          c &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof l.style == "function"
                ? l.style((0, Cn.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      s
    );
  }
  return o;
}
function RT(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = PT,
      rootShouldForwardProp: r = vc,
      slotShouldForwardProp: o = vc,
    } = e,
    i = (a) =>
      (0, xT.default)(
        (0, Cn.default)({}, a, {
          theme: Ul((0, Cn.default)({}, a, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (a, s = {}) => {
      (0, Jv.internal_processStyles)(a, (N) =>
        N.filter((C) => !(C != null && C.__mui_systemSx))
      );
      const {
          name: l,
          slot: c,
          skipVariantsResolver: u,
          skipSx: d,
          overridesResolver: f = kT(ET(c)),
        } = s,
        b = (0, Pp.default)(s, ST),
        g = u !== void 0 ? u : (c && c !== "Root" && c !== "root") || !1,
        x = d || !1;
      let P,
        m = vc;
      c === "Root" || c === "root"
        ? (m = r)
        : c
          ? (m = o)
          : _T(a) && (m = void 0);
      const p = (0, Jv.default)(
          a,
          (0, Cn.default)({ shouldForwardProp: m, label: P }, b)
        ),
        v = (N) =>
          (typeof N == "function" && N.__emotion_real !== N) ||
          (0, vT.isPlainObject)(N)
            ? (C) =>
                yc(
                  N,
                  (0, Cn.default)({}, C, {
                    theme: Ul({ theme: C.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : N,
        _ = (N, ...C) => {
          let R = v(N);
          const h = C ? C.map(v) : [];
          l &&
            f &&
            h.push((T) => {
              const k = Ul(
                (0, Cn.default)({}, T, { defaultTheme: n, themeId: t })
              );
              if (
                !k.components ||
                !k.components[l] ||
                !k.components[l].styleOverrides
              )
                return null;
              const M = k.components[l].styleOverrides,
                D = {};
              return (
                Object.entries(M).forEach(([O, A]) => {
                  D[O] = yc(A, (0, Cn.default)({}, T, { theme: k }));
                }),
                f(T, D)
              );
            }),
            l &&
              !g &&
              h.push((T) => {
                var k;
                const M = Ul(
                    (0, Cn.default)({}, T, { defaultTheme: n, themeId: t })
                  ),
                  D =
                    M == null ||
                    (k = M.components) == null ||
                    (k = k[l]) == null
                      ? void 0
                      : k.variants;
                return yc(
                  { variants: D },
                  (0, Cn.default)({}, T, { theme: M })
                );
              }),
            x || h.push(i);
          const y = h.length - C.length;
          if (Array.isArray(N) && y > 0) {
            const T = new Array(y).fill("");
            (R = [...N, ...T]), (R.raw = [...N.raw, ...T]);
          }
          const w = p(R, ...h);
          return a.muiName && (w.muiName = a.muiName), w;
        };
      return p.withConfig && (_.withConfig = p.withConfig), _;
    }
  );
}
function TT(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const OT = (e) => TT(e) && e !== "classes",
  ga = OT,
  te = gT({ themeId: ku, defaultTheme: vm, rootShouldForwardProp: ga }),
  Zv = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  };
function MT(e) {
  return we("MuiSvgIcon", e);
}
xe("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const IT = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  AT = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${G(t)}`, `fontSize${G(n)}`],
      };
    return Se(o, MT, r);
  },
  NT = te("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${G(n.color)}`],
        t[`fontSize${G(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, a, s, l, c, u, d, f, b, g;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (a = i.pxToRem) == null
            ? void 0
            : a.call(i, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 24)) || "1.5rem",
        large:
          ((c = e.typography) == null || (u = c.pxToRem) == null
            ? void 0
            : u.call(c, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (b = (e.vars || e).palette) == null || (b = b.action) == null
                  ? void 0
                  : b.active,
              disabled:
                (g = (e.vars || e).palette) == null || (g = g.action) == null
                  ? void 0
                  : g.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Ep = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: a = "inherit",
        component: s = "svg",
        fontSize: l = "medium",
        htmlColor: c,
        inheritViewBox: u = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      b = X(r, IT),
      g = $.isValidElement(o) && o.type === "svg",
      x = I({}, r, {
        color: a,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: u,
        viewBox: f,
        hasSvgAsChild: g,
      }),
      P = {};
    u || (P.viewBox = f);
    const m = AT(x);
    return S.jsxs(
      NT,
      I(
        {
          as: s,
          className: q(m.root, i),
          focusable: "false",
          color: c,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        P,
        b,
        g && o.props,
        {
          ownerState: x,
          children: [
            g ? o.props.children : o,
            d ? S.jsx("title", { children: d }) : null,
          ],
        }
      )
    );
  });
Ep.muiName = "SvgIcon";
function ym(e, t) {
  function n(r, o) {
    return S.jsx(
      Ep,
      I({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Ep.muiName), $.memo($.forwardRef(n));
}
const jT = {
    configure: (e) => {
      om.configure(e);
    },
  },
  DT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: G,
        createChainedFunction: $p,
        createSvgIcon: ym,
        debounce: cm,
        deprecatedPropType: qk,
        isMuiElement: um,
        ownerDocument: Ht,
        ownerWindow: go,
        requirePropFactory: Qk,
        setRef: qc,
        unstable_ClassNameGenerator: jT,
        unstable_useEnhancedEffect: gr,
        unstable_useId: dm,
        unsupportedProp: Jk,
        useControlled: tw,
        useEventCallback: Rr,
        useForkRef: vt,
        useIsFocusVisible: fm,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function LT(e) {
  return be;
}
function kp(e, t) {
  return (
    (kp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    kp(e, t)
  );
}
function pw(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    kp(e, t);
}
const e0 = { disabled: !1 },
  Xc = Xn.createContext(null);
var FT = function (t) {
    return t.scrollTop;
  },
  os = "unmounted",
  To = "exited",
  Oo = "entering",
  vi = "entered",
  Rp = "exiting",
  Ur = (function (e) {
    pw(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        s = a && !a.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? s
            ? ((l = To), (i.appearStatus = Oo))
            : (l = vi)
          : r.unmountOnExit || r.mountOnEnter
            ? (l = os)
            : (l = To),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === os ? { status: To } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== Oo && a !== vi && (i = Oo)
            : (a === Oo || a === vi) && (i = Rp);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (s = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === Oo)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : rs.findDOMNode(this);
              a && FT(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === To &&
            this.setState({ status: os });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [s] : [rs.findDOMNode(this), s],
          c = l[0],
          u = l[1],
          d = this.getTimeouts(),
          f = s ? d.appear : d.enter;
        if ((!o && !a) || e0.disabled) {
          this.safeSetState({ status: vi }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, u),
          this.safeSetState({ status: Oo }, function () {
            i.props.onEntering(c, u),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: vi }, function () {
                  i.props.onEntered(c, u);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : rs.findDOMNode(this);
        if (!i || e0.disabled) {
          this.safeSetState({ status: To }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Rp }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: To }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : rs.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            c = l[0],
            u = l[1];
          this.props.addEndListener(c, u);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === os) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = X(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Xn.createElement(
          Xc.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, s)
            : Xn.cloneElement(Xn.Children.only(a), s)
        );
      }),
      t
    );
  })(Xn.Component);
Ur.contextType = Xc;
Ur.propTypes = {};
function mi() {}
Ur.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: mi,
  onEntering: mi,
  onEntered: mi,
  onExit: mi,
  onExiting: mi,
  onExited: mi,
};
Ur.UNMOUNTED = os;
Ur.EXITED = To;
Ur.ENTERING = Oo;
Ur.ENTERED = vi;
Ur.EXITING = Rp;
const xm = Ur;
function zT(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bm(e, t) {
  var n = function (i) {
      return t && $.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      $.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function BT(e, t) {
  (e = e || {}), (t = t || {});
  function n(u) {
    return u in t ? t[u] : e[u];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var a,
    s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var c = r[l][a];
        s[r[l][a]] = n(c);
      }
    s[l] = n(l);
  }
  for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
  return s;
}
function zo(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function WT(e, t) {
  return bm(e.children, function (n) {
    return $.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: zo(n, "appear", e),
      enter: zo(n, "enter", e),
      exit: zo(n, "exit", e),
    });
  });
}
function UT(e, t, n) {
  var r = bm(e.children),
    o = BT(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var a = o[i];
      if ($.isValidElement(a)) {
        var s = i in t,
          l = i in r,
          c = t[i],
          u = $.isValidElement(c) && !c.props.in;
        l && (!s || u)
          ? (o[i] = $.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: zo(a, "exit", e),
              enter: zo(a, "enter", e),
            }))
          : !l && s && !u
            ? (o[i] = $.cloneElement(a, { in: !1 }))
            : l &&
              s &&
              $.isValidElement(c) &&
              (o[i] = $.cloneElement(a, {
                onExited: n.bind(null, a),
                in: c.props.in,
                exit: zo(a, "exit", e),
                enter: zo(a, "enter", e),
              }));
      }
    }),
    o
  );
}
var HT =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  VT = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  wm = (function (e) {
    pw(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = i.handleExited.bind(zT(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var a = i.children,
          s = i.handleExited,
          l = i.firstRender;
        return { children: l ? WT(o, s) : UT(o, a, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var a = bm(this.props.children);
        o.key in a ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = I({}, s.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          a = o.childFactory,
          s = X(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = HT(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Xn.createElement(Xc.Provider, { value: l }, c)
            : Xn.createElement(
                Xc.Provider,
                { value: l },
                Xn.createElement(i, s, c)
              )
        );
      }),
      t
    );
  })(Xn.Component);
wm.propTypes = {};
wm.defaultProps = VT;
const GT = wm,
  Sm = (e) => e.scrollTop;
function na(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: a = {} } = e;
  return {
    duration:
      (n = a.transitionDuration) != null
        ? n
        : typeof o == "number"
          ? o
          : o[t.mode] || 0,
    easing:
      (r = a.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
          ? i[t.mode]
          : i,
    delay: a.transitionDelay,
  };
}
function KT(e) {
  return we("MuiPaper", e);
}
xe("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const YT = ["className", "component", "elevation", "square", "variant"],
  qT = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return Se(i, KT, o);
  },
  QT = te("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return I(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        I(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${Re("#fff", Zv(t.elevation))}, ${Re("#fff", Zv(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  XT = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: a = 1,
        square: s = !1,
        variant: l = "elevation",
      } = r,
      c = X(r, YT),
      u = I({}, r, { component: i, elevation: a, square: s, variant: l }),
      d = qT(u);
    return S.jsx(
      QT,
      I({ as: i, ownerState: u, className: q(d.root, o), ref: n }, c)
    );
  }),
  wo = XT;
function Jc(e) {
  return typeof e == "string";
}
function ji(e, t, n) {
  return e === void 0 || Jc(e)
    ? t
    : I({}, t, { ownerState: I({}, t.ownerState, n) });
}
const JT = { disableDefaultClasses: !1 },
  ZT = $.createContext(JT);
function eO(e) {
  const { disableDefaultClasses: t } = $.useContext(ZT);
  return (n) => (t ? "" : e(n));
}
function hw(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function mw(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function t0(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function gw(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const b = q(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      g = I(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      x = I({}, n, o, r);
    return (
      b.length > 0 && (x.className = b),
      Object.keys(g).length > 0 && (x.style = g),
      { props: x, internalRef: void 0 }
    );
  }
  const a = hw(I({}, o, r)),
    s = t0(r),
    l = t0(o),
    c = t(a),
    u = q(
      c == null ? void 0 : c.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = I(
      {},
      c == null ? void 0 : c.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = I({}, c, n, l, s);
  return (
    u.length > 0 && (f.className = u),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: c.ref }
  );
}
const tO = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Zo(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    a = X(e, tO),
    s = i ? {} : mw(r, o),
    { props: l, internalRef: c } = gw(I({}, a, { externalSlotProps: s })),
    u = vt(
      c,
      s == null ? void 0 : s.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return ji(n, I({}, l, { ref: u }), o);
}
const nO = [
    "className",
    "elementType",
    "ownerState",
    "externalForwardedProps",
    "getSlotOwnerState",
    "internalForwardedProps",
  ],
  rO = ["component", "slots", "slotProps"],
  oO = ["component"];
function iO(e, t) {
  const {
      className: n,
      elementType: r,
      ownerState: o,
      externalForwardedProps: i,
      getSlotOwnerState: a,
      internalForwardedProps: s,
    } = t,
    l = X(t, nO),
    {
      component: c,
      slots: u = { [e]: void 0 },
      slotProps: d = { [e]: void 0 },
    } = i,
    f = X(i, rO),
    b = u[e] || r,
    g = mw(d[e], o),
    x = gw(
      I({ className: n }, l, {
        externalForwardedProps: e === "root" ? f : void 0,
        externalSlotProps: g,
      })
    ),
    {
      props: { component: P },
      internalRef: m,
    } = x,
    p = X(x.props, oO),
    v = vt(m, g == null ? void 0 : g.ref, t.ref),
    _ = a ? a(p) : {},
    N = I({}, o, _),
    C = e === "root" ? P || c : P,
    R = ji(
      b,
      I(
        {},
        e === "root" && !c && !u[e] && s,
        e !== "root" && !u[e] && s,
        p,
        C && { as: C },
        { ref: v }
      ),
      N
    );
  return (
    Object.keys(_).forEach((h) => {
      delete R[h];
    }),
    [b, R]
  );
}
function aO(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: a,
      in: s,
      onExited: l,
      timeout: c,
    } = e,
    [u, d] = $.useState(!1),
    f = q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    b = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
    g = q(n.child, u && n.childLeaving, r && n.childPulsate);
  return (
    !s && !u && d(!0),
    $.useEffect(() => {
      if (!s && l != null) {
        const x = setTimeout(l, c);
        return () => {
          clearTimeout(x);
        };
      }
    }, [l, s, c]),
    S.jsx("span", {
      className: f,
      style: b,
      children: S.jsx("span", { className: g }),
    })
  );
}
const $n = xe("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  sO = ["center", "classes", "className"];
let ld = (e) => e,
  n0,
  r0,
  o0,
  i0;
const Tp = 550,
  lO = 80,
  cO = Uu(
    n0 ||
      (n0 = ld`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  uO = Uu(
    r0 ||
      (r0 = ld`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  dO = Uu(
    o0 ||
      (o0 = ld`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  fO = te("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  pO = te(aO, { name: "MuiTouchRipple", slot: "Ripple" })(
    i0 ||
      (i0 = ld`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    $n.rippleVisible,
    cO,
    Tp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    $n.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    $n.child,
    $n.childLeaving,
    uO,
    Tp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    $n.childPulsate,
    dO,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  hO = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: a } = r,
      s = X(r, sO),
      [l, c] = $.useState([]),
      u = $.useRef(0),
      d = $.useRef(null);
    $.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = $.useRef(!1),
      b = Ni(),
      g = $.useRef(null),
      x = $.useRef(null),
      P = $.useCallback(
        (_) => {
          const {
            pulsate: N,
            rippleX: C,
            rippleY: R,
            rippleSize: h,
            cb: y,
          } = _;
          c((w) => [
            ...w,
            S.jsx(
              pO,
              {
                classes: {
                  ripple: q(i.ripple, $n.ripple),
                  rippleVisible: q(i.rippleVisible, $n.rippleVisible),
                  ripplePulsate: q(i.ripplePulsate, $n.ripplePulsate),
                  child: q(i.child, $n.child),
                  childLeaving: q(i.childLeaving, $n.childLeaving),
                  childPulsate: q(i.childPulsate, $n.childPulsate),
                },
                timeout: Tp,
                pulsate: N,
                rippleX: C,
                rippleY: R,
                rippleSize: h,
              },
              u.current
            ),
          ]),
            (u.current += 1),
            (d.current = y);
        },
        [i]
      ),
      m = $.useCallback(
        (_ = {}, N = {}, C = () => {}) => {
          const {
            pulsate: R = !1,
            center: h = o || N.pulsate,
            fakeElement: y = !1,
          } = N;
          if ((_ == null ? void 0 : _.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (_ == null ? void 0 : _.type) === "touchstart" && (f.current = !0);
          const w = y ? null : x.current,
            T = w
              ? w.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let k, M, D;
          if (
            h ||
            _ === void 0 ||
            (_.clientX === 0 && _.clientY === 0) ||
            (!_.clientX && !_.touches)
          )
            (k = Math.round(T.width / 2)), (M = Math.round(T.height / 2));
          else {
            const { clientX: O, clientY: A } =
              _.touches && _.touches.length > 0 ? _.touches[0] : _;
            (k = Math.round(O - T.left)), (M = Math.round(A - T.top));
          }
          if (h)
            (D = Math.sqrt((2 * T.width ** 2 + T.height ** 2) / 3)),
              D % 2 === 0 && (D += 1);
          else {
            const O =
                Math.max(Math.abs((w ? w.clientWidth : 0) - k), k) * 2 + 2,
              A = Math.max(Math.abs((w ? w.clientHeight : 0) - M), M) * 2 + 2;
            D = Math.sqrt(O ** 2 + A ** 2);
          }
          _ != null && _.touches
            ? g.current === null &&
              ((g.current = () => {
                P({ pulsate: R, rippleX: k, rippleY: M, rippleSize: D, cb: C });
              }),
              b.start(lO, () => {
                g.current && (g.current(), (g.current = null));
              }))
            : P({ pulsate: R, rippleX: k, rippleY: M, rippleSize: D, cb: C });
        },
        [o, P, b]
      ),
      p = $.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      v = $.useCallback(
        (_, N) => {
          if (
            (b.clear(),
            (_ == null ? void 0 : _.type) === "touchend" && g.current)
          ) {
            g.current(),
              (g.current = null),
              b.start(0, () => {
                v(_, N);
              });
            return;
          }
          (g.current = null),
            c((C) => (C.length > 0 ? C.slice(1) : C)),
            (d.current = N);
        },
        [b]
      );
    return (
      $.useImperativeHandle(n, () => ({ pulsate: p, start: m, stop: v }), [
        p,
        m,
        v,
      ]),
      S.jsx(
        fO,
        I({ className: q($n.root, i.root, a), ref: x }, s, {
          children: S.jsx(GT, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  mO = hO;
function gO(e) {
  return we("MuiButtonBase", e);
}
const vO = xe("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  yO = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  xO = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      a = Se({ root: ["root", t && "disabled", n && "focusVisible"] }, gO, o);
    return n && r && (a.root += ` ${r}`), a;
  },
  bO = te("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${vO.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  wO = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: a,
        className: s,
        component: l = "button",
        disabled: c = !1,
        disableRipple: u = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: b = "a",
        onBlur: g,
        onClick: x,
        onContextMenu: P,
        onDragLeave: m,
        onFocus: p,
        onFocusVisible: v,
        onKeyDown: _,
        onKeyUp: N,
        onMouseDown: C,
        onMouseLeave: R,
        onMouseUp: h,
        onTouchEnd: y,
        onTouchMove: w,
        onTouchStart: T,
        tabIndex: k = 0,
        TouchRippleProps: M,
        touchRippleRef: D,
        type: O,
      } = r,
      A = X(r, yO),
      j = $.useRef(null),
      E = $.useRef(null),
      L = vt(E, D),
      { isFocusVisibleRef: B, onFocus: U, onBlur: K, ref: ce } = fm(),
      [Z, Y] = $.useState(!1);
    c && Z && Y(!1),
      $.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Y(!0), j.current.focus();
          },
        }),
        []
      );
    const [J, fe] = $.useState(!1);
    $.useEffect(() => {
      fe(!0);
    }, []);
    const Ie = J && !u && !c;
    $.useEffect(() => {
      Z && f && !u && J && E.current.pulsate();
    }, [u, f, Z, J]);
    function _e(ie, Bt, Gr = d) {
      return Rr(
        (Un) => (Bt && Bt(Un), !Gr && E.current && E.current[ie](Un), !0)
      );
    }
    const at = _e("start", C),
      he = _e("stop", P),
      st = _e("stop", m),
      ae = _e("stop", h),
      de = _e("stop", (ie) => {
        Z && ie.preventDefault(), R && R(ie);
      }),
      re = _e("start", T),
      vn = _e("stop", y),
      Lt = _e("stop", w),
      wt = _e(
        "stop",
        (ie) => {
          K(ie), B.current === !1 && Y(!1), g && g(ie);
        },
        !1
      ),
      Wn = Rr((ie) => {
        j.current || (j.current = ie.currentTarget),
          U(ie),
          B.current === !0 && (Y(!0), v && v(ie)),
          p && p(ie);
      }),
      pt = () => {
        const ie = j.current;
        return l && l !== "button" && !(ie.tagName === "A" && ie.href);
      },
      yt = $.useRef(!1),
      Ft = Rr((ie) => {
        f &&
          !yt.current &&
          Z &&
          E.current &&
          ie.key === " " &&
          ((yt.current = !0),
          E.current.stop(ie, () => {
            E.current.start(ie);
          })),
          ie.target === ie.currentTarget &&
            pt() &&
            ie.key === " " &&
            ie.preventDefault(),
          _ && _(ie),
          ie.target === ie.currentTarget &&
            pt() &&
            ie.key === "Enter" &&
            !c &&
            (ie.preventDefault(), x && x(ie));
      }),
      zt = Rr((ie) => {
        f &&
          ie.key === " " &&
          E.current &&
          Z &&
          !ie.defaultPrevented &&
          ((yt.current = !1),
          E.current.stop(ie, () => {
            E.current.pulsate(ie);
          })),
          N && N(ie),
          x &&
            ie.target === ie.currentTarget &&
            pt() &&
            ie.key === " " &&
            !ie.defaultPrevented &&
            x(ie);
      });
    let Ee = l;
    Ee === "button" && (A.href || A.to) && (Ee = b);
    const St = {};
    Ee === "button"
      ? ((St.type = O === void 0 ? "button" : O), (St.disabled = c))
      : (!A.href && !A.to && (St.role = "button"),
        c && (St["aria-disabled"] = c));
    const yn = vt(n, ce, j),
      on = I({}, r, {
        centerRipple: i,
        component: l,
        disabled: c,
        disableRipple: u,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: k,
        focusVisible: Z,
      }),
      Vr = xO(on);
    return S.jsxs(
      bO,
      I(
        {
          as: Ee,
          className: q(Vr.root, s),
          ownerState: on,
          onBlur: wt,
          onClick: x,
          onContextMenu: he,
          onFocus: Wn,
          onKeyDown: Ft,
          onKeyUp: zt,
          onMouseDown: at,
          onMouseLeave: de,
          onMouseUp: ae,
          onDragLeave: st,
          onTouchEnd: vn,
          onTouchMove: Lt,
          onTouchStart: re,
          ref: yn,
          tabIndex: c ? -1 : k,
          type: O,
        },
        St,
        A,
        { children: [a, Ie ? S.jsx(mO, I({ ref: L, center: i }, M)) : null] }
      )
    );
  }),
  ei = wO;
function SO(e) {
  return we("MuiIconButton", e);
}
const CO = xe("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  $O = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  _O = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
      a = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${G(r)}`,
          o && `edge${G(o)}`,
          `size${G(i)}`,
        ],
      };
    return Se(a, SO, t);
  },
  PO = te(ei, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${G(n.color)}`],
        n.edge && t[`edge${G(n.edge)}`],
        t[`size${G(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      I(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : Re(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return I(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          I(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": I(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : Re(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${CO.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  EO = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: i,
        className: a,
        color: s = "default",
        disabled: l = !1,
        disableFocusRipple: c = !1,
        size: u = "medium",
      } = r,
      d = X(r, $O),
      f = I({}, r, {
        edge: o,
        color: s,
        disabled: l,
        disableFocusRipple: c,
        size: u,
      }),
      b = _O(f);
    return S.jsx(
      PO,
      I(
        {
          className: q(b.root, a),
          centerRipple: !0,
          focusRipple: !c,
          disabled: l,
          ref: n,
        },
        d,
        { ownerState: f, children: i }
      )
    );
  }),
  gs = EO;
function kO(e) {
  return we("MuiTypography", e);
}
xe("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const RO = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  TO = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: a,
      } = e,
      s = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${G(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Se(s, kO, a);
  },
  OO = te("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${G(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      { margin: 0 },
      t.variant === "inherit" && { font: "inherit" },
      t.variant !== "inherit" && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  a0 = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  MO = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  IO = (e) => MO[e] || e,
  AO = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiTypography" }),
      o = IO(r.color),
      i = ll(I({}, r, { color: o })),
      {
        align: a = "inherit",
        className: s,
        component: l,
        gutterBottom: c = !1,
        noWrap: u = !1,
        paragraph: d = !1,
        variant: f = "body1",
        variantMapping: b = a0,
      } = i,
      g = X(i, RO),
      x = I({}, i, {
        align: a,
        color: o,
        className: s,
        component: l,
        gutterBottom: c,
        noWrap: u,
        paragraph: d,
        variant: f,
        variantMapping: b,
      }),
      P = l || (d ? "p" : b[f] || a0[f]) || "span",
      m = TO(x);
    return S.jsx(
      OO,
      I({ as: P, ref: n, ownerState: x, className: q(m.root, s) }, g)
    );
  }),
  oe = AO;
function NO(e) {
  return we("MuiAppBar", e);
}
xe("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
  "colorError",
  "colorInfo",
  "colorSuccess",
  "colorWarning",
]);
const jO = ["className", "color", "enableColorOnDark", "position"],
  DO = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${G(t)}`, `position${G(n)}`] };
    return Se(o, NO, r);
  },
  Hl = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  LO = te(wo, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${G(n.position)}`], t[`color${G(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return I(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        I(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            I(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        I(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : Hl(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : Hl(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : Hl(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : Hl(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  FO = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: a = !1,
        position: s = "fixed",
      } = r,
      l = X(r, jO),
      c = I({}, r, { color: i, position: s, enableColorOnDark: a }),
      u = DO(c);
    return S.jsx(
      LO,
      I(
        {
          square: !0,
          component: "header",
          ownerState: c,
          elevation: 4,
          className: q(u.root, o, s === "fixed" && "mui-fixed"),
          ref: n,
        },
        l
      )
    );
  }),
  zO = FO,
  vw = "base";
function BO(e) {
  return `${vw}--${e}`;
}
function WO(e, t) {
  return `${vw}-${e}-${t}`;
}
function yw(e, t) {
  const n = qb[t];
  return n ? BO(n) : WO(e, t);
}
function UO(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = yw(e, r);
    }),
    n
  );
}
const HO = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function VO(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function GO(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function KO(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    GO(e)
  );
}
function YO(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(HO)).forEach((r, o) => {
      const i = VO(r);
      i === -1 ||
        !KO(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function qO() {
  return !0;
}
function QO(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = YO,
      isEnabled: a = qO,
      open: s,
    } = e,
    l = $.useRef(!1),
    c = $.useRef(null),
    u = $.useRef(null),
    d = $.useRef(null),
    f = $.useRef(null),
    b = $.useRef(!1),
    g = $.useRef(null),
    x = vt(t.ref, g),
    P = $.useRef(null);
  $.useEffect(() => {
    !s || !g.current || (b.current = !n);
  }, [n, s]),
    $.useEffect(() => {
      if (!s || !g.current) return;
      const v = Ht(g.current);
      return (
        g.current.contains(v.activeElement) ||
          (g.current.hasAttribute("tabIndex") ||
            g.current.setAttribute("tabIndex", "-1"),
          b.current && g.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [s]),
    $.useEffect(() => {
      if (!s || !g.current) return;
      const v = Ht(g.current),
        _ = (R) => {
          (P.current = R),
            !(r || !a() || R.key !== "Tab") &&
              v.activeElement === g.current &&
              R.shiftKey &&
              ((l.current = !0), u.current && u.current.focus());
        },
        N = () => {
          const R = g.current;
          if (R === null) return;
          if (!v.hasFocus() || !a() || l.current) {
            l.current = !1;
            return;
          }
          if (
            R.contains(v.activeElement) ||
            (r &&
              v.activeElement !== c.current &&
              v.activeElement !== u.current)
          )
            return;
          if (v.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!b.current) return;
          let h = [];
          if (
            ((v.activeElement === c.current || v.activeElement === u.current) &&
              (h = i(g.current)),
            h.length > 0)
          ) {
            var y, w;
            const T = !!(
                (y = P.current) != null &&
                y.shiftKey &&
                ((w = P.current) == null ? void 0 : w.key) === "Tab"
              ),
              k = h[0],
              M = h[h.length - 1];
            typeof k != "string" &&
              typeof M != "string" &&
              (T ? M.focus() : k.focus());
          } else R.focus();
        };
      v.addEventListener("focusin", N), v.addEventListener("keydown", _, !0);
      const C = setInterval(() => {
        v.activeElement && v.activeElement.tagName === "BODY" && N();
      }, 50);
      return () => {
        clearInterval(C),
          v.removeEventListener("focusin", N),
          v.removeEventListener("keydown", _, !0);
      };
    }, [n, r, o, a, s, i]);
  const m = (v) => {
      d.current === null && (d.current = v.relatedTarget),
        (b.current = !0),
        (f.current = v.target);
      const _ = t.props.onFocus;
      _ && _(v);
    },
    p = (v) => {
      d.current === null && (d.current = v.relatedTarget), (b.current = !0);
    };
  return S.jsxs($.Fragment, {
    children: [
      S.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: p,
        ref: c,
        "data-testid": "sentinelStart",
      }),
      $.cloneElement(t, { ref: x, onFocus: m }),
      S.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: p,
        ref: u,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function XO(e) {
  return typeof e == "function" ? e() : e;
}
const xw = $.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [a, s] = $.useState(null),
    l = vt($.isValidElement(r) ? r.ref : null, n);
  if (
    (gr(() => {
      i || s(XO(o) || document.body);
    }, [o, i]),
    gr(() => {
      if (a && !i)
        return (
          qc(n, a),
          () => {
            qc(n, null);
          }
        );
    }, [n, a, i]),
    i)
  ) {
    if ($.isValidElement(r)) {
      const c = { ref: l };
      return $.cloneElement(r, c);
    }
    return S.jsx($.Fragment, { children: r });
  }
  return S.jsx($.Fragment, { children: a && _u.createPortal(r, a) });
});
function JO(e) {
  const t = Ht(e);
  return t.body === e
    ? go(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function vs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function s0(e) {
  return parseInt(go(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ZO(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function l0(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const s = i.indexOf(a) === -1,
      l = !ZO(a);
    s && l && vs(a, o);
  });
}
function tf(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function eM(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (JO(r)) {
      const a = nw(Ht(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${s0(r) + a}px`);
      const s = Ht(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${s0(l) + a}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Ht(r).body;
    else {
      const a = r.parentElement,
        s = go(r);
      i =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        s.getComputedStyle(a).overflowY === "scroll"
          ? a
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: a, property: s }) => {
      i ? a.style.setProperty(s, i) : a.style.removeProperty(s);
    });
  };
}
function tM(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class nM {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && vs(t.modalRef, !1);
    const o = tM(n);
    l0(n, t.mount, t.modalRef, o, !0);
    const i = tf(this.containers, (a) => a.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = tf(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = eM(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = tf(this.containers, (a) => a.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && vs(t.modalRef, n),
        l0(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && vs(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function rM(e) {
  return typeof e == "function" ? e() : e;
}
function oM(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const iM = new nM();
function aM(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = iM,
      closeAfterTransition: i = !1,
      onTransitionEnter: a,
      onTransitionExited: s,
      children: l,
      onClose: c,
      open: u,
      rootRef: d,
    } = e,
    f = $.useRef({}),
    b = $.useRef(null),
    g = $.useRef(null),
    x = vt(g, d),
    [P, m] = $.useState(!u),
    p = oM(l);
  let v = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (v = !1);
  const _ = () => Ht(b.current),
    N = () => (
      (f.current.modalRef = g.current), (f.current.mount = b.current), f.current
    ),
    C = () => {
      o.mount(N(), { disableScrollLock: r }),
        g.current && (g.current.scrollTop = 0);
    },
    R = Rr(() => {
      const A = rM(t) || _().body;
      o.add(N(), A), g.current && C();
    }),
    h = $.useCallback(() => o.isTopModal(N()), [o]),
    y = Rr((A) => {
      (b.current = A), A && (u && h() ? C() : g.current && vs(g.current, v));
    }),
    w = $.useCallback(() => {
      o.remove(N(), v);
    }, [v, o]);
  $.useEffect(
    () => () => {
      w();
    },
    [w]
  ),
    $.useEffect(() => {
      u ? R() : (!p || !i) && w();
    }, [u, w, p, i, R]);
  const T = (A) => (j) => {
      var E;
      (E = A.onKeyDown) == null || E.call(A, j),
        !(j.key !== "Escape" || j.which === 229 || !h()) &&
          (n || (j.stopPropagation(), c && c(j, "escapeKeyDown")));
    },
    k = (A) => (j) => {
      var E;
      (E = A.onClick) == null || E.call(A, j),
        j.target === j.currentTarget && c && c(j, "backdropClick");
    };
  return {
    getRootProps: (A = {}) => {
      const j = hw(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const E = I({}, j, A);
      return I({ role: "presentation" }, E, { onKeyDown: T(E), ref: x });
    },
    getBackdropProps: (A = {}) => {
      const j = A;
      return I({ "aria-hidden": !0 }, j, { onClick: k(j), open: u });
    },
    getTransitionProps: () => {
      const A = () => {
          m(!1), a && a();
        },
        j = () => {
          m(!0), s && s(), i && w();
        };
      return {
        onEnter: $p(A, l == null ? void 0 : l.props.onEnter),
        onExited: $p(j, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: x,
    portalRef: y,
    isTopModal: h,
    exited: P,
    hasTransition: p,
  };
}
var en = "top",
  Ln = "bottom",
  Fn = "right",
  tn = "left",
  Cm = "auto",
  dl = [en, Ln, Fn, tn],
  ra = "start",
  Vs = "end",
  sM = "clippingParents",
  bw = "viewport",
  Wa = "popper",
  lM = "reference",
  c0 = dl.reduce(function (e, t) {
    return e.concat([t + "-" + ra, t + "-" + Vs]);
  }, []),
  ww = [].concat(dl, [Cm]).reduce(function (e, t) {
    return e.concat([t, t + "-" + ra, t + "-" + Vs]);
  }, []),
  cM = "beforeRead",
  uM = "read",
  dM = "afterRead",
  fM = "beforeMain",
  pM = "main",
  hM = "afterMain",
  mM = "beforeWrite",
  gM = "write",
  vM = "afterWrite",
  yM = [cM, uM, dM, fM, pM, hM, mM, gM, vM];
function vr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function pn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ti(e) {
  var t = pn(e).Element;
  return e instanceof t || e instanceof Element;
}
function An(e) {
  var t = pn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $m(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = pn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xM(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !An(i) ||
      !vr(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (a) {
        var s = o[a];
        s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
      }));
  });
}
function bM(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          s = a.reduce(function (l, c) {
            return (l[c] = ""), l;
          }, {});
        !An(o) ||
          !vr(o) ||
          (Object.assign(o.style, s),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const wM = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xM,
  effect: bM,
  requires: ["computeStyles"],
};
function mr(e) {
  return e.split("-")[0];
}
var Vo = Math.max,
  Zc = Math.min,
  oa = Math.round;
function Op() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function Sw() {
  return !/^((?!chrome|android).)*safari/i.test(Op());
}
function ia(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    An(e) &&
    ((o = (e.offsetWidth > 0 && oa(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && oa(r.height) / e.offsetHeight) || 1));
  var a = ti(e) ? pn(e) : window,
    s = a.visualViewport,
    l = !Sw() && n,
    c = (r.left + (l && s ? s.offsetLeft : 0)) / o,
    u = (r.top + (l && s ? s.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u,
  };
}
function _m(e) {
  var t = ia(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Cw(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && $m(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Lr(e) {
  return pn(e).getComputedStyle(e);
}
function SM(e) {
  return ["table", "td", "th"].indexOf(vr(e)) >= 0;
}
function So(e) {
  return ((ti(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function cd(e) {
  return vr(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || ($m(e) ? e.host : null) || So(e);
}
function u0(e) {
  return !An(e) || Lr(e).position === "fixed" ? null : e.offsetParent;
}
function CM(e) {
  var t = /firefox/i.test(Op()),
    n = /Trident/i.test(Op());
  if (n && An(e)) {
    var r = Lr(e);
    if (r.position === "fixed") return null;
  }
  var o = cd(e);
  for ($m(o) && (o = o.host); An(o) && ["html", "body"].indexOf(vr(o)) < 0; ) {
    var i = Lr(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function fl(e) {
  for (var t = pn(e), n = u0(e); n && SM(n) && Lr(n).position === "static"; )
    n = u0(n);
  return n &&
    (vr(n) === "html" || (vr(n) === "body" && Lr(n).position === "static"))
    ? t
    : n || CM(e) || t;
}
function Pm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ys(e, t, n) {
  return Vo(e, Zc(t, n));
}
function $M(e, t, n) {
  var r = ys(e, t, n);
  return r > n ? n : r;
}
function $w() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function _w(e) {
  return Object.assign({}, $w(), e);
}
function Pw(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var _M = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    _w(typeof t != "number" ? t : Pw(t, dl))
  );
};
function PM(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    s = mr(n.placement),
    l = Pm(s),
    c = [tn, Fn].indexOf(s) >= 0,
    u = c ? "height" : "width";
  if (!(!i || !a)) {
    var d = _M(o.padding, n),
      f = _m(i),
      b = l === "y" ? en : tn,
      g = l === "y" ? Ln : Fn,
      x =
        n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u],
      P = a[l] - n.rects.reference[l],
      m = fl(i),
      p = m ? (l === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      v = x / 2 - P / 2,
      _ = d[b],
      N = p - f[u] - d[g],
      C = p / 2 - f[u] / 2 + v,
      R = ys(_, C, N),
      h = l;
    n.modifiersData[r] = ((t = {}), (t[h] = R), (t.centerOffset = R - C), t);
  }
}
function EM(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (Cw(t.elements.popper, o) && (t.elements.arrow = o)));
}
const kM = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: PM,
  effect: EM,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function aa(e) {
  return e.split("-")[1];
}
var RM = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function TM(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: oa(n * o) / o || 0, y: oa(r * o) / o || 0 };
}
function d0(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    a = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    f = a.x,
    b = f === void 0 ? 0 : f,
    g = a.y,
    x = g === void 0 ? 0 : g,
    P = typeof u == "function" ? u({ x: b, y: x }) : { x: b, y: x };
  (b = P.x), (x = P.y);
  var m = a.hasOwnProperty("x"),
    p = a.hasOwnProperty("y"),
    v = tn,
    _ = en,
    N = window;
  if (c) {
    var C = fl(n),
      R = "clientHeight",
      h = "clientWidth";
    if (
      (C === pn(n) &&
        ((C = So(n)),
        Lr(C).position !== "static" &&
          s === "absolute" &&
          ((R = "scrollHeight"), (h = "scrollWidth"))),
      (C = C),
      o === en || ((o === tn || o === Fn) && i === Vs))
    ) {
      _ = Ln;
      var y = d && C === N && N.visualViewport ? N.visualViewport.height : C[R];
      (x -= y - r.height), (x *= l ? 1 : -1);
    }
    if (o === tn || ((o === en || o === Ln) && i === Vs)) {
      v = Fn;
      var w = d && C === N && N.visualViewport ? N.visualViewport.width : C[h];
      (b -= w - r.width), (b *= l ? 1 : -1);
    }
  }
  var T = Object.assign({ position: s }, c && RM),
    k = u === !0 ? TM({ x: b, y: x }, pn(n)) : { x: b, y: x };
  if (((b = k.x), (x = k.y), l)) {
    var M;
    return Object.assign(
      {},
      T,
      ((M = {}),
      (M[_] = p ? "0" : ""),
      (M[v] = m ? "0" : ""),
      (M.transform =
        (N.devicePixelRatio || 1) <= 1
          ? "translate(" + b + "px, " + x + "px)"
          : "translate3d(" + b + "px, " + x + "px, 0)"),
      M)
    );
  }
  return Object.assign(
    {},
    T,
    ((t = {}),
    (t[_] = p ? x + "px" : ""),
    (t[v] = m ? b + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function OM(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    a = i === void 0 ? !0 : i,
    s = n.roundOffsets,
    l = s === void 0 ? !0 : s,
    c = {
      placement: mr(t.placement),
      variation: aa(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      d0(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        d0(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const MM = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: OM,
  data: {},
};
var Vl = { passive: !0 };
function IM(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    a = r.resize,
    s = a === void 0 ? !0 : a,
    l = pn(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, Vl);
      }),
    s && l.addEventListener("resize", n.update, Vl),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, Vl);
        }),
        s && l.removeEventListener("resize", n.update, Vl);
    }
  );
}
const AM = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: IM,
  data: {},
};
var NM = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xc(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return NM[t];
  });
}
var jM = { start: "end", end: "start" };
function f0(e) {
  return e.replace(/start|end/g, function (t) {
    return jM[t];
  });
}
function Em(e) {
  var t = pn(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function km(e) {
  return ia(So(e)).left + Em(e).scrollLeft;
}
function DM(e, t) {
  var n = pn(e),
    r = So(e),
    o = n.visualViewport,
    i = r.clientWidth,
    a = r.clientHeight,
    s = 0,
    l = 0;
  if (o) {
    (i = o.width), (a = o.height);
    var c = Sw();
    (c || (!c && t === "fixed")) && ((s = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: a, x: s + km(e), y: l };
}
function LM(e) {
  var t,
    n = So(e),
    r = Em(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Vo(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    a = Vo(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    s = -r.scrollLeft + km(e),
    l = -r.scrollTop;
  return (
    Lr(o || n).direction === "rtl" &&
      (s += Vo(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: a, x: s, y: l }
  );
}
function Rm(e) {
  var t = Lr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ew(e) {
  return ["html", "body", "#document"].indexOf(vr(e)) >= 0
    ? e.ownerDocument.body
    : An(e) && Rm(e)
      ? e
      : Ew(cd(e));
}
function xs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ew(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = pn(r),
    a = o ? [i].concat(i.visualViewport || [], Rm(r) ? r : []) : r,
    s = t.concat(a);
  return o ? s : s.concat(xs(cd(a)));
}
function Mp(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function FM(e, t) {
  var n = ia(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function p0(e, t, n) {
  return t === bw ? Mp(DM(e, n)) : ti(t) ? FM(t, n) : Mp(LM(So(e)));
}
function zM(e) {
  var t = xs(cd(e)),
    n = ["absolute", "fixed"].indexOf(Lr(e).position) >= 0,
    r = n && An(e) ? fl(e) : e;
  return ti(r)
    ? t.filter(function (o) {
        return ti(o) && Cw(o, r) && vr(o) !== "body";
      })
    : [];
}
function BM(e, t, n, r) {
  var o = t === "clippingParents" ? zM(e) : [].concat(t),
    i = [].concat(o, [n]),
    a = i[0],
    s = i.reduce(
      function (l, c) {
        var u = p0(e, c, r);
        return (
          (l.top = Vo(u.top, l.top)),
          (l.right = Zc(u.right, l.right)),
          (l.bottom = Zc(u.bottom, l.bottom)),
          (l.left = Vo(u.left, l.left)),
          l
        );
      },
      p0(e, a, r)
    );
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function kw(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? mr(r) : null,
    i = r ? aa(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    s = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case en:
      l = { x: a, y: t.y - n.height };
      break;
    case Ln:
      l = { x: a, y: t.y + t.height };
      break;
    case Fn:
      l = { x: t.x + t.width, y: s };
      break;
    case tn:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? Pm(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case ra:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Vs:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Gs(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    a = i === void 0 ? e.strategy : i,
    s = n.boundary,
    l = s === void 0 ? sM : s,
    c = n.rootBoundary,
    u = c === void 0 ? bw : c,
    d = n.elementContext,
    f = d === void 0 ? Wa : d,
    b = n.altBoundary,
    g = b === void 0 ? !1 : b,
    x = n.padding,
    P = x === void 0 ? 0 : x,
    m = _w(typeof P != "number" ? P : Pw(P, dl)),
    p = f === Wa ? lM : Wa,
    v = e.rects.popper,
    _ = e.elements[g ? p : f],
    N = BM(ti(_) ? _ : _.contextElement || So(e.elements.popper), l, u, a),
    C = ia(e.elements.reference),
    R = kw({ reference: C, element: v, strategy: "absolute", placement: o }),
    h = Mp(Object.assign({}, v, R)),
    y = f === Wa ? h : C,
    w = {
      top: N.top - y.top + m.top,
      bottom: y.bottom - N.bottom + m.bottom,
      left: N.left - y.left + m.left,
      right: y.right - N.right + m.right,
    },
    T = e.modifiersData.offset;
  if (f === Wa && T) {
    var k = T[o];
    Object.keys(w).forEach(function (M) {
      var D = [Fn, Ln].indexOf(M) >= 0 ? 1 : -1,
        O = [en, Ln].indexOf(M) >= 0 ? "y" : "x";
      w[M] += k[O] * D;
    });
  }
  return w;
}
function WM(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    a = n.padding,
    s = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? ww : l,
    u = aa(r),
    d = u
      ? s
        ? c0
        : c0.filter(function (g) {
            return aa(g) === u;
          })
      : dl,
    f = d.filter(function (g) {
      return c.indexOf(g) >= 0;
    });
  f.length === 0 && (f = d);
  var b = f.reduce(function (g, x) {
    return (
      (g[x] = Gs(e, { placement: x, boundary: o, rootBoundary: i, padding: a })[
        mr(x)
      ]),
      g
    );
  }, {});
  return Object.keys(b).sort(function (g, x) {
    return b[g] - b[x];
  });
}
function UM(e) {
  if (mr(e) === Cm) return [];
  var t = xc(e);
  return [f0(e), t, f0(t)];
}
function HM(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        a = n.altAxis,
        s = a === void 0 ? !0 : a,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        b = n.flipVariations,
        g = b === void 0 ? !0 : b,
        x = n.allowedAutoPlacements,
        P = t.options.placement,
        m = mr(P),
        p = m === P,
        v = l || (p || !g ? [xc(P)] : UM(P)),
        _ = [P].concat(v).reduce(function (Z, Y) {
          return Z.concat(
            mr(Y) === Cm
              ? WM(t, {
                  placement: Y,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: g,
                  allowedAutoPlacements: x,
                })
              : Y
          );
        }, []),
        N = t.rects.reference,
        C = t.rects.popper,
        R = new Map(),
        h = !0,
        y = _[0],
        w = 0;
      w < _.length;
      w++
    ) {
      var T = _[w],
        k = mr(T),
        M = aa(T) === ra,
        D = [en, Ln].indexOf(k) >= 0,
        O = D ? "width" : "height",
        A = Gs(t, {
          placement: T,
          boundary: u,
          rootBoundary: d,
          altBoundary: f,
          padding: c,
        }),
        j = D ? (M ? Fn : tn) : M ? Ln : en;
      N[O] > C[O] && (j = xc(j));
      var E = xc(j),
        L = [];
      if (
        (i && L.push(A[k] <= 0),
        s && L.push(A[j] <= 0, A[E] <= 0),
        L.every(function (Z) {
          return Z;
        }))
      ) {
        (y = T), (h = !1);
        break;
      }
      R.set(T, L);
    }
    if (h)
      for (
        var B = g ? 3 : 1,
          U = function (Y) {
            var J = _.find(function (fe) {
              var Ie = R.get(fe);
              if (Ie)
                return Ie.slice(0, Y).every(function (_e) {
                  return _e;
                });
            });
            if (J) return (y = J), "break";
          },
          K = B;
        K > 0;
        K--
      ) {
        var ce = U(K);
        if (ce === "break") break;
      }
    t.placement !== y &&
      ((t.modifiersData[r]._skip = !0), (t.placement = y), (t.reset = !0));
  }
}
const VM = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: HM,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function h0(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function m0(e) {
  return [en, Fn, Ln, tn].some(function (t) {
    return e[t] >= 0;
  });
}
function GM(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    a = Gs(t, { elementContext: "reference" }),
    s = Gs(t, { altBoundary: !0 }),
    l = h0(a, r),
    c = h0(s, o, i),
    u = m0(l),
    d = m0(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    }));
}
const KM = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: GM,
};
function YM(e, t, n) {
  var r = mr(e),
    o = [tn, en].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = i[0],
    s = i[1];
  return (
    (a = a || 0),
    (s = (s || 0) * o),
    [tn, Fn].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s }
  );
}
function qM(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    a = ww.reduce(function (u, d) {
      return (u[d] = YM(d, t.rects, i)), u;
    }, {}),
    s = a[t.placement],
    l = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[r] = a);
}
const QM = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qM,
};
function XM(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = kw({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const JM = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: XM,
  data: {},
};
function ZM(e) {
  return e === "x" ? "y" : "x";
}
function eI(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    a = n.altAxis,
    s = a === void 0 ? !1 : a,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    f = n.tether,
    b = f === void 0 ? !0 : f,
    g = n.tetherOffset,
    x = g === void 0 ? 0 : g,
    P = Gs(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    m = mr(t.placement),
    p = aa(t.placement),
    v = !p,
    _ = Pm(m),
    N = ZM(_),
    C = t.modifiersData.popperOffsets,
    R = t.rects.reference,
    h = t.rects.popper,
    y =
      typeof x == "function"
        ? x(Object.assign({}, t.rects, { placement: t.placement }))
        : x,
    w =
      typeof y == "number"
        ? { mainAxis: y, altAxis: y }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, y),
    T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    k = { x: 0, y: 0 };
  if (C) {
    if (i) {
      var M,
        D = _ === "y" ? en : tn,
        O = _ === "y" ? Ln : Fn,
        A = _ === "y" ? "height" : "width",
        j = C[_],
        E = j + P[D],
        L = j - P[O],
        B = b ? -h[A] / 2 : 0,
        U = p === ra ? R[A] : h[A],
        K = p === ra ? -h[A] : -R[A],
        ce = t.elements.arrow,
        Z = b && ce ? _m(ce) : { width: 0, height: 0 },
        Y = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : $w(),
        J = Y[D],
        fe = Y[O],
        Ie = ys(0, R[A], Z[A]),
        _e = v ? R[A] / 2 - B - Ie - J - w.mainAxis : U - Ie - J - w.mainAxis,
        at = v
          ? -R[A] / 2 + B + Ie + fe + w.mainAxis
          : K + Ie + fe + w.mainAxis,
        he = t.elements.arrow && fl(t.elements.arrow),
        st = he ? (_ === "y" ? he.clientTop || 0 : he.clientLeft || 0) : 0,
        ae = (M = T == null ? void 0 : T[_]) != null ? M : 0,
        de = j + _e - ae - st,
        re = j + at - ae,
        vn = ys(b ? Zc(E, de) : E, j, b ? Vo(L, re) : L);
      (C[_] = vn), (k[_] = vn - j);
    }
    if (s) {
      var Lt,
        wt = _ === "x" ? en : tn,
        Wn = _ === "x" ? Ln : Fn,
        pt = C[N],
        yt = N === "y" ? "height" : "width",
        Ft = pt + P[wt],
        zt = pt - P[Wn],
        Ee = [en, tn].indexOf(m) !== -1,
        St = (Lt = T == null ? void 0 : T[N]) != null ? Lt : 0,
        yn = Ee ? Ft : pt - R[yt] - h[yt] - St + w.altAxis,
        on = Ee ? pt + R[yt] + h[yt] - St - w.altAxis : zt,
        Vr = b && Ee ? $M(yn, pt, on) : ys(b ? yn : Ft, pt, b ? on : zt);
      (C[N] = Vr), (k[N] = Vr - pt);
    }
    t.modifiersData[r] = k;
  }
}
const tI = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: eI,
  requiresIfExists: ["offset"],
};
function nI(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function rI(e) {
  return e === pn(e) || !An(e) ? Em(e) : nI(e);
}
function oI(e) {
  var t = e.getBoundingClientRect(),
    n = oa(t.width) / e.offsetWidth || 1,
    r = oa(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function iI(e, t, n) {
  n === void 0 && (n = !1);
  var r = An(t),
    o = An(t) && oI(t),
    i = So(t),
    a = ia(e, o, n),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((vr(t) !== "body" || Rm(i)) && (s = rI(t)),
      An(t)
        ? ((l = ia(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = km(i))),
    {
      x: a.left + s.scrollLeft - l.x,
      y: a.top + s.scrollTop - l.y,
      width: a.width,
      height: a.height,
    }
  );
}
function aI(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function (s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function sI(e) {
  var t = aI(e);
  return yM.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function lI(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function cI(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var g0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function v0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function uI(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? g0 : o;
  return function (s, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, g0, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      b = {
        state: u,
        setOptions: function (m) {
          var p = typeof m == "function" ? m(u.options) : m;
          x(),
            (u.options = Object.assign({}, i, u.options, p)),
            (u.scrollParents = {
              reference: ti(s)
                ? xs(s)
                : s.contextElement
                  ? xs(s.contextElement)
                  : [],
              popper: xs(l),
            });
          var v = sI(cI([].concat(r, u.options.modifiers)));
          return (
            (u.orderedModifiers = v.filter(function (_) {
              return _.enabled;
            })),
            g(),
            b.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var m = u.elements,
              p = m.reference,
              v = m.popper;
            if (v0(p, v)) {
              (u.rects = {
                reference: iI(p, fl(v), u.options.strategy === "fixed"),
                popper: _m(v),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (w) {
                  return (u.modifiersData[w.name] = Object.assign({}, w.data));
                });
              for (var _ = 0; _ < u.orderedModifiers.length; _++) {
                if (u.reset === !0) {
                  (u.reset = !1), (_ = -1);
                  continue;
                }
                var N = u.orderedModifiers[_],
                  C = N.fn,
                  R = N.options,
                  h = R === void 0 ? {} : R,
                  y = N.name;
                typeof C == "function" &&
                  (u = C({ state: u, options: h, name: y, instance: b }) || u);
              }
            }
          }
        },
        update: lI(function () {
          return new Promise(function (P) {
            b.forceUpdate(), P(u);
          });
        }),
        destroy: function () {
          x(), (f = !0);
        },
      };
    if (!v0(s, l)) return b;
    b.setOptions(c).then(function (P) {
      !f && c.onFirstUpdate && c.onFirstUpdate(P);
    });
    function g() {
      u.orderedModifiers.forEach(function (P) {
        var m = P.name,
          p = P.options,
          v = p === void 0 ? {} : p,
          _ = P.effect;
        if (typeof _ == "function") {
          var N = _({ state: u, name: m, instance: b, options: v }),
            C = function () {};
          d.push(N || C);
        }
      });
    }
    function x() {
      d.forEach(function (P) {
        return P();
      }),
        (d = []);
    }
    return b;
  };
}
var dI = [AM, JM, MM, wM, QM, VM, tI, kM, KM],
  fI = uI({ defaultModifiers: dI });
const Rw = "Popper";
function pI(e) {
  return yw(Rw, e);
}
UO(Rw, ["root"]);
const hI = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  mI = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function gI(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Ip(e) {
  return typeof e == "function" ? e() : e;
}
function vI(e) {
  return e.nodeType !== void 0;
}
const yI = () => Se({ root: ["root"] }, eO(pI)),
  xI = {},
  bI = $.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        direction: a,
        disablePortal: s,
        modifiers: l,
        open: c,
        placement: u,
        popperOptions: d,
        popperRef: f,
        slotProps: b = {},
        slots: g = {},
        TransitionProps: x,
      } = t,
      P = X(t, hI),
      m = $.useRef(null),
      p = vt(m, n),
      v = $.useRef(null),
      _ = vt(v, f),
      N = $.useRef(_);
    gr(() => {
      N.current = _;
    }, [_]),
      $.useImperativeHandle(f, () => v.current, []);
    const C = gI(u, a),
      [R, h] = $.useState(C),
      [y, w] = $.useState(Ip(o));
    $.useEffect(() => {
      v.current && v.current.forceUpdate();
    }),
      $.useEffect(() => {
        o && w(Ip(o));
      }, [o]),
      gr(() => {
        if (!y || !c) return;
        const O = (E) => {
          h(E.placement);
        };
        let A = [
          { name: "preventOverflow", options: { altBoundary: s } },
          { name: "flip", options: { altBoundary: s } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: E }) => {
              O(E);
            },
          },
        ];
        l != null && (A = A.concat(l)),
          d && d.modifiers != null && (A = A.concat(d.modifiers));
        const j = fI(y, m.current, I({ placement: C }, d, { modifiers: A }));
        return (
          N.current(j),
          () => {
            j.destroy(), N.current(null);
          }
        );
      }, [y, s, l, c, d, C]);
    const T = { placement: R };
    x !== null && (T.TransitionProps = x);
    const k = yI(),
      M = (r = g.root) != null ? r : "div",
      D = Zo({
        elementType: M,
        externalSlotProps: b.root,
        externalForwardedProps: P,
        additionalProps: { role: "tooltip", ref: p },
        ownerState: t,
        className: k.root,
      });
    return S.jsx(M, I({}, D, { children: typeof i == "function" ? i(T) : i }));
  }),
  wI = $.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: a = "ltr",
        disablePortal: s = !1,
        keepMounted: l = !1,
        modifiers: c,
        open: u,
        placement: d = "bottom",
        popperOptions: f = xI,
        popperRef: b,
        style: g,
        transition: x = !1,
        slotProps: P = {},
        slots: m = {},
      } = t,
      p = X(t, mI),
      [v, _] = $.useState(!0),
      N = () => {
        _(!1);
      },
      C = () => {
        _(!0);
      };
    if (!l && !u && (!x || v)) return null;
    let R;
    if (i) R = i;
    else if (r) {
      const w = Ip(r);
      R = w && vI(w) ? Ht(w).body : Ht(null).body;
    }
    const h = !u && l && (!x || v) ? "none" : void 0,
      y = x ? { in: u, onEnter: N, onExited: C } : void 0;
    return S.jsx(xw, {
      disablePortal: s,
      container: R,
      children: S.jsx(
        bI,
        I(
          {
            anchorEl: r,
            direction: a,
            disablePortal: s,
            modifiers: c,
            ref: n,
            open: x ? !v : u,
            placement: d,
            popperOptions: f,
            popperRef: b,
            slotProps: P,
            slots: m,
          },
          p,
          {
            style: I({ position: "fixed", top: 0, left: 0, display: h }, g),
            TransitionProps: y,
            children: o,
          }
        )
      ),
    });
  });
var Tm = {};
Object.defineProperty(Tm, "__esModule", { value: !0 });
var Tw = (Tm.default = void 0),
  SI = $I($),
  CI = dw;
function Ow(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Ow = function (r) {
    return r ? n : t;
  })(e);
}
function $I(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Ow(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function _I(e) {
  return Object.keys(e).length === 0;
}
function PI(e = null) {
  const t = SI.useContext(CI.ThemeContext);
  return !t || _I(t) ? e : t;
}
Tw = Tm.default = PI;
const EI = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  kI = te(wI, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  RI = $.forwardRef(function (t, n) {
    var r;
    const o = Tw(),
      i = be({ props: t, name: "MuiPopper" }),
      {
        anchorEl: a,
        component: s,
        components: l,
        componentsProps: c,
        container: u,
        disablePortal: d,
        keepMounted: f,
        modifiers: b,
        open: g,
        placement: x,
        popperOptions: P,
        popperRef: m,
        transition: p,
        slots: v,
        slotProps: _,
      } = i,
      N = X(i, EI),
      C =
        (r = v == null ? void 0 : v.root) != null
          ? r
          : l == null
            ? void 0
            : l.Root,
      R = I(
        {
          anchorEl: a,
          container: u,
          disablePortal: d,
          keepMounted: f,
          modifiers: b,
          open: g,
          placement: x,
          popperOptions: P,
          popperRef: m,
          transition: p,
        },
        N
      );
    return S.jsx(
      kI,
      I(
        {
          as: s,
          direction: o == null ? void 0 : o.direction,
          slots: { root: C },
          slotProps: _ ?? c,
        },
        R,
        { ref: n }
      )
    );
  }),
  Mw = RI,
  TI = ym(
    S.jsx("path", {
      d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
    }),
    "Cancel"
  );
function OI(e) {
  return we("MuiChip", e);
}
const MI = xe("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible",
  ]),
  ke = MI,
  II = [
    "avatar",
    "className",
    "clickable",
    "color",
    "component",
    "deleteIcon",
    "disabled",
    "icon",
    "label",
    "onClick",
    "onDelete",
    "onKeyDown",
    "onKeyUp",
    "size",
    "variant",
    "tabIndex",
    "skipFocusWhenDisabled",
  ],
  AI = (e) => {
    const {
        classes: t,
        disabled: n,
        size: r,
        color: o,
        iconColor: i,
        onDelete: a,
        clickable: s,
        variant: l,
      } = e,
      c = {
        root: [
          "root",
          l,
          n && "disabled",
          `size${G(r)}`,
          `color${G(o)}`,
          s && "clickable",
          s && `clickableColor${G(o)}`,
          a && "deletable",
          a && `deletableColor${G(o)}`,
          `${l}${G(o)}`,
        ],
        label: ["label", `label${G(r)}`],
        avatar: ["avatar", `avatar${G(r)}`, `avatarColor${G(o)}`],
        icon: ["icon", `icon${G(r)}`, `iconColor${G(i)}`],
        deleteIcon: [
          "deleteIcon",
          `deleteIcon${G(r)}`,
          `deleteIconColor${G(o)}`,
          `deleteIcon${G(l)}Color${G(o)}`,
        ],
      };
    return Se(c, OI, t);
  },
  NI = te("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        {
          color: r,
          iconColor: o,
          clickable: i,
          onDelete: a,
          size: s,
          variant: l,
        } = n;
      return [
        { [`& .${ke.avatar}`]: t.avatar },
        { [`& .${ke.avatar}`]: t[`avatar${G(s)}`] },
        { [`& .${ke.avatar}`]: t[`avatarColor${G(r)}`] },
        { [`& .${ke.icon}`]: t.icon },
        { [`& .${ke.icon}`]: t[`icon${G(s)}`] },
        { [`& .${ke.icon}`]: t[`iconColor${G(o)}`] },
        { [`& .${ke.deleteIcon}`]: t.deleteIcon },
        { [`& .${ke.deleteIcon}`]: t[`deleteIcon${G(s)}`] },
        { [`& .${ke.deleteIcon}`]: t[`deleteIconColor${G(r)}`] },
        { [`& .${ke.deleteIcon}`]: t[`deleteIcon${G(l)}Color${G(r)}`] },
        t.root,
        t[`size${G(s)}`],
        t[`color${G(r)}`],
        i && t.clickable,
        i && r !== "default" && t[`clickableColor${G(r)})`],
        a && t.deletable,
        a && r !== "default" && t[`deletableColor${G(r)}`],
        t[l],
        t[`${l}${G(r)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const n =
        e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
      return I(
        {
          maxWidth: "100%",
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: "nowrap",
          transition: e.transitions.create(["background-color", "box-shadow"]),
          cursor: "unset",
          outline: 0,
          textDecoration: "none",
          border: 0,
          padding: 0,
          verticalAlign: "middle",
          boxSizing: "border-box",
          [`&.${ke.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: "none",
          },
          [`& .${ke.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${ke.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${ke.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${ke.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${ke.icon}`]: I(
            { marginLeft: 5, marginRight: -6 },
            t.size === "small" && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            t.iconColor === t.color &&
              I(
                { color: e.vars ? e.vars.palette.Chip.defaultIconColor : n },
                t.color !== "default" && { color: "inherit" }
              )
          ),
          [`& .${ke.deleteIcon}`]: I(
            {
              WebkitTapHighlightColor: "transparent",
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : Re(e.palette.text.primary, 0.26),
              fontSize: 22,
              cursor: "pointer",
              margin: "0 5px 0 -6px",
              "&:hover": {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : Re(e.palette.text.primary, 0.4),
              },
            },
            t.size === "small" && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            t.color !== "default" && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : Re(e.palette[t.color].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].contrastText,
              },
            }
          ),
        },
        t.size === "small" && { height: 24 },
        t.color !== "default" && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${ke.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Re(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== "default" && {
            [`&.${ke.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.clickable && {
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Re(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
          },
          [`&.${ke.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Re(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
          "&:active": { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== "default" && {
            [`&:hover, &.${ke.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.variant === "outlined" && {
          backgroundColor: "transparent",
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
          [`&.${ke.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover,
          },
          [`&.${ke.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`& .${ke.avatar}`]: { marginLeft: 4 },
          [`& .${ke.avatarSmall}`]: { marginLeft: 2 },
          [`& .${ke.icon}`]: { marginLeft: 4 },
          [`& .${ke.iconSmall}`]: { marginLeft: 2 },
          [`& .${ke.deleteIcon}`]: { marginRight: 5 },
          [`& .${ke.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === "outlined" &&
          t.color !== "default" && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Re(e.palette[t.color].main, 0.7)}`,
            [`&.${ke.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Re(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${ke.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`
                : Re(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${ke.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : Re(e.palette[t.color].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[t.color].main,
              },
            },
          }
      )
  ),
  jI = te("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { size: r } = n;
      return [t.label, t[`label${G(r)}`]];
    },
  })(({ ownerState: e }) =>
    I(
      {
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: "nowrap",
      },
      e.variant === "outlined" && { paddingLeft: 11, paddingRight: 11 },
      e.size === "small" && { paddingLeft: 8, paddingRight: 8 },
      e.size === "small" &&
        e.variant === "outlined" && { paddingLeft: 7, paddingRight: 7 }
    )
  );
function y0(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const DI = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiChip" }),
      {
        avatar: o,
        className: i,
        clickable: a,
        color: s = "default",
        component: l,
        deleteIcon: c,
        disabled: u = !1,
        icon: d,
        label: f,
        onClick: b,
        onDelete: g,
        onKeyDown: x,
        onKeyUp: P,
        size: m = "medium",
        variant: p = "filled",
        tabIndex: v,
        skipFocusWhenDisabled: _ = !1,
      } = r,
      N = X(r, II),
      C = $.useRef(null),
      R = vt(C, n),
      h = (L) => {
        L.stopPropagation(), g && g(L);
      },
      y = (L) => {
        L.currentTarget === L.target && y0(L) && L.preventDefault(), x && x(L);
      },
      w = (L) => {
        L.currentTarget === L.target &&
          (g && y0(L)
            ? g(L)
            : L.key === "Escape" && C.current && C.current.blur()),
          P && P(L);
      },
      T = a !== !1 && b ? !0 : a,
      k = T || g ? ei : l || "div",
      M = I({}, r, {
        component: k,
        disabled: u,
        size: m,
        color: s,
        iconColor: ($.isValidElement(d) && d.props.color) || s,
        onDelete: !!g,
        clickable: T,
        variant: p,
      }),
      D = AI(M),
      O =
        k === ei
          ? I(
              { component: l || "div", focusVisibleClassName: D.focusVisible },
              g && { disableRipple: !0 }
            )
          : {};
    let A = null;
    g &&
      (A =
        c && $.isValidElement(c)
          ? $.cloneElement(c, {
              className: q(c.props.className, D.deleteIcon),
              onClick: h,
            })
          : S.jsx(TI, { className: q(D.deleteIcon), onClick: h }));
    let j = null;
    o &&
      $.isValidElement(o) &&
      (j = $.cloneElement(o, { className: q(D.avatar, o.props.className) }));
    let E = null;
    return (
      d &&
        $.isValidElement(d) &&
        (E = $.cloneElement(d, { className: q(D.icon, d.props.className) })),
      S.jsxs(
        NI,
        I(
          {
            as: k,
            className: q(D.root, i),
            disabled: T && u ? !0 : void 0,
            onClick: b,
            onKeyDown: y,
            onKeyUp: w,
            ref: R,
            tabIndex: _ && u ? -1 : v,
            ownerState: M,
          },
          O,
          N,
          {
            children: [
              j || E,
              S.jsx(jI, { className: q(D.label), ownerState: M, children: f }),
              A,
            ],
          }
        )
      )
    );
  }),
  Gl = DI,
  LI = ym(
    S.jsx("path", {
      d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
    }),
    "Person"
  );
function FI(e) {
  return we("MuiAvatar", e);
}
xe("MuiAvatar", [
  "root",
  "colorDefault",
  "circular",
  "rounded",
  "square",
  "img",
  "fallback",
]);
const zI = [
    "alt",
    "children",
    "className",
    "component",
    "slots",
    "slotProps",
    "imgProps",
    "sizes",
    "src",
    "srcSet",
    "variant",
  ],
  BI = LT(),
  WI = (e) => {
    const { classes: t, variant: n, colorDefault: r } = e;
    return Se(
      {
        root: ["root", n, r && "colorDefault"],
        img: ["img"],
        fallback: ["fallback"],
      },
      FI,
      t
    );
  },
  UI = te("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], n.colorDefault && t.colorDefault];
    },
  })(({ theme: e }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    variants: [
      {
        props: { variant: "rounded" },
        style: { borderRadius: (e.vars || e).shape.borderRadius },
      },
      { props: { variant: "square" }, style: { borderRadius: 0 } },
      {
        props: { colorDefault: !0 },
        style: I(
          { color: (e.vars || e).palette.background.default },
          e.vars
            ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
            : I(
                { backgroundColor: e.palette.grey[400] },
                e.applyStyles("dark", { backgroundColor: e.palette.grey[600] })
              )
        ),
      },
    ],
  })),
  HI = te("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, t) => t.img,
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4,
  }),
  VI = te(LI, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, t) => t.fallback,
  })({ width: "75%", height: "75%" });
function GI({ crossOrigin: e, referrerPolicy: t, src: n, srcSet: r }) {
  const [o, i] = $.useState(!1);
  return (
    $.useEffect(() => {
      if (!n && !r) return;
      i(!1);
      let a = !0;
      const s = new Image();
      return (
        (s.onload = () => {
          a && i("loaded");
        }),
        (s.onerror = () => {
          a && i("error");
        }),
        (s.crossOrigin = e),
        (s.referrerPolicy = t),
        (s.src = n),
        r && (s.srcset = r),
        () => {
          a = !1;
        }
      );
    }, [e, t, n, r]),
    o
  );
}
const KI = $.forwardRef(function (t, n) {
    const r = BI({ props: t, name: "MuiAvatar" }),
      {
        alt: o,
        children: i,
        className: a,
        component: s = "div",
        slots: l = {},
        slotProps: c = {},
        imgProps: u,
        sizes: d,
        src: f,
        srcSet: b,
        variant: g = "circular",
      } = r,
      x = X(r, zI);
    let P = null;
    const m = GI(I({}, u, { src: f, srcSet: b })),
      p = f || b,
      v = p && m !== "error",
      _ = I({}, r, { colorDefault: !v, component: s, variant: g }),
      N = WI(_),
      [C, R] = iO("img", {
        className: N.img,
        elementType: HI,
        externalForwardedProps: {
          slots: l,
          slotProps: { img: I({}, u, c.img) },
        },
        additionalProps: { alt: o, src: f, srcSet: b, sizes: d },
        ownerState: _,
      });
    return (
      v
        ? (P = S.jsx(C, I({}, R)))
        : i || i === 0
          ? (P = i)
          : p && o
            ? (P = o[0])
            : (P = S.jsx(VI, { ownerState: _, className: N.fallback })),
      S.jsx(
        UI,
        I({ as: s, ownerState: _, className: q(N.root, a), ref: n }, x, {
          children: P,
        })
      )
    );
  }),
  Fr = KI,
  YI = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  qI = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  QI = $.forwardRef(function (t, n) {
    const r = ii(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: a = !0,
        children: s,
        easing: l,
        in: c,
        onEnter: u,
        onEntered: d,
        onEntering: f,
        onExit: b,
        onExited: g,
        onExiting: x,
        style: P,
        timeout: m = o,
        TransitionComponent: p = xm,
      } = t,
      v = X(t, YI),
      _ = $.useRef(null),
      N = vt(_, s.ref, n),
      C = (D) => (O) => {
        if (D) {
          const A = _.current;
          O === void 0 ? D(A) : D(A, O);
        }
      },
      R = C(f),
      h = C((D, O) => {
        Sm(D);
        const A = na({ style: P, timeout: m, easing: l }, { mode: "enter" });
        (D.style.webkitTransition = r.transitions.create("opacity", A)),
          (D.style.transition = r.transitions.create("opacity", A)),
          u && u(D, O);
      }),
      y = C(d),
      w = C(x),
      T = C((D) => {
        const O = na({ style: P, timeout: m, easing: l }, { mode: "exit" });
        (D.style.webkitTransition = r.transitions.create("opacity", O)),
          (D.style.transition = r.transitions.create("opacity", O)),
          b && b(D);
      }),
      k = C(g),
      M = (D) => {
        i && i(_.current, D);
      };
    return S.jsx(
      p,
      I(
        {
          appear: a,
          in: c,
          nodeRef: _,
          onEnter: h,
          onEntered: y,
          onEntering: R,
          onExit: T,
          onExited: k,
          onExiting: w,
          addEndListener: M,
          timeout: m,
        },
        v,
        {
          children: (D, O) =>
            $.cloneElement(
              s,
              I(
                {
                  style: I(
                    {
                      opacity: 0,
                      visibility: D === "exited" && !c ? "hidden" : void 0,
                    },
                    qI[D],
                    P,
                    s.props.style
                  ),
                  ref: N,
                },
                O
              )
            ),
        }
      )
    );
  }),
  Iw = QI;
function XI(e) {
  return we("MuiBackdrop", e);
}
xe("MuiBackdrop", ["root", "invisible"]);
const JI = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  ZI = (e) => {
    const { classes: t, invisible: n } = e;
    return Se({ root: ["root", n && "invisible"] }, XI, t);
  },
  eA = te("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    I(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  tA = $.forwardRef(function (t, n) {
    var r, o, i;
    const a = be({ props: t, name: "MuiBackdrop" }),
      {
        children: s,
        className: l,
        component: c = "div",
        components: u = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: b,
        slotProps: g = {},
        slots: x = {},
        TransitionComponent: P = Iw,
        transitionDuration: m,
      } = a,
      p = X(a, JI),
      v = I({}, a, { component: c, invisible: f }),
      _ = ZI(v),
      N = (r = g.root) != null ? r : d.root;
    return S.jsx(
      P,
      I({ in: b, timeout: m }, p, {
        children: S.jsx(
          eA,
          I({ "aria-hidden": !0 }, N, {
            as: (o = (i = x.root) != null ? i : u.Root) != null ? o : c,
            className: q(_.root, l, N == null ? void 0 : N.className),
            ownerState: I({}, v, N == null ? void 0 : N.ownerState),
            classes: _,
            ref: n,
            children: s,
          })
        ),
      })
    );
  }),
  Aw = tA,
  nA = xe("MuiBox", ["root"]),
  rA = nA,
  oA = uw(),
  iA = Ok({
    themeId: ku,
    defaultTheme: oA,
    defaultClassName: rA.root,
    generateClassName: om.generate,
  }),
  Tn = iA;
function aA(e) {
  return we("MuiButton", e);
}
const sA = xe("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Kl = sA,
  lA = $.createContext({}),
  cA = lA,
  uA = $.createContext(void 0),
  dA = uA,
  fA = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  pA = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: a,
      } = e,
      s = {
        root: [
          "root",
          i,
          `${i}${G(t)}`,
          `size${G(o)}`,
          `${i}Size${G(o)}`,
          `color${G(t)}`,
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${G(o)}`],
        endIcon: ["icon", "endIcon", `iconSize${G(o)}`],
      },
      l = Se(s, aA, a);
    return I({}, a, l);
  },
  Nw = (e) =>
    I(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  hA = te(ei, {
    shouldForwardProp: (e) => ga(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${G(n.color)}`],
        t[`size${G(n.size)}`],
        t[`${n.variant}Size${G(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      const o =
          e.palette.mode === "light"
            ? e.palette.grey[300]
            : e.palette.grey[800],
        i =
          e.palette.mode === "light"
            ? e.palette.grey.A100
            : e.palette.grey[700];
      return I(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": I(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Re(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Re(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : Re(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: e.vars
                ? e.vars.palette.Button.inheritContainedHoverBg
                : i,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": I(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Kl.focusVisible}`]: I(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Kl.disabled}`]: I(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Re(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
              ? void 0
              : n.call(r, e.palette.grey[300]),
          backgroundColor: e.vars
            ? e.vars.palette.Button.inheritContainedBg
            : o,
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Kl.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Kl.disabled}`]: { boxShadow: "none" },
      }
  ),
  mA = te("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${G(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    I(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      Nw(e)
    )
  ),
  gA = te("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${G(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    I(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      Nw(e)
    )
  ),
  vA = $.forwardRef(function (t, n) {
    const r = $.useContext(cA),
      o = $.useContext(dA),
      i = sm(r, t),
      a = be({ props: i, name: "MuiButton" }),
      {
        children: s,
        color: l = "primary",
        component: c = "button",
        className: u,
        disabled: d = !1,
        disableElevation: f = !1,
        disableFocusRipple: b = !1,
        endIcon: g,
        focusVisibleClassName: x,
        fullWidth: P = !1,
        size: m = "medium",
        startIcon: p,
        type: v,
        variant: _ = "text",
      } = a,
      N = X(a, fA),
      C = I({}, a, {
        color: l,
        component: c,
        disabled: d,
        disableElevation: f,
        disableFocusRipple: b,
        fullWidth: P,
        size: m,
        type: v,
        variant: _,
      }),
      R = pA(C),
      h =
        p && S.jsx(mA, { className: R.startIcon, ownerState: C, children: p }),
      y = g && S.jsx(gA, { className: R.endIcon, ownerState: C, children: g }),
      w = o || "";
    return S.jsxs(
      hA,
      I(
        {
          ownerState: C,
          className: q(r.className, R.root, u, w),
          component: c,
          disabled: d,
          focusRipple: !b,
          focusVisibleClassName: q(R.focusVisible, x),
          ref: n,
          type: v,
        },
        N,
        { classes: R, children: [h, s, y] }
      )
    );
  }),
  kn = vA;
function yA(e) {
  return we("MuiCard", e);
}
xe("MuiCard", ["root"]);
const xA = ["className", "raised"],
  bA = (e) => {
    const { classes: t } = e;
    return Se({ root: ["root"] }, yA, t);
  },
  wA = te(wo, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ overflow: "hidden" })),
  SA = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiCard" }),
      { className: o, raised: i = !1 } = r,
      a = X(r, xA),
      s = I({}, r, { raised: i }),
      l = bA(s);
    return S.jsx(
      wA,
      I(
        {
          className: q(l.root, o),
          elevation: i ? 8 : void 0,
          ref: n,
          ownerState: s,
        },
        a
      )
    );
  }),
  jw = SA;
function CA(e) {
  return we("MuiCardActions", e);
}
xe("MuiCardActions", ["root", "spacing"]);
const $A = ["disableSpacing", "className"],
  _A = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Se({ root: ["root", !n && "spacing"] }, CA, t);
  },
  PA = te("div", {
    name: "MuiCardActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    I(
      { display: "flex", alignItems: "center", padding: 8 },
      !e.disableSpacing && {
        "& > :not(style) ~ :not(style)": { marginLeft: 8 },
      }
    )
  ),
  EA = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiCardActions" }),
      { disableSpacing: o = !1, className: i } = r,
      a = X(r, $A),
      s = I({}, r, { disableSpacing: o }),
      l = _A(s);
    return S.jsx(PA, I({ className: q(l.root, i), ownerState: s, ref: n }, a));
  }),
  kA = EA;
function RA(e) {
  return we("MuiCardContent", e);
}
xe("MuiCardContent", ["root"]);
const TA = ["className", "component"],
  OA = (e) => {
    const { classes: t } = e;
    return Se({ root: ["root"] }, RA, t);
  },
  MA = te("div", {
    name: "MuiCardContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(() => ({ padding: 16, "&:last-child": { paddingBottom: 24 } })),
  IA = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiCardContent" }),
      { className: o, component: i = "div" } = r,
      a = X(r, TA),
      s = I({}, r, { component: i }),
      l = OA(s);
    return S.jsx(
      MA,
      I({ as: i, className: q(l.root, o), ownerState: s, ref: n }, a)
    );
  }),
  Dw = IA;
function AA(e) {
  return we("MuiCardMedia", e);
}
xe("MuiCardMedia", ["root", "media", "img"]);
const NA = ["children", "className", "component", "image", "src", "style"],
  jA = (e) => {
    const { classes: t, isMediaComponent: n, isImageComponent: r } = e;
    return Se({ root: ["root", n && "media", r && "img"] }, AA, t);
  },
  DA = te("div", {
    name: "MuiCardMedia",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e,
        { isMediaComponent: r, isImageComponent: o } = n;
      return [t.root, r && t.media, o && t.img];
    },
  })(({ ownerState: e }) =>
    I(
      {
        display: "block",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      e.isMediaComponent && { width: "100%" },
      e.isImageComponent && { objectFit: "cover" }
    )
  ),
  LA = ["video", "audio", "picture", "iframe", "img"],
  FA = ["picture", "img"],
  zA = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiCardMedia" }),
      {
        children: o,
        className: i,
        component: a = "div",
        image: s,
        src: l,
        style: c,
      } = r,
      u = X(r, NA),
      d = LA.indexOf(a) !== -1,
      f = !d && s ? I({ backgroundImage: `url("${s}")` }, c) : c,
      b = I({}, r, {
        component: a,
        isMediaComponent: d,
        isImageComponent: FA.indexOf(a) !== -1,
      }),
      g = jA(b);
    return S.jsx(
      DA,
      I(
        {
          className: q(g.root, i),
          as: a,
          role: !d && s ? "img" : void 0,
          ref: n,
          style: f,
          ownerState: b,
          src: d ? s || l : void 0,
        },
        u,
        { children: o }
      )
    );
  }),
  BA = zA,
  WA = mR({
    createStyledComponent: te("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${G(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => be({ props: e, name: "MuiContainer" }),
  }),
  UA = WA;
function HA(e) {
  return we("MuiModal", e);
}
xe("MuiModal", ["root", "hidden", "backdrop"]);
const VA = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  GA = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Se(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      HA,
      r
    );
  },
  KA = te("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  YA = te(Aw, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  qA = $.forwardRef(function (t, n) {
    var r, o, i, a, s, l;
    const c = be({ name: "MuiModal", props: t }),
      {
        BackdropComponent: u = YA,
        BackdropProps: d,
        className: f,
        closeAfterTransition: b = !1,
        children: g,
        container: x,
        component: P,
        components: m = {},
        componentsProps: p = {},
        disableAutoFocus: v = !1,
        disableEnforceFocus: _ = !1,
        disableEscapeKeyDown: N = !1,
        disablePortal: C = !1,
        disableRestoreFocus: R = !1,
        disableScrollLock: h = !1,
        hideBackdrop: y = !1,
        keepMounted: w = !1,
        onBackdropClick: T,
        open: k,
        slotProps: M,
        slots: D,
      } = c,
      O = X(c, VA),
      A = I({}, c, {
        closeAfterTransition: b,
        disableAutoFocus: v,
        disableEnforceFocus: _,
        disableEscapeKeyDown: N,
        disablePortal: C,
        disableRestoreFocus: R,
        disableScrollLock: h,
        hideBackdrop: y,
        keepMounted: w,
      }),
      {
        getRootProps: j,
        getBackdropProps: E,
        getTransitionProps: L,
        portalRef: B,
        isTopModal: U,
        exited: K,
        hasTransition: ce,
      } = aM(I({}, A, { rootRef: n })),
      Z = I({}, A, { exited: K }),
      Y = GA(Z),
      J = {};
    if ((g.props.tabIndex === void 0 && (J.tabIndex = "-1"), ce)) {
      const { onEnter: ae, onExited: de } = L();
      (J.onEnter = ae), (J.onExited = de);
    }
    const fe =
        (r = (o = D == null ? void 0 : D.root) != null ? o : m.Root) != null
          ? r
          : KA,
      Ie =
        (i = (a = D == null ? void 0 : D.backdrop) != null ? a : m.Backdrop) !=
        null
          ? i
          : u,
      _e = (s = M == null ? void 0 : M.root) != null ? s : p.root,
      at = (l = M == null ? void 0 : M.backdrop) != null ? l : p.backdrop,
      he = Zo({
        elementType: fe,
        externalSlotProps: _e,
        externalForwardedProps: O,
        getSlotProps: j,
        additionalProps: { ref: n, as: P },
        ownerState: Z,
        className: q(
          f,
          _e == null ? void 0 : _e.className,
          Y == null ? void 0 : Y.root,
          !Z.open && Z.exited && (Y == null ? void 0 : Y.hidden)
        ),
      }),
      st = Zo({
        elementType: Ie,
        externalSlotProps: at,
        additionalProps: d,
        getSlotProps: (ae) =>
          E(
            I({}, ae, {
              onClick: (de) => {
                T && T(de), ae != null && ae.onClick && ae.onClick(de);
              },
            })
          ),
        className: q(
          at == null ? void 0 : at.className,
          d == null ? void 0 : d.className,
          Y == null ? void 0 : Y.backdrop
        ),
        ownerState: Z,
      });
    return !w && !k && (!ce || K)
      ? null
      : S.jsx(xw, {
          ref: B,
          container: x,
          disablePortal: C,
          children: S.jsxs(
            fe,
            I({}, he, {
              children: [
                !y && u ? S.jsx(Ie, I({}, st)) : null,
                S.jsx(QO, {
                  disableEnforceFocus: _,
                  disableAutoFocus: v,
                  disableRestoreFocus: R,
                  isEnabled: U,
                  open: k,
                  children: $.cloneElement(g, J),
                }),
              ],
            })
          ),
        });
  }),
  Om = qA;
function QA(e) {
  return we("MuiDialog", e);
}
const XA = xe("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  nf = XA,
  JA = $.createContext({}),
  Lw = JA,
  ZA = [
    "aria-describedby",
    "aria-labelledby",
    "BackdropComponent",
    "BackdropProps",
    "children",
    "className",
    "disableEscapeKeyDown",
    "fullScreen",
    "fullWidth",
    "maxWidth",
    "onBackdropClick",
    "onClose",
    "open",
    "PaperComponent",
    "PaperProps",
    "scroll",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
  ],
  eN = te(Aw, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  tN = (e) => {
    const {
        classes: t,
        scroll: n,
        maxWidth: r,
        fullWidth: o,
        fullScreen: i,
      } = e,
      a = {
        root: ["root"],
        container: ["container", `scroll${G(n)}`],
        paper: [
          "paper",
          `paperScroll${G(n)}`,
          `paperWidth${G(String(r))}`,
          o && "paperFullWidth",
          i && "paperFullScreen",
        ],
      };
    return Se(a, QA, t);
  },
  nN = te(Om, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ "@media print": { position: "absolute !important" } }),
  rN = te("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.container, t[`scroll${G(n.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    I(
      { height: "100%", "@media print": { height: "auto" }, outline: 0 },
      e.scroll === "paper" && {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      e.scroll === "body" && {
        overflowY: "auto",
        overflowX: "hidden",
        textAlign: "center",
        "&::after": {
          content: '""',
          display: "inline-block",
          verticalAlign: "middle",
          height: "100%",
          width: "0",
        },
      }
    )
  ),
  oN = te(wo, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`scrollPaper${G(n.scroll)}`],
        t[`paperWidth${G(String(n.maxWidth))}`],
        n.fullWidth && t.paperFullWidth,
        n.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        margin: 32,
        position: "relative",
        overflowY: "auto",
        "@media print": { overflowY: "visible", boxShadow: "none" },
      },
      t.scroll === "paper" && {
        display: "flex",
        flexDirection: "column",
        maxHeight: "calc(100% - 64px)",
      },
      t.scroll === "body" && {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "left",
      },
      !t.maxWidth && { maxWidth: "calc(100% - 64px)" },
      t.maxWidth === "xs" && {
        maxWidth:
          e.breakpoints.unit === "px"
            ? Math.max(e.breakpoints.values.xs, 444)
            : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
        [`&.${nf.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: "calc(100% - 64px)" },
        },
      },
      t.maxWidth &&
        t.maxWidth !== "xs" && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${nf.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: "calc(100% - 64px)",
            },
          },
        },
      t.fullWidth && { width: "calc(100% - 64px)" },
      t.fullScreen && {
        margin: 0,
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "none",
        borderRadius: 0,
        [`&.${nf.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
      }
    )
  ),
  iN = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiDialog" }),
      o = ii(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": a,
        "aria-labelledby": s,
        BackdropComponent: l,
        BackdropProps: c,
        children: u,
        className: d,
        disableEscapeKeyDown: f = !1,
        fullScreen: b = !1,
        fullWidth: g = !1,
        maxWidth: x = "sm",
        onBackdropClick: P,
        onClose: m,
        open: p,
        PaperComponent: v = wo,
        PaperProps: _ = {},
        scroll: N = "paper",
        TransitionComponent: C = Iw,
        transitionDuration: R = i,
        TransitionProps: h,
      } = r,
      y = X(r, ZA),
      w = I({}, r, {
        disableEscapeKeyDown: f,
        fullScreen: b,
        fullWidth: g,
        maxWidth: x,
        scroll: N,
      }),
      T = tN(w),
      k = $.useRef(),
      M = (j) => {
        k.current = j.target === j.currentTarget;
      },
      D = (j) => {
        k.current &&
          ((k.current = null), P && P(j), m && m(j, "backdropClick"));
      },
      O = dm(s),
      A = $.useMemo(() => ({ titleId: O }), [O]);
    return S.jsx(
      nN,
      I(
        {
          className: q(T.root, d),
          closeAfterTransition: !0,
          components: { Backdrop: eN },
          componentsProps: { backdrop: I({ transitionDuration: R, as: l }, c) },
          disableEscapeKeyDown: f,
          onClose: m,
          open: p,
          ref: n,
          onClick: D,
          ownerState: w,
        },
        y,
        {
          children: S.jsx(
            C,
            I({ appear: !0, in: p, timeout: R, role: "presentation" }, h, {
              children: S.jsx(rN, {
                className: q(T.container),
                onMouseDown: M,
                ownerState: w,
                children: S.jsx(
                  oN,
                  I(
                    {
                      as: v,
                      elevation: 24,
                      role: "dialog",
                      "aria-describedby": a,
                      "aria-labelledby": O,
                    },
                    _,
                    {
                      className: q(T.paper, _.className),
                      ownerState: w,
                      children: S.jsx(Lw.Provider, { value: A, children: u }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  aN = iN;
function sN(e) {
  return we("MuiDialogActions", e);
}
xe("MuiDialogActions", ["root", "spacing"]);
const lN = ["className", "disableSpacing"],
  cN = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return Se({ root: ["root", !n && "spacing"] }, sN, t);
  },
  uN = te("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    I(
      {
        display: "flex",
        alignItems: "center",
        padding: 8,
        justifyContent: "flex-end",
        flex: "0 0 auto",
      },
      !e.disableSpacing && {
        "& > :not(style) ~ :not(style)": { marginLeft: 8 },
      }
    )
  ),
  dN = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiDialogActions" }),
      { className: o, disableSpacing: i = !1 } = r,
      a = X(r, lN),
      s = I({}, r, { disableSpacing: i }),
      l = cN(s);
    return S.jsx(uN, I({ className: q(l.root, o), ownerState: s, ref: n }, a));
  }),
  fN = dN;
function pN(e) {
  return we("MuiDialogContent", e);
}
xe("MuiDialogContent", ["root", "dividers"]);
function hN(e) {
  return we("MuiDialogTitle", e);
}
const mN = xe("MuiDialogTitle", ["root"]),
  gN = mN,
  vN = ["className", "dividers"],
  yN = (e) => {
    const { classes: t, dividers: n } = e;
    return Se({ root: ["root", n && "dividers"] }, pN, t);
  },
  xN = te("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        flex: "1 1 auto",
        WebkitOverflowScrolling: "touch",
        overflowY: "auto",
        padding: "20px 24px",
      },
      t.dividers
        ? {
            padding: "16px 24px",
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${gN.root} + &`]: { paddingTop: 0 } }
    )
  ),
  bN = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiDialogContent" }),
      { className: o, dividers: i = !1 } = r,
      a = X(r, vN),
      s = I({}, r, { dividers: i }),
      l = yN(s);
    return S.jsx(xN, I({ className: q(l.root, o), ownerState: s, ref: n }, a));
  }),
  wN = bN,
  SN = ["className", "id"],
  CN = (e) => {
    const { classes: t } = e;
    return Se({ root: ["root"] }, hN, t);
  },
  $N = te(oe, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  _N = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiDialogTitle" }),
      { className: o, id: i } = r,
      a = X(r, SN),
      s = r,
      l = CN(s),
      { titleId: c = i } = $.useContext(Lw);
    return S.jsx(
      $N,
      I(
        {
          component: "h2",
          className: q(l.root, o),
          ownerState: s,
          ref: n,
          variant: "h6",
          id: i ?? c,
        },
        a
      )
    );
  }),
  PN = _N,
  EN = xe("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  x0 = EN,
  kN = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function RN(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = go(t);
  let a;
  if (t.fakeTransform) a = t.fakeTransform;
  else {
    const c = i.getComputedStyle(t);
    a =
      c.getPropertyValue("-webkit-transform") ||
      c.getPropertyValue("transform");
  }
  let s = 0,
    l = 0;
  if (a && a !== "none" && typeof a == "string") {
    const c = a.split("(")[1].split(")")[0].split(",");
    (s = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === "left"
    ? o
      ? `translateX(${o.right + s - r.left}px)`
      : `translateX(${i.innerWidth + s - r.left}px)`
    : e === "right"
      ? o
        ? `translateX(-${r.right - o.left - s}px)`
        : `translateX(-${r.left + r.width - s}px)`
      : e === "up"
        ? o
          ? `translateY(${o.bottom + l - r.top}px)`
          : `translateY(${i.innerHeight + l - r.top}px)`
        : o
          ? `translateY(-${r.top - o.top + r.height - l}px)`
          : `translateY(-${r.top + r.height - l}px)`;
}
function TN(e) {
  return typeof e == "function" ? e() : e;
}
function Yl(e, t, n) {
  const r = TN(n),
    o = RN(e, t, r);
  o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const ON = $.forwardRef(function (t, n) {
    const r = ii(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp,
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: a,
        appear: s = !0,
        children: l,
        container: c,
        direction: u = "down",
        easing: d = o,
        in: f,
        onEnter: b,
        onEntered: g,
        onEntering: x,
        onExit: P,
        onExited: m,
        onExiting: p,
        style: v,
        timeout: _ = i,
        TransitionComponent: N = xm,
      } = t,
      C = X(t, kN),
      R = $.useRef(null),
      h = vt(l.ref, R, n),
      y = (E) => (L) => {
        E && (L === void 0 ? E(R.current) : E(R.current, L));
      },
      w = y((E, L) => {
        Yl(u, E, c), Sm(E), b && b(E, L);
      }),
      T = y((E, L) => {
        const B = na({ timeout: _, style: v, easing: d }, { mode: "enter" });
        (E.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          I({}, B)
        )),
          (E.style.transition = r.transitions.create("transform", I({}, B))),
          (E.style.webkitTransform = "none"),
          (E.style.transform = "none"),
          x && x(E, L);
      }),
      k = y(g),
      M = y(p),
      D = y((E) => {
        const L = na({ timeout: _, style: v, easing: d }, { mode: "exit" });
        (E.style.webkitTransition = r.transitions.create(
          "-webkit-transform",
          L
        )),
          (E.style.transition = r.transitions.create("transform", L)),
          Yl(u, E, c),
          P && P(E);
      }),
      O = y((E) => {
        (E.style.webkitTransition = ""), (E.style.transition = ""), m && m(E);
      }),
      A = (E) => {
        a && a(R.current, E);
      },
      j = $.useCallback(() => {
        R.current && Yl(u, R.current, c);
      }, [u, c]);
    return (
      $.useEffect(() => {
        if (f || u === "down" || u === "right") return;
        const E = cm(() => {
            R.current && Yl(u, R.current, c);
          }),
          L = go(R.current);
        return (
          L.addEventListener("resize", E),
          () => {
            E.clear(), L.removeEventListener("resize", E);
          }
        );
      }, [u, f, c]),
      $.useEffect(() => {
        f || j();
      }, [f, j]),
      S.jsx(
        N,
        I(
          {
            nodeRef: R,
            onEnter: w,
            onEntered: k,
            onEntering: T,
            onExit: D,
            onExited: O,
            onExiting: M,
            addEndListener: A,
            appear: s,
            in: f,
            timeout: _,
          },
          C,
          {
            children: (E, L) =>
              $.cloneElement(
                l,
                I(
                  {
                    ref: h,
                    style: I(
                      { visibility: E === "exited" && !f ? "hidden" : void 0 },
                      v,
                      l.props.style
                    ),
                  },
                  L
                )
              ),
          }
        )
      )
    );
  }),
  MN = ON;
function IN(e) {
  return we("MuiDrawer", e);
}
xe("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const AN = ["BackdropProps"],
  NN = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  Fw = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      (n.variant === "permanent" || n.variant === "persistent") && t.docked,
      t.modal,
    ];
  },
  jN = (e) => {
    const { classes: t, anchor: n, variant: r } = e,
      o = {
        root: ["root"],
        docked: [(r === "permanent" || r === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${G(n)}`,
          r !== "temporary" && `paperAnchorDocked${G(n)}`,
        ],
      };
    return Se(o, IN, t);
  },
  DN = te(Om, { name: "MuiDrawer", slot: "Root", overridesResolver: Fw })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  b0 = te("div", {
    shouldForwardProp: ga,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Fw,
  })({ flex: "0 0 auto" }),
  LN = te(wo, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.paper,
        t[`paperAnchor${G(n.anchor)}`],
        n.variant !== "temporary" && t[`paperAnchorDocked${G(n.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      t.anchor === "left" && { left: 0 },
      t.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "right" && { right: 0 },
      t.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      t.anchor === "left" &&
        t.variant !== "temporary" && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "top" &&
        t.variant !== "temporary" && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "right" &&
        t.variant !== "temporary" && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === "bottom" &&
        t.variant !== "temporary" && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
        }
    )
  ),
  zw = { left: "right", right: "left", top: "down", bottom: "up" };
function FN(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function zN({ direction: e }, t) {
  return e === "rtl" && FN(t) ? zw[t] : t;
}
const BN = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiDrawer" }),
      o = ii(),
      i = pm(),
      a = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen,
      },
      {
        anchor: s = "left",
        BackdropProps: l,
        children: c,
        className: u,
        elevation: d = 16,
        hideBackdrop: f = !1,
        ModalProps: { BackdropProps: b } = {},
        onClose: g,
        open: x = !1,
        PaperProps: P = {},
        SlideProps: m,
        TransitionComponent: p = MN,
        transitionDuration: v = a,
        variant: _ = "temporary",
      } = r,
      N = X(r.ModalProps, AN),
      C = X(r, NN),
      R = $.useRef(!1);
    $.useEffect(() => {
      R.current = !0;
    }, []);
    const h = zN({ direction: i ? "rtl" : "ltr" }, s),
      w = I({}, r, { anchor: s, elevation: d, open: x, variant: _ }, C),
      T = jN(w),
      k = S.jsx(
        LN,
        I({ elevation: _ === "temporary" ? d : 0, square: !0 }, P, {
          className: q(T.paper, P.className),
          ownerState: w,
          children: c,
        })
      );
    if (_ === "permanent")
      return S.jsx(
        b0,
        I({ className: q(T.root, T.docked, u), ownerState: w, ref: n }, C, {
          children: k,
        })
      );
    const M = S.jsx(
      p,
      I({ in: x, direction: zw[h], timeout: v, appear: R.current }, m, {
        children: k,
      })
    );
    return _ === "persistent"
      ? S.jsx(
          b0,
          I({ className: q(T.root, T.docked, u), ownerState: w, ref: n }, C, {
            children: M,
          })
        )
      : S.jsx(
          DN,
          I(
            {
              BackdropProps: I({}, l, b, { transitionDuration: v }),
              className: q(T.root, T.modal, u),
              open: x,
              ownerState: w,
              onClose: g,
              hideBackdrop: f,
              ref: n,
            },
            C,
            N,
            { children: M }
          )
        );
  }),
  WN = BN,
  UN = CR({
    createStyledComponent: te("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    }),
    useThemeProps: (e) => be({ props: e, name: "MuiStack" }),
  }),
  it = UN,
  HN = $.createContext(),
  w0 = HN;
function VN(e) {
  return we("MuiGrid", e);
}
const GN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  KN = ["column-reverse", "column", "row-reverse", "row"],
  YN = ["nowrap", "wrap-reverse", "wrap"],
  Ua = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Ks = xe("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...GN.map((e) => `spacing-xs-${e}`),
    ...KN.map((e) => `direction-xs-${e}`),
    ...YN.map((e) => `wrap-xs-${e}`),
    ...Ua.map((e) => `grid-xs-${e}`),
    ...Ua.map((e) => `grid-sm-${e}`),
    ...Ua.map((e) => `grid-md-${e}`),
    ...Ua.map((e) => `grid-lg-${e}`),
    ...Ua.map((e) => `grid-xl-${e}`),
  ]),
  qN = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function Vi(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), "") || "px"}`;
}
function QN({ theme: e, ownerState: t }) {
  let n;
  return e.breakpoints.keys.reduce((r, o) => {
    let i = {};
    if ((t[o] && (n = t[o]), !n)) return r;
    if (n === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (n === "auto")
      i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const a = Ho({ values: t.columns, breakpoints: e.breakpoints.values }),
        s = typeof a == "object" ? a[o] : a;
      if (s == null) return r;
      const l = `${Math.round((n / s) * 1e8) / 1e6}%`;
      let c = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const u = e.spacing(t.columnSpacing);
        if (u !== "0px") {
          const d = `calc(${l} + ${Vi(u)})`;
          c = { flexBasis: d, maxWidth: d };
        }
      }
      i = I({ flexBasis: l, flexGrow: 0, maxWidth: l }, c);
    }
    return (
      e.breakpoints.values[o] === 0
        ? Object.assign(r, i)
        : (r[e.breakpoints.up(o)] = i),
      r
    );
  }, {});
}
function XN({ theme: e, ownerState: t }) {
  const n = Ho({ values: t.direction, breakpoints: e.breakpoints.values });
  return rn({ theme: e }, n, (r) => {
    const o = { flexDirection: r };
    return (
      r.indexOf("column") === 0 &&
        (o[`& > .${Ks.item}`] = { maxWidth: "none" }),
      o
    );
  });
}
function Bw({ breakpoints: e, values: t }) {
  let n = "";
  Object.keys(t).forEach((o) => {
    n === "" && t[o] !== 0 && (n = o);
  });
  const r = Object.keys(e).sort((o, i) => e[o] - e[i]);
  return r.slice(0, r.indexOf(n));
}
function JN({ theme: e, ownerState: t }) {
  const { container: n, rowSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Ho({ values: r, breakpoints: e.breakpoints.values });
    let a;
    typeof i == "object" &&
      (a = Bw({ breakpoints: e.breakpoints.values, values: i })),
      (o = rn({ theme: e }, i, (s, l) => {
        var c;
        const u = e.spacing(s);
        return u !== "0px"
          ? {
              marginTop: `-${Vi(u)}`,
              [`& > .${Ks.item}`]: { paddingTop: Vi(u) },
            }
          : (c = a) != null && c.includes(l)
            ? {}
            : { marginTop: 0, [`& > .${Ks.item}`]: { paddingTop: 0 } };
      }));
  }
  return o;
}
function ZN({ theme: e, ownerState: t }) {
  const { container: n, columnSpacing: r } = t;
  let o = {};
  if (n && r !== 0) {
    const i = Ho({ values: r, breakpoints: e.breakpoints.values });
    let a;
    typeof i == "object" &&
      (a = Bw({ breakpoints: e.breakpoints.values, values: i })),
      (o = rn({ theme: e }, i, (s, l) => {
        var c;
        const u = e.spacing(s);
        return u !== "0px"
          ? {
              width: `calc(100% + ${Vi(u)})`,
              marginLeft: `-${Vi(u)}`,
              [`& > .${Ks.item}`]: { paddingLeft: Vi(u) },
            }
          : (c = a) != null && c.includes(l)
            ? {}
            : {
                width: "100%",
                marginLeft: 0,
                [`& > .${Ks.item}`]: { paddingLeft: 0 },
              };
      }));
  }
  return o;
}
function ej(e, t, n = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [n[`spacing-xs-${String(e)}`]];
  const r = [];
  return (
    t.forEach((o) => {
      const i = e[o];
      Number(i) > 0 && r.push(n[`spacing-${o}-${String(i)}`]);
    }),
    r
  );
}
const tj = te("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (e, t) => {
    const { ownerState: n } = e,
      {
        container: r,
        direction: o,
        item: i,
        spacing: a,
        wrap: s,
        zeroMinWidth: l,
        breakpoints: c,
      } = n;
    let u = [];
    r && (u = ej(a, c, t));
    const d = [];
    return (
      c.forEach((f) => {
        const b = n[f];
        b && d.push(t[`grid-${f}-${String(b)}`]);
      }),
      [
        t.root,
        r && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...u,
        o !== "row" && t[`direction-xs-${String(o)}`],
        s !== "wrap" && t[`wrap-xs-${String(s)}`],
        ...d,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    I(
      { boxSizing: "border-box" },
      e.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== "wrap" && { flexWrap: e.wrap }
    ),
  XN,
  JN,
  ZN,
  QN
);
function nj(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == "string" && !Number.isNaN(Number(e))) ||
    typeof e == "number"
  )
    return [`spacing-xs-${String(e)}`];
  const n = [];
  return (
    t.forEach((r) => {
      const o = e[r];
      if (Number(o) > 0) {
        const i = `spacing-${r}-${String(o)}`;
        n.push(i);
      }
    }),
    n
  );
}
const rj = (e) => {
    const {
      classes: t,
      container: n,
      direction: r,
      item: o,
      spacing: i,
      wrap: a,
      zeroMinWidth: s,
      breakpoints: l,
    } = e;
    let c = [];
    n && (c = nj(i, l));
    const u = [];
    l.forEach((f) => {
      const b = e[f];
      b && u.push(`grid-${f}-${String(b)}`);
    });
    const d = {
      root: [
        "root",
        n && "container",
        o && "item",
        s && "zeroMinWidth",
        ...c,
        r !== "row" && `direction-xs-${String(r)}`,
        a !== "wrap" && `wrap-xs-${String(a)}`,
        ...u,
      ],
    };
    return Se(d, VN, t);
  },
  oj = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiGrid" }),
      { breakpoints: o } = ii(),
      i = ll(r),
      {
        className: a,
        columns: s,
        columnSpacing: l,
        component: c = "div",
        container: u = !1,
        direction: d = "row",
        item: f = !1,
        rowSpacing: b,
        spacing: g = 0,
        wrap: x = "wrap",
        zeroMinWidth: P = !1,
      } = i,
      m = X(i, qN),
      p = b || g,
      v = l || g,
      _ = $.useContext(w0),
      N = u ? s || 12 : _,
      C = {},
      R = I({}, m);
    o.keys.forEach((w) => {
      m[w] != null && ((C[w] = m[w]), delete R[w]);
    });
    const h = I(
        {},
        i,
        {
          columns: N,
          container: u,
          direction: d,
          item: f,
          rowSpacing: p,
          columnSpacing: v,
          wrap: x,
          zeroMinWidth: P,
          spacing: g,
        },
        C,
        { breakpoints: o.keys }
      ),
      y = rj(h);
    return S.jsx(w0.Provider, {
      value: N,
      children: S.jsx(
        tj,
        I({ ownerState: h, className: q(y.root, a), as: c, ref: n }, R)
      ),
    });
  }),
  On = oj,
  ij = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Ap(e) {
  return `scale(${e}, ${e ** 2})`;
}
const aj = {
    entering: { opacity: 1, transform: Ap(1) },
    entered: { opacity: 1, transform: "none" },
  },
  rf =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Ww = $.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: a,
        in: s,
        onEnter: l,
        onEntered: c,
        onEntering: u,
        onExit: d,
        onExited: f,
        onExiting: b,
        style: g,
        timeout: x = "auto",
        TransitionComponent: P = xm,
      } = t,
      m = X(t, ij),
      p = Ni(),
      v = $.useRef(),
      _ = ii(),
      N = $.useRef(null),
      C = vt(N, i.ref, n),
      R = (O) => (A) => {
        if (O) {
          const j = N.current;
          A === void 0 ? O(j) : O(j, A);
        }
      },
      h = R(u),
      y = R((O, A) => {
        Sm(O);
        const {
          duration: j,
          delay: E,
          easing: L,
        } = na({ style: g, timeout: x, easing: a }, { mode: "enter" });
        let B;
        x === "auto"
          ? ((B = _.transitions.getAutoHeightDuration(O.clientHeight)),
            (v.current = B))
          : (B = j),
          (O.style.transition = [
            _.transitions.create("opacity", { duration: B, delay: E }),
            _.transitions.create("transform", {
              duration: rf ? B : B * 0.666,
              delay: E,
              easing: L,
            }),
          ].join(",")),
          l && l(O, A);
      }),
      w = R(c),
      T = R(b),
      k = R((O) => {
        const {
          duration: A,
          delay: j,
          easing: E,
        } = na({ style: g, timeout: x, easing: a }, { mode: "exit" });
        let L;
        x === "auto"
          ? ((L = _.transitions.getAutoHeightDuration(O.clientHeight)),
            (v.current = L))
          : (L = A),
          (O.style.transition = [
            _.transitions.create("opacity", { duration: L, delay: j }),
            _.transitions.create("transform", {
              duration: rf ? L : L * 0.666,
              delay: rf ? j : j || L * 0.333,
              easing: E,
            }),
          ].join(",")),
          (O.style.opacity = 0),
          (O.style.transform = Ap(0.75)),
          d && d(O);
      }),
      M = R(f),
      D = (O) => {
        x === "auto" && p.start(v.current || 0, O), r && r(N.current, O);
      };
    return S.jsx(
      P,
      I(
        {
          appear: o,
          in: s,
          nodeRef: N,
          onEnter: y,
          onEntered: w,
          onEntering: h,
          onExit: k,
          onExited: M,
          onExiting: T,
          addEndListener: D,
          timeout: x === "auto" ? null : x,
        },
        m,
        {
          children: (O, A) =>
            $.cloneElement(
              i,
              I(
                {
                  style: I(
                    {
                      opacity: 0,
                      transform: Ap(0.75),
                      visibility: O === "exited" && !s ? "hidden" : void 0,
                    },
                    aj[O],
                    g,
                    i.props.style
                  ),
                  ref: C,
                },
                A
              )
            ),
        }
      )
    );
  });
Ww.muiSupportAuto = !0;
const Np = Ww,
  sj = $.createContext({}),
  lj = sj;
function cj(e) {
  return we("MuiImageListItem", e);
}
const uj = xe("MuiImageListItem", [
    "root",
    "img",
    "standard",
    "woven",
    "masonry",
    "quilted",
  ]),
  S0 = uj,
  dj = ["children", "className", "cols", "component", "rows", "style"],
  fj = (e) => {
    const { classes: t, variant: n } = e;
    return Se({ root: ["root", n], img: ["img"] }, cj, t);
  },
  pj = te("li", {
    name: "MuiImageListItem",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [{ [`& .${S0.img}`]: t.img }, t.root, t[n.variant]];
    },
  })(({ ownerState: e }) =>
    I(
      { display: "block", position: "relative" },
      e.variant === "standard" && { display: "flex", flexDirection: "column" },
      e.variant === "woven" && {
        height: "100%",
        alignSelf: "center",
        "&:nth-of-type(even)": { height: "70%" },
      },
      {
        [`& .${S0.img}`]: I(
          {
            objectFit: "cover",
            width: "100%",
            height: "100%",
            display: "block",
          },
          e.variant === "standard" && { height: "auto", flexGrow: 1 }
        ),
      }
    )
  ),
  hj = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiImageListItem" }),
      {
        children: o,
        className: i,
        cols: a = 1,
        component: s = "li",
        rows: l = 1,
        style: c,
      } = r,
      u = X(r, dj),
      { rowHeight: d = "auto", gap: f, variant: b } = $.useContext(lj);
    let g = "auto";
    b === "woven" ? (g = void 0) : d !== "auto" && (g = d * l + f * (l - 1));
    const x = I({}, r, {
        cols: a,
        component: s,
        gap: f,
        rowHeight: d,
        rows: l,
        variant: b,
      }),
      P = fj(x);
    return S.jsx(
      pj,
      I(
        {
          as: s,
          className: q(P.root, P[b], i),
          ref: n,
          style: I(
            {
              height: g,
              gridColumnEnd: b !== "masonry" ? `span ${a}` : void 0,
              gridRowEnd: b !== "masonry" ? `span ${l}` : void 0,
              marginBottom: b === "masonry" ? f : void 0,
              breakInside: b === "masonry" ? "avoid" : void 0,
            },
            c
          ),
          ownerState: x,
        },
        u,
        {
          children: $.Children.map(o, (m) =>
            $.isValidElement(m)
              ? m.type === "img" || um(m, ["Image"])
                ? $.cloneElement(m, { className: q(P.img, m.props.className) })
                : m
              : null
          ),
        }
      )
    );
  }),
  mj = hj;
function gj(e) {
  return we("MuiImageListItemBar", e);
}
xe("MuiImageListItemBar", [
  "root",
  "positionBottom",
  "positionTop",
  "positionBelow",
  "titleWrap",
  "titleWrapBottom",
  "titleWrapTop",
  "titleWrapBelow",
  "titleWrapActionPosLeft",
  "titleWrapActionPosRight",
  "title",
  "subtitle",
  "actionIcon",
  "actionIconActionPosLeft",
  "actionIconActionPosRight",
]);
const vj = [
    "actionIcon",
    "actionPosition",
    "className",
    "subtitle",
    "title",
    "position",
  ],
  yj = (e) => {
    const { classes: t, position: n, actionIcon: r, actionPosition: o } = e,
      i = {
        root: ["root", `position${G(n)}`],
        titleWrap: [
          "titleWrap",
          `titleWrap${G(n)}`,
          r && `titleWrapActionPos${G(o)}`,
        ],
        title: ["title"],
        subtitle: ["subtitle"],
        actionIcon: ["actionIcon", `actionIconActionPos${G(o)}`],
      };
    return Se(i, gj, t);
  },
  xj = te("div", {
    name: "MuiImageListItemBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${G(n.position)}`]];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        position: "absolute",
        left: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        fontFamily: e.typography.fontFamily,
      },
      t.position === "bottom" && { bottom: 0 },
      t.position === "top" && { top: 0 },
      t.position === "below" && {
        position: "relative",
        background: "transparent",
        alignItems: "normal",
      }
    )
  ),
  bj = te("div", {
    name: "MuiImageListItemBar",
    slot: "TitleWrap",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.titleWrap,
        t[`titleWrap${G(n.position)}`],
        n.actionIcon && t[`titleWrapActionPos${G(n.actionPosition)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        flexGrow: 1,
        padding: "12px 16px",
        color: (e.vars || e).palette.common.white,
        overflow: "hidden",
      },
      t.position === "below" && { padding: "6px 0 12px", color: "inherit" },
      t.actionIcon && t.actionPosition === "left" && { paddingLeft: 0 },
      t.actionIcon && t.actionPosition === "right" && { paddingRight: 0 }
    )
  ),
  wj = te("div", {
    name: "MuiImageListItemBar",
    slot: "Title",
    overridesResolver: (e, t) => t.title,
  })(({ theme: e }) => ({
    fontSize: e.typography.pxToRem(16),
    lineHeight: "24px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  })),
  Sj = te("div", {
    name: "MuiImageListItemBar",
    slot: "Subtitle",
    overridesResolver: (e, t) => t.subtitle,
  })(({ theme: e }) => ({
    fontSize: e.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  })),
  Cj = te("div", {
    name: "MuiImageListItemBar",
    slot: "ActionIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.actionIcon, t[`actionIconActionPos${G(n.actionPosition)}`]];
    },
  })(({ ownerState: e }) =>
    I({}, e.actionPosition === "left" && { order: -1 })
  ),
  $j = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiImageListItemBar" }),
      {
        actionIcon: o,
        actionPosition: i = "right",
        className: a,
        subtitle: s,
        title: l,
        position: c = "bottom",
      } = r,
      u = X(r, vj),
      d = I({}, r, { position: c, actionPosition: i }),
      f = yj(d);
    return S.jsxs(
      xj,
      I({ ownerState: d, className: q(f.root, a), ref: n }, u, {
        children: [
          S.jsxs(bj, {
            ownerState: d,
            className: f.titleWrap,
            children: [
              S.jsx(wj, { className: f.title, children: l }),
              s ? S.jsx(Sj, { className: f.subtitle, children: s }) : null,
            ],
          }),
          o
            ? S.jsx(Cj, { ownerState: d, className: f.actionIcon, children: o })
            : null,
        ],
      })
    );
  }),
  _j = $j,
  Pj = $.createContext({}),
  er = Pj;
function Ej(e) {
  return we("MuiList", e);
}
xe("MuiList", ["root", "padding", "dense", "subheader"]);
const kj = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  Rj = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Se(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      Ej,
      t
    );
  },
  Tj = te("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    I(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  Oj = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: a = "ul",
        dense: s = !1,
        disablePadding: l = !1,
        subheader: c,
      } = r,
      u = X(r, kj),
      d = $.useMemo(() => ({ dense: s }), [s]),
      f = I({}, r, { component: a, dense: s, disablePadding: l }),
      b = Rj(f);
    return S.jsx(er.Provider, {
      value: d,
      children: S.jsxs(
        Tj,
        I({ as: a, className: q(b.root, i), ref: n, ownerState: f }, u, {
          children: [c, o],
        })
      ),
    });
  }),
  Uw = Oj;
function Mj(e) {
  return we("MuiListItem", e);
}
const Ij = xe("MuiListItem", [
    "root",
    "container",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "padding",
    "button",
    "secondaryAction",
    "selected",
  ]),
  yi = Ij;
function Aj(e) {
  return we("MuiListItemButton", e);
}
const Nj = xe("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  xi = Nj,
  jj = [
    "alignItems",
    "autoFocus",
    "component",
    "children",
    "dense",
    "disableGutters",
    "divider",
    "focusVisibleClassName",
    "selected",
    "className",
  ],
  Dj = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  Lj = (e) => {
    const {
        alignItems: t,
        classes: n,
        dense: r,
        disabled: o,
        disableGutters: i,
        divider: a,
        selected: s,
      } = e,
      c = Se(
        {
          root: [
            "root",
            r && "dense",
            !i && "gutters",
            a && "divider",
            o && "disabled",
            t === "flex-start" && "alignItemsFlexStart",
            s && "selected",
          ],
        },
        Aj,
        n
      );
    return I({}, n, c);
  },
  Fj = te(ei, {
    shouldForwardProp: (e) => ga(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: Dj,
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shortest,
        }),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${xi.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Re(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${xi.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Re(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${xi.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Re(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Re(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${xi.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${xi.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      t.alignItems === "flex-start" && { alignItems: "flex-start" },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  zj = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiListItemButton" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        component: a = "div",
        children: s,
        dense: l = !1,
        disableGutters: c = !1,
        divider: u = !1,
        focusVisibleClassName: d,
        selected: f = !1,
        className: b,
      } = r,
      g = X(r, jj),
      x = $.useContext(er),
      P = $.useMemo(
        () => ({ dense: l || x.dense || !1, alignItems: o, disableGutters: c }),
        [o, x.dense, l, c]
      ),
      m = $.useRef(null);
    gr(() => {
      i && m.current && m.current.focus();
    }, [i]);
    const p = I({}, r, {
        alignItems: o,
        dense: P.dense,
        disableGutters: c,
        divider: u,
        selected: f,
      }),
      v = Lj(p),
      _ = vt(m, n);
    return S.jsx(er.Provider, {
      value: P,
      children: S.jsx(
        Fj,
        I(
          {
            ref: _,
            href: g.href || g.to,
            component: (g.href || g.to) && a === "div" ? "button" : a,
            focusVisibleClassName: q(v.focusVisible, d),
            ownerState: p,
            className: q(v.root, b),
          },
          g,
          { classes: v, children: s }
        )
      ),
    });
  }),
  Bj = zj;
function Wj(e) {
  return we("MuiListItemSecondaryAction", e);
}
xe("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Uj = ["className"],
  Hj = (e) => {
    const { disableGutters: t, classes: n } = e;
    return Se({ root: ["root", t && "disableGutters"] }, Wj, n);
  },
  Vj = te("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    I(
      {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.disableGutters && { right: 0 }
    )
  ),
  Hw = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiListItemSecondaryAction" }),
      { className: o } = r,
      i = X(r, Uj),
      a = $.useContext(er),
      s = I({}, r, { disableGutters: a.disableGutters }),
      l = Hj(s);
    return S.jsx(Vj, I({ className: q(l.root, o), ownerState: s, ref: n }, i));
  });
Hw.muiName = "ListItemSecondaryAction";
const Gj = Hw,
  Kj = ["className"],
  Yj = [
    "alignItems",
    "autoFocus",
    "button",
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "ContainerComponent",
    "ContainerProps",
    "dense",
    "disabled",
    "disableGutters",
    "disablePadding",
    "divider",
    "focusVisibleClassName",
    "secondaryAction",
    "selected",
    "slotProps",
    "slots",
  ],
  qj = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.alignItems === "flex-start" && t.alignItemsFlexStart,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
      !n.disablePadding && t.padding,
      n.button && t.button,
      n.hasSecondaryAction && t.secondaryAction,
    ];
  },
  Qj = (e) => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: a,
      disablePadding: s,
      divider: l,
      hasSecondaryAction: c,
      selected: u,
    } = e;
    return Se(
      {
        root: [
          "root",
          o && "dense",
          !a && "gutters",
          !s && "padding",
          l && "divider",
          i && "disabled",
          n && "button",
          t === "flex-start" && "alignItemsFlexStart",
          c && "secondaryAction",
          u && "selected",
        ],
        container: ["container"],
      },
      Mj,
      r
    );
  },
  Xj = te("div", { name: "MuiListItem", slot: "Root", overridesResolver: qj })(
    ({ theme: e, ownerState: t }) =>
      I(
        {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          width: "100%",
          boxSizing: "border-box",
          textAlign: "left",
        },
        !t.disablePadding &&
          I(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${xi.root}`]: { paddingRight: 48 } },
        {
          [`&.${yi.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${yi.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Re(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${yi.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : Re(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${yi.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === "flex-start" && { alignItems: "flex-start" },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box",
        },
        t.button && {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${yi.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : Re(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : Re(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  Jj = te("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container,
  })({ position: "relative" }),
  Zj = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiListItem" }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: a = !1,
        children: s,
        className: l,
        component: c,
        components: u = {},
        componentsProps: d = {},
        ContainerComponent: f = "li",
        ContainerProps: { className: b } = {},
        dense: g = !1,
        disabled: x = !1,
        disableGutters: P = !1,
        disablePadding: m = !1,
        divider: p = !1,
        focusVisibleClassName: v,
        secondaryAction: _,
        selected: N = !1,
        slotProps: C = {},
        slots: R = {},
      } = r,
      h = X(r.ContainerProps, Kj),
      y = X(r, Yj),
      w = $.useContext(er),
      T = $.useMemo(
        () => ({ dense: g || w.dense || !1, alignItems: o, disableGutters: P }),
        [o, w.dense, g, P]
      ),
      k = $.useRef(null);
    gr(() => {
      i && k.current && k.current.focus();
    }, [i]);
    const M = $.Children.toArray(s),
      D = M.length && um(M[M.length - 1], ["ListItemSecondaryAction"]),
      O = I({}, r, {
        alignItems: o,
        autoFocus: i,
        button: a,
        dense: T.dense,
        disabled: x,
        disableGutters: P,
        disablePadding: m,
        divider: p,
        hasSecondaryAction: D,
        selected: N,
      }),
      A = Qj(O),
      j = vt(k, n),
      E = R.root || u.Root || Xj,
      L = C.root || d.root || {},
      B = I({ className: q(A.root, L.className, l), disabled: x }, y);
    let U = c || "li";
    return (
      a &&
        ((B.component = c || "div"),
        (B.focusVisibleClassName = q(yi.focusVisible, v)),
        (U = ei)),
      D
        ? ((U = !B.component && !c ? "div" : U),
          f === "li" &&
            (U === "li"
              ? (U = "div")
              : B.component === "li" && (B.component = "div")),
          S.jsx(er.Provider, {
            value: T,
            children: S.jsxs(
              Jj,
              I(
                { as: f, className: q(A.container, b), ref: j, ownerState: O },
                h,
                {
                  children: [
                    S.jsx(
                      E,
                      I(
                        {},
                        L,
                        !Jc(E) && { as: U, ownerState: I({}, O, L.ownerState) },
                        B,
                        { children: M }
                      )
                    ),
                    M.pop(),
                  ],
                }
              )
            ),
          }))
        : S.jsx(er.Provider, {
            value: T,
            children: S.jsxs(
              E,
              I(
                {},
                L,
                { as: U, ref: j },
                !Jc(E) && { ownerState: I({}, O, L.ownerState) },
                B,
                { children: [M, _ && S.jsx(Gj, { children: _ })] }
              )
            ),
          })
    );
  }),
  Ys = Zj;
function eD(e) {
  return we("MuiListItemAvatar", e);
}
xe("MuiListItemAvatar", ["root", "alignItemsFlexStart"]);
const tD = ["className"],
  nD = (e) => {
    const { alignItems: t, classes: n } = e;
    return Se(
      { root: ["root", t === "flex-start" && "alignItemsFlexStart"] },
      eD,
      n
    );
  },
  rD = te("div", {
    name: "MuiListItemAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
    },
  })(({ ownerState: e }) =>
    I(
      { minWidth: 56, flexShrink: 0 },
      e.alignItems === "flex-start" && { marginTop: 8 }
    )
  ),
  oD = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiListItemAvatar" }),
      { className: o } = r,
      i = X(r, tD),
      a = $.useContext(er),
      s = I({}, r, { alignItems: a.alignItems }),
      l = nD(s);
    return S.jsx(rD, I({ className: q(l.root, o), ownerState: s, ref: n }, i));
  }),
  Vw = oD,
  iD = xe("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  C0 = iD;
function aD(e) {
  return we("MuiListItemText", e);
}
const sD = xe("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  eu = sD,
  lD = [
    "children",
    "className",
    "disableTypography",
    "inset",
    "primary",
    "primaryTypographyProps",
    "secondary",
    "secondaryTypographyProps",
  ],
  cD = (e) => {
    const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
    return Se(
      {
        root: ["root", n && "inset", i && "dense", r && o && "multiline"],
        primary: ["primary"],
        secondary: ["secondary"],
      },
      aD,
      t
    );
  },
  uD = te("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${eu.primary}`]: t.primary },
        { [`& .${eu.secondary}`]: t.secondary },
        t.root,
        n.inset && t.inset,
        n.primary && n.secondary && t.multiline,
        n.dense && t.dense,
      ];
    },
  })(({ ownerState: e }) =>
    I(
      { flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  dD = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiListItemText" }),
      {
        children: o,
        className: i,
        disableTypography: a = !1,
        inset: s = !1,
        primary: l,
        primaryTypographyProps: c,
        secondary: u,
        secondaryTypographyProps: d,
      } = r,
      f = X(r, lD),
      { dense: b } = $.useContext(er);
    let g = l ?? o,
      x = u;
    const P = I({}, r, {
        disableTypography: a,
        inset: s,
        primary: !!g,
        secondary: !!x,
        dense: b,
      }),
      m = cD(P);
    return (
      g != null &&
        g.type !== oe &&
        !a &&
        (g = S.jsx(
          oe,
          I(
            {
              variant: b ? "body2" : "body1",
              className: m.primary,
              component: c != null && c.variant ? void 0 : "span",
              display: "block",
            },
            c,
            { children: g }
          )
        )),
      x != null &&
        x.type !== oe &&
        !a &&
        (x = S.jsx(
          oe,
          I(
            {
              variant: "body2",
              className: m.secondary,
              color: "text.secondary",
              display: "block",
            },
            d,
            { children: x }
          )
        )),
      S.jsxs(
        uD,
        I({ className: q(m.root, i), ownerState: P, ref: n }, f, {
          children: [g, x],
        })
      )
    );
  }),
  Mm = dD,
  fD = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function of(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
        ? null
        : e.firstChild;
}
function $0(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
        ? null
        : e.lastChild;
}
function Gw(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
        ? n[0] === t.keys[0]
        : n.indexOf(t.keys.join("")) === 0
  );
}
function Ha(e, t, n, r, o, i) {
  let a = !1,
    s = o(e, t, t ? n : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const l = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !Gw(s, i) || l) s = o(e, s, n);
    else return s.focus(), !0;
  }
  return !1;
}
const pD = $.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: a,
        className: s,
        disabledItemsFocusable: l = !1,
        disableListWrap: c = !1,
        onKeyDown: u,
        variant: d = "selectedMenu",
      } = t,
      f = X(t, fD),
      b = $.useRef(null),
      g = $.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    gr(() => {
      o && b.current.focus();
    }, [o]),
      $.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (v, { direction: _ }) => {
            const N = !b.current.style.width;
            if (v.clientHeight < b.current.clientHeight && N) {
              const C = `${nw(Ht(v))}px`;
              (b.current.style[_ === "rtl" ? "paddingLeft" : "paddingRight"] =
                C),
                (b.current.style.width = `calc(100% + ${C})`);
            }
            return b.current;
          },
        }),
        []
      );
    const x = (v) => {
        const _ = b.current,
          N = v.key,
          C = Ht(_).activeElement;
        if (N === "ArrowDown") v.preventDefault(), Ha(_, C, c, l, of);
        else if (N === "ArrowUp") v.preventDefault(), Ha(_, C, c, l, $0);
        else if (N === "Home") v.preventDefault(), Ha(_, null, c, l, of);
        else if (N === "End") v.preventDefault(), Ha(_, null, c, l, $0);
        else if (N.length === 1) {
          const R = g.current,
            h = N.toLowerCase(),
            y = performance.now();
          R.keys.length > 0 &&
            (y - R.lastTime > 500
              ? ((R.keys = []), (R.repeating = !0), (R.previousKeyMatched = !0))
              : R.repeating && h !== R.keys[0] && (R.repeating = !1)),
            (R.lastTime = y),
            R.keys.push(h);
          const w = C && !R.repeating && Gw(C, R);
          R.previousKeyMatched && (w || Ha(_, C, !1, l, of, R))
            ? v.preventDefault()
            : (R.previousKeyMatched = !1);
        }
        u && u(v);
      },
      P = vt(b, n);
    let m = -1;
    $.Children.forEach(a, (v, _) => {
      if (!$.isValidElement(v)) {
        m === _ && ((m += 1), m >= a.length && (m = -1));
        return;
      }
      v.props.disabled ||
        (((d === "selectedMenu" && v.props.selected) || m === -1) && (m = _)),
        m === _ &&
          (v.props.disabled ||
            v.props.muiSkipListHighlight ||
            v.type.muiSkipListHighlight) &&
          ((m += 1), m >= a.length && (m = -1));
    });
    const p = $.Children.map(a, (v, _) => {
      if (_ === m) {
        const N = {};
        return (
          i && (N.autoFocus = !0),
          v.props.tabIndex === void 0 &&
            d === "selectedMenu" &&
            (N.tabIndex = 0),
          $.cloneElement(v, N)
        );
      }
      return v;
    });
    return S.jsx(
      Uw,
      I(
        {
          role: "menu",
          ref: P,
          className: s,
          onKeyDown: x,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: p }
      )
    );
  }),
  hD = pD;
function mD(e) {
  return we("MuiPopover", e);
}
xe("MuiPopover", ["root", "paper"]);
const gD = ["onEntering"],
  vD = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  yD = ["slotProps"];
function _0(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
        ? (n = e.height / 2)
        : t === "bottom" && (n = e.height),
    n
  );
}
function P0(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
        ? (n = e.width / 2)
        : t === "right" && (n = e.width),
    n
  );
}
function E0(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function af(e) {
  return typeof e == "function" ? e() : e;
}
const xD = (e) => {
    const { classes: t } = e;
    return Se({ root: ["root"], paper: ["paper"] }, mD, t);
  },
  bD = te(Om, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  Kw = te(wo, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  wD = $.forwardRef(function (t, n) {
    var r, o, i;
    const a = be({ props: t, name: "MuiPopover" }),
      {
        action: s,
        anchorEl: l,
        anchorOrigin: c = { vertical: "top", horizontal: "left" },
        anchorPosition: u,
        anchorReference: d = "anchorEl",
        children: f,
        className: b,
        container: g,
        elevation: x = 8,
        marginThreshold: P = 16,
        open: m,
        PaperProps: p = {},
        slots: v,
        slotProps: _,
        transformOrigin: N = { vertical: "top", horizontal: "left" },
        TransitionComponent: C = Np,
        transitionDuration: R = "auto",
        TransitionProps: { onEntering: h } = {},
        disableScrollLock: y = !1,
      } = a,
      w = X(a.TransitionProps, gD),
      T = X(a, vD),
      k = (r = _ == null ? void 0 : _.paper) != null ? r : p,
      M = $.useRef(),
      D = vt(M, k.ref),
      O = I({}, a, {
        anchorOrigin: c,
        anchorReference: d,
        elevation: x,
        marginThreshold: P,
        externalPaperSlotProps: k,
        transformOrigin: N,
        TransitionComponent: C,
        transitionDuration: R,
        TransitionProps: w,
      }),
      A = xD(O),
      j = $.useCallback(() => {
        if (d === "anchorPosition") return u;
        const ae = af(l),
          re = (
            ae && ae.nodeType === 1 ? ae : Ht(M.current).body
          ).getBoundingClientRect();
        return {
          top: re.top + _0(re, c.vertical),
          left: re.left + P0(re, c.horizontal),
        };
      }, [l, c.horizontal, c.vertical, u, d]),
      E = $.useCallback(
        (ae) => ({
          vertical: _0(ae, N.vertical),
          horizontal: P0(ae, N.horizontal),
        }),
        [N.horizontal, N.vertical]
      ),
      L = $.useCallback(
        (ae) => {
          const de = { width: ae.offsetWidth, height: ae.offsetHeight },
            re = E(de);
          if (d === "none")
            return { top: null, left: null, transformOrigin: E0(re) };
          const vn = j();
          let Lt = vn.top - re.vertical,
            wt = vn.left - re.horizontal;
          const Wn = Lt + de.height,
            pt = wt + de.width,
            yt = go(af(l)),
            Ft = yt.innerHeight - P,
            zt = yt.innerWidth - P;
          if (P !== null && Lt < P) {
            const Ee = Lt - P;
            (Lt -= Ee), (re.vertical += Ee);
          } else if (P !== null && Wn > Ft) {
            const Ee = Wn - Ft;
            (Lt -= Ee), (re.vertical += Ee);
          }
          if (P !== null && wt < P) {
            const Ee = wt - P;
            (wt -= Ee), (re.horizontal += Ee);
          } else if (pt > zt) {
            const Ee = pt - zt;
            (wt -= Ee), (re.horizontal += Ee);
          }
          return {
            top: `${Math.round(Lt)}px`,
            left: `${Math.round(wt)}px`,
            transformOrigin: E0(re),
          };
        },
        [l, d, j, E, P]
      ),
      [B, U] = $.useState(m),
      K = $.useCallback(() => {
        const ae = M.current;
        if (!ae) return;
        const de = L(ae);
        de.top !== null && (ae.style.top = de.top),
          de.left !== null && (ae.style.left = de.left),
          (ae.style.transformOrigin = de.transformOrigin),
          U(!0);
      }, [L]);
    $.useEffect(
      () => (
        y && window.addEventListener("scroll", K),
        () => window.removeEventListener("scroll", K)
      ),
      [l, y, K]
    );
    const ce = (ae, de) => {
        h && h(ae, de), K();
      },
      Z = () => {
        U(!1);
      };
    $.useEffect(() => {
      m && K();
    }),
      $.useImperativeHandle(
        s,
        () =>
          m
            ? {
                updatePosition: () => {
                  K();
                },
              }
            : null,
        [m, K]
      ),
      $.useEffect(() => {
        if (!m) return;
        const ae = cm(() => {
            K();
          }),
          de = go(l);
        return (
          de.addEventListener("resize", ae),
          () => {
            ae.clear(), de.removeEventListener("resize", ae);
          }
        );
      }, [l, m, K]);
    let Y = R;
    R === "auto" && !C.muiSupportAuto && (Y = void 0);
    const J = g || (l ? Ht(af(l)).body : void 0),
      fe = (o = v == null ? void 0 : v.root) != null ? o : bD,
      Ie = (i = v == null ? void 0 : v.paper) != null ? i : Kw,
      _e = Zo({
        elementType: Ie,
        externalSlotProps: I({}, k, {
          style: B ? k.style : I({}, k.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: x, ref: D },
        ownerState: O,
        className: q(A.paper, k == null ? void 0 : k.className),
      }),
      at = Zo({
        elementType: fe,
        externalSlotProps: (_ == null ? void 0 : _.root) || {},
        externalForwardedProps: T,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: J,
          open: m,
        },
        ownerState: O,
        className: q(A.root, b),
      }),
      { slotProps: he } = at,
      st = X(at, yD);
    return S.jsx(
      fe,
      I({}, st, !Jc(fe) && { slotProps: he, disableScrollLock: y }, {
        children: S.jsx(
          C,
          I({ appear: !0, in: m, onEntering: ce, onExited: Z, timeout: Y }, w, {
            children: S.jsx(Ie, I({}, _e, { children: f })),
          })
        ),
      })
    );
  }),
  SD = wD;
function CD(e) {
  return we("MuiMenu", e);
}
xe("MuiMenu", ["root", "paper", "list"]);
const $D = ["onEntering"],
  _D = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  PD = { vertical: "top", horizontal: "right" },
  ED = { vertical: "top", horizontal: "left" },
  kD = (e) => {
    const { classes: t } = e;
    return Se({ root: ["root"], paper: ["paper"], list: ["list"] }, CD, t);
  },
  RD = te(SD, {
    shouldForwardProp: (e) => ga(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  TD = te(Kw, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  OD = te(hD, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  MD = $.forwardRef(function (t, n) {
    var r, o;
    const i = be({ props: t, name: "MuiMenu" }),
      {
        autoFocus: a = !0,
        children: s,
        className: l,
        disableAutoFocusItem: c = !1,
        MenuListProps: u = {},
        onClose: d,
        open: f,
        PaperProps: b = {},
        PopoverClasses: g,
        transitionDuration: x = "auto",
        TransitionProps: { onEntering: P } = {},
        variant: m = "selectedMenu",
        slots: p = {},
        slotProps: v = {},
      } = i,
      _ = X(i.TransitionProps, $D),
      N = X(i, _D),
      C = pm(),
      R = I({}, i, {
        autoFocus: a,
        disableAutoFocusItem: c,
        MenuListProps: u,
        onEntering: P,
        PaperProps: b,
        transitionDuration: x,
        TransitionProps: _,
        variant: m,
      }),
      h = kD(R),
      y = a && !c && f,
      w = $.useRef(null),
      T = (E, L) => {
        w.current &&
          w.current.adjustStyleForScrollbar(E, {
            direction: C ? "rtl" : "ltr",
          }),
          P && P(E, L);
      },
      k = (E) => {
        E.key === "Tab" && (E.preventDefault(), d && d(E, "tabKeyDown"));
      };
    let M = -1;
    $.Children.map(s, (E, L) => {
      $.isValidElement(E) &&
        (E.props.disabled ||
          (((m === "selectedMenu" && E.props.selected) || M === -1) &&
            (M = L)));
    });
    const D = (r = p.paper) != null ? r : TD,
      O = (o = v.paper) != null ? o : b,
      A = Zo({
        elementType: p.root,
        externalSlotProps: v.root,
        ownerState: R,
        className: [h.root, l],
      }),
      j = Zo({
        elementType: D,
        externalSlotProps: O,
        ownerState: R,
        className: h.paper,
      });
    return S.jsx(
      RD,
      I(
        {
          onClose: d,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: C ? "right" : "left",
          },
          transformOrigin: C ? PD : ED,
          slots: { paper: D, root: p.root },
          slotProps: { root: A, paper: j },
          open: f,
          ref: n,
          transitionDuration: x,
          TransitionProps: I({ onEntering: T }, _),
          ownerState: R,
        },
        N,
        {
          classes: g,
          children: S.jsx(
            OD,
            I(
              {
                onKeyDown: k,
                actions: w,
                autoFocus: a && (M === -1 || c),
                autoFocusItem: y,
                variant: m,
              },
              u,
              { className: q(h.list, u.className), children: s }
            )
          ),
        }
      )
    );
  }),
  ID = MD;
function AD(e) {
  return we("MuiMenuItem", e);
}
const ND = xe("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  Va = ND,
  jD = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  DD = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  LD = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: a,
      } = e,
      l = Se(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        AD,
        a
      );
    return I({}, a, l);
  },
  FD = te(ei, {
    shouldForwardProp: (e) => ga(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: DD,
  })(({ theme: e, ownerState: t }) =>
    I(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${Va.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : Re(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Va.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : Re(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${Va.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : Re(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : Re(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Va.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${Va.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${x0.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${x0.inset}`]: { marginLeft: 52 },
        [`& .${eu.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${eu.inset}`]: { paddingLeft: 36 },
        [`& .${C0.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        I(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${C0.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  zD = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: a = !1,
        divider: s = !1,
        disableGutters: l = !1,
        focusVisibleClassName: c,
        role: u = "menuitem",
        tabIndex: d,
        className: f,
      } = r,
      b = X(r, jD),
      g = $.useContext(er),
      x = $.useMemo(
        () => ({ dense: a || g.dense || !1, disableGutters: l }),
        [g.dense, a, l]
      ),
      P = $.useRef(null);
    gr(() => {
      o && P.current && P.current.focus();
    }, [o]);
    const m = I({}, r, { dense: x.dense, divider: s, disableGutters: l }),
      p = LD(r),
      v = vt(P, n);
    let _;
    return (
      r.disabled || (_ = d !== void 0 ? d : -1),
      S.jsx(er.Provider, {
        value: x,
        children: S.jsx(
          FD,
          I(
            {
              ref: v,
              role: u,
              tabIndex: _,
              component: i,
              focusVisibleClassName: q(p.focusVisible, c),
              className: q(p.root, f),
            },
            b,
            { ownerState: m, classes: p }
          )
        ),
      })
    );
  }),
  k0 = zD;
function BD(e) {
  return we("MuiTooltip", e);
}
const WD = xe("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  ro = WD,
  UD = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function HD(e) {
  return Math.round(e * 1e5) / 1e5;
}
const VD = (e) => {
    const {
        classes: t,
        disableInteractive: n,
        arrow: r,
        touch: o,
        placement: i,
      } = e,
      a = {
        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
        tooltip: [
          "tooltip",
          r && "tooltipArrow",
          o && "touch",
          `tooltipPlacement${G(i.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return Se(a, BD, t);
  },
  GD = te(Mw, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: n }) =>
    I(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: "none" },
      !t.disableInteractive && { pointerEvents: "auto" },
      !n && { pointerEvents: "none" },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${ro.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${ro.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${ro.arrow}`]: I(
          {},
          t.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          }
        ),
        [`&[data-popper-placement*="left"] .${ro.arrow}`]: I(
          {},
          t.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          }
        ),
      }
    )
  ),
  KD = te("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${G(n.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : Re(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: "relative", margin: 0 },
      t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${HD(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${ro.popper}[data-popper-placement*="left"] &`]: I(
          { transformOrigin: "right center" },
          t.isRtl
            ? I({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
            : I({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
        ),
        [`.${ro.popper}[data-popper-placement*="right"] &`]: I(
          { transformOrigin: "left center" },
          t.isRtl
            ? I({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
            : I({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
        ),
        [`.${ro.popper}[data-popper-placement*="top"] &`]: I(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          t.touch && { marginBottom: "24px" }
        ),
        [`.${ro.popper}[data-popper-placement*="bottom"] &`]: I(
          { transformOrigin: "center top", marginTop: "14px" },
          t.touch && { marginTop: "24px" }
        ),
      }
    )
  ),
  YD = te("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow,
  })(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Re(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let ql = !1;
const R0 = new cl();
let Ga = { x: 0, y: 0 };
function Ql(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const qD = $.forwardRef(function (t, n) {
    var r, o, i, a, s, l, c, u, d, f, b, g, x, P, m, p, v, _, N;
    const C = be({ props: t, name: "MuiTooltip" }),
      {
        arrow: R = !1,
        children: h,
        components: y = {},
        componentsProps: w = {},
        describeChild: T = !1,
        disableFocusListener: k = !1,
        disableHoverListener: M = !1,
        disableInteractive: D = !1,
        disableTouchListener: O = !1,
        enterDelay: A = 100,
        enterNextDelay: j = 0,
        enterTouchDelay: E = 700,
        followCursor: L = !1,
        id: B,
        leaveDelay: U = 0,
        leaveTouchDelay: K = 1500,
        onClose: ce,
        onOpen: Z,
        open: Y,
        placement: J = "bottom",
        PopperComponent: fe,
        PopperProps: Ie = {},
        slotProps: _e = {},
        slots: at = {},
        title: he,
        TransitionComponent: st = Np,
        TransitionProps: ae,
      } = C,
      de = X(C, UD),
      re = $.isValidElement(h) ? h : S.jsx("span", { children: h }),
      vn = ii(),
      Lt = pm(),
      [wt, Wn] = $.useState(),
      [pt, yt] = $.useState(null),
      Ft = $.useRef(!1),
      zt = D || L,
      Ee = Ni(),
      St = Ni(),
      yn = Ni(),
      on = Ni(),
      [Vr, ie] = tw({
        controlled: Y,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let Bt = Vr;
    const Gr = dm(B),
      Un = $.useRef(),
      Co = Rr(() => {
        Un.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = Un.current),
          (Un.current = void 0)),
          on.clear();
      });
    $.useEffect(() => Co, [Co]);
    const _a = (ge) => {
        R0.clear(), (ql = !0), ie(!0), Z && !Bt && Z(ge);
      },
      xr = Rr((ge) => {
        R0.start(800 + U, () => {
          ql = !1;
        }),
          ie(!1),
          ce && Bt && ce(ge),
          Ee.start(vn.transitions.duration.shortest, () => {
            Ft.current = !1;
          });
      }),
      $o = (ge) => {
        (Ft.current && ge.type !== "touchstart") ||
          (wt && wt.removeAttribute("title"),
          St.clear(),
          yn.clear(),
          A || (ql && j)
            ? St.start(ql ? j : A, () => {
                _a(ge);
              })
            : _a(ge));
      },
      _o = (ge) => {
        St.clear(),
          yn.start(U, () => {
            xr(ge);
          });
      },
      { isFocusVisibleRef: vl, onBlur: yl, onFocus: xd, ref: xl } = fm(),
      [, bl] = $.useState(!1),
      F = (ge) => {
        yl(ge), vl.current === !1 && (bl(!1), _o(ge));
      },
      z = (ge) => {
        wt || Wn(ge.currentTarget),
          xd(ge),
          vl.current === !0 && (bl(!0), $o(ge));
      },
      W = (ge) => {
        Ft.current = !0;
        const ht = re.props;
        ht.onTouchStart && ht.onTouchStart(ge);
      },
      V = (ge) => {
        W(ge),
          yn.clear(),
          Ee.clear(),
          Co(),
          (Un.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          on.start(E, () => {
            (document.body.style.WebkitUserSelect = Un.current), $o(ge);
          });
      },
      ee = (ge) => {
        re.props.onTouchEnd && re.props.onTouchEnd(ge),
          Co(),
          yn.start(K, () => {
            xr(ge);
          });
      };
    $.useEffect(() => {
      if (!Bt) return;
      function ge(ht) {
        (ht.key === "Escape" || ht.key === "Esc") && xr(ht);
      }
      return (
        document.addEventListener("keydown", ge),
        () => {
          document.removeEventListener("keydown", ge);
        }
      );
    }, [xr, Bt]);
    const me = vt(re.ref, xl, Wn, n);
    !he && he !== 0 && (Bt = !1);
    const le = $.useRef(),
      se = (ge) => {
        const ht = re.props;
        ht.onMouseMove && ht.onMouseMove(ge),
          (Ga = { x: ge.clientX, y: ge.clientY }),
          le.current && le.current.update();
      },
      ne = {},
      ve = typeof he == "string";
    T
      ? ((ne.title = !Bt && ve && !M ? he : null),
        (ne["aria-describedby"] = Bt ? Gr : null))
      : ((ne["aria-label"] = ve ? he : null),
        (ne["aria-labelledby"] = Bt && !ve ? Gr : null));
    const Ae = I(
        {},
        ne,
        de,
        re.props,
        {
          className: q(de.className, re.props.className),
          onTouchStart: W,
          ref: me,
        },
        L ? { onMouseMove: se } : {}
      ),
      ue = {};
    O || ((Ae.onTouchStart = V), (Ae.onTouchEnd = ee)),
      M ||
        ((Ae.onMouseOver = Ql($o, Ae.onMouseOver)),
        (Ae.onMouseLeave = Ql(_o, Ae.onMouseLeave)),
        zt || ((ue.onMouseOver = $o), (ue.onMouseLeave = _o))),
      k ||
        ((Ae.onFocus = Ql(z, Ae.onFocus)),
        (Ae.onBlur = Ql(F, Ae.onBlur)),
        zt || ((ue.onFocus = z), (ue.onBlur = F)));
    const Fe = $.useMemo(() => {
        var ge;
        let ht = [
          {
            name: "arrow",
            enabled: !!pt,
            options: { element: pt, padding: 4 },
          },
        ];
        return (
          (ge = Ie.popperOptions) != null &&
            ge.modifiers &&
            (ht = ht.concat(Ie.popperOptions.modifiers)),
          I({}, Ie.popperOptions, { modifiers: ht })
        );
      }, [pt, Ie]),
      Ye = I({}, C, {
        isRtl: Lt,
        arrow: R,
        disableInteractive: zt,
        placement: J,
        PopperComponentProp: fe,
        touch: Ft.current,
      }),
      Et = VD(Ye),
      lt = (r = (o = at.popper) != null ? o : y.Popper) != null ? r : GD,
      br =
        (i =
          (a = (s = at.transition) != null ? s : y.Transition) != null
            ? a
            : st) != null
          ? i
          : Np,
      li = (l = (c = at.tooltip) != null ? c : y.Tooltip) != null ? l : KD,
      wr = (u = (d = at.arrow) != null ? d : y.Arrow) != null ? u : YD,
      ir = ji(
        lt,
        I({}, Ie, (f = _e.popper) != null ? f : w.popper, {
          className: q(
            Et.popper,
            Ie == null ? void 0 : Ie.className,
            (b = (g = _e.popper) != null ? g : w.popper) == null
              ? void 0
              : b.className
          ),
        }),
        Ye
      ),
      Sr = ji(
        br,
        I({}, ae, (x = _e.transition) != null ? x : w.transition),
        Ye
      ),
      Pa = ji(
        li,
        I({}, (P = _e.tooltip) != null ? P : w.tooltip, {
          className: q(
            Et.tooltip,
            (m = (p = _e.tooltip) != null ? p : w.tooltip) == null
              ? void 0
              : m.className
          ),
        }),
        Ye
      ),
      Po = ji(
        wr,
        I({}, (v = _e.arrow) != null ? v : w.arrow, {
          className: q(
            Et.arrow,
            (_ = (N = _e.arrow) != null ? N : w.arrow) == null
              ? void 0
              : _.className
          ),
        }),
        Ye
      );
    return S.jsxs($.Fragment, {
      children: [
        $.cloneElement(re, Ae),
        S.jsx(
          lt,
          I(
            {
              as: fe ?? Mw,
              placement: J,
              anchorEl: L
                ? {
                    getBoundingClientRect: () => ({
                      top: Ga.y,
                      left: Ga.x,
                      right: Ga.x,
                      bottom: Ga.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : wt,
              popperRef: le,
              open: wt ? Bt : !1,
              id: Gr,
              transition: !0,
            },
            ue,
            ir,
            {
              popperOptions: Fe,
              children: ({ TransitionProps: ge }) =>
                S.jsx(
                  br,
                  I({ timeout: vn.transitions.duration.shorter }, ge, Sr, {
                    children: S.jsxs(
                      li,
                      I({}, Pa, {
                        children: [
                          he,
                          R ? S.jsx(wr, I({}, Po, { ref: yt })) : null,
                        ],
                      })
                    ),
                  })
                ),
            }
          )
        ),
      ],
    });
  }),
  QD = qD;
function XD(e) {
  return we("MuiToolbar", e);
}
xe("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const JD = ["className", "component", "disableGutters", "variant"],
  ZD = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return Se({ root: ["root", !n && "gutters", r] }, XD, t);
  },
  eL = te("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      I(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  tL = $.forwardRef(function (t, n) {
    const r = be({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: a = !1,
        variant: s = "regular",
      } = r,
      l = X(r, JD),
      c = I({}, r, { component: i, disableGutters: a, variant: s }),
      u = ZD(c);
    return S.jsx(
      eL,
      I({ as: i, className: q(u.root, o), ref: n, ownerState: c }, l)
    );
  }),
  nL = tL;
var Im = {},
  sf = {};
const rL = zr(DT);
var T0;
function Yw() {
  return (
    T0 ||
      ((T0 = 1),
      (function (e) {
        "use client";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = rL;
      })(sf)),
    sf
  );
}
var oL = sd;
Object.defineProperty(Im, "__esModule", { value: !0 });
var qw = (Im.default = void 0),
  iL = oL(Yw()),
  aL = S;
qw = Im.default = (0, iL.default)(
  (0, aL.jsx)("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
  "Menu"
);
const sL = "Hello!",
  lL = "Download CV",
  cL = "Overview",
  uL = {
    title: "Portfolio",
    subtitle:
      "Digital solutions for fintech, government and international organizations",
  },
  dL = {
    title: "Resume",
    name: "Victor",
    full_name: "Victor Hernández",
    position: "Lead & Senior Software Developer",
    experience: "Experience",
    education: "Education",
    languages_title: "Languages",
    skills: "Skills",
    contact: "Contact",
    summary:
      "Senior developer with 19+ years delivering technology solutions for fintech, government and international organizations. Specialized in React Native, React, TypeScript, Node.js and AWS. Proven ability to lead teams, define architecture and launch high-impact products such as CHIVO Wallet and the APEX trading platform.",
    work_history: [
      {
        start_date: "2023-06-01",
        end_date: "",
        is_current: !0,
        company: "CHIVO Wallet",
        company_image: "alphapoint.png",
        position: "Senior Software Developer",
        description:
          "Led the flagship national Bitcoin wallet of El Salvador (AlphaPoint), owning web and mobile experiences for payments, remittances, cash-in/out and merchant POS.",
        tasks: [
          "Delivered wallet, remittance and on/off-ramp flows in React Native and React, integrating Lightning and on-chain services.",
          "Coordinated releases with product and compliance to keep KYC, cash-in kiosks and merchant POS aligned with regulations.",
          "Built shared UI components, error monitoring and performance baselines for both mobile and web clients.",
          "Mentored engineers on TypeScript, testing and observability while grooming backlog and technical debt.",
        ],
        achievements: [
          {
            title: "CHIVO Wallet",
            description:
              "Bitcoin/LN wallet with QR payments, remittances, merchant POS, fuel discounts and cash management across 200+ ATMs.",
            image: "chivo2.png",
            url: "https://www.chivowallet.com",
            date: "2024-01-01",
            tech_stack: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "React" },
              { name: "Redux" },
              { name: "RTK Query" },
              { name: "Jira" },
              { name: "Git" },
              { name: "GitLab" },
              { name: "Scrum" },
              { name: "iOS" },
              { name: "Android" },
              { name: "TypeScript" },
              { name: "AWS" },
              { name: "Bitcoin" },
            ],
            modal_details: [
              {
                image: "chivo2.png",
                description:
                  "Mobile experience for Lightning and on-chain payments, remittances, and QR flows.",
              },
              {
                image: "chivo.png",
                description:
                  "Merchant POS and cash management across kiosks/ATMs with compliance-ready flows.",
              },
              {
                image: "chivo-benefits.png",
                description:
                  "User-facing benefits for the national wallet: zero-fee transfers, easy onboarding, USD/BTC support, and cash withdrawal at any time.",
              },
              {
                image: "chivo-login.png",
                description:
                  "User validation, secure onboarding, and KYC checks for new registrations and logins.",
              },
              {
                image: "chivo-otp.png",
                description:
                  "Phone-based login with OTP sent to the user for secure access.",
              },
            ],
            coins: [{ name: "Bitcoin" }],
          },
        ],
        home_order: 2,
        show_on_home: !0,
      },
      {
        start_date: "2024-01-01",
        end_date: "",
        is_current: !0,
        company: "APEX Exchange (AlphaPoint)",
        company_image: "alphapoint.svg",
        position: "Lead Frontend Engineer",
        description:
          "Developed core features for a nationwide digital service designed to serve over 6 million citizens. Owned the web trading experience for AlphaPoint’s white-label APEX exchange for banks and institutions.",
        tasks: [
          "Implemented responsive trading UI (order books, advanced charts, RFQ/OTC) consuming WebSocket feeds and REST APIs.",
          "Integrated account, wallet and multi-asset custody modules with role-based admin and compliance workflows.",
          "Optimized latency and rendering for high-frequency updates (depth, trades, balances) using virtualization and memoization.",
          "Partnered with product and clients to localize and theme the white-label experience for multiple institutional rollouts.",
        ],
        achievements: [
          {
            title: "APEX Exchange",
            description:
              "Institutional-grade exchange platform with matching engine connectivity, liquidity tools, and branded white-label UX.",
            image: "alphapoint.png",
            url: "https://alphapoint.com/product/alphapoint-exchange-software/",
            date: "2024-05-01",
            tech_stack: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "React" },
              { name: "Redux" },
              { name: "RTK Query" },
              { name: "Jira" },
              { name: "Git" },
              { name: "GitLab" },
              { name: "Scrum" },
              { name: "iOS" },
              { name: "Android" },
              { name: "TypeScript" },
              { name: "AWS" },
              { name: "Bitcoin" },
            ],
            modal_details: [
              {
                image: "alphapoint.png",
                description:
                  "Web trading experience with real-time books, charts, and liquidity tools for institutional clients.",
              },
              {
                image: "apex-mobile.png",
                description:
                  "Mobile trading app for buying crypto and executing trades with live charts, depth, and order management.",
              },
              {
                image: "apex-trading.png",
                description:
                  "Trading module for multiple crypto pairs with market/limit/conditional orders, TP/SL and leverage.",
              },
              {
                image: "apex-realtime.png",
                description:
                  "Realtime market buys across multiple crypto pairs with fees and borrowing breakdowns.",
              },
              {
                image: "apex-alerts.png",
                description:
                  "In-app alerts and notifications for portfolio risk and balance changes.",
              },
              {
                image: "apex-webtrading.png",
                description:
                  "Web trading platform for multiple cryptos with live order book, trades, and advanced order entry.",
              },
            ],
            coins: [
              { name: "Bitcoin" },
              { name: "XRP" },
              { name: "USDT" },
              { name: "ETH" },
              { name: "DASH" },
              { name: "ADA" },
            ],
          },
        ],
        home_order: 1,
        show_on_home: !0,
      },
      {
        start_date: "2022-12-01",
        end_date: "2023-12-31",
        is_current: !1,
        company: "IOM & Social Welfare Secretariat",
        company_image: ["oim.jpeg", "sbs.png"],
        position: "Technical Lead & Senior Developer",
        description:
          "Technical owner of the Angel Ariel program, coordinating React and Node.js teams for government projects.",
        tasks: [
          "Defined architecture and dev guidelines for social platforms.",
          "Stakeholder management and functional follow-up with international agencies.",
          "Mentored teams and supported deployments built with React and Node.js.",
          "Automated reporting and integrations with cloud services.",
        ],
        achievements: [
          {
            title: "Angel Ariel Platform",
            description:
              "Web and mobile portal supporting Quedate and Casa Joven programs with dashboards for field staff.",
            image: "angel-ariel.png",
            url: "https://www.iom.int",
            date: "2023-06-01",
            tech_stack: [
              { name: "React" },
              { name: "Node.js" },
              { name: "AWS" },
              { name: "Redux" },
              { name: "MongoDB" },
              { name: "MySQL" },
              { name: "Jira" },
              { name: "Scrum" },
            ],
          },
        ],
        home_order: 4,
        show_on_home: !0,
      },
      {
        start_date: "2023-01-01",
        end_date: "2023-05-31",
        is_current: !1,
        company: "WizeDevs",
        company_image: "canjeaton2.png",
        position: "Senior Mobile Developer",
        description:
          "Complete reconstruction of a legacy mobile application with major UX and performance improvements.",
        tasks: [
          "Refactored the entire codebase using React Native best practices.",
          "Integrated Linka smart locks through their SDK.",
          "Optimized layouts for multiple resolutions and dark mode.",
          "Automated QA and store releases.",
        ],
        achievements: [
          {
            title: "Residential Security Relaunch",
            description:
              "Shipped a new version with secure flows, notifications and OTA updates.",
            image: "canjeaton.png",
            url: "https://wizedevs.com",
            date: "2023-05-01",
            tech_stack: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "Redux" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-10-01",
        end_date: "2022-12-31",
        is_current: !1,
        company: "Asofarma Pharma",
        company_image: "payroll.jpg",
        position: "Tech Lead & Full-Stack",
        description:
          "Full-stack implementation and AWS deployment of the Qatar 2022 World Cup pool platform.",
        tasks: [
          "Built frontend and backend modules for bracket administration.",
          "Automated infrastructure with AWS managed services.",
          "Provided operational support and monitoring during the tournament.",
          "Produced technical documentation for regional teams.",
        ],
        achievements: [
          {
            title: "Qatar 2022 Pool",
            description:
              "Gamified corporate portal with secure authentication and live reporting.",
            image: "payroll2.jpg",
            url: "https://www.asofarma.com",
            date: "2022-12-01",
            tech_stack: [
              { name: "React" },
              { name: "Node.js" },
              { name: "AWS" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-08-01",
        end_date: "2022-12-31",
        is_current: !1,
        company: "Quinielas Live",
        company_image: "canjeaton1.png",
        position: "Tech Lead & Full-Stack",
        description:
          "Delivered the full-stack experience and AWS infrastructure for the live World Cup contest platform.",
        tasks: [
          "Developed services and shared components for real-time play.",
          "Managed CI/CD and observability.",
          "Coordinated responsive UX with design teams.",
          "Provided 24/7 support during the competition.",
        ],
        achievements: [
          {
            title: "Live Contest Platform",
            description:
              "Scalable application with live leaderboards and prize management.",
            image: "canjeaton2.png",
            url: "https://www.quinielas.live",
            date: "2022-11-01",
            tech_stack: [
              { name: "React" },
              { name: "AWS" },
              { name: "Docker" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-02-01",
        end_date: "2022-10-31",
        is_current: !1,
        company: "Cognits",
        company_image: "10x.png",
        position: "Senior Full-Stack",
        description:
          "Supported the LEND platform by adding new features, technology migrations and Dev/QA improvements.",
        tasks: [
          "Implemented React components and lending flows.",
          "Migrated Jython modules to modern stacks.",
          "Improved QA and DevOps environments.",
          "Championed code reviews and best practices.",
        ],
        achievements: [
          {
            title: "LEND Platform",
            description:
              "Financial solution with modular components and automated deployments.",
            image: "payroll.jpg",
            url: "https://www.cognits.co",
            date: "2022-09-01",
            tech_stack: [
              { name: "React" },
              { name: "Redux" },
              { name: "Docker" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-01-01",
        end_date: "2022-12-31",
        is_current: !1,
        company: "Bullseye Locations",
        company_image: "bullseye-logo.png",
        position: "Senior Full-Stack Engineer",
        description:
          "Developed map-based applications with Google Maps and Mapbox for retail customers.",
        tasks: [
          "Integrated geospatial data and analytical dashboards.",
          "Migrated .NET modules to React and React Native.",
          "Kick-started mobile development using React Native.",
          "Coordinated directly with U.S. business stakeholders.",
        ],
        achievements: [
          {
            title: "Location Intelligence Suite",
            description:
              "Web and mobile apps for site analysis with interactive maps.",
            image: "bullseye-banner.png",
            url: "https://www.bullseyelocations.com/",
            date: "2022-10-01",
            tech_stack: [
              { name: "React" },
              { name: "Redux" },
              { name: "React Native" },
              { name: "AWS" },
              { name: "C#" },
              { name: ".NET Core" },
              { name: "IIS" },
              { name: "SQL Server" },
              { name: "Jira" },
              { name: "Scrum" },
            ],
            modal_details: [
              {
                image: "bullseye-locator.png",
                description:
                  "Automatic locator generation driven by client requests for store and kiosk discovery on maps.",
              },
              {
                image: "bullseye-nearby.png",
                description:
                  "Automatic nearby locations based on current user position.",
              },
              {
                image: "bullseye-search.png",
                description:
                  "Store search in maps with geolocation and filters.",
              },
              {
                image: "bullseye-page.png",
                description:
                  "Dynamic page generation from inbound JSON to build event/location landing pages.",
              },
              {
                image: "bullseye-form.png",
                description:
                  "Dynamic form generation from JSON input for ceremony/store submissions.",
              },
            ],
          },
        ],
        home_order: 3,
        show_on_home: !0,
      },
      {
        start_date: "2021-05-01",
        end_date: "2021-10-31",
        is_current: !1,
        company: "International Organization for Migration",
        company_image: "payroll2.jpg",
        position: "Tech Lead & Senior Full-Stack",
        description:
          "Analyzed and redesigned the Temporary Visa System (IGM), coordinating teams and documentation.",
        tasks: [
          "Led hybrid teams in Guatemala and remote locations.",
          "Produced functional and technical documentation for migration processes.",
          "Integrated government services and data analysis pipelines.",
          "Supported security audits and compliance.",
        ],
        achievements: [
          {
            title: "Temporary Visa System",
            description:
              "Modernized backend and front office with traceable flows and reporting.",
            image: "chivo.png",
            url: "https://www.migracion.gob.gt",
            date: "2021-08-01",
            tech_stack: [
              { name: "React" },
              { name: "Node.js" },
              { name: "AWS" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2016-01-01",
        end_date: "2020-12-31",
        is_current: !1,
        company: "FAO UN & SIECA",
        company_image: "alphapoint.png",
        position: "Tech Lead & Senior Full-Stack",
        description:
          "Delivered regional agricultural market platforms and customs dashboards for Central America and the Caribbean.",
        tasks: [
          "Coordinated multinational teams and regional rollouts.",
          "Designed trade and logistics dashboards.",
          "Developed multi-platform web and mobile portals.",
          "Maintained FYDUCA systems and RFID reporting.",
        ],
        achievements: [
          {
            title: "Regional Agricultural Market",
            description:
              "Platform used across Central America to track prices and supply.",
            image: "canjeaton1.png",
            url: "https://www.sieca.int",
            date: "2019-06-01",
            tech_stack: [
              { name: "React" },
              { name: "Docker" },
              { name: "AWS" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2012-01-01",
        end_date: "2016-12-31",
        is_current: !1,
        company: "IOM",
        company_image: "oim.jpeg",
        position: "Full-Stack Developer",
        description:
          "Built platforms for statistics, surveys, ecommerce, mobile apps, dashboards and nutrition systems for UN programs.",
        tasks: [
          "Developed mobile apps, dashboards and inventory services.",
          "Integrated surveys and payment modules for international projects.",
          "Maintained Java + PHP + Oracle solutions.",
          "Implemented data services and reporting APIs.",
        ],
        achievements: [
          {
            title: "Multinational platforms",
            description:
              "Suite of UN solutions with field monitoring and secure backoffice.",
            image: "payroll.jpg",
            url: "https://www.un.org",
            date: "2015-05-01",
            tech_stack: [
              { name: "React" },
              { name: "Laravel" },
              { name: "MySQL" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2006-01-01",
        end_date: "2013-12-31",
        is_current: !1,
        company: "SAT Guatemala",
        company_image: "10x.png",
        position: "Full-Stack Developer",
        description:
          "Modernized taxation and customs systems using Java, OAS, Spring and Oracle.",
        tasks: [
          "Developed internal fiscal applications.",
          "Integrated web services and authentication flows.",
          "Migrated legacy modules to web architectures.",
          "Provided continuous support for key users.",
        ],
        achievements: [
          {
            title: "Tax systems",
            description:
              "Internal platforms for filing and tracking tax information.",
            image: "canjeaton.png",
            url: "https://portal.sat.gob.gt",
            date: "2013-01-01",
            tech_stack: [{ name: "Java" }, { name: "SQL" }, { name: "Linux" }],
          },
        ],
        show_on_home: !1,
      },
    ],
    university: {
      start_date: "2002",
      end_date: "2006",
      title: "Computer Engineering",
      school: "Universidad de San Carlos de Guatemala",
    },
    tech_skills: [
      {
        title: "Frontend & Mobile",
        tools: ["React", "React Native", "TypeScript", "Redux", "Expo"],
        stars: 5,
      },
      {
        title: "Backend & Cloud",
        tools: ["Node.js", "Java", ".NET", "AWS", "Docker"],
        stars: 4,
      },
      {
        title: "Databases",
        tools: ["MySQL", "MongoDB", "DynamoDB", "Oracle"],
        stars: 4,
      },
      {
        title: "Tools & DevOps",
        tools: ["GitLab", "Bitbucket", "Jira", "AWS Amplify", "CloudFormation"],
        stars: 4,
      },
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "Advanced" },
    ],
    contact_info: [
      {
        title: "avihergo@gmail.com",
        icon: "email.svg",
        url: "mailto:avihergo@gmail.com",
      },
      { title: "+50255286714", icon: "phone.svg", url: "tel:+50255286714" },
      {
        title: "LinkedIn",
        icon: "linkedin.svg",
        url: "https://www.linkedin.com/in/avihergo/",
      },
      {
        title: "GitHub",
        icon: "github.svg",
        url: "https://github.com/avihergo",
      },
      {
        title: "WhatsApp",
        icon: "whatsapp.svg",
        url: "https://wa.me/50255286714",
      },
      {
        title: "GitHub 2",
        icon: "github.svg",
        url: "https://github.com/pandvictor",
      },
    ],
  },
  fL = { hello: sL, download: lL, more_info: cL, portfolio: uL, resume: dL },
  pL = "¡Hola!",
  hL = "Descargar CV",
  mL = "Overview",
  gL = {
    title: "Portafolio",
    subtitle:
      "Soluciones digitales para fintech, gobierno y organizaciones internacionales",
  },
  vL = {
    title: "Hoja de Vida",
    name: "Víctor",
    full_name: "Víctor Hernández",
    position: "Lead & Senior Software Developer",
    experience: "Experiencia",
    education: "Educación",
    languages_title: "Idiomas",
    skills: "Habilidades",
    contact: "Contacto",
    summary:
      "Desarrollador senior con más de 19 años entregando soluciones tecnológicas para fintech, gobierno y organizaciones internacionales. Especializado en React Native, React, TypeScript, Node.js y AWS. Experiencia comprobada liderando equipos, definiendo arquitecturas y lanzando productos de alto impacto como CHIVO Wallet y la plataforma APEX.",
    work_history: [
      {
        start_date: "2023-06-01",
        end_date: "",
        is_current: !0,
        company: "CHIVO Wallet",
        company_image: "alphapoint.png",
        position: "Senior Software Developer",
        description:
          "Lideré la billetera Bitcoin nacional de El Salvador (AlphaPoint), tomando la experiencia web y móvil para pagos, remesas, cash-in/out y POS para comercios.",
        tasks: [
          "Entregué flujos de billetera, remesas y on/off-ramp en React Native y React, integrando Lightning y servicios on-chain.",
          "Coordiné releases con producto y compliance para mantener KYC, kioscos de cash-in y POS alineados a regulación.",
          "Construí componentes UI compartidos, monitoreo de errores y bases de performance para móvil y web.",
          "Mentoricé al equipo en TypeScript, pruebas y observabilidad mientras ordenaba backlog y deuda técnica.",
        ],
        achievements: [
          {
            title: "Relanzamiento CHIVO Wallet",
            description:
              "Billetera Bitcoin/LN con pagos QR, remesas, POS para comercios, descuentos de combustible y manejo de efectivo en más de 200 cajeros.",
            image: "chivo2.png",
            url: "https://www.chivowallet.com",
            date: "2024-01-01",
            tech_stack: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "React" },
              { name: "Redux" },
              { name: "RTK Query" },
              { name: "Jira" },
              { name: "Git" },
              { name: "GitLab" },
              { name: "Scrum" },
              { name: "iOS" },
              { name: "Android" },
              { name: "TypeScript" },
              { name: "AWS" },
              { name: "Bitcoin" },
            ],
            modal_details: [
              {
                image: "chivo2.png",
                description:
                  "Experiencia móvil para pagos Lightning/on-chain, remesas y flujos QR.",
              },
              {
                image: "chivo.png",
                description:
                  "POS para comercios y manejo de efectivo en kioscos/cajeros con flujos alineados a compliance.",
              },
              {
                image: "chivo-benefits.png",
                description:
                  "Beneficios de la billetera nacional: transferencias sin comisión, onboarding sencillo, soporte USD/BTC y retiros de efectivo en cualquier momento.",
              },
              {
                image: "chivo-login.png",
                description:
                  "Validación de usuarios, onboarding seguro y verificaciones KYC para nuevos registros e ingresos.",
              },
              {
                image: "chivo-otp.png",
                description:
                  "Inicio de sesión por teléfono con envío de OTP al usuario para acceso seguro.",
              },
            ],
            coins: [{ name: "Bitcoin" }],
          },
        ],
        home_order: 2,
        show_on_home: !0,
      },
      {
        start_date: "2024-01-01",
        end_date: "",
        is_current: !0,
        company: "APEX Exchange (AlphaPoint)",
        company_image: "alphapoint.svg",
        position: "Lead Frontend Engineer",
        description:
          "Desarrollé funcionalidades núcleo para un servicio digital nacional diseñado para más de 6 millones de ciudadanos. Responsable del front web de trading de la solución white-label APEX de AlphaPoint para bancos e instituciones.",
        tasks: [
          "Implementé UI de trading responsive (order books, gráficas avanzadas, RFQ/OTC) consumiendo WebSockets y APIs REST.",
          "Integré módulos de cuentas, wallets y custodia multi-activo con administración por roles y flujos de cumplimiento.",
          "Optimicé latencia y render de actualizaciones de alta frecuencia (profundidad, trades, balances) con virtualización y memoización.",
          "Trabajé con producto y clientes para localizar y tematizar la experiencia white-label en múltiples despliegues institucionales.",
        ],
        achievements: [
          {
            title: "APEX Exchange",
            description:
              "Plataforma de intercambio institucional con conectividad al matching engine, herramientas de liquidez y UX white-label personalizable.",
            image: "alphapoint.png",
            url: "https://alphapoint.com/product/alphapoint-exchange-software/",
            date: "2024-05-01",
            tech_stack: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "React" },
              { name: "Redux" },
              { name: "RTK Query" },
              { name: "Jira" },
              { name: "Git" },
              { name: "GitLab" },
              { name: "Scrum" },
              { name: "iOS" },
              { name: "Android" },
              { name: "TypeScript" },
              { name: "AWS" },
              { name: "Bitcoin" },
            ],
            modal_details: [
              {
                image: "alphapoint.png",
                description:
                  "Experiencia web de trading con libros en tiempo real, gráficos y herramientas de liquidez para clientes institucionales.",
              },
              {
                image: "apex-mobile.png",
                description:
                  "App móvil para comprar cripto y hacer trading con gráficos en vivo, profundidad y gestión de órdenes.",
              },
              {
                image: "apex-trading.png",
                description:
                  "Módulo de trading para múltiples pares cripto con órdenes market/limit/condicionales, TP/SL y apalancamiento.",
              },
              {
                image: "apex-realtime.png",
                description:
                  "Compras en tiempo real de múltiples pares cripto con desglose de fees y préstamos.",
              },
              {
                image: "apex-alerts.png",
                description:
                  "Alertas y notificaciones en la app para riesgo de portafolio y cambios de balance.",
              },
              {
                image: "apex-webtrading.png",
                description:
                  "Plataforma web de trading para múltiples cripto con order book en vivo, trades y entrada de órdenes avanzada.",
              },
            ],
            coins: [
              { name: "Bitcoin" },
              { name: "XRP" },
              { name: "USDT" },
              { name: "ETH" },
              { name: "DASH" },
              { name: "ADA" },
            ],
          },
        ],
        home_order: 1,
        show_on_home: !0,
      },
      {
        start_date: "2022-12-01",
        end_date: "2023-12-31",
        is_current: !1,
        company: "IOM & Secretaría de Bienestar Social",
        company_image: ["oim.jpeg", "sbs.png"],
        position: "Technical Lead & Senior Developer",
        description:
          "Responsable técnico del programa Angel Ariel, coordinando equipos React y Node.js para proyectos gubernamentales.",
        tasks: [
          "Definición de arquitectura y lineamientos de desarrollo para plataformas sociales.",
          "Gestión de stakeholders y seguimiento funcional con organismos internacionales.",
          "Mentoría de equipos y soporte a despliegues basados en React y Node.js.",
          "Automatización de reportes e integración con servicios en la nube.",
        ],
        achievements: [
          {
            title: "Plataforma Angel Ariel",
            description:
              "Portal y app de apoyo para Quedate y Casa Joven, con paneles para personal de campo y analistas.",
            image: "angel-ariel.png",
            url: "https://www.iom.int",
            date: "2023-06-01",
            tech_stack: [
              { name: "React" },
              { name: "Node.js" },
              { name: "AWS" },
              { name: "Redux" },
              { name: "MongoDB" },
              { name: "MySQL" },
              { name: "Jira" },
              { name: "Scrum" },
            ],
          },
        ],
        home_order: 4,
        show_on_home: !0,
      },
      {
        start_date: "2023-01-01",
        end_date: "2023-05-31",
        is_current: !1,
        company: "WizeDevs",
        company_image: "canjeaton2.png",
        position: "Senior Mobile Developer",
        description:
          "Reconstrucción completa de una app móvil heredada, optimizando el rendimiento y la experiencia de usuario.",
        tasks: [
          "Refactorización total del código basándose en buenas prácticas de React Native.",
          "Integración con cerraduras inteligentes Linka mediante su SDK.",
          "Optimización visual para múltiples resoluciones y dark mode.",
          "Automatización de QA y liberaciones en tiendas.",
        ],
        achievements: [
          {
            title: "Reingeniería App Residencial",
            description:
              "Lanzamiento de una nueva versión con flujos seguros, notificaciones y soporte OTA.",
            image: "canjeaton.png",
            url: "https://wizedevs.com",
            date: "2023-05-01",
            tech_stack: [
              { name: "React Native" },
              { name: "Expo" },
              { name: "Redux" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-10-01",
        end_date: "2022-12-31",
        is_current: !1,
        company: "Asofarma Pharma",
        company_image: "payroll.jpg",
        position: "Tech Lead & Full-Stack",
        description:
          "Implementación full-stack y despliegue AWS para la plataforma de quinielas del Mundial Qatar 2022.",
        tasks: [
          "Construcción de módulos de frontend y backend para administración de quinielas.",
          "Automatización de infraestructura con servicios administrados de AWS.",
          "Soporte operativo y monitoreo durante el torneo.",
          "Documentación técnica para equipos regionales.",
        ],
        achievements: [
          {
            title: "Qatar 2022 Pool",
            description:
              "Portal empresarial gamificado con autenticación segura y reportes en vivo.",
            image: "payroll2.jpg",
            url: "https://www.asofarma.com",
            date: "2022-12-01",
            tech_stack: [
              { name: "React" },
              { name: "Node.js" },
              { name: "AWS" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-08-01",
        end_date: "2022-12-31",
        is_current: !1,
        company: "Quinielas Live",
        company_image: "canjeaton1.png",
        position: "Tech Lead & Full-Stack",
        description:
          "Entrega full-stack y despliegue en AWS de la plataforma mundialista para concursos en vivo.",
        tasks: [
          "Desarrollo de servicios y componentes compartidos para experiencia en tiempo real.",
          "Gestión CI/CD y observabilidad.",
          "Coordinación con diseño para experiencias responsive.",
          "Soporte 24/7 durante la competición.",
        ],
        achievements: [
          {
            title: "Plataforma de Quinielas",
            description:
              "Aplicación escalable con tableros en vivo y administración de premios.",
            image: "canjeaton2.png",
            url: "https://www.quinielas.live",
            date: "2022-11-01",
            tech_stack: [
              { name: "React" },
              { name: "AWS" },
              { name: "Docker" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-02-01",
        end_date: "2022-10-31",
        is_current: !1,
        company: "Cognits",
        company_image: "10x.png",
        position: "Senior Full-Stack",
        description:
          "Soporte para la plataforma LEND, agregando nuevas funcionalidades y migraciones tecnológicas.",
        tasks: [
          "Desarrollo de componentes React y flujos de préstamo.",
          "Migración de módulos escritos en Jython a tecnologías modernas.",
          "Mejoras en entornos de QA y DevOps.",
          "Revisión de código y liderazgo de buenas prácticas.",
        ],
        achievements: [
          {
            title: "Plataforma LEND",
            description:
              "Solución financiera con componentes modulares y despliegues automatizados.",
            image: "payroll.jpg",
            url: "https://www.cognits.co",
            date: "2022-09-01",
            tech_stack: [
              { name: "React" },
              { name: "Redux" },
              { name: "Docker" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2022-01-01",
        end_date: "2022-12-31",
        is_current: !1,
        company: "Bullseye Locations",
        company_image: "bullseye-logo.png",
        position: "Senior Full-Stack Engineer",
        description:
          "Desarrollo de aplicaciones basadas en mapas con Google Maps y Mapbox para clientes retail.",
        tasks: [
          "Integración de datos geoespaciales y dashboards analíticos.",
          "Migración de módulos .NET a React y React Native.",
          "Iniciativa para habilitar productos móviles en React Native.",
          "Comunicación con stakeholders de negocio en EE.UU.",
        ],
        achievements: [
          {
            title: "Suites de localización",
            description:
              "Web y mobile apps para análisis de ubicaciones con mapas interactivos.",
            image: "bullseye-banner.png",
            url: "https://bullseyeapps.com",
            date: "2022-10-01",
            tech_stack: [
              { name: "React" },
              { name: "Redux" },
              { name: "React Native" },
              { name: "AWS" },
              { name: "C#" },
              { name: ".NET Core" },
              { name: "IIS" },
              { name: "SQL Server" },
              { name: "Jira" },
              { name: "Scrum" },
            ],
            modal_details: [
              {
                image: "bullseye-locator.png",
                description:
                  "Generación automática de locators según solicitud del cliente.",
              },
              {
                image: "bullseye-nearby.png",
                description:
                  "Ubicación cercana automática según la posición actual del usuario.",
              },
              {
                image: "bullseye-search.png",
                description:
                  "Búsqueda de tiendas en mapas con geolocalización y filtros.",
              },
              {
                image: "bullseye-page.png",
                description:
                  "Generación de páginas dinámicas a partir de JSON de entrada para crear landing pages de eventos/ubicaciones.",
              },
              {
                image: "bullseye-form.png",
                description:
                  "Generación de formularios dinámicos a partir de JSON de entrada para solicitudes de ceremonias/tiendas.",
              },
            ],
          },
        ],
        home_order: 3,
        show_on_home: !0,
      },
      {
        start_date: "2021-05-01",
        end_date: "2021-10-31",
        is_current: !1,
        company: "International Organization for Migration",
        company_image: "payroll2.jpg",
        position: "Tech Lead & Senior Full-Stack",
        description:
          "Análisis y rediseño arquitectónico del Sistema de Visas Temporales (IGM).",
        tasks: [
          "Liderazgo técnico de equipos mixtos en Guatemala y remotos.",
          "Documentación funcional y técnica para procesos migratorios.",
          "Integración con servicios gubernamentales y análisis de datos.",
          "Acompañamiento en auditorías de seguridad.",
        ],
        achievements: [
          {
            title: "Sistema de Visas Temporales",
            description:
              "Modernización del backend y frontoffice con flujos trazables y reportes.",
            image: "chivo.png",
            url: "https://www.migracion.gob.gt",
            date: "2021-08-01",
            tech_stack: [
              { name: "React" },
              { name: "Node.js" },
              { name: "AWS" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2016-01-01",
        end_date: "2020-12-31",
        is_current: !1,
        company: "FAO ONU & SIECA",
        company_image: "alphapoint.png",
        position: "Tech Lead & Senior Full-Stack",
        description:
          "Implementación de mercados agrícolas regionales y tableros aduaneros para Centroamérica y el Caribe.",
        tasks: [
          "Coordinación de equipos multinacionales y despliegues regionales.",
          "Diseño de dashboards de comercio y logística.",
          "Desarrollo de portales web y móviles multiplataforma.",
          "Mantenimiento de sistemas FYDUCA y reportes RFID.",
        ],
        achievements: [
          {
            title: "Mercado agrícola regional",
            description:
              "Plataforma usada en Centroamérica para seguimiento de precios y oferta agrícola.",
            image: "canjeaton1.png",
            url: "https://www.sieca.int",
            date: "2019-06-01",
            tech_stack: [
              { name: "React" },
              { name: "Docker" },
              { name: "AWS" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2012-01-01",
        end_date: "2016-12-31",
        is_current: !1,
        company: "IOM",
        company_image: "oim.jpeg",
        position: "Full-Stack Developer",
        description:
          "Desarrollo de plataformas para estadísticas migratorias, encuestas, ecommerce y sistemas de nutrición.",
        tasks: [
          "Implementación de apps móviles, dashboards y servicios de inventario.",
          "Integración de encuestas y módulos de pago para proyectos internacionales.",
          "Mantenimiento de sistemas Java + PHP + Oracle.",
          "Desarrollo de backend y servicios de datos.",
        ],
        achievements: [
          {
            title: "Plataformas multinacionales",
            description:
              "Suite de soluciones para ONU con monitoreo en campo y backoffice seguro.",
            image: "payroll.jpg",
            url: "https://www.un.org",
            date: "2015-05-01",
            tech_stack: [
              { name: "React" },
              { name: "Laravel" },
              { name: "MySQL" },
            ],
          },
        ],
        show_on_home: !1,
      },
      {
        start_date: "2006-01-01",
        end_date: "2013-12-31",
        is_current: !1,
        company: "SAT Guatemala",
        company_image: "10x.png",
        position: "Full-Stack Developer",
        description:
          "Modernización de sistemas de impuestos y aduanas usando Java, OAS, Spring y Oracle.",
        tasks: [
          "Desarrollo de aplicaciones internas fiscales.",
          "Integración de servicios web y autenticación.",
          "Migración de legados hacia arquitecturas web.",
          "Soporte continuo a usuarios clave.",
        ],
        achievements: [
          {
            title: "Sistemas tributarios",
            description:
              "Plataformas internas para declaraciones y seguimiento de impuestos.",
            image: "canjeaton.png",
            url: "https://portal.sat.gob.gt",
            date: "2013-01-01",
            tech_stack: [{ name: "Java" }, { name: "SQL" }, { name: "Linux" }],
          },
        ],
        show_on_home: !1,
      },
    ],
    university: {
      start_date: "2002",
      end_date: "2006",
      title: "Ingeniería en Sistemas",
      school: "Universidad de San Carlos de Guatemala",
    },
    tech_skills: [
      {
        title: "Frontend & Mobile",
        tools: ["React", "React Native", "TypeScript", "Redux", "Expo"],
        stars: 5,
      },
      {
        title: "Backend & Cloud",
        tools: ["Node.js", "Java", ".NET", "AWS", "Docker"],
        stars: 4,
      },
      {
        title: "Bases de Datos",
        tools: ["MySQL", "MongoDB", "DynamoDB", "Oracle"],
        stars: 4,
      },
      {
        title: "Herramientas y DevOps",
        tools: ["GitLab", "Bitbucket", "Jira", "AWS Amplify", "CloudFormation"],
        stars: 4,
      },
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "Avanzado" },
    ],
    contact_info: [
      {
        title: "avihergo@gmail.com",
        icon: "email.svg",
        url: "mailto:avihergo@gmail.com",
      },
      { title: "+50255286714", icon: "phone.svg", url: "tel:+50255286714" },
      {
        title: "LinkedIn",
        icon: "linkedin.svg",
        url: "https://www.linkedin.com/in/avihergo/",
      },
      {
        title: "GitHub",
        icon: "github.svg",
        url: "https://github.com/avihergo",
      },
      {
        title: "WhatsApp",
        icon: "whatsapp.svg",
        url: "https://wa.me/50255286714",
      },
      {
        title: "GitHub 2",
        icon: "github.svg",
        url: "https://github.com/pandvictor",
      },
    ],
  },
  yL = { hello: pL, download: hL, more_info: mL, portfolio: gL, resume: vL },
  xL = { es: yL, en: fL },
  bL = "/portafolio/".replace(/\/$/, ""),
  jt = `${bL}/assets`,
  wL = "1.0.0-react-vite",
  sa = Kc(lP)(({}) => ({
    textDecoration: "none",
    color: "inherit",
    "&.active": { fontWeight: "bold" },
  }));
var SL = Array.isArray,
  or = SL,
  CL = typeof Cl == "object" && Cl && Cl.Object === Object && Cl,
  Qw = CL,
  $L = Qw,
  _L = typeof self == "object" && self && self.Object === Object && self,
  PL = $L || _L || Function("return this")(),
  yr = PL,
  EL = yr,
  kL = EL.Symbol,
  pl = kL,
  O0 = pl,
  Xw = Object.prototype,
  RL = Xw.hasOwnProperty,
  TL = Xw.toString,
  Ka = O0 ? O0.toStringTag : void 0;
function OL(e) {
  var t = RL.call(e, Ka),
    n = e[Ka];
  try {
    e[Ka] = void 0;
    var r = !0;
  } catch {}
  var o = TL.call(e);
  return r && (t ? (e[Ka] = n) : delete e[Ka]), o;
}
var ML = OL,
  IL = Object.prototype,
  AL = IL.toString;
function NL(e) {
  return AL.call(e);
}
var jL = NL,
  M0 = pl,
  DL = ML,
  LL = jL,
  FL = "[object Null]",
  zL = "[object Undefined]",
  I0 = M0 ? M0.toStringTag : void 0;
function BL(e) {
  return e == null
    ? e === void 0
      ? zL
      : FL
    : I0 && I0 in Object(e)
      ? DL(e)
      : LL(e);
}
var va = BL;
function WL(e) {
  return e != null && typeof e == "object";
}
var ai = WL,
  UL = va,
  HL = ai,
  VL = "[object Symbol]";
function GL(e) {
  return typeof e == "symbol" || (HL(e) && UL(e) == VL);
}
var hl = GL,
  KL = or,
  YL = hl,
  qL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  QL = /^\w*$/;
function XL(e, t) {
  if (KL(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || YL(e)
    ? !0
    : QL.test(e) || !qL.test(e) || (t != null && e in Object(t));
}
var Am = XL;
function JL(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hr = JL,
  ZL = va,
  e3 = Hr,
  t3 = "[object AsyncFunction]",
  n3 = "[object Function]",
  r3 = "[object GeneratorFunction]",
  o3 = "[object Proxy]";
function i3(e) {
  if (!e3(e)) return !1;
  var t = ZL(e);
  return t == n3 || t == r3 || t == t3 || t == o3;
}
var Nm = i3,
  a3 = yr,
  s3 = a3["__core-js_shared__"],
  l3 = s3,
  lf = l3,
  A0 = (function () {
    var e = /[^.]+$/.exec((lf && lf.keys && lf.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function c3(e) {
  return !!A0 && A0 in e;
}
var u3 = c3,
  d3 = Function.prototype,
  f3 = d3.toString;
function p3(e) {
  if (e != null) {
    try {
      return f3.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var Jw = p3,
  h3 = Nm,
  m3 = u3,
  g3 = Hr,
  v3 = Jw,
  y3 = /[\\^$.*+?()[\]{}|]/g,
  x3 = /^\[object .+?Constructor\]$/,
  b3 = Function.prototype,
  w3 = Object.prototype,
  S3 = b3.toString,
  C3 = w3.hasOwnProperty,
  $3 = RegExp(
    "^" +
      S3.call(C3)
        .replace(y3, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function _3(e) {
  if (!g3(e) || m3(e)) return !1;
  var t = h3(e) ? $3 : x3;
  return t.test(v3(e));
}
var P3 = _3;
function E3(e, t) {
  return e == null ? void 0 : e[t];
}
var k3 = E3,
  R3 = P3,
  T3 = k3;
function O3(e, t) {
  var n = T3(e, t);
  return R3(n) ? n : void 0;
}
var si = O3,
  M3 = si,
  I3 = M3(Object, "create"),
  ud = I3,
  N0 = ud;
function A3() {
  (this.__data__ = N0 ? N0(null) : {}), (this.size = 0);
}
var N3 = A3;
function j3(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var D3 = j3,
  L3 = ud,
  F3 = "__lodash_hash_undefined__",
  z3 = Object.prototype,
  B3 = z3.hasOwnProperty;
function W3(e) {
  var t = this.__data__;
  if (L3) {
    var n = t[e];
    return n === F3 ? void 0 : n;
  }
  return B3.call(t, e) ? t[e] : void 0;
}
var U3 = W3,
  H3 = ud,
  V3 = Object.prototype,
  G3 = V3.hasOwnProperty;
function K3(e) {
  var t = this.__data__;
  return H3 ? t[e] !== void 0 : G3.call(t, e);
}
var Y3 = K3,
  q3 = ud,
  Q3 = "__lodash_hash_undefined__";
function X3(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = q3 && t === void 0 ? Q3 : t),
    this
  );
}
var J3 = X3,
  Z3 = N3,
  e4 = D3,
  t4 = U3,
  n4 = Y3,
  r4 = J3;
function ya(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ya.prototype.clear = Z3;
ya.prototype.delete = e4;
ya.prototype.get = t4;
ya.prototype.has = n4;
ya.prototype.set = r4;
var o4 = ya;
function i4() {
  (this.__data__ = []), (this.size = 0);
}
var a4 = i4;
function s4(e, t) {
  return e === t || (e !== e && t !== t);
}
var ml = s4,
  l4 = ml;
function c4(e, t) {
  for (var n = e.length; n--; ) if (l4(e[n][0], t)) return n;
  return -1;
}
var dd = c4,
  u4 = dd,
  d4 = Array.prototype,
  f4 = d4.splice;
function p4(e) {
  var t = this.__data__,
    n = u4(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : f4.call(t, n, 1), --this.size, !0;
}
var h4 = p4,
  m4 = dd;
function g4(e) {
  var t = this.__data__,
    n = m4(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var v4 = g4,
  y4 = dd;
function x4(e) {
  return y4(this.__data__, e) > -1;
}
var b4 = x4,
  w4 = dd;
function S4(e, t) {
  var n = this.__data__,
    r = w4(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var C4 = S4,
  $4 = a4,
  _4 = h4,
  P4 = v4,
  E4 = b4,
  k4 = C4;
function xa(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
xa.prototype.clear = $4;
xa.prototype.delete = _4;
xa.prototype.get = P4;
xa.prototype.has = E4;
xa.prototype.set = k4;
var fd = xa,
  R4 = si,
  T4 = yr,
  O4 = R4(T4, "Map"),
  jm = O4,
  j0 = o4,
  M4 = fd,
  I4 = jm;
function A4() {
  (this.size = 0),
    (this.__data__ = {
      hash: new j0(),
      map: new (I4 || M4)(),
      string: new j0(),
    });
}
var N4 = A4;
function j4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var D4 = j4,
  L4 = D4;
function F4(e, t) {
  var n = e.__data__;
  return L4(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var pd = F4,
  z4 = pd;
function B4(e) {
  var t = z4(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var W4 = B4,
  U4 = pd;
function H4(e) {
  return U4(this, e).get(e);
}
var V4 = H4,
  G4 = pd;
function K4(e) {
  return G4(this, e).has(e);
}
var Y4 = K4,
  q4 = pd;
function Q4(e, t) {
  var n = q4(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var X4 = Q4,
  J4 = N4,
  Z4 = W4,
  e5 = V4,
  t5 = Y4,
  n5 = X4;
function ba(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ba.prototype.clear = J4;
ba.prototype.delete = Z4;
ba.prototype.get = e5;
ba.prototype.has = t5;
ba.prototype.set = n5;
var Dm = ba,
  Zw = Dm,
  r5 = "Expected a function";
function Lm(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(r5);
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(o)) return i.get(o);
    var a = e.apply(this, r);
    return (n.cache = i.set(o, a) || i), a;
  };
  return (n.cache = new (Lm.Cache || Zw)()), n;
}
Lm.Cache = Zw;
var o5 = Lm,
  i5 = o5,
  a5 = 500;
function s5(e) {
  var t = i5(e, function (r) {
      return n.size === a5 && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var l5 = s5,
  c5 = l5,
  u5 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  d5 = /\\(\\)?/g,
  f5 = c5(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(u5, function (n, r, o, i) {
        t.push(o ? i.replace(d5, "$1") : r || n);
      }),
      t
    );
  }),
  p5 = f5;
function h5(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var eS = h5,
  D0 = pl,
  m5 = eS,
  g5 = or,
  v5 = hl,
  y5 = 1 / 0,
  L0 = D0 ? D0.prototype : void 0,
  F0 = L0 ? L0.toString : void 0;
function tS(e) {
  if (typeof e == "string") return e;
  if (g5(e)) return m5(e, tS) + "";
  if (v5(e)) return F0 ? F0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -y5 ? "-0" : t;
}
var x5 = tS,
  b5 = x5;
function w5(e) {
  return e == null ? "" : b5(e);
}
var wa = w5,
  S5 = or,
  C5 = Am,
  $5 = p5,
  _5 = wa;
function P5(e, t) {
  return S5(e) ? e : C5(e, t) ? [e] : $5(_5(e));
}
var nS = P5,
  E5 = hl,
  k5 = 1 / 0;
function R5(e) {
  if (typeof e == "string" || E5(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -k5 ? "-0" : t;
}
var hd = R5,
  T5 = nS,
  O5 = hd;
function M5(e, t) {
  t = T5(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[O5(t[n++])];
  return n && n == r ? e : void 0;
}
var Fm = M5,
  I5 = Fm;
function A5(e, t, n) {
  var r = e == null ? void 0 : I5(e, t);
  return r === void 0 ? n : r;
}
var rS = A5;
const N5 = rr(rS);
var j5 = Object.prototype,
  D5 = j5.hasOwnProperty;
function L5(e, t) {
  return e != null && D5.call(e, t);
}
var F5 = L5,
  z5 = va,
  B5 = ai,
  W5 = "[object Arguments]";
function U5(e) {
  return B5(e) && z5(e) == W5;
}
var H5 = U5,
  z0 = H5,
  V5 = ai,
  oS = Object.prototype,
  G5 = oS.hasOwnProperty,
  K5 = oS.propertyIsEnumerable,
  Y5 = z0(
    (function () {
      return arguments;
    })()
  )
    ? z0
    : function (e) {
        return V5(e) && G5.call(e, "callee") && !K5.call(e, "callee");
      },
  md = Y5,
  q5 = 9007199254740991,
  Q5 = /^(?:0|[1-9]\d*)$/;
function X5(e, t) {
  var n = typeof e;
  return (
    (t = t ?? q5),
    !!t &&
      (n == "number" || (n != "symbol" && Q5.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var zm = X5,
  J5 = 9007199254740991;
function Z5(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= J5;
}
var Bm = Z5,
  eF = nS,
  tF = md,
  nF = or,
  rF = zm,
  oF = Bm,
  iF = hd;
function aF(e, t, n) {
  t = eF(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = iF(t[r]);
    if (!(i = e != null && n(e, a))) break;
    e = e[a];
  }
  return i || ++r != o
    ? i
    : ((o = e == null ? 0 : e.length),
      !!o && oF(o) && rF(a, o) && (nF(e) || tF(e)));
}
var iS = aF,
  sF = F5,
  lF = iS;
function cF(e, t) {
  return e != null && lF(e, t, sF);
}
var uF = cF;
const dF = rr(uF);
var fF = fd;
function pF() {
  (this.__data__ = new fF()), (this.size = 0);
}
var hF = pF;
function mF(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var gF = mF;
function vF(e) {
  return this.__data__.get(e);
}
var yF = vF;
function xF(e) {
  return this.__data__.has(e);
}
var bF = xF,
  wF = fd,
  SF = jm,
  CF = Dm,
  $F = 200;
function _F(e, t) {
  var n = this.__data__;
  if (n instanceof wF) {
    var r = n.__data__;
    if (!SF || r.length < $F - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new CF(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var PF = _F,
  EF = fd,
  kF = hF,
  RF = gF,
  TF = yF,
  OF = bF,
  MF = PF;
function Sa(e) {
  var t = (this.__data__ = new EF(e));
  this.size = t.size;
}
Sa.prototype.clear = kF;
Sa.prototype.delete = RF;
Sa.prototype.get = TF;
Sa.prototype.has = OF;
Sa.prototype.set = MF;
var Wm = Sa,
  IF = si,
  AF = (function () {
    try {
      var e = IF(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  aS = AF,
  B0 = aS;
function NF(e, t, n) {
  t == "__proto__" && B0
    ? B0(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var Um = NF,
  jF = Um,
  DF = ml;
function LF(e, t, n) {
  ((n !== void 0 && !DF(e[t], n)) || (n === void 0 && !(t in e))) &&
    jF(e, t, n);
}
var sS = LF;
function FF(e) {
  return function (t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[e ? s : ++o];
      if (n(i[l], l, i) === !1) break;
    }
    return t;
  };
}
var zF = FF,
  BF = zF,
  WF = BF(),
  lS = WF,
  tu = { exports: {} };
tu.exports;
(function (e, t) {
  var n = yr,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    i = o && o.exports === r,
    a = i ? n.Buffer : void 0,
    s = a ? a.allocUnsafe : void 0;
  function l(c, u) {
    if (u) return c.slice();
    var d = c.length,
      f = s ? s(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e.exports = l;
})(tu, tu.exports);
var UF = tu.exports,
  HF = yr,
  VF = HF.Uint8Array,
  cS = VF,
  W0 = cS;
function GF(e) {
  var t = new e.constructor(e.byteLength);
  return new W0(t).set(new W0(e)), t;
}
var KF = GF,
  YF = KF;
function qF(e, t) {
  var n = t ? YF(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var QF = qF;
function XF(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var JF = XF,
  ZF = Hr,
  U0 = Object.create,
  ez = (function () {
    function e() {}
    return function (t) {
      if (!ZF(t)) return {};
      if (U0) return U0(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  tz = ez;
function nz(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var uS = nz,
  rz = uS,
  oz = rz(Object.getPrototypeOf, Object),
  dS = oz,
  iz = Object.prototype;
function az(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || iz;
  return e === n;
}
var Hm = az,
  sz = tz,
  lz = dS,
  cz = Hm;
function uz(e) {
  return typeof e.constructor == "function" && !cz(e) ? sz(lz(e)) : {};
}
var dz = uz,
  fz = Nm,
  pz = Bm;
function hz(e) {
  return e != null && pz(e.length) && !fz(e);
}
var Ca = hz,
  mz = Ca,
  gz = ai;
function vz(e) {
  return gz(e) && mz(e);
}
var yz = vz,
  nu = { exports: {} };
function xz() {
  return !1;
}
var bz = xz;
nu.exports;
(function (e, t) {
  var n = yr,
    r = bz,
    o = t && !t.nodeType && t,
    i = o && !0 && e && !e.nodeType && e,
    a = i && i.exports === o,
    s = a ? n.Buffer : void 0,
    l = s ? s.isBuffer : void 0,
    c = l || r;
  e.exports = c;
})(nu, nu.exports);
var Vm = nu.exports,
  wz = va,
  Sz = dS,
  Cz = ai,
  $z = "[object Object]",
  _z = Function.prototype,
  Pz = Object.prototype,
  fS = _z.toString,
  Ez = Pz.hasOwnProperty,
  kz = fS.call(Object);
function Rz(e) {
  if (!Cz(e) || wz(e) != $z) return !1;
  var t = Sz(e);
  if (t === null) return !0;
  var n = Ez.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && fS.call(n) == kz;
}
var Tz = Rz,
  Oz = va,
  Mz = Bm,
  Iz = ai,
  Az = "[object Arguments]",
  Nz = "[object Array]",
  jz = "[object Boolean]",
  Dz = "[object Date]",
  Lz = "[object Error]",
  Fz = "[object Function]",
  zz = "[object Map]",
  Bz = "[object Number]",
  Wz = "[object Object]",
  Uz = "[object RegExp]",
  Hz = "[object Set]",
  Vz = "[object String]",
  Gz = "[object WeakMap]",
  Kz = "[object ArrayBuffer]",
  Yz = "[object DataView]",
  qz = "[object Float32Array]",
  Qz = "[object Float64Array]",
  Xz = "[object Int8Array]",
  Jz = "[object Int16Array]",
  Zz = "[object Int32Array]",
  eB = "[object Uint8Array]",
  tB = "[object Uint8ClampedArray]",
  nB = "[object Uint16Array]",
  rB = "[object Uint32Array]",
  He = {};
He[qz] =
  He[Qz] =
  He[Xz] =
  He[Jz] =
  He[Zz] =
  He[eB] =
  He[tB] =
  He[nB] =
  He[rB] =
    !0;
He[Az] =
  He[Nz] =
  He[Kz] =
  He[jz] =
  He[Yz] =
  He[Dz] =
  He[Lz] =
  He[Fz] =
  He[zz] =
  He[Bz] =
  He[Wz] =
  He[Uz] =
  He[Hz] =
  He[Vz] =
  He[Gz] =
    !1;
function oB(e) {
  return Iz(e) && Mz(e.length) && !!He[Oz(e)];
}
var iB = oB;
function aB(e) {
  return function (t) {
    return e(t);
  };
}
var pS = aB,
  ru = { exports: {} };
ru.exports;
(function (e, t) {
  var n = Qw,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    i = o && o.exports === r,
    a = i && n.process,
    s = (function () {
      try {
        var l = o && o.require && o.require("util").types;
        return l || (a && a.binding && a.binding("util"));
      } catch {}
    })();
  e.exports = s;
})(ru, ru.exports);
var sB = ru.exports,
  lB = iB,
  cB = pS,
  H0 = sB,
  V0 = H0 && H0.isTypedArray,
  uB = V0 ? cB(V0) : lB,
  Gm = uB;
function dB(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var hS = dB,
  fB = Um,
  pB = ml,
  hB = Object.prototype,
  mB = hB.hasOwnProperty;
function gB(e, t, n) {
  var r = e[t];
  (!(mB.call(e, t) && pB(r, n)) || (n === void 0 && !(t in e))) && fB(e, t, n);
}
var mS = gB,
  vB = mS,
  yB = Um;
function xB(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i],
      l = r ? r(n[s], e[s], s, n, e) : void 0;
    l === void 0 && (l = e[s]), o ? yB(n, s, l) : vB(n, s, l);
  }
  return n;
}
var bB = xB;
function wB(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var SB = wB,
  CB = SB,
  $B = md,
  _B = or,
  PB = Vm,
  EB = zm,
  kB = Gm,
  RB = Object.prototype,
  TB = RB.hasOwnProperty;
function OB(e, t) {
  var n = _B(e),
    r = !n && $B(e),
    o = !n && !r && PB(e),
    i = !n && !r && !o && kB(e),
    a = n || r || o || i,
    s = a ? CB(e.length, String) : [],
    l = s.length;
  for (var c in e)
    (t || TB.call(e, c)) &&
      !(
        a &&
        (c == "length" ||
          (o && (c == "offset" || c == "parent")) ||
          (i && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
          EB(c, l))
      ) &&
      s.push(c);
  return s;
}
var gS = OB;
function MB(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var IB = MB,
  AB = Hr,
  NB = Hm,
  jB = IB,
  DB = Object.prototype,
  LB = DB.hasOwnProperty;
function FB(e) {
  if (!AB(e)) return jB(e);
  var t = NB(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !LB.call(e, r))) || n.push(r);
  return n;
}
var zB = FB,
  BB = gS,
  WB = zB,
  UB = Ca;
function HB(e) {
  return UB(e) ? BB(e, !0) : WB(e);
}
var vS = HB,
  VB = bB,
  GB = vS;
function KB(e) {
  return VB(e, GB(e));
}
var YB = KB,
  G0 = sS,
  qB = UF,
  QB = QF,
  XB = JF,
  JB = dz,
  K0 = md,
  Y0 = or,
  ZB = yz,
  e6 = Vm,
  t6 = Nm,
  n6 = Hr,
  r6 = Tz,
  o6 = Gm,
  q0 = hS,
  i6 = YB;
function a6(e, t, n, r, o, i, a) {
  var s = q0(e, n),
    l = q0(t, n),
    c = a.get(l);
  if (c) {
    G0(e, n, c);
    return;
  }
  var u = i ? i(s, l, n + "", e, t, a) : void 0,
    d = u === void 0;
  if (d) {
    var f = Y0(l),
      b = !f && e6(l),
      g = !f && !b && o6(l);
    (u = l),
      f || b || g
        ? Y0(s)
          ? (u = s)
          : ZB(s)
            ? (u = XB(s))
            : b
              ? ((d = !1), (u = qB(l, !0)))
              : g
                ? ((d = !1), (u = QB(l, !0)))
                : (u = [])
        : r6(l) || K0(l)
          ? ((u = s), K0(s) ? (u = i6(s)) : (!n6(s) || t6(s)) && (u = JB(l)))
          : (d = !1);
  }
  d && (a.set(l, u), o(u, l, r, i, a), a.delete(l)), G0(e, n, u);
}
var s6 = a6,
  l6 = Wm,
  c6 = sS,
  u6 = lS,
  d6 = s6,
  f6 = Hr,
  p6 = vS,
  h6 = hS;
function yS(e, t, n, r, o) {
  e !== t &&
    u6(
      t,
      function (i, a) {
        if ((o || (o = new l6()), f6(i))) d6(e, t, a, n, yS, r, o);
        else {
          var s = r ? r(h6(e, a), i, a + "", e, t, o) : void 0;
          s === void 0 && (s = i), c6(e, a, s);
        }
      },
      p6
    );
}
var m6 = yS;
function g6(e) {
  return e;
}
var gd = g6;
function v6(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var y6 = v6,
  x6 = y6,
  Q0 = Math.max;
function b6(e, t, n) {
  return (
    (t = Q0(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, o = -1, i = Q0(r.length - t, 0), a = Array(i);
        ++o < i;

      )
        a[o] = r[t + o];
      o = -1;
      for (var s = Array(t + 1); ++o < t; ) s[o] = r[o];
      return (s[t] = n(a)), x6(e, this, s);
    }
  );
}
var w6 = b6;
function S6(e) {
  return function () {
    return e;
  };
}
var C6 = S6,
  $6 = C6,
  X0 = aS,
  _6 = gd,
  P6 = X0
    ? function (e, t) {
        return X0(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: $6(t),
          writable: !0,
        });
      }
    : _6,
  E6 = P6,
  k6 = 800,
  R6 = 16,
  T6 = Date.now;
function O6(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = T6(),
      o = R6 - (r - n);
    if (((n = r), o > 0)) {
      if (++t >= k6) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var M6 = O6,
  I6 = E6,
  A6 = M6,
  N6 = A6(I6),
  j6 = N6,
  D6 = gd,
  L6 = w6,
  F6 = j6;
function z6(e, t) {
  return F6(L6(e, t, D6), e + "");
}
var xS = z6,
  B6 = ml,
  W6 = Ca,
  U6 = zm,
  H6 = Hr;
function V6(e, t, n) {
  if (!H6(n)) return !1;
  var r = typeof t;
  return (r == "number" ? W6(n) && U6(t, n.length) : r == "string" && t in n)
    ? B6(n[t], e)
    : !1;
}
var vd = V6,
  G6 = xS,
  K6 = vd;
function Y6(e) {
  return G6(function (t, n) {
    var r = -1,
      o = n.length,
      i = o > 1 ? n[o - 1] : void 0,
      a = o > 2 ? n[2] : void 0;
    for (
      i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0,
        a && K6(n[0], n[1], a) && ((i = o < 3 ? void 0 : i), (o = 1)),
        t = Object(t);
      ++r < o;

    ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var q6 = Y6,
  Q6 = m6,
  X6 = q6,
  J6 = X6(function (e, t, n) {
    Q6(e, t, n);
  }),
  Z6 = J6;
const eW = rr(Z6);
var tW = "__lodash_hash_undefined__";
function nW(e) {
  return this.__data__.set(e, tW), this;
}
var rW = nW;
function oW(e) {
  return this.__data__.has(e);
}
var iW = oW,
  aW = Dm,
  sW = rW,
  lW = iW;
function ou(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new aW(); ++t < n; ) this.add(e[t]);
}
ou.prototype.add = ou.prototype.push = sW;
ou.prototype.has = lW;
var bS = ou;
function cW(e, t, n, r) {
  for (var o = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < o; )
    if (t(e[i], i, e)) return i;
  return -1;
}
var uW = cW;
function dW(e) {
  return e !== e;
}
var fW = dW;
function pW(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
  return -1;
}
var hW = pW,
  mW = uW,
  gW = fW,
  vW = hW;
function yW(e, t, n) {
  return t === t ? vW(e, t, n) : mW(e, gW, n);
}
var xW = yW,
  bW = xW;
function wW(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && bW(e, t, 0) > -1;
}
var SW = wW;
function CW(e, t, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(t, e[r])) return !0;
  return !1;
}
var $W = CW;
function _W(e, t) {
  return e.has(t);
}
var wS = _W,
  PW = si,
  EW = yr,
  kW = PW(EW, "Set"),
  SS = kW;
function RW() {}
var TW = RW;
function OW(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var Km = OW,
  cf = SS,
  MW = TW,
  IW = Km,
  AW = 1 / 0,
  NW =
    cf && 1 / IW(new cf([, -0]))[1] == AW
      ? function (e) {
          return new cf(e);
        }
      : MW,
  jW = NW,
  DW = bS,
  LW = SW,
  FW = $W,
  zW = wS,
  BW = jW,
  WW = Km,
  UW = 200;
function HW(e, t, n) {
  var r = -1,
    o = LW,
    i = e.length,
    a = !0,
    s = [],
    l = s;
  if (n) (a = !1), (o = FW);
  else if (i >= UW) {
    var c = t ? null : BW(e);
    if (c) return WW(c);
    (a = !1), (o = zW), (l = new DW());
  } else l = t ? [] : s;
  e: for (; ++r < i; ) {
    var u = e[r],
      d = t ? t(u) : u;
    if (((u = n || u !== 0 ? u : 0), a && d === d)) {
      for (var f = l.length; f--; ) if (l[f] === d) continue e;
      t && l.push(d), s.push(u);
    } else o(l, d, n) || (l !== s && l.push(d), s.push(u));
  }
  return s;
}
var VW = HW,
  GW = VW;
function KW(e) {
  return e && e.length ? GW(e) : [];
}
var YW = KW;
const qW = rr(YW),
  QW = (e, t) => {
    const n = [],
      r = [];
    return (
      n.push(t),
      t || n.push(e.locale),
      e.enableFallback && n.push(e.defaultLocale),
      n
        .filter(Boolean)
        .map((o) => o.toString())
        .forEach(function (o) {
          if ((r.includes(o) || r.push(o), !e.enableFallback)) return;
          const i = o.split("-");
          i.length === 3 && r.push(`${i[0]}-${i[1]}`), r.push(i[0]);
        }),
      qW(r)
    );
  };
class XW {
  constructor(t) {
    (this.i18n = t), (this.registry = {}), this.register("default", QW);
  }
  register(t, n) {
    if (typeof n != "function") {
      const r = n;
      n = () => r;
    }
    this.registry[t] = n;
  }
  get(t) {
    let n =
      this.registry[t] ||
      this.registry[this.i18n.locale] ||
      this.registry.default;
    return (
      typeof n == "function" && (n = n(this.i18n, t)),
      n instanceof Array || (n = [n]),
      n
    );
  }
}
const JW = (e, t) => {
  const n = String(e).split("."),
    r = !n[1],
    o = Number(n[0]) == e,
    i = o && n[0].slice(-1),
    a = o && n[0].slice(-2);
  return t
    ? i == 1 && a != 11
      ? "one"
      : i == 2 && a != 12
        ? "two"
        : i == 3 && a != 13
          ? "few"
          : "other"
    : e == 1 && r
      ? "one"
      : "other";
};
function ZW({ pluralizer: e, includeZero: t = !0, ordinal: n = !1 }) {
  return function (r, o) {
    return [t && o === 0 ? "zero" : "", e(o, n)].filter(Boolean);
  };
}
const eU = ZW({ pluralizer: JW, includeZero: !0 });
class tU {
  constructor(t) {
    (this.i18n = t), (this.registry = {}), this.register("default", eU);
  }
  register(t, n) {
    this.registry[t] = n;
  }
  get(t) {
    return (
      this.registry[t] ||
      this.registry[this.i18n.locale] ||
      this.registry.default
    );
  }
}
function nU(e, t, n) {
  var r = -1,
    o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t),
    (n = n > o ? o : n),
    n < 0 && (n += o),
    (o = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0);
  for (var i = Array(o); ++r < o; ) i[r] = e[r + t];
  return i;
}
var rU = nU,
  oU = rU;
function iU(e, t, n) {
  var r = e.length;
  return (n = n === void 0 ? r : n), !t && n >= r ? e : oU(e, t, n);
}
var aU = iU,
  sU = "\\ud800-\\udfff",
  lU = "\\u0300-\\u036f",
  cU = "\\ufe20-\\ufe2f",
  uU = "\\u20d0-\\u20ff",
  dU = lU + cU + uU,
  fU = "\\ufe0e\\ufe0f",
  pU = "\\u200d",
  hU = RegExp("[" + pU + sU + dU + fU + "]");
function mU(e) {
  return hU.test(e);
}
var CS = mU;
function gU(e) {
  return e.split("");
}
var vU = gU,
  $S = "\\ud800-\\udfff",
  yU = "\\u0300-\\u036f",
  xU = "\\ufe20-\\ufe2f",
  bU = "\\u20d0-\\u20ff",
  wU = yU + xU + bU,
  SU = "\\ufe0e\\ufe0f",
  CU = "[" + $S + "]",
  jp = "[" + wU + "]",
  Dp = "\\ud83c[\\udffb-\\udfff]",
  $U = "(?:" + jp + "|" + Dp + ")",
  _S = "[^" + $S + "]",
  PS = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  ES = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  _U = "\\u200d",
  kS = $U + "?",
  RS = "[" + SU + "]?",
  PU = "(?:" + _U + "(?:" + [_S, PS, ES].join("|") + ")" + RS + kS + ")*",
  EU = RS + kS + PU,
  kU = "(?:" + [_S + jp + "?", jp, PS, ES, CU].join("|") + ")",
  RU = RegExp(Dp + "(?=" + Dp + ")|" + kU + EU, "g");
function TU(e) {
  return e.match(RU) || [];
}
var OU = TU,
  MU = vU,
  IU = CS,
  AU = OU;
function NU(e) {
  return IU(e) ? AU(e) : MU(e);
}
var jU = NU,
  DU = aU,
  LU = CS,
  FU = jU,
  zU = wa;
function BU(e) {
  return function (t) {
    t = zU(t);
    var n = LU(t) ? FU(t) : void 0,
      r = n ? n[0] : t.charAt(0),
      o = n ? DU(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var WU = BU,
  UU = WU,
  HU = UU("toUpperCase"),
  VU = HU,
  GU = wa,
  KU = VU;
function YU(e) {
  return KU(GU(e).toLowerCase());
}
var qU = YU;
function QU(e, t, n, r) {
  var o = -1,
    i = e == null ? 0 : e.length;
  for (r && i && (n = e[++o]); ++o < i; ) n = t(n, e[o], o, e);
  return n;
}
var XU = QU;
function JU(e) {
  return function (t) {
    return e == null ? void 0 : e[t];
  };
}
var ZU = JU,
  e8 = ZU,
  t8 = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s",
  },
  n8 = e8(t8),
  r8 = n8,
  o8 = r8,
  i8 = wa,
  a8 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  s8 = "\\u0300-\\u036f",
  l8 = "\\ufe20-\\ufe2f",
  c8 = "\\u20d0-\\u20ff",
  u8 = s8 + l8 + c8,
  d8 = "[" + u8 + "]",
  f8 = RegExp(d8, "g");
function p8(e) {
  return (e = i8(e)), e && e.replace(a8, o8).replace(f8, "");
}
var h8 = p8,
  m8 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function g8(e) {
  return e.match(m8) || [];
}
var v8 = g8,
  y8 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function x8(e) {
  return y8.test(e);
}
var b8 = x8,
  TS = "\\ud800-\\udfff",
  w8 = "\\u0300-\\u036f",
  S8 = "\\ufe20-\\ufe2f",
  C8 = "\\u20d0-\\u20ff",
  $8 = w8 + S8 + C8,
  OS = "\\u2700-\\u27bf",
  MS = "a-z\\xdf-\\xf6\\xf8-\\xff",
  _8 = "\\xac\\xb1\\xd7\\xf7",
  P8 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
  E8 = "\\u2000-\\u206f",
  k8 =
    " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
  IS = "A-Z\\xc0-\\xd6\\xd8-\\xde",
  R8 = "\\ufe0e\\ufe0f",
  AS = _8 + P8 + E8 + k8,
  NS = "['’]",
  J0 = "[" + AS + "]",
  T8 = "[" + $8 + "]",
  jS = "\\d+",
  O8 = "[" + OS + "]",
  DS = "[" + MS + "]",
  LS = "[^" + TS + AS + jS + OS + MS + IS + "]",
  M8 = "\\ud83c[\\udffb-\\udfff]",
  I8 = "(?:" + T8 + "|" + M8 + ")",
  A8 = "[^" + TS + "]",
  FS = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  zS = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  bi = "[" + IS + "]",
  N8 = "\\u200d",
  Z0 = "(?:" + DS + "|" + LS + ")",
  j8 = "(?:" + bi + "|" + LS + ")",
  ey = "(?:" + NS + "(?:d|ll|m|re|s|t|ve))?",
  ty = "(?:" + NS + "(?:D|LL|M|RE|S|T|VE))?",
  BS = I8 + "?",
  WS = "[" + R8 + "]?",
  D8 = "(?:" + N8 + "(?:" + [A8, FS, zS].join("|") + ")" + WS + BS + ")*",
  L8 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
  F8 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
  z8 = WS + BS + D8,
  B8 = "(?:" + [O8, FS, zS].join("|") + ")" + z8,
  W8 = RegExp(
    [
      bi + "?" + DS + "+" + ey + "(?=" + [J0, bi, "$"].join("|") + ")",
      j8 + "+" + ty + "(?=" + [J0, bi + Z0, "$"].join("|") + ")",
      bi + "?" + Z0 + "+" + ey,
      bi + "+" + ty,
      F8,
      L8,
      jS,
      B8,
    ].join("|"),
    "g"
  );
function U8(e) {
  return e.match(W8) || [];
}
var H8 = U8,
  V8 = v8,
  G8 = b8,
  K8 = wa,
  Y8 = H8;
function q8(e, t, n) {
  return (
    (e = K8(e)),
    (t = n ? void 0 : t),
    t === void 0 ? (G8(e) ? Y8(e) : V8(e)) : e.match(t) || []
  );
}
var Q8 = q8,
  X8 = XU,
  J8 = h8,
  Z8 = Q8,
  e7 = "['’]",
  t7 = RegExp(e7, "g");
function n7(e) {
  return function (t) {
    return X8(Z8(J8(t).replace(t7, "")), e, "");
  };
}
var r7 = n7,
  o7 = qU,
  i7 = r7,
  a7 = i7(function (e, t, n) {
    return (t = t.toLowerCase()), e + (n ? o7(t) : t);
  }),
  s7 = a7;
const l7 = rr(s7);
function Vn(e) {
  return e ? Object.keys(e).reduce((t, n) => ((t[l7(n)] = e[n]), t), {}) : {};
}
function Mr(e) {
  return e != null;
}
function c7(e, t, n) {
  let r = [{ scope: t }];
  if ((Mr(n.defaults) && (r = r.concat(n.defaults)), Mr(n.defaultValue))) {
    const o =
      typeof n.defaultValue == "function"
        ? n.defaultValue(e, t, n)
        : n.defaultValue;
    r.push({ message: o }), delete n.defaultValue;
  }
  return r;
}
var u7 = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
  uf = Math.ceil,
  bn = Math.floor,
  Yt = "[BigNumber Error] ",
  ny = Yt + "Number primitive has more than 15 significant digits: ",
  Gn = 1e14,
  pe = 14,
  df = 9007199254740991,
  ff = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  Yr = 1e7,
  Ct = 1e9;
function US(e) {
  var t,
    n,
    r,
    o = (p.prototype = { constructor: p, toString: null, valueOf: null }),
    i = new p(1),
    a = 20,
    s = 4,
    l = -7,
    c = 21,
    u = -1e7,
    d = 1e7,
    f = !1,
    b = 1,
    g = 0,
    x = {
      prefix: "",
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ",",
      decimalSeparator: ".",
      fractionGroupSize: 0,
      fractionGroupSeparator: " ",
      suffix: "",
    },
    P = "0123456789abcdefghijklmnopqrstuvwxyz",
    m = !0;
  function p(h, y) {
    var w,
      T,
      k,
      M,
      D,
      O,
      A,
      j,
      E = this;
    if (!(E instanceof p)) return new p(h, y);
    if (y == null) {
      if (h && h._isBigNumber === !0) {
        (E.s = h.s),
          !h.c || h.e > d
            ? (E.c = E.e = null)
            : h.e < u
              ? (E.c = [(E.e = 0)])
              : ((E.e = h.e), (E.c = h.c.slice()));
        return;
      }
      if ((O = typeof h == "number") && h * 0 == 0) {
        if (((E.s = 1 / h < 0 ? ((h = -h), -1) : 1), h === ~~h)) {
          for (M = 0, D = h; D >= 10; D /= 10, M++);
          M > d ? (E.c = E.e = null) : ((E.e = M), (E.c = [h]));
          return;
        }
        j = String(h);
      } else {
        if (!u7.test((j = String(h)))) return r(E, j, O);
        E.s = j.charCodeAt(0) == 45 ? ((j = j.slice(1)), -1) : 1;
      }
      (M = j.indexOf(".")) > -1 && (j = j.replace(".", "")),
        (D = j.search(/e/i)) > 0
          ? (M < 0 && (M = D), (M += +j.slice(D + 1)), (j = j.substring(0, D)))
          : M < 0 && (M = j.length);
    } else {
      if ((qe(y, 2, P.length, "Base"), y == 10 && m))
        return (E = new p(h)), C(E, a + E.e + 1, s);
      if (((j = String(h)), (O = typeof h == "number"))) {
        if (h * 0 != 0) return r(E, j, O, y);
        if (
          ((E.s = 1 / h < 0 ? ((j = j.slice(1)), -1) : 1),
          p.DEBUG && j.replace(/^0\.0*|\./, "").length > 15)
        )
          throw Error(ny + h);
      } else E.s = j.charCodeAt(0) === 45 ? ((j = j.slice(1)), -1) : 1;
      for (w = P.slice(0, y), M = D = 0, A = j.length; D < A; D++)
        if (w.indexOf((T = j.charAt(D))) < 0) {
          if (T == ".") {
            if (D > M) {
              M = A;
              continue;
            }
          } else if (
            !k &&
            ((j == j.toUpperCase() && (j = j.toLowerCase())) ||
              (j == j.toLowerCase() && (j = j.toUpperCase())))
          ) {
            (k = !0), (D = -1), (M = 0);
            continue;
          }
          return r(E, String(h), O, y);
        }
      (O = !1),
        (j = n(j, y, 10, E.s)),
        (M = j.indexOf(".")) > -1 ? (j = j.replace(".", "")) : (M = j.length);
    }
    for (D = 0; j.charCodeAt(D) === 48; D++);
    for (A = j.length; j.charCodeAt(--A) === 48; );
    if ((j = j.slice(D, ++A))) {
      if (((A -= D), O && p.DEBUG && A > 15 && (h > df || h !== bn(h))))
        throw Error(ny + E.s * h);
      if ((M = M - D - 1) > d) E.c = E.e = null;
      else if (M < u) E.c = [(E.e = 0)];
      else {
        if (
          ((E.e = M), (E.c = []), (D = (M + 1) % pe), M < 0 && (D += pe), D < A)
        ) {
          for (D && E.c.push(+j.slice(0, D)), A -= pe; D < A; )
            E.c.push(+j.slice(D, (D += pe)));
          D = pe - (j = j.slice(D)).length;
        } else D -= A;
        for (; D--; j += "0");
        E.c.push(+j);
      }
    } else E.c = [(E.e = 0)];
  }
  (p.clone = US),
    (p.ROUND_UP = 0),
    (p.ROUND_DOWN = 1),
    (p.ROUND_CEIL = 2),
    (p.ROUND_FLOOR = 3),
    (p.ROUND_HALF_UP = 4),
    (p.ROUND_HALF_DOWN = 5),
    (p.ROUND_HALF_EVEN = 6),
    (p.ROUND_HALF_CEIL = 7),
    (p.ROUND_HALF_FLOOR = 8),
    (p.EUCLID = 9),
    (p.config = p.set =
      function (h) {
        var y, w;
        if (h != null)
          if (typeof h == "object") {
            if (
              (h.hasOwnProperty((y = "DECIMAL_PLACES")) &&
                ((w = h[y]), qe(w, 0, Ct, y), (a = w)),
              h.hasOwnProperty((y = "ROUNDING_MODE")) &&
                ((w = h[y]), qe(w, 0, 8, y), (s = w)),
              h.hasOwnProperty((y = "EXPONENTIAL_AT")) &&
                ((w = h[y]),
                w && w.pop
                  ? (qe(w[0], -Ct, 0, y),
                    qe(w[1], 0, Ct, y),
                    (l = w[0]),
                    (c = w[1]))
                  : (qe(w, -Ct, Ct, y), (l = -(c = w < 0 ? -w : w)))),
              h.hasOwnProperty((y = "RANGE")))
            )
              if (((w = h[y]), w && w.pop))
                qe(w[0], -Ct, -1, y),
                  qe(w[1], 1, Ct, y),
                  (u = w[0]),
                  (d = w[1]);
              else if ((qe(w, -Ct, Ct, y), w)) u = -(d = w < 0 ? -w : w);
              else throw Error(Yt + y + " cannot be zero: " + w);
            if (h.hasOwnProperty((y = "CRYPTO")))
              if (((w = h[y]), w === !!w))
                if (w)
                  if (
                    typeof crypto < "u" &&
                    crypto &&
                    (crypto.getRandomValues || crypto.randomBytes)
                  )
                    f = w;
                  else throw ((f = !w), Error(Yt + "crypto unavailable"));
                else f = w;
              else throw Error(Yt + y + " not true or false: " + w);
            if (
              (h.hasOwnProperty((y = "MODULO_MODE")) &&
                ((w = h[y]), qe(w, 0, 9, y), (b = w)),
              h.hasOwnProperty((y = "POW_PRECISION")) &&
                ((w = h[y]), qe(w, 0, Ct, y), (g = w)),
              h.hasOwnProperty((y = "FORMAT")))
            )
              if (((w = h[y]), typeof w == "object")) x = w;
              else throw Error(Yt + y + " not an object: " + w);
            if (h.hasOwnProperty((y = "ALPHABET")))
              if (
                ((w = h[y]),
                typeof w == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(w))
              )
                (m = w.slice(0, 10) == "0123456789"), (P = w);
              else throw Error(Yt + y + " invalid: " + w);
          } else throw Error(Yt + "Object expected: " + h);
        return {
          DECIMAL_PLACES: a,
          ROUNDING_MODE: s,
          EXPONENTIAL_AT: [l, c],
          RANGE: [u, d],
          CRYPTO: f,
          MODULO_MODE: b,
          POW_PRECISION: g,
          FORMAT: x,
          ALPHABET: P,
        };
      }),
    (p.isBigNumber = function (h) {
      if (!h || h._isBigNumber !== !0) return !1;
      if (!p.DEBUG) return !0;
      var y,
        w,
        T = h.c,
        k = h.e,
        M = h.s;
      e: if ({}.toString.call(T) == "[object Array]") {
        if ((M === 1 || M === -1) && k >= -Ct && k <= Ct && k === bn(k)) {
          if (T[0] === 0) {
            if (k === 0 && T.length === 1) return !0;
            break e;
          }
          if (
            ((y = (k + 1) % pe), y < 1 && (y += pe), String(T[0]).length == y)
          ) {
            for (y = 0; y < T.length; y++)
              if (((w = T[y]), w < 0 || w >= Gn || w !== bn(w))) break e;
            if (w !== 0) return !0;
          }
        }
      } else if (
        T === null &&
        k === null &&
        (M === null || M === 1 || M === -1)
      )
        return !0;
      throw Error(Yt + "Invalid BigNumber: " + h);
    }),
    (p.maximum = p.max =
      function () {
        return _(arguments, -1);
      }),
    (p.minimum = p.min =
      function () {
        return _(arguments, 1);
      }),
    (p.random = (function () {
      var h = 9007199254740992,
        y =
          (Math.random() * h) & 2097151
            ? function () {
                return bn(Math.random() * h);
              }
            : function () {
                return (
                  ((Math.random() * 1073741824) | 0) * 8388608 +
                  ((Math.random() * 8388608) | 0)
                );
              };
      return function (w) {
        var T,
          k,
          M,
          D,
          O,
          A = 0,
          j = [],
          E = new p(i);
        if ((w == null ? (w = a) : qe(w, 0, Ct), (D = uf(w / pe)), f))
          if (crypto.getRandomValues) {
            for (T = crypto.getRandomValues(new Uint32Array((D *= 2))); A < D; )
              (O = T[A] * 131072 + (T[A + 1] >>> 11)),
                O >= 9e15
                  ? ((k = crypto.getRandomValues(new Uint32Array(2))),
                    (T[A] = k[0]),
                    (T[A + 1] = k[1]))
                  : (j.push(O % 1e14), (A += 2));
            A = D / 2;
          } else if (crypto.randomBytes) {
            for (T = crypto.randomBytes((D *= 7)); A < D; )
              (O =
                (T[A] & 31) * 281474976710656 +
                T[A + 1] * 1099511627776 +
                T[A + 2] * 4294967296 +
                T[A + 3] * 16777216 +
                (T[A + 4] << 16) +
                (T[A + 5] << 8) +
                T[A + 6]),
                O >= 9e15
                  ? crypto.randomBytes(7).copy(T, A)
                  : (j.push(O % 1e14), (A += 7));
            A = D / 7;
          } else throw ((f = !1), Error(Yt + "crypto unavailable"));
        if (!f) for (; A < D; ) (O = y()), O < 9e15 && (j[A++] = O % 1e14);
        for (
          D = j[--A],
            w %= pe,
            D && w && ((O = ff[pe - w]), (j[A] = bn(D / O) * O));
          j[A] === 0;
          j.pop(), A--
        );
        if (A < 0) j = [(M = 0)];
        else {
          for (M = -1; j[0] === 0; j.splice(0, 1), M -= pe);
          for (A = 1, O = j[0]; O >= 10; O /= 10, A++);
          A < pe && (M -= pe - A);
        }
        return (E.e = M), (E.c = j), E;
      };
    })()),
    (p.sum = function () {
      for (var h = 1, y = arguments, w = new p(y[0]); h < y.length; )
        w = w.plus(y[h++]);
      return w;
    }),
    (n = (function () {
      var h = "0123456789";
      function y(w, T, k, M) {
        for (var D, O = [0], A, j = 0, E = w.length; j < E; ) {
          for (A = O.length; A--; O[A] *= T);
          for (O[0] += M.indexOf(w.charAt(j++)), D = 0; D < O.length; D++)
            O[D] > k - 1 &&
              (O[D + 1] == null && (O[D + 1] = 0),
              (O[D + 1] += (O[D] / k) | 0),
              (O[D] %= k));
        }
        return O.reverse();
      }
      return function (w, T, k, M, D) {
        var O,
          A,
          j,
          E,
          L,
          B,
          U,
          K,
          ce = w.indexOf("."),
          Z = a,
          Y = s;
        for (
          ce >= 0 &&
            ((E = g),
            (g = 0),
            (w = w.replace(".", "")),
            (K = new p(T)),
            (B = K.pow(w.length - ce)),
            (g = E),
            (K.c = y(Cr(xn(B.c), B.e, "0"), 10, k, h)),
            (K.e = K.c.length)),
            U = y(w, T, k, D ? ((O = P), h) : ((O = h), P)),
            j = E = U.length;
          U[--E] == 0;
          U.pop()
        );
        if (!U[0]) return O.charAt(0);
        if (
          (ce < 0
            ? --j
            : ((B.c = U),
              (B.e = j),
              (B.s = M),
              (B = t(B, K, Z, Y, k)),
              (U = B.c),
              (L = B.r),
              (j = B.e)),
          (A = j + Z + 1),
          (ce = U[A]),
          (E = k / 2),
          (L = L || A < 0 || U[A + 1] != null),
          (L =
            Y < 4
              ? (ce != null || L) && (Y == 0 || Y == (B.s < 0 ? 3 : 2))
              : ce > E ||
                (ce == E &&
                  (Y == 4 ||
                    L ||
                    (Y == 6 && U[A - 1] & 1) ||
                    Y == (B.s < 0 ? 8 : 7)))),
          A < 1 || !U[0])
        )
          w = L ? Cr(O.charAt(1), -Z, O.charAt(0)) : O.charAt(0);
        else {
          if (((U.length = A), L))
            for (--k; ++U[--A] > k; )
              (U[A] = 0), A || (++j, (U = [1].concat(U)));
          for (E = U.length; !U[--E]; );
          for (ce = 0, w = ""; ce <= E; w += O.charAt(U[ce++]));
          w = Cr(w, j, O.charAt(0));
        }
        return w;
      };
    })()),
    (t = (function () {
      function h(T, k, M) {
        var D,
          O,
          A,
          j,
          E = 0,
          L = T.length,
          B = k % Yr,
          U = (k / Yr) | 0;
        for (T = T.slice(); L--; )
          (A = T[L] % Yr),
            (j = (T[L] / Yr) | 0),
            (D = U * A + j * B),
            (O = B * A + (D % Yr) * Yr + E),
            (E = ((O / M) | 0) + ((D / Yr) | 0) + U * j),
            (T[L] = O % M);
        return E && (T = [E].concat(T)), T;
      }
      function y(T, k, M, D) {
        var O, A;
        if (M != D) A = M > D ? 1 : -1;
        else
          for (O = A = 0; O < M; O++)
            if (T[O] != k[O]) {
              A = T[O] > k[O] ? 1 : -1;
              break;
            }
        return A;
      }
      function w(T, k, M, D) {
        for (var O = 0; M--; )
          (T[M] -= O), (O = T[M] < k[M] ? 1 : 0), (T[M] = O * D + T[M] - k[M]);
        for (; !T[0] && T.length > 1; T.splice(0, 1));
      }
      return function (T, k, M, D, O) {
        var A,
          j,
          E,
          L,
          B,
          U,
          K,
          ce,
          Z,
          Y,
          J,
          fe,
          Ie,
          _e,
          at,
          he,
          st,
          ae = T.s == k.s ? 1 : -1,
          de = T.c,
          re = k.c;
        if (!de || !de[0] || !re || !re[0])
          return new p(
            !T.s || !k.s || (de ? re && de[0] == re[0] : !re)
              ? NaN
              : (de && de[0] == 0) || !re
                ? ae * 0
                : ae / 0
          );
        for (
          ce = new p(ae),
            Z = ce.c = [],
            j = T.e - k.e,
            ae = M + j + 1,
            O ||
              ((O = Gn),
              (j = wn(T.e / pe) - wn(k.e / pe)),
              (ae = (ae / pe) | 0)),
            E = 0;
          re[E] == (de[E] || 0);
          E++
        );
        if ((re[E] > (de[E] || 0) && j--, ae < 0)) Z.push(1), (L = !0);
        else {
          for (
            _e = de.length,
              he = re.length,
              E = 0,
              ae += 2,
              B = bn(O / (re[0] + 1)),
              B > 1 &&
                ((re = h(re, B, O)),
                (de = h(de, B, O)),
                (he = re.length),
                (_e = de.length)),
              Ie = he,
              Y = de.slice(0, he),
              J = Y.length;
            J < he;
            Y[J++] = 0
          );
          (st = re.slice()),
            (st = [0].concat(st)),
            (at = re[0]),
            re[1] >= O / 2 && at++;
          do {
            if (((B = 0), (A = y(re, Y, he, J)), A < 0)) {
              if (
                ((fe = Y[0]),
                he != J && (fe = fe * O + (Y[1] || 0)),
                (B = bn(fe / at)),
                B > 1)
              )
                for (
                  B >= O && (B = O - 1),
                    U = h(re, B, O),
                    K = U.length,
                    J = Y.length;
                  y(U, Y, K, J) == 1;

                )
                  B--, w(U, he < K ? st : re, K, O), (K = U.length), (A = 1);
              else B == 0 && (A = B = 1), (U = re.slice()), (K = U.length);
              if (
                (K < J && (U = [0].concat(U)),
                w(Y, U, J, O),
                (J = Y.length),
                A == -1)
              )
                for (; y(re, Y, he, J) < 1; )
                  B++, w(Y, he < J ? st : re, J, O), (J = Y.length);
            } else A === 0 && (B++, (Y = [0]));
            (Z[E++] = B),
              Y[0] ? (Y[J++] = de[Ie] || 0) : ((Y = [de[Ie]]), (J = 1));
          } while ((Ie++ < _e || Y[0] != null) && ae--);
          (L = Y[0] != null), Z[0] || Z.splice(0, 1);
        }
        if (O == Gn) {
          for (E = 1, ae = Z[0]; ae >= 10; ae /= 10, E++);
          C(ce, M + (ce.e = E + j * pe - 1) + 1, D, L);
        } else (ce.e = j), (ce.r = +L);
        return ce;
      };
    })());
  function v(h, y, w, T) {
    var k, M, D, O, A;
    if ((w == null ? (w = s) : qe(w, 0, 8), !h.c)) return h.toString();
    if (((k = h.c[0]), (D = h.e), y == null))
      (A = xn(h.c)),
        (A =
          T == 1 || (T == 2 && (D <= l || D >= c)) ? Jl(A, D) : Cr(A, D, "0"));
    else if (
      ((h = C(new p(h), y, w)),
      (M = h.e),
      (A = xn(h.c)),
      (O = A.length),
      T == 1 || (T == 2 && (y <= M || M <= l)))
    ) {
      for (; O < y; A += "0", O++);
      A = Jl(A, M);
    } else if (((y -= D), (A = Cr(A, M, "0")), M + 1 > O)) {
      if (--y > 0) for (A += "."; y--; A += "0");
    } else if (((y += M - O), y > 0))
      for (M + 1 == O && (A += "."); y--; A += "0");
    return h.s < 0 && k ? "-" + A : A;
  }
  function _(h, y) {
    for (var w, T, k = 1, M = new p(h[0]); k < h.length; k++)
      (T = new p(h[k])),
        (!T.s || (w = Eo(M, T)) === y || (w === 0 && M.s === y)) && (M = T);
    return M;
  }
  function N(h, y, w) {
    for (var T = 1, k = y.length; !y[--k]; y.pop());
    for (k = y[0]; k >= 10; k /= 10, T++);
    return (
      (w = T + w * pe - 1) > d
        ? (h.c = h.e = null)
        : w < u
          ? (h.c = [(h.e = 0)])
          : ((h.e = w), (h.c = y)),
      h
    );
  }
  r = (function () {
    var h = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      y = /^([^.]+)\.$/,
      w = /^\.([^.]+)$/,
      T = /^-?(Infinity|NaN)$/,
      k = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function (M, D, O, A) {
      var j,
        E = O ? D : D.replace(k, "");
      if (T.test(E)) M.s = isNaN(E) ? null : E < 0 ? -1 : 1;
      else {
        if (
          !O &&
          ((E = E.replace(h, function (L, B, U) {
            return (
              (j = (U = U.toLowerCase()) == "x" ? 16 : U == "b" ? 2 : 8),
              !A || A == j ? B : L
            );
          })),
          A && ((j = A), (E = E.replace(y, "$1").replace(w, "0.$1"))),
          D != E)
        )
          return new p(E, j);
        if (p.DEBUG)
          throw Error(Yt + "Not a" + (A ? " base " + A : "") + " number: " + D);
        M.s = null;
      }
      M.c = M.e = null;
    };
  })();
  function C(h, y, w, T) {
    var k,
      M,
      D,
      O,
      A,
      j,
      E,
      L = h.c,
      B = ff;
    if (L) {
      e: {
        for (k = 1, O = L[0]; O >= 10; O /= 10, k++);
        if (((M = y - k), M < 0))
          (M += pe),
            (D = y),
            (A = L[(j = 0)]),
            (E = bn((A / B[k - D - 1]) % 10));
        else if (((j = uf((M + 1) / pe)), j >= L.length))
          if (T) {
            for (; L.length <= j; L.push(0));
            (A = E = 0), (k = 1), (M %= pe), (D = M - pe + 1);
          } else break e;
        else {
          for (A = O = L[j], k = 1; O >= 10; O /= 10, k++);
          (M %= pe),
            (D = M - pe + k),
            (E = D < 0 ? 0 : bn((A / B[k - D - 1]) % 10));
        }
        if (
          ((T =
            T || y < 0 || L[j + 1] != null || (D < 0 ? A : A % B[k - D - 1])),
          (T =
            w < 4
              ? (E || T) && (w == 0 || w == (h.s < 0 ? 3 : 2))
              : E > 5 ||
                (E == 5 &&
                  (w == 4 ||
                    T ||
                    (w == 6 &&
                      (M > 0 ? (D > 0 ? A / B[k - D] : 0) : L[j - 1]) % 10 &
                        1) ||
                    w == (h.s < 0 ? 8 : 7)))),
          y < 1 || !L[0])
        )
          return (
            (L.length = 0),
            T
              ? ((y -= h.e + 1),
                (L[0] = B[(pe - (y % pe)) % pe]),
                (h.e = -y || 0))
              : (L[0] = h.e = 0),
            h
          );
        if (
          (M == 0
            ? ((L.length = j), (O = 1), j--)
            : ((L.length = j + 1),
              (O = B[pe - M]),
              (L[j] = D > 0 ? bn((A / B[k - D]) % B[D]) * O : 0)),
          T)
        )
          for (;;)
            if (j == 0) {
              for (M = 1, D = L[0]; D >= 10; D /= 10, M++);
              for (D = L[0] += O, O = 1; D >= 10; D /= 10, O++);
              M != O && (h.e++, L[0] == Gn && (L[0] = 1));
              break;
            } else {
              if (((L[j] += O), L[j] != Gn)) break;
              (L[j--] = 0), (O = 1);
            }
        for (M = L.length; L[--M] === 0; L.pop());
      }
      h.e > d ? (h.c = h.e = null) : h.e < u && (h.c = [(h.e = 0)]);
    }
    return h;
  }
  function R(h) {
    var y,
      w = h.e;
    return w === null
      ? h.toString()
      : ((y = xn(h.c)),
        (y = w <= l || w >= c ? Jl(y, w) : Cr(y, w, "0")),
        h.s < 0 ? "-" + y : y);
  }
  return (
    (o.absoluteValue = o.abs =
      function () {
        var h = new p(this);
        return h.s < 0 && (h.s = 1), h;
      }),
    (o.comparedTo = function (h, y) {
      return Eo(this, new p(h, y));
    }),
    (o.decimalPlaces = o.dp =
      function (h, y) {
        var w,
          T,
          k,
          M = this;
        if (h != null)
          return (
            qe(h, 0, Ct),
            y == null ? (y = s) : qe(y, 0, 8),
            C(new p(M), h + M.e + 1, y)
          );
        if (!(w = M.c)) return null;
        if (((T = ((k = w.length - 1) - wn(this.e / pe)) * pe), (k = w[k])))
          for (; k % 10 == 0; k /= 10, T--);
        return T < 0 && (T = 0), T;
      }),
    (o.dividedBy = o.div =
      function (h, y) {
        return t(this, new p(h, y), a, s);
      }),
    (o.dividedToIntegerBy = o.idiv =
      function (h, y) {
        return t(this, new p(h, y), 0, 1);
      }),
    (o.exponentiatedBy = o.pow =
      function (h, y) {
        var w,
          T,
          k,
          M,
          D,
          O,
          A,
          j,
          E,
          L = this;
        if (((h = new p(h)), h.c && !h.isInteger()))
          throw Error(Yt + "Exponent not an integer: " + R(h));
        if (
          (y != null && (y = new p(y)),
          (O = h.e > 14),
          !L.c ||
            !L.c[0] ||
            (L.c[0] == 1 && !L.e && L.c.length == 1) ||
            !h.c ||
            !h.c[0])
        )
          return (
            (E = new p(Math.pow(+R(L), O ? h.s * (2 - Xl(h)) : +R(h)))),
            y ? E.mod(y) : E
          );
        if (((A = h.s < 0), y)) {
          if (y.c ? !y.c[0] : !y.s) return new p(NaN);
          (T = !A && L.isInteger() && y.isInteger()), T && (L = L.mod(y));
        } else {
          if (
            h.e > 9 &&
            (L.e > 0 ||
              L.e < -1 ||
              (L.e == 0
                ? L.c[0] > 1 || (O && L.c[1] >= 24e7)
                : L.c[0] < 8e13 || (O && L.c[0] <= 9999975e7)))
          )
            return (
              (M = L.s < 0 && Xl(h) ? -0 : 0),
              L.e > -1 && (M = 1 / M),
              new p(A ? 1 / M : M)
            );
          g && (M = uf(g / pe + 2));
        }
        for (
          O
            ? ((w = new p(0.5)), A && (h.s = 1), (j = Xl(h)))
            : ((k = Math.abs(+R(h))), (j = k % 2)),
            E = new p(i);
          ;

        ) {
          if (j) {
            if (((E = E.times(L)), !E.c)) break;
            M ? E.c.length > M && (E.c.length = M) : T && (E = E.mod(y));
          }
          if (k) {
            if (((k = bn(k / 2)), k === 0)) break;
            j = k % 2;
          } else if (((h = h.times(w)), C(h, h.e + 1, 1), h.e > 14)) j = Xl(h);
          else {
            if (((k = +R(h)), k === 0)) break;
            j = k % 2;
          }
          (L = L.times(L)),
            M ? L.c && L.c.length > M && (L.c.length = M) : T && (L = L.mod(y));
        }
        return T
          ? E
          : (A && (E = i.div(E)), y ? E.mod(y) : M ? C(E, g, s, D) : E);
      }),
    (o.integerValue = function (h) {
      var y = new p(this);
      return h == null ? (h = s) : qe(h, 0, 8), C(y, y.e + 1, h);
    }),
    (o.isEqualTo = o.eq =
      function (h, y) {
        return Eo(this, new p(h, y)) === 0;
      }),
    (o.isFinite = function () {
      return !!this.c;
    }),
    (o.isGreaterThan = o.gt =
      function (h, y) {
        return Eo(this, new p(h, y)) > 0;
      }),
    (o.isGreaterThanOrEqualTo = o.gte =
      function (h, y) {
        return (y = Eo(this, new p(h, y))) === 1 || y === 0;
      }),
    (o.isInteger = function () {
      return !!this.c && wn(this.e / pe) > this.c.length - 2;
    }),
    (o.isLessThan = o.lt =
      function (h, y) {
        return Eo(this, new p(h, y)) < 0;
      }),
    (o.isLessThanOrEqualTo = o.lte =
      function (h, y) {
        return (y = Eo(this, new p(h, y))) === -1 || y === 0;
      }),
    (o.isNaN = function () {
      return !this.s;
    }),
    (o.isNegative = function () {
      return this.s < 0;
    }),
    (o.isPositive = function () {
      return this.s > 0;
    }),
    (o.isZero = function () {
      return !!this.c && this.c[0] == 0;
    }),
    (o.minus = function (h, y) {
      var w,
        T,
        k,
        M,
        D = this,
        O = D.s;
      if (((h = new p(h, y)), (y = h.s), !O || !y)) return new p(NaN);
      if (O != y) return (h.s = -y), D.plus(h);
      var A = D.e / pe,
        j = h.e / pe,
        E = D.c,
        L = h.c;
      if (!A || !j) {
        if (!E || !L) return E ? ((h.s = -y), h) : new p(L ? D : NaN);
        if (!E[0] || !L[0])
          return L[0] ? ((h.s = -y), h) : new p(E[0] ? D : s == 3 ? -0 : 0);
      }
      if (((A = wn(A)), (j = wn(j)), (E = E.slice()), (O = A - j))) {
        for (
          (M = O < 0) ? ((O = -O), (k = E)) : ((j = A), (k = L)),
            k.reverse(),
            y = O;
          y--;
          k.push(0)
        );
        k.reverse();
      } else
        for (
          T = (M = (O = E.length) < (y = L.length)) ? O : y, O = y = 0;
          y < T;
          y++
        )
          if (E[y] != L[y]) {
            M = E[y] < L[y];
            break;
          }
      if (
        (M && ((k = E), (E = L), (L = k), (h.s = -h.s)),
        (y = (T = L.length) - (w = E.length)),
        y > 0)
      )
        for (; y--; E[w++] = 0);
      for (y = Gn - 1; T > O; ) {
        if (E[--T] < L[T]) {
          for (w = T; w && !E[--w]; E[w] = y);
          --E[w], (E[T] += Gn);
        }
        E[T] -= L[T];
      }
      for (; E[0] == 0; E.splice(0, 1), --j);
      return E[0]
        ? N(h, E, j)
        : ((h.s = s == 3 ? -1 : 1), (h.c = [(h.e = 0)]), h);
    }),
    (o.modulo = o.mod =
      function (h, y) {
        var w,
          T,
          k = this;
        return (
          (h = new p(h, y)),
          !k.c || !h.s || (h.c && !h.c[0])
            ? new p(NaN)
            : !h.c || (k.c && !k.c[0])
              ? new p(k)
              : (b == 9
                  ? ((T = h.s),
                    (h.s = 1),
                    (w = t(k, h, 0, 3)),
                    (h.s = T),
                    (w.s *= T))
                  : (w = t(k, h, 0, b)),
                (h = k.minus(w.times(h))),
                !h.c[0] && b == 1 && (h.s = k.s),
                h)
        );
      }),
    (o.multipliedBy = o.times =
      function (h, y) {
        var w,
          T,
          k,
          M,
          D,
          O,
          A,
          j,
          E,
          L,
          B,
          U,
          K,
          ce,
          Z,
          Y = this,
          J = Y.c,
          fe = (h = new p(h, y)).c;
        if (!J || !fe || !J[0] || !fe[0])
          return (
            !Y.s || !h.s || (J && !J[0] && !fe) || (fe && !fe[0] && !J)
              ? (h.c = h.e = h.s = null)
              : ((h.s *= Y.s),
                !J || !fe ? (h.c = h.e = null) : ((h.c = [0]), (h.e = 0))),
            h
          );
        for (
          T = wn(Y.e / pe) + wn(h.e / pe),
            h.s *= Y.s,
            A = J.length,
            L = fe.length,
            A < L && ((K = J), (J = fe), (fe = K), (k = A), (A = L), (L = k)),
            k = A + L,
            K = [];
          k--;
          K.push(0)
        );
        for (ce = Gn, Z = Yr, k = L; --k >= 0; ) {
          for (
            w = 0, B = fe[k] % Z, U = (fe[k] / Z) | 0, D = A, M = k + D;
            M > k;

          )
            (j = J[--D] % Z),
              (E = (J[D] / Z) | 0),
              (O = U * j + E * B),
              (j = B * j + (O % Z) * Z + K[M] + w),
              (w = ((j / ce) | 0) + ((O / Z) | 0) + U * E),
              (K[M--] = j % ce);
          K[M] = w;
        }
        return w ? ++T : K.splice(0, 1), N(h, K, T);
      }),
    (o.negated = function () {
      var h = new p(this);
      return (h.s = -h.s || null), h;
    }),
    (o.plus = function (h, y) {
      var w,
        T = this,
        k = T.s;
      if (((h = new p(h, y)), (y = h.s), !k || !y)) return new p(NaN);
      if (k != y) return (h.s = -y), T.minus(h);
      var M = T.e / pe,
        D = h.e / pe,
        O = T.c,
        A = h.c;
      if (!M || !D) {
        if (!O || !A) return new p(k / 0);
        if (!O[0] || !A[0]) return A[0] ? h : new p(O[0] ? T : k * 0);
      }
      if (((M = wn(M)), (D = wn(D)), (O = O.slice()), (k = M - D))) {
        for (
          k > 0 ? ((D = M), (w = A)) : ((k = -k), (w = O)), w.reverse();
          k--;
          w.push(0)
        );
        w.reverse();
      }
      for (
        k = O.length,
          y = A.length,
          k - y < 0 && ((w = A), (A = O), (O = w), (y = k)),
          k = 0;
        y;

      )
        (k = ((O[--y] = O[y] + A[y] + k) / Gn) | 0),
          (O[y] = Gn === O[y] ? 0 : O[y] % Gn);
      return k && ((O = [k].concat(O)), ++D), N(h, O, D);
    }),
    (o.precision = o.sd =
      function (h, y) {
        var w,
          T,
          k,
          M = this;
        if (h != null && h !== !!h)
          return (
            qe(h, 1, Ct), y == null ? (y = s) : qe(y, 0, 8), C(new p(M), h, y)
          );
        if (!(w = M.c)) return null;
        if (((k = w.length - 1), (T = k * pe + 1), (k = w[k]))) {
          for (; k % 10 == 0; k /= 10, T--);
          for (k = w[0]; k >= 10; k /= 10, T++);
        }
        return h && M.e + 1 > T && (T = M.e + 1), T;
      }),
    (o.shiftedBy = function (h) {
      return qe(h, -df, df), this.times("1e" + h);
    }),
    (o.squareRoot = o.sqrt =
      function () {
        var h,
          y,
          w,
          T,
          k,
          M = this,
          D = M.c,
          O = M.s,
          A = M.e,
          j = a + 4,
          E = new p("0.5");
        if (O !== 1 || !D || !D[0])
          return new p(!O || (O < 0 && (!D || D[0])) ? NaN : D ? M : 1 / 0);
        if (
          ((O = Math.sqrt(+R(M))),
          O == 0 || O == 1 / 0
            ? ((y = xn(D)),
              (y.length + A) % 2 == 0 && (y += "0"),
              (O = Math.sqrt(+y)),
              (A = wn((A + 1) / 2) - (A < 0 || A % 2)),
              O == 1 / 0
                ? (y = "5e" + A)
                : ((y = O.toExponential()),
                  (y = y.slice(0, y.indexOf("e") + 1) + A)),
              (w = new p(y)))
            : (w = new p(O + "")),
          w.c[0])
        ) {
          for (A = w.e, O = A + j, O < 3 && (O = 0); ; )
            if (
              ((k = w),
              (w = E.times(k.plus(t(M, k, j, 1)))),
              xn(k.c).slice(0, O) === (y = xn(w.c)).slice(0, O))
            )
              if (
                (w.e < A && --O,
                (y = y.slice(O - 3, O + 1)),
                y == "9999" || (!T && y == "4999"))
              ) {
                if (!T && (C(k, k.e + a + 2, 0), k.times(k).eq(M))) {
                  w = k;
                  break;
                }
                (j += 4), (O += 4), (T = 1);
              } else {
                (!+y || (!+y.slice(1) && y.charAt(0) == "5")) &&
                  (C(w, w.e + a + 2, 1), (h = !w.times(w).eq(M)));
                break;
              }
        }
        return C(w, w.e + a + 1, s, h);
      }),
    (o.toExponential = function (h, y) {
      return h != null && (qe(h, 0, Ct), h++), v(this, h, y, 1);
    }),
    (o.toFixed = function (h, y) {
      return h != null && (qe(h, 0, Ct), (h = h + this.e + 1)), v(this, h, y);
    }),
    (o.toFormat = function (h, y, w) {
      var T,
        k = this;
      if (w == null)
        h != null && y && typeof y == "object"
          ? ((w = y), (y = null))
          : h && typeof h == "object"
            ? ((w = h), (h = y = null))
            : (w = x);
      else if (typeof w != "object")
        throw Error(Yt + "Argument not an object: " + w);
      if (((T = k.toFixed(h, y)), k.c)) {
        var M,
          D = T.split("."),
          O = +w.groupSize,
          A = +w.secondaryGroupSize,
          j = w.groupSeparator || "",
          E = D[0],
          L = D[1],
          B = k.s < 0,
          U = B ? E.slice(1) : E,
          K = U.length;
        if ((A && ((M = O), (O = A), (A = M), (K -= M)), O > 0 && K > 0)) {
          for (M = K % O || O, E = U.substr(0, M); M < K; M += O)
            E += j + U.substr(M, O);
          A > 0 && (E += j + U.slice(M)), B && (E = "-" + E);
        }
        T = L
          ? E +
            (w.decimalSeparator || "") +
            ((A = +w.fractionGroupSize)
              ? L.replace(
                  new RegExp("\\d{" + A + "}\\B", "g"),
                  "$&" + (w.fractionGroupSeparator || "")
                )
              : L)
          : E;
      }
      return (w.prefix || "") + T + (w.suffix || "");
    }),
    (o.toFraction = function (h) {
      var y,
        w,
        T,
        k,
        M,
        D,
        O,
        A,
        j,
        E,
        L,
        B,
        U = this,
        K = U.c;
      if (
        h != null &&
        ((O = new p(h)), (!O.isInteger() && (O.c || O.s !== 1)) || O.lt(i))
      )
        throw Error(
          Yt +
            "Argument " +
            (O.isInteger() ? "out of range: " : "not an integer: ") +
            R(O)
        );
      if (!K) return new p(U);
      for (
        y = new p(i),
          j = w = new p(i),
          T = A = new p(i),
          B = xn(K),
          M = y.e = B.length - U.e - 1,
          y.c[0] = ff[(D = M % pe) < 0 ? pe + D : D],
          h = !h || O.comparedTo(y) > 0 ? (M > 0 ? y : j) : O,
          D = d,
          d = 1 / 0,
          O = new p(B),
          A.c[0] = 0;
        (E = t(O, y, 0, 1)), (k = w.plus(E.times(T))), k.comparedTo(h) != 1;

      )
        (w = T),
          (T = k),
          (j = A.plus(E.times((k = j)))),
          (A = k),
          (y = O.minus(E.times((k = y)))),
          (O = k);
      return (
        (k = t(h.minus(w), T, 0, 1)),
        (A = A.plus(k.times(j))),
        (w = w.plus(k.times(T))),
        (A.s = j.s = U.s),
        (M = M * 2),
        (L =
          t(j, T, M, s)
            .minus(U)
            .abs()
            .comparedTo(t(A, w, M, s).minus(U).abs()) < 1
            ? [j, T]
            : [A, w]),
        (d = D),
        L
      );
    }),
    (o.toNumber = function () {
      return +R(this);
    }),
    (o.toPrecision = function (h, y) {
      return h != null && qe(h, 1, Ct), v(this, h, y, 2);
    }),
    (o.toString = function (h) {
      var y,
        w = this,
        T = w.s,
        k = w.e;
      return (
        k === null
          ? T
            ? ((y = "Infinity"), T < 0 && (y = "-" + y))
            : (y = "NaN")
          : (h == null
              ? (y = k <= l || k >= c ? Jl(xn(w.c), k) : Cr(xn(w.c), k, "0"))
              : h === 10 && m
                ? ((w = C(new p(w), a + k + 1, s)), (y = Cr(xn(w.c), w.e, "0")))
                : (qe(h, 2, P.length, "Base"),
                  (y = n(Cr(xn(w.c), k, "0"), 10, h, T, !0))),
            T < 0 && w.c[0] && (y = "-" + y)),
        y
      );
    }),
    (o.valueOf = o.toJSON =
      function () {
        return R(this);
      }),
    (o._isBigNumber = !0),
    (o[Symbol.toStringTag] = "BigNumber"),
    (o[Symbol.for("nodejs.util.inspect.custom")] = o.valueOf),
    e != null && p.set(e),
    p
  );
}
function wn(e) {
  var t = e | 0;
  return e > 0 || e === t ? t : t - 1;
}
function xn(e) {
  for (var t, n, r = 1, o = e.length, i = e[0] + ""; r < o; ) {
    for (t = e[r++] + "", n = pe - t.length; n--; t = "0" + t);
    i += t;
  }
  for (o = i.length; i.charCodeAt(--o) === 48; );
  return i.slice(0, o + 1 || 1);
}
function Eo(e, t) {
  var n,
    r,
    o = e.c,
    i = t.c,
    a = e.s,
    s = t.s,
    l = e.e,
    c = t.e;
  if (!a || !s) return null;
  if (((n = o && !o[0]), (r = i && !i[0]), n || r)) return n ? (r ? 0 : -s) : a;
  if (a != s) return a;
  if (((n = a < 0), (r = l == c), !o || !i)) return r ? 0 : !o ^ n ? 1 : -1;
  if (!r) return (l > c) ^ n ? 1 : -1;
  for (s = (l = o.length) < (c = i.length) ? l : c, a = 0; a < s; a++)
    if (o[a] != i[a]) return (o[a] > i[a]) ^ n ? 1 : -1;
  return l == c ? 0 : (l > c) ^ n ? 1 : -1;
}
function qe(e, t, n, r) {
  if (e < t || e > n || e !== bn(e))
    throw Error(
      Yt +
        (r || "Argument") +
        (typeof e == "number"
          ? e < t || e > n
            ? " out of range: "
            : " not an integer: "
          : " not a primitive number: ") +
        String(e)
    );
}
function Xl(e) {
  var t = e.c.length - 1;
  return wn(e.e / pe) == t && e.c[t] % 2 != 0;
}
function Jl(e, t) {
  return (
    (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
    (t < 0 ? "e" : "e+") +
    t
  );
}
function Cr(e, t, n) {
  var r, o;
  if (t < 0) {
    for (o = n + "."; ++t; o += n);
    e = o + e;
  } else if (((r = e.length), ++t > r)) {
    for (o = n, t -= r; --t; o += n);
    e += o;
  } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
  return e;
}
var nt = US(),
  iu;
(function (e) {
  (e[(e.up = nt.ROUND_UP)] = "up"),
    (e[(e.down = nt.ROUND_DOWN)] = "down"),
    (e[(e.truncate = nt.ROUND_DOWN)] = "truncate"),
    (e[(e.halfUp = nt.ROUND_HALF_UP)] = "halfUp"),
    (e[(e.default = nt.ROUND_HALF_UP)] = "default"),
    (e[(e.halfDown = nt.ROUND_HALF_DOWN)] = "halfDown"),
    (e[(e.halfEven = nt.ROUND_HALF_EVEN)] = "halfEven"),
    (e[(e.banker = nt.ROUND_HALF_EVEN)] = "banker"),
    (e[(e.ceiling = nt.ROUND_CEIL)] = "ceiling"),
    (e[(e.ceil = nt.ROUND_CEIL)] = "ceil"),
    (e[(e.floor = nt.ROUND_FLOOR)] = "floor");
})(iu || (iu = {}));
function HS(e) {
  var t;
  return (t = iu[e]) !== null && t !== void 0 ? t : iu.default;
}
var d7 = 9007199254740991,
  f7 = Math.floor;
function p7(e, t) {
  var n = "";
  if (!e || t < 1 || t > d7) return n;
  do t % 2 && (n += e), (t = f7(t / 2)), t && (e += e);
  while (t);
  return n;
}
var h7 = p7,
  m7 = /\s/;
function g7(e) {
  for (var t = e.length; t-- && m7.test(e.charAt(t)); );
  return t;
}
var v7 = g7,
  y7 = v7,
  x7 = /^\s+/;
function b7(e) {
  return e && e.slice(0, y7(e) + 1).replace(x7, "");
}
var w7 = b7,
  S7 = w7,
  ry = Hr,
  C7 = hl,
  oy = NaN,
  $7 = /^[-+]0x[0-9a-f]+$/i,
  _7 = /^0b[01]+$/i,
  P7 = /^0o[0-7]+$/i,
  E7 = parseInt;
function k7(e) {
  if (typeof e == "number") return e;
  if (C7(e)) return oy;
  if (ry(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ry(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = S7(e);
  var n = _7.test(e);
  return n || P7.test(e) ? E7(e.slice(2), n ? 2 : 8) : $7.test(e) ? oy : +e;
}
var R7 = k7,
  T7 = R7,
  iy = 1 / 0,
  O7 = 17976931348623157e292;
function M7(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = T7(e)), e === iy || e === -iy)) {
    var t = e < 0 ? -1 : 1;
    return t * O7;
  }
  return e === e ? e : 0;
}
var VS = M7,
  I7 = VS;
function A7(e) {
  var t = I7(e),
    n = t % 1;
  return t === t ? (n ? t - n : t) : 0;
}
var N7 = A7,
  j7 = h7,
  D7 = vd,
  L7 = N7,
  F7 = wa;
function z7(e, t, n) {
  return (n ? D7(e, t, n) : t === void 0) ? (t = 1) : (t = L7(t)), j7(F7(e), t);
}
var B7 = z7;
const W7 = rr(B7);
function U7(e) {
  return e.isZero() ? 1 : Math.floor(Math.log10(e.abs().toNumber()) + 1);
}
function H7(e, { precision: t, significant: n }) {
  return n && t !== null && t > 0 ? t - U7(e) : t;
}
function au(e, t) {
  const n = H7(e, t);
  if (n === null) return e.toString();
  const r = HS(t.roundMode);
  if (n >= 0) return e.toFixed(n, r);
  const o = Math.pow(10, Math.abs(n));
  return (e = new nt(e.div(o).toFixed(0, r)).times(o)), e.toString();
}
function V7(e, { formattedNumber: t, unit: n }) {
  return e.replace("%n", t).replace("%u", n);
}
function G7({ significand: e, whole: t, precision: n }) {
  if (t === "0" || n === null) return e;
  const r = Math.max(0, n - t.length);
  return (e ?? "").substr(0, r);
}
function Ya(e, t) {
  var n, r, o;
  const i = new nt(e);
  if (t.raise && !i.isFinite())
    throw new Error(`"${e}" is not a valid numeric value`);
  const a = au(i, t),
    s = new nt(a),
    l = s.lt(0),
    c = s.isZero();
  let [u, d] = a.split(".");
  const f = [];
  let b;
  const g = (n = t.format) !== null && n !== void 0 ? n : "%n",
    x = (r = t.negativeFormat) !== null && r !== void 0 ? r : `-${g}`,
    P = l && !c ? x : g;
  for (u = u.replace("-", ""); u.length > 0; )
    f.unshift(u.substr(Math.max(0, u.length - 3), 3)),
      (u = u.substr(0, u.length - 3));
  return (
    (u = f.join("")),
    (b = f.join(t.delimiter)),
    t.significant
      ? (d = G7({ whole: u, significand: d, precision: t.precision }))
      : (d = d ?? W7("0", (o = t.precision) !== null && o !== void 0 ? o : 0)),
    t.stripInsignificantZeros && d && (d = d.replace(/0+$/, "")),
    i.isNaN() && (b = e.toString()),
    d && i.isFinite() && (b += (t.separator || ".") + d),
    V7(P, { formattedNumber: b, unit: t.unit })
  );
}
function la(e, t, n) {
  let r = "";
  return (
    (t instanceof String || typeof t == "string") && (r = t),
    t instanceof Array && (r = t.join(e.defaultSeparator)),
    n.scope && (r = [n.scope, r].join(e.defaultSeparator)),
    r
  );
}
function Bo(e) {
  var t, n;
  if (e === null) return "null";
  const r = typeof e;
  return r !== "object"
    ? r
    : ((n =
        (t = e == null ? void 0 : e.constructor) === null || t === void 0
          ? void 0
          : t.name) === null || n === void 0
        ? void 0
        : n.toLowerCase()) || "object";
}
function pf(e, t, n) {
  n = Object.keys(n).reduce((o, i) => ((o[e.transformKey(i)] = n[i]), o), {});
  const r = t.match(e.placeholder);
  if (!r) return t;
  for (; r.length; ) {
    let o;
    const i = r.shift(),
      a = i.replace(e.placeholder, "$1");
    Mr(n[a])
      ? (o = n[a].toString().replace(/\$/gm, "_#$#_"))
      : a in n
        ? (o = e.nullPlaceholder(e, i, t, n))
        : (o = e.missingPlaceholder(e, i, t, n));
    const s = new RegExp(i.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}"));
    t = t.replace(s, o);
  }
  return t.replace(/_#\$#_/g, "$");
}
function lr(e, t, n = {}) {
  n = Object.assign({}, n);
  const r = "locale" in n ? n.locale : e.locale,
    o = Bo(r),
    i = e.locales.get(o === "string" ? r : typeof r).slice(),
    a = la(e, t, n)
      .split(e.defaultSeparator)
      .map((l) => e.transformKey(l)),
    s = i.map((l) => a.reduce((c, u) => c && c[u], e.translations[l]));
  return s.push(n.defaultValue), s.find((l) => Mr(l));
}
function K7(e, t) {
  const n = new nt(e);
  if (!n.isFinite()) return e.toString();
  if (!t.delimiterPattern.global)
    throw new Error(
      `options.delimiterPattern must be a global regular expression; received ${t.delimiterPattern}`
    );
  let [r, o] = n.toString().split(".");
  return (
    (r = r.replace(t.delimiterPattern, (i) => `${i}${t.delimiter}`)),
    [r, o].filter(Boolean).join(t.separator)
  );
}
function Y7(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
  return e;
}
var GS = Y7,
  ay = pl,
  q7 = md,
  Q7 = or,
  sy = ay ? ay.isConcatSpreadable : void 0;
function X7(e) {
  return Q7(e) || q7(e) || !!(sy && e && e[sy]);
}
var J7 = X7,
  Z7 = GS,
  e9 = J7;
function KS(e, t, n, r, o) {
  var i = -1,
    a = e.length;
  for (n || (n = e9), o || (o = []); ++i < a; ) {
    var s = e[i];
    t > 0 && n(s)
      ? t > 1
        ? KS(s, t - 1, n, r, o)
        : Z7(o, s)
      : r || (o[o.length] = s);
  }
  return o;
}
var t9 = KS;
function n9(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
var r9 = n9,
  o9 = bS,
  i9 = r9,
  a9 = wS,
  s9 = 1,
  l9 = 2;
function c9(e, t, n, r, o, i) {
  var a = n & s9,
    s = e.length,
    l = t.length;
  if (s != l && !(a && l > s)) return !1;
  var c = i.get(e),
    u = i.get(t);
  if (c && u) return c == t && u == e;
  var d = -1,
    f = !0,
    b = n & l9 ? new o9() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < s; ) {
    var g = e[d],
      x = t[d];
    if (r) var P = a ? r(x, g, d, t, e, i) : r(g, x, d, e, t, i);
    if (P !== void 0) {
      if (P) continue;
      f = !1;
      break;
    }
    if (b) {
      if (
        !i9(t, function (m, p) {
          if (!a9(b, p) && (g === m || o(g, m, n, r, i))) return b.push(p);
        })
      ) {
        f = !1;
        break;
      }
    } else if (!(g === x || o(g, x, n, r, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
var YS = c9;
function u9(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, o) {
      n[++t] = [o, r];
    }),
    n
  );
}
var d9 = u9,
  ly = pl,
  cy = cS,
  f9 = ml,
  p9 = YS,
  h9 = d9,
  m9 = Km,
  g9 = 1,
  v9 = 2,
  y9 = "[object Boolean]",
  x9 = "[object Date]",
  b9 = "[object Error]",
  w9 = "[object Map]",
  S9 = "[object Number]",
  C9 = "[object RegExp]",
  $9 = "[object Set]",
  _9 = "[object String]",
  P9 = "[object Symbol]",
  E9 = "[object ArrayBuffer]",
  k9 = "[object DataView]",
  uy = ly ? ly.prototype : void 0,
  hf = uy ? uy.valueOf : void 0;
function R9(e, t, n, r, o, i, a) {
  switch (n) {
    case k9:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case E9:
      return !(e.byteLength != t.byteLength || !i(new cy(e), new cy(t)));
    case y9:
    case x9:
    case S9:
      return f9(+e, +t);
    case b9:
      return e.name == t.name && e.message == t.message;
    case C9:
    case _9:
      return e == t + "";
    case w9:
      var s = h9;
    case $9:
      var l = r & g9;
      if ((s || (s = m9), e.size != t.size && !l)) return !1;
      var c = a.get(e);
      if (c) return c == t;
      (r |= v9), a.set(e, t);
      var u = p9(s(e), s(t), r, o, i, a);
      return a.delete(e), u;
    case P9:
      if (hf) return hf.call(e) == hf.call(t);
  }
  return !1;
}
var T9 = R9,
  O9 = GS,
  M9 = or;
function I9(e, t, n) {
  var r = t(e);
  return M9(e) ? r : O9(r, n(e));
}
var A9 = I9;
function N9(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
var j9 = N9;
function D9() {
  return [];
}
var L9 = D9,
  F9 = j9,
  z9 = L9,
  B9 = Object.prototype,
  W9 = B9.propertyIsEnumerable,
  dy = Object.getOwnPropertySymbols,
  U9 = dy
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            F9(dy(e), function (t) {
              return W9.call(e, t);
            }));
      }
    : z9,
  H9 = U9,
  V9 = uS,
  G9 = V9(Object.keys, Object),
  K9 = G9,
  Y9 = Hm,
  q9 = K9,
  Q9 = Object.prototype,
  X9 = Q9.hasOwnProperty;
function J9(e) {
  if (!Y9(e)) return q9(e);
  var t = [];
  for (var n in Object(e)) X9.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var Z9 = J9,
  eH = gS,
  tH = Z9,
  nH = Ca;
function rH(e) {
  return nH(e) ? eH(e) : tH(e);
}
var Ym = rH,
  oH = A9,
  iH = H9,
  aH = Ym;
function sH(e) {
  return oH(e, aH, iH);
}
var lH = sH,
  fy = lH,
  cH = 1,
  uH = Object.prototype,
  dH = uH.hasOwnProperty;
function fH(e, t, n, r, o, i) {
  var a = n & cH,
    s = fy(e),
    l = s.length,
    c = fy(t),
    u = c.length;
  if (l != u && !a) return !1;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(a ? f in t : dH.call(t, f))) return !1;
  }
  var b = i.get(e),
    g = i.get(t);
  if (b && g) return b == t && g == e;
  var x = !0;
  i.set(e, t), i.set(t, e);
  for (var P = a; ++d < l; ) {
    f = s[d];
    var m = e[f],
      p = t[f];
    if (r) var v = a ? r(p, m, f, t, e, i) : r(m, p, f, e, t, i);
    if (!(v === void 0 ? m === p || o(m, p, n, r, i) : v)) {
      x = !1;
      break;
    }
    P || (P = f == "constructor");
  }
  if (x && !P) {
    var _ = e.constructor,
      N = t.constructor;
    _ != N &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof _ == "function" &&
        _ instanceof _ &&
        typeof N == "function" &&
        N instanceof N
      ) &&
      (x = !1);
  }
  return i.delete(e), i.delete(t), x;
}
var pH = fH,
  hH = si,
  mH = yr,
  gH = hH(mH, "DataView"),
  vH = gH,
  yH = si,
  xH = yr,
  bH = yH(xH, "Promise"),
  wH = bH,
  SH = si,
  CH = yr,
  $H = SH(CH, "WeakMap"),
  _H = $H,
  Lp = vH,
  Fp = jm,
  zp = wH,
  Bp = SS,
  Wp = _H,
  qS = va,
  $a = Jw,
  py = "[object Map]",
  PH = "[object Object]",
  hy = "[object Promise]",
  my = "[object Set]",
  gy = "[object WeakMap]",
  vy = "[object DataView]",
  EH = $a(Lp),
  kH = $a(Fp),
  RH = $a(zp),
  TH = $a(Bp),
  OH = $a(Wp),
  Mo = qS;
((Lp && Mo(new Lp(new ArrayBuffer(1))) != vy) ||
  (Fp && Mo(new Fp()) != py) ||
  (zp && Mo(zp.resolve()) != hy) ||
  (Bp && Mo(new Bp()) != my) ||
  (Wp && Mo(new Wp()) != gy)) &&
  (Mo = function (e) {
    var t = qS(e),
      n = t == PH ? e.constructor : void 0,
      r = n ? $a(n) : "";
    if (r)
      switch (r) {
        case EH:
          return vy;
        case kH:
          return py;
        case RH:
          return hy;
        case TH:
          return my;
        case OH:
          return gy;
      }
    return t;
  });
var MH = Mo,
  mf = Wm,
  IH = YS,
  AH = T9,
  NH = pH,
  yy = MH,
  xy = or,
  by = Vm,
  jH = Gm,
  DH = 1,
  wy = "[object Arguments]",
  Sy = "[object Array]",
  Zl = "[object Object]",
  LH = Object.prototype,
  Cy = LH.hasOwnProperty;
function FH(e, t, n, r, o, i) {
  var a = xy(e),
    s = xy(t),
    l = a ? Sy : yy(e),
    c = s ? Sy : yy(t);
  (l = l == wy ? Zl : l), (c = c == wy ? Zl : c);
  var u = l == Zl,
    d = c == Zl,
    f = l == c;
  if (f && by(e)) {
    if (!by(t)) return !1;
    (a = !0), (u = !1);
  }
  if (f && !u)
    return (
      i || (i = new mf()),
      a || jH(e) ? IH(e, t, n, r, o, i) : AH(e, t, l, n, r, o, i)
    );
  if (!(n & DH)) {
    var b = u && Cy.call(e, "__wrapped__"),
      g = d && Cy.call(t, "__wrapped__");
    if (b || g) {
      var x = b ? e.value() : e,
        P = g ? t.value() : t;
      return i || (i = new mf()), o(x, P, n, r, i);
    }
  }
  return f ? (i || (i = new mf()), NH(e, t, n, r, o, i)) : !1;
}
var zH = FH,
  BH = zH,
  $y = ai;
function QS(e, t, n, r, o) {
  return e === t
    ? !0
    : e == null || t == null || (!$y(e) && !$y(t))
      ? e !== e && t !== t
      : BH(e, t, n, r, QS, o);
}
var XS = QS,
  WH = Wm,
  UH = XS,
  HH = 1,
  VH = 2;
function GH(e, t, n, r) {
  var o = n.length,
    i = o,
    a = !r;
  if (e == null) return !i;
  for (e = Object(e); o--; ) {
    var s = n[o];
    if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++o < i; ) {
    s = n[o];
    var l = s[0],
      c = e[l],
      u = s[1];
    if (a && s[2]) {
      if (c === void 0 && !(l in e)) return !1;
    } else {
      var d = new WH();
      if (r) var f = r(c, u, l, e, t, d);
      if (!(f === void 0 ? UH(u, c, HH | VH, r, d) : f)) return !1;
    }
  }
  return !0;
}
var KH = GH,
  YH = Hr;
function qH(e) {
  return e === e && !YH(e);
}
var JS = qH,
  QH = JS,
  XH = Ym;
function JH(e) {
  for (var t = XH(e), n = t.length; n--; ) {
    var r = t[n],
      o = e[r];
    t[n] = [r, o, QH(o)];
  }
  return t;
}
var ZH = JH;
function eV(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var ZS = eV,
  tV = KH,
  nV = ZH,
  rV = ZS;
function oV(e) {
  var t = nV(e);
  return t.length == 1 && t[0][2]
    ? rV(t[0][0], t[0][1])
    : function (n) {
        return n === e || tV(n, e, t);
      };
}
var iV = oV;
function aV(e, t) {
  return e != null && t in Object(e);
}
var sV = aV,
  lV = sV,
  cV = iS;
function uV(e, t) {
  return e != null && cV(e, t, lV);
}
var dV = uV,
  fV = XS,
  pV = rS,
  hV = dV,
  mV = Am,
  gV = JS,
  vV = ZS,
  yV = hd,
  xV = 1,
  bV = 2;
function wV(e, t) {
  return mV(e) && gV(t)
    ? vV(yV(e), t)
    : function (n) {
        var r = pV(n, e);
        return r === void 0 && r === t ? hV(n, e) : fV(t, r, xV | bV);
      };
}
var SV = wV;
function CV(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var $V = CV,
  _V = Fm;
function PV(e) {
  return function (t) {
    return _V(t, e);
  };
}
var EV = PV,
  kV = $V,
  RV = EV,
  TV = Am,
  OV = hd;
function MV(e) {
  return TV(e) ? kV(OV(e)) : RV(e);
}
var IV = MV,
  AV = iV,
  NV = SV,
  jV = gd,
  DV = or,
  LV = IV;
function FV(e) {
  return typeof e == "function"
    ? e
    : e == null
      ? jV
      : typeof e == "object"
        ? DV(e)
          ? NV(e[0], e[1])
          : AV(e)
        : LV(e);
}
var zV = FV,
  BV = lS,
  WV = Ym;
function UV(e, t) {
  return e && BV(e, t, WV);
}
var HV = UV,
  VV = Ca;
function GV(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!VV(n)) return e(n, r);
    for (
      var o = n.length, i = t ? o : -1, a = Object(n);
      (t ? i-- : ++i < o) && r(a[i], i, a) !== !1;

    );
    return n;
  };
}
var KV = GV,
  YV = HV,
  qV = KV,
  QV = qV(YV),
  XV = QV,
  JV = XV,
  ZV = Ca;
function eG(e, t) {
  var n = -1,
    r = ZV(e) ? Array(e.length) : [];
  return (
    JV(e, function (o, i, a) {
      r[++n] = t(o, i, a);
    }),
    r
  );
}
var tG = eG;
function nG(e, t) {
  var n = e.length;
  for (e.sort(t); n--; ) e[n] = e[n].value;
  return e;
}
var rG = nG,
  _y = hl;
function oG(e, t) {
  if (e !== t) {
    var n = e !== void 0,
      r = e === null,
      o = e === e,
      i = _y(e),
      a = t !== void 0,
      s = t === null,
      l = t === t,
      c = _y(t);
    if (
      (!s && !c && !i && e > t) ||
      (i && a && l && !s && !c) ||
      (r && a && l) ||
      (!n && l) ||
      !o
    )
      return 1;
    if (
      (!r && !i && !c && e < t) ||
      (c && n && o && !r && !i) ||
      (s && n && o) ||
      (!a && o) ||
      !l
    )
      return -1;
  }
  return 0;
}
var iG = oG,
  aG = iG;
function sG(e, t, n) {
  for (
    var r = -1, o = e.criteria, i = t.criteria, a = o.length, s = n.length;
    ++r < a;

  ) {
    var l = aG(o[r], i[r]);
    if (l) {
      if (r >= s) return l;
      var c = n[r];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var lG = sG,
  gf = eS,
  cG = Fm,
  uG = zV,
  dG = tG,
  fG = rG,
  pG = pS,
  hG = lG,
  mG = gd,
  gG = or;
function vG(e, t, n) {
  t.length
    ? (t = gf(t, function (i) {
        return gG(i)
          ? function (a) {
              return cG(a, i.length === 1 ? i[0] : i);
            }
          : i;
      }))
    : (t = [mG]);
  var r = -1;
  t = gf(t, pG(uG));
  var o = dG(e, function (i, a, s) {
    var l = gf(t, function (c) {
      return c(i);
    });
    return { criteria: l, index: ++r, value: i };
  });
  return fG(o, function (i, a) {
    return hG(i, a, n);
  });
}
var yG = vG,
  xG = t9,
  bG = yG,
  wG = xS,
  Py = vd,
  SG = wG(function (e, t) {
    if (e == null) return [];
    var n = t.length;
    return (
      n > 1 && Py(e, t[0], t[1])
        ? (t = [])
        : n > 2 && Py(t[0], t[1], t[2]) && (t = [t[0]]),
      bG(e, xG(t, 1), [])
    );
  }),
  CG = SG;
const $G = rr(CG);
function _G(e, t, n) {
  for (var r = -1, o = e.length, i = t.length, a = {}; ++r < o; ) {
    var s = r < i ? t[r] : void 0;
    n(a, e[r], s);
  }
  return a;
}
var PG = _G,
  EG = mS,
  kG = PG;
function RG(e, t) {
  return kG(e || [], t || [], EG);
}
var TG = RG;
const OG = rr(TG),
  Up = {
    0: "unit",
    1: "ten",
    2: "hundred",
    3: "thousand",
    6: "million",
    9: "billion",
    12: "trillion",
    15: "quadrillion",
    "-1": "deci",
    "-2": "centi",
    "-3": "mili",
    "-6": "micro",
    "-9": "nano",
    "-12": "pico",
    "-15": "femto",
  },
  MG = OG(
    Object.values(Up),
    Object.keys(Up).map((e) => parseInt(e, 10))
  );
function IG(e, t, n) {
  const r = {
    roundMode: n.roundMode,
    precision: n.precision,
    significant: n.significant,
  };
  let o;
  if (Bo(n.units) === "string") {
    const d = n.units;
    if (((o = lr(e, d)), !o))
      throw new Error(
        `The scope "${e.locale}${e.defaultSeparator}${la(e, d, {})}" couldn't be found`
      );
  } else o = n.units;
  let i = au(new nt(t), r);
  const a = (d) =>
      $G(
        Object.keys(d).map((f) => MG[f]),
        (f) => f * -1
      ),
    s = (d, f) => {
      const b = d.isZero() ? 0 : Math.floor(Math.log10(d.abs().toNumber()));
      return a(f).find((g) => b >= g) || 0;
    },
    l = (d, f) => {
      const b = Up[f.toString()];
      return d[b] || "";
    },
    c = s(new nt(i), o),
    u = l(o, c);
  if (
    ((i = au(new nt(i).div(Math.pow(10, c)), r)), n.stripInsignificantZeros)
  ) {
    let [d, f] = i.split(".");
    (f = (f || "").replace(/0+$/, "")),
      (i = d),
      f && (i += `${n.separator}${f}`);
  }
  return n.format
    .replace("%n", i || "0")
    .replace("%u", u)
    .trim();
}
const Ey = ["byte", "kb", "mb", "gb", "tb", "pb", "eb"];
function AG(e, t, n) {
  const r = HS(n.roundMode),
    o = 1024,
    i = new nt(t).abs(),
    a = i.lt(o);
  let s;
  const l = (g, x) => {
      const P = x.length - 1,
        m = new nt(Math.log(g.toNumber()))
          .div(Math.log(o))
          .integerValue(nt.ROUND_DOWN)
          .toNumber();
      return Math.min(P, m);
    },
    c = (g) => `number.human.storage_units.units.${a ? "byte" : g[u]}`,
    u = l(i, Ey);
  a
    ? (s = i.integerValue())
    : (s = new nt(
        au(i.div(Math.pow(o, u)), {
          significant: n.significant,
          precision: n.precision,
          roundMode: n.roundMode,
        })
      ));
  const d = e.translate("number.human.storage_units.format", {
      defaultValue: "%n %u",
    }),
    f = e.translate(c(Ey), { count: i.integerValue().toNumber() });
  let b = s.toFixed(n.precision, r);
  return (
    n.stripInsignificantZeros &&
      (b = b.replace(/(\..*?)0+$/, "$1").replace(/\.$/, "")),
    d.replace("%n", b).replace("%u", f)
  );
}
function Hp(e) {
  if (e instanceof Date) return e;
  if (typeof e == "number") {
    const r = new Date();
    return r.setTime(e), r;
  }
  const t = new String(e).match(
    /(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})(?:[.,](\d{1,3}))?)?(Z|\+00:?00)?/
  );
  if (t) {
    const r = t.slice(1, 8).map((f) => parseInt(f, 10) || 0);
    r[1] -= 1;
    const [o, i, a, s, l, c, u] = r;
    return t[8]
      ? new Date(Date.UTC(o, i, a, s, l, c, u))
      : new Date(o, i, a, s, l, c, u);
  }
  e.match(
    /([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/
  ) &&
    new Date().setTime(
      Date.parse(
        [RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(
          " "
        )
      )
    );
  const n = new Date();
  return n.setTime(Date.parse(e)), n;
}
function ky({ i18n: e, count: t, scope: n, options: r, baseScope: o }) {
  r = Object.assign({}, r);
  let i, a;
  if ((typeof n == "object" && n ? (i = n) : (i = lr(e, n, r)), !i))
    return e.missingTranslation.get(n, r);
  const l = e.pluralization.get(r.locale)(e, t),
    c = [];
  for (; l.length; ) {
    const u = l.shift();
    if (Mr(i[u])) {
      a = i[u];
      break;
    }
    c.push(u);
  }
  return Mr(a)
    ? ((r.count = t), e.interpolate(e, a, r))
    : e.missingTranslation.get(o.split(e.defaultSeparator).concat([c[0]]), r);
}
const NG = {
  meridian: { am: "AM", pm: "PM" },
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  monthNames: [
    null,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  abbrMonthNames: [
    null,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};
function jG(e, t, n = {}) {
  const {
    abbrDayNames: r,
    dayNames: o,
    abbrMonthNames: i,
    monthNames: a,
    meridian: s,
  } = Object.assign(Object.assign({}, NG), n);
  if (isNaN(e.getTime()))
    throw new Error(
      "strftime() requires a valid date object, but received an invalid date."
    );
  const l = e.getDay(),
    c = e.getDate(),
    u = e.getFullYear(),
    d = e.getMonth() + 1,
    f = e.getHours();
  let b = f;
  const g = f > 11 ? "pm" : "am",
    x = e.getSeconds(),
    P = e.getMinutes(),
    m = e.getTimezoneOffset(),
    p = Math.floor(Math.abs(m / 60)),
    v = Math.abs(m) - p * 60,
    _ =
      (m > 0 ? "-" : "+") +
      (p.toString().length < 2 ? "0" + p : p) +
      (v.toString().length < 2 ? "0" + v : v);
  return (
    b > 12 ? (b = b - 12) : b === 0 && (b = 12),
    (t = t.replace("%a", r[l])),
    (t = t.replace("%A", o[l])),
    (t = t.replace("%b", i[d])),
    (t = t.replace("%B", a[d])),
    (t = t.replace("%d", c.toString().padStart(2, "0"))),
    (t = t.replace("%e", c.toString())),
    (t = t.replace("%-d", c.toString())),
    (t = t.replace("%H", f.toString().padStart(2, "0"))),
    (t = t.replace("%-H", f.toString())),
    (t = t.replace("%k", f.toString())),
    (t = t.replace("%I", b.toString().padStart(2, "0"))),
    (t = t.replace("%-I", b.toString())),
    (t = t.replace("%l", b.toString())),
    (t = t.replace("%m", d.toString().padStart(2, "0"))),
    (t = t.replace("%-m", d.toString())),
    (t = t.replace("%M", P.toString().padStart(2, "0"))),
    (t = t.replace("%-M", P.toString())),
    (t = t.replace("%p", s[g])),
    (t = t.replace("%P", s[g].toLowerCase())),
    (t = t.replace("%S", x.toString().padStart(2, "0"))),
    (t = t.replace("%-S", x.toString())),
    (t = t.replace("%w", l.toString())),
    (t = t.replace("%y", u.toString().padStart(2, "0").substr(-2))),
    (t = t.replace(
      "%-y",
      u.toString().padStart(2, "0").substr(-2).replace(/^0+/, "")
    )),
    (t = t.replace("%Y", u.toString())),
    (t = t.replace(/%z/i, _)),
    t
  );
}
var DG = Math.ceil,
  LG = Math.max;
function FG(e, t, n, r) {
  for (var o = -1, i = LG(DG((t - e) / (n || 1)), 0), a = Array(i); i--; )
    (a[r ? i : ++o] = e), (e += n);
  return a;
}
var zG = FG,
  BG = zG,
  WG = vd,
  vf = VS;
function UG(e) {
  return function (t, n, r) {
    return (
      r && typeof r != "number" && WG(t, n, r) && (n = r = void 0),
      (t = vf(t)),
      n === void 0 ? ((n = t), (t = 0)) : (n = vf(n)),
      (r = r === void 0 ? (t < n ? 1 : -1) : vf(r)),
      BG(t, n, r, e)
    );
  };
}
var HG = UG,
  VG = HG,
  GG = VG(),
  KG = GG;
const YG = rr(KG),
  an = (e, t, n) => n >= e && n <= t;
function qG(e, t, n, r = {}) {
  const o = r.scope || "datetime.distance_in_words",
    i = (R, h = 0) => e.t(R, { count: h, scope: o });
  (t = Hp(t)), (n = Hp(n));
  let a = t.getTime() / 1e3,
    s = n.getTime() / 1e3;
  a > s && ([t, n, a, s] = [n, t, s, a]);
  const l = Math.round(s - a),
    c = Math.round((s - a) / 60),
    d = c / 60 / 24,
    f = Math.round(c / 60),
    b = Math.round(d),
    g = Math.round(b / 30);
  if (an(0, 1, c))
    return r.includeSeconds
      ? an(0, 4, l)
        ? i("less_than_x_seconds", 5)
        : an(5, 9, l)
          ? i("less_than_x_seconds", 10)
          : an(10, 19, l)
            ? i("less_than_x_seconds", 20)
            : an(20, 39, l)
              ? i("half_a_minute")
              : an(40, 59, l)
                ? i("less_than_x_minutes", 1)
                : i("x_minutes", 1)
      : c === 0
        ? i("less_than_x_minutes", 1)
        : i("x_minutes", c);
  if (an(2, 44, c)) return i("x_minutes", c);
  if (an(45, 89, c)) return i("about_x_hours", 1);
  if (an(90, 1439, c)) return i("about_x_hours", f);
  if (an(1440, 2519, c)) return i("x_days", 1);
  if (an(2520, 43199, c)) return i("x_days", b);
  if (an(43200, 86399, c)) return i("about_x_months", Math.round(c / 43200));
  if (an(86400, 525599, c)) return i("x_months", g);
  let x = t.getFullYear();
  t.getMonth() + 1 >= 3 && (x += 1);
  let P = n.getFullYear();
  n.getMonth() + 1 < 3 && (P -= 1);
  const m =
      x > P
        ? 0
        : YG(x, P).filter((R) => new Date(R, 1, 29).getMonth() == 1).length,
    p = 525600,
    v = m * 1440,
    _ = c - v,
    N = Math.trunc(_ / p),
    C = parseFloat((_ / p - N).toPrecision(3));
  return C < 0.25
    ? i("about_x_years", N)
    : C < 0.75
      ? i("over_x_years", N)
      : i("almost_x_years", N + 1);
}
const QG = function (e, t) {
    t instanceof Array && (t = t.join(e.defaultSeparator));
    const n = t.split(e.defaultSeparator).slice(-1)[0];
    return (
      e.missingTranslationPrefix +
      n
        .replace("_", " ")
        .replace(/([a-z])([A-Z])/g, (r, o, i) => `${o} ${i.toLowerCase()}`)
    );
  },
  XG = (e, t, n) => {
    const r = la(e, t, n),
      o = "locale" in n ? n.locale : e.locale,
      i = Bo(o);
    return `[missing "${[i == "string" ? o : i, r].join(e.defaultSeparator)}" translation]`;
  },
  JG = (e, t, n) => {
    const r = la(e, t, n),
      o = [e.locale, r].join(e.defaultSeparator);
    throw new Error(`Missing translation: ${o}`);
  };
class ZG {
  constructor(t) {
    (this.i18n = t),
      (this.registry = {}),
      this.register("guess", QG),
      this.register("message", XG),
      this.register("error", JG);
  }
  register(t, n) {
    this.registry[t] = n;
  }
  get(t, n) {
    var r;
    return this.registry[
      (r = n.missingBehavior) !== null && r !== void 0
        ? r
        : this.i18n.missingBehavior
    ](this.i18n, t, n);
  }
}
var eK = function (e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function s(u) {
      try {
        c(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? i(u.value) : o(u.value).then(s, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const yf = {
  defaultLocale: "en",
  availableLocales: ["en"],
  locale: "en",
  defaultSeparator: ".",
  placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
  enableFallback: !1,
  missingBehavior: "message",
  missingTranslationPrefix: "",
  missingPlaceholder: (e, t) => `[missing "${t}" value]`,
  nullPlaceholder: (e, t, n, r) => e.missingPlaceholder(e, t, n, r),
  transformKey: (e) => e,
};
class tK {
  constructor(t = {}, n = {}) {
    (this._locale = yf.locale),
      (this._defaultLocale = yf.defaultLocale),
      (this._version = 0),
      (this.onChangeHandlers = []),
      (this.translations = {}),
      (this.availableLocales = []),
      (this.t = this.translate),
      (this.p = this.pluralize),
      (this.l = this.localize),
      (this.distanceOfTimeInWords = this.timeAgoInWords);
    const {
      locale: r,
      enableFallback: o,
      missingBehavior: i,
      missingTranslationPrefix: a,
      missingPlaceholder: s,
      nullPlaceholder: l,
      defaultLocale: c,
      defaultSeparator: u,
      placeholder: d,
      transformKey: f,
    } = Object.assign(Object.assign({}, yf), n);
    (this.locale = r),
      (this.defaultLocale = c),
      (this.defaultSeparator = u),
      (this.enableFallback = o),
      (this.locale = r),
      (this.missingBehavior = i),
      (this.missingTranslationPrefix = a),
      (this.missingPlaceholder = s),
      (this.nullPlaceholder = l),
      (this.placeholder = d),
      (this.pluralization = new tU(this)),
      (this.locales = new XW(this)),
      (this.missingTranslation = new ZG(this)),
      (this.transformKey = f),
      (this.interpolate = pf),
      this.store(t);
  }
  store(t) {
    eW(this.translations, t), this.hasChanged();
  }
  get locale() {
    return this._locale || this.defaultLocale || "en";
  }
  set locale(t) {
    if (typeof t != "string")
      throw new Error(`Expected newLocale to be a string; got ${Bo(t)}`);
    const n = this._locale !== t;
    (this._locale = t), n && this.hasChanged();
  }
  get defaultLocale() {
    return this._defaultLocale || "en";
  }
  set defaultLocale(t) {
    if (typeof t != "string")
      throw new Error(`Expected newLocale to be a string; got ${Bo(t)}`);
    const n = this._defaultLocale !== t;
    (this._defaultLocale = t), n && this.hasChanged();
  }
  translate(t, n) {
    n = Object.assign({}, n);
    const r = c7(this, t, n);
    let o;
    return r.some(
      (a) => (
        Mr(a.scope)
          ? (o = lr(this, a.scope, n))
          : Mr(a.message) && (o = a.message),
        o != null
      )
    )
      ? (typeof o == "string"
          ? (o = this.interpolate(this, o, n))
          : typeof o == "object" &&
            o &&
            Mr(n.count) &&
            (o = ky({
              i18n: this,
              count: n.count || 0,
              scope: o,
              options: n,
              baseScope: la(this, t, n),
            })),
        n &&
          o instanceof Array &&
          (o = o.map((a) => (typeof a == "string" ? pf(this, a, n) : a))),
        o)
      : this.missingTranslation.get(t, n);
  }
  pluralize(t, n, r) {
    return ky({
      i18n: this,
      count: t,
      scope: n,
      options: Object.assign({}, r),
      baseScope: la(this, n, r ?? {}),
    });
  }
  localize(t, n, r) {
    if (((r = Object.assign({}, r)), n == null)) return "";
    switch (t) {
      case "currency":
        return this.numberToCurrency(n);
      case "number":
        return Ya(
          n,
          Object.assign(
            {
              delimiter: ",",
              precision: 3,
              separator: ".",
              significant: !1,
              stripInsignificantZeros: !1,
            },
            lr(this, "number.format")
          )
        );
      case "percentage":
        return this.numberToPercentage(n);
      default: {
        let o;
        return (
          t.match(/^(date|time)/)
            ? (o = this.toTime(t, n))
            : (o = n.toString()),
          pf(this, o, r)
        );
      }
    }
  }
  toTime(t, n) {
    const r = Hp(n),
      o = lr(this, t);
    return r.toString().match(/invalid/i) || !o
      ? r.toString()
      : this.strftime(r, o);
  }
  numberToCurrency(t, n = {}) {
    return Ya(
      t,
      Object.assign(
        Object.assign(
          Object.assign(
            {
              delimiter: ",",
              format: "%u%n",
              precision: 2,
              separator: ".",
              significant: !1,
              stripInsignificantZeros: !1,
              unit: "$",
            },
            Vn(this.get("number.format"))
          ),
          Vn(this.get("number.currency.format"))
        ),
        n
      )
    );
  }
  numberToPercentage(t, n = {}) {
    return Ya(
      t,
      Object.assign(
        Object.assign(
          Object.assign(
            {
              delimiter: "",
              format: "%n%",
              precision: 3,
              stripInsignificantZeros: !1,
              separator: ".",
              significant: !1,
            },
            Vn(this.get("number.format"))
          ),
          Vn(this.get("number.percentage.format"))
        ),
        n
      )
    );
  }
  numberToHumanSize(t, n = {}) {
    return AG(
      this,
      t,
      Object.assign(
        Object.assign(
          Object.assign(
            {
              delimiter: "",
              precision: 3,
              significant: !0,
              stripInsignificantZeros: !0,
              units: {
                billion: "Billion",
                million: "Million",
                quadrillion: "Quadrillion",
                thousand: "Thousand",
                trillion: "Trillion",
                unit: "",
              },
            },
            Vn(this.get("number.human.format"))
          ),
          Vn(this.get("number.human.storage_units"))
        ),
        n
      )
    );
  }
  numberToHuman(t, n = {}) {
    return IG(
      this,
      t,
      Object.assign(
        Object.assign(
          Object.assign(
            {
              delimiter: "",
              separator: ".",
              precision: 3,
              significant: !0,
              stripInsignificantZeros: !0,
              format: "%n %u",
              roundMode: "default",
              units: {
                billion: "Billion",
                million: "Million",
                quadrillion: "Quadrillion",
                thousand: "Thousand",
                trillion: "Trillion",
                unit: "",
              },
            },
            Vn(this.get("number.human.format"))
          ),
          Vn(this.get("number.human.decimal_units"))
        ),
        n
      )
    );
  }
  numberToRounded(t, n) {
    return Ya(
      t,
      Object.assign(
        {
          unit: "",
          precision: 3,
          significant: !1,
          separator: ".",
          delimiter: "",
          stripInsignificantZeros: !1,
        },
        n
      )
    );
  }
  numberToDelimited(t, n = {}) {
    return K7(
      t,
      Object.assign(
        {
          delimiterPattern: /(\d)(?=(\d\d\d)+(?!\d))/g,
          delimiter: ",",
          separator: ".",
        },
        n
      )
    );
  }
  withLocale(t, n) {
    return eK(this, void 0, void 0, function* () {
      const r = this.locale;
      try {
        (this.locale = t), yield n();
      } finally {
        this.locale = r;
      }
    });
  }
  strftime(t, n, r = {}) {
    return jG(
      t,
      n,
      Object.assign(
        Object.assign(Object.assign({}, Vn(lr(this, "date"))), {
          meridian: {
            am: lr(this, "time.am") || "AM",
            pm: lr(this, "time.pm") || "PM",
          },
        }),
        r
      )
    );
  }
  update(t, n, r = { strict: !1 }) {
    if (r.strict && !dF(this.translations, t))
      throw new Error(`The path "${t}" is not currently defined`);
    const o = N5(this.translations, t),
      i = Bo(o),
      a = Bo(n);
    if (r.strict && i !== a)
      throw new Error(
        `The current type for "${t}" is "${i}", but you're trying to override it with "${a}"`
      );
    let s;
    a === "object" ? (s = Object.assign(Object.assign({}, o), n)) : (s = n);
    const l = t.split(this.defaultSeparator),
      c = l.pop();
    let u = this.translations;
    for (const d of l) u[d] || (u[d] = {}), (u = u[d]);
    (u[c] = s), this.hasChanged();
  }
  toSentence(t, n = {}) {
    const {
        wordsConnector: r,
        twoWordsConnector: o,
        lastWordConnector: i,
      } = Object.assign(
        Object.assign(
          {
            wordsConnector: ", ",
            twoWordsConnector: " and ",
            lastWordConnector: ", and ",
          },
          Vn(lr(this, "support.array"))
        ),
        n
      ),
      a = t.length;
    switch (a) {
      case 0:
        return "";
      case 1:
        return `${t[0]}`;
      case 2:
        return t.join(o);
      default:
        return [t.slice(0, a - 1).join(r), i, t[a - 1]].join("");
    }
  }
  timeAgoInWords(t, n, r = {}) {
    return qG(this, t, n, r);
  }
  onChange(t) {
    return (
      this.onChangeHandlers.push(t),
      () => {
        this.onChangeHandlers.splice(this.onChangeHandlers.indexOf(t), 1);
      }
    );
  }
  get version() {
    return this._version;
  }
  formatNumber(t, n = {}) {
    return (
      (n = Object.assign(
        Object.assign(
          {
            delimiter: ",",
            precision: 3,
            separator: ".",
            unit: "",
            format: "%u%n",
            significant: !1,
            stripInsignificantZeros: !1,
          },
          Vn(this.get("number.format"))
        ),
        n
      )),
      Ya(t, n)
    );
  }
  get(t) {
    return lr(this, t);
  }
  runCallbacks() {
    this.onChangeHandlers.forEach((t) => t(this));
  }
  hasChanged() {
    (this._version += 1), this.runCallbacks();
  }
}
const Be = new tK();
Be.translations = xL;
Be.defaultLocale = "en";
Be.locale = "en";
const nK = "/portafolio/",
  Ry = () =>
    S.jsxs(kn, {
      sx: { p: 0, textTransform: "none" },
      color: "inherit",
      children: [
        S.jsx(Fr, {
          sx: { display: "flex", mr: 1, flexGrow: 1 },
          alt: "A",
          src: `${jt}/images/vic.jpeg`,
        }),
        S.jsx(sa, {
          to: `${nK}`,
          color: "inherit",
          relative: "path",
          children: S.jsx(oe, {
            noWrap: !0,
            component: "span",
            sx: {
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              textDecoration: "none",
            },
            children: Be.t("resume.name"),
          }),
        }),
      ],
    }),
  rK = ({ image: e, actionIcons: t }) =>
    S.jsxs(mj, {
      sx: {
        m: 1,
        p: 0,
        position: "relative",
        pt: "56.25%",
        overflow: "hidden",
        borderRadius: "18px",
      },
      children: [
        S.jsx("img", {
          src: e.src,
          srcSet: e.srcSet,
          alt: e.alt,
          loading: "lazy",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          },
        }),
        S.jsx(_j, {
          sx: { background: "transparent", borderRadius: "28px" },
          position: "top",
          actionIcon: t,
          actionPosition: "right",
        }),
      ],
    }),
  oK = "javascript.svg",
  iK = (e) => {
    const t = (e || "").toLowerCase();
    return t.includes("react native") || t.includes("react")
      ? "react.svg"
      : t.includes("expo")
        ? "expo.svg"
        : t.includes("redux")
          ? "redux.svg"
          : t.includes("rtk") || t.includes("query")
            ? "rtk-query.svg"
            : t.includes("jira")
              ? "jira.svg"
              : t.includes("gitlab")
                ? "gitlab.svg"
                : t.includes("git")
                  ? "git.svg"
                  : t.includes("bitcoin") || t === "btc"
                    ? "bitcoin.svg"
                    : t.includes("xrp") || t.includes("ripple")
                      ? "xrp.svg"
                      : t.includes("usdt") || t.includes("tether")
                        ? "usdt.svg"
                        : t.includes("eth") || t.includes("ethereum")
                          ? "eth.svg"
                          : t.includes("dash")
                            ? "dash.svg"
                            : t.includes("ada") || t.includes("cardano")
                              ? "ada.svg"
                              : t.includes("c#") ||
                                  t.includes("csharp") ||
                                  t === "c#"
                                ? "csharp.svg"
                                : t.includes(".net") || t.includes("dotnet")
                                  ? "dotnetcore.svg"
                                  : t.includes("iis")
                                    ? "iis.svg"
                                    : t.includes("sql server") ||
                                        t.includes("sqlserver")
                                      ? "sqlserver.svg"
                                      : t.includes("mongo")
                                        ? "mongodb.svg"
                                        : t.includes("scrum") ||
                                            t.includes("agile")
                                          ? "scrum.svg"
                                          : t.includes("android")
                                            ? "android.svg"
                                            : t.includes("aws")
                                              ? "aws.svg"
                                              : t.includes("ios")
                                                ? "ios.svg"
                                                : t.includes("docker")
                                                  ? "docker.svg"
                                                  : t.includes("kubernetes")
                                                    ? "kubernetes.svg"
                                                    : t.includes("mysql")
                                                      ? "mysql-database.svg"
                                                      : t.includes("node")
                                                        ? "nodejs.svg"
                                                        : t.includes(
                                                              "typescript"
                                                            ) || t === "ts"
                                                          ? "typescript.png"
                                                          : t.includes(
                                                                "javascript"
                                                              )
                                                            ? "javascript.svg"
                                                            : oK;
  },
  eC = (e, t) => t || iK(e),
  Ty = (e) => eC(e.name, e.icon),
  aK = ({
    data: e,
    companyImage: t,
    companyImages: n,
    companyName: r,
    companyUrl: o,
    onOpen: i,
  }) => {
    const { title: a, image: s, tech_stack: l } = e,
      c = e.coins || [];
    return S.jsxs(jw, {
      sx: {
        maxWidth: 800,
        borderRadius: "28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
      children: [
        S.jsx(rK, {
          actionIcons: null,
          image: { src: `${jt}/images/${s}`, srcSet: "", alt: "" },
        }),
        S.jsxs(Dw, {
          sx: { flexGrow: 1 },
          children: [
            S.jsxs(it, {
              direction: "row",
              spacing: 1,
              alignItems: "center",
              sx: {
                backgroundColor: "rgba(0,0,0,0.02)",
                p: 1,
                borderRadius: 2,
              },
              children: [
                (n && n.length > 0 ? n : t ? [t] : []).map((u, d) =>
                  S.jsx(
                    Tn,
                    {
                      sx: {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: 60,
                        maxWidth: 140,
                        maxHeight: 42,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      },
                      children: S.jsx("img", {
                        src: `${jt}/images/${u}`,
                        alt: r || a,
                        style: {
                          width: "100%",
                          height: "100%",
                          maxWidth: 140,
                          maxHeight: 42,
                          objectFit: "contain",
                          display: "block",
                        },
                      }),
                    },
                    `${u}-${d}`
                  )
                ),
                S.jsx(oe, { variant: "h5", component: "div", children: a }),
              ],
            }),
            S.jsxs(it, {
              direction: "row",
              spacing: 1,
              flexWrap: "wrap",
              sx: { mt: 1 },
              children: [
                l.slice(0, 4).map((u, d) => {
                  const f = Ty(u);
                  return S.jsx(
                    Gl,
                    {
                      size: "small",
                      label: u.name,
                      avatar: S.jsx(Fr, {
                        src: `${jt}/images/icons/${f}`,
                        alt: u.name,
                        sx: { width: 22, height: 22 },
                      }),
                      sx: { mr: 0.5, mb: 0.5, borderRadius: 2 },
                    },
                    `${u.name}-${d}`
                  );
                }),
                l.length > 4 &&
                  S.jsx(Gl, {
                    size: "small",
                    label: `+${l.length - 4}`,
                    sx: { mr: 0.5, mb: 0.5, borderRadius: 2 },
                  }),
              ],
            }),
            c.length > 0 &&
              S.jsxs(it, {
                direction: "row",
                spacing: 1,
                flexWrap: "wrap",
                sx: { mt: 1 },
                children: [
                  c.slice(0, 4).map((u, d) => {
                    const f = Ty(u);
                    return S.jsx(
                      Gl,
                      {
                        size: "small",
                        label: u.name,
                        avatar: S.jsx(Fr, {
                          src: `${jt}/images/icons/${f}`,
                          alt: u.name,
                          sx: { width: 22, height: 22 },
                        }),
                        sx: {
                          mr: 0.5,
                          mb: 0.5,
                          borderRadius: 2,
                          bgcolor: "rgba(0,0,0,0.03)",
                        },
                      },
                      `${u.name}-${d}`
                    );
                  }),
                  c.length > 4 &&
                    S.jsx(Gl, {
                      size: "small",
                      label: `+${c.length - 4}`,
                      sx: {
                        mr: 0.5,
                        mb: 0.5,
                        borderRadius: 2,
                        bgcolor: "rgba(0,0,0,0.03)",
                      },
                    }),
                ],
              }),
          ],
        }),
        S.jsx(kA, {
          disableSpacing: !0,
          sx: { px: 2, pb: 2, pt: 0 },
          children: S.jsx(kn, {
            size: "small",
            fullWidth: !0,
            variant: "contained",
            color: "inherit",
            sx: {
              borderRadius: 2,
              fontWeight: 700,
              bgcolor: "#e0e0e0",
              color: "#1f1f1f",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#d5d5d5",
                boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
              },
            },
            onClick: () =>
              i == null
                ? void 0
                : i({
                    project: e,
                    companyImage: t,
                    companyImages: n,
                    companyName: r,
                    companyUrl: o,
                  }),
            children: Be.t("more_info"),
          }),
        }),
      ],
    });
  },
  tC = $.createContext({ language: "en", setLanguage: () => {} }),
  sK = ({ children: e }) => {
    const [t, n] = $.useState("en"),
      r = (o) => {
        (Be.locale = o), n(o);
      };
    return S.jsx(tC.Provider, {
      value: { language: t, setLanguage: r },
      children: e,
    });
  },
  yd = () => $.useContext(tC),
  Oy = ["resume"],
  My = "/portafolio/",
  lK = () => {
    const [e, t] = $.useState(!1),
      [n, r] = $.useState(null),
      o = !!n,
      { setLanguage: i, language: a } = yd(),
      s = (g) => {
        l(), i(g);
      },
      l = () => {
        r(null);
      },
      c = (g) => {
        r(g.currentTarget);
      },
      u = () => {
        console.error("handleDrawerToggle"), t((g) => !g);
      },
      d = "primary-search-account-menu-mobile",
      f = S.jsxs(ID, {
        anchorEl: n,
        anchorOrigin: { vertical: "top", horizontal: "right" },
        id: d,
        keepMounted: !0,
        transformOrigin: { vertical: "top", horizontal: "right" },
        open: o,
        onClose: l,
        children: [
          S.jsx(k0, {
            children: S.jsxs(kn, {
              color: "inherit",
              onClick: () => s("en"),
              children: [" ", "English", " "],
            }),
          }),
          S.jsx(k0, {
            children: S.jsxs(kn, {
              color: "inherit",
              onClick: () => s("es"),
              children: [" ", "Español", " "],
            }),
          }),
        ],
      }),
      b = S.jsxs(Tn, {
        onClick: u,
        sx: { textAlign: "center", marginTop: 5 },
        children: [
          S.jsx(Ry, {}),
          S.jsxs(Uw, {
            children: [
              Oy.map((g) =>
                S.jsx(
                  sa,
                  {
                    to: `${My}${g}`,
                    color: "inherit",
                    relative: "path",
                    children: S.jsx(
                      Ys,
                      {
                        disablePadding: !0,
                        children: S.jsx(Bj, {
                          sx: { textAlign: "center" },
                          children: S.jsx(Mm, { primary: Be.t(g + ".title") }),
                        }),
                      },
                      g
                    ),
                  },
                  g
                )
              ),
              S.jsx(kn, {
                variant: "outlined",
                color: "secondary",
                sx: { textTransform: "none", marginTop: 1.5 },
                size: "small",
                href: `${jt}/files/resume-victor-hernandez-${a}.pdf`,
                children: Be.t("download"),
              }),
            ],
          }),
        ],
      });
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(zO, {
          color: "default",
          sx: { boxShadow: 0 },
          children: S.jsx(UA, {
            maxWidth: "xl",
            children: S.jsxs(nL, {
              disableGutters: !0,
              children: [
                S.jsx(Ry, {}),
                S.jsx(Tn, {
                  sx: { flexGrow: 1, display: { xs: "none", md: "flex" } },
                  children: Oy.map((g) =>
                    S.jsx(
                      sa,
                      {
                        to: `${My}${g}`,
                        color: "inherit",
                        relative: "path",
                        children: S.jsx(
                          kn,
                          {
                            color: "inherit",
                            style: { textTransform: "none" },
                            children: Be.t(g + ".title"),
                          },
                          g
                        ),
                      },
                      g
                    )
                  ),
                }),
                S.jsxs(Tn, {
                  sx: { flexGrow: 0, display: "flex", marginLeft: { xs: 15 } },
                  children: [
                    S.jsx(gs, {
                      children: S.jsx(kn, {
                        variant: "outlined",
                        color: "secondary",
                        sx: {
                          display: { xs: "none", md: "flex" },
                          textTransform: "none",
                        },
                        size: "small",
                        href: `${jt}/files/resume-victor-hernandez-${a}.pdf`,
                        children: Be.t("download"),
                      }),
                    }),
                    S.jsx(gs, {
                      size: "large",
                      "aria-label": "show more",
                      "aria-controls": d,
                      "aria-haspopup": "true",
                      onClick: c,
                      color: "inherit",
                      children: S.jsx(Fr, {
                        alt: "Language",
                        src: `${jt}/images/icons/locale.svg`,
                      }),
                    }),
                    S.jsx(gs, {
                      size: "small",
                      "aria-controls": "menu-appbar",
                      "aria-haspopup": "true",
                      onClick: u,
                      color: "inherit",
                      sx: { display: { xs: "block", md: "none" } },
                      children: S.jsx(qw, {}),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        S.jsx("nav", {
          children: S.jsx(WN, {
            variant: "temporary",
            open: e,
            onClose: u,
            ModalProps: { keepMounted: !0 },
            sx: {
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
            },
            children: b,
          }),
        }),
        f,
      ],
    });
  },
  cK = ({ data: e }) =>
    S.jsx(it, {
      direction: { xs: "row", md: "column" },
      sx: { position: "fixed", bottom: "10px", right: "10px", zIndex: 1e3 },
      children: e.map((t, n) =>
        S.jsx(
          "div",
          {
            className: "floating-button",
            children: S.jsx(sa, {
              to: t.url,
              children: S.jsx(Fr, {
                sx: { display: "flex", mr: 1, height: 30, width: 30 },
                alt: "A",
                src: `${jt}/images/icons/${t.icon}`,
              }),
            }),
          },
          `${t.title}-${n}`
        )
      ),
    }),
  Ao = ({ children: e }) => {
    const t = Be.t("resume.contact_info");
    return S.jsxs(Tn, {
      sx: { margin: "lg" },
      children: [
        S.jsx(lK, {}),
        S.jsx("div", { style: { marginTop: "80px" }, children: e }),
        S.jsx(cK, { data: t.slice(2) }),
        S.jsx(Tn, {
          sx: { display: "flex", justifyContent: "center", marginTop: 2 },
          children: S.jsxs(kn, {
            color: "secondary",
            variant: "contained",
            size: "small",
            children: ["version: ", wL],
          }),
        }),
      ],
    });
  };
var qm = {},
  uK = sd;
Object.defineProperty(qm, "__esModule", { value: !0 });
var nC = (qm.default = void 0),
  dK = uK(Yw()),
  fK = S;
nC = qm.default = (0, dK.default)(
  (0, fK.jsx)("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  }),
  "Close"
);
const pK = ({ open: e, payload: t, onClose: n }) =>
    S.jsxs(aN, {
      open: e,
      onClose: n,
      maxWidth: "sm",
      fullWidth: !0,
      children: [
        S.jsx(PN, {
          children: S.jsxs(it, {
            direction: "row",
            spacing: 1,
            alignItems: "center",
            justifyContent: "space-between",
            children: [
              S.jsxs(it, {
                direction: "row",
                spacing: 1,
                alignItems: "center",
                children: [
                  (t != null && t.companyImages && t.companyImages.length > 0
                    ? t.companyImages
                    : t != null && t.companyImage
                      ? [t.companyImage]
                      : []
                  ).map((r, o) =>
                    S.jsx(
                      Tn,
                      {
                        sx: {
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: 60,
                          maxWidth: 140,
                          maxHeight: 42,
                          transition:
                            "transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": { transform: "scale(1.05)" },
                        },
                        children: S.jsx("img", {
                          src: `${jt}/images/${r}`,
                          alt: t == null ? void 0 : t.companyName,
                          style: {
                            width: "100%",
                            height: "100%",
                            maxWidth: 140,
                            maxHeight: 42,
                            objectFit: "contain",
                          },
                        }),
                      },
                      `${r}-${o}`
                    )
                  ),
                  S.jsxs("div", {
                    children: [
                      S.jsx(oe, {
                        variant: "h6",
                        children: t == null ? void 0 : t.project.title,
                      }),
                      S.jsx(oe, {
                        variant: "body2",
                        color: "text.secondary",
                        children: t == null ? void 0 : t.companyName,
                      }),
                    ],
                  }),
                ],
              }),
              S.jsx(gs, {
                "aria-label": "close",
                onClick: n,
                size: "small",
                children: S.jsx(nC, {}),
              }),
            ],
          }),
        }),
        S.jsxs(wN, {
          dividers: !0,
          children: [
            S.jsx(oe, {
              paragraph: !0,
              children: t == null ? void 0 : t.project.description,
            }),
            S.jsx(it, {
              direction: "row",
              spacing: 1,
              flexWrap: "wrap",
              children:
                t == null
                  ? void 0
                  : t.project.tech_stack.map((r) => {
                      const o = eC(r.name, r.icon);
                      return S.jsxs(
                        it,
                        {
                          alignItems: "center",
                          spacing: 0.5,
                          sx: { m: 0.5, minWidth: 64 },
                          children: [
                            S.jsx(QD, {
                              title: r.name,
                              arrow: !0,
                              children: S.jsx(gs, {
                                sx: {
                                  backgroundColor: "#ffffffad",
                                  borderRadius: "8px",
                                  width: 44,
                                  height: 44,
                                },
                                children: S.jsx("img", {
                                  src: `${jt}/images/icons/${o}`,
                                  height: 24,
                                  width: 24,
                                  alt: r.name,
                                }),
                              }),
                            }),
                            S.jsx(oe, {
                              variant: "caption",
                              color: "text.secondary",
                              textAlign: "center",
                              children: r.name,
                            }),
                          ],
                        },
                        r.name
                      );
                    }),
            }),
            (t == null ? void 0 : t.project.modal_details) &&
              t.project.modal_details.length > 0 &&
              S.jsx(On, {
                container: !0,
                spacing: 2,
                sx: { mt: 2 },
                children: t.project.modal_details.map((r, o) =>
                  S.jsx(
                    On,
                    {
                      item: !0,
                      xs: 12,
                      children: S.jsxs(jw, {
                        variant: "outlined",
                        children: [
                          S.jsx(BA, {
                            component: "img",
                            image: `${jt}/images/${r.image}`,
                            alt: t.project.title,
                            sx: {
                              width: "100%",
                              maxHeight: 260,
                              objectFit: "contain",
                              backgroundColor: "#f7f7f7",
                            },
                          }),
                          S.jsx(Dw, {
                            children: S.jsx(oe, {
                              variant: "body2",
                              color: "text.secondary",
                              children: r.description,
                            }),
                          }),
                        ],
                      }),
                    },
                    `${r.image}-${o}`
                  )
                ),
              }),
          ],
        }),
        S.jsxs(fN, {
          children: [
            S.jsx(kn, { onClick: n, children: "Close" }),
            (t == null ? void 0 : t.project.url) &&
              S.jsx(kn, {
                onClick: () => window.open(t.project.url, "_blank"),
                variant: "contained",
                children: "Visit project",
              }),
          ],
        }),
      ],
    }),
  hK = ({
    projects: e,
    companyImage: t,
    companyImages: n,
    companyName: r,
    companyUrl: o,
    onOpen: i,
  }) =>
    e.map((a, s) =>
      S.jsx(
        On,
        {
          item: !0,
          xs: 12,
          md: 6,
          lg: 4,
          children: S.jsx(aK, {
            data: a,
            companyImage: t,
            companyImages: n,
            companyName: r,
            companyUrl: o,
            onOpen: i,
          }),
        },
        s
      )
    );
function xf() {
  yd();
  const [e, t] = $.useState(null),
    r = (Be.t("resume.work_history") || [])
      .map((o, i) => ({ ...o, _origIndex: i }))
      .filter((o) => o.show_on_home !== !1)
      .sort((o, i) => {
        const a = o.home_order ?? o._origIndex,
          s = i.home_order ?? i._origIndex;
        return a !== s ? a - s : o._origIndex - i._origIndex;
      });
  return S.jsxs(Ao, {
    children: [
      S.jsx(On, {
        container: !0,
        spacing: 3,
        children:
          r &&
          (r == null
            ? void 0
            : r.map((o, i) => {
                var a, s;
                return S.jsx(
                  hK,
                  {
                    projects: o.achievements,
                    companyImage: Array.isArray(o.company_image)
                      ? o.company_image[0]
                      : o.company_image,
                    companyImages: Array.isArray(o.company_image)
                      ? o.company_image
                      : o.company_image
                        ? [o.company_image]
                        : [],
                    companyName: o.company,
                    companyUrl:
                      (s = (a = o.achievements) == null ? void 0 : a[0]) == null
                        ? void 0
                        : s.url,
                    onOpen: (l) => t(l),
                  },
                  `${o.company}-${i}`
                );
              })),
      }),
      S.jsx(pK, { open: !!e, payload: e, onClose: () => t(null) }),
    ],
  });
}
function $e(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
        t === "[object Number]" ||
        typeof e == "string" ||
        t === "[object String]"
      ? new Date(e)
      : new Date(NaN);
}
function nr(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function mK(e, t) {
  const n = $e(e);
  return isNaN(t) ? nr(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function gK(e, t) {
  const n = $e(e);
  if (isNaN(t)) return nr(e, NaN);
  if (!t) return n;
  const r = n.getDate(),
    o = nr(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const i = o.getDate();
  return r >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r), n);
}
function qa(e, t) {
  const {
      years: n = 0,
      months: r = 0,
      weeks: o = 0,
      days: i = 0,
      hours: a = 0,
      minutes: s = 0,
      seconds: l = 0,
    } = t,
    c = $e(e),
    u = r || n ? gK(c, r + n * 12) : c,
    d = i || o ? mK(u, i + o * 7) : u,
    f = s + a * 60,
    g = (l + f * 60) * 1e3;
  return nr(e, d.getTime() + g);
}
const rC = 6048e5,
  vK = 864e5,
  Qm = 6e4,
  Xm = 36e5;
let yK = {};
function gl() {
  return yK;
}
function qs(e, t) {
  var s, l, c, u;
  const n = gl(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((u = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : u.weekStartsOn) ??
      0,
    o = $e(e),
    i = o.getDay(),
    a = (i < r ? 7 : 0) + i - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function su(e) {
  return qs(e, { weekStartsOn: 1 });
}
function oC(e) {
  const t = $e(e),
    n = t.getFullYear(),
    r = nr(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = su(r),
    i = nr(e, 0);
  i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
  const a = su(i);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
      ? n
      : n - 1;
}
function Iy(e) {
  const t = $e(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ay(e) {
  const t = $e(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function iC(e, t) {
  const n = Iy(e),
    r = Iy(t),
    o = +n - Ay(n),
    i = +r - Ay(r);
  return Math.round((o - i) / vK);
}
function xK(e) {
  const t = oC(e),
    n = nr(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), su(n);
}
function bs(e, t) {
  const n = $e(e),
    r = $e(t),
    o = n.getTime() - r.getTime();
  return o < 0 ? -1 : o > 0 ? 1 : o;
}
function bK(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function wK(e) {
  if (!bK(e) && typeof e != "number") return !1;
  const t = $e(e);
  return !isNaN(Number(t));
}
function SK(e, t) {
  const n = $e(e),
    r = $e(t),
    o = n.getFullYear() - r.getFullYear(),
    i = n.getMonth() - r.getMonth();
  return o * 12 + i;
}
function CK(e, t) {
  const n = $e(e),
    r = $e(t);
  return n.getFullYear() - r.getFullYear();
}
function $K(e, t) {
  const n = $e(e),
    r = $e(t),
    o = Ny(n, r),
    i = Math.abs(iC(n, r));
  n.setDate(n.getDate() - o * i);
  const a = +(Ny(n, r) === -o),
    s = o * (i - a);
  return s === 0 ? 0 : s;
}
function Ny(e, t) {
  const n =
    e.getFullYear() - t.getFullYear() ||
    e.getMonth() - t.getMonth() ||
    e.getDate() - t.getDate() ||
    e.getHours() - t.getHours() ||
    e.getMinutes() - t.getMinutes() ||
    e.getSeconds() - t.getSeconds() ||
    e.getMilliseconds() - t.getMilliseconds();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function Jm(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function Zm(e, t) {
  return +$e(e) - +$e(t);
}
function _K(e, t, n) {
  const r = Zm(e, t) / Xm;
  return Jm(n == null ? void 0 : n.roundingMethod)(r);
}
function PK(e, t, n) {
  const r = Zm(e, t) / Qm;
  return Jm(n == null ? void 0 : n.roundingMethod)(r);
}
function EK(e) {
  const t = $e(e);
  return t.setHours(23, 59, 59, 999), t;
}
function kK(e) {
  const t = $e(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function RK(e) {
  const t = $e(e);
  return +EK(t) == +kK(t);
}
function TK(e, t) {
  const n = $e(e),
    r = $e(t),
    o = bs(n, r),
    i = Math.abs(SK(n, r));
  let a;
  if (i < 1) a = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30),
      n.setMonth(n.getMonth() - o * i);
    let s = bs(n, r) === -o;
    RK($e(e)) && i === 1 && bs(e, r) === 1 && (s = !1),
      (a = o * (i - Number(s)));
  }
  return a === 0 ? 0 : a;
}
function OK(e, t, n) {
  const r = Zm(e, t) / 1e3;
  return Jm(n == null ? void 0 : n.roundingMethod)(r);
}
function MK(e, t) {
  const n = $e(e),
    r = $e(t),
    o = bs(n, r),
    i = Math.abs(CK(n, r));
  n.setFullYear(1584), r.setFullYear(1584);
  const a = bs(n, r) === -o,
    s = o * (i - +a);
  return s === 0 ? 0 : s;
}
function IK(e) {
  const t = $e(e),
    n = nr(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const AK = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  NK = (e, t, n) => {
    let r;
    const o = AK[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
          ? (r = o.one)
          : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function bf(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const jK = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  DK = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  LK = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  FK = {
    date: bf({ formats: jK, defaultWidth: "full" }),
    time: bf({ formats: DK, defaultWidth: "full" }),
    dateTime: bf({ formats: LK, defaultWidth: "full" }),
  },
  zK = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  BK = (e, t, n, r) => zK[e];
function Qa(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth,
        s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const WK = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  UK = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  HK = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  VK = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  GK = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  KK = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  YK = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  qK = {
    ordinalNumber: YK,
    era: Qa({ values: WK, defaultWidth: "wide" }),
    quarter: Qa({
      values: UK,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Qa({ values: HK, defaultWidth: "wide" }),
    day: Qa({ values: VK, defaultWidth: "wide" }),
    dayPeriod: Qa({
      values: GK,
      defaultWidth: "wide",
      formattingValues: KK,
      defaultFormattingWidth: "wide",
    }),
  };
function Xa(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(o);
    if (!i) return null;
    const a = i[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s) ? XK(s, (d) => d.test(a)) : QK(s, (d) => d.test(a));
    let c;
    (c = e.valueCallback ? e.valueCallback(l) : l),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    const u = t.slice(a.length);
    return { value: c, rest: u };
  };
}
function QK(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function XK(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function JK(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const s = t.slice(o.length);
    return { value: a, rest: s };
  };
}
const ZK = /^(\d+)(th|st|nd|rd)?/i,
  eY = /\d+/i,
  tY = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  nY = { any: [/^b/i, /^(a|c)/i] },
  rY = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  oY = { any: [/1/i, /2/i, /3/i, /4/i] },
  iY = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  aY = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  sY = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  lY = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  cY = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  uY = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  dY = {
    ordinalNumber: JK({
      matchPattern: ZK,
      parsePattern: eY,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Xa({
      matchPatterns: tY,
      defaultMatchWidth: "wide",
      parsePatterns: nY,
      defaultParseWidth: "any",
    }),
    quarter: Xa({
      matchPatterns: rY,
      defaultMatchWidth: "wide",
      parsePatterns: oY,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Xa({
      matchPatterns: iY,
      defaultMatchWidth: "wide",
      parsePatterns: aY,
      defaultParseWidth: "any",
    }),
    day: Xa({
      matchPatterns: sY,
      defaultMatchWidth: "wide",
      parsePatterns: lY,
      defaultParseWidth: "any",
    }),
    dayPeriod: Xa({
      matchPatterns: cY,
      defaultMatchWidth: "any",
      parsePatterns: uY,
      defaultParseWidth: "any",
    }),
  },
  aC = {
    code: "en-US",
    formatDistance: NK,
    formatLong: FK,
    formatRelative: BK,
    localize: qK,
    match: dY,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function fY(e) {
  const t = $e(e);
  return iC(t, IK(t)) + 1;
}
function pY(e) {
  const t = $e(e),
    n = +su(t) - +xK(t);
  return Math.round(n / rC) + 1;
}
function sC(e, t) {
  var u, d, f, b;
  const n = $e(e),
    r = n.getFullYear(),
    o = gl(),
    i =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((b = (f = o.locale) == null ? void 0 : f.options) == null
        ? void 0
        : b.firstWeekContainsDate) ??
      1,
    a = nr(e, 0);
  a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
  const s = qs(a, t),
    l = nr(e, 0);
  l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
  const c = qs(l, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
      ? r
      : r - 1;
}
function hY(e, t) {
  var s, l, c, u;
  const n = gl(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((u = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : u.firstWeekContainsDate) ??
      1,
    o = sC(e, t),
    i = nr(e, 0);
  return i.setFullYear(o, 0, r), i.setHours(0, 0, 0, 0), qs(i, t);
}
function mY(e, t) {
  const n = $e(e),
    r = +qs(n, t) - +hY(n, t);
  return Math.round(r / rC) + 1;
}
function Ne(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const qr = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return Ne(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : Ne(n + 1, 2);
    },
    d(e, t) {
      return Ne(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return Ne(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return Ne(e.getHours(), t.length);
    },
    m(e, t) {
      return Ne(e.getMinutes(), t.length);
    },
    s(e, t) {
      return Ne(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        o = Math.trunc(r * Math.pow(10, n - 3));
      return Ne(o, t.length);
    },
  },
  gi = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  jy = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          o = r > 0 ? r : 1 - r;
        return n.ordinalNumber(o, { unit: "year" });
      }
      return qr.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = sC(e, r),
        i = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const a = i % 100;
        return Ne(a, 2);
      }
      return t === "Yo"
        ? n.ordinalNumber(i, { unit: "year" })
        : Ne(i, t.length);
    },
    R: function (e, t) {
      const n = oC(e);
      return Ne(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return Ne(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return Ne(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return Ne(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return qr.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return Ne(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const o = mY(e, r);
      return t === "wo"
        ? n.ordinalNumber(o, { unit: "week" })
        : Ne(o, t.length);
    },
    I: function (e, t, n) {
      const r = pY(e);
      return t === "Io"
        ? n.ordinalNumber(r, { unit: "week" })
        : Ne(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : qr.d(e, t);
    },
    D: function (e, t, n) {
      const r = fY(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : Ne(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const o = e.getDay(),
        i = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(i);
        case "ee":
          return Ne(i, 2);
        case "eo":
          return n.ordinalNumber(i, { unit: "day" });
        case "eee":
          return n.day(o, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(o, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(o, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(o, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const o = e.getDay(),
        i = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(i);
        case "cc":
          return Ne(i, t.length);
        case "co":
          return n.ordinalNumber(i, { unit: "day" });
        case "ccc":
          return n.day(o, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(o, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(o, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(o, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        o = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(o);
        case "ii":
          return Ne(o, t.length);
        case "io":
          return n.ordinalNumber(o, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const o = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r === 12
          ? (o = gi.noon)
          : r === 0
            ? (o = gi.midnight)
            : (o = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(o, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let o;
      switch (
        (r >= 17
          ? (o = gi.evening)
          : r >= 12
            ? (o = gi.afternoon)
            : r >= 4
              ? (o = gi.morning)
              : (o = gi.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(o, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(o, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return qr.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : qr.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko"
        ? n.ordinalNumber(r, { unit: "hour" })
        : Ne(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ne(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : qr.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : qr.s(e, t);
    },
    S: function (e, t) {
      return qr.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Ly(r);
        case "XXXX":
        case "XX":
          return Io(r);
        case "XXXXX":
        case "XXX":
        default:
          return Io(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Ly(r);
        case "xxxx":
        case "xx":
          return Io(r);
        case "xxxxx":
        case "xxx":
        default:
          return Io(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Dy(r, ":");
        case "OOOO":
        default:
          return "GMT" + Io(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Dy(r, ":");
        case "zzzz":
        default:
          return "GMT" + Io(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return Ne(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return Ne(r, t.length);
    },
  };
function Dy(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    i = r % 60;
  return i === 0 ? n + String(o) : n + String(o) + t + Ne(i, 2);
}
function Ly(e, t) {
  return e % 60 === 0
    ? (e > 0 ? "-" : "+") + Ne(Math.abs(e) / 60, 2)
    : Io(e, t);
}
function Io(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Ne(Math.trunc(r / 60), 2),
    i = Ne(r % 60, 2);
  return n + o + t + i;
}
const Fy = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  lC = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  gY = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return Fy(e, t);
    let i;
    switch (r) {
      case "P":
        i = t.dateTime({ width: "short" });
        break;
      case "PP":
        i = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        i = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        i = t.dateTime({ width: "full" });
        break;
    }
    return i.replace("{{date}}", Fy(r, t)).replace("{{time}}", lC(o, t));
  },
  vY = { p: lC, P: gY },
  yY = /^D+$/,
  xY = /^Y+$/,
  bY = ["D", "DD", "YY", "YYYY"];
function wY(e) {
  return yY.test(e);
}
function SY(e) {
  return xY.test(e);
}
function CY(e, t, n) {
  const r = $Y(e, t, n);
  if ((console.warn(r), bY.includes(e))) throw new RangeError(r);
}
function $Y(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const _Y = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  PY = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  EY = /^'([^]*?)'?$/,
  kY = /''/g,
  RY = /[a-zA-Z]/;
function lu(e, t, n) {
  var u, d, f, b, g, x, P, m;
  const r = gl(),
    o = (n == null ? void 0 : n.locale) ?? r.locale ?? aC,
    i =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((b = (f = r.locale) == null ? void 0 : f.options) == null
        ? void 0
        : b.firstWeekContainsDate) ??
      1,
    a =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((x = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) ==
      null
        ? void 0
        : x.weekStartsOn) ??
      r.weekStartsOn ??
      ((m = (P = r.locale) == null ? void 0 : P.options) == null
        ? void 0
        : m.weekStartsOn) ??
      0,
    s = $e(e);
  if (!wK(s)) throw new RangeError("Invalid time value");
  let l = t
    .match(PY)
    .map((p) => {
      const v = p[0];
      if (v === "p" || v === "P") {
        const _ = vY[v];
        return _(p, o.formatLong);
      }
      return p;
    })
    .join("")
    .match(_Y)
    .map((p) => {
      if (p === "''") return { isToken: !1, value: "'" };
      const v = p[0];
      if (v === "'") return { isToken: !1, value: TY(p) };
      if (jy[v]) return { isToken: !0, value: p };
      if (v.match(RY))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            v +
            "`"
        );
      return { isToken: !1, value: p };
    });
  o.localize.preprocessor && (l = o.localize.preprocessor(s, l));
  const c = { firstWeekContainsDate: i, weekStartsOn: a, locale: o };
  return l
    .map((p) => {
      if (!p.isToken) return p.value;
      const v = p.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && SY(v)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && wY(v))) &&
        CY(v, t, String(e));
      const _ = jy[v[0]];
      return _(s, v, o.localize, c);
    })
    .join("");
}
function TY(e) {
  const t = e.match(EY);
  return t ? t[1].replace(kY, "'") : e;
}
const OY = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"];
function cC(e, t) {
  const n = gl(),
    r = (t == null ? void 0 : t.locale) ?? n.locale ?? aC,
    o = (t == null ? void 0 : t.format) ?? OY,
    i = (t == null ? void 0 : t.zero) ?? !1,
    a = (t == null ? void 0 : t.delimiter) ?? " ";
  return r.formatDistance
    ? o
        .reduce((l, c) => {
          const u = `x${c.replace(/(^.)/, (f) => f.toUpperCase())}`,
            d = e[c];
          return d !== void 0 && (i || e[c])
            ? l.concat(r.formatDistance(u, d))
            : l;
        }, [])
        .join(a)
    : "";
}
function uC(e) {
  const t = $e(e.start),
    n = $e(e.end),
    r = {},
    o = MK(n, t);
  o && (r.years = o);
  const i = qa(t, { years: r.years }),
    a = TK(n, i);
  a && (r.months = a);
  const s = qa(i, { months: r.months }),
    l = $K(n, s);
  l && (r.days = l);
  const c = qa(s, { days: r.days }),
    u = _K(n, c);
  u && (r.hours = u);
  const d = qa(c, { hours: r.hours }),
    f = PK(n, d);
  f && (r.minutes = f);
  const b = qa(d, { minutes: r.minutes }),
    g = OK(n, b);
  return g && (r.seconds = g), r;
}
function oo(e, t) {
  const n = (t == null ? void 0 : t.additionalDigits) ?? 2,
    r = NY(e);
  let o;
  if (r.date) {
    const l = jY(r.date, n);
    o = DY(l.restDateString, l.year);
  }
  if (!o || isNaN(o.getTime())) return new Date(NaN);
  const i = o.getTime();
  let a = 0,
    s;
  if (r.time && ((a = LY(r.time)), isNaN(a))) return new Date(NaN);
  if (r.timezone) {
    if (((s = FY(r.timezone)), isNaN(s))) return new Date(NaN);
  } else {
    const l = new Date(i + a),
      c = new Date(0);
    return (
      c.setFullYear(l.getUTCFullYear(), l.getUTCMonth(), l.getUTCDate()),
      c.setHours(
        l.getUTCHours(),
        l.getUTCMinutes(),
        l.getUTCSeconds(),
        l.getUTCMilliseconds()
      ),
      c
    );
  }
  return new Date(i + a + s);
}
const ec = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  MY = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  IY =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  AY = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function NY(e) {
  const t = {},
    n = e.split(ec.dateTimeDelimiter);
  let r;
  if (n.length > 2) return t;
  if (
    (/:/.test(n[0])
      ? (r = n[0])
      : ((t.date = n[0]),
        (r = n[1]),
        ec.timeZoneDelimiter.test(t.date) &&
          ((t.date = e.split(ec.timeZoneDelimiter)[0]),
          (r = e.substr(t.date.length, e.length)))),
    r)
  ) {
    const o = ec.timezone.exec(r);
    o ? ((t.time = r.replace(o[1], "")), (t.timezone = o[1])) : (t.time = r);
  }
  return t;
}
function jY(e, t) {
  const n = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + t) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + t) +
        "})$)"
    ),
    r = e.match(n);
  if (!r) return { year: NaN, restDateString: "" };
  const o = r[1] ? parseInt(r[1]) : null,
    i = r[2] ? parseInt(r[2]) : null;
  return {
    year: i === null ? o : i * 100,
    restDateString: e.slice((r[1] || r[2]).length),
  };
}
function DY(e, t) {
  if (t === null) return new Date(NaN);
  const n = e.match(MY);
  if (!n) return new Date(NaN);
  const r = !!n[4],
    o = Ja(n[1]),
    i = Ja(n[2]) - 1,
    a = Ja(n[3]),
    s = Ja(n[4]),
    l = Ja(n[5]) - 1;
  if (r) return HY(t, s, l) ? zY(t, s, l) : new Date(NaN);
  {
    const c = new Date(0);
    return !WY(t, i, a) || !UY(t, o)
      ? new Date(NaN)
      : (c.setUTCFullYear(t, i, Math.max(o, a)), c);
  }
}
function Ja(e) {
  return e ? parseInt(e) : 1;
}
function LY(e) {
  const t = e.match(IY);
  if (!t) return NaN;
  const n = wf(t[1]),
    r = wf(t[2]),
    o = wf(t[3]);
  return VY(n, r, o) ? n * Xm + r * Qm + o * 1e3 : NaN;
}
function wf(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function FY(e) {
  if (e === "Z") return 0;
  const t = e.match(AY);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1,
    r = parseInt(t[2]),
    o = (t[3] && parseInt(t[3])) || 0;
  return GY(r, o) ? n * (r * Xm + o * Qm) : NaN;
}
function zY(e, t, n) {
  const r = new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const o = r.getUTCDay() || 7,
    i = (t - 1) * 7 + n + 1 - o;
  return r.setUTCDate(r.getUTCDate() + i), r;
}
const BY = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function dC(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function WY(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (BY[t] || (dC(e) ? 29 : 28));
}
function UY(e, t) {
  return t >= 1 && t <= (dC(e) ? 366 : 365);
}
function HY(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function VY(e, t, n) {
  return e === 24
    ? t === 0 && n === 0
    : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function GY(e, t) {
  return t >= 0 && t <= 59;
}
function zy() {
  var a;
  const { setLanguage: e, language: t } = yd(),
    n = Be.t("resume"),
    r = (s) => {
      e(s);
    },
    o = (s) => {
      let l = "";
      for (let c = 0; c < s; c++) l += "★";
      return S.jsxs("span", { children: [" ", l, " "] });
    },
    i =
      (a = n == null ? void 0 : n.work_history) == null
        ? void 0
        : a.map((s) => {
            var l, c;
            return S.jsxs(
              wo,
              {
                elevation: 0,
                style: { padding: "20px", marginBottom: "20px" },
                children: [
                  S.jsxs(it, {
                    direction: "row",
                    spacing: 3,
                    sx: { flexGrow: 1 },
                    children: [
                      S.jsxs("div", {
                        children: [
                          S.jsxs(oe, {
                            variant: "subtitle1",
                            children: [
                              lu(oo(s.start_date), "MMM, yy"),
                              " - ",
                              lu(
                                s.end_date ? oo(s.end_date) : new Date(),
                                "MMM,yy",
                                {}
                              ),
                            ],
                          }),
                          S.jsx(oe, {
                            variant: "subtitle1",
                            children: cC(
                              uC({
                                start: oo(s.start_date),
                                end: s.end_date ? oo(s.end_date) : new Date(),
                              }),
                              { format: ["years", "months"] }
                            ),
                          }),
                        ],
                      }),
                      S.jsxs("div", {
                        children: [
                          S.jsx(oe, { variant: "h5", children: s.position }),
                          S.jsx(oe, { variant: "h6", children: s.company }),
                        ],
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    style: { marginLeft: "140px" },
                    children: [
                      S.jsxs("div", {
                        children: [
                          S.jsx(oe, { children: s.description }),
                          S.jsx("ul", {
                            children:
                              (l = s == null ? void 0 : s.tasks) == null
                                ? void 0
                                : l.map((u, d) =>
                                    S.jsx("li", { children: u }, d)
                                  ),
                          }),
                        ],
                      }),
                      S.jsx("div", {
                        children:
                          (c = s.achievements) == null
                            ? void 0
                            : c.map((u, d) =>
                                S.jsxs(
                                  oe,
                                  {
                                    paragraph: !0,
                                    children: [
                                      S.jsx("a", {
                                        href: u.url,
                                        className: "h5",
                                        children: u == null ? void 0 : u.title,
                                      }),
                                      " | ",
                                      u.description,
                                    ],
                                  },
                                  d
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              },
              s.position
            );
          });
  return S.jsxs(Tn, {
    sx: { padding: 0, margin: 0 },
    children: [
      S.jsxs(On, {
        container: !0,
        spacing: 3,
        children: [
          S.jsx(On, {
            item: !0,
            xs: 12,
            sx: { backgroundColor: "#343a40" },
            children: S.jsxs(Ys, {
              children: [
                S.jsx(Vw, {
                  children: S.jsx(Fr, {
                    sx: {
                      display: "flex",
                      mr: 5,
                      flexGrow: 1,
                      width: 90,
                      height: 90,
                    },
                    alt: "A",
                    src: `${jt}/images/norellanac.jpg`,
                  }),
                }),
                S.jsx(Mm, {
                  children: S.jsxs("div", {
                    style: { flex: 1 },
                    children: [
                      S.jsx(oe, {
                        variant: "h4",
                        color: "lightgrey",
                        children: Be.t("resume.full_name"),
                      }),
                      S.jsx(oe, {
                        variant: "h6",
                        color: "lightgrey",
                        children: Be.t("resume.position"),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          S.jsxs(On, {
            item: !0,
            xs: 9,
            children: [
              S.jsx("section", {
                children: S.jsx(oe, { paragraph: !0, children: n.summary }),
              }),
              S.jsxs("section", {
                children: [
                  S.jsx(oe, {
                    variant: "h5",
                    children: Be.t("resume.experience"),
                  }),
                  S.jsx("hr", {}),
                  i,
                ],
              }),
              S.jsxs("section", {
                children: [
                  S.jsx(oe, {
                    variant: "h5",
                    children: Be.t("resume.education"),
                  }),
                  S.jsx("hr", {}),
                  S.jsxs(it, {
                    direction: "row",
                    spacing: 3,
                    children: [
                      S.jsxs("div", {
                        children: [
                          S.jsx(oe, { children: n.university.start_date }),
                          S.jsx(oe, { children: n.university.end_date }),
                        ],
                      }),
                      S.jsxs("div", {
                        children: [
                          S.jsx(oe, {
                            variant: "h5",
                            children: n.university.title,
                          }),
                          S.jsx(oe, {
                            variant: "h6",
                            children: n.university.school,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          S.jsxs(On, {
            item: !0,
            xs: 3,
            children: [
              S.jsxs("section", {
                style: { marginBottom: "5em" },
                children: [
                  S.jsx(oe, {
                    variant: "h5",
                    children: Be.t("resume.contact"),
                  }),
                  S.jsx("hr", {}),
                  S.jsx(it, {
                    direction: "column",
                    spacing: 1,
                    children: n.contact_info.map((s, l) =>
                      S.jsx(
                        Ys,
                        {
                          component: "div",
                          disablePadding: !0,
                          children: S.jsx(sa, { to: s.url, children: s.title }),
                        },
                        l
                      )
                    ),
                  }),
                ],
              }),
              S.jsxs("section", {
                style: { marginBottom: "5em" },
                children: [
                  S.jsx(oe, {
                    variant: "h5",
                    children: Be.t("resume.languages_title"),
                  }),
                  S.jsx("hr", {}),
                  S.jsx(it, {
                    direction: "column",
                    spacing: 1,
                    children: n.languages.map((s, l) =>
                      S.jsxs(
                        oe,
                        {
                          variant: "h6",
                          children: [s.language, " | ", s.level],
                        },
                        l
                      )
                    ),
                  }),
                ],
              }),
              S.jsxs("section", {
                style: { marginBottom: "5em" },
                children: [
                  S.jsx(oe, { variant: "h5", children: "Skills" }),
                  S.jsx("hr", {}),
                  n.tech_skills.map((s, l) =>
                    S.jsxs(
                      "section",
                      {
                        style: { marginBottom: 30 },
                        children: [
                          S.jsxs(oe, {
                            variant: "h6",
                            children: [s.title, o(s.stars)],
                          }),
                          S.jsx(it, {
                            display: "inline",
                            spacing: 1,
                            children: s.tools.map((c, u) =>
                              S.jsxs(
                                oe,
                                {
                                  variant: "body2",
                                  display: "inline-block",
                                  children: [c, " |"],
                                },
                                u
                              )
                            ),
                          }),
                        ],
                      },
                      l
                    )
                  ),
                ],
              }),
            ],
          }),
        ],
      }),
      S.jsx(it, {
        direction: { xs: "row", md: "column" },
        sx: {
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 1e3,
          display: { print: "none" },
        },
        children: S.jsx(kn, {
          onClick: () => r(t === "en" ? "es" : "en"),
          sx: { display: { print: "none" } },
          children: S.jsx(Fr, {
            sx: { display: { print: "none" }, mr: 1, height: 30, width: 30 },
            alt: "A",
            src: `${jt}/images/icons/locale.svg`,
          }),
        }),
      }),
    ],
  });
}
function By() {
  var a;
  const { setLanguage: e, language: t } = yd(),
    n = Be.t("resume"),
    r = (s) => {
      e(s);
    },
    o = (s) =>
      S.jsx(Tn, {
        component: "span",
        sx: {
          color: "#f5c518",
          ml: 1,
          fontSize: 18,
          letterSpacing: "0.5px",
          fontWeight: 700,
        },
        "aria-label": `${s} star rating`,
        children: "★".repeat(s),
      }),
    i =
      (a = n == null ? void 0 : n.work_history) == null
        ? void 0
        : a.map((s) => {
            var l, c;
            return S.jsxs(
              wo,
              {
                elevation: 0,
                style: { padding: "20px", marginBottom: "20px" },
                children: [
                  S.jsxs(it, {
                    direction: "row",
                    spacing: 3,
                    sx: { flexGrow: 1 },
                    children: [
                      S.jsxs("div", {
                        children: [
                          S.jsxs(oe, {
                            variant: "subtitle1",
                            children: [
                              lu(oo(s.start_date), "MMM, yy"),
                              " -",
                              " ",
                              lu(
                                s.end_date ? oo(s.end_date) : new Date(),
                                "MMM,yy",
                                {}
                              ),
                            ],
                          }),
                          S.jsx(oe, {
                            variant: "subtitle1",
                            children: cC(
                              uC({
                                start: oo(s.start_date),
                                end: s.end_date ? oo(s.end_date) : new Date(),
                              }),
                              { format: ["years", "months"] }
                            ),
                          }),
                        ],
                      }),
                      S.jsxs("div", {
                        children: [
                          S.jsx(oe, { variant: "h5", children: s.position }),
                          S.jsx(oe, { variant: "h6", children: s.company }),
                        ],
                      }),
                    ],
                  }),
                  S.jsxs("div", {
                    style: { marginLeft: "140px" },
                    children: [
                      S.jsxs("div", {
                        children: [
                          S.jsx(oe, { children: s.description }),
                          S.jsx("ul", {
                            children:
                              (l = s == null ? void 0 : s.tasks) == null
                                ? void 0
                                : l.map((u, d) =>
                                    S.jsx("li", { children: u }, d)
                                  ),
                          }),
                        ],
                      }),
                      S.jsx("div", {
                        children:
                          (c = s.achievements) == null
                            ? void 0
                            : c.map((u, d) =>
                                S.jsxs(
                                  oe,
                                  {
                                    paragraph: !0,
                                    children: [
                                      S.jsx("a", {
                                        href: u.url,
                                        className: "h5",
                                        children: u == null ? void 0 : u.title,
                                      }),
                                      " ",
                                      "| ",
                                      u.description,
                                    ],
                                  },
                                  d
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              },
              s.position
            );
          });
  return S.jsx(Ao, {
    children: S.jsxs(Tn, {
      sx: { padding: 0, margin: 0 },
      children: [
        S.jsxs(On, {
          container: !0,
          spacing: 3,
          children: [
            S.jsx(On, {
              item: !0,
              xs: 12,
              sx: { backgroundColor: "#343a40" },
              children: S.jsxs(Ys, {
                children: [
                  S.jsx(Vw, {
                    children: S.jsx(Fr, {
                      sx: {
                        display: "flex",
                        mr: 5,
                        flexGrow: 1,
                        width: 90,
                        height: 90,
                      },
                      alt: "A",
                      src: `${jt}/images/vic.jpeg`,
                    }),
                  }),
                  S.jsx(Mm, {
                    children: S.jsxs("div", {
                      style: { flex: 1 },
                      children: [
                        S.jsx(oe, {
                          variant: "h4",
                          color: "lightgrey",
                          children: Be.t("resume.full_name"),
                        }),
                        S.jsx(oe, {
                          variant: "h6",
                          color: "lightgrey",
                          children: Be.t("resume.position"),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            S.jsxs(On, {
              item: !0,
              xs: 12,
              md: 9,
              children: [
                S.jsx("section", {
                  children: S.jsx(oe, { paragraph: !0, children: n.summary }),
                }),
                S.jsxs("section", {
                  children: [
                    S.jsx(oe, {
                      variant: "h5",
                      children: Be.t("resume.experience"),
                    }),
                    S.jsx("hr", {}),
                    i,
                  ],
                }),
                S.jsxs("section", {
                  children: [
                    S.jsx(oe, {
                      variant: "h5",
                      children: Be.t("resume.education"),
                    }),
                    S.jsx("hr", {}),
                    S.jsxs(it, {
                      direction: "row",
                      spacing: 3,
                      children: [
                        S.jsxs("div", {
                          children: [
                            S.jsx(oe, { children: n.university.start_date }),
                            S.jsx(oe, { children: n.university.end_date }),
                          ],
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx(oe, {
                              variant: "h5",
                              children: n.university.title,
                            }),
                            S.jsx(oe, {
                              variant: "h6",
                              children: n.university.school,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            S.jsxs(On, {
              item: !0,
              xs: 12,
              md: 3,
              children: [
                S.jsxs("section", {
                  style: { marginBottom: "5em" },
                  children: [
                    S.jsx(oe, {
                      variant: "h5",
                      children: Be.t("resume.contact"),
                    }),
                    S.jsx("hr", {}),
                    S.jsx(it, {
                      direction: "column",
                      spacing: 1,
                      children: n.contact_info.map((s, l) =>
                        S.jsx(
                          Ys,
                          {
                            component: "div",
                            disablePadding: !0,
                            children: S.jsx(sa, {
                              to: s.url,
                              children: s.title,
                            }),
                          },
                          l
                        )
                      ),
                    }),
                  ],
                }),
                S.jsxs("section", {
                  style: { marginBottom: "5em" },
                  children: [
                    S.jsx(oe, {
                      variant: "h5",
                      children: Be.t("resume.languages_title"),
                    }),
                    S.jsx("hr", {}),
                    S.jsx(it, {
                      direction: "column",
                      spacing: 1,
                      children: n.languages.map((s, l) =>
                        S.jsxs(
                          it,
                          {
                            direction: "row",
                            spacing: 1,
                            alignItems: "center",
                            children: [
                              S.jsx(oe, {
                                variant: "h6",
                                children: s.language,
                              }),
                              S.jsx(Tn, {
                                component: "span",
                                sx: {
                                  color: "text.disabled",
                                  fontWeight: 700,
                                  mx: 0.5,
                                },
                                children: "|",
                              }),
                              S.jsx(oe, {
                                variant: "body1",
                                color: "text.secondary",
                                children: s.level,
                              }),
                            ],
                          },
                          l
                        )
                      ),
                    }),
                  ],
                }),
                S.jsxs("section", {
                  style: { marginBottom: "5em" },
                  children: [
                    S.jsx(oe, { variant: "h5", children: "Skills" }),
                    S.jsx("hr", {}),
                    n.tech_skills.map((s, l) =>
                      S.jsxs(
                        "section",
                        {
                          style: { marginBottom: 30 },
                          children: [
                            S.jsxs(oe, {
                              variant: "h6",
                              children: [s.title, o(s.stars)],
                            }),
                            S.jsx(it, {
                              direction: "row",
                              spacing: 1,
                              flexWrap: "wrap",
                              children: s.tools.map((c, u) =>
                                S.jsxs(
                                  it,
                                  {
                                    direction: "row",
                                    spacing: 1,
                                    alignItems: "center",
                                    sx: { mr: 1, mb: 0.5 },
                                    children: [
                                      S.jsx(oe, {
                                        variant: "body2",
                                        children: c,
                                      }),
                                      u < s.tools.length - 1 &&
                                        S.jsx(Tn, {
                                          component: "span",
                                          sx: {
                                            color: "text.disabled",
                                            fontWeight: 700,
                                          },
                                          children: "|",
                                        }),
                                    ],
                                  },
                                  `${c}-${u}`
                                )
                              ),
                            }),
                          ],
                        },
                        l
                      )
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
        S.jsx(it, {
          direction: { xs: "row", md: "column" },
          sx: {
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: 1e3,
            display: { print: "none" },
          },
          children: S.jsx(kn, {
            onClick: () => r(t === "en" ? "es" : "en"),
            children: S.jsx(Fr, {
              sx: { display: "flex", mr: 1, height: 30, width: 30 },
              alt: "A",
              src: `${jt}/images/icons/locale.svg`,
            }),
          }),
        }),
      ],
    }),
  });
}
const KY = q2([
  { path: "/", element: S.jsx(xf, {}) },
  { path: "/portafolio", element: S.jsx(xf, {}) },
  { path: "/portafolio/", element: S.jsx(xf, {}) },
  { path: "/resume", element: S.jsx(By, {}) },
  { path: "/portafolio/resume", element: S.jsx(By, {}) },
  { path: "/printResume", element: S.jsx(zy, {}) },
  { path: "/portafolio/printResume", element: S.jsx(zy, {}) },
  {
    path: "/contact",
    element: S.jsxs(Ao, {
      children: [" ", S.jsx("div", { children: "Contact" })],
    }),
  },
  {
    path: "/terms",
    element: S.jsxs(Ao, {
      children: [" ", S.jsx("div", { children: "Terms and conditions" })],
    }),
  },
  {
    path: "/privacy",
    element: S.jsxs(Ao, {
      children: [" ", S.jsx("div", { children: "Privacy policy" })],
    }),
  },
  {
    path: "/404",
    element: S.jsxs(Ao, {
      children: [" ", S.jsx("div", { children: "Not found" })],
    }),
  },
  {
    path: "*",
    element: S.jsxs(Ao, {
      children: [" ", S.jsx("div", { children: "Not found" })],
    }),
  },
]);
Sf.createRoot(document.getElementById("root")).render(
  S.jsx(Xn.StrictMode, {
    children: S.jsx(sK, { children: S.jsx(rP, { router: KY }) }),
  })
);
