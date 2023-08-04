const main = document.getElementById("content");

const privacies = [
  {
    title: "Data Collection",
    description:
      "Page Pots does not collect any personal information, including personally identifiable information (PII). This means that you can use the app without providing any personal information.",
  },
  {
    title: "Non-Personal Information",
    description:
      "We may collect non-personal information such as device information, app usage data, and other similar information to improve the functionality and performance of the App. This information is collected in a way that does not personally identify you.",
  },
  {
    title: "Data Security",
    description:
      "Since Page Pots operates offline and does not collect any personal data, you can rest assured that your information is secure and protected. As the app does not transmit or store any data externally, there is no risk of unauthorized access, alteration, disclosure, or destruction of personal information.",
  },
  {
    title: "Third-Party Links",
    description:
      "The App may contain links to external websites or services that are not owned or controlled by Page Pots. We are not responsible for the privacy practices or content of these third-party websites or services. We encourage you to review the privacy policies of those third parties before interacting with them.",
  },
  {
    title: "Book Search Results",
    description:
      "Book search results are obtained from the Google Books API, subject to its terms and policies. Please review the privacy policies and terms of service of the Google Books API for more information.",
  },
  {
    title: "File Access Permissions",
    description:
      "Page Pots requires file access permissions to enable the Import/Export feature. These permissions allow you to manage your reading data by importing from and exporting to external sources. Rest assured that Page Pots only uses these permissions for their intended purpose within the app. We do not access, transmit, or store any files or documents without your explicit consent.",
  },
  {
    title: "Children's Privacy",
    description:
      "The App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you believe that we may have collected personal information from a child under 13, please contact us immediately, and we will take appropriate measures to remove the information.",
  },
  {
    title: "Changes to the Privacy Policy",
    description:
      "Page Pots reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy within the app. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information. Your continued use of the app after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions, concerns, or suggestions regarding this Privacy Policy or our privacy practices, please contact us at pagepots@gmail.com or by navigating into Settings > Contact within the app.",
  },
];

const generateContent = () => {
  for (let i = 0; i < privacies.length; i++) {
    const privacy = privacies[i];
    const title = document.createElement("p");
    const b = document.createElement("b");

    const section = document.createElement("section");
    const description = document.createElement("p");

    b.append(privacy.title); //bold the title
    title.appendChild(b); //title
    title.classList.add("title");
    description.append(privacy.description); // description
    description.style.fontSize = "16px";

    section.append(title);
    section.append(description);
    main.append(section);
  }
};

const toggleDarkMode = () => {
  const body = document.body;
  const params = new URLSearchParams(document.location.search);
  const dark = JSON.parse(params.get("dark"));

  if (dark) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

generateContent();
toggleDarkMode();
