import { jsxs as m, Fragment as I, jsx as a } from "react/jsx-runtime";
import * as d from "react";
import Z, { isValidElement as ge, cloneElement as ve, forwardRef as Pt, useState as Se } from "react";
import { Slot as be, createSlot as se } from "@radix-ui/react-slot";
import { cva as ee } from "class-variance-authority";
import { clsx as Dt } from "clsx";
import { twMerge as At } from "tailwind-merge";
import * as S from "@radix-ui/react-dropdown-menu";
import * as Re from "@radix-ui/react-toggle-group";
import * as Ft from "react-dom";
import Ot, { createPortal as Bt } from "react-dom";
import * as te from "@radix-ui/react-tabs";
import { Check as jt, ChevronDown as He, ChevronUp as Zt } from "lucide-react";
import * as T from "@radix-ui/react-select";
import * as le from "@radix-ui/react-progress";
import * as D from "@radix-ui/react-dialog";
import { CORNER_RADIUS_TOKENS as go, SPACING_TOKENS as vo } from "./tokens.js";
function g(...e) {
  return At(Dt(e));
}
const zt = ee("btn", {
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
function Ie(e, t) {
  return e == null ? null : ge(e) ? ve(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function $t({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  badge: c,
  children: s,
  ...l
}) {
  const p = r ? be : "button", h = o != null || i != null || c != null ? /* @__PURE__ */ m(I, { children: [
    o != null && Ie(o, "inline-start"),
    s,
    c != null && /* @__PURE__ */ a("span", { className: "btn__badge", "data-slot": "button-badge", children: c > 99 ? "99+" : c }),
    i != null && Ie(i, "inline-end")
  ] }) : s;
  return /* @__PURE__ */ a(
    p,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: g(zt({ variant: t, size: n, className: e })),
      ...l,
      children: h
    }
  );
}
function Ht(e) {
  return /* @__PURE__ */ a(
    S.Root,
    {
      "data-slot": "dropdown-menu",
      ...e
    }
  );
}
function Ut(e) {
  return /* @__PURE__ */ a(
    S.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Gt(e) {
  return /* @__PURE__ */ a(S.Portal, { ...e });
}
function Kt({
  className: e,
  sideOffset: t = 4,
  align: n = "start",
  ...r
}) {
  return /* @__PURE__ */ a(S.Portal, { children: /* @__PURE__ */ a(
    S.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: g(e),
      ...r
    }
  ) });
}
function Wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Item,
    {
      "data-slot": "dropdown-menu-item",
      className: g(e),
      ...t
    }
  );
}
function qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    S.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: g(e),
      ...t
    }
  );
}
const ne = Object.assign(Ht, {
  Trigger: Ut,
  Portal: Gt,
  Content: Kt,
  Item: Wt,
  Separator: qt
});
function lr({
  children: e,
  menu: t,
  variant: n = "outline",
  size: r = "default",
  trigger: o,
  buttonProps: i,
  align: c = "end",
  sideOffset: s = 4
}) {
  const l = o ?? /* @__PURE__ */ a($t, { variant: n, size: r, ...i, children: e });
  return /* @__PURE__ */ m(ne, { children: [
    /* @__PURE__ */ a(ne.Trigger, { asChild: !0, children: l }),
    /* @__PURE__ */ a(ne.Content, { align: c, sideOffset: s, children: t })
  ] });
}
const Yt = Pt(function({
  size: t = "medium",
  shape: n = "rounded",
  state: r = "default",
  leadingIcon: o,
  trailingIcon: i,
  onClear: c,
  className: s = "",
  disabled: l,
  type: p = "text",
  ...u
}, h) {
  const f = [
    "input",
    `input--${t}`,
    `input--${n}`,
    r !== "default" && `input--${r}`,
    l && "input--disabled",
    s
  ].filter(Boolean).join(" "), b = (_) => typeof _ == "string" ? /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: _ }) : _;
  return /* @__PURE__ */ m("div", { className: f, children: [
    o != null && /* @__PURE__ */ a("span", { className: "input__leading-icon", "aria-hidden": !0, children: b(o) }),
    /* @__PURE__ */ a(
      "input",
      {
        ref: h,
        type: p,
        className: "input__field",
        disabled: l,
        "aria-invalid": r === "error" ? !0 : void 0,
        ...u
      }
    ),
    (i != null || c) && /* @__PURE__ */ a("span", { className: "input__trailing", children: c ? /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "input__clear",
        onClick: c,
        disabled: l,
        "aria-label": "Clear",
        children: i != null ? b(i) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" })
      }
    ) : /* @__PURE__ */ a("span", { className: "input__trailing-icon", "aria-hidden": !0, children: b(i) }) })
  ] });
});
function _e({ icon: e, children: t, variant: n = "neutral", size: r = "medium", className: o = "" }) {
  return /* @__PURE__ */ m("span", { className: `pill pill--${n} pill--${r} ${o}`.trim(), children: [
    e && /* @__PURE__ */ a("span", { className: "material-symbols-outlined pill__icon", children: e }),
    t
  ] });
}
function Xt({ trend: e, size: t }) {
  const n = t === "lg" ? 20 : t === "md" ? 18 : 14, r = t === "lg" ? 28 : t === "md" ? 24 : 20, o = e === "exceed" ? "arrow_upward" : e === "meet" ? "remove" : "arrow_downward";
  return /* @__PURE__ */ a(
    "span",
    {
      className: g("skill-tag__trend", `skill-tag__trend--${e}`),
      style: { width: r, height: r },
      children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: n }, "aria-hidden": !0, children: o })
    }
  );
}
function Qt({ size: e }) {
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
const Jt = d.forwardRef(
  ({
    className: e,
    children: t,
    size: n = "md",
    variant: r = "default",
    action: o = "none",
    active: i = !1,
    endorseCount: c,
    trend: s,
    upskilling: l = !1,
    onAction: p,
    ...u
  }, h) => {
    const f = n === "lg" ? 20 : n === "md" ? 18 : 14;
    return /* @__PURE__ */ m(
      "span",
      {
        ref: h,
        "data-slot": "skill-tag",
        className: g(
          "skill-tag",
          `skill-tag--${n}`,
          `skill-tag--${r}`,
          i && "skill-tag--active",
          e
        ),
        ...u,
        children: [
          r === "matched" && /* @__PURE__ */ a("span", { className: "skill-tag__leading skill-tag__leading--matched", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: f }, "aria-hidden": !0, children: "check" }) }),
          r === "highlighted" && /* @__PURE__ */ a("span", { className: "skill-tag__leading skill-tag__leading--highlighted", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: f }, "aria-hidden": !0, children: "star" }) }),
          s && /* @__PURE__ */ a(Xt, { trend: s, size: n }),
          s && l && /* @__PURE__ */ a(Qt, { size: n }),
          /* @__PURE__ */ a("span", { className: "skill-tag__label", children: t }),
          o === "add" && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn",
              onClick: p,
              "aria-label": i ? "Remove" : "Add",
              children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: f }, "aria-hidden": !0, children: i ? "close" : "add" })
            }
          ),
          o === "save" && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn",
              onClick: p,
              "aria-label": i ? "Unsave" : "Save",
              children: /* @__PURE__ */ a(
                "span",
                {
                  className: "material-symbols-outlined",
                  style: {
                    fontSize: f,
                    fontVariationSettings: i ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                  },
                  "aria-hidden": !0,
                  children: "bookmark"
                }
              )
            }
          ),
          o === "endorse" && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn skill-tag__action-btn--endorse",
              onClick: p,
              "aria-label": "Endorse",
              children: [
                /* @__PURE__ */ a(
                  "span",
                  {
                    className: "material-symbols-outlined",
                    style: {
                      fontSize: f,
                      fontVariationSettings: i ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                    },
                    "aria-hidden": !0,
                    children: "thumb_up"
                  }
                ),
                c != null && /* @__PURE__ */ a("span", { className: "skill-tag__endorse-count", children: c })
              ]
            }
          )
        ]
      }
    );
  }
);
Jt.displayName = "SkillTag";
function Te(e, t) {
  return e == null ? null : ge(e) ? ve(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function ea({
  children: e,
  onRemove: t,
  variant: n = "default",
  size: r = "24",
  value: o,
  className: i,
  disabled: c = !1,
  leadingIcon: s,
  trailingIcon: l
}) {
  const p = g(
    "tag",
    r === "24" && "tag--24",
    r === "30" && "tag--30",
    r === "44" && "tag--44",
    n === "selected" && "tag--selected",
    n === "disabled" && "tag--disabled",
    i
  );
  return /* @__PURE__ */ m("span", { className: p, "data-value": o, children: [
    s != null && Te(s, "inline-start"),
    e,
    l != null && Te(l, "inline-end"),
    t && !c && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "tag__remove",
        onClick: (u) => {
          u.stopPropagation(), t();
        },
        "aria-label": `Remove ${typeof e == "string" ? e : "tag"}`,
        children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: "close" })
      }
    )
  ] });
}
function ta(e) {
  return g("tag", "tag--selectable", `tag--${e}`);
}
function aa(e) {
  return Z.isValidElement(e) && typeof e.type != "string" && (e.type === ea || e.type.displayName === "Tag");
}
function cr({
  type: e = "single",
  value: t,
  onValueChange: n,
  defaultValue: r,
  disabled: o = !1,
  size: i = "24",
  children: c,
  className: s
}) {
  return /* @__PURE__ */ a(
    Re.Root,
    {
      type: e,
      value: t,
      onValueChange: n,
      defaultValue: r,
      disabled: o,
      className: g("tag-group", s),
      asChild: !1,
      children: Z.Children.map(c, (l) => {
        if (!aa(l)) return l;
        const p = l.props.value;
        if (p == null) return l;
        const { leadingIcon: u, trailingIcon: h } = l.props;
        return /* @__PURE__ */ m(
          Re.Item,
          {
            value: p,
            className: ta(i),
            disabled: l.props.disabled,
            children: [
              u != null && /* @__PURE__ */ a("span", { "data-icon": "inline-start", children: u }),
              l.props.children,
              h != null && /* @__PURE__ */ a("span", { "data-icon": "inline-end", children: h })
            ]
          },
          p
        );
      })
    }
  );
}
const na = ee("badge", {
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
function Pe(e, t) {
  return e == null ? null : ge(e) ? ve(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function dr({
  className: e,
  variant: t = "default",
  size: n = "24",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  children: c,
  ...s
}) {
  const l = r ? be : "span", p = r ? c : /* @__PURE__ */ m(I, { children: [
    o != null && Pe(o, "inline-start"),
    c,
    i != null && Pe(i, "inline-end")
  ] });
  return /* @__PURE__ */ a(
    l,
    {
      "data-slot": "badge",
      "data-variant": t,
      "data-size": n,
      className: g(na({ variant: t, size: n }), e),
      ...s,
      children: p
    }
  );
}
const ra = "m-0 flex list-none flex-wrap items-center gap-0 p-0 break-words", oa = "inline-flex items-center", Ue = "rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[#4f5666] bg-transparent border-none cursor-pointer p-0 no-underline transition-colors hover:text-[#1a212e] hover:underline hover:[text-underline-offset:2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background", ia = "text-[length:14px] font-bold leading-[1.43] text-[#1a212e]", sa = "inline-flex shrink-0 select-none items-center justify-center text-[#94a3b8] mx-1.5 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:shrink-0";
function ur({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: g("flex h-14 w-full items-center", e),
      ...t
    }
  );
}
function pr({ className: e, ...t }) {
  return /* @__PURE__ */ a("ol", { "data-slot": "breadcrumb-list", className: g(ra, e), ...t });
}
function mr({ className: e, ...t }) {
  return /* @__PURE__ */ a("li", { "data-slot": "breadcrumb-item", className: g(oa, e), ...t });
}
function fr({ asChild: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    e ? be : "button",
    {
      "data-slot": "breadcrumb-link",
      type: e ? void 0 : "button",
      className: g(Ue, t),
      ...n
    }
  );
}
function hr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: g(ia, e),
      ...t
    }
  );
}
function gr({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: g(sa, t),
      ...n,
      children: e ?? /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ a("path", { d: "m9 18 6-6-6-6" }) })
    }
  );
}
function vr({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      className: g(Ue, e),
      ...n,
      children: t ?? "…"
    }
  );
}
const la = {
  coffee: { icon: "local_cafe", title: "Coffee chat" },
  mentoring: { icon: "group", title: "Mentoring" },
  project: { icon: "bar_chart", title: "Project" }
};
function Ge({ items: e, showLabel: t = !0, labelAsButton: n = !0, className: r = "" }) {
  return /* @__PURE__ */ m("div", { className: `open-to ${r}`.trim(), children: [
    t && (n ? /* @__PURE__ */ m("button", { type: "button", className: "open-to__select", "aria-haspopup": "listbox", "aria-expanded": !1, children: [
      /* @__PURE__ */ a("span", { className: "open-to__label", children: "Open to" }),
      /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) : /* @__PURE__ */ a("span", { className: "open-to__label open-to__label--plain", children: "Open to" })),
    /* @__PURE__ */ a("div", { className: "open-to__icons", children: e.map((o) => {
      const { icon: i, title: c } = la[o];
      return /* @__PURE__ */ a("span", { className: `open-to__icon open-to__icon--${o}`, title: c, "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__icon-symbol", children: i }) }, o);
    }) })
  ] });
}
function ca({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function da({
  title: e,
  badge: t,
  description: n,
  recommendedLabel: r,
  icon: o,
  bgColor: i,
  iconBgColor: c,
  iconColor: s,
  textColor: l = "#3B2600",
  buttonLabel: p,
  buttonHref: u = "#",
  children: h,
  fixedSize: f = !0,
  LinkComponent: b = ca
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: `insight-card ${f ? "insight-card--fixed" : ""}`,
      style: {
        "--insight-card-bg": i,
        "--insight-card-icon-bg": c,
        "--insight-card-icon-color": s,
        "--insight-card-text-color": l
      },
      children: [
        /* @__PURE__ */ m("div", { className: "insight-card__header", children: [
          /* @__PURE__ */ m("div", { className: "insight-card__header-content", children: [
            /* @__PURE__ */ m("div", { className: "insight-card__title-row", children: [
              /* @__PURE__ */ a("h3", { className: "insight-card__title", children: e }),
              t && /* @__PURE__ */ a("span", { className: "insight-card__badge", children: t })
            ] }),
            /* @__PURE__ */ a("p", { className: "insight-card__description", children: n })
          ] }),
          /* @__PURE__ */ a("div", { className: "insight-card__icon-wrap", "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined insight-card__icon", children: o }) })
        ] }),
        r && /* @__PURE__ */ a("span", { className: "insight-card__recommended", children: r }),
        /* @__PURE__ */ a("div", { className: "insight-card__content", children: h }),
        /* @__PURE__ */ a(b, { to: u, className: "insight-card__btn", children: p })
      ]
    }
  );
}
function ua({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function br({
  course: e,
  href: t = "#",
  showBookmark: n = !0,
  renderFacepile: r,
  LinkComponent: o = ua,
  bottomBar: i
}) {
  const c = o, s = i ?? (e.completedBy && e.completedBy.length > 0 ? { type: "completedBy", avatars: e.completedBy } : void 0), l = s && s.type !== "none", p = /* @__PURE__ */ m("div", { className: "course-object-card__inner", children: [
    /* @__PURE__ */ m("div", { className: "course-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "menu_book", variant: "blueGreen", size: "small", children: "Course" }) }),
      /* @__PURE__ */ m("div", { className: "course-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Add to learning plan", onClick: (u) => u.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Save course", onClick: (u) => u.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ m("div", { className: "course-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "course-object-card__title", children: e.title }),
      (e.provider || e.duration) && /* @__PURE__ */ a("span", { className: "course-object-card__meta", children: [e.provider, e.duration].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ m("div", { className: "course-object-card__skills", children: [
        e.skills.slice(0, 2).map((u) => /* @__PURE__ */ a("span", { className: "course-object-card__skill-tag", children: u }, u)),
        e.skills.length > 2 && /* @__PURE__ */ m("span", { className: "course-object-card__skill-tag course-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] })
    ] }),
    l && /* @__PURE__ */ m(I, { children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ m("div", { className: "object-card-bottom-bar__content", children: [
        s.type === "completedBy" && /* @__PURE__ */ m(I, { children: [
          r ? r({ avatarUrls: s.avatars }) : /* @__PURE__ */ a("div", { className: "course-object-card__facepile", children: s.avatars.map((u, h) => /* @__PURE__ */ a("img", { src: u, alt: "", className: "course-object-card__facepile-avatar" }, h)) }),
          /* @__PURE__ */ a("span", { className: "course-object-card__completed-text", children: "completed this" })
        ] }),
        s.type === "openTo" && /* @__PURE__ */ a(Ge, { items: s.items, labelAsButton: !1 }),
        s.type === "buttons" && /* @__PURE__ */ a("div", { className: "course-object-card__bottom-buttons", children: s.children })
      ] }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "course-object-card", children: p }) : /* @__PURE__ */ a(c, { to: t, className: "course-object-card", children: p });
}
function pa({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function _r({
  project: e,
  href: t = "#",
  showBookmark: n = !0,
  showBottomBar: r = !0,
  renderFacepile: o,
  LinkComponent: i = pa
}) {
  const c = i, s = /* @__PURE__ */ m("div", { className: "project-object-card__inner", children: [
    /* @__PURE__ */ m("div", { className: "project-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "folder", variant: "blueGreen", size: "small", children: "Project" }) }),
      /* @__PURE__ */ m("div", { className: "project-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Add to workspace", onClick: (l) => l.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Save project", onClick: (l) => l.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ m("div", { className: "project-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "project-object-card__title", children: e.title }),
      (e.owner || e.status) && /* @__PURE__ */ a("span", { className: "project-object-card__meta", children: [e.owner, e.status].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ m("div", { className: "project-object-card__skills", children: [
        e.skills.slice(0, 2).map((l) => /* @__PURE__ */ a("span", { className: "project-object-card__skill-tag", children: l }, l)),
        e.skills.length > 2 && /* @__PURE__ */ m("span", { className: "project-object-card__skill-tag project-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] }),
      e.projectManager && /* @__PURE__ */ m("div", { className: "project-object-card__manager", children: [
        e.projectManager.avatarSrc ? /* @__PURE__ */ a(
          "img",
          {
            src: e.projectManager.avatarSrc,
            alt: "",
            className: "project-object-card__manager-avatar"
          }
        ) : /* @__PURE__ */ a("span", { className: "project-object-card__manager-avatar project-object-card__manager-avatar--fallback", "aria-hidden": !0, children: e.projectManager.name.slice(0, 2).toUpperCase() }),
        /* @__PURE__ */ m("div", { className: "project-object-card__manager-info", children: [
          /* @__PURE__ */ a("span", { className: "project-object-card__manager-name", children: e.projectManager.name }),
          /* @__PURE__ */ a("span", { className: "project-object-card__manager-label", children: "Project manager" })
        ] })
      ] })
    ] }),
    r && /* @__PURE__ */ m(I, { children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: e.contributedBy && e.contributedBy.length > 0 && /* @__PURE__ */ m(I, { children: [
        o ? o({ avatarUrls: e.contributedBy }) : /* @__PURE__ */ a("div", { className: "project-object-card__facepile", children: e.contributedBy.map((l, p) => /* @__PURE__ */ a("img", { src: l, alt: "", className: "project-object-card__facepile-avatar" }, p)) }),
        /* @__PURE__ */ a("span", { className: "project-object-card__contributed-text", children: "contributors" })
      ] }) }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "project-object-card", children: s }) : /* @__PURE__ */ a(c, { to: t, className: "project-object-card", children: s });
}
function ma(e) {
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[1][0]).toUpperCase().slice(0, 2) : e.slice(0, 2).toUpperCase() || "?";
}
function fa({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function yr({
  person: e,
  href: t = "#",
  showBookmark: n = !0,
  renderAvatar: r,
  LinkComponent: o = fa
}) {
  const i = o, c = /* @__PURE__ */ m(I, { children: [
    /* @__PURE__ */ m("div", { className: "people-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "people-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "person", variant: "orange", size: "small", children: "People" }) }),
      /* @__PURE__ */ m("div", { className: "people-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "people-object-card__icon-btn", "aria-label": "View org chart", onClick: (s) => s.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "account_tree" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "people-object-card__icon-btn", "aria-label": "Remove from favorites", onClick: (s) => s.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] }),
      /* @__PURE__ */ a("div", { className: "people-object-card__pattern", "aria-hidden": !0 })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__avatar-wrap", children: r ? r({
      src: e.avatarSrc,
      alt: e.name,
      fallback: ma(e.name)
    }) : /* @__PURE__ */ a("img", { src: e.avatarSrc, alt: "", className: "people-object-card__avatar" }) }),
    /* @__PURE__ */ m("div", { className: "people-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "people-object-card__name", children: e.name }),
      /* @__PURE__ */ a("span", { className: "people-object-card__title", children: e.title }),
      /* @__PURE__ */ a("span", { className: "people-object-card__email", children: e.email })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__divider", "aria-hidden": !0 }),
    /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: /* @__PURE__ */ a(Ge, { items: [e.openTo], labelAsButton: !1, className: "people-object-card__open-to" }) }) })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "people-object-card", children: c }) : /* @__PURE__ */ a(i, { to: t, className: "people-object-card", children: c });
}
const G = {
  title: "Mentors",
  badge: "11",
  description: "Get guidance and support",
  recommendedLabel: "Recommended for you",
  buttonLabel: "Explore Mentors",
  buttonHref: "#"
};
function Nr({
  title: e = G.title,
  badge: t = G.badge,
  description: n = G.description,
  recommendedLabel: r = G.recommendedLabel,
  buttonLabel: o = G.buttonLabel,
  buttonHref: i = G.buttonHref,
  mentor: c,
  fixedSize: s = !0,
  LinkComponent: l
}) {
  return /* @__PURE__ */ a(
    da,
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
      fixedSize: s,
      LinkComponent: l,
      children: /* @__PURE__ */ m("div", { className: "mentor-insight-card", children: [
        /* @__PURE__ */ m("div", { className: "mentor-insight-card__profile", children: [
          /* @__PURE__ */ a("img", { src: c.avatarSrc, alt: "", className: "mentor-insight-card__avatar" }),
          /* @__PURE__ */ m("div", { className: "mentor-insight-card__info", children: [
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__name", children: c.name }),
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__role", children: c.role })
          ] })
        ] }),
        /* @__PURE__ */ m("div", { className: "mentor-insight-card__match", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined mentor-insight-card__match-icon", children: "track_changes" }),
          /* @__PURE__ */ a("span", { className: "mentor-insight-card__match-text", children: c.matchText }),
          c.matchCount > 0 && /* @__PURE__ */ m("span", { className: "mentor-insight-card__match-badge", children: [
            "+",
            c.matchCount
          ] })
        ] })
      ] })
    }
  );
}
function Ke(e, t = []) {
  let n = [];
  function r(i, c) {
    const s = d.createContext(c), l = n.length;
    n = [...n, c];
    const p = (h) => {
      const { scope: f, children: b, ..._ } = h, y = f?.[e]?.[l] || s, N = d.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ a(y.Provider, { value: N, children: b });
    };
    p.displayName = i + "Provider";
    function u(h, f) {
      const b = f?.[e]?.[l] || s, _ = d.useContext(b);
      if (_) return _;
      if (c !== void 0) return c;
      throw new Error(`\`${h}\` must be used within \`${i}\``);
    }
    return [p, u];
  }
  const o = () => {
    const i = n.map((c) => d.createContext(c));
    return function(s) {
      const l = s?.[e] || i;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return o.scopeName = e, [r, ha(o, ...t)];
}
function ha(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const c = r.reduce((s, { useScope: l, scopeName: p }) => {
        const h = l(i)[`__scope${p}`];
        return { ...s, ...h };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function R(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var ga = [
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
], A = ga.reduce((e, t) => {
  const n = se(`Primitive.${t}`), r = d.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ce(e, t) {
  e && Ft.flushSync(() => e.dispatchEvent(t));
}
var H = globalThis?.document ? d.useLayoutEffect : () => {
}, va = d[" useInsertionEffect ".trim().toString()] || H;
function We({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, c] = ba({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const u = d.useRef(e !== void 0);
    d.useEffect(() => {
      const h = u.current;
      h !== s && console.warn(
        `${r} is changing from ${h ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, r]);
  }
  const p = d.useCallback(
    (u) => {
      if (s) {
        const h = _a(u) ? u(e) : u;
        h !== e && c.current?.(h);
      } else
        i(u);
    },
    [s, e, i, c]
  );
  return [l, p];
}
function ba({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), i = d.useRef(t);
  return va(() => {
    i.current = t;
  }, [t]), d.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function _a(e) {
  return typeof e == "function";
}
function De(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function qe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = De(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : De(e[o], null);
        }
      };
  };
}
function j(...e) {
  return d.useCallback(qe(...e), e);
}
var ya = d.createContext(void 0);
function Na(e) {
  const t = d.useContext(ya);
  return e || t || "ltr";
}
function Ca(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var q = (e) => {
  const { present: t, children: n } = e, r = La(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), i = j(r.ref, wa(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
q.displayName = "Presence";
function La(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), c = e ? "mounted" : "unmounted", [s, l] = Ca(c, {
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
    const p = Y(r.current);
    i.current = s === "mounted" ? p : "none";
  }, [s]), H(() => {
    const p = r.current, u = o.current;
    if (u !== e) {
      const f = i.current, b = Y(p);
      e ? l("MOUNT") : b === "none" || p?.display === "none" ? l("UNMOUNT") : l(u && f !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), H(() => {
    if (t) {
      let p;
      const u = t.ownerDocument.defaultView ?? window, h = (b) => {
        const y = Y(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const N = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", p = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = N);
          });
        }
      }, f = (b) => {
        b.target === t && (i.current = Y(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        u.clearTimeout(p), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: d.useCallback((p) => {
      r.current = p ? getComputedStyle(p) : null, n(p);
    }, [])
  };
}
function Y(e) {
  return e?.animationName || "none";
}
function wa(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var xa = d[" useId ".trim().toString()] || (() => {
}), Ma = 0;
function Ye(e) {
  const [t, n] = d.useState(xa());
  return H(() => {
    n((r) => r ?? String(Ma++));
  }, [e]), t ? `radix-${t}` : "";
}
function Xe(e) {
  const t = e + "CollectionProvider", [n, r] = Ke(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (y) => {
    const { scope: N, children: M } = y, x = Z.useRef(null), C = Z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: N, itemMap: C, collectionRef: x, children: M });
  };
  c.displayName = t;
  const s = e + "CollectionSlot", l = se(s), p = Z.forwardRef(
    (y, N) => {
      const { scope: M, children: x } = y, C = i(s, M), L = j(N, C.collectionRef);
      return /* @__PURE__ */ a(l, { ref: L, children: x });
    }
  );
  p.displayName = s;
  const u = e + "CollectionItemSlot", h = "data-radix-collection-item", f = se(u), b = Z.forwardRef(
    (y, N) => {
      const { scope: M, children: x, ...C } = y, L = Z.useRef(null), w = j(N, L), E = i(u, M);
      return Z.useEffect(() => (E.itemMap.set(L, { ref: L, ...C }), () => {
        E.itemMap.delete(L);
      })), /* @__PURE__ */ a(f, { [h]: "", ref: w, children: x });
    }
  );
  b.displayName = u;
  function _(y) {
    const N = i(e + "CollectionConsumer", y);
    return Z.useCallback(() => {
      const x = N.collectionRef.current;
      if (!x) return [];
      const C = Array.from(x.querySelectorAll(`[${h}]`));
      return Array.from(N.itemMap.values()).sort(
        (E, k) => C.indexOf(E.ref.current) - C.indexOf(k.ref.current)
      );
    }, [N.collectionRef, N.itemMap]);
  }
  return [
    { Provider: c, Slot: p, ItemSlot: b },
    _,
    r
  ];
}
function B(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => t.current?.(...n), []);
}
function ka(e, t = globalThis?.document) {
  const n = B(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ea = "DismissableLayer", de = "dismissableLayer.update", Va = "dismissableLayer.pointerDownOutside", Sa = "dismissableLayer.focusOutside", Ae, Qe = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Je = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: c,
      onDismiss: s,
      ...l
    } = e, p = d.useContext(Qe), [u, h] = d.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, b] = d.useState({}), _ = j(t, (k) => h(k)), y = Array.from(p.layers), [N] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), M = y.indexOf(N), x = u ? y.indexOf(u) : -1, C = p.layersWithOutsidePointerEventsDisabled.size > 0, L = x >= M, w = Ta((k) => {
      const P = k.target, V = [...p.branches].some((v) => v.contains(P));
      !L || V || (o?.(k), c?.(k), k.defaultPrevented || s?.());
    }, f), E = Pa((k) => {
      const P = k.target;
      [...p.branches].some((v) => v.contains(P)) || (i?.(k), c?.(k), k.defaultPrevented || s?.());
    }, f);
    return ka((k) => {
      x === p.layers.size - 1 && (r?.(k), !k.defaultPrevented && s && (k.preventDefault(), s()));
    }, f), d.useEffect(() => {
      if (u)
        return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Ae = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(u)), p.layers.add(u), Fe(), () => {
          n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Ae);
        };
    }, [u, f, n, p]), d.useEffect(() => () => {
      u && (p.layers.delete(u), p.layersWithOutsidePointerEventsDisabled.delete(u), Fe());
    }, [u, p]), d.useEffect(() => {
      const k = () => b({});
      return document.addEventListener(de, k), () => document.removeEventListener(de, k);
    }, []), /* @__PURE__ */ a(
      A.div,
      {
        ...l,
        ref: _,
        style: {
          pointerEvents: C ? L ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: R(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: R(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: R(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Je.displayName = Ea;
var Ra = "DismissableLayerBranch", Ia = d.forwardRef((e, t) => {
  const n = d.useContext(Qe), r = d.useRef(null), o = j(t, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(A.div, { ...e, ref: o });
});
Ia.displayName = Ra;
function Ta(e, t = globalThis?.document) {
  const n = B(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          et(
            Va,
            n,
            p,
            { discrete: !0 }
          );
        };
        const p = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Pa(e, t = globalThis?.document) {
  const n = B(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && et(Sa, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Fe() {
  const e = new CustomEvent(de);
  document.dispatchEvent(e);
}
function et(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ce(o, i) : o.dispatchEvent(i);
}
function Da(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Aa = Object.freeze({
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
}), Fa = "VisuallyHidden", tt = d.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    A.span,
    {
      ...e,
      ref: t,
      style: { ...Aa, ...e.style }
    }
  )
);
tt.displayName = Fa;
var Oa = tt, U = "NavigationMenu", [ye, at, Ba] = Xe(U), [ue, ja, Za] = Xe(U), [Ne] = Ke(
  U,
  [Ba, Za]
), [za, F] = Ne(U), [$a, Ha] = Ne(U), nt = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: c = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: p,
      ...u
    } = e, [h, f] = d.useState(null), b = j(t, (V) => f(V)), _ = Na(p), y = d.useRef(0), N = d.useRef(0), M = d.useRef(0), [x, C] = d.useState(!0), [L, w] = We({
      prop: r,
      onChange: (V) => {
        const v = V !== "", O = s > 0;
        v ? (window.clearTimeout(M.current), O && C(!1)) : (window.clearTimeout(M.current), M.current = window.setTimeout(
          () => C(!0),
          s
        )), o?.(V);
      },
      defaultProp: i ?? "",
      caller: U
    }), E = d.useCallback(() => {
      window.clearTimeout(N.current), N.current = window.setTimeout(() => w(""), 150);
    }, [w]), k = d.useCallback(
      (V) => {
        window.clearTimeout(N.current), w(V);
      },
      [w]
    ), P = d.useCallback(
      (V) => {
        L === V ? window.clearTimeout(N.current) : y.current = window.setTimeout(() => {
          window.clearTimeout(N.current), w(V);
        }, c);
      },
      [L, w, c]
    );
    return d.useEffect(() => () => {
      window.clearTimeout(y.current), window.clearTimeout(N.current), window.clearTimeout(M.current);
    }, []), /* @__PURE__ */ a(
      rt,
      {
        scope: n,
        isRootMenu: !0,
        value: L,
        dir: _,
        orientation: l,
        rootNavigationMenu: h,
        onTriggerEnter: (V) => {
          window.clearTimeout(y.current), x ? P(V) : k(V);
        },
        onTriggerLeave: () => {
          window.clearTimeout(y.current), E();
        },
        onContentEnter: () => window.clearTimeout(N.current),
        onContentLeave: E,
        onItemSelect: (V) => {
          w((v) => v === V ? "" : V);
        },
        onItemDismiss: () => w(""),
        children: /* @__PURE__ */ a(
          A.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: _,
            ...u,
            ref: b
          }
        )
      }
    );
  }
);
nt.displayName = U;
var pe = "NavigationMenuSub", Ua = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: c = "horizontal",
      ...s
    } = e, l = F(pe, n), [p, u] = We({
      prop: r,
      onChange: o,
      defaultProp: i ?? "",
      caller: pe
    });
    return /* @__PURE__ */ a(
      rt,
      {
        scope: n,
        isRootMenu: !1,
        value: p,
        dir: l.dir,
        orientation: c,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (h) => u(h),
        onItemSelect: (h) => u(h),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ a(A.div, { "data-orientation": c, ...s, ref: t })
      }
    );
  }
);
Ua.displayName = pe;
var rt = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: c,
    value: s,
    onItemSelect: l,
    onItemDismiss: p,
    onTriggerEnter: u,
    onTriggerLeave: h,
    onContentEnter: f,
    onContentLeave: b
  } = e, [_, y] = d.useState(null), [N, M] = d.useState(/* @__PURE__ */ new Map()), [x, C] = d.useState(null);
  return /* @__PURE__ */ a(
    za,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: Da(s),
      baseId: Ye(),
      dir: o,
      orientation: i,
      viewport: _,
      onViewportChange: y,
      indicatorTrack: x,
      onIndicatorTrackChange: C,
      onTriggerEnter: B(u),
      onTriggerLeave: B(h),
      onContentEnter: B(f),
      onContentLeave: B(b),
      onItemSelect: B(l),
      onItemDismiss: B(p),
      onViewportContentChange: d.useCallback((L, w) => {
        M((E) => (E.set(L, w), new Map(E)));
      }, []),
      onViewportContentRemove: d.useCallback((L) => {
        M((w) => w.has(L) ? (w.delete(L), new Map(w)) : w);
      }, []),
      children: /* @__PURE__ */ a(ye.Provider, { scope: t, children: /* @__PURE__ */ a($a, { scope: t, items: N, children: c }) })
    }
  );
}, ot = "NavigationMenuList", it = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = F(ot, n), i = /* @__PURE__ */ a(A.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(A.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(ye.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(ht, { asChild: !0, children: i }) : i }) });
  }
);
it.displayName = ot;
var st = "NavigationMenuItem", [Ga, lt] = Ne(st), ct = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = Ye(), c = r || i || "LEGACY_REACT_AUTO_VALUE", s = d.useRef(null), l = d.useRef(null), p = d.useRef(null), u = d.useRef(() => {
    }), h = d.useRef(!1), f = d.useCallback((_ = "start") => {
      if (s.current) {
        u.current();
        const y = fe(s.current);
        y.length && we(_ === "start" ? y : y.reverse());
      }
    }, []), b = d.useCallback(() => {
      if (s.current) {
        const _ = fe(s.current);
        _.length && (u.current = en(_));
      }
    }, []);
    return /* @__PURE__ */ a(
      Ga,
      {
        scope: n,
        value: c,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: p,
        wasEscapeCloseRef: h,
        onEntryKeyDown: f,
        onFocusProxyEnter: f,
        onRootContentClose: b,
        onContentFocusOutside: b,
        children: /* @__PURE__ */ a(A.li, { ...o, ref: t })
      }
    );
  }
);
ct.displayName = st;
var me = "NavigationMenuTrigger", dt = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = F(me, e.__scopeNavigationMenu), c = lt(me, e.__scopeNavigationMenu), s = d.useRef(null), l = j(s, c.triggerRef, t), p = vt(i.baseId, c.value), u = bt(i.baseId, c.value), h = d.useRef(!1), f = d.useRef(!1), b = c.value === i.value;
  return /* @__PURE__ */ m(I, { children: [
    /* @__PURE__ */ a(ye.ItemSlot, { scope: n, value: c.value, children: /* @__PURE__ */ a(gt, { asChild: !0, children: /* @__PURE__ */ a(
      A.button,
      {
        id: p,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": xe(b),
        "aria-expanded": b,
        "aria-controls": u,
        ...o,
        ref: l,
        onPointerEnter: R(e.onPointerEnter, () => {
          f.current = !1, c.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: R(
          e.onPointerMove,
          Q(() => {
            r || f.current || c.wasEscapeCloseRef.current || h.current || (i.onTriggerEnter(c.value), h.current = !0);
          })
        ),
        onPointerLeave: R(
          e.onPointerLeave,
          Q(() => {
            r || (i.onTriggerLeave(), h.current = !1);
          })
        ),
        onClick: R(e.onClick, () => {
          i.onItemSelect(c.value), f.current = b;
        }),
        onKeyDown: R(e.onKeyDown, (_) => {
          const N = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          b && _.key === N && (c.onEntryKeyDown(), _.preventDefault());
        })
      }
    ) }) }),
    b && /* @__PURE__ */ m(I, { children: [
      /* @__PURE__ */ a(
        Oa,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: c.focusProxyRef,
          onFocus: (_) => {
            const y = c.contentRef.current, N = _.relatedTarget, M = N === s.current, x = y?.contains(N);
            (M || !x) && c.onFocusProxyEnter(M ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": u })
    ] })
  ] });
});
dt.displayName = me;
var Ka = "NavigationMenuLink", Oe = "navigationMenu.linkSelect", ut = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(gt, { asChild: !0, children: /* @__PURE__ */ a(
      A.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: R(
          e.onClick,
          (c) => {
            const s = c.target, l = new CustomEvent(Oe, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Oe, (p) => o?.(p), { once: !0 }), ce(s, l), !l.defaultPrevented && !c.metaKey) {
              const p = new CustomEvent(X, {
                bubbles: !0,
                cancelable: !0
              });
              ce(s, p);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ut.displayName = Ka;
var Ce = "NavigationMenuIndicator", Wa = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = F(Ce, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Ot.createPortal(
    /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(qa, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Wa.displayName = Ce;
var qa = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = F(Ce, n), i = at(n), [c, s] = d.useState(
    null
  ), [l, p] = d.useState(null), u = o.orientation === "horizontal", h = !!o.value;
  d.useEffect(() => {
    const _ = i().find((y) => y.value === o.value)?.ref.current;
    _ && s(_);
  }, [i, o.value]);
  const f = () => {
    c && p({
      size: u ? c.offsetWidth : c.offsetHeight,
      offset: u ? c.offsetLeft : c.offsetTop
    });
  };
  return he(c, f), he(o.indicatorTrack, f), l ? /* @__PURE__ */ a(
    A.div,
    {
      "aria-hidden": !0,
      "data-state": h ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...u ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), K = "NavigationMenuContent", pt = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = F(K, e.__scopeNavigationMenu), i = lt(K, e.__scopeNavigationMenu), c = j(i.contentRef, t), s = i.value === o.value, l = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(Ya, { forceMount: n, ...l, ref: c }) : /* @__PURE__ */ a(q, { present: n || s, children: /* @__PURE__ */ a(
    mt,
    {
      "data-state": xe(s),
      ...l,
      ref: c,
      onPointerEnter: R(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: R(
        e.onPointerLeave,
        Q(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
pt.displayName = K;
var Ya = d.forwardRef((e, t) => {
  const n = F(K, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return H(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), H(() => () => o(e.value), [e.value, o]), null;
}), X = "navigationMenu.rootContentDismiss", mt = d.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: c,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...p
  } = e, u = F(K, n), h = d.useRef(null), f = j(h, t), b = vt(u.baseId, r), _ = bt(u.baseId, r), y = at(n), N = d.useRef(null), { onItemDismiss: M } = u;
  d.useEffect(() => {
    const C = h.current;
    if (u.isRootMenu && C) {
      const L = () => {
        M(), s(), C.contains(document.activeElement) && o.current?.focus();
      };
      return C.addEventListener(X, L), () => C.removeEventListener(X, L);
    }
  }, [u.isRootMenu, e.value, o, M, s]);
  const x = d.useMemo(() => {
    const L = y().map((v) => v.value);
    u.dir === "rtl" && L.reverse();
    const w = L.indexOf(u.value), E = L.indexOf(u.previousValue), k = r === u.value, P = E === L.indexOf(r);
    if (!k && !P) return N.current;
    const V = (() => {
      if (w !== E) {
        if (k && E !== -1) return w > E ? "from-end" : "from-start";
        if (P && w !== -1) return w > E ? "to-start" : "to-end";
      }
      return null;
    })();
    return N.current = V, V;
  }, [u.previousValue, u.value, u.dir, y, r]);
  return /* @__PURE__ */ a(ht, { asChild: !0, children: /* @__PURE__ */ a(
    Je,
    {
      id: _,
      "aria-labelledby": b,
      "data-motion": x,
      "data-orientation": u.orientation,
      ...p,
      ref: f,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const C = new Event(X, {
          bubbles: !0,
          cancelable: !0
        });
        h.current?.dispatchEvent(C);
      },
      onFocusOutside: R(e.onFocusOutside, (C) => {
        l();
        const L = C.target;
        u.rootNavigationMenu?.contains(L) && C.preventDefault();
      }),
      onPointerDownOutside: R(e.onPointerDownOutside, (C) => {
        const L = C.target, w = y().some((k) => k.ref.current?.contains(L)), E = u.isRootMenu && u.viewport?.contains(L);
        (w || E || !u.isRootMenu) && C.preventDefault();
      }),
      onKeyDown: R(e.onKeyDown, (C) => {
        const L = C.altKey || C.ctrlKey || C.metaKey;
        if (C.key === "Tab" && !L) {
          const E = fe(C.currentTarget), k = document.activeElement, P = E.findIndex((O) => O === k), v = C.shiftKey ? E.slice(0, P).reverse() : E.slice(P + 1, E.length);
          we(v) ? C.preventDefault() : i.current?.focus();
        }
      }),
      onEscapeKeyDown: R(e.onEscapeKeyDown, (C) => {
        c.current = !0;
      })
    }
  ) });
}), Le = "NavigationMenuViewport", ft = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!F(Le, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(Xa, { ...r, ref: t }) });
});
ft.displayName = Le;
var Xa = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = F(Le, n), c = j(t, i.onViewportChange), s = Ha(
    K,
    e.__scopeNavigationMenu
  ), [l, p] = d.useState(null), [u, h] = d.useState(null), f = l ? l?.width + "px" : void 0, b = l ? l?.height + "px" : void 0, _ = !!i.value, y = _ ? i.value : i.previousValue;
  return he(u, () => {
    u && p({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ a(
    A.div,
    {
      "data-state": xe(_),
      "data-orientation": i.orientation,
      ...o,
      ref: c,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !_ && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": f,
        "--radix-navigation-menu-viewport-height": b,
        ...o.style
      },
      onPointerEnter: R(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: R(e.onPointerLeave, Q(i.onContentLeave)),
      children: Array.from(s.items).map(([M, { ref: x, forceMount: C, ...L }]) => {
        const w = y === M;
        return /* @__PURE__ */ a(q, { present: C || w, children: /* @__PURE__ */ a(
          mt,
          {
            ...L,
            ref: qe(x, (E) => {
              w && E && h(E);
            })
          }
        ) }, M);
      })
    }
  );
}), Qa = "FocusGroup", ht = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = F(Qa, n);
    return /* @__PURE__ */ a(ue.Provider, { scope: n, children: /* @__PURE__ */ a(ue.Slot, { scope: n, children: /* @__PURE__ */ a(A.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Be = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Ja = "FocusGroupItem", gt = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = ja(n), i = F(Ja, n);
    return /* @__PURE__ */ a(ue.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      A.button,
      {
        ...r,
        ref: t,
        onKeyDown: R(e.onKeyDown, (c) => {
          if (["Home", "End", ...Be].includes(c.key)) {
            let l = o().map((h) => h.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(c.key) && l.reverse(), Be.includes(c.key)) {
              const h = l.indexOf(c.currentTarget);
              l = l.slice(h + 1);
            }
            setTimeout(() => we(l)), c.preventDefault();
          }
        })
      }
    ) });
  }
);
function fe(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function we(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function en(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function he(e, t) {
  const n = B(t);
  H(() => {
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
function xe(e) {
  return e ? "open" : "closed";
}
function vt(e, t) {
  return `${e}-trigger-${t}`;
}
function bt(e, t) {
  return `${e}-content-${t}`;
}
function Q(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var tn = nt, an = it, nn = ct, rn = dt, on = ut, je = pt, sn = ft;
const _t = d.createContext(!0);
function ln({
  className: e,
  children: t,
  viewport: n = !0,
  variant: r = "underline",
  ...o
}) {
  return /* @__PURE__ */ a(_t.Provider, { value: n, children: /* @__PURE__ */ m(
    tn,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      "data-variant": r,
      className: g("nav-menu", `nav-menu--${r}`, e),
      ...o,
      children: [
        t,
        n && /* @__PURE__ */ a(dn, {})
      ]
    }
  ) });
}
function cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    an,
    {
      "data-slot": "navigation-menu-list",
      className: g("nav-menu__list", e),
      ...t
    }
  );
}
const Me = d.createContext(null);
function re({
  className: e,
  ...t
}) {
  const n = d.useRef(null);
  return /* @__PURE__ */ a(Me.Provider, { value: n, children: /* @__PURE__ */ a(
    nn,
    {
      "data-slot": "navigation-menu-item",
      className: g("nav-menu__item", e),
      ...t
    }
  ) });
}
function oe(e) {
  e.preventDefault();
}
function Cr({
  className: e,
  children: t,
  onPointerMove: n,
  onPointerLeave: r,
  onPointerEnter: o,
  onPointerMoveCapture: i,
  onPointerLeaveCapture: c,
  onPointerEnterCapture: s,
  ref: l,
  ...p
}) {
  const u = d.useContext(Me), h = d.useCallback(
    (f) => {
      u && (u.current = f), typeof l == "function" ? l(f) : l && (l.current = f);
    },
    [l, u]
  );
  return /* @__PURE__ */ a(
    rn,
    {
      "data-slot": "navigation-menu-trigger",
      className: g("nav-menu__trigger", e),
      ref: h,
      onPointerMoveCapture: (f) => {
        oe(f), i?.(f);
      },
      onPointerLeaveCapture: (f) => {
        oe(f), c?.(f);
      },
      onPointerEnterCapture: (f) => {
        oe(f), s?.(f);
      },
      onPointerMove: n,
      onPointerLeave: r,
      onPointerEnter: o,
      ...p,
      children: /* @__PURE__ */ m("span", { className: "nav-menu__trigger-label", children: [
        t,
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined nav-menu__chevron", "aria-hidden": !0, children: "expand_more" })
      ] })
    }
  );
}
function Lr({
  className: e,
  children: t,
  forceMount: n,
  ...r
}) {
  const o = d.useContext(_t), i = d.useContext(Me), c = d.useRef(null), [s, l] = d.useState({}), [p, u] = d.useState(!1), h = d.useCallback(() => {
    const f = i?.current;
    if (!f) return;
    const b = f.getBoundingClientRect(), _ = f.closest?.(".navbar"), y = _ ? _.getBoundingClientRect().bottom + 2 : b.bottom + 2;
    l({
      position: "fixed",
      top: y,
      left: b.left,
      minWidth: 200,
      zIndex: 1100,
      transform: "translateZ(0)"
    });
  }, [i]);
  return d.useLayoutEffect(() => {
    if (o || !i) return;
    const f = c.current, b = i.current, _ = () => {
      const N = b?.getAttribute?.("aria-expanded") === "true", M = f?.querySelector?.('[data-state="open"]') != null || f?.firstElementChild?.getAttribute?.("data-state") === "open", x = N || M;
      u(x), x && h();
    };
    if (_(), !b && !f) return;
    const y = new MutationObserver(_);
    return b && y.observe(b, { attributes: !0, attributeFilter: ["aria-expanded"] }), f && y.observe(f, { attributes: !0, attributeFilter: ["data-state"], subtree: !0 }), () => y.disconnect();
  }, [o, i, h]), d.useEffect(() => {
    if (!p || o) return;
    h();
    const f = requestAnimationFrame(() => h());
    return window.addEventListener("scroll", h, !0), window.addEventListener("resize", h), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", h);
    };
  }, [p, o, h]), o ? /* @__PURE__ */ a(
    je,
    {
      "data-slot": "navigation-menu-content",
      className: g("nav-menu__content", e),
      ...r
    }
  ) : /* @__PURE__ */ m(I, { children: [
    /* @__PURE__ */ a("div", { ref: c, style: { display: "contents" }, "aria-hidden": !0, children: /* @__PURE__ */ a(
      je,
      {
        "data-slot": "navigation-menu-content",
        className: g("nav-menu__content", e),
        forceMount: !0,
        style: { position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, minWidth: 0 },
        ...r,
        children: /* @__PURE__ */ a("span", { "aria-hidden": !0, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" } })
      }
    ) }),
    typeof document < "u" && p && Bt(
      /* @__PURE__ */ a(
        "div",
        {
          className: g("nav-menu__content--portal", e),
          "data-slot": "navigation-menu-content",
          style: {
            ...s,
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
function dn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: "nav-menu__viewport-wrap", children: /* @__PURE__ */ a(
    sn,
    {
      "data-slot": "navigation-menu-viewport",
      className: g("nav-menu__viewport", e),
      ...t
    }
  ) });
}
function ie({
  className: e,
  active: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ a(
    on,
    {
      "data-slot": "navigation-menu-link",
      "data-active": t ? "true" : void 0,
      className: g("nav-menu__link", e),
      ...r,
      children: r.asChild ? n : /* @__PURE__ */ a("span", { className: "nav-menu__link-label", children: n })
    }
  );
}
function wr({
  className: e,
  orientation: t = "horizontal",
  ...n
}) {
  return /* @__PURE__ */ a(
    te.Root,
    {
      "data-slot": "tabs",
      "data-orientation": t,
      orientation: t,
      className: g(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        e
      ),
      ...n
    }
  );
}
const un = ee(
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
function xr({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    te.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: g(un({ variant: t }), e),
      ...n
    }
  );
}
function Mr({
  className: e,
  leadingIcon: t,
  badge: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ m(
    te.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: g(
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
function kr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Content,
    {
      "data-slot": "tabs-content",
      className: g("flex-1 outline-none", e),
      ...t
    }
  );
}
function Er({
  className: e,
  bordered: t,
  children: n,
  ...r
}) {
  const o = /* @__PURE__ */ a("div", { "data-slot": "data-table-scroll", className: "relative w-full overflow-x-auto [-webkit-overflow-scrolling:touch]", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "data-table",
      className: g("min-w-full border-collapse text-sm", e),
      ...r,
      children: n
    }
  ) });
  return t ? /* @__PURE__ */ a("div", { "data-slot": "data-table-bordered", className: "rounded-xl border border-[#e5e7eb] bg-white overflow-hidden", children: o }) : o;
}
function Vr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "data-table-header",
      className: g("[&_tr]:border-b", e),
      ...t
    }
  );
}
function Sr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "data-table-body",
      className: g("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Rr({
  className: e,
  variant: t = "default",
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "data-table-row",
      className: g(
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
function Ir({
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
      className: g(
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
function Tr({
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
      className: g(
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
function Pr({
  ...e
}) {
  return /* @__PURE__ */ a(T.Root, { "data-slot": "select", ...e });
}
function Dr({
  ...e
}) {
  return /* @__PURE__ */ a(T.Group, { "data-slot": "select-group", ...e });
}
function Ar({
  ...e
}) {
  return /* @__PURE__ */ a(T.Value, { "data-slot": "select-value", ...e });
}
const pn = {
  default: "border-transparent bg-[rgba(235,247,255,1)] text-[var(--color-button-primary-text)] hover:bg-[rgba(220,240,255,1)] focus-visible:bg-[rgba(220,240,255,1)] data-[placeholder]:text-[var(--color-button-primary-text)]/70 [&_svg]:opacity-80",
  primary: "border-transparent bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-bg-hover)] focus-visible:bg-[var(--color-button-primary-bg-hover)] data-[placeholder]:text-[var(--color-button-primary-text)] [&_svg]:opacity-80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 dark:hover:bg-secondary/80 dark:focus-visible:bg-secondary/80 data-[placeholder]:text-secondary-foreground/70 [&_svg]:text-secondary-foreground/80",
  outline: "border border-input bg-transparent text-foreground hover:bg-accent/50 focus-visible:bg-accent/50 dark:bg-input/30 dark:hover:bg-input/50 dark:focus-visible:bg-input/50 data-[placeholder]:text-muted-foreground [&_svg]:text-muted-foreground"
}, mn = {
  default: "h-9 min-h-9 px-3 py-2 [&_svg]:size-4",
  sm: "h-8 min-h-8 px-2.5 py-1.5 [&_svg]:size-3.5"
}, fn = {
  default: void 0,
  sm: { height: 32, minHeight: 32, paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, fontSize: "0.75rem" }
};
function Fr({
  className: e,
  size: t = "default",
  variant: n = "default",
  children: r,
  ...o
}) {
  const i = t === "small" ? "sm" : t;
  return /* @__PURE__ */ m(
    T.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      "data-variant": n,
      style: fn[i],
      className: g(
        "flex w-fit items-center justify-between gap-2 rounded-[var(--radius-8)] border whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        mn[i],
        pn[n],
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(T.Icon, { asChild: !0, children: /* @__PURE__ */ a(He, { className: "opacity-50" }) })
      ]
    }
  );
}
function Or({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ a(T.Portal, { children: /* @__PURE__ */ m(
    T.Content,
    {
      "data-slot": "select-content",
      className: g(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-[var(--radius-8)] border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ a(hn, {}),
        /* @__PURE__ */ a(
          T.Viewport,
          {
            className: g(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(gn, {})
      ]
    }
  ) });
}
function Br({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Label,
    {
      "data-slot": "select-label",
      className: g("px-2 py-1.5 text-foreground", e),
      ...t
    }
  );
}
function jr({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ m(
    T.Item,
    {
      "data-slot": "select-item",
      className: g(
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
            children: /* @__PURE__ */ a(T.ItemIndicator, { children: /* @__PURE__ */ a(jt, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(T.ItemText, { children: t })
      ]
    }
  );
}
function Zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.Separator,
    {
      "data-slot": "select-separator",
      className: g("pointer-events-none -mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function hn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: g("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(Zt, { className: "size-4" })
    }
  );
}
function gn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    T.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: g("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(He, { className: "size-4" })
    }
  );
}
const vn = "relative box-border h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] border border-solid border-[rgba(44,140,201,1)] bg-[rgba(235,253,255,1)]";
function bn(e, t) {
  return e == null ? "…" : `${Math.min(100, Math.max(0, Math.round(e / t * 100)))}% complete`;
}
const _n = d.forwardRef(
  ({
    className: e,
    label: t,
    labelClassName: n,
    labelVariant: r = "none",
    scaleStartLabel: o = "0",
    scaleEndLabel: i = "100",
    progressValueLabel: c,
    completeLabelOverride: s,
    value: l,
    max: p = 100,
    ...u
  }, h) => {
    const f = typeof l == "number" && !Number.isNaN(l) ? l : null, b = typeof p == "number" && p > 0 ? p : 100, _ = f != null ? Math.min(100, Math.max(0, f / b * 100)) : 0, y = c ?? (f != null ? String(Math.min(100, Math.max(0, Math.round(f / b * 100)))) : "…"), N = s ?? bn(f, b), M = r === "scale" || r === "complete-left" || t != null, x = /* @__PURE__ */ a(
      le.Root,
      {
        ref: h,
        "data-slot": "progress",
        className: g(vn, M ? void 0 : e),
        value: f,
        max: b,
        ...u,
        children: /* @__PURE__ */ a(
          le.Indicator,
          {
            "data-slot": "progress-indicator",
            className: g(
              "h-full w-full flex-1 rounded-[var(--radius-full)] bg-[rgba(44,140,201,1)]",
              "origin-left transition-transform duration-500 ease-out",
              "data-[state=indeterminate]:w-[36%] data-[state=indeterminate]:max-w-none data-[state=indeterminate]:flex-none"
            ),
            style: f != null ? { transform: `translateX(-${100 - _}%)` } : void 0
          }
        )
      }
    );
    if (!M)
      return x;
    if (r === "scale") {
      const C = Math.min(100, Math.max(0, _)), L = f === null;
      return /* @__PURE__ */ m(
        "div",
        {
          "data-slot": "progress-field",
          className: g("inline-flex w-full max-w-full flex-col gap-1", e),
          children: [
            x,
            /* @__PURE__ */ m(
              "div",
              {
                "data-slot": "progress-scale-row",
                className: g("relative mt-1 min-h-[1.125rem]", n),
                children: [
                  /* @__PURE__ */ m("div", { className: "flex justify-between text-xs text-muted-foreground tabular-nums", children: [
                    /* @__PURE__ */ a("span", { "data-slot": "progress-scale-start", children: o }),
                    /* @__PURE__ */ a("span", { "data-slot": "progress-scale-end", children: i })
                  ] }),
                  /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-end", children: /* @__PURE__ */ a(
                    "div",
                    {
                      "data-slot": "progress-current-cluster",
                      className: "absolute bottom-0 z-10 flex items-baseline gap-1.5 whitespace-nowrap text-xs text-muted-foreground",
                      style: L ? {
                        left: "50%",
                        transform: "translateX(-50%)"
                      } : {
                        left: `${C}%`,
                        transform: "translateX(-100%)"
                      },
                      children: /* @__PURE__ */ a("span", { className: "tabular-nums", "data-slot": "progress-current-value", children: y })
                    }
                  ) })
                ]
              }
            )
          ]
        }
      );
    }
    return r === "complete-left" ? /* @__PURE__ */ m(
      "div",
      {
        "data-slot": "progress-field",
        className: g("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          x,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-complete-label",
              className: g("block text-left text-xs text-muted-foreground", n),
              children: N
            }
          )
        ]
      }
    ) : /* @__PURE__ */ m(
      "div",
      {
        "data-slot": "progress-field",
        className: g("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          x,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-label",
              className: g("text-xs text-muted-foreground", n),
              children: t
            }
          )
        ]
      }
    );
  }
);
_n.displayName = le.Root.displayName;
const ke = d.createContext(null);
function ae() {
  const e = d.useContext(ke);
  if (!e) throw new Error("Stepper components must be used within <Stepper>");
  return e;
}
const yt = d.createContext(null), Ee = d.createContext(null);
function Nt() {
  const e = d.useContext(Ee);
  if (e == null) throw new Error("StepperItem subcomponents must be inside <StepperItem>");
  return e;
}
const Ct = d.forwardRef(
  ({ className: e, value: t, onValueChange: n, size: r = "default", children: o, ...i }, c) => /* @__PURE__ */ a(ke.Provider, { value: { value: t, onValueChange: n, size: r }, children: /* @__PURE__ */ a(
    "nav",
    {
      ref: c,
      "aria-label": "Steps",
      "data-slot": "stepper",
      "data-size": r,
      className: g("w-full", e),
      ...i,
      children: o
    }
  ) })
);
Ct.displayName = "Stepper";
const Ve = d.forwardRef(
  ({ className: e, segmentIndex: t, style: n, children: r, ...o }, i) => {
    const { value: c, size: s } = ae(), l = d.useContext(yt), p = typeof l == "number" ? l : t ?? 0, u = s === "sm", h = Number(c), f = Number.isFinite(h) && h > Number(p);
    return /* @__PURE__ */ m(
      "li",
      {
        ref: i,
        ...o,
        "data-slot": "stepper-separator",
        "data-state": f ? "filled" : "upcoming",
        "aria-hidden": !0,
        className: g(
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
              "data-filled": f ? "true" : "false",
              className: "box-border block h-[2px] w-full min-w-[1rem] shrink-0 rounded-full"
            }
          ),
          r
        ]
      }
    );
  }
);
Ve.displayName = "StepperSeparator";
function yn(e) {
  if (!d.isValidElement(e)) return !1;
  const t = e.type;
  return t === Ve || t?.displayName === "StepperSeparator";
}
function Nn(e) {
  return d.isValidElement(e) && e.type.displayName === "StepperItem";
}
const Lt = d.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const o = [];
    let i = 0, c = 0;
    return d.Children.forEach(t, (s) => {
      if (yn(s)) {
        const l = c++;
        o.push(
          /* @__PURE__ */ a(yt.Provider, { value: l, children: d.cloneElement(s, {
            key: s.key ?? `stepper-sep-inner-${l}`,
            segmentIndex: l
          }) }, s.key ?? `stepper-sep-${l}`)
        );
        return;
      }
      if (Nn(s)) {
        const l = i++;
        o.push(
          d.cloneElement(s, {
            key: s.key ?? `stepper-item-${l}`,
            step: l
          })
        );
        return;
      }
      o.push(s);
    }), /* @__PURE__ */ a(
      "ol",
      {
        ref: r,
        "data-slot": "stepper-list",
        className: g("m-0 flex w-full list-none items-start gap-0 p-0", e),
        ...n,
        children: o
      }
    );
  }
);
Lt.displayName = "StepperList";
const wt = d.forwardRef(
  ({ className: e, step: t, children: n, ...r }, o) => {
    const i = t ?? 0, { value: c, size: s } = ae(), l = i < c ? "complete" : i === c ? "active" : "upcoming", p = s === "sm";
    return /* @__PURE__ */ a(Ee.Provider, { value: i, children: /* @__PURE__ */ a(
      "li",
      {
        ref: o,
        "data-slot": "stepper-item",
        "data-state": l,
        className: g(
          "relative flex min-w-0 shrink-0 flex-col items-center",
          p ? "gap-1" : "gap-2",
          e
        ),
        ...r,
        children: n
      }
    ) });
  }
);
wt.displayName = "StepperItem";
const Cn = d.forwardRef(
  ({ className: e, type: t = "button", disabled: n, onClick: r, children: o, ...i }, c) => {
    const { value: s, onValueChange: l, size: p } = ae(), u = Nt(), h = l != null && !n && u <= s, b = g(
      "group/stepper-trigger flex rounded-md",
      p === "sm" ? "w-auto flex-row items-center gap-2 text-left" : "w-full max-w-[10rem] flex-col items-center gap-2 text-center"
    ), _ = g(
      b,
      h && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90",
      !l && "cursor-default",
      l && u > s && "cursor-default",
      e
    );
    return l ? /* @__PURE__ */ a(
      "button",
      {
        ref: c,
        type: t,
        "data-slot": "stepper-trigger",
        "aria-current": u === s ? "step" : void 0,
        disabled: n ?? u > s,
        className: g(
          _,
          "disabled:pointer-events-none disabled:opacity-100"
        ),
        onClick: (y) => {
          r?.(y), !y.defaultPrevented && h && l(u);
        },
        ...i,
        children: o
      }
    ) : /* @__PURE__ */ a(
      "div",
      {
        "data-slot": "stepper-trigger",
        "aria-current": u === s ? "step" : void 0,
        className: _,
        ...i,
        children: o
      }
    );
  }
);
Cn.displayName = "StepperTrigger";
const Ze = "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]";
function ze(e, t = "default") {
  const n = t === "sm";
  return g(
    "flex shrink-0 items-center justify-center rounded-[var(--radius-full)] font-semibold tabular-nums transition-colors",
    n ? "size-6 text-[10px]" : "size-8 text-xs",
    e === "complete" && g(Ze, n ? "[&_.material-symbols-outlined]:text-[14px] [&_.material-symbols-outlined]:leading-none" : "[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none"),
    e === "active" && g(
      Ze,
      n ? "ring-[1.5px] ring-[var(--color-button-primary-bg)] ring-offset-[1.5px] ring-offset-background" : "ring-2 ring-[var(--color-button-primary-bg)] ring-offset-2 ring-offset-background"
    ),
    e === "upcoming" && "bg-[rgba(235,253,255,0.6)] text-[var(--muted-foreground)]"
  );
}
function $e({ sm: e }) {
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
const xt = d.forwardRef(
  ({ className: e, stepDisplay: t, forceState: n, children: r, ...o }, i) => {
    const c = d.useContext(Ee), s = d.useContext(ke), l = s?.size ?? "default", p = l === "sm";
    if (n != null) {
      const y = t ?? 1, N = n === "complete";
      return /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "stepper-indicator",
          "data-state": n,
          className: g(ze(n, l), e),
          ...o,
          children: r ?? (N ? /* @__PURE__ */ a($e, { sm: p }) : y)
        }
      );
    }
    if (c == null || s == null)
      throw new Error(
        "StepperIndicator must be inside StepperItem, or pass forceState for a static preview."
      );
    const u = c, h = s.value, f = u < h ? "complete" : u === h ? "active" : "upcoming", b = t ?? u + 1, _ = f === "complete";
    return /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "stepper-indicator",
        "data-state": f,
        className: g(ze(f, l), e),
        ...o,
        children: r ?? (_ ? /* @__PURE__ */ a($e, { sm: p }) : b)
      }
    );
  }
);
xt.displayName = "StepperIndicator";
const Mt = d.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = Nt(), { value: o, size: i } = ae(), c = r === o, s = r < o;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: n,
        "data-slot": "stepper-title",
        className: g(
          "text-center font-medium leading-tight break-words",
          i === "sm" ? "max-w-[7rem] text-[11px]" : "max-w-[10rem] text-xs",
          (c || s) && "text-foreground",
          !c && !s && "text-muted-foreground",
          e
        ),
        ...t
      }
    );
  }
);
Mt.displayName = "StepperTitle";
const Ln = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "span",
    {
      ref: n,
      "data-slot": "stepper-description",
      className: g(
        "max-w-[10rem] text-center text-[11px] leading-snug text-muted-foreground break-words",
        e
      ),
      ...t
    }
  )
);
Ln.displayName = "StepperDescription";
function zr({ ...e }) {
  return /* @__PURE__ */ a(D.Root, { "data-slot": "dialog", ...e });
}
function $r({ ...e }) {
  return /* @__PURE__ */ a(D.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function wn({ ...e }) {
  return /* @__PURE__ */ a(D.Portal, { "data-slot": "dialog-portal", ...e });
}
function Hr({ ...e }) {
  return /* @__PURE__ */ a(D.Close, { "data-slot": "dialog-close", ...e });
}
function xn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: g("ef-dialog__overlay", e),
      ...t
    }
  );
}
function Ur({
  className: e,
  children: t,
  showCloseButton: n = !0,
  steps: r,
  currentStep: o = 0,
  ...i
}) {
  return /* @__PURE__ */ m(wn, { children: [
    /* @__PURE__ */ a(xn, {}),
    /* @__PURE__ */ m(
      D.Content,
      {
        "data-slot": "dialog-content",
        className: g("ef-dialog__content", e),
        ...i,
        children: [
          t,
          n && /* @__PURE__ */ m(D.Close, { "data-slot": "dialog-close", className: "ef-dialog__close-btn", children: [
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: 20 }, "aria-hidden": !0, children: "close" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function Gr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: g("ef-dialog__header", e),
      ...t
    }
  );
}
function Kr({ steps: e, currentStep: t = 0, className: n }) {
  return /* @__PURE__ */ a(Ct, { value: t, size: "sm", className: g("ef-dialog__stepper", n), children: /* @__PURE__ */ a(Lt, { children: e.map((r, o) => /* @__PURE__ */ m(d.Fragment, { children: [
    o > 0 && /* @__PURE__ */ a(Ve, {}),
    /* @__PURE__ */ m(wt, { children: [
      /* @__PURE__ */ a(xt, {}),
      /* @__PURE__ */ a(Mt, { children: r.label })
    ] })
  ] }, o)) }) });
}
function Wr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-body",
      className: g("ef-dialog__body", e),
      ...t
    }
  );
}
function qr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: g("ef-dialog__footer", e),
      ...t
    }
  );
}
function Yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Title,
    {
      "data-slot": "dialog-title",
      className: g("ef-dialog__title", e),
      ...t
    }
  );
}
function Xr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Description,
    {
      "data-slot": "dialog-description",
      className: g("ef-dialog__description", e),
      ...t
    }
  );
}
const Mn = d.forwardRef(
  ({ className: e, value: t, color: n = "grey", size: r = "md", ...o }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      "data-slot": "number-badge",
      className: g(
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
Mn.displayName = "NumberBadge";
function kn(e) {
  return e === !0 || e === "alert" ? "stat-card__badge--alert" : e === "success" ? "stat-card__badge--success" : e === "info" ? "stat-card__badge--info" : "";
}
const En = d.forwardRef(
  ({ className: e, icon: t = "person", label: n, value: r, pct: o, color: i = "grey", size: c = "lg", variant: s = "outlined", iconBadge: l, ...p }, u) => /* @__PURE__ */ m(
    "div",
    {
      ref: u,
      "data-slot": "stat-card",
      className: g(
        "stat-card",
        `stat-card--${c}`,
        `stat-card--${i}`,
        `stat-card--${s}`,
        e
      ),
      ...p,
      children: [
        /* @__PURE__ */ m("div", { className: "stat-card__icon", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: t }),
          l && /* @__PURE__ */ a("span", { className: g("stat-card__badge", kn(l)), "aria-hidden": !0 })
        ] }),
        /* @__PURE__ */ m("div", { className: "stat-card__text", children: [
          /* @__PURE__ */ a("span", { className: "stat-card__label", children: n }),
          /* @__PURE__ */ m("div", { className: "stat-card__value-row", children: [
            /* @__PURE__ */ a("span", { className: "stat-card__value", children: r }),
            o && /* @__PURE__ */ m("span", { className: "stat-card__pct", children: [
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
En.displayName = "StatCard";
const Vn = d.forwardRef(
  ({ className: e, size: t = "lg", children: n, ...r }, o) => /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      "data-slot": "stat-card-group",
      className: g(
        "stat-card-group",
        `stat-card-group--${t}`,
        e
      ),
      ...r,
      children: d.Children.map(n, (i, c) => /* @__PURE__ */ m(I, { children: [
        c > 0 && /* @__PURE__ */ a("div", { className: "stat-card-group__divider", "aria-hidden": !0 }),
        i
      ] }))
    }
  )
);
Vn.displayName = "StatCardGroup";
function Sn({
  to: e,
  children: t,
  className: n,
  onClick: r
}) {
  return /* @__PURE__ */ a("a", { href: e, className: n, onClick: r, children: t });
}
function Rn({
  tabs: e,
  avatarMenuItems: t,
  user: n,
  switchOptions: r = [],
  onSwitchUser: o,
  activePath: i = "",
  homePath: c = "/",
  logoSrc: s = "/eightfold-logo.svg",
  productName: l = "Career Hub",
  productIconSrc: p = "/career-hub-icon.svg",
  hideProductIcon: u = !1,
  searchPlaceholder: h = "Type to search",
  onSearchChange: f,
  onSearchIconClick: b,
  actionButtons: _ = [],
  LinkComponent: y = Sn,
  NavLinkComponent: N
}) {
  const [M, x] = Se(!1), [C, L] = Se(!1), w = y, E = i === "/profile", k = n.avatarType === "photo" && n.avatarPhotoSrc ? n.avatarPhotoSrc.replace("w=200&h=200", "w=80&h=80") : null, P = (v) => {
    const O = v.chevron && v.subItems && v.subItems.length > 0;
    if (v.path && O) {
      const $ = i === v.path || v.subItems.some((z) => z.path === i);
      return /* @__PURE__ */ a("li", { className: "nav-menu__item", children: /* @__PURE__ */ m(S.Root, { children: [
        /* @__PURE__ */ a(S.Trigger, { asChild: !0, children: /* @__PURE__ */ m("button", { className: `navbar__tab navbar__tab--dropdown ${$ ? "navbar__tab--active" : ""}`, type: "button", children: [
          /* @__PURE__ */ a("span", { className: "navbar__tab-label", children: v.label }),
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", style: { fontSize: 16, marginLeft: 2 }, children: "expand_more" })
        ] }) }),
        /* @__PURE__ */ a(S.Portal, { children: /* @__PURE__ */ a(S.Content, { className: "navbar__tab-menu-inner", align: "start", sideOffset: 4, style: { zIndex: 99999 }, children: v.subItems.map((z) => /* @__PURE__ */ a(S.Item, { asChild: !0, children: /* @__PURE__ */ a(w, { to: z.path, className: "nav-menu__link navbar__tab-menu-item", children: z.label }) }, z.path)) }) })
      ] }) }, v.id);
    }
    if (v.path) {
      const $ = N && N !== y, z = i === v.path || v.path === "/" && !i;
      return $ ? /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: z, children: /* @__PURE__ */ a(N, { to: v.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ m("span", { className: "navbar__tab-label", children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, v.id) : /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: z, children: /* @__PURE__ */ a(w, { to: v.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ m("span", { className: "navbar__tab-label", children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, v.id);
    }
    return /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { href: "#", className: "navbar__tab", children: /* @__PURE__ */ m("span", { className: "navbar__tab-label", children: [
      v.label,
      v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) }) }, v.id);
  }, V = (v) => v.path ? v.chevron && v.subItems && v.subItems.length > 0 ? /* @__PURE__ */ m("div", { className: "navbar__menu-group", children: [
    /* @__PURE__ */ a(w, { to: v.path, className: "navbar__menu-link navbar__menu-link--parent", onClick: () => x(!1), children: v.label }),
    /* @__PURE__ */ a("div", { className: "navbar__menu-sublinks", children: v.subItems.map(($) => /* @__PURE__ */ a(
      w,
      {
        to: $.path,
        className: "navbar__menu-link navbar__menu-link--sub",
        onClick: () => x(!1),
        children: $.label
      },
      $.path
    )) })
  ] }, v.id) : /* @__PURE__ */ m(
    w,
    {
      to: v.path,
      className: "navbar__menu-link",
      onClick: () => x(!1),
      children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    v.id
  ) : /* @__PURE__ */ m(
    "a",
    {
      href: "#",
      className: "navbar__menu-link",
      onClick: (O) => {
        O.preventDefault(), v.onClick?.(), x(!1);
      },
      children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    v.id
  );
  return /* @__PURE__ */ m("nav", { className: "navbar", children: [
    /* @__PURE__ */ m("div", { className: "navbar__inner", children: [
      /* @__PURE__ */ m("div", { className: "navbar__left", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "navbar__menu-btn",
            onClick: () => x(!0),
            "aria-label": "Open menu",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__menu-btn-icon", children: "menu" })
          }
        ),
        /* @__PURE__ */ m(w, { to: c, className: "navbar__branding", children: [
          /* @__PURE__ */ a("img", { src: s, alt: "", className: "navbar__logo" }),
          /* @__PURE__ */ a("div", { className: "navbar__divider" }),
          /* @__PURE__ */ m("div", { className: "navbar__product", children: [
            !u && /* @__PURE__ */ a("img", { src: p, alt: "", className: "navbar__product-icon", width: 40, height: 40 }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__product-name ${l.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
                children: (() => {
                  const v = l.trim().split(/\s+/);
                  return v.length <= 1 ? l : /* @__PURE__ */ m(I, { children: [
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v[0] }),
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v.slice(1).join(" ") })
                  ] });
                })()
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(ln, { viewport: !1, variant: "underline", className: "navbar__tabs", delayDuration: 400, skipDelayDuration: 200, children: /* @__PURE__ */ a(cn, { className: "navbar__tabs-list", children: e.map(P) }) })
      ] }),
      /* @__PURE__ */ m("div", { className: "navbar__right", children: [
        /* @__PURE__ */ m("div", { className: "navbar__search-wrap", children: [
          /* @__PURE__ */ m("div", { className: "navbar__search", children: [
            /* @__PURE__ */ a("span", { className: "navbar__search-input", children: /* @__PURE__ */ a(
              Yt,
              {
                size: "small",
                shape: "pill",
                leadingIcon: "search",
                placeholder: h,
                "aria-label": "Search",
                onChange: (v) => f?.(v.target.value)
              }
            ) }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "navbar__search-icon-btn navbar__btn",
                "aria-label": "Search",
                onClick: () => b?.(),
                children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "search" })
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "navbar__divider navbar__divider--vertical" })
        ] }),
        /* @__PURE__ */ m("div", { className: "navbar__right-icons", children: [
          _.map((v, O) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "navbar__btn navbar__btn--action",
              "aria-label": v.ariaLabel,
              onClick: v.onClick,
              children: v.iconSrc ? /* @__PURE__ */ a("img", { src: v.iconSrc, alt: "", className: "navbar__btn-icon-img", width: 20, height: 20 }) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: v.icon ?? "circle" })
            },
            O
          )),
          /* @__PURE__ */ a("button", { type: "button", className: "navbar__btn navbar__btn--menu", "aria-label": "App switcher", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "apps" }) })
        ] }),
        /* @__PURE__ */ m(S.Root, { children: [
          /* @__PURE__ */ a(S.Trigger, { asChild: !0, children: /* @__PURE__ */ m("button", { type: "button", className: "navbar__avatar", "aria-label": "Open profile menu", children: [
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__avatar-inner ${n.avatarColor ? "navbar__avatar-inner--colored" : ""}`,
                style: n.avatarColor ? { backgroundColor: n.avatarColor } : void 0,
                children: C || !k ? /* @__PURE__ */ a("span", { className: "navbar__avatar-initials", children: n.avatarInitials ?? "?" }) : /* @__PURE__ */ a(
                  "img",
                  {
                    src: k,
                    alt: "",
                    className: "navbar__avatar-img",
                    onError: () => L(!0)
                  }
                )
              }
            ),
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__avatar-caret", "aria-hidden": !0, children: "expand_more" })
          ] }) }),
          /* @__PURE__ */ a(S.Portal, { children: /* @__PURE__ */ a(S.Content, { className: "navbar__avatar-menu", align: "end", sideOffset: 8, children: /* @__PURE__ */ m("div", { className: "navbar__avatar-menu-inner", children: [
            t.map((v) => /* @__PURE__ */ a(S.Item, { asChild: !0, children: /* @__PURE__ */ a(
              w,
              {
                to: v.path,
                className: `navbar__avatar-menu-item ${v.label === "My Profile" && E ? "navbar__avatar-menu-item--active" : ""}`,
                children: v.label
              }
            ) }, v.label)),
            r.length > 0 && o && /* @__PURE__ */ m(I, { children: [
              /* @__PURE__ */ a("div", { className: "navbar__avatar-menu-divider" }),
              /* @__PURE__ */ m("div", { className: "navbar__avatar-menu-switch", children: [
                /* @__PURE__ */ a(
                  "input",
                  {
                    type: "text",
                    placeholder: "Switch To...",
                    className: "navbar__avatar-menu-input",
                    "aria-label": "Switch to"
                  }
                ),
                r.map((v) => /* @__PURE__ */ a(S.Item, { asChild: !0, children: /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "navbar__avatar-menu-option",
                    onClick: () => o(v.userId),
                    children: v.label
                  }
                ) }, v.userId))
              ] })
            ] })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a(D.Root, { open: M, onOpenChange: x, children: /* @__PURE__ */ m(D.Portal, { children: [
      /* @__PURE__ */ a(D.Overlay, { className: "navbar__menu-overlay" }),
      /* @__PURE__ */ m(D.Content, { className: "navbar__menu-drawer", "aria-describedby": void 0, children: [
        /* @__PURE__ */ m("div", { className: "navbar__menu-header", children: [
          /* @__PURE__ */ a(
            "span",
            {
              className: `navbar__product-name ${l.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
              children: (() => {
                const v = l.trim().split(/\s+/);
                return v.length <= 1 ? l : /* @__PURE__ */ m(I, { children: [
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v[0] }),
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v.slice(1).join(" ") })
                ] });
              })()
            }
          ),
          /* @__PURE__ */ a(D.Close, { asChild: !0, children: /* @__PURE__ */ a("button", { type: "button", className: "navbar__menu-close", "aria-label": "Close menu", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" }) }) })
        ] }),
        /* @__PURE__ */ a("nav", { className: "navbar__menu-nav", children: e.map(V) })
      ] })
    ] }) })
  ] });
}
const kt = d.createContext({
  variant: "career-hub",
  careerHubSize: "parent"
});
function In() {
  return d.useContext(kt);
}
const Tn = ee(
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
), Et = d.forwardRef(
  ({ className: e, variant: t, chSize: n = "parent", sticky: r = !1, overlayBackground: o = !1, ...i }, c) => {
    const s = t ?? "career-hub", l = {
      variant: s,
      careerHubSize: s === "career-hub" ? n : "parent"
    };
    return /* @__PURE__ */ a(kt.Provider, { value: l, children: /* @__PURE__ */ a(
      "header",
      {
        ref: c,
        "data-slot": "header",
        "data-variant": s,
        "data-ch-size": s === "career-hub" ? n : void 0,
        className: g(
          Tn({ variant: s }),
          o && s === "career-hub" && "!bg-transparent",
          r && "sticky top-0 z-30",
          r && !(o && s === "career-hub") && "backdrop-blur-sm supports-[backdrop-filter]:bg-[var(--background)]/95",
          s === "career-hub" && r && !(o && s === "career-hub") && "supports-[backdrop-filter]:bg-[var(--color-background1-grey)]/80",
          r && o && s === "career-hub" && "supports-[backdrop-filter]:bg-transparent",
          e
        ),
        ...i
      }
    ) });
  }
);
Et.displayName = "Header";
const Pn = {
  profile: "h-[var(--header-career-hub-profile-height)] min-h-[var(--header-career-hub-profile-height)] flex-wrap items-start content-start gap-y-3 pb-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:pb-6 md:gap-5",
  parent: "h-[var(--header-career-hub-parent-height)] min-h-[var(--header-career-hub-parent-height)] items-start gap-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)]",
  child: "h-[var(--header-career-hub-child-height)] min-h-[var(--header-career-hub-child-height)] items-start gap-3 pb-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)]"
}, Vt = d.forwardRef(
  ({ className: e, actions: t, children: n, ...r }, o) => {
    const { variant: i, careerHubSize: c } = In(), s = "flex min-h-12 w-full max-w-[100vw] items-start gap-3 py-0 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:h-[var(--navbar-height,3.75rem)] md:gap-4", l = g(
      "flex w-full max-w-[100vw] items-start",
      Pn[c]
    );
    return /* @__PURE__ */ m(
      "div",
      {
        ref: o,
        "data-slot": "header-toolbar",
        className: g(i === "talent-acquisition" ? s : l, e),
        ...r,
        children: [
          n,
          t != null ? /* @__PURE__ */ a("div", { "data-slot": "header-actions", children: t }) : null
        ]
      }
    );
  }
);
Vt.displayName = "HeaderToolbar";
const Dn = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-actions", className: g(e), ...t })
);
Dn.displayName = "HeaderActions";
const An = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "header-group",
      className: g("flex min-w-0 items-center gap-2 md:gap-3", e),
      ...t
    }
  )
);
An.displayName = "HeaderGroup";
const St = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("h1", { ref: n, "data-slot": "header-title", className: g(e), ...t })
);
St.displayName = "HeaderTitle";
const Rt = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-text-group", className: g(e), ...t })
);
Rt.displayName = "HeaderTextGroup";
const It = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("p", { ref: n, "data-slot": "header-secondary", className: g(e), ...t })
);
It.displayName = "HeaderSecondary";
const Fn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_ch_prof)"><rect width="1440" height="540" fill="white"/><path d="M760 77.8125L860 20V120L760 177.812V77.8125Z" fill="#C15151"/><path d="M960 77.8125L860 20V120L960 177.812V77.8125Z" fill="#F29D31"/><path d="M1060 251.25L1160 193.438V293.438L1060 351.25V251.25Z" fill="#69717F"/><path d="M1260 251.25L1160 193.438V293.438L1260 351.25V251.25Z" fill="#2DB3C7"/><path d="M1160 -6.5625L1060 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#F29D31"/><path d="M1360 93.4375L1260 35.625V135.625L1360 193.438V93.4375Z" fill="#F29D31"/><path d="M960 -22.1875L860 -80V20L960 77.8125V-22.1875Z" fill="#2DB3C7"/><path d="M1460 351.25L1360 293.438V393.438L1460 451.25V351.25Z" fill="#858B98"/><path d="M1460 451.25L1360 393.438V493.438L1460 551.25V451.25Z" fill="#2DB3C7"/><path d="M1460 251.25L1360 193.438V293.438L1460 351.25V251.25Z" fill="#E46F6F"/><path d="M1160 -6.5625L1260 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1160 93.4375L1260 35.625V135.625L1160 193.438V93.4375Z" fill="#69717F"/><path d="M1360 -6.5625L1460 -64.375V35.625L1360 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1360 93.4375L1460 35.625V135.625L1360 193.438V93.4375Z" fill="#69717F"/><path d="M1060 35.625L960 -22.1875V77.8125L1060 135.625V35.625Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', On = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_ch_def)"><rect width="1440" height="292" fill="white"/><path d="M760 80.8585L860 20.7829V124.697L760 184.773V80.8585Z" fill="#C15151"/><path d="M960 80.8585L860 20.7829V124.697L960 184.773V80.8585Z" fill="#F29D31"/><path d="M1060 261.085L1160 201.01V304.924L1060 365V261.085Z" fill="#69717F"/><path d="M1260 261.085L1160 201.01V304.924L1260 365V261.085Z" fill="#2DB3C7"/><path d="M1160 -6.8194L1060 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#F29D31"/><path d="M1360 97.0952L1260 37.0196V140.934L1360 201.01V97.0952Z" fill="#F29D31"/><path d="M960 -23.056L860 -83.1317V20.7829L960 80.8586V-23.056Z" fill="#2DB3C7"/><path d="M1460 261.085L1360 201.01V304.924L1460 365V261.085Z" fill="#E46F6F"/><path d="M1160 -6.8194L1260 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1160 97.0952L1260 37.0196V140.934L1160 201.01V97.0952Z" fill="#69717F"/><path d="M1360 -6.8194L1460 -66.895V37.0196L1360 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1360 97.0952L1460 37.0196V140.934L1360 201.01V97.0952Z" fill="#69717F"/><path d="M1060 37.0196L960 -23.0561V80.8585L1060 140.934V37.0196Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function Bn(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? Fn : On)}")`;
}
const jn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_hex_prof)"><rect width="1440" height="540" fill="#ffffff"/><path d="M578.038 175.577V234.422L629 263.845L679.962 234.422V175.577L629 146.154L578.038 175.577Z" stroke="#A9B0F5" stroke-width="2"/><path d="M629 157L587.431 181V229L629 253L670.569 229V181L629 157Z" fill="#A9B0F5"/><path opacity="0.5" d="M629 173L601.287 189V221L629 237L656.713 221V189L629 173Z" fill="#5962B7"/><path d="M835 110L807.287 126V158L835 174L862.713 158V126L835 110Z" fill="#FFA3A3"/><path opacity="0.5" d="M835 121L816.813 131.5V152.5L835 163L853.187 152.5V131.5L835 121Z" fill="#C15151"/><path d="M990 153L913.79 197V285L990 329L1066.21 285V197L990 153Z" fill="#BEC2CA"/><path opacity="0.5" d="M989.5 181L938.838 210.75V270.25L989.5 300L1040.16 270.25V210.75L989.5 181Z" fill="#69717F"/><path d="M1124 139L981.106 221.5V386.5L1124 469L1266.89 386.5V221.5L1124 139Z" fill="#FFA3A3"/><path opacity="0.5" d="M1124 194L1028.74 249V359L1124 414L1219.26 359V249L1124 194Z" fill="#C15151"/><path d="M1285 291L1243.43 315V363L1285 387L1326.57 363V315L1285 291Z" fill="#A9B0F5"/><path opacity="0.5" d="M1285 307L1257.29 323V355L1285 371L1312.71 355V323L1285 307Z" fill="#5962B7"/><path d="M1108 -78L1031.79 -34V54L1108 98L1184.21 54V-34L1108 -78Z" fill="#BEC2CA"/><path opacity="0.5" d="M1107.5 -50L1056.84 -20.25V39.25L1107.5 69L1158.16 39.25V-20.25L1107.5 -50Z" fill="#69717F"/><path d="M1200.59 -181.179V20.1777L1371.5 120.839L1542.41 20.1777V-181.179L1371.5 -281.84L1200.59 -181.179Z" stroke="#BEC2CA" stroke-width="2"/><path d="M1371.5 -251L1222.11 -165V7L1371.5 93L1520.89 7V-165L1371.5 -251Z" fill="#BEC2CA"/><path opacity="0.5" d="M1371.5 -195L1271.47 -137V-21L1371.5 37L1471.53 -21V-137L1371.5 -195Z" fill="#69717F"/><path d="M1315.41 113.32V229.679L1414 287.839L1512.59 229.679V113.32L1414 55.1602L1315.41 113.32Z" stroke="#FFA3A3" stroke-width="2"/><path d="M1414 72L1327.4 122V222L1414 272L1500.6 222V122L1414 72Z" fill="#FFA3A3"/><path opacity="0.5" d="M1414 105L1355.98 138.5V205.5L1414 239L1472.02 205.5V138.5L1414 105Z" fill="#C15151"/><path d="M1363 56L1339.62 69.5V96.5L1363 110L1386.38 96.5V69.5L1363 56Z" fill="#FFCD78"/><path opacity="0.5" d="M1363 65L1347.41 74V92L1363 101L1378.59 92V74L1363 65Z" fill="#C97E19"/><path d="M1321 -50L1279.43 -26V22L1321 46L1362.57 22V-26L1321 -50Z" fill="#A9B0F5"/><path opacity="0.5" d="M1321 -34L1293.29 -18V14L1321 30L1348.71 14V-18L1321 -34Z" fill="#5962B7"/><path d="M756 256L686.718 296V376L756 416L825.282 376V296L756 256Z" fill="#FFCD78"/><path opacity="0.5" d="M756 283L710.101 309.5V362.5L756 389L801.899 362.5V309.5L756 283Z" fill="#C97E19"/><path d="M861.637 -14.9229V40.9219L910 68.8447L958.363 40.9219V-14.9229L910 -42.8457L861.637 -14.9229Z" stroke="#FFCD78" stroke-width="2"/><path d="M910 -29L873.627 -8V34L910 55L946.373 34V-8L910 -29Z" fill="#FFCD78"/><path opacity="0.5" d="M910 -14L886.617 -0.5V26.5L910 40L933.383 26.5V-0.5L910 -14Z" fill="#C97E19"/><path d="M788 155L764.617 168.5V195.5L788 209L811.383 195.5V168.5L788 155Z" fill="#FFCD78"/><path opacity="0.5" d="M788 164L772.412 173V191L788 200L803.588 191V173L788 164Z" fill="#C97E19"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 417.531)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 441.758)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 465.984)" stroke="#BEC2CA" stroke-width="2"/></g><defs><clipPath id="ef_hex_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', Zn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_hex_def)"><rect width="1440" height="292" fill="#ffffff"/><path d="M578.038 175.577V234.422L629 263.845L679.962 234.422V175.577L629 146.154L578.038 175.577Z" stroke="#A9B0F5" stroke-width="2"/><path d="M629 157L587.431 181V229L629 253L670.569 229V181L629 157Z" fill="#A9B0F5"/><path opacity="0.5" d="M629 173L601.287 189V221L629 237L656.713 221V189L629 173Z" fill="#5962B7"/><path d="M835 110L807.287 126V158L835 174L862.713 158V126L835 110Z" fill="#FFA3A3"/><path opacity="0.5" d="M835 121L816.813 131.5V152.5L835 163L853.187 152.5V131.5L835 121Z" fill="#C15151"/><path d="M990 153L913.79 197V285L990 329L1066.21 285V197L990 153Z" fill="#BEC2CA"/><path opacity="0.5" d="M989.5 181L938.838 210.75V270.25L989.5 300L1040.16 270.25V210.75L989.5 181Z" fill="#69717F"/><path d="M1124 139L981.106 221.5V386.5L1124 469L1266.89 386.5V221.5L1124 139Z" fill="#FFA3A3"/><path opacity="0.5" d="M1124 194L1028.74 249V359L1124 414L1219.26 359V249L1124 194Z" fill="#C15151"/><path d="M1285 291L1243.43 315V363L1285 387L1326.57 363V315L1285 291Z" fill="#A9B0F5"/><path d="M1108 -78L1031.79 -34V54L1108 98L1184.21 54V-34L1108 -78Z" fill="#BEC2CA"/><path opacity="0.5" d="M1107.5 -50L1056.84 -20.25V39.25L1107.5 69L1158.16 39.25V-20.25L1107.5 -50Z" fill="#69717F"/><path d="M1200.59 -181.179V20.1777L1371.5 120.839L1542.41 20.1777V-181.179L1371.5 -281.84L1200.59 -181.179Z" stroke="#BEC2CA" stroke-width="2"/><path d="M1371.5 -251L1222.11 -165V7L1371.5 93L1520.89 7V-165L1371.5 -251Z" fill="#BEC2CA"/><path opacity="0.5" d="M1371.5 -195L1271.47 -137V-21L1371.5 37L1471.53 -21V-137L1371.5 -195Z" fill="#69717F"/><path d="M1315.41 113.32V229.679L1414 287.839L1512.59 229.679V113.32L1414 55.1602L1315.41 113.32Z" stroke="#FFA3A3" stroke-width="2"/><path d="M1414 72L1327.4 122V222L1414 272L1500.6 222V122L1414 72Z" fill="#FFA3A3"/><path opacity="0.5" d="M1414 105L1355.98 138.5V205.5L1414 239L1472.02 205.5V138.5L1414 105Z" fill="#C15151"/><path d="M1363 56L1339.62 69.5V96.5L1363 110L1386.38 96.5V69.5L1363 56Z" fill="#FFCD78"/><path opacity="0.5" d="M1363 65L1347.41 74V92L1363 101L1378.59 92V74L1363 65Z" fill="#C97E19"/><path d="M1321 -50L1279.43 -26V22L1321 46L1362.57 22V-26L1321 -50Z" fill="#A9B0F5"/><path opacity="0.5" d="M1321 -34L1293.29 -18V14L1321 30L1348.71 14V-18L1321 -34Z" fill="#5962B7"/><path d="M756 256L686.718 296V376L756 416L825.282 376V296L756 256Z" fill="#FFCD78"/><path opacity="0.5" d="M756 283L710.101 309.5V362.5L756 389L801.899 362.5V309.5L756 283Z" fill="#C97E19"/><path d="M861.637 -14.9229V40.9219L910 68.8447L958.363 40.9219V-14.9229L910 -42.8457L861.637 -14.9229Z" stroke="#FFCD78" stroke-width="2"/><path d="M910 -29L873.627 -8V34L910 55L946.373 34V-8L910 -29Z" fill="#FFCD78"/><path opacity="0.5" d="M910 -14L886.617 -0.5V26.5L910 40L933.383 26.5V-0.5L910 -14Z" fill="#C97E19"/><path d="M788 155L764.617 168.5V195.5L788 209L811.383 195.5V168.5L788 155Z" fill="#FFCD78"/><path opacity="0.5" d="M788 164L772.412 173V191L788 200L803.588 191V173L788 164Z" fill="#C97E19"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 417.531)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 441.758)" stroke="#BEC2CA" stroke-width="2"/><line y1="-1" x2="484.534" y2="-1" transform="matrix(-0.866025 -0.5 -0.5 0.866025 1235.67 465.984)" stroke="#BEC2CA" stroke-width="2"/></g><defs><clipPath id="ef_hex_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function zn(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? jn : Zn)}")`;
}
const $n = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_bhex_prof)"><rect width="1440" height="540" fill="white"/><path d="M488.925 76.1641L601.357 143.335V277.676L488.925 344.847L376.492 277.676V143.335L488.925 76.1641Z" fill="#2C8CC9"/><path d="M964.109 -124.617L1060.84 -66.8124V48.7973L964.109 106.602L867.375 48.7973V-66.8124L964.109 -124.617Z" fill="#2C8CC9"/><path d="M1392.62 -19.25L1480.87 33.4329V138.799L1392.62 191.482L1304.38 138.799V33.4329L1392.62 -19.25Z" fill="#2C8CC9"/><path d="M764.702 260.262L813.635 289.53V348.067L764.702 377.335L715.77 348.067V289.53L764.702 260.262Z" fill="#2C8CC9"/><path d="M1102.71 134.41L1211.74 199.532V329.776L1102.71 394.898L993.668 329.776V199.532L1102.71 134.41Z" fill="#2C8CC9"/><path d="M98.5909 46.6055L167.182 87.581V169.532L98.5909 210.508L30 169.532V87.581L98.5909 46.6055Z" fill="#2C8CC9"/></g><defs><clipPath id="ef_bhex_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', Hn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_bhex_def)"><rect width="1440" height="292" fill="white"/><path d="M355 66.7148L434.5 114.412V209.805L355 257.502L275.5 209.805V114.412L355 66.7148Z" fill="#2C8CC9"/><path d="M691.002 -75.8594L759.402 -34.8131V47.2794L691.002 88.3257L622.602 47.2794V-34.8131L691.002 -75.8594Z" fill="#2C8CC9"/><path d="M1307 153.793L1371.1 192.241V269.138L1307 307.587L1242.9 269.138V192.241L1307 153.793Z" fill="#2C8CC9"/><path d="M994.002 -1.03906L1056.4 36.3702V111.189L994.002 148.598L931.602 111.189V36.3702L994.002 -1.03906Z" fill="#2C8CC9"/><path d="M549.998 197.438L584.598 218.22V259.786L549.998 280.569L515.398 259.786V218.22L549.998 197.438Z" fill="#2C8CC9"/><path d="M788.998 108.07L866.098 154.312V246.796L788.998 293.038L711.898 246.796V154.312L788.998 108.07Z" fill="#2C8CC9"/><path d="M79 45.7227L127.5 74.8187V133.011L79 162.107L30.5 133.011V74.8187L79 45.7227Z" fill="#2C8CC9"/><path d="M1455 5.19531L1488.8 25.4587V65.9854L1455 86.2487L1421.2 65.9854V25.4587L1455 5.19531Z" fill="#2C8CC9"/><path d="M1187 18.7031L1229.4 44.1622V95.0803L1187 120.539L1144.6 95.0803V44.1622L1187 18.7031Z" fill="#2C8CC9"/></g><defs><clipPath id="ef_bhex_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function Un(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? $n : Hn)}")`;
}
const Gn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_wave_def)"><rect width="1440" height="292" fill="white"/><path d="M 650,12 C 800,-5 980,40 1140,25 C 1280,12 1380,42 1440,48 L 1440,90 C 1380,84 1280,54 1140,67 C 980,82 800,37 650,54 Z" fill="#2DB3C7" opacity="0.9"/><path d="M 720,80 C 870,58 1050,102 1190,88 C 1330,74 1400,108 1440,115 L 1440,158 C 1400,151 1330,121 1190,135 C 1050,149 870,105 720,126 Z" fill="#F29D31" opacity="0.85"/><path d="M 580,144 C 730,120 920,164 1070,150 C 1220,136 1360,168 1440,175 L 1440,218 C 1360,211 1220,179 1070,193 C 920,207 730,163 580,187 Z" fill="#C15151" opacity="0.85"/><path d="M 760,207 C 900,186 1060,222 1200,210 C 1320,200 1400,228 1440,234 L 1440,272 C 1400,266 1320,242 1200,252 C 1060,264 900,228 760,247 Z" fill="#A9B0F5" opacity="0.80"/><path d="M 860,258 C 1000,242 1140,268 1280,258 C 1360,252 1420,270 1440,274 L 1440,292 L 860,292 Z" fill="#FFCD78" opacity="0.75"/></g><defs><clipPath id="ef_wave_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>', Kn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_wave_prof)"><rect width="1440" height="540" fill="white"/><path d="M 600,22 C 780,2 1000,55 1180,38 C 1320,24 1400,56 1440,65 L 1440,130 C 1400,121 1320,89 1180,103 C 1000,119 780,66 600,85 Z" fill="#2DB3C7" opacity="0.9"/><path d="M 680,142 C 860,114 1080,168 1250,150 C 1360,136 1418,172 1440,180 L 1440,242 C 1418,234 1360,198 1250,216 C 1080,234 860,180 680,207 Z" fill="#F29D31" opacity="0.85"/><path d="M 550,260 C 730,232 960,290 1140,270 C 1300,252 1400,286 1440,295 L 1440,368 C 1400,359 1300,325 1140,343 C 960,363 730,305 550,332 Z" fill="#C15151" opacity="0.85"/><path d="M 640,380 C 820,354 1060,406 1240,388 C 1360,374 1418,405 1440,413 L 1440,480 C 1418,472 1360,441 1240,455 C 1060,473 820,421 640,446 Z" fill="#A9B0F5" opacity="0.80"/><path d="M 780,478 C 960,456 1140,492 1300,479 C 1380,472 1428,488 1440,492 L 1440,540 L 780,540 Z" fill="#FFCD78" opacity="0.75"/></g><defs><clipPath id="ef_wave_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>';
function Wn(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? Kn : Gn)}")`;
}
function qn(e) {
  return e === "talent-acquisition" ? "linear-gradient(180deg, color-mix(in srgb, var(--color-background2-blue) 50%, transparent) 0%, var(--background) 92%)" : "linear-gradient(180deg, color-mix(in srgb, var(--color-background1-grey) 65%, transparent) 0%, var(--color-background2-grey) 95%)";
}
function Yn(e, t) {
  const n = !!t.src?.trim(), r = !n && t.wavesVariant != null, o = !n && !r && t.blueHexagonsVariant != null, i = !n && !r && !o && t.hexagonsVariant != null, c = e === "career-hub" && !n && !r && !i && !o && t.chevronsVariant != null;
  return n && t.src ? {
    hasImage: !0,
    isChevrons: !1,
    isHexagons: !1,
    fillStyle: {
      backgroundImage: t.imageScrim ? `${qn(e)}, url(${t.src})` : `url(${t.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  } : r && t.wavesVariant ? {
    hasImage: !1,
    isChevrons: !1,
    isHexagons: !0,
    fillStyle: {
      backgroundImage: Wn(t.wavesVariant),
      backgroundPosition: "right top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  } : o && t.blueHexagonsVariant ? {
    hasImage: !1,
    isChevrons: !1,
    isHexagons: !0,
    fillStyle: {
      backgroundImage: Un(t.blueHexagonsVariant),
      backgroundPosition: "right top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  } : i && t.hexagonsVariant ? {
    hasImage: !1,
    isChevrons: !1,
    isHexagons: !0,
    fillStyle: {
      backgroundImage: zn(t.hexagonsVariant),
      backgroundPosition: "right top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  } : c && t.chevronsVariant ? {
    hasImage: !1,
    isChevrons: !0,
    isHexagons: !1,
    fillStyle: {
      backgroundColor: "var(--color-background1-grey)",
      backgroundImage: Bn(t.chevronsVariant),
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
const Tt = d.forwardRef(
  ({
    className: e,
    variant: t,
    src: n,
    imageScrim: r = !0,
    chevronsVariant: o,
    hexagonsVariant: i,
    blueHexagonsVariant: c,
    wavesVariant: s,
    children: l,
    ...p
  }, u) => {
    const { fillStyle: h, hasImage: f, isChevrons: b, isHexagons: _ } = Yn(t, {
      src: n,
      imageScrim: r,
      chevronsVariant: o,
      hexagonsVariant: i,
      blueHexagonsVariant: c,
      wavesVariant: s
    });
    return /* @__PURE__ */ m(
      "div",
      {
        ref: u,
        "data-slot": "product-background",
        "data-variant": t,
        className: g("relative isolate w-full overflow-hidden", e),
        ...p,
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              "aria-hidden": !0,
              "data-slot": "product-background-fill",
              ...f ? { "data-has-image": "" } : {},
              ...b ? { "data-ch-chevrons": "" } : {},
              ..._ ? { "data-hexagons": "" } : {},
              className: g(
                "pointer-events-none absolute inset-0 -z-10",
                (f || b || _) && "min-h-full min-w-full"
              ),
              style: h
            }
          ),
          /* @__PURE__ */ a("div", { className: "relative min-h-0", children: l })
        ]
      }
    );
  }
);
Tt.displayName = "ProductBackground";
const Qr = "/eightfold-logo.svg", Jr = "/ai-agent.svg", Xn = "/copilot.svg", eo = ["talent-acquisition", "career-hub"], Qn = {
  campaigns: "Campaigns",
  "career-exchange": "Career Exchange",
  "career-hub": "Career Hub",
  "customer-community": "Customer Community",
  "resource-management": "Resource management",
  "talent-acquisition": "Talent Acquisition",
  "talent-design": "Talent Design",
  "talent-flex": "Talent Flex",
  "talent-university": "Talent University"
}, J = "/product-logos", W = {
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
function to(e, t = "medium") {
  return `${J}/${W[e][t]}`;
}
function ao(e, t = "medium") {
  return {
    productName: Qn[e],
    productIconSrc: `${J}/${W[e][t]}`
  };
}
const no = Object.keys(W).reduce(
  (e, t) => (e[t] = {
    small: `${J}/${W[t].small}`,
    medium: `${J}/${W[t].medium}`
  }, e),
  {}
), ro = [
  { label: "My Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
  { label: "Help", path: "/help" },
  { label: "Sign out", path: "/sign-out" }
], oo = [
  { id: "home", label: "Home", path: "/" },
  { id: "goals", label: "Goals", path: "/goals" },
  { id: "career-navigator", label: "Career navigator", path: "/career-navigator" },
  {
    id: "marketplace",
    label: "Marketplace",
    path: "/marketplace",
    chevron: !0,
    subItems: [
      { label: "Learning", path: "/marketplace/learning" },
      { label: "Projects", path: "/marketplace/projects" },
      { label: "Mentorship", path: "/marketplace/mentorship" }
    ]
  },
  {
    id: "my-activity",
    label: "My activity",
    path: "/my-activity",
    chevron: !0,
    subItems: [
      { label: "Goals", path: "/my-activity/goals" },
      { label: "Learning", path: "/my-activity/learning" },
      { label: "Contributions", path: "/my-activity/contributions" }
    ]
  },
  { id: "people", label: "People", path: "/people" }
], io = [
  { id: "home", label: "Home", path: "/" },
  { id: "goals", label: "Goals", path: "/goals" },
  { id: "career-navigator", label: "Career navigator", path: "/career-navigator" },
  {
    id: "marketplace",
    label: "Marketplace",
    path: "/marketplace",
    chevron: !0,
    subItems: [
      { label: "Learning", path: "/marketplace/learning" },
      { label: "Projects", path: "/marketplace/projects" },
      { label: "Mentorship", path: "/marketplace/mentorship" }
    ]
  },
  {
    id: "my-activity",
    label: "My activity",
    path: "/my-activity",
    chevron: !0,
    subItems: [
      { label: "Goals", path: "/my-activity/goals" },
      { label: "Learning", path: "/my-activity/learning" },
      { label: "Contributions", path: "/my-activity/contributions" }
    ]
  },
  { id: "people", label: "People", path: "/people" },
  { id: "my-team", label: "My team", path: "/my-team" },
  { id: "workforce", label: "Workforce Readiness", path: "/workforce" }
], so = [
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
], lo = [
  { id: "home", label: "Home", path: "/" },
  { id: "my-goals", label: "My goals", path: "/goals" },
  { id: "career-navigator", label: "Career navigator", path: "/career-navigator" },
  {
    id: "marketplace",
    label: "Marketplace",
    path: "/marketplace",
    chevron: !0,
    subItems: [
      { label: "Learning", path: "/marketplace/learning" },
      { label: "Projects", path: "/marketplace/projects" },
      { label: "Mentorship", path: "/marketplace/mentorship" }
    ]
  },
  {
    id: "my-activity",
    label: "My activity",
    path: "/my-activity",
    chevron: !0,
    subItems: [
      { label: "Goals", path: "/my-activity/goals" },
      { label: "Learning", path: "/my-activity/learning" },
      { label: "Contributions", path: "/my-activity/contributions" }
    ]
  },
  { id: "people", label: "People", path: "/people" },
  { id: "my-team", label: "My team", path: "/my-team" },
  { id: "workforce", label: "Workforce Readiness", path: "/workforce" }
], co = [
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
], uo = "Search for positions or candidates", po = [
  { iconSrc: Xn, ariaLabel: "Copilot" },
  { icon: "work_outline", ariaLabel: "Talent" },
  { icon: "notifications", ariaLabel: "Notifications" }
];
function mo({
  chSize: e = "parent",
  title: t,
  secondary: n,
  actions: r,
  navbarProps: o,
  chevronsVariant: i,
  hexagonsVariant: c,
  children: s
}) {
  const l = i ?? (e === "profile" ? "profile" : "default");
  return /* @__PURE__ */ m(I, { children: [
    /* @__PURE__ */ a("div", { className: "career-hub-shell", children: /* @__PURE__ */ a(Rn, { ...o }) }),
    /* @__PURE__ */ a(Tt, { variant: "career-hub", ...c ? { hexagonsVariant: c } : { chevronsVariant: l }, children: /* @__PURE__ */ a("div", { className: "career-hub-shell", children: /* @__PURE__ */ a(Et, { variant: "career-hub", chSize: e, overlayBackground: !0, children: /* @__PURE__ */ a(Vt, { actions: r, children: /* @__PURE__ */ m(Rt, { children: [
      /* @__PURE__ */ a(St, { children: t }),
      n && /* @__PURE__ */ a(It, { children: n })
    ] }) }) }) }) }),
    s
  ] });
}
export {
  Jr as AI_AGENT_LOGO_PATH,
  dr as Badge,
  ur as Breadcrumb,
  vr as BreadcrumbEllipsis,
  mr as BreadcrumbItem,
  fr as BreadcrumbLink,
  pr as BreadcrumbList,
  hr as BreadcrumbPage,
  gr as BreadcrumbSeparator,
  $t as Button,
  lr as ButtonDropdown,
  so as CAREER_HUB_CHRO_TABS,
  lo as CAREER_HUB_HRBP_TABS,
  Xn as COPILOT_LOGO_PATH,
  go as CORNER_RADIUS_TOKENS,
  mo as CareerHubShell,
  br as CourseObjectCard,
  Er as DataTable,
  Sr as DataTableBody,
  Tr as DataTableCell,
  Ir as DataTableHead,
  Vr as DataTableHeader,
  Rr as DataTableRow,
  zr as Dialog,
  Wr as DialogBody,
  Hr as DialogClose,
  Ur as DialogContent,
  Xr as DialogDescription,
  qr as DialogFooter,
  Gr as DialogHeader,
  xn as DialogOverlay,
  wn as DialogPortal,
  Kr as DialogStepper,
  Yr as DialogTitle,
  $r as DialogTrigger,
  ne as DropdownMenu,
  Kt as DropdownMenuContent,
  Wt as DropdownMenuItem,
  Gt as DropdownMenuPortal,
  qt as DropdownMenuSeparator,
  Ut as DropdownMenuTrigger,
  Qr as EIGHTFOLD_LOGO_PATH,
  ro as EMPLOYEE_AVATAR_MENU_ITEMS,
  oo as EMPLOYEE_NON_MANAGER_TABS,
  Et as Header,
  Dn as HeaderActions,
  An as HeaderGroup,
  It as HeaderSecondary,
  Rt as HeaderTextGroup,
  St as HeaderTitle,
  Vt as HeaderToolbar,
  Yt as Input,
  da as InsightCard,
  io as MANAGER_TABS,
  Nr as MentorInsightCard,
  Rn as Navbar,
  ln as NavigationMenu,
  Lr as NavigationMenuContent,
  re as NavigationMenuItem,
  ie as NavigationMenuLink,
  cn as NavigationMenuList,
  Cr as NavigationMenuTrigger,
  dn as NavigationMenuViewport,
  Mn as NumberBadge,
  Ge as OpenTo,
  eo as PRIMARY_NAVBAR_PRODUCT_IDS,
  Qn as PRODUCT_NAMES,
  yr as PeopleObjectCard,
  _e as Pill,
  Tt as ProductBackground,
  _n as Progress,
  _r as ProjectObjectCard,
  vo as SPACING_TOKENS,
  Pr as Select,
  Or as SelectContent,
  Dr as SelectGroup,
  jr as SelectItem,
  Br as SelectLabel,
  gn as SelectScrollDownButton,
  hn as SelectScrollUpButton,
  Zr as SelectSeparator,
  Fr as SelectTrigger,
  Ar as SelectValue,
  Jt as SkillTag,
  En as StatCard,
  Vn as StatCardGroup,
  Ct as Stepper,
  Ln as StepperDescription,
  xt as StepperIndicator,
  wt as StepperItem,
  Lt as StepperList,
  Ve as StepperSeparator,
  Mt as StepperTitle,
  Cn as StepperTrigger,
  po as TALENT_ACQUISITION_ACTION_BUTTONS,
  co as TALENT_ACQUISITION_RECRUITER_TABS,
  uo as TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
  wr as Tabs,
  kr as TabsContent,
  xr as TabsList,
  Mr as TabsTrigger,
  ea as Tag,
  cr as TagGroup,
  na as badgeVariants,
  zt as buttonVariants,
  ao as getNavbarProductConfig,
  to as getProductLogoPath,
  no as productLogos,
  un as tabsListVariants
};
