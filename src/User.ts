import { Repo } from "./Repo";

export class User {
    login: string;
    name: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[] = [];

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.name = userResponse.bio;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }

}