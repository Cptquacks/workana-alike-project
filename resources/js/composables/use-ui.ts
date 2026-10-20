import type { App } from 'vue';
import { UiButton, UiText, UiBadge, UiTip } from '@/components/ui';

export const registerUiComponents = (app: App): void => {
  app.component('UiButton', UiButton);
  app.component('UiText', UiText);
  app.component('UiBadge', UiBadge);
  app.component('UiTip', UiTip);
};
