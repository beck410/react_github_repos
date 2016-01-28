import React from 'react'

class RepoItem extends React.Component {
    formattedDate(dateVar) {
        var dateArray = dateVar.split('T');

        return dateArray[0];
    }

    render() {
        return (
            <li className="repo-li">
                <a href="{this.props.repo.html_url}" className="repo-name">{this.props.repo.name}</a>
                <div><b>created:</b> { this.formattedDate(this.props.repo.created_at) }</div>
                <div><b>forks:</b> {this.props.repo.forks_count}</div>
                <div><b>language:</b> {this.props.repo.language}</div>
                <div><b>open issues:</b> {this.props.repo.open_issues}</div>
                <div><b>watchers:</b> {this.props.repo.watchers_count}</div>
            </li>
        );
    }
}
