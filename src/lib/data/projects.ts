export type ProjectId = 'notework' | 'sieuviet' | 'keyflow' | 'discrete';
export type GuideTab = 'usage' | 'configuration' | 'installation';
export type Platform = 'macos' | 'windows' | 'linux' | 'ios' | 'android';

export interface GuideSection {
  title: string;
  text?: string;
  steps?: string[];
  items?: string[];
  code?: string;
  link?: { label: string; href: string };
}

export const platforms: { id: Platform; label: string }[] = [
  { id: 'macos', label: 'macos' },
  { id: 'windows', label: 'windows' },
  { id: 'linux', label: 'ubuntu 26.04' },
  { id: 'ios', label: 'iphone / ipad' },
  { id: 'android', label: 'android' }
];

export interface ProjectGuide {
  id: ProjectId;
  name: string;
  summary: string;
  goal: string;
  github: string;
  app?: string;
  image?: { src: string; alt: string; caption: string };
  usage: GuideSection[];
  configuration: GuideSection[];
}

export const projects: ProjectGuide[] = [
  {
    id: 'notework', name: 'notework',
    summary: 'text, drawings, and files in a network of notes.',
    goal: 'organize information as connected files. write, draw, and follow links without moving everything into one storage service.',
    github: 'https://github.com/legitminh/notework',
    app: 'https://legitminh.github.io/notework/',
    image: {
      src: '/images/guides/notework-links.svg',
      alt: 'a note containing [[ideas]] links to an ideas note. a drawing is embedded with a backslash svgpage directive.',
      caption: 'files stay separate. links and embedded drawings connect them.'
    },
    usage: [
      { title: 'write your first note', steps: [
        'open notework. at home, choose app settings → create new file/folder.',
        'enter a name and choose text file. open its preview or the open: filename button to edit.',
        'type. edits autosave; cmd/ctrl+s saves immediately. choose exit (ctrl+esc) to finish and return to navigation.'
      ] },
      { title: 'connect notes', text: 'type [[ in a note. use the arrow keys and enter to select a file or create a new one. after saving, the link also appears as a navigation button.', code: 'today\n  [[ideas]]\n  [[reading]]' },
      { title: 'find and move', items: [
        'cmd/ctrl+p: search connected file and folder names. choose open to edit a result.',
        'home: return to the root. ..: go to the parent folder.',
        'esc: switch between text entry and toolbar controls. in vim mode, leave insert/visual mode first.',
        'outside text entry, press the key labels shown on buttons to activate them.'
      ] },
      { title: 'draw and export', steps: [
        'in the editor, choose draw… and a format. draw with a mouse, touch, or stylus.',
        'use brush, eraser, undo, and redo. choose exit to return to the note.',
        'choose export for pdf, png, or jpeg. download the file, or use share in the installed app when available.'
      ] }
    ],
    configuration: [
      { title: 'storage', text: 'new notes use this browser’s storage. to work on existing computer files, use chrome or edge and choose app settings → add existing folder/file. grant access to the files you want to connect. browser storage and connected computer files are separate sources.' },
      { title: 'github sync · optional', steps: [
        'create a fine-grained github token limited to your chosen repository, with contents: read and write.',
        'in app settings → github repositories, enter the repository, branch, and token. the branch needs an initial commit and must allow direct pushes.',
        'edit normally. saves keep a browser draft; exit queues a commit. watch the bottom progress bar for publishing or conflicts.'
      ], link: { label: 'create a fine-grained token', href: 'https://github.com/settings/personal-access-tokens/new' } },
      { title: 'appearance and input', items: [
        'app settings → appearance: light, dark, or system theme; vim mode; line numbers; outline formatting.',
        'app settings → keyboard: shortcut alphabet, virtual keyboard, and keyboard layout.',
        'app settings → autosave: save interval. export margins control spacing in exported files.'
      ] },
      { title: 'keep your notes', text: 'use keep browser storage in app settings, and keep backups of important files. clearing site data deletes browser-stored notes. installing the app does not sync notes between devices; connect a github repository for that workflow.' }
    ]
  },
  {
    id: 'sieuviet', name: 'siêu việt',
    summary: 'build vietnamese syllables in four choices.',
    goal: 'type vietnamese by its sounds: initial, vowel, final, and tone. use the same construction model on a physical or touch keyboard, with siêu việt or standard quốc ngữ output.',
    github: 'https://github.com/legitminh/vietmoi',
    image: {
      src: '/images/guides/sieuviet-rounds.svg',
      alt: 'four ascii+ keys build má: m chooses initial m; s chooses vowel a; e chooses no final; d adds the sắc tone and commits má followed by a space.',
      caption: 'ascii+ example: m → s → e → d produces “má ”. a completed syllable includes one space.'
    },
    usage: [
      { title: 'type one syllable', steps: [
        'select siêu việt as your system keyboard. on touch, tap the displayed sound; on a physical keyboard, press its shown key.',
        'choose the initial, then the combined onglide/vowel, then the final. choose ∅ when there is no initial or final.',
        'choose the tone last. the keyboard commits the syllable and adds one space.'
      ] },
      { title: 'try these · default ascii+ layout', code: 'm s e s  →  ma\nm s e d  →  má\nx v n s  →  xin', text: 'the guide changes after each choice. these are four separate key presses, not a chord. with quốc ngữ output, spelling conversion happens on the last choice.' },
      { title: 'correct and switch', items: [
        'backspace undoes one round while composing; otherwise it deletes normally.',
        'space keeps an unfinished word and adds a space. escape cancels unfinished input on a physical keyboard.',
        'a quick isolated left shift tap switches vietnamese / literal ascii on physical keyboards. on iphone, quick-tap ⇧. the iphone remembers the mode across text fields.',
        'use ascii mode for literal text, abbreviations, or another language.'
      ] },
      { title: 'iphone touch controls', items: [
        'hold ⇧ while typing for uppercase. releasing it immediately restores normal typing; it does not capitalize a later key.',
        'double-tap ⇧ for caps lock; tap again to turn it off.',
        'tap 123 or #+= to switch panels. hold either for temporary numbers or symbols; release to return.',
        'use the globe key to select another system keyboard.'
      ] }
    ],
    configuration: [
      { title: 'choose layout and spelling', text: 'open the siêu việt app → cài đặt (settings). choose ascii+ for letter-position mappings or grid4x8 for the grid. choose quốc ngữ for standard vietnamese spelling, or siêu việt for phonetic spelling. the first three rounds use the same phonetic preview.' },
      { title: 'language and appearance', text: 'vietnamese is the default interface language; english is available in settings. the native apps follow the system’s light or dark appearance. select settings in the app, then return to your text field to use them.' },
      { title: 'iphone keyboard access', text: 'full access is not required. password fields, some phone fields, and apps that disallow third-party keyboards use apple’s keyboard. switching back in a regular text field restores siêu việt.' }
    ]
  },
  {
    id: 'keyflow', name: 'keyflow',
    summary: 'one interaction system for keys, pointer, and touch.',
    goal: 'make controls usable from the keyboard without maintaining a separate shortcut system. compose buttons, input frames, virtual keyboards, text fields, and sliders in svelte 5.',
    github: 'https://github.com/legitminh/keyflow',
    usage: [
      { title: 'use the controls', text: 'click or tap a button, or press its displayed key sequence and release. enter letters in order; escape clears an unfinished sequence. text fields keep normal typing. try the button below with your pointer or its displayed shortcut.' },
      { title: 'add your first button', text: 'after installing the package, mount one keyflow root and one document for the page. import the stylesheet once. buttonpositional gets a shortcut while visible.', code: `<script lang="ts">\n  import { Keyflow, Document, ButtonPositional }\n    from '@legitminh/keyflow';\n  import '@legitminh/keyflow/styles.css';\n  let count = $state(0);\n</script>\n\n<Keyflow>\n  <Document>\n    <ButtonPositional on_close={() => count++}>\n      count: {count}\n    </ButtonPositional>\n  </Document>\n</Keyflow>` },
      { title: 'add an interaction', items: [
        'button: keep an automatically assigned shortcut while mounted. buttonpositional: register while visible.',
        'staticbutton: assign a fixed key sequence. textbox: enter a dedicated text-editing frame.',
        'inputframe: isolate a menu, dialog, or picker so only the active frame handles input.',
        'sliders: drag the dot, or hold a control’s shortcut to move; release to stop.'
      ], link: { label: 'api examples and guides', href: 'https://github.com/legitminh/keyflow#readme' } }
    ],
    configuration: [
      { title: 'set application defaults', text: 'pass options to the keyflow root. use a storage prefix to separate saved preferences between apps. saved preferences take precedence over the initial defaults.', code: `<Keyflow options={{\n  storagePrefix: 'my-app:',\n  keys: key_presets.alphanumeric,\n  minBox: 40,\n  lockstep: false\n}}>\n  <!-- page content -->\n</Keyflow>`, link: { label: 'theme, key, and layout options', href: 'https://github.com/legitminh/keyflow#configure-the-flow' } },
      { title: 'scope shortcuts', text: 'create an inputframe for each menu or dialog. push it when opening; pop it when closing. only the top frame responds. keep static bindings unique and prefix-free within a frame.', link: { label: 'input frames and virtual keyboards', href: 'https://github.com/legitminh/keyflow/blob/main/docs/input-frames-and-keyboards.md' } },
      { title: 'choose scrolling and key labels', text: 'set lockstep: false for native scrolling. set platform to auto, mac, windows, or linux for modifier labels. use key_presets or a custom keys array for automatic shortcuts. import key_presets from the package when using the example above.' }
    ]
  },
  {
    id: 'discrete', name: 'discrete',
    summary: 'a keyboard-driven command center built from your own actions.',
    goal: 'reach apps, files, scripts, and window tools through a small graph of keyboard actions. build your own menus instead of memorizing a growing list of global shortcuts.',
    github: 'https://github.com/legitminh/discrete',
    usage: [
      { title: 'open and navigate', steps: [
        'launch discrete. it runs in the background with no dock icon or startup window.',
        'quick-tap caps lock to open the overlay. tap the displayed key beside an action to enter its menu or run it.',
        'use return to previous state to move up. tap caps lock from any screen to close discrete.'
      ], text: 'commands use short taps, not held chords. follow the keys currently displayed; reserved keys can move when you add bindings or change keyboards.' },
      { title: 'search for something', steps: [
        'at the root, choose search. type an app, file, folder, action, or state name.',
        'press enter to confirm the query. press the digit shown beside a result to open it.',
        'esc returns to typing after confirmation; esc while typing closes search.'
      ], text: 'files open with their macos default app, including workspace files. apps use discrete’s window and desktop selection. search uses spotlight for files.' },
      { title: 'run your tools', items: [
        'a resource action opens an app or file, or runs your chosen executable script.',
        'builtins can move a window to the next monitor, toggle full screen, open an app, or open/find a browser tab.',
        'sketch mode maps one finger on the trackpad to drawing on the screen. lift to end the stroke; multi-finger gestures keep their usual behavior. run the toggle again to turn it off.'
      ] }
    ],
    configuration: [
      { title: 'add an action', steps: [
        'open a state and choose configure → add a function.',
        'choose resource to activate for an app, file, or script; choose builtin function for a shipped tool.',
        'tap an unused trigger key. enter a name; press enter to confirm, then enter again to save.',
        'pick the resource or builtin. fill in each argument prompt. the action is saved only after every step is complete.'
      ] },
      { title: 'organize menus', text: 'configure → new state creates a submenu. choose its trigger, then name it. use name this state, rename a function, set function trigger, or update function to edit an existing setup. caps lock cancels unfinished edits and exits.' },
      { title: 'browser actions', text: 'for open webpage if not present, enter the url to open, then the url prefix that identifies existing tabs. use a trailing slash after the host, for example https://example.com/. chrome and safari support tab lookup; macos may ask for automation access to the browser.' },
      { title: 'keyboard bindings', text: 'bindings use physical key positions and survive a layout change. disconnected-key actions remain saved and become available again when that keyboard returns. choose triggers from the keys offered by the overlay; caps lock and escape are reserved.' }
    ]
  }
];

