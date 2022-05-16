import React from 'react'
import './App.css';

class App extends React.Component{

  
  state={
    posts: [
      {
        'id':1,
        'title': 'titulo 1',
        'body': 'corpo 1'
      },
      {
        'id':2,
        'title': 'titulo 2',
        'body': 'corpo 2'
      },
      {
        'id':3,
        'title': 'titulo 3',
        'body': 'corpo 3'
      },
    ],
    name: 'alguem',
    counter:0
  }

  render(){
    //const name = this.state.name
    const { posts } = this.state //Atribuição via desestruturação
   
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
