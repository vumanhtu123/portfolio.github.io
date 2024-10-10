// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({
  //  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// typed js
const typed = new Typed(".multiple-text", {
  strings: [
    "developer Mobile",
    "nhân viên Bưu Điện Việt Nam",
    "người con xứ Tuyên",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1500,
  loop: true,
});

function openTelegram() {
  window.location.href = "tg://resolve?domain=@tuvmvnpd";
}

// Lấy form theo ID
const form = document.getElementById("contactForm");

// Thêm sự kiện submit cho form
form.addEventListener("submit", function (event) {
  // Ngăn chặn form gửi đi mặc định
  event.preventDefault();

  // Lấy giá trị của các trường
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Kiểm tra các trường đã điền đủ chưa
  if (!fullname || !email || !phone || !subject || !message) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  // Thực hiện hành động, ví dụ: in dữ liệu ra console
  console.log({
    fullname: fullname,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  });

  // Ví dụ: Gửi dữ liệu đến một API (chưa thực hiện API cụ thể)
  fetch("https://66c1bc3ef83fffcb587a1066.mockapi.io/v1/users/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then(
      (data) => console.log(data),
      alert(
        "Gửi thông tin thành công, nếu chờ quá lâu hãy liên hệ trực tiếp qua số điện thoại hoặc email. Xin cảm ơn!"
      )
    )
    .catch((error) => console.error("Error:", error));

  // Sau khi xử lý xong, có thể reset form
  form.reset();
});
