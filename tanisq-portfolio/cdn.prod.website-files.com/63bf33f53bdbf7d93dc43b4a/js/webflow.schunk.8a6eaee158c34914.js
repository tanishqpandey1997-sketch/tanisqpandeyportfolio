(self.webpackChunk = self.webpackChunk || []).push([
    ["974"], {
        5487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new G.Bare).init(e, t)
                }

                function n(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function a(e, t, n) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | n).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, n) {
                    if (void 0 !== t && (n = t), void 0 === e) return n;
                    var a = n;
                    return $.test(e) || !K.test(e) ? a = parseInt(e, 10) : K.test(e) && (a = 1e3 * parseFloat(e)), 0 > a && (a = 0), a == a ? a : n
                }

                function r(e) {
                    H.debug && window && window.console.warn(e)
                }
                var c, d, l, s = function(e, t, n) {
                        function a(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function r(c, d) {
                            function l() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            d === n && (d = c, c = Object), l.Bare = s;
                            var u, f = o[e] = c[e],
                                g = s[e] = l[e] = new o;
                            return g.constructor = l, l.mixin = function(t) {
                                return s[e] = l[e] = r(l, t)[e], l
                            }, l.open = function(e) {
                                if (u = {}, i(e) ? u = e.call(l, g, f, l, c) : a(e) && (u = e), a(u))
                                    for (var n in u) t.call(u, n) && (g[n] = u[n]);
                                return i(g.init) || (g.init = c), l
                            }, l.open(d)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, n, a) {
                            var i = (e /= a) * e,
                                o = i * e;
                            return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, n, a) {
                            return n * e / a + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, n, a) {
                            return n * (e /= a) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, n, a) {
                            return -n * (e /= a) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, n, a) {
                            return n * (e /= a) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, n, a) {
                            return -n * ((e = e / a - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, n, a) {
                            return n * (e /= a) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, n, a) {
                            return n * ((e = e / a - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, n, a) {
                            return -n * Math.cos(e / a * (Math.PI / 2)) + n + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, n, a) {
                            return n * Math.sin(e / a * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, n, a) {
                            return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, n, a) {
                            return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, n, a) {
                            return e === a ? t + n : n * (-Math.pow(2, -10 * e / a) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, n, a) {
                            return 0 === e ? t : e === a ? t + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, n, a) {
                            return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, n, a) {
                            return n * Math.sqrt(1 - (e = e / a - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, n, a) {
                            return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * (e /= a) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, n, a, i) {
                            return void 0 === i && (i = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    g = window,
                    b = "bkwld-tram",
                    p = /[\-\.0-9]/g,
                    E = /[A-Z]/,
                    y = "number",
                    T = /^(rgb|#)/,
                    I = /(em|cm|mm|in|pt|pc|px)$/,
                    O = /(em|cm|mm|in|pt|pc|px|%)$/,
                    m = /(deg|rad|turn)$/,
                    R = "unitless",
                    _ = /(all|none) 0s ease 0s/,
                    v = /^(width|height)$/,
                    A = document.createElement("a"),
                    S = ["Webkit", "Moz", "O", "ms"],
                    h = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    N = function(e) {
                        if (e in A.style) return {
                            dom: e,
                            css: e
                        };
                        var t, n, a = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < S.length; t++)
                            if ((n = S[t] + a) in A.style) return {
                                dom: n,
                                css: h[t] + e
                            }
                    },
                    U = t.support = {
                        bind: Function.prototype.bind,
                        transform: N("transform"),
                        transition: N("transition"),
                        backface: N("backface-visibility"),
                        timing: N("transition-timing-function")
                    };
                if (U.transition) {
                    var L = U.timing.dom;
                    if (A.style[L] = u["ease-in-back"][0], !A.style[L])
                        for (var C in f) u[C][0] = f[C]
                }
                var M = t.frame = (c = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame) && U.bind ? c.bind(g) : function(e) {
                        g.setTimeout(e, 16)
                    },
                    x = t.now = (l = (d = g.performance) && (d.now || d.webkitNow || d.msNow || d.mozNow)) && U.bind ? l.bind(d) : Date.now || function() {
                        return +new Date
                    },
                    P = s(function(t) {
                        function n(e, t) {
                            var n = function(e) {
                                    for (var t = -1, n = e ? e.length : 0, a = []; ++t < n;) {
                                        var i = e[t];
                                        i && a.push(i)
                                    }
                                    return a
                                }(("" + e).split(" ")),
                                a = n[0];
                            t = t || {};
                            var i = W[a];
                            if (!i) return r("Unsupported property: " + a);
                            if (!t.weak || !this.props[a]) {
                                var o = i[0],
                                    c = this.props[a];
                                return c || (c = this.props[a] = new o.Bare), c.init(this.$el, n, i, t), c
                            }
                        }

                        function a(e, t, a) {
                            if (e) {
                                var r = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == r && t) return this.timer = new k({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == r && t) {
                                    switch (e) {
                                        case "hide":
                                            d.call(this);
                                            break;
                                        case "stop":
                                            c.call(this);
                                            break;
                                        case "redraw":
                                            l.call(this);
                                            break;
                                        default:
                                            n.call(this, e, a && a[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == r) return void e.call(this, this);
                                if ("object" == r) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = o(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new k({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var g = this,
                                        b = !1,
                                        p = {};
                                    M(function() {
                                        u.call(g, e, function(e) {
                                            e.active && (b = !0, p[e.name] = e.nextStyle)
                                        }), b && g.$el.css(p)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                a.call(this, e.options, !0, e.args)
                            }
                        }

                        function c(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function d() {
                            c.call(this), this.el.style.display = "none"
                        }

                        function l() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, n = [];
                            for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                            n = n.join(","), this.style !== n && (this.style = n, this.el.style[U.transition.dom] = n)
                        }

                        function u(e, t, a) {
                            var i, o, r, c, d = t !== f,
                                l = {};
                            for (i in e) r = e[i], i in Q ? (l.transform || (l.transform = {}), l.transform[i] = r) : (E.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in W ? l[i] = r : (c || (c = {}), c[i] = r));
                            for (i in l) {
                                if (r = l[i], !(o = this.props[i])) {
                                    if (!d) continue;
                                    o = n.call(this, i)
                                }
                                t.call(this, o, r)
                            }
                            a && c && a.call(this, c)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function g(e, t) {
                            e.set(t)
                        }

                        function p(e) {
                            this.$el.css(e)
                        }

                        function y(e, n) {
                            t[e] = function() {
                                return this.children ? T.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                            }
                        }

                        function T(e, t) {
                            var n, a = this.children.length;
                            for (n = 0; a > n; n++) e.apply(this.children[n], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                                var n = j(this.el, "transition");
                                n && !_.test(n) && (this.upstream = n)
                            }
                            U.backface && H.hideBackface && B(this.el, U.backface.css, "hidden")
                        }, y("add", n), y("start", a), y("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new k({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), y("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : r("No active transition timer. Use start() or wait() before then().")
                        }), y("next", i), y("stop", c), y("set", function(e) {
                            c.call(this, e), u.call(this, e, g, p)
                        }), y("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), y("hide", d), y("redraw", l), y("destroy", function() {
                            c.call(this), e.removeData(this.el, b), this.$el = this.el = null
                        })
                    }),
                    G = s(P, function(t) {
                        function n(t, n) {
                            var a = e.data(t, b) || e.data(t, b, new P.Bare);
                            return a.el || a.init(t), n ? a.start(n) : a
                        }
                        t.init = function(t, a) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return n(i[0], a);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(n(t, a))
                            }), this.children = o, this
                        }
                    }),
                    V = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, n, a) {
                            this.$el = e, this.el = e[0];
                            var i, r, c, d = t[0];
                            n[2] && (d = n[2]), Y[d] && (d = Y[d]), this.name = d, this.type = n[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], r = this.ease, c = "ease", void 0 !== r && (c = r), i in u ? i : c), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = v.test(this.name), this.unit = a.unit || this.unit || H.defaultUnit, this.angle = a.angle || this.angle || H.defaultAngle, H.fallback || a.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new X({
                                from: n,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return j(this.el, this.name)
                        }, e.update = function(e) {
                            B(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, B(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var n, i, o = "number" == typeof e,
                                c = "string" == typeof e;
                            switch (t) {
                                case y:
                                    if (o) return e;
                                    if (c && "" === e.replace(p, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case T:
                                    if (c) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? a(n[1], n[2], n[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case I:
                                    if (o) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case O:
                                    if (o) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case m:
                                    if (o) return e + this.angle;
                                    if (c && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case R:
                                    if (o || c && O.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return r("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    F = s(V, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), T))
                        }
                    }),
                    w = s(V, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    D = s(V, function(e, t) {
                        function n(e, t) {
                            var n, a, i, o, r;
                            for (n in e) i = (o = Q[n])[0], a = o[1] || n, r = this.convert(e[n], i), t.call(this, a, r, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && H.perspective && (this.current.perspective = H.perspective, B(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            n.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), B(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new z({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var n, a = {};
                            for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                            this.active = !0, this.nextStyle = this.style(a)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new z({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            B(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, n = "";
                            for (t in e) n += t + "(" + e[t] + ") ";
                            return n
                        }, e.values = function(e) {
                            var t, a = {};
                            return n.call(this, e, function(e, n, i) {
                                a[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), a
                        }
                    }),
                    X = s(function(t) {
                        function o() {
                            var e, t, n, a = d.length;
                            if (a)
                                for (M(o), t = x(), e = a; e--;)(n = d[e]) && n.render(t)
                        }
                        var c = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || c.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = c.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var n = e.from,
                                a = e.to;
                            void 0 === n && (n = c.from), void 0 === a && (a = c.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof a ? (this.begin = n, this.change = a - n) : this.format(a, n), this.value = this.begin + this.unit, this.start = x(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = x()), this.active = !0, 1 === d.push(this) && M(o))
                        }, t.stop = function() {
                            var t, n;
                            this.active && (this.active = !1, (n = e.inArray(this, d)) >= 0 && (t = d.slice(n + 1), d.length = n, t.length && (d = d.concat(t))))
                        }, t.render = function(e) {
                            var t, n = e - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay
                            }
                            if (n < this.duration) {
                                var i, o, r = this.ease(n, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, a(i[0] + r * (o[0] - i[0]), i[1] + r * (o[1] - i[1]), i[2] + r * (o[2] - i[2]))) : Math.round((this.begin + r * this.change) * l) / l, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = n(t), this.endRGB = n(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var a = t.replace(p, "");
                                a !== e.replace(p, "") && r("Units do not match [tween]: " + t + ", " + e), this.unit = a
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var d = [],
                            l = 1e3
                    }),
                    k = s(X, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    z = s(X, function(e, t) {
                        e.init = function(e) {
                            var t, n;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new X({
                                name: t,
                                from: this.current[t],
                                to: n,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, n, a = this.tweens.length,
                                i = !1;
                            for (t = a; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    H = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !U.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!U.transition) return H.fallback = !0;
                    H.agentTests.push("(" + e + ")");
                    var t = RegExp(H.agentTests.join("|"), "i");
                    H.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new X(e)
                }, t.delay = function(e, t, n) {
                    return new k({
                        complete: t,
                        duration: e,
                        context: n
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var B = e.style,
                    j = e.css,
                    Y = {
                        transform: U.transform && U.transform.css
                    },
                    W = {
                        color: [F, T],
                        background: [F, T, "background-color"],
                        "outline-color": [F, T],
                        "border-color": [F, T],
                        "border-top-color": [F, T],
                        "border-right-color": [F, T],
                        "border-bottom-color": [F, T],
                        "border-left-color": [F, T],
                        "border-width": [V, I],
                        "border-top-width": [V, I],
                        "border-right-width": [V, I],
                        "border-bottom-width": [V, I],
                        "border-left-width": [V, I],
                        "border-spacing": [V, I],
                        "letter-spacing": [V, I],
                        margin: [V, I],
                        "margin-top": [V, I],
                        "margin-right": [V, I],
                        "margin-bottom": [V, I],
                        "margin-left": [V, I],
                        padding: [V, I],
                        "padding-top": [V, I],
                        "padding-right": [V, I],
                        "padding-bottom": [V, I],
                        "padding-left": [V, I],
                        "outline-width": [V, I],
                        opacity: [V, y],
                        top: [V, O],
                        right: [V, O],
                        bottom: [V, O],
                        left: [V, O],
                        "font-size": [V, O],
                        "text-indent": [V, O],
                        "word-spacing": [V, O],
                        width: [V, O],
                        "min-width": [V, O],
                        "max-width": [V, O],
                        height: [V, O],
                        "min-height": [V, O],
                        "max-height": [V, O],
                        "line-height": [V, R],
                        "scroll-top": [w, y, "scrollTop"],
                        "scroll-left": [w, y, "scrollLeft"]
                    },
                    Q = {};
                U.transform && (W.transform = [D], Q = {
                    x: [O, "translateX"],
                    y: [O, "translateY"],
                    rotate: [m],
                    rotateX: [m],
                    rotateY: [m],
                    scale: [y],
                    scaleX: [y],
                    scaleY: [y],
                    skew: [m],
                    skewX: [m],
                    skewY: [m]
                }), U.transform && U.backface && (Q.z = [O, "translateZ"], Q.rotateZ = [m], Q.scaleZ = [y], Q.perspective = [I]);
                var $ = /ms/,
                    K = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        5756: function(e, t, n) {
            "use strict";
            var a, i, o, r, c, d, l, s, u, f, g, b, p, E, y, T, I, O, m, R, _ = window.$,
                v = n(5487) && _.tram;
            (a = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, r = Object.prototype, c = Function.prototype, o.push, d = o.slice, o.concat, r.toString, l = r.hasOwnProperty, s = o.forEach, u = o.map, o.reduce, o.reduceRight, f = o.filter, o.every, g = o.some, b = o.indexOf, o.lastIndexOf, p = Object.keys, c.bind, E = a.each = a.forEach = function(e, t, n) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, n);
                else if (e.length === +e.length) {
                    for (var o = 0, r = e.length; o < r; o++)
                        if (t.call(n, e[o], o, e) === i) return
                } else
                    for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                        if (t.call(n, e[c[o]], c[o], e) === i) return;
                return e
            }, a.map = a.collect = function(e, t, n) {
                var a = [];
                return null == e ? a : u && e.map === u ? e.map(t, n) : (E(e, function(e, i, o) {
                    a.push(t.call(n, e, i, o))
                }), a)
            }, a.find = a.detect = function(e, t, n) {
                var a;
                return y(e, function(e, i, o) {
                    if (t.call(n, e, i, o)) return a = e, !0
                }), a
            }, a.filter = a.select = function(e, t, n) {
                var a = [];
                return null == e ? a : f && e.filter === f ? e.filter(t, n) : (E(e, function(e, i, o) {
                    t.call(n, e, i, o) && a.push(e)
                }), a)
            }, y = a.some = a.any = function(e, t, n) {
                t || (t = a.identity);
                var o = !1;
                return null == e ? o : g && e.some === g ? e.some(t, n) : (E(e, function(e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i
                }), !!o)
            }, a.contains = a.include = function(e, t) {
                return null != e && (b && e.indexOf === b ? -1 != e.indexOf(t) : y(e, function(e) {
                    return e === t
                }))
            }, a.delay = function(e, t) {
                var n = d.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n)
                }, t)
            }, a.defer = function(e) {
                return a.delay.apply(a, [e, 1].concat(d.call(arguments, 1)))
            }, a.throttle = function(e) {
                var t, n, a;
                return function() {
                    t || (t = !0, n = arguments, a = this, v.frame(function() {
                        t = !1, e.apply(a, n)
                    }))
                }
            }, a.debounce = function(e, t, n) {
                var i, o, r, c, d, l = function() {
                    var s = a.now() - c;
                    s < t ? i = setTimeout(l, t - s) : (i = null, n || (d = e.apply(r, o), r = o = null))
                };
                return function() {
                    r = this, o = arguments, c = a.now();
                    var s = n && !i;
                    return i || (i = setTimeout(l, t)), s && (d = e.apply(r, o), r = o = null), d
                }
            }, a.defaults = function(e) {
                if (!a.isObject(e)) return e;
                for (var t = 1, n = arguments.length; t < n; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, a.keys = function(e) {
                if (!a.isObject(e)) return [];
                if (p) return p(e);
                var t = [];
                for (var n in e) a.has(e, n) && t.push(n);
                return t
            }, a.has = function(e, t) {
                return l.call(e, t)
            }, a.isObject = function(e) {
                return e === Object(e)
            }, a.now = Date.now || function() {
                return new Date().getTime()
            }, a.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, T = /(.)^/, I = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, O = /\\|'|\r|\n|\u2028|\u2029/g, m = function(e) {
                return "\\" + I[e]
            }, R = /^\s*(\w|\$)+\s*$/, a.template = function(e, t, n) {
                !t && n && (t = n);
                var i, o = RegExp([((t = a.defaults({}, t, a.templateSettings)).escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
                    r = 0,
                    c = "__p+='";
                e.replace(o, function(t, n, a, i, o) {
                    return c += e.slice(r, o).replace(O, m), r = o + t.length, n ? c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : a ? c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'" : i && (c += "';\n" + i + "\n__p+='"), t
                }), c += "';\n";
                var d = t.variable;
                if (d) {
                    if (!R.test(d)) throw Error("variable is not a bare identifier: " + d)
                } else c = "with(obj||{}){\n" + c + "}\n", d = "obj";
                c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", c)
                } catch (e) {
                    throw e.source = c, e
                }
                var l = function(e) {
                    return i.call(this, e, a)
                };
                return l.source = "function(" + d + "){\n" + c + "}", l
            }, e.exports = a
        },
        9461: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("brand", e.exports = function(e) {
                var t, n = {},
                    i = document,
                    o = e("html"),
                    r = e("body"),
                    c = window.location,
                    d = /PhantomJS/i.test(navigator.userAgent),
                    l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", n ? "display: none !important;" : "")
                }

                function u() {
                    var e = r.children(".w-webflow-badge"),
                        n = e.length && e.get(0) === t,
                        i = a.env("editor");
                    if (n) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), i || r.append(t)
                }
                return n.ready = function() {
                    var n, a, r, f = o.attr("data-wf-status"),
                        g = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(g) && c.hostname !== g && (f = !0), f && !d && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), a = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), r = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), n.append(a, r), n[0]), u(), setTimeout(u, 500), e(i).off(l, s).on(l, s))
                }, n
            })
        },
        322: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("edit", e.exports = function(e, t, n) {
                if (n = n || {}, (a.env("test") || a.env("frame")) && !n.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    r = e(document.documentElement),
                    c = document.location,
                    d = "hashchange",
                    l = n.load || function() {
                        var t, n, a;
                        i = !0, window.WebflowEditor = !0, o.off(d, u), t = function(t) {
                            var n;
                            e.ajax({
                                url: g("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: r.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (n = t, function(t) {
                                    var a, i, o;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = n, i = (a = t.scriptPath).indexOf("//") >= 0 ? a : g("https://editor-api.webflow.com" + a), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, f)
                                })
                            })
                        }, (n = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", n.style.display = "none", n.sandbox = "allow-scripts allow-same-origin", a = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (b(n, a), t(!1)) : "WF_third_party_cookies_supported" === e.data && (b(n, a), t(!0))
                        }, n.onerror = function() {
                            b(n, a), t(!1)
                        }, window.addEventListener("message", a, !1), window.document.body.appendChild(n)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    !i && /\?edit/.test(c.hash) && l()
                }

                function f(e, t, n) {
                    throw console.error("Could not load editor script: " + t), n
                }

                function g(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function b(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return s ? l() : c.search ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) || /\?edit$/.test(c.href)) && l() : o.on(d, u).triggerHandler(d), {}
            })
        },
        2338: function(e, t, n) {
            "use strict";
            n(3949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    n = !1,
                                    a = null,
                                    i = {
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
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function r(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function c() {
                                    t = !1
                                }

                                function d() {
                                    document.addEventListener("mousemove", l), document.addEventListener("mousedown", l), document.addEventListener("mouseup", l), document.addEventListener("pointermove", l), document.addEventListener("pointerdown", l), document.addEventListener("pointerup", l), document.addEventListener("touchmove", l), document.addEventListener("touchstart", l), document.addEventListener("touchend", l)
                                }

                                function l(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", l), document.removeEventListener("mousedown", l), document.removeEventListener("mouseup", l), document.removeEventListener("pointermove", l), document.removeEventListener("pointerdown", l), document.removeEventListener("pointerup", l), document.removeEventListener("touchmove", l), document.removeEventListener("touchstart", l), document.removeEventListener("touchend", l))
                                }
                                document.addEventListener("keydown", function(n) {
                                    n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && r(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", c, !0), document.addEventListener("pointerdown", c, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (n && (t = !0), d())
                                }, !0), d(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var n, a, c;
                                        (t || (a = (n = e.target).type, "INPUT" === (c = n.tagName) && i[a] && !n.readOnly || "TEXTAREA" === c && !n.readOnly || n.isContentEditable || 0)) && r(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        n = !0, window.clearTimeout(a), a = window.setTimeout(function() {
                                            n = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function n(n) {
                    t && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), e.unshift(n))
                }

                function i(n) {
                    var a, i;
                    i = (a = n.target).tagName, (/^a$/i.test(i) && null != a.href || /^(button|textarea)$/i.test(i) && !0 !== a.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === a.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, n.target.focus(); e.length > 0;) {
                            var a = e.pop();
                            a.target.dispatchEvent(new MouseEvent(a.type, a))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && a.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                n = {},
                a = [],
                i = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, a) {
                        a.__wf_intro || (a.__wf_intro = !0, t(a).triggerHandler(n.types.INTRO))
                    },
                    outro: function(e, a) {
                        a.__wf_intro && (a.__wf_intro = null, t(a).triggerHandler(n.types.OUTRO))
                    }
                };
            n.triggers = {}, n.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, n.init = function() {
                for (var e = a.length, i = 0; i < e; i++) {
                    var r = a[i];
                    r[0](0, r[1])
                }
                a = [], t.extend(n.triggers, o)
            }, n.async = function() {
                for (var e in o) {
                    var t = o[e];
                    o.hasOwnProperty(e) && (n.triggers[e] = function(e, n) {
                        a.push([t, n])
                    })
                }
            }, n.async(), e.exports = n
        },
        5134: function(e, t, n) {
            "use strict";
            var a = n(7199);

            function i(e, t) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
            }
            var o = window.jQuery,
                r = {},
                c = ".w-ix";
            r.triggers = {}, r.types = {
                INTRO: "w-ix-intro" + c,
                OUTRO: "w-ix-outro" + c
            }, o.extend(r.triggers, {
                reset: function(e, t) {
                    a.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = r
        },
        941: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(6011);
            i.setEnv(a.env), a.define("ix2", e.exports = function() {
                return i
            })
        },
        3949: function(e, t, n) {
            "use strict";
            var a, i, o = {},
                r = {},
                c = [],
                d = window.Webflow || [],
                l = window.jQuery,
                s = l(window),
                u = l(document),
                f = l.isFunction,
                g = o._ = n(5756),
                b = o.tram = n(5487) && l.tram,
                p = !1,
                E = !1;

            function y(e) {
                o.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (p) return e.ready();
                    g.contains(c, e.ready) || c.push(e.ready)
                }(e)
            }

            function T(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, c = g.filter(c, function(e) {
                    return e !== t.ready
                }))
            }
            b.config.hideBackface = !1, b.config.keepInherited = !0, o.define = function(e, t, n) {
                r[e] && T(r[e]);
                var a = r[e] = t(l, g, n) || {};
                return y(a), a
            }, o.require = function(e) {
                return r[e]
            }, o.push = function(e) {
                if (p) {
                    f(e) && e();
                    return
                }
                d.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    n = void 0 !== t;
                return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
            };
            var I = navigator.userAgent.toLowerCase(),
                O = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                m = o.env.chrome = /chrome/.test(I) && /Google/.test(navigator.vendor) && parseInt(I.match(/chrome\/(\d+)\./)[1], 10),
                R = o.env.ios = /(ipod|iphone|ipad)/.test(I);
            o.env.safari = /safari/.test(I) && !m && !R, O && u.on("touchstart mousedown", function(e) {
                a = e.target
            }), o.validClick = O ? function(e) {
                return e === a || l.contains(e, a)
            } : function() {
                return !0
            };
            var _ = "resize.webflow orientationchange.webflow load.webflow",
                v = "scroll.webflow " + _;

            function A(e, t) {
                var n = [],
                    a = {};
                return a.up = g.throttle(function(e) {
                    g.each(n, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, a.up), a.on = function(e) {
                    "function" == typeof e && (g.contains(n, e) || n.push(e))
                }, a.off = function(e) {
                    if (!arguments.length) {
                        n = [];
                        return
                    }
                    n = g.filter(n, function(t) {
                        return t !== e
                    })
                }, a
            }

            function S(e) {
                f(e) && e()
            }

            function h() {
                i && (i.reject(), s.off("load", i.resolve)), i = new l.Deferred, s.on("load", i.resolve)
            }
            o.resize = A(s, _), o.scroll = A(s, v), o.redraw = A(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                p = !0, E ? (E = !1, g.each(r, y)) : g.each(c, S), g.each(d, S), o.resize.up()
            }, o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, E = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (p = e.domready), g.each(r, T), o.resize.off(), o.scroll.off(), o.redraw.off(), c = [], d = [], "pending" === i.state() && h()
            }, l(o.ready), h(), e.exports = window.Webflow = o
        },
        7624: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("links", e.exports = function(e, t) {
                var n, i, o, r = {},
                    c = e(window),
                    d = a.env(),
                    l = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    g = /\/$/;

                function b() {
                    var e = c.scrollTop(),
                        n = c.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var a = t.link,
                                i = t.sec,
                                o = i.offset().top,
                                r = i.outerHeight(),
                                c = .5 * n,
                                d = i.is(":visible") && o + r - c >= e && o + c <= e + n;
                            t.active !== d && (t.active = d, p(a, u, d))
                        }
                    })
                }

                function p(e, t, n) {
                    var a = e.hasClass(t);
                    (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t))
                }
                return r.ready = r.design = r.preview = function() {
                    n = d && a.env("design"), o = a.env("slug") || l.pathname || "", a.scroll.off(b), i = [];
                    for (var t = document.links, r = 0; r < t.length; ++r) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var a = n && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = a, !(a.indexOf(":") >= 0)) {
                                var r = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === l.host + l.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var c = e(s.hash);
                                    c.length && i.push({
                                        link: r,
                                        sec: c,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== a && "" !== a && p(r, u, s.href === l.href || a === o || f.test(a) && g.test(o))
                            }
                        }
                    }(t[r]);
                    i.length && (a.scroll.on(b), b())
                }, r
            })
        },
        286: function(e, t, n) {
            "use strict";
            var a = n(3949);
            a.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    n = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    r = e(document),
                    c = e(document.body),
                    d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    l = a.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    g = document.createElement("style");
                g.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var b = /^#[a-zA-Z0-9][\w:.-]*$/;
                let p = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function E(e, t) {
                    var n;
                    switch (t) {
                        case "add":
                            (n = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", n): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (n = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", n), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function y(t) {
                    var r = t.currentTarget;
                    if (!(a.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))) {
                        var l = b.test(r.hash) && r.host + r.pathname === n.host + n.pathname ? r.hash : "";
                        if ("" !== l) {
                            var u, f = e(l);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), u = l, n.hash !== u && i && i.pushState && !(a.env.chrome && "file:" === n.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                                hash: u
                            }, "", u), window.setTimeout(function() {
                                ! function(t, n) {
                                    var a = o.scrollTop(),
                                        i = function(t) {
                                            var n = e(s),
                                                a = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                                i = t.offset().top - a;
                                            if ("mid" === t.data("scroll")) {
                                                var r = o.height() - a,
                                                    c = t.outerHeight();
                                                c < r && (i -= Math.round((r - c) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (a !== i) {
                                        var r = function(e, t, n) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || p.matches) return 0;
                                                var a = 1;
                                                return c.add(e).each(function(e, t) {
                                                    var n = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(n) && n >= 0 && (a = n)
                                                }), (472.143 * Math.log(Math.abs(t - n) + 125) - 2e3) * a
                                            }(t, a, i),
                                            l = Date.now(),
                                            u = function() {
                                                var e, t, o, c, s, f = Date.now() - l;
                                                window.scroll(0, (e = a, t = i, (o = f) > (c = r) ? t : e + (t - e) * ((s = o / c) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= r ? d(u) : "function" == typeof n && n()
                                            };
                                        d(u)
                                    }
                                }(f, function() {
                                    E(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), E(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: n
                        } = t;
                        r.on(n, f, y), r.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(g, document.head.firstChild)
                    }
                }
            })
        },
        3695: function(e, t, n) {
            "use strict";
            n(3949).define("touch", e.exports = function(e) {
                var t = {},
                    n = window.getSelection;

                function a(t) {
                    var a, i, o = !1,
                        r = !1,
                        c = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function d(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (r = !0, a = t[0].clientX) : a = e.clientX, i = a)
                    }

                    function l(t) {
                        if (o) {
                            if (r && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var a, d, l, s, f = t.touches,
                                g = f ? f[0].clientX : t.clientX,
                                b = g - i;
                            i = g, Math.abs(b) > c && n && "" === String(n()) && (a = "swipe", d = t, l = {
                                direction: b > 0 ? "right" : "left"
                            }, s = e.Event(a, {
                                originalEvent: d
                            }), e(d.target).trigger(s, l), u())
                        }
                    }

                    function s(e) {
                        if (o && (o = !1, r && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), r = !1;
                            return
                        }
                    }

                    function u() {
                        o = !1
                    }
                    t.addEventListener("touchstart", d, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", d, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", d, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", d, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new a(t) : null
                }, t.instance = t.init(document), t
            })
        },
        1655: function(e, t, n) {
            "use strict";
            var a = n(3949),
                i = n(5134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
            a.define("navbar", e.exports = function(e, t) {
                var n, r, c, d, l = {},
                    s = e.tram,
                    u = e(window),
                    f = e(document),
                    g = t.debounce,
                    b = a.env(),
                    p = ".w-nav",
                    E = "w--open",
                    y = "w--nav-dropdown-open",
                    T = "w--nav-dropdown-toggle-open",
                    I = "w--nav-dropdown-list-open",
                    O = "w--nav-link-open",
                    m = i.triggers,
                    R = e();

                function _() {
                    a.resize.off(v)
                }

                function v() {
                    r.each(P)
                }

                function A(n, a) {
                    var i, r, l, s, g, b = e(a),
                        E = e.data(a, p);
                    E || (E = e.data(a, p, {
                        open: !1,
                        el: b,
                        config: {},
                        selectedIdx: -1
                    })), E.menu = b.find(".w-nav-menu"), E.links = E.menu.find(".w-nav-link"), E.dropdowns = E.menu.find(".w-dropdown"), E.dropdownToggle = E.menu.find(".w-dropdown-toggle"), E.dropdownList = E.menu.find(".w-dropdown-list"), E.button = b.find(".w-nav-button"), E.container = b.find(".w-container"), E.overlayContainerId = "w-nav-overlay-" + n, E.outside = ((i = E).outside && f.off("click" + p, i.outside), function(t) {
                        var n = e(t.target);
                        d && n.closest(".w-editor-bem-EditorOverlay").length || x(i, n)
                    });
                    var y = b.find(".w-nav-brand");
                    y && "/" === y.attr("href") && null == y.attr("aria-label") && y.attr("aria-label", "home"), E.button.attr("style", "-webkit-user-select: text;"), null == E.button.attr("aria-label") && E.button.attr("aria-label", "menu"), E.button.attr("role", "button"), E.button.attr("tabindex", "0"), E.button.attr("aria-controls", E.overlayContainerId), E.button.attr("aria-haspopup", "menu"), E.button.attr("aria-expanded", "false"), E.el.off(p), E.button.off(p), E.menu.off(p), N(E), c ? (h(E), E.el.on("setting" + p, (r = E, function(e, n) {
                        n = n || {};
                        var a = u.width();
                        N(r), !0 === n.open && w(r, !0), !1 === n.open && X(r, !0), r.open && t.defer(function() {
                            a !== u.width() && L(r)
                        })
                    }))) : ((l = E).overlay || (l.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(l.el), l.overlay.attr("id", l.overlayContainerId), l.parent = l.menu.parent(), X(l, !0)), E.button.on("click" + p, C(E)), E.menu.on("click" + p, "a", M(E)), E.button.on("keydown" + p, (s = E, function(e) {
                        switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return C(s)(), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return X(s), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                                if (!s.open) return e.preventDefault(), e.stopPropagation();
                                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, U(s), e.preventDefault(), e.stopPropagation()
                        }
                    })), E.el.on("keydown" + p, (g = E, function(e) {
                        if (g.open) switch (g.selectedIdx = g.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                            case o.END:
                                return e.keyCode === o.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0, U(g), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return X(g), g.button.focus(), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return g.selectedIdx = Math.max(-1, g.selectedIdx - 1), U(g), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1), U(g), e.preventDefault(), e.stopPropagation()
                        }
                    }))), P(n, a)
                }

                function S(t, n) {
                    var a = e.data(n, p);
                    a && (h(a), e.removeData(n, p))
                }

                function h(e) {
                    e.overlay && (X(e, !0), e.overlay.remove(), e.overlay = null)
                }

                function N(e) {
                    var n = {},
                        a = e.config || {},
                        i = n.animation = e.el.attr("data-animation") || "default";
                    n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, a.animation !== i && e.open && t.defer(L, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
                }

                function U(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), M(t)
                    }
                }

                function L(e) {
                    e.open && (X(e, !0), w(e, !0))
                }

                function C(e) {
                    return g(function() {
                        e.open ? X(e) : w(e)
                    })
                }

                function M(t) {
                    return function(n) {
                        var i = e(this).attr("href");
                        if (!a.validClick(n.currentTarget)) return void n.preventDefault();
                        i && 0 === i.indexOf("#") && t.open && X(t)
                    }
                }
                l.ready = l.design = l.preview = function() {
                    c = b && a.env("design"), d = a.env("editor"), n = e(document.body), (r = f.find(p)).length && (r.each(A), _(), a.resize.on(v))
                }, l.destroy = function() {
                    R = e(), _(), r && r.length && r.each(S)
                };
                var x = g(function(e, t) {
                    if (e.open) {
                        var n = t.closest(".w-nav-menu");
                        e.menu.is(n) || X(e)
                    }
                });

                function P(t, n) {
                    var a = e.data(n, p),
                        i = a.collapsed = "none" !== a.button.css("display");
                    if (!a.open || i || c || X(a, !0), a.container.length) {
                        var o, r = ("none" === (o = a.container.css(G)) && (o = ""), function(t, n) {
                            (n = e(n)).css(G, ""), "none" === n.css(G) && n.css(G, o)
                        });
                        a.links.each(r), a.dropdowns.each(r)
                    }
                    a.open && D(a)
                }
                var G = "max-width";

                function V(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function F(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function w(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(V), e.links.addClass(O), e.dropdowns.addClass(y), e.dropdownToggle.addClass(T), e.dropdownList.addClass(I), e.button.addClass(E);
                        var n = e.config;
                        ("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0);
                        var i = D(e),
                            o = e.menu.outerHeight(!0),
                            r = e.menu.outerWidth(!0),
                            d = e.el.height(),
                            l = e.el[0];
                        if (P(0, l), m.intro(0, l), a.redraw.up(), c || f.on("click" + p, e.outside), t) return void g();
                        var u = "transform " + n.duration + "ms " + n.easing;
                        if (e.overlay && (R = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) {
                            s(e.menu).add(u).set({
                                x: n.animDirect * r,
                                height: i
                            }).start({
                                x: 0
                            }).then(g), e.overlay && e.overlay.width(r);
                            return
                        }
                        s(e.menu).add(u).set({
                            y: -(d + o)
                        }).start({
                            y: 0
                        }).then(g)
                    }

                    function g() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function D(e) {
                    var t = e.config,
                        a = t.docHeight ? f.height() : n.height();
                    return t.animOver ? e.menu.height(a) : "fixed" !== e.el.css("position") && (a -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(a), a
                }

                function X(e, t) {
                    if (e.open) {
                        e.open = !1, e.button.removeClass(E);
                        var n = e.config;
                        if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0), m.outro(0, e.el[0]), f.off("click" + p, e.outside), t) {
                            s(e.menu).stop(), c();
                            return
                        }
                        var a = "transform " + n.duration + "ms " + n.easing2,
                            i = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            r = e.el.height();
                        if (n.animOver) return void s(e.menu).add(a).start({
                            x: o * n.animDirect
                        }).then(c);
                        s(e.menu).add(a).start({
                            y: -(r + i)
                        }).then(c)
                    }

                    function c() {
                        e.menu.height(""), s(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(F), e.links.removeClass(O), e.dropdowns.removeClass(y), e.dropdownToggle.removeClass(T), e.dropdownList.removeClass(I), e.overlay && e.overlay.children().length && (R.length ? e.menu.insertAfter(R) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return l
            })
        },
        3946: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                actionListPlaybackChanged: function() {
                    return j
                },
                animationFrameChanged: function() {
                    return D
                },
                clearRequested: function() {
                    return G
                },
                elementStateChanged: function() {
                    return B
                },
                eventListenerAdded: function() {
                    return V
                },
                eventStateChanged: function() {
                    return w
                },
                instanceAdded: function() {
                    return k
                },
                instanceRemoved: function() {
                    return H
                },
                instanceStarted: function() {
                    return z
                },
                mediaQueriesDefined: function() {
                    return W
                },
                parameterChanged: function() {
                    return X
                },
                playbackRequested: function() {
                    return x
                },
                previewRequested: function() {
                    return M
                },
                rawDataImported: function() {
                    return N
                },
                sessionInitialized: function() {
                    return U
                },
                sessionStarted: function() {
                    return L
                },
                sessionStopped: function() {
                    return C
                },
                stopRequested: function() {
                    return P
                },
                testFrameRendered: function() {
                    return F
                },
                viewportWidthChanged: function() {
                    return Y
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(7087),
                r = n(9468),
                {
                    IX2_RAW_DATA_IMPORTED: c,
                    IX2_SESSION_INITIALIZED: d,
                    IX2_SESSION_STARTED: l,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: g,
                    IX2_CLEAR_REQUESTED: b,
                    IX2_EVENT_LISTENER_ADDED: p,
                    IX2_TEST_FRAME_RENDERED: E,
                    IX2_EVENT_STATE_CHANGED: y,
                    IX2_ANIMATION_FRAME_CHANGED: T,
                    IX2_PARAMETER_CHANGED: I,
                    IX2_INSTANCE_ADDED: O,
                    IX2_INSTANCE_STARTED: m,
                    IX2_INSTANCE_REMOVED: R,
                    IX2_ELEMENT_STATE_CHANGED: _,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
                    IX2_VIEWPORT_WIDTH_CHANGED: A,
                    IX2_MEDIA_QUERIES_DEFINED: S
                } = o.IX2EngineActionTypes,
                {
                    reifyState: h
                } = r.IX2VanillaUtils,
                N = e => ({
                    type: c,
                    payload: { ...h(e)
                    }
                }),
                U = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: d,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                L = () => ({
                    type: l
                }),
                C = () => ({
                    type: s
                }),
                M = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: u,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                x = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: n,
                    eventId: a,
                    allowEvents: i,
                    immediate: r,
                    testManual: c,
                    verbose: d,
                    rawData: l
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: n,
                        testManual: c,
                        eventId: a,
                        allowEvents: i,
                        immediate: r,
                        verbose: d,
                        rawData: l
                    }
                }),
                P = e => ({
                    type: g,
                    payload: {
                        actionListId: e
                    }
                }),
                G = () => ({
                    type: b
                }),
                V = (e, t) => ({
                    type: p,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                F = (e = 1) => ({
                    type: E,
                    payload: {
                        step: e
                    }
                }),
                w = (e, t) => ({
                    type: y,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                D = (e, t) => ({
                    type: T,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                X = (e, t) => ({
                    type: I,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                k = e => ({
                    type: O,
                    payload: { ...e
                    }
                }),
                z = (e, t) => ({
                    type: m,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                H = e => ({
                    type: R,
                    payload: {
                        instanceId: e
                    }
                }),
                B = (e, t, n, a) => ({
                    type: _,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: n,
                        actionItem: a
                    }
                }),
                j = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: v,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                Y = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: A,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                W = () => ({
                    type: S
                })
        },
        6011: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                actions: function() {
                    return l
                },
                destroy: function() {
                    return b
                },
                init: function() {
                    return g
                },
                setEnv: function() {
                    return f
                },
                store: function() {
                    return u
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = n(9516),
                c = (a = n(7243)) && a.__esModule ? a : {
                    default: a
                },
                d = n(1970),
                l = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = s(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(3946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }
            let u = (0, r.createStore)(c.default);

            function f(e) {
                e() && (0, d.observeRequests)(u)
            }

            function g(e) {
                b(), (0, d.startEngine)({
                    store: u,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function b() {
                (0, d.stopEngine)(u)
            }
        },
        5012: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                elementContains: function() {
                    return I
                },
                getChildElements: function() {
                    return m
                },
                getClosestElement: function() {
                    return _
                },
                getProperty: function() {
                    return b
                },
                getQuerySelector: function() {
                    return E
                },
                getRefType: function() {
                    return v
                },
                getSiblingElements: function() {
                    return R
                },
                getStyle: function() {
                    return g
                },
                getValidDocument: function() {
                    return y
                },
                isSiblingNode: function() {
                    return O
                },
                matchSelector: function() {
                    return p
                },
                queryDocument: function() {
                    return T
                },
                setStyle: function() {
                    return f
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(9468),
                r = n(7087),
                {
                    ELEMENT_MATCHES: c
                } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: d,
                    HTML_ELEMENT: l,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u
                } = r.IX2EngineConstants;

            function f(e, t, n) {
                e.style[t] = n
            }

            function g(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function b(e, t) {
                return e[t]
            }

            function p(e) {
                return t => t[c](e)
            }

            function E({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(d)) {
                        let n = e.split(d),
                            a = n[0];
                        if (t = n[1], a !== document.documentElement.getAttribute(u)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function y(e) {
                return null == e || e === document.documentElement.getAttribute(u) ? document : null
            }

            function T(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function I(e, t) {
                return e.contains(t)
            }

            function O(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function m(e) {
                let t = [];
                for (let n = 0, {
                        length: a
                    } = e || []; n < a; n++) {
                    let {
                        children: a
                    } = e[n], {
                        length: i
                    } = a;
                    if (i)
                        for (let e = 0; e < i; e++) t.push(a[e])
                }
                return t
            }

            function R(e = []) {
                let t = [],
                    n = [];
                for (let a = 0, {
                        length: i
                    } = e; a < i; a++) {
                    let {
                        parentNode: i
                    } = e[a];
                    if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i)) continue;
                    n.push(i);
                    let o = i.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let _ = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let n = e;
                do {
                    if (n[c] && n[c](t)) return n;
                    n = n.parentNode
                } while (null != n);
                return null
            };

            function v(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? l : s : null
            }
        },
        1970: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                observeRequests: function() {
                    return q
                },
                startActionGroup: function() {
                    return eb
                },
                startEngine: function() {
                    return ea
                },
                stopActionGroup: function() {
                    return eg
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return ei
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = T(n(9777)),
                r = T(n(4738)),
                c = T(n(4659)),
                d = T(n(3452)),
                l = T(n(6633)),
                s = T(n(3729)),
                u = T(n(2397)),
                f = T(n(5082)),
                g = n(7087),
                b = n(9468),
                p = n(3946),
                E = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = I(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(5012)),
                y = T(n(8955));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (I = function(e) {
                    return e ? n : t
                })(e)
            }
            let O = Object.keys(g.QuickEffectIds),
                m = e => O.includes(e),
                {
                    COLON_DELIMITER: R,
                    BOUNDARY_SELECTOR: _,
                    HTML_ELEMENT: v,
                    RENDER_GENERAL: A,
                    W_MOD_IX: S
                } = g.IX2EngineConstants,
                {
                    getAffectedElements: h,
                    getElementId: N,
                    getDestinationValues: U,
                    observeStore: L,
                    getInstanceId: C,
                    renderHTMLElement: M,
                    clearAllStyles: x,
                    getMaxDurationItemIndex: P,
                    getComputedStyle: G,
                    getInstanceOrigin: V,
                    reduceListToGroup: F,
                    shouldNamespaceEventParameter: w,
                    getNamespacedParameterId: D,
                    shouldAllowMediaQuery: X,
                    cleanupHTMLElement: k,
                    clearObjectCache: z,
                    stringifyTarget: H,
                    mediaQueriesEqual: B,
                    shallowEqual: j
                } = b.IX2VanillaUtils,
                {
                    isPluginType: Y,
                    createPluginInstance: W,
                    getPluginDuration: Q
                } = b.IX2VanillaPlugins,
                $ = navigator.userAgent,
                K = $.match(/iPad/i) || $.match(/iPhone/);

            function q(e) {
                L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: Z
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), L({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: en
                })
            }

            function Z({
                rawData: e,
                defer: t
            }, n) {
                let a = () => {
                    ea({
                        store: n,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(a, 0) : a()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: n,
                    actionListId: a,
                    actionItemId: i,
                    eventId: o,
                    allowEvents: r,
                    immediate: c,
                    testManual: d,
                    verbose: l = !0
                } = e, {
                    rawData: s
                } = e;
                if (a && i && s && c) {
                    let e = s.actionLists[a];
                    e && (s = F({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (ea({
                        store: t,
                        rawData: s,
                        allowEvents: r,
                        testManual: d
                    }), a && n === g.ActionTypeConsts.GENERAL_START_ACTION || m(n)) {
                    eg({
                        store: t,
                        actionListId: a
                    }), eu({
                        store: t,
                        actionListId: a,
                        eventId: o
                    });
                    let e = eb({
                        store: t,
                        eventId: o,
                        actionListId: a,
                        immediate: c,
                        verbose: l
                    });
                    l && e && t.dispatch((0, p.actionListPlaybackChanged)({
                        actionListId: a,
                        isPlaying: !c
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? eg({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), ei(t)
            }

            function en(e, t) {
                ei(t), x({
                    store: t,
                    elementApi: E
                })
            }

            function ea({
                store: e,
                rawData: t,
                allowEvents: n,
                testManual: a
            }) {
                let {
                    ixSession: i
                } = e.getState();
                if (t && e.dispatch((0, p.rawDataImported)(t)), !i.active) {
                    (e.dispatch((0, p.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(_),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), n) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: n
                        } = t;
                        ec(e), (0, u.default)(n, (t, n) => {
                            let a = y.default[n];
                            if (!a) return void console.warn(`IX2 event type not configured: ${n}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: n
                            }) {
                                ! function(e) {
                                    if (!K) return;
                                    let t = {},
                                        n = "";
                                    for (let a in e) {
                                        let {
                                            eventTypeId: i,
                                            target: o
                                        } = e[a], r = E.getQuerySelector(o);
                                        t[r] || (i === g.EventTypeConsts.MOUSE_CLICK || i === g.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[r] = !0, n += r + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (n) {
                                        let e = document.createElement("style");
                                        e.textContent = n, document.body.appendChild(e)
                                    }
                                }(n);
                                let {
                                    types: a,
                                    handler: i
                                } = e, {
                                    ixData: d
                                } = t.getState(), {
                                    actionLists: l
                                } = d, s = ed(n, es);
                                if (!(0, c.default)(s)) return;
                                (0, u.default)(s, (e, a) => {
                                    let i = n[a],
                                        {
                                            action: c,
                                            id: s,
                                            mediaQueries: u = d.mediaQueryKeys
                                        } = i,
                                        {
                                            actionListId: f
                                        } = c.config;
                                    B(u, d.mediaQueryKeys) || t.dispatch((0, p.mediaQueriesDefined)()), c.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(n => {
                                        let {
                                            continuousParameterGroupId: a
                                        } = n, i = (0, r.default)(l, `${f}.continuousParameterGroups`, []), c = (0, o.default)(i, ({
                                            id: e
                                        }) => e === a), d = (n.smoothing || 0) / 100, u = (n.restingState || 0) / 100;
                                        c && e.forEach((e, a) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: n,
                                                eventId: a,
                                                eventConfig: i,
                                                actionListId: o,
                                                parameterGroup: c,
                                                smoothing: d,
                                                restingValue: l
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: u
                                                } = e.getState(), {
                                                    events: f
                                                } = s, b = f[a], {
                                                    eventTypeId: p
                                                } = b, y = {}, T = {}, I = [], {
                                                    continuousActionGroups: O
                                                } = c, {
                                                    id: m
                                                } = c;
                                                w(p, i) && (m = D(t, m));
                                                let v = u.hasBoundaryNodes && n ? E.getClosestElement(n, _) : null;
                                                O.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: a
                                                    } = e;
                                                    a.forEach(e => {
                                                        let {
                                                            actionTypeId: a
                                                        } = e, {
                                                            target: i
                                                        } = e.config;
                                                        if (!i) return;
                                                        let o = i.boundaryMode ? v : null,
                                                            r = H(i) + R + a;
                                                        if (T[r] = function(e = [], t, n) {
                                                                let a, i = [...e];
                                                                return i.some((e, n) => e.keyframe === t && (a = n, !0)), null == a && (a = i.length, i.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), i[a].actionItems.push(n), i
                                                            }(T[r], t, e), !y[r]) {
                                                            y[r] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            h({
                                                                config: t,
                                                                event: b,
                                                                eventTarget: n,
                                                                elementRoot: o,
                                                                elementApi: E
                                                            }).forEach(e => {
                                                                I.push({
                                                                    element: e,
                                                                    key: r
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), I.forEach(({
                                                    element: t,
                                                    key: n
                                                }) => {
                                                    let i = T[n],
                                                        c = (0, r.default)(i, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = c,
                                                        u = (s === g.ActionTypeConsts.PLUGIN_RIVE ? 0 === (c.config ? .target ? .selectorGuids || []).length : Y(s)) ? W(s) ? .(t, c) : null,
                                                        f = U({
                                                            element: t,
                                                            actionItem: c,
                                                            elementApi: E
                                                        }, u);
                                                    ep({
                                                        store: e,
                                                        element: t,
                                                        eventId: a,
                                                        actionListId: o,
                                                        actionItem: c,
                                                        destination: f,
                                                        continuous: !0,
                                                        parameterId: m,
                                                        actionGroups: i,
                                                        smoothing: d,
                                                        restingValue: l,
                                                        pluginInstance: u
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + R + a,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: n,
                                                actionListId: f,
                                                parameterGroup: c,
                                                smoothing: d,
                                                restingValue: u
                                            })
                                        })
                                    }), (c.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || m(c.actionTypeId)) && eu({
                                        store: t,
                                        actionListId: f,
                                        eventId: s
                                    })
                                });
                                let b = e => {
                                        let {
                                            ixSession: a
                                        } = t.getState();
                                        el(s, (o, r, c) => {
                                            let l = n[r],
                                                s = a.eventState[c],
                                                {
                                                    action: u,
                                                    mediaQueries: f = d.mediaQueryKeys
                                                } = l;
                                            if (!X(f, a.mediaQueryKey)) return;
                                            let b = (n = {}) => {
                                                let a = i({
                                                    store: t,
                                                    element: o,
                                                    event: l,
                                                    eventConfig: n,
                                                    nativeEvent: e,
                                                    eventStateKey: c
                                                }, s);
                                                j(a, s) || t.dispatch((0, p.eventStateChanged)(c, a))
                                            };
                                            u.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(l.config) ? l.config : [l.config]).forEach(b) : b()
                                        })
                                    },
                                    y = (0, f.default)(b, 12),
                                    T = ({
                                        target: e = document,
                                        types: n,
                                        throttle: a
                                    }) => {
                                        n.split(" ").filter(Boolean).forEach(n => {
                                            let i = a ? y : b;
                                            e.addEventListener(n, i), t.dispatch((0, p.eventListenerAdded)(e, [n, i]))
                                        })
                                    };
                                Array.isArray(a) ? a.forEach(T) : "string" == typeof a && T(e)
                            }({
                                logic: a,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: a
                        } = e.getState();
                        a.eventListeners.length && function(e) {
                            let t = () => {
                                ec(e)
                            };
                            er.forEach(n => {
                                window.addEventListener(n, t), e.dispatch((0, p.eventListenerAdded)(window, [n, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(S) && (e.className += ` ${S}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && L({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ei(e), x({
                                store: e,
                                elementApi: E
                            }), ea({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, p.sessionStarted)()),
                        function(e, t) {
                            let n = a => {
                                let {
                                    ixSession: i,
                                    ixParameters: o
                                } = e.getState();
                                if (i.active)
                                    if (e.dispatch((0, p.animationFrameChanged)(a, o)), t) {
                                        let t = L({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                n(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(n)
                            };
                            n(window.performance.now())
                        }(e, a)
                }
            }

            function ei(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: n
                    } = t;
                    n.forEach(eo), z(), e.dispatch((0, p.sessionStopped)())
                }
            }

            function eo({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let er = ["resize", "orientationchange"];

            function ec(e) {
                let {
                    ixSession: t,
                    ixData: n
                } = e.getState(), a = window.innerWidth;
                if (a !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = n;
                    e.dispatch((0, p.viewportWidthChanged)({
                        width: a,
                        mediaQueries: t
                    }))
                }
            }
            let ed = (e, t) => (0, d.default)((0, s.default)(e, t), l.default),
                el = (e, t) => {
                    (0, u.default)(e, (e, n) => {
                        e.forEach((e, a) => {
                            t(e, n, n + R + a)
                        })
                    })
                },
                es = e => h({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: E
                });

            function eu({
                store: e,
                actionListId: t,
                eventId: n
            }) {
                let {
                    ixData: a,
                    ixSession: i
                } = e.getState(), {
                    actionLists: o,
                    events: c
                } = a, d = c[n], l = o[t];
                if (l && l.useFirstGroupAsInitialState) {
                    let o = (0, r.default)(l, "actionItemGroups[0].actionItems", []);
                    if (!X((0, r.default)(d, "mediaQueries", a.mediaQueryKeys), i.mediaQueryKey)) return;
                    o.forEach(a => {
                        let {
                            config: i,
                            actionTypeId: o
                        } = a, r = h({
                            config: i ? .target ? .useEventTarget === !0 && i ? .target ? .objectId == null ? {
                                target: d.target,
                                targets: d.targets
                            } : i,
                            event: d,
                            elementApi: E
                        }), c = Y(o);
                        r.forEach(i => {
                            let r = c ? W(o) ? .(i, a) : null;
                            ep({
                                destination: U({
                                    element: i,
                                    actionItem: a,
                                    elementApi: E
                                }, r),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: n,
                                actionItem: a,
                                actionListId: t,
                                pluginInstance: r
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, u.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: n,
                            verbose: a
                        } = t;
                        eE(t, e), a && e.dispatch((0, p.actionListPlaybackChanged)({
                            actionListId: n,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eg({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i
            }) {
                let {
                    ixInstances: o,
                    ixSession: c
                } = e.getState(), d = c.hasBoundaryNodes && n ? E.getClosestElement(n, _) : null;
                (0, u.default)(o, n => {
                    let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
                        c = !a || n.eventStateKey === a;
                    if (n.actionListId === i && n.eventId === t && c) {
                        if (d && o && !E.elementContains(d, n.element)) return;
                        eE(n, e), n.verbose && e.dispatch((0, p.actionListPlaybackChanged)({
                            actionListId: i,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eb({
                store: e,
                eventId: t,
                eventTarget: n,
                eventStateKey: a,
                actionListId: i,
                groupIndex: o = 0,
                immediate: c,
                verbose: d
            }) {
                let {
                    ixData: l,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = l, f = u[t] || {}, {
                    mediaQueries: g = l.mediaQueryKeys
                } = f, {
                    actionItemGroups: b,
                    useFirstGroupAsInitialState: p
                } = (0, r.default)(l, `actionLists.${i}`, {});
                if (!b || !b.length) return !1;
                o >= b.length && (0, r.default)(f, "config.loop") && (o = 0), 0 === o && p && o++;
                let y = (0 === o || 1 === o && p) && m(f.action ? .actionTypeId) ? f.config.delay : void 0,
                    T = (0, r.default)(b, [o, "actionItems"], []);
                if (!T.length || !X(g, s.mediaQueryKey)) return !1;
                let I = s.hasBoundaryNodes && n ? E.getClosestElement(n, _) : null,
                    O = P(T),
                    R = !1;
                return T.forEach((r, l) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = r, g = Y(u), {
                        target: b
                    } = s;
                    b && h({
                        config: s,
                        event: f,
                        eventTarget: n,
                        elementRoot: b.boundaryMode ? I : null,
                        elementApi: E
                    }).forEach((s, f) => {
                        let b = g ? W(u) ? .(s, r) : null,
                            p = g ? Q(u)(s, r) : null;
                        R = !0;
                        let T = G({
                                element: s,
                                actionItem: r
                            }),
                            I = U({
                                element: s,
                                actionItem: r,
                                elementApi: E
                            }, b);
                        ep({
                            store: e,
                            element: s,
                            actionItem: r,
                            eventId: t,
                            eventTarget: n,
                            eventStateKey: a,
                            actionListId: i,
                            groupIndex: o,
                            isCarrier: O === l && 0 === f,
                            computedStyle: T,
                            destination: I,
                            immediate: c,
                            verbose: d,
                            pluginInstance: b,
                            pluginDuration: p,
                            instanceDelay: y
                        })
                    })
                }), R
            }

            function ep(e) {
                let t, {
                        store: n,
                        computedStyle: a,
                        ...i
                    } = e,
                    {
                        element: o,
                        actionItem: r,
                        immediate: c,
                        pluginInstance: d,
                        continuous: l,
                        restingValue: s,
                        eventId: u
                    } = i,
                    f = C(),
                    {
                        ixElements: b,
                        ixSession: y,
                        ixData: T
                    } = n.getState(),
                    I = N(b, o),
                    {
                        refState: O
                    } = b[I] || {},
                    m = E.getRefType(o),
                    R = y.reducedMotion && g.ReducedMotionTypes[r.actionTypeId];
                if (R && l) switch (T.events[u] ? .eventTypeId) {
                    case g.EventTypeConsts.MOUSE_MOVE:
                    case g.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let _ = V(o, O, a, r, E, d);
                if (n.dispatch((0, p.instanceAdded)({
                        instanceId: f,
                        elementId: I,
                        origin: _,
                        refType: m,
                        skipMotion: R,
                        skipToValue: t,
                        ...i
                    })), ey(document.body, "ix2-animation-started", f), c) return void
                function(e, t) {
                    let {
                        ixParameters: n
                    } = e.getState();
                    e.dispatch((0, p.instanceStarted)(t, 0)), e.dispatch((0, p.animationFrameChanged)(performance.now(), n));
                    let {
                        ixInstances: a
                    } = e.getState();
                    eT(a[t], e)
                }(n, f);
                L({
                    store: n,
                    select: ({
                        ixInstances: e
                    }) => e[f],
                    onChange: eT
                }), l || n.dispatch((0, p.instanceStarted)(f, y.tick))
            }

            function eE(e, t) {
                ey(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: n,
                    actionItem: a
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: o,
                    refType: r
                } = i[n] || {};
                r === v && k(o, a, E), t.dispatch((0, p.instanceRemoved)(e.id))
            }

            function ey(e, t, n) {
                let a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a)
            }

            function eT(e, t) {
                let {
                    active: n,
                    continuous: a,
                    complete: i,
                    elementId: o,
                    actionItem: r,
                    actionTypeId: c,
                    renderType: d,
                    current: l,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: g,
                    actionListId: b,
                    isCarrier: y,
                    styleProp: T,
                    verbose: I,
                    pluginInstance: O
                } = e, {
                    ixData: m,
                    ixSession: R
                } = t.getState(), {
                    events: _
                } = m, {
                    mediaQueries: S = m.mediaQueryKeys
                } = _ && _[u] ? _[u] : {};
                if (X(S, R.mediaQueryKey) && (a || n || i)) {
                    if (l || d === A && i) {
                        t.dispatch((0, p.elementStateChanged)(o, c, l, r));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: n,
                            refType: a,
                            refState: i
                        } = e[o] || {}, s = i && i[c];
                        (a === v || Y(c)) && M(n, i, s, u, r, T, E, d, O)
                    }
                    if (i) {
                        if (y) {
                            let e = eb({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: g,
                                actionListId: b,
                                groupIndex: s + 1,
                                verbose: I
                            });
                            I && !e && t.dispatch((0, p.actionListPlaybackChanged)({
                                actionListId: b,
                                isPlaying: !1
                            }))
                        }
                        eE(e, t)
                    }
                }
            }
        },
        8955: function(e, t, n) {
            "use strict";
            let a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return eg
                }
            });
            let i = u(n(5801)),
                o = u(n(4738)),
                r = u(n(3789)),
                c = n(7087),
                d = n(1970),
                l = n(3946),
                s = n(9468);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: f,
                MOUSE_SECOND_CLICK: g,
                MOUSE_DOWN: b,
                MOUSE_UP: p,
                MOUSE_OVER: E,
                MOUSE_OUT: y,
                DROPDOWN_CLOSE: T,
                DROPDOWN_OPEN: I,
                SLIDER_ACTIVE: O,
                SLIDER_INACTIVE: m,
                TAB_ACTIVE: R,
                TAB_INACTIVE: _,
                NAVBAR_CLOSE: v,
                NAVBAR_OPEN: A,
                MOUSE_MOVE: S,
                PAGE_SCROLL_DOWN: h,
                SCROLL_INTO_VIEW: N,
                SCROLL_OUT_OF_VIEW: U,
                PAGE_SCROLL_UP: L,
                SCROLLING_IN_VIEW: C,
                PAGE_FINISH: M,
                ECOMMERCE_CART_CLOSE: x,
                ECOMMERCE_CART_OPEN: P,
                PAGE_START: G,
                PAGE_SCROLL: V
            } = c.EventTypeConsts, F = "COMPONENT_ACTIVE", w = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: D
            } = c.IX2EngineConstants, {
                getNamespacedParameterId: X
            } = s.IX2VanillaUtils, k = e => t => !!("object" == typeof t && e(t)) || t, z = k(({
                element: e,
                nativeEvent: t
            }) => e === t.target), H = k(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), B = (0, i.default)([z, H]), j = (e, t) => {
                if (t) {
                    let {
                        ixData: n
                    } = e.getState(), {
                        events: a
                    } = n, i = a[t];
                    if (i && !ee[i.eventTypeId]) return i
                }
                return null
            }, Y = ({
                store: e,
                event: t
            }) => {
                let {
                    action: n
                } = t, {
                    autoStopEventId: a
                } = n.config;
                return !!j(e, a)
            }, W = ({
                store: e,
                event: t,
                element: n,
                eventStateKey: a
            }, i) => {
                let {
                    action: r,
                    id: c
                } = t, {
                    actionListId: l,
                    autoStopEventId: s
                } = r.config, u = j(e, s);
                return u && (0, d.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: n,
                    eventStateKey: s + D + a.split(D)[1],
                    actionListId: (0, o.default)(u, "action.config.actionListId")
                }), (0, d.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: l
                }), (0, d.startActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: l
                }), i
            }, Q = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a, $ = {
                handler: Q(B, W)
            }, K = { ...$,
                types: [F, w].join(" ")
            }, q = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Z = "mouseover mouseout", J = {
                types: q
            }, ee = {
                PAGE_START: G,
                PAGE_FINISH: M
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, r.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), en = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), ea = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: n,
                    target: a,
                    relatedTarget: i
                } = t, o = e.contains(a);
                if ("mouseover" === n && o) return !0;
                let r = e.contains(i);
                return "mouseout" === n && !!o && !!r
            }, ei = e => {
                let {
                    element: t,
                    event: {
                        config: n
                    }
                } = e, {
                    clientWidth: a,
                    clientHeight: i
                } = et(), o = n.scrollOffsetValue, r = "PX" === n.scrollOffsetUnit ? o : i * (o || 0) / 100;
                return en(t.getBoundingClientRect(), {
                    left: 0,
                    top: r,
                    right: a,
                    bottom: i - r
                })
            }, eo = e => (t, n) => {
                let {
                    type: a
                } = t.nativeEvent, i = -1 !== [F, w].indexOf(a) ? a === F : n.isActive, o = { ...n,
                    isActive: i
                };
                return (!n || o.isActive !== n.isActive) && e(t, o) || o
            }, er = e => (t, n) => {
                let a = {
                    elementHovered: ea(t)
                };
                return (n ? a.elementHovered !== n.elementHovered : a.elementHovered) && e(t, a) || a
            }, ec = e => (t, n = {}) => {
                let a, i, {
                        stiffScrollTop: o,
                        scrollHeight: r,
                        innerHeight: c
                    } = et(),
                    {
                        event: {
                            config: d,
                            eventTypeId: l
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: u
                    } = d,
                    f = r - c,
                    g = Number((o / f).toFixed(2));
                if (n && n.percentTop === g) return n;
                let b = ("PX" === u ? s : c * (s || 0) / 100) / f,
                    p = 0;
                n && (a = g > n.percentTop, p = (i = n.scrollingDown !== a) ? g : n.anchorTop);
                let E = l === h ? g >= p + b : g <= p - b,
                    y = { ...n,
                        percentTop: g,
                        inBounds: E,
                        anchorTop: p,
                        scrollingDown: a
                    };
                return n && E && (i || y.inBounds !== n.inBounds) && e(t, y) || y
            }, ed = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, el = e => (t, n = {
                clickCount: 0
            }) => {
                let a = {
                    clickCount: n.clickCount % 2 + 1
                };
                return a.clickCount !== n.clickCount && e(t, a) || a
            }, es = (e = !0) => ({ ...K,
                handler: Q(e ? B : z, eo((e, t) => t.isActive ? $.handler(e, t) : t))
            }), eu = (e = !0) => ({ ...K,
                handler: Q(e ? B : z, eo((e, t) => t.isActive ? t : $.handler(e, t)))
            }), ef = { ...J,
                handler: (a = (e, t) => {
                    let {
                        elementVisible: n
                    } = t, {
                        event: a,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: r
                    } = o;
                    return !r[a.action.config.autoStopEventId] && t.triggered ? t : a.eventTypeId === N === n ? (W(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let n = { ...t,
                        elementVisible: ei(e)
                    };
                    return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && a(e, n) || n
                })
            }, eg = {
                [O]: es(),
                [m]: eu(),
                [I]: es(),
                [T]: eu(),
                [A]: es(!1),
                [v]: eu(!1),
                [R]: es(),
                [_]: eu(),
                [P]: {
                    types: "ecommerce-cart-open",
                    handler: Q(B, W)
                },
                [x]: {
                    types: "ecommerce-cart-close",
                    handler: Q(B, W)
                },
                [f]: {
                    types: "click",
                    handler: Q(B, el((e, {
                        clickCount: t
                    }) => {
                        Y(e) ? 1 === t && W(e) : W(e)
                    }))
                },
                [g]: {
                    types: "click",
                    handler: Q(B, el((e, {
                        clickCount: t
                    }) => {
                        2 === t && W(e)
                    }))
                },
                [b]: { ...$,
                    types: "mousedown"
                },
                [p]: { ...$,
                    types: "mouseup"
                },
                [E]: {
                    types: Z,
                    handler: Q(B, er((e, t) => {
                        t.elementHovered && W(e)
                    }))
                },
                [y]: {
                    types: Z,
                    handler: Q(B, er((e, t) => {
                        t.elementHovered || W(e)
                    }))
                },
                [S]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: n,
                        nativeEvent: a,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: r,
                            selectedAxis: d,
                            continuousParameterGroupId: s,
                            reverse: u,
                            restingState: f = 0
                        } = n, {
                            clientX: g = o.clientX,
                            clientY: b = o.clientY,
                            pageX: p = o.pageX,
                            pageY: E = o.pageY
                        } = a, y = "X_AXIS" === d, T = "mouseout" === a.type, I = f / 100, O = s, m = !1;
                        switch (r) {
                            case c.EventBasedOn.VIEWPORT:
                                I = y ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(b, window.innerHeight) / window.innerHeight;
                                break;
                            case c.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: n,
                                        scrollHeight: a
                                    } = et();I = y ? Math.min(e + p, n) / n : Math.min(t + E, a) / a;
                                    break
                                }
                            case c.EventBasedOn.ELEMENT:
                            default:
                                {
                                    O = X(i, s);
                                    let e = 0 === a.type.indexOf("mouse");
                                    if (e && !0 !== B({
                                            element: t,
                                            nativeEvent: a
                                        })) break;
                                    let n = t.getBoundingClientRect(),
                                        {
                                            left: o,
                                            top: r,
                                            width: c,
                                            height: d
                                        } = n;
                                    if (!e && !ed({
                                            left: g,
                                            top: b
                                        }, n)) break;m = !0,
                                    I = y ? (g - o) / c : (b - r) / d
                                }
                        }
                        return T && (I > .95 || I < .05) && (I = Math.round(I)), (r !== c.EventBasedOn.ELEMENT || m || m !== o.elementHovered) && (I = u ? 1 - I : I, e.dispatch((0, l.parameterChanged)(O, I))), {
                            elementHovered: m,
                            clientX: g,
                            clientY: b,
                            pageX: p,
                            pageY: E
                        }
                    }
                },
                [V]: {
                    types: q,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: n,
                            reverse: a
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: r
                        } = et(), c = i / (o - r);
                        c = a ? 1 - c : c, e.dispatch((0, l.parameterChanged)(n, c))
                    }
                },
                [C]: {
                    types: q,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: n,
                        eventStateKey: a
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: r,
                            scrollWidth: d,
                            scrollHeight: s,
                            clientHeight: u
                        } = et(), {
                            basedOn: f,
                            selectedAxis: g,
                            continuousParameterGroupId: b,
                            startsEntering: p,
                            startsExiting: E,
                            addEndOffset: y,
                            addStartOffset: T,
                            addOffsetValue: I = 0,
                            endOffsetValue: O = 0
                        } = n;
                        if (f === c.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === g ? o / d : r / s;
                            return e !== i.scrollPercent && t.dispatch((0, l.parameterChanged)(b, e)), {
                                scrollPercent: e
                            }
                        } {
                            let n = X(a, b),
                                o = e.getBoundingClientRect(),
                                r = (T ? I : 0) / 100,
                                c = (y ? O : 0) / 100;
                            r = p ? r : 1 - r, c = E ? c : 1 - c;
                            let d = o.top + Math.min(o.height * r, u),
                                f = Math.min(u + (o.top + o.height * c - d), s),
                                g = Math.min(Math.max(0, u - d), f) / f;
                            return g !== i.scrollPercent && t.dispatch((0, l.parameterChanged)(n, g)), {
                                scrollPercent: g
                            }
                        }
                    }
                },
                [N]: ef,
                [U]: ef,
                [h]: { ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown && W(e)
                    })
                },
                [L]: { ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown || W(e)
                    })
                },
                [M]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Q(z, (e, t) => {
                        let n = {
                            finished: "complete" === document.readyState
                        };
                        return n.finished && !(t && t.finshed) && W(e), n
                    })
                },
                [G]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: Q(z, (e, t) => (t || W(e), {
                        started: !0
                    }))
                }
            }
        },
        4609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a
            } = n(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === a ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return m
                }
            });
            let a = n(7087),
                i = n(9468),
                o = n(1185),
                {
                    IX2_RAW_DATA_IMPORTED: r,
                    IX2_SESSION_STOPPED: c,
                    IX2_INSTANCE_ADDED: d,
                    IX2_INSTANCE_STARTED: l,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = a.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: g,
                    createBezierEasing: b
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: p
                } = a.IX2EngineConstants,
                {
                    getItemConfigByKey: E,
                    getRenderType: y,
                    getStyleProp: T
                } = i.IX2VanillaUtils,
                I = (e, t) => {
                    let n, a, i, r, {
                            position: c,
                            parameterId: d,
                            actionGroups: l,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: b,
                            actionTypeId: p,
                            customEasingFn: y,
                            skipMotion: T,
                            skipToValue: I
                        } = e,
                        {
                            parameters: O
                        } = t.payload,
                        m = Math.max(1 - u, .01),
                        R = O[d];
                    null == R && (m = 1, R = b);
                    let _ = f((Math.max(R, 0) || 0) - c),
                        v = T ? I : f(c + _ * m),
                        A = 100 * v;
                    if (v === c && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = l; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = l[e];
                        if (0 === e && (n = o[0]), A >= t) {
                            n = o[0];
                            let c = l[e + 1],
                                d = c && A !== t;
                            a = d ? c.actionItems[0] : null, d && (i = t / 100, r = (c.keyframe - t) / 100)
                        }
                    }
                    let S = {};
                    if (n && !a)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            S[t] = E(p, t, n.config)
                        } else if (n && a && void 0 !== i && void 0 !== r) {
                            let e = (v - i) / r,
                                t = g(n.config.easing, e, y);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    o = E(p, i, n.config),
                                    r = (E(p, i, a.config) - o) * t + o;
                                S[i] = r
                            }
                        }
                    return (0, o.merge)(e, {
                        position: v,
                        current: S
                    })
                },
                O = (e, t) => {
                    let {
                        active: n,
                        origin: a,
                        start: i,
                        immediate: r,
                        renderType: c,
                        verbose: d,
                        actionItem: l,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: b,
                        instanceDelay: E,
                        customEasingFn: y,
                        skipMotion: T
                    } = e, I = l.config.easing, {
                        duration: O,
                        delay: m
                    } = l.config;
                    null != b && (O = b), m = null != E ? E : m, c === p ? O = 0 : (r || T) && (O = m = 0);
                    let {
                        now: R
                    } = t.payload;
                    if (n && a) {
                        let t = R - (i + m);
                        if (d) {
                            let t = O + m,
                                n = f(Math.min(Math.max(0, (R - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * n)
                        }
                        if (t < 0) return e;
                        let n = f(Math.min(Math.max(0, t / O), 1)),
                            r = g(I, n, y),
                            c = {},
                            l = null;
                        return u.length && (l = u.reduce((e, t) => {
                            let n = s[t],
                                i = parseFloat(a[t]) || 0,
                                o = parseFloat(n) - i;
                            return e[t] = o * r + i, e
                        }, {})), c.current = l, c.position = n, 1 === n && (c.active = !1, c.complete = !0), (0, o.merge)(e, c)
                    }
                    return e
                },
                m = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case r:
                            return t.payload.ixInstances || Object.freeze({});
                        case c:
                            return Object.freeze({});
                        case d:
                            {
                                let {
                                    instanceId: n,
                                    elementId: a,
                                    actionItem: i,
                                    eventId: r,
                                    eventTarget: c,
                                    eventStateKey: d,
                                    actionListId: l,
                                    groupIndex: s,
                                    isCarrier: u,
                                    origin: f,
                                    destination: g,
                                    immediate: p,
                                    verbose: E,
                                    continuous: I,
                                    parameterId: O,
                                    actionGroups: m,
                                    smoothing: R,
                                    restingValue: _,
                                    pluginInstance: v,
                                    pluginDuration: A,
                                    instanceDelay: S,
                                    skipMotion: h,
                                    skipToValue: N
                                } = t.payload,
                                {
                                    actionTypeId: U
                                } = i,
                                L = y(U),
                                C = T(L, U),
                                M = Object.keys(g).filter(e => null != g[e] && "string" != typeof g[e]),
                                {
                                    easing: x
                                } = i.config;
                                return (0, o.set)(e, n, {
                                    id: n,
                                    elementId: a,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: f,
                                    destination: g,
                                    destinationKeys: M,
                                    immediate: p,
                                    verbose: E,
                                    current: null,
                                    actionItem: i,
                                    actionTypeId: U,
                                    eventId: r,
                                    eventTarget: c,
                                    eventStateKey: d,
                                    actionListId: l,
                                    groupIndex: s,
                                    renderType: L,
                                    isCarrier: u,
                                    styleProp: C,
                                    continuous: I,
                                    parameterId: O,
                                    actionGroups: m,
                                    smoothing: R,
                                    restingValue: _,
                                    pluginInstance: v,
                                    pluginDuration: A,
                                    instanceDelay: S,
                                    skipMotion: h,
                                    skipToValue: N,
                                    customEasingFn: Array.isArray(x) && 4 === x.length ? b(x) : void 0
                                })
                            }
                        case l:
                            {
                                let {
                                    instanceId: n,
                                    time: a
                                } = t.payload;
                                return (0, o.mergeIn)(e, [n], {
                                    active: !0,
                                    complete: !1,
                                    start: a
                                })
                            }
                        case s:
                            {
                                let {
                                    instanceId: n
                                } = t.payload;
                                if (!e[n]) return e;
                                let a = {},
                                    i = Object.keys(e),
                                    {
                                        length: o
                                    } = i;
                                for (let t = 0; t < o; t++) {
                                    let o = i[t];
                                    o !== n && (a[o] = e[o])
                                }
                                return a
                            }
                        case u:
                            {
                                let n = e,
                                    a = Object.keys(e),
                                    {
                                        length: i
                                    } = a;
                                for (let r = 0; r < i; r++) {
                                    let i = a[r],
                                        c = e[i],
                                        d = c.continuous ? I : O;
                                    n = (0, o.set)(n, i, d(c, t))
                                }
                                return n
                            }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: a,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: o
            } = n(7087).IX2EngineActionTypes, r = (e = {}, t) => {
                switch (t.type) {
                    case a:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case o:
                        {
                            let {
                                key: n,
                                value: a
                            } = t.payload;
                            return e[n] = a,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(9516),
                i = n(4609),
                o = n(628),
                r = n(5862),
                c = n(9468),
                d = n(7718),
                l = n(1540),
                {
                    ixElements: s
                } = c.IX2ElementsReducer,
                u = (0, a.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: r.ixSession,
                    ixElements: s,
                    ixInstances: d.ixInstances,
                    ixParameters: l.ixParameters
                })
        },
        628: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: r,
                    IX2_STOP_REQUESTED: c,
                    IX2_CLEAR_REQUESTED: d
                } = a.IX2EngineActionTypes,
                l = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [r]: {
                        value: "playback"
                    },
                    [c]: {
                        value: "stop"
                    },
                    [d]: {
                        value: "clear"
                    }
                }),
                u = (e = l, t) => {
                    if (t.type in s) {
                        let n = [s[t.type]];
                        return (0, i.setIn)(e, [n], { ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return E
                }
            });
            let a = n(7087),
                i = n(1185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: r,
                    IX2_TEST_FRAME_RENDERED: c,
                    IX2_SESSION_STOPPED: d,
                    IX2_EVENT_LISTENER_ADDED: l,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: g,
                    IX2_MEDIA_QUERIES_DEFINED: b
                } = a.IX2EngineActionTypes,
                p = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                E = (e = p, t) => {
                    switch (t.type) {
                        case o:
                            {
                                let {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                } = t.payload;
                                return (0, i.merge)(e, {
                                    hasBoundaryNodes: n,
                                    reducedMotion: a
                                })
                            }
                        case r:
                            return (0, i.set)(e, "active", !0);
                        case c:
                            {
                                let {
                                    payload: {
                                        step: n = 20
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", e.tick + n)
                            }
                        case d:
                            return p;
                        case u:
                            {
                                let {
                                    payload: {
                                        now: n
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", n)
                            }
                        case l:
                            {
                                let n = (0, i.addLast)(e.eventListeners, t.payload);
                                return (0, i.set)(e, "eventListeners", n)
                            }
                        case s:
                            {
                                let {
                                    stateKey: n,
                                    newState: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["eventState", n], a)
                            }
                        case f:
                            {
                                let {
                                    actionListId: n,
                                    isPlaying: a
                                } = t.payload;
                                return (0, i.setIn)(e, ["playbackState", n], a)
                            }
                        case g:
                            {
                                let {
                                    width: n,
                                    mediaQueries: a
                                } = t.payload,
                                o = a.length,
                                r = null;
                                for (let e = 0; e < o; e++) {
                                    let {
                                        key: t,
                                        min: i,
                                        max: o
                                    } = a[e];
                                    if (n >= i && n <= o) {
                                        r = t;
                                        break
                                    }
                                }
                                return (0, i.merge)(e, {
                                    viewportWidth: n,
                                    mediaQueryKey: r
                                })
                            }
                        case b:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return d
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return r
                },
                renderPlugin: function() {
                    return l
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = e => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let n = parseFloat(e.getAttribute("data-duration"));
                    return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                r = e => e || {
                    value: 0
                },
                c = e => ({
                    value: e.value
                }),
                d = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let n = t.createInstance(e);
                    return n.stop(), n.setSubframe(!0), n
                },
                l = (e, t, n) => {
                    if (!e) return;
                    let a = t[n.actionTypeId].value / 100;
                    e.goToFrame(e.frames * a)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return b
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return g
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                r = e => document.querySelector(`[data-w-id="${e}"]`),
                c = () => window.Webflow.require("rive"),
                d = (e, t) => e.value.inputs[t],
                l = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let n = {},
                        {
                            inputs: a = {}
                        } = t.config.value;
                    for (let e in a) null == a[e] && (n[e] = 0);
                    return n
                },
                u = e => e.value.inputs ? ? {},
                f = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? r(n) : null
                },
                g = (e, {
                    PLUGIN_RIVE: t
                }, n) => {
                    let a = c();
                    if (!a) return;
                    let r = a.getInstance(e),
                        d = a.rive.StateMachineInputType,
                        {
                            name: l,
                            inputs: s = {}
                        } = n.config.value || {};

                    function u(e) {
                        if (e.loaded) n();
                        else {
                            let t = () => {
                                n(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function n() {
                            let n = e.stateMachineInputs(l);
                            if (null != n) {
                                if (e.isPlaying || e.play(l, !1), i in s || o in s) {
                                    let t = e.layout,
                                        n = s[i] ? ? t.fit,
                                        a = s[o] ? ? t.alignment;
                                    (n !== t.fit || a !== t.alignment) && (e.layout = t.copyWith({
                                        fit: n,
                                        alignment: a
                                    }))
                                }
                                for (let e in s) {
                                    if (e === i || e === o) continue;
                                    let a = n.find(t => t.name === e);
                                    if (null != a) switch (a.type) {
                                        case d.Boolean:
                                            null != s[e] && (a.value = !!s[e]);
                                            break;
                                        case d.Number:
                                            {
                                                let n = t[e];null != n && (a.value = n);
                                                break
                                            }
                                        case d.Trigger:
                                            s[e] && a.fire()
                                    }
                                }
                            }
                        }
                    }
                    r ? .rive ? u(r.rive) : a.setLoadHandler(e, u)
                },
                b = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return b
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return g
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                r = (e, t) => e.filter(e => !t.includes(e)),
                c = (e, t) => e.value[t],
                d = () => null,
                l = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let n = Object.keys(t.config.value);
                    if (e) {
                        let t = r(n, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = l[t], e), e) : e
                    }
                    return n.reduce((e, t) => (e[t] = l[t], e), {})
                },
                u = e => e.value,
                f = (e, t) => {
                    let n = t ? .config ? .target ? .pluginElement;
                    return n ? i(n) : null
                },
                g = (e, t, n) => {
                    let a = o();
                    if (!a) return;
                    let i = a.getInstance(e),
                        r = n.config.target.objectId,
                        c = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let n = r && e.findObjectById(r);
                            if (!n) return;
                            let {
                                PLUGIN_SPLINE: a
                            } = t;
                            null != a.positionX && (n.position.x = a.positionX), null != a.positionY && (n.position.y = a.positionY), null != a.positionZ && (n.position.z = a.positionZ), null != a.rotationX && (n.rotation.x = a.rotationX), null != a.rotationY && (n.rotation.y = a.rotationY), null != a.rotationZ && (n.rotation.z = a.rotationZ), null != a.scaleX && (n.scale.x = a.scaleX), null != a.scaleY && (n.scale.y = a.scaleY), null != a.scaleZ && (n.scale.z = a.scaleZ)
                        };
                    i ? c(i.spline) : a.setLoadHandler(e, c)
                },
                b = () => null
        },
        1407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return g
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return l
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return d
                },
                renderPlugin: function() {
                    return f
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(380),
                r = (e, t) => e.value[t],
                c = () => null,
                d = (e, t) => {
                    if (e) return e;
                    let n = t.config.value,
                        a = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(a);
                    return null != n.size ? {
                        size: parseInt(i, 10)
                    } : "%" === n.unit || "-" === n.unit ? {
                        size: parseFloat(i)
                    } : null != n.red && null != n.green && null != n.blue ? (0, o.normalizeColor)(i) : void 0
                },
                l = e => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => [e, t, n, a].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: n,
                            alpha: a
                        }) => `rgba(${e}, ${t}, ${n}, ${a})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                f = (e, t, n) => {
                    let {
                        target: {
                            objectId: a
                        },
                        value: {
                            unit: i
                        }
                    } = n.config, o = t.PLUGIN_VARIABLE, r = Object.values(u).find(e => e.match(o, i));
                    r && document.documentElement.style.setProperty(a, r.getValue(o, i))
                },
                g = (e, t) => {
                    let n = t.config.target.objectId;
                    document.documentElement.style.removeProperty(n)
                }
        },
        3690: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(7087),
                i = l(n(7377)),
                o = l(n(2866)),
                r = l(n(2570)),
                c = l(n(1407));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = d(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            let s = new Map([
                [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i
                }],
                [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o
                }],
                [a.ActionTypeConsts.PLUGIN_RIVE, { ...r
                }],
                [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return O
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return b
                },
                IX2_CLEAR_REQUESTED: function() {
                    return u
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return I
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return g
                },
                IX2_INSTANCE_ADDED: function() {
                    return E
                },
                IX2_INSTANCE_REMOVED: function() {
                    return T
                },
                IX2_INSTANCE_STARTED: function() {
                    return y
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return R
                },
                IX2_PARAMETER_CHANGED: function() {
                    return p
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return l
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return d
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return i
                },
                IX2_SESSION_INITIALIZED: function() {
                    return o
                },
                IX2_SESSION_STARTED: function() {
                    return r
                },
                IX2_SESSION_STOPPED: function() {
                    return c
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return _
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return m
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                r = "IX2_SESSION_STARTED",
                c = "IX2_SESSION_STOPPED",
                d = "IX2_PREVIEW_REQUESTED",
                l = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                g = "IX2_EVENT_STATE_CHANGED",
                b = "IX2_ANIMATION_FRAME_CHANGED",
                p = "IX2_PARAMETER_CHANGED",
                E = "IX2_INSTANCE_ADDED",
                y = "IX2_INSTANCE_STARTED",
                T = "IX2_INSTANCE_REMOVED",
                I = "IX2_ELEMENT_STATE_CHANGED",
                O = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                m = "IX2_VIEWPORT_WIDTH_CHANGED",
                R = "IX2_MEDIA_QUERIES_DEFINED",
                _ = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return B
                },
                BACKGROUND: function() {
                    return w
                },
                BACKGROUND_COLOR: function() {
                    return F
                },
                BAR_DELIMITER: function() {
                    return W
                },
                BORDER_COLOR: function() {
                    return D
                },
                BOUNDARY_SELECTOR: function() {
                    return d
                },
                CHILDREN: function() {
                    return Q
                },
                COLON_DELIMITER: function() {
                    return Y
                },
                COLOR: function() {
                    return X
                },
                COMMA_DELIMITER: function() {
                    return j
                },
                CONFIG_UNIT: function() {
                    return E
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return g
                },
                CONFIG_X_VALUE: function() {
                    return l
                },
                CONFIG_Y_UNIT: function() {
                    return b
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return p
                },
                CONFIG_Z_VALUE: function() {
                    return u
                },
                DISPLAY: function() {
                    return k
                },
                FILTER: function() {
                    return x
                },
                FLEX: function() {
                    return z
                },
                FONT_VARIATION_SETTINGS: function() {
                    return P
                },
                HEIGHT: function() {
                    return V
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return $
                },
                IX2_ID_DELIMITER: function() {
                    return i
                },
                OPACITY: function() {
                    return M
                },
                PARENT: function() {
                    return q
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return Z
                },
                RENDER_GENERAL: function() {
                    return ea
                },
                RENDER_PLUGIN: function() {
                    return eo
                },
                RENDER_STYLE: function() {
                    return ei
                },
                RENDER_TRANSFORM: function() {
                    return en
                },
                ROTATE_X: function() {
                    return S
                },
                ROTATE_Y: function() {
                    return h
                },
                ROTATE_Z: function() {
                    return N
                },
                SCALE_3D: function() {
                    return A
                },
                SCALE_X: function() {
                    return R
                },
                SCALE_Y: function() {
                    return _
                },
                SCALE_Z: function() {
                    return v
                },
                SIBLINGS: function() {
                    return K
                },
                SKEW: function() {
                    return U
                },
                SKEW_X: function() {
                    return L
                },
                SKEW_Y: function() {
                    return C
                },
                TRANSFORM: function() {
                    return y
                },
                TRANSLATE_3D: function() {
                    return m
                },
                TRANSLATE_X: function() {
                    return T
                },
                TRANSLATE_Y: function() {
                    return I
                },
                TRANSLATE_Z: function() {
                    return O
                },
                WF_PAGE: function() {
                    return o
                },
                WIDTH: function() {
                    return G
                },
                WILL_CHANGE: function() {
                    return H
                },
                W_MOD_IX: function() {
                    return c
                },
                W_MOD_JS: function() {
                    return r
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = "|",
                o = "data-wf-page",
                r = "w-mod-js",
                c = "w-mod-ix",
                d = ".w-dyn-item",
                l = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                g = "xUnit",
                b = "yUnit",
                p = "zUnit",
                E = "unit",
                y = "transform",
                T = "translateX",
                I = "translateY",
                O = "translateZ",
                m = "translate3d",
                R = "scaleX",
                _ = "scaleY",
                v = "scaleZ",
                A = "scale3d",
                S = "rotateX",
                h = "rotateY",
                N = "rotateZ",
                U = "skew",
                L = "skewX",
                C = "skewY",
                M = "opacity",
                x = "filter",
                P = "font-variation-settings",
                G = "width",
                V = "height",
                F = "backgroundColor",
                w = "background",
                D = "borderColor",
                X = "color",
                k = "display",
                z = "flex",
                H = "willChange",
                B = "AUTO",
                j = ",",
                Y = ":",
                W = "|",
                Q = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                K = "SIBLINGS",
                q = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                en = "RENDER_TRANSFORM",
                ea = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                eo = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionAppliesTo: function() {
                    return o
                },
                ActionTypeConsts: function() {
                    return i
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ActionTypeConsts: function() {
                    return r.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return c
                },
                IX2EngineConstants: function() {
                    return d
                },
                QuickEffectIds: function() {
                    return o.QuickEffectIds
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = l(n(1833), t),
                r = l(n(262), t);
            l(n(8704), t), l(n(3213), t);
            let c = u(n(8023)),
                d = u(n(2686));

            function l(e, t) {
                return Object.keys(e).forEach(function(n) {
                    "default" === n || Object.prototype.hasOwnProperty.call(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: function() {
                            return e[n]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (s = function(e) {
                    return e ? n : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = s(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        3213: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: a,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: r,
                STYLE_SIZE: c,
                STYLE_FILTER: d,
                STYLE_FONT_VARIATION: l
            } = n(262).ActionTypeConsts, s = {
                [a]: !0,
                [i]: !0,
                [o]: !0,
                [r]: !0,
                [c]: !0,
                [d]: !0,
                [l]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                EventAppliesTo: function() {
                    return o
                },
                EventBasedOn: function() {
                    return r
                },
                EventContinuousMouseAxes: function() {
                    return c
                },
                EventLimitAffectedElements: function() {
                    return d
                },
                EventTypeConsts: function() {
                    return i
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return l
                }
            };
            for (var a in n) Object.defineProperty(t, a, {
                enumerable: !0,
                get: n[a]
            });
            let i = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                r = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                c = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                d = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                l = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let n = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function a(e) {
                let t, a, i, o = 1,
                    r = e.replace(/\s/g, "").toLowerCase(),
                    c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
                if (c.startsWith("#")) {
                    let e = c.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), a = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (c.startsWith("rgba")) {
                    let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (c.startsWith("rgb")) {
                    let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), a = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (c.startsWith("hsla")) {
                    let e, n, r, d = c.match(/hsla\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(d[0]),
                        s = parseFloat(d[1].replace("%", "")) / 100,
                        u = parseFloat(d[2].replace("%", "")) / 100;
                    o = parseFloat(d[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        g = f * (1 - Math.abs(l / 60 % 2 - 1)),
                        b = u - f / 2;
                    l >= 0 && l < 60 ? (e = f, n = g, r = 0) : l >= 60 && l < 120 ? (e = g, n = f, r = 0) : l >= 120 && l < 180 ? (e = 0, n = f, r = g) : l >= 180 && l < 240 ? (e = 0, n = g, r = f) : l >= 240 && l < 300 ? (e = g, n = 0, r = f) : (e = f, n = 0, r = g), t = Math.round((e + b) * 255), a = Math.round((n + b) * 255), i = Math.round((r + b) * 255)
                } else if (c.startsWith("hsl")) {
                    let e, n, o, r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
                        d = parseFloat(r[0]),
                        l = parseFloat(r[1].replace("%", "")) / 100,
                        s = parseFloat(r[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * l,
                        f = u * (1 - Math.abs(d / 60 % 2 - 1)),
                        g = s - u / 2;
                    d >= 0 && d < 60 ? (e = u, n = f, o = 0) : d >= 60 && d < 120 ? (e = f, n = u, o = 0) : d >= 120 && d < 180 ? (e = 0, n = u, o = f) : d >= 180 && d < 240 ? (e = 0, n = f, o = u) : d >= 240 && d < 300 ? (e = f, n = 0, o = u) : (e = u, n = 0, o = f), t = Math.round((e + g) * 255), a = Math.round((n + g) * 255), i = Math.round((o + g) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: a,
                    blue: i,
                    alpha: o
                }
            }
        },
        9468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                IX2BrowserSupport: function() {
                    return o
                },
                IX2EasingUtils: function() {
                    return c
                },
                IX2Easings: function() {
                    return r
                },
                IX2ElementsReducer: function() {
                    return d
                },
                IX2VanillaPlugins: function() {
                    return l
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = f(n(2662)),
                r = f(n(8686)),
                c = f(n(3767)),
                d = f(n(5861)),
                l = f(n(1799)),
                s = f(n(4124));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var n = u(t);
                if (n && n.has(e)) return n.get(e);
                var a = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
        },
        2662: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                ELEMENT_MATCHES: function() {
                    return l
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return c
                },
                TRANSFORM_PREFIXED: function() {
                    return u
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return g
                },
                withBrowser: function() {
                    return d
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = (a = n(9777)) && a.__esModule ? a : {
                    default: a
                },
                c = "undefined" != typeof window,
                d = (e, t) => c ? e() : t,
                l = d(() => (0, r.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = d(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: n
                        } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a];
                            if (e.style.display = n, e.style.display === n) return n
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                u = d(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: n
                            } = t;
                        for (let a = 0; a < n; a++) {
                            let n = t[a] + "Transform";
                            if (void 0 !== e.style[n]) return n
                        }
                    }
                    return "transform"
                }, "transform"),
                f = u.split("transform")[0],
                g = f ? f + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                applyEasing: function() {
                    return u
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return l
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var n = d(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        }
                    return a.default = e, n && n.set(e, a), a
                }(n(8686)),
                c = (a = n(1361)) && a.__esModule ? a : {
                    default: a
                };

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (d = function(e) {
                    return e ? n : t
                })(e)
            }

            function l(e, t = 5, n = 10) {
                let a = Math.pow(n, t),
                    i = Number(Math.round(e * a) / a);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function s(e) {
                return (0, c.default)(...e)
            }

            function u(e, t, n) {
                return 0 === t ? 0 : 1 === t ? 1 : n ? l(t > 0 ? n(t) : t) : l(t > 0 && e && r[e] ? r[e](t) : t)
            }
        },
        8686: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a, i = {
                bounce: function() {
                    return z
                },
                bouncePast: function() {
                    return H
                },
                ease: function() {
                    return c
                },
                easeIn: function() {
                    return d
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return l
                },
                inBack: function() {
                    return x
                },
                inCirc: function() {
                    return U
                },
                inCubic: function() {
                    return b
                },
                inElastic: function() {
                    return V
                },
                inExpo: function() {
                    return S
                },
                inOutBack: function() {
                    return G
                },
                inOutCirc: function() {
                    return C
                },
                inOutCubic: function() {
                    return E
                },
                inOutElastic: function() {
                    return w
                },
                inOutExpo: function() {
                    return N
                },
                inOutQuad: function() {
                    return g
                },
                inOutQuart: function() {
                    return I
                },
                inOutQuint: function() {
                    return R
                },
                inOutSine: function() {
                    return A
                },
                inQuad: function() {
                    return u
                },
                inQuart: function() {
                    return y
                },
                inQuint: function() {
                    return O
                },
                inSine: function() {
                    return _
                },
                outBack: function() {
                    return P
                },
                outBounce: function() {
                    return M
                },
                outCirc: function() {
                    return L
                },
                outCubic: function() {
                    return p
                },
                outElastic: function() {
                    return F
                },
                outExpo: function() {
                    return h
                },
                outQuad: function() {
                    return f
                },
                outQuart: function() {
                    return T
                },
                outQuint: function() {
                    return m
                },
                outSine: function() {
                    return v
                },
                swingFrom: function() {
                    return X
                },
                swingFromTo: function() {
                    return D
                },
                swingTo: function() {
                    return k
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let r = (a = n(1361)) && a.__esModule ? a : {
                    default: a
                },
                c = (0, r.default)(.25, .1, .25, 1),
                d = (0, r.default)(.42, 0, 1, 1),
                l = (0, r.default)(0, 0, .58, 1),
                s = (0, r.default)(.42, 0, .58, 1);

            function u(e) {
                return Math.pow(e, 2)
            }

            function f(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function g(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function b(e) {
                return Math.pow(e, 3)
            }

            function p(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function E(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function y(e) {
                return Math.pow(e, 4)
            }

            function T(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function I(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function O(e) {
                return Math.pow(e, 5)
            }

            function m(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function R(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function _(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function v(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function A(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function S(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function h(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function N(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function U(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function L(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function C(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function M(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function x(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function P(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function G(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function V(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)))
            }

            function F(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / n) + 1)
            }

            function w(e) {
                let t = 1.70158,
                    n = 0,
                    a = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .3 * 1.5), a < 1 ? (a = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / a), e < 1) ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n)) : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / n) * .5 + 1
            }

            function D(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function X(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function k(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function z(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function H(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return g
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return u
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return c
                },
                renderPlugin: function() {
                    return b
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(2662),
                r = n(3690);

            function c(e) {
                return r.pluginMethodMap.has(e)
            }
            let d = e => t => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let n = r.pluginMethodMap.get(t);
                    if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
                    let a = n[e];
                    if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
                    return a
                },
                l = d("getPluginConfig"),
                s = d("getPluginOrigin"),
                u = d("getPluginDuration"),
                f = d("getPluginDestination"),
                g = d("createPluginInstance"),
                b = d("renderPlugin"),
                p = d("clearPlugin")
        },
        4124: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                cleanupHTMLElement: function() {
                    return ej
                },
                clearAllStyles: function() {
                    return ez
                },
                clearObjectCache: function() {
                    return eu
                },
                getActionListProgress: function() {
                    return e$
                },
                getAffectedElements: function() {
                    return eO
                },
                getComputedStyle: function() {
                    return em
                },
                getDestinationValues: function() {
                    return eU
                },
                getElementId: function() {
                    return ep
                },
                getInstanceId: function() {
                    return eg
                },
                getInstanceOrigin: function() {
                    return eA
                },
                getItemConfigByKey: function() {
                    return eN
                },
                getMaxDurationItemIndex: function() {
                    return eQ
                },
                getNamespacedParameterId: function() {
                    return eZ
                },
                getRenderType: function() {
                    return eL
                },
                getStyleProp: function() {
                    return eC
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return eT
                },
                reduceListToGroup: function() {
                    return eK
                },
                reifyState: function() {
                    return eE
                },
                renderHTMLElement: function() {
                    return eM
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eq
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = p(n(4075)),
                r = p(n(1455)),
                c = p(n(5720)),
                d = n(1185),
                l = n(7087),
                s = p(n(7164)),
                u = n(3767),
                f = n(380),
                g = n(1799),
                b = n(2662);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: E,
                TRANSFORM: y,
                TRANSLATE_3D: T,
                SCALE_3D: I,
                ROTATE_X: O,
                ROTATE_Y: m,
                ROTATE_Z: R,
                SKEW: _,
                PRESERVE_3D: v,
                FLEX: A,
                OPACITY: S,
                FILTER: h,
                FONT_VARIATION_SETTINGS: N,
                WIDTH: U,
                HEIGHT: L,
                BACKGROUND_COLOR: C,
                BORDER_COLOR: M,
                COLOR: x,
                CHILDREN: P,
                IMMEDIATE_CHILDREN: G,
                SIBLINGS: V,
                PARENT: F,
                DISPLAY: w,
                WILL_CHANGE: D,
                AUTO: X,
                COMMA_DELIMITER: k,
                COLON_DELIMITER: z,
                BAR_DELIMITER: H,
                RENDER_TRANSFORM: B,
                RENDER_GENERAL: j,
                RENDER_STYLE: Y,
                RENDER_PLUGIN: W
            } = l.IX2EngineConstants, {
                TRANSFORM_MOVE: Q,
                TRANSFORM_SCALE: $,
                TRANSFORM_ROTATE: K,
                TRANSFORM_SKEW: q,
                STYLE_OPACITY: Z,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: en,
                STYLE_BORDER: ea,
                STYLE_TEXT_COLOR: ei,
                GENERAL_DISPLAY: eo,
                OBJECT_VALUE: er
            } = l.ActionTypeConsts, ec = e => e.trim(), ed = Object.freeze({
                [en]: C,
                [ea]: M,
                [ei]: x
            }), el = Object.freeze({
                [b.TRANSFORM_PREFIXED]: y,
                [C]: E,
                [S]: S,
                [h]: h,
                [U]: U,
                [L]: L,
                [N]: N
            }), es = new Map;

            function eu() {
                es.clear()
            }
            let ef = 1;

            function eg() {
                return "i" + ef++
            }
            let eb = 1;

            function ep(e, t) {
                for (let n in e) {
                    let a = e[n];
                    if (a && a.ref === t) return a.id
                }
                return "e" + eb++
            }

            function eE({
                events: e,
                actionLists: t,
                site: n
            } = {}) {
                let a = (0, r.default)(e, (e, t) => {
                        let {
                            eventTypeId: n
                        } = t;
                        return e[n] || (e[n] = {}), e[n][t.id] = t, e
                    }, {}),
                    i = n && n.mediaQueries,
                    o = [];
                return i ? o = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: a,
                        mediaQueries: i,
                        mediaQueryKeys: o
                    }
                }
            }
            let ey = (e, t) => e === t;

            function eT({
                store: e,
                select: t,
                onChange: n,
                comparator: a = ey
            }) {
                let {
                    getState: i,
                    subscribe: o
                } = e, r = o(function() {
                    let o = t(i());
                    if (null == o) return void r();
                    a(o, c) || n(c = o, e)
                }), c = t(i());
                return r
            }

            function eI(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r
                    } = e;
                    return {
                        id: t,
                        objectId: n,
                        selector: a,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: r
                    }
                }
                return {}
            }

            function eO({
                config: e,
                event: t,
                eventTarget: n,
                elementRoot: a,
                elementApi: i
            }) {
                let o, r, c;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: d
                } = e;
                if (Array.isArray(d) && d.length > 0) return d.reduce((e, o) => e.concat(eO({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: f,
                    getChildElements: g,
                    getSiblingElements: p,
                    matchSelector: E,
                    elementContains: y,
                    isSiblingNode: T
                } = i, {
                    target: I
                } = e;
                if (!I) return [];
                let {
                    id: O,
                    objectId: m,
                    selector: R,
                    selectorGuids: _,
                    appliesTo: v,
                    useEventTarget: A
                } = eI(I);
                if (m) return [es.has(m) ? es.get(m) : es.set(m, {}).get(m)];
                if (v === l.EventAppliesTo.PAGE) {
                    let e = s(O);
                    return e ? [e] : []
                }
                let S = (t ? .action ? .config ? .affectedElements ? ? {})[O || R] || {},
                    h = !!(S.id || S.selector),
                    N = t && u(eI(t.target));
                if (h ? (o = S.limitAffectedElements, r = N, c = u(S)) : r = c = u({
                        id: O,
                        selector: R,
                        selectorGuids: _
                    }), t && A) {
                    let e = n && (c || !0 === A) ? [n] : f(N);
                    if (c) {
                        if (A === F) return f(c).filter(t => e.some(e => y(t, e)));
                        if (A === P) return f(c).filter(t => e.some(e => y(e, t)));
                        if (A === V) return f(c).filter(t => e.some(e => T(e, t)))
                    }
                    return e
                }
                return null == r || null == c ? [] : b.IS_BROWSER_ENV && a ? f(c).filter(e => a.contains(e)) : o === P ? f(r, c) : o === G ? g(f(r)).filter(E(c)) : o === V ? p(f(r)).filter(E(c)) : f(c)
            }

            function em({
                element: e,
                actionItem: t
            }) {
                if (!b.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: n
                } = t;
                switch (n) {
                    case et:
                    case en:
                    case ea:
                    case ei:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let eR = /px/,
                e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eP[t.type]), e), e || {}),
                ev = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eG[t.type] || t.defaultValue || 0), e), e || {});

            function eA(e, t = {}, n = {}, a, i) {
                let {
                    getStyle: r
                } = i, {
                    actionTypeId: c
                } = a;
                if ((0, g.isPluginType)(c)) return (0, g.getPluginOrigin)(c)(t[c], a);
                switch (a.actionTypeId) {
                    case Q:
                    case $:
                    case K:
                    case q:
                        return t[a.actionTypeId] || ex[a.actionTypeId];
                    case J:
                        return e_(t[a.actionTypeId], a.config.filters);
                    case ee:
                        return ev(t[a.actionTypeId], a.config.fontVariations);
                    case Z:
                        return {
                            value: (0, o.default)(parseFloat(r(e, S)), 1)
                        };
                    case et:
                        {
                            let t, i = r(e, U),
                                c = r(e, L);
                            return {
                                widthValue: a.config.widthUnit === X ? eR.test(i) ? parseFloat(i) : parseFloat(n.width) : (0, o.default)(parseFloat(i), parseFloat(n.width)),
                                heightValue: a.config.heightUnit === X ? eR.test(c) ? parseFloat(c) : parseFloat(n.height) : (0, o.default)(parseFloat(c), parseFloat(n.height))
                            }
                        }
                    case en:
                    case ea:
                    case ei:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: n,
                            getStyle: a
                        }) {
                            let i = ed[t],
                                r = a(e, i),
                                c = (function(e, t) {
                                    let n = e.exec(t);
                                    return n ? n[1] : ""
                                })(eD, ew.test(r) ? r : n[i]).split(k);
                            return {
                                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(c[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: a.actionTypeId,
                            computedStyle: n,
                            getStyle: r
                        });
                    case eo:
                        return {
                            value: (0, o.default)(r(e, w), n.display)
                        };
                    case er:
                        return t[a.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eN = (e, t, n) => {
                    if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(n, t);
                    switch (e) {
                        case J:
                            {
                                let e = (0, c.default)(n.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case ee:
                            {
                                let e = (0, c.default)(n.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return n[t]
                    }
                };

            function eU({
                element: e,
                actionItem: t,
                elementApi: n
            }) {
                if ((0, g.isPluginType)(t.actionTypeId)) return (0, g.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case Q:
                    case $:
                    case K:
                    case q:
                        {
                            let {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: n,
                                zValue: a
                            }
                        }
                    case et:
                        {
                            let {
                                getStyle: a,
                                setStyle: i,
                                getProperty: o
                            } = n,
                            {
                                widthUnit: r,
                                heightUnit: c
                            } = t.config,
                            {
                                widthValue: d,
                                heightValue: l
                            } = t.config;
                            if (!b.IS_BROWSER_ENV) return {
                                widthValue: d,
                                heightValue: l
                            };
                            if (r === X) {
                                let t = a(e, U);
                                i(e, U, ""), d = o(e, "offsetWidth"), i(e, U, t)
                            }
                            if (c === X) {
                                let t = a(e, L);
                                i(e, L, ""), l = o(e, "offsetHeight"), i(e, L, t)
                            }
                            return {
                                widthValue: d,
                                heightValue: l
                            }
                        }
                    case en:
                    case ea:
                    case ei:
                        {
                            let {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: r,
                                globalSwatchId: c
                            } = t.config;
                            if (c && c.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = n, a = t(e, c), i = (0, f.normalizeColor)(a);
                                return {
                                    rValue: i.red,
                                    gValue: i.green,
                                    bValue: i.blue,
                                    aValue: i.alpha
                                }
                            }
                            return {
                                rValue: a,
                                gValue: i,
                                bValue: o,
                                aValue: r
                            }
                        }
                    case J:
                        return t.config.filters.reduce(eS, {});
                    case ee:
                        return t.config.fontVariations.reduce(eh, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eL(e) {
                return /^TRANSFORM_/.test(e) ? B : /^STYLE_/.test(e) ? Y : /^GENERAL_/.test(e) ? j : /^PLUGIN_/.test(e) ? W : void 0
            }

            function eC(e, t) {
                return e === Y ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eM(e, t, n, a, i, o, c, d, l) {
                switch (d) {
                    case B:
                        var s = e,
                            u = t,
                            f = n,
                            p = i,
                            E = c;
                        let y = eF.map(e => {
                                let t = ex[e],
                                    {
                                        xValue: n = t.xValue,
                                        yValue: a = t.yValue,
                                        zValue: i = t.zValue,
                                        xUnit: o = "",
                                        yUnit: r = "",
                                        zUnit: c = ""
                                    } = u[e] || {};
                                switch (e) {
                                    case Q:
                                        return `${T}(${n}${o}, ${a}${r}, ${i}${c})`;
                                    case $:
                                        return `${I}(${n}${o}, ${a}${r}, ${i}${c})`;
                                    case K:
                                        return `${O}(${n}${o}) ${m}(${a}${r}) ${R}(${i}${c})`;
                                    case q:
                                        return `${_}(${n}${o}, ${a}${r})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: S
                            } = E;
                        eX(s, b.TRANSFORM_PREFIXED, E), S(s, b.TRANSFORM_PREFIXED, y),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: n,
                                zValue: a
                            }) {
                                return e === Q && void 0 !== a || e === $ && void 0 !== a || e === K && (void 0 !== t || void 0 !== n)
                            }(p, f) && S(s, b.TRANSFORM_STYLE_PREFIXED, v);
                        return;
                    case Y:
                        return function(e, t, n, a, i, o) {
                            let {
                                setStyle: c
                            } = o;
                            switch (a.actionTypeId) {
                                case et:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: i = ""
                                        } = a.config,
                                        {
                                            widthValue: r,
                                            heightValue: d
                                        } = n;void 0 !== r && (t === X && (t = "px"), eX(e, U, o), c(e, U, r + t)),
                                        void 0 !== d && (i === X && (i = "px"), eX(e, L, o), c(e, L, d + i));
                                        break
                                    }
                                case J:
                                    var d = a.config;
                                    let l = (0, r.default)(n, (e, t, n) => `${e} ${n}(${t}${eV(n,d)})`, ""),
                                        {
                                            setStyle: s
                                        } = o;
                                    eX(e, h, o), s(e, h, l);
                                    break;
                                case ee:
                                    a.config;
                                    let u = (0, r.default)(n, (e, t, n) => (e.push(`"${n}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: f
                                        } = o;
                                    eX(e, N, o), f(e, N, u);
                                    break;
                                case en:
                                case ea:
                                case ei:
                                    {
                                        let t = ed[a.actionTypeId],
                                            i = Math.round(n.rValue),
                                            r = Math.round(n.gValue),
                                            d = Math.round(n.bValue),
                                            l = n.aValue;eX(e, t, o),
                                        c(e, t, l >= 1 ? `rgb(${i},${r},${d})` : `rgba(${i},${r},${d},${l})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = a.config;eX(e, i, o),
                                        c(e, i, n.value + t)
                                    }
                            }
                        }(e, 0, n, i, o, c);
                    case j:
                        var C = e,
                            M = i,
                            x = c;
                        let {
                            setStyle: P
                        } = x;
                        if (M.actionTypeId === eo) {
                            let {
                                value: e
                            } = M.config;
                            P(C, w, e === A && b.IS_BROWSER_ENV ? b.FLEX_PREFIXED : e);
                        }
                        return;
                    case W:
                        {
                            let {
                                actionTypeId: e
                            } = i;
                            if ((0, g.isPluginType)(e)) return (0, g.renderPlugin)(e)(l, t, i)
                        }
                }
            }
            let ex = {
                    [Q]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [K]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eP = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eG = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                eV = (e, t) => {
                    let n = (0, c.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (n && n.unit) return n.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                eF = Object.keys(ex),
                ew = /^rgb/,
                eD = RegExp("rgba?\\(([^)]+)\\)");

            function eX(e, t, n) {
                if (!b.IS_BROWSER_ENV) return;
                let a = el[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, r = i(e, D);
                if (!r) return void o(e, D, a);
                let c = r.split(k).map(ec); - 1 === c.indexOf(a) && o(e, D, c.concat(a).join(k))
            }

            function ek(e, t, n) {
                if (!b.IS_BROWSER_ENV) return;
                let a = el[t];
                if (!a) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = n, r = i(e, D);
                r && -1 !== r.indexOf(a) && o(e, D, r.split(k).map(ec).filter(e => e !== a).join(k))
            }

            function ez({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: n
                } = e.getState(), {
                    events: a = {},
                    actionLists: i = {}
                } = n;
                Object.keys(a).forEach(e => {
                    let n = a[e],
                        {
                            config: o
                        } = n.action,
                        {
                            actionListId: r
                        } = o,
                        c = i[r];
                    c && eH({
                        actionList: c,
                        event: n,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eH({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eH({
                actionList: e = {},
                event: t,
                elementApi: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e;
                a && a.forEach(e => {
                    eB({
                        actionGroup: e,
                        event: t,
                        elementApi: n
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: a
                    } = e;
                    a.forEach(e => {
                        eB({
                            actionGroup: e,
                            event: t,
                            elementApi: n
                        })
                    })
                })
            }

            function eB({
                actionGroup: e,
                event: t,
                elementApi: n
            }) {
                let {
                    actionItems: a
                } = e;
                a.forEach(e => {
                    let a, {
                        actionTypeId: i,
                        config: o
                    } = e;
                    a = (0, g.isPluginType)(i) ? t => (0, g.clearPlugin)(i)(t, e) : eY({
                        effect: eW,
                        actionTypeId: i,
                        elementApi: n
                    }), eO({
                        config: o,
                        event: t,
                        elementApi: n
                    }).forEach(a)
                })
            }

            function ej(e, t, n) {
                let {
                    setStyle: a,
                    getStyle: i
                } = n, {
                    actionTypeId: o
                } = t;
                if (o === et) {
                    let {
                        config: n
                    } = t;
                    n.widthUnit === X && a(e, U, ""), n.heightUnit === X && a(e, L, "")
                }
                i(e, D) && eY({
                    effect: ek,
                    actionTypeId: o,
                    elementApi: n
                })(e)
            }
            let eY = ({
                effect: e,
                actionTypeId: t,
                elementApi: n
            }) => a => {
                switch (t) {
                    case Q:
                    case $:
                    case K:
                    case q:
                        e(a, b.TRANSFORM_PREFIXED, n);
                        break;
                    case J:
                        e(a, h, n);
                        break;
                    case ee:
                        e(a, N, n);
                        break;
                    case Z:
                        e(a, S, n);
                        break;
                    case et:
                        e(a, U, n), e(a, L, n);
                        break;
                    case en:
                    case ea:
                    case ei:
                        e(a, ed[t], n);
                        break;
                    case eo:
                        e(a, w, n)
                }
            };

            function eW(e, t, n) {
                let {
                    setStyle: a
                } = n;
                ek(e, t, n), a(e, t, ""), t === b.TRANSFORM_PREFIXED && a(e, b.TRANSFORM_STYLE_PREFIXED, "")
            }

            function eQ(e) {
                let t = 0,
                    n = 0;
                return e.forEach((e, a) => {
                    let {
                        config: i
                    } = e, o = i.delay + i.duration;
                    o >= t && (t = o, n = a)
                }), n
            }

            function e$(e, t) {
                let {
                    actionItemGroups: n,
                    useFirstGroupAsInitialState: a
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: o = 0
                } = t, r = 0, c = 0;
                return n.forEach((e, t) => {
                    if (a && 0 === t) return;
                    let {
                        actionItems: n
                    } = e, d = n[eQ(n)], {
                        config: l,
                        actionTypeId: s
                    } = d;
                    i.id === d.id && (c = r + o);
                    let u = eL(s) === j ? 0 : l.duration;
                    r += l.delay + u
                }), r > 0 ? (0, u.optimizeFloat)(c / r) : 0
            }

            function eK({
                actionList: e,
                actionItemId: t,
                rawData: n
            }) {
                let {
                    actionItemGroups: a,
                    continuousParameterGroups: i
                } = e, o = [], r = e => (o.push((0, d.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return a && a.some(({
                    actionItems: e
                }) => e.some(r)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(r))
                }), (0, d.setIn)(n, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function eq(e, {
                basedOn: t
            }) {
                return e === l.EventTypeConsts.SCROLLING_IN_VIEW && (t === l.EventBasedOn.ELEMENT || null == t) || e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT
            }

            function eZ(e, t) {
                return e + z + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + H + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: n = "",
                    useEventTarget: a = ""
                } = e;
                return t + H + n + H + a
            }
        },
        7164: function(e, t) {
            "use strict";

            function n(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = function(e, t) {
                if (n(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (let i = 0; i < a.length; i++)
                    if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                createElementState: function() {
                    return _
                },
                ixElements: function() {
                    return R
                },
                mergeActionState: function() {
                    return v
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let o = n(1185),
                r = n(7087),
                {
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: d,
                    ABSTRACT_NODE: l,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: g,
                    CONFIG_X_UNIT: b,
                    CONFIG_Y_UNIT: p,
                    CONFIG_Z_UNIT: E,
                    CONFIG_UNIT: y
                } = r.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: T,
                    IX2_INSTANCE_ADDED: I,
                    IX2_ELEMENT_STATE_CHANGED: O
                } = r.IX2EngineActionTypes,
                m = {},
                R = (e = m, t = {}) => {
                    switch (t.type) {
                        case T:
                            return m;
                        case I:
                            {
                                let {
                                    elementId: n,
                                    element: a,
                                    origin: i,
                                    actionItem: r,
                                    refType: c
                                } = t.payload,
                                {
                                    actionTypeId: d
                                } = r,
                                l = e;
                                return (0, o.getIn)(l, [n, a]) !== a && (l = _(l, a, c, n, r)),
                                v(l, n, d, i, r)
                            }
                        case O:
                            {
                                let {
                                    elementId: n,
                                    actionTypeId: a,
                                    current: i,
                                    actionItem: o
                                } = t.payload;
                                return v(e, n, a, i, o)
                            }
                        default:
                            return e
                    }
                };

            function _(e, t, n, a, i) {
                let r = n === d ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [a], {
                    id: a,
                    ref: t,
                    refId: r,
                    refType: n
                })
            }

            function v(e, t, n, a, i) {
                let r = function(e) {
                    let {
                        config: t
                    } = e;
                    return A.reduce((e, n) => {
                        let a = n[0],
                            i = n[1],
                            o = t[a],
                            r = t[i];
                        return null != o && null != r && (e[i] = r), e
                    }, {})
                }(i);
                return (0, o.mergeIn)(e, [t, "refState", n], a, r)
            }
            let A = [
                [s, b],
                [u, p],
                [f, E],
                [g, y]
            ]
        },
        5694: function() {
            Webflow.require("ix2").init({
                events: {
                    "e-16": {
                        id: "e-16",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-17"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "d646d973-2437-bc89-15ad-0926761f63e1",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            id: "d646d973-2437-bc89-15ad-0926761f63e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 500,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x17b0f475b1e
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-19"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".paragraph",
                            originalId: "63bf33f53bdbf7b15ec43b4f|51e9e3a7-f551-e4c3-8035-f20294236fcf",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|51e9e3a7-f551-e4c3-8035-f20294236fcf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 195,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x17b170153f4
                    },
                    "e-23": {
                        id: "e-23",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-48",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-24"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b1843db85
                    },
                    "e-35": {
                        id: "e-35",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-36"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".slider-navigation",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7ee2a72f-7cea-58b0-b0bf-0bd1fcfa842d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".slider-navigation",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7ee2a72f-7cea-58b0-b0bf-0bd1fcfa842d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a525863a4
                    },
                    "e-36": {
                        id: "e-36",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-35"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".slider-navigation",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7ee2a72f-7cea-58b0-b0bf-0bd1fcfa842d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".slider-navigation",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7ee2a72f-7cea-58b0-b0bf-0bd1fcfa842d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a525863a4
                    },
                    "e-44": {
                        id: "e-44",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-31",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|354bf7e3-9958-f954-fbde-53847ec0c210",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|354bf7e3-9958-f954-fbde-53847ec0c210",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-31-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17b46c0a84c
                    },
                    "e-63": {
                        id: "e-63",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-64"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|b6f5b74c-7c19-361c-5442-3db3349729ba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|b6f5b74c-7c19-361c-5442-3db3349729ba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b4b1fc3bd
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-37",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76219c43b56|f03f262b-31b4-2e96-5211-5a0e56895d35",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76219c43b56|f03f262b-31b4-2e96-5211-5a0e56895d35",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-37-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17b4cd452e9
                    },
                    "e-70": {
                        id: "e-70",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-38",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-71"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76219c43b56|9eef3671-2de1-8285-b02b-38fa2e91885e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76219c43b56|9eef3671-2de1-8285-b02b-38fa2e91885e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b4d0fe518
                    },
                    "e-72": {
                        id: "e-72",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76219c43b56|b3ac6c00-6f34-d11d-4ea2-f5b9a6944a19",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76219c43b56|b3ac6c00-6f34-d11d-4ea2-f5b9a6944a19",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x17b4d12ec73
                    },
                    "e-74": {
                        id: "e-74",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-75"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76219c43b56|1b8207e7-db03-61af-5bb8-2c8c043a44b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76219c43b56|1b8207e7-db03-61af-5bb8-2c8c043a44b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b4d24c315
                    },
                    "e-76": {
                        id: "e-76",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-77"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76219c43b56|35cab7bb-f9c9-8d29-331d-6388538d6347",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76219c43b56|35cab7bb-f9c9-8d29-331d-6388538d6347",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b4d250a9c
                    },
                    "e-78": {
                        id: "e-78",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-79"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76219c43b56|754743fb-333f-d33c-8979-6df6b4ba6031",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76219c43b56|754743fb-333f-d33c-8979-6df6b4ba6031",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b4d340f76
                    },
                    "e-80": {
                        id: "e-80",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-41",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-81"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a482092f6
                    },
                    "e-81": {
                        id: "e-81",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-42",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-80"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a482092f6
                    },
                    "e-82": {
                        id: "e-82",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-83"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".slider-prev",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".slider-prev",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a525863a4
                    },
                    "e-83": {
                        id: "e-83",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-82"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".slider-prev",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".slider-prev",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a525863a4
                    },
                    "e-84": {
                        id: "e-84",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-43",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-85"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a48314caa
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-84"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef8f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17a48314cab
                    },
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|21a8080c-ca7b-a761-b3f7-08288b4e1664",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|21a8080c-ca7b-a761-b3f7-08288b4e1664",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17b5ade2d6c
                    },
                    "e-94": {
                        id: "e-94",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-108",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17b5b3e5a9e
                    },
                    "e-99": {
                        id: "e-99",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-38",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-100"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76503c43b54|634a2d92-7bcb-0c78-143b-4772aaec5b70",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76503c43b54|634a2d92-7bcb-0c78-143b-4772aaec5b70",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ba3208e31
                    },
                    "e-101": {
                        id: "e-101",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-102"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76503c43b54|634a2d92-7bcb-0c78-143b-4772aaec5b73",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76503c43b54|634a2d92-7bcb-0c78-143b-4772aaec5b73",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x17ba3208e31
                    },
                    "e-111": {
                        id: "e-111",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-112"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link",
                            originalId: "613b94d84a478c13777a335a|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link",
                            originalId: "613b94d84a478c13777a335a|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c902e3dc
                    },
                    "e-112": {
                        id: "e-112",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-111"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link",
                            originalId: "613b94d84a478c13777a335a|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link",
                            originalId: "613b94d84a478c13777a335a|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c902e3de
                    },
                    "e-117": {
                        id: "e-117",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf7d8b0c43b5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7d8b0c43b5a",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 60,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-58-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 60,
                            restingState: 50
                        }],
                        createdOn: 0x17bd10fe61a
                    },
                    "e-122": {
                        id: "e-122",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 2,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-58-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 2,
                            restingState: 50
                        }],
                        createdOn: 0x17bd1f4fc89
                    },
                    "e-126": {
                        id: "e-126",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-127"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".menu-link",
                            originalId: "63bf33f53bdbf7d8b0c43b5a|84ab0c25-a8de-7139-4d8a-2d0fb87e05ce",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".menu-link",
                            originalId: "63bf33f53bdbf7d8b0c43b5a|84ab0c25-a8de-7139-4d8a-2d0fb87e05ce",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: 0,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x17bdcb306ed
                    },
                    "e-127": {
                        id: "e-127",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-126"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".menu-link",
                            originalId: "63bf33f53bdbf7d8b0c43b5a|84ab0c25-a8de-7139-4d8a-2d0fb87e05ce",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".menu-link",
                            originalId: "63bf33f53bdbf7d8b0c43b5a|84ab0c25-a8de-7139-4d8a-2d0fb87e05ce",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17bdcb306f0
                    },
                    "e-145": {
                        id: "e-145",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 70,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-58-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 70,
                            restingState: 50
                        }],
                        createdOn: 0x17c4c0c066a
                    },
                    "e-146": {
                        id: "e-146",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-147"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".cursor",
                            originalId: "02ad3f98-edaa-b79f-6c1e-c8459945ba7e",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".cursor",
                            originalId: "02ad3f98-edaa-b79f-6c1e-c8459945ba7e",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17c4c0fd30b
                    },
                    "e-147": {
                        id: "e-147",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-146"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".cursor",
                            originalId: "02ad3f98-edaa-b79f-6c1e-c8459945ba7e",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".cursor",
                            originalId: "02ad3f98-edaa-b79f-6c1e-c8459945ba7e",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17c4c0fd30e
                    },
                    "e-155": {
                        id: "e-155",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf763cdc43b62",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf763cdc43b62",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 60,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-58-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 60,
                            restingState: 50
                        }],
                        createdOn: 0x17c964248f7
                    },
                    "e-160": {
                        id: "e-160",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-161"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-over-card.desktop",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-over-card.desktop",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb3dc8859
                    },
                    "e-161": {
                        id: "e-161",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-81",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-160"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-over-card.desktop",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-over-card.desktop",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb3dc885c
                    },
                    "e-162": {
                        id: "e-162",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-82",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-over-card",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-over-card",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-82-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 70,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-82-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "ELEMENT",
                            reverse: !1,
                            smoothing: 70,
                            restingState: 50
                        }],
                        createdOn: 0x17cb3dcd1e9
                    },
                    "e-165": {
                        id: "e-165",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-85",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-166"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".item",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef95",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".item",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef95",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb4b3c31d
                    },
                    "e-166": {
                        id: "e-166",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-88",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-165"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".item",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef95",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".item",
                            originalId: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef95",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb4b3c320
                    },
                    "e-167": {
                        id: "e-167",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-87",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-168"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef94",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef94",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb4bcbf64
                    },
                    "e-168": {
                        id: "e-168",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-86",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-167"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef94",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef94",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb4bcbf67
                    },
                    "e-169": {
                        id: "e-169",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-85",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-170"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "d646d973-2437-bc89-15ad-0926761f63e1",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "d646d973-2437-bc89-15ad-0926761f63e1",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb4f9bebc
                    },
                    "e-170": {
                        id: "e-170",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-88",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-169"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "d646d973-2437-bc89-15ad-0926761f63e1",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "d646d973-2437-bc89-15ad-0926761f63e1",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb4f9bebf
                    },
                    "e-172": {
                        id: "e-172",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-89",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef80",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7eb325eb-f5f8-3c8c-e160-7fa36104ef80",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-89-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17cb526839e
                    },
                    "e-173": {
                        id: "e-173",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-174"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "d8bd7005-13ce-2584-f431-857014f19abc",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "d8bd7005-13ce-2584-f431-857014f19abc",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 500,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x17cb9fafb29
                    },
                    "e-175": {
                        id: "e-175",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-90",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-176"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "d8bd7005-13ce-2584-f431-857014f19abc",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "d8bd7005-13ce-2584-f431-857014f19abc",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb9fafb29
                    },
                    "e-176": {
                        id: "e-176",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-91",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-175"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "d8bd7005-13ce-2584-f431-857014f19abc",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "d8bd7005-13ce-2584-f431-857014f19abc",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cb9fafb29
                    },
                    "e-178": {
                        id: "e-178",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-93",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-179"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-2",
                            originalId: "6178b2eba6d45b57ca67c43b|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-2",
                            originalId: "6178b2eba6d45b57ca67c43b|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c902e3dc
                    },
                    "e-179": {
                        id: "e-179",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-94",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-178"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-2",
                            originalId: "6178b2eba6d45b57ca67c43b|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-2",
                            originalId: "6178b2eba6d45b57ca67c43b|bde65440-83f9-92ca-f69b-e0591c2fd38b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c902e3de
                    },
                    "e-180": {
                        id: "e-180",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-95",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-181"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".field_line-2",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".field_line-2",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c995fcfb
                    },
                    "e-181": {
                        id: "e-181",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-96",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-180"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".field_line-2",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".field_line-2",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c995fcfb
                    },
                    "e-182": {
                        id: "e-182",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-183"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-2.is--submit",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb85",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-2.is--submit",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb85",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c9d5c77d
                    },
                    "e-183": {
                        id: "e-183",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-98",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-182"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".link-2.is--submit",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb85",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-2.is--submit",
                            originalId: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb85",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x179c9d5c77e
                    },
                    "e-184": {
                        id: "e-184",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-31",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".text-scroll-wrap.contact",
                            originalId: "63bf33f53bdbf748adc43b59|202b5234-92eb-7127-4ac7-aeb3e5dbce1a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".text-scroll-wrap.contact",
                            originalId: "63bf33f53bdbf748adc43b59|202b5234-92eb-7127-4ac7-aeb3e5dbce1a",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-31-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17cc4f0a629
                    },
                    "e-185": {
                        id: "e-185",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf748adc43b59",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf748adc43b59",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 65,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-58-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 65,
                            restingState: 50
                        }],
                        createdOn: 0x17cc4f0d3c4
                    },
                    "e-186": {
                        id: "e-186",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-99",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-187"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cd1fef46d
                    },
                    "e-196": {
                        id: "e-196",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-101",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-197"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cd2e5eecb
                    },
                    "e-197": {
                        id: "e-197",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-100",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-196"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf76503c43b54",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17cd2e5eecf
                    },
                    "e-198": {
                        id: "e-198",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|f1e991e1-a42b-4021-8acd-9498bf42f95c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|f1e991e1-a42b-4021-8acd-9498bf42f95c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17ce85a65cd
                    },
                    "e-199": {
                        id: "e-199",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-102",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-200"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".menu-button",
                            originalId: "63bf33f53bdbf70befc43b57|e0ab2d92-9692-7697-3769-338ca167fda5",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".menu-button",
                            originalId: "63bf33f53bdbf70befc43b57|e0ab2d92-9692-7697-3769-338ca167fda5",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ce8b579aa
                    },
                    "e-200": {
                        id: "e-200",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-103",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-199"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".menu-button",
                            originalId: "63bf33f53bdbf70befc43b57|e0ab2d92-9692-7697-3769-338ca167fda5",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".menu-button",
                            originalId: "63bf33f53bdbf70befc43b57|e0ab2d92-9692-7697-3769-338ca167fda5",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17ce8b579aa
                    },
                    "e-201": {
                        id: "e-201",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-202"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|f000dac5-ef56-14c7-c5a7-e70917abc21b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|f000dac5-ef56-14c7-c5a7-e70917abc21b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 500,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x17d025c768d
                    },
                    "e-203": {
                        id: "e-203",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-104",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-204"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|f000dac5-ef56-14c7-c5a7-e70917abc21b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|f000dac5-ef56-14c7-c5a7-e70917abc21b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d025c768d
                    },
                    "e-204": {
                        id: "e-204",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-105",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-203"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|f000dac5-ef56-14c7-c5a7-e70917abc21b",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|f000dac5-ef56-14c7-c5a7-e70917abc21b",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d025c768d
                    },
                    "e-205": {
                        id: "e-205",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-206"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|d4928a89-02c9-cce9-12d4-1d07293b2a9e",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|d4928a89-02c9-cce9-12d4-1d07293b2a9e",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 500,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x17d025e175e
                    },
                    "e-207": {
                        id: "e-207",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-106",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-208"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|d4928a89-02c9-cce9-12d4-1d07293b2a9e",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|d4928a89-02c9-cce9-12d4-1d07293b2a9e",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d025e175e
                    },
                    "e-208": {
                        id: "e-208",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-107",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-207"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|d4928a89-02c9-cce9-12d4-1d07293b2a9e",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".arrow-button",
                            originalId: "63bf33f53bdbf70befc43b57|d4928a89-02c9-cce9-12d4-1d07293b2a9e",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d025e175e
                    },
                    "e-215": {
                        id: "e-215",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-113",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-216"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".next-link",
                            originalId: "63bf33f53bdbf70befc43b57|d1f35caa-57ac-7e32-1e5a-c1bc8a5747a3",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".next-link",
                            originalId: "63bf33f53bdbf70befc43b57|d1f35caa-57ac-7e32-1e5a-c1bc8a5747a3",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d0b69e8e2
                    },
                    "e-216": {
                        id: "e-216",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-114",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-215"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".next-link",
                            originalId: "63bf33f53bdbf70befc43b57|d1f35caa-57ac-7e32-1e5a-c1bc8a5747a3",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".next-link",
                            originalId: "63bf33f53bdbf70befc43b57|d1f35caa-57ac-7e32-1e5a-c1bc8a5747a3",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d0b69e8e7
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-58",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf70befc43b57",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf70befc43b57",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-58-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 60,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-58-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 60,
                            restingState: 50
                        }],
                        createdOn: 0x17d0c5c5078
                    },
                    "e-218": {
                        id: "e-218",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-115",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-219"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".switch",
                            originalId: "63bf33f53bdbf763cdc43b62|8ccb2c68-18a6-f9fd-fc07-5c3966e9efaf",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".switch",
                            originalId: "63bf33f53bdbf763cdc43b62|8ccb2c68-18a6-f9fd-fc07-5c3966e9efaf",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d0f719666
                    },
                    "e-219": {
                        id: "e-219",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-116",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-218"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".switch",
                            originalId: "63bf33f53bdbf763cdc43b62|8ccb2c68-18a6-f9fd-fc07-5c3966e9efaf",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".switch",
                            originalId: "63bf33f53bdbf763cdc43b62|8ccb2c68-18a6-f9fd-fc07-5c3966e9efaf",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d0f719669
                    },
                    "e-222": {
                        id: "e-222",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-118",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-221"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf70befc43b57",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf70befc43b57",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d1a34ece2
                    },
                    "e-223": {
                        id: "e-223",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-119",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-224"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d1a62db5a
                    },
                    "e-225": {
                        id: "e-225",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-120",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small"],
                        target: {
                            selector: ".link-over-card",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".link-over-card",
                            originalId: "63bf33f53bdbf763cdc43b62|b4b1e096-d65b-f5bb-b528-d68ceafe8e9a",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-120-p",
                            smoothing: 70,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17d1eef03b2
                    },
                    "e-228": {
                        id: "e-228",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-123",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-227"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "63bf33f53bdbf763cdc43b62",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf763cdc43b62",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d1f1bd33d
                    },
                    "e-230": {
                        id: "e-230",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_FINISH",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-122",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-229"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf763cdc43b62",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf763cdc43b62",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x17d1f2b598f
                    },
                    "e-232": {
                        id: "e-232",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-233"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".img-cta-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|5b9c2e9d-2b57-efe5-41ac-6218cd7b9f16",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".img-cta-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|5b9c2e9d-2b57-efe5-41ac-6218cd7b9f16",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x17d3f9a9ba2
                    },
                    "e-233": {
                        id: "e-233",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeOut",
                                autoStopEventId: "e-232"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".img-cta-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|5b9c2e9d-2b57-efe5-41ac-6218cd7b9f16",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".img-cta-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|5b9c2e9d-2b57-efe5-41ac-6218cd7b9f16",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !1
                        },
                        createdOn: 0x17d3f9a9ba4
                    },
                    "e-234": {
                        id: "e-234",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-235"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".img-col",
                            originalId: "63bf33f53bdbf70befc43b57|dd46270e-a928-d9a4-c203-bfae5213d2d4",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".img-col",
                            originalId: "63bf33f53bdbf70befc43b57|dd46270e-a928-d9a4-c203-bfae5213d2d4",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x17d3f9b0bfa
                    },
                    "e-235": {
                        id: "e-235",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeOut",
                                autoStopEventId: "e-234"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".img-col",
                            originalId: "63bf33f53bdbf70befc43b57|dd46270e-a928-d9a4-c203-bfae5213d2d4",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".img-col",
                            originalId: "63bf33f53bdbf70befc43b57|dd46270e-a928-d9a4-c203-bfae5213d2d4",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !1
                        },
                        createdOn: 0x17d3f9b0bfb
                    },
                    "e-236": {
                        id: "e-236",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-237"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".proj-img-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|699af98d-8baa-a941-b1d7-fc41504db08d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".proj-img-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|699af98d-8baa-a941-b1d7-fc41504db08d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x17d3f9b634c
                    },
                    "e-237": {
                        id: "e-237",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_OUT_OF_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeOut",
                                autoStopEventId: "e-236"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".proj-img-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|699af98d-8baa-a941-b1d7-fc41504db08d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".proj-img-wrap",
                            originalId: "63bf33f53bdbf70befc43b57|699af98d-8baa-a941-b1d7-fc41504db08d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: null,
                            effectIn: !1
                        },
                        createdOn: 0x17d3f9b634d
                    },
                    "e-238": {
                        id: "e-238",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-124",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".img-cover.main",
                            originalId: "63bf33f53bdbf70befc43b57|c029ec74-3d0e-c57c-614d-3aea3220414c",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".img-cover.main",
                            originalId: "63bf33f53bdbf70befc43b57|c029ec74-3d0e-c57c-614d-3aea3220414c",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-124-p",
                            smoothing: 70,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x17d82cd7dbe
                    },
                    "e-241": {
                        id: "e-241",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-128",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-242"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: 0,
                            direction: null,
                            effectIn: !1
                        },
                        createdOn: 0x187c0e96ca5
                    },
                    "e-242": {
                        id: "e-242",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-129",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-241"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x187c0e96ca5
                    },
                    "e-243": {
                        id: "e-243",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-128",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-244"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7318ec14-7928-9751-cd88-7471a96783f7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7318ec14-7928-9751-cd88-7471a96783f7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: 0,
                            direction: null,
                            effectIn: !1
                        },
                        createdOn: 0x18b884104f5
                    },
                    "e-244": {
                        id: "e-244",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-129",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-243"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|7318ec14-7928-9751-cd88-7471a96783f7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|7318ec14-7928-9751-cd88-7471a96783f7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b884104f5
                    },
                    "e-245": {
                        id: "e-245",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-128",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-246"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|41613fdb-53d6-b891-7e8b-2bb9a0d42263",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|41613fdb-53d6-b891-7e8b-2bb9a0d42263",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: 0,
                            direction: null,
                            effectIn: !1
                        },
                        createdOn: 0x18b884d5b34
                    },
                    "e-246": {
                        id: "e-246",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-129",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-245"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63bf33f53bdbf7b15ec43b4f|41613fdb-53d6-b891-7e8b-2bb9a0d42263",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63bf33f53bdbf7b15ec43b4f|41613fdb-53d6-b891-7e8b-2bb9a0d42263",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18b884d5b34
                    }
                },
                actionLists: {
                    "a-48": {
                        id: "a-48",
                        title: "text-loop",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-48-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-48-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e4,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    xValue: -150.4,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-48-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b5b340bf4
                    },
                    "a-25": {
                        id: "a-25",
                        title: "D | Mouse Hover Cursor IN",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-25-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {},
                                    widthValue: 70,
                                    heightValue: 70,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a5258ab90
                    },
                    "a-26": {
                        id: "a-26",
                        title: "D | Mouse Hover Cursor OUT",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-26-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {},
                                    widthValue: 20,
                                    heightValue: 20,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a5258ab90
                    },
                    "a-31": {
                        id: "a-31",
                        title: "text scroll",
                        continuousParameterGroups: [{
                            id: "a-31-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-31-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".text-scroll-move",
                                            selectorGuids: ["f11ab94f-fa90-826e-a50f-18d6fb11a7bd"]
                                        },
                                        xValue: 0,
                                        xUnit: "px",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-31-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".text-scroll-move.offset",
                                            selectorGuids: ["f11ab94f-fa90-826e-a50f-18d6fb11a7bd", "4b066823-0b67-36cc-5c56-5b475c472cae"]
                                        },
                                        xValue: 0,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-31-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "inOutCirc",
                                        duration: 500,
                                        target: {
                                            selector: ".text-scroll-move",
                                            selectorGuids: ["f11ab94f-fa90-826e-a50f-18d6fb11a7bd"]
                                        },
                                        xValue: -100,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-31-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".text-scroll-move.offset",
                                            selectorGuids: ["f11ab94f-fa90-826e-a50f-18d6fb11a7bd", "4b066823-0b67-36cc-5c56-5b475c472cae"]
                                        },
                                        xValue: 50,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17b46937b61
                    },
                    "a-33": {
                        id: "a-33",
                        title: "column reveal",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-33-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid-fields",
                                        selectorGuids: ["46c99961-b233-1e8b-f6b9-67ddab32b719"]
                                    },
                                    yValue: 65,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid-fields",
                                        selectorGuids: ["46c99961-b233-1e8b-f6b9-67ddab32b719"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|9a681b3a-eda7-6923-933f-0e53c38efc8d"
                                    },
                                    xValue: -800,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|4d575f90-5f93-942d-33ed-bfc5cc8b340d"
                                    },
                                    xValue: -800,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|04b8199f-0151-6a1f-4173-12f8695540fb"
                                    },
                                    xValue: -800,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|f21e7117-24d1-6847-782b-e7ac637c233f"
                                    },
                                    xValue: -800,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|a337cf62-0ef4-a690-db0f-4d20f1740972"
                                    },
                                    xValue: -800,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {},
                                    yValue: 65,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|ec07025f-785d-e7a7-5c88-4f628bf2391b"
                                    },
                                    xValue: -800,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-33-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|ec07025f-785d-e7a7-5c88-4f628bf2391b"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|9a681b3a-eda7-6923-933f-0e53c38efc8d"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 700,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|4d575f90-5f93-942d-33ed-bfc5cc8b340d"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 800,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|04b8199f-0151-6a1f-4173-12f8695540fb"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 900,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|f21e7117-24d1-6847-782b-e7ac637c233f"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 900,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        id: "63bf33f53bdbf7b15ec43b4f|a337cf62-0ef4-a690-db0f-4d20f1740972"
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 1e3,
                                    easing: "outCirc",
                                    duration: 2e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid-fields",
                                        selectorGuids: ["46c99961-b233-1e8b-f6b9-67ddab32b719"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-33-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid-fields",
                                        selectorGuids: ["46c99961-b233-1e8b-f6b9-67ddab32b719"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17b4b0fba86
                    },
                    "a-37": {
                        id: "a-37",
                        title: "parallax",
                        continuousParameterGroups: [{
                            id: "a-37-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-37-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: 40,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-37-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: -153,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-37-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            id: "63bf33f53bdbf76219c43b56|739ef043-1637-b569-3c77-4b1ae6994d4e"
                                        },
                                        yValue: -97,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-37-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: 161,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-37-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        yValue: -97,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 97,
                                actionItems: [{
                                    id: "a-37-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            id: "63bf33f53bdbf76219c43b56|739ef043-1637-b569-3c77-4b1ae6994d4e"
                                        },
                                        yValue: 363,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 98,
                                actionItems: [{
                                    id: "a-37-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        yValue: 113,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-37-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outCirc",
                                        duration: 500,
                                        target: {},
                                        yValue: 73,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-37-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        yValue: -218,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-37-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {},
                                        yValue: -56,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17b4cd61929
                    },
                    "a-38": {
                        id: "a-38",
                        title: "box-expand",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-38-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "PARENT",
                                        id: "63bf33f53bdbf76219c43b56|9eef3671-2de1-8285-b02b-38fa2e91885e"
                                    },
                                    xValue: .9,
                                    yValue: .9,
                                    locked: !0
                                }
                            }, {
                                id: "a-38-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-sections",
                                        selectorGuids: ["a556c437-1347-0f5a-6a59-30fb9272e6d8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-38-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inOutExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "PARENT",
                                        id: "63bf33f53bdbf76219c43b56|9eef3671-2de1-8285-b02b-38fa2e91885e"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-38-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-sections",
                                        selectorGuids: ["a556c437-1347-0f5a-6a59-30fb9272e6d8"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17b4d067f11
                    },
                    "a-39": {
                        id: "a-39",
                        title: "reveal",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-39-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-section-head",
                                        selectorGuids: ["88f4a745-f1bb-88a1-3759-80703ba1d4b2"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-section-head",
                                        selectorGuids: ["88f4a745-f1bb-88a1-3759-80703ba1d4b2"]
                                    },
                                    xValue: null,
                                    yValue: 50,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    yValue: 18,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-block-head",
                                        selectorGuids: ["c85c51b0-8246-4ba7-ad2a-6bffbe0ee41c"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-text",
                                        selectorGuids: ["c8444421-a360-139e-09cc-fb1ebcf83bb8"]
                                    },
                                    yValue: 24,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-text",
                                        selectorGuids: ["c8444421-a360-139e-09cc-fb1ebcf83bb8"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".div-line",
                                        selectorGuids: ["c6d151a5-b783-7403-bc4e-ca311d72d9fc"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-39-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-block-head",
                                        selectorGuids: ["c85c51b0-8246-4ba7-ad2a-6bffbe0ee41c"]
                                    },
                                    yValue: 30,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-section-head",
                                        selectorGuids: ["88f4a745-f1bb-88a1-3759-80703ba1d4b2"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-39-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-section-head",
                                        selectorGuids: ["88f4a745-f1bb-88a1-3759-80703ba1d4b2"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-block-head",
                                        selectorGuids: ["c85c51b0-8246-4ba7-ad2a-6bffbe0ee41c"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-block-head",
                                        selectorGuids: ["c85c51b0-8246-4ba7-ad2a-6bffbe0ee41c"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".div-line",
                                        selectorGuids: ["c6d151a5-b783-7403-bc4e-ca311d72d9fc"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-39-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-text",
                                        selectorGuids: ["c8444421-a360-139e-09cc-fb1ebcf83bb8"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-39-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-text",
                                        selectorGuids: ["c8444421-a360-139e-09cc-fb1ebcf83bb8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17b4d178fa3
                    },
                    "a-40": {
                        id: "a-40",
                        title: "reveal 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-40-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-section-head",
                                        selectorGuids: ["88f4a745-f1bb-88a1-3759-80703ba1d4b2"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-22",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-24",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-28",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-list",
                                        selectorGuids: ["72f68e83-0cac-99ca-e687-93dc169ffaad"]
                                    },
                                    yValue: 24,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-26",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-list",
                                        selectorGuids: ["72f68e83-0cac-99ca-e687-93dc169ffaad"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-40-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-section-head",
                                        selectorGuids: ["88f4a745-f1bb-88a1-3759-80703ba1d4b2"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-25",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-23",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".xp-subhead",
                                        selectorGuids: ["d76b93ff-b54b-2807-b436-1836a421179d"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-40-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-list",
                                        selectorGuids: ["72f68e83-0cac-99ca-e687-93dc169ffaad"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-27",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".resume-list",
                                        selectorGuids: ["72f68e83-0cac-99ca-e687-93dc169ffaad"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17b4d178fa3
                    },
                    "a-41": {
                        id: "a-41",
                        title: "D | Hover Nav Slider Left IN 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-41-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-left-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db95"]
                                    },
                                    xValue: -5,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-41-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-left-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db95"]
                                    },
                                    xValue: -83,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17a4820a716
                    },
                    "a-42": {
                        id: "a-42",
                        title: "D | Hover Nav Slider Left OUT 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-42-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-left-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db95"]
                                    },
                                    xValue: -5,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a4820a716
                    },
                    "a-43": {
                        id: "a-43",
                        title: "D | Hover Nav Slider Right IN 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-43-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-right-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db91"]
                                    },
                                    xValue: 5,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-right-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db91"]
                                    },
                                    zValue: -180,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-43-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-right-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db91"]
                                    },
                                    xValue: 83,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17a48315a93
                    },
                    "a-44": {
                        id: "a-44",
                        title: "D | Hover Nav Slider Right OUT 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-right-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db91"]
                                    },
                                    xValue: 5,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-44-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".wrapper-icon-right-2",
                                        selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db91"]
                                    },
                                    zValue: -180,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17a48315a93
                    },
                    "a-46": {
                        id: "a-46",
                        title: "home-parallax",
                        continuousParameterGroups: [{
                            id: "a-46-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-46-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".img-container",
                                            selectorGuids: ["7b462d77-f324-aff9-0d97-155458b700ba"]
                                        },
                                        yValue: 129,
                                        zValue: null,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "px"
                                    }
                                }, {
                                    id: "a-46-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".home-small-img",
                                            selectorGuids: ["46bec18e-f62d-bb82-6d4d-da151caa49ed"]
                                        },
                                        yValue: 450,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-46-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".img-container",
                                            selectorGuids: ["7b462d77-f324-aff9-0d97-155458b700ba"]
                                        },
                                        yValue: -290,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-46-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".home-small-img",
                                            selectorGuids: ["46bec18e-f62d-bb82-6d4d-da151caa49ed"]
                                        },
                                        yValue: -700,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17b5567354d
                    },
                    "a-108": {
                        id: "a-108",
                        title: "text-loop 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-108-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".text-animate-two",
                                        selectorGuids: ["b3975565-bf25-c117-18d7-46d66cdde92e"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-108-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e4,
                                    target: {
                                        selector: ".text-animate-two",
                                        selectorGuids: ["b3975565-bf25-c117-18d7-46d66cdde92e"]
                                    },
                                    xValue: -150.4,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-108-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".text-animate-two",
                                        selectorGuids: ["b3975565-bf25-c117-18d7-46d66cdde92e"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b5b340bf4
                    },
                    "a-52": {
                        id: "a-52",
                        title: "Link Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-52-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".link_move",
                                        selectorGuids: ["8ea7b95b-7fee-4c49-18fe-39fb0ff5d8de"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".link_move",
                                        selectorGuids: ["8ea7b95b-7fee-4c49-18fe-39fb0ff5d8de"]
                                    },
                                    yValue: -130,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-52-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    locked: !0
                                }
                            }, {
                                id: "a-52-n-4",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    globalSwatchId: "f6197f66",
                                    rValue: 225,
                                    bValue: 0,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-52-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: .2,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x179c902ff0d
                    },
                    "a-53": {
                        id: "a-53",
                        title: "Link Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".link_move",
                                        selectorGuids: ["8ea7b95b-7fee-4c49-18fe-39fb0ff5d8de"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-53-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-53-n-3",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 0
                                }
                            }, {
                                id: "a-53-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x179c902ff0d
                    },
                    "a-58": {
                        id: "a-58",
                        title: "Cursor move",
                        continuousParameterGroups: [{
                            id: "a-58-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-58-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_dot",
                                            selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                        },
                                        xValue: -50,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_hover",
                                            selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                        },
                                        xValue: -50,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor-drag",
                                            selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                        },
                                        xValue: -50,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-58-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_dot",
                                            selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                        },
                                        xValue: 50,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_hover",
                                            selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                        },
                                        xValue: 50,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor-drag",
                                            selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                        },
                                        xValue: 50,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-58-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-58-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_dot",
                                            selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_hover",
                                            selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor-drag",
                                            selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-58-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_dot",
                                            selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor_hover",
                                            selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                        },
                                        xValue: null,
                                        yValue: 50,
                                        xUnit: "vh",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-58-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".cursor-drag",
                                            selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                        },
                                        yValue: 50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17bd11047bd
                    },
                    "a-70": {
                        id: "a-70",
                        title: "nav-link-rotate-in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-70-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-25",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .25, .75, .75],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-26",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-28",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-33",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-34",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-70-n-9",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--1st",
                                        selectorGuids: ["2e634cea-ab3f-05b3-f53b-7f6a11ca8b63"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--1st",
                                        selectorGuids: ["2e634cea-ab3f-05b3-f53b-7f6a11ca8b63"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-17",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--2nd",
                                        selectorGuids: ["26000310-24a8-f653-9d09-57d3d72873ad"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--2nd",
                                        selectorGuids: ["26000310-24a8-f653-9d09-57d3d72873ad"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-19",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-13",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--3rd",
                                        selectorGuids: ["804b6253-8d33-9fb9-28ea-32cbb331be5b"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--3rd",
                                        selectorGuids: ["804b6253-8d33-9fb9-28ea-32cbb331be5b"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-21",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-15",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--4th",
                                        selectorGuids: ["6d59ac2e-3696-31c9-6dd0-c6c75ea3cd2b"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--4th",
                                        selectorGuids: ["6d59ac2e-3696-31c9-6dd0-c6c75ea3cd2b"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-23",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-24",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-31",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--space",
                                        selectorGuids: ["4d784ad9-48c0-cafc-520b-57d16bf852a9"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-32",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--space",
                                        selectorGuids: ["4d784ad9-48c0-cafc-520b-57d16bf852a9"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-35",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-36",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-37",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--5th",
                                        selectorGuids: ["fb9212fc-86ad-f217-e8c0-1dbf282aa4fe"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-38",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--5th",
                                        selectorGuids: ["fb9212fc-86ad-f217-e8c0-1dbf282aa4fe"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-39",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-40",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-41",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--6th",
                                        selectorGuids: ["d5573a45-7c7b-7731-b4a0-7e3b5c9e957e"]
                                    },
                                    xValue: 90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-42",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--6th",
                                        selectorGuids: ["d5573a45-7c7b-7731-b4a0-7e3b5c9e957e"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-43",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-70-n-44",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17c472a8c48
                    },
                    "a-71": {
                        id: "a-71",
                        title: "nav-link-rotate-out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-71-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-7",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-9",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.25, .25, .75, .75],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-13",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-71-n-15",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--1st",
                                        selectorGuids: ["2e634cea-ab3f-05b3-f53b-7f6a11ca8b63"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--1st",
                                        selectorGuids: ["2e634cea-ab3f-05b3-f53b-7f6a11ca8b63"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-17",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--1st",
                                        selectorGuids: ["630b35b2-f39e-8e2b-7d46-88c45e57552d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-19",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--2nd",
                                        selectorGuids: ["26000310-24a8-f653-9d09-57d3d72873ad"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--2nd",
                                        selectorGuids: ["26000310-24a8-f653-9d09-57d3d72873ad"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-21",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--2nd",
                                        selectorGuids: ["a5af8fe7-2647-f472-bfeb-5ac28d998722"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-23",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--3rd",
                                        selectorGuids: ["804b6253-8d33-9fb9-28ea-32cbb331be5b"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-24",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--3rd",
                                        selectorGuids: ["804b6253-8d33-9fb9-28ea-32cbb331be5b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-25",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-26",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--3rd",
                                        selectorGuids: ["54a9e7d7-e81f-ef48-9bea-57625078e3bc"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-27",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--4th",
                                        selectorGuids: ["6d59ac2e-3696-31c9-6dd0-c6c75ea3cd2b"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-28",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--4th",
                                        selectorGuids: ["6d59ac2e-3696-31c9-6dd0-c6c75ea3cd2b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-29",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--4th",
                                        selectorGuids: ["d7d519f4-97d5-f97f-20b0-98955c591c1a"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-31",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--space",
                                        selectorGuids: ["4d784ad9-48c0-cafc-520b-57d16bf852a9"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-32",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--space",
                                        selectorGuids: ["4d784ad9-48c0-cafc-520b-57d16bf852a9"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-33",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-34",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate-space",
                                        selectorGuids: ["77be5210-6cc9-2aa3-534b-456e165c1ada"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-35",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--5th",
                                        selectorGuids: ["fb9212fc-86ad-f217-e8c0-1dbf282aa4fe"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-36",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--5th",
                                        selectorGuids: ["fb9212fc-86ad-f217-e8c0-1dbf282aa4fe"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-37",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-38",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--5th",
                                        selectorGuids: ["f431f06b-8a16-d45e-1f06-fa688096f40d"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-39",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--6th",
                                        selectorGuids: ["d5573a45-7c7b-7731-b4a0-7e3b5c9e957e"]
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-40",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".rotate--6th",
                                        selectorGuids: ["d5573a45-7c7b-7731-b4a0-7e3b5c9e957e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-41",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    xValue: -90,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-71-n-42",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".hidden-rotate--6th",
                                        selectorGuids: ["ac3bfe4d-b110-0cb4-91a1-5c3fc6fdc43c"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17c472a8c48
                    },
                    "a-59": {
                        id: "a-59",
                        title: "Cursor grow",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-59-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    locked: !0
                                }
                            }, {
                                id: "a-59-n-2",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    globalSwatchId: "f6197f66",
                                    rValue: 225,
                                    bValue: 0,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-59-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: .2,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17bd116034e
                    },
                    "a-73": {
                        id: "a-73",
                        title: "Cursor shrink",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-73-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-73-n-2",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 0
                                }
                            }, {
                                id: "a-73-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17bd116034e
                    },
                    "a-80": {
                        id: "a-80",
                        title: "Project hover IN",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-80-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-title.desktop",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "7d34dbb8-d132-85f3-d8cc-b2e1a801e676"]
                                    },
                                    yValue: 150,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-year.desktop",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5", "916328d9-2358-2767-8538-daf3a12851e8"]
                                    },
                                    xValue: null,
                                    yValue: 100,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-client.desktop",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab", "c99c2592-ebb9-4e10-d04a-942b11c94845"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-12",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-title.desktop",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "7d34dbb8-d132-85f3-d8cc-b2e1a801e676"]
                                    },
                                    xValue: 9,
                                    yValue: 4,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-80-n-15",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-80-n-21",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-arrow",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img-wrap",
                                        selectorGuids: ["7556d33b-5490-5f5e-5792-68b130b221f4"]
                                    },
                                    value: .4,
                                    unit: ""
                                }
                            }, {
                                id: "a-80-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-title.desktop",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "7d34dbb8-d132-85f3-d8cc-b2e1a801e676"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-year.desktop",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5", "916328d9-2358-2767-8538-daf3a12851e8"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-client.desktop",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab", "c99c2592-ebb9-4e10-d04a-942b11c94845"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-80-n-13",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-title.desktop",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "7d34dbb8-d132-85f3-d8cc-b2e1a801e676"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-80-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-80-n-22",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-arrow",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-81": {
                        id: "a-81",
                        title: "Project hover OUT",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-81-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-title",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a"]
                                    },
                                    yValue: 150,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-81-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-year",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5"]
                                    },
                                    xValue: null,
                                    yValue: 100,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-81-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-client",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-81-n-5",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-title",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a"]
                                    },
                                    xValue: 9,
                                    yValue: 4,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-81-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-81-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img-wrap",
                                        selectorGuids: ["7556d33b-5490-5f5e-5792-68b130b221f4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-81-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".circle-arrow",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-82": {
                        id: "a-82",
                        title: "project-img-cursor",
                        continuousParameterGroups: [{
                            id: "a-82-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-82-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-title-wrap.desktop",
                                            selectorGuids: ["d697019c-a232-5ecc-fd29-7de3de6c52cb", "016cc364-42f5-9dfc-cd7e-96c7222a29aa"]
                                        },
                                        xValue: -2,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-82-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-img-wrap",
                                            selectorGuids: ["7556d33b-5490-5f5e-5792-68b130b221f4"]
                                        },
                                        xValue: null,
                                        yValue: 20,
                                        xUnit: "deg",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-82-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-title-wrap.desktop",
                                            selectorGuids: ["d697019c-a232-5ecc-fd29-7de3de6c52cb", "016cc364-42f5-9dfc-cd7e-96c7222a29aa"]
                                        },
                                        xValue: 2,
                                        yValue: null,
                                        xUnit: "vw",
                                        yUnit: "px",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-82-n-6",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-img-wrap",
                                            selectorGuids: ["7556d33b-5490-5f5e-5792-68b130b221f4"]
                                        },
                                        xValue: null,
                                        yValue: -20,
                                        xUnit: "deg",
                                        yUnit: "deg",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-82-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-82-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-title-wrap.desktop",
                                            selectorGuids: ["d697019c-a232-5ecc-fd29-7de3de6c52cb", "016cc364-42f5-9dfc-cd7e-96c7222a29aa"]
                                        },
                                        yValue: -2,
                                        xUnit: "PX",
                                        yUnit: "vw",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-82-n-7",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-img-wrap",
                                            selectorGuids: ["7556d33b-5490-5f5e-5792-68b130b221f4"]
                                        },
                                        xValue: 20,
                                        xUnit: "deg",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-82-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-title-wrap.desktop",
                                            selectorGuids: ["d697019c-a232-5ecc-fd29-7de3de6c52cb", "016cc364-42f5-9dfc-cd7e-96c7222a29aa"]
                                        },
                                        yValue: 2,
                                        xUnit: "PX",
                                        yUnit: "vw",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-82-n-8",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-img-wrap",
                                            selectorGuids: ["7556d33b-5490-5f5e-5792-68b130b221f4"]
                                        },
                                        xValue: -20,
                                        xUnit: "deg",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17cb38f46b9
                    },
                    "a-85": {
                        id: "a-85",
                        title: "Feat hover IN",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-85-n-12",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-85-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 10,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-85-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 15,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-85-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-description",
                                        selectorGuids: ["6e097778-63aa-06b9-2d35-e1cac07e7410"]
                                    },
                                    xValue: 10,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-88": {
                        id: "a-88",
                        title: "Feat hover OUT",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-88-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-88-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-88-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-88-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-description",
                                        selectorGuids: ["6e097778-63aa-06b9-2d35-e1cac07e7410"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-87": {
                        id: "a-87",
                        title: "cursor IN",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-87-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor-drag",
                                        selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-87-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    locked: !0
                                }
                            }, {
                                id: "a-87-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-87-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor-drag",
                                        selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-87-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 800,
                                    target: {
                                        selector: ".cursor-drag",
                                        selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-86": {
                        id: "a-86",
                        title: "cursor OUT",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-86-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 800,
                                    target: {
                                        selector: ".cursor-drag",
                                        selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-86-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor-drag",
                                        selectorGuids: ["72623151-1be7-a2ae-1da6-7fc6f8de5c3a"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-86-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-86-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 200,
                                    easing: "outCirc",
                                    duration: 300,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-89": {
                        id: "a-89",
                        title: "Featured title",
                        continuousParameterGroups: [{
                            id: "a-89-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-89-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".featured-header-container",
                                            selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db92"]
                                        },
                                        xValue: null,
                                        yValue: 70,
                                        xUnit: "px",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-89-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".featured-header-container",
                                            selectorGuids: ["e8a5e6b9-45e8-890d-53db-ca6b12c5db92"]
                                        },
                                        yValue: -30,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17cb52694fa
                    },
                    "a-90": {
                        id: "a-90",
                        title: "Feat hover IN 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-90-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-90-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 10,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-90-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 15,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-91": {
                        id: "a-91",
                        title: "Feat hover OUT 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-91-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-91-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-91-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-93": {
                        id: "a-93",
                        title: "Link Hover In 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-93-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".link_move",
                                        selectorGuids: ["8ea7b95b-7fee-4c49-18fe-39fb0ff5d8de"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-93-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".link_move",
                                        selectorGuids: ["8ea7b95b-7fee-4c49-18fe-39fb0ff5d8de"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x179c902ff0d
                    },
                    "a-94": {
                        id: "a-94",
                        title: "Link Hover Out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-94-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".link_move",
                                        selectorGuids: ["8ea7b95b-7fee-4c49-18fe-39fb0ff5d8de"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x179c902ff0d
                    },
                    "a-95": {
                        id: "a-95",
                        title: "Field In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-95-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c"
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-95-n-2",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c"
                                    },
                                    value: 99
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x179c9961929
                    },
                    "a-96": {
                        id: "a-96",
                        title: "Field Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-96-n",
                                actionTypeId: "PLUGIN_LOTTIE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf748adc43b59|d9e83a84-0bbf-2dc3-452f-0c48c9b6eb7c"
                                    },
                                    value: 0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x179c9961929
                    },
                    "a-56": {
                        id: "a-56",
                        title: "Submit In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-56-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 600,
                                    target: {},
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 100,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x179c9d5dc9e
                    },
                    "a-98": {
                        id: "a-98",
                        title: "Submit Out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-98-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 600,
                                    target: {},
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-98-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 100,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x179c9d5dc9e
                    },
                    "a-99": {
                        id: "a-99",
                        title: "text-loop-about",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-99-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".text-animate",
                                        selectorGuids: ["324a86de-7860-47ca-e47b-b731d3a96e3f"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-99-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e4,
                                    target: {
                                        selector: ".text-animate",
                                        selectorGuids: ["324a86de-7860-47ca-e47b-b731d3a96e3f"]
                                    },
                                    xValue: -134.25,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-99-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".text-animate",
                                        selectorGuids: ["324a86de-7860-47ca-e47b-b731d3a96e3f"]
                                    },
                                    xValue: 0,
                                    xUnit: "vw",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b5b340bf4
                    },
                    "a-101": {
                        id: "a-101",
                        title: "img load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-101-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".img-cover",
                                        selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71"]
                                    },
                                    yValue: 110,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-101-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 110,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-101-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf76503c43b54|323ee6da-a555-4607-a097-5b62ef1d9bda"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-101-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf76503c43b54|323ee6da-a555-4607-a097-5b62ef1d9bda"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-101-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".img-cover",
                                        selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-101-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-101-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-101-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17cd2e7dc88
                    },
                    "a-100": {
                        id: "a-100",
                        title: "img track",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-100-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "63bf33f53bdbf76503c43b54|6d09576a-52ee-d96a-73eb-52b115264d0a"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-100-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 25e3,
                                    target: {
                                        id: "63bf33f53bdbf76503c43b54|6d09576a-52ee-d96a-73eb-52b115264d0a"
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-100-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        id: "63bf33f53bdbf76503c43b54|6d09576a-52ee-d96a-73eb-52b115264d0a"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cd2e61e92
                    },
                    a: {
                        id: "a",
                        title: "Circle_rotate",
                        continuousParameterGroups: [{
                            id: "a-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "63bf33f53bdbf7b15ec43b4f|7555d8df-7d4e-bfd9-63ac-ddedf8e738e0"
                                        },
                                        zValue: -90,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "63bf33f53bdbf7b15ec43b4f|7555d8df-7d4e-bfd9-63ac-ddedf8e738e0"
                                        },
                                        zValue: 90,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17b0d575d5f
                    },
                    "a-102": {
                        id: "a-102",
                        title: "menu-open 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-102-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-link",
                                        selectorGuids: ["9551b85b-e8ff-8432-69bd-0c9cd8be0f0a"]
                                    },
                                    yValue: 130,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".contact-wrapper",
                                        selectorGuids: ["010c7ded-77fa-ee50-8f53-c753fc7ba9c4"]
                                    },
                                    yValue: 150,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".social-wrap",
                                        selectorGuids: ["e1a6138a-3763-0dc7-add6-bc40b723c117"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".number",
                                        selectorGuids: ["685ecf9a-d4ce-ce1a-0f74-99c2938d1edc"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-102-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".takeover",
                                        selectorGuids: ["c560bb1a-82ac-c49e-97ef-097e282be9df"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".takeover",
                                        selectorGuids: ["c560bb1a-82ac-c49e-97ef-097e282be9df"]
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-102-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".takeover",
                                        selectorGuids: ["c560bb1a-82ac-c49e-97ef-097e282be9df"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-102-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.425, .005, 0, 1],
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".takeover",
                                        selectorGuids: ["c560bb1a-82ac-c49e-97ef-097e282be9df"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-9",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-top",
                                        selectorGuids: ["bf18c7c4-a58e-8948-8ca7-6a74b020486f"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-102-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-top",
                                        selectorGuids: ["bf18c7c4-a58e-8948-8ca7-6a74b020486f"]
                                    },
                                    yValue: 4,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-11",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-bottom",
                                        selectorGuids: ["ad9359c3-287f-d5e9-a7fc-a4970ee9f07c"]
                                    },
                                    zValue: -45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-102-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-bottom",
                                        selectorGuids: ["ad9359c3-287f-d5e9-a7fc-a4970ee9f07c"]
                                    },
                                    yValue: -4,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: [.25, .1, .25, 1],
                                    duration: 1500,
                                    target: {
                                        selector: ".number",
                                        selectorGuids: ["685ecf9a-d4ce-ce1a-0f74-99c2938d1edc"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-102-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 500,
                                    target: {
                                        selector: ".nav-link",
                                        selectorGuids: ["9551b85b-e8ff-8432-69bd-0c9cd8be0f0a"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: [.425, .005, 0, 1],
                                    duration: 1500,
                                    target: {
                                        selector: ".social-wrap",
                                        selectorGuids: ["e1a6138a-3763-0dc7-add6-bc40b723c117"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-102-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: [.425, .005, 0, 1],
                                    duration: 1500,
                                    target: {
                                        selector: ".contact-wrapper",
                                        selectorGuids: ["010c7ded-77fa-ee50-8f53-c753fc7ba9c4"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17b1890f28a
                    },
                    "a-103": {
                        id: "a-103",
                        title: "menu-close 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-103-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-bottom",
                                        selectorGuids: ["ad9359c3-287f-d5e9-a7fc-a4970ee9f07c"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-103-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-bottom",
                                        selectorGuids: ["ad9359c3-287f-d5e9-a7fc-a4970ee9f07c"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-103-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-top",
                                        selectorGuids: ["bf18c7c4-a58e-8948-8ca7-6a74b020486f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "px",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-103-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "inOutBack",
                                    duration: 600,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu-top",
                                        selectorGuids: ["bf18c7c4-a58e-8948-8ca7-6a74b020486f"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-103-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".number",
                                        selectorGuids: ["685ecf9a-d4ce-ce1a-0f74-99c2938d1edc"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-103-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".social-wrap",
                                        selectorGuids: ["e1a6138a-3763-0dc7-add6-bc40b723c117"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-103-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".contact-wrapper",
                                        selectorGuids: ["010c7ded-77fa-ee50-8f53-c753fc7ba9c4"]
                                    },
                                    yValue: 150,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-103-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: "inQuart",
                                    duration: 500,
                                    target: {
                                        selector: ".nav-link",
                                        selectorGuids: ["9551b85b-e8ff-8432-69bd-0c9cd8be0f0a"]
                                    },
                                    yValue: 120,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-103-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 250,
                                    easing: [.425, .005, 0, 1],
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".takeover",
                                        selectorGuids: ["c560bb1a-82ac-c49e-97ef-097e282be9df"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17b1890f28a
                    },
                    "a-104": {
                        id: "a-104",
                        title: "Feat hover IN 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-104-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-104-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 10,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-104-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 15,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-105": {
                        id: "a-105",
                        title: "Feat hover OUT 3",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-105-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-105-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-105-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-106": {
                        id: "a-106",
                        title: "Feat hover IN 4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-106-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-106-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 10,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-106-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 15,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-107": {
                        id: "a-107",
                        title: "Feat hover OUT 4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-107-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-107-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".card-title-arrow",
                                        selectorGuids: ["7cf6a495-9edf-c221-603e-8bd99ea2d4c0"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-107-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".arrow-cta",
                                        selectorGuids: ["34fccf05-aa37-538d-c46d-f74f64f54910"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-113": {
                        id: "a-113",
                        title: "NEXT hover IN",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-113-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".next-img",
                                        selectorGuids: ["5a979474-ebcb-f9fc-636b-cbd652b6ebb7"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-113-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_hover",
                                        selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-113-n-12",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outBack",
                                    duration: 1e3,
                                    target: {
                                        selector: ".next-img",
                                        selectorGuids: ["5a979474-ebcb-f9fc-636b-cbd652b6ebb7"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }, {
                                id: "a-113-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 2,
                                    yValue: 2,
                                    locked: !0
                                }
                            }, {
                                id: "a-113-n-14",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-113-n-15",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor_hover",
                                        selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-113-n-16",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCirc",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_hover",
                                        selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-113-n-17",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-114": {
                        id: "a-114",
                        title: "NEXT hover OUT",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-114-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".next-img",
                                        selectorGuids: ["5a979474-ebcb-f9fc-636b-cbd652b6ebb7"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-114-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".cursor_hover",
                                        selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-114-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor_dot",
                                        selectorGuids: ["03fe84f1-77be-8b3f-9e67-87c4c3e971d4"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-114-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cursor_hover",
                                        selectorGuids: ["b9cfe8ff-998c-34bb-f0fe-7264ae7661cb"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17cb376ec5c
                    },
                    "a-115": {
                        id: "a-115",
                        title: "toggle IN",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-115-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".knob",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f1"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-115-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cms-list",
                                        selectorGuids: ["98c406b7-946d-78a1-766b-f3467d08e44a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-115-n-4",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle.grid",
                                        selectorGuids: ["e8a356a7-2084-203a-d9eb-5777ee5a6970", "615fad16-c2e4-8d96-bd53-88f7980f9c08"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .35
                                }
                            }, {
                                id: "a-115-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle.list",
                                        selectorGuids: ["e8a356a7-2084-203a-d9eb-5777ee5a6970", "1a00b1d7-ca1d-a5d7-1816-5d9df825de46"]
                                    },
                                    globalSwatchId: "b2cea693",
                                    rValue: 23,
                                    bValue: 23,
                                    gValue: 23,
                                    aValue: 1
                                }
                            }, {
                                id: "a-115-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".knob",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f1"]
                                    },
                                    xValue: 100,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-115-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".cms-desktop",
                                        selectorGuids: ["8d1e1a89-27eb-5638-f6ab-09b2f549fe93"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-115-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cms-list",
                                        selectorGuids: ["98c406b7-946d-78a1-766b-f3467d08e44a"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-115-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".cms-list",
                                        selectorGuids: ["98c406b7-946d-78a1-766b-f3467d08e44a"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-115-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cms-desktop",
                                        selectorGuids: ["8d1e1a89-27eb-5638-f6ab-09b2f549fe93"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17d0f71cac2
                    },
                    "a-116": {
                        id: "a-116",
                        title: "toggle OUT",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-116-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".knob",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f1"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-116-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle.grid",
                                        selectorGuids: ["e8a356a7-2084-203a-d9eb-5777ee5a6970", "615fad16-c2e4-8d96-bd53-88f7980f9c08"]
                                    },
                                    globalSwatchId: "b2cea693",
                                    rValue: 23,
                                    bValue: 23,
                                    gValue: 23,
                                    aValue: 1
                                }
                            }, {
                                id: "a-116-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".toggle.list",
                                        selectorGuids: ["e8a356a7-2084-203a-d9eb-5777ee5a6970", "1a00b1d7-ca1d-a5d7-1816-5d9df825de46"]
                                    },
                                    globalSwatchId: "",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: .35
                                }
                            }, {
                                id: "a-116-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".cms-list",
                                        selectorGuids: ["98c406b7-946d-78a1-766b-f3467d08e44a"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-116-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".cms-desktop",
                                        selectorGuids: ["8d1e1a89-27eb-5638-f6ab-09b2f549fe93"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-116-n-9",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cms-desktop",
                                        selectorGuids: ["8d1e1a89-27eb-5638-f6ab-09b2f549fe93"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-116-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".cms-list",
                                        selectorGuids: ["98c406b7-946d-78a1-766b-f3467d08e44a"]
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-116-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        selector: ".cms-desktop",
                                        selectorGuids: ["8d1e1a89-27eb-5638-f6ab-09b2f549fe93"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x17d0f71cac2
                    },
                    "a-118": {
                        id: "a-118",
                        title: "project-load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-118-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".h1-project-page",
                                        selectorGuids: ["a182e945-c255-56fd-908c-dceddd73f2b5"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-118-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".h1-project-page",
                                        selectorGuids: ["a182e945-c255-56fd-908c-dceddd73f2b5"]
                                    },
                                    yValue: 50,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-118-n-6",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".h1-project-page",
                                        selectorGuids: ["a182e945-c255-56fd-908c-dceddd73f2b5"]
                                    },
                                    xValue: 18,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-118-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".img-cover",
                                        selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-118-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-118-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".h1-project-page",
                                        selectorGuids: ["a182e945-c255-56fd-908c-dceddd73f2b5"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-118-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".h1-project-page",
                                        selectorGuids: ["a182e945-c255-56fd-908c-dceddd73f2b5"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-118-n-7",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".h1-project-page",
                                        selectorGuids: ["a182e945-c255-56fd-908c-dceddd73f2b5"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-118-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-118-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".img-cover",
                                        selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-118-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-118-n-17",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17d1a351885
                    },
                    "a-119": {
                        id: "a-119",
                        title: "home load",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-119-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".load-swipe",
                                        selectorGuids: ["3308ba18-cbfe-bdd2-2257-a4ec32a92632"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-119-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.four",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "3677a783-3675-fc1b-ee4f-aa43edfd9d5b"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.three",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "8d487838-8bf0-78e9-a398-51effe671d5c"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.two",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "13b9ba81-cfe5-9ae6-3f77-a863a231f2ce"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".loading.one",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "e641585b-4efb-9afd-3333-46db68393ed1"]
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|71e9be33-704d-b100-3601-b22bf8a0125a"
                                    },
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-20",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-29",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    xValue: 20,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-119-n-28",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|71e9be33-704d-b100-3601-b22bf8a0125a"
                                    },
                                    xValue: 20,
                                    yValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-119-n-32",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 110,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-33",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        selector: ".img-cover",
                                        selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71"]
                                    },
                                    yValue: 110,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-38",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|1a73721a-0edd-2b4c-c4ac-039118acee81"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outSine",
                                    duration: 300,
                                    target: {
                                        selector: ".loading.one",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "e641585b-4efb-9afd-3333-46db68393ed1"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-12",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.one",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "e641585b-4efb-9afd-3333-46db68393ed1"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-13",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.two",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "13b9ba81-cfe5-9ae6-3f77-a863a231f2ce"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-15",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.two",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "13b9ba81-cfe5-9ae6-3f77-a863a231f2ce"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-14",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.three",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "8d487838-8bf0-78e9-a398-51effe671d5c"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-16",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.three",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "8d487838-8bf0-78e9-a398-51effe671d5c"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-17",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".loading.four",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "3677a783-3675-fc1b-ee4f-aa43edfd9d5b"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".loading.four",
                                        selectorGuids: ["fb51dfcc-cc62-3b67-87ba-4575d632be51", "3677a783-3675-fc1b-ee4f-aa43edfd9d5b"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-119-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "inOutExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".load-swipe",
                                        selectorGuids: ["3308ba18-cbfe-bdd2-2257-a4ec32a92632"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-18",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".load-swipe",
                                        selectorGuids: ["3308ba18-cbfe-bdd2-2257-a4ec32a92632"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-119-n-23",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-30",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|140c8c4b-e893-3294-3af1-b5576fdbe55c"
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-119-n-22",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|71e9be33-704d-b100-3601-b22bf8a0125a"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-31",
                                actionTypeId: "TRANSFORM_SKEW",
                                config: {
                                    delay: 200,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|71e9be33-704d-b100-3601-b22bf8a0125a"
                                    },
                                    xValue: 0,
                                    xUnit: "deg",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-119-n-34",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-35",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outExpo",
                                    duration: 1200,
                                    target: {
                                        selector: ".img-cover",
                                        selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-119-n-39",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf7b15ec43b4f|1a73721a-0edd-2b4c-c4ac-039118acee81"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-36",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-119-n-37",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17d1a36e30e
                    },
                    "a-120": {
                        id: "a-120",
                        title: "Img move projects list",
                        continuousParameterGroups: [{
                            id: "a-120-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-120-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-img",
                                            selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                        },
                                        xValue: null,
                                        yValue: 6,
                                        xUnit: "px",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-120-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".project-img",
                                            selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                        },
                                        yValue: -15,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17cb3e29b6c
                    },
                    "a-123": {
                        id: "a-123",
                        title: "project list load desktop",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-123-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf763cdc43b62|b3556d5c-0fbf-1367-2fe2-4e50d338ce0a"
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".switch",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f0"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-123-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-123-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 105,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".circle-arrow.cms-tablet",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572", "b81a26e8-8743-aa6b-8894-d4702f24a374"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-123-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-year.cms-tablet",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5", "d6b84e02-64ee-8b1c-adb4-cf2442afdfd0"]
                                    },
                                    xValue: null,
                                    yValue: 100,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-title.cms-tablet",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "9e13a95c-7f3d-eb1d-8101-c11031fc3e8e"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-client.cms-tablet",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab", "f021af02-045e-2d45-1645-d5715998a8e3"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-title-wrap.desktop",
                                        selectorGuids: ["d697019c-a232-5ecc-fd29-7de3de6c52cb", "016cc364-42f5-9dfc-cd7e-96c7222a29aa"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-123-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf763cdc43b62|b3556d5c-0fbf-1367-2fe2-4e50d338ce0a"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        selector: ".switch",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f0"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-123-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-123-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-123-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-title-wrap.desktop",
                                        selectorGuids: ["d697019c-a232-5ecc-fd29-7de3de6c52cb", "016cc364-42f5-9dfc-cd7e-96c7222a29aa"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-123-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".project-year.cms-tablet",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5", "d6b84e02-64ee-8b1c-adb4-cf2442afdfd0"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".project-client.cms-tablet",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab", "f021af02-045e-2d45-1645-d5715998a8e3"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".project-title.cms-tablet",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "9e13a95c-7f3d-eb1d-8101-c11031fc3e8e"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-123-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 800,
                                    target: {
                                        selector: ".circle-arrow.cms-tablet",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572", "b81a26e8-8743-aa6b-8894-d4702f24a374"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-123-n-18",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17d1f123a41
                    },
                    "a-122": {
                        id: "a-122",
                        title: "project list load mobile",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-122-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        id: "63bf33f53bdbf763cdc43b62|b3556d5c-0fbf-1367-2fe2-4e50d338ce0a"
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".switch",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f0"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-122-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-122-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 105,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".circle-arrow",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-122-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-year.desktop",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5", "916328d9-2358-2767-8538-daf3a12851e8"]
                                    },
                                    xValue: null,
                                    yValue: 100,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-title.desktop",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "7d34dbb8-d132-85f3-d8cc-b2e1a801e676"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".project-client.desktop",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab", "c99c2592-ebb9-4e10-d04a-942b11c94845"]
                                    },
                                    yValue: 200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-122-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        id: "63bf33f53bdbf763cdc43b62|b3556d5c-0fbf-1367-2fe2-4e50d338ce0a"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 1e3,
                                    target: {
                                        selector: ".switch",
                                        selectorGuids: ["d7d16d78-a56c-c939-0ebe-dbaeae15f7f0"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-122-n-11",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-122-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".project-img",
                                        selectorGuids: ["799a557e-aeef-ea40-695c-c692678cb00e"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-122-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 800,
                                    target: {
                                        selector: ".circle-arrow",
                                        selectorGuids: ["0e2b6c34-c568-7b07-338c-296ee4c17572"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-122-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".project-year.desktop",
                                        selectorGuids: ["5219e27f-4ff4-556e-f4ac-8a48902323f5", "916328d9-2358-2767-8538-daf3a12851e8"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".project-client.desktop",
                                        selectorGuids: ["1ae07c26-337a-855f-d358-fef9139befab", "c99c2592-ebb9-4e10-d04a-942b11c94845"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-122-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outExpo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".project-title.desktop",
                                        selectorGuids: ["f1002ec7-9060-11e8-406e-a1237434629a", "7d34dbb8-d132-85f3-d8cc-b2e1a801e676"]
                                    },
                                    xValue: null,
                                    yValue: 0,
                                    xUnit: "px",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-122-n-18",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".color-load",
                                        selectorGuids: ["89518166-cb46-ccdd-c2d1-1cf7d54fb1ed"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x17d1f123a41
                    },
                    "a-124": {
                        id: "a-124",
                        title: "img move in frame 2",
                        continuousParameterGroups: [{
                            id: "a-124-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-124-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".img-cover.main",
                                            selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71", "51f9cdac-be39-f42f-2656-e86772fd3a2c"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-124-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".img-cover.main",
                                            selectorGuids: ["20ac05a6-cf71-08f7-63ce-20a4669f8f71", "51f9cdac-be39-f42f-2656-e86772fd3a2c"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x17d17a42929
                    },
                    "a-128": {
                        id: "a-128",
                        title: "More Work Thumbnail - Fade out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-128-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-128-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc"
                                    },
                                    value: .8,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x187c01632d9
                    },
                    "a-129": {
                        id: "a-129",
                        title: "More Work Thumbnail - Fade in 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-129-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc"
                                    },
                                    value: .8,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-129-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "easeInOut",
                                    duration: 200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "63bf33f53bdbf7b15ec43b4f|ff6f3340-addb-574b-7817-ff4a9b9ce0bc"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x187c01882c2
                    },
                    fadeIn: {
                        id: "fadeIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    slideInBottom: {
                        id: "slideInBottom",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    fadeOut: {
                        id: "fadeOut",
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "inQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);