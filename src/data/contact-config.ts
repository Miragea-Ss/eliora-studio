import type { AtelierLang } from './atelier-copy';

/**
 * お問い合わせフォームの送信先（Google Apps Script ウェブアプリ）
 *
 * ★ URL を入れる場所（ここ1か所）:
 *    下の APPS_SCRIPT_URL を、デプロイしたウェブアプリの /exec URL に置き換える。
 *    例: https://script.google.com/macros/s/XXXX/exec
 *
 * プレースホルダのままだとフォームは「準備中」表示になり、送信されません。
 * 切替前は Web3Forms を使っていました。URL を入れたあとに公開してください。
 */
export const APPS_SCRIPT_URL_PLACEHOLDER = 'APPS_SCRIPT_URL_PENDING';
export const APPS_SCRIPT_URL: string =
  (import.meta.env.PUBLIC_APPS_SCRIPT_URL as string | undefined)?.trim() ||
  'https://script.google.com/macros/s/AKfycbzudWSfA3WgpwK_3Sk9gWtCw0GHe2Sn19OK7OwS9nVhC9kNkST8MNeuHhjys5fOp5An6A/exec';

export function isAppsScriptUrlPending(): boolean {
  return !APPS_SCRIPT_URL || APPS_SCRIPT_URL === APPS_SCRIPT_URL_PLACEHOLDER;
}

if (isAppsScriptUrlPending() && !(globalThis as any).__appsScriptWarned) {
  (globalThis as any).__appsScriptWarned = true;
  console.warn(
    '[contact] APPS_SCRIPT_URL is still the placeholder (APPS_SCRIPT_URL_PENDING): contact forms will stay unavailable until the web app URL is set.'
  );
}

export const CONTACT_SITE = 'https://eliora-studio.com';

export function atelierContactPath(lang: AtelierLang): string {
  return `/atelier/${lang}/contact/`;
}

export function contactFormPostUrl(): string {
  return APPS_SCRIPT_URL;
}

/** False while the Apps Script URL is still a placeholder. */
export function isContactFormReady(): boolean {
  return !isAppsScriptUrlPending();
}

export function contactFormPageUrl(lang: AtelierLang): string {
  return `${CONTACT_SITE}${atelierContactPath(lang)}`;
}

export function contactFormNext(lang: AtelierLang, path?: string): string {
  return `${path ? `${CONTACT_SITE}${path}` : contactFormPageUrl(lang)}?sent=1`;
}

/** Sender name shown in the shop-side notification subject line. */
export const CONTACT_FROM_NAME = 'Miragea · Eliora website';

export function contactFormSubject(lang: AtelierLang): string {
  const subjects: Record<AtelierLang, string> = {
    en: '[Miragea · Eliora] New project inquiry',
    ja: '[Miragea · Eliora] お仕事のご相談',
    zh: '[Miragea · Eliora] 项目咨询',
  };
  return subjects[lang];
}
