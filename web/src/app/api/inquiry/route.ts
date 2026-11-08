import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const LIMITS = {
  company: 200,
  name: 120,
  email: 200,
  phone: 80,
  kind: 120,
  goods: 200,
  incoterm: 120,
  origin: 200,
  destination: 200,
  message: 4000,
} as const;

function clean(value: unknown, max: number) {
  return String(value ?? "").replace(/\r/g, "").trim().slice(0, max);
}

export async function POST(request: Request) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO;
  const fromName = (process.env.MAIL_FROM_NAME || "Neocle International").replace(/["\r\n]/g, "");
  if (!user || !pass || !to) {
    return NextResponse.json({ error: "메일 설정이 없어 보내지 못했습니다." }, { status: 500 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const company = clean(payload.company, LIMITS.company);
  const name = clean(payload.name, LIMITS.name);
  const email = clean(payload.email, LIMITS.email);
  const phone = clean(payload.phone, LIMITS.phone);
  const kind = clean(payload.kind, LIMITS.kind);
  const goods = clean(payload.goods, LIMITS.goods);
  const incoterm = clean(payload.incoterm, LIMITS.incoterm);
  const origin = clean(payload.origin, LIMITS.origin);
  const destination = clean(payload.destination, LIMITS.destination);
  const message = clean(payload.message, LIMITS.message);

  if (!company || !name || !email || !kind) {
    return NextResponse.json({ error: "필수 항목을 입력해 주세요." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "이메일 주소를 확인해 주세요." }, { status: 400 });
  }

  const text = [
    "Neocle International 상담 요청",
    `회사명: ${company}`,
    `담당자명: ${name}`,
    `이메일: ${email}`,
    `연락처: ${phone || "-"}`,
    `문의 유형: ${kind}`,
    `문의 품목: ${goods || "-"}`,
    `희망 거래 조건: ${incoterm || "-"}`,
    `출발지: ${origin || "-"}`,
    `도착지: ${destination || "-"}`,
    `상세 문의 내용: ${message || "-"}`,
    "",
    "이 메일에 답장하면 문의에 적힌 이메일로 회신됩니다.",
  ].join("\n");

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"${fromName}" <${user}>`,
      to,
      replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`,
      subject: `[Neocle] ${kind} — ${company}`,
      text,
    });
  } catch (error) {
    console.error("inquiry mail failed", error);
    return NextResponse.json({ error: "메일을 보내지 못했습니다. 잠시 후 다시 시도해 주세요." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
