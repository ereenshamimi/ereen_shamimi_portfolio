// ===== PORTFOLIO SCRIPT =====

document.addEventListener("DOMContentLoaded", function () {

  // ===== EXPLORE BUTTON - SCROLL TO ABOUT ME =====
  const ctaButton = document.querySelector(".cta-button");
  const aboutSection = document.querySelector(".section-01");

  if (ctaButton && aboutSection) {
    ctaButton.addEventListener("click", function () {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // ===== PDF LINKS - OPEN NORMALLY IN NEW TAB =====
  // This fixes the "Document Not Found" problem
  const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');

  pdfLinks.forEach(function (link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });

  // ===== VIDEO BUTTONS =====
  const videoButtons = document.querySelectorAll(".portfolio-button.large");

  // First large button = Illustrative Video
  if (videoButtons[0]) {
    videoButtons[0].addEventListener("click", function () {
      openVideoModal(
        "Illustrative Video",
        "videos/S1_illustrative_video_Ereen Shamimi Samrih.mp4"
      );
    });
  }

  // Second large button = Reflection Video
  if (videoButtons[1]) {
    videoButtons[1].addEventListener("click", function () {
      openVideoModal(
        "Reflection Journal",
        "videos/S1_reflection_video_Ereen Shamimi Samrih.mp4"
      );
    });
  }

  console.log("✨ Portfolio script loaded successfully!");
});


// ===== VIDEO MODAL FUNCTION =====

function openVideoModal(title, videoPath) {
  const modal = document.createElement("div");
  modal.className = "video-modal";

  modal.style.cssText = `
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 20px;
  `;

  const content = document.createElement("div");
  content.style.cssText = `
    background: white;
    padding: 25px;
    border-radius: 22px;
    max-width: 800px;
    width: 100%;
    text-align: center;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.35);
  `;

  content.innerHTML = `
    <h2 style="margin-bottom: 20px; color: #7b1b47;">${title}</h2>

    <video controls style="
      width: 100%;
      max-height: 450px;
      border-radius: 15px;
      background: #000;
    ">
      <source src="${videoPath}" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <p style="margin-top: 15px; color: #777; font-size: 14px;">
      If the video does not appear, make sure the MP4 file is inside the correct <strong>videos</strong> folder.
    </p>

    <button class="closeModal" style="
      margin-top: 20px;
      padding: 12px 35px;
      background: linear-gradient(135deg, #7b1b47, #d63384);
      color: white;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
    ">Close</button>
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  const closeButton = content.querySelector(".closeModal");

  closeButton.addEventListener("click", function () {
    modal.remove();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
}