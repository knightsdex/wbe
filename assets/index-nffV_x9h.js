(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = s(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ds(e) {
  const t = Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const U = {},
  it = [],
  Ee = () => {},
  kn = () => !1,
  ss = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ks = (e) => e.startsWith("onUpdate:"),
  ie = Object.assign,
  Ns = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  Br = Object.prototype.hasOwnProperty,
  k = (e, t) => Br.call(e, t),
  M = Array.isArray,
  lt = (e) => ns(e) === "[object Map]",
  Nn = (e) => ns(e) === "[object Set]",
  $ = (e) => typeof e == "function",
  J = (e) => typeof e == "string",
  qe = (e) => typeof e == "symbol",
  V = (e) => e !== null && typeof e == "object",
  Hn = (e) => (V(e) || $(e)) && $(e.then) && $(e.catch),
  jn = Object.prototype.toString,
  ns = (e) => jn.call(e),
  Vr = (e) => ns(e).slice(8, -1),
  Kn = (e) => ns(e) === "[object Object]",
  Hs = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  yt = Ds(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  rs = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  Wr = /-\w/g,
  Ve = rs((e) => e.replace(Wr, (t) => t.slice(1).toUpperCase())),
  qr = /\B([A-Z])/g,
  nt = rs((e) => e.replace(qr, "-$1").toLowerCase()),
  Un = rs((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  _s = rs((e) => (e ? `on${Un(e)}` : "")),
  Be = (e, t) => !Object.is(e, t),
  gs = (e, ...t) => {
    for (let s = 0; s < e.length; s++) e[s](...t);
  },
  Bn = (e, t, s, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: s,
    });
  },
  Yr = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ln;
const os = () =>
  ln ||
  (ln =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function st(e) {
  if (M(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = J(n) ? Xr(n) : st(n);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (J(e) || V(e)) return e;
}
const Jr = /;(?![^(]*\))/g,
  Gr = /:([^]+)/,
  zr = /\/\*[^]*?\*\//g;
function Xr(e) {
  const t = {};
  return (
    e
      .replace(zr, "")
      .split(Jr)
      .forEach((s) => {
        if (s) {
          const n = s.split(Gr);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function ut(e) {
  let t = "";
  if (J(e)) t = e;
  else if (M(e))
    for (let s = 0; s < e.length; s++) {
      const n = ut(e[s]);
      n && (t += n + " ");
    }
  else if (V(e)) for (const s in e) e[s] && (t += s + " ");
  return t.trim();
}
const Zr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Qr = Ds(Zr);
function Vn(e) {
  return !!e || e === "";
}
const Wn = (e) => !!(e && e.__v_isRef === !0),
  Vt = (e) =>
    J(e)
      ? e
      : e == null
      ? ""
      : M(e) || (V(e) && (e.toString === jn || !$(e.toString)))
      ? Wn(e)
        ? Vt(e.value)
        : JSON.stringify(e, qn, 2)
      : String(e),
  qn = (e, t) =>
    Wn(t)
      ? qn(e, t.value)
      : lt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (s, [n, r], o) => ((s[ms(n, o) + " =>"] = r), s),
            {}
          ),
        }
      : Nn(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((s) => ms(s)) }
      : qe(t)
      ? ms(t)
      : V(t) && !M(t) && !Kn(t)
      ? String(t)
      : t,
  ms = (e, t = "") => {
    var s;
    return qe(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
/**
 * @vue/reactivity v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let fe;
class eo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = fe),
      !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = fe;
      try {
        return (fe = this), t();
      } finally {
        fe = s;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = fe), (fe = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((fe = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function to() {
  return fe;
}
let K;
const vs = new WeakSet();
class Yn {
  constructor(t) {
    (this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      fe && fe.active && fe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), vs.has(this) && (vs.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Gn(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    (this.flags |= 2), cn(this), zn(this);
    const t = K,
      s = _e;
    (K = this), (_e = !0);
    try {
      return this.fn();
    } finally {
      Xn(this), (K = t), (_e = s), (this.flags &= -3);
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Us(t);
      (this.deps = this.depsTail = void 0),
        cn(this),
        this.onStop && this.onStop(),
        (this.flags &= -2);
    }
  }
  trigger() {
    this.flags & 64
      ? vs.add(this)
      : this.scheduler
      ? this.scheduler()
      : this.runIfDirty();
  }
  runIfDirty() {
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let Jn = 0,
  xt,
  wt;
function Gn(e, t = !1) {
  if (((e.flags |= 8), t)) {
    (e.next = wt), (wt = e);
    return;
  }
  (e.next = xt), (xt = e);
}
function js() {
  Jn++;
}
function Ks() {
  if (--Jn > 0) return;
  if (wt) {
    let t = wt;
    for (wt = void 0; t; ) {
      const s = t.next;
      (t.next = void 0), (t.flags &= -9), (t = s);
    }
  }
  let e;
  for (; xt; ) {
    let t = xt;
    for (xt = void 0; t; ) {
      const s = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function zn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    (t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t);
}
function Xn(e) {
  let t,
    s = e.depsTail,
    n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Us(n), so(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = r);
  }
  (e.deps = t), (e.depsTail = s);
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Zn(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Zn(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === It) ||
    ((e.globalVersion = It),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !Ts(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    s = K,
    n = _e;
  (K = e), (_e = !0);
  try {
    zn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Be(r, e._value)) &&
      ((e.flags |= 128), (e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    (K = s), (_e = n), Xn(e), (e.flags &= -3);
  }
}
function Us(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (
    (n && ((n.nextSub = r), (e.prevSub = void 0)),
    r && ((r.prevSub = n), (e.nextSub = void 0)),
    s.subs === e && ((s.subs = n), !n && s.computed))
  ) {
    s.computed.flags &= -5;
    for (let o = s.computed.deps; o; o = o.nextDep) Us(o, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function so(e) {
  const { prevDep: t, nextDep: s } = e;
  t && ((t.nextDep = s), (e.prevDep = void 0)),
    s && ((s.prevDep = t), (e.nextDep = void 0));
}
let _e = !0;
const Qn = [];
function $e() {
  Qn.push(_e), (_e = !1);
}
function Pe() {
  const e = Qn.pop();
  _e = e === void 0 ? !0 : e;
}
function cn(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const s = K;
    K = void 0;
    try {
      t();
    } finally {
      K = s;
    }
  }
}
let It = 0;
class no {
  constructor(t, s) {
    (this.sub = t),
      (this.dep = s),
      (this.version = s.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0);
  }
}
class Bs {
  constructor(t) {
    (this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0);
  }
  track(t) {
    if (!K || !_e || K === this.computed) return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== K)
      (s = this.activeLink = new no(K, this)),
        K.deps
          ? ((s.prevDep = K.depsTail),
            (K.depsTail.nextDep = s),
            (K.depsTail = s))
          : (K.deps = K.depsTail = s),
        er(s);
    else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
      const n = s.nextDep;
      (n.prevDep = s.prevDep),
        s.prevDep && (s.prevDep.nextDep = n),
        (s.prevDep = K.depsTail),
        (s.nextDep = void 0),
        (K.depsTail.nextDep = s),
        (K.depsTail = s),
        K.deps === s && (K.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, It++, this.notify(t);
  }
  notify(t) {
    js();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ks();
    }
  }
}
function er(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) er(n);
    }
    const s = e.dep.subs;
    s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e);
  }
}
const Es = new WeakMap(),
  et = Symbol(""),
  Is = Symbol(""),
  At = Symbol("");
function Z(e, t, s) {
  if (_e && K) {
    let n = Es.get(e);
    n || Es.set(e, (n = new Map()));
    let r = n.get(s);
    r || (n.set(s, (r = new Bs())), (r.map = n), (r.key = s)), r.track();
  }
}
function Me(e, t, s, n, r, o) {
  const i = Es.get(e);
  if (!i) {
    It++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if ((js(), t === "clear")) i.forEach(l);
  else {
    const f = M(e),
      d = f && Hs(s);
    if (f && s === "length") {
      const a = Number(n);
      i.forEach((h, S) => {
        (S === "length" || S === At || (!qe(S) && S >= a)) && l(h);
      });
    } else
      switch (
        ((s !== void 0 || i.has(void 0)) && l(i.get(s)), d && l(i.get(At)), t)
      ) {
        case "add":
          f ? d && l(i.get("length")) : (l(i.get(et)), lt(e) && l(i.get(Is)));
          break;
        case "delete":
          f || (l(i.get(et)), lt(e) && l(i.get(Is)));
          break;
        case "set":
          lt(e) && l(i.get(et));
          break;
      }
  }
  Ks();
}
function rt(e) {
  const t = D(e);
  return t === e ? t : (Z(t, "iterate", At), pe(e) ? t : t.map(ge));
}
function is(e) {
  return Z((e = D(e)), "iterate", At), e;
}
function ke(e, t) {
  return Le(e) ? (tt(e) ? at(ge(t)) : at(t)) : ge(t);
}
const ro = {
  __proto__: null,
  [Symbol.iterator]() {
    return bs(this, Symbol.iterator, (e) => ke(this, e));
  },
  concat(...e) {
    return rt(this).concat(...e.map((t) => (M(t) ? rt(t) : t)));
  },
  entries() {
    return bs(this, "entries", (e) => ((e[1] = ke(this, e[1])), e));
  },
  every(e, t) {
    return Ae(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ae(
      this,
      "filter",
      e,
      t,
      (s) => s.map((n) => ke(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ae(this, "find", e, t, (s) => ke(this, s), arguments);
  },
  findIndex(e, t) {
    return Ae(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ae(this, "findLast", e, t, (s) => ke(this, s), arguments);
  },
  findLastIndex(e, t) {
    return Ae(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Ae(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ys(this, "includes", e);
  },
  indexOf(...e) {
    return ys(this, "indexOf", e);
  },
  join(e) {
    return rt(this).join(e);
  },
  lastIndexOf(...e) {
    return ys(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ae(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return mt(this, "pop");
  },
  push(...e) {
    return mt(this, "push", e);
  },
  reduce(e, ...t) {
    return fn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fn(this, "reduceRight", e, t);
  },
  shift() {
    return mt(this, "shift");
  },
  some(e, t) {
    return Ae(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return mt(this, "splice", e);
  },
  toReversed() {
    return rt(this).toReversed();
  },
  toSorted(e) {
    return rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return mt(this, "unshift", e);
  },
  values() {
    return bs(this, "values", (e) => ke(this, e));
  },
};
function bs(e, t, s) {
  const n = is(e),
    r = n[t]();
  return (
    n !== e &&
      !pe(e) &&
      ((r._next = r.next),
      (r.next = () => {
        const o = r._next();
        return o.done || (o.value = s(o.value)), o;
      })),
    r
  );
}
const oo = Array.prototype;
function Ae(e, t, s, n, r, o) {
  const i = is(e),
    l = i !== e && !pe(e),
    f = i[t];
  if (f !== oo[t]) {
    const h = f.apply(e, o);
    return l ? ge(h) : h;
  }
  let d = s;
  i !== e &&
    (l
      ? (d = function (h, S) {
          return s.call(this, ke(e, h), S, e);
        })
      : s.length > 2 &&
        (d = function (h, S) {
          return s.call(this, h, S, e);
        }));
  const a = f.call(i, d, n);
  return l && r ? r(a) : a;
}
function fn(e, t, s, n) {
  const r = is(e);
  let o = s;
  return (
    r !== e &&
      (pe(e)
        ? s.length > 3 &&
          (o = function (i, l, f) {
            return s.call(this, i, l, f, e);
          })
        : (o = function (i, l, f) {
            return s.call(this, i, ke(e, l), f, e);
          })),
    r[t](o, ...n)
  );
}
function ys(e, t, s) {
  const n = D(e);
  Z(n, "iterate", At);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Ys(s[0])
    ? ((s[0] = D(s[0])), n[t](...s))
    : r;
}
function mt(e, t, s = []) {
  $e(), js();
  const n = D(e)[t].apply(e, s);
  return Ks(), Pe(), n;
}
const io = Ds("__proto__,__v_isRef,__isVue"),
  tr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(qe)
  );
function lo(e) {
  qe(e) || (e = String(e));
  const t = D(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class sr {
  constructor(t = !1, s = !1) {
    (this._isReadonly = t), (this._isShallow = s);
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly,
      o = this._isShallow;
    if (s === "__v_isReactive") return !r;
    if (s === "__v_isReadonly") return r;
    if (s === "__v_isShallow") return o;
    if (s === "__v_raw")
      return n === (r ? (o ? vo : ir) : o ? or : rr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const i = M(t);
    if (!r) {
      let f;
      if (i && (f = ro[s])) return f;
      if (s === "hasOwnProperty") return lo;
    }
    const l = Reflect.get(t, s, Q(t) ? t : n);
    if ((qe(s) ? tr.has(s) : io(s)) || (r || Z(t, "get", s), o)) return l;
    if (Q(l)) {
      const f = i && Hs(s) ? l : l.value;
      return r && V(f) ? Os(f) : f;
    }
    return V(l) ? (r ? Os(l) : Ws(l)) : l;
  }
}
class nr extends sr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    const i = M(t) && Hs(s);
    if (!this._isShallow) {
      const d = Le(o);
      if ((!pe(n) && !Le(n) && ((o = D(o)), (n = D(n))), !i && Q(o) && !Q(n)))
        return d || (o.value = n), !0;
    }
    const l = i ? Number(s) < t.length : k(t, s),
      f = Reflect.set(t, s, n, Q(t) ? t : r);
    return (
      t === D(r) && (l ? Be(n, o) && Me(t, "set", s, n) : Me(t, "add", s, n)), f
    );
  }
  deleteProperty(t, s) {
    const n = k(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Me(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!qe(s) || !tr.has(s)) && Z(t, "has", s), n;
  }
  ownKeys(t) {
    return Z(t, "iterate", M(t) ? "length" : et), Reflect.ownKeys(t);
  }
}
class co extends sr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const fo = new nr(),
  uo = new co(),
  ao = new nr(!0);
const As = (e) => e,
  Kt = (e) => Reflect.getPrototypeOf(e);
function ho(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      o = D(r),
      i = lt(o),
      l = e === "entries" || (e === Symbol.iterator && i),
      f = e === "keys" && i,
      d = r[e](...n),
      a = s ? As : t ? at : ge;
    return (
      !t && Z(o, "iterate", f ? Is : et),
      {
        next() {
          const { value: h, done: S } = d.next();
          return S
            ? { value: h, done: S }
            : { value: l ? [a(h[0]), a(h[1])] : a(h), done: S };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ut(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const s = {
    get(r) {
      const o = this.__v_raw,
        i = D(o),
        l = D(r);
      e || (Be(r, l) && Z(i, "get", r), Z(i, "get", l));
      const { has: f } = Kt(i),
        d = t ? As : e ? at : ge;
      if (f.call(i, r)) return d(o.get(r));
      if (f.call(i, l)) return d(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Z(D(r), "iterate", et), r.size;
    },
    has(r) {
      const o = this.__v_raw,
        i = D(o),
        l = D(r);
      return (
        e || (Be(r, l) && Z(i, "has", r), Z(i, "has", l)),
        r === l ? o.has(r) : o.has(r) || o.has(l)
      );
    },
    forEach(r, o) {
      const i = this,
        l = i.__v_raw,
        f = D(l),
        d = t ? As : e ? at : ge;
      return (
        !e && Z(f, "iterate", et), l.forEach((a, h) => r.call(o, d(a), d(h), i))
      );
    },
  };
  return (
    ie(
      s,
      e
        ? {
            add: Ut("add"),
            set: Ut("set"),
            delete: Ut("delete"),
            clear: Ut("clear"),
          }
        : {
            add(r) {
              !t && !pe(r) && !Le(r) && (r = D(r));
              const o = D(this);
              return (
                Kt(o).has.call(o, r) || (o.add(r), Me(o, "add", r, r)), this
              );
            },
            set(r, o) {
              !t && !pe(o) && !Le(o) && (o = D(o));
              const i = D(this),
                { has: l, get: f } = Kt(i);
              let d = l.call(i, r);
              d || ((r = D(r)), (d = l.call(i, r)));
              const a = f.call(i, r);
              return (
                i.set(r, o),
                d ? Be(o, a) && Me(i, "set", r, o) : Me(i, "add", r, o),
                this
              );
            },
            delete(r) {
              const o = D(this),
                { has: i, get: l } = Kt(o);
              let f = i.call(o, r);
              f || ((r = D(r)), (f = i.call(o, r))), l && l.call(o, r);
              const d = o.delete(r);
              return f && Me(o, "delete", r, void 0), d;
            },
            clear() {
              const r = D(this),
                o = r.size !== 0,
                i = r.clear();
              return o && Me(r, "clear", void 0, void 0), i;
            },
          }
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      s[r] = ho(r, e, t);
    }),
    s
  );
}
function Vs(e, t) {
  const s = po(e, t);
  return (n, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? n
      : Reflect.get(k(s, r) && r in n ? s : n, r, o);
}
const _o = { get: Vs(!1, !1) },
  go = { get: Vs(!1, !0) },
  mo = { get: Vs(!0, !1) };
const rr = new WeakMap(),
  or = new WeakMap(),
  ir = new WeakMap(),
  vo = new WeakMap();
function bo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function yo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : bo(Vr(e));
}
function Ws(e) {
  return Le(e) ? e : qs(e, !1, fo, _o, rr);
}
function xo(e) {
  return qs(e, !1, ao, go, or);
}
function Os(e) {
  return qs(e, !0, uo, mo, ir);
}
function qs(e, t, s, n, r) {
  if (!V(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = yo(e);
  if (o === 0) return e;
  const i = r.get(e);
  if (i) return i;
  const l = new Proxy(e, o === 2 ? n : s);
  return r.set(e, l), l;
}
function tt(e) {
  return Le(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Le(e) {
  return !!(e && e.__v_isReadonly);
}
function pe(e) {
  return !!(e && e.__v_isShallow);
}
function Ys(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function wo(e) {
  return (
    !k(e, "__v_skip") && Object.isExtensible(e) && Bn(e, "__v_skip", !0), e
  );
}
const ge = (e) => (V(e) ? Ws(e) : e),
  at = (e) => (V(e) ? Os(e) : e);
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ue(e) {
  return So(e, !1);
}
function So(e, t) {
  return Q(e) ? e : new Co(e, t);
}
class Co {
  constructor(t, s) {
    (this.dep = new Bs()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = s ? t : D(t)),
      (this._value = s ? t : ge(t)),
      (this.__v_isShallow = s);
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue,
      n = this.__v_isShallow || pe(t) || Le(t);
    (t = n ? t : D(t)),
      Be(t, s) &&
        ((this._rawValue = t),
        (this._value = n ? t : ge(t)),
        this.dep.trigger());
  }
}
function To(e) {
  return Q(e) ? e.value : e;
}
const Eo = {
  get: (e, t, s) => (t === "__v_raw" ? e : To(Reflect.get(e, t, s))),
  set: (e, t, s, n) => {
    const r = e[t];
    return Q(r) && !Q(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function lr(e) {
  return tt(e) ? e : new Proxy(e, Eo);
}
class Io {
  constructor(t, s, n) {
    (this.fn = t),
      (this.setter = s),
      (this._value = void 0),
      (this.dep = new Bs(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = It - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !s),
      (this.isSSR = n);
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && K !== this))
      return Gn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ao(e, t, s = !1) {
  let n, r;
  return $(e) ? (n = e) : ((n = e.get), (r = e.set)), new Io(n, r, s);
}
const Bt = {},
  zt = new WeakMap();
let Qe;
function Oo(e, t = !1, s = Qe) {
  if (s) {
    let n = zt.get(s);
    n || zt.set(s, (n = [])), n.push(e);
  }
}
function Mo(e, t, s = U) {
  const {
      immediate: n,
      deep: r,
      once: o,
      scheduler: i,
      augmentJob: l,
      call: f,
    } = s,
    d = (A) => (r ? A : pe(A) || r === !1 || r === 0 ? je(A, 1) : je(A));
  let a,
    h,
    S,
    T,
    P = !1,
    R = !1;
  if (
    (Q(e)
      ? ((h = () => e.value), (P = pe(e)))
      : tt(e)
      ? ((h = () => d(e)), (P = !0))
      : M(e)
      ? ((R = !0),
        (P = e.some((A) => tt(A) || pe(A))),
        (h = () =>
          e.map((A) => {
            if (Q(A)) return A.value;
            if (tt(A)) return d(A);
            if ($(A)) return f ? f(A, 2) : A();
          })))
      : $(e)
      ? t
        ? (h = f ? () => f(e, 2) : e)
        : (h = () => {
            if (S) {
              $e();
              try {
                S();
              } finally {
                Pe();
              }
            }
            const A = Qe;
            Qe = a;
            try {
              return f ? f(e, 3, [T]) : e(T);
            } finally {
              Qe = A;
            }
          })
      : (h = Ee),
    t && r)
  ) {
    const A = h,
      G = r === !0 ? 1 / 0 : r;
    h = () => je(A(), G);
  }
  const ee = to(),
    F = () => {
      a.stop(), ee && ee.active && Ns(ee.effects, a);
    };
  if (o && t) {
    const A = t;
    t = (...G) => {
      A(...G), F();
    };
  }
  let B = R ? new Array(e.length).fill(Bt) : Bt;
  const q = (A) => {
    if (!(!(a.flags & 1) || (!a.dirty && !A)))
      if (t) {
        const G = a.run();
        if (r || P || (R ? G.some((Fe, me) => Be(Fe, B[me])) : Be(G, B))) {
          S && S();
          const Fe = Qe;
          Qe = a;
          try {
            const me = [G, B === Bt ? void 0 : R && B[0] === Bt ? [] : B, T];
            (B = G), f ? f(t, 3, me) : t(...me);
          } finally {
            Qe = Fe;
          }
        }
      } else a.run();
  };
  return (
    l && l(q),
    (a = new Yn(h)),
    (a.scheduler = i ? () => i(q, !1) : q),
    (T = (A) => Oo(A, !1, a)),
    (S = a.onStop =
      () => {
        const A = zt.get(a);
        if (A) {
          if (f) f(A, 4);
          else for (const G of A) G();
          zt.delete(a);
        }
      }),
    t ? (n ? q(!0) : (B = a.run())) : i ? i(q.bind(null, !0), !0) : a.run(),
    (F.pause = a.pause.bind(a)),
    (F.resume = a.resume.bind(a)),
    (F.stop = F),
    F
  );
}
function je(e, t = 1 / 0, s) {
  if (
    t <= 0 ||
    !V(e) ||
    e.__v_skip ||
    ((s = s || new Map()), (s.get(e) || 0) >= t)
  )
    return e;
  if ((s.set(e, t), t--, Q(e))) je(e.value, t, s);
  else if (M(e)) for (let n = 0; n < e.length; n++) je(e[n], t, s);
  else if (Nn(e) || lt(e))
    e.forEach((n) => {
      je(n, t, s);
    });
  else if (Kn(e)) {
    for (const n in e) je(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && je(e[n], t, s);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Pt(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ls(r, t, s);
  }
}
function Ie(e, t, s, n) {
  if ($(e)) {
    const r = Pt(e, t, s, n);
    return (
      r &&
        Hn(r) &&
        r.catch((o) => {
          ls(o, t, s);
        }),
      r
    );
  }
  if (M(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(Ie(e[o], t, s, n));
    return r;
  }
}
function ls(e, t, s, n = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: o, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || U;
  if (t) {
    let l = t.parent;
    const f = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let h = 0; h < a.length; h++) if (a[h](e, f, d) === !1) return;
      }
      l = l.parent;
    }
    if (o) {
      $e(), Pt(o, null, 10, [e, f, d]), Pe();
      return;
    }
  }
  $o(e, s, r, n, i);
}
function $o(e, t, s, n = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const ne = [];
let Se = -1;
const ct = [];
let Ne = null,
  ot = 0;
const cr = Promise.resolve();
let Xt = null;
function Po(e) {
  const t = Xt || cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lo(e) {
  let t = Se + 1,
    s = ne.length;
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      r = ne[n],
      o = Ot(r);
    o < e || (o === e && r.flags & 2) ? (t = n + 1) : (s = n);
  }
  return t;
}
function Js(e) {
  if (!(e.flags & 1)) {
    const t = Ot(e),
      s = ne[ne.length - 1];
    !s || (!(e.flags & 2) && t >= Ot(s)) ? ne.push(e) : ne.splice(Lo(t), 0, e),
      (e.flags |= 1),
      fr();
  }
}
function fr() {
  Xt || (Xt = cr.then(ar));
}
function Ro(e) {
  M(e)
    ? ct.push(...e)
    : Ne && e.id === -1
    ? Ne.splice(ot + 1, 0, e)
    : e.flags & 1 || (ct.push(e), (e.flags |= 1)),
    fr();
}
function un(e, t, s = Se + 1) {
  for (; s < ne.length; s++) {
    const n = ne[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid) continue;
      ne.splice(s, 1),
        s--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ur(e) {
  if (ct.length) {
    const t = [...new Set(ct)].sort((s, n) => Ot(s) - Ot(n));
    if (((ct.length = 0), Ne)) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, ot = 0; ot < Ne.length; ot++) {
      const s = Ne[ot];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2);
    }
    (Ne = null), (ot = 0);
  }
}
const Ot = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ar(e) {
  try {
    for (Se = 0; Se < ne.length; Se++) {
      const t = ne[Se];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Pt(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Se < ne.length; Se++) {
      const t = ne[Se];
      t && (t.flags &= -2);
    }
    (Se = -1),
      (ne.length = 0),
      ur(),
      (Xt = null),
      (ne.length || ct.length) && ar();
  }
}
let Te = null,
  dr = null;
function Zt(e) {
  const t = Te;
  return (Te = e), (dr = (e && e.type.__scopeId) || null), t;
}
function Fo(e, t = Te, s) {
  if (!t || e._n) return e;
  const n = (...r) => {
    n._d && yn(-1);
    const o = Zt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Zt(o), n._d && yn(1);
    }
    return i;
  };
  return (n._n = !0), (n._c = !0), (n._d = !0), n;
}
function Xe(e, t, s, n) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let f = l.dir[n];
    f && ($e(), Ie(f, s, 8, [e.el, l, e, t]), Pe());
  }
}
function Do(e, t) {
  if (oe) {
    let s = oe.provides;
    const n = oe.parent && oe.parent.provides;
    n === s && (s = oe.provides = Object.create(n)), (s[e] = t);
  }
}
function Wt(e, t, s = !1) {
  const n = ki();
  if (n || ft) {
    let r = ft
      ? ft._context.provides
      : n
      ? n.parent == null || n.ce
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return s && $(t) ? t.call(n && n.proxy) : t;
  }
}
const ko = Symbol.for("v-scx"),
  No = () => Wt(ko);
function qt(e, t, s) {
  return hr(e, t, s);
}
function hr(e, t, s = U) {
  const { immediate: n, deep: r, flush: o, once: i } = s,
    l = ie({}, s),
    f = (t && n) || (!t && o !== "post");
  let d;
  if ($t) {
    if (o === "sync") {
      const T = No();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!f) {
      const T = () => {};
      return (T.stop = Ee), (T.resume = Ee), (T.pause = Ee), T;
    }
  }
  const a = oe;
  l.call = (T, P, R) => Ie(T, a, P, R);
  let h = !1;
  o === "post"
    ? (l.scheduler = (T) => {
        de(T, a && a.suspense);
      })
    : o !== "sync" &&
      ((h = !0),
      (l.scheduler = (T, P) => {
        P ? T() : Js(T);
      })),
    (l.augmentJob = (T) => {
      t && (T.flags |= 4),
        h && ((T.flags |= 2), a && ((T.id = a.uid), (T.i = a)));
    });
  const S = Mo(e, t, l);
  return $t && (d ? d.push(S) : f && S()), S;
}
function Ho(e, t, s) {
  const n = this.proxy,
    r = J(e) ? (e.includes(".") ? pr(n, e) : () => n[e]) : e.bind(n, n);
  let o;
  $(t) ? (o = t) : ((o = t.handler), (s = t));
  const i = Rt(this),
    l = hr(r, o.bind(n), s);
  return i(), l;
}
function pr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++) n = n[s[r]];
    return n;
  };
}
const jo = Symbol("_vte"),
  Ko = (e) => e.__isTeleport,
  Uo = Symbol("_leaveCb");
function Gs(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Gs(e.component.subTree, t))
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Qt = new WeakMap();
function St(e, t, s, n, r = !1) {
  if (M(e)) {
    e.forEach((P, R) => St(P, t && (M(t) ? t[R] : t), s, n, r));
    return;
  }
  if (Ct(n) && !r) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      St(e, t, s, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Qs(n.component) : n.el,
    i = r ? null : o,
    { i: l, r: f } = e,
    d = t && t.r,
    a = l.refs === U ? (l.refs = {}) : l.refs,
    h = l.setupState,
    S = D(h),
    T = h === U ? kn : (P) => k(S, P);
  if (d != null && d !== f) {
    if ((an(t), J(d))) (a[d] = null), T(d) && (h[d] = null);
    else if (Q(d)) {
      d.value = null;
      const P = t;
      P.k && (a[P.k] = null);
    }
  }
  if ($(f)) Pt(f, l, 12, [i, a]);
  else {
    const P = J(f),
      R = Q(f);
    if (P || R) {
      const ee = () => {
        if (e.f) {
          const F = P ? (T(f) ? h[f] : a[f]) : f.value;
          if (r) M(F) && Ns(F, o);
          else if (M(F)) F.includes(o) || F.push(o);
          else if (P) (a[f] = [o]), T(f) && (h[f] = a[f]);
          else {
            const B = [o];
            (f.value = B), e.k && (a[e.k] = B);
          }
        } else
          P
            ? ((a[f] = i), T(f) && (h[f] = i))
            : R && ((f.value = i), e.k && (a[e.k] = i));
      };
      if (i) {
        const F = () => {
          ee(), Qt.delete(e);
        };
        (F.id = -1), Qt.set(e, F), de(F, s);
      } else an(e), ee();
    }
  }
}
function an(e) {
  const t = Qt.get(e);
  t && ((t.flags |= 8), Qt.delete(e));
}
os().requestIdleCallback;
os().cancelIdleCallback;
const Ct = (e) => !!e.type.__asyncLoader,
  gr = (e) => e.type.__isKeepAlive;
function Bo(e, t) {
  mr(e, "a", t);
}
function Vo(e, t) {
  mr(e, "da", t);
}
function mr(e, t, s = oe) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let r = s;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((cs(t, n, s), s)) {
    let r = s.parent;
    for (; r && r.parent; )
      gr(r.parent.vnode) && Wo(n, t, s, r), (r = r.parent);
  }
}
function Wo(e, t, s, n) {
  const r = cs(t, e, n, !0);
  fs(() => {
    Ns(n[t], r);
  }, s);
}
function cs(e, t, s = oe, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          $e();
          const l = Rt(s),
            f = Ie(t, s, e, i);
          return l(), Pe(), f;
        });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const Re =
    (e) =>
    (t, s = oe) => {
      (!$t || e === "sp") && cs(e, (...n) => t(...n), s);
    },
  qo = Re("bm"),
  Ye = Re("m"),
  Yo = Re("bu"),
  Jo = Re("u"),
  Go = Re("bum"),
  fs = Re("um"),
  zo = Re("sp"),
  Xo = Re("rtg"),
  Zo = Re("rtc");
function Qo(e, t = oe) {
  cs("ec", e, t);
}
const ei = Symbol.for("v-ndc");
function Lt(e, t, s, n) {
  let r;
  const o = s,
    i = M(e);
  if (i || J(e)) {
    const l = i && tt(e);
    let f = !1,
      d = !1;
    l && ((f = !pe(e)), (d = Le(e)), (e = is(e))), (r = new Array(e.length));
    for (let a = 0, h = e.length; a < h; a++)
      r[a] = t(f ? (d ? at(ge(e[a])) : ge(e[a])) : e[a], a, void 0, o);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, o);
  } else if (V(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, f) => t(l, f, void 0, o));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, d = l.length; f < d; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, o);
      }
    }
  else r = [];
  return r;
}
const Ms = (e) => (e ? (Nr(e) ? Qs(e) : Ms(e.parent)) : null),
  Tt = ie(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => br(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Js(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = Po.bind(e.proxy)),
    $watch: (e) => Ho.bind(e),
  }),
  xs = (e, t) => e !== U && !e.__isScriptSetup && k(e, t),
  ti = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: s,
        setupState: n,
        data: r,
        props: o,
        accessCache: i,
        type: l,
        appContext: f,
      } = e;
      if (t[0] !== "$") {
        const S = i[t];
        if (S !== void 0)
          switch (S) {
            case 1:
              return n[t];
            case 2:
              return r[t];
            case 4:
              return s[t];
            case 3:
              return o[t];
          }
        else {
          if (xs(n, t)) return (i[t] = 1), n[t];
          if (r !== U && k(r, t)) return (i[t] = 2), r[t];
          if (k(o, t)) return (i[t] = 3), o[t];
          if (s !== U && k(s, t)) return (i[t] = 4), s[t];
          $s && (i[t] = 0);
        }
      }
      const d = Tt[t];
      let a, h;
      if (d) return t === "$attrs" && Z(e.attrs, "get", ""), d(e);
      if ((a = l.__cssModules) && (a = a[t])) return a;
      if (s !== U && k(s, t)) return (i[t] = 4), s[t];
      if (((h = f.config.globalProperties), k(h, t))) return h[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: o } = e;
      return xs(r, t)
        ? ((r[t] = s), !0)
        : n !== U && k(n, t)
        ? ((n[t] = s), !0)
        : k(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = s), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: s,
          ctx: n,
          appContext: r,
          props: o,
          type: i,
        },
      },
      l
    ) {
      let f;
      return !!(
        s[l] ||
        (e !== U && l[0] !== "$" && k(e, l)) ||
        xs(t, l) ||
        k(o, l) ||
        k(n, l) ||
        k(Tt, l) ||
        k(r.config.globalProperties, l) ||
        ((f = i.__cssModules) && f[l])
      );
    },
    defineProperty(e, t, s) {
      return (
        s.get != null
          ? (e._.accessCache[t] = 0)
          : k(s, "value") && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      );
    },
  };
function dn(e) {
  return M(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let $s = !0;
function si(e) {
  const t = br(e),
    s = e.proxy,
    n = e.ctx;
  ($s = !1), t.beforeCreate && hn(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: f,
    inject: d,
    created: a,
    beforeMount: h,
    mounted: S,
    beforeUpdate: T,
    updated: P,
    activated: R,
    deactivated: ee,
    beforeDestroy: F,
    beforeUnmount: B,
    destroyed: q,
    unmounted: A,
    render: G,
    renderTracked: Fe,
    renderTriggered: me,
    errorCaptured: De,
    serverPrefetch: Dt,
    expose: Je,
    inheritAttrs: ht,
    components: kt,
    directives: Nt,
    filters: hs,
  } = t;
  if ((d && ni(d, n, null), i))
    for (const W in i) {
      const H = i[W];
      $(H) && (n[W] = H.bind(s));
    }
  if (r) {
    const W = r.call(s, s);
    V(W) && (e.data = Ws(W));
  }
  if ((($s = !0), o))
    for (const W in o) {
      const H = o[W],
        Ge = $(H) ? H.bind(s, s) : $(H.get) ? H.get.bind(s, s) : Ee,
        Ht = !$(H) && $(H.set) ? H.set.bind(s) : Ee,
        ze = ds({ get: Ge, set: Ht });
      Object.defineProperty(n, W, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (ve) => (ze.value = ve),
      });
    }
  if (l) for (const W in l) vr(l[W], n, s, W);
  if (f) {
    const W = $(f) ? f.call(s) : f;
    Reflect.ownKeys(W).forEach((H) => {
      Do(H, W[H]);
    });
  }
  a && hn(a, e, "c");
  function te(W, H) {
    M(H) ? H.forEach((Ge) => W(Ge.bind(s))) : H && W(H.bind(s));
  }
  if (
    (te(qo, h),
    te(Ye, S),
    te(Yo, T),
    te(Jo, P),
    te(Bo, R),
    te(Vo, ee),
    te(Qo, De),
    te(Zo, Fe),
    te(Xo, me),
    te(Go, B),
    te(fs, A),
    te(zo, Dt),
    M(Je))
  )
    if (Je.length) {
      const W = e.exposed || (e.exposed = {});
      Je.forEach((H) => {
        Object.defineProperty(W, H, {
          get: () => s[H],
          set: (Ge) => (s[H] = Ge),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  G && e.render === Ee && (e.render = G),
    ht != null && (e.inheritAttrs = ht),
    kt && (e.components = kt),
    Nt && (e.directives = Nt),
    Dt && _r(e);
}
function ni(e, t, s = Ee) {
  M(e) && (e = Ps(e));
  for (const n in e) {
    const r = e[n];
    let o;
    V(r)
      ? "default" in r
        ? (o = Wt(r.from || n, r.default, !0))
        : (o = Wt(r.from || n))
      : (o = Wt(r)),
      Q(o)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[n] = o);
  }
}
function hn(e, t, s) {
  Ie(M(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function vr(e, t, s, n) {
  let r = n.includes(".") ? pr(s, n) : () => s[n];
  if (J(e)) {
    const o = t[e];
    $(o) && qt(r, o);
  } else if ($(e)) qt(r, e.bind(s));
  else if (V(e))
    if (M(e)) e.forEach((o) => vr(o, t, s, n));
    else {
      const o = $(e.handler) ? e.handler.bind(s) : t[e.handler];
      $(o) && qt(r, o, e);
    }
}
function br(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = o.get(t);
  let f;
  return (
    l
      ? (f = l)
      : !r.length && !s && !n
      ? (f = t)
      : ((f = {}), r.length && r.forEach((d) => es(f, d, i, !0)), es(f, t, i)),
    V(t) && o.set(t, f),
    f
  );
}
function es(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && es(e, o, s, !0), r && r.forEach((i) => es(e, i, s, !0));
  for (const i in t)
    if (!(n && i === "expose")) {
      const l = ri[i] || (s && s[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ri = {
  data: pn,
  props: _n,
  emits: _n,
  methods: bt,
  computed: bt,
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  components: bt,
  directives: bt,
  watch: ii,
  provide: pn,
  inject: oi,
};
function pn(e, t) {
  return t
    ? e
      ? function () {
          return ie(
            $(e) ? e.call(this, this) : e,
            $(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function oi(e, t) {
  return bt(Ps(e), Ps(t));
}
function Ps(e) {
  if (M(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bt(e, t) {
  return e ? ie(Object.create(null), e, t) : t;
}
function _n(e, t) {
  return e
    ? M(e) && M(t)
      ? [...new Set([...e, ...t])]
      : ie(Object.create(null), dn(e), dn(t ?? {}))
    : t;
}
function ii(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = ie(Object.create(null), e);
  for (const n in t) s[n] = se(e[n], t[n]);
  return s;
}
function yr() {
  return {
    app: null,
    config: {
      isNativeTag: kn,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let li = 0;
function ci(e, t) {
  return function (n, r = null) {
    $(n) || (n = ie({}, n)), r != null && !V(r) && (r = null);
    const o = yr(),
      i = new WeakSet(),
      l = [];
    let f = !1;
    const d = (o.app = {
      _uid: li++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Bi,
      get config() {
        return o.config;
      },
      set config(a) {},
      use(a, ...h) {
        return (
          i.has(a) ||
            (a && $(a.install)
              ? (i.add(a), a.install(d, ...h))
              : $(a) && (i.add(a), a(d, ...h))),
          d
        );
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), d;
      },
      component(a, h) {
        return h ? ((o.components[a] = h), d) : o.components[a];
      },
      directive(a, h) {
        return h ? ((o.directives[a] = h), d) : o.directives[a];
      },
      mount(a, h, S) {
        if (!f) {
          const T = d._ceVNode || Y(n, r);
          return (
            (T.appContext = o),
            S === !0 ? (S = "svg") : S === !1 && (S = void 0),
            e(T, a, S),
            (f = !0),
            (d._container = a),
            (a.__vue_app__ = d),
            Qs(T.component)
          );
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f &&
          (Ie(l, d._instance, 16),
          e(null, d._container),
          delete d._container.__vue_app__);
      },
      provide(a, h) {
        return (o.provides[a] = h), d;
      },
      runWithContext(a) {
        const h = ft;
        ft = d;
        try {
          return a();
        } finally {
          ft = h;
        }
      },
    });
    return d;
  };
}
let ft = null;
const fi = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
function ui(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || U;
  let r = s;
  const o = t.startsWith("update:"),
    i = o && fi(n, t.slice(7));
  i &&
    (i.trim && (r = s.map((a) => (J(a) ? a.trim() : a))),
    i.number && (r = s.map(Yr)));
  let l,
    f = n[(l = _s(t))] || n[(l = _s(Ve(t)))];
  !f && o && (f = n[(l = _s(nt(t)))]), f && Ie(f, e, 6, r);
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), Ie(d, e, 6, r);
  }
}
const ai = new WeakMap();
function xr(e, t, s = !1) {
  const n = s ? ai : t.emitsCache,
    r = n.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    l = !1;
  if (!$(e)) {
    const f = (d) => {
      const a = xr(d, t, !0);
      a && ((l = !0), ie(i, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  return !o && !l
    ? (V(e) && n.set(e, null), null)
    : (M(o) ? o.forEach((f) => (i[f] = null)) : ie(i, o),
      V(e) && n.set(e, i),
      i);
}
function us(e, t) {
  return !e || !ss(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      k(e, t[0].toLowerCase() + t.slice(1)) || k(e, nt(t)) || k(e, t));
}
function gn(e) {
  const {
      type: t,
      vnode: s,
      proxy: n,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: l,
      emit: f,
      render: d,
      renderCache: a,
      props: h,
      data: S,
      setupState: T,
      ctx: P,
      inheritAttrs: R,
    } = e,
    ee = Zt(e);
  let F, B;
  try {
    if (s.shapeFlag & 4) {
      const A = r || n,
        G = A;
      (F = Ce(d.call(G, A, a, h, T, S, P))), (B = l);
    } else {
      const A = t;
      (F = Ce(
        A.length > 1 ? A(h, { attrs: l, slots: i, emit: f }) : A(h, null)
      )),
        (B = t.props ? l : di(l));
    }
  } catch (A) {
    (Et.length = 0), ls(A, e, 1), (F = Y(We));
  }
  let q = F;
  if (B && R !== !1) {
    const A = Object.keys(B),
      { shapeFlag: G } = q;
    A.length &&
      G & 7 &&
      (o && A.some(ks) && (B = hi(B, o)), (q = dt(q, B, !1, !0)));
  }
  return (
    s.dirs &&
      ((q = dt(q, null, !1, !0)),
      (q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs)),
    s.transition && Gs(q, s.transition),
    (F = q),
    Zt(ee),
    F
  );
}
const di = (e) => {
    let t;
    for (const s in e)
      (s === "class" || s === "style" || ss(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
  },
  hi = (e, t) => {
    const s = {};
    for (const n in e) (!ks(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function pi(e, t, s) {
  const { props: n, children: r, component: o } = e,
    { props: i, children: l, patchFlag: f } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && f >= 0) {
    if (f & 1024) return !0;
    if (f & 16) return n ? mn(n, i, d) : !!i;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let h = 0; h < a.length; h++) {
        const S = a[h];
        if (i[S] !== n[S] && !us(d, S)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : n === i
      ? !1
      : n
      ? i
        ? mn(n, i, d)
        : !0
      : !!i;
  return !1;
}
function mn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !us(s, o)) return !0;
  }
  return !1;
}
function _i({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = s), (t = t.parent);
    else break;
  }
}
const wr = {},
  Sr = () => Object.create(wr),
  Cr = (e) => Object.getPrototypeOf(e) === wr;
function gi(e, t, s, n = !1) {
  const r = {},
    o = Sr();
  (e.propsDefaults = Object.create(null)), Tr(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  s ? (e.props = n ? r : xo(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function mi(e, t, s, n) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    l = D(r),
    [f] = e.propsOptions;
  let d = !1;
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let h = 0; h < a.length; h++) {
        let S = a[h];
        if (us(e.emitsOptions, S)) continue;
        const T = t[S];
        if (f)
          if (k(o, S)) T !== o[S] && ((o[S] = T), (d = !0));
          else {
            const P = Ve(S);
            r[P] = Ls(f, l, P, T, e, !1);
          }
        else T !== o[S] && ((o[S] = T), (d = !0));
      }
    }
  } else {
    Tr(e, t, r, o) && (d = !0);
    let a;
    for (const h in l)
      (!t || (!k(t, h) && ((a = nt(h)) === h || !k(t, a)))) &&
        (f
          ? s &&
            (s[h] !== void 0 || s[a] !== void 0) &&
            (r[h] = Ls(f, l, h, void 0, e, !0))
          : delete r[h]);
    if (o !== l) for (const h in o) (!t || !k(t, h)) && (delete o[h], (d = !0));
  }
  d && Me(e.attrs, "set", "");
}
function Tr(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let f in t) {
      if (yt(f)) continue;
      const d = t[f];
      let a;
      r && k(r, (a = Ve(f)))
        ? !o || !o.includes(a)
          ? (s[a] = d)
          : ((l || (l = {}))[a] = d)
        : us(e.emitsOptions, f) ||
          ((!(f in n) || d !== n[f]) && ((n[f] = d), (i = !0)));
    }
  if (o) {
    const f = D(s),
      d = l || U;
    for (let a = 0; a < o.length; a++) {
      const h = o[a];
      s[h] = Ls(r, f, h, d[h], e, !k(d, h));
    }
  }
  return i;
}
function Ls(e, t, s, n, r, o) {
  const i = e[s];
  if (i != null) {
    const l = k(i, "default");
    if (l && n === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && $(f)) {
        const { propsDefaults: d } = r;
        if (s in d) n = d[s];
        else {
          const a = Rt(r);
          (n = d[s] = f.call(null, t)), a();
        }
      } else n = f;
      r.ce && r.ce._setProp(s, n);
    }
    i[0] &&
      (o && !l ? (n = !1) : i[1] && (n === "" || n === nt(s)) && (n = !0));
  }
  return n;
}
const vi = new WeakMap();
function Er(e, t, s = !1) {
  const n = s ? vi : t.propsCache,
    r = n.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    l = [];
  let f = !1;
  if (!$(e)) {
    const a = (h) => {
      f = !0;
      const [S, T] = Er(h, t, !0);
      ie(i, S), T && l.push(...T);
    };
    !s && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!o && !f) return V(e) && n.set(e, it), it;
  if (M(o))
    for (let a = 0; a < o.length; a++) {
      const h = Ve(o[a]);
      vn(h) && (i[h] = U);
    }
  else if (o)
    for (const a in o) {
      const h = Ve(a);
      if (vn(h)) {
        const S = o[a],
          T = (i[h] = M(S) || $(S) ? { type: S } : ie({}, S)),
          P = T.type;
        let R = !1,
          ee = !0;
        if (M(P))
          for (let F = 0; F < P.length; ++F) {
            const B = P[F],
              q = $(B) && B.name;
            if (q === "Boolean") {
              R = !0;
              break;
            } else q === "String" && (ee = !1);
          }
        else R = $(P) && P.name === "Boolean";
        (T[0] = R), (T[1] = ee), (R || k(T, "default")) && l.push(h);
      }
    }
  const d = [i, l];
  return V(e) && n.set(e, d), d;
}
function vn(e) {
  return e[0] !== "$" && !yt(e);
}
const zs = (e) => e === "_" || e === "_ctx" || e === "$stable",
  Xs = (e) => (M(e) ? e.map(Ce) : [Ce(e)]),
  bi = (e, t, s) => {
    if (t._n) return t;
    const n = Fo((...r) => Xs(t(...r)), s);
    return (n._c = !1), n;
  },
  Ir = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (zs(r)) continue;
      const o = e[r];
      if ($(o)) t[r] = bi(r, o, n);
      else if (o != null) {
        const i = Xs(o);
        t[r] = () => i;
      }
    }
  },
  Ar = (e, t) => {
    const s = Xs(t);
    e.slots.default = () => s;
  },
  Or = (e, t, s) => {
    for (const n in t) (s || !zs(n)) && (e[n] = t[n]);
  },
  yi = (e, t, s) => {
    const n = (e.slots = Sr());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Or(n, t, s), s && Bn(n, "_", r, !0)) : Ir(t, n);
    } else t && Ar(e, t);
  },
  xi = (e, t, s) => {
    const { vnode: n, slots: r } = e;
    let o = !0,
      i = U;
    if (n.shapeFlag & 32) {
      const l = t._;
      l
        ? s && l === 1
          ? (o = !1)
          : Or(r, t, s)
        : ((o = !t.$stable), Ir(t, r)),
        (i = t);
    } else t && (Ar(e, t), (i = { default: 1 }));
    if (o) for (const l in r) !zs(l) && i[l] == null && delete r[l];
  },
  de = Ei;
function wi(e) {
  return Si(e);
}
function Si(e, t) {
  const s = os();
  s.__VUE__ = !0;
  const {
      insert: n,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: l,
      createComment: f,
      setText: d,
      setElementText: a,
      parentNode: h,
      nextSibling: S,
      setScopeId: T = Ee,
      insertStaticContent: P,
    } = e,
    R = (
      c,
      u,
      p,
      b = null,
      g = null,
      m = null,
      w = void 0,
      x = null,
      y = !!u.dynamicChildren
    ) => {
      if (c === u) return;
      c && !vt(c, u) && ((b = jt(c)), ve(c, g, m, !0), (c = null)),
        u.patchFlag === -2 && ((y = !1), (u.dynamicChildren = null));
      const { type: v, ref: I, shapeFlag: C } = u;
      switch (v) {
        case as:
          ee(c, u, p, b);
          break;
        case We:
          F(c, u, p, b);
          break;
        case Yt:
          c == null && B(u, p, b, w);
          break;
        case re:
          kt(c, u, p, b, g, m, w, x, y);
          break;
        default:
          C & 1
            ? G(c, u, p, b, g, m, w, x, y)
            : C & 6
            ? Nt(c, u, p, b, g, m, w, x, y)
            : (C & 64 || C & 128) && v.process(c, u, p, b, g, m, w, x, y, _t);
      }
      I != null && g
        ? St(I, c && c.ref, m, u || c, !u)
        : I == null && c && c.ref != null && St(c.ref, null, m, c, !0);
    },
    ee = (c, u, p, b) => {
      if (c == null) n((u.el = l(u.children)), p, b);
      else {
        const g = (u.el = c.el);
        u.children !== c.children && d(g, u.children);
      }
    },
    F = (c, u, p, b) => {
      c == null ? n((u.el = f(u.children || "")), p, b) : (u.el = c.el);
    },
    B = (c, u, p, b) => {
      [c.el, c.anchor] = P(c.children, u, p, b, c.el, c.anchor);
    },
    q = ({ el: c, anchor: u }, p, b) => {
      let g;
      for (; c && c !== u; ) (g = S(c)), n(c, p, b), (c = g);
      n(u, p, b);
    },
    A = ({ el: c, anchor: u }) => {
      let p;
      for (; c && c !== u; ) (p = S(c)), r(c), (c = p);
      r(u);
    },
    G = (c, u, p, b, g, m, w, x, y) => {
      if (
        (u.type === "svg" ? (w = "svg") : u.type === "math" && (w = "mathml"),
        c == null)
      )
        Fe(u, p, b, g, m, w, x, y);
      else {
        const v = c.el && c.el._isVueCE ? c.el : null;
        try {
          v && v._beginPatch(), Dt(c, u, g, m, w, x, y);
        } finally {
          v && v._endPatch();
        }
      }
    },
    Fe = (c, u, p, b, g, m, w, x) => {
      let y, v;
      const { props: I, shapeFlag: C, transition: E, dirs: O } = c;
      if (
        ((y = c.el = i(c.type, m, I && I.is, I)),
        C & 8
          ? a(y, c.children)
          : C & 16 && De(c.children, y, null, b, g, ws(c, m), w, x),
        O && Xe(c, null, b, "created"),
        me(y, c, c.scopeId, w, b),
        I)
      ) {
        for (const j in I) j !== "value" && !yt(j) && o(y, j, null, I[j], m, b);
        "value" in I && o(y, "value", null, I.value, m),
          (v = I.onVnodeBeforeMount) && we(v, b, c);
      }
      O && Xe(c, null, b, "beforeMount");
      const L = Ci(g, E);
      L && E.beforeEnter(y),
        n(y, u, p),
        ((v = I && I.onVnodeMounted) || L || O) &&
          de(() => {
            v && we(v, b, c), L && E.enter(y), O && Xe(c, null, b, "mounted");
          }, g);
    },
    me = (c, u, p, b, g) => {
      if ((p && T(c, p), b)) for (let m = 0; m < b.length; m++) T(c, b[m]);
      if (g) {
        let m = g.subTree;
        if (
          u === m ||
          (Lr(m.type) && (m.ssContent === u || m.ssFallback === u))
        ) {
          const w = g.vnode;
          me(c, w, w.scopeId, w.slotScopeIds, g.parent);
        }
      }
    },
    De = (c, u, p, b, g, m, w, x, y = 0) => {
      for (let v = y; v < c.length; v++) {
        const I = (c[v] = x ? He(c[v]) : Ce(c[v]));
        R(null, I, u, p, b, g, m, w, x);
      }
    },
    Dt = (c, u, p, b, g, m, w) => {
      const x = (u.el = c.el);
      let { patchFlag: y, dynamicChildren: v, dirs: I } = u;
      y |= c.patchFlag & 16;
      const C = c.props || U,
        E = u.props || U;
      let O;
      if (
        (p && Ze(p, !1),
        (O = E.onVnodeBeforeUpdate) && we(O, p, u, c),
        I && Xe(u, c, p, "beforeUpdate"),
        p && Ze(p, !0),
        ((C.innerHTML && E.innerHTML == null) ||
          (C.textContent && E.textContent == null)) &&
          a(x, ""),
        v
          ? Je(c.dynamicChildren, v, x, p, b, ws(u, g), m)
          : w || H(c, u, x, null, p, b, ws(u, g), m, !1),
        y > 0)
      ) {
        if (y & 16) ht(x, C, E, p, g);
        else if (
          (y & 2 && C.class !== E.class && o(x, "class", null, E.class, g),
          y & 4 && o(x, "style", C.style, E.style, g),
          y & 8)
        ) {
          const L = u.dynamicProps;
          for (let j = 0; j < L.length; j++) {
            const N = L[j],
              le = C[N],
              ce = E[N];
            (ce !== le || N === "value") && o(x, N, le, ce, g, p);
          }
        }
        y & 1 && c.children !== u.children && a(x, u.children);
      } else !w && v == null && ht(x, C, E, p, g);
      ((O = E.onVnodeUpdated) || I) &&
        de(() => {
          O && we(O, p, u, c), I && Xe(u, c, p, "updated");
        }, b);
    },
    Je = (c, u, p, b, g, m, w) => {
      for (let x = 0; x < u.length; x++) {
        const y = c[x],
          v = u[x],
          I =
            y.el && (y.type === re || !vt(y, v) || y.shapeFlag & 198)
              ? h(y.el)
              : p;
        R(y, v, I, null, b, g, m, w, !0);
      }
    },
    ht = (c, u, p, b, g) => {
      if (u !== p) {
        if (u !== U)
          for (const m in u) !yt(m) && !(m in p) && o(c, m, u[m], null, g, b);
        for (const m in p) {
          if (yt(m)) continue;
          const w = p[m],
            x = u[m];
          w !== x && m !== "value" && o(c, m, x, w, g, b);
        }
        "value" in p && o(c, "value", u.value, p.value, g);
      }
    },
    kt = (c, u, p, b, g, m, w, x, y) => {
      const v = (u.el = c ? c.el : l("")),
        I = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: C, dynamicChildren: E, slotScopeIds: O } = u;
      O && (x = x ? x.concat(O) : O),
        c == null
          ? (n(v, p, b), n(I, p, b), De(u.children || [], p, I, g, m, w, x, y))
          : C > 0 &&
            C & 64 &&
            E &&
            c.dynamicChildren &&
            c.dynamicChildren.length === E.length
          ? (Je(c.dynamicChildren, E, p, g, m, w, x),
            (u.key != null || (g && u === g.subTree)) && Mr(c, u, !0))
          : H(c, u, p, I, g, m, w, x, y);
    },
    Nt = (c, u, p, b, g, m, w, x, y) => {
      (u.slotScopeIds = x),
        c == null
          ? u.shapeFlag & 512
            ? g.ctx.activate(u, p, b, w, y)
            : hs(u, p, b, g, m, w, y)
          : en(c, u, y);
    },
    hs = (c, u, p, b, g, m, w) => {
      const x = (c.component = Di(c, b, g));
      if ((gr(c) && (x.ctx.renderer = _t), Ni(x, !1, w), x.asyncDep)) {
        if ((g && g.registerDep(x, te, w), !c.el)) {
          const y = (x.subTree = Y(We));
          F(null, y, u, p), (c.placeholder = y.el);
        }
      } else te(x, c, u, p, g, m, w);
    },
    en = (c, u, p) => {
      const b = (u.component = c.component);
      if (pi(c, u, p))
        if (b.asyncDep && !b.asyncResolved) {
          W(b, u, p);
          return;
        } else (b.next = u), b.update();
      else (u.el = c.el), (b.vnode = u);
    },
    te = (c, u, p, b, g, m, w) => {
      const x = () => {
        if (c.isMounted) {
          let { next: C, bu: E, u: O, parent: L, vnode: j } = c;
          {
            const ye = $r(c);
            if (ye) {
              C && ((C.el = j.el), W(c, C, w)),
                ye.asyncDep.then(() => {
                  c.isUnmounted || x();
                });
              return;
            }
          }
          let N = C,
            le;
          Ze(c, !1),
            C ? ((C.el = j.el), W(c, C, w)) : (C = j),
            E && gs(E),
            (le = C.props && C.props.onVnodeBeforeUpdate) && we(le, L, C, j),
            Ze(c, !0);
          const ce = gn(c),
            be = c.subTree;
          (c.subTree = ce),
            R(be, ce, h(be.el), jt(be), c, g, m),
            (C.el = ce.el),
            N === null && _i(c, ce.el),
            O && de(O, g),
            (le = C.props && C.props.onVnodeUpdated) &&
              de(() => we(le, L, C, j), g);
        } else {
          let C;
          const { el: E, props: O } = u,
            { bm: L, m: j, parent: N, root: le, type: ce } = c,
            be = Ct(u);
          Ze(c, !1),
            L && gs(L),
            !be && (C = O && O.onVnodeBeforeMount) && we(C, N, u),
            Ze(c, !0);
          {
            le.ce &&
              le.ce._def.shadowRoot !== !1 &&
              le.ce._injectChildStyle(ce);
            const ye = (c.subTree = gn(c));
            R(null, ye, p, b, c, g, m), (u.el = ye.el);
          }
          if ((j && de(j, g), !be && (C = O && O.onVnodeMounted))) {
            const ye = u;
            de(() => we(C, N, ye), g);
          }
          (u.shapeFlag & 256 ||
            (N && Ct(N.vnode) && N.vnode.shapeFlag & 256)) &&
            c.a &&
            de(c.a, g),
            (c.isMounted = !0),
            (u = p = b = null);
        }
      };
      c.scope.on();
      const y = (c.effect = new Yn(x));
      c.scope.off();
      const v = (c.update = y.run.bind(y)),
        I = (c.job = y.runIfDirty.bind(y));
      (I.i = c), (I.id = c.uid), (y.scheduler = () => Js(I)), Ze(c, !0), v();
    },
    W = (c, u, p) => {
      u.component = c;
      const b = c.vnode.props;
      (c.vnode = u),
        (c.next = null),
        mi(c, u.props, b, p),
        xi(c, u.children, p),
        $e(),
        un(c),
        Pe();
    },
    H = (c, u, p, b, g, m, w, x, y = !1) => {
      const v = c && c.children,
        I = c ? c.shapeFlag : 0,
        C = u.children,
        { patchFlag: E, shapeFlag: O } = u;
      if (E > 0) {
        if (E & 128) {
          Ht(v, C, p, b, g, m, w, x, y);
          return;
        } else if (E & 256) {
          Ge(v, C, p, b, g, m, w, x, y);
          return;
        }
      }
      O & 8
        ? (I & 16 && pt(v, g, m), C !== v && a(p, C))
        : I & 16
        ? O & 16
          ? Ht(v, C, p, b, g, m, w, x, y)
          : pt(v, g, m, !0)
        : (I & 8 && a(p, ""), O & 16 && De(C, p, b, g, m, w, x, y));
    },
    Ge = (c, u, p, b, g, m, w, x, y) => {
      (c = c || it), (u = u || it);
      const v = c.length,
        I = u.length,
        C = Math.min(v, I);
      let E;
      for (E = 0; E < C; E++) {
        const O = (u[E] = y ? He(u[E]) : Ce(u[E]));
        R(c[E], O, p, null, g, m, w, x, y);
      }
      v > I ? pt(c, g, m, !0, !1, C) : De(u, p, b, g, m, w, x, y, C);
    },
    Ht = (c, u, p, b, g, m, w, x, y) => {
      let v = 0;
      const I = u.length;
      let C = c.length - 1,
        E = I - 1;
      for (; v <= C && v <= E; ) {
        const O = c[v],
          L = (u[v] = y ? He(u[v]) : Ce(u[v]));
        if (vt(O, L)) R(O, L, p, null, g, m, w, x, y);
        else break;
        v++;
      }
      for (; v <= C && v <= E; ) {
        const O = c[C],
          L = (u[E] = y ? He(u[E]) : Ce(u[E]));
        if (vt(O, L)) R(O, L, p, null, g, m, w, x, y);
        else break;
        C--, E--;
      }
      if (v > C) {
        if (v <= E) {
          const O = E + 1,
            L = O < I ? u[O].el : b;
          for (; v <= E; )
            R(null, (u[v] = y ? He(u[v]) : Ce(u[v])), p, L, g, m, w, x, y), v++;
        }
      } else if (v > E) for (; v <= C; ) ve(c[v], g, m, !0), v++;
      else {
        const O = v,
          L = v,
          j = new Map();
        for (v = L; v <= E; v++) {
          const ae = (u[v] = y ? He(u[v]) : Ce(u[v]));
          ae.key != null && j.set(ae.key, v);
        }
        let N,
          le = 0;
        const ce = E - L + 1;
        let be = !1,
          ye = 0;
        const gt = new Array(ce);
        for (v = 0; v < ce; v++) gt[v] = 0;
        for (v = O; v <= C; v++) {
          const ae = c[v];
          if (le >= ce) {
            ve(ae, g, m, !0);
            continue;
          }
          let xe;
          if (ae.key != null) xe = j.get(ae.key);
          else
            for (N = L; N <= E; N++)
              if (gt[N - L] === 0 && vt(ae, u[N])) {
                xe = N;
                break;
              }
          xe === void 0
            ? ve(ae, g, m, !0)
            : ((gt[xe - L] = v + 1),
              xe >= ye ? (ye = xe) : (be = !0),
              R(ae, u[xe], p, null, g, m, w, x, y),
              le++);
        }
        const nn = be ? Ti(gt) : it;
        for (N = nn.length - 1, v = ce - 1; v >= 0; v--) {
          const ae = L + v,
            xe = u[ae],
            rn = u[ae + 1],
            on = ae + 1 < I ? rn.el || Pr(rn) : b;
          gt[v] === 0
            ? R(null, xe, p, on, g, m, w, x, y)
            : be && (N < 0 || v !== nn[N] ? ze(xe, p, on, 2) : N--);
        }
      }
    },
    ze = (c, u, p, b, g = null) => {
      const { el: m, type: w, transition: x, children: y, shapeFlag: v } = c;
      if (v & 6) {
        ze(c.component.subTree, u, p, b);
        return;
      }
      if (v & 128) {
        c.suspense.move(u, p, b);
        return;
      }
      if (v & 64) {
        w.move(c, u, p, _t);
        return;
      }
      if (w === re) {
        n(m, u, p);
        for (let C = 0; C < y.length; C++) ze(y[C], u, p, b);
        n(c.anchor, u, p);
        return;
      }
      if (w === Yt) {
        q(c, u, p);
        return;
      }
      if (b !== 2 && v & 1 && x)
        if (b === 0) x.beforeEnter(m), n(m, u, p), de(() => x.enter(m), g);
        else {
          const { leave: C, delayLeave: E, afterLeave: O } = x,
            L = () => {
              c.ctx.isUnmounted ? r(m) : n(m, u, p);
            },
            j = () => {
              m._isLeaving && m[Uo](!0),
                C(m, () => {
                  L(), O && O();
                });
            };
          E ? E(m, L, j) : j();
        }
      else n(m, u, p);
    },
    ve = (c, u, p, b = !1, g = !1) => {
      const {
        type: m,
        props: w,
        ref: x,
        children: y,
        dynamicChildren: v,
        shapeFlag: I,
        patchFlag: C,
        dirs: E,
        cacheIndex: O,
      } = c;
      if (
        (C === -2 && (g = !1),
        x != null && ($e(), St(x, null, p, c, !0), Pe()),
        O != null && (u.renderCache[O] = void 0),
        I & 256)
      ) {
        u.ctx.deactivate(c);
        return;
      }
      const L = I & 1 && E,
        j = !Ct(c);
      let N;
      if ((j && (N = w && w.onVnodeBeforeUnmount) && we(N, u, c), I & 6))
        Ur(c.component, p, b);
      else {
        if (I & 128) {
          c.suspense.unmount(p, b);
          return;
        }
        L && Xe(c, null, u, "beforeUnmount"),
          I & 64
            ? c.type.remove(c, u, p, _t, b)
            : v && !v.hasOnce && (m !== re || (C > 0 && C & 64))
            ? pt(v, u, p, !1, !0)
            : ((m === re && C & 384) || (!g && I & 16)) && pt(y, u, p),
          b && tn(c);
      }
      ((j && (N = w && w.onVnodeUnmounted)) || L) &&
        de(() => {
          N && we(N, u, c), L && Xe(c, null, u, "unmounted");
        }, p);
    },
    tn = (c) => {
      const { type: u, el: p, anchor: b, transition: g } = c;
      if (u === re) {
        Kr(p, b);
        return;
      }
      if (u === Yt) {
        A(c);
        return;
      }
      const m = () => {
        r(p), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: w, delayLeave: x } = g,
          y = () => w(p, m);
        x ? x(c.el, m, y) : y();
      } else m();
    },
    Kr = (c, u) => {
      let p;
      for (; c !== u; ) (p = S(c)), r(c), (c = p);
      r(u);
    },
    Ur = (c, u, p) => {
      const { bum: b, scope: g, job: m, subTree: w, um: x, m: y, a: v } = c;
      bn(y),
        bn(v),
        b && gs(b),
        g.stop(),
        m && ((m.flags |= 8), ve(w, c, u, p)),
        x && de(x, u),
        de(() => {
          c.isUnmounted = !0;
        }, u);
    },
    pt = (c, u, p, b = !1, g = !1, m = 0) => {
      for (let w = m; w < c.length; w++) ve(c[w], u, p, b, g);
    },
    jt = (c) => {
      if (c.shapeFlag & 6) return jt(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const u = S(c.anchor || c.el),
        p = u && u[jo];
      return p ? S(p) : u;
    };
  let ps = !1;
  const sn = (c, u, p) => {
      let b;
      c == null
        ? u._vnode && (ve(u._vnode, null, null, !0), (b = u._vnode.component))
        : R(u._vnode || null, c, u, null, null, null, p),
        (u._vnode = c),
        ps || ((ps = !0), un(b), ur(), (ps = !1));
    },
    _t = {
      p: R,
      um: ve,
      m: ze,
      r: tn,
      mt: hs,
      mc: De,
      pc: H,
      pbc: Je,
      n: jt,
      o: e,
    };
  return { render: sn, hydrate: void 0, createApp: ci(sn) };
}
function ws({ type: e, props: t }, s) {
  return (s === "svg" && e === "foreignObject") ||
    (s === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : s;
}
function Ze({ effect: e, job: t }, s) {
  s ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function Ci(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Mr(e, t, s = !1) {
  const n = e.children,
    r = t.children;
  if (M(n) && M(r))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let l = r[o];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[o] = He(r[o])), (l.el = i.el)),
        !s && l.patchFlag !== -2 && Mr(i, l)),
        l.type === as &&
          (l.patchFlag !== -1
            ? (l.el = i.el)
            : (l.__elIndex = o + (e.type === re ? 1 : 0))),
        l.type === We && !l.el && (l.el = i.el);
    }
}
function Ti(e) {
  const t = e.slice(),
    s = [0];
  let n, r, o, i, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const d = e[n];
    if (d !== 0) {
      if (((r = s[s.length - 1]), e[r] < d)) {
        (t[n] = r), s.push(n);
        continue;
      }
      for (o = 0, i = s.length - 1; o < i; )
        (l = (o + i) >> 1), e[s[l]] < d ? (o = l + 1) : (i = l);
      d < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), (s[o] = n));
    }
  }
  for (o = s.length, i = s[o - 1]; o-- > 0; ) (s[o] = i), (i = t[i]);
  return s;
}
function $r(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : $r(t);
}
function bn(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Pr(e) {
  if (e.placeholder) return e.placeholder;
  const t = e.component;
  return t ? Pr(t.subTree) : null;
}
const Lr = (e) => e.__isSuspense;
function Ei(e, t) {
  t && t.pendingBranch
    ? M(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ro(e);
}
const re = Symbol.for("v-fgt"),
  as = Symbol.for("v-txt"),
  We = Symbol.for("v-cmt"),
  Yt = Symbol.for("v-stc"),
  Et = [];
let he = null;
function z(e = !1) {
  Et.push((he = e ? null : []));
}
function Ii() {
  Et.pop(), (he = Et[Et.length - 1] || null);
}
let Mt = 1;
function yn(e, t = !1) {
  (Mt += e), e < 0 && he && t && (he.hasOnce = !0);
}
function Rr(e) {
  return (
    (e.dynamicChildren = Mt > 0 ? he || it : null),
    Ii(),
    Mt > 0 && he && he.push(e),
    e
  );
}
function X(e, t, s, n, r, o) {
  return Rr(_(e, t, s, n, r, o, !0));
}
function Ai(e, t, s, n, r) {
  return Rr(Y(e, t, s, n, r, !0));
}
function Fr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function vt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dr = ({ key: e }) => e ?? null,
  Jt = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? J(e) || Q(e) || $(e)
        ? { i: Te, r: e, k: t, f: !!s }
        : e
      : null
  );
function _(
  e,
  t = null,
  s = null,
  n = 0,
  r = null,
  o = e === re ? 0 : 1,
  i = !1,
  l = !1
) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dr(t),
    ref: t && Jt(t),
    scopeId: dr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Te,
  };
  return (
    l
      ? (Zs(f, s), o & 128 && e.normalize(f))
      : s && (f.shapeFlag |= J(s) ? 8 : 16),
    Mt > 0 &&
      !i &&
      he &&
      (f.patchFlag > 0 || o & 6) &&
      f.patchFlag !== 32 &&
      he.push(f),
    f
  );
}
const Y = Oi;
function Oi(e, t = null, s = null, n = 0, r = null, o = !1) {
  if (((!e || e === ei) && (e = We), Fr(e))) {
    const l = dt(e, t, !0);
    return (
      s && Zs(l, s),
      Mt > 0 &&
        !o &&
        he &&
        (l.shapeFlag & 6 ? (he[he.indexOf(e)] = l) : he.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Ui(e) && (e = e.__vccOpts), t)) {
    t = Mi(t);
    let { class: l, style: f } = t;
    l && !J(l) && (t.class = ut(l)),
      V(f) && (Ys(f) && !M(f) && (f = ie({}, f)), (t.style = st(f)));
  }
  const i = J(e) ? 1 : Lr(e) ? 128 : Ko(e) ? 64 : V(e) ? 4 : $(e) ? 2 : 0;
  return _(e, t, s, n, r, i, o, !0);
}
function Mi(e) {
  return e ? (Ys(e) || Cr(e) ? ie({}, e) : e) : null;
}
function dt(e, t, s = !1, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: f } = e,
    d = t ? Li(r || {}, t) : r,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && Dr(d),
      ref:
        t && t.ref
          ? s && o
            ? M(o)
              ? o.concat(Jt(t))
              : [o, Jt(t)]
            : Jt(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== re ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: f,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && dt(e.ssContent),
      ssFallback: e.ssFallback && dt(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return f && n && Gs(a, f.clone(a)), a;
}
function $i(e = " ", t = 0) {
  return Y(as, null, e, t);
}
function Pi(e, t) {
  const s = Y(Yt, null, e);
  return (s.staticCount = t), s;
}
function kr(e = "", t = !1) {
  return t ? (z(), Ai(We, null, e)) : Y(We, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean"
    ? Y(We)
    : M(e)
    ? Y(re, null, e.slice())
    : Fr(e)
    ? He(e)
    : Y(as, null, String(e));
}
function He(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : dt(e);
}
function Zs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (M(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Zs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Cr(t)
        ? (t._ctx = Te)
        : r === 3 &&
          Te &&
          (Te.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    $(t)
      ? ((t = { default: t, _ctx: Te }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [$i(t)])) : (s = 8));
  (e.children = t), (e.shapeFlag |= s);
}
function Li(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = ut([t.class, n.class]));
      else if (r === "style") t.style = st([t.style, n.style]);
      else if (ss(r)) {
        const o = t[r],
          i = n[r];
        i &&
          o !== i &&
          !(M(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function we(e, t, s, n = null) {
  Ie(e, t, 7, [s, n]);
}
const Ri = yr();
let Fi = 0;
function Di(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || Ri,
    o = {
      uid: Fi++,
      vnode: e,
      type: n,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new eo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Er(n, r),
      emitsOptions: xr(n, r),
      emit: null,
      emitted: null,
      propsDefaults: U,
      inheritAttrs: n.inheritAttrs,
      ctx: U,
      data: U,
      props: U,
      attrs: U,
      slots: U,
      refs: U,
      setupState: U,
      setupContext: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = ui.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let oe = null;
const ki = () => oe || Te;
let ts, Rs;
{
  const e = os(),
    t = (s, n) => {
      let r;
      return (
        (r = e[s]) || (r = e[s] = []),
        r.push(n),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  (ts = t("__VUE_INSTANCE_SETTERS__", (s) => (oe = s))),
    (Rs = t("__VUE_SSR_SETTERS__", (s) => ($t = s)));
}
const Rt = (e) => {
    const t = oe;
    return (
      ts(e),
      e.scope.on(),
      () => {
        e.scope.off(), ts(t);
      }
    );
  },
  xn = () => {
    oe && oe.scope.off(), ts(null);
  };
function Nr(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function Ni(e, t = !1, s = !1) {
  t && Rs(t);
  const { props: n, children: r } = e.vnode,
    o = Nr(e);
  gi(e, n, o, t), yi(e, r, s || t);
  const i = o ? Hi(e, t) : void 0;
  return t && Rs(!1), i;
}
function Hi(e, t) {
  const s = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, ti));
  const { setup: n } = s;
  if (n) {
    $e();
    const r = (e.setupContext = n.length > 1 ? Ki(e) : null),
      o = Rt(e),
      i = Pt(n, e, 0, [e.props, r]),
      l = Hn(i);
    if ((Pe(), o(), (l || e.sp) && !Ct(e) && _r(e), l)) {
      if ((i.then(xn, xn), t))
        return i
          .then((f) => {
            wn(e, f);
          })
          .catch((f) => {
            ls(f, e, 0);
          });
      e.asyncDep = i;
    } else wn(e, i);
  } else Hr(e);
}
function wn(e, t, s) {
  $(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : V(t) && (e.setupState = lr(t)),
    Hr(e);
}
function Hr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Ee);
  {
    const r = Rt(e);
    $e();
    try {
      si(e);
    } finally {
      Pe(), r();
    }
  }
}
const ji = {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  },
};
function Ki(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, ji),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Qs(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(lr(wo(e.exposed)), {
          get(t, s) {
            if (s in t) return t[s];
            if (s in Tt) return Tt[s](e);
          },
          has(t, s) {
            return s in t || s in Tt;
          },
        }))
    : e.proxy;
}
function Ui(e) {
  return $(e) && "__vccOpts" in e;
}
const ds = (e, t) => Ao(e, t, $t),
  Bi = "3.5.26";
/**
 * @vue/runtime-dom v3.5.26
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Fs;
const Sn = typeof window < "u" && window.trustedTypes;
if (Sn)
  try {
    Fs = Sn.createPolicy("vue", { createHTML: (e) => e });
  } catch {}
const jr = Fs ? (e) => Fs.createHTML(e) : (e) => e,
  Vi = "http://www.w3.org/2000/svg",
  Wi = "http://www.w3.org/1998/Math/MathML",
  Oe = typeof document < "u" ? document : null,
  Cn = Oe && Oe.createElement("template"),
  qi = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, s, n) => {
      const r =
        t === "svg"
          ? Oe.createElementNS(Vi, e)
          : t === "mathml"
          ? Oe.createElementNS(Wi, e)
          : s
          ? Oe.createElement(e, { is: s })
          : Oe.createElement(e);
      return (
        e === "select" &&
          n &&
          n.multiple != null &&
          r.setAttribute("multiple", n.multiple),
        r
      );
    },
    createText: (e) => Oe.createTextNode(e),
    createComment: (e) => Oe.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Oe.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, s, n, r, o) {
      const i = s ? s.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), s),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        Cn.innerHTML = jr(
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
            ? `<math>${e}</math>`
            : e
        );
        const l = Cn.content;
        if (n === "svg" || n === "mathml") {
          const f = l.firstChild;
          for (; f.firstChild; ) l.appendChild(f.firstChild);
          l.removeChild(f);
        }
        t.insertBefore(l, s);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ];
    },
  },
  Yi = Symbol("_vtc");
function Ji(e, t, s) {
  const n = e[Yi];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : s
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Tn = Symbol("_vod"),
  Gi = Symbol("_vsh"),
  zi = Symbol(""),
  Xi = /(?:^|;)\s*display\s*:/;
function Zi(e, t, s) {
  const n = e.style,
    r = J(s);
  let o = !1;
  if (s && !r) {
    if (t)
      if (J(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          s[l] == null && Gt(n, l, "");
        }
      else for (const i in t) s[i] == null && Gt(n, i, "");
    for (const i in s) i === "display" && (o = !0), Gt(n, i, s[i]);
  } else if (r) {
    if (t !== s) {
      const i = n[zi];
      i && (s += ";" + i), (n.cssText = s), (o = Xi.test(s));
    }
  } else t && e.removeAttribute("style");
  Tn in e && ((e[Tn] = o ? n.display : ""), e[Gi] && (n.display = "none"));
}
const En = /\s*!important$/;
function Gt(e, t, s) {
  if (M(s)) s.forEach((n) => Gt(e, t, n));
  else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
  else {
    const n = Qi(e, t);
    En.test(s)
      ? e.setProperty(nt(n), s.replace(En, ""), "important")
      : (e[n] = s);
  }
}
const In = ["Webkit", "Moz", "ms"],
  Ss = {};
function Qi(e, t) {
  const s = Ss[t];
  if (s) return s;
  let n = Ve(t);
  if (n !== "filter" && n in e) return (Ss[t] = n);
  n = Un(n);
  for (let r = 0; r < In.length; r++) {
    const o = In[r] + n;
    if (o in e) return (Ss[t] = o);
  }
  return t;
}
const An = "http://www.w3.org/1999/xlink";
function On(e, t, s, n, r, o = Qr(t)) {
  n && t.startsWith("xlink:")
    ? s == null
      ? e.removeAttributeNS(An, t.slice(6, t.length))
      : e.setAttributeNS(An, t, s)
    : s == null || (o && !Vn(s))
    ? e.removeAttribute(t)
    : e.setAttribute(t, o ? "" : qe(s) ? String(s) : s);
}
function Mn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? jr(s) : s);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
      f = s == null ? (e.type === "checkbox" ? "on" : "") : String(s);
    (l !== f || !("_value" in e)) && (e.value = f),
      s == null && e.removeAttribute(t),
      (e._value = s);
    return;
  }
  let i = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (s = Vn(s))
      : s == null && l === "string"
      ? ((s = ""), (i = !0))
      : l === "number" && ((s = 0), (i = !0));
  }
  try {
    e[t] = s;
  } catch {}
  i && e.removeAttribute(r || t);
}
function el(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function tl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const $n = Symbol("_vei");
function sl(e, t, s, n, r = null) {
  const o = e[$n] || (e[$n] = {}),
    i = o[t];
  if (n && i) i.value = n;
  else {
    const [l, f] = nl(t);
    if (n) {
      const d = (o[t] = il(n, r));
      el(e, l, d, f);
    } else i && (tl(e, l, i, f), (o[t] = void 0));
  }
}
const Pn = /(?:Once|Passive|Capture)$/;
function nl(e) {
  let t;
  if (Pn.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(Pn)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : nt(e.slice(2)), t];
}
let Cs = 0;
const rl = Promise.resolve(),
  ol = () => Cs || (rl.then(() => (Cs = 0)), (Cs = Date.now()));
function il(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    Ie(ll(n, s.value), t, 5, [n]);
  };
  return (s.value = e), (s.attached = ol()), s;
}
function ll(e, t) {
  if (M(t)) {
    const s = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0);
      }),
      t.map((n) => (r) => !r._stopped && n && n(r))
    );
  } else return t;
}
const Ln = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  cl = (e, t, s, n, r, o) => {
    const i = r === "svg";
    t === "class"
      ? Ji(e, n, i)
      : t === "style"
      ? Zi(e, s, n)
      : ss(t)
      ? ks(t) || sl(e, t, s, n, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : fl(e, t, n, i)
        )
      ? (Mn(e, t, n),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          On(e, t, n, i, o, t !== "value"))
      : e._isVueCE && (/[A-Z]/.test(t) || !J(n))
      ? Mn(e, Ve(t), n, o, t)
      : (t === "true-value"
          ? (e._trueValue = n)
          : t === "false-value" && (e._falseValue = n),
        On(e, t, n, i));
  };
function fl(e, t, s, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Ln(t) && $(s))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "autocorrect" ||
    (t === "sandbox" && e.tagName === "IFRAME") ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ln(t) && J(s) ? !1 : t in e;
}
const ul = ["ctrl", "shift", "alt", "meta"],
  al = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => ul.some((s) => e[`${s}Key`] && !t.includes(s)),
  },
  Ke = (e, t) => {
    const s = e._withMods || (e._withMods = {}),
      n = t.join(".");
    return (
      s[n] ||
      (s[n] = (r, ...o) => {
        for (let i = 0; i < t.length; i++) {
          const l = al[t[i]];
          if (l && l(r, t)) return;
        }
        return e(r, ...o);
      })
    );
  },
  dl = ie({ patchProp: cl }, qi);
let Rn;
function hl() {
  return Rn || (Rn = wi(dl));
}
const pl = (...e) => {
  const t = hl().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const r = gl(n);
      if (!r) return;
      const o = t._component;
      !$(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
      const i = s(r, !1, _l(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function _l(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gl(e) {
  return J(e) ? document.querySelector(e) : e;
}
const Ue = "/logo.png",
  Ft = (e, t) => {
    const s = e.__vccOpts || e;
    for (const [n, r] of t) s[n] = r;
    return s;
  },
  ml = { key: 0, class: "loader" },
  vl = { class: "loader__circle" },
  bl = { class: "loader__card-inner" },
  yl = { class: "loader__card-frame" },
  xl = ["src", "alt"],
  wl = {
    __name: "Loader",
    setup(e) {
      const t = ue(!0),
        s = ds(() => {
          const n = [];
          for (let r = 3; r <= 20; r++)
            n.push({ src: `/img/${r}.jpg`, alt: `UP Character ${r}` });
          return n;
        });
      return (
        Ye(() => {
          setTimeout(() => {
            (t.value = !1),
              document.body.classList.remove("loader-active"),
              document.body.classList.add("loaded");
          }, 5e3),
            document.body.classList.add("loader-active");
        }),
        (n, r) =>
          t.value
            ? (z(),
              X("div", ml, [
                _("div", vl, [
                  (z(!0),
                  X(
                    re,
                    null,
                    Lt(
                      s.value,
                      (o, i) => (
                        z(),
                        X(
                          "div",
                          {
                            key: `loader-card-${i}`,
                            class: "loader__card",
                            style: st({
                              "--index": i,
                              "--total": s.value.length,
                              "--angle": (360 / s.value.length) * i,
                              "z-index": s.value.length - i,
                            }),
                          },
                          4
                        )
                      )
                    ),
                    128
                  )),
                ]),
                r[1] ||
                  (r[1] = _(
                    "div",
                    { class: "loader__logo" },
                    [_("img", { src: Ue, alt: "UP" })],
                    -1
                  )),
              ]))
            : kr("", !0)
      );
    },
  },
  Sl = Ft(wl, [["__scopeId", "data-v-58f34779"]]),
  Cl = "/up.png",
  Tl = { key: 0, class: "animated-arrows" },
  El = {
    __name: "AnimatedArrows",
    setup(e) {
      const t = ue([]);
      let s = null,
        n = 0,
        r = null;
      const o = ue(!0),
        i = ds(
          () =>
            o.value ||
            (typeof document < "u" &&
              document.body.classList.contains("loader-active"))
        ),
        l = () => {
          typeof document < "u" &&
            (o.value = document.body.classList.contains("loader-active"));
        },
        f = () => {
          if (i.value) {
            t.value = [];
            return;
          }
          const d = 3,
            a = [];
          for (let h = 0; h < d; h++)
            a.push({
              id: n++,
              left: 10 + Math.random() * 80,
              delay: Math.random() * 2,
              duration: 4 + Math.random() * 2,
            });
          t.value = a;
        };
      return (
        Ye(() => {
          l(),
            (r = setInterval(() => {
              l(),
                i.value
                  ? ((t.value = []), s && (clearInterval(s), (s = null)))
                  : t.value.length === 0 && f();
            }, 100)),
            i.value ||
              (f(),
              (s = setInterval(() => {
                i.value || f();
              }, 6e3)));
        }),
        fs(() => {
          s && clearInterval(s), r && clearInterval(r);
        }),
        (d, a) =>
          i.value
            ? kr("", !0)
            : (z(),
              X("div", Tl, [
                (z(!0),
                X(
                  re,
                  null,
                  Lt(
                    t.value,
                    (h, S) => (
                      z(),
                      X(
                        "div",
                        {
                          key: `arrow-${h.id}`,
                          class: "arrow-item",
                          style: st({
                            left: h.left + "%",
                            animationDelay: h.delay + "s",
                            animationDuration: h.duration + "s",
                          }),
                        },
                        [
                          a[0] ||
                            (a[0] = _(
                              "div",
                              { class: "arrow" },
                              [
                                _("img", {
                                  src: Cl,
                                  alt: "Arrow",
                                  class: "arrow-img",
                                }),
                              ],
                              -1
                            )),
                          _(
                            "div",
                            {
                              class: "arrow-trail",
                              style: st({
                                animationDelay: h.delay + "s",
                                animationDuration: h.duration + "s",
                              }),
                            },
                            null,
                            4
                          ),
                        ],
                        4
                      )
                    )
                  ),
                  128
                )),
              ]))
      );
    },
  },
  Il = Ft(El, [["__scopeId", "data-v-287b7a83"]]),
  Al = { class: "header" },
  Ol = { class: "header__container" },
  Ml = { class: "menu__body" },
  $l = { class: "menu__list" },
  Pl = { class: "menu__item logo" },
  Ll = { class: "menu__item" },
  Rl = { class: "menu__item" },
  Fl = { class: "menu__item" },
  Dl = ["aria-label", "aria-expanded"],
  kl = {
    __name: "Header",
    setup(e) {
      const t = ue(!1),
        s = () => {
          (t.value = !t.value),
            t.value
              ? document.body.classList.add("menu-open")
              : document.body.classList.remove("menu-open");
        },
        n = (r) => {
          const o = document.getElementById(r);
          o &&
            (o.scrollIntoView({ behavior: "smooth", block: "start" }),
            (t.value = !1),
            document.body.classList.remove("menu-open"));
        };
      return (
        qt(t, (r) => {
          r
            ? document.body.classList.add("menu-open")
            : document.body.classList.remove("menu-open");
        }),
        (r, o) => (
          z(),
          X("header", Al, [
            _("div", Ol, [
              _("nav", Ml, [
                _("ul", $l, [
                  _("li", Pl, [
                    _(
                      "a",
                      {
                        href: "#",
                        onClick:
                          o[0] || (o[0] = Ke((i) => n("hero"), ["prevent"])),
                      },
                      [
                        ...(o[4] ||
                          (o[4] = [
                            _("img", { src: Ue, alt: "UP Logo" }, null, -1),
                          ])),
                      ]
                    ),
                  ]),
                  o[5] ||
                    (o[5] = _(
                      "li",
                      { class: "menu__item decor" },
                      [_("img", { src: Ue, alt: "" })],
                      -1
                    )),
                  _("li", Ll, [
                    _(
                      "a",
                      {
                        href: "#hero",
                        class: "menu__link",
                        onClick:
                          o[1] || (o[1] = Ke((i) => n("hero"), ["prevent"])),
                      },
                      "Home"
                    ),
                  ]),
                  o[6] ||
                    (o[6] = _(
                      "li",
                      { class: "menu__item decor" },
                      [_("img", { src: Ue, alt: "" })],
                      -1
                    )),
                  _("li", Rl, [
                    _(
                      "a",
                      {
                        href: "#about",
                        class: "menu__link",
                        onClick:
                          o[2] || (o[2] = Ke((i) => n("about"), ["prevent"])),
                      },
                      "About"
                    ),
                  ]),
                  o[7] ||
                    (o[7] = _(
                      "li",
                      { class: "menu__item decor" },
                      [_("img", { src: Ue, alt: "" })],
                      -1
                    )),
                  _("li", Fl, [
                    _(
                      "a",
                      {
                        href: "#tokenomics",
                        class: "menu__link",
                        onClick:
                          o[3] ||
                          (o[3] = Ke((i) => n("tokenomics"), ["prevent"])),
                      },
                      "Tokenomics"
                    ),
                  ]),
                ]),
              ]),
              _(
                "button",
                {
                  class: "icon-menu",
                  type: "button",
                  onClick: s,
                  "aria-label": t.value ? "Fechar menu" : "Abrir menu",
                  "aria-expanded": t.value,
                },
                [...(o[8] || (o[8] = [_("span", null, null, -1)]))],
                8,
                Dl
              ),
            ]),
          ])
        )
      );
    },
  },
  Nl = "/background.mp4",
  Fn = "/twitter.png",
  Hl = "/telegram.png",
  jl = "/dextools.png",
  Kl = "/jupter.png",
  Ul = { class: "hero", id: "hero" },
  Bl = { class: "hero__bg" },
  Vl = {
    __name: "Hero",
    setup(e) {
      const t = ue(null),
        s = () => {
          t.value &&
            t.value.play().catch(() => {
              console.log("Video autoplay prevented");
            });
        };
      return (
        Ye(() => {
          const n = () => {
            t.value && t.value.paused && t.value.play(),
              document.removeEventListener("touchstart", n),
              document.removeEventListener("click", n);
          };
          document.addEventListener("touchstart", n, { once: !0 }),
            document.addEventListener("click", n, { once: !0 });
        }),
        fs(() => {
          t.value && t.value.pause();
        }),
        (n, r) => (
          z(),
          X("section", Ul, [
            _("div", Bl, [
              _(
                "video",
                {
                  ref_key: "videoRef",
                  ref: t,
                  autoplay: "",
                  muted: "",
                  loop: "",
                  playsinline: "",
                  preload: "auto",
                  onLoadeddata: s,
                },
                [
                  ...(r[0] ||
                    (r[0] = [
                      _("source", { src: Nl, type: "video/mp4" }, null, -1),
                      _("img", { src: Ue, alt: "Fallback" }, null, -1),
                    ])),
                ],
                544
              ),
              r[1] ||
                (r[1] = _("div", { class: "hero__bg-overlay" }, null, -1)),
            ]),
            r[2] ||
              (r[2] = Pi(
                '<div class="hero__container"><div class="hero__content"><div class="hero__title"><img src="' +
                  Ue +
                  '" alt="UP"></div><div class="hero__actions"><div class="hero__social"><a href="https://t.me/wbeEth" class="hero__social-item" target="_blank" rel="noopener noreferrer"><img src="' +
                  Hl +
                  '" alt="Telegram"></a></div><div class="hero__button-box"><a href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon" class="button hero__button" target="_blank" rel="noopener noreferrer"><span>Buy Now</span></a></div><div class="hero__social"><a href="https://x.com/WBE_Eth" class="hero__social-item" target="_blank" rel="noopener noreferrer"><img src="' +
                  Fn +
                  '" alt="Twitter"></a></div></div></div></div>',
                1
              )),
          ])
        )
      );
    },
  },
  Wl = { class: "line" },
  Dn = {
    __name: "LineSection",
    setup(e) {
      return (t, s) => (z(), X("div", Wl));
    },
  },
  ql = "/1.png",
  Yl = { class: "page__about about", id: "about" },
  Jl = { class: "about__container" },
  Gl = { class: "about__button-box" },
  zl = {
    __name: "About",
    setup(e) {
      const t = ue(null),
        s = (n) => {
          const r = document.getElementById(n);
          r && r.scrollIntoView({ behavior: "smooth", block: "start" });
        };
      return (
        Ye(() => {
          const n = new IntersectionObserver(
            (r) => {
              r.forEach((o) => {
                o.isIntersecting && o.target.classList.add("_watcher-view");
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
          );
          t.value &&
            t.value
              .querySelectorAll(
                ".about__title, .about__text, .about__button-box"
              )
              .forEach((o) => {
                n.observe(o),
                  setTimeout(() => {
                    o.classList.contains("_watcher-view") ||
                      o.classList.add("_watcher-view");
                  }, 500);
              });
        }),
        (n, r) => (
          z(),
          X("section", Yl, [
            _("div", Jl, [
              _(
                "div",
                { class: "about__content", ref_key: "contentRef", ref: t },
                [
                  r[2] ||
                    (r[2] = _(
                      "h2",
                      { class: "title about__title" },
                      "ABOUT",
                      -1
                    )),
                  r[3] ||
                    (r[3] = _(
                      "div",
                      { class: "about__text" },
                      [
                        _(
                          "p",
                          null,
                          "I broke up with my girlfriend last week."
                        ),
                        _(
                          "p",
                          null,
                          "She asked if we were renewing our lease and I said “actually no, sorry, i’m getting a van and driving away” And that is exactly what I did."
                        ),
                        _(
                          "p",
                          null,
                          "She cried herself to sleep every night until I left. I bought a 2005 Chevy Astro for $4,000 and it works perfectly, it hasn’t given me a single problem. But it could, and I would be fucked."
                        ),
                        _(
                          "p",
                          null,
                          "Because now I live in it. I sleep in parking lots, I shit at Planet Fitness, I eat McDonalds every night. Last night I got 10 nuggets for $1, on the app. It has been the best week of my life. I am finally free."
                        ),
                        _(
                          "p",
                          null,
                          "l also I quit my job. But I don’t know what the fuck that is, I’m just running away, I hate my life and I hate making my girlfriend feel so ugly because of the person I am and Seattle gets depressingly dark and cold in the winter and so I’m just driving South, down the west coast, chasing the sun."
                        ),
                        _(
                          "p",
                          null,
                          "I have friends up and down the west coast because I’m a professional people pleaser sociopath and so when I get to their city they love to see me. And sometimes I even like to see them too. Mostly though, I’m just writing, and running, and fucking, once in the van actually, because I’m single again, and after all, there’s nothing better than fresh love."
                        ),
                        _(
                          "p",
                          null,
                          "I don’t know what will become of this blog, it used to be my escape, where I could hide from my life, but now I have nothing left from which to hide. The stories have all been completely literally true, it’s not a bit, I wish it was, but the only way I ever get anywhere interesting is by recording life as it is."
                        ),
                      ],
                      -1
                    )),
                  _("div", Gl, [
                    _(
                      "a",
                      {
                        href: "#tokenomics",
                        class: "button about__button",
                        onClick:
                          r[0] ||
                          (r[0] = Ke((o) => s("tokenomics"), ["prevent"])),
                      }
                    ),
                  ]),
                ],
                512
              ),
              r[4] ||
                (r[4] = _(
                  "div",
                  { class: "about__image" },
                  [_("img", { src: ql, alt: "UP Character" })],
                  -1
                )),
            ]),
          ])
        )
      );
    },
  },
  Xl = { class: "page__tokenomics tokenomics", id: "tokenomics" },
  Zl = { class: "tokenomics__container" },
  Ql = { class: "tokenomics__content" },
  ec = { class: "tokenomics__cards" },
  tc = { class: "tokenomics__card-value" },
  sc = { class: "tokenomics__card-label" },
  nc = ["disabled"],
  rc = {
    __name: "Tokenomics",
    setup(e) {
      const t = ue(null),
        s = ue(null),
        n = ue([]),
        r = ue("0xComingSoon"),
        o = ue(!1),
        i = [
          { value: "100,000,000", label: "Token Supply" },
          { value: "0%", label: "Buy/Sell Tax" },
          { value: "100%", label: "LP Burnt" },
          { value: "$WBE", label: "Symbol" },
        ],
        l = async () => {
          if (!o.value)
            try {
              await navigator.clipboard.writeText(r.value),
                (o.value = !0),
                setTimeout(() => {
                  o.value = !1;
                }, 1e3);
            } catch (f) {
              console.error("Failed to copy:", f);
              const d = document.createElement("textarea");
              (d.value = r.value),
                (d.style.position = "fixed"),
                (d.style.opacity = "0"),
                document.body.appendChild(d),
                d.select();
              try {
                document.execCommand("copy"),
                  (o.value = !0),
                  setTimeout(() => {
                    o.value = !1;
                  }, 1e3);
              } catch (a) {
                console.error("Fallback copy failed:", a);
              }
              document.body.removeChild(d);
            }
        };
      return (
        Ye(() => {
          const f = new IntersectionObserver(
            (a) => {
              a.forEach((h) => {
                h.isIntersecting && h.target.classList.add("_watcher-view");
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
          );
          [t.value, s.value, ...n.value.filter(Boolean)].forEach((a) => {
            a && f.observe(a);
          });
        }),
        (f, d) => (
          z(),
          X("section", Xl, [
            _("div", Zl, [
              _(
                "h2",
                { class: "tokenomics__title", ref_key: "titleRef", ref: t },
                "TOKENOMICS",
                512
              ),
              d[4] ||
                (d[4] = _(
                  "div",
                  { class: "tokenomics__divider" },
                  [
                    _(
                      "svg",
                      {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "tokenomics__chevron",
                      },
                      [
                        _("path", {
                          d: "M8 4L4 8L8 12",
                          stroke: "#19FF6A",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          transform: "rotate(-90 8 8)",
                        }),
                      ]
                    ),
                  ],
                  -1
                )),
              _("div", Ql, [
                _("div", ec, [
                  (z(),
                  X(
                    re,
                    null,
                    Lt(i, (a, h) =>
                      _(
                        "div",
                        {
                          key: h,
                          class: "tokenomics__card",
                          ref_for: !0,
                          ref: (S) => (n.value[h] = S),
                        },
                        [
                          d[0] ||
                            (d[0] = _(
                              "div",
                              { class: "tokenomics__card-signature" },
                              [
                                _(
                                  "svg",
                                  {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                  [
                                    _("path", {
                                      d: "M6 2L6 10M2 6L10 6",
                                      stroke: "#19FF6A",
                                      "stroke-width": "1.5",
                                      "stroke-linecap": "round",
                                    }),
                                    _("path", {
                                      d: "M6 2L10 6L6 10L2 6L6 2",
                                      stroke: "#19FF6A",
                                      "stroke-width": "1",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      fill: "none",
                                      opacity: "0.3",
                                    }),
                                  ]
                                ),
                              ],
                              -1
                            )),
                          _("div", tc, Vt(a.value), 1),
                          _("div", sc, Vt(a.label), 1),
                          d[1] ||
                            (d[1] = _(
                              "div",
                              { class: "tokenomics__card-line" },
                              null,
                              -1
                            )),
                        ]
                      )
                    ),
                    64
                  )),
                ]),
                _(
                  "div",
                  {
                    class: ut([
                      "tokenomics__ca",
                      { "tokenomics__ca--copied": o.value },
                    ]),
                    ref_key: "caRef",
                    ref: s,
                  },
                  [
                    d[3] ||
                      (d[3] = _(
                        "div",
                        { class: "tokenomics__ca-label" },
                        "CA",
                        -1
                      )),
                    _(
                      "div",
                      {
                        class: ut([
                          "tokenomics__ca-address",
                          { "tokenomics__ca-address--copied": o.value },
                        ]),
                      },
                      Vt(o.value ? "Copied!" : r.value),
                      3
                    ),
                    _(
                      "button",
                      {
                        type: "button",
                        class: "tokenomics__ca-button",
                        disabled: o.value,
                        onClick: l,
                        "aria-label": "Copy contract address",
                      },
                      [
                        ...(d[2] ||
                          (d[2] = [
                            _(
                              "svg",
                              {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 18 18",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                              [
                                _("rect", {
                                  x: "5",
                                  y: "5",
                                  width: "10",
                                  height: "10",
                                  rx: "2",
                                  stroke: "currentColor",
                                  "stroke-width": "1.5",
                                  fill: "none",
                                }),
                                _("path", {
                                  d: "M3 3H13V13",
                                  stroke: "currentColor",
                                  "stroke-width": "1.5",
                                  "stroke-linecap": "round",
                                }),
                              ],
                              -1
                            ),
                          ])),
                      ],
                      8,
                      nc
                    ),
                  ],
                  2
                ),
              ]),
            ]),
          ])
        )
      );
    },
  },
  oc = Ft(rc, [["__scopeId", "data-v-517c8bab"]]),
  lc = { class: "gallery__container" },
  cc = ["onMouseenter", "onMouseleave", "onClick"],
  fc = { class: "gallery__card-inner" },
  uc = { class: "gallery__card-frame" },
  ac = ["src", "alt"],
  dc = {
    __name: "ImageGallery",
    setup(e) {
      const t = ue(null),
        s = ue(null),
        n = ue(null),
        r = ds(() => {
          const f = [];
          for (let d = 3; d <= 20; d++)
            f.push({ src: `/img/${d}.jpg`, alt: `UP Character ${d}` });
          return f;
        }),
        o = (f) => {
          n.value !== f && (s.value = f);
        },
        i = (f) => {
          n.value !== f && (s.value = null);
        },
        l = (f) => {
          n.value === f ? (n.value = null) : ((n.value = f), (s.value = null));
        };
      return (
        Ye(() => {
          const f = new IntersectionObserver(
            (d) => {
              d.forEach((a) => {
                a.isIntersecting && a.target.classList.add("_watcher-view");
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
          );
          t.value && f.observe(t.value);
        }),
        (f, d) => (
          z(),
          X("section", ic, [
            _("div", lc, [
              _(
                "div",
                { class: "gallery__deck", ref_key: "galleryRef", ref: t },
                [
                  (z(!0),
                  X(
                    re,
                    null,
                    Lt(
                      r.value,
                      (a, h) => (
                        z(),
                        X(
                          "div",
                          {
                            key: h,
                            class: ut([
                              "gallery__card",
                              {
                                "gallery__card--selected": n.value === h,
                                "gallery__card--hover":
                                  s.value === h && n.value !== h,
                              },
                            ]),
                            style: st({
                              "--index": h,
                              "--total": r.value.length,
                              "z-index":
                                n.value === h
                                  ? 100
                                  : s.value === h
                                  ? 50
                                  : h + 1,
                            }),
                            onMouseenter: (S) => o(h),
                            onMouseleave: (S) => i(h),
                            onClick: (S) => l(h),
                          },
                          [
                            _("div", fc, [
                              _("div", uc, [
                                _(
                                  "img",
                                  {
                                    src: a.src,
                                    alt: a.alt,
                                    class: "gallery__card-image",
                                  },
                                  null,
                                  8,
                                  ac
                                ),
                                d[0] ||
                                  (d[0] = _(
                                    "div",
                                    { class: "gallery__card-glow" },
                                    null,
                                    -1
                                  )),
                              ]),
                              d[1] ||
                                (d[1] = _(
                                  "div",
                                  { class: "gallery__card-shadow" },
                                  null,
                                  -1
                                )),
                            ]),
                          ],
                          46,
                          cc
                        )
                      )
                    ),
                    128
                  )),
                ],
                512
              ),
            ]),
          ])
        )
      );
    },
  },
  hc = Ft(dc, [["__scopeId", "data-v-c4328071"]]),
  pc = { class: "footer" },
  _c = { class: "footer__top" },
  gc = { class: "footer__container" },
  mc = { class: "footer__body" },
  vc = { class: "footer__left" },
  bc = { class: "footer__menu" },
  yc = { class: "footer__column footer__column--left" },
  xc = { class: "footer__column footer__column--right" },
  wc = { class: "footer__social" },
  Sc = ["href"],
  Cc = ["src", "alt"],
  Tc = {
    __name: "Footer",
    setup(e) {
      const t = [
          {
            name: "Twitter",
            icon: "/twitter.png",
            url: "https://x.com/WBE_Eth",
          },
          {
            name: "Telegram",
            icon: "/telegram.png",
            url: "https://t.me/upcoinportal",
          },
          {
            name: "Dextools",
            icon: "/dextools.png",
            url: "https://www.dextools.io/app/token/upcoinonsol",
          },
        ],
        s = (n) => {
          const r = document.getElementById(n);
          r && r.scrollIntoView({ behavior: "smooth", block: "start" });
        };
      return (n, r) => (
        z(),
        X("footer", pc, [
          _("div", _c, [
            _("div", gc, [
              _("div", mc, [
                _("div", vc, [
                  _("div", bc, [
                    _("div", yc, [
                      _(
                        "a",
                        {
                          href: "#about",
                          class: "footer__menu-item",
                          onClick:
                            r[0] || (r[0] = Ke((o) => s("about"), ["prevent"])),
                        },
                        "ABOUT"
                      ),
                    ]),
                    _("div", xc, [
                      _(
                        "a",
                        {
                          href: "#tokenomics",
                          class: "footer__menu-item",
                          onClick:
                            r[2] ||
                            (r[2] = Ke((o) => s("tokenomics"), ["prevent"])),
                        },
                        "TOKENOMICS"
                      ),
                    ]),
                  ]),
                  _("div", wc, [
                    (z(),
                    X(
                      re,
                      null,
                      Lt(t, (o) =>
                        _(
                          "a",
                          {
                            key: o.name,
                            href: o.url,
                            class: "footer__social-item",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          [_("img", { src: o.icon, alt: o.name }, null, 8, Cc)],
                          8,
                          Sc
                        )
                      ),
                      64
                    )),
                  ]),
                ]),
                r[3] ||
                  (r[3] = _(
                    "div",
                    { class: "footer__image" },
                    [_("img", { src: Ue, alt: "UP Character" })],
                    -1
                  )),
              ]),
            ]),
          ]),
          r[4] || (r[4] = _("div", { class: "footer__divider" }, null, -1)),
          r[5] ||
            (r[5] = _(
              "div",
              { class: "footer__bottom" },
              [
                _("div", { class: "footer__container" }, [
                  _("div", { class: "footer__bottom-text" }, [
                    _("span", null, "2026 © ALL RIGHTS RESERVED"),
                  ]),
                ]),
              ],
              -1
            )),
        ])
      );
    },
  },
  Ec = Ft(Tc, [["__scopeId", "data-v-34500fa3"]]),
  Ic = { class: "wrapper" },
  Ac = {
    __name: "App",
    setup(e) {
      const t = () => {
        document.body.classList.remove("menu-open");
      };
      return (
        Ye(() => {
          window.addEventListener("scroll", () => {
            const s = document.querySelector(".header");
            window.scrollY > 50
              ? s == null || s.classList.add("_header-scroll")
              : s == null || s.classList.remove("_header-scroll");
          });
        }),
        (s, n) => (
          z(),
          X("div", Ic, [
            Y(Sl),
            Y(Il),
            Y(kl),
            _("div", { class: "menu-open-bg", onClick: t }),
            _("main", null, [Y(Vl), Y(Dn), Y(zl), Y(oc), Y(hc), Y(Dn)]),
            Y(Ec),
          ])
        )
      );
    },
  };
pl(Ac).mount("#app");
