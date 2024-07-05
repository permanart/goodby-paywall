// Get The URL
const site = window.location.hostname

// alert("Injector - The JavaScript has been injected to: " + site + " 🤖")

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

// tia id
if (site.includes("id.techinasia.com")) {
    Add_Custom_Style(`
    .paywall-content {
        height: 100% !important;
        max-height: 100% !important;
        pointer-events: auto !important;
        user-select: text !important;
        -webkit-mask-image: none !important;
        mask-image: none !important;
        -webkit-mask-image: none !important;
    }

    .paywall {
        display: none !important;
    }
    `)
}

//kompas.id

if (site.includes("www.kompas.id")) {
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
    .paywall.hidden {
        display: contents !important;    
    }

    .transparent-linear {
        background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255 255 255 / 0%)) !important;
    }
    `)
}