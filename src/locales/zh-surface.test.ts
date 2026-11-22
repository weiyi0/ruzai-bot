import { expect, it } from "vitest";

import en from "./en.json";
import zh from "./zh.json";

const SURFACE = [
  "onboarding.meet.title",
  "onboarding.meet.demo",
  "onboarding.meet.setupLater",
  "onboarding.meet.setUp",
  "onboarding.chief.title",
  "onboarding.shell.placeholder",
  "sidebar.aria",
  "sidebar.import",
  "settings.title",
  "settings.language.title",
  "chat.error.switchModel",
  "contextMenu.title",
  "native.context.copyImage",
  "native.dialog.resetSavedKeys.title",
] as const;

function placeholders(value: string): string[] {
  return [...value.matchAll(/\{(\w+)\}/g)].map((match) => match[1]!).sort();
}

it("simplified Chinese covers the welcome, sidebar, settings and native menu strings", () => {
  for (const key of SURFACE) {
    expect(zh[key], key).toBeTruthy();
    expect(placeholders(zh[key]!), key).toEqual(placeholders(en[key]));
  }
  expect(zh["onboarding.meet.title"]).toContain("{app}");
  expect(zh["onboarding.meet.setUp"]).not.toBe(en["onboarding.meet.setUp"]);
});
