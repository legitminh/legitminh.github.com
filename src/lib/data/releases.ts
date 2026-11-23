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
export const releasesUrlFor = (repo: string) => `https://github.com/legitminh/${repo}/releases`;

export function platformAssets(releases: Release[], platform: Platform, repo = 'vietmoi') {
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
      asset.browser_download_url.startsWith(`${releasesUrlFor(repo)}/download/`)
    );
    if (assets.length) return { release, assets };
  }
  return null;
}

// These are published before deploying the site; API failures retain working links.
export const publishedRelease: Release = {
  tag_name: 'v0.12.2',
  html_url: `${releasesUrl}/tag/v0.12.2`,
  prerelease: true,
  draft: false,
  assets: [
    'sieuviet-0.12.2-macos-universal.zip',
    'sieuviet-0.12.2-ios-unsigned.ipa',
    'sieuviet-0.12.2-android-universal-debug.apk',
    'sieuviet-0.12.2-windows-x64.zip',
    'sieuviet-0.12.2-windows-arm64.zip',
    'sieuviet-0.12.2-ubuntu-26.04-amd64.deb',
    'sieuviet-0.12.2-ubuntu-26.04-arm64.deb'
  ].map(name => ({ name, browser_download_url: `${releasesUrl}/download/v0.12.2/${name}` }))
};

const noteworkReleases = releasesUrlFor('notework');
// The first native notework release; the live release list replaces it when reachable.
export const noteworkRelease: Release = {
  tag_name: 'v0.1.0',
  html_url: `${noteworkReleases}/tag/v0.1.0`,
  prerelease: false,
  draft: false,
  assets: [
    'notework-0.1.0-macos-universal.dmg',
    'notework-0.1.0-macos-universal.app.zip',
    'notework-0.1.0-windows-x64-setup.exe',
    'notework-0.1.0-ubuntu-amd64.deb',
    'notework-0.1.0-linux-x86_64.AppImage'
  ].map(name => ({ name, browser_download_url: `${noteworkReleases}/download/v0.1.0/${name}` }))
};
