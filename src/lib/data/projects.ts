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
  { id: 'macos', label: 'macOS' },
  { id: 'windows', label: 'Windows' },
  { id: 'linux', label: 'Linux' },
  { id: 'ios', label: 'iPhone / iPad' },
  { id: 'android', label: 'Android' }
];

export interface ProjectGuide {
  id: ProjectId;
  name: string;
  kind: string;
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
    id: 'notework', name: 'notework', kind: 'notes · web app',
    summary: 'Text, drawings, and files in a network of notes.',
    goal: 'Organize information as connected files. Write, draw, and follow links without moving everything into one storage service.',
    github: 'https://github.com/legitminh/notework',
    app: 'https://legitminh.github.io/notework/',
    image: {
      src: '/images/guides/notework-links.svg',
      alt: 'A note containing [[ideas]] links to an ideas note. A drawing is embedded with a backslash svgpage directive.',
      caption: 'Files stay separate. Links and embedded drawings connect them.'
    },
    usage: [
      { title: 'Write your first note', steps: [
        'Open Notework. At Home, choose app settings → create new file/folder.',
        'Enter a name and choose text file. Open its preview or the open: filename button to edit.',
        'Type. Edits autosave; Cmd/Ctrl+S saves immediately. Choose Exit (Ctrl+Esc) to finish and return to navigation.'
      ] },
      { title: 'Connect notes', text: 'Type [[ in a note. Use the arrow keys and Enter to select a file or create a new one. After saving, the link also appears as a navigation button.', code: 'Today\n  [[ideas]]\n  [[reading]]' },
      { title: 'Find and move', items: [
        'Cmd/Ctrl+P: search connected file and folder names. Choose Open to edit a result.',
        'Home: return to the root. ..: go to the parent folder.',
        'Esc: switch between text entry and toolbar controls. In Vim mode, leave Insert/Visual mode first.',
        'Outside text entry, press the key labels shown on buttons to activate them.'
      ] },
      { title: 'Draw and export', steps: [
        'In the editor, choose Draw… and a format. Draw with a mouse, touch, or stylus.',
        'Use Brush, Eraser, Undo, and Redo. Choose Exit to return to the note.',
        'Choose Export for PDF, PNG, or JPEG. Download the file, or use Share in the installed app when available.'
      ] }
    ],
    configuration: [
      { title: 'Storage', text: 'New notes use this browser’s storage. To work on existing computer files, use Chrome or Edge and choose app settings → add existing folder/file. Grant access to the files you want to connect. Browser storage and connected computer files are separate sources.' },
      { title: 'GitHub sync · optional', steps: [
        'Create a fine-grained GitHub token limited to your chosen repository, with Contents: Read and write.',
        'In app settings → GitHub repositories, enter the repository, branch, and token. The branch needs an initial commit and must allow direct pushes.',
        'Edit normally. Saves keep a browser draft; Exit queues a commit. Watch the bottom progress bar for publishing or conflicts.'
      ], link: { label: 'Create a fine-grained token', href: 'https://github.com/settings/personal-access-tokens/new' } },
      { title: 'Appearance and input', items: [
        'App settings → appearance: light, dark, or system theme; Vim mode; line numbers; outline formatting.',
        'App settings → keyboard: shortcut alphabet, virtual keyboard, and keyboard layout.',
        'App settings → Autosave: save interval. Export margins control spacing in exported files.'
      ] },
      { title: 'Keep your notes', text: 'Use keep browser storage in app settings, and keep backups of important files. Clearing site data deletes browser-stored notes. Installing the app does not sync notes between devices; connect a GitHub repository for that workflow.' }
    ]
  },
  {
    id: 'sieuviet', name: 'siêu việt', kind: 'Vietnamese · native keyboard',
    summary: 'Build Vietnamese syllables in four choices.',
    goal: 'Type Vietnamese by its sounds: initial, vowel, final, and tone. Use the same construction model on a physical or touch keyboard, with siêu việt or standard quốc ngữ output.',
    github: 'https://github.com/legitminh/vietmoi',
    image: {
      src: '/images/guides/sieuviet-rounds.svg',
      alt: 'Four ASCII+ keys build má: m chooses initial m; s chooses vowel a; e chooses no final; d adds the sắc tone and commits má followed by a space.',
      caption: 'ASCII+ example: m → s → e → d produces “má ”. A completed syllable includes one space.'
    },
    usage: [
      { title: 'Type one syllable', steps: [
        'Select siêu việt as your system keyboard. On touch, tap the displayed sound; on a physical keyboard, press its shown key.',
        'Choose the initial, then the combined onglide/vowel, then the final. Choose ∅ when there is no initial or final.',
        'Choose the tone last. The keyboard commits the syllable and adds one space.'
      ] },
      { title: 'Try these · default ASCII+ layout', code: 'm s e s  →  ma\nm s e d  →  má\nx v n s  →  xin', text: 'The guide changes after each choice. These are four separate key presses, not a chord. With quốc ngữ output, spelling conversion happens on the last choice.' },
      { title: 'Correct and switch', items: [
        'Backspace undoes one round while composing; otherwise it deletes normally.',
        'Space keeps an unfinished word and adds a space. Escape cancels unfinished input on a physical keyboard.',
        'A quick isolated Left Shift tap switches Vietnamese / literal ASCII on physical keyboards. On iPhone, quick-tap ⇧. The iPhone remembers the mode across text fields.',
        'Use ASCII mode for literal text, abbreviations, or another language.'
      ] },
      { title: 'iPhone touch controls', items: [
        'Hold ⇧ while typing for uppercase. Hold and release without typing to capitalize the next key.',
        'Double-tap ⇧ for Caps Lock; tap again to turn it off.',
        'Tap 123 or #+= to switch panels. Hold either for temporary numbers or symbols; release to return.',
        'Use the globe key to select another system keyboard.'
      ] }
    ],
    configuration: [
      { title: 'Choose layout and spelling', text: 'Open the siêu việt app → Cài đặt (Settings). Choose ascii+ for letter-position mappings or grid4x8 for the grid. Choose quốc ngữ for standard Vietnamese spelling, or siêu việt for phonetic spelling. The first three rounds use the same phonetic preview.' },
      { title: 'Language and appearance', text: 'Vietnamese is the default interface language; English is available in settings. The native apps follow the system’s light or dark appearance. Select settings in the app, then return to your text field to use them.' },
      { title: 'iPhone keyboard access', text: 'Full Access is not required. Password fields, some phone fields, and apps that disallow third-party keyboards use Apple’s keyboard. Switching back in a regular text field restores siêu việt.' }
    ]
  },
  {
    id: 'keyflow', name: 'keyflow', kind: 'Svelte 5 · interaction library',
    summary: 'One interaction system for keys, pointer, and touch.',
    goal: 'Make controls usable from the keyboard without maintaining a separate shortcut system. Compose buttons, input frames, virtual keyboards, text fields, and sliders in Svelte 5.',
    github: 'https://github.com/legitminh/keyflow',
    usage: [
      { title: 'Use the controls', text: 'Click or tap a button, or press its displayed key sequence and release. Enter letters in order; Escape clears an unfinished sequence. Text fields keep normal typing. Try the button below with your pointer or its displayed shortcut.' },
      { title: 'Add your first button', text: 'After installing the package, mount one Keyflow root and one Document for the page. Import the stylesheet once. ButtonPositional gets a shortcut while visible.', code: `<script lang="ts">\n  import { Keyflow, Document, ButtonPositional }\n    from '@legitminh/keyflow';\n  import '@legitminh/keyflow/styles.css';\n  let count = $state(0);\n</script>\n\n<Keyflow>\n  <Document>\n    <ButtonPositional on_close={() => count++}>\n      Count: {count}\n    </ButtonPositional>\n  </Document>\n</Keyflow>` },
      { title: 'Add an interaction', items: [
        'Button: keep an automatically assigned shortcut while mounted. ButtonPositional: register while visible.',
        'StaticButton: assign a fixed key sequence. TextBox: enter a dedicated text-editing frame.',
        'InputFrame: isolate a menu, dialog, or picker so only the active frame handles input.',
        'Sliders: drag the dot, or hold a control’s shortcut to move; release to stop.'
      ], link: { label: 'API examples and guides', href: 'https://github.com/legitminh/keyflow#readme' } }
    ],
    configuration: [
      { title: 'Set application defaults', text: 'Pass options to the Keyflow root. Use a storage prefix to separate saved preferences between apps. Saved preferences take precedence over the initial defaults.', code: `<Keyflow options={{\n  storagePrefix: 'my-app:',\n  keys: key_presets.alphanumeric,\n  minBox: 40,\n  lockstep: false\n}}>\n  <!-- page content -->\n</Keyflow>`, link: { label: 'Theme, key, and layout options', href: 'https://github.com/legitminh/keyflow#configure-the-flow' } },
      { title: 'Scope shortcuts', text: 'Create an InputFrame for each menu or dialog. Push it when opening; pop it when closing. Only the top frame responds. Keep static bindings unique and prefix-free within a frame.', link: { label: 'Input frames and virtual keyboards', href: 'https://github.com/legitminh/keyflow/blob/main/docs/input-frames-and-keyboards.md' } },
      { title: 'Choose scrolling and key labels', text: 'Set lockstep: false for native scrolling. Set platform to auto, mac, windows, or linux for modifier labels. Use key_presets or a custom keys array for automatic shortcuts. Import key_presets from the package when using the example above.' }
    ]
  },
  {
    id: 'discrete', name: 'discrete', kind: 'macOS · command toolbox',
    summary: 'A keyboard-driven command center built from your own actions.',
    goal: 'Reach apps, files, scripts, and window tools through a small graph of keyboard actions. Build your own menus instead of memorizing a growing list of global shortcuts.',
    github: 'https://github.com/legitminh/discrete',
    usage: [
      { title: 'Open and navigate', steps: [
        'Launch Discrete. It runs in the background with no Dock icon or startup window.',
        'Quick-tap Caps Lock to open the overlay. Tap the displayed key beside an action to enter its menu or run it.',
        'Use return to previous state to move up. Tap Caps Lock from any screen to close Discrete.'
      ], text: 'Commands use short taps, not held chords. Follow the keys currently displayed; reserved keys can move when you add bindings or change keyboards.' },
      { title: 'Search for something', steps: [
        'At the root, choose search. Type an app, file, folder, action, or state name.',
        'Press Enter to confirm the query. Press the digit shown beside a result to open it.',
        'Esc returns to typing after confirmation; Esc while typing closes search.'
      ], text: 'Files open with their macOS default app, including workspace files. Apps use Discrete’s window and desktop selection. Search uses Spotlight for files.' },
      { title: 'Run your tools', items: [
        'A resource action opens an app or file, or runs your chosen executable script.',
        'Builtins can move a window to the next monitor, toggle full screen, open an app, or open/find a browser tab.',
        'Sketch mode maps one finger on the trackpad to drawing on the screen. Lift to end the stroke; multi-finger gestures keep their usual behavior. Run the toggle again to turn it off.'
      ] }
    ],
    configuration: [
      { title: 'Add an action', steps: [
        'Open a state and choose configure → add a function.',
        'Choose resource to activate for an app, file, or script; choose builtin function for a shipped tool.',
        'Tap an unused trigger key. Enter a name; press Enter to confirm, then Enter again to save.',
        'Pick the resource or builtin. Fill in each argument prompt. The action is saved only after every step is complete.'
      ] },
      { title: 'Organize menus', text: 'Configure → new state creates a submenu. Choose its trigger, then name it. Use name this state, rename a function, set function trigger, or update function to edit an existing setup. Caps Lock cancels unfinished edits and exits.' },
      { title: 'Browser actions', text: 'For open webpage if not present, enter the URL to open, then the URL prefix that identifies existing tabs. Use a trailing slash after the host, for example https://example.com/. Chrome and Safari support tab lookup; macOS may ask for Automation access to the browser.' },
      { title: 'Keyboard bindings', text: 'Bindings use physical key positions and survive a layout change. Disconnected-key actions remain saved and become available again when that keyboard returns. Choose triggers from the keys offered by the overlay; Caps Lock and Escape are reserved.' }
    ]
  }
];

