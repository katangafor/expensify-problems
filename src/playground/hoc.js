import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private! Don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
   return (props) => (
     <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>gtfo you can't see this shit</p>
      )}
     </div>
   )
}


const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are some details" />, document.getElementById('app'));