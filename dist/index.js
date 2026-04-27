import { jsxs as y, Fragment as V, jsx as a } from "react/jsx-runtime";
import * as d from "react";
import ie, { isValidElement as Pt, cloneElement as Tt, forwardRef as Ta, useState as yt, useLayoutEffect as Oa } from "react";
import { Slot as Ot, createSlot as je } from "@radix-ui/react-slot";
import { cva as Xe } from "class-variance-authority";
import { clsx as Da } from "clsx";
import { twMerge as Ia } from "tailwind-merge";
import * as W from "@radix-ui/react-dropdown-menu";
import * as dn from "@radix-ui/react-toggle-group";
import * as zn from "react-dom";
import Un, { createPortal as Va } from "react-dom";
import * as qe from "@radix-ui/react-tabs";
import { Check as Ba, ChevronDown as Gn, ChevronUp as $a } from "lucide-react";
import * as z from "@radix-ui/react-select";
import * as Ct from "@radix-ui/react-progress";
import * as Z from "@radix-ui/react-dialog";
import { CORNER_RADIUS_TOKENS as _u, SPACING_TOKENS as wu } from "./tokens.js";
function x(...e) {
  return Ia(Da(e));
}
const Za = Xe("btn", {
  variants: {
    variant: {
      default: "btn--default",
      primary: "btn--primary",
      destructive: "btn--destructive",
      outline: "btn--outline",
      secondary: "btn--secondary",
      ghost: "btn--ghost",
      link: "btn--link",
      orange: "btn--orange"
    },
    size: {
      default: "btn--default",
      xs: "btn--xs",
      sm: "btn--sm",
      lg: "btn--lg",
      icon: "btn--icon",
      "icon-xs": "btn--icon-xs",
      "icon-sm": "btn--icon-sm",
      "icon-lg": "btn--icon-lg"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function un(e, t) {
  return e == null ? null : Pt(e) ? Tt(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function Ha({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  badge: s,
  children: l,
  ...c
}) {
  const f = r ? Ot : "button", p = o != null || i != null || s != null ? /* @__PURE__ */ y(V, { children: [
    o != null && un(o, "inline-start"),
    l,
    s != null && /* @__PURE__ */ a("span", { className: "btn__badge", "data-slot": "button-badge", children: s > 99 ? "99+" : s }),
    i != null && un(i, "inline-end")
  ] }) : l;
  return /* @__PURE__ */ a(
    f,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: x(Za({ variant: t, size: n, className: e })),
      ...c,
      children: p
    }
  );
}
function ja(e) {
  return /* @__PURE__ */ a(
    W.Root,
    {
      "data-slot": "dropdown-menu",
      ...e
    }
  );
}
function Wa(e) {
  return /* @__PURE__ */ a(
    W.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function za(e) {
  return /* @__PURE__ */ a(W.Portal, { ...e });
}
function Ua({
  className: e,
  sideOffset: t = 4,
  align: n = "start",
  ...r
}) {
  return /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(
    W.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: x(e),
      ...r
    }
  ) });
}
function Ga({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Item,
    {
      "data-slot": "dropdown-menu-item",
      className: x(e),
      ...t
    }
  );
}
function Ka({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    W.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: x(e),
      ...t
    }
  );
}
const it = Object.assign(ja, {
  Trigger: Wa,
  Portal: za,
  Content: Ua,
  Item: Ga,
  Separator: Ka
});
function ed({
  children: e,
  menu: t,
  variant: n = "outline",
  size: r = "default",
  trigger: o,
  buttonProps: i,
  align: s = "end",
  sideOffset: l = 4
}) {
  const c = o ?? /* @__PURE__ */ a(Ha, { variant: n, size: r, ...i, children: e });
  return /* @__PURE__ */ y(it, { children: [
    /* @__PURE__ */ a(it.Trigger, { asChild: !0, children: c }),
    /* @__PURE__ */ a(it.Content, { align: s, sideOffset: l, children: t })
  ] });
}
const Ya = Ta(function({
  size: t = "medium",
  shape: n = "rounded",
  state: r = "default",
  leadingIcon: o,
  trailingIcon: i,
  onClear: s,
  className: l = "",
  disabled: c,
  type: f = "text",
  ...u
}, p) {
  const m = [
    "input",
    `input--${t}`,
    `input--${n}`,
    r !== "default" && `input--${r}`,
    c && "input--disabled",
    l
  ].filter(Boolean).join(" "), g = (v) => typeof v == "string" ? /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: v }) : v;
  return /* @__PURE__ */ y("div", { className: m, children: [
    o != null && /* @__PURE__ */ a("span", { className: "input__leading-icon", "aria-hidden": !0, children: g(o) }),
    /* @__PURE__ */ a(
      "input",
      {
        ref: p,
        type: f,
        className: "input__field",
        disabled: c,
        "aria-invalid": r === "error" ? !0 : void 0,
        ...u
      }
    ),
    (i != null || s) && /* @__PURE__ */ a("span", { className: "input__trailing", children: s ? /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "input__clear",
        onClick: s,
        disabled: c,
        "aria-label": "Clear",
        children: i != null ? g(i) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" })
      }
    ) : /* @__PURE__ */ a("span", { className: "input__trailing-icon", "aria-hidden": !0, children: g(i) }) })
  ] });
});
function Dt({ icon: e, children: t, variant: n = "neutral", size: r = "medium", className: o = "" }) {
  return /* @__PURE__ */ y("span", { className: `pill pill--${n} pill--${r} ${o}`.trim(), children: [
    e && /* @__PURE__ */ a("span", { className: "material-symbols-outlined pill__icon", children: e }),
    t
  ] });
}
function Xa({ trend: e, size: t }) {
  const n = t === "lg" ? 20 : t === "md" ? 18 : 14, r = t === "lg" ? 28 : t === "md" ? 24 : 20, o = e === "exceed" ? "arrow_upward" : e === "meet" ? "remove" : "arrow_downward";
  return /* @__PURE__ */ a(
    "span",
    {
      className: x("skill-tag__trend", `skill-tag__trend--${e}`),
      style: { width: r, height: r },
      children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: n }, "aria-hidden": !0, children: o })
    }
  );
}
function qa({ size: e }) {
  const t = e === "lg" ? 20 : e === "md" ? 18 : 14, n = e === "lg" ? 28 : e === "md" ? 24 : 20;
  return /* @__PURE__ */ a(
    "span",
    {
      className: "skill-tag__trend skill-tag__trend--upskilling",
      style: { width: n, height: n },
      children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: t }, "aria-hidden": !0, children: "trending_up" })
    }
  );
}
const Qa = d.forwardRef(
  ({
    className: e,
    children: t,
    size: n = "md",
    variant: r = "default",
    action: o = "none",
    active: i = !1,
    endorseCount: s,
    trend: l,
    upskilling: c = !1,
    onAction: f,
    ...u
  }, p) => {
    const m = n === "lg" ? 20 : n === "md" ? 18 : 14;
    return /* @__PURE__ */ y(
      "span",
      {
        ref: p,
        "data-slot": "skill-tag",
        className: x(
          "skill-tag",
          `skill-tag--${n}`,
          `skill-tag--${r}`,
          i && "skill-tag--active",
          e
        ),
        ...u,
        children: [
          r === "matched" && /* @__PURE__ */ a("span", { className: "skill-tag__leading skill-tag__leading--matched", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: m }, "aria-hidden": !0, children: "check" }) }),
          r === "highlighted" && /* @__PURE__ */ a("span", { className: "skill-tag__leading skill-tag__leading--highlighted", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: m }, "aria-hidden": !0, children: "star" }) }),
          l && /* @__PURE__ */ a(Xa, { trend: l, size: n }),
          l && c && /* @__PURE__ */ a(qa, { size: n }),
          /* @__PURE__ */ a("span", { className: "skill-tag__label", children: t }),
          o === "add" && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn",
              onClick: f,
              "aria-label": i ? "Remove" : "Add",
              children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: m }, "aria-hidden": !0, children: i ? "close" : "add" })
            }
          ),
          o === "save" && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn",
              onClick: f,
              "aria-label": i ? "Unsave" : "Save",
              children: /* @__PURE__ */ a(
                "span",
                {
                  className: "material-symbols-outlined",
                  style: {
                    fontSize: m,
                    fontVariationSettings: i ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  },
                  "aria-hidden": !0,
                  children: "bookmark"
                }
              )
            }
          ),
          o === "endorse" && /* @__PURE__ */ y(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn skill-tag__action-btn--endorse",
              onClick: f,
              "aria-label": "Endorse",
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    style: {
                      fontSize: m,
                      fontVariationSettings: i ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    },
                    "aria-hidden": !0,
                    children: "thumb_up"
                  }
                ),
                s != null && /* @__PURE__ */ a("span", { className: "skill-tag__endorse-count", children: s })
              ]
            }
          )
        ]
      }
    );
  }
);
Qa.displayName = "SkillTag";
function fn(e, t) {
  return e == null ? null : Pt(e) ? Tt(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function Ja({
  children: e,
  onRemove: t,
  variant: n = "default",
  color: r,
  size: o = "24",
  value: i,
  className: s,
  disabled: l = !1,
  leadingIcon: c,
  trailingIcon: f
}) {
  const u = x(
    "tag",
    o === "24" && "tag--24",
    o === "30" && "tag--30",
    o === "44" && "tag--44",
    n === "selected" && "tag--selected",
    n === "disabled" && "tag--disabled",
    r && `tag--color-${r}`,
    s
  );
  return /* @__PURE__ */ y("span", { className: u, "data-value": i, children: [
    c != null && fn(c, "inline-start"),
    e,
    f != null && fn(f, "inline-end"),
    t && !l && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "tag__remove",
        onClick: (p) => {
          p.stopPropagation(), t();
        },
        "aria-label": `Remove ${typeof e == "string" ? e : "tag"}`,
        children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
      }
    )
  ] });
}
function eo(e) {
  return x("tag", "tag--selectable", `tag--${e}`);
}
function to(e) {
  return ie.isValidElement(e) && typeof e.type != "string" && (e.type === Ja || e.type.displayName === "Tag");
}
function td({
  type: e = "single",
  value: t,
  onValueChange: n,
  defaultValue: r,
  disabled: o = !1,
  size: i = "24",
  children: s,
  className: l
}) {
  return /* @__PURE__ */ a(
    dn.Root,
    {
      type: e,
      value: t,
      onValueChange: n,
      defaultValue: r,
      disabled: o,
      className: x("tag-group", l),
      asChild: !1,
      children: ie.Children.map(s, (c) => {
        if (!to(c)) return c;
        const f = c.props.value;
        if (f == null) return c;
        const { leadingIcon: u, trailingIcon: p } = c.props;
        return /* @__PURE__ */ y(
          dn.Item,
          {
            value: f,
            className: eo(i),
            disabled: c.props.disabled,
            children: [
              u != null && /* @__PURE__ */ a("span", { "data-icon": "inline-start", children: u }),
              c.props.children,
              p != null && /* @__PURE__ */ a("span", { "data-icon": "inline-end", children: p })
            ]
          },
          f
        );
      })
    }
  );
}
const no = Xe("badge", {
  variants: {
    variant: {
      default: "badge--default",
      primary: "badge--primary",
      secondary: "badge--secondary",
      destructive: "badge--destructive",
      outline: "badge--outline",
      ghost: "badge--ghost",
      link: "badge--link"
    },
    size: {
      44: "badge--44",
      30: "badge--30",
      24: "badge--24",
      none: "badge--none"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "24"
  }
});
function pn(e, t) {
  return e == null ? null : Pt(e) ? Tt(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function nd({
  className: e,
  variant: t = "default",
  size: n = "24",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  children: s,
  ...l
}) {
  const c = r ? Ot : "span", f = r ? s : /* @__PURE__ */ y(V, { children: [
    o != null && pn(o, "inline-start"),
    s,
    i != null && pn(i, "inline-end")
  ] });
  return /* @__PURE__ */ a(
    c,
    {
      "data-slot": "badge",
      "data-variant": t,
      "data-size": n,
      className: x(no({ variant: t, size: n }), e),
      ...l,
      children: f
    }
  );
}
const ro = "m-0 flex list-none flex-wrap items-center gap-0 p-0 break-words", ao = "inline-flex items-center", Kn = "rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[#4f5666] bg-transparent border-none cursor-pointer p-0 no-underline transition-colors hover:text-[#1a212e] hover:underline hover:[text-underline-offset:2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background", oo = "text-[length:14px] font-bold leading-[1.43] text-[#1a212e]", io = "inline-flex shrink-0 select-none items-center justify-center text-[#94a3b8] mx-1.5 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:shrink-0";
function rd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: x("flex h-14 w-full items-center", e),
      ...t
    }
  );
}
function ad({ className: e, ...t }) {
  return /* @__PURE__ */ a("ol", { "data-slot": "breadcrumb-list", className: x(ro, e), ...t });
}
function od({ className: e, ...t }) {
  return /* @__PURE__ */ a("li", { "data-slot": "breadcrumb-item", className: x(ao, e), ...t });
}
function id({ asChild: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    e ? Ot : "button",
    {
      "data-slot": "breadcrumb-link",
      type: e ? void 0 : "button",
      className: x(Kn, t),
      ...n
    }
  );
}
function sd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: x(oo, e),
      ...t
    }
  );
}
function ld({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: x(io, t),
      ...n,
      children: e ?? /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) })
    }
  );
}
function cd({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      className: x(Kn, e),
      ...n,
      children: t ?? "…"
    }
  );
}
const so = {
  coffee: { icon: "local_cafe", title: "Coffee chat" },
  mentoring: { icon: "group", title: "Mentoring" },
  project: { icon: "bar_chart", title: "Project" }
};
function Yn({ items: e, showLabel: t = !0, labelAsButton: n = !0, className: r = "" }) {
  return /* @__PURE__ */ y("div", { className: `open-to ${r}`.trim(), children: [
    t && (n ? /* @__PURE__ */ y("button", { type: "button", className: "open-to__select", "aria-haspopup": "listbox", "aria-expanded": !1, children: [
      /* @__PURE__ */ a("span", { className: "open-to__label", children: "Open to" }),
      /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) : /* @__PURE__ */ a("span", { className: "open-to__label open-to__label--plain", children: "Open to" })),
    /* @__PURE__ */ a("div", { className: "open-to__icons", children: e.map((o) => {
      const { icon: i, title: s } = so[o];
      return /* @__PURE__ */ a("span", { className: `open-to__icon open-to__icon--${o}`, title: s, "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__icon-symbol", children: i }) }, o);
    }) })
  ] });
}
function lo({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function co({
  title: e,
  badge: t,
  description: n,
  recommendedLabel: r,
  icon: o,
  bgColor: i,
  iconBgColor: s,
  iconColor: l,
  textColor: c = "#3B2600",
  buttonLabel: f,
  buttonHref: u = "#",
  children: p,
  fixedSize: m = !0,
  LinkComponent: g = lo
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      className: `insight-card ${m ? "insight-card--fixed" : ""}`,
      style: {
        "--insight-card-bg": i,
        "--insight-card-icon-bg": s,
        "--insight-card-icon-color": l,
        "--insight-card-text-color": c
      },
      children: [
        /* @__PURE__ */ y("div", { className: "insight-card__header", children: [
          /* @__PURE__ */ y("div", { className: "insight-card__header-content", children: [
            /* @__PURE__ */ y("div", { className: "insight-card__title-row", children: [
              /* @__PURE__ */ a("h3", { className: "insight-card__title", children: e }),
              t && /* @__PURE__ */ a("span", { className: "insight-card__badge", children: t })
            ] }),
            /* @__PURE__ */ a("p", { className: "insight-card__description", children: n })
          ] }),
          /* @__PURE__ */ a("div", { className: "insight-card__icon-wrap", "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined insight-card__icon", children: o }) })
        ] }),
        r && /* @__PURE__ */ a("span", { className: "insight-card__recommended", children: r }),
        /* @__PURE__ */ a("div", { className: "insight-card__content", children: p }),
        /* @__PURE__ */ a(g, { to: u, className: "insight-card__btn", children: f })
      ]
    }
  );
}
function uo({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function dd({
  course: e,
  href: t = "#",
  showBookmark: n = !0,
  renderFacepile: r,
  LinkComponent: o = uo,
  bottomBar: i
}) {
  const s = o, l = i ?? (e.completedBy && e.completedBy.length > 0 ? { type: "completedBy", avatars: e.completedBy } : void 0), c = l && l.type !== "none", f = /* @__PURE__ */ y("div", { className: "course-object-card__inner", children: [
    /* @__PURE__ */ y("div", { className: "course-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__tag-wrap", children: /* @__PURE__ */ a(Dt, { icon: "menu_book", variant: "blueGreen", size: "small", children: "Course" }) }),
      /* @__PURE__ */ y("div", { className: "course-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Add to learning plan", onClick: (u) => u.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Save course", onClick: (u) => u.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ y("div", { className: "course-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "course-object-card__title", children: e.title }),
      (e.provider || e.duration) && /* @__PURE__ */ a("span", { className: "course-object-card__meta", children: [e.provider, e.duration].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ y("div", { className: "course-object-card__skills", children: [
        e.skills.slice(0, 2).map((u) => /* @__PURE__ */ a("span", { className: "course-object-card__skill-tag", children: u }, u)),
        e.skills.length > 2 && /* @__PURE__ */ y("span", { className: "course-object-card__skill-tag course-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ y(V, { children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ y("div", { className: "object-card-bottom-bar__content", children: [
        l.type === "completedBy" && /* @__PURE__ */ y(V, { children: [
          r ? r({ avatarUrls: l.avatars }) : /* @__PURE__ */ a("div", { className: "course-object-card__facepile", children: l.avatars.map((u, p) => /* @__PURE__ */ a("img", { src: u, alt: "", className: "course-object-card__facepile-avatar" }, p)) }),
          /* @__PURE__ */ a("span", { className: "course-object-card__completed-text", children: "completed this" })
        ] }),
        l.type === "openTo" && /* @__PURE__ */ a(Yn, { items: l.items, labelAsButton: !1 }),
        l.type === "buttons" && /* @__PURE__ */ a("div", { className: "course-object-card__bottom-buttons", children: l.children })
      ] }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "course-object-card", children: f }) : /* @__PURE__ */ a(s, { to: t, className: "course-object-card", children: f });
}
function fo({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function ud({
  project: e,
  href: t = "#",
  showBookmark: n = !0,
  showBottomBar: r = !0,
  renderFacepile: o,
  LinkComponent: i = fo
}) {
  const s = i, l = /* @__PURE__ */ y("div", { className: "project-object-card__inner", children: [
    /* @__PURE__ */ y("div", { className: "project-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__tag-wrap", children: /* @__PURE__ */ a(Dt, { icon: "folder", variant: "blueGreen", size: "small", children: "Project" }) }),
      /* @__PURE__ */ y("div", { className: "project-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Add to workspace", onClick: (c) => c.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Save project", onClick: (c) => c.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ y("div", { className: "project-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "project-object-card__title", children: e.title }),
      (e.owner || e.status) && /* @__PURE__ */ a("span", { className: "project-object-card__meta", children: [e.owner, e.status].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ y("div", { className: "project-object-card__skills", children: [
        e.skills.slice(0, 2).map((c) => /* @__PURE__ */ a("span", { className: "project-object-card__skill-tag", children: c }, c)),
        e.skills.length > 2 && /* @__PURE__ */ y("span", { className: "project-object-card__skill-tag project-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] }),
      e.projectManager && /* @__PURE__ */ y("div", { className: "project-object-card__manager", children: [
        e.projectManager.avatarSrc ? /* @__PURE__ */ a(
          "img",
          {
            src: e.projectManager.avatarSrc,
            alt: "",
            className: "project-object-card__manager-avatar"
          }
        ) : /* @__PURE__ */ a("span", { className: "project-object-card__manager-avatar project-object-card__manager-avatar--fallback", "aria-hidden": !0, children: e.projectManager.name.slice(0, 2).toUpperCase() }),
        /* @__PURE__ */ y("div", { className: "project-object-card__manager-info", children: [
          /* @__PURE__ */ a("span", { className: "project-object-card__manager-name", children: e.projectManager.name }),
          /* @__PURE__ */ a("span", { className: "project-object-card__manager-label", children: "Project manager" })
        ] })
      ] })
    ] }),
    r && /* @__PURE__ */ y(V, { children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: e.contributedBy && e.contributedBy.length > 0 && /* @__PURE__ */ y(V, { children: [
        o ? o({ avatarUrls: e.contributedBy }) : /* @__PURE__ */ a("div", { className: "project-object-card__facepile", children: e.contributedBy.map((c, f) => /* @__PURE__ */ a("img", { src: c, alt: "", className: "project-object-card__facepile-avatar" }, f)) }),
        /* @__PURE__ */ a("span", { className: "project-object-card__contributed-text", children: "contributors" })
      ] }) }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "project-object-card", children: l }) : /* @__PURE__ */ a(s, { to: t, className: "project-object-card", children: l });
}
function po(e) {
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? ((t[0]?.[0] ?? "") + (t[1]?.[0] ?? "")).toUpperCase().slice(0, 2) : e.slice(0, 2).toUpperCase() || "?";
}
function mo({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function fd({
  person: e,
  href: t = "#",
  showBookmark: n = !0,
  renderAvatar: r,
  LinkComponent: o = mo
}) {
  const i = o, s = /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ y("div", { className: "people-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "people-object-card__tag-wrap", children: /* @__PURE__ */ a(Dt, { icon: "person", variant: "orange", size: "small", children: "People" }) }),
      /* @__PURE__ */ y("div", { className: "people-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "people-object-card__icon-btn", "aria-label": "View org chart", onClick: (l) => l.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "account_tree" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "people-object-card__icon-btn", "aria-label": "Remove from favorites", onClick: (l) => l.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] }),
      /* @__PURE__ */ a("div", { className: "people-object-card__pattern", "aria-hidden": !0 })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__avatar-wrap", children: r ? r({
      src: e.avatarSrc,
      alt: e.name,
      fallback: po(e.name)
    }) : /* @__PURE__ */ a("img", { src: e.avatarSrc, alt: "", className: "people-object-card__avatar" }) }),
    /* @__PURE__ */ y("div", { className: "people-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "people-object-card__name", children: e.name }),
      /* @__PURE__ */ a("span", { className: "people-object-card__title", children: e.title }),
      /* @__PURE__ */ a("span", { className: "people-object-card__email", children: e.email })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__divider", "aria-hidden": !0 }),
    /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: /* @__PURE__ */ a(Yn, { items: [e.openTo], labelAsButton: !1, className: "people-object-card__open-to" }) }) })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "people-object-card", children: s }) : /* @__PURE__ */ a(i, { to: t, className: "people-object-card", children: s });
}
const ge = {
  title: "Mentors",
  badge: "11",
  description: "Get guidance and support",
  recommendedLabel: "Recommended for you",
  buttonLabel: "Explore Mentors",
  buttonHref: "#"
};
function pd({
  title: e = ge.title,
  badge: t = ge.badge,
  description: n = ge.description,
  recommendedLabel: r = ge.recommendedLabel,
  buttonLabel: o = ge.buttonLabel,
  buttonHref: i = ge.buttonHref,
  mentor: s,
  fixedSize: l = !0,
  LinkComponent: c
}) {
  return /* @__PURE__ */ a(
    co,
    {
      title: e,
      badge: t,
      description: n,
      recommendedLabel: r,
      icon: "groups",
      bgColor: "#FFF0D6",
      iconBgColor: "#FFE8C2",
      iconColor: "#7D4F07",
      textColor: "#3B2600",
      buttonLabel: o,
      buttonHref: i,
      fixedSize: l,
      LinkComponent: c,
      children: /* @__PURE__ */ y("div", { className: "mentor-insight-card", children: [
        /* @__PURE__ */ y("div", { className: "mentor-insight-card__profile", children: [
          /* @__PURE__ */ a("img", { src: s.avatarSrc, alt: "", className: "mentor-insight-card__avatar" }),
          /* @__PURE__ */ y("div", { className: "mentor-insight-card__info", children: [
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__name", children: s.name }),
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__role", children: s.role })
          ] })
        ] }),
        /* @__PURE__ */ y("div", { className: "mentor-insight-card__match", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined mentor-insight-card__match-icon", children: "track_changes" }),
          /* @__PURE__ */ a("span", { className: "mentor-insight-card__match-text", children: s.matchText }),
          s.matchCount > 0 && /* @__PURE__ */ y("span", { className: "mentor-insight-card__match-badge", children: [
            "+",
            s.matchCount
          ] })
        ] })
      ] })
    }
  );
}
function Qe(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = d.createContext(s), c = n.length;
    n = [...n, s];
    const f = (p) => {
      const { scope: m, children: g, ...v } = p, h = m?.[e]?.[c] || l, b = d.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ a(h.Provider, { value: b, children: g });
    };
    f.displayName = i + "Provider";
    function u(p, m) {
      const g = m?.[e]?.[c] || l, v = d.useContext(g);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [f, u];
  }
  const o = () => {
    const i = n.map((s) => d.createContext(s));
    return function(l) {
      const c = l?.[e] || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = e, [r, ho(o, ...t)];
}
function ho(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((l, { useScope: c, scopeName: f }) => {
        const p = c(i)[`__scope${f}`];
        return { ...l, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function B(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var go = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], H = go.reduce((e, t) => {
  const n = je(`Primitive.${t}`), r = d.forwardRef((o, i) => {
    const { asChild: s, ...l } = o, c = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(c, { ...l, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function _t(e, t) {
  e && zn.flushSync(() => e.dispatchEvent(t));
}
var Q = globalThis?.document ? d.useLayoutEffect : () => {
}, vo = d[" useInsertionEffect ".trim().toString()] || Q;
function It({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, s] = bo({
    defaultProp: t,
    onChange: n
  }), l = e !== void 0, c = l ? e : o;
  {
    const u = d.useRef(e !== void 0);
    d.useEffect(() => {
      const p = u.current;
      p !== l && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = l;
    }, [l, r]);
  }
  const f = d.useCallback(
    (u) => {
      if (l) {
        const p = yo(u) ? u(e) : u;
        p !== e && s.current?.(p);
      } else
        i(u);
    },
    [l, e, i, s]
  );
  return [c, f];
}
function bo({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), i = d.useRef(t);
  return vo(() => {
    i.current = t;
  }, [t]), d.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function yo(e) {
  return typeof e == "function";
}
function mn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xn(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = mn(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : mn(e[o], null);
        }
      };
  };
}
function U(...e) {
  return d.useCallback(Xn(...e), e);
}
var Co = d.createContext(void 0);
function _o(e) {
  const t = d.useContext(Co);
  return e || t || "ltr";
}
function wo(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var me = (e) => {
  const { present: t, children: n } = e, r = xo(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), i = U(r.ref, No(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
me.displayName = "Presence";
function xo(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), s = e ? "mounted" : "unmounted", [l, c] = wo(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    const f = Pe(r.current);
    i.current = l === "mounted" ? f : "none";
  }, [l]), Q(() => {
    const f = r.current, u = o.current;
    if (u !== e) {
      const m = i.current, g = Pe(f);
      e ? c("MOUNT") : g === "none" || f?.display === "none" ? c("UNMOUNT") : c(u && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Q(() => {
    if (t) {
      let f;
      const u = t.ownerDocument.defaultView ?? window, p = (g) => {
        const h = Pe(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (g) => {
        g.target === t && (i.current = Pe(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        u.clearTimeout(f), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: d.useCallback((f) => {
      r.current = f ? getComputedStyle(f) : null, n(f);
    }, [])
  };
}
function Pe(e) {
  return e?.animationName || "none";
}
function No(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Lo = d[" useId ".trim().toString()] || (() => {
}), Eo = 0;
function Vt(e) {
  const [t, n] = d.useState(Lo());
  return Q(() => {
    n((r) => r ?? String(Eo++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function qn(e) {
  const t = e + "CollectionProvider", [n, r] = Qe(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: b, children: C } = h, L = ie.useRef(null), _ = ie.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: b, itemMap: _, collectionRef: L, children: C });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", c = je(l), f = ie.forwardRef(
    (h, b) => {
      const { scope: C, children: L } = h, _ = i(l, C), w = U(b, _.collectionRef);
      return /* @__PURE__ */ a(c, { ref: w, children: L });
    }
  );
  f.displayName = l;
  const u = e + "CollectionItemSlot", p = "data-radix-collection-item", m = je(u), g = ie.forwardRef(
    (h, b) => {
      const { scope: C, children: L, ..._ } = h, w = ie.useRef(null), E = U(b, w), k = i(u, C);
      return ie.useEffect(() => (k.itemMap.set(w, { ref: w, ..._ }), () => {
        k.itemMap.delete(w);
      })), /* @__PURE__ */ a(m, { [p]: "", ref: E, children: L });
    }
  );
  g.displayName = u;
  function v(h) {
    const b = i(e + "CollectionConsumer", h);
    return ie.useCallback(() => {
      const L = b.collectionRef.current;
      if (!L) return [];
      const _ = Array.from(L.querySelectorAll(`[${p}]`));
      return Array.from(b.itemMap.values()).sort(
        (k, S) => _.indexOf(k.ref.current) - _.indexOf(S.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: s, Slot: f, ItemSlot: g },
    v,
    r
  ];
}
function K(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => t.current?.(...n), []);
}
function ko(e, t = globalThis?.document) {
  const n = K(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var So = "DismissableLayer", wt = "dismissableLayer.update", Mo = "dismissableLayer.pointerDownOutside", Ro = "dismissableLayer.focusOutside", hn, Qn = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bt = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: l,
      ...c
    } = e, f = d.useContext(Qn), [u, p] = d.useState(null), m = u?.ownerDocument ?? globalThis?.document, [, g] = d.useState({}), v = U(t, (S) => p(S)), h = Array.from(f.layers), [b] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), C = h.indexOf(b), L = u ? h.indexOf(u) : -1, _ = f.layersWithOutsidePointerEventsDisabled.size > 0, w = L >= C, E = Po((S) => {
      const F = S.target, R = [...f.branches].some((N) => N.contains(F));
      !w || R || (o?.(S), s?.(S), S.defaultPrevented || l?.());
    }, m), k = To((S) => {
      const F = S.target;
      [...f.branches].some((N) => N.contains(F)) || (i?.(S), s?.(S), S.defaultPrevented || l?.());
    }, m);
    return ko((S) => {
      L === f.layers.size - 1 && (r?.(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
    }, m), d.useEffect(() => {
      if (u)
        return n && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (hn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), gn(), () => {
          n && f.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = hn);
        };
    }, [u, m, n, f]), d.useEffect(() => () => {
      u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), gn());
    }, [u, f]), d.useEffect(() => {
      const S = () => g({});
      return document.addEventListener(wt, S), () => document.removeEventListener(wt, S);
    }, []), /* @__PURE__ */ a(
      H.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: _ ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: B(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: B(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: B(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Bt.displayName = So;
var Ao = "DismissableLayerBranch", Fo = d.forwardRef((e, t) => {
  const n = d.useContext(Qn), r = d.useRef(null), o = U(t, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(H.div, { ...e, ref: o });
});
Fo.displayName = Ao;
function Po(e, t = globalThis?.document) {
  const n = K(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let c = function() {
          Jn(
            Mo,
            n,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function To(e, t = globalThis?.document) {
  const n = K(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Jn(Ro, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function gn() {
  const e = new CustomEvent(wt);
  document.dispatchEvent(e);
}
function Jn(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? _t(o, i) : o.dispatchEvent(i);
}
function Oo(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Do = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Io = "VisuallyHidden", er = d.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    H.span,
    {
      ...e,
      ref: t,
      style: { ...Do, ...e.style }
    }
  )
);
er.displayName = Io;
var Vo = er, he = "NavigationMenu", [$t, tr, Bo] = qn(he), [xt, $o, Zo] = qn(he), [Zt] = Qe(
  he,
  [Bo, Zo]
), [Ho, q] = Zt(he), [jo, Wo] = Zt(he), nr = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: s = 200,
      skipDelayDuration: l = 300,
      orientation: c = "horizontal",
      dir: f,
      ...u
    } = e, [p, m] = d.useState(null), g = U(t, (R) => m(R)), v = _o(f), h = d.useRef(0), b = d.useRef(0), C = d.useRef(0), [L, _] = d.useState(!0), [w, E] = It({
      prop: r,
      onChange: (R) => {
        const N = R !== "", P = l > 0;
        N ? (window.clearTimeout(C.current), P && _(!1)) : (window.clearTimeout(C.current), C.current = window.setTimeout(
          () => _(!0),
          l
        )), o?.(R);
      },
      defaultProp: i ?? "",
      caller: he
    }), k = d.useCallback(() => {
      window.clearTimeout(b.current), b.current = window.setTimeout(() => E(""), 150);
    }, [E]), S = d.useCallback(
      (R) => {
        window.clearTimeout(b.current), E(R);
      },
      [E]
    ), F = d.useCallback(
      (R) => {
        w === R ? window.clearTimeout(b.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(b.current), E(R);
        }, s);
      },
      [w, E, s]
    );
    return d.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(b.current), window.clearTimeout(C.current);
    }, []), /* @__PURE__ */ a(
      rr,
      {
        scope: n,
        isRootMenu: !0,
        value: w,
        dir: v,
        orientation: c,
        rootNavigationMenu: p,
        onTriggerEnter: (R) => {
          window.clearTimeout(h.current), L ? F(R) : S(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), k();
        },
        onContentEnter: () => window.clearTimeout(b.current),
        onContentLeave: k,
        onItemSelect: (R) => {
          E((N) => N === R ? "" : R);
        },
        onItemDismiss: () => E(""),
        children: /* @__PURE__ */ a(
          H.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: v,
            ...u,
            ref: g
          }
        )
      }
    );
  }
);
nr.displayName = he;
var Nt = "NavigationMenuSub", zo = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: s = "horizontal",
      ...l
    } = e, c = q(Nt, n), [f, u] = It({
      prop: r,
      onChange: o,
      defaultProp: i ?? "",
      caller: Nt
    });
    return /* @__PURE__ */ a(
      rr,
      {
        scope: n,
        isRootMenu: !1,
        value: f,
        dir: c.dir,
        orientation: s,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (p) => u(p),
        onItemSelect: (p) => u(p),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ a(H.div, { "data-orientation": s, ...l, ref: t })
      }
    );
  }
);
zo.displayName = Nt;
var rr = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: s,
    value: l,
    onItemSelect: c,
    onItemDismiss: f,
    onTriggerEnter: u,
    onTriggerLeave: p,
    onContentEnter: m,
    onContentLeave: g
  } = e, [v, h] = d.useState(null), [b, C] = d.useState(/* @__PURE__ */ new Map()), [L, _] = d.useState(null);
  return /* @__PURE__ */ a(
    Ho,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: Oo(l),
      baseId: Vt(),
      dir: o,
      orientation: i,
      viewport: v,
      onViewportChange: h,
      indicatorTrack: L,
      onIndicatorTrackChange: _,
      onTriggerEnter: K(u),
      onTriggerLeave: K(p),
      onContentEnter: K(m),
      onContentLeave: K(g),
      onItemSelect: K(c),
      onItemDismiss: K(f),
      onViewportContentChange: d.useCallback((w, E) => {
        C((k) => (k.set(w, E), new Map(k)));
      }, []),
      onViewportContentRemove: d.useCallback((w) => {
        C((E) => E.has(w) ? (E.delete(w), new Map(E)) : E);
      }, []),
      children: /* @__PURE__ */ a($t.Provider, { scope: t, children: /* @__PURE__ */ a(jo, { scope: t, items: b, children: s }) })
    }
  );
}, ar = "NavigationMenuList", or = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = q(ar, n), i = /* @__PURE__ */ a(H.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(H.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a($t.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(mr, { asChild: !0, children: i }) : i }) });
  }
);
or.displayName = ar;
var ir = "NavigationMenuItem", [Uo, sr] = Zt(ir), lr = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = Vt(), s = r || i || "LEGACY_REACT_AUTO_VALUE", l = d.useRef(null), c = d.useRef(null), f = d.useRef(null), u = d.useRef(() => {
    }), p = d.useRef(!1), m = d.useCallback((v = "start") => {
      if (l.current) {
        u.current();
        const h = Et(l.current);
        h.length && Wt(v === "start" ? h : h.reverse());
      }
    }, []), g = d.useCallback(() => {
      if (l.current) {
        const v = Et(l.current);
        v.length && (u.current = ei(v));
      }
    }, []);
    return /* @__PURE__ */ a(
      Uo,
      {
        scope: n,
        value: s,
        triggerRef: c,
        contentRef: l,
        focusProxyRef: f,
        wasEscapeCloseRef: p,
        onEntryKeyDown: m,
        onFocusProxyEnter: m,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ a(H.li, { ...o, ref: t })
      }
    );
  }
);
lr.displayName = ir;
var Lt = "NavigationMenuTrigger", cr = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = q(Lt, e.__scopeNavigationMenu), s = sr(Lt, e.__scopeNavigationMenu), l = d.useRef(null), c = U(l, s.triggerRef, t), f = gr(i.baseId, s.value), u = vr(i.baseId, s.value), p = d.useRef(!1), m = d.useRef(!1), g = s.value === i.value;
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a($t.ItemSlot, { scope: n, value: s.value, children: /* @__PURE__ */ a(hr, { asChild: !0, children: /* @__PURE__ */ a(
      H.button,
      {
        id: f,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": zt(g),
        "aria-expanded": g,
        "aria-controls": u,
        ...o,
        ref: c,
        onPointerEnter: B(e.onPointerEnter, () => {
          m.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: B(
          e.onPointerMove,
          We(() => {
            r || m.current || s.wasEscapeCloseRef.current || p.current || (i.onTriggerEnter(s.value), p.current = !0);
          })
        ),
        onPointerLeave: B(
          e.onPointerLeave,
          We(() => {
            r || (i.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: B(e.onClick, () => {
          i.onItemSelect(s.value), m.current = g;
        }),
        onKeyDown: B(e.onKeyDown, (v) => {
          const b = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          g && v.key === b && (s.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ y(V, { children: [
      /* @__PURE__ */ a(
        Vo,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (v) => {
            const h = s.contentRef.current, b = v.relatedTarget, C = b === l.current, L = h?.contains(b);
            (C || !L) && s.onFocusProxyEnter(C ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": u })
    ] })
  ] });
});
cr.displayName = Lt;
var Go = "NavigationMenuLink", vn = "navigationMenu.linkSelect", dr = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(hr, { asChild: !0, children: /* @__PURE__ */ a(
      H.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: B(
          e.onClick,
          (s) => {
            const l = s.target, c = new CustomEvent(vn, {
              bubbles: !0,
              cancelable: !0
            });
            if (l.addEventListener(vn, (f) => o?.(f), { once: !0 }), _t(l, c), !c.defaultPrevented && !s.metaKey) {
              const f = new CustomEvent(Be, {
                bubbles: !0,
                cancelable: !0
              });
              _t(l, f);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
dr.displayName = Go;
var Ht = "NavigationMenuIndicator", Ko = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = q(Ht, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Un.createPortal(
    /* @__PURE__ */ a(me, { present: n || i, children: /* @__PURE__ */ a(Yo, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Ko.displayName = Ht;
var Yo = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = q(Ht, n), i = tr(n), [s, l] = d.useState(
    null
  ), [c, f] = d.useState(null), u = o.orientation === "horizontal", p = !!o.value;
  d.useEffect(() => {
    const v = i().find((h) => h.value === o.value)?.ref.current;
    v && l(v);
  }, [i, o.value]);
  const m = () => {
    s && f({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return kt(s, m), kt(o.indicatorTrack, m), c ? /* @__PURE__ */ a(
    H.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...u ? {
          left: 0,
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), we = "NavigationMenuContent", ur = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = q(we, e.__scopeNavigationMenu), i = sr(we, e.__scopeNavigationMenu), s = U(i.contentRef, t), l = i.value === o.value, c = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(Xo, { forceMount: n, ...c, ref: s }) : /* @__PURE__ */ a(me, { present: n || l, children: /* @__PURE__ */ a(
    fr,
    {
      "data-state": zt(l),
      ...c,
      ref: s,
      onPointerEnter: B(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: B(
        e.onPointerLeave,
        We(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !l && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
ur.displayName = we;
var Xo = d.forwardRef((e, t) => {
  const n = q(we, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Q(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Q(() => () => o(e.value), [e.value, o]), null;
}), Be = "navigationMenu.rootContentDismiss", fr = d.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: s,
    onRootContentClose: l,
    onContentFocusOutside: c,
    ...f
  } = e, u = q(we, n), p = d.useRef(null), m = U(p, t), g = gr(u.baseId, r), v = vr(u.baseId, r), h = tr(n), b = d.useRef(null), { onItemDismiss: C } = u;
  d.useEffect(() => {
    const _ = p.current;
    if (u.isRootMenu && _) {
      const w = () => {
        C(), l(), _.contains(document.activeElement) && o.current?.focus();
      };
      return _.addEventListener(Be, w), () => _.removeEventListener(Be, w);
    }
  }, [u.isRootMenu, e.value, o, C, l]);
  const L = d.useMemo(() => {
    const w = h().map((N) => N.value);
    u.dir === "rtl" && w.reverse();
    const E = w.indexOf(u.value), k = w.indexOf(u.previousValue), S = r === u.value, F = k === w.indexOf(r);
    if (!S && !F) return b.current;
    const R = (() => {
      if (E !== k) {
        if (S && k !== -1) return E > k ? "from-end" : "from-start";
        if (F && E !== -1) return E > k ? "to-start" : "to-end";
      }
      return null;
    })();
    return b.current = R, R;
  }, [u.previousValue, u.value, u.dir, h, r]);
  return /* @__PURE__ */ a(mr, { asChild: !0, children: /* @__PURE__ */ a(
    Bt,
    {
      id: v,
      "aria-labelledby": g,
      "data-motion": L,
      "data-orientation": u.orientation,
      ...f,
      ref: m,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const _ = new Event(Be, {
          bubbles: !0,
          cancelable: !0
        });
        p.current?.dispatchEvent(_);
      },
      onFocusOutside: B(e.onFocusOutside, (_) => {
        c();
        const w = _.target;
        u.rootNavigationMenu?.contains(w) && _.preventDefault();
      }),
      onPointerDownOutside: B(e.onPointerDownOutside, (_) => {
        const w = _.target, E = h().some((S) => S.ref.current?.contains(w)), k = u.isRootMenu && u.viewport?.contains(w);
        (E || k || !u.isRootMenu) && _.preventDefault();
      }),
      onKeyDown: B(e.onKeyDown, (_) => {
        const w = _.altKey || _.ctrlKey || _.metaKey;
        if (_.key === "Tab" && !w) {
          const k = Et(_.currentTarget), S = document.activeElement, F = k.findIndex((P) => P === S), N = _.shiftKey ? k.slice(0, F).reverse() : k.slice(F + 1, k.length);
          Wt(N) ? _.preventDefault() : i.current?.focus();
        }
      }),
      onEscapeKeyDown: B(e.onEscapeKeyDown, (_) => {
        s.current = !0;
      })
    }
  ) });
}), jt = "NavigationMenuViewport", pr = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!q(jt, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(me, { present: n || i, children: /* @__PURE__ */ a(qo, { ...r, ref: t }) });
});
pr.displayName = jt;
var qo = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = q(jt, n), s = U(t, i.onViewportChange), l = Wo(
    we,
    e.__scopeNavigationMenu
  ), [c, f] = d.useState(null), [u, p] = d.useState(null), m = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, v = !!i.value, h = v ? i.value : i.previousValue;
  return kt(u, () => {
    u && f({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ a(
    H.div,
    {
      "data-state": zt(v),
      "data-orientation": i.orientation,
      ...o,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": m,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: B(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: B(e.onPointerLeave, We(i.onContentLeave)),
      children: Array.from(l.items).map(([C, { ref: L, forceMount: _, ...w }]) => {
        const E = h === C;
        return /* @__PURE__ */ a(me, { present: _ || E, children: /* @__PURE__ */ a(
          fr,
          {
            ...w,
            ref: Xn(L, (k) => {
              E && k && p(k);
            })
          }
        ) }, C);
      })
    }
  );
}), Qo = "FocusGroup", mr = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = q(Qo, n);
    return /* @__PURE__ */ a(xt.Provider, { scope: n, children: /* @__PURE__ */ a(xt.Slot, { scope: n, children: /* @__PURE__ */ a(H.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), bn = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Jo = "FocusGroupItem", hr = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = $o(n), i = q(Jo, n);
    return /* @__PURE__ */ a(xt.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      H.button,
      {
        ...r,
        ref: t,
        onKeyDown: B(e.onKeyDown, (s) => {
          if (["Home", "End", ...bn].includes(s.key)) {
            let c = o().map((p) => p.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && c.reverse(), bn.includes(s.key)) {
              const p = c.indexOf(s.currentTarget);
              c = c.slice(p + 1);
            }
            setTimeout(() => Wt(c)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function Et(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wt(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function ei(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function kt(e, t) {
  const n = K(t);
  Q(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function zt(e) {
  return e ? "open" : "closed";
}
function gr(e, t) {
  return `${e}-trigger-${t}`;
}
function vr(e, t) {
  return `${e}-content-${t}`;
}
function We(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ti = nr, ni = or, ri = lr, ai = cr, oi = dr, yn = ur, ii = pr;
const br = d.createContext(!0);
function si({
  className: e,
  children: t,
  viewport: n = !0,
  variant: r = "underline",
  ...o
}) {
  return /* @__PURE__ */ a(br.Provider, { value: n, children: /* @__PURE__ */ y(
    ti,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      "data-variant": r,
      className: x("nav-menu", `nav-menu--${r}`, e),
      ...o,
      children: [
        t,
        n && /* @__PURE__ */ a(ci, {})
      ]
    }
  ) });
}
function li({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ni,
    {
      "data-slot": "navigation-menu-list",
      className: x("nav-menu__list", e),
      ...t
    }
  );
}
const Ut = d.createContext(null);
function st({
  className: e,
  ...t
}) {
  const n = d.useRef(null);
  return /* @__PURE__ */ a(Ut.Provider, { value: n, children: /* @__PURE__ */ a(
    ri,
    {
      "data-slot": "navigation-menu-item",
      className: x("nav-menu__item", e),
      ...t
    }
  ) });
}
function lt(e) {
  e.preventDefault();
}
function md({
  className: e,
  children: t,
  onPointerMove: n,
  onPointerLeave: r,
  onPointerEnter: o,
  onPointerMoveCapture: i,
  ref: s,
  ...l
}) {
  const c = d.useContext(Ut), f = d.useCallback(
    (u) => {
      c && (c.current = u), typeof s == "function" ? s(u) : s && (s.current = u);
    },
    [s, c]
  );
  return /* @__PURE__ */ a(
    ai,
    {
      "data-slot": "navigation-menu-trigger",
      className: x("nav-menu__trigger", e),
      ref: f,
      onPointerMoveCapture: (u) => {
        lt(u), i?.(u);
      },
      onPointerLeave: (u) => {
        lt(u), r?.(u);
      },
      onPointerEnter: (u) => {
        lt(u), o?.(u);
      },
      onPointerMove: n,
      ...l,
      children: /* @__PURE__ */ y("span", { className: "nav-menu__trigger-label", children: [
        t,
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined nav-menu__chevron", "aria-hidden": !0, children: "expand_more" })
      ] })
    }
  );
}
function hd({
  className: e,
  children: t,
  forceMount: n,
  ...r
}) {
  const o = d.useContext(br), i = d.useContext(Ut), s = d.useRef(null), [l, c] = d.useState({}), [f, u] = d.useState(!1), p = d.useCallback(() => {
    const m = i?.current;
    if (!m) return;
    const g = m.getBoundingClientRect(), v = m.closest?.(".navbar"), h = v ? v.getBoundingClientRect().bottom + 2 : g.bottom + 2;
    c({
      position: "fixed",
      top: h,
      left: g.left,
      minWidth: 200,
      zIndex: 1100,
      transform: "translateZ(0)"
    });
  }, [i]);
  return d.useLayoutEffect(() => {
    if (o || !i) return;
    const m = s.current, g = i.current, v = () => {
      const b = g?.getAttribute?.("aria-expanded") === "true", C = m?.querySelector?.('[data-state="open"]') != null || m?.firstElementChild?.getAttribute?.("data-state") === "open", L = b || C;
      u(L), L && p();
    };
    if (v(), !g && !m) return;
    const h = new MutationObserver(v);
    return g && h.observe(g, { attributes: !0, attributeFilter: ["aria-expanded"] }), m && h.observe(m, { attributes: !0, attributeFilter: ["data-state"], subtree: !0 }), () => h.disconnect();
  }, [o, i, p]), d.useEffect(() => {
    if (!f || o) return;
    p();
    const m = requestAnimationFrame(() => p());
    return window.addEventListener("scroll", p, !0), window.addEventListener("resize", p), () => {
      cancelAnimationFrame(m), window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    };
  }, [f, o, p]), o ? /* @__PURE__ */ a(
    yn,
    {
      "data-slot": "navigation-menu-content",
      className: x("nav-menu__content", e),
      ...r
    }
  ) : /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("div", { ref: s, style: { display: "contents" }, "aria-hidden": !0, children: /* @__PURE__ */ a(
      yn,
      {
        "data-slot": "navigation-menu-content",
        className: x("nav-menu__content", e),
        forceMount: !0,
        style: { position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, minWidth: 0 },
        ...r,
        children: /* @__PURE__ */ a("span", { "aria-hidden": !0, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" } })
      }
    ) }),
    typeof document < "u" && f && Va(
      /* @__PURE__ */ a(
        "div",
        {
          className: x("nav-menu__content--portal", e),
          "data-slot": "navigation-menu-content",
          style: {
            ...l,
            padding: 0,
            boxSizing: "border-box",
            overflow: "visible"
          },
          children: t
        }
      ),
      document.body
    )
  ] });
}
function ci({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: "nav-menu__viewport-wrap", children: /* @__PURE__ */ a(
    ii,
    {
      "data-slot": "navigation-menu-viewport",
      className: x("nav-menu__viewport", e),
      ...t
    }
  ) });
}
function ct({
  className: e,
  active: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ a(
    oi,
    {
      "data-slot": "navigation-menu-link",
      "data-active": t ? "true" : void 0,
      className: x("nav-menu__link", e),
      ...r,
      children: r.asChild ? n : /* @__PURE__ */ a("span", { className: "nav-menu__link-label", children: n })
    }
  );
}
function gd({
  className: e,
  orientation: t = "horizontal",
  ...n
}) {
  return /* @__PURE__ */ a(
    qe.Root,
    {
      "data-slot": "tabs",
      "data-orientation": t,
      orientation: t,
      className: x(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        e
      ),
      ...n
    }
  );
}
const di = Xe(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-[var(--radius-8,24px)] p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function vd({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    qe.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: x(di({ variant: t }), e),
      ...n
    }
  );
}
function bd({
  className: e,
  leadingIcon: t,
  badge: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ y(
    qe.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: x(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-7,20px)] border border-transparent px-4 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "group-data-[variant=default]/tabs-list:data-[state=active]:bg-[var(--color-blue-20,#BCE4FF)] group-data-[variant=default]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)] group-data-[variant=default]/tabs-list:data-[state=active]:border-transparent dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground group-data-[variant=line]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)]",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:after:left-2 group-data-[variant=line]/tabs-list:after:right-2 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100 group-data-[variant=line]/tabs-list:data-[state=active]:after:bg-[var(--color-secondary-blue)]",
        e
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ a("span", { className: "shrink-0 [&_svg]:size-4", children: t }),
        r,
        n != null && /* @__PURE__ */ a("span", { "data-slot": "tabs-badge", className: "ml-1.5 h-6 min-w-6 rounded-xl px-1.5 text-center text-xs font-medium tabular-nums inline-flex items-center justify-center bg-muted text-muted-foreground", children: n > 99 ? "99+" : n })
      ]
    }
  );
}
function yd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    qe.Content,
    {
      "data-slot": "tabs-content",
      className: x("flex-1 outline-none", e),
      ...t
    }
  );
}
function Cd({
  className: e,
  bordered: t,
  children: n,
  ...r
}) {
  const o = /* @__PURE__ */ a("div", { "data-slot": "data-table-scroll", className: "relative w-full overflow-x-auto [-webkit-overflow-scrolling:touch]", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "data-table",
      className: x("w-full border-collapse text-sm", e),
      ...r,
      children: n
    }
  ) });
  return t ? /* @__PURE__ */ a("div", { "data-slot": "data-table-bordered", className: "rounded-xl border border-[#e5e7eb] bg-white overflow-hidden", children: o }) : o;
}
function _d({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "data-table-header",
      className: x("[&_tr]:border-b", e),
      ...t
    }
  );
}
function wd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "data-table-body",
      className: x("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function xd({
  className: e,
  variant: t = "default",
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "data-table-row",
      className: x(
        "border-b border-[#f1f5f9] transition-colors",
        t === "warn" && "",
        n && "cursor-pointer hover:bg-[#fafbff]",
        !n && "hover:bg-muted/50",
        e
      ),
      onClick: n,
      ...r
    }
  );
}
function Nd({
  className: e,
  align: t,
  numeric: n,
  metric: r,
  shrink: o,
  ...i
}) {
  return /* @__PURE__ */ a(
    "th",
    {
      "data-slot": "data-table-head",
      className: x(
        "px-5 py-2.5 text-left font-[var(--typography-caption-semibold)] text-[color:#64748b] uppercase tracking-[0.05em] text-xs font-semibold bg-[#f8fafc] whitespace-nowrap",
        (t ?? (n ? "right" : "left")) === "right" && "text-right",
        r && "min-w-[108px]",
        o && "w-[1%] pl-3 pr-5",
        e
      ),
      ...i
    }
  );
}
function Ld({
  className: e,
  align: t = "left",
  metric: n,
  numeric: r,
  ...o
}) {
  return /* @__PURE__ */ a(
    "td",
    {
      "data-slot": "data-table-cell",
      className: x(
        "px-5 py-3 align-middle whitespace-nowrap text-sm text-[#0f172a]",
        t === "right" && "text-right",
        n && "min-w-[108px]",
        r && "tabular-nums",
        e
      ),
      ...o
    }
  );
}
function Ed({
  ...e
}) {
  return /* @__PURE__ */ a(z.Root, { "data-slot": "select", ...e });
}
function kd({
  ...e
}) {
  return /* @__PURE__ */ a(z.Group, { "data-slot": "select-group", ...e });
}
function Sd({
  ...e
}) {
  return /* @__PURE__ */ a(z.Value, { "data-slot": "select-value", ...e });
}
const ui = {
  default: "border-transparent bg-[rgba(235,247,255,1)] text-[var(--color-button-primary-text)] hover:bg-[rgba(220,240,255,1)] focus-visible:bg-[rgba(220,240,255,1)] data-[placeholder]:text-[var(--color-button-primary-text)]/70 [&_svg]:opacity-80",
  primary: "border-transparent bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-bg-hover)] focus-visible:bg-[var(--color-button-primary-bg-hover)] data-[placeholder]:text-[var(--color-button-primary-text)] [&_svg]:opacity-80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 dark:hover:bg-secondary/80 dark:focus-visible:bg-secondary/80 data-[placeholder]:text-secondary-foreground/70 [&_svg]:text-secondary-foreground/80",
  outline: "border border-input bg-transparent text-foreground hover:bg-accent/50 focus-visible:bg-accent/50 dark:bg-input/30 dark:hover:bg-input/50 dark:focus-visible:bg-input/50 data-[placeholder]:text-muted-foreground [&_svg]:text-muted-foreground"
}, fi = {
  default: "h-9 min-h-9 px-3 py-2 [&_svg]:size-4",
  sm: "h-8 min-h-8 px-2.5 py-1.5 [&_svg]:size-3.5"
}, pi = {
  default: void 0,
  sm: { height: 32, minHeight: 32, paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, fontSize: "0.75rem" }
};
function Md({
  className: e,
  size: t = "default",
  variant: n = "default",
  children: r,
  ...o
}) {
  const i = t === "small" ? "sm" : t;
  return /* @__PURE__ */ y(
    z.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      "data-variant": n,
      style: pi[i],
      className: x(
        "flex w-fit items-center justify-between gap-2 rounded-[var(--radius-8)] border whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        fi[i],
        ui[n],
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(z.Icon, { asChild: !0, children: /* @__PURE__ */ a(Gn, { className: "opacity-50" }) })
      ]
    }
  );
}
function Rd({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ a(z.Portal, { children: /* @__PURE__ */ y(
    z.Content,
    {
      "data-slot": "select-content",
      className: x(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-[var(--radius-8)] border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ a(mi, {}),
        /* @__PURE__ */ a(
          z.Viewport,
          {
            className: x(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(hi, {})
      ]
    }
  ) });
}
function Ad({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Label,
    {
      "data-slot": "select-label",
      className: x("px-2 py-1.5 text-foreground", e),
      ...t
    }
  );
}
function Fd({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ y(
    z.Item,
    {
      "data-slot": "select-item",
      className: x(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ a(z.ItemIndicator, { children: /* @__PURE__ */ a(Ba, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(z.ItemText, { children: t })
      ]
    }
  );
}
function Pd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.Separator,
    {
      "data-slot": "select-separator",
      className: x("pointer-events-none -mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function mi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: x("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a($a, { className: "size-4" })
    }
  );
}
function hi({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    z.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: x("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(Gn, { className: "size-4" })
    }
  );
}
const gi = "relative box-border h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] border border-solid border-[rgba(44,140,201,1)] bg-[rgba(235,253,255,1)]";
function vi(e, t) {
  return e == null ? "…" : `${Math.min(100, Math.max(0, Math.round(e / t * 100)))}% complete`;
}
const bi = d.forwardRef(
  ({
    className: e,
    label: t,
    labelClassName: n,
    labelVariant: r = "none",
    scaleStartLabel: o = "0",
    scaleEndLabel: i = "100",
    progressValueLabel: s,
    completeLabelOverride: l,
    value: c,
    max: f = 100,
    ...u
  }, p) => {
    const m = typeof c == "number" && !Number.isNaN(c) ? c : null, g = typeof f == "number" && f > 0 ? f : 100, v = m != null ? Math.min(100, Math.max(0, m / g * 100)) : 0, h = s ?? (m != null ? String(Math.min(100, Math.max(0, Math.round(m / g * 100)))) : "…"), b = l ?? vi(m, g), C = r === "scale" || r === "complete-left" || t != null, L = /* @__PURE__ */ a(
      Ct.Root,
      {
        ref: p,
        "data-slot": "progress",
        className: x(gi, C ? void 0 : e),
        value: m,
        max: g,
        ...u,
        children: /* @__PURE__ */ a(
          Ct.Indicator,
          {
            "data-slot": "progress-indicator",
            className: x(
              "h-full w-full flex-1 rounded-[var(--radius-full)] bg-[rgba(44,140,201,1)]",
              "origin-left transition-transform duration-500 ease-out",
              "data-[state=indeterminate]:w-[36%] data-[state=indeterminate]:max-w-none data-[state=indeterminate]:flex-none"
            ),
            style: m != null ? { transform: `translateX(-${100 - v}%)` } : void 0
          }
        )
      }
    );
    if (!C)
      return L;
    if (r === "scale") {
      const _ = Math.min(100, Math.max(0, v)), w = m === null;
      return /* @__PURE__ */ y(
        "div",
        {
          "data-slot": "progress-field",
          className: x("inline-flex w-full max-w-full flex-col gap-1", e),
          children: [
            L,
            /* @__PURE__ */ y(
              "div",
              {
                "data-slot": "progress-scale-row",
                className: x("relative mt-1 min-h-[1.125rem]", n),
                children: [
                  /* @__PURE__ */ y("div", { className: "flex justify-between text-xs text-muted-foreground tabular-nums", children: [
                    /* @__PURE__ */ a("span", { "data-slot": "progress-scale-start", children: o }),
                    /* @__PURE__ */ a("span", { "data-slot": "progress-scale-end", children: i })
                  ] }),
                  /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-end", children: /* @__PURE__ */ a(
                    "div",
                    {
                      "data-slot": "progress-current-cluster",
                      className: "absolute bottom-0 z-10 flex items-baseline gap-1.5 whitespace-nowrap text-xs text-muted-foreground",
                      style: w ? {
                        left: "50%",
                        transform: "translateX(-50%)"
                      } : {
                        left: `${_}%`,
                        transform: "translateX(-100%)"
                      },
                      children: /* @__PURE__ */ a("span", { className: "tabular-nums", "data-slot": "progress-current-value", children: h })
                    }
                  ) })
                ]
              }
            )
          ]
        }
      );
    }
    return r === "complete-left" ? /* @__PURE__ */ y(
      "div",
      {
        "data-slot": "progress-field",
        className: x("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          L,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-complete-label",
              className: x("block text-left text-xs text-muted-foreground", n),
              children: b
            }
          )
        ]
      }
    ) : /* @__PURE__ */ y(
      "div",
      {
        "data-slot": "progress-field",
        className: x("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          L,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-label",
              className: x("text-xs text-muted-foreground", n),
              children: t
            }
          )
        ]
      }
    );
  }
);
bi.displayName = Ct.Root.displayName;
const Gt = d.createContext(null);
function Je() {
  const e = d.useContext(Gt);
  if (!e) throw new Error("Stepper components must be used within <Stepper>");
  return e;
}
const yr = d.createContext(null), Kt = d.createContext(null);
function Cr() {
  const e = d.useContext(Kt);
  if (e == null) throw new Error("StepperItem subcomponents must be inside <StepperItem>");
  return e;
}
const _r = d.forwardRef(
  ({ className: e, value: t, onValueChange: n, size: r = "default", children: o, ...i }, s) => /* @__PURE__ */ a(Gt.Provider, { value: { value: t, onValueChange: n, size: r }, children: /* @__PURE__ */ a(
    "nav",
    {
      ref: s,
      "aria-label": "Steps",
      "data-slot": "stepper",
      "data-size": r,
      className: x("w-full", e),
      ...i,
      children: o
    }
  ) })
);
_r.displayName = "Stepper";
const Yt = d.forwardRef(
  ({ className: e, segmentIndex: t, style: n, children: r, ...o }, i) => {
    const { value: s, size: l } = Je(), c = d.useContext(yr), f = typeof c == "number" ? c : t ?? 0, u = l === "sm", p = Number(s), m = Number.isFinite(p) && p > Number(f);
    return /* @__PURE__ */ y(
      "li",
      {
        ref: i,
        ...o,
        "data-slot": "stepper-separator",
        "data-state": m ? "filled" : "upcoming",
        "aria-hidden": !0,
        className: x(
          "flex min-h-px min-w-[1rem] flex-1 list-none items-center self-start p-0",
          u ? "mx-0.5 mt-3" : "mx-1 mt-4",
          e
        ),
        style: n,
        children: [
          /* @__PURE__ */ a(
            "span",
            {
              "data-ef-stepper-connector-bar": !0,
              "data-filled": m ? "true" : "false",
              className: "box-border block h-[2px] w-full min-w-[1rem] shrink-0 rounded-full"
            }
          ),
          r
        ]
      }
    );
  }
);
Yt.displayName = "StepperSeparator";
function yi(e) {
  if (!d.isValidElement(e)) return !1;
  const t = e.type;
  return t === Yt || t?.displayName === "StepperSeparator";
}
function Ci(e) {
  return d.isValidElement(e) && e.type.displayName === "StepperItem";
}
const wr = d.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const o = [];
    let i = 0, s = 0;
    return d.Children.forEach(t, (l) => {
      if (yi(l)) {
        const c = s++;
        o.push(
          /* @__PURE__ */ a(yr.Provider, { value: c, children: d.cloneElement(l, {
            key: l.key ?? `stepper-sep-inner-${c}`,
            segmentIndex: c
          }) }, l.key ?? `stepper-sep-${c}`)
        );
        return;
      }
      if (Ci(l)) {
        const c = i++;
        o.push(
          d.cloneElement(l, {
            key: l.key ?? `stepper-item-${c}`,
            step: c
          })
        );
        return;
      }
      o.push(l);
    }), /* @__PURE__ */ a(
      "ol",
      {
        ref: r,
        "data-slot": "stepper-list",
        className: x("m-0 flex w-full list-none items-start gap-0 p-0", e),
        ...n,
        children: o
      }
    );
  }
);
wr.displayName = "StepperList";
const xr = d.forwardRef(
  ({ className: e, step: t, children: n, ...r }, o) => {
    const i = t ?? 0, { value: s, size: l } = Je(), c = i < s ? "complete" : i === s ? "active" : "upcoming", f = l === "sm";
    return /* @__PURE__ */ a(Kt.Provider, { value: i, children: /* @__PURE__ */ a(
      "li",
      {
        ref: o,
        "data-slot": "stepper-item",
        "data-state": c,
        className: x(
          "relative flex min-w-0 shrink-0 flex-col items-center",
          f ? "gap-1" : "gap-2",
          e
        ),
        ...r,
        children: n
      }
    ) });
  }
);
xr.displayName = "StepperItem";
const _i = d.forwardRef(
  ({ className: e, type: t = "button", disabled: n, onClick: r, children: o, ...i }, s) => {
    const { value: l, onValueChange: c, size: f } = Je(), u = Cr(), p = c != null && !n && u <= l, g = x(
      "group/stepper-trigger flex rounded-md",
      f === "sm" ? "w-auto flex-row items-center gap-2 text-left" : "w-full max-w-[10rem] flex-col items-center gap-2 text-center"
    ), v = x(
      g,
      p && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90",
      !c && "cursor-default",
      c && u > l && "cursor-default",
      e
    );
    return c ? /* @__PURE__ */ a(
      "button",
      {
        ref: s,
        type: t,
        "data-slot": "stepper-trigger",
        "aria-current": u === l ? "step" : void 0,
        disabled: n ?? u > l,
        className: x(
          v,
          "disabled:pointer-events-none disabled:opacity-100"
        ),
        onClick: (h) => {
          r?.(h), !h.defaultPrevented && p && c(u);
        },
        ...i,
        children: o
      }
    ) : /* @__PURE__ */ a(
      "div",
      {
        "data-slot": "stepper-trigger",
        "aria-current": u === l ? "step" : void 0,
        className: v,
        children: o
      }
    );
  }
);
_i.displayName = "StepperTrigger";
const Cn = "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]";
function _n(e, t = "default") {
  const n = t === "sm";
  return x(
    "flex shrink-0 items-center justify-center rounded-[var(--radius-full)] font-semibold tabular-nums transition-colors",
    n ? "size-6 text-[10px]" : "size-8 text-xs",
    e === "complete" && x(Cn, n ? "[&_.material-symbols-outlined]:text-[14px] [&_.material-symbols-outlined]:leading-none" : "[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none"),
    e === "active" && x(
      Cn,
      n ? "ring-[1.5px] ring-[var(--color-button-primary-bg)] ring-offset-[1.5px] ring-offset-background" : "ring-2 ring-[var(--color-button-primary-bg)] ring-offset-2 ring-offset-background"
    ),
    e === "upcoming" && "bg-[rgba(235,253,255,0.6)] text-[var(--muted-foreground)]"
  );
}
function wn({ sm: e }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: "material-symbols-outlined font-normal",
      style: { fontSize: e ? "14px" : "18px", fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24" },
      "aria-hidden": !0,
      children: "check"
    }
  );
}
const Nr = d.forwardRef(
  ({ className: e, stepDisplay: t, forceState: n, children: r, ...o }, i) => {
    const s = d.useContext(Kt), l = d.useContext(Gt), c = l?.size ?? "default", f = c === "sm";
    if (n != null) {
      const h = t ?? 1, b = n === "complete";
      return /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "stepper-indicator",
          "data-state": n,
          className: x(_n(n, c), e),
          ...o,
          children: r ?? (b ? /* @__PURE__ */ a(wn, { sm: f }) : h)
        }
      );
    }
    if (s == null || l == null)
      throw new Error(
        "StepperIndicator must be inside StepperItem, or pass forceState for a static preview."
      );
    const u = s, p = l.value, m = u < p ? "complete" : u === p ? "active" : "upcoming", g = t ?? u + 1, v = m === "complete";
    return /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "stepper-indicator",
        "data-state": m,
        className: x(_n(m, c), e),
        ...o,
        children: r ?? (v ? /* @__PURE__ */ a(wn, { sm: f }) : g)
      }
    );
  }
);
Nr.displayName = "StepperIndicator";
const Lr = d.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = Cr(), { value: o, size: i } = Je(), s = r === o, l = r < o;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: n,
        "data-slot": "stepper-title",
        className: x(
          "text-center font-medium leading-tight break-words",
          i === "sm" ? "max-w-[7rem] text-[11px]" : "max-w-[10rem] text-xs",
          (s || l) && "text-foreground",
          !s && !l && "text-muted-foreground",
          e
        ),
        ...t
      }
    );
  }
);
Lr.displayName = "StepperTitle";
const wi = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "span",
    {
      ref: n,
      "data-slot": "stepper-description",
      className: x(
        "max-w-[10rem] text-center text-[11px] leading-snug text-muted-foreground break-words",
        e
      ),
      ...t
    }
  )
);
wi.displayName = "StepperDescription";
function Td({ ...e }) {
  return /* @__PURE__ */ a(Z.Root, { "data-slot": "dialog", ...e });
}
function Od({ ...e }) {
  return /* @__PURE__ */ a(Z.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function xi({ ...e }) {
  return /* @__PURE__ */ a(Z.Portal, { "data-slot": "dialog-portal", ...e });
}
function Dd({ ...e }) {
  return /* @__PURE__ */ a(Z.Close, { "data-slot": "dialog-close", ...e });
}
function Ni({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: x("ef-dialog__overlay", e),
      ...t
    }
  );
}
function Id({
  className: e,
  children: t,
  showCloseButton: n = !0,
  steps: r,
  currentStep: o = 0,
  ...i
}) {
  return /* @__PURE__ */ y(xi, { children: [
    /* @__PURE__ */ a(Ni, {}),
    /* @__PURE__ */ y(
      Z.Content,
      {
        "data-slot": "dialog-content",
        className: x("ef-dialog__content", e),
        ...i,
        children: [
          t,
          n && /* @__PURE__ */ y(Z.Close, { "data-slot": "dialog-close", className: "ef-dialog__close-btn", children: [
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: 20 }, "aria-hidden": !0, children: "close" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Vd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: x("ef-dialog__header", e),
      ...t
    }
  );
}
function Bd({ steps: e, currentStep: t = 0, className: n }) {
  return /* @__PURE__ */ a(_r, { value: t, size: "sm", className: x("ef-dialog__stepper", n), children: /* @__PURE__ */ a(wr, { children: e.map((r, o) => /* @__PURE__ */ y(d.Fragment, { children: [
    o > 0 && /* @__PURE__ */ a(Yt, {}),
    /* @__PURE__ */ y(xr, { children: [
      /* @__PURE__ */ a(Nr, {}),
      /* @__PURE__ */ a(Lr, { children: r.label })
    ] })
  ] }, o)) }) });
}
function $d({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-body",
      className: x("ef-dialog__body", e),
      ...t
    }
  );
}
function Zd({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: x("ef-dialog__footer", e),
      ...t
    }
  );
}
function Hd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Title,
    {
      "data-slot": "dialog-title",
      className: x("ef-dialog__title", e),
      ...t
    }
  );
}
function jd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Z.Description,
    {
      "data-slot": "dialog-description",
      className: x("ef-dialog__description", e),
      ...t
    }
  );
}
const Li = d.forwardRef(
  ({ className: e, value: t, color: n = "grey", size: r = "md", ...o }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      "data-slot": "number-badge",
      className: x(
        "number-badge",
        `number-badge--${r}`,
        `number-badge--${n}`,
        e
      ),
      ...o,
      children: t
    }
  )
);
Li.displayName = "NumberBadge";
function Ei(e) {
  return e === !0 || e === "alert" ? "stat-card__badge--alert" : e === "success" ? "stat-card__badge--success" : e === "info" ? "stat-card__badge--info" : "";
}
const ki = d.forwardRef(
  ({ className: e, icon: t = "person", label: n, value: r, pct: o, color: i = "grey", size: s = "lg", variant: l = "outlined", iconBadge: c, ...f }, u) => /* @__PURE__ */ y(
    "div",
    {
      ref: u,
      "data-slot": "stat-card",
      className: x(
        "stat-card",
        `stat-card--${s}`,
        `stat-card--${i}`,
        `stat-card--${l}`,
        e
      ),
      ...f,
      children: [
        /* @__PURE__ */ y("div", { className: "stat-card__icon", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: t }),
          c && /* @__PURE__ */ a("span", { className: x("stat-card__badge", Ei(c)), "aria-hidden": !0 })
        ] }),
        /* @__PURE__ */ y("div", { className: "stat-card__text", children: [
          /* @__PURE__ */ a("span", { className: "stat-card__label", children: n }),
          /* @__PURE__ */ y("div", { className: "stat-card__value-row", children: [
            /* @__PURE__ */ a("span", { className: "stat-card__value", children: r }),
            o && /* @__PURE__ */ y("span", { className: "stat-card__pct", children: [
              "(",
              o,
              ")"
            ] })
          ] })
        ] })
      ]
    }
  )
);
ki.displayName = "StatCard";
const Si = d.forwardRef(
  ({ className: e, size: t = "lg", children: n, ...r }, o) => /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      "data-slot": "stat-card-group",
      className: x(
        "stat-card-group",
        `stat-card-group--${t}`,
        e
      ),
      ...r,
      children: d.Children.map(n, (i, s) => /* @__PURE__ */ y(V, { children: [
        s > 0 && /* @__PURE__ */ a("div", { className: "stat-card-group__divider", "aria-hidden": !0 }),
        i
      ] }))
    }
  )
);
Si.displayName = "StatCardGroup";
function Mi({
  to: e,
  children: t,
  className: n,
  onClick: r
}) {
  return /* @__PURE__ */ a("a", { href: e, className: n, onClick: r, children: t });
}
function Ri({
  tabs: e,
  avatarMenuItems: t,
  user: n,
  switchOptions: r = [],
  onSwitchUser: o,
  activePath: i = "",
  homePath: s = "/",
  logoSrc: l = "/eightfold-logo.svg",
  productName: c = "Career Hub",
  productIconSrc: f = "/career-hub-icon.svg",
  hideProductIcon: u = !1,
  searchPlaceholder: p = "Type to search",
  onSearchChange: m,
  onSearchIconClick: g,
  actionButtons: v = [],
  LinkComponent: h = Mi,
  NavLinkComponent: b
}) {
  const [C, L] = yt(!1), [_, w] = yt(!1), E = h, k = i === "/profile", S = n.avatarType === "photo" && n.avatarPhotoSrc ? n.avatarPhotoSrc.replace("w=200&h=200", "w=80&h=80") : null, F = (N) => {
    const P = N.chevron && N.subItems && N.subItems.length > 0;
    if (N.path && P) {
      const O = i === N.path || N.subItems.some((T) => T.path === i);
      return /* @__PURE__ */ a("li", { className: "nav-menu__item", children: /* @__PURE__ */ y(W.Root, { children: [
        /* @__PURE__ */ a(W.Trigger, { asChild: !0, children: /* @__PURE__ */ y("button", { className: `navbar__tab navbar__tab--dropdown ${O ? "navbar__tab--active" : ""}`, type: "button", children: [
          /* @__PURE__ */ a("span", { className: "navbar__tab-label", children: N.label }),
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", style: { fontSize: 16, marginLeft: 2 }, children: "expand_more" })
        ] }) }),
        /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(W.Content, { className: "navbar__tab-menu-inner", align: "start", sideOffset: 4, style: { zIndex: 99999 }, children: N.subItems.map((T) => /* @__PURE__ */ a(W.Item, { asChild: !0, children: /* @__PURE__ */ a(E, { to: T.path, className: "nav-menu__link navbar__tab-menu-item", children: T.label }) }, T.path)) }) })
      ] }) }, N.id);
    }
    if (N.path) {
      const O = b && b !== h, T = i === N.path || N.path === "/" && !i;
      return O ? /* @__PURE__ */ a(st, { children: /* @__PURE__ */ a(ct, { asChild: !0, active: T, children: /* @__PURE__ */ a(b, { to: N.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ y("span", { className: "navbar__tab-label", children: [
        N.label,
        N.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, N.id) : /* @__PURE__ */ a(st, { children: /* @__PURE__ */ a(ct, { asChild: !0, active: T, children: /* @__PURE__ */ a(E, { to: N.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ y("span", { className: "navbar__tab-label", children: [
        N.label,
        N.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, N.id);
    }
    return /* @__PURE__ */ a(st, { children: /* @__PURE__ */ a(ct, { href: "#", className: "navbar__tab", children: /* @__PURE__ */ y("span", { className: "navbar__tab-label", children: [
      N.label,
      N.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) }) }, N.id);
  }, R = (N) => N.path ? N.chevron && N.subItems && N.subItems.length > 0 ? /* @__PURE__ */ y("div", { className: "navbar__menu-group", children: [
    /* @__PURE__ */ a(E, { to: N.path, className: "navbar__menu-link navbar__menu-link--parent", onClick: () => L(!1), children: N.label }),
    /* @__PURE__ */ a("div", { className: "navbar__menu-sublinks", children: N.subItems.map((O) => /* @__PURE__ */ a(
      E,
      {
        to: O.path,
        className: "navbar__menu-link navbar__menu-link--sub",
        onClick: () => L(!1),
        children: O.label
      },
      O.path
    )) })
  ] }, N.id) : /* @__PURE__ */ y(
    E,
    {
      to: N.path,
      className: "navbar__menu-link",
      onClick: () => L(!1),
      children: [
        N.label,
        N.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    N.id
  ) : /* @__PURE__ */ y(
    "a",
    {
      href: "#",
      className: "navbar__menu-link",
      onClick: (P) => {
        P.preventDefault(), N.onClick?.(), L(!1);
      },
      children: [
        N.label,
        N.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    N.id
  );
  return /* @__PURE__ */ y("nav", { className: "navbar", children: [
    /* @__PURE__ */ y("div", { className: "navbar__inner", children: [
      /* @__PURE__ */ y("div", { className: "navbar__left", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "navbar__menu-btn",
            onClick: () => L(!0),
            "aria-label": "Open menu",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__menu-btn-icon", children: "menu" })
          }
        ),
        /* @__PURE__ */ y(E, { to: s, className: "navbar__branding", children: [
          /* @__PURE__ */ a("img", { src: l, alt: "", className: "navbar__logo" }),
          /* @__PURE__ */ a("div", { className: "navbar__divider" }),
          /* @__PURE__ */ y("div", { className: "navbar__product", children: [
            !u && /* @__PURE__ */ a("img", { src: f, alt: "", className: "navbar__product-icon", width: 40, height: 40 }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__product-name ${c.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
                children: (() => {
                  const N = c.trim().split(/\s+/);
                  return N.length <= 1 ? c : /* @__PURE__ */ y(V, { children: [
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: N[0] }),
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: N.slice(1).join(" ") })
                  ] });
                })()
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(si, { viewport: !1, variant: "underline", className: "navbar__tabs", delayDuration: 400, skipDelayDuration: 200, children: /* @__PURE__ */ a(li, { className: "navbar__tabs-list", children: e.map(F) }) })
      ] }),
      /* @__PURE__ */ y("div", { className: "navbar__right", children: [
        /* @__PURE__ */ y("div", { className: "navbar__search-wrap", children: [
          /* @__PURE__ */ y("div", { className: "navbar__search", children: [
            /* @__PURE__ */ a("span", { className: "navbar__search-input", children: /* @__PURE__ */ a(
              Ya,
              {
                size: "small",
                shape: "pill",
                leadingIcon: "search",
                placeholder: p,
                "aria-label": "Search",
                onChange: (N) => m?.(N.target.value)
              }
            ) }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "navbar__search-icon-btn navbar__btn",
                "aria-label": "Search",
                onClick: () => g?.(),
                children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "search" })
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "navbar__divider navbar__divider--vertical" })
        ] }),
        /* @__PURE__ */ y("div", { className: "navbar__right-icons", children: [
          v.map((N, P) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "navbar__btn navbar__btn--action",
              "aria-label": N.ariaLabel,
              onClick: N.onClick,
              children: N.iconSrc ? /* @__PURE__ */ a("img", { src: N.iconSrc, alt: "", className: "navbar__btn-icon-img", width: 20, height: 20 }) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: N.icon ?? "circle" })
            },
            P
          )),
          /* @__PURE__ */ a("button", { type: "button", className: "navbar__btn navbar__btn--menu", "aria-label": "App switcher", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "apps" }) })
        ] }),
        /* @__PURE__ */ y(W.Root, { children: [
          /* @__PURE__ */ a(W.Trigger, { asChild: !0, children: /* @__PURE__ */ y("button", { type: "button", className: "navbar__avatar", "aria-label": "Open profile menu", children: [
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__avatar-inner ${n.avatarColor ? "navbar__avatar-inner--colored" : ""}`,
                style: n.avatarColor ? { backgroundColor: n.avatarColor } : void 0,
                children: _ || !S ? /* @__PURE__ */ a("span", { className: "navbar__avatar-initials", children: n.avatarInitials ?? "?" }) : /* @__PURE__ */ a(
                  "img",
                  {
                    src: S,
                    alt: "",
                    className: "navbar__avatar-img",
                    onError: () => w(!0)
                  }
                )
              }
            ),
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__avatar-caret", "aria-hidden": !0, children: "expand_more" })
          ] }) }),
          /* @__PURE__ */ a(W.Portal, { children: /* @__PURE__ */ a(W.Content, { className: "navbar__avatar-menu", align: "end", sideOffset: 8, children: /* @__PURE__ */ y("div", { className: "navbar__avatar-menu-inner", children: [
            t.map((N) => /* @__PURE__ */ a(W.Item, { asChild: !0, children: /* @__PURE__ */ a(
              E,
              {
                to: N.path,
                className: `navbar__avatar-menu-item ${N.label === "My Profile" && k ? "navbar__avatar-menu-item--active" : ""}`,
                children: N.label
              }
            ) }, N.label)),
            r.length > 0 && o && /* @__PURE__ */ y(V, { children: [
              /* @__PURE__ */ a("div", { className: "navbar__avatar-menu-divider" }),
              /* @__PURE__ */ y("div", { className: "navbar__avatar-menu-switch", children: [
                /* @__PURE__ */ a(
                  "input",
                  {
                    type: "text",
                    placeholder: "Switch To...",
                    className: "navbar__avatar-menu-input",
                    "aria-label": "Switch to"
                  }
                ),
                r.map((N) => /* @__PURE__ */ a(W.Item, { asChild: !0, children: /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "navbar__avatar-menu-option",
                    onClick: () => o(N.userId),
                    children: N.label
                  }
                ) }, N.userId))
              ] })
            ] })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a(Z.Root, { open: C, onOpenChange: L, children: /* @__PURE__ */ y(Z.Portal, { children: [
      /* @__PURE__ */ a(Z.Overlay, { className: "navbar__menu-overlay" }),
      /* @__PURE__ */ y(Z.Content, { className: "navbar__menu-drawer", "aria-describedby": void 0, children: [
        /* @__PURE__ */ y("div", { className: "navbar__menu-header", children: [
          /* @__PURE__ */ a(
            "span",
            {
              className: `navbar__product-name ${c.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
              children: (() => {
                const N = c.trim().split(/\s+/);
                return N.length <= 1 ? c : /* @__PURE__ */ y(V, { children: [
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: N[0] }),
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: N.slice(1).join(" ") })
                ] });
              })()
            }
          ),
          /* @__PURE__ */ a(Z.Close, { asChild: !0, children: /* @__PURE__ */ a("button", { type: "button", className: "navbar__menu-close", "aria-label": "Close menu", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" }) }) })
        ] }),
        /* @__PURE__ */ a("nav", { className: "navbar__menu-nav", children: e.map(R) })
      ] })
    ] }) })
  ] });
}
const Er = d.createContext({
  variant: "career-hub",
  careerHubSize: "parent"
});
function Ai() {
  return d.useContext(Er);
}
const Fi = Xe(
  "w-full shrink-0 border-b border-[transparent] transition-colors",
  {
    variants: {
      variant: {
        "talent-acquisition": "border-b-[var(--color-blue-70)] bg-[var(--background)] [border-bottom-width:2px]",
        "career-hub": "border-b-[var(--border)] bg-[var(--color-background1-grey)]/60"
      }
    },
    defaultVariants: {
      variant: "career-hub"
    }
  }
), kr = d.forwardRef(
  ({ className: e, variant: t, chSize: n = "parent", sticky: r = !1, overlayBackground: o = !1, ...i }, s) => {
    const l = t ?? "career-hub", c = {
      variant: l,
      careerHubSize: l === "career-hub" ? n : "parent"
    };
    return /* @__PURE__ */ a(Er.Provider, { value: c, children: /* @__PURE__ */ a(
      "header",
      {
        ref: s,
        "data-slot": "header",
        "data-variant": l,
        "data-ch-size": l === "career-hub" ? n : void 0,
        className: x(
          Fi({ variant: l }),
          o && l === "career-hub" && "!bg-transparent",
          r && "sticky top-0 z-30",
          r && !(o && l === "career-hub") && "backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--background)]/95",
          l === "career-hub" && r && !(o && l === "career-hub") && "supports-[backdrop-filter]:bg-[var(--color-background1-grey)]/80",
          r && o && l === "career-hub" && "supports-[backdrop-filter]:bg-transparent",
          e
        ),
        ...i
      }
    ) });
  }
);
kr.displayName = "Header";
const Pi = {
  profile: "h-[var(--header-career-hub-profile-height)] min-h-[var(--header-career-hub-profile-height)] flex-wrap items-start content-start gap-y-3 pb-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:pb-6 md:gap-5",
  parent: "h-[var(--header-career-hub-parent-height)] min-h-[var(--header-career-hub-parent-height)] items-start gap-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)]",
  child: "h-[var(--header-career-hub-child-height)] min-h-[var(--header-career-hub-child-height)] items-start gap-3 pb-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)]"
}, Sr = d.forwardRef(
  ({ className: e, actions: t, children: n, ...r }, o) => {
    const { variant: i, careerHubSize: s } = Ai(), l = "flex min-h-12 w-full max-w-[100vw] items-start gap-3 py-0 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:h-[var(--navbar-height,3.75rem)] md:gap-4", c = x(
      "flex w-full max-w-[100vw] items-start",
      Pi[s]
    );
    return /* @__PURE__ */ y(
      "div",
      {
        ref: o,
        "data-slot": "header-toolbar",
        className: x(i === "talent-acquisition" ? l : c, e),
        ...r,
        children: [
          n,
          t != null ? /* @__PURE__ */ a("div", { "data-slot": "header-actions", children: t }) : null
        ]
      }
    );
  }
);
Sr.displayName = "HeaderToolbar";
const Ti = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-actions", className: x(e), ...t })
);
Ti.displayName = "HeaderActions";
const Oi = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "header-group",
      className: x("flex min-w-0 items-center gap-2 md:gap-3", e),
      ...t
    }
  )
);
Oi.displayName = "HeaderGroup";
const Mr = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("h1", { ref: n, "data-slot": "header-title", className: x(e), ...t })
);
Mr.displayName = "HeaderTitle";
const Rr = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-text-group", className: x(e), ...t })
);
Rr.displayName = "HeaderTextGroup";
const Ar = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("p", { ref: n, "data-slot": "header-secondary", className: x(e), ...t })
);
Ar.displayName = "HeaderSecondary";
const Di = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_ch_prof)"><rect width="1440" height="540" fill="white"/><path d="M760 77.8125L860 20V120L760 177.812V77.8125Z" fill="#C15151"/><path d="M960 77.8125L860 20V120L960 177.812V77.8125Z" fill="#F29D31"/><path d="M1060 251.25L1160 193.438V293.438L1060 351.25V251.25Z" fill="#69717F"/><path d="M1260 251.25L1160 193.438V293.438L1260 351.25V251.25Z" fill="#2DB3C7"/><path d="M1160 -6.5625L1060 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#F29D31"/><path d="M1360 93.4375L1260 35.625V135.625L1360 193.438V93.4375Z" fill="#F29D31"/><path d="M960 -22.1875L860 -80V20L960 77.8125V-22.1875Z" fill="#2DB3C7"/><path d="M1460 351.25L1360 293.438V393.438L1460 451.25V351.25Z" fill="#858B98"/><path d="M1460 451.25L1360 393.438V493.438L1460 551.25V451.25Z" fill="#2DB3C7"/><path d="M1460 251.25L1360 193.438V293.438L1460 351.25V251.25Z" fill="#E46F6F"/><path d="M1160 -6.5625L1260 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1160 93.4375L1260 35.625V135.625L1160 193.438V93.4375Z" fill="#69717F"/><path d="M1360 -6.5625L1460 -64.375V35.625L1360 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1360 93.4375L1460 35.625V135.625L1360 193.438V93.4375Z" fill="#69717F"/><path d="M1060 35.625L960 -22.1875V77.8125L1060 135.625V35.625Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_ch_def)"><rect width="1440" height="292" fill="white"/><path d="M760 80.8585L860 20.7829V124.697L760 184.773V80.8585Z" fill="#C15151"/><path d="M960 80.8585L860 20.7829V124.697L960 184.773V80.8585Z" fill="#F29D31"/><path d="M1060 261.085L1160 201.01V304.924L1060 365V261.085Z" fill="#69717F"/><path d="M1260 261.085L1160 201.01V304.924L1260 365V261.085Z" fill="#2DB3C7"/><path d="M1160 -6.8194L1060 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#F29D31"/><path d="M1360 97.0952L1260 37.0196V140.934L1360 201.01V97.0952Z" fill="#F29D31"/><path d="M960 -23.056L860 -83.1317V20.7829L960 80.8586V-23.056Z" fill="#2DB3C7"/><path d="M1460 261.085L1360 201.01V304.924L1460 365V261.085Z" fill="#E46F6F"/><path d="M1160 -6.8194L1260 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1160 97.0952L1260 37.0196V140.934L1160 201.01V97.0952Z" fill="#69717F"/><path d="M1360 -6.8194L1460 -66.895V37.0196L1360 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1360 97.0952L1460 37.0196V140.934L1360 201.01V97.0952Z" fill="#69717F"/><path d="M1060 37.0196L960 -23.0561V80.8585L1060 140.934V37.0196Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function Vi(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? Di : Ii)}")`;
}
const Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_hex_prof)"><rect width="1440" height="540" fill="#ffffff"/><path d="M578.038 175.577V234.422L629 263.845L679.962 234.422V175.577L629 146.154L578.038 175.577Z" stroke="#A9B0F5" stroke-width="2"/><path d="M629 157L587.431 181V229L629 253L670.569 229V181L629 157Z" fill="#A9B0F5"/><path opacity="0.5" d="M629 173L601.287 189V221L629 237L656.713 221V189L629 173Z" fill="#5962B7"/><path d="M835 110L807.287 126V158L835 174L862.713 158V126L835 110Z" fill="#FFA3A3"/><path opacity="0.5" d="M835 121L816.813 131.5V152.5L835 163L853.187 152.5V131.5L835 121Z" fill="#C15151"/><path d="M990 153L913.79 197V285L990 329L1066.21 285V197L990 153Z" fill="#BEC2CA"/><path opacity="0.5" d="M989.5 181L938.838 210.75V270.25L989.5 300L1040.16 270.25V210.75L989.5 181Z" fill="#69717F"/><path d="M1124 139L981.106 221.5V386.5L1124 469L1266.89 386.5V221.5L1124 139Z" fill="#FFA3A3"/><path opacity="0.5" d="M1124 194L1028.74 249V359L1124 414L1219.26 359V249L1124 194Z" fill="#C15151"/><path d="M1285 291L1243.43 315V363L1285 387L1326.57 363V315L1285 291Z" fill="#A9B0F5"/><path opacity="0.5" d="M1285 307L1257.29 323V355L1285 371L1312.71 355V323L1285 307Z" fill="#5962B7"/><path d="M1108 -78L1031.79 -34V54L1108 98L1184.21 54V-34L1108 -78Z" fill="#BEC2CA"/><path opacity="0.5" d="M1107.5 -50L1056.84 -20.25V39.25L1107.5 69L1158.16 39.25V-20.25L1107.5 -50Z" fill="#69717F"/><path d="M1200.59 -181.179V20.1777L1371.5 120.839L1542.41 20.1777V-181.179L1371.5 -281.84L1200.59 -181.179Z" stroke="#BEC2CA" stroke-width="2"/><path d="M1371.5 -251L1222.11 -165V7L1371.5 93L1520.89 7V-165L1371.5 -251Z" fill="#BEC2CA"/><path opacity="0.5" d="M1371.5 -195L1271.47 -137V-21L1371.5 37L1471.53 -21V-137L1371.5 -195Z" fill="#69717F"/><path d="M1315.41 113.32V229.679L1414 287.839L1512.59 229.679V113.32L1414 55.1602L1315.41 113.32Z" stroke="#FFA3A3" stroke-width="2"/><path d="M1414 72L1327.4 122V222L1414 272L1500.6 222V122L1414 72Z" fill="#FFA3A3"/><path opacity="0.5" d="M1414 105L1355.98 138.5V205.5L1414 239L1472.02 205.5V138.5L1414 105Z" fill="#C15151"/><path d="M1363 56L1339.62 69.5V96.5L1363 110L1386.38 96.5V69.5L1363 56Z" fill="#FFCD78"/><path opacity="0.5" d="M1363 65L1347.41 74V92L1363 101L1378.59 92V74L1363 65Z" fill="#C97E19"/><path d="M1321 -50L1279.43 -26V22L1321 46L1362.57 22V-26L1321 -50Z" fill="#A9B0F5"/><path opacity="0.5" d="M1321 -34L1293.29 -18V14L1321 30L1348.71 14V-18L1321 -34Z" fill="#5962B7"/><path d="M756 256L686.718 296V376L756 416L825.282 376V296L756 256Z" fill="#FFCD78"/><path opacity="0.5" d="M756 283L710.101 309.5V362.5L756 389L801.899 362.5V309.5L756 283Z" fill="#C97E19"/><path d="M861.637 -14.9229V40.9219L910 68.8447L958.363 40.9219V-14.9229L910 -42.8457L861.637 -14.9229Z" stroke="#FFCD78" stroke-width="2"/><path d="M910 -29L873.627 -8V34L910 55L946.373 34V-8L910 -29Z" fill="#FFCD78"/><path opacity="0.5" d="M910 -14L886.617 -0.5V26.5L910 40L933.383 26.5V-0.5L910 -14Z" fill="#C97E19"/><path d="M788 155L764.617 168.5V195.5L788 209L811.383 195.5V168.5L788 155Z" fill="#FFCD78"/><path opacity="0.5" d="M788 164L772.412 173V191L788 200L803.588 191V173L788 164Z" fill="#C97E19"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 417.531)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 441.758)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 465.984)" stroke="#BEC2CA" stroke-width="2"/></g><defs><clipPath id="ef_hex_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', $i = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_hex_def)"><rect width="1440" height="292" fill="#ffffff"/><path d="M578.038 175.577V234.422L629 263.845L679.962 234.422V175.577L629 146.154L578.038 175.577Z" stroke="#A9B0F5" stroke-width="2"/><path d="M629 157L587.431 181V229L629 253L670.569 229V181L629 157Z" fill="#A9B0F5"/><path opacity="0.5" d="M629 173L601.287 189V221L629 237L656.713 221V189L629 173Z" fill="#5962B7"/><path d="M835 110L807.287 126V158L835 174L862.713 158V126L835 110Z" fill="#FFA3A3"/><path opacity="0.5" d="M835 121L816.813 131.5V152.5L835 163L853.187 152.5V131.5L835 121Z" fill="#C15151"/><path d="M990 153L913.79 197V285L990 329L1066.21 285V197L990 153Z" fill="#BEC2CA"/><path opacity="0.5" d="M989.5 181L938.838 210.75V270.25L989.5 300L1040.16 270.25V210.75L989.5 181Z" fill="#69717F"/><path d="M1124 139L981.106 221.5V386.5L1124 469L1266.89 386.5V221.5L1124 139Z" fill="#FFA3A3"/><path opacity="0.5" d="M1124 194L1028.74 249V359L1124 414L1219.26 359V249L1124 194Z" fill="#C15151"/><path d="M1285 291L1243.43 315V363L1285 387L1326.57 363V315L1285 291Z" fill="#A9B0F5"/><path d="M1108 -78L1031.79 -34V54L1108 98L1184.21 54V-34L1108 -78Z" fill="#BEC2CA"/><path opacity="0.5" d="M1107.5 -50L1056.84 -20.25V39.25L1107.5 69L1158.16 39.25V-20.25L1107.5 -50Z" fill="#69717F"/><path d="M1200.59 -181.179V20.1777L1371.5 120.839L1542.41 20.1777V-181.179L1371.5 -281.84L1200.59 -181.179Z" stroke="#BEC2CA" stroke-width="2"/><path d="M1371.5 -251L1222.11 -165V7L1371.5 93L1520.89 7V-165L1371.5 -251Z" fill="#BEC2CA"/><path opacity="0.5" d="M1371.5 -195L1271.47 -137V-21L1371.5 37L1471.53 -21V-137L1371.5 -195Z" fill="#69717F"/><path d="M1315.41 113.32V229.679L1414 287.839L1512.59 229.679V113.32L1414 55.1602L1315.41 113.32Z" stroke="#FFA3A3" stroke-width="2"/><path d="M1414 72L1327.4 122V222L1414 272L1500.6 222V122L1414 72Z" fill="#FFA3A3"/><path opacity="0.5" d="M1414 105L1355.98 138.5V205.5L1414 239L1472.02 205.5V138.5L1414 105Z" fill="#C15151"/><path d="M1363 56L1339.62 69.5V96.5L1363 110L1386.38 96.5V69.5L1363 56Z" fill="#FFCD78"/><path opacity="0.5" d="M1363 65L1347.41 74V92L1363 101L1378.59 92V74L1363 65Z" fill="#C97E19"/><path d="M1321 -50L1279.43 -26V22L1321 46L1362.57 22V-26L1321 -50Z" fill="#A9B0F5"/><path opacity="0.5" d="M1321 -34L1293.29 -18V14L1321 30L1348.71 14V-18L1321 -34Z" fill="#5962B7"/><path d="M756 256L686.718 296V376L756 416L825.282 376V296L756 256Z" fill="#FFCD78"/><path opacity="0.5" d="M756 283L710.101 309.5V362.5L756 389L801.899 362.5V309.5L756 283Z" fill="#C97E19"/><path d="M861.637 -14.9229V40.9219L910 68.8447L958.363 40.9219V-14.9229L910 -42.8457L861.637 -14.9229Z" stroke="#FFCD78" stroke-width="2"/><path d="M910 -29L873.627 -8V34L910 55L946.373 34V-8L910 -29Z" fill="#FFCD78"/><path opacity="0.5" d="M910 -14L886.617 -0.5V26.5L910 40L933.383 26.5V-0.5L910 -14Z" fill="#C97E19"/><path d="M788 155L764.617 168.5V195.5L788 209L811.383 195.5V168.5L788 155Z" fill="#FFCD78"/><path opacity="0.5" d="M788 164L772.412 173V191L788 200L803.588 191V173L788 164Z" fill="#C97E19"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 417.531)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 441.758)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 465.984)" stroke="#BEC2CA" stroke-width="2"/></g><defs><clipPath id="ef_hex_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function Zi(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? Bi : $i)}")`;
}
function Hi(e) {
  return e === "talent-acquisition" ? "linear-gradient(180deg, color-mix(in srgb, var(--color-background2-blue) 50%, transparent) 0%, var(--background) 92%)" : "linear-gradient(180deg, color-mix(in srgb, var(--color-background1-grey) 65%, transparent) 0%, var(--color-background2-grey) 95%)";
}
function ji(e, t) {
  const n = !!t.src?.trim(), r = !n && t.hexagonsVariant != null, o = e === "career-hub" && !n && !r && t.chevronsVariant != null;
  return n && t.src ? {
    hasImage: !0,
    isChevrons: !1,
    isHexagons: !1,
    fillStyle: {
      backgroundImage: t.imageScrim ? `${Hi(e)}, url(${t.src})` : `url(${t.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  } : r && t.hexagonsVariant ? {
    hasImage: !1,
    isChevrons: !1,
    isHexagons: !0,
    fillStyle: {
      backgroundImage: Zi(t.hexagonsVariant),
      backgroundPosition: "right top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  } : o && t.chevronsVariant ? {
    hasImage: !1,
    isChevrons: !0,
    isHexagons: !1,
    fillStyle: {
      backgroundColor: "var(--color-background1-grey)",
      backgroundImage: Vi(t.chevronsVariant),
      backgroundPosition: "right top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  } : {
    hasImage: !1,
    isChevrons: !1,
    isHexagons: !1,
    fillStyle: void 0
  };
}
const Fr = d.forwardRef(
  ({
    className: e,
    variant: t,
    src: n,
    imageScrim: r = !0,
    chevronsVariant: o,
    hexagonsVariant: i,
    children: s,
    ...l
  }, c) => {
    const { fillStyle: f, hasImage: u, isChevrons: p, isHexagons: m } = ji(t, {
      src: n,
      imageScrim: r,
      chevronsVariant: o,
      hexagonsVariant: i
    });
    return /* @__PURE__ */ y(
      "div",
      {
        ref: c,
        "data-slot": "product-background",
        "data-variant": t,
        className: x("relative isolate w-full overflow-hidden", e),
        ...l,
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              "aria-hidden": !0,
              "data-slot": "product-background-fill",
              ...u ? { "data-has-image": "" } : {},
              ...p ? { "data-ch-chevrons": "" } : {},
              ...m ? { "data-hexagons": "" } : {},
              className: x(
                "pointer-events-none absolute inset-0 -z-10",
                (u || p || m) && "min-h-full min-w-full"
              ),
              style: f
            }
          ),
          /* @__PURE__ */ a("div", { className: "relative min-h-0", children: s })
        ]
      }
    );
  }
);
Fr.displayName = "ProductBackground";
const Wd = "/eightfold-logo.svg", zd = "/ai-agent.svg", Wi = "/copilot.svg", Ud = ["talent-acquisition", "career-hub"], zi = {
  campaigns: "Campaigns",
  "career-exchange": "Career Exchange",
  "career-hub": "Career Hub",
  "customer-community": "Customer Community",
  "resource-management": "Resource management",
  "talent-acquisition": "Talent Acquisition",
  "talent-design": "Talent Design",
  "talent-flex": "Talent Flex",
  "talent-university": "Talent University"
}, ze = "/product-logos", Se = {
  campaigns: { small: "campaigns-small.svg", medium: "campaigns-medium.svg" },
  "career-exchange": { small: "career-exchange-small.svg", medium: "career-exchange-medium.svg" },
  "career-hub": { small: "career-hub-small.svg", medium: "career-hub-medium.svg" },
  "customer-community": { small: "customer-community-small.svg", medium: "customer-community-medium.svg" },
  "resource-management": { small: "resource-management-small.svg", medium: "resource-management-medium.svg" },
  "talent-acquisition": { small: "talent-acquisition-small.svg", medium: "talent-acquisition-medium.svg" },
  "talent-design": { small: "talent-design-small.svg", medium: "talent-design-medium.svg" },
  "talent-flex": { small: "talent-flex-small.svg", medium: "talent-flex-medium.svg" },
  "talent-university": { small: "talent-university-small.svg", medium: "talent-university-medium.svg" }
};
function Gd(e, t = "medium") {
  return `${ze}/${Se[e][t]}`;
}
function Kd(e, t = "medium") {
  return {
    productName: zi[e],
    productIconSrc: `${ze}/${Se[e][t]}`
  };
}
const Yd = Object.keys(Se).reduce(
  (e, t) => (e[t] = {
    small: `${ze}/${Se[t].small}`,
    medium: `${ze}/${Se[t].medium}`
  }, e),
  {}
), Xd = [
  { label: "My Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
  { label: "Help", path: "/help" },
  { label: "Sign out", path: "/sign-out" }
], Xt = [
  { label: "My Jobs", path: "/my-activity/jobs" },
  { label: "My Experts", path: "/my-activity/experts" },
  { label: "My Projects", path: "/my-activity/projects" },
  { label: "My Courses", path: "/my-activity/courses" },
  { label: "My Referrals", path: "/my-activity/referrals" },
  { label: "My skill assessment requests", path: "/my-activity/skill-assessments" },
  { label: "Development Plan Templates", path: "/my-activity/dev-plan-templates" }
], qt = [
  { label: "Projects", path: "/marketplace/projects" },
  { label: "Jobs", path: "/marketplace/jobs" },
  { label: "Courses", path: "/marketplace/courses" },
  { label: "Development Plans", path: "/marketplace/development-plans" },
  { label: "Nectar", path: "/marketplace/nectar" },
  { label: "Google Drive", path: "/marketplace/google-drive" }
], qd = [
  { label: "Career Interests", path: "/profile?tab=career" },
  { label: "Career Navigator", path: "/career-navigator" },
  { label: "Resume Coach", path: "/resume-coach" }
], Qd = [
  { id: "home", label: "Home", path: "/" },
  { id: "goals", label: "Goals", path: "/goals" },
  { id: "career-navigator", label: "Career navigator", path: "/career-navigator" },
  {
    id: "marketplace",
    label: "Marketplace",
    path: "/marketplace",
    chevron: !0,
    subItems: [...qt]
  },
  {
    id: "my-activity",
    label: "My activity",
    path: "/my-activity",
    chevron: !0,
    subItems: [...Xt]
  },
  { id: "people", label: "People", path: "/people" }
], Jd = [
  { id: "home", label: "Home", path: "/" },
  { id: "goals", label: "Goals", path: "/goals" },
  { id: "career-navigator", label: "Career navigator", path: "/career-navigator" },
  {
    id: "marketplace",
    label: "Marketplace",
    path: "/marketplace",
    chevron: !0,
    subItems: [...qt]
  },
  {
    id: "my-activity",
    label: "My activity",
    path: "/my-activity",
    chevron: !0,
    subItems: [...Xt]
  },
  { id: "people", label: "People", path: "/people" },
  { id: "my-team", label: "My team", path: "/my-team" },
  { id: "workforce", label: "Workforce Readiness", path: "/workforce" }
], eu = [
  { id: "home", label: "Home", path: "/" },
  { id: "my-activity", label: "My activity", path: "/my-activity" },
  { id: "people", label: "People", path: "/people" },
  { id: "my-team", label: "My team", path: "/my-team" },
  { id: "workforce", label: "Workforce Readiness", path: "/workforce" },
  { id: "insights", label: "Insights", path: "/insights" },
  {
    id: "more",
    label: "More",
    path: "/more",
    chevron: !0,
    hideViewAll: !0,
    subItems: [
      { label: "Goals", path: "/goals" },
      { label: "Career navigator", path: "/career-navigator" },
      { label: "Marketplace", path: "/marketplace" }
    ]
  }
], tu = [
  { id: "home", label: "Home", path: "/" },
  { id: "my-goals", label: "My goals", path: "/goals" },
  { id: "career-navigator", label: "Career navigator", path: "/career-navigator" },
  {
    id: "marketplace",
    label: "Marketplace",
    path: "/marketplace",
    chevron: !0,
    subItems: [...qt]
  },
  {
    id: "my-activity",
    label: "My activity",
    path: "/my-activity",
    chevron: !0,
    subItems: [...Xt]
  },
  { id: "people", label: "People", path: "/people" },
  { id: "my-team", label: "My team", path: "/my-team" },
  { id: "workforce", label: "Workforce Readiness", path: "/workforce" }
], nu = [
  { id: "positions", label: "Positions", path: "/positions" },
  {
    id: "talent",
    label: "Talent",
    path: "/talent",
    chevron: !0,
    subItems: [
      { label: "Pipeline", path: "/talent/pipeline" },
      { label: "Candidates", path: "/talent/candidates" },
      { label: "Search", path: "/talent/search" }
    ]
  },
  {
    id: "engage",
    label: "Engage",
    path: "/engage",
    chevron: !0,
    subItems: [
      { label: "Campaigns", path: "/engage/campaigns" },
      { label: "Emails", path: "/engage/emails" },
      { label: "Events", path: "/engage/events" }
    ]
  },
  { id: "insights", label: "Insights", path: "/insights" },
  {
    id: "more",
    label: "More",
    path: "/more",
    chevron: !0,
    subItems: [
      { label: "Settings", path: "/more/settings" },
      { label: "Integrations", path: "/more/integrations" },
      { label: "Help", path: "/more/help" }
    ]
  }
], ru = "Search for positions or candidates", au = [
  { iconSrc: Wi, ariaLabel: "Copilot" },
  { icon: "work_outline", ariaLabel: "Talent" },
  { icon: "notifications", ariaLabel: "Notifications" }
];
function ou({
  chSize: e = "parent",
  title: t,
  secondary: n,
  actions: r,
  navbarProps: o,
  chevronsVariant: i,
  hexagonsVariant: s,
  children: l
}) {
  const c = i ?? (e === "profile" ? "profile" : "default");
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("div", { className: "career-hub-shell", children: /* @__PURE__ */ a(Ri, { ...o }) }),
    /* @__PURE__ */ a(Fr, { variant: "career-hub", ...s ? { hexagonsVariant: s } : { chevronsVariant: c }, children: /* @__PURE__ */ a("div", { className: "career-hub-shell", children: /* @__PURE__ */ a(kr, { variant: "career-hub", chSize: e, overlayBackground: !0, children: /* @__PURE__ */ a(Sr, { actions: r, children: /* @__PURE__ */ y(Rr, { children: [
      /* @__PURE__ */ a(Mr, { children: t }),
      n && /* @__PURE__ */ a(Ar, { children: n })
    ] }) }) }) }) }),
    l
  ] });
}
const xn = {
  inbox: "no-data",
  "no-connection": "technical-error",
  "no-messages": "conversations",
  "all-done": "tasks-complete",
  "no-items": "alert",
  "no-files": "no-documents",
  error: "technical-error"
}, Ui = {
  conversations: "No conversations",
  "no-data": "No data",
  "no-documents": "No documents",
  "no-search-results": "No search results",
  "no-successor": "No successor",
  "tasks-complete": "All tasks complete",
  "technical-error": "Technical error",
  "unclaimed-profile": "Unclaimed profile",
  alert: "Alert"
}, Gi = {
  conversations: 184,
  "no-data": 184,
  "no-documents": 184,
  "no-search-results": 184,
  "no-successor": 187,
  "tasks-complete": 184,
  "technical-error": 185,
  "unclaimed-profile": 187,
  alert: 184
};
function Ki() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 177.839C21.8078 171.861 3.66074 162.325 0.510726 150.175C-2.63929 138.025 9.18787 123.359 24.8068 115.637C40.5358 108.029 59.9069 107.449 71.9662 102.257C83.9156 96.9498 88.5731 86.9309 99.9189 77.9985C111.265 69.066 129.299 61.2199 140.372 64.9517C151.555 68.798 155.648 84.2069 164.716 96.6426C173.785 109.078 187.68 118.625 194.904 131.657C202.237 144.804 202.768 161.422 189.061 166.219C175.355 171.016 147.3 163.877 128.36 165.625C109.569 167.288 99.7624 177.823 86.4541 181.955C73.2954 186.004 56.4854 183.734 39.0718 177.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M131.098 145.069C125.349 140.58 119.665 136.448 116.52 133.384C116.016 132.893 115.288 132.671 114.598 132.81C35.5718 148.779 -9.97428 65.6821 65.669 27.1035C65.7558 27.0592 65.8525 27.0185 65.9449 26.9875C142.983 1.22161 204.241 81.5443 135.362 124.844C134.772 125.214 134.381 125.876 134.381 126.572L134.381 143.483C134.381 145.166 132.424 146.105 131.098 145.069Z", fill: "white", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M66.3926 69.6641C70.9586 69.6641 74.3926 73.6234 74.3926 78.1641C74.3926 82.7047 70.9586 86.6641 66.3926 86.6641C61.8266 86.6641 58.3926 82.7047 58.3926 78.1641C58.3926 73.6234 61.8266 69.6641 66.3926 69.6641Z", fill: "#B0F3FE", stroke: "#B0F3FE", strokeWidth: "4" }),
    /* @__PURE__ */ a("path", { d: "M94.3926 69.6641C98.9586 69.6641 102.393 73.6234 102.393 78.1641C102.393 82.7047 98.9586 86.6641 94.3926 86.6641C89.8266 86.6641 86.3926 82.7047 86.3926 78.1641C86.3926 73.6234 89.8266 69.6641 94.3926 69.6641Z", fill: "#B0F3FE", stroke: "#B0F3FE", strokeWidth: "4" }),
    /* @__PURE__ */ a("path", { d: "M122.393 69.6641C126.959 69.6641 130.393 73.6234 130.393 78.1641C130.393 82.7047 126.959 86.6641 122.393 86.6641C117.827 86.6641 114.393 82.7047 114.393 78.1641C114.393 73.6234 117.827 69.6641 122.393 69.6641Z", fill: "#B0F3FE", stroke: "#B0F3FE", strokeWidth: "4" })
  ] });
}
function Yi() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 177.839C21.8078 171.861 3.66074 162.325 0.510726 150.175C-2.63929 138.025 9.18787 123.359 24.8068 115.637C40.5358 108.029 59.9069 107.449 71.9662 102.257C83.9156 96.9498 88.5731 86.9309 99.9189 77.9985C111.265 69.066 129.299 61.2199 140.372 64.9517C151.555 68.798 155.648 84.2069 164.716 96.6426C173.785 109.078 187.68 118.625 194.904 131.657C202.237 144.804 202.768 161.422 189.061 166.219C175.355 171.016 147.3 163.877 128.36 165.625C109.569 167.288 99.7624 177.823 86.4541 181.955C73.2954 186.004 56.4854 183.734 39.0718 177.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M26 108L38.5 59H160.5L174 108V154H26V108Z", fill: "white" }),
    /* @__PURE__ */ a("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M118.495 108.258C118.495 117.504 110.214 123.333 99.9993 123.333C89.7843 123.333 81.5034 117.504 81.5034 108.258C81.5034 107.958 81.5121 105.994 81.5293 105.698H46.666L60.2683 72.6258C60.8547 71.0563 62.4813 70 64.3116 70H135.687C137.517 70 139.144 71.0563 139.73 72.6258L153.333 105.698H118.469C118.487 105.994 118.495 107.958 118.495 108.258Z", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M152.505 59.9987L47.4938 59.9994C43.6128 59.9994 40.0926 62.653 38.7909 66.7154L27.5922 101.665L74.0905 101.665C78.722 101.665 83.0934 103.871 86.0399 107.653L92.9658 116.541C96.6469 121.265 103.355 121.264 107.037 116.541L113.962 107.653C116.909 103.871 121.28 101.665 125.912 101.665L172.408 101.665L161.208 66.7146C159.906 62.6522 156.386 59.9987 152.505 59.9987ZM173.651 108.331L125.912 108.331C123.217 108.331 120.638 109.614 118.876 111.874L111.951 120.762C105.729 128.746 94.2733 128.746 88.0518 120.762L81.126 111.874C79.3647 109.614 76.7854 108.331 74.0906 108.331L26.3492 108.332L26.3493 143.332C26.3493 148.933 30.548 153.332 35.5634 153.332L164.436 153.332C169.452 153.332 173.65 148.933 173.651 143.332L173.651 108.331ZM47.4937 53.3327L152.505 53.332C159.195 53.332 165.081 57.8959 167.226 64.5886L180 104.452L180 143.332C180 152.458 173.105 159.998 164.436 159.998L35.5635 159.999C26.8946 159.999 20.0001 152.459 20 143.332L20 104.452L32.7731 64.5895C34.9176 57.8968 40.804 53.3327 47.4937 53.3327Z", fill: "#8ED0FA" }),
    /* @__PURE__ */ a("rect", { x: "95.668", width: "8", height: "40", rx: "4", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("rect", { x: "49", y: "4", width: "8", height: "40", rx: "4", transform: "rotate(-30 49 4)", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("rect", { x: "144", width: "8", height: "40", rx: "4", transform: "rotate(30 144 0)", fill: "#B0F3FE" })
  ] });
}
function Xi() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 177.839C21.8078 171.861 3.66074 162.325 0.510726 150.175C-2.63929 138.025 9.18787 123.359 24.8068 115.637C40.5358 108.029 59.9069 107.449 71.9662 102.257C83.9156 96.9498 88.5731 86.9309 99.9189 77.9985C111.265 69.066 129.299 61.2199 140.372 64.9517C151.555 68.798 155.648 84.2069 164.716 96.6426C173.785 109.078 187.68 118.625 194.904 131.657C202.237 144.804 202.768 161.422 189.061 166.219C175.355 171.016 147.3 163.877 128.36 165.625C109.569 167.288 99.7624 177.823 86.4541 181.955C73.2954 186.004 56.4854 183.734 39.0718 177.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M38.6945 42.9038L83.3399 31L125.713 55.3439L143.622 121.853C144.415 124.797 143.96 127.61 142.257 130.292C140.775 133.1 138.467 134.922 135.334 135.758L68.4963 153.579C65.3633 154.414 62.3623 154.007 59.4932 152.359C56.8449 150.838 55.1243 148.605 54.3315 145.66L30.4061 56.8088C29.6133 53.8644 29.9813 51.0746 31.5104 48.4393C33.1668 45.5843 35.5615 43.7392 38.6945 42.9038Z", fill: "white" }),
    /* @__PURE__ */ a("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.1955 46.7691C36.7757 47.4174 34.9668 48.8057 33.6627 51.0646C32.4949 53.0872 32.2234 55.1493 32.8299 57.4131L56.7005 146.499C57.3071 148.763 58.5733 150.413 60.596 151.581C62.8548 152.885 65.1155 153.183 67.5352 152.535L134.22 134.667C136.634 134.02 138.317 132.673 139.44 130.535L139.49 130.44L139.548 130.349C140.864 128.266 141.173 126.216 140.585 124.022L123.006 58.4153L82.6613 35.1224L39.1955 46.7691ZM28.9991 48.372C31.0002 44.906 33.9697 42.5942 37.8017 41.5675L83.4221 29.3435L127.63 54.867L145.787 122.629C146.772 126.305 146.193 129.865 144.157 133.134C142.319 136.575 139.416 138.849 135.613 139.868L68.929 157.736C65.097 158.763 61.3695 158.246 57.9034 156.245C54.6415 154.361 52.4744 151.534 51.4989 147.893L27.6284 58.8068C26.6529 55.1662 27.1158 51.6339 28.9991 48.372Z", fill: "#8ED0FA" }),
    /* @__PURE__ */ a("path", { d: "M70.5673 22H116.567L151 56.8545V126.563C151 129.649 149.834 132.282 147.503 134.46C145.351 136.82 142.661 138 139.433 138H70.5673C67.3392 138 64.5595 136.82 62.2281 134.46C60.076 132.282 59 129.649 59 126.563V33.4366C59 30.3505 60.076 27.7183 62.2281 25.5399C64.5595 23.18 67.3392 22 70.5673 22Z", fill: "white" }),
    /* @__PURE__ */ a("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M70.3451 25.4179C67.8301 25.4179 65.7152 26.296 63.8635 28.1516C62.2055 29.8132 61.4064 31.7465 61.4064 34.1044V126.896C61.4064 129.254 62.2055 131.187 63.8635 132.848C65.7152 134.704 67.8301 135.582 70.3451 135.582H139.655C142.164 135.582 144.147 134.711 145.791 132.926L145.864 132.847L145.944 132.773C147.761 131.092 148.594 129.18 148.594 126.896V58.5599L115.522 25.4179H70.3451ZM60.0406 24.3206C62.8819 21.4733 66.3622 20 70.3451 20H117.762L154 56.3158V126.896C154 130.725 152.514 134.033 149.69 136.681C147.013 139.546 143.607 141 139.655 141H70.3451C66.3622 141 62.8819 139.527 60.0406 136.679C57.3668 134 56 130.688 56 126.896V34.1044C56 30.3124 57.3668 27.0002 60.0406 24.3206Z", fill: "#8ED0FA" }),
    /* @__PURE__ */ a("path", { d: "M168.294 70C169.721 70 171.081 70.3672 172.309 71.1084L172.625 71.2988L172.886 71.5615L179.607 78.3232C180.812 79.5356 181.151 81.1074 181.151 82.4668C181.151 83.8801 180.792 85.2972 179.885 86.5146L179.811 86.6143L179.728 86.708C179.391 87.0887 179.141 87.4022 178.957 87.6514C179.12 87.873 179.337 88.1445 179.62 88.4697C180.617 89.3464 181.568 90.3309 182.126 91.3936C182.734 92.4457 183.18 93.78 182.927 95.2393C182.83 96.4843 182.267 97.5721 181.696 98.4111C181.048 99.3646 180.163 100.326 179.13 101.291L167.305 113.414L165.178 115.596L163.029 113.435L158.549 108.927L158.131 108.506L138.616 128.303L137.735 129.196H122.502V129.18L120.217 129.599L119.949 129.647H112.661L112.071 127.412L110.406 121.099L100.167 130.238L99.3135 131H87.3516L88.0566 127.42L92.7617 103.527L93.2383 101.106H106.566L105.811 104.721L104.87 109.213L108.137 106.524L108.968 105.84H119.595L120.135 108.16L121.955 115.986C122.017 115.985 122.079 115.983 122.142 115.983H122.502V113.922L123.366 113.046L150.475 85.5459L151.959 84.0391L151.695 83.7734L153.891 81.6592L164.42 71.5156L164.421 71.5176C165.523 70.4348 166.918 70 168.294 70Z", fill: "#7BE4F4", stroke: "white", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M185 32C190.192 32 194 36.4839 194 41.5C194 46.5161 190.192 51 185 51C179.808 51 176 46.5161 176 41.5C176 36.4839 179.808 32 185 32Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M22 14C27.1921 14 31 18.4839 31 23.5C31 28.5161 27.1921 33 22 33C16.8079 33 13 28.5161 13 23.5C13 18.4839 16.8079 14 22 14Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("ellipse", { cx: "42", cy: "8.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("ellipse", { cx: "119", cy: "6.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("line", { x1: "152", y1: "19", x2: "134", y2: "19", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "143", y1: "28", x2: "143", y2: "10", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "21", y1: "90", x2: "3", y2: "90", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "99", x2: "12", y2: "81", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" })
  ] });
}
function qi() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 177.839C21.8078 171.861 3.66074 162.325 0.510726 150.175C-2.63929 138.025 9.18787 123.359 24.8068 115.637C40.5358 108.029 59.9069 107.449 71.9662 102.257C83.9156 96.9498 88.5731 86.9309 99.9189 77.9985C111.265 69.066 129.299 61.2199 140.372 64.9517C151.555 68.798 155.648 84.2069 164.716 96.6426C173.785 109.078 187.68 118.625 194.904 131.657C202.237 144.804 202.768 161.422 189.061 166.219C175.355 171.016 147.3 163.877 128.36 165.625C109.569 167.288 99.7624 177.823 86.4541 181.955C73.2954 186.004 56.4854 183.734 39.0718 177.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M183 72C188.192 72 192 76.4839 192 81.5C192 86.5161 188.192 91 183 91C177.808 91 174 86.5161 174 81.5C174 76.4839 177.808 72 183 72Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("circle", { cx: "139", cy: "47", r: "5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("rect", { x: "148", y: "42", width: "20", height: "10", rx: "5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("rect", { x: "10", y: "83", width: "14", height: "10", rx: "5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("path", { d: "M111.824 36.9417C130.569 55.6869 130.569 86.0788 111.824 104.824C93.0788 123.569 62.6869 123.569 43.9417 104.824C25.1965 86.0788 25.1965 55.6869 43.9417 36.9417C62.6869 18.1965 93.0788 18.1965 111.824 36.9417Z", fill: "white" }),
    /* @__PURE__ */ a("path", { d: "M127.38 131.694C124.256 128.57 124.256 123.504 127.38 120.38C130.504 117.256 135.57 117.256 138.694 120.38L155.664 137.351C158.789 140.475 158.789 145.54 155.664 148.665C152.54 151.789 147.475 151.789 144.351 148.665L127.38 131.694Z", fill: "white" }),
    /* @__PURE__ */ a("path", { d: "M125.26 118.259L118.189 111.188M111.824 36.9417C130.569 55.6869 130.569 86.0788 111.824 104.824C93.0788 123.569 62.6869 123.569 43.9417 104.824C25.1965 86.0788 25.1965 55.6869 43.9417 36.9417C62.6869 18.1965 93.0788 18.1965 111.824 36.9417ZM155.664 148.665C152.54 151.789 147.475 151.789 144.351 148.665L127.38 131.694C124.256 128.57 124.256 123.504 127.38 120.38C130.504 117.256 135.57 117.256 138.694 120.38L155.664 137.351C158.789 140.475 158.789 145.54 155.664 148.665Z", stroke: "#8ED0FA", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("path", { d: "M56.3926 79.6641C60.9586 79.6641 64.3926 83.6234 64.3926 88.1641C64.3926 92.7047 60.9586 96.6641 56.3926 96.6641C51.8266 96.6641 48.3926 92.7047 48.3926 88.1641C48.3926 83.6234 51.8266 79.6641 56.3926 79.6641Z", fill: "#B0F3FE", stroke: "#B0F3FE", strokeWidth: "4" })
  ] });
}
function Qi() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 180.839C21.8078 174.861 3.66074 165.325 0.510726 153.175C-2.63929 141.025 9.18787 126.359 24.8068 118.637C40.5358 111.029 59.9069 110.449 71.9662 105.257C83.9156 99.9498 88.5731 89.9309 99.9189 80.9985C111.265 72.066 129.299 64.2199 140.372 67.9517C151.555 71.798 155.648 87.2069 164.716 99.6426C173.785 112.078 187.68 121.625 194.904 134.657C202.237 147.804 202.768 164.422 189.061 169.219C175.355 174.016 147.3 166.877 128.36 168.625C109.569 170.288 99.7624 180.823 86.4541 184.955C73.2954 189.004 56.4854 186.734 39.0718 180.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M183 115.819V134H72V115.819L72.4336 111.923C73.0117 108.748 74.168 105.718 75.9023 102.832C77.9258 98.5034 80.6719 94.7517 84.1406 91.5772C88.4766 87.8255 93.9687 84.7953 100.617 82.4866C108.133 79.8893 117.094 78.5906 127.5 78.5906C143.977 78.5906 156.984 81.7651 166.523 88.1141C173.461 92.7315 178.375 98.792 181.266 106.295C182.422 109.758 183 112.933 183 115.819ZM155.25 32.7047C155.25 24.9128 152.504 18.4195 147.012 13.2248C141.809 7.74161 135.305 5 127.5 5C119.984 5 113.48 7.74161 107.988 13.2248C102.496 18.4195 99.75 24.9128 99.75 32.7047C99.75 40.2081 102.496 46.7013 107.988 52.1846C113.48 57.6678 119.984 60.4094 127.5 60.4094C135.305 60.4094 141.809 57.6678 147.012 52.1846C152.504 46.7013 155.25 40.2081 155.25 32.7047Z", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("path", { d: "M159 112.96V131H48V112.96L48.4336 109.094C49.0117 105.944 50.168 102.937 51.9023 100.074C53.9258 95.7785 56.6719 92.0559 60.1406 88.906C64.4766 85.1834 69.9687 82.1767 76.6172 79.8859C84.1328 77.3087 93.0938 76.0201 103.5 76.0201C119.977 76.0201 132.984 79.17 142.523 85.4698C149.461 90.0515 154.375 96.0649 157.266 103.51C158.422 106.946 159 110.096 159 112.96ZM131.25 30.4899C131.25 22.7584 128.504 16.3154 123.012 11.1611C117.809 5.72036 111.305 3 103.5 3C95.9844 3 89.4805 5.72036 83.9883 11.1611C78.4961 16.3154 75.75 22.7584 75.75 30.4899C75.75 37.9351 78.4961 44.3781 83.9883 49.8188C89.4805 55.2595 95.9844 57.9799 103.5 57.9799C111.305 57.9799 117.809 55.2595 123.012 49.8188C128.504 44.3781 131.25 37.9351 131.25 30.4899Z", fill: "white" }),
    /* @__PURE__ */ a("path", { d: "M159 112.96V131H48V112.96L48.4336 109.094C49.0117 105.944 50.168 102.937 51.9023 100.074C53.9258 95.7785 56.6719 92.0559 60.1406 88.906C64.4766 85.1834 69.9687 82.1767 76.6172 79.8859C84.1328 77.3087 93.0938 76.0201 103.5 76.0201C119.977 76.0201 132.984 79.17 142.523 85.4698C149.461 90.0515 154.375 96.0649 157.266 103.51C158.422 106.946 159 110.096 159 112.96ZM131.25 30.4899C131.25 22.7584 128.504 16.3154 123.012 11.1611C117.809 5.72036 111.305 3 103.5 3C95.9844 3 89.4805 5.72036 83.9883 11.1611C78.4961 16.3154 75.75 22.7584 75.75 30.4899C75.75 37.9351 78.4961 44.3781 83.9883 49.8188C89.4805 55.2595 95.9844 57.9799 103.5 57.9799C111.305 57.9799 117.809 55.2595 123.012 49.8188C128.504 44.3781 131.25 37.9351 131.25 30.4899Z", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M69 52.9545L58.65 40L25.4438 73.25L10.7812 58.5682L0 69.3636L25.4438 97L69 52.9545Z", fill: "#B0F3FE" })
  ] });
}
function Ji() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 177.839C21.8078 171.861 3.66074 162.325 0.510726 150.175C-2.63929 138.025 9.18787 123.359 24.8068 115.637C40.5358 108.029 59.9069 107.449 71.9662 102.257C83.9156 96.9498 88.5731 86.9309 99.9189 77.9985C111.265 69.066 129.299 61.2199 140.372 64.9517C151.555 68.798 155.648 84.2069 164.716 96.6426C173.785 109.078 187.68 118.625 194.904 131.657C202.237 144.804 202.768 161.422 189.061 166.219C175.355 171.016 147.3 163.877 128.36 165.625C109.569 167.288 99.7624 177.823 86.4541 181.955C73.2954 186.004 56.4854 183.734 39.0718 177.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M180 79C185.192 79 189 83.4839 189 88.5C189 93.5161 185.192 98 180 98C174.808 98 171 93.5161 171 88.5C171 83.4839 174.808 79 180 79Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("circle", { cx: "139", cy: "47", r: "5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("path", { d: "M56.3926 79.6641C60.9586 79.6641 64.3926 83.6234 64.3926 88.1641C64.3926 92.7047 60.9586 96.6641 56.3926 96.6641C51.8266 96.6641 48.3926 92.7047 48.3926 88.1641C48.3926 83.6234 51.8266 79.6641 56.3926 79.6641Z", fill: "#B0F3FE", stroke: "#B0F3FE", strokeWidth: "4" }),
    /* @__PURE__ */ a("circle", { cx: "98", cy: "79", r: "60", fill: "white", stroke: "#8ED0FA", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("path", { d: "M80.9802 73.3685C79.5239 72.0567 77.2649 72.1574 75.9346 73.5935C74.6043 75.0295 74.7064 77.2571 76.1627 78.569L92.971 93.7098C95.0099 95.5463 98.1725 95.4053 100.035 93.3948C100.113 93.3094 100.113 93.3094 100.188 93.2217L124.175 64.7735C125.436 63.2779 125.228 61.0574 123.712 59.8139C122.195 58.5703 119.943 58.7747 118.682 60.2703L96.1309 87.0162L80.9802 73.3685Z", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("path", { d: "M16 7C21.1921 7 25 11.4839 25 16.5C25 21.5161 21.1921 26 16 26C10.8079 26 7 21.5161 7 16.5C7 11.4839 10.8079 7 16 7Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("ellipse", { cx: "38", cy: "35.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("ellipse", { cx: "171", cy: "35.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("line", { x1: "160", y1: "13", x2: "142", y2: "13", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "151", y1: "22", x2: "151", y2: "4", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "31", y1: "87", x2: "13", y2: "87", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "22", y1: "96", x2: "22", y2: "78", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" })
  ] });
}
function es() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 178.839C21.8078 172.861 3.66074 163.325 0.510726 151.175C-2.63929 139.025 9.18787 124.359 24.8068 116.637C40.5358 109.029 59.9069 108.449 71.9662 103.257C83.9156 97.9498 88.5731 87.9309 99.9189 78.9985C111.265 70.066 129.299 62.2199 140.372 65.9517C151.555 69.798 155.648 85.2069 164.716 97.6426C173.785 110.078 187.68 119.625 194.904 132.657C202.237 145.804 202.768 162.422 189.061 167.219C175.355 172.016 147.3 164.877 128.36 166.625C109.569 168.288 99.7624 178.823 86.4541 182.955C73.2954 187.004 56.4854 184.734 39.0718 178.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M49.2784 101.405C39.3247 57.4604 105.676 18.8428 136.863 78.7671C196.578 76.1036 191.934 156.002 145.489 158L107.668 158L46.6243 158C12.7837 158 0.841885 104.068 49.2784 101.405Z", fill: "white", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M78.1406 100.977L84.5381 107.374C85.3191 108.155 85.3191 109.421 84.5381 110.202L78.5013 116.239", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M126.451 116.238L120.054 109.841C119.273 109.06 119.273 107.793 120.054 107.012L126.09 100.976", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M102 123C107.192 123 111 127.484 111 132.5C111 137.516 107.192 142 102 142C96.8079 142 93 137.516 93 132.5C93 127.484 96.8079 123 102 123Z", fill: "#B0F3FE", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M161 49C166.192 49 170 53.4839 170 58.5C170 63.5161 166.192 68 161 68C155.808 68 152 63.5161 152 58.5C152 53.4839 155.808 49 161 49Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M55 3C60.1921 3 64 7.48391 64 12.5C64 17.5161 60.1921 22 55 22C49.8079 22 46 17.5161 46 12.5C46 7.48391 49.8079 3 55 3Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("ellipse", { cx: "108", cy: "29.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("ellipse", { cx: "28", cy: "89.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("line", { x1: "161.334", y1: "11.6059", x2: "148.606", y2: "24.3338", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "161.335", y1: "24.3359", x2: "148.608", y2: "11.608", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "31.334", y1: "38.6059", x2: "18.6061", y2: "51.3338", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "31.3355", y1: "51.3359", x2: "18.6076", y2: "38.608", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" })
  ] });
}
function ts() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 180.839C21.8078 174.861 3.66074 165.325 0.510726 153.175C-2.63929 141.025 9.18787 126.359 24.8068 118.637C40.5358 111.029 59.9069 110.449 71.9662 105.257C83.9156 99.9498 88.5731 89.9309 99.9189 80.9985C111.265 72.066 129.299 64.2199 140.372 67.9517C151.555 71.798 155.648 87.2069 164.716 99.6426C173.785 112.078 187.68 121.625 194.904 134.657C202.237 147.804 202.768 164.422 189.061 169.219C175.355 174.016 147.3 166.877 128.36 168.625C109.569 170.288 99.7624 180.823 86.4541 184.955C73.2954 189.004 56.4854 186.734 39.0718 180.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M159 112.96V131H48V112.96L48.4336 109.094C49.0117 105.944 50.168 102.937 51.9023 100.074C53.9258 95.7785 56.6719 92.0559 60.1406 88.906C64.4766 85.1834 69.9687 82.1767 76.6172 79.8859C84.1328 77.3087 93.0938 76.0201 103.5 76.0201C119.977 76.0201 132.984 79.17 142.523 85.4698C149.461 90.0515 154.375 96.0649 157.266 103.51C158.422 106.946 159 110.096 159 112.96ZM131.25 30.4899C131.25 22.7584 128.504 16.3154 123.012 11.1611C117.809 5.72036 111.305 3 103.5 3C95.9844 3 89.4805 5.72036 83.9883 11.1611C78.4961 16.3154 75.75 22.7584 75.75 30.4899C75.75 37.9351 78.4961 44.3781 83.9883 49.8188C89.4805 55.2595 95.9844 57.9799 103.5 57.9799C111.305 57.9799 117.809 55.2595 123.012 49.8188C128.504 44.3781 131.25 37.9351 131.25 30.4899Z", fill: "white" }),
    /* @__PURE__ */ a("path", { d: "M159 112.96V131H48V112.96L48.4336 109.094C49.0117 105.944 50.168 102.937 51.9023 100.074C53.9258 95.7785 56.6719 92.0559 60.1406 88.906C64.4766 85.1834 69.9687 82.1767 76.6172 79.8859C84.1328 77.3087 93.0938 76.0201 103.5 76.0201C119.977 76.0201 132.984 79.17 142.523 85.4698C149.461 90.0515 154.375 96.0649 157.266 103.51C158.422 106.946 159 110.096 159 112.96ZM131.25 30.4899C131.25 22.7584 128.504 16.3154 123.012 11.1611C117.809 5.72036 111.305 3 103.5 3C95.9844 3 89.4805 5.72036 83.9883 11.1611C78.4961 16.3154 75.75 22.7584 75.75 30.4899C75.75 37.9351 78.4961 44.3781 83.9883 49.8188C89.4805 55.2595 95.9844 57.9799 103.5 57.9799C111.305 57.9799 117.809 55.2595 123.012 49.8188C128.504 44.3781 131.25 37.9351 131.25 30.4899Z", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M46 22C48.8331 22 51.3717 22.7368 53.6875 24.21L53.749 24.249L53.8125 24.2852C56.2511 25.6752 58.1384 27.5927 59.5117 30.0889L59.5469 30.1514L59.584 30.2129C61.0394 32.5832 61.7715 35.192 61.7715 38.1074V48.7861H68.4561C69.7221 48.7861 70.6672 49.2071 71.4971 50.1221L71.5781 50.2109L71.665 50.2939C72.6029 51.1752 73 52.1189 73 53.2861V91.5C73 92.6673 72.6031 93.6109 71.665 94.4922L71.5781 94.5742L71.4971 94.6631C70.6672 95.5782 69.7222 96 68.4561 96H23.5439C22.2707 96 21.2208 95.5693 20.2451 94.5762C19.3993 93.7152 19 92.7466 19 91.5V53.2861C19 52.0396 19.3994 51.0709 20.2451 50.21C21.2208 49.2168 22.2707 48.7861 23.5439 48.7861H30.2285V38.1074C30.2285 35.1545 30.922 32.5199 32.2842 30.1406C33.7952 27.5861 35.7182 25.6469 38.0576 24.2578L38.0742 24.249L38.0898 24.2393C40.548 22.738 43.1658 22 46 22ZM46 61.7139C43.0628 61.7139 40.4871 62.8315 38.4219 64.9336C36.4261 66.965 35.4561 69.5242 35.4561 72.3926C35.4561 75.2594 36.4209 77.8294 38.3389 79.9443L38.4199 80.0332L38.5068 80.1152C40.5892 82.0717 43.1391 83.0713 46 83.0713C48.8641 83.0713 51.4043 82.0659 53.4033 80.0312C55.4673 77.9305 56.5439 75.3328 56.5439 72.3926C56.5439 69.4858 55.4861 66.9317 53.3994 64.9307C51.4339 62.8106 48.9028 61.7139 46 61.7139ZM46 23.6787C42.0336 23.6787 38.5737 25.1355 35.79 27.9688C33.0924 30.7145 31.7715 34.1675 31.7715 38.1074V48.7861H60.2285V38.1074C60.2285 34.1432 58.8311 30.6931 56.0342 27.9678C53.3558 25.1209 49.9425 23.6787 46 23.6787Z", fill: "white", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("ellipse", { cx: "46", cy: "72.5", rx: "8", ry: "8.5", fill: "#B0F3FE" })
  ] });
}
function ns() {
  return /* @__PURE__ */ y(V, { children: [
    /* @__PURE__ */ a("path", { d: "M39.0718 177.839C21.8078 171.861 3.66074 162.325 0.510726 150.175C-2.63929 138.025 9.18787 123.359 24.8068 115.637C40.5358 108.029 59.9069 107.449 71.9662 102.257C83.9156 96.9498 88.5731 86.9309 99.9189 77.9985C111.265 69.066 129.299 61.2199 140.372 64.9517C151.555 68.798 155.648 84.2069 164.716 96.6426C173.785 109.078 187.68 118.625 194.904 131.657C202.237 144.804 202.768 161.422 189.061 166.219C175.355 171.016 147.3 163.877 128.36 165.625C109.569 167.288 99.7624 177.823 86.4541 181.955C73.2954 186.004 56.4854 183.734 39.0718 177.839Z", fill: "#EBF7FF" }),
    /* @__PURE__ */ a("path", { d: "M180 79C185.192 79 189 83.4839 189 88.5C189 93.5161 185.192 98 180 98C174.808 98 171 93.5161 171 88.5C171 83.4839 174.808 79 180 79Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("ellipse", { cx: "139", cy: "47", rx: "5", ry: "5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("path", { d: "M33 10C38.1921 10 42 14.4839 42 19.5C42 24.5161 38.1921 29 33 29C27.8079 29 24 24.5161 24 19.5C24 14.4839 27.8079 10 33 10Z", stroke: "#B0F3FE", strokeWidth: "6" }),
    /* @__PURE__ */ a("ellipse", { cx: "45", cy: "53.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("ellipse", { cx: "171", cy: "35.5", rx: "6", ry: "6.5", fill: "#B0F3FE" }),
    /* @__PURE__ */ a("line", { x1: "156.47", y1: "19.3312", x2: "145.152", y2: "8.11206", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "145.2", y1: "19.0152", x2: "156.419", y2: "7.69643", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "34.9976", y1: "101.738", x2: "21.2471", y2: "87.9878", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("line", { x1: "21.2461", y1: "100.996", x2: "34.9966", y2: "87.2451", stroke: "#B0F3FE", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("path", { d: "M165.086 137.004H36.9141L101 26.0039L165.086 137.004Z", fill: "white", stroke: "#8ED0FA", strokeWidth: "6" }),
    /* @__PURE__ */ a("path", { d: "M101.334 66.668L101.334 104.001", stroke: "#8ED0FA", strokeWidth: "6", strokeLinecap: "round" }),
    /* @__PURE__ */ a("ellipse", { cx: "101.333", cy: "117.333", rx: "5.33333", ry: "5.33333", fill: "#B0F3FE" })
  ] });
}
const rs = {
  conversations: Ki,
  "no-data": Yi,
  "no-documents": Xi,
  "no-search-results": qi,
  "no-successor": Qi,
  "tasks-complete": Ji,
  "technical-error": es,
  "unclaimed-profile": ts,
  alert: ns
};
function as({ variant: e, size: t = 200, className: n, ...r }) {
  const o = e in xn ? xn[e] : e, i = Gi[o], s = Math.round(t * i / 200), l = rs[o];
  return /* @__PURE__ */ a(
    "svg",
    {
      width: t,
      height: s,
      viewBox: `0 0 200 ${i}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-label": Ui[o],
      role: "img",
      className: x("shrink-0", n),
      ...r,
      children: /* @__PURE__ */ a(l, {})
    }
  );
}
as.displayName = "EmptyIllustration";
const os = {
  neutral: "info",
  success: "check_circle",
  warning: "warning",
  error: "error",
  "ai-agent": "auto_awesome"
};
function iu({
  variant: e = "neutral",
  message: t,
  actionLabel: n,
  onAction: r,
  onClose: o,
  className: i
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-variant": e,
      className: x("ef-infobar", `ef-infobar--${e}`, i),
      children: [
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-infobar__icon", "aria-hidden": !0, children: os[e] }),
        /* @__PURE__ */ a("span", { className: "ef-infobar__message", children: t }),
        n && r && /* @__PURE__ */ a("button", { type: "button", className: "ef-infobar__action", onClick: r, children: n }),
        o && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ef-infobar__close",
            onClick: o,
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
          }
        )
      ]
    }
  );
}
const is = {
  neutral: "info",
  success: "check_circle",
  warning: "warning",
  error: "error"
};
function su({
  variant: e = "neutral",
  title: t,
  description: n,
  actionLabel: r,
  onAction: o,
  onClose: i,
  className: s
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      role: "alert",
      "data-variant": e,
      className: x("ef-messagebar", `ef-messagebar--${e}`, s),
      children: [
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-messagebar__icon", "aria-hidden": !0, children: is[e] }),
        /* @__PURE__ */ y("div", { className: "ef-messagebar__body", children: [
          /* @__PURE__ */ a("span", { className: "ef-messagebar__title", children: t }),
          n && /* @__PURE__ */ a("span", { className: "ef-messagebar__description", children: n })
        ] }),
        r && o && /* @__PURE__ */ a("button", { type: "button", className: "ef-messagebar__action", onClick: o, children: r }),
        i && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ef-messagebar__close",
            onClick: i,
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
          }
        )
      ]
    }
  );
}
const ss = {
  default: "info",
  success: "check_circle",
  warning: "warning",
  error: "error"
};
function lu({
  variant: e = "default",
  message: t,
  actionLabel: n,
  onAction: r,
  onClose: o,
  size: i = "default",
  className: s
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      "data-variant": e,
      "data-size": i,
      className: x(
        "ef-snackbar",
        `ef-snackbar--${e}`,
        i === "small" && "ef-snackbar--small",
        s
      ),
      children: [
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-snackbar__icon", "aria-hidden": !0, children: ss[e] }),
        /* @__PURE__ */ a("span", { className: "ef-snackbar__message", children: t }),
        n && r && /* @__PURE__ */ a("button", { type: "button", className: "ef-snackbar__action", onClick: r, children: n }),
        o && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ef-snackbar__close",
            onClick: o,
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
          }
        )
      ]
    }
  );
}
function cu({
  children: e,
  className: t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "aria-live": "polite",
      "aria-label": "Notifications",
      className: x("ef-snackbar-container", t),
      children: e
    }
  );
}
function du({
  open: e,
  onClose: t,
  title: n,
  subtitle: r,
  width: o = "medium",
  confirmLabel: i,
  onConfirm: s,
  confirmLoading: l = !1,
  confirmDisabled: c = !1,
  cancelLabel: f = "Cancel",
  children: u,
  className: p
}) {
  return /* @__PURE__ */ a(Z.Root, { open: e, onOpenChange: (m) => {
    m || t();
  }, children: /* @__PURE__ */ y(Z.Portal, { children: [
    /* @__PURE__ */ a(Z.Overlay, { className: "ef-panel__overlay" }),
    /* @__PURE__ */ y(
      Z.Content,
      {
        "data-width": o,
        className: x("ef-panel", `ef-panel--${o}`, p),
        "aria-describedby": void 0,
        children: [
          /* @__PURE__ */ y("div", { className: "ef-panel__header", children: [
            /* @__PURE__ */ y("div", { className: "ef-panel__header-text", children: [
              /* @__PURE__ */ a(Z.Title, { className: "ef-panel__title", children: n }),
              r && /* @__PURE__ */ a(Z.Description, { className: "ef-panel__subtitle", children: r })
            ] }),
            /* @__PURE__ */ a(Z.Close, { className: "ef-panel__close", "aria-label": "Close panel", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" }) })
          ] }),
          /* @__PURE__ */ a("div", { className: "ef-panel__body", children: u }),
          (i || s) && /* @__PURE__ */ y("div", { className: "ef-panel__footer", children: [
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "ef-panel__btn ef-panel__btn--cancel",
                onClick: t,
                children: f
              }
            ),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "ef-panel__btn ef-panel__btn--confirm",
                onClick: s,
                disabled: c || l,
                "aria-busy": l,
                children: l ? /* @__PURE__ */ y(V, { children: [
                  /* @__PURE__ */ a(
                    "span",
                    {
                      className: "material-symbols-outlined ef-panel__spinner",
                      "aria-hidden": !0,
                      children: "progress_activity"
                    }
                  ),
                  i
                ] }) : i
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function uu({
  label: e,
  avatarSrc: t,
  avatarInitials: n,
  icon: r,
  size: o = "medium",
  variant: i = "default",
  onRemove: s,
  onClick: l,
  className: c,
  disabled: f = !1
}) {
  const u = !!(t || n), p = !!l && !f;
  return /* @__PURE__ */ y(
    "span",
    {
      role: p ? "button" : void 0,
      tabIndex: p ? 0 : void 0,
      "data-size": o,
      "data-variant": i,
      "data-disabled": f || void 0,
      className: x(
        "ef-chip",
        `ef-chip--${o}`,
        `ef-chip--${i}`,
        p && "ef-chip--interactive",
        c
      ),
      onClick: p ? l : void 0,
      onKeyDown: p ? (m) => {
        (m.key === "Enter" || m.key === " ") && (m.preventDefault(), l?.());
      } : void 0,
      children: [
        u && /* @__PURE__ */ a("span", { className: "ef-chip__avatar", "aria-hidden": !0, children: t ? /* @__PURE__ */ a("img", { src: t, alt: "", className: "ef-chip__avatar-img" }) : /* @__PURE__ */ a("span", { className: "ef-chip__avatar-initials", children: n }) }),
        !u && r && /* @__PURE__ */ a("span", { className: "ef-chip__icon", "aria-hidden": !0, children: r }),
        /* @__PURE__ */ a("span", { className: "ef-chip__label", children: e }),
        s && !f && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ef-chip__remove",
            onClick: (m) => {
              m.stopPropagation(), s();
            },
            "aria-label": `Remove ${e}`,
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
          }
        )
      ]
    }
  );
}
var dt = 0;
function ls() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Nn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Nn()), dt++, () => {
      dt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), dt--;
    };
  }, []);
}
function Nn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ut = "focusScope.autoFocusOnMount", ft = "focusScope.autoFocusOnUnmount", Ln = { bubbles: !1, cancelable: !0 }, cs = "FocusScope", Pr = d.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [l, c] = d.useState(null), f = K(o), u = K(i), p = d.useRef(null), m = U(t, (h) => c(h)), g = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (r) {
      let h = function(_) {
        if (g.paused || !l) return;
        const w = _.target;
        l.contains(w) ? p.current = w : ce(p.current, { select: !0 });
      }, b = function(_) {
        if (g.paused || !l) return;
        const w = _.relatedTarget;
        w !== null && (l.contains(w) || ce(p.current, { select: !0 }));
      }, C = function(_) {
        if (document.activeElement === document.body)
          for (const E of _)
            E.removedNodes.length > 0 && ce(l);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", b);
      const L = new MutationObserver(C);
      return l && L.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", b), L.disconnect();
      };
    }
  }, [r, l, g.paused]), d.useEffect(() => {
    if (l) {
      kn.add(g);
      const h = document.activeElement;
      if (!l.contains(h)) {
        const C = new CustomEvent(ut, Ln);
        l.addEventListener(ut, f), l.dispatchEvent(C), C.defaultPrevented || (ds(hs(Tr(l)), { select: !0 }), document.activeElement === h && ce(l));
      }
      return () => {
        l.removeEventListener(ut, f), setTimeout(() => {
          const C = new CustomEvent(ft, Ln);
          l.addEventListener(ft, u), l.dispatchEvent(C), C.defaultPrevented || ce(h ?? document.body, { select: !0 }), l.removeEventListener(ft, u), kn.remove(g);
        }, 0);
      };
    }
  }, [l, f, u, g]);
  const v = d.useCallback(
    (h) => {
      if (!n && !r || g.paused) return;
      const b = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, C = document.activeElement;
      if (b && C) {
        const L = h.currentTarget, [_, w] = us(L);
        _ && w ? !h.shiftKey && C === w ? (h.preventDefault(), n && ce(_, { select: !0 })) : h.shiftKey && C === _ && (h.preventDefault(), n && ce(w, { select: !0 })) : C === L && h.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ a(H.div, { tabIndex: -1, ...s, ref: m, onKeyDown: v });
});
Pr.displayName = cs;
function ds(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ce(r, { select: t }), document.activeElement !== n) return;
}
function us(e) {
  const t = Tr(e), n = En(t, e), r = En(t.reverse(), e);
  return [n, r];
}
function Tr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function En(e, t) {
  for (const n of e)
    if (!fs(n, { upTo: t })) return n;
}
function fs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ps(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ce(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ps(e) && t && e.select();
  }
}
var kn = ms();
function ms() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Sn(e, t), e.unshift(t);
    },
    remove(t) {
      e = Sn(e, t), e[0]?.resume();
    }
  };
}
function Sn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function hs(e) {
  return e.filter((t) => t.tagName !== "A");
}
const gs = ["top", "right", "bottom", "left"], de = Math.min, Y = Math.max, Ue = Math.round, Te = Math.floor, re = (e) => ({
  x: e,
  y: e
}), vs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bs = {
  start: "end",
  end: "start"
};
function St(e, t, n) {
  return Y(e, de(t, n));
}
function se(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function le(e) {
  return e.split("-")[0];
}
function Le(e) {
  return e.split("-")[1];
}
function Qt(e) {
  return e === "x" ? "y" : "x";
}
function Jt(e) {
  return e === "y" ? "height" : "width";
}
const ys = /* @__PURE__ */ new Set(["top", "bottom"]);
function ne(e) {
  return ys.has(le(e)) ? "y" : "x";
}
function en(e) {
  return Qt(ne(e));
}
function Cs(e, t, n) {
  n === void 0 && (n = !1);
  const r = Le(e), o = en(e), i = Jt(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ge(s)), [s, Ge(s)];
}
function _s(e) {
  const t = Ge(e);
  return [Mt(e), t, Mt(t)];
}
function Mt(e) {
  return e.replace(/start|end/g, (t) => bs[t]);
}
const Mn = ["left", "right"], Rn = ["right", "left"], ws = ["top", "bottom"], xs = ["bottom", "top"];
function Ns(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Rn : Mn : t ? Mn : Rn;
    case "left":
    case "right":
      return t ? ws : xs;
    default:
      return [];
  }
}
function Ls(e, t, n, r) {
  const o = Le(e);
  let i = Ns(le(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Mt)))), i;
}
function Ge(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vs[t]);
}
function Es(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Or(e) {
  return typeof e != "number" ? Es(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ke(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function An(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ne(t), s = en(t), l = Jt(s), c = le(t), f = i === "y", u = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, m = r[l] / 2 - o[l] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Le(t)) {
    case "start":
      g[s] -= m * (n && f ? -1 : 1);
      break;
    case "end":
      g[s] += m * (n && f ? -1 : 1);
      break;
  }
  return g;
}
async function ks(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: c
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = se(t, e), v = Or(g), b = l[m ? p === "floating" ? "reference" : "floating" : p], C = Ke(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: c
  })), L = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), w = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Ke(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: L,
    offsetParent: _,
    strategy: c
  }) : L);
  return {
    top: (C.top - E.top + v.top) / w.y,
    bottom: (E.bottom - C.bottom + v.bottom) / w.y,
    left: (C.left - E.left + v.left) / w.x,
    right: (E.right - C.right + v.right) / w.x
  };
}
const Ss = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: p
  } = An(f, r, c), m = r, g = {}, v = 0;
  for (let b = 0; b < l.length; b++) {
    var h;
    const {
      name: C,
      fn: L
    } = l[b], {
      x: _,
      y: w,
      data: E,
      reset: k
    } = await L({
      x: u,
      y: p,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: g,
      rects: f,
      platform: {
        ...s,
        detectOverflow: (h = s.detectOverflow) != null ? h : ks
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    u = _ ?? u, p = w ?? p, g = {
      ...g,
      [C]: {
        ...g[C],
        ...E
      }
    }, k && v <= 50 && (v++, typeof k == "object" && (k.placement && (m = k.placement), k.rects && (f = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: u,
      y: p
    } = An(f, m, c)), b = -1);
  }
  return {
    x: u,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: g
  };
}, Ms = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: l,
      middlewareData: c
    } = t, {
      element: f,
      padding: u = 0
    } = se(e, t) || {};
    if (f == null)
      return {};
    const p = Or(u), m = {
      x: n,
      y: r
    }, g = en(o), v = Jt(g), h = await s.getDimensions(f), b = g === "y", C = b ? "top" : "left", L = b ? "bottom" : "right", _ = b ? "clientHeight" : "clientWidth", w = i.reference[v] + i.reference[g] - m[g] - i.floating[v], E = m[g] - i.reference[g], k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let S = k ? k[_] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(k))) && (S = l.floating[_] || i.floating[v]);
    const F = w / 2 - E / 2, R = S / 2 - h[v] / 2 - 1, N = de(p[C], R), P = de(p[L], R), O = N, T = S - h[v] - P, M = S / 2 - h[v] / 2 + F, I = St(O, M, T), D = !c.arrow && Le(o) != null && M !== I && i.reference[v] / 2 - (M < O ? N : P) - h[v] / 2 < 0, $ = D ? M < O ? M - O : M - T : 0;
    return {
      [g]: m[g] + $,
      data: {
        [g]: I,
        centerOffset: M - I - $,
        ...D && {
          alignmentOffset: $
        }
      },
      reset: D
    };
  }
}), Rs = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: c,
        elements: f
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: h = !0,
        ...b
      } = se(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = le(o), L = ne(l), _ = le(l) === l, w = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)), E = m || (_ || !h ? [Ge(l)] : _s(l)), k = v !== "none";
      !m && k && E.push(...Ls(l, h, v, w));
      const S = [l, ...E], F = await c.detectOverflow(t, b), R = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(F[C]), p) {
        const M = Cs(o, s, w);
        R.push(F[M[0]], F[M[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: R
      }], !R.every((M) => M <= 0)) {
        var P, O;
        const M = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, I = S[M];
        if (I && (!(p === "alignment" ? L !== ne(I) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((A) => ne(A.placement) === L ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: M,
              overflows: N
            },
            reset: {
              placement: I
            }
          };
        let D = (O = N.filter(($) => $.overflows[0] <= 0).sort(($, A) => $.overflows[1] - A.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!D)
          switch (g) {
            case "bestFit": {
              var T;
              const $ = (T = N.filter((A) => {
                if (k) {
                  const j = ne(A.placement);
                  return j === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((j) => j > 0).reduce((j, G) => j + G, 0)]).sort((A, j) => A[1] - j[1])[0]) == null ? void 0 : T[0];
              $ && (D = $);
              break;
            }
            case "initialPlacement":
              D = l;
              break;
          }
        if (o !== D)
          return {
            reset: {
              placement: D
            }
          };
      }
      return {};
    }
  };
};
function Fn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Pn(e) {
  return gs.some((t) => e[t] >= 0);
}
const As = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...i
      } = se(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), l = Fn(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: Pn(l)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), l = Fn(s, n.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: Pn(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Dr = /* @__PURE__ */ new Set(["left", "top"]);
async function Fs(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = le(n), l = Le(n), c = ne(n) === "y", f = Dr.has(s) ? -1 : 1, u = i && c ? -1 : 1, p = se(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return l && typeof v == "number" && (g = l === "end" ? v * -1 : v), c ? {
    x: g * u,
    y: m * f
  } : {
    x: m * f,
    y: g * u
  };
}
const Ps = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = t, c = await Fs(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Ts = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: l = !1,
        limiter: c = {
          fn: (C) => {
            let {
              x: L,
              y: _
            } = C;
            return {
              x: L,
              y: _
            };
          }
        },
        ...f
      } = se(e, t), u = {
        x: n,
        y: r
      }, p = await i.detectOverflow(t, f), m = ne(le(o)), g = Qt(m);
      let v = u[g], h = u[m];
      if (s) {
        const C = g === "y" ? "top" : "left", L = g === "y" ? "bottom" : "right", _ = v + p[C], w = v - p[L];
        v = St(_, v, w);
      }
      if (l) {
        const C = m === "y" ? "top" : "left", L = m === "y" ? "bottom" : "right", _ = h + p[C], w = h - p[L];
        h = St(_, h, w);
      }
      const b = c.fn({
        ...t,
        [g]: v,
        [m]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [g]: s,
            [m]: l
          }
        }
      };
    }
  };
}, Os = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: l = 0,
        mainAxis: c = !0,
        crossAxis: f = !0
      } = se(e, t), u = {
        x: n,
        y: r
      }, p = ne(o), m = Qt(p);
      let g = u[m], v = u[p];
      const h = se(l, t), b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const _ = m === "y" ? "height" : "width", w = i.reference[m] - i.floating[_] + b.mainAxis, E = i.reference[m] + i.reference[_] - b.mainAxis;
        g < w ? g = w : g > E && (g = E);
      }
      if (f) {
        var C, L;
        const _ = m === "y" ? "width" : "height", w = Dr.has(le(o)), E = i.reference[p] - i.floating[_] + (w && ((C = s.offset) == null ? void 0 : C[p]) || 0) + (w ? 0 : b.crossAxis), k = i.reference[p] + i.reference[_] + (w ? 0 : ((L = s.offset) == null ? void 0 : L[p]) || 0) - (w ? b.crossAxis : 0);
        v < E ? v = E : v > k && (v = k);
      }
      return {
        [m]: g,
        [p]: v
      };
    }
  };
}, Ds = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: l
      } = t, {
        apply: c = () => {
        },
        ...f
      } = se(e, t), u = await s.detectOverflow(t, f), p = le(o), m = Le(o), g = ne(o) === "y", {
        width: v,
        height: h
      } = i.floating;
      let b, C;
      p === "top" || p === "bottom" ? (b = p, C = m === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (C = p, b = m === "end" ? "top" : "bottom");
      const L = h - u.top - u.bottom, _ = v - u.left - u.right, w = de(h - u[b], L), E = de(v - u[C], _), k = !t.middlewareData.shift;
      let S = w, F = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (F = _), (r = t.middlewareData.shift) != null && r.enabled.y && (S = L), k && !m) {
        const N = Y(u.left, 0), P = Y(u.right, 0), O = Y(u.top, 0), T = Y(u.bottom, 0);
        g ? F = v - 2 * (N !== 0 || P !== 0 ? N + P : Y(u.left, u.right)) : S = h - 2 * (O !== 0 || T !== 0 ? O + T : Y(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: F,
        availableHeight: S
      });
      const R = await s.getDimensions(l.floating);
      return v !== R.width || h !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function et() {
  return typeof window < "u";
}
function Ee(e) {
  return Ir(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function X(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function oe(e) {
  var t;
  return (t = (Ir(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ir(e) {
  return et() ? e instanceof Node || e instanceof X(e).Node : !1;
}
function J(e) {
  return et() ? e instanceof Element || e instanceof X(e).Element : !1;
}
function ae(e) {
  return et() ? e instanceof HTMLElement || e instanceof X(e).HTMLElement : !1;
}
function Tn(e) {
  return !et() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
const Is = /* @__PURE__ */ new Set(["inline", "contents"]);
function Re(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ee(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Is.has(o);
}
const Vs = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Bs(e) {
  return Vs.has(Ee(e));
}
const $s = [":popover-open", ":modal"];
function tt(e) {
  return $s.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Zs = ["transform", "translate", "scale", "rotate", "perspective"], Hs = ["transform", "translate", "scale", "rotate", "perspective", "filter"], js = ["paint", "layout", "strict", "content"];
function tn(e) {
  const t = nn(), n = J(e) ? ee(e) : e;
  return Zs.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Hs.some((r) => (n.willChange || "").includes(r)) || js.some((r) => (n.contain || "").includes(r));
}
function Ws(e) {
  let t = ue(e);
  for (; ae(t) && !xe(t); ) {
    if (tn(t))
      return t;
    if (tt(t))
      return null;
    t = ue(t);
  }
  return null;
}
function nn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const zs = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function xe(e) {
  return zs.has(Ee(e));
}
function ee(e) {
  return X(e).getComputedStyle(e);
}
function nt(e) {
  return J(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ue(e) {
  if (Ee(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tn(e) && e.host || // Fallback.
    oe(e)
  );
  return Tn(t) ? t.host : t;
}
function Vr(e) {
  const t = ue(e);
  return xe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ae(t) && Re(t) ? t : Vr(t);
}
function Me(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Vr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = X(o);
  if (i) {
    const l = Rt(s);
    return t.concat(s, s.visualViewport || [], Re(o) ? o : [], l && n ? Me(l) : []);
  }
  return t.concat(o, Me(o, [], n));
}
function Rt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Br(e) {
  const t = ee(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ae(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = Ue(n) !== i || Ue(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function rn(e) {
  return J(e) ? e : e.contextElement;
}
function Ce(e) {
  const t = rn(e);
  if (!ae(t))
    return re(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Br(t);
  let s = (i ? Ue(n.width) : n.width) / r, l = (i ? Ue(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const Us = /* @__PURE__ */ re(0);
function $r(e) {
  const t = X(e);
  return !nn() || !t.visualViewport ? Us : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gs(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== X(e) ? !1 : t;
}
function pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = rn(e);
  let s = re(1);
  t && (r ? J(r) && (s = Ce(r)) : s = Ce(e));
  const l = Gs(i, n, r) ? $r(i) : re(0);
  let c = (o.left + l.x) / s.x, f = (o.top + l.y) / s.y, u = o.width / s.x, p = o.height / s.y;
  if (i) {
    const m = X(i), g = r && J(r) ? X(r) : r;
    let v = m, h = Rt(v);
    for (; h && r && g !== v; ) {
      const b = Ce(h), C = h.getBoundingClientRect(), L = ee(h), _ = C.left + (h.clientLeft + parseFloat(L.paddingLeft)) * b.x, w = C.top + (h.clientTop + parseFloat(L.paddingTop)) * b.y;
      c *= b.x, f *= b.y, u *= b.x, p *= b.y, c += _, f += w, v = X(h), h = Rt(v);
    }
  }
  return Ke({
    width: u,
    height: p,
    x: c,
    y: f
  });
}
function rt(e, t) {
  const n = nt(e).scrollLeft;
  return t ? t.left + n : pe(oe(e)).left + n;
}
function Zr(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - rt(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Ks(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = oe(r), l = t ? tt(t.floating) : !1;
  if (r === s || l && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = re(1);
  const u = re(0), p = ae(r);
  if ((p || !p && !i) && ((Ee(r) !== "body" || Re(s)) && (c = nt(r)), ae(r))) {
    const g = pe(r);
    f = Ce(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const m = s && !p && !i ? Zr(s, c) : re(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - c.scrollLeft * f.x + u.x + m.x,
    y: n.y * f.y - c.scrollTop * f.y + u.y + m.y
  };
}
function Ys(e) {
  return Array.from(e.getClientRects());
}
function Xs(e) {
  const t = oe(e), n = nt(e), r = e.ownerDocument.body, o = Y(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Y(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + rt(e);
  const l = -n.scrollTop;
  return ee(r).direction === "rtl" && (s += Y(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const On = 25;
function qs(e, t) {
  const n = X(e), r = oe(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = nn();
    (!u || u && t === "fixed") && (l = o.offsetLeft, c = o.offsetTop);
  }
  const f = rt(r);
  if (f <= 0) {
    const u = r.ownerDocument, p = u.body, m = getComputedStyle(p), g = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, v = Math.abs(r.clientWidth - p.clientWidth - g);
    v <= On && (i -= v);
  } else f <= On && (i += f);
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
const Qs = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Js(e, t) {
  const n = pe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ae(e) ? Ce(e) : re(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, c = o * i.x, f = r * i.y;
  return {
    width: s,
    height: l,
    x: c,
    y: f
  };
}
function Dn(e, t, n) {
  let r;
  if (t === "viewport")
    r = qs(e, n);
  else if (t === "document")
    r = Xs(oe(e));
  else if (J(t))
    r = Js(t, n);
  else {
    const o = $r(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ke(r);
}
function Hr(e, t) {
  const n = ue(e);
  return n === t || !J(n) || xe(n) ? !1 : ee(n).position === "fixed" || Hr(n, t);
}
function el(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Me(e, [], !1).filter((l) => J(l) && Ee(l) !== "body"), o = null;
  const i = ee(e).position === "fixed";
  let s = i ? ue(e) : e;
  for (; J(s) && !xe(s); ) {
    const l = ee(s), c = tn(s);
    !c && l.position === "fixed" && (o = null), (i ? !c && !o : !c && l.position === "static" && !!o && Qs.has(o.position) || Re(s) && !c && Hr(e, s)) ? r = r.filter((u) => u !== s) : o = l, s = ue(s);
  }
  return t.set(e, r), r;
}
function tl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? tt(t) ? [] : el(t, this._c) : [].concat(n), r], l = s[0], c = s.reduce((f, u) => {
    const p = Dn(t, u, o);
    return f.top = Y(p.top, f.top), f.right = de(p.right, f.right), f.bottom = de(p.bottom, f.bottom), f.left = Y(p.left, f.left), f;
  }, Dn(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function nl(e) {
  const {
    width: t,
    height: n
  } = Br(e);
  return {
    width: t,
    height: n
  };
}
function rl(e, t, n) {
  const r = ae(t), o = oe(t), i = n === "fixed", s = pe(e, !0, i, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = re(0);
  function f() {
    c.x = rt(o);
  }
  if (r || !r && !i)
    if ((Ee(t) !== "body" || Re(o)) && (l = nt(t)), r) {
      const g = pe(t, !0, i, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && f();
  i && !r && o && f();
  const u = o && !r && !i ? Zr(o, l) : re(0), p = s.left + l.scrollLeft - c.x - u.x, m = s.top + l.scrollTop - c.y - u.y;
  return {
    x: p,
    y: m,
    width: s.width,
    height: s.height
  };
}
function pt(e) {
  return ee(e).position === "static";
}
function In(e, t) {
  if (!ae(e) || ee(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return oe(e) === n && (n = n.ownerDocument.body), n;
}
function jr(e, t) {
  const n = X(e);
  if (tt(e))
    return n;
  if (!ae(e)) {
    let o = ue(e);
    for (; o && !xe(o); ) {
      if (J(o) && !pt(o))
        return o;
      o = ue(o);
    }
    return n;
  }
  let r = In(e, t);
  for (; r && Bs(r) && pt(r); )
    r = In(r, t);
  return r && xe(r) && pt(r) && !tn(r) ? n : r || Ws(e) || n;
}
const al = async function(e) {
  const t = this.getOffsetParent || jr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: rl(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ol(e) {
  return ee(e).direction === "rtl";
}
const il = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ks,
  getDocumentElement: oe,
  getClippingRect: tl,
  getOffsetParent: jr,
  getElementRects: al,
  getClientRects: Ys,
  getDimensions: nl,
  getScale: Ce,
  isElement: J,
  isRTL: ol
};
function Wr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sl(e, t) {
  let n = null, r;
  const o = oe(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), i();
    const f = e.getBoundingClientRect(), {
      left: u,
      top: p,
      width: m,
      height: g
    } = f;
    if (l || t(), !m || !g)
      return;
    const v = Te(p), h = Te(o.clientWidth - (u + m)), b = Te(o.clientHeight - (p + g)), C = Te(u), _ = {
      rootMargin: -v + "px " + -h + "px " + -b + "px " + -C + "px",
      threshold: Y(0, de(1, c)) || 1
    };
    let w = !0;
    function E(k) {
      const S = k[0].intersectionRatio;
      if (S !== c) {
        if (!w)
          return s();
        S ? s(!1, S) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !Wr(f, e.getBoundingClientRect()) && s(), w = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ..._,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, _);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function ll(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, f = rn(e), u = o || i ? [...f ? Me(f) : [], ...Me(t)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", n, {
      passive: !0
    }), i && C.addEventListener("resize", n);
  });
  const p = f && l ? sl(f, n) : null;
  let m = -1, g = null;
  s && (g = new ResizeObserver((C) => {
    let [L] = C;
    L && L.target === f && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var _;
      (_ = g) == null || _.observe(t);
    })), n();
  }), f && !c && g.observe(f), g.observe(t));
  let v, h = c ? pe(e) : null;
  c && b();
  function b() {
    const C = pe(e);
    h && !Wr(h, C) && n(), h = C, v = requestAnimationFrame(b);
  }
  return n(), () => {
    var C;
    u.forEach((L) => {
      o && L.removeEventListener("scroll", n), i && L.removeEventListener("resize", n);
    }), p?.(), (C = g) == null || C.disconnect(), g = null, c && cancelAnimationFrame(v);
  };
}
const cl = Ps, dl = Ts, ul = Rs, fl = Ds, pl = As, Vn = Ms, ml = Os, hl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: il,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Ss(e, t, {
    ...o,
    platform: i
  });
};
var gl = typeof document < "u", vl = function() {
}, $e = gl ? Oa : vl;
function Ye(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ye(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ye(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bn(e, t) {
  const n = zr(e);
  return Math.round(t * n) / n;
}
function mt(e) {
  const t = d.useRef(e);
  return $e(() => {
    t.current = e;
  }), t;
}
function bl(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: l = !0,
    whileElementsMounted: c,
    open: f
  } = e, [u, p] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = d.useState(r);
  Ye(m, r) || g(r);
  const [v, h] = d.useState(null), [b, C] = d.useState(null), L = d.useCallback((A) => {
    A !== k.current && (k.current = A, h(A));
  }, []), _ = d.useCallback((A) => {
    A !== S.current && (S.current = A, C(A));
  }, []), w = i || v, E = s || b, k = d.useRef(null), S = d.useRef(null), F = d.useRef(u), R = c != null, N = mt(c), P = mt(o), O = mt(f), T = d.useCallback(() => {
    if (!k.current || !S.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: m
    };
    P.current && (A.platform = P.current), hl(k.current, S.current, A).then((j) => {
      const G = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      M.current && !Ye(F.current, G) && (F.current = G, zn.flushSync(() => {
        p(G);
      }));
    });
  }, [m, t, n, P, O]);
  $e(() => {
    f === !1 && F.current.isPositioned && (F.current.isPositioned = !1, p((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [f]);
  const M = d.useRef(!1);
  $e(() => (M.current = !0, () => {
    M.current = !1;
  }), []), $e(() => {
    if (w && (k.current = w), E && (S.current = E), w && E) {
      if (N.current)
        return N.current(w, E, T);
      T();
    }
  }, [w, E, T, N, R]);
  const I = d.useMemo(() => ({
    reference: k,
    floating: S,
    setReference: L,
    setFloating: _
  }), [L, _]), D = d.useMemo(() => ({
    reference: w,
    floating: E
  }), [w, E]), $ = d.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return A;
    const j = Bn(D.floating, u.x), G = Bn(D.floating, u.y);
    return l ? {
      ...A,
      transform: "translate(" + j + "px, " + G + "px)",
      ...zr(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: G
    };
  }, [n, l, D.floating, u.x, u.y]);
  return d.useMemo(() => ({
    ...u,
    update: T,
    refs: I,
    elements: D,
    floatingStyles: $
  }), [u, T, I, D, $]);
}
const yl = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Vn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Vn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Cl = (e, t) => ({
  ...cl(e),
  options: [e, t]
}), _l = (e, t) => ({
  ...dl(e),
  options: [e, t]
}), wl = (e, t) => ({
  ...ml(e),
  options: [e, t]
}), xl = (e, t) => ({
  ...ul(e),
  options: [e, t]
}), Nl = (e, t) => ({
  ...fl(e),
  options: [e, t]
}), Ll = (e, t) => ({
  ...pl(e),
  options: [e, t]
}), El = (e, t) => ({
  ...yl(e),
  options: [e, t]
});
var kl = "Arrow", Ur = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ a(
    H.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ a("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ur.displayName = kl;
var Sl = Ur;
function Ml(e) {
  const [t, n] = d.useState(void 0);
  return Q(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, l;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, f = Array.isArray(c) ? c[0] : c;
          s = f.inlineSize, l = f.blockSize;
        } else
          s = e.offsetWidth, l = e.offsetHeight;
        n({ width: s, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var an = "Popper", [Gr, Kr] = Qe(an), [Rl, Yr] = Gr(an), Xr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ a(Rl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Xr.displayName = an;
var qr = "PopperAnchor", Qr = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Yr(qr, n), s = d.useRef(null), l = U(t, s), c = d.useRef(null);
    return d.useEffect(() => {
      const f = c.current;
      c.current = r?.current || s.current, f !== c.current && i.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ a(H.div, { ...o, ref: l });
  }
);
Qr.displayName = qr;
var on = "PopperContent", [Al, Fl] = Gr(on), Jr = d.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: l = 0,
      avoidCollisions: c = !0,
      collisionBoundary: f = [],
      collisionPadding: u = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...h
    } = e, b = Yr(on, n), [C, L] = d.useState(null), _ = U(t, (ke) => L(ke)), [w, E] = d.useState(null), k = Ml(w), S = k?.width ?? 0, F = k?.height ?? 0, R = r + (i !== "center" ? "-" + i : ""), N = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, P = Array.isArray(f) ? f : [f], O = P.length > 0, T = {
      padding: N,
      boundary: P.filter(Tl),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: O
    }, { refs: M, floatingStyles: I, placement: D, isPositioned: $, middlewareData: A } = bl({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...ke) => ll(...ke, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Cl({ mainAxis: o + F, alignmentAxis: s }),
        c && _l({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? wl() : void 0,
          ...T
        }),
        c && xl({ ...T }),
        Nl({
          ...T,
          apply: ({ elements: ke, rects: cn, availableWidth: Ra, availableHeight: Aa }) => {
            const { width: Fa, height: Pa } = cn.reference, Fe = ke.floating.style;
            Fe.setProperty("--radix-popper-available-width", `${Ra}px`), Fe.setProperty("--radix-popper-available-height", `${Aa}px`), Fe.setProperty("--radix-popper-anchor-width", `${Fa}px`), Fe.setProperty("--radix-popper-anchor-height", `${Pa}px`);
          }
        }),
        w && El({ element: w, padding: l }),
        Ol({ arrowWidth: S, arrowHeight: F }),
        m && Ll({ strategy: "referenceHidden", ...T })
      ]
    }), [j, G] = na(D), ln = K(v);
    Q(() => {
      $ && ln?.();
    }, [$, ln]);
    const La = A.arrow?.x, Ea = A.arrow?.y, ka = A.arrow?.centerOffset !== 0, [Sa, Ma] = d.useState();
    return Q(() => {
      C && Ma(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ a(
      "div",
      {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...I,
          transform: $ ? I.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Sa,
          "--radix-popper-transform-origin": [
            A.transformOrigin?.x,
            A.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...A.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ a(
          Al,
          {
            scope: n,
            placedSide: j,
            onArrowChange: E,
            arrowX: La,
            arrowY: Ea,
            shouldHideArrow: ka,
            children: /* @__PURE__ */ a(
              H.div,
              {
                "data-side": j,
                "data-align": G,
                ...h,
                ref: _,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: $ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Jr.displayName = on;
var ea = "PopperArrow", Pl = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ta = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = Fl(ea, r), s = Pl[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ a(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ a(
          Sl,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ta.displayName = ea;
function Tl(e) {
  return e !== null;
}
var Ol = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, l = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [f, u] = na(n), p = { start: "0%", center: "50%", end: "100%" }[u], m = (o.arrow?.x ?? 0) + l / 2, g = (o.arrow?.y ?? 0) + c / 2;
    let v = "", h = "";
    return f === "bottom" ? (v = s ? p : `${m}px`, h = `${-c}px`) : f === "top" ? (v = s ? p : `${m}px`, h = `${r.floating.height + c}px`) : f === "right" ? (v = `${-c}px`, h = s ? p : `${g}px`) : f === "left" && (v = `${r.floating.width + c}px`, h = s ? p : `${g}px`), { data: { x: v, y: h } };
  }
});
function na(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Dl = Xr, ra = Qr, Il = Jr, Vl = ta, Bl = "Portal", aa = d.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, i] = d.useState(!1);
  Q(() => i(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? Un.createPortal(/* @__PURE__ */ a(H.div, { ...r, ref: t }), s) : null;
});
aa.displayName = Bl;
var $l = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ve = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), De = {}, ht = 0, oa = function(e) {
  return e && (e.host || oa(e.parentNode));
}, Zl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = oa(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Hl = function(e, t, n, r) {
  var o = Zl(t, Array.isArray(e) ? e : [e]);
  De[n] || (De[n] = /* @__PURE__ */ new WeakMap());
  var i = De[n], s = [], l = /* @__PURE__ */ new Set(), c = new Set(o), f = function(p) {
    !p || l.has(p) || (l.add(p), f(p.parentNode));
  };
  o.forEach(f);
  var u = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (l.has(m))
        u(m);
      else
        try {
          var g = m.getAttribute(r), v = g !== null && g !== "false", h = (ve.get(m) || 0) + 1, b = (i.get(m) || 0) + 1;
          ve.set(m, h), i.set(m, b), s.push(m), h === 1 && v && Oe.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(r, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return u(t), l.clear(), ht++, function() {
    s.forEach(function(p) {
      var m = ve.get(p) - 1, g = i.get(p) - 1;
      ve.set(p, m), i.set(p, g), m || (Oe.has(p) || p.removeAttribute(r), Oe.delete(p)), g || p.removeAttribute(n);
    }), ht--, ht || (ve = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), De = {});
  };
}, jl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = $l(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Hl(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, te = function() {
  return te = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, te.apply(this, arguments);
};
function ia(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Wl(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ze = "right-scroll-bar-position", He = "width-before-scroll-bar", zl = "with-scroll-bars-hidden", Ul = "--removed-body-scroll-bar-size";
function gt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Gl(e, t) {
  var n = yt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Kl = typeof window < "u" ? d.useLayoutEffect : d.useEffect, $n = /* @__PURE__ */ new WeakMap();
function Yl(e, t) {
  var n = Gl(null, function(r) {
    return e.forEach(function(o) {
      return gt(o, r);
    });
  });
  return Kl(function() {
    var r = $n.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), s = n.current;
      o.forEach(function(l) {
        i.has(l) || gt(l, null);
      }), i.forEach(function(l) {
        o.has(l) || gt(l, s);
      });
    }
    $n.set(n, e);
  }, [e]), n;
}
function Xl(e) {
  return e;
}
function ql(e, t) {
  t === void 0 && (t = Xl);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(l) {
          return l !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(i), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(i);
      }, f = function() {
        return Promise.resolve().then(c);
      };
      f(), n = {
        push: function(u) {
          s.push(u), f();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Ql(e) {
  e === void 0 && (e = {});
  var t = ql(null);
  return t.options = te({ async: !0, ssr: !1 }, e), t;
}
var sa = function(e) {
  var t = e.sideCar, n = ia(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, te({}, n));
};
sa.isSideCarExport = !0;
function Jl(e, t) {
  return e.useMedium(t), sa;
}
var la = Ql(), vt = function() {
}, at = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: vt,
    onWheelCapture: vt,
    onTouchMoveCapture: vt
  }), o = r[0], i = r[1], s = e.forwardProps, l = e.children, c = e.className, f = e.removeScrollBar, u = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, v = e.noIsolation, h = e.inert, b = e.allowPinchZoom, C = e.as, L = C === void 0 ? "div" : C, _ = e.gapMode, w = ia(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = m, k = Yl([n, t]), S = te(te({}, w), o);
  return d.createElement(
    d.Fragment,
    null,
    u && d.createElement(E, { sideCar: la, removeScrollBar: f, shards: p, noRelative: g, noIsolation: v, inert: h, setCallbacks: i, allowPinchZoom: !!b, lockRef: n, gapMode: _ }),
    s ? d.cloneElement(d.Children.only(l), te(te({}, S), { ref: k })) : d.createElement(L, te({}, S, { className: c, ref: k }), l)
  );
});
at.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
at.classNames = {
  fullWidth: He,
  zeroRight: Ze
};
var ec = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function tc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ec();
  return t && e.setAttribute("nonce", t), e;
}
function nc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function rc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ac = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = tc()) && (nc(t, n), rc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, oc = function() {
  var e = ac();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ca = function() {
  var e = oc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, ic = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bt = function(e) {
  return parseInt(e || "", 10) || 0;
}, sc = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bt(n), bt(r), bt(o)];
}, lc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ic;
  var t = sc(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, cc = ca(), _e = "data-scroll-locked", dc = function(e, t, n, r) {
  var o = e.left, i = e.top, s = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(zl, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(_e, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ze, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(He, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Ze, " .").concat(Ze, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(He, " .").concat(He, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(_e, `] {
    `).concat(Ul, ": ").concat(l, `px;
  }
`);
}, Zn = function() {
  var e = parseInt(document.body.getAttribute(_e) || "0", 10);
  return isFinite(e) ? e : 0;
}, uc = function() {
  d.useEffect(function() {
    return document.body.setAttribute(_e, (Zn() + 1).toString()), function() {
      var e = Zn() - 1;
      e <= 0 ? document.body.removeAttribute(_e) : document.body.setAttribute(_e, e.toString());
    };
  }, []);
}, fc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  uc();
  var i = d.useMemo(function() {
    return lc(o);
  }, [o]);
  return d.createElement(cc, { styles: dc(i, !t, o, n ? "" : "!important") });
}, At = !1;
if (typeof window < "u")
  try {
    var Ie = Object.defineProperty({}, "passive", {
      get: function() {
        return At = !0, !0;
      }
    });
    window.addEventListener("test", Ie, Ie), window.removeEventListener("test", Ie, Ie);
  } catch {
    At = !1;
  }
var be = At ? { passive: !1 } : !1, pc = function(e) {
  return e.tagName === "TEXTAREA";
}, da = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !pc(e) && n[t] === "visible")
  );
}, mc = function(e) {
  return da(e, "overflowY");
}, hc = function(e) {
  return da(e, "overflowX");
}, Hn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ua(e, r);
    if (o) {
      var i = fa(e, r), s = i[1], l = i[2];
      if (s > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, gc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, vc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ua = function(e, t) {
  return e === "v" ? mc(t) : hc(t);
}, fa = function(e, t) {
  return e === "v" ? gc(t) : vc(t);
}, bc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, yc = function(e, t, n, r, o) {
  var i = bc(e, window.getComputedStyle(t).direction), s = i * r, l = n.target, c = t.contains(l), f = !1, u = s > 0, p = 0, m = 0;
  do {
    if (!l)
      break;
    var g = fa(e, l), v = g[0], h = g[1], b = g[2], C = h - b - i * v;
    (v || C) && ua(e, l) && (p += C, m += v);
    var L = l.parentNode;
    l = L && L.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? L.host : L;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (u && Math.abs(p) < 1 || !u && Math.abs(m) < 1) && (f = !0), f;
}, Ve = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, jn = function(e) {
  return [e.deltaX, e.deltaY];
}, Wn = function(e) {
  return e && "current" in e ? e.current : e;
}, Cc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _c = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wc = 0, ye = [];
function xc(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(wc++)[0], i = d.useState(ca)[0], s = d.useRef(e);
  d.useEffect(function() {
    s.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Wl([e.lockRef.current], (e.shards || []).map(Wn), !0).filter(Boolean);
      return h.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = d.useCallback(function(h, b) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var C = Ve(h), L = n.current, _ = "deltaX" in h ? h.deltaX : L[0] - C[0], w = "deltaY" in h ? h.deltaY : L[1] - C[1], E, k = h.target, S = Math.abs(_) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && S === "h" && k.type === "range")
      return !1;
    var F = window.getSelection(), R = F && F.anchorNode, N = R ? R === k || R.contains(k) : !1;
    if (N)
      return !1;
    var P = Hn(S, k);
    if (!P)
      return !0;
    if (P ? E = S : (E = S === "v" ? "h" : "v", P = Hn(S, k)), !P)
      return !1;
    if (!r.current && "changedTouches" in h && (_ || w) && (r.current = E), !E)
      return !0;
    var O = r.current || E;
    return yc(O, b, h, O === "h" ? _ : w);
  }, []), c = d.useCallback(function(h) {
    var b = h;
    if (!(!ye.length || ye[ye.length - 1] !== i)) {
      var C = "deltaY" in b ? jn(b) : Ve(b), L = t.current.filter(function(E) {
        return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && Cc(E.delta, C);
      })[0];
      if (L && L.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!L) {
        var _ = (s.current.shards || []).map(Wn).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), w = _.length > 0 ? l(b, _[0]) : !s.current.noIsolation;
        w && b.cancelable && b.preventDefault();
      }
    }
  }, []), f = d.useCallback(function(h, b, C, L) {
    var _ = { name: h, delta: b, target: C, should: L, shadowParent: Nc(C) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== _;
      });
    }, 1);
  }, []), u = d.useCallback(function(h) {
    n.current = Ve(h), r.current = void 0;
  }, []), p = d.useCallback(function(h) {
    f(h.type, jn(h), h.target, l(h, e.lockRef.current));
  }, []), m = d.useCallback(function(h) {
    f(h.type, Ve(h), h.target, l(h, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return ye.push(i), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, be), document.addEventListener("touchmove", c, be), document.addEventListener("touchstart", u, be), function() {
      ye = ye.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", c, be), document.removeEventListener("touchmove", c, be), document.removeEventListener("touchstart", u, be);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    v ? d.createElement(i, { styles: _c(o) }) : null,
    g ? d.createElement(fc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Nc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Lc = Jl(la, xc);
var pa = d.forwardRef(function(e, t) {
  return d.createElement(at, te({}, e, { ref: t, sideCar: Lc }));
});
pa.classNames = at.classNames;
var ot = "Popover", [ma] = Qe(ot, [
  Kr
]), Ae = Kr(), [Ec, fe] = ma(ot), ha = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, l = Ae(t), c = d.useRef(null), [f, u] = d.useState(!1), [p, m] = It({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: ot
  });
  return /* @__PURE__ */ a(Dl, { ...l, children: /* @__PURE__ */ a(
    Ec,
    {
      scope: t,
      contentId: Vt(),
      triggerRef: c,
      open: p,
      onOpenChange: m,
      onOpenToggle: d.useCallback(() => m((g) => !g), [m]),
      hasCustomAnchor: f,
      onCustomAnchorAdd: d.useCallback(() => u(!0), []),
      onCustomAnchorRemove: d.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
ha.displayName = ot;
var ga = "PopoverAnchor", kc = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fe(ga, n), i = Ae(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: l } = o;
    return d.useEffect(() => (s(), () => l()), [s, l]), /* @__PURE__ */ a(ra, { ...i, ...r, ref: t });
  }
);
kc.displayName = ga;
var va = "PopoverTrigger", ba = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fe(va, n), i = Ae(n), s = U(t, o.triggerRef), l = /* @__PURE__ */ a(
      H.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": xa(o.open),
        ...r,
        ref: s,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? l : /* @__PURE__ */ a(ra, { asChild: !0, ...i, children: l });
  }
);
ba.displayName = va;
var sn = "PopoverPortal", [Sc, Mc] = ma(sn, {
  forceMount: void 0
}), ya = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, i = fe(sn, t);
  return /* @__PURE__ */ a(Sc, { scope: t, forceMount: n, children: /* @__PURE__ */ a(me, { present: n || i.open, children: /* @__PURE__ */ a(aa, { asChild: !0, container: o, children: r }) }) });
};
ya.displayName = sn;
var Ne = "PopoverContent", Ca = d.forwardRef(
  (e, t) => {
    const n = Mc(Ne, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, i = fe(Ne, e.__scopePopover);
    return /* @__PURE__ */ a(me, { present: r || i.open, children: i.modal ? /* @__PURE__ */ a(Ac, { ...o, ref: t }) : /* @__PURE__ */ a(Fc, { ...o, ref: t }) });
  }
);
Ca.displayName = Ne;
var Rc = je("PopoverContent.RemoveScroll"), Ac = d.forwardRef(
  (e, t) => {
    const n = fe(Ne, e.__scopePopover), r = d.useRef(null), o = U(t, r), i = d.useRef(!1);
    return d.useEffect(() => {
      const s = r.current;
      if (s) return jl(s);
    }, []), /* @__PURE__ */ a(pa, { as: Rc, allowPinchZoom: !0, children: /* @__PURE__ */ a(
      _a,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), i.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: B(
          e.onPointerDownOutside,
          (s) => {
            const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || c;
            i.current = f;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: B(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Fc = d.forwardRef(
  (e, t) => {
    const n = fe(Ne, e.__scopePopover), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ a(
      _a,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          e.onCloseAutoFocus?.(i), i.defaultPrevented || (r.current || n.triggerRef.current?.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          e.onInteractOutside?.(i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          n.triggerRef.current?.contains(s) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), _a = d.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: l,
      onPointerDownOutside: c,
      onFocusOutside: f,
      onInteractOutside: u,
      ...p
    } = e, m = fe(Ne, n), g = Ae(n);
    return ls(), /* @__PURE__ */ a(
      Pr,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ a(
          Bt,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: l,
            onPointerDownOutside: c,
            onFocusOutside: f,
            onDismiss: () => m.onOpenChange(!1),
            children: /* @__PURE__ */ a(
              Il,
              {
                "data-state": xa(m.open),
                role: "dialog",
                id: m.contentId,
                ...g,
                ...p,
                ref: t,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), wa = "PopoverClose", Pc = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = fe(wa, n);
    return /* @__PURE__ */ a(
      H.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Pc.displayName = wa;
var Tc = "PopoverArrow", Oc = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ae(n);
    return /* @__PURE__ */ a(Vl, { ...o, ...r, ref: t });
  }
);
Oc.displayName = Tc;
function xa(e) {
  return e ? "open" : "closed";
}
var Dc = ha, Ic = ba, Vc = ya, Bc = Ca;
const $c = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], Ft = [
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
  "December"
];
function Zc(e, t) {
  if (!e) return "";
  const n = `${Ft[e.getMonth()].slice(0, 3)} ${e.getDate()}, ${e.getFullYear()}`;
  if (!t) return n;
  const r = e.getHours(), o = e.getMinutes(), i = r >= 12 ? "PM" : "AM", s = r % 12 || 12;
  return `${n} ${s}:${String(o).padStart(2, "0")} ${i}`;
}
function Na(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Hc(e) {
  return Na(e, /* @__PURE__ */ new Date());
}
function fu({
  value: e,
  onChange: t,
  showTime: n = !1,
  size: r = "medium",
  placeholder: o = "Select date",
  disabled: i = !1,
  minDate: s,
  maxDate: l,
  className: c,
  id: f
}) {
  const [u, p] = d.useState(!1), [m, g] = d.useState(
    () => e ? e.getFullYear() : (/* @__PURE__ */ new Date()).getFullYear()
  ), [v, h] = d.useState(
    () => e ? e.getMonth() : (/* @__PURE__ */ new Date()).getMonth()
  ), [b, C] = d.useState(
    () => e && e.getHours() % 12 || 12
  ), [L, _] = d.useState(
    () => e ? e.getMinutes() : 0
  ), [w, E] = d.useState(
    () => e && e.getHours() >= 12 ? "PM" : "AM"
  );
  d.useEffect(() => {
    e && (g(e.getFullYear()), h(e.getMonth()), C(e.getHours() % 12 || 12), _(e.getMinutes()), E(e.getHours() >= 12 ? "PM" : "AM"));
  }, [e]);
  const k = new Date(m, v + 1, 0).getDate(), S = new Date(m, v, 1).getDay();
  function F(M) {
    const I = w === "PM" ? b === 12 ? 12 : b + 12 : b === 12 ? 0 : b, D = new Date(m, v, M, I, L, 0, 0);
    t?.(D), n || p(!1);
  }
  function R() {
    v === 0 ? (g((M) => M - 1), h(11)) : h((M) => M - 1);
  }
  function N() {
    v === 11 ? (g((M) => M + 1), h(0)) : h((M) => M + 1);
  }
  function P(M) {
    const I = new Date(m, v, M);
    return !!(s && I < s || l && I > l);
  }
  const O = Array.from({ length: 12 }, (M, I) => I + 1), T = Array.from({ length: 12 }, (M, I) => I * 5);
  return /* @__PURE__ */ y(Dc, { open: u, onOpenChange: i ? void 0 : p, children: [
    /* @__PURE__ */ a(Ic, { asChild: !0, children: /* @__PURE__ */ y(
      "button",
      {
        id: f,
        type: "button",
        disabled: i,
        "aria-haspopup": "dialog",
        "aria-expanded": u,
        className: x(
          "ef-dtp__trigger",
          `ef-dtp__trigger--${r}`,
          !e && "ef-dtp__trigger--placeholder",
          c
        ),
        children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-dtp__cal-icon", "aria-hidden": !0, children: "calendar_today" }),
          /* @__PURE__ */ a("span", { className: "ef-dtp__trigger-text", children: e ? Zc(e, n) : o }),
          e && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "ef-dtp__clear",
              "aria-label": "Clear date",
              onClick: (M) => {
                M.stopPropagation(), t?.(null);
              },
              children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ a(Vc, { children: /* @__PURE__ */ y(
      Bc,
      {
        align: "start",
        sideOffset: 4,
        className: "ef-dtp__popover",
        children: [
          /* @__PURE__ */ y("div", { className: "ef-dtp__calendar", children: [
            /* @__PURE__ */ y("div", { className: "ef-dtp__nav", children: [
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "ef-dtp__nav-btn",
                  onClick: R,
                  "aria-label": "Previous month",
                  children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "chevron_left" })
                }
              ),
              /* @__PURE__ */ y("span", { className: "ef-dtp__month-label", children: [
                Ft[v],
                " ",
                m
              ] }),
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "ef-dtp__nav-btn",
                  onClick: N,
                  "aria-label": "Next month",
                  children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "chevron_right" })
                }
              )
            ] }),
            /* @__PURE__ */ y("div", { className: "ef-dtp__grid", children: [
              $c.map((M) => /* @__PURE__ */ a("span", { className: "ef-dtp__day-header", children: M }, M)),
              Array.from({ length: S }, (M, I) => /* @__PURE__ */ a("span", {}, `e-${I}`)),
              Array.from({ length: k }, (M, I) => {
                const D = I + 1, $ = new Date(m, v, D), A = e ? Na($, e) : !1, j = Hc($), G = P(D);
                return /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    disabled: G,
                    "aria-pressed": A,
                    "aria-label": `${Ft[v]} ${D}, ${m}`,
                    className: x(
                      "ef-dtp__day",
                      A && "ef-dtp__day--selected",
                      j && !A && "ef-dtp__day--today",
                      G && "ef-dtp__day--disabled"
                    ),
                    onClick: () => !G && F(D),
                    children: D
                  },
                  D
                );
              })
            ] })
          ] }),
          n && /* @__PURE__ */ y("div", { className: "ef-dtp__time", children: [
            /* @__PURE__ */ a("div", { className: "ef-dtp__time-label", children: "Time" }),
            /* @__PURE__ */ y("div", { className: "ef-dtp__time-cols", children: [
              /* @__PURE__ */ a("div", { className: "ef-dtp__time-col", children: O.map((M) => /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: x("ef-dtp__time-cell", M === b && "ef-dtp__time-cell--selected"),
                  onClick: () => C(M),
                  children: String(M).padStart(2, "0")
                },
                M
              )) }),
              /* @__PURE__ */ a("span", { className: "ef-dtp__time-sep", children: ":" }),
              /* @__PURE__ */ a("div", { className: "ef-dtp__time-col", children: T.map((M) => /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: x("ef-dtp__time-cell", M === L && "ef-dtp__time-cell--selected"),
                  onClick: () => _(M),
                  children: String(M).padStart(2, "0")
                },
                M
              )) }),
              /* @__PURE__ */ a("div", { className: "ef-dtp__time-col ef-dtp__time-col--ampm", children: ["AM", "PM"].map((M) => /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: x("ef-dtp__time-cell", M === w && "ef-dtp__time-cell--selected"),
                  onClick: () => E(M),
                  children: M
                },
                M
              )) })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
function pu({
  value: e,
  max: t,
  label: n,
  showLabel: r = !0,
  className: o
}) {
  const i = Math.max(1, t), s = Math.min(i, Math.max(0, e)), l = `${s} of ${i} steps complete`, c = n ?? l;
  return /* @__PURE__ */ y(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s,
      "aria-valuemin": 0,
      "aria-valuemax": i,
      "aria-label": c,
      className: x("ef-segprogress", o),
      children: [
        /* @__PURE__ */ a("div", { className: "ef-segprogress__track", children: Array.from({ length: i }, (f, u) => /* @__PURE__ */ a(
          "div",
          {
            "data-filled": u < s || void 0,
            "data-active": u === s - 1 || void 0,
            className: x(
              "ef-segprogress__segment",
              u < s && "ef-segprogress__segment--filled",
              u === s && s < i && "ef-segprogress__segment--next"
            )
          },
          u
        )) }),
        r && /* @__PURE__ */ a("span", { className: "ef-segprogress__label", "aria-hidden": !0, children: c })
      ]
    }
  );
}
const jc = {
  completed: "check",
  current: "radio_button_checked",
  upcoming: "radio_button_unchecked",
  error: "close"
};
function mu({
  title: e,
  description: t,
  timestamp: n,
  status: r = "upcoming",
  icon: o,
  nodeContent: i,
  className: s,
  children: l
}) {
  return /* @__PURE__ */ y(
    "li",
    {
      "data-status": r,
      className: x("ef-timeline-item", `ef-timeline-item--${r}`, s),
      children: [
        /* @__PURE__ */ y("div", { className: "ef-timeline-item__node-col", "aria-hidden": !0, children: [
          /* @__PURE__ */ a("div", { className: "ef-timeline-item__node", children: i ?? /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-timeline-item__node-icon", children: o ?? jc[r] }) }),
          /* @__PURE__ */ a("div", { className: "ef-timeline-item__connector" })
        ] }),
        /* @__PURE__ */ y("div", { className: "ef-timeline-item__content", children: [
          /* @__PURE__ */ y("div", { className: "ef-timeline-item__header", children: [
            /* @__PURE__ */ a("span", { className: "ef-timeline-item__title", children: e }),
            n && /* @__PURE__ */ a("span", { className: "ef-timeline-item__timestamp", children: n })
          ] }),
          t && /* @__PURE__ */ a("p", { className: "ef-timeline-item__description", children: t }),
          l && /* @__PURE__ */ a("div", { className: "ef-timeline-item__body", children: l })
        ] })
      ]
    }
  );
}
function hu({ children: e, className: t, label: n = "Activity timeline" }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      "aria-label": n,
      className: x("ef-timeline", t),
      children: e
    }
  );
}
const Wc = {
  pdf: "picture_as_pdf",
  doc: "description",
  docx: "description",
  xls: "table_chart",
  xlsx: "table_chart",
  csv: "table_chart",
  ppt: "slideshow",
  pptx: "slideshow",
  png: "image",
  jpg: "image",
  jpeg: "image",
  gif: "image",
  svg: "image",
  mp4: "videocam",
  mp3: "audio_file",
  zip: "folder_zip",
  txt: "text_snippet"
};
function zc(e) {
  const t = e.split(".").pop()?.toLowerCase() ?? "";
  return Wc[t] ?? "insert_drive_file";
}
function gu({
  name: e,
  size: t,
  status: n = "uploading",
  progress: r,
  errorMessage: o,
  onRemove: i,
  className: s
}) {
  return /* @__PURE__ */ y(
    "div",
    {
      "data-status": n,
      className: x("ef-uploader-file", `ef-uploader-file--${n}`, s),
      children: [
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-uploader-file__icon", "aria-hidden": !0, children: zc(e) }),
        /* @__PURE__ */ y("div", { className: "ef-uploader-file__info", children: [
          /* @__PURE__ */ y("div", { className: "ef-uploader-file__name-row", children: [
            /* @__PURE__ */ a("span", { className: "ef-uploader-file__name", children: e }),
            t && n !== "uploading" && /* @__PURE__ */ a("span", { className: "ef-uploader-file__size", children: t }),
            n === "uploading" && r != null && /* @__PURE__ */ y("span", { className: "ef-uploader-file__size", children: [
              Math.round(r),
              "%"
            ] })
          ] }),
          n === "uploading" && r != null && /* @__PURE__ */ a("div", { className: "ef-uploader-file__progress-track", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, children: /* @__PURE__ */ a(
            "div",
            {
              className: "ef-uploader-file__progress-fill",
              style: { width: `${Math.min(100, r)}%` }
            }
          ) }),
          n === "error" && o && /* @__PURE__ */ a("span", { className: "ef-uploader-file__error", children: o })
        ] }),
        n === "success" && /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-uploader-file__status-icon", "aria-hidden": !0, children: "check_circle" }),
        n === "error" && /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-uploader-file__status-icon ef-uploader-file__status-icon--error", "aria-hidden": !0, children: "error" }),
        i && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "ef-uploader-file__remove",
            onClick: i,
            "aria-label": `Remove ${e}`,
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
          }
        )
      ]
    }
  );
}
function vu({
  onFiles: e,
  accept: t,
  multiple: n = !1,
  disabled: r = !1,
  dragLabel: o = "Drag and drop files here",
  browseLabel: i = "Browse files",
  hint: s,
  children: l,
  className: c
}) {
  const f = d.useRef(null), [u, p] = d.useState(!1);
  function m(b) {
    b.preventDefault(), r || p(!0);
  }
  function g() {
    p(!1);
  }
  function v(b) {
    b.preventDefault(), p(!1), !r && b.dataTransfer.files.length && e?.(b.dataTransfer.files);
  }
  function h(b) {
    b.target.files?.length && (e?.(b.target.files), b.target.value = "");
  }
  return /* @__PURE__ */ y("div", { className: x("ef-uploader", c), children: [
    /* @__PURE__ */ y(
      "div",
      {
        role: "button",
        "aria-disabled": r,
        tabIndex: r ? -1 : 0,
        "data-dragging": u || void 0,
        "data-disabled": r || void 0,
        className: x(
          "ef-uploader__zone",
          u && "ef-uploader__zone--dragging",
          r && "ef-uploader__zone--disabled"
        ),
        onDragOver: m,
        onDragLeave: g,
        onDrop: v,
        onClick: () => !r && f.current?.click(),
        onKeyDown: (b) => {
          (b.key === "Enter" || b.key === " ") && !r && (b.preventDefault(), f.current?.click());
        },
        children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined ef-uploader__icon", "aria-hidden": !0, children: "cloud_upload" }),
          /* @__PURE__ */ y("div", { className: "ef-uploader__labels", children: [
            /* @__PURE__ */ a("span", { className: "ef-uploader__drag-label", children: o }),
            /* @__PURE__ */ a("span", { className: "ef-uploader__or", children: "or" }),
            /* @__PURE__ */ a("span", { className: "ef-uploader__browse-label", children: i })
          ] }),
          s && /* @__PURE__ */ a("span", { className: "ef-uploader__hint", children: s })
        ]
      }
    ),
    /* @__PURE__ */ a(
      "input",
      {
        ref: f,
        type: "file",
        accept: t,
        multiple: n,
        disabled: r,
        className: "ef-uploader__input",
        onChange: h,
        tabIndex: -1,
        "aria-hidden": !0
      }
    ),
    l && /* @__PURE__ */ a("div", { className: "ef-uploader__file-list", children: l })
  ] });
}
function bu({
  icon: e,
  label: t,
  variant: n = "primary",
  size: r = "default",
  onClick: o,
  disabled: i = !1,
  "aria-label": s,
  className: l,
  type: c = "button"
}) {
  const f = !!t;
  return /* @__PURE__ */ y(
    "button",
    {
      type: c,
      disabled: i,
      onClick: o,
      "aria-label": t ? void 0 : s ?? "Action",
      "data-variant": n,
      "data-size": r,
      "data-extended": f || void 0,
      className: x(
        "ef-fab",
        `ef-fab--${n}`,
        r === "small" && "ef-fab--small",
        f && "ef-fab--extended",
        l
      ),
      children: [
        /* @__PURE__ */ a("span", { className: "ef-fab__icon", "aria-hidden": !0, children: e }),
        t && /* @__PURE__ */ a("span", { className: "ef-fab__label", children: t })
      ]
    }
  );
}
export {
  zd as AI_AGENT_LOGO_PATH,
  nd as Badge,
  rd as Breadcrumb,
  cd as BreadcrumbEllipsis,
  od as BreadcrumbItem,
  id as BreadcrumbLink,
  ad as BreadcrumbList,
  sd as BreadcrumbPage,
  ld as BreadcrumbSeparator,
  Ha as Button,
  ed as ButtonDropdown,
  eu as CAREER_HUB_CHRO_TABS,
  tu as CAREER_HUB_HRBP_TABS,
  Wi as COPILOT_LOGO_PATH,
  _u as CORNER_RADIUS_TOKENS,
  ou as CareerHubShell,
  uu as Chip,
  dd as CourseObjectCard,
  Cd as DataTable,
  wd as DataTableBody,
  Ld as DataTableCell,
  Nd as DataTableHead,
  _d as DataTableHeader,
  xd as DataTableRow,
  fu as DateTimePicker,
  Td as Dialog,
  $d as DialogBody,
  Dd as DialogClose,
  Id as DialogContent,
  jd as DialogDescription,
  Zd as DialogFooter,
  Vd as DialogHeader,
  Ni as DialogOverlay,
  xi as DialogPortal,
  Bd as DialogStepper,
  Hd as DialogTitle,
  Od as DialogTrigger,
  it as DropdownMenu,
  Ua as DropdownMenuContent,
  Ga as DropdownMenuItem,
  za as DropdownMenuPortal,
  Ka as DropdownMenuSeparator,
  Wa as DropdownMenuTrigger,
  Wd as EIGHTFOLD_LOGO_PATH,
  Xd as EMPLOYEE_AVATAR_MENU_ITEMS,
  Qd as EMPLOYEE_NON_MANAGER_TABS,
  as as EmptyIllustration,
  bu as FloatingActionButton,
  kr as Header,
  Ti as HeaderActions,
  Oi as HeaderGroup,
  Ar as HeaderSecondary,
  Rr as HeaderTextGroup,
  Mr as HeaderTitle,
  Sr as HeaderToolbar,
  iu as InfoBar,
  Ya as Input,
  co as InsightCard,
  Jd as MANAGER_TABS,
  qt as MARKETPLACE_SUBITEMS,
  Xt as MY_ACTIVITY_SUBITEMS,
  qd as MY_CAREER_SUBITEMS,
  pd as MentorInsightCard,
  su as MessageBar,
  Ri as Navbar,
  si as NavigationMenu,
  hd as NavigationMenuContent,
  st as NavigationMenuItem,
  ct as NavigationMenuLink,
  li as NavigationMenuList,
  md as NavigationMenuTrigger,
  ci as NavigationMenuViewport,
  Li as NumberBadge,
  Yn as OpenTo,
  Ud as PRIMARY_NAVBAR_PRODUCT_IDS,
  zi as PRODUCT_NAMES,
  du as Panel,
  fd as PeopleObjectCard,
  Dt as Pill,
  Fr as ProductBackground,
  bi as Progress,
  ud as ProjectObjectCard,
  wu as SPACING_TOKENS,
  pu as SegmentedProgress,
  Ed as Select,
  Rd as SelectContent,
  kd as SelectGroup,
  Fd as SelectItem,
  Ad as SelectLabel,
  hi as SelectScrollDownButton,
  mi as SelectScrollUpButton,
  Pd as SelectSeparator,
  Md as SelectTrigger,
  Sd as SelectValue,
  Qa as SkillTag,
  lu as Snackbar,
  cu as SnackbarContainer,
  ki as StatCard,
  Si as StatCardGroup,
  _r as Stepper,
  wi as StepperDescription,
  Nr as StepperIndicator,
  xr as StepperItem,
  wr as StepperList,
  Yt as StepperSeparator,
  Lr as StepperTitle,
  _i as StepperTrigger,
  au as TALENT_ACQUISITION_ACTION_BUTTONS,
  nu as TALENT_ACQUISITION_RECRUITER_TABS,
  ru as TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
  gd as Tabs,
  yd as TabsContent,
  vd as TabsList,
  bd as TabsTrigger,
  Ja as Tag,
  td as TagGroup,
  hu as Timeline,
  mu as TimelineItem,
  vu as Uploader,
  gu as UploaderFileItem,
  no as badgeVariants,
  Za as buttonVariants,
  Kd as getNavbarProductConfig,
  Gd as getProductLogoPath,
  Yd as productLogos,
  di as tabsListVariants
};
