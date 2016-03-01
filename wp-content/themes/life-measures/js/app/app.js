! function() {
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
						e = BASE_URL + "/wp-content/themes/life-measures/pdf/Quality_of_Life_Variables_US_Measures.pdf",
						g = "Download World Variables",
						h = BASE_URL + "/wp-content/themes/life-measures/pdf/Quality_of_Life_Variables_World_Measures.pdf";
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
				/**
				 * important
				 */
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
				a("a#flip-cards").on("click", function(b) {
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