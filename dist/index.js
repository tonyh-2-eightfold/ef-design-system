import { jsxs as p, Fragment as T, jsx as a } from "react/jsx-runtime";
import * as d from "react";
import B, { isValidElement as he, cloneElement as be, forwardRef as Rt, useState as Re } from "react";
import { Slot as ge, createSlot as se } from "@radix-ui/react-slot";
import { cva as ee } from "class-variance-authority";
import { clsx as It } from "clsx";
import { twMerge as Tt } from "tailwind-merge";
import * as O from "@radix-ui/react-dropdown-menu";
import * as Ie from "@radix-ui/react-toggle-group";
import * as Lt from "react-dom";
import Pt, { createPortal as Dt } from "react-dom";
import * as te from "@radix-ui/react-tabs";
import { Check as Ot, ChevronDown as He, ChevronUp as At } from "lucide-react";
import * as L from "@radix-ui/react-select";
import * as le from "@radix-ui/react-progress";
import * as Z from "@radix-ui/react-dialog";
import { CORNER_RADIUS_TOKENS as Wr, SPACING_TOKENS as qr } from "./tokens.js";
function h(...e) {
  return Tt(It(e));
}
const jt = ee("btn", {
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
function Te(e, t) {
  return e == null ? null : he(e) ? be(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function Vt({
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
  const m = r ? ge : "button", v = o != null || i != null || c != null ? /* @__PURE__ */ p(T, { children: [
    o != null && Te(o, "inline-start"),
    s,
    c != null && /* @__PURE__ */ a("span", { className: "btn__badge", "data-slot": "button-badge", children: c > 99 ? "99+" : c }),
    i != null && Te(i, "inline-end")
  ] }) : s;
  return /* @__PURE__ */ a(
    m,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: h(jt({ variant: t, size: n, className: e })),
      ...l,
      children: v
    }
  );
}
function Ft(e) {
  return /* @__PURE__ */ a(
    O.Root,
    {
      "data-slot": "dropdown-menu",
      ...e
    }
  );
}
function Bt(e) {
  return /* @__PURE__ */ a(
    O.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function zt(e) {
  return /* @__PURE__ */ a(O.Portal, { ...e });
}
function $t({
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
      className: h(e),
      ...r
    }
  ) });
}
function Ht({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Item,
    {
      "data-slot": "dropdown-menu-item",
      className: h(e),
      ...t
    }
  );
}
function Ut({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    O.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: h(e),
      ...t
    }
  );
}
const ne = Object.assign(Ft, {
  Trigger: Bt,
  Portal: zt,
  Content: $t,
  Item: Ht,
  Separator: Ut
});
function Xn({
  children: e,
  menu: t,
  variant: n = "outline",
  size: r = "default",
  trigger: o,
  buttonProps: i,
  align: c = "end",
  sideOffset: s = 4
}) {
  const l = o ?? /* @__PURE__ */ a(Vt, { variant: n, size: r, ...i, children: e });
  return /* @__PURE__ */ p(ne, { children: [
    /* @__PURE__ */ a(ne.Trigger, { asChild: !0, children: l }),
    /* @__PURE__ */ a(ne.Content, { align: c, sideOffset: s, children: t })
  ] });
}
const Gt = Rt(function({
  size: t = "medium",
  shape: n = "rounded",
  state: r = "default",
  leadingIcon: o,
  trailingIcon: i,
  onClear: c,
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
  ].filter(Boolean).join(" "), g = (_) => typeof _ == "string" ? /* @__PURE__ */ a("span", { className: "material-symbols-outlined", children: _ }) : _;
  return /* @__PURE__ */ p("div", { className: f, children: [
    o != null && /* @__PURE__ */ a("span", { className: "input__leading-icon", "aria-hidden": !0, children: g(o) }),
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
    (i != null || c) && /* @__PURE__ */ a("span", { className: "input__trailing", children: c ? /* @__PURE__ */ a(
      "button",
      {
        type: "button",
        className: "input__clear",
        onClick: c,
        disabled: l,
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
function Kt({ trend: e, size: t }) {
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
function Zt({ size: e }) {
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
const Wt = d.forwardRef(
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
          s && /* @__PURE__ */ a(Kt, { trend: s, size: n }),
          s && l && /* @__PURE__ */ a(Zt, { size: n }),
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
                c != null && /* @__PURE__ */ a("span", { className: "skill-tag__endorse-count", children: c })
              ]
            }
          )
        ]
      }
    );
  }
);
Wt.displayName = "SkillTag";
function Le(e, t) {
  return e == null ? null : he(e) ? be(e, {
    "data-icon": t
  }) : /* @__PURE__ */ a("span", { "data-icon": t, style: { display: "inline-flex" }, children: e });
}
function qt({
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
    s != null && Le(s, "inline-start"),
    e,
    l != null && Le(l, "inline-end"),
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
function Yt(e) {
  return h("tag", "tag--selectable", `tag--${e}`);
}
function Xt(e) {
  return B.isValidElement(e) && typeof e.type != "string" && (e.type === qt || e.type.displayName === "Tag");
}
function Qn({
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
    Ie.Root,
    {
      type: e,
      value: t,
      onValueChange: n,
      defaultValue: r,
      disabled: o,
      className: h("tag-group", s),
      asChild: !1,
      children: B.Children.map(c, (l) => {
        if (!Xt(l)) return l;
        const m = l.props.value;
        if (m == null) return l;
        const { leadingIcon: u, trailingIcon: v } = l.props;
        return /* @__PURE__ */ p(
          Ie.Item,
          {
            value: m,
            className: Yt(i),
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
const Qt = ee("badge", {
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
function Jn({
  className: e,
  variant: t = "default",
  size: n = "24",
  asChild: r = !1,
  leadingIcon: o,
  trailingIcon: i,
  children: c,
  ...s
}) {
  const l = r ? ge : "span", m = r ? c : /* @__PURE__ */ p(T, { children: [
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
      className: h(Qt({ variant: t, size: n }), e),
      ...s,
      children: m
    }
  );
}
const Jt = "m-0 flex list-none flex-wrap items-center gap-1 p-0 break-words sm:gap-1", ea = "inline-flex items-center gap-1", Ue = "rounded-sm text-[length:14px] font-semibold leading-[1.43] text-[var(--color-blue-70)] no-underline transition-colors hover:text-[var(--color-blue-80)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background", ta = "text-[length:14px] font-medium leading-[1.43] text-[var(--foreground)]", aa = "inline-flex size-5 shrink-0 select-none items-center justify-center text-center text-[20px] font-normal leading-none text-[var(--color-grey-60)] [&>svg]:size-5 [&>svg]:shrink-0";
function er({ className: e, ...t }) {
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
function tr({ className: e, ...t }) {
  return /* @__PURE__ */ a("ol", { "data-slot": "breadcrumb-list", className: h(Jt, e), ...t });
}
function ar({ className: e, ...t }) {
  return /* @__PURE__ */ a("li", { "data-slot": "breadcrumb-item", className: h(ea, e), ...t });
}
function nr({ asChild: e, className: t, ...n }) {
  return /* @__PURE__ */ a(e ? ge : "a", { "data-slot": "breadcrumb-link", className: h(Ue, t), ...n });
}
function rr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: h(ta, e),
      ...t
    }
  );
}
function or({ children: e, className: t, ...n }) {
  return /* @__PURE__ */ a(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: h(aa, t),
      ...n,
      children: e ?? "/"
    }
  );
}
function ir({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      className: h(Ue, e),
      ...n,
      children: t ?? "…"
    }
  );
}
const na = {
  coffee: { icon: "local_cafe", title: "Coffee chat" },
  mentoring: { icon: "group", title: "Mentoring" },
  project: { icon: "bar_chart", title: "Project" }
};
function Ge({ items: e, showLabel: t = !0, labelAsButton: n = !0, className: r = "" }) {
  return /* @__PURE__ */ p("div", { className: `open-to ${r}`.trim(), children: [
    t && (n ? /* @__PURE__ */ p("button", { type: "button", className: "open-to__select", "aria-haspopup": "listbox", "aria-expanded": !1, children: [
      /* @__PURE__ */ a("span", { className: "open-to__label", children: "Open to" }),
      /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) : /* @__PURE__ */ a("span", { className: "open-to__label open-to__label--plain", children: "Open to" })),
    /* @__PURE__ */ a("div", { className: "open-to__icons", children: e.map((o) => {
      const { icon: i, title: c } = na[o];
      return /* @__PURE__ */ a("span", { className: `open-to__icon open-to__icon--${o}`, title: c, "aria-hidden": !0, children: /* @__PURE__ */ a("span", { className: "material-symbols-outlined open-to__icon-symbol", children: i }) }, o);
    }) })
  ] });
}
function ra({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function oa({
  title: e,
  badge: t,
  description: n,
  recommendedLabel: r,
  icon: o,
  bgColor: i,
  iconBgColor: c,
  iconColor: s,
  textColor: l = "#3B2600",
  buttonLabel: m,
  buttonHref: u = "#",
  children: v,
  fixedSize: f = !0,
  LinkComponent: g = ra
}) {
  return /* @__PURE__ */ p(
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
        /* @__PURE__ */ a(g, { to: u, className: "insight-card__btn", children: m })
      ]
    }
  );
}
function ia({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function sr({
  course: e,
  href: t = "#",
  showBookmark: n = !0,
  renderFacepile: r,
  LinkComponent: o = ia,
  bottomBar: i
}) {
  const c = o, s = i ?? (e.completedBy && e.completedBy.length > 0 ? { type: "completedBy", avatars: e.completedBy } : void 0), l = s && s.type !== "none", m = /* @__PURE__ */ p("div", { className: "course-object-card__inner", children: [
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
    l && /* @__PURE__ */ p(T, { children: [
      /* @__PURE__ */ a("div", { className: "course-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ p("div", { className: "object-card-bottom-bar__content", children: [
        s.type === "completedBy" && /* @__PURE__ */ p(T, { children: [
          r ? r({ avatarUrls: s.avatars }) : /* @__PURE__ */ a("div", { className: "course-object-card__facepile", children: s.avatars.map((u, v) => /* @__PURE__ */ a("img", { src: u, alt: "", className: "course-object-card__facepile-avatar" }, v)) }),
          /* @__PURE__ */ a("span", { className: "course-object-card__completed-text", children: "completed this" })
        ] }),
        s.type === "openTo" && /* @__PURE__ */ a(Ge, { items: s.items, labelAsButton: !1 }),
        s.type === "buttons" && /* @__PURE__ */ a("div", { className: "course-object-card__bottom-buttons", children: s.children })
      ] }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "course-object-card", children: m }) : /* @__PURE__ */ a(c, { to: t, className: "course-object-card", children: m });
}
function sa({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function lr({
  project: e,
  href: t = "#",
  showBookmark: n = !0,
  showBottomBar: r = !0,
  renderFacepile: o,
  LinkComponent: i = sa
}) {
  const c = i, s = /* @__PURE__ */ p("div", { className: "project-object-card__inner", children: [
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
    r && /* @__PURE__ */ p(T, { children: [
      /* @__PURE__ */ a("div", { className: "project-object-card__divider", "aria-hidden": !0 }),
      /* @__PURE__ */ a("div", { className: "object-card-bottom-bar", children: /* @__PURE__ */ a("div", { className: "object-card-bottom-bar__content", children: e.contributedBy && e.contributedBy.length > 0 && /* @__PURE__ */ p(T, { children: [
        o ? o({ avatarUrls: e.contributedBy }) : /* @__PURE__ */ a("div", { className: "project-object-card__facepile", children: e.contributedBy.map((l, m) => /* @__PURE__ */ a("img", { src: l, alt: "", className: "project-object-card__facepile-avatar" }, m)) }),
        /* @__PURE__ */ a("span", { className: "project-object-card__contributed-text", children: "contributors" })
      ] }) }) })
    ] })
  ] });
  return t === "#" ? /* @__PURE__ */ a("div", { className: "project-object-card", children: s }) : /* @__PURE__ */ a(c, { to: t, className: "project-object-card", children: s });
}
function la(e) {
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[1][0]).toUpperCase().slice(0, 2) : e.slice(0, 2).toUpperCase() || "?";
}
function ca({ to: e, children: t, className: n }) {
  return /* @__PURE__ */ a("a", { href: e, className: n, children: t });
}
function cr({
  person: e,
  href: t = "#",
  showBookmark: n = !0,
  renderAvatar: r,
  LinkComponent: o = ca
}) {
  const i = o, c = /* @__PURE__ */ p(T, { children: [
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
      fallback: la(e.name)
    }) : /* @__PURE__ */ a("img", { src: e.avatarSrc, alt: "", className: "people-object-card__avatar" }) }),
    /* @__PURE__ */ p("div", { className: "people-object-card__body", children: [
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
function dr({
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
    oa,
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
          /* @__PURE__ */ a("img", { src: c.avatarSrc, alt: "", className: "mentor-insight-card__avatar" }),
          /* @__PURE__ */ p("div", { className: "mentor-insight-card__info", children: [
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__name", children: c.name }),
            /* @__PURE__ */ a("span", { className: "mentor-insight-card__role", children: c.role })
          ] })
        ] }),
        /* @__PURE__ */ p("div", { className: "mentor-insight-card__match", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined mentor-insight-card__match-icon", children: "track_changes" }),
          /* @__PURE__ */ a("span", { className: "mentor-insight-card__match-text", children: c.matchText }),
          c.matchCount > 0 && /* @__PURE__ */ p("span", { className: "mentor-insight-card__match-badge", children: [
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
    const m = (v) => {
      const { scope: f, children: g, ..._ } = v, N = f?.[e]?.[l] || s, y = d.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ a(N.Provider, { value: y, children: g });
    };
    m.displayName = i + "Provider";
    function u(v, f) {
      const g = f?.[e]?.[l] || s, _ = d.useContext(g);
      if (_) return _;
      if (c !== void 0) return c;
      throw new Error(`\`${v}\` must be used within \`${i}\``);
    }
    return [m, u];
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
  return o.scopeName = e, [r, da(o, ...t)];
}
function da(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const c = r.reduce((s, { useScope: l, scopeName: m }) => {
        const v = l(i)[`__scope${m}`];
        return { ...s, ...v };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function I(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var ua = [
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
], D = ua.reduce((e, t) => {
  const n = se(`Primitive.${t}`), r = d.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, l = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a(l, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ce(e, t) {
  e && Lt.flushSync(() => e.dispatchEvent(t));
}
var H = globalThis?.document ? d.useLayoutEffect : () => {
}, ma = d[" useInsertionEffect ".trim().toString()] || H;
function Ze({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, i, c] = pa({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, l = s ? e : o;
  {
    const u = d.useRef(e !== void 0);
    d.useEffect(() => {
      const v = u.current;
      v !== s && console.warn(
        `${r} is changing from ${v ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = s;
    }, [s, r]);
  }
  const m = d.useCallback(
    (u) => {
      if (s) {
        const v = fa(u) ? u(e) : u;
        v !== e && c.current?.(v);
      } else
        i(u);
    },
    [s, e, i, c]
  );
  return [l, m];
}
function pa({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), i = d.useRef(t);
  return ma(() => {
    i.current = t;
  }, [t]), d.useEffect(() => {
    o.current !== n && (i.current?.(n), o.current = n);
  }, [n, o]), [n, r, i];
}
function fa(e) {
  return typeof e == "function";
}
function De(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function We(...e) {
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
  return d.useCallback(We(...e), e);
}
var va = d.createContext(void 0);
function ha(e) {
  const t = d.useContext(va);
  return e || t || "ltr";
}
function ba(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var q = (e) => {
  const { present: t, children: n } = e, r = ga(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), i = F(r.ref, _a(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: i }) : null;
};
q.displayName = "Presence";
function ga(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), i = d.useRef("none"), c = e ? "mounted" : "unmounted", [s, l] = ba(c, {
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
    const m = Y(r.current);
    i.current = s === "mounted" ? m : "none";
  }, [s]), H(() => {
    const m = r.current, u = o.current;
    if (u !== e) {
      const f = i.current, g = Y(m);
      e ? l("MOUNT") : g === "none" || m?.display === "none" ? l("UNMOUNT") : l(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), H(() => {
    if (t) {
      let m;
      const u = t.ownerDocument.defaultView ?? window, v = (g) => {
        const N = Y(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && N && (l("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", m = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, f = (g) => {
        g.target === t && (i.current = Y(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        u.clearTimeout(m), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: d.useCallback((m) => {
      r.current = m ? getComputedStyle(m) : null, n(m);
    }, [])
  };
}
function Y(e) {
  return e?.animationName || "none";
}
function _a(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Na = d[" useId ".trim().toString()] || (() => {
}), ya = 0;
function qe(e) {
  const [t, n] = d.useState(Na());
  return H(() => {
    n((r) => r ?? String(ya++));
  }, [e]), t ? `radix-${t}` : "";
}
function Ye(e) {
  const t = e + "CollectionProvider", [n, r] = Ke(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (N) => {
    const { scope: y, children: E } = N, k = B.useRef(null), w = B.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: y, itemMap: w, collectionRef: k, children: E });
  };
  c.displayName = t;
  const s = e + "CollectionSlot", l = se(s), m = B.forwardRef(
    (N, y) => {
      const { scope: E, children: k } = N, w = i(s, E), x = F(y, w.collectionRef);
      return /* @__PURE__ */ a(l, { ref: x, children: k });
    }
  );
  m.displayName = s;
  const u = e + "CollectionItemSlot", v = "data-radix-collection-item", f = se(u), g = B.forwardRef(
    (N, y) => {
      const { scope: E, children: k, ...w } = N, x = B.useRef(null), C = F(y, x), M = i(u, E);
      return B.useEffect(() => (M.itemMap.set(x, { ref: x, ...w }), () => {
        M.itemMap.delete(x);
      })), /* @__PURE__ */ a(f, { [v]: "", ref: C, children: k });
    }
  );
  g.displayName = u;
  function _(N) {
    const y = i(e + "CollectionConsumer", N);
    return B.useCallback(() => {
      const k = y.collectionRef.current;
      if (!k) return [];
      const w = Array.from(k.querySelectorAll(`[${v}]`));
      return Array.from(y.itemMap.values()).sort(
        (M, S) => w.indexOf(M.ref.current) - w.indexOf(S.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: c, Slot: m, ItemSlot: g },
    _,
    r
  ];
}
function V(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => t.current?.(...n), []);
}
function wa(e, t = globalThis?.document) {
  const n = V(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var xa = "DismissableLayer", de = "dismissableLayer.update", Ca = "dismissableLayer.pointerDownOutside", ka = "dismissableLayer.focusOutside", Oe, Xe = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qe = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: c,
      onDismiss: s,
      ...l
    } = e, m = d.useContext(Xe), [u, v] = d.useState(null), f = u?.ownerDocument ?? globalThis?.document, [, g] = d.useState({}), _ = F(t, (S) => v(S)), N = Array.from(m.layers), [y] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1), E = N.indexOf(y), k = u ? N.indexOf(u) : -1, w = m.layersWithOutsidePointerEventsDisabled.size > 0, x = k >= E, C = Ma((S) => {
      const P = S.target, R = [...m.branches].some((b) => b.contains(P));
      !x || R || (o?.(S), c?.(S), S.defaultPrevented || s?.());
    }, f), M = Ra((S) => {
      const P = S.target;
      [...m.branches].some((b) => b.contains(P)) || (i?.(S), c?.(S), S.defaultPrevented || s?.());
    }, f);
    return wa((S) => {
      k === m.layers.size - 1 && (r?.(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
    }, f), d.useEffect(() => {
      if (u)
        return n && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Oe = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), m.layersWithOutsidePointerEventsDisabled.add(u)), m.layers.add(u), Ae(), () => {
          n && m.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Oe);
        };
    }, [u, f, n, m]), d.useEffect(() => () => {
      u && (m.layers.delete(u), m.layersWithOutsidePointerEventsDisabled.delete(u), Ae());
    }, [u, m]), d.useEffect(() => {
      const S = () => g({});
      return document.addEventListener(de, S), () => document.removeEventListener(de, S);
    }, []), /* @__PURE__ */ a(
      D.div,
      {
        ...l,
        ref: _,
        style: {
          pointerEvents: w ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: I(e.onFocusCapture, M.onFocusCapture),
        onBlurCapture: I(e.onBlurCapture, M.onBlurCapture),
        onPointerDownCapture: I(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Qe.displayName = xa;
var Ea = "DismissableLayerBranch", Sa = d.forwardRef((e, t) => {
  const n = d.useContext(Xe), r = d.useRef(null), o = F(t, r);
  return d.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ a(D.div, { ...e, ref: o });
});
Sa.displayName = Ea;
function Ma(e, t = globalThis?.document) {
  const n = V(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          Je(
            Ca,
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
function Ra(e, t = globalThis?.document) {
  const n = V(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Je(ka, n, { originalEvent: i }, {
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
function Je(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ce(o, i) : o.dispatchEvent(i);
}
function Ia(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ta = Object.freeze({
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
}), La = "VisuallyHidden", et = d.forwardRef(
  (e, t) => /* @__PURE__ */ a(
    D.span,
    {
      ...e,
      ref: t,
      style: { ...Ta, ...e.style }
    }
  )
);
et.displayName = La;
var Pa = et, U = "NavigationMenu", [Ne, tt, Da] = Ye(U), [ue, Oa, Aa] = Ye(U), [ye] = Ke(
  U,
  [Da, Aa]
), [ja, A] = ye(U), [Va, Fa] = ye(U), at = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      delayDuration: c = 200,
      skipDelayDuration: s = 300,
      orientation: l = "horizontal",
      dir: m,
      ...u
    } = e, [v, f] = d.useState(null), g = F(t, (R) => f(R)), _ = ha(m), N = d.useRef(0), y = d.useRef(0), E = d.useRef(0), [k, w] = d.useState(!0), [x, C] = Ze({
      prop: r,
      onChange: (R) => {
        const b = R !== "", j = s > 0;
        b ? (window.clearTimeout(E.current), j && w(!1)) : (window.clearTimeout(E.current), E.current = window.setTimeout(
          () => w(!0),
          s
        )), o?.(R);
      },
      defaultProp: i ?? "",
      caller: U
    }), M = d.useCallback(() => {
      window.clearTimeout(y.current), y.current = window.setTimeout(() => C(""), 150);
    }, [C]), S = d.useCallback(
      (R) => {
        window.clearTimeout(y.current), C(R);
      },
      [C]
    ), P = d.useCallback(
      (R) => {
        x === R ? window.clearTimeout(y.current) : N.current = window.setTimeout(() => {
          window.clearTimeout(y.current), C(R);
        }, c);
      },
      [x, C, c]
    );
    return d.useEffect(() => () => {
      window.clearTimeout(N.current), window.clearTimeout(y.current), window.clearTimeout(E.current);
    }, []), /* @__PURE__ */ a(
      nt,
      {
        scope: n,
        isRootMenu: !0,
        value: x,
        dir: _,
        orientation: l,
        rootNavigationMenu: v,
        onTriggerEnter: (R) => {
          window.clearTimeout(N.current), k ? P(R) : S(R);
        },
        onTriggerLeave: () => {
          window.clearTimeout(N.current), M();
        },
        onContentEnter: () => window.clearTimeout(y.current),
        onContentLeave: M,
        onItemSelect: (R) => {
          C((b) => b === R ? "" : R);
        },
        onItemDismiss: () => C(""),
        children: /* @__PURE__ */ a(
          D.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: _,
            ...u,
            ref: g
          }
        )
      }
    );
  }
);
at.displayName = U;
var me = "NavigationMenuSub", Ba = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: i,
      orientation: c = "horizontal",
      ...s
    } = e, l = A(me, n), [m, u] = Ze({
      prop: r,
      onChange: o,
      defaultProp: i ?? "",
      caller: me
    });
    return /* @__PURE__ */ a(
      nt,
      {
        scope: n,
        isRootMenu: !1,
        value: m,
        dir: l.dir,
        orientation: c,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (v) => u(v),
        onItemSelect: (v) => u(v),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ a(D.div, { "data-orientation": c, ...s, ref: t })
      }
    );
  }
);
Ba.displayName = me;
var nt = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: i,
    children: c,
    value: s,
    onItemSelect: l,
    onItemDismiss: m,
    onTriggerEnter: u,
    onTriggerLeave: v,
    onContentEnter: f,
    onContentLeave: g
  } = e, [_, N] = d.useState(null), [y, E] = d.useState(/* @__PURE__ */ new Map()), [k, w] = d.useState(null);
  return /* @__PURE__ */ a(
    ja,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: s,
      previousValue: Ia(s),
      baseId: qe(),
      dir: o,
      orientation: i,
      viewport: _,
      onViewportChange: N,
      indicatorTrack: k,
      onIndicatorTrackChange: w,
      onTriggerEnter: V(u),
      onTriggerLeave: V(v),
      onContentEnter: V(f),
      onContentLeave: V(g),
      onItemSelect: V(l),
      onItemDismiss: V(m),
      onViewportContentChange: d.useCallback((x, C) => {
        E((M) => (M.set(x, C), new Map(M)));
      }, []),
      onViewportContentRemove: d.useCallback((x) => {
        E((C) => C.has(x) ? (C.delete(x), new Map(C)) : C);
      }, []),
      children: /* @__PURE__ */ a(Ne.Provider, { scope: t, children: /* @__PURE__ */ a(Va, { scope: t, items: y, children: c }) })
    }
  );
}, rt = "NavigationMenuList", ot = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = A(rt, n), i = /* @__PURE__ */ a(D.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(D.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(Ne.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(ft, { asChild: !0, children: i }) : i }) });
  }
);
ot.displayName = rt;
var it = "NavigationMenuItem", [za, st] = ye(it), lt = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, i = qe(), c = r || i || "LEGACY_REACT_AUTO_VALUE", s = d.useRef(null), l = d.useRef(null), m = d.useRef(null), u = d.useRef(() => {
    }), v = d.useRef(!1), f = d.useCallback((_ = "start") => {
      if (s.current) {
        u.current();
        const N = fe(s.current);
        N.length && Ce(_ === "start" ? N : N.reverse());
      }
    }, []), g = d.useCallback(() => {
      if (s.current) {
        const _ = fe(s.current);
        _.length && (u.current = qa(_));
      }
    }, []);
    return /* @__PURE__ */ a(
      za,
      {
        scope: n,
        value: c,
        triggerRef: l,
        contentRef: s,
        focusProxyRef: m,
        wasEscapeCloseRef: v,
        onEntryKeyDown: f,
        onFocusProxyEnter: f,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ a(D.li, { ...o, ref: t })
      }
    );
  }
);
lt.displayName = it;
var pe = "NavigationMenuTrigger", ct = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, i = A(pe, e.__scopeNavigationMenu), c = st(pe, e.__scopeNavigationMenu), s = d.useRef(null), l = F(s, c.triggerRef, t), m = ht(i.baseId, c.value), u = bt(i.baseId, c.value), v = d.useRef(!1), f = d.useRef(!1), g = c.value === i.value;
  return /* @__PURE__ */ p(T, { children: [
    /* @__PURE__ */ a(Ne.ItemSlot, { scope: n, value: c.value, children: /* @__PURE__ */ a(vt, { asChild: !0, children: /* @__PURE__ */ a(
      D.button,
      {
        id: m,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": ke(g),
        "aria-expanded": g,
        "aria-controls": u,
        ...o,
        ref: l,
        onPointerEnter: I(e.onPointerEnter, () => {
          f.current = !1, c.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: I(
          e.onPointerMove,
          Q(() => {
            r || f.current || c.wasEscapeCloseRef.current || v.current || (i.onTriggerEnter(c.value), v.current = !0);
          })
        ),
        onPointerLeave: I(
          e.onPointerLeave,
          Q(() => {
            r || (i.onTriggerLeave(), v.current = !1);
          })
        ),
        onClick: I(e.onClick, () => {
          i.onItemSelect(c.value), f.current = g;
        }),
        onKeyDown: I(e.onKeyDown, (_) => {
          const y = { horizontal: "ArrowDown", vertical: i.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[i.orientation];
          g && _.key === y && (c.onEntryKeyDown(), _.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ p(T, { children: [
      /* @__PURE__ */ a(
        Pa,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: c.focusProxyRef,
          onFocus: (_) => {
            const N = c.contentRef.current, y = _.relatedTarget, E = y === s.current, k = N?.contains(y);
            (E || !k) && c.onFocusProxyEnter(E ? "start" : "end");
          }
        }
      ),
      i.viewport && /* @__PURE__ */ a("span", { "aria-owns": u })
    ] })
  ] });
});
ct.displayName = pe;
var $a = "NavigationMenuLink", je = "navigationMenu.linkSelect", dt = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...i } = e;
    return /* @__PURE__ */ a(vt, { asChild: !0, children: /* @__PURE__ */ a(
      D.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...i,
        ref: t,
        onClick: I(
          e.onClick,
          (c) => {
            const s = c.target, l = new CustomEvent(je, {
              bubbles: !0,
              cancelable: !0
            });
            if (s.addEventListener(je, (m) => o?.(m), { once: !0 }), ce(s, l), !l.defaultPrevented && !c.metaKey) {
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
dt.displayName = $a;
var we = "NavigationMenuIndicator", Ha = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = A(we, e.__scopeNavigationMenu), i = !!o.value;
  return o.indicatorTrack ? Pt.createPortal(
    /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(Ua, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Ha.displayName = we;
var Ua = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = A(we, n), i = tt(n), [c, s] = d.useState(
    null
  ), [l, m] = d.useState(null), u = o.orientation === "horizontal", v = !!o.value;
  d.useEffect(() => {
    const _ = i().find((N) => N.value === o.value)?.ref.current;
    _ && s(_);
  }, [i, o.value]);
  const f = () => {
    c && m({
      size: u ? c.offsetWidth : c.offsetHeight,
      offset: u ? c.offsetLeft : c.offsetTop
    });
  };
  return ve(c, f), ve(o.indicatorTrack, f), l ? /* @__PURE__ */ a(
    D.div,
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
}), K = "NavigationMenuContent", ut = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = A(K, e.__scopeNavigationMenu), i = st(K, e.__scopeNavigationMenu), c = F(i.contentRef, t), s = i.value === o.value, l = {
    value: i.value,
    triggerRef: i.triggerRef,
    focusProxyRef: i.focusProxyRef,
    wasEscapeCloseRef: i.wasEscapeCloseRef,
    onContentFocusOutside: i.onContentFocusOutside,
    onRootContentClose: i.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(Ga, { forceMount: n, ...l, ref: c }) : /* @__PURE__ */ a(q, { present: n || s, children: /* @__PURE__ */ a(
    mt,
    {
      "data-state": ke(s),
      ...l,
      ref: c,
      onPointerEnter: I(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: I(
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
ut.displayName = K;
var Ga = d.forwardRef((e, t) => {
  const n = A(K, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
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
    ...m
  } = e, u = A(K, n), v = d.useRef(null), f = F(v, t), g = ht(u.baseId, r), _ = bt(u.baseId, r), N = tt(n), y = d.useRef(null), { onItemDismiss: E } = u;
  d.useEffect(() => {
    const w = v.current;
    if (u.isRootMenu && w) {
      const x = () => {
        E(), s(), w.contains(document.activeElement) && o.current?.focus();
      };
      return w.addEventListener(X, x), () => w.removeEventListener(X, x);
    }
  }, [u.isRootMenu, e.value, o, E, s]);
  const k = d.useMemo(() => {
    const x = N().map((b) => b.value);
    u.dir === "rtl" && x.reverse();
    const C = x.indexOf(u.value), M = x.indexOf(u.previousValue), S = r === u.value, P = M === x.indexOf(r);
    if (!S && !P) return y.current;
    const R = (() => {
      if (C !== M) {
        if (S && M !== -1) return C > M ? "from-end" : "from-start";
        if (P && C !== -1) return C > M ? "to-start" : "to-end";
      }
      return null;
    })();
    return y.current = R, R;
  }, [u.previousValue, u.value, u.dir, N, r]);
  return /* @__PURE__ */ a(ft, { asChild: !0, children: /* @__PURE__ */ a(
    Qe,
    {
      id: _,
      "aria-labelledby": g,
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
      onFocusOutside: I(e.onFocusOutside, (w) => {
        l();
        const x = w.target;
        u.rootNavigationMenu?.contains(x) && w.preventDefault();
      }),
      onPointerDownOutside: I(e.onPointerDownOutside, (w) => {
        const x = w.target, C = N().some((S) => S.ref.current?.contains(x)), M = u.isRootMenu && u.viewport?.contains(x);
        (C || M || !u.isRootMenu) && w.preventDefault();
      }),
      onKeyDown: I(e.onKeyDown, (w) => {
        const x = w.altKey || w.ctrlKey || w.metaKey;
        if (w.key === "Tab" && !x) {
          const M = fe(w.currentTarget), S = document.activeElement, P = M.findIndex((j) => j === S), b = w.shiftKey ? M.slice(0, P).reverse() : M.slice(P + 1, M.length);
          Ce(b) ? w.preventDefault() : i.current?.focus();
        }
      }),
      onEscapeKeyDown: I(e.onEscapeKeyDown, (w) => {
        c.current = !0;
      })
    }
  ) });
}), xe = "NavigationMenuViewport", pt = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, i = !!A(xe, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(q, { present: n || i, children: /* @__PURE__ */ a(Ka, { ...r, ref: t }) });
});
pt.displayName = xe;
var Ka = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, i = A(xe, n), c = F(t, i.onViewportChange), s = Fa(
    K,
    e.__scopeNavigationMenu
  ), [l, m] = d.useState(null), [u, v] = d.useState(null), f = l ? l?.width + "px" : void 0, g = l ? l?.height + "px" : void 0, _ = !!i.value, N = _ ? i.value : i.previousValue;
  return ve(u, () => {
    u && m({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ a(
    D.div,
    {
      "data-state": ke(_),
      "data-orientation": i.orientation,
      ...o,
      ref: c,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !_ && i.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": f,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: I(e.onPointerEnter, i.onContentEnter),
      onPointerLeave: I(e.onPointerLeave, Q(i.onContentLeave)),
      children: Array.from(s.items).map(([E, { ref: k, forceMount: w, ...x }]) => {
        const C = N === E;
        return /* @__PURE__ */ a(q, { present: w || C, children: /* @__PURE__ */ a(
          mt,
          {
            ...x,
            ref: We(k, (M) => {
              C && M && v(M);
            })
          }
        ) }, E);
      })
    }
  );
}), Za = "FocusGroup", ft = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = A(Za, n);
    return /* @__PURE__ */ a(ue.Provider, { scope: n, children: /* @__PURE__ */ a(ue.Slot, { scope: n, children: /* @__PURE__ */ a(D.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Ve = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Wa = "FocusGroupItem", vt = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = Oa(n), i = A(Wa, n);
    return /* @__PURE__ */ a(ue.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      D.button,
      {
        ...r,
        ref: t,
        onKeyDown: I(e.onKeyDown, (c) => {
          if (["Home", "End", ...Ve].includes(c.key)) {
            let l = o().map((v) => v.ref.current);
            if ([i.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(c.key) && l.reverse(), Ve.includes(c.key)) {
              const v = l.indexOf(c.currentTarget);
              l = l.slice(v + 1);
            }
            setTimeout(() => Ce(l)), c.preventDefault();
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
function qa(e) {
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
function ke(e) {
  return e ? "open" : "closed";
}
function ht(e, t) {
  return `${e}-trigger-${t}`;
}
function bt(e, t) {
  return `${e}-content-${t}`;
}
function Q(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ya = at, Xa = ot, Qa = lt, Ja = ct, en = dt, Fe = ut, tn = pt;
const gt = d.createContext(!0);
function an({
  className: e,
  children: t,
  viewport: n = !0,
  variant: r = "underline",
  ...o
}) {
  return /* @__PURE__ */ a(gt.Provider, { value: n, children: /* @__PURE__ */ p(
    Ya,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      "data-variant": r,
      className: h("nav-menu", `nav-menu--${r}`, e),
      ...o,
      children: [
        t,
        n && /* @__PURE__ */ a(rn, {})
      ]
    }
  ) });
}
function nn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    Xa,
    {
      "data-slot": "navigation-menu-list",
      className: h("nav-menu__list", e),
      ...t
    }
  );
}
const Ee = d.createContext(null);
function re({
  className: e,
  ...t
}) {
  const n = d.useRef(null);
  return /* @__PURE__ */ a(Ee.Provider, { value: n, children: /* @__PURE__ */ a(
    Qa,
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
function ur({
  className: e,
  children: t,
  onPointerMove: n,
  onPointerLeave: r,
  onPointerEnter: o,
  onPointerMoveCapture: i,
  onPointerLeaveCapture: c,
  onPointerEnterCapture: s,
  ref: l,
  ...m
}) {
  const u = d.useContext(Ee), v = d.useCallback(
    (f) => {
      u && (u.current = f), typeof l == "function" ? l(f) : l && (l.current = f);
    },
    [l, u]
  );
  return /* @__PURE__ */ a(
    Ja,
    {
      "data-slot": "navigation-menu-trigger",
      className: h("nav-menu__trigger", e),
      ref: v,
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
      ...m,
      children: /* @__PURE__ */ p("span", { className: "nav-menu__trigger-label", children: [
        t,
        /* @__PURE__ */ a("span", { className: "material-symbols-outlined nav-menu__chevron", "aria-hidden": !0, children: "expand_more" })
      ] })
    }
  );
}
function mr({
  className: e,
  children: t,
  forceMount: n,
  ...r
}) {
  const o = d.useContext(gt), i = d.useContext(Ee), c = d.useRef(null), [s, l] = d.useState({}), [m, u] = d.useState(!1), v = d.useCallback(() => {
    const f = i?.current;
    if (!f) return;
    const g = f.getBoundingClientRect(), _ = f.closest?.(".navbar"), N = _ ? _.getBoundingClientRect().bottom + 2 : g.bottom + 2;
    l({
      position: "fixed",
      top: N,
      left: g.left,
      minWidth: 200,
      zIndex: 1100,
      transform: "translateZ(0)"
    });
  }, [i]);
  return d.useLayoutEffect(() => {
    if (o || !i) return;
    const f = c.current, g = i.current, _ = () => {
      const y = g?.getAttribute?.("aria-expanded") === "true", E = f?.querySelector?.('[data-state="open"]') != null || f?.firstElementChild?.getAttribute?.("data-state") === "open", k = y || E;
      u(k), k && v();
    };
    if (_(), !g && !f) return;
    const N = new MutationObserver(_);
    return g && N.observe(g, { attributes: !0, attributeFilter: ["aria-expanded"] }), f && N.observe(f, { attributes: !0, attributeFilter: ["data-state"], subtree: !0 }), () => N.disconnect();
  }, [o, i, v]), d.useEffect(() => {
    if (!m || o) return;
    v();
    const f = requestAnimationFrame(() => v());
    return window.addEventListener("scroll", v, !0), window.addEventListener("resize", v), () => {
      cancelAnimationFrame(f), window.removeEventListener("scroll", v, !0), window.removeEventListener("resize", v);
    };
  }, [m, o, v]), o ? /* @__PURE__ */ a(
    Fe,
    {
      "data-slot": "navigation-menu-content",
      className: h("nav-menu__content", e),
      ...r
    }
  ) : /* @__PURE__ */ p(T, { children: [
    /* @__PURE__ */ a("div", { ref: c, style: { display: "contents" }, "aria-hidden": !0, children: /* @__PURE__ */ a(
      Fe,
      {
        "data-slot": "navigation-menu-content",
        className: h("nav-menu__content", e),
        forceMount: !0,
        style: { position: "absolute", visibility: "hidden", pointerEvents: "none", top: 0, left: 0, minWidth: 0 },
        ...r,
        children: /* @__PURE__ */ a("span", { "aria-hidden": !0, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" } })
      }
    ) }),
    typeof document < "u" && m && Dt(
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
function rn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a("div", { className: "nav-menu__viewport-wrap", children: /* @__PURE__ */ a(
    tn,
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
    en,
    {
      "data-slot": "navigation-menu-link",
      "data-active": t ? "true" : void 0,
      className: h("nav-menu__link", e),
      ...r,
      children: r.asChild ? n : /* @__PURE__ */ a("span", { className: "nav-menu__link-label", children: n })
    }
  );
}
function pr({
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
const on = ee(
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
function fr({
  className: e,
  variant: t = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    te.List,
    {
      "data-slot": "tabs-list",
      "data-variant": t,
      className: h(on({ variant: t }), e),
      ...n
    }
  );
}
function vr({
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
function hr({
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
function br({
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
function gr({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "thead",
    {
      "data-slot": "data-table-header",
      className: h("[&_tr]:border-b", e),
      ...t
    }
  );
}
function _r({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "tbody",
    {
      "data-slot": "data-table-body",
      className: h("[&_tr:last-child]:border-0", e),
      ...t
    }
  );
}
function Nr({
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
function yr({
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
function wr({
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
function xr({
  ...e
}) {
  return /* @__PURE__ */ a(L.Root, { "data-slot": "select", ...e });
}
function Cr({
  ...e
}) {
  return /* @__PURE__ */ a(L.Group, { "data-slot": "select-group", ...e });
}
function kr({
  ...e
}) {
  return /* @__PURE__ */ a(L.Value, { "data-slot": "select-value", ...e });
}
const sn = {
  default: "border-transparent bg-[rgba(235,247,255,1)] text-[var(--color-button-primary-text)] hover:bg-[rgba(220,240,255,1)] focus-visible:bg-[rgba(220,240,255,1)] data-[placeholder]:text-[var(--color-button-primary-text)]/70 [&_svg]:opacity-80",
  primary: "border-transparent bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)] hover:bg-[var(--color-button-primary-bg-hover)] focus-visible:bg-[var(--color-button-primary-bg-hover)] data-[placeholder]:text-[var(--color-button-primary-text)] [&_svg]:opacity-80",
  secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:bg-secondary/80 dark:hover:bg-secondary/80 dark:focus-visible:bg-secondary/80 data-[placeholder]:text-secondary-foreground/70 [&_svg]:text-secondary-foreground/80",
  outline: "border border-input bg-transparent text-foreground hover:bg-accent/50 focus-visible:bg-accent/50 dark:bg-input/30 dark:hover:bg-input/50 dark:focus-visible:bg-input/50 data-[placeholder]:text-muted-foreground [&_svg]:text-muted-foreground"
}, ln = {
  default: "h-9 min-h-9 px-3 py-2 [&_svg]:size-4",
  sm: "h-8 min-h-8 px-2.5 py-1.5 [&_svg]:size-3.5"
}, cn = {
  default: void 0,
  sm: { height: 32, minHeight: 32, paddingTop: 6, paddingBottom: 6, paddingLeft: 10, paddingRight: 10, fontSize: "0.75rem" }
};
function Er({
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
      style: cn[i],
      className: h(
        "flex w-fit items-center justify-between gap-2 rounded-[var(--radius-8)] border whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        ln[i],
        sn[n],
        e
      ),
      ...o,
      children: [
        r,
        /* @__PURE__ */ a(L.Icon, { asChild: !0, children: /* @__PURE__ */ a(He, { className: "opacity-50" }) })
      ]
    }
  );
}
function Sr({
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
        /* @__PURE__ */ a(dn, {}),
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
        /* @__PURE__ */ a(un, {})
      ]
    }
  ) });
}
function Mr({
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
function Rr({
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
            children: /* @__PURE__ */ a(L.ItemIndicator, { children: /* @__PURE__ */ a(Ot, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ a(L.ItemText, { children: t })
      ]
    }
  );
}
function Ir({
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
function dn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: h("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(At, { className: "size-4" })
    }
  );
}
function un({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    L.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: h("flex cursor-default items-center justify-center py-1", e),
      ...t,
      children: /* @__PURE__ */ a(He, { className: "size-4" })
    }
  );
}
const mn = "relative box-border h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] border border-solid border-[rgba(44,140,201,1)] bg-[rgba(235,253,255,1)]";
function pn(e, t) {
  return e == null ? "…" : `${Math.min(100, Math.max(0, Math.round(e / t * 100)))}% complete`;
}
const fn = d.forwardRef(
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
    max: m = 100,
    ...u
  }, v) => {
    const f = typeof l == "number" && !Number.isNaN(l) ? l : null, g = typeof m == "number" && m > 0 ? m : 100, _ = f != null ? Math.min(100, Math.max(0, f / g * 100)) : 0, N = c ?? (f != null ? String(Math.min(100, Math.max(0, Math.round(f / g * 100)))) : "…"), y = s ?? pn(f, g), E = r === "scale" || r === "complete-left" || t != null, k = /* @__PURE__ */ a(
      le.Root,
      {
        ref: v,
        "data-slot": "progress",
        className: h(mn, E ? void 0 : e),
        value: f,
        max: g,
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
    if (!E)
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
fn.displayName = le.Root.displayName;
const Se = d.createContext(null);
function ae() {
  const e = d.useContext(Se);
  if (!e) throw new Error("Stepper components must be used within <Stepper>");
  return e;
}
const _t = d.createContext(null), Me = d.createContext(null);
function Nt() {
  const e = d.useContext(Me);
  if (e == null) throw new Error("StepperItem subcomponents must be inside <StepperItem>");
  return e;
}
const vn = d.forwardRef(
  ({ className: e, value: t, onValueChange: n, size: r = "default", children: o, ...i }, c) => /* @__PURE__ */ a(Se.Provider, { value: { value: t, onValueChange: n, size: r }, children: /* @__PURE__ */ a(
    "nav",
    {
      ref: c,
      "aria-label": "Steps",
      "data-slot": "stepper",
      "data-size": r,
      className: h("w-full", e),
      ...i,
      children: o
    }
  ) })
);
vn.displayName = "Stepper";
const yt = d.forwardRef(
  ({ className: e, segmentIndex: t, style: n, children: r, ...o }, i) => {
    const { value: c, size: s } = ae(), l = d.useContext(_t), m = typeof l == "number" ? l : t ?? 0, u = s === "sm", v = Number(c), f = Number.isFinite(v) && v > Number(m);
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
yt.displayName = "StepperSeparator";
function hn(e) {
  if (!d.isValidElement(e)) return !1;
  const t = e.type;
  return t === yt || t?.displayName === "StepperSeparator";
}
function bn(e) {
  return d.isValidElement(e) && e.type.displayName === "StepperItem";
}
const gn = d.forwardRef(
  ({ className: e, children: t, ...n }, r) => {
    const o = [];
    let i = 0, c = 0;
    return d.Children.forEach(t, (s) => {
      if (hn(s)) {
        const l = c++;
        o.push(
          /* @__PURE__ */ a(_t.Provider, { value: l, children: d.cloneElement(s, {
            key: s.key ?? `stepper-sep-inner-${l}`,
            segmentIndex: l
          }) }, s.key ?? `stepper-sep-${l}`)
        );
        return;
      }
      if (bn(s)) {
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
        className: h("m-0 flex w-full list-none items-start gap-0 p-0", e),
        ...n,
        children: o
      }
    );
  }
);
gn.displayName = "StepperList";
const _n = d.forwardRef(
  ({ className: e, step: t, children: n, ...r }, o) => {
    const i = t ?? 0, { value: c, size: s } = ae(), l = i < c ? "complete" : i === c ? "active" : "upcoming", m = s === "sm";
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
_n.displayName = "StepperItem";
const Nn = d.forwardRef(
  ({ className: e, type: t = "button", disabled: n, onClick: r, children: o, ...i }, c) => {
    const { value: s, onValueChange: l, size: m } = ae(), u = Nt(), v = l != null && !n && u <= s, g = h(
      "group/stepper-trigger flex rounded-md",
      m === "sm" ? "w-auto flex-row items-center gap-2 text-left" : "w-full max-w-[10rem] flex-col items-center gap-2 text-center"
    ), _ = h(
      g,
      v && "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:opacity-90",
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
Nn.displayName = "StepperTrigger";
const Be = "bg-[var(--color-button-primary-bg)] text-[var(--color-button-primary-text)]";
function ze(e, t = "default") {
  const n = t === "sm";
  return h(
    "flex shrink-0 items-center justify-center rounded-[var(--radius-full)] font-semibold tabular-nums transition-colors",
    n ? "size-6 text-[10px]" : "size-8 text-xs",
    e === "complete" && h(Be, n ? "[&_.material-symbols-outlined]:text-[14px] [&_.material-symbols-outlined]:leading-none" : "[&_.material-symbols-outlined]:text-[18px] [&_.material-symbols-outlined]:leading-none"),
    e === "active" && h(
      Be,
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
const yn = d.forwardRef(
  ({ className: e, stepDisplay: t, forceState: n, children: r, ...o }, i) => {
    const c = d.useContext(Me), s = d.useContext(Se), l = s?.size ?? "default", m = l === "sm";
    if (n != null) {
      const N = t ?? 1, y = n === "complete";
      return /* @__PURE__ */ a(
        "div",
        {
          ref: i,
          "data-slot": "stepper-indicator",
          "data-state": n,
          className: h(ze(n, l), e),
          ...o,
          children: r ?? (y ? /* @__PURE__ */ a($e, { sm: m }) : N)
        }
      );
    }
    if (c == null || s == null)
      throw new Error(
        "StepperIndicator must be inside StepperItem, or pass forceState for a static preview."
      );
    const u = c, v = s.value, f = u < v ? "complete" : u === v ? "active" : "upcoming", g = t ?? u + 1, _ = f === "complete";
    return /* @__PURE__ */ a(
      "div",
      {
        ref: i,
        "data-slot": "stepper-indicator",
        "data-state": f,
        className: h(ze(f, l), e),
        ...o,
        children: r ?? (_ ? /* @__PURE__ */ a($e, { sm: m }) : g)
      }
    );
  }
);
yn.displayName = "StepperIndicator";
const wn = d.forwardRef(
  ({ className: e, ...t }, n) => {
    const r = Nt(), { value: o, size: i } = ae(), c = r === o, s = r < o;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: n,
        "data-slot": "stepper-title",
        className: h(
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
wn.displayName = "StepperTitle";
const xn = d.forwardRef(
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
const Cn = d.forwardRef(
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
Cn.displayName = "NumberBadge";
function kn(e) {
  return e === !0 || e === "alert" ? "stat-card__badge--alert" : e === "success" ? "stat-card__badge--success" : e === "info" ? "stat-card__badge--info" : "";
}
const En = d.forwardRef(
  ({ className: e, icon: t = "person", label: n, value: r, pct: o, color: i = "grey", size: c = "lg", variant: s = "outlined", iconBadge: l, ...m }, u) => /* @__PURE__ */ p(
    "div",
    {
      ref: u,
      "data-slot": "stat-card",
      className: h(
        "stat-card",
        `stat-card--${c}`,
        `stat-card--${i}`,
        `stat-card--${s}`,
        e
      ),
      ...m,
      children: [
        /* @__PURE__ */ p("div", { className: "stat-card__icon", children: [
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined", "aria-hidden": !0, children: t }),
          l && /* @__PURE__ */ a("span", { className: h("stat-card__badge", kn(l)), "aria-hidden": !0 })
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
En.displayName = "StatCard";
const Sn = d.forwardRef(
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
      children: d.Children.map(n, (i, c) => /* @__PURE__ */ p(T, { children: [
        c > 0 && /* @__PURE__ */ a("div", { className: "stat-card-group__divider", "aria-hidden": !0 }),
        i
      ] }))
    }
  )
);
Sn.displayName = "StatCardGroup";
function Mn({
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
  productIconSrc: m = "/career-hub-icon.svg",
  hideProductIcon: u = !1,
  searchPlaceholder: v = "Type to search",
  onSearchChange: f,
  onSearchIconClick: g,
  actionButtons: _ = [],
  LinkComponent: N = Mn,
  NavLinkComponent: y
}) {
  const [E, k] = Re(!1), [w, x] = Re(!1), C = N, M = i === "/profile", S = n.avatarType === "photo" && n.avatarPhotoSrc ? n.avatarPhotoSrc.replace("w=200&h=200", "w=80&h=80") : null, P = (b) => {
    const j = b.chevron && b.subItems && b.subItems.length > 0;
    if (b.path && j) {
      const $ = i === b.path || b.subItems.some((z) => z.path === i);
      return /* @__PURE__ */ p("li", { className: "nav-menu__item navbar__tab-dropdown-wrap", children: [
        /* @__PURE__ */ p("button", { className: `navbar__tab navbar__tab--dropdown ${$ ? "navbar__tab--active" : ""}`, type: "button", children: [
          /* @__PURE__ */ a("span", { className: "navbar__tab-label", children: b.label }),
          /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", style: { fontSize: 16, marginLeft: 2 }, children: "expand_more" })
        ] }),
        /* @__PURE__ */ a("div", { className: "navbar__tab-hover-menu", children: /* @__PURE__ */ a("div", { className: "navbar__tab-menu-inner", children: b.subItems.map((z) => /* @__PURE__ */ a(C, { to: z.path, className: "nav-menu__link navbar__tab-menu-item", children: z.label }, z.path)) }) })
      ] }, b.id);
    }
    if (b.path) {
      const $ = y && y !== N, z = i === b.path || b.path === "/" && !i;
      return $ ? /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: z, children: /* @__PURE__ */ a(y, { to: b.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
        b.label,
        b.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, b.id) : /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { asChild: !0, active: z, children: /* @__PURE__ */ a(C, { to: b.path, className: "navbar__tab navbar__tab--link", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
        b.label,
        b.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ] }) }) }) }, b.id);
    }
    return /* @__PURE__ */ a(re, { children: /* @__PURE__ */ a(ie, { href: "#", className: "navbar__tab", children: /* @__PURE__ */ p("span", { className: "navbar__tab-label", children: [
      b.label,
      b.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
    ] }) }) }, b.id);
  }, R = (b) => b.path ? b.chevron && b.subItems && b.subItems.length > 0 ? /* @__PURE__ */ p("div", { className: "navbar__menu-group", children: [
    /* @__PURE__ */ a(C, { to: b.path, className: "navbar__menu-link navbar__menu-link--parent", onClick: () => k(!1), children: b.label }),
    /* @__PURE__ */ a("div", { className: "navbar__menu-sublinks", children: b.subItems.map(($) => /* @__PURE__ */ a(
      C,
      {
        to: $.path,
        className: "navbar__menu-link navbar__menu-link--sub",
        onClick: () => k(!1),
        children: $.label
      },
      $.path
    )) })
  ] }, b.id) : /* @__PURE__ */ p(
    C,
    {
      to: b.path,
      className: "navbar__menu-link",
      onClick: () => k(!1),
      children: [
        b.label,
        b.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    b.id
  ) : /* @__PURE__ */ p(
    "a",
    {
      href: "#",
      className: "navbar__menu-link",
      onClick: (j) => {
        j.preventDefault(), b.onClick?.(), k(!1);
      },
      children: [
        b.label,
        b.chevron && /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__tab-chevron", "aria-hidden": !0, children: "expand_more" })
      ]
    },
    b.id
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
        /* @__PURE__ */ p(C, { to: c, className: "navbar__branding", children: [
          /* @__PURE__ */ a("img", { src: s, alt: "", className: "navbar__logo" }),
          /* @__PURE__ */ a("div", { className: "navbar__divider" }),
          /* @__PURE__ */ p("div", { className: "navbar__product", children: [
            !u && /* @__PURE__ */ a("img", { src: m, alt: "", className: "navbar__product-icon", width: 40, height: 40 }),
            /* @__PURE__ */ a(
              "span",
              {
                className: `navbar__product-name ${l.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
                children: (() => {
                  const b = l.trim().split(/\s+/);
                  return b.length <= 1 ? l : /* @__PURE__ */ p(T, { children: [
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: b[0] }),
                    /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: b.slice(1).join(" ") })
                  ] });
                })()
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(an, { viewport: !1, variant: "underline", className: "navbar__tabs", delayDuration: 400, skipDelayDuration: 200, children: /* @__PURE__ */ a(nn, { className: "navbar__tabs-list", children: e.map(P) }) })
      ] }),
      /* @__PURE__ */ p("div", { className: "navbar__right", children: [
        /* @__PURE__ */ p("div", { className: "navbar__search-wrap", children: [
          /* @__PURE__ */ p("div", { className: "navbar__search", children: [
            /* @__PURE__ */ a("span", { className: "navbar__search-input", children: /* @__PURE__ */ a(
              Gt,
              {
                size: "small",
                shape: "pill",
                leadingIcon: "search",
                placeholder: v,
                "aria-label": "Search",
                onChange: (b) => f?.(b.target.value)
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
          _.map((b, j) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "navbar__btn navbar__btn--action",
              "aria-label": b.ariaLabel,
              onClick: b.onClick,
              children: b.iconSrc ? /* @__PURE__ */ a("img", { src: b.iconSrc, alt: "", className: "navbar__btn-icon-img", width: 20, height: 20 }) : /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__btn-icon", children: b.icon ?? "circle" })
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
                children: w || !S ? /* @__PURE__ */ a("span", { className: "navbar__avatar-initials", children: n.avatarInitials ?? "?" }) : /* @__PURE__ */ a(
                  "img",
                  {
                    src: S,
                    alt: "",
                    className: "navbar__avatar-img",
                    onError: () => x(!0)
                  }
                )
              }
            ),
            /* @__PURE__ */ a("span", { className: "material-symbols-outlined navbar__avatar-caret", "aria-hidden": !0, children: "expand_more" })
          ] }) }),
          /* @__PURE__ */ a(O.Portal, { children: /* @__PURE__ */ a(O.Content, { className: "navbar__avatar-menu", align: "end", sideOffset: 8, children: /* @__PURE__ */ p("div", { className: "navbar__avatar-menu-inner", children: [
            t.map((b) => /* @__PURE__ */ a(O.Item, { asChild: !0, children: /* @__PURE__ */ a(
              C,
              {
                to: b.path,
                className: `navbar__avatar-menu-item ${b.label === "My Profile" && M ? "navbar__avatar-menu-item--active" : ""}`,
                children: b.label
              }
            ) }, b.label)),
            r.length > 0 && o && /* @__PURE__ */ p(T, { children: [
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
                r.map((b) => /* @__PURE__ */ a(O.Item, { asChild: !0, children: /* @__PURE__ */ a(
                  "button",
                  {
                    type: "button",
                    className: "navbar__avatar-menu-option",
                    onClick: () => o(b.userId),
                    children: b.label
                  }
                ) }, b.userId))
              ] })
            ] })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a(Z.Root, { open: E, onOpenChange: k, children: /* @__PURE__ */ p(Z.Portal, { children: [
      /* @__PURE__ */ a(Z.Overlay, { className: "navbar__menu-overlay" }),
      /* @__PURE__ */ p(Z.Content, { className: "navbar__menu-drawer", "aria-describedby": void 0, children: [
        /* @__PURE__ */ p("div", { className: "navbar__menu-header", children: [
          /* @__PURE__ */ a(
            "span",
            {
              className: `navbar__product-name ${l.trim().split(/\s+/).length > 1 ? "navbar__product-name--two-lines" : ""}`,
              children: (() => {
                const b = l.trim().split(/\s+/);
                return b.length <= 1 ? l : /* @__PURE__ */ p(T, { children: [
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: b[0] }),
                  /* @__PURE__ */ a("span", { className: "navbar__product-name__line", children: b.slice(1).join(" ") })
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
const wt = d.createContext({
  variant: "career-hub",
  careerHubSize: "parent"
});
function In() {
  return d.useContext(wt);
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
), xt = d.forwardRef(
  ({ className: e, variant: t, chSize: n = "parent", sticky: r = !1, overlayBackground: o = !1, ...i }, c) => {
    const s = t ?? "career-hub", l = {
      variant: s,
      careerHubSize: s === "career-hub" ? n : "parent"
    };
    return /* @__PURE__ */ a(wt.Provider, { value: l, children: /* @__PURE__ */ a(
      "header",
      {
        ref: c,
        "data-slot": "header",
        "data-variant": s,
        "data-ch-size": s === "career-hub" ? n : void 0,
        className: h(
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
xt.displayName = "Header";
const Ln = {
  profile: "h-[var(--header-career-hub-profile-height)] min-h-[var(--header-career-hub-profile-height)] flex-wrap items-start content-start gap-y-3 pb-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:pb-6 md:gap-5",
  parent: "h-[var(--header-career-hub-parent-height)] min-h-[var(--header-career-hub-parent-height)] items-start gap-4 pl-[var(--spacing-12)] pr-[var(--spacing-12)]",
  child: "h-[var(--header-career-hub-child-height)] min-h-[var(--header-career-hub-child-height)] items-start gap-3 pb-2 pl-[var(--spacing-12)] pr-[var(--spacing-12)]"
}, Ct = d.forwardRef(
  ({ className: e, actions: t, children: n, ...r }, o) => {
    const { variant: i, careerHubSize: c } = In(), s = "flex min-h-12 w-full max-w-[100vw] items-start gap-3 py-0 pl-[var(--spacing-12)] pr-[var(--spacing-12)] md:h-[var(--navbar-height,3.75rem)] md:gap-4", l = h(
      "flex w-full max-w-[100vw] items-start",
      Ln[c]
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
Ct.displayName = "HeaderToolbar";
const Pn = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-actions", className: h(e), ...t })
);
Pn.displayName = "HeaderActions";
const Dn = d.forwardRef(
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
Dn.displayName = "HeaderGroup";
const kt = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("h1", { ref: n, "data-slot": "header-title", className: h(e), ...t })
);
kt.displayName = "HeaderTitle";
const Et = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, "data-slot": "header-text-group", className: h(e), ...t })
);
Et.displayName = "HeaderTextGroup";
const St = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a("p", { ref: n, "data-slot": "header-secondary", className: h(e), ...t })
);
St.displayName = "HeaderSecondary";
const On = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="540" viewBox="0 0 1440 540" fill="none"><g clip-path="url(#ef_ch_prof)"><rect width="1440" height="540" fill="white"/><path d="M760 77.8125L860 20V120L760 177.812V77.8125Z" fill="#C15151"/><path d="M960 77.8125L860 20V120L960 177.812V77.8125Z" fill="#F29D31"/><path d="M1060 251.25L1160 193.438V293.438L1060 351.25V251.25Z" fill="#69717F"/><path d="M1260 251.25L1160 193.438V293.438L1260 351.25V251.25Z" fill="#2DB3C7"/><path d="M1160 -6.5625L1060 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#F29D31"/><path d="M1360 93.4375L1260 35.625V135.625L1360 193.438V93.4375Z" fill="#F29D31"/><path d="M960 -22.1875L860 -80V20L960 77.8125V-22.1875Z" fill="#2DB3C7"/><path d="M1460 351.25L1360 293.438V393.438L1460 451.25V351.25Z" fill="#858B98"/><path d="M1460 451.25L1360 393.438V493.438L1460 551.25V451.25Z" fill="#2DB3C7"/><path d="M1460 251.25L1360 193.438V293.438L1460 351.25V251.25Z" fill="#E46F6F"/><path d="M1160 -6.5625L1260 -64.375V35.625L1160 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1160 93.4375L1260 35.625V135.625L1160 193.438V93.4375Z" fill="#69717F"/><path d="M1360 -6.5625L1460 -64.375V35.625L1360 93.4375V-6.5625Z" fill="#1999AC"/><path d="M1360 93.4375L1460 35.625V135.625L1360 193.438V93.4375Z" fill="#69717F"/><path d="M1060 35.625L960 -22.1875V77.8125L1060 135.625V35.625Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_prof"><rect width="1440" height="540" fill="white"/></clipPath></defs></svg>', An = '<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="292" viewBox="0 0 1440 292" fill="none"><g clip-path="url(#ef_ch_def)"><rect width="1440" height="292" fill="white"/><path d="M760 80.8585L860 20.7829V124.697L760 184.773V80.8585Z" fill="#C15151"/><path d="M960 80.8585L860 20.7829V124.697L960 184.773V80.8585Z" fill="#F29D31"/><path d="M1060 261.085L1160 201.01V304.924L1060 365V261.085Z" fill="#69717F"/><path d="M1260 261.085L1160 201.01V304.924L1260 365V261.085Z" fill="#2DB3C7"/><path d="M1160 -6.8194L1060 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#F29D31"/><path d="M1360 97.0952L1260 37.0196V140.934L1360 201.01V97.0952Z" fill="#F29D31"/><path d="M960 -23.056L860 -83.1317V20.7829L960 80.8586V-23.056Z" fill="#2DB3C7"/><path d="M1460 261.085L1360 201.01V304.924L1460 365V261.085Z" fill="#E46F6F"/><path d="M1160 -6.8194L1260 -66.895V37.0196L1160 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1160 97.0952L1260 37.0196V140.934L1160 201.01V97.0952Z" fill="#69717F"/><path d="M1360 -6.8194L1460 -66.895V37.0196L1360 97.0952V-6.8194Z" fill="#1999AC"/><path d="M1360 97.0952L1460 37.0196V140.934L1360 201.01V97.0952Z" fill="#69717F"/><path d="M1060 37.0196L960 -23.0561V80.8585L1060 140.934V37.0196Z" fill="#E46F6F"/></g><defs><clipPath id="ef_ch_def"><rect width="1440" height="292" fill="white"/></clipPath></defs></svg>';
function jn(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e === "profile" ? On : An)}")`;
}
function Vn(e) {
  return e === "talent-acquisition" ? "linear-gradient(180deg, color-mix(in srgb, var(--color-background2-blue) 50%, transparent) 0%, var(--background) 92%)" : "linear-gradient(180deg, color-mix(in srgb, var(--color-background1-grey) 65%, transparent) 0%, var(--color-background2-grey) 95%)";
}
function Fn(e, t) {
  const n = !!t.src?.trim(), r = e === "career-hub" && !n && t.chevronsVariant != null;
  return n && t.src ? {
    hasImage: !0,
    isChevrons: !1,
    fillStyle: {
      backgroundImage: t.imageScrim ? `${Vn(e)}, url(${t.src})` : `url(${t.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }
  } : r && t.chevronsVariant ? {
    hasImage: !1,
    isChevrons: !0,
    fillStyle: {
      backgroundColor: "var(--color-background1-grey)",
      backgroundImage: jn(t.chevronsVariant),
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
const Mt = d.forwardRef(
  ({
    className: e,
    variant: t,
    src: n,
    imageScrim: r = !0,
    chevronsVariant: o,
    children: i,
    ...c
  }, s) => {
    const { fillStyle: l, hasImage: m, isChevrons: u } = Fn(t, {
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
        ...c,
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
Mt.displayName = "ProductBackground";
const Tr = "/eightfold-logo.svg", Lr = "/ai-agent.svg", Bn = "/copilot.svg", Pr = ["talent-acquisition", "career-hub"], zn = {
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
function Dr(e, t = "medium") {
  return `${J}/${W[e][t]}`;
}
function Or(e, t = "medium") {
  return {
    productName: zn[e],
    productIconSrc: `${J}/${W[e][t]}`
  };
}
const Ar = Object.keys(W).reduce(
  (e, t) => (e[t] = {
    small: `${J}/${W[t].small}`,
    medium: `${J}/${W[t].medium}`
  }, e),
  {}
), jr = [
  { label: "My Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
  { label: "Help", path: "/help" },
  { label: "Sign out", path: "/sign-out" }
], Vr = [
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
], Fr = [
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
], Br = [
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
], zr = [
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
], $r = [
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
], Hr = "Search for positions or candidates", Ur = [
  { iconSrc: Bn, ariaLabel: "Copilot" },
  { icon: "work_outline", ariaLabel: "Talent" },
  { icon: "notifications", ariaLabel: "Notifications" }
];
function Gr({
  chSize: e = "parent",
  title: t,
  secondary: n,
  actions: r,
  navbarProps: o,
  chevronsVariant: i,
  children: c
}) {
  return /* @__PURE__ */ p(T, { children: [
    /* @__PURE__ */ a(Mt, { variant: "career-hub", chevronsVariant: i ?? (e === "profile" ? "profile" : "default"), children: /* @__PURE__ */ p("div", { className: "career-hub-shell", children: [
      /* @__PURE__ */ a(Rn, { ...o }),
      /* @__PURE__ */ a(xt, { variant: "career-hub", chSize: e, overlayBackground: !0, children: /* @__PURE__ */ a(Ct, { actions: r, children: /* @__PURE__ */ p(Et, { children: [
        /* @__PURE__ */ a(kt, { children: t }),
        n && /* @__PURE__ */ a(St, { children: n })
      ] }) }) })
    ] }) }),
    c
  ] });
}
export {
  Lr as AI_AGENT_LOGO_PATH,
  Jn as Badge,
  er as Breadcrumb,
  ir as BreadcrumbEllipsis,
  ar as BreadcrumbItem,
  nr as BreadcrumbLink,
  tr as BreadcrumbList,
  rr as BreadcrumbPage,
  or as BreadcrumbSeparator,
  Vt as Button,
  Xn as ButtonDropdown,
  Br as CAREER_HUB_CHRO_TABS,
  zr as CAREER_HUB_HRBP_TABS,
  Bn as COPILOT_LOGO_PATH,
  Wr as CORNER_RADIUS_TOKENS,
  Gr as CareerHubShell,
  sr as CourseObjectCard,
  br as DataTable,
  _r as DataTableBody,
  wr as DataTableCell,
  yr as DataTableHead,
  gr as DataTableHeader,
  Nr as DataTableRow,
  ne as DropdownMenu,
  $t as DropdownMenuContent,
  Ht as DropdownMenuItem,
  zt as DropdownMenuPortal,
  Ut as DropdownMenuSeparator,
  Bt as DropdownMenuTrigger,
  Tr as EIGHTFOLD_LOGO_PATH,
  jr as EMPLOYEE_AVATAR_MENU_ITEMS,
  Vr as EMPLOYEE_NON_MANAGER_TABS,
  xt as Header,
  Pn as HeaderActions,
  Dn as HeaderGroup,
  St as HeaderSecondary,
  Et as HeaderTextGroup,
  kt as HeaderTitle,
  Ct as HeaderToolbar,
  Gt as Input,
  oa as InsightCard,
  Fr as MANAGER_TABS,
  dr as MentorInsightCard,
  Rn as Navbar,
  an as NavigationMenu,
  mr as NavigationMenuContent,
  re as NavigationMenuItem,
  ie as NavigationMenuLink,
  nn as NavigationMenuList,
  ur as NavigationMenuTrigger,
  rn as NavigationMenuViewport,
  Cn as NumberBadge,
  Ge as OpenTo,
  Pr as PRIMARY_NAVBAR_PRODUCT_IDS,
  zn as PRODUCT_NAMES,
  cr as PeopleObjectCard,
  _e as Pill,
  Mt as ProductBackground,
  fn as Progress,
  lr as ProjectObjectCard,
  qr as SPACING_TOKENS,
  xr as Select,
  Sr as SelectContent,
  Cr as SelectGroup,
  Rr as SelectItem,
  Mr as SelectLabel,
  un as SelectScrollDownButton,
  dn as SelectScrollUpButton,
  Ir as SelectSeparator,
  Er as SelectTrigger,
  kr as SelectValue,
  Wt as SkillTag,
  En as StatCard,
  Sn as StatCardGroup,
  vn as Stepper,
  xn as StepperDescription,
  yn as StepperIndicator,
  _n as StepperItem,
  gn as StepperList,
  yt as StepperSeparator,
  wn as StepperTitle,
  Nn as StepperTrigger,
  Ur as TALENT_ACQUISITION_ACTION_BUTTONS,
  $r as TALENT_ACQUISITION_RECRUITER_TABS,
  Hr as TALENT_ACQUISITION_SEARCH_PLACEHOLDER,
  pr as Tabs,
  hr as TabsContent,
  fr as TabsList,
  vr as TabsTrigger,
  qt as Tag,
  Qn as TagGroup,
  Qt as badgeVariants,
  jt as buttonVariants,
  Or as getNavbarProductConfig,
  Dr as getProductLogoPath,
  Ar as productLogos,
  on as tabsListVariants
};
