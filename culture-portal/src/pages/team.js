import React from 'react'
import * as FontAwesome from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import './teamPageStyle.css'

import Layout from '../components/layout'

const TeamPage = () => (
  <Layout>
    <div className="container">
      <h2 className="text-center" style={{ marginBottom: `50px` }}>
        Наша замечательная команда
      </h2>
      <div className="row">
        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars0.githubusercontent.com/u/42998223?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">Денис Баранов</p>
          <a href="https://github.com/devbarden" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars2.githubusercontent.com/u/40957866?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">Виктор Родько</p>
          <a href="https://github.com/VicRodzko" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars3.githubusercontent.com/u/27624545?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">Дмитрий Коваленко</p>
          <a href="https://github.com/Heat98" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars2.githubusercontent.com/u/29536981?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">Владислав Соколов</p>
          <a href="https://github.com/sokol147" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars0.githubusercontent.com/u/22434682?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">Михаил Наконечный</p>
          <a
            href="https://github.com/mikhailnakanechny"
            className="icons-developer"
          >
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default TeamPage
