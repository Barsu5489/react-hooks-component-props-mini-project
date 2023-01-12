import React from "react";

function About ({image = 'https://via.placeholder.com/215', about}){
    console.log(image)
    console.log(about)
    return(
        <aside>
            <img src={image} alt="blog logo" />
            <p>About text goes here</p>
        </aside>
    )
}
export default About;