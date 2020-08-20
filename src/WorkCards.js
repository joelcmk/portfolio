import React, { Component } from 'react';
import './WorkCards.css';
import Card from './Card';

class WorkCard extends Component {
  render() {
    const data = [
      {
        id: 1,
        name: 'Pokemon jQuerty',
        description: 'Front-end web app created using jQuery, Bootstrap, and Pokemon REST API. It shows a list of Pokemons. when the user clicks on one, a modal with information of the Pokemon comes up. It includes the name, height, and a picture of the Pokemon.',
        image: require('./img/pokemon_1.png'),
        code: 'https://github.com/joelcmk/Pokemon-jQuery',
        aplication: 'https://joelcmk.github.io/Pokemon-jQuery/',
      },
      {
        id: 2,
        name: 'myFlix App',
        description: 'Fullstack app created using React, Node.js, and JWT. The REST API was built from scratch and hosted on Heroku.Key features: Create a profile, browse movies, add to favorites, and delete profiles. For every movie, it gives a description, image, and director\'s name. Besides that, it also gives information about every genre and director.',
        image: require('./img/myflix.png'),
        code: 'https://github.com/joelcmk/movie_api',
        aplication: 'https://my-flix-app0.herokuapp.com/client/',
      },
      {
        id: 3,
        name: 'To-do List',
        description: 'App created using Vue.js and Vue material. The app allows the users to add new items to the list, also it lets users to remove or mark as completed the items. It was my first app using Vue.js and it’s something that I’ll like to keep learning and improving.',
        image: require('./img/list.png'),
        code: 'https://github.com/joelcmk/to-do-list',
        aplication: '',
      },
      {
        id: 4,
        name: 'Meetup app',
        description: 'App created using AWS Lambda, React, and the Meetup API. The app lets users find events happening in their cities. Each event has a description, date, and time, and a graph indicating how many people are assisting. A unique feature of the app is that it has a graph indicating how many events are happening on a given day.',
        image: require('./img/meetup.png'),
        code: 'https://github.com/joelcmk/meetup',
        aplication: 'https://joelcmk.github.io/meetup',
      },
      {
        id: 5,
        name: 'ChatApp',
        description: 'React Native app created using React-Gifted-Chat, Expo, and Google firebase. It’s a real-time chat app that saves the messages on a database. Key features: Send and receive text messages, images, and current location. It also allows the user to change the color and the name of the user.',
        image: require('./img/chat_app.png'),
        code: 'https://github.com/joelcmk/chat-app',
        aplication: 'https://github.com/joelcmk/chat-app',
      },
    ]

    return (
      <section className="home_work">
        <div className="grid">
          {data.map((card) => {
            return <Card card={card} key={card.id} image={card.image} />
          })}
        </div>
      </section>
    )
  }
}

export default WorkCard;