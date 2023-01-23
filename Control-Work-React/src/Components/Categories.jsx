import React, { Component } from 'react'

export default class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все жанры'
                },
                {
                    key: 'action',
                    name: 'Экншн'
                },
                {
                    key: 'fantastsic',
                    name: 'Фантастика'
                },
                {
                    key: 'comedy',
                    name: 'Комедия'
                },
                {
                    key: 'drama',
                    name: 'Драма'
                }
            ]   
        }
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key}>{el.name}</div>
        ))}
      </div>
    )
  }
}
