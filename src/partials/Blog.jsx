import React from 'react';
import BlogCollection from '../database/blog/blogCollection.json'


function Blog({url}) {
  const getBlogContent = (url) =>{
    const blogPost = BlogCollection.find(post => post.url === url);

    if (blogPost) {
        return {
            title: blogPost.title,
            id: blogPost.id,
            url: blogPost.url,
            author: blogPost.author,
            email: blogPost.email,
            place: blogPost.place,
            date: blogPost.date,
            blocks: blogPost.blocks
        };
    } else {
        // Return null or handle the case where the blog post is not found
        return null;
    }
  } ;

  const blogContent = getBlogContent(url)

  function renderBlock(block) {
    if (block.type === 'text') {
      return (
        <p key={block.title}>
          <h3>{block.title}</h3>
          {block.content}
        </p>
      );
    } else if (block.type === 'image') {
      return (
        <p key={block.title}>
          <h3>{block.title}</h3>
          <div className="image">
            <img draggable="false" className="tilt" src={block.url} alt="" />
          </div>
          <p className="qoute">{block.caption}</p>
        </p>
      );
    } else {
      return null;
    }
  }
  
  function renderBlocks(blocks) {
    return blocks.map(block => renderBlock(block));
  }


      return (
        <section class="project" id="project">
        <br/>
        <br/>
        <h2 class="heading"><span><i class="fas fa-newspaper"></i> {blogContent.title} </span></h2>
        <div class="grid grid-cols-3 gap-12 ">
            <div class="row">
              <div class="bar">
                <div class="content p-10" >
                  <i class="fas fa-user"></i> <span class="tag"> By  {blogContent.author} </span>
                    
                    {renderBlocks(blogContent.blocks)}
                    

                    <div class="box-container">
                        <div class="box">
                            <p><span> email : </span> {blogContent.email} </p>
                            <p><span> place : </span> {blogContent.place} </p>
                        </div>
                    </div>

                    
                </div>
              </div>
            </div>
        </div>
    </section>

    );
  };

export default Blog;
