import React from "react";
import PortfolioGamePost from "./PortfolioGamePost";
import Button from 'react-bootstrap/Button';
import Text from "react-text-typing";

export default class TagSection extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tagObjs : [],
            posts : [],
            buttons : {},
            favoriteList: []
        }
        this.showPosts = this.showPosts.bind(this);
    }

    showPosts(tag, year) {
        let buttons = this.state.buttons;
        let value = !buttons[tag];
        for(let i in buttons) {
            buttons[i] = false;
        }
        buttons[tag] = value;
        if(value) {
            fetch(`http://localhost:8081/history/${year}/${tag}`, {
                method: 'GET' // The type of HTTP request.
            }).then(res => res.json())
            .then(postsList => {
                if(!postsList) return;
                const posts = postsList.map(postObj => (
                    <PortfolioGamePost postObj={postObj} like={this.state.favoriteList.includes(postObj.game_id)}/>
                ));

                this.setState({
                    posts: posts
                });

            });
        }
        else {
            this.setState({
                posts: []
            });
        }
        this.setState({
            buttons : buttons
        });
        
    }

    componentDidMount() {

        const user = localStorage.getItem('email');
        if(user) {
            fetch("http://localhost:8081/favorite/" + user, {
                method: 'GET' // The type of HTTP request.
            }).then(res => res.json())
            .then(postsList => {
            if(!postsList) return;
            const posts = postsList.map(postObj => (
                postObj.game_id
            ));

            this.setState({
                favoriteList: posts
            });

        });
        }

        const tagObjs = this.props.tagObj.data;
        const year = this.props.tagObj.year;
        const order = ['primary', 'secondary', 'tertiery'];
        let buttons = {};
        for(let tag of tagObjs) {
            let name = tag.tag_name;
            buttons[name] = false;
        }
        const tags = tagObjs.map((tag, i) =>
            <>
                <Button variant={order[i]} size="lg" active onClick={() => this.showPosts(tag.tag_name, year)}>
                    {tag.tag_name}
                </Button>{' '}
            </>  
        );
        this.setState({
            tagObjs : tags
        });
    }


    render() {
        const year = this.props.tagObj.year;
        let text= year - 4 + '-' + year;
        return(
            <>
                <section className="blog-post border-bottom" style={{marginTop : "4em", marginBottom : "1em"}}>
                    <div style={{marginLeft:'27ex'}}>
                        <div>
                            <Text text={text} showBlink={true} component="div" />
                        </div>
                        {this.state.tagObjs}
                    </div>
                    <div className="container">
                        <div className="row">
                            {this.state.posts}            
                        </div>
                    </div>
                </section>
            </>
        );
    }
}