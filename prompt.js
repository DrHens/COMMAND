! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t) {
    var n = $(),
        i = $(),
        a = $(),
        s = $(),
        o = $(),
        X = $(),
        l = $(),
        r = $(),
        d = $(),
        p = $(),
        h = $(),
        c = $(),
        u = $(),
        f = $(),
        m = $(),
        y = $(),
        g = $(),
        v = $(),
        _ = $(),
        x = $(),
        k = $(),
        w = $(),
        b = $(),
        L = $(),
        O = $(),
        T = $(),
        C = $(),
        E = $(),
        M = $(),
        S = $(),
        A = $(),
        D = $(),
        I = $(),
        P = $(),
        q = $(),
        j = $(),
        N = $(),
        R = $(),
        F = $(),
        H = [$(".main_options"), $("#main > #div1"), $("#main > #div2"), $("#main > #scp_logo")],
        z = $$(".num_typed"),
        B = H.concat(z),
        G = function() {
            null !== n && n.reset(), null !== i && i.reset(), null !== a && a.reset(), null !== s && s.reset(), null !== o && o.reset(), null !== X && X.reset(), null !== l && l.reset(), null !== r && r.reset(), null !== d && d.reset(), null !== p && p.reset(), null !== h && h.reset(), null !== c && c.reset(), null !== u && u.reset(), null !== f && f.reset(), null !== m && m.reset(), null !== y && y.reset(), null !== g && g.reset(), null !== v && v.reset(), null !== _ && _.reset(), null !== x && x.reset(), n = $(), i = $(), a = $(), s = $(), o = $(), X = $(), l = $(), r = $(), d = $(), p = $(), h = $(), c = $(), u = $(), f = $(), m = $(), y = $(), g = $(), v = $(), _ = $(), x = $(), $$(B).forEach(function(e) {
                $(e)._.style({
                    display: "none",
                    "max-height": "0",
                    transform: "rotate(0deg)"
                })
            }), $$(".XXXXcontent").forEach(function(e) {
                $(e)._.style({
                    display: "none",
                    "max-height": "0",
                    height: "0",
                    padding: "0.5em 0"
                })
            })
        },
        J = []; - 1 === J.indexOf(J) && (window.newMessage = J);
    var K = function() {
        J.forEach(function(e) {
            setTimeout(function() {
                $(e).classList.replace("line", "not_clicked"), $(e).classList.add("line")
            }, 500)
        })
    };
    k = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#one_typed")._.set({
            style: {
                display: "inline-block",
                "max-height": "1000vh",
                height: "initial",
                padding: "0 0 0.5em 0"
            }
        }), (o = new TypeIt("#one_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".oneXXXXcontent")._.style({
                    display: "inline-block",
                    "max-height": "1000vh"
                }), setTimeout(function() {
                    $(".oneXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("&gt; more -d +/&quot;SCP-4205-BROUILLON&quot; 014205-AnomArch-52-57-44")).init(), N = o, R = $(".oneXXXXcontent"), F = w
    }, w = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#two_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (X = new TypeIt("#two_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".twoXXXXcontent")._.style({
                    display: "inline-block"
                }), setTimeout(function() {
                    $(".twoXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("&gt; more -d +/&quot;Objet n<sup>o</sup> : SCP-4205&quot; 024205-AnomArch-52-57-44")).init(), N = X, R = $(".twoXXXXcontent"), F = b
    }, b = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#three_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (l = new TypeIt("#three_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".threeXXXXcontent")._.style({
                    display: "inline-block"
                }), setTimeout(function() {
                    $(".threeXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("&gt; more -d +/&quot;Objet n<sup>o</sup> : SCP-4205&quot; 034205-AnomArch-52-57-44").pause(500).options({
            speed: 0
        }).type("<p class='block'>&gt; ERR Non Trouvé</p>").pause(1e3).options({
            speed: 100
        }).type("<p>&gt; more -d 034205-AnomArch-52-57-44</p>")).init(), N = l, R = $(".threeXXXXcontent"), F = L
    }, L = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#four_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (r = new TypeIt("#four_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".fourXXXXcontent")._.style({
                    display: "inline-block",
                    "max-height": "1000vh"
                }), setTimeout(function() {
                    $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".fourXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 2e3)
            }
        }, !1).pause(500).type("<p>&gt; more -d 044205-AnomArch-52-57-44</p>").pause(500).options({
            speed: 0
        }).type("<p class='block'>&gt;&gt; Données corrompues détectées…</p>").type("<p class='block'>&gt;&gt; Corruption à 5 %…</p>").type("<span class='loading still'>&mdash;</span><span>ignoré</span><span class='loading still'>&mdash;</span>")).init(), N = r, R = $(".fourXXXXcontent"), F = O
    }, O = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#five_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (d = new TypeIt("#five_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".fiveXXXXcontent")._.style({
                    display: "inline-block",
                    "max-height": "1000vh"
                }), setTimeout(function() {
                    $(".fiveXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("<p>&gt; more -d 054205-AnomArch-52-57-44</p>").pause(500)).init(), N = d, R = $(".fiveXXXXcontent"), F = T
    }, T = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#six_typed_a")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (p = new TypeIt("#six_typed_a", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                var t, n = Math.floor(5 * Math.random()) + 1;
                for ($(".sixXXXXcontent_a")._.style({
                        display: "inline-block",
                        "max-height": "1000vh",
                        height: "initial"
                    }), t = 0; t < n; t++) {
                    $("#six_typed_a").classList.toggle("glitch");
                    var i = Math.floor(1e3 * Math.random()) + 100;
                    setTimeout(function() {
                        var e = Math.floor(2e3 * Math.random()) + 200;
                        document.querySelector("#six_typed_a").style.setProperty("--time-anim", e / 100 + "s")
                    }, i)
                }
                setTimeout(function() {
                    p.reset(), $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".sixXXXXcontent_a")._.style({
                        height: "initial",
                        padding: "0.5em"
                    }), $("#six_typed_a").classList.toggle("glitch"), C()
                }, 4e3)
            }
        }, !1).pause(500).type("<p>&gt; more -d 064205-AnomArch-52-57-44</p>").pause(500).options({
            speed: 0
        }).type("<p class='block'>&gt;&gt; Données corrompues détectées…</p>").type("<p class='block'>&gt;&gt; Corruption à 89 %…</p>").type("<span class='loading still'>&mdash;</span><span>ignoré</span><span class='loading still'>&mdash;</span>")).init()
    }, C = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#six_typed_b")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), $(".sixXXXXcontent_a")._.style({
            display: "none",
            height: "0",
            padding: "0",
            transform: "rotate(0deg)"
        }), (h = new TypeIt("#six_typed_b", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                var t, n = Math.floor(5 * Math.random()) + 1;
                for ($(".sixXXXXcontent")._.style({
                        display: "inline-block",
                        "max-height": "1000vh"
                    }), t = 0; t < n; t++) {
                    $("#six_typed_b").classList.toggle("glitch");
                    var i = Math.floor(1e3 * Math.random()) + 100;
                    setTimeout(function() {
                        var e = Math.floor(2e3 * Math.random()) + 200;
                        document.querySelector("#six_typed_b").style.setProperty("--time-anim", e / 100 + "s")
                    }, i)
                }
                setTimeout(function() {
                    $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".sixXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    }), $("#six_typed_b").classList.toggle("glitch")
                }, 2e3), $$(".glitch_2").forEach(function(e) {
                    var t = Math.floor(2e3 * Math.random()) + 200;
                    e.style.setProperty("--time-anim", t / 100 + "s")
                })
            }
        }, !1).pause(500).options({
            speed: 0
        }).type("<p class='block'>&gt;&gt; Données corrompues détectées…</p>").type("<p class='block'>&gt;&gt; Corruption à 20 %…</p>").type("<span class='loading still'>&mdash;</span><span>ignoré</span><span class='loading still'>&mdash;</span>")).init(), N = h, R = $(".sixXXXXcontent"), F = E
    }, E = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#seven_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (c = new TypeIt("#seven_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".sevenXXXXcontent")._.style({
                    display: "inline-block",
                    "max-height": "1000vh"
                }), setTimeout(function() {
                    $(".sevenXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("<p>&gt; more -d 074205-AnomArch-52-57-44</p>").pause(500)).init(), N = c, R = $(".sevenXXXXcontent"), F = M
    }, M = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#eight_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (u = new TypeIt("#eight_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".eightXXXXcontent")._.style({
                    display: "inline-block",
                    "max-height": "1000vh"
                }), setTimeout(function() {
                    $(".eightXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("<p>&gt; more -d 084205-AnomArch-52-57-44</p>").pause(500)).init(), N = u, R = $(".eightXXXXcontent"), F = S
    }, S = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#nine_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (f = new TypeIt("#nine_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".nineXXXXcontent")._.style({
                    "max-height": "1000vh",
                    display: "inline-block"
                }), setTimeout(function() {
                    $(".nineXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("<p>&gt; more -d 094205-AnomArch-52-57-44</p>").pause(500)).init(), N = f, R = $(".nineXXXXcontent"), F = A
    }, A = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#ten_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (m = new TypeIt("#ten_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                $(".tenXXXXcontent")._.style({
                    "max-height": "1000vh",
                    display: "inline-block"
                }), setTimeout(function() {
                    $(".tenXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    })
                }, 500)
            }
        }, !1).pause(500).type("<p>&gt; more -d 104205-AnomArch-52-57-44</p>").pause(500)).init(), N = m, R = $(".tenXXXXcontent"), F = D
    }, D = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#eleven_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (y = new TypeIt("#eleven_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                var t, n = Math.floor(5 * Math.random()) + 1;
                for ($(".elevenXXXXcontent")._.style({
                        "max-height": "1000vh",
                        display: "inline-block"
                    }), t = 0; t < n; t++) {
                    $("#eleven_typed").classList.toggle("glitch");
                    var i = Math.floor(1e3 * Math.random()) + 100;
                    setTimeout(function() {
                        var e = Math.floor(2e3 * Math.random()) + 200;
                        document.querySelector("#eleven_typed").style.setProperty("--time-anim", e / 100 + "s")
                    }, i)
                }
                setTimeout(function() {
                    $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".elevenXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    }), $("#eleven_typed").classList.toggle("glitch")
                }, 2e3), $$(".glitch_2").forEach(function(e) {
                    var t = Math.floor(2e3 * Math.random()) + 200;
                    e.style.setProperty("--time-anim", t / 100 + "s")
                })
            }
        }, !1).pause(500).type("<p class='glitch_2'>&gt; more -d 114205-AnomArch-52-57-44</p>").pause(500).options({
            speed: 0
        }).type("<p class='block'>&gt;&gt; Données corrompues détectées…</p>").type("<p class='block'>&gt;&gt; Corruption à 24 %…</p>").type("<span class='loading still'>&mdash;</span><span>ignoré</span><span class='loading still'>&mdash;</span>")).init(), N = y, R = $(".elevenXXXXcontent"), F = I
    }, I = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#twelve_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (g = new TypeIt("#twelve_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                var t, n = Math.floor(5 * Math.random()) + 1;
                for ($(".twelveXXXXcontent")._.style({
                        "max-height": "1000vh",
                        display: "inline-block"
                    }), t = 0; t < n; t++) {
                    $("#twelve_typed").classList.toggle("glitch");
                    var i = Math.floor(1e3 * Math.random()) + 100;
                    setTimeout(function() {
                        var e = Math.floor(2e3 * Math.random()) + 200;
                        document.querySelector("#twelve_typed").style.setProperty("--time-anim", e / 100 + "s")
                    }, i)
                }
                setTimeout(function() {
                    $(".twelveXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    }), $("#twelve_typed").classList.toggle("glitch")
                }, 2e3), $$(".glitch_2").forEach(function(e) {
                    var t = Math.floor(2e3 * Math.random()) + 200;
                    e.style.setProperty("--time-anim", t / 100 + "s")
                })
            }
        }, !1).pause(500).type("<p class='glitch_2'>&gt; plus -d 124205-AnomArch-52-57-44</p>")).init(), N = g, R = $(".twelveXXXXcontent"), F = P
    }, P = function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), $("#thirteen_typed")._.style({
            display: "inline-block",
            "max-height": "1000vh",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), (v = new TypeIt("#thirteen_typed", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                var t, n = Math.floor(5 * Math.random()) + 1;
                for ($(".thirteenXXXXcontent")._.style({
                        "max-height": "1000vh",
                        display: "inline-block"
                    }), t = 0; t < n; t++) {
                    $("#thirteen_typed").classList.toggle("glitch");
                    var i = Math.floor(1e3 * Math.random()) + 100;
                    setTimeout(function() {
                        var e = Math.floor(2e3 * Math.random()) + 200;
                        document.querySelector("#thirteen_typed").style.setProperty("--time-anim", e / 100 + "s")
                    }, i)
                }
                setTimeout(function() {
                    $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".thirteenXXXXcontent")._.style({
                        height: "initial",
                        "max-height": "1000vh",
                        padding: "0.5em"
                    }), $("#thirteen_typed").classList.toggle("glitch")
                }, 2e3), $$(".glitch_2").forEach(function(e) {
                    var t = Math.floor(2e3 * Math.random()) + 200;
                    e.style.setProperty("--time-anim", t / 100 + "s")
                })
            }
        }, !1).pause(500).type("<p class='glitch_2'>&gt; more -d 134205-AnomArch-52-57-44</p>").pause(500).options({
            speed: 0
        }).type("<p class='block'>&gt;&gt; Données corrompues détectées…</p>").type("<p class='block'>&gt;&gt; Corruption à 8? %…</p>").type("<span class='loading still'>&mdash;</span><span>ignoré</span><span class='loading still'>&mdash;</span>")).init(), R = $(".twelveXXXXcontent"), F = q, N = v
    }, q = function() {
        $("#thirteen_typed_b")._.style({
            "max-height": "1000vh",
            display: "inline-block",
            height: "initial",
            padding: "0 0 0.5em 0"
        }), $(".thirteenXXXXcontent > .journal").classList.toggle("glitch"), $(".thirteenXXXXcontent > .journal").style.setProperty("--time-anim", "0.5s"), setTimeout(function() {
            $(".thirteenXXXXcontent > .journal")._.style({
                display: "none",
                height: 0,
                padding: 0
            })
        }, 1e3), (_ = new TypeIt("#thirteen_typed_b", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 500,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                var t, n = Math.floor(5 * Math.random()) + 1;
                for (t = 0; t < n; t++) {
                    $("#thirteen_typed_b").classList.toggle("glitch");
                    var i = Math.floor(1e3 * Math.random()) + 100;
                    setTimeout(function() {
                        var e = Math.floor(2e3 * Math.random()) + 200;
                        document.querySelector("#thirteen_typed_b").style.setProperty("--time-anim", e / 100 + "s")
                    }, i)
                }
                setTimeout(function() {
                    j(), $("#monitor_off").muted = !1, $("#comp_winddown").muted = !1, $("#monitor_off").play(), $("#comp_winddown").play();
                    var e = document.querySelector("#monitor_off").play(),
                        t = document.querySelector("#comp_winddown").play();
                    void 0 !== e && e.then(function(e) {
                        $("#monitor_off").play()
                    }).catch(function(e) {
                        $("#monitor_off").play()
                    }), void 0 !== t && t.then(function(e) {
                        $("#comp_winddown").play()
                    }).catch(function(e) {
                        $("#comp_winddown").play()
                    })
                }, 4e3), $$(".glitch_2").forEach(function(e) {
                    var t = Math.floor(2e3 * Math.random()) + 200;
                    e.style.setProperty("--time-anim", t / 100 + "s")
                })
            }
        }, !1).pause(1e3).options({
            speed: 300
        }).type("<p class='block eyes'>Peut-il avoir des yeux ?</p>")).init(), N = _, R = $(".thirteenXXXXcontent"), F = j
    }, j = function() {
        $('input[name="switch"]').checked = !1, G(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), R._.style({
            display: "none",
            height: "0",
            padding: "0",
            transform: "rotate(0deg)"
        }), n = new TypeIt("#header-l", {
            speed: 50,
            cursor: !1,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !1,
            startDelay: 4e3
        }, !1).pause(500).type("FND&ndash;ARCH&ensp;8&#x240;19"), i = new TypeIt("#header-r", {
            speed: 50,
            cursor: !1,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !1,
            startDelay: 4e3
        }, !1).pause(1e3).type("Terminal 4"), a = new TypeIt("#main > #div1", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 4e3,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                setTimeout(function() {
                    $(B[0])._.style({
                        display: "inline-block",
                        "max-height": "1000vh",
                        height: "initial"
                    })
                }, 500)
            }
        }, !1).pause(5).type("<p>&gt; cd /mnt/scipnet/data/scp/4205</p>").pause(100).type("<p>&gt; ls</p>").pause(15), x = new TypeIt("#new_document", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 2e3,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                setTimeout(function() {
                    $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".fourteenXXXXcontent")._.style({
                        display: "inline-block",
                        "max-height": "1000vh",
                        height: "initial",
                        padding: "0.5em"
                    }), $(".XXXX")._.style({
                        opacity: "1"
                    })
                }, 4e3)
            }
        }, !1).pause(1e3).type("<p class='new'>Nouveau document dans la base de données</p>").options({
            speed: 0
        }).type("<span class='loading still'>&mdash;</span><span>chargement</span><span class='loading still'>&mdash;</span>"), n.init(), i.init(), setTimeout(function() {
            $('input[name="switch"]').checked = !0, $("#new_document")._.style({
                display: "inline-block",
                "max-height": "1000vh",
                height: "initial",
                padding: "0 0 0.5em 0"
            }), x.init(), $("#monitor_on").play(), $("#comp_windup").play(), N = x, R = $(".fourteenXXXXcontent")
        }, 2e3)
    }, $('input[name="switch"]').addEventListener("click", function() {
        $('input[name="switch"]').matches(":checked") ? ($("#monitor_on").play(), $("#comp_windup").play(), setTimeout(function() {
            n = new TypeIt("#header-l", {
                speed: 50,
                cursor: !1,
                lifeLike: !0,
                deleteSpeed: 0,
                breakLines: !1,
                startDelay: 4e3
            }, !1).pause(500).type("FND&ndash;ARCH&ensp;8&#x240;19"), i = new TypeIt("#header-r", {
                speed: 50,
                cursor: !1,
                lifeLike: !0,
                deleteSpeed: 0,
                breakLines: !1,
                startDelay: 4e3
            }, !1).pause(1e3).type("Terminal 4"), a = new TypeIt("#main > #div1", {
                speed: 100,
                lifeLike: !0,
                deleteSpeed: 0,
                breakLines: !0,
                html: !0,
                startDelay: 4e3,
                cursorChar: '<div class="cursor"></div>',
                afterComplete: function(e) {
                    setTimeout(function() {
                        $(B[0])._.style({
                            display: "inline-block",
                            "max-height": "1000vh",
                            height: "initial"
                        })
                    }, 500)
                }
            }, !1).pause(5).type("<p>&gt; cd /mnt/scipnet/data/scp/4205</p>").pause(100).type("<p>&gt; ls</p>").pause(15), s = new TypeIt("#main > #div2", {
                speed: 100,
                lifeLike: !0,
                deleteSpeed: 0,
                breakLines: !0,
                html: !0,
                startDelay: 500,
                cursorChar: '<div class="cursor"></div>',
                afterComplete: function(e) {
                    setTimeout(function() {
                        $(B[2])._.style({
                            display: "inline-block",
                            "max-height": "1000vh",
                            height: "initial",
                            padding: "0 0 0.5em 0"
                        }), $(B[0])._.style({
                            display: "inline-block",
                            "max-height": "1000vh",
                            height: "initial"
                        })
                    }, 500)
                }
            }, !1).pause(5).type("<p>&gt; cd /mnt/scipnet/data/scp/4205</p>").pause(100).type("<p>&gt; ls</p>").pause(15), setTimeout(function() {
                $(B[3])._.style({
                    display: "block",
                    "max-height": "1000vh",
                    height: "25vw",
                    width: "25vw",
                    margin: "2vw 0",
                    transform: "rotate(360deg)",
                    opacity: "1"
                }), $(B[1])._.style({
                    display: "inline-block",
                    "max-height": "1000vh",
                    height: "initial",
                    padding: "0 4em 0.5em 0"
                }), $(B[2])._.style({
                    display: "inline-block",
                    "max-height": "1000vh",
                    height: "initial",
                    padding: "0 0 0.5em 0"
                })
            }, 2e3), n.init(), i.init(), setTimeout(function() {
                null !== n && a.init()
            }, 4e3)
        }, 500), -1 === J.indexOf(".oneXXXX") && J.push(".oneXXXX"), K()) : (G(), $("#monitor_off").muted = !1, $("#comp_winddown").muted = !1, $("#monitor_off").play(), $("#comp_winddown").play())
    }), $(".oneXXXX").addEventListener("click", function() {
        k()
    }), $(".twoXXXX").addEventListener("click", function() {
        w()
    }), $(".thrXXXX").addEventListener("click", function() {
        b()
    }), $(".forXXXX").addEventListener("click", function() {
        L()
    }), $(".fveXXXX").addEventListener("click", function() {
        O()
    }), $(".sixXXXX").addEventListener("click", function() {
        T()
    }), $(".svnXXXX").addEventListener("click", function() {
        E()
    }), $(".ehtXXXX").addEventListener("click", function() {
        M()
    }), $(".ninXXXX").addEventListener("click", function() {
        S()
    }), $(".tenXXXX").addEventListener("click", function() {
        A()
    }), $(".lvnXXXX").addEventListener("click", function() {
        D()
    }), $(".twvXXXX").addEventListener("click", function() {
        I()
    }), $(".thtXXXX").addEventListener("click", function() {
        P()
    }), $(".XXXX").addEventListener("click", function() {
        a.reset(), $$(B).forEach(function(e) {
            $(e)._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            })
        }), x = new TypeIt("#new_document", {
            speed: 100,
            lifeLike: !0,
            deleteSpeed: 0,
            breakLines: !0,
            html: !0,
            startDelay: 2e3,
            cursorChar: '<div class="cursor"></div>',
            afterComplete: function(e) {
                setTimeout(function() {
                    $$("span.loading").forEach(function(e) {
                        $(e).classList.remove("loading")
                    }), $(".fourteenXXXXcontent")._.style({
                        display: "inline-block",
                        "max-height": "1000vh",
                        height: "initial",
                        padding: "0.5em"
                    }), $(".XXXX")._.style({
                        opacity: "1"
                    })
                }, 4e3)
            }
        }, !1).pause(1e3).type("<p class='new'>Nouveau document dans la base de données</p>").options({
            speed: 0
        }).type("<span class='loading still'>&mdash;</span><span>chargement</span><span class='loading still'>&mdash;</span>"), setTimeout(function() {
            $('input[name="switch"]').checked = !0, x.init(), $("#monitor_on").play(), $("#comp_windup").play(), $("#new_document")._.style({
                display: "inline-block",
                "max-height": "1000vh",
                height: "initial",
                padding: "0 0 0.5em 0"
            })
        }, 1e3), N = x, R = $(".fourteenXXXXcontent")
    }), $$(".next").forEach(function(e) {
        e.addEventListener("click", function() {
            N.reset(), R._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            }), $$(B).forEach(function(e) {
                $(e)._.style({
                    display: "none",
                    "max-height": "0",
                    padding: "0",
                    transform: "rotate(0deg)"
                })
            }), setTimeout(function() {
                F()
            }, 500)
        })
    }), $$(".back").forEach(function(e) {
        e.addEventListener("click", function() {
            var t = $(e).parentElement.parentElement.classList;
            t.contains("twoXXXXcontent") && -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX"), t.contains("threeXXXXcontent") && (-1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("fourXXXXcontent") && (-1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("fiveXXXXcontent") && (-1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("sixXXXXcontent") && (-1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("sevenXXXXcontent") && (-1 === J.indexOf(".svnXXXX") && J.push(".svnXXXX"), -1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("eightXXXXcontent") && (-1 === J.indexOf(".ehtXXXX") && J.push(".ehtXXXX"), -1 === J.indexOf(".svnXXXX") && J.push(".svnXXXX"), -1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("nineXXXXcontent") && (-1 === J.indexOf(".ninXXXX") && J.push(".ninXXXX"), -1 === J.indexOf(".ehtXXXX") && J.push(".ehtXXXX"), -1 === J.indexOf(".svnXXXX") && J.push(".svnXXXX"), -1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("tenXXXXcontent") && (-1 === J.indexOf(".tenXXXX") && J.push(".tenXXXX"), -1 === J.indexOf(".ninXXXX") && J.push(".ninXXXX"), -1 === J.indexOf(".ehtXXXX") && J.push(".ehtXXXX"), -1 === J.indexOf(".svnXXXX") && J.push(".svnXXXX"), -1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("elevenXXXXcontent") && (-1 === J.indexOf(".lvnXXXX") && J.push(".lvnXXXX"), -1 === J.indexOf(".tenXXXX") && J.push(".tenXXXX"), -1 === J.indexOf(".ninXXXX") && J.push(".ninXXXX"), -1 === J.indexOf(".ehtXXXX") && J.push(".ehtXXXX"), -1 === J.indexOf(".svnXXXX") && J.push(".svnXXXX"), -1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), t.contains("twelveXXXXcontent") && (-1 === J.indexOf(".twvXXXX") && J.push(".twvXXXX"), -1 === J.indexOf(".lvnXXXX") && J.push(".lvnXXXX"), -1 === J.indexOf(".tenXXXX") && J.push(".tenXXXX"), -1 === J.indexOf(".ninXXXX") && J.push(".ninXXXX"), -1 === J.indexOf(".ehtXXXX") && J.push(".ehtXXXX"), -1 === J.indexOf(".svnXXXX") && J.push(".svnXXXX"), -1 === J.indexOf(".sixXXXX") && J.push(".sixXXXX"), -1 === J.indexOf(".fveXXXX") && J.push(".fveXXXX"), -1 === J.indexOf(".forXXXX") && J.push(".forXXXX"), -1 === J.indexOf(".thrXXXX") && J.push(".thrXXXX"), -1 === J.indexOf(".twoXXXX") && J.push(".twoXXXX")), window.windowParent = t, N.reset(), R._.style({
                display: "none",
                "max-height": "0",
                padding: "0",
                transform: "rotate(0deg)"
            }), $(B[1])._.style({
                display: "inline-block",
                "max-height": "1000vh",
                height: "initial",
                padding: "0 4em 0.5em 0"
            }), $(B[2])._.style({
                display: "inline-block",
                "max-height": "1000vh",
                height: "initial",
                padding: "0 0 0.5em 0"
            }), $(B[3])._.style({
                display: "block",
                "max-height": "1000vh",
                height: "25vw",
                width: "25vw",
                margin: "2vw 0",
                transform: "rotate(360deg)",
                opacity: "1"
            }), setTimeout(function() {
                a.init()
            }, 500), K()
        }), $$(".glitch_3").forEach(function(e) {
            var t = Math.floor(4e3 * Math.random()) + 400;
            e.style.setProperty("--time-anim", t / 100 + "s")
        });
        var t = $("video");
        $.each(t, function() {
            this.controls = !1
        }), $("video").click(function() {
            this.paused ? this.play() : this.pause()
        })
    })
}]);
