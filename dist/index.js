import { jsxs as p, Fragment as P, jsx as a } from "react/jsx-runtime";
import * as l from "react";
import B, { isValidElement as he, cloneElement as be, forwardRef as St, useState as Re } from "react";
import { Slot as ge, createSlot as se } from "@radix-ui/react-slot";
import { cva as te } from "class-variance-authority";
import { clsx as Rt } from "clsx";
import { twMerge as Tt } from "tailwind-merge";
import * as O from "@radix-ui/react-dropdown-menu";
import * as Te from "@radix-ui/react-toggle-group";
import * as It from "react-dom";
import Lt, { createPortal as Pt } from "react-dom";
import * as ae from "@radix-ui/react-tabs";
import { Check as Dt, ChevronDown as He, ChevronUp as Ot } from "lucide-react";
import * as I from "@radix-ui/react-select";
import * as le from "@radix-ui/react-progress";
import * as Z from "@radix-ui/react-dialog";
import { CORNER_RADIUS_TOKENS as Hr, SPACING_TOKENS as Ur } from "./tokens.js";
function b(...e) {
  return Tt(Rt(e));
}
const At = te("btn", {
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
  return e == null ? null : he(e) ? be(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function jt({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  badge: d,
  children: s,
  ...c
}) {
  const m = r ? ge : "button", h = o != null || i != null || d != null ? /* @__PURE__ */ p(P, { children: [
    o != null && Ie(o, "inline-start"),
    s,
    d != null && /* @__PURE__ */ a("span", { className: "btn__badge", "data-slot": "button-badge", children: d > 99 ? "99+" : d }),
    i != null && Ie(i, "inline-end")
  ] }) : s;
  return /* @__PURE__ */ a(
    m,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: b(At({ variant: t, size: n, className: e })),
      ...c,
      children: h
    }
  );
}
function Vt(e) {
  return /* @__PURE__ */ a(
    O.Root,
    {
      "data-slot": "dropdown-menu",
      ...e
    }
  );
}
function Ft(e) {
  return /* @__PURE__ */ a(
    O.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Bt(e) {
  return /* @__PURE__ */ a(O.Portal, { ...e });
}
function zt({
  className: e,
  sideOffset: t = 4,
  align: n = "start",
  ...r
}) {
  return /* @__PURE__ */ a(O.Portal, { children: /* @__PURE__ */ a(
    O.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: b(e),
      ...r
    }
  ) });
}
function $t({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Item,
    {
      "data-slot": "dropdown-menu-item",
      className: b(e),
      ...t
    }
  );
}
function Ht({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: b(e),
      ...t
    }
  );
}
const re = Object.assign(Vt, {
  Trigger: Ft,
  Portal: Bt,
  Content: zt,
  Item: $t,
  Separator: Ht
});
function Gn({
  children: e,
  menu: t,
  variant: n = "outline",
  size: r = "default",
  trigger: o,
  buttonProps: i,
  align: d = "end",
  sideOffset: s = 4
}) {
  const c = o ?? /* @__PURE__ */ a(jt, { variant: n, size: r, ...i, children: e });
  return /* @__PURE__ */ p(re, { children: [
    /* @__PURE__ */ a(re.Trigger, { asChild: !0, children: c }),
    /* @__PURE__ */ a(re.Content, { align: d, sideOffset: s, children: t })
  ] });
}
const Ut = St(function({
  size: t = "medium",
  shape: n = "rounded",
  state: r = "default",
  leadingIcon: o,
  trailingIcon: i,
  onClear: d,
  className: s = "",
  disabled: c,
  type: m = "text",
  ...u
}, h) {
  const f = [
    "input",
    `input--${t}`,
    `input--${n}`,
    r !== "default" && `input--${r}`,
    c && "input--disabled",
    s
  ].filter(Boolean).join(" "), g = (_) => typeof _ == "string" ? /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: _ }) : _;
  return /* @__PURE__ */ p("div", { className: f, children: [
    o != null && /* @__PURE__ */ a("span", { className: "input__leading-icon", "aria-hidden": !0, children: g(o) }),
    /* @__PURE__ */ a(
      "input",
      {
        ref: h,
        type: m,
        className: "input__field",
        disabled: c,
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
        disabled: c,
        "aria-label": "Clear",
        children: i != null ? g(i) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" })
      }
    ) : /* @__PURE__ */ a("span", { className: "input__trailing-icon", "aria-hidden": !0, children: g(i) }) })
  ] });
});
function _e({ icon: e, children: t, variant: n = "neutral", size: r = "medium", className: o = "" }) {
  return /* @__PURE__ */ p("span", { className: `pill pill--${n} pill--${r} ${o}`.trim(), children: [
    e && /* @__PURE__ */ a("span", { className: "material-symbols-outlined pill__icon", children: e }),
    t
  ] });
}
function Kn({ children: e, variant: t = "selected", onRemove: n, onAdd: r, className: o = "" }) {
  const i = `skill-tag skill-tag--${t} ${o}`.trim();
  return t === "addable" ? /* @__PURE__ */ p("button", { type: "button", className: i, onClick: r, children: [
    e,
    /* @__PURE__ */ a("span", { className: "material-symbols-outlined skill-tag__action", children: "add" })
  ] }) : /* @__PURE__ */ p("span", { className: i, children: [
    e,
    n && /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "skill-tag__remove",
        onClick: n,
        "aria-label": `Remove ${e}`,
        children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "close" })
      }
    )
  ] });
}
function Le(e, t) {
  return e == null ? null : he(e) ? be(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function Gt({
  children: e,
  onRemove: t,
  variant: n = "default",
  size: r = "24",
  value: o,
  className: i,
  disabled: d = !1,
  leadingIcon: s,
  trailingIcon: c
}) {
  const m = b(
    "tag",
    r === "24" && "tag--24",
    r === "30" && "tag--30",
    r === "44" && "tag--44",
    n === "selected" && "tag--selected",
    n === "disabled" && "tag--disabled",
    i
  );
  return /* @__PURE__ */ p("span", { className: m, "data-value": o, children: [
    s != null && Le(s, "inline-start"),
    e,
    c != null && Le(c, "inline-end"),
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
function Kt(e) {
  return b("tag", "tag--selectable", `tag--${e}`);
}
function Zt(e) {
  return B.isValidElement(e) && typeof e.type != "string" && (e.type === Gt || e.type.displayName === "Tag");
}
function Zn({
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
    Te.Root,
    {
      type: e,
      value: t,
      onValueChange: n,
      defaultValue: r,
      disabled: o,
      className: b("tag-group", s),
      asChild: !1,
      children: B.Children.map(d, (c) => {
        if (!Zt(c)) return c;
        const m = c.props.value;
        if (m == null) return c;
        const { leadingIcon: u, trailingIcon: h } = c.props;
        return /* @__PURE__ */ p(
          Te.Item,
          {
            value: m,
            className: Kt(i),
            disabled: c.props.disabled,
            children: [
              u != null && /* @__PURE__ */ a("span", { "data-icon": "inline-start", children: u }),
              c.props.children,
              h != null && /* @__PURE__ */ a("span", { "data-icon": "inline-end", children: h })
            ]
          },
          m
        );
      })
    }
  );
}
const Wt = te("badge", {
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
  return e == null ? null : he(e) ? be(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function Wn({
  className: e,
  variant: t = "default",
  size: n = "24",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  children: d,
  ...s
}) {
  const c = r ? ge : "span", m = r ? d : /* @__PURE__ */ p(P, { children: [
    o != null && Pe(o, "inline-start"),
    d,
    i != null && Pe(i, "inline-end")
  ] });
  return /* @__PURE__ */ a(
    c,
    {
      "data-slot": "badge",
      "data-variant": t,
      "data-size": n,
      className: b(Wt({ variant: t, size: n }), e),
      ...s,
      children: m
    }
  );
}
const qt = "m-0 flex list-none flex-wrap items-center gap-1 p-0 break-words sm:gap-1", Yt = "inline-flex items-center gap-1", Ue = "rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[var(--color-blue-70)] no-underline transition-colors hover:text-[var(--color-blue-80)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background", Xt = "text-[length:14px] font-medium leading-[1.43] text-[var(--foreground)]", Qt = "inline-flex size-5 shrink-0 select-none items-center justify-center text-center text-[20px] font-normal leading-none text-[var(--color-grey-60)] [&>svg]:size-5 [&>svg]:shrink-0";
function qn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: b(e),
      ...t
    }
  );
}
function Yn({ className: e, ...t }) {
  return /* @__PURE__ */ a("ol", { "data-slot": "breadcrumb-list", className: b(qt, e), ...t });
}
function Xn({ className: e, ...t }) {
  return /* @__PURE__ */ a("li", { "data-slot": "breadcrumb-item", className: b(Yt, e), ...t });
}
function Qn({ asChild: e, className: t, ...n }) {
  return /* @__PURE__ */ a(e ? ge : "a", { "data-slot": "breadcrumb-link", className: b(Ue, t), ...n });
}
function Jn({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: b(Xt, e),
      ...t
    }
  );
}
function er({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: b(Qt, t),
      ...n,
      children: e ?? "/"
    }
  );
}
function tr({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      className: b(Ue, e),
      ...n,
      children: t ?? "…"
    }
  );
}
const Jt = {
  coffee: { icon: "local_cafe", title: "Coffee chat" },
  mentoring: { icon: "group", title: "Mentoring" },
  project: { icon: "bar_chart", title: "Project" }
};
function ea({ items: e, showLabel: t = !0, labelAsButton: n = !0, className: r = "" }) {
  return /* @__PURE__ */ p("div", { className: `open-to ${r}`.trim(), children: [
    t && (n ? /* @__PURE__ */ p("button", { type: "button", className: "open-to__select", "aria-haspopup": "listbox", "aria-expanded": !1, children: [
      /* @__PURE__ */ a("span", { className: "open-to__label", children: "Open to" }),
      /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) : /* @__PURE__ */ a("span", { className: "open-to__label open-to__label--plain", children: "Open to" })),
    /* @__PURE__ */ a("div", { className: "open-to__icons", children: e.map((o) => {
      const { icon: i, title: d } = Jt[o];
      return /* @__PURE__ */ a("span", { className: `open-to__icon open-to__icon--${o}`, title: d, "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__icon-symbol", children: i }) }, o);
    }) })
  ] });
}
function ta({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function aa({
  title: e,
  badge: t,
  description: n,
  recommendedLabel: r,
  icon: o,
  bgColor: i,
  iconBgColor: d,
  iconColor: s,
  textColor: c = "#3B2600",
  buttonLabel: m,
  buttonHref: u = "#",
  children: h,
  fixedSize: f = !0,
  LinkComponent: g = ta
}) {
  return /* @__PURE__ */ p(
    "div",
    {
      className: `insight-card ${f ? "insight-card--fixed" : ""}`,
      style: {
        "--insight-card-bg": i,
        "--insight-card-icon-bg": d,
        "--insight-card-icon-color": s,
        "--insight-card-text-color": c
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
        /* @__PURE__ */ a("div", { className: "insight-card__content", children: h }),
        /* @__PURE__ */ a(g, { to: u, className: "insight-card__btn", children: m })
      ]
    }
  );
}
function na({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function ar({
  course: e,
  href: t = "#",
  showBookmark: n = !0,
  renderFacepile: r,
  LinkComponent: o = na
}) {
  const i = o, d = /* @__PURE__ */ p("div", { className: "course-object-card__inner", children: [
    /* @__PURE__ */ p("div", { className: "course-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "menu_book", variant: "blueGreen", size: "small", children: "Course" }) }),
      /* @__PURE__ */ p("div", { className: "course-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Add to learning plan", onClick: (s) => s.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "course-object-card__icon-btn", "aria-label": "Save course", onClick: (s) => s.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "course-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "course-object-card__title", children: e.title }),
      (e.provider || e.duration) && /* @__PURE__ */ a("span", { className: "course-object-card__meta", children: [e.provider, e.duration].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ p("div", { className: "course-object-card__skills", children: [
        e.skills.slice(0, 2).map((s) => /* @__PURE__ */ a("span", { className: "course-object-card__skill-tag", children: s }, s)),
        e.skills.length > 2 && /* @__PURE__ */ p("span", { className: "course-object-card__skill-tag course-object-card__skill-tag--more", children: [
          "+",
          e.skills.length - 2
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "course-object-card__divider", "aria-hidden": !0 }),
    /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: e.completedBy && e.completedBy.length > 0 && /* @__PURE__ */ p(P, { children: [
      r ? r({ avatarUrls: e.completedBy }) : /* @__PURE__ */ a("div", { className: "course-object-card__facepile", children: e.completedBy.map((s, c) => /* @__PURE__ */ a("img", { src: s, alt: "", className: "course-object-card__facepile-avatar" }, c)) }),
      /* @__PURE__ */ a("span", { className: "course-object-card__completed-text", children: "completed this" })
    ] }) }) })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "course-object-card", children: d }) : /* @__PURE__ */ a(i, { to: t, className: "course-object-card", children: d });
}
function ra({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function nr({
  project: e,
  href: t = "#",
  showBookmark: n = !0,
  showBottomBar: r = !0,
  renderFacepile: o,
  LinkComponent: i = ra
}) {
  const d = i, s = /* @__PURE__ */ p("div", { className: "project-object-card__inner", children: [
    /* @__PURE__ */ p("div", { className: "project-object-card__banner", children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__tag-wrap", children: /* @__PURE__ */ a(_e, { icon: "folder", variant: "blueGreen", size: "small", children: "Project" }) }),
      /* @__PURE__ */ p("div", { className: "project-object-card__banner-actions", children: [
        /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Add to workspace", onClick: (c) => c.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "add" }) }),
        n && /* @__PURE__ */ a("button", { type: "button", className: "project-object-card__icon-btn", "aria-label": "Save project", onClick: (c) => c.preventDefault(), children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: "bookmark" }) })
      ] })
    ] }),
    /* @__PURE__ */ p("div", { className: "project-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "project-object-card__title", children: e.title }),
      (e.owner || e.status) && /* @__PURE__ */ a("span", { className: "project-object-card__meta", children: [e.owner, e.status].filter(Boolean).join(" • ") }),
      e.skills && e.skills.length > 0 && /* @__PURE__ */ p("div", { className: "project-object-card__skills", children: [
        e.skills.slice(0, 2).map((c) => /* @__PURE__ */ a("span", { className: "project-object-card__skill-tag", children: c }, c)),
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
    r && /* @__PURE__ */ p(P, { children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: e.contributedBy && e.contributedBy.length > 0 && /* @__PURE__ */ p(P, { children: [
        o ? o({ avatarUrls: e.contributedBy }) : /* @__PURE__ */ a("div", { className: "project-object-card__facepile", children: e.contributedBy.map((c, m) => /* @__PURE__ */ a("img", { src: c, alt: "", className: "project-object-card__facepile-avatar" }, m)) }),
        /* @__PURE__ */ a("span", { className: "project-object-card__contributed-text", children: "contributors" })
      ] }) }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "project-object-card", children: s }) : /* @__PURE__ */ a(d, { to: t, className: "project-object-card", children: s });
}
function oa(e) {
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[1][0]).toUpperCase().slice(0, 2) : e.slice(0, 2).toUpperCase() || "?";
}
function ia({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function rr({
  person: e,
  href: t = "#",
  showBookmark: n = !0,
  renderAvatar: r,
  LinkComponent: o = ia
}) {
  const i = o, d = /* @__PURE__ */ p(P, { children: [
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
      fallback: oa(e.name)
    }) : /* @__PURE__ */ a("img", { src: e.avatarSrc, alt: "", className: "people-object-card__avatar" }) }),
    /* @__PURE__ */ p("div", { className: "people-object-card__body", children: [
      /* @__PURE__ */ a("span", { className: "people-object-card__name", children: e.name }),
      /* @__PURE__ */ a("span", { className: "people-object-card__title", children: e.title }),
      /* @__PURE__ */ a("span", { className: "people-object-card__email", children: e.email })
    ] }),
    /* @__PURE__ */ a("div", { className: "people-object-card__divider", "aria-hidden": !0 }),
    /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: /* @__PURE__ */ a(ea, { items: [e.openTo], labelAsButton: !1, className: "people-object-card__open-to" }) }) })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "people-object-card", children: d }) : /* @__PURE__ */ a(i, { to: t, className: "people-object-card", children: d });
}
const G = {
  title: "Mentors",
  badge: "11",
  description: "Get guidance and support",
  recommendedLabel: "Recommended for you",
  buttonLabel: "Explore Mentors",
  buttonHref: "#"
};
function or({
  title: e = G.title,
  badge: t = G.badge,
  description: n = G.description,
  recommendedLabel: r = G.recommendedLabel,
  buttonLabel: o = G.buttonLabel,
  buttonHref: i = G.buttonHref,
  mentor: d,
  fixedSize: s = !0,
  LinkComponent: c
}) {
  return /* @__PURE__ */ a(
    aa,
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
      LinkComponent: c,
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
function Ge(e, t = []) {
  let n = [];
  function r(i, d) {
    const s = l.createContext(d), c = n.length;
    n = [...n, d];
    const m = (h) => {
      const { scope: f, children: g, ..._ } = h, N = f?.[e]?.[c] || s, w = l.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ a(N.Provider, { value: w, children: g });
    };
    m.displayName = i + "Provider";
    function u(h, f) {
      const g = f?.[e]?.[c] || s, _ = l.useContext(g);
      if (_) return _;
      if (d !== void 0) return d;
      throw new Error(`\`${h}\` must be used within \`${i}\``);
    }
    return [m, u];
  }
  const o = () => {
    const i = n.map((d) => l.createContext(d));
    return function(s) {
      const c = s?.[e] || i;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, sa(o, ...t)];
}
function sa(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const d = r.reduce((s, { useScope: c, scopeName: m }) => {
        const h = c(i)[`__scope${m}`];
        return { ...s, ...h };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: d }), [d]);
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
var la = [
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
], D = la.reduce((e, t) => {
  const n = se(`Primitive.${t}`), r = l.forwardRef((o, i) => {
    const { asChild: d, ...s } = o, c = d ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ce(e, t) {
  e && It.flushSync(() => e.dispatchEvent(t));
}
var H = globalThis?.document ? l.useLayoutEffect : () => {
}, ca = l[" useInsertionEffect ".trim().toString()] || H;
function Ke({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, d] = da({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, c = s ? e : o;
  {
    const u = l.useRef(e !== void 0);
    l.useEffect(() => {
      const h = u.current;
      h !== s && console.warn(
        `${r} is changing from ${h ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, r]);
  }
  const m = l.useCallback(
    (u) => {
      if (s) {
        const h = ua(u) ? u(e) : u;
        h !== e && d.current?.(h);
      } else
        i(u);
    },
    [s, e, i, d]
  );
  return [c, m];
}
function da({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = l.useState(e), o = l.useRef(n), i = l.useRef(t);
  return ca(() => {
    i.current = t;
  }, [t]), l.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function ua(e) {
  return typeof e == "function";
}
function De(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ze(...e) {
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
function F(...e) {
  return l.useCallback(Ze(...e), e);
}
var ma = l.createContext(void 0);
function pa(e) {
  const t = l.useContext(ma);
  return e || t || "ltr";
}
function fa(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var q = (e) => {
  const { present: t, children: n } = e, r = va(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), i = F(r.ref, ha(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: i }) : null;
};
q.displayName = "Presence";
function va(e) {
  const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), i = l.useRef("none"), d = e ? "mounted" : "unmounted", [s, c] = fa(d, {
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
  return l.useEffect(() => {
    const m = Y(r.current);
    i.current = s === "mounted" ? m : "none";
  }, [s]), H(() => {
    const m = r.current, u = o.current;
    if (u !== e) {
      const f = i.current, g = Y(m);
      e ? c("MOUNT") : g === "none" || m?.display === "none" ? c("UNMOUNT") : c(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), H(() => {
    if (t) {
      let m;
      const u = t.ownerDocument.defaultView ?? window, h = (g) => {
        const N = Y(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && N && (c("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, f = (g) => {
        g.target === t && (i.current = Y(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        u.clearTimeout(m), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: l.useCallback((m) => {
      r.current = m ? getComputedStyle(m) : null, n(m);
    }, [])
  };
}
function Y(e) {
  return e?.animationName || "none";
}
function ha(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ba = l[" useId ".trim().toString()] || (() => {
}), ga = 0;
function We(e) {
  const [t, n] = l.useState(ba());
  return H(() => {
    n((r) => r ?? String(ga++));
  }, [e]), t ? `radix-${t}` : "";
}
function qe(e) {
  const t = e + "CollectionProvider", [n, r] = Ge(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), d = (N) => {
    const { scope: w, children: M } = N, E = B.useRef(null), y = B.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: w, itemMap: y, collectionRef: E, children: M });
  };
  d.displayName = t;
  const s = e + "CollectionSlot", c = se(s), m = B.forwardRef(
    (N, w) => {
      const { scope: M, children: E } = N, y = i(s, M), C = F(w, y.collectionRef);
      return /* @__PURE__ */ a(c, { ref: C, children: E });
    }
  );
  m.displayName = s;
  const u = e + "CollectionItemSlot", h = "data-radix-collection-item", f = se(u), g = B.forwardRef(
    (N, w) => {
      const { scope: M, children: E, ...y } = N, C = B.useRef(null), x = F(w, C), S = i(u, M);
      return B.useEffect(() => (S.itemMap.set(C, { ref: C, ...y }), () => {
        S.itemMap.delete(C);
      })), /* @__PURE__ */ a(f, { [h]: "", ref: x, children: E });
    }
  );
  g.displayName = u;
  function _(N) {
    const w = i(e + "CollectionConsumer", N);
    return B.useCallback(() => {
      const E = w.collectionRef.current;
      if (!E) return [];
      const y = Array.from(E.querySelectorAll(`[${h}]`));
      return Array.from(w.itemMap.values()).sort(
        (S, k) => y.indexOf(S.ref.current) - y.indexOf(k.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: d, Slot: m, ItemSlot: g },
    _,
    r
  ];
}
function V(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...n) => t.current?.(...n), []);
}
function _a(e, t = globalThis?.document) {
  const n = V(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Na = "DismissableLayer", de = "dismissableLayer.update", ya = "dismissableLayer.pointerDownOutside", wa = "dismissableLayer.focusOutside", Oe, Ye = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xe = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: d,
      onDismiss: s,
      ...c
    } = e, m = l.useContext(Ye), [u, h] = l.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, g] = l.useState({}), _ = F(t, (k) => h(k)), N = Array.from(m.layers), [w] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), M = N.indexOf(w), E = u ? N.indexOf(u) : -1, y = m.layersWithOutsidePointerEventsDisabled.size > 0, C = E >= M, x = Ea((k) => {
      const L = k.target, R = [...m.branches].some((v) => v.contains(L));
      !C || R || (o?.(k), d?.(k), k.defaultPrevented || s?.());
    }, f), S = Ma((k) => {
      const L = k.target;
      [...m.branches].some((v) => v.contains(L)) || (i?.(k), d?.(k), k.defaultPrevented || s?.());
    }, f);
    return _a((k) => {
      E === m.layers.size - 1 && (r?.(k), !k.defaultPrevented && s && (k.preventDefault(), s()));
    }, f), l.useEffect(() => {
      if (u)
        return n && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Oe = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(u)), m.layers.add(u), Ae(), () => {
          n && m.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Oe);
        };
    }, [u, f, n, m]), l.useEffect(() => () => {
      u && (m.layers.delete(u), m.layersWithOutsidePointerEventsDisabled.delete(u), Ae());
    }, [u, m]), l.useEffect(() => {
      const k = () => g({});
      return document.addEventListener(de, k), () => document.removeEventListener(de, k);
    }, []), /* @__PURE__ */ a(
      D.div,
      {
        ...c,
        ref: _,
        style: {
          pointerEvents: y ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: T(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: T(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: T(
          e.onPointerDownCapture,
          x.onPointerDownCapture
        )
      }
    );
  }
);
Xe.displayName = Na;
var Ca = "DismissableLayerBranch", xa = l.forwardRef((e, t) => {
  const n = l.useContext(Ye), r = l.useRef(null), o = F(t, r);
  return l.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(D.div, { ...e, ref: o });
});
xa.displayName = Ca;
function Ea(e, t = globalThis?.document) {
  const n = V(e), r = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          Qe(
            ya,
            n,
            m,
            { discrete: !0 }
          );
        };
        const m = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
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
function Ma(e, t = globalThis?.document) {
  const n = V(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Qe(wa, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ae() {
  const e = new CustomEvent(de);
  document.dispatchEvent(e);
}
function Qe(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ce(o, i) : o.dispatchEvent(i);
}
function ka(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Sa = Object.freeze({
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
}), Ra = "VisuallyHidden", Je = l.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    D.span,
    {
      ...e,
      ref: t,
      style: { ...Sa, ...e.style }
    }
  )
);
Je.displayName = Ra;
var Ta = Je, U = "NavigationMenu", [Ne, et, Ia] = qe(U), [ue, La, Pa] = qe(U), [ye] = Ge(
  U,
  [Ia, Pa]
), [Da, A] = ye(U), [Oa, Aa] = ye(U), tt = l.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: d = 200,
      skipDelayDuration: s = 300,
      orientation: c = "horizontal",
      dir: m,
      ...u
    } = e, [h, f] = l.useState(null), g = F(t, (R) => f(R)), _ = pa(m), N = l.useRef(0), w = l.useRef(0), M = l.useRef(0), [E, y] = l.useState(!0), [C, x] = Ke({
      prop: r,
      onChange: (R) => {
        const v = R !== "", j = s > 0;
        v ? (window.clearTimeout(M.current), j && y(!1)) : (window.clearTimeout(M.current), M.current = window.setTimeout(
          () => y(!0),
          s
        )), o?.(R);
      },
      defaultProp: i ?? "",
      caller: U
    }), S = l.useCallback(() => {
      window.clearTimeout(w.current), w.current = window.setTimeout(() => x(""), 150);
    }, [x]), k = l.useCallback(
      (R) => {
        window.clearTimeout(w.current), x(R);
      },
      [x]
    ), L = l.useCallback(
      (R) => {
        C === R ? window.clearTimeout(w.current) : N.current = window.setTimeout(() => {
          window.clearTimeout(w.current), x(R);
        }, d);
      },
      [C, x, d]
    );
    return l.useEffect(() => () => {
      window.clearTimeout(N.current), window.clearTimeout(w.current), window.clearTimeout(M.current);
    }, []), /* @__PURE__ */ a(
      at,
      {
        scope: n,
        isRootMenu: !0,
        value: C,
        dir: _,
        orientation: c,
        rootNavigationMenu: h,
        onTriggerEnter: (R) => {
          window.clearTimeout(N.current), E ? L(R) : k(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(N.current), S();
        },
        onContentEnter: () => window.clearTimeout(w.current),
        onContentLeave: S,
        onItemSelect: (R) => {
          x((v) => v === R ? "" : R);
        },
        onItemDismiss: () => x(""),
        children: /* @__PURE__ */ a(
          D.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: _,
            ...u,
            ref: g
          }
        )
      }
    );
  }
);
tt.displayName = U;
var me = "NavigationMenuSub", ja = l.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: d = "horizontal",
      ...s
    } = e, c = A(me, n), [m, u] = Ke({
      prop: r,
      onChange: o,
      defaultProp: i ?? "",
      caller: me
    });
    return /* @__PURE__ */ a(
      at,
      {
        scope: n,
        isRootMenu: !1,
        value: m,
        dir: c.dir,
        orientation: d,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (h) => u(h),
        onItemSelect: (h) => u(h),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ a(D.div, { "data-orientation": d, ...s, ref: t })
      }
    );
  }
);
ja.displayName = me;
var at = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: d,
    value: s,
    onItemSelect: c,
    onItemDismiss: m,
    onTriggerEnter: u,
    onTriggerLeave: h,
    onContentEnter: f,
    onContentLeave: g
  } = e, [_, N] = l.useState(null), [w, M] = l.useState(/* @__PURE__ */ new Map()), [E, y] = l.useState(null);
  return /* @__PURE__ */ a(
    Da,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: ka(s),
      baseId: We(),
      dir: o,
      orientation: i,
      viewport: _,
      onViewportChange: N,
      indicatorTrack: E,
      onIndicatorTrackChange: y,
      onTriggerEnter: V(u),
      onTriggerLeave: V(h),
      onContentEnter: V(f),
      onContentLeave: V(g),
      onItemSelect: V(c),
      onItemDismiss: V(m),
      onViewportContentChange: l.useCallback((C, x) => {
        M((S) => (S.set(C, x), new Map(S)));
      }, []),
      onViewportContentRemove: l.useCallback((C) => {
        M((x) => x.has(C) ? (x.delete(C), new Map(x)) : x);
      }, []),
      children: /* @__PURE__ */ a(Ne.Provider, { scope: t, children: /* @__PURE__ */ a(Oa, { scope: t, items: w, children: d }) })
    }
  );
}, nt = "NavigationMenuList", rt = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = A(nt, n), i = /* @__PURE__ */ a(D.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(D.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(Ne.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(pt, { asChild: !0, children: i }) : i }) });
  }
);
rt.displayName = nt;
var ot = "NavigationMenuItem", [Va, it] = ye(ot), st = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = We(), d = r || i || "LEGACY_REACT_AUTO_VALUE", s = l.useRef(null), c = l.useRef(null), m = l.useRef(null), u = l.useRef(() => {
    }), h = l.useRef(!1), f = l.useCallback((_ = "start") => {
      if (s.current) {
        u.current();
        const N = fe(s.current);
        N.length && xe(_ === "start" ? N : N.reverse());
      }
    }, []), g = l.useCallback(() => {
      if (s.current) {
        const _ = fe(s.current);
        _.length && (u.current = Ka(_));
      }
    }, []);
    return /* @__PURE__ */ a(
      Va,
      {
        scope: n,
        value: d,
        triggerRef: c,
        contentRef: s,
        focusProxyRef: m,
        wasEscapeCloseRef: h,
        onEntryKeyDown: f,
        onFocusProxyEnter: f,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ a(D.li, { ...o, ref: t })
      }
    );
  }
);
st.displayName = ot;
var pe = "NavigationMenuTrigger", lt = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = A(pe, e.__scopeNavigationMenu), d = it(pe, e.__scopeNavigationMenu), s = l.useRef(null), c = F(s, d.triggerRef, t), m = vt(i.baseId, d.value), u = ht(i.baseId, d.value), h = l.useRef(!1), f = l.useRef(!1), g = d.value === i.value;
  return /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ a(Ne.ItemSlot, { scope: n, value: d.value, children: /* @__PURE__ */ a(ft, { asChild: !0, children: /* @__PURE__ */ a(
      D.button,
      {
        id: m,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Ee(g),
        "aria-expanded": g,
        "aria-controls": u,
        ...o,
        ref: c,
        onPointerEnter: T(e.onPointerEnter, () => {
          f.current = !1, d.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: T(
          e.onPointerMove,
          J(() => {
            r || f.current || d.wasEscapeCloseRef.current || h.current || (i.onTriggerEnter(d.value), h.current = !0);
          })
        ),
        onPointerLeave: T(
          e.onPointerLeave,
          J(() => {
            r || (i.onTriggerLeave(), h.current = !1);
          })
        ),
        onClick: T(e.onClick, () => {
          i.onItemSelect(d.value), f.current = g;
        }),
        onKeyDown: T(e.onKeyDown, (_) => {
          const w = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          g && _.key === w && (d.onEntryKeyDown(), _.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ p(P, { children: [
      /* @__PURE__ */ a(
        Ta,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: d.focusProxyRef,
          onFocus: (_) => {
            const N = d.contentRef.current, w = _.relatedTarget, M = w === s.current, E = N?.contains(w);
            (M || !E) && d.onFocusProxyEnter(M ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": u })
    ] })
  ] });
});
lt.displayName = pe;
var Fa = "NavigationMenuLink", je = "navigationMenu.linkSelect", ct = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(ft, { asChild: !0, children: /* @__PURE__ */ a(
      D.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: T(
          e.onClick,
          (d) => {
            const s = d.target, c = new CustomEvent(je, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(je, (m) => o?.(m), { once: !0 }), ce(s, c), !c.defaultPrevented && !d.metaKey) {
              const m = new CustomEvent(Q, {
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
ct.displayName = Fa;
var we = "NavigationMenuIndicator", Ba = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = A(we, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Lt.createPortal(
    /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(za, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Ba.displayName = we;
var za = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = A(we, n), i = et(n), [d, s] = l.useState(
    null
  ), [c, m] = l.useState(null), u = o.orientation === "horizontal", h = !!o.value;
  l.useEffect(() => {
    const _ = i().find((N) => N.value === o.value)?.ref.current;
    _ && s(_);
  }, [i, o.value]);
  const f = () => {
    d && m({
      size: u ? d.offsetWidth : d.offsetHeight,
      offset: u ? d.offsetLeft : d.offsetTop
    });
  };
  return ve(d, f), ve(o.indicatorTrack, f), c ? /* @__PURE__ */ a(
    D.div,
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
}), K = "NavigationMenuContent", dt = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = A(K, e.__scopeNavigationMenu), i = it(K, e.__scopeNavigationMenu), d = F(i.contentRef, t), s = i.value === o.value, c = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a($a, { forceMount: n, ...c, ref: d }) : /* @__PURE__ */ a(q, { present: n || s, children: /* @__PURE__ */ a(
    ut,
    {
      "data-state": Ee(s),
      ...c,
      ref: d,
      onPointerEnter: T(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: T(
        e.onPointerLeave,
        J(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
dt.displayName = K;
var $a = l.forwardRef((e, t) => {
  const n = A(K, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return H(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), H(() => () => o(e.value), [e.value, o]), null;
}), Q = "navigationMenu.rootContentDismiss", ut = l.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: i,
    wasEscapeCloseRef: d,
    onRootContentClose: s,
    onContentFocusOutside: c,
    ...m
  } = e, u = A(K, n), h = l.useRef(null), f = F(h, t), g = vt(u.baseId, r), _ = ht(u.baseId, r), N = et(n), w = l.useRef(null), { onItemDismiss: M } = u;
  l.useEffect(() => {
    const y = h.current;
    if (u.isRootMenu && y) {
      const C = () => {
        M(), s(), y.contains(document.activeElement) && o.current?.focus();
      };
      return y.addEventListener(Q, C), () => y.removeEventListener(Q, C);
    }
  }, [u.isRootMenu, e.value, o, M, s]);
  const E = l.useMemo(() => {
    const C = N().map((v) => v.value);
    u.dir === "rtl" && C.reverse();
    const x = C.indexOf(u.value), S = C.indexOf(u.previousValue), k = r === u.value, L = S === C.indexOf(r);
    if (!k && !L) return w.current;
    const R = (() => {
      if (x !== S) {
        if (k && S !== -1) return x > S ? "from-end" : "from-start";
        if (L && x !== -1) return x > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return w.current = R, R;
  }, [u.previousValue, u.value, u.dir, N, r]);
  return /* @__PURE__ */ a(pt, { asChild: !0, children: /* @__PURE__ */ a(
    Xe,
    {
      id: _,
      "aria-labelledby": g,
      "data-motion": E,
      "data-orientation": u.orientation,
      ...m,
      ref: f,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const y = new Event(Q, {
          bubbles: !0,
          cancelable: !0
        });
        h.current?.dispatchEvent(y);
      },
      onFocusOutside: T(e.onFocusOutside, (y) => {
        c();
        const C = y.target;
        u.rootNavigationMenu?.contains(C) && y.preventDefault();
      }),
      onPointerDownOutside: T(e.onPointerDownOutside, (y) => {
        const C = y.target, x = N().some((k) => k.ref.current?.contains(C)), S = u.isRootMenu && u.viewport?.contains(C);
        (x || S || !u.isRootMenu) && y.preventDefault();
      }),
      onKeyDown: T(e.onKeyDown, (y) => {
        const C = y.altKey || y.ctrlKey || y.metaKey;
        if (y.key === "Tab" && !C) {
          const S = fe(y.currentTarget), k = document.activeElement, L = S.findIndex((j) => j === k), v = y.shiftKey ? S.slice(0, L).reverse() : S.slice(L + 1, S.length);
          xe(v) ? y.preventDefault() : i.current?.focus();
        }
      }),
      onEscapeKeyDown: T(e.onEscapeKeyDown, (y) => {
        d.current = !0;
      })
    }
  ) });
}), Ce = "NavigationMenuViewport", mt = l.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!A(Ce, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(Ha, { ...r, ref: t }) });
});
mt.displayName = Ce;
var Ha = l.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = A(Ce, n), d = F(t, i.onViewportChange), s = Aa(
    K,
    e.__scopeNavigationMenu
  ), [c, m] = l.useState(null), [u, h] = l.useState(null), f = c ? c?.width + "px" : void 0, g = c ? c?.height + "px" : void 0, _ = !!i.value, N = _ ? i.value : i.previousValue;
  return ve(u, () => {
    u && m({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ a(
    D.div,
    {
      "data-state": Ee(_),
      "data-orientation": i.orientation,
      ...o,
      ref: d,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !_ && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": f,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: T(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: T(e.onPointerLeave, J(i.onContentLeave)),
      children: Array.from(s.items).map(([M, { ref: E, forceMount: y, ...C }]) => {
        const x = N === M;
        return /* @__PURE__ */ a(q, { present: y || x, children: /* @__PURE__ */ a(
          ut,
          {
            ...C,
            ref: Ze(E, (S) => {
              x && S && h(S);
            })
          }
        ) }, M);
      })
    }
  );
}), Ua = "FocusGroup", pt = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = A(Ua, n);
    return /* @__PURE__ */ a(ue.Provider, { scope: n, children: /* @__PURE__ */ a(ue.Slot, { scope: n, children: /* @__PURE__ */ a(D.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Ve = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Ga = "FocusGroupItem", ft = l.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = La(n), i = A(Ga, n);
    return /* @__PURE__ */ a(ue.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      D.button,
      {
        ...r,
        ref: t,
        onKeyDown: T(e.onKeyDown, (d) => {
          if (["Home", "End", ...Ve].includes(d.key)) {
            let c = o().map((h) => h.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(d.key) && c.reverse(), Ve.includes(d.key)) {
              const h = c.indexOf(d.currentTarget);
              c = c.slice(h + 1);
            }
            setTimeout(() => xe(c)), d.preventDefault();
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
function xe(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function Ka(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ve(e, t) {
  const n = V(t);
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
function Ee(e) {
  return e ? "open" : "closed";
}
function vt(e, t) {
  return `${e}-trigger-${t}`;
}
function ht(e, t) {
  return `${e}-content-${t}`;
}
function J(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Za = tt, Wa = rt, qa = st, Ya = lt, Xa = ct, Fe = dt, Qa = mt;
const bt = l.createContext(!0);
function Ja({
  className: e,
  children: t,
  viewport: n = !0,
  variant: r = "underline",
  ...o
}) {
  return /* @__PURE__ */ a(bt.Provider, { value: n, children: /* @__PURE__ */ p(
    Za,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      "data-variant": r,
      className: b("nav-menu", `nav-menu--${r}`, e),
      ...o,
      children: [
        t,
        n && /* @__PURE__ */ a(tn, {})
      ]
    }
  ) });
}
function en({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Wa,
    {
      "data-slot": "navigation-menu-list",
      className: b("nav-menu__list", e),
      ...t
    }
  );
}
const Me = l.createContext(null);
function X({
  className: e,
  ...t
}) {
  const n = l.useRef(null);
  return /* @__PURE__ */ a(Me.Provider, { value: n, children: /* @__PURE__ */ a(
    qa,
    {
      "data-slot": "navigation-menu-item",
      className: b("nav-menu__item", e),
      ...t
    }
  ) });
}
function oe(e) {
  e.preventDefault();
}
function ir({
  className: e,
  children: t,
  onPointerMove: n,
  onPointerLeave: r,
  onPointerEnter: o,
  onPointerMoveCapture: i,
  onPointerLeaveCapture: d,
  onPointerEnterCapture: s,
  ref: c,
  ...m
}) {
  const u = l.useContext(Me), h = l.useCallback(
    (f) => {
      u && (u.current = f), typeof c == "function" ? c(f) : c && (c.current = f);
    },
    [c, u]
  );
  return /* @__PURE__ */ a(
    Ya,
    {
      "data-slot": "navigation-menu-trigger",
      className: b("nav-menu__trigger", e),
      ref: h,
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
function sr({
  className: e,
  children: t,
  forceMount: n,
  ...r
}) {
  const o = l.useContext(bt), i = l.useContext(Me), d = l.useRef(null), [s, c] = l.useState({}), [m, u] = l.useState(!1), h = l.useCallback(() => {
    const f = i?.current;
    if (!f) return;
    const g = f.getBoundingClientRect(), _ = f.closest?.(".navbar"), N = _ ? _.getBoundingClientRect().bottom + 2 : g.bottom + 2;
    c({
      position: "fixed",
      top: N,
      left: g.left,
      minWidth: 200,
      zIndex: 1100,
      transform: "translateZ(0)"
    });
  }, [i]);
  return l.useLayoutEffect(() => {
    if (o || !i) return;
    const f = d.current, g = i.current, _ = () => {
      const w = g?.getAttribute?.("aria-expanded") === "true", M = f?.querySelector?.('[data-state="open"]') != null || f?.firstElementChild?.getAttribute?.("data-state") === "open", E = w || M;
      u(E), E && h();
    };
    if (_(), !g && !f) return;
    const N = new MutationObserver(_);
    return g && N.observe(g, { attributes: !0, attributeFilter: ["aria-expanded"] }), f && N.observe(f, { attributes: !0, attributeFilter: ["data-state"], subtree: !0 }), () => N.disconnect();
  }, [o, i, h]), l.useEffect(() => {
    if (!m || o) return;
    h();
    const f = requestAnimationFrame(() => h());
    return window.addEventListener("scroll", h, !0), window.addEventListener("resize", h), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", h);
    };
  }, [m, o, h]), o ? /* @__PURE__ */ a(
    Fe,
    {
      "data-slot": "navigation-menu-content",
      className: b("nav-menu__content", e),
      ...r
    }
  ) : /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ a("div", { ref: d, style: { display: "contents" }, "aria-hidden": !0, children: /* @__PURE__ */ a(
      Fe,
      {
        "data-slot": "navigation-menu-content",
        className: b("nav-menu__content", e),
        forceMount: !0,
        style: { position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, minWidth: 0 },
        ...r,
        children: /* @__PURE__ */ a("span", { "aria-hidden": !0, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" } })
      }
    ) }),
    typeof document < "u" && m && Pt(
      /* @__PURE__ */ a(
        "div",
        {
          className: b("nav-menu__content--portal", e),
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
function tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: "nav-menu__viewport-wrap", children: /* @__PURE__ */ a(
    Qa,
    {
      "data-slot": "navigation-menu-viewport",
      className: b("nav-menu__viewport", e),
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
    Xa,
    {
      "data-slot": "navigation-menu-link",
      "data-active": t ? "true" : void 0,
      className: b("nav-menu__link", e),
      ...r,
      children: r.asChild ? n : /* @__PURE__ */ a("span", { className: "nav-menu__link-label", children: n })
    }
  );
}
function lr({
  className: e,
  orientation: t = "horizontal",
  ...n
}) {
  return /* @__PURE__ */ a(
    ae.Root,
    {
      "data-slot": "tabs",
      "data-orientation": t,
      orientation: t,
      className: b(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        e
      ),
      ...n
    }
  );
}
const an = te(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
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
function cr({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    ae.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: b(an({ variant: t }), e),
      ...n
    }
  );
}
function dr({
  className: e,
  leadingIcon: t,
  badge: n,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ p(
    ae.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: b(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground group-data-[variant=line]/tabs-list:data-[state=active]:text-[var(--color-secondary-blue)]",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:after:left-2 group-data-[variant=line]/tabs-list:after:right-2 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100 group-data-[variant=line]/tabs-list:data-[state=active]:after:bg-[var(--color-secondary-blue)]",
        e
      ),
      ...o,
      children: [
        t && /* @__PURE__ */ a("span", { className: "shrink-0 [&_svg]:size-4", children: t }),
        r,
        n != null && /* @__PURE__ */ a("span", { className: "ml-1.5 h-6 min-w-6 rounded-xl bg-muted px-1.5 text-center text-xs font-medium tabular-nums text-muted-foreground inline-flex items-center justify-center", children: n > 99 ? "99+" : n })
      ]
    }
  );
}
function ur({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    ae.Content,
    {
      "data-slot": "tabs-content",
      className: b("flex-1 outline-none", e),
      ...t
    }
  );
}
function mr({
  className: e,
  bordered: t,
  children: n,
  ...r
}) {
  const o = /* @__PURE__ */ a("div", { "data-slot": "data-table-scroll", className: "relative w-full overflow-x-auto [-webkit-overflow-scrolling:touch]", children: /* @__PURE__ */ a(
    "table",
    {
      "data-slot": "data-table",
      className: b("w-full border-collapse text-sm", e),
      ...r,
      children: n
    }
  ) });
  return t ? /* @__PURE__ */ a("div", { "data-slot": "data-table-bordered", className: "rounded-xl border border-[#e5e7eb] bg-white overflow-hidden", children: o }) : o;
}
function pr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "data-table-header",
      className: b("[&_tr]:border-b", e),
      ...t
    }
  );
}
function fr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "data-table-body",
      className: b("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function vr({
  className: e,
  variant: t = "default",
  onClick: n,
  ...r
}) {
  return /* @__PURE__ */ a(
    "tr",
    {
      "data-slot": "data-table-row",
      className: b(
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
function hr({
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
      className: b(
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
function br({
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
      className: b(
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
function gr({
  ...e
}) {
  return /* @__PURE__ */ a(I.Root, { "data-slot": "select", ...e });
}
function _r({
  ...e
}) {
  return /* @__PURE__ */ a(I.Group, { "data-slot": "select-group", ...e });
}
function Nr({
  ...e
}) {
  return /* @__PURE__ */ a(I.Value, { "data-slot": "select-value", ...e });
}
const nn = {
  default: "border-transparent bg-[rgba(235,247,255,1)] text-[var(--color-button-primary-text)] hover:bg-[rgba(220,240,255,1)] focus-visible:bg-[rgba(220,240,255,1)] data-[placeholder]:text-[var(--color-button-primary-text)]/70 [&_svg]:opacity-80",
  primary: "border-transparent bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-bg-hover)] focus-visible:bg-[var(--color-button-primary-bg-hover)] data-[placeholder]:text-[var(--color-button-primary-text)] [&_svg]:opacity-80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 dark:hover:bg-secondary/80 dark:focus-visible:bg-secondary/80 data-[placeholder]:text-secondary-foreground/70 [&_svg]:text-secondary-foreground/80",
  outline: "border border-input bg-transparent text-foreground hover:bg-accent/50 focus-visible:bg-accent/50 dark:bg-input/30 dark:hover:bg-input/50 dark:focus-visible:bg-input/50 data-[placeholder]:text-muted-foreground [&_svg]:text-muted-foreground"
}, rn = {
  default: "h-9 min-h-9 px-3 py-2 [&_svg]:size-4",
  sm: "h-8 min-h-8 px-2.5 py-1.5 [&_svg]:size-3.5"
}, on = {
  default: void 0,
  sm: { height: 32, minHeight: 32, paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, fontSize: "0.75rem" }
};
function yr({
  className: e,
  size: t = "default",
  variant: n = "default",
  children: r,
  ...o
}) {
  const i = t === "small" ? "sm" : t;
  return /* @__PURE__ */ p(
    I.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": i,
      "data-variant": n,
      style: on[i],
      className: b(
        "flex w-fit items-center justify-between gap-2 rounded-[var(--radius-8)] border whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        rn[i],
        nn[n],
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(I.Icon, { asChild: !0, children: /* @__PURE__ */ a(He, { className: "opacity-50" }) })
      ]
    }
  );
}
function wr({
  className: e,
  children: t,
  position: n = "item-aligned",
  align: r = "center",
  ...o
}) {
  return /* @__PURE__ */ a(I.Portal, { children: /* @__PURE__ */ p(
    I.Content,
    {
      "data-slot": "select-content",
      className: b(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-[var(--radius-8)] border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      align: r,
      ...o,
      children: [
        /* @__PURE__ */ a(sn, {}),
        /* @__PURE__ */ a(
          I.Viewport,
          {
            className: b(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(ln, {})
      ]
    }
  ) });
}
function Cr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Label,
    {
      "data-slot": "select-label",
      className: b("px-2 py-1.5 text-foreground", e),
      ...t
    }
  );
}
function xr({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p(
    I.Item,
    {
      "data-slot": "select-item",
      className: b(
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
            children: /* @__PURE__ */ a(I.ItemIndicator, { children: /* @__PURE__ */ a(Dt, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(I.ItemText, { children: t })
      ]
    }
  );
}
function Er({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.Separator,
    {
      "data-slot": "select-separator",
      className: b("pointer-events-none -mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function sn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: b("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(Ot, { className: "size-4" })
    }
  );
}
function ln({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: b("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(He, { className: "size-4" })
    }
  );
}
const cn = "relative box-border h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] border border-solid border-[rgba(44,140,201,1)] bg-[rgba(235,253,255,1)]";
function dn(e, t) {
  return e == null ? "…" : `${Math.min(100, Math.max(0, Math.round(e / t * 100)))}% complete`;
}
const un = l.forwardRef(
  ({
    className: e,
    label: t,
    labelClassName: n,
    labelVariant: r = "none",
    scaleStartLabel: o = "0",
    scaleEndLabel: i = "100",
    progressValueLabel: d,
    completeLabelOverride: s,
    value: c,
    max: m = 100,
    ...u
  }, h) => {
    const f = typeof c == "number" && !Number.isNaN(c) ? c : null, g = typeof m == "number" && m > 0 ? m : 100, _ = f != null ? Math.min(100, Math.max(0, f / g * 100)) : 0, N = d ?? (f != null ? String(Math.min(100, Math.max(0, Math.round(f / g * 100)))) : "…"), w = s ?? dn(f, g), M = r === "scale" || r === "complete-left" || t != null, E = /* @__PURE__ */ a(
      le.Root,
      {
        ref: h,
        "data-slot": "progress",
        className: b(cn, M ? void 0 : e),
        value: f,
        max: g,
        ...u,
        children: /* @__PURE__ */ a(
          le.Indicator,
          {
            "data-slot": "progress-indicator",
            className: b(
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
      return E;
    if (r === "scale") {
      const y = Math.min(100, Math.max(0, _)), C = f === null;
      return /* @__PURE__ */ p(
        "div",
        {
          "data-slot": "progress-field",
          className: b("inline-flex w-full max-w-full flex-col gap-1", e),
          children: [
            E,
            /* @__PURE__ */ p(
              "div",
              {
                "data-slot": "progress-scale-row",
                className: b("relative mt-1 min-h-[1.125rem]", n),
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
                      style: C ? {
                        left: "50%",
                        transform: "translateX(-50%)"
                      } : {
                        left: `${y}%`,
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
        className: b("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          E,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-complete-label",
              className: b("block text-left text-xs text-muted-foreground", n),
              children: w
            }
          )
        ]
      }
    ) : /* @__PURE__ */ p(
      "div",
      {
        "data-slot": "progress-field",
        className: b("inline-flex w-full max-w-full flex-col gap-1", e),
        children: [
          E,
          /* @__PURE__ */ a(
            "span",
            {
              "data-slot": "progress-label",
              className: b("text-xs text-muted-foreground", n),
              children: t
            }
          )
        ]
      }
    );
  }
);
un.displayName = le.Root.displayName;
const ke = l.createContext(null);
function ne() {
  const e = l.useContext(ke);
  if (!e) throw new Error("Stepper components must be used within <Stepper>");
  return e;
}
const gt = l.createContext(null), Se = l.createContext(null);
function _t() {
  const e = l.useContext(Se);
  if (e == null) throw new Error("StepperItem subcomponents must be inside <StepperItem>");
  return e;
}
const mn = l.forwardRef(
  ({ className: e, value: t, onValueChange: n, children: r, ...o }, i) => /* @__PURE__ */ a(ke.Provider, { value: { value: t, onValueChange: n }, children: /* @__PURE__ */ a(
    "nav",
    {
      ref: i,
      "aria-label": "Steps",
      "data-slot": "stepper",
      className: b("w-full", e),
      ...o,
      children: r
    }
  ) })
);
mn.displayName = "Stepper";
const Nt = l.forwardRef(
  ({ className: e, segmentIndex: t, style: n, children: r, ...o }, i) => {
    const { value: d } = ne(), s = l.useContext(gt), c = typeof s == "number" ? s : t ?? 0, m = Number(d), u = Number.isFinite(m) && m > Number(c);
    return /* @__PURE__ */ p(
      "li",
      {
        ref: i,
        ...o,
        "data-slot": "stepper-separator",
        "data-state": u ? "filled" : "upcoming",
        "aria-hidden": !0,
        className: b(
          "mx-1 mt-4 flex min-h-px min-w-[1rem] flex-1 list-none items-center self-start p-0",
          e
        ),
        style: n,
        children: [
          /* @__PURE__ */ a(
            "span",
            {
              "data-ef-stepper-connector-bar": !0,
              "data-filled": u ? "true" : "false",
              className: "box-border block h-px w-full min-w-[1rem] shrink-0 rounded-full"
            }
          ),
          r
        ]
      }
    );
  }
);
Nt.displayName = "StepperSeparator";
function pn(e) {
  if (!l.isValidElement(e)) return !1;
  const t = e.type;
  return t === Nt || t?.displayName === "StepperSeparator";
}
function fn(e) {
  return l.isValidElement(e) && e.type.displayName === "StepperItem";
}
const vn = l.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const o = [];
    let i = 0, d = 0;
    return l.Children.forEach(t, (s) => {
      if (pn(s)) {
        const c = d++;
        o.push(
          /* @__PURE__ */ a(gt.Provider, { value: c, children: l.cloneElement(s, {
            key: s.key ?? `stepper-sep-inner-${c}`,
            segmentIndex: c
          }) }, s.key ?? `stepper-sep-${c}`)
        );
        return;
      }
      if (fn(s)) {
        const c = i++;
        o.push(
          l.cloneElement(s, {
            key: s.key ?? `stepper-item-${c}`,
            step: c
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
        className: b("m-0 flex w-full list-none items-start gap-0 p-0", e),
        ...n,
        children: o
      }
    );
  }
);
vn.displayName = "StepperList";
const hn = l.forwardRef(
  ({ className: e, step: t, children: n, ...r }, o) => {
    const i = t ?? 0, { value: d } = ne(), s = i < d ? "complete" : i === d ? "active" : "upcoming";
    return /* @__PURE__ */ a(Se.Provider, { value: i, children: /* @__PURE__ */ a(
      "li",
      {
        ref: o,
        "data-slot": "stepper-item",
        "data-state": s,
        className: b(
          "relative flex min-w-0 shrink-0 flex-col items-center gap-2",
          e
        ),
        ...r,
        children: n
      }
    ) });
  }
);
hn.displayName = "StepperItem";
const bn = "group/stepper-trigger flex w-full max-w-[10rem] flex-col items-center gap-2 rounded-md text-center", gn = l.forwardRef(
  ({ className: e, type: t = "button", disabled: n, onClick: r, children: o, ...i }, d) => {
    const { value: s, onValueChange: c } = ne(), m = _t(), u = c != null && !n && m <= s, h = b(
      bn,
      u && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90",
      !c && "cursor-default",
      c && m > s && "cursor-default",
      e
    );
    return c ? /* @__PURE__ */ a(
      "button",
      {
        ref: d,
        type: t,
        "data-slot": "stepper-trigger",
        "aria-current": m === s ? "step" : void 0,
        disabled: n ?? m > s,
        className: b(
          h,
          "disabled:pointer-events-none disabled:opacity-100"
        ),
        onClick: (f) => {
          r?.(f), !f.defaultPrevented && u && c(m);
        },
        ...i,
        children: o
      }
    ) : /* @__PURE__ */ a(
      "div",
      {
        "data-slot": "stepper-trigger",
        "aria-current": m === s ? "step" : void 0,
        className: h,
        ...i,
        children: o
      }
    );
  }
);
gn.displayName = "StepperTrigger";
const Be = "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]";
function ze(e) {
  return b(
    "flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-full)] text-xs font-semibold tabular-nums transition-colors",
    e === "complete" && b(Be, "[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none"),
    e === "active" && b(
      Be,
      "ring-2 ring-[var(--color-button-primary-bg)] ring-offset-2 ring-offset-background"
    ),
    e === "upcoming" && "bg-[rgba(235,253,255,0.6)] text-[var(--muted-foreground)]"
  );
}
function $e() {
  return /* @__PURE__ */ a(
    "span",
    {
      className: "material-symbols-outlined font-normal",
      style: { fontSize: "18px", fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24" },
      "aria-hidden": !0,
      children: "check"
    }
  );
}
const _n = l.forwardRef(
  ({ className: e, stepDisplay: t, forceState: n, children: r, ...o }, i) => {
    const d = l.useContext(Se), s = l.useContext(ke);
    if (n != null) {
      const g = t ?? 1, _ = n === "complete";
      return /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "stepper-indicator",
          "data-state": n,
          className: b(ze(n), e),
          ...o,
          children: r ?? (_ ? /* @__PURE__ */ a($e, {}) : g)
        }
      );
    }
    if (d == null || s == null)
      throw new Error(
        "StepperIndicator must be inside StepperItem, or pass forceState for a static preview."
      );
    const c = d, m = s.value, u = c < m ? "complete" : c === m ? "active" : "upcoming", h = t ?? c + 1, f = u === "complete";
    return /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "stepper-indicator",
        "data-state": u,
        className: b(ze(u), e),
        ...o,
        children: r ?? (f ? /* @__PURE__ */ a($e, {}) : h)
      }
    );
  }
);
_n.displayName = "StepperIndicator";
const Nn = l.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = _t(), { value: o } = ne(), i = r === o, d = r < o;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: n,
        "data-slot": "stepper-title",
        className: b(
          "max-w-[10rem] text-center text-xs font-medium leading-tight break-words",
          (i || d) && "text-foreground",
          !i && !d && "text-muted-foreground",
          e
        ),
        ...t
      }
    );
  }
);
Nn.displayName = "StepperTitle";
const yn = l.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "span",
    {
      ref: n,
      "data-slot": "stepper-description",
      className: b(
        "max-w-[10rem] text-center text-[11px] leading-snug text-muted-foreground break-words",
        e
      ),
      ...t
    }
  )
);
yn.displayName = "StepperDescription";
function wn({
  to: e,
  children: t,
  className: n,
  onClick: r
}) {
  return /* @__PURE__ */ a("a", { href: e, className: n, onClick: r, children: t });
}
function Cn({
  tabs: e,
  avatarMenuItems: t,
  user: n,
  switchOptions: r = [],
  onSwitchUser: o,
  activePath: i = "",
  homePath: d = "/",
  logoSrc: s = "/eightfold-logo.svg",
  productName: c = "Career Hub",
  productIconSrc: m = "/career-hub-icon.svg",
  hideProductIcon: u = !1,
  searchPlaceholder: h = "Type to search",
  onSearchChange: f,
  onSearchIconClick: g,
  actionButtons: _ = [],
  LinkComponent: N = wn,
  NavLinkComponent: w
}) {
  const [M, E] = Re(!1), [y, C] = Re(!1), x = N, S = i === "/profile", k = n.avatarType === "photo" && n.avatarPhotoSrc ? n.avatarPhotoSrc.replace("w=200&h=200", "w=80&h=80") : null, L = (v) => {
    const j = v.chevron && v.subItems && v.subItems.length > 0;
    if (v.path && j) {
      const $ = i === v.path || v.subItems.some((z) => z.path === i);
      return /* @__PURE__ */ p(X, { className: "navbar__tab-dropdown-wrap", children: [
        /* @__PURE__ */ p("button", { className: `navbar__tab navbar__tab--dropdown ${$ ? "navbar__tab--active" : ""}`, type: "button", children: [
          /* @__PURE__ */ a("span", { className: "navbar__tab-label", children: v.label }),
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", style: { fontSize: 16, marginLeft: 2 }, children: "expand_more" })
        ] }),
        /* @__PURE__ */ a("div", { className: "navbar__tab-hover-menu", children: /* @__PURE__ */ p("div", { className: "navbar__tab-menu-inner", children: [
          v.subItems.map((z) => /* @__PURE__ */ a(x, { to: z.path, className: "nav-menu__link navbar__tab-menu-item", children: z.label }, z.path)),
          v.path && !v.hideViewAll && /* @__PURE__ */ p(P, { children: [
            /* @__PURE__ */ a("div", { className: "navbar__tab-menu-divider" }),
            /* @__PURE__ */ a(x, { to: v.path, className: "nav-menu__link navbar__tab-menu-item navbar__tab-menu-item--view-all", children: "View all" })
          ] })
        ] }) })
      ] }, v.id);
    }
    if (v.path) {
      const $ = w && w !== N, z = i === v.path || v.path === "/" && !i;
      return $ ? /* @__PURE__ */ a(X, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: z, children: /* @__PURE__ */ a(w, { to: v.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, v.id) : /* @__PURE__ */ a(X, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: z, children: /* @__PURE__ */ a(x, { to: v.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, v.id);
    }
    return /* @__PURE__ */ a(X, { children: /* @__PURE__ */ a(ie, { href: "#", className: "navbar__tab", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
      v.label,
      v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) }) }, v.id);
  }, R = (v) => v.path ? v.chevron && v.subItems && v.subItems.length > 0 ? /* @__PURE__ */ p("div", { className: "navbar__menu-group", children: [
    /* @__PURE__ */ a(x, { to: v.path, className: "navbar__menu-link navbar__menu-link--parent", onClick: () => E(!1), children: v.label }),
    /* @__PURE__ */ a("div", { className: "navbar__menu-sublinks", children: v.subItems.map(($) => /* @__PURE__ */ a(
      x,
      {
        to: $.path,
        className: "navbar__menu-link navbar__menu-link--sub",
        onClick: () => E(!1),
        children: $.label
      },
      $.path
    )) })
  ] }, v.id) : /* @__PURE__ */ p(
    x,
    {
      to: v.path,
      className: "navbar__menu-link",
      onClick: () => E(!1),
      children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    v.id
  ) : /* @__PURE__ */ p(
    "a",
    {
      href: "#",
      className: "navbar__menu-link",
      onClick: (j) => {
        j.preventDefault(), v.onClick?.(), E(!1);
      },
      children: [
        v.label,
        v.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    v.id
  );
  return /* @__PURE__ */ p("nav", { className: "navbar", children: [
    /* @__PURE__ */ p("div", { className: "navbar__inner", children: [
      /* @__PURE__ */ p("div", { className: "navbar__left", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "navbar__menu-btn",
            onClick: () => E(!0),
            "aria-label": "Open menu",
            children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__menu-btn-icon", children: "menu" })
          }
        ),
        /* @__PURE__ */ p(x, { to: d, className: "navbar__branding", children: [
          /* @__PURE__ */ a("img", { src: s, alt: "", className: "navbar__logo" }),
          /* @__PURE__ */ a("div", { className: "navbar__divider" }),
          /* @__PURE__ */ p("div", { className: "navbar__product", children: [
            !u && /* @__PURE__ */ a("img", { src: m, alt: "", className: "navbar__product-icon", width: 40, height: 40 }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__product-name ${c.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
                children: (() => {
                  const v = c.trim().split(/\s+/);
                  return v.length <= 1 ? c : /* @__PURE__ */ p(P, { children: [
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v[0] }),
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v.slice(1).join(" ") })
                  ] });
                })()
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(Ja, { viewport: !1, variant: "underline", className: "navbar__tabs", delayDuration: 400, skipDelayDuration: 200, children: /* @__PURE__ */ a(en, { className: "navbar__tabs-list", children: e.map(L) }) })
      ] }),
      /* @__PURE__ */ p("div", { className: "navbar__right", children: [
        /* @__PURE__ */ p("div", { className: "navbar__search-wrap", children: [
          /* @__PURE__ */ p("div", { className: "navbar__search", children: [
            /* @__PURE__ */ a("span", { className: "navbar__search-input", children: /* @__PURE__ */ a(
              Ut,
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
                onClick: () => g?.(),
                children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "search" })
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "navbar__divider navbar__divider--vertical" })
        ] }),
        /* @__PURE__ */ p("div", { className: "navbar__right-icons", children: [
          _.map((v, j) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "navbar__btn navbar__btn--action",
              "aria-label": v.ariaLabel,
              onClick: v.onClick,
              children: v.iconSrc ? /* @__PURE__ */ a("img", { src: v.iconSrc, alt: "", className: "navbar__btn-icon-img", width: 20, height: 20 }) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: v.icon ?? "circle" })
            },
            j
          )),
          /* @__PURE__ */ a("button", { type: "button", className: "navbar__btn navbar__btn--menu", "aria-label": "App switcher", children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: "apps" }) })
        ] }),
        /* @__PURE__ */ p(O.Root, { children: [
          /* @__PURE__ */ a(O.Trigger, { asChild: !0, children: /* @__PURE__ */ p("button", { type: "button", className: "navbar__avatar", "aria-label": "Open profile menu", children: [
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__avatar-inner ${n.avatarColor ? "navbar__avatar-inner--colored" : ""}`,
                style: n.avatarColor ? { backgroundColor: n.avatarColor } : void 0,
                children: y || !k ? /* @__PURE__ */ a("span", { className: "navbar__avatar-initials", children: n.avatarInitials ?? "?" }) : /* @__PURE__ */ a(
                  "img",
                  {
                    src: k,
                    alt: "",
                    className: "navbar__avatar-img",
                    onError: () => C(!0)
                  }
                )
              }
            ),
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__avatar-caret", "aria-hidden": !0, children: "expand_more" })
          ] }) }),
          /* @__PURE__ */ a(O.Portal, { children: /* @__PURE__ */ a(O.Content, { className: "navbar__avatar-menu", align: "end", sideOffset: 8, children: /* @__PURE__ */ p("div", { className: "navbar__avatar-menu-inner", children: [
            t.map((v) => /* @__PURE__ */ a(O.Item, { asChild: !0, children: /* @__PURE__ */ a(
              x,
              {
                to: v.path,
                className: `navbar__avatar-menu-item ${v.label === "My Profile" && S ? "navbar__avatar-menu-item--active" : ""}`,
                children: v.label
              }
            ) }, v.label)),
            r.length > 0 && o && /* @__PURE__ */ p(P, { children: [
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
                r.map((v) => /* @__PURE__ */ a(O.Item, { asChild: !0, children: /* @__PURE__ */ a(
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
    /* @__PURE__ */ a(Z.Root, { open: M, onOpenChange: E, children: /* @__PURE__ */ p(Z.Portal, { children: [
      /* @__PURE__ */ a(Z.Overlay, { className: "navbar__menu-overlay" }),
      /* @__PURE__ */ p(Z.Content, { className: "navbar__menu-drawer", "aria-describedby": void 0, children: [
        /* @__PURE__ */ p("div", { className: "navbar__menu-header", children: [
          /* @__PURE__ */ a(
            "span",
            {
              className: `navbar__product-name ${c.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
              children: (() => {
                const v = c.trim().split(/\s+/);
                return v.length <= 1 ? c : /* @__PURE__ */ p(P, { children: [
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v[0] }),
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: v.slice(1).join(" ") })
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
const yt = l.createContext({
  variant: "career-hub",
  careerHubSize: "parent"
});
function xn() {
  return l.useContext(yt);
}
const En = te(
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
), wt = l.forwardRef(
  ({ className: e, variant: t, chSize: n = "parent", sticky: r = !1, overlayBackground: o = !1, ...i }, d) => {
    const s = t ?? "career-hub", c = {
      variant: s,
      careerHubSize: s === "career-hub" ? n : "parent"
    };
    return /* @__PURE__ */ a(yt.Provider, { value: c, children: /* @__PURE__ */ a(
      "header",
      {
        ref: d,
        "data-slot": "header",
        "data-variant": s,
        "data-ch-size": s === "career-hub" ? n : void 0,
        className: b(
          En({ variant: s }),
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
wt.displayName = "Header";
const Mn = {
  profile: "h-[var(--header-career-hub-profile-height)] min-h-[var(--header-career-hub-profile-height)] flex-wrap items-start content-start gap-y-3 pb-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:pb-6 md:gap-5",
  parent: "h-[var(--header-career-hub-parent-height)] min-h-[var(--header-career-hub-parent-height)] items-start gap-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)]",
  child: "h-[var(--header-career-hub-child-height)] min-h-[var(--header-career-hub-child-height)] items-start gap-3 pb-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)]"
}, Ct = l.forwardRef(
  ({ className: e, actions: t, children: n, ...r }, o) => {
    const { variant: i, careerHubSize: d } = xn(), s = "flex min-h-12 w-full max-w-[100vw] items-start gap-3 py-0 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:h-[var(--navbar-height,3.75rem)] md:gap-4", c = b(
      "flex w-full max-w-[100vw] items-start",
      Mn[d]
    );
    return /* @__PURE__ */ p(
      "div",
      {
        ref: o,
        "data-slot": "header-toolbar",
        className: b(i === "talent-acquisition" ? s : c, e),
        ...r,
        children: [
          n,
          t != null ? /* @__PURE__ */ a("div", { "data-slot": "header-actions", children: t }) : null
        ]
      }
    );
  }
);
Ct.displayName = "HeaderToolbar";
const kn = l.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-actions", className: b(e), ...t })
);
kn.displayName = "HeaderActions";
const Sn = l.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "div",
    {
      ref: n,
      "data-slot": "header-group",
      className: b("flex min-w-0 items-center gap-2 md:gap-3", e),
      ...t
    }
  )
);
Sn.displayName = "HeaderGroup";
const xt = l.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("h1", { ref: n, "data-slot": "header-title", className: b(e), ...t })
);
xt.displayName = "HeaderTitle";
const Et = l.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-text-group", className: b(e), ...t })
);
Et.displayName = "HeaderTextGroup";
const Mt = l.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("p", { ref: n, "data-slot": "header-secondary", className: b(e), ...t })
);
Mt.displayName = "HeaderSecondary";
const Rn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_ch_prof)"><rect width="1440" height="540" fill="white"/><path d="M760 77.8125L860 20V120L760 177.812V77.8125Z" fill="#C15151"/><path d="M960 77.8125L860 20V120L960 177.812V77.8125Z" fill="#F29D31"/><path d="M1060 251.25L1160 193.438V293.438L1060 351.25V251.25Z" fill="#69717F"/><path d="M1260 251.25L1160 193.438V293.438L1260 351.25V251.25Z" fill="#2DB3C7"/><path d="M1160 -6.5625L1060 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#F29D31"/><path d="M1360 93.4375L1260 35.625V135.625L1360 193.438V93.4375Z" fill="#F29D31"/><path d="M960 -22.1875L860 -80V20L960 77.8125V-22.1875Z" fill="#2DB3C7"/><path d="M1460 351.25L1360 293.438V393.438L1460 451.25V351.25Z" fill="#858B98"/><path d="M1460 451.25L1360 393.438V493.438L1460 551.25V451.25Z" fill="#2DB3C7"/><path d="M1460 251.25L1360 193.438V293.438L1460 351.25V251.25Z" fill="#E46F6F"/><path d="M1160 -6.5625L1260 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1160 93.4375L1260 35.625V135.625L1160 193.438V93.4375Z" fill="#69717F"/><path d="M1360 -6.5625L1460 -64.375V35.625L1360 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1360 93.4375L1460 35.625V135.625L1360 193.438V93.4375Z" fill="#69717F"/><path d="M1060 35.625L960 -22.1875V77.8125L1060 135.625V35.625Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', Tn = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_ch_def)"><rect width="1440" height="292" fill="white"/><path d="M760 80.8585L860 20.7829V124.697L760 184.773V80.8585Z" fill="#C15151"/><path d="M960 80.8585L860 20.7829V124.697L960 184.773V80.8585Z" fill="#F29D31"/><path d="M1060 261.085L1160 201.01V304.924L1060 365V261.085Z" fill="#69717F"/><path d="M1260 261.085L1160 201.01V304.924L1260 365V261.085Z" fill="#2DB3C7"/><path d="M1160 -6.8194L1060 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#F29D31"/><path d="M1360 97.0952L1260 37.0196V140.934L1360 201.01V97.0952Z" fill="#F29D31"/><path d="M960 -23.056L860 -83.1317V20.7829L960 80.8586V-23.056Z" fill="#2DB3C7"/><path d="M1460 261.085L1360 201.01V304.924L1460 365V261.085Z" fill="#E46F6F"/><path d="M1160 -6.8194L1260 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1160 97.0952L1260 37.0196V140.934L1160 201.01V97.0952Z" fill="#69717F"/><path d="M1360 -6.8194L1460 -66.895V37.0196L1360 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1360 97.0952L1460 37.0196V140.934L1360 201.01V97.0952Z" fill="#69717F"/><path d="M1060 37.0196L960 -23.0561V80.8585L1060 140.934V37.0196Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function In(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? Rn : Tn)}")`;
}
function Ln(e) {
  return e === "talent-acquisition" ? "linear-gradient(180deg, color-mix(in srgb, var(--color-background2-blue) 50%, transparent) 0%, var(--background) 92%)" : "linear-gradient(180deg, color-mix(in srgb, var(--color-background1-grey) 65%, transparent) 0%, var(--color-background2-grey) 95%)";
}
function Pn(e, t) {
  const n = !!t.src?.trim(), r = e === "career-hub" && !n && t.chevronsVariant != null;
  return n && t.src ? {
    hasImage: !0,
    isChevrons: !1,
    fillStyle: {
      backgroundImage: t.imageScrim ? `${Ln(e)}, url(${t.src})` : `url(${t.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  } : r && t.chevronsVariant ? {
    hasImage: !1,
    isChevrons: !0,
    fillStyle: {
      backgroundColor: "var(--color-background1-grey)",
      backgroundImage: In(t.chevronsVariant),
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
const kt = l.forwardRef(
  ({
    className: e,
    variant: t,
    src: n,
    imageScrim: r = !0,
    chevronsVariant: o,
    children: i,
    ...d
  }, s) => {
    const { fillStyle: c, hasImage: m, isChevrons: u } = Pn(t, {
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
        className: b("relative isolate w-full overflow-hidden", e),
        ...d,
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              "aria-hidden": !0,
              "data-slot": "product-background-fill",
              ...m ? { "data-has-image": "" } : {},
              ...u ? { "data-ch-chevrons": "" } : {},
              className: b(
                "pointer-events-none absolute inset-0 -z-10",
                (m || u) && "min-h-full min-w-full"
              ),
              style: c
            }
          ),
          /* @__PURE__ */ a("div", { className: "relative z-0 min-h-0", children: i })
        ]
      }
    );
  }
);
kt.displayName = "ProductBackground";
const Mr = "/eightfold-logo.svg", kr = "/ai-agent.svg", Dn = "/copilot.svg", Sr = ["talent-acquisition", "career-hub"], On = {
  campaigns: "Campaigns",
  "career-exchange": "Career Exchange",
  "career-hub": "Career Hub",
  "customer-community": "Customer Community",
  "resource-management": "Resource management",
  "talent-acquisition": "Talent Acquisition",
  "talent-design": "Talent Design",
  "talent-flex": "Talent Flex",
  "talent-university": "Talent University"
}, ee = "/product-logos", W = {
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
function Rr(e, t = "medium") {
  return `${ee}/${W[e][t]}`;
}
function Tr(e, t = "medium") {
  return {
    productName: On[e],
    productIconSrc: `${ee}/${W[e][t]}`
  };
}
const Ir = Object.keys(W).reduce(
  (e, t) => (e[t] = {
    small: `${ee}/${W[t].small}`,
    medium: `${ee}/${W[t].medium}`
  }, e),
  {}
), Lr = [
  { label: "My Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
  { label: "Help", path: "/help" },
  { label: "Sign out", path: "/sign-out" }
], Pr = [
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
], Dr = [
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
], Or = [
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
], Ar = [
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
], jr = [
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
], Vr = "Search for positions or candidates", Fr = [
  { iconSrc: Dn, ariaLabel: "Copilot" },
  { icon: "work_outline", ariaLabel: "Talent" },
  { icon: "notifications", ariaLabel: "Notifications" }
];
function Br({
  chSize: e = "parent",
  title: t,
  secondary: n,
  actions: r,
  navbarProps: o,
  chevronsVariant: i,
  children: d
}) {
  return /* @__PURE__ */ p(P, { children: [
    /* @__PURE__ */ a(kt, { variant: "career-hub", chevronsVariant: i ?? (e === "profile" ? "profile" : "default"), children: /* @__PURE__ */ p("div", { className: "career-hub-shell", children: [
      /* @__PURE__ */ a(Cn, { ...o }),
      /* @__PURE__ */ a(wt, { variant: "career-hub", chSize: e, overlayBackground: !0, children: /* @__PURE__ */ a(Ct, { actions: r, children: /* @__PURE__ */ p(Et, { children: [
        /* @__PURE__ */ a(xt, { children: t }),
        n && /* @__PURE__ */ a(Mt, { children: n })
      ] }) }) })
    ] }) }),
    d
  ] });
}
export {
  kr as AI_AGENT_LOGO_PATH,
  Wn as Badge,
  qn as Breadcrumb,
  tr as BreadcrumbEllipsis,
  Xn as BreadcrumbItem,
  Qn as BreadcrumbLink,
  Yn as BreadcrumbList,
  Jn as BreadcrumbPage,
  er as BreadcrumbSeparator,
  jt as Button,
  Gn as ButtonDropdown,
  Or as CAREER_HUB_CHRO_TABS,
  Ar as CAREER_HUB_HRBP_TABS,
  Dn as COPILOT_LOGO_PATH,
  Hr as CORNER_RADIUS_TOKENS,
  Br as CareerHubShell,
  ar as CourseObjectCard,
  mr as DataTable,
  fr as DataTableBody,
  br as DataTableCell,
  hr as DataTableHead,
  pr as DataTableHeader,
  vr as DataTableRow,
  re as DropdownMenu,
  zt as DropdownMenuContent,
  $t as DropdownMenuItem,
  Bt as DropdownMenuPortal,
  Ht as DropdownMenuSeparator,
  Ft as DropdownMenuTrigger,
  Mr as EIGHTFOLD_LOGO_PATH,
  Lr as EMPLOYEE_AVATAR_MENU_ITEMS,
  Pr as EMPLOYEE_NON_MANAGER_TABS,
  wt as Header,
  kn as HeaderActions,
  Sn as HeaderGroup,
  Mt as HeaderSecondary,
  Et as HeaderTextGroup,
  xt as HeaderTitle,
  Ct as HeaderToolbar,
  Ut as Input,
  aa as InsightCard,
  Dr as MANAGER_TABS,
  or as MentorInsightCard,
  Cn as Navbar,
  Ja as NavigationMenu,
  sr as NavigationMenuContent,
  X as NavigationMenuItem,
  ie as NavigationMenuLink,
  en as NavigationMenuList,
  ir as NavigationMenuTrigger,
  tn as NavigationMenuViewport,
  ea as OpenTo,
  Sr as PRIMARY_NAVBAR_PRODUCT_IDS,
  On as PRODUCT_NAMES,
  rr as PeopleObjectCard,
  _e as Pill,
  kt as ProductBackground,
  un as Progress,
  nr as ProjectObjectCard,
  Ur as SPACING_TOKENS,
  gr as Select,
  wr as SelectContent,
  _r as SelectGroup,
  xr as SelectItem,
  Cr as SelectLabel,
  ln as SelectScrollDownButton,
  sn as SelectScrollUpButton,
  Er as SelectSeparator,
  yr as SelectTrigger,
  Nr as SelectValue,
  Kn as SkillTag,
  mn as Stepper,
  yn as StepperDescription,
  _n as StepperIndicator,
  hn as StepperItem,
  vn as StepperList,
  Nt as StepperSeparator,
  Nn as StepperTitle,
  gn as StepperTrigger,
  Fr as TALENT_ACQUISITION_ACTION_BUTTONS,
  jr as TALENT_ACQUISITION_RECRUITER_TABS,
  Vr as TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
  lr as Tabs,
  ur as TabsContent,
  cr as TabsList,
  dr as TabsTrigger,
  Gt as Tag,
  Zn as TagGroup,
  Wt as badgeVariants,
  At as buttonVariants,
  Tr as getNavbarProductConfig,
  Rr as getProductLogoPath,
  Ir as productLogos,
  an as tabsListVariants
};
