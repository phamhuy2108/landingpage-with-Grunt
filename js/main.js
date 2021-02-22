$(window).on('load', function () {

    // lang option
    let btnclick = document.querySelector('.lang__current');
    let langselect = document.querySelector('.lang');
    let a = document.querySelectorAll('.lang__option a');

    btnclick.addEventListener('click', function (e) {
        e.stopPropagation();
        langselect.classList.toggle('clicked');
    })
    document.addEventListener('click', function () {
        langselect.classList.remove('clicked');
    })

    a.forEach((item) => {
        item.addEventListener('click', function (e) {

            let lang = this.textContent;
            document.querySelector('.lang__current span').innerHTML = lang
            console.log(lang);
        })
    })



    //back-to-top
    document.querySelector('.backtotop').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollBy({
            top: -document.body.offsetHeight,
            behavior: "smooth"
        })
    })


    //menu scroll doi mau
    let slider = document.querySelector('.slider')
    let header = document.querySelector('header')
    window.addEventListener('scroll', function () {
        let scrollTop = document.querySelector('html').scrollTop;
        if (scrollTop > slider.offsetHeight - header.offsetHeight) {
            header.style.background = 'black'
        }
        else {
            header.style.background = 'transparent'
        }
    })

    //popup video
    let iframe = document.querySelector('#wrap-ifr')
    let popup = document.querySelectorAll('.imgvideo .playbtn')
    popup.forEach((item) => {
        item.addEventListener('click', function (e) {
            let videoSrc = this.getAttribute('data-video-src')
            iframe.src = 'https://www.youtube.com/embed/' + videoSrc;
            // document.querySelector('.popup').style.display = 'flex'
            document.querySelector('.popup').style.display = 'block'
        })
    })

    document.querySelector('.popup .close').addEventListener('click', function (e) {
        document.querySelector('.popup').style.display = 'none'
        iframe.src = '' //luu y cho nay
    })



    //slider
    // let sliderItem = document.querySelectorAll('.slider__image');
    // let sliderDot = document.querySelectorAll('.dotted li');
    // let sliderCurrent = 0;
    // let sliderNumber = document.querySelector('.slider .number h3')
    // document.querySelector('.pre').addEventListener('click', function () {
    //     if (sliderCurrent > 0) {
    //         sliderItem[sliderCurrent].classList.remove('active')
    //         sliderItem[sliderCurrent - 1].classList.add('active')
    //         //dot
    //         sliderDot[sliderCurrent].classList.remove('is-selected')
    //         sliderDot[sliderCurrent - 1].classList.add('is-selected')
    //         sliderCurrent--;
    //     }
    //     sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart(2, '0');
    // })
    // document.querySelector('.next').addEventListener('click', function () {

    //     if (sliderCurrent < sliderItem.length - 1) {
    //         sliderItem[sliderCurrent].classList.remove('active')
    //         sliderItem[sliderCurrent + 1].classList.add('active')
    //         //dot
    //         sliderDot[sliderCurrent].classList.remove('is-selected')
    //         sliderDot[sliderCurrent + 1].classList.add('is-selected')
    //         sliderCurrent++;
    //     }
    //     sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart(2, '0');
    // })

    // sliderDot.forEach((item, index) => {
    //     item.addEventListener('click', function (e) {
    //         // console.log('dot')
    //         sliderItem[sliderCurrent].classList.remove('active')
    //         sliderDot[sliderCurrent].classList.remove('is-selected')
    //         sliderCurrent = index;
    //         sliderItem[sliderCurrent].classList.add('active')
    //         sliderDot[sliderCurrent].classList.add('is-selected')
    //         sliderNumber.innerHTML = (sliderCurrent + 1).toString().padStart(2, '0');
    //     }
    //     )
    // })



    let $carosuel = $('.slider__image-wrap').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        on: {
            ready: function () {
                let dotted = $('.flickity-page-dots');
                paging = $('.slider__bottom-paging .dotted');
                dotted.appendTo(paging);
            },
            change: function (index) {
                let number = $('.slider__bottom-paging .number h3');
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0))
            }
        }
    })

    $('.btnctr.pre').on('click', function () {
        $carosuel.flickity('previous')
    })
    $('.btnctr.next').on('click', function () {
        $carosuel.flickity('next')
    })




    let headerMenu = document.querySelector('.btnmenu')
    let navMenu = document.querySelector('.nav')
    let navClose = document.querySelector('.close-nav')
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('active')
    })
    headerMenu.addEventListener('click', function () {
        navMenu.classList.add('active')
    })


    let toTop = document.querySelector('.totop')
    let heightSlider = document.querySelector('.slider').clientHeight;
    let heightDrag = document.querySelector('.drag').clientHeight;
    let heightBody = document.querySelector('body').clientHeight;


    window.addEventListener('scroll', function () {
        let scrollTop = document.querySelector('html').scrollTop

        // console.log(heightSlider)
        // console.log(scrollTop);
        if (scrollTop > 1086 && scrollTop < (heightBody - heightDrag - 200)) {
            toTop.classList.add('display')
        }
        else {
            toTop.classList.remove('display')
        }
    })
    toTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollBy({
            top: -document.body.offsetHeight,
            behavior: "smooth"
        })
    })


    let activedMenuClick = document.querySelectorAll('.menu li a');
    activedMenuClick.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            activedMenuClick.forEach((item) => {
                item.classList.remove('actived')
            }
            )
            let idNameSection = this.getAttribute('data-id')
            // console.log(idNameSection)
            let heightSection = document.querySelector('#' + idNameSection).offsetTop
            // console.log(heightSection)
            window.scrollTo({
                top: heightSection,
                behavior: "smooth"
            })
            item.classList.add('actived')
        })
    })


    let aMenu = document.querySelectorAll('.menu li a');
    //Bước 1: Khởi tạo 2 mảng trống để lưu 
    let arrId = [];
    let arrSectionTopHeight = [];
    //Bước 2: 
    //Chạy vòng lặp forEach để lấy ra Attribute và chiều cao của border trên của Section đưa vào mảng
    aMenu.forEach((item) => {
        let idNameSection = item.getAttribute('data-id');
        let heightSection = document.querySelector('#' + idNameSection).offsetTop;
        arrId.push(idNameSection);
        arrSectionTopHeight.push(heightSection);
    })
    //Bước 3:
    //Bắt sự kiện scroll
    window.addEventListener('scroll', function (e) {
        //Lấy ra vị trí khi mình scroll đến
        let scrollPos = document.querySelector('html').scrollTop;
        //Để tránh phải lặp lại trong việc xét điều kiện, tại đây thay bằng vòng lặp
        arrSectionTopHeight.forEach((item, index) => {
            if (scrollPos >= item) {
                let tenID = arrId[index]; //Lấy ra ID của section
                activedMenuClick.forEach((item) => {
                    item.classList.remove('actived');
                }
                )
                //Select thẻ a theo attribute và add vào class actived
                document.querySelector(`.menu li a[data-id=${tenID}]`).classList.add('actived');
            }
        })
    })




    // let aMenu = document.querySelectorAll('.menu li a');
    // window.addEventListener('scroll', function (e) {
    //     let scrollPos = document.querySelector('html').scrollTop;
    //     aMenu.forEach((item) => {
    //         let idNameSection = item.getAttribute('data-id');
    //         let heightSection = document.querySelector('#' + idNameSection).offsetTop;
    //         if (scrollPos >= heightSection) {
    //             activedMenuClick.forEach((item) => {
    //                 item.classList.remove('actived');
    //             }
    //             )
    //             document.querySelector(`.menu li a[data-id=${idNameSection}]`).classList.add('actived');
    //         }
    //     })
    // })










    // let clickCurrent = 0;
    // activedMenuClick.forEach((item, index) => {
    //     item.addEventListener('click', function () {
    //         activedMenuClick[clickCurrent].classList.remove('actived')
    //         clickCurrent = index
    //         activedMenuClick[clickCurrent].classList.add('actived')
    //     })
    // })



    //GALLERY
    var initPhotoSwipeFromDOM = function (gallerySelector) {
        var parseThumbnailElements = function (el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;
            for (var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
                if (figureEl.nodeType !== 1) {
                    continue;
                }
                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
                if (figureEl.children.length > 1) {
                    item.title = figureEl.children[1].innerHTML;
                }
                if (linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }
                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }
            return items;
        };
        var closest = function closest(el, fn) {
            return el && (fn(el) ? el : closest(el.parentNode, fn));
        };
        var onThumbnailsClick = function (e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            var eTarget = e.target || e.srcElement;
            var clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;
            for (var i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }
                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }
            return false;
        };
        var photoswipeParseHash = function () {
            var hash = window.location.hash.substring(1),
                params = {};
            if (hash.length < 5) {
                return params;
            }
            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if (!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if (pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }
            if (params.gid) {
                params.gid = parseInt(params.gid, 10);
            }
            return params;
        };
        var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;
            items = parseThumbnailElements(galleryElement);
            options = {
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                getThumbBoundsFn: function (index) {
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                },
                showAnimationDuration: 0,
                hideAnimationDuration: 0
            };
            if (fromURL) {
                if (options.galleryPIDs) {
                    for (var j = 0; j < items.length; j++) {
                        if (items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }
            if (isNaN(options.index)) {
                return;
            }
            if (disableAnimation) {
                options.showAnimationDuration = 0;
            }
            gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        var galleryElements = document.querySelectorAll(gallerySelector);
        for (var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i + 1);
            galleryElements[i].onclick = onThumbnailsClick;
        }
        var hashData = photoswipeParseHash();
        if (hashData.pid && hashData.gid) {
            openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        }
    };
    $('.drag').flickity({
        cellAlign: 'left',
        lazyload: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true
    })
    initPhotoSwipeFromDOM('.gallery__grid')
})