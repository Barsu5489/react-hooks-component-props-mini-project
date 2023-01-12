import React from "react";

function ArticleList({posts}){
    return (
        <main>
            {posts.map(post=>{
             <Article/>
            })}
        </main>
    )
}
export default ArticleList