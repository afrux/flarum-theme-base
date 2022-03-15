import { extend } from "flarum/common/extend";
import Footer from "./components/Footer";
import ForumApplication from "flarum/forum/ForumApplication";
import WelcomeHero from "flarum/forum/components/WelcomeHero";

app.initializers.add("afrux-theme-base", () => {
  extend(ForumApplication.prototype, "mount", () => {
    if (app.forum.attribute("afrux-theme-base.footerHooked"))
      m.mount(document.getElementById("footer"), Footer);
  });

  extend(WelcomeHero.prototype, "view", function (vdom) {
    if (
      !app.forum.attribute("afruxHeroBanner") ||
      !(vdom && typeof vdom === "object" && "attrs" in vdom)
    )
      return;

    vdom.attrs.className += " Hero--banner";
    vdom.attrs.style = vdom.attrs.style || {};
    vdom.attrs.style["--banner-url"] = `url("${app.forum.attribute(
      "afruxHeroBanner"
    )}")`;

    if (app.forum.attribute("afruxHeroBannerPosition")) {
      vdom.attrs.style["--banner-position"] = app.forum.attribute(
        "afruxHeroBannerPosition"
      );
    }
  });
});

// Expose compat API
import customCompat from "./compat";
import { compat } from "@flarum/core/forum";

Object.assign(compat, customCompat);
