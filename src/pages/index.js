import * as React from "react"
import { graphql } from 'gatsby'
import get from 'lodash/get'

import {
  indexPage,
  monsterSection
} from "./indexPage.module.scss";
// markup
class IndexPage extends React.Component {
  render() {
    const monsters = get(this, 'props.data.allContentfulMonster.edges');

    const renderMonsters = () => {
      return monsters.map(monster => {
        const descriptionJson = JSON.parse(monster.node.description.raw);
        const description = descriptionJson.content[0].content[0].value;
        return (
          <div className={monsterSection}>
            <h2>{monster.node.name}</h2>
            <em>CR: {monster.node.cr}</em>
            <p>{description}</p>
          </div>
        )
      })
    }
    
    return (
      <div className={indexPage}>
        <h1>Monsters</h1>
        {renderMonsters()}
      </div>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulMonster {
      edges {
        node {
          id
          cr
          name
          description {
            raw
          }
        }
      }
    }
  }
`