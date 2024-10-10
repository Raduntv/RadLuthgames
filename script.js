document.addEventListener('DOMContentLoaded', () => {
    main()

    addEventListener("resize", () => setTimeout(() => handleResize(), 100))
})

function main() {
    getAdPreference()

}



function getAdPreference() {
    let localStorageAD = localStorage.getItem('show_ad')

    if (window.outerWidth > 554) {

        if (localStorageAD === 'true') {
            showAd()
        } else if (localStorageAD === null) {
            localStorage.setItem('show_ad', 'true')
            showAd()
        }
    }
}

function showAd() {
    document.getElementById('ad').style.display = 'block'
}

function hideAd() {
    document.getElementById('ad').style.display = 'none'
}

function closeAd() {
    localStorage.setItem('show_ad', 'false')
    hideAd()
}


function handleResize() {
    if (window.outerWidth > 554) { 
        getAdPreference() 
    } else {
        hideAd()
    } 
}

function buttonScoprici() {
    window.scrollTo(0, 565)
}

function buttonProgetti() {
    window.scrollTo(0, 1800)
}

// window.addEventListener("scroll", function(event) {
//     console.log('a', this.scrollY)
// }, false);