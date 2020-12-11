import React from "react";
import HeaderBlogHome from "../../componets/blog/header/header_blog_home";
import HistoryBlog from "../../componets/blog/hero/history_blog";
import Footer from "../../componets/multiple/footer";
import TagSection from "../../componets/posts/TagSection";

class HistoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      sections: [],
    }
  }

  componentDidMount() {
    document.body.classList.add('parent-active');
    document.body.classList.add('version-blog');

    fetch("http://localhost:8081/interval", {
            method: 'GET' // The type of HTTP request.
        })
        .then(res => res.json()) // Convert the response data to a JSON.
        .then(years => {
            if (!years) return;
            //get all imdb IDs in a list
            const intervals = years.map((item) => item.year);
            let fetches = [];
            let tagObjs = [];
            for(let i = 0; i < intervals.length; i++) {
                fetches.push(
                    fetch("http://localhost:8081/history/" + intervals[i], {
                        method: 'GET' // The type of HTTP request.
                    })
                    .then(res => res.json()) // Convert the response data to a JSON.
                    .then(data => {
                        tagObjs.push({
                          "year" : intervals[i],
                          "data" : data
                        });
                    })
                    .catch(err => console.log(err))	// Print the error if there is one.
                );
            }
            Promise.all(fetches).then(() => {
                console.log(tagObjs[0]);
                tagObjs.sort((a, b) => a.year - b.year);
                let sections = tagObjs.map(tagObj => 
                    <TagSection tagObj={tagObj} />
                );
                this.setState({
                    sections : sections
                });
            });
        })
        .catch(err => console.log(err))	// Print the error if there is one.
  }

  componentWillUnmount() {
    document.body.classList.remove('parent-active');
    document.body.classList.remove('version-blog');
  }

  render() {
    const { sections } = this.state;

    console.log(sections);
    return (
      <>
        
        <HeaderBlogHome headerId={`header7`}/>
        
        <HistoryBlog />
        
        {sections}
        
        <Footer></Footer>
        
      </>
    );
  }
}

export default HistoryPage;
