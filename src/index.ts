import { GithubApiService } from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let svc: GithubApiService = new GithubApiService();

console.log(process.argv[2]);

if (process.argv.length < 3) {
    console.log("必须传入用户名");
} else {
    svc.getUserInfo("CHENFANGC", (user: User) => {
        svc.getRepos(user.login, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repos: Repo) => repos.forks_count * -1])
            user.repos = repos;
            console.log(user);
        })
    });
}