// Create a function called Footer
// Import and Mount it on the App.jsx just below the paragraph tag
// The return should be an h6 tag with a Copyright and the current year...
// BONUS: let JS be able to create the year dynamically. - Googke
// Store that in a variable and display it in the h6 using curly boys

function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div>
            <h6 style={{textAlign: "center"}}>Copyright {currentYear}</h6>
        </div>
    );
}

export default Footer;