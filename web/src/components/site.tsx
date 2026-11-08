"use client";

import { useEffect } from "react";
import { SiteMarkup } from "./site-markup";

export function Site() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const controller = new AbortController();
    const { signal: stop } = controller;

    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 6);
    document.addEventListener("scroll", onScroll, { passive: true, signal: stop });
    onScroll();

    const burger = document.querySelector<HTMLButtonElement>(".burger");
    const panel = document.querySelector(".nav-panel");
    const setMenu = (open: boolean) => {
      panel?.classList.toggle("open", open);
      burger?.setAttribute("aria-expanded", String(open));
      burger?.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
      document.body.classList.toggle("locked", open);
    };
    burger?.addEventListener("click", () => setMenu(!panel?.classList.contains("open")), { signal: stop });
    panel?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false), { signal: stop });
    });

    const rail = document.querySelector<HTMLElement>(".rail");
    const slides = rail ? [...rail.querySelectorAll<HTMLElement>(".slide")] : [];
    const count = document.querySelector(".rail-count");
    const updateCount = () => {
      if (!rail || !slides[0] || !count) return;
      const width = slides[0].getBoundingClientRect().width + 16;
      const index = Math.min(slides.length, Math.max(1, Math.round(rail.scrollLeft / width) + 1));
      count.textContent = `${String(index).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };
    document.querySelectorAll<HTMLButtonElement>("[data-scroll]").forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          if (!rail || !slides[0]) return;
          const width = slides[0].getBoundingClientRect().width + 16;
          rail.scrollBy({
            left: button.dataset.scroll === "next" ? width : -width,
            behavior: "smooth",
          });
        },
        { signal: stop },
      );
    });
    rail?.addEventListener("scroll", updateCount, { passive: true, signal: stop });
    updateCount();

    const form = document.querySelector<HTMLFormElement>("#inquiry");
    const success = document.querySelector(".form-success");
    const preview = document.querySelector("#inquiry-preview");
    const note = document.querySelector(".form-note");
    const email = (form?.dataset.email || "").trim();
    const year = document.querySelector("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    if (form && email && note) {
      note.textContent = "작성 후 메일 앱에서 내용을 확인하고 보내 주세요.";
      const submit = form.querySelector<HTMLButtonElement>("[type=submit]");
      if (submit) submit.textContent = "메일로 보내기";
    }

    const field = (name: string) => {
      const control = form?.elements.namedItem(name);
      if (control && "value" in control) return String(control.value).trim();
      return "";
    };
    const compose = () =>
      [
        "Neocle International 상담 요청",
        `회사명: ${field("company")}`,
        `담당자명: ${field("name")}`,
        `이메일: ${field("email")}`,
        `연락처: ${field("phone") || "-"}`,
        `문의 유형: ${field("kind")}`,
        `문의 품목: ${field("goods") || "-"}`,
        `희망 거래 조건: ${field("incoterm") || "-"}`,
        `출발지: ${field("origin") || "-"}`,
        `도착지: ${field("destination") || "-"}`,
        `상세 문의 내용: ${field("message") || "-"}`,
      ].join("\n");

    form?.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        if (!form.reportValidity() || !preview || !success) return;
        const body = compose();
        preview.textContent = body;
        form.classList.add("hidden");
        success.classList.add("show");
        if (email) {
          const subject = encodeURIComponent("수출입 대행 상담 요청");
          window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
        }
      },
      { signal: stop },
    );

    document.querySelector("#copy-inquiry")?.addEventListener(
      "click",
      async () => {
        const text = preview?.textContent || "";
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const area = document.createElement("textarea");
          area.value = text;
          document.body.appendChild(area);
          area.select();
          document.execCommand("copy");
          area.remove();
        }
        const button = document.querySelector("#copy-inquiry");
        if (!button) return;
        const previous = button.textContent;
        button.textContent = "복사했습니다";
        window.setTimeout(() => {
          button.textContent = previous;
        }, 1600);
      },
      { signal: stop },
    );

    document.querySelector("#edit-inquiry")?.addEventListener(
      "click",
      () => {
        success?.classList.remove("show");
        form?.classList.remove("hidden");
      },
      { signal: stop },
    );

    const dialog = document.querySelector<HTMLDialogElement>(".lightbox");
    const view = dialog?.querySelector("img");
    const caption = dialog?.querySelector("figcaption");
    const photos = () =>
      [...document.querySelectorAll<HTMLImageElement>("main img")].filter((img) => !img.closest(".slide, .mosaic"));
    const showPhoto = (index: number) => {
      const items = photos();
      if (!dialog || !view || !caption || items.length === 0) return;
      const next = (index + items.length) % items.length;
      const img = items[next];
      view.src = img.currentSrc || img.src;
      view.alt = img.alt || "";
      const text = img.closest("figure")?.querySelector("figcaption")?.textContent?.trim() || img.alt || "";
      caption.textContent = text;
      caption.hidden = !text;
      dialog.dataset.index = String(next);
      if (!dialog.open) dialog.showModal();
      document.body.classList.add("locked");
    };
    document.querySelector("main")?.addEventListener(
      "click",
      (event) => {
        const img = (event.target as Element).closest?.("img");
        if (!(img instanceof HTMLImageElement) || !img.closest("main") || img.closest(".slide, .mosaic")) return;
        showPhoto(photos().indexOf(img));
      },
      { signal: stop },
    );
    dialog?.addEventListener(
      "click",
      (event) => {
        const target = event.target as Element;
        if (target.closest("[data-lightbox='prev']")) {
          showPhoto(Number(dialog.dataset.index) - 1);
          return;
        }
        if (target.closest("[data-lightbox='next']")) {
          showPhoto(Number(dialog.dataset.index) + 1);
          return;
        }
        if (event.target === dialog || target.closest("[data-lightbox='close']")) dialog.close();
      },
      { signal: stop },
    );
    dialog?.addEventListener(
      "close",
      () => {
        document.body.classList.remove("locked");
        view?.removeAttribute("src");
      },
      { signal: stop },
    );
    dialog?.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "ArrowRight") showPhoto(Number(dialog.dataset.index) + 1);
        if (event.key === "ArrowLeft") showPhoto(Number(dialog.dataset.index) - 1);
      },
      { signal: stop },
    );

    return () => controller.abort();
  }, []);

  return <SiteMarkup />;
}
