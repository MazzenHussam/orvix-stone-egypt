/** Premium micro-interaction tokens — fade / scale only, 200–350ms. */

export const motion = {
  /** Standard UI hover / button / color shifts */
  duration: '280ms',
  /** Slightly longer for image zoom */
  durationImage: '320ms',
  /** Page enter / section fade */
  durationFade: '300ms',

  /** Framer Motion seconds (same windows) */
  seconds: {
    fast: 0.2,
    base: 0.28,
    image: 0.32,
    fade: 0.3,
    page: 0.32,
  },

  ease: 'ease',
  easeCss: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  /** Framer ease — gentle, no bounce */
  easeFramer: [0.25, 0.1, 0.25, 1] as const,

  /** Interactive hover scale */
  scaleHover: 1.02,
  /** Image zoom inside overflow-clipped frames */
  imageZoom: 1.02,
} as const;

/** Shared CSS transition strings */
export const transitions = {
  color: `color ${motion.duration} ${motion.easeCss}`,
  background: `background-color ${motion.duration} ${motion.easeCss}`,
  transform: `transform ${motion.duration} ${motion.easeCss}`,
  opacity: `opacity ${motion.durationFade} ${motion.easeCss}`,
  button: [
    `background-color ${motion.duration} ${motion.easeCss}`,
    `color ${motion.duration} ${motion.easeCss}`,
    `border-color ${motion.duration} ${motion.easeCss}`,
    `opacity ${motion.duration} ${motion.easeCss}`,
    `transform ${motion.duration} ${motion.easeCss}`,
  ].join(', '),
  imageZoom: `transform ${motion.durationImage} ${motion.easeCss}`,
} as const;

/** MUI sx helpers */
export const hoverScaleSx = {
  transition: transitions.transform,
  '&:hover': {
    transform: `scale(${motion.scaleHover})`,
  },
} as const;

export const imageZoomSx = {
  transition: transitions.imageZoom,
} as const;

export const imageZoomParentSx = {
  [`&:hover .safe-image-media`]: {
    transform: `scale(${motion.imageZoom})`,
  },
} as const;

export default motion;
