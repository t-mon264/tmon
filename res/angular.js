! function (e)
{
	function t(i)
	{
		if (n[i]) return n[i].exports;
		var r = n[i] = {
			i: i,
			l: !1,
			exports:
			{}
		};
		return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
	}
	var n = {};
	t.m = e, t.c = n, t.i = function (e)
	{
		return e
	}, t.d = function (e, n, i)
	{
		t.o(e, n) || Object.defineProperty(e, n,
		{
			configurable: !1,
			enumerable: !0,
			get: i
		})
	}, t.n = function (e)
	{
		var n = e && e.__esModule ? function ()
		{
			return e.default
		} : function ()
		{
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function (e, t)
	{
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "/", t(t.s = 22)
}([function (e, t, n)
{
	var i, r;
	/*!
	 * jQuery JavaScript Library v3.5.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2020-04-10T15:07Z
	 */
	! function (t, n)
	{
		"use strict";
		"object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e)
		{
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function (n, s)
	{
		"use strict";

		function a(e, t, n)
		{
			n = n || Ce;
			var i, r, s = n.createElement("script");
			if (s.text = e, t)
				for (i in Se)(r = t[i] || t.getAttribute && t.getAttribute(i)) && s.setAttribute(i, r);
			n.head.appendChild(s).parentNode.removeChild(s)
		}

		function o(e)
		{
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ve[be.call(e)] || "object" : typeof e
		}

		function c(e)
		{
			var t = !!e && "length" in e && e.length,
				n = o(e);
			return !we(e) && !_e(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}

		function l(e, t)
		{
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}

		function u(e, t, n)
		{
			return we(t) ? Ee.grep(e, function (e, i)
			{
				return !!t.call(e, i, e) !== n
			}) : t.nodeType ? Ee.grep(e, function (e)
			{
				return e === t !== n
			}) : "string" != typeof t ? Ee.grep(e, function (e)
			{
				return ge.call(t, e) > -1 !== n
			}) : Ee.filter(t, e, n)
		}

		function d(e, t)
		{
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function h(e)
		{
			var t = {};
			return Ee.each(e.match(Le) || [], function (e, n)
			{
				t[n] = !0
			}), t
		}

		function p(e)
		{
			return e
		}

		function f(e)
		{
			throw e
		}

		function m(e, t, n, i)
		{
			var r;
			try
			{
				e && we(r = e.promise) ? r.call(e).done(t).fail(n) : e && we(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
			}
			catch (e)
			{
				n.apply(void 0, [e])
			}
		}

		function g()
		{
			Ce.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), Ee.ready()
		}

		function v(e, t)
		{
			return t.toUpperCase()
		}

		function b(e)
		{
			return e.replace(Ve, "ms-").replace(Ue, v)
		}

		function $()
		{
			this.expando = Ee.expando + $.uid++
		}

		function x(e)
		{
			return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e)
		}

		function y(e, t, n)
		{
			var i;
			if (void 0 === n && 1 === e.nodeType)
				if (i = "data-" + t.replace(Ge, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i)))
				{
					try
					{
						n = x(n)
					}
					catch (e)
					{}
					ze.set(e, t, n)
				}
			else n = void 0;
			return n
		}

		function T(e, t, n, i)
		{
			var r, s, a = 20,
				o = i ? function ()
				{
					return i.cur()
				} : function ()
				{
					return Ee.css(e, t, "")
				},
				c = o(),
				l = n && n[3] || (Ee.cssNumber[t] ? "" : "px"),
				u = e.nodeType && (Ee.cssNumber[t] || "px" !== l && +c) && Ze.exec(Ee.css(e, t));
			if (u && u[3] !== l)
			{
				for (c /= 2, l = l || u[3], u = +c || 1; a--;) Ee.style(e, t, u + l), (1 - s) * (1 - (s = o() / c || .5)) <= 0 && (a = 0), u /= s;
				u *= 2, Ee.style(e, t, u + l), n = n || []
			}
			return n && (u = +u || +c || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = r)), r
		}

		function w(e)
		{
			var t, n = e.ownerDocument,
				i = e.nodeName,
				r = tt[i];
			return r || (t = n.body.appendChild(n.createElement(i)), r = Ee.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), tt[i] = r, r)
		}

		function _(e, t)
		{
			for (var n, i, r = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (n = i.style.display, t ? ("none" === n && (r[s] = Be.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && et(i) && (r[s] = w(i))) : "none" !== n && (r[s] = "none", Be.set(i, "display", n)));
			for (s = 0; s < a; s++) null != r[s] && (e[s].style.display = r[s]);
			return e
		}

		function C(e, t)
		{
			var n;
			return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && l(e, t) ? Ee.merge([e], n) : n
		}

		function S(e, t)
		{
			for (var n = 0, i = e.length; n < i; n++) Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"))
		}

		function E(e, t, n, i, r)
		{
			for (var s, a, c, l, u, d, h = t.createDocumentFragment(), p = [], f = 0, m = e.length; f < m; f++)
				if ((s = e[f]) || 0 === s)
					if ("object" === o(s)) Ee.merge(p, s.nodeType ? [s] : s);
					else if (at.test(s))
			{
				for (a = a || h.appendChild(t.createElement("div")), c = (it.exec(s) || ["", ""])[1].toLowerCase(), l = st[c] || st._default, a.innerHTML = l[1] + Ee.htmlPrefilter(s) + l[2], d = l[0]; d--;) a = a.lastChild;
				Ee.merge(p, a.childNodes), a = h.firstChild, a.textContent = ""
			}
			else p.push(t.createTextNode(s));
			for (h.textContent = "", f = 0; s = p[f++];)
				if (i && Ee.inArray(s, i) > -1) r && r.push(s);
				else if (u = Xe(s), a = C(h.appendChild(s), "script"), u && S(a), n)
				for (d = 0; s = a[d++];) rt.test(s.type || "") && n.push(s);
			return h
		}

		function A()
		{
			return !0
		}

		function k()
		{
			return !1
		}

		function q(e, t)
		{
			return e === O() == ("focus" === t)
		}

		function O()
		{
			try
			{
				return Ce.activeElement
			}
			catch (e)
			{}
		}

		function M(e, t, n, i, r, s)
		{
			var a, o;
			if ("object" == typeof t)
			{
				"string" != typeof n && (i = i || n, n = void 0);
				for (o in t) M(e, o, n, i, t[o], s);
				return e
			}
			if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = k;
			else if (!r) return e;
			return 1 === s && (a = r, r = function (e)
			{
				return Ee().off(e), a.apply(this, arguments)
			}, r.guid = a.guid || (a.guid = Ee.guid++)), e.each(function ()
			{
				Ee.event.add(this, t, r, i, n)
			})
		}

		function D(e, t, n)
		{
			if (!n) return void(void 0 === Be.get(e, t) && Ee.event.add(e, t, A));
			Be.set(e, t, !1), Ee.event.add(e, t,
			{
				namespace: !1,
				handler: function (e)
				{
					var i, r, s = Be.get(this, t);
					if (1 & e.isTrigger && this[t])
					{
						if (s.length)(Ee.event.special[t] ||
						{}).delegateType && e.stopPropagation();
						else if (s = pe.call(arguments), Be.set(this, t, s), i = n(this, t), this[t](), r = Be.get(this, t), s !== r || i ? Be.set(this, t, !1) : r = {}, s !== r) return e.stopImmediatePropagation(), e.preventDefault(), r.value
					}
					else s.length && (Be.set(this, t,
					{
						value: Ee.event.trigger(Ee.extend(s[0], Ee.Event.prototype), s.slice(1), this)
					}), e.stopImmediatePropagation())
				}
			})
		}

		function R(e, t)
		{
			return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ee(e).children("tbody")[0] || e : e
		}

		function P(e)
		{
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function I(e)
		{
			return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
		}

		function L(e, t)
		{
			var n, i, r, s, a, o, c;
			if (1 === t.nodeType)
			{
				if (Be.hasData(e) && (s = Be.get(e), c = s.events))
				{
					Be.remove(t, "handle events");
					for (r in c)
						for (n = 0, i = c[r].length; n < i; n++) Ee.event.add(t, r, c[r][n])
				}
				ze.hasData(e) && (a = ze.access(e), o = Ee.extend(
				{}, a), ze.set(t, o))
			}
		}

		function N(e, t)
		{
			var n = t.nodeName.toLowerCase();
			"input" === n && nt.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
		}

		function j(e, t, n, i)
		{
			t = fe(t);
			var r, s, o, c, l, u, d = 0,
				h = e.length,
				p = h - 1,
				f = t[0],
				m = we(f);
			if (m || h > 1 && "string" == typeof f && !Te.checkClone && dt.test(f)) return e.each(function (r)
			{
				var s = e.eq(r);
				m && (t[0] = f.call(this, r, s.html())), j(s, t, n, i)
			});
			if (h && (r = E(t, e[0].ownerDocument, !1, e, i), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || i))
			{
				for (o = Ee.map(C(r, "script"), P), c = o.length; d < h; d++) l = r, d !== p && (l = Ee.clone(l, !0, !0), c && Ee.merge(o, C(l, "script"))), n.call(e[d], l, d);
				if (c)
					for (u = o[o.length - 1].ownerDocument, Ee.map(o, I), d = 0; d < c; d++) l = o[d], rt.test(l.type || "") && !Be.access(l, "globalEval") && Ee.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Ee._evalUrl && !l.noModule && Ee._evalUrl(l.src,
					{
						nonce: l.nonce || l.getAttribute("nonce")
					}, u) : a(l.textContent.replace(ht, ""), l, u))
			}
			return e
		}

		function H(e, t, n)
		{
			for (var i, r = t ? Ee.filter(t, e) : e, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || Ee.cleanData(C(i)), i.parentNode && (n && Xe(i) && S(C(i, "script")), i.parentNode.removeChild(i));
			return e
		}

		function V(e, t, n)
		{
			var i, r, s, a, o = e.style;
			return n = n || ft(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || Xe(e) || (a = Ee.style(e, t)), !Te.pixelBoxStyles() && pt.test(a) && gt.test(t) && (i = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
		}

		function U(e, t)
		{
			return {
				get: function ()
				{
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function F(e)
		{
			for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
				if ((e = vt[n] + t) in bt) return e
		}

		function B(e)
		{
			var t = Ee.cssProps[e] || $t[e];
			return t || (e in bt ? e : $t[e] = F(e) || e)
		}

		function z(e, t, n)
		{
			var i = Ze.exec(t);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
		}

		function W(e, t, n, i, r, s)
		{
			var a = "width" === t ? 1 : 0,
				o = 0,
				c = 0;
			if (n === (i ? "border" : "content")) return 0;
			for (; a < 4; a += 2) "margin" === n && (c += Ee.css(e, n + Ye[a], !0, r)), i ? ("content" === n && (c -= Ee.css(e, "padding" + Ye[a], !0, r)), "margin" !== n && (c -= Ee.css(e, "border" + Ye[a] + "Width", !0, r))) : (c += Ee.css(e, "padding" + Ye[a], !0, r), "padding" !== n ? c += Ee.css(e, "border" + Ye[a] + "Width", !0, r) : o += Ee.css(e, "border" + Ye[a] + "Width", !0, r));
			return !i && s >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - s - c - o - .5)) || 0), c
		}

		function G(e, t, n)
		{
			var i = ft(e),
				r = !Te.boxSizingReliable() || n,
				s = r && "border-box" === Ee.css(e, "boxSizing", !1, i),
				a = s,
				o = V(e, t, i),
				c = "offset" + t[0].toUpperCase() + t.slice(1);
			if (pt.test(o))
			{
				if (!n) return o;
				o = "auto"
			}
			return (!Te.boxSizingReliable() && s || !Te.reliableTrDimensions() && l(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === Ee.css(e, "display", !1, i)) && e.getClientRects().length && (s = "border-box" === Ee.css(e, "boxSizing", !1, i), (a = c in e) && (o = e[c])), (o = parseFloat(o) || 0) + W(e, t, n || (s ? "border" : "content"), a, i, o) + "px"
		}

		function K(e, t, n, i, r)
		{
			return new K.prototype.init(e, t, n, i, r)
		}

		function Z()
		{
			Ct && (!1 === Ce.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(Z) : n.setTimeout(Z, Ee.fx.interval), Ee.fx.tick())
		}

		function Y()
		{
			return n.setTimeout(function ()
			{
				_t = void 0
			}), _t = Date.now()
		}

		function J(e, t)
		{
			var n, i = 0,
				r = {
					height: e
				};
			for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ye[i], r["margin" + n] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function X(e, t, n)
		{
			for (var i, r = (te.tweeners[t] || []).concat(te.tweeners["*"]), s = 0, a = r.length; s < a; s++)
				if (i = r[s].call(n, t, e)) return i
		}

		function Q(e, t, n)
		{
			var i, r, s, a, o, c, l, u, d = "width" in t || "height" in t,
				h = this,
				p = {},
				f = e.style,
				m = e.nodeType && et(e),
				g = Be.get(e, "fxshow");
			n.queue || (a = Ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function ()
			{
				a.unqueued || o()
			}), a.unqueued++, h.always(function ()
			{
				h.always(function ()
				{
					a.unqueued--, Ee.queue(e, "fx").length || a.empty.fire()
				})
			}));
			for (i in t)
				if (r = t[i], St.test(r))
				{
					if (delete t[i], s = s || "toggle" === r, r === (m ? "hide" : "show"))
					{
						if ("show" !== r || !g || void 0 === g[i]) continue;
						m = !0
					}
					p[i] = g && g[i] || Ee.style(e, i)
				}
			if ((c = !Ee.isEmptyObject(t)) || !Ee.isEmptyObject(p))
			{
				d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = g && g.display, null == l && (l = Be.get(e, "display")), u = Ee.css(e, "display"), "none" === u && (l ? u = l : (_([e], !0), l = e.style.display || l, u = Ee.css(e, "display"), _([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === Ee.css(e, "float") && (c || (h.done(function ()
				{
					f.display = l
				}), null == l && (u = f.display, l = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function ()
				{
					f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
				})), c = !1;
				for (i in p) c || (g ? "hidden" in g && (m = g.hidden) : g = Be.access(e, "fxshow",
				{
					display: l
				}), s && (g.hidden = !m), m && _([e], !0), h.done(function ()
				{
					m || _([e]), Be.remove(e, "fxshow");
					for (i in p) Ee.style(e, i, p[i])
				})), c = X(m ? g[i] : 0, i, h), i in g || (g[i] = c.start, m && (c.end = c.start, c.start = 0))
			}
		}

		function ee(e, t)
		{
			var n, i, r, s, a;
			for (n in e)
				if (i = b(n), r = t[i], s = e[n], Array.isArray(s) && (r = s[1], s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (a = Ee.cssHooks[i]) && "expand" in a)
				{
					s = a.expand(s), delete e[i];
					for (n in s) n in e || (e[n] = s[n], t[n] = r)
				}
			else t[i] = r
		}

		function te(e, t, n)
		{
			var i, r, s = 0,
				a = te.prefilters.length,
				o = Ee.Deferred().always(function ()
				{
					delete c.elem
				}),
				c = function ()
				{
					if (r) return !1;
					for (var t = _t || Y(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, s = 1 - i, a = 0, c = l.tweens.length; a < c; a++) l.tweens[a].run(s);
					return o.notifyWith(e, [l, s, n]), s < 1 && c ? n : (c || o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l]), !1)
				},
				l = o.promise(
				{
					elem: e,
					props: Ee.extend(
					{}, t),
					opts: Ee.extend(!0,
					{
						specialEasing:
						{},
						easing: Ee.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: _t || Y(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n)
					{
						var i = Ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
						return l.tweens.push(i), i
					},
					stop: function (t)
					{
						var n = 0,
							i = t ? l.tweens.length : 0;
						if (r) return this;
						for (r = !0; n < i; n++) l.tweens[n].run(1);
						return t ? (o.notifyWith(e, [l, 1, 0]), o.resolveWith(e, [l, t])) : o.rejectWith(e, [l, t]), this
					}
				}),
				u = l.props;
			for (ee(u, l.opts.specialEasing); s < a; s++)
				if (i = te.prefilters[s].call(l, e, u, l.opts)) return we(i.stop) && (Ee._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i;
			return Ee.map(u, X, l), we(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ee.fx.timer(Ee.extend(c,
			{
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l
		}

		function ne(e)
		{
			return (e.match(Le) || []).join(" ")
		}

		function ie(e)
		{
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function re(e)
		{
			return Array.isArray(e) ? e : "string" == typeof e ? e.match(Le) || [] : []
		}

		function se(e, t, n, i)
		{
			var r;
			if (Array.isArray(t)) Ee.each(t, function (t, r)
			{
				n || Nt.test(e) ? i(e, r) : se(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
			});
			else if (n || "object" !== o(t)) i(e, t);
			else
				for (r in t) se(e + "[" + r + "]", t[r], n, i)
		}

		function ae(e)
		{
			return function (t, n)
			{
				"string" != typeof t && (n = t, t = "*");
				var i, r = 0,
					s = t.toLowerCase().match(Le) || [];
				if (we(n))
					for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		function oe(e, t, n, i)
		{
			function r(o)
			{
				var c;
				return s[o] = !0, Ee.each(e[o] || [], function (e, o)
				{
					var l = o(t, n, i);
					return "string" != typeof l || a || s[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
				}), c
			}
			var s = {},
				a = e === Yt;
			return r(t.dataTypes[0]) || !s["*"] && r("*")
		}

		function ce(e, t)
		{
			var n, i, r = Ee.ajaxSettings.flatOptions ||
			{};
			for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
			return i && Ee.extend(!0, e, i), e
		}

		function le(e, t, n)
		{
			for (var i, r, s, a, o = e.contents, c = e.dataTypes;
				"*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i)
				for (r in o)
					if (o[r] && o[r].test(i))
					{
						c.unshift(r);
						break
					}
			if (c[0] in n) s = c[0];
			else
			{
				for (r in n)
				{
					if (!c[0] || e.converters[r + " " + c[0]])
					{
						s = r;
						break
					}
					a || (a = r)
				}
				s = s || a
			}
			if (s) return s !== c[0] && c.unshift(s), n[s]
		}

		function ue(e, t, n, i)
		{
			var r, s, a, o, c, l = {},
				u = e.dataTypes.slice();
			if (u[1])
				for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
			for (s = u.shift(); s;)
				if (e.responseFields[s] && (n[e.responseFields[s]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = s, s = u.shift())
					if ("*" === s) s = c;
					else if ("*" !== c && c !== s)
			{
				if (!(a = l[c + " " + s] || l["* " + s]))
					for (r in l)
						if (o = r.split(" "), o[1] === s && (a = l[c + " " + o[0]] || l["* " + o[0]]))
						{
							!0 === a ? a = l[r] : !0 !== l[r] && (s = o[0], u.unshift(o[1]));
							break
						}
				if (!0 !== a)
					if (a && e.throws) t = a(t);
					else try
					{
						t = a(t)
					}
				catch (e)
				{
					return {
						state: "parsererror",
						error: a ? e : "No conversion from " + c + " to " + s
					}
				}
			}
			return {
				state: "success",
				data: t
			}
		}
		var de = [],
			he = Object.getPrototypeOf,
			pe = de.slice,
			fe = de.flat ? function (e)
			{
				return de.flat.call(e)
			} : function (e)
			{
				return de.concat.apply([], e)
			},
			me = de.push,
			ge = de.indexOf,
			ve = {},
			be = ve.toString,
			$e = ve.hasOwnProperty,
			xe = $e.toString,
			ye = xe.call(Object),
			Te = {},
			we = function (e)
			{
				return "function" == typeof e && "number" != typeof e.nodeType
			},
			_e = function (e)
			{
				return null != e && e === e.window
			},
			Ce = n.document,
			Se = {
				type: !0,
				src: !0,
				nonce: !0,
				noModule: !0
			},
			Ee = function (e, t)
			{
				return new Ee.fn.init(e, t)
			};
		Ee.fn = Ee.prototype = {
			jquery: "3.5.0",
			constructor: Ee,
			length: 0,
			toArray: function ()
			{
				return pe.call(this)
			},
			get: function (e)
			{
				return null == e ? pe.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function (e)
			{
				var t = Ee.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function (e)
			{
				return Ee.each(this, e)
			},
			map: function (e)
			{
				return this.pushStack(Ee.map(this, function (t, n)
				{
					return e.call(t, n, t)
				}))
			},
			slice: function ()
			{
				return this.pushStack(pe.apply(this, arguments))
			},
			first: function ()
			{
				return this.eq(0)
			},
			last: function ()
			{
				return this.eq(-1)
			},
			even: function ()
			{
				return this.pushStack(Ee.grep(this, function (e, t)
				{
					return (t + 1) % 2
				}))
			},
			odd: function ()
			{
				return this.pushStack(Ee.grep(this, function (e, t)
				{
					return t % 2
				}))
			},
			eq: function (e)
			{
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function ()
			{
				return this.prevObject || this.constructor()
			},
			push: me,
			sort: de.sort,
			splice: de.splice
		}, Ee.extend = Ee.fn.extend = function ()
		{
			var e, t, n, i, r, s, a = arguments[0] ||
				{},
				o = 1,
				c = arguments.length,
				l = !1;
			for ("boolean" == typeof a && (l = a, a = arguments[o] ||
				{}, o++), "object" == typeof a || we(a) || (a = {}), o === c && (a = this, o--); o < c; o++)
				if (null != (e = arguments[o]))
					for (t in e) i = e[t], "__proto__" !== t && a !== i && (l && i && (Ee.isPlainObject(i) || (r = Array.isArray(i))) ? (n = a[t], s = r && !Array.isArray(n) ? [] : r || Ee.isPlainObject(n) ? n :
					{}, r = !1, a[t] = Ee.extend(l, s, i)) : void 0 !== i && (a[t] = i));
			return a
		}, Ee.extend(
		{
			expando: "jQuery" + ("3.5.0" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e)
			{
				throw new Error(e)
			},
			noop: function () {},
			isPlainObject: function (e)
			{
				var t, n;
				return !(!e || "[object Object]" !== be.call(e)) && (!(t = he(e)) || "function" == typeof (n = $e.call(t, "constructor") && t.constructor) && xe.call(n) === ye)
			},
			isEmptyObject: function (e)
			{
				var t;
				for (t in e) return !1;
				return !0
			},
			globalEval: function (e, t, n)
			{
				a(e,
				{
					nonce: t && t.nonce
				}, n)
			},
			each: function (e, t)
			{
				var n, i = 0;
				if (c(e))
					for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
				else
					for (i in e)
						if (!1 === t.call(e[i], i, e[i])) break;
				return e
			},
			makeArray: function (e, t)
			{
				var n = t || [];
				return null != e && (c(Object(e)) ? Ee.merge(n, "string" == typeof e ? [e] : e) : me.call(n, e)), n
			},
			inArray: function (e, t, n)
			{
				return null == t ? -1 : ge.call(t, e, n)
			},
			merge: function (e, t)
			{
				for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
				return e.length = r, e
			},
			grep: function (e, t, n)
			{
				for (var i = [], r = 0, s = e.length, a = !n; r < s; r++) !t(e[r], r) !== a && i.push(e[r]);
				return i
			},
			map: function (e, t, n)
			{
				var i, r, s = 0,
					a = [];
				if (c(e))
					for (i = e.length; s < i; s++) null != (r = t(e[s], s, n)) && a.push(r);
				else
					for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
				return fe(a)
			},
			guid: 1,
			support: Te
		}), "function" == typeof Symbol && (Ee.fn[Symbol.iterator] = de[Symbol.iterator]), Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t)
		{
			ve["[object " + t + "]"] = t.toLowerCase()
		});
		var Ae =
			/*!
			 * Sizzle CSS Selector Engine v2.3.5
			 * https://sizzlejs.com/
			 *
			 * Copyright JS Foundation and other contributors
			 * Released under the MIT license
			 * https://js.foundation/
			 *
			 * Date: 2020-03-14
			 */
			function (e)
			{
				function t(e, t, n, i)
				{
					var r, s, a, o, c, u, h, p = t && t.ownerDocument,
						f = t ? t.nodeType : 9;
					if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
					if (!i && (q(t), t = t || O, D))
					{
						if (11 !== f && (c = ve.exec(e)))
							if (r = c[1])
							{
								if (9 === f)
								{
									if (!(a = t.getElementById(r))) return n;
									if (a.id === r) return n.push(a), n
								}
								else if (p && (a = p.getElementById(r)) && L(t, a) && a.id === r) return n.push(a), n
							}
						else
						{
							if (c[2]) return J.apply(n, t.getElementsByTagName(e)), n;
							if ((r = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
						}
						if (x.qsa && !z[e + " "] && (!R || !R.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase()))
						{
							if (h = e, p = t, 1 === f && (le.test(e) || ce.test(e)))
							{
								for (p = be.test(e) && l(t.parentNode) || t, p === t && x.scope || ((o = t.getAttribute("id")) ? o = o.replace(ye, Te) : t.setAttribute("id", o = N)), u = _(e), s = u.length; s--;) u[s] = (o ? "#" + o : ":scope") + " " + d(u[s]);
								h = u.join(",")
							}
							try
							{
								return J.apply(n, p.querySelectorAll(h)), n
							}
							catch (t)
							{
								z(e, !0)
							}
							finally
							{
								o === N && t.removeAttribute("id")
							}
						}
					}
					return S(e.replace(ae, "$1"), t, n, i)
				}

				function n()
				{
					function e(n, i)
					{
						return t.push(n + " ") > y.cacheLength && delete e[t.shift()], e[n + " "] = i
					}
					var t = [];
					return e
				}

				function i(e)
				{
					return e[N] = !0, e
				}

				function r(e)
				{
					var t = O.createElement("fieldset");
					try
					{
						return !!e(t)
					}
					catch (e)
					{
						return !1
					}
					finally
					{
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function s(e, t)
				{
					for (var n = e.split("|"), i = n.length; i--;) y.attrHandle[n[i]] = t
				}

				function a(e, t)
				{
					var n = t && e,
						i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (i) return i;
					if (n)
						for (; n = n.nextSibling;)
							if (n === t) return -1;
					return e ? 1 : -1
				}

				function o(e)
				{
					return function (t)
					{
						return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && _e(t) === e : t.disabled === e : "label" in t && t.disabled === e
					}
				}

				function c(e)
				{
					return i(function (t)
					{
						return t = +t, i(function (n, i)
						{
							for (var r, s = e([], n.length, t), a = s.length; a--;) n[r = s[a]] && (n[r] = !(i[r] = n[r]))
						})
					})
				}

				function l(e)
				{
					return e && void 0 !== e.getElementsByTagName && e
				}

				function u()
				{}

				function d(e)
				{
					for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
					return i
				}

				function h(e, t, n)
				{
					var i = t.dir,
						r = t.next,
						s = r || i,
						a = n && "parentNode" === s,
						o = V++;
					return t.first ? function (t, n, r)
					{
						for (; t = t[i];)
							if (1 === t.nodeType || a) return e(t, n, r);
						return !1
					} : function (t, n, c)
					{
						var l, u, d, h = [H, o];
						if (c)
						{
							for (; t = t[i];)
								if ((1 === t.nodeType || a) && e(t, n, c)) return !0
						}
						else
							for (; t = t[i];)
								if (1 === t.nodeType || a)
									if (d = t[N] || (t[N] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
									else
									{
										if ((l = u[s]) && l[0] === H && l[1] === o) return h[2] = l[2];
										if (u[s] = h, h[2] = e(t, n, c)) return !0
									} return !1
					}
				}

				function p(e)
				{
					return e.length > 1 ? function (t, n, i)
					{
						for (var r = e.length; r--;)
							if (!e[r](t, n, i)) return !1;
						return !0
					} : e[0]
				}

				function f(e, n, i)
				{
					for (var r = 0, s = n.length; r < s; r++) t(e, n[r], i);
					return i
				}

				function m(e, t, n, i, r)
				{
					for (var s, a = [], o = 0, c = e.length, l = null != t; o < c; o++)(s = e[o]) && (n && !n(s, i, r) || (a.push(s), l && t.push(o)));
					return a
				}

				function g(e, t, n, r, s, a)
				{
					return r && !r[N] && (r = g(r)), s && !s[N] && (s = g(s, a)), i(function (i, a, o, c)
					{
						var l, u, d, h = [],
							p = [],
							g = a.length,
							v = i || f(t || "*", o.nodeType ? [o] : o, []),
							b = !e || !i && t ? v : m(v, h, e, o, c),
							$ = n ? s || (i ? e : g || r) ? [] : a : b;
						if (n && n(b, $, o, c), r)
							for (l = m($, p), r(l, [], o, c), u = l.length; u--;)(d = l[u]) && ($[p[u]] = !(b[p[u]] = d));
						if (i)
						{
							if (s || e)
							{
								if (s)
								{
									for (l = [], u = $.length; u--;)(d = $[u]) && l.push(b[u] = d);
									s(null, $ = [], l, c)
								}
								for (u = $.length; u--;)(d = $[u]) && (l = s ? Q(i, d) : h[u]) > -1 && (i[l] = !(a[l] = d))
							}
						}
						else $ = m($ === a ? $.splice(g, $.length) : $), s ? s(null, a, $, c) : J.apply(a, $)
					})
				}

				function v(e)
				{
					for (var t, n, i, r = e.length, s = y.relative[e[0].type], a = s || y.relative[" "], o = s ? 1 : 0, c = h(function (e)
						{
							return e === t
						}, a, !0), l = h(function (e)
						{
							return Q(t, e) > -1
						}, a, !0), u = [function (e, n, i)
						{
							var r = !s && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
							return t = null, r
						}]; o < r; o++)
						if (n = y.relative[e[o].type]) u = [h(p(u), n)];
						else
						{
							if (n = y.filter[e[o].type].apply(null, e[o].matches), n[N])
							{
								for (i = ++o; i < r && !y.relative[e[i].type]; i++);
								return g(o > 1 && p(u), o > 1 && d(e.slice(0, o - 1).concat(
								{
									value: " " === e[o - 2].type ? "*" : ""
								})).replace(ae, "$1"), n, o < i && v(e.slice(o, i)), i < r && v(e = e.slice(i)), i < r && d(e))
							}
							u.push(n)
						}
					return p(u)
				}

				function b(e, n)
				{
					var r = n.length > 0,
						s = e.length > 0,
						a = function (i, a, o, c, l)
						{
							var u, d, h, p = 0,
								f = "0",
								g = i && [],
								v = [],
								b = E,
								$ = i || s && y.find.TAG("*", l),
								x = H += null == b ? 1 : Math.random() || .1,
								T = $.length;
							for (l && (E = a == O || a || l); f !== T && null != (u = $[f]); f++)
							{
								if (s && u)
								{
									for (d = 0, a || u.ownerDocument == O || (q(u), o = !D); h = e[d++];)
										if (h(u, a || O, o))
										{
											c.push(u);
											break
										}
									l && (H = x)
								}
								r && ((u = !h && u) && p--, i && g.push(u))
							}
							if (p += f, r && f !== p)
							{
								for (d = 0; h = n[d++];) h(g, v, a, o);
								if (i)
								{
									if (p > 0)
										for (; f--;) g[f] || v[f] || (v[f] = Z.call(c));
									v = m(v)
								}
								J.apply(c, v), l && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c)
							}
							return l && (H = x, E = b), g
						};
					return r ? i(a) : a
				}
				var $, x, y, T, w, _, C, S, E, A, k, q, O, M, D, R, P, I, L, N = "sizzle" + 1 * new Date,
					j = e.document,
					H = 0,
					V = 0,
					U = n(),
					F = n(),
					B = n(),
					z = n(),
					W = function (e, t)
					{
						return e === t && (k = !0), 0
					},
					G = {}.hasOwnProperty,
					K = [],
					Z = K.pop,
					Y = K.push,
					J = K.push,
					X = K.slice,
					Q = function (e, t)
					{
						for (var n = 0, i = e.length; n < i; n++)
							if (e[n] === t) return n;
						return -1
					},
					ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					te = "[\\x20\\t\\r\\n\\f]",
					ne = "(?:\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
					ie = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + te + "*\\]",
					re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
					se = new RegExp(te + "+", "g"),
					ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
					oe = new RegExp("^" + te + "*," + te + "*"),
					ce = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
					le = new RegExp(te + "|>"),
					ue = new RegExp(re),
					de = new RegExp("^" + ne + "$"),
					he = {
						ID: new RegExp("^#(" + ne + ")"),
						CLASS: new RegExp("^\\.(" + ne + ")"),
						TAG: new RegExp("^(" + ne + "|[*])"),
						ATTR: new RegExp("^" + ie),
						PSEUDO: new RegExp("^" + re),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + ee + ")$", "i"),
						needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
					},
					pe = /HTML$/i,
					fe = /^(?:input|select|textarea|button)$/i,
					me = /^h\d$/i,
					ge = /^[^{]+\{\s*\[native \w/,
					ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					be = /[+~]/,
					$e = new RegExp("\\\\[\\da-fA-F]{1,6}" + te + "?|\\\\([^\\r\\n\\f])", "g"),
					xe = function (e, t)
					{
						var n = "0x" + e.slice(1) - 65536;
						return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
					},
					ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
					Te = function (e, t)
					{
						return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
					},
					we = function ()
					{
						q()
					},
					_e = h(function (e)
					{
						return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
					},
					{
						dir: "parentNode",
						next: "legend"
					});
				try
				{
					J.apply(K = X.call(j.childNodes), j.childNodes), K[j.childNodes.length].nodeType
				}
				catch (e)
				{
					J = {
						apply: K.length ? function (e, t)
						{
							Y.apply(e, X.call(t))
						} : function (e, t)
						{
							for (var n = e.length, i = 0; e[n++] = t[i++];);
							e.length = n - 1
						}
					}
				}
				x = t.support = {}, w = t.isXML = function (e)
				{
					var t = e.namespaceURI,
						n = (e.ownerDocument || e).documentElement;
					return !pe.test(t || n && n.nodeName || "HTML")
				}, q = t.setDocument = function (e)
				{
					var t, n, i = e ? e.ownerDocument || e : j;
					return i != O && 9 === i.nodeType && i.documentElement ? (O = i, M = O.documentElement, D = !w(O), j != O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.scope = r(function (e)
					{
						return M.appendChild(e).appendChild(O.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
					}), x.attributes = r(function (e)
					{
						return e.className = "i", !e.getAttribute("className")
					}), x.getElementsByTagName = r(function (e)
					{
						return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
					}), x.getElementsByClassName = ge.test(O.getElementsByClassName), x.getById = r(function (e)
					{
						return M.appendChild(e).id = N, !O.getElementsByName || !O.getElementsByName(N).length
					}), x.getById ? (y.filter.ID = function (e)
					{
						var t = e.replace($e, xe);
						return function (e)
						{
							return e.getAttribute("id") === t
						}
					}, y.find.ID = function (e, t)
					{
						if (void 0 !== t.getElementById && D)
						{
							var n = t.getElementById(e);
							return n ? [n] : []
						}
					}) : (y.filter.ID = function (e)
					{
						var t = e.replace($e, xe);
						return function (e)
						{
							var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return n && n.value === t
						}
					}, y.find.ID = function (e, t)
					{
						if (void 0 !== t.getElementById && D)
						{
							var n, i, r, s = t.getElementById(e);
							if (s)
							{
								if ((n = s.getAttributeNode("id")) && n.value === e) return [s];
								for (r = t.getElementsByName(e), i = 0; s = r[i++];)
									if ((n = s.getAttributeNode("id")) && n.value === e) return [s]
							}
							return []
						}
					}), y.find.TAG = x.getElementsByTagName ? function (e, t)
					{
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
					} : function (e, t)
					{
						var n, i = [],
							r = 0,
							s = t.getElementsByTagName(e);
						if ("*" === e)
						{
							for (; n = s[r++];) 1 === n.nodeType && i.push(n);
							return i
						}
						return s
					}, y.find.CLASS = x.getElementsByClassName && function (e, t)
					{
						if (void 0 !== t.getElementsByClassName && D) return t.getElementsByClassName(e)
					}, P = [], R = [], (x.qsa = ge.test(O.querySelectorAll)) && (r(function (e)
					{
						var t;
						M.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll("[id~=" + N + "-]").length || R.push("~="), t = O.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || R.push("\\[" + te + "*name" + te + "*=" + te + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || R.push(".#.+[+~]"), e.querySelectorAll("\\\f"), R.push("[\\r\\n\\f]")
					}), r(function (e)
					{
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = O.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + te + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), M.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
					})), (x.matchesSelector = ge.test(I = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function (e)
					{
						x.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), P.push("!=", re)
					}), R = R.length && new RegExp(R.join("|")), P = P.length && new RegExp(P.join("|")), t = ge.test(M.compareDocumentPosition), L = t || ge.test(M.contains) ? function (e, t)
					{
						var n = 9 === e.nodeType ? e.documentElement : e,
							i = t && t.parentNode;
						return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
					} : function (e, t)
					{
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, W = t ? function (e, t)
					{
						if (e === t) return k = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e == O || e.ownerDocument == j && L(j, e) ? -1 : t == O || t.ownerDocument == j && L(j, t) ? 1 : A ? Q(A, e) - Q(A, t) : 0 : 4 & n ? -1 : 1)
					} : function (e, t)
					{
						if (e === t) return k = !0, 0;
						var n, i = 0,
							r = e.parentNode,
							s = t.parentNode,
							o = [e],
							c = [t];
						if (!r || !s) return e == O ? -1 : t == O ? 1 : r ? -1 : s ? 1 : A ? Q(A, e) - Q(A, t) : 0;
						if (r === s) return a(e, t);
						for (n = e; n = n.parentNode;) o.unshift(n);
						for (n = t; n = n.parentNode;) c.unshift(n);
						for (; o[i] === c[i];) i++;
						return i ? a(o[i], c[i]) : o[i] == j ? -1 : c[i] == j ? 1 : 0
					}, O) : O
				}, t.matches = function (e, n)
				{
					return t(e, null, null, n)
				}, t.matchesSelector = function (e, n)
				{
					if (q(e), x.matchesSelector && D && !z[n + " "] && (!P || !P.test(n)) && (!R || !R.test(n))) try
					{
						var i = I.call(e, n);
						if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
					}
					catch (e)
					{
						z(n, !0)
					}
					return t(n, O, null, [e]).length > 0
				}, t.contains = function (e, t)
				{
					return (e.ownerDocument || e) != O && q(e), L(e, t)
				}, t.attr = function (e, t)
				{
					(e.ownerDocument || e) != O && q(e);
					var n = y.attrHandle[t.toLowerCase()],
						i = n && G.call(y.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
					return void 0 !== i ? i : x.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
				}, t.escape = function (e)
				{
					return (e + "").replace(ye, Te)
				}, t.error = function (e)
				{
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, t.uniqueSort = function (e)
				{
					var t, n = [],
						i = 0,
						r = 0;
					if (k = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(W), k)
					{
						for (; t = e[r++];) t === e[r] && (i = n.push(r));
						for (; i--;) e.splice(n[i], 1)
					}
					return A = null, e
				}, T = t.getText = function (e)
				{
					var t, n = "",
						i = 0,
						r = e.nodeType;
					if (r)
					{
						if (1 === r || 9 === r || 11 === r)
						{
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
						}
						else if (3 === r || 4 === r) return e.nodeValue
					}
					else
						for (; t = e[i++];) n += T(t);
					return n
				}, y = t.selectors = {
					cacheLength: 50,
					createPseudo: i,
					match: he,
					attrHandle:
					{},
					find:
					{},
					relative:
					{
						">":
						{
							dir: "parentNode",
							first: !0
						},
						" ":
						{
							dir: "parentNode"
						},
						"+":
						{
							dir: "previousSibling",
							first: !0
						},
						"~":
						{
							dir: "previousSibling"
						}
					},
					preFilter:
					{
						ATTR: function (e)
						{
							return e[1] = e[1].replace($e, xe), e[3] = (e[3] || e[4] || e[5] || "").replace($e, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function (e)
						{
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
						},
						PSEUDO: function (e)
						{
							var t, n = !e[6] && e[2];
							return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter:
					{
						TAG: function (e)
						{
							var t = e.replace($e, xe).toLowerCase();
							return "*" === e ? function ()
							{
								return !0
							} : function (e)
							{
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function (e)
						{
							var t = U[e + " "];
							return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && U(e, function (e)
							{
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function (e, n, i)
						{
							return function (r)
							{
								var s = t.attr(r, e);
								return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
							}
						},
						CHILD: function (e, t, n, i, r)
						{
							var s = "nth" !== e.slice(0, 3),
								a = "last" !== e.slice(-4),
								o = "of-type" === t;
							return 1 === i && 0 === r ? function (e)
							{
								return !!e.parentNode
							} : function (t, n, c)
							{
								var l, u, d, h, p, f, m = s !== a ? "nextSibling" : "previousSibling",
									g = t.parentNode,
									v = o && t.nodeName.toLowerCase(),
									b = !c && !o,
									$ = !1;
								if (g)
								{
									if (s)
									{
										for (; m;)
										{
											for (h = t; h = h[m];)
												if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
											f = m = "only" === e && !f && "nextSibling"
										}
										return !0
									}
									if (f = [a ? g.firstChild : g.lastChild], a && b)
									{
										for (h = g, d = h[N] || (h[N] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), l = u[e] || [], p = l[0] === H && l[1], $ = p && l[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || ($ = p = 0) || f.pop();)
											if (1 === h.nodeType && ++$ && h === t)
											{
												u[e] = [H, p, $];
												break
											}
									}
									else if (b && (h = t, d = h[N] || (h[N] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), l = u[e] || [], p = l[0] === H && l[1], $ = p), !1 === $)
										for (;
											(h = ++p && h && h[m] || ($ = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++$ || (b && (d = h[N] || (h[N] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), u[e] = [H, $]), h !== t)););
									return ($ -= r) === i || $ % i == 0 && $ / i >= 0
								}
							}
						},
						PSEUDO: function (e, n)
						{
							var r, s = y.pseudos[e] || y.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
							return s[N] ? s(n) : s.length > 1 ? (r = [e, e, "", n], y.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t)
							{
								for (var i, r = s(e, n), a = r.length; a--;) i = Q(e, r[a]), e[i] = !(t[i] = r[a])
							}) : function (e)
							{
								return s(e, 0, r)
							}) : s
						}
					},
					pseudos:
					{
						not: i(function (e)
						{
							var t = [],
								n = [],
								r = C(e.replace(ae, "$1"));
							return r[N] ? i(function (e, t, n, i)
							{
								for (var s, a = r(e, null, i, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
							}) : function (e, i, s)
							{
								return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
							}
						}),
						has: i(function (e)
						{
							return function (n)
							{
								return t(e, n).length > 0
							}
						}),
						contains: i(function (e)
						{
							return e = e.replace($e, xe),
								function (t)
								{
									return (t.textContent || T(t)).indexOf(e) > -1
								}
						}),
						lang: i(function (e)
						{
							return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace($e, xe).toLowerCase(),
								function (t)
								{
									var n;
									do {
										if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
									} while ((t = t.parentNode) && 1 === t.nodeType);
									return !1
								}
						}),
						target: function (t)
						{
							var n = e.location && e.location.hash;
							return n && n.slice(1) === t.id
						},
						root: function (e)
						{
							return e === M
						},
						focus: function (e)
						{
							return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: o(!1),
						disabled: o(!0),
						checked: function (e)
						{
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function (e)
						{
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function (e)
						{
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function (e)
						{
							return !y.pseudos.empty(e)
						},
						header: function (e)
						{
							return me.test(e.nodeName)
						},
						input: function (e)
						{
							return fe.test(e.nodeName)
						},
						button: function (e)
						{
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function (e)
						{
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: c(function ()
						{
							return [0]
						}),
						last: c(function (e, t)
						{
							return [t - 1]
						}),
						eq: c(function (e, t, n)
						{
							return [n < 0 ? n + t : n]
						}),
						even: c(function (e, t)
						{
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: c(function (e, t)
						{
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: c(function (e, t, n)
						{
							for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
							return e
						}),
						gt: c(function (e, t, n)
						{
							for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
							return e
						})
					}
				}, y.pseudos.nth = y.pseudos.eq;
				for ($ in
					{
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) y.pseudos[$] = function (e)
				{
					return function (t)
					{
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}($);
				for ($ in
					{
						submit: !0,
						reset: !0
					}) y.pseudos[$] = function (e)
				{
					return function (t)
					{
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}($);
				return u.prototype = y.filters = y.pseudos, y.setFilters = new u, _ = t.tokenize = function (e, n)
				{
					var i, r, s, a, o, c, l, u = F[e + " "];
					if (u) return n ? 0 : u.slice(0);
					for (o = e, c = [], l = y.preFilter; o;)
					{
						i && !(r = oe.exec(o)) || (r && (o = o.slice(r[0].length) || o), c.push(s = [])), i = !1, (r = ce.exec(o)) && (i = r.shift(), s.push(
						{
							value: i,
							type: r[0].replace(ae, " ")
						}), o = o.slice(i.length));
						for (a in y.filter) !(r = he[a].exec(o)) || l[a] && !(r = l[a](r)) || (i = r.shift(), s.push(
						{
							value: i,
							type: a,
							matches: r
						}), o = o.slice(i.length));
						if (!i) break
					}
					return n ? o.length : o ? t.error(e) : F(e, c).slice(0)
				}, C = t.compile = function (e, t)
				{
					var n, i = [],
						r = [],
						s = B[e + " "];
					if (!s)
					{
						for (t || (t = _(e)), n = t.length; n--;) s = v(t[n]), s[N] ? i.push(s) : r.push(s);
						s = B(e, b(r, i)), s.selector = e
					}
					return s
				}, S = t.select = function (e, t, n, i)
				{
					var r, s, a, o, c, u = "function" == typeof e && e,
						h = !i && _(e = u.selector || e);
					if (n = n || [], 1 === h.length)
					{
						if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (a = s[0]).type && 9 === t.nodeType && D && y.relative[s[1].type])
						{
							if (!(t = (y.find.ID(a.matches[0].replace($e, xe), t) || [])[0])) return n;
							u && (t = t.parentNode), e = e.slice(s.shift().value.length)
						}
						for (r = he.needsContext.test(e) ? 0 : s.length; r-- && (a = s[r], !y.relative[o = a.type]);)
							if ((c = y.find[o]) && (i = c(a.matches[0].replace($e, xe), be.test(s[0].type) && l(t.parentNode) || t)))
							{
								if (s.splice(r, 1), !(e = i.length && d(s))) return J.apply(n, i), n;
								break
							}
					}
					return (u || C(e, h))(i, t, !D, n, !t || be.test(e) && l(t.parentNode) || t), n
				}, x.sortStable = N.split("").sort(W).join("") === N, x.detectDuplicates = !!k, q(), x.sortDetached = r(function (e)
				{
					return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
				}), r(function (e)
				{
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || s("type|href|height|width", function (e, t, n)
				{
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), x.attributes && r(function (e)
				{
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || s("value", function (e, t, n)
				{
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), r(function (e)
				{
					return null == e.getAttribute("disabled")
				}) || s(ee, function (e, t, n)
				{
					var i;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
				}), t
			}(n);
		Ee.find = Ae, Ee.expr = Ae.selectors, Ee.expr[":"] = Ee.expr.pseudos, Ee.uniqueSort = Ee.unique = Ae.uniqueSort, Ee.text = Ae.getText, Ee.isXMLDoc = Ae.isXML, Ee.contains = Ae.contains, Ee.escapeSelector = Ae.escape;
		var ke = function (e, t, n)
			{
				for (var i = [], r = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType)
					{
						if (r && Ee(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			qe = function (e, t)
			{
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			Oe = Ee.expr.match.needsContext,
			Me = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
		Ee.filter = function (e, t, n)
		{
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Ee.find.matchesSelector(i, e) ? [i] : [] : Ee.find.matches(e, Ee.grep(t, function (e)
			{
				return 1 === e.nodeType
			}))
		}, Ee.fn.extend(
		{
			find: function (e)
			{
				var t, n, i = this.length,
					r = this;
				if ("string" != typeof e) return this.pushStack(Ee(e).filter(function ()
				{
					for (t = 0; t < i; t++)
						if (Ee.contains(r[t], this)) return !0
				}));
				for (n = this.pushStack([]), t = 0; t < i; t++) Ee.find(e, r[t], n);
				return i > 1 ? Ee.uniqueSort(n) : n
			},
			filter: function (e)
			{
				return this.pushStack(u(this, e || [], !1))
			},
			not: function (e)
			{
				return this.pushStack(u(this, e || [], !0))
			},
			is: function (e)
			{
				return !!u(this, "string" == typeof e && Oe.test(e) ? Ee(e) : e || [], !1).length
			}
		});
		var De, Re = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(Ee.fn.init = function (e, t, n)
		{
			var i, r;
			if (!e) return this;
			if (n = n || De, "string" == typeof e)
			{
				if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Re.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (i[1])
				{
					if (t = t instanceof Ee ? t[0] : t, Ee.merge(this, Ee.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Ce, !0)), Me.test(i[1]) && Ee.isPlainObject(t))
						for (i in t) we(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				return r = Ce.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : we(e) ? void 0 !== n.ready ? n.ready(e) : e(Ee) : Ee.makeArray(e, this)
		}).prototype = Ee.fn, De = Ee(Ce);
		var Pe = /^(?:parents|prev(?:Until|All))/,
			Ie = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		Ee.fn.extend(
		{
			has: function (e)
			{
				var t = Ee(e, this),
					n = t.length;
				return this.filter(function ()
				{
					for (var e = 0; e < n; e++)
						if (Ee.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t)
			{
				var n, i = 0,
					r = this.length,
					s = [],
					a = "string" != typeof e && Ee(e);
				if (!Oe.test(e))
					for (; i < r; i++)
						for (n = this[i]; n && n !== t; n = n.parentNode)
							if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e)))
							{
								s.push(n);
								break
							}
				return this.pushStack(s.length > 1 ? Ee.uniqueSort(s) : s)
			},
			index: function (e)
			{
				return e ? "string" == typeof e ? ge.call(Ee(e), this[0]) : ge.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t)
			{
				return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))))
			},
			addBack: function (e)
			{
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), Ee.each(
		{
			parent: function (e)
			{
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e)
			{
				return ke(e, "parentNode")
			},
			parentsUntil: function (e, t, n)
			{
				return ke(e, "parentNode", n)
			},
			next: function (e)
			{
				return d(e, "nextSibling")
			},
			prev: function (e)
			{
				return d(e, "previousSibling")
			},
			nextAll: function (e)
			{
				return ke(e, "nextSibling")
			},
			prevAll: function (e)
			{
				return ke(e, "previousSibling")
			},
			nextUntil: function (e, t, n)
			{
				return ke(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n)
			{
				return ke(e, "previousSibling", n)
			},
			siblings: function (e)
			{
				return qe((e.parentNode ||
				{}).firstChild, e)
			},
			children: function (e)
			{
				return qe(e.firstChild)
			},
			contents: function (e)
			{
				return null != e.contentDocument && he(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e), Ee.merge([], e.childNodes))
			}
		}, function (e, t)
		{
			Ee.fn[e] = function (n, i)
			{
				var r = Ee.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Ee.filter(i, r)), this.length > 1 && (Ie[e] || Ee.uniqueSort(r), Pe.test(e) && r.reverse()), this.pushStack(r)
			}
		});
		var Le = /[^\x20\t\r\n\f]+/g;
		Ee.Callbacks = function (e)
		{
			e = "string" == typeof e ? h(e) : Ee.extend(
			{}, e);
			var t, n, i, r, s = [],
				a = [],
				c = -1,
				l = function ()
				{
					for (r = r || e.once, i = t = !0; a.length; c = -1)
						for (n = a.shift(); ++c < s.length;) !1 === s[c].apply(n[0], n[1]) && e.stopOnFalse && (c = s.length, n = !1);
					e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
				},
				u = {
					add: function ()
					{
						return s && (n && !t && (c = s.length - 1, a.push(n)), function t(n)
						{
							Ee.each(n, function (n, i)
							{
								we(i) ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== o(i) && t(i)
							})
						}(arguments), n && !t && l()), this
					},
					remove: function ()
					{
						return Ee.each(arguments, function (e, t)
						{
							for (var n;
								(n = Ee.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= c && c--
						}), this
					},
					has: function (e)
					{
						return e ? Ee.inArray(e, s) > -1 : s.length > 0
					},
					empty: function ()
					{
						return s && (s = []), this
					},
					disable: function ()
					{
						return r = a = [], s = n = "", this
					},
					disabled: function ()
					{
						return !s
					},
					lock: function ()
					{
						return r = a = [], n || t || (s = n = ""), this
					},
					locked: function ()
					{
						return !!r
					},
					fireWith: function (e, n)
					{
						return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
					},
					fire: function ()
					{
						return u.fireWith(this, arguments), this
					},
					fired: function ()
					{
						return !!i
					}
				};
			return u
		}, Ee.extend(
		{
			Deferred: function (e)
			{
				var t = [
						["notify", "progress", Ee.Callbacks("memory"), Ee.Callbacks("memory"), 2],
						["resolve", "done", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 1, "rejected"]
					],
					i = "pending",
					r = {
						state: function ()
						{
							return i
						},
						always: function ()
						{
							return s.done(arguments).fail(arguments), this
						},
						catch: function (e)
						{
							return r.then(null, e)
						},
						pipe: function ()
						{
							var e = arguments;
							return Ee.Deferred(function (n)
							{
								Ee.each(t, function (t, i)
								{
									var r = we(e[i[4]]) && e[i[4]];
									s[i[1]](function ()
									{
										var e = r && r.apply(this, arguments);
										e && we(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						then: function (e, i, r)
						{
							function s(e, t, i, r)
							{
								return function ()
								{
									var o = this,
										c = arguments,
										l = function ()
										{
											var n, l;
											if (!(e < a))
											{
												if ((n = i.apply(o, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
												l = n && ("object" == typeof n || "function" == typeof n) && n.then, we(l) ? r ? l.call(n, s(a, t, p, r), s(a, t, f, r)) : (a++, l.call(n, s(a, t, p, r), s(a, t, f, r), s(a, t, p, t.notifyWith))) : (i !== p && (o = void 0, c = [n]), (r || t.resolveWith)(o, c))
											}
										},
										u = r ? l : function ()
										{
											try
											{
												l()
											}
											catch (n)
											{
												Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= a && (i !== f && (o = void 0, c = [n]), t.rejectWith(o, c))
											}
										};
									e ? u() : (Ee.Deferred.getStackHook && (u.stackTrace = Ee.Deferred.getStackHook()), n.setTimeout(u))
								}
							}
							var a = 0;
							return Ee.Deferred(function (n)
							{
								t[0][3].add(s(0, n, we(r) ? r : p, n.notifyWith)), t[1][3].add(s(0, n, we(e) ? e : p)), t[2][3].add(s(0, n, we(i) ? i : f))
							}).promise()
						},
						promise: function (e)
						{
							return null != e ? Ee.extend(e, r) : r
						}
					},
					s = {};
				return Ee.each(t, function (e, n)
				{
					var a = n[2],
						o = n[5];
					r[n[1]] = a.add, o && a.add(function ()
					{
						i = o
					}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), s[n[0]] = function ()
					{
						return s[n[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[n[0] + "With"] = a.fireWith
				}), r.promise(s), e && e.call(s, s), s
			},
			when: function (e)
			{
				var t = arguments.length,
					n = t,
					i = Array(n),
					r = pe.call(arguments),
					s = Ee.Deferred(),
					a = function (e)
					{
						return function (n)
						{
							i[e] = this, r[e] = arguments.length > 1 ? pe.call(arguments) : n, --t || s.resolveWith(i, r)
						}
					};
				if (t <= 1 && (m(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || we(r[n] && r[n].then))) return s.then();
				for (; n--;) m(r[n], a(n), s.reject);
				return s.promise()
			}
		});
		var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		Ee.Deferred.exceptionHook = function (e, t)
		{
			n.console && n.console.warn && e && Ne.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, Ee.readyException = function (e)
		{
			n.setTimeout(function ()
			{
				throw e
			})
		};
		var je = Ee.Deferred();
		Ee.fn.ready = function (e)
		{
			return je.then(e).catch(function (e)
			{
				Ee.readyException(e)
			}), this
		}, Ee.extend(
		{
			isReady: !1,
			readyWait: 1,
			ready: function (e)
			{
				(!0 === e ? --Ee.readyWait : Ee.isReady) || (Ee.isReady = !0, !0 !== e && --Ee.readyWait > 0 || je.resolveWith(Ce, [Ee]))
			}
		}), Ee.ready.then = je.then, "complete" === Ce.readyState || "loading" !== Ce.readyState && !Ce.documentElement.doScroll ? n.setTimeout(Ee.ready) : (Ce.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));
		var He = function (e, t, n, i, r, s, a)
			{
				var c = 0,
					l = e.length,
					u = null == n;
				if ("object" === o(n))
				{
					r = !0;
					for (c in n) He(e, t, c, n[c], !0, s, a)
				}
				else if (void 0 !== i && (r = !0, we(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n)
					{
						return u.call(Ee(e), n)
					})), t))
					for (; c < l; c++) t(e[c], n, a ? i : i.call(e[c], c, t(e[c], n)));
				return r ? e : u ? t.call(e) : l ? t(e[0], n) : s
			},
			Ve = /^-ms-/,
			Ue = /-([a-z])/g,
			Fe = function (e)
			{
				return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
			};
		$.uid = 1, $.prototype = {
			cache: function (e)
			{
				var t = e[this.expando];
				return t || (t = Object.create(null), Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando,
				{
					value: t,
					configurable: !0
				}))), t
			},
			set: function (e, t, n)
			{
				var i, r = this.cache(e);
				if ("string" == typeof t) r[b(t)] = n;
				else
					for (i in t) r[b(i)] = t[i];
				return r
			},
			get: function (e, t)
			{
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
			},
			access: function (e, t, n)
			{
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t)
			{
				var n, i = e[this.expando];
				if (void 0 !== i)
				{
					if (void 0 !== t)
					{
						Array.isArray(t) ? t = t.map(b) : (t = b(t), t = t in i ? [t] : t.match(Le) || []), n = t.length;
						for (; n--;) delete i[t[n]]
					}(void 0 === t || Ee.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e)
			{
				var t = e[this.expando];
				return void 0 !== t && !Ee.isEmptyObject(t)
			}
		};
		var Be = new $,
			ze = new $,
			We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			Ge = /[A-Z]/g;
		Ee.extend(
		{
			hasData: function (e)
			{
				return ze.hasData(e) || Be.hasData(e)
			},
			data: function (e, t, n)
			{
				return ze.access(e, t, n)
			},
			removeData: function (e, t)
			{
				ze.remove(e, t)
			},
			_data: function (e, t, n)
			{
				return Be.access(e, t, n)
			},
			_removeData: function (e, t)
			{
				Be.remove(e, t)
			}
		}), Ee.fn.extend(
		{
			data: function (e, t)
			{
				var n, i, r, s = this[0],
					a = s && s.attributes;
				if (void 0 === e)
				{
					if (this.length && (r = ze.get(s), 1 === s.nodeType && !Be.get(s, "hasDataAttrs")))
					{
						for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = b(i.slice(5)), y(s, i, r[i])));
						Be.set(s, "hasDataAttrs", !0)
					}
					return r
				}
				return "object" == typeof e ? this.each(function ()
				{
					ze.set(this, e)
				}) : He(this, function (t)
				{
					var n;
					if (s && void 0 === t)
					{
						if (void 0 !== (n = ze.get(s, e))) return n;
						if (void 0 !== (n = y(s, e))) return n
					}
					else this.each(function ()
					{
						ze.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function (e)
			{
				return this.each(function ()
				{
					ze.remove(this, e)
				})
			}
		}), Ee.extend(
		{
			queue: function (e, t, n)
			{
				var i;
				if (e) return t = (t || "fx") + "queue", i = Be.get(e, t), n && (!i || Array.isArray(n) ? i = Be.access(e, t, Ee.makeArray(n)) : i.push(n)), i || []
			},
			dequeue: function (e, t)
			{
				t = t || "fx";
				var n = Ee.queue(e, t),
					i = n.length,
					r = n.shift(),
					s = Ee._queueHooks(e, t),
					a = function ()
					{
						Ee.dequeue(e, t)
					};
				"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete s.stop, r.call(e, a, s)), !i && s && s.empty.fire()
			},
			_queueHooks: function (e, t)
			{
				var n = t + "queueHooks";
				return Be.get(e, n) || Be.access(e, n,
				{
					empty: Ee.Callbacks("once memory").add(function ()
					{
						Be.remove(e, [t + "queue", n])
					})
				})
			}
		}), Ee.fn.extend(
		{
			queue: function (e, t)
			{
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ee.queue(this[0], e) : void 0 === t ? this : this.each(function ()
				{
					var n = Ee.queue(this, e, t);
					Ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e)
				})
			},
			dequeue: function (e)
			{
				return this.each(function ()
				{
					Ee.dequeue(this, e)
				})
			},
			clearQueue: function (e)
			{
				return this.queue(e || "fx", [])
			},
			promise: function (e, t)
			{
				var n, i = 1,
					r = Ee.Deferred(),
					s = this,
					a = this.length,
					o = function ()
					{
						--i || r.resolveWith(s, [s])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Be.get(s[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
				return o(), r.promise(t)
			}
		});
		var Ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ze = new RegExp("^(?:([+-])=|)(" + Ke + ")([a-z%]*)$", "i"),
			Ye = ["Top", "Right", "Bottom", "Left"],
			Je = Ce.documentElement,
			Xe = function (e)
			{
				return Ee.contains(e.ownerDocument, e)
			},
			Qe = {
				composed: !0
			};
		Je.getRootNode && (Xe = function (e)
		{
			return Ee.contains(e.ownerDocument, e) || e.getRootNode(Qe) === e.ownerDocument
		});
		var et = function (e, t)
			{
				return e = t || e, "none" === e.style.display || "" === e.style.display && Xe(e) && "none" === Ee.css(e, "display")
			},
			tt = {};
		Ee.fn.extend(
		{
			show: function ()
			{
				return _(this, !0)
			},
			hide: function ()
			{
				return _(this)
			},
			toggle: function (e)
			{
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function ()
				{
					et(this) ? Ee(this).show() : Ee(this).hide()
				})
			}
		});
		var nt = /^(?:checkbox|radio)$/i,
			it = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
			rt = /^$|^module$|\/(?:java|ecma)script/i;
		! function ()
		{
			var e = Ce.createDocumentFragment(),
				t = e.appendChild(Ce.createElement("div")),
				n = Ce.createElement("input");
			n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", Te.option = !!t.lastChild
		}();
		var st = {
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
		st.tbody = st.tfoot = st.colgroup = st.caption = st.thead, st.th = st.td, Te.option || (st.optgroup = st.option = [1, "<select multiple='multiple'>", "</select>"]);
		var at = /<|&#?\w+;/,
			ot = /^key/,
			ct = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			lt = /^([^.]*)(?:\.(.+)|)/;
		Ee.event = {
			global:
			{},
			add: function (e, t, n, i, r)
			{
				var s, a, o, c, l, u, d, h, p, f, m, g = Be.get(e);
				if (Fe(e))
					for (n.handler && (s = n, n = s.handler, r = s.selector), r && Ee.find.matchesSelector(Je, r), n.guid || (n.guid = Ee.guid++), (c = g.events) || (c = g.events = Object.create(null)), (a = g.handle) || (a = g.handle = function (t)
						{
							return void 0 !== Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : void 0
						}), t = (t || "").match(Le) || [""], l = t.length; l--;) o = lt.exec(t[l]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (d = Ee.event.special[p] ||
					{}, p = (r ? d.delegateType : d.bindType) || p, d = Ee.event.special[p] ||
					{}, u = Ee.extend(
					{
						type: p,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: r,
						needsContext: r && Ee.expr.match.needsContext.test(r),
						namespace: f.join(".")
					}, s), (h = c[p]) || (h = c[p] = [], h.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), Ee.event.global[p] = !0)
			},
			remove: function (e, t, n, i, r)
			{
				var s, a, o, c, l, u, d, h, p, f, m, g = Be.hasData(e) && Be.get(e);
				if (g && (c = g.events))
				{
					for (t = (t || "").match(Le) || [""], l = t.length; l--;)
						if (o = lt.exec(t[l]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p)
						{
							for (d = Ee.event.special[p] ||
								{}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) u = h[s], !r && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
							a && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || Ee.removeEvent(e, p, g.handle), delete c[p])
						}
					else
						for (p in c) Ee.event.remove(e, p + t[l], n, i, !0);
					Ee.isEmptyObject(c) && Be.remove(e, "handle events")
				}
			},
			dispatch: function (e)
			{
				var t, n, i, r, s, a, o = new Array(arguments.length),
					c = Ee.event.fix(e),
					l = (Be.get(this, "events") || Object.create(null))[c.type] || [],
					u = Ee.event.special[c.type] ||
					{};
				for (o[0] = c, t = 1; t < arguments.length; t++) o[t] = arguments[t];
				if (c.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, c))
				{
					for (a = Ee.event.handlers.call(this, c, l), t = 0;
						(r = a[t++]) && !c.isPropagationStopped();)
						for (c.currentTarget = r.elem, n = 0;
							(s = r.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== s.namespace && !c.rnamespace.test(s.namespace) || (c.handleObj = s, c.data = s.data, void 0 !== (i = ((Ee.event.special[s.origType] ||
						{}).handle || s.handler).apply(r.elem, o)) && !1 === (c.result = i) && (c.preventDefault(), c.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, c), c.result
				}
			},
			handlers: function (e, t)
			{
				var n, i, r, s, a, o = [],
					c = t.delegateCount,
					l = e.target;
				if (c && l.nodeType && !("click" === e.type && e.button >= 1))
					for (; l !== this; l = l.parentNode || this)
						if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled))
						{
							for (s = [], a = {}, n = 0; n < c; n++) i = t[n], r = i.selector + " ", void 0 === a[r] && (a[r] = i.needsContext ? Ee(r, this).index(l) > -1 : Ee.find(r, this, null, [l]).length), a[r] && s.push(i);
							s.length && o.push(
							{
								elem: l,
								handlers: s
							})
						}
				return l = this, c < t.length && o.push(
				{
					elem: l,
					handlers: t.slice(c)
				}), o
			},
			addProp: function (e, t)
			{
				Object.defineProperty(Ee.Event.prototype, e,
				{
					enumerable: !0,
					configurable: !0,
					get: we(t) ? function ()
					{
						if (this.originalEvent) return t(this.originalEvent)
					} : function ()
					{
						if (this.originalEvent) return this.originalEvent[e]
					},
					set: function (t)
					{
						Object.defineProperty(this, e,
						{
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function (e)
			{
				return e[Ee.expando] ? e : new Ee.Event(e)
			},
			special:
			{
				load:
				{
					noBubble: !0
				},
				click:
				{
					setup: function (e)
					{
						var t = this || e;
						return nt.test(t.type) && t.click && l(t, "input") && D(t, "click", A), !1
					},
					trigger: function (e)
					{
						var t = this || e;
						return nt.test(t.type) && t.click && l(t, "input") && D(t, "click"), !0
					},
					_default: function (e)
					{
						var t = e.target;
						return nt.test(t.type) && t.click && l(t, "input") && Be.get(t, "click") || l(t, "a")
					}
				},
				beforeunload:
				{
					postDispatch: function (e)
					{
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, Ee.removeEvent = function (e, t, n)
		{
			e.removeEventListener && e.removeEventListener(t, n)
		}, Ee.Event = function (e, t)
		{
			if (!(this instanceof Ee.Event)) return new Ee.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? A : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ee.expando] = !0
		}, Ee.Event.prototype = {
			constructor: Ee.Event,
			isDefaultPrevented: k,
			isPropagationStopped: k,
			isImmediatePropagationStopped: k,
			isSimulated: !1,
			preventDefault: function ()
			{
				var e = this.originalEvent;
				this.isDefaultPrevented = A, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function ()
			{
				var e = this.originalEvent;
				this.isPropagationStopped = A, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function ()
			{
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = A, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, Ee.each(
		{
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			code: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (e)
			{
				var t = e.button;
				return null == e.which && ot.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ct.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, Ee.event.addProp), Ee.each(
		{
			focus: "focusin",
			blur: "focusout"
		}, function (e, t)
		{
			Ee.event.special[e] = {
				setup: function ()
				{
					return D(this, e, q), !1
				},
				trigger: function ()
				{
					return D(this, e), !0
				},
				delegateType: t
			}
		}), Ee.each(
		{
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t)
		{
			Ee.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e)
				{
					var n, i = this,
						r = e.relatedTarget,
						s = e.handleObj;
					return r && (r === i || Ee.contains(i, r)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), Ee.fn.extend(
		{
			on: function (e, t, n, i)
			{
				return M(this, e, t, n, i)
			},
			one: function (e, t, n, i)
			{
				return M(this, e, t, n, i, 1)
			},
			off: function (e, t, n)
			{
				var i, r;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Ee(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e)
				{
					for (r in e) this.off(r, t, e[r]);
					return this
				}
				return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function ()
				{
					Ee.event.remove(this, e, n, t)
				})
			}
		});
		var ut = /<script|<style|<link/i,
			dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
			ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		Ee.extend(
		{
			htmlPrefilter: function (e)
			{
				return e
			},
			clone: function (e, t, n)
			{
				var i, r, s, a, o = e.cloneNode(!0),
					c = Xe(e);
				if (!(Te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ee.isXMLDoc(e)))
					for (a = C(o), s = C(e), i = 0, r = s.length; i < r; i++) N(s[i], a[i]);
				if (t)
					if (n)
						for (s = s || C(e), a = a || C(o), i = 0, r = s.length; i < r; i++) L(s[i], a[i]);
					else L(e, o);
				return a = C(o, "script"), a.length > 0 && S(a, !c && C(e, "script")), o
			},
			cleanData: function (e)
			{
				for (var t, n, i, r = Ee.event.special, s = 0; void 0 !== (n = e[s]); s++)
					if (Fe(n))
					{
						if (t = n[Be.expando])
						{
							if (t.events)
								for (i in t.events) r[i] ? Ee.event.remove(n, i) : Ee.removeEvent(n, i, t.handle);
							n[Be.expando] = void 0
						}
						n[ze.expando] && (n[ze.expando] = void 0)
					}
			}
		}), Ee.fn.extend(
		{
			detach: function (e)
			{
				return H(this, e, !0)
			},
			remove: function (e)
			{
				return H(this, e)
			},
			text: function (e)
			{
				return He(this, function (e)
				{
					return void 0 === e ? Ee.text(this) : this.empty().each(function ()
					{
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function ()
			{
				return j(this, arguments, function (e)
				{
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
					{
						R(this, e).appendChild(e)
					}
				})
			},
			prepend: function ()
			{
				return j(this, arguments, function (e)
				{
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType)
					{
						var t = R(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function ()
			{
				return j(this, arguments, function (e)
				{
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function ()
			{
				return j(this, arguments, function (e)
				{
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function ()
			{
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ee.cleanData(C(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t)
			{
				return e = null != e && e, t = null == t ? e : t, this.map(function ()
				{
					return Ee.clone(this, e, t)
				})
			},
			html: function (e)
			{
				return He(this, function (e)
				{
					var t = this[0] ||
						{},
						n = 0,
						i = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !ut.test(e) && !st[(it.exec(e) || ["", ""])[1].toLowerCase()])
					{
						e = Ee.htmlPrefilter(e);
						try
						{
							for (; n < i; n++) t = this[n] ||
							{}, 1 === t.nodeType && (Ee.cleanData(C(t, !1)), t.innerHTML = e);
							t = 0
						}
						catch (e)
						{}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function ()
			{
				var e = [];
				return j(this, arguments, function (t)
				{
					var n = this.parentNode;
					Ee.inArray(this, e) < 0 && (Ee.cleanData(C(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), Ee.each(
		{
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t)
		{
			Ee.fn[e] = function (e)
			{
				for (var n, i = [], r = Ee(e), s = r.length - 1, a = 0; a <= s; a++) n = a === s ? this : this.clone(!0), Ee(r[a])[t](n), me.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var pt = new RegExp("^(" + Ke + ")(?!px)[a-z%]+$", "i"),
			ft = function (e)
			{
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = n), t.getComputedStyle(e)
			},
			mt = function (e, t, n)
			{
				var i, r, s = {};
				for (r in t) s[r] = e.style[r], e.style[r] = t[r];
				i = n.call(e);
				for (r in t) e.style[r] = s[r];
				return i
			},
			gt = new RegExp(Ye.join("|"), "i");
		! function ()
		{
			function e()
			{
				if (u)
				{
					l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Je.appendChild(l).appendChild(u);
					var e = n.getComputedStyle(u);
					i = "1%" !== e.top, c = 12 === t(e.marginLeft), u.style.right = "60%", a = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", s = 12 === t(u.offsetWidth / 3), Je.removeChild(l), u = null
				}
			}

			function t(e)
			{
				return Math.round(parseFloat(e))
			}
			var i, r, s, a, o, c, l = Ce.createElement("div"),
				u = Ce.createElement("div");
			u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", Te.clearCloneStyle = "content-box" === u.style.backgroundClip, Ee.extend(Te,
			{
				boxSizingReliable: function ()
				{
					return e(), r
				},
				pixelBoxStyles: function ()
				{
					return e(), a
				},
				pixelPosition: function ()
				{
					return e(), i
				},
				reliableMarginLeft: function ()
				{
					return e(), c
				},
				scrollboxSize: function ()
				{
					return e(), s
				},
				reliableTrDimensions: function ()
				{
					var e, t, i, r;
					return null == o && (e = Ce.createElement("table"), t = Ce.createElement("tr"), i = Ce.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", Je.appendChild(e).appendChild(t).appendChild(i), r = n.getComputedStyle(t), o = parseInt(r.height) > 3, Je.removeChild(e)), o
				}
			}))
		}();
		var vt = ["Webkit", "Moz", "ms"],
			bt = Ce.createElement("div").style,
			$t = {},
			xt = /^(none|table(?!-c[ea]).+)/,
			yt = /^--/,
			Tt = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			wt = {
				letterSpacing: "0",
				fontWeight: "400"
			};
		Ee.extend(
		{
			cssHooks:
			{
				opacity:
				{
					get: function (e, t)
					{
						if (t)
						{
							var n = V(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber:
			{
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				gridArea: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnStart: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowStart: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps:
			{},
			style: function (e, t, n, i)
			{
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style)
				{
					var r, s, a, o = b(t),
						c = yt.test(t),
						l = e.style;
					if (c || (t = B(o)), a = Ee.cssHooks[t] || Ee.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
					s = typeof n, "string" === s && (r = Ze.exec(n)) && r[1] && (n = T(e, t, r), s = "number"), null != n && n === n && ("number" !== s || c || (n += r && r[3] || (Ee.cssNumber[o] ? "" : "px")), Te.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c ? l.setProperty(t, n) : l[t] = n))
				}
			},
			css: function (e, t, n, i)
			{
				var r, s, a, o = b(t);
				return yt.test(t) || (t = B(o)), a = Ee.cssHooks[t] || Ee.cssHooks[o], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = V(e, t, i)), "normal" === r && t in wt && (r = wt[t]), "" === n || n ? (s = parseFloat(r), !0 === n || isFinite(s) ? s || 0 : r) : r
			}
		}), Ee.each(["height", "width"], function (e, t)
		{
			Ee.cssHooks[t] = {
				get: function (e, n, i)
				{
					if (n) return !xt.test(Ee.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? G(e, t, i) : mt(e, Tt, function ()
					{
						return G(e, t, i)
					})
				},
				set: function (e, n, i)
				{
					var r, s = ft(e),
						a = !Te.scrollboxSize() && "absolute" === s.position,
						o = a || i,
						c = o && "border-box" === Ee.css(e, "boxSizing", !1, s),
						l = i ? W(e, t, i, c, s) : 0;
					return c && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - W(e, t, "border", !1, s) - .5)), l && (r = Ze.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Ee.css(e, t)), z(e, n, l)
				}
			}
		}), Ee.cssHooks.marginLeft = U(Te.reliableMarginLeft, function (e, t)
		{
			if (t) return (parseFloat(V(e, "marginLeft")) || e.getBoundingClientRect().left - mt(e,
			{
				marginLeft: 0
			}, function ()
			{
				return e.getBoundingClientRect().left
			})) + "px"
		}), Ee.each(
		{
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t)
		{
			Ee.cssHooks[e + t] = {
				expand: function (n)
				{
					for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ye[i] + t] = s[i] || s[i - 2] || s[0];
					return r
				}
			}, "margin" !== e && (Ee.cssHooks[e + t].set = z)
		}), Ee.fn.extend(
		{
			css: function (e, t)
			{
				return He(this, function (e, t, n)
				{
					var i, r, s = {},
						a = 0;
					if (Array.isArray(t))
					{
						for (i = ft(e), r = t.length; a < r; a++) s[t[a]] = Ee.css(e, t[a], !1, i);
						return s
					}
					return void 0 !== n ? Ee.style(e, t, n) : Ee.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}), Ee.Tween = K, K.prototype = {
			constructor: K,
			init: function (e, t, n, i, r, s)
			{
				this.elem = e, this.prop = n, this.easing = r || Ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = s || (Ee.cssNumber[n] ? "" : "px")
			},
			cur: function ()
			{
				var e = K.propHooks[this.prop];
				return e && e.get ? e.get(this) : K.propHooks._default.get(this)
			},
			run: function (e)
			{
				var t, n = K.propHooks[this.prop];
				return this.options.duration ? this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : K.propHooks._default.set(this), this
			}
		}, K.prototype.init.prototype = K.prototype, K.propHooks = {
			_default:
			{
				get: function (e)
				{
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function (e)
				{
					Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Ee.cssHooks[e.prop] && null == e.elem.style[B(e.prop)] ? e.elem[e.prop] = e.now : Ee.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
			set: function (e)
			{
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, Ee.easing = {
			linear: function (e)
			{
				return e
			},
			swing: function (e)
			{
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, Ee.fx = K.prototype.init, Ee.fx.step = {};
		var _t, Ct, St = /^(?:toggle|show|hide)$/,
			Et = /queueHooks$/;
		Ee.Animation = Ee.extend(te,
			{
				tweeners:
				{
					"*": [function (e, t)
					{
						var n = this.createTween(e, t);
						return T(n.elem, e, Ze.exec(t), n), n
					}]
				},
				tweener: function (e, t)
				{
					we(e) ? (t = e, e = ["*"]) : e = e.match(Le);
					for (var n, i = 0, r = e.length; i < r; i++) n = e[i], te.tweeners[n] = te.tweeners[n] || [], te.tweeners[n].unshift(t)
				},
				prefilters: [Q],
				prefilter: function (e, t)
				{
					t ? te.prefilters.unshift(e) : te.prefilters.push(e)
				}
			}), Ee.speed = function (e, t, n)
			{
				var i = e && "object" == typeof e ? Ee.extend(
				{}, e) :
				{
					complete: n || !n && t || we(e) && e,
					duration: e,
					easing: n && t || t && !we(t) && t
				};
				return Ee.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in Ee.fx.speeds ? i.duration = Ee.fx.speeds[i.duration] : i.duration = Ee.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function ()
				{
					we(i.old) && i.old.call(this), i.queue && Ee.dequeue(this, i.queue)
				}, i
			}, Ee.fn.extend(
			{
				fadeTo: function (e, t, n, i)
				{
					return this.filter(et).css("opacity", 0).show().end().animate(
					{
						opacity: t
					}, e, n, i)
				},
				animate: function (e, t, n, i)
				{
					var r = Ee.isEmptyObject(e),
						s = Ee.speed(t, n, i),
						a = function ()
						{
							var t = te(this, Ee.extend(
							{}, e), s);
							(r || Be.get(this, "finish")) && t.stop(!0)
						};
					return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
				},
				stop: function (e, t, n)
				{
					var i = function (e)
					{
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function ()
					{
						var t = !0,
							r = null != e && e + "queueHooks",
							s = Ee.timers,
							a = Be.get(this);
						if (r) a[r] && a[r].stop && i(a[r]);
						else
							for (r in a) a[r] && a[r].stop && Et.test(r) && i(a[r]);
						for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(n), t = !1, s.splice(r, 1));
						!t && n || Ee.dequeue(this, e)
					})
				},
				finish: function (e)
				{
					return !1 !== e && (e = e || "fx"), this.each(function ()
					{
						var t, n = Be.get(this),
							i = n[e + "queue"],
							r = n[e + "queueHooks"],
							s = Ee.timers,
							a = i ? i.length : 0;
						for (n.finish = !0, Ee.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
						for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), Ee.each(["toggle", "show", "hide"], function (e, t)
			{
				var n = Ee.fn[t];
				Ee.fn[t] = function (e, i, r)
				{
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(J(t, !0), e, i, r)
				}
			}), Ee.each(
			{
				slideDown: J("show"),
				slideUp: J("hide"),
				slideToggle: J("toggle"),
				fadeIn:
				{
					opacity: "show"
				},
				fadeOut:
				{
					opacity: "hide"
				},
				fadeToggle:
				{
					opacity: "toggle"
				}
			}, function (e, t)
			{
				Ee.fn[e] = function (e, n, i)
				{
					return this.animate(t, e, n, i)
				}
			}), Ee.timers = [], Ee.fx.tick = function ()
			{
				var e, t = 0,
					n = Ee.timers;
				for (_t = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || Ee.fx.stop(), _t = void 0
			}, Ee.fx.timer = function (e)
			{
				Ee.timers.push(e), Ee.fx.start()
			}, Ee.fx.interval = 13, Ee.fx.start = function ()
			{
				Ct || (Ct = !0, Z())
			}, Ee.fx.stop = function ()
			{
				Ct = null
			}, Ee.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, Ee.fn.delay = function (e, t)
			{
				return e = Ee.fx ? Ee.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i)
				{
					var r = n.setTimeout(t, e);
					i.stop = function ()
					{
						n.clearTimeout(r)
					}
				})
			},
			function ()
			{
				var e = Ce.createElement("input"),
					t = Ce.createElement("select"),
					n = t.appendChild(Ce.createElement("option"));
				e.type = "checkbox", Te.checkOn = "" !== e.value, Te.optSelected = n.selected, e = Ce.createElement("input"), e.value = "t", e.type = "radio", Te.radioValue = "t" === e.value
			}();
		var At, kt = Ee.expr.attrHandle;
		Ee.fn.extend(
		{
			attr: function (e, t)
			{
				return He(this, Ee.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e)
			{
				return this.each(function ()
				{
					Ee.removeAttr(this, e)
				})
			}
		}), Ee.extend(
		{
			attr: function (e, t, n)
			{
				var i, r, s = e.nodeType;
				if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? Ee.prop(e, t, n) : (1 === s && Ee.isXMLDoc(e) || (r = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? At : void 0)), void 0 !== n ? null === n ? void Ee.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Ee.find.attr(e, t), null == i ? void 0 : i))
			},
			attrHooks:
			{
				type:
				{
					set: function (e, t)
					{
						if (!Te.radioValue && "radio" === t && l(e, "input"))
						{
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function (e, t)
			{
				var n, i = 0,
					r = t && t.match(Le);
				if (r && 1 === e.nodeType)
					for (; n = r[i++];) e.removeAttribute(n)
			}
		}), At = {
			set: function (e, t, n)
			{
				return !1 === t ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function (e, t)
		{
			var n = kt[t] || Ee.find.attr;
			kt[t] = function (e, t, i)
			{
				var r, s, a = t.toLowerCase();
				return i || (s = kt[a], kt[a] = r, r = null != n(e, t, i) ? a : null, kt[a] = s), r
			}
		});
		var qt = /^(?:input|select|textarea|button)$/i,
			Ot = /^(?:a|area)$/i;
		Ee.fn.extend(
		{
			prop: function (e, t)
			{
				return He(this, Ee.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e)
			{
				return this.each(function ()
				{
					delete this[Ee.propFix[e] || e]
				})
			}
		}), Ee.extend(
		{
			prop: function (e, t, n)
			{
				var i, r, s = e.nodeType;
				if (3 !== s && 8 !== s && 2 !== s) return 1 === s && Ee.isXMLDoc(e) || (t = Ee.propFix[t] || t, r = Ee.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
			},
			propHooks:
			{
				tabIndex:
				{
					get: function (e)
					{
						var t = Ee.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : qt.test(e.nodeName) || Ot.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix:
			{
				for: "htmlFor",
				class: "className"
			}
		}), Te.optSelected || (Ee.propHooks.selected = {
			get: function (e)
			{
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function (e)
			{
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), Ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function ()
		{
			Ee.propFix[this.toLowerCase()] = this
		}), Ee.fn.extend(
		{
			addClass: function (e)
			{
				var t, n, i, r, s, a, o, c = 0;
				if (we(e)) return this.each(function (t)
				{
					Ee(this).addClass(e.call(this, t, ie(this)))
				});
				if (t = re(e), t.length)
					for (; n = this[c++];)
						if (r = ie(n), i = 1 === n.nodeType && " " + ne(r) + " ")
						{
							for (a = 0; s = t[a++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
							o = ne(i), r !== o && n.setAttribute("class", o)
						}
				return this
			},
			removeClass: function (e)
			{
				var t, n, i, r, s, a, o, c = 0;
				if (we(e)) return this.each(function (t)
				{
					Ee(this).removeClass(e.call(this, t, ie(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if (t = re(e), t.length)
					for (; n = this[c++];)
						if (r = ie(n), i = 1 === n.nodeType && " " + ne(r) + " ")
						{
							for (a = 0; s = t[a++];)
								for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
							o = ne(i), r !== o && n.setAttribute("class", o)
						}
				return this
			},
			toggleClass: function (e, t)
			{
				var n = typeof e,
					i = "string" === n || Array.isArray(e);
				return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : we(e) ? this.each(function (n)
				{
					Ee(this).toggleClass(e.call(this, n, ie(this), t), t)
				}) : this.each(function ()
				{
					var t, r, s, a;
					if (i)
						for (r = 0, s = Ee(this), a = re(e); t = a[r++];) s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
					else void 0 !== e && "boolean" !== n || (t = ie(this), t && Be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Be.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e)
			{
				var t, n, i = 0;
				for (t = " " + e + " "; n = this[i++];)
					if (1 === n.nodeType && (" " + ne(ie(n)) + " ").indexOf(t) > -1) return !0;
				return !1
			}
		});
		var Mt = /\r/g;
		Ee.fn.extend(
		{
			val: function (e)
			{
				var t, n, i, r = this[0];
				{
					if (arguments.length) return i = we(e), this.each(function (n)
					{
						var r;
						1 === this.nodeType && (r = i ? e.call(this, n, Ee(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = Ee.map(r, function (e)
						{
							return null == e ? "" : e + ""
						})), (t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
					});
					if (r) return (t = Ee.valHooks[r.type] || Ee.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Mt, "") : null == n ? "" : n)
				}
			}
		}), Ee.extend(
		{
			valHooks:
			{
				option:
				{
					get: function (e)
					{
						var t = Ee.find.attr(e, "value");
						return null != t ? t : ne(Ee.text(e))
					}
				},
				select:
				{
					get: function (e)
					{
						var t, n, i, r = e.options,
							s = e.selectedIndex,
							a = "select-one" === e.type,
							o = a ? null : [],
							c = a ? s + 1 : r.length;
						for (i = s < 0 ? c : a ? s : 0; i < c; i++)
							if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup")))
							{
								if (t = Ee(n).val(), a) return t;
								o.push(t)
							}
						return o
					},
					set: function (e, t)
					{
						for (var n, i, r = e.options, s = Ee.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = Ee.inArray(Ee.valHooks.option.get(i), s) > -1) && (n = !0);
						return n || (e.selectedIndex = -1), s
					}
				}
			}
		}), Ee.each(["radio", "checkbox"], function ()
		{
			Ee.valHooks[this] = {
				set: function (e, t)
				{
					if (Array.isArray(t)) return e.checked = Ee.inArray(Ee(e).val(), t) > -1
				}
			}, Te.checkOn || (Ee.valHooks[this].get = function (e)
			{
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), Te.focusin = "onfocusin" in n;
		var Dt = /^(?:focusinfocus|focusoutblur)$/,
			Rt = function (e)
			{
				e.stopPropagation()
			};
		Ee.extend(Ee.event,
		{
			trigger: function (e, t, i, r)
			{
				var s, a, o, c, l, u, d, h, p = [i || Ce],
					f = $e.call(e, "type") ? e.type : e,
					m = $e.call(e, "namespace") ? e.namespace.split(".") : [];
				if (a = h = o = i = i || Ce, 3 !== i.nodeType && 8 !== i.nodeType && !Dt.test(f + Ee.event.triggered) && (f.indexOf(".") > -1 && (m = f.split("."), f = m.shift(), m.sort()), l = f.indexOf(":") < 0 && "on" + f, e = e[Ee.expando] ? e : new Ee.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : Ee.makeArray(t, [e]), d = Ee.event.special[f] ||
					{}, r || !d.trigger || !1 !== d.trigger.apply(i, t)))
				{
					if (!r && !d.noBubble && !_e(i))
					{
						for (c = d.delegateType || f, Dt.test(c + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), o = a;
						o === (i.ownerDocument || Ce) && p.push(o.defaultView || o.parentWindow || n)
					}
					for (s = 0;
						(a = p[s++]) && !e.isPropagationStopped();) h = a, e.type = s > 1 ? c : d.bindType || f, u = (Be.get(a, "events") || Object.create(null))[e.type] && Be.get(a, "handle"), u && u.apply(a, t), (u = l && a[l]) && u.apply && Fe(a) && (e.result = u.apply(a, t), !1 === e.result && e.preventDefault());
					return e.type = f, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !Fe(i) || l && we(i[f]) && !_e(i) && (o = i[l], o && (i[l] = null), Ee.event.triggered = f, e.isPropagationStopped() && h.addEventListener(f, Rt), i[f](), e.isPropagationStopped() && h.removeEventListener(f, Rt), Ee.event.triggered = void 0, o && (i[l] = o)), e.result
				}
			},
			simulate: function (e, t, n)
			{
				var i = Ee.extend(new Ee.Event, n,
				{
					type: e,
					isSimulated: !0
				});
				Ee.event.trigger(i, null, t)
			}
		}), Ee.fn.extend(
		{
			trigger: function (e, t)
			{
				return this.each(function ()
				{
					Ee.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t)
			{
				var n = this[0];
				if (n) return Ee.event.trigger(e, t, n, !0)
			}
		}), Te.focusin || Ee.each(
		{
			focus: "focusin",
			blur: "focusout"
		}, function (e, t)
		{
			var n = function (e)
			{
				Ee.event.simulate(t, e.target, Ee.event.fix(e))
			};
			Ee.event.special[t] = {
				setup: function ()
				{
					var i = this.ownerDocument || this.document || this,
						r = Be.access(i, t);
					r || i.addEventListener(e, n, !0), Be.access(i, t, (r || 0) + 1)
				},
				teardown: function ()
				{
					var i = this.ownerDocument || this.document || this,
						r = Be.access(i, t) - 1;
					r ? Be.access(i, t, r) : (i.removeEventListener(e, n, !0), Be.remove(i, t))
				}
			}
		});
		var Pt = n.location,
			It = {
				guid: Date.now()
			},
			Lt = /\?/;
		Ee.parseXML = function (e)
		{
			var t;
			if (!e || "string" != typeof e) return null;
			try
			{
				t = (new n.DOMParser).parseFromString(e, "text/xml")
			}
			catch (e)
			{
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || Ee.error("Invalid XML: " + e), t
		};
		var Nt = /\[\]$/,
			jt = /\r?\n/g,
			Ht = /^(?:submit|button|image|reset|file)$/i,
			Vt = /^(?:input|select|textarea|keygen)/i;
		Ee.param = function (e, t)
		{
			var n, i = [],
				r = function (e, t)
				{
					var n = we(t) ? t() : t;
					i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
				};
			if (null == e) return "";
			if (Array.isArray(e) || e.jquery && !Ee.isPlainObject(e)) Ee.each(e, function ()
			{
				r(this.name, this.value)
			});
			else
				for (n in e) se(n, e[n], t, r);
			return i.join("&")
		}, Ee.fn.extend(
		{
			serialize: function ()
			{
				return Ee.param(this.serializeArray())
			},
			serializeArray: function ()
			{
				return this.map(function ()
				{
					var e = Ee.prop(this, "elements");
					return e ? Ee.makeArray(e) : this
				}).filter(function ()
				{
					var e = this.type;
					return this.name && !Ee(this).is(":disabled") && Vt.test(this.nodeName) && !Ht.test(e) && (this.checked || !nt.test(e))
				}).map(function (e, t)
				{
					var n = Ee(this).val();
					return null == n ? null : Array.isArray(n) ? Ee.map(n, function (e)
					{
						return {
							name: t.name,
							value: e.replace(jt, "\r\n")
						}
					}) :
					{
						name: t.name,
						value: n.replace(jt, "\r\n")
					}
				}).get()
			}
		});
		var Ut = /%20/g,
			Ft = /#.*$/,
			Bt = /([?&])_=[^&]*/,
			zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Gt = /^(?:GET|HEAD)$/,
			Kt = /^\/\//,
			Zt = {},
			Yt = {},
			Jt = "*/".concat("*"),
			Xt = Ce.createElement("a");
		Xt.href = Pt.href, Ee.extend(
		{
			active: 0,
			lastModified:
			{},
			etag:
			{},
			ajaxSettings:
			{
				url: Pt.href,
				type: "GET",
				isLocal: Wt.test(Pt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts:
				{
					"*": Jt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents:
				{
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields:
				{
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters:
				{
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": Ee.parseXML
				},
				flatOptions:
				{
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t)
			{
				return t ? ce(ce(e, Ee.ajaxSettings), t) : ce(Ee.ajaxSettings, e)
			},
			ajaxPrefilter: ae(Zt),
			ajaxTransport: ae(Yt),
			ajax: function (e, t)
			{
				function i(e, t, i, o)
				{
					var l, h, p, x, y, T = t;
					u || (u = !0, c && n.clearTimeout(c), r = void 0, a = o || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (x = le(f, w, i)), !l && Ee.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function () {}), x = ue(f, x, w, l), l ? (f.ifModified && (y = w.getResponseHeader("Last-Modified"), y && (Ee.lastModified[s] = y), (y = w.getResponseHeader("etag")) && (Ee.etag[s] = y)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, h = x.data, p = x.error, l = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || T) + "", l ? v.resolveWith(m, [h, T, w]) : v.rejectWith(m, [w, T, p]), w.statusCode($), $ = void 0, d && g.trigger(l ? "ajaxSuccess" : "ajaxError", [w, f, l ? h : p]), b.fireWith(m, [w, T]), d && (g.trigger("ajaxComplete", [w, f]), --Ee.active || Ee.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t ||
				{};
				var r, s, a, o, c, l, u, d, h, p, f = Ee.ajaxSetup(
					{}, t),
					m = f.context || f,
					g = f.context && (m.nodeType || m.jquery) ? Ee(m) : Ee.event,
					v = Ee.Deferred(),
					b = Ee.Callbacks("once memory"),
					$ = f.statusCode ||
					{},
					x = {},
					y = {},
					T = "canceled",
					w = {
						readyState: 0,
						getResponseHeader: function (e)
						{
							var t;
							if (u)
							{
								if (!o)
									for (o = {}; t = zt.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
								t = o[e.toLowerCase() + " "]
							}
							return null == t ? null : t.join(", ")
						},
						getAllResponseHeaders: function ()
						{
							return u ? a : null
						},
						setRequestHeader: function (e, t)
						{
							return null == u && (e = y[e.toLowerCase()] = y[e.toLowerCase()] || e, x[e] = t), this
						},
						overrideMimeType: function (e)
						{
							return null == u && (f.mimeType = e), this
						},
						statusCode: function (e)
						{
							var t;
							if (e)
								if (u) w.always(e[w.status]);
								else
									for (t in e) $[t] = [$[t], e[t]];
							return this
						},
						abort: function (e)
						{
							var t = e || T;
							return r && r.abort(t), i(0, t), this
						}
					};
				if (v.promise(w), f.url = ((e || f.url || Pt.href) + "").replace(Kt, Pt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Le) || [""], null == f.crossDomain)
				{
					l = Ce.createElement("a");
					try
					{
						l.href = f.url, l.href = l.href, f.crossDomain = Xt.protocol + "//" + Xt.host != l.protocol + "//" + l.host
					}
					catch (e)
					{
						f.crossDomain = !0
					}
				}
				if (f.data && f.processData && "string" != typeof f.data && (f.data = Ee.param(f.data, f.traditional)), oe(Zt, f, t, w), u) return w;
				d = Ee.event && f.global, d && 0 == Ee.active++ && Ee.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Gt.test(f.type), s = f.url.replace(Ft, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ut, "+")) : (p = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (Lt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Bt, "$1"), p = (Lt.test(s) ? "&" : "?") + "_=" + It.guid++ + p), f.url = s + p), f.ifModified && (Ee.lastModified[s] && w.setRequestHeader("If-Modified-Since", Ee.lastModified[s]), Ee.etag[s] && w.setRequestHeader("If-None-Match", Ee.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : f.accepts["*"]);
				for (h in f.headers) w.setRequestHeader(h, f.headers[h]);
				if (f.beforeSend && (!1 === f.beforeSend.call(m, w, f) || u)) return w.abort();
				if (T = "abort", b.add(f.complete), w.done(f.success), w.fail(f.error), r = oe(Yt, f, t, w))
				{
					if (w.readyState = 1, d && g.trigger("ajaxSend", [w, f]), u) return w;
					f.async && f.timeout > 0 && (c = n.setTimeout(function ()
					{
						w.abort("timeout")
					}, f.timeout));
					try
					{
						u = !1, r.send(x, i)
					}
					catch (e)
					{
						if (u) throw e;
						i(-1, e)
					}
				}
				else i(-1, "No Transport");
				return w
			},
			getJSON: function (e, t, n)
			{
				return Ee.get(e, t, n, "json")
			},
			getScript: function (e, t)
			{
				return Ee.get(e, void 0, t, "script")
			}
		}), Ee.each(["get", "post"], function (e, t)
		{
			Ee[t] = function (e, n, i, r)
			{
				return we(n) && (r = r || i, i = n, n = void 0), Ee.ajax(Ee.extend(
				{
					url: e,
					type: t,
					dataType: r,
					data: n,
					success: i
				}, Ee.isPlainObject(e) && e))
			}
		}), Ee.ajaxPrefilter(function (e)
		{
			var t;
			for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
		}), Ee._evalUrl = function (e, t, n)
		{
			return Ee.ajax(
			{
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters:
				{
					"text script": function () {}
				},
				dataFilter: function (e)
				{
					Ee.globalEval(e, t, n)
				}
			})
		}, Ee.fn.extend(
		{
			wrapAll: function (e)
			{
				var t;
				return this[0] && (we(e) && (e = e.call(this[0])), t = Ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function ()
				{
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function (e)
			{
				return we(e) ? this.each(function (t)
				{
					Ee(this).wrapInner(e.call(this, t))
				}) : this.each(function ()
				{
					var t = Ee(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e)
			{
				var t = we(e);
				return this.each(function (n)
				{
					Ee(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function (e)
			{
				return this.parent(e).not("body").each(function ()
				{
					Ee(this).replaceWith(this.childNodes)
				}), this
			}
		}), Ee.expr.pseudos.hidden = function (e)
		{
			return !Ee.expr.pseudos.visible(e)
		}, Ee.expr.pseudos.visible = function (e)
		{
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, Ee.ajaxSettings.xhr = function ()
		{
			try
			{
				return new n.XMLHttpRequest
			}
			catch (e)
			{}
		};
		var Qt = {
				0: 200,
				1223: 204
			},
			en = Ee.ajaxSettings.xhr();
		Te.cors = !!en && "withCredentials" in en, Te.ajax = en = !!en, Ee.ajaxTransport(function (e)
		{
			var t, i;
			if (Te.cors || en && !e.crossDomain) return {
				send: function (r, s)
				{
					var a, o = e.xhr();
					if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (a in e.xhrFields) o[a] = e.xhrFields[a];
					e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					for (a in r) o.setRequestHeader(a, r[a]);
					t = function (e)
					{
						return function ()
						{
							t && (t = i = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? s(0, "error") : s(o.status, o.statusText) : s(Qt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ?
							{
								binary: o.response
							} :
							{
								text: o.responseText
							}, o.getAllResponseHeaders()))
						}
					}, o.onload = t(), i = o.onerror = o.ontimeout = t("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function ()
					{
						4 === o.readyState && n.setTimeout(function ()
						{
							t && i()
						})
					}, t = t("abort");
					try
					{
						o.send(e.hasContent && e.data || null)
					}
					catch (e)
					{
						if (t) throw e
					}
				},
				abort: function ()
				{
					t && t()
				}
			}
		}), Ee.ajaxPrefilter(function (e)
		{
			e.crossDomain && (e.contents.script = !1)
		}), Ee.ajaxSetup(
		{
			accepts:
			{
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents:
			{
				script: /\b(?:java|ecma)script\b/
			},
			converters:
			{
				"text script": function (e)
				{
					return Ee.globalEval(e), e
				}
			}
		}), Ee.ajaxPrefilter("script", function (e)
		{
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), Ee.ajaxTransport("script", function (e)
		{
			if (e.crossDomain || e.scriptAttrs)
			{
				var t, n;
				return {
					send: function (i, r)
					{
						t = Ee("<script>").attr(e.scriptAttrs ||
						{}).prop(
						{
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function (e)
						{
							t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
						}), Ce.head.appendChild(t[0])
					},
					abort: function ()
					{
						n && n()
					}
				}
			}
		});
		var tn = [],
			nn = /(=)\?(?=&|$)|\?\?/;
		Ee.ajaxSetup(
		{
			jsonp: "callback",
			jsonpCallback: function ()
			{
				var e = tn.pop() || Ee.expando + "_" + It.guid++;
				return this[e] = !0, e
			}
		}), Ee.ajaxPrefilter("json jsonp", function (e, t, i)
		{
			var r, s, a, o = !1 !== e.jsonp && (nn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(e.data) && "data");
			if (o || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = we(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(nn, "$1" + r) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function ()
			{
				return a || Ee.error(r + " was not called"), a[0]
			}, e.dataTypes[0] = "json", s = n[r], n[r] = function ()
			{
				a = arguments
			}, i.always(function ()
			{
				void 0 === s ? Ee(n).removeProp(r) : n[r] = s, e[r] && (e.jsonpCallback = t.jsonpCallback, tn.push(r)), a && we(s) && s(a[0]), a = s = void 0
			}), "script"
		}), Te.createHTMLDocument = function ()
		{
			var e = Ce.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
		}(), Ee.parseHTML = function (e, t, n)
		{
			if ("string" != typeof e) return [];
			"boolean" == typeof t && (n = t, t = !1);
			var i, r, s;
			return t || (Te.createHTMLDocument ? (t = Ce.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = Ce.location.href, t.head.appendChild(i)) : t = Ce), r = Me.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = E([e], t, s), s && s.length && Ee(s).remove(), Ee.merge([], r.childNodes))
		}, Ee.fn.load = function (e, t, n)
		{
			var i, r, s, a = this,
				o = e.indexOf(" ");
			return o > -1 && (i = ne(e.slice(o)), e = e.slice(0, o)), we(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Ee.ajax(
			{
				url: e,
				type: r || "GET",
				dataType: "html",
				data: t
			}).done(function (e)
			{
				s = arguments, a.html(i ? Ee("<div>").append(Ee.parseHTML(e)).find(i) : e)
			}).always(n && function (e, t)
			{
				a.each(function ()
				{
					n.apply(this, s || [e.responseText, t, e])
				})
			}), this
		}, Ee.expr.pseudos.animated = function (e)
		{
			return Ee.grep(Ee.timers, function (t)
			{
				return e === t.elem
			}).length
		}, Ee.offset = {
			setOffset: function (e, t, n)
			{
				var i, r, s, a, o, c, l, u = Ee.css(e, "position"),
					d = Ee(e),
					h = {};
				"static" === u && (e.style.position = "relative"), o = d.offset(), s = Ee.css(e, "top"), c = Ee.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (s + c).indexOf("auto") > -1, l ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(s) || 0, r = parseFloat(c) || 0), we(t) && (t = t.call(e, n, Ee.extend(
				{}, o))), null != t.top && (h.top = t.top - o.top + a), null != t.left && (h.left = t.left - o.left + r), "using" in t ? t.using.call(e, h) : ("number" == typeof h.top && (h.top += "px"), "number" == typeof h.left && (h.left += "px"), d.css(h))
			}
		}, Ee.fn.extend(
		{
			offset: function (e)
			{
				if (arguments.length) return void 0 === e ? this : this.each(function (t)
				{
					Ee.offset.setOffset(this, e, t)
				});
				var t, n, i = this[0];
				if (i) return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView,
				{
					top: t.top + n.pageYOffset,
					left: t.left + n.pageXOffset
				}) :
				{
					top: 0,
					left: 0
				}
			},
			position: function ()
			{
				if (this[0])
				{
					var e, t, n, i = this[0],
						r = {
							top: 0,
							left: 0
						};
					if ("fixed" === Ee.css(i, "position")) t = i.getBoundingClientRect();
					else
					{
						for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ee.css(e, "position");) e = e.parentNode;
						e && e !== i && 1 === e.nodeType && (r = Ee(e).offset(), r.top += Ee.css(e, "borderTopWidth", !0), r.left += Ee.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - r.top - Ee.css(i, "marginTop", !0),
						left: t.left - r.left - Ee.css(i, "marginLeft", !0)
					}
				}
			},
			offsetParent: function ()
			{
				return this.map(function ()
				{
					for (var e = this.offsetParent; e && "static" === Ee.css(e, "position");) e = e.offsetParent;
					return e || Je
				})
			}
		}), Ee.each(
		{
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t)
		{
			var n = "pageYOffset" === t;
			Ee.fn[e] = function (i)
			{
				return He(this, function (e, i, r)
				{
					var s;
					if (_e(e) ? s = e : 9 === e.nodeType && (s = e.defaultView), void 0 === r) return s ? s[t] : e[i];
					s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : e[i] = r
				}, e, i, arguments.length)
			}
		}), Ee.each(["top", "left"], function (e, t)
		{
			Ee.cssHooks[t] = U(Te.pixelPosition, function (e, n)
			{
				if (n) return n = V(e, t), pt.test(n) ? Ee(e).position()[t] + "px" : n
			})
		}), Ee.each(
		{
			Height: "height",
			Width: "width"
		}, function (e, t)
		{
			Ee.each(
			{
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, i)
			{
				Ee.fn[i] = function (r, s)
				{
					var a = arguments.length && (n || "boolean" != typeof r),
						o = n || (!0 === r || !0 === s ? "margin" : "border");
					return He(this, function (t, n, r)
					{
						var s;
						return _e(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? Ee.css(t, n, o) : Ee.style(t, n, r, o)
					}, t, a ? r : void 0, a)
				}
			})
		}), Ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t)
		{
			Ee.fn[t] = function (e)
			{
				return this.on(t, e)
			}
		}), Ee.fn.extend(
		{
			bind: function (e, t, n)
			{
				return this.on(e, null, t, n)
			},
			unbind: function (e, t)
			{
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, i)
			{
				return this.on(t, e, n, i)
			},
			undelegate: function (e, t, n)
			{
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			},
			hover: function (e, t)
			{
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t)
		{
			Ee.fn[t] = function (e, n)
			{
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		});
		var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		Ee.proxy = function (e, t)
		{
			var n, i, r;
			if ("string" == typeof t && (n = e[t], t = e, e = n), we(e)) return i = pe.call(arguments, 2), r = function ()
			{
				return e.apply(t || this, i.concat(pe.call(arguments)))
			}, r.guid = e.guid = e.guid || Ee.guid++, r
		}, Ee.holdReady = function (e)
		{
			e ? Ee.readyWait++ : Ee.ready(!0)
		}, Ee.isArray = Array.isArray, Ee.parseJSON = JSON.parse, Ee.nodeName = l, Ee.isFunction = we, Ee.isWindow = _e, Ee.camelCase = b, Ee.type = o, Ee.now = Date.now, Ee.isNumeric = function (e)
		{
			var t = Ee.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, Ee.trim = function (e)
		{
			return null == e ? "" : (e + "").replace(rn, "")
		}, i = [], void 0 !== (r = function ()
		{
			return Ee
		}.apply(t, i)) && (e.exports = r);
		var sn = n.jQuery,
			an = n.$;
		return Ee.noConflict = function (e)
		{
			return n.$ === Ee && (n.$ = an), e && n.jQuery === Ee && (n.jQuery = sn), Ee
		}, void 0 === s && (n.jQuery = n.$ = Ee), Ee
	})
}, function (e, t, n)
{
	n(20), e.exports = "ngRoute"
}, function (e, t, n)
{
	n(21), e.exports = angular
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = "attackApp"
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$scope", "$http", "$location", "spCF", "modal", function (e, t, n, a, o)
		{
			var c = n.$$absUrl;
			c = c.split("#"), c = c[0], e.currUrl = c, e.tacticsTechniquesMenuContentUploaded = !1, e.tacticsTechniquesMenuSrc = JSON.stringify(i), e.tacticsTechniquesMenu = JSON.parse(e.tacticsTechniquesMenuSrc), e.fastSearch = {
				list: r,
				selected: "All"
			}, e.selectedTactic = 0, e.selectedTechnique = 0, e.selectedSubTechnique = "", e.searchString = "", e.oneTechniqueIsOpen = !1, e.oneTacticIsOpen = !1, s(t, e, a, o)
		}]
	};
	var i = n(25).default,
		r = n(23).default,
		s = n(26).default
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$timeout", "spCF", function (e, t)
		{
			var n = function (e, n, i, r, s)
				{
					t.isString(e.isMultiple) && "true" == e.isMultiple || n.find("select").removeAttr("multiple"), e.tags = !0 === e.tags, e.hideSearch = "true" === e.hideSearch
				},
				i = function (n, i, r, s, a)
				{
					e(function ()
					{
						var e = {
							language: "en",
							placeholder: n.placeholder || "Select item",
							width: n.width || "100%",
							allowClear: "true" === n.allowClear,
							dropdownParent: $("#" + n.selectId + "-wrap"),
							dropdownCssClass: n.dropdownCssClass || "",
							tags: n.tags,
							minimumResultsForSearch: n.hideSearch ? 1 / 0 : 0
						};
						$(i).find("select").select2(e), n.tags && $(i).find("select").on("change.select2", function (e)
						{
							n.$apply(function ()
							{
								n.selected = $(e.target).val()
							}), $(e.target).find("option:eq(-1)").val() == $(e.target).find("option:eq(-2)").val() && $(e.target).find("option:eq(-1)").remove()
						}), n.tags || setTimeout(function ()
						{
							$(i).find("select").select2()
						}, 400)
					}, n.tags ? 400 : 0), n.$watch("selected", function (e, r)
					{
						JSON.stringify(e) == JSON.stringify(r) || [void 0, "[]"].indexOf(JSON.stringify(e)) >= 0 && [void 0, "[]"].indexOf(JSON.stringify(r)) >= 0 || (['[""]', "['']", "[]"].indexOf(JSON.stringify(e)) >= 0 && (n.selected = void 0, setTimeout(function ()
						{
							try
							{
								$(i).find("select").select2("val", "[]")
							}
							catch (e)
							{}
						}, 100)), t.isString(n.selected) && n.isMultiple && (n.selected = [n.selected]))
					}, !0)
				};
			return {
				compile: function (e, t)
				{
					return {
						pre: n,
						post: i
					}
				},
				scope:
				{
					selectName: "@selectName",
					selectId: "@selectId",
					placeholder: "@",
					width: "@",
					isMultiple: "@",
					items: "=",
					selected: "=?",
					tags: "@",
					allowClear: "@",
					dropdownCssClass: "@?",
					hideSearch: "@?"
				},
				template: r.default
			}
		}]
	};
	var i = n(27),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i)
}, function (e, t, n)
{
	"use strict";

	function i(e)
	{
		return e && e.__esModule ? e :
		{
			default: e
		}
	}
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$sce", "$http", "spCF", function (e, t, n)
		{
			var i = function (t, i, r, s, a)
				{
					t.currEntity = {}, t.trustAsHtml = function (t)
					{
						return e.trustAsHtml(t)
					}, t.checkArrayLength = function (e)
					{
						return n.isArray(e) && e.length > 0
					}
				},
				r = function (e, i, r, a, o)
				{
					e.$watch("entityId", function (i)
					{
						n.isString(i) && n.isString(e.currUrl) && t(
						{
							method: "GET",
							url: e.currUrl + "entities/groups/" + i + ".json",
							dataType: "json"
						}).then(function (t)
						{
							t = t.data ||
							{}, n.isString(t.name) ? ((0, s.default)(".modal-box").find(".modal-box__title").text(t.name), e.currEntity = t) : e.currEntity.errorDataLoad = !0
						}, function (t)
						{
							e.currEntity.errorDataLoad = !0, console.log("connection error")
						})
					})
				};
			return {
				compile: function (e, t)
				{
					return {
						pre: i,
						post: r
					}
				},
				scope:
				{
					currUrl: "=",
					entityId: "@"
				},
				template: o.default
			}
		}]
	};
	var r = n(0),
		s = i(r),
		a = n(28),
		o = i(a)
}, function (e, t, n)
{
	"use strict";

	function i(e)
	{
		return e && e.__esModule ? e :
		{
			default: e
		}
	}
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$sce", "$http", "spCF", function (e, t, n)
		{
			var i = function (t, i, r, s, a)
				{
					t.currEntity = {}, t.trustAsHtml = function (t)
					{
						return e.trustAsHtml(t)
					}, t.checkArrayLength = function (e)
					{
						return n.isArray(e) && e.length > 0
					}
				},
				r = function (e, i, r, a, o)
				{
					e.$watch("entityId", function (i)
					{
						n.isString(i) && n.isString(e.currUrl) && t(
						{
							method: "GET",
							url: e.currUrl + "entities/software/" + i + ".json",
							dataType: "json"
						}).then(function (t)
						{
							t = t.data ||
							{}, n.isString(t.name) ? ((0, s.default)(".modal-box").find(".modal-box__title").text(t.name), e.currEntity = t) : e.currEntity.errorDataLoad = !0
						}, function (t)
						{
							e.currEntity.errorDataLoad = !0, console.log("connection error")
						})
					})
				};
			return {
				compile: function (e, t)
				{
					return {
						pre: i,
						post: r
					}
				},
				scope:
				{
					currUrl: "=",
					entityId: "@"
				},
				template: o.default
			}
		}]
	};
	var r = n(0),
		s = i(r),
		a = n(29),
		o = i(a)
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$sce", "$http", "spCF", function (e, t, n)
		{
			var i = function (t, i, r, s, a)
				{
					t.currentTechnique = {}, t.currentSubTechnique = {}, t.selected = {
						tab: "info"
					}, t.showTechniqueSelector = function (e)
					{
						return n.isObject(e) && Object.keys(e).length > 1
					}, t.checkArrayLength = function (e)
					{
						return n.isArray(e) && e.length > 0
					}, t.trustAsHtml = function (t)
					{
						return e.trustAsHtml(t)
					}
				},
				s = function (e, i, r, s, a)
				{
					e.$watch("technique", function (t)
					{
						n.isObject(t) && n.isString(t.id) && n.isString(t.name) ? (e.currentTechnique = {}, e.currentTechnique.id = t.id, e.currentTechnique.name = t.name, e.currentTechnique.children = {}, e.currentSubTechnique.id = e.currentTechnique.id, e.currentTechnique.children[e.currentTechnique.id] = "Core technique", n.getArrayOrEmpty(t.children).forEach(function (t)
						{
							if (n.isObject(t) && n.isString(t.id) && n.isString(t.name))
							{
								var i = t.id.replace(".", "-");
								e.currentTechnique.children[i] = t.name
							}
						}), Object.keys(e.currentTechnique.children).indexOf(e.subTechniqueId) >= 0 && (e.currentSubTechnique.id = e.subTechniqueId), o(e.currentSubTechnique.id)) : (e.currentTechnique = {}, e.currentSubTechnique = {}, e.currentSubTechnique.errorDataLoad = !0, e.selected = {
							tab: "info"
						})
					}), e.$watch("currentSubTechnique", function (e, t)
					{
						n.isString(e.id) && e.id != t.id && o(e.id)
					}, !0), e.$watch("subTechniqueId", function (t, i)
					{
						n.isString(t) && t != i && Object.keys(e.currentTechnique.children).indexOf(t) >= 0 && o(t)
					}, !0);
					var o = function (i)
					{
						n.isString(e.currUrl) && n.isString(i) && t(
						{
							method: "GET",
							url: e.currUrl + "entities/techniques/" + i + ".json",
							dataType: "json"
						}).then(function (t)
						{
							t = t.data ||
							{}, n.isString(t.attack_id) ? (e.selected.tab = "info", t.id = i, e.currentSubTechnique = t) : e.currentSubTechnique.errorDataLoad = !0
						}, function (t)
						{
							e.currentSubTechnique.errorDataLoad = !0, console.log("connection error")
						})
					}
				};
			return {
				compile: function (e, t)
				{
					return {
						pre: i,
						post: s
					}
				},
				scope:
				{
					currUrl: "=",
					technique: "=",
					subTechniqueId: "=?"
				},
				template: r.default
			}
		}]
	};
	var i = n(30),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i)
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$route", "$http", "spCF", function (e, t, n)
		{
			return {
				link: function (e, t, n, i, r) {},
				scope:
				{
					currUrl: "="
				},
				template: r.default
			}
		}]
	};
	var i = n(31),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i)
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$route", "$http", "spCF", function (e, t, n)
		{
			return {
				link: function (e, t, n, i, r)
				{
					e.isOpen = !1, e.isFixed = !1, e.isShow = !1, e.navItemsIsOpen = {};
					var s = 0,
						a = $("#header");
					$(window).scrollTop(1), $(window).on("resize", function ()
					{
						window.innerWidth > 1024 ? e.$apply(function ()
						{
							e.isOpen = !1
						}) : e.$apply(function ()
						{
							e.isFixed = !1
						})
					}), $(window).on("scroll", function ()
					{
						var t = $(this).scrollTop();
						t > s && window.innerWidth >= 1024 ? t > 100 ? (e.$apply(function ()
						{
							e.isShow = !1, e.isFixed = !0
						}), a.fadeOut(200)) : t > 60 && a.fadeOut(0) : t > 100 && !0 === e.isFixed && window.innerWidth >= 1024 ? (a.fadeIn(0), e.$apply(function ()
						{
							e.isShow = !0
						})) : t < 2 && window.innerWidth >= 1024 && (e.$apply(function ()
						{
							e.isFixed = !1
						}), a.fadeIn(200)), s = t
					}), e.toggleItem = function (t)
					{
						for (var n in e.navItemsIsOpen) n != t && (e.navItemsIsOpen[n] = !1);
						e.navItemsIsOpen[t] = !e.navItemsIsOpen[t]
					}
				},
				scope:
				{
					currUrl: "="
				},
				template: r.default
			}
		}]
	};
	var i = n(32),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i)
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	});
	var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e)
	{
		return typeof e
	} : function (e)
	{
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
	t.default = function ()
	{
		return [function ()
		{
			return {
				getArrayOrEmpty: function (e)
				{
					var t = this;
					return function (e)
					{
						return t.isArray(e) ? e : []
					}(e)
				},
				isSet: function (e)
				{
					return void 0 !== e
				},
				isArray: function (e)
				{
					return void 0 !== e && Array.isArray(e)
				},
				isObject: function (e)
				{
					return "object" == (void 0 === e ? "undefined" : i(e)) && !Array.isArray(e) && null !== e
				},
				isString: function (e)
				{
					return "string" == typeof e && e.length > 0
				},
				isFunction: function (e)
				{
					return "function" == typeof e
				},
				isBool: function (e)
				{
					return "boolean" == typeof e
				},
				isNumber: function (e)
				{
					return parseFloat(e) == e
				},
				getModalAlertPattern: function (e)
				{
					return {
						title: "",
						body: "",
						actions: [
						{
							label: "Close",
							cssClass: "btn btn-secondary",
							onClick: function (t)
							{
								e.reload()
							}
						}],
						onHide: function ()
						{
							e.reload()
						}
					}
				},
				getModalAlertWithoutReloadPattern: function (e)
				{
					return {
						title: "",
						body: "",
						actions: [
						{
							label: "Close",
							cssClass: "btn btn-secondary",
							onClick: function (e)
							{
								$(e.target).parents(".modal").modal("hide")
							}
						}]
					}
				},
				getModalAlertPatternWithRedirectToMain: function (e)
				{
					return {
						title: "",
						body: "",
						actions: [
						{
							label: "Close",
							cssClass: "btn btn-secondary",
							onClick: function (e)
							{
								window.location.href = "#/"
							}
						}],
						onHide: function ()
						{
							window.location.href = "#/"
						}
					}
				},
				frontEndGetJsonFromCookie: function (e)
				{
					var t = $.cookie(e);
					try
					{
						t = JSON.parse(t)
					}
					catch (e)
					{
						t = {}
					}
					return this.isObject(t) ? t :
					{}
				}
			}
		}]
	}
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function ()
	{
		return ["$compile", function (e)
		{
			return {
				show: function (t, n)
				{
					(0, r.default)(document).ready(function ()
					{
						n = r.default.extend(
						{
							title: "",
							body: "",
							actions: !1,
							onHide: !1
						}, n), (0, r.default)(".modal-overlay").remove(), (0, r.default)(".modal-box").remove();
						var i = (0, r.default)('<div class="modal-overlay"></div>'),
							a = (0, r.default)('<div class="modal-box"></div>');
						a.html(s(t, e, n.title, n.body)), (0, r.default)("body").prepend(i), (0, r.default)("body").prepend(a), i.show(), a.show(), a.find(".modal-box__close").on("click", function (e)
						{
							(0, r.default)(".modal-overlay").remove(), (0, r.default)(".modal-box").remove(), "function" == typeof n.onHide && n.onHide(e)
						})
					})
				},
				hide: function ()
				{
					(0, r.default)(".modal-overlay").remove(), (0, r.default)(".modal-box").remove()
				}
			}
		}]
	};
	var i = n(0),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i),
		s = function (e, t, n, i)
		{
			var s = (0, r.default)('<div class="modal-box__helper">\n    <div class="modal-box__center">\n        <div class="modal-box__wrap">\n            <div class="modal-box__header">\n                <h4 class="modal-box__title">' + n + '</h4>\n                <button class="modal-box__close" type="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.56066 0.439339C1.97487 -0.146446 1.02513 -0.146446 0.439339 0.439339C-0.146446 1.02513 -0.146446 1.97487 0.439339 2.56066L6.87868 9L0.439358 15.4393C-0.146428 16.0251 -0.146428 16.9749 0.439358 17.5606C1.02514 18.1464 1.97489 18.1464 2.56068 17.5606L9 11.1213L15.4393 17.5606C16.0251 18.1464 16.9749 18.1464 17.5606 17.5606C18.1464 16.9749 18.1464 16.0251 17.5606 15.4393L11.1213 9L17.5607 2.56066C18.1464 1.97487 18.1464 1.02513 17.5607 0.439339C16.9749 -0.146446 16.0251 -0.146446 15.4393 0.439339L9 6.87868L2.56066 0.439339Z" fill="white"/></svg>\n                </button>\n            </div>\n            <div class="modal-box__body"></div>\n        </div>\n    </div>\n</div>'),
				a = angular.element(i),
				o = t(a);
			return s.find(".modal-box__body").append(o(e)), s
		}
}, function (e, t, n)
{
	"use strict";
	var i = n(0),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i);
	(0, r.default)(document).ready(function ()
	{
		r.default.fn.waitAnimationStart = function (e)
		{
			e = e ||
			{};
			var t = e.zIndex ? e.zIndex : void 0,
				n = e.pulseSize ? e.pulseSize : "36",
				i = !!e.backgroundTransparent && e.backgroundTransparent;
			(0, r.default)(this).prepend('<div align="center" class="animation-image-overlay" style="' + (void 0 !== t ? "z-index: " + t : "") + "; " + (i ? "background-color: transparent" : "") + '"><div align="center" class="animation-image"><i class="fa fa-spinner fa-pulse" style="font-size: ' + n + 'px;"></i></div></div>');
			var s = (0, r.default)(this).outerHeight();
			(0, r.default)(this).find(".animation-image").css(
			{
				"margin-top": parseInt(s / 2 - parseInt(n) / 2) + "px"
			}), (0, r.default)(this).find(".animation-image-overlay").css(
			{
				height: s + "px"
			})
		}, r.default.fn.waitAnimationStop = function ()
		{
			(0, r.default)(this).find(".animation-image-overlay").detach(), (0, r.default)(this).find(".animation-image").detach()
		}
	})
}, function (e, t, n)
{
	"use strict";
	var i, r, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e)
	{
		return typeof e
	} : function (e)
	{
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	}; /*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
	! function (a)
	{
		r = [n(0)], i = a, void 0 !== (s = "function" == typeof i ? i.apply(t, r) : i) && (e.exports = s)
	}(function (n)
	{
		var i = function ()
			{
				function i(e, t)
				{
					return C.call(e, t)
				}

				function r(e, t)
				{
					var n, i, r, s, a, o, c, l, u, d, h, p = t && t.split("/"),
						f = w.map,
						m = f && f["*"] ||
						{};
					if (e)
					{
						for (a = (e = e.split("/")).length - 1, w.nodeIdCompat && E.test(e[a]) && (e[a] = e[a].replace(E, "")), "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)), u = 0; u < e.length; u++)
							if ("." === (h = e[u])) e.splice(u, 1), u -= 1;
							else if (".." === h)
						{
							if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1]) continue;
							0 < u && (e.splice(u - 1, 2), u -= 2)
						}
						e = e.join("/")
					}
					if ((p || m) && f)
					{
						for (u = (n = e.split("/")).length; 0 < u; u -= 1)
						{
							if (i = n.slice(0, u).join("/"), p)
								for (d = p.length; 0 < d; d -= 1)
									if (r = (r = f[p.slice(0, d).join("/")]) && r[i])
									{
										s = r, o = u;
										break
									}
							if (s) break;
							!c && m && m[i] && (c = m[i], l = u)
						}!s && c && (s = c, o = l), s && (n.splice(0, o, s), e = n.join("/"))
					}
					return e
				}

				function s(e, t)
				{
					return function ()
					{
						var n = S.call(arguments, 0);
						return "string" != typeof n[0] && 1 === n.length && n.push(null), v.apply(m, n.concat([e, t]))
					}
				}

				function o(e)
				{
					return function (t)
					{
						y[e] = t
					}
				}

				function c(e)
				{
					if (i(T, e))
					{
						var t = T[e];
						delete T[e], _[e] = !0, g.apply(m, t)
					}
					if (!i(y, e) && !i(_, e)) throw new Error("No " + e);
					return y[e]
				}

				function l(e)
				{
					var t, n = e ? e.indexOf("!") : -1;
					return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
				}

				function u(e)
				{
					return e ? l(e) : []
				}
				if (n && n.fn && n.fn.select2 && n.fn.select2.amd) var d = n.fn.select2.amd;
				var h, p, f, m, g, v, b, x, y, T, w, _, C, S, E, A;
				return d && d.requirejs || (d ? p = d : d = {}, y = {}, T = {}, w = {}, _ = {}, C = Object.prototype.hasOwnProperty, S = [].slice, E = /\.js$/, b = function (e, t)
				{
					var n, i = l(e),
						s = i[0],
						a = t[1];
					return e = i[1], s && (n = c(s = r(s, a))), s ? e = n && n.normalize ? n.normalize(e, function (e)
					{
						return function (t)
						{
							return r(t, e)
						}
					}(a)) : r(e, a) : (s = (i = l(e = r(e, a)))[0], e = i[1], s && (n = c(s))),
					{
						f: s ? s + "!" + e : e,
						n: e,
						pr: s,
						p: n
					}
				}, x = {
					require: function (e)
					{
						return s(e)
					},
					exports: function (e)
					{
						var t = y[e];
						return void 0 !== t ? t : y[e] = {}
					},
					module: function (e)
					{
						return {
							id: e,
							uri: "",
							exports: y[e],
							config: function (e)
							{
								return function ()
								{
									return w && w.config && w.config[e] ||
									{}
								}
							}(e)
						}
					}
				}, g = function (e, t, n, r)
				{
					var l, d, h, p, f, g, v, $ = [],
						w = void 0 === n ? "undefined" : a(n);
					if (g = u(r = r || e), "undefined" == w || "function" == w)
					{
						for (t = !t.length && n.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1)
							if ("require" === (d = (p = b(t[f], g)).f)) $[f] = x.require(e);
							else if ("exports" === d) $[f] = x.exports(e), v = !0;
						else if ("module" === d) l = $[f] = x.module(e);
						else if (i(y, d) || i(T, d) || i(_, d)) $[f] = c(d);
						else
						{
							if (!p.p) throw new Error(e + " missing " + d);
							p.p.load(p.n, s(r, !0), o(d),
							{}), $[f] = y[d]
						}
						h = n ? n.apply(y[e], $) : void 0, e && (l && l.exports !== m && l.exports !== y[e] ? y[e] = l.exports : h === m && v || (y[e] = h))
					}
					else e && (y[e] = n)
				}, h = p = v = function (e, t, n, i, r)
				{
					if ("string" == typeof e) return x[e] ? x[e](t) : c(b(e, u(t)).f);
					if (!e.splice)
					{
						if ((w = e).deps && v(w.deps, w.callback), !t) return;
						t.splice ? (e = t, t = n, n = null) : e = m
					}
					return t = t || function () {}, "function" == typeof n && (n = i, i = r), i ? g(m, e, t, n) : setTimeout(function ()
					{
						g(m, e, t, n)
					}, 4), v
				}, v.config = function (e)
				{
					return v(e)
				}, h._defined = y, (f = function (e, t, n)
				{
					if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
					t.splice || (n = t, t = []), i(y, e) || i(T, e) || (T[e] = [e, t, n])
				}).amd = {
					jQuery: !0
				}, d.requirejs = h, d.require = p, d.define = f), d.define("almond", function () {}), d.define("jquery", [], function ()
				{
					var e = n || $;
					return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
				}), d.define("select2/utils", ["jquery"], function (e)
				{
					function t(e)
					{
						var t = e.prototype,
							n = [];
						for (var i in t) "function" == typeof t[i] && "constructor" !== i && n.push(i);
						return n
					}

					function n()
					{
						this.listeners = {}
					}
					var i = {};
					i.Extend = function (e, t)
					{
						function n()
						{
							this.constructor = e
						}
						var i = {}.hasOwnProperty;
						for (var r in t) i.call(t, r) && (e[r] = t[r]);
						return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
					}, i.Decorate = function (e, n)
					{
						function i()
						{
							var t = Array.prototype.unshift,
								i = n.prototype.constructor.length,
								r = e.prototype.constructor;
							0 < i && (t.call(arguments, e.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
						}
						var r = t(n),
							s = t(e);
						n.displayName = e.displayName, i.prototype = new function ()
						{
							this.constructor = i
						};
						for (var a = 0; a < s.length; a++)
						{
							var o = s[a];
							i.prototype[o] = e.prototype[o]
						}
						for (var c = 0; c < r.length; c++)
						{
							var l = r[c];
							i.prototype[l] = function (e)
							{
								var t = function () {};
								e in i.prototype && (t = i.prototype[e]);
								var r = n.prototype[e];
								return function ()
								{
									return Array.prototype.unshift.call(arguments, t), r.apply(this, arguments)
								}
							}(l)
						}
						return i
					}, n.prototype.on = function (e, t)
					{
						this.listeners = this.listeners ||
						{}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
					}, n.prototype.trigger = function (e)
					{
						var t = Array.prototype.slice,
							n = t.call(arguments, 1);
						this.listeners = this.listeners ||
						{}, null == n && (n = []), 0 === n.length && n.push(
						{}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
					}, n.prototype.invoke = function (e, t)
					{
						for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t)
					}, i.Observable = n, i.generateChars = function (e)
					{
						for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
						return t
					}, i.bind = function (e, t)
					{
						return function ()
						{
							e.apply(t, arguments)
						}
					}, i._convertData = function (e)
					{
						for (var t in e)
						{
							var n = t.split("-"),
								i = e;
							if (1 !== n.length)
							{
								for (var r = 0; r < n.length; r++)
								{
									var s = n[r];
									(s = s.substring(0, 1).toLowerCase() + s.substring(1)) in i || (i[s] = {}), r == n.length - 1 && (i[s] = e[t]), i = i[s]
								}
								delete e[t]
							}
						}
						return e
					}, i.hasScroll = function (t, n)
					{
						var i = e(n),
							r = n.style.overflowX,
							s = n.style.overflowY;
						return (r !== s || "hidden" !== s && "visible" !== s) && ("scroll" === r || "scroll" === s || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
					}, i.escapeMarkup = function (e)
					{
						var t = {
							"\\": "\",
							"&": "&",
							"<": "<",
							">": ">",
							'"': """,
							"'": "'",
							"/": "/"
						};
						return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function (e)
						{
							return t[e]
						})
					}, i.appendMany = function (t, n)
					{
						if ("1.7" === e.fn.jquery.substr(0, 3))
						{
							var i = e();
							e.map(n, function (e)
							{
								i = i.add(e)
							}), n = i
						}
						t.append(n)
					}, i.__cache = {};
					var r = 0;
					return i.GetUniqueElementId = function (e)
					{
						var t = e.getAttribute("data-select2-id");
						return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r), t = r.toString())), t
					}, i.StoreData = function (e, t, n)
					{
						var r = i.GetUniqueElementId(e);
						i.__cache[r] || (i.__cache[r] = {}), i.__cache[r][t] = n
					}, i.GetData = function (t, n)
					{
						var r = i.GetUniqueElementId(t);
						return n ? i.__cache[r] && null != i.__cache[r][n] ? i.__cache[r][n] : e(t).data(n) : i.__cache[r]
					}, i.RemoveData = function (e)
					{
						var t = i.GetUniqueElementId(e);
						null != i.__cache[t] && delete i.__cache[t], e.removeAttribute("data-select2-id")
					}, i
				}), d.define("select2/results", ["jquery", "./utils"], function (e, t)
				{
					function n(e, t, i)
					{
						this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
					}
					return t.Extend(n, t.Observable), n.prototype.render = function ()
					{
						var t = e('<ul class="select2-results__options" role="listbox"></ul>');
						return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
					}, n.prototype.clear = function ()
					{
						this.$results.empty()
					}, n.prototype.displayMessage = function (t)
					{
						var n = this.options.get("escapeMarkup");
						this.clear(), this.hideLoading();
						var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
							r = this.options.get("translations").get(t.message);
						i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
					}, n.prototype.hideMessages = function ()
					{
						this.$results.find(".select2-results__message").remove()
					}, n.prototype.append = function (e)
					{
						this.hideLoading();
						var t = [];
						if (null != e.results && 0 !== e.results.length)
						{
							e.results = this.sort(e.results);
							for (var n = 0; n < e.results.length; n++)
							{
								var i = e.results[n],
									r = this.option(i);
								t.push(r)
							}
							this.$results.append(t)
						}
						else 0 === this.$results.children().length && this.trigger("results:message",
						{
							message: "noResults"
						})
					}, n.prototype.position = function (e, t)
					{
						t.find(".select2-results").append(e)
					}, n.prototype.sort = function (e)
					{
						return this.options.get("sorter")(e)
					}, n.prototype.highlightFirstItem = function ()
					{
						var e = this.$results.find(".select2-results__option[aria-selected]"),
							t = e.filter("[aria-selected=true]");
						0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
					}, n.prototype.setClasses = function ()
					{
						var n = this;
						this.data.current(function (i)
						{
							var r = e.map(i, function (e)
							{
								return e.id.toString()
							});
							n.$results.find(".select2-results__option[aria-selected]").each(function ()
							{
								var n = e(this),
									i = t.GetData(this, "data"),
									s = "" + i.id;
								null != i.element && i.element.selected || null == i.element && -1 < e.inArray(s, r) ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
							})
						})
					}, n.prototype.showLoading = function (e)
					{
						this.hideLoading();
						var t = {
								disabled: !0,
								loading: !0,
								text: this.options.get("translations").get("searching")(e)
							},
							n = this.option(t);
						n.className += " loading-results", this.$results.prepend(n)
					}, n.prototype.hideLoading = function ()
					{
						this.$results.find(".loading-results").remove()
					}, n.prototype.option = function (n)
					{
						var i = document.createElement("li");
						i.className = "select2-results__option";
						var r = {
								role: "option",
								"aria-selected": "false"
							},
							s = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
						for (var a in (null != n.element && s.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete r["aria-selected"], r["aria-disabled"] = "true"), null == n.id && delete r["aria-selected"], null != n._resultId && (i.id = n._resultId), n.title && (i.title = n.title), n.children && (r.role = "group", r["aria-label"] = n.text, delete r["aria-selected"]), r)
						{
							var o = r[a];
							i.setAttribute(a, o)
						}
						if (n.children)
						{
							var c = e(i),
								l = document.createElement("strong");
							l.className = "select2-results__group", e(l), this.template(n, l);
							for (var u = [], d = 0; d < n.children.length; d++)
							{
								var h = n.children[d],
									p = this.option(h);
								u.push(p)
							}
							var f = e("<ul></ul>",
							{
								class: "select2-results__options select2-results__options--nested"
							});
							f.append(u), c.append(l), c.append(f)
						}
						else this.template(n, i);
						return t.StoreData(i, "data", n), i
					}, n.prototype.bind = function (n, i)
					{
						var r = this,
							s = n.id + "-results";
						this.$results.attr("id", s), n.on("results:all", function (e)
						{
							r.clear(), r.append(e.data), n.isOpen() && (r.setClasses(), r.highlightFirstItem())
						}), n.on("results:append", function (e)
						{
							r.append(e.data), n.isOpen() && r.setClasses()
						}), n.on("query", function (e)
						{
							r.hideMessages(), r.showLoading(e)
						}), n.on("select", function ()
						{
							n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem())
						}), n.on("unselect", function ()
						{
							n.isOpen() && (r.setClasses(), r.options.get("scrollAfterSelect") && r.highlightFirstItem())
						}), n.on("open", function ()
						{
							r.$results.attr("aria-expanded", "true"), r.$results.attr("aria-hidden", "false"), r.setClasses(), r.ensureHighlightVisible()
						}), n.on("close", function ()
						{
							r.$results.attr("aria-expanded", "false"), r.$results.attr("aria-hidden", "true"), r.$results.removeAttr("aria-activedescendant")
						}), n.on("results:toggle", function ()
						{
							var e = r.getHighlightedResults();
							0 !== e.length && e.trigger("mouseup")
						}), n.on("results:select", function ()
						{
							var e = r.getHighlightedResults();
							if (0 !== e.length)
							{
								var n = t.GetData(e[0], "data");
								"true" == e.attr("aria-selected") ? r.trigger("close",
								{}) : r.trigger("select",
								{
									data: n
								})
							}
						}), n.on("results:previous", function ()
						{
							var e = r.getHighlightedResults(),
								t = r.$results.find("[aria-selected]"),
								n = t.index(e);
							if (!(n <= 0))
							{
								var i = n - 1;
								0 === e.length && (i = 0);
								var s = t.eq(i);
								s.trigger("mouseenter");
								var a = r.$results.offset().top,
									o = s.offset().top,
									c = r.$results.scrollTop() + (o - a);
								0 === i ? r.$results.scrollTop(0) : o - a < 0 && r.$results.scrollTop(c)
							}
						}), n.on("results:next", function ()
						{
							var e = r.getHighlightedResults(),
								t = r.$results.find("[aria-selected]"),
								n = t.index(e) + 1;
							if (!(n >= t.length))
							{
								var i = t.eq(n);
								i.trigger("mouseenter");
								var s = r.$results.offset().top + r.$results.outerHeight(!1),
									a = i.offset().top + i.outerHeight(!1),
									o = r.$results.scrollTop() + a - s;
								0 === n ? r.$results.scrollTop(0) : s < a && r.$results.scrollTop(o)
							}
						}), n.on("results:focus", function (e)
						{
							e.element.addClass("select2-results__option--highlighted")
						}), n.on("results:message", function (e)
						{
							r.displayMessage(e)
						}), e.fn.mousewheel && this.$results.on("mousewheel", function (e)
						{
							var t = r.$results.scrollTop(),
								n = r.$results.get(0).scrollHeight - t + e.deltaY,
								i = 0 < e.deltaY && t - e.deltaY <= 0,
								s = e.deltaY < 0 && n <= r.$results.height();
							i ? (r.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : s && (r.$results.scrollTop(r.$results.get(0).scrollHeight - r.$results.height()), e.preventDefault(), e.stopPropagation())
						}), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (n)
						{
							var i = e(this),
								s = t.GetData(this, "data");
							"true" !== i.attr("aria-selected") ? r.trigger("select",
							{
								originalEvent: n,
								data: s
							}) : r.options.get("multiple") ? r.trigger("unselect",
							{
								originalEvent: n,
								data: s
							}) : r.trigger("close",
							{})
						}), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (n)
						{
							var i = t.GetData(this, "data");
							r.getHighlightedResults().removeClass("select2-results__option--highlighted"), r.trigger("results:focus",
							{
								data: i,
								element: e(this)
							})
						})
					}, n.prototype.getHighlightedResults = function ()
					{
						return this.$results.find(".select2-results__option--highlighted")
					}, n.prototype.destroy = function ()
					{
						this.$results.remove()
					}, n.prototype.ensureHighlightVisible = function ()
					{
						var e = this.getHighlightedResults();
						if (0 !== e.length)
						{
							var t = this.$results.find("[aria-selected]").index(e),
								n = this.$results.offset().top,
								i = e.offset().top,
								r = this.$results.scrollTop() + (i - n),
								s = i - n;
							r -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(r)
						}
					}, n.prototype.template = function (t, n)
					{
						var i = this.options.get("templateResult"),
							r = this.options.get("escapeMarkup"),
							s = i(t, n);
						null == s ? n.style.display = "none" : "string" == typeof s ? n.innerHTML = r(s) : e(n).append(s)
					}, n
				}), d.define("select2/keys", [], function ()
				{
					return {
						BACKSPACE: 8,
						TAB: 9,
						ENTER: 13,
						SHIFT: 16,
						CTRL: 17,
						ALT: 18,
						ESC: 27,
						SPACE: 32,
						PAGE_UP: 33,
						PAGE_DOWN: 34,
						END: 35,
						HOME: 36,
						LEFT: 37,
						UP: 38,
						RIGHT: 39,
						DOWN: 40,
						DELETE: 46
					}
				}), d.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (e, t, n)
				{
					function i(e, t)
					{
						this.$element = e, this.options = t, i.__super__.constructor.call(this)
					}
					return t.Extend(i, t.Observable), i.prototype.render = function ()
					{
						var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
						return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), n.attr("title", this.$element.attr("title")), n.attr("tabindex", this._tabindex), n.attr("aria-disabled", "false"), this.$selection = n
					}, i.prototype.bind = function (e, t)
					{
						var i = this,
							r = e.id + "-results";
						this.container = e, this.$selection.on("focus", function (e)
						{
							i.trigger("focus", e)
						}), this.$selection.on("blur", function (e)
						{
							i._handleBlur(e)
						}), this.$selection.on("keydown", function (e)
						{
							i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
						}), e.on("results:focus", function (e)
						{
							i.$selection.attr("aria-activedescendant", e.data._resultId)
						}), e.on("selection:update", function (e)
						{
							i.update(e.data)
						}), e.on("open", function ()
						{
							i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e)
						}), e.on("close", function ()
						{
							i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.trigger("focus"), i._detachCloseHandler(e)
						}), e.on("enable", function ()
						{
							i.$selection.attr("tabindex", i._tabindex), i.$selection.attr("aria-disabled", "false")
						}), e.on("disable", function ()
						{
							i.$selection.attr("tabindex", "-1"), i.$selection.attr("aria-disabled", "true")
						})
					}, i.prototype._handleBlur = function (t)
					{
						var n = this;
						window.setTimeout(function ()
						{
							document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
						}, 1)
					}, i.prototype._attachCloseHandler = function (n)
					{
						e(document.body).on("mousedown.select2." + n.id, function (n)
						{
							var i = e(n.target).closest(".select2");
							e(".select2.select2-container--open").each(function ()
							{
								this != i[0] && t.GetData(this, "element").select2("close")
							})
						})
					}, i.prototype._detachCloseHandler = function (t)
					{
						e(document.body).off("mousedown.select2." + t.id)
					}, i.prototype.position = function (e, t)
					{
						t.find(".selection").append(e)
					}, i.prototype.destroy = function ()
					{
						this._detachCloseHandler(this.container)
					}, i.prototype.update = function (e)
					{
						throw new Error("The `update` method must be defined in child classes.")
					}, i.prototype.isEnabled = function ()
					{
						return !this.isDisabled()
					}, i.prototype.isDisabled = function ()
					{
						return this.options.get("disabled")
					}, i
				}), d.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (e, t, n, i)
				{
					function r()
					{
						r.__super__.constructor.apply(this, arguments)
					}
					return n.Extend(r, t), r.prototype.render = function ()
					{
						var e = r.__super__.render.call(this);
						return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
					}, r.prototype.bind = function (e, t)
					{
						var n = this;
						r.__super__.bind.apply(this, arguments);
						var i = e.id + "-container";
						this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function (e)
						{
							1 === e.which && n.trigger("toggle",
							{
								originalEvent: e
							})
						}), this.$selection.on("focus", function (e) {}), this.$selection.on("blur", function (e) {}), e.on("focus", function (t)
						{
							e.isOpen() || n.$selection.trigger("focus")
						})
					}, r.prototype.clear = function ()
					{
						var e = this.$selection.find(".select2-selection__rendered");
						e.empty(), e.removeAttr("title")
					}, r.prototype.display = function (e, t)
					{
						var n = this.options.get("templateSelection");
						return this.options.get("escapeMarkup")(n(e, t))
					}, r.prototype.selectionContainer = function ()
					{
						return e("<span></span>")
					}, r.prototype.update = function (e)
					{
						if (0 !== e.length)
						{
							var t = e[0],
								n = this.$selection.find(".select2-selection__rendered"),
								i = this.display(t, n);
							n.empty().append(i);
							var r = t.title || t.text;
							r ? n.attr("title", r) : n.removeAttr("title")
						}
						else this.clear()
					}, r
				}), d.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (e, t, n)
				{
					function i(e, t)
					{
						i.__super__.constructor.apply(this, arguments)
					}
					return n.Extend(i, t), i.prototype.render = function ()
					{
						var e = i.__super__.render.call(this);
						return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
					}, i.prototype.bind = function (t, r)
					{
						var s = this;
						i.__super__.bind.apply(this, arguments), this.$selection.on("click", function (e)
						{
							s.trigger("toggle",
							{
								originalEvent: e
							})
						}), this.$selection.on("click", ".select2-selection__choice__remove", function (t)
						{
							if (!s.isDisabled())
							{
								var i = e(this).parent(),
									r = n.GetData(i[0], "data");
								s.trigger("unselect",
								{
									originalEvent: t,
									data: r
								})
							}
						})
					}, i.prototype.clear = function ()
					{
						var e = this.$selection.find(".select2-selection__rendered");
						e.empty(), e.removeAttr("title")
					}, i.prototype.display = function (e, t)
					{
						var n = this.options.get("templateSelection");
						return this.options.get("escapeMarkup")(n(e, t))
					}, i.prototype.selectionContainer = function ()
					{
						return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">×</span></li>')
					}, i.prototype.update = function (e)
					{
						if (this.clear(), 0 !== e.length)
						{
							for (var t = [], i = 0; i < e.length; i++)
							{
								var r = e[i],
									s = this.selectionContainer(),
									a = this.display(r, s);
								s.append(a);
								var o = r.title || r.text;
								o && s.attr("title", o), n.StoreData(s[0], "data", r), t.push(s)
							}
							var c = this.$selection.find(".select2-selection__rendered");
							n.appendMany(c, t)
						}
					}, i
				}), d.define("select2/selection/placeholder", ["../utils"], function (e)
				{
					function t(e, t, n)
					{
						this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
					}
					return t.prototype.normalizePlaceholder = function (e, t)
					{
						return "string" == typeof t && (t = {
							id: "",
							text: t
						}), t
					}, t.prototype.createPlaceholder = function (e, t)
					{
						var n = this.selectionContainer();
						return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
					}, t.prototype.update = function (e, t)
					{
						var n = 1 == t.length && t[0].id != this.placeholder.id;
						if (1 < t.length || n) return e.call(this, t);
						this.clear();
						var i = this.createPlaceholder(this.placeholder);
						this.$selection.find(".select2-selection__rendered").append(i)
					}, t
				}), d.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function (e, t, n)
				{
					function i()
					{}
					return i.prototype.bind = function (e, t, n)
					{
						var i = this;
						e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (e)
						{
							i._handleClear(e)
						}), t.on("keypress", function (e)
						{
							i._handleKeyboardClear(e, t)
						})
					}, i.prototype._handleClear = function (e, t)
					{
						if (!this.isDisabled())
						{
							var i = this.$selection.find(".select2-selection__clear");
							if (0 !== i.length)
							{
								t.stopPropagation();
								var r = n.GetData(i[0], "data"),
									s = this.$element.val();
								this.$element.val(this.placeholder.id);
								var a = {
									data: r
								};
								if (this.trigger("clear", a), a.prevented) this.$element.val(s);
								else
								{
									for (var o = 0; o < r.length; o++)
										if (a = {
												data: r[o]
											}, this.trigger("unselect", a), a.prevented) return void this.$element.val(s);
									this.$element.trigger("input").trigger("change"), this.trigger("toggle",
									{})
								}
							}
						}
					}, i.prototype._handleKeyboardClear = function (e, n, i)
					{
						i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
					}, i.prototype.update = function (t, i)
					{
						if (t.call(this, i), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === i.length))
						{
							var r = this.options.get("translations").get("removeAllItems"),
								s = e('<span class="select2-selection__clear" title="' + r() + '">×</span>');
							n.StoreData(s[0], "data", i), this.$selection.find(".select2-selection__rendered").prepend(s)
						}
					}, i
				}), d.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (e, t, n)
				{
					function i(e, t, n)
					{
						e.call(this, t, n)
					}
					return i.prototype.render = function (t)
					{
						var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
						this.$searchContainer = n, this.$search = n.find("input");
						var i = t.call(this);
						return this._transferTabIndex(), i
					}, i.prototype.bind = function (e, i, r)
					{
						var s = this,
							a = i.id + "-results";
						e.call(this, i, r), i.on("open", function ()
						{
							s.$search.attr("aria-controls", a), s.$search.trigger("focus")
						}), i.on("close", function ()
						{
							s.$search.val(""), s.$search.removeAttr("aria-controls"), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus")
						}), i.on("enable", function ()
						{
							s.$search.prop("disabled", !1), s._transferTabIndex()
						}), i.on("disable", function ()
						{
							s.$search.prop("disabled", !0)
						}), i.on("focus", function (e)
						{
							s.$search.trigger("focus")
						}), i.on("results:focus", function (e)
						{
							e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant")
						}), this.$selection.on("focusin", ".select2-search--inline", function (e)
						{
							s.trigger("focus", e)
						}), this.$selection.on("focusout", ".select2-search--inline", function (e)
						{
							s._handleBlur(e)
						}), this.$selection.on("keydown", ".select2-search--inline", function (e)
						{
							if (e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === s.$search.val())
							{
								var i = s.$searchContainer.prev(".select2-selection__choice");
								if (0 < i.length)
								{
									var r = t.GetData(i[0], "data");
									s.searchRemoveChoice(r), e.preventDefault()
								}
							}
						}), this.$selection.on("click", ".select2-search--inline", function (e)
						{
							s.$search.val() && e.stopPropagation()
						});
						var o = document.documentMode,
							c = o && o <= 11;
						this.$selection.on("input.searchcheck", ".select2-search--inline", function (e)
						{
							c ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search")
						}), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (e)
						{
							if (c && "input" === e.type) s.$selection.off("input.search input.searchcheck");
							else
							{
								var t = e.which;
								t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && s.handleSearch(e)
							}
						})
					}, i.prototype._transferTabIndex = function (e)
					{
						this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
					}, i.prototype.createPlaceholder = function (e, t)
					{
						this.$search.attr("placeholder", t.text)
					}, i.prototype.update = function (e, t)
					{
						var n = this.$search[0] == document.activeElement;
						this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.trigger("focus")
					}, i.prototype.handleSearch = function ()
					{
						if (this.resizeSearch(), !this._keyUpPrevented)
						{
							var e = this.$search.val();
							this.trigger("query",
							{
								term: e
							})
						}
						this._keyUpPrevented = !1
					}, i.prototype.searchRemoveChoice = function (e, t)
					{
						this.trigger("unselect",
						{
							data: t
						}), this.$search.val(t.text), this.handleSearch()
					}, i.prototype.resizeSearch = function ()
					{
						this.$search.css("width", "25px");
						var e = "";
						e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
					}, i
				}), d.define("select2/selection/eventRelay", ["jquery"], function (e)
				{
					function t()
					{}
					return t.prototype.bind = function (t, n, i)
					{
						var r = this,
							s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
							a = ["opening", "closing", "selecting", "unselecting", "clearing"];
						t.call(this, n, i), n.on("*", function (t, n)
						{
							if (-1 !== e.inArray(t, s))
							{
								n = n ||
								{};
								var i = e.Event("select2:" + t,
								{
									params: n
								});
								r.$element.trigger(i), -1 !== e.inArray(t, a) && (n.prevented = i.isDefaultPrevented())
							}
						})
					}, t
				}), d.define("select2/translation", ["jquery", "require"], function (e, t)
				{
					function n(e)
					{
						this.dict = e ||
						{}
					}
					return n.prototype.all = function ()
					{
						return this.dict
					}, n.prototype.get = function (e)
					{
						return this.dict[e]
					}, n.prototype.extend = function (t)
					{
						this.dict = e.extend(
						{}, t.all(), this.dict)
					}, n._cache = {}, n.loadPath = function (e)
					{
						if (!(e in n._cache))
						{
							var i = t(e);
							n._cache[e] = i
						}
						return new n(n._cache[e])
					}, n
				}), d.define("select2/diacritics", [], function ()
				{
					return {
						"Ⓐ": "A",
						"Ａ": "A",
						"À": "A",
						"Á": "A",
						"Â": "A",
						"Ầ": "A",
						"Ấ": "A",
						"Ẫ": "A",
						"Ẩ": "A",
						"Ã": "A",
						"Ā": "A",
						"Ă": "A",
						"Ằ": "A",
						"Ắ": "A",
						"Ẵ": "A",
						"Ẳ": "A",
						"Ȧ": "A",
						"Ǡ": "A",
						"Ä": "A",
						"Ǟ": "A",
						"Ả": "A",
						"Å": "A",
						"Ǻ": "A",
						"Ǎ": "A",
						"Ȁ": "A",
						"Ȃ": "A",
						"Ạ": "A",
						"Ậ": "A",
						"Ặ": "A",
						"Ḁ": "A",
						"Ą": "A",
						"Ⱥ": "A",
						"Ɐ": "A",
						"Ꜳ": "AA",
						"Æ": "AE",
						"Ǽ": "AE",
						"Ǣ": "AE",
						"Ꜵ": "AO",
						"Ꜷ": "AU",
						"Ꜹ": "AV",
						"Ꜻ": "AV",
						"Ꜽ": "AY",
						"Ⓑ": "B",
						"Ｂ": "B",
						"Ḃ": "B",
						"Ḅ": "B",
						"Ḇ": "B",
						"Ƀ": "B",
						"Ƃ": "B",
						"Ɓ": "B",
						"Ⓒ": "C",
						"Ｃ": "C",
						"Ć": "C",
						"Ĉ": "C",
						"Ċ": "C",
						"Č": "C",
						"Ç": "C",
						"Ḉ": "C",
						"Ƈ": "C",
						"Ȼ": "C",
						"Ꜿ": "C",
						"Ⓓ": "D",
						"Ｄ": "D",
						"Ḋ": "D",
						"Ď": "D",
						"Ḍ": "D",
						"Ḑ": "D",
						"Ḓ": "D",
						"Ḏ": "D",
						"Đ": "D",
						"Ƌ": "D",
						"Ɗ": "D",
						"Ɖ": "D",
						"Ꝺ": "D",
						"Ǳ": "DZ",
						"Ǆ": "DZ",
						"ǲ": "Dz",
						"ǅ": "Dz",
						"Ⓔ": "E",
						"Ｅ": "E",
						"È": "E",
						"É": "E",
						"Ê": "E",
						"Ề": "E",
						"Ế": "E",
						"Ễ": "E",
						"Ể": "E",
						"Ẽ": "E",
						"Ē": "E",
						"Ḕ": "E",
						"Ḗ": "E",
						"Ĕ": "E",
						"Ė": "E",
						"Ë": "E",
						"Ẻ": "E",
						"Ě": "E",
						"Ȅ": "E",
						"Ȇ": "E",
						"Ẹ": "E",
						"Ệ": "E",
						"Ȩ": "E",
						"Ḝ": "E",
						"Ę": "E",
						"Ḙ": "E",
						"Ḛ": "E",
						"Ɛ": "E",
						"Ǝ": "E",
						"Ⓕ": "F",
						"Ｆ": "F",
						"Ḟ": "F",
						"Ƒ": "F",
						"Ꝼ": "F",
						"Ⓖ": "G",
						"Ｇ": "G",
						"Ǵ": "G",
						"Ĝ": "G",
						"Ḡ": "G",
						"Ğ": "G",
						"Ġ": "G",
						"Ǧ": "G",
						"Ģ": "G",
						"Ǥ": "G",
						"Ɠ": "G",
						"Ꞡ": "G",
						"Ᵹ": "G",
						"Ꝿ": "G",
						"Ⓗ": "H",
						"Ｈ": "H",
						"Ĥ": "H",
						"Ḣ": "H",
						"Ḧ": "H",
						"Ȟ": "H",
						"Ḥ": "H",
						"Ḩ": "H",
						"Ḫ": "H",
						"Ħ": "H",
						"Ⱨ": "H",
						"Ⱶ": "H",
						"Ɥ": "H",
						"Ⓘ": "I",
						"Ｉ": "I",
						"Ì": "I",
						"Í": "I",
						"Î": "I",
						"Ĩ": "I",
						"Ī": "I",
						"Ĭ": "I",
						"İ": "I",
						"Ï": "I",
						"Ḯ": "I",
						"Ỉ": "I",
						"Ǐ": "I",
						"Ȉ": "I",
						"Ȋ": "I",
						"Ị": "I",
						"Į": "I",
						"Ḭ": "I",
						"Ɨ": "I",
						"Ⓙ": "J",
						"Ｊ": "J",
						"Ĵ": "J",
						"Ɉ": "J",
						"Ⓚ": "K",
						"Ｋ": "K",
						"Ḱ": "K",
						"Ǩ": "K",
						"Ḳ": "K",
						"Ķ": "K",
						"Ḵ": "K",
						"Ƙ": "K",
						"Ⱪ": "K",
						"Ꝁ": "K",
						"Ꝃ": "K",
						"Ꝅ": "K",
						"Ꞣ": "K",
						"Ⓛ": "L",
						"Ｌ": "L",
						"Ŀ": "L",
						"Ĺ": "L",
						"Ľ": "L",
						"Ḷ": "L",
						"Ḹ": "L",
						"Ļ": "L",
						"Ḽ": "L",
						"Ḻ": "L",
						"Ł": "L",
						"Ƚ": "L",
						"Ɫ": "L",
						"Ⱡ": "L",
						"Ꝉ": "L",
						"Ꝇ": "L",
						"Ꞁ": "L",
						"Ǉ": "LJ",
						"ǈ": "Lj",
						"Ⓜ": "M",
						"Ｍ": "M",
						"Ḿ": "M",
						"Ṁ": "M",
						"Ṃ": "M",
						"Ɱ": "M",
						"Ɯ": "M",
						"Ⓝ": "N",
						"Ｎ": "N",
						"Ǹ": "N",
						"Ń": "N",
						"Ñ": "N",
						"Ṅ": "N",
						"Ň": "N",
						"Ṇ": "N",
						"Ņ": "N",
						"Ṋ": "N",
						"Ṉ": "N",
						"Ƞ": "N",
						"Ɲ": "N",
						"Ꞑ": "N",
						"Ꞥ": "N",
						"Ǌ": "NJ",
						"ǋ": "Nj",
						"Ⓞ": "O",
						"Ｏ": "O",
						"Ò": "O",
						"Ó": "O",
						"Ô": "O",
						"Ồ": "O",
						"Ố": "O",
						"Ỗ": "O",
						"Ổ": "O",
						"Õ": "O",
						"Ṍ": "O",
						"Ȭ": "O",
						"Ṏ": "O",
						"Ō": "O",
						"Ṑ": "O",
						"Ṓ": "O",
						"Ŏ": "O",
						"Ȯ": "O",
						"Ȱ": "O",
						"Ö": "O",
						"Ȫ": "O",
						"Ỏ": "O",
						"Ő": "O",
						"Ǒ": "O",
						"Ȍ": "O",
						"Ȏ": "O",
						"Ơ": "O",
						"Ờ": "O",
						"Ớ": "O",
						"Ỡ": "O",
						"Ở": "O",
						"Ợ": "O",
						"Ọ": "O",
						"Ộ": "O",
						"Ǫ": "O",
						"Ǭ": "O",
						"Ø": "O",
						"Ǿ": "O",
						"Ɔ": "O",
						"Ɵ": "O",
						"Ꝋ": "O",
						"Ꝍ": "O",
						"Œ": "OE",
						"Ƣ": "OI",
						"Ꝏ": "OO",
						"Ȣ": "OU",
						"Ⓟ": "P",
						"Ｐ": "P",
						"Ṕ": "P",
						"Ṗ": "P",
						"Ƥ": "P",
						"Ᵽ": "P",
						"Ꝑ": "P",
						"Ꝓ": "P",
						"Ꝕ": "P",
						"Ⓠ": "Q",
						"Ｑ": "Q",
						"Ꝗ": "Q",
						"Ꝙ": "Q",
						"Ɋ": "Q",
						"Ⓡ": "R",
						"Ｒ": "R",
						"Ŕ": "R",
						"Ṙ": "R",
						"Ř": "R",
						"Ȑ": "R",
						"Ȓ": "R",
						"Ṛ": "R",
						"Ṝ": "R",
						"Ŗ": "R",
						"Ṟ": "R",
						"Ɍ": "R",
						"Ɽ": "R",
						"Ꝛ": "R",
						"Ꞧ": "R",
						"Ꞃ": "R",
						"Ⓢ": "S",
						"Ｓ": "S",
						"ẞ": "S",
						"Ś": "S",
						"Ṥ": "S",
						"Ŝ": "S",
						"Ṡ": "S",
						"Š": "S",
						"Ṧ": "S",
						"Ṣ": "S",
						"Ṩ": "S",
						"Ș": "S",
						"Ş": "S",
						"Ȿ": "S",
						"Ꞩ": "S",
						"Ꞅ": "S",
						"Ⓣ": "T",
						"Ｔ": "T",
						"Ṫ": "T",
						"Ť": "T",
						"Ṭ": "T",
						"Ț": "T",
						"Ţ": "T",
						"Ṱ": "T",
						"Ṯ": "T",
						"Ŧ": "T",
						"Ƭ": "T",
						"Ʈ": "T",
						"Ⱦ": "T",
						"Ꞇ": "T",
						"Ꜩ": "TZ",
						"Ⓤ": "U",
						"Ｕ": "U",
						"Ù": "U",
						"Ú": "U",
						"Û": "U",
						"Ũ": "U",
						"Ṹ": "U",
						"Ū": "U",
						"Ṻ": "U",
						"Ŭ": "U",
						"Ü": "U",
						"Ǜ": "U",
						"Ǘ": "U",
						"Ǖ": "U",
						"Ǚ": "U",
						"Ủ": "U",
						"Ů": "U",
						"Ű": "U",
						"Ǔ": "U",
						"Ȕ": "U",
						"Ȗ": "U",
						"Ư": "U",
						"Ừ": "U",
						"Ứ": "U",
						"Ữ": "U",
						"Ử": "U",
						"Ự": "U",
						"Ụ": "U",
						"Ṳ": "U",
						"Ų": "U",
						"Ṷ": "U",
						"Ṵ": "U",
						"Ʉ": "U",
						"Ⓥ": "V",
						"Ｖ": "V",
						"Ṽ": "V",
						"Ṿ": "V",
						"Ʋ": "V",
						"Ꝟ": "V",
						"Ʌ": "V",
						"Ꝡ": "VY",
						"Ⓦ": "W",
						"Ｗ": "W",
						"Ẁ": "W",
						"Ẃ": "W",
						"Ŵ": "W",
						"Ẇ": "W",
						"Ẅ": "W",
						"Ẉ": "W",
						"Ⱳ": "W",
						"Ⓧ": "X",
						"Ｘ": "X",
						"Ẋ": "X",
						"Ẍ": "X",
						"Ⓨ": "Y",
						"Ｙ": "Y",
						"Ỳ": "Y",
						"Ý": "Y",
						"Ŷ": "Y",
						"Ỹ": "Y",
						"Ȳ": "Y",
						"Ẏ": "Y",
						"Ÿ": "Y",
						"Ỷ": "Y",
						"Ỵ": "Y",
						"Ƴ": "Y",
						"Ɏ": "Y",
						"Ỿ": "Y",
						"Ⓩ": "Z",
						"Ｚ": "Z",
						"Ź": "Z",
						"Ẑ": "Z",
						"Ż": "Z",
						"Ž": "Z",
						"Ẓ": "Z",
						"Ẕ": "Z",
						"Ƶ": "Z",
						"Ȥ": "Z",
						"Ɀ": "Z",
						"Ⱬ": "Z",
						"Ꝣ": "Z",
						"ⓐ": "a",
						"ａ": "a",
						"ẚ": "a",
						"à": "a",
						"á": "a",
						"â": "a",
						"ầ": "a",
						"ấ": "a",
						"ẫ": "a",
						"ẩ": "a",
						"ã": "a",
						"ā": "a",
						"ă": "a",
						"ằ": "a",
						"ắ": "a",
						"ẵ": "a",
						"ẳ": "a",
						"ȧ": "a",
						"ǡ": "a",
						"ä": "a",
						"ǟ": "a",
						"ả": "a",
						"å": "a",
						"ǻ": "a",
						"ǎ": "a",
						"ȁ": "a",
						"ȃ": "a",
						"ạ": "a",
						"ậ": "a",
						"ặ": "a",
						"ḁ": "a",
						"ą": "a",
						"ⱥ": "a",
						"ɐ": "a",
						"ꜳ": "aa",
						"æ": "ae",
						"ǽ": "ae",
						"ǣ": "ae",
						"ꜵ": "ao",
						"ꜷ": "au",
						"ꜹ": "av",
						"ꜻ": "av",
						"ꜽ": "ay",
						"ⓑ": "b",
						"ｂ": "b",
						"ḃ": "b",
						"ḅ": "b",
						"ḇ": "b",
						"ƀ": "b",
						"ƃ": "b",
						"ɓ": "b",
						"ⓒ": "c",
						"ｃ": "c",
						"ć": "c",
						"ĉ": "c",
						"ċ": "c",
						"č": "c",
						"ç": "c",
						"ḉ": "c",
						"ƈ": "c",
						"ȼ": "c",
						"ꜿ": "c",
						"ↄ": "c",
						"ⓓ": "d",
						"ｄ": "d",
						"ḋ": "d",
						"ď": "d",
						"ḍ": "d",
						"ḑ": "d",
						"ḓ": "d",
						"ḏ": "d",
						"đ": "d",
						"ƌ": "d",
						"ɖ": "d",
						"ɗ": "d",
						"ꝺ": "d",
						"ǳ": "dz",
						"ǆ": "dz",
						"ⓔ": "e",
						"ｅ": "e",
						"è": "e",
						"é": "e",
						"ê": "e",
						"ề": "e",
						"ế": "e",
						"ễ": "e",
						"ể": "e",
						"ẽ": "e",
						"ē": "e",
						"ḕ": "e",
						"ḗ": "e",
						"ĕ": "e",
						"ė": "e",
						"ë": "e",
						"ẻ": "e",
						"ě": "e",
						"ȅ": "e",
						"ȇ": "e",
						"ẹ": "e",
						"ệ": "e",
						"ȩ": "e",
						"ḝ": "e",
						"ę": "e",
						"ḙ": "e",
						"ḛ": "e",
						"ɇ": "e",
						"ɛ": "e",
						"ǝ": "e",
						"ⓕ": "f",
						"ｆ": "f",
						"ḟ": "f",
						"ƒ": "f",
						"ꝼ": "f",
						"ⓖ": "g",
						"ｇ": "g",
						"ǵ": "g",
						"ĝ": "g",
						"ḡ": "g",
						"ğ": "g",
						"ġ": "g",
						"ǧ": "g",
						"ģ": "g",
						"ǥ": "g",
						"ɠ": "g",
						"ꞡ": "g",
						"ᵹ": "g",
						"ꝿ": "g",
						"ⓗ": "h",
						"ｈ": "h",
						"ĥ": "h",
						"ḣ": "h",
						"ḧ": "h",
						"ȟ": "h",
						"ḥ": "h",
						"ḩ": "h",
						"ḫ": "h",
						"ẖ": "h",
						"ħ": "h",
						"ⱨ": "h",
						"ⱶ": "h",
						"ɥ": "h",
						"ƕ": "hv",
						"ⓘ": "i",
						"ｉ": "i",
						"ì": "i",
						"í": "i",
						"î": "i",
						"ĩ": "i",
						"ī": "i",
						"ĭ": "i",
						"ï": "i",
						"ḯ": "i",
						"ỉ": "i",
						"ǐ": "i",
						"ȉ": "i",
						"ȋ": "i",
						"ị": "i",
						"į": "i",
						"ḭ": "i",
						"ɨ": "i",
						"ı": "i",
						"ⓙ": "j",
						"ｊ": "j",
						"ĵ": "j",
						"ǰ": "j",
						"ɉ": "j",
						"ⓚ": "k",
						"ｋ": "k",
						"ḱ": "k",
						"ǩ": "k",
						"ḳ": "k",
						"ķ": "k",
						"ḵ": "k",
						"ƙ": "k",
						"ⱪ": "k",
						"ꝁ": "k",
						"ꝃ": "k",
						"ꝅ": "k",
						"ꞣ": "k",
						"ⓛ": "l",
						"ｌ": "l",
						"ŀ": "l",
						"ĺ": "l",
						"ľ": "l",
						"ḷ": "l",
						"ḹ": "l",
						"ļ": "l",
						"ḽ": "l",
						"ḻ": "l",
						"ſ": "l",
						"ł": "l",
						"ƚ": "l",
						"ɫ": "l",
						"ⱡ": "l",
						"ꝉ": "l",
						"ꞁ": "l",
						"ꝇ": "l",
						"ǉ": "lj",
						"ⓜ": "m",
						"ｍ": "m",
						"ḿ": "m",
						"ṁ": "m",
						"ṃ": "m",
						"ɱ": "m",
						"ɯ": "m",
						"ⓝ": "n",
						"ｎ": "n",
						"ǹ": "n",
						"ń": "n",
						"ñ": "n",
						"ṅ": "n",
						"ň": "n",
						"ṇ": "n",
						"ņ": "n",
						"ṋ": "n",
						"ṉ": "n",
						"ƞ": "n",
						"ɲ": "n",
						"ŉ": "n",
						"ꞑ": "n",
						"ꞥ": "n",
						"ǌ": "nj",
						"ⓞ": "o",
						"ｏ": "o",
						"ò": "o",
						"ó": "o",
						"ô": "o",
						"ồ": "o",
						"ố": "o",
						"ỗ": "o",
						"ổ": "o",
						"õ": "o",
						"ṍ": "o",
						"ȭ": "o",
						"ṏ": "o",
						"ō": "o",
						"ṑ": "o",
						"ṓ": "o",
						"ŏ": "o",
						"ȯ": "o",
						"ȱ": "o",
						"ö": "o",
						"ȫ": "o",
						"ỏ": "o",
						"ő": "o",
						"ǒ": "o",
						"ȍ": "o",
						"ȏ": "o",
						"ơ": "o",
						"ờ": "o",
						"ớ": "o",
						"ỡ": "o",
						"ở": "o",
						"ợ": "o",
						"ọ": "o",
						"ộ": "o",
						"ǫ": "o",
						"ǭ": "o",
						"ø": "o",
						"ǿ": "o",
						"ɔ": "o",
						"ꝋ": "o",
						"ꝍ": "o",
						"ɵ": "o",
						"œ": "oe",
						"ƣ": "oi",
						"ȣ": "ou",
						"ꝏ": "oo",
						"ⓟ": "p",
						"ｐ": "p",
						"ṕ": "p",
						"ṗ": "p",
						"ƥ": "p",
						"ᵽ": "p",
						"ꝑ": "p",
						"ꝓ": "p",
						"ꝕ": "p",
						"ⓠ": "q",
						"ｑ": "q",
						"ɋ": "q",
						"ꝗ": "q",
						"ꝙ": "q",
						"ⓡ": "r",
						"ｒ": "r",
						"ŕ": "r",
						"ṙ": "r",
						"ř": "r",
						"ȑ": "r",
						"ȓ": "r",
						"ṛ": "r",
						"ṝ": "r",
						"ŗ": "r",
						"ṟ": "r",
						"ɍ": "r",
						"ɽ": "r",
						"ꝛ": "r",
						"ꞧ": "r",
						"ꞃ": "r",
						"ⓢ": "s",
						"ｓ": "s",
						"ß": "s",
						"ś": "s",
						"ṥ": "s",
						"ŝ": "s",
						"ṡ": "s",
						"š": "s",
						"ṧ": "s",
						"ṣ": "s",
						"ṩ": "s",
						"ș": "s",
						"ş": "s",
						"ȿ": "s",
						"ꞩ": "s",
						"ꞅ": "s",
						"ẛ": "s",
						"ⓣ": "t",
						"ｔ": "t",
						"ṫ": "t",
						"ẗ": "t",
						"ť": "t",
						"ṭ": "t",
						"ț": "t",
						"ţ": "t",
						"ṱ": "t",
						"ṯ": "t",
						"ŧ": "t",
						"ƭ": "t",
						"ʈ": "t",
						"ⱦ": "t",
						"ꞇ": "t",
						"ꜩ": "tz",
						"ⓤ": "u",
						"ｕ": "u",
						"ù": "u",
						"ú": "u",
						"û": "u",
						"ũ": "u",
						"ṹ": "u",
						"ū": "u",
						"ṻ": "u",
						"ŭ": "u",
						"ü": "u",
						"ǜ": "u",
						"ǘ": "u",
						"ǖ": "u",
						"ǚ": "u",
						"ủ": "u",
						"ů": "u",
						"ű": "u",
						"ǔ": "u",
						"ȕ": "u",
						"ȗ": "u",
						"ư": "u",
						"ừ": "u",
						"ứ": "u",
						"ữ": "u",
						"ử": "u",
						"ự": "u",
						"ụ": "u",
						"ṳ": "u",
						"ų": "u",
						"ṷ": "u",
						"ṵ": "u",
						"ʉ": "u",
						"ⓥ": "v",
						"ｖ": "v",
						"ṽ": "v",
						"ṿ": "v",
						"ʋ": "v",
						"ꝟ": "v",
						"ʌ": "v",
						"ꝡ": "vy",
						"ⓦ": "w",
						"ｗ": "w",
						"ẁ": "w",
						"ẃ": "w",
						"ŵ": "w",
						"ẇ": "w",
						"ẅ": "w",
						"ẘ": "w",
						"ẉ": "w",
						"ⱳ": "w",
						"ⓧ": "x",
						"ｘ": "x",
						"ẋ": "x",
						"ẍ": "x",
						"ⓨ": "y",
						"ｙ": "y",
						"ỳ": "y",
						"ý": "y",
						"ŷ": "y",
						"ỹ": "y",
						"ȳ": "y",
						"ẏ": "y",
						"ÿ": "y",
						"ỷ": "y",
						"ẙ": "y",
						"ỵ": "y",
						"ƴ": "y",
						"ɏ": "y",
						"ỿ": "y",
						"ⓩ": "z",
						"ｚ": "z",
						"ź": "z",
						"ẑ": "z",
						"ż": "z",
						"ž": "z",
						"ẓ": "z",
						"ẕ": "z",
						"ƶ": "z",
						"ȥ": "z",
						"ɀ": "z",
						"ⱬ": "z",
						"ꝣ": "z",
						"Ά": "Α",
						"Έ": "Ε",
						"Ή": "Η",
						"Ί": "Ι",
						"Ϊ": "Ι",
						"Ό": "Ο",
						"Ύ": "Υ",
						"Ϋ": "Υ",
						"Ώ": "Ω",
						"ά": "α",
						"έ": "ε",
						"ή": "η",
						"ί": "ι",
						"ϊ": "ι",
						"ΐ": "ι",
						"ό": "ο",
						"ύ": "υ",
						"ϋ": "υ",
						"ΰ": "υ",
						"ώ": "ω",
						"ς": "σ",
						"’": "'"
					}
				}), d.define("select2/data/base", ["../utils"], function (e)
				{
					function t(e, n)
					{
						t.__super__.constructor.call(this)
					}
					return e.Extend(t, e.Observable), t.prototype.current = function (e)
					{
						throw new Error("The `current` method must be defined in child classes.")
					}, t.prototype.query = function (e, t)
					{
						throw new Error("The `query` method must be defined in child classes.")
					}, t.prototype.bind = function (e, t) {}, t.prototype.destroy = function () {}, t.prototype.generateResultId = function (t, n)
					{
						var i = t.id + "-result-";
						return i += e.generateChars(4), null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4), i
					}, t
				}), d.define("select2/data/select", ["./base", "../utils", "jquery"], function (e, t, n)
				{
					function i(e, t)
					{
						this.$element = e, this.options = t, i.__super__.constructor.call(this)
					}
					return t.Extend(i, e), i.prototype.current = function (e)
					{
						var t = [],
							i = this;
						this.$element.find(":selected").each(function ()
						{
							var e = n(this),
								r = i.item(e);
							t.push(r)
						}), e(t)
					}, i.prototype.select = function (e)
					{
						var t = this;
						if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("input").trigger("change");
						if (this.$element.prop("multiple")) this.current(function (i)
						{
							var r = [];
							(e = [e]).push.apply(e, i);
							for (var s = 0; s < e.length; s++)
							{
								var a = e[s].id; - 1 === n.inArray(a, r) && r.push(a)
							}
							t.$element.val(r), t.$element.trigger("input").trigger("change")
						});
						else
						{
							var i = e.id;
							this.$element.val(i), this.$element.trigger("input").trigger("change")
						}
					}, i.prototype.unselect = function (e)
					{
						var t = this;
						if (this.$element.prop("multiple"))
						{
							if (e.selected = !1, n(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("input").trigger("change");
							this.current(function (i)
							{
								for (var r = [], s = 0; s < i.length; s++)
								{
									var a = i[s].id;
									a !== e.id && -1 === n.inArray(a, r) && r.push(a)
								}
								t.$element.val(r), t.$element.trigger("input").trigger("change")
							})
						}
					}, i.prototype.bind = function (e, t)
					{
						var n = this;
						(this.container = e).on("select", function (e)
						{
							n.select(e.data)
						}), e.on("unselect", function (e)
						{
							n.unselect(e.data)
						})
					}, i.prototype.destroy = function ()
					{
						this.$element.find("*").each(function ()
						{
							t.RemoveData(this)
						})
					}, i.prototype.query = function (e, t)
					{
						var i = [],
							r = this;
						this.$element.children().each(function ()
						{
							var t = n(this);
							if (t.is("option") || t.is("optgroup"))
							{
								var s = r.item(t),
									a = r.matches(e, s);
								null !== a && i.push(a)
							}
						}), t(
						{
							results: i
						})
					}, i.prototype.addOptions = function (e)
					{
						t.appendMany(this.$element, e)
					}, i.prototype.option = function (e)
					{
						var i;
						e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text, void 0 !== e.id && (i.value = e.id), e.disabled && (i.disabled = !0), e.selected && (i.selected = !0), e.title && (i.title = e.title);
						var r = n(i),
							s = this._normalizeItem(e);
						return s.element = i, t.StoreData(i, "data", s), r
					}, i.prototype.item = function (e)
					{
						var i = {};
						if (null != (i = t.GetData(e[0], "data"))) return i;
						if (e.is("option")) i = {
							id: e.val(),
							text: e.text(),
							disabled: e.prop("disabled"),
							selected: e.prop("selected"),
							title: e.prop("title")
						};
						else if (e.is("optgroup"))
						{
							i = {
								text: e.prop("label"),
								children: [],
								title: e.prop("title")
							};
							for (var r = e.children("option"), s = [], a = 0; a < r.length; a++)
							{
								var o = n(r[a]),
									c = this.item(o);
								s.push(c)
							}
							i.children = s
						}
						return (i = this._normalizeItem(i)).element = e[0], t.StoreData(e[0], "data", i), i
					}, i.prototype._normalizeItem = function (e)
					{
						return e !== Object(e) && (e = {
							id: e,
							text: e
						}), null != (e = n.extend(
						{},
						{
							text: ""
						}, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend(
						{},
						{
							selected: !1,
							disabled: !1
						}, e)
					}, i.prototype.matches = function (e, t)
					{
						return this.options.get("matcher")(e, t)
					}, i
				}), d.define("select2/data/array", ["./select", "../utils", "jquery"], function (e, t, n)
				{
					function i(e, t)
					{
						this._dataToConvert = t.get("data") || [], i.__super__.constructor.call(this, e, t)
					}
					return t.Extend(i, e), i.prototype.bind = function (e, t)
					{
						i.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
					}, i.prototype.select = function (e)
					{
						var t = this.$element.find("option").filter(function (t, n)
						{
							return n.value == e.id.toString()
						});
						0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
					}, i.prototype.convertToOptions = function (e)
					{
						for (var i = this, r = this.$element.find("option"), s = r.map(function ()
							{
								return i.item(n(this)).id
							}).get(), a = [], o = 0; o < e.length; o++)
						{
							var c = this._normalizeItem(e[o]);
							if (0 <= n.inArray(c.id, s))
							{
								var l = r.filter(function (e)
									{
										return function ()
										{
											return n(this).val() == e.id
										}
									}(c)),
									u = this.item(l),
									d = n.extend(!0,
									{}, c, u),
									h = this.option(d);
								l.replaceWith(h)
							}
							else
							{
								var p = this.option(c);
								if (c.children)
								{
									var f = this.convertToOptions(c.children);
									t.appendMany(p, f)
								}
								a.push(p)
							}
						}
						return a
					}, i
				}), d.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (e, t, n)
				{
					function i(e, t)
					{
						this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
					}
					return t.Extend(i, e), i.prototype._applyDefaults = function (e)
					{
						var t = {
							data: function (e)
							{
								return n.extend(
								{}, e,
								{
									q: e.term
								})
							},
							transport: function (e, t, i)
							{
								var r = n.ajax(e);
								return r.then(t), r.fail(i), r
							}
						};
						return n.extend(
						{}, t, e, !0)
					}, i.prototype.processResults = function (e)
					{
						return e
					}, i.prototype.query = function (e, t)
					{
						function i()
						{
							var i = s.transport(s, function (i)
							{
								var s = r.processResults(i, e);
								r.options.get("debug") && window.console && console.error && (s && s.results && n.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(s)
							}, function ()
							{
								"status" in i && (0 === i.status || "0" === i.status) || r.trigger("results:message",
								{
									message: "errorLoading"
								})
							});
							r._request = i
						}
						var r = this;
						null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
						var s = n.extend(
						{
							type: "GET"
						}, this.ajaxOptions);
						"function" == typeof s.url && (s.url = s.url.call(this.$element, e)), "function" == typeof s.data && (s.data = s.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
					}, i
				}), d.define("select2/data/tags", ["jquery"], function (e)
				{
					function t(t, n, i)
					{
						var r = i.get("tags"),
							s = i.get("createTag");
						void 0 !== s && (this.createTag = s);
						var a = i.get("insertTag");
						if (void 0 !== a && (this.insertTag = a), t.call(this, n, i), e.isArray(r))
							for (var o = 0; o < r.length; o++)
							{
								var c = r[o],
									l = this._normalizeItem(c),
									u = this.option(l);
								this.$element.append(u)
							}
					}
					return t.prototype.query = function (e, t, n)
					{
						var i = this;
						this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, function e(r, s)
						{
							for (var a = r.results, o = 0; o < a.length; o++)
							{
								var c = a[o],
									l = null != c.children && !e(
									{
										results: c.children
									}, !0);
								if ((c.text || "").toUpperCase() === (t.term || "").toUpperCase() || l) return !s && (r.data = a, void n(r))
							}
							if (s) return !0;
							var u = i.createTag(t);
							if (null != u)
							{
								var d = i.option(u);
								d.attr("data-select2-tag", !0), i.addOptions([d]), i.insertTag(a, u)
							}
							r.results = a, n(r)
						}) : e.call(this, t, n)
					}, t.prototype.createTag = function (t, n)
					{
						var i = e.trim(n.term);
						return "" === i ? null :
						{
							id: i,
							text: i
						}
					}, t.prototype.insertTag = function (e, t, n)
					{
						t.unshift(n)
					}, t.prototype._removeOldTags = function (t)
					{
						this.$element.find("option[data-select2-tag]").each(function ()
						{
							this.selected || e(this).remove()
						})
					}, t
				}), d.define("select2/data/tokenizer", ["jquery"], function (e)
				{
					function t(e, t, n)
					{
						var i = n.get("tokenizer");
						void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
					}
					return t.prototype.bind = function (e, t, n)
					{
						e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
					}, t.prototype.query = function (t, n, i)
					{
						var r = this;
						n.term = n.term || "";
						var s = this.tokenizer(n, this.options, function (t)
						{
							var n = r._normalizeItem(t);
							if (!r.$element.find("option").filter(function ()
								{
									return e(this).val() === n.id
								}).length)
							{
								var i = r.option(n);
								i.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([i])
							}! function (e)
							{
								r.trigger("select",
								{
									data: e
								})
							}(n)
						});
						s.term !== n.term && (this.$search.length && (this.$search.val(s.term), this.$search.trigger("focus")), n.term = s.term), t.call(this, n, i)
					}, t.prototype.tokenizer = function (t, n, i, r)
					{
						for (var s = i.get("tokenSeparators") || [], a = n.term, o = 0, c = this.createTag || function (e)
							{
								return {
									id: e.term,
									text: e.term
								}
							}; o < a.length;)
						{
							var l = a[o];
							if (-1 !== e.inArray(l, s))
							{
								var u = a.substr(0, o),
									d = c(e.extend(
									{}, n,
									{
										term: u
									}));
								null != d ? (r(d), a = a.substr(o + 1) || "", o = 0) : o++
							}
							else o++
						}
						return {
							term: a
						}
					}, t
				}), d.define("select2/data/minimumInputLength", [], function ()
				{
					function e(e, t, n)
					{
						this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
					}
					return e.prototype.query = function (e, t, n)
					{
						t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message",
						{
							message: "inputTooShort",
							args:
							{
								minimum: this.minimumInputLength,
								input: t.term,
								params: t
							}
						}) : e.call(this, t, n)
					}, e
				}), d.define("select2/data/maximumInputLength", [], function ()
				{
					function e(e, t, n)
					{
						this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
					}
					return e.prototype.query = function (e, t, n)
					{
						t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message",
						{
							message: "inputTooLong",
							args:
							{
								maximum: this.maximumInputLength,
								input: t.term,
								params: t
							}
						}) : e.call(this, t, n)
					}, e
				}), d.define("select2/data/maximumSelectionLength", [], function ()
				{
					function e(e, t, n)
					{
						this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
					}
					return e.prototype.bind = function (e, t, n)
					{
						var i = this;
						e.call(this, t, n), t.on("select", function ()
						{
							i._checkIfMaximumSelected()
						})
					}, e.prototype.query = function (e, t, n)
					{
						var i = this;
						this._checkIfMaximumSelected(function ()
						{
							e.call(i, t, n)
						})
					}, e.prototype._checkIfMaximumSelected = function (e, t)
					{
						var n = this;
						this.current(function (e)
						{
							var i = null != e ? e.length : 0;
							0 < n.maximumSelectionLength && i >= n.maximumSelectionLength ? n.trigger("results:message",
							{
								message: "maximumSelected",
								args:
								{
									maximum: n.maximumSelectionLength
								}
							}) : t && t()
						})
					}, e
				}), d.define("select2/dropdown", ["jquery", "./utils"], function (e, t)
				{
					function n(e, t)
					{
						this.$element = e, this.options = t, n.__super__.constructor.call(this)
					}
					return t.Extend(n, t.Observable), n.prototype.render = function ()
					{
						var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
						return t.attr("dir", this.options.get("dir")), this.$dropdown = t
					}, n.prototype.bind = function () {}, n.prototype.position = function (e, t) {}, n.prototype.destroy = function ()
					{
						this.$dropdown.remove()
					}, n
				}), d.define("select2/dropdown/search", ["jquery", "../utils"], function (e, t)
				{
					function n()
					{}
					return n.prototype.render = function (t)
					{
						var n = t.call(this),
							i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
						return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
					}, n.prototype.bind = function (t, n, i)
					{
						var r = this,
							s = n.id + "-results";
						t.call(this, n, i), this.$search.on("keydown", function (e)
						{
							r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
						}), this.$search.on("input", function (t)
						{
							e(this).off("keyup")
						}), this.$search.on("keyup input", function (e)
						{
							r.handleSearch(e)
						}), n.on("open", function ()
						{
							r.$search.attr("tabindex", 0), r.$search.attr("aria-controls", s), r.$search.trigger("focus"), window.setTimeout(function ()
							{
								r.$search.trigger("focus")
							}, 0)
						}), n.on("close", function ()
						{
							r.$search.attr("tabindex", -1), r.$search.removeAttr("aria-controls"), r.$search.removeAttr("aria-activedescendant"), r.$search.val(""), r.$search.trigger("blur")
						}), n.on("focus", function ()
						{
							n.isOpen() || r.$search.trigger("focus")
						}), n.on("results:all", function (e)
						{
							null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
						}), n.on("results:focus", function (e)
						{
							e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
						})
					}, n.prototype.handleSearch = function (e)
					{
						if (!this._keyUpPrevented)
						{
							var t = this.$search.val();
							this.trigger("query",
							{
								term: t
							})
						}
						this._keyUpPrevented = !1
					}, n.prototype.showSearch = function (e, t)
					{
						return !0
					}, n
				}), d.define("select2/dropdown/hidePlaceholder", [], function ()
				{
					function e(e, t, n, i)
					{
						this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
					}
					return e.prototype.append = function (e, t)
					{
						t.results = this.removePlaceholder(t.results), e.call(this, t)
					}, e.prototype.normalizePlaceholder = function (e, t)
					{
						return "string" == typeof t && (t = {
							id: "",
							text: t
						}), t
					}, e.prototype.removePlaceholder = function (e, t)
					{
						for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--)
						{
							var r = t[i];
							this.placeholder.id === r.id && n.splice(i, 1)
						}
						return n
					}, e
				}), d.define("select2/dropdown/infiniteScroll", ["jquery"], function (e)
				{
					function t(e, t, n, i)
					{
						this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
					}
					return t.prototype.append = function (e, t)
					{
						this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
					}, t.prototype.bind = function (e, t, n)
					{
						var i = this;
						e.call(this, t, n), t.on("query", function (e)
						{
							i.lastParams = e, i.loading = !0
						}), t.on("query:append", function (e)
						{
							i.lastParams = e, i.loading = !0
						}), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
					}, t.prototype.loadMoreIfNeeded = function ()
					{
						var t = e.contains(document.documentElement, this.$loadingMore[0]);
						if (!this.loading && t)
						{
							var n = this.$results.offset().top + this.$results.outerHeight(!1);
							this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= n + 50 && this.loadMore()
						}
					}, t.prototype.loadMore = function ()
					{
						this.loading = !0;
						var t = e.extend(
						{},
						{
							page: 1
						}, this.lastParams);
						t.page++, this.trigger("query:append", t)
					}, t.prototype.showLoadingMore = function (e, t)
					{
						return t.pagination && t.pagination.more
					}, t.prototype.createLoadingMore = function ()
					{
						var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
							n = this.options.get("translations").get("loadingMore");
						return t.html(n(this.lastParams)), t
					}, t
				}), d.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (e, t)
				{
					function n(t, n, i)
					{
						this.$dropdownParent = e(i.get("dropdownParent") || document.body), t.call(this, n, i)
					}
					return n.prototype.bind = function (e, t, n)
					{
						var i = this;
						e.call(this, t, n), t.on("open", function ()
						{
							i._showDropdown(), i._attachPositioningHandler(t), i._bindContainerResultHandlers(t)
						}), t.on("close", function ()
						{
							i._hideDropdown(), i._detachPositioningHandler(t)
						}), this.$dropdownContainer.on("mousedown", function (e)
						{
							e.stopPropagation()
						})
					}, n.prototype.destroy = function (e)
					{
						e.call(this), this.$dropdownContainer.remove()
					}, n.prototype.position = function (e, t, n)
					{
						t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css(
						{
							position: "absolute",
							top: -999999
						}), this.$container = n
					}, n.prototype.render = function (t)
					{
						var n = e("<span></span>"),
							i = t.call(this);
						return n.append(i), this.$dropdownContainer = n
					}, n.prototype._hideDropdown = function (e)
					{
						this.$dropdownContainer.detach()
					}, n.prototype._bindContainerResultHandlers = function (e, t)
					{
						if (!this._containerResultsHandlersBound)
						{
							var n = this;
							t.on("results:all", function ()
							{
								n._positionDropdown(), n._resizeDropdown()
							}), t.on("results:append", function ()
							{
								n._positionDropdown(), n._resizeDropdown()
							}), t.on("results:message", function ()
							{
								n._positionDropdown(), n._resizeDropdown()
							}), t.on("select", function ()
							{
								n._positionDropdown(), n._resizeDropdown()
							}), t.on("unselect", function ()
							{
								n._positionDropdown(), n._resizeDropdown()
							}), this._containerResultsHandlersBound = !0
						}
					}, n.prototype._attachPositioningHandler = function (n, i)
					{
						var r = this,
							s = "scroll.select2." + i.id,
							a = "resize.select2." + i.id,
							o = "orientationchange.select2." + i.id,
							c = this.$container.parents().filter(t.hasScroll);
						c.each(function ()
						{
							t.StoreData(this, "select2-scroll-position",
							{
								x: e(this).scrollLeft(),
								y: e(this).scrollTop()
							})
						}), c.on(s, function (n)
						{
							var i = t.GetData(this, "select2-scroll-position");
							e(this).scrollTop(i.y)
						}), e(window).on(s + " " + a + " " + o, function (e)
						{
							r._positionDropdown(), r._resizeDropdown()
						})
					}, n.prototype._detachPositioningHandler = function (n, i)
					{
						var r = "scroll.select2." + i.id,
							s = "resize.select2." + i.id,
							a = "orientationchange.select2." + i.id;
						this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + s + " " + a)
					}, n.prototype._positionDropdown = function ()
					{
						var t = e(window),
							n = this.$dropdown.hasClass("select2-dropdown--above"),
							i = this.$dropdown.hasClass("select2-dropdown--below"),
							r = null,
							s = this.$container.offset();
						s.bottom = s.top + this.$container.outerHeight(!1);
						var a = {
							height: this.$container.outerHeight(!1)
						};
						a.top = s.top, a.bottom = s.top + a.height;
						var o = this.$dropdown.outerHeight(!1),
							c = t.scrollTop(),
							l = t.scrollTop() + t.height(),
							u = c < s.top - o,
							d = l > s.bottom + o,
							h = {
								left: s.left,
								top: a.bottom
							},
							p = this.$dropdownParent;
						"static" === p.css("position") && (p = p.offsetParent());
						var f = {
							top: 0,
							left: 0
						};
						(e.contains(document.body, p[0]) || p[0].isConnected) && (f = p.offset()), h.top -= f.top, h.left -= f.left, n || i || (r = "below"), d || !u || n ? !u && d && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (h.top = a.top - f.top - o), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(h)
					}, n.prototype._resizeDropdown = function ()
					{
						var e = {
							width: this.$container.outerWidth(!1) + "px"
						};
						this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
					}, n.prototype._showDropdown = function (e)
					{
						this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
					}, n
				}), d.define("select2/dropdown/minimumResultsForSearch", [], function ()
				{
					function e(e, t, n, i)
					{
						this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
					}
					return e.prototype.showSearch = function (e, t)
					{
						return !(function e(t)
						{
							for (var n = 0, i = 0; i < t.length; i++)
							{
								var r = t[i];
								r.children ? n += e(r.children) : n++
							}
							return n
						}(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
					}, e
				}), d.define("select2/dropdown/selectOnClose", ["../utils"], function (e)
				{
					function t()
					{}
					return t.prototype.bind = function (e, t, n)
					{
						var i = this;
						e.call(this, t, n), t.on("close", function (e)
						{
							i._handleSelectOnClose(e)
						})
					}, t.prototype._handleSelectOnClose = function (t, n)
					{
						if (n && null != n.originalSelect2Event)
						{
							var i = n.originalSelect2Event;
							if ("select" === i._type || "unselect" === i._type) return
						}
						var r = this.getHighlightedResults();
						if (!(r.length < 1))
						{
							var s = e.GetData(r[0], "data");
							null != s.element && s.element.selected || null == s.element && s.selected || this.trigger("select",
							{
								data: s
							})
						}
					}, t
				}), d.define("select2/dropdown/closeOnSelect", [], function ()
				{
					function e()
					{}
					return e.prototype.bind = function (e, t, n)
					{
						var i = this;
						e.call(this, t, n), t.on("select", function (e)
						{
							i._selectTriggered(e)
						}), t.on("unselect", function (e)
						{
							i._selectTriggered(e)
						})
					}, e.prototype._selectTriggered = function (e, t)
					{
						var n = t.originalEvent;
						n && (n.ctrlKey || n.metaKey) || this.trigger("close",
						{
							originalEvent: n,
							originalSelect2Event: t
						})
					}, e
				}), d.define("select2/i18n/en", [], function ()
				{
					return {
						errorLoading: function ()
						{
							return "The results could not be loaded."
						},
						inputTooLong: function (e)
						{
							var t = e.input.length - e.maximum,
								n = "Please delete " + t + " character";
							return 1 != t && (n += "s"), n
						},
						inputTooShort: function (e)
						{
							return "Please enter " + (e.minimum - e.input.length) + " or more characters"
						},
						loadingMore: function ()
						{
							return "Loading more results…"
						},
						maximumSelected: function (e)
						{
							var t = "You can only select " + e.maximum + " item";
							return 1 != e.maximum && (t += "s"), t
						},
						noResults: function ()
						{
							return "No results found"
						},
						searching: function ()
						{
							return "Searching…"
						},
						removeAllItems: function ()
						{
							return "Remove all items"
						}
					}
				}), d.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (e, t, n, i, r, s, a, o, c, l, u, d, h, p, f, m, g, v, b, $, x, y, T, w, _, C, S, E, A)
				{
					function k()
					{
						this.reset()
					}
					return k.prototype.apply = function (u)
					{
						if (null == (u = e.extend(!0,
							{}, this.defaults, u)).dataAdapter)
						{
							if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = p : u.dataAdapter = h, 0 < u.minimumInputLength && (u.dataAdapter = l.Decorate(u.dataAdapter, v)), 0 < u.maximumInputLength && (u.dataAdapter = l.Decorate(u.dataAdapter, b)), 0 < u.maximumSelectionLength && (u.dataAdapter = l.Decorate(u.dataAdapter, $)), u.tags && (u.dataAdapter = l.Decorate(u.dataAdapter, m)), null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = l.Decorate(u.dataAdapter, g)), null != u.query)
							{
								var d = t(u.amdBase + "compat/query");
								u.dataAdapter = l.Decorate(u.dataAdapter, d)
							}
							if (null != u.initSelection)
							{
								var A = t(u.amdBase + "compat/initSelection");
								u.dataAdapter = l.Decorate(u.dataAdapter, A)
							}
						}
						if (null == u.resultsAdapter && (u.resultsAdapter = n, null != u.ajax && (u.resultsAdapter = l.Decorate(u.resultsAdapter, w)), null != u.placeholder && (u.resultsAdapter = l.Decorate(u.resultsAdapter, T)), u.selectOnClose && (u.resultsAdapter = l.Decorate(u.resultsAdapter, S))), null == u.dropdownAdapter)
						{
							if (u.multiple) u.dropdownAdapter = x;
							else
							{
								var k = l.Decorate(x, y);
								u.dropdownAdapter = k
							}
							if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = l.Decorate(u.dropdownAdapter, C)), u.closeOnSelect && (u.dropdownAdapter = l.Decorate(u.dropdownAdapter, E)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass)
							{
								var q = t(u.amdBase + "compat/dropdownCss");
								u.dropdownAdapter = l.Decorate(u.dropdownAdapter, q)
							}
							u.dropdownAdapter = l.Decorate(u.dropdownAdapter, _)
						}
						if (null == u.selectionAdapter)
						{
							if (u.multiple ? u.selectionAdapter = r : u.selectionAdapter = i, null != u.placeholder && (u.selectionAdapter = l.Decorate(u.selectionAdapter, s)), u.allowClear && (u.selectionAdapter = l.Decorate(u.selectionAdapter, a)), u.multiple && (u.selectionAdapter = l.Decorate(u.selectionAdapter, o)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass)
							{
								var O = t(u.amdBase + "compat/containerCss");
								u.selectionAdapter = l.Decorate(u.selectionAdapter, O)
							}
							u.selectionAdapter = l.Decorate(u.selectionAdapter, c)
						}
						u.language = this._resolveLanguage(u.language), u.language.push("en");
						for (var M = [], D = 0; D < u.language.length; D++)
						{
							var R = u.language[D]; - 1 === M.indexOf(R) && M.push(R)
						}
						return u.language = M, u.translations = this._processTranslations(u.language, u.debug), u
					}, k.prototype.reset = function ()
					{
						function t(e)
						{
							return e.replace(/[^\u0000-\u007E]/g, function (e)
							{
								return d[e] || e
							})
						}
						this.defaults = {
							amdBase: "./",
							amdLanguageBase: "./i18n/",
							closeOnSelect: !0,
							debug: !1,
							dropdownAutoWidth: !1,
							escapeMarkup: l.escapeMarkup,
							language:
							{},
							matcher: function n(i, r)
							{
								if ("" === e.trim(i.term)) return r;
								if (r.children && 0 < r.children.length)
								{
									for (var s = e.extend(!0,
										{}, r), a = r.children.length - 1; 0 <= a; a--) null == n(i, r.children[a]) && s.children.splice(a, 1);
									return 0 < s.children.length ? s : n(i, s)
								}
								var o = t(r.text).toUpperCase(),
									c = t(i.term).toUpperCase();
								return -1 < o.indexOf(c) ? r : null
							},
							minimumInputLength: 0,
							maximumInputLength: 0,
							maximumSelectionLength: 0,
							minimumResultsForSearch: 0,
							selectOnClose: !1,
							scrollAfterSelect: !1,
							sorter: function (e)
							{
								return e
							},
							templateResult: function (e)
							{
								return e.text
							},
							templateSelection: function (e)
							{
								return e.text
							},
							theme: "default",
							width: "resolve"
						}
					}, k.prototype.applyFromElement = function (e, t)
					{
						var n = e.language,
							i = this.defaults.language,
							r = t.prop("lang"),
							s = t.closest("[lang]").prop("lang"),
							a = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(s));
						return e.language = a, e
					}, k.prototype._resolveLanguage = function (t)
					{
						if (!t) return [];
						if (e.isEmptyObject(t)) return [];
						if (e.isPlainObject(t)) return [t];
						var n;
						n = e.isArray(t) ? t : [t];
						for (var i = [], r = 0; r < n.length; r++)
							if (i.push(n[r]), "string" == typeof n[r] && 0 < n[r].indexOf("-"))
							{
								var s = n[r].split("-")[0];
								i.push(s)
							}
						return i
					}, k.prototype._processTranslations = function (t, n)
					{
						for (var i = new u, r = 0; r < t.length; r++)
						{
							var s = new u,
								a = t[r];
							if ("string" == typeof a) try
							{
								s = u.loadPath(a)
							}
							catch (t)
							{
								try
								{
									a = this.defaults.amdLanguageBase + a, s = u.loadPath(a)
								}
								catch (t)
								{
									n && window.console && console.warn && console.warn('Select2: The language file for "' + a + '" could not be automatically loaded. A fallback will be used instead.')
								}
							}
							else s = e.isPlainObject(a) ? new u(a) : a;
							i.extend(s)
						}
						return i
					}, k.prototype.set = function (t, n)
					{
						var i = {};
						i[e.camelCase(t)] = n;
						var r = l._convertData(i);
						e.extend(!0, this.defaults, r)
					}, new k
				}), d.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (e, t, n, i)
				{
					function r(t, r)
					{
						if (this.options = t, null != r && this.fromElement(r), null != r && (this.options = n.applyFromElement(this.options, r)), this.options = n.apply(this.options), r && r.is("input"))
						{
							var s = e(this.get("amdBase") + "compat/inputData");
							this.options.dataAdapter = i.Decorate(this.options.dataAdapter, s)
						}
					}
					return r.prototype.fromElement = function (e)
					{
						function n(e, t)
						{
							return t.toUpperCase()
						}
						var r = ["select2"];
						null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")), i.StoreData(e[0], "tags", !0)), i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")), i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
						for (var s = {}, a = 0; a < e[0].attributes.length; a++)
						{
							var o = e[0].attributes[a].name,
								c = "data-";
							if (o.substr(0, c.length) == c)
							{
								var l = o.substring(c.length),
									u = i.GetData(e[0], l);
								s[l.replace(/-([a-z])/g, n)] = u
							}
						}
						t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (s = t.extend(!0,
						{}, e[0].dataset, s));
						var d = t.extend(!0,
						{}, i.GetData(e[0]), s);
						for (var h in d = i._convertData(d)) - 1 < t.inArray(h, r) || (t.isPlainObject(this.options[h]) ? t.extend(this.options[h], d[h]) : this.options[h] = d[h]);
						return this
					}, r.prototype.get = function (e)
					{
						return this.options[e]
					}, r.prototype.set = function (e, t)
					{
						this.options[e] = t
					}, r
				}), d.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (e, t, n, i)
				{
					var r = function e(i, r)
					{
						null != n.GetData(i[0], "select2") && n.GetData(i[0], "select2").destroy(), this.$element = i, this.id = this._generateId(i), r = r ||
						{}, this.options = new t(r, i), e.__super__.constructor.call(this);
						var s = i.attr("tabindex") || 0;
						n.StoreData(i[0], "old-tabindex", s), i.attr("tabindex", "-1");
						var a = this.options.get("dataAdapter");
						this.dataAdapter = new a(i, this.options);
						var o = this.render();
						this._placeContainer(o);
						var c = this.options.get("selectionAdapter");
						this.selection = new c(i, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
						var l = this.options.get("dropdownAdapter");
						this.dropdown = new l(i, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
						var u = this.options.get("resultsAdapter");
						this.results = new u(i, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
						var d = this;
						this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (e)
						{
							d.trigger("selection:update",
							{
								data: e
							})
						}), i.addClass("select2-hidden-accessible"), i.attr("aria-hidden", "true"), this._syncAttributes(), n.StoreData(i[0], "select2", this), i.data("select2", this)
					};
					return n.Extend(r, n.Observable), r.prototype._generateId = function (e)
					{
						return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
					}, r.prototype._placeContainer = function (e)
					{
						e.insertAfter(this.$element);
						var t = this._resolveWidth(this.$element, this.options.get("width"));
						null != t && e.css("width", t)
					}, r.prototype._resolveWidth = function (e, t)
					{
						var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
						if ("resolve" == t)
						{
							var i = this._resolveWidth(e, "style");
							return null != i ? i : this._resolveWidth(e, "element")
						}
						if ("element" == t)
						{
							var r = e.outerWidth(!1);
							return r <= 0 ? "auto" : r + "px"
						}
						if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
						var s = e.attr("style");
						if ("string" != typeof s) return null;
						for (var a = s.split(";"), o = 0, c = a.length; o < c; o += 1)
						{
							var l = a[o].replace(/\s/g, "").match(n);
							if (null !== l && 1 <= l.length) return l[1]
						}
						return null
					}, r.prototype._bindAdapters = function ()
					{
						this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
					}, r.prototype._registerDomEvents = function ()
					{
						var e = this;
						this.$element.on("change.select2", function ()
						{
							e.dataAdapter.current(function (t)
							{
								e.trigger("selection:update",
								{
									data: t
								})
							})
						}), this.$element.on("focus.select2", function (t)
						{
							e.trigger("focus", t)
						}), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
						var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
						null != t ? (this._observer = new t(function (t)
						{
							e._syncA(), e._syncS(null, t)
						}), this._observer.observe(this.$element[0],
						{
							attributes: !0,
							childList: !0,
							subtree: !1
						})) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
					}, r.prototype._registerDataEvents = function ()
					{
						var e = this;
						this.dataAdapter.on("*", function (t, n)
						{
							e.trigger(t, n)
						})
					}, r.prototype._registerSelectionEvents = function ()
					{
						var t = this,
							n = ["toggle", "focus"];
						this.selection.on("toggle", function ()
						{
							t.toggleDropdown()
						}), this.selection.on("focus", function (e)
						{
							t.focus(e)
						}), this.selection.on("*", function (i, r)
						{
							-1 === e.inArray(i, n) && t.trigger(i, r)
						})
					}, r.prototype._registerDropdownEvents = function ()
					{
						var e = this;
						this.dropdown.on("*", function (t, n)
						{
							e.trigger(t, n)
						})
					}, r.prototype._registerResultsEvents = function ()
					{
						var e = this;
						this.results.on("*", function (t, n)
						{
							e.trigger(t, n)
						})
					}, r.prototype._registerEvents = function ()
					{
						var e = this;
						this.on("open", function ()
						{
							e.$container.addClass("select2-container--open")
						}), this.on("close", function ()
						{
							e.$container.removeClass("select2-container--open")
						}), this.on("enable", function ()
						{
							e.$container.removeClass("select2-container--disabled")
						}), this.on("disable", function ()
						{
							e.$container.addClass("select2-container--disabled")
						}), this.on("blur", function ()
						{
							e.$container.removeClass("select2-container--focus")
						}), this.on("query", function (t)
						{
							e.isOpen() || e.trigger("open",
							{}), this.dataAdapter.query(t, function (n)
							{
								e.trigger("results:all",
								{
									data: n,
									query: t
								})
							})
						}), this.on("query:append", function (t)
						{
							this.dataAdapter.query(t, function (n)
							{
								e.trigger("results:append",
								{
									data: n,
									query: t
								})
							})
						}), this.on("keypress", function (t)
						{
							var n = t.which;
							e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select",
							{}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle",
							{}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous",
							{}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next",
							{}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
						})
					}, r.prototype._syncAttributes = function ()
					{
						this.options.set("disabled", this.$element.prop("disabled")), this.isDisabled() ? (this.isOpen() && this.close(), this.trigger("disable",
						{})) : this.trigger("enable",
						{})
					}, r.prototype._isChangeMutation = function (t, n)
					{
						var i = !1,
							r = this;
						if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName)
						{
							if (n)
								if (n.addedNodes && 0 < n.addedNodes.length)
									for (var s = 0; s < n.addedNodes.length; s++) n.addedNodes[s].selected && (i = !0);
								else n.removedNodes && 0 < n.removedNodes.length ? i = !0 : e.isArray(n) && e.each(n, function (e, t)
								{
									if (r._isChangeMutation(e, t)) return !(i = !0)
								});
							else i = !0;
							return i
						}
					}, r.prototype._syncSubtree = function (e, t)
					{
						var n = this;
						this._isChangeMutation(e, t) && this.dataAdapter.current(function (e)
						{
							n.trigger("selection:update",
							{
								data: e
							})
						})
					}, r.prototype.trigger = function (e, t)
					{
						var n = r.__super__.trigger,
							i = {
								open: "opening",
								close: "closing",
								select: "selecting",
								unselect: "unselecting",
								clear: "clearing"
							};
						if (void 0 === t && (t = {}), e in i)
						{
							var s = i[e],
								a = {
									prevented: !1,
									name: e,
									args: t
								};
							if (n.call(this, s, a), a.prevented) return void(t.prevented = !0)
						}
						n.call(this, e, t)
					}, r.prototype.toggleDropdown = function ()
					{
						this.isDisabled() || (this.isOpen() ? this.close() : this.open())
					}, r.prototype.open = function ()
					{
						this.isOpen() || this.isDisabled() || this.trigger("query",
						{})
					}, r.prototype.close = function (e)
					{
						this.isOpen() && this.trigger("close",
						{
							originalEvent: e
						})
					}, r.prototype.isEnabled = function ()
					{
						return !this.isDisabled()
					}, r.prototype.isDisabled = function ()
					{
						return this.options.get("disabled")
					}, r.prototype.isOpen = function ()
					{
						return this.$container.hasClass("select2-container--open")
					}, r.prototype.hasFocus = function ()
					{
						return this.$container.hasClass("select2-container--focus")
					}, r.prototype.focus = function (e)
					{
						this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus",
						{}))
					}, r.prototype.enable = function (e)
					{
						this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
						var t = !e[0];
						this.$element.prop("disabled", t)
					}, r.prototype.data = function ()
					{
						this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
						var e = [];
						return this.dataAdapter.current(function (t)
						{
							e = t
						}), e
					}, r.prototype.val = function (t)
					{
						if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
						var n = t[0];
						e.isArray(n) && (n = e.map(n, function (e)
						{
							return e.toString()
						})), this.$element.val(n).trigger("input").trigger("change")
					}, r.prototype.destroy = function ()
					{
						this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), n.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
					}, r.prototype.render = function ()
					{
						var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
						return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), n.StoreData(t[0], "element", this.$element), t
					}, r
				}), d.define("select2/compat/utils", ["jquery"], function (e)
				{
					return {
						syncCssClasses: function (t, n, i)
						{
							var r, s, a = [];
							(r = e.trim(t.attr("class"))) && e((r = "" + r).split(/\s+/)).each(function ()
							{
								0 === this.indexOf("select2-") && a.push(this)
							}), (r = e.trim(n.attr("class"))) && e((r = "" + r).split(/\s+/)).each(function ()
							{
								0 !== this.indexOf("select2-") && null != (s = i(this)) && a.push(s)
							}), t.attr("class", a.join(" "))
						}
					}
				}), d.define("select2/compat/containerCss", ["jquery", "./utils"], function (e, t)
				{
					function n(e)
					{
						return null
					}

					function i()
					{}
					return i.prototype.render = function (i)
					{
						var r = i.call(this),
							s = this.options.get("containerCssClass") || "";
						e.isFunction(s) && (s = s(this.$element));
						var a = this.options.get("adaptContainerCssClass");
						if (a = a || n, -1 !== s.indexOf(":all:"))
						{
							s = s.replace(":all:", "");
							var o = a;
							a = function (e)
							{
								var t = o(e);
								return null != t ? t + " " + e : e
							}
						}
						var c = this.options.get("containerCss") ||
						{};
						return e.isFunction(c) && (c = c(this.$element)), t.syncCssClasses(r, this.$element, a), r.css(c), r.addClass(s), r
					}, i
				}), d.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (e, t)
				{
					function n(e)
					{
						return null
					}

					function i()
					{}
					return i.prototype.render = function (i)
					{
						var r = i.call(this),
							s = this.options.get("dropdownCssClass") || "";
						e.isFunction(s) && (s = s(this.$element));
						var a = this.options.get("adaptDropdownCssClass");
						if (a = a || n, -1 !== s.indexOf(":all:"))
						{
							s = s.replace(":all:", "");
							var o = a;
							a = function (e)
							{
								var t = o(e);
								return null != t ? t + " " + e : e
							}
						}
						var c = this.options.get("dropdownCss") ||
						{};
						return e.isFunction(c) && (c = c(this.$element)), t.syncCssClasses(r, this.$element, a), r.css(c), r.addClass(s), r
					}, i
				}), d.define("select2/compat/initSelection", ["jquery"], function (e)
				{
					function t(e, t, n)
					{
						n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
					}
					return t.prototype.current = function (t, n)
					{
						var i = this;
						this._isInitialized ? t.call(this, n) : this.initSelection.call(null, this.$element, function (t)
						{
							i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)
						})
					}, t
				}), d.define("select2/compat/inputData", ["jquery", "../utils"], function (e, t)
				{
					function n(e, t, n)
					{
						this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
					}
					return n.prototype.current = function (t, n)
					{
						function i(t, n)
						{
							var r = [];
							return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, r.push(t)) : t.selected = !1, t.children && r.push.apply(r, i(t.children, n)), r
						}
						for (var r = [], s = 0; s < this._currentData.length; s++)
						{
							var a = this._currentData[s];
							r.push.apply(r, i(a, this.$element.val().split(this._valueSeparator)))
						}
						n(r)
					}, n.prototype.select = function (t, n)
					{
						if (this.options.get("multiple"))
						{
							var i = this.$element.val();
							i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("input").trigger("change")
						}
						else this.current(function (t)
						{
							e.map(t, function (e)
							{
								e.selected = !1
							})
						}), this.$element.val(n.id), this.$element.trigger("input").trigger("change")
					}, n.prototype.unselect = function (e, t)
					{
						var n = this;
						t.selected = !1, this.current(function (e)
						{
							for (var i = [], r = 0; r < e.length; r++)
							{
								var s = e[r];
								t.id != s.id && i.push(s.id)
							}
							n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("input").trigger("change")
						})
					}, n.prototype.query = function (e, t, n)
					{
						for (var i = [], r = 0; r < this._currentData.length; r++)
						{
							var s = this._currentData[r],
								a = this.matches(t, s);
							null !== a && i.push(a)
						}
						n(
						{
							results: i
						})
					}, n.prototype.addOptions = function (n, i)
					{
						var r = e.map(i, function (e)
						{
							return t.GetData(e[0], "data")
						});
						this._currentData.push.apply(this._currentData, r)
					}, n
				}), d.define("select2/compat/matcher", ["jquery"], function (e)
				{
					return function (t)
					{
						return function (n, i)
						{
							var r = e.extend(!0,
							{}, i);
							if (null == n.term || "" === e.trim(n.term)) return r;
							if (i.children)
							{
								for (var s = i.children.length - 1; 0 <= s; s--)
								{
									var a = i.children[s];
									t(n.term, a.text, a) || r.children.splice(s, 1)
								}
								if (0 < r.children.length) return r
							}
							return t(n.term, i.text, i) ? r : null
						}
					}
				}), d.define("select2/compat/query", [], function ()
				{
					function e(e, t, n)
					{
						n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
					}
					return e.prototype.query = function (e, t, n)
					{
						t.callback = n, this.options.get("query").call(null, t)
					}, e
				}), d.define("select2/dropdown/attachContainer", [], function ()
				{
					function e(e, t, n)
					{
						e.call(this, t, n)
					}
					return e.prototype.position = function (e, t, n)
					{
						n.find(".dropdown-wrapper").append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
					}, e
				}), d.define("select2/dropdown/stopPropagation", [], function ()
				{
					function e()
					{}
					return e.prototype.bind = function (e, t, n)
					{
						e.call(this, t, n), this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e)
						{
							e.stopPropagation()
						})
					}, e
				}), d.define("select2/selection/stopPropagation", [], function ()
				{
					function e()
					{}
					return e.prototype.bind = function (e, t, n)
					{
						e.call(this, t, n), this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), function (e)
						{
							e.stopPropagation()
						})
					}, e
				}), A = function (e)
				{
					function t(t)
					{
						var a, o = t || window.event,
							l = c.call(arguments, 1),
							d = 0,
							h = 0,
							p = 0,
							f = 0,
							m = 0;
						if ((t = e.event.fix(o)).type = "mousewheel", "detail" in o && (p = -1 * o.detail), "wheelDelta" in o && (p = o.wheelDelta), "wheelDeltaY" in o && (p = o.wheelDeltaY), "wheelDeltaX" in o && (h = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (h = -1 * p, p = 0), d = 0 === p ? h : p, "deltaY" in o && (d = p = -1 * o.deltaY), "deltaX" in o && (h = o.deltaX, 0 === p && (d = -1 * h)), 0 !== p || 0 !== h)
						{
							if (1 === o.deltaMode)
							{
								var g = e.data(this, "mousewheel-line-height");
								d *= g, p *= g, h *= g
							}
							else if (2 === o.deltaMode)
							{
								var v = e.data(this, "mousewheel-page-height");
								d *= v, p *= v, h *= v
							}
							if (a = Math.max(Math.abs(p), Math.abs(h)), (!s || a < s) && i(o, s = a) && (s /= 40), i(o, a) && (d /= 40, h /= 40, p /= 40), d = Math[1 <= d ? "floor" : "ceil"](d / s), h = Math[1 <= h ? "floor" : "ceil"](h / s), p = Math[1 <= p ? "floor" : "ceil"](p / s), u.settings.normalizeOffset && this.getBoundingClientRect)
							{
								var b = this.getBoundingClientRect();
								f = t.clientX - b.left, m = t.clientY - b.top
							}
							return t.deltaX = h, t.deltaY = p, t.deltaFactor = s, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, l.unshift(t, d, h, p), r && clearTimeout(r), r = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, l)
						}
					}

					function n()
					{
						s = null
					}

					function i(e, t)
					{
						return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
					}
					var r, s, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
						o = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
						c = Array.prototype.slice;
					if (e.event.fixHooks)
						for (var l = a.length; l;) e.event.fixHooks[a[--l]] = e.event.mouseHooks;
					var u = e.event.special.mousewheel = {
						version: "3.1.12",
						setup: function ()
						{
							if (this.addEventListener)
								for (var n = o.length; n;) this.addEventListener(o[--n], t, !1);
							else this.onmousewheel = t;
							e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
						},
						teardown: function ()
						{
							if (this.removeEventListener)
								for (var n = o.length; n;) this.removeEventListener(o[--n], t, !1);
							else this.onmousewheel = null;
							e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
						},
						getLineHeight: function (t)
						{
							var n = e(t),
								i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
							return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
						},
						getPageHeight: function (t)
						{
							return e(t).height()
						},
						settings:
						{
							adjustOldDeltas: !0,
							normalizeOffset: !0
						}
					};
					e.fn.extend(
					{
						mousewheel: function (e)
						{
							return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
						},
						unmousewheel: function (e)
						{
							return this.unbind("mousewheel", e)
						}
					})
				}, "function" == typeof d.define && d.define.amd ? d.define("jquery-mousewheel", ["jquery"], A) : "object" == a(t) ? e.exports = A : A(n), d.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function (e, t, n, i, r)
				{
					if (null == e.fn.select2)
					{
						var s = ["open", "close", "destroy"];
						e.fn.select2 = function (t)
						{
							if ("object" == a(t = t ||
								{})) return this.each(function ()
							{
								var i = e.extend(!0,
								{}, t);
								new n(e(this), i)
							}), this;
							if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
							var i, o = Array.prototype.slice.call(arguments, 1);
							return this.each(function ()
							{
								var e = r.GetData(this, "select2");
								null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = e[t].apply(e, o)
							}), -1 < e.inArray(t, s) ? this : i
						}
					}
					return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
				}),
				{
					define: d.define,
					require: d.require
				}
			}(),
			r = i.require("jquery.select2");
		return n.fn.select2.amd = i, r
	})
}, function (e, t) {}, function (e, t) {}, function (e, t) {}, function (e, t) {}, function (e, t)
{
	e.exports = '<div class="wrapper">\n    <div sp-header></div>\n\n    <section class="mitre-page" ng-controller="IndexController">\n        <div class="mitre-page__inner inner">\n            <div class="mitre-page__wrap">\n                <div class="mitre-page__row">\n                    <div class="mitre-page__col mitre-page__col--left">\n                        <ul class="fast-search-nav">\n                            <li class="fast-search-nav__item">\n                                <a class="fast-search-nav__link fast-search-nav__link--first" ng-class="{\'is-active\': fastSearch.selected == \'All\'}" ng-click="fastSearch.selected = \'All\'; refreshSearch();">All</a>\n                            </li>\n                            <li class="fast-search-nav__item" ng-repeat="(oneFilterName, oneFilter) in fastSearch.list">\n                                <a class="fast-search-nav__link" ng-class="{\'is-active\': fastSearch.selected == oneFilterName}" ng-click="fastSearch.selected = oneFilterName; refreshSearch();">{{ oneFilterName }}</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class="mitre-page__col mitre-page__col--right">\n                        <div class="search-box__row">\n                            <div class="search-box__control">\n                                <input autocomplete="off" class="search-box__input" name="search" ng-model="searchString" placeholder="Search .." type="text">\n                                                        </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="mitre-box">\n                    <div class="mitre-box__row">\n                        <div class="mitre-box__col mitre-box__col--tactics">\n                            <div class="tactics-box">\n                                <h4 class="tactics-box__title mitre-title">\n                                    Domain ({{ tacticsTechniquesMenu.length }})\n                                </h4>\n                                <div class="tactics-list-wrap">\n                                    <div class="tactics-list-wrap__item">\n                                        <a class="tactics-list-wrap__link" ng-click="oneTacticIsOpen = true">\n                                            {{ tacticsTechniquesMenu[selectedTactic].name }}\n                                            <span class="tactics-list-wrap__count">\n                                            {{ tacticsTechniquesMenu[selectedTactic].children.length || 0 }} tecnhigues\n                                        </span>\n                                        </a>\n                                        <div class="tactics-list-wrap__arrow" style="background-image: url(./assets/images/arrow-down-select.svg)"></div>\n                                    </div>\n                                    <div class="tactics-list-wrap__modal" ng-class="{\'is-open\':oneTacticIsOpen}">\n                                        <div class="tactics-list-wrap__modal-header">\n                                            <h4 class="tactics-list-wrap__modal-title">\n                                                CHOOSE TACTICS\n                                            </h4>\n                                            <button class="tactics-list-wrap__modal-close" ng-click="setOneTacticIsOpen(false);">\n                                                <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">\n                                                    <path clip-rule="evenodd" d="M2.56066 0.439339C1.97487 -0.146446 1.02513 -0.146446 0.439339 0.439339C-0.146446 1.02513 -0.146446 1.97487 0.439339 2.56066L6.87868 9L0.439358 15.4393C-0.146428 16.0251 -0.146428 16.9749 0.439358 17.5606C1.02514 18.1464 1.97489 18.1464 2.56068 17.5606L9 11.1213L15.4393 17.5606C16.0251 18.1464 16.9749 18.1464 17.5606 17.5606C18.1464 16.9749 18.1464 16.0251 17.5606 15.4393L11.1213 9L17.5607 2.56066C18.1464 1.97487 18.1464 1.02513 17.5607 0.439339C16.9749 -0.146446 16.0251 -0.146446 15.4393 0.439339L9 6.87868L2.56066 0.439339Z" fill="white" fill-rule="evenodd"/>\n                                                </svg>\n                                            </button>\n                                        </div>\n                                        <div class="tactics-list">\n                                            <div class="tactics-list__item" ng-repeat="(oneTacticId, oneTactic) in tacticsTechniquesMenu">\n                                                <a class="tactics-list__link" ng-class="{\'is-active\': oneTacticId == selectedTactic}" ng-click="switchCurrentTactic(oneTacticId); setOneTacticIsOpen(false);">\n                                                    {{ oneTactic.name }}\n                                                    <span class="tactics-list__count">{{ oneTactic.children.length || 0 }} techniques</span>\n                                                </a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="mitre-box__col mitre-box__col--technique">\n                            <div class="technique-box">\n                                <h4 class="technique-box__title mitre-title">\n                                    Skills  ({{ tacticsTechniquesMenu[selectedTactic].children.length || 0 }})\n                                </h4>\n                                <div class="technique-list">\n                                    <div class="technique-list__item" ng-repeat="(oneTechniqueId, oneTechnique) in tacticsTechniquesMenu[selectedTactic].children">\n                                        <a class="technique-list__link" ng-class="{\'is-active\': oneTechniqueId == selectedTechnique}" ng-click="oneTechniqueIsOpen = true; switchCurrentTechnique(oneTechniqueId); setOneTechniqueIsOpen(true);">\n                                            <h4 class="technique-list__title">{{ oneTechnique.name }}</h4>\n                                            <div class="list-count">\n                                                <div class="list-count__row">\n                                                    <div class="list-count__col">\n                                                        <div class="list-count__text">Rules</div>\n                                                        <div class="list-count__number">{{ oneTechnique.stat.rules }}</div>\n                                                    </div>\n                                                    <div class="list-count__col">\n                                                        <div class="list-count__text">Examples</div>\n                                                        <div class="list-count__number">{{ oneTechnique.stat.examples }}</div>\n                                                    </div>\n                                                    <div class="list-count__col">\n                                                        <div class="list-count__text">Subtechniques</div>\n                                                        <div class="list-count__number">{{ oneTechnique.stat.subtechnics }}</div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="mitre-box__col mitre-box__col--content" ng-class="{\'is-open\':oneTechniqueIsOpen}">\n             <h4 class="content-box__title" style="font-weight:600; font-size:14px"> TACTICS</h4>               <div class="content-box">\n                                <div class="back-btn">\n                                    <button class="back-btn__btn" ng-click="oneTechniqueIsOpen = false">\n                                        <span class="back-btn__icon"><svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M6.20711 0.770084C5.81658 0.364521 5.18342 0.364521 4.79289 0.770084L0.292893 5.44338C-0.0976315 5.84894 -0.0976315 6.50649 0.292893 6.91205L4.79289 11.5853C5.18342 11.9909 5.81658 11.9909 6.20711 11.5853C6.59763 11.1798 6.59763 10.5222 6.20711 10.1167L3.41421 7.21623H11C11.5523 7.21623 12 6.75127 12 6.17772C12 5.60416 11.5523 5.13921 11 5.13921H3.41421L6.20711 2.23876C6.59763 1.8332 6.59763 1.17565 6.20711 0.770084Z" fill="#EE3523" fill-rule="evenodd"/></svg></span>\n                                        <span class="back-btn__text">BACK</span>\n                                    </button>\n                                </div>\n                                <div curr-url="currUrl" sp-content-one-technique sub-technique-id="selectedSubTechnique" technique="tacticsTechniquesMenu[selectedTactic].children[selectedTechnique]"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                           </div>\n        </div>\n    </section>\n\n    <div sp-footer></div>\n</div>\n'
}, function (e, t)
{
	/**
	 * @license AngularJS v1.7.0
	 * (c) 2010-2018 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	! function (e, t)
	{
		"use strict";

		function n(e, t)
		{
			if (c(e))
			{
				t = t || [];
				for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
			}
			else if (l(e))
			{
				t = t ||
				{};
				for (var r in e) "$" === r.charAt(0) && "$" === r.charAt(1) || (t[r] = e[r])
			}
			return t || e
		}

		function i()
		{
			function e(e, n)
			{
				return t.extend(Object.create(e), n)
			}

			function i(e, t)
			{
				var n = t.caseInsensitiveMatch,
					i = {
						originalPath: e,
						regexp: e
					},
					r = i.keys = [];
				return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (e, t, n, i)
				{
					var s = "?" === i || "*?" === i ? "?" : null,
						a = "*" === i || "*?" === i ? "*" : null;
					return r.push(
					{
						name: n,
						optional: !!s
					}), t = t || "", (s ? "" : t) + "(?:" + (s ? t : "") + (a && "(.+?)" || "([^/]+)") + (s || "") + ")" + (s || "")
				}).replace(/([\/$*])/g, "\\$1"), i.regexp = new RegExp("^" + e + "$", n ? "i" : ""), i
			}
			c = t.isArray, l = t.isObject, u = t.isDefined, d = t.noop;
			var r = {};
			this.when = function (e, s)
			{
				var a = n(s);
				if (t.isUndefined(a.reloadOnSearch) && (a.reloadOnSearch = !0), t.isUndefined(a.caseInsensitiveMatch) && (a.caseInsensitiveMatch = this.caseInsensitiveMatch), r[e] = t.extend(a, e && i(e, a)), e)
				{
					var o = "/" === e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
					r[o] = t.extend(
					{
						redirectTo: e
					}, i(o, a))
				}
				return this
			}, this.caseInsensitiveMatch = !1, this.otherwise = function (e)
			{
				return "string" == typeof e && (e = {
					redirectTo: e
				}), this.when(null, e), this
			}, h = !0, this.eagerInstantiationEnabled = function (e)
			{
				return u(e) ? (h = e, this) : h
			}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", "$browser", function (n, i, s, a, o, c, l, u)
			{
				function h(e, t)
				{
					var n = t.keys,
						i = {};
					if (!t.regexp) return null;
					var r = t.regexp.exec(e);
					if (!r) return null;
					for (var s = 1, a = r.length; s < a; ++s)
					{
						var o = n[s - 1],
							c = r[s];
						o && c && (i[o.name] = c)
					}
					return i
				}

				function p(e)
				{
					var i = C.current;
					T = x(), (w = T && i && T.$$route === i.$$route && t.equals(T.pathParams, i.pathParams) && !T.reloadOnSearch && !_) || !i && !T || n.$broadcast("$routeChangeStart", T, i).defaultPrevented && e && e.preventDefault()
				}

				function m()
				{
					var e = C.current,
						i = T;
					if (w) e.params = i.params, t.copy(e.params, s), n.$broadcast("$routeUpdate", e);
					else if (i || e)
					{
						_ = !1, C.current = i;
						var r = a.resolve(i);
						u.$$incOutstandingRequestCount(), r.then(g).then(v).then(function (a)
						{
							return a && r.then(b).then(function (r)
							{
								i === C.current && (i && (i.locals = r, t.copy(i.params, s)), n.$broadcast("$routeChangeSuccess", i, e))
							})
						}).catch(function (t)
						{
							i === C.current && n.$broadcast("$routeChangeError", i, e, t)
						}).finally(function ()
						{
							u.$$completeOutstandingRequest(d)
						})
					}
				}

				function g(e)
				{
					var n = {
						route: e,
						hasRedirection: !1
					};
					if (e)
						if (e.redirectTo)
							if (t.isString(e.redirectTo)) n.path = y(e.redirectTo, e.params), n.search = e.params, n.hasRedirection = !0;
							else
							{
								var r = i.path(),
									s = i.search(),
									c = e.redirectTo(e.pathParams, r, s);
								t.isDefined(c) && (n.url = c, n.hasRedirection = !0)
							}
					else if (e.resolveRedirectTo) return a.resolve(o.invoke(e.resolveRedirectTo)).then(function (e)
					{
						return t.isDefined(e) && (n.url = e, n.hasRedirection = !0), n
					});
					return n
				}

				function v(e)
				{
					var t = !0;
					if (e.route !== C.current) t = !1;
					else if (e.hasRedirection)
					{
						var n = i.url(),
							r = e.url;
						r ? i.url(r).replace() : r = i.path(e.path).search(e.search).replace().url(), r !== n && (t = !1)
					}
					return t
				}

				function b(e)
				{
					if (e)
					{
						var n = t.extend(
						{}, e.resolve);
						t.forEach(n, function (e, i)
						{
							n[i] = t.isString(e) ? o.get(e) : o.invoke(e, null, null, i)
						});
						var i = $(e);
						return t.isDefined(i) && (n.$template = i), a.all(n)
					}
				}

				function $(e)
				{
					var n, i;
					return t.isDefined(n = e.template) ? t.isFunction(n) && (n = n(e.params)) : t.isDefined(i = e.templateUrl) && (t.isFunction(i) && (i = i(e.params)), t.isDefined(i) && (e.loadedTemplateUrl = l.valueOf(i), n = c(i))), n
				}

				function x()
				{
					var n, s;
					return t.forEach(r, function (r, a)
					{
						!s && (n = h(i.path(), r)) && (s = e(r,
						{
							params: t.extend(
							{}, i.search(), n),
							pathParams: n
						}), s.$$route = r)
					}), s || r[null] && e(r[null],
					{
						params:
						{},
						pathParams:
						{}
					})
				}

				function y(e, n)
				{
					var i = [];
					return t.forEach((e || "").split(":"), function (e, t)
					{
						if (0 === t) i.push(e);
						else
						{
							var r = e.match(/(\w+)(?:[?*])?(.*)/),
								s = r[1];
							i.push(n[s]), i.push(r[2] || ""), delete n[s]
						}
					}), i.join("")
				}
				var T, w, _ = !1,
					C = {
						routes: r,
						reload: function ()
						{
							_ = !0;
							var e = {
								defaultPrevented: !1,
								preventDefault: function ()
								{
									this.defaultPrevented = !0, _ = !1
								}
							};
							n.$evalAsync(function ()
							{
								p(e), e.defaultPrevented || m()
							})
						},
						updateParams: function (e)
						{
							if (!this.current || !this.current.$$route) throw f("norout", "Tried updating route with no current route");
							e = t.extend(
							{}, this.current.params, e), i.path(y(this.current.$$route.originalPath, e)), i.search(e)
						}
					};
				return n.$on("$locationChangeStart", p), n.$on("$locationChangeSuccess", m), C
			}]
		}

		function r(e)
		{
			h && e.get("$route")
		}

		function s()
		{
			this.$get = function ()
			{
				return {}
			}
		}

		function a(e, n, i)
		{
			return {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				link: function (r, s, a, o, c)
				{
					function l()
					{
						p && (i.cancel(p), p = null), d && (d.$destroy(), d = null), h && (p = i.leave(h), p.done(function (e)
						{
							!1 !== e && (p = null)
						}), h = null)
					}

					function u()
					{
						var a = e.current && e.current.locals,
							o = a && a.$template;
						if (t.isDefined(o))
						{
							var u = r.$new(),
								p = e.current,
								g = c(u, function (e)
								{
									i.enter(e, null, h || s).done(function (e)
									{
										!1 === e || !t.isDefined(f) || f && !r.$eval(f) || n()
									}), l()
								});
							h = g, d = p.scope = u, d.$emit("$viewContentLoaded"), d.$eval(m)
						}
						else l()
					}
					var d, h, p, f = a.autoscroll,
						m = a.onload || "";
					r.$on("$routeChangeSuccess", u), u()
				}
			}
		}

		function o(e, t, n)
		{
			return {
				restrict: "ECA",
				priority: -400,
				link: function (i, r)
				{
					var s = n.current,
						a = s.locals;
					r.html(a.$template);
					var o = e(r.contents());
					if (s.controller)
					{
						a.$scope = i;
						var c = t(s.controller, a);
						s.controllerAs && (i[s.controllerAs] = c), r.data("$ngControllerController", c), r.children().data("$ngControllerController", c)
					}
					i[s.resolveAs || "$resolve"] = a, o(i)
				}
			}
		}
		var c, l, u, d, h, p = t.module("ngRoute", []).info(
			{
				angularVersion: "1.7.0"
			}).provider("$route", i).run(r),
			f = t.$$minErr("ngRoute");
		r.$inject = ["$injector"], p.provider("$routeParams", s), p.directive("ngView", a), p.directive("ngView", o), a.$inject = ["$route", "$anchorScroll", "$animate"], o.$inject = ["$compile", "$controller", "$route"]
	}(window, window.angular)
}, function (e, t)
{
	/**
	 * @license AngularJS v1.7.9
	 * (c) 2010-2018 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	! function (e)
	{
		"use strict";

		function t(e)
		{
			if (!y(e)) return mr;
			x(e.objectMaxDepth) && (mr.objectMaxDepth = n(e.objectMaxDepth) ? e.objectMaxDepth : NaN), x(e.urlErrorParamsEnabled) && P(e.urlErrorParamsEnabled) && (mr.urlErrorParamsEnabled = e.urlErrorParamsEnabled)
		}

		function n(e)
		{
			return _(e) && e > 0
		}

		function i(e, t)
		{
			t = t || Error;
			var n = "https://errors.angularjs.org/1.7.9/",
				i = n.replace(".", "\\.") + "[\\s\\S]*",
				r = new RegExp(i, "g");
			return function ()
			{
				var i, s, a = arguments[0],
					o = arguments[1],
					c = "[" + (e ? e + ":" : "") + a + "] ",
					l = K(arguments, 2).map(function (e)
					{
						return _e(e, mr.objectMaxDepth)
					});
				if (c += o.replace(/\{\d+\}/g, function (e)
					{
						var t = +e.slice(1, -1);
						return t < l.length ? l[t].replace(r, "") : e
					}), c += "\n" + n + (e ? e + "/" : "") + a, mr.urlErrorParamsEnabled)
					for (s = 0, i = "?"; s < l.length; s++, i = "&") c += i + "p" + s + "=" + encodeURIComponent(l[s]);
				return new t(c)
			}
		}

		function r(e)
		{
			if (null == e || q(e)) return !1;
			if (S(e) || w(e) || hr && e instanceof hr) return !0;
			var t = "length" in Object(e) && e.length;
			return _(t) && (t >= 0 && t - 1 in e || "function" == typeof e.item)
		}

		function s(e, t, n)
		{
			var i, a;
			if (e)
				if (A(e))
					for (i in e) "prototype" !== i && "length" !== i && "name" !== i && e.hasOwnProperty(i) && t.call(n, e[i], i, e);
				else if (S(e) || r(e))
			{
				var o = "object" != typeof e;
				for (i = 0, a = e.length; i < a; i++)(o || i in e) && t.call(n, e[i], i, e)
			}
			else if (e.forEach && e.forEach !== s) e.forEach(t, n, e);
			else if (T(e))
				for (i in e) t.call(n, e[i], i, e);
			else if ("function" == typeof e.hasOwnProperty)
				for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
			else
				for (i in e) br.call(e, i) && t.call(n, e[i], i, e);
			return e
		}

		function a(e, t, n)
		{
			for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r]);
			return i
		}

		function o(e)
		{
			return function (t, n)
			{
				e(n, t)
			}
		}

		function c()
		{
			return ++Ar
		}

		function l(e, t)
		{
			t ? e.$$hashKey = t : delete e.$$hashKey
		}

		function u(e, t, n)
		{
			for (var i = e.$$hashKey, r = 0, s = t.length; r < s; ++r)
			{
				var a = t[r];
				if (y(a) || A(a))
					for (var o = Object.keys(a), c = 0, d = o.length; c < d; c++)
					{
						var h = o[c],
							p = a[h];
						n && y(p) ? C(p) ? e[h] = new Date(p.valueOf()) : k(p) ? e[h] = new RegExp(p) : p.nodeName ? e[h] = p.cloneNode(!0) : j(p) ? e[h] = p.clone() : "__proto__" !== h && (y(e[h]) || (e[h] = S(p) ? [] :
						{}), u(e[h], [p], !0)) : e[h] = p
					}
			}
			return l(e, i), e
		}

		function d(e)
		{
			return u(e, yr.call(arguments, 1), !1)
		}

		function h(e)
		{
			return u(e, yr.call(arguments, 1), !0)
		}

		function p(e)
		{
			return parseInt(e, 10)
		}

		function f(e, t)
		{
			return d(Object.create(e), t)
		}

		function m()
		{}

		function g(e)
		{
			return e
		}

		function v(e)
		{
			return function ()
			{
				return e
			}
		}

		function b(e)
		{
			return A(e.toString) && e.toString !== _r
		}

		function $(e)
		{
			return void 0 === e
		}

		function x(e)
		{
			return void 0 !== e
		}

		function y(e)
		{
			return null !== e && "object" == typeof e
		}

		function T(e)
		{
			return null !== e && "object" == typeof e && !Cr(e)
		}

		function w(e)
		{
			return "string" == typeof e
		}

		function _(e)
		{
			return "number" == typeof e
		}

		function C(e)
		{
			return "[object Date]" === _r.call(e)
		}

		function S(e)
		{
			return Array.isArray(e) || e instanceof Array
		}

		function E(e)
		{
			switch (_r.call(e))
			{
				case "[object Error]":
				case "[object Exception]":
				case "[object DOMException]":
					return !0;
				default:
					return e instanceof Error
			}
		}

		function A(e)
		{
			return "function" == typeof e
		}

		function k(e)
		{
			return "[object RegExp]" === _r.call(e)
		}

		function q(e)
		{
			return e && e.window === e
		}

		function O(e)
		{
			return e && e.$evalAsync && e.$watch
		}

		function M(e)
		{
			return "[object File]" === _r.call(e)
		}

		function D(e)
		{
			return "[object FormData]" === _r.call(e)
		}

		function R(e)
		{
			return "[object Blob]" === _r.call(e)
		}

		function P(e)
		{
			return "boolean" == typeof e
		}

		function I(e)
		{
			return e && A(e.then)
		}

		function L(e)
		{
			return e && _(e.length) && qr.test(_r.call(e))
		}

		function N(e)
		{
			return "[object ArrayBuffer]" === _r.call(e)
		}

		function j(e)
		{
			return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
		}

		function H(e)
		{
			var t, n = {},
				i = e.split(",");
			for (t = 0; t < i.length; t++) n[i[t]] = !0;
			return n
		}

		function V(e)
		{
			return $r(e.nodeName || e[0] && e[0].nodeName)
		}

		function U(e, t)
		{
			return -1 !== Array.prototype.indexOf.call(e, t)
		}

		function F(e, t)
		{
			var n = e.indexOf(t);
			return n >= 0 && e.splice(n, 1), n
		}

		function B(e, t, i)
		{
			function r(e, t, n)
			{
				if (--n < 0) return "...";
				var i, r = t.$$hashKey;
				if (S(e))
					for (var s = 0, o = e.length; s < o; s++) t.push(a(e[s], n));
				else if (T(e))
					for (i in e) t[i] = a(e[i], n);
				else if (e && "function" == typeof e.hasOwnProperty)
					for (i in e) e.hasOwnProperty(i) && (t[i] = a(e[i], n));
				else
					for (i in e) br.call(e, i) && (t[i] = a(e[i], n));
				return l(t, r), t
			}

			function a(e, t)
			{
				if (!y(e)) return e;
				var n = c.indexOf(e);
				if (-1 !== n) return u[n];
				if (q(e) || O(e)) throw Sr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
				var i = !1,
					s = o(e);
				return void 0 === s && (s = S(e) ? [] : Object.create(Cr(e)), i = !0), c.push(e), u.push(s), i ? r(e, s, t) : s
			}

			function o(e)
			{
				switch (_r.call(e))
				{
					case "[object Int8Array]":
					case "[object Int16Array]":
					case "[object Int32Array]":
					case "[object Float32Array]":
					case "[object Float64Array]":
					case "[object Uint8Array]":
					case "[object Uint8ClampedArray]":
					case "[object Uint16Array]":
					case "[object Uint32Array]":
						return new e.constructor(a(e.buffer), e.byteOffset, e.length);
					case "[object ArrayBuffer]":
						if (!e.slice)
						{
							var t = new ArrayBuffer(e.byteLength);
							return new Uint8Array(t).set(new Uint8Array(e)), t
						}
						return e.slice(0);
					case "[object Boolean]":
					case "[object Number]":
					case "[object String]":
					case "[object Date]":
						return new e.constructor(e.valueOf());
					case "[object RegExp]":
						var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
						return n.lastIndex = e.lastIndex, n;
					case "[object Blob]":
						return new e.constructor([e],
						{
							type: e.type
						})
				}
				if (A(e.cloneNode)) return e.cloneNode(!0)
			}
			var c = [],
				u = [];
			if (i = n(i) ? i : NaN, t)
			{
				if (L(t) || N(t)) throw Sr("cpta", "Can't copy! TypedArray destination cannot be mutated.");
				if (e === t) throw Sr("cpi", "Can't copy! Source and destination are identical.");
				return S(t) ? t.length = 0 : s(t, function (e, n)
				{
					"$$hashKey" !== n && delete t[n]
				}), c.push(e), u.push(t), r(e, t, i)
			}
			return a(e, i)
		}

		function z(e, t)
		{
			return e === t || e !== e && t !== t
		}

		function W(e, t)
		{
			if (e === t) return !0;
			if (null === e || null === t) return !1;
			if (e !== e && t !== t) return !0;
			var n, i, r, s = typeof e,
				a = typeof t;
			if (s === a && "object" === s)
			{
				if (!S(e))
				{
					if (C(e)) return !!C(t) && z(e.getTime(), t.getTime());
					if (k(e)) return !!k(t) && e.toString() === t.toString();
					if (O(e) || O(t) || q(e) || q(t) || S(t) || C(t) || k(t)) return !1;
					r = $e();
					for (i in e)
						if ("$" !== i.charAt(0) && !A(e[i]))
						{
							if (!W(e[i], t[i])) return !1;
							r[i] = !0
						}
					for (i in t)
						if (!(i in r) && "$" !== i.charAt(0) && x(t[i]) && !A(t[i])) return !1;
					return !0
				}
				if (!S(t)) return !1;
				if ((n = e.length) === t.length)
				{
					for (i = 0; i < n; i++)
						if (!W(e[i], t[i])) return !1;
					return !0
				}
			}
			return !1
		}

		function G(e, t, n)
		{
			return e.concat(yr.call(t, n))
		}

		function K(e, t)
		{
			return yr.call(e, t || 0)
		}

		function Z(e, t)
		{
			var n = arguments.length > 2 ? K(arguments, 2) : [];
			return !A(t) || t instanceof RegExp ? t : n.length ? function ()
			{
				return arguments.length ? t.apply(e, G(n, arguments, 0)) : t.apply(e, n)
			} : function ()
			{
				return arguments.length ? t.apply(e, arguments) : t.call(e)
			}
		}

		function Y(t, n)
		{
			var i = n;
			return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = void 0 : q(n) ? i = "$WINDOW" : n && e.document === n ? i = "$DOCUMENT" : O(n) && (i = "$SCOPE"), i
		}

		function J(e, t)
		{
			if (!$(e)) return _(t) || (t = t ? 2 : null), JSON.stringify(e, Y, t)
		}

		function X(e)
		{
			return w(e) ? JSON.parse(e) : e
		}

		function Q(e, t)
		{
			e = e.replace(Pr, "");
			var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
			return kr(n) ? t : n
		}

		function ee(e, t)
		{
			return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
		}

		function te(e, t, n)
		{
			n = n ? -1 : 1;
			var i = e.getTimezoneOffset();
			return ee(e, n * (Q(t, i) - i))
		}

		function ne(e)
		{
			e = hr(e).clone().empty();
			var t = hr("<div></div>").append(e).html();
			try
			{
				return e[0].nodeType === Vr ? $r(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (e, t)
				{
					return "<" + $r(t)
				})
			}
			catch (e)
			{
				return $r(t)
			}
		}

		function ie(e)
		{
			try
			{
				return decodeURIComponent(e)
			}
			catch (e)
			{}
		}

		function re(e)
		{
			var t = {};
			return s((e || "").split("&"), function (e)
			{
				var n, i, r;
				e && (i = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (i = e.substring(0, n), r = e.substring(n + 1)), i = ie(i), x(i) && (r = !x(r) || ie(r), br.call(t, i) ? S(t[i]) ? t[i].push(r) : t[i] = [t[i], r] : t[i] = r))
			}), t
		}

		function se(e)
		{
			var t = [];
			return s(e, function (e, n)
			{
				S(e) ? s(e, function (e)
				{
					t.push(oe(n, !0) + (!0 === e ? "" : "=" + oe(e, !0)))
				}) : t.push(oe(n, !0) + (!0 === e ? "" : "=" + oe(e, !0)))
			}), t.length ? t.join("&") : ""
		}

		function ae(e)
		{
			return oe(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
		}

		function oe(e, t)
		{
			return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
		}

		function ce(e, t)
		{
			var n, i, r = Ir.length;
			for (i = 0; i < r; ++i)
				if (n = Ir[i] + t, w(n = e.getAttribute(n))) return n;
			return null
		}

		function le(t, n)
		{
			var i, r, a = {};
			if (s(Ir, function (e)
				{
					var n = e + "app";
					!i && t.hasAttribute && t.hasAttribute(n) && (i = t, r = t.getAttribute(n))
				}), s(Ir, function (e)
				{
					var n, s = e + "app";
					!i && (n = t.querySelector("[" + s.replace(":", "\\:") + "]")) && (i = n, r = n.getAttribute(s))
				}), i)
			{
				if (!Lr) return void e.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
				a.strictDi = null !== ce(i, "strict-di"), n(i, r ? [r] : [], a)
			}
		}

		function ue(t, n, i)
		{
			y(i) || (i = {}), i = d(
			{
				strictDi: !1
			}, i);
			var r = function ()
				{
					if (t = hr(t), t.injector())
					{
						var r = t[0] === e.document ? "document" : ne(t);
						throw Sr("btstrpd", "App already bootstrapped with this element '{0}'", r.replace(/</, "<").replace(/>/, ">"))
					}
					n = n || [], n.unshift(["$provide", function (e)
					{
						e.value("$rootElement", t)
					}]), i.debugInfoEnabled && n.push(["$compileProvider", function (e)
					{
						e.debugInfoEnabled(!0)
					}]), n.unshift("ng");
					var s = ht(n, i.strictDi);
					return s.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (e, t, n, i)
					{
						e.$apply(function ()
						{
							t.data("$injector", i), n(t)(e)
						})
					}]), s
				},
				a = /^NG_ENABLE_DEBUG_INFO!/,
				o = /^NG_DEFER_BOOTSTRAP!/;
			if (e && a.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(a, "")), e && !o.test(e.name)) return r();
			e.name = e.name.replace(o, ""), Er.resumeBootstrap = function (e)
			{
				return s(e, function (e)
				{
					n.push(e)
				}), r()
			}, A(Er.resumeDeferredBootstrap) && Er.resumeDeferredBootstrap()
		}

		function de()
		{
			e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
		}

		function he(e)
		{
			var t = Er.element(e).injector();
			if (!t) throw Sr("test", "no injector found for element argument to getTestability");
			return t.get("$$testability")
		}

		function pe(e, t)
		{
			return t = t || "_", e.replace(Nr, function (e, n)
			{
				return (n ? t : "") + e.toLowerCase()
			})
		}

		function fe(e, t, n)
		{
			if (!e) throw Sr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
			return e
		}

		function me(e, t, n)
		{
			return n && S(e) && (e = e[e.length - 1]), fe(A(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
		}

		function ge(e, t)
		{
			if ("hasOwnProperty" === e) throw Sr("badname", "hasOwnProperty is not a valid {0} name", t)
		}

		function ve(e, t, n)
		{
			if (!t) return e;
			for (var i, r = t.split("."), s = e, a = r.length, o = 0; o < a; o++) i = r[o], e && (e = (s = e)[i]);
			return !n && A(e) ? Z(s, e) : e
		}

		function be(e)
		{
			for (var t, n = e[0], i = e[e.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)(t || e[r] !== n) && (t || (t = hr(yr.call(e, 0, r))), t.push(n));
			return t || e
		}

		function $e()
		{
			return Object.create(null)
		}

		function xe(e)
		{
			if (null == e) return "";
			switch (typeof e)
			{
				case "string":
					break;
				case "number":
					e = "" + e;
					break;
				default:
					e = !b(e) || S(e) || C(e) ? J(e) : e.toString()
			}
			return e
		}

		function ye(e)
		{
			function t(e, t, n)
			{
				return e[t] || (e[t] = n())
			}
			var n = i("$injector"),
				r = i("ng"),
				s = t(e, "angular", Object);
			return s.$$minErr = s.$$minErr || i, t(s, "module", function ()
			{
				var e = {};
				return function (i, s, a)
				{
					var o = {};
					return function (e, t)
					{
						if ("hasOwnProperty" === e) throw r("badname", "hasOwnProperty is not a valid {0} name", t)
					}(i, "module"), s && e.hasOwnProperty(i) && (e[i] = null), t(e, i, function ()
					{
						function e(e, t, n, i)
						{
							return i || (i = c),
								function ()
								{
									return i[n || "push"]([e, t, arguments]), h
								}
						}

						function t(e, t, n)
						{
							return n || (n = c),
								function (r, s)
								{
									return s && A(s) && (s.$$moduleName = i), n.push([e, t, arguments]), h
								}
						}
						if (!s) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", i);
						var c = [],
							l = [],
							u = [],
							d = e("$injector", "invoke", "push", l),
							h = {
								_invokeQueue: c,
								_configBlocks: l,
								_runBlocks: u,
								info: function (e)
								{
									if (x(e))
									{
										if (!y(e)) throw r("aobj", "Argument '{0}' must be an object", "value");
										return o = e, this
									}
									return o
								},
								requires: s,
								name: i,
								provider: t("$provide", "provider"),
								factory: t("$provide", "factory"),
								service: t("$provide", "service"),
								value: e("$provide", "value"),
								constant: e("$provide", "constant", "unshift"),
								decorator: t("$provide", "decorator", l),
								animation: t("$animateProvider", "register"),
								filter: t("$filterProvider", "register"),
								controller: t("$controllerProvider", "register"),
								directive: t("$compileProvider", "directive"),
								component: t("$compileProvider", "component"),
								config: d,
								run: function (e)
								{
									return u.push(e), this
								}
							};
						return a && d(a), h
					})
				}
			})
		}

		function Te(e, t)
		{
			if (S(e))
			{
				t = t || [];
				for (var n = 0, i = e.length; n < i; n++) t[n] = e[n]
			}
			else if (y(e))
			{
				t = t ||
				{};
				for (var r in e) "$" === r.charAt(0) && "$" === r.charAt(1) || (t[r] = e[r])
			}
			return t || e
		}

		function we(e, t)
		{
			var i = [];
			return n(t) && (e = Er.copy(e, null, t)), JSON.stringify(e, function (e, t)
			{
				if (t = Y(e, t), y(t))
				{
					if (i.indexOf(t) >= 0) return "...";
					i.push(t)
				}
				return t
			})
		}

		function _e(e, t)
		{
			return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : $(e) ? "undefined" : "string" != typeof e ? we(e, t) : e
		}

		function Ce()
		{
			return ++Gr
		}

		function Se(e)
		{
			return Ae(e.replace(Zr, "ms-"))
		}

		function Ee(e, t)
		{
			return t.toUpperCase()
		}

		function Ae(e)
		{
			return e.replace(Kr, Ee)
		}

		function ke(e)
		{
			return !Qr.test(e)
		}

		function qe(e)
		{
			var t = e.nodeType;
			return t === Hr || !t || t === Fr
		}

		function Oe(e)
		{
			for (var t in Wr[e.ng339]) return !0;
			return !1
		}

		function Me(e, t)
		{
			var n, i, r, a, o = t.createDocumentFragment(),
				c = [];
			if (ke(e)) c.push(t.createTextNode(e));
			else
			{
				for (n = o.appendChild(t.createElement("div")), i = (es.exec(e) || ["", ""])[1].toLowerCase(), r = ns[i] || ns._default, n.innerHTML = r[1] + e.replace(ts, "<$1></$2>") + r[2], a = r[0]; a--;) n = n.lastChild;
				c = G(c, n.childNodes), n = o.firstChild, n.textContent = ""
			}
			return o.textContent = "", o.innerHTML = "", s(c, function (e)
			{
				o.appendChild(e)
			}), o
		}

		function De(t, n)
		{
			n = n || e.document;
			var i;
			return (i = Xr.exec(t)) ? [n.createElement(i[1])] : (i = Me(t, n)) ? i.childNodes : []
		}

		function Re(e, t)
		{
			var n = e.parentNode;
			n && n.replaceChild(t, e), t.appendChild(e)
		}

		function Pe(e)
		{
			if (e instanceof Pe) return e;
			var t;
			if (w(e) && (e = Or(e), t = !0), !(this instanceof Pe))
			{
				if (t && "<" !== e.charAt(0)) throw Jr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
				return new Pe(e)
			}
			t ? Ge(this, De(e)) : A(e) ? Qe(e) : Ge(this, e)
		}

		function Ie(e)
		{
			return e.cloneNode(!0)
		}

		function Le(e, t)
		{
			!t && qe(e) && hr.cleanData([e]), e.querySelectorAll && hr.cleanData(e.querySelectorAll("*"))
		}

		function Ne(e)
		{
			var t;
			for (t in e) return !1;
			return !0
		}

		function je(e)
		{
			var t = e.ng339,
				n = t && Wr[t],
				i = n && n.events,
				r = n && n.data;
			r && !Ne(r) || i && !Ne(i) || (delete Wr[t], e.ng339 = void 0)
		}

		function He(e, t, n, i)
		{
			if (x(i)) throw Jr("offargs", "jqLite#off() does not support the `selector` argument");
			var r = Ue(e),
				a = r && r.events,
				o = r && r.handle;
			if (o)
			{
				if (t)
				{
					var c = function (t)
					{
						var i = a[t];
						x(n) && F(i || [], n), x(n) && i && i.length > 0 || (e.removeEventListener(t, o), delete a[t])
					};
					s(t.split(" "), function (e)
					{
						c(e), Yr[e] && c(Yr[e])
					})
				}
				else
					for (t in a) "$destroy" !== t && e.removeEventListener(t, o), delete a[t];
				je(e)
			}
		}

		function Ve(e, t)
		{
			var n = e.ng339,
				i = n && Wr[n];
			i && (t ? delete i.data[t] : i.data = {}, je(e))
		}

		function Ue(e, t)
		{
			var n = e.ng339,
				i = n && Wr[n];
			return t && !i && (e.ng339 = n = Ce(), i = Wr[n] = {
				events:
				{},
				data:
				{},
				handle: void 0
			}), i
		}

		function Fe(e, t, n)
		{
			if (qe(e))
			{
				var i, r = x(n),
					s = !r && t && !y(t),
					a = !t,
					o = Ue(e, !s),
					c = o && o.data;
				if (r) c[Ae(t)] = n;
				else
				{
					if (a) return c;
					if (s) return c && c[Ae(t)];
					for (i in t) c[Ae(i)] = t[i]
				}
			}
		}

		function Be(e, t)
		{
			return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
		}

		function ze(e, t)
		{
			if (t && e.setAttribute)
			{
				var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
					i = n;
				s(t.split(" "), function (e)
				{
					e = Or(e), i = i.replace(" " + e + " ", " ")
				}), i !== n && e.setAttribute("class", Or(i))
			}
		}

		function We(e, t)
		{
			if (t && e.setAttribute)
			{
				var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
					i = n;
				s(t.split(" "), function (e)
				{
					e = Or(e), -1 === i.indexOf(" " + e + " ") && (i += e + " ")
				}), i !== n && e.setAttribute("class", Or(i))
			}
		}

		function Ge(e, t)
		{
			if (t)
				if (t.nodeType) e[e.length++] = t;
				else
				{
					var n = t.length;
					if ("number" == typeof n && t.window !== t)
					{
						if (n)
							for (var i = 0; i < n; i++) e[e.length++] = t[i]
					}
					else e[e.length++] = t
				}
		}

		function Ke(e, t)
		{
			return Ze(e, "$" + (t || "ngController") + "Controller")
		}

		function Ze(e, t, n)
		{
			e.nodeType === Fr && (e = e.documentElement);
			for (var i = S(t) ? t : [t]; e;)
			{
				for (var r = 0, s = i.length; r < s; r++)
					if (x(n = hr.data(e, i[r]))) return n;
				e = e.parentNode || e.nodeType === Br && e.host
			}
		}

		function Ye(e)
		{
			for (Le(e, !0); e.firstChild;) e.removeChild(e.firstChild)
		}

		function Je(e, t)
		{
			t || Le(e);
			var n = e.parentNode;
			n && n.removeChild(e)
		}

		function Xe(t, n)
		{
			n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : hr(n).on("load", t)
		}

		function Qe(t)
		{
			function n()
			{
				e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t()
			}
			"complete" === e.document.readyState ? e.setTimeout(t) : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n))
		}

		function et(e, t)
		{
			var n = ss[t.toLowerCase()];
			return n && as[V(e)] && n
		}

		function tt(e)
		{
			return os[e]
		}

		function nt(e, t)
		{
			var n = function (n, i)
			{
				n.isDefaultPrevented = function ()
				{
					return n.defaultPrevented
				};
				var r = t[i || n.type],
					s = r ? r.length : 0;
				if (s)
				{
					if ($(n.immediatePropagationStopped))
					{
						var a = n.stopImmediatePropagation;
						n.stopImmediatePropagation = function ()
						{
							n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
						}
					}
					n.isImmediatePropagationStopped = function ()
					{
						return !0 === n.immediatePropagationStopped
					};
					var o = r.specialHandlerWrapper || it;
					s > 1 && (r = Te(r));
					for (var c = 0; c < s; c++) n.isImmediatePropagationStopped() || o(e, n, r[c])
				}
			};
			return n.elem = e, n
		}

		function it(e, t, n)
		{
			n.call(e, t)
		}

		function rt(e, t, n)
		{
			var i = t.relatedTarget;
			i && (i === e || is.call(e, i)) || n.call(e, t)
		}

		function st()
		{
			this.$get = function ()
			{
				return d(Pe,
				{
					hasClass: function (e, t)
					{
						return e.attr && (e = e[0]), Be(e, t)
					},
					addClass: function (e, t)
					{
						return e.attr && (e = e[0]), We(e, t)
					},
					removeClass: function (e, t)
					{
						return e.attr && (e = e[0]), ze(e, t)
					}
				})
			}
		}

		function at(e, t)
		{
			var n = e && e.$$hashKey;
			if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
			var i = typeof e;
			return n = "function" === i || "object" === i && null !== e ? e.$$hashKey = i + ":" + (t || c)() : i + ":" + e
		}

		function ot()
		{
			this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
		}

		function ct(e)
		{
			return Function.prototype.toString.call(e)
		}

		function lt(e)
		{
			var t = ct(e).replace(ms, "");
			return t.match(ds) || t.match(hs)
		}

		function ut(e)
		{
			var t = lt(e);
			return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
		}

		function dt(e, t, n)
		{
			var i, r, a;
			if ("function" == typeof e)
			{
				if (!(i = e.$inject))
				{
					if (i = [], e.length)
					{
						if (t) throw w(n) && n || (n = e.name || ut(e)), gs("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
						r = lt(e), s(r[1].split(ps), function (e)
						{
							e.replace(fs, function (e, t, n)
							{
								i.push(n)
							})
						})
					}
					e.$inject = i
				}
			}
			else S(e) ? (a = e.length - 1, me(e[a], "fn"), i = e.slice(0, a)) : me(e, "fn", !0);
			return i
		}

		function ht(e, t)
		{
			function n(e)
			{
				return function (t, n)
				{
					if (!y(t)) return e(t, n);
					s(t, o(e))
				}
			}

			function i(e, t)
			{
				if (ge(e, "service"), (A(t) || S(t)) && (t = T.instantiate(t)), !t.$get) throw gs("pget", "Provider '{0}' must define $get factory method.", e);
				return x[e + m] = t
			}

			function r(e, t)
			{
				return function ()
				{
					var n = E.invoke(t, this);
					if ($(n)) throw gs("undef", "Provider '{0}' must return a value from $get factory method.", e);
					return n
				}
			}

			function a(e, t, n)
			{
				return i(e,
				{
					$get: !1 !== n ? r(e, t) : t
				})
			}

			function c(e, t)
			{
				return a(e, ["$injector", function (e)
				{
					return e.instantiate(t)
				}])
			}

			function l(e, t)
			{
				return a(e, v(t), !1)
			}

			function u(e, t)
			{
				ge(e, "constant"), x[e] = t, _[e] = t
			}

			function d(e, t)
			{
				var n = T.get(e + m),
					i = n.$get;
				n.$get = function ()
				{
					var e = E.invoke(i, n);
					return E.invoke(t, null,
					{
						$delegate: e
					})
				}
			}

			function h(e)
			{
				fe($(e) || S(e), "modulesToLoad", "not an array");
				var t, n = [];
				return s(e, function (e)
				{
					function i(e)
					{
						var t, n;
						for (t = 0, n = e.length; t < n; t++)
						{
							var i = e[t],
								r = T.get(i[0]);
							r[i[1]].apply(r, i[2])
						}
					}
					if (!b.get(e))
					{
						b.set(e, !0);
						try
						{
							w(e) ? (t = fr(e), E.modules[e] = t, n = n.concat(h(t.requires)).concat(t._runBlocks), i(t._invokeQueue), i(t._configBlocks)) : A(e) ? n.push(T.invoke(e)) : S(e) ? n.push(T.invoke(e)) : me(e, "module")
						}
						catch (t)
						{
							throw S(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), gs("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
						}
					}
				}), n
			}

			function p(e, n)
			{
				function i(t, i)
				{
					if (e.hasOwnProperty(t))
					{
						if (e[t] === f) throw gs("cdep", "Circular dependency found: {0}", t + " <- " + g.join(" <- "));
						return e[t]
					}
					try
					{
						return g.unshift(t), e[t] = f, e[t] = n(t, i), e[t]
					}
					catch (n)
					{
						throw e[t] === f && delete e[t], n
					}
					finally
					{
						g.shift()
					}
				}

				function r(e, n, r)
				{
					for (var s = [], a = ht.$$annotate(e, t, r), o = 0, c = a.length; o < c; o++)
					{
						var l = a[o];
						if ("string" != typeof l) throw gs("itkn", "Incorrect injection token! Expected service name as string, got {0}", l);
						s.push(n && n.hasOwnProperty(l) ? n[l] : i(l, r))
					}
					return s
				}

				function s(e)
				{
					if (dr || "function" != typeof e) return !1;
					var t = e.$$ngIsClass;
					return P(t) || (t = e.$$ngIsClass = /^class\b/.test(ct(e))), t
				}

				function a(e, t, n, i)
				{
					"string" == typeof n && (i = n, n = null);
					var a = r(e, n, i);
					return S(e) && (e = e[e.length - 1]), s(e) ? (a.unshift(null), new(Function.prototype.bind.apply(e, a))) : e.apply(t, a)
				}

				function o(e, t, n)
				{
					var i = S(e) ? e[e.length - 1] : e,
						s = r(e, t, n);
					return s.unshift(null), new(Function.prototype.bind.apply(i, s))
				}
				return {
					invoke: a,
					instantiate: o,
					get: i,
					annotate: ht.$$annotate,
					has: function (t)
					{
						return x.hasOwnProperty(t + m) || e.hasOwnProperty(t)
					}
				}
			}
			t = !0 === t;
			var f = {},
				m = "Provider",
				g = [],
				b = new ls,
				x = {
					$provide:
					{
						provider: n(i),
						factory: n(a),
						service: n(c),
						value: n(l),
						constant: n(u),
						decorator: d
					}
				},
				T = x.$injector = p(x, function (e, t)
				{
					throw Er.isString(t) && g.push(t), gs("unpr", "Unknown provider: {0}", g.join(" <- "))
				}),
				_ = {},
				C = p(_, function (e, t)
				{
					var n = T.get(e + m, t);
					return E.invoke(n.$get, n, void 0, e)
				}),
				E = C;
			x["$injector" + m] = {
				$get: v(C)
			}, E.modules = T.modules = $e();
			var k = h(e);
			return E = C.get("$injector"), E.strictDi = t, s(k, function (e)
			{
				e && E.invoke(e)
			}), E.loadNewModules = function (e)
			{
				s(h(e), function (e)
				{
					e && E.invoke(e)
				})
			}, E
		}

		function pt()
		{
			var e = !0;
			this.disableAutoScrolling = function ()
			{
				e = !1
			}, this.$get = ["$window", "$location", "$rootScope", function (t, n, i)
			{
				function r(e)
				{
					var t = null;
					return Array.prototype.some.call(e, function (e)
					{
						if ("a" === V(e)) return t = e, !0
					}), t
				}

				function s()
				{
					var e = o.yOffset;
					if (A(e)) e = e();
					else if (j(e))
					{
						var n = e[0],
							i = t.getComputedStyle(n);
						e = "fixed" !== i.position ? 0 : n.getBoundingClientRect().bottom
					}
					else _(e) || (e = 0);
					return e
				}

				function a(e)
				{
					if (e)
					{
						e.scrollIntoView();
						var n = s();
						if (n)
						{
							var i = e.getBoundingClientRect().top;
							t.scrollBy(0, i - n)
						}
					}
					else t.scrollTo(0, 0)
				}

				function o(e)
				{
					e = w(e) ? e : _(e) ? e.toString() : n.hash();
					var t;
					e ? (t = c.getElementById(e)) ? a(t) : (t = r(c.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
				}
				var c = t.document;
				return e && i.$watch(function ()
				{
					return n.hash()
				}, function (e, t)
				{
					e === t && "" === e || Xe(function ()
					{
						i.$evalAsync(o)
					})
				}), o
			}]
		}

		function ft(e, t)
		{
			return e || t ? e ? t ? (S(e) && (e = e.join(" ")), S(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
		}

		function mt(e)
		{
			for (var t = 0; t < e.length; t++)
			{
				var n = e[t];
				if (n.nodeType === bs) return n
			}
		}

		function gt(e)
		{
			w(e) && (e = e.split(" "));
			var t = $e();
			return s(e, function (e)
			{
				e.length && (t[e] = !0)
			}), t
		}

		function vt(e)
		{
			return y(e) ? e :
			{}
		}

		function bt(e)
		{
			var t = e.indexOf("#");
			return -1 === t ? "" : e.substr(t)
		}

		function $t(e)
		{
			return e.replace(/#$/, "")
		}

		function xt(e, t, n, i, r)
		{
			function a()
			{
				T = null, c()
			}

			function o()
			{
				v = w(), v = $(v) ? null : v, W(v, S) && (v = S), S = v, b = v
			}

			function c()
			{
				var e = b;
				o(), x === l.url() && e === v || (x = l.url(), b = v, s(_, function (e)
				{
					e(l.url(), v)
				}))
			}
			var l = this,
				u = e.location,
				d = e.history,
				h = e.setTimeout,
				p = e.clearTimeout,
				f = {},
				g = r(n);
			l.isMock = !1, l.$$completeOutstandingRequest = g.completeTask, l.$$incOutstandingRequestCount = g.incTaskCount, l.notifyWhenNoOutstandingRequests = g.notifyWhenNoPendingTasks;
			var v, b, x = u.href,
				y = t.find("base"),
				T = null,
				w = i.history ? function ()
				{
					try
					{
						return d.state
					}
					catch (e)
					{}
				} : m;
			o(), l.url = function (t, n, r)
			{
				if ($(r) && (r = null), u !== e.location && (u = e.location), d !== e.history && (d = e.history), t)
				{
					var s = b === r;
					if (t = Jn(t).href, x === t && (!i.history || s)) return l;
					var a = x && sn(x) === sn(t);
					return x = t, b = r, !i.history || a && s ? (a || (T = t), n ? u.replace(t) : a ? u.hash = bt(t) : u.href = t, u.href !== t && (T = t)) : (d[n ? "replaceState" : "pushState"](r, "", t), o()), T && (T = t), l
				}
				return $t(T || u.href)
			}, l.state = function ()
			{
				return v
			};
			var _ = [],
				C = !1,
				S = null;
			l.onUrlChange = function (t)
			{
				return C || (i.history && hr(e).on("popstate", a), hr(e).on("hashchange", a), C = !0), _.push(t), t
			}, l.$$applicationDestroyed = function ()
			{
				hr(e).off("hashchange popstate", a)
			}, l.$$checkUrlChange = c, l.baseHref = function ()
			{
				var e = y.attr("href");
				return e ? e.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
			}, l.defer = function (e, t, n)
			{
				var i;
				return t = t || 0, n = n || g.DEFAULT_TASK_TYPE, g.incTaskCount(n), i = h(function ()
				{
					delete f[i], g.completeTask(e, n)
				}, t), f[i] = n, i
			}, l.defer.cancel = function (e)
			{
				if (f.hasOwnProperty(e))
				{
					var t = f[e];
					return delete f[e], p(e), g.completeTask(m, t), !0
				}
				return !1
			}
		}

		function yt()
		{
			this.$get = ["$window", "$log", "$sniffer", "$document", "$$taskTrackerFactory", function (e, t, n, i, r)
			{
				return new xt(e, i, t, n, r)
			}]
		}

		function Tt()
		{
			this.$get = function ()
			{
				function e(e, n)
				{
					function r(e)
					{
						e !== h && (p ? p === e && (p = e.n) : p = e, s(e.n, e.p), s(e, h), h = e, h.n = null)
					}

					function s(e, t)
					{
						e !== t && (e && (e.p = t), t && (t.n = e))
					}
					if (e in t) throw i("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
					var a = 0,
						o = d(
						{}, n,
						{
							id: e
						}),
						c = $e(),
						l = n && n.capacity || Number.MAX_VALUE,
						u = $e(),
						h = null,
						p = null;
					return t[e] = {
						put: function (e, t)
						{
							if (!$(t))
							{
								if (l < Number.MAX_VALUE)
								{
									r(u[e] || (u[e] = {
										key: e
									}))
								}
								return e in c || a++, c[e] = t, a > l && this.remove(p.key), t
							}
						},
						get: function (e)
						{
							if (l < Number.MAX_VALUE)
							{
								var t = u[e];
								if (!t) return;
								r(t)
							}
							return c[e]
						},
						remove: function (e)
						{
							if (l < Number.MAX_VALUE)
							{
								var t = u[e];
								if (!t) return;
								t === h && (h = t.p), t === p && (p = t.n), s(t.n, t.p), delete u[e]
							}
							e in c && (delete c[e], a--)
						},
						removeAll: function ()
						{
							c = $e(), a = 0, u = $e(), h = p = null
						},
						destroy: function ()
						{
							c = null, o = null, u = null, delete t[e]
						},
						info: function ()
						{
							return d(
							{}, o,
							{
								size: a
							})
						}
					}
				}
				var t = {};
				return e.info = function ()
				{
					var e = {};
					return s(t, function (t, n)
					{
						e[n] = t.info()
					}), e
				}, e.get = function (e)
				{
					return t[e]
				}, e
			}
		}

		function wt()
		{
			this.$get = ["$cacheFactory", function (e)
			{
				return e("templates")
			}]
		}

		function _t()
		{}

		function Ct(t, n)
		{
			function i(e, t, n)
			{
				var i = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,
					r = $e();
				return s(e, function (e, s)
				{
					if ((e = e.trim()) in k) return void(r[s] = k[e]);
					var a = e.match(i);
					if (!a) throw Cs("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, s, e, n ? "controller bindings definition" : "isolate scope definition");
					r[s] = {
						mode: a[1][0],
						collection: "*" === a[2],
						optional: "?" === a[3],
						attrName: a[4] || s
					}, a[4] && (k[e] = r[s])
				}), r
			}

			function r(e, t)
			{
				var n = {
					isolateScope: null,
					bindToController: null
				};
				if (y(e.scope) && (!0 === e.bindToController ? (n.bindToController = i(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = i(e.scope, t, !1)), y(e.bindToController) && (n.bindToController = i(e.bindToController, t, !0)), n.bindToController && !e.controller) throw Cs("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
				return n
			}

			function a(e)
			{
				var t = e.charAt(0);
				if (!t || t !== $r(t)) throw Cs("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
				if (e !== e.trim()) throw Cs("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
			}

			function c(e)
			{
				var t = e.require || e.controller && e.name;
				return !S(t) && y(t) && s(t, function (e, n)
				{
					var i = e.match(_);
					e.substring(i[0].length) || (t[n] = i[0] + n)
				}), t
			}

			function l(e, t)
			{
				if (e && (!w(e) || !/[EACM]/.test(e))) throw Cs("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
				return e || "EA"
			}
			var u = {},
				h = "Directive",
				p = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
				b = /(([\w-]+)(?::([^;]+))?;?)/,
				T = H("ngSrc,ngSrcset,src,srcset"),
				_ = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
				C = /^(on[a-z]+|formaction)$/,
				k = $e();
			this.directive = function e(n, i)
			{
				return fe(n, "name"), ge(n, "directive"), w(n) ? (a(n), fe(i, "directiveFactory"), u.hasOwnProperty(n) || (u[n] = [], t.factory(n + h, ["$injector", "$exceptionHandler", function (e, t)
				{
					var i = [];
					return s(u[n], function (r, s)
					{
						try
						{
							var a = e.invoke(r);
							A(a) ? a = {
								compile: v(a)
							} : !a.compile && a.link && (a.compile = v(a.link)), a.priority = a.priority || 0, a.index = s, a.name = a.name || n, a.require = c(a), a.restrict = l(a.restrict, n), a.$$moduleName = r.$$moduleName, i.push(a)
						}
						catch (e)
						{
							t(e)
						}
					}), i
				}])), u[n].push(i)) : s(n, o(e)), this
			}, this.component = function e(t, n)
			{
				function i(e)
				{
					function t(t)
					{
						return A(t) || S(t) ? function (n, i)
						{
							return e.invoke(t, this,
							{
								$element: n,
								$attrs: i
							})
						} : t
					}
					var i = n.template || n.templateUrl ? n.template : "",
						a = {
							controller: r,
							controllerAs: qt(n.controller) || n.controllerAs || "$ctrl",
							template: t(i),
							templateUrl: t(n.templateUrl),
							transclude: n.transclude,
							scope:
							{},
							bindToController: n.bindings ||
							{},
							restrict: "E",
							require: n.require
						};
					return s(n, function (e, t)
					{
						"$" === t.charAt(0) && (a[t] = e)
					}), a
				}
				if (!w(t)) return s(t, o(Z(this, e))), this;
				var r = n.controller || function () {};
				return s(n, function (e, t)
				{
					"$" === t.charAt(0) && (i[t] = e, A(r) && (r[t] = e))
				}), i.$inject = ["$injector"], this.directive(t, i)
			}, this.aHrefSanitizationWhitelist = function (e)
			{
				return x(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
			}, this.imgSrcSanitizationWhitelist = function (e)
			{
				return x(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
			};
			var q = !0;
			this.debugInfoEnabled = function (e)
			{
				return x(e) ? (q = e, this) : q
			};
			var M = !1;
			this.strictComponentBindingsEnabled = function (e)
			{
				return x(e) ? (M = e, this) : M
			};
			var D = 10;
			this.onChangesTtl = function (e)
			{
				return arguments.length ? (D = e, this) : D
			};
			var R = !0;
			this.commentDirectivesEnabled = function (e)
			{
				return arguments.length ? (R = e, this) : R
			};
			var I = !0;
			this.cssClassDirectivesEnabled = function (e)
			{
				return arguments.length ? (I = e, this) : I
			};
			var L = $e();
			this.addPropertySecurityContext = function (e, t, n)
				{
					var i = e.toLowerCase() + "|" + t.toLowerCase();
					if (i in L && L[i] !== n) throw Cs("ctxoverride", "Property context '{0}.{1}' already set to '{2}', cannot override to '{3}'.", e, t, L[i], n);
					return L[i] = n, this
				},
				function ()
				{
					function e(e, t)
					{
						s(t, function (t)
						{
							L[t.toLowerCase()] = e
						})
					}
					e(na.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), e(na.CSS, ["*|style"]), e(na.URL, ["area|href", "area|ping", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "input|src", "ins|cite", "q|cite"]), e(na.MEDIA_URL, ["audio|src", "img|src", "img|srcset", "source|src", "source|srcset", "track|src", "video|src", "video|poster"]), e(na.RESOURCE_URL, ["*|formAction", "applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "form|action", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])
				}(), this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function (t, n, i, a, o, c, l, v, x)
				{
					function k()
					{
						try
						{
							if (!--Ne) throw Me = void 0, Cs("infchng", "{0} $onChanges() iterations reached. Aborting!\n", D);
							l.$apply(function ()
							{
								for (var e = 0, t = Me.length; e < t; ++e) try
								{
									Me[e]()
								}
								catch (e)
								{
									i(e)
								}
								Me = void 0
							})
						}
						finally
						{
							Ne++
						}
					}

					function N(e, t)
					{
						if (!e) return e;
						if (!w(e)) throw Cs("srcset", 'Can\'t pass trusted values to `{0}`: "{1}"', t, e.toString());
						for (var n = "", i = Or(e), r = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, s = /\s/.test(i) ? r : /(,)/, a = i.split(s), o = Math.floor(a.length / 2), c = 0; c < o; c++)
						{
							var l = 2 * c;
							n += v.getTrustedMediaUrl(Or(a[l])), n += " " + Or(a[l + 1])
						}
						var u = Or(a[2 * c]).split(/\s/);
						return n += v.getTrustedMediaUrl(Or(u[0])), 2 === u.length && (n += " " + Or(u[1])), n
					}

					function j(e, t)
					{
						if (t)
						{
							var n, i, r, s = Object.keys(t);
							for (n = 0, i = s.length; n < i; n++) r = s[n], this[r] = t[r]
						}
						else this.$attr = {};
						this.$$element = e
					}

					function H(e, t, n)
					{
						Re.innerHTML = "<span " + t + ">";
						var i = Re.firstChild.attributes,
							r = i[0];
						i.removeNamedItem(r.name), r.value = n, e.attributes.setNamedItem(r)
					}

					function U(e, t)
					{
						try
						{
							e.addClass(t)
						}
						catch (e)
						{}
					}

					function B(e, t, n, i, r)
					{
						e instanceof hr || (e = hr(e));
						var s = Y(e, t, e, n, i, r);
						B.$$addScopeClass(e);
						var a = null;
						return function (t, n, i)
						{
							if (!e) throw Cs("multilink", "This element has already been linked.");
							fe(t, "scope"), r && r.needsNewScope && (t = t.$parent.$new()), i = i ||
							{};
							var o = i.parentBoundTranscludeFn,
								c = i.transcludeControllers,
								l = i.futureParentElement;
							o && o.$$boundTransclude && (o = o.$$boundTransclude), a || (a = G(l));
							var u;
							if (u = "html" !== a ? hr(be(a, hr("<div></div>").append(e).html())) : n ? rs.clone.call(e) : e, c)
								for (var d in c) u.data("$" + d + "Controller", c[d].instance);
							return B.$$addScopeInfo(u, t), n && n(u, t), s && s(t, u, u, o), n || (e = s = null), u
						}
					}

					function G(e)
					{
						var t = e && e[0];
						return t && "foreignobject" !== V(t) && _r.call(t).match(/SVG/) ? "svg" : "html"
					}

					function Y(e, t, n, i, r, s)
					{
						function a(e, n, i, r)
						{
							var s, a, o, c, l, u, d, h, m;
							if (p)
							{
								var g = n.length;
								for (m = new Array(g), l = 0; l < f.length; l += 3) d = f[l], m[d] = n[d]
							}
							else m = n;
							for (l = 0, u = f.length; l < u;) o = m[f[l++]], s = f[l++], a = f[l++], s ? (s.scope ? (c = e.$new(), B.$$addScopeInfo(hr(o), c)) : c = e, h = s.transcludeOnThisElement ? X(e, s.transclude, r) : !s.templateOnThisElement && r ? r : !r && t ? X(e, t) : null, s(a, c, o, i, h)) : a && a(e, o.childNodes, void 0, r)
						}
						for (var o, c, l, u, d, h, p, f = [], m = S(e) || e instanceof hr, g = 0; g < e.length; g++) o = new j, 11 === dr && J(e, g, m), c = Q(e[g], [], o, 0 === g ? i : void 0, r), l = c.length ? se(c, e[g], o, t, n, null, [], [], s) : null, l && l.scope && B.$$addScopeClass(o.$$element), d = l && l.terminal || !(u = e[g].childNodes) || !u.length ? null : Y(u, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : t), (l || d) && (f.push(g, l, d), h = !0, p = p || l), s = null;
						return h ? a : null
					}

					function J(e, t, n)
					{
						var i, r = e[t],
							s = r.parentNode;
						if (r.nodeType === Vr)
							for (;;)
							{
								if (!(i = s ? r.nextSibling : e[t + 1]) || i.nodeType !== Vr) break;
								r.nodeValue = r.nodeValue + i.nodeValue, i.parentNode && i.parentNode.removeChild(i), n && i === e[t + 1] && e.splice(t + 1, 1)
							}
					}

					function X(e, t, n)
					{
						function i(i, r, s, a, o)
						{
							return i || (i = e.$new(!1, o), i.$$transcluded = !0), t(i, r,
							{
								parentBoundTranscludeFn: n,
								transcludeControllers: s,
								futureParentElement: a
							})
						}
						var r = i.$$slots = $e();
						for (var s in t.$$slots) t.$$slots[s] ? r[s] = X(e, t.$$slots[s], n) : r[s] = null;
						return i
					}

					function Q(e, t, n, i, r)
					{
						var s, a, o, c = e.nodeType,
							l = n.$attr;
						switch (c)
						{
							case Hr:
								a = V(e), le(t, Et(a), "E", i, r);
								for (var u, d, h, p, f, m = e.attributes, g = 0, v = m && m.length; g < v; g++)
								{
									var $, x = !1,
										T = !1,
										_ = !1,
										C = !1,
										S = !1;
									u = m[g], d = u.name, p = u.value, h = Et(d.toLowerCase()), (f = h.match(Ue)) ? (_ = "Attr" === f[1], C = "Prop" === f[1], S = "On" === f[1], d = d.replace(Es, "").toLowerCase().substr(4 + f[1].length).replace(/_(.)/g, function (e, t)
									{
										return t.toUpperCase()
									})) : ($ = h.match(Fe)) && ue($[1]) && (x = d, T = d.substr(0, d.length - 5) + "end", d = d.substr(0, d.length - 6)), C || S ? (n[h] = p, l[h] = u.name, C ? we(e, t, h, d) : _e(t, h, d)) : (h = Et(d.toLowerCase()), l[h] = d, !_ && n.hasOwnProperty(h) || (n[h] = p, et(e, h) && (n[h] = !0)), Ce(e, t, p, h, _), le(t, h, "A", i, r, x, T))
								}
								if ("input" === a && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !Le) break;
								if (o = e.className, y(o) && (o = o.animVal), w(o) && "" !== o)
									for (; s = b.exec(o);) h = Et(s[2]), le(t, h, "C", i, r) && (n[h] = Or(s[3])), o = o.substr(s.index + s[0].length);
								break;
							case Vr:
								ve(t, e.nodeValue);
								break;
							case Ur:
								if (!Pe) break;
								ee(e, t, n, i, r)
						}
						return t.sort(me), t
					}

					function ee(e, t, n, i, r)
					{
						try
						{
							var s = p.exec(e.nodeValue);
							if (s)
							{
								var a = Et(s[1]);
								le(t, a, "M", i, r) && (n[a] = Or(s[2]))
							}
						}
						catch (e)
						{}
					}

					function te(e, t, n)
					{
						var i = [],
							r = 0;
						if (t && e.hasAttribute && e.hasAttribute(t))
							do {
								if (!e) throw Cs("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
								e.nodeType === Hr && (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--), i.push(e), e = e.nextSibling
							} while (r > 0);
						else i.push(e);
						return hr(i)
					}

					function ie(e, t, n)
					{
						return function (i, r, s, a, o)
						{
							return r = te(r[0], t, n), e(i, r, s, a, o)
						}
					}

					function re(e, t, n, i, r, s)
					{
						var a;
						return e ? B(t, n, i, r, s) : function ()
						{
							return a || (a = B(t, n, i, r, s), t = n = s = null), a.apply(this, arguments)
						}
					}

					function se(t, n, r, a, o, c, l, u, h)
					{
						function p(e, t, n, i)
						{
							e && (n && (e = ie(e, n, i)), e.require = m.require, e.directiveName = g, (C === m || m.$$isolateScope) && (e = Ee(e,
							{
								isolateScope: !0
							})), l.push(e)), t && (n && (t = ie(t, n, i)), t.require = m.require, t.directiveName = g, (C === m || m.$$isolateScope) && (t = Ee(t,
							{
								isolateScope: !0
							})), u.push(t))
						}

						function f(e, t, a, o, c)
						{
							function h(e, t, n, i)
							{
								var r;
								if (O(e) || (i = n, n = t, t = e, e = void 0), D && (r = b), n || (n = D ? T.parent() : T), !i) return c(e, t, r, n, L);
								var s = c.$$slots[i];
								if (s) return s(e, t, r, n, L);
								if ($(s)) throw Cs("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', i, ne(T))
							}
							var p, f, m, g, v, b, x, T, k, q;
							n === a ? (k = r, T = r.$$element) : (T = hr(a), k = new j(T, r)), v = t, C ? g = t.$new(!0) : w && (v = t.$parent), c && (x = h, x.$$boundTransclude = c, x.isSlotFilled = function (e)
							{
								return !!c.$$slots[e]
							}), _ && (b = oe(T, k, x, _, g, t, C)), C && (B.$$addScopeInfo(T, g, !0, !(E && (E === C || E === C.$$originalDirective))), B.$$addScopeClass(T, !0), g.$$isolateBindings = C.$$isolateBindings, q = Oe(t, k, g, g.$$isolateBindings, C), q.removeWatches && g.$on("$destroy", q.removeWatches));
							for (var M in b)
							{
								var R = _[M],
									P = b[M],
									I = R.$$bindings.bindToController;
								P.instance = P(), T.data("$" + R.name + "Controller", P.instance), P.bindingInfo = Oe(v, k, P.instance, I, R)
							}
							for (s(_, function (e, t)
								{
									var n = e.require;
									e.bindToController && !S(n) && y(n) && d(b[t].instance, ae(t, n, T, b))
								}), s(b, function (e)
								{
									var t = e.instance;
									if (A(t.$onChanges)) try
									{
										t.$onChanges(e.bindingInfo.initialChanges)
									}
									catch (e)
									{
										i(e)
									}
									if (A(t.$onInit)) try
									{
										t.$onInit()
									}
									catch (e)
									{
										i(e)
									}
									A(t.$doCheck) && (v.$watch(function ()
									{
										t.$doCheck()
									}), t.$doCheck()), A(t.$onDestroy) && v.$on("$destroy", function ()
									{
										t.$onDestroy()
									})
								}), p = 0, f = l.length; p < f; p++) m = l[p], Ae(m, m.isolateScope ? g : t, T, k, m.require && ae(m.directiveName, m.require, T, b), x);
							var L = t;
							for (C && (C.template || null === C.templateUrl) && (L = g), e && e(L, a.childNodes, void 0, c), p = u.length - 1; p >= 0; p--) m = u[p], Ae(m, m.isolateScope ? g : t, T, k, m.require && ae(m.directiveName, m.require, T, b), x);
							s(b, function (e)
							{
								var t = e.instance;
								A(t.$postLink) && t.$postLink()
							})
						}
						h = h ||
						{};
						for (var m, g, v, b, x, T = -Number.MAX_VALUE, w = h.newScopeDirective, _ = h.controllerDirectives, C = h.newIsolateScopeDirective, E = h.templateDirective, k = h.nonTlbTranscludeDirective, q = !1, M = !1, D = h.hasElementTranscludeDirective, R = r.$$element = hr(n), P = c, I = a, L = !1, N = !1, H = 0, U = t.length; H < U; H++)
						{
							m = t[H];
							var F = m.$$start,
								z = m.$$end;
							if (F && (R = te(n, F, z)), v = void 0, T > m.priority) break;
							if (x = m.scope, x && (m.templateUrl || (y(x) ? (ge("new/isolated scope", C || w, m, R), C = m) : ge("new/isolated scope", C, m, R)), w = w || m), g = m.name, !L && (m.replace && (m.templateUrl || m.template) || m.transclude && !m.$$tlb))
							{
								for (var W, G = H + 1; W = t[G++];)
									if (W.transclude && !W.$$tlb || W.replace && (W.templateUrl || W.template))
									{
										N = !0;
										break
									}
								L = !0
							}
							if (!m.templateUrl && m.controller && (_ = _ || $e(), ge("'" + g + "' controller", _[g], m, R), _[g] = m), x = m.transclude)
								if (q = !0, m.$$tlb || (ge("transclusion", k, m, R), k = m), "element" === x) D = !0, T = m.priority, v = R, R = r.$$element = hr(B.$$createComment(g, r[g])), n = R[0], Se(o, K(v), n), I = re(N, v, a, T, P && P.name,
								{
									nonTlbTranscludeDirective: k
								});
								else
								{
									var Y = $e();
									if (y(x))
									{
										v = e.document.createDocumentFragment();
										var J = $e(),
											X = $e();
										s(x, function (e, t)
										{
											var n = "?" === e.charAt(0);
											e = n ? e.substring(1) : e, J[e] = t, Y[t] = null, X[t] = n
										}), s(R.contents(), function (t)
										{
											var n = J[Et(V(t))];
											n ? (X[n] = !0, Y[n] = Y[n] || e.document.createDocumentFragment(), Y[n].appendChild(t)) : v.appendChild(t)
										}), s(X, function (e, t)
										{
											if (!e) throw Cs("reqslot", "Required transclusion slot `{0}` was not filled.", t)
										});
										for (var ee in Y)
											if (Y[ee])
											{
												var se = hr(Y[ee].childNodes);
												Y[ee] = re(N, se, a)
											}
										v = hr(v.childNodes)
									}
									else v = hr(Ie(n)).contents();
									R.empty(), I = re(N, v, a, void 0, void 0,
									{
										needsNewScope: m.$$isolateScope || m.$$newScope
									}), I.$$slots = Y
								}
							if (m.template)
								if (M = !0, ge("template", E, m, R), E = m, x = A(m.template) ? m.template(R, r) : m.template, x = Ve(x), m.replace)
								{
									if (P = m, v = ke(x) ? [] : kt(be(m.templateNamespace, Or(x))), n = v[0], 1 !== v.length || n.nodeType !== Hr) throw Cs("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g, "");
									Se(o, R, n);
									var le = {
											$attr:
											{}
										},
										ue = Q(n, [], le),
										pe = t.splice(H + 1, t.length - (H + 1));
									(C || w) && ce(ue, C, w), t = t.concat(ue).concat(pe), de(r, le), U = t.length
								}
							else R.html(x);
							if (m.templateUrl) M = !0, ge("template", E, m, R), E = m, m.replace && (P = m), f = he(t.splice(H, t.length - H), R, r, o, q && I, l, u,
							{
								controllerDirectives: _,
								newScopeDirective: w !== m && w,
								newIsolateScopeDirective: C,
								templateDirective: E,
								nonTlbTranscludeDirective: k
							}), U = t.length;
							else if (m.compile) try
							{
								b = m.compile(R, r, I);
								var fe = m.$$originalDirective || m;
								A(b) ? p(null, Z(fe, b), F, z) : b && p(Z(fe, b.pre), Z(fe, b.post), F, z)
							}
							catch (e)
							{
								i(e, ne(R))
							}
							m.terminal && (f.terminal = !0, T = Math.max(T, m.priority))
						}
						return f.scope = w && !0 === w.scope, f.transcludeOnThisElement = q, f.templateOnThisElement = M, f.transclude = I, h.hasElementTranscludeDirective = D, f
					}

					function ae(e, t, n, i)
					{
						var r;
						if (w(t))
						{
							var a = t.match(_),
								o = t.substring(a[0].length),
								c = a[1] || a[3],
								l = "?" === a[2];
							if ("^^" === c ? n = n.parent() : (r = i && i[o], r = r && r.instance), !r)
							{
								var u = "$" + o + "Controller";
								r = "^^" === c && n[0] && n[0].nodeType === Fr ? null : c ? n.inheritedData(u) : n.data(u)
							}
							if (!r && !l) throw Cs("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", o, e)
						}
						else if (S(t))
						{
							r = [];
							for (var d = 0, h = t.length; d < h; d++) r[d] = ae(e, t[d], n, i)
						}
						else y(t) && (r = {}, s(t, function (t, s)
						{
							r[s] = ae(e, t, n, i)
						}));
						return r || null
					}

					function oe(e, t, n, i, r, s, a)
					{
						var o = $e();
						for (var l in i)
						{
							var u = i[l],
								d = {
									$scope: u === a || u.$$isolateScope ? r : s,
									$element: e,
									$attrs: t,
									$transclude: n
								},
								h = u.controller;
							"@" === h && (h = t[u.name]);
							var p = c(h, d, !0, u.controllerAs);
							o[u.name] = p, e.data("$" + u.name + "Controller", p.instance)
						}
						return o
					}

					function ce(e, t, n)
					{
						for (var i = 0, r = e.length; i < r; i++) e[i] = f(e[i],
						{
							$$isolateScope: t,
							$$newScope: n
						})
					}

					function le(e, n, i, s, a, o, c)
					{
						if (n === a) return null;
						var l = null;
						if (u.hasOwnProperty(n))
							for (var d, p = t.get(n + h), m = 0, g = p.length; m < g; m++)
								if (d = p[m], ($(s) || s > d.priority) && -1 !== d.restrict.indexOf(i))
								{
									if (o && (d = f(d,
										{
											$$start: o,
											$$end: c
										})), !d.$$bindings)
									{
										var v = d.$$bindings = r(d, d.name);
										y(v.isolateScope) && (d.$$isolateBindings = v.isolateScope)
									}
									e.push(d), l = d
								}
						return l
					}

					function ue(e)
					{
						if (u.hasOwnProperty(e))
							for (var n, i = t.get(e + h), r = 0, s = i.length; r < s; r++)
								if (n = i[r], n.multiElement) return !0;
						return !1
					}

					function de(e, t)
					{
						var n = t.$attr,
							i = e.$attr;
						s(e, function (i, r)
						{
							"$" !== r.charAt(0) && (t[r] && t[r] !== i && (i.length ? i += ("style" === r ? ";" : " ") + t[r] : i = t[r]), e.$set(r, i, !0, n[r]))
						}), s(t, function (t, r)
						{
							e.hasOwnProperty(r) || "$" === r.charAt(0) || (e[r] = t, "class" !== r && "style" !== r && (i[r] = n[r]))
						})
					}

					function he(e, t, n, r, o, c, l, u)
					{
						var d, h, p = [],
							m = t[0],
							g = e.shift(),
							v = f(g,
							{
								templateUrl: null,
								transclude: null,
								replace: null,
								$$originalDirective: g
							}),
							b = A(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
							$ = g.templateNamespace;
						return t.empty(), a(b).then(function (i)
							{
								var a, f, x, T;
								if (i = Ve(i), g.replace)
								{
									if (x = ke(i) ? [] : kt(be($, Or(i))), a = x[0], 1 !== x.length || a.nodeType !== Hr) throw Cs("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, b);
									f = {
										$attr:
										{}
									}, Se(r, t, a);
									var w = Q(a, [], f);
									y(g.scope) && ce(w, !0), e = w.concat(e), de(n, f)
								}
								else a = m, t.html(i);
								for (e.unshift(v), d = se(e, a, n, o, t, g, c, l, u), s(r, function (e, n)
									{
										e === a && (r[n] = t[0])
									}), h = Y(t[0].childNodes, o); p.length;)
								{
									var _ = p.shift(),
										C = p.shift(),
										S = p.shift(),
										E = p.shift(),
										A = t[0];
									if (!_.$$destroyed)
									{
										if (C !== m)
										{
											var k = C.className;
											u.hasElementTranscludeDirective && g.replace || (A = Ie(a)), Se(S, hr(C), A), U(hr(A), k)
										}
										T = d.transcludeOnThisElement ? X(_, d.transclude, E) : E, d(h, _, A, r, T)
									}
								}
								p = null
							}).catch(function (e)
							{
								E(e) && i(e)
							}),
							function (e, t, n, i, r)
							{
								var s = r;
								t.$$destroyed || (p ? p.push(t, n, i, s) : (d.transcludeOnThisElement && (s = X(t, d.transclude, r)), d(h, t, n, i, s)))
							}
					}

					function me(e, t)
					{
						var n = t.priority - e.priority;
						return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
					}

					function ge(e, t, n, i)
					{
						function r(e)
						{
							return e ? " (module: " + e + ")" : ""
						}
						if (t) throw Cs("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, r(t.$$moduleName), n.name, r(n.$$moduleName), e, ne(i))
					}

					function ve(e, t)
					{
						var i = n(t, !0);
						i && e.push(
						{
							priority: 0,
							compile: function (e)
							{
								var t = e.parent(),
									n = !!t.length;
								return n && B.$$addBindingClass(t),
									function (e, t)
									{
										var r = t.parent();
										n || B.$$addBindingClass(r), B.$$addBindingInfo(r, i.expressions), e.$watch(i, function (e)
										{
											t[0].nodeValue = e
										})
									}
							}
						})
					}

					function be(t, n)
					{
						switch (t = $r(t || "html"))
						{
							case "svg":
							case "math":
								var i = e.document.createElement("div");
								return i.innerHTML = "<" + t + ">" + n + "</" + t + ">", i.childNodes[0].childNodes;
							default:
								return n
						}
					}

					function xe(e, t)
					{
						return "srcdoc" === t ? v.HTML : "src" === t || "ngSrc" === t ? -1 === ["img", "video", "audio", "source", "track"].indexOf(e) ? v.RESOURCE_URL : v.MEDIA_URL : "xlinkHref" === t ? "image" === e ? v.MEDIA_URL : "a" === e ? v.URL : v.RESOURCE_URL : "form" === e && "action" === t || "base" === e && "href" === t || "link" === e && "href" === t ? v.RESOURCE_URL : "a" !== e || "href" !== t && "ngHref" !== t ? void 0 : v.URL
					}

					function ye(e, t)
					{
						var n = t.toLowerCase();
						return L[e + "|" + n] || L["*|" + n]
					}

					function Te(e)
					{
						return N(v.valueOf(e), "ng-prop-srcset")
					}

					function we(e, t, n, i)
					{
						if (C.test(i)) throw Cs("nodomevents", "Property bindings for HTML DOM event properties are disallowed");
						var r = V(e),
							s = ye(r, i),
							a = g;
						"srcset" !== i || "img" !== r && "source" !== r ? s && (a = v.getTrusted.bind(v, s)) : a = Te, t.push(
						{
							priority: 100,
							compile: function (e, t)
							{
								var r = o(t[n]),
									s = o(t[n], function (e)
									{
										return v.valueOf(e)
									});
								return {
									pre: function (e, t)
									{
										function n()
										{
											var n = r(e);
											t[0][i] = a(n)
										}
										n(), e.$watch(s, n)
									}
								}
							}
						})
					}

					function _e(e, t, n)
					{
						e.push(ir(o, l, i, t, n, !1))
					}

					function Ce(e, t, i, r, s)
					{
						var a = V(e),
							o = xe(a, r),
							c = !s,
							l = T[r] || s,
							u = n(i, c, o, l);
						if (u)
						{
							if ("multiple" === r && "select" === a) throw Cs("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", ne(e));
							if (C.test(r)) throw Cs("nodomevents", "Interpolations for HTML DOM event attributes are disallowed");
							t.push(
							{
								priority: 100,
								compile: function ()
								{
									return {
										pre: function (e, t, s)
										{
											var a = s.$$observers || (s.$$observers = $e()),
												c = s[r];
											c !== i && (u = c && n(c, !0, o, l), i = c), u && (s[r] = u(e), (a[r] || (a[r] = [])).$$inter = !0, (s.$$observers && s.$$observers[r].$$scope || e).$watch(u, function (e, t)
											{
												"class" === r && e !== t ? s.$updateClass(e, t) : s.$set(r, e)
											}))
										}
									}
								}
							})
						}
					}

					function Se(t, n, i)
					{
						var r, s, a = n[0],
							o = n.length,
							c = a.parentNode;
						if (t)
							for (r = 0, s = t.length; r < s; r++)
								if (t[r] === a)
								{
									t[r++] = i;
									for (var l = r, u = l + o - 1, d = t.length; l < d; l++, u++) u < d ? t[l] = t[u] : delete t[l];
									t.length -= o - 1, t.context === a && (t.context = i);
									break
								}
						c && c.replaceChild(i, a);
						var h = e.document.createDocumentFragment();
						for (r = 0; r < o; r++) h.appendChild(n[r]);
						for (hr.hasData(a) && (hr.data(i, hr.data(a)), hr(a).off("$destroy")), hr.cleanData(h.querySelectorAll("*")), r = 1; r < o; r++) delete n[r];
						n[0] = i, n.length = 1
					}

					function Ee(e, t)
					{
						return d(function ()
						{
							return e.apply(null, arguments)
						}, e, t)
					}

					function Ae(e, t, n, r, s, a)
					{
						try
						{
							e(t, n, r, s, a)
						}
						catch (e)
						{
							i(e, ne(n))
						}
					}

					function qe(e, t)
					{
						if (M) throw Cs("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t)
					}

					function Oe(e, t, i, r, a)
					{
						function c(t, n, r)
						{
							A(i.$onChanges) && !z(n, r) && (Me || (e.$$postDigest(k), Me = []), u || (u = {}, Me.push(l)), u[t] && (r = u[t].previousValue), u[t] = new St(r, n))
						}

						function l()
						{
							i.$onChanges(u), u = void 0
						}
						var u, d = [],
							h = {};
						return s(r, function (r, s)
						{
							var l, u, p, f, g, v = r.attrName,
								b = r.optional,
								$ = r.mode;
							switch ($)
							{
								case "@":
									b || br.call(t, v) || (qe(v, a.name), i[s] = t[v] = void 0), g = t.$observe(v, function (e)
									{
										if (w(e) || P(e))
										{
											var t = i[s];
											c(s, e, t), i[s] = e
										}
									}), t.$$observers[v].$$scope = e, l = t[v], w(l) ? i[s] = n(l)(e) : P(l) && (i[s] = l), h[s] = new St(Ss, i[s]), d.push(g);
									break;
								case "=":
									if (!br.call(t, v))
									{
										if (b) break;
										qe(v, a.name), t[v] = void 0
									}
									if (b && !t[v]) break;
									u = o(t[v]), f = u.literal ? W : z, p = u.assign || function ()
									{
										throw l = i[s] = u(e), Cs("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[v], v, a.name)
									}, l = i[s] = u(e);
									var x = function (t)
									{
										return f(t, i[s]) || (f(t, l) ? p(e, t = i[s]) : i[s] = t), l = t
									};
									x.$stateful = !0, g = r.collection ? e.$watchCollection(t[v], x) : e.$watch(o(t[v], x), null, u.literal), d.push(g);
									break;
								case "<":
									if (!br.call(t, v))
									{
										if (b) break;
										qe(v, a.name), t[v] = void 0
									}
									if (b && !t[v]) break;
									u = o(t[v]);
									var y = u.literal,
										T = i[s] = u(e);
									h[s] = new St(Ss, i[s]), g = e[r.collection ? "$watchCollection" : "$watch"](u, function (e, t)
									{
										if (t === e)
										{
											if (t === T || y && W(t, T)) return;
											t = T
										}
										c(s, e, t), i[s] = e
									}), d.push(g);
									break;
								case "&":
									if (b || br.call(t, v) || qe(v, a.name), (u = t.hasOwnProperty(v) ? o(t[v]) : m) === m && b) break;
									i[s] = function (t)
									{
										return u(e, t)
									}
							}
						}),
						{
							initialChanges: h,
							removeWatches: d.length && function ()
							{
								for (var e = 0, t = d.length; e < t; ++e) d[e]()
							}
						}
					}
					var Me, De = /^\w/,
						Re = e.document.createElement("div"),
						Pe = R,
						Le = I,
						Ne = D;
					j.prototype = {
						$normalize: Et,
						$addClass: function (e)
						{
							e && e.length > 0 && x.addClass(this.$$element, e)
						},
						$removeClass: function (e)
						{
							e && e.length > 0 && x.removeClass(this.$$element, e)
						},
						$updateClass: function (e, t)
						{
							var n = At(e, t);
							n && n.length && x.addClass(this.$$element, n);
							var i = At(t, e);
							i && i.length && x.removeClass(this.$$element, i)
						},
						$set: function (e, t, n, r)
						{
							var a, o = this.$$element[0],
								c = et(o, e),
								l = tt(e),
								u = e;
							c ? (this.$$element.prop(e, t), r = c) : l && (this[l] = t, u = l), this[e] = t, r ? this.$attr[e] = r : (r = this.$attr[e]) || (this.$attr[e] = r = pe(e, "-")), a = V(this.$$element), "img" === a && "srcset" === e && (this[e] = t = N(t, "$set('srcset', value)")), !1 !== n && (null === t || $(t) ? this.$$element.removeAttr(r) : De.test(r) ? c && !1 === t ? this.$$element.removeAttr(r) : this.$$element.attr(r, t) : H(this.$$element[0], r, t));
							var d = this.$$observers;
							d && s(d[u], function (e)
							{
								try
								{
									e(t)
								}
								catch (e)
								{
									i(e)
								}
							})
						},
						$observe: function (e, t)
						{
							var n = this,
								i = n.$$observers || (n.$$observers = $e()),
								r = i[e] || (i[e] = []);
							return r.push(t), l.$evalAsync(function ()
								{
									r.$$inter || !n.hasOwnProperty(e) || $(n[e]) || t(n[e])
								}),
								function ()
								{
									F(r, t)
								}
						}
					};
					var je = n.startSymbol(),
						He = n.endSymbol(),
						Ve = "{{" === je && "}}" === He ? g : function (e)
						{
							return e.replace(/\{\{/g, je).replace(/}}/g, He)
						},
						Ue = /^ng(Attr|Prop|On)([A-Z].*)$/,
						Fe = /^(.+)Start$/;
					return B.$$addBindingInfo = q ? function (e, t)
					{
						var n = e.data("$binding") || [];
						S(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
					} : m, B.$$addBindingClass = q ? function (e)
					{
						U(e, "ng-binding")
					} : m, B.$$addScopeInfo = q ? function (e, t, n, i)
					{
						var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
						e.data(r, t)
					} : m, B.$$addScopeClass = q ? function (e, t)
					{
						U(e, t ? "ng-isolate-scope" : "ng-scope")
					} : m, B.$$createComment = function (t, n)
					{
						var i = "";
						return q && (i = " " + (t || "") + ": ", n && (i += n + " ")), e.document.createComment(i)
					}, B
				}]
		}

		function St(e, t)
		{
			this.previousValue = e, this.currentValue = t
		}

		function Et(e)
		{
			return e.replace(Es, "").replace(As, function (e, t, n)
			{
				return n ? t.toUpperCase() : t
			})
		}

		function At(e, t)
		{
			var n = "",
				i = e.split(/\s+/),
				r = t.split(/\s+/);
			e: for (var s = 0; s < i.length; s++)
			{
				for (var a = i[s], o = 0; o < r.length; o++)
					if (a === r[o]) continue e;
				n += (n.length > 0 ? " " : "") + a
			}
			return n
		}

		function kt(e)
		{
			e = hr(e);
			var t = e.length;
			if (t <= 1) return e;
			for (; t--;)
			{
				var n = e[t];
				(n.nodeType === Ur || n.nodeType === Vr && "" === n.nodeValue.trim()) && Tr.call(e, t, 1)
			}
			return e
		}

		function qt(e, t)
		{
			if (t && w(t)) return t;
			if (w(e))
			{
				var n = qs.exec(e);
				if (n) return n[3]
			}
		}

		function Ot()
		{
			var e = {};
			this.has = function (t)
			{
				return e.hasOwnProperty(t)
			}, this.register = function (t, n)
			{
				ge(t, "controller"), y(t) ? d(e, t) : e[t] = n
			}, this.$get = ["$injector", function (t)
			{
				function n(e, t, n, r)
				{
					if (!e || !y(e.$scope)) throw i("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, t);
					e.$scope[t] = n
				}
				return function (i, r, s, a)
				{
					var o, c, l, u;
					if (s = !0 === s, a && w(a) && (u = a), w(i))
					{
						if (!(c = i.match(qs))) throw ks("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", i);
						if (l = c[1], u = u || c[3], !(i = e.hasOwnProperty(l) ? e[l] : ve(r.$scope, l, !0))) throw ks("ctrlreg", "The controller with the name '{0}' is not registered.", l);
						me(i, l, !0)
					}
					if (s)
					{
						var h = (S(i) ? i[i.length - 1] : i).prototype;
						return o = Object.create(h || null), u && n(r, u, o, l || i.name), d(function ()
						{
							var e = t.invoke(i, o, r, l);
							return e !== o && (y(e) || A(e)) && (o = e, u && n(r, u, o, l || i.name)), o
						},
						{
							instance: o,
							identifier: u
						})
					}
					return o = t.instantiate(i, r, l), u && n(r, u, o, l || i.name), o
				}
			}]
		}

		function Mt()
		{
			this.$get = ["$window", function (e)
			{
				return hr(e.document)
			}]
		}

		function Dt()
		{
			this.$get = ["$document", "$rootScope", function (e, t)
			{
				function n()
				{
					r = i.hidden
				}
				var i = e[0],
					r = i && i.hidden;
				return e.on("visibilitychange", n), t.$on("$destroy", function ()
					{
						e.off("visibilitychange", n)
					}),
					function ()
					{
						return r
					}
			}]
		}

		function Rt()
		{
			this.$get = ["$log", function (e)
			{
				return function (t, n)
				{
					e.error.apply(e, arguments)
				}
			}]
		}

		function Pt(e)
		{
			return y(e) ? C(e) ? e.toISOString() : J(e) : e
		}

		function It()
		{
			this.$get = function ()
			{
				return function (e)
				{
					if (!e) return "";
					var t = [];
					return a(e, function (e, n)
					{
						null === e || $(e) || A(e) || (S(e) ? s(e, function (e)
						{
							t.push(oe(n) + "=" + oe(Pt(e)))
						}) : t.push(oe(n) + "=" + oe(Pt(e))))
					}), t.join("&")
				}
			}
		}

		function Lt()
		{
			this.$get = function ()
			{
				return function (e)
				{
					function t(e, i, r)
					{
						S(e) ? s(e, function (e, n)
						{
							t(e, i + "[" + (y(e) ? n : "") + "]")
						}) : y(e) && !C(e) ? a(e, function (e, n)
						{
							t(e, i + (r ? "" : "[") + n + (r ? "" : "]"))
						}) : (A(e) && (e = e()), n.push(oe(i) + "=" + (null == e ? "" : oe(Pt(e)))))
					}
					if (!e) return "";
					var n = [];
					return t(e, "", !0), n.join("&")
				}
			}
		}

		function Nt(e, t)
		{
			if (w(e))
			{
				var n = e.replace(Is, "").trim();
				if (n)
				{
					var i = t("Content-Type"),
						r = i && 0 === i.indexOf(Ms);
					if (r || jt(n)) try
					{
						e = X(n)
					}
					catch (t)
					{
						if (!r) return e;
						throw Ls("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, t)
					}
				}
			}
			return e
		}

		function jt(e)
		{
			var t = e.match(Rs);
			return t && Ps[t[0]].test(e)
		}

		function Ht(e)
		{
			function t(e, t)
			{
				e && (i[e] = i[e] ? i[e] + ", " + t : t)
			}
			var n, i = $e();
			return w(e) ? s(e.split("\n"), function (e)
			{
				n = e.indexOf(":"), t($r(Or(e.substr(0, n))), Or(e.substr(n + 1)))
			}) : y(e) && s(e, function (e, n)
			{
				t($r(n), Or(e))
			}), i
		}

		function Vt(e)
		{
			var t;
			return function (n)
			{
				if (t || (t = Ht(e)), n)
				{
					var i = t[$r(n)];
					return void 0 === i && (i = null), i
				}
				return t
			}
		}

		function Ut(e, t, n, i)
		{
			return A(i) ? i(e, t, n) : (s(i, function (i)
			{
				e = i(e, t, n)
			}), e)
		}

		function Ft(e)
		{
			return 200 <= e && e < 300
		}

		function Bt()
		{
			var e = this.defaults = {
					transformResponse: [Nt],
					transformRequest: [function (e)
					{
						return !y(e) || M(e) || R(e) || D(e) ? e : J(e)
					}],
					headers:
					{
						common:
						{
							Accept: "application/json, text/plain, */*"
						},
						post: Te(Ds),
						put: Te(Ds),
						patch: Te(Ds)
					},
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					paramSerializer: "$httpParamSerializer",
					jsonpCallbackParam: "callback"
				},
				t = !1;
			this.useApplyAsync = function (e)
			{
				return x(e) ? (t = !!e, this) : t
			};
			var n = this.interceptors = [],
				r = this.xsrfWhitelistedOrigins = [];
			this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (a, o, c, l, u, h, p, f)
			{
				function g(t)
				{
					function n(e, t)
					{
						for (var n = 0, i = t.length; n < i;)
						{
							var r = t[n++],
								s = t[n++];
							e = e.then(r, s)
						}
						return t.length = 0, e
					}

					function r()
					{
						a.$$completeOutstandingRequest(m, "$http")
					}

					function o(e, t)
					{
						var n, i = {};
						return s(e, function (e, r)
						{
							A(e) ? null != (n = e(t)) && (i[r] = n) : i[r] = e
						}), i
					}

					function c(t)
					{
						var n = t.headers,
							i = Ut(t.data, Vt(n), void 0, t.transformRequest);
						return $(i) && s(n, function (e, t)
						{
							"content-type" === $r(t) && delete n[t]
						}), $(t.withCredentials) && !$(e.withCredentials) && (t.withCredentials = e.withCredentials), v(t, i).then(l, l)
					}

					function l(e)
					{
						var t = d(
						{}, e);
						return t.data = Ut(e.data, e.headers, e.status, u.transformResponse), Ft(e.status) ? t : h.reject(t)
					}
					if (!y(t)) throw i("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
					if (!w(f.valueOf(t.url))) throw i("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", t.url);
					var u = d(
					{
						method: "get",
						transformRequest: e.transformRequest,
						transformResponse: e.transformResponse,
						paramSerializer: e.paramSerializer,
						jsonpCallbackParam: e.jsonpCallbackParam
					}, t);
					u.headers = function (t)
					{
						var n, i, r, s = e.headers,
							a = d(
							{}, t.headers);
						s = d(
						{}, s.common, s[$r(t.method)]);
						e: for (n in s)
						{
							i = $r(n);
							for (r in a)
								if ($r(r) === i) continue e;
							a[n] = s[n]
						}
						return o(a, Te(t))
					}(t), u.method = xr(u.method), u.paramSerializer = w(u.paramSerializer) ? p.get(u.paramSerializer) : u.paramSerializer, a.$$incOutstandingRequestCount("$http");
					var g = [],
						b = [],
						x = h.resolve(u);
					return s(C, function (e)
					{
						(e.request || e.requestError) && g.unshift(e.request, e.requestError), (e.response || e.responseError) && b.push(e.response, e.responseError)
					}), x = n(x, g), x = x.then(c), x = n(x, b), x = x.finally(r)
				}

				function v(n, i)
				{
					function r(e)
					{
						if (e)
						{
							var n = {};
							return s(e, function (e, i)
							{
								n[i] = function (n)
								{
									function i()
									{
										e(n)
									}
									t ? u.$applyAsync(i) : u.$$phase ? i() : u.$apply(i)
								}
							}), n
						}
					}

					function a(e, n, i, r, s)
					{
						function a()
						{
							l(n, e, i, r, s)
						}
						m && (Ft(e) ? m.put(O, [e, n, Ht(i), r, s]) : m.remove(O)), t ? u.$applyAsync(a) : (a(), u.$$phase || u.$apply())
					}

					function l(e, t, i, r, s)
					{
						t = t >= -1 ? t : 0, (Ft(t) ? C.resolve : C.reject)(
						{
							data: e,
							status: t,
							headers: Vt(i),
							config: n,
							statusText: r,
							xhrStatus: s
						})
					}

					function d(e)
					{
						l(e.data, e.status, Te(e.headers()), e.statusText, e.xhrStatus)
					}

					function p()
					{
						var e = g.pendingRequests.indexOf(n); - 1 !== e && g.pendingRequests.splice(e, 1)
					}
					var m, v, C = h.defer(),
						A = C.promise,
						k = n.headers,
						q = "jsonp" === $r(n.method),
						O = n.url;
					if (q ? O = f.getTrustedResourceUrl(O) : w(O) || (O = f.valueOf(O)), O = b(O, n.paramSerializer(n.params)), q && (O = T(O, n.jsonpCallbackParam)), g.pendingRequests.push(n), A.then(p, p), !n.cache && !e.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (m = y(n.cache) ? n.cache : y(e.cache) ? e.cache : _), m && (v = m.get(O), x(v) ? I(v) ? v.then(d, d) : S(v) ? l(v[1], v[0], Te(v[2]), v[3], v[4]) : l(v, 200,
						{}, "OK", "complete") : m.put(O, A)), $(v))
					{
						var M = E(n.url) ? c()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
						M && (k[n.xsrfHeaderName || e.xsrfHeaderName] = M), o(n.method, O, i, a, k, n.timeout, n.withCredentials, n.responseType, r(n.eventHandlers), r(n.uploadEventHandlers))
					}
					return A
				}

				function b(e, t)
				{
					return t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
				}

				function T(e, t)
				{
					var n = e.split("?");
					if (n.length > 2) throw Ls("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
					return s(re(n[1]), function (n, i)
					{
						if ("JSON_CALLBACK" === n) throw Ls("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
						if (i === t) throw Ls("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e)
					}), e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"
				}
				var _ = l("$http");
				e.paramSerializer = w(e.paramSerializer) ? p.get(e.paramSerializer) : e.paramSerializer;
				var C = [];
				s(n, function (e)
				{
					C.unshift(w(e) ? p.get(e) : p.invoke(e))
				});
				var E = ei(r);
				return g.pendingRequests = [],
					function (e)
					{
						s(arguments, function (e)
						{
							g[e] = function (t, n)
							{
								return g(d(
								{}, n ||
								{},
								{
									method: e,
									url: t
								}))
							}
						})
					}("get", "delete", "head", "jsonp"),
					function (e)
					{
						s(arguments, function (e)
						{
							g[e] = function (t, n, i)
							{
								return g(d(
								{}, i ||
								{},
								{
									method: e,
									url: t,
									data: n
								}))
							}
						})
					}("post", "put", "patch"), g.defaults = e, g
			}]
		}

		function zt()
		{
			this.$get = function ()
			{
				return function ()
				{
					return new e.XMLHttpRequest
				}
			}
		}

		function Wt()
		{
			this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (e, t, n, i)
			{
				return Gt(e, i, e.defer, t, n[0])
			}]
		}

		function Gt(e, t, n, i, r)
		{
			function a(e, t, n)
			{
				e = e.replace("JSON_CALLBACK", t);
				var s = r.createElement("script"),
					a = null;
				return s.type = "text/javascript", s.src = e, s.async = !0, a = function (e)
				{
					s.removeEventListener("load", a), s.removeEventListener("error", a), r.body.removeChild(s), s = null;
					var o = -1,
						c = "unknown";
					e && ("load" !== e.type || i.wasCalled(t) || (e = {
						type: "error"
					}), c = e.type, o = "error" === e.type ? 404 : 200), n && n(o, c)
				}, s.addEventListener("load", a), s.addEventListener("error", a), r.body.appendChild(s), a
			}
			return function (r, o, c, l, u, d, h, p, f, m)
			{
				function g(e)
				{
					w = "timeout" === e, y && y(), T && T.abort()
				}

				function v(e, t, i, r, s, a)
				{
					x(E) && n.cancel(E), y = T = null, e(t, i, r, s, a)
				}
				if (o = o || e.url(), "jsonp" === $r(r)) var b = i.createCallback(o),
					y = a(o, b, function (e, t)
					{
						var n = 200 === e && i.getResponse(b);
						v(l, e, n, "", t, "complete"), i.removeCallback(b)
					});
				else
				{
					var T = t(r, o),
						w = !1;
					T.open(r, o, !0), s(u, function (e, t)
					{
						x(e) && T.setRequestHeader(t, e)
					}), T.onload = function ()
					{
						var e = T.statusText || "",
							t = "response" in T ? T.response : T.responseText,
							n = 1223 === T.status ? 204 : T.status;
						0 === n && (n = t ? 200 : "file" === Jn(o).protocol ? 404 : 0), v(l, n, t, T.getAllResponseHeaders(), e, "complete")
					};
					var _ = function ()
						{
							v(l, -1, null, null, "", "error")
						},
						C = function ()
						{
							v(l, -1, null, null, "", w ? "timeout" : "abort")
						},
						S = function ()
						{
							v(l, -1, null, null, "", "timeout")
						};
					if (T.onerror = _, T.ontimeout = S, T.onabort = C, s(f, function (e, t)
						{
							T.addEventListener(t, e)
						}), s(m, function (e, t)
						{
							T.upload.addEventListener(t, e)
						}), h && (T.withCredentials = !0), p) try
					{
						T.responseType = p
					}
					catch (e)
					{
						if ("json" !== p) throw e
					}
					T.send($(c) ? null : c)
				}
				if (d > 0) var E = n(function ()
				{
					g("timeout")
				}, d);
				else I(d) && d.then(function ()
				{
					g(x(d.$$timeoutId) ? "timeout" : "abort")
				})
			}
		}

		function Kt()
		{
			var e = "{{",
				t = "}}";
			this.startSymbol = function (t)
			{
				return t ? (e = t, this) : e
			}, this.endSymbol = function (e)
			{
				return e ? (t = e, this) : t
			}, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, i, r)
			{
				function s(e)
				{
					return "\\\\\\" + e
				}

				function a(n)
				{
					return n.replace(h, e).replace(p, t)
				}

				function o(e, t, n, i)
				{
					var r = e.$watch(function (e)
					{
						return r(), i(e)
					}, t, n);
					return r
				}

				function c(s, c, h, p)
				{
					function f(e)
					{
						try
						{
							return e = h && !m ? r.getTrusted(h, e) : r.valueOf(e), p && !x(e) ? e : xe(e)
						}
						catch (e)
						{
							i(Ns.interr(s, e))
						}
					}
					var m = h === r.URL || h === r.MEDIA_URL;
					if (!s.length || -1 === s.indexOf(e))
					{
						if (c) return;
						var g = a(s);
						m && (g = r.getTrusted(h, g));
						var b = v(g);
						return b.exp = s, b.expressions = [], b.$$watchDelegate = o, b
					}
					p = !!p;
					for (var y, T, w, _, C, S = 0, E = [], A = s.length, k = [], q = []; S < A;)
					{
						if (-1 === (y = s.indexOf(e, S)) || -1 === (T = s.indexOf(t, y + l)))
						{
							S !== A && k.push(a(s.substring(S)));
							break
						}
						S !== y && k.push(a(s.substring(S, y))), _ = s.substring(y + l, T), E.push(_), S = T + u, q.push(k.length), k.push("")
					}
					C = 1 === k.length && 1 === q.length;
					var O = m && C ? void 0 : f;
					if (w = E.map(function (e)
						{
							return n(e, O)
						}), !c || E.length)
					{
						var M = function (e)
						{
							for (var t = 0, n = E.length; t < n; t++)
							{
								if (p && $(e[t])) return;
								k[q[t]] = e[t]
							}
							return m ? r.getTrusted(h, C ? k[0] : k.join("")) : (h && k.length > 1 && Ns.throwNoconcat(s), k.join(""))
						};
						return d(function (e)
						{
							var t = 0,
								n = E.length,
								r = new Array(n);
							try
							{
								for (; t < n; t++) r[t] = w[t](e);
								return M(r)
							}
							catch (e)
							{
								i(Ns.interr(s, e))
							}
						},
						{
							exp: s,
							expressions: E,
							$$watchDelegate: function (e, t)
							{
								var n;
								return e.$watchGroup(w, function (i, r)
								{
									var s = M(i);
									t.call(this, s, i !== r ? n : s, e), n = s
								})
							}
						})
					}
				}
				var l = e.length,
					u = t.length,
					h = new RegExp(e.replace(/./g, s), "g"),
					p = new RegExp(t.replace(/./g, s), "g");
				return c.startSymbol = function ()
				{
					return e
				}, c.endSymbol = function ()
				{
					return t
				}, c
			}]
		}

		function Zt()
		{
			this.$get = ["$$intervalFactory", "$window", function (e, t)
			{
				var n = {},
					i = function (e, i, r)
					{
						var s = t.setInterval(e, i);
						return n[s] = r, s
					},
					r = function (e)
					{
						t.clearInterval(e), delete n[e]
					},
					s = e(i, r);
				return s.cancel = function (e)
				{
					if (!e) return !1;
					if (!e.hasOwnProperty("$$intervalId")) throw js("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`.");
					if (!n.hasOwnProperty(e.$$intervalId)) return !1;
					var t = e.$$intervalId,
						i = n[t];
					return In(i.promise), i.reject("canceled"), r(t), !0
				}, s
			}]
		}

		function Yt()
		{
			this.$get = ["$browser", "$q", "$$q", "$rootScope", function (e, t, n, i)
			{
				return function (r, s)
				{
					return function (a, o, c, l)
					{
						function u()
						{
							h ? a.apply(null, p) : a(f)
						}

						function d()
						{
							m ? e.defer(u) : i.$evalAsync(u), g.notify(f++), c > 0 && f >= c && (g.resolve(f), s(v.$$intervalId)), m || i.$apply()
						}
						var h = arguments.length > 4,
							p = h ? K(arguments, 4) : [],
							f = 0,
							m = x(l) && !l,
							g = (m ? n : t).defer(),
							v = g.promise;
						return c = x(c) ? c : 0, v.$$intervalId = r(d, o, g, m), v
					}
				}
			}]
		}

		function Jt(e)
		{
			for (var t = e.split("/"), n = t.length; n--;) t[n] = ae(t[n].replace(/%2F/g, "/"));
			return t.join("/")
		}

		function Xt(e, t)
		{
			for (var n = e.split("/"), i = n.length; i--;) n[i] = decodeURIComponent(n[i]), t && (n[i] = n[i].replace(/\//g, "%2F"));
			return n.join("/")
		}

		function Qt(e, t, n)
		{
			var i = se(t),
				r = n ? "#" + ae(n) : "";
			return Jt(e) + (i ? "?" + i : "") + r
		}

		function en(e, t)
		{
			var n = Jn(e);
			t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = p(n.port) || Us[n.protocol] || null
		}

		function tn(e, t, n)
		{
			if (Bs.test(e)) throw Fs("badpath", 'Invalid url "{0}".', e);
			var i = "/" !== e.charAt(0);
			i && (e = "/" + e);
			var r = Jn(e),
				s = i && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname;
			t.$$path = Xt(s, n), t.$$search = re(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
		}

		function nn(e, t)
		{
			return e.slice(0, t.length) === t
		}

		function rn(e, t)
		{
			if (nn(t, e)) return t.substr(e.length)
		}

		function sn(e)
		{
			var t = e.indexOf("#");
			return -1 === t ? e : e.substr(0, t)
		}

		function an(e)
		{
			return e.substr(0, sn(e).lastIndexOf("/") + 1)
		}

		function on(e)
		{
			return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
		}

		function cn(e, t, n)
		{
			this.$$html5 = !0, n = n || "", en(e, this), this.$$parse = function (e)
			{
				var n = rn(t, e);
				if (!w(n)) throw Fs("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
				tn(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
			}, this.$$normalizeUrl = function (e)
			{
				return t + e.substr(1)
			}, this.$$parseLinkUrl = function (i, r)
			{
				if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
				var s, a, o;
				return x(s = rn(e, i)) ? (a = s, o = n && x(s = rn(n, s)) ? t + (rn("/", s) || s) : e + a) : x(s = rn(t, i)) ? o = t + s : t === i + "/" && (o = t), o && this.$$parse(o), !!o
			}
		}

		function ln(e, t, n)
		{
			en(e, this), this.$$parse = function (i)
			{
				var r, s = rn(e, i) || rn(t, i);
				$(s) || "#" !== s.charAt(0) ? this.$$html5 ? r = s : (r = "", $(s) && (e = i, this.replace())) : (r = rn(n, s), $(r) && (r = s)), tn(r, this, !1), this.$$path = function (e, t, n)
				{
					var i, r = /^\/[A-Z]:(\/.*)/;
					return nn(t, n) && (t = t.replace(n, "")), r.exec(t) ? e : (i = r.exec(e), i ? i[1] : e)
				}(this.$$path, r, e), this.$$compose()
			}, this.$$normalizeUrl = function (t)
			{
				return e + (t ? n + t : "")
			}, this.$$parseLinkUrl = function (t, n)
			{
				return sn(e) === sn(t) && (this.$$parse(t), !0)
			}
		}

		function un(e, t, n)
		{
			this.$$html5 = !0, ln.apply(this, arguments), this.$$parseLinkUrl = function (i, r)
			{
				if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
				var s, a;
				return e === sn(i) ? s = i : (a = rn(t, i)) ? s = e + n + a : t === i + "/" && (s = t), s && this.$$parse(s), !!s
			}, this.$$normalizeUrl = function (t)
			{
				return e + n + t
			}
		}

		function dn(e)
		{
			return function ()
			{
				return this[e]
			}
		}

		function hn(e, t)
		{
			return function (n)
			{
				return $(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
			}
		}

		function pn()
		{
			var e = "!",
				t = {
					enabled: !1,
					requireBase: !0,
					rewriteLinks: !0
				};
			this.hashPrefix = function (t)
			{
				return x(t) ? (e = t, this) : e
			}, this.html5Mode = function (e)
			{
				return P(e) ? (t.enabled = e, this) : y(e) ? (P(e.enabled) && (t.enabled = e.enabled), P(e.requireBase) && (t.requireBase = e.requireBase), (P(e.rewriteLinks) || w(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks), this) : t
			}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, i, r, s, a)
			{
				function o(e, t)
				{
					return e === t || Jn(e).href === Jn(t).href
				}

				function c(e, t, n)
				{
					var r = u.url(),
						s = u.$$state;
					try
					{
						i.url(e, t, n), u.$$state = i.state()
					}
					catch (e)
					{
						throw u.url(r), u.$$state = s, e
					}
				}

				function l(e, t)
				{
					n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
				}
				var u, d, h, p = i.baseHref(),
					f = i.url();
				if (t.enabled)
				{
					if (!p && t.requireBase) throw Fs("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
					h = on(f) + (p || "/"), d = r.history ? cn : un
				}
				else h = sn(f), d = ln;
				var m = an(h);
				u = new d(h, m, "#" + e), u.$$parseLinkUrl(f, f), u.$$state = i.state();
				var g = /^\s*(javascript|mailto):/i;
				s.on("click", function (e)
				{
					var r = t.rewriteLinks;
					if (r && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button)
					{
						for (var a = hr(e.target);
							"a" !== V(a[0]);)
							if (a[0] === s[0] || !(a = a.parent())[0]) return;
						if (!w(r) || !$(a.attr(r)))
						{
							var o = a.prop("href"),
								c = a.attr("href") || a.attr("xlink:href");
							y(o) && "[object SVGAnimatedString]" === o.toString() && (o = Jn(o.animVal).href), g.test(o) || !o || a.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(o, c) && (e.preventDefault(), u.absUrl() !== i.url() && n.$apply())
						}
					}
				}), u.absUrl() !== f && i.url(u.absUrl(), !0);
				var v = !0;
				return i.onUrlChange(function (e, t)
				{
					if (!nn(e, m)) return void(a.location.href = e);
					n.$evalAsync(function ()
					{
						var i, r = u.absUrl(),
							s = u.$$state;
						u.$$parse(e), u.$$state = t, i = n.$broadcast("$locationChangeStart", e, r, t, s).defaultPrevented, u.absUrl() === e && (i ? (u.$$parse(r), u.$$state = s, c(r, !1, s)) : (v = !1, l(r, s)))
					}), n.$$phase || n.$digest()
				}), n.$watch(function ()
				{
					if (v || u.$$urlUpdatedByLocation)
					{
						u.$$urlUpdatedByLocation = !1;
						var e = i.url(),
							t = u.absUrl(),
							s = i.state(),
							a = u.$$replace,
							d = !o(e, t) || u.$$html5 && r.history && s !== u.$$state;
						(v || d) && (v = !1, n.$evalAsync(function ()
						{
							var t = u.absUrl(),
								i = n.$broadcast("$locationChangeStart", t, e, u.$$state, s).defaultPrevented;
							u.absUrl() === t && (i ? (u.$$parse(e), u.$$state = s) : (d && c(t, a, s === u.$$state ? null : u.$$state), l(e, s)))
						}))
					}
					u.$$replace = !1
				}), u
			}]
		}

		function fn()
		{
			var e = !0,
				t = this;
			this.debugEnabled = function (t)
			{
				return x(t) ? (e = t, this) : e
			}, this.$get = ["$window", function (n)
			{
				function i(e)
				{
					return E(e) && (e.stack && a ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
				}

				function r(e)
				{
					var t = n.console ||
						{},
						r = t[e] || t.log || m;
					return function ()
					{
						var e = [];
						return s(arguments, function (t)
						{
							e.push(i(t))
						}), Function.prototype.apply.call(r, t, e)
					}
				}
				var a = dr || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
				return {
					log: r("log"),
					info: r("info"),
					warn: r("warn"),
					error: r("error"),
					debug: function ()
					{
						var n = r("debug");
						return function ()
						{
							e && n.apply(t, arguments)
						}
					}()
				}
			}]
		}

		function mn(e)
		{
			return e + ""
		}

		function gn(e, t)
		{
			return void 0 !== e ? e : t
		}

		function vn(e, t)
		{
			return void 0 === e ? t : void 0 === t ? e : e + t
		}

		function bn(e, t)
		{
			return !e(t).$stateful
		}

		function $n(e, t)
		{
			switch (e.type)
			{
				case Js.MemberExpression:
					if (e.computed) return !1;
					break;
				case Js.UnaryExpression:
					return Xs;
				case Js.BinaryExpression:
					return "+" !== e.operator && Xs;
				case Js.CallExpression:
					return !1
			}
			return void 0 === t ? Qs : t
		}

		function xn(e, t, n)
		{
			var i, r, a, o = e.isPure = $n(e, n);
			switch (e.type)
			{
				case Js.Program:
					i = !0, s(e.body, function (e)
					{
						xn(e.expression, t, o), i = i && e.expression.constant
					}), e.constant = i;
					break;
				case Js.Literal:
					e.constant = !0, e.toWatch = [];
					break;
				case Js.UnaryExpression:
					xn(e.argument, t, o), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
					break;
				case Js.BinaryExpression:
					xn(e.left, t, o), xn(e.right, t, o), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
					break;
				case Js.LogicalExpression:
					xn(e.left, t, o), xn(e.right, t, o), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
					break;
				case Js.ConditionalExpression:
					xn(e.test, t, o), xn(e.alternate, t, o), xn(e.consequent, t, o), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
					break;
				case Js.Identifier:
					e.constant = !1, e.toWatch = [e];
					break;
				case Js.MemberExpression:
					xn(e.object, t, o), e.computed && xn(e.property, t, o), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = e.constant ? [] : [e];
					break;
				case Js.CallExpression:
					a = !!e.filter && bn(t, e.callee.name), i = a, r = [], s(e.arguments, function (e)
					{
						xn(e, t, o), i = i && e.constant, r.push.apply(r, e.toWatch)
					}), e.constant = i, e.toWatch = a ? r : [e];
					break;
				case Js.AssignmentExpression:
					xn(e.left, t, o), xn(e.right, t, o), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
					break;
				case Js.ArrayExpression:
					i = !0, r = [], s(e.elements, function (e)
					{
						xn(e, t, o), i = i && e.constant, r.push.apply(r, e.toWatch)
					}), e.constant = i, e.toWatch = r;
					break;
				case Js.ObjectExpression:
					i = !0, r = [], s(e.properties, function (e)
					{
						xn(e.value, t, o), i = i && e.value.constant, r.push.apply(r, e.value.toWatch), e.computed && (xn(e.key, t, !1), i = i && e.key.constant, r.push.apply(r, e.key.toWatch))
					}), e.constant = i, e.toWatch = r;
					break;
				case Js.ThisExpression:
				case Js.LocalsExpression:
					e.constant = !1, e.toWatch = []
			}
		}

		function yn(e)
		{
			if (1 === e.length)
			{
				var t = e[0].expression,
					n = t.toWatch;
				return 1 !== n.length ? n : n[0] !== t ? n : void 0
			}
		}

		function Tn(e)
		{
			return e.type === Js.Identifier || e.type === Js.MemberExpression
		}

		function wn(e)
		{
			if (1 === e.body.length && Tn(e.body[0].expression)) return {
				type: Js.AssignmentExpression,
				left: e.body[0].expression,
				right:
				{
					type: Js.NGValueParameter
				},
				operator: "="
			}
		}

		function _n(e)
		{
			return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Js.Literal || e.body[0].expression.type === Js.ArrayExpression || e.body[0].expression.type === Js.ObjectExpression)
		}

		function Cn(e)
		{
			return e.constant
		}

		function Sn(e)
		{
			this.$filter = e
		}

		function En(e)
		{
			this.$filter = e
		}

		function An(e, t, n)
		{
			this.ast = new Js(e, n), this.astCompiler = n.csp ? new En(t) : new Sn(t)
		}

		function kn(e)
		{
			return A(e.valueOf) ? e.valueOf() : Gs.call(e)
		}

		function qn()
		{
			var e, t, n = $e(),
				i = {
					true: !0,
					false: !1,
					null: null,
					undefined: void 0
				};
			this.addLiteral = function (e, t)
			{
				i[e] = t
			}, this.setIdentifierFns = function (n, i)
			{
				return e = n, t = i, this
			}, this.$get = ["$filter", function (r)
			{
				function a(e, t)
				{
					var i, s;
					switch (typeof e)
					{
						case "string":
							if (e = e.trim(), s = e, !(i = n[s]))
							{
								i = new An(new Ys($), r, $).parse(e), n[s] = p(i)
							}
							return v(i, t);
						case "function":
							return v(e, t);
						default:
							return v(m, t)
					}
				}

				function o(e)
				{
					return new An(new Ys($), r, $).getAst(e).ast
				}

				function c(e, t, n)
				{
					return null == e || null == t ? e === t : !("object" == typeof e && "object" == typeof (e = kn(e)) && !n) && (e === t || e !== e && t !== t)
				}

				function l(e, t, n, i, r)
				{
					var s, a = i.inputs;
					if (1 === a.length)
					{
						var o = c;
						return a = a[0], e.$watch(function (e)
						{
							var t = a(e);
							return c(t, o, a.isPure) || (s = i(e, void 0, void 0, [t]), o = t && kn(t)), s
						}, t, n, r)
					}
					for (var l = [], u = [], d = 0, h = a.length; d < h; d++) l[d] = c, u[d] = null;
					return e.$watch(function (e)
					{
						for (var t = !1, n = 0, r = a.length; n < r; n++)
						{
							var o = a[n](e);
							(t || (t = !c(o, l[n], a[n].isPure))) && (u[n] = o, l[n] = o && kn(o))
						}
						return t && (s = i(e, void 0, void 0, u)), s
					}, t, n, r)
				}

				function u(e, t, n, i, r)
				{
					function s()
					{
						l(c) && o()
					}

					function a(e, t, n, i)
					{
						return c = f && i ? i[0] : u(e, t, n, i), l(c) && e.$$postDigest(s), h(c)
					}
					var o, c, l = i.literal ? d : x,
						u = i.$$intercepted || i,
						h = i.$$interceptor || g,
						f = i.inputs && !u.inputs;
					return a.literal = i.literal, a.constant = i.constant, a.inputs = i.inputs, p(a), o = e.$watch(a, t, n, r)
				}

				function d(e)
				{
					var t = !0;
					return s(e, function (e)
					{
						x(e) || (t = !1)
					}), t
				}

				function h(e, t, n, i)
				{
					var r = e.$watch(function (e)
					{
						return r(), i(e)
					}, t, n);
					return r
				}

				function p(e)
				{
					return e.constant ? e.$$watchDelegate = h : e.oneTime ? e.$$watchDelegate = u : e.inputs && (e.$$watchDelegate = l), e
				}

				function f(e, t)
				{
					function n(n)
					{
						return t(e(n))
					}
					return n.$stateful = e.$stateful || t.$stateful, n.$$pure = e.$$pure && t.$$pure, n
				}

				function v(e, t)
				{
					if (!t) return e;
					e.$$interceptor && (t = f(e.$$interceptor, t), e = e.$$intercepted);
					var n = !1,
						i = function (i, r, s, a)
						{
							var o = n && a ? a[0] : e(i, r, s, a);
							return t(o)
						};
					return i.$$intercepted = e, i.$$interceptor = t, i.literal = e.literal, i.oneTime = e.oneTime, i.constant = e.constant, t.$stateful || (n = !e.inputs, i.inputs = e.inputs ? e.inputs : [e], t.$$pure || (i.inputs = i.inputs.map(function (e)
					{
						return e.isPure === Qs ? function (t)
						{
							return e(t)
						} : e
					}))), p(i)
				}
				var b = Dr().noUnsafeEval,
					$ = {
						csp: b,
						literals: B(i),
						isIdentifierStart: A(e) && e,
						isIdentifierContinue: A(t) && t
					};
				return a.$$getAst = o, a
			}]
		}

		function On()
		{
			var e = !0;
			this.$get = ["$rootScope", "$exceptionHandler", function (t, n)
			{
				return Dn(function (e)
				{
					t.$evalAsync(e)
				}, n, e)
			}], this.errorOnUnhandledRejections = function (t)
			{
				return x(t) ? (e = t, this) : e
			}
		}

		function Mn()
		{
			var e = !0;
			this.$get = ["$browser", "$exceptionHandler", function (t, n)
			{
				return Dn(function (e)
				{
					t.defer(e)
				}, n, e)
			}], this.errorOnUnhandledRejections = function (t)
			{
				return x(t) ? (e = t, this) : e
			}
		}

		function Dn(e, t, n)
		{
			function r()
			{
				return new a
			}

			function a()
			{
				var e = this.promise = new o;
				this.resolve = function (t)
				{
					h(e, t)
				}, this.reject = function (t)
				{
					f(e, t)
				}, this.notify = function (t)
				{
					g(e, t)
				}
			}

			function o()
			{
				this.$$state = {
					status: 0
				}
			}

			function c(i)
			{
				var r, s, a;
				a = i.pending, i.processScheduled = !1, i.pending = void 0;
				try
				{
					for (var o = 0, c = a.length; o < c; ++o)
					{
						Pn(i), s = a[o][0], r = a[o][i.status];
						try
						{
							A(r) ? h(s, r(i.value)) : 1 === i.status ? h(s, i.value) : f(s, i.value)
						}
						catch (e)
						{
							f(s, e), e && !0 === e.$$passToExceptionHandler && t(e)
						}
					}
				}
				finally
				{
					--k, n && 0 === k && e(l)
				}
			}

			function l()
			{
				for (; !k && q.length;)
				{
					var e = q.shift();
					if (!Rn(e))
					{
						Pn(e);
						var n = "Possibly unhandled rejection: " + _e(e.value);
						E(e.value) ? t(e.value, n) : t(n)
					}
				}
			}

			function u(t)
			{
				!n || t.pending || 2 !== t.status || Rn(t) || (0 === k && 0 === q.length && e(l), q.push(t)), !t.processScheduled && t.pending && (t.processScheduled = !0, ++k, e(function ()
				{
					c(t)
				}))
			}

			function h(e, t)
			{
				e.$$state.status || (t === e ? m(e, C("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : p(e, t))
			}

			function p(e, t)
			{
				function n(t)
				{
					a || (a = !0, p(e, t))
				}

				function i(t)
				{
					a || (a = !0, m(e, t))
				}

				function r(t)
				{
					g(e, t)
				}
				var s, a = !1;
				try
				{
					(y(t) || A(t)) && (s = t.then), A(s) ? (e.$$state.status = -1, s.call(t, n, i, r)) : (e.$$state.value = t, e.$$state.status = 1, u(e.$$state))
				}
				catch (e)
				{
					i(e)
				}
			}

			function f(e, t)
			{
				e.$$state.status || m(e, t)
			}

			function m(e, t)
			{
				e.$$state.value = t, e.$$state.status = 2, u(e.$$state)
			}

			function g(n, i)
			{
				var r = n.$$state.pending;
				n.$$state.status <= 0 && r && r.length && e(function ()
				{
					for (var e, n, s = 0, a = r.length; s < a; s++)
					{
						n = r[s][0], e = r[s][3];
						try
						{
							g(n, A(e) ? e(i) : i)
						}
						catch (e)
						{
							t(e)
						}
					}
				})
			}

			function v(e)
			{
				var t = new o;
				return f(t, e), t
			}

			function b(e, t, n)
			{
				var i = null;
				try
				{
					A(n) && (i = n())
				}
				catch (e)
				{
					return v(e)
				}
				return I(i) ? i.then(function ()
				{
					return t(e)
				}, v) : t(e)
			}

			function x(e, t, n, i)
			{
				var r = new o;
				return h(r, e), r.then(t, n, i)
			}

			function T(e)
			{
				var t = new o,
					n = 0,
					i = S(e) ? [] :
					{};
				return s(e, function (e, r)
				{
					n++, x(e).then(function (e)
					{
						i[r] = e, --n || h(t, i)
					}, function (e)
					{
						f(t, e)
					})
				}), 0 === n && h(t, i), t
			}

			function w(e)
			{
				var t = r();
				return s(e, function (e)
				{
					x(e).then(t.resolve, t.reject)
				}), t.promise
			}

			function _(e)
			{
				function t(e)
				{
					h(i, e)
				}

				function n(e)
				{
					f(i, e)
				}
				if (!A(e)) throw C("norslvr", "Expected resolverFn, got '{0}'", e);
				var i = new o;
				return e(t, n), i
			}
			var C = i("$q", TypeError),
				k = 0,
				q = [];
			d(o.prototype,
			{
				then: function (e, t, n)
				{
					if ($(e) && $(t) && $(n)) return this;
					var i = new o;
					return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, e, t, n]), this.$$state.status > 0 && u(this.$$state), i
				},
				catch: function (e)
				{
					return this.then(null, e)
				},
				finally: function (e, t)
				{
					return this.then(function (t)
					{
						return b(t, O, e)
					}, function (t)
					{
						return b(t, v, e)
					}, t)
				}
			});
			var O = x;
			return _.prototype = o.prototype, _.defer = r, _.reject = v, _.when = x, _.resolve = O, _.all = T, _.race = w, _
		}

		function Rn(e)
		{
			return !!e.pur
		}

		function Pn(e)
		{
			e.pur = !0
		}

		function In(e)
		{
			e.$$state && Pn(e.$$state)
		}

		function Ln()
		{
			this.$get = ["$window", "$timeout", function (e, t)
			{
				var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
					i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
					r = !!n,
					s = r ? function (e)
					{
						var t = n(e);
						return function ()
						{
							i(t)
						}
					} : function (e)
					{
						var n = t(e, 16.66, !1);
						return function ()
						{
							t.cancel(n)
						}
					};
				return s.supported = r, s
			}]
		}

		function Nn()
		{
			function e(e)
			{
				function t()
				{
					this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = c(), this.$$ChildScope = null, this.$$suspended = !1
				}
				return t.prototype = e, t
			}
			var t = 10,
				n = i("$rootScope"),
				a = null,
				o = null;
			this.digestTtl = function (e)
			{
				return arguments.length && (t = e), t
			}, this.$get = ["$exceptionHandler", "$parse", "$browser", function (i, l, u)
			{
				function d(e)
				{
					e.currentScope.$$destroyed = !0
				}

				function h(e)
				{
					9 === dr && (e.$$childHead && h(e.$$childHead), e.$$nextSibling && h(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
				}

				function p()
				{
					this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$suspended = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
				}

				function f(e)
				{
					if (_.$$phase) throw n("inprog", "{0} already in progress", _.$$phase);
					_.$$phase = e
				}

				function g()
				{
					_.$$phase = null
				}

				function v(e, t)
				{
					do {
						e.$$watchersCount += t
					} while (e = e.$parent)
				}

				function b(e, t, n)
				{
					do {
						e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
					} while (e = e.$parent)
				}

				function x()
				{}

				function T()
				{
					for (; E.length;) try
					{
						E.shift()()
					}
					catch (e)
					{
						i(e)
					}
					o = null
				}

				function w()
				{
					null === o && (o = u.defer(function ()
					{
						_.$apply(T)
					}, null, "$applyAsync"))
				}
				p.prototype = {
					constructor: p,
					$new: function (t, n)
					{
						var i;
						return n = n || this, t ? (i = new p, i.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), i = new this.$$ChildScope), i.$parent = n, i.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = i, n.$$childTail = i) : n.$$childHead = n.$$childTail = i, (t || n !== this) && i.$on("$destroy", d), i
					},
					$watch: function (e, t, n, i)
					{
						var r = l(e),
							s = A(t) ? t : m;
						if (r.$$watchDelegate) return r.$$watchDelegate(this, s, n, r, e);
						var o = this,
							c = o.$$watchers,
							u = {
								fn: s,
								last: x,
								get: r,
								exp: i || e,
								eq: !!n
							};
						return a = null, c || (c = o.$$watchers = [], c.$$digestWatchIndex = -1), c.unshift(u), c.$$digestWatchIndex++, v(this, 1),
							function ()
							{
								var e = F(c, u);
								e >= 0 && (v(o, -1), e < c.$$digestWatchIndex && c.$$digestWatchIndex--), a = null
							}
					},
					$watchGroup: function (e, t)
					{
						function n()
						{
							c = !1;
							try
							{
								l ? (l = !1, t(r, r, o)) : t(r, i, o)
							}
							finally
							{
								for (var n = 0; n < e.length; n++) i[n] = r[n]
							}
						}
						var i = new Array(e.length),
							r = new Array(e.length),
							a = [],
							o = this,
							c = !1,
							l = !0;
						if (!e.length)
						{
							var u = !0;
							return o.$evalAsync(function ()
								{
									u && t(r, r, o)
								}),
								function ()
								{
									u = !1
								}
						}
						return 1 === e.length ? this.$watch(e[0], function (e, n, s)
						{
							r[0] = e, i[0] = n, t(r, e === n ? r : i, s)
						}) : (s(e, function (e, t)
						{
							var i = o.$watch(e, function (e)
							{
								r[t] = e, c || (c = !0, o.$evalAsync(n))
							});
							a.push(i)
						}), function ()
						{
							for (; a.length;) a.shift()()
						})
					},
					$watchCollection: function (e, t)
					{
						function n(e)
						{
							s = e;
							var t, n, i, o;
							if (!$(s))
							{
								if (y(s))
									if (r(s))
									{
										a !== p && (a = p, g = a.length = 0, d++), t = s.length, g !== t && (d++, a.length = g = t);
										for (var c = 0; c < t; c++) o = a[c], i = s[c], o !== o && i !== i || o === i || (d++, a[c] = i)
									}
								else
								{
									a !== f && (a = f = {}, g = 0, d++), t = 0;
									for (n in s) br.call(s, n) && (t++, i = s[n], o = a[n], n in a ? o !== o && i !== i || o === i || (d++, a[n] = i) : (g++, a[n] = i, d++));
									if (g > t)
									{
										d++;
										for (n in a) br.call(s, n) || (g--, delete a[n])
									}
								}
								else a !== s && (a = s, d++);
								return d
							}
						}

						function i()
						{
							if (m ? (m = !1, t(s, s, c)) : t(s, o, c), u)
								if (y(s))
									if (r(s))
									{
										o = new Array(s.length);
										for (var e = 0; e < s.length; e++) o[e] = s[e]
									}
							else
							{
								o = {};
								for (var n in s) br.call(s, n) && (o[n] = s[n])
							}
							else o = s
						}
						n.$$pure = l(e).literal, n.$stateful = !n.$$pure;
						var s, a, o, c = this,
							u = t.length > 1,
							d = 0,
							h = l(e, n),
							p = [],
							f = {},
							m = !0,
							g = 0;
						return this.$watch(h, i)
					},
					$digest: function ()
					{
						var e, r, s, c, l, d, h, p, m, v, b, $ = t,
							y = C.length ? _ : this,
							w = [];
						f("$digest"), u.$$checkUrlChange(), this === _ && null !== o && (u.defer.cancel(o), T()), a = null;
						do {
							h = !1, m = y;
							for (var E = 0; E < C.length; E++)
							{
								try
								{
									b = C[E], c = b.fn, c(b.scope, b.locals)
								}
								catch (e)
								{
									i(e)
								}
								a = null
							}
							C.length = 0;
							e: do {
								if (d = !m.$$suspended && m.$$watchers)
									for (d.$$digestWatchIndex = d.length; d.$$digestWatchIndex--;) try
									{
										if (e = d[d.$$digestWatchIndex])
											if (l = e.get, (r = l(m)) === (s = e.last) || (e.eq ? W(r, s) : kr(r) && kr(s)))
											{
												if (e === a)
												{
													h = !1;
													break e
												}
											}
										else h = !0, a = e, e.last = e.eq ? B(r, null) : r, c = e.fn, c(r, s === x ? r : s, m), $ < 5 && (v = 4 - $, w[v] || (w[v] = []), w[v].push(
										{
											msg: A(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
											newVal: r,
											oldVal: s
										}))
									}
								catch (e)
								{
									i(e)
								}
								if (!(p = !m.$$suspended && m.$$watchersCount && m.$$childHead || m !== y && m.$$nextSibling))
									for (; m !== y && !(p = m.$$nextSibling);) m = m.$parent
							} while (m = p);
							if ((h || C.length) && !$--) throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, w)
						} while (h || C.length);
						for (g(); k < S.length;) try
						{
							S[k++]()
						}
						catch (e)
						{
							i(e)
						}
						S.length = k = 0, u.$$checkUrlChange()
					},
					$suspend: function ()
					{
						this.$$suspended = !0
					},
					$isSuspended: function ()
					{
						return this.$$suspended
					},
					$resume: function ()
					{
						this.$$suspended = !1
					},
					$destroy: function ()
					{
						if (!this.$$destroyed)
						{
							var e = this.$parent;
							this.$broadcast("$destroy"), this.$$destroyed = !0, this === _ && u.$$applicationDestroyed(), v(this, -this.$$watchersCount);
							for (var t in this.$$listenerCount) b(this, this.$$listenerCount[t], t);
							e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = m, this.$on = this.$watch = this.$watchGroup = function ()
							{
								return m
							}, this.$$listeners = {}, this.$$nextSibling = null, h(this)
						}
					},
					$eval: function (e, t)
					{
						return l(e)(this, t)
					},
					$evalAsync: function (e, t)
					{
						_.$$phase || C.length || u.defer(function ()
						{
							C.length && _.$digest()
						}, null, "$evalAsync"), C.push(
						{
							scope: this,
							fn: l(e),
							locals: t
						})
					},
					$$postDigest: function (e)
					{
						S.push(e)
					},
					$apply: function (e)
					{
						try
						{
							f("$apply");
							try
							{
								return this.$eval(e)
							}
							finally
							{
								g()
							}
						}
						catch (e)
						{
							i(e)
						}
						finally
						{
							try
							{
								_.$digest()
							}
							catch (e)
							{
								throw i(e), e
							}
						}
					},
					$applyAsync: function (e)
					{
						function t()
						{
							n.$eval(e)
						}
						var n = this;
						e && E.push(t), e = l(e), w()
					},
					$on: function (e, t)
					{
						var n = this.$$listeners[e];
						n || (this.$$listeners[e] = n = []), n.push(t);
						var i = this;
						do {
							i.$$listenerCount[e] || (i.$$listenerCount[e] = 0), i.$$listenerCount[e]++
						} while (i = i.$parent);
						var r = this;
						return function ()
						{
							var i = n.indexOf(t); - 1 !== i && (delete n[i], b(r, 1, e))
						}
					},
					$emit: function (e, t)
					{
						var n, r, s, a = [],
							o = this,
							c = !1,
							l = {
								name: e,
								targetScope: o,
								stopPropagation: function ()
								{
									c = !0
								},
								preventDefault: function ()
								{
									l.defaultPrevented = !0
								},
								defaultPrevented: !1
							},
							u = G([l], arguments, 1);
						do {
							for (n = o.$$listeners[e] || a, l.currentScope = o, r = 0, s = n.length; r < s; r++)
								if (n[r]) try
								{
									n[r].apply(null, u)
								}
							catch (e)
							{
								i(e)
							}
							else n.splice(r, 1), r--, s--;
							if (c) break;
							o = o.$parent
						} while (o);
						return l.currentScope = null, l
					},
					$broadcast: function (e, t)
					{
						var n = this,
							r = n,
							s = n,
							a = {
								name: e,
								targetScope: n,
								preventDefault: function ()
								{
									a.defaultPrevented = !0
								},
								defaultPrevented: !1
							};
						if (!n.$$listenerCount[e]) return a;
						for (var o, c, l, u = G([a], arguments, 1); r = s;)
						{
							for (a.currentScope = r, o = r.$$listeners[e] || [], c = 0, l = o.length; c < l; c++)
								if (o[c]) try
								{
									o[c].apply(null, u)
								}
							catch (e)
							{
								i(e)
							}
							else o.splice(c, 1), c--, l--;
							if (!(s = r.$$listenerCount[e] && r.$$childHead || r !== n && r.$$nextSibling))
								for (; r !== n && !(s = r.$$nextSibling);) r = r.$parent
						}
						return a.currentScope = null, a
					}
				};
				var _ = new p,
					C = _.$$asyncQueue = [],
					S = _.$$postDigestQueue = [],
					E = _.$$applyAsyncQueue = [],
					k = 0;
				return _
			}]
		}

		function jn()
		{
			var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
				t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
			this.aHrefSanitizationWhitelist = function (t)
			{
				return x(t) ? (e = t, this) : e
			}, this.imgSrcSanitizationWhitelist = function (e)
			{
				return x(e) ? (t = e, this) : t
			}, this.$get = function ()
			{
				return function (n, i)
				{
					var r = i ? t : e,
						s = Jn(n && n.trim()).href;
					return "" === s || s.match(r) ? n : "unsafe:" + s
				}
			}
		}

		function Hn(e)
		{
			return e.replace(ia, Ee)
		}

		function Vn(e)
		{
			if ("self" === e) return e;
			if (w(e))
			{
				if (e.indexOf("***") > -1) throw ta("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
				return e = Mr(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + e + "$")
			}
			if (k(e)) return new RegExp("^" + e.source + "$");
			throw ta("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
		}

		function Un(e)
		{
			var t = [];
			return x(e) && s(e, function (e)
			{
				t.push(Vn(e))
			}), t
		}

		function Fn()
		{
			this.SCE_CONTEXTS = na;
			var e = ["self"],
				t = [];
			this.resourceUrlWhitelist = function (t)
			{
				return arguments.length && (e = Un(t)), e
			}, this.resourceUrlBlacklist = function (e)
			{
				return arguments.length && (t = Un(e)), t
			}, this.$get = ["$injector", "$$sanitizeUri", function (n, i)
			{
				function r(e, t)
				{
					return "self" === e ? Xn(t) || Qn(t) : !!e.exec(t.href)
				}

				function s(n)
				{
					var i, s, a = Jn(n.toString()),
						o = !1;
					for (i = 0, s = e.length; i < s; i++)
						if (r(e[i], a))
						{
							o = !0;
							break
						}
					if (o)
						for (i = 0, s = t.length; i < s; i++)
							if (r(t[i], a))
							{
								o = !1;
								break
							}
					return o
				}

				function a(e)
				{
					var t = function (e)
					{
						this.$$unwrapTrustedValue = function ()
						{
							return e
						}
					};
					return e && (t.prototype = new e), t.prototype.valueOf = function ()
					{
						return this.$$unwrapTrustedValue()
					}, t.prototype.toString = function ()
					{
						return this.$$unwrapTrustedValue().toString()
					}, t
				}

				function o(e, t)
				{
					var n = h.hasOwnProperty(e) ? h[e] : null;
					if (!n) throw ta("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
					if (null === t || $(t) || "" === t) return t;
					if ("string" != typeof t) throw ta("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
					return new n(t)
				}

				function c(e)
				{
					return e instanceof d ? e.$$unwrapTrustedValue() : e
				}

				function l(e, t)
				{
					if (null === t || $(t) || "" === t) return t;
					var n = h.hasOwnProperty(e) ? h[e] : null;
					if (n && t instanceof n) return t.$$unwrapTrustedValue();
					if (A(t.$$unwrapTrustedValue) && (t = t.$$unwrapTrustedValue()), e === na.MEDIA_URL || e === na.URL) return i(t.toString(), e === na.MEDIA_URL);
					if (e === na.RESOURCE_URL)
					{
						if (s(t)) return t;
						throw ta("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
					}
					if (e === na.HTML) return u(t);
					throw ta("unsafe", "Attempting to use an unsafe value in a safe context.")
				}
				var u = function (e)
				{
					throw ta("unsafe", "Attempting to use an unsafe value in a safe context.")
				};
				n.has("$sanitize") && (u = n.get("$sanitize"));
				var d = a(),
					h = {};
				return h[na.HTML] = a(d), h[na.CSS] = a(d), h[na.MEDIA_URL] = a(d), h[na.URL] = a(h[na.MEDIA_URL]), h[na.JS] = a(d), h[na.RESOURCE_URL] = a(h[na.URL]),
				{
					trustAs: o,
					getTrusted: l,
					valueOf: c
				}
			}]
		}

		function Bn()
		{
			var e = !0;
			this.enabled = function (t)
			{
				return arguments.length && (e = !!t), e
			}, this.$get = ["$parse", "$sceDelegate", function (t, n)
			{
				if (e && dr < 8) throw ta("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
				var i = Te(na);
				i.isEnabled = function ()
				{
					return e
				}, i.trustAs = n.trustAs, i.getTrusted = n.getTrusted, i.valueOf = n.valueOf, e || (i.trustAs = i.getTrusted = function (e, t)
				{
					return t
				}, i.valueOf = g), i.parseAs = function (e, n)
				{
					var r = t(n);
					return r.literal && r.constant ? r : t(n, function (t)
					{
						return i.getTrusted(e, t)
					})
				};
				var r = i.parseAs,
					a = i.getTrusted,
					o = i.trustAs;
				return s(na, function (e, t)
				{
					var n = $r(t);
					i[Hn("parse_as_" + n)] = function (t)
					{
						return r(e, t)
					}, i[Hn("get_trusted_" + n)] = function (t)
					{
						return a(e, t)
					}, i[Hn("trust_as_" + n)] = function (t)
					{
						return o(e, t)
					}
				}), i
			}]
		}

		function zn()
		{
			this.$get = ["$window", "$document", function (e, t)
			{
				var n = {},
					i = e.nw && e.nw.process,
					r = !i && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id),
					s = !r && e.history && e.history.pushState,
					a = p((/android (\d+)/.exec($r((e.navigator ||
					{}).userAgent)) || [])[1]),
					o = /Boxee/i.test((e.navigator ||
					{}).userAgent),
					c = t[0] ||
					{},
					l = c.body && c.body.style,
					u = !1,
					d = !1;
				return l && (u = !!("transition" in l || "webkitTransition" in l), d = !!("animation" in l || "webkitAnimation" in l)),
				{
					history: !(!s || a < 4 || o),
					hasEvent: function (e)
					{
						if ("input" === e && dr) return !1;
						if ($(n[e]))
						{
							var t = c.createElement("div");
							n[e] = "on" + e in t
						}
						return n[e]
					},
					csp: Dr(),
					transitions: u,
					animations: d,
					android: a
				}
			}]
		}

		function Wn()
		{
			this.$get = v(function (e)
			{
				return new Gn(e)
			})
		}

		function Gn(e)
		{
			function t(t, s)
			{
				s = s || d;
				try
				{
					t()
				}
				finally
				{
					n(s);
					var a = c[s],
						o = c[u];
					if (!o || !a)
						for (var l, h = o ? r : i; l = h(s);) try
						{
							l()
						}
					catch (t)
					{
						e.error(t)
					}
				}
			}

			function n(e)
			{
				e = e || d, c[e] && (c[e]--, c[u]--)
			}

			function i()
			{
				var e = l.pop();
				return e && e.cb
			}

			function r(e)
			{
				for (var t = l.length - 1; t >= 0; --t)
				{
					var n = l[t];
					if (n.type === e) return l.splice(t, 1), n.cb
				}
			}

			function s(e)
			{
				e = e || d, c[e] = (c[e] || 0) + 1, c[u] = (c[u] || 0) + 1
			}

			function a(e, t)
			{
				t = t || u, c[t] ? l.push(
				{
					type: t,
					cb: e
				}) : e()
			}
			var o = this,
				c = {},
				l = [],
				u = o.ALL_TASKS_TYPE = "$$all$$",
				d = o.DEFAULT_TASK_TYPE = "$$default$$";
			o.completeTask = t, o.incTaskCount = s, o.notifyWhenNoPendingTasks = a
		}

		function Kn()
		{
			var e;
			this.httpOptions = function (t)
			{
				return t ? (e = t, this) : e
			}, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (t, n, i, r, s)
			{
				function a(o, c)
				{
					function l(e)
					{
						return c || (e = ra("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", o, e.status, e.statusText), t(e)), r.reject(e)
					}
					a.totalPendingRequests++, w(o) && !$(n.get(o)) || (o = s.getTrustedResourceUrl(o));
					var u = i.defaults && i.defaults.transformResponse;
					return S(u) ? u = u.filter(function (e)
					{
						return e !== Nt
					}) : u === Nt && (u = null), i.get(o, d(
					{
						cache: n,
						transformResponse: u
					}, e)).finally(function ()
					{
						a.totalPendingRequests--
					}).then(function (e)
					{
						return n.put(o, e.data)
					}, l)
				}
				return a.totalPendingRequests = 0, a
			}]
		}

		function Zn()
		{
			this.$get = ["$rootScope", "$browser", "$location", function (e, t, n)
			{
				var i = {};
				return i.findBindings = function (e, t, n)
				{
					var i = e.getElementsByClassName("ng-binding"),
						r = [];
					return s(i, function (e)
					{
						var i = Er.element(e).data("$binding");
						i && s(i, function (i)
						{
							if (n)
							{
								new RegExp("(^|\\s)" + Mr(t) + "(\\s|\\||$)").test(i) && r.push(e)
							}
							else -1 !== i.indexOf(t) && r.push(e)
						})
					}), r
				}, i.findModels = function (e, t, n)
				{
					for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r)
					{
						var s = n ? "=" : "*=",
							a = "[" + i[r] + "model" + s + '"' + t + '"]',
							o = e.querySelectorAll(a);
						if (o.length) return o
					}
				}, i.getLocation = function ()
				{
					return n.url()
				}, i.setLocation = function (t)
				{
					t !== n.url() && (n.url(t), e.$digest())
				}, i.whenStable = function (e)
				{
					t.notifyWhenNoOutstandingRequests(e)
				}, i
			}]
		}

		function Yn()
		{
			this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, i, r)
			{
				function s(s, o, c)
				{
					A(s) || (c = o, o = s, s = m);
					var l, u = K(arguments, 3),
						d = x(c) && !c,
						h = (d ? i : n).defer(),
						p = h.promise;
					return l = t.defer(function ()
					{
						try
						{
							h.resolve(s.apply(null, u))
						}
						catch (e)
						{
							h.reject(e), r(e)
						}
						finally
						{
							delete a[p.$$timeoutId]
						}
						d || e.$apply()
					}, o, "$timeout"), p.$$timeoutId = l, a[l] = h, p
				}
				var a = {};
				return s.cancel = function (e)
				{
					if (!e) return !1;
					if (!e.hasOwnProperty("$$timeoutId")) throw sa("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");
					if (!a.hasOwnProperty(e.$$timeoutId)) return !1;
					var n = e.$$timeoutId,
						i = a[n];
					return In(i.promise), i.reject("canceled"), delete a[n], t.defer.cancel(n)
				}, s
			}]
		}

		function Jn(e)
		{
			if (!w(e)) return e;
			var t = e;
			dr && (aa.setAttribute("href", t), t = aa.href), aa.setAttribute("href", t);
			var n = aa.hostname;
			return !ca && n.indexOf(":") > -1 && (n = "[" + n + "]"),
			{
				href: aa.href,
				protocol: aa.protocol ? aa.protocol.replace(/:$/, "") : "",
				host: aa.host,
				search: aa.search ? aa.search.replace(/^\?/, "") : "",
				hash: aa.hash ? aa.hash.replace(/^#/, "") : "",
				hostname: n,
				port: aa.port,
				pathname: "/" === aa.pathname.charAt(0) ? aa.pathname : "/" + aa.pathname
			}
		}

		function Xn(e)
		{
			return ti(e, oa)
		}

		function Qn(e)
		{
			return ti(e, ni())
		}

		function ei(e)
		{
			var t = [oa].concat(e.map(Jn));
			return function (e)
			{
				var n = Jn(e);
				return t.some(ti.bind(null, n))
			}
		}

		function ti(e, t)
		{
			return e = Jn(e), t = Jn(t), e.protocol === t.protocol && e.host === t.host
		}

		function ni()
		{
			return e.document.baseURI ? e.document.baseURI : (ea || (ea = e.document.createElement("a"), ea.href = ".", ea = ea.cloneNode(!1)), ea.href)
		}

		function ii()
		{
			this.$get = v(e)
		}

		function ri(e)
		{
			function t(e)
			{
				try
				{
					return e.cookie || ""
				}
				catch (e)
				{
					return ""
				}
			}

			function n(e)
			{
				try
				{
					return decodeURIComponent(e)
				}
				catch (t)
				{
					return e
				}
			}
			var i = e[0] ||
				{},
				r = {},
				s = "";
			return function ()
			{
				var e, a, o, c, l, u = t(i);
				if (u !== s)
					for (s = u, e = s.split("; "), r = {}, o = 0; o < e.length; o++) a = e[o], (c = a.indexOf("=")) > 0 && (l = n(a.substring(0, c)), $(r[l]) && (r[l] = n(a.substring(c + 1))));
				return r
			}
		}

		function si()
		{
			this.$get = ri
		}

		function ai(e)
		{
			function t(i, r)
			{
				if (y(i))
				{
					var a = {};
					return s(i, function (e, n)
					{
						a[n] = t(n, e)
					}), a
				}
				return e.factory(i + n, r)
			}
			var n = "Filter";
			this.register = t, this.$get = ["$injector", function (e)
			{
				return function (t)
				{
					return e.get(t + n)
				}
			}], t("currency", di), t("date", Si), t("filter", oi), t("json", Ei), t("limitTo", Ai), t("lowercase", ma), t("number", hi), t("orderBy", qi), t("uppercase", ga)
		}

		function oi()
		{
			return function (e, t, n, s)
			{
				if (!r(e))
				{
					if (null == e) return e;
					throw i("filter")("notarray", "Expected array but received: {0}", e)
				}
				s = s || "$";
				var a, o, c = ui(t);
				switch (c)
				{
					case "function":
						a = t;
						break;
					case "boolean":
					case "null":
					case "number":
					case "string":
						o = !0;
					case "object":
						a = ci(t, n, s, o);
						break;
					default:
						return e
				}
				return Array.prototype.filter.call(e, a)
			}
		}

		function ci(e, t, n, i)
		{
			var r = y(e) && n in e;
			return !0 === t ? t = W : A(t) || (t = function (e, t)
				{
					return !$(e) && (null === e || null === t ? e === t : !(y(t) || y(e) && !b(e)) && (e = $r("" + e), t = $r("" + t), -1 !== e.indexOf(t)))
				}),
				function (s)
				{
					return r && !y(s) ? li(s, e[n], t, n, !1) : li(s, e, t, n, i)
				}
		}

		function li(e, t, n, i, r, s)
		{
			var a = ui(e),
				o = ui(t);
			if ("string" === o && "!" === t.charAt(0)) return !li(e, t.substring(1), n, i, r);
			if (S(e)) return e.some(function (e)
			{
				return li(e, t, n, i, r)
			});
			switch (a)
			{
				case "object":
					var c;
					if (r)
					{
						for (c in e)
							if (c.charAt && "$" !== c.charAt(0) && li(e[c], t, n, i, !0)) return !0;
						return !s && li(e, t, n, i, !1)
					}
					if ("object" === o)
					{
						for (c in t)
						{
							var l = t[c];
							if (!A(l) && !$(l))
							{
								var u = c === i;
								if (!li(u ? e : e[c], l, n, i, u, u)) return !1
							}
						}
						return !0
					}
					return n(e, t);
				case "function":
					return !1;
				default:
					return n(e, t)
			}
		}

		function ui(e)
		{
			return null === e ? "null" : typeof e
		}

		function di(e)
		{
			var t = e.NUMBER_FORMATS;
			return function (e, n, i)
			{
				$(n) && (n = t.CURRENCY_SYM), $(i) && (i = t.PATTERNS[1].maxFrac);
				var r = n ? /\u00A4/g : /\s*\u00A4\s*/g;
				return null == e ? e : mi(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, i).replace(r, n)
			}
		}

		function hi(e)
		{
			var t = e.NUMBER_FORMATS;
			return function (e, n)
			{
				return null == e ? e : mi(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
			}
		}

		function pi(e)
		{
			var t, n, i, r, s, a = 0;
			for ((n = e.indexOf(ua)) > -1 && (e = e.replace(ua, "")), (i = e.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +e.slice(i + 1), e = e.substring(0, i)) : n < 0 && (n = e.length), i = 0; e.charAt(i) === da; i++);
			if (i === (s = e.length)) t = [0], n = 1;
			else
			{
				for (s--; e.charAt(s) === da;) s--;
				for (n -= i, t = [], r = 0; i <= s; i++, r++) t[r] = +e.charAt(i)
			}
			return n > la && (t = t.splice(0, la - 1), a = n - 1, n = 1),
			{
				d: t,
				e: a,
				i: n
			}
		}

		function fi(e, t, n, i)
		{
			var r = e.d,
				s = r.length - e.i;
			t = $(t) ? Math.min(Math.max(n, s), i) : +t;
			var a = t + e.i,
				o = r[a];
			if (a > 0)
			{
				r.splice(Math.max(e.i, a));
				for (var c = a; c < r.length; c++) r[c] = 0
			}
			else
			{
				s = Math.max(0, s), e.i = 1, r.length = Math.max(1, a = t + 1), r[0] = 0;
				for (var l = 1; l < a; l++) r[l] = 0
			}
			if (o >= 5)
				if (a - 1 < 0)
				{
					for (var u = 0; u > a; u--) r.unshift(0), e.i++;
					r.unshift(1), e.i++
				}
			else r[a - 1]++;
			for (; s < Math.max(0, t); s++) r.push(0);
			var d = r.reduceRight(function (e, t, n, i)
			{
				return t += e, i[n] = t % 10, Math.floor(t / 10)
			}, 0);
			d && (r.unshift(d), e.i++)
		}

		function mi(e, t, n, i, r)
		{
			if (!w(e) && !_(e) || isNaN(e)) return "";
			var s, a = !isFinite(e),
				o = !1,
				c = Math.abs(e) + "",
				l = "";
			if (a) l = "∞";
			else
			{
				s = pi(c), fi(s, r, t.minFrac, t.maxFrac);
				var u = s.d,
					d = s.i,
					h = s.e,
					p = [];
				for (o = u.reduce(function (e, t)
					{
						return e && !t
					}, !0); d < 0;) u.unshift(0), d++;
				d > 0 ? p = u.splice(d, u.length) : (p = u, u = [0]);
				var f = [];
				for (u.length >= t.lgSize && f.unshift(u.splice(-t.lgSize, u.length).join("")); u.length > t.gSize;) f.unshift(u.splice(-t.gSize, u.length).join(""));
				u.length && f.unshift(u.join("")), l = f.join(n), p.length && (l += i + p.join("")), h && (l += "e+" + h)
			}
			return e < 0 && !o ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf
		}

		function gi(e, t, n, i)
		{
			var r = "";
			for ((e < 0 || i && e <= 0) && (i ? e = 1 - e : (e = -e, r = "-")), e = "" + e; e.length < t;) e = da + e;
			return n && (e = e.substr(e.length - t)), r + e
		}

		function vi(e, t, n, i, r)
		{
			return n = n || 0,
				function (s)
				{
					var a = s["get" + e]();
					return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), gi(a, t, i, r)
				}
		}

		function bi(e, t, n)
		{
			return function (i, r)
			{
				var s = i["get" + e]();
				return r[xr((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][s]
			}
		}

		function $i(e, t, n)
		{
			var i = -1 * n,
				r = i >= 0 ? "+" : "";
			return r += gi(Math[i > 0 ? "floor" : "ceil"](i / 60), 2) + gi(Math.abs(i % 60), 2)
		}

		function xi(e)
		{
			var t = new Date(e, 0, 1).getDay();
			return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
		}

		function yi(e)
		{
			return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
		}

		function Ti(e)
		{
			return function (t)
			{
				var n = xi(t.getFullYear()),
					i = yi(t),
					r = +i - +n;
				return gi(1 + Math.round(r / 6048e5), e)
			}
		}

		function wi(e, t)
		{
			return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
		}

		function _i(e, t)
		{
			return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
		}

		function Ci(e, t)
		{
			return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
		}

		function Si(e)
		{
			function t(e)
			{
				var t;
				if (t = e.match(n))
				{
					var i = new Date(0),
						r = 0,
						s = 0,
						a = t[8] ? i.setUTCFullYear : i.setFullYear,
						o = t[8] ? i.setUTCHours : i.setHours;
					t[9] && (r = p(t[9] + t[10]), s = p(t[9] + t[11])), a.call(i, p(t[1]), p(t[2]) - 1, p(t[3]));
					var c = p(t[4] || 0) - r,
						l = p(t[5] || 0) - s,
						u = p(t[6] || 0),
						d = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
					return o.call(i, c, l, u, d), i
				}
				return e
			}
			var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
			return function (n, i, r)
			{
				var a, o, c = "",
					l = [];
				if (i = i || "mediumDate", i = e.DATETIME_FORMATS[i] || i, w(n) && (n = fa.test(n) ? p(n) : t(n)), _(n) && (n = new Date(n)), !C(n) || !isFinite(n.getTime())) return n;
				for (; i;) o = pa.exec(i), o ? (l = G(l, o, 1), i = l.pop()) : (l.push(i), i = null);
				var u = n.getTimezoneOffset();
				return r && (u = Q(r, u), n = te(n, r, !0)), s(l, function (t)
				{
					a = ha[t], c += a ? a(n, e.DATETIME_FORMATS, u) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
				}), c
			}
		}

		function Ei()
		{
			return function (e, t)
			{
				return $(t) && (t = 2), J(e, t)
			}
		}

		function Ai()
		{
			return function (e, t, n)
			{
				return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : p(t), kr(t) ? e : (_(e) && (e = e.toString()), r(e) ? (n = !n || isNaN(n) ? 0 : p(n), n = n < 0 ? Math.max(0, e.length + n) : n, t >= 0 ? ki(e, n, n + t) : 0 === n ? ki(e, t, e.length) : ki(e, Math.max(0, n + t), n)) : e)
			}
		}

		function ki(e, t, n)
		{
			return w(e) ? e.slice(t, n) : yr.call(e, t, n)
		}

		function qi(e)
		{
			function t(t)
			{
				return t.map(function (t)
				{
					var n = 1,
						i = g;
					if (A(t)) i = t;
					else if (w(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (n = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (i = e(t), i.constant)))
					{
						var r = i();
						i = function (e)
						{
							return e[r]
						}
					}
					return {
						get: i,
						descending: n
					}
				})
			}

			function n(e)
			{
				switch (typeof e)
				{
					case "number":
					case "boolean":
					case "string":
						return !0;
					default:
						return !1
				}
			}

			function s(e)
			{
				return A(e.valueOf) && (e = e.valueOf(), n(e)) ? e : (b(e) && (e = e.toString(), n(e)), e)
			}

			function a(e, t)
			{
				var n = typeof e;
				return null === e ? n = "null" : "object" === n && (e = s(e)),
				{
					value: e,
					type: n,
					index: t
				}
			}

			function o(e, t)
			{
				var n = 0,
					i = e.type,
					r = t.type;
				if (i === r)
				{
					var s = e.value,
						a = t.value;
					"string" === i ? (s = s.toLowerCase(), a = a.toLowerCase()) : "object" === i && (y(s) && (s = e.index), y(a) && (a = t.index)), s !== a && (n = s < a ? -1 : 1)
				}
				else n = "undefined" === i ? 1 : "undefined" === r ? -1 : "null" === i ? 1 : "null" === r ? -1 : i < r ? -1 : 1;
				return n
			}
			return function (e, n, s, c)
			{
				function l(e, t)
				{
					return {
						value: e,
						tieBreaker:
						{
							value: t,
							type: "number",
							index: t
						},
						predicateValues: d.map(function (n)
						{
							return a(n.get(e), t)
						})
					}
				}

				function u(e, t)
				{
					for (var n = 0, i = d.length; n < i; n++)
					{
						var r = p(e.predicateValues[n], t.predicateValues[n]);
						if (r) return r * d[n].descending * h
					}
					return (p(e.tieBreaker, t.tieBreaker) || o(e.tieBreaker, t.tieBreaker)) * h
				}
				if (null == e) return e;
				if (!r(e)) throw i("orderBy")("notarray", "Expected array but received: {0}", e);
				S(n) || (n = [n]), 0 === n.length && (n = ["+"]);
				var d = t(n),
					h = s ? -1 : 1,
					p = A(c) ? c : o,
					f = Array.prototype.map.call(e, l);
				return f.sort(u), e = f.map(function (e)
				{
					return e.value
				})
			}
		}

		function Oi(e)
		{
			return A(e) && (e = {
				link: e
			}), e.restrict = e.restrict || "AC", v(e)
		}

		function Mi(e, t)
		{
			e.$name = t
		}

		function Di(e, t, n, i, r)
		{
			this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = r(t.name || t.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = $a, this.$$element = e, this.$$animate = i, Ri(this)
		}

		function Ri(e)
		{
			e.$$classCache = {}, e.$$classCache[io] = !(e.$$classCache[no] = e.$$element.hasClass(no))
		}

		function Pi(e)
		{
			function t(e, t, n, i)
			{
				e[t] || (e[t] = {}), a(e[t], n, i)
			}

			function n(e, t, n, i)
			{
				e[t] && o(e[t], n, i), Ii(e[t]) && (e[t] = void 0)
			}

			function i(e, t, n)
			{
				n && !e.$$classCache[t] ? (e.$$animate.addClass(e.$$element, t), e.$$classCache[t] = !0) : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), e.$$classCache[t] = !1)
			}

			function r(e, t, n)
			{
				t = t ? "-" + pe(t, "-") : "", i(e, no + t, !0 === n), i(e, io + t, !1 === n)
			}
			var s = e.clazz,
				a = e.set,
				o = e.unset;
			s.prototype.$setValidity = function (e, s, c)
			{
				$(s) ? t(this, "$pending", e, c) : n(this, "$pending", e, c), P(s) ? s ? (o(this.$error, e, c), a(this.$$success, e, c)) : (a(this.$error, e, c), o(this.$$success, e, c)) : (o(this.$error, e, c), o(this.$$success, e, c)), this.$pending ? (i(this, xa, !0), this.$valid = this.$invalid = void 0, r(this, "", null)) : (i(this, xa, !1), this.$valid = Ii(this.$error), this.$invalid = !this.$valid, r(this, "", this.$valid));
				var l;
				l = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null), r(this, e, l), this.$$parentForm.$setValidity(e, l, this)
			}
		}

		function Ii(e)
		{
			if (e)
				for (var t in e)
					if (e.hasOwnProperty(t)) return !1;
			return !0
		}

		function Li(e)
		{
			e.$formatters.push(function (t)
			{
				return e.$isEmpty(t) ? t : t.toString()
			})
		}

		function Ni(e, t, n, i, r, s)
		{
			ji(e, t, n, i, r, s), Li(i)
		}

		function ji(e, t, n, i, r, s)
		{
			var a = $r(t[0].type);
			if (!r.android)
			{
				var o = !1;
				t.on("compositionstart", function ()
				{
					o = !0
				}), t.on("compositionupdate", function (e)
				{
					($(e.data) || "" === e.data) && (o = !1)
				}), t.on("compositionend", function ()
				{
					o = !1, l()
				})
			}
			var c, l = function (e)
			{
				if (c && (s.defer.cancel(c), c = null), !o)
				{
					var r = t.val(),
						l = e && e.type;
					"password" === a || n.ngTrim && "false" === n.ngTrim || (r = Or(r)), (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, l)
				}
			};
			if (r.hasEvent("input")) t.on("input", l);
			else
			{
				var u = function (e, t, n)
				{
					c || (c = s.defer(function ()
					{
						c = null, t && t.value === n || l(e)
					}))
				};
				t.on("keydown", function (e)
				{
					var t = e.keyCode;
					91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || u(e, this, this.value)
				}), r.hasEvent("paste") && t.on("paste cut drop", u)
			}
			t.on("change", l), Ra[a] && i.$$hasNativeValidators && a === n.type && t.on(Da, function (e)
			{
				if (!c)
				{
					var t = this[vr],
						n = t.badInput,
						i = t.typeMismatch;
					c = s.defer(function ()
					{
						c = null, t.badInput === n && t.typeMismatch === i || l(e)
					})
				}
			}), i.$render = function ()
			{
				var e = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
				t.val() !== e && t.val(e)
			}
		}

		function Hi(e, t)
		{
			if (C(e)) return e;
			if (w(e))
			{
				qa.lastIndex = 0;
				var n = qa.exec(e);
				if (n)
				{
					var i = +n[1],
						r = +n[2],
						s = 0,
						a = 0,
						o = 0,
						c = 0,
						l = xi(i),
						u = 7 * (r - 1);
					return t && (s = t.getHours(), a = t.getMinutes(), o = t.getSeconds(), c = t.getMilliseconds()), new Date(i, 0, l.getDate() + u, s, a, o, c)
				}
			}
			return NaN
		}

		function Vi(e, t)
		{
			return function (n, i)
			{
				var r, a;
				if (C(n)) return n;
				if (w(n))
				{
					if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), _a.test(n)) return new Date(n);
					if (e.lastIndex = 0, r = e.exec(n))
					{
						r.shift(), a = i ?
						{
							yyyy: i.getFullYear(),
							MM: i.getMonth() + 1,
							dd: i.getDate(),
							HH: i.getHours(),
							mm: i.getMinutes(),
							ss: i.getSeconds(),
							sss: i.getMilliseconds() / 1e3
						} :
						{
							yyyy: 1970,
							MM: 1,
							dd: 1,
							HH: 0,
							mm: 0,
							ss: 0,
							sss: 0
						}, s(r, function (e, n)
						{
							n < t.length && (a[t[n]] = +e)
						});
						var o = new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0);
						return a.yyyy < 100 && o.setFullYear(a.yyyy), o
					}
				}
				return NaN
			}
		}

		function Ui(e, t, n, i)
		{
			return function (r, s, a, o, c, l, u, d)
			{
				function h(e)
				{
					return e && !(e.getTime && e.getTime() !== e.getTime())
				}

				function p(e)
				{
					return x(e) && !C(e) ? f(e) || void 0 : e
				}

				function f(e, t)
				{
					var i = o.$options.getOption("timezone");
					v && v !== i && (t = ee(t, Q(v)));
					var r = n(e, t);
					return !isNaN(r) && i && (r = te(r, i)), r
				}

				function m(e, t)
				{
					var n = i;
					b && w(o.$options.getOption("timeSecondsFormat")) && (n = i.replace("ss.sss", o.$options.getOption("timeSecondsFormat")).replace(/:$/, ""));
					var r = u("date")(e, n, t);
					return b && o.$options.getOption("timeStripZeroSeconds") && (r = r.replace(/(?::00)?(?:\.000)?$/, "")), r
				}
				Fi(r, s, a, o, e), ji(r, s, a, o, c, l);
				var g, v, b = "time" === e || "datetimelocal" === e;
				if (o.$parsers.push(function (n)
					{
						return o.$isEmpty(n) ? null : t.test(n) ? f(n, g) : void(o.$$parserName = e)
					}), o.$formatters.push(function (e)
					{
						if (e && !C(e)) throw ao("datefmt", "Expected `{0}` to be a date", e);
						if (h(e))
						{
							g = e;
							var t = o.$options.getOption("timezone");
							return t && (v = t, g = te(g, t, !0)), m(e, t)
						}
						return g = null, v = null, ""
					}), x(a.min) || a.ngMin)
				{
					var y = a.min || d(a.ngMin)(r),
						T = p(y);
					o.$validators.min = function (e)
					{
						return !h(e) || $(T) || n(e) >= T
					}, a.$observe("min", function (e)
					{
						e !== y && (T = p(e), y = e, o.$validate())
					})
				}
				if (x(a.max) || a.ngMax)
				{
					var _ = a.max || d(a.ngMax)(r),
						S = p(_);
					o.$validators.max = function (e)
					{
						return !h(e) || $(S) || n(e) <= S
					}, a.$observe("max", function (e)
					{
						e !== _ && (S = p(e), _ = e, o.$validate())
					})
				}
			}
		}

		function Fi(e, t, n, i, r)
		{
			var s = t[0];
			(i.$$hasNativeValidators = y(s.validity)) && i.$parsers.push(function (e)
			{
				var n = t.prop(vr) ||
				{};
				return n.badInput || n.typeMismatch ? void(i.$$parserName = r) : e
			})
		}

		function Bi(e)
		{
			e.$parsers.push(function (t)
			{
				return e.$isEmpty(t) ? null : Ea.test(t) ? parseFloat(t) : void(e.$$parserName = "number")
			}), e.$formatters.push(function (t)
			{
				if (!e.$isEmpty(t))
				{
					if (!_(t)) throw ao("numfmt", "Expected `{0}` to be a number", t);
					t = t.toString()
				}
				return t
			})
		}

		function zi(e)
		{
			return x(e) && !_(e) && (e = parseFloat(e)), kr(e) ? void 0 : e
		}

		function Wi(e)
		{
			return (0 | e) === e
		}

		function Gi(e)
		{
			var t = e.toString(),
				n = t.indexOf(".");
			if (-1 === n)
			{
				if (-1 < e && e < 1)
				{
					var i = /e-(\d+)$/.exec(t);
					if (i) return Number(i[1])
				}
				return 0
			}
			return t.length - n - 1
		}

		function Ki(e, t, n)
		{
			var i = Number(e),
				r = !Wi(i),
				s = !Wi(t),
				a = !Wi(n);
			if (r || s || a)
			{
				var o = r ? Gi(i) : 0,
					c = s ? Gi(t) : 0,
					l = a ? Gi(n) : 0,
					u = Math.max(o, c, l),
					d = Math.pow(10, u);
				i *= d, t *= d, n *= d, r && (i = Math.round(i)), s && (t = Math.round(t)), a && (n = Math.round(n))
			}
			return (i - t) % n == 0
		}

		function Zi(e, t, n, i, r, s, a, o)
		{
			Fi(e, t, n, i, "number"), Bi(i), ji(e, t, n, i, r, s);
			var c;
			if (x(n.min) || n.ngMin)
			{
				var l = n.min || o(n.ngMin)(e);
				c = zi(l), i.$validators.min = function (e, t)
				{
					return i.$isEmpty(t) || $(c) || t >= c
				}, n.$observe("min", function (e)
				{
					e !== l && (c = zi(e), l = e, i.$validate())
				})
			}
			if (x(n.max) || n.ngMax)
			{
				var u = n.max || o(n.ngMax)(e),
					d = zi(u);
				i.$validators.max = function (e, t)
				{
					return i.$isEmpty(t) || $(d) || t <= d
				}, n.$observe("max", function (e)
				{
					e !== u && (d = zi(e), u = e, i.$validate())
				})
			}
			if (x(n.step) || n.ngStep)
			{
				var h = n.step || o(n.ngStep)(e),
					p = zi(h);
				i.$validators.step = function (e, t)
				{
					return i.$isEmpty(t) || $(p) || Ki(t, c || 0, p)
				}, n.$observe("step", function (e)
				{
					e !== h && (p = zi(e), h = e, i.$validate())
				})
			}
		}

		function Yi(e, t, n, i, r, s)
		{
			function a(e, i)
			{
				t.attr(e, n[e]);
				var r = n[e];
				n.$observe(e, function (e)
				{
					e !== r && (r = e, i(e))
				})
			}

			function o(e)
			{
				if (d = zi(e), !kr(i.$modelValue))
					if (u)
					{
						var n = t.val();
						d > n && (n = d, t.val(n)), i.$setViewValue(n)
					}
				else i.$validate()
			}

			function c(e)
			{
				if (h = zi(e), !kr(i.$modelValue))
					if (u)
					{
						var n = t.val();
						h < n && (t.val(h), n = h < d ? d : h), i.$setViewValue(n)
					}
				else i.$validate()
			}

			function l(e)
			{
				p = zi(e), kr(i.$modelValue) || (u ? i.$viewValue !== t.val() && i.$setViewValue(t.val()) : i.$validate())
			}
			Fi(e, t, n, i, "range"), Bi(i), ji(e, t, n, i, r, s);
			var u = i.$$hasNativeValidators && "range" === t[0].type,
				d = u ? 0 : void 0,
				h = u ? 100 : void 0,
				p = u ? 1 : void 0,
				f = t[0].validity,
				m = x(n.min),
				g = x(n.max),
				v = x(n.step),
				b = i.$render;
			i.$render = u && x(f.rangeUnderflow) && x(f.rangeOverflow) ? function ()
			{
				b(), i.$setViewValue(t.val())
			} : b, m && (d = zi(n.min), i.$validators.min = u ? function ()
			{
				return !0
			} : function (e, t)
			{
				return i.$isEmpty(t) || $(d) || t >= d
			}, a("min", o)), g && (h = zi(n.max), i.$validators.max = u ? function ()
			{
				return !0
			} : function (e, t)
			{
				return i.$isEmpty(t) || $(h) || t <= h
			}, a("max", c)), v && (p = zi(n.step), i.$validators.step = u ? function ()
			{
				return !f.stepMismatch
			} : function (e, t)
			{
				return i.$isEmpty(t) || $(p) || Ki(t, d || 0, p)
			}, a("step", l))
		}

		function Ji(e, t, n, i, r, s)
		{
			ji(e, t, n, i, r, s), Li(i), i.$validators.url = function (e, t)
			{
				var n = e || t;
				return i.$isEmpty(n) || Ca.test(n)
			}
		}

		function Xi(e, t, n, i, r, s)
		{
			ji(e, t, n, i, r, s), Li(i), i.$validators.email = function (e, t)
			{
				var n = e || t;
				return i.$isEmpty(n) || Sa.test(n)
			}
		}

		function Qi(e, t, n, i)
		{
			var r = !n.ngTrim || "false" !== Or(n.ngTrim);
			$(n.name) && t.attr("name", c());
			var s = function (e)
			{
				var s;
				t[0].checked && (s = n.value, r && (s = Or(s)), i.$setViewValue(s, e && e.type))
			};
			t.on("change", s), i.$render = function ()
			{
				var e = n.value;
				r && (e = Or(e)), t[0].checked = e === i.$viewValue
			}, n.$observe("value", i.$render)
		}

		function er(e, t, n, i, r)
		{
			var s;
			if (x(i))
			{
				if (s = e(i), !s.constant) throw ao("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
				return s(t)
			}
			return r
		}

		function tr(e, t, n, i, r, s, a, o)
		{
			var c = er(o, e, "ngTrueValue", n.ngTrueValue, !0),
				l = er(o, e, "ngFalseValue", n.ngFalseValue, !1),
				u = function (e)
				{
					i.$setViewValue(t[0].checked, e && e.type)
				};
			t.on("change", u), i.$render = function ()
			{
				t[0].checked = i.$viewValue
			}, i.$isEmpty = function (e)
			{
				return !1 === e
			}, i.$formatters.push(function (e)
			{
				return W(e, c)
			}), i.$parsers.push(function (e)
			{
				return e ? c : l
			})
		}

		function nr(e, t)
		{
			function n(e, t)
			{
				if (!e || !e.length) return [];
				if (!t || !t.length) return e;
				var n = [];
				e: for (var i = 0; i < e.length; i++)
				{
					for (var r = e[i], s = 0; s < t.length; s++)
						if (r === t[s]) continue e;
					n.push(r)
				}
				return n
			}

			function i(e)
			{
				return e && e.split(" ")
			}

			function r(e)
			{
				if (!e) return e;
				var t = e;
				return S(e) ? t = e.map(r).join(" ") : y(e) ? t = Object.keys(e).filter(function (t)
				{
					return e[t]
				}).join(" ") : w(e) || (t = e + ""), t
			}
			e = "ngClass" + e;
			var a;
			return ["$parse", function (o)
			{
				return {
					restrict: "AC",
					link: function (c, l, u)
					{
						function d(e)
						{
							e = f(i(e), 1), u.$addClass(e)
						}

						function h(e)
						{
							e = f(i(e), -1), u.$removeClass(e)
						}

						function p(e, t)
						{
							var r = i(e),
								s = i(t),
								a = n(r, s),
								o = n(s, r),
								c = f(a, -1),
								l = f(o, 1);
							u.$addClass(l), u.$removeClass(c)
						}

						function f(e, t)
						{
							var n = [];
							return s(e, function (e)
							{
								(t > 0 || b[e]) && (b[e] = (b[e] || 0) + t, b[e] === +(t > 0) && n.push(e))
							}), n.join(" ")
						}

						function m(e)
						{
							e === t ? d(v) : h(v), $ = e
						}

						function g(e)
						{
							$ === t && p(v, e), v = e
						}
						var v, b = l.data("$classCounts"),
							$ = !0;
						b || (b = $e(), l.data("$classCounts", b)), "ngClass" !== e && (a || (a = o("$index", function (e)
						{
							return 1 & e
						})), c.$watch(a, m)), c.$watch(o(u[e], r), g)
					}
				}
			}]
		}

		function ir(e, t, n, i, r, s)
		{
			return {
				restrict: "A",
				compile: function (a, o)
				{
					var c = e(o[i]);
					return function (e, i)
					{
						i.on(r, function (i)
						{
							var r = function ()
							{
								c(e,
								{
									$event: i
								})
							};
							if (t.$$phase)
								if (s) e.$evalAsync(r);
								else try
								{
									r()
								}
							catch (e)
							{
								n(e)
							}
							else e.$apply(r)
						})
					}
				}
			}
		}

		function rr(e, t, n, i, r, s, a, o, c)
		{
			this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(e), this.$$parentForm = $a, this.$options = oo, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = r(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = e, this.$$rootScope = e.$root, this.$$attr = n, this.$$element = i, this.$$animate = s, this.$$timeout = a, this.$$parse = r, this.$$q = o, this.$$exceptionHandler = t, Ri(this), sr(this)
		}

		function sr(e)
		{
			e.$$scope.$watch(function (t)
			{
				var n = e.$$ngModelGet(t);
				return n === e.$modelValue || e.$modelValue !== e.$modelValue && n !== n || e.$$setModelValue(n), n
			})
		}

		function ar(e)
		{
			this.$$options = e
		}

		function or(e, t)
		{
			s(t, function (t, n)
			{
				x(e[n]) || (e[n] = t)
			})
		}

		function cr(e, t)
		{
			e.prop("selected", t), e.attr("selected", t)
		}

		function lr(e, t, n)
		{
			if (e)
			{
				if (w(e) && (e = new RegExp("^" + e + "$")), !e.test) throw i("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", t, e, ne(n));
				return e
			}
		}

		function ur(e)
		{
			var t = p(e);
			return kr(t) ? -1 : t
		}
		var dr, hr, pr, fr, mr = {
				objectMaxDepth: 5,
				urlErrorParamsEnabled: !0
			},
			gr = /^\/(.+)\/([a-z]*)$/,
			vr = "validity",
			br = Object.prototype.hasOwnProperty,
			$r = function (e)
			{
				return w(e) ? e.toLowerCase() : e
			},
			xr = function (e)
			{
				return w(e) ? e.toUpperCase() : e
			},
			yr = [].slice,
			Tr = [].splice,
			wr = [].push,
			_r = Object.prototype.toString,
			Cr = Object.getPrototypeOf,
			Sr = i("ng"),
			Er = e.angular || (e.angular = {}),
			Ar = 0;
		dr = e.document.documentMode;
		var kr = Number.isNaN || function (e)
		{
			return e !== e
		};
		m.$inject = [], g.$inject = [];
		var qr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
			Or = function (e)
			{
				return w(e) ? e.trim() : e
			},
			Mr = function (e)
			{
				return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
			},
			Dr = function ()
			{
				if (!x(Dr.rules))
				{
					var t = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
					if (t)
					{
						var n = t.getAttribute("ng-csp") || t.getAttribute("data-ng-csp");
						Dr.rules = {
							noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
							noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
						}
					}
					else Dr.rules = {
						noUnsafeEval: function ()
						{
							try
							{
								return new Function(""), !1
							}
							catch (e)
							{
								return !0
							}
						}(),
						noInlineStyle: !1
					}
				}
				return Dr.rules
			},
			Rr = function ()
			{
				if (x(Rr.name_)) return Rr.name_;
				var t, n, i, r, s = Ir.length;
				for (n = 0; n < s; ++n)
					if (i = Ir[n], t = e.document.querySelector("[" + i.replace(":", "\\:") + "jq]"))
					{
						r = t.getAttribute(i + "jq");
						break
					}
				return Rr.name_ = r
			},
			Pr = /:/g,
			Ir = ["ng-", "data-ng-", "ng:", "x-ng-"],
			Lr = function (t)
			{
				var n = t.currentScript;
				if (!n) return !0;
				if (!(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)) return !1;
				var i = n.attributes;
				return [i.getNamedItem("src"), i.getNamedItem("href"), i.getNamedItem("xlink:href")].every(function (e)
				{
					if (!e) return !0;
					if (!e.value) return !1;
					var n = t.createElement("a");
					if (n.href = e.value, t.location.origin === n.origin) return !0;
					switch (n.protocol)
					{
						case "http:":
						case "https:":
						case "ftp:":
						case "blob:":
						case "file:":
						case "data:":
							return !0;
						default:
							return !1
					}
				})
			}(e.document),
			Nr = /[A-Z]/g,
			jr = !1,
			Hr = 1,
			Vr = 3,
			Ur = 8,
			Fr = 9,
			Br = 11,
			zr = {
				full: "1.7.9",
				major: 1,
				minor: 7,
				dot: 9,
				codeName: "pollution-eradication"
			};
		Pe.expando = "ng339";
		var Wr = Pe.cache = {},
			Gr = 1;
		Pe._data = function (e)
		{
			return this.cache[e[this.expando]] ||
			{}
		};
		var Kr = /-([a-z])/g,
			Zr = /^-ms-/,
			Yr = {
				mouseleave: "mouseout",
				mouseenter: "mouseover"
			},
			Jr = i("jqLite"),
			Xr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			Qr = /<|&#?\w+;/,
			es = /<([\w:-]+)/,
			ts = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			ns = {
				option: [1, '<select multiple="multiple">', "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		ns.optgroup = ns.option, ns.tbody = ns.tfoot = ns.colgroup = ns.caption = ns.thead, ns.th = ns.td;
		var is = e.Node.prototype.contains || function (e)
			{
				return !!(16 & this.compareDocumentPosition(e))
			},
			rs = Pe.prototype = {
				ready: Qe,
				toString: function ()
				{
					var e = [];
					return s(this, function (t)
					{
						e.push("" + t)
					}), "[" + e.join(", ") + "]"
				},
				eq: function (e)
				{
					return hr(e >= 0 ? this[e] : this[this.length + e])
				},
				length: 0,
				push: wr,
				sort: [].sort,
				splice: [].splice
			},
			ss = {};
		s("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e)
		{
			ss[$r(e)] = e
		});
		var as = {};
		s("input,select,option,textarea,button,form,details".split(","), function (e)
		{
			as[e] = !0
		});
		var os = {
			ngMinlength: "minlength",
			ngMaxlength: "maxlength",
			ngMin: "min",
			ngMax: "max",
			ngPattern: "pattern",
			ngStep: "step"
		};
		s(
		{
			data: Fe,
			removeData: Ve,
			hasData: Oe,
			cleanData: function (e)
			{
				for (var t = 0, n = e.length; t < n; t++) Ve(e[t]), He(e[t])
			}
		}, function (e, t)
		{
			Pe[t] = e
		}), s(
		{
			data: Fe,
			inheritedData: Ze,
			scope: function (e)
			{
				return hr.data(e, "$scope") || Ze(e.parentNode || e, ["$isolateScope", "$scope"])
			},
			isolateScope: function (e)
			{
				return hr.data(e, "$isolateScope") || hr.data(e, "$isolateScopeNoTemplate")
			},
			controller: Ke,
			injector: function (e)
			{
				return Ze(e, "$injector")
			},
			removeAttr: function (e, t)
			{
				e.removeAttribute(t)
			},
			hasClass: Be,
			css: function (e, t, n)
			{
				if (t = Se(t), !x(n)) return e.style[t];
				e.style[t] = n
			},
			attr: function (e, t, n)
			{
				var i, r = e.nodeType;
				if (r !== Vr && 2 !== r && r !== Ur && e.getAttribute)
				{
					var s = $r(t),
						a = ss[s];
					if (!x(n)) return i = e.getAttribute(t), a && null !== i && (i = s), null === i ? void 0 : i;
					null === n || !1 === n && a ? e.removeAttribute(t) : e.setAttribute(t, a ? s : n)
				}
			},
			prop: function (e, t, n)
			{
				if (!x(n)) return e[t];
				e[t] = n
			},
			text: function ()
			{
				function e(e, t)
				{
					if ($(t))
					{
						var n = e.nodeType;
						return n === Hr || n === Vr ? e.textContent : ""
					}
					e.textContent = t
				}
				return e.$dv = "", e
			}(),
			val: function (e, t)
			{
				if ($(t))
				{
					if (e.multiple && "select" === V(e))
					{
						var n = [];
						return s(e.options, function (e)
						{
							e.selected && n.push(e.value || e.text)
						}), n
					}
					return e.value
				}
				e.value = t
			},
			html: function (e, t)
			{
				if ($(t)) return e.innerHTML;
				Le(e, !0), e.innerHTML = t
			},
			empty: Ye
		}, function (e, t)
		{
			Pe.prototype[t] = function (t, n)
			{
				var i, r, s = this.length;
				if (e !== Ye && $(2 === e.length && e !== Be && e !== Ke ? t : n))
				{
					if (y(t))
					{
						for (i = 0; i < s; i++)
							if (e === Fe) e(this[i], t);
							else
								for (r in t) e(this[i], r, t[r]);
						return this
					}
					for (var a = e.$dv, o = $(a) ? Math.min(s, 1) : s, c = 0; c < o; c++)
					{
						var l = e(this[c], t, n);
						a = a ? a + l : l
					}
					return a
				}
				for (i = 0; i < s; i++) e(this[i], t, n);
				return this
			}
		}), s(
		{
			removeData: Ve,
			on: function (e, t, n, i)
			{
				if (x(i)) throw Jr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
				if (qe(e))
				{
					var r = Ue(e, !0),
						s = r.events,
						a = r.handle;
					a || (a = r.handle = nt(e, s));
					for (var o = t.indexOf(" ") >= 0 ? t.split(" ") : [t], c = o.length, l = function (t, i, r)
						{
							var o = s[t];
							o || (o = s[t] = [], o.specialHandlerWrapper = i, "$destroy" === t || r || e.addEventListener(t, a)), o.push(n)
						}; c--;) t = o[c], Yr[t] ? (l(Yr[t], rt), l(t, void 0, !0)) : l(t)
				}
			},
			off: He,
			one: function (e, t, n)
			{
				e = hr(e), e.on(t, function i()
				{
					e.off(t, n), e.off(t, i)
				}), e.on(t, n)
			},
			replaceWith: function (e, t)
			{
				var n, i = e.parentNode;
				Le(e), s(new Pe(t), function (t)
				{
					n ? i.insertBefore(t, n.nextSibling) : i.replaceChild(t, e), n = t
				})
			},
			children: function (e)
			{
				var t = [];
				return s(e.childNodes, function (e)
				{
					e.nodeType === Hr && t.push(e)
				}), t
			},
			contents: function (e)
			{
				return e.contentDocument || e.childNodes || []
			},
			append: function (e, t)
			{
				var n = e.nodeType;
				if (n === Hr || n === Br)
				{
					t = new Pe(t);
					for (var i = 0, r = t.length; i < r; i++)
					{
						var s = t[i];
						e.appendChild(s)
					}
				}
			},
			prepend: function (e, t)
			{
				if (e.nodeType === Hr)
				{
					var n = e.firstChild;
					s(new Pe(t), function (t)
					{
						e.insertBefore(t, n)
					})
				}
			},
			wrap: function (e, t)
			{
				Re(e, hr(t).eq(0).clone()[0])
			},
			remove: Je,
			detach: function (e)
			{
				Je(e, !0)
			},
			after: function (e, t)
			{
				var n = e,
					i = e.parentNode;
				if (i)
				{
					t = new Pe(t);
					for (var r = 0, s = t.length; r < s; r++)
					{
						var a = t[r];
						i.insertBefore(a, n.nextSibling), n = a
					}
				}
			},
			addClass: We,
			removeClass: ze,
			toggleClass: function (e, t, n)
			{
				t && s(t.split(" "), function (t)
				{
					var i = n;
					$(i) && (i = !Be(e, t)), (i ? We : ze)(e, t)
				})
			},
			parent: function (e)
			{
				var t = e.parentNode;
				return t && t.nodeType !== Br ? t : null
			},
			next: function (e)
			{
				return e.nextElementSibling
			},
			find: function (e, t)
			{
				return e.getElementsByTagName ? e.getElementsByTagName(t) : []
			},
			clone: Ie,
			triggerHandler: function (e, t, n)
			{
				var i, r, a, o = t.type || t,
					c = Ue(e),
					l = c && c.events,
					u = l && l[o];
				u && (i = {
					preventDefault: function ()
					{
						this.defaultPrevented = !0
					},
					isDefaultPrevented: function ()
					{
						return !0 === this.defaultPrevented
					},
					stopImmediatePropagation: function ()
					{
						this.immediatePropagationStopped = !0
					},
					isImmediatePropagationStopped: function ()
					{
						return !0 === this.immediatePropagationStopped
					},
					stopPropagation: m,
					type: o,
					target: e
				}, t.type && (i = d(i, t)), r = Te(u), a = n ? [i].concat(n) : [i], s(r, function (t)
				{
					i.isImmediatePropagationStopped() || t.apply(e, a)
				}))
			}
		}, function (e, t)
		{
			Pe.prototype[t] = function (t, n, i)
			{
				for (var r, s = 0, a = this.length; s < a; s++) $(r) ? (r = e(this[s], t, n, i), x(r) && (r = hr(r))) : Ge(r, e(this[s], t, n, i));
				return x(r) ? r : this
			}
		}), Pe.prototype.bind = Pe.prototype.on, Pe.prototype.unbind = Pe.prototype.off;
		var cs = Object.create(null);
		ot.prototype = {
			_idx: function (e)
			{
				return e !== this._lastKey && (this._lastKey = e, this._lastIndex = this._keys.indexOf(e)), this._lastIndex
			},
			_transformKey: function (e)
			{
				return kr(e) ? cs : e
			},
			get: function (e)
			{
				e = this._transformKey(e);
				var t = this._idx(e);
				if (-1 !== t) return this._values[t]
			},
			has: function (e)
			{
				return e = this._transformKey(e), -1 !== this._idx(e)
			},
			set: function (e, t)
			{
				e = this._transformKey(e);
				var n = this._idx(e); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = e, this._values[n] = t
			},
			delete: function (e)
			{
				e = this._transformKey(e);
				var t = this._idx(e);
				return -1 !== t && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
			}
		};
		var ls = ot,
			us = [function ()
			{
				this.$get = [function ()
				{
					return ls
				}]
			}],
			ds = /^([^(]+?)=>/,
			hs = /^[^(]*\(\s*([^)]*)\)/m,
			ps = /,/,
			fs = /^\s*(_?)(\S+?)\1\s*$/,
			ms = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
			gs = i("$injector");
		ht.$$annotate = dt;
		var vs = i("$animate"),
			bs = 1,
			$s = function ()
			{
				this.$get = m
			},
			xs = function ()
			{
				var e = new ls,
					t = [];
				this.$get = ["$$AnimateRunner", "$rootScope", function (n, i)
				{
					function r(e, t, n)
					{
						var i = !1;
						return t && (t = w(t) ? t.split(" ") : S(t) ? t : [], s(t, function (t)
						{
							t && (i = !0, e[t] = n)
						})), i
					}

					function a()
					{
						s(t, function (t)
						{
							var n = e.get(t);
							if (n)
							{
								var i = gt(t.attr("class")),
									r = "",
									a = "";
								s(n, function (e, t)
								{
									e !== !!i[t] && (e ? r += (r.length ? " " : "") + t : a += (a.length ? " " : "") + t)
								}), s(t, function (e)
								{
									r && We(e, r), a && ze(e, a)
								}), e.delete(t)
							}
						}), t.length = 0
					}

					function o(n, s, o)
					{
						var c = e.get(n) ||
							{},
							l = r(c, s, !0),
							u = r(c, o, !1);
						(l || u) && (e.set(n, c), t.push(n), 1 === t.length && i.$$postDigest(a))
					}
					return {
						enabled: m,
						on: m,
						off: m,
						pin: m,
						push: function (e, t, i, r)
						{
							r && r(), i = i ||
							{}, i.from && e.css(i.from), i.to && e.css(i.to), (i.addClass || i.removeClass) && o(e, i.addClass, i.removeClass);
							var s = new n;
							return s.complete(), s
						}
					}
				}]
			},
			ys = ["$provide", function (e)
			{
				var t = this,
					n = null,
					i = null;
				this.$$registeredAnimations = Object.create(null), this.register = function (n, i)
				{
					if (n && "." !== n.charAt(0)) throw vs("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
					var r = n + "-animation";
					t.$$registeredAnimations[n.substr(1)] = r, e.factory(r, i)
				}, this.customFilter = function (e)
				{
					return 1 === arguments.length && (i = A(e) ? e : null), i
				}, this.classNameFilter = function (e)
				{
					if (1 === arguments.length && (n = e instanceof RegExp ? e : null))
					{
						if (new RegExp("[(\\s|\\/)]ng-animate[(\\s|\\/)]").test(n.toString())) throw n = null, vs("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', "ng-animate")
					}
					return n
				}, this.$get = ["$$animateQueue", function (e)
				{
					function t(e, t, n)
					{
						if (n)
						{
							var i = mt(n);
							!i || i.parentNode || i.previousElementSibling || (n = null)
						}
						n ? n.after(e) : t.prepend(e)
					}
					return {
						on: e.on,
						off: e.off,
						pin: e.pin,
						enabled: e.enabled,
						cancel: function (e)
						{
							e.cancel && e.cancel()
						},
						enter: function (n, i, r, s)
						{
							return i = i && hr(i), r = r && hr(r), i = i || r.parent(), t(n, i, r), e.push(n, "enter", vt(s))
						},
						move: function (n, i, r, s)
						{
							return i = i && hr(i), r = r && hr(r), i = i || r.parent(), t(n, i, r), e.push(n, "move", vt(s))
						},
						leave: function (t, n)
						{
							return e.push(t, "leave", vt(n), function ()
							{
								t.remove()
							})
						},
						addClass: function (t, n, i)
						{
							return i = vt(i), i.addClass = ft(i.addclass, n), e.push(t, "addClass", i)
						},
						removeClass: function (t, n, i)
						{
							return i = vt(i), i.removeClass = ft(i.removeClass, n), e.push(t, "removeClass", i)
						},
						setClass: function (t, n, i, r)
						{
							return r = vt(r), r.addClass = ft(r.addClass, n), r.removeClass = ft(r.removeClass, i), e.push(t, "setClass", r)
						},
						animate: function (t, n, i, r, s)
						{
							return s = vt(s), s.from = s.from ? d(s.from, n) : n, s.to = s.to ? d(s.to, i) : i, r = r || "ng-inline-animate", s.tempClasses = ft(s.tempClasses, r), e.push(t, "animate", s)
						}
					}
				}]
			}],
			Ts = function ()
			{
				this.$get = ["$$rAF", function (e)
				{
					function t(t)
					{
						n.push(t), n.length > 1 || e(function ()
						{
							for (var e = 0; e < n.length; e++) n[e]();
							n = []
						})
					}
					var n = [];
					return function ()
					{
						var e = !1;
						return t(function ()
							{
								e = !0
							}),
							function (n)
							{
								e ? n() : t(n)
							}
					}
				}]
			},
			ws = function ()
			{
				this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (e, t, n, i, r)
				{
					function a(e)
					{
						this.setHost(e);
						var t = n(),
							s = function (e)
							{
								r(e, 0, !1)
							};
						this._doneCallbacks = [], this._tick = function (e)
						{
							i() ? s(e) : t(e)
						}, this._state = 0
					}
					return a.chain = function (e, t)
					{
						function n()
						{
							if (i === e.length) return void t(!0);
							e[i](function (e)
							{
								if (!1 === e) return void t(!1);
								i++, n()
							})
						}
						var i = 0;
						n()
					}, a.all = function (e, t)
					{
						function n(n)
						{
							r = r && n, ++i === e.length && t(r)
						}
						var i = 0,
							r = !0;
						s(e, function (e)
						{
							e.done(n)
						})
					}, a.prototype = {
						setHost: function (e)
						{
							this.host = e ||
							{}
						},
						done: function (e)
						{
							2 === this._state ? e() : this._doneCallbacks.push(e)
						},
						progress: m,
						getPromise: function ()
						{
							if (!this.promise)
							{
								var t = this;
								this.promise = e(function (e, n)
								{
									t.done(function (t)
									{
										!1 === t ? n() : e()
									})
								})
							}
							return this.promise
						},
						then: function (e, t)
						{
							return this.getPromise().then(e, t)
						},
						catch: function (e)
						{
							return this.getPromise().catch(e)
						},
						finally: function (e)
						{
							return this.getPromise().finally(e)
						},
						pause: function ()
						{
							this.host.pause && this.host.pause()
						},
						resume: function ()
						{
							this.host.resume && this.host.resume()
						},
						end: function ()
						{
							this.host.end && this.host.end(), this._resolve(!0)
						},
						cancel: function ()
						{
							this.host.cancel && this.host.cancel(), this._resolve(!1)
						},
						complete: function (e)
						{
							var t = this;
							0 === t._state && (t._state = 1, t._tick(function ()
							{
								t._resolve(e)
							}))
						},
						_resolve: function (e)
						{
							2 !== this._state && (s(this._doneCallbacks, function (t)
							{
								t(e)
							}), this._doneCallbacks.length = 0, this._state = 2)
						}
					}, a
				}]
			},
			_s = function ()
			{
				this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (e, t, n)
				{
					return function (t, i)
					{
						function r()
						{
							return e(function ()
							{
								s(), o || c.complete(), o = !0
							}), c
						}

						function s()
						{
							a.addClass && (t.addClass(a.addClass), a.addClass = null), a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null), a.to && (t.css(a.to), a.to = null)
						}
						var a = i ||
						{};
						a.$$prepared || (a = B(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (t.css(a.from), a.from = null);
						var o, c = new n;
						return {
							start: r,
							end: r
						}
					}
				}]
			},
			Cs = i("$compile"),
			Ss = new _t;
		Ct.$inject = ["$provide", "$$sanitizeUriProvider"], St.prototype.isFirstChange = function ()
		{
			return this.previousValue === Ss
		};
		var Es = /^((?:x|data)[:\-_])/i,
			As = /[:\-_]+(.)/g,
			ks = i("$controller"),
			qs = /^(\S+)(\s+as\s+([\w$]+))?$/,
			Os = function ()
			{
				this.$get = ["$document", function (e)
				{
					return function (t)
					{
						return t ? !t.nodeType && t instanceof hr && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
					}
				}]
			},
			Ms = "application/json",
			Ds = {
				"Content-Type": Ms + ";charset=utf-8"
			},
			Rs = /^\[|^\{(?!\{)/,
			Ps = {
				"[": /]$/,
				"{": /}$/
			},
			Is = /^\)]\}',?\n/,
			Ls = i("$http"),
			Ns = Er.$interpolateMinErr = i("$interpolate");
		Ns.throwNoconcat = function (e)
		{
			throw Ns("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
		}, Ns.interr = function (e, t)
		{
			return Ns("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
		};
		var js = i("$interval"),
			Hs = function ()
			{
				this.$get = function ()
				{
					function e(e)
					{
						var t = function (e)
						{
							t.data = e, t.called = !0
						};
						return t.id = e, t
					}
					var t = Er.callbacks,
						n = {};
					return {
						createCallback: function (i)
						{
							var r = "_" + (t.$$counter++).toString(36),
								s = "angular.callbacks." + r,
								a = e(r);
							return n[s] = t[r] = a, s
						},
						wasCalled: function (e)
						{
							return n[e].called
						},
						getResponse: function (e)
						{
							return n[e].data
						},
						removeCallback: function (e)
						{
							var i = n[e];
							delete t[i.id], delete n[e]
						}
					}
				}
			},
			Vs = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
			Us = {
				http: 80,
				https: 443,
				ftp: 21
			},
			Fs = i("$location"),
			Bs = /^\s*[\\\/]{2,}/,
			zs = {
				$$absUrl: "",
				$$html5: !1,
				$$replace: !1,
				$$compose: function ()
				{
					this.$$url = Qt(this.$$path, this.$$search, this.$$hash), this.$$absUrl = this.$$normalizeUrl(this.$$url), this.$$urlUpdatedByLocation = !0
				},
				absUrl: dn("$$absUrl"),
				url: function (e)
				{
					if ($(e)) return this.$$url;
					var t = Vs.exec(e);
					return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
				},
				protocol: dn("$$protocol"),
				host: dn("$$host"),
				port: dn("$$port"),
				path: hn("$$path", function (e)
				{
					return e = null !== e ? e.toString() : "", "/" === e.charAt(0) ? e : "/" + e
				}),
				search: function (e, t)
				{
					switch (arguments.length)
					{
						case 0:
							return this.$$search;
						case 1:
							if (w(e) || _(e)) e = e.toString(), this.$$search = re(e);
							else
							{
								if (!y(e)) throw Fs("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
								e = B(e,
								{}), s(e, function (t, n)
								{
									null == t && delete e[n]
								}), this.$$search = e
							}
							break;
						default:
							$(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
					}
					return this.$$compose(), this
				},
				hash: hn("$$hash", function (e)
				{
					return null !== e ? e.toString() : ""
				}),
				replace: function ()
				{
					return this.$$replace = !0, this
				}
			};
		s([un, ln, cn], function (e)
		{
			e.prototype = Object.create(zs), e.prototype.state = function (t)
			{
				if (!arguments.length) return this.$$state;
				if (e !== cn || !this.$$html5) throw Fs("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
				return this.$$state = $(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
			}
		});
		var Ws = i("$parse"),
			Gs = {}.constructor.prototype.valueOf,
			Ks = $e();
		s("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e)
		{
			Ks[e] = !0
		});
		var Zs = {
				n: "\n",
				f: "\f",
				r: "\r",
				t: "\t",
				v: "\v",
				"'": "'",
				'"': '"'
			},
			Ys = function (e)
			{
				this.options = e
			};
		Ys.prototype = {
			constructor: Ys,
			lex: function (e)
			{
				for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;)
				{
					var t = this.text.charAt(this.index);
					if ('"' === t || "'" === t) this.readString(t);
					else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
					else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
					else if (this.is(t, "(){}[].,;:?")) this.tokens.push(
					{
						index: this.index,
						text: t
					}), this.index++;
					else if (this.isWhitespace(t)) this.index++;
					else
					{
						var n = t + this.peek(),
							i = n + this.peek(2),
							r = Ks[t],
							s = Ks[n],
							a = Ks[i];
						if (r || s || a)
						{
							var o = a ? i : s ? n : t;
							this.tokens.push(
							{
								index: this.index,
								text: o,
								operator: !0
							}), this.index += o.length
						}
						else this.throwError("Unexpected next character ", this.index, this.index + 1)
					}
				}
				return this.tokens
			},
			is: function (e, t)
			{
				return -1 !== t.indexOf(e)
			},
			peek: function (e)
			{
				var t = e || 1;
				return this.index + t < this.text.length && this.text.charAt(this.index + t)
			},
			isNumber: function (e)
			{
				return "0" <= e && e <= "9" && "string" == typeof e
			},
			isWhitespace: function (e)
			{
				return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
			},
			isIdentifierStart: function (e)
			{
				return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
			},
			isValidIdentifierStart: function (e)
			{
				return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
			},
			isIdentifierContinue: function (e)
			{
				return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
			},
			isValidIdentifierContinue: function (e, t)
			{
				return this.isValidIdentifierStart(e, t) || this.isNumber(e)
			},
			codePointAt: function (e)
			{
				return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
			},
			peekMultichar: function ()
			{
				var e = this.text.charAt(this.index),
					t = this.peek();
				if (!t) return e;
				var n = e.charCodeAt(0),
					i = t.charCodeAt(0);
				return n >= 55296 && n <= 56319 && i >= 56320 && i <= 57343 ? e + t : e
			},
			isExpOperator: function (e)
			{
				return "-" === e || "+" === e || this.isNumber(e)
			},
			throwError: function (e, t, n)
			{
				n = n || this.index;
				var i = x(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
				throw Ws("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, i, this.text)
			},
			readNumber: function ()
			{
				for (var e = "", t = this.index; this.index < this.text.length;)
				{
					var n = $r(this.text.charAt(this.index));
					if ("." === n || this.isNumber(n)) e += n;
					else
					{
						var i = this.peek();
						if ("e" === n && this.isExpOperator(i)) e += n;
						else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" === e.charAt(e.length - 1)) e += n;
						else
						{
							if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" !== e.charAt(e.length - 1)) break;
							this.throwError("Invalid exponent")
						}
					}
					this.index++
				}
				this.tokens.push(
				{
					index: t,
					text: e,
					constant: !0,
					value: Number(e)
				})
			},
			readIdent: function ()
			{
				var e = this.index;
				for (this.index += this.peekMultichar().length; this.index < this.text.length;)
				{
					var t = this.peekMultichar();
					if (!this.isIdentifierContinue(t)) break;
					this.index += t.length
				}
				this.tokens.push(
				{
					index: e,
					text: this.text.slice(e, this.index),
					identifier: !0
				})
			},
			readString: function (e)
			{
				var t = this.index;
				this.index++;
				for (var n = "", i = e, r = !1; this.index < this.text.length;)
				{
					var s = this.text.charAt(this.index);
					if (i += s, r)
					{
						if ("u" === s)
						{
							var a = this.text.substring(this.index + 1, this.index + 5);
							a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
						}
						else
						{
							n += Zs[s] || s
						}
						r = !1
					}
					else if ("\\" === s) r = !0;
					else
					{
						if (s === e) return this.index++, void this.tokens.push(
						{
							index: t,
							text: i,
							constant: !0,
							value: n
						});
						n += s
					}
					this.index++
				}
				this.throwError("Unterminated quote", t)
			}
		};
		var Js = function (e, t)
		{
			this.lexer = e, this.options = t
		};
		Js.Program = "Program", Js.ExpressionStatement = "ExpressionStatement", Js.AssignmentExpression = "AssignmentExpression", Js.ConditionalExpression = "ConditionalExpression", Js.LogicalExpression = "LogicalExpression", Js.BinaryExpression = "BinaryExpression", Js.UnaryExpression = "UnaryExpression", Js.CallExpression = "CallExpression", Js.MemberExpression = "MemberExpression", Js.Identifier = "Identifier", Js.Literal = "Literal", Js.ArrayExpression = "ArrayExpression", Js.Property = "Property", Js.ObjectExpression = "ObjectExpression", Js.ThisExpression = "ThisExpression", Js.LocalsExpression = "LocalsExpression", Js.NGValueParameter = "NGValueParameter", Js.prototype = {
			ast: function (e)
			{
				this.text = e, this.tokens = this.lexer.lex(e);
				var t = this.program();
				return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
			},
			program: function ()
			{
				for (var e = [];;)
					if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
						type: Js.Program,
						body: e
					}
			},
			expressionStatement: function ()
			{
				return {
					type: Js.ExpressionStatement,
					expression: this.filterChain()
				}
			},
			filterChain: function ()
			{
				for (var e = this.expression(); this.expect("|");) e = this.filter(e);
				return e
			},
			expression: function ()
			{
				return this.assignment()
			},
			assignment: function ()
			{
				var e = this.ternary();
				if (this.expect("="))
				{
					if (!Tn(e)) throw Ws("lval", "Trying to assign a value to a non l-value");
					e = {
						type: Js.AssignmentExpression,
						left: e,
						right: this.assignment(),
						operator: "="
					}
				}
				return e
			},
			ternary: function ()
			{
				var e, t, n = this.logicalOR();
				return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(),
				{
					type: Js.ConditionalExpression,
					test: n,
					alternate: e,
					consequent: t
				}) : n
			},
			logicalOR: function ()
			{
				for (var e = this.logicalAND(); this.expect("||");) e = {
					type: Js.LogicalExpression,
					operator: "||",
					left: e,
					right: this.logicalAND()
				};
				return e
			},
			logicalAND: function ()
			{
				for (var e = this.equality(); this.expect("&&");) e = {
					type: Js.LogicalExpression,
					operator: "&&",
					left: e,
					right: this.equality()
				};
				return e
			},
			equality: function ()
			{
				for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
					type: Js.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.relational()
				};
				return t
			},
			relational: function ()
			{
				for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
					type: Js.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.additive()
				};
				return t
			},
			additive: function ()
			{
				for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
					type: Js.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.multiplicative()
				};
				return t
			},
			multiplicative: function ()
			{
				for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
					type: Js.BinaryExpression,
					operator: e.text,
					left: t,
					right: this.unary()
				};
				return t
			},
			unary: function ()
			{
				var e;
				return (e = this.expect("+", "-", "!")) ?
				{
					type: Js.UnaryExpression,
					operator: e.text,
					prefix: !0,
					argument: this.unary()
				} : this.primary()
			},
			primary: function ()
			{
				var e;
				this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = B(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
					type: Js.Literal,
					value: this.options.literals[this.consume().text]
				} : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
				for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
					type: Js.CallExpression,
					callee: e,
					arguments: this.parseArguments()
				}, this.consume(")")) : "[" === t.text ? (e = {
					type: Js.MemberExpression,
					object: e,
					property: this.expression(),
					computed: !0
				}, this.consume("]")) : "." === t.text ? e = {
					type: Js.MemberExpression,
					object: e,
					property: this.identifier(),
					computed: !1
				} : this.throwError("IMPOSSIBLE");
				return e
			},
			filter: function (e)
			{
				for (var t = [e], n = {
						type: Js.CallExpression,
						callee: this.identifier(),
						arguments: t,
						filter: !0
					}; this.expect(":");) t.push(this.expression());
				return n
			},
			parseArguments: function ()
			{
				var e = [];
				if (")" !== this.peekToken().text)
					do {
						e.push(this.filterChain())
					} while (this.expect(","));
				return e
			},
			identifier: function ()
			{
				var e = this.consume();
				return e.identifier || this.throwError("is not a valid identifier", e),
				{
					type: Js.Identifier,
					name: e.text
				}
			},
			constant: function ()
			{
				return {
					type: Js.Literal,
					value: this.consume().value
				}
			},
			arrayDeclaration: function ()
			{
				var e = [];
				if ("]" !== this.peekToken().text)
					do {
						if (this.peek("]")) break;
						e.push(this.expression())
					} while (this.expect(","));
				return this.consume("]"),
				{
					type: Js.ArrayExpression,
					elements: e
				}
			},
			object: function ()
			{
				var e, t = [];
				if ("}" !== this.peekToken().text)
					do {
						if (this.peek("}")) break;
						e = {
							type: Js.Property,
							kind: "init"
						}, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
					} while (this.expect(","));
				return this.consume("}"),
				{
					type: Js.ObjectExpression,
					properties: t
				}
			},
			throwError: function (e, t)
			{
				throw Ws("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
			},
			consume: function (e)
			{
				if (0 === this.tokens.length) throw Ws("ueoe", "Unexpected end of expression: {0}", this.text);
				var t = this.expect(e);
				return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
			},
			peekToken: function ()
			{
				if (0 === this.tokens.length) throw Ws("ueoe", "Unexpected end of expression: {0}", this.text);
				return this.tokens[0]
			},
			peek: function (e, t, n, i)
			{
				return this.peekAhead(0, e, t, n, i)
			},
			peekAhead: function (e, t, n, i, r)
			{
				if (this.tokens.length > e)
				{
					var s = this.tokens[e],
						a = s.text;
					if (a === t || a === n || a === i || a === r || !t && !n && !i && !r) return s
				}
				return !1
			},
			expect: function (e, t, n, i)
			{
				var r = this.peek(e, t, n, i);
				return !!r && (this.tokens.shift(), r)
			},
			selfReferential:
			{
				this:
				{
					type: Js.ThisExpression
				},
				$locals:
				{
					type: Js.LocalsExpression
				}
			}
		};
		var Xs = 1,
			Qs = 2;
		Sn.prototype = {
			compile: function (e)
			{
				var t = this;
				this.state = {
					nextId: 0,
					filters:
					{},
					fn:
					{
						vars: [],
						body: [],
						own:
						{}
					},
					assign:
					{
						vars: [],
						body: [],
						own:
						{}
					},
					inputs: []
				}, xn(e, t.$filter);
				var n, i = "";
				if (this.stage = "assign", n = wn(e))
				{
					this.state.computing = "assign";
					var r = this.nextId();
					this.recurse(n, r), this.return_(r), i = "fn.assign=" + this.generateFunction("assign", "s,v,l")
				}
				var a = yn(e.body);
				t.stage = "inputs", s(a, function (e, n)
				{
					var i = "fn" + n;
					t.state[i] = {
						vars: [],
						body: [],
						own:
						{}
					}, t.state.computing = i;
					var r = t.nextId();
					t.recurse(e, r), t.return_(r), t.state.inputs.push(
					{
						name: i,
						isPure: e.isPure
					}), e.watchId = n
				}), this.state.computing = "fn", this.stage = "main", this.recurse(e);
				var o = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + i + this.watchFns() + "return fn;",
					c = new Function("$filter", "getStringValue", "ifDefined", "plus", o)(this.$filter, mn, gn, vn);
				return this.state = this.stage = void 0, c
			},
			USE: "use",
			STRICT: "strict",
			watchFns: function ()
			{
				var e = [],
					t = this.state.inputs,
					n = this;
				return s(t, function (t)
				{
					e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
				}), t.length && e.push("fn.inputs=[" + t.map(function (e)
				{
					return e.name
				}).join(",") + "];"), e.join("")
			},
			generateFunction: function (e, t)
			{
				return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
			},
			filterPrefix: function ()
			{
				var e = [],
					t = this;
				return s(this.state.filters, function (n, i)
				{
					e.push(n + "=$filter(" + t.escape(i) + ")")
				}), e.length ? "var " + e.join(",") + ";" : ""
			},
			varsPrefix: function (e)
			{
				return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
			},
			body: function (e)
			{
				return this.state[e].body.join("")
			},
			recurse: function (e, t, n, i, r, a)
			{
				var o, c, l, u, d, h = this;
				if (i = i || m, !a && x(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, i, r, !0));
				switch (e.type)
				{
					case Js.Program:
						s(e.body, function (t, n)
						{
							h.recurse(t.expression, void 0, void 0, function (e)
							{
								c = e
							}), n !== e.body.length - 1 ? h.current().body.push(c, ";") : h.return_(c)
						});
						break;
					case Js.Literal:
						u = this.escape(e.value), this.assign(t, u), i(t || u);
						break;
					case Js.UnaryExpression:
						this.recurse(e.argument, void 0, void 0, function (e)
						{
							c = e
						}), u = e.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(t, u), i(u);
						break;
					case Js.BinaryExpression:
						this.recurse(e.left, void 0, void 0, function (e)
						{
							o = e
						}), this.recurse(e.right, void 0, void 0, function (e)
						{
							c = e
						}), u = "+" === e.operator ? this.plus(o, c) : "-" === e.operator ? this.ifDefined(o, 0) + e.operator + this.ifDefined(c, 0) : "(" + o + ")" + e.operator + "(" + c + ")", this.assign(t, u), i(u);
						break;
					case Js.LogicalExpression:
						t = t || this.nextId(), h.recurse(e.left, t), h.if_("&&" === e.operator ? t : h.not(t), h.lazyRecurse(e.right, t)), i(t);
						break;
					case Js.ConditionalExpression:
						t = t || this.nextId(), h.recurse(e.test, t), h.if_(t, h.lazyRecurse(e.alternate, t), h.lazyRecurse(e.consequent, t)), i(t);
						break;
					case Js.Identifier:
						t = t || this.nextId(), n && (n.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", e.name)), function ()
						{
							h.if_("inputs" === h.stage || "s", function ()
							{
								r && 1 !== r && h.if_(h.isNull(h.nonComputedMember("s", e.name)), h.lazyAssign(h.nonComputedMember("s", e.name), "{}")), h.assign(t, h.nonComputedMember("s", e.name))
							})
						}, t && h.lazyAssign(t, h.nonComputedMember("l", e.name))), i(t);
						break;
					case Js.MemberExpression:
						o = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), h.recurse(e.object, o, void 0, function ()
						{
							h.if_(h.notNull(o), function ()
							{
								e.computed ? (c = h.nextId(), h.recurse(e.property, c), h.getStringValue(c), r && 1 !== r && h.if_(h.not(h.computedMember(o, c)), h.lazyAssign(h.computedMember(o, c), "{}")), u = h.computedMember(o, c), h.assign(t, u), n && (n.computed = !0, n.name = c)) : (r && 1 !== r && h.if_(h.isNull(h.nonComputedMember(o, e.property.name)), h.lazyAssign(h.nonComputedMember(o, e.property.name), "{}")), u = h.nonComputedMember(o, e.property.name), h.assign(t, u), n && (n.computed = !1, n.name = e.property.name))
							}, function ()
							{
								h.assign(t, "undefined")
							}), i(t)
						}, !!r);
						break;
					case Js.CallExpression:
						t = t || this.nextId(), e.filter ? (c = h.filter(e.callee.name), l = [], s(e.arguments, function (e)
						{
							var t = h.nextId();
							h.recurse(e, t), l.push(t)
						}), u = c + "(" + l.join(",") + ")", h.assign(t, u), i(t)) : (c = h.nextId(), o = {}, l = [], h.recurse(e.callee, c, o, function ()
						{
							h.if_(h.notNull(c), function ()
							{
								s(e.arguments, function (t)
								{
									h.recurse(t, e.constant ? void 0 : h.nextId(), void 0, function (e)
									{
										l.push(e)
									})
								}), u = o.name ? h.member(o.context, o.name, o.computed) + "(" + l.join(",") + ")" : c + "(" + l.join(",") + ")", h.assign(t, u)
							}, function ()
							{
								h.assign(t, "undefined")
							}), i(t)
						}));
						break;
					case Js.AssignmentExpression:
						c = this.nextId(), o = {}, this.recurse(e.left, void 0, o, function ()
						{
							h.if_(h.notNull(o.context), function ()
							{
								h.recurse(e.right, c), u = h.member(o.context, o.name, o.computed) + e.operator + c, h.assign(t, u), i(t || u)
							})
						}, 1);
						break;
					case Js.ArrayExpression:
						l = [], s(e.elements, function (t)
						{
							h.recurse(t, e.constant ? void 0 : h.nextId(), void 0, function (e)
							{
								l.push(e)
							})
						}), u = "[" + l.join(",") + "]", this.assign(t, u), i(t || u);
						break;
					case Js.ObjectExpression:
						l = [], d = !1, s(e.properties, function (e)
						{
							e.computed && (d = !0)
						}), d ? (t = t || this.nextId(), this.assign(t, "{}"), s(e.properties, function (e)
						{
							e.computed ? (o = h.nextId(), h.recurse(e.key, o)) : o = e.key.type === Js.Identifier ? e.key.name : "" + e.key.value, c = h.nextId(), h.recurse(e.value, c), h.assign(h.member(t, o, e.computed), c)
						})) : (s(e.properties, function (t)
						{
							h.recurse(t.value, e.constant ? void 0 : h.nextId(), void 0, function (e)
							{
								l.push(h.escape(t.key.type === Js.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
							})
						}), u = "{" + l.join(",") + "}", this.assign(t, u)), i(t || u);
						break;
					case Js.ThisExpression:
						this.assign(t, "s"), i(t || "s");
						break;
					case Js.LocalsExpression:
						this.assign(t, "l"), i(t || "l");
						break;
					case Js.NGValueParameter:
						this.assign(t, "v"), i(t || "v")
				}
			},
			getHasOwnProperty: function (e, t)
			{
				var n = e + "." + t,
					i = this.current().own;
				return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), i[n]
			},
			assign: function (e, t)
			{
				if (e) return this.current().body.push(e, "=", t, ";"), e
			},
			filter: function (e)
			{
				return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
			},
			ifDefined: function (e, t)
			{
				return "ifDefined(" + e + "," + this.escape(t) + ")"
			},
			plus: function (e, t)
			{
				return "plus(" + e + "," + t + ")"
			},
			return_: function (e)
			{
				this.current().body.push("return ", e, ";")
			},
			if_: function (e, t, n)
			{
				if (!0 === e) t();
				else
				{
					var i = this.current().body;
					i.push("if(", e, "){"), t(), i.push("}"), n && (i.push("else{"), n(), i.push("}"))
				}
			},
			not: function (e)
			{
				return "!(" + e + ")"
			},
			isNull: function (e)
			{
				return e + "==null"
			},
			notNull: function (e)
			{
				return e + "!=null"
			},
			nonComputedMember: function (e, t)
			{
				var n = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/,
					i = /[^$_a-zA-Z0-9]/g;
				return n.test(t) ? e + "." + t : e + '["' + t.replace(i, this.stringEscapeFn) + '"]'
			},
			computedMember: function (e, t)
			{
				return e + "[" + t + "]"
			},
			member: function (e, t, n)
			{
				return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
			},
			getStringValue: function (e)
			{
				this.assign(e, "getStringValue(" + e + ")")
			},
			lazyRecurse: function (e, t, n, i, r, s)
			{
				var a = this;
				return function ()
				{
					a.recurse(e, t, n, i, r, s)
				}
			},
			lazyAssign: function (e, t)
			{
				var n = this;
				return function ()
				{
					n.assign(e, t)
				}
			},
			stringEscapeRegex: /[^ a-zA-Z0-9]/g,
			stringEscapeFn: function (e)
			{
				return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			},
			escape: function (e)
			{
				if (w(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
				if (_(e)) return e.toString();
				if (!0 === e) return "true";
				if (!1 === e) return "false";
				if (null === e) return "null";
				if (void 0 === e) return "undefined";
				throw Ws("esc", "IMPOSSIBLE")
			},
			nextId: function (e, t)
			{
				var n = "v" + this.state.nextId++;
				return e || this.current().vars.push(n + (t ? "=" + t : "")), n
			},
			current: function ()
			{
				return this.state[this.state.computing]
			}
		}, En.prototype = {
			compile: function (e)
			{
				var t = this;
				xn(e, t.$filter);
				var n, i;
				(n = wn(e)) && (i = this.recurse(n));
				var r, a = yn(e.body);
				a && (r = [], s(a, function (e, n)
				{
					var i = t.recurse(e);
					i.isPure = e.isPure, e.input = i, r.push(i), e.watchId = n
				}));
				var o = [];
				s(e.body, function (e)
				{
					o.push(t.recurse(e.expression))
				});
				var c = 0 === e.body.length ? m : 1 === e.body.length ? o[0] : function (e, t)
				{
					var n;
					return s(o, function (i)
					{
						n = i(e, t)
					}), n
				};
				return i && (c.assign = function (e, t, n)
				{
					return i(e, n, t)
				}), r && (c.inputs = r), c
			},
			recurse: function (e, t, n)
			{
				var i, r, a, o = this;
				if (e.input) return this.inputs(e.input, e.watchId);
				switch (e.type)
				{
					case Js.Literal:
						return this.value(e.value, t);
					case Js.UnaryExpression:
						return r = this.recurse(e.argument), this["unary" + e.operator](r, t);
					case Js.BinaryExpression:
					case Js.LogicalExpression:
						return i = this.recurse(e.left), r = this.recurse(e.right), this["binary" + e.operator](i, r, t);
					case Js.ConditionalExpression:
						return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
					case Js.Identifier:
						return o.identifier(e.name, t, n);
					case Js.MemberExpression:
						return i = this.recurse(e.object, !1, !!n), e.computed || (r = e.property.name), e.computed && (r = this.recurse(e.property)), e.computed ? this.computedMember(i, r, t, n) : this.nonComputedMember(i, r, t, n);
					case Js.CallExpression:
						return a = [], s(e.arguments, function (e)
						{
							a.push(o.recurse(e))
						}), e.filter && (r = this.$filter(e.callee.name)), e.filter || (r = this.recurse(e.callee, !0)), e.filter ? function (e, n, i, s)
						{
							for (var o = [], c = 0; c < a.length; ++c) o.push(a[c](e, n, i, s));
							var l = r.apply(void 0, o, s);
							return t ?
							{
								context: void 0,
								name: void 0,
								value: l
							} : l
						} : function (e, n, i, s)
						{
							var o, c = r(e, n, i, s);
							if (null != c.value)
							{
								for (var l = [], u = 0; u < a.length; ++u) l.push(a[u](e, n, i, s));
								o = c.value.apply(c.context, l)
							}
							return t ?
							{
								value: o
							} : o
						};
					case Js.AssignmentExpression:
						return i = this.recurse(e.left, !0, 1), r = this.recurse(e.right),
							function (e, n, s, a)
							{
								var o = i(e, n, s, a),
									c = r(e, n, s, a);
								return o.context[o.name] = c, t ?
								{
									value: c
								} : c
							};
					case Js.ArrayExpression:
						return a = [], s(e.elements, function (e)
							{
								a.push(o.recurse(e))
							}),
							function (e, n, i, r)
							{
								for (var s = [], o = 0; o < a.length; ++o) s.push(a[o](e, n, i, r));
								return t ?
								{
									value: s
								} : s
							};
					case Js.ObjectExpression:
						return a = [], s(e.properties, function (e)
							{
								e.computed ? a.push(
								{
									key: o.recurse(e.key),
									computed: !0,
									value: o.recurse(e.value)
								}) : a.push(
								{
									key: e.key.type === Js.Identifier ? e.key.name : "" + e.key.value,
									computed: !1,
									value: o.recurse(e.value)
								})
							}),
							function (e, n, i, r)
							{
								for (var s = {}, o = 0; o < a.length; ++o) a[o].computed ? s[a[o].key(e, n, i, r)] = a[o].value(e, n, i, r) : s[a[o].key] = a[o].value(e, n, i, r);
								return t ?
								{
									value: s
								} : s
							};
					case Js.ThisExpression:
						return function (e)
						{
							return t ?
							{
								value: e
							} : e
						};
					case Js.LocalsExpression:
						return function (e, n)
						{
							return t ?
							{
								value: n
							} : n
						};
					case Js.NGValueParameter:
						return function (e, n, i)
						{
							return t ?
							{
								value: i
							} : i
						}
				}
			},
			"unary+": function (e, t)
			{
				return function (n, i, r, s)
				{
					var a = e(n, i, r, s);
					return a = x(a) ? +a : 0, t ?
					{
						value: a
					} : a
				}
			},
			"unary-": function (e, t)
			{
				return function (n, i, r, s)
				{
					var a = e(n, i, r, s);
					return a = x(a) ? -a : -0, t ?
					{
						value: a
					} : a
				}
			},
			"unary!": function (e, t)
			{
				return function (n, i, r, s)
				{
					var a = !e(n, i, r, s);
					return t ?
					{
						value: a
					} : a
				}
			},
			"binary+": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a),
						c = t(i, r, s, a),
						l = vn(o, c);
					return n ?
					{
						value: l
					} : l
				}
			},
			"binary-": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a),
						c = t(i, r, s, a),
						l = (x(o) ? o : 0) - (x(c) ? c : 0);
					return n ?
					{
						value: l
					} : l
				}
			},
			"binary*": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) * t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary/": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) / t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary%": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) % t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary===": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) === t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary!==": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) !== t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary==": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) == t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary!=": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) != t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary<": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) < t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary>": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) > t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary<=": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) <= t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary>=": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) >= t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary&&": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) && t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"binary||": function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = e(i, r, s, a) || t(i, r, s, a);
					return n ?
					{
						value: o
					} : o
				}
			},
			"ternary?:": function (e, t, n, i)
			{
				return function (r, s, a, o)
				{
					var c = e(r, s, a, o) ? t(r, s, a, o) : n(r, s, a, o);
					return i ?
					{
						value: c
					} : c
				}
			},
			value: function (e, t)
			{
				return function ()
				{
					return t ?
					{
						context: void 0,
						name: void 0,
						value: e
					} : e
				}
			},
			identifier: function (e, t, n)
			{
				return function (i, r, s, a)
				{
					var o = r && e in r ? r : i;
					n && 1 !== n && o && null == o[e] && (o[e] = {});
					var c = o ? o[e] : void 0;
					return t ?
					{
						context: o,
						name: e,
						value: c
					} : c
				}
			},
			computedMember: function (e, t, n, i)
			{
				return function (r, s, a, o)
				{
					var c, l, u = e(r, s, a, o);
					return null != u && (c = t(r, s, a, o), c = mn(c), i && 1 !== i && u && !u[c] && (u[c] = {}), l = u[c]), n ?
					{
						context: u,
						name: c,
						value: l
					} : l
				}
			},
			nonComputedMember: function (e, t, n, i)
			{
				return function (r, s, a, o)
				{
					var c = e(r, s, a, o);
					i && 1 !== i && c && null == c[t] && (c[t] = {});
					var l = null != c ? c[t] : void 0;
					return n ?
					{
						context: c,
						name: t,
						value: l
					} : l
				}
			},
			inputs: function (e, t)
			{
				return function (n, i, r, s)
				{
					return s ? s[t] : e(n, i, r)
				}
			}
		}, An.prototype = {
			constructor: An,
			parse: function (e)
			{
				var t = this.getAst(e),
					n = this.astCompiler.compile(t.ast);
				return n.literal = _n(t.ast), n.constant = Cn(t.ast), n.oneTime = t.oneTime, n
			},
			getAst: function (e)
			{
				var t = !1;
				return e = e.trim(), ":" === e.charAt(0) && ":" === e.charAt(1) && (t = !0, e = e.substring(2)),
				{
					ast: this.ast.ast(e),
					oneTime: t
				}
			}
		};
		var ea, ta = i("$sce"),
			na = {
				HTML: "html",
				CSS: "css",
				MEDIA_URL: "mediaUrl",
				URL: "url",
				RESOURCE_URL: "resourceUrl",
				JS: "js"
			},
			ia = /_([a-z])/g,
			ra = i("$templateRequest"),
			sa = i("$timeout"),
			aa = e.document.createElement("a"),
			oa = Jn(e.location.href);
		aa.href = "http://[::1]";
		var ca = "[::1]" === aa.hostname;
		ri.$inject = ["$document"], ai.$inject = ["$provide"];
		var la = 22,
			ua = ".",
			da = "0";
		di.$inject = ["$locale"], hi.$inject = ["$locale"];
		var ha = {
				yyyy: vi("FullYear", 4, 0, !1, !0),
				yy: vi("FullYear", 2, 0, !0, !0),
				y: vi("FullYear", 1, 0, !1, !0),
				MMMM: bi("Month"),
				MMM: bi("Month", !0),
				MM: vi("Month", 2, 1),
				M: vi("Month", 1, 1),
				LLLL: bi("Month", !1, !0),
				dd: vi("Date", 2),
				d: vi("Date", 1),
				HH: vi("Hours", 2),
				H: vi("Hours", 1),
				hh: vi("Hours", 2, -12),
				h: vi("Hours", 1, -12),
				mm: vi("Minutes", 2),
				m: vi("Minutes", 1),
				ss: vi("Seconds", 2),
				s: vi("Seconds", 1),
				sss: vi("Milliseconds", 3),
				EEEE: bi("Day"),
				EEE: bi("Day", !0),
				a: wi,
				Z: $i,
				ww: Ti(2),
				w: Ti(1),
				G: _i,
				GG: _i,
				GGG: _i,
				GGGG: Ci
			},
			pa = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
			fa = /^-?\d+$/;
		Si.$inject = ["$locale"];
		var ma = v($r),
			ga = v(xr);
		qi.$inject = ["$parse"];
		var va = v(
			{
				restrict: "E",
				compile: function (e, t)
				{
					if (!t.href && !t.xlinkHref) return function (e, t)
					{
						if ("a" === t[0].nodeName.toLowerCase())
						{
							var n = "[object SVGAnimatedString]" === _r.call(t.prop("href")) ? "xlink:href" : "href";
							t.on("click", function (e)
							{
								t.attr(n) || e.preventDefault()
							})
						}
					}
				}
			}),
			ba = {};
		s(ss, function (e, t)
		{
			function n(e, n, r)
			{
				e.$watch(r[i], function (e)
				{
					r.$set(t, !!e)
				})
			}
			if ("multiple" !== e)
			{
				var i = Et("ng-" + t),
					r = n;
				"checked" === e && (r = function (e, t, r)
				{
					r.ngModel !== r[i] && n(e, t, r)
				}), ba[i] = function ()
				{
					return {
						restrict: "A",
						priority: 100,
						link: r
					}
				}
			}
		}), s(os, function (e, t)
		{
			ba[t] = function ()
			{
				return {
					priority: 100,
					link: function (e, n, i)
					{
						if ("ngPattern" === t && "/" === i.ngPattern.charAt(0))
						{
							var r = i.ngPattern.match(gr);
							if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]))
						}
						e.$watch(i[t], function (e)
						{
							i.$set(t, e)
						})
					}
				}
			}
		}), s(["src", "srcset", "href"], function (e)
		{
			var t = Et("ng-" + e);
			ba[t] = ["$sce", function (n)
			{
				return {
					priority: 99,
					link: function (i, r, s)
					{
						var a = e,
							o = e;
						"href" === e && "[object SVGAnimatedString]" === _r.call(r.prop("href")) && (o = "xlinkHref", s.$attr[o] = "xlink:href", a = null), s.$set(t, n.getTrustedMediaUrl(s[t])), s.$observe(t, function (t)
						{
							if (!t) return void("href" === e && s.$set(o, null));
							s.$set(o, t), dr && a && r.prop(a, s[o])
						})
					}
				}
			}]
		});
		var $a = {
				$addControl: m,
				$getControls: v([]),
				$$renameControl: Mi,
				$removeControl: m,
				$setValidity: m,
				$setDirty: m,
				$setPristine: m,
				$setSubmitted: m,
				$$setSubmitted: m
			},
			xa = "ng-pending";
		Di.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], Di.prototype = {
			$rollbackViewValue: function ()
			{
				s(this.$$controls, function (e)
				{
					e.$rollbackViewValue()
				})
			},
			$commitViewValue: function ()
			{
				s(this.$$controls, function (e)
				{
					e.$commitViewValue()
				})
			},
			$addControl: function (e)
			{
				ge(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), e.$$parentForm = this
			},
			$getControls: function ()
			{
				return Te(this.$$controls)
			},
			$$renameControl: function (e, t)
			{
				var n = e.$name;
				this[n] === e && delete this[n], this[t] = e, e.$name = t
			},
			$removeControl: function (e)
			{
				e.$name && this[e.$name] === e && delete this[e.$name], s(this.$pending, function (t, n)
				{
					this.$setValidity(n, null, e)
				}, this), s(this.$error, function (t, n)
				{
					this.$setValidity(n, null, e)
				}, this), s(this.$$success, function (t, n)
				{
					this.$setValidity(n, null, e)
				}, this), F(this.$$controls, e), e.$$parentForm = $a
			},
			$setDirty: function ()
			{
				this.$$animate.removeClass(this.$$element, ro), this.$$animate.addClass(this.$$element, so), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
			},
			$setPristine: function ()
			{
				this.$$animate.setClass(this.$$element, ro, so + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, s(this.$$controls, function (e)
				{
					e.$setPristine()
				})
			},
			$setUntouched: function ()
			{
				s(this.$$controls, function (e)
				{
					e.$setUntouched()
				})
			},
			$setSubmitted: function ()
			{
				for (var e = this; e.$$parentForm && e.$$parentForm !== $a;) e = e.$$parentForm;
				e.$$setSubmitted()
			},
			$$setSubmitted: function ()
			{
				this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, s(this.$$controls, function (e)
				{
					e.$$setSubmitted && e.$$setSubmitted()
				})
			}
		}, Pi(
		{
			clazz: Di,
			set: function (e, t, n)
			{
				var i = e[t];
				if (i)
				{
					-1 === i.indexOf(n) && i.push(n)
				}
				else e[t] = [n]
			},
			unset: function (e, t, n)
			{
				var i = e[t];
				i && (F(i, n), 0 === i.length && delete e[t])
			}
		});
		var ya = function (e)
			{
				return ["$timeout", "$parse", function (t, n)
				{
					function i(e)
					{
						return "" === e ? n('this[""]').assign : n(e).assign || m
					}
					return {
						name: "form",
						restrict: e ? "EAC" : "E",
						require: ["form", "^^?form"],
						controller: Di,
						compile: function (n, r)
						{
							n.addClass(ro).addClass(no);
							var s = r.name ? "name" : !(!e || !r.ngForm) && "ngForm";
							return {
								pre: function (e, n, r, a)
								{
									var o = a[0];
									if (!("action" in r))
									{
										var c = function (t)
										{
											e.$apply(function ()
											{
												o.$commitViewValue(), o.$setSubmitted()
											}), t.preventDefault()
										};
										n[0].addEventListener("submit", c), n.on("$destroy", function ()
										{
											t(function ()
											{
												n[0].removeEventListener("submit", c)
											}, 0, !1)
										})
									}(a[1] || o.$$parentForm).$addControl(o);
									var l = s ? i(o.$name) : m;
									s && (l(e, o), r.$observe(s, function (t)
									{
										o.$name !== t && (l(e, void 0), o.$$parentForm.$$renameControl(o, t), (l = i(o.$name))(e, o))
									})), n.on("$destroy", function ()
									{
										o.$$parentForm.$removeControl(o), l(e, void 0), d(o, $a)
									})
								}
							}
						}
					}
				}]
			},
			Ta = ya(),
			wa = ya(!0),
			_a = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
			Ca = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
			Sa = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
			Ea = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
			Aa = /^(\d{4,})-(\d{2})-(\d{2})$/,
			ka = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			qa = /^(\d{4,})-W(\d\d)$/,
			Oa = /^(\d{4,})-(\d\d)$/,
			Ma = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
			Da = "keydown wheel mousedown",
			Ra = $e();
		s("date,datetime-local,month,time,week".split(","), function (e)
		{
			Ra[e] = !0
		});
		var Pa = {
				text: Ni,
				date: Ui("date", Aa, Vi(Aa, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
				"datetime-local": Ui("datetimelocal", ka, Vi(ka, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
				time: Ui("time", Ma, Vi(Ma, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
				week: Ui("week", qa, Hi, "yyyy-Www"),
				month: Ui("month", Oa, Vi(Oa, ["yyyy", "MM"]), "yyyy-MM"),
				number: Zi,
				url: Ji,
				email: Xi,
				radio: Qi,
				range: Yi,
				checkbox: tr,
				hidden: m,
				button: m,
				submit: m,
				reset: m,
				file: m
			},
			Ia = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, i)
			{
				return {
					restrict: "E",
					require: ["?ngModel"],
					link:
					{
						pre: function (r, s, a, o)
						{
							o[0] && (Pa[$r(a.type)] || Pa.text)(r, s, a, o[0], t, e, n, i)
						}
					}
				}
			}],
			La = function ()
			{
				var e = {
					configurable: !0,
					enumerable: !1,
					get: function ()
					{
						return this.getAttribute("value") || ""
					},
					set: function (e)
					{
						this.setAttribute("value", e)
					}
				};
				return {
					restrict: "E",
					priority: 200,
					compile: function (t, n)
					{
						if ("hidden" === $r(n.type)) return {
							pre: function (t, n, i, r)
							{
								var s = n[0];
								s.parentNode && s.parentNode.insertBefore(s, s.nextSibling), Object.defineProperty && Object.defineProperty(s, "value", e)
							}
						}
					}
				}
			},
			Na = /^(true|false|\d+)$/,
			ja = function ()
			{
				function e(e, t, n)
				{
					var i = x(n) ? n : 9 === dr ? "" : null;
					e.prop("value", i), t.$set("value", n)
				}
				return {
					restrict: "A",
					priority: 100,
					compile: function (t, n)
					{
						return Na.test(n.ngValue) ? function (t, n, i)
						{
							e(n, i, t.$eval(i.ngValue))
						} : function (t, n, i)
						{
							t.$watch(i.ngValue, function (t)
							{
								e(n, i, t)
							})
						}
					}
				}
			},
			Ha = ["$compile", function (e)
			{
				return {
					restrict: "AC",
					compile: function (t)
					{
						return e.$$addBindingClass(t),
							function (t, n, i)
							{
								e.$$addBindingInfo(n, i.ngBind), n = n[0], t.$watch(i.ngBind, function (e)
								{
									n.textContent = xe(e)
								})
							}
					}
				}
			}],
			Va = ["$interpolate", "$compile", function (e, t)
			{
				return {
					compile: function (n)
					{
						return t.$$addBindingClass(n),
							function (n, i, r)
							{
								var s = e(i.attr(r.$attr.ngBindTemplate));
								t.$$addBindingInfo(i, s.expressions), i = i[0], r.$observe("ngBindTemplate", function (e)
								{
									i.textContent = $(e) ? "" : e
								})
							}
					}
				}
			}],
			Ua = ["$sce", "$parse", "$compile", function (e, t, n)
			{
				return {
					restrict: "A",
					compile: function (i, r)
					{
						var s = t(r.ngBindHtml),
							a = t(r.ngBindHtml, function (t)
							{
								return e.valueOf(t)
							});
						return n.$$addBindingClass(i),
							function (t, i, r)
							{
								n.$$addBindingInfo(i, r.ngBindHtml), t.$watch(a, function ()
								{
									var n = s(t);
									i.html(e.getTrustedHtml(n) || "")
								})
							}
					}
				}
			}],
			Fa = v(
			{
				restrict: "A",
				require: "ngModel",
				link: function (e, t, n, i)
				{
					i.$viewChangeListeners.push(function ()
					{
						e.$eval(n.ngChange)
					})
				}
			}),
			Ba = nr("", !0),
			za = nr("Odd", 0),
			Wa = nr("Even", 1),
			Ga = Oi(
			{
				compile: function (e, t)
				{
					t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
				}
			}),
			Ka = [function ()
			{
				return {
					restrict: "A",
					scope: !0,
					controller: "@",
					priority: 500
				}
			}],
			Za = {},
			Ya = {
				blur: !0,
				focus: !0
			};
		s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e)
		{
			var t = Et("ng-" + e);
			Za[t] = ["$parse", "$rootScope", "$exceptionHandler", function (n, i, r)
			{
				return ir(n, i, r, t, e, Ya[e])
			}]
		});
		var Ja = ["$animate", "$compile", function (e, t)
			{
				return {
					multiElement: !0,
					transclude: "element",
					priority: 600,
					terminal: !0,
					restrict: "A",
					$$tlb: !0,
					link: function (n, i, r, s, a)
					{
						var o, c, l;
						n.$watch(r.ngIf, function (n)
						{
							n ? c || a(function (n, s)
							{
								c = s, n[n.length++] = t.$$createComment("end ngIf", r.ngIf), o = {
									clone: n
								}, e.enter(n, i.parent(), i)
							}) : (l && (l.remove(), l = null), c && (c.$destroy(), c = null), o && (l = be(o.clone), e.leave(l).done(function (e)
							{
								!1 !== e && (l = null)
							}), o = null))
						})
					}
				}
			}],
			Xa = ["$templateRequest", "$anchorScroll", "$animate", function (e, t, n)
			{
				return {
					restrict: "ECA",
					priority: 400,
					terminal: !0,
					transclude: "element",
					controller: Er.noop,
					compile: function (i, r)
					{
						var s = r.ngInclude || r.src,
							a = r.onload || "",
							o = r.autoscroll;
						return function (i, r, c, l, u)
						{
							var d, h, p, f = 0,
								m = function ()
								{
									h && (h.remove(), h = null), d && (d.$destroy(), d = null), p && (n.leave(p).done(function (e)
									{
										!1 !== e && (h = null)
									}), h = p, p = null)
								};
							i.$watch(s, function (s)
							{
								var c = function (e)
									{
										!1 === e || !x(o) || o && !i.$eval(o) || t()
									},
									h = ++f;
								s ? (e(s, !0).then(function (e)
								{
									if (!i.$$destroyed && h === f)
									{
										var t = i.$new();
										l.template = e;
										var o = u(t, function (e)
										{
											m(), n.enter(e, null, r).done(c)
										});
										d = t, p = o, d.$emit("$includeContentLoaded", s), i.$eval(a)
									}
								}, function ()
								{
									i.$$destroyed || h === f && (m(), i.$emit("$includeContentError", s))
								}), i.$emit("$includeContentRequested", s)) : (m(), l.template = null)
							})
						}
					}
				}
			}],
			Qa = ["$compile", function (t)
			{
				return {
					restrict: "ECA",
					priority: -400,
					require: "ngInclude",
					link: function (n, i, r, s)
					{
						if (_r.call(i[0]).match(/SVG/)) return i.empty(), void t(Me(s.template, e.document).childNodes)(n, function (e)
						{
							i.append(e)
						},
						{
							futureParentElement: i
						});
						i.html(s.template), t(i.contents())(n)
					}
				}
			}],
			eo = Oi(
			{
				priority: 450,
				compile: function ()
				{
					return {
						pre: function (e, t, n)
						{
							e.$eval(n.ngInit)
						}
					}
				}
			}),
			to = function ()
			{
				return {
					restrict: "A",
					priority: 100,
					require: "ngModel",
					link: function (e, t, n, i)
					{
						var r = n.ngList || ", ",
							a = "false" !== n.ngTrim,
							o = a ? Or(r) : r,
							c = function (e)
							{
								if (!$(e))
								{
									var t = [];
									return e && s(e.split(o), function (e)
									{
										e && t.push(a ? Or(e) : e)
									}), t
								}
							};
						i.$parsers.push(c), i.$formatters.push(function (e)
						{
							if (S(e)) return e.join(r)
						}), i.$isEmpty = function (e)
						{
							return !e || !e.length
						}
					}
				}
			},
			no = "ng-valid",
			io = "ng-invalid",
			ro = "ng-pristine",
			so = "ng-dirty",
			ao = i("ngModel");
		rr.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"], rr.prototype = {
			$$initGetterSetters: function ()
			{
				if (this.$options.getOption("getterSetter"))
				{
					var e = this.$$parse(this.$$attr.ngModel + "()"),
						t = this.$$parse(this.$$attr.ngModel + "($$$p)");
					this.$$ngModelGet = function (t)
					{
						var n = this.$$parsedNgModel(t);
						return A(n) && (n = e(t)), n
					}, this.$$ngModelSet = function (e, n)
					{
						A(this.$$parsedNgModel(e)) ? t(e,
						{
							$$$p: n
						}) : this.$$parsedNgModelAssign(e, n)
					}
				}
				else if (!this.$$parsedNgModel.assign) throw ao("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, ne(this.$$element))
			},
			$render: m,
			$isEmpty: function (e)
			{
				return $(e) || "" === e || null === e || e !== e
			},
			$$updateEmptyClasses: function (e)
			{
				this.$isEmpty(e) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
			},
			$setPristine: function ()
			{
				this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, so), this.$$animate.addClass(this.$$element, ro)
			},
			$setDirty: function ()
			{
				this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, ro), this.$$animate.addClass(this.$$element, so), this.$$parentForm.$setDirty()
			},
			$setUntouched: function ()
			{
				this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
			},
			$setTouched: function ()
			{
				this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
			},
			$rollbackViewValue: function ()
			{
				this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
			},
			$validate: function ()
			{
				if (!kr(this.$modelValue))
				{
					var e = this.$$lastCommittedViewValue,
						t = this.$$rawModelValue,
						n = this.$valid,
						i = this.$modelValue,
						r = this.$options.getOption("allowInvalid"),
						s = this;
					this.$$runValidators(t, e, function (e)
					{
						r || n === e || (s.$modelValue = e ? t : void 0, s.$modelValue !== i && s.$$writeModelToScope())
					})
				}
			},
			$$runValidators: function (e, t, n)
			{
				function i(e, t)
				{
					a === o.$$currentValidationRunId && o.$setValidity(e, t)
				}

				function r(e)
				{
					a === o.$$currentValidationRunId && n(e)
				}
				this.$$currentValidationRunId++;
				var a = this.$$currentValidationRunId,
					o = this;
				return function ()
				{
					var e = o.$$parserName;
					return $(o.$$parserValid) ? (i(e, null), !0) : (o.$$parserValid || (s(o.$validators, function (e, t)
					{
						i(t, null)
					}), s(o.$asyncValidators, function (e, t)
					{
						i(t, null)
					})), i(e, o.$$parserValid), o.$$parserValid)
				}() && function ()
				{
					var n = !0;
					return s(o.$validators, function (r, s)
					{
						var a = Boolean(r(e, t));
						n = n && a, i(s, a)
					}), !!n || (s(o.$asyncValidators, function (e, t)
					{
						i(t, null)
					}), !1)
				}() ? void
				function ()
				{
					var n = [],
						a = !0;
					s(o.$asyncValidators, function (r, s)
					{
						var o = r(e, t);
						if (!I(o)) throw ao("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", o);
						i(s, void 0), n.push(o.then(function ()
						{
							i(s, !0)
						}, function ()
						{
							a = !1, i(s, !1)
						}))
					}), n.length ? o.$$q.all(n).then(function ()
					{
						r(a)
					}, m) : r(!0)
				}(): void r(!1)
			},
			$commitViewValue: function ()
			{
				var e = this.$viewValue;
				this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== e || "" === e && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(e), this.$$lastCommittedViewValue = e, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
			},
			$$parseAndValidate: function ()
			{
				function e()
				{
					i.$modelValue !== s && i.$$writeModelToScope()
				}
				var t = this.$$lastCommittedViewValue,
					n = t,
					i = this;
				if (this.$$parserValid = !$(n) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid)
					for (var r = 0; r < this.$parsers.length; r++)
						if (n = this.$parsers[r](n), $(n))
						{
							this.$$parserValid = !1;
							break
						}
				kr(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
				var s = this.$modelValue,
					a = this.$options.getOption("allowInvalid");
				this.$$rawModelValue = n, a && (this.$modelValue = n, e()), this.$$runValidators(n, this.$$lastCommittedViewValue, function (t)
				{
					a || (i.$modelValue = t ? n : void 0, e())
				})
			},
			$$writeModelToScope: function ()
			{
				this.$$ngModelSet(this.$$scope, this.$modelValue), s(this.$viewChangeListeners, function (e)
				{
					try
					{
						e()
					}
					catch (e)
					{
						this.$$exceptionHandler(e)
					}
				}, this)
			},
			$setViewValue: function (e, t)
			{
				this.$viewValue = e, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
			},
			$$debounceViewValueCommit: function (e)
			{
				var t = this.$options.getOption("debounce");
				_(t[e]) ? t = t[e] : _(t.default) && -1 === this.$options.getOption("updateOn").indexOf(e) ? t = t.default : _(t["*"]) && (t = t["*"]), this.$$timeout.cancel(this.$$pendingDebounce);
				var n = this;
				t > 0 ? this.$$pendingDebounce = this.$$timeout(function ()
				{
					n.$commitViewValue()
				}, t) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function ()
				{
					n.$commitViewValue()
				})
			},
			$overrideModelOptions: function (e)
			{
				this.$options = this.$options.createChild(e), this.$$setUpdateOnEvents()
			},
			$processModelValue: function ()
			{
				var e = this.$$format();
				this.$viewValue !== e && (this.$$updateEmptyClasses(e), this.$viewValue = this.$$lastCommittedViewValue = e, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, m))
			},
			$$format: function ()
			{
				for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--;) n = e[t](n);
				return n
			},
			$$setModelValue: function (e)
			{
				this.$modelValue = this.$$rawModelValue = e, this.$$parserValid = void 0, this.$processModelValue()
			},
			$$setUpdateOnEvents: function ()
			{
				this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), this.$$updateEvents = this.$options.getOption("updateOn"), this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
			},
			$$updateEventHandler: function (e)
			{
				this.$$debounceViewValueCommit(e && e.type)
			}
		}, Pi(
		{
			clazz: rr,
			set: function (e, t)
			{
				e[t] = !0
			},
			unset: function (e, t)
			{
				delete e[t]
			}
		});
		var oo, co = ["$rootScope", function (e)
			{
				return {
					restrict: "A",
					require: ["ngModel", "^?form", "^?ngModelOptions"],
					controller: rr,
					priority: 1,
					compile: function (t)
					{
						return t.addClass(ro).addClass("ng-untouched").addClass(no),
						{
							pre: function (e, t, n, i)
							{
								var r = i[0],
									s = i[1] || r.$$parentForm,
									a = i[2];
								a && (r.$options = a.$options), r.$$initGetterSetters(), s.$addControl(r), n.$observe("name", function (e)
								{
									r.$name !== e && r.$$parentForm.$$renameControl(r, e)
								}), e.$on("$destroy", function ()
								{
									r.$$parentForm.$removeControl(r)
								})
							},
							post: function (t, n, i, r)
							{
								function s()
								{
									a.$setTouched()
								}
								var a = r[0];
								a.$$setUpdateOnEvents(), n.on("blur", function ()
								{
									a.$touched || (e.$$phase ? t.$evalAsync(s) : t.$apply(s))
								})
							}
						}
					}
				}
			}],
			lo = /(\s+|^)default(\s+|$)/;
		ar.prototype = {
			getOption: function (e)
			{
				return this.$$options[e]
			},
			createChild: function (e)
			{
				var t = !1;
				return e = d(
				{}, e), s(e, function (n, i)
				{
					"$inherit" === n ? "*" === i ? t = !0 : (e[i] = this.$$options[i], "updateOn" === i && (e.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === i && (e.updateOnDefault = !1, e[i] = Or(n.replace(lo, function ()
					{
						return e.updateOnDefault = !0, " "
					})))
				}, this), t && (delete e["*"], or(e, this.$$options)), or(e, oo.$$options), new ar(e)
			}
		}, oo = new ar(
		{
			updateOn: "",
			updateOnDefault: !0,
			debounce: 0,
			getterSetter: !1,
			allowInvalid: !1,
			timezone: null
		});
		var uo = function ()
			{
				function e(e, t)
				{
					this.$$attrs = e, this.$$scope = t
				}
				return e.$inject = ["$attrs", "$scope"], e.prototype = {
					$onInit: function ()
					{
						var e = this.parentCtrl ? this.parentCtrl.$options : oo,
							t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
						this.$options = e.createChild(t)
					}
				},
				{
					restrict: "A",
					priority: 10,
					require:
					{
						parentCtrl: "?^^ngModelOptions"
					},
					bindToController: !0,
					controller: e
				}
			},
			ho = Oi(
			{
				terminal: !0,
				priority: 1e3
			}),
			po = i("ngOptions"),
			fo = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
			mo = ["$compile", "$document", "$parse", function (t, n, i)
			{
				function a(e, t, n)
				{
					function s(e, t, n, i, r)
					{
						this.selectValue = e, this.viewValue = t, this.label = n, this.group = i, this.disabled = r
					}

					function a(e)
					{
						var t;
						if (!l && r(e)) t = e;
						else
						{
							t = [];
							for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
						}
						return t
					}
					var o = e.match(fo);
					if (!o) throw po("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, ne(t));
					var c = o[5] || o[7],
						l = o[6],
						u = / as /.test(o[0]) && o[1],
						d = o[9],
						h = i(o[2] ? o[1] : c),
						p = u && i(u),
						f = p || h,
						m = d && i(d),
						g = d ? function (e, t)
						{
							return m(n, t)
						} : function (e)
						{
							return at(e)
						},
						v = function (e, t)
						{
							return g(e, w(e, t))
						},
						b = i(o[2] || o[1]),
						$ = i(o[3] || ""),
						x = i(o[4] || ""),
						y = i(o[8]),
						T = {},
						w = l ? function (e, t)
						{
							return T[l] = t, T[c] = e, T
						} : function (e)
						{
							return T[c] = e, T
						};
					return {
						trackBy: d,
						getTrackByValue: v,
						getWatchables: i(y, function (e)
						{
							var t = [];
							e = e || [];
							for (var i = a(e), r = i.length, s = 0; s < r; s++)
							{
								var c = e === i ? s : i[s],
									l = e[c],
									u = w(l, c),
									d = g(l, u);
								if (t.push(d), o[2] || o[1])
								{
									var h = b(n, u);
									t.push(h)
								}
								if (o[4])
								{
									var p = x(n, u);
									t.push(p)
								}
							}
							return t
						}),
						getOptions: function ()
						{
							for (var e = [], t = {}, i = y(n) || [], r = a(i), o = r.length, c = 0; c < o; c++)
							{
								var l = i === r ? c : r[c],
									u = i[l],
									h = w(u, l),
									p = f(n, h),
									m = g(p, h),
									T = b(n, h),
									_ = $(n, h),
									C = x(n, h),
									S = new s(m, p, T, _, C);
								e.push(S), t[m] = S
							}
							return {
								items: e,
								selectValueMap: t,
								getOptionFromViewValue: function (e)
								{
									return t[v(e)]
								},
								getViewValueFromOption: function (e)
								{
									return d ? B(e.viewValue) : e.viewValue
								}
							}
						}
					}
				}

				function o(e, i, r, o)
				{
					function u(e, t)
					{
						var n = c.cloneNode(!1);
						t.appendChild(n), h(e, n)
					}

					function d(e)
					{
						var t = T.getOptionFromViewValue(e),
							n = t && t.element;
						return n && !n.selected && (n.selected = !0), t
					}

					function h(e, t)
					{
						e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), t.value = e.selectValue
					}

					function p()
					{
						var e = T && f.readValue();
						if (T)
							for (var t = T.items.length - 1; t >= 0; t--)
							{
								var n = T.items[t];
								Je(x(n.group) ? n.element.parentNode : n.element)
							}
						T = w.getOptions();
						var r = {};
						if (T.items.forEach(function (e)
							{
								var t;
								x(e.group) ? (t = r[e.group], t || (t = l.cloneNode(!1), _.appendChild(t), t.label = null === e.group ? "null" : e.group, r[e.group] = t), u(e, t)) : u(e, _)
							}), i[0].appendChild(_), m.$render(), !m.$isEmpty(e))
						{
							var s = f.readValue();
							(w.trackBy || g ? W(e, s) : e === s) || (m.$setViewValue(s), m.$render())
						}
					}
					for (var f = o[0], m = o[1], g = r.multiple, v = 0, b = i.children(), $ = b.length; v < $; v++)
						if ("" === b[v].value)
						{
							f.hasEmptyOption = !0, f.emptyOption = b.eq(v);
							break
						}
					i.empty();
					var y = !!f.emptyOption;
					hr(c.cloneNode(!1)).val("?");
					var T, w = a(r.ngOptions, i, e),
						_ = n[0].createDocumentFragment();
					f.generateUnknownOptionValue = function (e)
					{
						return "?"
					}, g ? (f.writeValue = function (e)
					{
						if (T)
						{
							var t = e && e.map(d) || [];
							T.items.forEach(function (e)
							{
								e.element.selected && !U(t, e) && (e.element.selected = !1)
							})
						}
					}, f.readValue = function ()
					{
						var e = i.val() || [],
							t = [];
						return s(e, function (e)
						{
							var n = T.selectValueMap[e];
							n && !n.disabled && t.push(T.getViewValueFromOption(n))
						}), t
					}, w.trackBy && e.$watchCollection(function ()
					{
						if (S(m.$viewValue)) return m.$viewValue.map(function (e)
						{
							return w.getTrackByValue(e)
						})
					}, function ()
					{
						m.$render()
					})) : (f.writeValue = function (e)
					{
						if (T)
						{
							var t = i[0].options[i[0].selectedIndex],
								n = T.getOptionFromViewValue(e);
							t && t.removeAttribute("selected"), n ? (i[0].value !== n.selectValue && (f.removeUnknownOption(), i[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : f.selectUnknownOrEmptyOption(e)
						}
					}, f.readValue = function ()
					{
						var e = T.selectValueMap[i.val()];
						return e && !e.disabled ? (f.unselectEmptyOption(), f.removeUnknownOption(), T.getViewValueFromOption(e)) : null
					}, w.trackBy && e.$watch(function ()
					{
						return w.getTrackByValue(m.$viewValue)
					}, function ()
					{
						m.$render()
					})), y && (t(f.emptyOption)(e), i.prepend(f.emptyOption), f.emptyOption[0].nodeType === Ur ? (f.hasEmptyOption = !1, f.registerOption = function (e, t)
					{
						"" === t.val() && (f.hasEmptyOption = !0, f.emptyOption = t, f.emptyOption.removeClass("ng-scope"), m.$render(), t.on("$destroy", function ()
						{
							var e = f.$isEmptyOptionSelected();
							f.hasEmptyOption = !1, f.emptyOption = void 0, e && m.$render()
						}))
					}) : f.emptyOption.removeClass("ng-scope")), e.$watchCollection(w.getWatchables, p)
				}
				var c = e.document.createElement("option"),
					l = e.document.createElement("optgroup");
				return {
					restrict: "A",
					terminal: !0,
					require: ["select", "ngModel"],
					link:
					{
						pre: function (e, t, n, i)
						{
							i[0].registerOption = m
						},
						post: o
					}
				}
			}],
			go = ["$locale", "$interpolate", "$log", function (e, t, n)
			{
				var i = /{}/g,
					r = /^when(Minus)?(.+)$/;
				return {
					link: function (a, o, c)
					{
						function l(e)
						{
							o.text(e || "")
						}
						var u, d = c.count,
							h = c.$attr.when && o.attr(c.$attr.when),
							p = c.offset || 0,
							f = a.$eval(h) ||
							{},
							g = {},
							v = t.startSymbol(),
							b = t.endSymbol(),
							x = v + d + "-" + p + b,
							y = Er.noop;
						s(c, function (e, t)
						{
							var n = r.exec(t);
							if (n)
							{
								var i = (n[1] ? "-" : "") + $r(n[2]);
								f[i] = o.attr(c.$attr[t])
							}
						}), s(f, function (e, n)
						{
							g[n] = t(e.replace(i, x))
						}), a.$watch(d, function (t)
						{
							var i = parseFloat(t),
								r = kr(i);
							if (r || i in f || (i = e.pluralCat(i - p)), !(i === u || r && kr(u)))
							{
								y();
								var s = g[i];
								$(s) ? (null != t && n.debug("ngPluralize: no rule defined for '" + i + "' in " + h), y = m, l()) : y = a.$watch(s, l), u = i
							}
						})
					}
				}
			}],
			vo = i("ngRef"),
			bo = ["$parse", function (e)
			{
				return {
					priority: -1,
					restrict: "A",
					compile: function (t, n)
					{
						var i = Et(V(t)),
							r = e(n.ngRef),
							s = r.assign || function ()
							{
								throw vo("nonassign", 'Expression in ngRef="{0}" is non-assignable!', n.ngRef)
							};
						return function (e, t, a)
						{
							var o;
							if (a.hasOwnProperty("ngRefRead"))
							{
								if ("$element" === a.ngRefRead) o = t;
								else if (!(o = t.data("$" + a.ngRefRead + "Controller"))) throw vo("noctrl", 'The controller for ngRefRead="{0}" could not be found on ngRef="{1}"', a.ngRefRead, n.ngRef)
							}
							else o = t.data("$" + i + "Controller");
							o = o || t, s(e, o), t.on("$destroy", function ()
							{
								r(e) === o && s(e, null)
							})
						}
					}
				}
			}],
			$o = ["$parse", "$animate", "$compile", function (e, t, n)
			{
				var a = i("ngRepeat"),
					o = function (e, t, n, i, r, s, a)
					{
						e[n] = i, r && (e[r] = s), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 == (1 & t))
					},
					c = function (e)
					{
						return e.clone[0]
					},
					l = function (e)
					{
						return e.clone[e.clone.length - 1]
					},
					u = function (e, t, n)
					{
						return at(n)
					},
					d = function (e, t)
					{
						return t
					};
				return {
					restrict: "A",
					multiElement: !0,
					transclude: "element",
					priority: 1e3,
					terminal: !0,
					$$tlb: !0,
					compile: function (i, h)
					{
						var p = h.ngRepeat,
							f = n.$$createComment("end ngRepeat", p),
							m = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
						if (!m) throw a("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
						var g = m[1],
							v = m[2],
							b = m[3],
							$ = m[4];
						if (!(m = g.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw a("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
						var x = m[3] || m[1],
							y = m[2];
						if (b && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(b) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(b))) throw a("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", b);
						var T;
						if ($)
						{
							var w = {
									$id: at
								},
								_ = e($);
							T = function (e, t, n, i)
							{
								return y && (w[y] = t), w[x] = n, w.$index = i, _(e, w)
							}
						}
						return function (e, n, i, h, m)
						{
							var g = $e();
							e.$watchCollection(v, function (i)
							{
								var h, v, $, _, C, S, E, A, k, q, O, M, D = n[0],
									R = $e();
								if (b && (e[b] = i), r(i)) k = i, A = T || u;
								else
								{
									A = T || d, k = [];
									for (var P in i) br.call(i, P) && "$" !== P.charAt(0) && k.push(P)
								}
								for (_ = k.length, O = new Array(_), h = 0; h < _; h++)
									if (C = i === k ? h : k[h], S = i[C], E = A(e, C, S, h), g[E]) q = g[E], delete g[E], R[E] = q, O[h] = q;
									else
									{
										if (R[E]) throw s(O, function (e)
										{
											e && e.scope && (g[e.id] = e)
										}), a("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, E, S);
										O[h] = {
											id: E,
											scope: void 0,
											clone: void 0
										}, R[E] = !0
									}
								w && (w[x] = void 0);
								for (var I in g)
								{
									if (q = g[I], M = be(q.clone), t.leave(M), M[0].parentNode)
										for (h = 0, v = M.length; h < v; h++) M[h].$$NG_REMOVED = !0;
									q.scope.$destroy()
								}
								for (h = 0; h < _; h++)
									if (C = i === k ? h : k[h], S = i[C], q = O[h], q.scope)
									{
										$ = D;
										do {
											$ = $.nextSibling
										} while ($ && $.$$NG_REMOVED);
										c(q) !== $ && t.move(be(q.clone), null, D), D = l(q), o(q.scope, h, x, S, y, C, _)
									}
								else m(function (e, n)
								{
									q.scope = n;
									var i = f.cloneNode(!1);
									e[e.length++] = i, t.enter(e, null, D), D = i, q.clone = e, R[q.id] = q, o(q.scope, h, x, S, y, C, _)
								});
								g = R
							})
						}
					}
				}
			}],
			xo = ["$animate", function (e)
			{
				return {
					restrict: "A",
					multiElement: !0,
					link: function (t, n, i)
					{
						t.$watch(i.ngShow, function (t)
						{
							e[t ? "removeClass" : "addClass"](n, "ng-hide",
							{
								tempClasses: "ng-hide-animate"
							})
						})
					}
				}
			}],
			yo = ["$animate", function (e)
			{
				return {
					restrict: "A",
					multiElement: !0,
					link: function (t, n, i)
					{
						t.$watch(i.ngHide, function (t)
						{
							e[t ? "addClass" : "removeClass"](n, "ng-hide",
							{
								tempClasses: "ng-hide-animate"
							})
						})
					}
				}
			}],
			To = Oi(function (e, t, n)
			{
				e.$watchCollection(n.ngStyle, function (e, n)
				{
					n && e !== n && s(n, function (e, n)
					{
						t.css(n, "")
					}), e && t.css(e)
				})
			}),
			wo = ["$animate", "$compile", function (e, t)
			{
				return {
					require: "ngSwitch",
					controller: ["$scope", function ()
					{
						this.cases = {}
					}],
					link: function (n, i, r, a)
					{
						var o = r.ngSwitch || r.on,
							c = [],
							l = [],
							u = [],
							d = [],
							h = function (e, t)
							{
								return function (n)
								{
									!1 !== n && e.splice(t, 1)
								}
							};
						n.$watch(o, function (n)
						{
							for (var i, r; u.length;) e.cancel(u.pop());
							for (i = 0, r = d.length; i < r; ++i)
							{
								var o = be(l[i].clone);
								d[i].$destroy();
								(u[i] = e.leave(o)).done(h(u, i))
							}
							l.length = 0, d.length = 0, (c = a.cases["!" + n] || a.cases["?"]) && s(c, function (n)
							{
								n.transclude(function (i, r)
								{
									d.push(r);
									var s = n.element;
									i[i.length++] = t.$$createComment("end ngSwitchWhen");
									var a = {
										clone: i
									};
									l.push(a), e.enter(i, s.parent(), s)
								})
							})
						})
					}
				}
			}],
			_o = Oi(
			{
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function (e, t, n, i, r)
				{
					s(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function (e, t, n)
					{
						return n[t - 1] !== e
					}), function (e)
					{
						i.cases["!" + e] = i.cases["!" + e] || [], i.cases["!" + e].push(
						{
							transclude: r,
							element: t
						})
					})
				}
			}),
			Co = Oi(
			{
				transclude: "element",
				priority: 1200,
				require: "^ngSwitch",
				multiElement: !0,
				link: function (e, t, n, i, r)
				{
					i.cases["?"] = i.cases["?"] || [], i.cases["?"].push(
					{
						transclude: r,
						element: t
					})
				}
			}),
			So = i("ngTransclude"),
			Eo = ["$compile", function (e)
			{
				return {
					restrict: "EAC",
					compile: function (t)
					{
						var n = e(t.contents());
						return t.empty(),
							function (e, t, i, r, s)
							{
								function a(e, n)
								{
									e.length && c(e) ? t.append(e) : (o(), n.$destroy())
								}

								function o()
								{
									n(e, function (e)
									{
										t.append(e)
									})
								}

								function c(e)
								{
									for (var t = 0, n = e.length; t < n; t++)
									{
										var i = e[t];
										if (i.nodeType !== Vr || i.nodeValue.trim()) return !0
									}
								}
								if (!s) throw So("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", ne(t));
								i.ngTransclude === i.$attr.ngTransclude && (i.ngTransclude = "");
								var l = i.ngTransclude || i.ngTranscludeSlot;
								s(a, null, l), l && !s.isSlotFilled(l) && o()
							}
					}
				}
			}],
			Ao = ["$templateCache", function (e)
			{
				return {
					restrict: "E",
					terminal: !0,
					compile: function (t, n)
					{
						if ("text/ng-template" === n.type)
						{
							var i = n.id,
								r = t[0].text;
							e.put(i, r)
						}
					}
				}
			}],
			ko = {
				$setViewValue: m,
				$render: m
			},
			qo = ["$element", "$scope", function (t, n)
			{
				function i()
				{
					o || (o = !0, n.$$postDigest(function ()
					{
						o = !1, s.ngModelCtrl.$render()
					}))
				}

				function r(e)
				{
					c || (c = !0, n.$$postDigest(function ()
					{
						n.$$destroyed || (c = !1, s.ngModelCtrl.$setViewValue(s.readValue()), e && s.ngModelCtrl.$render())
					}))
				}
				var s = this,
					a = new ls;
				s.selectValueMap = {}, s.ngModelCtrl = ko, s.multiple = !1, s.unknownOption = hr(e.document.createElement("option")), s.hasEmptyOption = !1, s.emptyOption = void 0, s.renderUnknownOption = function (e)
				{
					var n = s.generateUnknownOptionValue(e);
					s.unknownOption.val(n), t.prepend(s.unknownOption), cr(s.unknownOption, !0), t.val(n)
				}, s.updateUnknownOption = function (e)
				{
					var n = s.generateUnknownOptionValue(e);
					s.unknownOption.val(n), cr(s.unknownOption, !0), t.val(n)
				}, s.generateUnknownOptionValue = function (e)
				{
					return "? " + at(e) + " ?"
				}, s.removeUnknownOption = function ()
				{
					s.unknownOption.parent() && s.unknownOption.remove()
				}, s.selectEmptyOption = function ()
				{
					s.emptyOption && (t.val(""), cr(s.emptyOption, !0))
				}, s.unselectEmptyOption = function ()
				{
					s.hasEmptyOption && cr(s.emptyOption, !1)
				}, n.$on("$destroy", function ()
				{
					s.renderUnknownOption = m
				}), s.readValue = function ()
				{
					var e = t.val(),
						n = e in s.selectValueMap ? s.selectValueMap[e] : e;
					return s.hasOption(n) ? n : null
				}, s.writeValue = function (e)
				{
					var n = t[0].options[t[0].selectedIndex];
					if (n && cr(hr(n), !1), s.hasOption(e))
					{
						s.removeUnknownOption();
						var i = at(e);
						t.val(i in s.selectValueMap ? i : e);
						var r = t[0].options[t[0].selectedIndex];
						cr(hr(r), !0)
					}
					else s.selectUnknownOrEmptyOption(e)
				}, s.addOption = function (e, t)
				{
					if (t[0].nodeType !== Ur)
					{
						ge(e, '"option value"'), "" === e && (s.hasEmptyOption = !0, s.emptyOption = t);
						var n = a.get(e) || 0;
						a.set(e, n + 1), i()
					}
				}, s.removeOption = function (e)
				{
					var t = a.get(e);
					t && (1 === t ? (a.delete(e), "" === e && (s.hasEmptyOption = !1, s.emptyOption = void 0)) : a.set(e, t - 1))
				}, s.hasOption = function (e)
				{
					return !!a.get(e)
				}, s.$hasEmptyOption = function ()
				{
					return s.hasEmptyOption
				}, s.$isUnknownOptionSelected = function ()
				{
					return t[0].options[0] === s.unknownOption[0]
				}, s.$isEmptyOptionSelected = function ()
				{
					return s.hasEmptyOption && t[0].options[t[0].selectedIndex] === s.emptyOption[0]
				}, s.selectUnknownOrEmptyOption = function (e)
				{
					null == e && s.emptyOption ? (s.removeUnknownOption(), s.selectEmptyOption()) : s.unknownOption.parent().length ? s.updateUnknownOption(e) : s.renderUnknownOption(e)
				};
				var o = !1,
					c = !1;
				s.registerOption = function (e, t, n, a, o)
				{
					if (n.$attr.ngValue)
					{
						var c, l;
						n.$observe("value", function (e)
						{
							var n, i = t.prop("selected");
							x(l) && (s.removeOption(c), delete s.selectValueMap[l], n = !0), l = at(e), c = e, s.selectValueMap[l] = e, s.addOption(e, t), t.attr("value", l), n && i && r()
						})
					}
					else a ? n.$observe("value", function (e)
					{
						s.readValue();
						var n, i = t.prop("selected");
						x(c) && (s.removeOption(c), n = !0), c = e, s.addOption(e, t), n && i && r()
					}) : o ? e.$watch(o, function (e, i)
					{
						n.$set("value", e);
						var a = t.prop("selected");
						i !== e && s.removeOption(i), s.addOption(e, t), i && a && r()
					}) : s.addOption(n.value, t);
					n.$observe("disabled", function (e)
					{
						("true" === e || e && t.prop("selected")) && (s.multiple ? r(!0) : (s.ngModelCtrl.$setViewValue(null), s.ngModelCtrl.$render()))
					}), t.on("$destroy", function ()
					{
						var e = s.readValue(),
							t = n.value;
						s.removeOption(t), i(), (s.multiple && e && -1 !== e.indexOf(t) || e === t) && r(!0)
					})
				}
			}],
			Oo = function ()
			{
				function e(e, t, n, i)
				{
					var r = i[0],
						a = i[1];
					if (!a) return void(r.registerOption = m);
					if (r.ngModelCtrl = a, t.on("change", function ()
						{
							r.removeUnknownOption(), e.$apply(function ()
							{
								a.$setViewValue(r.readValue())
							})
						}), n.multiple)
					{
						r.multiple = !0, r.readValue = function ()
						{
							var e = [];
							return s(t.find("option"), function (t)
							{
								if (t.selected && !t.disabled)
								{
									var n = t.value;
									e.push(n in r.selectValueMap ? r.selectValueMap[n] : n)
								}
							}), e
						}, r.writeValue = function (e)
						{
							s(t.find("option"), function (t)
							{
								var n = !!e && (U(e, t.value) || U(e, r.selectValueMap[t.value]));
								n !== t.selected && cr(hr(t), n)
							})
						};
						var o, c = NaN;
						e.$watch(function ()
						{
							c !== a.$viewValue || W(o, a.$viewValue) || (o = Te(a.$viewValue), a.$render()), c = a.$viewValue
						}), a.$isEmpty = function (e)
						{
							return !e || 0 === e.length
						}
					}
				}

				function t(e, t, n, i)
				{
					var r = i[1];
					if (r)
					{
						var s = i[0];
						r.$render = function ()
						{
							s.writeValue(r.$viewValue)
						}
					}
				}
				return {
					restrict: "E",
					require: ["select", "?ngModel"],
					controller: qo,
					priority: 1,
					link:
					{
						pre: e,
						post: t
					}
				}
			},
			Mo = ["$interpolate", function (e)
			{
				return {
					restrict: "E",
					priority: 100,
					compile: function (t, n)
					{
						var i, r;
						return x(n.ngValue) || (x(n.value) ? i = e(n.value, !0) : (r = e(t.text(), !0)) || n.$set("value", t.text())),
							function (e, t, n)
							{
								var s = t.parent(),
									a = s.data("$selectController") || s.parent().data("$selectController");
								a && a.registerOption(e, t, n, i, r)
							}
					}
				}
			}],
			Do = ["$parse", function (e)
			{
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, n, i, r)
					{
						if (r)
						{
							var s = i.hasOwnProperty("required") || e(i.ngRequired)(t);
							i.ngRequired || (i.required = !0), r.$validators.required = function (e, t)
							{
								return !s || !r.$isEmpty(t)
							}, i.$observe("required", function (e)
							{
								s !== e && (s = e, r.$validate())
							})
						}
					}
				}
			}],
			Ro = ["$parse", function (e)
			{
				return {
					restrict: "A",
					require: "?ngModel",
					compile: function (t, n)
					{
						var i, r;
						return n.ngPattern && (i = n.ngPattern, r = "/" === n.ngPattern.charAt(0) && gr.test(n.ngPattern) ? function ()
							{
								return n.ngPattern
							} : e(n.ngPattern)),
							function (e, t, n, s)
							{
								if (s)
								{
									var a = n.pattern;
									n.ngPattern ? a = r(e) : i = n.pattern;
									var o = lr(a, i, t);
									n.$observe("pattern", function (e)
									{
										var n = o;
										o = lr(e, i, t), (n && n.toString()) !== (o && o.toString()) && s.$validate()
									}), s.$validators.pattern = function (e, t)
									{
										return s.$isEmpty(t) || $(o) || o.test(t)
									}
								}
							}
					}
				}
			}],
			Po = ["$parse", function (e)
			{
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, n, i, r)
					{
						if (r)
						{
							var s = i.maxlength || e(i.ngMaxlength)(t),
								a = ur(s);
							i.$observe("maxlength", function (e)
							{
								s !== e && (a = ur(e), s = e, r.$validate())
							}), r.$validators.maxlength = function (e, t)
							{
								return a < 0 || r.$isEmpty(t) || t.length <= a
							}
						}
					}
				}
			}],
			Io = ["$parse", function (e)
			{
				return {
					restrict: "A",
					require: "?ngModel",
					link: function (t, n, i, r)
					{
						if (r)
						{
							var s = i.minlength || e(i.ngMinlength)(t),
								a = ur(s) || -1;
							i.$observe("minlength", function (e)
							{
								s !== e && (a = ur(e) || -1, s = e, r.$validate())
							}), r.$validators.minlength = function (e, t)
							{
								return r.$isEmpty(t) || t.length >= a
							}
						}
					}
				}
			}];
		if (e.angular.bootstrap) return void(e.console && console.log("WARNING: Tried to load AngularJS more than once."));
		! function ()
		{
			var t;
			if (!jr)
			{
				var n = Rr();
				pr = $(n) ? e.jQuery : n ? e[n] : void 0, pr && pr.fn.on ? (hr = pr, d(pr.fn,
				{
					scope: rs.scope,
					isolateScope: rs.isolateScope,
					controller: rs.controller,
					injector: rs.injector,
					inheritedData: rs.inheritedData
				})) : hr = Pe, t = hr.cleanData, hr.cleanData = function (e)
				{
					for (var n, i, r = 0; null != (i = e[r]); r++)(n = (hr._data(i) ||
					{}).events) && n.$destroy && hr(i).triggerHandler("$destroy");
					t(e)
				}, Er.element = hr, jr = !0
			}
		}(),
		function (n)
		{
			d(n,
			{
				errorHandlingConfig: t,
				bootstrap: ue,
				copy: B,
				extend: d,
				merge: h,
				equals: W,
				element: hr,
				forEach: s,
				injector: ht,
				noop: m,
				bind: Z,
				toJson: J,
				fromJson: X,
				identity: g,
				isUndefined: $,
				isDefined: x,
				isString: w,
				isFunction: A,
				isObject: y,
				isNumber: _,
				isElement: j,
				isArray: S,
				version: zr,
				isDate: C,
				callbacks:
				{
					$$counter: 0
				},
				getTestability: he,
				reloadWithDebugInfo: de,
				$$minErr: i,
				$$csp: Dr,
				$$encodeUriSegment: ae,
				$$encodeUriQuery: oe,
				$$lowercase: $r,
				$$stringify: xe,
				$$uppercase: xr
			}), fr = ye(e), fr("ng", ["ngLocale"], ["$provide", function (e)
			{
				e.provider(
				{
					$$sanitizeUri: jn
				}), e.provider("$compile", Ct).directive(
				{
					a: va,
					input: Ia,
					textarea: Ia,
					form: Ta,
					script: Ao,
					select: Oo,
					option: Mo,
					ngBind: Ha,
					ngBindHtml: Ua,
					ngBindTemplate: Va,
					ngClass: Ba,
					ngClassEven: Wa,
					ngClassOdd: za,
					ngCloak: Ga,
					ngController: Ka,
					ngForm: wa,
					ngHide: yo,
					ngIf: Ja,
					ngInclude: Xa,
					ngInit: eo,
					ngNonBindable: ho,
					ngPluralize: go,
					ngRef: bo,
					ngRepeat: $o,
					ngShow: xo,
					ngStyle: To,
					ngSwitch: wo,
					ngSwitchWhen: _o,
					ngSwitchDefault: Co,
					ngOptions: mo,
					ngTransclude: Eo,
					ngModel: co,
					ngList: to,
					ngChange: Fa,
					pattern: Ro,
					ngPattern: Ro,
					required: Do,
					ngRequired: Do,
					minlength: Io,
					ngMinlength: Io,
					maxlength: Po,
					ngMaxlength: Po,
					ngValue: ja,
					ngModelOptions: uo
				}).directive(
				{
					ngInclude: Qa,
					input: La
				}).directive(ba).directive(Za), e.provider(
				{
					$anchorScroll: pt,
					$animate: ys,
					$animateCss: _s,
					$$animateJs: $s,
					$$animateQueue: xs,
					$$AnimateRunner: ws,
					$$animateAsyncRun: Ts,
					$browser: yt,
					$cacheFactory: Tt,
					$controller: Ot,
					$document: Mt,
					$$isDocumentHidden: Dt,
					$exceptionHandler: Rt,
					$filter: ai,
					$$forceReflow: Os,
					$interpolate: Kt,
					$interval: Zt,
					$$intervalFactory: Yt,
					$http: Bt,
					$httpParamSerializer: It,
					$httpParamSerializerJQLike: Lt,
					$httpBackend: Wt,
					$xhrFactory: zt,
					$jsonpCallbacks: Hs,
					$location: pn,
					$log: fn,
					$parse: qn,
					$rootScope: Nn,
					$q: On,
					$$q: Mn,
					$sce: Bn,
					$sceDelegate: Fn,
					$sniffer: zn,
					$$taskTrackerFactory: Wn,
					$templateCache: wt,
					$templateRequest: Kn,
					$$testability: Zn,
					$timeout: Yn,
					$window: ii,
					$$rAF: Ln,
					$$jqLite: st,
					$$Map: us,
					$$cookieReader: si
				})
			}]).info(
			{
				angularVersion: "1.7.9"
			})
		}(Er), Er.module("ngLocale", [], ["$provide", function (e)
		{
			function t(e)
			{
				e += "";
				var t = e.indexOf(".");
				return -1 == t ? 0 : e.length - t - 1
			}

			function n(e, n)
			{
				var i = n;
				void 0 === i && (i = Math.min(t(e), 3));
				var r = Math.pow(10, i);
				return {
					v: i,
					f: (e * r | 0) % r
				}
			}
			var i = {
				ZERO: "zero",
				ONE: "one",
				TWO: "two",
				FEW: "few",
				MANY: "many",
				OTHER: "other"
			};
			e.value("$locale",
			{
				DATETIME_FORMATS:
				{
					AMPMS: ["AM", "PM"],
					DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					ERANAMES: ["Before Christ", "Anno Domini"],
					ERAS: ["BC", "AD"],
					FIRSTDAYOFWEEK: 6,
					MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					WEEKENDRANGE: [5, 6],
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					medium: "MMM d, y h:mm:ss a",
					mediumDate: "MMM d, y",
					mediumTime: "h:mm:ss a",
					short: "M/d/yy h:mm a",
					shortDate: "M/d/yy",
					shortTime: "h:mm a"
				},
				NUMBER_FORMATS:
				{
					CURRENCY_SYM: "$",
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [
					{
						gSize: 3,
						lgSize: 3,
						maxFrac: 3,
						minFrac: 0,
						minInt: 1,
						negPre: "-",
						negSuf: "",
						posPre: "",
						posSuf: ""
					},
					{
						gSize: 3,
						lgSize: 3,
						maxFrac: 2,
						minFrac: 2,
						minInt: 1,
						negPre: "-¤",
						negSuf: "",
						posPre: "¤",
						posSuf: ""
					}]
				},
				id: "en-us",
				localeID: "en_US",
				pluralCat: function (e, t)
				{
					var r = 0 | e,
						s = n(e, t);
					return 1 == r && 0 == s.v ? i.ONE : i.OTHER
				}
			})
		}]), hr(function ()
		{
			le(e.document, ue)
		})
	}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
}, function (e, t, n)
{
	"use strict";

	function i(e)
	{
		return e && e.__esModule ? e :
		{
			default: e
		}
	}
	var r = n(2),
		s = i(r),
		a = n(0),
		o = i(a);
	n(15), n(17), n(18), n(16), n(14), n(13), n(1), window.$ = o.default;
	var c = n(3).default,
		l = s.default.module(c, ["ngRoute"]),
		u = n(19);
	l.controller("IndexController", n(4).default()), l.directive("spSelect2", n(5).default()), l.directive("spContentOneTechnique", n(8).default()), l.directive("spContentOneGroup", n(6).default()), l.directive("spContentOneSoftware", n(7).default()), l.directive("spHeader", n(10).default()), l.directive("spFooter", n(9).default()), l.service("spCF", n(11).default()), l.service("modal", n(12).default()), l.config(["$routeProvider", function (e)
	{
		e.when("/",
		{
			template: u
		}).otherwise("/")
	}]).filter("join", ["spCF", function (e)
	{
		return function (t)
		{
			return e.isArray(t) ? t.join(", ") : ""
		}
	}])
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = {
		"Phishing TTP": ["T1059.001", "T1059 ", "T1547.009", "T1059.004", "T1566.002", "T1059.005", "T1566.001", "T1204 ", "T1036 ", "T1027 ", "T1003 ", "T1218 ", "T1047 ", "T1543.003", "T1041 ", "T1140 ", "T1547.001", "T1001 ", "T1203 ", "T1218.011", "T1137 ", "T1566.003", "T1071 ", "T1027.004", "T1546.015", "T1562.001", "T1053 ", "T1059.006", "T1055 "],
		Zoom: ["T1557.001", "T1496 ", "T1486 ", "T1566.002", "T1003 "],
		"Work From Home": ["T1574.008", "T1059 ", "T1552.003", "T1505.003", "T1082 ", "T1566.002", "T1566.001", "T1553.004", "T1074 ", "T1574.007", "T1033 ", "T1552.004", "T1561.001", "T1003 ", "T1036 ", "T1049 ", "T1218 ", "T1190 ", "T1499 ", "T1056 ", "T1574.001", "T1211 ", "T1102 ", "T1078 ", "T1560 ", "T1018 ", "T1574.009", "T1201 ", "T1016 ", "T1105 ", "T1046 ", "T1552.001", "T1561.002", "T1530 ", "T1203 ", "T1110 ", "T1057 ", "T1495 ", "T1551.004", "T1210 ", "T1136 ", "T1490 ", "T1098 ", "T1566.003", "T1565.001", "T1087 ", "T1565.002", "T1005 ", "T1562.001", "T1124 ", "T1053 ", "T1083 "],
		"Panda APT": ["APT1", "G0006", "APT2", "G0024", "APT3", "G0022", "APT12", "G0005", "APT16", "G0023", "APT17", "G0025", "APT18", "G0026", "Axiom", "G0001", "Winnti Group", "G0044", "Deep Panda", "G0009", "APT19", "G0073", "Naikon", "G0019", "Lotus Blossom", "G0030", "Ke3chang", "G0004", "Elderwood", "G0066", "Suckfly", "G0039", "Scarlet Mimic", "G0029", "DragonOK", "G0017", "TA459", "G0062", "BRONZE BUTLER", "G0060", "Leviathan", "G0065", "APT27", "G0027", "Night Dragon", "G0014", "menuPass", "G0045", "Tropic Trooper", "G0081", "APT41", "G0096", "Rancor", "G0075"],
		"Bear APT": ["APT28", "G0007", "APT29", "G0016", "Turla", "G0010", "Dragonfly", "G0035", "Sandworm", "G0034", "FIN7", "G0046", "FIN8", "G0061", "TEMP.Veles", "G0088", "Zebrocy", "S0251"]
	}
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = {
		T1001: [
		{
			id: "T1001",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1002: [
		{
			id: "T1560",
			explanation: "Created to consolidate behavior around encrypting and compressing collected data"
		}],
		T1003: [
		{
			id: "T1003",
			explanation: "Remains Technique, Renamed, Name change from Credential Dumping and new sub-techniques added"
		}],
		T1004: [
		{
			id: "T1547.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1005: [
		{
			id: "T1005",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1006: [
		{
			id: "T1006",
			explanation: "Remains Technique, Renamed, Name change from File System Logical Offsets"
		}],
		T1007: [
		{
			id: "T1007",
			explanation: "Remains Technique"
		}],
		T1008: [
		{
			id: "T1008",
			explanation: "Remains Technique"
		}],
		T1009: [
		{
			id: "T1027.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1010: [
		{
			id: "T1010",
			explanation: "Remains Technique, Fixed technique reference in description"
		}],
		T1011: [
		{
			id: "T1011",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1012: [
		{
			id: "T1012",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1013: [
		{
			id: "T1547.010",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1014: [
		{
			id: "T1014",
			explanation: "Remains Technique, Minor description update"
		}],
		T1015: [
		{
			id: "T1546.008",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1016: [
		{
			id: "T1016",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1017: [
		{
			id: "T1072",
			explanation: "Name change from Application Deployment Software"
		}],
		T1018: [
		{
			id: "T1018",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1019: [
		{
			id: "T1542.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1020: [
		{
			id: "T1020",
			explanation: "Remains Technique, Fixed technique reference in description"
		}],
		T1021: [
		{
			id: "T1021",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1022: [
		{
			id: "T1560",
			explanation: "Created to consolidate behavior around encrypting and compressing collected data"
		}],
		T1023: [
		{
			id: "T1547.009",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1024: [
		{
			id: "T1573",
			explanation: "Created to consolidate behavior around encrypted C2"
		}],
		T1025: [
		{
			id: "T1025",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1026: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK due to lack of in the wild use. Existing Group/Software procedure examples did not fit the core idea behind the technique"
		}],
		T1027: [
		{
			id: "T1027",
			explanation: "Remains Technique, Minor description update"
		}],
		T1028: [
		{
			id: "T1021.006",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1029: [
		{
			id: "T1029",
			explanation: "Remains Technique, Minor description update"
		}],
		T1030: [
		{
			id: "T1030",
			explanation: "Remains Technique"
		}],
		T1031: [
		{
			id: "T1543.003",
			explanation: "Existing technique that became a sub-technique. Consolidates Modify Existing Service and New Service techniques into one sub-technique"
		}],
		T1032: [
		{
			id: "T1573",
			explanation: "Created to consolidate behavior around encrypted C2"
		}],
		T1033: [
		{
			id: "T1033",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1034: [
		{
			id: "T1574.007",
			explanation: "Deprecated and split into separate Unquoted Path, PATH Environment Variable, and Search Order Hijacking sub-techniques."
		},
		{
			id: "T1574.008",
			explanation: "Deprecated and split into separate Unquoted Path, PATH Environment Variable, and Search Order Hijacking sub-techniques."
		},
		{
			id: "T1574.009",
			explanation: "Deprecated and split into separate Unquoted Path, PATH Environment Variable, and Search Order Hijacking sub-techniques."
		}],
		T1035: [
		{
			id: "T1569.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1036: [
		{
			id: "T1036",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1037: [
		{
			id: "T1037",
			explanation: "Remove from lateral-movement, Renamed, Name change from Logon Scripts and new sub-techniques added"
		}],
		T1038: [
		{
			id: "T1574.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1039: [
		{
			id: "T1039",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1040: [
		{
			id: "T1040",
			explanation: "Remains Technique, Minor description update"
		}],
		T1041: [
		{
			id: "T1041",
			explanation: "Remains Technique, Renamed, Name change from Exfiltration over Command and Control Channel and added data sources"
		}],
		T1042: [
		{
			id: "T1546.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1043: [
		{
			id: "T1571",
			explanation: "Created to refine the idea behind Common and Uncommonly Used Port to focus the behavior on use of a non-standard port for C2 based on the protocol used"
		}],
		T1044: [
		{
			id: "T1574.010",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1045: [
		{
			id: "T1027.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1046: [
		{
			id: "T1046",
			explanation: "Remains Technique, Minor description update"
		}],
		T1047: [
		{
			id: "T1047",
			explanation: "Remains Technique, Minor description update"
		}],
		T1048: [
		{
			id: "T1048",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1049: [
		{
			id: "T1049",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1050: [
		{
			id: "T1543.003",
			explanation: "Existing technique that became a sub-technique. Consolidates Modify Existing Service and New Service techniques into one sub-technique"
		}],
		T1051: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK due to lack of in the wild use"
		}],
		T1052: [
		{
			id: "T1052",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1053: [
		{
			id: "T1053",
			explanation: "Remains Technique, Renamed, Name change from Local Job Scheduling and new sub-techniques added"
		}],
		T1054: [
		{
			id: "T1562.006",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1055: [
		{
			id: "T1055",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1056: [
		{
			id: "T1056",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1057: [
		{
			id: "T1057",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1058: [
		{
			id: "T1574.011",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1059: [
		{
			id: "T1059",
			explanation: "Remains Technique, Renamed, Name change from Command-Line Interface and new sub-techniques added"
		}],
		T1060: [
		{
			id: "T1547.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1061: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK because the behavior is redundant and implied by use of remote desktop tools like Remote Desktop Protocol. Existing Group/Software procedure examples were remapped appropriately"
		}],
		T1062: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK due to lack of in the wild use"
		}],
		T1063: [
		{
			id: "T1518.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1064: [
		{
			id: "T1059.004",
			explanation: "Deprecated and split into separate Bash, VBScript, and Python sub-techniques of Command and Scripting Interpreter."
		},
		{
			id: "T1059.005",
			explanation: "Deprecated and split into separate Bash, VBScript, and Python sub-techniques of Command and Scripting Interpreter."
		},
		{
			id: "T1059.006",
			explanation: "Deprecated and split into separate Bash, VBScript, and Python sub-techniques of Command and Scripting Interpreter."
		}],
		T1065: [
		{
			id: "T1571",
			explanation: "Created to refine the idea behind Common and Uncommonly Used Port to focus the behavior on use of a non-standard port for C2 based on the protocol used"
		}],
		T1066: [
		{
			id: "T1027.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1067: [
		{
			id: "T1542.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1068: [
		{
			id: "T1068",
			explanation: "Remains Technique, Minor description update"
		}],
		T1069: [
		{
			id: "T1069",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1070: [
		{
			id: "T1551",
			explanation: "Remains Technique"
		}],
		T1071: [
		{
			id: "T1071",
			explanation: "Remains Technique, Renamed, Name change from Standard Application Layer Protocol and new sub-techniques added"
		}],
		T1072: [
		{
			id: "T1072",
			explanation: "Remains Technique, Renamed, Name change from Application Deployment Software"
		}],
		T1073: [
		{
			id: "T1574.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1074: [
		{
			id: "T1074",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1075: [
		{
			id: "T1550.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1076: [
		{
			id: "T1021.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1077: [
		{
			id: "T1021.002",
			explanation: "Existing technique that became a sub-technique and was renamed from Windows Admin Shares"
		}],
		T1078: [
		{
			id: "T1078",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1079: [
		{
			id: "T1573",
			explanation: "Created to consolidate behavior around encrypted C2"
		}],
		T1080: [
		{
			id: "T1080",
			explanation: "Remains Technique, Minor description update"
		}],
		T1081: [
		{
			id: "T1552.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1082: [
		{
			id: "T1082",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1083: [
		{
			id: "T1083",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1084: [
		{
			id: "T1546.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1085: [
		{
			id: "T1218.011",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1086: [
		{
			id: "T1059.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1087: [
		{
			id: "T1087",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1088: [
		{
			id: "T1548.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1089: [
		{
			id: "T1562.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1090: [
		{
			id: "T1090",
			explanation: "Remains Technique, Renamed, Name change from Connection Proxy and new sub-techniques added"
		}],
		T1091: [
		{
			id: "T1091",
			explanation: "Remains Technique"
		}],
		T1092: [
		{
			id: "T1092",
			explanation: "Remains Technique"
		}],
		T1093: [
		{
			id: "T1055.012",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1094: [
		{
			id: "T1095",
			explanation: "Merged with and name change from Standard Non-Application Layer Protocol"
		}],
		T1095: [
		{
			id: "T1095",
			explanation: "Remains Technique, Renamed, Name change from Standard Non-Application Layer Protocol"
		}],
		T1096: [
		{
			id: "T1564.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1097: [
		{
			id: "T1550.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1098: [
		{
			id: "T1098",
			explanation: "Remove from credential-access, New sub-techniques added"
		}],
		T1099: [
		{
			id: "T1551.006",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1100: [
		{
			id: "T1505.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1101: [
		{
			id: "T1547.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1102: [
		{
			id: "T1102",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1103: [
		{
			id: "T1546.010",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1104: [
		{
			id: "T1104",
			explanation: "Remains Technique"
		}],
		T1105: [
		{
			id: "T1105",
			explanation: "Remains Technique, Renamed, Name change from Remote File Copy"
		}],
		T1106: [
		{
			id: "T1106",
			explanation: "Remains Technique, Renamed, Name change from Execution through API"
		}],
		T1107: [
		{
			id: "T1551.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1108: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK because the behavior is too high level and is sufficiently covered by Valid Accounts and External Remote Services. Existing Group/Software procedure examples were remapped appropriately"
		}],
		T1109: [
		{
			id: "T1542.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1110: [
		{
			id: "T1110",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1111: [
		{
			id: "T1111",
			explanation: "Remains Technique, Minor description update"
		}],
		T1112: [
		{
			id: "T1112",
			explanation: "Remains Technique"
		}],
		T1113: [
		{
			id: "T1113",
			explanation: "Remains Technique, Minor description update"
		}],
		T1114: [
		{
			id: "T1114",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1115: [
		{
			id: "T1115",
			explanation: "Remains Technique, Minor description update"
		}],
		T1116: [
		{
			id: "T1553.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1117: [
		{
			id: "T1218.010",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1118: [
		{
			id: "T1218.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1119: [
		{
			id: "T1119",
			explanation: "Remains Technique"
		}],
		T1120: [
		{
			id: "T1120",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1121: [
		{
			id: "T1218.009",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1122: [
		{
			id: "T1546.015",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1123: [
		{
			id: "T1123",
			explanation: "Remains Technique"
		}],
		T1124: [
		{
			id: "T1124",
			explanation: "Remains Technique, Minor description update"
		}],
		T1125: [
		{
			id: "T1125",
			explanation: "Remains Technique"
		}],
		T1126: [
		{
			id: "T1551.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1127: [
		{
			id: "T1127",
			explanation: "Remains Technique, Renamed, Minor description update, sub-technique added"
		}],
		T1128: [
		{
			id: "T1546.007",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1129: [
		{
			id: "T1129",
			explanation: "Remains Technique, Renamed, Name change from Execution through Module Load"
		}],
		T1130: [
		{
			id: "T1553.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1131: [
		{
			id: "T1547.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1132: [
		{
			id: "T1132",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1133: [
		{
			id: "T1133",
			explanation: "Remains Technique, Minor description update"
		}],
		T1134: [
		{
			id: "T1134",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1135: [
		{
			id: "T1135",
			explanation: "Remains Technique, Fixed technique reference in description, added Linux, and minor description update"
		}],
		T1136: [
		{
			id: "T1136",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1137: [
		{
			id: "T1137",
			explanation: "Remains Technique"
		}],
		T1138: [
		{
			id: "T1546.011",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1139: [
		{
			id: "T1552.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1140: [
		{
			id: "T1140",
			explanation: "Remains Technique"
		}],
		T1141: [
		{
			id: "T1056.002",
			explanation: "Broken out from pre-defined behavior within Input Capture"
		}],
		T1142: [
		{
			id: "T1555.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1143: [
		{
			id: "T1564.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1144: [
		{
			id: "T1553.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1145: [
		{
			id: "T1552.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1146: [
		{
			id: "T1551.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1147: [
		{
			id: "T1564.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1148: [
		{
			id: "T1562.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1149: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK due to lack of in the wild use"
		}],
		T1150: [
		{
			id: "T1547.011",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1151: [
		{
			id: "T1036.006",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1152: [
		{
			id: "T1569.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1153: [
		{
			id: "N/A",
			explanation: "Deprecate, Deprecated from ATT&CK due to lack of in the wild use"
		}],
		T1154: [
		{
			id: "T1546.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1155: [
		{
			id: "T1059.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1156: [
		{
			id: "T1546.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1157: [
		{
			id: "T1574.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1158: [
		{
			id: "T1564.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1159: [
		{
			id: "T1543.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1160: [
		{
			id: "T1543.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1161: [
		{
			id: "T1546.006",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1162: [
		{
			id: "T1547.011",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1163: [
		{
			id: "T1037.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1164: [
		{
			id: "T1547.007",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1165: [
		{
			id: "T1037.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1166: [
		{
			id: "T1548.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1167: [
		{
			id: "T1555.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1168: [
		{
			id: "T1053",
			explanation: "Name change from Local Job Scheduling and new sub-techniques added"
		}],
		T1169: [
		{
			id: "T1548.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1170: [
		{
			id: "T1218.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1171: [
		{
			id: "T1557.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1172: [
		{
			id: "T1090.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1173: [
		{
			id: "T1559.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1174: [
		{
			id: "T1556.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1175: [
		{
			id: "T1021.003",
			explanation: "Deprecated and split into separate Component Object Model and Distributed Component Object Model sub-techniques."
		},
		{
			id: "T1559.001",
			explanation: "Deprecated and split into separate Component Object Model and Distributed Component Object Model sub-techniques."
		}],
		T1176: [
		{
			id: "T1176",
			explanation: "Remains Technique, Data sources changed and minor description update"
		}],
		T1177: [
		{
			id: "T1547.008",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1178: [
		{
			id: "T1134.005",
			explanation: "Added due to manipulation of token information"
		}],
		T1179: [
		{
			id: "T1056.004",
			explanation: "Existing technique that became a sub-technique and was renamed from API Hooking. Scope change to only credential access for API hooking was based on available procedure examples"
		}],
		T1180: [
		{
			id: "T1546.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1181: [
		{
			id: "T1055.011",
			explanation: "Broken out from pre-defined behavior within Process Injection"
		}],
		T1182: [
		{
			id: "T1546.009",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1183: [
		{
			id: "T1546.012",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1184: [
		{
			id: "T1563.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1185: [
		{
			id: "T1185",
			explanation: "Remains Technique"
		}],
		T1186: [
		{
			id: "T1055.013",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1187: [
		{
			id: "T1187",
			explanation: "Remains Technique, Minor description update"
		}],
		T1188: [
		{
			id: "T1090.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1189: [
		{
			id: "T1189",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1190: [
		{
			id: "T1190",
			explanation: "Remains Technique, Minor description update"
		}],
		T1191: [
		{
			id: "T1218.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1192: [
		{
			id: "T1566.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1193: [
		{
			id: "T1566.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1194: [
		{
			id: "T1566.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1195: [
		{
			id: "T1195",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1196: [
		{
			id: "T1218.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1197: [
		{
			id: "T1197",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1198: [
		{
			id: "T1553.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1199: [
		{
			id: "T1199",
			explanation: "Remains Technique"
		}],
		T1200: [
		{
			id: "T1200",
			explanation: "Remains Technique"
		}],
		T1201: [
		{
			id: "T1201",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1202: [
		{
			id: "T1202",
			explanation: "Remains Technique, Minor description update"
		}],
		T1203: [
		{
			id: "T1203",
			explanation: "Remains Technique, Minor description update"
		}],
		T1204: [
		{
			id: "T1204",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1205: [
		{
			id: "T1545.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1206: [
		{
			id: "T1548.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1207: [
		{
			id: "T1207",
			explanation: "Remains Technique, Renamed, Name change from DCShadow"
		}],
		T1208: [
		{
			id: "T1558.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1209: [
		{
			id: "T1547.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1210: [
		{
			id: "T1210",
			explanation: "Remains Technique, Minor description update"
		}],
		T1211: [
		{
			id: "T1211",
			explanation: "Remains Technique, Minor description update"
		}],
		T1212: [
		{
			id: "T1212",
			explanation: "Remains Technique, Minor description update"
		}],
		T1213: [
		{
			id: "T1213",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1214: [
		{
			id: "T1552.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1215: [
		{
			id: "T1547.006",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1216: [
		{
			id: "T1216",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1217: [
		{
			id: "T1217",
			explanation: "Remains Technique"
		}],
		T1218: [
		{
			id: "T1218",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1219: [
		{
			id: "T1219",
			explanation: "Remains Technique, Renamed, Name change from Remote Access Tools and fixed technique reference in description"
		}],
		T1220: [
		{
			id: "T1220",
			explanation: "Remains Technique, Minor description update"
		}],
		T1221: [
		{
			id: "T1221",
			explanation: "Remains Technique, Minor description update"
		}],
		T1222: [
		{
			id: "T1222",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1223: [
		{
			id: "T1218.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1480: [
		{
			id: "T1480",
			explanation: "Remains Technique"
		}],
		T1482: [
		{
			id: "T1482",
			explanation: "Remains Technique, Fixed technique reference in description and minor description update"
		}],
		T1483: [
		{
			id: "T1568.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1484: [
		{
			id: "T1484",
			explanation: "Remains Technique, Minor description update"
		}],
		T1485: [
		{
			id: "T1485",
			explanation: "Remains Technique"
		}],
		T1486: [
		{
			id: "T1486",
			explanation: "Remains Technique"
		}],
		T1487: [
		{
			id: "T1561.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1488: [
		{
			id: "T1561.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1489: [
		{
			id: "T1489",
			explanation: "Remains Technique"
		}],
		T1490: [
		{
			id: "T1490",
			explanation: "Remains Technique"
		}],
		T1491: [
		{
			id: "T1491",
			explanation: "Remains Technique"
		}],
		T1492: [
		{
			id: "T1565.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1493: [
		{
			id: "T1565.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1494: [
		{
			id: "T1565.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1495: [
		{
			id: "T1495",
			explanation: "Remains Technique"
		}],
		T1496: [
		{
			id: "T1496",
			explanation: "Remains Technique"
		}],
		T1497: [
		{
			id: "T1497",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1498: [
		{
			id: "T1498",
			explanation: "Remains Technique"
		}],
		T1499: [
		{
			id: "T1499",
			explanation: "Remains Technique"
		}],
		T1500: [
		{
			id: "T1027.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1501: [
		{
			id: "T1543.002",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1502: [
		{
			id: "T1134.004",
			explanation: "Added due to manipulation of tokens"
		}],
		T1503: [
		{
			id: "T1555.003",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1504: [
		{
			id: "T1546.013",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1505: [
		{
			id: "T1505",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1506: [
		{
			id: "T1550.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1514: [
		{
			id: "T1548.004",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1518: [
		{
			id: "T1518",
			explanation: "Remains Technique, New sub-techniques added"
		}],
		T1519: [
		{
			id: "T1546.014",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1522: [
		{
			id: "T1552.005",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1525: [
		{
			id: "T1525",
			explanation: "Remains Technique"
		}],
		T1526: [
		{
			id: "T1526",
			explanation: "Remains Technique"
		}],
		T1527: [
		{
			id: "T1550.001",
			explanation: "Existing technique that became a sub-technique"
		}],
		T1528: [
		{
			id: "T1528",
			explanation: "Remains Technique"
		}],
		T1529: [
		{
			id: "T1529",
			explanation: "Remains Technique"
		}],
		T1530: [
		{
			id: "T1530",
			explanation: "Remains Technique"
		}],
		T1531: [
		{
			id: "T1531",
			explanation: "Remains Technique"
		}],
		T1534: [
		{
			id: "T1534",
			explanation: "Remains Technique"
		}],
		T1535: [
		{
			id: "T1535",
			explanation: "Remains Technique"
		}],
		T1536: [
		{
			id: "T1536",
			explanation: "Remains Technique, Minor description update, removed some data sources"
		}],
		T1537: [
		{
			id: "T1537",
			explanation: "Remains Technique"
		}],
		T1538: [
		{
			id: "T1538",
			explanation: "Remains Technique"
		}],
		T1539: [
		{
			id: "T1539",
			explanation: "Remains Technique"
		}]
	}
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = [
	{
		name: "Security Accessment",
		id: "TA0001",
		children: [
		{
			name: "OS Pentest ",
			id: "T1566",
			children: [
			{
				name: "Initial Access",
				id: "T1566.001",
				children: [
				{
					name: "childss",
					id: "T15661.001",
					stat:
					{
						rules: 13,
						examples: 40,
						subtechnics: 3
					},
					content: ""
				}],
				stat:
				{
					rules: 13,
					examples: 40,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Execution",
				id: "T1566.002",
				stat:
				{
					rules: 7,
					examples: 21,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Persistence",
				id: "T1566.003",
				stat:
				{
					rules: 2,
					examples: 4,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 3
			},
			content: ""
		},
		{
			name: "Web App Pentest",
			id: "T1190",
			stat:
			{
				rules: 7,
				examples: 5,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Mobile App",
			id: "T1133",
			stat:
			{
				rules: 0,
				examples: 11,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Network Pentest",
			id: "T1200",
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Application Pentest",
			id: "T1566",
			children: [
			{
				name: "Spearphishing Attachment",
				id: "T1566.001",
				stat:
				{
					rules: 13,
					examples: 40,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Spearphishing Link",
				id: "T1566.002",
				stat:
				{
					rules: 7,
					examples: 21,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Spearphishing via Service",
				id: "T1566.003",
				stat:
				{
					rules: 2,
					examples: 4,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 3
			},
			content: ""
		}, \
		{
			name: "Wireless Pentest",
			id: "T1091",
			stat:
			{
				rules: 0,
				examples: 12,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Hardware Pentest",
			id: "T1195",
			children: [
			{
				name: "Compromise Software Dependencies and Development Tools",
				id: "T1195.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Compromise Software Supply Chain",
				id: "T1195.002",
				stat:
				{
					rules: 0,
					examples: 3,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Compromise Hardware Supply Chain",
				id: "T1195.003",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 1,
				subtechnics: 3
			},
			content: ""
		},
		{
			name: "Embedded Pentest",
			id: "T1199",
			stat:
			{
				rules: 0,
				examples: 2,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "loT Pentest",
			id: "T1199",
			stat:
			{
				rules: 0,
				examples: 2,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "ICS Pentest",
			id: "T1078",
			children: [
			{
				name: "Default Accounts",
				id: "T1078.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Domain Accounts",
				id: "T1078.002",
				stat:
				{
					rules: 0,
					examples: 4,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Local Accounts",
				id: "T1078.003",
				stat:
				{
					rules: 0,
					examples: 7,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Cloud Accounts",
				id: "T1078.004",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 4
				},
				content: ""
			}],
			stat:
			{
				rules: 8,
				examples: 24,
				subtechnics: 4
			},
			content: ""
		}]
	},
	{
		name: "Security Operations Center",
		id: "TA0002",
		children: [
		{
			name: "Windows Events",
			id: "T1059",
			children: [
			{
				name: "PowerShell",
				id: "T1059.001",
				stat:
				{
					rules: 39,
					examples: 71,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "AppleScript",
				id: "T1059.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Windows Command Shell",
				id: "T1059.003",
				stat:
				{
					rules: 0,
					examples: 169,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Bash",
				id: "T1059.004",
				stat:
				{
					rules: 10,
					examples: 8,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "VBScript",
				id: "T1059.005",
				stat:
				{
					rules: 10,
					examples: 33,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Python",
				id: "T1059.006",
				stat:
				{
					rules: 10,
					examples: 11,
					subtechnics: 6
				},
				content: ""
			}],
			stat:
			{
				rules: 17,
				examples: 35,
				subtechnics: 6
			},
			content: ""
		},
		{
			name: "Linux/Unix Logs",
			id: "T1203",
			stat:
			{
				rules: 4,
				examples: 25,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Web Applicaiton",
			id: "T1559",
			children: [
			{
				name: "Component Object Model",
				id: "T1559.001",
				stat:
				{
					rules: 3,
					examples: 3,
					subtechnics: 2
				},
				content: ""
			},
			{
				name: "Dynamic Data Exchange",
				id: "T1559.002",
				stat:
				{
					rules: 0,
					examples: 12,
					subtechnics: 2
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 2
			},
			content: ""
		},
		{
			name: "Custom Applicaiton",
			id: "T1106",
			stat:
			{
				rules: 0,
				examples: 21,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Database Logs",
			id: "T1053",
			children: [
			{
				name: "At (Windows)",
				id: "T1053.002",
				stat:
				{
					rules: 0,
					examples: 5,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Scheduled Task",
				id: "T1053.005",
				stat:
				{
					rules: 0,
					examples: 59,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "At (Linux)",
				id: "T1053.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Launchd",
				id: "T1053.004",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Cron",
				id: "T1053.003",
				stat:
				{
					rules: 0,
					examples: 4,
					subtechnics: 5
				},
				content: ""
			}],
			stat:
			{
				rules: 9,
				examples: 1,
				subtechnics: 5
			},
			content: ""
		},
		{
			name: "Preventive Control Logs",
			id: "T1129",
			stat:
			{
				rules: 0,
				examples: 4,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Powershell",
			id: "T1072",
			stat:
			{
				rules: 0,
				examples: 3,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Process Network Communication",
			id: "T1569",
			children: [
			{
				name: "Launchctl",
				id: "T1569.001",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 2
				},
				content: ""
			},
			{
				name: "Service Execution",
				id: "T1569.002",
				stat:
				{
					rules: 3,
					examples: 26,
					subtechnics: 2
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 2
			},
			content: ""
		}, ]
	},
	{
		name: "Digital Forensices",
		id: "TA0003",
		children: [
		{
			name: "Windows Events Logs",
			id: "T1098",
			children: [
			{
				name: "Additional Azure Service Principal Credentials",
				id: "T1098.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Exchange Email Delegate Permissions",
				id: "T1098.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Add Office 365 Global Administrator Role",
				id: "T1098.003",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 3,
				examples: 5,
				subtechnics: 3
			},
			content: ""
		},
		{
			name: "Web Application Log",
			id: "T1197",
			stat:
			{
				rules: 1,
				examples: 5,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Custom Application Log",
			id: "T1547",
			children: [
			{
				name: "Registry Run Keys / Startup Folder",
				id: "T1547.001",
				stat:
				{
					rules: 3,
					examples: 132,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Authentication Package",
				id: "T1547.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Time Providers",
				id: "T1547.003",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Winlogon Helper DLL",
				id: "T1547.004",
				stat:
				{
					rules: 0,
					examples: 7,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Security Support Provider",
				id: "T1547.005",
				stat:
				{
					rules: 0,
					examples: 3,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Kernel Modules and Extensions",
				id: "T1547.006",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Re-opened Applications",
				id: "T1547.007",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "LSASS Driver",
				id: "T1547.008",
				stat:
				{
					rules: 1,
					examples: 2,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Shortcut Modification",
				id: "T1547.009",
				stat:
				{
					rules: 1,
					examples: 28,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Port Monitors",
				id: "T1547.010",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 11
				},
				content: ""
			},
			{
				name: "Plist Modification",
				id: "T1547.011",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 11
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 11
			},
			content: ""
		},
		{
			name: "Database Logs",
			id: "T1037",
			children: [
			{
				name: "Logon Script (Windows)",
				id: "T1037.001",
				stat:
				{
					rules: 0,
					examples: 4,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Logon Script (Mac)",
				id: "T1037.002",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Network Logon Script",
				id: "T1037.003",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Rc.common",
				id: "T1037.004",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Startup Items",
				id: "T1037.005",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 5
				},
				content: ""
			}],
			stat:
			{
				rules: 2,
				examples: 0,
				subtechnics: 5
			},
			content: ""
		},
		{
			name: "Preventive Control Logs",
			id: "T1176",
			stat:
			{
				rules: 0,
				examples: 3,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Powershell",
			id: "T1554",
			stat:
			{
				rules: 0,
				examples: 1,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Process Network",
			id: "T1136",
			children: [
			{
				name: "Local Account",
				id: "T1136.001",
				stat:
				{
					rules: 0,
					examples: 15,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Domain Account",
				id: "T1136.002",
				stat:
				{
					rules: 0,
					examples: 4,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Cloud Account",
				id: "T1136.003",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 2,
				examples: 0,
				subtechnics: 3
			},
			content: ""
		},
		{
			name: "Communication",
			id: "T1543",
			children: [
			{
				name: "Launch Agent",
				id: "T1543.001",
				stat:
				{
					rules: 0,
					examples: 10,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Systemd Service",
				id: "T1543.002",
				stat:
				{
					rules: 0,
					examples: 3,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Windows Service",
				id: "T1543.003",
				stat:
				{
					rules: 7,
					examples: 66,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Launch Daemon",
				id: "T1543.004",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 4
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 4
			},
			content: ""
		},
		{
			name: "Router/Switches",
			id: "T1546",
			children: [
			{
				name: "Change Default File Association",
				id: "T1546.001",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Screensaver",
				id: "T1546.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Windows Management Instrumentation Event Subscription",
				id: "T1546.003",
				stat:
				{
					rules: 3,
					examples: 8,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: ".bash_profile and .bashrc",
				id: "T1546.004",
				stat:
				{
					rules: 1,
					examples: 2,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Trap",
				id: "T1546.005",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "LC_LOAD_DYLIB Addition",
				id: "T1546.006",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Netsh Helper DLL",
				id: "T1546.007",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Accessibility Features",
				id: "T1546.008",
				stat:
				{
					rules: 2,
					examples: 6,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "AppCert DLLs",
				id: "T1546.009",
				stat:
				{
					rules: 0,
					examples: 2,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "AppInit DLLs",
				id: "T1546.010",
				stat:
				{
					rules: 0,
					examples: 2,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Application Shimming",
				id: "T1546.011",
				stat:
				{
					rules: 2,
					examples: 1,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Image File Execution Options Injection",
				id: "T1546.012",
				stat:
				{
					rules: 1,
					examples: 1,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "PowerShell Profile",
				id: "T1546.013",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Emond",
				id: "T1546.014",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 15
				},
				content: ""
			},
			{
				name: "Component Object Model Hijacking",
				id: "T1546.015",
				stat:
				{
					rules: 1,
					examples: 6,
					subtechnics: 15
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 15
			},
			content: ""
		},
		{
			name: "Web Application Firewalls",
			id: "T1133",
			stat:
			{
				rules: 0,
				examples: 11,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Registry Analysis",
			id: "T1574",
			children: [
			{
				name: "Services File Permissions Weakness",
				id: "T1574.010",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "Executable Installer File Permissions Weakness",
				id: "T1574.005",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "Services Registry Permissions Weakness",
				id: "T1574.011",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "Path Interception by Unquoted Path",
				id: "T1574.009",
				stat:
				{
					rules: 1,
					examples: 2,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "Path Interception by PATH Environment Variable",
				id: "T1574.007",
				stat:
				{
					rules: 1,
					examples: 2,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "Path Interception by Search Order Hijacking",
				id: "T1574.008",
				stat:
				{
					rules: 1,
					examples: 2,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "DLL Search Order Hijacking",
				id: "T1574.001",
				stat:
				{
					rules: 2,
					examples: 13,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "DLL Side-Loading",
				id: "T1574.002",
				stat:
				{
					rules: 6,
					examples: 22,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "LD_PRELOAD",
				id: "T1574.006",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 10
				},
				content: ""
			},
			{
				name: "Dylib Hijacking",
				id: "T1574.004",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 10
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 10
			},
			content: ""
		},
		{
			name: "Services/Process",
			id: "T1525",
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 0
			},
			content: ""
		},
		{
			name: "Schedule Tasks/ Startup Scripts RC Local Analysis",
			id: "T1137",
			children: [
			{
				name: "Add-ins",
				id: "T1137.006",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Office Template Macros",
				id: "T1137.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Outlook Forms",
				id: "T1137.003",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Outlook Rules",
				id: "T1137.005",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Outlook Home Page",
				id: "T1137.004",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 6
				},
				content: ""
			},
			{
				name: "Office Test",
				id: "T1137.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 6
				},
				content: ""
			}],
			stat:
			{
				rules: 1,
				examples: 1,
				subtechnics: 6
			},
			content: ""
		},
		{
			name: "Running Processes",
			id: "T1542",
			children: [
			{
				name: "System Firmware",
				id: "T1542.001",
				stat:
				{
					rules: 0,
					examples: 3,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Component Firmware",
				id: "T1542.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Bootkit",
				id: "T1542.003",
				stat:
				{
					rules: 1,
					examples: 6,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 3
			},
			content: ""
		},
		{
			name: "DII Injection",
			id: "T1053",
			children: [
			{
				name: "At (Windows)",
				id: "T1053.002",
				stat:
				{
					rules: 0,
					examples: 5,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Scheduled Task",
				id: "T1053.005",
				stat:
				{
					rules: 0,
					examples: 59,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "At (Linux)",
				id: "T1053.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Launchd",
				id: "T1053.004",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 5
				},
				content: ""
			},
			{
				name: "Cron",
				id: "T1053.003",
				stat:
				{
					rules: 0,
					examples: 4,
					subtechnics: 5
				},
				content: ""
			}],
			stat:
			{
				rules: 9,
				examples: 1,
				subtechnics: 5
			},
			content: ""
		},
		{
			name: "Hooks",
			id: "T1505",
			children: [
			{
				name: "SQL Stored Procedures",
				id: "T1505.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Transport Agent",
				id: "T1505.002",
				stat:
				{
					rules: 0,
					examples: 1,
					subtechnics: 3
				},
				content: ""
			},
			{
				name: "Web Shell",
				id: "T1505.003",
				stat:
				{
					rules: 7,
					examples: 13,
					subtechnics: 3
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 0,
				subtechnics: 3
			},
			content: ""
		},
		{
			name: "Image Analysis",
			id: "T1545",
			children: [
			{
				name: "Port Knocking",
				id: "T1545.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 1
				},
				content: ""
			}],
			stat:
			{
				rules: 0,
				examples: 2,
				subtechnics: 1
			},
			content: ""
		},
		{
			name: "Static Malware Analysis ",
			id: "T1078",
			children: [
			{
				name: "Default Accounts",
				id: "T1078.001",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Domain Accounts",
				id: "T1078.002",
				stat:
				{
					rules: 0,
					examples: 4,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Local Accounts",
				id: "T1078.003",
				stat:
				{
					rules: 0,
					examples: 7,
					subtechnics: 4
				},
				content: ""
			},
			{
				name: "Cloud Accounts",
				id: "T1078.004",
				stat:
				{
					rules: 0,
					examples: 0,
					subtechnics: 4
				},
				content: ""
			}],
			stat:
			{
				rules: 8,
				examples: 24,
				subtechnics: 4
			},
			content: ""
		},
		{
			name: "Dynamic Malware Analysis",
			id: "T1133",
			stat:
			{
				rules: 0,
				examples: 11,
				subtechnics: 0
			},
			content: ""
		}]
	}]
}, function (e, t, n)
{
	"use strict";
	Object.defineProperty(t, "__esModule",
	{
		value: !0
	}), t.default = function (e, t, n, i)
	{
		t.switchCurrentTactic = function (e)
		{
			t.selectedTactic = e, t.switchCurrentTechnique(0)
		}, t.switchCurrentTechnique = function (e)
		{
			t.selectedTechnique = e, t.selectedSubTechnique = ""
		}, t.setOneTacticIsOpen = function (e)
		{
			t.oneTacticIsOpen = e
		}, t.setOneTechniqueIsOpen = function (e)
		{
			t.oneTechniqueIsOpen = e
		}, t.$watch("searchString", function (e, i)
		{
			t.tacticsTechniquesMenu = JSON.parse(t.tacticsTechniquesMenuSrc), n.isString(e) && e.length > 0 && t.refreshSearch()
		}), t.refreshSearch = function ()
		{
			t.tacticsTechniquesMenu = JSON.parse(t.tacticsTechniquesMenuSrc), t.tacticsTechniquesMenuContentUploaded ? o(t, n) : n.isString(t.currUrl) && e(
			{
				method: "GET",
				url: t.currUrl + "entities/tactics-techniques-menu-content.json",
				dataType: "json"
			}).then(function (e)
			{
				n.isArray(e.data) && (t.tacticsTechniquesMenuContentUploaded = !0, t.tacticsTechniquesMenuSrc = JSON.stringify(e.data), t.tacticsTechniquesMenu = JSON.parse(t.tacticsTechniquesMenuSrc), o(t, n))
			}, function (e)
			{
				o(t, n)
			})
		}, (0, r.default)(document).ready(function ()
		{
			(0, r.default)("body").on("click", "a[data-href]", function (e)
			{
				var a = (0, r.default)(e.target).attr("data-href").replace(/^\/+/, "").replace(/\/+$/, "");
				if (a = a.split("/"), a.length >= 2 && ["techniques", "groups", "software"].indexOf(a[0].toLowerCase()) >= 0 && n.isString(a[1])) switch (a[0])
				{
					case "techniques":
						var o = !1;
						a[1] = n.isString(a[1]) && n.isString(a[2]) ? a[1] + "-" + a[2] : a[1];
						var c = a[1].toLowerCase().split("-")[0];
						n.isArray(s[a[1].toUpperCase()]) && n.isObject(s[a[1].toUpperCase()][0]) && n.isString(s[a[1].toUpperCase()][0].id) && "T" == s[a[1].toUpperCase()][0].id[0] && (a[1] = s[a[1].toUpperCase()][0].id.replace(".", "-"), c = a[1].toLowerCase().split("-")[0]), t.$apply(function ()
						{
							t.searchString = "", t.fastSearch.selected = "All"
						}), setTimeout(function ()
						{
							t.$apply(function ()
							{
								t.tacticsTechniquesMenu = JSON.parse(t.tacticsTechniquesMenuSrc), n.getArrayOrEmpty(t.tacticsTechniquesMenu).forEach(function (e, i)
								{
									n.getArrayOrEmpty(e.children).forEach(function (e, n)
									{
										c == e.id.toLowerCase() && (o = !0, t.selectedTactic = i, t.selectedTechnique = n, t.selectedSubTechnique = a[1])
									})
								}), o && i.hide()
							})
						});
						break;
					case "groups":
						i.show(t,
						{
							title: "",
							body: '<div sp-content-one-group curr-url="currUrl" entity-id="' + a[1] + '"></div>'
						});
						break;
					case "software":
						i.show(t,
						{
							title: "",
							body: '<div sp-content-one-software curr-url="currUrl" entity-id="' + a[1] + '"></div>'
						})
				}
			})
		})
	};
	var i = n(0),
		r = function (e)
		{
			return e && e.__esModule ? e :
			{
				default: e
			}
		}(i),
		s = n(24).default,
		a = ["name", "id", "content"],
		o = function (e, t)
		{
			var n = function (e, t)
				{
					var n = [];
					return e.isObject(t) && Object.keys(t).forEach(function (e)
					{
						a.map(function (e)
						{
							return e.toLowerCase()
						}).indexOf(e.toLowerCase()) >= 0 && n.push(t[e])
					}), n.join(" ").toLowerCase()
				},
				i = function (e, n, i)
				{
					var r = 0 == n.length || n.length > 0 && e.indexOf(n) >= 0,
						s = !1;
					return t.getArrayOrEmpty(i).forEach(function (t)
					{
						t.length > 0 && e.indexOf(t.toLowerCase()) >= 0 && (s = !0)
					}), 0 == n.length && 0 == t.getArrayOrEmpty(i).length || (0 == n.length ? s : 0 == t.getArrayOrEmpty(i).length ? r : r && s)
				},
				r = e.fastSearch.list[e.fastSearch.selected] || [];
			e.tacticsTechniquesMenu = t.getArrayOrEmpty(JSON.parse(e.tacticsTechniquesMenuSrc)).map(function (s)
			{
				return s.children = t.getArrayOrEmpty(s.children).map(function (s)
				{
					return s.children = t.getArrayOrEmpty(s.children).map(function (s)
					{
						return i(n(t, s), e.searchString.toLowerCase(), r) ? s : null
					}).filter(function (e)
					{
						return e
					}), s.children.length > 0 || i(n(t, s), e.searchString.toLowerCase(), r) ? s : null
				}).filter(function (e)
				{
					return e
				}), s.children.length > 0 ? s : null
			}).filter(function (e)
			{
				return e
			}), e.switchCurrentTactic(0)
		}
}, function (e, t)
{
	e.exports = '<div id="{{ selectId }}-wrap">\n    <select class="select__init" name="{{ selectName }}" ng-model="selected" id="{{ selectId }}">\n        <option value=""></option>\n        <option ng-repeat="(value, name) in items" value="{{ value }}">{{ name }}</option>\n    </select>\n</div>'
}, function (e, t)
{
	e.exports = '<span ng-show="!currEntity.errorDataLoad">\n<div class="modal-box__description" ng-bind-html="trustAsHtml(currEntity.descr)"></div>\n<h5 class="modal-box__sub-title">Techniques Used</h5>\n<div class="modal-box__table">\n    <div class="table-box">\n        <div class="table-box__head">\n            <div class="table-box__row">\n                <div class="table-box__col">\n                    <h6 class="table-box__title">Mitigation</h6>\n                </div>\n                <div class="table-box__col">\n                    <h6 class="table-box__title">Use</h6>\n                </div>\n            </div>\n        </div>\n        <div class="table-box__body">\n            <div class="table-box__container" ng-repeat="oneTechnique in currEntity.technique_table_data">\n                <div class="table-box__row">\n                    <div class="table-box__col">\n                        <a class="name-badge" data-href="techniques/{{oneTechnique.id}}">{{ oneTechnique.name }}</a>\n                    </div>\n                    <div class="table-box__col" ng-bind-html="trustAsHtml(oneTechnique.descr)"></div>\n                </div>\n                <div class="table-box__inside" ng-show="checkArrayLength(oneTechnique.subtechniques)">\n                    <div class="table-box__inside-title">\n                                              Subtechniques ({{ oneTechnique.subtechniques.length }})\n                    </div>\n\n                    <div class="table-box__row" ng-repeat="oneSubTechniques in oneTechnique.subtechniques">\n                        <div class="table-box__col">\n                            <a class="name-badge" data-href="techniques/{{oneTechnique.id}}-{{oneSubTechniques.id}}">{{ oneSubTechniques.name }}</a>\n                        </div>\n                        <div class="table-box__col" ng-bind-html="trustAsHtml(oneSubTechniques.descr)"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</span>\n'
}, function (e, t)
{
	e.exports = '<span ng-show="!currEntity.errorDataLoad">\n<div class="modal-box__description" ng-bind-html="trustAsHtml(currEntity.descr)"></div>\n<h5 class="modal-box__sub-title">Techniques Used</h5>\n<div class="modal-box__table">\n    <div class="table-box">\n        <div class="table-box__head">\n            <div class="table-box__row">\n                <div class="table-box__col">\n                    <h6 class="table-box__title">Mitigation</h6>\n                </div>\n                <div class="table-box__col">\n                    <h6 class="table-box__title">Use</h6>\n                </div>\n            </div>\n        </div>\n        <div class="table-box__body">\n            <div class="table-box__container" ng-repeat="oneTechnique in currEntity.technique_table_data">\n                <div class="table-box__row">\n                    <div class="table-box__col">\n                        <a class="name-badge" data-href="techniques/{{oneTechnique.id}}">{{ oneTechnique.name }}</a>\n                    </div>\n                    <div class="table-box__col" ng-bind-html="trustAsHtml(oneTechnique.descr)"></div>\n                </div>\n                <div class="table-box__inside" ng-show="checkArrayLength(oneTechnique.subtechniques)">\n                    <div class="table-box__inside-title">\n                        <svg fill="none" height="9" viewBox="0 0 10 9" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0V5.5H8M8 5.5L6 7V4L8 5.5Z" stroke="#8C8E97" stroke-width="1.5"/></svg>\n                        Subtechniques ({{ oneTechnique.subtechniques.length }})\n                    </div>\n\n                    <div class="table-box__row" ng-repeat="oneSubTechniques in oneTechnique.subtechniques">\n                        <div class="table-box__col">\n                            <a class="name-badge" data-href="techniques/{{oneTechnique.id}}-{{oneSubTechniques.id}}">{{ oneSubTechniques.name }}</a>\n                        </div>\n                        <div class="table-box__col" ng-bind-html="trustAsHtml(oneSubTechniques.descr)"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</span>\n'
}, function (e, t)
{
	e.exports = '<div class="content-box__wrap">\n    <div class="content-box__scroll">\n        <h2 class="content-box__title">{{ currentTechnique.name }}</h2>\n        <div class="content-box__select" ng-show="showTechniqueSelector(currentTechnique.children)">\n            <div class="select">\n                <label class="select__label">\n                    Choose subtechnique\n                </label>\n                <div allow-clear="false"\n                     dropdown-css-class="custom-select-dropdown"\n                     hide-search="true"\n                     items="currentTechnique.children"\n                     placeholder="Choose Sub Technique"\n                     select-id="choose-sub-technique"\n                     select-name="choose-sub-technique"\n                     selected="currentSubTechnique.id"\n                     sp-select2\n                     tags="true"></div>\n            </div>\n        </div>\n        <div class="content-box__tabs" ng-if="!currentSubTechnique.errorDataLoad">\n            <div class="tabs-bar">\n                <ul class="tabs-bar__list">\n                    <li class="tabs-bar__item">\n                        <a class="tabs-bar__link" ng-class="{\'is-active\': selected.tab == \'info\'}" ng-click="selected.tab = \'info\'">Info</a>\n                    </li>\n                    <li class="tabs-bar__item">\n                        <a class="tabs-bar__link" ng-class="{\'is-active\': selected.tab == \'examples\'}" ng-click="selected.tab = \'examples\'" ng-show="checkArrayLength(currentSubTechnique.examples_table)">Examples</a>\n                        <a class="tabs-bar__link disabled" ng-show="!checkArrayLength(currentSubTechnique.examples_table)">Examples</a>\n                    </li>\n                    <li class="tabs-bar__item">\n                        <a class="tabs-bar__link" ng-class="{\'is-active\': selected.tab == \'sigma\'}" ng-click="selected.tab = \'sigma\'" ng-show="checkArrayLength(currentSubTechnique.rules)">Sigma</a>\n                        <a class="tabs-bar__link disabled" ng-show="!checkArrayLength(currentSubTechnique.rules)">Sigma</a>\n                    </li>\n                    <li class="tabs-bar__item">\n                        <a class="tabs-bar__link" ng-class="{\'is-active\': selected.tab == \'yara\'}" ng-click="selected.tab = \'yara\'" ng-show="checkArrayLength(currentSubTechnique.yara)">Yara</a>\n                        \n                    </li>\n                    <li class="tabs-bar__item">\n                        <a class="tabs-bar__link" ng-class="{\'is-active\': selected.tab == \'red_test\'}" ng-click="selected.tab = \'red_test\'" ng-show="checkArrayLength(currentSubTechnique.red_test)">RED Tests</a>\n                        <a class="tabs-bar__link disabled" ng-show="!checkArrayLength(currentSubTechnique.red_test)">RED Tests</a>\n                    </li>\n                </ul>\n                <div class="tabs-bar__container" ng-class="{\'no-subtechnique\':!showTechniqueSelector(currentTechnique.children)}">\n                    <div class="tabs-bar__content" ng-class="{\'show is-active\': selected.tab == \'info\'}">\n                        <div class="list-count">\n                            <div class="list-count__row">\n                                <div class="list-count__col">\n                                    <div class="list-count__text">ID:</div>\n                                    <div class="list-count__number">{{ currentSubTechnique.attack_id || \'-\' }}</div>\n                                </div>\n                                <div class="list-count__col">\n                                    <div class="list-count__text">Version:</div>\n                                    <div class="list-count__number">{{ currentSubTechnique.version || \'-\' }}</div>\n                                </div>\n                                <div class="list-count__col">\n                                    <div class="list-count__text">Created:</div>\n                                    <div class="list-count__number">{{ currentSubTechnique.created || \'-\' }}</div>\n                                </div>\n                                <div class="list-count__col">\n                                    <div class="list-count__text">CAPEC ID:</div>\n                                    <div class="list-count__number">\n                                        <a class="list-count__link" ng-href="{{ currentSubTechnique.capecs[0].url }}" target="_blank">\n                                            {{ currentSubTechnique.capecs[0].id || \'-\' }}\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class="list-count__col">\n                                    <div class="list-count__text">Contributor</div>\n                                    <div class="list-count__number">{{ currentSubTechnique.contributors || \'-\' }}</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="text-block">\n                            <h3 class="text-block__title">DESCRIPTION</h3>\n                            <div class="text-block__description" ng-bind-html="trustAsHtml(currentSubTechnique.descr)"></div>\n                            <div class="text-block__row text-block__row--margin-top">\n                                <div class="text-block__col">\n                                    <h5 class="text-block__sub-title">Tactics:</h5>\n                                    <div class="text-block__content">{{ currentSubTechnique.tactics || \'-\' | join }}</div>\n                                </div>\n                                <div class="text-block__col">\n                                    <h5 class="text-block__sub-title">Permission Required:</h5>\n                                    <div class="text-block__content">{{ currentSubTechnique.perms || \'-\' }}</div>\n                                </div>\n                                <div class="text-block__col">\n                                    <h5 class="text-block__sub-title">Platforms:</h5>\n                                    <div class="text-block__content">{{ currentSubTechnique.platforms || \'-\' }}</div>\n                                </div>\n                                <div class="text-block__col">\n                                    <h5 class="text-block__sub-title">Data Sources</h5>\n                                    <div class="text-block__content">{{ currentSubTechnique.data_sources || \'-\' }}</div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="text-block" ng-show="currentSubTechnique.detection.length > 0">\n                            <h3 class="text-block__title">DETECTION</h3>\n                            <div class="text-block__description" ng-bind-html="trustAsHtml(currentSubTechnique.detection)"></div>\n                        </div>\n                        <div class="text-block text-block--top-margin" ng-show="checkArrayLength(currentSubTechnique.mitigation_table)">\n                            <h3 class="text-block__title">Mitigation</h3>\n                            <div class="text-block__row text-block__row--divider" ng-repeat="oneMitigation in currentSubTechnique.mitigation_table">\n                                <div class="text-block__content text-block__content--margin">\n                                    <div class="name-badge">{{ oneMitigation.name }}</div>\n                                </div>\n                                <div class="text-block__content" ng-bind-html="trustAsHtml(oneMitigation.descr)"></div>\n                            </div>\n                        </div>\n                        <div class="text-block text-block--top-margin" ng-show="checkArrayLength(currentSubTechnique.bottom_ref)">\n                            <h3 class="text-block__title">REFERENCES</h3>\n                            <ul class="list-link">\n                                <li class="list-link__item" ng-repeat="oneRef in currentSubTechnique.bottom_ref">\n                                    <a class="list-link__link" ng-href="{{oneRef.url}}" target="_blank">\n                                        <div class="list-link__icon">\n                                            <img alt="foreign" src="./assets/images/foreign.svg">\n                                        </div>\n                                        <span class="list-link__text">{{ oneRef.description }}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <div class="tabs-bar__content" ng-class="{\'show is-active\': selected.tab == \'examples\'}">\n                        <div class="table-box">\n                            <div class="table-box__head">\n                                <div class="table-box__row">\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Name</h6>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Description</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="table-box__body">\n                                <div class="table-box__row" ng-repeat="oneExample in currentSubTechnique.examples_table">\n                                    <div class="table-box__col">\n                                        <a class="name-badge" data-href="{{ oneExample.path }}/{{ oneExample.id }}">{{ oneExample.name }}</a>\n                                    </div>\n                                    <div class="table-box__col" ng-bind-html="trustAsHtml(oneExample.descr)"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="tabs-bar__content" ng-class="{\'show is-active\': selected.tab == \'sigma\'}">\n                        <div class="table-box table-box--rules">\n                            <div class="table-box__head">\n                                <div class="table-box__row">\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Sigma Name</h6>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Links</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="table-box__body">\n                                <div class="table-box__row" ng-repeat="oneRule in currentSubTechnique.rules">\n                                    <div class="table-box__col">\n                                        {{ oneRule.name }}\n                                        <p class="table-box__col--link">\n                                            <span class="table-box__col--by">by</span>\n                                            {{ oneRule.author | join }}\n                                        </p>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <ul class="button-list">\n                                            <li class="button-list__item">\n                                                <a class="button-list__btn button--git" ng-show="oneRule.git_url" ng-href="{{ oneRule.git_url }}" target="_blank">\n                                                    <img alt="github" src="./assets/images/github.svg"> GitHub\n                                                </a>\n                                                <a class="button-list__btn button--git button--disabled" ng-show="!oneRule.git_url">\n                                                    <img alt="github" src="./assets/images/github.svg"> GitHub\n                                                </a>\n                                            </li>\n                                            <li class="button-list__item">\n                                                <a class="button-list__btn button--tdm" ng-show="oneRule.tdm_url" ng-href="{{ oneRule.tdm_url }}" target="_blank">\n                                                    <img alt="github" src="./assets/images/logo.svg">\n                                                </a>\n                                                <a class="button-list__btn button--tdm button--disabled" ng-show="!oneRule.tdm_url">\n                                                    <img alt="github" src="./assets/images/logo.svg">\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="tabs-bar__content" ng-class="{\'show is-active\': selected.tab == \'yara\'}">\n                        <div class="table-box table-box--rules">\n                            <div class="table-box__head">\n                                <div class="table-box__row">\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Yara Name</h6>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Links</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="table-box__body">\n                                <div class="table-box__row" ng-repeat="oneRule in currentSubTechnique.yara">\n                                    <div class="table-box__col">\n                                        {{ oneRule.name }}\n                                        <p class="table-box__col--link">\n                                            <span class="table-box__col--by">by</span>\n                                            {{ oneRule.author | join }}\n                                        </p>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <ul class="button-list">\n                                            <li class="button-list__item">\n                                                <a class="button-list__btn button--git" ng-href="{{ oneRule.git_url }}" target="_blank">\n                                                    <img alt="github" src="./assets/images/github.svg"> GitHub\n                                                </a>\n                                            </li>\n                                            <li class="button-list__item">\n                                                <a class="button-list__btn button--tdm" ng-href="{{ oneRule.tdm_url }}" target="_blank">\n                                                    <img alt="github" src="./assets/images/logo.svg">\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="tabs-bar__content" ng-class="{\'show is-active\': selected.tab == \'red_test\'}">\n                        <div class="table-box table-box--rules">\n                            <div class="table-box__head">\n                                <div class="table-box__row">\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">RED Test Name</h6>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <h6 class="table-box__title">Links</h6>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="table-box__body">\n                                <div class="table-box__row" ng-repeat="oneRule in currentSubTechnique.red_test">\n                                    <div class="table-box__col">\n                                        {{ oneRule.name }}\n                                        <p class="table-box__col--link">\n                                            <span class="table-box__col--by">by</span>\n                                            {{ oneRule.author | join }}\n                                        </p>\n                                    </div>\n                                    <div class="table-box__col">\n                                        <ul class="button-list">\n                                            <li class="button-list__item">\n                                                <a class="button-list__btn button--git" ng-href="{{ oneRule.git_url }}" target="_blank">\n                                                    <img alt="github" src="./assets/images/github.svg"> GitHub\n                                                </a>\n                                            </li>\n                                            <li class="button-list__item">\n                                                <a class="button-list__btn button--tdm" ng-href="{{ oneRule.tdm_url }}" target="_blank">\n                                                    <img alt="github" src="./assets/images/logo.svg">\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n'
}, function (e, t)
{
	e.exports = '\n'
}, function (e, t)
{
	e.exports = '<div class="header-box">\n    <header id="header" class="header-box__header header" ng-class="{\'is-open\':isOpen, \'is-fixed\':isFixed, \'is-show\':isShow}">\n        <div class="header__inner inner"><img src="https://infosecurity.com.pk/images/other/TISS_website_logo_v3.png" width="130"/>    </header>\n</div>'
}]);