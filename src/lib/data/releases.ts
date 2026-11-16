import type { Platform } from './projects';

export interface ReleaseAsset { name: string; browser_download_url: string }
export interface Release {
  tag_name: string;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
  assets: ReleaseAsset[];
}

export const releasesUrl = 'https://github.com/legitminh/vietmoi/releases';

export function platformAssets(releases: Release[], platform: Platform) {
  // Releases arrive newest first. Use the newest build for each platform, even
  // when platforms ship separately. Do not mistake source, tests, or checksums for builds.
  const patterns: Record<Platform, RegExp> = {
    macos: /(?:macos|darwin|osx|mac)[-_.].*\.(?:zip|dmg|pkg|gz)$|(?:macos|darwin|osx|mac)\.(?:zip|dmg|pkg)$/i,
    windows: /(?:windows|win32|win64|win)[-_.].*\.(?:zip|exe|msi|gz)$|(?:windows|win)\.(?:zip|exe|msi)$/i,
    linux: /(?:linux|ubuntu)[-_.].*\.(?:gz|xz|zst|deb|rpm|appimage)$|(?:linux|ubuntu)\.(?:deb|rpm|appimage)$/i,
    ios: /\.ipa$/i,
    android: /\.apk$/i
  };
  for (const release of releases) {
    if (release.draft) continue;
    const assets = release.assets.filter(asset =>
      patterns[platform].test(asset.name) &&
      !/(?:checksum|sha256|source|symbols|dsym|simulator|androidtest|test[-_.])/i.test(asset.name) &&
      asset.browser_download_url.startsWith('https://github.com/legitminh/vietmoi/releases/download/')
    );
    if (assets.length) return { release, assets };
  }
  return null;
}

// These are published before deploying the site; API failures retain working links.
export const publishedRelease: Release = {
  tag_name: 'v0.12.1',
  html_url: `${releasesUrl}/tag/v0.12.1`,
  prerelease: true,
  draft: false,
  assets: [
    'sieuviet-0.12.1-macos-universal.zip',
    'sieuviet-0.12.1-ios-unsigned.ipa',
    'sieuviet-0.12.1-android-universal-debug.apk',
    'sieuviet-0.12.1-windows-x64.zip',
    'sieuviet-0.12.1-windows-arm64.zip',
    'sieuviet-0.12.1-ubuntu-26.04-amd64.deb',
    'sieuviet-0.12.1-ubuntu-26.04-arm64.deb'
  ].map(name => ({ name, browser_download_url: `${releasesUrl}/download/v0.12.1/${name}` }))
};
