const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 6);
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const burger = document.querySelector(".burger");
const panel = document.querySelector(".nav-panel");
const setMenu = (open) => {
  panel.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  document.body.classList.toggle("locked", open);
};
burger.addEventListener("click", () => setMenu(!panel.classList.contains("open")));
panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

const rail = document.querySelector(".rail");
const slides = [...rail.querySelectorAll(".slide")];
const count = document.querySelector(".rail-count");
const updateCount = () => {
  const width = slides[0].getBoundingClientRect().width + 16;
  const index = Math.min(slides.length, Math.max(1, Math.round(rail.scrollLeft / width) + 1));
  count.textContent = `${String(index).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
};
document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    const width = slides[0].getBoundingClientRect().width + 16;
    rail.scrollBy({ left: button.dataset.scroll === "next" ? width : -width, behavior: "smooth" });
  });
});
rail.addEventListener("scroll", updateCount, { passive: true });
updateCount();

const form = document.querySelector("#inquiry");
const success = document.querySelector(".form-success");
const preview = document.querySelector("#inquiry-preview");
const note = document.querySelector(".form-note");

const field = (name) => form.elements[name].value.trim();
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

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const submit = form.querySelector("[type=submit]");
  const previous = submit.textContent;
  submit.disabled = true;
  submit.textContent = "보내는 중...";
  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: field("company"),
        name: field("name"),
        email: field("email"),
        phone: field("phone"),
        kind: field("kind"),
        goods: field("goods"),
        incoterm: field("incoterm"),
        origin: field("origin"),
        destination: field("destination"),
        message: field("message"),
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "메일을 보내지 못했습니다.");
    preview.textContent = compose();
    form.classList.add("hidden");
    success.classList.add("show");
  } catch (error) {
    note.textContent = error instanceof Error ? error.message : "메일을 보내지 못했습니다. 잠시 후 다시 시도해 주세요.";
  } finally {
    submit.disabled = false;
    submit.textContent = previous;
  }
});

document.querySelector("#copy-inquiry").addEventListener("click", async () => {
  const text = preview.textContent;
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
  const previous = button.textContent;
  button.textContent = "복사했습니다";
  setTimeout(() => {
    button.textContent = previous;
  }, 1600);
});

document.querySelector("#edit-inquiry").addEventListener("click", () => {
  success.classList.remove("show");
  form.classList.remove("hidden");
});

document.querySelector("#year").textContent = String(new Date().getFullYear());

const lightbox = document.querySelector(".lightbox");
const lightboxView = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");
const pagePhotos = () => [...document.querySelectorAll("main img")].filter((img) => !img.closest(".slide, .mosaic"));
const showPhoto = (index) => {
  const items = pagePhotos();
  if (!items.length) return;
  const next = (index + items.length) % items.length;
  const img = items[next];
  lightboxView.src = img.currentSrc || img.src;
  lightboxView.alt = img.alt || "";
  const text = img.closest("figure")?.querySelector("figcaption")?.textContent?.trim() || img.alt || "";
  lightboxCaption.textContent = text;
  lightboxCaption.hidden = !text;
  lightbox.dataset.index = String(next);
  if (!lightbox.open) lightbox.showModal();
  document.body.classList.add("locked");
};
document.querySelector("main").addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img || !img.closest("main") || img.closest(".slide, .mosaic")) return;
  showPhoto(pagePhotos().indexOf(img));
});
lightbox.addEventListener("click", (event) => {
  if (event.target.closest("[data-lightbox='prev']")) {
    showPhoto(Number(lightbox.dataset.index) - 1);
    return;
  }
  if (event.target.closest("[data-lightbox='next']")) {
    showPhoto(Number(lightbox.dataset.index) + 1);
    return;
  }
  if (event.target === lightbox || event.target.closest("[data-lightbox='close']")) lightbox.close();
});
lightbox.addEventListener("close", () => {
  document.body.classList.remove("locked");
  lightboxView.removeAttribute("src");
});
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") showPhoto(Number(lightbox.dataset.index) + 1);
  if (event.key === "ArrowLeft") showPhoto(Number(lightbox.dataset.index) - 1);
});
