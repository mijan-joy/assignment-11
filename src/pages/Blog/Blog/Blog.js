import React from "react";
import { Accordion, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container vh-100">
      <Row>
        <div className="mt-5">
          <h2 className="my-5">Question and answer section</h2>
          <div>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    Difference between javascript and node js?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  1. Javascript is a programming language that is used for
                  writing scripts on the website where NodeJS is a Javascript
                  runtime environment.
                  <br />
                  2. Javascript can only be run in the browsers and we can run
                  Javascript outside the browser with the help of NodeJS.
                  <br />
                  3. It is basically used on the client-side and NodeJS mostly
                  used on the server-side. <br />
                  4. Javascript is capable enough to add HTML and play with the
                  DOM and Nodejs does not have capability to add HTML tags.
                  <br />
                  5. Some of the javascript frameworks are RamdaJS, TypedJS, etc
                  and some of the Nodejs modules are Lodash, express etc. These
                  modules are to be imported from npm.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    Differences between Sql and NoSql databases?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  1. Sql is a relational database management system (RDBMS) and
                  NoSql is a non-relational or distributed database system.
                  <br />
                  2. Sql databases have fixed or static or predefined schema and
                  NoSql have dynamic schema.
                  <br />
                  3. Sql databases are not suited for hierarchical data storage
                  on the other hand NoSql databases are best suited for
                  hierarchical data storage.
                  <br />
                  4. Sql database is Vertically Scalable and NoSql database is
                  Horizontally scalable.
                  <br />
                  5. Sql database follows ACID property and NoSql follows
                  CAP(consistency, availability, partition tolerance).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h5 className="p-0 m-0 text-danger">
                    When should you use nodejs and when should you use mongodb?
                  </h5>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    We should use Nodejs when any project needs a programming
                    environment and a runtime library that offers you basic
                    programming tools/support and can compile and/or interpret
                    your code. Nodejs is such as tool for the Javascript
                    programming language.
                  </p>
                  <p>
                    MongoDB is a database engine which should use MongoDB when
                    any application needs the ability to persistently store data
                    in a way that you can efficiently query or update it later,
                    then you would typically use some form of database. There
                    are dozens of popular databases. MongoDB is one such
                    database.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Blog;
