import { jsxs as p, Fragment as I, jsx as a } from "react/jsx-runtime";
import * as c from "react";
import z, { isValidElement as ve, cloneElement as ge, forwardRef as Dt, useState as Te } from "react";
import { Slot as be, createSlot as se } from "@radix-ui/react-slot";
import { cva as ee } from "class-variance-authority";
import { clsx as Ot } from "clsx";
import { twMerge as At } from "tailwind-merge";
import * as A from "@radix-ui/react-dropdown-menu";
import * as Ie from "@radix-ui/react-toggle-group";
import * as jt from "react-dom";
import Vt, { createPortal as Ft } from "react-dom";
import * as te from "@radix-ui/react-tabs";
import { Check as Bt, ChevronDown as Ue, ChevronUp as zt } from "lucide-react";
import * as L from "@radix-ui/react-select";
import * as le from "@radix-ui/react-progress";
import * as D from "@radix-ui/react-dialog";
import { CORNER_RADIUS_TOKENS as io, SPACING_TOKENS as so } from "./tokens.js";
function h(...e) {
  return At(Ot(e));
}
const $t = ee("btn", {
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
function Le(e, t) {
  return e == null ? null : ve(e) ? ge(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function Ht({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  badge: d,
  children: s,
  ...l
}) {
  const m = r ? be : "button", v = o != null || i != null || d != null ? /* @__PURE__ */ p(I, { children: [
    o != null && Le(o, "inline-start"),
    s,
    d != null && /* @__PURE__ */ a("span", { className: "btn__badge", "data-slot": "button-badge", children: d > 99 ? "99+" : d }),
    i != null && Le(i, "inline-end")
  ] }) : s;
  return /* @__PURE__ */ a(
    m,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: h($t({ variant: t, size: n, className: e })),
      ...l,
      children: v
    }
  );
}
function Ut(e) {
  return /* @__PURE__ */ a(
    A.Root,
    {
      "data-slot": "dropdown-menu",
      ...e
    }
  );
}
function Gt(e) {
  return /* @__PURE__ */ a(
    A.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Kt(e) {
  return /* @__PURE__ */ a(A.Portal, { ...e });
}
function Zt({
  className: e,
  sideOffset: t = 4,
  align: n = "start",
  ...r
}) {
  return /* @__PURE__ */ a(A.Portal, { children: /* @__PURE__ */ a(
    A.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: h(e),
      ...r
    }
  ) });
}
function Wt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Item,
    {
      "data-slot": "dropdown-menu-item",
      className: h(e),
      ...t
    }
  );
}
function qt({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    A.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: h(e),
      ...t
    }
  );
}
const ne = Object.assign(Ut, {
  Trigger: Gt,
  Portal: Kt,
  Content: Zt,
  Item: Wt,
  Separator: qt
});
function Jn({
  children: e,
  menu: t,
  variant: n = "outline",
  size: r = "default",
  trigger: o,
  buttonProps: i,
  align: d = "end",
  sideOffset: s = 4
}) {
  const l = o ?? /* @__PURE__ */ a(Ht, { variant: n, size: r, ...i, children: e });
  return /* @__PURE__ */ p(ne, { children: [
    /* @__PURE__ */ a(ne.Trigger, { asChild: !0, children: l }),
    /* @__PURE__ */ a(ne.Content, { align: d, sideOffset: s, children: t })
  ] });
}
const Yt = Dt(function({
  size: t = "medium",
  shape: n = "rounded",
  state: r = "default",
  leadingIcon: o,
  trailingIcon: i,
  onClear: d,
  className: s = "",
  disabled: l,
  type: m = "text",
  ...u
}, v) {
  const f = [
    "input",
    `input--${t}`,
    `input--${n}`,
    r !== "default" && `input--${r}`,
    l && "input--disabled",
    s
  ].filter(Boolean).join(" "), b = (_) => typeof _ == "string" ? /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: _ }) : _;
  return /* @__PURE__ */ p("div", { className: f, children: [
    o != null && /* @__PURE__ */ a("span", { className: "input__leading-icon", "aria-hidden": !0, children: b(o) }),
    /* @__PURE__ */ a(
      "input",
      {
        ref: v,
        type: m,
        className: "input__field",
        disabled: l,
        "aria-invalid": r === "error" ? !0 : void 0,
        ...u
      }
    ),
    (i != null || d) && /* @__PURE__ */ a("span", { className: "input__trailing", children: d ? /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "input__clear",
        onClick: d,
        disabled: l,
        "aria-label": "Clear",
        children: i != null ? b(i) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" })
      }
    ) : /* @__PURE__ */ a("span", { className: "input__trailing-icon", "aria-hidden": !0, children: b(i) }) })
  ] });
});
function _e({ icon: e, children: t, variant: n = "neutral", size: r = "medium", className: o = "" }) {
  return /* @__PURE__ */ p("span", { className: `pill pill--${n} pill--${r} ${o}`.trim(), children: [
    e && /* @__PURE__ */ a("span", { className: "material-symbols-outlined pill__icon", children: e }),
    t
  ] });
}
function Xt({ trend: e, size: t }) {
  const n = t === "lg" ? 20 : t === "md" ? 18 : 14, r = t === "lg" ? 28 : t === "md" ? 24 : 20, o = e === "exceed" ? "arrow_upward" : e === "meet" ? "remove" : "arrow_downward";
  return /* @__PURE__ */ a(
    "span",
    {
      className: h("skill-tag__trend", `skill-tag__trend--${e}`),
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
const Jt = c.forwardRef(
  ({
    className: e,
    children: t,
    size: n = "md",
    variant: r = "default",
    action: o = "none",
    active: i = !1,
    endorseCount: d,
    trend: s,
    upskilling: l = !1,
    onAction: m,
    ...u
  }, v) => {
    const f = n === "lg" ? 20 : n === "md" ? 18 : 14;
    return /* @__PURE__ */ p(
      "span",
      {
        ref: v,
        "data-slot": "skill-tag",
        className: h(
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
              onClick: m,
              "aria-label": i ? "Remove" : "Add",
              children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: f }, "aria-hidden": !0, children: i ? "close" : "add" })
            }
          ),
          o === "save" && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn",
              onClick: m,
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
          o === "endorse" && /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              className: "skill-tag__action-btn skill-tag__action-btn--endorse",
              onClick: m,
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
                d != null && /* @__PURE__ */ a("span", { className: "skill-tag__endorse-count", children: d })
              ]
            }
          )
        ]
      }
    );
  }
);
Jt.displayName = "SkillTag";
function Pe(e, t) {
  return e == null ? null : ve(e) ? ge(e, {
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
  disabled: d = !1,
  leadingIcon: s,
  trailingIcon: l
}) {
  const m = h(
    "tag",
    r === "24" && "tag--24",
    r === "30" && "tag--30",
    r === "44" && "tag--44",
    n === "selected" && "tag--selected",
    n === "disabled" && "tag--disabled",
    i
  );
  return /* @__PURE__ */ p("span", { className: m, "data-value": o, children: [
    s != null && Pe(s, "inline-start"),
    e,
    l != null && Pe(l, "inline-end"),
    t && !d && /* @__PURE__ */ a(
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
  return h("tag", "tag--selectable", `tag--${e}`);
}
function aa(e) {
  return z.isValidElement(e) && typeof e.type != "string" && (e.type === ea || e.type.displayName === "Tag");
}
function er({
  type: e = "single",
  value: t,
  onValueChange: n,
  defaultValue: r,
  disabled: o = !1,
  size: i = "24",
  children: d,
  className: s
}) {
  return /* @__PURE__ */ a(
    Ie.Root,
    {
      type: e,
      value: t,
      onValueChange: n,
      defaultValue: r,
      disabled: o,
      className: h("tag-group", s),
      asChild: !1,
      children: z.Children.map(d, (l) => {
        if (!aa(l)) return l;
        const m = l.props.value;
        if (m == null) return l;
        const { leadingIcon: u, trailingIcon: v } = l.props;
        return /* @__PURE__ */ p(
          Ie.Item,
          {
            value: m,
            className: ta(i),
            disabled: l.props.disabled,
            children: [
              u != null && /* @__PURE__ */ a("span", { "data-icon": "inline-start", children: u }),
              l.props.children,
              v != null && /* @__PURE__ */ a("span", { "data-icon": "inline-end", children: v })
            ]
          },
          m
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
function De(e, t) {
  return e == null ? null : ve(e) ? ge(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function tr({
  className: e,
  variant: t = "default",
  size: n = "24",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  children: d,
  ...s
}) {
  const l = r ? be : "span", m = r ? d : /* @__PURE__ */ p(I, { children: [
    o != null && De(o, "inline-start"),
    d,
    i != null && De(i, "inline-end")
  ] });
  return /* @__PURE__ */ a(
    l,
    {
      "data-slot": "badge",
      "data-variant": t,
      "data-size": n,
      className: h(na({ variant: t, size: n }), e),
      ...s,
      children: m
    }
  );
}
const ra = "m-0 flex list-none flex-wrap items-center gap-1 p-0 break-words sm:gap-1", oa = "inline-flex items-center gap-1", Ge = "rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[var(--color-blue-70)] no-underline transition-colors hover:text-[var(--color-blue-80)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background", ia = "text-[length:14px] font-medium leading-[1.43] text-[var(--foreground)]", sa = "inline-flex size-5 shrink-0 select-none items-center justify-center text-center text-[20px] font-normal leading-none text-[var(--color-grey-60)] [&>svg]:size-5 [&>svg]:shrink-0";
function ar({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: h(e),
      ...t
    }
  );
}
function nr({ className: e, ...t }) {
  return /* @__PURE__ */ a("ol", { "data-slot": "breadcrumb-list", className: h(ra, e), ...t });
}
function rr({ className: e, ...t }) {
  return /* @__PURE__ */ a("li", { "data-slot": "breadcrumb-item", className: h(oa, e), ...t });
}
function or({ asChild: e, className: t, ...n }) {
  return /* @__PURE__ */ a(e ? be : "a", { "data-slot": "breadcrumb-link", className: h(Ge, t), ...n });
}
function ir({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: h(ia, e),
      ...t
    }
  );
}
function sr({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: h(sa, t),
      ...n,
      children: e ?? "/"
    }
  );
}
function lr({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      className: h(Ge, e),
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
function Ke({ items: e, showLabel: t = !0, labelAsButton: n = !0, className: r = "" }) {
  return /* @__PURE__ */ p("div", { className: `open-to ${r}`.trim(), children: [
    t && (n ? /* @__PURE__ */ p("button", { type: "button", className: "open-to__select", "aria-haspopup": "listbox", "aria-expanded": !1, children: [
      /* @__PURE__ */ a("span", { className: "open-to__label", children: "Open to" }),
      /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) : /* @__PURE__ */ a("span", { className: "open-to__label open-to__label--plain", children: "Open to" })),
    /* @__PURE__ */ a("div", { className: "open-to__icons", children: e.map((o) => {
      const { icon: i, title: d } = la[o];
      return /* @__PURE__ */ a("span", { className: `open-to__icon open-to__icon--${o}`, title: d, "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__icon-symbol", children: i }) }, o);
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
  iconBgColor: d,
  iconColor: s,
  textColor: l = "#3B2600",
  buttonLabel: m,
  buttonHref: u = "#",
  children: v,
  fixedSize: f = !0,
  LinkComponent: b = ca
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      className: `insight-card ${f ? "insight-card--fixed" : ""}`,
      style: {
        "--insight-card-bg": i,
        "--insight-card-icon-bg": d,
        "--insight-card-icon-color": s,
        "--insight-card-text-color": l
      },
      children: [
        /* @__PURE__ */ p("div", { className: "insight-card__header", children: [
          /* @__PURE__ */ p("div", { className: "insight-card__header-content", children: [
            /* @__PURE__ */ p("div", { className: "insight-card__title-row", children: [
              /* @__PURE__ */ a("h3", { className: "insight-card__title", children: e }),
              t && /* @__PURE__ */ a("span", { className: "insight-card__badge", children: t })
            ] }),
            /* @__PURE__ */ a("p", { className: "insight-card__description", children: n })
          ] }),
          /* @__PURE__ */ a("div", { className: "insight-card__icon-wrap", "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined insight-card__icon", children: o }) })
        ] }),
        r && /* @__PURE__ */ a("span", { className: "insight-card__recommended", children: r }),
        /* @__PURE__ */ a("div", { className: "insight-card__content", children: v }),
        /* @__PURE__ */ a(b, { to: u, className: "insight-card__btn", children: m })
      ]
    }
  );
}
function ua({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function cr({
  course: e,
  href: t = "#",
  showBookmark: n = !0,
  renderFacepile: r,
  LinkComponent: o = ua,
  bottomBar: i
}) {
  const d = o, s = i ?? (e.completedBy && e.completedBy.length > 0 ? { type: "completedBy", avatars: e.completedBy } : void 0), l = s && s.type !== "none", m = /* @__PURE__ */ p("div", { className: "course-object-card__inner", children: [
    /* @__PURE__ */ p("div", { className: "course-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "menu_book", variant: "blueGreen", size: "small", children: "Course" }) }),
      /* @__PURE__ */ p("div", { className: "course-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Add to learning plan", onClick: (u) => u.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Save course", onClick: (u) => u.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "course-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "course-object-card__title", children: e.title }),
      (e.provider || e.duration) && /* @__PURE__ */ a("span", { className: "course-object-card__meta", children: [e.provider, e.duration].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ p("div", { className: "course-object-card__skills", children: [
        e.skills.slice(0, 2).map((u) => /* @__PURE__ */ a("span", { className: "course-object-card__skill-tag", children: u }, u)),
        e.skills.length > 2 && /* @__PURE__ */ p("span", { className: "course-object-card__skill-tag course-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] })
    ] }),
    l && /* @__PURE__ */ p(I, { children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ p("div", { className: "object-card-bottom-bar__content", children: [
        s.type === "completedBy" && /* @__PURE__ */ p(I, { children: [
          r ? r({ avatarUrls: s.avatars }) : /* @__PURE__ */ a("div", { className: "course-object-card__facepile", children: s.avatars.map((u, v) => /* @__PURE__ */ a("img", { src: u, alt: "", className: "course-object-card__facepile-avatar" }, v)) }),
          /* @__PURE__ */ a("span", { className: "course-object-card__completed-text", children: "completed this" })
        ] }),
        s.type === "openTo" && /* @__PURE__ */ a(Ke, { items: s.items, labelAsButton: !1 }),
        s.type === "buttons" && /* @__PURE__ */ a("div", { className: "course-object-card__bottom-buttons", children: s.children })
      ] }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "course-object-card", children: m }) : /* @__PURE__ */ a(d, { to: t, className: "course-object-card", children: m });
}
function ma({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function dr({
  project: e,
  href: t = "#",
  showBookmark: n = !0,
  showBottomBar: r = !0,
  renderFacepile: o,
  LinkComponent: i = ma
}) {
  const d = i, s = /* @__PURE__ */ p("div", { className: "project-object-card__inner", children: [
    /* @__PURE__ */ p("div", { className: "project-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "folder", variant: "blueGreen", size: "small", children: "Project" }) }),
      /* @__PURE__ */ p("div", { className: "project-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Add to workspace", onClick: (l) => l.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Save project", onClick: (l) => l.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "project-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "project-object-card__title", children: e.title }),
      (e.owner || e.status) && /* @__PURE__ */ a("span", { className: "project-object-card__meta", children: [e.owner, e.status].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ p("div", { className: "project-object-card__skills", children: [
        e.skills.slice(0, 2).map((l) => /* @__PURE__ */ a("span", { className: "project-object-card__skill-tag", children: l }, l)),
        e.skills.length > 2 && /* @__PURE__ */ p("span", { className: "project-object-card__skill-tag project-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] }),
      e.projectManager && /* @__PURE__ */ p("div", { className: "project-object-card__manager", children: [
        e.projectManager.avatarSrc ? /* @__PURE__ */ a(
          "img",
          {
            src: e.projectManager.avatarSrc,
            alt: "",
            className: "project-object-card__manager-avatar"
          }
        ) : /* @__PURE__ */ a("span", { className: "project-object-card__manager-avatar project-object-card__manager-avatar--fallback", "aria-hidden": !0, children: e.projectManager.name.slice(0, 2).toUpperCase() }),
        /* @__PURE__ */ p("div", { className: "project-object-card__manager-info", children: [
          /* @__PURE__ */ a("span", { className: "project-object-card__manager-name", children: e.projectManager.name }),
          /* @__PURE__ */ a("span", { className: "project-object-card__manager-label", children: "Project manager" })
        ] })
      ] })
    ] }),
    r && /* @__PURE__ */ p(I, { children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: e.contributedBy && e.contributedBy.length > 0 && /* @__PURE__ */ p(I, { children: [
        o ? o({ avatarUrls: e.contributedBy }) : /* @__PURE__ */ a("div", { className: "project-object-card__facepile", children: e.contributedBy.map((l, m) => /* @__PURE__ */ a("img", { src: l, alt: "", className: "project-object-card__facepile-avatar" }, m)) }),
        /* @__PURE__ */ a("span", { className: "project-object-card__contributed-text", children: "contributors" })
      ] }) }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "project-object-card", children: s }) : /* @__PURE__ */ a(d, { to: t, className: "project-object-card", children: s });
}
function pa(e) {
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[1][0]).toUpperCase().slice(0, 2) : e.slice(0, 2).toUpperCase() || "?";
}
function fa({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function ur({
  person: e,
  href: t = "#",
  showBookmark: n = !0,
  renderAvatar: r,
  LinkComponent: o = fa
}) {
  const i = o, d = /* @__PURE__ */ p(I, { children: [
    /* @__PURE__ */ p("div", { className: "people-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "people-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "person", variant: "orange", size: "small", children: "People" }) }),
      /* @__PURE__ */ p("div", { className: "people-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "people-object-card__icon-btn", "aria-label": "View org chart", onClick: (s) => s.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "account_tree" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "people-object-card__icon-btn", "aria-label": "Remove from favorites", onClick: (s) => s.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] }),
      /* @__PURE__ */ a("div", { className: "people-object-card__pattern", "aria-hidden": !0 })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__avatar-wrap", children: r ? r({
      src: e.avatarSrc,
      alt: e.name,
      fallback: pa(e.name)
    }) : /* @__PURE__ */ a("img", { src: e.avatarSrc, alt: "", className: "people-object-card__avatar" }) }),
    /* @__PURE__ */ p("div", { className: "people-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "people-object-card__name", children: e.name }),
      /* @__PURE__ */ a("span", { className: "people-object-card__title", children: e.title }),
      /* @__PURE__ */ a("span", { className: "people-object-card__email", children: e.email })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__divider", "aria-hidden": !0 }),
    /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: /* @__PURE__ */ a(Ke, { items: [e.openTo], labelAsButton: !1, className: "people-object-card__open-to" }) }) })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "people-object-card", children: d }) : /* @__PURE__ */ a(i, { to: t, className: "people-object-card", children: d });
}
const K = {
  title: "Mentors",
  badge: "11",
  description: "Get guidance and support",
  recommendedLabel: "Recommended for you",
  buttonLabel: "Explore Mentors",
  buttonHref: "#"
};
function mr({
  title: e = K.title,
  badge: t = K.badge,
  description: n = K.description,
  recommendedLabel: r = K.recommendedLabel,
  buttonLabel: o = K.buttonLabel,
  buttonHref: i = K.buttonHref,
  mentor: d,
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
      children: /* @__PURE__ */ p("div", { className: "mentor-insight-card", children: [
        /* @__PURE__ */ p("div", { className: "mentor-insight-card__profile", children: [
          /* @__PURE__ */ a("img", { src: d.avatarSrc, alt: "", className: "mentor-insight-card__avatar" }),
          /* @__PURE__ */ p("div", { className: "mentor-insight-card__info", children: [
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__name", children: d.name }),
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__role", children: d.role })
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: "mentor-insight-card__match", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined mentor-insight-card__match-icon", children: "track_changes" }),
          /* @__PURE__ */ a("span", { className: "mentor-insight-card__match-text", children: d.matchText }),
          d.matchCount > 0 && /* @__PURE__ */ p("span", { className: "mentor-insight-card__match-badge", children: [
            "+",
            d.matchCount
          ] })
        ] })
      ] })
    }
  );
}
function Ze(e, t = []) {
  let n = [];
  function r(i, d) {
    const s = c.createContext(d), l = n.length;
    n = [...n, d];
    const m = (v) => {
      const { scope: f, children: b, ..._ } = v, N = f?.[e]?.[l] || s, y = c.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ a(N.Provider, { value: y, children: b });
    };
    m.displayName = i + "Provider";
    function u(v, f) {
      const b = f?.[e]?.[l] || s, _ = c.useContext(b);
      if (_) return _;
      if (d !== void 0) return d;
      throw new Error(`\`${v}\` must be used within \`${i}\``);
    }
    return [m, u];
  }
  const o = () => {
    const i = n.map((d) => c.createContext(d));
    return function(s) {
      const l = s?.[e] || i;
      return c.useMemo(
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
      const d = r.reduce((s, { useScope: l, scopeName: m }) => {
        const v = l(i)[`__scope${m}`];
        return { ...s, ...v };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: d }), [d]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function T(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var va = [
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
], O = va.reduce((e, t) => {
  const n = se(`Primitive.${t}`), r = c.forwardRef((o, i) => {
    const { asChild: d, ...s } = o, l = d ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ce(e, t) {
  e && jt.flushSync(() => e.dispatchEvent(t));
}
var U = globalThis?.document ? c.useLayoutEffect : () => {
}, ga = c[" useInsertionEffect ".trim().toString()] || U;
function We({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, d] = ba({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const u = c.useRef(e !== void 0);
    c.useEffect(() => {
      const v = u.current;
      v !== s && console.warn(
        `${r} is changing from ${v ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, r]);
  }
  const m = c.useCallback(
    (u) => {
      if (s) {
        const v = _a(u) ? u(e) : u;
        v !== e && d.current?.(v);
      } else
        i(u);
    },
    [s, e, i, d]
  );
  return [l, m];
}
function ba({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), i = c.useRef(t);
  return ga(() => {
    i.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function _a(e) {
  return typeof e == "function";
}
function Oe(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function qe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = Oe(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Oe(e[o], null);
        }
      };
  };
}
function B(...e) {
  return c.useCallback(qe(...e), e);
}
var Na = c.createContext(void 0);
function ya(e) {
  const t = c.useContext(Na);
  return e || t || "ltr";
}
function wa(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var q = (e) => {
  const { present: t, children: n } = e, r = xa(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), i = B(r.ref, Ca(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: i }) : null;
};
q.displayName = "Presence";
function xa(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), i = c.useRef("none"), d = e ? "mounted" : "unmounted", [s, l] = wa(d, {
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
  return c.useEffect(() => {
    const m = Y(r.current);
    i.current = s === "mounted" ? m : "none";
  }, [s]), U(() => {
    const m = r.current, u = o.current;
    if (u !== e) {
      const f = i.current, b = Y(m);
      e ? l("MOUNT") : b === "none" || m?.display === "none" ? l("UNMOUNT") : l(u && f !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), U(() => {
    if (t) {
      let m;
      const u = t.ownerDocument.defaultView ?? window, v = (b) => {
        const N = Y(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && N && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, f = (b) => {
        b.target === t && (i.current = Y(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        u.clearTimeout(m), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback((m) => {
      r.current = m ? getComputedStyle(m) : null, n(m);
    }, [])
  };
}
function Y(e) {
  return e?.animationName || "none";
}
function Ca(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ka = c[" useId ".trim().toString()] || (() => {
}), Sa = 0;
function Ye(e) {
  const [t, n] = c.useState(ka());
  return U(() => {
    n((r) => r ?? String(Sa++));
  }, [e]), t ? `radix-${t}` : "";
}
function Xe(e) {
  const t = e + "CollectionProvider", [n, r] = Ze(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (N) => {
    const { scope: y, children: S } = N, k = z.useRef(null), w = z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: y, itemMap: w, collectionRef: k, children: S });
  };
  d.displayName = t;
  const s = e + "CollectionSlot", l = se(s), m = z.forwardRef(
    (N, y) => {
      const { scope: S, children: k } = N, w = i(s, S), x = B(y, w.collectionRef);
      return /* @__PURE__ */ a(l, { ref: x, children: k });
    }
  );
  m.displayName = s;
  const u = e + "CollectionItemSlot", v = "data-radix-collection-item", f = se(u), b = z.forwardRef(
    (N, y) => {
      const { scope: S, children: k, ...w } = N, x = z.useRef(null), C = B(y, x), M = i(u, S);
      return z.useEffect(() => (M.itemMap.set(x, { ref: x, ...w }), () => {
        M.itemMap.delete(x);
      })), /* @__PURE__ */ a(f, { [v]: "", ref: C, children: k });
    }
  );
  b.displayName = u;
  function _(N) {
    const y = i(e + "CollectionConsumer", N);
    return z.useCallback(() => {
      const k = y.collectionRef.current;
      if (!k) return [];
      const w = Array.from(k.querySelectorAll(`[${v}]`));
      return Array.from(y.itemMap.values()).sort(
        (M, E) => w.indexOf(M.ref.current) - w.indexOf(E.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: d, Slot: m, ItemSlot: b },
    _,
    r
  ];
}
function F(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
function Ea(e, t = globalThis?.document) {
  const n = F(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ma = "DismissableLayer", de = "dismissableLayer.update", Ra = "dismissableLayer.pointerDownOutside", Ta = "dismissableLayer.focusOutside", Ae, Qe = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Je = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: d,
      onDismiss: s,
      ...l
    } = e, m = c.useContext(Qe), [u, v] = c.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, b] = c.useState({}), _ = B(t, (E) => v(E)), N = Array.from(m.layers), [y] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), S = N.indexOf(y), k = u ? N.indexOf(u) : -1, w = m.layersWithOutsidePointerEventsDisabled.size > 0, x = k >= S, C = Pa((E) => {
      const P = E.target, R = [...m.branches].some((g) => g.contains(P));
      !x || R || (o?.(E), d?.(E), E.defaultPrevented || s?.());
    }, f), M = Da((E) => {
      const P = E.target;
      [...m.branches].some((g) => g.contains(P)) || (i?.(E), d?.(E), E.defaultPrevented || s?.());
    }, f);
    return Ea((E) => {
      k === m.layers.size - 1 && (r?.(E), !E.defaultPrevented && s && (E.preventDefault(), s()));
    }, f), c.useEffect(() => {
      if (u)
        return n && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Ae = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(u)), m.layers.add(u), je(), () => {
          n && m.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Ae);
        };
    }, [u, f, n, m]), c.useEffect(() => () => {
      u && (m.layers.delete(u), m.layersWithOutsidePointerEventsDisabled.delete(u), je());
    }, [u, m]), c.useEffect(() => {
      const E = () => b({});
      return document.addEventListener(de, E), () => document.removeEventListener(de, E);
    }, []), /* @__PURE__ */ a(
      O.div,
      {
        ...l,
        ref: _,
        style: {
          pointerEvents: w ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: T(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: T(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: T(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Je.displayName = Ma;
var Ia = "DismissableLayerBranch", La = c.forwardRef((e, t) => {
  const n = c.useContext(Qe), r = c.useRef(null), o = B(t, r);
  return c.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(O.div, { ...e, ref: o });
});
La.displayName = Ia;
function Pa(e, t = globalThis?.document) {
  const n = F(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          et(
            Ra,
            n,
            m,
            { discrete: !0 }
          );
        };
        const m = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, d = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(d), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Da(e, t = globalThis?.document) {
  const n = F(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && et(Ta, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function je() {
  const e = new CustomEvent(de);
  document.dispatchEvent(e);
}
function et(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ce(o, i) : o.dispatchEvent(i);
}
function Oa(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
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
}), ja = "VisuallyHidden", tt = c.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    O.span,
    {
      ...e,
      ref: t,
      style: { ...Aa, ...e.style }
    }
  )
);
tt.displayName = ja;
var Va = tt, G = "NavigationMenu", [Ne, at, Fa] = Xe(G), [ue, Ba, za] = Xe(G), [ye] = Ze(
  G,
  [Fa, za]
), [$a, j] = ye(G), [Ha, Ua] = ye(G), nt = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: d = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: m,
      ...u
    } = e, [v, f] = c.useState(null), b = B(t, (R) => f(R)), _ = ya(m), N = c.useRef(0), y = c.useRef(0), S = c.useRef(0), [k, w] = c.useState(!0), [x, C] = We({
      prop: r,
      onChange: (R) => {
        const g = R !== "", V = s > 0;
        g ? (window.clearTimeout(S.current), V && w(!1)) : (window.clearTimeout(S.current), S.current = window.setTimeout(
          () => w(!0),
          s
        )), o?.(R);
      },
      defaultProp: i ?? "",
      caller: G
    }), M = c.useCallback(() => {
      window.clearTimeout(y.current), y.current = window.setTimeout(() => C(""), 150);
    }, [C]), E = c.useCallback(
      (R) => {
        window.clearTimeout(y.current), C(R);
      },
      [C]
    ), P = c.useCallback(
      (R) => {
        x === R ? window.clearTimeout(y.current) : N.current = window.setTimeout(() => {
          window.clearTimeout(y.current), C(R);
        }, d);
      },
      [x, C, d]
    );
    return c.useEffect(() => () => {
      window.clearTimeout(N.current), window.clearTimeout(y.current), window.clearTimeout(S.current);
    }, []), /* @__PURE__ */ a(
      rt,
      {
        scope: n,
        isRootMenu: !0,
        value: x,
        dir: _,
        orientation: l,
        rootNavigationMenu: v,
        onTriggerEnter: (R) => {
          window.clearTimeout(N.current), k ? P(R) : E(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(N.current), M();
        },
        onContentEnter: () => window.clearTimeout(y.current),
        onContentLeave: M,
        onItemSelect: (R) => {
          C((g) => g === R ? "" : R);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ a(
          O.nav,
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
nt.displayName = G;
var me = "NavigationMenuSub", Ga = c.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: d = "horizontal",
      ...s
    } = e, l = j(me, n), [m, u] = We({
      prop: r,
      onChange: o,
      defaultProp: i ?? "",
      caller: me
    });
    return /* @__PURE__ */ a(
      rt,
      {
        scope: n,
        isRootMenu: !1,
        value: m,
        dir: l.dir,
        orientation: d,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (v) => u(v),
        onItemSelect: (v) => u(v),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ a(O.div, { "data-orientation": d, ...s, ref: t })
      }
    );
  }
);
Ga.displayName = me;
var rt = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: d,
    value: s,
    onItemSelect: l,
    onItemDismiss: m,
    onTriggerEnter: u,
    onTriggerLeave: v,
    onContentEnter: f,
    onContentLeave: b
  } = e, [_, N] = c.useState(null), [y, S] = c.useState(/* @__PURE__ */ new Map()), [k, w] = c.useState(null);
  return /* @__PURE__ */ a(
    $a,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: Oa(s),
      baseId: Ye(),
      dir: o,
      orientation: i,
      viewport: _,
      onViewportChange: N,
      indicatorTrack: k,
      onIndicatorTrackChange: w,
      onTriggerEnter: F(u),
      onTriggerLeave: F(v),
      onContentEnter: F(f),
      onContentLeave: F(b),
      onItemSelect: F(l),
      onItemDismiss: F(m),
      onViewportContentChange: c.useCallback((x, C) => {
        S((M) => (M.set(x, C), new Map(M)));
      }, []),
      onViewportContentRemove: c.useCallback((x) => {
        S((C) => C.has(x) ? (C.delete(x), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ a(Ne.Provider, { scope: t, children: /* @__PURE__ */ a(Ha, { scope: t, items: y, children: d }) })
    }
  );
}, ot = "NavigationMenuList", it = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = j(ot, n), i = /* @__PURE__ */ a(O.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(O.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(Ne.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(ht, { asChild: !0, children: i }) : i }) });
  }
);
it.displayName = ot;
var st = "NavigationMenuItem", [Ka, lt] = ye(st), ct = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = Ye(), d = r || i || "LEGACY_REACT_AUTO_VALUE", s = c.useRef(null), l = c.useRef(null), m = c.useRef(null), u = c.useRef(() => {
    }), v = c.useRef(!1), f = c.useCallback((_ = "start") => {
      if (s.current) {
        u.current();
        const N = fe(s.current);
        N.length && Ce(_ === "start" ? N : N.reverse());
      }
    }, []), b = c.useCallback(() => {
      if (s.current) {
        const _ = fe(s.current);
        _.length && (u.current = en(_));
      }
    }, []);
    return /* @__PURE__ */ a(
      Ka,
      {
        scope: n,
        value: d,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: m,
        wasEscapeCloseRef: v,
        onEntryKeyDown: f,
        onFocusProxyEnter: f,
        onRootContentClose: b,
        onContentFocusOutside: b,
        children: /* @__PURE__ */ a(O.li, { ...o, ref: t })
      }
    );
  }
);
ct.displayName = st;
var pe = "NavigationMenuTrigger", dt = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = j(pe, e.__scopeNavigationMenu), d = lt(pe, e.__scopeNavigationMenu), s = c.useRef(null), l = B(s, d.triggerRef, t), m = gt(i.baseId, d.value), u = bt(i.baseId, d.value), v = c.useRef(!1), f = c.useRef(!1), b = d.value === i.value;
  return /* @__PURE__ */ p(I, { children: [
    /* @__PURE__ */ a(Ne.ItemSlot, { scope: n, value: d.value, children: /* @__PURE__ */ a(vt, { asChild: !0, children: /* @__PURE__ */ a(
      O.button,
      {
        id: m,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": ke(b),
        "aria-expanded": b,
        "aria-controls": u,
        ...o,
        ref: l,
        onPointerEnter: T(e.onPointerEnter, () => {
          f.current = !1, d.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: T(
          e.onPointerMove,
          Q(() => {
            r || f.current || d.wasEscapeCloseRef.current || v.current || (i.onTriggerEnter(d.value), v.current = !0);
          })
        ),
        onPointerLeave: T(
          e.onPointerLeave,
          Q(() => {
            r || (i.onTriggerLeave(), v.current = !1);
          })
        ),
        onClick: T(e.onClick, () => {
          i.onItemSelect(d.value), f.current = b;
        }),
        onKeyDown: T(e.onKeyDown, (_) => {
          const y = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          b && _.key === y && (d.onEntryKeyDown(), _.preventDefault());
        })
      }
    ) }) }),
    b && /* @__PURE__ */ p(I, { children: [
      /* @__PURE__ */ a(
        Va,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: d.focusProxyRef,
          onFocus: (_) => {
            const N = d.contentRef.current, y = _.relatedTarget, S = y === s.current, k = N?.contains(y);
            (S || !k) && d.onFocusProxyEnter(S ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": u })
    ] })
  ] });
});
dt.displayName = pe;
var Za = "NavigationMenuLink", Ve = "navigationMenu.linkSelect", ut = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(vt, { asChild: !0, children: /* @__PURE__ */ a(
      O.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: T(
          e.onClick,
          (d) => {
            const s = d.target, l = new CustomEvent(Ve, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(Ve, (m) => o?.(m), { once: !0 }), ce(s, l), !l.defaultPrevented && !d.metaKey) {
              const m = new CustomEvent(X, {
                bubbles: !0,
                cancelable: !0
              });
              ce(s, m);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ut.displayName = Za;
var we = "NavigationMenuIndicator", Wa = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = j(we, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Vt.createPortal(
    /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(qa, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Wa.displayName = we;
var qa = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = j(we, n), i = at(n), [d, s] = c.useState(
    null
  ), [l, m] = c.useState(null), u = o.orientation === "horizontal", v = !!o.value;
  c.useEffect(() => {
    const _ = i().find((N) => N.value === o.value)?.ref.current;
    _ && s(_);
  }, [i, o.value]);
  const f = () => {
    d && m({
      size: u ? d.offsetWidth : d.offsetHeight,
      offset: u ? d.offsetLeft : d.offsetTop
    });
  };
  return he(d, f), he(o.indicatorTrack, f), l ? /* @__PURE__ */ a(
    O.div,
    {
      "aria-hidden": !0,
      "data-state": v ? "visible" : "hidden",
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
}), Z = "NavigationMenuContent", mt = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = j(Z, e.__scopeNavigationMenu), i = lt(Z, e.__scopeNavigationMenu), d = B(i.contentRef, t), s = i.value === o.value, l = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(Ya, { forceMount: n, ...l, ref: d }) : /* @__PURE__ */ a(q, { present: n || s, children: /* @__PURE__ */ a(
    pt,
    {
      "data-state": ke(s),
      ...l,
      ref: d,
      onPointerEnter: T(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: T(
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
mt.displayName = Z;
var Ya = c.forwardRef((e, t) => {
  const n = j(Z, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return U(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), U(() => () => o(e.value), [e.value, o]), null;
}), X = "navigationMenu.rootContentDismiss", pt = c.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: d,
    onRootContentClose: s,
    onContentFocusOutside: l,
    ...m
  } = e, u = j(Z, n), v = c.useRef(null), f = B(v, t), b = gt(u.baseId, r), _ = bt(u.baseId, r), N = at(n), y = c.useRef(null), { onItemDismiss: S } = u;
  c.useEffect(() => {
    const w = v.current;
    if (u.isRootMenu && w) {
      const x = () => {
        S(), s(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(X, x), () => w.removeEventListener(X, x);
    }
  }, [u.isRootMenu, e.value, o, S, s]);
  const k = c.useMemo(() => {
    const x = N().map((g) => g.value);
    u.dir === "rtl" && x.reverse();
    const C = x.indexOf(u.value), M = x.indexOf(u.previousValue), E = r === u.value, P = M === x.indexOf(r);
    if (!E && !P) return y.current;
    const R = (() => {
      if (C !== M) {
        if (E && M !== -1) return C > M ? "from-end" : "from-start";
        if (P && C !== -1) return C > M ? "to-start" : "to-end";
      }
      return null;
    })();
    return y.current = R, R;
  }, [u.previousValue, u.value, u.dir, N, r]);
  return /* @__PURE__ */ a(ht, { asChild: !0, children: /* @__PURE__ */ a(
    Je,
    {
      id: _,
      "aria-labelledby": b,
      "data-motion": k,
      "data-orientation": u.orientation,
      ...m,
      ref: f,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const w = new Event(X, {
          bubbles: !0,
          cancelable: !0
        });
        v.current?.dispatchEvent(w);
      },
      onFocusOutside: T(e.onFocusOutside, (w) => {
        l();
        const x = w.target;
        u.rootNavigationMenu?.contains(x) && w.preventDefault();
      }),
      onPointerDownOutside: T(e.onPointerDownOutside, (w) => {
        const x = w.target, C = N().some((E) => E.ref.current?.contains(x)), M = u.isRootMenu && u.viewport?.contains(x);
        (C || M || !u.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: T(e.onKeyDown, (w) => {
        const x = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !x) {
          const M = fe(w.currentTarget), E = document.activeElement, P = M.findIndex((V) => V === E), g = w.shiftKey ? M.slice(0, P).reverse() : M.slice(P + 1, M.length);
          Ce(g) ? w.preventDefault() : i.current?.focus();
        }
      }),
      onEscapeKeyDown: T(e.onEscapeKeyDown, (w) => {
        d.current = !0;
      })
    }
  ) });
}), xe = "NavigationMenuViewport", ft = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!j(xe, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(Xa, { ...r, ref: t }) });
});
ft.displayName = xe;
var Xa = c.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = j(xe, n), d = B(t, i.onViewportChange), s = Ua(
    Z,
    e.__scopeNavigationMenu
  ), [l, m] = c.useState(null), [u, v] = c.useState(null), f = l ? l?.width + "px" : void 0, b = l ? l?.height + "px" : void 0, _ = !!i.value, N = _ ? i.value : i.previousValue;
  return he(u, () => {
    u && m({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ a(
    O.div,
    {
      "data-state": ke(_),
      "data-orientation": i.orientation,
      ...o,
      ref: d,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !_ && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": f,
        "--radix-navigation-menu-viewport-height": b,
        ...o.style
      },
      onPointerEnter: T(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: T(e.onPointerLeave, Q(i.onContentLeave)),
      children: Array.from(s.items).map(([S, { ref: k, forceMount: w, ...x }]) => {
        const C = N === S;
        return /* @__PURE__ */ a(q, { present: w || C, children: /* @__PURE__ */ a(
          pt,
          {
            ...x,
            ref: qe(k, (M) => {
              C && M && v(M);
            })
          }
        ) }, S);
      })
    }
  );
}), Qa = "FocusGroup", ht = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = j(Qa, n);
    return /* @__PURE__ */ a(ue.Provider, { scope: n, children: /* @__PURE__ */ a(ue.Slot, { scope: n, children: /* @__PURE__ */ a(O.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Fe = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Ja = "FocusGroupItem", vt = c.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Ba(n), i = j(Ja, n);
    return /* @__PURE__ */ a(ue.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      O.button,
      {
        ...r,
        ref: t,
        onKeyDown: T(e.onKeyDown, (d) => {
          if (["Home", "End", ...Fe].includes(d.key)) {
            let l = o().map((v) => v.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(d.key) && l.reverse(), Fe.includes(d.key)) {
              const v = l.indexOf(d.currentTarget);
              l = l.slice(v + 1);
            }
            setTimeout(() => Ce(l)), d.preventDefault();
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
function Ce(e) {
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
  const n = F(t);
  U(() => {
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
function ke(e) {
  return e ? "open" : "closed";
}
function gt(e, t) {
  return `${e}-trigger-${t}`;
}
function bt(e, t) {
  return `${e}-content-${t}`;
}
function Q(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var tn = nt, an = it, nn = ct, rn = dt, on = ut, Be = mt, sn = ft;
const _t = c.createContext(!0);
function ln({
  className: e,
  children: t,
  viewport: n = !0,
  variant: r = "underline",
  ...o
}) {
  return /* @__PURE__ */ a(_t.Provider, { value: n, children: /* @__PURE__ */ p(
    tn,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      "data-variant": r,
      className: h("nav-menu", `nav-menu--${r}`, e),
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
      className: h("nav-menu__list", e),
      ...t
    }
  );
}
const Se = c.createContext(null);
function re({
  className: e,
  ...t
}) {
  const n = c.useRef(null);
  return /* @__PURE__ */ a(Se.Provider, { value: n, children: /* @__PURE__ */ a(
    nn,
    {
      "data-slot": "navigation-menu-item",
      className: h("nav-menu__item", e),
      ...t
    }
  ) });
}
function oe(e) {
  e.preventDefault();
}
function pr({
  className: e,
  children: t,
  onPointerMove: n,
  onPointerLeave: r,
  onPointerEnter: o,
  onPointerMoveCapture: i,
  onPointerLeaveCapture: d,
  onPointerEnterCapture: s,
  ref: l,
  ...m
}) {
  const u = c.useContext(Se), v = c.useCallback(
    (f) => {
      u && (u.current = f), typeof l == "function" ? l(f) : l && (l.current = f);
    },
    [l, u]
  );
  return /* @__PURE__ */ a(
    rn,
    {
      "data-slot": "navigation-menu-trigger",
      className: h("nav-menu__trigger", e),
      ref: v,
      onPointerMoveCapture: (f) => {
        oe(f), i?.(f);
      },
      onPointerLeaveCapture: (f) => {
        oe(f), d?.(f);
      },
      onPointerEnterCapture: (f) => {
        oe(f), s?.(f);
      },
      onPointerMove: n,
      onPointerLeave: r,
      onPointerEnter: o,
      ...m,
      children: /* @__PURE__ */ p("span", { className: "nav-menu__trigger-label", children: [
        t,
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined nav-menu__chevron", "aria-hidden": !0, children: "expand_more" })
      ] })
    }
  );
}
function fr({
  className: e,
  children: t,
  forceMount: n,
  ...r
}) {
  const o = c.useContext(_t), i = c.useContext(Se), d = c.useRef(null), [s, l] = c.useState({}), [m, u] = c.useState(!1), v = c.useCallback(() => {
    const f = i?.current;
    if (!f) return;
    const b = f.getBoundingClientRect(), _ = f.closest?.(".navbar"), N = _ ? _.getBoundingClientRect().bottom + 2 : b.bottom + 2;
    l({
      position: "fixed",
      top: N,
      left: b.left,
      minWidth: 200,
      zIndex: 1100,
      transform: "translateZ(0)"
    });
  }, [i]);
  return c.useLayoutEffect(() => {
    if (o || !i) return;
    const f = d.current, b = i.current, _ = () => {
      const y = b?.getAttribute?.("aria-expanded") === "true", S = f?.querySelector?.('[data-state="open"]') != null || f?.firstElementChild?.getAttribute?.("data-state") === "open", k = y || S;
      u(k), k && v();
    };
    if (_(), !b && !f) return;
    const N = new MutationObserver(_);
    return b && N.observe(b, { attributes: !0, attributeFilter: ["aria-expanded"] }), f && N.observe(f, { attributes: !0, attributeFilter: ["data-state"], subtree: !0 }), () => N.disconnect();
  }, [o, i, v]), c.useEffect(() => {
    if (!m || o) return;
    v();
    const f = requestAnimationFrame(() => v());
    return window.addEventListener("scroll", v, !0), window.addEventListener("resize", v), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", v, !0), window.removeEventListener("resize", v);
    };
  }, [m, o, v]), o ? /* @__PURE__ */ a(
    Be,
    {
      "data-slot": "navigation-menu-content",
      className: h("nav-menu__content", e),
      ...r
    }
  ) : /* @__PURE__ */ p(I, { children: [
    /* @__PURE__ */ a("div", { ref: d, style: { display: "contents" }, "aria-hidden": !0, children: /* @__PURE__ */ a(
      Be,
      {
        "data-slot": "navigation-menu-content",
        className: h("nav-menu__content", e),
        forceMount: !0,
        style: { position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, minWidth: 0 },
        ...r,
        children: /* @__PURE__ */ a("span", { "aria-hidden": !0, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" } })
      }
    ) }),
    typeof document < "u" && m && Ft(
      /* @__PURE__ */ a(
        "div",
        {
          className: h("nav-menu__content--portal", e),
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
      className: h("nav-menu__viewport", e),
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
      className: h("nav-menu__link", e),
      ...r,
      children: r.asChild ? n : /* @__PURE__ */ a("span", { className: "nav-menu__link-label", children: n })
    }
  );
}
function hr({
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
      className: h(
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
function vr({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    te.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: h(un({ variant: t }), e),
      ...n
    }
  );
}
function gr({
  className: e,
  leadingIcon: t,
  badge: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ p(
    te.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: h(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-7,20px)] border border-transparent px-4 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "group-data-[variant=default]/tabs-list:data-[state=active]:bg-[var(--color-blue-20,#BCE4FF)] group-data-[variant=default]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)] group-data-[variant=default]/tabs-list:data-[state=active]:border-[var(--color-blue-70,#146DA6)] dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground group-data-[variant=line]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)]",
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
function br({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    te.Content,
    {
      "data-slot": "tabs-content",
      className: h("flex-1 outline-none", e),
      ...t
    }
  );
}
function _r({
  className: e,
  bordered: t,
  children: n,
  ...r
}) {
  const o = /* @__PURE__ */ a("div", { "data-slot": "data-table-scroll", className: "relative w-full overflow-x-auto [-webkit-overflow-scrolling:touch]", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "data-table",
      className: h("w-full border-collapse text-sm", e),
      ...r,
      children: n
    }
  ) });
  return t ? /* @__PURE__ */ a("div", { "data-slot": "data-table-bordered", className: "rounded-xl border border-[#e5e7eb] bg-white overflow-hidden", children: o }) : o;
}
function Nr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "data-table-header",
      className: h("[&_tr]:border-b", e),
      ...t
    }
  );
}
function yr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "data-table-body",
      className: h("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function wr({
  className: e,
  variant: t = "default",
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "data-table-row",
      className: h(
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
function xr({
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
      className: h(
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
function Cr({
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
      className: h(
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
function kr({
  ...e
}) {
  return /* @__PURE__ */ a(L.Root, { "data-slot": "select", ...e });
}
function Sr({
  ...e
}) {
  return /* @__PURE__ */ a(L.Group, { "data-slot": "select-group", ...e });
}
function Er({
  ...e
}) {
  return /* @__PURE__ */ a(L.Value, { "data-slot": "select-value", ...e });
}
const mn = {
  default: "border-transparent bg-[rgba(235,247,255,1)] text-[var(--color-button-primary-text)] hover:bg-[rgba(220,240,255,1)] focus-visible:bg-[rgba(220,240,255,1)] data-[placeholder]:text-[var(--color-button-primary-text)]/70 [&_svg]:opacity-80",
  primary: "border-transparent bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-bg-hover)] focus-visible:bg-[var(--color-button-primary-bg-hover)] data-[placeholder]:text-[var(--color-button-primary-text)] [&_svg]:opacity-80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 dark:hover:bg-secondary/80 dark:focus-visible:bg-secondary/80 data-[placeholder]:text-secondary-foreground/70 [&_svg]:text-secondary-foreground/80",
  outline: "border border-input bg-transparent text-foreground hover:bg-accent/50 focus-visible:bg-accent/50 dark:bg-input/30 dark:hover:bg-input/50 dark:focus-visible:bg-input/50 data-[placeholder]:text-muted-foreground [&_svg]:text-muted-foreground"
}, pn = {
  default: "h-9 min-h-9 px-3 py-2 [&_svg]:size-4",
  sm: "h-8 min-h-8 px-2.5 py-1.5 [&_svg]:size-3.5"
}, fn = {
  default: void 0,
  sm: { height: 32, minHeight: 32, paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, fontSize: "0.75rem" }
};
function Mr({
  className: e,
  size: t = "default",
  variant: n = "default",
  children: r,
  ...o
}) {
  const i = t === "small" ? "sm" : t;
  return /* @__PURE__ */ p(
    L.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      "data-variant": n,
      style: fn[i],
      className: h(
        "flex w-fit items-center justify-between gap-2 rounded-[var(--radius-8)] border whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        pn[i],
        mn[n],
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(L.Icon, { asChild: !0, children: /* @__PURE__ */ a(Ue, { className: "opacity-50" }) })
      ]
    }
  );
}
function Rr({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ a(L.Portal, { children: /* @__PURE__ */ p(
    L.Content,
    {
      "data-slot": "select-content",
      className: h(
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
          L.Viewport,
          {
            className: h(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(vn, {})
      ]
    }
  ) });
}
function Tr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Label,
    {
      "data-slot": "select-label",
      className: h("px-2 py-1.5 text-foreground", e),
      ...t
    }
  );
}
function Ir({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    L.Item,
    {
      "data-slot": "select-item",
      className: h(
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
            children: /* @__PURE__ */ a(L.ItemIndicator, { children: /* @__PURE__ */ a(Bt, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(L.ItemText, { children: t })
      ]
    }
  );
}
function Lr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.Separator,
    {
      "data-slot": "select-separator",
      className: h("pointer-events-none -mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function hn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: h("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(zt, { className: "size-4" })
    }
  );
}
function vn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: h("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(Ue, { className: "size-4" })
    }
  );
}
const gn = "relative box-border h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] border border-solid border-[rgba(44,140,201,1)] bg-[rgba(235,253,255,1)]";
function bn(e, t) {
  return e == null ? "…" : `${Math.min(100, Math.max(0, Math.round(e / t * 100)))}% complete`;
}
const _n = c.forwardRef(
  ({
    className: e,
    label: t,
    labelClassName: n,
    labelVariant: r = "none",
    scaleStartLabel: o = "0",
    scaleEndLabel: i = "100",
    progressValueLabel: d,
    completeLabelOverride: s,
    value: l,
    max: m = 100,
    ...u
  }, v) => {
    const f = typeof l == "number" && !Number.isNaN(l) ? l : null, b = typeof m == "number" && m > 0 ? m : 100, _ = f != null ? Math.min(100, Math.max(0, f / b * 100)) : 0, N = d ?? (f != null ? String(Math.min(100, Math.max(0, Math.round(f / b * 100)))) : "…"), y = s ?? bn(f, b), S = r === "scale" || r === "complete-left" || t != null, k = /* @__PURE__ */ a(
      le.Root,
      {
        ref: v,
        "data-slot": "progress",
        className: h(gn, S ? void 0 : e),
        value: f,
        max: b,
        ...u,
        children: /* @__PURE__ */ a(
          le.Indicator,
          {
            "data-slot": "progress-indicator",
            className: h(
              "h-full w-full flex-1 rounded-[var(--radius-full)] bg-[rgba(44,140,201,1)]",
              "origin-left transition-transform duration-500 ease-out",
              "data-[state=indeterminate]:w-[36%] data-[state=indeterminate]:max-w-none data-[state=indeterminate]:flex-none"
            ),
            style: f != null ? { transform: `translateX(-${100 - _}%)` } : void 0
          }
        )
      }
    );
    if (!S)
      return k;
    if (r === "scale") {
      const w = Math.min(100, Math.max(0, _)), x = f === null;
      return /* @__PURE__ */ p(
        "div",
        {
          "data-slot": "progress-field",
          className: h("inline-flex w-full max-w-full flex-col gap-1", e),
          children: [
            k,
            /* @__PURE__ */ p(
              "div",
              {
                "data-slot": "progress-scale-row",
                className: h("relative mt-1 min-h-[1.125rem]", n),
                children: [
                  /* @__PURE__ */ p("div", { className: "flex justify-between text-xs text-muted-foreground tabular-nums", children: [
                    /* @__PURE__ */ a("span", { "data-slot": "progress-scale-start", children: o }),
                    /* @__PURE__ */ a("span", { "data-slot": "progress-scale-end", children: i })
                  ] }),
                  /* @__PURE__ */ a("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-end", children: /* @__PURE__ */ a(
                    "div",
                    {
                      "data-slot": "progress-current-cluster",
                      className: "absolute bottom-0 z-10 flex items-baseline gap-1.5 whitespace-nowrap text-xs text-muted-foreground",
                      style: x ? {
                        left: "50%",
                        transform: "translateX(-50%)"
                      } : {
                        left: `${w}%`,
                        transform: "translateX(-100%)"
                      },
                      children: /* @__PURE__ */ a("span", { className: "tabular-nums", "data-slot": "progress-current-value", children: N })
                    }
                  ) })
                ]
              }
            )
          ]
        }
      );
    }
    return r === "complete-left" ? /* @__PURE__ */ p(
      "div",
      {
        "data-slot": "progress-field",
        className: h("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          k,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-complete-label",
              className: h("block text-left text-xs text-muted-foreground", n),
              children: y
            }
          )
        ]
      }
    ) : /* @__PURE__ */ p(
      "div",
      {
        "data-slot": "progress-field",
        className: h("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          k,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-label",
              className: h("text-xs text-muted-foreground", n),
              children: t
            }
          )
        ]
      }
    );
  }
);
_n.displayName = le.Root.displayName;
const Ee = c.createContext(null);
function ae() {
  const e = c.useContext(Ee);
  if (!e) throw new Error("Stepper components must be used within <Stepper>");
  return e;
}
const Nt = c.createContext(null), Me = c.createContext(null);
function yt() {
  const e = c.useContext(Me);
  if (e == null) throw new Error("StepperItem subcomponents must be inside <StepperItem>");
  return e;
}
const wt = c.forwardRef(
  ({ className: e, value: t, onValueChange: n, size: r = "default", children: o, ...i }, d) => /* @__PURE__ */ a(Ee.Provider, { value: { value: t, onValueChange: n, size: r }, children: /* @__PURE__ */ a(
    "nav",
    {
      ref: d,
      "aria-label": "Steps",
      "data-slot": "stepper",
      "data-size": r,
      className: h("w-full", e),
      ...i,
      children: o
    }
  ) })
);
wt.displayName = "Stepper";
const Re = c.forwardRef(
  ({ className: e, segmentIndex: t, style: n, children: r, ...o }, i) => {
    const { value: d, size: s } = ae(), l = c.useContext(Nt), m = typeof l == "number" ? l : t ?? 0, u = s === "sm", v = Number(d), f = Number.isFinite(v) && v > Number(m);
    return /* @__PURE__ */ p(
      "li",
      {
        ref: i,
        ...o,
        "data-slot": "stepper-separator",
        "data-state": f ? "filled" : "upcoming",
        "aria-hidden": !0,
        className: h(
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
Re.displayName = "StepperSeparator";
function Nn(e) {
  if (!c.isValidElement(e)) return !1;
  const t = e.type;
  return t === Re || t?.displayName === "StepperSeparator";
}
function yn(e) {
  return c.isValidElement(e) && e.type.displayName === "StepperItem";
}
const xt = c.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const o = [];
    let i = 0, d = 0;
    return c.Children.forEach(t, (s) => {
      if (Nn(s)) {
        const l = d++;
        o.push(
          /* @__PURE__ */ a(Nt.Provider, { value: l, children: c.cloneElement(s, {
            key: s.key ?? `stepper-sep-inner-${l}`,
            segmentIndex: l
          }) }, s.key ?? `stepper-sep-${l}`)
        );
        return;
      }
      if (yn(s)) {
        const l = i++;
        o.push(
          c.cloneElement(s, {
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
        className: h("m-0 flex w-full list-none items-start gap-0 p-0", e),
        ...n,
        children: o
      }
    );
  }
);
xt.displayName = "StepperList";
const Ct = c.forwardRef(
  ({ className: e, step: t, children: n, ...r }, o) => {
    const i = t ?? 0, { value: d, size: s } = ae(), l = i < d ? "complete" : i === d ? "active" : "upcoming", m = s === "sm";
    return /* @__PURE__ */ a(Me.Provider, { value: i, children: /* @__PURE__ */ a(
      "li",
      {
        ref: o,
        "data-slot": "stepper-item",
        "data-state": l,
        className: h(
          "relative flex min-w-0 shrink-0 flex-col items-center",
          m ? "gap-1" : "gap-2",
          e
        ),
        ...r,
        children: n
      }
    ) });
  }
);
Ct.displayName = "StepperItem";
const wn = c.forwardRef(
  ({ className: e, type: t = "button", disabled: n, onClick: r, children: o, ...i }, d) => {
    const { value: s, onValueChange: l, size: m } = ae(), u = yt(), v = l != null && !n && u <= s, b = h(
      "group/stepper-trigger flex rounded-md",
      m === "sm" ? "w-auto flex-row items-center gap-2 text-left" : "w-full max-w-[10rem] flex-col items-center gap-2 text-center"
    ), _ = h(
      b,
      v && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90",
      !l && "cursor-default",
      l && u > s && "cursor-default",
      e
    );
    return l ? /* @__PURE__ */ a(
      "button",
      {
        ref: d,
        type: t,
        "data-slot": "stepper-trigger",
        "aria-current": u === s ? "step" : void 0,
        disabled: n ?? u > s,
        className: h(
          _,
          "disabled:pointer-events-none disabled:opacity-100"
        ),
        onClick: (N) => {
          r?.(N), !N.defaultPrevented && v && l(u);
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
wn.displayName = "StepperTrigger";
const ze = "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]";
function $e(e, t = "default") {
  const n = t === "sm";
  return h(
    "flex shrink-0 items-center justify-center rounded-[var(--radius-full)] font-semibold tabular-nums transition-colors",
    n ? "size-6 text-[10px]" : "size-8 text-xs",
    e === "complete" && h(ze, n ? "[&_.material-symbols-outlined]:text-[14px] [&_.material-symbols-outlined]:leading-none" : "[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none"),
    e === "active" && h(
      ze,
      n ? "ring-[1.5px] ring-[var(--color-button-primary-bg)] ring-offset-[1.5px] ring-offset-background" : "ring-2 ring-[var(--color-button-primary-bg)] ring-offset-2 ring-offset-background"
    ),
    e === "upcoming" && "bg-[rgba(235,253,255,0.6)] text-[var(--muted-foreground)]"
  );
}
function He({ sm: e }) {
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
const kt = c.forwardRef(
  ({ className: e, stepDisplay: t, forceState: n, children: r, ...o }, i) => {
    const d = c.useContext(Me), s = c.useContext(Ee), l = s?.size ?? "default", m = l === "sm";
    if (n != null) {
      const N = t ?? 1, y = n === "complete";
      return /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "stepper-indicator",
          "data-state": n,
          className: h($e(n, l), e),
          ...o,
          children: r ?? (y ? /* @__PURE__ */ a(He, { sm: m }) : N)
        }
      );
    }
    if (d == null || s == null)
      throw new Error(
        "StepperIndicator must be inside StepperItem, or pass forceState for a static preview."
      );
    const u = d, v = s.value, f = u < v ? "complete" : u === v ? "active" : "upcoming", b = t ?? u + 1, _ = f === "complete";
    return /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "stepper-indicator",
        "data-state": f,
        className: h($e(f, l), e),
        ...o,
        children: r ?? (_ ? /* @__PURE__ */ a(He, { sm: m }) : b)
      }
    );
  }
);
kt.displayName = "StepperIndicator";
const St = c.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = yt(), { value: o, size: i } = ae(), d = r === o, s = r < o;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: n,
        "data-slot": "stepper-title",
        className: h(
          "text-center font-medium leading-tight break-words",
          i === "sm" ? "max-w-[7rem] text-[11px]" : "max-w-[10rem] text-xs",
          (d || s) && "text-foreground",
          !d && !s && "text-muted-foreground",
          e
        ),
        ...t
      }
    );
  }
);
St.displayName = "StepperTitle";
const xn = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "span",
    {
      ref: n,
      "data-slot": "stepper-description",
      className: h(
        "max-w-[10rem] text-center text-[11px] leading-snug text-muted-foreground break-words",
        e
      ),
      ...t
    }
  )
);
xn.displayName = "StepperDescription";
function Pr({ ...e }) {
  return /* @__PURE__ */ a(D.Root, { "data-slot": "dialog", ...e });
}
function Dr({ ...e }) {
  return /* @__PURE__ */ a(D.Trigger, { "data-slot": "dialog-trigger", ...e });
}
function Cn({ ...e }) {
  return /* @__PURE__ */ a(D.Portal, { "data-slot": "dialog-portal", ...e });
}
function Or({ ...e }) {
  return /* @__PURE__ */ a(D.Close, { "data-slot": "dialog-close", ...e });
}
function kn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: h("ef-dialog__overlay", e),
      ...t
    }
  );
}
function Ar({
  className: e,
  children: t,
  showCloseButton: n = !0,
  steps: r,
  currentStep: o = 0,
  ...i
}) {
  return /* @__PURE__ */ p(Cn, { children: [
    /* @__PURE__ */ a(kn, {}),
    /* @__PURE__ */ p(
      D.Content,
      {
        "data-slot": "dialog-content",
        className: h("ef-dialog__content", e),
        ...i,
        children: [
          t,
          n && /* @__PURE__ */ p(D.Close, { "data-slot": "dialog-close", className: "ef-dialog__close-btn", children: [
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined", style: { fontSize: 20 }, "aria-hidden": !0, children: "close" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function jr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: h("ef-dialog__header", e),
      ...t
    }
  );
}
function Vr({ steps: e, currentStep: t = 0, className: n }) {
  return /* @__PURE__ */ a(wt, { value: t, size: "sm", className: h("ef-dialog__stepper", n), children: /* @__PURE__ */ a(xt, { children: e.map((r, o) => /* @__PURE__ */ p(c.Fragment, { children: [
    o > 0 && /* @__PURE__ */ a(Re, {}),
    /* @__PURE__ */ p(Ct, { children: [
      /* @__PURE__ */ a(kt, {}),
      /* @__PURE__ */ a(St, { children: r.label })
    ] })
  ] }, o)) }) });
}
function Fr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-body",
      className: h("ef-dialog__body", e),
      ...t
    }
  );
}
function Br({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: h("ef-dialog__footer", e),
      ...t
    }
  );
}
function zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Title,
    {
      "data-slot": "dialog-title",
      className: h("ef-dialog__title", e),
      ...t
    }
  );
}
function $r({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    D.Description,
    {
      "data-slot": "dialog-description",
      className: h("ef-dialog__description", e),
      ...t
    }
  );
}
const Sn = c.forwardRef(
  ({ className: e, value: t, color: n = "grey", size: r = "md", ...o }, i) => /* @__PURE__ */ a(
    "span",
    {
      ref: i,
      "data-slot": "number-badge",
      className: h(
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
Sn.displayName = "NumberBadge";
function En(e) {
  return e === !0 || e === "alert" ? "stat-card__badge--alert" : e === "success" ? "stat-card__badge--success" : e === "info" ? "stat-card__badge--info" : "";
}
const Mn = c.forwardRef(
  ({ className: e, icon: t = "person", label: n, value: r, pct: o, color: i = "grey", size: d = "lg", variant: s = "outlined", iconBadge: l, ...m }, u) => /* @__PURE__ */ p(
    "div",
    {
      ref: u,
      "data-slot": "stat-card",
      className: h(
        "stat-card",
        `stat-card--${d}`,
        `stat-card--${i}`,
        `stat-card--${s}`,
        e
      ),
      ...m,
      children: [
        /* @__PURE__ */ p("div", { className: "stat-card__icon", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: t }),
          l && /* @__PURE__ */ a("span", { className: h("stat-card__badge", En(l)), "aria-hidden": !0 })
        ] }),
        /* @__PURE__ */ p("div", { className: "stat-card__text", children: [
          /* @__PURE__ */ a("span", { className: "stat-card__label", children: n }),
          /* @__PURE__ */ p("div", { className: "stat-card__value-row", children: [
            /* @__PURE__ */ a("span", { className: "stat-card__value", children: r }),
            o && /* @__PURE__ */ p("span", { className: "stat-card__pct", children: [
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
Mn.displayName = "StatCard";
const Rn = c.forwardRef(
  ({ className: e, size: t = "lg", children: n, ...r }, o) => /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      "data-slot": "stat-card-group",
      className: h(
        "stat-card-group",
        `stat-card-group--${t}`,
        e
      ),
      ...r,
      children: c.Children.map(n, (i, d) => /* @__PURE__ */ p(I, { children: [
        d > 0 && /* @__PURE__ */ a("div", { className: "stat-card-group__divider", "aria-hidden": !0 }),
        i
      ] }))
    }
  )
);
Rn.displayName = "StatCardGroup";
function Tn({
  to: e,
  children: t,
  className: n,
  onClick: r
}) {
  return /* @__PURE__ */ a("a", { href: e, className: n, onClick: r, children: t });
}
function In({
  tabs: e,
  avatarMenuItems: t,
  user: n,
  switchOptions: r = [],
  onSwitchUser: o,
  activePath: i = "",
  homePath: d = "/",
  logoSrc: s = "/eightfold-logo.svg",
  productName: l = "Career Hub",
  productIconSrc: m = "/career-hub-icon.svg",
  hideProductIcon: u = !1,
  searchPlaceholder: v = "Type to search",
  onSearchChange: f,
  onSearchIconClick: b,
  actionButtons: _ = [],
  LinkComponent: N = Tn,
  NavLinkComponent: y
}) {
  const [S, k] = Te(!1), [w, x] = Te(!1), C = N, M = i === "/profile", E = n.avatarType === "photo" && n.avatarPhotoSrc ? n.avatarPhotoSrc.replace("w=200&h=200", "w=80&h=80") : null, P = (g) => {
    const V = g.chevron && g.subItems && g.subItems.length > 0;
    if (g.path && V) {
      const H = i === g.path || g.subItems.some(($) => $.path === i);
      return /* @__PURE__ */ p("li", { className: "nav-menu__item navbar__tab-dropdown-wrap", children: [
        /* @__PURE__ */ p("button", { className: `navbar__tab navbar__tab--dropdown ${H ? "navbar__tab--active" : ""}`, type: "button", children: [
          /* @__PURE__ */ a("span", { className: "navbar__tab-label", children: g.label }),
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", style: { fontSize: 16, marginLeft: 2 }, children: "expand_more" })
        ] }),
        /* @__PURE__ */ a("div", { className: "navbar__tab-hover-menu", children: /* @__PURE__ */ a("div", { className: "navbar__tab-menu-inner", children: g.subItems.map(($) => /* @__PURE__ */ a(C, { to: $.path, className: "nav-menu__link navbar__tab-menu-item", children: $.label }, $.path)) }) })
      ] }, g.id);
    }
    if (g.path) {
      const H = y && y !== N, $ = i === g.path || g.path === "/" && !i;
      return H ? /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: $, children: /* @__PURE__ */ a(y, { to: g.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
        g.label,
        g.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, g.id) : /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: $, children: /* @__PURE__ */ a(C, { to: g.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
        g.label,
        g.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, g.id);
    }
    return /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { href: "#", className: "navbar__tab", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
      g.label,
      g.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) }) }, g.id);
  }, R = (g) => g.path ? g.chevron && g.subItems && g.subItems.length > 0 ? /* @__PURE__ */ p("div", { className: "navbar__menu-group", children: [
    /* @__PURE__ */ a(C, { to: g.path, className: "navbar__menu-link navbar__menu-link--parent", onClick: () => k(!1), children: g.label }),
    /* @__PURE__ */ a("div", { className: "navbar__menu-sublinks", children: g.subItems.map((H) => /* @__PURE__ */ a(
      C,
      {
        to: H.path,
        className: "navbar__menu-link navbar__menu-link--sub",
        onClick: () => k(!1),
        children: H.label
      },
      H.path
    )) })
  ] }, g.id) : /* @__PURE__ */ p(
    C,
    {
      to: g.path,
      className: "navbar__menu-link",
      onClick: () => k(!1),
      children: [
        g.label,
        g.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    g.id
  ) : /* @__PURE__ */ p(
    "a",
    {
      href: "#",
      className: "navbar__menu-link",
      onClick: (V) => {
        V.preventDefault(), g.onClick?.(), k(!1);
      },
      children: [
        g.label,
        g.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    g.id
  );
  return /* @__PURE__ */ p("nav", { className: "navbar", children: [
    /* @__PURE__ */ p("div", { className: "navbar__inner", children: [
      /* @__PURE__ */ p("div", { className: "navbar__left", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "navbar__menu-btn",
            onClick: () => k(!0),
            "aria-label": "Open menu",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__menu-btn-icon", children: "menu" })
          }
        ),
        /* @__PURE__ */ p(C, { to: d, className: "navbar__branding", children: [
          /* @__PURE__ */ a("img", { src: s, alt: "", className: "navbar__logo" }),
          /* @__PURE__ */ a("div", { className: "navbar__divider" }),
          /* @__PURE__ */ p("div", { className: "navbar__product", children: [
            !u && /* @__PURE__ */ a("img", { src: m, alt: "", className: "navbar__product-icon", width: 40, height: 40 }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__product-name ${l.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
                children: (() => {
                  const g = l.trim().split(/\s+/);
                  return g.length <= 1 ? l : /* @__PURE__ */ p(I, { children: [
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: g[0] }),
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: g.slice(1).join(" ") })
                  ] });
                })()
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(ln, { viewport: !1, variant: "underline", className: "navbar__tabs", delayDuration: 400, skipDelayDuration: 200, children: /* @__PURE__ */ a(cn, { className: "navbar__tabs-list", children: e.map(P) }) })
      ] }),
      /* @__PURE__ */ p("div", { className: "navbar__right", children: [
        /* @__PURE__ */ p("div", { className: "navbar__search-wrap", children: [
          /* @__PURE__ */ p("div", { className: "navbar__search", children: [
            /* @__PURE__ */ a("span", { className: "navbar__search-input", children: /* @__PURE__ */ a(
              Yt,
              {
                size: "small",
                shape: "pill",
                leadingIcon: "search",
                placeholder: v,
                "aria-label": "Search",
                onChange: (g) => f?.(g.target.value)
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
        /* @__PURE__ */ p("div", { className: "navbar__right-icons", children: [
          _.map((g, V) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "navbar__btn navbar__btn--action",
              "aria-label": g.ariaLabel,
              onClick: g.onClick,
              children: g.iconSrc ? /* @__PURE__ */ a("img", { src: g.iconSrc, alt: "", className: "navbar__btn-icon-img", width: 20, height: 20 }) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: g.icon ?? "circle" })
            },
            V
          )),
          /* @__PURE__ */ a("button", { type: "button", className: "navbar__btn navbar__btn--menu", "aria-label": "App switcher", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "apps" }) })
        ] }),
        /* @__PURE__ */ p(A.Root, { children: [
          /* @__PURE__ */ a(A.Trigger, { asChild: !0, children: /* @__PURE__ */ p("button", { type: "button", className: "navbar__avatar", "aria-label": "Open profile menu", children: [
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__avatar-inner ${n.avatarColor ? "navbar__avatar-inner--colored" : ""}`,
                style: n.avatarColor ? { backgroundColor: n.avatarColor } : void 0,
                children: w || !E ? /* @__PURE__ */ a("span", { className: "navbar__avatar-initials", children: n.avatarInitials ?? "?" }) : /* @__PURE__ */ a(
                  "img",
                  {
                    src: E,
                    alt: "",
                    className: "navbar__avatar-img",
                    onError: () => x(!0)
                  }
                )
              }
            ),
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__avatar-caret", "aria-hidden": !0, children: "expand_more" })
          ] }) }),
          /* @__PURE__ */ a(A.Portal, { children: /* @__PURE__ */ a(A.Content, { className: "navbar__avatar-menu", align: "end", sideOffset: 8, children: /* @__PURE__ */ p("div", { className: "navbar__avatar-menu-inner", children: [
            t.map((g) => /* @__PURE__ */ a(A.Item, { asChild: !0, children: /* @__PURE__ */ a(
              C,
              {
                to: g.path,
                className: `navbar__avatar-menu-item ${g.label === "My Profile" && M ? "navbar__avatar-menu-item--active" : ""}`,
                children: g.label
              }
            ) }, g.label)),
            r.length > 0 && o && /* @__PURE__ */ p(I, { children: [
              /* @__PURE__ */ a("div", { className: "navbar__avatar-menu-divider" }),
              /* @__PURE__ */ p("div", { className: "navbar__avatar-menu-switch", children: [
                /* @__PURE__ */ a(
                  "input",
                  {
                    type: "text",
                    placeholder: "Switch To...",
                    className: "navbar__avatar-menu-input",
                    "aria-label": "Switch to"
                  }
                ),
                r.map((g) => /* @__PURE__ */ a(A.Item, { asChild: !0, children: /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "navbar__avatar-menu-option",
                    onClick: () => o(g.userId),
                    children: g.label
                  }
                ) }, g.userId))
              ] })
            ] })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a(D.Root, { open: S, onOpenChange: k, children: /* @__PURE__ */ p(D.Portal, { children: [
      /* @__PURE__ */ a(D.Overlay, { className: "navbar__menu-overlay" }),
      /* @__PURE__ */ p(D.Content, { className: "navbar__menu-drawer", "aria-describedby": void 0, children: [
        /* @__PURE__ */ p("div", { className: "navbar__menu-header", children: [
          /* @__PURE__ */ a(
            "span",
            {
              className: `navbar__product-name ${l.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
              children: (() => {
                const g = l.trim().split(/\s+/);
                return g.length <= 1 ? l : /* @__PURE__ */ p(I, { children: [
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: g[0] }),
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: g.slice(1).join(" ") })
                ] });
              })()
            }
          ),
          /* @__PURE__ */ a(D.Close, { asChild: !0, children: /* @__PURE__ */ a("button", { type: "button", className: "navbar__menu-close", "aria-label": "Close menu", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" }) }) })
        ] }),
        /* @__PURE__ */ a("nav", { className: "navbar__menu-nav", children: e.map(R) })
      ] })
    ] }) })
  ] });
}
const Et = c.createContext({
  variant: "career-hub",
  careerHubSize: "parent"
});
function Ln() {
  return c.useContext(Et);
}
const Pn = ee(
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
), Mt = c.forwardRef(
  ({ className: e, variant: t, chSize: n = "parent", sticky: r = !1, overlayBackground: o = !1, ...i }, d) => {
    const s = t ?? "career-hub", l = {
      variant: s,
      careerHubSize: s === "career-hub" ? n : "parent"
    };
    return /* @__PURE__ */ a(Et.Provider, { value: l, children: /* @__PURE__ */ a(
      "header",
      {
        ref: d,
        "data-slot": "header",
        "data-variant": s,
        "data-ch-size": s === "career-hub" ? n : void 0,
        className: h(
          Pn({ variant: s }),
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
Mt.displayName = "Header";
const Dn = {
  profile: "h-[var(--header-career-hub-profile-height)] min-h-[var(--header-career-hub-profile-height)] flex-wrap items-start content-start gap-y-3 pb-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:pb-6 md:gap-5",
  parent: "h-[var(--header-career-hub-parent-height)] min-h-[var(--header-career-hub-parent-height)] items-start gap-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)]",
  child: "h-[var(--header-career-hub-child-height)] min-h-[var(--header-career-hub-child-height)] items-start gap-3 pb-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)]"
}, Rt = c.forwardRef(
  ({ className: e, actions: t, children: n, ...r }, o) => {
    const { variant: i, careerHubSize: d } = Ln(), s = "flex min-h-12 w-full max-w-[100vw] items-start gap-3 py-0 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:h-[var(--navbar-height,3.75rem)] md:gap-4", l = h(
      "flex w-full max-w-[100vw] items-start",
      Dn[d]
    );
    return /* @__PURE__ */ p(
      "div",
      {
        ref: o,
        "data-slot": "header-toolbar",
        className: h(i === "talent-acquisition" ? s : l, e),
        ...r,
        children: [
          n,
          t != null ? /* @__PURE__ */ a("div", { "data-slot": "header-actions", children: t }) : null
        ]
      }
    );
  }
);
Rt.displayName = "HeaderToolbar";
const On = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-actions", className: h(e), ...t })
);
On.displayName = "HeaderActions";
const An = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "header-group",
      className: h("flex min-w-0 items-center gap-2 md:gap-3", e),
      ...t
    }
  )
);
An.displayName = "HeaderGroup";
const Tt = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("h1", { ref: n, "data-slot": "header-title", className: h(e), ...t })
);
Tt.displayName = "HeaderTitle";
const It = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-text-group", className: h(e), ...t })
);
It.displayName = "HeaderTextGroup";
const Lt = c.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("p", { ref: n, "data-slot": "header-secondary", className: h(e), ...t })
);
Lt.displayName = "HeaderSecondary";
const jn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_ch_prof)"><rect width="1440" height="540" fill="white"/><path d="M760 77.8125L860 20V120L760 177.812V77.8125Z" fill="#C15151"/><path d="M960 77.8125L860 20V120L960 177.812V77.8125Z" fill="#F29D31"/><path d="M1060 251.25L1160 193.438V293.438L1060 351.25V251.25Z" fill="#69717F"/><path d="M1260 251.25L1160 193.438V293.438L1260 351.25V251.25Z" fill="#2DB3C7"/><path d="M1160 -6.5625L1060 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#F29D31"/><path d="M1360 93.4375L1260 35.625V135.625L1360 193.438V93.4375Z" fill="#F29D31"/><path d="M960 -22.1875L860 -80V20L960 77.8125V-22.1875Z" fill="#2DB3C7"/><path d="M1460 351.25L1360 293.438V393.438L1460 451.25V351.25Z" fill="#858B98"/><path d="M1460 451.25L1360 393.438V493.438L1460 551.25V451.25Z" fill="#2DB3C7"/><path d="M1460 251.25L1360 193.438V293.438L1460 351.25V251.25Z" fill="#E46F6F"/><path d="M1160 -6.5625L1260 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1160 93.4375L1260 35.625V135.625L1160 193.438V93.4375Z" fill="#69717F"/><path d="M1360 -6.5625L1460 -64.375V35.625L1360 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1360 93.4375L1460 35.625V135.625L1360 193.438V93.4375Z" fill="#69717F"/><path d="M1060 35.625L960 -22.1875V77.8125L1060 135.625V35.625Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', Vn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_ch_def)"><rect width="1440" height="292" fill="white"/><path d="M760 80.8585L860 20.7829V124.697L760 184.773V80.8585Z" fill="#C15151"/><path d="M960 80.8585L860 20.7829V124.697L960 184.773V80.8585Z" fill="#F29D31"/><path d="M1060 261.085L1160 201.01V304.924L1060 365V261.085Z" fill="#69717F"/><path d="M1260 261.085L1160 201.01V304.924L1260 365V261.085Z" fill="#2DB3C7"/><path d="M1160 -6.8194L1060 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#F29D31"/><path d="M1360 97.0952L1260 37.0196V140.934L1360 201.01V97.0952Z" fill="#F29D31"/><path d="M960 -23.056L860 -83.1317V20.7829L960 80.8586V-23.056Z" fill="#2DB3C7"/><path d="M1460 261.085L1360 201.01V304.924L1460 365V261.085Z" fill="#E46F6F"/><path d="M1160 -6.8194L1260 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1160 97.0952L1260 37.0196V140.934L1160 201.01V97.0952Z" fill="#69717F"/><path d="M1360 -6.8194L1460 -66.895V37.0196L1360 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1360 97.0952L1460 37.0196V140.934L1360 201.01V97.0952Z" fill="#69717F"/><path d="M1060 37.0196L960 -23.0561V80.8585L1060 140.934V37.0196Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function Fn(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? jn : Vn)}")`;
}
function Bn(e) {
  return e === "talent-acquisition" ? "linear-gradient(180deg, color-mix(in srgb, var(--color-background2-blue) 50%, transparent) 0%, var(--background) 92%)" : "linear-gradient(180deg, color-mix(in srgb, var(--color-background1-grey) 65%, transparent) 0%, var(--color-background2-grey) 95%)";
}
function zn(e, t) {
  const n = !!t.src?.trim(), r = e === "career-hub" && !n && t.chevronsVariant != null;
  return n && t.src ? {
    hasImage: !0,
    isChevrons: !1,
    fillStyle: {
      backgroundImage: t.imageScrim ? `${Bn(e)}, url(${t.src})` : `url(${t.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  } : r && t.chevronsVariant ? {
    hasImage: !1,
    isChevrons: !0,
    fillStyle: {
      backgroundColor: "var(--color-background1-grey)",
      backgroundImage: Fn(t.chevronsVariant),
      /** Fill the whole slot (e.g. navbar + header): scale up like object-fit: cover; anchor top-right. */
      backgroundPosition: "right top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  } : {
    hasImage: !1,
    isChevrons: !1,
    fillStyle: void 0
  };
}
const Pt = c.forwardRef(
  ({
    className: e,
    variant: t,
    src: n,
    imageScrim: r = !0,
    chevronsVariant: o,
    children: i,
    ...d
  }, s) => {
    const { fillStyle: l, hasImage: m, isChevrons: u } = zn(t, {
      src: n,
      imageScrim: r,
      chevronsVariant: o
    });
    return /* @__PURE__ */ p(
      "div",
      {
        ref: s,
        "data-slot": "product-background",
        "data-variant": t,
        className: h("relative isolate w-full overflow-hidden", e),
        ...d,
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              "aria-hidden": !0,
              "data-slot": "product-background-fill",
              ...m ? { "data-has-image": "" } : {},
              ...u ? { "data-ch-chevrons": "" } : {},
              className: h(
                "pointer-events-none absolute inset-0 -z-10",
                (m || u) && "min-h-full min-w-full"
              ),
              style: l
            }
          ),
          /* @__PURE__ */ a("div", { className: "relative z-0 min-h-0", children: i })
        ]
      }
    );
  }
);
Pt.displayName = "ProductBackground";
const Hr = "/eightfold-logo.svg", Ur = "/ai-agent.svg", $n = "/copilot.svg", Gr = ["talent-acquisition", "career-hub"], Hn = {
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
function Kr(e, t = "medium") {
  return `${J}/${W[e][t]}`;
}
function Zr(e, t = "medium") {
  return {
    productName: Hn[e],
    productIconSrc: `${J}/${W[e][t]}`
  };
}
const Wr = Object.keys(W).reduce(
  (e, t) => (e[t] = {
    small: `${J}/${W[t].small}`,
    medium: `${J}/${W[t].medium}`
  }, e),
  {}
), qr = [
  { label: "My Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
  { label: "Help", path: "/help" },
  { label: "Sign out", path: "/sign-out" }
], Yr = [
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
], Xr = [
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
  { id: "my-team", label: "My team", path: "/my-team" }
], Qr = [
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
], Jr = [
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
], eo = [
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
], to = "Search for positions or candidates", ao = [
  { iconSrc: $n, ariaLabel: "Copilot" },
  { icon: "work_outline", ariaLabel: "Talent" },
  { icon: "notifications", ariaLabel: "Notifications" }
];
function no({
  chSize: e = "parent",
  title: t,
  secondary: n,
  actions: r,
  navbarProps: o,
  chevronsVariant: i,
  children: d
}) {
  return /* @__PURE__ */ p(I, { children: [
    /* @__PURE__ */ a(Pt, { variant: "career-hub", chevronsVariant: i ?? (e === "profile" ? "profile" : "default"), children: /* @__PURE__ */ p("div", { className: "career-hub-shell", children: [
      /* @__PURE__ */ a(In, { ...o }),
      /* @__PURE__ */ a(Mt, { variant: "career-hub", chSize: e, overlayBackground: !0, children: /* @__PURE__ */ a(Rt, { actions: r, children: /* @__PURE__ */ p(It, { children: [
        /* @__PURE__ */ a(Tt, { children: t }),
        n && /* @__PURE__ */ a(Lt, { children: n })
      ] }) }) })
    ] }) }),
    d
  ] });
}
export {
  Ur as AI_AGENT_LOGO_PATH,
  tr as Badge,
  ar as Breadcrumb,
  lr as BreadcrumbEllipsis,
  rr as BreadcrumbItem,
  or as BreadcrumbLink,
  nr as BreadcrumbList,
  ir as BreadcrumbPage,
  sr as BreadcrumbSeparator,
  Ht as Button,
  Jn as ButtonDropdown,
  Qr as CAREER_HUB_CHRO_TABS,
  Jr as CAREER_HUB_HRBP_TABS,
  $n as COPILOT_LOGO_PATH,
  io as CORNER_RADIUS_TOKENS,
  no as CareerHubShell,
  cr as CourseObjectCard,
  _r as DataTable,
  yr as DataTableBody,
  Cr as DataTableCell,
  xr as DataTableHead,
  Nr as DataTableHeader,
  wr as DataTableRow,
  Pr as Dialog,
  Fr as DialogBody,
  Or as DialogClose,
  Ar as DialogContent,
  $r as DialogDescription,
  Br as DialogFooter,
  jr as DialogHeader,
  kn as DialogOverlay,
  Cn as DialogPortal,
  Vr as DialogStepper,
  zr as DialogTitle,
  Dr as DialogTrigger,
  ne as DropdownMenu,
  Zt as DropdownMenuContent,
  Wt as DropdownMenuItem,
  Kt as DropdownMenuPortal,
  qt as DropdownMenuSeparator,
  Gt as DropdownMenuTrigger,
  Hr as EIGHTFOLD_LOGO_PATH,
  qr as EMPLOYEE_AVATAR_MENU_ITEMS,
  Yr as EMPLOYEE_NON_MANAGER_TABS,
  Mt as Header,
  On as HeaderActions,
  An as HeaderGroup,
  Lt as HeaderSecondary,
  It as HeaderTextGroup,
  Tt as HeaderTitle,
  Rt as HeaderToolbar,
  Yt as Input,
  da as InsightCard,
  Xr as MANAGER_TABS,
  mr as MentorInsightCard,
  In as Navbar,
  ln as NavigationMenu,
  fr as NavigationMenuContent,
  re as NavigationMenuItem,
  ie as NavigationMenuLink,
  cn as NavigationMenuList,
  pr as NavigationMenuTrigger,
  dn as NavigationMenuViewport,
  Sn as NumberBadge,
  Ke as OpenTo,
  Gr as PRIMARY_NAVBAR_PRODUCT_IDS,
  Hn as PRODUCT_NAMES,
  ur as PeopleObjectCard,
  _e as Pill,
  Pt as ProductBackground,
  _n as Progress,
  dr as ProjectObjectCard,
  so as SPACING_TOKENS,
  kr as Select,
  Rr as SelectContent,
  Sr as SelectGroup,
  Ir as SelectItem,
  Tr as SelectLabel,
  vn as SelectScrollDownButton,
  hn as SelectScrollUpButton,
  Lr as SelectSeparator,
  Mr as SelectTrigger,
  Er as SelectValue,
  Jt as SkillTag,
  Mn as StatCard,
  Rn as StatCardGroup,
  wt as Stepper,
  xn as StepperDescription,
  kt as StepperIndicator,
  Ct as StepperItem,
  xt as StepperList,
  Re as StepperSeparator,
  St as StepperTitle,
  wn as StepperTrigger,
  ao as TALENT_ACQUISITION_ACTION_BUTTONS,
  eo as TALENT_ACQUISITION_RECRUITER_TABS,
  to as TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
  hr as Tabs,
  br as TabsContent,
  vr as TabsList,
  gr as TabsTrigger,
  ea as Tag,
  er as TagGroup,
  na as badgeVariants,
  $t as buttonVariants,
  Zr as getNavbarProductConfig,
  Kr as getProductLogoPath,
  Wr as productLogos,
  un as tabsListVariants
};
