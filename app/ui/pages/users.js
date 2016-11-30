import React from 'react'
//import posts from '../data/posts'
import users from '../data/users'
import { style } from 'next/css'
import Link from 'next/link'
import * as  _ from 'lodash'
import Head from 'next/head';

import 'isomorphic-fetch'
//var request = require('request');


export default class extends React.Component {

  static async getInitialProps () {
    const res = await fetch('http://localhost:8000/getUsers'); 
    const users = await res.json();
    //console.log(users);   
    return { users: users }
  }

  // static getInitialProps () {
  //   return { users: users }
  // }

  // getData = () => {
  //     var main = this;
  //     request.get('http://localhost:8000/getUsers', function(err, httpResponse, body){
  //       console.log(body);
  //         // main.setState({
  //         //     users: JSON.parse(body)
  //         // }); 
  //     });
  // }

  // componentDidMount() {
  //     var that = this;
  //     this.getData();
  // }
  

  // componentDidMount() {
  //   db.defaults({ posts: [] })
  //     .value()

  //   // Data is automatically saved to localStorage
  //   db.get('posts')
  //     .push({ title: 'lowdb' })
  //     .value()  
  // }

  render () {
    console.log(this.props.users);
    return (
      <div>
      <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <title>B R A G G E R S - 2 0 1 6</title>
          <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
          <link rel="stylesheet" href="../static/css/normalize.css"/>
          <link rel="stylesheet" href="../static/css/flexboxgrid.min.css"/>
          <link rel="stylesheet" href="../static/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="../static/css/plugin.css"/>
      </Head>      
      <div className={style(styles.header)}>
        <h3> AXWAY ACADEMY SOCIAL NETWORK </h3>
      </div>
      <table className={style(styles.table)}>
        <thead>
          <tr>
              <th className={style(styles.th)}>ID</th>
              <th className={style(styles.th)}>Real Name</th>
              <th className={style(styles.th)}>Nickname</th>              
          </tr>
        </thead>
        <tbody>
          {
              this.props.users.map( (user, i) => (
                  <tr key={i}>
                      <td className={style(styles.td)}>
                        <Link href={`/account?user=${user}`}>{ user.slackId }</Link>
                      </td>
                      <td className={style(styles.td)}>{ user.firstName + ' ' + user.lastName }</td>
                      <td className={style(styles.td)}>{ user.slackUsername }</td>
                  </tr>
              ))
          }
       </tbody>
      </table>
      </div>
    )
  }
}

const styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px',
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  table: {
    fontFamily: 'Arial',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
}