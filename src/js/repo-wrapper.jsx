import React from 'react';

const githubUrl = 'https://api.github.com/users/beck410/repos';

class RepoWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {repos: props.repos};
        this.loadRepos();
    }

    getData(urlString, cb) {
        $.ajax({
            url: urlString
        }).done(function(data) {
            if(cb) {
                cb(data);
            }
        });
    }

    loadRepos() {
        this.getData(githubUrl, repos => {
            this.setState({ repos:  repos});
        });
    }


    render() {
        return (
            <div className="repo-wrapper">
                <h1>Github Repos</h1>
                <RepoList repos={this.state.repos} />
            </div>
        )
    }
}

RepoWrapper.propTypes = {
    repos: React.PropTypes.array
}

RepoWrapper.defaultProps = { repo: [] }

class RepoList extends React.Component {

    render() {
        var itemComponents = this.props.repos.map(function(repo, index){
            return <RepoItem className="repo-li" key={repo.id} repo={repo}/>
        })

        return (
            <ul>
                {itemComponents}
            </ul>
        )
    }
}

class RepoItem extends React.Component {

    removeRepo(idx) {
        debugger;
    }

    formattedDate(dateVar) {
        var dateArray = dateVar.split('T');

        return dateArray[0];
    }

    render() {
        return (
            <li className="repo-li">
                <a href={this.props.repo.html_url} className="repo-name">{this.props.repo.name}</a>
                <div><b>created:</b> { this.formattedDate(this.props.repo.created_at) }</div>
                <div><b>forks:</b> {this.props.repo.forks_count}</div>
                <div><b>language:</b> {this.props.repo.language}</div>
                <div><b>open issues:</b> {this.props.repo.open_issues}</div>
                <div><b>watchers:</b> {this.props.repo.watchers_count}</div>
                <span onClick={this.removeRepo.bind(this, this.props.key)} className="repo-remove">remove repo</span>
            </li>
        );
    }
}

RepoWrapper.propTypes = {
    repos: React.PropTypes.array.isRequired,
}

RepoWrapper.defaultProps = {
    repos: []
}

React.render(
    <RepoWrapper />,
    document.getElementById('github-repo-wrapper')
)
