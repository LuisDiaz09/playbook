let pullRequest = {
    title: "New pull request",
    branchName: "main",
    author: "luandiaz",
    dateCreated: "17/04/2022",
    status: "approved",
    repositoryNameAssociated: "MissionNodeJS",
    getStatus: function (){
        return `The status is ${this.status}`
    },
    getTitleAndAuthor: function (){
        return `This PR: " ${this.title} " was created by ${this.author}`
    }
}

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())