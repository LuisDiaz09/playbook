let issue = {
    title: "Unit_Testing",
    repositoryNameAssociated: 15,
    status: "solved",
    numberOfComments: 10,
    labels: "json",
    author: "luandiaz",
    dateCreated: "15/04/2022",
    lastUpdated:"17/04/2022",
    getTitleAndAuthor: function(){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `The status of the issue is ${this.status}, it was created on ${this.dateCreated}, and the last updated was ${this.lastUpdated} `
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())