export const discreteInstallation: GuideSection[] = [
  { title: 'Install on macOS', text: 'Discrete is a native Mac app. Public release packaging is pending; the current installation path is a source build in Xcode.', steps: [
    'Get the source from GitHub and open discrete.xcodeproj in Xcode.',
    'Choose the discrete scheme, your Mac destination, and a signing team if required. Build and run. The project currently targets macOS 26.5.',
    'In System Settings → Privacy & Security → Accessibility, enable Discrete, then relaunch it.',
    'Tap Caps Lock to verify that the overlay opens. Discrete registers to launch at login; manage it in System Settings → General → Login Items.'
  ], link: { label: 'Source and build project', href: 'https://github.com/legitminh/discrete' } },
  { title: 'Other systems', text: 'Discrete currently targets macOS. There are no Windows, Linux, iOS, or Android builds.' }
];

export const pwaInstallation: Record<Platform, GuideSection> = {
  macos: { title: 'Install on macOS', steps: [
    'Open Notework in Chrome or Edge for access to existing computer files.',
    'In Chrome, choose ⋮ → Cast, save, and share → Install page as app… (or the install icon in the address bar). Confirm.',
    'Open Notework from Applications or your launcher. On macOS 14+, Safari also offers File → Add to Dock; use browser-stored notes there.'
  ], link: { label: 'Safari installation guide', href: 'https://support.apple.com/en-us/104996' } },
  windows: { title: 'Install on Windows', steps: [
    'Open Notework in Chrome or Edge.',
    'In Chrome, choose ⋮ → Cast, save, and share → Install page as app… or use the address-bar install icon. In Edge, choose … → More tools → Apps → Install this site as an app.',
    'Confirm, then launch Notework from Start. Pin it to the taskbar if useful.'
  ], link: { label: 'Chrome installation guide', href: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en' } },
  linux: { title: 'Install on Linux', steps: [
    'Open Notework in Chrome.',
    'Choose ⋮ → Cast, save, and share → Install page as app… or select the install icon in the address bar.',
    'Confirm, then launch Notework from your desktop’s application menu. Firefox can use the website in a tab.'
  ], link: { label: 'Chrome installation guide', href: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en' } },
  ios: { title: 'Install on iPhone or iPad', steps: [
    'Open Notework in Safari.',
    'Choose Share → Add to Home Screen. If shown, enable Open as Web App, then tap Add.',
    'Launch Notework from its Home Screen icon. Create or connect your notes inside this installed app.'
  ], text: 'Use browser storage or a connected GitHub repository. The desktop folder picker is unavailable on iPhone/iPad.', link: { label: 'Apple Home Screen guide', href: 'https://support.apple.com/guide/iphone/iphea86e5236/ios' } },
  android: { title: 'Install on Android', steps: [
    'Open Notework in Chrome.',
    'Choose ⋮ → Install and create shortcut → Install. Some versions show Add to Home screen → Install.',
    'Confirm, then open Notework from the launcher. Use browser storage or a connected GitHub repository.'
  ], link: { label: 'Chrome installation guide', href: 'https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en' } }
};

export const nativeInstallation: Record<Platform, GuideSection> = {
  macos: { title: 'macOS · input method', steps: [
    'Download the macOS build from GitHub Releases. Follow that release’s installation notes; keep the existing input source when updating.',
    'For first-time setup: System Settings → Keyboard → Text Input → Edit → +. Add siêu việt. Log out and back in if it is not listed.',
    'Select siêu việt in the input menu. Open the siêu việt app for settings.'
  ] },
  ios: { title: 'iPhone / iPad · keyboard extension', steps: [
    'Install a signed iOS build using the distribution method in the release notes. An IPA download alone cannot install an unsigned keyboard.',
    'Open Settings → General → Keyboard → Keyboards → Add New Keyboard → siêu việt.',
    'In a text field, hold the globe key and select siêu việt. Leave Full Access off.'
  ], text: 'For a development build, use Xcode on a Mac and sign both the app and keyboard extension with your Apple development team.' },
  android: { title: 'Android · system keyboard', steps: [
    'Download the APK from GitHub Releases. Open it and, if prompted, allow installation from that download source.',
    'Install and open siêu việt. Enable it in Android’s keyboard settings.',
    'Choose Select keyboard in the app and select siêu việt. Use the app’s practice editor to try it.'
  ], text: 'Android 10 or later. Review the release notes for supported devices and architectures.' },
  linux: { title: 'Linux · IBus / Fcitx 5', steps: [
    'Choose the Linux build matching your architecture and distribution. Install its package and dependencies using the release notes.',
    'Log in again or restart your input framework.',
    'Add siêu việt in GNOME input sources (IBus) or Fcitx 5 Configuration. Use one input framework per session; open sieuviet-settings to configure it.'
  ], text: 'Development builds have been exercised on Ubuntu 26.04, X11, ARM64 and x64. Other distributions and Wayland still need qualification.' },
  windows: { title: 'Windows · TSF input service', steps: [
    'Choose a release for your architecture, x64 or ARM64. Keep the extracted package at its final installation path.',
    'Follow the release’s registration instructions. The development package uses install.ps1 in matching-architecture PowerShell; registration needs administrator access.',
    'Select siêu việt with Win+Space. Open SieuvietSettings.exe for settings and practice.'
  ], text: 'Preview status: binaries cross-compile, but native Windows engine loading and system typing are not yet verified. Wait for a qualified release for everyday use.' }
};

// Provisional names until the first public builds arrive. Live release assets override these.
export const plannedBuilds: Record<Platform, string> = {
  macos: 'sieuviet-macos.zip', windows: 'sieuviet-windows.zip',
  linux: 'sieuviet-linux.tar.gz', ios: 'sieuviet-ios.ipa', android: 'sieuviet-android.apk'
};
