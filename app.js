const slides = document.querySelectorAll(".slider")
let CONTAINER = null;
let active_slide = 0;
let img_src = null;
function clickOnImage() {
    for (let item of slides) {
        item.addEventListener("click", (e) => {
            const el = e.target;
            createSlider(el)
        })
    }
}
function createSlider(el) {
    let url;
    if (CONTAINER == null) {
        img_src = null
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].dataset.photo == el.dataset.photo) {
                active_slide = i;
                img_src = slides[i].dataset.photo
            }
        }
        console.log(active_slide, img_src);
        //Create main container
        CONTAINER = document.createElement("div")
        CONTAINER.setAttribute("class", "container")

        //Create main gallery div
        const gallery = document.createElement("div")
        gallery.setAttribute("class", "gallery")
        url = `url('${img_src}')`
        gallery.style.backgroundImage = url


        //Create arrow buttons left and right and add functions to them
        const arrow_left = document.createElement("button")
        arrow_left.classList.add("arrow")
        arrow_left.classList.add("arrow-left")
        arrow_left.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
        const arrow_right = document.createElement("button")
        arrow_right.classList.add("arrow")
        arrow_right.classList.add("arrow-right")
        arrow_right.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
        // arrow_left.addEventListener("click", clicLeftArrow(url, gallery, CONTAINER))
        arrow_left.onclick = () => {
            clicLeftArrow(url, gallery, CONTAINER)
        }
        arrow_right.onclick = () => {
            clicRightArrow(url, gallery, CONTAINER)
        }
        //Create close button
        const close_btn = document.createElement("button")
        close_btn.setAttribute("class", "close-btn")
        close_btn.innerHTML = '&times;'
        close_btn.onclick = removeSlider

        //Add all items to main container
        gallery.appendChild(arrow_left)
        gallery.appendChild(arrow_right)
        CONTAINER.appendChild(close_btn)
        CONTAINER.appendChild(gallery)
        document.body.append(CONTAINER)
        containerBg(url)

    }
}
clickOnImage()

function removeSlider() {
    CONTAINER.remove()
    CONTAINER = null;
}

function containerBg(url) {
    CONTAINER.style.backgroundImage = url
}
function currentSlider(gallery, container, url) {
    gallery.style.backgroundImage = url
    container.style.backgroundImage = url
}
function clicLeftArrow(url, gallery, container) {
    console.log(url);
    active_slide--
    if (active_slide < 0) {
        active_slide = slides.length - 1
    }
    url = `url('${slides[active_slide].dataset.photo}')`
    console.log(url);
    containerBg(url)
    currentSlider(gallery, container, url)

}

function clicRightArrow(url, gallery, container) {
    console.log(url);
    active_slide++
    if (active_slide > slides.length - 1) {
        active_slide = 0
    }
    url = `url('${slides[active_slide].dataset.photo}')`
    console.log(url);
    containerBg(url)
    currentSlider(gallery, container, url)

}