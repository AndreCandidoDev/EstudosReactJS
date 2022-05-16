import React from 'react'
import './App.css';

class App extends React.Component{

  
  state={
    counter: 0,
    posts: [{
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
    }],
    name: 'alguem',
    counter:0
  }

  timeoutUpdate = 0

  //executa uma unica vez ao carregar o componente
  componentDidMount(){
    this.handleTimeout()
  }    

  componentDidUpdate(){
    this.handleTimeout()
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }
    
  handleTimeout = () => {
    const { posts, counter } = this.state
    posts[0].title = 'titulo mudado'
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter:counter+1 })
    }, 1000);
  }

  render(){
    //const name = this.state.name
    const { posts, counter } = this.state //Atribuição via desestruturação
   
    return (
      <div className="App">
        <h1>{counter}</h1>
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