export const discreteInstallation: GuideSection[] = [
  { title: 'install on macos', text: 'discrete is a native mac app. public release packaging is pending; the current installation path is a source build in xcode.', steps: [
    'get the source from github and open discrete.xcodeproj in xcode.',
    'choose the discrete scheme, your mac destination, and a signing team if required. build and run. the project currently targets macos 26.5.',
    'in system settings → privacy & security → accessibility, enable discrete, then relaunch it.',
    'tap caps lock to verify that the overlay opens. discrete registers to launch at login; manage it in system settings → general → login items.'
  ], link: { label: 'source and build project', href: 'https://github.com/legitminh/discrete' } },
  { title: 'other systems', text: 'discrete currently targets macos. there are no windows, linux, ios, or android builds.' }
];

export const pwaInstallation: Record<Platform, GuideSection> = {
  macos: { title: 'install on macos', steps: [
    'open notework in chrome or edge for access to existing computer files.',
    'in chrome, choose ⋮ → cast, save, and share → install page as app… (or the install icon in the address bar). confirm.',
    'open notework from applications or your launcher. on macos 14+, safari also offers file → add to dock; use browser-stored notes there.'
  ], link: { label: 'safari installation guide', href: 'https://support.apple.com/en-us/104996' } },
  windows: { title: 'install on windows', steps: [
    'open notework in chrome or edge.',
    'in chrome, choose ⋮ → cast, save, and share → install page as app… or use the address-bar install icon. in edge, choose … → more tools → apps → install this site as an app.',
    'confirm, then launch notework from start. pin it to the taskbar if useful.'
  ], link: { label: 'chrome installation guide', href: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en' } },
  linux: { title: 'install on linux', steps: [
    'open notework in chrome.',
    'choose ⋮ → cast, save, and share → install page as app… or select the install icon in the address bar.',
    'confirm, then launch notework from your desktop’s application menu. firefox can use the website in a tab.'
  ], link: { label: 'chrome installation guide', href: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en' } },
  ios: { title: 'install on iphone or ipad', steps: [
    'open notework in safari.',
    'choose share → add to home screen. if shown, enable open as web app, then tap add.',
    'launch notework from its home screen icon. create or connect your notes inside this installed app.'
  ], text: 'use browser storage or a connected github repository. the desktop folder picker is unavailable on iphone/ipad.', link: { label: 'apple home screen guide', href: 'https://support.apple.com/guide/iphone/iphea86e5236/ios' } },
  android: { title: 'install on android', steps: [
    'open notework in chrome.',
    'choose ⋮ → install and create shortcut → install. some versions show add to home screen → install.',
    'confirm, then open notework from the launcher. use browser storage or a connected github repository.'
  ], link: { label: 'chrome installation guide', href: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en' } }
};

export const nativeInstallation: Record<Platform, GuideSection> = {
  macos: { title: 'macos · input method', text: 'macos 13 or later, intel or apple silicon. the universal app is ad-hoc signed and is not notarized with developer id.', steps: [
    'download the macos build from github releases. follow that release’s installation notes; keep the existing input source when updating.',
    'for first-time setup: system settings → keyboard → text input → edit → +. add siêu việt. log out and back in if it is not listed.',
    'select siêu việt in the input menu. open the siêu việt app for settings.'
  ] },
  ios: { title: 'iphone / ipad · keyboard extension', steps: [
    'install a signed ios build using the distribution method in the release notes. an ipa download alone cannot install an unsigned keyboard.',
    'open settings → general → keyboard → keyboards → add new keyboard → siêu việt.',
    'in a text field, hold the globe key and select siêu việt. leave full access off.'
  ], text: 'for a development build, use xcode on a mac and sign both the app and keyboard extension with your apple development team.' },
  android: { title: 'android · system keyboard', steps: [
    'download the apk from github releases. open it and, if prompted, allow installation from that download source.',
    'install and open siêu việt. enable it in android’s keyboard settings.',
    'choose select keyboard in the app and select siêu việt. use the app’s practice editor to try it.'
  ], text: 'android 10 or later. review the release notes for supported devices and architectures.' },
  linux: { title: 'linux · ibus / fcitx 5', steps: [
    'download the ubuntu 26.04 .deb matching your architecture, amd64 or arm64. install it with sudo apt install ./filename.deb, using the downloaded filename.',
    'log in again or restart your input framework.',
    'add siêu việt in gnome input sources (ibus) or fcitx 5 configuration. use one input framework per session; open sieuviet-settings to configure it.'
  ], text: 'development builds have been exercised on ubuntu 26.04, x11, arm64 and x64. other distributions and wayland still need qualification.' },
  windows: { title: 'windows · tsf input service', steps: [
    'choose a release for your architecture, x64 or arm64. keep the extracted package at its final installation path.',
    'follow the release’s registration instructions. the development package uses install.ps1 in matching-architecture powershell; registration needs administrator access.',
    'select siêu việt with win+space. open sieuvietsettings.exe for settings and practice.'
  ], text: 'development release: native x64 and arm64 builds pass packaged-engine checks. interactive tsf typing in real applications still needs qualification.' }
};
