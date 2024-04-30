import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ArticleCollection from '../database/article/articleCollection.json'
import { FaCopy } from 'react-icons/fa';


function Article({url}) {
  
  const getArticleContent = (url) =>{
    const articlePost = ArticleCollection.find(post => post.url === url);

    if (articlePost) {
        return {
            title: articlePost.title,
            id: articlePost.id,
            url: articlePost.url,
            author: articlePost.author,
            email: articlePost.email,
            place: articlePost.place,
            date: articlePost.date,
            blocks: articlePost.blocks
        };
    } else {
        // Return null or handle the case where the article post is not found
        return null;
    }
  } ;

  const articleContent = getArticleContent(url)

  function renderBlock(block) {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(block.content);  // Copy the code content to the clipboard
    };
    
    if (block.type === 'text') {
      return (
        <p key={block.title}>
          <h3>{block.title}</h3>
          {block.content}
        </p>
      );
    } else if (block.type === 'image') {
      return (
        <p key={block.title}  className="mb-4">
          <h3>{block.title}</h3>
          <div className="image w-full">
            <img draggable="false" className="tilt" src={block.url} alt="" />
          </div>
          <p className="qoute">{block.caption}</p>
        </p>
      );
    } else if (block.type === 'code') {
      return (
          <div key={block.title} className="mb-4">  
            <h3 className="text-rg font-semibold">{block.title}</h3>
            
            <div className="cell" >  
              <SyntaxHighlighter language={block.language} style={prism}>
                {block.content}
              </SyntaxHighlighter>
            </div>
            <div className="flex justify-right items-center mb-2">
                <button 
                  onClick={copyToClipboard}  // Handler to copy the text to the clipboard
                  className="text-sm text-gray-600 hover:text-black"  // Tailwind styling for the button
                  title="Copy to Clipboard"
                >
                <FaCopy />  {/* Copy icon */}
                </button> 
            </div>
          </div>
      );
    }  else {
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
        <h2 class="heading"><span><i class="fas fa-newspaper"></i> {articleContent.title} </span></h2>
        <div class="grid grid-cols-3 gap-12 ">
            <div class="row">
              <div class="bar">
                <div class="content p-10" >
                  <i class="fas fa-user"></i> <span class="tag"> By  {articleContent.author} </span>
                    
                    {renderBlocks(articleContent.blocks)}
                    

                    <div class="box-container">
                        <div class="box">
                            <p><span> Email : </span> {articleContent.email} </p>
                            <p><span> Place : </span> {articleContent.place} </p>
                        </div>
                    </div>

                    
                </div>
              </div>
            </div>
        </div>
    </section>

    );
  };

export default Article;
