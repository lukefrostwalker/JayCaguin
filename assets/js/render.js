import { works, skills } from './data.js';
const currentUrl = window.location.href;

export function renderNav() {
    const navi = document.getElementById('navi');

    let x = '';
    let [a, b, c, d] = ['', '', '', ''];

    if (currentUrl.includes('works')) [x, b] = ['| <em>works</em>', 'active'];
    else if (currentUrl.includes('about'))
        [x, c] = ['| <em>about</em>', 'active'];
    else if (currentUrl.includes('contact') || currentUrl.includes('thank-you'))
        [x, d] = ['| <em>contact</em>', 'active'];
    else a = 'active';
    const nav = `
<nav class="navbar navbar-expand-lg fixed-top" id="navIndex">
    <div class="container">
        <a class="navbar-brand" href="index.html" id="brandIndex">JC ${x}</a>
        <button
            class="navbar-toggler"
            id="navbarTogglerIndex"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
        >
            <div class="offcanvas-header">
                <h5
                    class="offcanvas-title colored"
                    id="offcanvasNavbarLabel"
                >
                    JAY CAGUIN
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav ms-auto">
                    <li class="link_animation nav-item">
                        <a
                            class="nav-link ${a}"
                            href="index.html"
                            id="naviHome"
                            >Home</a
                        >
                    </li>
                    <li class="link_animation nav-item">
                        <a 
                            class="nav-link ${b}" 
                            id="naviWorks" 
                            href="works.html"
                            >Works</a>
                    </li>
                    <li class="link_animation nav-item">
                        <a 
                            class="nav-link ${c}" 
                            href="about.html"
                            id="naviAbout"
                            >About Me</a
                        >
                    </li>
                    <li class="link_animation nav-item">
                        <a 
                            class="nav-link ${d}" 
                            href="contact.html"
                            id="naviContact"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
    `;

    navi.innerHTML = nav;
}

export function renderWorks() {
    document.getElementById('project_card_container').innerHTML += works
        .map(function (work) {
            return /* HTML */ `
                <div
                    class="project_card col-12 col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration="${work.duration}"
                >
                    <div id="box${work.id}" class="inner">
                        <span class="project_click">
                            <div
                                class="flex_this h-100 d-flex flex-column align-items-center justify-content-end w-100 m-0"
                            >
                                <h1 class="project_title">${work.name}</h1>
                                <div>
                                    <a href="${work.repo}" target="_blank"
                                        ><span
                                            class="project_link"
                                            id="project_link"
                                            >Github Repo</span
                                        ></a
                                    >
                                    <a href="${work.url}" target="_blank"
                                        ><span
                                            class="project_link"
                                            id="project_link"
                                            >Deployed App</span
                                        ></a
                                    >
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            `;
        })
        .join('');
}

export function renderSkills() {
    document.getElementById('skillsContainer').innerHTML += skills
        .map(function (skill) {
            return /* HTML */ ` <div
                class="skill_img logo"
                data-bs-toggle="tooltip"
                data-bs-title="${skill.title}"
                data-bs-custom-class="custom-tooltip"
            >
                <img src="${skill.src}" alt="${skill.title}" class="icon" />
            </div>`;
        })
        .join('');
}

export function renderFooter() {
    document.getElementById('footer').innerHTML = /* HTML */ ` <div
            class="card-group mt-5 container gap-1"
            id="cardGroupIndex"
        >
            <div class="card border-0 m-0">
                <div class="card-body p-0">
                    <p class="card-title accent">Contact information —</p>
                    <span class="card-text">
                        <p class="mb-2 card-text-sub">
                            <small
                                >Feel free to reach out to me any time.</small
                            >
                        </p>
                        <ul class="list-unstyled ps-2">
                            <li>
                                <a href="mailto:jay@jaycaguin.com"
                                    ><i class="fa-solid fa-envelope me-2"></i>
                                    jay@jaycaguin.com</a
                                >
                            </li>
                            <li>
                                <a href="tel:+639771550622"
                                    ><i class="fa-solid fa-phone me-2"></i>
                                    +63-977-155-0622</a
                                >
                            </li>
                        </ul>
                    </span>
                </div>
            </div>

            <div class="card border-0">
                <div class="card-body p-0">
                    <p class="card-title accent">Latest projects —</p>
                    <span class="card-text">
                        <ul class="list-unstyled ps-2">
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://urbanread.space/"
                                    target="_blank"
                                >
                                    UrbanRead(MERN)
                                </a>
                            </li>
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://lukefrostwalker.github.io/RockPaperScissorsLizardSpock/"
                                    target="_blank"
                                >
                                    Jajanken+
                                </a>
                            </li>
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://lukefrostwalker.github.io/Password-GeneratorV2/"
                                    target="_blank"
                                >
                                    Password Generator
                                </a>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>

            <div class="card border-0" id="hide">
                <div class="card-body p-0">
                    <p class="card-title accent">Follow me on —</p>
                    <span class="card-text">
                        <ul class="list-unstyled ps-2">
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://www.facebook.com/lukefrostwalkr"
                                    >Facebook</a
                                >
                            </li>
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://www.twitter.com/jaycaguin"
                                    >Twitter</a
                                >
                            </li>
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://github.com/lukefrostwalker"
                                    >Github</a
                                >
                            </li>
                            <li>
                                <a
                                    class="link_animation"
                                    href="https://www.linkedin.com/in/jaycaguin/"
                                    >LinkedIn</a
                                >
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
        <div class="footer-container container">
            <div>
                <img
                    src="assets/img/footer_img.png"
                    style="width: 40px"
                    alt="JC"
                />
            </div>
            <div class="footer-info">
                <span>Jay Caguin 2023 ● </span>
                <span>Pampanga, Philippines</span>
            </div>
        </div>`;
}
