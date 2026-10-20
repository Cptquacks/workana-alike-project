<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTheme } from '@/composables/use-theme';
import { Icon } from '@iconify/vue';
import { somecode, areaweb } from '@/assets/logo.json';

const { isDark } = useTheme();
const mounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, 100);
});
</script>

<template>
  <div class="hello-page">
    <div
      class="hero-section"
      :class="{ visible: mounted }"
    >
      <UiBadge
        icon="solar:stars-minimalistic-bold"
        class="anim-item delay-1"
      >
        Somecode Community
      </UiBadge>

      <UiText
        tag="h1"
        size="6xl"
        weight="extrabold"
        align="center"
        class="title anim-item delay-2"
      >
        Hello, <br />
        <span class="gradient-text">Creative World!</span>
      </UiText>

      <UiText
        tag="p"
        size="xl"
        variant="secondary"
        class="anim-item delay-3"
      >
        Welcome to the updated experience. Explore our content and join the community.
      </UiText>

      <div class="social-grid">
        <!-- AreaWeb Block  -->
        <div class="social-card areaweb-card-split anim-item delay-4">
          <!-- Left Half: YouTube -->
          <a
            href="https://www.youtube.com/@areaweb"
            target="_blank"
            class="split-half youtube"
          >
            <Icon
              icon="solar:video-library-line-duotone"
              class="action-icon"
            />
            <UiText
              tag="span"
              size="lg"
              weight="bold"
              class="action-label"
              >YouTube</UiText
            >
          </a>

          <!-- Center Logo Overlay -->
          <div class="center-logo">
            <img
              :src="isDark ? areaweb.dark : areaweb.light"
              alt="AreaWeb"
              class="logo-img"
            />
          </div>

          <!-- Right Half: Telegram -->
          <a
            href="https://t.me/areawebsu"
            target="_blank"
            class="split-half telegram"
          >
            <Icon
              icon="solar:plain-2-line-duotone"
              class="action-icon"
            />
            <UiText
              tag="span"
              size="lg"
              weight="bold"
              class="action-label"
              >Telegram</UiText
            >
          </a>
        </div>

        <!-- Somecode Block -->
        <a
          href="https://t.me/somecoders"
          target="_blank"
          class="social-card somecode-card anim-item delay-5"
        >
          <div class="logo-container">
            <img
              :src="isDark ? somecode.dark : somecode.light"
              alt="Somecode"
              class="somecode-logo"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hello-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  gap: 3rem;
  padding-top: 2rem;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;

  // Base animation state for children
  .anim-item {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
    transition:
      opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1),
      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); // Custom spring bezier
  }

  &.visible {
    .anim-item {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
}

// Stagger delays
.delay-1 {
  transition-delay: 0.1s;
}
.delay-2 {
  transition-delay: 0.2s;
}
.delay-3 {
  transition-delay: 0.3s;
}
.delay-4 {
  transition-delay: 0.4s;
}
.delay-5 {
  transition-delay: 0.5s;
}

.title {
  letter-spacing: -0.03em;
}

.gradient-text {
  background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 10px rgba(139, 92, 246, 0.3));

  [data-theme='dark'] & {
    background: linear-gradient(135deg, #a78bfa 0%, #ddd6fe 50%, #d8b4fe 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.social-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.social-card {
  background: var(--surface-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 1.5rem;
  transition: all 0.3s ease; // Only for hover effects
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--accent-primary);
  }
}

// AreaWeb Split Card
.areaweb-card-split {
  display: flex;
  position: relative;
  min-height: 180px;
  border: none;

  .split-half {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;

    .action-icon {
      font-size: 4rem;
      margin-bottom: 0.25rem;
    }

    // YouTube Half
    &.youtube {
      background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
      color: #dc2626;

      [data-theme='dark'] & {
        background: linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%);
        color: #fca5a5;
      }

      &:hover {
        flex: 1.1;
      }
    }

    // Telegram Half
    &.telegram {
      background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
      color: #0284c7;

      [data-theme='dark'] & {
        background: linear-gradient(135deg, #082f49 0%, #0c4a6e 100%);
        color: #7dd3fc;
      }

      &:hover {
        flex: 1.1;
      }
    }
  }

  .center-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background: var(--surface-primary);
    padding: 0.35rem;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-img {
      width: 4rem;
      height: 4rem;
      border-radius: 0.75rem;
      object-fit: cover;
      display: block;
    }
  }
}

// Somecode Card
.somecode-card {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--text-primary);
  padding: 2rem;
  position: relative;
  z-index: 1;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .somecode-logo {
      width: 12rem; // Increased from 8rem to 12rem
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
      transition: transform 0.3s ease;
    }
  }

  &:hover {
    border-color: transparent;
    box-shadow: var(--shadow-xl);

    &::before {
      opacity: 1; // Show gradient on hover
    }

    .somecode-logo {
      transform: scale(1.1) rotate(-2deg);
      filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
    }
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
