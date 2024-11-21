import{registerComponent}from"helpers";import{WYATTElement}from"wyatt";registerComponent("nav-item",class extends WYATTElement{constructor(){super(),this.menu=this.querySelector("[data-menu]"),this.menu&&(this.trigger=this.querySelector("[data-trigger]"),this.trigger||this.injectTrigger(),this.trigger.addEventListener("click",this.handleTriggerClick.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this)))}injectTrigger(){const t=document.createElement("button");t.type="button",t.classList.add("button-reset","nav-item__trigger"),t.ariaLabel=`Open menu for ${this.menu.ariaLabel}`,t.setAttribute("aria-controls",this.menu.id),t.setAttribute("aria-expanded",!1),this.trigger=t,this.querySelector("a").after(t)}handleTriggerClick(t){t.preventDefault(),"true"===this.getAttribute("expanded")?this.closeMenu():this.openMenu()}handleFocusout(){this.matches(":focus-within")||this.closeMenu()}openMenu(){this.setAttribute("expanded",!0),this.trigger.setAttribute("aria-expanded",!0)}closeMenu(){this.setAttribute("expanded",!1),this.trigger.setAttribute("aria-expanded",!1)}});