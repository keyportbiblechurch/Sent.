# Sent

**An evangelism ministry of Keyport Bible Church, Keyport, WA.**

Sent lets anyone share a short, mobile-friendly gospel tract by text. Recipients open the link in their phone's browser. They don't need an app or an account.

Every tract is written and approved by the church. People using Sent choose a tract and can add a personal touch, but they can't change a tract's wording:
- their first name ("A message from Sam")
- a short note, shown separately as "A note from Sam"
- an optional phone number and/or email for "I prayed this," "Text me," and "Email me" buttons
- colors (9 palettes), a style (12, including Letter, Stories, Illuminated, and Starlight), and an animation

Each tract ends with next steps: Read the Bible (the Gospel of John, BSB), Find a church near you, and Visit Keyport Bible Church.

## Files

| File | What it is |
|---|---|
| `index.html` | The app |
| `library.js` | Church settings and the approved tract library |
| `manifest.webmanifest`, `icon-*.png` | Home-screen app name and icons |
| `sw.js` | A tiny helper that lets Android phones offer one-tap install. It caches and tracks nothing. |
| `og-image.png` | The preview card shown when a link is texted or posted |
| `fonts/` | Self-hosted fonts |

## Publishing (GitHub Pages)

Upload every file to the top level of the repo, with `fonts/` kept as a folder. In **Settings → Pages**, choose **Deploy from a branch**, then `main`, then `/ (root)`. Check the version shown at the bottom of the builder to confirm an update is live.

## Link previews

When a Sent link is texted or posted, iMessage, Facebook and other apps show `og-image.png` (the Sent wordmark and "a message for you") with the title "A message for you." The preview deliberately doesn't name the church, so it reads like a personal message; the church is credited inside the tract. The preview tags in `index.html` use the full site address (`https://keyportbiblechurch.github.io/Sent./`). **If the repo is renamed or moved to a custom domain, update that address in the `og:url` and `og:image` tags.** Every link shows the same preview, by design, so the tract itself stays a surprise and nothing personal appears in the preview.

## Add to home screen

The "Get the app" button at the top of the builder (hidden once Sent is already installed) opens short, phone-specific steps for adding Sent to the home screen: Safari on iPhone and iPad, including the newer "More" (•••) menu, and Chrome on Android. On Android, the "Add to home screen" button installs Sent in one tap when Chrome allows it, and otherwise jumps to the menu steps. iPhones don't let websites install themselves, so iPhone users see Safari's three-step instructions. If Sent was opened inside another app's browser (like Facebook), it explains how to open it in Safari or Chrome first.

## Welcome tour

The first time someone opens the builder, a five-card tour explains how Sent works. The "?" button at the top and the "How Sent works" link at the bottom reopen it. Its text is in `index.html` (search for `Welcome to Sent`).

## Follow-up guide

The Send tab has a "When they respond" guide for members, with sample replies to copy. Its text is in `index.html` (search for `When someone responds`).

## Managing the tract library

All tracts live in `library.js`. To add one, copy an existing entry, change the text, give it a new `id`, choose a `topic` (The Gospel, Hard times, Big questions, Seasons), optionally add `months` (like `[11, 12]`) to mark it "In season", and commit. The `id` becomes the tract's short link, like `…/Sent./#grief`. Don't rename or delete an `id` once its link has been shared.

Scripture is quoted from the Berean Standard Bible (BSB), public domain. The current library's verses were taken directly from the official BSB text published by BSB Publishing.

Church details and next-step links (church name, website, Bible link, church finder) are in `window.SENT_SETTINGS` at the top of `library.js`.

## Links

A link looks like `…/#grief.nx~Sam;1Qm9yZXN0…*A_short_note`: the tract id, then the optional look letters, first name, the sender's phone and/or email (scrambled), and note. Older links that show the phone (`!3605550100`) and email (`$…`) in plain text still work. Links only open tracts from the approved library. Any link that asks for a tract that isn't in the library, including custom tracts made with earlier versions of Sent, shows "This tract isn't available."

## Privacy

- No accounts, sign-ins, analytics, tracking, or cookies.
- No outside services. The fonts, icons, and QR code generator are all part of the site.
- The "Find a church near you" button opens a map search on the reader's own phone. Sent never sees their location.
- A tract's personal details (name, note, phone, email) live only in its link, after the `#`. Browsers never send that part of a link to the server.
- If a sender adds a phone number or email, it's scrambled in the link so it isn't visible at a glance or easy for web scrapers to collect. This isn't encryption: anyone the link reaches can still use the text and email buttons.
- The sender's details save in their own browser only.

## Credits

- Scripture: Berean Standard Bible (BSB), public domain.
- Fonts: Newsreader, Inter, and Caveat (Letter style signature), SIL Open Font License (`fonts/OFL-LICENSE.txt`).
- QR codes: qrcode-generator by Kazuhiko Arase, MIT License.
