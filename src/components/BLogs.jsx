import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPdf from "./MyPdf";
import "../components/styles/root.css";

const Blogs = () => {
  return (
    <div>
      {
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl text-red-100 font-serif font-bold.">
              Question And Answering
            </h3>
          </div>
          <div className="max-w-7xl mx-auto mt-10">
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <h3>
                  Describe the differences between uncontrolled and controlled
                  components.
                </h3>
              </div>
              <div className="collapse-content ">
                <p tabIndex={0} className="px-8">
                  <strong className="text-2xl font-bold italic font-mono">
                    Control Component:
                  </strong>
                  A controlled component is a component that receives its state
                  and any necessary callbacks as props from its parent
                  component. This means that the parent component has complete
                  control over the state and behavior of the controlled
                  component. Examples of controlled components in React include
                  input elements that use the "value" attribute and onChange
                  callback, and form elements that use the "checked" attribute
                  and onChange callback.
                  <br />
                  <br />
                  <br />
                  <strong className="text-2xl font-bold italic font-mono">
                    Uncontrolled Component:
                  </strong>{" "}
                  On the other hand, An uncontrolled component is a component
                  that manages its own state internally, without any input or
                  control from its parent component. This means that the parent
                  component has no way of knowing or modifying the state of the
                  uncontrolled component. Examples of uncontrolled components in
                  React include input elements that use the "defaultValue"
                  attribute instead of the "value" attribute, and form elements
                  that use the "defaultChecked" attribute instead of the
                  "checked" attribute.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <h3>How to validate React props using PropTypes?</h3>
              </div>
              <div className="collapse-content ">
                <p tabIndex={0} className="px-8 text-lg py-3">
                  <strong className="text-2xl font-bold italic font-mono">
                    Here is some method to validate React prop by using
                    Proptypes:
                  </strong>{" "}
                </p>
                <div className="mt-3 px-12 space-y-4 ">
                  <li>
                    Install the prop-types package using a package manager like
                    npm or yarn.
                  </li>
                  <li>
                    Import the PropTypes module at the top of your React
                    component file.
                  </li>
                  <li>
                    Define the propTypes object as a static property of the
                    React component class, and specify the expected type and
                    other validation rules for each prop.
                  </li>
                  <li>
                    When the component is used, pass the props as an object to
                    the component, and React will automatically validate them
                    based on the propTypes definition.
                  </li>
                </div>
                <p className="px-8 text-lg py-3">
                  Using PropTypes to validate React props can help catch
                  potential bugs and improve the maintainability of React
                  components by clearly documenting the expected types and
                  validation rules for each prop.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <h3>Write down the difference between nodejs and express js</h3>
              </div>
              <div className="collapse-content ">
                <p tabIndex={0} className="px-8 py-3 text-lg tracking-wide">
                  <strong className="text-2xl font-bold italic font-mono">
                    Difference between node Js and React Js:
                  </strong>{" "}
                  <br />
                  Node.js is a runtime environment for executing JavaScript code
                  outside of a web browser. It uses the V8 JavaScript engine
                  from Google Chrome and allows developers to run JavaScript
                  code on the server-side. Express.js, on the other hand, is a
                  web application framework built on top of Node.js. Here are
                  some differences between Node.js and Express.js: <br /> <br />
                </p>
                <div className="mt-3 px-12 space-y-4 ">
                  <li>
                    Node.js provides a runtime environment for JavaScript, while
                    Express.js is a web application framework that uses Node.js
                    as its runtime environment.
                  </li>
                  <li>
                    Node.js allows developers to write server-side JavaScript
                    code that can interact with the file system, network, and
                    other system resources. Express.js provides a set of tools
                    and APIs for building web applications on top of Node.js,
                    such as routing, middleware, and HTTP request handling.
                  </li>
                  <li>
                    Node.js provides low-level APIs for working with HTTP
                    requests and responses, but it does not provide a high-level
                    abstraction for building web applications. Express.js
                    provides a higher-level abstraction for building web
                    applications, making it easier and faster to build complex
                    web applications.
                  </li>
                  <li>
                    Express.js is built on top of Node.js and provides a lot of
                    the same features, but it is more opinionated and provides
                    more structure and organization to web application
                    development.
                  </li>
                  <li>
                    Node.js can be used to build a wide range of applications,
                    not just web applications. Express.js is specifically
                    designed for building web applications and provides a lot of
                    functionality that is not necessary for other types of
                    applications.
                  </li>
                  <p className=" text-lg py-3">
                    Overall, Node.js is a runtime environment for JavaScript
                    code, while Express.js is a web application framework that
                    uses Node.js as its runtime environment and provides a set
                    of tools and APIs for building web applications. While they
                    are related, they serve different purposes and are used for
                    different types of projects.
                  </p>
                </div>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
              <div className="collapse-title text-xl font-medium">
                <h3>What is Custom hook?</h3>
              </div>
              <div className="collapse-content ">
                <p tabIndex={0} className="px-8 text-lg py-3">
                  <strong className="text-2xl font-bold italic font-mono">
                    Definition of Custom Hook:
                  </strong>{" "}
                  <br />A custom hook in React is a function that allows you to
                  encapsulate reusable logic and stateful behavior that can be
                  shared across multiple components. Custom hooks are used to
                  simplify and reduce the amount of code needed to manage
                  complex logic that is used in multiple places within a React
                  application. <br />
                  <br />
                  <strong className="text-2xl font-bold italic font-mono">
                    Some method of creating Custom Hook:
                  </strong>
                  <br />
                </p>
                <div className="mt-3 px-12 space-y-4 ">
                  <li>
                    <strong> Identify the shared logic:</strong> Look for any
                    common patterns or behaviors that are used across multiple
                    components in your application. For example, you might have
                    several components that need to fetch data from an API and
                    display it on the page.
                  </li>
                  <li>
                    <strong> Create a function:</strong> Write a JavaScript
                    function that contains the shared logic and returns the
                    necessary values. This function can be reused in multiple
                    components.
                  </li>
                  <li>
                    <strong> Add a hook prefix:</strong> Add the word "use" to
                    the beginning of the function name. This naming convention
                    is used in React to indicate that the function is a custom
                    hook.
                  </li>
                  <li>
                    <strong> Use React hooks:</strong> Use any of the built-in
                    React hooks that your custom hook may need, such as useState
                    or useEffect.
                  </li>
                  <li>
                    <strong> Export the custom hook:</strong> Export the custom
                    hook function from your module so that other components can
                    use it.
                  </li>
                  <p className=" text-lg py-3">
                    Creating custom hooks can help you encapsulate complex logic
                    or functionality in a reusable package, making it easier to
                    write and maintain code in your application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="text-center mt-8">
        <PDFDownloadLink
          className="btn-secondary "
          document={<MyPdf />}
          fileName="my-blogs-info.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Blogs;
