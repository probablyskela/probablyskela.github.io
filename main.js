let scrolling = false;
let prevPos = 0;

const unlock = async function () {
    await new Promise(r => setTimeout(r, 1000));
    scrolling = false;
}

function scrollTo(element) {
    scrolling = true;
    $('html').animate({
        scrollTop: element.offsetTop
    }, {duration: 400, easing: 'easeOutQuad', complete: unlock});
}

document.addEventListener('DOMContentLoaded', function () {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const sections = document.getElementsByClassName('section');

    const navigation = document.getElementById('navigation')
    let navigation_elements = [];
    for (let i = 0; i < sections.length; ++i) {
        let element = document.createElement("div");
        element.className = "navigation_element";
        navigation_elements.push(element);
        navigation.append(element);
        element.addEventListener('click', () => {
            scrollTo(sections[i]);
        });
    }

    navigation_elements[Math.floor(scrollY / vh)].classList.add('active');
    scrollTo(sections[0]);

    console.log(vw, vh);

    document.addEventListener('scroll', () => {
        for (const element of navigation_elements) {
            element.classList.remove('active');
        }
        navigation_elements[Math.floor((window.scrollY + (vh / 2)) / vh)].classList.add('active');
    });
});