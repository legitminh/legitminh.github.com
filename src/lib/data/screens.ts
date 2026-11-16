import type { ProjectId } from './projects';

export const contentScreens = {
  'about': { name: "about", parent: '', load: () => import('$lib/screens/about.svelte') },
  'blog': { name: "blog", parent: '', load: () => import('$lib/screens/blog.svelte') },
  'blog/10_grade_campaign': { name: "10 grade campaign", parent: 'blog', load: () => import('$lib/screens/blog_10_grade_campaign.svelte') },
  'blog/9_grade_campaign': { name: "9 grade campaign", parent: 'blog', load: () => import('$lib/screens/blog_9_grade_campaign.svelte') },
  'blog/chocolate_fondue': { name: "chocolate fondue", parent: 'blog', load: () => import('$lib/screens/blog_chocolate_fondue.svelte') },
  'blog/detachment': { name: "detachment", parent: 'blog', load: () => import('$lib/screens/blog_detachment.svelte') },
  'blog/hag': { name: "hag", parent: 'blog', load: () => import('$lib/screens/blog_hag.svelte') },
  'blog/infinity': { name: "infinity", parent: 'blog', load: () => import('$lib/screens/blog_infinity.svelte') },
  'blog/nan': { name: "nan", parent: 'blog', load: () => import('$lib/screens/blog_nan.svelte') },
  'blog/nan/proof': { name: "proof", parent: 'blog/nan', load: () => import('$lib/screens/blog_nan_proof.svelte') },
  'blog/nhalang_high_abstraction': { name: "nhalang high abstraction", parent: 'blog', load: () => import('$lib/screens/blog_nhalang_high_abstraction.svelte') },
  'blog/nhalang_low_abstraction': { name: "nhalang low abstraction", parent: 'blog', load: () => import('$lib/screens/blog_nhalang_low_abstraction.svelte') },
  'blog/nhsga': { name: "nhsga", parent: 'blog', load: () => import('$lib/screens/blog_nhsga.svelte') },
  'project/astro_fest_1': { name: "astro fest 1", parent: 'list.project', load: () => import('$lib/screens/project_astro_fest_1.svelte') },
  'project/astrofest': { name: "astrofest", parent: 'list.project', load: () => import('$lib/screens/project_astrofest.svelte') },
  'project/audio_player': { name: "audio player", parent: 'list.project', load: () => import('$lib/screens/project_audio_player.svelte') },
  'project/net_zero_hero': { name: "net zero hero", parent: 'list.project', load: () => import('$lib/screens/project_net_zero_hero.svelte') },
  'project/pep_website': { name: "pep website", parent: 'list.project', load: () => import('$lib/screens/project_pep_website.svelte') },
  'project/piano_game': { name: "piano game", parent: 'list.project', load: () => import('$lib/screens/project_piano_game.svelte') },
  'project/youtube_randomize': { name: "youtube randomize", parent: 'list.project', load: () => import('$lib/screens/project_youtube_randomize.svelte') }
};

export type ContentScreenId = keyof typeof contentScreens;
export type ScreenId = ProjectId | ContentScreenId;

export function isContentScreen(id: string): id is ContentScreenId {
  return Object.prototype.hasOwnProperty.call(contentScreens, id);
}
