import type UiTextComponent from '../components/ui/text/UiText.vue';
import type UiButtonComponent from '../components/ui/button/UiButton.vue';
import type UiBadgeComponent from '../components/ui/badge/UiBadge.vue';
import type UiTipComponent from '../components/ui/tip/UiTip.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UiText: typeof UiTextComponent;
    UiButton: typeof UiButtonComponent;
    UiBadge: UiBadgeComponent;
    UiTip: UiTipComponent;
  }
}
