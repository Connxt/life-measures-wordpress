! function() {
    base.fn.und(base.config) && (base.config = {}), base.config.app = {
        colors: {
            us: {
                dimensions: {
                    community_and_relationships: {
                        bg: "#DA2834",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    freedom: {
                        bg: "#00ACFF",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    health_and_environment: {
                        bg: "#ff6600",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    living_standard: {
                        bg: "#009855",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    opportunity: {
                        bg: "#4e5aa2",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    peace_and_security: {
                        bg: "#7a197a",
                        fg: "#FFFFFF",
                        components: {}
                    }
                }
            },
            "int": {
                dimensions: {
                    community_and_relationships: {
                        bg: "#DA2834",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    freedom: {
                        bg: "#00ACFF",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    health_and_environment: {
                        bg: "#ff6600",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    living_standard: {
                        bg: "#009855",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    opportunity: {
                        bg: "#4e5aa2",
                        fg: "#FFFFFF",
                        components: {}
                    },
                    peace_and_security: {
                        bg: "#7a197a",
                        fg: "#FFFFFF",
                        components: {}
                    }
                }
            }
        },
        prompt: {
            years: "You can only select up to 5 years.",
            components: "You can only select components of one dimension.",
            multipleRegions_years: "You can't select more than one region for a multiple year selection.",
            multipleYears_regions: "You can't select more than one year for a multiple region selection.",
            tooManyRegions: {
                us: "You can only select up to 5 states.",
                "int": "You can only select up to 5 countries."
            },
            ajaxTimeout: "An error occured loading the data.",
            onlyOneDimensionByComponents: "You can only select components of one dimension at a time.",
            badMetricsSelection: "You need to select at least one dimension or component, one region and one year to generate results.",
            regionNotAvailable: {
                us: "This state isn't available for selection.",
                "int": "This location isn't available for selection."
            },
            mapChange: {
                us: "You are about to exit the World Index and enter the U.S. Index. If you proceed, all selections currently compiled within the map will be lost. <br><br><b>Continue to U.S. map?</b>",
                "int": "You are about to exit the U.S. Index and enter the World Index. If you proceed, all selections currently compiled within the map will be lost. <br><br><b>Continue to World map?</b>"
            },
            updateMap: "You are about to change the data currently displayed on the map. <br><br><b>Continue anyway?</b>",
            reset: "You are about to clear the current results displayed on the map. <br><br><b>Continue anyway?</b>",
            dimComToggle: "You are about to switch between being able to select dimensions and components. If you proceed, all dimensions or components currently compiled within the map will be lost. <br><br><b>Continue?</b>"
        },
        tooltip: {
            dimensions: {
                opportunity: {
                    us: "The Opportunity dimension is concerned with people’s possibilities for employment and entrepreneurship and education quality and choice. It pays particular attention to the underprivileged, assessing the levels of poverty and inequality in a state.",
                    "int": "The Opportunity dimension is concerned with people’s access to community basics, education, and possibilities for employment and entrepreneurship. It pays particular attention to the underprivileged, assessing the levels of poverty and inequality in a society."
                },
                freedom: {
                    us: "The Freedom dimension concerns itself with the extent to which individuals in a state are able to take control of their own lives. It measures the degree to which a state respects the personal and economic freedoms of its residents.",
                    "int": "The Freedom dimension concerns itself with the extent to which individuals in a society are able to take control of their own lives. It measures the degree to which a society respects the political, civil, religious, and economic freedoms of its people as well as people’s perceptions of their freedom."
                },
                health_and_environment: {
                    us: "The Health & Environment dimension deals with the prevailing physical, mental, and environmental conditions in a state. It looks at such factors as life expectancy, obesity, suicide rates, and access to safe water, fruit and vegetables, medicine, and a safe place to exercise.",
                    "int": "The Health & Environment dimension deals with the prevailing physical, mental, and environmental conditions in a society. It looks at such factors as life expectancy, undernourishment, suicide rates, positive experiences, suffering, and air, water, and sanitation quality."
                },
                community_and_relationships: {
                    us: "The Community & Relationships dimension measures the quality of the community and family lives of a state’s residents. It is concerned with people’s charitable, civic, and religious engagement and their relationships with friends and loved ones.",
                    "int": "The Community & Relationships dimension measures the quality of the community and family lives of people in a society. It is concerned with people’s charitable, civic, and religious engagement and their relationships with friends and loved ones."
                },
                peace_and_security: {
                    us: "The Peace & Security Dimension measures the degree to which a state minimizes violence and crime. It also looks at how safe people feel where they live and whether they trust their neighbors.",
                    "int": "The Peace & Security Dimension measures the degree to which a society minimizes violence, crime, and other sources of instability while respecting human rights and upholding the rule of law. It also looks at trust, transparency, corruption, and bureaucratic quality."
                },
                living_standard: {
                    us: "The Living Standard dimension looks at the average level of economic and financial resources available to a state’s residents. It concerns itself with current standard of living, improvements in standard of living, and people’s perceptions of their standard of living.",
                    "int": "The Living Standard dimension looks at the average level of economic and financial resources available to people in a society. It concerns itself with current standard of living, improvements in standard of living, and people’s perceptions of their own and their society’s standard of living."
                }
            },
            dimComToggle: "By selecting Dimensions, you can compare overall dimension scores across time and location. By selecting Components, you can compare specific components within a single dimension.",
            howDoWeCalculateData: 'For a thorough explanation of the research methods and data sources used to compile these data, please visit our <a href="/indices-of-well-being/">Indices of Well-Being</a> page.',
            whereIs2013and2014: "The Quality of Life Measures Project is dedicated to delivering the most current data available. Causing delays to our compilation and calculation processes is the fact that some data are not published until many months after they have been collected."
        },
        templates: {
            sidebar: {
                region: ['<li data-location-id="" data-gm-id="">', '<div class="selected-location">', '<div class="highlight">', '<span class="name"></span>', '<span class="ranking"></span>', '<span class="score"></span>', "</div>", "</div>", '<a href="" class="close" data-location-id=""><span></span></a>', "</li>"].join(""),
                infoTooltip: ['<div class="info-tooltip">', "<p></p>", "</div>"].join("")
            },
            map: {
                tooltip: ['<div class="map-tooltip">', '<div class="id">', "<p></p>", "</div>", '<div class="rank">', "<span></span>", "<span>AVG.<br>Score</span>", "</div>", '<div class="dimensions-container">', '<div class="dim opportunity">', "<p>X</p>", "</div>", '<div class="dim health_and_environment">', "<p>X</p>", "</div>", '<div class="dim freedom">', "<p>X</p>", "</div>", '<div class="dim community_and_relationships">', "<p>X</p>", "</div>", '<div class="dim living_standard">', "<p>X</p>", "</div>", '<div class="dim peace_and_security">', "<p>X</p>", "</div>", "</div>", '<div class="components-container">', '<div class="com hide">', "<p></p>", "</div>", "</div>", "</div>"].join("")
            },
            overlay: {
                coach: ['<div class="coach-overlay">', '<div class="coached centered-text">', '<span class="subhead">Indices of Well-being</span>', "<hr />", "<h1>Interactive Map</h1>", "<p>Using this interactive map, you can compare historical well-being data from across the United States and across the world. You can also create custom charts to display the data you select.</p>", '<p><a href="#" class="btn yellow close-overlay">Get Started</a></p>', "</div>", '<div class="coached dim-toggle">', '<div class="pointer">', '<span class="circle"></span>', '<span class="line"></span>', "</div>", "<p>Here, you select dimensions or components from the same dimension to compare.</p>", "</div>", '<div class="coached search-bar">', '<div class="box"></div>', '<div class="pointer">', '<span class="circle"></span>', '<span class="line"></span>', "</div>", "<p>You can select up to five states or countries whose well-being you want to compare.</p>", "</div>", '<div class="coached index">', '<div class="pointer">', '<span class="circle"></span>', '<span class="line"></span>', "</div>", "<p>Compare well-being nationally or internationally by selecting the proper index.</p>", "</div>", '<div class="coached year">', "<p>By toggling years on and off, you can select up to five you want to compare.</p>", '<div class="pointer">', '<span class="line"></span>', '<span class="circle"></span>', "</div>", "</div>", '<div class="coached results">', "<p>Generate a set of custom charts to further explore the data you’ve selected.</p>", '<div class="pointer">', '<span class="line"></span>', '<span class="circle"></span>', "</div>", "</div>", '<div class="coached updateMap">', "<p>Once you've selected all of the places and dimensions you'd like to compare, click this button. The map will update to display the data you selected.</p>", '<div class="pointer">', '<span class="line"></span>', '<span class="circle"></span>', "</div>", "</div>", '<div class="actual-overlay"></div>', "</div>"].join("")
            }
        },
        mapids: {}
    }
}(),
function() {
    "function" != typeof String.prototype.ucfirst && (String.prototype.ucfirst = function() {
        var a = this.charAt(0).toUpperCase();
        return a + this.substr(1)
    }), "function" != typeof String.prototype.capitalize && (String.prototype.capitalize = function() {
        return this.replace(/\w\S*/g, function(a) {
            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
        })
    }), "function" != typeof String.prototype.lowerize && (String.prototype.lowerize = function() {
        return this.toLowerCase()
    }), "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }), String.prototype.parseURI = function() {
        for (var a = {
                options: {
                    strictMode: !0,
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {
                        name: "queryKey",
                        parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                    },
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }
            }, b = a.options, c = b.parser[b.strictMode ? "strict" : "loose"].exec(this), d = {}, e = 14; e--;) d[b.key[e]] = c[e] || "";
        return d[b.q.name] = {}, d[b.key[12]].replace(b.q.parser, function(a, c, e) {
            c && (d[b.q.name][c] = e)
        }), d
    }
}(),
function(a) {
    try {
        var b = "app";
        a.fn[b] = function(c) {
            function d() {
                N(v.view.find("#container")), e(m()), w = v.options.defaultMap, M(window.URLSelections)
            }

            function e(b) {
                b ? v.view.find(".coach").addClass("coach-idle").removeClass("coach") : (v.view.find("#container").prepend(a(base.config.app.templates.overlay.coach)), v.view.find(".coach-idle").addClass("coach"), v.view.find(".coach").append(a("<div/>").addClass("coach-block")), f())
            }

            function f() {
                v.view.find(".close-overlay").unbind("click").on("click", function(b) {
                    b.preventDefault(), v.view.find(".coach").addClass("coach-idle").removeClass("coach"), v.view.find(".coach-block").remove(), v.view.find(".coach-overlay").fadeOut(v.options.coachFade, function() {
                        a(this).remove()
                    })
                })
            }

            function g() {
                x = v.view.find(".sidebar.left").sidebar({
                    app: v,
                    selectedSection: E,
                    mapSource: w
                }), eMapbar = v.view.find(".map__header").mapbar({
                    app: v,
                    mapSource: w,
                    metrics: K.data.init
                }), v.trigger("initUI", [B])
            }

            function h() {
                O(v.view), r(base.config.app.prompt.ajaxTimeout)
            }

            function i() {}

            function j() {
                var b = a(window).innerHeight(),
                    c = v.view.find("header.nav").height(),
                    d = v.view.find(".map__header").height(),
                    e = Number(b - c),
                    f = a(window).width(),
                    g = x.width();
                x.css("height", e).fadeIn("fast"), y.css({
                    width: Number(f - g),
                    height: e - d
                }).find("#gmap").css({
                    height: e - d
                })
            }

            function k(a, b, c) {
                var d = new Date;
                d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
                var e = "expires=" + d.toGMTString();
                document.cookie = a + "=" + b + "; " + e
            }

            function l(a) {
                for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                    var e = c[d].trim();
                    if (0 == e.indexOf(b)) return e.substring(b.length, e.length)
                }
                return ""
            }

            function m() {
                return document.location.href.indexOf("coach") > -1 ? !1 : l("coached") ? !0 : (k("coached", "true", 365), !1)
            }

            function n() {
                a(window).on("resize", function() {
                    j()
                }), v.on("injectElem", function(a, b, c, d) {
                    v.view[b](c), base.fn.und(d) || d()
                }).on("removeInfoTooltip", function() {
                    q()
                }).on("dimensionChange", function(a, b, c) {
                    L("dimensions", b, c)
                }).on("componentChange", function(a, b, c) {
                    L("components", b, c)
                }).on("yearRequest", function(a, b, c) {
                    return c && !P("years", b, c) ? (r(base.config.app.prompt.years), void 0) : (L("years", b, c), v.trigger("yearChange", [b, c]), void 0)
                }).on("locationRequest", function(a, b, c, d) {
                    return S(b) ? c && !P("locations", b, c, d) ? (r(base.config.app.prompt.tooManyRegions[w]), v.trigger("locationChange", [b, !1, d]), void 0) : (L("locations", b, c, d), v.trigger("locationChange", [b, c, d]), void 0) : (r(base.config.app.prompt.regionNotAvailable[w]), void 0)
                }).on("requestSpinner", function(a, b, c) {
                    b = base.fn.und(b) ? v.view : b, N(b, c)
                }).on("killSpinner", function(a, b) {
                    b = base.fn.und(b) ? v.view : b, O(b)
                }).on("results", function() {
                    s()
                }).on("refresh", function() {
                    p()
                }).on("reset", function() {
                    t()
                }).on("sidebarToggleChange", function(a, b) {
                    E = b.replace(/sidebar__/, "")
                }).on("prompt", function(a, b, c, d) {
                    r(b, c, d)
                }).on("mapChangeRequest", function(b, c, d, e) {
                    N(v.view), w = c;
                    var f = Q("locations");
                    console.log(["aLocs", f]), a.each(f, function(a, b) {
                        console.log("v: " + b), v.trigger("locationChange", [b, !1])
                    }), a.each(f, function(a, b) {
                        L("locations", b, !1)
                    }), setTimeout(function() {
                        R("locations"), v.trigger("mapChange", [c, d, e])
                    }, 1e3)
                }).on("updateShareURL", function() {
                    var a = H();
                    // addthis.update("share", "url", a), addthis.url = a, addthis.toolbox(".addthis_toolbox")
                }).on("showCoach", function() {
                    e(!1)
                }).on("mapCenterChange", function(a, b) {
                    C.coords = b.k + "," + b.A
                }).on("mapZoomChange", function(a, b) {
                    C.zoom = b
                }), g()
            }

            function o(a) {
                var b = {
                    map: a.mapSource,
                    zoom: a.zoom,
                    coords: a.coords,
                    app: v,
                    metrics: K.data.current,
                    selected: B.locations,
                    selectedSidebarToggle: E
                };
                console.log("initMap"), D || n(), D = !0, v.trigger("metricsLoaded", [K.data.current]), null != y ? y.update(b) : function() {
                    y = v.view.find("div#map").geograph(b), j()
                }()
            }

            function p() {
                N(v.view), K.getInitMetrics({
                    mapSource: w,
                    zoom: C.zoom,
                    coords: C.coords
                })
            }

            function q() {
                v.view.find(".info-tooltip").remove()
            }

            function r(b, c, d) {
                v.view.addClass("hide-overflow"), c = base.fn.und(c) ? {} : c;
                var e = {
                    submit: function(a, b) {
                        setTimeout(function() {
                            v.view.removeClass("hide-overflow")
                        }, 500), b && (base.fn.und(d) || d())
                    },
                    persistent: !1
                };
                c = a.extend({}, e, c), a.prompt(b, c)
            }

            function s() {
                var a = G();
                return a ? (document.location.href = a, void 0) : r(base.config.app.prompt.badMetricsSelection)
            }

            function t() {
                q()
            }

            function u() {
                return JSON.stringify(B) === JSON.stringify(A)
            }
            var v = this;
            v.view = a(this), v.view.data(b, v), v.defaults = {
                defaultMap: window.map ? window.map : "us",
                coachFade: 444
            }, v.initialize = function() {
                return v.options = a.extend({}, v.defaults, c), d(), v
            };
            var w, x, y = null,
                z = {
                    root: function() {
                        var a = document.location.href.parseURI();
                        return a.protocol + "://" + a.authority
                    }(),
                    api: {
                        // base: "/api/index.php/", //replace with this when uploaded in a live site (not a subdomain)
                        // base: "/api/", //original code
                        base: BASE_PATH_API + "api/index.php/",
                        tail: "/map/scores"
                    },
                    // indice: "/indices-of-well-being/"
                    indice: "/"
                },
                A = {
                    dimensions: [],
                    components: [],
                    years: [],
                    locations: []
                },
                B = {},
                C = {
                    zoom: null,
                    coords: null
                },
                D = !1,
                E = "dimensions",
                F = function(b) {
                    if ("components" == E) {
                        var c = "/components:",
                            d = B.components.length - 1;
                        a.each(B.components, function(a, b) {
                            c += b + (a == d ? "" : "|")
                        })
                    }
                    if ("dimensions" == E) {
                        var e = "/dimensions:",
                            d = B.dimensions.length - 1;
                        a.each(B.dimensions, function(a, b) {
                            e += b + (a == d ? "" : "|")
                        })
                    }
                    var f = "/years:",
                        d = B.years.length - 1;
                    a.each(B.years, function(a, b) {
                        f += b + (a == d ? "" : "|")
                    });
                    var g = z.root + z.api.base + b.map + z.api.tail + (b.init ? "" : (base.fn.und(c) ? "" : c) + (base.fn.und(e) ? "" : e) + (base.fn.und(f) ? "" : f));
                    // Replaced and commented to add a key to the url. Because AJAX calls can't be detected in the api/funcs.php
                    // return g
                    // alert(g);
                    return g + "/?key=925e0310abb4dc3b5fcfbc9e6242d64e5f7ecfad"
                },
                G = function() {
                    var b = "/locations:",
                        c = B.locations.length;
                    if (!c) return !1;
                    if (a.each(B.locations, function(a, d) {
                            b += d + (a == c - 1 ? "" : encodeURIComponent("|"))
                        }), "dimensions" == E) {
                        var d = "/dimens:",
                            c = B.dimensions.length;
                        if (a.each(B.dimensions, function(a, b) {
                                d += b + (a == c - 1 ? "" : encodeURIComponent("|"))
                            }), !c) return !1
                    }
                    if ("components" == E) {
                        var e = "/components:",
                            c = B.components.length;
                        if (a.each(B.components, function(a, b) {
                                e += b + (a == c - 1 ? "" : encodeURIComponent("|"))
                            }), !c) return !1
                    }
                    var f = "/years:",
                        c = B.years.length;
                    return c ? (a.each(B.years, function(a, b) {
                        f += b + (a == c - 1 ? "" : encodeURIComponent("|"))

                        //original code
                        // }), z.root + z.indice + "life-measures-wordpress/results/" + w + "/map/scores" + (base.fn.und(f) ? "" : f) + (base.fn.und(e) ? "" : e) + (base.fn.und(b) ? "" : b) + (base.fn.und(d) ? "" : d) + (base.fn.und(C.zoom) ? "" : "/zoom:" + C.zoom) + (base.fn.und(C.coords) ? "" : "/coords:" + C.coords)) : !1
                    
                    }), z.root + z.indice + "life-measures-wordpress/results/" + w + "/map/scores" + (base.fn.und(f) ? "" : f) + (base.fn.und(e) ? "" : e) + (base.fn.und(b) ? "" : b) + (base.fn.und(d) ? "" : d)) : !1
                },  
                H = function() {
                    var b = "/locations:",
                        c = B.locations.length;
                    if (c && a.each(B.locations, function(a, d) {
                            b += d + (a == c - 1 ? "" : encodeURIComponent("|"))
                        }), "dimensions" == E) {
                        var d = "/dimens:",
                            c = B.dimensions.length;
                        a.each(B.dimensions, function(a, b) {
                            d += b + (a == c - 1 ? "" : encodeURIComponent("|"))
                        })
                    }
                    if ("components" == E) {
                        var e = "/components:",
                            c = B.components.length;
                        a.each(B.components, function(a, b) {
                            e += b + (a == c - 1 ? "" : encodeURIComponent("|"))
                        })
                    }
                    var f = "/years:",
                        c = B.years.length;
                    return c && a.each(B.years, function(a, b) {
                        f += b + (a == c - 1 ? "" : encodeURIComponent("|"))

                        //original code
                        // }), z.root + z.indice + "life-measures-wordpress/results/" + w + "/map/scores" + (base.fn.und(f) ? "" : f) + (base.fn.und(e) ? "" : e) + (base.fn.und(b) ? "" : b) + (base.fn.und(d) ? "" : d) + (base.fn.und(C.zoom) ? "" : "/zoom:" + C.zoom) + (base.fn.und(C.coords) ? "" : "/coords:" + C.coords)

                    }), z.root + z.indice + "life-measures-wordpress/results/" + w + "/map/scores" + (base.fn.und(f) ? "" : f) + (base.fn.und(e) ? "" : e) + (base.fn.und(b) ? "" : b) + (base.fn.und(d) ? "" : d)
                },
                I = function(a, b) {
                    b(a)
                },
                i = function(a) {
                    callback(a)
                },
                J = function(b, c) {
                    var d, e;
                    e = a.getJSON(b, function(a) {
                        return clearTimeout(d), base.fn.und(a) ? i(el, b) : 0 == a.length ? i(el, b) : base.fn.und(a.exception) ? (I(a, c), void 0) : i(el, b)
                    }), d = setTimeout(function() {
                        e.abort(), h()
                    }, 1e4)
                },
                K = {
                    data: {
                        init: {},
                        current: {}
                    },
                    getInitMetrics: function(a) {
                        J(F({
                            map: w
                        }), function(b) {
                            K.data.current = b, o(a)
                        })
                    }
                },
                L = v.updateSelections = function(a, b, c) {
                    switch (c) {
                        case !0:
                            var d = B[a].indexOf(b);
                            d >= 0 || B[a].push(b);
                            break;
                        case !1:
                            var d = B[a].indexOf(b);
                            0 > d || B[a].splice(d, 1)
                    }
                    v.trigger("selectionsChange", [u()])
                },
                M = v.getSelectionDefaults = function(b) {
                    if (base.fn.und(b)) a.each(A, function(a) {
                        A[a] = [], B[a] = []
                    }), "dimensions" == E && v.view.find(".sidebar__dimensions ul li").not("ul li ul li").each(function() {
                        var b = a(this).find("a.dim.active");
                        b.length && A.dimensions.push(b.attr("data-name")), B.dimensions.push(b.attr("data-name"))
                    }), "components" == E && v.view.find(".sidebar__components ul li.opened a.com").each(function() {
                        var b = a(this);
                        b.length && A.components.push(b.attr("data-name")), B.components.push(b.attr("data-name"))
                    }), v.view.find(".years-select li a.active").each(function() {
                        A.years.push(a(this).text()), B.years.push(a(this).text())
                    }), A.locations = [], B.locations = [];
                    else {
                        if (base.fn.und(b.zoom) || (C.zoom = Number(b.zoom[0])), !base.fn.und(b.coords)) {
                            var c = b.coords[0].split(",");
                            C.coords = [Number(c[0]), Number(c[1])]
                        }
                        a.each(b, function(a, b) {
                            B[a] = b
                        }), E = B.components.length ? "components" : "dimensions", window.URLSelections = null
                    }
                    K.getInitMetrics({
                        mapSource: w,
                        zoom: C.zoom,
                        coords: C.coords
                    })
                },
                N = function(a, b) {
                    b = base.fn.und(b) ? {
                        color: "#272c33"
                    } : b, a.spinner(b)
                },
                O = function(a) {
                    a.spinner("kill")
                },
                P = (v.getCurrentMap = function() {
                    return w
                }, v.isGoodSelection = function(a) {
                    switch (a) {
                        case "locations":
                            return B.locations.length <= 4;
                        case "years":
                            return B.years.length <= 4
                    }
                    return !0
                }),
                Q = (v.getCurrentMetrics = function() {
                    return K.data.current
                }, v.getMetrics = function(a) {
                    return K.data.current[a]
                }, v.getSelectionCounter = function(a) {
                    return B[a].length
                }, v.getSelections = function(a) {
                    return base.fn.und(a) ? B : B[a]
                }),
                R = v.resetSelections = function(a) {
                    return base.fn.und(a) ? void 0 : base.fn.und(B[a]) || function() {
                        return B[a] = []
                    }()
                },
                S = v.regionIsAvailable = function(a) {
                    var b = {
                        us: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
                        "int": ["AF", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BD", "BE", "BF", "BG", "BI", "BJ", "BO", "BR", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CY", "CZ", "DE", "DJ", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FR", "GE", "GH", "GN", "GR", "GT", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KM", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LT", "LU", "LV", "MA", "MD", "ME", "MG", "MK", "ML", "MN", "MR", "MT", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NZ", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SD", "SE", "SG", "SI", "SK", "SL", "SN", "SV", "SY", "TD", "TG", "TH", "TJ", "TN", "TR", "TT", "TZ", "UA", "UG", "UK", "US", "UY", "UZ", "VE", "VN", "YE", "ZA", "ZM", "ZW"]
                    };
                    return T(a, b[w]) ? !0 : !1
                },
                T = v.inArray = function(a, b) {
                    for (var c = b.length, d = 0; c > d; d++)
                        if (b[d] == a) return !0;
                    return !1
                };
            return v.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "geograph";
        a.fn[b] = function(c) {
            function d() {
                null != w.options.app && (C = w.options.selectedSidebarToggle, w.view.find('[data-map="' + w.options.map + '"]').addClass("active"), z = w.options.app, y = w.options.map, x = w.view.find("#gmap"), A = w.options.metrics, F = null === w.options.zoom ? E[y].zoom["default"] : w.options.zoom, G = null === w.options.coords ? E[y].coords : w.options.coords, e())
            }

            function e() {
                z.on("reset", function() {
                    w.view.find("#map-update-needed").fadeOut(444), j()
                }).on("locationChange", function(a, b, c, d) {
                    -1 == d || base.fn.und(d) || "" == d ? c ? p(b) : q(b) : c ? l(d) : o(d)
                }).on("componentsDimensionChange", function(a, b) {
                    J = b
                }).on("sidebarToggleChange", function(a, b) {
                    C = b.replace(/sidebar__/, "")
                }).on("mapChange", function(a, b) {
                    y = b, F = E[y].zoom["default"], G = E[y].coords
                }).on("selectionsChanged", function(a, b) {
                    w.view.find("#map-update-needed")[b ? "fadeIn" : "fadeOut"](444)
                }).on("refresh", function() {
                    w.view.find("#map-update-needed").fadeOut(444)
                }), w.view.find("a#results").unbind("click").on("click", function(a) {
                    a.preventDefault(), z.trigger("results")
                }), g(w.options)
            }

            function f() {
                var b = [];
                return a.each(A, function(a, c) {
                    b.push({
                        c: new google.maps.LatLng(Number(c.latitude), Number(c.longitude)),
                        lat: c.latitude,
                        lng: c.longitude,
                        data: {
                            name: c.name,
                            id: a
                        },
                        options: {
                            // icon: base.path.img + "map/markers_plain/" + c.rank + ".png"
                            icon: BASE_PATH + "undefinedlibrary/images/map/markers_plain/" + c.rank + ".png"
                        }
                    })
                }), b
            }

            function g(b) {
                function c(b) {
                    var c = base.config.app.colors[y].dimensions,
                        d = "";
                    return base.fn.und(c[J].components[b]) && (J = a("li.opened").find("a.dim").attr("data-name")), base.fn.und(c[J].components[b]) ? "#CCC" : (d = C.indexOf("components") > -1 ? c[J].components[b].bg : c.bg, base.fn.und(d) ? "" : d)
                }

                function d(b) {
                    var c = a(this).gmap3("get");
                    c.setCenter(b.main.getPosition()), c.setZoom(c.getZoom() + 1)
                }
                var e = (String(x.width()), String(x.height()), f()),
                    g = v();
                x.empty().gmap3({
                    map: {
                        options: {
                            center: G,
                            zoom: F,
                            mapTypeId: "cki",
                            mapTypeControlOptions: {
                                mapTypeIds: [google.maps.MapTypeId.TERRAIN, "cki"]
                            },
                            panControl: !0,
                            mapTypeControl: !1,
                            scaleControl: !1,
                            streetViewControl: !1,
                            overviewMapControl: !1,
                            zoomControl: !0,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle.SMALL
                            }
                        }
                    },
                    preserveViewport: !0,
                    styledmaptype: {
                        id: "cki",
                        options: {
                            name: "Quality of Life Measures Project"
                        },
                        styles: g
                    },
                    marker: {
                        values: e,
                        cluster: {
                            radius: E[y].clusterRadius,
                            0: {
                                content: "<div class='cluster cluster-1'></div>",
                                width: 53,
                                height: 52
                            },
                            20: {
                                content: "<div class='cluster cluster-2'></div>",
                                width: 56,
                                height: 55
                            },
                            50: {
                                content: "<div class='cluster cluster-3'></div>",
                                width: 66,
                                height: 65
                            },
                            events: {
                                click: d,
                                rightclick: function() {}
                            }
                        },
                        events: {
                            mouseover: function(a, b, c) {
                                var d = c.data.id;
                                m(d), w.bindTooltip(d)
                            },
                            mouseout: function(a, b, c) {
                                var d = c.data.id;
                                w.unbindTooltip(), n(d)
                            },
                            click: function(a, b, c) {
                                var d = c.data.id,
                                    e = s(d);
                                z.trigger("locationRequest", [d, !e.selected])
                            }
                        }
                    }
                });
                var i = (w.bindTooltip = function(a) {
                    var b = w.getTooltip(a),
                        c = {
                            x: 325,
                            y: 180
                        };
                    w.view.append(b), w.view.on("mousemove", function(a) {
                        b.css({
                            left: Number(a.pageX - c.x) + "px",
                            top: Number(a.pageY - c.y) + "px"
                        })
                    })
                }, w.unbindTooltip = function() {
                    w.view.unbind("mousemove").find(".map-tooltip").remove()
                }, w.getTooltip = function(b) {
                    var d = A[b],
                        e = (z.getSelections(C), a("<div/>"));
                    if (base.fn.und(d)) return e;
                    var f = a(base.config.app.templates.map.tooltip);
                    f.find(".id p").text(d.name), f.find(".rank span:eq(0)").text(Number(d.score).toFixed(1));
                    return d = d[C], f.find('[class*="-container"]').hide().filter(function() {
                        return a(this).attr("class") == C + "-container"
                    }).show(), f.find(".dim").hide(), a.each(d, function(a, b) {
                        base.fn.und(b) || function() {
                            var d = b.score;
                            if ("dimensions" == C) {
                                if (null == d) return;
                                f.find("." + a).show().find("p").text(Number(d).toFixed(1))
                            }
                            if ("components" == C) {
                                var e = f.find(".com").eq(0),
                                    g = e.clone(),
                                    h = Number(d).toFixed(1);
                                h >= 10 && (h = parseInt(h)), h = null === d ? "X" : h, g.css({
                                    "background-color": c(a)
                                }).find("p").text(h), f.find(".components-container").append(g.show())
                            }
                        }()
                    }), f
                }, x.gmap3("get"));
                google.maps.event.addListener(i, "idle", function() {
                    h()
                }), google.maps.event.addListener(i, "zoom", function() {}), u(i, b)
            }

            function h() {
                setTimeout(function() {
                    x.find(".cluster").parent().css("z-index", 9999999999), z.trigger("killSpinner")
                }, 500), i(), w.view.find(".map__buttons").fadeIn("666")
            }

            function i() {
                var a = x.gmap3("get");
                google.maps.event.addListener(a, "zoom_changed", function() {
                    F = a.getZoom(), F < E[y].zoom.min && a.setZoom(E[y].zoom.min), z.trigger("mapZoomChange", [F])
                }), B = a.getCenter(), google.maps.event.addListener(a, "center_changed", function() {
                    var b = a.getCenter();
                    return G[0] = b.k, G[1] = b.A, E[y].allowedBounds.contains(a.getCenter()) ? (B = a.getCenter(), z.trigger("mapCenterChange", [B]), void 0) : (a.panTo(B), void 0)
                })
            }

            function j() {
                k()
            }

            function k() {
                var a = x.gmap3("get");
                a.setZoom(E[y].zoom["default"])
            }

            function l(a) {
                var b = r(a);
                base.fn.und(b) || (b.setOptions(K), b.selected = !0)
            }

            function m(a) {
                var b = s(a);
                base.fn.und(b) || b.selected || b.setOptions(M)
            }

            function n(a) {
                var b = s(a);
                base.fn.und(b) || b.selected || b.setOptions(b.normalStyle)
            }

            function o(a) {
                var b = r(a);
                base.fn.und(b) || (b && b.setOptions(b.normalStyle), b.selected = !1)
            }

            function p(a) {
                var b = s(a);
                base.fn.und(b) || (b.selected = !0, b.setOptions(K))
            }

            function q(a) {
                var b = s(a);
                base.fn.und(b) || (b.selected = !1, b.setOptions(b.normalStyle))
            }

            function r(a) {
                for (var b = 0; b < I.placemarks.length; b++) {
                    var c = I.placemarks[b];
                    if (c.polygon.__gm_id == a) return c.polygon
                }
            }

            function s(a) {
                for (var b = 0; b < I.placemarks.length; b++) {
                    var c = I.placemarks[b];
                    if (c.polygon.id == a) return c.polygon
                }
            }

            function t(a) {
                if (!(!a instanceof String)) {
                    a = a.toLowerCase().replace(/ /g, "_");
                    var b = base.config.map.assoc[y][a];
                    return b
                }
            }

            function u(a) {
                var b = E[y].kml;
                H = new geoXML3.parser({
                    map: a,
                    markerOptions: {
                        optimized: !1
                    },
                    suppressInfoWindows: !0,
                    zoom: !1,
                    afterParse: function(b) {
                        P(a, b)
                    }
                }), H.parse(b)
            }

            function v() {
                return [{
                    featureType: "landscape.natural.landcover",
                    elementType: "geometry",
                    stylers: [{
                        weight: .1
                    }, {
                        color: "#d8e1e5"
                    }, {
                        saturation: -100
                    }, {
                        gamma: 9.99
                    }, {
                        lightness: -8
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.natural",
                    stylers: [{
                        saturation: -98
                    }, {
                        gamma: 2.01
                    }, {
                        color: "#d8e1e5"
                    }, {
                        lightness: 51
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    stylers: [{
                        hue: "#e5f6ff"
                    }, {
                        lightness: 65
                    }]
                }, {
                    featureType: "landscape.natural.terrain",
                    stylers: [{
                        color: "#d8e1e5"
                    }, {
                        saturation: -100
                    }, {
                        lightness: 26
                    }, {
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "administrative",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi",
                    stylers: [{
                        visibility: "off"
                    }]
                }]
            }
            var w = this;
            w.view = a(this), w.view.data(b, w), w.defaults = {
                defaultMap: window.map ? window.map : "us",
                app: null,
                metrics: {},
                selectedSidebarToggle: "dimensions",
                selected: [],
                zoom: null,
                coords: null
            }, w.initialize = function() {
                return w.options = a.extend({}, w.defaults, c), d(), w
            };
            // var x, y, z, A, B, C, D = base.path.kml,
            var x, y, z, A, B, C,
                D = BASE_PATH + "undefinedlibrary/kml/"
                E = {
                    us: {
                        kml: D + "usa.kml",
                        zoom: {
                            "default": 5,
                            min: 3,
                            max: 1e3
                        },
                        coords: [37.22, -98.926788],
                        clusterRadius: 40,
                        allowedBounds: new google.maps.LatLngBounds(new google.maps.LatLng(16.744888, -163.986725), new google.maps.LatLng(70.766395, -58.342196))
                    },
                    "int": {
                        kml: D + "world.kml",
                        zoom: {
                            "default": 3,
                            min: 3,
                            max: 1e3
                        },
                        coords: [42.779275, -102.926788],
                        clusterRadius: 60,
                        allowedBounds: new google.maps.LatLngBounds(new google.maps.LatLng(-57.006816, 81.386722), new google.maps.LatLng(70.119187, 74.531247))
                    }
                },
                F = 0,
                G = [],
                H = null,
                I = null,
                J = "opportunity",
                K = {
                    fillColor: "#fee26a",
                    strokeColor: "#000000",
                    fillOpacity: .9,
                    strokeWidth: 10
                },
                L = {
                    strokeColor: "#fee26a",
                    strokeWidth: 10
                },
                M = {
                    fillColor: "#fef0b5",
                    strokeColor: "#000000",
                    fillOpacity: .9,
                    strokeWidth: 10
                },
                N = {
                    strokeColor: "#fef0b5",
                    strokeWidth: 10
                },
                O = (w.update = function(a) {
                    A = "", A = a.metrics, x.gmap3("destroy"), g(a)
                }, function(a, b) {
                    var c;
                    google.maps.event.addListener(a, "dblclick", function() {
                        clearTimeout(c)
                    }), google.maps.event.addListener(a, "click", function() {
                        c = setTimeout(function() {
                            var c = document.getElementById("row" + b);
                            c && (c.style.backgroundColor = "#b9b8a2");
                            var d = a.id || t(a.title);
                            a.selected = !a.selected, z.trigger("locationRequest", [d, a.selected, a.__gm_id])
                        }, 250)
                    }), google.maps.event.addListener(a, "mouseout", function() {
                        var c = document.getElementById("row" + b);
                        c && (c.style.backgroundColor = ""), w.unbindTooltip(), a.selected || a.setOptions(a.normalStyle)
                    }), google.maps.event.addListener(a, "mouseover", function() {
                        var c = document.getElementById("row" + b);
                        if (c && (c.style.backgroundColor = ""), w.bindTooltip(a.id), !a.selected) {
                            var d = a.id || t(a.title);
                            "" != d && z.regionIsAvailable(d) && (a instanceof google.maps.Polygon ? a.setOptions(M) : a instanceof google.maps.Polyline && a.setOptions(N))
                        }
                    })
                }),
                P = function(a, b) {
                    var d = a.getBounds(),
                        e = 0;
                    d || (d = new google.maps.LatLngBounds), I = b[0];
                    for (var e = 0; e < I.placemarks.length; e++) {
                        var f = I.placemarks[e];
                        if (f.polygon) {
                            var g = Q(f.style.color),
                                h = Q(f.style.fillcolor),
                                i = {
                                    strokeColor: g.color,
                                    strokeWeight: f.style.width,
                                    strokeOpacity: g.opacity,
                                    fillColor: h.color,
                                    fillOpacity: h.opacity
                                };
                            f.polygon.normalStyle = i, f.polygon.selected = !1, f.polygon.id = f.description, z.inArray(f.polygon.id, c.selected) && (f.polygon.selected = !0, f.polygon instanceof google.maps.Polygon ? f.polygon.setOptions(K) : f.polygon instanceof google.maps.Polyline && f.polygon.setOptions(L));
                            var j = f.polygon;
                            O(j, e)
                        }
                    }
                },
                Q = function(a) {
                    var b = {};
                    return a ? (aa = a.substr(0, 2), bb = a.substr(2, 2), gg = a.substr(4, 2), rr = a.substr(6, 2), b.color = "#" + rr + gg + bb, b.opacity = parseInt(aa, 16) / 256) : (b.color = R(), b.opacity = .45), b
                },
                R = function() {
                    var a = "#",
                        b = 8388607 * Math.random(),
                        c = b.toString(16);
                    return a += c.substring(0, c.indexOf("."))
                };
            return w.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "mapbar";
        a.fn[b] = function(c) {
            function d() {
                null != h.options.app && (__app = h.options.app, j = h.view.find(".btn-toggle"), j.filter('[data-map="' + h.options.mapSource + '"]').addClass("active"), i = h.view.find('input[type="search"]'), e())
            }

            function e() {
                j.unbind("click").on("click", function(b) {
                    b.preventDefault();
                    var c = a(this);
                    if (!c.hasClass("active")) {
                        var d = function() {
                                c.addClass("active").siblings().removeClass("active"), __app.trigger("mapChangeRequest", [c.attr("data-map")]), f()
                            },
                            e = base.config.app.prompt.mapChange[c.attr("data-map")],
                            g = !1;
                        g ? d() : __app.trigger("prompt", [e, {
                            buttons: {
                                Continue: !0,
                                Cancel: !1
                            }
                        }, d])
                    }
                }), i.unbind("keydown").on("keydown", function(a) {
                    return 13 == a.which || 10 == a.which ? (a.preventDefault(), !1) : void 0
                }), __app.on("mapChange", function(a, b) {
                    i.attr("placeholder", "Find " + ("us" == b ? "State" : "Country")).val("")
                }), __app.on("metricsLoaded", function() {
                    f()
                }), h.view.find(".addthis_toolbox a").on("click", function() {
                    __app.trigger("updateShareURL")
                }), h.view.find(".showcoach").on("click", function(a) {
                    a.preventDefault(), __app.trigger("showCoach")
                }), h.view.fadeIn("666")
            }

            function f() {
                var a = g();
                i.unbind("autocomplete").autocomplete({
                    width: 448,
                    delimiter: /(,|;)\s*/,
                    lookup: a,
                    onSelect: function(a) {
                        __app.trigger("locationRequest", [a.data, !0, -1])
                    }
                })
            }

            function g() {
                var b = [],
                    c = __app.getCurrentMetrics();
                return a.each(c, function(a, c) {
                    b.push({
                        value: c.name,
                        data: a
                    })
                }), b
            }
            var h = this;
            h.view = a(this), h.view.data(b, h), h.defaults = {
                app: null,
                metrics: [],
                mapSource: window.map ? window.map : "us"
            }, h.initialize = function() {
                return h.options = a.extend({}, h.defaults, c), d(), h
            };
            var i, j;
            return h.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "sidebar";
        a.fn[b] = function(c) {
            function d() {
                null != q.options.app && (w = q.options.mapSource, v = q.options.selectedSidebarToggle, r = q.options.app, s = q.view.find(".sidebar__dimensions"), t = q.view.find(".sidebar__components").hide(), u = q.view.find(".sidebar__years"), e())
            }

            function e() {
                t.each(function() {
                    var b = a(this),
                        c = b.hasClass("us") ? "us" : "int",
                        d = base.config.app.colors[c];
                    a.each(d.dimensions, function(c, e) {
                        var f = 0;
                        b.find("li." + c).find("ul li").each(function() {
                            var b = base.fn.colorfade(e.bg, ++f / 10),
                                g = a(this).find("a.com").attr("data-name");
                            d.dimensions[c].components[g] = {
                                bg: b,
                                fg: e.fg
                            }, a(this).find("a.com").css({
                                "background-color": b
                            })
                        }), b.find("li ul").hide()
                    }), base.config.app.colors[c] = d
                }), l(!1), f()
            }

            function f() {
                p(), q.view.find(".sidebar__dimensions a.dim").unbind("click").on("click", function(b) {
                    b.preventDefault(), g("#reset"), r.trigger("dimensionChange", [a(this).attr("class").replace(/dim/, "").replace(/active/, "").trim(), !a(this).hasClass("active")]), a(this).toggleClass("active")
                }), q.view.find(".sidebar__components a.com").unbind("click").on("click", function(b) {
                    b.preventDefault(), g("#reset"), r.trigger("componentChange", [a(this).attr("class").replace(/com/, "").replace(/active/, "").trim(), !a(this).hasClass("active")]), a(this).toggleClass("active")
                }), q.view.find(".sidebar__components a.dim").unbind("click").on("click", function() {
                    var b = 444,
                        c = a(this).closest(".opened"),
                        d = a(this).parent().parent().find(".opened");
                    if (c.find("a.com.active").length) j();
                    else {
                        var e = a(this).closest("ul");
                        if (e.find("a.com.active").length) return r.trigger("prompt", [base.config.app.prompt.onlyOneDimensionByComponents]), !1
                    }
                    var f = a(this).parent().hasClass("opened");
                    d.removeClass("opened").find("ul").slideUp(b), f || a(this).parent().addClass("opened").find("ul").slideDown(b), r.trigger("componentsDimensionChange", [a(this).attr("data-name")])
                }), q.view.find("a.info").unbind("mouseenter").on("mouseenter", function(b) {
                    b.preventDefault(), r.trigger("removeInfoTooltip");
                    var c = a(y.infoTooltip).css({
                            left: a(this).offset().left + 8,
                            position: "absolute",
                            top: a(this).offset().top - 189,
                            "z-index": 9999999
                        }).addClass(a(this).parent().attr("class")),
                        d = a(this).attr("data-tooltip");
                    if (!base.fn.und(d)) {
                        var e = "";
                        if (d.indexOf(".") > -1) {
                            var f = d.split("."),
                                g = base.config.app.tooltip;
                            a.each(f, function(a, b) {
                                g = base.fn.und(g[b]) ? e : g[b], base.fn.und(g) || (e = g)
                            }), "object" == typeof e && (e = e[r.getCurrentMap()])
                        } else e = base.config.app.tooltip[d];
                        base.fn.und(e) || "" == e || (c.find("p").html(e), r.trigger("injectElem", ["prepend", c, function() {
                            k(c)
                        }]), a(this).on("mouseleave", function(b) {
                            b.preventDefault(), x = setTimeout(function() {
                                c.fadeOut(444, function() {
                                    a(this).remove()
                                })
                            }, 222)
                        }))
                    }
                }).unbind("click").on("click", function(a) {
                    a.preventDefault()
                }), u.find("a.btn.year").unbind("click").on("click", function(b) {
                    b.preventDefault(), r.trigger("yearRequest", [a(this).text(), !a(this).hasClass("active")])
                }), r.on("yearChange", function(b, c, d) {
                    g("#reset"), u.find("a.btn.year").filter(function() {
                        return a(this).text() == c
                    })[d ? "addClass" : "removeClass"]("active")
                }).on("resetComponents", function() {
                    j()
                }), q.view.find(".sidebar__toggler .btn-toggle").unbind("click").on("click", function(b) {
                    b.preventDefault();
                    var c = a(this),
                        d = function() {
                            c.addClass("active").siblings().removeClass("active"), s.hide(), t.hide(), v = c.attr("data-toggle").replace(/sidebar__/, ""), j(), r.trigger("sidebarToggleChange", [v]);
                            var a = function() {
                                r.trigger("refresh")
                            };
                            "components" == v ? (q.view.find(".sidebar__" + v + "." + w).show(), m(a)) : (q.view.find(".sidebar__" + v).show(), n(a))
                        },
                        e = !1;
                    e ? d() : r.trigger("prompt", [base.config.app.prompt.dimComToggle, {
                        buttons: {
                            Continue: !0,
                            Cancel: !1
                        }
                    }, d])
                }), q.view.find("a#refresh").unbind("click").on("click", function(b) {
                    b.preventDefault();
                    var c = a(this);
                    if (!i(c)) {
                        var d = function() {
                                c.addClass("disabled"), r.trigger("refresh")
                            },
                            e = !1;
                        e ? d() : r.trigger("prompt", [base.config.app.prompt.updateMap, {
                            buttons: {
                                Continue: !0,
                                Cancel: !1
                            }
                        }, d])
                    }
                }).addClass("disabled"), q.view.find("a#reset").unbind("click").on("click", function(a) {
                    a.preventDefault();
                    var b = function() {
                            r.trigger("reset")
                        },
                        c = !1;
                    c ? b() : r.trigger("prompt", [base.config.app.prompt.reset, {
                        buttons: {
                            Continue: !0,
                            Cancel: !1
                        }
                    }, b])
                }), r.on("yearRemove", function(b, c) {
                    setTimeout(function() {
                        u.find("li").filter(function() {
                            return a(this).find("a").text() == String(c)
                        }).find("a").removeClass("active")
                    }, 222)
                }), r.on("mapChange", function(a, b) {
                    w = b, l(!0)
                }), r.on("metricsLoaded", function() {
                    var b = r.getSelections("locations");
                    console.log(["aLocations", b]), b.length && a.each(b, function(a, b) {
                        z(b, !1), z(b, !0)
                    })
                }), r.on("reset", function() {
                    o()
                }), r.on("refresh", function() {
                    h("#refresh")
                }), r.on("initUI", function(b, c) {
                    if (c.dimensions.length && (s.find("li a").removeClass("active"), a.each(c.dimensions, function(a, b) {
                            s.find("li." + b + " a").addClass("active")
                        })), c.components.length) {
                        t.find("li ul li a").removeClass("active"), a.each(c.components, function(a, b) {
                            t.find("li ul li." + b + " a").addClass("active")
                        });
                        var d = q.view.find(".sidebar__toggler .btn-toggle").filter(function() {
                            return "sidebar__components" == a(this).attr("data-toggle")
                        });
                        d.addClass("active").siblings().removeClass("active"), s.hide(), t.hide(), v = d.attr("data-toggle").replace(/sidebar__/, ""), r.trigger("sidebarToggleChange", [v]);
                        var e = function() {};
                        q.view.find(".sidebar__" + v + "." + w).show(), m(e)
                    }
                    u.find("li a").removeClass("active"), a.each(c.years, function(b, c) {
                        u.find("li a").filter(function() {
                            return a(this).text() == c
                        }).addClass("active")
                    }), a.each(c.locations, function(a, b) {
                        c.locations.splice(a, 1), r.trigger("locationRequest", [b, !0])
                    })
                }), r.on("locationChange", function(a, b, c, d) {
                    z(b, c, d), setTimeout(function() {
                        c || q.view.find(".locations-table-body").find('li[data-gm-id="' + d + '"]').remove()
                    }, 222)
                }), r.on("selectionsChange", function() {
                    g("#refresh")
                }), a(window).on("resize", function() {
                    q.view.css("height", a(window).innerHeight())
                })
            }

            function g(a) {
                q.view.find(a).removeClass("disabled")
            }

            function h(a) {
                q.view.find(a).addClass("disabled")
            }

            function i(a) {
                return a.hasClass("disabled")
            }

            function j() {
                t.find("li ul li a").removeClass("active"), r.resetSelections("components")
            }

            function k(b) {
                b.on("mouseenter", function() {
                    clearTimeout(x)
                }).on("mouseleave", function(b) {
                    b.preventDefault();
                    var c = a(this);
                    x = setTimeout(function() {
                        c.fadeOut(444, function() {
                            a(this).remove()
                        })
                    }, 222)
                })
            }

            function l(a) {
                return q.view.find(".sidebar__locations").find(".map").hide().filter("." + w).show(), "components" == v ? (t.hide().filter("." + w).show(), m(function() {
                    r.trigger("refresh")
                }), void 0) : (h("#reset"), !a || r.trigger("refresh"), void 0)
            }

            function m(b) {
                var c = t.filter("." + w).find("li").not("li ul li");
                c.removeClass("opened").find("ul").slideUp(444).find("a.com").removeClass("active");
                var d = r.getSelections("components");
                d.length ? (c = c.filter(function() {
                    return a(this).find("." + d[0]).length > 0
                }), a.each(d, function(a, b) {
                    c.find("a.com." + b).addClass("active"), r.trigger("componentChange", [b, !0])
                })) : (c = c.eq(0), c.find("a.com").addClass("active").each(function() {
                    r.trigger("componentChange", [a(this).attr("data-name").trim(), !0])
                })), r.trigger("componentsDimensionChange", [c.find("a.dim").attr("data-name")]), c.addClass("opened").find("ul").slideDown(444), base.fn.und(b) || b()
            }

            function n(b) {
                var c = s.find("li");
                c.find("a.dim").removeClass("active"), c.find("a.dim").addClass("active").each(function() {
                    r.trigger("dimensionChange", [a(this).attr("class").replace(/dim/, "").replace(/active/, "").trim(), a(this).hasClass("active")])
                }), base.fn.und(b) || b()
            }

            function o() {
                h("#reset"), h("#refresh");
                var b = function() {
                    "dimensions" == v && (s.find("li a.dim").addClass("active"), t.find("li a.com").removeClass("active")), u.find("li a.year").removeClass("active").filter(function() {
                        return a(this).hasClass("default")
                    }).addClass("active"), q.view.find(".locations-table-body").empty(), r.getSelectionDefaults()
                };
                "components" == v ? m(b) : b()
            }

            function p() {
                q.view.find("a.close").unbind("click").on("click", function(b) {
                    b.preventDefault(), r.trigger("locationRequest", [a(this).attr("data-location-id"), !1, a(this).attr("data-gm-id")]), a(this).parent().remove()
                })
            }
            var q = this;
            q.view = a(this), q.view.data(b, q), q.defaults = {
                app: null,
                selectedSidebarToggle: "dimensions",
                mapSource: "us"
            }, q.initialize = function() {
                return q.options = a.extend({}, q.defaults, c), d(), q
            };
            var r, s, t, u, v, w, x, y = base.config.app.templates.sidebar,
                z = q.updateLocations = function(b, c, d) {
                    switch (c) {
                        case !1:
                            q.view.find('[data-location-id="' + b + '"]').remove();
                            break;
                        case !0:
                            q.view.find('[data-location-id="' + b + '"]').remove();
                            var e = r.getMetrics(b);
                            if (base.fn.und(e)) return;
                            var f = a(base.config.app.templates.sidebar.region);
                            f.attr("data-location-id", b).attr("data-gm-id", d).find(".name").text(e.name).parent().find(".ranking").text(e.rank).parent().find(".score").text(Number(e.score).toFixed(1)).parent().parent().siblings("a.close").attr("data-location-id", b).attr("data-gm-id", d), q.view.find(".locations-table-body").prepend(f), p()
                    }
                };
            return q.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "nav";
        a.fn[b] = function(c) {
            function d() {
                eNavToggleBtn = f.view.find("a#nav__mobile--trigger"), Snapper = new Snap({
                    element: document.getElementById("container"),
                    disable: "left",
                    transitionSpeed: .3,
                    touchToDrag: !1
                }), e()
            }

            function e() {
                eNavToggleBtn.on("click", function(a) {
                    return a.preventDefault(), "right" == Snapper.state().state ? Snapper.close() : Snapper.open("right"), !1
                })
            }
            var f = this;
            return f.view = a(this), f.view.data(b, f), f.defaults = {}, f.initialize = function() {
                return f.options = a.extend({}, f.defaults, c), d(), f
            }, f.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "spinner";
        a.fn[b] = function(c) {
            function d() {
                var b = function() {
                    var b = a("<div/>").addClass("spinner-container");
                    f.view.prepend(b), g = new Spinner(f.options).spin(b[0])
                };
                e() || b()
            }

            function e() {
                return f.view.find(".spinner-container").length > 0
            }
            var f = this;
            f.view = a(this), f.view.data(b, f), f.defaults = {
                lines: 13,
                length: 20,
                width: 6,
                radius: 30,
                corners: 1,
                rotate: 0,
                direction: 1,
                color: "#FFF",
                speed: 1,
                trail: 60,
                shadow: !1,
                hwaccel: !1,
                className: "spinner",
                zIndex: 2e9,
                top: "auto",
                left: "auto"
            }, f.initialize = function() {
                return f.options = a.extend({}, f.defaults, c), d(), f
            }; {
                var g;
                f.kill = function(a) {
                    f.view.find(".spinner-container").remove(), base.fn.und(a) || a()
                }
            }
            return "kill" != c ? f.initialize() : f.kill()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "blog";
        a.fn[b] = function(c) {
            function d() {
                g = f.view.find("#main"), g.isotope({
                    itemSelector: "section.post.blog"
                }), e();
                var b = window.location.pathname,
                    c = b.substring(0, b.lastIndexOf("/")),
                    d = window.location.hash.substring(1);
                "/updates" == c && d && (a("html,body").animate({
                    scrollTop: f.view.find(".filter-container").offset().top - 40
                }, 500, "swing"), f.view.find("a.filter-link[href*='#" + d + "']").trigger("click"))
            }

            function e() {
                a(".filter-box a.filter-link, body.blog #menu-footer a[href*='/updates/#']").on("click", function(b) {
                    var c = a(this),
                        d = a(this).attr("href");
                    if (d = d.slice(d.indexOf("#") + 1), window.location.hash = d, c.parents("#menu-footer") && a("html,body").animate({
                            scrollTop: a(".filter-container").offset().top - 40
                        }, 500, "swing"), c.hasClass("selected")) return !1;
                    f.view.find("a.filter-link").removeClass("selected"), f.view.find("a.filter-link[href*='#" + d + "']").addClass("selected");
                    var e, h = {},
                        i = "filter";
                    return e = "all" == d ? "*" : "." + d, e = "false" === e ? !1 : e, h[i] = e, "layoutMode" === i && "function" == typeof changeLayoutMode ? changeLayoutMode(c, h) : g.isotope(h), b.preventDefault(), !1
                })
            }
            var f = this;
            f.view = a(this), f.view.data(b, f), f.defaults = {}, f.initialize = function() {
                return f.options = a.extend({}, f.defaults, c), d(), f
            };
            var g;
            return f.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "getdata";
        a.fn[b] = function(c) {
            function d() {
                e()
            }

            function e() {
                var a = f.view.find("section.stats").find(".stats-list");
                a.owlCarousel({
                    items: 1,
                    singleItem: !0,
                    itemsScaleUp: !1,
                    autoPlay: !0,
                    stopOnHover: !0,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1e3,
                    navigation: !0,
                    navigationText: ["<i class='entypo chevron-small-left'></i>", "<i class='entypo chevron-small-right'></i>"],
                    rewindNav: !0,
                    scrollPerPage: !1,
                    pagination: !1,
                    paginationNumbers: !1,
                    autoHeight: !1,
                    dragBeforeAnimFinish: !0,
                    mouseDrag: !1,
                    touchDrag: !0,
                    transitionStyle: "fade",
                    addClassActive: !0
                })
            }
            var f = this;
            return f.view = a(this), f.view.data(b, f), f.defaults = {}, f.initialize = function() {
                return f.options = a.extend({}, f.defaults, c), d(), f
            }, f.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "home";
        a.fn[b] = function(c) {
            function d() {
                e()
            }

            function e() {
                var b = (function() {
                    function a(b) {
                        return new a.fn.init(b)
                    }

                    function b(a, b, c) {
                        if (!c.contentWindow.postMessage) return !1;
                        var d = c.getAttribute("src").split("?")[0],
                            a = JSON.stringify({
                                method: a,
                                value: b
                            });
                        "//" === d.substr(0, 2) && (d = window.location.protocol + d), c.contentWindow.postMessage(a, d)
                    }

                    function c(a) {
                        var b, c;
                        try {
                            b = JSON.parse(a.data), c = b.event || b.method
                        } catch (d) {}
                        if ("ready" == c && !f && (f = !0), a.origin != g) return !1;
                        var a = b.value,
                            h = b.data,
                            i = "" === i ? null : b.player_id;
                        return b = i ? e[i][c] : e[c], c = [], b ? (void 0 !== a && c.push(a), h && c.push(h), i && c.push(i), 0 < c.length ? b.apply(null, c) : b.call()) : !1
                    }

                    function d(a, b, c) {
                        c ? (e[c] || (e[c] = {}), e[c][a] = b) : e[a] = b
                    }
                    var e = {},
                        f = !1,
                        g = "";
                    return a.fn = a.prototype = {
                        element: null,
                        init: function(a) {
                            "string" == typeof a && (a = document.getElementById(a)), this.element = a, a = this.element.getAttribute("src"), "//" === a.substr(0, 2) && (a = window.location.protocol + a);
                            for (var a = a.split("/"), b = "", c = 0, d = a.length; d > c && 3 > c; c++) b += a[c], 2 > c && (b += "/");
                            return g = b, this
                        },
                        api: function(a, c) {
                            if (!this.element || !a) return !1;
                            var e = this.element,
                                f = "" !== e.id ? e.id : null,
                                g = c && c.constructor && c.call && c.apply ? null : c,
                                h = c && c.constructor && c.call && c.apply ? c : null;
                            return h && d(a, h, f), b(a, g, e), this
                        },
                        addEvent: function(a, c) {
                            if (!this.element) return !1;
                            var e = this.element,
                                g = "" !== e.id ? e.id : null;
                            return d(a, c, g), "ready" != a ? b("addEventListener", a, e) : "ready" == a && f && c.call(null, g), this
                        },
                        removeEvent: function(a) {
                            if (!this.element) return !1;
                            var c, d = this.element;
                            a: {
                                if ((c = "" !== d.id ? d.id : null) && e[c]) {
                                    if (!e[c][a]) {
                                        c = !1;
                                        break a
                                    }
                                    e[c][a] = null
                                } else {
                                    if (!e[a]) {
                                        c = !1;
                                        break a
                                    }
                                    e[a] = null
                                }
                                c = !0
                            }
                            "ready" != a && c && b("removeEventListener", a, d)
                        }
                    }, a.fn.init.prototype = a.fn, window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent("onmessage", c), window.Froogaloop = window.$f = a
                }(), null);
                mobileSafari = /\sAppleWebKit/.test(navigator.userAgent) && /\sMobile/.test(navigator.userAgent), iPhone = mobileSafari && /iPhone/.test(navigator.userAgent), iPad = mobileSafari && /iPad/.test(navigator.userAgent), a(document).click(function() {
                    b && b.close()
                }), a(document).bind("touchend", function() {
                    b && b.close()
                });
                var c = a("section.carousel#maps").find(".slide-list");
                c.owlCarousel({
                    items: 1,
                    singleItem: !0,
                    itemsScaleUp: !1,
                    autoPlay: 8e3,
                    stopOnHover: !0,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1e3,
                    navigation: false,
                    navigationText: ["<i class='entypo chevron-small-left'></i>", "<i class='entypo chevron-small-right'></i>"],
                    rewindNav: !0,
                    scrollPerPage: !1,
                    pagination: !0,
                    paginationNumbers: !1,
                    baseClass: "owl-carousel",
                    theme: "owl-theme",
                    lazyLoad: !1,
                    lazyFollow: !0,
                    lazyEffect: "fade",
                    autoHeight: !1,
                    dragBeforeAnimFinish: !0,
                    mouseDrag: !1,
                    touchDrag: !0,
                    transitionStyle: !1,
                    addClassActive: !0
                });
                var d = a("section.carousel#stats").find(".slide-list");
                d.owlCarousel({
                    items: 2,
                    itemsCustom: !1,
                    itemsDesktop: !1,
                    itemsDesktopSmall: !1,
                    itemsTablet: !1,
                    itemsTabletSmall: !1,
                    itemsMobile: [539, 1],
                    singleItem: !1,
                    itemsScaleUp: !1,
                    autoPlay: !0,
                    stopOnHover: !0,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1e3,
                    navigation: !0,
                    navigationText: ["<i class='entypo chevron-small-left'></i>", "<i class='entypo chevron-small-right'></i>"],
                    rewindNav: !0,
                    scrollPerPage: !0,
                    pagination: !0,
                    paginationNumbers: !1,
                    baseClass: "owl-carousel",
                    theme: "owl-theme",
                    lazyLoad: !1,
                    lazyFollow: !0,
                    lazyEffect: "fade",
                    autoHeight: !1,
                    dragBeforeAnimFinish: !0,
                    mouseDrag: !1,
                    touchDrag: !0,
                    transitionStyle: !1,
                    addClassActive: !0
                })
            }
            var f = this;
            return f.view = a(this), f.view.data(b, f), f.defaults = {}, f.initialize = function() {
                return f.options = a.extend({}, f.defaults, c), d(), f
            }, f.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery),
function(a) {
    try {
        var b = "page";
        a.fn[b] = function(c) {
            function d() {
                var a = document.location.href.parseURI();
                g = a.protocol + "://" + a.authority, e()
            }

            function e() {
                function b() {
                    var a = f.view.find("section.dimensions .owl-item.active"),
                        b = f.view.find("section.dimensions a.download"),
                        c = f.view.find("section.dimensions .slide-toggle a"),
                        d = "Download U.S. Variables",
                        e = PDF_PATH + "pdf/Quality_of_Life_Variables_US_Measures.pdf",
                        g = "Download World Variables",
                        h = PDF_PATH + "pdf/Quality_of_Life_Variables_World_Measures.pdf";
                    c.removeClass("selected"), a.has("li.us").length ? (f.view.find("section.dimensions .slide-toggle a.us").addClass("selected"), b.text(d).attr("href", e)) : a.has("li.world").length && (f.view.find("section.dimensions .slide-toggle a.world").addClass("selected"), b.text(g).attr("href", h))
                }

                function c() {
                    var a = f.view.find("section.rankings .owl-item.active"),
                        b = f.view.find("section.rankings .slide-toggle a");
                    b.removeClass("selected"), a.has("li.us").length ? f.view.find("section.rankings .slide-toggle a.us").addClass("selected") : a.has("li.world").length && f.view.find("section.rankings .slide-toggle a.world").addClass("selected")
                }
                var d = f.view.find("section.carousel.dimensions").find(".slide-list");
                d.owlCarousel({
                    items: 1,
                    singleItem: !0,
                    itemsScaleUp: !1,
                    autoPlay: !1,
                    stopOnHover: !0,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1e3,
                    navigation: !0,
                    navigationText: ["<i class='entypo chevron-small-left'></i>", "<i class='entypo chevron-small-right'></i>"],
                    rewindNav: !0,
                    scrollPerPage: !1,
                    pagination: !0,
                    paginationNumbers: !1,
                    baseClass: "owl-carousel",
                    theme: "owl-theme",
                    lazyLoad: !1,
                    lazyFollow: !0,
                    lazyEffect: "fade",
                    autoHeight: !1,
                    dragBeforeAnimFinish: !0,
                    mouseDrag: !1,
                    touchDrag: !0,
                    transitionStyle: !1,
                    addClassActive: !0,
                    afterAction: b
                });
                var e = d.data("owlCarousel");
                a("section.dimensions .slide-toggle a").on("click", function(b) {
                    b.preventDefault(), a(".slide-toggle a").removeClass("selected"), a(this).addClass("selected"), a(this).hasClass("us") ? e.goTo(0) : a(this).hasClass("world") && e.goTo(1)
                });
                var h = f.view.find("section.carousel.rankings").find(".slide-list");
                h.owlCarousel({
                    items: 1,
                    singleItem: !0,
                    itemsScaleUp: !1,
                    autoPlay: !1,
                    stopOnHover: !0,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1e3,
                    navigation: !0,
                    navigationText: ["<i class='entypo chevron-small-left'></i>", "<i class='entypo chevron-small-right'></i>"],
                    rewindNav: !0,
                    scrollPerPage: !1,
                    pagination: !0,
                    paginationNumbers: !1,
                    baseClass: "owl-carousel",
                    theme: "owl-theme",
                    lazyLoad: !1,
                    lazyFollow: !0,
                    lazyEffect: "fade",
                    autoHeight: !1,
                    dragBeforeAnimFinish: !0,
                    mouseDrag: !1,
                    touchDrag: !0,
                    transitionStyle: !1,
                    addClassActive: !0,
                    afterAction: c
                });
                var i = h.data("owlCarousel");
                a("section.rankings .slide-toggle a").on("click", function(b) {
                    b.preventDefault(), a(".slide-toggle a").removeClass("selected"), a(this).addClass("selected"), a(this).hasClass("us") ? i.goTo(0) : a(this).hasClass("world") && i.goTo(1)
                }), a("form.contact-form").submit(function(b) {
                    b.preventDefault();
                    var c, d = a("form.contact-form"),
                        e = d.find("input[name='first_name']").val(),
                        f = d.find("input[name='last_name']").val(),
                        h = d.find("input[name='email']").val(),
                        i = d.find("input[name='confirm_email']").val(),
                        j = d.find("select[name='reason']").val(),
                        k = d.find("textarea[name='message']").val(),
                        l = d.find("input[name='updates']").val();
                    if (h != i && (d.find("input[name='email'], input[name='confirm_email']").addClass("form-error"), d.find(".confirmation").removeClass("ok").addClass("error").html('Please make sure that your "Email" and "Confirm Email" are the same.').fadeIn(250), c = !0), h && i && j && k || (d.find(".confirmation").removeClass("error, ok"), d.find("input, select, textarea").removeClass("form-error"), h || d.find("input[name='email']").addClass("form-error"), i || d.find("input[name='confirm_email']").addClass("form-error"), j || d.find("select[name='reason']").addClass("form-error"), k || d.find("textarea[name='message']").addClass("form-error"), d.find(".confirmation").removeClass("ok").addClass("error").html("Please make sure that all required fields are entered.").fadeIn(250), c = !0), !c) {
                        d.find("input, select, textarea, label").removeClass("form-error"), d.find(".confirmation").removeClass("error").hide();
                        var m = {
                                first_name: e,
                                last_name: f,
                                email: h,
                                reason: j,
                                message: k,
                                updates: l
                            },
                            n = a.ajax({
                                data: m,
                                url: g + "/wp-content/themes/base-joints/library/ajax/submit_contact.php"
                            });
                        n.done(function() {
                            d.find("input[type='text'], input[type='email'], select, textarea").val(""), d.find("input[type='checkbox']").prop("checked", !1), d.find(".confirmation").addClass("ok").html("Thank you for your message. You will hear back from us shortly.").fadeIn(250)
                        }), n.fail(function(a, b) {
                            alert("Request failed: " + b)
                        })
                    }
                }), a("form.api-registration-form").submit(function(b) {
                    b.preventDefault();
                    var c, d = a("form.api-registration-form"),
                        e = d.find("input[name='first_name']").val(),
                        f = d.find("input[name='last_name']").val(),
                        h = d.find("input[name='email']").val(),
                        i = d.find("input[name='confirm_email']").val(),
                        j = d.find("input[name='terms']").prop("checked");
                    if (j || (d.find("input[name='terms']").addClass("form-error"), d.find("input[name='terms']").parents("label").addClass("form-error"), a(".confirmation").removeClass("ok").addClass("error").html("You must agree to the Terms & Conditions to use the Well-Being API.").fadeIn(250), c = !0), h != i && (d.find("input[name='email'], input[name='confirm_email']").addClass("form-error"), d.find(".confirmation").removeClass("ok").addClass("error").html('Please make sure that your "Email" and "Confirm Email" are the same.').fadeIn(250), c = !0), h && i || (d.find(".confirmation").removeClass("error, ok"), d.find("input, select, textarea").removeClass("form-error"), h || d.find("input[name='email']").addClass("form-error"), i || d.find("input[name='confirm_email']").addClass("form-error"), d.find(".confirmation").removeClass("ok").addClass("error").html("Please make sure that all required fields are entered.").fadeIn(250), c = !0), !c) {
                        d.find("input, select, textarea, label").removeClass("form-error"), d.find(".confirmation").removeClass("error").hide();
                        var k = {
                                first_name: e,
                                last_name: f,
                                email: h,
                                terms: j
                            },
                            l = a.ajax({
                                data: k,
                                url: g + "/wp-content/themes/base-joints/library/ajax/submit_api_registration.php"
                            });
                        l.done(function() {
                            d.find("input[type='text'], input[type='email'], select, textarea").val(""), d.find("input[type='checkbox']").prop("checked", !1), d.find(".confirmation").addClass("ok").html("A confirmation email has been sent to <strong>" + h + "</strong>. Please click the link in that email to validate your email address and complete API registration.").fadeIn()
                        }), l.fail(function(a, b) {
                            alert("Request failed: " + b)
                        })
                    }
                }), a("form.get-updates-form").submit(function(b) {
                    b.preventDefault();
                    var c, d = a("form.get-updates-form"),
                        e = d.find("input[name='subscribe_general']").prop("checked"),
                        f = d.find("input[name='subscribe_academic']").prop("checked"),
                        h = d.find("input[name='email']").val(),
                        i = d.find("input[name='confirm_email']").val(),
                        j = d.find("select[name='country']").val(),
                        k = d.find("select[name='state']").val(),
                        l = d.find("input[name='zip']").val(),
                        m = d.find("select[name='interest']").val();
                    if (h != i && (d.find("input[name='email'], input[name='confirm_email']").addClass("form-error"), d.find(".confirmation").removeClass("ok").addClass("error").html('Please make sure that your "Email" and "Confirm Email" are the same.').fadeIn(250), c = !0), h && l || (d.find(".confirmation").removeClass("error, ok"), d.find("input, select, textarea").removeClass("form-error"), h || d.find("input[name='email']").addClass("form-error"), i || d.find("input[name='confirm_email']").addClass("form-error"), d.find(".confirmation").removeClass("ok").addClass("error").html("Please make sure that all required fields are entered.").fadeIn(250), c = !0), !c) {
                        d.find("input, select, textarea, label").removeClass("form-error"), d.find(".confirmation").removeClass("error").hide();
                        var n = {
                                subscribe_general: e,
                                subscribe_academic: f,
                                email: h,
                                country: j,
                                state: k,
                                zip: l,
                                interest: m
                            },
                            o = a.ajax({
                                data: n,
                                url: g + "/wp-content/themes/base-joints/library/ajax/submit_updates.php"
                            });
                        o.done(function() {
                            d.find("input[type='text'], input[type='email'], select, textarea").val(""), d.find("input[type='checkbox']").prop("checked", !1), d.find(".confirmation").addClass("ok").html("Thank you for signing up.").fadeIn(250)
                        }), o.fail(function(a, b) {
                            alert("Request failed: " + b)
                        })
                    }
                }), a("form.get-updates-form select[name='country']").on("change", function() {
                    var b = a("select[name='state'], input[name='zip']");
                    "US" == a(this).val() ? b.prop("disabled", !1).prev("label").css("opacity", "1") : b.val("").prop("disabled", "disabled").prev("label").css("opacity", "0.5")
                }), a("a#flip-cards").on("click", function(b) {
                    b.preventDefault();
                    var c = 0,
                        d = "Turn Cards for Score Details",
                        e = "Turn Cards for Summary",
                        f = a("a#flip-cards");
                    a(".card").each(function(b) {
                        var d = a(this);
                        setTimeout(function() {
                            d.toggleClass("flipped")
                        }, 50 * b), c++
                    }), setTimeout(function() {
                        f.text() == d ? f.text(e) : f.text(d)
                    }, 100 * c)
                }), a("a.jump[href*='#'], li.jump a[href*='#']").on("click", function(b) {
                    var c = a(this).attr("href"),
                        d = c.substring(0, c.lastIndexOf("/")),
                        e = window.location.pathname,
                        f = e.substring(0, e.lastIndexOf("/"));
                    if (!(d && d != f || a(this).hasClass("filter-link") || a(this).is("#flip-cards"))) {
                        b.preventDefault();
                        var g = a(this).attr("href");
                        g = g.slice(g.indexOf("#") + 1), a("html,body").animate({
                            scrollTop: a("a[name='" + g + "']").offset().top
                        }, 500, "swing")
                    }
                }), a(function() {
                    var b = window.location.hash.substring(1);
                    b && a("html, body").animate({
                        scrollTop: a("a[name='" + b + "']").offset().top
                    }, 500, "swing")
                }), a("a.information.circle").hover(function() {
                    a(this).next(".info-tooltip").show()
                }, function() {
                    a(this).next(".info-tooltip").fadeOut()
                }), a(".parameter-link a").on("click", function(b) {
                    b.preventDefault(), a(this).find("i").fadeToggle(), a(this).parent().siblings(".parameter-list").slideToggle()
                })
            }
            var f = this;
            f.view = a(this), f.view.data(b, f), f.defaults = {}, f.initialize = function() {
                return f.options = a.extend({}, f.defaults, c), d(), f
            };
            var g;
            return f.initialize()
        }
    } catch (c) {
        base.fn.err(c)
    }
}(jQuery);