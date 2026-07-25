import type { SocialLink } from '@/types/content';
import type { ReactElement, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function FacebookIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.6 7.2a5.4 5.4 0 0 1-3.2-1.1V15a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v2.6a2.6 2.6 0 1 0 1.8 2.5V3h2.5c.3 1.7 1.5 3.2 3.2 3.9v2.3z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M6.5 9H3.7v11h2.8V9zM5.1 4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5.1 4zM20.3 13.4c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.9-2.9 1.6V9H10.8c0 .7 0 11 0 11h2.8v-6.1c0-.3 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.7V20h2.8v-6.6z" />
    </svg>
  );
}

function YouTubeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

function XIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.5 3h3l-6.6 7.5L22 21h-6.2l-4.3-5.6L6 21H3l7-8L2.2 3H8.6l3.9 5.2L17.5 3zm-1.1 16.2h1.7L7.7 4.7H5.9l10.5 14.5z" />
    </svg>
  );
}

const iconMap: Record<SocialLink['icon'], (props: IconProps) => ReactElement> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  x: XIcon,
};

type SocialIconProps = {
  name: SocialLink['icon'];
  size?: number;
};

export function SocialIcon({ name, size = 18 }: SocialIconProps) {
  const Icon = iconMap[name] ?? FacebookIcon;
  return <Icon size={size} />;
}
