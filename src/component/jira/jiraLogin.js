import React from "react";
import SearchJira from "./SearchJira";
import config from "../../config";
import {JiraUserProvider} from '../../context/context';
class jiraLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      filterUser:""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleClose() {
    this.setState({ greeting: "" });
  }
  handleSubmit(event) {
    const url = this._name.value;
    const username = this.username.value;
    const password = this.password.value;
    const obj = {
      url: url,
      username: username,
      password: password,
    };

    fetch(config.jiraAuth, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((result) => result.json())
      .then((state) => {
        this.setState({ greeting: state.greeting });
        this.setState({ filterUser: username });
      });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        {this.state.greeting === "" || this.state.greeting === "error" ? (
          <div className="jira-login">
            <form onSubmit={this.handleSubmit}>
              <div className="jira-form">
                <label htmlFor="url" className="jira-label">
                  Enter your domain :{" "}
                </label>
                <input
                  id="url"
                  type="text"
                  className="jira-input"
                  placeholder="https://your-domain.atlassian.net"
                  ref={(input) => (this._name = input)}
                />
              </div>

              <div className="jira-form">
                <label htmlFor="name" className="jira-label">
                  Enter your register jira username :
                </label>
                <input
                  id="username"
                  type="text"
                  className="jira-input"
                  placeholder="example@xyz.com"
                  ref={(input) => (this.username = input)}
                />
              </div>
              <div className="jira-form">
                <label htmlFor="name" className="jira-label">
                  Enter your jira api token :
                  <a
                    href="https://id.atlassian.com/manage-profile/security/api-tokens"
                    data-toggle="tooltip"
                    className="jira-anchor"
                    title="click on it to genrate token"
                  >
                    !
                  </a>
                </label>
                <input
                  id="password"
                  type="password"
                  className="jira-input"
                  ref={(input) => (this.password = input)}
                />
              </div>
              <div className="jira-form">
                <button type="submit" className="jira-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        ) : (
          // <JiraUserProvider value={this.state.filterUser}>
           
          // </JiraUserProvider>
          <SearchJira userid={this.state.filterUser} />
        )}
      </div>
    );
  }
}
export default jiraLogin;
