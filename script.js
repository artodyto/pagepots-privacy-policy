const main = document.getElementById("content");

const privacies = [
  {
    title: "Overview",
    description:
      "Page Pots is designed to store most app data locally on your device. Some features use internet services. We do not sell your personal information.",
  },
  {
    title: "Data We Process",
    description: `Page Pots may process:
      <br><br>
      <ul style="margin-left: 15px">
        <li><b>Local app data:</b> books, reading progress, notes, reminders, preferences, and settings stored on-device.</li>
        <li><b>Book/search requests:</b> requests to Google Books, Open Library, and related endpoints to fetch book metadata.</li>
        <li><b>Online feature requests:</b> requests to Page Pots backend for app version checks, announcements, polls, questions, and some lookup flows.</li>
      </ul>`,
  },
  {
    title: "Crash and Diagnostics",
    description:
      "Page Pots uses Sentry for crash and error monitoring in release channels. Diagnostic payloads may include technical context (for example device/app metadata, error traces, and related debug context) to help us fix issues.",
  },
  {
    title: "Google Drive Cloud Backup (Optional)",
    description:
      "If you use Cloud Backup, Page Pots uses Google Sign-In and Google Drive (app data folder scope) to upload, list, restore, download, or delete your backup files. This is optional and only used when you choose these features.",
  },
  {
    title: "In-App Purchases",
    description:
      "Page Pots uses RevenueCat and app store billing providers to manage in-app purchases and entitlements (for example purchased packs and restore purchases).",
  },
  {
    title: "Permissions",
    description: `Page Pots may request permissions for:
      <br><br>
      <ul style="margin-left: 15px">
        <li><b>Camera:</b> barcode scanning.</li>
        <li><b>Notifications:</b> reading reminders and scheduled local notifications.</li>
        <li><b>File/Document access:</b> import/export backups and save generated files.</li>
        <li><b>Media/Image picker:</b> selecting custom book cover images.</li>
        <li><b>Internet access:</b> APIs, cloud backup, diagnostics, and update checks.</li>
      </ul>`,
  },
  {
    title: "Third-Party Services and Links",
    description:
      "The app may use or link to third-party services (for example Google services, Open Library, New York Times APIs, Sentry, RevenueCat, and external links). Their own terms and privacy policies apply.",
  },
  {
    title: "Data Security",
    description:
      "We apply reasonable safeguards, but no method of storage or transmission is completely secure. Third-party services handle data under their own security practices.",
  },
  {
    title: "Children's Privacy",
    description:
      "The App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe such information was provided, contact us and we will take appropriate action.",
  },
  {
    title: "Changes to this Privacy Policy",
    description:
      "We may update this Privacy Policy from time to time. Changes are effective when posted with an updated date.",
  },
  {
    title: "Contact Us",
    description:
      "If you have questions or concerns about this Privacy Policy, contact us at pagepots@gmail.com or through Settings > Contact in the app.",
  },
];

const generateContent = () => {
  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    const title = document.createElement("p");
    const b = document.createElement("b");

    const section = document.createElement("section");
    const description = document.createElement("div");

    title.append(privacy.title); //title
    title.classList.add("title");

    description.innerHTML += privacy.description;
    // description.append(privacy.description); // description
    description.classList.add("description");

    section.append(title);
    section.append(description);
    main.append(section);
  }
};

const toggleDarkMode = () => {
  const body = document.body;
  const params = new URLSearchParams(document.location.search);
  const dark = params.get("dark") === "true";

  if (dark) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

generateContent();
toggleDarkMode();
